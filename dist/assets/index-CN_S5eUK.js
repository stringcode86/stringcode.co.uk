function zy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var lf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Tw(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Hy={exports:{}},Ad={},Vy={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kl=Symbol.for("react.element"),Aw=Symbol.for("react.portal"),bw=Symbol.for("react.fragment"),Rw=Symbol.for("react.strict_mode"),Cw=Symbol.for("react.profiler"),Pw=Symbol.for("react.provider"),Lw=Symbol.for("react.context"),Iw=Symbol.for("react.forward_ref"),Dw=Symbol.for("react.suspense"),Nw=Symbol.for("react.memo"),Uw=Symbol.for("react.lazy"),ov=Symbol.iterator;function Ow(t){return t===null||typeof t!="object"?null:(t=ov&&t[ov]||t["@@iterator"],typeof t=="function"?t:null)}var Gy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wy=Object.assign,jy={};function Ma(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||Gy}Ma.prototype.isReactComponent={};Ma.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ma.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xy(){}Xy.prototype=Ma.prototype;function Tm(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||Gy}var Am=Tm.prototype=new Xy;Am.constructor=Tm;Wy(Am,Ma.prototype);Am.isPureReactComponent=!0;var av=Array.isArray,$y=Object.prototype.hasOwnProperty,bm={current:null},Yy={key:!0,ref:!0,__self:!0,__source:!0};function Ky(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$y.call(e,i)&&!Yy.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Kl,type:t,key:s,ref:o,props:r,_owner:bm.current}}function Fw(t,e){return{$$typeof:Kl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rm(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kl}function kw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lv=/\/+/g;function cf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?kw(""+t.key):e.toString(36)}function gu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Kl:case Aw:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+cf(o,0):i,av(r)?(n="",t!=null&&(n=t.replace(lv,"$&/")+"/"),gu(r,e,n,"",function(c){return c})):r!=null&&(Rm(r)&&(r=Fw(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lv,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",av(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+cf(s,a);o+=gu(s,e,n,l,r)}else if(l=Ow(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+cf(s,a++),o+=gu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hc(t,e,n){if(t==null)return t;var i=[],r=0;return gu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Bw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Hn={current:null},vu={transition:null},zw={ReactCurrentDispatcher:Hn,ReactCurrentBatchConfig:vu,ReactCurrentOwner:bm};function qy(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:hc,forEach:function(t,e,n){hc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hc(t,function(){e++}),e},toArray:function(t){return hc(t,function(e){return e})||[]},only:function(t){if(!Rm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=Ma;ot.Fragment=bw;ot.Profiler=Cw;ot.PureComponent=Tm;ot.StrictMode=Rw;ot.Suspense=Dw;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zw;ot.act=qy;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Wy({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bm.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$y.call(e,l)&&!Yy.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Kl,type:t.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(t){return t={$$typeof:Lw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Pw,_context:t},t.Consumer=t};ot.createElement=Ky;ot.createFactory=function(t){var e=Ky.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:Iw,render:t}};ot.isValidElement=Rm;ot.lazy=function(t){return{$$typeof:Uw,_payload:{_status:-1,_result:t},_init:Bw}};ot.memo=function(t,e){return{$$typeof:Nw,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=vu.transition;vu.transition={};try{t()}finally{vu.transition=e}};ot.unstable_act=qy;ot.useCallback=function(t,e){return Hn.current.useCallback(t,e)};ot.useContext=function(t){return Hn.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return Hn.current.useDeferredValue(t)};ot.useEffect=function(t,e){return Hn.current.useEffect(t,e)};ot.useId=function(){return Hn.current.useId()};ot.useImperativeHandle=function(t,e,n){return Hn.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return Hn.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return Hn.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return Hn.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return Hn.current.useReducer(t,e,n)};ot.useRef=function(t){return Hn.current.useRef(t)};ot.useState=function(t){return Hn.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return Hn.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return Hn.current.useTransition()};ot.version="18.3.1";Vy.exports=ot;var he=Vy.exports;const qo=wm(he),Hw=zy({__proto__:null,default:qo},[he]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vw=he,Gw=Symbol.for("react.element"),Ww=Symbol.for("react.fragment"),jw=Object.prototype.hasOwnProperty,Xw=Vw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$w={key:!0,ref:!0,__self:!0,__source:!0};function Qy(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)jw.call(e,i)&&!$w.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Gw,type:t,key:s,ref:o,props:r,_owner:Xw.current}}Ad.Fragment=Ww;Ad.jsx=Qy;Ad.jsxs=Qy;Hy.exports=Ad;var Y=Hy.exports,Zy={exports:{}},di={},Jy={exports:{}},ex={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,j){var Q=F.length;F.push(j);e:for(;0<Q;){var ue=Q-1>>>1,Ee=F[ue];if(0<r(Ee,j))F[ue]=j,F[Q]=Ee,Q=ue;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var j=F[0],Q=F.pop();if(Q!==j){F[0]=Q;e:for(var ue=0,Ee=F.length,je=Ee>>>1;ue<je;){var $=2*(ue+1)-1,oe=F[$],fe=$+1,pe=F[fe];if(0>r(oe,Q))fe<Ee&&0>r(pe,oe)?(F[ue]=pe,F[fe]=Q,ue=fe):(F[ue]=oe,F[$]=Q,ue=$);else if(fe<Ee&&0>r(pe,Q))F[ue]=pe,F[fe]=Q,ue=fe;else break e}}return j}function r(F,j){var Q=F.sortIndex-j.sortIndex;return Q!==0?Q:F.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=F)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function x(F){if(v=!1,y(F),!g)if(n(l)!==null)g=!0,K(R);else{var j=n(c);j!==null&&se(x,j.startTime-F)}}function R(F,j){g=!1,v&&(v=!1,h(w),w=-1),p=!0;var Q=f;try{for(y(j),d=n(l);d!==null&&(!(d.expirationTime>j)||F&&!L());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,f=d.priorityLevel;var Ee=ue(d.expirationTime<=j);j=t.unstable_now(),typeof Ee=="function"?d.callback=Ee:d===n(l)&&i(l),y(j)}else i(l);d=n(l)}if(d!==null)var je=!0;else{var $=n(c);$!==null&&se(x,$.startTime-j),je=!1}return je}finally{d=null,f=Q,p=!1}}var A=!1,b=null,w=-1,T=5,S=-1;function L(){return!(t.unstable_now()-S<T)}function W(){if(b!==null){var F=t.unstable_now();S=F;var j=!0;try{j=b(!0,F)}finally{j?H():(A=!1,b=null)}}else A=!1}var H;if(typeof _=="function")H=function(){_(W)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,J=X.port2;X.port1.onmessage=W,H=function(){J.postMessage(null)}}else H=function(){m(W,0)};function K(F){b=F,A||(A=!0,H())}function se(F,j){w=m(function(){F(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,K(R))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var Q=f;f=j;try{return F()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=f;f=F;try{return j()}finally{f=Q}},t.unstable_scheduleCallback=function(F,j,Q){var ue=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ue+Q:ue):Q=ue,F){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Q+Ee,F={id:u++,callback:j,priorityLevel:F,startTime:Q,expirationTime:Ee,sortIndex:-1},Q>ue?(F.sortIndex=Q,e(c,F),n(l)===null&&F===n(c)&&(v?(h(w),w=-1):v=!0,se(x,Q-ue))):(F.sortIndex=Ee,e(l,F),g||p||(g=!0,K(R))),F},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(F){var j=f;return function(){var Q=f;f=j;try{return F.apply(this,arguments)}finally{f=Q}}}})(ex);Jy.exports=ex;var Yw=Jy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kw=he,ui=Yw;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tx=new Set,wl={};function Ys(t,e){Qo(t,e),Qo(t+"Capture",e)}function Qo(t,e){for(wl[t]=e,t=0;t<e.length;t++)tx.add(e[t])}var Er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ph=Object.prototype.hasOwnProperty,qw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cv={},uv={};function Qw(t){return Ph.call(uv,t)?!0:Ph.call(cv,t)?!1:qw.test(t)?uv[t]=!0:(cv[t]=!0,!1)}function Zw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jw(t,e,n,i){if(e===null||typeof e>"u"||Zw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var _n={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_n[t]=new Vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];_n[e]=new Vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){_n[t]=new Vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_n[t]=new Vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_n[t]=new Vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){_n[t]=new Vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){_n[t]=new Vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){_n[t]=new Vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){_n[t]=new Vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cm=/[\-:]([a-z])/g;function Pm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cm,Pm);_n[e]=new Vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cm,Pm);_n[e]=new Vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cm,Pm);_n[e]=new Vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){_n[t]=new Vn(t,1,!1,t.toLowerCase(),null,!1,!1)});_n.xlinkHref=new Vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){_n[t]=new Vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lm(t,e,n,i){var r=_n.hasOwnProperty(e)?_n[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jw(e,n,r,i)&&(n=null),i||r===null?Qw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Cr=Kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pc=Symbol.for("react.element"),Eo=Symbol.for("react.portal"),wo=Symbol.for("react.fragment"),Im=Symbol.for("react.strict_mode"),Lh=Symbol.for("react.profiler"),nx=Symbol.for("react.provider"),ix=Symbol.for("react.context"),Dm=Symbol.for("react.forward_ref"),Ih=Symbol.for("react.suspense"),Dh=Symbol.for("react.suspense_list"),Nm=Symbol.for("react.memo"),Hr=Symbol.for("react.lazy"),rx=Symbol.for("react.offscreen"),dv=Symbol.iterator;function Da(t){return t===null||typeof t!="object"?null:(t=dv&&t[dv]||t["@@iterator"],typeof t=="function"?t:null)}var Ft=Object.assign,uf;function nl(t){if(uf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uf=e&&e[1]||""}return`
`+uf+t}var df=!1;function ff(t,e){if(!t||df)return"";df=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{df=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?nl(t):""}function eT(t){switch(t.tag){case 5:return nl(t.type);case 16:return nl("Lazy");case 13:return nl("Suspense");case 19:return nl("SuspenseList");case 0:case 2:case 15:return t=ff(t.type,!1),t;case 11:return t=ff(t.type.render,!1),t;case 1:return t=ff(t.type,!0),t;default:return""}}function Nh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wo:return"Fragment";case Eo:return"Portal";case Lh:return"Profiler";case Im:return"StrictMode";case Ih:return"Suspense";case Dh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ix:return(t.displayName||"Context")+".Consumer";case nx:return(t._context.displayName||"Context")+".Provider";case Dm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nm:return e=t.displayName||null,e!==null?e:Nh(t.type)||"Memo";case Hr:e=t._payload,t=t._init;try{return Nh(t(e))}catch{}}return null}function tT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nh(e);case 8:return e===Im?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function os(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nT(t){var e=sx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mc(t){t._valueTracker||(t._valueTracker=nT(t))}function ox(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=sx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uh(t,e){var n=e.checked;return Ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fv(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=os(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ax(t,e){e=e.checked,e!=null&&Lm(t,"checked",e,!1)}function Oh(t,e){ax(t,e);var n=os(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fh(t,e.type,os(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fh(t,e,n){(e!=="number"||Vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var il=Array.isArray;function ko(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+os(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function kh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(il(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:os(n)}}function lx(t,e){var n=os(e.value),i=os(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function mv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gc,ux=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gc=gc||document.createElement("div"),gc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iT=["Webkit","ms","Moz","O"];Object.keys(fl).forEach(function(t){iT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fl[e]=fl[t]})});function dx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fl.hasOwnProperty(t)&&fl[t]?(""+e).trim():e+"px"}function fx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=dx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var rT=Ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zh(t,e){if(e){if(rT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Hh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vh=null;function Um(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gh=null,Bo=null,zo=null;function gv(t){if(t=Zl(t)){if(typeof Gh!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Ld(e),Gh(t.stateNode,t.type,e))}}function hx(t){Bo?zo?zo.push(t):zo=[t]:Bo=t}function px(){if(Bo){var t=Bo,e=zo;if(zo=Bo=null,gv(t),e)for(t=0;t<e.length;t++)gv(e[t])}}function mx(t,e){return t(e)}function gx(){}var hf=!1;function vx(t,e,n){if(hf)return t(e,n);hf=!0;try{return mx(t,e,n)}finally{hf=!1,(Bo!==null||zo!==null)&&(gx(),px())}}function Al(t,e){var n=t.stateNode;if(n===null)return null;var i=Ld(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var Wh=!1;if(Er)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Wh=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{Wh=!1}function sT(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var hl=!1,Gu=null,Wu=!1,jh=null,oT={onError:function(t){hl=!0,Gu=t}};function aT(t,e,n,i,r,s,o,a,l){hl=!1,Gu=null,sT.apply(oT,arguments)}function lT(t,e,n,i,r,s,o,a,l){if(aT.apply(this,arguments),hl){if(hl){var c=Gu;hl=!1,Gu=null}else throw Error(ce(198));Wu||(Wu=!0,jh=c)}}function Ks(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _x(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vv(t){if(Ks(t)!==t)throw Error(ce(188))}function cT(t){var e=t.alternate;if(!e){if(e=Ks(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vv(r),t;if(s===i)return vv(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function yx(t){return t=cT(t),t!==null?xx(t):null}function xx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=xx(t);if(e!==null)return e;t=t.sibling}return null}var Sx=ui.unstable_scheduleCallback,_v=ui.unstable_cancelCallback,uT=ui.unstable_shouldYield,dT=ui.unstable_requestPaint,Wt=ui.unstable_now,fT=ui.unstable_getCurrentPriorityLevel,Om=ui.unstable_ImmediatePriority,Mx=ui.unstable_UserBlockingPriority,ju=ui.unstable_NormalPriority,hT=ui.unstable_LowPriority,Ex=ui.unstable_IdlePriority,bd=null,Zi=null;function pT(t){if(Zi&&typeof Zi.onCommitFiberRoot=="function")try{Zi.onCommitFiberRoot(bd,t,void 0,(t.current.flags&128)===128)}catch{}}var ki=Math.clz32?Math.clz32:vT,mT=Math.log,gT=Math.LN2;function vT(t){return t>>>=0,t===0?32:31-(mT(t)/gT|0)|0}var vc=64,_c=4194304;function rl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=rl(a):(s&=o,s!==0&&(i=rl(s)))}else o=n&~r,o!==0?i=rl(o):s!==0&&(i=rl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ki(e),r=1<<n,i|=t[n],e&=~r;return i}function _T(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ki(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=_T(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Xh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wx(){var t=vc;return vc<<=1,!(vc&4194240)&&(vc=64),t}function pf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ql(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ki(e),t[e]=n}function xT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ki(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Fm(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ki(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var yt=0;function Tx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ax,km,bx,Rx,Cx,$h=!1,yc=[],Qr=null,Zr=null,Jr=null,bl=new Map,Rl=new Map,Gr=[],ST="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yv(t,e){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Zr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":bl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(e.pointerId)}}function Ua(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Zl(e),e!==null&&km(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function MT(t,e,n,i,r){switch(e){case"focusin":return Qr=Ua(Qr,t,e,n,i,r),!0;case"dragenter":return Zr=Ua(Zr,t,e,n,i,r),!0;case"mouseover":return Jr=Ua(Jr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return bl.set(s,Ua(bl.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Rl.set(s,Ua(Rl.get(s)||null,t,e,n,i,r)),!0}return!1}function Px(t){var e=Cs(t.target);if(e!==null){var n=Ks(e);if(n!==null){if(e=n.tag,e===13){if(e=_x(n),e!==null){t.blockedOn=e,Cx(t.priority,function(){bx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _u(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Vh=i,n.target.dispatchEvent(i),Vh=null}else return e=Zl(n),e!==null&&km(e),t.blockedOn=n,!1;e.shift()}return!0}function xv(t,e,n){_u(t)&&n.delete(e)}function ET(){$h=!1,Qr!==null&&_u(Qr)&&(Qr=null),Zr!==null&&_u(Zr)&&(Zr=null),Jr!==null&&_u(Jr)&&(Jr=null),bl.forEach(xv),Rl.forEach(xv)}function Oa(t,e){t.blockedOn===e&&(t.blockedOn=null,$h||($h=!0,ui.unstable_scheduleCallback(ui.unstable_NormalPriority,ET)))}function Cl(t){function e(r){return Oa(r,t)}if(0<yc.length){Oa(yc[0],t);for(var n=1;n<yc.length;n++){var i=yc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qr!==null&&Oa(Qr,t),Zr!==null&&Oa(Zr,t),Jr!==null&&Oa(Jr,t),bl.forEach(e),Rl.forEach(e),n=0;n<Gr.length;n++)i=Gr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Gr.length&&(n=Gr[0],n.blockedOn===null);)Px(n),n.blockedOn===null&&Gr.shift()}var Ho=Cr.ReactCurrentBatchConfig,$u=!0;function wT(t,e,n,i){var r=yt,s=Ho.transition;Ho.transition=null;try{yt=1,Bm(t,e,n,i)}finally{yt=r,Ho.transition=s}}function TT(t,e,n,i){var r=yt,s=Ho.transition;Ho.transition=null;try{yt=4,Bm(t,e,n,i)}finally{yt=r,Ho.transition=s}}function Bm(t,e,n,i){if($u){var r=Yh(t,e,n,i);if(r===null)wf(t,e,i,Yu,n),yv(t,i);else if(MT(r,t,e,n,i))i.stopPropagation();else if(yv(t,i),e&4&&-1<ST.indexOf(t)){for(;r!==null;){var s=Zl(r);if(s!==null&&Ax(s),s=Yh(t,e,n,i),s===null&&wf(t,e,i,Yu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else wf(t,e,i,null,n)}}var Yu=null;function Yh(t,e,n,i){if(Yu=null,t=Um(i),t=Cs(t),t!==null)if(e=Ks(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_x(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yu=t,null}function Lx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fT()){case Om:return 1;case Mx:return 4;case ju:case hT:return 16;case Ex:return 536870912;default:return 16}default:return 16}}var Xr=null,zm=null,yu=null;function Ix(){if(yu)return yu;var t,e=zm,n=e.length,i,r="value"in Xr?Xr.value:Xr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return yu=r.slice(t,1<i?1-i:void 0)}function xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xc(){return!0}function Sv(){return!1}function fi(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xc:Sv,this.isPropagationStopped=Sv,this}return Ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),e}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hm=fi(Ea),Ql=Ft({},Ea,{view:0,detail:0}),AT=fi(Ql),mf,gf,Fa,Rd=Ft({},Ql,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?(mf=t.screenX-Fa.screenX,gf=t.screenY-Fa.screenY):gf=mf=0,Fa=t),mf)},movementY:function(t){return"movementY"in t?t.movementY:gf}}),Mv=fi(Rd),bT=Ft({},Rd,{dataTransfer:0}),RT=fi(bT),CT=Ft({},Ql,{relatedTarget:0}),vf=fi(CT),PT=Ft({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),LT=fi(PT),IT=Ft({},Ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DT=fi(IT),NT=Ft({},Ea,{data:0}),Ev=fi(NT),UT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FT[t])?!!e[t]:!1}function Vm(){return kT}var BT=Ft({},Ql,{key:function(t){if(t.key){var e=UT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?OT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vm,charCode:function(t){return t.type==="keypress"?xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zT=fi(BT),HT=Ft({},Rd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wv=fi(HT),VT=Ft({},Ql,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vm}),GT=fi(VT),WT=Ft({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),jT=fi(WT),XT=Ft({},Rd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$T=fi(XT),YT=[9,13,27,32],Gm=Er&&"CompositionEvent"in window,pl=null;Er&&"documentMode"in document&&(pl=document.documentMode);var KT=Er&&"TextEvent"in window&&!pl,Dx=Er&&(!Gm||pl&&8<pl&&11>=pl),Tv=" ",Av=!1;function Nx(t,e){switch(t){case"keyup":return YT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ux(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var To=!1;function qT(t,e){switch(t){case"compositionend":return Ux(e);case"keypress":return e.which!==32?null:(Av=!0,Tv);case"textInput":return t=e.data,t===Tv&&Av?null:t;default:return null}}function QT(t,e){if(To)return t==="compositionend"||!Gm&&Nx(t,e)?(t=Ix(),yu=zm=Xr=null,To=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dx&&e.locale!=="ko"?null:e.data;default:return null}}var ZT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZT[t.type]:e==="textarea"}function Ox(t,e,n,i){hx(i),e=Ku(e,"onChange"),0<e.length&&(n=new Hm("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ml=null,Pl=null;function JT(t){$x(t,0)}function Cd(t){var e=Ro(t);if(ox(e))return t}function e1(t,e){if(t==="change")return e}var Fx=!1;if(Er){var _f;if(Er){var yf="oninput"in document;if(!yf){var Rv=document.createElement("div");Rv.setAttribute("oninput","return;"),yf=typeof Rv.oninput=="function"}_f=yf}else _f=!1;Fx=_f&&(!document.documentMode||9<document.documentMode)}function Cv(){ml&&(ml.detachEvent("onpropertychange",kx),Pl=ml=null)}function kx(t){if(t.propertyName==="value"&&Cd(Pl)){var e=[];Ox(e,Pl,t,Um(t)),vx(JT,e)}}function t1(t,e,n){t==="focusin"?(Cv(),ml=e,Pl=n,ml.attachEvent("onpropertychange",kx)):t==="focusout"&&Cv()}function n1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cd(Pl)}function i1(t,e){if(t==="click")return Cd(e)}function r1(t,e){if(t==="input"||t==="change")return Cd(e)}function s1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gi=typeof Object.is=="function"?Object.is:s1;function Ll(t,e){if(Gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ph.call(e,r)||!Gi(t[r],e[r]))return!1}return!0}function Pv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lv(t,e){var n=Pv(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pv(n)}}function Bx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zx(){for(var t=window,e=Vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vu(t.document)}return e}function Wm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o1(t){var e=zx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bx(n.ownerDocument.documentElement,n)){if(i!==null&&Wm(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lv(n,s);var o=Lv(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var a1=Er&&"documentMode"in document&&11>=document.documentMode,Ao=null,Kh=null,gl=null,qh=!1;function Iv(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qh||Ao==null||Ao!==Vu(i)||(i=Ao,"selectionStart"in i&&Wm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gl&&Ll(gl,i)||(gl=i,i=Ku(Kh,"onSelect"),0<i.length&&(e=new Hm("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ao)))}function Sc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bo={animationend:Sc("Animation","AnimationEnd"),animationiteration:Sc("Animation","AnimationIteration"),animationstart:Sc("Animation","AnimationStart"),transitionend:Sc("Transition","TransitionEnd")},xf={},Hx={};Er&&(Hx=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function Pd(t){if(xf[t])return xf[t];if(!bo[t])return t;var e=bo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hx)return xf[t]=e[n];return t}var Vx=Pd("animationend"),Gx=Pd("animationiteration"),Wx=Pd("animationstart"),jx=Pd("transitionend"),Xx=new Map,Dv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ls(t,e){Xx.set(t,e),Ys(e,[t])}for(var Sf=0;Sf<Dv.length;Sf++){var Mf=Dv[Sf],l1=Mf.toLowerCase(),c1=Mf[0].toUpperCase()+Mf.slice(1);ls(l1,"on"+c1)}ls(Vx,"onAnimationEnd");ls(Gx,"onAnimationIteration");ls(Wx,"onAnimationStart");ls("dblclick","onDoubleClick");ls("focusin","onFocus");ls("focusout","onBlur");ls(jx,"onTransitionEnd");Qo("onMouseEnter",["mouseout","mouseover"]);Qo("onMouseLeave",["mouseout","mouseover"]);Qo("onPointerEnter",["pointerout","pointerover"]);Qo("onPointerLeave",["pointerout","pointerover"]);Ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u1=new Set("cancel close invalid load scroll toggle".split(" ").concat(sl));function Nv(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,lT(i,e,void 0,t),t.currentTarget=null}function $x(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Nv(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Nv(r,a,c),s=l}}}if(Wu)throw t=jh,Wu=!1,jh=null,t}function bt(t,e){var n=e[tp];n===void 0&&(n=e[tp]=new Set);var i=t+"__bubble";n.has(i)||(Yx(e,t,2,!1),n.add(i))}function Ef(t,e,n){var i=0;e&&(i|=4),Yx(n,t,i,e)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function Il(t){if(!t[Mc]){t[Mc]=!0,tx.forEach(function(n){n!=="selectionchange"&&(u1.has(n)||Ef(n,!1,t),Ef(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mc]||(e[Mc]=!0,Ef("selectionchange",!1,e))}}function Yx(t,e,n,i){switch(Lx(e)){case 1:var r=wT;break;case 4:r=TT;break;default:r=Bm}n=r.bind(null,e,n,t),r=void 0,!Wh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function wf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Cs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}vx(function(){var c=s,u=Um(n),d=[];e:{var f=Xx.get(t);if(f!==void 0){var p=Hm,g=t;switch(t){case"keypress":if(xu(n)===0)break e;case"keydown":case"keyup":p=zT;break;case"focusin":g="focus",p=vf;break;case"focusout":g="blur",p=vf;break;case"beforeblur":case"afterblur":p=vf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=RT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GT;break;case Vx:case Gx:case Wx:p=LT;break;case jx:p=jT;break;case"scroll":p=AT;break;case"wheel":p=$T;break;case"copy":case"cut":case"paste":p=DT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wv}var v=(e&4)!==0,m=!v&&t==="scroll",h=v?f!==null?f+"Capture":null:f;v=[];for(var _=c,y;_!==null;){y=_;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=Al(_,h),x!=null&&v.push(Dl(_,x,y)))),m)break;_=_.return}0<v.length&&(f=new p(f,g,null,n,u),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Vh&&(g=n.relatedTarget||n.fromElement)&&(Cs(g)||g[wr]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Cs(g):null,g!==null&&(m=Ks(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=Mv,x="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=wv,x="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?f:Ro(p),y=g==null?f:Ro(g),f=new v(x,_+"leave",p,n,u),f.target=m,f.relatedTarget=y,x=null,Cs(u)===c&&(v=new v(h,_+"enter",g,n,u),v.target=y,v.relatedTarget=m,x=v),m=x,p&&g)t:{for(v=p,h=g,_=0,y=v;y;y=Zs(y))_++;for(y=0,x=h;x;x=Zs(x))y++;for(;0<_-y;)v=Zs(v),_--;for(;0<y-_;)h=Zs(h),y--;for(;_--;){if(v===h||h!==null&&v===h.alternate)break t;v=Zs(v),h=Zs(h)}v=null}else v=null;p!==null&&Uv(d,f,p,v,!1),g!==null&&m!==null&&Uv(d,m,g,v,!0)}}e:{if(f=c?Ro(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=e1;else if(bv(f))if(Fx)R=r1;else{R=n1;var A=t1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=i1);if(R&&(R=R(t,c))){Ox(d,R,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Fh(f,"number",f.value)}switch(A=c?Ro(c):window,t){case"focusin":(bv(A)||A.contentEditable==="true")&&(Ao=A,Kh=c,gl=null);break;case"focusout":gl=Kh=Ao=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,Iv(d,n,u);break;case"selectionchange":if(a1)break;case"keydown":case"keyup":Iv(d,n,u)}var b;if(Gm)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else To?Nx(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Dx&&n.locale!=="ko"&&(To||w!=="onCompositionStart"?w==="onCompositionEnd"&&To&&(b=Ix()):(Xr=u,zm="value"in Xr?Xr.value:Xr.textContent,To=!0)),A=Ku(c,w),0<A.length&&(w=new Ev(w,t,null,n,u),d.push({event:w,listeners:A}),b?w.data=b:(b=Ux(n),b!==null&&(w.data=b)))),(b=KT?qT(t,n):QT(t,n))&&(c=Ku(c,"onBeforeInput"),0<c.length&&(u=new Ev("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=b))}$x(d,e)})}function Dl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ku(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Al(t,n),s!=null&&i.unshift(Dl(t,s,r)),s=Al(t,e),s!=null&&i.push(Dl(t,s,r))),t=t.return}return i}function Zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uv(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Al(n,s),l!=null&&o.unshift(Dl(n,l,a))):r||(l=Al(n,s),l!=null&&o.push(Dl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var d1=/\r\n?/g,f1=/\u0000|\uFFFD/g;function Ov(t){return(typeof t=="string"?t:""+t).replace(d1,`
`).replace(f1,"")}function Ec(t,e,n){if(e=Ov(e),Ov(t)!==e&&n)throw Error(ce(425))}function qu(){}var Qh=null,Zh=null;function Jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ep=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,Fv=typeof Promise=="function"?Promise:void 0,p1=typeof queueMicrotask=="function"?queueMicrotask:typeof Fv<"u"?function(t){return Fv.resolve(null).then(t).catch(m1)}:ep;function m1(t){setTimeout(function(){throw t})}function Tf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Cl(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Cl(e)}function es(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wa=Math.random().toString(36).slice(2),Ki="__reactFiber$"+wa,Nl="__reactProps$"+wa,wr="__reactContainer$"+wa,tp="__reactEvents$"+wa,g1="__reactListeners$"+wa,v1="__reactHandles$"+wa;function Cs(t){var e=t[Ki];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[Ki]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kv(t);t!==null;){if(n=t[Ki])return n;t=kv(t)}return e}t=n,n=t.parentNode}return null}function Zl(t){return t=t[Ki]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ro(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Ld(t){return t[Nl]||null}var np=[],Co=-1;function cs(t){return{current:t}}function Ct(t){0>Co||(t.current=np[Co],np[Co]=null,Co--)}function Tt(t,e){Co++,np[Co]=t.current,t.current=e}var as={},bn=cs(as),Kn=cs(!1),Hs=as;function Zo(t,e){var n=t.type.contextTypes;if(!n)return as;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function qn(t){return t=t.childContextTypes,t!=null}function Qu(){Ct(Kn),Ct(bn)}function Bv(t,e,n){if(bn.current!==as)throw Error(ce(168));Tt(bn,e),Tt(Kn,n)}function Kx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,tT(t)||"Unknown",r));return Ft({},n,i)}function Zu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||as,Hs=bn.current,Tt(bn,t),Tt(Kn,Kn.current),!0}function zv(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Kx(t,e,Hs),i.__reactInternalMemoizedMergedChildContext=t,Ct(Kn),Ct(bn),Tt(bn,t)):Ct(Kn),Tt(Kn,n)}var pr=null,Id=!1,Af=!1;function qx(t){pr===null?pr=[t]:pr.push(t)}function _1(t){Id=!0,qx(t)}function us(){if(!Af&&pr!==null){Af=!0;var t=0,e=yt;try{var n=pr;for(yt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}pr=null,Id=!1}catch(r){throw pr!==null&&(pr=pr.slice(t+1)),Sx(Om,us),r}finally{yt=e,Af=!1}}return null}var Po=[],Lo=0,Ju=null,ed=0,vi=[],_i=0,Vs=null,mr=1,gr="";function Ms(t,e){Po[Lo++]=ed,Po[Lo++]=Ju,Ju=t,ed=e}function Qx(t,e,n){vi[_i++]=mr,vi[_i++]=gr,vi[_i++]=Vs,Vs=t;var i=mr;t=gr;var r=32-ki(i)-1;i&=~(1<<r),n+=1;var s=32-ki(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,mr=1<<32-ki(e)+r|n<<r|i,gr=s+t}else mr=1<<s|n<<r|i,gr=t}function jm(t){t.return!==null&&(Ms(t,1),Qx(t,1,0))}function Xm(t){for(;t===Ju;)Ju=Po[--Lo],Po[Lo]=null,ed=Po[--Lo],Po[Lo]=null;for(;t===Vs;)Vs=vi[--_i],vi[_i]=null,gr=vi[--_i],vi[_i]=null,mr=vi[--_i],vi[_i]=null}var ci=null,ai=null,Lt=!1,Ni=null;function Zx(t,e){var n=yi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ci=t,ai=es(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ci=t,ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vs!==null?{id:mr,overflow:gr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ci=t,ai=null,!0):!1;default:return!1}}function ip(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rp(t){if(Lt){var e=ai;if(e){var n=e;if(!Hv(t,e)){if(ip(t))throw Error(ce(418));e=es(n.nextSibling);var i=ci;e&&Hv(t,e)?Zx(i,n):(t.flags=t.flags&-4097|2,Lt=!1,ci=t)}}else{if(ip(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Lt=!1,ci=t}}}function Vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ci=t}function wc(t){if(t!==ci)return!1;if(!Lt)return Vv(t),Lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jh(t.type,t.memoizedProps)),e&&(e=ai)){if(ip(t))throw Jx(),Error(ce(418));for(;e;)Zx(t,e),e=es(e.nextSibling)}if(Vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){ai=es(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}ai=null}}else ai=ci?es(t.stateNode.nextSibling):null;return!0}function Jx(){for(var t=ai;t;)t=es(t.nextSibling)}function Jo(){ai=ci=null,Lt=!1}function $m(t){Ni===null?Ni=[t]:Ni.push(t)}var y1=Cr.ReactCurrentBatchConfig;function ka(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function Tc(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gv(t){var e=t._init;return e(t._payload)}function eS(t){function e(h,_){if(t){var y=h.deletions;y===null?(h.deletions=[_],h.flags|=16):y.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=rs(h,_),h.index=0,h.sibling=null,h}function s(h,_,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<_?(h.flags|=2,_):y):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,y,x){return _===null||_.tag!==6?(_=Df(y,h.mode,x),_.return=h,_):(_=r(_,y),_.return=h,_)}function l(h,_,y,x){var R=y.type;return R===wo?u(h,_,y.props.children,x,y.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Hr&&Gv(R)===_.type)?(x=r(_,y.props),x.ref=ka(h,_,y),x.return=h,x):(x=bu(y.type,y.key,y.props,null,h.mode,x),x.ref=ka(h,_,y),x.return=h,x)}function c(h,_,y,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Nf(y,h.mode,x),_.return=h,_):(_=r(_,y.children||[]),_.return=h,_)}function u(h,_,y,x,R){return _===null||_.tag!==7?(_=Os(y,h.mode,x,R),_.return=h,_):(_=r(_,y),_.return=h,_)}function d(h,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Df(""+_,h.mode,y),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case pc:return y=bu(_.type,_.key,_.props,null,h.mode,y),y.ref=ka(h,null,_),y.return=h,y;case Eo:return _=Nf(_,h.mode,y),_.return=h,_;case Hr:var x=_._init;return d(h,x(_._payload),y)}if(il(_)||Da(_))return _=Os(_,h.mode,y,null),_.return=h,_;Tc(h,_)}return null}function f(h,_,y,x){var R=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return R!==null?null:a(h,_,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pc:return y.key===R?l(h,_,y,x):null;case Eo:return y.key===R?c(h,_,y,x):null;case Hr:return R=y._init,f(h,_,R(y._payload),x)}if(il(y)||Da(y))return R!==null?null:u(h,_,y,x,null);Tc(h,y)}return null}function p(h,_,y,x,R){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(_,h,""+x,R);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pc:return h=h.get(x.key===null?y:x.key)||null,l(_,h,x,R);case Eo:return h=h.get(x.key===null?y:x.key)||null,c(_,h,x,R);case Hr:var A=x._init;return p(h,_,y,A(x._payload),R)}if(il(x)||Da(x))return h=h.get(y)||null,u(_,h,x,R,null);Tc(_,x)}return null}function g(h,_,y,x){for(var R=null,A=null,b=_,w=_=0,T=null;b!==null&&w<y.length;w++){b.index>w?(T=b,b=null):T=b.sibling;var S=f(h,b,y[w],x);if(S===null){b===null&&(b=T);break}t&&b&&S.alternate===null&&e(h,b),_=s(S,_,w),A===null?R=S:A.sibling=S,A=S,b=T}if(w===y.length)return n(h,b),Lt&&Ms(h,w),R;if(b===null){for(;w<y.length;w++)b=d(h,y[w],x),b!==null&&(_=s(b,_,w),A===null?R=b:A.sibling=b,A=b);return Lt&&Ms(h,w),R}for(b=i(h,b);w<y.length;w++)T=p(b,h,w,y[w],x),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?w:T.key),_=s(T,_,w),A===null?R=T:A.sibling=T,A=T);return t&&b.forEach(function(L){return e(h,L)}),Lt&&Ms(h,w),R}function v(h,_,y,x){var R=Da(y);if(typeof R!="function")throw Error(ce(150));if(y=R.call(y),y==null)throw Error(ce(151));for(var A=R=null,b=_,w=_=0,T=null,S=y.next();b!==null&&!S.done;w++,S=y.next()){b.index>w?(T=b,b=null):T=b.sibling;var L=f(h,b,S.value,x);if(L===null){b===null&&(b=T);break}t&&b&&L.alternate===null&&e(h,b),_=s(L,_,w),A===null?R=L:A.sibling=L,A=L,b=T}if(S.done)return n(h,b),Lt&&Ms(h,w),R;if(b===null){for(;!S.done;w++,S=y.next())S=d(h,S.value,x),S!==null&&(_=s(S,_,w),A===null?R=S:A.sibling=S,A=S);return Lt&&Ms(h,w),R}for(b=i(h,b);!S.done;w++,S=y.next())S=p(b,h,w,S.value,x),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?w:S.key),_=s(S,_,w),A===null?R=S:A.sibling=S,A=S);return t&&b.forEach(function(W){return e(h,W)}),Lt&&Ms(h,w),R}function m(h,_,y,x){if(typeof y=="object"&&y!==null&&y.type===wo&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case pc:e:{for(var R=y.key,A=_;A!==null;){if(A.key===R){if(R=y.type,R===wo){if(A.tag===7){n(h,A.sibling),_=r(A,y.props.children),_.return=h,h=_;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Hr&&Gv(R)===A.type){n(h,A.sibling),_=r(A,y.props),_.ref=ka(h,A,y),_.return=h,h=_;break e}n(h,A);break}else e(h,A);A=A.sibling}y.type===wo?(_=Os(y.props.children,h.mode,x,y.key),_.return=h,h=_):(x=bu(y.type,y.key,y.props,null,h.mode,x),x.ref=ka(h,_,y),x.return=h,h=x)}return o(h);case Eo:e:{for(A=y.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(h,_.sibling),_=r(_,y.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=Nf(y,h.mode,x),_.return=h,h=_}return o(h);case Hr:return A=y._init,m(h,_,A(y._payload),x)}if(il(y))return g(h,_,y,x);if(Da(y))return v(h,_,y,x);Tc(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,y),_.return=h,h=_):(n(h,_),_=Df(y,h.mode,x),_.return=h,h=_),o(h)):n(h,_)}return m}var ea=eS(!0),tS=eS(!1),td=cs(null),nd=null,Io=null,Ym=null;function Km(){Ym=Io=nd=null}function qm(t){var e=td.current;Ct(td),t._currentValue=e}function sp(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vo(t,e){nd=t,Ym=Io=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($n=!0),t.firstContext=null)}function Si(t){var e=t._currentValue;if(Ym!==t)if(t={context:t,memoizedValue:e,next:null},Io===null){if(nd===null)throw Error(ce(308));Io=t,nd.dependencies={lanes:0,firstContext:t}}else Io=Io.next=t;return e}var Ps=null;function Qm(t){Ps===null?Ps=[t]:Ps.push(t)}function nS(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Qm(e)):(n.next=r.next,r.next=n),e.interleaved=n,Tr(t,i)}function Tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vr=!1;function Zm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ts(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Tr(t,n)}return r=i.interleaved,r===null?(e.next=e,Qm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Tr(t,n)}function Su(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fm(t,n)}}function Wv(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function id(t,e,n,i){var r=t.updateQueue;Vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(f=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Ft({},d,f);break e;case 2:Vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ws|=o,t.lanes=o,t.memoizedState=d}}function jv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Jl={},Ji=cs(Jl),Ul=cs(Jl),Ol=cs(Jl);function Ls(t){if(t===Jl)throw Error(ce(174));return t}function Jm(t,e){switch(Tt(Ol,e),Tt(Ul,t),Tt(Ji,Jl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bh(e,t)}Ct(Ji),Tt(Ji,e)}function ta(){Ct(Ji),Ct(Ul),Ct(Ol)}function rS(t){Ls(Ol.current);var e=Ls(Ji.current),n=Bh(e,t.type);e!==n&&(Tt(Ul,t),Tt(Ji,n))}function eg(t){Ul.current===t&&(Ct(Ji),Ct(Ul))}var Nt=cs(0);function rd(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bf=[];function tg(){for(var t=0;t<bf.length;t++)bf[t]._workInProgressVersionPrimary=null;bf.length=0}var Mu=Cr.ReactCurrentDispatcher,Rf=Cr.ReactCurrentBatchConfig,Gs=0,Ut=null,Zt=null,sn=null,sd=!1,vl=!1,Fl=0,x1=0;function xn(){throw Error(ce(321))}function ng(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gi(t[n],e[n]))return!1;return!0}function ig(t,e,n,i,r,s){if(Gs=s,Ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Mu.current=t===null||t.memoizedState===null?w1:T1,t=n(i,r),vl){s=0;do{if(vl=!1,Fl=0,25<=s)throw Error(ce(301));s+=1,sn=Zt=null,e.updateQueue=null,Mu.current=A1,t=n(i,r)}while(vl)}if(Mu.current=od,e=Zt!==null&&Zt.next!==null,Gs=0,sn=Zt=Ut=null,sd=!1,e)throw Error(ce(300));return t}function rg(){var t=Fl!==0;return Fl=0,t}function $i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Ut.memoizedState=sn=t:sn=sn.next=t,sn}function Mi(){if(Zt===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var e=sn===null?Ut.memoizedState:sn.next;if(e!==null)sn=e,Zt=t;else{if(t===null)throw Error(ce(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},sn===null?Ut.memoizedState=sn=t:sn=sn.next=t}return sn}function kl(t,e){return typeof e=="function"?e(t):e}function Cf(t){var e=Mi(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Gs&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Ut.lanes|=u,Ws|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Gi(i,e.memoizedState)||($n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ut.lanes|=s,Ws|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pf(t){var e=Mi(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Gi(s,e.memoizedState)||($n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function sS(){}function oS(t,e){var n=Ut,i=Mi(),r=e(),s=!Gi(i.memoizedState,r);if(s&&(i.memoizedState=r,$n=!0),i=i.queue,sg(cS.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||sn!==null&&sn.memoizedState.tag&1){if(n.flags|=2048,Bl(9,lS.bind(null,n,i,r,e),void 0,null),an===null)throw Error(ce(349));Gs&30||aS(n,e,r)}return r}function aS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function lS(t,e,n,i){e.value=n,e.getSnapshot=i,uS(e)&&dS(t)}function cS(t,e,n){return n(function(){uS(e)&&dS(t)})}function uS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gi(t,n)}catch{return!0}}function dS(t){var e=Tr(t,1);e!==null&&Bi(e,t,1,-1)}function Xv(t){var e=$i();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kl,lastRenderedState:t},e.queue=t,t=t.dispatch=E1.bind(null,Ut,t),[e.memoizedState,t]}function Bl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ut.updateQueue,e===null?(e={lastEffect:null,stores:null},Ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function fS(){return Mi().memoizedState}function Eu(t,e,n,i){var r=$i();Ut.flags|=t,r.memoizedState=Bl(1|e,n,void 0,i===void 0?null:i)}function Dd(t,e,n,i){var r=Mi();i=i===void 0?null:i;var s=void 0;if(Zt!==null){var o=Zt.memoizedState;if(s=o.destroy,i!==null&&ng(i,o.deps)){r.memoizedState=Bl(e,n,s,i);return}}Ut.flags|=t,r.memoizedState=Bl(1|e,n,s,i)}function $v(t,e){return Eu(8390656,8,t,e)}function sg(t,e){return Dd(2048,8,t,e)}function hS(t,e){return Dd(4,2,t,e)}function pS(t,e){return Dd(4,4,t,e)}function mS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function gS(t,e,n){return n=n!=null?n.concat([t]):null,Dd(4,4,mS.bind(null,e,t),n)}function og(){}function vS(t,e){var n=Mi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ng(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function _S(t,e){var n=Mi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ng(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function yS(t,e,n){return Gs&21?(Gi(n,e)||(n=wx(),Ut.lanes|=n,Ws|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$n=!0),t.memoizedState=n)}function S1(t,e){var n=yt;yt=n!==0&&4>n?n:4,t(!0);var i=Rf.transition;Rf.transition={};try{t(!1),e()}finally{yt=n,Rf.transition=i}}function xS(){return Mi().memoizedState}function M1(t,e,n){var i=is(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},SS(t))MS(e,n);else if(n=nS(t,e,n,i),n!==null){var r=kn();Bi(n,t,i,r),ES(n,e,i)}}function E1(t,e,n){var i=is(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(SS(t))MS(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Gi(a,o)){var l=e.interleaved;l===null?(r.next=r,Qm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=nS(t,e,r,i),n!==null&&(r=kn(),Bi(n,t,i,r),ES(n,e,i))}}function SS(t){var e=t.alternate;return t===Ut||e!==null&&e===Ut}function MS(t,e){vl=sd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ES(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fm(t,n)}}var od={readContext:Si,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},w1={readContext:Si,useCallback:function(t,e){return $i().memoizedState=[t,e===void 0?null:e],t},useContext:Si,useEffect:$v,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4194308,4,mS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Eu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Eu(4,2,t,e)},useMemo:function(t,e){var n=$i();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$i();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=M1.bind(null,Ut,t),[i.memoizedState,t]},useRef:function(t){var e=$i();return t={current:t},e.memoizedState=t},useState:Xv,useDebugValue:og,useDeferredValue:function(t){return $i().memoizedState=t},useTransition:function(){var t=Xv(!1),e=t[0];return t=S1.bind(null,t[1]),$i().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ut,r=$i();if(Lt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),an===null)throw Error(ce(349));Gs&30||aS(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$v(cS.bind(null,i,s,t),[t]),i.flags|=2048,Bl(9,lS.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$i(),e=an.identifierPrefix;if(Lt){var n=gr,i=mr;n=(i&~(1<<32-ki(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=x1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},T1={readContext:Si,useCallback:vS,useContext:Si,useEffect:sg,useImperativeHandle:gS,useInsertionEffect:hS,useLayoutEffect:pS,useMemo:_S,useReducer:Cf,useRef:fS,useState:function(){return Cf(kl)},useDebugValue:og,useDeferredValue:function(t){var e=Mi();return yS(e,Zt.memoizedState,t)},useTransition:function(){var t=Cf(kl)[0],e=Mi().memoizedState;return[t,e]},useMutableSource:sS,useSyncExternalStore:oS,useId:xS,unstable_isNewReconciler:!1},A1={readContext:Si,useCallback:vS,useContext:Si,useEffect:sg,useImperativeHandle:gS,useInsertionEffect:hS,useLayoutEffect:pS,useMemo:_S,useReducer:Pf,useRef:fS,useState:function(){return Pf(kl)},useDebugValue:og,useDeferredValue:function(t){var e=Mi();return Zt===null?e.memoizedState=t:yS(e,Zt.memoizedState,t)},useTransition:function(){var t=Pf(kl)[0],e=Mi().memoizedState;return[t,e]},useMutableSource:sS,useSyncExternalStore:oS,useId:xS,unstable_isNewReconciler:!1};function Li(t,e){if(t&&t.defaultProps){e=Ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function op(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nd={isMounted:function(t){return(t=t._reactInternals)?Ks(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=kn(),r=is(t),s=Sr(i,r);s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,r),e!==null&&(Bi(e,t,r,i),Su(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=kn(),r=is(t),s=Sr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ts(t,s,r),e!==null&&(Bi(e,t,r,i),Su(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=kn(),i=is(t),r=Sr(n,i);r.tag=2,e!=null&&(r.callback=e),e=ts(t,r,i),e!==null&&(Bi(e,t,i,n),Su(e,t,i))}};function Yv(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ll(n,i)||!Ll(r,s):!0}function wS(t,e,n){var i=!1,r=as,s=e.contextType;return typeof s=="object"&&s!==null?s=Si(s):(r=qn(e)?Hs:bn.current,i=e.contextTypes,s=(i=i!=null)?Zo(t,r):as),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nd,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kv(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nd.enqueueReplaceState(e,e.state,null)}function ap(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Si(s):(s=qn(e)?Hs:bn.current,r.context=Zo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(op(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nd.enqueueReplaceState(r,r.state,null),id(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function na(t,e){try{var n="",i=e;do n+=eT(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Lf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var b1=typeof WeakMap=="function"?WeakMap:Map;function TS(t,e,n){n=Sr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ld||(ld=!0,_p=i),lp(t,e)},n}function AS(t,e,n){n=Sr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){lp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){lp(t,e),typeof i!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qv(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new b1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=H1.bind(null,t,e,n),e.then(t,t))}function Qv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zv(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sr(-1,1),e.tag=2,ts(n,e,1))),n.lanes|=1),t)}var R1=Cr.ReactCurrentOwner,$n=!1;function Dn(t,e,n,i){e.child=t===null?tS(e,null,n,i):ea(e,t.child,n,i)}function Jv(t,e,n,i,r){n=n.render;var s=e.ref;return Vo(e,r),i=ig(t,e,n,i,s,r),n=rg(),t!==null&&!$n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ar(t,e,r)):(Lt&&n&&jm(e),e.flags|=1,Dn(t,e,i,r),e.child)}function e_(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!pg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bS(t,e,s,i,r)):(t=bu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ll,n(o,i)&&t.ref===e.ref)return Ar(t,e,r)}return e.flags|=1,t=rs(s,i),t.ref=e.ref,t.return=e,e.child=t}function bS(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ll(s,i)&&t.ref===e.ref)if($n=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&($n=!0);else return e.lanes=t.lanes,Ar(t,e,r)}return cp(t,e,n,i,r)}function RS(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(No,si),si|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Tt(No,si),si|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Tt(No,si),si|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Tt(No,si),si|=i;return Dn(t,e,r,n),e.child}function CS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cp(t,e,n,i,r){var s=qn(n)?Hs:bn.current;return s=Zo(e,s),Vo(e,r),n=ig(t,e,n,i,s,r),i=rg(),t!==null&&!$n?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ar(t,e,r)):(Lt&&i&&jm(e),e.flags|=1,Dn(t,e,n,r),e.child)}function t_(t,e,n,i,r){if(qn(n)){var s=!0;Zu(e)}else s=!1;if(Vo(e,r),e.stateNode===null)wu(t,e),wS(e,n,i),ap(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Si(c):(c=qn(n)?Hs:bn.current,c=Zo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Kv(e,o,i,c),Vr=!1;var f=e.memoizedState;o.state=f,id(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Kn.current||Vr?(typeof u=="function"&&(op(e,n,u,i),l=e.memoizedState),(a=Vr||Yv(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,iS(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Li(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Si(l):(l=qn(n)?Hs:bn.current,l=Zo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Kv(e,o,i,l),Vr=!1,f=e.memoizedState,o.state=f,id(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||Kn.current||Vr?(typeof p=="function"&&(op(e,n,p,i),g=e.memoizedState),(c=Vr||Yv(e,n,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return up(t,e,n,i,s,r)}function up(t,e,n,i,r,s){CS(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&zv(e,n,!1),Ar(t,e,s);i=e.stateNode,R1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ea(e,t.child,null,s),e.child=ea(e,null,a,s)):Dn(t,e,a,s),e.memoizedState=i.state,r&&zv(e,n,!0),e.child}function PS(t){var e=t.stateNode;e.pendingContext?Bv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bv(t,e.context,!1),Jm(t,e.containerInfo)}function n_(t,e,n,i,r){return Jo(),$m(r),e.flags|=256,Dn(t,e,n,i),e.child}var dp={dehydrated:null,treeContext:null,retryLane:0};function fp(t){return{baseLanes:t,cachePool:null,transitions:null}}function LS(t,e,n){var i=e.pendingProps,r=Nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Tt(Nt,r&1),t===null)return rp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fd(o,i,0,null),t=Os(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fp(n),e.memoizedState=dp,t):ag(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return C1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rs(a,s):(s=Os(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?fp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dp,i}return s=t.child,t=s.sibling,i=rs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ag(t,e){return e=Fd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ac(t,e,n,i){return i!==null&&$m(i),ea(e,t.child,null,n),t=ag(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function C1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Lf(Error(ce(422))),Ac(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fd({mode:"visible",children:i.children},r,0,null),s=Os(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ea(e,t.child,null,o),e.child.memoizedState=fp(o),e.memoizedState=dp,s);if(!(e.mode&1))return Ac(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=Lf(s,i,void 0),Ac(t,e,o,i)}if(a=(o&t.childLanes)!==0,$n||a){if(i=an,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Tr(t,r),Bi(i,t,r,-1))}return hg(),i=Lf(Error(ce(421))),Ac(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=V1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,ai=es(r.nextSibling),ci=e,Lt=!0,Ni=null,t!==null&&(vi[_i++]=mr,vi[_i++]=gr,vi[_i++]=Vs,mr=t.id,gr=t.overflow,Vs=e),e=ag(e,i.children),e.flags|=4096,e)}function i_(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sp(t.return,e,n)}function If(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function IS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Dn(t,e,i.children,n),i=Nt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&i_(t,n,e);else if(t.tag===19)i_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Tt(Nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&rd(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),If(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&rd(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}If(e,!0,n,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ar(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ws|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=rs(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rs(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function P1(t,e,n){switch(e.tag){case 3:PS(e),Jo();break;case 5:rS(e);break;case 1:qn(e.type)&&Zu(e);break;case 4:Jm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Tt(td,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Tt(Nt,Nt.current&1),e.flags|=128,null):n&e.child.childLanes?LS(t,e,n):(Tt(Nt,Nt.current&1),t=Ar(t,e,n),t!==null?t.sibling:null);Tt(Nt,Nt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return IS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Tt(Nt,Nt.current),i)break;return null;case 22:case 23:return e.lanes=0,RS(t,e,n)}return Ar(t,e,n)}var DS,hp,NS,US;DS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hp=function(){};NS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ls(Ji.current);var s=null;switch(n){case"input":r=Uh(t,r),i=Uh(t,i),s=[];break;case"select":r=Ft({},r,{value:void 0}),i=Ft({},i,{value:void 0}),s=[];break;case"textarea":r=kh(t,r),i=kh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=qu)}zh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&bt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};US=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ba(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function L1(t,e,n){var i=e.pendingProps;switch(Xm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(e),null;case 1:return qn(e.type)&&Qu(),Sn(e),null;case 3:return i=e.stateNode,ta(),Ct(Kn),Ct(bn),tg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ni!==null&&(Sp(Ni),Ni=null))),hp(t,e),Sn(e),null;case 5:eg(e);var r=Ls(Ol.current);if(n=e.type,t!==null&&e.stateNode!=null)NS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Sn(e),null}if(t=Ls(Ji.current),wc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ki]=e,i[Nl]=s,t=(e.mode&1)!==0,n){case"dialog":bt("cancel",i),bt("close",i);break;case"iframe":case"object":case"embed":bt("load",i);break;case"video":case"audio":for(r=0;r<sl.length;r++)bt(sl[r],i);break;case"source":bt("error",i);break;case"img":case"image":case"link":bt("error",i),bt("load",i);break;case"details":bt("toggle",i);break;case"input":fv(i,s),bt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},bt("invalid",i);break;case"textarea":pv(i,s),bt("invalid",i)}zh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ec(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ec(i.textContent,a,t),r=["children",""+a]):wl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&bt("scroll",i)}switch(n){case"input":mc(i),hv(i,s,!0);break;case"textarea":mc(i),mv(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=qu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ki]=e,t[Nl]=i,DS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Hh(n,i),n){case"dialog":bt("cancel",t),bt("close",t),r=i;break;case"iframe":case"object":case"embed":bt("load",t),r=i;break;case"video":case"audio":for(r=0;r<sl.length;r++)bt(sl[r],t);r=i;break;case"source":bt("error",t),r=i;break;case"img":case"image":case"link":bt("error",t),bt("load",t),r=i;break;case"details":bt("toggle",t),r=i;break;case"input":fv(t,i),r=Uh(t,i),bt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ft({},i,{value:void 0}),bt("invalid",t);break;case"textarea":pv(t,i),r=kh(t,i),bt("invalid",t);break;default:r=i}zh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ux(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Tl(t,l):typeof l=="number"&&Tl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&bt("scroll",t):l!=null&&Lm(t,s,l,o))}switch(n){case"input":mc(t),hv(t,i,!1);break;case"textarea":mc(t),mv(t);break;case"option":i.value!=null&&t.setAttribute("value",""+os(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ko(t,!!i.multiple,s,!1):i.defaultValue!=null&&ko(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=qu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Sn(e),null;case 6:if(t&&e.stateNode!=null)US(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Ls(Ol.current),Ls(Ji.current),wc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ki]=e,(s=i.nodeValue!==n)&&(t=ci,t!==null))switch(t.tag){case 3:Ec(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ec(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ki]=e,e.stateNode=i}return Sn(e),null;case 13:if(Ct(Nt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&ai!==null&&e.mode&1&&!(e.flags&128))Jx(),Jo(),e.flags|=98560,s=!1;else if(s=wc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Ki]=e}else Jo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Sn(e),s=!1}else Ni!==null&&(Sp(Ni),Ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Nt.current&1?Jt===0&&(Jt=3):hg())),e.updateQueue!==null&&(e.flags|=4),Sn(e),null);case 4:return ta(),hp(t,e),t===null&&Il(e.stateNode.containerInfo),Sn(e),null;case 10:return qm(e.type._context),Sn(e),null;case 17:return qn(e.type)&&Qu(),Sn(e),null;case 19:if(Ct(Nt),s=e.memoizedState,s===null)return Sn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ba(s,!1);else{if(Jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rd(t),o!==null){for(e.flags|=128,Ba(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Tt(Nt,Nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Wt()>ia&&(e.flags|=128,i=!0,Ba(s,!1),e.lanes=4194304)}else{if(!i)if(t=rd(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ba(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Lt)return Sn(e),null}else 2*Wt()-s.renderingStartTime>ia&&n!==1073741824&&(e.flags|=128,i=!0,Ba(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,n=Nt.current,Tt(Nt,i?n&1|2:n&1),e):(Sn(e),null);case 22:case 23:return fg(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?si&1073741824&&(Sn(e),e.subtreeFlags&6&&(e.flags|=8192)):Sn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function I1(t,e){switch(Xm(e),e.tag){case 1:return qn(e.type)&&Qu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ta(),Ct(Kn),Ct(bn),tg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return eg(e),null;case 13:if(Ct(Nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Jo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ct(Nt),null;case 4:return ta(),null;case 10:return qm(e.type._context),null;case 22:case 23:return fg(),null;case 24:return null;default:return null}}var bc=!1,Tn=!1,D1=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Do(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ht(t,e,i)}else n.current=null}function pp(t,e,n){try{n()}catch(i){Ht(t,e,i)}}var r_=!1;function N1(t,e){if(Qh=$u,t=zx(),Wm(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zh={focusedElem:t,selectionRange:n},$u=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Li(e.type,v),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(x){Ht(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return g=r_,r_=!1,g}function _l(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&pp(e,n,s)}r=r.next}while(r!==i)}}function Ud(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function mp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function OS(t){var e=t.alternate;e!==null&&(t.alternate=null,OS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ki],delete e[Nl],delete e[tp],delete e[g1],delete e[v1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function FS(t){return t.tag===5||t.tag===3||t.tag===4}function s_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||FS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=qu));else if(i!==4&&(t=t.child,t!==null))for(gp(t,e,n),t=t.sibling;t!==null;)gp(t,e,n),t=t.sibling}function vp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vp(t,e,n),t=t.sibling;t!==null;)vp(t,e,n),t=t.sibling}var hn=null,Ii=!1;function Lr(t,e,n){for(n=n.child;n!==null;)kS(t,e,n),n=n.sibling}function kS(t,e,n){if(Zi&&typeof Zi.onCommitFiberUnmount=="function")try{Zi.onCommitFiberUnmount(bd,n)}catch{}switch(n.tag){case 5:Tn||Do(n,e);case 6:var i=hn,r=Ii;hn=null,Lr(t,e,n),hn=i,Ii=r,hn!==null&&(Ii?(t=hn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):hn.removeChild(n.stateNode));break;case 18:hn!==null&&(Ii?(t=hn,n=n.stateNode,t.nodeType===8?Tf(t.parentNode,n):t.nodeType===1&&Tf(t,n),Cl(t)):Tf(hn,n.stateNode));break;case 4:i=hn,r=Ii,hn=n.stateNode.containerInfo,Ii=!0,Lr(t,e,n),hn=i,Ii=r;break;case 0:case 11:case 14:case 15:if(!Tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pp(n,e,o),r=r.next}while(r!==i)}Lr(t,e,n);break;case 1:if(!Tn&&(Do(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ht(n,e,a)}Lr(t,e,n);break;case 21:Lr(t,e,n);break;case 22:n.mode&1?(Tn=(i=Tn)||n.memoizedState!==null,Lr(t,e,n),Tn=i):Lr(t,e,n);break;default:Lr(t,e,n)}}function o_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new D1),e.forEach(function(i){var r=G1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:hn=a.stateNode,Ii=!1;break e;case 3:hn=a.stateNode.containerInfo,Ii=!0;break e;case 4:hn=a.stateNode.containerInfo,Ii=!0;break e}a=a.return}if(hn===null)throw Error(ce(160));kS(s,o,r),hn=null,Ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ht(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)BS(e,t),e=e.sibling}function BS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bi(e,t),Wi(t),i&4){try{_l(3,t,t.return),Ud(3,t)}catch(v){Ht(t,t.return,v)}try{_l(5,t,t.return)}catch(v){Ht(t,t.return,v)}}break;case 1:bi(e,t),Wi(t),i&512&&n!==null&&Do(n,n.return);break;case 5:if(bi(e,t),Wi(t),i&512&&n!==null&&Do(n,n.return),t.flags&32){var r=t.stateNode;try{Tl(r,"")}catch(v){Ht(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ax(r,s),Hh(a,o);var c=Hh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?fx(r,d):u==="dangerouslySetInnerHTML"?ux(r,d):u==="children"?Tl(r,d):Lm(r,u,d,c)}switch(a){case"input":Oh(r,s);break;case"textarea":lx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ko(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ko(r,!!s.multiple,s.defaultValue,!0):ko(r,!!s.multiple,s.multiple?[]:"",!1))}r[Nl]=s}catch(v){Ht(t,t.return,v)}}break;case 6:if(bi(e,t),Wi(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Ht(t,t.return,v)}}break;case 3:if(bi(e,t),Wi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Cl(e.containerInfo)}catch(v){Ht(t,t.return,v)}break;case 4:bi(e,t),Wi(t);break;case 13:bi(e,t),Wi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ug=Wt())),i&4&&o_(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Tn=(c=Tn)||u,bi(e,t),Tn=c):bi(e,t),Wi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Te=t,u=t.child;u!==null;){for(d=Te=u;Te!==null;){switch(f=Te,p=f.child,f.tag){case 0:case 11:case 14:case 15:_l(4,f,f.return);break;case 1:Do(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Ht(i,n,v)}}break;case 5:Do(f,f.return);break;case 22:if(f.memoizedState!==null){l_(d);continue}}p!==null?(p.return=f,Te=p):l_(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dx("display",o))}catch(v){Ht(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){Ht(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:bi(e,t),Wi(t),i&4&&o_(t);break;case 21:break;default:bi(e,t),Wi(t)}}function Wi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(FS(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Tl(r,""),i.flags&=-33);var s=s_(t);vp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=s_(t);gp(t,a,o);break;default:throw Error(ce(161))}}catch(l){Ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function U1(t,e,n){Te=t,zS(t)}function zS(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||bc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Tn;a=bc;var c=Tn;if(bc=o,(Tn=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?c_(r):l!==null?(l.return=o,Te=l):c_(r);for(;s!==null;)Te=s,zS(s),s=s.sibling;Te=r,bc=a,Tn=c}a_(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):a_(t)}}function a_(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tn||Ud(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Li(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jv(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Cl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Tn||e.flags&512&&mp(e)}catch(f){Ht(e,e.return,f)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function l_(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function c_(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ud(4,e)}catch(l){Ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{mp(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{mp(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var O1=Math.ceil,ad=Cr.ReactCurrentDispatcher,lg=Cr.ReactCurrentOwner,xi=Cr.ReactCurrentBatchConfig,ft=0,an=null,Yt=null,vn=0,si=0,No=cs(0),Jt=0,zl=null,Ws=0,Od=0,cg=0,yl=null,jn=null,ug=0,ia=1/0,dr=null,ld=!1,_p=null,ns=null,Rc=!1,$r=null,cd=0,xl=0,yp=null,Tu=-1,Au=0;function kn(){return ft&6?Wt():Tu!==-1?Tu:Tu=Wt()}function is(t){return t.mode&1?ft&2&&vn!==0?vn&-vn:y1.transition!==null?(Au===0&&(Au=wx()),Au):(t=yt,t!==0||(t=window.event,t=t===void 0?16:Lx(t.type)),t):1}function Bi(t,e,n,i){if(50<xl)throw xl=0,yp=null,Error(ce(185));ql(t,n,i),(!(ft&2)||t!==an)&&(t===an&&(!(ft&2)&&(Od|=n),Jt===4&&Wr(t,vn)),Qn(t,i),n===1&&ft===0&&!(e.mode&1)&&(ia=Wt()+500,Id&&us()))}function Qn(t,e){var n=t.callbackNode;yT(t,e);var i=Xu(t,t===an?vn:0);if(i===0)n!==null&&_v(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_v(n),e===1)t.tag===0?_1(u_.bind(null,t)):qx(u_.bind(null,t)),p1(function(){!(ft&6)&&us()}),n=null;else{switch(Tx(i)){case 1:n=Om;break;case 4:n=Mx;break;case 16:n=ju;break;case 536870912:n=Ex;break;default:n=ju}n=YS(n,HS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function HS(t,e){if(Tu=-1,Au=0,ft&6)throw Error(ce(327));var n=t.callbackNode;if(Go()&&t.callbackNode!==n)return null;var i=Xu(t,t===an?vn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ud(t,i);else{e=i;var r=ft;ft|=2;var s=GS();(an!==t||vn!==e)&&(dr=null,ia=Wt()+500,Us(t,e));do try{B1();break}catch(a){VS(t,a)}while(!0);Km(),ad.current=s,ft=r,Yt!==null?e=0:(an=null,vn=0,e=Jt)}if(e!==0){if(e===2&&(r=Xh(t),r!==0&&(i=r,e=xp(t,r))),e===1)throw n=zl,Us(t,0),Wr(t,i),Qn(t,Wt()),n;if(e===6)Wr(t,i);else{if(r=t.current.alternate,!(i&30)&&!F1(r)&&(e=ud(t,i),e===2&&(s=Xh(t),s!==0&&(i=s,e=xp(t,s))),e===1))throw n=zl,Us(t,0),Wr(t,i),Qn(t,Wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Es(t,jn,dr);break;case 3:if(Wr(t,i),(i&130023424)===i&&(e=ug+500-Wt(),10<e)){if(Xu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){kn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ep(Es.bind(null,t,jn,dr),e);break}Es(t,jn,dr);break;case 4:if(Wr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ki(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*O1(i/1960))-i,10<i){t.timeoutHandle=ep(Es.bind(null,t,jn,dr),i);break}Es(t,jn,dr);break;case 5:Es(t,jn,dr);break;default:throw Error(ce(329))}}}return Qn(t,Wt()),t.callbackNode===n?HS.bind(null,t):null}function xp(t,e){var n=yl;return t.current.memoizedState.isDehydrated&&(Us(t,e).flags|=256),t=ud(t,e),t!==2&&(e=jn,jn=n,e!==null&&Sp(e)),t}function Sp(t){jn===null?jn=t:jn.push.apply(jn,t)}function F1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~cg,e&=~Od,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ki(e),i=1<<n;t[n]=-1,e&=~i}}function u_(t){if(ft&6)throw Error(ce(327));Go();var e=Xu(t,0);if(!(e&1))return Qn(t,Wt()),null;var n=ud(t,e);if(t.tag!==0&&n===2){var i=Xh(t);i!==0&&(e=i,n=xp(t,i))}if(n===1)throw n=zl,Us(t,0),Wr(t,e),Qn(t,Wt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Es(t,jn,dr),Qn(t,Wt()),null}function dg(t,e){var n=ft;ft|=1;try{return t(e)}finally{ft=n,ft===0&&(ia=Wt()+500,Id&&us())}}function js(t){$r!==null&&$r.tag===0&&!(ft&6)&&Go();var e=ft;ft|=1;var n=xi.transition,i=yt;try{if(xi.transition=null,yt=1,t)return t()}finally{yt=i,xi.transition=n,ft=e,!(ft&6)&&us()}}function fg(){si=No.current,Ct(No)}function Us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h1(n)),Yt!==null)for(n=Yt.return;n!==null;){var i=n;switch(Xm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qu();break;case 3:ta(),Ct(Kn),Ct(bn),tg();break;case 5:eg(i);break;case 4:ta();break;case 13:Ct(Nt);break;case 19:Ct(Nt);break;case 10:qm(i.type._context);break;case 22:case 23:fg()}n=n.return}if(an=t,Yt=t=rs(t.current,null),vn=si=e,Jt=0,zl=null,cg=Od=Ws=0,jn=yl=null,Ps!==null){for(e=0;e<Ps.length;e++)if(n=Ps[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ps=null}return t}function VS(t,e){do{var n=Yt;try{if(Km(),Mu.current=od,sd){for(var i=Ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sd=!1}if(Gs=0,sn=Zt=Ut=null,vl=!1,Fl=0,lg.current=null,n===null||n.return===null){Jt=1,zl=e,Yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=vn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Qv(o);if(p!==null){p.flags&=-257,Zv(p,o,a,s,e),p.mode&1&&qv(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){qv(s,c,e),hg();break e}l=Error(ce(426))}}else if(Lt&&a.mode&1){var m=Qv(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Zv(m,o,a,s,e),$m(na(l,a));break e}}s=l=na(l,a),Jt!==4&&(Jt=2),yl===null?yl=[s]:yl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=TS(s,l,e);Wv(s,h);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ns===null||!ns.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=AS(s,a,e);Wv(s,x);break e}}s=s.return}while(s!==null)}jS(n)}catch(R){e=R,Yt===n&&n!==null&&(Yt=n=n.return);continue}break}while(!0)}function GS(){var t=ad.current;return ad.current=od,t===null?od:t}function hg(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),an===null||!(Ws&268435455)&&!(Od&268435455)||Wr(an,vn)}function ud(t,e){var n=ft;ft|=2;var i=GS();(an!==t||vn!==e)&&(dr=null,Us(t,e));do try{k1();break}catch(r){VS(t,r)}while(!0);if(Km(),ft=n,ad.current=i,Yt!==null)throw Error(ce(261));return an=null,vn=0,Jt}function k1(){for(;Yt!==null;)WS(Yt)}function B1(){for(;Yt!==null&&!uT();)WS(Yt)}function WS(t){var e=$S(t.alternate,t,si);t.memoizedProps=t.pendingProps,e===null?jS(t):Yt=e,lg.current=null}function jS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=I1(n,e),n!==null){n.flags&=32767,Yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Jt=6,Yt=null;return}}else if(n=L1(n,e,si),n!==null){Yt=n;return}if(e=e.sibling,e!==null){Yt=e;return}Yt=e=t}while(e!==null);Jt===0&&(Jt=5)}function Es(t,e,n){var i=yt,r=xi.transition;try{xi.transition=null,yt=1,z1(t,e,n,i)}finally{xi.transition=r,yt=i}return null}function z1(t,e,n,i){do Go();while($r!==null);if(ft&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(xT(t,s),t===an&&(Yt=an=null,vn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rc||(Rc=!0,YS(ju,function(){return Go(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xi.transition,xi.transition=null;var o=yt;yt=1;var a=ft;ft|=4,lg.current=null,N1(t,n),BS(n,t),o1(Zh),$u=!!Qh,Zh=Qh=null,t.current=n,U1(n),dT(),ft=a,yt=o,xi.transition=s}else t.current=n;if(Rc&&(Rc=!1,$r=t,cd=r),s=t.pendingLanes,s===0&&(ns=null),pT(n.stateNode),Qn(t,Wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ld)throw ld=!1,t=_p,_p=null,t;return cd&1&&t.tag!==0&&Go(),s=t.pendingLanes,s&1?t===yp?xl++:(xl=0,yp=t):xl=0,us(),null}function Go(){if($r!==null){var t=Tx(cd),e=xi.transition,n=yt;try{if(xi.transition=null,yt=16>t?16:t,$r===null)var i=!1;else{if(t=$r,$r=null,cd=0,ft&6)throw Error(ce(331));var r=ft;for(ft|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var u=Te;switch(u.tag){case 0:case 11:case 15:_l(8,u,s)}var d=u.child;if(d!==null)d.return=u,Te=d;else for(;Te!==null;){u=Te;var f=u.sibling,p=u.return;if(OS(u),u===c){Te=null;break}if(f!==null){f.return=p,Te=f;break}Te=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_l(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Te=h;break e}Te=s.return}}var _=t.current;for(Te=_;Te!==null;){o=Te;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Te=y;else e:for(o=_;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ud(9,a)}}catch(R){Ht(a,a.return,R)}if(a===o){Te=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Te=x;break e}Te=a.return}}if(ft=r,us(),Zi&&typeof Zi.onPostCommitFiberRoot=="function")try{Zi.onPostCommitFiberRoot(bd,t)}catch{}i=!0}return i}finally{yt=n,xi.transition=e}}return!1}function d_(t,e,n){e=na(n,e),e=TS(t,e,1),t=ts(t,e,1),e=kn(),t!==null&&(ql(t,1,e),Qn(t,e))}function Ht(t,e,n){if(t.tag===3)d_(t,t,n);else for(;e!==null;){if(e.tag===3){d_(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ns===null||!ns.has(i))){t=na(n,t),t=AS(e,t,1),e=ts(e,t,1),t=kn(),e!==null&&(ql(e,1,t),Qn(e,t));break}}e=e.return}}function H1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=kn(),t.pingedLanes|=t.suspendedLanes&n,an===t&&(vn&n)===n&&(Jt===4||Jt===3&&(vn&130023424)===vn&&500>Wt()-ug?Us(t,0):cg|=n),Qn(t,e)}function XS(t,e){e===0&&(t.mode&1?(e=_c,_c<<=1,!(_c&130023424)&&(_c=4194304)):e=1);var n=kn();t=Tr(t,e),t!==null&&(ql(t,e,n),Qn(t,n))}function V1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),XS(t,n)}function G1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),XS(t,n)}var $S;$S=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Kn.current)$n=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $n=!1,P1(t,e,n);$n=!!(t.flags&131072)}else $n=!1,Lt&&e.flags&1048576&&Qx(e,ed,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wu(t,e),t=e.pendingProps;var r=Zo(e,bn.current);Vo(e,n),r=ig(null,e,i,t,r,n);var s=rg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qn(i)?(s=!0,Zu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zm(e),r.updater=Nd,e.stateNode=r,r._reactInternals=e,ap(e,i,t,n),e=up(null,e,i,!0,s,n)):(e.tag=0,Lt&&s&&jm(e),Dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(wu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=j1(i),t=Li(i,t),r){case 0:e=cp(null,e,i,t,n);break e;case 1:e=t_(null,e,i,t,n);break e;case 11:e=Jv(null,e,i,t,n);break e;case 14:e=e_(null,e,i,Li(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Li(i,r),cp(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Li(i,r),t_(t,e,i,r,n);case 3:e:{if(PS(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,iS(t,e),id(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=na(Error(ce(423)),e),e=n_(t,e,i,n,r);break e}else if(i!==r){r=na(Error(ce(424)),e),e=n_(t,e,i,n,r);break e}else for(ai=es(e.stateNode.containerInfo.firstChild),ci=e,Lt=!0,Ni=null,n=tS(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jo(),i===r){e=Ar(t,e,n);break e}Dn(t,e,i,n)}e=e.child}return e;case 5:return rS(e),t===null&&rp(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Jh(i,r)?o=null:s!==null&&Jh(i,s)&&(e.flags|=32),CS(t,e),Dn(t,e,o,n),e.child;case 6:return t===null&&rp(e),null;case 13:return LS(t,e,n);case 4:return Jm(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ea(e,null,i,n):Dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Li(i,r),Jv(t,e,i,r,n);case 7:return Dn(t,e,e.pendingProps,n),e.child;case 8:return Dn(t,e,e.pendingProps.children,n),e.child;case 12:return Dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Tt(td,i._currentValue),i._currentValue=o,s!==null)if(Gi(s.value,o)){if(s.children===r.children&&!Kn.current){e=Ar(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Sr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vo(e,n),r=Si(r),i=i(r),e.flags|=1,Dn(t,e,i,n),e.child;case 14:return i=e.type,r=Li(i,e.pendingProps),r=Li(i.type,r),e_(t,e,i,r,n);case 15:return bS(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Li(i,r),wu(t,e),e.tag=1,qn(i)?(t=!0,Zu(e)):t=!1,Vo(e,n),wS(e,i,r),ap(e,i,r,n),up(null,e,i,!0,t,n);case 19:return IS(t,e,n);case 22:return RS(t,e,n)}throw Error(ce(156,e.tag))};function YS(t,e){return Sx(t,e)}function W1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(t,e,n,i){return new W1(t,e,n,i)}function pg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function j1(t){if(typeof t=="function")return pg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dm)return 11;if(t===Nm)return 14}return 2}function rs(t,e){var n=t.alternate;return n===null?(n=yi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")pg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wo:return Os(n.children,r,s,e);case Im:o=8,r|=8;break;case Lh:return t=yi(12,n,e,r|2),t.elementType=Lh,t.lanes=s,t;case Ih:return t=yi(13,n,e,r),t.elementType=Ih,t.lanes=s,t;case Dh:return t=yi(19,n,e,r),t.elementType=Dh,t.lanes=s,t;case rx:return Fd(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case nx:o=10;break e;case ix:o=9;break e;case Dm:o=11;break e;case Nm:o=14;break e;case Hr:o=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=yi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Os(t,e,n,i){return t=yi(7,t,i,e),t.lanes=n,t}function Fd(t,e,n,i){return t=yi(22,t,i,e),t.elementType=rx,t.lanes=n,t.stateNode={isHidden:!1},t}function Df(t,e,n){return t=yi(6,t,null,e),t.lanes=n,t}function Nf(t,e,n){return e=yi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function X1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pf(0),this.expirationTimes=pf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mg(t,e,n,i,r,s,o,a,l){return t=new X1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zm(s),t}function $1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Eo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function KS(t){if(!t)return as;t=t._reactInternals;e:{if(Ks(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(qn(n))return Kx(t,n,e)}return e}function qS(t,e,n,i,r,s,o,a,l){return t=mg(n,i,!0,t,r,s,o,a,l),t.context=KS(null),n=t.current,i=kn(),r=is(n),s=Sr(i,r),s.callback=e??null,ts(n,s,r),t.current.lanes=r,ql(t,r,i),Qn(t,i),t}function kd(t,e,n,i){var r=e.current,s=kn(),o=is(r);return n=KS(n),e.context===null?e.context=n:e.pendingContext=n,e=Sr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ts(r,e,o),t!==null&&(Bi(t,r,o,s),Su(t,r,o)),o}function dd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function f_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gg(t,e){f_(t,e),(t=t.alternate)&&f_(t,e)}function Y1(){return null}var QS=typeof reportError=="function"?reportError:function(t){console.error(t)};function vg(t){this._internalRoot=t}Bd.prototype.render=vg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));kd(t,e,null,null)};Bd.prototype.unmount=vg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;js(function(){kd(null,t,null,null)}),e[wr]=null}};function Bd(t){this._internalRoot=t}Bd.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Gr.length&&e!==0&&e<Gr[n].priority;n++);Gr.splice(n,0,t),n===0&&Px(t)}};function _g(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function h_(){}function K1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=dd(o);s.call(c)}}var o=qS(e,i,t,0,null,!1,!1,"",h_);return t._reactRootContainer=o,t[wr]=o.current,Il(t.nodeType===8?t.parentNode:t),js(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=dd(l);a.call(c)}}var l=mg(t,0,!1,null,null,!1,!1,"",h_);return t._reactRootContainer=l,t[wr]=l.current,Il(t.nodeType===8?t.parentNode:t),js(function(){kd(e,l,n,i)}),l}function Hd(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=dd(o);a.call(l)}}kd(e,o,t,r)}else o=K1(n,e,t,r,i);return dd(o)}Ax=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=rl(e.pendingLanes);n!==0&&(Fm(e,n|1),Qn(e,Wt()),!(ft&6)&&(ia=Wt()+500,us()))}break;case 13:js(function(){var i=Tr(t,1);if(i!==null){var r=kn();Bi(i,t,1,r)}}),gg(t,1)}};km=function(t){if(t.tag===13){var e=Tr(t,134217728);if(e!==null){var n=kn();Bi(e,t,134217728,n)}gg(t,134217728)}};bx=function(t){if(t.tag===13){var e=is(t),n=Tr(t,e);if(n!==null){var i=kn();Bi(n,t,e,i)}gg(t,e)}};Rx=function(){return yt};Cx=function(t,e){var n=yt;try{return yt=t,e()}finally{yt=n}};Gh=function(t,e,n){switch(e){case"input":if(Oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ld(i);if(!r)throw Error(ce(90));ox(i),Oh(i,r)}}}break;case"textarea":lx(t,n);break;case"select":e=n.value,e!=null&&ko(t,!!n.multiple,e,!1)}};mx=dg;gx=js;var q1={usingClientEntryPoint:!1,Events:[Zl,Ro,Ld,hx,px,dg]},za={findFiberByHostInstance:Cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q1={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yx(t),t===null?null:t.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||Y1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{bd=Cc.inject(Q1),Zi=Cc}catch{}}di.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1;di.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_g(e))throw Error(ce(200));return $1(t,e,null,n)};di.createRoot=function(t,e){if(!_g(t))throw Error(ce(299));var n=!1,i="",r=QS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mg(t,1,!1,null,null,n,!1,i,r),t[wr]=e.current,Il(t.nodeType===8?t.parentNode:t),new vg(e)};di.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=yx(e),t=t===null?null:t.stateNode,t};di.flushSync=function(t){return js(t)};di.hydrate=function(t,e,n){if(!zd(e))throw Error(ce(200));return Hd(null,t,e,!0,n)};di.hydrateRoot=function(t,e,n){if(!_g(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=QS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qS(e,null,t,1,n??null,r,!1,s,o),t[wr]=e.current,Il(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bd(e)};di.render=function(t,e,n){if(!zd(e))throw Error(ce(200));return Hd(null,t,e,!1,n)};di.unmountComponentAtNode=function(t){if(!zd(t))throw Error(ce(40));return t._reactRootContainer?(js(function(){Hd(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};di.unstable_batchedUpdates=dg;di.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zd(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return Hd(t,e,n,!1,i)};di.version="18.3.1-next-f1338f8080-20240426";function ZS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ZS)}catch(t){console.error(t)}}ZS(),Zy.exports=di;var yg=Zy.exports;const Z1=wm(yg),J1=zy({__proto__:null,default:Z1},[yg]);var JS,p_=yg;JS=p_.createRoot,p_.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dt(){return Dt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Dt.apply(this,arguments)}var Xt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xt||(Xt={}));const m_="popstate";function eA(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Hl("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ec(r)}return nA(e,n,null,t)}function rt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ra(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tA(){return Math.random().toString(36).substr(2,8)}function g_(t,e){return{usr:t.state,key:t.key,idx:e}}function Hl(t,e,n,i){return n===void 0&&(n=null),Dt({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ds(e):e,{state:n,key:e&&e.key||i||tA()})}function ec(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ds(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function nA(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Xt.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Dt({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Xt.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:a,location:v.location,delta:h})}function f(m,h){a=Xt.Push;let _=Hl(v.location,m,h);c=u()+1;let y=g_(_,c),x=v.createHref(_);try{o.pushState(y,"",x)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(x)}s&&l&&l({action:a,location:v.location,delta:1})}function p(m,h){a=Xt.Replace;let _=Hl(v.location,m,h);c=u();let y=g_(_,c),x=v.createHref(_);o.replaceState(y,"",x),s&&l&&l({action:a,location:v.location,delta:0})}function g(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:ec(m);return _=_.replace(/ $/,"%20"),rt(h,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,h)}let v={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(m_,d),l=m,()=>{r.removeEventListener(m_,d),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let h=g(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(m){return o.go(m)}};return v}var St;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(St||(St={}));const iA=new Set(["lazy","caseSensitive","path","id","index","children"]);function rA(t){return t.index===!0}function Vl(t,e,n,i){return n===void 0&&(n=[]),i===void 0&&(i={}),t.map((r,s)=>{let o=[...n,String(s)],a=typeof r.id=="string"?r.id:o.join("-");if(rt(r.index!==!0||!r.children,"Cannot specify children on an index route"),rt(!i[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),rA(r)){let l=Dt({},r,e(r),{id:a});return i[a]=l,l}else{let l=Dt({},r,e(r),{id:a,children:void 0});return i[a]=l,r.children&&(l.children=Vl(r.children,e,o,i)),l}})}function As(t,e,n){return n===void 0&&(n="/"),Ru(t,e,n,!1)}function Ru(t,e,n,i){let r=typeof e=="string"?ds(e):e,s=tc(r.pathname||"/",n);if(s==null)return null;let o=eM(t);oA(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=vA(s);a=mA(o[l],c,i)}return a}function sA(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function eM(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(rt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Fs([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(rt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),eM(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:hA(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of tM(s.path))r(s,o,l)}),e}function tM(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=tM(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function oA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pA(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const aA=/^:[\w-]+$/,lA=3,cA=2,uA=1,dA=10,fA=-2,v_=t=>t==="*";function hA(t,e){let n=t.split("/"),i=n.length;return n.some(v_)&&(i+=fA),e&&(i+=cA),n.filter(r=>!v_(r)).reduce((r,s)=>r+(aA.test(s)?lA:s===""?uA:dA),i)}function pA(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function mA(t,e,n){n===void 0&&(n=!1);let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=__({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d&&c&&n&&!i[i.length-1].route.index&&(d=__({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:Fs([s,d.pathname]),pathnameBase:MA(Fs([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=Fs([s,d.pathnameBase]))}return o}function __(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=gA(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,d)=>{let{paramName:f,isOptional:p}=u;if(f==="*"){let v=a[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const g=a[d];return p&&!g?c[f]=void 0:c[f]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function gA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ra(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function vA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ra(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function tc(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function _A(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?ds(t):t;return{pathname:n?n.startsWith("/")?n:yA(n,e):e,search:EA(i),hash:wA(r)}}function yA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Uf(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function xA(t,e){let n=nM(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function SA(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=ds(t):(r=Dt({},t),rt(!r.pathname||!r.pathname.includes("?"),Uf("?","pathname","search",r)),rt(!r.pathname||!r.pathname.includes("#"),Uf("#","pathname","hash",r)),rt(!r.search||!r.search.includes("#"),Uf("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=_A(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Fs=t=>t.join("/").replace(/\/\/+/g,"/"),MA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),EA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,wA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class fd{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function Vd(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const iM=["post","put","patch","delete"],TA=new Set(iM),AA=["get",...iM],bA=new Set(AA),RA=new Set([301,302,303,307,308]),CA=new Set([307,308]),Of={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},PA={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ha={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},xg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,LA=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),rM="remix-router-transitions";function IA(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!n;rt(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(t.mapRouteProperties)r=t.mapRouteProperties;else if(t.detectErrorBoundary){let D=t.detectErrorBoundary;r=k=>({hasErrorBoundary:D(k)})}else r=LA;let s={},o=Vl(t.routes,r,void 0,s),a,l=t.basename||"/",c=t.unstable_dataStrategy||kA,u=t.unstable_patchRoutesOnNavigation,d=Dt({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),f=null,p=new Set,g=1e3,v=new Set,m=null,h=null,_=null,y=t.hydrationData!=null,x=As(o,t.history.location,l),R=null;if(x==null&&!u){let D=In(404,{pathname:t.history.location.pathname}),{matches:k,route:V}=b_(o);x=k,R={[V.id]:D}}x&&!t.hydrationData&&hs(x,o,t.history.location.pathname).active&&(x=null);let A;if(x)if(x.some(D=>D.route.lazy))A=!1;else if(!x.some(D=>D.route.loader))A=!0;else if(d.v7_partialHydration){let D=t.hydrationData?t.hydrationData.loaderData:null,k=t.hydrationData?t.hydrationData.errors:null,V=te=>te.route.loader?typeof te.route.loader=="function"&&te.route.loader.hydrate===!0?!1:D&&D[te.route.id]!==void 0||k&&k[te.route.id]!==void 0:!0;if(k){let te=x.findIndex(Me=>k[Me.route.id]!==void 0);A=x.slice(0,te+1).every(V)}else A=x.every(V)}else A=t.hydrationData!=null;else if(A=!1,x=[],d.v7_partialHydration){let D=hs(null,o,t.history.location.pathname);D.active&&D.matches&&(x=D.matches)}let b,w={historyAction:t.history.action,location:t.history.location,matches:x,initialized:A,navigation:Of,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||R,fetchers:new Map,blockers:new Map},T=Xt.Pop,S=!1,L,W=!1,H=new Map,X=null,J=!1,K=!1,se=[],F=new Set,j=new Map,Q=0,ue=-1,Ee=new Map,je=new Set,$=new Map,oe=new Map,fe=new Set,pe=new Map,Re=new Map,Fe=new Map,Xe;function mt(){if(f=t.history.listen(D=>{let{action:k,location:V,delta:te}=D;if(Xe){Xe(),Xe=void 0;return}ra(Re.size===0||te!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Me=me({currentLocation:w.location,nextLocation:V,historyAction:k});if(Me&&te!=null){let Ie=new Promise(Ge=>{Xe=Ge});t.history.go(te*-1),Z(Me,{state:"blocked",location:V,proceed(){Z(Me,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),Ie.then(()=>t.history.go(te))},reset(){let Ge=new Map(w.blockers);Ge.set(Me,Ha),$e({blockers:Ge})}});return}return ke(k,V)}),n){JA(e,H);let D=()=>eb(e,H);e.addEventListener("pagehide",D),X=()=>e.removeEventListener("pagehide",D)}return w.initialized||ke(Xt.Pop,w.location,{initialHydration:!0}),b}function I(){f&&f(),X&&X(),p.clear(),L&&L.abort(),w.fetchers.forEach((D,k)=>Ve(k)),w.blockers.forEach((D,k)=>q(k))}function kt(D){return p.add(D),()=>p.delete(D)}function $e(D,k){k===void 0&&(k={}),w=Dt({},w,D);let V=[],te=[];d.v7_fetcherPersist&&w.fetchers.forEach((Me,Ie)=>{Me.state==="idle"&&(fe.has(Ie)?te.push(Ie):V.push(Ie))}),[...p].forEach(Me=>Me(w,{deletedFetchers:te,unstable_viewTransitionOpts:k.viewTransitionOpts,unstable_flushSync:k.flushSync===!0})),d.v7_fetcherPersist&&(V.forEach(Me=>w.fetchers.delete(Me)),te.forEach(Me=>Ve(Me)))}function at(D,k,V){var te,Me;let{flushSync:Ie}=V===void 0?{}:V,Ge=w.actionData!=null&&w.navigation.formMethod!=null&&Di(w.navigation.formMethod)&&w.navigation.state==="loading"&&((te=D.state)==null?void 0:te._isRedirect)!==!0,xe;k.actionData?Object.keys(k.actionData).length>0?xe=k.actionData:xe=null:Ge?xe=w.actionData:xe=null;let M=k.loaderData?T_(w.loaderData,k.loaderData,k.matches||[],k.errors):w.loaderData,C=w.blockers;C.size>0&&(C=new Map(C),C.forEach((U,ee)=>C.set(ee,Ha)));let N=S===!0||w.navigation.formMethod!=null&&Di(w.navigation.formMethod)&&((Me=D.state)==null?void 0:Me._isRedirect)!==!0;a&&(o=a,a=void 0),J||T===Xt.Pop||(T===Xt.Push?t.history.push(D,D.state):T===Xt.Replace&&t.history.replace(D,D.state));let z;if(T===Xt.Pop){let U=H.get(w.location.pathname);U&&U.has(D.pathname)?z={currentLocation:w.location,nextLocation:D}:H.has(D.pathname)&&(z={currentLocation:D,nextLocation:w.location})}else if(W){let U=H.get(w.location.pathname);U?U.add(D.pathname):(U=new Set([D.pathname]),H.set(w.location.pathname,U)),z={currentLocation:w.location,nextLocation:D}}$e(Dt({},k,{actionData:xe,loaderData:M,historyAction:T,location:D,initialized:!0,navigation:Of,revalidation:"idle",restoreScrollPosition:ei(D,k.matches||w.matches),preventScrollReset:N,blockers:C}),{viewTransitionOpts:z,flushSync:Ie===!0}),T=Xt.Pop,S=!1,W=!1,J=!1,K=!1,se=[]}async function De(D,k){if(typeof D=="number"){t.history.go(D);return}let V=Mp(w.location,w.matches,l,d.v7_prependBasename,D,d.v7_relativeSplatPath,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:te,submission:Me,error:Ie}=y_(d.v7_normalizeFormMethod,!1,V,k),Ge=w.location,xe=Hl(w.location,te,k&&k.state);xe=Dt({},xe,t.history.encodeLocation(xe));let M=k&&k.replace!=null?k.replace:void 0,C=Xt.Push;M===!0?C=Xt.Replace:M===!1||Me!=null&&Di(Me.formMethod)&&Me.formAction===w.location.pathname+w.location.search&&(C=Xt.Replace);let N=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,z=(k&&k.unstable_flushSync)===!0,U=me({currentLocation:Ge,nextLocation:xe,historyAction:C});if(U){Z(U,{state:"blocked",location:xe,proceed(){Z(U,{state:"proceeding",proceed:void 0,reset:void 0,location:xe}),De(D,k)},reset(){let ee=new Map(w.blockers);ee.set(U,Ha),$e({blockers:ee})}});return}return await ke(C,xe,{submission:Me,pendingError:Ie,preventScrollReset:N,replace:k&&k.replace,enableViewTransition:k&&k.unstable_viewTransition,flushSync:z})}function Bt(){if(Ke(),$e({revalidation:"loading"}),w.navigation.state!=="submitting"){if(w.navigation.state==="idle"){ke(w.historyAction,w.location,{startUninterruptedRevalidation:!0});return}ke(T||w.historyAction,w.navigation.location,{overrideNavigation:w.navigation,enableViewTransition:W===!0})}}async function ke(D,k,V){L&&L.abort(),L=null,T=D,J=(V&&V.startUninterruptedRevalidation)===!0,Ai(w.location,w.matches),S=(V&&V.preventScrollReset)===!0,W=(V&&V.enableViewTransition)===!0;let te=a||o,Me=V&&V.overrideNavigation,Ie=As(te,k,l),Ge=(V&&V.flushSync)===!0,xe=hs(Ie,te,k.pathname);if(xe.active&&xe.matches&&(Ie=xe.matches),!Ie){let{error:re,notFoundMatches:ve,route:ge}=He(k.pathname);at(k,{matches:ve,loaderData:{},errors:{[ge.id]:re}},{flushSync:Ge});return}if(w.initialized&&!K&&WA(w.location,k)&&!(V&&V.submission&&Di(V.submission.formMethod))){at(k,{matches:Ie},{flushSync:Ge});return}L=new AbortController;let M=Js(t.history,k,L.signal,V&&V.submission),C;if(V&&V.pendingError)C=[Uo(Ie).route.id,{type:St.error,error:V.pendingError}];else if(V&&V.submission&&Di(V.submission.formMethod)){let re=await Ye(M,k,V.submission,Ie,xe.active,{replace:V.replace,flushSync:Ge});if(re.shortCircuited)return;if(re.pendingActionResult){let[ve,ge]=re.pendingActionResult;if(oi(ge)&&Vd(ge.error)&&ge.error.status===404){L=null,at(k,{matches:re.matches,loaderData:{},errors:{[ve]:ge.error}});return}}Ie=re.matches||Ie,C=re.pendingActionResult,Me=Ff(k,V.submission),Ge=!1,xe.active=!1,M=Js(t.history,M.url,M.signal)}let{shortCircuited:N,matches:z,loaderData:U,errors:ee}=await P(M,k,Ie,xe.active,Me,V&&V.submission,V&&V.fetcherSubmission,V&&V.replace,V&&V.initialHydration===!0,Ge,C);N||(L=null,at(k,Dt({matches:z||Ie},A_(C),{loaderData:U,errors:ee})))}async function Ye(D,k,V,te,Me,Ie){Ie===void 0&&(Ie={}),Ke();let Ge=QA(k,V);if($e({navigation:Ge},{flushSync:Ie.flushSync===!0}),Me){let C=await hi(te,k.pathname,D.signal);if(C.type==="aborted")return{shortCircuited:!0};if(C.type==="error"){let{boundaryId:N,error:z}=nt(k.pathname,C);return{matches:C.partialMatches,pendingActionResult:[N,{type:St.error,error:z}]}}else if(C.matches)te=C.matches;else{let{notFoundMatches:N,error:z,route:U}=He(k.pathname);return{matches:N,pendingActionResult:[U.id,{type:St.error,error:z}]}}}let xe,M=ol(te,k);if(!M.route.action&&!M.route.lazy)xe={type:St.error,error:In(405,{method:D.method,pathname:k.pathname,routeId:M.route.id})};else if(xe=(await ye("action",w,D,[M],te,null))[M.route.id],D.signal.aborted)return{shortCircuited:!0};if(Is(xe)){let C;return Ie&&Ie.replace!=null?C=Ie.replace:C=M_(xe.response.headers.get("Location"),new URL(D.url),l)===w.location.pathname+w.location.search,await Pe(D,xe,!0,{submission:V,replace:C}),{shortCircuited:!0}}if(Yr(xe))throw In(400,{type:"defer-action"});if(oi(xe)){let C=Uo(te,M.route.id);return(Ie&&Ie.replace)!==!0&&(T=Xt.Push),{matches:te,pendingActionResult:[C.route.id,xe]}}return{matches:te,pendingActionResult:[M.route.id,xe]}}async function P(D,k,V,te,Me,Ie,Ge,xe,M,C,N){let z=Me||Ff(k,Ie),U=Ie||Ge||C_(z),ee=!J&&(!d.v7_partialHydration||!M);if(te){if(ee){let Oe=E(N);$e(Dt({navigation:z},Oe!==void 0?{actionData:Oe}:{}),{flushSync:C})}let Le=await hi(V,k.pathname,D.signal);if(Le.type==="aborted")return{shortCircuited:!0};if(Le.type==="error"){let{boundaryId:Oe,error:At}=nt(k.pathname,Le);return{matches:Le.partialMatches,loaderData:{},errors:{[Oe]:At}}}else if(Le.matches)V=Le.matches;else{let{error:Oe,notFoundMatches:At,route:gt}=He(k.pathname);return{matches:At,loaderData:{},errors:{[gt.id]:Oe}}}}let re=a||o,[ve,ge]=x_(t.history,w,V,U,k,d.v7_partialHydration&&M===!0,d.v7_skipActionErrorRevalidation,K,se,F,fe,$,je,re,l,N);if(Pt(Le=>!(V&&V.some(Oe=>Oe.route.id===Le))||ve&&ve.some(Oe=>Oe.route.id===Le)),ue=++Q,ve.length===0&&ge.length===0){let Le=Et();return at(k,Dt({matches:V,loaderData:{},errors:N&&oi(N[1])?{[N[0]]:N[1].error}:null},A_(N),Le?{fetchers:new Map(w.fetchers)}:{}),{flushSync:C}),{shortCircuited:!0}}if(ee){let Le={};if(!te){Le.navigation=z;let Oe=E(N);Oe!==void 0&&(Le.actionData=Oe)}ge.length>0&&(Le.fetchers=G(ge)),$e(Le,{flushSync:C})}ge.forEach(Le=>{j.has(Le.key)&&Be(Le.key),Le.controller&&j.set(Le.key,Le.controller)});let Ue=()=>ge.forEach(Le=>Be(Le.key));L&&L.signal.addEventListener("abort",Ue);let{loaderResults:Ne,fetcherResults:be}=await we(w,V,ve,ge,D);if(D.signal.aborted)return{shortCircuited:!0};L&&L.signal.removeEventListener("abort",Ue),ge.forEach(Le=>j.delete(Le.key));let tt=Pc(Ne);if(tt)return await Pe(D,tt.result,!0,{replace:xe}),{shortCircuited:!0};if(tt=Pc(be),tt)return je.add(tt.key),await Pe(D,tt.result,!0,{replace:xe}),{shortCircuited:!0};let{loaderData:Mt,errors:ht}=w_(w,V,ve,Ne,N,ge,be,pe);pe.forEach((Le,Oe)=>{Le.subscribe(At=>{(At||Le.done)&&pe.delete(Oe)})}),d.v7_partialHydration&&M&&w.errors&&Object.entries(w.errors).filter(Le=>{let[Oe]=Le;return!ve.some(At=>At.route.id===Oe)}).forEach(Le=>{let[Oe,At]=Le;ht=Object.assign(ht||{},{[Oe]:At})});let nn=Et(),lt=B(ue),Ce=nn||lt||ge.length>0;return Dt({matches:V,loaderData:Mt,errors:ht},Ce?{fetchers:new Map(w.fetchers)}:{})}function E(D){if(D&&!oi(D[1]))return{[D[0]]:D[1].data};if(w.actionData)return Object.keys(w.actionData).length===0?null:w.actionData}function G(D){return D.forEach(k=>{let V=w.fetchers.get(k.key),te=Va(void 0,V?V.data:void 0);w.fetchers.set(k.key,te)}),new Map(w.fetchers)}function ne(D,k,V,te){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");j.has(D)&&Be(D);let Me=(te&&te.unstable_flushSync)===!0,Ie=a||o,Ge=Mp(w.location,w.matches,l,d.v7_prependBasename,V,d.v7_relativeSplatPath,k,te==null?void 0:te.relative),xe=As(Ie,Ge,l),M=hs(xe,Ie,Ge);if(M.active&&M.matches&&(xe=M.matches),!xe){Se(D,k,In(404,{pathname:Ge}),{flushSync:Me});return}let{path:C,submission:N,error:z}=y_(d.v7_normalizeFormMethod,!0,Ge,te);if(z){Se(D,k,z,{flushSync:Me});return}let U=ol(xe,C);if(S=(te&&te.preventScrollReset)===!0,N&&Di(N.formMethod)){ae(D,k,C,U,xe,M.active,Me,N);return}$.set(D,{routeId:k,path:C}),ie(D,k,C,U,xe,M.active,Me,N)}async function ae(D,k,V,te,Me,Ie,Ge,xe){Ke(),$.delete(D);function M(gt){if(!gt.route.action&&!gt.route.lazy){let It=In(405,{method:xe.formMethod,pathname:V,routeId:k});return Se(D,k,It,{flushSync:Ge}),!0}return!1}if(!Ie&&M(te))return;let C=w.fetchers.get(D);le(D,ZA(xe,C),{flushSync:Ge});let N=new AbortController,z=Js(t.history,V,N.signal,xe);if(Ie){let gt=await hi(Me,V,z.signal);if(gt.type==="aborted")return;if(gt.type==="error"){let{error:It}=nt(V,gt);Se(D,k,It,{flushSync:Ge});return}else if(gt.matches){if(Me=gt.matches,te=ol(Me,V),M(te))return}else{Se(D,k,In(404,{pathname:V}),{flushSync:Ge});return}}j.set(D,N);let U=Q,re=(await ye("action",w,z,[te],Me,D))[te.route.id];if(z.signal.aborted){j.get(D)===N&&j.delete(D);return}if(d.v7_fetcherPersist&&fe.has(D)){if(Is(re)||oi(re)){le(D,Br(void 0));return}}else{if(Is(re))if(j.delete(D),ue>U){le(D,Br(void 0));return}else return je.add(D),le(D,Va(xe)),Pe(z,re,!1,{fetcherSubmission:xe});if(oi(re)){Se(D,k,re.error);return}}if(Yr(re))throw In(400,{type:"defer-action"});let ve=w.navigation.location||w.location,ge=Js(t.history,ve,N.signal),Ue=a||o,Ne=w.navigation.state!=="idle"?As(Ue,w.navigation.location,l):w.matches;rt(Ne,"Didn't find any matches after fetcher action");let be=++Q;Ee.set(D,be);let tt=Va(xe,re.data);w.fetchers.set(D,tt);let[Mt,ht]=x_(t.history,w,Ne,xe,ve,!1,d.v7_skipActionErrorRevalidation,K,se,F,fe,$,je,Ue,l,[te.route.id,re]);ht.filter(gt=>gt.key!==D).forEach(gt=>{let It=gt.key,Qs=w.fetchers.get(It),zt=Va(void 0,Qs?Qs.data:void 0);w.fetchers.set(It,zt),j.has(It)&&Be(It),gt.controller&&j.set(It,gt.controller)}),$e({fetchers:new Map(w.fetchers)});let nn=()=>ht.forEach(gt=>Be(gt.key));N.signal.addEventListener("abort",nn);let{loaderResults:lt,fetcherResults:Ce}=await we(w,Ne,Mt,ht,ge);if(N.signal.aborted)return;N.signal.removeEventListener("abort",nn),Ee.delete(D),j.delete(D),ht.forEach(gt=>j.delete(gt.key));let Le=Pc(lt);if(Le)return Pe(ge,Le.result,!1);if(Le=Pc(Ce),Le)return je.add(Le.key),Pe(ge,Le.result,!1);let{loaderData:Oe,errors:At}=w_(w,Ne,Mt,lt,void 0,ht,Ce,pe);if(w.fetchers.has(D)){let gt=Br(re.data);w.fetchers.set(D,gt)}B(be),w.navigation.state==="loading"&&be>ue?(rt(T,"Expected pending action"),L&&L.abort(),at(w.navigation.location,{matches:Ne,loaderData:Oe,errors:At,fetchers:new Map(w.fetchers)})):($e({errors:At,loaderData:T_(w.loaderData,Oe,Ne,At),fetchers:new Map(w.fetchers)}),K=!1)}async function ie(D,k,V,te,Me,Ie,Ge,xe){let M=w.fetchers.get(D);le(D,Va(xe,M?M.data:void 0),{flushSync:Ge});let C=new AbortController,N=Js(t.history,V,C.signal);if(Ie){let re=await hi(Me,V,N.signal);if(re.type==="aborted")return;if(re.type==="error"){let{error:ve}=nt(V,re);Se(D,k,ve,{flushSync:Ge});return}else if(re.matches)Me=re.matches,te=ol(Me,V);else{Se(D,k,In(404,{pathname:V}),{flushSync:Ge});return}}j.set(D,C);let z=Q,ee=(await ye("loader",w,N,[te],Me,D))[te.route.id];if(Yr(ee)&&(ee=await Sg(ee,N.signal,!0)||ee),j.get(D)===C&&j.delete(D),!N.signal.aborted){if(fe.has(D)){le(D,Br(void 0));return}if(Is(ee))if(ue>z){le(D,Br(void 0));return}else{je.add(D),await Pe(N,ee,!1);return}if(oi(ee)){Se(D,k,ee.error);return}rt(!Yr(ee),"Unhandled fetcher deferred data"),le(D,Br(ee.data))}}async function Pe(D,k,V,te){let{submission:Me,fetcherSubmission:Ie,replace:Ge}=te===void 0?{}:te;k.response.headers.has("X-Remix-Revalidate")&&(K=!0);let xe=k.response.headers.get("Location");rt(xe,"Expected a Location header on the redirect Response"),xe=M_(xe,new URL(D.url),l);let M=Hl(w.location,xe,{_isRedirect:!0});if(n){let re=!1;if(k.response.headers.has("X-Remix-Reload-Document"))re=!0;else if(xg.test(xe)){const ve=t.history.createURL(xe);re=ve.origin!==e.location.origin||tc(ve.pathname,l)==null}if(re){Ge?e.location.replace(xe):e.location.assign(xe);return}}L=null;let C=Ge===!0||k.response.headers.has("X-Remix-Replace")?Xt.Replace:Xt.Push,{formMethod:N,formAction:z,formEncType:U}=w.navigation;!Me&&!Ie&&N&&z&&U&&(Me=C_(w.navigation));let ee=Me||Ie;if(CA.has(k.response.status)&&ee&&Di(ee.formMethod))await ke(C,M,{submission:Dt({},ee,{formAction:xe}),preventScrollReset:S,enableViewTransition:V?W:void 0});else{let re=Ff(M,Me);await ke(C,M,{overrideNavigation:re,fetcherSubmission:Ie,preventScrollReset:S,enableViewTransition:V?W:void 0})}}async function ye(D,k,V,te,Me,Ie){let Ge,xe={};try{Ge=await BA(c,D,k,V,te,Me,Ie,s,r)}catch(M){return te.forEach(C=>{xe[C.route.id]={type:St.error,error:M}}),xe}for(let[M,C]of Object.entries(Ge))if(XA(C)){let N=C.result;xe[M]={type:St.redirect,response:VA(N,V,M,Me,l,d.v7_relativeSplatPath)}}else xe[M]=await HA(C);return xe}async function we(D,k,V,te,Me){let Ie=D.matches,Ge=ye("loader",D,Me,V,k,null),xe=Promise.all(te.map(async N=>{if(N.matches&&N.match&&N.controller){let U=(await ye("loader",D,Js(t.history,N.path,N.controller.signal),[N.match],N.matches,N.key))[N.match.route.id];return{[N.key]:U}}else return Promise.resolve({[N.key]:{type:St.error,error:In(404,{pathname:N.path})}})})),M=await Ge,C=(await xe).reduce((N,z)=>Object.assign(N,z),{});return await Promise.all([KA(k,M,Me.signal,Ie,D.loaderData),qA(k,C,te)]),{loaderResults:M,fetcherResults:C}}function Ke(){K=!0,se.push(...Pt()),$.forEach((D,k)=>{j.has(k)&&(F.add(k),Be(k))})}function le(D,k,V){V===void 0&&(V={}),w.fetchers.set(D,k),$e({fetchers:new Map(w.fetchers)},{flushSync:(V&&V.flushSync)===!0})}function Se(D,k,V,te){te===void 0&&(te={});let Me=Uo(w.matches,k);Ve(D),$e({errors:{[Me.route.id]:V},fetchers:new Map(w.fetchers)},{flushSync:(te&&te.flushSync)===!0})}function it(D){return d.v7_fetcherPersist&&(oe.set(D,(oe.get(D)||0)+1),fe.has(D)&&fe.delete(D)),w.fetchers.get(D)||PA}function Ve(D){let k=w.fetchers.get(D);j.has(D)&&!(k&&k.state==="loading"&&Ee.has(D))&&Be(D),$.delete(D),Ee.delete(D),je.delete(D),fe.delete(D),F.delete(D),w.fetchers.delete(D)}function Ae(D){if(d.v7_fetcherPersist){let k=(oe.get(D)||0)-1;k<=0?(oe.delete(D),fe.add(D)):oe.set(D,k)}else Ve(D);$e({fetchers:new Map(w.fetchers)})}function Be(D){let k=j.get(D);rt(k,"Expected fetch controller: "+D),k.abort(),j.delete(D)}function qe(D){for(let k of D){let V=it(k),te=Br(V.data);w.fetchers.set(k,te)}}function Et(){let D=[],k=!1;for(let V of je){let te=w.fetchers.get(V);rt(te,"Expected fetcher: "+V),te.state==="loading"&&(je.delete(V),D.push(V),k=!0)}return qe(D),k}function B(D){let k=[];for(let[V,te]of Ee)if(te<D){let Me=w.fetchers.get(V);rt(Me,"Expected fetcher: "+V),Me.state==="loading"&&(Be(V),Ee.delete(V),k.push(V))}return qe(k),k.length>0}function de(D,k){let V=w.blockers.get(D)||Ha;return Re.get(D)!==k&&Re.set(D,k),V}function q(D){w.blockers.delete(D),Re.delete(D)}function Z(D,k){let V=w.blockers.get(D)||Ha;rt(V.state==="unblocked"&&k.state==="blocked"||V.state==="blocked"&&k.state==="blocked"||V.state==="blocked"&&k.state==="proceeding"||V.state==="blocked"&&k.state==="unblocked"||V.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+V.state+" -> "+k.state);let te=new Map(w.blockers);te.set(D,k),$e({blockers:te})}function me(D){let{currentLocation:k,nextLocation:V,historyAction:te}=D;if(Re.size===0)return;Re.size>1&&ra(!1,"A router only supports one blocker at a time");let Me=Array.from(Re.entries()),[Ie,Ge]=Me[Me.length-1],xe=w.blockers.get(Ie);if(!(xe&&xe.state==="proceeding")&&Ge({currentLocation:k,nextLocation:V,historyAction:te}))return Ie}function He(D){let k=In(404,{pathname:D}),V=a||o,{matches:te,route:Me}=b_(V);return Pt(),{notFoundMatches:te,route:Me,error:k}}function nt(D,k){return{boundaryId:Uo(k.partialMatches).route.id,error:In(400,{type:"route-discovery",pathname:D,message:k.error!=null&&"message"in k.error?k.error:String(k.error)})}}function Pt(D){let k=[];return pe.forEach((V,te)=>{(!D||D(te))&&(V.cancel(),k.push(te),pe.delete(te))}),k}function qt(D,k,V){if(m=D,_=k,h=V||null,!y&&w.navigation===Of){y=!0;let te=ei(w.location,w.matches);te!=null&&$e({restoreScrollPosition:te})}return()=>{m=null,_=null,h=null}}function ct(D,k){return h&&h(D,k.map(te=>sA(te,w.loaderData)))||D.key}function Ai(D,k){if(m&&_){let V=ct(D,k);m[V]=_()}}function ei(D,k){if(m){let V=ct(D,k),te=m[V];if(typeof te=="number")return te}return null}function hs(D,k,V){if(u){if(v.has(V))return{active:!1,matches:D};if(D){if(Object.keys(D[0].params).length>0)return{active:!0,matches:Ru(k,V,l,!0)}}else return{active:!0,matches:Ru(k,V,l,!0)||[]}}return{active:!1,matches:null}}async function hi(D,k,V){let te=D;for(;;){let Me=a==null,Ie=a||o;try{await OA(u,k,te,Ie,s,r,Fe,V)}catch(M){return{type:"error",error:M,partialMatches:te}}finally{Me&&(o=[...o])}if(V.aborted)return{type:"aborted"};let Ge=As(Ie,k,l);if(Ge)return qs(k,v),{type:"success",matches:Ge};let xe=Ru(Ie,k,l,!0);if(!xe||te.length===xe.length&&te.every((M,C)=>M.route.id===xe[C].route.id))return qs(k,v),{type:"success",matches:null};te=xe}}function qs(D,k){if(k.size>=g){let V=k.values().next().value;k.delete(V)}k.add(D)}function dc(D){s={},a=Vl(D,r,void 0,s)}function fc(D,k){let V=a==null;oM(D,k,a||o,s,r),V&&(o=[...o],$e({}))}return b={get basename(){return l},get future(){return d},get state(){return w},get routes(){return o},get window(){return e},initialize:mt,subscribe:kt,enableScrollRestoration:qt,navigate:De,fetch:ne,revalidate:Bt,createHref:D=>t.history.createHref(D),encodeLocation:D=>t.history.encodeLocation(D),getFetcher:it,deleteFetcher:Ae,dispose:I,getBlocker:de,deleteBlocker:q,patchRoutes:fc,_internalFetchControllers:j,_internalActiveDeferreds:pe,_internalSetRoutes:dc},b}function DA(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Mp(t,e,n,i,r,s,o,a){let l,c;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){c=d;break}}else l=e,c=e[e.length-1];let u=SA(r||".",xA(l,s),tc(t.pathname,n)||t.pathname,a==="path");return r==null&&(u.search=t.search,u.hash=t.hash),(r==null||r===""||r===".")&&c&&c.route.index&&!Mg(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Fs([n,u.pathname])),ec(u)}function y_(t,e,n,i){if(!i||!DA(i))return{path:n};if(i.formMethod&&!YA(i.formMethod))return{path:n,error:In(405,{method:i.formMethod})};let r=()=>({path:n,error:In(400,{type:"invalid-body"})}),s=i.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=aM(n);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!Di(o))return r();let f=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((p,g)=>{let[v,m]=g;return""+p+v+"="+m+`
`},""):String(i.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:i.formEncType,formData:void 0,json:void 0,text:f}}}else if(i.formEncType==="application/json"){if(!Di(o))return r();try{let f=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:i.formEncType,formData:void 0,json:f,text:void 0}}}catch{return r()}}}rt(typeof FormData=="function","FormData is not available in this environment");let l,c;if(i.formData)l=Ep(i.formData),c=i.formData;else if(i.body instanceof FormData)l=Ep(i.body),c=i.body;else if(i.body instanceof URLSearchParams)l=i.body,c=E_(l);else if(i.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(i.body),c=E_(l)}catch{return r()}let u={formMethod:o,formAction:a,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Di(u.formMethod))return{path:n,submission:u};let d=ds(n);return e&&d.search&&Mg(d.search)&&l.append("index",""),d.search="?"+l,{path:ec(d),submission:u}}function NA(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function x_(t,e,n,i,r,s,o,a,l,c,u,d,f,p,g,v){let m=v?oi(v[1])?v[1].error:v[1].data:void 0,h=t.createURL(e.location),_=t.createURL(r),y=v&&oi(v[1])?v[0]:void 0,x=y?NA(n,y):n,R=v?v[1].statusCode:void 0,A=o&&R&&R>=400,b=x.filter((T,S)=>{let{route:L}=T;if(L.lazy)return!0;if(L.loader==null)return!1;if(s)return typeof L.loader!="function"||L.loader.hydrate?!0:e.loaderData[L.id]===void 0&&(!e.errors||e.errors[L.id]===void 0);if(UA(e.loaderData,e.matches[S],T)||l.some(X=>X===T.route.id))return!0;let W=e.matches[S],H=T;return S_(T,Dt({currentUrl:h,currentParams:W.params,nextUrl:_,nextParams:H.params},i,{actionResult:m,actionStatus:R,defaultShouldRevalidate:A?!1:a||h.pathname+h.search===_.pathname+_.search||h.search!==_.search||sM(W,H)}))}),w=[];return d.forEach((T,S)=>{if(s||!n.some(J=>J.route.id===T.routeId)||u.has(S))return;let L=As(p,T.path,g);if(!L){w.push({key:S,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let W=e.fetchers.get(S),H=ol(L,T.path),X=!1;f.has(S)?X=!1:c.has(S)?(c.delete(S),X=!0):W&&W.state!=="idle"&&W.data===void 0?X=a:X=S_(H,Dt({currentUrl:h,currentParams:e.matches[e.matches.length-1].params,nextUrl:_,nextParams:n[n.length-1].params},i,{actionResult:m,actionStatus:R,defaultShouldRevalidate:A?!1:a})),X&&w.push({key:S,routeId:T.routeId,path:T.path,matches:L,match:H,controller:new AbortController})}),[b,w]}function UA(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function sM(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function S_(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function OA(t,e,n,i,r,s,o,a){let l=[e,...n.map(c=>c.route.id)].join("-");try{let c=o.get(l);c||(c=t({path:e,matches:n,patch:(u,d)=>{a.aborted||oM(u,d,i,r,s)}}),o.set(l,c)),c&&jA(c)&&await c}finally{o.delete(l)}}function oM(t,e,n,i,r){if(t){var s;let o=i[t];rt(o,"No route found to patch children into: routeId = "+t);let a=Vl(e,r,[t,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],i);o.children?o.children.push(...a):o.children=a}else{let o=Vl(e,r,["patch",String(n.length||"0")],i);n.push(...o)}}async function FA(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let r=n[t.id];rt(r,"No route found in manifest");let s={};for(let o in i){let l=r[o]!==void 0&&o!=="hasErrorBoundary";ra(!l,'Route "'+r.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!iA.has(o)&&(s[o]=i[o])}Object.assign(r,s),Object.assign(r,Dt({},e(r),{lazy:void 0}))}async function kA(t){let{matches:e}=t,n=e.filter(r=>r.shouldLoad);return(await Promise.all(n.map(r=>r.resolve()))).reduce((r,s,o)=>Object.assign(r,{[n[o].route.id]:s}),{})}async function BA(t,e,n,i,r,s,o,a,l,c){let u=s.map(p=>p.route.lazy?FA(p.route,l,a):void 0),d=s.map((p,g)=>{let v=u[g],m=r.some(_=>_.route.id===p.route.id);return Dt({},p,{shouldLoad:m,resolve:async _=>(_&&i.method==="GET"&&(p.route.lazy||p.route.loader)&&(m=!0),m?zA(e,i,p,v,_,c):Promise.resolve({type:St.data,result:void 0}))})}),f=await t({matches:d,request:i,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(u)}catch{}return f}async function zA(t,e,n,i,r,s){let o,a,l=c=>{let u,d=new Promise((g,v)=>u=v);a=()=>u(),e.signal.addEventListener("abort",a);let f=g=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:s},...g!==void 0?[g]:[]),p=(async()=>{try{return{type:"data",result:await(r?r(v=>f(v)):f())}}catch(g){return{type:"error",result:g}}})();return Promise.race([p,d])};try{let c=n.route[t];if(i)if(c){let u,[d]=await Promise.all([l(c).catch(f=>{u=f}),i]);if(u!==void 0)throw u;o=d}else if(await i,c=n.route[t],c)o=await l(c);else if(t==="action"){let u=new URL(e.url),d=u.pathname+u.search;throw In(405,{method:e.method,pathname:d,routeId:n.route.id})}else return{type:St.data,result:void 0};else if(c)o=await l(c);else{let u=new URL(e.url),d=u.pathname+u.search;throw In(404,{pathname:d})}rt(o.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:St.error,result:c}}finally{a&&e.signal.removeEventListener("abort",a)}return o}async function HA(t){let{result:e,type:n}=t;if(lM(e)){let c;try{let u=e.headers.get("Content-Type");u&&/\bapplication\/json\b/.test(u)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(u){return{type:St.error,error:u}}return n===St.error?{type:St.error,error:new fd(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:St.data,data:c,statusCode:e.status,headers:e.headers}}if(n===St.error){if(R_(e)){var i;if(e.data instanceof Error){var r;return{type:St.error,error:e.data,statusCode:(r=e.init)==null?void 0:r.status}}e=new fd(((i=e.init)==null?void 0:i.status)||500,void 0,e.data)}return{type:St.error,error:e,statusCode:Vd(e)?e.status:void 0}}if($A(e)){var s,o;return{type:St.deferred,deferredData:e,statusCode:(s=e.init)==null?void 0:s.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(R_(e)){var a,l;return{type:St.data,data:e.data,statusCode:(a=e.init)==null?void 0:a.status,headers:(l=e.init)!=null&&l.headers?new Headers(e.init.headers):void 0}}return{type:St.data,data:e}}function VA(t,e,n,i,r,s){let o=t.headers.get("Location");if(rt(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!xg.test(o)){let a=i.slice(0,i.findIndex(l=>l.route.id===n)+1);o=Mp(new URL(e.url),a,r,!0,o,s),t.headers.set("Location",o)}return t}function M_(t,e,n){if(xg.test(t)){let i=t,r=i.startsWith("//")?new URL(e.protocol+i):new URL(i),s=tc(r.pathname,n)!=null;if(r.origin===e.origin&&s)return r.pathname+r.search+r.hash}return t}function Js(t,e,n,i){let r=t.createURL(aM(e)).toString(),s={signal:n};if(i&&Di(i.formMethod)){let{formMethod:o,formEncType:a}=i;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(i.json)):a==="text/plain"?s.body=i.text:a==="application/x-www-form-urlencoded"&&i.formData?s.body=Ep(i.formData):s.body=i.formData}return new Request(r,s)}function Ep(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,typeof i=="string"?i:i.name);return e}function E_(t){let e=new FormData;for(let[n,i]of t.entries())e.append(n,i);return e}function GA(t,e,n,i,r){let s={},o=null,a,l=!1,c={},u=n&&oi(n[1])?n[1].error:void 0;return t.forEach(d=>{if(!(d.route.id in e))return;let f=d.route.id,p=e[f];if(rt(!Is(p),"Cannot handle redirect results in processLoaderData"),oi(p)){let g=p.error;u!==void 0&&(g=u,u=void 0),o=o||{};{let v=Uo(t,f);o[v.route.id]==null&&(o[v.route.id]=g)}s[f]=void 0,l||(l=!0,a=Vd(p.error)?p.error.status:500),p.headers&&(c[f]=p.headers)}else Yr(p)?(i.set(f,p.deferredData),s[f]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!l&&(a=p.statusCode),p.headers&&(c[f]=p.headers)):(s[f]=p.data,p.statusCode&&p.statusCode!==200&&!l&&(a=p.statusCode),p.headers&&(c[f]=p.headers))}),u!==void 0&&n&&(o={[n[0]]:u},s[n[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:c}}function w_(t,e,n,i,r,s,o,a){let{loaderData:l,errors:c}=GA(e,i,r,a);return s.forEach(u=>{let{key:d,match:f,controller:p}=u,g=o[d];if(rt(g,"Did not find corresponding fetcher result"),!(p&&p.signal.aborted))if(oi(g)){let v=Uo(t.matches,f==null?void 0:f.route.id);c&&c[v.route.id]||(c=Dt({},c,{[v.route.id]:g.error})),t.fetchers.delete(d)}else if(Is(g))rt(!1,"Unhandled fetcher revalidation redirect");else if(Yr(g))rt(!1,"Unhandled fetcher deferred data");else{let v=Br(g.data);t.fetchers.set(d,v)}}),{loaderData:l,errors:c}}function T_(t,e,n,i){let r=Dt({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(r[o]=e[o]):t[o]!==void 0&&s.route.loader&&(r[o]=t[o]),i&&i.hasOwnProperty(o))break}return r}function A_(t){return t?oi(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Uo(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function b_(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function In(t,e){let{pathname:n,routeId:i,method:r,type:s,message:o}=e===void 0?{}:e,a="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(a="Bad Request",s==="route-discovery"?l='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+o):r&&n&&i?l="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":s==="defer-action"?l="defer() is not supported in actions":s==="invalid-body"&&(l="Unable to encode submission body")):t===403?(a="Forbidden",l='Route "'+i+'" does not match URL "'+n+'"'):t===404?(a="Not Found",l='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",r&&n&&i?l="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(l='Invalid request method "'+r.toUpperCase()+'"')),new fd(t||500,a,new Error(l),!0)}function Pc(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[i,r]=e[n];if(Is(r))return{key:i,result:r}}}function aM(t){let e=typeof t=="string"?ds(t):t;return ec(Dt({},e,{hash:""}))}function WA(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function jA(t){return typeof t=="object"&&t!=null&&"then"in t}function XA(t){return lM(t.result)&&RA.has(t.result.status)}function Yr(t){return t.type===St.deferred}function oi(t){return t.type===St.error}function Is(t){return(t&&t.type)===St.redirect}function R_(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function $A(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function lM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function YA(t){return bA.has(t.toLowerCase())}function Di(t){return TA.has(t.toLowerCase())}async function KA(t,e,n,i,r){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[a,l]=s[o],c=t.find(f=>(f==null?void 0:f.route.id)===a);if(!c)continue;let u=i.find(f=>f.route.id===c.route.id),d=u!=null&&!sM(u,c)&&(r&&r[c.route.id])!==void 0;Yr(l)&&d&&await Sg(l,n,!1).then(f=>{f&&(e[a]=f)})}}async function qA(t,e,n){for(let i=0;i<n.length;i++){let{key:r,routeId:s,controller:o}=n[i],a=e[r];t.find(c=>(c==null?void 0:c.route.id)===s)&&Yr(a)&&(rt(o,"Expected an AbortController for revalidating fetcher deferred result"),await Sg(a,o.signal,!0).then(c=>{c&&(e[r]=c)}))}}async function Sg(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:St.data,data:t.deferredData.unwrappedData}}catch(r){return{type:St.error,error:r}}return{type:St.data,data:t.deferredData.data}}}function Mg(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function ol(t,e){let n=typeof e=="string"?ds(e).search:e.search;if(t[t.length-1].route.index&&Mg(n||""))return t[t.length-1];let i=nM(t);return i[i.length-1]}function C_(t){let{formMethod:e,formAction:n,formEncType:i,text:r,formData:s,json:o}=t;if(!(!e||!n||!i)){if(r!=null)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:void 0,text:r};if(s!=null)return{formMethod:e,formAction:n,formEncType:i,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:o,text:void 0}}}function Ff(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function QA(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Va(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ZA(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function Br(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function JA(t,e){try{let n=t.sessionStorage.getItem(rM);if(n){let i=JSON.parse(n);for(let[r,s]of Object.entries(i||{}))s&&Array.isArray(s)&&e.set(r,new Set(s||[]))}}catch{}}function eb(t,e){if(e.size>0){let n={};for(let[i,r]of e)n[i]=[...r];try{t.sessionStorage.setItem(rM,JSON.stringify(n))}catch(i){ra(!1,"Failed to save applied view transitions in sessionStorage ("+i+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wp(){return wp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},wp.apply(this,arguments)}const cM=he.createContext(null),uM=he.createContext(null),dM=he.createContext(null),Eg=he.createContext(null),nc=he.createContext({outlet:null,matches:[],isDataRoute:!1}),fM=he.createContext(null);function wg(){return he.useContext(Eg)!=null}function tb(){return wg()||rt(!1),he.useContext(Eg).location}const nb=he.createContext(null);function ib(t){let e=he.useContext(nc).outlet;return e&&he.createElement(nb.Provider,{value:t},e)}function rb(t,e,n,i){wg()||rt(!1);let{navigator:r}=he.useContext(dM),{matches:s}=he.useContext(nc),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=tb(),u;u=c;let d=u.pathname||"/",f=d;if(l!=="/"){let v=l.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(v.length).join("/")}let p=As(t,{pathname:f});return cb(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Fs([l,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Fs([l,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,i)}function sb(){let t=hb(),e=Vd(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),n?he.createElement("pre",{style:r},n):null,null)}const ob=he.createElement(sb,null);class ab extends he.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?he.createElement(nc.Provider,{value:this.props.routeContext},he.createElement(fM.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lb(t){let{routeContext:e,match:n,children:i}=t,r=he.useContext(cM);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),he.createElement(nc.Provider,{value:e},i)}function cb(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||rt(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:p}=n,g=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,f)=>{let p,g=!1,v=null,m=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,v=d.route.errorElement||ob,l&&(c<0&&f===0?(g=!0,m=null):c===f&&(g=!0,m=d.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,f+1)),_=()=>{let y;return p?y=v:g?y=m:d.route.Component?y=he.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=u,he.createElement(lb,{match:d,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?he.createElement(ab,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:_(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):_()},null)}var Tp=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Tp||{});function ub(t){let e=he.useContext(uM);return e||rt(!1),e}function db(t){let e=he.useContext(nc);return e||rt(!1),e}function fb(t){let e=db(),n=e.matches[e.matches.length-1];return n.route.id||rt(!1),n.route.id}function hb(){var t;let e=he.useContext(fM),n=ub(Tp.UseRouteError),i=fb(Tp.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function pb(t){return ib(t.context)}function al(t){rt(!1)}function mb(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Xt.Pop,navigator:s,static:o=!1,future:a}=t;wg()&&rt(!1);let l=e.replace(/^\/*/,"/"),c=he.useMemo(()=>({basename:l,navigator:s,static:o,future:wp({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=ds(i));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:g="default"}=i,v=he.useMemo(()=>{let m=tc(u,l);return m==null?null:{location:{pathname:m,search:d,hash:f,state:p,key:g},navigationType:r}},[l,u,d,f,p,g,r]);return v==null?null:he.createElement(dM.Provider,{value:c},he.createElement(Eg.Provider,{children:n,value:v}))}new Promise(()=>{});function Ap(t,e){e===void 0&&(e=[]);let n=[];return he.Children.forEach(t,(i,r)=>{if(!he.isValidElement(i))return;let s=[...e,r];if(i.type===he.Fragment){n.push.apply(n,Ap(i.props.children,s));return}i.type!==al&&rt(!1),!i.props.index||!i.props.children||rt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ap(i.props.children,s)),n.push(o)}),n}function gb(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:he.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:he.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:he.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hd(){return hd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hd.apply(this,arguments)}const vb="6";try{window.__reactRouterVersion=vb}catch{}function _b(t,e){return IA({basename:void 0,future:hd({},void 0,{v7_prependBasename:!0}),history:eA({window:void 0}),hydrationData:yb(),routes:t,mapRouteProperties:gb,unstable_dataStrategy:void 0,unstable_patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function yb(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=hd({},e,{errors:xb(e.errors)})),e}function xb(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new fd(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let s=window[r.__subType];if(typeof s=="function")try{let o=new s(r.message);o.stack="",n[i]=o}catch{}}if(n[i]==null){let s=new Error(r.message);s.stack="",n[i]=s}}else n[i]=r;return n}const Sb=he.createContext({isTransitioning:!1}),Mb=he.createContext(new Map),Eb="startTransition",P_=Hw[Eb],wb="flushSync",L_=J1[wb];function Tb(t){P_?P_(t):t()}function Ga(t){L_?L_(t):t()}class Ab{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",e(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}}function bb(t){let{fallbackElement:e,router:n,future:i}=t,[r,s]=he.useState(n.state),[o,a]=he.useState(),[l,c]=he.useState({isTransitioning:!1}),[u,d]=he.useState(),[f,p]=he.useState(),[g,v]=he.useState(),m=he.useRef(new Map),{v7_startTransition:h}=i||{},_=he.useCallback(w=>{h?Tb(w):w()},[h]),y=he.useCallback((w,T)=>{let{deletedFetchers:S,unstable_flushSync:L,unstable_viewTransitionOpts:W}=T;S.forEach(X=>m.current.delete(X)),w.fetchers.forEach((X,J)=>{X.data!==void 0&&m.current.set(J,X.data)});let H=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!W||H){L?Ga(()=>s(w)):_(()=>s(w));return}if(L){Ga(()=>{f&&(u&&u.resolve(),f.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:W.currentLocation,nextLocation:W.nextLocation})});let X=n.window.document.startViewTransition(()=>{Ga(()=>s(w))});X.finished.finally(()=>{Ga(()=>{d(void 0),p(void 0),a(void 0),c({isTransitioning:!1})})}),Ga(()=>p(X));return}f?(u&&u.resolve(),f.skipTransition(),v({state:w,currentLocation:W.currentLocation,nextLocation:W.nextLocation})):(a(w),c({isTransitioning:!0,flushSync:!1,currentLocation:W.currentLocation,nextLocation:W.nextLocation}))},[n.window,f,u,m,_]);he.useLayoutEffect(()=>n.subscribe(y),[n,y]),he.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new Ab)},[l]),he.useEffect(()=>{if(u&&o&&n.window){let w=o,T=u.promise,S=n.window.document.startViewTransition(async()=>{_(()=>s(w)),await T});S.finished.finally(()=>{d(void 0),p(void 0),a(void 0),c({isTransitioning:!1})}),p(S)}},[_,o,u,n.window]),he.useEffect(()=>{u&&o&&r.location.key===o.location.key&&u.resolve()},[u,f,r.location,o]),he.useEffect(()=>{!l.isTransitioning&&g&&(a(g.state),c({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),v(void 0))},[l.isTransitioning,g]),he.useEffect(()=>{},[]);let x=he.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:w=>n.navigate(w),push:(w,T,S)=>n.navigate(w,{state:T,preventScrollReset:S==null?void 0:S.preventScrollReset}),replace:(w,T,S)=>n.navigate(w,{replace:!0,state:T,preventScrollReset:S==null?void 0:S.preventScrollReset})}),[n]),R=n.basename||"/",A=he.useMemo(()=>({router:n,navigator:x,static:!1,basename:R}),[n,x,R]),b=he.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return he.createElement(he.Fragment,null,he.createElement(cM.Provider,{value:A},he.createElement(uM.Provider,{value:r},he.createElement(Mb.Provider,{value:m.current},he.createElement(Sb.Provider,{value:l},he.createElement(mb,{basename:R,location:r.location,navigationType:r.historyAction,navigator:x,future:b},r.initialized||n.future.v7_partialHydration?he.createElement(Rb,{routes:n.routes,future:n.future,state:r}):e))))),null)}const Rb=he.memo(Cb);function Cb(t){let{routes:e,future:n,state:i}=t;return rb(e,void 0,i,n)}var I_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(I_||(I_={}));var D_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(D_||(D_={}));const Pb=()=>Y.jsx(Y.Fragment,{children:Y.jsx(pb,{})});var Yn=function(){return Yn=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Yn.apply(this,arguments)};function pd(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return t.concat(s||Array.prototype.slice.call(e))}var Rt="-ms-",Sl="-moz-",pt="-webkit-",hM="comm",Gd="rule",Tg="decl",Lb="@import",pM="@keyframes",Ib="@layer",mM=Math.abs,Ag=String.fromCharCode,bp=Object.assign;function Db(t,e){return on(t,0)^45?(((e<<2^on(t,0))<<2^on(t,1))<<2^on(t,2))<<2^on(t,3):0}function gM(t){return t.trim()}function fr(t,e){return(t=e.exec(t))?t[0]:t}function Je(t,e,n){return t.replace(e,n)}function Cu(t,e,n){return t.indexOf(e,n)}function on(t,e){return t.charCodeAt(e)|0}function sa(t,e,n){return t.slice(e,n)}function Yi(t){return t.length}function vM(t){return t.length}function ll(t,e){return e.push(t),t}function Nb(t,e){return t.map(e).join("")}function N_(t,e){return t.filter(function(n){return!fr(n,e)})}var Wd=1,oa=1,_M=0,Ei=0,$t=0,Ta="";function jd(t,e,n,i,r,s,o,a){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:Wd,column:oa,length:o,return:"",siblings:a}}function zr(t,e){return bp(jd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function eo(t){for(;t.root;)t=zr(t.root,{children:[t]});ll(t,t.siblings)}function Ub(){return $t}function Ob(){return $t=Ei>0?on(Ta,--Ei):0,oa--,$t===10&&(oa=1,Wd--),$t}function zi(){return $t=Ei<_M?on(Ta,Ei++):0,oa++,$t===10&&(oa=1,Wd++),$t}function ks(){return on(Ta,Ei)}function Pu(){return Ei}function Xd(t,e){return sa(Ta,t,e)}function Rp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fb(t){return Wd=oa=1,_M=Yi(Ta=t),Ei=0,[]}function kb(t){return Ta="",t}function kf(t){return gM(Xd(Ei-1,Cp(t===91?t+2:t===40?t+1:t)))}function Bb(t){for(;($t=ks())&&$t<33;)zi();return Rp(t)>2||Rp($t)>3?"":" "}function zb(t,e){for(;--e&&zi()&&!($t<48||$t>102||$t>57&&$t<65||$t>70&&$t<97););return Xd(t,Pu()+(e<6&&ks()==32&&zi()==32))}function Cp(t){for(;zi();)switch($t){case t:return Ei;case 34:case 39:t!==34&&t!==39&&Cp($t);break;case 40:t===41&&Cp(t);break;case 92:zi();break}return Ei}function Hb(t,e){for(;zi()&&t+$t!==57;)if(t+$t===84&&ks()===47)break;return"/*"+Xd(e,Ei-1)+"*"+Ag(t===47?t:zi())}function Vb(t){for(;!Rp(ks());)zi();return Xd(t,Ei)}function Gb(t){return kb(Lu("",null,null,null,[""],t=Fb(t),0,[0],t))}function Lu(t,e,n,i,r,s,o,a,l){for(var c=0,u=0,d=o,f=0,p=0,g=0,v=1,m=1,h=1,_=0,y="",x=r,R=s,A=i,b=y;m;)switch(g=_,_=zi()){case 40:if(g!=108&&on(b,d-1)==58){Cu(b+=Je(kf(_),"&","&\f"),"&\f",mM(c?a[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:b+=kf(_);break;case 9:case 10:case 13:case 32:b+=Bb(g);break;case 92:b+=zb(Pu()-1,7);continue;case 47:switch(ks()){case 42:case 47:ll(Wb(Hb(zi(),Pu()),e,n,l),l);break;default:b+="/"}break;case 123*v:a[c++]=Yi(b)*h;case 125*v:case 59:case 0:switch(_){case 0:case 125:m=0;case 59+u:h==-1&&(b=Je(b,/\f/g,"")),p>0&&Yi(b)-d&&ll(p>32?O_(b+";",i,n,d-1,l):O_(Je(b," ","")+";",i,n,d-2,l),l);break;case 59:b+=";";default:if(ll(A=U_(b,e,n,c,u,r,a,y,x=[],R=[],d,s),s),_===123)if(u===0)Lu(b,e,A,A,x,s,d,a,R);else switch(f===99&&on(b,3)===110?100:f){case 100:case 108:case 109:case 115:Lu(t,A,A,i&&ll(U_(t,A,A,0,0,r,a,y,r,x=[],d,R),R),r,R,d,a,i?x:R);break;default:Lu(b,A,A,A,[""],R,0,a,R)}}c=u=p=0,v=h=1,y=b="",d=o;break;case 58:d=1+Yi(b),p=g;default:if(v<1){if(_==123)--v;else if(_==125&&v++==0&&Ob()==125)continue}switch(b+=Ag(_),_*v){case 38:h=u>0?1:(b+="\f",-1);break;case 44:a[c++]=(Yi(b)-1)*h,h=1;break;case 64:ks()===45&&(b+=kf(zi())),f=ks(),u=d=Yi(y=b+=Vb(Pu())),_++;break;case 45:g===45&&Yi(b)==2&&(v=0)}}return s}function U_(t,e,n,i,r,s,o,a,l,c,u,d){for(var f=r-1,p=r===0?s:[""],g=vM(p),v=0,m=0,h=0;v<i;++v)for(var _=0,y=sa(t,f+1,f=mM(m=o[v])),x=t;_<g;++_)(x=gM(m>0?p[_]+" "+y:Je(y,/&\f/g,p[_])))&&(l[h++]=x);return jd(t,e,n,r===0?Gd:a,l,c,u,d)}function Wb(t,e,n,i){return jd(t,e,n,hM,Ag(Ub()),sa(t,2,-2),0,i)}function O_(t,e,n,i,r){return jd(t,e,n,Tg,sa(t,0,i),sa(t,i+1,-1),i,r)}function yM(t,e,n){switch(Db(t,e)){case 5103:return pt+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pt+t+t;case 4789:return Sl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return pt+t+Sl+t+Rt+t+t;case 5936:switch(on(t,e+11)){case 114:return pt+t+Rt+Je(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return pt+t+Rt+Je(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return pt+t+Rt+Je(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return pt+t+Rt+t+t;case 6165:return pt+t+Rt+"flex-"+t+t;case 5187:return pt+t+Je(t,/(\w+).+(:[^]+)/,pt+"box-$1$2"+Rt+"flex-$1$2")+t;case 5443:return pt+t+Rt+"flex-item-"+Je(t,/flex-|-self/g,"")+(fr(t,/flex-|baseline/)?"":Rt+"grid-row-"+Je(t,/flex-|-self/g,""))+t;case 4675:return pt+t+Rt+"flex-line-pack"+Je(t,/align-content|flex-|-self/g,"")+t;case 5548:return pt+t+Rt+Je(t,"shrink","negative")+t;case 5292:return pt+t+Rt+Je(t,"basis","preferred-size")+t;case 6060:return pt+"box-"+Je(t,"-grow","")+pt+t+Rt+Je(t,"grow","positive")+t;case 4554:return pt+Je(t,/([^-])(transform)/g,"$1"+pt+"$2")+t;case 6187:return Je(Je(Je(t,/(zoom-|grab)/,pt+"$1"),/(image-set)/,pt+"$1"),t,"")+t;case 5495:case 3959:return Je(t,/(image-set\([^]*)/,pt+"$1$`$1");case 4968:return Je(Je(t,/(.+:)(flex-)?(.*)/,pt+"box-pack:$3"+Rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pt+t+t;case 4200:if(!fr(t,/flex-|baseline/))return Rt+"grid-column-align"+sa(t,e)+t;break;case 2592:case 3360:return Rt+Je(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,fr(i.props,/grid-\w+-end/)})?~Cu(t+(n=n[e].value),"span",0)?t:Rt+Je(t,"-start","")+t+Rt+"grid-row-span:"+(~Cu(n,"span",0)?fr(n,/\d+/):+fr(n,/\d+/)-+fr(t,/\d+/))+";":Rt+Je(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return fr(i.props,/grid-\w+-start/)})?t:Rt+Je(Je(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Je(t,/(.+)-inline(.+)/,pt+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Yi(t)-1-e>6)switch(on(t,e+1)){case 109:if(on(t,e+4)!==45)break;case 102:return Je(t,/(.+:)(.+)-([^]+)/,"$1"+pt+"$2-$3$1"+Sl+(on(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Cu(t,"stretch",0)?yM(Je(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Je(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,s,o,a,l,c){return Rt+r+":"+s+c+(o?Rt+r+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(on(t,e+6)===121)return Je(t,":",":"+pt)+t;break;case 6444:switch(on(t,on(t,14)===45?18:11)){case 120:return Je(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pt+(on(t,14)===45?"inline-":"")+"box$3$1"+pt+"$2$3$1"+Rt+"$2box$3")+t;case 100:return Je(t,":",":"+Rt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Je(t,"scroll-","scroll-snap-")+t}return t}function md(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function jb(t,e,n,i){switch(t.type){case Ib:if(t.children.length)break;case Lb:case Tg:return t.return=t.return||t.value;case hM:return"";case pM:return t.return=t.value+"{"+md(t.children,i)+"}";case Gd:if(!Yi(t.value=t.props.join(",")))return""}return Yi(n=md(t.children,i))?t.return=t.value+"{"+n+"}":""}function Xb(t){var e=vM(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function $b(t){return function(e){e.root||(e=e.return)&&t(e)}}function Yb(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case Tg:t.return=yM(t.value,t.length,n);return;case pM:return md([zr(t,{value:Je(t.value,"@","@"+pt)})],i);case Gd:if(t.length)return Nb(n=t.props,function(r){switch(fr(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":eo(zr(t,{props:[Je(r,/:(read-\w+)/,":"+Sl+"$1")]})),eo(zr(t,{props:[r]})),bp(t,{props:N_(n,i)});break;case"::placeholder":eo(zr(t,{props:[Je(r,/:(plac\w+)/,":"+pt+"input-$1")]})),eo(zr(t,{props:[Je(r,/:(plac\w+)/,":"+Sl+"$1")]})),eo(zr(t,{props:[Je(r,/:(plac\w+)/,Rt+"input-$1")]})),eo(zr(t,{props:[r]})),bp(t,{props:N_(n,i)});break}return""})}}var Kb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ri={},aa=typeof process<"u"&&ri!==void 0&&(ri.REACT_APP_SC_ATTR||ri.SC_ATTR)||"data-styled",xM="active",SM="data-styled-version",$d="6.1.13",bg=`/*!sc*/
`,gd=typeof window<"u"&&"HTMLElement"in window,qb=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ri!==void 0&&ri.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ri.REACT_APP_SC_DISABLE_SPEEDY!==""?ri.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ri.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ri!==void 0&&ri.SC_DISABLE_SPEEDY!==void 0&&ri.SC_DISABLE_SPEEDY!==""&&ri.SC_DISABLE_SPEEDY!=="false"&&ri.SC_DISABLE_SPEEDY),Yd=Object.freeze([]),la=Object.freeze({});function Qb(t,e,n){return n===void 0&&(n=la),t.theme!==n.theme&&t.theme||e||n.theme}var MM=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Zb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Jb=/(^-|-$)/g;function F_(t){return t.replace(Zb,"-").replace(Jb,"")}var eR=/(a)(d)/gi,Lc=52,k_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Pp(t){var e,n="";for(e=Math.abs(t);e>Lc;e=e/Lc|0)n=k_(e%Lc)+n;return(k_(e%Lc)+n).replace(eR,"$1-$2")}var Bf,EM=5381,Oo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},wM=function(t){return Oo(EM,t)};function tR(t){return Pp(wM(t)>>>0)}function nR(t){return t.displayName||t.name||"Component"}function zf(t){return typeof t=="string"&&!0}var TM=typeof Symbol=="function"&&Symbol.for,AM=TM?Symbol.for("react.memo"):60115,iR=TM?Symbol.for("react.forward_ref"):60112,rR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},sR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oR=((Bf={})[iR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bf[AM]=bM,Bf);function B_(t){return("type"in(e=t)&&e.type.$$typeof)===AM?bM:"$$typeof"in t?oR[t.$$typeof]:rR;var e}var aR=Object.defineProperty,lR=Object.getOwnPropertyNames,z_=Object.getOwnPropertySymbols,cR=Object.getOwnPropertyDescriptor,uR=Object.getPrototypeOf,H_=Object.prototype;function RM(t,e,n){if(typeof e!="string"){if(H_){var i=uR(e);i&&i!==H_&&RM(t,i,n)}var r=lR(e);z_&&(r=r.concat(z_(e)));for(var s=B_(t),o=B_(e),a=0;a<r.length;++a){var l=r[a];if(!(l in sR||n&&n[l]||o&&l in o||s&&l in s)){var c=cR(e,l);try{aR(t,l,c)}catch{}}}}return t}function ca(t){return typeof t=="function"}function Rg(t){return typeof t=="object"&&"styledComponentId"in t}function Ds(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function V_(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function Gl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Lp(t,e,n){if(n===void 0&&(n=!1),!n&&!Gl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Lp(t[i],e[i]);else if(Gl(e))for(var i in e)t[i]=Lp(t[i],e[i]);return t}function Cg(t,e){Object.defineProperty(t,"toString",{value:e})}function ic(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var dR=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,s=r;e>=s;)if((s<<=1)<0)throw ic(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var o=r;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var s=i;s<r;s++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),s=r+i,o=r;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(bg);return n},t}(),Iu=new Map,vd=new Map,Du=1,Ic=function(t){if(Iu.has(t))return Iu.get(t);for(;vd.has(Du);)Du++;var e=Du++;return Iu.set(t,e),vd.set(e,t),e},fR=function(t,e){Du=e+1,Iu.set(t,e),vd.set(e,t)},hR="style[".concat(aa,"][").concat(SM,'="').concat($d,'"]'),pR=new RegExp("^".concat(aa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mR=function(t,e,n){for(var i,r=n.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&t.registerName(e,i)},gR=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(bg),r=[],s=0,o=i.length;s<o;s++){var a=i[s].trim();if(a){var l=a.match(pR);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(fR(u,c),mR(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},G_=function(t){for(var e=document.querySelectorAll(hR),n=0,i=e.length;n<i;n++){var r=e[n];r&&r.getAttribute(aa)!==xM&&(gR(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function vR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var CM=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(aa,"]")));return l[l.length-1]}(n),s=r!==void 0?r.nextSibling:null;i.setAttribute(aa,xM),i.setAttribute(SM,$d);var o=vR();return o&&i.setAttribute("nonce",o),n.insertBefore(i,s),i},_R=function(){function t(e){this.element=CM(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,s=i.length;r<s;r++){var o=i[r];if(o.ownerNode===n)return o}throw ic(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),yR=function(){function t(e){this.element=CM(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),xR=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),W_=gd,SR={isServer:!gd,useCSSOMInjection:!qb},PM=function(){function t(e,n,i){e===void 0&&(e=la),n===void 0&&(n={});var r=this;this.options=Yn(Yn({},SR),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&gd&&W_&&(W_=!1,G_(this)),Cg(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(d){var f=function(h){return vd.get(h)}(d);if(f===void 0)return"continue";var p=s.names.get(f),g=o.getGroup(d);if(p===void 0||!p.size||g.length===0)return"continue";var v="".concat(aa,".g").concat(d,'[id="').concat(f,'"]'),m="";p!==void 0&&p.forEach(function(h){h.length>0&&(m+="".concat(h,","))}),l+="".concat(g).concat(v,'{content:"').concat(m,'"}').concat(bg)},u=0;u<a;u++)c(u);return l}(r)})}return t.registerId=function(e){return Ic(e)},t.prototype.rehydrate=function(){!this.server&&gd&&G_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Yn(Yn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new xR(r):i?new _R(r):new yR(r)}(this.options),new dR(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ic(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(Ic(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ic(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),MR=/&/g,ER=/^\s*\/\/.*$/gm;function LM(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=LM(n.children,e)),n})}function wR(t){var e,n,i,r=la,s=r.options,o=s===void 0?la:s,a=r.plugins,l=a===void 0?Yd:a,c=function(f,p,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):f},u=l.slice();u.push(function(f){f.type===Gd&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(MR,n).replace(i,c))}),o.prefix&&u.push(Yb),u.push(jb);var d=function(f,p,g,v){p===void 0&&(p=""),g===void 0&&(g=""),v===void 0&&(v="&"),e=v,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var m=f.replace(ER,""),h=Gb(g||p?"".concat(g," ").concat(p," { ").concat(m," }"):m);o.namespace&&(h=LM(h,o.namespace));var _=[];return md(h,Xb(u.concat($b(function(y){return _.push(y)})))),_};return d.hash=l.length?l.reduce(function(f,p){return p.name||ic(15),Oo(f,p.name)},EM).toString():"",d}var TR=new PM,Ip=wR(),IM=qo.createContext({shouldForwardProp:void 0,styleSheet:TR,stylis:Ip});IM.Consumer;qo.createContext(void 0);function j_(){return he.useContext(IM)}var AR=function(){function t(e,n){var i=this;this.inject=function(r,s){s===void 0&&(s=Ip);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Cg(this,function(){throw ic(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Ip),this.name+e.hash},t}(),bR=function(t){return t>="A"&&t<="Z"};function X_(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;bR(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var DM=function(t){return t==null||t===!1||t===""},NM=function(t){var e,n,i=[];for(var r in t){var s=t[r];t.hasOwnProperty(r)&&!DM(s)&&(Array.isArray(s)&&s.isCss||ca(s)?i.push("".concat(X_(r),":"),s,";"):Gl(s)?i.push.apply(i,pd(pd(["".concat(r," {")],NM(s),!1),["}"],!1)):i.push("".concat(X_(r),": ").concat((e=r,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Kb||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Bs(t,e,n,i){if(DM(t))return[];if(Rg(t))return[".".concat(t.styledComponentId)];if(ca(t)){if(!ca(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var r=t(e);return Bs(r,e,n,i)}var s;return t instanceof AR?n?(t.inject(n,i),[t.getName(i)]):[t]:Gl(t)?NM(t):Array.isArray(t)?Array.prototype.concat.apply(Yd,t.map(function(o){return Bs(o,e,n,i)})):[t.toString()]}function RR(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ca(n)&&!Rg(n))return!1}return!0}var CR=wM($d),PR=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&RR(e),this.componentId=n,this.baseHash=Oo(CR,n),this.baseStyle=i,PM.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Ds(r,this.staticRulesId);else{var s=V_(Bs(this.rules,e,n,i)),o=Pp(Oo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=i(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}r=Ds(r,o),this.staticRulesId=o}else{for(var l=Oo(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")c+=d;else if(d){var f=V_(Bs(d,e,n,i));l=Oo(l,f+u),c+=f}}if(c){var p=Pp(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),r=Ds(r,p)}}return r},t}(),UM=qo.createContext(void 0);UM.Consumer;var Hf={};function LR(t,e,n){var i=Rg(t),r=t,s=!zf(t),o=e.attrs,a=o===void 0?Yd:o,l=e.componentId,c=l===void 0?function(x,R){var A=typeof x!="string"?"sc":F_(x);Hf[A]=(Hf[A]||0)+1;var b="".concat(A,"-").concat(tR($d+A+Hf[A]));return R?"".concat(R,"-").concat(b):b}(e.displayName,e.parentComponentId):l,u=e.displayName,d=u===void 0?function(x){return zf(x)?"styled.".concat(x):"Styled(".concat(nR(x),")")}(t):u,f=e.displayName&&e.componentId?"".concat(F_(e.displayName),"-").concat(e.componentId):e.componentId||c,p=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(i&&r.shouldForwardProp){var v=r.shouldForwardProp;if(e.shouldForwardProp){var m=e.shouldForwardProp;g=function(x,R){return v(x,R)&&m(x,R)}}else g=v}var h=new PR(n,f,i?r.componentStyle:void 0);function _(x,R){return function(A,b,w){var T=A.attrs,S=A.componentStyle,L=A.defaultProps,W=A.foldedComponentIds,H=A.styledComponentId,X=A.target,J=qo.useContext(UM),K=j_(),se=A.shouldForwardProp||K.shouldForwardProp,F=Qb(b,J,L)||la,j=function(oe,fe,pe){for(var Re,Fe=Yn(Yn({},fe),{className:void 0,theme:pe}),Xe=0;Xe<oe.length;Xe+=1){var mt=ca(Re=oe[Xe])?Re(Fe):Re;for(var I in mt)Fe[I]=I==="className"?Ds(Fe[I],mt[I]):I==="style"?Yn(Yn({},Fe[I]),mt[I]):mt[I]}return fe.className&&(Fe.className=Ds(Fe.className,fe.className)),Fe}(T,b,F),Q=j.as||X,ue={};for(var Ee in j)j[Ee]===void 0||Ee[0]==="$"||Ee==="as"||Ee==="theme"&&j.theme===F||(Ee==="forwardedAs"?ue.as=j.forwardedAs:se&&!se(Ee,Q)||(ue[Ee]=j[Ee]));var je=function(oe,fe){var pe=j_(),Re=oe.generateAndInjectStyles(fe,pe.styleSheet,pe.stylis);return Re}(S,j),$=Ds(W,H);return je&&($+=" "+je),j.className&&($+=" "+j.className),ue[zf(Q)&&!MM.has(Q)?"class":"className"]=$,ue.ref=w,he.createElement(Q,ue)}(y,x,R)}_.displayName=d;var y=qo.forwardRef(_);return y.attrs=p,y.componentStyle=h,y.displayName=d,y.shouldForwardProp=g,y.foldedComponentIds=i?Ds(r.foldedComponentIds,r.styledComponentId):"",y.styledComponentId=f,y.target=i?r.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=i?function(R){for(var A=[],b=1;b<arguments.length;b++)A[b-1]=arguments[b];for(var w=0,T=A;w<T.length;w++)Lp(R,T[w],!0);return R}({},r.defaultProps,x):x}}),Cg(y,function(){return".".concat(y.styledComponentId)}),s&&RM(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function $_(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var Y_=function(t){return Object.assign(t,{isCss:!0})};function OM(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ca(t)||Gl(t))return Y_(Bs($_(Yd,pd([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Bs(i):Y_(Bs($_(i,e)))}function Dp(t,e,n){if(n===void 0&&(n=la),!e)throw ic(1,e);var i=function(r){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,OM.apply(void 0,pd([r],s,!1)))};return i.attrs=function(r){return Dp(t,e,Yn(Yn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Dp(t,e,Yn(Yn({},n),r))},i}var FM=function(t){return Dp(LR,t)},xt=FM;MM.forEach(function(t){xt[t]=FM(t)});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pg="168",IR=0,K_=1,DR=2,kM=1,NR=2,ur=3,br=0,Zn=1,qi=2,Mr=0,Wo=1,Np=2,q_=3,Q_=4,UR=5,bs=100,OR=101,FR=102,kR=103,BR=104,zR=200,HR=201,VR=202,GR=203,Up=204,Op=205,WR=206,jR=207,XR=208,$R=209,YR=210,KR=211,qR=212,QR=213,ZR=214,JR=0,eC=1,tC=2,_d=3,nC=4,iC=5,rC=6,sC=7,BM=0,oC=1,aC=2,ss=0,zM=1,HM=2,VM=3,GM=4,lC=5,WM=6,jM=7,Z_="attached",cC="detached",XM=300,ua=301,da=302,Fp=303,kp=304,Kd=306,fa=1e3,Kr=1001,yd=1002,Fn=1003,$M=1004,cl=1005,On=1006,Nu=1007,vr=1008,Rr=1009,YM=1010,KM=1011,Wl=1012,Lg=1013,Xs=1014,Fi=1015,Aa=1016,Ig=1017,Dg=1018,ha=1020,qM=35902,QM=1021,ZM=1022,li=1023,JM=1024,eE=1025,jo=1026,pa=1027,Ng=1028,Ug=1029,tE=1030,Og=1031,Fg=1033,Uu=33776,Ou=33777,Fu=33778,ku=33779,Bp=35840,zp=35841,Hp=35842,Vp=35843,Gp=36196,Wp=37492,jp=37496,Xp=37808,$p=37809,Yp=37810,Kp=37811,qp=37812,Qp=37813,Zp=37814,Jp=37815,em=37816,tm=37817,nm=37818,im=37819,rm=37820,sm=37821,Bu=36492,om=36494,am=36495,nE=36283,lm=36284,cm=36285,um=36286,jl=2300,Xl=2301,Vf=2302,J_=2400,e0=2401,t0=2402,uC=2500,dC=0,iE=1,dm=2,fC=3200,hC=3201,rE=0,pC=1,jr="",Nn="srgb",yn="srgb-linear",kg="display-p3",qd="display-p3-linear",xd="linear",wt="srgb",Sd="rec709",Md="p3",to=7680,n0=519,mC=512,gC=513,vC=514,sE=515,_C=516,yC=517,xC=518,SC=519,fm=35044,i0="300 es",_r=2e3,Ed=2001;class ba{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let r0=1234567;const Xo=Math.PI/180,ma=180/Math.PI;function Hi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mn[t&255]+Mn[t>>8&255]+Mn[t>>16&255]+Mn[t>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[n&63|128]+Mn[n>>8&255]+"-"+Mn[n>>16&255]+Mn[n>>24&255]+Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]).toLowerCase()}function mn(t,e,n){return Math.max(e,Math.min(n,t))}function Bg(t,e){return(t%e+e)%e}function MC(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function EC(t,e,n){return t!==e?(n-t)/(e-t):0}function Ml(t,e,n){return(1-n)*t+n*e}function wC(t,e,n,i){return Ml(t,e,1-Math.exp(-n*i))}function TC(t,e=1){return e-Math.abs(Bg(t,e*2)-e)}function AC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function bC(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function RC(t,e){return t+Math.floor(Math.random()*(e-t+1))}function CC(t,e){return t+Math.random()*(e-t)}function PC(t){return t*(.5-Math.random())}function LC(t){t!==void 0&&(r0=t);let e=r0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function IC(t){return t*Xo}function DC(t){return t*ma}function NC(t){return(t&t-1)===0&&t!==0}function UC(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function OC(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function FC(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*d,l*f,a*c);break;case"YZY":t.set(l*f,a*u,l*d,a*c);break;case"ZXZ":t.set(l*d,l*f,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ui(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const zg={DEG2RAD:Xo,RAD2DEG:ma,generateUUID:Hi,clamp:mn,euclideanModulo:Bg,mapLinear:MC,inverseLerp:EC,lerp:Ml,damp:wC,pingpong:TC,smoothstep:AC,smootherstep:bC,randInt:RC,randFloat:CC,randFloatSpread:PC,seededRandom:LC,degToRad:IC,radToDeg:DC,isPowerOfTwo:NC,ceilPowerOfTwo:UC,floorPowerOfTwo:OC,setQuaternionFromProperEuler:FC,normalize:vt,denormalize:Ui};class ze{constructor(e=0,n=0){ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,n,i,r,s,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],v=r[0],m=r[3],h=r[6],_=r[1],y=r[4],x=r[7],R=r[2],A=r[5],b=r[8];return s[0]=o*v+a*_+l*R,s[3]=o*m+a*y+l*A,s[6]=o*h+a*x+l*b,s[1]=c*v+u*_+d*R,s[4]=c*m+u*y+d*A,s[7]=c*h+u*x+d*b,s[2]=f*v+p*_+g*R,s[5]=f*m+p*y+g*A,s[8]=f*h+p*x+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Gf.makeScale(e,n)),this}rotate(e){return this.premultiply(Gf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gf=new et;function oE(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $l(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kC(){const t=$l("canvas");return t.style.display="block",t}const s0={};function $o(t){t in s0||(s0[t]=!0,console.warn(t))}function BC(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const o0=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),a0=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wa={[yn]:{transfer:xd,primaries:Sd,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Nn]:{transfer:wt,primaries:Sd,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[qd]:{transfer:xd,primaries:Md,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(a0),fromReference:t=>t.applyMatrix3(o0)},[kg]:{transfer:wt,primaries:Md,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(a0),fromReference:t=>t.applyMatrix3(o0).convertLinearToSRGB()}},zC=new Set([yn,qd]),ut={enabled:!0,_workingColorSpace:yn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!zC.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Wa[e].toReference,r=Wa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Wa[t].primaries},getTransfer:function(t){return t===jr?xd:Wa[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Wa[e].luminanceCoefficients)}};function Yo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let no;class HC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{no===void 0&&(no=$l("canvas")),no.width=e.width,no.height=e.height;const i=no.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=no}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$l("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Yo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Yo(n[i]/255)*255):n[i]=Yo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VC=0;class aE{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jf(r[o].image)):s.push(jf(r[o]))}else s=jf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function jf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?HC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GC=0;class ln extends ba{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Kr,r=Kr,s=On,o=vr,a=li,l=Rr,c=ln.DEFAULT_ANISOTROPY,u=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GC++}),this.uuid=Hi(),this.name="",this.source=new aE(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==XM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fa:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fa:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=XM;ln.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,n=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,x=(p+1)/2,R=(h+1)/2,A=(u+f)/4,b=(d+v)/4,w=(g+m)/4;return y>x&&y>R?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=b/i):x>R?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=w/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=b/s,r=w/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(f-u)/_,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WC extends ba{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new dt(0,0,e,n),this.scissorTest=!1,this.viewport=new dt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new aE(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends WC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class lE extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jC extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(d!==v||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*v,_=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const R=Math.sqrt(y),A=Math.atan2(R,h*_);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const x=a*_;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,d=d*m+v*x,m===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(l0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(l0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xf.copy(this).projectOnVector(e),this.sub(Xf)}reflect(e){return this.sub(Xf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(mn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xf=new O,l0=new fs;class wi{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ri.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ri.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ri.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ri):Ri.fromBufferAttribute(s,o),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dc.copy(i.boundingBox)),Dc.applyMatrix4(e.matrixWorld),this.union(Dc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),Nc.subVectors(this.max,ja),io.subVectors(e.a,ja),ro.subVectors(e.b,ja),so.subVectors(e.c,ja),Ir.subVectors(ro,io),Dr.subVectors(so,ro),ps.subVectors(io,so);let n=[0,-Ir.z,Ir.y,0,-Dr.z,Dr.y,0,-ps.z,ps.y,Ir.z,0,-Ir.x,Dr.z,0,-Dr.x,ps.z,0,-ps.x,-Ir.y,Ir.x,0,-Dr.y,Dr.x,0,-ps.y,ps.x,0];return!$f(n,io,ro,so,Nc)||(n=[1,0,0,0,1,0,0,0,1],!$f(n,io,ro,so,Nc))?!1:(Uc.crossVectors(Ir,Dr),n=[Uc.x,Uc.y,Uc.z],$f(n,io,ro,so,Nc))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rr=[new O,new O,new O,new O,new O,new O,new O,new O],Ri=new O,Dc=new wi,io=new O,ro=new O,so=new O,Ir=new O,Dr=new O,ps=new O,ja=new O,Nc=new O,Uc=new O,ms=new O;function $f(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ms.fromArray(t,s);const a=r.x*Math.abs(ms.x)+r.y*Math.abs(ms.y)+r.z*Math.abs(ms.z),l=e.dot(ms),c=n.dot(ms),u=i.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const XC=new wi,Xa=new O,Yf=new O;class Ti{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xa.subVectors(e,this.center);const n=Xa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Xa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xa.copy(e.center).add(Yf)),this.expandByPoint(Xa.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sr=new O,Kf=new O,Oc=new O,Nr=new O,qf=new O,Fc=new O,Qf=new O;class Qd{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=sr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,n),sr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Kf.copy(e).add(n).multiplyScalar(.5),Oc.copy(n).sub(e).normalize(),Nr.copy(this.origin).sub(Kf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Oc),a=Nr.dot(this.direction),l=-Nr.dot(Oc),c=Nr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Kf).addScaledVector(Oc,f),p}intersectSphere(e,n){sr.subVectors(e.center,this.origin);const i=sr.dot(this.direction),r=sr.dot(sr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,n,i,r,s){qf.subVectors(n,e),Fc.subVectors(i,e),Qf.crossVectors(qf,Fc);let o=this.direction.dot(Qf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nr.subVectors(this.origin,e);const l=a*this.direction.dot(Fc.crossVectors(Nr,Fc));if(l<0)return null;const c=a*this.direction.dot(qf.cross(Nr));if(c<0||l+c>o)return null;const u=-a*Nr.dot(Qf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,v,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,v,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/oo.setFromMatrixColumn(e,0).length(),s=1/oo.setFromMatrixColumn(e,1).length(),o=1/oo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,v=c*d;n[0]=f+v*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=v+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,v=c*d;n[0]=f-v*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,v=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+v,n[1]=l*d,n[5]=v*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-v*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+v,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($C,e,YC)}lookAt(e,n,i){const r=this.elements;return ti.subVectors(e,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ur.crossVectors(i,ti),Ur.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ur.crossVectors(i,ti)),Ur.normalize(),kc.crossVectors(ti,Ur),r[0]=Ur.x,r[4]=kc.x,r[8]=ti.x,r[1]=Ur.y,r[5]=kc.y,r[9]=ti.y,r[2]=Ur.z,r[6]=kc.z,r[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],v=i[6],m=i[10],h=i[14],_=i[3],y=i[7],x=i[11],R=i[15],A=r[0],b=r[4],w=r[8],T=r[12],S=r[1],L=r[5],W=r[9],H=r[13],X=r[2],J=r[6],K=r[10],se=r[14],F=r[3],j=r[7],Q=r[11],ue=r[15];return s[0]=o*A+a*S+l*X+c*F,s[4]=o*b+a*L+l*J+c*j,s[8]=o*w+a*W+l*K+c*Q,s[12]=o*T+a*H+l*se+c*ue,s[1]=u*A+d*S+f*X+p*F,s[5]=u*b+d*L+f*J+p*j,s[9]=u*w+d*W+f*K+p*Q,s[13]=u*T+d*H+f*se+p*ue,s[2]=g*A+v*S+m*X+h*F,s[6]=g*b+v*L+m*J+h*j,s[10]=g*w+v*W+m*K+h*Q,s[14]=g*T+v*H+m*se+h*ue,s[3]=_*A+y*S+x*X+R*F,s[7]=_*b+y*L+x*J+R*j,s[11]=_*w+y*W+x*K+R*Q,s[15]=_*T+y*H+x*se+R*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+v*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],h=e[15],_=d*m*c-v*f*c+v*l*p-a*m*p-d*l*h+a*f*h,y=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,x=u*v*c-g*d*c+g*a*p-o*v*p-u*a*h+o*d*h,R=g*d*l-u*v*l-g*a*f+o*v*f+u*a*m-o*d*m,A=n*_+i*y+r*x+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=_*b,e[1]=(v*f*s-d*m*s-v*r*p+i*m*p+d*r*h-i*f*h)*b,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*h+i*l*h)*b,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*b,e[4]=y*b,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*h+n*f*h)*b,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*b,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*b,e[8]=x*b,e[9]=(g*d*s-u*v*s-g*i*p+n*v*p+u*i*h-n*d*h)*b,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*h+n*a*h)*b,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*b,e[12]=R*b,e[13]=(u*v*r-g*d*r+g*i*f-n*v*f-u*i*m+n*d*m)*b,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*b,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,v=o*u,m=o*d,h=a*d,_=l*c,y=l*u,x=l*d,R=i.x,A=i.y,b=i.z;return r[0]=(1-(v+h))*R,r[1]=(p+x)*R,r[2]=(g-y)*R,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(f+h))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+y)*b,r[9]=(m-_)*b,r[10]=(1-(f+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=oo.set(r[0],r[1],r[2]).length();const o=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ci.copy(this);const c=1/s,u=1/o,d=1/a;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,n.setFromRotationMatrix(Ci),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_r){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let p,g;if(a===_r)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ed)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_r){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),f=(n+e)*c,p=(i+r)*u;let g,v;if(a===_r)g=(o+s)*d,v=-2*d;else if(a===Ed)g=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const oo=new O,Ci=new Qe,$C=new O(0,0,0),YC=new O(1,1,1),Ur=new O,kc=new O,ti=new O,c0=new Qe,u0=new fs;class tr{constructor(e=0,n=0,i=0,r=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return c0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return u0.setFromEuler(this),this.setFromQuaternion(u0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class cE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let KC=0;const d0=new O,ao=new fs,or=new Qe,Bc=new O,$a=new O,qC=new O,QC=new fs,f0=new O(1,0,0),h0=new O(0,1,0),p0=new O(0,0,1),m0={type:"added"},ZC={type:"removed"},lo={type:"childadded",child:null},Zf={type:"childremoved",child:null};class Ot extends ba{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:KC++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new O,n=new tr,i=new fs,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new et}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ao.setFromAxisAngle(e,n),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,n){return ao.setFromAxisAngle(e,n),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(f0,e)}rotateY(e){return this.rotateOnAxis(h0,e)}rotateZ(e){return this.rotateOnAxis(p0,e)}translateOnAxis(e,n){return d0.copy(e).applyQuaternion(this.quaternion),this.position.add(d0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(f0,e)}translateY(e){return this.translateOnAxis(h0,e)}translateZ(e){return this.translateOnAxis(p0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bc.copy(e):Bc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt($a,Bc,this.up):or.lookAt(Bc,$a,this.up),this.quaternion.setFromRotationMatrix(or),r&&(or.extractRotation(r.matrixWorld),ao.setFromRotationMatrix(or),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m0),lo.child=e,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZC),Zf.child=e,this.dispatchEvent(Zf),Zf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m0),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,qC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,QC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new O(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new O,ar=new O,Jf=new O,lr=new O,co=new O,uo=new O,g0=new O,eh=new O,th=new O,nh=new O;class Oi{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pi.subVectors(e,n),r.cross(Pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pi.subVectors(r,n),ar.subVectors(i,n),Jf.subVectors(e,n);const o=Pi.dot(Pi),a=Pi.dot(ar),l=Pi.dot(Jf),c=ar.dot(ar),u=ar.dot(Jf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,lr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,lr.x),l.addScaledVector(o,lr.y),l.addScaledVector(a,lr.z),l)}static isFrontFacing(e,n,i,r){return Pi.subVectors(i,n),ar.subVectors(e,n),Pi.cross(ar).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Pi.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;co.subVectors(r,i),uo.subVectors(s,i),eh.subVectors(e,i);const l=co.dot(eh),c=uo.dot(eh);if(l<=0&&c<=0)return n.copy(i);th.subVectors(e,r);const u=co.dot(th),d=uo.dot(th);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(co,o);nh.subVectors(e,s);const p=co.dot(nh),g=uo.dot(nh);if(g>=0&&p<=g)return n.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(uo,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return g0.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(g0,a);const h=1/(m+v+f);return o=v*h,a=f*h,n.copy(i).addScaledVector(co,o).addScaledVector(uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},zc={h:0,s:0,l:0};function ih(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class We{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=Bg(e,1),n=mn(n,0,1),i=mn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ih(o,s,e+1/3),this.g=ih(o,s,e),this.b=ih(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,n=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=uE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}copyLinearToSRGB(e){return this.r=Wf(e.r),this.g=Wf(e.g),this.b=Wf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return ut.fromWorkingColorSpace(En.copy(this),e),Math.round(mn(En.r*255,0,255))*65536+Math.round(mn(En.g*255,0,255))*256+Math.round(mn(En.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.fromWorkingColorSpace(En.copy(this),n);const i=En.r,r=En.g,s=En.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ut.workingColorSpace){return ut.fromWorkingColorSpace(En.copy(this),n),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=Nn){ut.fromWorkingColorSpace(En.copy(this),e);const n=En.r,i=En.g,r=En.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+n,Or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Or),e.getHSL(zc);const i=Ml(Or.h,zc.h,n),r=Ml(Or.s,zc.s,n),s=Ml(Or.l,zc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new We;We.NAMES=uE;let JC=0;class er extends ba{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JC++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Wo,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Up,this.blendDst=Op,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new We(0,0,0),this.blendAlpha=0,this.depthFunc=_d,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wo&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Up&&(i.blendSrc=this.blendSrc),this.blendDst!==Op&&(i.blendDst=this.blendDst),this.blendEquation!==bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_d&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(i.stencilFail=this.stencilFail),this.stencilZFail!==to&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yr extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=BM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new O,Hc=new ze;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $o("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Hc.fromBufferAttribute(this,n),Hc.applyMatrix3(e),this.setXY(n,Hc.x,Hc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ui(n,this.array)),n}setX(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ui(n,this.array)),n}setY(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ui(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ui(n,this.array)),n}setW(e,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fm&&(e.usage=this.usage),e}}class dE extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class fE extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zn extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let eP=0;const mi=new Qe,rh=new Ot,fo=new O,ni=new wi,Ya=new wi,rn=new O;class Jn extends ba{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eP++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oE(e)?fE:dE)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,n,i){return mi.makeTranslation(e,n,i),this.applyMatrix4(mi),this}scale(e,n,i){return mi.makeScale(e,n,i),this.applyMatrix4(mi),this}lookAt(e){return rh.lookAt(e),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Ya.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(ni.min,Ya.min),ni.expandByPoint(rn),rn.addVectors(ni.max,Ya.max),ni.expandByPoint(rn)):(ni.expandByPoint(Ya.min),ni.expandByPoint(Ya.max))}ni.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)rn.fromBufferAttribute(a,c),l&&(fo.fromBufferAttribute(e,c),rn.add(fo)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new O,l[w]=new O;const c=new O,u=new O,d=new O,f=new ze,p=new ze,g=new ze,v=new O,m=new O;function h(w,T,S){c.fromBufferAttribute(i,w),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,w),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[w].add(v),a[T].add(v),a[S].add(v),l[w].add(m),l[T].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let w=0,T=_.length;w<T;++w){const S=_[w],L=S.start,W=S.count;for(let H=L,X=L+W;H<X;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new O,x=new O,R=new O,A=new O;function b(w){R.fromBufferAttribute(r,w),A.copy(R);const T=a[w];y.copy(T),y.sub(R.multiplyScalar(R.dot(T))).normalize(),x.crossVectors(A,T);const L=x.dot(l[w])<0?-1:1;o.setXYZW(w,y.x,y.y,y.z,L)}for(let w=0,T=_.length;w<T;++w){const S=_[w],L=S.start,W=S.count;for(let H=L,X=L+W;H<X;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new Bn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v0=new Qe,gs=new Qd,Vc=new Ti,_0=new O,ho=new O,po=new O,mo=new O,sh=new O,Gc=new O,Wc=new ze,jc=new ze,Xc=new ze,y0=new O,x0=new O,S0=new O,$c=new O,Yc=new O;class An extends Ot{constructor(e=new Jn,n=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(sh.fromBufferAttribute(d,e),o?Gc.addScaledVector(sh,u):Gc.addScaledVector(sh.sub(n),u))}n.add(Gc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vc.copy(i.boundingSphere),Vc.applyMatrix4(s),gs.copy(e.ray).recast(e.near),!(Vc.containsPoint(gs.origin)===!1&&(gs.intersectSphere(Vc,_0)===null||gs.origin.distanceToSquared(_0)>(e.far-e.near)**2))&&(v0.copy(s).invert(),gs.copy(e.ray).applyMatrix4(v0),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gs)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,R=y;x<R;x+=3){const A=a.getX(x),b=a.getX(x+1),w=a.getX(x+2);r=Kc(this,h,e,i,c,u,d,A,b,w),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Kc(this,o,e,i,c,u,d,_,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],h=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,R=y;x<R;x+=3){const A=x,b=x+1,w=x+2;r=Kc(this,h,e,i,c,u,d,A,b,w),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,h=v;m<h;m+=3){const _=m,y=m+1,x=m+2;r=Kc(this,o,e,i,c,u,d,_,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function tP(t,e,n,i,r,s,o,a){let l;if(e.side===Zn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===br,a),l===null)return null;Yc.copy(a),Yc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Yc);return c<n.near||c>n.far?null:{distance:c,point:Yc.clone(),object:t}}function Kc(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ho),t.getVertexPosition(l,po),t.getVertexPosition(c,mo);const u=tP(t,e,n,i,ho,po,mo,$c);if(u){r&&(Wc.fromBufferAttribute(r,a),jc.fromBufferAttribute(r,l),Xc.fromBufferAttribute(r,c),u.uv=Oi.getInterpolation($c,ho,po,mo,Wc,jc,Xc,new ze)),s&&(Wc.fromBufferAttribute(s,a),jc.fromBufferAttribute(s,l),Xc.fromBufferAttribute(s,c),u.uv1=Oi.getInterpolation($c,ho,po,mo,Wc,jc,Xc,new ze)),o&&(y0.fromBufferAttribute(o,a),x0.fromBufferAttribute(o,l),S0.fromBufferAttribute(o,c),u.normal=Oi.getInterpolation($c,ho,po,mo,y0,x0,S0,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};Oi.getNormal(ho,po,mo,d.normal),u.face=d}return u}class rc extends Jn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(d,2));function g(v,m,h,_,y,x,R,A,b,w,T){const S=x/b,L=R/w,W=x/2,H=R/2,X=A/2,J=b+1,K=w+1;let se=0,F=0;const j=new O;for(let Q=0;Q<K;Q++){const ue=Q*L-H;for(let Ee=0;Ee<J;Ee++){const je=Ee*S-W;j[v]=je*_,j[m]=ue*y,j[h]=X,c.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[h]=A>0?1:-1,u.push(j.x,j.y,j.z),d.push(Ee/b),d.push(1-Q/w),se+=1}}for(let Q=0;Q<w;Q++)for(let ue=0;ue<b;ue++){const Ee=f+ue+J*Q,je=f+ue+J*(Q+1),$=f+(ue+1)+J*(Q+1),oe=f+(ue+1)+J*Q;l.push(Ee,je,oe),l.push(je,$,oe),F+=6}a.addGroup(p,F,T),p+=F,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ga(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ln(t){const e={};for(let n=0;n<t.length;n++){const i=ga(t[n]);for(const r in i)e[r]=i[r]}return e}function nP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function hE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const $s={clone:ga,merge:Ln};var iP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iP,this.fragmentShader=rP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=nP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class pE extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=_r}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new O,M0=new ze,E0=new ze;class Un extends pE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,n){return this.getViewBounds(e,M0,E0),n.subVectors(E0,M0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const go=-90,vo=1;class sP extends Ot{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Un(go,vo,e,n);r.layers=this.layers,this.add(r);const s=new Un(go,vo,e,n);s.layers=this.layers,this.add(s);const o=new Un(go,vo,e,n);o.layers=this.layers,this.add(o);const a=new Un(go,vo,e,n);a.layers=this.layers,this.add(a);const l=new Un(go,vo,e,n);l.layers=this.layers,this.add(l);const c=new Un(go,vo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_r)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ed)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class mE extends ln{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ua,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oP extends Vi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new mE(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rc(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zn,blending:Mr});s.uniforms.tEquirect.value=n;const o=new An(r,s),a=n.minFilter;return n.minFilter===vr&&(n.minFilter=On),new sP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const oh=new O,aP=new O,lP=new et;class ws{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=oh.subVectors(i,n).cross(aP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(oh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||lP.getNormalMatrix(e),r=this.coplanarPoint(oh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Ti,qc=new O;class Hg{constructor(e=new ws,n=new ws,i=new ws,r=new ws,s=new ws,o=new ws){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_r){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],h=r[12],_=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-h).normalize(),i[1].setComponents(l+s,f+c,m+p,x+h).normalize(),i[2].setComponents(l+o,f+u,m+g,x+_).normalize(),i[3].setComponents(l-o,f-u,m-g,x-_).normalize(),i[4].setComponents(l-a,f-d,m-v,x-y).normalize(),n===_r)i[5].setComponents(l+a,f+d,m+v,x+y).normalize();else if(n===Ed)i[5].setComponents(a,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(qc.x=r.normal.x>0?e.max.x:e.min.x,qc.y=r.normal.y>0?e.max.y:e.min.y,qc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function cP(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&f.length===0&&t.bufferSubData(c,0,u),f.length!==0){for(let p=0,g=f.length;p<g;p++){const v=f[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class sc extends Jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],v=[],m=[];for(let h=0;h<u;h++){const _=h*f-o;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const y=_+c*h,x=_+c*(h+1),R=_+1+c*(h+1),A=_+1+c*h;p.push(y,x,A),p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new zn(g,3)),this.setAttribute("normal",new zn(v,3)),this.setAttribute("uv",new zn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var uP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dP=`#ifdef USE_ALPHAHASH
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
#endif`,fP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gP=`#ifdef USE_AOMAP
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
#endif`,vP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_P=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EP=`#ifdef USE_IRIDESCENCE
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
#endif`,wP=`#ifdef USE_BUMPMAP
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
#endif`,TP=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,DP=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,NP=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UP=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zP="gl_FragColor = linearToOutputTexel( gl_FragColor );",HP=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,GP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WP=`#ifdef USE_ENVMAP
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
#endif`,jP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$P=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QP=`#ifdef USE_GRADIENTMAP
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
}`,ZP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tL=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,nL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,iL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cL=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,dL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fL=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hL=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pL=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mL=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_L=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yL=`#if defined( USE_POINTS_UV )
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
#endif`,xL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ML=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TL=`#ifdef USE_MORPHTARGETS
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
#endif`,AL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IL=`#ifdef USE_NORMALMAP
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
#endif`,DL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kL=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XL=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$L=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,YL=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,KL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qL=`#ifdef USE_SKINNING
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
#endif`,QL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZL=`#ifdef USE_SKINNING
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
#endif`,JL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nI=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iI=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rI=`#ifdef USE_TRANSMISSION
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
#endif`,sI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uI=`uniform sampler2D t2D;
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
}`,dI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fI=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mI=`#include <common>
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
}`,gI=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vI=`#define DISTANCE
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
}`,_I=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SI=`uniform float scale;
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
}`,MI=`uniform vec3 diffuse;
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
}`,EI=`#include <common>
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
}`,wI=`uniform vec3 diffuse;
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
}`,TI=`#define LAMBERT
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
}`,AI=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,bI=`#define MATCAP
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
}`,RI=`#define MATCAP
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
}`,CI=`#define NORMAL
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
}`,PI=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LI=`#define PHONG
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
}`,II=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,DI=`#define STANDARD
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
}`,NI=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,UI=`#define TOON
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
}`,OI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,FI=`uniform float size;
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
}`,kI=`uniform vec3 diffuse;
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
}`,BI=`#include <common>
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
}`,zI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,HI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,VI=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:uP,alphahash_pars_fragment:dP,alphamap_fragment:fP,alphamap_pars_fragment:hP,alphatest_fragment:pP,alphatest_pars_fragment:mP,aomap_fragment:gP,aomap_pars_fragment:vP,batching_pars_vertex:_P,batching_vertex:yP,begin_vertex:xP,beginnormal_vertex:SP,bsdfs:MP,iridescence_fragment:EP,bumpmap_pars_fragment:wP,clipping_planes_fragment:TP,clipping_planes_pars_fragment:AP,clipping_planes_pars_vertex:bP,clipping_planes_vertex:RP,color_fragment:CP,color_pars_fragment:PP,color_pars_vertex:LP,color_vertex:IP,common:DP,cube_uv_reflection_fragment:NP,defaultnormal_vertex:UP,displacementmap_pars_vertex:OP,displacementmap_vertex:FP,emissivemap_fragment:kP,emissivemap_pars_fragment:BP,colorspace_fragment:zP,colorspace_pars_fragment:HP,envmap_fragment:VP,envmap_common_pars_fragment:GP,envmap_pars_fragment:WP,envmap_pars_vertex:jP,envmap_physical_pars_fragment:nL,envmap_vertex:XP,fog_vertex:$P,fog_pars_vertex:YP,fog_fragment:KP,fog_pars_fragment:qP,gradientmap_pars_fragment:QP,lightmap_pars_fragment:ZP,lights_lambert_fragment:JP,lights_lambert_pars_fragment:eL,lights_pars_begin:tL,lights_toon_fragment:iL,lights_toon_pars_fragment:rL,lights_phong_fragment:sL,lights_phong_pars_fragment:oL,lights_physical_fragment:aL,lights_physical_pars_fragment:lL,lights_fragment_begin:cL,lights_fragment_maps:uL,lights_fragment_end:dL,logdepthbuf_fragment:fL,logdepthbuf_pars_fragment:hL,logdepthbuf_pars_vertex:pL,logdepthbuf_vertex:mL,map_fragment:gL,map_pars_fragment:vL,map_particle_fragment:_L,map_particle_pars_fragment:yL,metalnessmap_fragment:xL,metalnessmap_pars_fragment:SL,morphinstance_vertex:ML,morphcolor_vertex:EL,morphnormal_vertex:wL,morphtarget_pars_vertex:TL,morphtarget_vertex:AL,normal_fragment_begin:bL,normal_fragment_maps:RL,normal_pars_fragment:CL,normal_pars_vertex:PL,normal_vertex:LL,normalmap_pars_fragment:IL,clearcoat_normal_fragment_begin:DL,clearcoat_normal_fragment_maps:NL,clearcoat_pars_fragment:UL,iridescence_pars_fragment:OL,opaque_fragment:FL,packing:kL,premultiplied_alpha_fragment:BL,project_vertex:zL,dithering_fragment:HL,dithering_pars_fragment:VL,roughnessmap_fragment:GL,roughnessmap_pars_fragment:WL,shadowmap_pars_fragment:jL,shadowmap_pars_vertex:XL,shadowmap_vertex:$L,shadowmask_pars_fragment:YL,skinbase_vertex:KL,skinning_pars_vertex:qL,skinning_vertex:QL,skinnormal_vertex:ZL,specularmap_fragment:JL,specularmap_pars_fragment:eI,tonemapping_fragment:tI,tonemapping_pars_fragment:nI,transmission_fragment:iI,transmission_pars_fragment:rI,uv_pars_fragment:sI,uv_pars_vertex:oI,uv_vertex:aI,worldpos_vertex:lI,background_vert:cI,background_frag:uI,backgroundCube_vert:dI,backgroundCube_frag:fI,cube_vert:hI,cube_frag:pI,depth_vert:mI,depth_frag:gI,distanceRGBA_vert:vI,distanceRGBA_frag:_I,equirect_vert:yI,equirect_frag:xI,linedashed_vert:SI,linedashed_frag:MI,meshbasic_vert:EI,meshbasic_frag:wI,meshlambert_vert:TI,meshlambert_frag:AI,meshmatcap_vert:bI,meshmatcap_frag:RI,meshnormal_vert:CI,meshnormal_frag:PI,meshphong_vert:LI,meshphong_frag:II,meshphysical_vert:DI,meshphysical_frag:NI,meshtoon_vert:UI,meshtoon_frag:OI,points_vert:FI,points_frag:kI,shadow_vert:BI,shadow_frag:zI,sprite_vert:HI,sprite_frag:VI},_e={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Xn={basic:{uniforms:Ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new We(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Ln([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Ln([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Ln([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new We(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Ln([_e.points,_e.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Ln([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Ln([_e.common,_e.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Ln([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Ln([_e.sprite,_e.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Ln([_e.common,_e.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Ln([_e.lights,_e.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Xn.physical={uniforms:Ln([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Qc={r:0,b:0,g:0},_s=new tr,GI=new Qe;function WI(t,e,n,i,r,s,o){const a=new We(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?h(a,l):x&&x.isColor&&(h(x,1),y=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Kd)?(u===void 0&&(u=new An(new rc(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ga(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),_s.copy(y.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(GI.makeRotationFromEuler(_s)),u.material.toneMapped=ut.getTransfer(x.colorSpace)!==wt,(d!==x||f!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new An(new sc(2,2),new gn({name:"BackgroundMaterial",uniforms:ga(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(x.colorSpace)!==wt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function h(_,y){_.getRGB(Qc,hE(t)),i.buffers.color.setClear(Qc.r,Qc.g,Qc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:v,addToRenderList:m}}function jI(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,L,W,H,X){let J=!1;const K=d(H,W,L);s!==K&&(s=K,c(s.object)),J=p(S,H,W,X),J&&g(S,H,W,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(S,L,W,H),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,L,W){const H=W.wireframe===!0;let X=i[S.id];X===void 0&&(X={},i[S.id]=X);let J=X[L.id];J===void 0&&(J={},X[L.id]=J);let K=J[H];return K===void 0&&(K=f(l()),J[H]=K),K}function f(S){const L=[],W=[],H=[];for(let X=0;X<n;X++)L[X]=0,W[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,L,W,H){const X=s.attributes,J=L.attributes;let K=0;const se=W.getAttributes();for(const F in se)if(se[F].location>=0){const Q=X[F];let ue=J[F];if(ue===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),Q===void 0||Q.attribute!==ue||ue&&Q.data!==ue.data)return!0;K++}return s.attributesNum!==K||s.index!==H}function g(S,L,W,H){const X={},J=L.attributes;let K=0;const se=W.getAttributes();for(const F in se)if(se[F].location>=0){let Q=J[F];Q===void 0&&(F==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),F==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const ue={};ue.attribute=Q,Q&&Q.data&&(ue.data=Q.data),X[F]=ue,K++}s.attributes=X,s.attributesNum=K,s.index=H}function v(){const S=s.newAttributes;for(let L=0,W=S.length;L<W;L++)S[L]=0}function m(S){h(S,0)}function h(S,L){const W=s.newAttributes,H=s.enabledAttributes,X=s.attributeDivisors;W[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),X[S]!==L&&(t.vertexAttribDivisor(S,L),X[S]=L)}function _(){const S=s.newAttributes,L=s.enabledAttributes;for(let W=0,H=L.length;W<H;W++)L[W]!==S[W]&&(t.disableVertexAttribArray(W),L[W]=0)}function y(S,L,W,H,X,J,K){K===!0?t.vertexAttribIPointer(S,L,W,X,J):t.vertexAttribPointer(S,L,W,H,X,J)}function x(S,L,W,H){v();const X=H.attributes,J=W.getAttributes(),K=L.defaultAttributeValues;for(const se in J){const F=J[se];if(F.location>=0){let j=X[se];if(j===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const Q=j.normalized,ue=j.itemSize,Ee=e.get(j);if(Ee===void 0)continue;const je=Ee.buffer,$=Ee.type,oe=Ee.bytesPerElement,fe=$===t.INT||$===t.UNSIGNED_INT||j.gpuType===Lg;if(j.isInterleavedBufferAttribute){const pe=j.data,Re=pe.stride,Fe=j.offset;if(pe.isInstancedInterleavedBuffer){for(let Xe=0;Xe<F.locationSize;Xe++)h(F.location+Xe,pe.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Xe=0;Xe<F.locationSize;Xe++)m(F.location+Xe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let Xe=0;Xe<F.locationSize;Xe++)y(F.location+Xe,ue/F.locationSize,$,Q,Re*oe,(Fe+ue/F.locationSize*Xe)*oe,fe)}else{if(j.isInstancedBufferAttribute){for(let pe=0;pe<F.locationSize;pe++)h(F.location+pe,j.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let pe=0;pe<F.locationSize;pe++)m(F.location+pe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let pe=0;pe<F.locationSize;pe++)y(F.location+pe,ue/F.locationSize,$,Q,ue*oe,ue/F.locationSize*pe*oe,fe)}}else if(K!==void 0){const Q=K[se];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(F.location,Q);break;case 3:t.vertexAttrib3fv(F.location,Q);break;case 4:t.vertexAttrib4fv(F.location,Q);break;default:t.vertexAttrib1fv(F.location,Q)}}}}_()}function R(){w();for(const S in i){const L=i[S];for(const W in L){const H=L[W];for(const X in H)u(H[X].object),delete H[X];delete L[W]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const W in L){const H=L[W];for(const X in H)u(H[X].object),delete H[X];delete L[W]}delete i[S.id]}function b(S){for(const L in i){const W=i[L];if(W[S.id]===void 0)continue;const H=W[S.id];for(const X in H)u(H[X].object),delete H[X];delete W[S.id]}}function w(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function XI(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v];for(let v=0;v<f.length;v++)n.update(g,i,f[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $I(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==li&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const b=A===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Rr&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fi&&!b)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,maxSamples:R}}function YI(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ws,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,y=_*4;let x=h.clippingState||null;l.value=x,x=u(g,f,y,p);for(let R=0;R!==y;++R)x[R]=n[R];h.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const h=p+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,x=p;y!==v;++y,x+=4)o.copy(d[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function KI(t){let e=new WeakMap;function n(o,a){return a===Fp?o.mapping=ua:a===kp&&(o.mapping=da),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Fp||a===kp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new oP(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class oc extends pE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fo=4,w0=[.125,.215,.35,.446,.526,.582],Rs=20,ah=new oc,T0=new We;let lh=null,ch=0,uh=0,dh=!1;const Ts=(1+Math.sqrt(5))/2,_o=1/Ts,A0=[new O(-Ts,_o,0),new O(Ts,_o,0),new O(-_o,0,Ts),new O(_o,0,Ts),new O(0,Ts,-_o),new O(0,Ts,_o),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class b0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=dh,e.scissorTest=!1,Zc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ua||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Aa,format:li,colorSpace:yn,depthBuffer:!1},r=R0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qI(s)),this._blurMaterial=QI(s,e,n)}return r}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,ah)}_sceneToCubeUV(e,n,i,r){const a=new Un(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(T0),u.toneMapping=ss,u.autoClear=!1;const p=new yr({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),g=new An(new rc,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(T0),v=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;Zc(r,_*y,h>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ua||e.mapping===da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=P0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ah)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=A0[(r-s-1)%A0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new An(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Rs-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):Rs;m>Rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rs}`);const h=[];let _=0;for(let b=0;b<Rs;++b){const w=b/v,T=Math.exp(-w*w/2);h.push(T),b===0?_+=T:b<m&&(_+=2*T)}for(let b=0;b<h.length;b++)h[b]=h[b]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[r],R=3*x*(r>y-Fo?r-y+Fo:0),A=4*(this._cubeSize-x);Zc(n,R,A,3*x,2*x),l.setRenderTarget(n),l.render(d,ah)}}function qI(t){const e=[],n=[],i=[];let r=t;const s=t-Fo+1+w0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Fo?l=w0[o-t+Fo-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,v=3,m=2,h=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,w=A>2?0:-1,T=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];_.set(T,v*g*A),y.set(f,m*g*A);const S=[A,A,A,A,A,A];x.set(S,h*g*A)}const R=new Jn;R.setAttribute("position",new Bn(_,v)),R.setAttribute("uv",new Bn(y,m)),R.setAttribute("faceIndex",new Bn(x,h)),e.push(R),r>Fo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function R0(t,e,n){const i=new Vi(t,e,n);return i.texture.mapping=Kd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function QI(t,e,n){const i=new Float32Array(Rs),r=new O(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Vg(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function C0(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vg(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function P0(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Vg(){return`

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
	`}function ZI(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Fp||l===kp,u=l===ua||l===da;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new b0(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new b0(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function JI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$o("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function eD(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,h=v.length;m<h;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,h=v.length;m<h;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,x=_.length;y<x;y+=3){const R=_[y+0],A=_[y+1],b=_[y+2];f.push(R,A,A,b,b,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const R=y+0,A=y+1,b=y+2;f.push(R,A,A,b,b,R)}}else return;const m=new(oE(f)?fE:dE)(f,1);m.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function tD(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function d(f,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,v,0,g);let h=0;for(let _=0;_<g;_++)h+=p[_];for(let _=0;_<v.length;_++)n.update(h,i,v[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function nD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function iD(t,e,n){const i=new WeakMap,r=new dt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let T=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let x=a.attributes.position.count*y,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*R*4*d),b=new lE(A,x,R,d);b.type=Fi,b.needsUpdate=!0;const w=y*4;for(let S=0;S<d;S++){const L=m[S],W=h[S],H=_[S],X=x*R*4*S;for(let J=0;J<L.count;J++){const K=J*w;p===!0&&(r.fromBufferAttribute(L,J),A[X+K+0]=r.x,A[X+K+1]=r.y,A[X+K+2]=r.z,A[X+K+3]=0),g===!0&&(r.fromBufferAttribute(W,J),A[X+K+4]=r.x,A[X+K+5]=r.y,A[X+K+6]=r.z,A[X+K+7]=0),v===!0&&(r.fromBufferAttribute(H,J),A[X+K+8]=r.x,A[X+K+9]=r.y,A[X+K+10]=r.z,A[X+K+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new ze(x,R)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function rD(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class vE extends ln{constructor(e,n,i,r,s,o,a,l,c,u=jo){if(u!==jo&&u!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===jo&&(i=Xs),i===void 0&&u===pa&&(i=ha),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const _E=new ln,L0=new vE(1,1),yE=new lE,xE=new jC,SE=new mE,I0=[],D0=[],N0=new Float32Array(16),U0=new Float32Array(9),O0=new Float32Array(4);function Ra(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=I0[r];if(s===void 0&&(s=new Float32Array(r),I0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function en(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function tn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zd(t,e){let n=D0[e];n===void 0&&(n=new Int32Array(e),D0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function oD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2fv(this.addr,e),tn(n,e)}}function aD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(en(n,e))return;t.uniform3fv(this.addr,e),tn(n,e)}}function lD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4fv(this.addr,e),tn(n,e)}}function cD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;O0.set(i),t.uniformMatrix2fv(this.addr,!1,O0),tn(n,i)}}function uD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;U0.set(i),t.uniformMatrix3fv(this.addr,!1,U0),tn(n,i)}}function dD(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(en(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),tn(n,e)}else{if(en(n,i))return;N0.set(i),t.uniformMatrix4fv(this.addr,!1,N0),tn(n,i)}}function fD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2iv(this.addr,e),tn(n,e)}}function pD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3iv(this.addr,e),tn(n,e)}}function mD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4iv(this.addr,e),tn(n,e)}}function gD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(en(n,e))return;t.uniform2uiv(this.addr,e),tn(n,e)}}function _D(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(en(n,e))return;t.uniform3uiv(this.addr,e),tn(n,e)}}function yD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(en(n,e))return;t.uniform4uiv(this.addr,e),tn(n,e)}}function xD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(L0.compareFunction=sE,s=L0):s=_E,n.setTexture2D(e||s,r)}function SD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||xE,r)}function MD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||SE,r)}function ED(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||yE,r)}function wD(t){switch(t){case 5126:return sD;case 35664:return oD;case 35665:return aD;case 35666:return lD;case 35674:return cD;case 35675:return uD;case 35676:return dD;case 5124:case 35670:return fD;case 35667:case 35671:return hD;case 35668:case 35672:return pD;case 35669:case 35673:return mD;case 5125:return gD;case 36294:return vD;case 36295:return _D;case 36296:return yD;case 35678:case 36198:case 36298:case 36306:case 35682:return xD;case 35679:case 36299:case 36307:return SD;case 35680:case 36300:case 36308:case 36293:return MD;case 36289:case 36303:case 36311:case 36292:return ED}}function TD(t,e){t.uniform1fv(this.addr,e)}function AD(t,e){const n=Ra(e,this.size,2);t.uniform2fv(this.addr,n)}function bD(t,e){const n=Ra(e,this.size,3);t.uniform3fv(this.addr,n)}function RD(t,e){const n=Ra(e,this.size,4);t.uniform4fv(this.addr,n)}function CD(t,e){const n=Ra(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function PD(t,e){const n=Ra(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LD(t,e){const n=Ra(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function ID(t,e){t.uniform1iv(this.addr,e)}function DD(t,e){t.uniform2iv(this.addr,e)}function ND(t,e){t.uniform3iv(this.addr,e)}function UD(t,e){t.uniform4iv(this.addr,e)}function OD(t,e){t.uniform1uiv(this.addr,e)}function FD(t,e){t.uniform2uiv(this.addr,e)}function kD(t,e){t.uniform3uiv(this.addr,e)}function BD(t,e){t.uniform4uiv(this.addr,e)}function zD(t,e,n){const i=this.cache,r=e.length,s=Zd(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||_E,s[o])}function HD(t,e,n){const i=this.cache,r=e.length,s=Zd(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||xE,s[o])}function VD(t,e,n){const i=this.cache,r=e.length,s=Zd(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||SE,s[o])}function GD(t,e,n){const i=this.cache,r=e.length,s=Zd(n,r);en(i,s)||(t.uniform1iv(this.addr,s),tn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||yE,s[o])}function WD(t){switch(t){case 5126:return TD;case 35664:return AD;case 35665:return bD;case 35666:return RD;case 35674:return CD;case 35675:return PD;case 35676:return LD;case 5124:case 35670:return ID;case 35667:case 35671:return DD;case 35668:case 35672:return ND;case 35669:case 35673:return UD;case 5125:return OD;case 36294:return FD;case 36295:return kD;case 36296:return BD;case 35678:case 36198:case 36298:case 36306:case 35682:return zD;case 35679:case 36299:case 36307:return HD;case 35680:case 36300:case 36308:case 36293:return VD;case 36289:case 36303:case 36311:case 36292:return GD}}class jD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wD(n.type)}}class XD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=WD(n.type)}}class $D{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const fh=/(\w+)(\])?(\[|\.)?/g;function F0(t,e){t.seq.push(e),t.map[e.id]=e}function YD(t,e,n){const i=t.name,r=i.length;for(fh.lastIndex=0;;){const s=fh.exec(i),o=fh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){F0(n,c===void 0?new jD(a,t,e):new XD(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new $D(a),F0(n,d)),n=d}}}class zu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);YD(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function k0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const KD=37297;let qD=0;function QD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function ZD(t){const e=ut.getPrimaries(ut.workingColorSpace),n=ut.getPrimaries(t);let i;switch(e===n?i="":e===Md&&n===Sd?i="LinearDisplayP3ToLinearSRGB":e===Sd&&n===Md&&(i="LinearSRGBToLinearDisplayP3"),t){case yn:case qd:return[i,"LinearTransferOETF"];case Nn:case kg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function B0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+QD(t.getShaderSource(e),o)}else return r}function JD(t,e){const n=ZD(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function e2(t,e){let n;switch(e){case zM:n="Linear";break;case HM:n="Reinhard";break;case VM:n="Cineon";break;case GM:n="ACESFilmic";break;case WM:n="AgX";break;case jM:n="Neutral";break;case lC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Jc=new O;function t2(){ut.getLuminanceCoefficients(Jc);const t=Jc.x.toFixed(4),e=Jc.y.toFixed(4),n=Jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function i2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function r2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ul(t){return t!==""}function z0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function H0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s2=/^[ \t]*#include +<([\w\d./]+)>/gm;function hm(t){return t.replace(s2,a2)}const o2=new Map;function a2(t,e){let n=Ze[e];if(n===void 0){const i=o2.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hm(n)}const l2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(t){return t.replace(l2,c2)}function c2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function G0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function u2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===kM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===NR?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ur&&(e="SHADOWMAP_TYPE_VSM"),e}function d2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ua:case da:e="ENVMAP_TYPE_CUBE";break;case Kd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function f2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case da:e="ENVMAP_MODE_REFRACTION";break}return e}function h2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case BM:e="ENVMAP_BLENDING_MULTIPLY";break;case oC:e="ENVMAP_BLENDING_MIX";break;case aC:e="ENVMAP_BLENDING_ADD";break}return e}function p2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function m2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=u2(n),c=d2(n),u=f2(n),d=h2(n),f=p2(n),p=n2(n),g=i2(s),v=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ul).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ul).join(`
`),h.length>0&&(h+=`
`)):(m=[G0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),h=[G0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ss?"#define TONE_MAPPING":"",n.toneMapping!==ss?Ze.tonemapping_pars_fragment:"",n.toneMapping!==ss?e2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,JD("linearToOutputTexel",n.outputColorSpace),t2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),o=hm(o),o=z0(o,n),o=H0(o,n),a=hm(a),a=z0(a,n),a=H0(a,n),o=V0(o),a=V0(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=_+m+o,x=_+h+a,R=k0(r,r.VERTEX_SHADER,y),A=k0(r,r.FRAGMENT_SHADER,x);r.attachShader(v,R),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(L){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(R).trim(),X=r.getShaderInfoLog(A).trim();let J=!0,K=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,R,A);else{const se=B0(r,R,"vertex"),F=B0(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+se+`
`+F)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||X==="")&&(K=!1);K&&(L.diagnostics={runnable:J,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(R),r.deleteShader(A),w=new zu(r,v),T=r2(r,v)}let w;this.getUniforms=function(){return w===void 0&&b(this),w};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,KD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qD++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=A,this}let g2=0;class v2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _2(e),n.set(e,i)),i}}class _2{constructor(e){this.id=g2++,this.code=e,this.usedTimes=0}}function y2(t,e,n,i,r,s,o){const a=new cE,l=new v2,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,L,W,H){const X=W.fog,J=H.geometry,K=T.isMeshStandardMaterial?W.environment:null,se=(T.isMeshStandardMaterial?n:e).get(T.envMap||K),F=se&&se.mapping===Kd?se.image.height:null,j=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Q=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ue=Q!==void 0?Q.length:0;let Ee=0;J.morphAttributes.position!==void 0&&(Ee=1),J.morphAttributes.normal!==void 0&&(Ee=2),J.morphAttributes.color!==void 0&&(Ee=3);let je,$,oe,fe;if(j){const ct=Xn[j];je=ct.vertexShader,$=ct.fragmentShader}else je=T.vertexShader,$=T.fragmentShader,l.update(T),oe=l.getVertexShaderID(T),fe=l.getFragmentShaderID(T);const pe=t.getRenderTarget(),Re=H.isInstancedMesh===!0,Fe=H.isBatchedMesh===!0,Xe=!!T.map,mt=!!T.matcap,I=!!se,kt=!!T.aoMap,$e=!!T.lightMap,at=!!T.bumpMap,De=!!T.normalMap,Bt=!!T.displacementMap,ke=!!T.emissiveMap,Ye=!!T.metalnessMap,P=!!T.roughnessMap,E=T.anisotropy>0,G=T.clearcoat>0,ne=T.dispersion>0,ae=T.iridescence>0,ie=T.sheen>0,Pe=T.transmission>0,ye=E&&!!T.anisotropyMap,we=G&&!!T.clearcoatMap,Ke=G&&!!T.clearcoatNormalMap,le=G&&!!T.clearcoatRoughnessMap,Se=ae&&!!T.iridescenceMap,it=ae&&!!T.iridescenceThicknessMap,Ve=ie&&!!T.sheenColorMap,Ae=ie&&!!T.sheenRoughnessMap,Be=!!T.specularMap,qe=!!T.specularColorMap,Et=!!T.specularIntensityMap,B=Pe&&!!T.transmissionMap,de=Pe&&!!T.thicknessMap,q=!!T.gradientMap,Z=!!T.alphaMap,me=T.alphaTest>0,He=!!T.alphaHash,nt=!!T.extensions;let Pt=ss;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Pt=t.toneMapping);const qt={shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:je,fragmentShader:$,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:fe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&H._colorsTexture!==null,instancing:Re,instancingColor:Re&&H.instanceColor!==null,instancingMorph:Re&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:yn,alphaToCoverage:!!T.alphaToCoverage,map:Xe,matcap:mt,envMap:I,envMapMode:I&&se.mapping,envMapCubeUVHeight:F,aoMap:kt,lightMap:$e,bumpMap:at,normalMap:De,displacementMap:f&&Bt,emissiveMap:ke,normalMapObjectSpace:De&&T.normalMapType===pC,normalMapTangentSpace:De&&T.normalMapType===rE,metalnessMap:Ye,roughnessMap:P,anisotropy:E,anisotropyMap:ye,clearcoat:G,clearcoatMap:we,clearcoatNormalMap:Ke,clearcoatRoughnessMap:le,dispersion:ne,iridescence:ae,iridescenceMap:Se,iridescenceThicknessMap:it,sheen:ie,sheenColorMap:Ve,sheenRoughnessMap:Ae,specularMap:Be,specularColorMap:qe,specularIntensityMap:Et,transmission:Pe,transmissionMap:B,thicknessMap:de,gradientMap:q,opaque:T.transparent===!1&&T.blending===Wo&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:me,alphaHash:He,combine:T.combine,mapUv:Xe&&v(T.map.channel),aoMapUv:kt&&v(T.aoMap.channel),lightMapUv:$e&&v(T.lightMap.channel),bumpMapUv:at&&v(T.bumpMap.channel),normalMapUv:De&&v(T.normalMap.channel),displacementMapUv:Bt&&v(T.displacementMap.channel),emissiveMapUv:ke&&v(T.emissiveMap.channel),metalnessMapUv:Ye&&v(T.metalnessMap.channel),roughnessMapUv:P&&v(T.roughnessMap.channel),anisotropyMapUv:ye&&v(T.anisotropyMap.channel),clearcoatMapUv:we&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:it&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(T.sheenRoughnessMap.channel),specularMapUv:Be&&v(T.specularMap.channel),specularColorMapUv:qe&&v(T.specularColorMap.channel),specularIntensityMapUv:Et&&v(T.specularIntensityMap.channel),transmissionMapUv:B&&v(T.transmissionMap.channel),thicknessMapUv:de&&v(T.thicknessMap.channel),alphaMapUv:Z&&v(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(De||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(Xe||Z),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ee,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Xe&&T.map.isVideoTexture===!0&&ut.getTransfer(T.map.colorSpace)===wt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qi,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:nt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&T.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qt.vertexUv1s=c.has(1),qt.vertexUv2s=c.has(2),qt.vertexUv3s=c.has(3),c.clear(),qt}function h(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)S.push(L),S.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(_(S,T),y(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function y(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function x(T){const S=g[T.type];let L;if(S){const W=Xn[S];L=$s.clone(W.uniforms)}else L=T.uniforms;return L}function R(T,S){let L;for(let W=0,H=u.length;W<H;W++){const X=u[W];if(X.cacheKey===S){L=X,++L.usedTimes;break}}return L===void 0&&(L=new m2(t,S,T,s),u.push(L)),L}function A(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function b(T){l.remove(T)}function w(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:u,dispose:w}}function x2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function S2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function W0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function j0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,v,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=v,h.group=m),e++,h}function a(d,f,p,g,v,m){const h=o(d,f,p,g,v,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,g,v,m){const h=o(d,f,p,g,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||S2),i.length>1&&i.sort(f||W0),r.length>1&&r.sort(f||W0)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function M2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new j0,t.set(i,[o])):r>=s.length?(o=new j0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function E2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new We};break;case"SpotLight":n={position:new O,direction:new O,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new We,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new We,groundColor:new We};break;case"RectAreaLight":n={color:new We,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function w2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let T2=0;function A2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function b2(t){const e=new E2,n=w2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new Qe,o=new Qe;function a(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,v=0,m=0,h=0,_=0,y=0,x=0,R=0,A=0,b=0;c.sort(A2);for(let T=0,S=c.length;T<S;T++){const L=c[T],W=L.color,H=L.intensity,X=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=W.r*H,d+=W.g*H,f+=W.b*H;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],H);b++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const se=L.shadow,F=n.get(L);F.shadowIntensity=se.intensity,F.shadowBias=se.bias,F.shadowNormalBias=se.normalBias,F.shadowRadius=se.radius,F.shadowMapSize=se.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=K,p++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(W).multiplyScalar(H),K.distance=X,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[v]=K;const se=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,se.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[v]=se.matrix,L.castShadow){const F=n.get(L);F.shadowIntensity=se.intensity,F.shadowBias=se.bias,F.shadowNormalBias=se.normalBias,F.shadowRadius=se.radius,F.shadowMapSize=se.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=J,x++}v++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(W).multiplyScalar(H),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const se=L.shadow,F=n.get(L);F.shadowIntensity=se.intensity,F.shadowBias=se.bias,F.shadowNormalBias=se.normalBias,F.shadowRadius=se.radius,F.shadowMapSize=se.mapSize,F.shadowCameraNear=se.camera.near,F.shadowCameraFar=se.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=K,g++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(H),K.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[h]=K,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const w=i.hash;(w.directionalLength!==p||w.pointLength!==g||w.spotLength!==v||w.rectAreaLength!==m||w.hemiLength!==h||w.numDirectionalShadows!==_||w.numPointShadows!==y||w.numSpotShadows!==x||w.numSpotMaps!==R||w.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,w.directionalLength=p,w.pointLength=g,w.spotLength=v,w.rectAreaLength=m,w.hemiLength=h,w.numDirectionalShadows=_,w.numPointShadows=y,w.numSpotShadows=x,w.numSpotMaps=R,w.numLightProbes=b,i.version=T2++)}function l(c,u){let d=0,f=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let h=0,_=c.length;h<_;h++){const y=c[h];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function X0(t){const e=new b2(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function R2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new X0(t),e.set(r,[a])):s>=o.length?(a=new X0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class C2 extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P2 extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function D2(t,e,n){let i=new Hg;const r=new ze,s=new ze,o=new dt,a=new C2({depthPacking:hC}),l=new P2,c={},u=n.maxTextureSize,d={[br]:Zn,[Zn]:br,[qi]:qi},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:L2,fragmentShader:I2}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Jn;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new An(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kM;let h=this.type;this.render=function(A,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Mr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=h!==ur&&this.type===ur,X=h===ur&&this.type!==ur;for(let J=0,K=A.length;J<K;J++){const se=A[J],F=se.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const j=F.getFrameExtents();if(r.multiply(j),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,F.mapSize.y=s.y)),F.map===null||H===!0||X===!0){const ue=this.type!==ur?{minFilter:Fn,magFilter:Fn}:{};F.map!==null&&F.map.dispose(),F.map=new Vi(r.x,r.y,ue),F.map.texture.name=se.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const Q=F.getViewportCount();for(let ue=0;ue<Q;ue++){const Ee=F.getViewport(ue);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),W.viewport(o),F.updateMatrices(se,ue),i=F.getFrustum(),x(b,w,F.camera,se,this.type)}F.isPointLightShadow!==!0&&this.type===ur&&_(F,w),F.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,L)};function _(A,b){const w=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vi(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,w,f,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,w,p,v,null)}function y(A,b,w,T){let S=null;const L=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=w.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const W=S.uuid,H=b.uuid;let X=c[W];X===void 0&&(X={},c[W]=X);let J=X[H];J===void 0&&(J=S.clone(),X[H]=J,b.addEventListener("dispose",R)),S=J}if(S.visible=b.visible,S.wireframe=b.wireframe,T===ur?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,w.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=w}return S}function x(A,b,w,T,S){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ur)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);const H=e.update(A),X=A.material;if(Array.isArray(X)){const J=H.groups;for(let K=0,se=J.length;K<se;K++){const F=J[K],j=X[F.materialIndex];if(j&&j.visible){const Q=y(A,j,T,S);A.onBeforeShadow(t,A,b,w,H,Q,F),t.renderBufferDirect(w,null,H,Q,A,F),A.onAfterShadow(t,A,b,w,H,Q,F)}}}else if(X.visible){const J=y(A,X,T,S);A.onBeforeShadow(t,A,b,w,H,J,null),t.renderBufferDirect(w,null,H,J,A,null),A.onAfterShadow(t,A,b,w,H,J,null)}}const W=A.children;for(let H=0,X=W.length;H<X;H++)x(W[H],b,w,T,S)}function R(A){A.target.removeEventListener("dispose",R);for(const w in c){const T=c[w],S=A.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function N2(t){function e(){let B=!1;const de=new dt;let q=null;const Z=new dt(0,0,0,0);return{setMask:function(me){q!==me&&!B&&(t.colorMask(me,me,me,me),q=me)},setLocked:function(me){B=me},setClear:function(me,He,nt,Pt,qt){qt===!0&&(me*=Pt,He*=Pt,nt*=Pt),de.set(me,He,nt,Pt),Z.equals(de)===!1&&(t.clearColor(me,He,nt,Pt),Z.copy(de))},reset:function(){B=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let B=!1,de=null,q=null,Z=null;return{setTest:function(me){me?fe(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(me){de!==me&&!B&&(t.depthMask(me),de=me)},setFunc:function(me){if(q!==me){switch(me){case JR:t.depthFunc(t.NEVER);break;case eC:t.depthFunc(t.ALWAYS);break;case tC:t.depthFunc(t.LESS);break;case _d:t.depthFunc(t.LEQUAL);break;case nC:t.depthFunc(t.EQUAL);break;case iC:t.depthFunc(t.GEQUAL);break;case rC:t.depthFunc(t.GREATER);break;case sC:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=me}},setLocked:function(me){B=me},setClear:function(me){Z!==me&&(t.clearDepth(me),Z=me)},reset:function(){B=!1,de=null,q=null,Z=null}}}function i(){let B=!1,de=null,q=null,Z=null,me=null,He=null,nt=null,Pt=null,qt=null;return{setTest:function(ct){B||(ct?fe(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(ct){de!==ct&&!B&&(t.stencilMask(ct),de=ct)},setFunc:function(ct,Ai,ei){(q!==ct||Z!==Ai||me!==ei)&&(t.stencilFunc(ct,Ai,ei),q=ct,Z=Ai,me=ei)},setOp:function(ct,Ai,ei){(He!==ct||nt!==Ai||Pt!==ei)&&(t.stencilOp(ct,Ai,ei),He=ct,nt=Ai,Pt=ei)},setLocked:function(ct){B=ct},setClear:function(ct){qt!==ct&&(t.clearStencil(ct),qt=ct)},reset:function(){B=!1,de=null,q=null,Z=null,me=null,He=null,nt=null,Pt=null,qt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,g=!1,v=null,m=null,h=null,_=null,y=null,x=null,R=null,A=new We(0,0,0),b=0,w=!1,T=null,S=null,L=null,W=null,H=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const se=t.getParameter(t.VERSION);se.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(se)[1]),J=K>=1):se.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),J=K>=2);let F=null,j={};const Q=t.getParameter(t.SCISSOR_BOX),ue=t.getParameter(t.VIEWPORT),Ee=new dt().fromArray(Q),je=new dt().fromArray(ue);function $(B,de,q,Z){const me=new Uint8Array(4),He=t.createTexture();t.bindTexture(B,He),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let nt=0;nt<q;nt++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(de,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(de+nt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return He}const oe={};oe[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),s.setFunc(_d),at(!1),De(K_),fe(t.CULL_FACE),kt(Mr);function fe(B){c[B]!==!0&&(t.enable(B),c[B]=!0)}function pe(B){c[B]!==!1&&(t.disable(B),c[B]=!1)}function Re(B,de){return u[B]!==de?(t.bindFramebuffer(B,de),u[B]=de,B===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=de),B===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=de),!0):!1}function Fe(B,de){let q=f,Z=!1;if(B){q=d.get(de),q===void 0&&(q=[],d.set(de,q));const me=B.textures;if(q.length!==me.length||q[0]!==t.COLOR_ATTACHMENT0){for(let He=0,nt=me.length;He<nt;He++)q[He]=t.COLOR_ATTACHMENT0+He;q.length=me.length,Z=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,Z=!0);Z&&t.drawBuffers(q)}function Xe(B){return p!==B?(t.useProgram(B),p=B,!0):!1}const mt={[bs]:t.FUNC_ADD,[OR]:t.FUNC_SUBTRACT,[FR]:t.FUNC_REVERSE_SUBTRACT};mt[kR]=t.MIN,mt[BR]=t.MAX;const I={[zR]:t.ZERO,[HR]:t.ONE,[VR]:t.SRC_COLOR,[Up]:t.SRC_ALPHA,[YR]:t.SRC_ALPHA_SATURATE,[XR]:t.DST_COLOR,[WR]:t.DST_ALPHA,[GR]:t.ONE_MINUS_SRC_COLOR,[Op]:t.ONE_MINUS_SRC_ALPHA,[$R]:t.ONE_MINUS_DST_COLOR,[jR]:t.ONE_MINUS_DST_ALPHA,[KR]:t.CONSTANT_COLOR,[qR]:t.ONE_MINUS_CONSTANT_COLOR,[QR]:t.CONSTANT_ALPHA,[ZR]:t.ONE_MINUS_CONSTANT_ALPHA};function kt(B,de,q,Z,me,He,nt,Pt,qt,ct){if(B===Mr){g===!0&&(pe(t.BLEND),g=!1);return}if(g===!1&&(fe(t.BLEND),g=!0),B!==UR){if(B!==v||ct!==w){if((m!==bs||y!==bs)&&(t.blendEquation(t.FUNC_ADD),m=bs,y=bs),ct)switch(B){case Wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Np:t.blendFunc(t.ONE,t.ONE);break;case q_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Q_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Np:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case q_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Q_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}h=null,_=null,x=null,R=null,A.set(0,0,0),b=0,v=B,w=ct}return}me=me||de,He=He||q,nt=nt||Z,(de!==m||me!==y)&&(t.blendEquationSeparate(mt[de],mt[me]),m=de,y=me),(q!==h||Z!==_||He!==x||nt!==R)&&(t.blendFuncSeparate(I[q],I[Z],I[He],I[nt]),h=q,_=Z,x=He,R=nt),(Pt.equals(A)===!1||qt!==b)&&(t.blendColor(Pt.r,Pt.g,Pt.b,qt),A.copy(Pt),b=qt),v=B,w=!1}function $e(B,de){B.side===qi?pe(t.CULL_FACE):fe(t.CULL_FACE);let q=B.side===Zn;de&&(q=!q),at(q),B.blending===Wo&&B.transparent===!1?kt(Mr):kt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const Z=B.stencilWrite;o.setTest(Z),Z&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ke(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function at(B){T!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),T=B)}function De(B){B!==IR?(fe(t.CULL_FACE),B!==S&&(B===K_?t.cullFace(t.BACK):B===DR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),S=B}function Bt(B){B!==L&&(J&&t.lineWidth(B),L=B)}function ke(B,de,q){B?(fe(t.POLYGON_OFFSET_FILL),(W!==de||H!==q)&&(t.polygonOffset(de,q),W=de,H=q)):pe(t.POLYGON_OFFSET_FILL)}function Ye(B){B?fe(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function P(B){B===void 0&&(B=t.TEXTURE0+X-1),F!==B&&(t.activeTexture(B),F=B)}function E(B,de,q){q===void 0&&(F===null?q=t.TEXTURE0+X-1:q=F);let Z=j[q];Z===void 0&&(Z={type:void 0,texture:void 0},j[q]=Z),(Z.type!==B||Z.texture!==de)&&(F!==q&&(t.activeTexture(q),F=q),t.bindTexture(B,de||oe[B]),Z.type=B,Z.texture=de)}function G(){const B=j[F];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ve(B){Ee.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Ee.copy(B))}function Ae(B){je.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),je.copy(B))}function Be(B,de){let q=l.get(de);q===void 0&&(q=new WeakMap,l.set(de,q));let Z=q.get(B);Z===void 0&&(Z=t.getUniformBlockIndex(de,B.name),q.set(B,Z))}function qe(B,de){const Z=l.get(de).get(B);a.get(de)!==Z&&(t.uniformBlockBinding(de,Z,B.__bindingPointIndex),a.set(de,Z))}function Et(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},F=null,j={},u={},d=new WeakMap,f=[],p=null,g=!1,v=null,m=null,h=null,_=null,y=null,x=null,R=null,A=new We(0,0,0),b=0,w=!1,T=null,S=null,L=null,W=null,H=null,Ee.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:pe,bindFramebuffer:Re,drawBuffers:Fe,useProgram:Xe,setBlending:kt,setMaterial:$e,setFlipSided:at,setCullFace:De,setLineWidth:Bt,setPolygonOffset:ke,setScissorTest:Ye,activeTexture:P,bindTexture:E,unbindTexture:G,compressedTexImage2D:ne,compressedTexImage3D:ae,texImage2D:Se,texImage3D:it,updateUBOMapping:Be,uniformBlockBinding:qe,texStorage2D:Ke,texStorage3D:le,texSubImage2D:ie,texSubImage3D:Pe,compressedTexSubImage2D:ye,compressedTexSubImage3D:we,scissor:Ve,viewport:Ae,reset:Et}}function $0(t,e,n,i){const r=U2(i);switch(n){case QM:return t*e;case JM:return t*e;case eE:return t*e*2;case Ng:return t*e/r.components*r.byteLength;case Ug:return t*e/r.components*r.byteLength;case tE:return t*e*2/r.components*r.byteLength;case Og:return t*e*2/r.components*r.byteLength;case ZM:return t*e*3/r.components*r.byteLength;case li:return t*e*4/r.components*r.byteLength;case Fg:return t*e*4/r.components*r.byteLength;case Uu:case Ou:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fu:case ku:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zp:case Vp:return Math.max(t,16)*Math.max(e,8)/4;case Bp:case Hp:return Math.max(t,8)*Math.max(e,8)/2;case Gp:case Wp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $p:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case qp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Jp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case em:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case tm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case nm:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case im:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case rm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case sm:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Bu:case om:case am:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nE:case lm:return Math.ceil(t/4)*Math.ceil(e/4)*8;case cm:case um:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function U2(t){switch(t){case Rr:case YM:return{byteLength:1,components:1};case Wl:case KM:case Aa:return{byteLength:2,components:1};case Ig:case Dg:return{byteLength:2,components:4};case Xs:case Lg:case Fi:return{byteLength:4,components:1};case qM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function O2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):$l("canvas")}function v(P,E,G){let ne=1;const ae=Ye(P);if((ae.width>G||ae.height>G)&&(ne=G/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ie=Math.floor(ne*ae.width),Pe=Math.floor(ne*ae.height);d===void 0&&(d=g(ie,Pe));const ye=E?g(ie,Pe):d;return ye.width=ie,ye.height=Pe,ye.getContext("2d").drawImage(P,0,0,ie,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ie+"x"+Pe+")."),ye}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Fn&&P.minFilter!==On}function h(P){t.generateMipmap(P)}function _(P,E,G,ne,ae=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=E;if(E===t.RED&&(G===t.FLOAT&&(ie=t.R32F),G===t.HALF_FLOAT&&(ie=t.R16F),G===t.UNSIGNED_BYTE&&(ie=t.R8)),E===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ie=t.R8UI),G===t.UNSIGNED_SHORT&&(ie=t.R16UI),G===t.UNSIGNED_INT&&(ie=t.R32UI),G===t.BYTE&&(ie=t.R8I),G===t.SHORT&&(ie=t.R16I),G===t.INT&&(ie=t.R32I)),E===t.RG&&(G===t.FLOAT&&(ie=t.RG32F),G===t.HALF_FLOAT&&(ie=t.RG16F),G===t.UNSIGNED_BYTE&&(ie=t.RG8)),E===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ie=t.RG8UI),G===t.UNSIGNED_SHORT&&(ie=t.RG16UI),G===t.UNSIGNED_INT&&(ie=t.RG32UI),G===t.BYTE&&(ie=t.RG8I),G===t.SHORT&&(ie=t.RG16I),G===t.INT&&(ie=t.RG32I)),E===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),E===t.RGBA){const Pe=ae?xd:ut.getTransfer(ne);G===t.FLOAT&&(ie=t.RGBA32F),G===t.HALF_FLOAT&&(ie=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ie=Pe===wt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(P,E){let G;return P?E===null||E===Xs||E===ha?G=t.DEPTH24_STENCIL8:E===Fi?G=t.DEPTH32F_STENCIL8:E===Wl&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xs||E===ha?G=t.DEPTH_COMPONENT24:E===Fi?G=t.DEPTH_COMPONENT32F:E===Wl&&(G=t.DEPTH_COMPONENT16),G}function x(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Fn&&P.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function R(P){const E=P.target;E.removeEventListener("dispose",R),b(E),E.isVideoTexture&&u.delete(E)}function A(P){const E=P.target;E.removeEventListener("dispose",A),T(E)}function b(P){const E=i.get(P);if(E.__webglInit===void 0)return;const G=P.source,ne=f.get(G);if(ne){const ae=ne[E.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&w(P),Object.keys(ne).length===0&&f.delete(G)}i.remove(P)}function w(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const G=P.source,ne=f.get(G);delete ne[E.__cacheKey],o.memory.textures--}function T(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ae=0;ae<E.__webglFramebuffer[ne].length;ae++)t.deleteFramebuffer(E.__webglFramebuffer[ne][ae]);else t.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[ne]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=P.textures;for(let ne=0,ae=G.length;ne<ae;ne++){const ie=i.get(G[ne]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(G[ne])}i.remove(P)}let S=0;function L(){S=0}function W(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function H(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function X(P,E){const G=i.get(P);if(P.isVideoTexture&&Bt(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(G,P,E);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+E)}function J(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){je(G,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+E)}function K(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){je(G,P,E);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+E)}function se(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){$(G,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+E)}const F={[fa]:t.REPEAT,[Kr]:t.CLAMP_TO_EDGE,[yd]:t.MIRRORED_REPEAT},j={[Fn]:t.NEAREST,[$M]:t.NEAREST_MIPMAP_NEAREST,[cl]:t.NEAREST_MIPMAP_LINEAR,[On]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[vr]:t.LINEAR_MIPMAP_LINEAR},Q={[mC]:t.NEVER,[SC]:t.ALWAYS,[gC]:t.LESS,[sE]:t.LEQUAL,[vC]:t.EQUAL,[xC]:t.GEQUAL,[_C]:t.GREATER,[yC]:t.NOTEQUAL};function ue(P,E){if(E.type===Fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===Nu||E.magFilter===cl||E.magFilter===vr||E.minFilter===On||E.minFilter===Nu||E.minFilter===cl||E.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,F[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,F[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,F[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,j[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,j[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,Q[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==cl&&E.minFilter!==vr||E.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ee(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",R));const ne=E.source;let ae=f.get(ne);ae===void 0&&(ae={},f.set(ne,ae));const ie=H(E);if(ie!==P.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ae[ie].usedTimes++;const Pe=ae[P.__cacheKey];Pe!==void 0&&(ae[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&w(E)),P.__cacheKey=ie,P.__webglTexture=ae[ie].texture}return G}function je(P,E,G){let ne=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=t.TEXTURE_3D);const ae=Ee(P,E),ie=E.source;n.bindTexture(ne,P.__webglTexture,t.TEXTURE0+G);const Pe=i.get(ie);if(ie.version!==Pe.__version||ae===!0){n.activeTexture(t.TEXTURE0+G);const ye=ut.getPrimaries(ut.workingColorSpace),we=E.colorSpace===jr?null:ut.getPrimaries(E.colorSpace),Ke=E.colorSpace===jr||ye===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let le=v(E.image,!1,r.maxTextureSize);le=ke(E,le);const Se=s.convert(E.format,E.colorSpace),it=s.convert(E.type);let Ve=_(E.internalFormat,Se,it,E.colorSpace,E.isVideoTexture);ue(ne,E);let Ae;const Be=E.mipmaps,qe=E.isVideoTexture!==!0,Et=Pe.__version===void 0||ae===!0,B=ie.dataReady,de=x(E,le);if(E.isDepthTexture)Ve=y(E.format===pa,E.type),Et&&(qe?n.texStorage2D(t.TEXTURE_2D,1,Ve,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Ve,le.width,le.height,0,Se,it,null));else if(E.isDataTexture)if(Be.length>0){qe&&Et&&n.texStorage2D(t.TEXTURE_2D,de,Ve,Be[0].width,Be[0].height);for(let q=0,Z=Be.length;q<Z;q++)Ae=Be[q],qe?B&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Se,it,Ae.data):n.texImage2D(t.TEXTURE_2D,q,Ve,Ae.width,Ae.height,0,Se,it,Ae.data);E.generateMipmaps=!1}else qe?(Et&&n.texStorage2D(t.TEXTURE_2D,de,Ve,le.width,le.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,Se,it,le.data)):n.texImage2D(t.TEXTURE_2D,0,Ve,le.width,le.height,0,Se,it,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){qe&&Et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Ve,Be[0].width,Be[0].height,le.depth);for(let q=0,Z=Be.length;q<Z;q++)if(Ae=Be[q],E.format!==li)if(Se!==null)if(qe){if(B)if(E.layerUpdates.size>0){const me=$0(Ae.width,Ae.height,E.format,E.type);for(const He of E.layerUpdates){const nt=Ae.data.subarray(He*me/Ae.data.BYTES_PER_ELEMENT,(He+1)*me/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,He,Ae.width,Ae.height,1,Se,nt,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,le.depth,Se,Ae.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,Ve,Ae.width,Ae.height,le.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,le.depth,Se,it,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,Ve,Ae.width,Ae.height,le.depth,0,Se,it,Ae.data)}else{qe&&Et&&n.texStorage2D(t.TEXTURE_2D,de,Ve,Be[0].width,Be[0].height);for(let q=0,Z=Be.length;q<Z;q++)Ae=Be[q],E.format!==li?Se!==null?qe?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Se,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,q,Ve,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?B&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Se,it,Ae.data):n.texImage2D(t.TEXTURE_2D,q,Ve,Ae.width,Ae.height,0,Se,it,Ae.data)}else if(E.isDataArrayTexture)if(qe){if(Et&&n.texStorage3D(t.TEXTURE_2D_ARRAY,de,Ve,le.width,le.height,le.depth),B)if(E.layerUpdates.size>0){const q=$0(le.width,le.height,E.format,E.type);for(const Z of E.layerUpdates){const me=le.data.subarray(Z*q/le.data.BYTES_PER_ELEMENT,(Z+1)*q/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,le.width,le.height,1,Se,it,me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Se,it,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ve,le.width,le.height,le.depth,0,Se,it,le.data);else if(E.isData3DTexture)qe?(Et&&n.texStorage3D(t.TEXTURE_3D,de,Ve,le.width,le.height,le.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Se,it,le.data)):n.texImage3D(t.TEXTURE_3D,0,Ve,le.width,le.height,le.depth,0,Se,it,le.data);else if(E.isFramebufferTexture){if(Et)if(qe)n.texStorage2D(t.TEXTURE_2D,de,Ve,le.width,le.height);else{let q=le.width,Z=le.height;for(let me=0;me<de;me++)n.texImage2D(t.TEXTURE_2D,me,Ve,q,Z,0,Se,it,null),q>>=1,Z>>=1}}else if(Be.length>0){if(qe&&Et){const q=Ye(Be[0]);n.texStorage2D(t.TEXTURE_2D,de,Ve,q.width,q.height)}for(let q=0,Z=Be.length;q<Z;q++)Ae=Be[q],qe?B&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Se,it,Ae):n.texImage2D(t.TEXTURE_2D,q,Ve,Se,it,Ae);E.generateMipmaps=!1}else if(qe){if(Et){const q=Ye(le);n.texStorage2D(t.TEXTURE_2D,de,Ve,q.width,q.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,it,le)}else n.texImage2D(t.TEXTURE_2D,0,Ve,Se,it,le);m(E)&&h(ne),Pe.__version=ie.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function $(P,E,G){if(E.image.length!==6)return;const ne=Ee(P,E),ae=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+G);const ie=i.get(ae);if(ae.version!==ie.__version||ne===!0){n.activeTexture(t.TEXTURE0+G);const Pe=ut.getPrimaries(ut.workingColorSpace),ye=E.colorSpace===jr?null:ut.getPrimaries(E.colorSpace),we=E.colorSpace===jr||Pe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ke=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let Z=0;Z<6;Z++)!Ke&&!le?Se[Z]=v(E.image[Z],!0,r.maxCubemapSize):Se[Z]=le?E.image[Z].image:E.image[Z],Se[Z]=ke(E,Se[Z]);const it=Se[0],Ve=s.convert(E.format,E.colorSpace),Ae=s.convert(E.type),Be=_(E.internalFormat,Ve,Ae,E.colorSpace),qe=E.isVideoTexture!==!0,Et=ie.__version===void 0||ne===!0,B=ae.dataReady;let de=x(E,it);ue(t.TEXTURE_CUBE_MAP,E);let q;if(Ke){qe&&Et&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Be,it.width,it.height);for(let Z=0;Z<6;Z++){q=Se[Z].mipmaps;for(let me=0;me<q.length;me++){const He=q[me];E.format!==li?Ve!==null?qe?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,He.width,He.height,Ve,He.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Be,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,He.width,He.height,Ve,Ae,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Be,He.width,He.height,0,Ve,Ae,He.data)}}}else{if(q=E.mipmaps,qe&&Et){q.length>0&&de++;const Z=Ye(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(le){qe?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Se[Z].width,Se[Z].height,Ve,Ae,Se[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,Se[Z].width,Se[Z].height,0,Ve,Ae,Se[Z].data);for(let me=0;me<q.length;me++){const nt=q[me].image[Z].image;qe?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,nt.width,nt.height,Ve,Ae,nt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Be,nt.width,nt.height,0,Ve,Ae,nt.data)}}else{qe?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ve,Ae,Se[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,Ve,Ae,Se[Z]);for(let me=0;me<q.length;me++){const He=q[me];qe?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,Ve,Ae,He.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Be,Ve,Ae,He.image[Z])}}}m(E)&&h(t.TEXTURE_CUBE_MAP),ie.__version=ae.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function oe(P,E,G,ne,ae,ie){const Pe=s.convert(G.format,G.colorSpace),ye=s.convert(G.type),we=_(G.internalFormat,Pe,ye,G.colorSpace);if(!i.get(E).__hasExternalTextures){const le=Math.max(1,E.width>>ie),Se=Math.max(1,E.height>>ie);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,ie,we,le,Se,E.depth,0,Pe,ye,null):n.texImage2D(ae,ie,we,le,Se,0,Pe,ye,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),De(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ae,i.get(G).__webglTexture,0,at(E)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ae,i.get(G).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(P,E,G){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const ne=E.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,ie=y(E.stencilBuffer,ae),Pe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=at(E);De(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ye,ie,E.width,E.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,ie,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ie,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,P)}else{const ne=E.textures;for(let ae=0;ae<ne.length;ae++){const ie=ne[ae],Pe=s.convert(ie.format,ie.colorSpace),ye=s.convert(ie.type),we=_(ie.internalFormat,Pe,ye,ie.colorSpace),Ke=at(E);G&&De(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,we,E.width,E.height):De(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,we,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,we,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ne=i.get(E.depthTexture).__webglTexture,ae=at(E);if(E.depthTexture.format===jo)De(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===pa)De(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Re(P){const E=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const ae=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),E.__depthDisposeCallback=ae}E.__boundDepthTexture=ne}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");pe(E.__webglFramebuffer,P)}else if(G){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=t.createRenderbuffer(),fe(E.__webglDepthbuffer[ne],P,!1);else{const ae=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,ie)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),fe(E.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(P,E,G){const ne=i.get(P);E!==void 0&&oe(ne.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Re(P)}function Xe(P){const E=P.texture,G=i.get(P),ne=i.get(E);P.addEventListener("dispose",A);const ae=P.textures,ie=P.isWebGLCubeRenderTarget===!0,Pe=ae.length>1;if(Pe||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=E.version,o.memory.textures++),ie){G.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ye]=[];for(let we=0;we<E.mipmaps.length;we++)G.__webglFramebuffer[ye][we]=t.createFramebuffer()}else G.__webglFramebuffer[ye]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ye=0;ye<E.mipmaps.length;ye++)G.__webglFramebuffer[ye]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let ye=0,we=ae.length;ye<we;ye++){const Ke=i.get(ae[ye]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&De(P)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ye=0;ye<ae.length;ye++){const we=ae[ye];G.__webglColorRenderbuffer[ye]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ye]);const Ke=s.convert(we.format,we.colorSpace),le=s.convert(we.type),Se=_(we.internalFormat,Ke,le,we.colorSpace,P.isXRRenderTarget===!0),it=at(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,it,Se,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,G.__webglColorRenderbuffer[ye])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(G.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ue(t.TEXTURE_CUBE_MAP,E);for(let ye=0;ye<6;ye++)if(E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)oe(G.__webglFramebuffer[ye][we],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,we);else oe(G.__webglFramebuffer[ye],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);m(E)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let ye=0,we=ae.length;ye<we;ye++){const Ke=ae[ye],le=i.get(Ke);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),ue(t.TEXTURE_2D,Ke),oe(G.__webglFramebuffer,P,Ke,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,0),m(Ke)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let ye=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ye,ne.__webglTexture),ue(ye,E),E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)oe(G.__webglFramebuffer[we],P,E,t.COLOR_ATTACHMENT0,ye,we);else oe(G.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,ye,0);m(E)&&h(ye),n.unbindTexture()}P.depthBuffer&&Re(P)}function mt(P){const E=P.textures;for(let G=0,ne=E.length;G<ne;G++){const ae=E[G];if(m(ae)){const ie=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Pe=i.get(ae).__webglTexture;n.bindTexture(ie,Pe),h(ie),n.unbindTexture()}}}const I=[],kt=[];function $e(P){if(P.samples>0){if(De(P)===!1){const E=P.textures,G=P.width,ne=P.height;let ae=t.COLOR_BUFFER_BIT;const ie=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(P),ye=E.length>1;if(ye)for(let we=0;we<E.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let we=0;we<E.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),ye){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[we]);const Ke=i.get(E[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,G,ne,0,0,G,ne,ae,t.NEAREST),l===!0&&(I.length=0,kt.length=0,I.push(t.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(I.push(ie),kt.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,kt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ye)for(let we=0;we<E.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[we]);const Ke=i.get(E[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function at(P){return Math.min(r.maxSamples,P.samples)}function De(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Bt(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function ke(P,E){const G=P.colorSpace,ne=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==yn&&G!==jr&&(ut.getTransfer(G)===wt?(ne!==li||ae!==Rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=se,this.rebindTextures=Fe,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=De}function F2(t,e){function n(i,r=jr){let s;const o=ut.getTransfer(r);if(i===Rr)return t.UNSIGNED_BYTE;if(i===Ig)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Dg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qM)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===YM)return t.BYTE;if(i===KM)return t.SHORT;if(i===Wl)return t.UNSIGNED_SHORT;if(i===Lg)return t.INT;if(i===Xs)return t.UNSIGNED_INT;if(i===Fi)return t.FLOAT;if(i===Aa)return t.HALF_FLOAT;if(i===QM)return t.ALPHA;if(i===ZM)return t.RGB;if(i===li)return t.RGBA;if(i===JM)return t.LUMINANCE;if(i===eE)return t.LUMINANCE_ALPHA;if(i===jo)return t.DEPTH_COMPONENT;if(i===pa)return t.DEPTH_STENCIL;if(i===Ng)return t.RED;if(i===Ug)return t.RED_INTEGER;if(i===tE)return t.RG;if(i===Og)return t.RG_INTEGER;if(i===Fg)return t.RGBA_INTEGER;if(i===Uu||i===Ou||i===Fu||i===ku)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Uu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ou)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ku)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Uu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ou)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ku)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bp||i===zp||i===Hp||i===Vp)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bp)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===zp)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hp)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vp)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gp||i===Wp||i===jp)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Gp||i===Wp)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===jp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Xp||i===$p||i===Yp||i===Kp||i===qp||i===Qp||i===Zp||i===Jp||i===em||i===tm||i===nm||i===im||i===rm||i===sm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Xp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$p)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jp)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===em)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===im)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sm)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bu||i===om||i===am)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bu)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===om)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===am)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nE||i===lm||i===cm||i===um)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===lm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===um)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ha?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class k2 extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ns extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B2={type:"move"};class hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const z2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H2=`
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

}`;class V2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new gn({vertexShader:z2,fragmentShader:H2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new An(new sc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G2 extends ba{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const v=new V2,m=n.getContextAttributes();let h=null,_=null;const y=[],x=[],R=new ze;let A=null;const b=new Un;b.layers.enable(1),b.viewport=new dt;const w=new Un;w.layers.enable(2),w.viewport=new dt;const T=[b,w],S=new k2;S.layers.enable(1),S.layers.enable(2);let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=y[$];return oe===void 0&&(oe=new hh,y[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=y[$];return oe===void 0&&(oe=new hh,y[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=y[$];return oe===void 0&&(oe=new hh,y[$]=oe),oe.getHandSpace()};function H($){const oe=x.indexOf($.inputSource);if(oe===-1)return;const fe=y[oe];fe!==void 0&&(fe.update($.inputSource,$.frame,c||o),fe.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",J);for(let $=0;$<y.length;$++){const oe=x[$];oe!==null&&(x[$]=null,y[$].disconnect(oe))}L=null,W=null,v.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,_=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",X),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Vi(p.framebufferWidth,p.framebufferHeight,{format:li,type:Rr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,fe=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?pa:jo,fe=m.stencil?ha:Xs);const Re={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,n),f=d.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Vi(f.textureWidth,f.textureHeight,{format:li,type:Rr,depthTexture:new vE(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function J($){for(let oe=0;oe<$.removed.length;oe++){const fe=$.removed[oe],pe=x.indexOf(fe);pe>=0&&(x[pe]=null,y[pe].disconnect(fe))}for(let oe=0;oe<$.added.length;oe++){const fe=$.added[oe];let pe=x.indexOf(fe);if(pe===-1){for(let Fe=0;Fe<y.length;Fe++)if(Fe>=x.length){x.push(fe),pe=Fe;break}else if(x[Fe]===null){x[Fe]=fe,pe=Fe;break}if(pe===-1)break}const Re=y[pe];Re&&Re.connect(fe)}}const K=new O,se=new O;function F($,oe,fe){K.setFromMatrixPosition(oe.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);const pe=K.distanceTo(se),Re=oe.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,Xe=Re[14]/(Re[10]-1),mt=Re[14]/(Re[10]+1),I=(Re[9]+1)/Re[5],kt=(Re[9]-1)/Re[5],$e=(Re[8]-1)/Re[0],at=(Fe[8]+1)/Fe[0],De=Xe*$e,Bt=Xe*at,ke=pe/(-$e+at),Ye=ke*-$e;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ye),$.translateZ(ke),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Re[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const P=Xe+ke,E=mt+ke,G=De-Ye,ne=Bt+(pe-Ye),ae=I*mt/E*P,ie=kt*mt/E*P;$.projectionMatrix.makePerspective(G,ne,ae,ie,P,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function j($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let oe=$.near,fe=$.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(fe=v.depthFar)),S.near=w.near=b.near=oe,S.far=w.far=b.far=fe,(L!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,W=S.far);const pe=$.parent,Re=S.cameras;j(S,pe);for(let Fe=0;Fe<Re.length;Fe++)j(Re[Fe],pe);Re.length===2?F(S,b,w):S.projectionMatrix.copy(b.projectionMatrix),Q($,S,pe)};function Q($,oe,fe){fe===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(fe.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ma*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ue=null;function Ee($,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let pe=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let Fe=0;Fe<fe.length;Fe++){const Xe=fe[Fe];let mt=null;if(p!==null)mt=p.getViewport(Xe);else{const kt=d.getViewSubImage(f,Xe);mt=kt.viewport,Fe===0&&(e.setRenderTargetTextures(_,kt.colorTexture,f.ignoreDepthValues?void 0:kt.depthStencilTexture),e.setRenderTarget(_))}let I=T[Fe];I===void 0&&(I=new Un,I.layers.enable(Fe),I.viewport=new dt,T[Fe]=I),I.matrix.fromArray(Xe.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Xe.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(mt.x,mt.y,mt.width,mt.height),Fe===0&&(S.matrix.copy(I.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(I)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Fe=d.getDepthInformation(fe[0]);Fe&&Fe.isValid&&Fe.texture&&v.init(e,Fe,r.renderState)}}for(let fe=0;fe<y.length;fe++){const pe=x[fe],Re=y[fe];pe!==null&&Re!==void 0&&Re.update(pe,oe,c||o)}ue&&ue($,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const je=new gE;je.setAnimationLoop(Ee),this.setAnimationLoop=function($){ue=$},this.dispose=function(){}}}const ys=new tr,W2=new Qe;function j2(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,hE(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),v(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Zn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Zn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,ys.copy(x),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),m.envMapRotation.value.setFromMatrix4(W2.makeRotationFromEuler(ys)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Zn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function X2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function c(_,y){let x=r[_.id];x===void 0&&(g(_),x=u(_),r[_.id]=x,_.addEventListener("dispose",m));const R=y.program;i.updateUBOMapping(_,R);const A=e.render.frame;s[_.id]!==A&&(f(_),s[_.id]=A)}function u(_){const y=d();_.__bindingPointIndex=y;const x=t.createBuffer(),R=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const y=r[_.id],x=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,b=x.length;A<b;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,S=w.length;T<S;T++){const L=w[T];if(p(L,A,T,R)===!0){const W=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let J=0;J<H.length;J++){const K=H[J],se=v(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,t.bufferSubData(t.UNIFORM_BUFFER,W+X,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,X),X+=se.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,y,x,R){const A=_.value,b=y+"_"+x;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const w=R[b];if(typeof A=="number"||typeof A=="boolean"){if(w!==A)return R[b]=A,!0}else if(w.equals(A)===!1)return w.copy(A),!0}return!1}function g(_){const y=_.uniforms;let x=0;const R=16;for(let b=0,w=y.length;b<w;b++){const T=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,L=T.length;S<L;S++){const W=T[S],H=Array.isArray(W.value)?W.value:[W.value];for(let X=0,J=H.length;X<J;X++){const K=H[X],se=v(K),F=x%R,j=F%se.boundary,Q=F+j;x+=j,Q!==0&&R-Q<se.storage&&(x+=R-Q),W.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=se.storage}}}const A=x%R;return A>0&&(x+=R-A),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class ME{constructor(e={}){const{canvas:n=kC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nn,this.toneMapping=ss,this.toneMappingExposure=1;const y=this;let x=!1,R=0,A=0,b=null,w=-1,T=null;const S=new dt,L=new dt;let W=null;const H=new We(0);let X=0,J=n.width,K=n.height,se=1,F=null,j=null;const Q=new dt(0,0,J,K),ue=new dt(0,0,J,K);let Ee=!1;const je=new Hg;let $=!1,oe=!1;const fe=new Qe,pe=new O,Re=new dt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function mt(){return b===null?se:1}let I=i;function kt(M,C){return n.getContext(M,C)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pg}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",me,!1),I===null){const C="webgl2";if(I=kt(C,M),I===null)throw kt(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let $e,at,De,Bt,ke,Ye,P,E,G,ne,ae,ie,Pe,ye,we,Ke,le,Se,it,Ve,Ae,Be,qe,Et;function B(){$e=new JI(I),$e.init(),Be=new F2(I,$e),at=new $I(I,$e,e,Be),De=new N2(I),Bt=new nD(I),ke=new x2,Ye=new O2(I,$e,De,ke,at,Be,Bt),P=new KI(y),E=new ZI(y),G=new cP(I),qe=new jI(I,G),ne=new eD(I,G,Bt,qe),ae=new rD(I,ne,G,Bt),it=new iD(I,at,Ye),Ke=new YI(ke),ie=new y2(y,P,E,$e,at,qe,Ke),Pe=new j2(y,ke),ye=new M2,we=new R2($e),Se=new WI(y,P,E,De,ae,f,l),le=new D2(y,ae,at),Et=new X2(I,Bt,at,De),Ve=new XI(I,$e,Bt),Ae=new tD(I,$e,Bt),Bt.programs=ie.programs,y.capabilities=at,y.extensions=$e,y.properties=ke,y.renderLists=ye,y.shadowMap=le,y.state=De,y.info=Bt}B();const de=new G2(y,I);this.xr=de,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(M){M!==void 0&&(se=M,this.setSize(J,K,!1))},this.getSize=function(M){return M.set(J,K)},this.setSize=function(M,C,N=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,K=C,n.width=Math.floor(M*se),n.height=Math.floor(C*se),N===!0&&(n.style.width=M+"px",n.style.height=C+"px"),this.setViewport(0,0,M,C)},this.getDrawingBufferSize=function(M){return M.set(J*se,K*se).floor()},this.setDrawingBufferSize=function(M,C,N){J=M,K=C,se=N,n.width=Math.floor(M*N),n.height=Math.floor(C*N),this.setViewport(0,0,M,C)},this.getCurrentViewport=function(M){return M.copy(S)},this.getViewport=function(M){return M.copy(Q)},this.setViewport=function(M,C,N,z){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,C,N,z),De.viewport(S.copy(Q).multiplyScalar(se).round())},this.getScissor=function(M){return M.copy(ue)},this.setScissor=function(M,C,N,z){M.isVector4?ue.set(M.x,M.y,M.z,M.w):ue.set(M,C,N,z),De.scissor(L.copy(ue).multiplyScalar(se).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(M){De.setScissorTest(Ee=M)},this.setOpaqueSort=function(M){F=M},this.setTransparentSort=function(M){j=M},this.getClearColor=function(M){return M.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(M=!0,C=!0,N=!0){let z=0;if(M){let U=!1;if(b!==null){const ee=b.texture.format;U=ee===Fg||ee===Og||ee===Ug}if(U){const ee=b.texture.type,re=ee===Rr||ee===Xs||ee===Wl||ee===ha||ee===Ig||ee===Dg,ve=Se.getClearColor(),ge=Se.getClearAlpha(),Ue=ve.r,Ne=ve.g,be=ve.b;re?(p[0]=Ue,p[1]=Ne,p[2]=be,p[3]=ge,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Ue,g[1]=Ne,g[2]=be,g[3]=ge,I.clearBufferiv(I.COLOR,0,g))}else z|=I.COLOR_BUFFER_BIT}C&&(z|=I.DEPTH_BUFFER_BIT),N&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),we.dispose(),ke.dispose(),P.dispose(),E.dispose(),ae.dispose(),qe.dispose(),Et.dispose(),ie.dispose(),de.dispose(),de.removeEventListener("sessionstart",ei),de.removeEventListener("sessionend",hs),hi.stop()};function q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const M=Bt.autoReset,C=le.enabled,N=le.autoUpdate,z=le.needsUpdate,U=le.type;B(),Bt.autoReset=M,le.enabled=C,le.autoUpdate=N,le.needsUpdate=z,le.type=U}function me(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function He(M){const C=M.target;C.removeEventListener("dispose",He),nt(C)}function nt(M){Pt(M),ke.remove(M)}function Pt(M){const C=ke.get(M).programs;C!==void 0&&(C.forEach(function(N){ie.releaseProgram(N)}),M.isShaderMaterial&&ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,C,N,z,U,ee){C===null&&(C=Fe);const re=U.isMesh&&U.matrixWorld.determinant()<0,ve=Ie(M,C,N,z,U);De.setMaterial(z,re);let ge=N.index,Ue=1;if(z.wireframe===!0){if(ge=ne.getWireframeAttribute(N),ge===void 0)return;Ue=2}const Ne=N.drawRange,be=N.attributes.position;let tt=Ne.start*Ue,Mt=(Ne.start+Ne.count)*Ue;ee!==null&&(tt=Math.max(tt,ee.start*Ue),Mt=Math.min(Mt,(ee.start+ee.count)*Ue)),ge!==null?(tt=Math.max(tt,0),Mt=Math.min(Mt,ge.count)):be!=null&&(tt=Math.max(tt,0),Mt=Math.min(Mt,be.count));const ht=Mt-tt;if(ht<0||ht===1/0)return;qe.setup(U,z,ve,N,ge);let nn,lt=Ve;if(ge!==null&&(nn=G.get(ge),lt=Ae,lt.setIndex(nn)),U.isMesh)z.wireframe===!0?(De.setLineWidth(z.wireframeLinewidth*mt()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(U.isLine){let Ce=z.linewidth;Ce===void 0&&(Ce=1),De.setLineWidth(Ce*mt()),U.isLineSegments?lt.setMode(I.LINES):U.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else U.isPoints?lt.setMode(I.POINTS):U.isSprite&&lt.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)lt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))lt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,Le=U._multiDrawCounts,Oe=U._multiDrawCount,At=ge?G.get(ge).bytesPerElement:1,gt=ke.get(z).currentProgram.getUniforms();for(let It=0;It<Oe;It++)gt.setValue(I,"_gl_DrawID",It),lt.render(Ce[It]/At,Le[It])}else if(U.isInstancedMesh)lt.renderInstances(tt,ht,U.count);else if(N.isInstancedBufferGeometry){const Ce=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Le=Math.min(N.instanceCount,Ce);lt.renderInstances(tt,ht,Le)}else lt.render(tt,ht)};function qt(M,C,N){M.transparent===!0&&M.side===qi&&M.forceSinglePass===!1?(M.side=Zn,M.needsUpdate=!0,V(M,C,N),M.side=br,M.needsUpdate=!0,V(M,C,N),M.side=qi):V(M,C,N)}this.compile=function(M,C,N=null){N===null&&(N=M),m=we.get(N),m.init(C),_.push(m),N.traverseVisible(function(U){U.isLight&&U.layers.test(C.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),M!==N&&M.traverseVisible(function(U){U.isLight&&U.layers.test(C.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const z=new Set;return M.traverse(function(U){const ee=U.material;if(ee)if(Array.isArray(ee))for(let re=0;re<ee.length;re++){const ve=ee[re];qt(ve,N,U),z.add(ve)}else qt(ee,N,U),z.add(ee)}),_.pop(),m=null,z},this.compileAsync=function(M,C,N=null){const z=this.compile(M,C,N);return new Promise(U=>{function ee(){if(z.forEach(function(re){ke.get(re).currentProgram.isReady()&&z.delete(re)}),z.size===0){U(M);return}setTimeout(ee,10)}$e.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let ct=null;function Ai(M){ct&&ct(M)}function ei(){hi.stop()}function hs(){hi.start()}const hi=new gE;hi.setAnimationLoop(Ai),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(M){ct=M,de.setAnimationLoop(M),M===null?hi.stop():hi.start()},de.addEventListener("sessionstart",ei),de.addEventListener("sessionend",hs),this.render=function(M,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(C),C=de.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,C,b),m=we.get(M,_.length),m.init(C),_.push(m),fe.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),je.setFromProjectionMatrix(fe),oe=this.localClippingEnabled,$=Ke.init(this.clippingPlanes,oe),v=ye.get(M,h.length),v.init(),h.push(v),de.enabled===!0&&de.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&qs(ee,C,-1/0,y.sortObjects)}qs(M,C,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(F,j),Xe=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Xe&&Se.addToRenderList(v,M),this.info.render.frame++,$===!0&&Ke.beginShadows();const N=m.state.shadowsArray;le.render(N,M,C),$===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=v.opaque,U=v.transmissive;if(m.setupLights(),C.isArrayCamera){const ee=C.cameras;if(U.length>0)for(let re=0,ve=ee.length;re<ve;re++){const ge=ee[re];fc(z,U,M,ge)}Xe&&Se.render(M);for(let re=0,ve=ee.length;re<ve;re++){const ge=ee[re];dc(v,M,ge,ge.viewport)}}else U.length>0&&fc(z,U,M,C),Xe&&Se.render(M),dc(v,M,C);b!==null&&(Ye.updateMultisampleRenderTarget(b),Ye.updateRenderTargetMipmap(b)),M.isScene===!0&&M.onAfterRender(y,M,C),qe.resetDefaultState(),w=-1,T=null,_.pop(),_.length>0?(m=_[_.length-1],$===!0&&Ke.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function qs(M,C,N,z){if(M.visible===!1)return;if(M.layers.test(C.layers)){if(M.isGroup)N=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(C);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||je.intersectsSprite(M)){z&&Re.setFromMatrixPosition(M.matrixWorld).applyMatrix4(fe);const re=ae.update(M),ve=M.material;ve.visible&&v.push(M,re,ve,N,Re.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||je.intersectsObject(M))){const re=ae.update(M),ve=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Re.copy(M.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Re.copy(re.boundingSphere.center)),Re.applyMatrix4(M.matrixWorld).applyMatrix4(fe)),Array.isArray(ve)){const ge=re.groups;for(let Ue=0,Ne=ge.length;Ue<Ne;Ue++){const be=ge[Ue],tt=ve[be.materialIndex];tt&&tt.visible&&v.push(M,re,tt,N,Re.z,be)}}else ve.visible&&v.push(M,re,ve,N,Re.z,null)}}const ee=M.children;for(let re=0,ve=ee.length;re<ve;re++)qs(ee[re],C,N,z)}function dc(M,C,N,z){const U=M.opaque,ee=M.transmissive,re=M.transparent;m.setupLightsView(N),$===!0&&Ke.setGlobalState(y.clippingPlanes,N),z&&De.viewport(S.copy(z)),U.length>0&&D(U,C,N),ee.length>0&&D(ee,C,N),re.length>0&&D(re,C,N),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function fc(M,C,N,z){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Vi(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Aa:Rr,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const ee=m.state.transmissionRenderTarget[z.id],re=z.viewport||S;ee.setSize(re.z,re.w);const ve=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor(H),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),Xe&&Se.render(N);const ge=y.toneMapping;y.toneMapping=ss;const Ue=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),$===!0&&Ke.setGlobalState(y.clippingPlanes,z),D(M,N,z),Ye.updateMultisampleRenderTarget(ee),Ye.updateRenderTargetMipmap(ee),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let be=0,tt=C.length;be<tt;be++){const Mt=C[be],ht=Mt.object,nn=Mt.geometry,lt=Mt.material,Ce=Mt.group;if(lt.side===qi&&ht.layers.test(z.layers)){const Le=lt.side;lt.side=Zn,lt.needsUpdate=!0,k(ht,N,z,nn,lt,Ce),lt.side=Le,lt.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ye.updateMultisampleRenderTarget(ee),Ye.updateRenderTargetMipmap(ee))}y.setRenderTarget(ve),y.setClearColor(H,X),Ue!==void 0&&(z.viewport=Ue),y.toneMapping=ge}function D(M,C,N){const z=C.isScene===!0?C.overrideMaterial:null;for(let U=0,ee=M.length;U<ee;U++){const re=M[U],ve=re.object,ge=re.geometry,Ue=z===null?re.material:z,Ne=re.group;ve.layers.test(N.layers)&&k(ve,C,N,ge,Ue,Ne)}}function k(M,C,N,z,U,ee){M.onBeforeRender(y,C,N,z,U,ee),M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(y,C,N,z,M,ee),U.transparent===!0&&U.side===qi&&U.forceSinglePass===!1?(U.side=Zn,U.needsUpdate=!0,y.renderBufferDirect(N,C,z,U,M,ee),U.side=br,U.needsUpdate=!0,y.renderBufferDirect(N,C,z,U,M,ee),U.side=qi):y.renderBufferDirect(N,C,z,U,M,ee),M.onAfterRender(y,C,N,z,U,ee)}function V(M,C,N){C.isScene!==!0&&(C=Fe);const z=ke.get(M),U=m.state.lights,ee=m.state.shadowsArray,re=U.state.version,ve=ie.getParameters(M,U.state,ee,C,N),ge=ie.getProgramCacheKey(ve);let Ue=z.programs;z.environment=M.isMeshStandardMaterial?C.environment:null,z.fog=C.fog,z.envMap=(M.isMeshStandardMaterial?E:P).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?C.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",He),Ue=new Map,z.programs=Ue);let Ne=Ue.get(ge);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===re)return Me(M,ve),Ne}else ve.uniforms=ie.getUniforms(M),M.onBeforeCompile(ve,y),Ne=ie.acquireProgram(ve,ge),Ue.set(ge,Ne),z.uniforms=ve.uniforms;const be=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(be.clippingPlanes=Ke.uniform),Me(M,ve),z.needsLights=xe(M),z.lightsStateVersion=re,z.needsLights&&(be.ambientLightColor.value=U.state.ambient,be.lightProbe.value=U.state.probe,be.directionalLights.value=U.state.directional,be.directionalLightShadows.value=U.state.directionalShadow,be.spotLights.value=U.state.spot,be.spotLightShadows.value=U.state.spotShadow,be.rectAreaLights.value=U.state.rectArea,be.ltc_1.value=U.state.rectAreaLTC1,be.ltc_2.value=U.state.rectAreaLTC2,be.pointLights.value=U.state.point,be.pointLightShadows.value=U.state.pointShadow,be.hemisphereLights.value=U.state.hemi,be.directionalShadowMap.value=U.state.directionalShadowMap,be.directionalShadowMatrix.value=U.state.directionalShadowMatrix,be.spotShadowMap.value=U.state.spotShadowMap,be.spotLightMatrix.value=U.state.spotLightMatrix,be.spotLightMap.value=U.state.spotLightMap,be.pointShadowMap.value=U.state.pointShadowMap,be.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ne,z.uniformsList=null,Ne}function te(M){if(M.uniformsList===null){const C=M.currentProgram.getUniforms();M.uniformsList=zu.seqWithValue(C.seq,M.uniforms)}return M.uniformsList}function Me(M,C){const N=ke.get(M);N.outputColorSpace=C.outputColorSpace,N.batching=C.batching,N.batchingColor=C.batchingColor,N.instancing=C.instancing,N.instancingColor=C.instancingColor,N.instancingMorph=C.instancingMorph,N.skinning=C.skinning,N.morphTargets=C.morphTargets,N.morphNormals=C.morphNormals,N.morphColors=C.morphColors,N.morphTargetsCount=C.morphTargetsCount,N.numClippingPlanes=C.numClippingPlanes,N.numIntersection=C.numClipIntersection,N.vertexAlphas=C.vertexAlphas,N.vertexTangents=C.vertexTangents,N.toneMapping=C.toneMapping}function Ie(M,C,N,z,U){C.isScene!==!0&&(C=Fe),Ye.resetTextureUnits();const ee=C.fog,re=z.isMeshStandardMaterial?C.environment:null,ve=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:yn,ge=(z.isMeshStandardMaterial?E:P).get(z.envMap||re),Ue=z.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ne=!!N.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),be=!!N.morphAttributes.position,tt=!!N.morphAttributes.normal,Mt=!!N.morphAttributes.color;let ht=ss;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ht=y.toneMapping);const nn=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,lt=nn!==void 0?nn.length:0,Ce=ke.get(z),Le=m.state.lights;if($===!0&&(oe===!0||M!==T)){const pi=M===T&&z.id===w;Ke.setState(z,M,pi)}let Oe=!1;z.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Le.state.version||Ce.outputColorSpace!==ve||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==ge||z.fog===!0&&Ce.fog!==ee||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ke.numPlanes||Ce.numIntersection!==Ke.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==Ne||Ce.morphTargets!==be||Ce.morphNormals!==tt||Ce.morphColors!==Mt||Ce.toneMapping!==ht||Ce.morphTargetsCount!==lt)&&(Oe=!0):(Oe=!0,Ce.__version=z.version);let At=Ce.currentProgram;Oe===!0&&(At=V(z,C,U));let gt=!1,It=!1,Qs=!1;const zt=At.getUniforms(),Pr=Ce.uniforms;if(De.useProgram(At.program)&&(gt=!0,It=!0,Qs=!0),z.id!==w&&(w=z.id,It=!0),gt||T!==M){zt.setValue(I,"projectionMatrix",M.projectionMatrix),zt.setValue(I,"viewMatrix",M.matrixWorldInverse);const pi=zt.map.cameraPosition;pi!==void 0&&pi.setValue(I,pe.setFromMatrixPosition(M.matrixWorld)),at.logarithmicDepthBuffer&&zt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&zt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,It=!0,Qs=!0)}if(U.isSkinnedMesh){zt.setOptional(I,U,"bindMatrix"),zt.setOptional(I,U,"bindMatrixInverse");const pi=U.skeleton;pi&&(pi.boneTexture===null&&pi.computeBoneTexture(),zt.setValue(I,"boneTexture",pi.boneTexture,Ye))}U.isBatchedMesh&&(zt.setOptional(I,U,"batchingTexture"),zt.setValue(I,"batchingTexture",U._matricesTexture,Ye),zt.setOptional(I,U,"batchingIdTexture"),zt.setValue(I,"batchingIdTexture",U._indirectTexture,Ye),zt.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&zt.setValue(I,"batchingColorTexture",U._colorsTexture,Ye));const of=N.morphAttributes;if((of.position!==void 0||of.normal!==void 0||of.color!==void 0)&&it.update(U,N,At),(It||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,zt.setValue(I,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Pr.envMap.value=ge,Pr.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&C.environment!==null&&(Pr.envMapIntensity.value=C.environmentIntensity),It&&(zt.setValue(I,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&Ge(Pr,Qs),ee&&z.fog===!0&&Pe.refreshFogUniforms(Pr,ee),Pe.refreshMaterialUniforms(Pr,z,se,K,m.state.transmissionRenderTarget[M.id]),zu.upload(I,te(Ce),Pr,Ye)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(zu.upload(I,te(Ce),Pr,Ye),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&zt.setValue(I,"center",U.center),zt.setValue(I,"modelViewMatrix",U.modelViewMatrix),zt.setValue(I,"normalMatrix",U.normalMatrix),zt.setValue(I,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const pi=z.uniformsGroups;for(let af=0,ww=pi.length;af<ww;af++){const sv=pi[af];Et.update(sv,At),Et.bind(sv,At)}}return At}function Ge(M,C){M.ambientLightColor.needsUpdate=C,M.lightProbe.needsUpdate=C,M.directionalLights.needsUpdate=C,M.directionalLightShadows.needsUpdate=C,M.pointLights.needsUpdate=C,M.pointLightShadows.needsUpdate=C,M.spotLights.needsUpdate=C,M.spotLightShadows.needsUpdate=C,M.rectAreaLights.needsUpdate=C,M.hemisphereLights.needsUpdate=C}function xe(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(M,C,N){ke.get(M.texture).__webglTexture=C,ke.get(M.depthTexture).__webglTexture=N;const z=ke.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=N===void 0,z.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,C){const N=ke.get(M);N.__webglFramebuffer=C,N.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(M,C=0,N=0){b=M,R=C,A=N;let z=!0,U=null,ee=!1,re=!1;if(M){const ge=ke.get(M);if(ge.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(ge.__webglFramebuffer===void 0)Ye.setupRenderTarget(M);else if(ge.__hasExternalTextures)Ye.rebindTextures(M,ke.get(M.texture).__webglTexture,ke.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const be=M.depthTexture;if(ge.__boundDepthTexture!==be){if(be!==null&&ke.has(be)&&(M.width!==be.image.width||M.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(re=!0);const Ne=ke.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[C])?U=Ne[C][N]:U=Ne[C],ee=!0):M.samples>0&&Ye.useMultisampledRTT(M)===!1?U=ke.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[N]:U=Ne,S.copy(M.viewport),L.copy(M.scissor),W=M.scissorTest}else S.copy(Q).multiplyScalar(se).floor(),L.copy(ue).multiplyScalar(se).floor(),W=Ee;if(De.bindFramebuffer(I.FRAMEBUFFER,U)&&z&&De.drawBuffers(M,U),De.viewport(S),De.scissor(L),De.setScissorTest(W),ee){const ge=ke.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,ge.__webglTexture,N)}else if(re){const ge=ke.get(M.texture),Ue=C||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,ge.__webglTexture,N||0,Ue)}w=-1},this.readRenderTargetPixels=function(M,C,N,z,U,ee,re){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&re!==void 0&&(ve=ve[re]),ve){De.bindFramebuffer(I.FRAMEBUFFER,ve);try{const ge=M.texture,Ue=ge.format,Ne=ge.type;if(!at.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=M.width-z&&N>=0&&N<=M.height-U&&I.readPixels(C,N,z,U,Be.convert(Ue),Be.convert(Ne),ee)}finally{const ge=b!==null?ke.get(b).__webglFramebuffer:null;De.bindFramebuffer(I.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(M,C,N,z,U,ee,re){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&re!==void 0&&(ve=ve[re]),ve){De.bindFramebuffer(I.FRAMEBUFFER,ve);try{const ge=M.texture,Ue=ge.format,Ne=ge.type;if(!at.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=M.width-z&&N>=0&&N<=M.height-U){const be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.bufferData(I.PIXEL_PACK_BUFFER,ee.byteLength,I.STREAM_READ),I.readPixels(C,N,z,U,Be.convert(Ue),Be.convert(Ne),0),I.flush();const tt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await BC(I,tt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ee)}finally{I.deleteBuffer(be),I.deleteSync(tt)}return ee}}finally{const ge=b!==null?ke.get(b).__webglFramebuffer:null;De.bindFramebuffer(I.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(M,C=null,N=0){M.isTexture!==!0&&($o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-N),U=Math.floor(M.image.width*z),ee=Math.floor(M.image.height*z),re=C!==null?C.x:0,ve=C!==null?C.y:0;Ye.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,N,0,0,re,ve,U,ee),De.unbindTexture()},this.copyTextureToTexture=function(M,C,N=null,z=null,U=0){M.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],C=arguments[2],U=arguments[3]||0,N=null);let ee,re,ve,ge,Ue,Ne;N!==null?(ee=N.max.x-N.min.x,re=N.max.y-N.min.y,ve=N.min.x,ge=N.min.y):(ee=M.image.width,re=M.image.height,ve=0,ge=0),z!==null?(Ue=z.x,Ne=z.y):(Ue=0,Ne=0);const be=Be.convert(C.format),tt=Be.convert(C.type);Ye.setTexture2D(C,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);const Mt=I.getParameter(I.UNPACK_ROW_LENGTH),ht=I.getParameter(I.UNPACK_IMAGE_HEIGHT),nn=I.getParameter(I.UNPACK_SKIP_PIXELS),lt=I.getParameter(I.UNPACK_SKIP_ROWS),Ce=I.getParameter(I.UNPACK_SKIP_IMAGES),Le=M.isCompressedTexture?M.mipmaps[U]:M.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ve),I.pixelStorei(I.UNPACK_SKIP_ROWS,ge),M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,U,Ue,Ne,ee,re,be,tt,Le.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,U,Ue,Ne,Le.width,Le.height,be,Le.data):I.texSubImage2D(I.TEXTURE_2D,U,Ue,Ne,ee,re,be,tt,Le),I.pixelStorei(I.UNPACK_ROW_LENGTH,Mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht),I.pixelStorei(I.UNPACK_SKIP_PIXELS,nn),I.pixelStorei(I.UNPACK_SKIP_ROWS,lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ce),U===0&&C.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(M,C,N=null,z=null,U=0){M.isTexture!==!0&&($o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,z=arguments[1]||null,M=arguments[2],C=arguments[3],U=arguments[4]||0);let ee,re,ve,ge,Ue,Ne,be,tt,Mt;const ht=M.isCompressedTexture?M.mipmaps[U]:M.image;N!==null?(ee=N.max.x-N.min.x,re=N.max.y-N.min.y,ve=N.max.z-N.min.z,ge=N.min.x,Ue=N.min.y,Ne=N.min.z):(ee=ht.width,re=ht.height,ve=ht.depth,ge=0,Ue=0,Ne=0),z!==null?(be=z.x,tt=z.y,Mt=z.z):(be=0,tt=0,Mt=0);const nn=Be.convert(C.format),lt=Be.convert(C.type);let Ce;if(C.isData3DTexture)Ye.setTexture3D(C,0),Ce=I.TEXTURE_3D;else if(C.isDataArrayTexture||C.isCompressedArrayTexture)Ye.setTexture2DArray(C,0),Ce=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);const Le=I.getParameter(I.UNPACK_ROW_LENGTH),Oe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),At=I.getParameter(I.UNPACK_SKIP_PIXELS),gt=I.getParameter(I.UNPACK_SKIP_ROWS),It=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ht.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ht.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ge),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ne),M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Ce,U,be,tt,Mt,ee,re,ve,nn,lt,ht.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,U,be,tt,Mt,ee,re,ve,nn,ht.data):I.texSubImage3D(Ce,U,be,tt,Mt,ee,re,ve,nn,lt,ht),I.pixelStorei(I.UNPACK_ROW_LENGTH,Le),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Oe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,gt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,It),U===0&&C.generateMipmaps&&I.generateMipmap(Ce),De.unbindTexture()},this.initRenderTarget=function(M){ke.get(M).__webglFramebuffer===void 0&&Ye.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ye.setTextureCube(M,0):M.isData3DTexture?Ye.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ye.setTexture2DArray(M,0):Ye.setTexture2D(M,0),De.unbindTexture()},this.resetState=function(){R=0,A=0,b=null,De.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _r}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kg?"display-p3":"srgb",n.unpackColorSpace=ut.workingColorSpace===qd?"display-p3":"srgb"}}class EE extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class wE{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=fm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return $o("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Rn=new O;class xr{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Rn.fromBufferAttribute(this,n),Rn.applyMatrix4(e),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rn.fromBufferAttribute(this,n),Rn.applyNormalMatrix(e),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rn.fromBufferAttribute(this,n),Rn.transformDirection(e),this.setXYZ(n,Rn.x,Rn.y,Rn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Ui(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ui(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ui(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ui(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ui(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=vt(n,this.array),i=vt(i,this.array),r=vt(r,this.array),s=vt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Bn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Y0=new O,K0=new dt,q0=new dt,$2=new O,Q0=new Qe,eu=new O,ph=new Ti,Z0=new Qe,mh=new Qd;class Y2 extends An{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Z_,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,eu),this.boundingBox.expandByPoint(eu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,eu),this.boundingSphere.expandByPoint(eu)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ph.copy(this.boundingSphere),ph.applyMatrix4(r),e.ray.intersectsSphere(ph)!==!1&&(Z0.copy(r).invert(),mh.copy(e.ray).applyMatrix4(Z0),!(this.boundingBox!==null&&mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,mh)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){e.fromBufferAttribute(n,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Z_?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===cC?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const i=this.skeleton,r=this.geometry;K0.fromBufferAttribute(r.attributes.skinIndex,e),q0.fromBufferAttribute(r.attributes.skinWeight,e),Y0.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let s=0;s<4;s++){const o=q0.getComponent(s);if(o!==0){const a=K0.getComponent(s);Q0.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),n.addScaledVector($2.copy(Y0).applyMatrix4(Q0),o)}}return n.applyMatrix4(this.bindMatrixInverse)}}class TE extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class AE extends ln{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Fn,u=Fn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const J0=new Qe,K2=new Qe;class Gg{constructor(e=[],n=[]){this.uuid=Hi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const i=new Qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:K2;J0.multiplyMatrices(a,n[s]),J0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Gg(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const i=new AE(n,e,e,li,Fi);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=n[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new TE),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,s=n.length;r<s;r++){const o=n[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class pm extends Bn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yo=new Qe,ey=new Qe,tu=[],ty=new wi,q2=new Qe,Ka=new An,qa=new Ti;class Q2 extends An{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new pm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,q2)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,yo),ty.copy(e.boundingBox).applyMatrix4(yo),this.boundingBox.union(ty)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,yo),qa.copy(e.boundingSphere).applyMatrix4(yo),this.boundingSphere.union(qa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Ka.geometry=this.geometry,Ka.material=this.material,Ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(i),e.ray.intersectsSphere(qa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,yo),ey.multiplyMatrices(i,yo),Ka.matrixWorld=ey,Ka.raycast(e,tu);for(let o=0,a=tu.length;o<a;o++){const l=tu[o];l.instanceId=s,l.object=this,n.push(l)}tu.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new pm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new AE(new Float32Array(r*this.count),r,this.count,Ng,Fi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class bE extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wd=new O,Td=new O,ny=new Qe,Qa=new Qd,nu=new Ti,gh=new O,iy=new O;class Wg extends Ot{constructor(e=new Jn,n=new bE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)wd.fromBufferAttribute(n,r-1),Td.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=wd.distanceTo(Td);e.setAttribute("lineDistance",new zn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nu.copy(i.boundingSphere),nu.applyMatrix4(r),nu.radius+=s,e.ray.intersectsSphere(nu)===!1)return;ny.copy(r).invert(),Qa.copy(e.ray).applyMatrix4(ny);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=u.getX(v),_=u.getX(v+1),y=iu(this,e,Qa,l,h,_);y&&n.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),h=iu(this,e,Qa,l,v,m);h&&n.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const h=iu(this,e,Qa,l,v,v+1);h&&n.push(h)}if(this.isLineLoop){const v=iu(this,e,Qa,l,g-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function iu(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(wd.fromBufferAttribute(o,r),Td.fromBufferAttribute(o,s),n.distanceSqToSegment(wd,Td,gh,iy)>i)return;gh.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(gh);if(!(l<e.near||l>e.far))return{distance:l,point:iy.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const ry=new O,sy=new O;class Z2 extends Wg{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)ry.fromBufferAttribute(n,r),sy.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+ry.distanceTo(sy);e.setAttribute("lineDistance",new zn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class J2 extends Wg{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class RE extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const oy=new Qe,mm=new Qd,ru=new Ti,su=new O;class eN extends Ot{constructor(e=new Jn,n=new RE){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ru.copy(i.boundingSphere),ru.applyMatrix4(r),ru.radius+=s,e.ray.intersectsSphere(ru)===!1)return;oy.copy(r).invert(),mm.copy(e.ray).applyMatrix4(oy);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);su.fromBufferAttribute(d,m),ay(su,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,v=p;g<v;g++)su.fromBufferAttribute(d,g),ay(su,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ay(t,e,n,i,r,s,o){const a=mm.distanceSqToPoint(t);if(a<n){const l=new O;mm.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const ou=new O,au=new O,vh=new O,lu=new Oi;class tN extends Jn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(Xo*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:h}=lu;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),lu.getNormal(vh),d[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const y=(_+1)%3,x=d[_],R=d[y],A=lu[u[_]],b=lu[u[y]],w=`${x}_${R}`,T=`${R}_${x}`;T in f&&f[T]?(vh.dot(f[T].normal)<=s&&(p.push(A.x,A.y,A.z),p.push(b.x,b.y,b.z)),f[T]=null):w in f||(f[w]={index0:c[_],index1:c[y],normal:vh.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:m}=f[g];ou.fromBufferAttribute(a,v),au.fromBufferAttribute(a,m),p.push(ou.x,ou.y,ou.z),p.push(au.x,au.y,au.z)}this.setAttribute("position",new zn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class nN extends Jn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const n=[],i=new Set,r=new O,s=new O;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],f=d.start,p=d.count;for(let g=f,v=f+p;g<v;g+=3)for(let m=0;m<3;m++){const h=a.getX(g+m),_=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,_),ly(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),ly(r,s,i)===!0&&(n.push(r.x,r.y,r.z),n.push(s.x,s.y,s.z))}}this.setAttribute("position",new zn(n,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function ly(t,e,n){const i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return n.has(i)===!0||n.has(r)===!0?!1:(n.add(i),n.add(r),!0)}class iN extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jg extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rE,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nr extends jg{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function cu(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function rN(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function sN(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i}function cy(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let l=0;l!==e;++l)r[o++]=t[a+l]}return r}function CE(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)}class ac{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){const a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class oN extends ac{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:J_,endingEnd:J_}}intervalChanged_(e,n,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case e0:s=e,a=2*n-i;break;case t0:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case e0:o=e,l=2*i-n;break;case t0:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}const c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-n)/(r-n),v=g*g,m=v*g,h=-f*m+2*f*v-f*g,_=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*v+.5*g,x=p*m-p*v;for(let R=0;R!==a;++R)s[R]=h*o[u+R]+_*o[c+R]+y*o[l+R]+x*o[d+R];return s}}class aN extends ac{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-n)/(r-n),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}}class lN extends ac{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ir{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cu(n,this.TimeBufferType),this.values=cu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:cu(e.times,Array),values:cu(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lN(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aN(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oN(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case jl:n=this.InterpolantFactoryMethodDiscrete;break;case Xl:n=this.InterpolantFactoryMethodLinear;break;case Vf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jl;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return Vf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&rN(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Vf,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){const v=n[d+g];if(v!==n[f+g]||v!==n[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}ir.prototype.TimeBufferType=Float32Array;ir.prototype.ValueBufferType=Float32Array;ir.prototype.DefaultInterpolation=Xl;class Ca extends ir{constructor(e,n,i){super(e,n,i)}}Ca.prototype.ValueTypeName="bool";Ca.prototype.ValueBufferType=Array;Ca.prototype.DefaultInterpolation=jl;Ca.prototype.InterpolantFactoryMethodLinear=void 0;Ca.prototype.InterpolantFactoryMethodSmooth=void 0;class PE extends ir{}PE.prototype.ValueTypeName="color";class va extends ir{}va.prototype.ValueTypeName="number";class cN extends ac{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n);let c=e*a;for(let u=c+a;c!==u;c+=4)fs.slerpFlat(s,0,o,c-a,o,c,l);return s}}class _a extends ir{InterpolantFactoryMethodLinear(e){return new cN(this.times,this.values,this.getValueSize(),e)}}_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;class Pa extends ir{constructor(e,n,i){super(e,n,i)}}Pa.prototype.ValueTypeName="string";Pa.prototype.ValueBufferType=Array;Pa.prototype.DefaultInterpolation=jl;Pa.prototype.InterpolantFactoryMethodLinear=void 0;Pa.prototype.InterpolantFactoryMethodSmooth=void 0;class ya extends ir{}ya.prototype.ValueTypeName="vector";class uN{constructor(e="",n=-1,i=[],r=uC){this.name=e,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=Hi(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)n.push(fN(i[o]).scale(r));const s=new this(e.name,e.duration,n,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const n=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)n.push(ir.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,n,i,r){const s=n.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=sN(l);l=cy(l,1,u),c=cy(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new va(".morphTargetInfluences["+n[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,n){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,n,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],n,i));return o}static parseAnimation(e,n){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,p,g,v){if(p.length!==0){const m=[],h=[];CE(p,m,h,g),m.length!==0&&v.push(new d(f,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)p[f[g].morphTargets[v]]=-1;for(const v in p){const m=[],h=[];for(let _=0;_!==f[g].morphTargets.length;++_){const y=f[g];m.push(y.time),h.push(y.morphTarget===v?1:0)}r.push(new va(".morphTargetInfluence["+v+"]",m,h))}l=p.length*o}else{const p=".bones["+n[d].name+"]";i(ya,p+".position",f,"pos",r),i(_a,p+".quaternion",f,"rot",r),i(ya,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let n=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dN(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return va;case"vector":case"vector2":case"vector3":case"vector4":return ya;case"color":return PE;case"quaternion":return _a;case"bool":case"boolean":return Ca;case"string":return Pa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function fN(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dN(t.type);if(t.times===void 0){const n=[],i=[];CE(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const qr={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class hN{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const pN=new hN;class La{constructor(e){this.manager=e!==void 0?e:pN,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}La.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr={};class mN extends Error{constructor(e,n){super(e),this.response=n}}class LE extends La{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=qr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(cr[e]!==void 0){cr[e].push({onLoad:n,onProgress:i,onError:r});return}cr[e]=[],cr[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=cr[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let v=0;const m=new ReadableStream({start(h){_();function _(){d.read().then(({done:y,value:x})=>{if(y)h.close();else{v+=x.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let A=0,b=u.length;A<b;A++){const w=u[A];w.onProgress&&w.onProgress(R)}h.enqueue(x),_()}},y=>{h.error(y)})}}});return new Response(m)}else throw new mN(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{qr.add(e,c);const u=cr[e];delete cr[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=cr[e];if(u===void 0)throw this.manager.itemError(e),c;delete cr[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class gN extends La{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=$l("img");function l(){u(),qr.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vN extends La{constructor(e){super(e)}load(e,n,i,r){const s=new ln,o=new gN(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Xg extends Ot{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const _h=new Qe,uy=new O,dy=new O;class $g{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hg,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;uy.setFromMatrixPosition(e.matrixWorld),n.position.copy(uy),dy.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(dy),n.updateMatrixWorld(),_h.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _N extends $g{constructor(){super(new Un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=ma*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yN extends Xg{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new _N}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const fy=new Qe,Za=new O,yh=new O;class xN extends $g{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Za.setFromMatrixPosition(e.matrixWorld),i.position.copy(Za),yh.copy(i.position),yh.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(yh),i.updateMatrixWorld(),r.makeTranslation(-Za.x,-Za.y,-Za.z),fy.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fy)}}class SN extends Xg{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new xN}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class MN extends $g{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class EN extends Xg{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new MN}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class El{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let n="";for(let i=0,r=e.length;i<r;i++)n+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class wN extends Jn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class TN extends La{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=qr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{n&&n(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return qr.add(e,c),n&&n(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),qr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});qr.add(e,l),s.manager.itemStart(e)}}class AN{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=hy();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function hy(){return(typeof performance>"u"?Date:performance).now()}const Yg="\\[\\]\\.:\\/",bN=new RegExp("["+Yg+"]","g"),Kg="[^"+Yg+"]",RN="[^"+Yg.replace("\\.","")+"]",CN=/((?:WC+[\/:])*)/.source.replace("WC",Kg),PN=/(WCOD+)?/.source.replace("WCOD",RN),LN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kg),IN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kg),DN=new RegExp("^"+CN+PN+LN+IN+"$"),NN=["material","materials","bones","map"];class UN{constructor(e,n,i){const r=i||_t.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class _t{constructor(e,n,i){this.path=n,this.parsedPath=i||_t.parseTrackName(n),this.node=_t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new _t.Composite(e,n,i):new _t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bN,"")}static parseTrackName(e){const n=DN.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);NN.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===n||a.uuid===n)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=_t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_t.Composite=UN;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class gm extends wE{constructor(e,n,i=1){super(e,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const n=super.clone(e);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(e){const n=super.toJSON(e);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}}const py=new O,uu=new O;class ON{constructor(e=new O,n=new O){this.start=e,this.end=n}set(e,n){return this.start.copy(e),this.end.copy(n),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,n){return this.delta(n).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,n){py.subVectors(e,this.start),uu.subVectors(this.end,this.start);const i=uu.dot(uu);let s=uu.dot(py)/i;return n&&(s=mn(s,0,1)),s}closestPointToPoint(e,n,i){const r=this.closestPointToPointParameter(e,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pg);const FN=`varying vec2 v_texcoord;

uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform float u_pixelRatio;

/* common constants */
#ifndef PI
#define PI 3.1415926535897932384626433832795
#endif
#ifndef TWO_PI
#define TWO_PI 6.2831853071795864769252867665590
#endif

/* variation constant */
#ifndef VAR
#define VAR 0
#endif

/* Coordinate and unit utils */
#ifndef FNC_COORD
#define FNC_COORD
vec2 coord(in vec2 p) {
    p = p / u_resolution.xy;
    // correct aspect ratio
    if (u_resolution.x > u_resolution.y) {
        p.x *= u_resolution.x / u_resolution.y;
        p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
    } else {
        p.y *= u_resolution.y / u_resolution.x;
        p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
    }
    // centering
    p -= 0.5;
    p *= vec2(-1.0, 1.0);
    return p;
}
#endif

#define st0 coord(gl_FragCoord.xy)
#define mx coord(u_mouse * u_pixelRatio)

/* signed distance functions */
float sdRoundRect(vec2 p, vec2 b, float r) {
    vec2 d = abs(p - 0.5) * 4.2 - b + vec2(r);
    return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
}

float sdCircle(in vec2 st, in vec2 center) {
    return length(st - center) * 2.0;
}

float sdPoly(in vec2 p, in float w, in int sides) {
    float a = atan(p.x, p.y) + PI;
    float r = TWO_PI / float(sides);
    float d = cos(floor(0.5 + a / r) * r - a) * length(max(abs(p) * 1.0, 0.0));
    return d * 2.0 - w;
}

/* antialiased step function */
float aastep(float threshold, float value) {
    float afwidth = length(vec2(dFdx(value), dFdy(value))) * 0.70710678118654757;
    return smoothstep(threshold - afwidth, threshold + afwidth, value);
}

/* Signed distance drawing methods */
float fill(in float x) {
    return 1.0 - aastep(0.0, x);
}

float fill(float x, float size, float edge) {
    return 1.0 - smoothstep(size - edge, size + edge, x);
}

float stroke(in float d, in float t) {
    return (1.0 - aastep(t, abs(d)));
}

float stroke(float x, float size, float w, float edge) {
    float d = smoothstep(size - edge, size + edge, x + w * 0.5) - smoothstep(size - edge, size + edge, x - w * 0.5);
    return clamp(d, 0.0, 1.0);
}

void main() {
    vec2 pixel = 1.0 / u_resolution.xy;
    vec2 st = st0 + 0.5;
    vec2 posMouse = mx * vec2(1., -1.) + 0.5;
    
    /* sdf (Round Rect) params */
    float size = 1.2;
    float roundness = 0.4;
    float borderSize = 0.05;
    
    /* sdf Circle params */
    float circleSize = 0.3;
    float circleEdge = 0.5;
    
    /* sdf Circle */
    float sdfCircle = fill(
        sdCircle(st, posMouse),
        circleSize,
        circleEdge
    );
    
    float sdf;
    if (VAR == 0) {
        /* sdf round rectangle with stroke param adjusted by sdf circle */
        sdf = sdRoundRect(st, vec2(size), roundness);
        sdf = stroke(sdf, 0.0, borderSize, sdfCircle) * 4.0;
    } else if (VAR == 1) {
        /* sdf circle with fill param adjusted by sdf circle */
        sdf = sdCircle(st, vec2(0.5));
        sdf = fill(sdf, 0.6, sdfCircle) * 1.2;
    } else if (VAR == 2) {
        /* sdf circle with stroke param adjusted by sdf circle */
        sdf = sdCircle(st, vec2(0.5));
        sdf = stroke(sdf, 0.58, 0.02, sdfCircle) * 4.0;
    } else if (VAR == 3) {
        /* sdf circle with fill param adjusted by sdf circle */
        sdf = sdPoly(st - vec2(0.5, 0.45), 0.3, 3);
        sdf = fill(sdf, 0.05, sdfCircle) * 1.4;
    }

    vec3 color = vec3(sdf);
    gl_FragColor = vec4(color.rgb, 1.0);
}`,kN=`varying vec2 v_texcoord;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
    v_texcoord = uv;
}`,BN=xt.div`
    > canvas {
        width:100%;
        height: 100%;
    } 
`,zN=({style:t})=>{const e=he.useRef(null);return he.useEffect(()=>{let n,i,r,s=1;const o=new EE,a=new ze,l=new ze,c=new ze,u=r/s,d=new oc(-u,u,1,-1,.1,1e3);d.position.z=1;const f=new ME({antialias:!0,alpha:!1});e.current&&e.current.children.length===0&&e.current.appendChild(f.domElement);const p=new sc(1,1),g=new gn({vertexShader:kN,fragmentShader:FN,uniforms:{u_mouse:{value:l},u_resolution:{value:c},u_pixelRatio:{value:2}},defines:{VAR:2}}),v=new An(p,g);o.add(v);let m,h=0;const _=()=>{m=performance.now()*.001;const R=m-h;h=m;for(const A in a)(A=="x"||A=="y")&&(l[A]=zg.damp(l[A],a[A],8,R));requestAnimationFrame(_),f.render(o,d)};_();const y=()=>{r=e.current.getBoundingClientRect().width,s=e.current.getBoundingClientRect().height;const R=Math.min(window.devicePixelRatio,2);f.setSize(r,s),f.setPixelRatio(R),d.left=-r/2,d.right=r/2,d.top=s/2,d.bottom=-s/2,d.updateProjectionMatrix(),v.scale.set(r,s,1),c.set(r,s).multiplyScalar(R),g.uniforms.u_pixelRatio.value=R};y();const x=R=>{n=e.current.getBoundingClientRect().x,i=e.current.getBoundingClientRect().y,a.set(R.pageX-n,R.pageY-i)};window.addEventListener("resize",y),document.addEventListener("mousemove",x),document.addEventListener("pointermove",x),document.body.addEventListener("touchmove",function(R){R.preventDefault()},{passive:!1})},[]),Y.jsx(BN,{ref:e,style:t})};function HN(){if(window.WebGLRenderingContext){var t=document.createElement("canvas"),e=["webgl","experimental-webgl","moz-webgl","webkit-3d"],n=!1;for(var i in e)try{if(n=t.getContext(e[i]),n&&typeof n.getParameter=="function")return 1}catch{}return 0}return-1}const VN=xt.div`
    position: relative;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    color: white;
`,GN={position:"absolute",zIndex:0,top:0,bottom:0,left:0,right:0},WN=xt.div`
    container-type: size;
    z-index: 1000;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    
    > h1 {
        font-size: min(8cqw, 8cqh);
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        text-transform: uppercase;
        line-height: min(8.25cqw, 8.25cqh);
    } 
    
    > h2 {
        font-size: min(2.5cqw, 2.5cqh);    
    }
`,jN=xt.div`
    display: flex;
    justify-content: space-between;
    width: min(46.75cqw, 46.75cqh);
    font-size: min(2.7cqw, 2.7cqh);
    
    > a:hover {
        color: white;
    }

    @media only screen and (max-width : 500px) {
        > {
            font-size: min(3.2cqw, 3.2cqh);
        }
    }
`,XN=({title:t="stringCode",style:e})=>{const n=HN();return Y.jsxs(VN,{style:e,children:[n===1?Y.jsx(zN,{style:GN}):null,Y.jsxs(WN,{children:[Y.jsx("h1",{className:"Logo-title",children:t}),Y.jsxs(jN,{children:[Y.jsx("a",{href:"https://x.com/0xstringcode",target:"_blank",children:"@0xstringcode"}),Y.jsx("div",{children:"|"}),Y.jsx("a",{href:"mailto:michael@stringcode.co.uk",children:"email"}),Y.jsx("div",{children:"|"}),Y.jsx("a",{href:"https://stringcode.co.uk/showcase",target:"_blank",children:"showcase"})]}),n!==1?Y.jsx("h2",{children:"This site looks cooler when WebGL is enabled"}):null]})]})},$N=xt.div`
    color: white;
    background: black;
    width: 100svw;
    height: 100svh;
    position: relative;
    @media only screen and (max-width : 500px) {
        > div:first-child{
            position: absolute !important;
            width: auto !important;
            height: auto !important;
            top: -22svw !important;
            bottom: -22svw !important;
            left: -22svw !important;
            right: -22svw !important;
        }
    }
`,YN={width:"100svw",height:"100svh"},my=()=>Y.jsx($N,{children:Y.jsx(XN,{style:YN})}),du={green:"#24F29C",green10:"#24F29C10",gray10:"#212429",gray1:"#121417"},KN={primary:du.green,primaryLowAlpha:du.green10,background:du.gray10,backgroundMesh:du.gray1},Kt={colors:KN},qg=xt.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    width: 200vw;
    height: 200vh;
    background: radial-gradient(50% 50% at 50% 50%, ${Kt.colors.primaryLowAlpha} 0%, rgba(255, 255, 255, 0) 100%);
    transform: translate(-50vw, -100vh);
    z-index: -0;
`,IE=xt.button`
    color: ${Kt.colors.primary};
    border: 2px solid ${Kt.colors.primary};
    font-weight: 600;
    font-size: 1.5em;
    padding: 1em 1em;
    box-shadow: 0.7em 0.7em ${Kt.colors.primary};
    margin: 0px 0.7em 0.7em 0px;
    width: 100%;
    transition: 0.1s;
    text-transform: uppercase;
    background-color: transparent;
`,qN=xt.div`
    &:hover {
        ${IE} {
            box-shadow: 0.2em 0.2em ${Kt.colors.primary};
            margin: 0.5em 0.2em 0.2em 0.5em;
        }
    }
`,fu=({type:t,variant:e,className:n,id:i,onClick:r,children:s})=>Y.jsx(qN,{children:Y.jsx(IE,{type:t||"button",variant:e,className:n?`btn-component ${n}`:"btn-component",id:i,onClick:r,children:s})});function gy(t,e){if(e===dC)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===dm||e===iE){let n=t.getIndex();if(n===null){const o=[],a=t.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);t.setIndex(o),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}const i=n.count-2,r=[];if(e===dm)for(let o=1;o<=i;o++)r.push(n.getX(0)),r.push(n.getX(o)),r.push(n.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(n.getX(o)),r.push(n.getX(o+1)),r.push(n.getX(o+2))):(r.push(n.getX(o+2)),r.push(n.getX(o+1)),r.push(n.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=t.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}class QN extends La{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new nU(n)}),this.register(function(n){return new iU(n)}),this.register(function(n){return new fU(n)}),this.register(function(n){return new hU(n)}),this.register(function(n){return new pU(n)}),this.register(function(n){return new sU(n)}),this.register(function(n){return new oU(n)}),this.register(function(n){return new aU(n)}),this.register(function(n){return new lU(n)}),this.register(function(n){return new tU(n)}),this.register(function(n){return new cU(n)}),this.register(function(n){return new rU(n)}),this.register(function(n){return new dU(n)}),this.register(function(n){return new uU(n)}),this.register(function(n){return new JN(n)}),this.register(function(n){return new mU(n)}),this.register(function(n){return new gU(n)})}load(e,n,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=El.extractUrlBase(e);o=El.resolveURL(c,this.path)}else o=El.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new LE(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){n(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===DE){try{o[st.KHR_BINARY_GLTF]=new vU(e)}catch(d){r&&r(d);return}s=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new PU(s,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case st.KHR_MATERIALS_UNLIT:o[d]=new eU;break;case st.KHR_DRACO_MESH_COMPRESSION:o[d]=new _U(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[d]=new yU;break;case st.KHR_MESH_QUANTIZATION:o[d]=new xU;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,n){const i=this;return new Promise(function(r,s){i.parse(e,n,r,s)})}}function ZN(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class JN{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){const s=n[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const n=this.parser,i="light:"+e;let r=n.cache.get(i);if(r)return r;const s=n.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new We(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],yn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new EN(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new SN(u),c.distance=d;break;case"spot":c=new yN(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,hr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=n.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),n.cache.add(i,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(n.cache,a,l)})}}class eU{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return yr}extendParams(e,n,i){const r=[];e.color=new We(1,1,1),e.opacity=1;const s=n.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],yn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Nn))}return Promise.all(r)}}class tU{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(n.emissiveIntensity=s),Promise.resolve()}}class nU{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(n.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(n,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new ze(a,a)}return Promise.all(s)}}class iU{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class rU{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(n.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(n.iridescenceIOR=o.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class sU{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];n.sheenColor=new We(0,0,0),n.sheenRoughness=0,n.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;n.sheenColor.setRGB(a[0],a[1],a[2],yn)}return o.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(n,"sheenColorMap",o.sheenColorTexture,Nn)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class oU{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(n.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(n,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class aU{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];n.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(n,"thicknessMap",o.thicknessTexture)),n.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return n.attenuationColor=new We().setRGB(a[0],a[1],a[2],yn),Promise.all(s)}}class lU{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class cU{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];n.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(n,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return n.specularColor=new We().setRGB(a[0],a[1],a[2],yn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(n,"specularColorMap",o.specularColorTexture,Nn)),Promise.all(s)}}class uU{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return n.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(n,"bumpMap",o.bumpTexture)),Promise.all(s)}}class dU{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:nr}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(n.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(n.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(n,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class fU{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=n.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,s.source,o)}}class hU{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class pU{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class mU{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,f,r.mode,r.filter),p})})}else return null}}class gU{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=n.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==gi.TRIANGLES&&c.mode!==gi.TRIANGLE_STRIP&&c.mode!==gi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of d){const v=new Qe,m=new O,h=new fs,_=new O(1,1,1),y=new Q2(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&_.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,v.compose(m,h,_));for(const x in l)if(x==="_COLOR_0"){const R=l[x];y.instanceColor=new pm(R.array,R.itemSize,R.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Ot.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const DE="glTF",Ja=12,vy={JSON:1313821514,BIN:5130562};class vU{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,Ja),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==DE)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ja,s=new DataView(e,Ja);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===vy.JSON){const c=new Uint8Array(e,Ja+o,a);this.content=i.decode(c)}else if(l===vy.BIN){const c=Ja+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class _U{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=vm[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=vm[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=Ko[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return n.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}d(p)},a,c,yn,f)})})}}class yU{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class xU{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class NE extends ac{constructor(e,n,i,r){super(e,n,i,r)}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)n[o]=i[s+o];return n}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-n,d=(i-n)/u,f=d*d,p=f*d,g=e*c,v=g-c,m=-2*p+3*f,h=p-f,_=1-m,y=h-f+d;for(let x=0;x!==a;x++){const R=o[v+x+a],A=o[v+x+l]*u,b=o[g+x+a],w=o[g+x]*u;s[x]=_*R+y*A+m*b+h*w}return s}}const SU=new fs;class MU extends NE{interpolate_(e,n,i,r){const s=super.interpolate_(e,n,i,r);return SU.fromArray(s).normalize().toArray(s),s}}const gi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ko={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_y={9728:Fn,9729:On,9984:$M,9985:Nu,9986:cl,9987:vr},yy={33071:Kr,33648:yd,10497:fa},xh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vm={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},EU={CUBICSPLINE:void 0,LINEAR:Xl,STEP:jl},Sh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wU(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new jg({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:br})),t.DefaultMaterial}function xs(t,e,n){for(const i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function hr(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function TU(t,e,n){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const f=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):t.attributes.position;o.push(f)}if(r){const f=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):t.attributes.normal;a.push(f)}if(s){const f=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):t.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return i&&(t.morphAttributes.position=u),r&&(t.morphAttributes.normal=d),s&&(t.morphAttributes.color=f),t.morphTargetsRelative=!0,t})}function AU(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function bU(t){let e;const n=t.extensions&&t.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Mh(n.attributes):e=t.indices+":"+Mh(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,r=t.targets.length;i<r;i++)e+=":"+Mh(t.targets[i]);return e}function Mh(t){let e="";const n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function _m(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function RU(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const CU=new Qe;class PU{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new ZN,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new vN(this.options.manager):this.textureLoader=new TN(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new LE(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return xs(s,a,r),hr(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=n.length;r<s;r++){const o=n[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const r=e(n[i]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let r=0;r<n.length;r++){const s=e(n[r]);s&&i.push(s)}return i}getDependency(e,n){const i=e+":"+n;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(n)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(El.resolveURL(n.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){const r=n.byteLength||0,s=n.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const n=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=xh[r.type],a=Ko[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Bn(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=xh[r.type],c=Ko[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(p&&p!==d){const h=Math.floor(f/p),_="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let y=n.cache.get(_);y||(v=new c(a,h*p,r.count*p/u),y=new wE(v,p/u),n.cache.add(_,y)),m=new xr(y,l,f%p/u,g)}else a===null?v=new c(r.count*l):v=new c(a,f,r.count*l),m=new Bn(v,l,g);if(r.sparse!==void 0){const h=xh.SCALAR,_=Ko[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,R=new _(o[1],y,r.sparse.count*h),A=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new Bn(m.array.slice(),m.itemSize,m.normalized));for(let b=0,w=R.length;b<w;b++){const T=R[b];if(m.setX(T,A[b*l]),l>=2&&m.setY(T,A[b*l+1]),l>=3&&m.setZ(T,A[b*l+2]),l>=4&&m.setW(T,A[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const n=this.json,i=this.options,s=n.textures[e].source,o=n.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,n,i){const r=this,s=this.json,o=s.textures[e],a=s.images[n],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(n,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=_y[f.magFilter]||On,u.minFilter=_y[f.minFilter]||vr,u.wrapS=yy[f.wrapS]||fa,u.wrapT=yy[f.wrapT]||fa,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,n){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let g=f;n.isImageBitmapLoader===!0&&(g=function(v){const m=new ln(v);m.needsUpdate=!0,f(m)}),n.load(El.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),hr(d,o),d.userData.mimeType=o.mimeType||RU(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,n,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[n]=o,o})}assignFinalMaterial(e){const n=e.geometry;let i=e.material;const r=n.attributes.tangent===void 0,s=n.attributes.color!==void 0,o=n.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new RE,er.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new bE,er.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return jg}loadMaterial(e){const n=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const d=r[st.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,n))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new We(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],yn),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(n.assignTexture(a,"map",d.baseColorTexture,Nn)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(n.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(n.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=qi);const u=s.alphaMode||Sh.OPAQUE;if(u===Sh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Sh.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==yr&&(c.push(n.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new ze(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==yr&&(c.push(n.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==yr){const d=s.emissiveFactor;a.emissive=new We().setRGB(d[0],d[1],d[2],yn)}return s.emissiveTexture!==void 0&&o!==yr&&c.push(n.assignTexture(a,"emissiveMap",s.emissiveTexture,Nn)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),hr(d,s),n.associations.set(d,{materials:e}),s.extensions&&xs(r,d,s),d})}createUniqueName(e){const n=_t.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,n).then(function(l){return xy(l,a,n)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=bU(c),d=r[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=xy(new Jn,c,n),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const n=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?wU(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(n.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,g=u.length;p<g;p++){const v=u[p],m=o[p];let h;const _=c[p];if(m.mode===gi.TRIANGLES||m.mode===gi.TRIANGLE_STRIP||m.mode===gi.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new Y2(v,_):new An(v,_),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===gi.TRIANGLE_STRIP?h.geometry=gy(h.geometry,iE):m.mode===gi.TRIANGLE_FAN&&(h.geometry=gy(h.geometry,dm));else if(m.mode===gi.LINES)h=new Z2(v,_);else if(m.mode===gi.LINE_STRIP)h=new Wg(v,_);else if(m.mode===gi.LINE_LOOP)h=new J2(v,_);else if(m.mode===gi.POINTS)h=new eN(v,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&AU(h,s),h.name=n.createUniqueName(s.name||"mesh_"+e),hr(h,s),m.extensions&&xs(r,h,m),n.assignFinalMaterial(h),d.push(h)}for(let p=0,g=d.length;p<g;p++)n.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&xs(r,d[0],s),d[0];const f=new Ns;s.extensions&&xs(r,f,s),n.associations.set(f,{meshes:e});for(let p=0,g=d.length;p<g;p++)f.add(d[p]);return f})}loadCamera(e){let n;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new Un(zg.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new oc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),hr(n,i),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],i=[];for(let r=0,s=n.joints.length;r<s;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const f=new Qe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[c])}return new Gg(a,l)})}loadAnimation(e){const n=this.json,i=this,r=n.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const p=r.channels[d],g=r.samplers[p.sampler],v=p.target,m=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,_=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",_)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],p=d[1],g=d[2],v=d[3],m=d[4],h=[];for(let _=0,y=f.length;_<y;_++){const x=f[_],R=p[_],A=g[_],b=v[_],w=m[_];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const T=i._createAnimationTracks(x,R,A,b,w);if(T)for(let S=0;S<T.length;S++)h.push(T[S])}return new uN(s,void 0,h)})}createNodeMesh(e){const n=this.json,i=this,r=n.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const n=this.json,i=this,r=n.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,CU)});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const n=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=n.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new TE:c.length>1?u=new Ns:c.length===1?u=c[0]:u=new Ot,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),hr(u,s),s.extensions&&xs(i,u,s),s.matrix!==void 0){const d=new Qe;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const n=this.extensions,i=this.json.scenes[e],r=this,s=new Ns;i.name&&(s.name=r.createUniqueName(i.name)),hr(s,i),i.extensions&&xs(n,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[f,p]of r.associations)(f instanceof er||f instanceof ln)&&d.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&d.set(f,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,n,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];kr[s.path]===kr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(kr[s.path]){case kr.weights:c=va;break;case kr.rotation:c=_a;break;case kr.position:case kr.scale:c=ya;break;default:switch(i.itemSize){case 1:c=va;break;case 2:case 3:default:c=ya;break}break}const u=r.interpolation!==void 0?EU[r.interpolation]:Xl,d=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const g=new c(l[f]+"."+kr[s.path],n.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const i=_m(n.constructor),r=new Float32Array(n.length);for(let s=0,o=n.length;s<o;s++)r[s]=n[s]*i;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof _a?MU:NE;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function LU(t,e,n){const i=e.attributes,r=new wi;if(i.POSITION!==void 0){const a=n.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const u=_m(Ko[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new O,l=new O;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const f=n.json.accessors[d.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const v=_m(Ko[f.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}t.boundingBox=r;const o=new Ti;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=o}function xy(t,e,n){const i=e.attributes,r=[];function s(o,a){return n.getDependency("accessor",o).then(function(l){t.setAttribute(a,l)})}for(const o in i){const a=vm[o]||o.toLowerCase();a in t.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!t.index){const o=n.getDependency("accessor",e.indices).then(function(a){t.setIndex(a)});r.push(o)}return ut.workingColorSpace!==yn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),hr(t,e),LU(t,e,n),Promise.all(r).then(function(){return e.targets!==void 0?TU(t,e.targets,n):t})}_e.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ze(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Xn.line={uniforms:$s.merge([_e.common,_e.fog,_e.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class UE extends gn{constructor(e){super({type:"LineMaterial",uniforms:$s.clone(Xn.line.uniforms),vertexShader:Xn.line.vertexShader,fragmentShader:Xn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Sy=new wi,hu=new O;class OE extends wN{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new zn(e,3)),this.setAttribute("uv",new zn(n,2))}applyMatrix4(e){const n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(e),i.applyMatrix4(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new gm(n,6,1);return this.setAttribute("instanceStart",new xr(i,3,0)),this.setAttribute("instanceEnd",new xr(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));const i=new gm(n,6,1);return this.setAttribute("instanceColorStart",new xr(i,3,0)),this.setAttribute("instanceColorEnd",new xr(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new nN(e.geometry)),this}fromLineSegments(e){const n=e.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;e!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(e),Sy.setFromBufferAttribute(n),this.boundingBox.union(Sy))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(e!==void 0&&n!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)hu.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(hu)),hu.fromBufferAttribute(n,s),r=Math.max(r,i.distanceToSquared(hu));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const Eh=new dt,My=new O,Ey=new O,cn=new dt,un=new dt,ji=new dt,wh=new O,Th=new Qe,pn=new ON,wy=new O,pu=new wi,mu=new Ti,Xi=new dt;let Qi,zs;function Ty(t,e,n){return Xi.set(0,0,-e,1).applyMatrix4(t.projectionMatrix),Xi.multiplyScalar(1/Xi.w),Xi.x=zs/n.width,Xi.y=zs/n.height,Xi.applyMatrix4(t.projectionMatrixInverse),Xi.multiplyScalar(1/Xi.w),Math.abs(Math.max(Xi.x,Xi.y))}function IU(t,e){const n=t.matrixWorld,i=t.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){pn.start.fromBufferAttribute(r,a),pn.end.fromBufferAttribute(s,a),pn.applyMatrix4(n);const c=new O,u=new O;Qi.distanceSqToSegment(pn.start,pn.end,u,c),u.distanceTo(c)<zs*.5&&e.push({point:u,pointOnLine:c,distance:Qi.origin.distanceTo(u),object:t,face:null,faceIndex:a,uv:null,uv1:null})}}function DU(t,e,n){const i=e.projectionMatrix,s=t.material.resolution,o=t.matrixWorld,a=t.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),d=-e.near;Qi.at(1,ji),ji.w=1,ji.applyMatrix4(e.matrixWorldInverse),ji.applyMatrix4(i),ji.multiplyScalar(1/ji.w),ji.x*=s.x/2,ji.y*=s.y/2,ji.z=0,wh.copy(ji),Th.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,p=u;f<p;f++){if(cn.fromBufferAttribute(l,f),un.fromBufferAttribute(c,f),cn.w=1,un.w=1,cn.applyMatrix4(Th),un.applyMatrix4(Th),cn.z>d&&un.z>d)continue;if(cn.z>d){const y=cn.z-un.z,x=(cn.z-d)/y;cn.lerp(un,x)}else if(un.z>d){const y=un.z-cn.z,x=(un.z-d)/y;un.lerp(cn,x)}cn.applyMatrix4(i),un.applyMatrix4(i),cn.multiplyScalar(1/cn.w),un.multiplyScalar(1/un.w),cn.x*=s.x/2,cn.y*=s.y/2,un.x*=s.x/2,un.y*=s.y/2,pn.start.copy(cn),pn.start.z=0,pn.end.copy(un),pn.end.z=0;const v=pn.closestPointToPointParameter(wh,!0);pn.at(v,wy);const m=zg.lerp(cn.z,un.z,v),h=m>=-1&&m<=1,_=wh.distanceTo(wy)<zs*.5;if(h&&_){pn.start.fromBufferAttribute(l,f),pn.end.fromBufferAttribute(c,f),pn.start.applyMatrix4(o),pn.end.applyMatrix4(o);const y=new O,x=new O;Qi.distanceSqToSegment(pn.start,pn.end,x,y),n.push({point:x,pointOnLine:y,distance:Qi.origin.distanceTo(x),object:t,face:null,faceIndex:f,uv:null,uv1:null})}}}class NU extends An{constructor(e=new OE,n=new UE({color:Math.random()*16777215})){super(e,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,n=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*n.count);for(let o=0,a=0,l=n.count;o<l;o++,a+=2)My.fromBufferAttribute(n,o),Ey.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+My.distanceTo(Ey);const s=new gm(r,2,1);return e.setAttribute("instanceDistanceStart",new xr(s,1,0)),e.setAttribute("instanceDistanceEnd",new xr(s,1,1)),this}raycast(e,n){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Qi=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;zs=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),mu.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=zs*.5;else{const d=Math.max(r.near,mu.distanceToPoint(Qi.origin));c=Ty(r,d,l.resolution)}if(mu.radius+=c,Qi.intersectsSphere(mu)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),pu.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=zs*.5;else{const d=Math.max(r.near,pu.distanceToPoint(Qi.origin));u=Ty(r,d,l.resolution)}pu.expandByScalar(u),Qi.intersectsBox(pu)!==!1&&(i?IU(this,n):DU(this,r,n))}onBeforeRender(e){const n=this.material.uniforms;n&&n.resolution&&(e.getViewport(Eh),this.material.uniforms.resolution.value.set(Eh.z,Eh.w))}}const ym={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ia{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const UU=new oc(-1,1,1,-1,0,1);class OU extends Jn{constructor(){super(),this.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zn([0,2,0,0,2,0],2))}}const FU=new OU;class Qg{constructor(e){this._mesh=new An(FU,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,UU)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class kU extends Ia{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$s.clone(e.uniforms),this.material=new gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qg(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ay extends Ia{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class BU extends Ia{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zU{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new ze);this._width=i.width,this._height=i.height,n=new Vi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Aa}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new kU(ym),this.copyPass.material.blending=Mr,this.clock=new AN}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ay!==void 0&&(o instanceof Ay?i=!0:o instanceof BU&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class HU extends Ia{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new We}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const by={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new We(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class xa extends Ia{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new ze(e.x,e.y):new ze(256,256),this.clearColor=new We(0,0,0);const s={minFilter:On,magFilter:On,format:li};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Vi(o,a,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const p=new Vi(o,a,s);p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const g=new Vi(o,a,s);g.texture.name="UnrealBloomPass.v"+f,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),o=Math.round(o/2),a=Math.round(a/2)}by===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=by;this.highPassUniforms=$s.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gn({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.texSize.value=new ze(o,a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,ym===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const d=ym;this.copyUniforms=$s.clone(d.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new gn({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Np,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new We,this.oldClearAlpha=1,this.basic=new yr,this.fsQuad=new Qg(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.texSize.value=new ze(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=xa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=xa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new gn({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new ze(.5,.5)},direction:{value:new ze(.5,.5)}},vertexShader:`varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,fragmentShader:`#include <common>
        varying vec2 vUv;
        uniform sampler2D colorTexture;
        uniform vec2 texSize;
        uniform vec2 direction;
        float gaussianPdf(in float x, in float sigma) {
          return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
        }
        void main() {
          vec2 invSize = 1.0 / texSize;          float fSigma = float(SIGMA);          float weightSum = gaussianPdf(0.0, fSigma);          float alphaSum = 0.0;          vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;          for( int i = 1; i < KERNEL_RADIUS; i ++ ) {            float x = float(i);            float w = gaussianPdf(x, fSigma);            vec2 uvOffset = direction * invSize * x;            vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);            vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);            diffuseSum += (sample1.rgb + sample2.rgb) * w;            alphaSum += (sample1.a + sample2.a) * w;            weightSum += 2.0 * w;          }          gl_FragColor = vec4(diffuseSum/weightSum, alphaSum/weightSum);
        }`})}getCompositeMaterial(e){return new gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,fragmentShader:`varying vec2 vUv;
        uniform sampler2D blurTexture1;
        uniform sampler2D blurTexture2;
        uniform sampler2D blurTexture3;
        uniform sampler2D blurTexture4;
        uniform sampler2D blurTexture5;
        uniform sampler2D dirtTexture;
        uniform float bloomStrength;
        uniform float bloomRadius;
        uniform float bloomFactors[NUM_MIPS];
        uniform vec3 bloomTintColors[NUM_MIPS];
        float lerpBloomFactor(const in float factor) {
          float mirrorFactor = 1.2 - factor;
          return mix(factor, mirrorFactor, bloomRadius);
        }
        void main() {
          gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
            lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
            lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
            lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
            lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
        }`})}}xa.BlurDirectionX=new ze(1,0);xa.BlurDirectionY=new ze(0,1);const VU={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class GU extends Ia{constructor(){super();const e=VU;this.uniforms=$s.clone(e.uniforms),this.material=new iN({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Qg(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zM?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===HM?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===VM?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===GM?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===WM?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jM&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Zg=t=>{const e=he.useRef(null);return he.useEffect(()=>{let n,i=100,r,s=0;const o=new EE,a=new Un(75,n/i,.1,1e3),l=new ME({antialias:!0,alpha:!0,powerPreference:"high-performance"});e.current&&e.current.children.length===0&&(e.current.appendChild(l.domElement),n=e.current.getBoundingClientRect().width,i=e.current.getBoundingClientRect().height,l.setClearColor(Kt.colors.background,0),l.setSize(n,i),l.setAnimationLoop(y)),a.position.set(t.position.x,t.position.y,t.position.z),a.rotation.set(t.rotation.x,t.rotation.y,t.rotation.z);const c=new UE({color:Kt.colors.primary,linewidth:5}),u=new yr({color:Kt.colors.backgroundMesh,transparent:!0,opacity:1}),d=new QN,f=[];d.load(t.url,function(R){R.scene.traverse(function(A){A.isMesh&&f.push(A)});for(let A of f){let b=new tN(A.geometry,t.edgesThreshold),w=new OE().fromEdgesGeometry(b),T=new NU(w,c);A.add(T),A.material=u}o.add(R.scene)});const p=new HU(o,a);l.setClearColor(Kt.colors.background,0);const g=new xa(new ze(n,i),.75,0,0),v=new GU,m=new zU(l);m.addPass(p),m.addPass(g),m.addPass(v);function h(){n=e.current.getBoundingClientRect().width,i=e.current.getBoundingClientRect().height,l.setSize(n,i),l.domElement.width=n,l.domElement.height=i,a.aspect=n/i,a.updateProjectionMatrix(),x()}function _(R){r=R.pageX,s=R.pageY}function y(){t.scrollRotate?o.rotation.y=window.scrollY/window.innerHeight+t.animRotateY:t.animRotateY!==0?o.rotation.y+=-t.animRotateY:r===void 0?o.rotation.y=window.scrollY/window.innerHeight-.5:(o.rotation.x=(s-window.scrollY)/window.innerHeight-.5,o.rotation.y=r/window.innerWidth-.5),x()}function x(){m.render()}window.addEventListener("mousemove",_,!1),window.addEventListener("resize",h,!1),h(),y()},[]),Y.jsx("div",{className:"Scene3D",ref:e,style:t.style})};Zg.defaultProps={url:"../assets/models/floppy_disk.glb",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},animRotateY:0,edgesThreshold:45,scrollRotate:!1};const WU="/assets/old_pc_low_poly_game_model-CLiK6O8p.glb",jU=xt.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
    overflow: visible;
`,XU=xt.div`
    margin: 0 auto;
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    max-width: 1400px;
    flex: 2;
    flex-shrink: 0;
    width: calc(100cqw - 6em);
    overflow: visible;
    
    @media only screen and (max-width : 900px) {
        flex-direction: column;
        margin-left: 1em;
        margin-right: 1em;
        width: auto;
    }
`,$U=xt.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    flex-grow: 1;
    gap: 2em;
    max-width: 40%;
    
    @media only screen and (max-width : 500px) {
        gap: 0.9em !important;
        > div:hover {
            > button {
                box-shadow: 0.1em 0.1em ${Kt.colors.primary} !important;
                margin: 0.4em 0.1em 0.1em 0.4em !important;
            }
        }
        > div button {
            font-size: 1em !important;
            padding: 0.5em 0.5em !important;
            box-shadow: 0.5em 0.5em ${Kt.colors.primary} !important;
            margin: 0px 0.5em 0.5em 0px !important;
        }
    }

    @media only screen and (max-width : 900px) {
        gap: 1.5em;
        margin-right: 0.5em;
        max-width: 100%;
        > div:hover {
            > button {
                box-shadow: 0.15em 0.15em ${Kt.colors.primary} !important;
                margin: 0.45em 0.15em 0.15em 0.45em !important;
            }
        }
        > div button {
            font-size: 1em;
            padding: 0.75em 0.75em;
            box-shadow: 0.6em 0.6em ${Kt.colors.primary};
            margin: 0px 0.6em 0.6em 0px !important;
        }
    }

    @media only screen and (max-width : 380px) {
        gap: 0.8em !important;
        > * {
        }
    }
`,YU=xt.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-grow: 1;
    aspect-ratio: 1 !important;
    overflow: visible;
    //background-color: #FF000055;
    > * {
        position: absolute;
        margin-left: 0em;
        min-width: 125%;
        aspect-ratio: 1 !important;
        overflow: visible;
        margin-top: 2em;
        //background-color: #00FF0055;
    }

    @media only screen and (max-width : 900px) {
        max-height: 50vh !important;
        > * {
            min-width: auto;
            width: 100%;
            margin-top: 4em;
            margin-bottom: 0em;
        }
    }

    @media only screen and (max-width : 500px) {
        height: auto !important;
        //max-height: 28vh !important;
        > * {
            margin-top: 2em;
            width: auto;
            height: 100%;
        }
    }
    
    //@media only screen and (max-width : 380px) {
    //    max-height: 28vh !important;
    //}
`,KU=xt.div`
    background-color: ${Kt.colors.primary};
    color: ${Kt.colors.background};
    flex-shrink: 2 !important;
    display: flex;
    justify-content: center;
    
    > h1 {
        margin: 0 auto !important;
        text-transform: uppercase !important;
        font-weight: 900 !important;
        font-size: 20cqw !important;
        line-height: 18cqw !important;
        letter-spacing: 2.3cqw !important;
    }
    
    > h1 >:first-child {
        display: inline-block !important;
        margin-left: 2.5cqw !important;
    }

    @media only screen and (max-width:720px) {
        > h1 {
            font-size: 19.2cqw !important;
        }
    }
    
    @media only screen and (min-width : 1281px) {
        > h1 {
            font-size: 256px !important;
            line-height: 230.4px !important;
            letter-spacing: 2.7cqw !important;
        }
    }

`,qU=({codeReviewHandler:t,uiuxHandler:e,cryptoCredHandler:n,moreHandler:i})=>Y.jsxs(jU,{children:[Y.jsxs(XU,{children:[Y.jsxs($U,{children:[Y.jsx(fu,{onClick:t,children:"Review Code"}),Y.jsx(fu,{onClick:e,children:"UI/UX showcase"}),Y.jsx(fu,{onClick:n,children:"Crypto cred"}),Y.jsx(fu,{onClick:i,children:"More"})]}),Y.jsx(YU,{children:Y.jsx(Zg,{url:WU,position:{x:68.4485,y:50.0593,z:89.9025},rotation:{x:-.508,y:.5869,z:.2991},animRotateY:0,edgesThreshold:25,scrollRotate:!0})})]}),Y.jsx(KU,{children:Y.jsxs("h1",{children:[Y.jsx("div",{className:"blink",children:">"}),"showcase"]})})]}),Ah=xt.div`
    color: ${Kt.colors.primary};
    font-size: 2.75em;
    font-weight: lighter;
    line-height: 1em;
    letter-spacing: 0.25em;
    padding-left: 0.45em;
`,Ry=xt.div`
    color: ${Kt.colors.primary};
    font-size: 14.5em;
    line-height: 0.5em;
    letter-spacing: -0.34em;
    writing-mode: vertical-rl;
    text-orientation: upright;
    overflow: visible;
    margin-top: -0.15em;
    margin-bottom: 0.25em;
    ${t=>t.blink?OM`
        animation: blinker 2.75s linear infinite;             
    `:""}
`,QU=()=>Y.jsxs("div",{className:"OneAppSixWays",children:[Y.jsx(Ah,{children:"ONE"}),Y.jsx(Ry,{children:"APP"}),Y.jsx(Ah,{children:"SIX"}),Y.jsx(Ah,{children:"WAYS"}),Y.jsx(Ry,{blink:"true",children:">"})]}),Jd=xt.section`
    margin: 0 auto;
    color: white;
    max-width: 1400px;
    overflow: visible;
    margin-top: 3em;
    margin-bottom: 3em;
    padding: 1.5em 1.5em;
    
    @media only screen and (max-width : 500px) {
        padding: 1em 1em;
        margin-bottom: 1em;
    }
`,ZU={display:"flex",gap:"1em"},JU=xt.div`
    @media only screen and (max-width : 767px) {
        display: none;
    }
`,e3=xt.div`
    display: flex;
    gap: 2em;
    flex-direction: column;
`,Ss=xt.div`
    > h2 {
        color: ${Kt.colors.primary};
        margin-bottom: 0.25em;
    }

    &:hover > h2:after {
        content: ' >';
    }
`,t3=({id:t})=>Y.jsxs(Jd,{id:t,style:ZU,children:[Y.jsx(JU,{children:Y.jsx(QU,{})}),Y.jsxs(e3,{children:[Y.jsxs(Ss,{children:[Y.jsx("h2",{children:"Review Code"}),Y.jsxs("div",{className:"ReviewCode",children:["During the interview process there is often a task. Coin Watch is simple app that is a good example of such task. Written in six different ways. App allows user to view coins and various details about them. It allows user to bookmark coins. Uses coin gecko API. Review the code on ",Y.jsx("a",{href:"https://github.com/stringcode86/coinwatch",target:"_blank",children:"GitHub"}),"."]})]}),Y.jsxs(Ss,{children:[Y.jsx("h2",{children:"Web front end"}),Y.jsxs("div",{className:"ReviewCode",children:["React.js, Redux front end app version of Coin Watch, review ",Y.jsx("a",{href:"https://github.com/stringcode86/coinwatch",target:"_blank",children:"here"}),"."]})]}),Y.jsxs(Ss,{children:[Y.jsx("h2",{children:"Mobile React Native (iOS & Android)"}),Y.jsxs("div",{className:"ReviewCode",children:["React Native app version of Coin Watch for iOS and Android. review ",Y.jsx("a",{href:"https://github.com/stringcode86/coinwatch",target:"_blank",children:"here"}),"."]})]}),Y.jsxs(Ss,{children:[Y.jsx("h2",{children:"iOS UIKit (with KMM)"}),Y.jsxs("div",{className:"ReviewCode",children:["Kotlin multi-platform version of the app. Share core library that contains all the business logic written in Kotlin. Compiles native binary for each platform. Vends view models to thin UI Layer written in Swift leveraging UIKit. UI layer sends events to Core library. Apps uses Viper architecture. Review code ",Y.jsx("a",{href:"https://github.com/stringcode86/coinwatch",target:"_blank",children:"here"}),"."]})]}),Y.jsxs(Ss,{children:[Y.jsx("h2",{children:"iOS Swift UI"}),Y.jsxs("div",{className:"ReviewCode",children:["Pure SwiftUI version of the app. Uses all the SwiftUI latest best practices. Review code ",Y.jsx("a",{href:"https://github.com/stringcode86/coinwatch",target:"_blank",children:"here"}),"."]})]}),Y.jsxs(Ss,{children:[Y.jsx("h2",{children:"Android View based (with KMM)"}),Y.jsxs("div",{className:"ReviewCode",children:["Kotlin multi-platform version of the app. Share core library that contains all the business logic written in Kotlin. Compiles native binary for each platform. Vends view models to thin UI Views layer, leveraging Fragment. UI layer sends events to Core library. Apps uses Viper architecture. Review code ",Y.jsx("a",{href:"https://github.com/stringcode86/coinwatch",target:"_blank",children:"here"}),"."]})]}),Y.jsxs(Ss,{children:[Y.jsx("h2",{children:"Android Jetpack Compose"}),Y.jsxs("div",{className:"ReviewCode",children:["Pure Jetpack Compose version of the app. Uses all the Jetpack Compose latest best practices. Review code ",Y.jsx("a",{href:"https://github.com/stringcode86/coinwatch",target:"_blank",children:"here"}),"."]})]})]})]}),n3="modulepreload",i3=function(t){return"/"+t},Cy={},Wn=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=i3(l),l in Cy)return;Cy[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":n3,c||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var r3=function(e,n,i){var r=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof n=="function"&&(i=n,n={}),n=n||{},i=i||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async="async"in n?!!n.async:!0,s.src=e,n.attrs&&s3(s,n.attrs),n.text&&(s.text=""+n.text);var o="onload"in s?Py:o3;o(s,i),s.onload||Py(s,i),r.appendChild(s)};function s3(t,e){for(var n in e)t.setAttribute(n,e[n])}function Py(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function o3(t,e){t.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,t))}}var a3=function(e){return l3(e)&&!c3(e)};function l3(t){return!!t&&typeof t=="object"}function c3(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||f3(t)}var u3=typeof Symbol=="function"&&Symbol.for,d3=u3?Symbol.for("react.element"):60103;function f3(t){return t.$$typeof===d3}function h3(t){return Array.isArray(t)?[]:{}}function Yl(t,e){return e.clone!==!1&&e.isMergeableObject(t)?Sa(h3(t),t,e):t}function p3(t,e,n){return t.concat(e).map(function(i){return Yl(i,n)})}function m3(t,e){if(!e.customMerge)return Sa;var n=e.customMerge(t);return typeof n=="function"?n:Sa}function g3(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(e){return Object.propertyIsEnumerable.call(t,e)}):[]}function Ly(t){return Object.keys(t).concat(g3(t))}function FE(t,e){try{return e in t}catch{return!1}}function v3(t,e){return FE(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))}function _3(t,e,n){var i={};return n.isMergeableObject(t)&&Ly(t).forEach(function(r){i[r]=Yl(t[r],n)}),Ly(e).forEach(function(r){v3(t,r)||(FE(t,r)&&n.isMergeableObject(e[r])?i[r]=m3(r,n)(t[r],e[r],n):i[r]=Yl(e[r],n))}),i}function Sa(t,e,n){n=n||{},n.arrayMerge=n.arrayMerge||p3,n.isMergeableObject=n.isMergeableObject||a3,n.cloneUnlessOtherwiseSpecified=Yl;var i=Array.isArray(e),r=Array.isArray(t),s=i===r;return s?i?n.arrayMerge(t,e,n):_3(t,e,n):Yl(e,n)}Sa.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(i,r){return Sa(i,r,n)},{})};var y3=Sa,kE=y3,x3=Object.create,ef=Object.defineProperty,S3=Object.getOwnPropertyDescriptor,M3=Object.getOwnPropertyNames,E3=Object.getPrototypeOf,w3=Object.prototype.hasOwnProperty,T3=(t,e)=>{for(var n in e)ef(t,n,{get:e[n],enumerable:!0})},BE=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of M3(e))!w3.call(t,r)&&r!==n&&ef(t,r,{get:()=>e[r],enumerable:!(i=S3(e,r))||i.enumerable});return t},Jg=(t,e,n)=>(n=t!=null?x3(E3(t)):{},BE(!t||!t.__esModule?ef(n,"default",{value:t,enumerable:!0}):n,t)),A3=t=>BE(ef({},"__esModule",{value:!0}),t),zE={};T3(zE,{callPlayer:()=>V3,getConfig:()=>z3,getSDK:()=>B3,isBlobUrl:()=>W3,isMediaStream:()=>G3,lazy:()=>P3,omit:()=>H3,parseEndTime:()=>O3,parseStartTime:()=>U3,queryString:()=>k3,randomString:()=>F3,supportsWebKitPresentationMode:()=>j3});var tf=A3(zE),b3=Jg(he),R3=Jg(r3),C3=Jg(kE);const P3=t=>b3.default.lazy(async()=>{const e=await t();return typeof e.default=="function"?e:e.default}),L3=/[?&#](?:start|t)=([0-9hms]+)/,I3=/[?&#]end=([0-9hms]+)/,xm=/(\d+)(h|m|s)/g,D3=/^\d+$/;function HE(t,e){if(t instanceof Array)return;const n=t.match(e);if(n){const i=n[1];if(i.match(xm))return N3(i);if(D3.test(i))return parseInt(i)}}function N3(t){let e=0,n=xm.exec(t);for(;n!==null;){const[,i,r]=n;r==="h"&&(e+=parseInt(i,10)*60*60),r==="m"&&(e+=parseInt(i,10)*60),r==="s"&&(e+=parseInt(i,10)),n=xm.exec(t)}return e}function U3(t){return HE(t,L3)}function O3(t){return HE(t,I3)}function F3(){return Math.random().toString(36).substr(2,5)}function k3(t){return Object.keys(t).map(e=>`${e}=${t[e]}`).join("&")}function bh(t){return window[t]?window[t]:window.exports&&window.exports[t]?window.exports[t]:window.module&&window.module.exports&&window.module.exports[t]?window.module.exports[t]:null}const xo={},B3=function(e,n,i=null,r=()=>!0,s=R3.default){const o=bh(n);return o&&r(o)?Promise.resolve(o):new Promise((a,l)=>{if(xo[e]){xo[e].push({resolve:a,reject:l});return}xo[e]=[{resolve:a,reject:l}];const c=u=>{xo[e].forEach(d=>d.resolve(u))};if(i){const u=window[i];window[i]=function(){u&&u(),c(bh(n))}}s(e,u=>{u?(xo[e].forEach(d=>d.reject(u)),xo[e]=null):i||c(bh(n))})})};function z3(t,e){return(0,C3.default)(e.config,t.config)}function H3(t,...e){const n=[].concat(...e),i={},r=Object.keys(t);for(const s of r)n.indexOf(s)===-1&&(i[s]=t[s]);return i}function V3(t,...e){if(!this.player||!this.player[t]){let n=`ReactPlayer: ${this.constructor.displayName} player could not call %c${t}%c – `;return this.player?this.player[t]||(n+="The method was not available"):n+="The player was not available",console.warn(n,"font-weight: bold",""),null}return this.player[t](...e)}function G3(t){return typeof window<"u"&&typeof window.MediaStream<"u"&&t instanceof window.MediaStream}function W3(t){return/^blob:/.test(t)}function j3(t=document.createElement("video")){const e=/iPhone|iPod/.test(navigator.userAgent)===!1;return t.webkitSupportsPresentationMode&&typeof t.webkitSetPresentationMode=="function"&&e}var ev=Object.defineProperty,X3=Object.getOwnPropertyDescriptor,$3=Object.getOwnPropertyNames,Y3=Object.prototype.hasOwnProperty,K3=(t,e)=>{for(var n in e)ev(t,n,{get:e[n],enumerable:!0})},q3=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of $3(e))!Y3.call(t,r)&&r!==n&&ev(t,r,{get:()=>e[r],enumerable:!(i=X3(e,r))||i.enumerable});return t},Q3=t=>q3(ev({},"__esModule",{value:!0}),t),VE={};K3(VE,{AUDIO_EXTENSIONS:()=>tv,DASH_EXTENSIONS:()=>nw,FLV_EXTENSIONS:()=>iw,HLS_EXTENSIONS:()=>iv,MATCH_URL_DAILYMOTION:()=>ZE,MATCH_URL_FACEBOOK:()=>XE,MATCH_URL_FACEBOOK_WATCH:()=>$E,MATCH_URL_KALTURA:()=>tw,MATCH_URL_MIXCLOUD:()=>JE,MATCH_URL_MUX:()=>jE,MATCH_URL_SOUNDCLOUD:()=>GE,MATCH_URL_STREAMABLE:()=>YE,MATCH_URL_TWITCH_CHANNEL:()=>QE,MATCH_URL_TWITCH_VIDEO:()=>qE,MATCH_URL_VIDYARD:()=>ew,MATCH_URL_VIMEO:()=>WE,MATCH_URL_WISTIA:()=>KE,MATCH_URL_YOUTUBE:()=>Sm,VIDEO_EXTENSIONS:()=>nv,canPlay:()=>J3});var Z3=Q3(VE),Iy=tf;const Sm=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,GE=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,WE=/vimeo\.com\/(?!progressive_redirect).+/,jE=/stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/,XE=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,$E=/^https?:\/\/fb\.watch\/.+$/,YE=/streamable\.com\/([a-z0-9]+)$/,KE=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,qE=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,QE=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,ZE=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,JE=/mixcloud\.com\/([^/]+\/[^/]+)/,ew=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,tw=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,tv=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,nv=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,iv=/\.(m3u8)($|\?)/i,nw=/\.(mpd)($|\?)/i,iw=/\.(flv)($|\?)/i,Mm=t=>{if(t instanceof Array){for(const e of t)if(typeof e=="string"&&Mm(e)||Mm(e.src))return!0;return!1}return(0,Iy.isMediaStream)(t)||(0,Iy.isBlobUrl)(t)?!0:tv.test(t)||nv.test(t)||iv.test(t)||nw.test(t)||iw.test(t)},J3={youtube:t=>t instanceof Array?t.every(e=>Sm.test(e)):Sm.test(t),soundcloud:t=>GE.test(t)&&!tv.test(t),vimeo:t=>WE.test(t)&&!nv.test(t)&&!iv.test(t),mux:t=>jE.test(t),facebook:t=>XE.test(t)||$E.test(t),streamable:t=>YE.test(t),wistia:t=>KE.test(t),twitch:t=>qE.test(t)||QE.test(t),dailymotion:t=>ZE.test(t),mixcloud:t=>JE.test(t),vidyard:t=>ew.test(t),kaltura:t=>tw.test(t),file:Mm};var rv=Object.defineProperty,eO=Object.getOwnPropertyDescriptor,tO=Object.getOwnPropertyNames,nO=Object.prototype.hasOwnProperty,iO=(t,e)=>{for(var n in e)rv(t,n,{get:e[n],enumerable:!0})},rO=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of tO(e))!nO.call(t,r)&&r!==n&&rv(t,r,{get:()=>e[r],enumerable:!(i=eO(e,r))||i.enumerable});return t},sO=t=>rO(rv({},"__esModule",{value:!0}),t),rw={};iO(rw,{default:()=>aO});var oO=sO(rw),Gn=tf,Cn=Z3,aO=[{key:"youtube",name:"YouTube",canPlay:Cn.canPlay.youtube,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./YouTube-CFCyMn2i.js").then(t=>t.Y),[]))},{key:"soundcloud",name:"SoundCloud",canPlay:Cn.canPlay.soundcloud,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./SoundCloud-CAe3V2t5.js").then(t=>t.S),[]))},{key:"vimeo",name:"Vimeo",canPlay:Cn.canPlay.vimeo,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./Vimeo-ChzFfd9C.js").then(t=>t.V),[]))},{key:"mux",name:"Mux",canPlay:Cn.canPlay.mux,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./Mux-CQ9cWYzd.js").then(t=>t.M),[]))},{key:"facebook",name:"Facebook",canPlay:Cn.canPlay.facebook,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./Facebook-LqHDjqJ0.js").then(t=>t.F),[]))},{key:"streamable",name:"Streamable",canPlay:Cn.canPlay.streamable,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./Streamable-D-hrw19Y.js").then(t=>t.S),[]))},{key:"wistia",name:"Wistia",canPlay:Cn.canPlay.wistia,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./Wistia-Ck2Iu0oI.js").then(t=>t.W),[]))},{key:"twitch",name:"Twitch",canPlay:Cn.canPlay.twitch,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./Twitch-BdIEX8sS.js").then(t=>t.T),[]))},{key:"dailymotion",name:"DailyMotion",canPlay:Cn.canPlay.dailymotion,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./DailyMotion-DJdYUAJz.js").then(t=>t.D),[]))},{key:"mixcloud",name:"Mixcloud",canPlay:Cn.canPlay.mixcloud,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./Mixcloud-coZ2fCB3.js").then(t=>t.M),[]))},{key:"vidyard",name:"Vidyard",canPlay:Cn.canPlay.vidyard,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./Vidyard-CAAhnpNw.js").then(t=>t.V),[]))},{key:"kaltura",name:"Kaltura",canPlay:Cn.canPlay.kaltura,lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./Kaltura-sUXanCgg.js").then(t=>t.K),[]))},{key:"file",name:"FilePlayer",canPlay:Cn.canPlay.file,canEnablePIP:t=>Cn.canPlay.file(t)&&(document.pictureInPictureEnabled||(0,Gn.supportsWebKitPresentationMode)())&&!Cn.AUDIO_EXTENSIONS.test(t),lazyPlayer:(0,Gn.lazy)(()=>Wn(()=>import("./FilePlayer-D9wK6A1H.js").then(t=>t.F),[]))}],Dy=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function lO(t,e){return!!(t===e||Dy(t)&&Dy(e))}function cO(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!lO(t[n],e[n]))return!1;return!0}function uO(t,e){e===void 0&&(e=cO);var n,i=[],r,s=!1;function o(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return s&&n===this&&e(a,i)||(r=t.apply(this,a),s=!0,n=this,i=a),r}return o}const dO=Object.freeze(Object.defineProperty({__proto__:null,default:uO},Symbol.toStringTag,{value:"Module"})),fO=Tw(dO);var hO=typeof Element<"u",pO=typeof Map=="function",mO=typeof Set=="function",gO=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Hu(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,i,r;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(i=n;i--!==0;)if(!Hu(t[i],e[i]))return!1;return!0}var s;if(pO&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(i=s.next()).done;)if(!e.has(i.value[0]))return!1;for(s=t.entries();!(i=s.next()).done;)if(!Hu(i.value[1],e.get(i.value[0])))return!1;return!0}if(mO&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(i=s.next()).done;)if(!e.has(i.value[0]))return!1;return!0}if(gO&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(i=n;i--!==0;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,r[i]))return!1;if(hO&&t instanceof Element)return!1;for(i=n;i--!==0;)if(!((r[i]==="_owner"||r[i]==="__v"||r[i]==="__o")&&t.$$typeof)&&!Hu(t[r[i]],e[r[i]]))return!1;return!0}return t!==t&&e!==e}var sw=function(e,n){try{return Hu(e,n)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}},ow={exports:{}},vO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_O=vO,yO=_O;function aw(){}function lw(){}lw.resetWarningCache=aw;var xO=function(){function t(i,r,s,o,a,l){if(l!==yO){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:lw,resetWarningCache:aw};return n.PropTypes=n,n};ow.exports=xO();var SO=ow.exports,MO=Object.create,nf=Object.defineProperty,EO=Object.getOwnPropertyDescriptor,wO=Object.getOwnPropertyNames,TO=Object.getPrototypeOf,AO=Object.prototype.hasOwnProperty,bO=(t,e)=>{for(var n in e)nf(t,n,{get:e[n],enumerable:!0})},cw=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of wO(e))!AO.call(t,r)&&r!==n&&nf(t,r,{get:()=>e[r],enumerable:!(i=EO(e,r))||i.enumerable});return t},RO=(t,e,n)=>(n=t!=null?MO(TO(t)):{},cw(!t||!t.__esModule?nf(n,"default",{value:t,enumerable:!0}):n,t)),CO=t=>cw(nf({},"__esModule",{value:!0}),t),uw={};bO(uw,{defaultProps:()=>IO,propTypes:()=>LO});var dw=CO(uw),PO=RO(SO);const{string:dn,bool:Pn,number:So,array:Rh,oneOfType:el,shape:ii,object:wn,func:Qt,node:Ny}=PO.default,LO={url:el([dn,Rh,wn]),playing:Pn,loop:Pn,controls:Pn,volume:So,muted:Pn,playbackRate:So,width:el([dn,So]),height:el([dn,So]),style:wn,progressInterval:So,playsinline:Pn,pip:Pn,stopOnUnmount:Pn,light:el([Pn,dn,wn]),playIcon:Ny,previewTabIndex:So,previewAriaLabel:dn,fallback:Ny,oEmbedUrl:dn,wrapper:el([dn,Qt,ii({render:Qt.isRequired})]),config:ii({soundcloud:ii({options:wn}),youtube:ii({playerVars:wn,embedOptions:wn,onUnstarted:Qt}),facebook:ii({appId:dn,version:dn,playerId:dn,attributes:wn}),dailymotion:ii({params:wn}),vimeo:ii({playerOptions:wn,title:dn}),mux:ii({attributes:wn,version:dn}),file:ii({attributes:wn,tracks:Rh,forceVideo:Pn,forceAudio:Pn,forceHLS:Pn,forceSafariHLS:Pn,forceDisableHls:Pn,forceDASH:Pn,forceFLV:Pn,hlsOptions:wn,hlsVersion:dn,dashVersion:dn,flvVersion:dn}),wistia:ii({options:wn,playerId:dn,customControls:Rh}),mixcloud:ii({options:wn}),twitch:ii({options:wn,playerId:dn}),vidyard:ii({options:wn})}),onReady:Qt,onStart:Qt,onPlay:Qt,onPause:Qt,onBuffer:Qt,onBufferEnd:Qt,onEnded:Qt,onError:Qt,onDuration:Qt,onSeek:Qt,onPlaybackRateChange:Qt,onPlaybackQualityChange:Qt,onProgress:Qt,onClickPreview:Qt,onEnablePIP:Qt,onDisablePIP:Qt},fn=()=>{},IO={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,previewAriaLabel:"",oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:fn},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},mux:{attributes:{},version:"2"},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:fn,onStart:fn,onPlay:fn,onPause:fn,onBuffer:fn,onBufferEnd:fn,onEnded:fn,onError:fn,onDuration:fn,onSeek:fn,onPlaybackRateChange:fn,onPlaybackQualityChange:fn,onProgress:fn,onClickPreview:fn,onEnablePIP:fn,onDisablePIP:fn};var DO=Object.create,lc=Object.defineProperty,NO=Object.getOwnPropertyDescriptor,UO=Object.getOwnPropertyNames,OO=Object.getPrototypeOf,FO=Object.prototype.hasOwnProperty,kO=(t,e,n)=>e in t?lc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,BO=(t,e)=>{for(var n in e)lc(t,n,{get:e[n],enumerable:!0})},fw=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of UO(e))!FO.call(t,r)&&r!==n&&lc(t,r,{get:()=>e[r],enumerable:!(i=NO(e,r))||i.enumerable});return t},hw=(t,e,n)=>(n=t!=null?DO(OO(t)):{},fw(!t||!t.__esModule?lc(n,"default",{value:t,enumerable:!0}):n,t)),zO=t=>fw(lc({},"__esModule",{value:!0}),t),Gt=(t,e,n)=>(kO(t,typeof e!="symbol"?e+"":e,n),n),pw={};BO(pw,{default:()=>rf});var HO=zO(pw),Uy=hw(he),VO=hw(sw),mw=dw,GO=tf;const WO=5e3;class rf extends Uy.Component{constructor(){super(...arguments),Gt(this,"mounted",!1),Gt(this,"isReady",!1),Gt(this,"isPlaying",!1),Gt(this,"isLoading",!0),Gt(this,"loadOnReady",null),Gt(this,"startOnPlay",!0),Gt(this,"seekOnPlay",null),Gt(this,"onDurationCalled",!1),Gt(this,"handlePlayerMount",e=>{if(this.player){this.progress();return}this.player=e,this.player.load(this.props.url),this.progress()}),Gt(this,"getInternalPlayer",e=>this.player?this.player[e]:null),Gt(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const e=this.getCurrentTime()||0,n=this.getSecondsLoaded(),i=this.getDuration();if(i){const r={playedSeconds:e,played:e/i};n!==null&&(r.loadedSeconds=n,r.loaded=n/i),(r.playedSeconds!==this.prevPlayed||r.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(r),this.prevPlayed=r.playedSeconds,this.prevLoaded=r.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),Gt(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:e,playing:n,volume:i,muted:r}=this.props;e(),!r&&i!==null&&this.player.setVolume(i),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):n&&this.player.play(),this.handleDurationCheck()}),Gt(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:e,onPlay:n,playbackRate:i}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&i!==1&&this.player.setPlaybackRate(i),e(),this.startOnPlay=!1),n(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),Gt(this,"handlePause",e=>{this.isPlaying=!1,this.isLoading||this.props.onPause(e)}),Gt(this,"handleEnded",()=>{const{activePlayer:e,loop:n,onEnded:i}=this.props;e.loopOnEnded&&n&&this.seekTo(0),n||(this.isPlaying=!1,i())}),Gt(this,"handleError",(...e)=>{this.isLoading=!1,this.props.onError(...e)}),Gt(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const e=this.getDuration();e?this.onDurationCalled||(this.props.onDuration(e),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),Gt(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(e){if(!this.player)return;const{url:n,playing:i,volume:r,muted:s,playbackRate:o,pip:a,loop:l,activePlayer:c,disableDeferredLoading:u}=this.props;if(!(0,VO.default)(e.url,n)){if(this.isLoading&&!c.forceLoad&&!u&&!(0,GO.isMediaStream)(n)){console.warn(`ReactPlayer: the attempt to load ${n} is being deferred until the player has loaded`),this.loadOnReady=n;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(n,this.isReady)}!e.playing&&i&&!this.isPlaying&&this.player.play(),e.playing&&!i&&this.isPlaying&&this.player.pause(),!e.pip&&a&&this.player.enablePIP&&this.player.enablePIP(),e.pip&&!a&&this.player.disablePIP&&this.player.disablePIP(),e.volume!==r&&r!==null&&this.player.setVolume(r),e.muted!==s&&(s?this.player.mute():(this.player.unmute(),r!==null&&setTimeout(()=>this.player.setVolume(r)))),e.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),e.loop!==l&&this.player.setLoop&&this.player.setLoop(l)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(e,n,i){if(!this.isReady){e!==0&&(this.seekOnPlay=e,setTimeout(()=>{this.seekOnPlay=null},WO));return}if(n?n==="fraction":e>0&&e<1){const s=this.player.getDuration();if(!s){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(s*e,i);return}this.player.seekTo(e,i)}render(){const e=this.props.activePlayer;return e?Uy.default.createElement(e,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}Gt(rf,"displayName","Player");Gt(rf,"propTypes",mw.propTypes);Gt(rf,"defaultProps",mw.defaultProps);var jO=Object.create,cc=Object.defineProperty,XO=Object.getOwnPropertyDescriptor,$O=Object.getOwnPropertyNames,YO=Object.getPrototypeOf,KO=Object.prototype.hasOwnProperty,qO=(t,e,n)=>e in t?cc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,QO=(t,e)=>{for(var n in e)cc(t,n,{get:e[n],enumerable:!0})},gw=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of $O(e))!KO.call(t,r)&&r!==n&&cc(t,r,{get:()=>e[r],enumerable:!(i=XO(e,r))||i.enumerable});return t},uc=(t,e,n)=>(n=t!=null?jO(YO(t)):{},gw(!t||!t.__esModule?cc(n,"default",{value:t,enumerable:!0}):n,t)),ZO=t=>gw(cc({},"__esModule",{value:!0}),t),Vt=(t,e,n)=>(qO(t,typeof e!="symbol"?e+"":e,n),n),vw={};QO(vw,{createReactPlayer:()=>aF});var JO=ZO(vw),Mo=uc(he),eF=uc(kE),Ch=uc(fO),Oy=uc(sw),dl=dw,_w=tf,tF=uc(HO);const nF=(0,_w.lazy)(()=>Wn(()=>import("./Preview-C87EyOu_.js").then(t=>t.P),[])),iF=typeof window<"u"&&window.document&&typeof document<"u",rF=typeof lf<"u"&&lf.window&&lf.window.document,sF=Object.keys(dl.propTypes),oF=iF||rF?Mo.Suspense:()=>null,tl=[],aF=(t,e)=>{var n;return n=class extends Mo.Component{constructor(){super(...arguments),Vt(this,"state",{showPreview:!!this.props.light}),Vt(this,"references",{wrapper:i=>{this.wrapper=i},player:i=>{this.player=i}}),Vt(this,"handleClickPreview",i=>{this.setState({showPreview:!1}),this.props.onClickPreview(i)}),Vt(this,"showPreview",()=>{this.setState({showPreview:!0})}),Vt(this,"getDuration",()=>this.player?this.player.getDuration():null),Vt(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),Vt(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),Vt(this,"getInternalPlayer",(i="player")=>this.player?this.player.getInternalPlayer(i):null),Vt(this,"seekTo",(i,r,s)=>{if(!this.player)return null;this.player.seekTo(i,r,s)}),Vt(this,"handleReady",()=>{this.props.onReady(this)}),Vt(this,"getActivePlayer",(0,Ch.default)(i=>{for(const r of[...tl,...t])if(r.canPlay(i))return r;return e||null})),Vt(this,"getConfig",(0,Ch.default)((i,r)=>{const{config:s}=this.props;return eF.default.all([dl.defaultProps.config,dl.defaultProps.config[r]||{},s,s[r]||{}])})),Vt(this,"getAttributes",(0,Ch.default)(i=>(0,_w.omit)(this.props,sF))),Vt(this,"renderActivePlayer",i=>{if(!i)return null;const r=this.getActivePlayer(i);if(!r)return null;const s=this.getConfig(i,r.key);return Mo.default.createElement(tF.default,{...this.props,key:r.key,ref:this.references.player,config:s,activePlayer:r.lazyPlayer||r,onReady:this.handleReady})})}shouldComponentUpdate(i,r){return!(0,Oy.default)(this.props,i)||!(0,Oy.default)(this.state,r)}componentDidUpdate(i){const{light:r}=this.props;!i.light&&r&&this.setState({showPreview:!0}),i.light&&!r&&this.setState({showPreview:!1})}renderPreview(i){if(!i)return null;const{light:r,playIcon:s,previewTabIndex:o,oEmbedUrl:a,previewAriaLabel:l}=this.props;return Mo.default.createElement(nF,{url:i,light:r,playIcon:s,previewTabIndex:o,previewAriaLabel:l,oEmbedUrl:a,onClick:this.handleClickPreview})}render(){const{url:i,style:r,width:s,height:o,fallback:a,wrapper:l}=this.props,{showPreview:c}=this.state,u=this.getAttributes(i),d=typeof l=="string"?this.references.wrapper:void 0;return Mo.default.createElement(l,{ref:d,style:{...r,width:s,height:o},...u},Mo.default.createElement(oF,{fallback:a},c?this.renderPreview(i):this.renderActivePlayer(i)))}},Vt(n,"displayName","ReactPlayer"),Vt(n,"propTypes",dl.propTypes),Vt(n,"defaultProps",dl.defaultProps),Vt(n,"addCustomPlayer",i=>{tl.push(i)}),Vt(n,"removeCustomPlayers",()=>{tl.length=0}),Vt(n,"canPlay",i=>{for(const r of[...tl,...t])if(r.canPlay(i))return!0;return!1}),Vt(n,"canEnablePIP",i=>{for(const r of[...tl,...t])if(r.canEnablePIP&&r.canEnablePIP(i))return!0;return!1}),n};var lF=Object.create,sf=Object.defineProperty,cF=Object.getOwnPropertyDescriptor,uF=Object.getOwnPropertyNames,dF=Object.getPrototypeOf,fF=Object.prototype.hasOwnProperty,hF=(t,e)=>{for(var n in e)sf(t,n,{get:e[n],enumerable:!0})},yw=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of uF(e))!fF.call(t,r)&&r!==n&&sf(t,r,{get:()=>e[r],enumerable:!(i=cF(e,r))||i.enumerable});return t},pF=(t,e,n)=>(n=t!=null?lF(dF(t)):{},yw(!t||!t.__esModule?sf(n,"default",{value:t,enumerable:!0}):n,t)),mF=t=>yw(sf({},"__esModule",{value:!0}),t),xw={};hF(xw,{default:()=>yF});var gF=mF(xw),Em=pF(oO),vF=JO;const _F=Em.default[Em.default.length-1];var yF=(0,vF.createReactPlayer)(Em.default,_F);const xF=wm(gF),Sw=xt.div`
    position: relative;
    border: 2px solid white;
    overflow: visible;
    margin-top: 2em;
`,Mw=xt.h1`
    position: absolute;
    display: inline-block;
    color: white;
    border: 2px solid white;
    background: ${Kt.colors.background};
    padding: 0.5em 1em;
    transform: translate(1em, -1em);
    overflow: clip;
    @media only screen and (max-width : 500px) {
        padding: 0.25em 0.25em;
        transform: translate(0.5em, -1.5em);
        margin-right: 1em;
    }
`,SF=xt.div`
    display: flex;
    gap: 2em;
    margin: 3em 2em;
    align-items: flex-start;

    @media only screen and (max-width : 768px) {
        flex-direction: column;
        margin: 1em 1em;
    }
 `,MF=xt.div`
    display: flex;
    gap: 2em;
    margin: 3em 2em;
    align-items: flex-start;

    @media only screen and (max-width : 1180px) {
        flex-direction: revert;
        flex-wrap: wrap;
        margin: 1em 1em;
        
        > * {
            flex: 1;
            min-width: calc(50% - 2em);
        }
    }
    
    @media only screen and (max-width : 768px) {
        flex-direction: column;
        margin: 1em 1em;
    }
 `,EF=xt.div`
    border: 2px solid white;
    width: 30%;
    min-width: 320px;
    min-height: 450px;
    padding: 1em 1em;

    @media only screen and (max-width : 500px) {
        min-width: 100%;
    }
`,Ew=({url:t})=>Y.jsx(EF,{children:Y.jsx(xF,{url:t,controls:!0,loop:!0,playing:!0,muted:!0,width:"100%",height:"100%",playsinline:!0})}),Fy=({id:t,title:e,videoUrl:n,children:i})=>Y.jsx(Jd,{id:t,style:{minHeight:"auto"},children:Y.jsxs(Sw,{children:[Y.jsxs(Mw,{children:[Y.jsx(qg,{}),e]}),Y.jsxs(SF,{children:[Y.jsx("div",{children:i}),Y.jsx(Ew,{url:n})]})]})}),wF=({id:t,title:e,bodies:n,videoUrls:i,children:r})=>Y.jsx(Jd,{id:t,style:{minHeight:"auto"},children:Y.jsxs(Sw,{children:[Y.jsxs(Mw,{children:[Y.jsx(qg,{}),e]}),Y.jsxs(MF,{children:[n.map((s,o)=>Y.jsxs("div",{children:[Y.jsx(Ew,{url:i[o]}),Y.jsx("div",{style:{marginTop:"1em"},children:s})]})),Y.jsx("div",{children:r})]})]})}),TF=xt.div`
    overflow: visible;
    display: flex;
    gap: 2em;
    align-items: center;
    flex-direction: row-reverse;

    @media only screen and (max-width : 1023px) {
        flex-direction: column-reverse;
    }
`,AF=xt.div`
    position: relative;
    min-width: 30%;
    aspect-ratio: 1 !important;
    overflow: visible;
    > * {
        position: absolute;
        aspect-ratio: 1 !important;
        top: -12.5%;
        bottom: -12.5%;
        left: -12.5%;
        right: -12.5%;
        overflow: visible;
    }

    @media only screen and (max-width : 1023px) {
        width: 100%;
        max-width: 400px;
    }
`,ky=({id:t,title:e,scene3DProps:n,children:i})=>Y.jsx(Jd,{id:t,children:Y.jsxs(TF,{children:[Y.jsx(AF,{children:Y.jsx(Zg,{url:n.url,position:n.position,rotation:n.rotation,animRotateY:n.animRotateY,edgesThreshold:n.edgesThreshold,scrollRotate:n.scrollRotate})}),Y.jsxs("div",{children:[Y.jsx("h1",{style:{color:Kt.colors.primary},children:e}),i]})]})}),bF="/assets/photo_box-CiGVXqqB.mov",RF="/assets/flower_sm-DCzFRnGL.mov",CF="/assets/memory%20game-BAjZ9LwQ.mp4",PF="/assets/paralax-B8AGFjKr.mp4",By="/assets/eth2-DeQkuPaq.glb",LF="/assets/floppy_disk-D_R8l6kS.glb",IF="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsSAAALEgHS3X78AAAAI0lEQVQ4T2NkYGD4D8RkAyaydQ4ajYyjYcAwGgYMo2EAzAcALv4ECZ1CSYEAAAAASUVORK5CYII=";xt.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    width: 200vw;
    height: 200vh;
    background: url("${IF}");
    transform: translate(-50vw, -100vh);
    z-index: 100;
    opacity: 0.05;
    animation: flicker 0.2s linear infinite;
`;const DF=xt.div`
    background-color: #212429;
    font-family: "VT323", monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 1.5em;
    line-height: 1.5em;
    letter-spacing: 0.5px;

    h1 {
        font-size: 2em;
        line-height: 1em;
        letter-spacing: 0px;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.35em;
        letter-spacing: 0px;
        font-weight: SemiBold;
    }

    h3 {
        font-size: 1em;
        line-height: 1.5em;
        letter-spacing: 0.5px;
        font-weight: bold;
    }

    p {
        margin-top: 1.5em !important;
    }
`,NF=()=>{const t=e=>{const n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})};return Y.jsxs(DF,{children:[Y.jsx(qg,{}),Y.jsx(qU,{codeReviewHandler:()=>t("review"),uiuxHandler:()=>t("uiux"),cryptoCredHandler:()=>t("crypto"),moreHandler:()=>t("more")}),Y.jsx(t3,{id:"review"}),Y.jsxs(Fy,{title:"UX/UX SHOWCASE I",videoUrl:bF,id:"uiux",children:[Y.jsx("p",{children:`
                        Show case of a flow that let you pick photos from photo gallery and print
                        a box of photos. Sheet let's you pick the photos. Subtle check mark animations. 
                        Photos fly in from behind the sheet. And are stacked in the box with correct orientation
                        and fluid animation. They also drop behind the sheet.
                    `}),Y.jsx("p",{children:`
                        Sheet is dismissed via smooth transition into presentation view. Everything is super 
                        fluid and natural. You can swipe photos away. Scrolling all the way to the top closes 
                        the box. Again in very intuitive way.
                    `})]}),Y.jsxs(Fy,{title:"UX/UX SHOWCASE II",videoUrl:RF,children:[Y.jsx("p",{children:`
                        Show case of financial health app. Think head space for personal finance. Notice 
                        upon launch every single element has a subtle animations. There is bounciness and 
                        delightful polish the interactions. Flow represents your financial health and blooms 
                        as it improves.
                    `}),Y.jsx("p",{children:`
                        When swiping from one tab to another. Cells are stacked. Transitions are interactive. 
                        Tapping on total score ring breaks it down into individual sub-scores. It looks very 
                        simple and natural. Implementing it however, it very much is not (simple). To get the 
                        ring transitions to visually make sense for all the possible states took a full day 
                        of work.
                    `}),Y.jsx("p",{children:`
                        There is a hand coded custom and container with transitions that mimics Apple’s App 
                        Store transitions.
                    `})]}),Y.jsxs(wF,{title:"UX/UX SHOWCASE III",bodies:[`
                        Simple memory game. What’s cool about it does not contain any bitmap assets. Everything is 
                        drawn in code. Apple Watch version of the app was featured the App Store for a year. 
                    `,`
                        Onboarding flow for calendar complication app. Everything is drawn and animated in code 
                        (by hand).
                    `],videoUrls:[CF,PF],children:[Y.jsx("p",{children:Y.jsx("h1",{children:'Why "fluff" matters?!'})}),Y.jsx("p",{children:`
                        I am hoping to demonstrate with examples above that I am a fan of highly polished, 
                        fluid interactive interfaces. I am a believer they matter for two reasons:
                    `}),Y.jsx("p",{children:`
                        1) They drive KPI improvements. At one start up I worked for, we swapped buttons for 
                        slider with animated "pixar like" face on it. Slider was bouncing at the 
                        beginning, nudging user to slide it across. Face was smiling more as slider moved, 
                        hearts appeared etc. This nearly doubled spent per user.
                    `}),Y.jsx("p",{children:`
                        2) If you are going to do something, why not make it spectacular !
                    `})]}),Y.jsxs(ky,{id:"crypto",title:"> Crypto cred",scene3DProps:{url:By,position:{x:-1.68,y:136,z:651},rotation:{x:-.19,y:0,z:0},animRotateY:-1.75,edgesThreshold:10,scrollRotate:!0},modelUrl:By,children:[Y.jsx("p",{children:`
                        With regards crypto especially on the client side. I have implemented 
                        BIP-32 / 39 / 44 multiple times in multiple languages. Ported Ethers.js to Kotlin. 
                        Everything from cryptographically secure source of randomness. Deriving seed, master 
                        key, chaincode, accounts. Dozen various encodings JSON-RPC uses. Serializing, signing 
                        fetching transactions, event logs. Interacting with smart contracts. All of that code 
                        is my jam. 
                    `}),Y.jsx("p",{children:`
                        Very familiar with Ethers.js, web3.js, wagmi, wallet connect. Familiar with Uniswap 
                        code base. Extensive experience of running nodes. And optimizing them for peak 
                        performance. Geth and Lighthouse in particular. Intimately familiar with how EVM 
                        L1s, L2s operate. We've deployed ERC20s, NFTs, Staking contracts, Yield farms.

                    `}),Y.jsx("p",{children:`
                        I have contributed to number of crypto open source projects. Monero GUI, Farcaster 
                        python client, MetaMask and others. I am both cypherpunk and degen at heart. 
                    `})]}),Y.jsxs(ky,{id:"more",title:"> Mour",scene3DProps:{url:LF,position:{x:-.03,y:.24,z:2.43},rotation:{x:-.1,y:-.01,z:-0},animRotateY:1.5,edgesThreshold:20,scrollRotate:!0},children:[Y.jsx("p",{children:`
                        I have worked for small starts, fortune 500 companies and everything between. In 
                        variety of roles from soldier in the trenches to leading teams and making architectural 
                        decisions. 
                    `}),Y.jsx("p",{children:`
                        I've trained over thousand (not figuratively, literally) deep neural nets models.
                        Python demon, very comfortable with datascience (pandas, numpy, scikit). Familiar 
                        with python for backend (Flask). Wrote fair share of Go code. Familiar with docker,
                        node, and various SQL databases. Very comfortable with running small to midsized 
                        backends. Linux or as I've recently taken to calling it, GNU plus Linux is my jam. 
                        BTW I use arch.
                    `}),Y.jsx("p",{children:`
                        What I do for living is writing code. What I do for hobby is writing code! 
                        Other than that I am practitioner of extreme ownership, big fan of stoicism. 
                        Reading copious amounts of books.  
                    `}),Y.jsx("p",{children:`
                        One last thing. I got a call from doctor. Bad news, turns out that chip 
                        on my shoulder is permanent.
                    `})]})]})},UF=()=>{const t=_b(Ap(Y.jsxs(al,{path:"/",element:Y.jsx(Pb,{}),children:[Y.jsx(al,{index:!0,element:Y.jsx(my,{})}),Y.jsx(al,{path:"/showcase",element:Y.jsx(NF,{})}),Y.jsx(al,{path:"*",element:Y.jsx(my,{})})]})));return Y.jsx(bb,{router:t})};JS(document.getElementById("root")).render(Y.jsx(he.StrictMode,{children:Y.jsx(UF,{})}));export{Wn as _,wm as g,Z3 as p,he as r,tf as u};
