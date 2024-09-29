function yv(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function xv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Sv={exports:{}},xu={},Mv={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sl=Symbol.for("react.element"),Yx=Symbol.for("react.portal"),Kx=Symbol.for("react.fragment"),$x=Symbol.for("react.strict_mode"),qx=Symbol.for("react.profiler"),Zx=Symbol.for("react.provider"),Qx=Symbol.for("react.context"),Jx=Symbol.for("react.forward_ref"),eS=Symbol.for("react.suspense"),tS=Symbol.for("react.memo"),nS=Symbol.for("react.lazy"),cm=Symbol.iterator;function iS(n){return n===null||typeof n!="object"?null:(n=cm&&n[cm]||n["@@iterator"],typeof n=="function"?n:null)}var Ev={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tv=Object.assign,wv={};function Ho(n,e,t){this.props=n,this.context=e,this.refs=wv,this.updater=t||Ev}Ho.prototype.isReactComponent={};Ho.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Ho.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Av(){}Av.prototype=Ho.prototype;function Hh(n,e,t){this.props=n,this.context=e,this.refs=wv,this.updater=t||Ev}var Vh=Hh.prototype=new Av;Vh.constructor=Hh;Tv(Vh,Ho.prototype);Vh.isPureReactComponent=!0;var um=Array.isArray,Rv=Object.prototype.hasOwnProperty,Gh={current:null},bv={key:!0,ref:!0,__self:!0,__source:!0};function Cv(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rv.call(e,i)&&!bv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:sl,type:n,key:s,ref:o,props:r,_owner:Gh.current}}function rS(n,e){return{$$typeof:sl,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Wh(n){return typeof n=="object"&&n!==null&&n.$$typeof===sl}function sS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var dm=/\/+/g;function Gu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?sS(""+n.key):e.toString(36)}function xc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case sl:case Yx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Gu(o,0):i,um(r)?(t="",n!=null&&(t=n.replace(dm,"$&/")+"/"),xc(r,e,t,"",function(c){return c})):r!=null&&(Wh(r)&&(r=rS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(dm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",um(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Gu(s,a);o+=xc(s,e,t,l,r)}else if(l=iS(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Gu(s,a++),o+=xc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xl(n,e,t){if(n==null)return n;var i=[],r=0;return xc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function oS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var bn={current:null},Sc={transition:null},aS={ReactCurrentDispatcher:bn,ReactCurrentBatchConfig:Sc,ReactCurrentOwner:Gh};function Pv(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:xl,forEach:function(n,e,t){xl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return xl(n,function(){e++}),e},toArray:function(n){return xl(n,function(e){return e})||[]},only:function(n){if(!Wh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};rt.Component=Ho;rt.Fragment=Kx;rt.Profiler=qx;rt.PureComponent=Hh;rt.StrictMode=$x;rt.Suspense=eS;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aS;rt.act=Pv;rt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Tv({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Gh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Rv.call(e,l)&&!bv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:sl,type:n.type,key:r,ref:s,props:i,_owner:o}};rt.createContext=function(n){return n={$$typeof:Qx,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Zx,_context:n},n.Consumer=n};rt.createElement=Cv;rt.createFactory=function(n){var e=Cv.bind(null,n);return e.type=n,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(n){return{$$typeof:Jx,render:n}};rt.isValidElement=Wh;rt.lazy=function(n){return{$$typeof:nS,_payload:{_status:-1,_result:n},_init:oS}};rt.memo=function(n,e){return{$$typeof:tS,type:n,compare:e===void 0?null:e}};rt.startTransition=function(n){var e=Sc.transition;Sc.transition={};try{n()}finally{Sc.transition=e}};rt.unstable_act=Pv;rt.useCallback=function(n,e){return bn.current.useCallback(n,e)};rt.useContext=function(n){return bn.current.useContext(n)};rt.useDebugValue=function(){};rt.useDeferredValue=function(n){return bn.current.useDeferredValue(n)};rt.useEffect=function(n,e){return bn.current.useEffect(n,e)};rt.useId=function(){return bn.current.useId()};rt.useImperativeHandle=function(n,e,t){return bn.current.useImperativeHandle(n,e,t)};rt.useInsertionEffect=function(n,e){return bn.current.useInsertionEffect(n,e)};rt.useLayoutEffect=function(n,e){return bn.current.useLayoutEffect(n,e)};rt.useMemo=function(n,e){return bn.current.useMemo(n,e)};rt.useReducer=function(n,e,t){return bn.current.useReducer(n,e,t)};rt.useRef=function(n){return bn.current.useRef(n)};rt.useState=function(n){return bn.current.useState(n)};rt.useSyncExternalStore=function(n,e,t){return bn.current.useSyncExternalStore(n,e,t)};rt.useTransition=function(){return bn.current.useTransition()};rt.version="18.3.1";Mv.exports=rt;var ve=Mv.exports;const lS=xv(ve),cS=yv({__proto__:null,default:lS},[ve]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uS=ve,dS=Symbol.for("react.element"),fS=Symbol.for("react.fragment"),hS=Object.prototype.hasOwnProperty,pS=uS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mS={key:!0,ref:!0,__self:!0,__source:!0};function Lv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)hS.call(e,i)&&!mS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:dS,type:n,key:s,ref:o,props:r,_owner:pS.current}}xu.Fragment=fS;xu.jsx=Lv;xu.jsxs=Lv;Sv.exports=xu;var St=Sv.exports,Dv={exports:{}},Kn={},Iv={exports:{}},Nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(F,j){var te=F.length;F.push(j);e:for(;0<te;){var ue=te-1>>>1,Re=F[ue];if(0<r(Re,j))F[ue]=j,F[te]=Re,te=ue;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var j=F[0],te=F.pop();if(te!==j){F[0]=te;e:for(var ue=0,Re=F.length,Ye=Re>>>1;ue<Ye;){var X=2*(ue+1)-1,oe=F[X],me=X+1,ye=F[me];if(0>r(oe,te))me<Re&&0>r(ye,oe)?(F[ue]=ye,F[me]=te,ue=me):(F[ue]=oe,F[X]=te,ue=X);else if(me<Re&&0>r(ye,te))F[ue]=ye,F[me]=te,ue=me;else break e}}return j}function r(F,j){var te=F.sortIndex-j.sortIndex;return te!==0?te:F.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(F){for(var j=t(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=F)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=t(c)}}function x(F){if(_=!1,y(F),!g)if(t(l)!==null)g=!0,K(b);else{var j=t(c);j!==null&&Q(x,j.startTime-F)}}function b(F,j){g=!1,_&&(_=!1,h(E),E=-1),p=!0;var te=f;try{for(y(j),d=t(l);d!==null&&(!(d.expirationTime>j)||F&&!L());){var ue=d.callback;if(typeof ue=="function"){d.callback=null,f=d.priorityLevel;var Re=ue(d.expirationTime<=j);j=n.unstable_now(),typeof Re=="function"?d.callback=Re:d===t(l)&&i(l),y(j)}else i(l);d=t(l)}if(d!==null)var Ye=!0;else{var X=t(c);X!==null&&Q(x,X.startTime-j),Ye=!1}return Ye}finally{d=null,f=te,p=!1}}var R=!1,A=null,E=-1,w=5,M=-1;function L(){return!(n.unstable_now()-M<w)}function W(){if(A!==null){var F=n.unstable_now();M=F;var j=!0;try{j=A(!0,F)}finally{j?H():(R=!1,A=null)}}else R=!1}var H;if(typeof v=="function")H=function(){v(W)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,$=Y.port2;Y.port1.onmessage=W,H=function(){$.postMessage(null)}}else H=function(){m(W,0)};function K(F){A=F,R||(R=!0,H())}function Q(F,j){E=m(function(){F(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(F){F.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,K(b))},n.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<F?Math.floor(1e3/F):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(F){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var te=f;f=j;try{return F()}finally{f=te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(F,j){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var te=f;f=F;try{return j()}finally{f=te}},n.unstable_scheduleCallback=function(F,j,te){var ue=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?ue+te:ue):te=ue,F){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=te+Re,F={id:u++,callback:j,priorityLevel:F,startTime:te,expirationTime:Re,sortIndex:-1},te>ue?(F.sortIndex=te,e(c,F),t(l)===null&&F===t(c)&&(_?(h(E),E=-1):_=!0,Q(x,te-ue))):(F.sortIndex=Re,e(l,F),g||p||(g=!0,K(b))),F},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(F){var j=f;return function(){var te=f;f=j;try{return F.apply(this,arguments)}finally{f=te}}}})(Nv);Iv.exports=Nv;var gS=Iv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _S=ve,Yn=gS;function le(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uv=new Set,Oa={};function Ms(n,e){Mo(n,e),Mo(n+"Capture",e)}function Mo(n,e){for(Oa[n]=e,n=0;n<e.length;n++)Uv.add(e[n])}var ir=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rf=Object.prototype.hasOwnProperty,vS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fm={},hm={};function yS(n){return rf.call(hm,n)?!0:rf.call(fm,n)?!1:vS.test(n)?hm[n]=!0:(fm[n]=!0,!1)}function xS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function SS(n,e,t,i){if(e===null||typeof e>"u"||xS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Cn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ln[n]=new Cn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];ln[e]=new Cn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ln[n]=new Cn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ln[n]=new Cn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ln[n]=new Cn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ln[n]=new Cn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ln[n]=new Cn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ln[n]=new Cn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ln[n]=new Cn(n,5,!1,n.toLowerCase(),null,!1,!1)});var jh=/[\-:]([a-z])/g;function Xh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(jh,Xh);ln[e]=new Cn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(jh,Xh);ln[e]=new Cn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(jh,Xh);ln[e]=new Cn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ln[n]=new Cn(n,1,!1,n.toLowerCase(),null,!1,!1)});ln.xlinkHref=new Cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ln[n]=new Cn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Yh(n,e,t,i){var r=ln.hasOwnProperty(e)?ln[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SS(e,t,r,i)&&(t=null),i||r===null?yS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var cr=_S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Sl=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),Ks=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),sf=Symbol.for("react.profiler"),Ov=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),of=Symbol.for("react.suspense"),af=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),xr=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),pm=Symbol.iterator;function qo(n){return n===null||typeof n!="object"?null:(n=pm&&n[pm]||n["@@iterator"],typeof n=="function"?n:null)}var Nt=Object.assign,Wu;function _a(n){if(Wu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+n}var ju=!1;function Xu(n,e){if(!n||ju)return"";ju=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{ju=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?_a(n):""}function MS(n){switch(n.tag){case 5:return _a(n.type);case 16:return _a("Lazy");case 13:return _a("Suspense");case 19:return _a("SuspenseList");case 0:case 2:case 15:return n=Xu(n.type,!1),n;case 11:return n=Xu(n.type.render,!1),n;case 1:return n=Xu(n.type,!0),n;default:return""}}function lf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ks:return"Fragment";case Ys:return"Portal";case sf:return"Profiler";case Kh:return"StrictMode";case of:return"Suspense";case af:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Fv:return(n.displayName||"Context")+".Consumer";case Ov:return(n._context.displayName||"Context")+".Provider";case $h:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case qh:return e=n.displayName||null,e!==null?e:lf(n.type)||"Memo";case xr:e=n._payload,n=n._init;try{return lf(n(e))}catch{}}return null}function ES(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lf(e);case 8:return e===Kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function kv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function TS(n){var e=kv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ml(n){n._valueTracker||(n._valueTracker=TS(n))}function zv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=kv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function zc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function cf(n,e){var t=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function mm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=zr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hv(n,e){e=e.checked,e!=null&&Yh(n,"checked",e,!1)}function uf(n,e){Hv(n,e);var t=zr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?df(n,e.type,t):e.hasOwnProperty("defaultValue")&&df(n,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function gm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function df(n,e,t){(e!=="number"||zc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var va=Array.isArray;function lo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+zr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ff(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _m(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(le(92));if(va(t)){if(1<t.length)throw Error(le(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:zr(t)}}function Vv(n,e){var t=zr(e.value),i=zr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function vm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Gv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Gv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var El,Wv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(El=El||document.createElement("div"),El.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=El.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Fa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wS=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(n){wS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),wa[e]=wa[n]})});function jv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||wa.hasOwnProperty(n)&&wa[n]?(""+e).trim():e+"px"}function Xv(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=jv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var AS=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pf(n,e){if(e){if(AS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function mf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gf=null;function Zh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var _f=null,co=null,uo=null;function ym(n){if(n=ll(n)){if(typeof _f!="function")throw Error(le(280));var e=n.stateNode;e&&(e=wu(e),_f(n.stateNode,n.type,e))}}function Yv(n){co?uo?uo.push(n):uo=[n]:co=n}function Kv(){if(co){var n=co,e=uo;if(uo=co=null,ym(n),e)for(n=0;n<e.length;n++)ym(e[n])}}function $v(n,e){return n(e)}function qv(){}var Yu=!1;function Zv(n,e,t){if(Yu)return n(e,t);Yu=!0;try{return $v(n,e,t)}finally{Yu=!1,(co!==null||uo!==null)&&(qv(),Kv())}}function Ba(n,e){var t=n.stateNode;if(t===null)return null;var i=wu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(le(231,e,typeof t));return t}var vf=!1;if(ir)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){vf=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{vf=!1}function RS(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Aa=!1,Hc=null,Vc=!1,yf=null,bS={onError:function(n){Aa=!0,Hc=n}};function CS(n,e,t,i,r,s,o,a,l){Aa=!1,Hc=null,RS.apply(bS,arguments)}function PS(n,e,t,i,r,s,o,a,l){if(CS.apply(this,arguments),Aa){if(Aa){var c=Hc;Aa=!1,Hc=null}else throw Error(le(198));Vc||(Vc=!0,yf=c)}}function Es(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Qv(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function xm(n){if(Es(n)!==n)throw Error(le(188))}function LS(n){var e=n.alternate;if(!e){if(e=Es(n),e===null)throw Error(le(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return xm(r),n;if(s===i)return xm(r),e;s=s.sibling}throw Error(le(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(t.alternate!==i)throw Error(le(190))}if(t.tag!==3)throw Error(le(188));return t.stateNode.current===t?n:e}function Jv(n){return n=LS(n),n!==null?e0(n):null}function e0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=e0(n);if(e!==null)return e;n=n.sibling}return null}var t0=Yn.unstable_scheduleCallback,Sm=Yn.unstable_cancelCallback,DS=Yn.unstable_shouldYield,IS=Yn.unstable_requestPaint,kt=Yn.unstable_now,NS=Yn.unstable_getCurrentPriorityLevel,Qh=Yn.unstable_ImmediatePriority,n0=Yn.unstable_UserBlockingPriority,Gc=Yn.unstable_NormalPriority,US=Yn.unstable_LowPriority,i0=Yn.unstable_IdlePriority,Su=null,Di=null;function OS(n){if(Di&&typeof Di.onCommitFiberRoot=="function")try{Di.onCommitFiberRoot(Su,n,void 0,(n.current.flags&128)===128)}catch{}}var xi=Math.clz32?Math.clz32:kS,FS=Math.log,BS=Math.LN2;function kS(n){return n>>>=0,n===0?32:31-(FS(n)/BS|0)|0}var Tl=64,wl=4194304;function ya(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ya(a):(s&=o,s!==0&&(i=ya(s)))}else o=t&~r,o!==0?i=ya(o):s!==0&&(i=ya(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-xi(e),r=1<<t,i|=n[t],e&=~r;return i}function zS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function HS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-xi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=zS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function xf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function r0(){var n=Tl;return Tl<<=1,!(Tl&4194240)&&(Tl=64),n}function Ku(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ol(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-xi(e),n[e]=t}function VS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-xi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Jh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-xi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var mt=0;function s0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var o0,ep,a0,l0,c0,Sf=!1,Al=[],Lr=null,Dr=null,Ir=null,ka=new Map,za=new Map,Er=[],GS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mm(n,e){switch(n){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function Qo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ll(e),e!==null&&ep(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function WS(n,e,t,i,r){switch(e){case"focusin":return Lr=Qo(Lr,n,e,t,i,r),!0;case"dragenter":return Dr=Qo(Dr,n,e,t,i,r),!0;case"mouseover":return Ir=Qo(Ir,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ka.set(s,Qo(ka.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,za.set(s,Qo(za.get(s)||null,n,e,t,i,r)),!0}return!1}function u0(n){var e=os(n.target);if(e!==null){var t=Es(e);if(t!==null){if(e=t.tag,e===13){if(e=Qv(t),e!==null){n.blockedOn=e,c0(n.priority,function(){a0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Mf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);gf=i,t.target.dispatchEvent(i),gf=null}else return e=ll(t),e!==null&&ep(e),n.blockedOn=t,!1;e.shift()}return!0}function Em(n,e,t){Mc(n)&&t.delete(e)}function jS(){Sf=!1,Lr!==null&&Mc(Lr)&&(Lr=null),Dr!==null&&Mc(Dr)&&(Dr=null),Ir!==null&&Mc(Ir)&&(Ir=null),ka.forEach(Em),za.forEach(Em)}function Jo(n,e){n.blockedOn===e&&(n.blockedOn=null,Sf||(Sf=!0,Yn.unstable_scheduleCallback(Yn.unstable_NormalPriority,jS)))}function Ha(n){function e(r){return Jo(r,n)}if(0<Al.length){Jo(Al[0],n);for(var t=1;t<Al.length;t++){var i=Al[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Lr!==null&&Jo(Lr,n),Dr!==null&&Jo(Dr,n),Ir!==null&&Jo(Ir,n),ka.forEach(e),za.forEach(e),t=0;t<Er.length;t++)i=Er[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Er.length&&(t=Er[0],t.blockedOn===null);)u0(t),t.blockedOn===null&&Er.shift()}var fo=cr.ReactCurrentBatchConfig,jc=!0;function XS(n,e,t,i){var r=mt,s=fo.transition;fo.transition=null;try{mt=1,tp(n,e,t,i)}finally{mt=r,fo.transition=s}}function YS(n,e,t,i){var r=mt,s=fo.transition;fo.transition=null;try{mt=4,tp(n,e,t,i)}finally{mt=r,fo.transition=s}}function tp(n,e,t,i){if(jc){var r=Mf(n,e,t,i);if(r===null)rd(n,e,i,Xc,t),Mm(n,i);else if(WS(r,n,e,t,i))i.stopPropagation();else if(Mm(n,i),e&4&&-1<GS.indexOf(n)){for(;r!==null;){var s=ll(r);if(s!==null&&o0(s),s=Mf(n,e,t,i),s===null&&rd(n,e,i,Xc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else rd(n,e,i,null,t)}}var Xc=null;function Mf(n,e,t,i){if(Xc=null,n=Zh(i),n=os(n),n!==null)if(e=Es(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Qv(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Xc=n,null}function d0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NS()){case Qh:return 1;case n0:return 4;case Gc:case US:return 16;case i0:return 536870912;default:return 16}default:return 16}}var Ar=null,np=null,Ec=null;function f0(){if(Ec)return Ec;var n,e=np,t=e.length,i,r="value"in Ar?Ar.value:Ar.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Ec=r.slice(n,1<i?1-i:void 0)}function Tc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Rl(){return!0}function Tm(){return!1}function $n(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:Tm,this.isPropagationStopped=Tm,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var Vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ip=$n(Vo),al=Nt({},Vo,{view:0,detail:0}),KS=$n(al),$u,qu,ea,Mu=Nt({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ea&&(ea&&n.type==="mousemove"?($u=n.screenX-ea.screenX,qu=n.screenY-ea.screenY):qu=$u=0,ea=n),$u)},movementY:function(n){return"movementY"in n?n.movementY:qu}}),wm=$n(Mu),$S=Nt({},Mu,{dataTransfer:0}),qS=$n($S),ZS=Nt({},al,{relatedTarget:0}),Zu=$n(ZS),QS=Nt({},Vo,{animationName:0,elapsedTime:0,pseudoElement:0}),JS=$n(QS),eM=Nt({},Vo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),tM=$n(eM),nM=Nt({},Vo,{data:0}),Am=$n(nM),iM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=sM[n])?!!e[n]:!1}function rp(){return oM}var aM=Nt({},al,{key:function(n){if(n.key){var e=iM[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Tc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?rM[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rp,charCode:function(n){return n.type==="keypress"?Tc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Tc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),lM=$n(aM),cM=Nt({},Mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rm=$n(cM),uM=Nt({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rp}),dM=$n(uM),fM=Nt({},Vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hM=$n(fM),pM=Nt({},Mu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),mM=$n(pM),gM=[9,13,27,32],sp=ir&&"CompositionEvent"in window,Ra=null;ir&&"documentMode"in document&&(Ra=document.documentMode);var _M=ir&&"TextEvent"in window&&!Ra,h0=ir&&(!sp||Ra&&8<Ra&&11>=Ra),bm=" ",Cm=!1;function p0(n,e){switch(n){case"keyup":return gM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var $s=!1;function vM(n,e){switch(n){case"compositionend":return m0(e);case"keypress":return e.which!==32?null:(Cm=!0,bm);case"textInput":return n=e.data,n===bm&&Cm?null:n;default:return null}}function yM(n,e){if($s)return n==="compositionend"||!sp&&p0(n,e)?(n=f0(),Ec=np=Ar=null,$s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return h0&&e.locale!=="ko"?null:e.data;default:return null}}var xM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!xM[n.type]:e==="textarea"}function g0(n,e,t,i){Yv(i),e=Yc(e,"onChange"),0<e.length&&(t=new ip("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ba=null,Va=null;function SM(n){R0(n,0)}function Eu(n){var e=Qs(n);if(zv(e))return n}function MM(n,e){if(n==="change")return e}var _0=!1;if(ir){var Qu;if(ir){var Ju="oninput"in document;if(!Ju){var Lm=document.createElement("div");Lm.setAttribute("oninput","return;"),Ju=typeof Lm.oninput=="function"}Qu=Ju}else Qu=!1;_0=Qu&&(!document.documentMode||9<document.documentMode)}function Dm(){ba&&(ba.detachEvent("onpropertychange",v0),Va=ba=null)}function v0(n){if(n.propertyName==="value"&&Eu(Va)){var e=[];g0(e,Va,n,Zh(n)),Zv(SM,e)}}function EM(n,e,t){n==="focusin"?(Dm(),ba=e,Va=t,ba.attachEvent("onpropertychange",v0)):n==="focusout"&&Dm()}function TM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Eu(Va)}function wM(n,e){if(n==="click")return Eu(e)}function AM(n,e){if(n==="input"||n==="change")return Eu(e)}function RM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Ti=typeof Object.is=="function"?Object.is:RM;function Ga(n,e){if(Ti(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!rf.call(e,r)||!Ti(n[r],e[r]))return!1}return!0}function Im(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Nm(n,e){var t=Im(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Im(t)}}function y0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?y0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function x0(){for(var n=window,e=zc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=zc(n.document)}return e}function op(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function bM(n){var e=x0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&y0(t.ownerDocument.documentElement,t)){if(i!==null&&op(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Nm(t,s);var o=Nm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var CM=ir&&"documentMode"in document&&11>=document.documentMode,qs=null,Ef=null,Ca=null,Tf=!1;function Um(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Tf||qs==null||qs!==zc(i)||(i=qs,"selectionStart"in i&&op(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ca&&Ga(Ca,i)||(Ca=i,i=Yc(Ef,"onSelect"),0<i.length&&(e=new ip("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=qs)))}function bl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Zs={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},ed={},S0={};ir&&(S0=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Tu(n){if(ed[n])return ed[n];if(!Zs[n])return n;var e=Zs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in S0)return ed[n]=e[t];return n}var M0=Tu("animationend"),E0=Tu("animationiteration"),T0=Tu("animationstart"),w0=Tu("transitionend"),A0=new Map,Om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vr(n,e){A0.set(n,e),Ms(e,[n])}for(var td=0;td<Om.length;td++){var nd=Om[td],PM=nd.toLowerCase(),LM=nd[0].toUpperCase()+nd.slice(1);Vr(PM,"on"+LM)}Vr(M0,"onAnimationEnd");Vr(E0,"onAnimationIteration");Vr(T0,"onAnimationStart");Vr("dblclick","onDoubleClick");Vr("focusin","onFocus");Vr("focusout","onBlur");Vr(w0,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DM=new Set("cancel close invalid load scroll toggle".split(" ").concat(xa));function Fm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,PS(i,e,void 0,n),n.currentTarget=null}function R0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fm(r,a,c),s=l}}}if(Vc)throw n=yf,Vc=!1,yf=null,n}function Tt(n,e){var t=e[Cf];t===void 0&&(t=e[Cf]=new Set);var i=n+"__bubble";t.has(i)||(b0(e,n,2,!1),t.add(i))}function id(n,e,t){var i=0;e&&(i|=4),b0(t,n,i,e)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function Wa(n){if(!n[Cl]){n[Cl]=!0,Uv.forEach(function(t){t!=="selectionchange"&&(DM.has(t)||id(t,!1,n),id(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Cl]||(e[Cl]=!0,id("selectionchange",!1,e))}}function b0(n,e,t,i){switch(d0(e)){case 1:var r=XS;break;case 4:r=YS;break;default:r=tp}t=r.bind(null,e,t,n),r=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function rd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=os(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Zv(function(){var c=s,u=Zh(t),d=[];e:{var f=A0.get(n);if(f!==void 0){var p=ip,g=n;switch(n){case"keypress":if(Tc(t)===0)break e;case"keydown":case"keyup":p=lM;break;case"focusin":g="focus",p=Zu;break;case"focusout":g="blur",p=Zu;break;case"beforeblur":case"afterblur":p=Zu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=dM;break;case M0:case E0:case T0:p=JS;break;case w0:p=hM;break;case"scroll":p=KS;break;case"wheel":p=mM;break;case"copy":case"cut":case"paste":p=tM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Rm}var _=(e&4)!==0,m=!_&&n==="scroll",h=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=Ba(v,h),x!=null&&_.push(ja(v,x,y)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==gf&&(g=t.relatedTarget||t.fromElement)&&(os(g)||g[rr]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?os(g):null,g!==null&&(m=Es(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(_=wm,x="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=Rm,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:Qs(p),y=g==null?f:Qs(g),f=new _(x,v+"leave",p,t,u),f.target=m,f.relatedTarget=y,x=null,os(u)===c&&(_=new _(h,v+"enter",g,t,u),_.target=y,_.relatedTarget=m,x=_),m=x,p&&g)t:{for(_=p,h=g,v=0,y=_;y;y=Rs(y))v++;for(y=0,x=h;x;x=Rs(x))y++;for(;0<v-y;)_=Rs(_),v--;for(;0<y-v;)h=Rs(h),y--;for(;v--;){if(_===h||h!==null&&_===h.alternate)break t;_=Rs(_),h=Rs(h)}_=null}else _=null;p!==null&&Bm(d,f,p,_,!1),g!==null&&m!==null&&Bm(d,m,g,_,!0)}}e:{if(f=c?Qs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=MM;else if(Pm(f))if(_0)b=AM;else{b=TM;var R=EM}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=wM);if(b&&(b=b(n,c))){g0(d,b,t,u);break e}R&&R(n,f,c),n==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&df(f,"number",f.value)}switch(R=c?Qs(c):window,n){case"focusin":(Pm(R)||R.contentEditable==="true")&&(qs=R,Ef=c,Ca=null);break;case"focusout":Ca=Ef=qs=null;break;case"mousedown":Tf=!0;break;case"contextmenu":case"mouseup":case"dragend":Tf=!1,Um(d,t,u);break;case"selectionchange":if(CM)break;case"keydown":case"keyup":Um(d,t,u)}var A;if(sp)e:{switch(n){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else $s?p0(n,t)&&(E="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(E="onCompositionStart");E&&(h0&&t.locale!=="ko"&&($s||E!=="onCompositionStart"?E==="onCompositionEnd"&&$s&&(A=f0()):(Ar=u,np="value"in Ar?Ar.value:Ar.textContent,$s=!0)),R=Yc(c,E),0<R.length&&(E=new Am(E,n,null,t,u),d.push({event:E,listeners:R}),A?E.data=A:(A=m0(t),A!==null&&(E.data=A)))),(A=_M?vM(n,t):yM(n,t))&&(c=Yc(c,"onBeforeInput"),0<c.length&&(u=new Am("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=A))}R0(d,e)})}function ja(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Yc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ba(n,t),s!=null&&i.unshift(ja(n,s,r)),s=Ba(n,e),s!=null&&i.push(ja(n,s,r))),n=n.return}return i}function Rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Bm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ba(t,s),l!=null&&o.unshift(ja(t,l,a))):r||(l=Ba(t,s),l!=null&&o.push(ja(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var IM=/\r\n?/g,NM=/\u0000|\uFFFD/g;function km(n){return(typeof n=="string"?n:""+n).replace(IM,`
`).replace(NM,"")}function Pl(n,e,t){if(e=km(e),km(n)!==e&&t)throw Error(le(425))}function Kc(){}var wf=null,Af=null;function Rf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bf=typeof setTimeout=="function"?setTimeout:void 0,UM=typeof clearTimeout=="function"?clearTimeout:void 0,zm=typeof Promise=="function"?Promise:void 0,OM=typeof queueMicrotask=="function"?queueMicrotask:typeof zm<"u"?function(n){return zm.resolve(null).then(n).catch(FM)}:bf;function FM(n){setTimeout(function(){throw n})}function sd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ha(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ha(e)}function Nr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Hm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Go=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Go,Xa="__reactProps$"+Go,rr="__reactContainer$"+Go,Cf="__reactEvents$"+Go,BM="__reactListeners$"+Go,kM="__reactHandles$"+Go;function os(n){var e=n[Ci];if(e)return e;for(var t=n.parentNode;t;){if(e=t[rr]||t[Ci]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Hm(n);n!==null;){if(t=n[Ci])return t;n=Hm(n)}return e}n=t,t=n.parentNode}return null}function ll(n){return n=n[Ci]||n[rr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(le(33))}function wu(n){return n[Xa]||null}var Pf=[],Js=-1;function Gr(n){return{current:n}}function wt(n){0>Js||(n.current=Pf[Js],Pf[Js]=null,Js--)}function Mt(n,e){Js++,Pf[Js]=n.current,n.current=e}var Hr={},gn=Gr(Hr),Nn=Gr(!1),ms=Hr;function Eo(n,e){var t=n.type.contextTypes;if(!t)return Hr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Un(n){return n=n.childContextTypes,n!=null}function $c(){wt(Nn),wt(gn)}function Vm(n,e,t){if(gn.current!==Hr)throw Error(le(168));Mt(gn,e),Mt(Nn,t)}function C0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,ES(n)||"Unknown",r));return Nt({},t,i)}function qc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Hr,ms=gn.current,Mt(gn,n),Mt(Nn,Nn.current),!0}function Gm(n,e,t){var i=n.stateNode;if(!i)throw Error(le(169));t?(n=C0(n,e,ms),i.__reactInternalMemoizedMergedChildContext=n,wt(Nn),wt(gn),Mt(gn,n)):wt(Nn),Mt(Nn,t)}var Ki=null,Au=!1,od=!1;function P0(n){Ki===null?Ki=[n]:Ki.push(n)}function zM(n){Au=!0,P0(n)}function Wr(){if(!od&&Ki!==null){od=!0;var n=0,e=mt;try{var t=Ki;for(mt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ki=null,Au=!1}catch(r){throw Ki!==null&&(Ki=Ki.slice(n+1)),t0(Qh,Wr),r}finally{mt=e,od=!1}}return null}var eo=[],to=0,Zc=null,Qc=0,ei=[],ti=0,gs=null,$i=1,qi="";function es(n,e){eo[to++]=Qc,eo[to++]=Zc,Zc=n,Qc=e}function L0(n,e,t){ei[ti++]=$i,ei[ti++]=qi,ei[ti++]=gs,gs=n;var i=$i;n=qi;var r=32-xi(i)-1;i&=~(1<<r),t+=1;var s=32-xi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,$i=1<<32-xi(e)+r|t<<r|i,qi=s+n}else $i=1<<s|t<<r|i,qi=n}function ap(n){n.return!==null&&(es(n,1),L0(n,1,0))}function lp(n){for(;n===Zc;)Zc=eo[--to],eo[to]=null,Qc=eo[--to],eo[to]=null;for(;n===gs;)gs=ei[--ti],ei[ti]=null,qi=ei[--ti],ei[ti]=null,$i=ei[--ti],ei[ti]=null}var Xn=null,Wn=null,bt=!1,gi=null;function D0(n,e){var t=ni(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Wm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Xn=n,Wn=Nr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Xn=n,Wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=gs!==null?{id:$i,overflow:qi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ni(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Xn=n,Wn=null,!0):!1;default:return!1}}function Lf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Df(n){if(bt){var e=Wn;if(e){var t=e;if(!Wm(n,e)){if(Lf(n))throw Error(le(418));e=Nr(t.nextSibling);var i=Xn;e&&Wm(n,e)?D0(i,t):(n.flags=n.flags&-4097|2,bt=!1,Xn=n)}}else{if(Lf(n))throw Error(le(418));n.flags=n.flags&-4097|2,bt=!1,Xn=n}}}function jm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Ll(n){if(n!==Xn)return!1;if(!bt)return jm(n),bt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Rf(n.type,n.memoizedProps)),e&&(e=Wn)){if(Lf(n))throw I0(),Error(le(418));for(;e;)D0(n,e),e=Nr(e.nextSibling)}if(jm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(le(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Wn=Nr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Wn=null}}else Wn=Xn?Nr(n.stateNode.nextSibling):null;return!0}function I0(){for(var n=Wn;n;)n=Nr(n.nextSibling)}function To(){Wn=Xn=null,bt=!1}function cp(n){gi===null?gi=[n]:gi.push(n)}var HM=cr.ReactCurrentBatchConfig;function ta(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(le(309));var i=t.stateNode}if(!i)throw Error(le(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(le(284));if(!t._owner)throw Error(le(290,n))}return n}function Dl(n,e){throw n=Object.prototype.toString.call(e),Error(le(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Xm(n){var e=n._init;return e(n._payload)}function N0(n){function e(h,v){if(n){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Br(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,n?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,x){return v===null||v.tag!==6?(v=hd(y,h.mode,x),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,x){var b=y.type;return b===Ks?u(h,v,y.props.children,x,y.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xr&&Xm(b)===v.type)?(x=r(v,y.props),x.ref=ta(h,v,y),x.return=h,x):(x=Lc(y.type,y.key,y.props,null,h.mode,x),x.ref=ta(h,v,y),x.return=h,x)}function c(h,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=pd(y,h.mode,x),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function u(h,v,y,x,b){return v===null||v.tag!==7?(v=fs(y,h.mode,x,b),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=hd(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Sl:return y=Lc(v.type,v.key,v.props,null,h.mode,y),y.ref=ta(h,null,v),y.return=h,y;case Ys:return v=pd(v,h.mode,y),v.return=h,v;case xr:var x=v._init;return d(h,x(v._payload),y)}if(va(v)||qo(v))return v=fs(v,h.mode,y,null),v.return=h,v;Dl(h,v)}return null}function f(h,v,y,x){var b=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:a(h,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Sl:return y.key===b?l(h,v,y,x):null;case Ys:return y.key===b?c(h,v,y,x):null;case xr:return b=y._init,f(h,v,b(y._payload),x)}if(va(y)||qo(y))return b!==null?null:u(h,v,y,x,null);Dl(h,y)}return null}function p(h,v,y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(v,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Sl:return h=h.get(x.key===null?y:x.key)||null,l(v,h,x,b);case Ys:return h=h.get(x.key===null?y:x.key)||null,c(v,h,x,b);case xr:var R=x._init;return p(h,v,y,R(x._payload),b)}if(va(x)||qo(x))return h=h.get(y)||null,u(v,h,x,b,null);Dl(v,x)}return null}function g(h,v,y,x){for(var b=null,R=null,A=v,E=v=0,w=null;A!==null&&E<y.length;E++){A.index>E?(w=A,A=null):w=A.sibling;var M=f(h,A,y[E],x);if(M===null){A===null&&(A=w);break}n&&A&&M.alternate===null&&e(h,A),v=s(M,v,E),R===null?b=M:R.sibling=M,R=M,A=w}if(E===y.length)return t(h,A),bt&&es(h,E),b;if(A===null){for(;E<y.length;E++)A=d(h,y[E],x),A!==null&&(v=s(A,v,E),R===null?b=A:R.sibling=A,R=A);return bt&&es(h,E),b}for(A=i(h,A);E<y.length;E++)w=p(A,h,E,y[E],x),w!==null&&(n&&w.alternate!==null&&A.delete(w.key===null?E:w.key),v=s(w,v,E),R===null?b=w:R.sibling=w,R=w);return n&&A.forEach(function(L){return e(h,L)}),bt&&es(h,E),b}function _(h,v,y,x){var b=qo(y);if(typeof b!="function")throw Error(le(150));if(y=b.call(y),y==null)throw Error(le(151));for(var R=b=null,A=v,E=v=0,w=null,M=y.next();A!==null&&!M.done;E++,M=y.next()){A.index>E?(w=A,A=null):w=A.sibling;var L=f(h,A,M.value,x);if(L===null){A===null&&(A=w);break}n&&A&&L.alternate===null&&e(h,A),v=s(L,v,E),R===null?b=L:R.sibling=L,R=L,A=w}if(M.done)return t(h,A),bt&&es(h,E),b;if(A===null){for(;!M.done;E++,M=y.next())M=d(h,M.value,x),M!==null&&(v=s(M,v,E),R===null?b=M:R.sibling=M,R=M);return bt&&es(h,E),b}for(A=i(h,A);!M.done;E++,M=y.next())M=p(A,h,E,M.value,x),M!==null&&(n&&M.alternate!==null&&A.delete(M.key===null?E:M.key),v=s(M,v,E),R===null?b=M:R.sibling=M,R=M);return n&&A.forEach(function(W){return e(h,W)}),bt&&es(h,E),b}function m(h,v,y,x){if(typeof y=="object"&&y!==null&&y.type===Ks&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Sl:e:{for(var b=y.key,R=v;R!==null;){if(R.key===b){if(b=y.type,b===Ks){if(R.tag===7){t(h,R.sibling),v=r(R,y.props.children),v.return=h,h=v;break e}}else if(R.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===xr&&Xm(b)===R.type){t(h,R.sibling),v=r(R,y.props),v.ref=ta(h,R,y),v.return=h,h=v;break e}t(h,R);break}else e(h,R);R=R.sibling}y.type===Ks?(v=fs(y.props.children,h.mode,x,y.key),v.return=h,h=v):(x=Lc(y.type,y.key,y.props,null,h.mode,x),x.ref=ta(h,v,y),x.return=h,h=x)}return o(h);case Ys:e:{for(R=y.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){t(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=pd(y,h.mode,x),v.return=h,h=v}return o(h);case xr:return R=y._init,m(h,v,R(y._payload),x)}if(va(y))return g(h,v,y,x);if(qo(y))return _(h,v,y,x);Dl(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,y),v.return=h,h=v):(t(h,v),v=hd(y,h.mode,x),v.return=h,h=v),o(h)):t(h,v)}return m}var wo=N0(!0),U0=N0(!1),Jc=Gr(null),eu=null,no=null,up=null;function dp(){up=no=eu=null}function fp(n){var e=Jc.current;wt(Jc),n._currentValue=e}function If(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ho(n,e){eu=n,up=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(In=!0),n.firstContext=null)}function ri(n){var e=n._currentValue;if(up!==n)if(n={context:n,memoizedValue:e,next:null},no===null){if(eu===null)throw Error(le(308));no=n,eu.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return e}var as=null;function hp(n){as===null?as=[n]:as.push(n)}function O0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,hp(e)):(t.next=r.next,r.next=t),e.interleaved=t,sr(n,i)}function sr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var Sr=!1;function pp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function tr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ur(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,sr(n,t)}return r=i.interleaved,r===null?(e.next=e,hp(i)):(e.next=r.next,r.next=e),i.interleaved=e,sr(n,t)}function wc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Jh(n,t)}}function Ym(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function tu(n,e,t,i){var r=n.updateQueue;Sr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){d=g.call(p,d,f);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,d,f):g,f==null)break e;d=Nt({},d,f);break e;case 2:Sr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vs|=o,n.lanes=o,n.memoizedState=d}}function Km(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var cl={},Ii=Gr(cl),Ya=Gr(cl),Ka=Gr(cl);function ls(n){if(n===cl)throw Error(le(174));return n}function mp(n,e){switch(Mt(Ka,e),Mt(Ya,n),Mt(Ii,cl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=hf(e,n)}wt(Ii),Mt(Ii,e)}function Ao(){wt(Ii),wt(Ya),wt(Ka)}function B0(n){ls(Ka.current);var e=ls(Ii.current),t=hf(e,n.type);e!==t&&(Mt(Ya,n),Mt(Ii,t))}function gp(n){Ya.current===n&&(wt(Ii),wt(Ya))}var Lt=Gr(0);function nu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ad=[];function _p(){for(var n=0;n<ad.length;n++)ad[n]._workInProgressVersionPrimary=null;ad.length=0}var Ac=cr.ReactCurrentDispatcher,ld=cr.ReactCurrentBatchConfig,_s=0,Dt=null,jt=null,Zt=null,iu=!1,Pa=!1,$a=0,VM=0;function un(){throw Error(le(321))}function vp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Ti(n[t],e[t]))return!1;return!0}function yp(n,e,t,i,r,s){if(_s=s,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ac.current=n===null||n.memoizedState===null?XM:YM,n=t(i,r),Pa){s=0;do{if(Pa=!1,$a=0,25<=s)throw Error(le(301));s+=1,Zt=jt=null,e.updateQueue=null,Ac.current=KM,n=t(i,r)}while(Pa)}if(Ac.current=ru,e=jt!==null&&jt.next!==null,_s=0,Zt=jt=Dt=null,iu=!1,e)throw Error(le(300));return n}function xp(){var n=$a!==0;return $a=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Dt.memoizedState=Zt=n:Zt=Zt.next=n,Zt}function si(){if(jt===null){var n=Dt.alternate;n=n!==null?n.memoizedState:null}else n=jt.next;var e=Zt===null?Dt.memoizedState:Zt.next;if(e!==null)Zt=e,jt=n;else{if(n===null)throw Error(le(310));jt=n,n={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},Zt===null?Dt.memoizedState=Zt=n:Zt=Zt.next=n}return Zt}function qa(n,e){return typeof e=="function"?e(n):e}function cd(n){var e=si(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=jt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((_s&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Dt.lanes|=u,vs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Ti(i,e.memoizedState)||(In=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Dt.lanes|=s,vs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ud(n){var e=si(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Ti(s,e.memoizedState)||(In=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function k0(){}function z0(n,e){var t=Dt,i=si(),r=e(),s=!Ti(i.memoizedState,r);if(s&&(i.memoizedState=r,In=!0),i=i.queue,Sp(G0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Zt!==null&&Zt.memoizedState.tag&1){if(t.flags|=2048,Za(9,V0.bind(null,t,i,r,e),void 0,null),Jt===null)throw Error(le(349));_s&30||H0(t,e,r)}return r}function H0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function V0(n,e,t,i){e.value=t,e.getSnapshot=i,W0(e)&&j0(n)}function G0(n,e,t){return t(function(){W0(e)&&j0(n)})}function W0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Ti(n,t)}catch{return!0}}function j0(n){var e=sr(n,1);e!==null&&Si(e,n,1,-1)}function $m(n){var e=bi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},e.queue=n,n=n.dispatch=jM.bind(null,Dt,n),[e.memoizedState,n]}function Za(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function X0(){return si().memoizedState}function Rc(n,e,t,i){var r=bi();Dt.flags|=n,r.memoizedState=Za(1|e,t,void 0,i===void 0?null:i)}function Ru(n,e,t,i){var r=si();i=i===void 0?null:i;var s=void 0;if(jt!==null){var o=jt.memoizedState;if(s=o.destroy,i!==null&&vp(i,o.deps)){r.memoizedState=Za(e,t,s,i);return}}Dt.flags|=n,r.memoizedState=Za(1|e,t,s,i)}function qm(n,e){return Rc(8390656,8,n,e)}function Sp(n,e){return Ru(2048,8,n,e)}function Y0(n,e){return Ru(4,2,n,e)}function K0(n,e){return Ru(4,4,n,e)}function $0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function q0(n,e,t){return t=t!=null?t.concat([n]):null,Ru(4,4,$0.bind(null,e,n),t)}function Mp(){}function Z0(n,e){var t=si();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function Q0(n,e){var t=si();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function J0(n,e,t){return _s&21?(Ti(t,e)||(t=r0(),Dt.lanes|=t,vs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=t)}function GM(n,e){var t=mt;mt=t!==0&&4>t?t:4,n(!0);var i=ld.transition;ld.transition={};try{n(!1),e()}finally{mt=t,ld.transition=i}}function ey(){return si().memoizedState}function WM(n,e,t){var i=Fr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ty(n))ny(e,t);else if(t=O0(n,e,t,i),t!==null){var r=wn();Si(t,n,i,r),iy(t,e,i)}}function jM(n,e,t){var i=Fr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ty(n))ny(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Ti(a,o)){var l=e.interleaved;l===null?(r.next=r,hp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=O0(n,e,r,i),t!==null&&(r=wn(),Si(t,n,i,r),iy(t,e,i))}}function ty(n){var e=n.alternate;return n===Dt||e!==null&&e===Dt}function ny(n,e){Pa=iu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function iy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Jh(n,t)}}var ru={readContext:ri,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},XM={readContext:ri,useCallback:function(n,e){return bi().memoizedState=[n,e===void 0?null:e],n},useContext:ri,useEffect:qm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Rc(4194308,4,$0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Rc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Rc(4,2,n,e)},useMemo:function(n,e){var t=bi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=bi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=WM.bind(null,Dt,n),[i.memoizedState,n]},useRef:function(n){var e=bi();return n={current:n},e.memoizedState=n},useState:$m,useDebugValue:Mp,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=$m(!1),e=n[0];return n=GM.bind(null,n[1]),bi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Dt,r=bi();if(bt){if(t===void 0)throw Error(le(407));t=t()}else{if(t=e(),Jt===null)throw Error(le(349));_s&30||H0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,qm(G0.bind(null,i,s,n),[n]),i.flags|=2048,Za(9,V0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=bi(),e=Jt.identifierPrefix;if(bt){var t=qi,i=$i;t=(i&~(1<<32-xi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=$a++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=VM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},YM={readContext:ri,useCallback:Z0,useContext:ri,useEffect:Sp,useImperativeHandle:q0,useInsertionEffect:Y0,useLayoutEffect:K0,useMemo:Q0,useReducer:cd,useRef:X0,useState:function(){return cd(qa)},useDebugValue:Mp,useDeferredValue:function(n){var e=si();return J0(e,jt.memoizedState,n)},useTransition:function(){var n=cd(qa)[0],e=si().memoizedState;return[n,e]},useMutableSource:k0,useSyncExternalStore:z0,useId:ey,unstable_isNewReconciler:!1},KM={readContext:ri,useCallback:Z0,useContext:ri,useEffect:Sp,useImperativeHandle:q0,useInsertionEffect:Y0,useLayoutEffect:K0,useMemo:Q0,useReducer:ud,useRef:X0,useState:function(){return ud(qa)},useDebugValue:Mp,useDeferredValue:function(n){var e=si();return jt===null?e.memoizedState=n:J0(e,jt.memoizedState,n)},useTransition:function(){var n=ud(qa)[0],e=si().memoizedState;return[n,e]},useMutableSource:k0,useSyncExternalStore:z0,useId:ey,unstable_isNewReconciler:!1};function hi(n,e){if(n&&n.defaultProps){e=Nt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Nf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Nt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var bu={isMounted:function(n){return(n=n._reactInternals)?Es(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=wn(),r=Fr(n),s=tr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ur(n,s,r),e!==null&&(Si(e,n,r,i),wc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=wn(),r=Fr(n),s=tr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ur(n,s,r),e!==null&&(Si(e,n,r,i),wc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=wn(),i=Fr(n),r=tr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ur(n,r,i),e!==null&&(Si(e,n,i,t),wc(e,n,i))}};function Zm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ga(t,i)||!Ga(r,s):!0}function ry(n,e,t){var i=!1,r=Hr,s=e.contextType;return typeof s=="object"&&s!==null?s=ri(s):(r=Un(e)?ms:gn.current,i=e.contextTypes,s=(i=i!=null)?Eo(n,r):Hr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bu,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Qm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&bu.enqueueReplaceState(e,e.state,null)}function Uf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},pp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ri(s):(s=Un(e)?ms:gn.current,r.context=Eo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bu.enqueueReplaceState(r,r.state,null),tu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ro(n,e){try{var t="",i=e;do t+=MS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function dd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Of(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var $M=typeof WeakMap=="function"?WeakMap:Map;function sy(n,e,t){t=tr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ou||(ou=!0,Xf=i),Of(n,e)},t}function oy(n,e,t){t=tr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Of(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Of(n,e),typeof i!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Jm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new $M;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=cE.bind(null,n,e,t),e.then(n,n))}function eg(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function tg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=tr(-1,1),e.tag=2,Ur(t,e,1))),t.lanes|=1),n)}var qM=cr.ReactCurrentOwner,In=!1;function xn(n,e,t,i){e.child=n===null?U0(e,null,t,i):wo(e,n.child,t,i)}function ng(n,e,t,i,r){t=t.render;var s=e.ref;return ho(e,r),i=yp(n,e,t,i,s,r),t=xp(),n!==null&&!In?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,or(n,e,r)):(bt&&t&&ap(e),e.flags|=1,xn(n,e,i,r),e.child)}function ig(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Pp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,ay(n,e,s,i,r)):(n=Lc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ga,t(o,i)&&n.ref===e.ref)return or(n,e,r)}return e.flags|=1,n=Br(s,i),n.ref=e.ref,n.return=e,e.child=n}function ay(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ga(s,i)&&n.ref===e.ref)if(In=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(In=!0);else return e.lanes=n.lanes,or(n,e,r)}return Ff(n,e,t,i,r)}function ly(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Mt(ro,Vn),Vn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Mt(ro,Vn),Vn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Mt(ro,Vn),Vn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Mt(ro,Vn),Vn|=i;return xn(n,e,r,t),e.child}function cy(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ff(n,e,t,i,r){var s=Un(t)?ms:gn.current;return s=Eo(e,s),ho(e,r),t=yp(n,e,t,i,s,r),i=xp(),n!==null&&!In?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,or(n,e,r)):(bt&&i&&ap(e),e.flags|=1,xn(n,e,t,r),e.child)}function rg(n,e,t,i,r){if(Un(t)){var s=!0;qc(e)}else s=!1;if(ho(e,r),e.stateNode===null)bc(n,e),ry(e,t,i),Uf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=ri(c):(c=Un(t)?ms:gn.current,c=Eo(e,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Qm(e,o,i,c),Sr=!1;var f=e.memoizedState;o.state=f,tu(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Nn.current||Sr?(typeof u=="function"&&(Nf(e,t,u,i),l=e.memoizedState),(a=Sr||Zm(e,t,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,F0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:hi(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ri(l):(l=Un(t)?ms:gn.current,l=Eo(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Qm(e,o,i,l),Sr=!1,f=e.memoizedState,o.state=f,tu(e,i,o,r);var g=e.memoizedState;a!==d||f!==g||Nn.current||Sr?(typeof p=="function"&&(Nf(e,t,p,i),g=e.memoizedState),(c=Sr||Zm(e,t,c,i,f,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Bf(n,e,t,i,s,r)}function Bf(n,e,t,i,r,s){cy(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Gm(e,t,!1),or(n,e,s);i=e.stateNode,qM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=wo(e,n.child,null,s),e.child=wo(e,null,a,s)):xn(n,e,a,s),e.memoizedState=i.state,r&&Gm(e,t,!0),e.child}function uy(n){var e=n.stateNode;e.pendingContext?Vm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Vm(n,e.context,!1),mp(n,e.containerInfo)}function sg(n,e,t,i,r){return To(),cp(r),e.flags|=256,xn(n,e,t,i),e.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function zf(n){return{baseLanes:n,cachePool:null,transitions:null}}function dy(n,e,t){var i=e.pendingProps,r=Lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Mt(Lt,r&1),n===null)return Df(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lu(o,i,0,null),n=fs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=zf(t),e.memoizedState=kf,n):Ep(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return ZM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Br(a,s):(s=fs(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?zf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=kf,i}return s=n.child,n=s.sibling,i=Br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Ep(n,e){return e=Lu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Il(n,e,t,i){return i!==null&&cp(i),wo(e,n.child,null,t),n=Ep(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function ZM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=dd(Error(le(422))),Il(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Lu({mode:"visible",children:i.children},r,0,null),s=fs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&wo(e,n.child,null,o),e.child.memoizedState=zf(o),e.memoizedState=kf,s);if(!(e.mode&1))return Il(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=dd(s,i,void 0),Il(n,e,o,i)}if(a=(o&n.childLanes)!==0,In||a){if(i=Jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,sr(n,r),Si(i,n,r,-1))}return Cp(),i=dd(Error(le(421))),Il(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=uE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Wn=Nr(r.nextSibling),Xn=e,bt=!0,gi=null,n!==null&&(ei[ti++]=$i,ei[ti++]=qi,ei[ti++]=gs,$i=n.id,qi=n.overflow,gs=e),e=Ep(e,i.children),e.flags|=4096,e)}function og(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),If(n.return,e,t)}function fd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function fy(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(n,e,i.children,t),i=Lt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&og(n,t,e);else if(n.tag===19)og(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Mt(Lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&nu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),fd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&nu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}fd(e,!0,t,null,s);break;case"together":fd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function or(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),vs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(le(153));if(e.child!==null){for(n=e.child,t=Br(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Br(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function QM(n,e,t){switch(e.tag){case 3:uy(e),To();break;case 5:B0(e);break;case 1:Un(e.type)&&qc(e);break;case 4:mp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Mt(Jc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Mt(Lt,Lt.current&1),e.flags|=128,null):t&e.child.childLanes?dy(n,e,t):(Mt(Lt,Lt.current&1),n=or(n,e,t),n!==null?n.sibling:null);Mt(Lt,Lt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return fy(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Mt(Lt,Lt.current),i)break;return null;case 22:case 23:return e.lanes=0,ly(n,e,t)}return or(n,e,t)}var hy,Hf,py,my;hy=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Hf=function(){};py=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ls(Ii.current);var s=null;switch(t){case"input":r=cf(n,r),i=cf(n,i),s=[];break;case"select":r=Nt({},r,{value:void 0}),i=Nt({},i,{value:void 0}),s=[];break;case"textarea":r=ff(n,r),i=ff(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Kc)}pf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Tt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};my=function(n,e,t,i){t!==i&&(e.flags|=4)};function na(n,e){if(!bt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function dn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function JM(n,e,t){var i=e.pendingProps;switch(lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(e),null;case 1:return Un(e.type)&&$c(),dn(e),null;case 3:return i=e.stateNode,Ao(),wt(Nn),wt(gn),_p(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ll(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gi!==null&&($f(gi),gi=null))),Hf(n,e),dn(e),null;case 5:gp(e);var r=ls(Ka.current);if(t=e.type,n!==null&&e.stateNode!=null)py(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return dn(e),null}if(n=ls(Ii.current),Ll(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ci]=e,i[Xa]=s,n=(e.mode&1)!==0,t){case"dialog":Tt("cancel",i),Tt("close",i);break;case"iframe":case"object":case"embed":Tt("load",i);break;case"video":case"audio":for(r=0;r<xa.length;r++)Tt(xa[r],i);break;case"source":Tt("error",i);break;case"img":case"image":case"link":Tt("error",i),Tt("load",i);break;case"details":Tt("toggle",i);break;case"input":mm(i,s),Tt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Tt("invalid",i);break;case"textarea":_m(i,s),Tt("invalid",i)}pf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pl(i.textContent,a,n),r=["children",""+a]):Oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Tt("scroll",i)}switch(t){case"input":Ml(i),gm(i,s,!0);break;case"textarea":Ml(i),vm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Kc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Gv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ci]=e,n[Xa]=i,hy(n,e,!1,!1),e.stateNode=n;e:{switch(o=mf(t,i),t){case"dialog":Tt("cancel",n),Tt("close",n),r=i;break;case"iframe":case"object":case"embed":Tt("load",n),r=i;break;case"video":case"audio":for(r=0;r<xa.length;r++)Tt(xa[r],n);r=i;break;case"source":Tt("error",n),r=i;break;case"img":case"image":case"link":Tt("error",n),Tt("load",n),r=i;break;case"details":Tt("toggle",n),r=i;break;case"input":mm(n,i),r=cf(n,i),Tt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Nt({},i,{value:void 0}),Tt("invalid",n);break;case"textarea":_m(n,i),r=ff(n,i),Tt("invalid",n);break;default:r=i}pf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Xv(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Wv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Fa(n,l):typeof l=="number"&&Fa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Tt("scroll",n):l!=null&&Yh(n,s,l,o))}switch(t){case"input":Ml(n),gm(n,i,!1);break;case"textarea":Ml(n),vm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+zr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?lo(n,!!i.multiple,s,!1):i.defaultValue!=null&&lo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Kc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dn(e),null;case 6:if(n&&e.stateNode!=null)my(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(t=ls(Ka.current),ls(Ii.current),Ll(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ci]=e,(s=i.nodeValue!==t)&&(n=Xn,n!==null))switch(n.tag){case 3:Pl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ci]=e,e.stateNode=i}return dn(e),null;case 13:if(wt(Lt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(bt&&Wn!==null&&e.mode&1&&!(e.flags&128))I0(),To(),e.flags|=98560,s=!1;else if(s=Ll(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[Ci]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dn(e),s=!1}else gi!==null&&($f(gi),gi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Lt.current&1?Xt===0&&(Xt=3):Cp())),e.updateQueue!==null&&(e.flags|=4),dn(e),null);case 4:return Ao(),Hf(n,e),n===null&&Wa(e.stateNode.containerInfo),dn(e),null;case 10:return fp(e.type._context),dn(e),null;case 17:return Un(e.type)&&$c(),dn(e),null;case 19:if(wt(Lt),s=e.memoizedState,s===null)return dn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)na(s,!1);else{if(Xt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=nu(n),o!==null){for(e.flags|=128,na(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Mt(Lt,Lt.current&1|2),e.child}n=n.sibling}s.tail!==null&&kt()>bo&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304)}else{if(!i)if(n=nu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!bt)return dn(e),null}else 2*kt()-s.renderingStartTime>bo&&t!==1073741824&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=kt(),e.sibling=null,t=Lt.current,Mt(Lt,i?t&1|2:t&1),e):(dn(e),null);case 22:case 23:return bp(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Vn&1073741824&&(dn(e),e.subtreeFlags&6&&(e.flags|=8192)):dn(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function eE(n,e){switch(lp(e),e.tag){case 1:return Un(e.type)&&$c(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ao(),wt(Nn),wt(gn),_p(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return gp(e),null;case 13:if(wt(Lt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(le(340));To()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return wt(Lt),null;case 4:return Ao(),null;case 10:return fp(e.type._context),null;case 22:case 23:return bp(),null;case 24:return null;default:return null}}var Nl=!1,pn=!1,tE=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function io(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Bt(n,e,i)}else t.current=null}function Vf(n,e,t){try{t()}catch(i){Bt(n,e,i)}}var ag=!1;function nE(n,e){if(wf=jc,n=x0(),op(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Af={focusedElem:n,selectionRange:t},jc=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?_:hi(e.type,_),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(x){Bt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return g=ag,ag=!1,g}function La(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vf(e,t,s)}r=r.next}while(r!==i)}}function Cu(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Gf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function gy(n){var e=n.alternate;e!==null&&(n.alternate=null,gy(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ci],delete e[Xa],delete e[Cf],delete e[BM],delete e[kM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function _y(n){return n.tag===5||n.tag===3||n.tag===4}function lg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||_y(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Kc));else if(i!==4&&(n=n.child,n!==null))for(Wf(n,e,t),n=n.sibling;n!==null;)Wf(n,e,t),n=n.sibling}function jf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(jf(n,e,t),n=n.sibling;n!==null;)jf(n,e,t),n=n.sibling}var rn=null,pi=!1;function dr(n,e,t){for(t=t.child;t!==null;)vy(n,e,t),t=t.sibling}function vy(n,e,t){if(Di&&typeof Di.onCommitFiberUnmount=="function")try{Di.onCommitFiberUnmount(Su,t)}catch{}switch(t.tag){case 5:pn||io(t,e);case 6:var i=rn,r=pi;rn=null,dr(n,e,t),rn=i,pi=r,rn!==null&&(pi?(n=rn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):rn.removeChild(t.stateNode));break;case 18:rn!==null&&(pi?(n=rn,t=t.stateNode,n.nodeType===8?sd(n.parentNode,t):n.nodeType===1&&sd(n,t),Ha(n)):sd(rn,t.stateNode));break;case 4:i=rn,r=pi,rn=t.stateNode.containerInfo,pi=!0,dr(n,e,t),rn=i,pi=r;break;case 0:case 11:case 14:case 15:if(!pn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vf(t,e,o),r=r.next}while(r!==i)}dr(n,e,t);break;case 1:if(!pn&&(io(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Bt(t,e,a)}dr(n,e,t);break;case 21:dr(n,e,t);break;case 22:t.mode&1?(pn=(i=pn)||t.memoizedState!==null,dr(n,e,t),pn=i):dr(n,e,t);break;default:dr(n,e,t)}}function cg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new tE),e.forEach(function(i){var r=dE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ci(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rn=a.stateNode,pi=!1;break e;case 3:rn=a.stateNode.containerInfo,pi=!0;break e;case 4:rn=a.stateNode.containerInfo,pi=!0;break e}a=a.return}if(rn===null)throw Error(le(160));vy(s,o,r),rn=null,pi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yy(e,n),e=e.sibling}function yy(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(e,n),wi(n),i&4){try{La(3,n,n.return),Cu(3,n)}catch(_){Bt(n,n.return,_)}try{La(5,n,n.return)}catch(_){Bt(n,n.return,_)}}break;case 1:ci(e,n),wi(n),i&512&&t!==null&&io(t,t.return);break;case 5:if(ci(e,n),wi(n),i&512&&t!==null&&io(t,t.return),n.flags&32){var r=n.stateNode;try{Fa(r,"")}catch(_){Bt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hv(r,s),mf(a,o);var c=mf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?Xv(r,d):u==="dangerouslySetInnerHTML"?Wv(r,d):u==="children"?Fa(r,d):Yh(r,u,d,c)}switch(a){case"input":uf(r,s);break;case"textarea":Vv(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xa]=s}catch(_){Bt(n,n.return,_)}}break;case 6:if(ci(e,n),wi(n),i&4){if(n.stateNode===null)throw Error(le(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Bt(n,n.return,_)}}break;case 3:if(ci(e,n),wi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(_){Bt(n,n.return,_)}break;case 4:ci(e,n),wi(n);break;case 13:ci(e,n),wi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ap=kt())),i&4&&cg(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(pn=(c=pn)||u,ci(e,n),pn=c):ci(e,n),wi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Ee=n,u=n.child;u!==null;){for(d=Ee=u;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:La(4,f,f.return);break;case 1:io(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Bt(i,t,_)}}break;case 5:io(f,f.return);break;case 22:if(f.memoizedState!==null){dg(d);continue}}p!==null?(p.return=f,Ee=p):dg(d)}u=u.sibling}e:for(u=null,d=n;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jv("display",o))}catch(_){Bt(n,n.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){Bt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ci(e,n),wi(n),i&4&&cg(n);break;case 21:break;default:ci(e,n),wi(n)}}function wi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(_y(t)){var i=t;break e}t=t.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fa(r,""),i.flags&=-33);var s=lg(n);jf(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=lg(n);Wf(n,a,o);break;default:throw Error(le(161))}}catch(l){Bt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function iE(n,e,t){Ee=n,xy(n)}function xy(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Nl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||pn;a=Nl;var c=pn;if(Nl=o,(pn=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?fg(r):l!==null?(l.return=o,Ee=l):fg(r);for(;s!==null;)Ee=s,xy(s),s=s.sibling;Ee=r,Nl=a,pn=c}ug(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):ug(n)}}function ug(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:pn||Cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!pn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:hi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Km(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Km(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ha(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}pn||e.flags&512&&Gf(e)}catch(f){Bt(e,e.return,f)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function dg(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function fg(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Cu(4,e)}catch(l){Bt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Bt(e,r,l)}}var s=e.return;try{Gf(e)}catch(l){Bt(e,s,l)}break;case 5:var o=e.return;try{Gf(e)}catch(l){Bt(e,o,l)}}}catch(l){Bt(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var rE=Math.ceil,su=cr.ReactCurrentDispatcher,Tp=cr.ReactCurrentOwner,ii=cr.ReactCurrentBatchConfig,ut=0,Jt=null,Vt=null,an=0,Vn=0,ro=Gr(0),Xt=0,Qa=null,vs=0,Pu=0,wp=0,Da=null,Ln=null,Ap=0,bo=1/0,Xi=null,ou=!1,Xf=null,Or=null,Ul=!1,Rr=null,au=0,Ia=0,Yf=null,Cc=-1,Pc=0;function wn(){return ut&6?kt():Cc!==-1?Cc:Cc=kt()}function Fr(n){return n.mode&1?ut&2&&an!==0?an&-an:HM.transition!==null?(Pc===0&&(Pc=r0()),Pc):(n=mt,n!==0||(n=window.event,n=n===void 0?16:d0(n.type)),n):1}function Si(n,e,t,i){if(50<Ia)throw Ia=0,Yf=null,Error(le(185));ol(n,t,i),(!(ut&2)||n!==Jt)&&(n===Jt&&(!(ut&2)&&(Pu|=t),Xt===4&&Tr(n,an)),On(n,i),t===1&&ut===0&&!(e.mode&1)&&(bo=kt()+500,Au&&Wr()))}function On(n,e){var t=n.callbackNode;HS(n,e);var i=Wc(n,n===Jt?an:0);if(i===0)t!==null&&Sm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Sm(t),e===1)n.tag===0?zM(hg.bind(null,n)):P0(hg.bind(null,n)),OM(function(){!(ut&6)&&Wr()}),t=null;else{switch(s0(i)){case 1:t=Qh;break;case 4:t=n0;break;case 16:t=Gc;break;case 536870912:t=i0;break;default:t=Gc}t=by(t,Sy.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Sy(n,e){if(Cc=-1,Pc=0,ut&6)throw Error(le(327));var t=n.callbackNode;if(po()&&n.callbackNode!==t)return null;var i=Wc(n,n===Jt?an:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=lu(n,i);else{e=i;var r=ut;ut|=2;var s=Ey();(Jt!==n||an!==e)&&(Xi=null,bo=kt()+500,ds(n,e));do try{aE();break}catch(a){My(n,a)}while(!0);dp(),su.current=s,ut=r,Vt!==null?e=0:(Jt=null,an=0,e=Xt)}if(e!==0){if(e===2&&(r=xf(n),r!==0&&(i=r,e=Kf(n,r))),e===1)throw t=Qa,ds(n,0),Tr(n,i),On(n,kt()),t;if(e===6)Tr(n,i);else{if(r=n.current.alternate,!(i&30)&&!sE(r)&&(e=lu(n,i),e===2&&(s=xf(n),s!==0&&(i=s,e=Kf(n,s))),e===1))throw t=Qa,ds(n,0),Tr(n,i),On(n,kt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:ts(n,Ln,Xi);break;case 3:if(Tr(n,i),(i&130023424)===i&&(e=Ap+500-kt(),10<e)){if(Wc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){wn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=bf(ts.bind(null,n,Ln,Xi),e);break}ts(n,Ln,Xi);break;case 4:if(Tr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-xi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=kt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*rE(i/1960))-i,10<i){n.timeoutHandle=bf(ts.bind(null,n,Ln,Xi),i);break}ts(n,Ln,Xi);break;case 5:ts(n,Ln,Xi);break;default:throw Error(le(329))}}}return On(n,kt()),n.callbackNode===t?Sy.bind(null,n):null}function Kf(n,e){var t=Da;return n.current.memoizedState.isDehydrated&&(ds(n,e).flags|=256),n=lu(n,e),n!==2&&(e=Ln,Ln=t,e!==null&&$f(e)),n}function $f(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function sE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Ti(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tr(n,e){for(e&=~wp,e&=~Pu,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-xi(e),i=1<<t;n[t]=-1,e&=~i}}function hg(n){if(ut&6)throw Error(le(327));po();var e=Wc(n,0);if(!(e&1))return On(n,kt()),null;var t=lu(n,e);if(n.tag!==0&&t===2){var i=xf(n);i!==0&&(e=i,t=Kf(n,i))}if(t===1)throw t=Qa,ds(n,0),Tr(n,e),On(n,kt()),t;if(t===6)throw Error(le(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ts(n,Ln,Xi),On(n,kt()),null}function Rp(n,e){var t=ut;ut|=1;try{return n(e)}finally{ut=t,ut===0&&(bo=kt()+500,Au&&Wr())}}function ys(n){Rr!==null&&Rr.tag===0&&!(ut&6)&&po();var e=ut;ut|=1;var t=ii.transition,i=mt;try{if(ii.transition=null,mt=1,n)return n()}finally{mt=i,ii.transition=t,ut=e,!(ut&6)&&Wr()}}function bp(){Vn=ro.current,wt(ro)}function ds(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,UM(t)),Vt!==null)for(t=Vt.return;t!==null;){var i=t;switch(lp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&$c();break;case 3:Ao(),wt(Nn),wt(gn),_p();break;case 5:gp(i);break;case 4:Ao();break;case 13:wt(Lt);break;case 19:wt(Lt);break;case 10:fp(i.type._context);break;case 22:case 23:bp()}t=t.return}if(Jt=n,Vt=n=Br(n.current,null),an=Vn=e,Xt=0,Qa=null,wp=Pu=vs=0,Ln=Da=null,as!==null){for(e=0;e<as.length;e++)if(t=as[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}as=null}return n}function My(n,e){do{var t=Vt;try{if(dp(),Ac.current=ru,iu){for(var i=Dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}iu=!1}if(_s=0,Zt=jt=Dt=null,Pa=!1,$a=0,Tp.current=null,t===null||t.return===null){Xt=1,Qa=e,Vt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=an,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=eg(o);if(p!==null){p.flags&=-257,tg(p,o,a,s,e),p.mode&1&&Jm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Jm(s,c,e),Cp();break e}l=Error(le(426))}}else if(bt&&a.mode&1){var m=eg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),tg(m,o,a,s,e),cp(Ro(l,a));break e}}s=l=Ro(l,a),Xt!==4&&(Xt=2),Da===null?Da=[s]:Da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=sy(s,l,e);Ym(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Or===null||!Or.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=oy(s,a,e);Ym(s,x);break e}}s=s.return}while(s!==null)}wy(t)}catch(b){e=b,Vt===t&&t!==null&&(Vt=t=t.return);continue}break}while(!0)}function Ey(){var n=su.current;return su.current=ru,n===null?ru:n}function Cp(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Jt===null||!(vs&268435455)&&!(Pu&268435455)||Tr(Jt,an)}function lu(n,e){var t=ut;ut|=2;var i=Ey();(Jt!==n||an!==e)&&(Xi=null,ds(n,e));do try{oE();break}catch(r){My(n,r)}while(!0);if(dp(),ut=t,su.current=i,Vt!==null)throw Error(le(261));return Jt=null,an=0,Xt}function oE(){for(;Vt!==null;)Ty(Vt)}function aE(){for(;Vt!==null&&!DS();)Ty(Vt)}function Ty(n){var e=Ry(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,e===null?wy(n):Vt=e,Tp.current=null}function wy(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=eE(t,e),t!==null){t.flags&=32767,Vt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Xt=6,Vt=null;return}}else if(t=JM(t,e,Vn),t!==null){Vt=t;return}if(e=e.sibling,e!==null){Vt=e;return}Vt=e=n}while(e!==null);Xt===0&&(Xt=5)}function ts(n,e,t){var i=mt,r=ii.transition;try{ii.transition=null,mt=1,lE(n,e,t,i)}finally{ii.transition=r,mt=i}return null}function lE(n,e,t,i){do po();while(Rr!==null);if(ut&6)throw Error(le(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(le(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(VS(n,s),n===Jt&&(Vt=Jt=null,an=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ul||(Ul=!0,by(Gc,function(){return po(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ii.transition,ii.transition=null;var o=mt;mt=1;var a=ut;ut|=4,Tp.current=null,nE(n,t),yy(t,n),bM(Af),jc=!!wf,Af=wf=null,n.current=t,iE(t),IS(),ut=a,mt=o,ii.transition=s}else n.current=t;if(Ul&&(Ul=!1,Rr=n,au=r),s=n.pendingLanes,s===0&&(Or=null),OS(t.stateNode),On(n,kt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ou)throw ou=!1,n=Xf,Xf=null,n;return au&1&&n.tag!==0&&po(),s=n.pendingLanes,s&1?n===Yf?Ia++:(Ia=0,Yf=n):Ia=0,Wr(),null}function po(){if(Rr!==null){var n=s0(au),e=ii.transition,t=mt;try{if(ii.transition=null,mt=16>n?16:n,Rr===null)var i=!1;else{if(n=Rr,Rr=null,au=0,ut&6)throw Error(le(331));var r=ut;for(ut|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:La(8,u,s)}var d=u.child;if(d!==null)d.return=u,Ee=d;else for(;Ee!==null;){u=Ee;var f=u.sibling,p=u.return;if(gy(u),u===c){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:La(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var v=n.current;for(Ee=v;Ee!==null;){o=Ee;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Ee=y;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Cu(9,a)}}catch(b){Bt(a,a.return,b)}if(a===o){Ee=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Ee=x;break e}Ee=a.return}}if(ut=r,Wr(),Di&&typeof Di.onPostCommitFiberRoot=="function")try{Di.onPostCommitFiberRoot(Su,n)}catch{}i=!0}return i}finally{mt=t,ii.transition=e}}return!1}function pg(n,e,t){e=Ro(t,e),e=sy(n,e,1),n=Ur(n,e,1),e=wn(),n!==null&&(ol(n,1,e),On(n,e))}function Bt(n,e,t){if(n.tag===3)pg(n,n,t);else for(;e!==null;){if(e.tag===3){pg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Or===null||!Or.has(i))){n=Ro(t,n),n=oy(e,n,1),e=Ur(e,n,1),n=wn(),e!==null&&(ol(e,1,n),On(e,n));break}}e=e.return}}function cE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=wn(),n.pingedLanes|=n.suspendedLanes&t,Jt===n&&(an&t)===t&&(Xt===4||Xt===3&&(an&130023424)===an&&500>kt()-Ap?ds(n,0):wp|=t),On(n,e)}function Ay(n,e){e===0&&(n.mode&1?(e=wl,wl<<=1,!(wl&130023424)&&(wl=4194304)):e=1);var t=wn();n=sr(n,e),n!==null&&(ol(n,e,t),On(n,t))}function uE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Ay(n,t)}function dE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),Ay(n,t)}var Ry;Ry=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Nn.current)In=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return In=!1,QM(n,e,t);In=!!(n.flags&131072)}else In=!1,bt&&e.flags&1048576&&L0(e,Qc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;bc(n,e),n=e.pendingProps;var r=Eo(e,gn.current);ho(e,t),r=yp(null,e,i,n,r,t);var s=xp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Un(i)?(s=!0,qc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pp(e),r.updater=bu,e.stateNode=r,r._reactInternals=e,Uf(e,i,n,t),e=Bf(null,e,i,!0,s,t)):(e.tag=0,bt&&s&&ap(e),xn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(bc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=hE(i),n=hi(i,n),r){case 0:e=Ff(null,e,i,n,t);break e;case 1:e=rg(null,e,i,n,t);break e;case 11:e=ng(null,e,i,n,t);break e;case 14:e=ig(null,e,i,hi(i.type,n),t);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),Ff(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),rg(n,e,i,r,t);case 3:e:{if(uy(e),n===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,F0(n,e),tu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ro(Error(le(423)),e),e=sg(n,e,i,t,r);break e}else if(i!==r){r=Ro(Error(le(424)),e),e=sg(n,e,i,t,r);break e}else for(Wn=Nr(e.stateNode.containerInfo.firstChild),Xn=e,bt=!0,gi=null,t=U0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(To(),i===r){e=or(n,e,t);break e}xn(n,e,i,t)}e=e.child}return e;case 5:return B0(e),n===null&&Df(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Rf(i,r)?o=null:s!==null&&Rf(i,s)&&(e.flags|=32),cy(n,e),xn(n,e,o,t),e.child;case 6:return n===null&&Df(e),null;case 13:return dy(n,e,t);case 4:return mp(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=wo(e,null,i,t):xn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),ng(n,e,i,r,t);case 7:return xn(n,e,e.pendingProps,t),e.child;case 8:return xn(n,e,e.pendingProps.children,t),e.child;case 12:return xn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Mt(Jc,i._currentValue),i._currentValue=o,s!==null)if(Ti(s.value,o)){if(s.children===r.children&&!Nn.current){e=or(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=tr(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),If(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),If(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}xn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,t),r=ri(r),i=i(r),e.flags|=1,xn(n,e,i,t),e.child;case 14:return i=e.type,r=hi(i,e.pendingProps),r=hi(i.type,r),ig(n,e,i,r,t);case 15:return ay(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:hi(i,r),bc(n,e),e.tag=1,Un(i)?(n=!0,qc(e)):n=!1,ho(e,t),ry(e,i,r),Uf(e,i,r,t),Bf(null,e,i,!0,n,t);case 19:return fy(n,e,t);case 22:return ly(n,e,t)}throw Error(le(156,e.tag))};function by(n,e){return t0(n,e)}function fE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(n,e,t,i){return new fE(n,e,t,i)}function Pp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hE(n){if(typeof n=="function")return Pp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$h)return 11;if(n===qh)return 14}return 2}function Br(n,e){var t=n.alternate;return t===null?(t=ni(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Lc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Pp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ks:return fs(t.children,r,s,e);case Kh:o=8,r|=8;break;case sf:return n=ni(12,t,e,r|2),n.elementType=sf,n.lanes=s,n;case of:return n=ni(13,t,e,r),n.elementType=of,n.lanes=s,n;case af:return n=ni(19,t,e,r),n.elementType=af,n.lanes=s,n;case Bv:return Lu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Ov:o=10;break e;case Fv:o=9;break e;case $h:o=11;break e;case qh:o=14;break e;case xr:o=16,i=null;break e}throw Error(le(130,n==null?n:typeof n,""))}return e=ni(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function fs(n,e,t,i){return n=ni(7,n,i,e),n.lanes=t,n}function Lu(n,e,t,i){return n=ni(22,n,i,e),n.elementType=Bv,n.lanes=t,n.stateNode={isHidden:!1},n}function hd(n,e,t){return n=ni(6,n,null,e),n.lanes=t,n}function pd(n,e,t){return e=ni(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function pE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lp(n,e,t,i,r,s,o,a,l){return n=new pE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ni(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},pp(s),n}function mE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Cy(n){if(!n)return Hr;n=n._reactInternals;e:{if(Es(n)!==n||n.tag!==1)throw Error(le(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(n.tag===1){var t=n.type;if(Un(t))return C0(n,t,e)}return e}function Py(n,e,t,i,r,s,o,a,l){return n=Lp(t,i,!0,n,r,s,o,a,l),n.context=Cy(null),t=n.current,i=wn(),r=Fr(t),s=tr(i,r),s.callback=e??null,Ur(t,s,r),n.current.lanes=r,ol(n,r,i),On(n,i),n}function Du(n,e,t,i){var r=e.current,s=wn(),o=Fr(r);return t=Cy(t),e.context===null?e.context=t:e.pendingContext=t,e=tr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ur(r,e,o),n!==null&&(Si(n,r,o,s),wc(n,r,o)),o}function cu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function mg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Dp(n,e){mg(n,e),(n=n.alternate)&&mg(n,e)}function gE(){return null}var Ly=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ip(n){this._internalRoot=n}Iu.prototype.render=Ip.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(le(409));Du(n,e,null,null)};Iu.prototype.unmount=Ip.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ys(function(){Du(null,n,null,null)}),e[rr]=null}};function Iu(n){this._internalRoot=n}Iu.prototype.unstable_scheduleHydration=function(n){if(n){var e=l0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Er.length&&e!==0&&e<Er[t].priority;t++);Er.splice(t,0,n),t===0&&u0(n)}};function Np(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Nu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gg(){}function _E(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=cu(o);s.call(c)}}var o=Py(e,i,n,0,null,!1,!1,"",gg);return n._reactRootContainer=o,n[rr]=o.current,Wa(n.nodeType===8?n.parentNode:n),ys(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=cu(l);a.call(c)}}var l=Lp(n,0,!1,null,null,!1,!1,"",gg);return n._reactRootContainer=l,n[rr]=l.current,Wa(n.nodeType===8?n.parentNode:n),ys(function(){Du(e,l,t,i)}),l}function Uu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cu(o);a.call(l)}}Du(e,o,n,r)}else o=_E(t,e,n,r,i);return cu(o)}o0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ya(e.pendingLanes);t!==0&&(Jh(e,t|1),On(e,kt()),!(ut&6)&&(bo=kt()+500,Wr()))}break;case 13:ys(function(){var i=sr(n,1);if(i!==null){var r=wn();Si(i,n,1,r)}}),Dp(n,1)}};ep=function(n){if(n.tag===13){var e=sr(n,134217728);if(e!==null){var t=wn();Si(e,n,134217728,t)}Dp(n,134217728)}};a0=function(n){if(n.tag===13){var e=Fr(n),t=sr(n,e);if(t!==null){var i=wn();Si(t,n,e,i)}Dp(n,e)}};l0=function(){return mt};c0=function(n,e){var t=mt;try{return mt=n,e()}finally{mt=t}};_f=function(n,e,t){switch(e){case"input":if(uf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=wu(i);if(!r)throw Error(le(90));zv(i),uf(i,r)}}}break;case"textarea":Vv(n,t);break;case"select":e=t.value,e!=null&&lo(n,!!t.multiple,e,!1)}};$v=Rp;qv=ys;var vE={usingClientEntryPoint:!1,Events:[ll,Qs,wu,Yv,Kv,Rp]},ia={findFiberByHostInstance:os,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yE={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Jv(n),n===null?null:n.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||gE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Su=Ol.inject(yE),Di=Ol}catch{}}Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vE;Kn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Np(e))throw Error(le(200));return mE(n,e,null,t)};Kn.createRoot=function(n,e){if(!Np(n))throw Error(le(299));var t=!1,i="",r=Ly;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lp(n,1,!1,null,null,t,!1,i,r),n[rr]=e.current,Wa(n.nodeType===8?n.parentNode:n),new Ip(e)};Kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(le(188)):(n=Object.keys(n).join(","),Error(le(268,n)));return n=Jv(e),n=n===null?null:n.stateNode,n};Kn.flushSync=function(n){return ys(n)};Kn.hydrate=function(n,e,t){if(!Nu(e))throw Error(le(200));return Uu(null,n,e,!0,t)};Kn.hydrateRoot=function(n,e,t){if(!Np(n))throw Error(le(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Ly;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Py(e,null,n,1,t??null,r,!1,s,o),n[rr]=e.current,Wa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Iu(e)};Kn.render=function(n,e,t){if(!Nu(e))throw Error(le(200));return Uu(null,n,e,!1,t)};Kn.unmountComponentAtNode=function(n){if(!Nu(n))throw Error(le(40));return n._reactRootContainer?(ys(function(){Uu(null,null,n,!1,function(){n._reactRootContainer=null,n[rr]=null})}),!0):!1};Kn.unstable_batchedUpdates=Rp;Kn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Nu(t))throw Error(le(200));if(n==null||n._reactInternals===void 0)throw Error(le(38));return Uu(n,e,t,!1,i)};Kn.version="18.3.1-next-f1338f8080-20240426";function Dy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dy)}catch(n){console.error(n)}}Dy(),Dv.exports=Kn;var Up=Dv.exports;const xE=xv(Up),SE=yv({__proto__:null,default:xE},[Up]);var Iy,_g=Up;Iy=_g.createRoot,_g.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pt(){return Pt=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Pt.apply(this,arguments)}var Ht;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ht||(Ht={}));const vg="popstate";function ME(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Ja("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:ul(r)}return TE(e,t,null,n)}function nt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Co(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function EE(){return Math.random().toString(36).substr(2,8)}function yg(n,e){return{usr:n.state,key:n.key,idx:e}}function Ja(n,e,t,i){return t===void 0&&(t=null),Pt({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?jr(e):e,{state:t,key:e&&e.key||i||EE()})}function ul(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function jr(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function TE(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Ht.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Pt({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Ht.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:a,location:_.location,delta:h})}function f(m,h){a=Ht.Push;let v=Ja(_.location,m,h);c=u()+1;let y=yg(v,c),x=_.createHref(v);try{o.pushState(y,"",x)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(x)}s&&l&&l({action:a,location:_.location,delta:1})}function p(m,h){a=Ht.Replace;let v=Ja(_.location,m,h);c=u();let y=yg(v,c),x=_.createHref(v);o.replaceState(y,"",x),s&&l&&l({action:a,location:_.location,delta:0})}function g(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:ul(m);return v=v.replace(/ $/,"%20"),nt(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let _={get action(){return a},get location(){return n(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(vg,d),l=m,()=>{r.removeEventListener(vg,d),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let h=g(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:p,go(m){return o.go(m)}};return _}var gt;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(gt||(gt={}));const wE=new Set(["lazy","caseSensitive","path","id","index","children"]);function AE(n){return n.index===!0}function el(n,e,t,i){return t===void 0&&(t=[]),i===void 0&&(i={}),n.map((r,s)=>{let o=[...t,String(s)],a=typeof r.id=="string"?r.id:o.join("-");if(nt(r.index!==!0||!r.children,"Cannot specify children on an index route"),nt(!i[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),AE(r)){let l=Pt({},r,e(r),{id:a});return i[a]=l,l}else{let l=Pt({},r,e(r),{id:a,children:void 0});return i[a]=l,r.children&&(l.children=el(r.children,e,o,i)),l}})}function is(n,e,t){return t===void 0&&(t="/"),Dc(n,e,t,!1)}function Dc(n,e,t,i){let r=typeof e=="string"?jr(e):e,s=dl(r.pathname||"/",t);if(s==null)return null;let o=Ny(n);bE(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=kE(s);a=FE(o[l],c,i)}return a}function RE(n,e){let{route:t,pathname:i,params:r}=n;return{id:t.id,pathname:i,params:r,data:e[t.id],handle:t.handle}}function Ny(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(nt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=hs([i,l.relativePath]),u=t.concat(l);s.children&&s.children.length>0&&(nt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ny(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:UE(c,s.index),routesMeta:u})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Uy(s.path))r(s,o,l)}),e}function Uy(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Uy(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function bE(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:OE(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const CE=/^:[\w-]+$/,PE=3,LE=2,DE=1,IE=10,NE=-2,xg=n=>n==="*";function UE(n,e){let t=n.split("/"),i=t.length;return t.some(xg)&&(i+=NE),e&&(i+=LE),t.filter(r=>!xg(r)).reduce((r,s)=>r+(CE.test(s)?PE:s===""?DE:IE),i)}function OE(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function FE(n,e,t){t===void 0&&(t=!1);let{routesMeta:i}=n,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=Sg({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d&&c&&t&&!i[i.length-1].route.index&&(d=Sg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:hs([s,d.pathname]),pathnameBase:WE(hs([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=hs([s,d.pathnameBase]))}return o}function Sg(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=BE(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,d)=>{let{paramName:f,isOptional:p}=u;if(f==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const g=a[d];return p&&!g?c[f]=void 0:c[f]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:n}}function BE(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Co(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function kE(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Co(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function dl(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function zE(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?jr(n):n;return{pathname:t?t.startsWith("/")?t:HE(t,e):e,search:jE(i),hash:XE(r)}}function HE(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function md(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Oy(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function VE(n,e){let t=Oy(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function GE(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=jr(n):(r=Pt({},n),nt(!r.pathname||!r.pathname.includes("?"),md("?","pathname","search",r)),nt(!r.pathname||!r.pathname.includes("#"),md("#","pathname","hash",r)),nt(!r.search||!r.search.includes("#"),md("#","search","hash",r)));let s=n===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=t;else{let d=e.length-1;if(!i&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;r.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=zE(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const hs=n=>n.join("/").replace(/\/\/+/g,"/"),WE=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),jE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,XE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;class uu{constructor(e,t,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=t||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function Ou(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Fy=["post","put","patch","delete"],YE=new Set(Fy),KE=["get",...Fy],$E=new Set(KE),qE=new Set([301,302,303,307,308]),ZE=new Set([307,308]),gd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},QE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ra={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Op=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,JE=n=>({hasErrorBoundary:!!n.hasErrorBoundary}),By="remix-router-transitions";function eT(n){const e=n.window?n.window:typeof window<"u"?window:void 0,t=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!t;nt(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(n.mapRouteProperties)r=n.mapRouteProperties;else if(n.detectErrorBoundary){let D=n.detectErrorBoundary;r=B=>({hasErrorBoundary:D(B)})}else r=JE;let s={},o=el(n.routes,r,void 0,s),a,l=n.basename||"/",c=n.unstable_dataStrategy||oT,u=n.unstable_patchRoutesOnNavigation,d=Pt({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},n.future),f=null,p=new Set,g=1e3,_=new Set,m=null,h=null,v=null,y=n.hydrationData!=null,x=is(o,n.history.location,l),b=null;if(x==null&&!u){let D=yn(404,{pathname:n.history.location.pathname}),{matches:B,route:V}=Pg(o);x=B,b={[V.id]:D}}x&&!n.hydrationData&&Xr(x,o,n.history.location.pathname).active&&(x=null);let R;if(x)if(x.some(D=>D.route.lazy))R=!1;else if(!x.some(D=>D.route.loader))R=!0;else if(d.v7_partialHydration){let D=n.hydrationData?n.hydrationData.loaderData:null,B=n.hydrationData?n.hydrationData.errors:null,V=ee=>ee.route.loader?typeof ee.route.loader=="function"&&ee.route.loader.hydrate===!0?!1:D&&D[ee.route.id]!==void 0||B&&B[ee.route.id]!==void 0:!0;if(B){let ee=x.findIndex(Se=>B[Se.route.id]!==void 0);R=x.slice(0,ee+1).every(V)}else R=x.every(V)}else R=n.hydrationData!=null;else if(R=!1,x=[],d.v7_partialHydration){let D=Xr(null,o,n.history.location.pathname);D.active&&D.matches&&(x=D.matches)}let A,E={historyAction:n.history.action,location:n.history.location,matches:x,initialized:R,navigation:gd,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||b,fetchers:new Map,blockers:new Map},w=Ht.Pop,M=!1,L,W=!1,H=new Map,Y=null,$=!1,K=!1,Q=[],F=new Set,j=new Map,te=0,ue=-1,Re=new Map,Ye=new Set,X=new Map,oe=new Map,me=new Set,ye=new Map,Ne=new Map,We=new Map,Ke;function At(){if(f=n.history.listen(D=>{let{action:B,location:V,delta:ee}=D;if(Ke){Ke(),Ke=void 0;return}Co(Ne.size===0||ee!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Se=de({currentLocation:E.location,nextLocation:V,historyAction:B});if(Se&&ee!=null){let Le=new Promise(He=>{Ke=He});n.history.go(ee*-1),Z(Se,{state:"blocked",location:V,proceed(){Z(Se,{state:"proceeding",proceed:void 0,reset:void 0,location:V}),Le.then(()=>n.history.go(ee))},reset(){let He=new Map(E.blockers);He.set(Se,ra),Ge({blockers:He})}});return}return Fe(B,V)}),t){ST(e,H);let D=()=>MT(e,H);e.addEventListener("pagehide",D),Y=()=>e.removeEventListener("pagehide",D)}return E.initialized||Fe(Ht.Pop,E.location,{initialHydration:!0}),A}function I(){f&&f(),Y&&Y(),p.clear(),L&&L.abort(),E.fetchers.forEach((D,B)=>ze(B)),E.blockers.forEach((D,B)=>q(B))}function Ut(D){return p.add(D),()=>p.delete(D)}function Ge(D,B){B===void 0&&(B={}),E=Pt({},E,D);let V=[],ee=[];d.v7_fetcherPersist&&E.fetchers.forEach((Se,Le)=>{Se.state==="idle"&&(me.has(Le)?ee.push(Le):V.push(Le))}),[...p].forEach(Se=>Se(E,{deletedFetchers:ee,unstable_viewTransitionOpts:B.viewTransitionOpts,unstable_flushSync:B.flushSync===!0})),d.v7_fetcherPersist&&(V.forEach(Se=>E.fetchers.delete(Se)),ee.forEach(Se=>ze(Se)))}function st(D,B,V){var ee,Se;let{flushSync:Le}=V===void 0?{}:V,He=E.actionData!=null&&E.navigation.formMethod!=null&&mi(E.navigation.formMethod)&&E.navigation.state==="loading"&&((ee=D.state)==null?void 0:ee._isRedirect)!==!0,_e;B.actionData?Object.keys(B.actionData).length>0?_e=B.actionData:_e=null:He?_e=E.actionData:_e=null;let S=B.loaderData?bg(E.loaderData,B.loaderData,B.matches||[],B.errors):E.loaderData,C=E.blockers;C.size>0&&(C=new Map(C),C.forEach((O,J)=>C.set(J,ra)));let U=M===!0||E.navigation.formMethod!=null&&mi(E.navigation.formMethod)&&((Se=D.state)==null?void 0:Se._isRedirect)!==!0;a&&(o=a,a=void 0),$||w===Ht.Pop||(w===Ht.Push?n.history.push(D,D.state):w===Ht.Replace&&n.history.replace(D,D.state));let z;if(w===Ht.Pop){let O=H.get(E.location.pathname);O&&O.has(D.pathname)?z={currentLocation:E.location,nextLocation:D}:H.has(D.pathname)&&(z={currentLocation:D,nextLocation:E.location})}else if(W){let O=H.get(E.location.pathname);O?O.add(D.pathname):(O=new Set([D.pathname]),H.set(E.location.pathname,O)),z={currentLocation:E.location,nextLocation:D}}Ge(Pt({},B,{actionData:_e,loaderData:S,historyAction:w,location:D,initialized:!0,navigation:gd,revalidation:"idle",restoreScrollPosition:kn(D,B.matches||E.matches),preventScrollReset:U,blockers:C}),{viewTransitionOpts:z,flushSync:Le===!0}),w=Ht.Pop,M=!1,W=!1,$=!1,K=!1,Q=[]}async function De(D,B){if(typeof D=="number"){n.history.go(D);return}let V=qf(E.location,E.matches,l,d.v7_prependBasename,D,d.v7_relativeSplatPath,B==null?void 0:B.fromRouteId,B==null?void 0:B.relative),{path:ee,submission:Se,error:Le}=Mg(d.v7_normalizeFormMethod,!1,V,B),He=E.location,_e=Ja(E.location,ee,B&&B.state);_e=Pt({},_e,n.history.encodeLocation(_e));let S=B&&B.replace!=null?B.replace:void 0,C=Ht.Push;S===!0?C=Ht.Replace:S===!1||Se!=null&&mi(Se.formMethod)&&Se.formAction===E.location.pathname+E.location.search&&(C=Ht.Replace);let U=B&&"preventScrollReset"in B?B.preventScrollReset===!0:void 0,z=(B&&B.unstable_flushSync)===!0,O=de({currentLocation:He,nextLocation:_e,historyAction:C});if(O){Z(O,{state:"blocked",location:_e,proceed(){Z(O,{state:"proceeding",proceed:void 0,reset:void 0,location:_e}),De(D,B)},reset(){let J=new Map(E.blockers);J.set(O,ra),Ge({blockers:J})}});return}return await Fe(C,_e,{submission:Se,pendingError:Le,preventScrollReset:U,replace:B&&B.replace,enableViewTransition:B&&B.unstable_viewTransition,flushSync:z})}function Ot(){if(Xe(),Ge({revalidation:"loading"}),E.navigation.state!=="submitting"){if(E.navigation.state==="idle"){Fe(E.historyAction,E.location,{startUninterruptedRevalidation:!0});return}Fe(w||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation,enableViewTransition:W===!0})}}async function Fe(D,B,V){L&&L.abort(),L=null,w=D,$=(V&&V.startUninterruptedRevalidation)===!0,li(E.location,E.matches),M=(V&&V.preventScrollReset)===!0,W=(V&&V.enableViewTransition)===!0;let ee=a||o,Se=V&&V.overrideNavigation,Le=is(ee,B,l),He=(V&&V.flushSync)===!0,_e=Xr(Le,ee,B.pathname);if(_e.active&&_e.matches&&(Le=_e.matches),!Le){let{error:re,notFoundMatches:he,route:fe}=ke(B.pathname);st(B,{matches:he,loaderData:{},errors:{[fe.id]:re}},{flushSync:He});return}if(E.initialized&&!K&&fT(E.location,B)&&!(V&&V.submission&&mi(V.submission.formMethod))){st(B,{matches:Le},{flushSync:He});return}L=new AbortController;let S=bs(n.history,B,L.signal,V&&V.submission),C;if(V&&V.pendingError)C=[so(Le).route.id,{type:gt.error,error:V.pendingError}];else if(V&&V.submission&&mi(V.submission.formMethod)){let re=await je(S,B,V.submission,Le,_e.active,{replace:V.replace,flushSync:He});if(re.shortCircuited)return;if(re.pendingActionResult){let[he,fe]=re.pendingActionResult;if(Gn(fe)&&Ou(fe.error)&&fe.error.status===404){L=null,st(B,{matches:re.matches,loaderData:{},errors:{[he]:fe.error}});return}}Le=re.matches||Le,C=re.pendingActionResult,Se=_d(B,V.submission),He=!1,_e.active=!1,S=bs(n.history,S.url,S.signal)}let{shortCircuited:U,matches:z,loaderData:O,errors:J}=await P(S,B,Le,_e.active,Se,V&&V.submission,V&&V.fetcherSubmission,V&&V.replace,V&&V.initialHydration===!0,He,C);U||(L=null,st(B,Pt({matches:z||Le},Cg(C),{loaderData:O,errors:J})))}async function je(D,B,V,ee,Se,Le){Le===void 0&&(Le={}),Xe();let He=yT(B,V);if(Ge({navigation:He},{flushSync:Le.flushSync===!0}),Se){let C=await qn(ee,B.pathname,D.signal);if(C.type==="aborted")return{shortCircuited:!0};if(C.type==="error"){let{boundaryId:U,error:z}=et(B.pathname,C);return{matches:C.partialMatches,pendingActionResult:[U,{type:gt.error,error:z}]}}else if(C.matches)ee=C.matches;else{let{notFoundMatches:U,error:z,route:O}=ke(B.pathname);return{matches:U,pendingActionResult:[O.id,{type:gt.error,error:z}]}}}let _e,S=Sa(ee,B);if(!S.route.action&&!S.route.lazy)_e={type:gt.error,error:yn(405,{method:D.method,pathname:B.pathname,routeId:S.route.id})};else if(_e=(await ge("action",E,D,[S],ee,null))[S.route.id],D.signal.aborted)return{shortCircuited:!0};if(cs(_e)){let C;return Le&&Le.replace!=null?C=Le.replace:C=wg(_e.response.headers.get("Location"),new URL(D.url),l)===E.location.pathname+E.location.search,await Ce(D,_e,!0,{submission:V,replace:C}),{shortCircuited:!0}}if(br(_e))throw yn(400,{type:"defer-action"});if(Gn(_e)){let C=so(ee,S.route.id);return(Le&&Le.replace)!==!0&&(w=Ht.Push),{matches:ee,pendingActionResult:[C.route.id,_e]}}return{matches:ee,pendingActionResult:[S.route.id,_e]}}async function P(D,B,V,ee,Se,Le,He,_e,S,C,U){let z=Se||_d(B,Le),O=Le||He||Dg(z),J=!$&&(!d.v7_partialHydration||!S);if(ee){if(J){let Oe=T(U);Ge(Pt({navigation:z},Oe!==void 0?{actionData:Oe}:{}),{flushSync:C})}let Pe=await qn(V,B.pathname,D.signal);if(Pe.type==="aborted")return{shortCircuited:!0};if(Pe.type==="error"){let{boundaryId:Oe,error:Et}=et(B.pathname,Pe);return{matches:Pe.partialMatches,loaderData:{},errors:{[Oe]:Et}}}else if(Pe.matches)V=Pe.matches;else{let{error:Oe,notFoundMatches:Et,route:ft}=ke(B.pathname);return{matches:Et,loaderData:{},errors:{[ft.id]:Oe}}}}let re=a||o,[he,fe]=Eg(n.history,E,V,O,B,d.v7_partialHydration&&S===!0,d.v7_skipActionErrorRevalidation,K,Q,F,me,X,Ye,re,l,U);if(Rt(Pe=>!(V&&V.some(Oe=>Oe.route.id===Pe))||he&&he.some(Oe=>Oe.route.id===Pe)),ue=++te,he.length===0&&fe.length===0){let Pe=yt();return st(B,Pt({matches:V,loaderData:{},errors:U&&Gn(U[1])?{[U[0]]:U[1].error}:null},Cg(U),Pe?{fetchers:new Map(E.fetchers)}:{}),{flushSync:C}),{shortCircuited:!0}}if(J){let Pe={};if(!ee){Pe.navigation=z;let Oe=T(U);Oe!==void 0&&(Pe.actionData=Oe)}fe.length>0&&(Pe.fetchers=G(fe)),Ge(Pe,{flushSync:C})}fe.forEach(Pe=>{j.has(Pe.key)&&Be(Pe.key),Pe.controller&&j.set(Pe.key,Pe.controller)});let Ue=()=>fe.forEach(Pe=>Be(Pe.key));L&&L.signal.addEventListener("abort",Ue);let{loaderResults:Ie,fetcherResults:we}=await Me(E,V,he,fe,D);if(D.signal.aborted)return{shortCircuited:!0};L&&L.signal.removeEventListener("abort",Ue),fe.forEach(Pe=>j.delete(Pe.key));let Je=Fl(Ie);if(Je)return await Ce(D,Je.result,!0,{replace:_e}),{shortCircuited:!0};if(Je=Fl(we),Je)return Ye.add(Je.key),await Ce(D,Je.result,!0,{replace:_e}),{shortCircuited:!0};let{loaderData:vt,errors:dt}=Rg(E,V,he,Ie,U,fe,we,ye);ye.forEach((Pe,Oe)=>{Pe.subscribe(Et=>{(Et||Pe.done)&&ye.delete(Oe)})}),d.v7_partialHydration&&S&&E.errors&&Object.entries(E.errors).filter(Pe=>{let[Oe]=Pe;return!he.some(Et=>Et.route.id===Oe)}).forEach(Pe=>{let[Oe,Et]=Pe;dt=Object.assign(dt||{},{[Oe]:Et})});let $t=yt(),ot=k(ue),be=$t||ot||fe.length>0;return Pt({matches:V,loaderData:vt,errors:dt},be?{fetchers:new Map(E.fetchers)}:{})}function T(D){if(D&&!Gn(D[1]))return{[D[0]]:D[1].data};if(E.actionData)return Object.keys(E.actionData).length===0?null:E.actionData}function G(D){return D.forEach(B=>{let V=E.fetchers.get(B.key),ee=sa(void 0,V?V.data:void 0);E.fetchers.set(B.key,ee)}),new Map(E.fetchers)}function ne(D,B,V,ee){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");j.has(D)&&Be(D);let Se=(ee&&ee.unstable_flushSync)===!0,Le=a||o,He=qf(E.location,E.matches,l,d.v7_prependBasename,V,d.v7_relativeSplatPath,B,ee==null?void 0:ee.relative),_e=is(Le,He,l),S=Xr(_e,Le,He);if(S.active&&S.matches&&(_e=S.matches),!_e){xe(D,B,yn(404,{pathname:He}),{flushSync:Se});return}let{path:C,submission:U,error:z}=Mg(d.v7_normalizeFormMethod,!0,He,ee);if(z){xe(D,B,z,{flushSync:Se});return}let O=Sa(_e,C);if(M=(ee&&ee.preventScrollReset)===!0,U&&mi(U.formMethod)){se(D,B,C,O,_e,S.active,Se,U);return}X.set(D,{routeId:B,path:C}),ie(D,B,C,O,_e,S.active,Se,U)}async function se(D,B,V,ee,Se,Le,He,_e){Xe(),X.delete(D);function S(ft){if(!ft.route.action&&!ft.route.lazy){let Ct=yn(405,{method:_e.formMethod,pathname:V,routeId:B});return xe(D,B,Ct,{flushSync:He}),!0}return!1}if(!Le&&S(ee))return;let C=E.fetchers.get(D);ae(D,xT(_e,C),{flushSync:He});let U=new AbortController,z=bs(n.history,V,U.signal,_e);if(Le){let ft=await qn(Se,V,z.signal);if(ft.type==="aborted")return;if(ft.type==="error"){let{error:Ct}=et(V,ft);xe(D,B,Ct,{flushSync:He});return}else if(ft.matches){if(Se=ft.matches,ee=Sa(Se,V),S(ee))return}else{xe(D,B,yn(404,{pathname:V}),{flushSync:He});return}}j.set(D,U);let O=te,re=(await ge("action",E,z,[ee],Se,D))[ee.route.id];if(z.signal.aborted){j.get(D)===U&&j.delete(D);return}if(d.v7_fetcherPersist&&me.has(D)){if(cs(re)||Gn(re)){ae(D,yr(void 0));return}}else{if(cs(re))if(j.delete(D),ue>O){ae(D,yr(void 0));return}else return Ye.add(D),ae(D,sa(_e)),Ce(z,re,!1,{fetcherSubmission:_e});if(Gn(re)){xe(D,B,re.error);return}}if(br(re))throw yn(400,{type:"defer-action"});let he=E.navigation.location||E.location,fe=bs(n.history,he,U.signal),Ue=a||o,Ie=E.navigation.state!=="idle"?is(Ue,E.navigation.location,l):E.matches;nt(Ie,"Didn't find any matches after fetcher action");let we=++te;Re.set(D,we);let Je=sa(_e,re.data);E.fetchers.set(D,Je);let[vt,dt]=Eg(n.history,E,Ie,_e,he,!1,d.v7_skipActionErrorRevalidation,K,Q,F,me,X,Ye,Ue,l,[ee.route.id,re]);dt.filter(ft=>ft.key!==D).forEach(ft=>{let Ct=ft.key,As=E.fetchers.get(Ct),Ft=sa(void 0,As?As.data:void 0);E.fetchers.set(Ct,Ft),j.has(Ct)&&Be(Ct),ft.controller&&j.set(Ct,ft.controller)}),Ge({fetchers:new Map(E.fetchers)});let $t=()=>dt.forEach(ft=>Be(ft.key));U.signal.addEventListener("abort",$t);let{loaderResults:ot,fetcherResults:be}=await Me(E,Ie,vt,dt,fe);if(U.signal.aborted)return;U.signal.removeEventListener("abort",$t),Re.delete(D),j.delete(D),dt.forEach(ft=>j.delete(ft.key));let Pe=Fl(ot);if(Pe)return Ce(fe,Pe.result,!1);if(Pe=Fl(be),Pe)return Ye.add(Pe.key),Ce(fe,Pe.result,!1);let{loaderData:Oe,errors:Et}=Rg(E,Ie,vt,ot,void 0,dt,be,ye);if(E.fetchers.has(D)){let ft=yr(re.data);E.fetchers.set(D,ft)}k(we),E.navigation.state==="loading"&&we>ue?(nt(w,"Expected pending action"),L&&L.abort(),st(E.navigation.location,{matches:Ie,loaderData:Oe,errors:Et,fetchers:new Map(E.fetchers)})):(Ge({errors:Et,loaderData:bg(E.loaderData,Oe,Ie,Et),fetchers:new Map(E.fetchers)}),K=!1)}async function ie(D,B,V,ee,Se,Le,He,_e){let S=E.fetchers.get(D);ae(D,sa(_e,S?S.data:void 0),{flushSync:He});let C=new AbortController,U=bs(n.history,V,C.signal);if(Le){let re=await qn(Se,V,U.signal);if(re.type==="aborted")return;if(re.type==="error"){let{error:he}=et(V,re);xe(D,B,he,{flushSync:He});return}else if(re.matches)Se=re.matches,ee=Sa(Se,V);else{xe(D,B,yn(404,{pathname:V}),{flushSync:He});return}}j.set(D,C);let z=te,J=(await ge("loader",E,U,[ee],Se,D))[ee.route.id];if(br(J)&&(J=await Fp(J,U.signal,!0)||J),j.get(D)===C&&j.delete(D),!U.signal.aborted){if(me.has(D)){ae(D,yr(void 0));return}if(cs(J))if(ue>z){ae(D,yr(void 0));return}else{Ye.add(D),await Ce(U,J,!1);return}if(Gn(J)){xe(D,B,J.error);return}nt(!br(J),"Unhandled fetcher deferred data"),ae(D,yr(J.data))}}async function Ce(D,B,V,ee){let{submission:Se,fetcherSubmission:Le,replace:He}=ee===void 0?{}:ee;B.response.headers.has("X-Remix-Revalidate")&&(K=!0);let _e=B.response.headers.get("Location");nt(_e,"Expected a Location header on the redirect Response"),_e=wg(_e,new URL(D.url),l);let S=Ja(E.location,_e,{_isRedirect:!0});if(t){let re=!1;if(B.response.headers.has("X-Remix-Reload-Document"))re=!0;else if(Op.test(_e)){const he=n.history.createURL(_e);re=he.origin!==e.location.origin||dl(he.pathname,l)==null}if(re){He?e.location.replace(_e):e.location.assign(_e);return}}L=null;let C=He===!0||B.response.headers.has("X-Remix-Replace")?Ht.Replace:Ht.Push,{formMethod:U,formAction:z,formEncType:O}=E.navigation;!Se&&!Le&&U&&z&&O&&(Se=Dg(E.navigation));let J=Se||Le;if(ZE.has(B.response.status)&&J&&mi(J.formMethod))await Fe(C,S,{submission:Pt({},J,{formAction:_e}),preventScrollReset:M,enableViewTransition:V?W:void 0});else{let re=_d(S,Se);await Fe(C,S,{overrideNavigation:re,fetcherSubmission:Le,preventScrollReset:M,enableViewTransition:V?W:void 0})}}async function ge(D,B,V,ee,Se,Le){let He,_e={};try{He=await aT(c,D,B,V,ee,Se,Le,s,r)}catch(S){return ee.forEach(C=>{_e[C.route.id]={type:gt.error,error:S}}),_e}for(let[S,C]of Object.entries(He))if(pT(C)){let U=C.result;_e[S]={type:gt.redirect,response:uT(U,V,S,Se,l,d.v7_relativeSplatPath)}}else _e[S]=await cT(C);return _e}async function Me(D,B,V,ee,Se){let Le=D.matches,He=ge("loader",D,Se,V,B,null),_e=Promise.all(ee.map(async U=>{if(U.matches&&U.match&&U.controller){let O=(await ge("loader",D,bs(n.history,U.path,U.controller.signal),[U.match],U.matches,U.key))[U.match.route.id];return{[U.key]:O}}else return Promise.resolve({[U.key]:{type:gt.error,error:yn(404,{pathname:U.path})}})})),S=await He,C=(await _e).reduce((U,z)=>Object.assign(U,z),{});return await Promise.all([_T(B,S,Se.signal,Le,D.loaderData),vT(B,C,ee)]),{loaderResults:S,fetcherResults:C}}function Xe(){K=!0,Q.push(...Rt()),X.forEach((D,B)=>{j.has(B)&&(F.add(B),Be(B))})}function ae(D,B,V){V===void 0&&(V={}),E.fetchers.set(D,B),Ge({fetchers:new Map(E.fetchers)},{flushSync:(V&&V.flushSync)===!0})}function xe(D,B,V,ee){ee===void 0&&(ee={});let Se=so(E.matches,B);ze(D),Ge({errors:{[Se.route.id]:V},fetchers:new Map(E.fetchers)},{flushSync:(ee&&ee.flushSync)===!0})}function tt(D){return d.v7_fetcherPersist&&(oe.set(D,(oe.get(D)||0)+1),me.has(D)&&me.delete(D)),E.fetchers.get(D)||QE}function ze(D){let B=E.fetchers.get(D);j.has(D)&&!(B&&B.state==="loading"&&Re.has(D))&&Be(D),X.delete(D),Re.delete(D),Ye.delete(D),me.delete(D),F.delete(D),E.fetchers.delete(D)}function Te(D){if(d.v7_fetcherPersist){let B=(oe.get(D)||0)-1;B<=0?(oe.delete(D),me.add(D)):oe.set(D,B)}else ze(D);Ge({fetchers:new Map(E.fetchers)})}function Be(D){let B=j.get(D);nt(B,"Expected fetch controller: "+D),B.abort(),j.delete(D)}function $e(D){for(let B of D){let V=tt(B),ee=yr(V.data);E.fetchers.set(B,ee)}}function yt(){let D=[],B=!1;for(let V of Ye){let ee=E.fetchers.get(V);nt(ee,"Expected fetcher: "+V),ee.state==="loading"&&(Ye.delete(V),D.push(V),B=!0)}return $e(D),B}function k(D){let B=[];for(let[V,ee]of Re)if(ee<D){let Se=E.fetchers.get(V);nt(Se,"Expected fetcher: "+V),Se.state==="loading"&&(Be(V),Re.delete(V),B.push(V))}return $e(B),B.length>0}function ce(D,B){let V=E.blockers.get(D)||ra;return Ne.get(D)!==B&&Ne.set(D,B),V}function q(D){E.blockers.delete(D),Ne.delete(D)}function Z(D,B){let V=E.blockers.get(D)||ra;nt(V.state==="unblocked"&&B.state==="blocked"||V.state==="blocked"&&B.state==="blocked"||V.state==="blocked"&&B.state==="proceeding"||V.state==="blocked"&&B.state==="unblocked"||V.state==="proceeding"&&B.state==="unblocked","Invalid blocker state transition: "+V.state+" -> "+B.state);let ee=new Map(E.blockers);ee.set(D,B),Ge({blockers:ee})}function de(D){let{currentLocation:B,nextLocation:V,historyAction:ee}=D;if(Ne.size===0)return;Ne.size>1&&Co(!1,"A router only supports one blocker at a time");let Se=Array.from(Ne.entries()),[Le,He]=Se[Se.length-1],_e=E.blockers.get(Le);if(!(_e&&_e.state==="proceeding")&&He({currentLocation:B,nextLocation:V,historyAction:ee}))return Le}function ke(D){let B=yn(404,{pathname:D}),V=a||o,{matches:ee,route:Se}=Pg(V);return Rt(),{notFoundMatches:ee,route:Se,error:B}}function et(D,B){return{boundaryId:so(B.partialMatches).route.id,error:yn(400,{type:"route-discovery",pathname:D,message:B.error!=null&&"message"in B.error?B.error:String(B.error)})}}function Rt(D){let B=[];return ye.forEach((V,ee)=>{(!D||D(ee))&&(V.cancel(),B.push(ee),ye.delete(ee))}),B}function Gt(D,B,V){if(m=D,v=B,h=V||null,!y&&E.navigation===gd){y=!0;let ee=kn(E.location,E.matches);ee!=null&&Ge({restoreScrollPosition:ee})}return()=>{m=null,v=null,h=null}}function at(D,B){return h&&h(D,B.map(ee=>RE(ee,E.loaderData)))||D.key}function li(D,B){if(m&&v){let V=at(D,B);m[V]=v()}}function kn(D,B){if(m){let V=at(D,B),ee=m[V];if(typeof ee=="number")return ee}return null}function Xr(D,B,V){if(u){if(_.has(V))return{active:!1,matches:D};if(D){if(Object.keys(D[0].params).length>0)return{active:!0,matches:Dc(B,V,l,!0)}}else return{active:!0,matches:Dc(B,V,l,!0)||[]}}return{active:!1,matches:null}}async function qn(D,B,V){let ee=D;for(;;){let Se=a==null,Le=a||o;try{await rT(u,B,ee,Le,s,r,We,V)}catch(S){return{type:"error",error:S,partialMatches:ee}}finally{Se&&(o=[...o])}if(V.aborted)return{type:"aborted"};let He=is(Le,B,l);if(He)return ws(B,_),{type:"success",matches:He};let _e=Dc(Le,B,l,!0);if(!_e||ee.length===_e.length&&ee.every((S,C)=>S.route.id===_e[C].route.id))return ws(B,_),{type:"success",matches:null};ee=_e}}function ws(D,B){if(B.size>=g){let V=B.values().next().value;B.delete(V)}B.add(D)}function vl(D){s={},a=el(D,r,void 0,s)}function yl(D,B){let V=a==null;zy(D,B,a||o,s,r),V&&(o=[...o],Ge({}))}return A={get basename(){return l},get future(){return d},get state(){return E},get routes(){return o},get window(){return e},initialize:At,subscribe:Ut,enableScrollRestoration:Gt,navigate:De,fetch:ne,revalidate:Ot,createHref:D=>n.history.createHref(D),encodeLocation:D=>n.history.encodeLocation(D),getFetcher:tt,deleteFetcher:Te,dispose:I,getBlocker:ce,deleteBlocker:q,patchRoutes:yl,_internalFetchControllers:j,_internalActiveDeferreds:ye,_internalSetRoutes:vl},A}function tT(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function qf(n,e,t,i,r,s,o,a){let l,c;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){c=d;break}}else l=e,c=e[e.length-1];let u=GE(r||".",VE(l,s),dl(n.pathname,t)||n.pathname,a==="path");return r==null&&(u.search=n.search,u.hash=n.hash),(r==null||r===""||r===".")&&c&&c.route.index&&!Bp(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i&&t!=="/"&&(u.pathname=u.pathname==="/"?t:hs([t,u.pathname])),ul(u)}function Mg(n,e,t,i){if(!i||!tT(i))return{path:t};if(i.formMethod&&!gT(i.formMethod))return{path:t,error:yn(405,{method:i.formMethod})};let r=()=>({path:t,error:yn(400,{type:"invalid-body"})}),s=i.formMethod||"get",o=n?s.toUpperCase():s.toLowerCase(),a=Hy(t);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!mi(o))return r();let f=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((p,g)=>{let[_,m]=g;return""+p+_+"="+m+`
`},""):String(i.body);return{path:t,submission:{formMethod:o,formAction:a,formEncType:i.formEncType,formData:void 0,json:void 0,text:f}}}else if(i.formEncType==="application/json"){if(!mi(o))return r();try{let f=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:t,submission:{formMethod:o,formAction:a,formEncType:i.formEncType,formData:void 0,json:f,text:void 0}}}catch{return r()}}}nt(typeof FormData=="function","FormData is not available in this environment");let l,c;if(i.formData)l=Zf(i.formData),c=i.formData;else if(i.body instanceof FormData)l=Zf(i.body),c=i.body;else if(i.body instanceof URLSearchParams)l=i.body,c=Ag(l);else if(i.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(i.body),c=Ag(l)}catch{return r()}let u={formMethod:o,formAction:a,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(mi(u.formMethod))return{path:t,submission:u};let d=jr(t);return e&&d.search&&Bp(d.search)&&l.append("index",""),d.search="?"+l,{path:ul(d),submission:u}}function nT(n,e){let t=n;if(e){let i=n.findIndex(r=>r.route.id===e);i>=0&&(t=n.slice(0,i))}return t}function Eg(n,e,t,i,r,s,o,a,l,c,u,d,f,p,g,_){let m=_?Gn(_[1])?_[1].error:_[1].data:void 0,h=n.createURL(e.location),v=n.createURL(r),y=_&&Gn(_[1])?_[0]:void 0,x=y?nT(t,y):t,b=_?_[1].statusCode:void 0,R=o&&b&&b>=400,A=x.filter((w,M)=>{let{route:L}=w;if(L.lazy)return!0;if(L.loader==null)return!1;if(s)return typeof L.loader!="function"||L.loader.hydrate?!0:e.loaderData[L.id]===void 0&&(!e.errors||e.errors[L.id]===void 0);if(iT(e.loaderData,e.matches[M],w)||l.some(Y=>Y===w.route.id))return!0;let W=e.matches[M],H=w;return Tg(w,Pt({currentUrl:h,currentParams:W.params,nextUrl:v,nextParams:H.params},i,{actionResult:m,actionStatus:b,defaultShouldRevalidate:R?!1:a||h.pathname+h.search===v.pathname+v.search||h.search!==v.search||ky(W,H)}))}),E=[];return d.forEach((w,M)=>{if(s||!t.some($=>$.route.id===w.routeId)||u.has(M))return;let L=is(p,w.path,g);if(!L){E.push({key:M,routeId:w.routeId,path:w.path,matches:null,match:null,controller:null});return}let W=e.fetchers.get(M),H=Sa(L,w.path),Y=!1;f.has(M)?Y=!1:c.has(M)?(c.delete(M),Y=!0):W&&W.state!=="idle"&&W.data===void 0?Y=a:Y=Tg(H,Pt({currentUrl:h,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:t[t.length-1].params},i,{actionResult:m,actionStatus:b,defaultShouldRevalidate:R?!1:a})),Y&&E.push({key:M,routeId:w.routeId,path:w.path,matches:L,match:H,controller:new AbortController})}),[A,E]}function iT(n,e,t){let i=!e||t.route.id!==e.route.id,r=n[t.route.id]===void 0;return i||r}function ky(n,e){let t=n.route.path;return n.pathname!==e.pathname||t!=null&&t.endsWith("*")&&n.params["*"]!==e.params["*"]}function Tg(n,e){if(n.route.shouldRevalidate){let t=n.route.shouldRevalidate(e);if(typeof t=="boolean")return t}return e.defaultShouldRevalidate}async function rT(n,e,t,i,r,s,o,a){let l=[e,...t.map(c=>c.route.id)].join("-");try{let c=o.get(l);c||(c=n({path:e,matches:t,patch:(u,d)=>{a.aborted||zy(u,d,i,r,s)}}),o.set(l,c)),c&&hT(c)&&await c}finally{o.delete(l)}}function zy(n,e,t,i,r){if(n){var s;let o=i[n];nt(o,"No route found to patch children into: routeId = "+n);let a=el(e,r,[n,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],i);o.children?o.children.push(...a):o.children=a}else{let o=el(e,r,["patch",String(t.length||"0")],i);t.push(...o)}}async function sT(n,e,t){if(!n.lazy)return;let i=await n.lazy();if(!n.lazy)return;let r=t[n.id];nt(r,"No route found in manifest");let s={};for(let o in i){let l=r[o]!==void 0&&o!=="hasErrorBoundary";Co(!l,'Route "'+r.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!wE.has(o)&&(s[o]=i[o])}Object.assign(r,s),Object.assign(r,Pt({},e(r),{lazy:void 0}))}async function oT(n){let{matches:e}=n,t=e.filter(r=>r.shouldLoad);return(await Promise.all(t.map(r=>r.resolve()))).reduce((r,s,o)=>Object.assign(r,{[t[o].route.id]:s}),{})}async function aT(n,e,t,i,r,s,o,a,l,c){let u=s.map(p=>p.route.lazy?sT(p.route,l,a):void 0),d=s.map((p,g)=>{let _=u[g],m=r.some(v=>v.route.id===p.route.id);return Pt({},p,{shouldLoad:m,resolve:async v=>(v&&i.method==="GET"&&(p.route.lazy||p.route.loader)&&(m=!0),m?lT(e,i,p,_,v,c):Promise.resolve({type:gt.data,result:void 0}))})}),f=await n({matches:d,request:i,params:s[0].params,fetcherKey:o,context:c});try{await Promise.all(u)}catch{}return f}async function lT(n,e,t,i,r,s){let o,a,l=c=>{let u,d=new Promise((g,_)=>u=_);a=()=>u(),e.signal.addEventListener("abort",a);let f=g=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+n+'" [routeId: '+t.route.id+"]"))):c({request:e,params:t.params,context:s},...g!==void 0?[g]:[]),p=(async()=>{try{return{type:"data",result:await(r?r(_=>f(_)):f())}}catch(g){return{type:"error",result:g}}})();return Promise.race([p,d])};try{let c=t.route[n];if(i)if(c){let u,[d]=await Promise.all([l(c).catch(f=>{u=f}),i]);if(u!==void 0)throw u;o=d}else if(await i,c=t.route[n],c)o=await l(c);else if(n==="action"){let u=new URL(e.url),d=u.pathname+u.search;throw yn(405,{method:e.method,pathname:d,routeId:t.route.id})}else return{type:gt.data,result:void 0};else if(c)o=await l(c);else{let u=new URL(e.url),d=u.pathname+u.search;throw yn(404,{pathname:d})}nt(o.result!==void 0,"You defined "+(n==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+n+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:gt.error,result:c}}finally{a&&e.signal.removeEventListener("abort",a)}return o}async function cT(n){let{result:e,type:t}=n;if(Vy(e)){let c;try{let u=e.headers.get("Content-Type");u&&/\bapplication\/json\b/.test(u)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(u){return{type:gt.error,error:u}}return t===gt.error?{type:gt.error,error:new uu(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:gt.data,data:c,statusCode:e.status,headers:e.headers}}if(t===gt.error){if(Lg(e)){var i;if(e.data instanceof Error){var r;return{type:gt.error,error:e.data,statusCode:(r=e.init)==null?void 0:r.status}}e=new uu(((i=e.init)==null?void 0:i.status)||500,void 0,e.data)}return{type:gt.error,error:e,statusCode:Ou(e)?e.status:void 0}}if(mT(e)){var s,o;return{type:gt.deferred,deferredData:e,statusCode:(s=e.init)==null?void 0:s.status,headers:((o=e.init)==null?void 0:o.headers)&&new Headers(e.init.headers)}}if(Lg(e)){var a,l;return{type:gt.data,data:e.data,statusCode:(a=e.init)==null?void 0:a.status,headers:(l=e.init)!=null&&l.headers?new Headers(e.init.headers):void 0}}return{type:gt.data,data:e}}function uT(n,e,t,i,r,s){let o=n.headers.get("Location");if(nt(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Op.test(o)){let a=i.slice(0,i.findIndex(l=>l.route.id===t)+1);o=qf(new URL(e.url),a,r,!0,o,s),n.headers.set("Location",o)}return n}function wg(n,e,t){if(Op.test(n)){let i=n,r=i.startsWith("//")?new URL(e.protocol+i):new URL(i),s=dl(r.pathname,t)!=null;if(r.origin===e.origin&&s)return r.pathname+r.search+r.hash}return n}function bs(n,e,t,i){let r=n.createURL(Hy(e)).toString(),s={signal:t};if(i&&mi(i.formMethod)){let{formMethod:o,formEncType:a}=i;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(i.json)):a==="text/plain"?s.body=i.text:a==="application/x-www-form-urlencoded"&&i.formData?s.body=Zf(i.formData):s.body=i.formData}return new Request(r,s)}function Zf(n){let e=new URLSearchParams;for(let[t,i]of n.entries())e.append(t,typeof i=="string"?i:i.name);return e}function Ag(n){let e=new FormData;for(let[t,i]of n.entries())e.append(t,i);return e}function dT(n,e,t,i,r){let s={},o=null,a,l=!1,c={},u=t&&Gn(t[1])?t[1].error:void 0;return n.forEach(d=>{if(!(d.route.id in e))return;let f=d.route.id,p=e[f];if(nt(!cs(p),"Cannot handle redirect results in processLoaderData"),Gn(p)){let g=p.error;u!==void 0&&(g=u,u=void 0),o=o||{};{let _=so(n,f);o[_.route.id]==null&&(o[_.route.id]=g)}s[f]=void 0,l||(l=!0,a=Ou(p.error)?p.error.status:500),p.headers&&(c[f]=p.headers)}else br(p)?(i.set(f,p.deferredData),s[f]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!l&&(a=p.statusCode),p.headers&&(c[f]=p.headers)):(s[f]=p.data,p.statusCode&&p.statusCode!==200&&!l&&(a=p.statusCode),p.headers&&(c[f]=p.headers))}),u!==void 0&&t&&(o={[t[0]]:u},s[t[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:c}}function Rg(n,e,t,i,r,s,o,a){let{loaderData:l,errors:c}=dT(e,i,r,a);return s.forEach(u=>{let{key:d,match:f,controller:p}=u,g=o[d];if(nt(g,"Did not find corresponding fetcher result"),!(p&&p.signal.aborted))if(Gn(g)){let _=so(n.matches,f==null?void 0:f.route.id);c&&c[_.route.id]||(c=Pt({},c,{[_.route.id]:g.error})),n.fetchers.delete(d)}else if(cs(g))nt(!1,"Unhandled fetcher revalidation redirect");else if(br(g))nt(!1,"Unhandled fetcher deferred data");else{let _=yr(g.data);n.fetchers.set(d,_)}}),{loaderData:l,errors:c}}function bg(n,e,t,i){let r=Pt({},e);for(let s of t){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(r[o]=e[o]):n[o]!==void 0&&s.route.loader&&(r[o]=n[o]),i&&i.hasOwnProperty(o))break}return r}function Cg(n){return n?Gn(n[1])?{actionData:{}}:{actionData:{[n[0]]:n[1].data}}:{}}function so(n,e){return(e?n.slice(0,n.findIndex(i=>i.route.id===e)+1):[...n]).reverse().find(i=>i.route.hasErrorBoundary===!0)||n[0]}function Pg(n){let e=n.length===1?n[0]:n.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function yn(n,e){let{pathname:t,routeId:i,method:r,type:s,message:o}=e===void 0?{}:e,a="Unknown Server Error",l="Unknown @remix-run/router error";return n===400?(a="Bad Request",s==="route-discovery"?l='Unable to match URL "'+t+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+o):r&&t&&i?l="You made a "+r+' request to "'+t+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":s==="defer-action"?l="defer() is not supported in actions":s==="invalid-body"&&(l="Unable to encode submission body")):n===403?(a="Forbidden",l='Route "'+i+'" does not match URL "'+t+'"'):n===404?(a="Not Found",l='No route matches URL "'+t+'"'):n===405&&(a="Method Not Allowed",r&&t&&i?l="You made a "+r.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(l='Invalid request method "'+r.toUpperCase()+'"')),new uu(n||500,a,new Error(l),!0)}function Fl(n){let e=Object.entries(n);for(let t=e.length-1;t>=0;t--){let[i,r]=e[t];if(cs(r))return{key:i,result:r}}}function Hy(n){let e=typeof n=="string"?jr(n):n;return ul(Pt({},e,{hash:""}))}function fT(n,e){return n.pathname!==e.pathname||n.search!==e.search?!1:n.hash===""?e.hash!=="":n.hash===e.hash?!0:e.hash!==""}function hT(n){return typeof n=="object"&&n!=null&&"then"in n}function pT(n){return Vy(n.result)&&qE.has(n.result.status)}function br(n){return n.type===gt.deferred}function Gn(n){return n.type===gt.error}function cs(n){return(n&&n.type)===gt.redirect}function Lg(n){return typeof n=="object"&&n!=null&&"type"in n&&"data"in n&&"init"in n&&n.type==="DataWithResponseInit"}function mT(n){let e=n;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function Vy(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function gT(n){return $E.has(n.toLowerCase())}function mi(n){return YE.has(n.toLowerCase())}async function _T(n,e,t,i,r){let s=Object.entries(e);for(let o=0;o<s.length;o++){let[a,l]=s[o],c=n.find(f=>(f==null?void 0:f.route.id)===a);if(!c)continue;let u=i.find(f=>f.route.id===c.route.id),d=u!=null&&!ky(u,c)&&(r&&r[c.route.id])!==void 0;br(l)&&d&&await Fp(l,t,!1).then(f=>{f&&(e[a]=f)})}}async function vT(n,e,t){for(let i=0;i<t.length;i++){let{key:r,routeId:s,controller:o}=t[i],a=e[r];n.find(c=>(c==null?void 0:c.route.id)===s)&&br(a)&&(nt(o,"Expected an AbortController for revalidating fetcher deferred result"),await Fp(a,o.signal,!0).then(c=>{c&&(e[r]=c)}))}}async function Fp(n,e,t){if(t===void 0&&(t=!1),!await n.deferredData.resolveData(e)){if(t)try{return{type:gt.data,data:n.deferredData.unwrappedData}}catch(r){return{type:gt.error,error:r}}return{type:gt.data,data:n.deferredData.data}}}function Bp(n){return new URLSearchParams(n).getAll("index").some(e=>e==="")}function Sa(n,e){let t=typeof e=="string"?jr(e).search:e.search;if(n[n.length-1].route.index&&Bp(t||""))return n[n.length-1];let i=Oy(n);return i[i.length-1]}function Dg(n){let{formMethod:e,formAction:t,formEncType:i,text:r,formData:s,json:o}=n;if(!(!e||!t||!i)){if(r!=null)return{formMethod:e,formAction:t,formEncType:i,formData:void 0,json:void 0,text:r};if(s!=null)return{formMethod:e,formAction:t,formEncType:i,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:t,formEncType:i,formData:void 0,json:o,text:void 0}}}function _d(n,e){return e?{state:"loading",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function yT(n,e){return{state:"submitting",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function sa(n,e){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function xT(n,e){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e?e.data:void 0}}function yr(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function ST(n,e){try{let t=n.sessionStorage.getItem(By);if(t){let i=JSON.parse(t);for(let[r,s]of Object.entries(i||{}))s&&Array.isArray(s)&&e.set(r,new Set(s||[]))}}catch{}}function MT(n,e){if(e.size>0){let t={};for(let[i,r]of e)t[i]=[...r];try{n.sessionStorage.setItem(By,JSON.stringify(t))}catch(i){Co(!1,"Failed to save applied view transitions in sessionStorage ("+i+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qf(){return Qf=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Qf.apply(this,arguments)}const Gy=ve.createContext(null),Wy=ve.createContext(null),jy=ve.createContext(null),kp=ve.createContext(null),fl=ve.createContext({outlet:null,matches:[],isDataRoute:!1}),Xy=ve.createContext(null);function zp(){return ve.useContext(kp)!=null}function ET(){return zp()||nt(!1),ve.useContext(kp).location}const TT=ve.createContext(null);function wT(n){let e=ve.useContext(fl).outlet;return e&&ve.createElement(TT.Provider,{value:n},e)}function AT(n,e,t,i){zp()||nt(!1);let{navigator:r}=ve.useContext(jy),{matches:s}=ve.useContext(fl),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=ET(),u;u=c;let d=u.pathname||"/",f=d;if(l!=="/"){let _=l.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(_.length).join("/")}let p=is(n,{pathname:f});return LT(p&&p.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:hs([l,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:hs([l,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,t,i)}function RT(){let n=UT(),e=Ou(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ve.createElement(ve.Fragment,null,ve.createElement("h2",null,"Unexpected Application Error!"),ve.createElement("h3",{style:{fontStyle:"italic"}},e),t?ve.createElement("pre",{style:r},t):null,null)}const bT=ve.createElement(RT,null);class CT extends ve.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ve.createElement(fl.Provider,{value:this.props.routeContext},ve.createElement(Xy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function PT(n){let{routeContext:e,match:t,children:i}=n,r=ve.useContext(Gy);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),ve.createElement(fl.Provider,{value:e},i)}function LT(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=(r=t)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||nt(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(t&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:p}=t,g=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,f)=>{let p,g=!1,_=null,m=null;t&&(p=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||bT,l&&(c<0&&f===0?(g=!0,m=null):c===f&&(g=!0,m=d.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,f+1)),v=()=>{let y;return p?y=_:g?y=m:d.route.Component?y=ve.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=u,ve.createElement(PT,{match:d,routeContext:{outlet:u,matches:h,isDataRoute:t!=null},children:y})};return t&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?ve.createElement(CT,{location:t.location,revalidation:t.revalidation,component:_,error:p,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var Jf=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Jf||{});function DT(n){let e=ve.useContext(Wy);return e||nt(!1),e}function IT(n){let e=ve.useContext(fl);return e||nt(!1),e}function NT(n){let e=IT(),t=e.matches[e.matches.length-1];return t.route.id||nt(!1),t.route.id}function UT(){var n;let e=ve.useContext(Xy),t=DT(Jf.UseRouteError),i=NT(Jf.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function OT(n){return wT(n.context)}function Ma(n){nt(!1)}function FT(n){let{basename:e="/",children:t=null,location:i,navigationType:r=Ht.Pop,navigator:s,static:o=!1,future:a}=n;zp()&&nt(!1);let l=e.replace(/^\/*/,"/"),c=ve.useMemo(()=>({basename:l,navigator:s,static:o,future:Qf({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=jr(i));let{pathname:u="/",search:d="",hash:f="",state:p=null,key:g="default"}=i,_=ve.useMemo(()=>{let m=dl(u,l);return m==null?null:{location:{pathname:m,search:d,hash:f,state:p,key:g},navigationType:r}},[l,u,d,f,p,g,r]);return _==null?null:ve.createElement(jy.Provider,{value:c},ve.createElement(kp.Provider,{children:t,value:_}))}new Promise(()=>{});function eh(n,e){e===void 0&&(e=[]);let t=[];return ve.Children.forEach(n,(i,r)=>{if(!ve.isValidElement(i))return;let s=[...e,r];if(i.type===ve.Fragment){t.push.apply(t,eh(i.props.children,s));return}i.type!==Ma&&nt(!1),!i.props.index||!i.props.children||nt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=eh(i.props.children,s)),t.push(o)}),t}function BT(n){let e={hasErrorBoundary:n.ErrorBoundary!=null||n.errorElement!=null};return n.Component&&Object.assign(e,{element:ve.createElement(n.Component),Component:void 0}),n.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:ve.createElement(n.HydrateFallback),HydrateFallback:void 0}),n.ErrorBoundary&&Object.assign(e,{errorElement:ve.createElement(n.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function du(){return du=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},du.apply(this,arguments)}const kT="6";try{window.__reactRouterVersion=kT}catch{}function zT(n,e){return eT({basename:void 0,future:du({},void 0,{v7_prependBasename:!0}),history:ME({window:void 0}),hydrationData:HT(),routes:n,mapRouteProperties:BT,unstable_dataStrategy:void 0,unstable_patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function HT(){var n;let e=(n=window)==null?void 0:n.__staticRouterHydrationData;return e&&e.errors&&(e=du({},e,{errors:VT(e.errors)})),e}function VT(n){if(!n)return null;let e=Object.entries(n),t={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")t[i]=new uu(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let s=window[r.__subType];if(typeof s=="function")try{let o=new s(r.message);o.stack="",t[i]=o}catch{}}if(t[i]==null){let s=new Error(r.message);s.stack="",t[i]=s}}else t[i]=r;return t}const GT=ve.createContext({isTransitioning:!1}),WT=ve.createContext(new Map),jT="startTransition",Ig=cS[jT],XT="flushSync",Ng=SE[XT];function YT(n){Ig?Ig(n):n()}function oa(n){Ng?Ng(n):n()}class KT{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",e(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",t(i))}})}}function $T(n){let{fallbackElement:e,router:t,future:i}=n,[r,s]=ve.useState(t.state),[o,a]=ve.useState(),[l,c]=ve.useState({isTransitioning:!1}),[u,d]=ve.useState(),[f,p]=ve.useState(),[g,_]=ve.useState(),m=ve.useRef(new Map),{v7_startTransition:h}=i||{},v=ve.useCallback(E=>{h?YT(E):E()},[h]),y=ve.useCallback((E,w)=>{let{deletedFetchers:M,unstable_flushSync:L,unstable_viewTransitionOpts:W}=w;M.forEach(Y=>m.current.delete(Y)),E.fetchers.forEach((Y,$)=>{Y.data!==void 0&&m.current.set($,Y.data)});let H=t.window==null||t.window.document==null||typeof t.window.document.startViewTransition!="function";if(!W||H){L?oa(()=>s(E)):v(()=>s(E));return}if(L){oa(()=>{f&&(u&&u.resolve(),f.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:W.currentLocation,nextLocation:W.nextLocation})});let Y=t.window.document.startViewTransition(()=>{oa(()=>s(E))});Y.finished.finally(()=>{oa(()=>{d(void 0),p(void 0),a(void 0),c({isTransitioning:!1})})}),oa(()=>p(Y));return}f?(u&&u.resolve(),f.skipTransition(),_({state:E,currentLocation:W.currentLocation,nextLocation:W.nextLocation})):(a(E),c({isTransitioning:!0,flushSync:!1,currentLocation:W.currentLocation,nextLocation:W.nextLocation}))},[t.window,f,u,m,v]);ve.useLayoutEffect(()=>t.subscribe(y),[t,y]),ve.useEffect(()=>{l.isTransitioning&&!l.flushSync&&d(new KT)},[l]),ve.useEffect(()=>{if(u&&o&&t.window){let E=o,w=u.promise,M=t.window.document.startViewTransition(async()=>{v(()=>s(E)),await w});M.finished.finally(()=>{d(void 0),p(void 0),a(void 0),c({isTransitioning:!1})}),p(M)}},[v,o,u,t.window]),ve.useEffect(()=>{u&&o&&r.location.key===o.location.key&&u.resolve()},[u,f,r.location,o]),ve.useEffect(()=>{!l.isTransitioning&&g&&(a(g.state),c({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),_(void 0))},[l.isTransitioning,g]),ve.useEffect(()=>{},[]);let x=ve.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:E=>t.navigate(E),push:(E,w,M)=>t.navigate(E,{state:w,preventScrollReset:M==null?void 0:M.preventScrollReset}),replace:(E,w,M)=>t.navigate(E,{replace:!0,state:w,preventScrollReset:M==null?void 0:M.preventScrollReset})}),[t]),b=t.basename||"/",R=ve.useMemo(()=>({router:t,navigator:x,static:!1,basename:b}),[t,x,b]),A=ve.useMemo(()=>({v7_relativeSplatPath:t.future.v7_relativeSplatPath}),[t.future.v7_relativeSplatPath]);return ve.createElement(ve.Fragment,null,ve.createElement(Gy.Provider,{value:R},ve.createElement(Wy.Provider,{value:r},ve.createElement(WT.Provider,{value:m.current},ve.createElement(GT.Provider,{value:l},ve.createElement(FT,{basename:b,location:r.location,navigationType:r.historyAction,navigator:x,future:A},r.initialized||t.future.v7_partialHydration?ve.createElement(qT,{routes:t.routes,future:t.future,state:r}):e))))),null)}const qT=ve.memo(ZT);function ZT(n){let{routes:e,future:t,state:i}=n;return AT(e,void 0,i,t)}var Ug;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Ug||(Ug={}));var Og;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Og||(Og={}));const QT=()=>St.jsx(St.Fragment,{children:St.jsx(OT,{})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hp="168",mo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},JT=0,Fg=1,ew=2,Yy=1,tw=2,ji=3,ar=0,Fn=1,Pi=2,nr=0,go=1,th=2,Bg=3,kg=4,nw=5,rs=100,iw=101,rw=102,sw=103,ow=104,aw=200,lw=201,cw=202,uw=203,nh=204,ih=205,dw=206,fw=207,hw=208,pw=209,mw=210,gw=211,_w=212,vw=213,yw=214,xw=0,Sw=1,Mw=2,fu=3,Ew=4,Tw=5,ww=6,Aw=7,Ky=0,Rw=1,bw=2,kr=0,$y=1,qy=2,Zy=3,Qy=4,Cw=5,Jy=6,ex=7,zg="attached",Pw="detached",tx=300,Po=301,Lo=302,rh=303,sh=304,Fu=306,Do=1e3,Cr=1001,hu=1002,Tn=1003,nx=1004,Ea=1005,En=1006,Ic=1007,Zi=1008,lr=1009,ix=1010,rx=1011,tl=1012,Vp=1013,xs=1014,yi=1015,Wo=1016,Gp=1017,Wp=1018,Io=1020,sx=35902,ox=1021,ax=1022,jn=1023,lx=1024,cx=1025,_o=1026,No=1027,jp=1028,Xp=1029,ux=1030,Yp=1031,Kp=1033,Nc=33776,Uc=33777,Oc=33778,Fc=33779,oh=35840,ah=35841,lh=35842,ch=35843,uh=36196,dh=37492,fh=37496,hh=37808,ph=37809,mh=37810,gh=37811,_h=37812,vh=37813,yh=37814,xh=37815,Sh=37816,Mh=37817,Eh=37818,Th=37819,wh=37820,Ah=37821,Bc=36492,Rh=36494,bh=36495,dx=36283,Ch=36284,Ph=36285,Lh=36286,nl=2300,il=2301,vd=2302,Hg=2400,Vg=2401,Gg=2402,Lw=2500,Dw=0,fx=1,Dh=2,Iw=3200,Nw=3201,hx=0,Uw=1,wr="",Sn="srgb",cn="srgb-linear",$p="display-p3",Bu="display-p3-linear",pu="linear",xt="srgb",mu="rec709",gu="p3",Cs=7680,Wg=519,Ow=512,Fw=513,Bw=514,px=515,kw=516,zw=517,Hw=518,Vw=519,Ih=35044,jg="300 es",Qi=2e3,_u=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xg=1234567;const vo=Math.PI/180,Uo=180/Math.PI;function Mi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function qp(n,e){return(n%e+e)%e}function Gw(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Ww(n,e,t){return n!==e?(t-n)/(e-n):0}function Na(n,e,t){return(1-t)*n+t*e}function jw(n,e,t,i){return Na(n,e,1-Math.exp(-t*i))}function Xw(n,e=1){return e-Math.abs(qp(n,e*2)-e)}function Yw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Kw(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $w(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qw(n,e){return n+Math.random()*(e-n)}function Zw(n){return n*(.5-Math.random())}function Qw(n){n!==void 0&&(Xg=n);let e=Xg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jw(n){return n*vo}function e1(n){return n*Uo}function t1(n){return(n&n-1)===0&&n!==0}function n1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function i1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function r1(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ku={DEG2RAD:vo,RAD2DEG:Uo,generateUUID:Mi,clamp:Qt,euclideanModulo:qp,mapLinear:Gw,inverseLerp:Ww,lerp:Na,damp:jw,pingpong:Xw,smoothstep:Yw,smootherstep:Kw,randInt:$w,randFloat:qw,randFloatSpread:Zw,seededRandom:Qw,degToRad:Jw,radToDeg:e1,isPowerOfTwo:t1,ceilPowerOfTwo:n1,floorPowerOfTwo:i1,setQuaternionFromProperEuler:r1,normalize:ht,denormalize:_i};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],h=r[6],v=r[1],y=r[4],x=r[7],b=r[2],R=r[5],A=r[8];return s[0]=o*_+a*v+l*b,s[3]=o*m+a*y+l*R,s[6]=o*h+a*x+l*A,s[1]=c*_+u*v+d*b,s[4]=c*m+u*y+d*R,s[7]=c*h+u*x+d*A,s[2]=f*_+p*v+g*b,s[5]=f*m+p*y+g*R,s[8]=f*h+p*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yd.makeScale(e,t)),this}rotate(e){return this.premultiply(yd.makeRotation(-e)),this}translate(e,t){return this.premultiply(yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yd=new Qe;function mx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function rl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function s1(){const n=rl("canvas");return n.style.display="block",n}const Yg={};function yo(n){n in Yg||(Yg[n]=!0,console.warn(n))}function o1(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Kg=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$g=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),aa={[cn]:{transfer:pu,primaries:mu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Sn]:{transfer:xt,primaries:mu,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Bu]:{transfer:pu,primaries:gu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3($g),fromReference:n=>n.applyMatrix3(Kg)},[$p]:{transfer:xt,primaries:gu,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3($g),fromReference:n=>n.applyMatrix3(Kg).convertLinearToSRGB()}},a1=new Set([cn,Bu]),lt={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!a1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=aa[e].toReference,r=aa[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return aa[n].primaries},getTransfer:function(n){return n===wr?pu:aa[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(aa[e].luminanceCoefficients)}};function xo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ps;class l1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=rl("canvas")),Ps.width=e.width,Ps.height=e.height;const i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xo(t[i]/255)*255):t[i]=xo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let c1=0;class gx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c1++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Sd(r[o].image)):s.push(Sd(r[o]))}else s=Sd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Sd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?l1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let u1=0;class en extends Ts{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,i=Cr,r=Cr,s=En,o=Zi,a=jn,l=lr,c=en.DEFAULT_ANISOTROPY,u=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=Mi(),this.name="",this.source=new gx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Do:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case hu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Do:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case hu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=tx;en.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,i=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(p+1)/2,b=(h+1)/2,R=(u+f)/4,A=(d+_)/4,E=(g+m)/4;return y>x&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=A/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=E/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=A/s,r=E/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class d1 extends Ts{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new en(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends d1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _x extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f1 extends en{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*_,v=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const b=Math.sqrt(y),R=Math.atan2(b,h*v);m=Math.sin(m*R)/b,a=Math.sin(a*R)/b}const x=a*v;if(l=l*m+f*x,c=c*m+p*x,u=u*m+g*x,d=d*m+_*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*p-c*f,e[t+1]=l*g+u*f+c*d-a*p,e[t+2]=c*g+u*p+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Md=new N,qg=new Ui;class oi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(s,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bl.copy(i.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),kl.subVectors(this.max,la),Ls.subVectors(e.a,la),Ds.subVectors(e.b,la),Is.subVectors(e.c,la),fr.subVectors(Ds,Ls),hr.subVectors(Is,Ds),Yr.subVectors(Ls,Is);let t=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-Yr.z,Yr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,Yr.z,0,-Yr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-Yr.y,Yr.x,0];return!Ed(t,Ls,Ds,Is,kl)||(t=[1,0,0,0,1,0,0,0,1],!Ed(t,Ls,Ds,Is,kl))?!1:(zl.crossVectors(fr,hr),t=[zl.x,zl.y,zl.z],Ed(t,Ls,Ds,Is,kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new N,new N,new N,new N,new N,new N,new N,new N],ui=new N,Bl=new oi,Ls=new N,Ds=new N,Is=new N,fr=new N,hr=new N,Yr=new N,la=new N,kl=new N,zl=new N,Kr=new N;function Ed(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Kr.fromArray(n,s);const a=r.x*Math.abs(Kr.x)+r.y*Math.abs(Kr.y)+r.z*Math.abs(Kr.z),l=e.dot(Kr),c=t.dot(Kr),u=i.dot(Kr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const h1=new oi,ca=new N,Td=new N;class ai{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):h1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);const t=ca.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ca,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Td)),this.expandByPoint(ca.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new N,wd=new N,Hl=new N,pr=new N,Ad=new N,Vl=new N,Rd=new N;class hl{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wd.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(wd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hl),a=pr.dot(this.direction),l=-pr.dot(Hl),c=pr.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(wd).addScaledVector(Hl,f),p}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,i,r,s){Ad.subVectors(t,e),Vl.subVectors(i,e),Rd.crossVectors(Ad,Vl);let o=this.direction.dot(Rd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,e);const l=a*this.direction.dot(Vl.crossVectors(pr,Vl));if(l<0)return null;const c=a*this.direction.dot(Ad.cross(pr));if(c<0||l+c>o)return null;const u=-a*pr.dot(Rd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,p,g,_,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=_,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,_=c*d;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,_=a*d;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*d,t[8]=g*d+p,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*d+g,t[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+_,t[5]=o*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=a*u,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(p1,e,m1)}lookAt(e,t,i){const r=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),mr.crossVectors(i,zn),mr.lengthSq()===0&&(Math.abs(i.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),mr.crossVectors(i,zn)),mr.normalize(),Gl.crossVectors(zn,mr),r[0]=mr.x,r[4]=Gl.x,r[8]=zn.x,r[1]=mr.y,r[5]=Gl.y,r[9]=zn.y,r[2]=mr.z,r[6]=Gl.z,r[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],h=i[14],v=i[3],y=i[7],x=i[11],b=i[15],R=r[0],A=r[4],E=r[8],w=r[12],M=r[1],L=r[5],W=r[9],H=r[13],Y=r[2],$=r[6],K=r[10],Q=r[14],F=r[3],j=r[7],te=r[11],ue=r[15];return s[0]=o*R+a*M+l*Y+c*F,s[4]=o*A+a*L+l*$+c*j,s[8]=o*E+a*W+l*K+c*te,s[12]=o*w+a*H+l*Q+c*ue,s[1]=u*R+d*M+f*Y+p*F,s[5]=u*A+d*L+f*$+p*j,s[9]=u*E+d*W+f*K+p*te,s[13]=u*w+d*H+f*Q+p*ue,s[2]=g*R+_*M+m*Y+h*F,s[6]=g*A+_*L+m*$+h*j,s[10]=g*E+_*W+m*K+h*te,s[14]=g*w+_*H+m*Q+h*ue,s[3]=v*R+y*M+x*Y+b*F,s[7]=v*A+y*L+x*$+b*j,s[11]=v*E+y*W+x*K+b*te,s[15]=v*w+y*H+x*Q+b*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+_*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*d-t*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],h=e[15],v=d*m*c-_*f*c+_*l*p-a*m*p-d*l*h+a*f*h,y=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,x=u*_*c-g*d*c+g*a*p-o*_*p-u*a*h+o*d*h,b=g*d*l-u*_*l-g*a*f+o*_*f+u*a*m-o*d*m,R=t*v+i*y+r*x+s*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=v*A,e[1]=(_*f*s-d*m*s-_*r*p+i*m*p+d*r*h-i*f*h)*A,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*h+i*l*h)*A,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*A,e[4]=y*A,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*h+t*f*h)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*h-t*l*h)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*A,e[8]=x*A,e[9]=(g*d*s-u*_*s-g*i*p+t*_*p+u*i*h-t*d*h)*A,e[10]=(o*_*s-g*a*s+g*i*c-t*_*c-o*i*h+t*a*h)*A,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*p-t*a*p)*A,e[12]=b*A,e[13]=(u*_*r-g*d*r+g*i*f-t*_*f-u*i*m+t*d*m)*A,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*A,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,_=o*u,m=o*d,h=a*d,v=l*c,y=l*u,x=l*d,b=i.x,R=i.y,A=i.z;return r[0]=(1-(_+h))*b,r[1]=(p+x)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(p-x)*R,r[5]=(1-(f+h))*R,r[6]=(m+v)*R,r[7]=0,r[8]=(g+y)*A,r[9]=(m-v)*A,r[10]=(1-(f+_))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ns.set(r[0],r[1],r[2]).length();const o=Ns.set(r[4],r[5],r[6]).length(),a=Ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],di.copy(this);const c=1/s,u=1/o,d=1/a;return di.elements[0]*=c,di.elements[1]*=c,di.elements[2]*=c,di.elements[4]*=u,di.elements[5]*=u,di.elements[6]*=u,di.elements[8]*=d,di.elements[9]*=d,di.elements[10]*=d,t.setFromRotationMatrix(di),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Qi){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===Qi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_u)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Qi){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,p=(i+r)*u;let g,_;if(a===Qi)g=(o+s)*d,_=-2*d;else if(a===_u)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ns=new N,di=new qe,p1=new N(0,0,0),m1=new N(1,1,1),mr=new N,Gl=new N,zn=new N,Zg=new qe,Qg=new Ui;class Oi{constructor(e=0,t=0,i=0,r=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qg.setFromEuler(this),this.setFromQuaternion(Qg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class vx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let g1=0;const Jg=new N,Us=new Ui,Hi=new qe,Wl=new N,ua=new N,_1=new N,v1=new Ui,e_=new N(1,0,0),t_=new N(0,1,0),n_=new N(0,0,1),i_={type:"added"},y1={type:"removed"},Os={type:"childadded",child:null},bd={type:"childremoved",child:null};class It extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new N,t=new Oi,i=new Ui,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qe},normalMatrix:{value:new Qe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(e_,e)}rotateY(e){return this.rotateOnAxis(t_,e)}rotateZ(e){return this.rotateOnAxis(n_,e)}translateOnAxis(e,t){return Jg.copy(e).applyQuaternion(this.quaternion),this.position.add(Jg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(e_,e)}translateY(e){return this.translateOnAxis(t_,e)}translateZ(e){return this.translateOnAxis(n_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wl.copy(e):Wl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(ua,Wl,this.up):Hi.lookAt(Wl,ua,this.up),this.quaternion.setFromRotationMatrix(Hi),r&&(Hi.extractRotation(r.matrixWorld),Us.setFromRotationMatrix(Hi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i_),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(y1),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i_),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,_1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,v1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}It.DEFAULT_UP=new N(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new N,Vi=new N,Cd=new N,Gi=new N,Fs=new N,Bs=new N,r_=new N,Pd=new N,Ld=new N,Dd=new N;class vi{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fi.subVectors(e,t),r.cross(fi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fi.subVectors(r,t),Vi.subVectors(i,t),Cd.subVectors(e,t);const o=fi.dot(fi),a=fi.dot(Vi),l=fi.dot(Cd),c=Vi.dot(Vi),u=Vi.dot(Cd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static isFrontFacing(e,t,i,r){return fi.subVectors(i,t),Vi.subVectors(e,t),fi.cross(Vi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),fi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Fs.subVectors(r,i),Bs.subVectors(s,i),Pd.subVectors(e,i);const l=Fs.dot(Pd),c=Bs.dot(Pd);if(l<=0&&c<=0)return t.copy(i);Ld.subVectors(e,r);const u=Fs.dot(Ld),d=Bs.dot(Ld);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Fs,o);Dd.subVectors(e,s);const p=Fs.dot(Dd),g=Bs.dot(Dd);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Bs,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return r_.subVectors(s,r),a=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(r_,a);const h=1/(m+_+f);return o=_*h,a=f*h,t.copy(i).addScaledVector(Fs,o).addScaledVector(Bs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},jl={h:0,s:0,l:0};function Id(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=qp(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Id(o,s,e+1/3),this.g=Id(o,s,e),this.b=Id(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const i=yx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xo(e.r),this.g=xo(e.g),this.b=xo(e.b),this}copyLinearToSRGB(e){return this.r=xd(e.r),this.g=xd(e.g),this.b=xd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return lt.fromWorkingColorSpace(hn.copy(this),e),Math.round(Qt(hn.r*255,0,255))*65536+Math.round(Qt(hn.g*255,0,255))*256+Math.round(Qt(hn.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(hn.copy(this),t);const i=hn.r,r=hn.g,s=hn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=Sn){lt.fromWorkingColorSpace(hn.copy(this),e);const t=hn.r,i=hn.g,r=hn.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(jl);const i=Na(gr.h,jl.h,t),r=Na(gr.s,jl.s,t),s=Na(gr.l,jl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hn=new Ve;Ve.NAMES=yx;let x1=0;class Ni extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x1++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=go,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=fu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nh&&(i.blendSrc=this.blendSrc),this.blendDst!==ih&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ji extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Ky,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new N,Xl=new Ae;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ih,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return yo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xl.fromBufferAttribute(this,t),Xl.applyMatrix3(e),this.setXY(t,Xl.x,Xl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ih&&(e.usage=this.usage),e}}class xx extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Sx extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rn extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let S1=0;const Qn=new qe,Nd=new It,ks=new N,Hn=new oi,da=new oi,qt=new N;class Bn extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mx(e)?Sx:xx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,i){return Qn.makeTranslation(e,t,i),this.applyMatrix4(Qn),this}scale(e,t,i){return Qn.makeScale(e,t,i),this.applyMatrix4(Qn),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Rn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];da.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Hn.min,da.min),Hn.expandByPoint(qt),qt.addVectors(Hn.max,da.max),Hn.expandByPoint(qt)):(Hn.expandByPoint(da.min),Hn.expandByPoint(da.max))}Hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(ks.fromBufferAttribute(e,c),qt.add(ks)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<i.count;E++)a[E]=new N,l[E]=new N;const c=new N,u=new N,d=new N,f=new Ae,p=new Ae,g=new Ae,_=new N,m=new N;function h(E,w,M){c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,M),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),a[E].add(_),a[w].add(_),a[M].add(_),l[E].add(m),l[w].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let E=0,w=v.length;E<w;++E){const M=v[E],L=M.start,W=M.count;for(let H=L,Y=L+W;H<Y;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new N,x=new N,b=new N,R=new N;function A(E){b.fromBufferAttribute(r,E),R.copy(b);const w=a[E];y.copy(w),y.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(R,w);const L=x.dot(l[E])<0?-1:1;o.setXYZW(E,y.x,y.y,y.z,L)}for(let E=0,w=v.length;E<w;++E){const M=v[E],L=M.start,W=M.count;for(let H=L,Y=L+W;H<Y;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,d=new N;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new An(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s_=new qe,$r=new hl,Yl=new ai,o_=new N,zs=new N,Hs=new N,Vs=new N,Ud=new N,Kl=new N,$l=new Ae,ql=new Ae,Zl=new Ae,a_=new N,l_=new N,c_=new N,Ql=new N,Jl=new N;class mn extends It{constructor(e=new Bn,t=new Ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Kl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Ud.fromBufferAttribute(d,e),o?Kl.addScaledVector(Ud,u):Kl.addScaledVector(Ud.sub(t),u))}t.add(Kl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(Yl.containsPoint($r.origin)===!1&&($r.intersectSphere(Yl,o_)===null||$r.origin.distanceToSquared(o_)>(e.far-e.near)**2))&&(s_.copy(s).invert(),$r.copy(e.ray).applyMatrix4(s_),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=y;x<b;x+=3){const R=a.getX(x),A=a.getX(x+1),E=a.getX(x+2);r=ec(this,h,e,i,c,u,d,R,A,E),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=ec(this,o,e,i,c,u,d,v,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],h=o[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=y;x<b;x+=3){const R=x,A=x+1,E=x+2;r=ec(this,h,e,i,c,u,d,R,A,E),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,h=_;m<h;m+=3){const v=m,y=m+1,x=m+2;r=ec(this,o,e,i,c,u,d,v,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function M1(n,e,t,i,r,s,o,a){let l;if(e.side===Fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ar,a),l===null)return null;Jl.copy(a),Jl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Jl);return c<t.near||c>t.far?null:{distance:c,point:Jl.clone(),object:n}}function ec(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,zs),n.getVertexPosition(l,Hs),n.getVertexPosition(c,Vs);const u=M1(n,e,t,i,zs,Hs,Vs,Ql);if(u){r&&($l.fromBufferAttribute(r,a),ql.fromBufferAttribute(r,l),Zl.fromBufferAttribute(r,c),u.uv=vi.getInterpolation(Ql,zs,Hs,Vs,$l,ql,Zl,new Ae)),s&&($l.fromBufferAttribute(s,a),ql.fromBufferAttribute(s,l),Zl.fromBufferAttribute(s,c),u.uv1=vi.getInterpolation(Ql,zs,Hs,Vs,$l,ql,Zl,new Ae)),o&&(a_.fromBufferAttribute(o,a),l_.fromBufferAttribute(o,l),c_.fromBufferAttribute(o,c),u.normal=vi.getInterpolation(Ql,zs,Hs,Vs,a_,l_,c_,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};vi.getNormal(zs,Hs,Vs,d.normal),u.face=d}return u}class pl extends Bn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Rn(c,3)),this.setAttribute("normal",new Rn(u,3)),this.setAttribute("uv",new Rn(d,2));function g(_,m,h,v,y,x,b,R,A,E,w){const M=x/A,L=b/E,W=x/2,H=b/2,Y=R/2,$=A+1,K=E+1;let Q=0,F=0;const j=new N;for(let te=0;te<K;te++){const ue=te*L-H;for(let Re=0;Re<$;Re++){const Ye=Re*M-W;j[_]=Ye*v,j[m]=ue*y,j[h]=Y,c.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[h]=R>0?1:-1,u.push(j.x,j.y,j.z),d.push(Re/A),d.push(1-te/E),Q+=1}}for(let te=0;te<E;te++)for(let ue=0;ue<A;ue++){const Re=f+ue+$*te,Ye=f+ue+$*(te+1),X=f+(ue+1)+$*(te+1),oe=f+(ue+1)+$*te;l.push(Re,Ye,oe),l.push(Ye,X,oe),F+=6}a.addGroup(p,F,w),p+=F,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function vn(n){const e={};for(let t=0;t<n.length;t++){const i=Oo(n[t]);for(const r in i)e[r]=i[r]}return e}function E1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Ss={clone:Oo,merge:vn};var T1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T1,this.fragmentShader=w1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=E1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ex extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new N,u_=new Ae,d_=new Ae;class Mn extends Ex{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uo*2*Math.atan(Math.tan(vo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,u_,d_),t.subVectors(d_,u_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gs=-90,Ws=1;class A1 extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Gs,Ws,e,t);r.layers=this.layers,this.add(r);const s=new Mn(Gs,Ws,e,t);s.layers=this.layers,this.add(s);const o=new Mn(Gs,Ws,e,t);o.layers=this.layers,this.add(o);const a=new Mn(Gs,Ws,e,t);a.layers=this.layers,this.add(a);const l=new Mn(Gs,Ws,e,t);l.layers=this.layers,this.add(l);const c=new Mn(Gs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_u)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Tx extends en{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Po,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R1 extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pl(5,5,5),s=new on({name:"CubemapFromEquirect",uniforms:Oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:nr});s.uniforms.tEquirect.value=t;const o=new mn(r,s),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=En),new A1(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Od=new N,b1=new N,C1=new Qe;class Mr{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Od.subVectors(i,t).cross(b1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Od),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||C1.getNormalMatrix(e),r=this.coplanarPoint(Od).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new ai,tc=new N;class Zp{constructor(e=new Mr,t=new Mr,i=new Mr,r=new Mr,s=new Mr,o=new Mr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],h=r[12],v=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,f-c,m-p,x-h).normalize(),i[1].setComponents(l+s,f+c,m+p,x+h).normalize(),i[2].setComponents(l+o,f+u,m+g,x+v).normalize(),i[3].setComponents(l-o,f-u,m-g,x-v).normalize(),i[4].setComponents(l-a,f-d,m-_,x-y).normalize(),t===Qi)i[5].setComponents(l+a,f+d,m+_,x+y).normalize();else if(t===_u)i[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(tc.x=r.normal.x>0?e.max.x:e.min.x,tc.y=r.normal.y>0?e.max.y:e.min.y,tc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function P1(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(c,a),d.count===-1&&f.length===0&&n.bufferSubData(c,0,u),f.length!==0){for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ml extends Bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let h=0;h<u;h++){const v=h*f-o;for(let y=0;y<c;y++){const x=y*d-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+c*h,x=v+c*(h+1),b=v+1+c*(h+1),R=v+1+c*h;p.push(y,x,R),p.push(x,b,R)}this.setIndex(p),this.setAttribute("position",new Rn(g,3)),this.setAttribute("normal",new Rn(_,3)),this.setAttribute("uv",new Rn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.widthSegments,e.heightSegments)}}var L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D1=`#ifdef USE_ALPHAHASH
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
#endif`,I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F1=`#ifdef USE_AOMAP
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
#endif`,B1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k1=`#ifdef USE_BATCHING
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
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,G1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W1=`#ifdef USE_IRIDESCENCE
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
#endif`,j1=`#ifdef USE_BUMPMAP
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eA=`#define PI 3.141592653589793
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
} // validated`,tA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nA=`vec3 transformedNormal = objectNormal;
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
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aA="gl_FragColor = linearToOutputTexel( gl_FragColor );",lA=`
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
}`,cA=`#ifdef USE_ENVMAP
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
#endif`,uA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dA=`#ifdef USE_ENVMAP
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
#endif`,fA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hA=`#ifdef USE_ENVMAP
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
#endif`,pA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_A=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vA=`#ifdef USE_GRADIENTMAP
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
}`,yA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MA=`uniform bool receiveShadow;
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
#endif`,EA=`#ifdef USE_ENVMAP
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
#endif`,TA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bA=`PhysicalMaterial material;
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
#endif`,CA=`struct PhysicalMaterial {
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
}`,PA=`
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
#endif`,LA=`#if defined( RE_IndirectDiffuse )
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
#endif`,DA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zA=`#if defined( USE_POINTS_UV )
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
#endif`,HA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XA=`#ifdef USE_MORPHTARGETS
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
#endif`,YA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$A=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JA=`#ifdef USE_NORMALMAP
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
#endif`,eR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mR=`float getShadowMask() {
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
}`,gR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_R=`#ifdef USE_SKINNING
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
#endif`,vR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yR=`#ifdef USE_SKINNING
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
#endif`,xR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ER=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TR=`#ifdef USE_TRANSMISSION
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
#endif`,wR=`#ifdef USE_TRANSMISSION
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
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LR=`uniform sampler2D t2D;
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
}`,DR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`#include <common>
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
}`,FR=`#if DEPTH_PACKING == 3200
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
}`,BR=`#define DISTANCE
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
}`,kR=`#define DISTANCE
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
}`,zR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`uniform float scale;
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
}`,GR=`uniform vec3 diffuse;
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
}`,WR=`#include <common>
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
}`,jR=`uniform vec3 diffuse;
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
}`,XR=`#define LAMBERT
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
}`,YR=`#define LAMBERT
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
}`,KR=`#define MATCAP
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
}`,$R=`#define MATCAP
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
}`,qR=`#define NORMAL
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
}`,ZR=`#define NORMAL
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
}`,QR=`#define PHONG
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
}`,JR=`#define PHONG
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
}`,eb=`#define STANDARD
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
}`,tb=`#define STANDARD
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
}`,nb=`#define TOON
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
}`,ib=`#define TOON
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
}`,rb=`uniform float size;
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
}`,sb=`uniform vec3 diffuse;
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
}`,ob=`#include <common>
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
}`,ab=`uniform vec3 color;
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
}`,lb=`uniform float rotation;
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
}`,cb=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:L1,alphahash_pars_fragment:D1,alphamap_fragment:I1,alphamap_pars_fragment:N1,alphatest_fragment:U1,alphatest_pars_fragment:O1,aomap_fragment:F1,aomap_pars_fragment:B1,batching_pars_vertex:k1,batching_vertex:z1,begin_vertex:H1,beginnormal_vertex:V1,bsdfs:G1,iridescence_fragment:W1,bumpmap_pars_fragment:j1,clipping_planes_fragment:X1,clipping_planes_pars_fragment:Y1,clipping_planes_pars_vertex:K1,clipping_planes_vertex:$1,color_fragment:q1,color_pars_fragment:Z1,color_pars_vertex:Q1,color_vertex:J1,common:eA,cube_uv_reflection_fragment:tA,defaultnormal_vertex:nA,displacementmap_pars_vertex:iA,displacementmap_vertex:rA,emissivemap_fragment:sA,emissivemap_pars_fragment:oA,colorspace_fragment:aA,colorspace_pars_fragment:lA,envmap_fragment:cA,envmap_common_pars_fragment:uA,envmap_pars_fragment:dA,envmap_pars_vertex:fA,envmap_physical_pars_fragment:EA,envmap_vertex:hA,fog_vertex:pA,fog_pars_vertex:mA,fog_fragment:gA,fog_pars_fragment:_A,gradientmap_pars_fragment:vA,lightmap_pars_fragment:yA,lights_lambert_fragment:xA,lights_lambert_pars_fragment:SA,lights_pars_begin:MA,lights_toon_fragment:TA,lights_toon_pars_fragment:wA,lights_phong_fragment:AA,lights_phong_pars_fragment:RA,lights_physical_fragment:bA,lights_physical_pars_fragment:CA,lights_fragment_begin:PA,lights_fragment_maps:LA,lights_fragment_end:DA,logdepthbuf_fragment:IA,logdepthbuf_pars_fragment:NA,logdepthbuf_pars_vertex:UA,logdepthbuf_vertex:OA,map_fragment:FA,map_pars_fragment:BA,map_particle_fragment:kA,map_particle_pars_fragment:zA,metalnessmap_fragment:HA,metalnessmap_pars_fragment:VA,morphinstance_vertex:GA,morphcolor_vertex:WA,morphnormal_vertex:jA,morphtarget_pars_vertex:XA,morphtarget_vertex:YA,normal_fragment_begin:KA,normal_fragment_maps:$A,normal_pars_fragment:qA,normal_pars_vertex:ZA,normal_vertex:QA,normalmap_pars_fragment:JA,clearcoat_normal_fragment_begin:eR,clearcoat_normal_fragment_maps:tR,clearcoat_pars_fragment:nR,iridescence_pars_fragment:iR,opaque_fragment:rR,packing:sR,premultiplied_alpha_fragment:oR,project_vertex:aR,dithering_fragment:lR,dithering_pars_fragment:cR,roughnessmap_fragment:uR,roughnessmap_pars_fragment:dR,shadowmap_pars_fragment:fR,shadowmap_pars_vertex:hR,shadowmap_vertex:pR,shadowmask_pars_fragment:mR,skinbase_vertex:gR,skinning_pars_vertex:_R,skinning_vertex:vR,skinnormal_vertex:yR,specularmap_fragment:xR,specularmap_pars_fragment:SR,tonemapping_fragment:MR,tonemapping_pars_fragment:ER,transmission_fragment:TR,transmission_pars_fragment:wR,uv_pars_fragment:AR,uv_pars_vertex:RR,uv_vertex:bR,worldpos_vertex:CR,background_vert:PR,background_frag:LR,backgroundCube_vert:DR,backgroundCube_frag:IR,cube_vert:NR,cube_frag:UR,depth_vert:OR,depth_frag:FR,distanceRGBA_vert:BR,distanceRGBA_frag:kR,equirect_vert:zR,equirect_frag:HR,linedashed_vert:VR,linedashed_frag:GR,meshbasic_vert:WR,meshbasic_frag:jR,meshlambert_vert:XR,meshlambert_frag:YR,meshmatcap_vert:KR,meshmatcap_frag:$R,meshnormal_vert:qR,meshnormal_frag:ZR,meshphong_vert:QR,meshphong_frag:JR,meshphysical_vert:eb,meshphysical_frag:tb,meshtoon_vert:nb,meshtoon_frag:ib,points_vert:rb,points_frag:sb,shadow_vert:ob,shadow_frag:ab,sprite_vert:lb,sprite_frag:cb},pe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Dn={basic:{uniforms:vn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:vn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:vn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:vn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:vn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:vn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:vn([pe.points,pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:vn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:vn([pe.common,pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:vn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:vn([pe.sprite,pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:vn([pe.common,pe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:vn([pe.lights,pe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Dn.physical={uniforms:vn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const nc={r:0,b:0,g:0},Zr=new Oi,ub=new qe;function db(n,e,t,i,r,s,o){const a=new Ve(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?h(a,l):x&&x.isColor&&(h(x,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Fu)?(u===void 0&&(u=new mn(new pl(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Oo(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Zr.copy(y.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ub.makeRotationFromEuler(Zr)),u.material.toneMapped=lt.getTransfer(x.colorSpace)!==xt,(d!==x||f!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,f=x.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new mn(new ml(2,2),new on({name:"BackgroundMaterial",uniforms:Oo(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=lt.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,y){v.getRGB(nc,Mx(n)),i.buffers.color.setClear(nc.r,nc.g,nc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:_,addToRenderList:m}}function fb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(M,L,W,H,Y){let $=!1;const K=d(H,W,L);s!==K&&(s=K,c(s.object)),$=p(M,H,W,Y),$&&g(M,H,W,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(M,L,W,H),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function d(M,L,W){const H=W.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let $=Y[L.id];$===void 0&&($={},Y[L.id]=$);let K=$[H];return K===void 0&&(K=f(l()),$[H]=K),K}function f(M){const L=[],W=[],H=[];for(let Y=0;Y<t;Y++)L[Y]=0,W[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,L,W,H){const Y=s.attributes,$=L.attributes;let K=0;const Q=W.getAttributes();for(const F in Q)if(Q[F].location>=0){const te=Y[F];let ue=$[F];if(ue===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),te===void 0||te.attribute!==ue||ue&&te.data!==ue.data)return!0;K++}return s.attributesNum!==K||s.index!==H}function g(M,L,W,H){const Y={},$=L.attributes;let K=0;const Q=W.getAttributes();for(const F in Q)if(Q[F].location>=0){let te=$[F];te===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const ue={};ue.attribute=te,te&&te.data&&(ue.data=te.data),Y[F]=ue,K++}s.attributes=Y,s.attributesNum=K,s.index=H}function _(){const M=s.newAttributes;for(let L=0,W=M.length;L<W;L++)M[L]=0}function m(M){h(M,0)}function h(M,L){const W=s.newAttributes,H=s.enabledAttributes,Y=s.attributeDivisors;W[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),Y[M]!==L&&(n.vertexAttribDivisor(M,L),Y[M]=L)}function v(){const M=s.newAttributes,L=s.enabledAttributes;for(let W=0,H=L.length;W<H;W++)L[W]!==M[W]&&(n.disableVertexAttribArray(W),L[W]=0)}function y(M,L,W,H,Y,$,K){K===!0?n.vertexAttribIPointer(M,L,W,Y,$):n.vertexAttribPointer(M,L,W,H,Y,$)}function x(M,L,W,H){_();const Y=H.attributes,$=W.getAttributes(),K=L.defaultAttributeValues;for(const Q in $){const F=$[Q];if(F.location>=0){let j=Y[Q];if(j===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(j=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(j=M.instanceColor)),j!==void 0){const te=j.normalized,ue=j.itemSize,Re=e.get(j);if(Re===void 0)continue;const Ye=Re.buffer,X=Re.type,oe=Re.bytesPerElement,me=X===n.INT||X===n.UNSIGNED_INT||j.gpuType===Vp;if(j.isInterleavedBufferAttribute){const ye=j.data,Ne=ye.stride,We=j.offset;if(ye.isInstancedInterleavedBuffer){for(let Ke=0;Ke<F.locationSize;Ke++)h(F.location+Ke,ye.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ke=0;Ke<F.locationSize;Ke++)m(F.location+Ke);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let Ke=0;Ke<F.locationSize;Ke++)y(F.location+Ke,ue/F.locationSize,X,te,Ne*oe,(We+ue/F.locationSize*Ke)*oe,me)}else{if(j.isInstancedBufferAttribute){for(let ye=0;ye<F.locationSize;ye++)h(F.location+ye,j.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ye=0;ye<F.locationSize;ye++)m(F.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ye=0;ye<F.locationSize;ye++)y(F.location+ye,ue/F.locationSize,X,te,ue*oe,ue/F.locationSize*ye*oe,me)}}else if(K!==void 0){const te=K[Q];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(F.location,te);break;case 3:n.vertexAttrib3fv(F.location,te);break;case 4:n.vertexAttrib4fv(F.location,te);break;default:n.vertexAttrib1fv(F.location,te)}}}}v()}function b(){E();for(const M in i){const L=i[M];for(const W in L){const H=L[W];for(const Y in H)u(H[Y].object),delete H[Y];delete L[W]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const W in L){const H=L[W];for(const Y in H)u(H[Y].object),delete H[Y];delete L[W]}delete i[M.id]}function A(M){for(const L in i){const W=i[L];if(W[M.id]===void 0)continue;const H=W[M.id];for(const Y in H)u(H[Y].object),delete H[Y];delete W[M.id]}}function E(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function hb(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==jn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const A=R===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==lr&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yi&&!A)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:x,maxSamples:b}}function mb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Mr,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,y=v*4;let x=h.clippingState||null;l.value=x,x=u(g,f,y,p);for(let b=0;b!==y;++b)x[b]=t[b];h.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const h=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,x=p;y!==_;++y,x+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function gb(n){let e=new WeakMap;function t(o,a){return a===rh?o.mapping=Po:a===sh&&(o.mapping=Lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===rh||a===sh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new R1(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class gl extends Ex{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ao=4,f_=[.125,.215,.35,.446,.526,.582],ss=20,Fd=new gl,h_=new Ve;let Bd=null,kd=0,zd=0,Hd=!1;const ns=(1+Math.sqrt(5))/2,js=1/ns,p_=[new N(-ns,js,0),new N(ns,js,0),new N(-js,0,ns),new N(js,0,ns),new N(0,ns,-js),new N(0,ns,js),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class m_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Bd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=__(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,kd,zd),this._renderer.xr.enabled=Hd,e.scissorTest=!1,ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Po||e.mapping===Lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Wo,format:jn,colorSpace:cn,depthBuffer:!1},r=g_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=g_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_b(s)),this._blurMaterial=vb(s,e,t)}return r}_compileMaterial(e){const t=new mn(this._lodPlanes[0],e);this._renderer.compile(t,Fd)}_sceneToCubeUV(e,t,i,r){const a=new Mn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(h_),u.toneMapping=kr,u.autoClear=!1;const p=new Ji({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),g=new mn(new pl,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(h_),_=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const y=this._cubeSize;ic(r,v*y,h>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Po||e.mapping===Lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=__());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ic(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=p_[(r-s-1)%p_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new mn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ss-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ss;m>ss&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);const h=[];let v=0;for(let A=0;A<ss;++A){const E=A/_,w=Math.exp(-E*E/2);h.push(w),A===0?v+=w:A<m&&(v+=2*w)}for(let A=0;A<h.length;A++)h[A]=h[A]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const x=this._sizeLods[r],b=3*x*(r>y-ao?r-y+ao:0),R=4*(this._cubeSize-x);ic(t,b,R,3*x,2*x),l.setRenderTarget(t),l.render(d,Fd)}}function _b(n){const e=[],t=[],i=[];let r=n;const s=n-ao+1+f_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ao?l=f_[o-n+ao-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,h=1,v=new Float32Array(_*g*p),y=new Float32Array(m*g*p),x=new Float32Array(h*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,E=R>2?0:-1,w=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];v.set(w,_*g*R),y.set(f,m*g*R);const M=[R,R,R,R,R,R];x.set(M,h*g*R)}const b=new Bn;b.setAttribute("position",new An(v,_)),b.setAttribute("uv",new An(y,m)),b.setAttribute("faceIndex",new An(x,h)),e.push(b),r>ao&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function g_(n,e,t){const i=new Ei(n,e,t);return i.texture.mapping=Fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ic(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function vb(n,e,t){const i=new Float32Array(ss),r=new N(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qp(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function __(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qp(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function v_(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Qp(){return`

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
	`}function yb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===rh||l===sh,u=l===Po||l===Lo;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new m_(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new m_(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function xb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&yo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Sb(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,h=_.length;m<h;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,h=_.length;m<h;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let y=0,x=v.length;y<x;y+=3){const b=v[y+0],R=v[y+1],A=v[y+2];f.push(b,R,R,A,A,b)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const b=y+0,R=y+1,A=y+2;f.push(b,R,R,A,A,b)}}else return;const m=new(mx(f)?Sx:xx)(f,1);m.version=_;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Mb(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];t.update(m,i,1)}function d(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v];for(let v=0;v<_.length;v++)t.update(h,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Eb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Tb(n,e,t){const i=new WeakMap,r=new ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let M=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*R*4*d),E=new _x(A,b,R,d);E.type=yi,E.needsUpdate=!0;const w=x*4;for(let L=0;L<d;L++){const W=h[L],H=v[L],Y=y[L],$=b*R*4*L;for(let K=0;K<W.count;K++){const Q=K*w;g===!0&&(r.fromBufferAttribute(W,K),A[$+Q+0]=r.x,A[$+Q+1]=r.y,A[$+Q+2]=r.z,A[$+Q+3]=0),_===!0&&(r.fromBufferAttribute(H,K),A[$+Q+4]=r.x,A[$+Q+5]=r.y,A[$+Q+6]=r.z,A[$+Q+7]=0),m===!0&&(r.fromBufferAttribute(Y,K),A[$+Q+8]=r.x,A[$+Q+9]=r.y,A[$+Q+10]=r.z,A[$+Q+11]=Y.itemSize===4?r.w:1)}}f={count:d,texture:E,size:new Ae(b,R)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function wb(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class Ax extends en{constructor(e,t,i,r,s,o,a,l,c,u=_o){if(u!==_o&&u!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_o&&(i=xs),i===void 0&&u===No&&(i=Io),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Rx=new en,y_=new Ax(1,1),bx=new _x,Cx=new f1,Px=new Tx,x_=[],S_=[],M_=new Float32Array(16),E_=new Float32Array(9),T_=new Float32Array(4);function jo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=x_[r];if(s===void 0&&(s=new Float32Array(r),x_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zu(n,e){let t=S_[e];t===void 0&&(t=new Int32Array(e),S_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ab(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function Cb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function Pb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;T_.set(i),n.uniformMatrix2fv(this.addr,!1,T_),Kt(t,i)}}function Lb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;E_.set(i),n.uniformMatrix3fv(this.addr,!1,E_),Kt(t,i)}}function Db(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Yt(t,i))return;M_.set(i),n.uniformMatrix4fv(this.addr,!1,M_),Kt(t,i)}}function Ib(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Nb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Ub(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function Ob(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function Fb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function Hb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(y_.compareFunction=px,s=y_):s=Rx,t.setTexture2D(e||s,r)}function Vb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Cx,r)}function Gb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Px,r)}function Wb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||bx,r)}function jb(n){switch(n){case 5126:return Ab;case 35664:return Rb;case 35665:return bb;case 35666:return Cb;case 35674:return Pb;case 35675:return Lb;case 35676:return Db;case 5124:case 35670:return Ib;case 35667:case 35671:return Nb;case 35668:case 35672:return Ub;case 35669:case 35673:return Ob;case 5125:return Fb;case 36294:return Bb;case 36295:return kb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Wb}}function Xb(n,e){n.uniform1fv(this.addr,e)}function Yb(n,e){const t=jo(e,this.size,2);n.uniform2fv(this.addr,t)}function Kb(n,e){const t=jo(e,this.size,3);n.uniform3fv(this.addr,t)}function $b(n,e){const t=jo(e,this.size,4);n.uniform4fv(this.addr,t)}function qb(n,e){const t=jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Zb(n,e){const t=jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Qb(n,e){const t=jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jb(n,e){n.uniform1iv(this.addr,e)}function eC(n,e){n.uniform2iv(this.addr,e)}function tC(n,e){n.uniform3iv(this.addr,e)}function nC(n,e){n.uniform4iv(this.addr,e)}function iC(n,e){n.uniform1uiv(this.addr,e)}function rC(n,e){n.uniform2uiv(this.addr,e)}function sC(n,e){n.uniform3uiv(this.addr,e)}function oC(n,e){n.uniform4uiv(this.addr,e)}function aC(n,e,t){const i=this.cache,r=e.length,s=zu(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Rx,s[o])}function lC(n,e,t){const i=this.cache,r=e.length,s=zu(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Cx,s[o])}function cC(n,e,t){const i=this.cache,r=e.length,s=zu(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Px,s[o])}function uC(n,e,t){const i=this.cache,r=e.length,s=zu(t,r);Yt(i,s)||(n.uniform1iv(this.addr,s),Kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||bx,s[o])}function dC(n){switch(n){case 5126:return Xb;case 35664:return Yb;case 35665:return Kb;case 35666:return $b;case 35674:return qb;case 35675:return Zb;case 35676:return Qb;case 5124:case 35670:return Jb;case 35667:case 35671:return eC;case 35668:case 35672:return tC;case 35669:case 35673:return nC;case 5125:return iC;case 36294:return rC;case 36295:return sC;case 36296:return oC;case 35678:case 36198:case 36298:case 36306:case 35682:return aC;case 35679:case 36299:case 36307:return lC;case 35680:case 36300:case 36308:case 36293:return cC;case 36289:case 36303:case 36311:case 36292:return uC}}class fC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jb(t.type)}}class hC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dC(t.type)}}class pC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function w_(n,e){n.seq.push(e),n.map[e.id]=e}function mC(n,e,t){const i=n.name,r=i.length;for(Vd.lastIndex=0;;){const s=Vd.exec(i),o=Vd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){w_(t,c===void 0?new fC(a,n,e):new hC(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new pC(a),w_(t,d)),t=d}}}class kc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);mC(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function A_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const gC=37297;let _C=0;function vC(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function yC(n){const e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n);let i;switch(e===t?i="":e===gu&&t===mu?i="LinearDisplayP3ToLinearSRGB":e===mu&&t===gu&&(i="LinearSRGBToLinearDisplayP3"),n){case cn:case Bu:return[i,"LinearTransferOETF"];case Sn:case $p:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function R_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+vC(n.getShaderSource(e),o)}else return r}function xC(n,e){const t=yC(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function SC(n,e){let t;switch(e){case $y:t="Linear";break;case qy:t="Reinhard";break;case Zy:t="Cineon";break;case Qy:t="ACESFilmic";break;case Jy:t="AgX";break;case ex:t="Neutral";break;case Cw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const rc=new N;function MC(){lt.getLuminanceCoefficients(rc);const n=rc.x.toFixed(4),e=rc.y.toFixed(4),t=rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function EC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function TC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ta(n){return n!==""}function b_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const AC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(n){return n.replace(AC,bC)}const RC=new Map;function bC(n,e){let t=Ze[e];if(t===void 0){const i=RC.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nh(t)}const CC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P_(n){return n.replace(CC,PC)}function PC(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function L_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yy?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ji&&(e="SHADOWMAP_TYPE_VSM"),e}function DC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Po:case Lo:e="ENVMAP_TYPE_CUBE";break;case Fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function IC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Lo:e="ENVMAP_MODE_REFRACTION";break}return e}function NC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ky:e="ENVMAP_BLENDING_MULTIPLY";break;case Rw:e="ENVMAP_BLENDING_MIX";break;case bw:e="ENVMAP_BLENDING_ADD";break}return e}function UC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OC(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=LC(t),c=DC(t),u=IC(t),d=NC(t),f=UC(t),p=EC(t),g=TC(s),_=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ta).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ta).join(`
`),h.length>0&&(h+=`
`)):(m=[L_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),h=[L_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kr?"#define TONE_MAPPING":"",t.toneMapping!==kr?Ze.tonemapping_pars_fragment:"",t.toneMapping!==kr?SC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,xC("linearToOutputTexel",t.outputColorSpace),MC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ta).join(`
`)),o=Nh(o),o=b_(o,t),o=C_(o,t),a=Nh(a),a=b_(a,t),a=C_(a,t),o=P_(o),a=P_(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+m+o,x=v+h+a,b=A_(r,r.VERTEX_SHADER,y),R=A_(r,r.FRAGMENT_SHADER,x);r.attachShader(_,b),r.attachShader(_,R),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(b).trim(),Y=r.getShaderInfoLog(R).trim();let $=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,b,R);else{const Q=R_(r,b,"vertex"),F=R_(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+Q+`
`+F)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||Y==="")&&(K=!1);K&&(L.diagnostics={runnable:$,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(b),r.deleteShader(R),E=new kc(r,_),w=wC(r,_)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,gC)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_C++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}let FC=0;class BC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new kC(e),t.set(e,i)),i}}class kC{constructor(e){this.id=FC++,this.code=e,this.usedTimes=0}}function zC(n,e,t,i,r,s,o){const a=new vx,l=new BC,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,L,W,H){const Y=W.fog,$=H.geometry,K=w.isMeshStandardMaterial?W.environment:null,Q=(w.isMeshStandardMaterial?t:e).get(w.envMap||K),F=Q&&Q.mapping===Fu?Q.image.height:null,j=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=te!==void 0?te.length:0;let Re=0;$.morphAttributes.position!==void 0&&(Re=1),$.morphAttributes.normal!==void 0&&(Re=2),$.morphAttributes.color!==void 0&&(Re=3);let Ye,X,oe,me;if(j){const at=Dn[j];Ye=at.vertexShader,X=at.fragmentShader}else Ye=w.vertexShader,X=w.fragmentShader,l.update(w),oe=l.getVertexShaderID(w),me=l.getFragmentShaderID(w);const ye=n.getRenderTarget(),Ne=H.isInstancedMesh===!0,We=H.isBatchedMesh===!0,Ke=!!w.map,At=!!w.matcap,I=!!Q,Ut=!!w.aoMap,Ge=!!w.lightMap,st=!!w.bumpMap,De=!!w.normalMap,Ot=!!w.displacementMap,Fe=!!w.emissiveMap,je=!!w.metalnessMap,P=!!w.roughnessMap,T=w.anisotropy>0,G=w.clearcoat>0,ne=w.dispersion>0,se=w.iridescence>0,ie=w.sheen>0,Ce=w.transmission>0,ge=T&&!!w.anisotropyMap,Me=G&&!!w.clearcoatMap,Xe=G&&!!w.clearcoatNormalMap,ae=G&&!!w.clearcoatRoughnessMap,xe=se&&!!w.iridescenceMap,tt=se&&!!w.iridescenceThicknessMap,ze=ie&&!!w.sheenColorMap,Te=ie&&!!w.sheenRoughnessMap,Be=!!w.specularMap,$e=!!w.specularColorMap,yt=!!w.specularIntensityMap,k=Ce&&!!w.transmissionMap,ce=Ce&&!!w.thicknessMap,q=!!w.gradientMap,Z=!!w.alphaMap,de=w.alphaTest>0,ke=!!w.alphaHash,et=!!w.extensions;let Rt=kr;w.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Rt=n.toneMapping);const Gt={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:Ye,fragmentShader:X,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:We,batchingColor:We&&H._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&H.instanceColor!==null,instancingMorph:Ne&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:cn,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:At,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:F,aoMap:Ut,lightMap:Ge,bumpMap:st,normalMap:De,displacementMap:f&&Ot,emissiveMap:Fe,normalMapObjectSpace:De&&w.normalMapType===Uw,normalMapTangentSpace:De&&w.normalMapType===hx,metalnessMap:je,roughnessMap:P,anisotropy:T,anisotropyMap:ge,clearcoat:G,clearcoatMap:Me,clearcoatNormalMap:Xe,clearcoatRoughnessMap:ae,dispersion:ne,iridescence:se,iridescenceMap:xe,iridescenceThicknessMap:tt,sheen:ie,sheenColorMap:ze,sheenRoughnessMap:Te,specularMap:Be,specularColorMap:$e,specularIntensityMap:yt,transmission:Ce,transmissionMap:k,thicknessMap:ce,gradientMap:q,opaque:w.transparent===!1&&w.blending===go&&w.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:ke,combine:w.combine,mapUv:Ke&&_(w.map.channel),aoMapUv:Ut&&_(w.aoMap.channel),lightMapUv:Ge&&_(w.lightMap.channel),bumpMapUv:st&&_(w.bumpMap.channel),normalMapUv:De&&_(w.normalMap.channel),displacementMapUv:Ot&&_(w.displacementMap.channel),emissiveMapUv:Fe&&_(w.emissiveMap.channel),metalnessMapUv:je&&_(w.metalnessMap.channel),roughnessMapUv:P&&_(w.roughnessMap.channel),anisotropyMapUv:ge&&_(w.anisotropyMap.channel),clearcoatMapUv:Me&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Te&&_(w.sheenRoughnessMap.channel),specularMapUv:Be&&_(w.specularMap.channel),specularColorMapUv:$e&&_(w.specularColorMap.channel),specularIntensityMapUv:yt&&_(w.specularIntensityMap.channel),transmissionMapUv:k&&_(w.transmissionMap.channel),thicknessMapUv:ce&&_(w.thicknessMap.channel),alphaMapUv:Z&&_(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(De||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(Ke||Z),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&lt.getTransfer(w.map.colorSpace)===xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Pi,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:et&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&w.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function h(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(v(M,w),y(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function v(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function y(w,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),w.push(a.mask)}function x(w){const M=g[w.type];let L;if(M){const W=Dn[M];L=Ss.clone(W.uniforms)}else L=w.uniforms;return L}function b(w,M){let L;for(let W=0,H=u.length;W<H;W++){const Y=u[W];if(Y.cacheKey===M){L=Y,++L.usedTimes;break}}return L===void 0&&(L=new OC(n,M,w,s),u.push(L)),L}function R(w){if(--w.usedTimes===0){const M=u.indexOf(w);u[M]=u[u.length-1],u.pop(),w.destroy()}}function A(w){l.remove(w)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:b,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:E}}function HC(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function VC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function D_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function I_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,g,_,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=_,h.group=m),e++,h}function a(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,g,_,m){const h=o(d,f,p,g,_,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||VC),i.length>1&&i.sort(f||D_),r.length>1&&r.sort(f||D_)}function u(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function GC(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new I_,n.set(i,[o])):r>=s.length?(o=new I_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function WC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ve};break;case"SpotLight":t={position:new N,direction:new N,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function jC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let XC=0;function YC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function KC(n){const e=new WC,t=jC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new qe,o=new qe;function a(c){let u=0,d=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,h=0,v=0,y=0,x=0,b=0,R=0,A=0;c.sort(YC);for(let w=0,M=c.length;w<M;w++){const L=c[w],W=L.color,H=L.intensity,Y=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=W.r*H,d+=W.g*H,f+=W.b*H;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],H);A++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,F=t.get(L);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=K,p++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(W).multiplyScalar(H),K.distance=Y,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[_]=K;const Q=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,Q.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[_]=Q.matrix,L.castShadow){const F=t.get(L);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=$,x++}_++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(W).multiplyScalar(H),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const Q=L.shadow,F=t.get(L);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,F.shadowCameraNear=Q.camera.near,F.shadowCameraFar=Q.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=K,g++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(H),K.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[h]=K,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const E=i.hash;(E.directionalLength!==p||E.pointLength!==g||E.spotLength!==_||E.rectAreaLength!==m||E.hemiLength!==h||E.numDirectionalShadows!==v||E.numPointShadows!==y||E.numSpotShadows!==x||E.numSpotMaps!==b||E.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,E.directionalLength=p,E.pointLength=g,E.spotLength=_,E.rectAreaLength=m,E.hemiLength=h,E.numDirectionalShadows=v,E.numPointShadows=y,E.numSpotShadows=x,E.numSpotMaps=b,E.numLightProbes=A,i.version=XC++)}function l(c,u){let d=0,f=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const y=c[h];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function N_(n){const e=new KC(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $C(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new N_(n),e.set(r,[a])):s>=o.length?(a=new N_(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class qC extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZC extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JC=`uniform sampler2D shadow_pass;
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
}`;function eP(n,e,t){let i=new Zp;const r=new Ae,s=new Ae,o=new ct,a=new qC({depthPacking:Nw}),l=new ZC,c={},u=t.maxTextureSize,d={[ar]:Fn,[Fn]:ar,[Pi]:Pi},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:QC,fragmentShader:JC}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new mn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yy;let h=this.type;this.render=function(R,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const w=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),W=n.state;W.setBlending(nr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const H=h!==ji&&this.type===ji,Y=h===ji&&this.type!==ji;for(let $=0,K=R.length;$<K;$++){const Q=R[$],F=Q.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const j=F.getFrameExtents();if(r.multiply(j),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,F.mapSize.y=s.y)),F.map===null||H===!0||Y===!0){const ue=this.type!==ji?{minFilter:Tn,magFilter:Tn}:{};F.map!==null&&F.map.dispose(),F.map=new Ei(r.x,r.y,ue),F.map.texture.name=Q.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const te=F.getViewportCount();for(let ue=0;ue<te;ue++){const Re=F.getViewport(ue);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),W.viewport(o),F.updateMatrices(Q,ue),i=F.getFrustum(),x(A,E,F.camera,Q,this.type)}F.isPointLightShadow!==!0&&this.type===ji&&v(F,E),F.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,L)};function v(R,A){const E=e.update(_);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ei(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(A,null,E,f,_,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(A,null,E,p,_,null)}function y(R,A,E,w){let M=null;const L=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)M=L;else if(M=E.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=M.uuid,H=A.uuid;let Y=c[W];Y===void 0&&(Y={},c[W]=Y);let $=Y[H];$===void 0&&($=M.clone(),Y[H]=$,A.addEventListener("dispose",b)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,w===ji?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=n.properties.get(M);W.light=E}return M}function x(R,A,E,w,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ji)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);const H=e.update(R),Y=R.material;if(Array.isArray(Y)){const $=H.groups;for(let K=0,Q=$.length;K<Q;K++){const F=$[K],j=Y[F.materialIndex];if(j&&j.visible){const te=y(R,j,w,M);R.onBeforeShadow(n,R,A,E,H,te,F),n.renderBufferDirect(E,null,H,te,R,F),R.onAfterShadow(n,R,A,E,H,te,F)}}}else if(Y.visible){const $=y(R,Y,w,M);R.onBeforeShadow(n,R,A,E,H,$,null),n.renderBufferDirect(E,null,H,$,R,null),R.onAfterShadow(n,R,A,E,H,$,null)}}const W=R.children;for(let H=0,Y=W.length;H<Y;H++)x(W[H],A,E,w,M)}function b(R){R.target.removeEventListener("dispose",b);for(const E in c){const w=c[E],M=R.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function tP(n){function e(){let k=!1;const ce=new ct;let q=null;const Z=new ct(0,0,0,0);return{setMask:function(de){q!==de&&!k&&(n.colorMask(de,de,de,de),q=de)},setLocked:function(de){k=de},setClear:function(de,ke,et,Rt,Gt){Gt===!0&&(de*=Rt,ke*=Rt,et*=Rt),ce.set(de,ke,et,Rt),Z.equals(ce)===!1&&(n.clearColor(de,ke,et,Rt),Z.copy(ce))},reset:function(){k=!1,q=null,Z.set(-1,0,0,0)}}}function t(){let k=!1,ce=null,q=null,Z=null;return{setTest:function(de){de?me(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(de){ce!==de&&!k&&(n.depthMask(de),ce=de)},setFunc:function(de){if(q!==de){switch(de){case xw:n.depthFunc(n.NEVER);break;case Sw:n.depthFunc(n.ALWAYS);break;case Mw:n.depthFunc(n.LESS);break;case fu:n.depthFunc(n.LEQUAL);break;case Ew:n.depthFunc(n.EQUAL);break;case Tw:n.depthFunc(n.GEQUAL);break;case ww:n.depthFunc(n.GREATER);break;case Aw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}q=de}},setLocked:function(de){k=de},setClear:function(de){Z!==de&&(n.clearDepth(de),Z=de)},reset:function(){k=!1,ce=null,q=null,Z=null}}}function i(){let k=!1,ce=null,q=null,Z=null,de=null,ke=null,et=null,Rt=null,Gt=null;return{setTest:function(at){k||(at?me(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(at){ce!==at&&!k&&(n.stencilMask(at),ce=at)},setFunc:function(at,li,kn){(q!==at||Z!==li||de!==kn)&&(n.stencilFunc(at,li,kn),q=at,Z=li,de=kn)},setOp:function(at,li,kn){(ke!==at||et!==li||Rt!==kn)&&(n.stencilOp(at,li,kn),ke=at,et=li,Rt=kn)},setLocked:function(at){k=at},setClear:function(at){Gt!==at&&(n.clearStencil(at),Gt=at)},reset:function(){k=!1,ce=null,q=null,Z=null,de=null,ke=null,et=null,Rt=null,Gt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],p=null,g=!1,_=null,m=null,h=null,v=null,y=null,x=null,b=null,R=new Ve(0,0,0),A=0,E=!1,w=null,M=null,L=null,W=null,H=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const Q=n.getParameter(n.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=K>=2);let F=null,j={};const te=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),Re=new ct().fromArray(te),Ye=new ct().fromArray(ue);function X(k,ce,q,Z){const de=new Uint8Array(4),ke=n.createTexture();n.bindTexture(k,ke),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<q;et++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(ce,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(ce+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ke}const oe={};oe[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(n.DEPTH_TEST),s.setFunc(fu),st(!1),De(Fg),me(n.CULL_FACE),Ut(nr);function me(k){c[k]!==!0&&(n.enable(k),c[k]=!0)}function ye(k){c[k]!==!1&&(n.disable(k),c[k]=!1)}function Ne(k,ce){return u[k]!==ce?(n.bindFramebuffer(k,ce),u[k]=ce,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ce),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ce),!0):!1}function We(k,ce){let q=f,Z=!1;if(k){q=d.get(ce),q===void 0&&(q=[],d.set(ce,q));const de=k.textures;if(q.length!==de.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,et=de.length;ke<et;ke++)q[ke]=n.COLOR_ATTACHMENT0+ke;q.length=de.length,Z=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,Z=!0);Z&&n.drawBuffers(q)}function Ke(k){return p!==k?(n.useProgram(k),p=k,!0):!1}const At={[rs]:n.FUNC_ADD,[iw]:n.FUNC_SUBTRACT,[rw]:n.FUNC_REVERSE_SUBTRACT};At[sw]=n.MIN,At[ow]=n.MAX;const I={[aw]:n.ZERO,[lw]:n.ONE,[cw]:n.SRC_COLOR,[nh]:n.SRC_ALPHA,[mw]:n.SRC_ALPHA_SATURATE,[hw]:n.DST_COLOR,[dw]:n.DST_ALPHA,[uw]:n.ONE_MINUS_SRC_COLOR,[ih]:n.ONE_MINUS_SRC_ALPHA,[pw]:n.ONE_MINUS_DST_COLOR,[fw]:n.ONE_MINUS_DST_ALPHA,[gw]:n.CONSTANT_COLOR,[_w]:n.ONE_MINUS_CONSTANT_COLOR,[vw]:n.CONSTANT_ALPHA,[yw]:n.ONE_MINUS_CONSTANT_ALPHA};function Ut(k,ce,q,Z,de,ke,et,Rt,Gt,at){if(k===nr){g===!0&&(ye(n.BLEND),g=!1);return}if(g===!1&&(me(n.BLEND),g=!0),k!==nw){if(k!==_||at!==E){if((m!==rs||y!==rs)&&(n.blendEquation(n.FUNC_ADD),m=rs,y=rs),at)switch(k){case go:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case th:n.blendFunc(n.ONE,n.ONE);break;case Bg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case go:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case th:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}h=null,v=null,x=null,b=null,R.set(0,0,0),A=0,_=k,E=at}return}de=de||ce,ke=ke||q,et=et||Z,(ce!==m||de!==y)&&(n.blendEquationSeparate(At[ce],At[de]),m=ce,y=de),(q!==h||Z!==v||ke!==x||et!==b)&&(n.blendFuncSeparate(I[q],I[Z],I[ke],I[et]),h=q,v=Z,x=ke,b=et),(Rt.equals(R)===!1||Gt!==A)&&(n.blendColor(Rt.r,Rt.g,Rt.b,Gt),R.copy(Rt),A=Gt),_=k,E=!1}function Ge(k,ce){k.side===Pi?ye(n.CULL_FACE):me(n.CULL_FACE);let q=k.side===Fn;ce&&(q=!q),st(q),k.blending===go&&k.transparent===!1?Ut(nr):Ut(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),r.setMask(k.colorWrite);const Z=k.stencilWrite;o.setTest(Z),Z&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Fe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function st(k){w!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),w=k)}function De(k){k!==JT?(me(n.CULL_FACE),k!==M&&(k===Fg?n.cullFace(n.BACK):k===ew?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),M=k}function Ot(k){k!==L&&($&&n.lineWidth(k),L=k)}function Fe(k,ce,q){k?(me(n.POLYGON_OFFSET_FILL),(W!==ce||H!==q)&&(n.polygonOffset(ce,q),W=ce,H=q)):ye(n.POLYGON_OFFSET_FILL)}function je(k){k?me(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function P(k){k===void 0&&(k=n.TEXTURE0+Y-1),F!==k&&(n.activeTexture(k),F=k)}function T(k,ce,q){q===void 0&&(F===null?q=n.TEXTURE0+Y-1:q=F);let Z=j[q];Z===void 0&&(Z={type:void 0,texture:void 0},j[q]=Z),(Z.type!==k||Z.texture!==ce)&&(F!==q&&(n.activeTexture(q),F=q),n.bindTexture(k,ce||oe[k]),Z.type=k,Z.texture=ce)}function G(){const k=j[F];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{n.compressedTexImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Xe(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(k){Re.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),Re.copy(k))}function Te(k){Ye.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Ye.copy(k))}function Be(k,ce){let q=l.get(ce);q===void 0&&(q=new WeakMap,l.set(ce,q));let Z=q.get(k);Z===void 0&&(Z=n.getUniformBlockIndex(ce,k.name),q.set(k,Z))}function $e(k,ce){const Z=l.get(ce).get(k);a.get(ce)!==Z&&(n.uniformBlockBinding(ce,Z,k.__bindingPointIndex),a.set(ce,Z))}function yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},F=null,j={},u={},d=new WeakMap,f=[],p=null,g=!1,_=null,m=null,h=null,v=null,y=null,x=null,b=null,R=new Ve(0,0,0),A=0,E=!1,w=null,M=null,L=null,W=null,H=null,Re.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:me,disable:ye,bindFramebuffer:Ne,drawBuffers:We,useProgram:Ke,setBlending:Ut,setMaterial:Ge,setFlipSided:st,setCullFace:De,setLineWidth:Ot,setPolygonOffset:Fe,setScissorTest:je,activeTexture:P,bindTexture:T,unbindTexture:G,compressedTexImage2D:ne,compressedTexImage3D:se,texImage2D:xe,texImage3D:tt,updateUBOMapping:Be,uniformBlockBinding:$e,texStorage2D:Xe,texStorage3D:ae,texSubImage2D:ie,texSubImage3D:Ce,compressedTexSubImage2D:ge,compressedTexSubImage3D:Me,scissor:ze,viewport:Te,reset:yt}}function U_(n,e,t,i){const r=nP(i);switch(t){case ox:return n*e;case lx:return n*e;case cx:return n*e*2;case jp:return n*e/r.components*r.byteLength;case Xp:return n*e/r.components*r.byteLength;case ux:return n*e*2/r.components*r.byteLength;case Yp:return n*e*2/r.components*r.byteLength;case ax:return n*e*3/r.components*r.byteLength;case jn:return n*e*4/r.components*r.byteLength;case Kp:return n*e*4/r.components*r.byteLength;case Nc:case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ah:case ch:return Math.max(n,16)*Math.max(e,8)/4;case oh:case lh:return Math.max(n,8)*Math.max(e,8)/2;case uh:case dh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _h:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case xh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Th:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ah:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bc:case Rh:case bh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case dx:case Ch:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ph:case Lh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nP(n){switch(n){case lr:case ix:return{byteLength:1,components:1};case tl:case rx:case Wo:return{byteLength:2,components:1};case Gp:case Wp:return{byteLength:2,components:4};case xs:case Vp:case yi:return{byteLength:4,components:1};case sx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function iP(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,T){return p?new OffscreenCanvas(P,T):rl("canvas")}function _(P,T,G){let ne=1;const se=je(P);if((se.width>G||se.height>G)&&(ne=G/Math.max(se.width,se.height)),ne<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ie=Math.floor(ne*se.width),Ce=Math.floor(ne*se.height);d===void 0&&(d=g(ie,Ce));const ge=T?g(ie,Ce):d;return ge.width=ie,ge.height=Ce,ge.getContext("2d").drawImage(P,0,0,ie,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ie+"x"+Ce+")."),ge}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Tn&&P.minFilter!==En}function h(P){n.generateMipmap(P)}function v(P,T,G,ne,se=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=T;if(T===n.RED&&(G===n.FLOAT&&(ie=n.R32F),G===n.HALF_FLOAT&&(ie=n.R16F),G===n.UNSIGNED_BYTE&&(ie=n.R8)),T===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.R8UI),G===n.UNSIGNED_SHORT&&(ie=n.R16UI),G===n.UNSIGNED_INT&&(ie=n.R32UI),G===n.BYTE&&(ie=n.R8I),G===n.SHORT&&(ie=n.R16I),G===n.INT&&(ie=n.R32I)),T===n.RG&&(G===n.FLOAT&&(ie=n.RG32F),G===n.HALF_FLOAT&&(ie=n.RG16F),G===n.UNSIGNED_BYTE&&(ie=n.RG8)),T===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ie=n.RG8UI),G===n.UNSIGNED_SHORT&&(ie=n.RG16UI),G===n.UNSIGNED_INT&&(ie=n.RG32UI),G===n.BYTE&&(ie=n.RG8I),G===n.SHORT&&(ie=n.RG16I),G===n.INT&&(ie=n.RG32I)),T===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),T===n.RGBA){const Ce=se?pu:lt.getTransfer(ne);G===n.FLOAT&&(ie=n.RGBA32F),G===n.HALF_FLOAT&&(ie=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ie=Ce===xt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(P,T){let G;return P?T===null||T===xs||T===Io?G=n.DEPTH24_STENCIL8:T===yi?G=n.DEPTH32F_STENCIL8:T===tl&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===xs||T===Io?G=n.DEPTH_COMPONENT24:T===yi?G=n.DEPTH_COMPONENT32F:T===tl&&(G=n.DEPTH_COMPONENT16),G}function x(P,T){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Tn&&P.minFilter!==En?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function b(P){const T=P.target;T.removeEventListener("dispose",b),A(T),T.isVideoTexture&&u.delete(T)}function R(P){const T=P.target;T.removeEventListener("dispose",R),w(T)}function A(P){const T=i.get(P);if(T.__webglInit===void 0)return;const G=P.source,ne=f.get(G);if(ne){const se=ne[T.__cacheKey];se.usedTimes--,se.usedTimes===0&&E(P),Object.keys(ne).length===0&&f.delete(G)}i.remove(P)}function E(P){const T=i.get(P);n.deleteTexture(T.__webglTexture);const G=P.source,ne=f.get(G);delete ne[T.__cacheKey],o.memory.textures--}function w(P){const T=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(T.__webglFramebuffer[ne]))for(let se=0;se<T.__webglFramebuffer[ne].length;se++)n.deleteFramebuffer(T.__webglFramebuffer[ne][se]);else n.deleteFramebuffer(T.__webglFramebuffer[ne]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ne])}else{if(Array.isArray(T.__webglFramebuffer))for(let ne=0;ne<T.__webglFramebuffer.length;ne++)n.deleteFramebuffer(T.__webglFramebuffer[ne]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ne=0;ne<T.__webglColorRenderbuffer.length;ne++)T.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ne]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const G=P.textures;for(let ne=0,se=G.length;ne<se;ne++){const ie=i.get(G[ne]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),o.memory.textures--),i.remove(G[ne])}i.remove(P)}let M=0;function L(){M=0}function W(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function H(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function Y(P,T){const G=i.get(P);if(P.isVideoTexture&&Ot(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const ne=P.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(G,P,T);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+T)}function $(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Ye(G,P,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+T)}function K(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Ye(G,P,T);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+T)}function Q(P,T){const G=i.get(P);if(P.version>0&&G.__version!==P.version){X(G,P,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+T)}const F={[Do]:n.REPEAT,[Cr]:n.CLAMP_TO_EDGE,[hu]:n.MIRRORED_REPEAT},j={[Tn]:n.NEAREST,[nx]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[En]:n.LINEAR,[Ic]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},te={[Ow]:n.NEVER,[Vw]:n.ALWAYS,[Fw]:n.LESS,[px]:n.LEQUAL,[Bw]:n.EQUAL,[Hw]:n.GEQUAL,[kw]:n.GREATER,[zw]:n.NOTEQUAL};function ue(P,T){if(T.type===yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===En||T.magFilter===Ic||T.magFilter===Ea||T.magFilter===Zi||T.minFilter===En||T.minFilter===Ic||T.minFilter===Ea||T.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,F[T.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,F[T.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,F[T.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,j[T.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,j[T.minFilter]),T.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Tn||T.minFilter!==Ea&&T.minFilter!==Zi||T.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Re(P,T){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",b));const ne=T.source;let se=f.get(ne);se===void 0&&(se={},f.set(ne,se));const ie=H(T);if(ie!==P.__cacheKey){se[ie]===void 0&&(se[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[ie].usedTimes++;const Ce=se[P.__cacheKey];Ce!==void 0&&(se[P.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(T)),P.__cacheKey=ie,P.__webglTexture=se[ie].texture}return G}function Ye(P,T,G){let ne=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=n.TEXTURE_3D);const se=Re(P,T),ie=T.source;t.bindTexture(ne,P.__webglTexture,n.TEXTURE0+G);const Ce=i.get(ie);if(ie.version!==Ce.__version||se===!0){t.activeTexture(n.TEXTURE0+G);const ge=lt.getPrimaries(lt.workingColorSpace),Me=T.colorSpace===wr?null:lt.getPrimaries(T.colorSpace),Xe=T.colorSpace===wr||ge===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ae=_(T.image,!1,r.maxTextureSize);ae=Fe(T,ae);const xe=s.convert(T.format,T.colorSpace),tt=s.convert(T.type);let ze=v(T.internalFormat,xe,tt,T.colorSpace,T.isVideoTexture);ue(ne,T);let Te;const Be=T.mipmaps,$e=T.isVideoTexture!==!0,yt=Ce.__version===void 0||se===!0,k=ie.dataReady,ce=x(T,ae);if(T.isDepthTexture)ze=y(T.format===No,T.type),yt&&($e?t.texStorage2D(n.TEXTURE_2D,1,ze,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,ze,ae.width,ae.height,0,xe,tt,null));else if(T.isDataTexture)if(Be.length>0){$e&&yt&&t.texStorage2D(n.TEXTURE_2D,ce,ze,Be[0].width,Be[0].height);for(let q=0,Z=Be.length;q<Z;q++)Te=Be[q],$e?k&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Te.width,Te.height,xe,tt,Te.data):t.texImage2D(n.TEXTURE_2D,q,ze,Te.width,Te.height,0,xe,tt,Te.data);T.generateMipmaps=!1}else $e?(yt&&t.texStorage2D(n.TEXTURE_2D,ce,ze,ae.width,ae.height),k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,xe,tt,ae.data)):t.texImage2D(n.TEXTURE_2D,0,ze,ae.width,ae.height,0,xe,tt,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$e&&yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ze,Be[0].width,Be[0].height,ae.depth);for(let q=0,Z=Be.length;q<Z;q++)if(Te=Be[q],T.format!==jn)if(xe!==null)if($e){if(k)if(T.layerUpdates.size>0){const de=U_(Te.width,Te.height,T.format,T.type);for(const ke of T.layerUpdates){const et=Te.data.subarray(ke*de/Te.data.BYTES_PER_ELEMENT,(ke+1)*de/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ke,Te.width,Te.height,1,xe,et,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Te.width,Te.height,ae.depth,xe,Te.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,ze,Te.width,Te.height,ae.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?k&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Te.width,Te.height,ae.depth,xe,tt,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,ze,Te.width,Te.height,ae.depth,0,xe,tt,Te.data)}else{$e&&yt&&t.texStorage2D(n.TEXTURE_2D,ce,ze,Be[0].width,Be[0].height);for(let q=0,Z=Be.length;q<Z;q++)Te=Be[q],T.format!==jn?xe!==null?$e?k&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Te.width,Te.height,xe,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,q,ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?k&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Te.width,Te.height,xe,tt,Te.data):t.texImage2D(n.TEXTURE_2D,q,ze,Te.width,Te.height,0,xe,tt,Te.data)}else if(T.isDataArrayTexture)if($e){if(yt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,ze,ae.width,ae.height,ae.depth),k)if(T.layerUpdates.size>0){const q=U_(ae.width,ae.height,T.format,T.type);for(const Z of T.layerUpdates){const de=ae.data.subarray(Z*q/ae.data.BYTES_PER_ELEMENT,(Z+1)*q/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ae.width,ae.height,1,xe,tt,de)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,xe,tt,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ae.width,ae.height,ae.depth,0,xe,tt,ae.data);else if(T.isData3DTexture)$e?(yt&&t.texStorage3D(n.TEXTURE_3D,ce,ze,ae.width,ae.height,ae.depth),k&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,xe,tt,ae.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ae.width,ae.height,ae.depth,0,xe,tt,ae.data);else if(T.isFramebufferTexture){if(yt)if($e)t.texStorage2D(n.TEXTURE_2D,ce,ze,ae.width,ae.height);else{let q=ae.width,Z=ae.height;for(let de=0;de<ce;de++)t.texImage2D(n.TEXTURE_2D,de,ze,q,Z,0,xe,tt,null),q>>=1,Z>>=1}}else if(Be.length>0){if($e&&yt){const q=je(Be[0]);t.texStorage2D(n.TEXTURE_2D,ce,ze,q.width,q.height)}for(let q=0,Z=Be.length;q<Z;q++)Te=Be[q],$e?k&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,xe,tt,Te):t.texImage2D(n.TEXTURE_2D,q,ze,xe,tt,Te);T.generateMipmaps=!1}else if($e){if(yt){const q=je(ae);t.texStorage2D(n.TEXTURE_2D,ce,ze,q.width,q.height)}k&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,tt,ae)}else t.texImage2D(n.TEXTURE_2D,0,ze,xe,tt,ae);m(T)&&h(ne),Ce.__version=ie.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function X(P,T,G){if(T.image.length!==6)return;const ne=Re(P,T),se=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const ie=i.get(se);if(se.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+G);const Ce=lt.getPrimaries(lt.workingColorSpace),ge=T.colorSpace===wr?null:lt.getPrimaries(T.colorSpace),Me=T.colorSpace===wr||Ce===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Xe=T.isCompressedTexture||T.image[0].isCompressedTexture,ae=T.image[0]&&T.image[0].isDataTexture,xe=[];for(let Z=0;Z<6;Z++)!Xe&&!ae?xe[Z]=_(T.image[Z],!0,r.maxCubemapSize):xe[Z]=ae?T.image[Z].image:T.image[Z],xe[Z]=Fe(T,xe[Z]);const tt=xe[0],ze=s.convert(T.format,T.colorSpace),Te=s.convert(T.type),Be=v(T.internalFormat,ze,Te,T.colorSpace),$e=T.isVideoTexture!==!0,yt=ie.__version===void 0||ne===!0,k=se.dataReady;let ce=x(T,tt);ue(n.TEXTURE_CUBE_MAP,T);let q;if(Xe){$e&&yt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Be,tt.width,tt.height);for(let Z=0;Z<6;Z++){q=xe[Z].mipmaps;for(let de=0;de<q.length;de++){const ke=q[de];T.format!==jn?ze!==null?$e?k&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,ke.width,ke.height,ze,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Be,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,ke.width,ke.height,ze,Te,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Be,ke.width,ke.height,0,ze,Te,ke.data)}}}else{if(q=T.mipmaps,$e&&yt){q.length>0&&ce++;const Z=je(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ce,Be,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ae){$e?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xe[Z].width,xe[Z].height,ze,Te,xe[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,xe[Z].width,xe[Z].height,0,ze,Te,xe[Z].data);for(let de=0;de<q.length;de++){const et=q[de].image[Z].image;$e?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,et.width,et.height,ze,Te,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Be,et.width,et.height,0,ze,Te,et.data)}}else{$e?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ze,Te,xe[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Be,ze,Te,xe[Z]);for(let de=0;de<q.length;de++){const ke=q[de];$e?k&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,ze,Te,ke.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Be,ze,Te,ke.image[Z])}}}m(T)&&h(n.TEXTURE_CUBE_MAP),ie.__version=se.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function oe(P,T,G,ne,se,ie){const Ce=s.convert(G.format,G.colorSpace),ge=s.convert(G.type),Me=v(G.internalFormat,Ce,ge,G.colorSpace);if(!i.get(T).__hasExternalTextures){const ae=Math.max(1,T.width>>ie),xe=Math.max(1,T.height>>ie);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,ie,Me,ae,xe,T.depth,0,Ce,ge,null):t.texImage2D(se,ie,Me,ae,xe,0,Ce,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),De(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,se,i.get(G).__webglTexture,0,st(T)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,se,i.get(G).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function me(P,T,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),T.depthBuffer){const ne=T.depthTexture,se=ne&&ne.isDepthTexture?ne.type:null,ie=y(T.stencilBuffer,se),Ce=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=st(T);De(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,ie,T.width,T.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,ie,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ie,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,P)}else{const ne=T.textures;for(let se=0;se<ne.length;se++){const ie=ne[se],Ce=s.convert(ie.format,ie.colorSpace),ge=s.convert(ie.type),Me=v(ie.internalFormat,Ce,ge,ie.colorSpace),Xe=st(T);G&&De(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Me,T.width,T.height):De(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Me,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Me,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Y(T.depthTexture,0);const ne=i.get(T.depthTexture).__webglTexture,se=st(T);if(T.depthTexture.format===_o)De(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(T.depthTexture.format===No)De(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ne(P){const T=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const ne=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ne){const se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ne.removeEventListener("dispose",se)};ne.addEventListener("dispose",se),T.__depthDisposeCallback=se}T.__boundDepthTexture=ne}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ye(T.__webglFramebuffer,P)}else if(G){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]===void 0)T.__webglDepthbuffer[ne]=n.createRenderbuffer(),me(T.__webglDepthbuffer[ne],P,!1);else{const se=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),me(T.__webglDepthbuffer,P,!1);else{const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,se)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(P,T,G){const ne=i.get(P);T!==void 0&&oe(ne.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ne(P)}function Ke(P){const T=P.texture,G=i.get(P),ne=i.get(T);P.addEventListener("dispose",R);const se=P.textures,ie=P.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=T.version,o.memory.textures++),ie){G.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ge]=[];for(let Me=0;Me<T.mipmaps.length;Me++)G.__webglFramebuffer[ge][Me]=n.createFramebuffer()}else G.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ge=0;ge<T.mipmaps.length;ge++)G.__webglFramebuffer[ge]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ge=0,Me=se.length;ge<Me;ge++){const Xe=i.get(se[ge]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&De(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ge=0;ge<se.length;ge++){const Me=se[ge];G.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ge]);const Xe=s.convert(Me.format,Me.colorSpace),ae=s.convert(Me.type),xe=v(Me.internalFormat,Xe,ae,Me.colorSpace,P.isXRRenderTarget===!0),tt=st(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,xe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,G.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),me(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),ue(n.TEXTURE_CUBE_MAP,T);for(let ge=0;ge<6;ge++)if(T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)oe(G.__webglFramebuffer[ge][Me],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Me);else oe(G.__webglFramebuffer[ge],P,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(T)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ge=0,Me=se.length;ge<Me;ge++){const Xe=se[ge],ae=i.get(Xe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ue(n.TEXTURE_2D,Xe),oe(G.__webglFramebuffer,P,Xe,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),m(Xe)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ge=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ne.__webglTexture),ue(ge,T),T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)oe(G.__webglFramebuffer[Me],P,T,n.COLOR_ATTACHMENT0,ge,Me);else oe(G.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0,ge,0);m(T)&&h(ge),t.unbindTexture()}P.depthBuffer&&Ne(P)}function At(P){const T=P.textures;for(let G=0,ne=T.length;G<ne;G++){const se=T[G];if(m(se)){const ie=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ce=i.get(se).__webglTexture;t.bindTexture(ie,Ce),h(ie),t.unbindTexture()}}}const I=[],Ut=[];function Ge(P){if(P.samples>0){if(De(P)===!1){const T=P.textures,G=P.width,ne=P.height;let se=n.COLOR_BUFFER_BIT;const ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(P),ge=T.length>1;if(ge)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);const Xe=i.get(T[Me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Xe,0)}n.blitFramebuffer(0,0,G,ne,0,0,G,ne,se,n.NEAREST),l===!0&&(I.length=0,Ut.length=0,I.push(n.COLOR_ATTACHMENT0+Me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(I.push(ie),Ut.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[Me]);const Xe=i.get(T[Me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const T=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function st(P){return Math.min(r.maxSamples,P.samples)}function De(P){const T=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ot(P){const T=o.render.frame;u.get(P)!==T&&(u.set(P,T),P.update())}function Fe(P,T){const G=P.colorSpace,ne=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==cn&&G!==wr&&(lt.getTransfer(G)===xt?(ne!==jn||se!==lr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=We,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=De}function rP(n,e){function t(i,r=wr){let s;const o=lt.getTransfer(r);if(i===lr)return n.UNSIGNED_BYTE;if(i===Gp)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sx)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ix)return n.BYTE;if(i===rx)return n.SHORT;if(i===tl)return n.UNSIGNED_SHORT;if(i===Vp)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===Wo)return n.HALF_FLOAT;if(i===ox)return n.ALPHA;if(i===ax)return n.RGB;if(i===jn)return n.RGBA;if(i===lx)return n.LUMINANCE;if(i===cx)return n.LUMINANCE_ALPHA;if(i===_o)return n.DEPTH_COMPONENT;if(i===No)return n.DEPTH_STENCIL;if(i===jp)return n.RED;if(i===Xp)return n.RED_INTEGER;if(i===ux)return n.RG;if(i===Yp)return n.RG_INTEGER;if(i===Kp)return n.RGBA_INTEGER;if(i===Nc||i===Uc||i===Oc||i===Fc)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Nc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Nc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oh||i===ah||i===lh||i===ch)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===oh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ah)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ch)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uh||i===dh||i===fh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uh||i===dh)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hh||i===ph||i===mh||i===gh||i===_h||i===vh||i===yh||i===xh||i===Sh||i===Mh||i===Eh||i===Th||i===wh||i===Ah)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ph)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_h)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===xh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Eh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Th)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wh)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ah)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Bc||i===Rh||i===bh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Bc)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dx||i===Ch||i===Ph||i===Lh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ph)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Io?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class sP extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class us extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oP={type:"move"};class Gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),h=this._getHandJoint(c,_);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const aP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lP=`
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

}`;class cP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new en,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new on({vertexShader:aP,fragmentShader:lP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new ml(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uP extends Ts{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const _=new cP,m=t.getContextAttributes();let h=null,v=null;const y=[],x=[],b=new Ae;let R=null;const A=new Mn;A.layers.enable(1),A.viewport=new ct;const E=new Mn;E.layers.enable(2),E.viewport=new ct;const w=[A,E],M=new sP;M.layers.enable(1),M.layers.enable(2);let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=y[X];return oe===void 0&&(oe=new Gd,y[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=y[X];return oe===void 0&&(oe=new Gd,y[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=y[X];return oe===void 0&&(oe=new Gd,y[X]=oe),oe.getHandSpace()};function H(X){const oe=x.indexOf(X.inputSource);if(oe===-1)return;const me=y[oe];me!==void 0&&(me.update(X.inputSource,X.frame,c||o),me.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let X=0;X<y.length;X++){const oe=x[X];oe!==null&&(x[X]=null,y[X].disconnect(oe))}L=null,W=null,_.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ei(p.framebufferWidth,p.framebufferHeight,{format:jn,type:lr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,me=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?No:_o,me=m.stencil?Io:xs);const Ne={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ei(f.textureWidth,f.textureHeight,{format:jn,type:lr,depthTexture:new Ax(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(X){for(let oe=0;oe<X.removed.length;oe++){const me=X.removed[oe],ye=x.indexOf(me);ye>=0&&(x[ye]=null,y[ye].disconnect(me))}for(let oe=0;oe<X.added.length;oe++){const me=X.added[oe];let ye=x.indexOf(me);if(ye===-1){for(let We=0;We<y.length;We++)if(We>=x.length){x.push(me),ye=We;break}else if(x[We]===null){x[We]=me,ye=We;break}if(ye===-1)break}const Ne=y[ye];Ne&&Ne.connect(me)}}const K=new N,Q=new N;function F(X,oe,me){K.setFromMatrixPosition(oe.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);const ye=K.distanceTo(Q),Ne=oe.projectionMatrix.elements,We=me.projectionMatrix.elements,Ke=Ne[14]/(Ne[10]-1),At=Ne[14]/(Ne[10]+1),I=(Ne[9]+1)/Ne[5],Ut=(Ne[9]-1)/Ne[5],Ge=(Ne[8]-1)/Ne[0],st=(We[8]+1)/We[0],De=Ke*Ge,Ot=Ke*st,Fe=ye/(-Ge+st),je=Fe*-Ge;if(oe.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(je),X.translateZ(Fe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ne[10]===-1)X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const P=Ke+Fe,T=At+Fe,G=De-je,ne=Ot+(ye-je),se=I*At/T*P,ie=Ut*At/T*P;X.projectionMatrix.makePerspective(G,ne,se,ie,P,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function j(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let oe=X.near,me=X.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(me=_.depthFar)),M.near=E.near=A.near=oe,M.far=E.far=A.far=me,(L!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,W=M.far);const ye=X.parent,Ne=M.cameras;j(M,ye);for(let We=0;We<Ne.length;We++)j(Ne[We],ye);Ne.length===2?F(M,A,E):M.projectionMatrix.copy(A.projectionMatrix),te(X,M,ye)};function te(X,oe,me){me===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Uo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(X){l=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ue=null;function Re(X,oe){if(u=oe.getViewerPose(c||o),g=oe,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ye=!1;me.length!==M.cameras.length&&(M.cameras.length=0,ye=!0);for(let We=0;We<me.length;We++){const Ke=me[We];let At=null;if(p!==null)At=p.getViewport(Ke);else{const Ut=d.getViewSubImage(f,Ke);At=Ut.viewport,We===0&&(e.setRenderTargetTextures(v,Ut.colorTexture,f.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(v))}let I=w[We];I===void 0&&(I=new Mn,I.layers.enable(We),I.viewport=new ct,w[We]=I),I.matrix.fromArray(Ke.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(Ke.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(At.x,At.y,At.width,At.height),We===0&&(M.matrix.copy(I.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ye===!0&&M.cameras.push(I)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const We=d.getDepthInformation(me[0]);We&&We.isValid&&We.texture&&_.init(e,We,r.renderState)}}for(let me=0;me<y.length;me++){const ye=x[me],Ne=y[me];ye!==null&&Ne!==void 0&&Ne.update(ye,oe,c||o)}ue&&ue(X,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Ye=new wx;Ye.setAnimationLoop(Re),this.setAnimationLoop=function(X){ue=X},this.dispose=function(){}}}const Qr=new Oi,dP=new qe;function fP(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Mx(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),_(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,y):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Fn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Fn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Qr.copy(x),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),m.envMapRotation.value.setFromMatrix4(dP.makeRotationFromEuler(Qr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=y*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Fn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function _(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hP(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const x=y.program;i.uniformBlockBinding(v,x)}function c(v,y){let x=r[v.id];x===void 0&&(g(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",m));const b=y.program;i.updateUBOMapping(v,b);const R=e.render.frame;s[v.id]!==R&&(f(v),s[v.id]=R)}function u(v){const y=d();v.__bindingPointIndex=y;const x=n.createBuffer(),b=v.__size,R=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,b,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=r[v.id],x=v.uniforms,b=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let R=0,A=x.length;R<A;R++){const E=Array.isArray(x[R])?x[R]:[x[R]];for(let w=0,M=E.length;w<M;w++){const L=E[w];if(p(L,R,w,b)===!0){const W=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let $=0;$<H.length;$++){const K=H[$],Q=_(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,W+Y,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,y,x,b){const R=v.value,A=y+"_"+x;if(b[A]===void 0)return typeof R=="number"||typeof R=="boolean"?b[A]=R:b[A]=R.clone(),!0;{const E=b[A];if(typeof R=="number"||typeof R=="boolean"){if(E!==R)return b[A]=R,!0}else if(E.equals(R)===!1)return E.copy(R),!0}return!1}function g(v){const y=v.uniforms;let x=0;const b=16;for(let A=0,E=y.length;A<E;A++){const w=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,L=w.length;M<L;M++){const W=w[M],H=Array.isArray(W.value)?W.value:[W.value];for(let Y=0,$=H.length;Y<$;Y++){const K=H[Y],Q=_(K),F=x%b,j=F%Q.boundary,te=F+j;x+=j,te!==0&&b-te<Q.storage&&(x+=b-te),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=Q.storage}}}const R=x%b;return R>0&&(x+=b-R),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Lx{constructor(e={}){const{canvas:t=s1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=kr,this.toneMappingExposure=1;const y=this;let x=!1,b=0,R=0,A=null,E=-1,w=null;const M=new ct,L=new ct;let W=null;const H=new Ve(0);let Y=0,$=t.width,K=t.height,Q=1,F=null,j=null;const te=new ct(0,0,$,K),ue=new ct(0,0,$,K);let Re=!1;const Ye=new Zp;let X=!1,oe=!1;const me=new qe,ye=new N,Ne=new ct,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function At(){return A===null?Q:1}let I=i;function Ut(S,C){return t.getContext(S,C)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hp}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",de,!1),I===null){const C="webgl2";if(I=Ut(C,S),I===null)throw Ut(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ge,st,De,Ot,Fe,je,P,T,G,ne,se,ie,Ce,ge,Me,Xe,ae,xe,tt,ze,Te,Be,$e,yt;function k(){Ge=new xb(I),Ge.init(),Be=new rP(I,Ge),st=new pb(I,Ge,e,Be),De=new tP(I),Ot=new Eb(I),Fe=new HC,je=new iP(I,Ge,De,Fe,st,Be,Ot),P=new gb(y),T=new yb(y),G=new P1(I),$e=new fb(I,G),ne=new Sb(I,G,Ot,$e),se=new wb(I,ne,G,Ot),tt=new Tb(I,st,je),Xe=new mb(Fe),ie=new zC(y,P,T,Ge,st,$e,Xe),Ce=new fP(y,Fe),ge=new GC,Me=new $C(Ge),xe=new db(y,P,T,De,se,f,l),ae=new eP(y,se,st),yt=new hP(I,Ot,st,De),ze=new hb(I,Ge,Ot),Te=new Mb(I,Ge,Ot),Ot.programs=ie.programs,y.capabilities=st,y.extensions=Ge,y.properties=Fe,y.renderLists=ge,y.shadowMap=ae,y.state=De,y.info=Ot}k();const ce=new uP(y,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=Ge.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ge.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(S){S!==void 0&&(Q=S,this.setSize($,K,!1))},this.getSize=function(S){return S.set($,K)},this.setSize=function(S,C,U=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,K=C,t.width=Math.floor(S*Q),t.height=Math.floor(C*Q),U===!0&&(t.style.width=S+"px",t.style.height=C+"px"),this.setViewport(0,0,S,C)},this.getDrawingBufferSize=function(S){return S.set($*Q,K*Q).floor()},this.setDrawingBufferSize=function(S,C,U){$=S,K=C,Q=U,t.width=Math.floor(S*U),t.height=Math.floor(C*U),this.setViewport(0,0,S,C)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(te)},this.setViewport=function(S,C,U,z){S.isVector4?te.set(S.x,S.y,S.z,S.w):te.set(S,C,U,z),De.viewport(M.copy(te).multiplyScalar(Q).round())},this.getScissor=function(S){return S.copy(ue)},this.setScissor=function(S,C,U,z){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,C,U,z),De.scissor(L.copy(ue).multiplyScalar(Q).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(S){De.setScissorTest(Re=S)},this.setOpaqueSort=function(S){F=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(S=!0,C=!0,U=!0){let z=0;if(S){let O=!1;if(A!==null){const J=A.texture.format;O=J===Kp||J===Yp||J===Xp}if(O){const J=A.texture.type,re=J===lr||J===xs||J===tl||J===Io||J===Gp||J===Wp,he=xe.getClearColor(),fe=xe.getClearAlpha(),Ue=he.r,Ie=he.g,we=he.b;re?(p[0]=Ue,p[1]=Ie,p[2]=we,p[3]=fe,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Ue,g[1]=Ie,g[2]=we,g[3]=fe,I.clearBufferiv(I.COLOR,0,g))}else z|=I.COLOR_BUFFER_BIT}C&&(z|=I.DEPTH_BUFFER_BIT),U&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ge.dispose(),Me.dispose(),Fe.dispose(),P.dispose(),T.dispose(),se.dispose(),$e.dispose(),yt.dispose(),ie.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",kn),ce.removeEventListener("sessionend",Xr),qn.stop()};function q(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const S=Ot.autoReset,C=ae.enabled,U=ae.autoUpdate,z=ae.needsUpdate,O=ae.type;k(),Ot.autoReset=S,ae.enabled=C,ae.autoUpdate=U,ae.needsUpdate=z,ae.type=O}function de(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ke(S){const C=S.target;C.removeEventListener("dispose",ke),et(C)}function et(S){Rt(S),Fe.remove(S)}function Rt(S){const C=Fe.get(S).programs;C!==void 0&&(C.forEach(function(U){ie.releaseProgram(U)}),S.isShaderMaterial&&ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,C,U,z,O,J){C===null&&(C=We);const re=O.isMesh&&O.matrixWorld.determinant()<0,he=Le(S,C,U,z,O);De.setMaterial(z,re);let fe=U.index,Ue=1;if(z.wireframe===!0){if(fe=ne.getWireframeAttribute(U),fe===void 0)return;Ue=2}const Ie=U.drawRange,we=U.attributes.position;let Je=Ie.start*Ue,vt=(Ie.start+Ie.count)*Ue;J!==null&&(Je=Math.max(Je,J.start*Ue),vt=Math.min(vt,(J.start+J.count)*Ue)),fe!==null?(Je=Math.max(Je,0),vt=Math.min(vt,fe.count)):we!=null&&(Je=Math.max(Je,0),vt=Math.min(vt,we.count));const dt=vt-Je;if(dt<0||dt===1/0)return;$e.setup(O,z,he,U,fe);let $t,ot=ze;if(fe!==null&&($t=G.get(fe),ot=Te,ot.setIndex($t)),O.isMesh)z.wireframe===!0?(De.setLineWidth(z.wireframeLinewidth*At()),ot.setMode(I.LINES)):ot.setMode(I.TRIANGLES);else if(O.isLine){let be=z.linewidth;be===void 0&&(be=1),De.setLineWidth(be*At()),O.isLineSegments?ot.setMode(I.LINES):O.isLineLoop?ot.setMode(I.LINE_LOOP):ot.setMode(I.LINE_STRIP)}else O.isPoints?ot.setMode(I.POINTS):O.isSprite&&ot.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ot.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const be=O._multiDrawStarts,Pe=O._multiDrawCounts,Oe=O._multiDrawCount,Et=fe?G.get(fe).bytesPerElement:1,ft=Fe.get(z).currentProgram.getUniforms();for(let Ct=0;Ct<Oe;Ct++)ft.setValue(I,"_gl_DrawID",Ct),ot.render(be[Ct]/Et,Pe[Ct])}else if(O.isInstancedMesh)ot.renderInstances(Je,dt,O.count);else if(U.isInstancedBufferGeometry){const be=U._maxInstanceCount!==void 0?U._maxInstanceCount:1/0,Pe=Math.min(U.instanceCount,be);ot.renderInstances(Je,dt,Pe)}else ot.render(Je,dt)};function Gt(S,C,U){S.transparent===!0&&S.side===Pi&&S.forceSinglePass===!1?(S.side=Fn,S.needsUpdate=!0,V(S,C,U),S.side=ar,S.needsUpdate=!0,V(S,C,U),S.side=Pi):V(S,C,U)}this.compile=function(S,C,U=null){U===null&&(U=S),m=Me.get(U),m.init(C),v.push(m),U.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),S!==U&&S.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const z=new Set;return S.traverse(function(O){const J=O.material;if(J)if(Array.isArray(J))for(let re=0;re<J.length;re++){const he=J[re];Gt(he,U,O),z.add(he)}else Gt(J,U,O),z.add(J)}),v.pop(),m=null,z},this.compileAsync=function(S,C,U=null){const z=this.compile(S,C,U);return new Promise(O=>{function J(){if(z.forEach(function(re){Fe.get(re).currentProgram.isReady()&&z.delete(re)}),z.size===0){O(S);return}setTimeout(J,10)}Ge.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let at=null;function li(S){at&&at(S)}function kn(){qn.stop()}function Xr(){qn.start()}const qn=new wx;qn.setAnimationLoop(li),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(S){at=S,ce.setAnimationLoop(S),S===null?qn.stop():qn.start()},ce.addEventListener("sessionstart",kn),ce.addEventListener("sessionend",Xr),this.render=function(S,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(C),C=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,C,A),m=Me.get(S,v.length),m.init(C),v.push(m),me.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Ye.setFromProjectionMatrix(me),oe=this.localClippingEnabled,X=Xe.init(this.clippingPlanes,oe),_=ge.get(S,h.length),_.init(),h.push(_),ce.enabled===!0&&ce.isPresenting===!0){const J=y.xr.getDepthSensingMesh();J!==null&&ws(J,C,-1/0,y.sortObjects)}ws(S,C,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(F,j),Ke=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ke&&xe.addToRenderList(_,S),this.info.render.frame++,X===!0&&Xe.beginShadows();const U=m.state.shadowsArray;ae.render(U,S,C),X===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,O=_.transmissive;if(m.setupLights(),C.isArrayCamera){const J=C.cameras;if(O.length>0)for(let re=0,he=J.length;re<he;re++){const fe=J[re];yl(z,O,S,fe)}Ke&&xe.render(S);for(let re=0,he=J.length;re<he;re++){const fe=J[re];vl(_,S,fe,fe.viewport)}}else O.length>0&&yl(z,O,S,C),Ke&&xe.render(S),vl(_,S,C);A!==null&&(je.updateMultisampleRenderTarget(A),je.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,C),$e.resetDefaultState(),E=-1,w=null,v.pop(),v.length>0?(m=v[v.length-1],X===!0&&Xe.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?_=h[h.length-1]:_=null};function ws(S,C,U,z){if(S.visible===!1)return;if(S.layers.test(C.layers)){if(S.isGroup)U=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(C);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ye.intersectsSprite(S)){z&&Ne.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);const re=se.update(S),he=S.material;he.visible&&_.push(S,re,he,U,Ne.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ye.intersectsObject(S))){const re=se.update(S),he=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ne.copy(S.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Ne.copy(re.boundingSphere.center)),Ne.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(he)){const fe=re.groups;for(let Ue=0,Ie=fe.length;Ue<Ie;Ue++){const we=fe[Ue],Je=he[we.materialIndex];Je&&Je.visible&&_.push(S,re,Je,U,Ne.z,we)}}else he.visible&&_.push(S,re,he,U,Ne.z,null)}}const J=S.children;for(let re=0,he=J.length;re<he;re++)ws(J[re],C,U,z)}function vl(S,C,U,z){const O=S.opaque,J=S.transmissive,re=S.transparent;m.setupLightsView(U),X===!0&&Xe.setGlobalState(y.clippingPlanes,U),z&&De.viewport(M.copy(z)),O.length>0&&D(O,C,U),J.length>0&&D(J,C,U),re.length>0&&D(re,C,U),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function yl(S,C,U,z){if((U.isScene===!0?U.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Ei(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Wo:lr,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const J=m.state.transmissionRenderTarget[z.id],re=z.viewport||M;J.setSize(re.z,re.w);const he=y.getRenderTarget();y.setRenderTarget(J),y.getClearColor(H),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Ke&&xe.render(U);const fe=y.toneMapping;y.toneMapping=kr;const Ue=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),X===!0&&Xe.setGlobalState(y.clippingPlanes,z),D(S,U,z),je.updateMultisampleRenderTarget(J),je.updateRenderTargetMipmap(J),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let we=0,Je=C.length;we<Je;we++){const vt=C[we],dt=vt.object,$t=vt.geometry,ot=vt.material,be=vt.group;if(ot.side===Pi&&dt.layers.test(z.layers)){const Pe=ot.side;ot.side=Fn,ot.needsUpdate=!0,B(dt,U,z,$t,ot,be),ot.side=Pe,ot.needsUpdate=!0,Ie=!0}}Ie===!0&&(je.updateMultisampleRenderTarget(J),je.updateRenderTargetMipmap(J))}y.setRenderTarget(he),y.setClearColor(H,Y),Ue!==void 0&&(z.viewport=Ue),y.toneMapping=fe}function D(S,C,U){const z=C.isScene===!0?C.overrideMaterial:null;for(let O=0,J=S.length;O<J;O++){const re=S[O],he=re.object,fe=re.geometry,Ue=z===null?re.material:z,Ie=re.group;he.layers.test(U.layers)&&B(he,C,U,fe,Ue,Ie)}}function B(S,C,U,z,O,J){S.onBeforeRender(y,C,U,z,O,J),S.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),O.onBeforeRender(y,C,U,z,S,J),O.transparent===!0&&O.side===Pi&&O.forceSinglePass===!1?(O.side=Fn,O.needsUpdate=!0,y.renderBufferDirect(U,C,z,O,S,J),O.side=ar,O.needsUpdate=!0,y.renderBufferDirect(U,C,z,O,S,J),O.side=Pi):y.renderBufferDirect(U,C,z,O,S,J),S.onAfterRender(y,C,U,z,O,J)}function V(S,C,U){C.isScene!==!0&&(C=We);const z=Fe.get(S),O=m.state.lights,J=m.state.shadowsArray,re=O.state.version,he=ie.getParameters(S,O.state,J,C,U),fe=ie.getProgramCacheKey(he);let Ue=z.programs;z.environment=S.isMeshStandardMaterial?C.environment:null,z.fog=C.fog,z.envMap=(S.isMeshStandardMaterial?T:P).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?C.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",ke),Ue=new Map,z.programs=Ue);let Ie=Ue.get(fe);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===re)return Se(S,he),Ie}else he.uniforms=ie.getUniforms(S),S.onBeforeCompile(he,y),Ie=ie.acquireProgram(he,fe),Ue.set(fe,Ie),z.uniforms=he.uniforms;const we=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(we.clippingPlanes=Xe.uniform),Se(S,he),z.needsLights=_e(S),z.lightsStateVersion=re,z.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function ee(S){if(S.uniformsList===null){const C=S.currentProgram.getUniforms();S.uniformsList=kc.seqWithValue(C.seq,S.uniforms)}return S.uniformsList}function Se(S,C){const U=Fe.get(S);U.outputColorSpace=C.outputColorSpace,U.batching=C.batching,U.batchingColor=C.batchingColor,U.instancing=C.instancing,U.instancingColor=C.instancingColor,U.instancingMorph=C.instancingMorph,U.skinning=C.skinning,U.morphTargets=C.morphTargets,U.morphNormals=C.morphNormals,U.morphColors=C.morphColors,U.morphTargetsCount=C.morphTargetsCount,U.numClippingPlanes=C.numClippingPlanes,U.numIntersection=C.numClipIntersection,U.vertexAlphas=C.vertexAlphas,U.vertexTangents=C.vertexTangents,U.toneMapping=C.toneMapping}function Le(S,C,U,z,O){C.isScene!==!0&&(C=We),je.resetTextureUnits();const J=C.fog,re=z.isMeshStandardMaterial?C.environment:null,he=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:cn,fe=(z.isMeshStandardMaterial?T:P).get(z.envMap||re),Ue=z.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ie=!!U.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),we=!!U.morphAttributes.position,Je=!!U.morphAttributes.normal,vt=!!U.morphAttributes.color;let dt=kr;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(dt=y.toneMapping);const $t=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ot=$t!==void 0?$t.length:0,be=Fe.get(z),Pe=m.state.lights;if(X===!0&&(oe===!0||S!==w)){const Zn=S===w&&z.id===E;Xe.setState(z,S,Zn)}let Oe=!1;z.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Pe.state.version||be.outputColorSpace!==he||O.isBatchedMesh&&be.batching===!1||!O.isBatchedMesh&&be.batching===!0||O.isBatchedMesh&&be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&be.instancing===!1||!O.isInstancedMesh&&be.instancing===!0||O.isSkinnedMesh&&be.skinning===!1||!O.isSkinnedMesh&&be.skinning===!0||O.isInstancedMesh&&be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&be.instancingMorph===!1&&O.morphTexture!==null||be.envMap!==fe||z.fog===!0&&be.fog!==J||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Xe.numPlanes||be.numIntersection!==Xe.numIntersection)||be.vertexAlphas!==Ue||be.vertexTangents!==Ie||be.morphTargets!==we||be.morphNormals!==Je||be.morphColors!==vt||be.toneMapping!==dt||be.morphTargetsCount!==ot)&&(Oe=!0):(Oe=!0,be.__version=z.version);let Et=be.currentProgram;Oe===!0&&(Et=V(z,C,O));let ft=!1,Ct=!1,As=!1;const Ft=Et.getUniforms(),ur=be.uniforms;if(De.useProgram(Et.program)&&(ft=!0,Ct=!0,As=!0),z.id!==E&&(E=z.id,Ct=!0),ft||w!==S){Ft.setValue(I,"projectionMatrix",S.projectionMatrix),Ft.setValue(I,"viewMatrix",S.matrixWorldInverse);const Zn=Ft.map.cameraPosition;Zn!==void 0&&Zn.setValue(I,ye.setFromMatrixPosition(S.matrixWorld)),st.logarithmicDepthBuffer&&Ft.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ft.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),w!==S&&(w=S,Ct=!0,As=!0)}if(O.isSkinnedMesh){Ft.setOptional(I,O,"bindMatrix"),Ft.setOptional(I,O,"bindMatrixInverse");const Zn=O.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),Ft.setValue(I,"boneTexture",Zn.boneTexture,je))}O.isBatchedMesh&&(Ft.setOptional(I,O,"batchingTexture"),Ft.setValue(I,"batchingTexture",O._matricesTexture,je),Ft.setOptional(I,O,"batchingIdTexture"),Ft.setValue(I,"batchingIdTexture",O._indirectTexture,je),Ft.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&Ft.setValue(I,"batchingColorTexture",O._colorsTexture,je));const Hu=U.morphAttributes;if((Hu.position!==void 0||Hu.normal!==void 0||Hu.color!==void 0)&&tt.update(O,U,Et),(Ct||be.receiveShadow!==O.receiveShadow)&&(be.receiveShadow=O.receiveShadow,Ft.setValue(I,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(ur.envMap.value=fe,ur.flipEnvMap.value=fe.isCubeTexture&&fe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&C.environment!==null&&(ur.envMapIntensity.value=C.environmentIntensity),Ct&&(Ft.setValue(I,"toneMappingExposure",y.toneMappingExposure),be.needsLights&&He(ur,As),J&&z.fog===!0&&Ce.refreshFogUniforms(ur,J),Ce.refreshMaterialUniforms(ur,z,Q,K,m.state.transmissionRenderTarget[S.id]),kc.upload(I,ee(be),ur,je)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(kc.upload(I,ee(be),ur,je),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ft.setValue(I,"center",O.center),Ft.setValue(I,"modelViewMatrix",O.modelViewMatrix),Ft.setValue(I,"normalMatrix",O.normalMatrix),Ft.setValue(I,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Zn=z.uniformsGroups;for(let Vu=0,Xx=Zn.length;Vu<Xx;Vu++){const lm=Zn[Vu];yt.update(lm,Et),yt.bind(lm,Et)}}return Et}function He(S,C){S.ambientLightColor.needsUpdate=C,S.lightProbe.needsUpdate=C,S.directionalLights.needsUpdate=C,S.directionalLightShadows.needsUpdate=C,S.pointLights.needsUpdate=C,S.pointLightShadows.needsUpdate=C,S.spotLights.needsUpdate=C,S.spotLightShadows.needsUpdate=C,S.rectAreaLights.needsUpdate=C,S.hemisphereLights.needsUpdate=C}function _e(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,C,U){Fe.get(S.texture).__webglTexture=C,Fe.get(S.depthTexture).__webglTexture=U;const z=Fe.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=U===void 0,z.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,C){const U=Fe.get(S);U.__webglFramebuffer=C,U.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(S,C=0,U=0){A=S,b=C,R=U;let z=!0,O=null,J=!1,re=!1;if(S){const fe=Fe.get(S);if(fe.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(fe.__webglFramebuffer===void 0)je.setupRenderTarget(S);else if(fe.__hasExternalTextures)je.rebindTextures(S,Fe.get(S.texture).__webglTexture,Fe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const we=S.depthTexture;if(fe.__boundDepthTexture!==we){if(we!==null&&Fe.has(we)&&(S.width!==we.image.width||S.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(S)}}const Ue=S.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(re=!0);const Ie=Fe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ie[C])?O=Ie[C][U]:O=Ie[C],J=!0):S.samples>0&&je.useMultisampledRTT(S)===!1?O=Fe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ie)?O=Ie[U]:O=Ie,M.copy(S.viewport),L.copy(S.scissor),W=S.scissorTest}else M.copy(te).multiplyScalar(Q).floor(),L.copy(ue).multiplyScalar(Q).floor(),W=Re;if(De.bindFramebuffer(I.FRAMEBUFFER,O)&&z&&De.drawBuffers(S,O),De.viewport(M),De.scissor(L),De.setScissorTest(W),J){const fe=Fe.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+C,fe.__webglTexture,U)}else if(re){const fe=Fe.get(S.texture),Ue=C||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,fe.__webglTexture,U||0,Ue)}E=-1},this.readRenderTargetPixels=function(S,C,U,z,O,J,re){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&(he=he[re]),he){De.bindFramebuffer(I.FRAMEBUFFER,he);try{const fe=S.texture,Ue=fe.format,Ie=fe.type;if(!st.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=S.width-z&&U>=0&&U<=S.height-O&&I.readPixels(C,U,z,O,Be.convert(Ue),Be.convert(Ie),J)}finally{const fe=A!==null?Fe.get(A).__webglFramebuffer:null;De.bindFramebuffer(I.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(S,C,U,z,O,J,re){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&re!==void 0&&(he=he[re]),he){De.bindFramebuffer(I.FRAMEBUFFER,he);try{const fe=S.texture,Ue=fe.format,Ie=fe.type;if(!st.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=S.width-z&&U>=0&&U<=S.height-O){const we=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.bufferData(I.PIXEL_PACK_BUFFER,J.byteLength,I.STREAM_READ),I.readPixels(C,U,z,O,Be.convert(Ue),Be.convert(Ie),0),I.flush();const Je=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await o1(I,Je,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,we),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,J)}finally{I.deleteBuffer(we),I.deleteSync(Je)}return J}}finally{const fe=A!==null?Fe.get(A).__webglFramebuffer:null;De.bindFramebuffer(I.FRAMEBUFFER,fe)}}},this.copyFramebufferToTexture=function(S,C=null,U=0){S.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,S=arguments[1]);const z=Math.pow(2,-U),O=Math.floor(S.image.width*z),J=Math.floor(S.image.height*z),re=C!==null?C.x:0,he=C!==null?C.y:0;je.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,U,0,0,re,he,O,J),De.unbindTexture()},this.copyTextureToTexture=function(S,C,U=null,z=null,O=0){S.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],C=arguments[2],O=arguments[3]||0,U=null);let J,re,he,fe,Ue,Ie;U!==null?(J=U.max.x-U.min.x,re=U.max.y-U.min.y,he=U.min.x,fe=U.min.y):(J=S.image.width,re=S.image.height,he=0,fe=0),z!==null?(Ue=z.x,Ie=z.y):(Ue=0,Ie=0);const we=Be.convert(C.format),Je=Be.convert(C.type);je.setTexture2D(C,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);const vt=I.getParameter(I.UNPACK_ROW_LENGTH),dt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),$t=I.getParameter(I.UNPACK_SKIP_PIXELS),ot=I.getParameter(I.UNPACK_SKIP_ROWS),be=I.getParameter(I.UNPACK_SKIP_IMAGES),Pe=S.isCompressedTexture?S.mipmaps[O]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,he),I.pixelStorei(I.UNPACK_SKIP_ROWS,fe),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Ue,Ie,J,re,we,Je,Pe.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Ue,Ie,Pe.width,Pe.height,we,Pe.data):I.texSubImage2D(I.TEXTURE_2D,O,Ue,Ie,J,re,we,Je,Pe),I.pixelStorei(I.UNPACK_ROW_LENGTH,vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be),O===0&&C.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(S,C,U=null,z=null,O=0){S.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),U=arguments[0]||null,z=arguments[1]||null,S=arguments[2],C=arguments[3],O=arguments[4]||0);let J,re,he,fe,Ue,Ie,we,Je,vt;const dt=S.isCompressedTexture?S.mipmaps[O]:S.image;U!==null?(J=U.max.x-U.min.x,re=U.max.y-U.min.y,he=U.max.z-U.min.z,fe=U.min.x,Ue=U.min.y,Ie=U.min.z):(J=dt.width,re=dt.height,he=dt.depth,fe=0,Ue=0,Ie=0),z!==null?(we=z.x,Je=z.y,vt=z.z):(we=0,Je=0,vt=0);const $t=Be.convert(C.format),ot=Be.convert(C.type);let be;if(C.isData3DTexture)je.setTexture3D(C,0),be=I.TEXTURE_3D;else if(C.isDataArrayTexture||C.isCompressedArrayTexture)je.setTexture2DArray(C,0),be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,C.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,C.unpackAlignment);const Pe=I.getParameter(I.UNPACK_ROW_LENGTH),Oe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Et=I.getParameter(I.UNPACK_SKIP_PIXELS),ft=I.getParameter(I.UNPACK_SKIP_ROWS),Ct=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,fe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ue),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ie),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(be,O,we,Je,vt,J,re,he,$t,ot,dt.data):C.isCompressedArrayTexture?I.compressedTexSubImage3D(be,O,we,Je,vt,J,re,he,$t,dt.data):I.texSubImage3D(be,O,we,Je,vt,J,re,he,$t,ot,dt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Oe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Et),I.pixelStorei(I.UNPACK_SKIP_ROWS,ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ct),O===0&&C.generateMipmaps&&I.generateMipmap(be),De.unbindTexture()},this.initRenderTarget=function(S){Fe.get(S).__webglFramebuffer===void 0&&je.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?je.setTextureCube(S,0):S.isData3DTexture?je.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?je.setTexture2DArray(S,0):je.setTexture2D(S,0),De.unbindTexture()},this.resetState=function(){b=0,R=0,A=null,De.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$p?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Bu?"display-p3":"srgb"}}class Dx extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ix{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ih,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return yo("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const _n=new N;class er{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyMatrix4(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.applyNormalMatrix(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_n.fromBufferAttribute(this,t),_n.transformDirection(e),this.setXYZ(t,_n.x,_n.y,_n.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),r=ht(r,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new er(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const O_=new N,F_=new ct,B_=new ct,pP=new N,k_=new qe,sc=new N,Wd=new ai,z_=new qe,jd=new hl;class mP extends mn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zg,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sc),this.boundingBox.expandByPoint(sc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sc),this.boundingSphere.expandByPoint(sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wd.copy(this.boundingSphere),Wd.applyMatrix4(r),e.ray.intersectsSphere(Wd)!==!1&&(z_.copy(r).invert(),jd.copy(e.ray).applyMatrix4(z_),!(this.boundingBox!==null&&jd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pw?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;F_.fromBufferAttribute(r.attributes.skinIndex,e),B_.fromBufferAttribute(r.attributes.skinWeight,e),O_.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=B_.getComponent(s);if(o!==0){const a=F_.getComponent(s);k_.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(pP.copy(O_).applyMatrix4(k_),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nx extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ux extends en{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Tn,u=Tn,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const H_=new qe,gP=new qe;class Jp{constructor(e=[],t=[]){this.uuid=Mi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:gP;H_.multiplyMatrices(a,t[s]),H_.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Jp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ux(t,e,e,jn,yi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Nx),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Uh extends An{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xs=new qe,V_=new qe,oc=[],G_=new oi,_P=new qe,fa=new mn,ha=new ai;class vP extends mn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Uh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,_P)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),G_.copy(e.boundingBox).applyMatrix4(Xs),this.boundingBox.union(G_)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Xs),ha.copy(e.boundingSphere).applyMatrix4(Xs),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(fa.geometry=this.geometry,fa.material=this.material,fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(i),e.ray.intersectsSphere(ha)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Xs),V_.multiplyMatrices(i,Xs),fa.matrixWorld=V_,fa.raycast(e,oc);for(let o=0,a=oc.length;o<a;o++){const l=oc[o];l.instanceId=s,l.object=this,t.push(l)}oc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Uh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ux(new Float32Array(r*this.count),r,this.count,jp,yi));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ox extends Ni{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vu=new N,yu=new N,W_=new qe,pa=new hl,ac=new ai,Xd=new N,j_=new N;class em extends It{constructor(e=new Bn,t=new Ox){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)vu.fromBufferAttribute(t,r-1),yu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=vu.distanceTo(yu);e.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(r),ac.radius+=s,e.ray.intersectsSphere(ac)===!1)return;W_.copy(r).invert(),pa.copy(e.ray).applyMatrix4(W_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const h=u.getX(_),v=u.getX(_+1),y=lc(this,e,pa,l,h,v);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),h=lc(this,e,pa,l,_,m);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const h=lc(this,e,pa,l,_,_+1);h&&t.push(h)}if(this.isLineLoop){const _=lc(this,e,pa,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(vu.fromBufferAttribute(o,r),yu.fromBufferAttribute(o,s),t.distanceSqToSegment(vu,yu,Xd,j_)>i)return;Xd.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Xd);if(!(l<e.near||l>e.far))return{distance:l,point:j_.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const X_=new N,Y_=new N;class yP extends em{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)X_.fromBufferAttribute(t,r),Y_.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+X_.distanceTo(Y_);e.setAttribute("lineDistance",new Rn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xP extends em{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fx extends Ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const K_=new qe,Oh=new hl,cc=new ai,uc=new N;class SP extends It{constructor(e=new Bn,t=new Fx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(r),cc.radius+=s,e.ray.intersectsSphere(cc)===!1)return;K_.copy(r).invert(),Oh.copy(e.ray).applyMatrix4(K_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);uc.fromBufferAttribute(d,m),$_(uc,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,_=p;g<_;g++)uc.fromBufferAttribute(d,g),$_(uc,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function $_(n,e,t,i,r,s,o){const a=Oh.distanceSqToPoint(n);if(a<t){const l=new N;Oh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const dc=new N,fc=new N,Yd=new N,hc=new vi;class MP extends Bn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(vo*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:h}=hc;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),hc.getNormal(Yd),d[0]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){const y=(v+1)%3,x=d[v],b=d[y],R=hc[u[v]],A=hc[u[y]],E=`${x}_${b}`,w=`${b}_${x}`;w in f&&f[w]?(Yd.dot(f[w].normal)<=s&&(p.push(R.x,R.y,R.z),p.push(A.x,A.y,A.z)),f[w]=null):E in f||(f[E]={index0:c[v],index1:c[y],normal:Yd.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];dc.fromBufferAttribute(a,_),fc.fromBufferAttribute(a,m),p.push(dc.x,dc.y,dc.z),p.push(fc.x,fc.y,fc.z)}this.setAttribute("position",new Rn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class EP extends Bn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,r=new N,s=new N;if(e.index!==null){const o=e.attributes.position,a=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const d=l[c],f=d.start,p=d.count;for(let g=f,_=f+p;g<_;g+=3)for(let m=0;m<3;m++){const h=a.getX(g+m),v=a.getX(g+(m+1)%3);r.fromBufferAttribute(o,h),s.fromBufferAttribute(o,v),q_(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const o=e.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const u=3*a+c,d=3*a+(c+1)%3;r.fromBufferAttribute(o,u),s.fromBufferAttribute(o,d),q_(r,s,i)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Rn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function q_(n,e,t){const i=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(i)===!0||t.has(r)===!0?!1:(t.add(i),t.add(r),!0)}class TP extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class tm extends Ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hx,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fi extends tm{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function pc(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function wP(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function AP(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Z_(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Bx(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class _l{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class RP extends _l{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hg,endingEnd:Hg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vg:s=e,a=2*t-i;break;case Gg:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Vg:o=e,l=2*i-t;break;case Gg:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),_=g*g,m=_*g,h=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,x=p*m-p*_;for(let b=0;b!==a;++b)s[b]=h*o[u+b]+v*o[c+b]+y*o[l+b]+x*o[d+b];return s}}class bP extends _l{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}}class CP extends _l{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Bi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pc(t,this.TimeBufferType),this.values=pc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:pc(e.times,Array),values:pc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new CP(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bP(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new RP(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case nl:t=this.InterpolantFactoryMethodDiscrete;break;case il:t=this.InterpolantFactoryMethodLinear;break;case vd:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nl;case this.InterpolantFactoryMethodLinear:return il;case this.InterpolantFactoryMethodSmooth:return vd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&wP(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===vd,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const d=a*i,f=d-i,p=d+i;for(let g=0;g!==i;++g){const _=t[d+g];if(_!==t[f+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*i,f=o*i;for(let p=0;p!==i;++p)t[f+p]=t[d+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Bi.prototype.TimeBufferType=Float32Array;Bi.prototype.ValueBufferType=Float32Array;Bi.prototype.DefaultInterpolation=il;class Xo extends Bi{constructor(e,t,i){super(e,t,i)}}Xo.prototype.ValueTypeName="bool";Xo.prototype.ValueBufferType=Array;Xo.prototype.DefaultInterpolation=nl;Xo.prototype.InterpolantFactoryMethodLinear=void 0;Xo.prototype.InterpolantFactoryMethodSmooth=void 0;class kx extends Bi{}kx.prototype.ValueTypeName="color";class Fo extends Bi{}Fo.prototype.ValueTypeName="number";class PP extends _l{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ui.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Bo extends Bi{InterpolantFactoryMethodLinear(e){return new PP(this.times,this.values,this.getValueSize(),e)}}Bo.prototype.ValueTypeName="quaternion";Bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Yo extends Bi{constructor(e,t,i){super(e,t,i)}}Yo.prototype.ValueTypeName="string";Yo.prototype.ValueBufferType=Array;Yo.prototype.DefaultInterpolation=nl;Yo.prototype.InterpolantFactoryMethodLinear=void 0;Yo.prototype.InterpolantFactoryMethodSmooth=void 0;class ko extends Bi{}ko.prototype.ValueTypeName="vector";class LP{constructor(e="",t=-1,i=[],r=Lw){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Mi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(IP(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(Bi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=AP(l);l=Z_(l,1,u),c=Z_(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Fo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const d=u[1];let f=r[d];f||(r[d]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(d,f,p,g,_){if(p.length!==0){const m=[],h=[];Bx(p,m,h,g),m.length!==0&&_.push(new d(f,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(const _ in p){const m=[],h=[];for(let v=0;v!==f[g].morphTargets.length;++v){const y=f[g];m.push(y.time),h.push(y.morphTarget===_?1:0)}r.push(new Fo(".morphTargetInfluence["+_+"]",m,h))}l=p.length*o}else{const p=".bones["+t[d].name+"]";i(ko,p+".position",f,"pos",r),i(Bo,p+".quaternion",f,"rot",r),i(ko,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function DP(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fo;case"vector":case"vector2":case"vector3":case"vector4":return ko;case"color":return kx;case"quaternion":return Bo;case"bool":case"boolean":return Xo;case"string":return Yo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function IP(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=DP(n.type);if(n.times===void 0){const t=[],i=[];Bx(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Pr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class NP{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const UP=new NP;class Ko{constructor(e){this.manager=e!==void 0?e:UP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wi={};class OP extends Error{constructor(e,t){super(e),this.response=t}}class zx extends Ko{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Pr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Wi[e]!==void 0){Wi[e].push({onLoad:t,onProgress:i,onError:r});return}Wi[e]=[],Wi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wi[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(h){v();function v(){d.read().then(({done:y,value:x})=>{if(y)h.close();else{_+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let R=0,A=u.length;R<A;R++){const E=u[R];E.onProgress&&E.onProgress(b)}h.enqueue(x),v()}},y=>{h.error(y)})}}});return new Response(m)}else throw new OP(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Pr.add(e,c);const u=Wi[e];delete Wi[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Wi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Wi[e];for(let d=0,f=u.length;d<f;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class FP extends Ko{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=rl("img");function l(){u(),Pr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class BP extends Ko{constructor(e){super(e)}load(e,t,i,r){const s=new en,o=new FP(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class nm extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Kd=new qe,Q_=new N,J_=new N;class im{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zp,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Q_.setFromMatrixPosition(e.matrixWorld),t.position.copy(Q_),J_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(J_),t.updateMatrixWorld(),Kd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class kP extends im{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Uo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zP extends nm{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new kP}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ev=new qe,ma=new N,$d=new N;class HP extends im{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ma.setFromMatrixPosition(e.matrixWorld),i.position.copy(ma),$d.copy(i.position),$d.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($d),i.updateMatrixWorld(),r.makeTranslation(-ma.x,-ma.y,-ma.z),ev.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ev)}}class VP extends nm{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new HP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class GP extends im{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class WP extends nm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new GP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ua{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class jP extends Bn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class XP extends Ko{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Pr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pr.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Pr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Pr.add(e,l),s.manager.itemStart(e)}}class YP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=tv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function tv(){return(typeof performance>"u"?Date:performance).now()}const rm="\\[\\]\\.:\\/",KP=new RegExp("["+rm+"]","g"),sm="[^"+rm+"]",$P="[^"+rm.replace("\\.","")+"]",qP=/((?:WC+[\/:])*)/.source.replace("WC",sm),ZP=/(WCOD+)?/.source.replace("WCOD",$P),QP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sm),JP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sm),eL=new RegExp("^"+qP+ZP+QP+JP+"$"),tL=["material","materials","bones","map"];class nL{constructor(e,t,i){const r=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class pt{constructor(e,t,i){this.path=t,this.parsedPath=i||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,i):new pt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(KP,"")}static parseTrackName(e){const t=eL.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);tL.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=nL;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fh extends Ix{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class nv{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const iv=new N,mc=new N;class iL{constructor(e=new N,t=new N){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){iv.subVectors(e,this.start),mc.subVectors(this.end,this.start);const i=mc.dot(mc);let s=mc.dot(iv)/i;return t&&(s=Qt(s,0,1)),s}closestPointToPoint(e,t,i){const r=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class rL extends Ts{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hp);const sL=`varying vec2 v_texcoord;

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
}`,oL=`varying vec2 v_texcoord;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
    v_texcoord = uv;
}`;function aL(){const n=ve.useRef(null);return ve.useEffect(()=>{let e,t,i,r=1;const s=new Dx,o=new Ae,a=new Ae,l=new Ae,c=i/r,u=new gl(-c,c,1,-1,.1,1e3);u.position.z=1;const d=new Lx({antialias:!0,alpha:!1});n.current&&n.current.children.length===0&&n.current.appendChild(d.domElement);const f=new ml(1,1),p=new on({vertexShader:oL,fragmentShader:sL,uniforms:{u_mouse:{value:a},u_resolution:{value:l},u_pixelRatio:{value:2}},defines:{VAR:2}}),g=new mn(f,p);s.add(g);let _,m=0;const h=()=>{_=performance.now()*.001;const x=_-m;m=_;for(const b in o)(b=="x"||b=="y")&&(a[b]=ku.damp(a[b],o[b],8,x));requestAnimationFrame(h),d.render(s,u)};h();const v=()=>{i=n.current.getBoundingClientRect().width,r=n.current.getBoundingClientRect().height;const x=Math.min(window.devicePixelRatio,2);d.setSize(i,r),d.setPixelRatio(x),u.left=-i/2,u.right=i/2,u.top=r/2,u.bottom=-r/2,u.updateProjectionMatrix(),g.scale.set(i,r,1),l.set(i,r).multiplyScalar(x),p.uniforms.u_pixelRatio.value=x};v();const y=x=>{e=n.current.getBoundingClientRect().x,t=n.current.getBoundingClientRect().y,o.set(x.pageX-e,x.pageY-t)};window.addEventListener("resize",v),document.addEventListener("mousemove",y),document.addEventListener("pointermove",y),document.body.addEventListener("touchmove",function(x){x.preventDefault()},{passive:!1})},[]),St.jsx("div",{className:"WebGLCircle",ref:n})}function lL(){if(window.WebGLRenderingContext){var n=document.createElement("canvas"),e=["webgl","experimental-webgl","moz-webgl","webkit-3d"],t=!1;for(var i in e)try{if(t=n.getContext(e[i]),t&&typeof t.getParameter=="function")return 1}catch{}return 0}return-1}const cL=({title:n="stringCode"})=>{const e=lL();return St.jsxs("div",{className:"Logo",children:[e===1?St.jsx(aL,{}):null,St.jsxs("div",{className:"Logo-content-wrapper",children:[St.jsx("h1",{className:"Logo-title",children:n}),e!==1?St.jsx("h2",{children:"This site looks cooler when WebGL is enabled"}):null]})]})},rv=()=>St.jsx("div",{className:"HomePage",children:St.jsx(cL,{})}),sv={type:"change"},om={type:"start"},Hx={type:"end"},gc=new hl,ov=new Mr,uL=Math.cos(70*ku.DEG2RAD),Wt=new N,Pn=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qd=1e-6;class dL extends rL{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mo.ROTATE,MIDDLE:mo.DOLLY,RIGHT:mo.PAN},this.touches={ONE:oo.ROTATE,TWO:oo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ui,this._lastTargetPosition=new N,this._quat=new Ui().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nv,this._sphericalDelta=new nv,this._scale=1,this._panOffset=new N,this._rotateStart=new Ae,this._rotateEnd=new Ae,this._rotateDelta=new Ae,this._panStart=new Ae,this._panEnd=new Ae,this._panDelta=new Ae,this._dollyStart=new Ae,this._dollyEnd=new Ae,this._dollyDelta=new Ae,this._dollyDirection=new N,this._mouse=new Ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hL.bind(this),this._onPointerDown=fL.bind(this),this._onPointerUp=pL.bind(this),this._onContextMenu=SL.bind(this),this._onMouseWheel=_L.bind(this),this._onKeyDown=vL.bind(this),this._onTouchStart=yL.bind(this),this._onTouchMove=xL.bind(this),this._onMouseDown=mL.bind(this),this._onMouseMove=gL.bind(this),this._interceptControlDown=ML.bind(this),this._interceptControlUp=EL.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sv),this.update(),this.state=_t.NONE}update(e=null){const t=this.object.position;Wt.copy(t).sub(this.target),Wt.applyQuaternion(this._quat),this._spherical.setFromVector3(Wt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Pn:i>Math.PI&&(i-=Pn),r<-Math.PI?r+=Pn:r>Math.PI&&(r-=Pn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Wt.setFromSpherical(this._spherical),Wt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Wt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(gc.origin.copy(this.object.position),gc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gc.direction))<uL?this.object.lookAt(this.target):(ov.setFromNormalAndCoplanarPoint(this.object.up,this.target),gc.intersectPlane(ov,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qd||this._lastTargetPosition.distanceToSquared(this.target)>qd?(this.dispatchEvent(sv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Pn/60*this.autoRotateSpeed*e:Pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Wt.setFromMatrixColumn(t,0),Wt.multiplyScalar(-e),this._panOffset.add(Wt)}_panUp(e,t){this.screenSpacePanning===!0?Wt.setFromMatrixColumn(t,1):(Wt.setFromMatrixColumn(t,0),Wt.crossVectors(this.object.up,Wt)),Wt.multiplyScalar(e),this._panOffset.add(Wt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Wt.copy(r).sub(this.target);let s=Wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function fL(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function hL(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function pL(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hx),this.state=_t.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function mL(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=_t.DOLLY;break;case mo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}break;case mo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(om)}function gL(n){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _L(n){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(n.preventDefault(),this.dispatchEvent(om),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Hx))}function vL(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function yL(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case oo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=_t.TOUCH_ROTATE;break;case oo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case oo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=_t.TOUCH_DOLLY_PAN;break;case oo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(om)}function xL(n){switch(this._trackPointer(n),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=_t.NONE}}function SL(n){this.enabled!==!1&&n.preventDefault()}function ML(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function EL(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function av(n,e){if(e===Dw)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Dh||e===fx){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===Dh)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class TL extends Ko{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CL(t)}),this.register(function(t){return new PL(t)}),this.register(function(t){return new kL(t)}),this.register(function(t){return new zL(t)}),this.register(function(t){return new HL(t)}),this.register(function(t){return new DL(t)}),this.register(function(t){return new IL(t)}),this.register(function(t){return new NL(t)}),this.register(function(t){return new UL(t)}),this.register(function(t){return new bL(t)}),this.register(function(t){return new OL(t)}),this.register(function(t){return new LL(t)}),this.register(function(t){return new BL(t)}),this.register(function(t){return new FL(t)}),this.register(function(t){return new AL(t)}),this.register(function(t){return new VL(t)}),this.register(function(t){return new GL(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ua.extractUrlBase(e);o=Ua.resolveURL(c,this.path)}else o=Ua.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new zx(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vx){try{o[it.KHR_BINARY_GLTF]=new WL(e)}catch(d){r&&r(d);return}s=JSON.parse(o[it.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new iD(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const d=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(d){case it.KHR_MATERIALS_UNLIT:o[d]=new RL;break;case it.KHR_DRACO_MESH_COMPRESSION:o[d]=new jL(s,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:o[d]=new XL;break;case it.KHR_MESH_QUANTIZATION:o[d]=new YL;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function wL(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class AL{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ve(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],cn);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new WP(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new VP(u),c.distance=d;break;case"spot":c=new zP(u),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class RL{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return Ji}extendParams(e,t,i){const r=[];e.color=new Ve(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],cn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,Sn))}return Promise.all(r)}}class bL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class CL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(a,a)}return Promise.all(s)}}class PL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class LL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class DL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],cn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Sn)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class IL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class NL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],cn),Promise.all(s)}}class UL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class OL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],cn),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Sn)),Promise.all(s)}}class FL{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class BL{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Fi}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class kL{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class zL{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class HL{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class VL{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,d=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,f,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(p),u,d,f,r.mode,r.filter),p})})}else return null}}class GL{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Jn.TRIANGLES&&c.mode!==Jn.TRIANGLE_STRIP&&c.mode!==Jn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),d=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of d){const _=new qe,m=new N,h=new Ui,v=new N(1,1,1),y=new vP(g.geometry,g.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,_.compose(m,h,v));for(const x in l)if(x==="_COLOR_0"){const b=l[x];y.instanceColor=new Uh(b.array,b.itemSize,b.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);It.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Vx="glTF",ga=12,lv={JSON:1313821514,BIN:5130562};class WL{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ga),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ga,s=new DataView(e,ga);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===lv.JSON){const c=new Uint8Array(e,ga+o,a);this.content=i.decode(c)}else if(l===lv.BIN){const c=ga+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class jL{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const d=Bh[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=Bh[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],p=So[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(d,f){r.decodeDracoFile(u,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}d(p)},a,c,cn,f)})})}}class XL{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class YL{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class Gx extends _l{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,d=(i-t)/u,f=d*d,p=f*d,g=e*c,_=g-c,m=-2*p+3*f,h=p-f,v=1-m,y=h-f+d;for(let x=0;x!==a;x++){const b=o[_+x+a],R=o[_+x+l]*u,A=o[g+x+a],E=o[g+x]*u;s[x]=v*b+y*R+m*A+h*E}return s}}const KL=new Ui;class $L extends Gx{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return KL.fromArray(s).normalize().toArray(s),s}}const Jn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},So={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cv={9728:Tn,9729:En,9984:nx,9985:Ic,9986:Ea,9987:Zi},uv={33071:Cr,33648:hu,10497:Do},Zd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qL={CUBICSPLINE:void 0,LINEAR:il,STEP:nl},Qd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZL(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new tm({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ar})),n.DefaultMaterial}function Jr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Yi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function QL(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const d=e[c];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(r=!0),d.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const d=e[c];if(i){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):n.attributes.position;o.push(f)}if(r){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],d=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=d),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function JL(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eD(n){let e;const t=n.extensions&&n.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jd(t.attributes):e=n.indices+":"+Jd(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Jd(n.targets[i]);return e}function Jd(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function kh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tD(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const nD=new qe;class iD{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new wL,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new BP(this.options.manager):this.textureLoader=new XP(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Jr(s,a,r),Yi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Ua.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Zd[r.type],a=So[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new An(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Zd[r.type],c=So[r.componentType],u=c.BYTES_PER_ELEMENT,d=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(p&&p!==d){const h=Math.floor(f/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let y=t.cache.get(v);y||(_=new c(a,h*p,r.count*p/u),y=new Ix(_,p/u),t.cache.add(v,y)),m=new er(y,l,f%p/u,g)}else a===null?_=new c(r.count*l):_=new c(a,f,r.count*l),m=new An(_,l,g);if(r.sparse!==void 0){const h=Zd.SCALAR,v=So[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,b=new v(o[1],y,r.sparse.count*h),R=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new An(m.array.slice(),m.itemSize,m.normalized));for(let A=0,E=b.length;A<E;A++){const w=b[A];if(m.setX(w,R[A*l]),l>=2&&m.setY(w,R[A*l+1]),l>=3&&m.setZ(w,R[A*l+2]),l>=4&&m.setW(w,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=cv[f.magFilter]||En,u.minFilter=cv[f.minFilter]||Zi,u.wrapS=uv[f.wrapS]||Do,u.wrapT=uv[f.wrapT]||Do,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new en(_);m.needsUpdate=!0,f(m)}),t.load(Ua.resolveURL(d,s.path),g,void 0,p)})}).then(function(d){return c===!0&&a.revokeObjectURL(l),Yi(d,o),d.userData.mimeType=o.mimeType||tD(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[it.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Fx,Ni.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ox,Ni.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return tm}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[it.KHR_MATERIALS_UNLIT]){const d=r[it.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(a,s,t))}else{const d=s.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],cn),a.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",d.baseColorTexture,Sn)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Pi);const u=s.alphaMode||Qd.OPAQUE;if(u===Qd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Qd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Ji&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ae(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;a.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&o!==Ji&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Ji){const d=s.emissiveFactor;a.emissive=new Ve().setRGB(d[0],d[1],d[2],cn)}return s.emissiveTexture!==void 0&&o!==Ji&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Sn)),Promise.all(c).then(function(){const d=new o(a);return s.name&&(d.name=s.name),Yi(d,s),t.associations.set(d,{materials:e}),s.extensions&&Jr(r,d,s),d})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return dv(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=eD(c),d=r[u];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[it.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=dv(new Bn,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?ZL(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let p=0,g=u.length;p<g;p++){const _=u[p],m=o[p];let h;const v=c[p];if(m.mode===Jn.TRIANGLES||m.mode===Jn.TRIANGLE_STRIP||m.mode===Jn.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new mP(_,v):new mn(_,v),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Jn.TRIANGLE_STRIP?h.geometry=av(h.geometry,fx):m.mode===Jn.TRIANGLE_FAN&&(h.geometry=av(h.geometry,Dh));else if(m.mode===Jn.LINES)h=new yP(_,v);else if(m.mode===Jn.LINE_STRIP)h=new em(_,v);else if(m.mode===Jn.LINE_LOOP)h=new xP(_,v);else if(m.mode===Jn.POINTS)h=new SP(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&JL(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),Yi(h,s),m.extensions&&Jr(r,h,m),t.assignFinalMaterial(h),d.push(h)}for(let p=0,g=d.length;p<g;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Jr(r,d[0],s),d[0];const f=new us;s.extensions&&Jr(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=d.length;p<g;p++)f.add(d[p]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Mn(ku.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new gl(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Yi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const d=o[c];if(d){a.push(d);const f=new qe;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Jp(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let d=0,f=r.channels.length;d<f;d++){const p=r.channels[d],g=r.samplers[p.sampler],_=p.target,m=_.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,v=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",v)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(d){const f=d[0],p=d[1],g=d[2],_=d[3],m=d[4],h=[];for(let v=0,y=f.length;v<y;v++){const x=f[v],b=p[v],R=g[v],A=_[v],E=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const w=i._createAnimationTracks(x,b,R,A,E);if(w)for(let M=0;M<w.length;M++)h.push(w[M])}return new LP(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],d=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,nD)});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Nx:c.length>1?u=new us:c.length===1?u=c[0]:u=new It,u!==c[0])for(let d=0,f=c.length;d<f;d++)u.add(c[d]);if(s.name&&(u.userData.name=s.name,u.name=o),Yi(u,s),s.extensions&&Jr(i,u,s),s.matrix!==void 0){const d=new qe;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new us;i.name&&(s.name=r.createUniqueName(i.name)),Yi(s,i),i.extensions&&Jr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,d=l.length;u<d;u++)s.add(l[u]);const c=u=>{const d=new Map;for(const[f,p]of r.associations)(f instanceof Ni||f instanceof en)&&d.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&d.set(f,p)}),d};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];vr[s.path]===vr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(vr[s.path]){case vr.weights:c=Fo;break;case vr.rotation:c=Bo;break;case vr.position:case vr.scale:c=ko;break;default:switch(i.itemSize){case 1:c=Fo;break;case 2:case 3:default:c=ko;break}break}const u=r.interpolation!==void 0?qL[r.interpolation]:il,d=this._getArrayFromAccessor(i);for(let f=0,p=l.length;f<p;f++){const g=new c(l[f]+"."+vr[s.path],t.array,d,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=kh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Bo?$L:Gx;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rD(n,e,t){const i=e.attributes,r=new oi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=kh(So[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const d=s[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const _=kh(So[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new ai;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function dv(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Bh[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return lt.workingColorSpace!==cn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Yi(n,e),rD(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?QL(n,e.targets,t):n})}pe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ae(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Dn.line={uniforms:Ss.merge([pe.common,pe.fog,pe.line]),vertexShader:`
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
		`};class Wx extends on{constructor(e){super({type:"LineMaterial",uniforms:Ss.clone(Dn.line.uniforms),vertexShader:Dn.line.vertexShader,fragmentShader:Dn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const fv=new oi,_c=new N;class jx extends jP{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new Rn(e,3)),this.setAttribute("uv",new Rn(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Fh(t,6,1);return this.setAttribute("instanceStart",new er(i,3,0)),this.setAttribute("instanceEnd",new er(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const i=new Fh(t,6,1);return this.setAttribute("instanceColorStart",new er(i,3,0)),this.setAttribute("instanceColorEnd",new er(i,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new EP(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),fv.setFromBufferAttribute(t),this.boundingBox.union(fv))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_c.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_c)),_c.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(_c));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}const ef=new ct,hv=new N,pv=new N,tn=new ct,nn=new ct,Ai=new ct,tf=new N,nf=new qe,sn=new iL,mv=new N,vc=new oi,yc=new ai,Ri=new ct;let Li,ps;function gv(n,e,t){return Ri.set(0,0,-e,1).applyMatrix4(n.projectionMatrix),Ri.multiplyScalar(1/Ri.w),Ri.x=ps/t.width,Ri.y=ps/t.height,Ri.applyMatrix4(n.projectionMatrixInverse),Ri.multiplyScalar(1/Ri.w),Math.abs(Math.max(Ri.x,Ri.y))}function sD(n,e){const t=n.matrixWorld,i=n.geometry,r=i.attributes.instanceStart,s=i.attributes.instanceEnd,o=Math.min(i.instanceCount,r.count);for(let a=0,l=o;a<l;a++){sn.start.fromBufferAttribute(r,a),sn.end.fromBufferAttribute(s,a),sn.applyMatrix4(t);const c=new N,u=new N;Li.distanceSqToSegment(sn.start,sn.end,u,c),u.distanceTo(c)<ps*.5&&e.push({point:u,pointOnLine:c,distance:Li.origin.distanceTo(u),object:n,face:null,faceIndex:a,uv:null,uv1:null})}}function oD(n,e,t){const i=e.projectionMatrix,s=n.material.resolution,o=n.matrixWorld,a=n.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,u=Math.min(a.instanceCount,l.count),d=-e.near;Li.at(1,Ai),Ai.w=1,Ai.applyMatrix4(e.matrixWorldInverse),Ai.applyMatrix4(i),Ai.multiplyScalar(1/Ai.w),Ai.x*=s.x/2,Ai.y*=s.y/2,Ai.z=0,tf.copy(Ai),nf.multiplyMatrices(e.matrixWorldInverse,o);for(let f=0,p=u;f<p;f++){if(tn.fromBufferAttribute(l,f),nn.fromBufferAttribute(c,f),tn.w=1,nn.w=1,tn.applyMatrix4(nf),nn.applyMatrix4(nf),tn.z>d&&nn.z>d)continue;if(tn.z>d){const y=tn.z-nn.z,x=(tn.z-d)/y;tn.lerp(nn,x)}else if(nn.z>d){const y=nn.z-tn.z,x=(nn.z-d)/y;nn.lerp(tn,x)}tn.applyMatrix4(i),nn.applyMatrix4(i),tn.multiplyScalar(1/tn.w),nn.multiplyScalar(1/nn.w),tn.x*=s.x/2,tn.y*=s.y/2,nn.x*=s.x/2,nn.y*=s.y/2,sn.start.copy(tn),sn.start.z=0,sn.end.copy(nn),sn.end.z=0;const _=sn.closestPointToPointParameter(tf,!0);sn.at(_,mv);const m=ku.lerp(tn.z,nn.z,_),h=m>=-1&&m<=1,v=tf.distanceTo(mv)<ps*.5;if(h&&v){sn.start.fromBufferAttribute(l,f),sn.end.fromBufferAttribute(c,f),sn.start.applyMatrix4(o),sn.end.applyMatrix4(o);const y=new N,x=new N;Li.distanceSqToSegment(sn.start,sn.end,x,y),t.push({point:x,pointOnLine:y,distance:Li.origin.distanceTo(x),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}class aD extends mn{constructor(e=new jx,t=new Wx({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let o=0,a=0,l=t.count;o<l;o++,a+=2)hv.fromBufferAttribute(t,o),pv.fromBufferAttribute(i,o),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+hv.distanceTo(pv);const s=new Fh(r,2,1);return e.setAttribute("instanceDistanceStart",new er(s,1,0)),e.setAttribute("instanceDistanceEnd",new er(s,1,1)),this}raycast(e,t){const i=this.material.worldUnits,r=e.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const s=e.params.Line2!==void 0&&e.params.Line2.threshold||0;Li=e.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;ps=l.linewidth+s,a.boundingSphere===null&&a.computeBoundingSphere(),yc.copy(a.boundingSphere).applyMatrix4(o);let c;if(i)c=ps*.5;else{const d=Math.max(r.near,yc.distanceToPoint(Li.origin));c=gv(r,d,l.resolution)}if(yc.radius+=c,Li.intersectsSphere(yc)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),vc.copy(a.boundingBox).applyMatrix4(o);let u;if(i)u=ps*.5;else{const d=Math.max(r.near,vc.distanceToPoint(Li.origin));u=gv(r,d,l.resolution)}vc.expandByScalar(u),Li.intersectsBox(vc)!==!1&&(i?sD(this,t):oD(this,r,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(ef),this.material.uniforms.resolution.value.set(ef.z,ef.w))}}const zh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $o{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lD=new gl(-1,1,1,-1,0,1);class cD extends Bn{constructor(){super(),this.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rn([0,2,0,0,2,0],2))}}const uD=new cD;class am{constructor(e){this._mesh=new mn(uD,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class dD extends $o{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ss.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new am(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class _v extends $o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class fD extends $o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hD{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ae);this._width=i.width,this._height=i.height,t=new Ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wo}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dD(zh),this.copyPass.material.blending=nr,this.clock=new YP}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_v!==void 0&&(o instanceof _v?i=!0:o instanceof fD&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pD extends $o{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=r}}const vv={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class zo extends $o{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Ve(0,0,0);const s={minFilter:En,magFilter:En,format:jn};this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ei(o,a,s),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const p=new Ei(o,a,s);p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const g=new Ei(o,a,s);g.texture.name="UnrealBloomPass.v"+f,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),o=Math.round(o/2),a=Math.round(a/2)}vv===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const l=vv;this.highPassUniforms=Ss.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.texSize.value=new Ae(o,a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,zh===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const d=zh;this.copyUniforms=Ss.clone(d.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new on({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:th,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ve,this.oldClearAlpha=1,this.basic=new Ji,this.fsQuad=new am(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.texSize.value=new Ae(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=zo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=zo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new on({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)}},vertexShader:`varying vec2 vUv;
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
        }`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},dirtTexture:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
        }`})}}zo.BlurDirectionX=new Ae(1,0);zo.BlurDirectionY=new Ae(0,1);const mD={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class gD extends $o{constructor(){super();const e=mD;this.uniforms=Ss.clone(e.uniforms),this.material=new TP({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new am(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$y?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qy?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zy?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qy?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jy?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ex&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const _D="/assets/old_pc_low_poly_game_model-CLiK6O8p.glb";function vD(){const r=ve.useRef(null);return ve.useEffect(()=>{const s=new Dx,o=new Mn(75,window.innerWidth/window.innerHeight,.1,1e3),a=new Lx({antialias:!0,alpha:!0,powerPreference:"high-performance"});let l=1e3,c=1e3;a.setClearColor(0,0),a.setSize(l,c),a.setAnimationLoop(x),r.current&&r.current.children.length===0&&(r.current.appendChild(a.domElement),l=r.current.getBoundingClientRect().width,c=r.current.getBoundingClientRect().height),new dL(o,a.domElement),o.position.set(53,43,94),o.rotation.set(-.3483,.468,.1624);const u=new Wx({color:2421404,linewidth:5}),d=new Ji({color:0,transparent:!0,opacity:1}),f=new TL,p=_D;f.load(p,function(R){const A=[];R.scene.traverse(function(E){E.isMesh&&A.push(E)});for(let E of A){let w=new MP(E.geometry,30),M=new jx().fromEdgesGeometry(w),L=new aD(M,u);E.add(L),E.material=d}s.add(R.scene)});const g={threshold:0,strength:1,radius:0,exposure:.5},_=new pD(s,o);a.setClearColor(0,0);const m=new zo(new Ae(window.innerWidth,window.innerHeight),.5,.4,.85);m.threshold=g.threshold,m.strength=g.strength,m.radius=g.radius;const h=new gD,v=new hD(a);v.addPass(_),v.addPass(m),v.addPass(h);function y(){l=r.current.getBoundingClientRect().width,c=r.current.getBoundingClientRect().height,o.aspect=l/c,o.updateProjectionMatrix(),a.setSize(l,c),b()}window.addEventListener("resize",y,!1);function x(){b()}function b(){v.render()}y(),x()},[]),St.jsx("div",{className:"Computer",ref:r})}const yD=()=>St.jsxs("div",{className:"Showcase",children:[St.jsx("h1",{children:"Please check back in couple of days. Under active redesign"}),St.jsx(vD,{})]}),xD=()=>{const n=zT(eh(St.jsxs(Ma,{path:"/",element:St.jsx(QT,{}),children:[St.jsx(Ma,{index:!0,element:St.jsx(rv,{})}),St.jsx(Ma,{path:"/showcase",element:St.jsx(yD,{})}),St.jsx(Ma,{path:"*",element:St.jsx(rv,{})})]})));return St.jsx($T,{router:n})};Iy(document.getElementById("root")).render(St.jsx(ve.StrictMode,{children:St.jsx(xD,{})}));
