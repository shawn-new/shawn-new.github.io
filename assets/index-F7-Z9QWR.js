(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function l(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(c){if(c.ep)return;c.ep=!0;const h=l(c);fetch(c.href,h)}})();function Dp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Es={exports:{}},ml={};var wm;function H0(){if(wm)return ml;wm=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function l(u,c,h){var f=null;if(h!==void 0&&(f=""+h),c.key!==void 0&&(f=""+c.key),"key"in c){h={};for(var m in c)m!=="key"&&(h[m]=c[m])}else h=c;return c=h.ref,{$$typeof:i,type:u,key:f,ref:c!==void 0?c:null,props:h}}return ml.Fragment=r,ml.jsx=l,ml.jsxs=l,ml}var Dm;function q0(){return Dm||(Dm=1,Es.exports=H0()),Es.exports}var re=q0(),ks={exports:{}},pe={};var Am;function G0(){if(Am)return pe;Am=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),D=Symbol.iterator;function w(k){return k===null||typeof k!="object"?null:(k=D&&k[D]||k["@@iterator"],typeof k=="function"?k:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,V={};function M(k,H,A){this.props=k,this.context=H,this.refs=V,this.updater=A||x}M.prototype.isReactComponent={},M.prototype.setState=function(k,H){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,H,"setState")},M.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function I(){}I.prototype=M.prototype;function R(k,H,A){this.props=k,this.context=H,this.refs=V,this.updater=A||x}var W=R.prototype=new I;W.constructor=R,j(W,M.prototype),W.isPureReactComponent=!0;var P=Array.isArray;function _(){}var J={H:null,A:null,T:null,S:null},ue=Object.prototype.hasOwnProperty;function de(k,H,A){var $=A.ref;return{$$typeof:i,type:k,key:H,ref:$!==void 0?$:null,props:A}}function N(k,H){return de(k.type,H,k.props)}function te(k){return typeof k=="object"&&k!==null&&k.$$typeof===i}function ee(k){var H={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(A){return H[A]})}var we=/\/+/g;function ie(k,H){return typeof k=="object"&&k!==null&&k.key!=null?ee(""+k.key):H.toString(36)}function Z(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(_,_):(k.status="pending",k.then(function(H){k.status==="pending"&&(k.status="fulfilled",k.value=H)},function(H){k.status==="pending"&&(k.status="rejected",k.reason=H)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function O(k,H,A,$,he){var oe=typeof k;(oe==="undefined"||oe==="boolean")&&(k=null);var ke=!1;if(k===null)ke=!0;else switch(oe){case"bigint":case"string":case"number":ke=!0;break;case"object":switch(k.$$typeof){case i:case r:ke=!0;break;case b:return ke=k._init,O(ke(k._payload),H,A,$,he)}}if(ke)return he=he(k),ke=$===""?"."+ie(k,0):$,P(he)?(A="",ke!=null&&(A=ke.replace(we,"$&/")+"/"),O(he,H,A,"",function(Lt){return Lt})):he!=null&&(te(he)&&(he=N(he,A+(he.key==null||k&&k.key===he.key?"":(""+he.key).replace(we,"$&/")+"/")+ke)),H.push(he)),1;ke=0;var Xe=$===""?".":$+":";if(P(k))for(var Re=0;Re<k.length;Re++)$=k[Re],oe=Xe+ie($,Re),ke+=O($,H,A,oe,he);else if(Re=w(k),typeof Re=="function")for(k=Re.call(k),Re=0;!($=k.next()).done;)$=$.value,oe=Xe+ie($,Re++),ke+=O($,H,A,oe,he);else if(oe==="object"){if(typeof k.then=="function")return O(Z(k),H,A,$,he);throw H=String(k),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return ke}function X(k,H,A){if(k==null)return k;var $=[],he=0;return O(k,$,"","",function(oe){return H.call(A,oe,he++)}),$}function le(k){if(k._status===-1){var H=k._result;H=H(),H.then(function(A){(k._status===0||k._status===-1)&&(k._status=1,k._result=A)},function(A){(k._status===0||k._status===-1)&&(k._status=2,k._result=A)}),k._status===-1&&(k._status=0,k._result=H)}if(k._status===1)return k._result.default;throw k._result}var ve=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},S={map:X,forEach:function(k,H,A){X(k,function(){H.apply(this,arguments)},A)},count:function(k){var H=0;return X(k,function(){H++}),H},toArray:function(k){return X(k,function(H){return H})||[]},only:function(k){if(!te(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return pe.Activity=y,pe.Children=S,pe.Component=M,pe.Fragment=l,pe.Profiler=c,pe.PureComponent=R,pe.StrictMode=u,pe.Suspense=p,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,pe.__COMPILER_RUNTIME={__proto__:null,c:function(k){return J.H.useMemoCache(k)}},pe.cache=function(k){return function(){return k.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(k,H,A){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var $=j({},k.props),he=k.key;if(H!=null)for(oe in H.key!==void 0&&(he=""+H.key),H)!ue.call(H,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&H.ref===void 0||($[oe]=H[oe]);var oe=arguments.length-2;if(oe===1)$.children=A;else if(1<oe){for(var ke=Array(oe),Xe=0;Xe<oe;Xe++)ke[Xe]=arguments[Xe+2];$.children=ke}return de(k.type,he,$)},pe.createContext=function(k){return k={$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:h,_context:k},k},pe.createElement=function(k,H,A){var $,he={},oe=null;if(H!=null)for($ in H.key!==void 0&&(oe=""+H.key),H)ue.call(H,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(he[$]=H[$]);var ke=arguments.length-2;if(ke===1)he.children=A;else if(1<ke){for(var Xe=Array(ke),Re=0;Re<ke;Re++)Xe[Re]=arguments[Re+2];he.children=Xe}if(k&&k.defaultProps)for($ in ke=k.defaultProps,ke)he[$]===void 0&&(he[$]=ke[$]);return de(k,oe,he)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(k){return{$$typeof:m,render:k}},pe.isValidElement=te,pe.lazy=function(k){return{$$typeof:b,_payload:{_status:-1,_result:k},_init:le}},pe.memo=function(k,H){return{$$typeof:d,type:k,compare:H===void 0?null:H}},pe.startTransition=function(k){var H=J.T,A={};J.T=A;try{var $=k(),he=J.S;he!==null&&he(A,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(_,ve)}catch(oe){ve(oe)}finally{H!==null&&A.types!==null&&(H.types=A.types),J.T=H}},pe.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},pe.use=function(k){return J.H.use(k)},pe.useActionState=function(k,H,A){return J.H.useActionState(k,H,A)},pe.useCallback=function(k,H){return J.H.useCallback(k,H)},pe.useContext=function(k){return J.H.useContext(k)},pe.useDebugValue=function(){},pe.useDeferredValue=function(k,H){return J.H.useDeferredValue(k,H)},pe.useEffect=function(k,H){return J.H.useEffect(k,H)},pe.useEffectEvent=function(k){return J.H.useEffectEvent(k)},pe.useId=function(){return J.H.useId()},pe.useImperativeHandle=function(k,H,A){return J.H.useImperativeHandle(k,H,A)},pe.useInsertionEffect=function(k,H){return J.H.useInsertionEffect(k,H)},pe.useLayoutEffect=function(k,H){return J.H.useLayoutEffect(k,H)},pe.useMemo=function(k,H){return J.H.useMemo(k,H)},pe.useOptimistic=function(k,H){return J.H.useOptimistic(k,H)},pe.useReducer=function(k,H,A){return J.H.useReducer(k,H,A)},pe.useRef=function(k){return J.H.useRef(k)},pe.useState=function(k){return J.H.useState(k)},pe.useSyncExternalStore=function(k,H,A){return J.H.useSyncExternalStore(k,H,A)},pe.useTransition=function(){return J.H.useTransition()},pe.version="19.2.4",pe}var Sm;function lc(){return Sm||(Sm=1,ks.exports=G0()),ks.exports}var ii=lc(),Ts={exports:{}},pl={},xs={exports:{}},Cs={};var Em;function Y0(){return Em||(Em=1,(function(i){function r(O,X){var le=O.length;O.push(X);e:for(;0<le;){var ve=le-1>>>1,S=O[ve];if(0<c(S,X))O[ve]=X,O[le]=S,le=ve;else break e}}function l(O){return O.length===0?null:O[0]}function u(O){if(O.length===0)return null;var X=O[0],le=O.pop();if(le!==X){O[0]=le;e:for(var ve=0,S=O.length,k=S>>>1;ve<k;){var H=2*(ve+1)-1,A=O[H],$=H+1,he=O[$];if(0>c(A,le))$<S&&0>c(he,A)?(O[ve]=he,O[$]=le,ve=$):(O[ve]=A,O[H]=le,ve=H);else if($<S&&0>c(he,le))O[ve]=he,O[$]=le,ve=$;else break e}}return X}function c(O,X){var le=O.sortIndex-X.sortIndex;return le!==0?le:O.id-X.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var p=[],d=[],b=1,y=null,D=3,w=!1,x=!1,j=!1,V=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function W(O){for(var X=l(d);X!==null;){if(X.callback===null)u(d);else if(X.startTime<=O)u(d),X.sortIndex=X.expirationTime,r(p,X);else break;X=l(d)}}function P(O){if(j=!1,W(O),!x)if(l(p)!==null)x=!0,_||(_=!0,ee());else{var X=l(d);X!==null&&Z(P,X.startTime-O)}}var _=!1,J=-1,ue=5,de=-1;function N(){return V?!0:!(i.unstable_now()-de<ue)}function te(){if(V=!1,_){var O=i.unstable_now();de=O;var X=!0;try{e:{x=!1,j&&(j=!1,I(J),J=-1),w=!0;var le=D;try{t:{for(W(O),y=l(p);y!==null&&!(y.expirationTime>O&&N());){var ve=y.callback;if(typeof ve=="function"){y.callback=null,D=y.priorityLevel;var S=ve(y.expirationTime<=O);if(O=i.unstable_now(),typeof S=="function"){y.callback=S,W(O),X=!0;break t}y===l(p)&&u(p),W(O)}else u(p);y=l(p)}if(y!==null)X=!0;else{var k=l(d);k!==null&&Z(P,k.startTime-O),X=!1}}break e}finally{y=null,D=le,w=!1}X=void 0}}finally{X?ee():_=!1}}}var ee;if(typeof R=="function")ee=function(){R(te)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,ie=we.port2;we.port1.onmessage=te,ee=function(){ie.postMessage(null)}}else ee=function(){M(te,0)};function Z(O,X){J=M(function(){O(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ue=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_next=function(O){switch(D){case 1:case 2:case 3:var X=3;break;default:X=D}var le=D;D=X;try{return O()}finally{D=le}},i.unstable_requestPaint=function(){V=!0},i.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var le=D;D=O;try{return X()}finally{D=le}},i.unstable_scheduleCallback=function(O,X,le){var ve=i.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?ve+le:ve):le=ve,O){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=le+S,O={id:b++,callback:X,priorityLevel:O,startTime:le,expirationTime:S,sortIndex:-1},le>ve?(O.sortIndex=le,r(d,O),l(p)===null&&O===l(d)&&(j?(I(J),J=-1):j=!0,Z(P,le-ve))):(O.sortIndex=S,r(p,O),x||w||(x=!0,_||(_=!0,ee()))),O},i.unstable_shouldYield=N,i.unstable_wrapCallback=function(O){var X=D;return function(){var le=D;D=X;try{return O.apply(this,arguments)}finally{D=le}}}})(Cs)),Cs}var km;function V0(){return km||(km=1,xs.exports=Y0()),xs.exports}var Fs={exports:{}},ht={};var Tm;function X0(){if(Tm)return ht;Tm=1;var i=lc();function r(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)d+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var u={d:{f:l,r:function(){throw Error(r(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(p,d,b){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:p,containerInfo:d,implementation:b}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ht.createPortal=function(p,d){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(r(299));return h(p,d,null,b)},ht.flushSync=function(p){var d=f.T,b=u.p;try{if(f.T=null,u.p=2,p)return p()}finally{f.T=d,u.p=b,u.d.f()}},ht.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,u.d.C(p,d))},ht.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},ht.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var b=d.as,y=m(b,d.crossOrigin),D=typeof d.integrity=="string"?d.integrity:void 0,w=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;b==="style"?u.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:y,integrity:D,fetchPriority:w}):b==="script"&&u.d.X(p,{crossOrigin:y,integrity:D,fetchPriority:w,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},ht.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var b=m(d.as,d.crossOrigin);u.d.M(p,{crossOrigin:b,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&u.d.M(p)},ht.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var b=d.as,y=m(b,d.crossOrigin);u.d.L(p,b,{crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},ht.preloadModule=function(p,d){if(typeof p=="string")if(d){var b=m(d.as,d.crossOrigin);u.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:b,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else u.d.m(p)},ht.requestFormReset=function(p){u.d.r(p)},ht.unstable_batchedUpdates=function(p,d){return p(d)},ht.useFormState=function(p,d,b){return f.H.useFormState(p,d,b)},ht.useFormStatus=function(){return f.H.useHostTransitionStatus()},ht.version="19.2.4",ht}var xm;function Q0(){if(xm)return Fs.exports;xm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Fs.exports=X0(),Fs.exports}var Cm;function Z0(){if(Cm)return pl;Cm=1;var i=V0(),r=lc(),l=Q0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(h(e)!==e)throw Error(u(188))}function d(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,a=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(a=o.return,a!==null){n=a;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return p(o),e;if(s===a)return p(o),t;s=s.sibling}throw Error(u(188))}if(n.return!==a.return)n=o,a=s;else{for(var g=!1,v=o.child;v;){if(v===n){g=!0,n=o,a=s;break}if(v===a){g=!0,a=o,n=s;break}v=v.sibling}if(!g){for(v=s.child;v;){if(v===n){g=!0,n=s,a=o;break}if(v===a){g=!0,a=s,n=o;break}v=v.sibling}if(!g)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,D=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),R=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),de=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case M:return"Profiler";case V:return"StrictMode";case P:return"Suspense";case _:return"SuspenseList";case de:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case R:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case W:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case ue:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var Z=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ve=[],S=-1;function k(e){return{current:e}}function H(e){0>S||(e.current=ve[S],ve[S]=null,S--)}function A(e,t){S++,ve[S]=e.current,e.current=t}var $=k(null),he=k(null),oe=k(null),ke=k(null);function Xe(e,t){switch(A(oe,t),A(he,e),A($,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gd(t),e=Yd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H($),A($,e)}function Re(){H($),H(he),H(oe)}function Lt(e){e.memoizedState!==null&&A(ke,e);var t=$.current,n=Yd(t,e.type);t!==n&&(A(he,e),A($,n))}function sn(e){he.current===e&&(H($),H(he)),ke.current===e&&(H(ke),cl._currentValue=le)}var Da,Cl;function cn(e){if(Da===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Da=t&&t[1]||"",Cl=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Da+e+Cl}var Ti=!1;function xi(e,t){if(!e||Ti)return"";Ti=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(U){var B=U}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(U){B=U}e.call(Y.prototype)}}else{try{throw Error()}catch(U){B=U}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(U){if(U&&B&&typeof U.stack=="string")return[U.stack,B.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=a.DetermineComponentFrameRoot(),g=s[0],v=s[1];if(g&&v){var E=g.split(`
`),z=v.split(`
`);for(o=a=0;a<E.length&&!E[a].includes("DetermineComponentFrameRoot");)a++;for(;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;if(a===E.length||o===z.length)for(a=E.length-1,o=z.length-1;1<=a&&0<=o&&E[a]!==z[o];)o--;for(;1<=a&&0<=o;a--,o--)if(E[a]!==z[o]){if(a!==1||o!==1)do if(a--,o--,0>o||E[a]!==z[o]){var L=`
`+E[a].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=a&&0<=o);break}}}finally{Ti=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?cn(n):""}function Fl(e,t){switch(e.tag){case 26:case 27:case 5:return cn(e.type);case 16:return cn("Lazy");case 13:return e.child!==t&&t!==null?cn("Suspense Fallback"):cn("Suspense");case 19:return cn("SuspenseList");case 0:case 15:return xi(e.type,!1);case 11:return xi(e.type.render,!1);case 1:return xi(e.type,!0);case 31:return cn("Activity");default:return""}}function zl(e){try{var t="",n=null;do t+=Fl(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ci=Object.prototype.hasOwnProperty,Fi=i.unstable_scheduleCallback,Aa=i.unstable_cancelCallback,ou=i.unstable_shouldYield,su=i.unstable_requestPaint,pt=i.unstable_now,cu=i.unstable_getCurrentPriorityLevel,q=i.unstable_ImmediatePriority,K=i.unstable_UserBlockingPriority,me=i.unstable_NormalPriority,De=i.unstable_LowPriority,Oe=i.unstable_IdlePriority,Ft=i.log,fn=i.unstable_setDisableYieldValue,gt=null,it=null;function vt(e){if(typeof Ft=="function"&&fn(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(gt,e)}catch{}}var je=Math.clz32?Math.clz32:xg,Mn=Math.log,Wt=Math.LN2;function xg(e){return e>>>=0,e===0?32:31-(Mn(e)/Wt|0)|0}var Ml=256,Bl=262144,Ol=4194304;function li(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _l(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var o=0,s=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var v=a&134217727;return v!==0?(a=v&~s,a!==0?o=li(a):(g&=v,g!==0?o=li(g):n||(n=v&~e,n!==0&&(o=li(n))))):(v=a&~s,v!==0?o=li(v):g!==0?o=li(g):n||(n=a&~e,n!==0&&(o=li(n)))),o===0?0:t!==0&&t!==o&&(t&s)===0&&(s=o&-o,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:o}function Sa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Cg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sc(){var e=Ol;return Ol<<=1,(Ol&62914560)===0&&(Ol=4194304),e}function fu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ea(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fg(e,t,n,a,o,s){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,E=e.expirationTimes,z=e.hiddenUpdates;for(n=g&~n;0<n;){var L=31-je(n),Y=1<<L;v[L]=0,E[L]=-1;var B=z[L];if(B!==null)for(z[L]=null,L=0;L<B.length;L++){var U=B[L];U!==null&&(U.lane&=-536870913)}n&=~Y}a!==0&&Ec(e,a,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(g&~t))}function Ec(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-je(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function kc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-je(n),o=1<<a;o&t|e[a]&t&&(e[a]|=t),n&=~o}}function Tc(e,t){var n=t&-t;return n=(n&42)!==0?1:hu(n),(n&(e.suspendedLanes|t))!==0?0:n}function hu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xc(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:dm(e.type))}function Cc(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var Bn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Bn,wt="__reactProps$"+Bn,zi="__reactContainer$"+Bn,mu="__reactEvents$"+Bn,zg="__reactListeners$"+Bn,Mg="__reactHandles$"+Bn,Fc="__reactResources$"+Bn,ka="__reactMarker$"+Bn;function pu(e){delete e[ut],delete e[wt],delete e[mu],delete e[zg],delete e[Mg]}function Mi(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zi]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wd(e);e!==null;){if(n=e[ut])return n;e=Wd(e)}return t}e=n,n=e.parentNode}return null}function Bi(e){if(e=e[ut]||e[zi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ta(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Oi(e){var t=e[Fc];return t||(t=e[Fc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function lt(e){e[ka]=!0}var zc=new Set,Mc={};function ri(e,t){_i(e,t),_i(e+"Capture",t)}function _i(e,t){for(Mc[e]=t,e=0;e<t.length;e++)zc.add(t[e])}var Bg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bc={},Oc={};function Og(e){return Ci.call(Oc,e)?!0:Ci.call(Bc,e)?!1:Bg.test(e)?Oc[e]=!0:(Bc[e]=!0,!1)}function Il(e,t,n){if(Og(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Rl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function hn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _g(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,s=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(g){n=""+g,s.call(this,g)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gu(e){if(!e._valueTracker){var t=_c(e)?"checked":"value";e._valueTracker=_g(e,t,""+e[t])}}function Ic(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=_c(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ig=/[\n"\\]/g;function Ht(e){return e.replace(Ig,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yu(e,t,n,a,o,s,g,v){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?bu(e,g,jt(t)):n!=null?bu(e,g,jt(n)):a!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+jt(v):e.removeAttribute("name")}function Rc(e,t,n,a,o,s,g,v){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){gu(e);return}n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}a=a??o,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=v?e.checked:!!a,e.defaultChecked=!!a,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),gu(e)}function bu(e,t,n){t==="number"&&Nl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ii(e,t,n,a){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&a&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,a&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Nc(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function Uc(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(u(92));if(Z(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),gu(e)}function Ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lc(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Rg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function jc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var o in t)a=t[o],t.hasOwnProperty(o)&&n[o]!==a&&Lc(e,o,a)}else for(var s in t)t.hasOwnProperty(s)&&Lc(e,s,t[s])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ng=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ug=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(e){return Ug.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var wu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,Ui=null;function Hc(e){var t=Bi(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;e:switch(e=t.stateNode,t.type){case"input":if(yu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var o=a[wt]||null;if(!o)throw Error(u(90));yu(a,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Ic(a)}break e;case"textarea":Nc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ii(e,!!n.multiple,t,!1)}}}var Au=!1;function qc(e,t,n){if(Au)return e(t,n);Au=!0;try{var a=e(t);return a}finally{if(Au=!1,(Ni!==null||Ui!==null)&&(kr(),Ni&&(t=Ni,e=Ui,Ui=Ni=null,Hc(t),e)))for(t=0;t<e.length;t++)Hc(e[t])}}function xa(e,t){var n=e.stateNode;if(n===null)return null;var a=n[wt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(mn)try{var Ca={};Object.defineProperty(Ca,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Ca,Ca),window.removeEventListener("test",Ca,Ca)}catch{Su=!1}var On=null,Eu=null,Ll=null;function Gc(){if(Ll)return Ll;var e,t=Eu,n=t.length,a,o="value"in On?On.value:On.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var g=n-e;for(a=1;a<=g&&t[n-a]===o[s-a];a++);return Ll=o.slice(e,1<a?1-a:void 0)}function jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Hl(){return!0}function Yc(){return!1}function Dt(e){function t(n,a,o,s,g){this._reactName=n,this._targetInst=o,this.type=a,this.nativeEvent=s,this.target=g,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(s):s[v]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hl:Yc,this.isPropagationStopped=Yc,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),t}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Dt(ui),Fa=y({},ui,{view:0,detail:0}),Lg=Dt(Fa),ku,Tu,za,Gl=y({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==za&&(za&&e.type==="mousemove"?(ku=e.screenX-za.screenX,Tu=e.screenY-za.screenY):Tu=ku=0,za=e),ku)},movementY:function(e){return"movementY"in e?e.movementY:Tu}}),Vc=Dt(Gl),jg=y({},Gl,{dataTransfer:0}),Hg=Dt(jg),qg=y({},Fa,{relatedTarget:0}),xu=Dt(qg),Gg=y({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),Yg=Dt(Gg),Vg=y({},ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xg=Dt(Vg),Qg=y({},ui,{data:0}),Xc=Dt(Qg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jg[e])?!!t[e]:!1}function Cu(){return Wg}var $g=y({},Fa,{key:function(e){if(e.key){var t=Zg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pg=Dt($g),ey=y({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qc=Dt(ey),ty=y({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),ny=Dt(ty),iy=y({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),ay=Dt(iy),ly=y({},Gl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=Dt(ly),uy=y({},ui,{newState:0,oldState:0}),oy=Dt(uy),sy=[9,13,27,32],Fu=mn&&"CompositionEvent"in window,Ma=null;mn&&"documentMode"in document&&(Ma=document.documentMode);var cy=mn&&"TextEvent"in window&&!Ma,Zc=mn&&(!Fu||Ma&&8<Ma&&11>=Ma),Kc=" ",Jc=!1;function Wc(e,t){switch(e){case"keyup":return sy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $c(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Li=!1;function fy(e,t){switch(e){case"compositionend":return $c(t);case"keypress":return t.which!==32?null:(Jc=!0,Kc);case"textInput":return e=t.data,e===Kc&&Jc?null:e;default:return null}}function hy(e,t){if(Li)return e==="compositionend"||!Fu&&Wc(e,t)?(e=Gc(),Ll=Eu=On=null,Li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zc&&t.locale!=="ko"?null:t.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dy[e.type]:t==="textarea"}function ef(e,t,n,a){Ni?Ui?Ui.push(a):Ui=[a]:Ni=a,t=Br(t,"onChange"),0<t.length&&(n=new ql("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ba=null,Oa=null;function my(e){Nd(e,0)}function Yl(e){var t=Ta(e);if(Ic(t))return e}function tf(e,t){if(e==="change")return t}var nf=!1;if(mn){var zu;if(mn){var Mu="oninput"in document;if(!Mu){var af=document.createElement("div");af.setAttribute("oninput","return;"),Mu=typeof af.oninput=="function"}zu=Mu}else zu=!1;nf=zu&&(!document.documentMode||9<document.documentMode)}function lf(){Ba&&(Ba.detachEvent("onpropertychange",rf),Oa=Ba=null)}function rf(e){if(e.propertyName==="value"&&Yl(Oa)){var t=[];ef(t,Oa,e,Du(e)),qc(my,t)}}function py(e,t,n){e==="focusin"?(lf(),Ba=t,Oa=n,Ba.attachEvent("onpropertychange",rf)):e==="focusout"&&lf()}function gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yl(Oa)}function yy(e,t){if(e==="click")return Yl(t)}function by(e,t){if(e==="input"||e==="change")return Yl(t)}function vy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:vy;function _a(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var o=n[a];if(!Ci.call(t,o)||!zt(e[o],t[o]))return!1}return!0}function uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function of(e,t){var n=uf(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uf(n)}}function sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Nl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nl(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wy=mn&&"documentMode"in document&&11>=document.documentMode,ji=null,Ou=null,Ia=null,_u=!1;function ff(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_u||ji==null||ji!==Nl(a)||(a=ji,"selectionStart"in a&&Bu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ia&&_a(Ia,a)||(Ia=a,a=Br(Ou,"onSelect"),0<a.length&&(t=new ql("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ji)))}function oi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hi={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionrun:oi("Transition","TransitionRun"),transitionstart:oi("Transition","TransitionStart"),transitioncancel:oi("Transition","TransitionCancel"),transitionend:oi("Transition","TransitionEnd")},Iu={},hf={};mn&&(hf=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function si(e){if(Iu[e])return Iu[e];if(!Hi[e])return e;var t=Hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hf)return Iu[e]=t[n];return e}var df=si("animationend"),mf=si("animationiteration"),pf=si("animationstart"),Dy=si("transitionrun"),Ay=si("transitionstart"),Sy=si("transitioncancel"),gf=si("transitionend"),yf=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function $t(e,t){yf.set(e,t),ri(t,[e])}var Vl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qt=[],qi=0,Nu=0;function Xl(){for(var e=qi,t=Nu=qi=0;t<e;){var n=qt[t];qt[t++]=null;var a=qt[t];qt[t++]=null;var o=qt[t];qt[t++]=null;var s=qt[t];if(qt[t++]=null,a!==null&&o!==null){var g=a.pending;g===null?o.next=o:(o.next=g.next,g.next=o),a.pending=o}s!==0&&bf(n,o,s)}}function Ql(e,t,n,a){qt[qi++]=e,qt[qi++]=t,qt[qi++]=n,qt[qi++]=a,Nu|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Uu(e,t,n,a){return Ql(e,t,n,a),Zl(e)}function ci(e,t){return Ql(e,null,null,t),Zl(e)}function bf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var o=!1,s=e.return;s!==null;)s.childLanes|=n,a=s.alternate,a!==null&&(a.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&t!==null&&(o=31-je(n),e=s.hiddenUpdates,a=e[o],a===null?e[o]=[t]:a.push(t),t.lane=n|536870912),s):null}function Zl(e){if(50<il)throw il=0,Zo=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Gi={};function Ey(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,a){return new Ey(e,t,n,a)}function Lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kl(e,t,n,a,o,s){var g=0;if(a=e,typeof e=="function")Lu(e)&&(g=1);else if(typeof e=="string")g=F0(e,n,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case de:return e=Mt(31,n,t,o),e.elementType=de,e.lanes=s,e;case j:return fi(n.children,o,s,t);case V:g=8,o|=24;break;case M:return e=Mt(12,n,t,o|2),e.elementType=M,e.lanes=s,e;case P:return e=Mt(13,n,t,o),e.elementType=P,e.lanes=s,e;case _:return e=Mt(19,n,t,o),e.elementType=_,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:g=10;break e;case I:g=9;break e;case W:g=11;break e;case J:g=14;break e;case ue:g=16,a=null;break e}g=29,n=Error(u(130,e===null?"null":typeof e,"")),a=null}return t=Mt(g,n,t,o),t.elementType=e,t.type=a,t.lanes=s,t}function fi(e,t,n,a){return e=Mt(7,e,a,t),e.lanes=n,e}function ju(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function wf(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function Hu(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Df=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var n=Df.get(e);return n!==void 0?n:(t={value:e,source:t,stack:zl(t)},Df.set(e,t),t)}return{value:e,source:t,stack:zl(t)}}var Yi=[],Vi=0,Jl=null,Ra=0,Yt=[],Vt=0,_n=null,nn=1,an="";function gn(e,t){Yi[Vi++]=Ra,Yi[Vi++]=Jl,Jl=e,Ra=t}function Af(e,t,n){Yt[Vt++]=nn,Yt[Vt++]=an,Yt[Vt++]=_n,_n=e;var a=nn;e=an;var o=32-je(a)-1;a&=~(1<<o),n+=1;var s=32-je(t)+o;if(30<s){var g=o-o%5;s=(a&(1<<g)-1).toString(32),a>>=g,o-=g,nn=1<<32-je(t)+o|n<<o|a,an=s+e}else nn=1<<s|n<<o|a,an=e}function qu(e){e.return!==null&&(gn(e,1),Af(e,1,0))}function Gu(e){for(;e===Jl;)Jl=Yi[--Vi],Yi[Vi]=null,Ra=Yi[--Vi],Yi[Vi]=null;for(;e===_n;)_n=Yt[--Vt],Yt[Vt]=null,an=Yt[--Vt],Yt[Vt]=null,nn=Yt[--Vt],Yt[Vt]=null}function Sf(e,t){Yt[Vt++]=nn,Yt[Vt++]=an,Yt[Vt++]=_n,nn=t.id,an=t.overflow,_n=e}var ot=null,Ye=null,Ce=!1,In=null,Xt=!1,Yu=Error(u(519));function Rn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Na(Gt(t,e)),Yu}function Ef(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ut]=e,t[wt]=a,n){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(n=0;n<ll.length;n++)Se(ll[n],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),Rc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),Uc(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Hd(t.textContent,n)?(a.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),a.onScroll!=null&&Se("scroll",t),a.onScrollEnd!=null&&Se("scrollend",t),a.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Rn(e,!0)}function kf(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:ot=ot.return}}function Xi(e){if(e!==ot)return!1;if(!Ce)return kf(e),Ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ss(e.type,e.memoizedProps)),n=!n),n&&Ye&&Rn(e),kf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ye=Jd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ye=Jd(e)}else t===27?(t=Ye,Jn(e.type)?(e=ms,ms=null,Ye=e):Ye=t):Ye=ot?Zt(e.stateNode.nextSibling):null;return!0}function hi(){Ye=ot=null,Ce=!1}function Vu(){var e=In;return e!==null&&(kt===null?kt=e:kt.push.apply(kt,e),In=null),e}function Na(e){In===null?In=[e]:In.push(e)}var Xu=k(null),di=null,yn=null;function Nn(e,t,n){A(Xu,t._currentValue),t._currentValue=n}function bn(e){e._currentValue=Xu.current,H(Xu)}function Qu(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Zu(e,t,n,a){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var g=o.child;s=s.firstContext;e:for(;s!==null;){var v=s;s=o;for(var E=0;E<t.length;E++)if(v.context===t[E]){s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),Qu(s.return,n,e),a||(g=null);break e}s=v.next}}else if(o.tag===18){if(g=o.return,g===null)throw Error(u(341));g.lanes|=n,s=g.alternate,s!==null&&(s.lanes|=n),Qu(g,n,e),g=null}else g=o.child;if(g!==null)g.return=o;else for(g=o;g!==null;){if(g===e){g=null;break}if(o=g.sibling,o!==null){o.return=g.return,g=o;break}g=g.return}o=g}}function Qi(e,t,n,a){e=null;for(var o=t,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var g=o.alternate;if(g===null)throw Error(u(387));if(g=g.memoizedProps,g!==null){var v=o.type;zt(o.pendingProps.value,g.value)||(e!==null?e.push(v):e=[v])}}else if(o===ke.current){if(g=o.alternate,g===null)throw Error(u(387));g.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(cl):e=[cl])}o=o.return}e!==null&&Zu(t,e,n,a),t.flags|=262144}function Wl(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mi(e){di=e,yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return Tf(di,e)}function $l(e,t){return di===null&&mi(e),Tf(e,t)}function Tf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},yn===null){if(e===null)throw Error(u(308));yn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yn=yn.next=t;return n}var ky=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ty=i.unstable_scheduleCallback,xy=i.unstable_NormalPriority,$e={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new ky,data:new Map,refCount:0}}function Ua(e){e.refCount--,e.refCount===0&&Ty(xy,function(){e.controller.abort()})}var La=null,Ju=0,Zi=0,Ki=null;function Cy(e,t){if(La===null){var n=La=[];Ju=0,Zi=es(),Ki={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ju++,t.then(xf,xf),t}function xf(){if(--Ju===0&&La!==null){Ki!==null&&(Ki.status="fulfilled");var e=La;La=null,Zi=0,Ki=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Fy(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(a.status="rejected",a.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),a}var Cf=O.S;O.S=function(e,t){fd=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cy(e,t),Cf!==null&&Cf(e,t)};var pi=k(null);function Wu(){var e=pi.current;return e!==null?e:He.pooledCache}function Pl(e,t){t===null?A(pi,pi.current):A(pi,t.pool)}function Ff(){var e=Wu();return e===null?null:{parent:$e._currentValue,pool:e}}var Ji=Error(u(460)),$u=Error(u(474)),er=Error(u(542)),tr={then:function(){}};function zf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Of(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=a}},function(a){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Of(e),e}throw yi=t,Ji}}function gi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(yi=n,Ji):n}}var yi=null;function Bf(){if(yi===null)throw Error(u(459));var e=yi;return yi=null,e}function Of(e){if(e===Ji||e===er)throw Error(u(483))}var Wi=null,ja=0;function nr(e){var t=ja;return ja+=1,Wi===null&&(Wi=[]),Mf(Wi,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ir(e,t){throw t.$$typeof===D?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _f(e){function t(C,T){if(e){var F=C.deletions;F===null?(C.deletions=[T],C.flags|=16):F.push(T)}}function n(C,T){if(!e)return null;for(;T!==null;)t(C,T),T=T.sibling;return null}function a(C){for(var T=new Map;C!==null;)C.key!==null?T.set(C.key,C):T.set(C.index,C),C=C.sibling;return T}function o(C,T){return C=pn(C,T),C.index=0,C.sibling=null,C}function s(C,T,F){return C.index=F,e?(F=C.alternate,F!==null?(F=F.index,F<T?(C.flags|=67108866,T):F):(C.flags|=67108866,T)):(C.flags|=1048576,T)}function g(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function v(C,T,F,G){return T===null||T.tag!==6?(T=ju(F,C.mode,G),T.return=C,T):(T=o(T,F),T.return=C,T)}function E(C,T,F,G){var se=F.type;return se===j?L(C,T,F.props.children,G,F.key):T!==null&&(T.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ue&&gi(se)===T.type)?(T=o(T,F.props),Ha(T,F),T.return=C,T):(T=Kl(F.type,F.key,F.props,null,C.mode,G),Ha(T,F),T.return=C,T)}function z(C,T,F,G){return T===null||T.tag!==4||T.stateNode.containerInfo!==F.containerInfo||T.stateNode.implementation!==F.implementation?(T=Hu(F,C.mode,G),T.return=C,T):(T=o(T,F.children||[]),T.return=C,T)}function L(C,T,F,G,se){return T===null||T.tag!==7?(T=fi(F,C.mode,G,se),T.return=C,T):(T=o(T,F),T.return=C,T)}function Y(C,T,F){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=ju(""+T,C.mode,F),T.return=C,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case w:return F=Kl(T.type,T.key,T.props,null,C.mode,F),Ha(F,T),F.return=C,F;case x:return T=Hu(T,C.mode,F),T.return=C,T;case ue:return T=gi(T),Y(C,T,F)}if(Z(T)||ee(T))return T=fi(T,C.mode,F,null),T.return=C,T;if(typeof T.then=="function")return Y(C,nr(T),F);if(T.$$typeof===R)return Y(C,$l(C,T),F);ir(C,T)}return null}function B(C,T,F,G){var se=T!==null?T.key:null;if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return se!==null?null:v(C,T,""+F,G);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case w:return F.key===se?E(C,T,F,G):null;case x:return F.key===se?z(C,T,F,G):null;case ue:return F=gi(F),B(C,T,F,G)}if(Z(F)||ee(F))return se!==null?null:L(C,T,F,G,null);if(typeof F.then=="function")return B(C,T,nr(F),G);if(F.$$typeof===R)return B(C,T,$l(C,F),G);ir(C,F)}return null}function U(C,T,F,G,se){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return C=C.get(F)||null,v(T,C,""+G,se);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case w:return C=C.get(G.key===null?F:G.key)||null,E(T,C,G,se);case x:return C=C.get(G.key===null?F:G.key)||null,z(T,C,G,se);case ue:return G=gi(G),U(C,T,F,G,se)}if(Z(G)||ee(G))return C=C.get(F)||null,L(T,C,G,se,null);if(typeof G.then=="function")return U(C,T,F,nr(G),se);if(G.$$typeof===R)return U(C,T,F,$l(T,G),se);ir(T,G)}return null}function ne(C,T,F,G){for(var se=null,ze=null,ae=T,ye=T=0,xe=null;ae!==null&&ye<F.length;ye++){ae.index>ye?(xe=ae,ae=null):xe=ae.sibling;var Me=B(C,ae,F[ye],G);if(Me===null){ae===null&&(ae=xe);break}e&&ae&&Me.alternate===null&&t(C,ae),T=s(Me,T,ye),ze===null?se=Me:ze.sibling=Me,ze=Me,ae=xe}if(ye===F.length)return n(C,ae),Ce&&gn(C,ye),se;if(ae===null){for(;ye<F.length;ye++)ae=Y(C,F[ye],G),ae!==null&&(T=s(ae,T,ye),ze===null?se=ae:ze.sibling=ae,ze=ae);return Ce&&gn(C,ye),se}for(ae=a(ae);ye<F.length;ye++)xe=U(ae,C,ye,F[ye],G),xe!==null&&(e&&xe.alternate!==null&&ae.delete(xe.key===null?ye:xe.key),T=s(xe,T,ye),ze===null?se=xe:ze.sibling=xe,ze=xe);return e&&ae.forEach(function(ti){return t(C,ti)}),Ce&&gn(C,ye),se}function fe(C,T,F,G){if(F==null)throw Error(u(151));for(var se=null,ze=null,ae=T,ye=T=0,xe=null,Me=F.next();ae!==null&&!Me.done;ye++,Me=F.next()){ae.index>ye?(xe=ae,ae=null):xe=ae.sibling;var ti=B(C,ae,Me.value,G);if(ti===null){ae===null&&(ae=xe);break}e&&ae&&ti.alternate===null&&t(C,ae),T=s(ti,T,ye),ze===null?se=ti:ze.sibling=ti,ze=ti,ae=xe}if(Me.done)return n(C,ae),Ce&&gn(C,ye),se;if(ae===null){for(;!Me.done;ye++,Me=F.next())Me=Y(C,Me.value,G),Me!==null&&(T=s(Me,T,ye),ze===null?se=Me:ze.sibling=Me,ze=Me);return Ce&&gn(C,ye),se}for(ae=a(ae);!Me.done;ye++,Me=F.next())Me=U(ae,C,ye,Me.value,G),Me!==null&&(e&&Me.alternate!==null&&ae.delete(Me.key===null?ye:Me.key),T=s(Me,T,ye),ze===null?se=Me:ze.sibling=Me,ze=Me);return e&&ae.forEach(function(j0){return t(C,j0)}),Ce&&gn(C,ye),se}function Le(C,T,F,G){if(typeof F=="object"&&F!==null&&F.type===j&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case w:e:{for(var se=F.key;T!==null;){if(T.key===se){if(se=F.type,se===j){if(T.tag===7){n(C,T.sibling),G=o(T,F.props.children),G.return=C,C=G;break e}}else if(T.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ue&&gi(se)===T.type){n(C,T.sibling),G=o(T,F.props),Ha(G,F),G.return=C,C=G;break e}n(C,T);break}else t(C,T);T=T.sibling}F.type===j?(G=fi(F.props.children,C.mode,G,F.key),G.return=C,C=G):(G=Kl(F.type,F.key,F.props,null,C.mode,G),Ha(G,F),G.return=C,C=G)}return g(C);case x:e:{for(se=F.key;T!==null;){if(T.key===se)if(T.tag===4&&T.stateNode.containerInfo===F.containerInfo&&T.stateNode.implementation===F.implementation){n(C,T.sibling),G=o(T,F.children||[]),G.return=C,C=G;break e}else{n(C,T);break}else t(C,T);T=T.sibling}G=Hu(F,C.mode,G),G.return=C,C=G}return g(C);case ue:return F=gi(F),Le(C,T,F,G)}if(Z(F))return ne(C,T,F,G);if(ee(F)){if(se=ee(F),typeof se!="function")throw Error(u(150));return F=se.call(F),fe(C,T,F,G)}if(typeof F.then=="function")return Le(C,T,nr(F),G);if(F.$$typeof===R)return Le(C,T,$l(C,F),G);ir(C,F)}return typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint"?(F=""+F,T!==null&&T.tag===6?(n(C,T.sibling),G=o(T,F),G.return=C,C=G):(n(C,T),G=ju(F,C.mode,G),G.return=C,C=G),g(C)):n(C,T)}return function(C,T,F,G){try{ja=0;var se=Le(C,T,F,G);return Wi=null,se}catch(ae){if(ae===Ji||ae===er)throw ae;var ze=Mt(29,ae,null,C.mode);return ze.lanes=G,ze.return=C,ze}finally{}}}var bi=_f(!0),If=_f(!1),Un=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ln(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Be&2)!==0){var o=a.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),a.pending=t,t=Zl(e),bf(e,null,n),t}return Ql(e,a,t,n),Zl(e)}function qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,kc(e,n)}}function to(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?o=s=g:s=s.next=g,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var no=!1;function Ga(){if(no){var e=Ki;if(e!==null)throw e}}function Ya(e,t,n,a){no=!1;var o=e.updateQueue;Un=!1;var s=o.firstBaseUpdate,g=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var E=v,z=E.next;E.next=null,g===null?s=z:g.next=z,g=E;var L=e.alternate;L!==null&&(L=L.updateQueue,v=L.lastBaseUpdate,v!==g&&(v===null?L.firstBaseUpdate=z:v.next=z,L.lastBaseUpdate=E))}if(s!==null){var Y=o.baseState;g=0,L=z=E=null,v=s;do{var B=v.lane&-536870913,U=B!==v.lane;if(U?(Te&B)===B:(a&B)===B){B!==0&&B===Zi&&(no=!0),L!==null&&(L=L.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ne=e,fe=v;B=t;var Le=n;switch(fe.tag){case 1:if(ne=fe.payload,typeof ne=="function"){Y=ne.call(Le,Y,B);break e}Y=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=fe.payload,B=typeof ne=="function"?ne.call(Le,Y,B):ne,B==null)break e;Y=y({},Y,B);break e;case 2:Un=!0}}B=v.callback,B!==null&&(e.flags|=64,U&&(e.flags|=8192),U=o.callbacks,U===null?o.callbacks=[B]:U.push(B))}else U={lane:B,tag:v.tag,payload:v.payload,callback:v.callback,next:null},L===null?(z=L=U,E=Y):L=L.next=U,g|=B;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;U=v,v=U.next,U.next=null,o.lastBaseUpdate=U,o.shared.pending=null}}while(!0);L===null&&(E=Y),o.baseState=E,o.firstBaseUpdate=z,o.lastBaseUpdate=L,s===null&&(o.shared.lanes=0),Vn|=g,e.lanes=g,e.memoizedState=Y}}function Rf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Nf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rf(n[e],t)}var $i=k(null),ar=k(0);function Uf(e,t){e=xn,A(ar,e),A($i,t),xn=e|t.baseLanes}function io(){A(ar,xn),A($i,$i.current)}function ao(){xn=ar.current,H($i),H(ar)}var Bt=k(null),Qt=null;function Hn(e){var t=e.alternate;A(Je,Je.current&1),A(Bt,e),Qt===null&&(t===null||$i.current!==null||t.memoizedState!==null)&&(Qt=e)}function lo(e){A(Je,Je.current),A(Bt,e),Qt===null&&(Qt=e)}function Lf(e){e.tag===22?(A(Je,Je.current),A(Bt,e),Qt===null&&(Qt=e)):qn()}function qn(){A(Je,Je.current),A(Bt,Bt.current)}function Ot(e){H(Bt),Qt===e&&(Qt=null),H(Je)}var Je=k(0);function lr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hs(n)||ds(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vn=0,ge=null,Ne=null,Pe=null,rr=!1,Pi=!1,vi=!1,ur=0,Va=0,ea=null,zy=0;function Ze(){throw Error(u(321))}function ro(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function uo(e,t,n,a,o,s){return vn=s,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Ah:So,vi=!1,s=n(a,o),vi=!1,Pi&&(s=Hf(t,n,a,o)),jf(e),s}function jf(e){O.H=Za;var t=Ne!==null&&Ne.next!==null;if(vn=0,Pe=Ne=ge=null,rr=!1,Va=0,ea=null,t)throw Error(u(300));e===null||et||(e=e.dependencies,e!==null&&Wl(e)&&(et=!0))}function Hf(e,t,n,a){ge=e;var o=0;do{if(Pi&&(ea=null),Va=0,Pi=!1,25<=o)throw Error(u(301));if(o+=1,Pe=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}O.H=Sh,s=t(n,a)}while(Pi);return s}function My(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Xa(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ge.flags|=1024),t}function oo(){var e=ur!==0;return ur=0,e}function so(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function co(e){if(rr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rr=!1}vn=0,Pe=Ne=ge=null,Pi=!1,Va=ur=0,ea=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ge.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function We(){if(Ne===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=Pe===null?ge.memoizedState:Pe.next;if(t!==null)Pe=t,Ne=e;else{if(e===null)throw ge.alternate===null?Error(u(467)):Error(u(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Pe===null?ge.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function or(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xa(e){var t=Va;return Va+=1,ea===null&&(ea=[]),e=Mf(ea,e,t),t=ge,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Ah:So),e}function sr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xa(e);if(e.$$typeof===R)return st(e)}throw Error(u(438,String(e)))}function fo(e){var t=null,n=ge.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ge.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=or(),ge.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=N;return t.index++,n}function wn(e,t){return typeof t=="function"?t(e):t}function cr(e){var t=We();return ho(t,Ne,e)}function ho(e,t,n){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var o=e.baseQueue,s=a.pending;if(s!==null){if(o!==null){var g=o.next;o.next=s.next,s.next=g}t.baseQueue=o=s,a.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var v=g=null,E=null,z=t,L=!1;do{var Y=z.lane&-536870913;if(Y!==z.lane?(Te&Y)===Y:(vn&Y)===Y){var B=z.revertLane;if(B===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Y===Zi&&(L=!0);else if((vn&B)===B){z=z.next,B===Zi&&(L=!0);continue}else Y={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},E===null?(v=E=Y,g=s):E=E.next=Y,ge.lanes|=B,Vn|=B;Y=z.action,vi&&n(s,Y),s=z.hasEagerState?z.eagerState:n(s,Y)}else B={lane:Y,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},E===null?(v=E=B,g=s):E=E.next=B,ge.lanes|=Y,Vn|=Y;z=z.next}while(z!==null&&z!==t);if(E===null?g=s:E.next=v,!zt(s,e.memoizedState)&&(et=!0,L&&(n=Ki,n!==null)))throw n;e.memoizedState=s,e.baseState=g,e.baseQueue=E,a.lastRenderedState=s}return o===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function mo(e){var t=We(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var a=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var g=o=o.next;do s=e(s,g.action),g=g.next;while(g!==o);zt(s,t.memoizedState)||(et=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,a]}function qf(e,t,n){var a=ge,o=We(),s=Ce;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var g=!zt((Ne||o).memoizedState,n);if(g&&(o.memoizedState=n,et=!0),o=o.queue,yo(Vf.bind(null,a,o,e),[e]),o.getSnapshot!==t||g||Pe!==null&&Pe.memoizedState.tag&1){if(a.flags|=2048,ta(9,{destroy:void 0},Yf.bind(null,a,o,n,t),null),He===null)throw Error(u(349));s||(vn&127)!==0||Gf(a,t,n)}return n}function Gf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t=or(),ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yf(e,t,n,a){t.value=n,t.getSnapshot=a,Xf(t)&&Qf(e)}function Vf(e,t,n){return n(function(){Xf(t)&&Qf(e)})}function Xf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Qf(e){var t=ci(e,2);t!==null&&Tt(t,e,2)}function po(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),vi){vt(!0);try{n()}finally{vt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t}function Zf(e,t,n,a){return e.baseState=n,ho(e,Ne,typeof a=="function"?a:wn)}function By(e,t,n,a,o){if(dr(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){s.listeners.push(g)}};O.T!==null?n(!0):s.isTransition=!1,a(s),n=t.pending,n===null?(s.next=t.pending=s,Kf(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Kf(e,t){var n=t.action,a=t.payload,o=e.state;if(t.isTransition){var s=O.T,g={};O.T=g;try{var v=n(o,a),E=O.S;E!==null&&E(g,v),Jf(e,t,v)}catch(z){go(e,t,z)}finally{s!==null&&g.types!==null&&(s.types=g.types),O.T=s}}else try{s=n(o,a),Jf(e,t,s)}catch(z){go(e,t,z)}}function Jf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Wf(e,t,a)},function(a){return go(e,t,a)}):Wf(e,t,n)}function Wf(e,t,n){t.status="fulfilled",t.value=n,$f(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Kf(e,n)))}function go(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,$f(t),t=t.next;while(t!==a)}e.action=null}function $f(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Pf(e,t){return t}function eh(e,t){if(Ce){var n=He.formState;if(n!==null){e:{var a=ge;if(Ce){if(Ye){t:{for(var o=Ye,s=Xt;o.nodeType!==8;){if(!s){o=null;break t}if(o=Zt(o.nextSibling),o===null){o=null;break t}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){Ye=Zt(o.nextSibling),a=o.data==="F!";break e}}Rn(a)}a=!1}a&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pf,lastRenderedState:t},n.queue=a,n=vh.bind(null,ge,a),a.dispatch=n,a=po(!1),s=Ao.bind(null,ge,!1,a.queue),a=yt(),o={state:t,dispatch:null,action:e,pending:null},a.queue=o,n=By.bind(null,ge,o,s,n),o.dispatch=n,a.memoizedState=e,[t,n,!1]}function th(e){var t=We();return nh(t,Ne,e)}function nh(e,t,n){if(t=ho(e,t,Pf)[0],e=cr(wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Xa(t)}catch(g){throw g===Ji?er:g}else a=t;t=We();var o=t.queue,s=o.dispatch;return n!==t.memoizedState&&(ge.flags|=2048,ta(9,{destroy:void 0},Oy.bind(null,o,n),null)),[a,s,e]}function Oy(e,t){e.action=t}function ih(e){var t=We(),n=Ne;if(n!==null)return nh(t,n,e);We(),t=t.memoizedState,n=We();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ta(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ge.updateQueue,t===null&&(t=or(),ge.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function ah(){return We().memoizedState}function fr(e,t,n,a){var o=yt();ge.flags|=e,o.memoizedState=ta(1|t,{destroy:void 0},n,a===void 0?null:a)}function hr(e,t,n,a){var o=We();a=a===void 0?null:a;var s=o.memoizedState.inst;Ne!==null&&a!==null&&ro(a,Ne.memoizedState.deps)?o.memoizedState=ta(t,s,n,a):(ge.flags|=e,o.memoizedState=ta(1|t,s,n,a))}function lh(e,t){fr(8390656,8,e,t)}function yo(e,t){hr(2048,8,e,t)}function _y(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=or(),ge.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function rh(e){var t=We().memoizedState;return _y({ref:t,nextImpl:e}),function(){if((Be&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function uh(e,t){return hr(4,2,e,t)}function oh(e,t){return hr(4,4,e,t)}function sh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ch(e,t,n){n=n!=null?n.concat([e]):null,hr(4,4,sh.bind(null,t,e),n)}function bo(){}function fh(e,t){var n=We();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&ro(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function hh(e,t){var n=We();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&ro(t,a[1]))return a[0];if(a=e(),vi){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[a,t],a}function vo(e,t,n){return n===void 0||(vn&1073741824)!==0&&(Te&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=dd(),ge.lanes|=e,Vn|=e,n)}function dh(e,t,n,a){return zt(n,t)?n:$i.current!==null?(e=vo(e,n,a),zt(e,t)||(et=!0),e):(vn&42)===0||(vn&1073741824)!==0&&(Te&261930)===0?(et=!0,e.memoizedState=n):(e=dd(),ge.lanes|=e,Vn|=e,t)}function mh(e,t,n,a,o){var s=X.p;X.p=s!==0&&8>s?s:8;var g=O.T,v={};O.T=v,Ao(e,!1,t,n);try{var E=o(),z=O.S;if(z!==null&&z(v,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var L=Fy(E,a);Qa(e,t,L,Rt(e))}else Qa(e,t,a,Rt(e))}catch(Y){Qa(e,t,{then:function(){},status:"rejected",reason:Y},Rt())}finally{X.p=s,g!==null&&v.types!==null&&(g.types=v.types),O.T=g}}function Iy(){}function wo(e,t,n,a){if(e.tag!==5)throw Error(u(476));var o=ph(e).queue;mh(e,o,t,le,n===null?Iy:function(){return gh(e),n(a)})}function ph(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gh(e){var t=ph(e);t.next===null&&(t=e.alternate.memoizedState),Qa(e,t.next.queue,{},Rt())}function Do(){return st(cl)}function yh(){return We().memoizedState}function bh(){return We().memoizedState}function Ry(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Rt();e=Ln(n);var a=jn(t,e,n);a!==null&&(Tt(a,t,n),qa(a,t,n)),t={cache:Ku()},e.payload=t;return}t=t.return}}function Ny(e,t,n){var a=Rt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dr(e)?wh(t,n):(n=Uu(e,t,n,a),n!==null&&(Tt(n,e,a),Dh(n,t,a)))}function vh(e,t,n){var a=Rt();Qa(e,t,n,a)}function Qa(e,t,n,a){var o={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(dr(e))wh(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var g=t.lastRenderedState,v=s(g,n);if(o.hasEagerState=!0,o.eagerState=v,zt(v,g))return Ql(e,t,o,0),He===null&&Xl(),!1}catch{}finally{}if(n=Uu(e,t,o,a),n!==null)return Tt(n,e,a),Dh(n,t,a),!0}return!1}function Ao(e,t,n,a){if(a={lane:2,revertLane:es(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dr(e)){if(t)throw Error(u(479))}else t=Uu(e,n,a,2),t!==null&&Tt(t,e,2)}function dr(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function wh(e,t){Pi=rr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dh(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,kc(e,n)}}var Za={readContext:st,use:sr,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};Za.useEffectEvent=Ze;var Ah={readContext:st,use:sr,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:lh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,fr(4194308,4,sh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fr(4194308,4,e,t)},useInsertionEffect:function(e,t){fr(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var a=e();if(vi){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=yt();if(n!==void 0){var o=n(t);if(vi){vt(!0);try{n(t)}finally{vt(!1)}}}else o=t;return a.memoizedState=a.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},a.queue=e,e=e.dispatch=Ny.bind(null,ge,e),[a.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=po(e);var t=e.queue,n=vh.bind(null,ge,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bo,useDeferredValue:function(e,t){var n=yt();return vo(n,e,t)},useTransition:function(){var e=po(!1);return e=mh.bind(null,ge,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ge,o=yt();if(Ce){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),He===null)throw Error(u(349));(Te&127)!==0||Gf(a,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,lh(Vf.bind(null,a,s,e),[e]),a.flags|=2048,ta(9,{destroy:void 0},Yf.bind(null,a,s,n,t),null),n},useId:function(){var e=yt(),t=He.identifierPrefix;if(Ce){var n=an,a=nn;n=(a&~(1<<32-je(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Do,useFormState:eh,useActionState:eh,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ao.bind(null,ge,!0,n),n.dispatch=t,[e,t]},useMemoCache:fo,useCacheRefresh:function(){return yt().memoizedState=Ry.bind(null,ge)},useEffectEvent:function(e){var t=yt(),n={impl:e};return t.memoizedState=n,function(){if((Be&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},So={readContext:st,use:sr,useCallback:fh,useContext:st,useEffect:yo,useImperativeHandle:ch,useInsertionEffect:uh,useLayoutEffect:oh,useMemo:hh,useReducer:cr,useRef:ah,useState:function(){return cr(wn)},useDebugValue:bo,useDeferredValue:function(e,t){var n=We();return dh(n,Ne.memoizedState,e,t)},useTransition:function(){var e=cr(wn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Xa(e),t]},useSyncExternalStore:qf,useId:yh,useHostTransitionStatus:Do,useFormState:th,useActionState:th,useOptimistic:function(e,t){var n=We();return Zf(n,Ne,e,t)},useMemoCache:fo,useCacheRefresh:bh};So.useEffectEvent=rh;var Sh={readContext:st,use:sr,useCallback:fh,useContext:st,useEffect:yo,useImperativeHandle:ch,useInsertionEffect:uh,useLayoutEffect:oh,useMemo:hh,useReducer:mo,useRef:ah,useState:function(){return mo(wn)},useDebugValue:bo,useDeferredValue:function(e,t){var n=We();return Ne===null?vo(n,e,t):dh(n,Ne.memoizedState,e,t)},useTransition:function(){var e=mo(wn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Xa(e),t]},useSyncExternalStore:qf,useId:yh,useHostTransitionStatus:Do,useFormState:ih,useActionState:ih,useOptimistic:function(e,t){var n=We();return Ne!==null?Zf(n,Ne,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fo,useCacheRefresh:bh};Sh.useEffectEvent=rh;function Eo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ko={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Rt(),o=Ln(a);o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,a),t!==null&&(Tt(t,e,a),qa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Rt(),o=Ln(a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,a),t!==null&&(Tt(t,e,a),qa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rt(),a=Ln(n);a.tag=2,t!=null&&(a.callback=t),t=jn(e,a,n),t!==null&&(Tt(t,e,n),qa(t,e,n))}};function Eh(e,t,n,a,o,s,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,s,g):t.prototype&&t.prototype.isPureReactComponent?!_a(n,a)||!_a(o,s):!0}function kh(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function wi(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Th(e){Vl(e)}function xh(e){console.error(e)}function Ch(e){Vl(e)}function mr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Fh(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function To(e,t,n){return n=Ln(n),n.tag=3,n.payload={element:null},n.callback=function(){mr(e,t)},n}function zh(e){return e=Ln(e),e.tag=3,e}function Mh(e,t,n,a){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var s=a.value;e.payload=function(){return o(s)},e.callback=function(){Fh(t,n,a)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Fh(t,n,a),typeof o!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var v=a.stack;this.componentDidCatch(a.value,{componentStack:v!==null?v:""})})}function Uy(e,t,n,a,o){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Qi(t,n,o,!0),n=Bt.current,n!==null){switch(n.tag){case 31:case 13:return Qt===null?Tr():n.alternate===null&&Ke===0&&(Ke=3),n.flags&=-257,n.flags|=65536,n.lanes=o,a===tr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Wo(e,a,o)),!1;case 22:return n.flags|=65536,a===tr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Wo(e,a,o)),!1}throw Error(u(435,n.tag))}return Wo(e,a,o),Tr(),!1}if(Ce)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,a!==Yu&&(e=Error(u(422),{cause:a}),Na(Gt(e,n)))):(a!==Yu&&(t=Error(u(423),{cause:a}),Na(Gt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,a=Gt(a,n),o=To(e.stateNode,a,o),to(e,o),Ke!==4&&(Ke=2)),!1;var s=Error(u(520),{cause:a});if(s=Gt(s,n),nl===null?nl=[s]:nl.push(s),Ke!==4&&(Ke=2),t===null)return!0;a=Gt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=To(n.stateNode,a,e),to(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Xn===null||!Xn.has(s))))return n.flags|=65536,o&=-o,n.lanes|=o,o=zh(o),Mh(o,e,n,a),to(n,o),!1}n=n.return}while(n!==null);return!1}var xo=Error(u(461)),et=!1;function ct(e,t,n,a){t.child=e===null?If(t,null,n,a):bi(t,e.child,n,a)}function Bh(e,t,n,a,o){n=n.render;var s=t.ref;if("ref"in a){var g={};for(var v in a)v!=="ref"&&(g[v]=a[v])}else g=a;return mi(t),a=uo(e,t,n,g,s,o),v=oo(),e!==null&&!et?(so(e,t,o),Dn(e,t,o)):(Ce&&v&&qu(t),t.flags|=1,ct(e,t,a,o),t.child)}function Oh(e,t,n,a,o){if(e===null){var s=n.type;return typeof s=="function"&&!Lu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,_h(e,t,s,a,o)):(e=Kl(n.type,null,a,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Io(e,o)){var g=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(g,a)&&e.ref===t.ref)return Dn(e,t,o)}return t.flags|=1,e=pn(s,a),e.ref=t.ref,e.return=t,t.child=e}function _h(e,t,n,a,o){if(e!==null){var s=e.memoizedProps;if(_a(s,a)&&e.ref===t.ref)if(et=!1,t.pendingProps=a=s,Io(e,o))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,Dn(e,t,o)}return Co(e,t,n,a,o)}function Ih(e,t,n,a){var o=a.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(a=t.child=e.child,o=0;a!==null;)o=o|a.lanes|a.childLanes,a=a.sibling;a=o&~s}else a=0,t.child=null;return Rh(e,t,s,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(t,s!==null?s.cachePool:null),s!==null?Uf(t,s):io(),Lf(t);else return a=t.lanes=536870912,Rh(e,t,s!==null?s.baseLanes|n:n,n,a)}else s!==null?(Pl(t,s.cachePool),Uf(t,s),qn(),t.memoizedState=null):(e!==null&&Pl(t,null),io(),qn());return ct(e,t,o,n),t.child}function Ka(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rh(e,t,n,a,o){var s=Wu();return s=s===null?null:{parent:$e._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Pl(t,null),io(),Lf(t),e!==null&&Qi(e,t,a,!0),t.childLanes=o,null}function pr(e,t){return t=yr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Nh(e,t,n){return bi(t,e.child,null,n),e=pr(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function Ly(e,t,n){var a=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(a.mode==="hidden")return e=pr(t,a),t.lanes=536870912,Ka(null,e);if(lo(t),(e=Ye)?(e=Kd(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_n!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=wf(e),n.return=t,t.child=n,ot=t,Ye=null)):e=null,e===null)throw Rn(t);return t.lanes=536870912,null}return pr(t,a)}var s=e.memoizedState;if(s!==null){var g=s.dehydrated;if(lo(t),o)if(t.flags&256)t.flags&=-257,t=Nh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(et||Qi(e,t,n,!1),o=(n&e.childLanes)!==0,et||o){if(a=He,a!==null&&(g=Tc(a,n),g!==0&&g!==s.retryLane))throw s.retryLane=g,ci(e,g),Tt(a,e,g),xo;Tr(),t=Nh(e,t,n)}else e=s.treeContext,Ye=Zt(g.nextSibling),ot=t,Ce=!0,In=null,Xt=!1,e!==null&&Sf(t,e),t=pr(t,a),t.flags|=4096;return t}return e=pn(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Co(e,t,n,a,o){return mi(t),n=uo(e,t,n,a,void 0,o),a=oo(),e!==null&&!et?(so(e,t,o),Dn(e,t,o)):(Ce&&a&&qu(t),t.flags|=1,ct(e,t,n,o),t.child)}function Uh(e,t,n,a,o,s){return mi(t),t.updateQueue=null,n=Hf(t,a,n,o),jf(e),a=oo(),e!==null&&!et?(so(e,t,s),Dn(e,t,s)):(Ce&&a&&qu(t),t.flags|=1,ct(e,t,n,s),t.child)}function Lh(e,t,n,a,o){if(mi(t),t.stateNode===null){var s=Gi,g=n.contextType;typeof g=="object"&&g!==null&&(s=st(g)),s=new n(a,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ko,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=a,s.state=t.memoizedState,s.refs={},Pu(t),g=n.contextType,s.context=typeof g=="object"&&g!==null?st(g):Gi,s.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Eo(t,n,g,a),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(g=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),g!==s.state&&ko.enqueueReplaceState(s,s.state,null),Ya(t,a,s,o),Ga(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){s=t.stateNode;var v=t.memoizedProps,E=wi(n,v);s.props=E;var z=s.context,L=n.contextType;g=Gi,typeof L=="object"&&L!==null&&(g=st(L));var Y=n.getDerivedStateFromProps;L=typeof Y=="function"||typeof s.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,L||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(v||z!==g)&&kh(t,s,a,g),Un=!1;var B=t.memoizedState;s.state=B,Ya(t,a,s,o),Ga(),z=t.memoizedState,v||B!==z||Un?(typeof Y=="function"&&(Eo(t,n,Y,a),z=t.memoizedState),(E=Un||Eh(t,n,E,a,B,z,g))?(L||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),s.props=a,s.state=z,s.context=g,a=E):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{s=t.stateNode,eo(e,t),g=t.memoizedProps,L=wi(n,g),s.props=L,Y=t.pendingProps,B=s.context,z=n.contextType,E=Gi,typeof z=="object"&&z!==null&&(E=st(z)),v=n.getDerivedStateFromProps,(z=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g!==Y||B!==E)&&kh(t,s,a,E),Un=!1,B=t.memoizedState,s.state=B,Ya(t,a,s,o),Ga();var U=t.memoizedState;g!==Y||B!==U||Un||e!==null&&e.dependencies!==null&&Wl(e.dependencies)?(typeof v=="function"&&(Eo(t,n,v,a),U=t.memoizedState),(L=Un||Eh(t,n,L,a,B,U,E)||e!==null&&e.dependencies!==null&&Wl(e.dependencies))?(z||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(a,U,E),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(a,U,E)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=U),s.props=a,s.state=U,s.context=E,a=L):(typeof s.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),a=!1)}return s=a,gr(e,t),a=(t.flags&128)!==0,s||a?(s=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&a?(t.child=bi(t,e.child,null,o),t.child=bi(t,null,n,o)):ct(e,t,n,o),t.memoizedState=s.state,e=t.child):e=Dn(e,t,o),e}function jh(e,t,n,a){return hi(),t.flags|=256,ct(e,t,n,a),t.child}var Fo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zo(e){return{baseLanes:e,cachePool:Ff()}}function Mo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=It),e}function Hh(e,t,n){var a=t.pendingProps,o=!1,s=(t.flags&128)!==0,g;if((g=s)||(g=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),g&&(o=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(o?Hn(t):qn(),(e=Ye)?(e=Kd(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_n!==null?{id:nn,overflow:an}:null,retryLane:536870912,hydrationErrors:null},n=wf(e),n.return=t,t.child=n,ot=t,Ye=null)):e=null,e===null)throw Rn(t);return ds(e)?t.lanes=32:t.lanes=536870912,null}var v=a.children;return a=a.fallback,o?(qn(),o=t.mode,v=yr({mode:"hidden",children:v},o),a=fi(a,o,n,null),v.return=t,a.return=t,v.sibling=a,t.child=v,a=t.child,a.memoizedState=zo(n),a.childLanes=Mo(e,g,n),t.memoizedState=Fo,Ka(null,a)):(Hn(t),Bo(t,v))}var E=e.memoizedState;if(E!==null&&(v=E.dehydrated,v!==null)){if(s)t.flags&256?(Hn(t),t.flags&=-257,t=Oo(e,t,n)):t.memoizedState!==null?(qn(),t.child=e.child,t.flags|=128,t=null):(qn(),v=a.fallback,o=t.mode,a=yr({mode:"visible",children:a.children},o),v=fi(v,o,n,null),v.flags|=2,a.return=t,v.return=t,a.sibling=v,t.child=a,bi(t,e.child,null,n),a=t.child,a.memoizedState=zo(n),a.childLanes=Mo(e,g,n),t.memoizedState=Fo,t=Ka(null,a));else if(Hn(t),ds(v)){if(g=v.nextSibling&&v.nextSibling.dataset,g)var z=g.dgst;g=z,a=Error(u(419)),a.stack="",a.digest=g,Na({value:a,source:null,stack:null}),t=Oo(e,t,n)}else if(et||Qi(e,t,n,!1),g=(n&e.childLanes)!==0,et||g){if(g=He,g!==null&&(a=Tc(g,n),a!==0&&a!==E.retryLane))throw E.retryLane=a,ci(e,a),Tt(g,e,a),xo;hs(v)||Tr(),t=Oo(e,t,n)}else hs(v)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Ye=Zt(v.nextSibling),ot=t,Ce=!0,In=null,Xt=!1,e!==null&&Sf(t,e),t=Bo(t,a.children),t.flags|=4096);return t}return o?(qn(),v=a.fallback,o=t.mode,E=e.child,z=E.sibling,a=pn(E,{mode:"hidden",children:a.children}),a.subtreeFlags=E.subtreeFlags&65011712,z!==null?v=pn(z,v):(v=fi(v,o,n,null),v.flags|=2),v.return=t,a.return=t,a.sibling=v,t.child=a,Ka(null,a),a=t.child,v=e.child.memoizedState,v===null?v=zo(n):(o=v.cachePool,o!==null?(E=$e._currentValue,o=o.parent!==E?{parent:E,pool:E}:o):o=Ff(),v={baseLanes:v.baseLanes|n,cachePool:o}),a.memoizedState=v,a.childLanes=Mo(e,g,n),t.memoizedState=Fo,Ka(e.child,a)):(Hn(t),n=e.child,e=n.sibling,n=pn(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function Bo(e,t){return t=yr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yr(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Oo(e,t,n){return bi(t,e.child,null,n),e=Bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qh(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Qu(e.return,t,n)}function _o(e,t,n,a,o,s){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:o,treeForkCount:s}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=a,g.tail=n,g.tailMode=o,g.treeForkCount=s)}function Gh(e,t,n){var a=t.pendingProps,o=a.revealOrder,s=a.tail;a=a.children;var g=Je.current,v=(g&2)!==0;if(v?(g=g&1|2,t.flags|=128):g&=1,A(Je,g),ct(e,t,a,n),a=Ce?Ra:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qh(e,n,t);else if(e.tag===19)qh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&lr(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_o(t,!1,o,n,s,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&lr(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_o(t,!0,n,null,s,a);break;case"together":_o(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Io(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wl(e)))}function jy(e,t,n){switch(t.tag){case 3:Xe(t,t.stateNode.containerInfo),Nn(t,$e,e.memoizedState.cache),hi();break;case 27:case 5:Lt(t);break;case 4:Xe(t,t.stateNode.containerInfo);break;case 10:Nn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,lo(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Hn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Hh(e,t,n):(Hn(t),e=Dn(e,t,n),e!==null?e.sibling:null);Hn(t);break;case 19:var o=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Qi(e,t,n,!1),a=(n&t.childLanes)!==0),o){if(a)return Gh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),A(Je,Je.current),a)break;return null;case 22:return t.lanes=0,Ih(e,t,n,t.pendingProps);case 24:Nn(t,$e,e.memoizedState.cache)}return Dn(e,t,n)}function Yh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!Io(e,n)&&(t.flags&128)===0)return et=!1,jy(e,t,n);et=(e.flags&131072)!==0}else et=!1,Ce&&(t.flags&1048576)!==0&&Af(t,Ra,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=gi(t.elementType),t.type=e,typeof e=="function")Lu(e)?(a=wi(e,a),t.tag=1,t=Lh(null,t,e,a,n)):(t.tag=0,t=Co(null,t,e,a,n));else{if(e!=null){var o=e.$$typeof;if(o===W){t.tag=11,t=Bh(null,t,e,a,n);break e}else if(o===J){t.tag=14,t=Oh(null,t,e,a,n);break e}}throw t=ie(e)||e,Error(u(306,t,""))}}return t;case 0:return Co(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,o=wi(a,t.pendingProps),Lh(e,t,a,o,n);case 3:e:{if(Xe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));a=t.pendingProps;var s=t.memoizedState;o=s.element,eo(e,t),Ya(t,a,null,n);var g=t.memoizedState;if(a=g.cache,Nn(t,$e,a),a!==s.cache&&Zu(t,[$e],n,!0),Ga(),a=g.element,s.isDehydrated)if(s={element:a,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=jh(e,t,a,n);break e}else if(a!==o){o=Gt(Error(u(424)),t),Na(o),t=jh(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=Zt(e.firstChild),ot=t,Ce=!0,In=null,Xt=!0,n=If(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(hi(),a===o){t=Dn(e,t,n);break e}ct(e,t,a,n)}t=t.child}return t;case 26:return gr(e,t),e===null?(n=tm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ce||(n=t.type,e=t.pendingProps,a=Or(oe.current).createElement(n),a[ut]=t,a[wt]=e,ft(a,n,e),lt(a),t.stateNode=a):t.memoizedState=tm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Lt(t),e===null&&Ce&&(a=t.stateNode=$d(t.type,t.pendingProps,oe.current),ot=t,Xt=!0,o=Ye,Jn(t.type)?(ms=o,Ye=Zt(a.firstChild)):Ye=o),ct(e,t,t.pendingProps.children,n),gr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((o=a=Ye)&&(a=g0(a,t.type,t.pendingProps,Xt),a!==null?(t.stateNode=a,ot=t,Ye=Zt(a.firstChild),Xt=!1,o=!0):o=!1),o||Rn(t)),Lt(t),o=t.type,s=t.pendingProps,g=e!==null?e.memoizedProps:null,a=s.children,ss(o,s)?a=null:g!==null&&ss(o,g)&&(t.flags|=32),t.memoizedState!==null&&(o=uo(e,t,My,null,null,n),cl._currentValue=o),gr(e,t),ct(e,t,a,n),t.child;case 6:return e===null&&Ce&&((e=n=Ye)&&(n=y0(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,ot=t,Ye=null,e=!0):e=!1),e||Rn(t)),null;case 13:return Hh(e,t,n);case 4:return Xe(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=bi(t,null,a,n):ct(e,t,a,n),t.child;case 11:return Bh(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,Nn(t,t.type,a.value),ct(e,t,a.children,n),t.child;case 9:return o=t.type._context,a=t.pendingProps.children,mi(t),o=st(o),a=a(o),t.flags|=1,ct(e,t,a,n),t.child;case 14:return Oh(e,t,t.type,t.pendingProps,n);case 15:return _h(e,t,t.type,t.pendingProps,n);case 19:return Gh(e,t,n);case 31:return Ly(e,t,n);case 22:return Ih(e,t,n,t.pendingProps);case 24:return mi(t),a=st($e),e===null?(o=Wu(),o===null&&(o=He,s=Ku(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=n),o=s),t.memoizedState={parent:a,cache:o},Pu(t),Nn(t,$e,o)):((e.lanes&n)!==0&&(eo(e,t),Ya(t,null,null,n),Ga()),o=e.memoizedState,s=t.memoizedState,o.parent!==a?(o={parent:a,cache:a},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Nn(t,$e,a)):(a=s.cache,Nn(t,$e,a),a!==o.cache&&Zu(t,[$e],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function An(e){e.flags|=4}function Ro(e,t,n,a,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(yd())e.flags|=8192;else throw yi=tr,$u}else e.flags&=-16777217}function Vh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rm(t))if(yd())e.flags|=8192;else throw yi=tr,$u}function br(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sc():536870912,e.lanes|=t,la|=t)}function Ja(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags&65011712,a|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,a|=o.subtreeFlags,a|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Hy(e,t,n){var a=t.pendingProps;switch(Gu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),bn($e),Re(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?An(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vu())),Ve(t),null;case 26:var o=t.type,s=t.memoizedState;return e===null?(An(t),s!==null?(Ve(t),Vh(t,s)):(Ve(t),Ro(t,o,null,a,n))):s?s!==e.memoizedState?(An(t),Ve(t),Vh(t,s)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&An(t),Ve(t),Ro(t,o,e,a,n)),null;case 27:if(sn(t),n=oe.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&An(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}e=$.current,Xi(t)?Ef(t):(e=$d(o,a,n),t.stateNode=e,An(t))}return Ve(t),null;case 5:if(sn(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&An(t);else{if(!a){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}if(s=$.current,Xi(t))Ef(t);else{var g=Or(oe.current);switch(s){case 1:s=g.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=g.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=g.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=g.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=g.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof a.is=="string"?g.createElement("select",{is:a.is}):g.createElement("select"),a.multiple?s.multiple=!0:a.size&&(s.size=a.size);break;default:s=typeof a.is=="string"?g.createElement(o,{is:a.is}):g.createElement(o)}}s[ut]=t,s[wt]=a;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)s.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=s;e:switch(ft(s,o,a),o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&An(t)}}return Ve(t),Ro(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&An(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(u(166));if(e=oe.current,Xi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,o=ot,o!==null)switch(o.tag){case 27:case 5:a=o.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Hd(e.nodeValue,n)),e||Rn(t,!0)}else e=Or(e).createTextNode(a),e[ut]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Xi(t),n!==null){if(e===null){if(!a)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ut]=t}else hi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ve(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Xi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[ut]=t}else hi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else o=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,o=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(o=a.alternate.memoizedState.cachePool.pool),s=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(s=a.memoizedState.cachePool.pool),s!==o&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),br(t,t.updateQueue),Ve(t),null);case 4:return Re(),e===null&&as(t.stateNode.containerInfo),Ve(t),null;case 10:return bn(t.type),Ve(t),null;case 19:if(H(Je),a=t.memoizedState,a===null)return Ve(t),null;if(o=(t.flags&128)!==0,s=a.rendering,s===null)if(o)Ja(a,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=lr(e),s!==null){for(t.flags|=128,Ja(a,!1),e=s.updateQueue,t.updateQueue=e,br(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vf(n,e),n=n.sibling;return A(Je,Je.current&1|2),Ce&&gn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&pt()>Sr&&(t.flags|=128,o=!0,Ja(a,!1),t.lanes=4194304)}else{if(!o)if(e=lr(s),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,br(t,e),Ja(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Ce)return Ve(t),null}else 2*pt()-a.renderingStartTime>Sr&&n!==536870912&&(t.flags|=128,o=!0,Ja(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(e=a.last,e!==null?e.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=pt(),e.sibling=null,n=Je.current,A(Je,o?n&1|2:n&1),Ce&&gn(t,a.treeForkCount),e):(Ve(t),null);case 22:case 23:return Ot(t),ao(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&br(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&H(pi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bn($e),Ve(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function qy(e,t){switch(Gu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn($e),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return sn(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(u(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Je),null;case 4:return Re(),null;case 10:return bn(t.type),null;case 22:case 23:return Ot(t),ao(),e!==null&&H(pi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return bn($e),null;case 25:return null;default:return null}}function Xh(e,t){switch(Gu(t),t.tag){case 3:bn($e),Re();break;case 26:case 27:case 5:sn(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:H(Je);break;case 10:bn(t.type);break;case 22:case 23:Ot(t),ao(),e!==null&&H(pi);break;case 24:bn($e)}}function Wa(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var o=a.next;n=o;do{if((n.tag&e)===e){a=void 0;var s=n.create,g=n.inst;a=s(),g.destroy=a}n=n.next}while(n!==o)}}catch(v){Ie(t,t.return,v)}}function Gn(e,t,n){try{var a=t.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var s=o.next;a=s;do{if((a.tag&e)===e){var g=a.inst,v=g.destroy;if(v!==void 0){g.destroy=void 0,o=t;var E=n,z=v;try{z()}catch(L){Ie(o,E,L)}}}a=a.next}while(a!==s)}}catch(L){Ie(t,t.return,L)}}function Qh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Nf(t,n)}catch(a){Ie(e,e.return,a)}}}function Zh(e,t,n){n.props=wi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ie(e,t,a)}}function $a(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(o){Ie(e,t,o)}}function ln(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(o){Ie(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Ie(e,t,o)}else n.current=null}function Kh(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(o){Ie(e,e.return,o)}}function No(e,t,n){try{var a=e.stateNode;c0(a,e.type,n,t),a[wt]=t}catch(o){Ie(e,e.return,o)}}function Jh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jn(e.type)||e.tag===4}function Uo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(a!==4&&(a===27&&Jn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Lo(e,t,n),e=e.sibling;e!==null;)Lo(e,t,n),e=e.sibling}function vr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(vr(e,t,n),e=e.sibling;e!==null;)vr(e,t,n),e=e.sibling}function Wh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ft(t,a,n),t[ut]=e,t[wt]=n}catch(s){Ie(e,e.return,s)}}var Sn=!1,tt=!1,jo=!1,$h=typeof WeakSet=="function"?WeakSet:Set,rt=null;function Gy(e,t){if(e=e.containerInfo,us=jr,e=cf(e),Bu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var o=a.anchorOffset,s=a.focusNode;a=a.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var g=0,v=-1,E=-1,z=0,L=0,Y=e,B=null;t:for(;;){for(var U;Y!==n||o!==0&&Y.nodeType!==3||(v=g+o),Y!==s||a!==0&&Y.nodeType!==3||(E=g+a),Y.nodeType===3&&(g+=Y.nodeValue.length),(U=Y.firstChild)!==null;)B=Y,Y=U;for(;;){if(Y===e)break t;if(B===n&&++z===o&&(v=g),B===s&&++L===a&&(E=g),(U=Y.nextSibling)!==null)break;Y=B,B=Y.parentNode}Y=U}n=v===-1||E===-1?null:{start:v,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(os={focusedElem:e,selectionRange:n},jr=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,o=s.memoizedProps,s=s.memoizedState,a=n.stateNode;try{var ne=wi(n.type,o);e=a.getSnapshotBeforeUpdate(ne,s),a.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Ie(n,n.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)fs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}}function Ph(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:kn(e,n),a&4&&Wa(5,n);break;case 1:if(kn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Ie(n,n.return,g)}else{var o=wi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ie(n,n.return,g)}}a&64&&Qh(n),a&512&&$a(n,n.return);break;case 3:if(kn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Nf(e,t)}catch(g){Ie(n,n.return,g)}}break;case 27:t===null&&a&4&&Wh(n);case 26:case 5:kn(e,n),t===null&&a&4&&Kh(n),a&512&&$a(n,n.return);break;case 12:kn(e,n);break;case 31:kn(e,n),a&4&&nd(e,n);break;case 13:kn(e,n),a&4&&id(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=$y.bind(null,n),b0(e,n))));break;case 22:if(a=n.memoizedState!==null||Sn,!a){t=t!==null&&t.memoizedState!==null||tt,o=Sn;var s=tt;Sn=a,(tt=t)&&!s?Tn(e,n,(n.subtreeFlags&8772)!==0):kn(e,n),Sn=o,tt=s}break;case 30:break;default:kn(e,n)}}function ed(e){var t=e.alternate;t!==null&&(e.alternate=null,ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,At=!1;function En(e,t,n){for(n=n.child;n!==null;)td(e,t,n),n=n.sibling}function td(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(gt,n)}catch{}switch(n.tag){case 26:tt||ln(n,t),En(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tt||ln(n,t);var a=Qe,o=At;Jn(n.type)&&(Qe=n.stateNode,At=!1),En(e,t,n),ul(n.stateNode),Qe=a,At=o;break;case 5:tt||ln(n,t);case 6:if(a=Qe,o=At,Qe=null,En(e,t,n),Qe=a,At=o,Qe!==null)if(At)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(n.stateNode)}catch(s){Ie(n,t,s)}else try{Qe.removeChild(n.stateNode)}catch(s){Ie(n,t,s)}break;case 18:Qe!==null&&(At?(e=Qe,Qd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),da(e)):Qd(Qe,n.stateNode));break;case 4:a=Qe,o=At,Qe=n.stateNode.containerInfo,At=!0,En(e,t,n),Qe=a,At=o;break;case 0:case 11:case 14:case 15:Gn(2,n,t),tt||Gn(4,n,t),En(e,t,n);break;case 1:tt||(ln(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Zh(n,t,a)),En(e,t,n);break;case 21:En(e,t,n);break;case 22:tt=(a=tt)||n.memoizedState!==null,En(e,t,n),tt=a;break;default:En(e,t,n)}}function nd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{da(e)}catch(n){Ie(t,t.return,n)}}}function id(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{da(e)}catch(n){Ie(t,t.return,n)}}function Yy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $h),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $h),t;default:throw Error(u(435,e.tag))}}function wr(e,t){var n=Yy(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var o=Py.bind(null,e,a);a.then(o,o)}})}function St(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var o=n[a],s=e,g=t,v=g;e:for(;v!==null;){switch(v.tag){case 27:if(Jn(v.type)){Qe=v.stateNode,At=!1;break e}break;case 5:Qe=v.stateNode,At=!1;break e;case 3:case 4:Qe=v.stateNode.containerInfo,At=!0;break e}v=v.return}if(Qe===null)throw Error(u(160));td(s,g,o),Qe=null,At=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ad(t,e),t=t.sibling}var Pt=null;function ad(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:St(t,e),Et(e),a&4&&(Gn(3,e,e.return),Wa(3,e),Gn(5,e,e.return));break;case 1:St(t,e),Et(e),a&512&&(tt||n===null||ln(n,n.return)),a&64&&Sn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var o=Pt;if(St(t,e),Et(e),a&512&&(tt||n===null||ln(n,n.return)),a&4){var s=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(a){case"title":s=o.getElementsByTagName("title")[0],(!s||s[ka]||s[ut]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(a),o.head.insertBefore(s,o.querySelector("head > title"))),ft(s,a,n),s[ut]=e,lt(s),a=s;break e;case"link":var g=am("link","href",o).get(a+(n.href||""));if(g){for(var v=0;v<g.length;v++)if(s=g[v],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(v,1);break t}}s=o.createElement(a),ft(s,a,n),o.head.appendChild(s);break;case"meta":if(g=am("meta","content",o).get(a+(n.content||""))){for(v=0;v<g.length;v++)if(s=g[v],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(v,1);break t}}s=o.createElement(a),ft(s,a,n),o.head.appendChild(s);break;default:throw Error(u(468,a))}s[ut]=e,lt(s),a=s}e.stateNode=a}else lm(o,e.type,e.stateNode);else e.stateNode=im(o,a,e.memoizedProps);else s!==a?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,a===null?lm(o,e.type,e.stateNode):im(o,a,e.memoizedProps)):a===null&&e.stateNode!==null&&No(e,e.memoizedProps,n.memoizedProps)}break;case 27:St(t,e),Et(e),a&512&&(tt||n===null||ln(n,n.return)),n!==null&&a&4&&No(e,e.memoizedProps,n.memoizedProps);break;case 5:if(St(t,e),Et(e),a&512&&(tt||n===null||ln(n,n.return)),e.flags&32){o=e.stateNode;try{Ri(o,"")}catch(ne){Ie(e,e.return,ne)}}a&4&&e.stateNode!=null&&(o=e.memoizedProps,No(e,o,n!==null?n.memoizedProps:o)),a&1024&&(jo=!0);break;case 6:if(St(t,e),Et(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(ne){Ie(e,e.return,ne)}}break;case 3:if(Rr=null,o=Pt,Pt=_r(t.containerInfo),St(t,e),Pt=o,Et(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{da(t.containerInfo)}catch(ne){Ie(e,e.return,ne)}jo&&(jo=!1,ld(e));break;case 4:a=Pt,Pt=_r(e.stateNode.containerInfo),St(t,e),Et(e),Pt=a;break;case 12:St(t,e),Et(e);break;case 31:St(t,e),Et(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,wr(e,a)));break;case 13:St(t,e),Et(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ar=pt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,wr(e,a)));break;case 22:o=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,z=Sn,L=tt;if(Sn=z||o,tt=L||E,St(t,e),tt=L,Sn=z,Et(e),a&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||E||Sn||tt||Di(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(s=E.stateNode,o)g=s.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{v=E.stateNode;var Y=E.memoizedProps.style,B=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;v.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ne){Ie(E,E.return,ne)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=o?"":E.memoizedProps}catch(ne){Ie(E,E.return,ne)}}}else if(t.tag===18){if(n===null){E=t;try{var U=E.stateNode;o?Zd(U,!0):Zd(E.stateNode,!1)}catch(ne){Ie(E,E.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,wr(e,n))));break;case 19:St(t,e),Et(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,wr(e,a)));break;case 30:break;case 21:break;default:St(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Jh(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var o=n.stateNode,s=Uo(e);vr(e,s,o);break;case 5:var g=n.stateNode;n.flags&32&&(Ri(g,""),n.flags&=-33);var v=Uo(e);vr(e,v,g);break;case 3:case 4:var E=n.stateNode.containerInfo,z=Uo(e);Lo(e,z,E);break;default:throw Error(u(161))}}catch(L){Ie(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ld(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ld(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function kn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ph(e,t.alternate,t),t=t.sibling}function Di(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gn(4,t,t.return),Di(t);break;case 1:ln(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Zh(t,t.return,n),Di(t);break;case 27:ul(t.stateNode);case 26:case 5:ln(t,t.return),Di(t);break;case 22:t.memoizedState===null&&Di(t);break;case 30:Di(t);break;default:Di(t)}e=e.sibling}}function Tn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,o=e,s=t,g=s.flags;switch(s.tag){case 0:case 11:case 15:Tn(o,s,n),Wa(4,s);break;case 1:if(Tn(o,s,n),a=s,o=a.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(z){Ie(a,a.return,z)}if(a=s,o=a.updateQueue,o!==null){var v=a.stateNode;try{var E=o.shared.hiddenCallbacks;if(E!==null)for(o.shared.hiddenCallbacks=null,o=0;o<E.length;o++)Rf(E[o],v)}catch(z){Ie(a,a.return,z)}}n&&g&64&&Qh(s),$a(s,s.return);break;case 27:Wh(s);case 26:case 5:Tn(o,s,n),n&&a===null&&g&4&&Kh(s),$a(s,s.return);break;case 12:Tn(o,s,n);break;case 31:Tn(o,s,n),n&&g&4&&nd(o,s);break;case 13:Tn(o,s,n),n&&g&4&&id(o,s);break;case 22:s.memoizedState===null&&Tn(o,s,n),$a(s,s.return);break;case 30:break;default:Tn(o,s,n)}t=t.sibling}}function Ho(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ua(n))}function qo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ua(e))}function en(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rd(e,t,n,a),t=t.sibling}function rd(e,t,n,a){var o=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,n,a),o&2048&&Wa(9,t);break;case 1:en(e,t,n,a);break;case 3:en(e,t,n,a),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ua(e)));break;case 12:if(o&2048){en(e,t,n,a),e=t.stateNode;try{var s=t.memoizedProps,g=s.id,v=s.onPostCommit;typeof v=="function"&&v(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Ie(t,t.return,E)}}else en(e,t,n,a);break;case 31:en(e,t,n,a);break;case 13:en(e,t,n,a);break;case 23:break;case 22:s=t.stateNode,g=t.alternate,t.memoizedState!==null?s._visibility&2?en(e,t,n,a):Pa(e,t):s._visibility&2?en(e,t,n,a):(s._visibility|=2,na(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Ho(g,t);break;case 24:en(e,t,n,a),o&2048&&qo(t.alternate,t);break;default:en(e,t,n,a)}}function na(e,t,n,a,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,g=t,v=n,E=a,z=g.flags;switch(g.tag){case 0:case 11:case 15:na(s,g,v,E,o),Wa(8,g);break;case 23:break;case 22:var L=g.stateNode;g.memoizedState!==null?L._visibility&2?na(s,g,v,E,o):Pa(s,g):(L._visibility|=2,na(s,g,v,E,o)),o&&z&2048&&Ho(g.alternate,g);break;case 24:na(s,g,v,E,o),o&&z&2048&&qo(g.alternate,g);break;default:na(s,g,v,E,o)}t=t.sibling}}function Pa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,o=a.flags;switch(a.tag){case 22:Pa(n,a),o&2048&&Ho(a.alternate,a);break;case 24:Pa(n,a),o&2048&&qo(a.alternate,a);break;default:Pa(n,a)}t=t.sibling}}var el=8192;function ia(e,t,n){if(e.subtreeFlags&el)for(e=e.child;e!==null;)ud(e,t,n),e=e.sibling}function ud(e,t,n){switch(e.tag){case 26:ia(e,t,n),e.flags&el&&e.memoizedState!==null&&z0(n,Pt,e.memoizedState,e.memoizedProps);break;case 5:ia(e,t,n);break;case 3:case 4:var a=Pt;Pt=_r(e.stateNode.containerInfo),ia(e,t,n),Pt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=el,el=16777216,ia(e,t,n),el=a):ia(e,t,n));break;default:ia(e,t,n)}}function od(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];rt=a,cd(a,e)}od(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sd(e),e=e.sibling}function sd(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&Gn(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dr(e)):tl(e);break;default:tl(e)}}function Dr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];rt=a,cd(a,e)}od(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gn(8,t,t.return),Dr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Dr(t));break;default:Dr(t)}e=e.sibling}}function cd(e,t){for(;rt!==null;){var n=rt;switch(n.tag){case 0:case 11:case 15:Gn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ua(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,rt=a;else e:for(n=e;rt!==null;){a=rt;var o=a.sibling,s=a.return;if(ed(a),a===n){rt=null;break e}if(o!==null){o.return=s,rt=o;break e}rt=s}}}var Vy={getCacheForType:function(e){var t=st($e),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return st($e).controller.signal}},Xy=typeof WeakMap=="function"?WeakMap:Map,Be=0,He=null,Ae=null,Te=0,_e=0,_t=null,Yn=!1,aa=!1,Go=!1,xn=0,Ke=0,Vn=0,Ai=0,Yo=0,It=0,la=0,nl=null,kt=null,Vo=!1,Ar=0,fd=0,Sr=1/0,Er=null,Xn=null,at=0,Qn=null,ra=null,Cn=0,Xo=0,Qo=null,hd=null,il=0,Zo=null;function Rt(){return(Be&2)!==0&&Te!==0?Te&-Te:O.T!==null?es():xc()}function dd(){if(It===0)if((Te&536870912)===0||Ce){var e=Bl;Bl<<=1,(Bl&3932160)===0&&(Bl=262144),It=e}else It=536870912;return e=Bt.current,e!==null&&(e.flags|=32),It}function Tt(e,t,n){(e===He&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(ua(e,0),Zn(e,Te,It,!1)),Ea(e,n),((Be&2)===0||e!==He)&&(e===He&&((Be&2)===0&&(Ai|=n),Ke===4&&Zn(e,Te,It,!1)),rn(e))}function md(e,t,n){if((Be&6)!==0)throw Error(u(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Sa(e,t),o=a?Ky(e,t):Jo(e,t,!0),s=a;do{if(o===0){aa&&!a&&Zn(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Qy(n)){o=Jo(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var v=e;o=nl;var E=v.current.memoizedState.isDehydrated;if(E&&(ua(v,g).flags|=256),g=Jo(v,g,!1),g!==2){if(Go&&!E){v.errorRecoveryDisabledLanes|=s,Ai|=s,o=4;break e}s=kt,kt=o,s!==null&&(kt===null?kt=s:kt.push.apply(kt,s))}o=g}if(s=!1,o!==2)continue}}if(o===1){ua(e,0),Zn(e,t,0,!0);break}e:{switch(a=e,s=o,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Zn(a,t,It,!Yn);break e;case 2:kt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(o=Ar+300-pt(),10<o)){if(Zn(a,t,It,!Yn),_l(a,0,!0)!==0)break e;Cn=t,a.timeoutHandle=Vd(pd.bind(null,a,n,kt,Er,Vo,t,It,Ai,la,Yn,s,"Throttled",-0,0),o);break e}pd(a,n,kt,Er,Vo,t,It,Ai,la,Yn,s,null,-0,0)}}break}while(!0);rn(e)}function pd(e,t,n,a,o,s,g,v,E,z,L,Y,B,U){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},ud(t,s,Y);var ne=(s&62914560)===s?Ar-pt():(s&4194048)===s?fd-pt():0;if(ne=M0(Y,ne),ne!==null){Cn=s,e.cancelPendingCommit=ne(Sd.bind(null,e,t,s,n,a,o,g,v,E,L,Y,null,B,U)),Zn(e,s,g,!z);return}}Sd(e,t,s,n,a,o,g,v,E)}function Qy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var o=n[a],s=o.getSnapshot;o=o.value;try{if(!zt(s(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,n,a){t&=~Yo,t&=~Ai,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var o=t;0<o;){var s=31-je(o),g=1<<s;a[s]=-1,o&=~g}n!==0&&Ec(e,n,t)}function kr(){return(Be&6)===0?(al(0),!1):!0}function Ko(){if(Ae!==null){if(_e===0)var e=Ae.return;else e=Ae,yn=di=null,co(e),Wi=null,ja=0,e=Ae;for(;e!==null;)Xh(e.alternate,e),e=e.return;Ae=null}}function ua(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,d0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Cn=0,Ko(),He=e,Ae=n=pn(e.current,null),Te=t,_e=0,_t=null,Yn=!1,aa=Sa(e,t),Go=!1,la=It=Yo=Ai=Vn=Ke=0,kt=nl=null,Vo=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var o=31-je(a),s=1<<o;t|=e[o],a&=~s}return xn=t,Xl(),n}function gd(e,t){ge=null,O.H=Za,t===Ji||t===er?(t=Bf(),_e=3):t===$u?(t=Bf(),_e=4):_e=t===xo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,Ae===null&&(Ke=1,mr(e,Gt(t,e.current)))}function yd(){var e=Bt.current;return e===null?!0:(Te&4194048)===Te?Qt===null:(Te&62914560)===Te||(Te&536870912)!==0?e===Qt:!1}function bd(){var e=O.H;return O.H=Za,e===null?Za:e}function vd(){var e=O.A;return O.A=Vy,e}function Tr(){Ke=4,Yn||(Te&4194048)!==Te&&Bt.current!==null||(aa=!0),(Vn&134217727)===0&&(Ai&134217727)===0||He===null||Zn(He,Te,It,!1)}function Jo(e,t,n){var a=Be;Be|=2;var o=bd(),s=vd();(He!==e||Te!==t)&&(Er=null,ua(e,t)),t=!1;var g=Ke;e:do try{if(_e!==0&&Ae!==null){var v=Ae,E=_t;switch(_e){case 8:Ko(),g=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var z=_e;if(_e=0,_t=null,oa(e,v,E,z),n&&aa){g=0;break e}break;default:z=_e,_e=0,_t=null,oa(e,v,E,z)}}Zy(),g=Ke;break}catch(L){gd(e,L)}while(!0);return t&&e.shellSuspendCounter++,yn=di=null,Be=a,O.H=o,O.A=s,Ae===null&&(He=null,Te=0,Xl()),g}function Zy(){for(;Ae!==null;)wd(Ae)}function Ky(e,t){var n=Be;Be|=2;var a=bd(),o=vd();He!==e||Te!==t?(Er=null,Sr=pt()+500,ua(e,t)):aa=Sa(e,t);e:do try{if(_e!==0&&Ae!==null){t=Ae;var s=_t;t:switch(_e){case 1:_e=0,_t=null,oa(e,t,s,1);break;case 2:case 9:if(zf(s)){_e=0,_t=null,Dd(t);break}t=function(){_e!==2&&_e!==9||He!==e||(_e=7),rn(e)},s.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:zf(s)?(_e=0,_t=null,Dd(t)):(_e=0,_t=null,oa(e,t,s,7));break;case 5:var g=null;switch(Ae.tag){case 26:g=Ae.memoizedState;case 5:case 27:var v=Ae;if(g?rm(g):v.stateNode.complete){_e=0,_t=null;var E=v.sibling;if(E!==null)Ae=E;else{var z=v.return;z!==null?(Ae=z,xr(z)):Ae=null}break t}}_e=0,_t=null,oa(e,t,s,5);break;case 6:_e=0,_t=null,oa(e,t,s,6);break;case 8:Ko(),Ke=6;break e;default:throw Error(u(462))}}Jy();break}catch(L){gd(e,L)}while(!0);return yn=di=null,O.H=a,O.A=o,Be=n,Ae!==null?0:(He=null,Te=0,Xl(),Ke)}function Jy(){for(;Ae!==null&&!ou();)wd(Ae)}function wd(e){var t=Yh(e.alternate,e,xn);e.memoizedProps=e.pendingProps,t===null?xr(e):Ae=t}function Dd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Uh(n,t,t.pendingProps,t.type,void 0,Te);break;case 11:t=Uh(n,t,t.pendingProps,t.type.render,t.ref,Te);break;case 5:co(t);default:Xh(n,t),t=Ae=vf(t,xn),t=Yh(n,t,xn)}e.memoizedProps=e.pendingProps,t===null?xr(e):Ae=t}function oa(e,t,n,a){yn=di=null,co(t),Wi=null,ja=0;var o=t.return;try{if(Uy(e,o,t,n,Te)){Ke=1,mr(e,Gt(n,e.current)),Ae=null;return}}catch(s){if(o!==null)throw Ae=o,s;Ke=1,mr(e,Gt(n,e.current)),Ae=null;return}t.flags&32768?(Ce||a===1?e=!0:aa||(Te&536870912)!==0?e=!1:(Yn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Bt.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ad(t,e)):xr(t)}function xr(e){var t=e;do{if((t.flags&32768)!==0){Ad(t,Yn);return}e=t.return;var n=Hy(t.alternate,t,xn);if(n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ke===0&&(Ke=5)}function Ad(e,t){do{var n=qy(e.alternate,e);if(n!==null){n.flags&=32767,Ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=n}while(e!==null);Ke=6,Ae=null}function Sd(e,t,n,a,o,s,g,v,E){e.cancelPendingCommit=null;do Cr();while(at!==0);if((Be&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Nu,Fg(e,n,s,g,v,E),e===He&&(Ae=He=null,Te=0),ra=t,Qn=e,Cn=n,Xo=s,Qo=o,hd=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,e0(me,function(){return Cd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,o=X.p,X.p=2,g=Be,Be|=4;try{Gy(e,t,n)}finally{Be=g,X.p=o,O.T=a}}at=1,Ed(),kd(),Td()}}function Ed(){if(at===1){at=0;var e=Qn,t=ra,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var a=X.p;X.p=2;var o=Be;Be|=4;try{ad(t,e);var s=os,g=cf(e.containerInfo),v=s.focusedElem,E=s.selectionRange;if(g!==v&&v&&v.ownerDocument&&sf(v.ownerDocument.documentElement,v)){if(E!==null&&Bu(v)){var z=E.start,L=E.end;if(L===void 0&&(L=z),"selectionStart"in v)v.selectionStart=z,v.selectionEnd=Math.min(L,v.value.length);else{var Y=v.ownerDocument||document,B=Y&&Y.defaultView||window;if(B.getSelection){var U=B.getSelection(),ne=v.textContent.length,fe=Math.min(E.start,ne),Le=E.end===void 0?fe:Math.min(E.end,ne);!U.extend&&fe>Le&&(g=Le,Le=fe,fe=g);var C=of(v,fe),T=of(v,Le);if(C&&T&&(U.rangeCount!==1||U.anchorNode!==C.node||U.anchorOffset!==C.offset||U.focusNode!==T.node||U.focusOffset!==T.offset)){var F=Y.createRange();F.setStart(C.node,C.offset),U.removeAllRanges(),fe>Le?(U.addRange(F),U.extend(T.node,T.offset)):(F.setEnd(T.node,T.offset),U.addRange(F))}}}}for(Y=[],U=v;U=U.parentNode;)U.nodeType===1&&Y.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<Y.length;v++){var G=Y[v];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}jr=!!us,os=us=null}finally{Be=o,X.p=a,O.T=n}}e.current=t,at=2}}function kd(){if(at===2){at=0;var e=Qn,t=ra,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var a=X.p;X.p=2;var o=Be;Be|=4;try{Ph(e,t.alternate,t)}finally{Be=o,X.p=a,O.T=n}}at=3}}function Td(){if(at===4||at===3){at=0,su();var e=Qn,t=ra,n=Cn,a=hd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?at=5:(at=0,ra=Qn=null,xd(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Xn=null),du(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(gt,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=O.T,o=X.p,X.p=2,O.T=null;try{for(var s=e.onRecoverableError,g=0;g<a.length;g++){var v=a[g];s(v.value,{componentStack:v.stack})}}finally{O.T=t,X.p=o}}(Cn&3)!==0&&Cr(),rn(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===Zo?il++:(il=0,Zo=e):il=0,al(0)}}function xd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ua(t)))}function Cr(){return Ed(),kd(),Td(),Cd()}function Cd(){if(at!==5)return!1;var e=Qn,t=Xo;Xo=0;var n=du(Cn),a=O.T,o=X.p;try{X.p=32>n?32:n,O.T=null,n=Qo,Qo=null;var s=Qn,g=Cn;if(at=0,ra=Qn=null,Cn=0,(Be&6)!==0)throw Error(u(331));var v=Be;if(Be|=4,sd(s.current),rd(s,s.current,g,n),Be=v,al(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(gt,s)}catch{}return!0}finally{X.p=o,O.T=a,xd(e,t)}}function Fd(e,t,n){t=Gt(n,t),t=To(e.stateNode,t,2),e=jn(e,t,2),e!==null&&(Ea(e,2),rn(e))}function Ie(e,t,n){if(e.tag===3)Fd(e,e,n);else for(;t!==null;){if(t.tag===3){Fd(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Xn===null||!Xn.has(a))){e=Gt(n,e),n=zh(2),a=jn(t,n,2),a!==null&&(Mh(n,a,t,e),Ea(a,2),rn(a));break}}t=t.return}}function Wo(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Xy;var o=new Set;a.set(t,o)}else o=a.get(t),o===void 0&&(o=new Set,a.set(t,o));o.has(n)||(Go=!0,o.add(n),e=Wy.bind(null,e,t,n),t.then(e,e))}function Wy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,He===e&&(Te&n)===n&&(Ke===4||Ke===3&&(Te&62914560)===Te&&300>pt()-Ar?(Be&2)===0&&ua(e,0):Yo|=n,la===Te&&(la=0)),rn(e)}function zd(e,t){t===0&&(t=Sc()),e=ci(e,t),e!==null&&(Ea(e,t),rn(e))}function $y(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zd(e,n)}function Py(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(t),zd(e,n)}function e0(e,t){return Fi(e,t)}var Fr=null,sa=null,$o=!1,zr=!1,Po=!1,Kn=0;function rn(e){e!==sa&&e.next===null&&(sa===null?Fr=sa=e:sa=sa.next=e),zr=!0,$o||($o=!0,n0())}function al(e,t){if(!Po&&zr){Po=!0;do for(var n=!1,a=Fr;a!==null;){if(e!==0){var o=a.pendingLanes;if(o===0)var s=0;else{var g=a.suspendedLanes,v=a.pingedLanes;s=(1<<31-je(42|e)+1)-1,s&=o&~(g&~v),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,_d(a,s))}else s=Te,s=_l(a,a===He?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(s&3)===0||Sa(a,s)||(n=!0,_d(a,s));a=a.next}while(n);Po=!1}}function t0(){Md()}function Md(){zr=$o=!1;var e=0;Kn!==0&&h0()&&(e=Kn);for(var t=pt(),n=null,a=Fr;a!==null;){var o=a.next,s=Bd(a,t);s===0?(a.next=null,n===null?Fr=o:n.next=o,o===null&&(sa=n)):(n=a,(e!==0||(s&3)!==0)&&(zr=!0)),a=o}at!==0&&at!==5||al(e),Kn!==0&&(Kn=0)}function Bd(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var g=31-je(s),v=1<<g,E=o[g];E===-1?((v&n)===0||(v&a)!==0)&&(o[g]=Cg(v,t)):E<=t&&(e.expiredLanes|=v),s&=~v}if(t=He,n=Te,n=_l(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Aa(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Sa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Aa(a),du(n)){case 2:case 8:n=K;break;case 32:n=me;break;case 268435456:n=Oe;break;default:n=me}return a=Od.bind(null,e),n=Fi(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Aa(a),e.callbackPriority=2,e.callbackNode=null,2}function Od(e,t){if(at!==0&&at!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var a=Te;return a=_l(e,e===He?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(md(e,a,t),Bd(e,pt()),e.callbackNode!=null&&e.callbackNode===n?Od.bind(null,e):null)}function _d(e,t){if(Cr())return null;md(e,t,!0)}function n0(){m0(function(){(Be&6)!==0?Fi(q,t0):Md()})}function es(){if(Kn===0){var e=Zi;e===0&&(e=Ml,Ml<<=1,(Ml&261888)===0&&(Ml=256)),Kn=e}return Kn}function Id(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ul(""+e)}function Rd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function i0(e,t,n,a,o){if(t==="submit"&&n&&n.stateNode===o){var s=Id((o[wt]||null).action),g=a.submitter;g&&(t=(t=g[wt]||null)?Id(t.formAction):g.getAttribute("formAction"),t!==null&&(s=t,g=null));var v=new ql("action","action",null,a,o);e.push({event:v,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Kn!==0){var E=g?Rd(o,g):new FormData(o);wo(n,{pending:!0,data:E,method:o.method,action:s},null,E)}}else typeof s=="function"&&(v.preventDefault(),E=g?Rd(o,g):new FormData(o),wo(n,{pending:!0,data:E,method:o.method,action:s},s,E))},currentTarget:o}]})}}for(var ts=0;ts<Ru.length;ts++){var ns=Ru[ts],a0=ns.toLowerCase(),l0=ns[0].toUpperCase()+ns.slice(1);$t(a0,"on"+l0)}$t(df,"onAnimationEnd"),$t(mf,"onAnimationIteration"),$t(pf,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(Dy,"onTransitionRun"),$t(Ay,"onTransitionStart"),$t(Sy,"onTransitionCancel"),$t(gf,"onTransitionEnd"),_i("onMouseEnter",["mouseout","mouseover"]),_i("onMouseLeave",["mouseout","mouseover"]),_i("onPointerEnter",["pointerout","pointerover"]),_i("onPointerLeave",["pointerout","pointerover"]),ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ri("onBeforeInput",["compositionend","keypress","textInput","paste"]),ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function Nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],o=a.event;a=a.listeners;e:{var s=void 0;if(t)for(var g=a.length-1;0<=g;g--){var v=a[g],E=v.instance,z=v.currentTarget;if(v=v.listener,E!==s&&o.isPropagationStopped())break e;s=v,o.currentTarget=z;try{s(o)}catch(L){Vl(L)}o.currentTarget=null,s=E}else for(g=0;g<a.length;g++){if(v=a[g],E=v.instance,z=v.currentTarget,v=v.listener,E!==s&&o.isPropagationStopped())break e;s=v,o.currentTarget=z;try{s(o)}catch(L){Vl(L)}o.currentTarget=null,s=E}}}}function Se(e,t){var n=t[mu];n===void 0&&(n=t[mu]=new Set);var a=e+"__bubble";n.has(a)||(Ud(t,e,2,!1),n.add(a))}function is(e,t,n){var a=0;t&&(a|=4),Ud(n,e,a,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[Mr]){e[Mr]=!0,zc.forEach(function(n){n!=="selectionchange"&&(r0.has(n)||is(n,!1,e),is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,is("selectionchange",!1,t))}}function Ud(e,t,n,a){switch(dm(t)){case 2:var o=_0;break;case 8:o=I0;break;default:o=vs}n=o.bind(null,t,n,e),o=void 0,!Su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),a?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ls(e,t,n,a,o){var s=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var v=a.stateNode.containerInfo;if(v===o)break;if(g===4)for(g=a.return;g!==null;){var E=g.tag;if((E===3||E===4)&&g.stateNode.containerInfo===o)return;g=g.return}for(;v!==null;){if(g=Mi(v),g===null)return;if(E=g.tag,E===5||E===6||E===26||E===27){a=s=g;continue e}v=v.parentNode}}a=a.return}qc(function(){var z=s,L=Du(n),Y=[];e:{var B=yf.get(e);if(B!==void 0){var U=ql,ne=e;switch(e){case"keypress":if(jl(n)===0)break e;case"keydown":case"keyup":U=Pg;break;case"focusin":ne="focus",U=xu;break;case"focusout":ne="blur",U=xu;break;case"beforeblur":case"afterblur":U=xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=ny;break;case df:case mf:case pf:U=Yg;break;case gf:U=ay;break;case"scroll":case"scrollend":U=Lg;break;case"wheel":U=ry;break;case"copy":case"cut":case"paste":U=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Qc;break;case"toggle":case"beforetoggle":U=oy}var fe=(t&4)!==0,Le=!fe&&(e==="scroll"||e==="scrollend"),C=fe?B!==null?B+"Capture":null:B;fe=[];for(var T=z,F;T!==null;){var G=T;if(F=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||F===null||C===null||(G=xa(T,C),G!=null&&fe.push(rl(T,G,F))),Le)break;T=T.return}0<fe.length&&(B=new U(B,ne,null,n,L),Y.push({event:B,listeners:fe}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",B&&n!==wu&&(ne=n.relatedTarget||n.fromElement)&&(Mi(ne)||ne[zi]))break e;if((U||B)&&(B=L.window===L?L:(B=L.ownerDocument)?B.defaultView||B.parentWindow:window,U?(ne=n.relatedTarget||n.toElement,U=z,ne=ne?Mi(ne):null,ne!==null&&(Le=h(ne),fe=ne.tag,ne!==Le||fe!==5&&fe!==27&&fe!==6)&&(ne=null)):(U=null,ne=z),U!==ne)){if(fe=Vc,G="onMouseLeave",C="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Qc,G="onPointerLeave",C="onPointerEnter",T="pointer"),Le=U==null?B:Ta(U),F=ne==null?B:Ta(ne),B=new fe(G,T+"leave",U,n,L),B.target=Le,B.relatedTarget=F,G=null,Mi(L)===z&&(fe=new fe(C,T+"enter",ne,n,L),fe.target=F,fe.relatedTarget=Le,G=fe),Le=G,U&&ne)t:{for(fe=u0,C=U,T=ne,F=0,G=C;G;G=fe(G))F++;G=0;for(var se=T;se;se=fe(se))G++;for(;0<F-G;)C=fe(C),F--;for(;0<G-F;)T=fe(T),G--;for(;F--;){if(C===T||T!==null&&C===T.alternate){fe=C;break t}C=fe(C),T=fe(T)}fe=null}else fe=null;U!==null&&Ld(Y,B,U,fe,!1),ne!==null&&Le!==null&&Ld(Y,Le,ne,fe,!0)}}e:{if(B=z?Ta(z):window,U=B.nodeName&&B.nodeName.toLowerCase(),U==="select"||U==="input"&&B.type==="file")var ze=tf;else if(Pc(B))if(nf)ze=by;else{ze=gy;var ae=py}else U=B.nodeName,!U||U.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&vu(z.elementType)&&(ze=tf):ze=yy;if(ze&&(ze=ze(e,z))){ef(Y,ze,n,L);break e}ae&&ae(e,B,z),e==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&bu(B,"number",B.value)}switch(ae=z?Ta(z):window,e){case"focusin":(Pc(ae)||ae.contentEditable==="true")&&(ji=ae,Ou=z,Ia=null);break;case"focusout":Ia=Ou=ji=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,ff(Y,n,L);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":ff(Y,n,L)}var ye;if(Fu)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Li?Wc(e,n)&&(xe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(xe="onCompositionStart");xe&&(Zc&&n.locale!=="ko"&&(Li||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Li&&(ye=Gc()):(On=L,Eu="value"in On?On.value:On.textContent,Li=!0)),ae=Br(z,xe),0<ae.length&&(xe=new Xc(xe,e,null,n,L),Y.push({event:xe,listeners:ae}),ye?xe.data=ye:(ye=$c(n),ye!==null&&(xe.data=ye)))),(ye=cy?fy(e,n):hy(e,n))&&(xe=Br(z,"onBeforeInput"),0<xe.length&&(ae=new Xc("onBeforeInput","beforeinput",null,n,L),Y.push({event:ae,listeners:xe}),ae.data=ye)),i0(Y,e,z,n,L)}Nd(Y,t)})}function rl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",a=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=xa(e,n),o!=null&&a.unshift(rl(e,o,s)),o=xa(e,t),o!=null&&a.push(rl(e,o,s))),e.tag===3)return a;e=e.return}return[]}function u0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ld(e,t,n,a,o){for(var s=t._reactName,g=[];n!==null&&n!==a;){var v=n,E=v.alternate,z=v.stateNode;if(v=v.tag,E!==null&&E===a)break;v!==5&&v!==26&&v!==27||z===null||(E=z,o?(z=xa(n,s),z!=null&&g.unshift(rl(n,z,E))):o||(z=xa(n,s),z!=null&&g.push(rl(n,z,E)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var o0=/\r\n?/g,s0=/\u0000|\uFFFD/g;function jd(e){return(typeof e=="string"?e:""+e).replace(o0,`
`).replace(s0,"")}function Hd(e,t){return t=jd(t),jd(e)===t}function Ue(e,t,n,a,o,s){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Ri(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Ri(e,""+a);break;case"className":Rl(e,"class",a);break;case"tabIndex":Rl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Rl(e,n,a);break;case"style":jc(e,a,s);break;case"data":if(t!=="object"){Rl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ul(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ue(e,t,"name",o.name,o,null),Ue(e,t,"formEncType",o.formEncType,o,null),Ue(e,t,"formMethod",o.formMethod,o,null),Ue(e,t,"formTarget",o.formTarget,o,null)):(Ue(e,t,"encType",o.encType,o,null),Ue(e,t,"method",o.method,o,null),Ue(e,t,"target",o.target,o,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Ul(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=dn);break;case"onScroll":a!=null&&Se("scroll",e);break;case"onScrollEnd":a!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Ul(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Il(e,"popover",a);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Il(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ng.get(n)||n,Il(e,n,a))}}function rs(e,t,n,a,o,s){switch(n){case"style":jc(e,a,s);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Ri(e,a):(typeof a=="number"||typeof a=="bigint")&&Ri(e,""+a);break;case"onScroll":a!=null&&Se("scroll",e);break;case"onScrollEnd":a!=null&&Se("scrollend",e);break;case"onClick":a!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),s=e[wt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,o),typeof a=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,o);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):Il(e,n,a)}}}function ft(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var a=!1,o=!1,s;for(s in n)if(n.hasOwnProperty(s)){var g=n[s];if(g!=null)switch(s){case"src":a=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ue(e,t,s,g,n,null)}}o&&Ue(e,t,"srcSet",n.srcSet,n,null),a&&Ue(e,t,"src",n.src,n,null);return;case"input":Se("invalid",e);var v=s=g=o=null,E=null,z=null;for(a in n)if(n.hasOwnProperty(a)){var L=n[a];if(L!=null)switch(a){case"name":o=L;break;case"type":g=L;break;case"checked":E=L;break;case"defaultChecked":z=L;break;case"value":s=L;break;case"defaultValue":v=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(u(137,t));break;default:Ue(e,t,a,L,n,null)}}Rc(e,s,v,E,z,g,o,!1);return;case"select":Se("invalid",e),a=g=s=null;for(o in n)if(n.hasOwnProperty(o)&&(v=n[o],v!=null))switch(o){case"value":s=v;break;case"defaultValue":g=v;break;case"multiple":a=v;default:Ue(e,t,o,v,n,null)}t=s,n=g,e.multiple=!!a,t!=null?Ii(e,!!a,t,!1):n!=null&&Ii(e,!!a,n,!0);return;case"textarea":Se("invalid",e),s=o=a=null;for(g in n)if(n.hasOwnProperty(g)&&(v=n[g],v!=null))switch(g){case"value":a=v;break;case"defaultValue":o=v;break;case"children":s=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(91));break;default:Ue(e,t,g,v,n,null)}Uc(e,a,o,s);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(a=n[E],a!=null))switch(E){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ue(e,t,E,a,n,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(a=0;a<ll.length;a++)Se(ll[a],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(a=n[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ue(e,t,z,a,n,null)}return;default:if(vu(t)){for(L in n)n.hasOwnProperty(L)&&(a=n[L],a!==void 0&&rs(e,t,L,a,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(a=n[v],a!=null&&Ue(e,t,v,a,n,null))}function c0(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,g=null,v=null,E=null,z=null,L=null;for(U in n){var Y=n[U];if(n.hasOwnProperty(U)&&Y!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":E=Y;default:a.hasOwnProperty(U)||Ue(e,t,U,null,a,Y)}}for(var B in a){var U=a[B];if(Y=n[B],a.hasOwnProperty(B)&&(U!=null||Y!=null))switch(B){case"type":s=U;break;case"name":o=U;break;case"checked":z=U;break;case"defaultChecked":L=U;break;case"value":g=U;break;case"defaultValue":v=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:U!==Y&&Ue(e,t,B,U,a,Y)}}yu(e,g,v,E,z,L,s,o);return;case"select":U=g=v=B=null;for(s in n)if(E=n[s],n.hasOwnProperty(s)&&E!=null)switch(s){case"value":break;case"multiple":U=E;default:a.hasOwnProperty(s)||Ue(e,t,s,null,a,E)}for(o in a)if(s=a[o],E=n[o],a.hasOwnProperty(o)&&(s!=null||E!=null))switch(o){case"value":B=s;break;case"defaultValue":v=s;break;case"multiple":g=s;default:s!==E&&Ue(e,t,o,s,a,E)}t=v,n=g,a=U,B!=null?Ii(e,!!n,B,!1):!!a!=!!n&&(t!=null?Ii(e,!!n,t,!0):Ii(e,!!n,n?[]:"",!1));return;case"textarea":U=B=null;for(v in n)if(o=n[v],n.hasOwnProperty(v)&&o!=null&&!a.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ue(e,t,v,null,a,o)}for(g in a)if(o=a[g],s=n[g],a.hasOwnProperty(g)&&(o!=null||s!=null))switch(g){case"value":B=o;break;case"defaultValue":U=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==s&&Ue(e,t,g,o,a,s)}Nc(e,B,U);return;case"option":for(var ne in n)if(B=n[ne],n.hasOwnProperty(ne)&&B!=null&&!a.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Ue(e,t,ne,null,a,B)}for(E in a)if(B=a[E],U=n[E],a.hasOwnProperty(E)&&B!==U&&(B!=null||U!=null))switch(E){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ue(e,t,E,B,a,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)B=n[fe],n.hasOwnProperty(fe)&&B!=null&&!a.hasOwnProperty(fe)&&Ue(e,t,fe,null,a,B);for(z in a)if(B=a[z],U=n[z],a.hasOwnProperty(z)&&B!==U&&(B!=null||U!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(u(137,t));break;default:Ue(e,t,z,B,a,U)}return;default:if(vu(t)){for(var Le in n)B=n[Le],n.hasOwnProperty(Le)&&B!==void 0&&!a.hasOwnProperty(Le)&&rs(e,t,Le,void 0,a,B);for(L in a)B=a[L],U=n[L],!a.hasOwnProperty(L)||B===U||B===void 0&&U===void 0||rs(e,t,L,B,a,U);return}}for(var C in n)B=n[C],n.hasOwnProperty(C)&&B!=null&&!a.hasOwnProperty(C)&&Ue(e,t,C,null,a,B);for(Y in a)B=a[Y],U=n[Y],!a.hasOwnProperty(Y)||B===U||B==null&&U==null||Ue(e,t,Y,B,a,U)}function qd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function f0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var o=n[a],s=o.transferSize,g=o.initiatorType,v=o.duration;if(s&&v&&qd(g)){for(g=0,v=o.responseEnd,a+=1;a<n.length;a++){var E=n[a],z=E.startTime;if(z>v)break;var L=E.transferSize,Y=E.initiatorType;L&&qd(Y)&&(E=E.responseEnd,g+=L*(E<v?1:(v-z)/(E-z)))}if(--a,t+=8*(s+g)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var us=null,os=null;function Or(e){return e.nodeType===9?e:e.ownerDocument}function Gd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=null;function h0(){var e=window.event;return e&&e.type==="popstate"?e===cs?!1:(cs=e,!0):(cs=null,!1)}var Vd=typeof setTimeout=="function"?setTimeout:void 0,d0=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(e){return Xd.resolve(null).then(e).catch(p0)}:Vd;function p0(e){setTimeout(function(){throw e})}function Jn(e){return e==="head"}function Qd(e,t){var n=t,a=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(o),da(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")ul(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ul(n);for(var s=n.firstChild;s;){var g=s.nextSibling,v=s.nodeName;s[ka]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=g}}else n==="body"&&ul(e.ownerDocument.body);n=o}while(n);da(t)}function Zd(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function fs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fs(n),pu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function g0(e,t,n,a){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ka])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function y0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zt(e.nextSibling),e===null))return null;return e}function Kd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function hs(e){return e.data==="$?"||e.data==="$~"}function ds(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function b0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ms=null;function Jd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function $d(e,t,n){switch(t=Or(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ul(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pu(e)}var Kt=new Map,Pd=new Set;function _r(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fn=X.d;X.d={f:v0,r:w0,D:D0,C:A0,L:S0,m:E0,X:T0,S:k0,M:x0};function v0(){var e=Fn.f(),t=kr();return e||t}function w0(e){var t=Bi(e);t!==null&&t.tag===5&&t.type==="form"?gh(t):Fn.r(e)}var ca=typeof document>"u"?null:document;function em(e,t,n){var a=ca;if(a&&typeof t=="string"&&t){var o=Ht(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),Pd.has(o)||(Pd.add(o),e={rel:e,crossOrigin:n,href:t},a.querySelector(o)===null&&(t=a.createElement("link"),ft(t,"link",e),lt(t),a.head.appendChild(t)))}}function D0(e){Fn.D(e),em("dns-prefetch",e,null)}function A0(e,t){Fn.C(e,t),em("preconnect",e,t)}function S0(e,t,n){Fn.L(e,t,n);var a=ca;if(a&&e&&t){var o='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Ht(n.imageSizes)+'"]')):o+='[href="'+Ht(e)+'"]';var s=o;switch(t){case"style":s=fa(e);break;case"script":s=ha(e)}Kt.has(s)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(s,e),a.querySelector(o)!==null||t==="style"&&a.querySelector(ol(s))||t==="script"&&a.querySelector(sl(s))||(t=a.createElement("link"),ft(t,"link",e),lt(t),a.head.appendChild(t)))}}function E0(e,t){Fn.m(e,t);var n=ca;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Ht(a)+'"][href="'+Ht(e)+'"]',s=o;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=ha(e)}if(!Kt.has(s)&&(e=y({rel:"modulepreload",href:e},t),Kt.set(s,e),n.querySelector(o)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(sl(s)))return}a=n.createElement("link"),ft(a,"link",e),lt(a),n.head.appendChild(a)}}}function k0(e,t,n){Fn.S(e,t,n);var a=ca;if(a&&e){var o=Oi(a).hoistableStyles,s=fa(e);t=t||"default";var g=o.get(s);if(!g){var v={loading:0,preload:null};if(g=a.querySelector(ol(s)))v.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(s))&&ps(e,n);var E=g=a.createElement("link");lt(E),ft(E,"link",e),E._p=new Promise(function(z,L){E.onload=z,E.onerror=L}),E.addEventListener("load",function(){v.loading|=1}),E.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ir(g,t,a)}g={type:"stylesheet",instance:g,count:1,state:v},o.set(s,g)}}}function T0(e,t){Fn.X(e,t);var n=ca;if(n&&e){var a=Oi(n).hoistableScripts,o=ha(e),s=a.get(o);s||(s=n.querySelector(sl(o)),s||(e=y({src:e,async:!0},t),(t=Kt.get(o))&&gs(e,t),s=n.createElement("script"),lt(s),ft(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function x0(e,t){Fn.M(e,t);var n=ca;if(n&&e){var a=Oi(n).hoistableScripts,o=ha(e),s=a.get(o);s||(s=n.querySelector(sl(o)),s||(e=y({src:e,async:!0,type:"module"},t),(t=Kt.get(o))&&gs(e,t),s=n.createElement("script"),lt(s),ft(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},a.set(o,s))}}function tm(e,t,n,a){var o=(o=oe.current)?_r(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=fa(n.href),n=Oi(o).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=fa(n.href);var s=Oi(o).hoistableStyles,g=s.get(e);if(g||(o=o.ownerDocument||o,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,g),(s=o.querySelector(ol(e)))&&!s._p&&(g.instance=s,g.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),s||C0(o,e,n,g.state))),t&&a===null)throw Error(u(528,""));return g}if(t&&a!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ha(n),n=Oi(o).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function fa(e){return'href="'+Ht(e)+'"'}function ol(e){return'link[rel="stylesheet"]['+e+"]"}function nm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function C0(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),ft(t,"link",n),lt(t),e.head.appendChild(t))}function ha(e){return'[src="'+Ht(e)+'"]'}function sl(e){return"script[async]"+e}function im(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(a)return t.instance=a,lt(a),a;var o=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),lt(a),ft(a,"style",o),Ir(a,n.precedence,e),t.instance=a;case"stylesheet":o=fa(n.href);var s=e.querySelector(ol(o));if(s)return t.state.loading|=4,t.instance=s,lt(s),s;a=nm(n),(o=Kt.get(o))&&ps(a,o),s=(e.ownerDocument||e).createElement("link"),lt(s);var g=s;return g._p=new Promise(function(v,E){g.onload=v,g.onerror=E}),ft(s,"link",a),t.state.loading|=4,Ir(s,n.precedence,e),t.instance=s;case"script":return s=ha(n.src),(o=e.querySelector(sl(s)))?(t.instance=o,lt(o),o):(a=n,(o=Kt.get(s))&&(a=y({},n),gs(a,o)),e=e.ownerDocument||e,o=e.createElement("script"),lt(o),ft(o,"link",a),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ir(a,n.precedence,e));return t.instance}function Ir(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=a.length?a[a.length-1]:null,s=o,g=0;g<a.length;g++){var v=a[g];if(v.dataset.precedence===t)s=v;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ps(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rr=null;function am(e,t,n){if(Rr===null){var a=new Map,o=Rr=new Map;o.set(n,a)}else o=Rr,a=o.get(n),a||(a=new Map,o.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var s=n[o];if(!(s[ka]||s[ut]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var g=s.getAttribute(t)||"";g=e+g;var v=a.get(g);v?v.push(s):a.set(g,[s])}}return a}function lm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function F0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function z0(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=fa(a.href),s=t.querySelector(ol(o));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Nr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,lt(s);return}s=t.ownerDocument||t,a=nm(a),(o=Kt.get(o))&&ps(a,o),s=s.createElement("link"),lt(s);var g=s;g._p=new Promise(function(v,E){g.onload=v,g.onerror=E}),ft(s,"link",a),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Nr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ys=0;function M0(e,t){return e.stylesheets&&e.count===0&&Lr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Lr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&ys===0&&(ys=62500*f0());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>ys?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(o)}}:null}function Nr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ur=null;function Lr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ur=new Map,t.forEach(B0,e),Ur=null,Nr.call(e))}function B0(e,t){if(!(t.state.loading&4)){var n=Ur.get(e);if(n)var a=n.get(null);else{n=new Map,Ur.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var g=o[s];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),a=g)}a&&n.set(null,a)}o=t.instance,g=o.getAttribute("data-precedence"),s=n.get(g)||a,s===a&&n.set(null,o),n.set(g,o),this.count++,a=Nr.bind(this),o.addEventListener("load",a),o.addEventListener("error",a),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var cl={$$typeof:R,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function O0(e,t,n,a,o,s,g,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fu(0),this.hiddenUpdates=fu(null),this.identifierPrefix=a,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function um(e,t,n,a,o,s,g,v,E,z,L,Y){return e=new O0(e,t,n,g,E,z,L,Y,v),t=1,s===!0&&(t|=24),s=Mt(3,null,null,t),e.current=s,s.stateNode=e,t=Ku(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:a,isDehydrated:n,cache:t},Pu(s),e}function om(e){return e?(e=Gi,e):Gi}function sm(e,t,n,a,o,s){o=om(o),a.context===null?a.context=o:a.pendingContext=o,a=Ln(t),a.payload={element:n},s=s===void 0?null:s,s!==null&&(a.callback=s),n=jn(e,a,t),n!==null&&(Tt(n,e,t),qa(n,e,t))}function cm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bs(e,t){cm(e,t),(e=e.alternate)&&cm(e,t)}function fm(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&Tt(t,e,67108864),bs(e,67108864)}}function hm(e){if(e.tag===13||e.tag===31){var t=Rt();t=hu(t);var n=ci(e,t);n!==null&&Tt(n,e,t),bs(e,t)}}var jr=!0;function _0(e,t,n,a){var o=O.T;O.T=null;var s=X.p;try{X.p=2,vs(e,t,n,a)}finally{X.p=s,O.T=o}}function I0(e,t,n,a){var o=O.T;O.T=null;var s=X.p;try{X.p=8,vs(e,t,n,a)}finally{X.p=s,O.T=o}}function vs(e,t,n,a){if(jr){var o=ws(a);if(o===null)ls(e,t,a,Hr,n),mm(e,a);else if(N0(o,e,t,n,a))a.stopPropagation();else if(mm(e,a),t&4&&-1<R0.indexOf(e)){for(;o!==null;){var s=Bi(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var g=li(s.pendingLanes);if(g!==0){var v=s;for(v.pendingLanes|=2,v.entangledLanes|=2;g;){var E=1<<31-je(g);v.entanglements[1]|=E,g&=~E}rn(s),(Be&6)===0&&(Sr=pt()+500,al(0))}}break;case 31:case 13:v=ci(s,2),v!==null&&Tt(v,s,2),kr(),bs(s,2)}if(s=ws(a),s===null&&ls(e,t,a,Hr,n),s===o)break;o=s}o!==null&&a.stopPropagation()}else ls(e,t,a,null,n)}}function ws(e){return e=Du(e),Ds(e)}var Hr=null;function Ds(e){if(Hr=null,e=Mi(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hr=e,null}function dm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cu()){case q:return 2;case K:return 8;case me:case De:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var As=!1,Wn=null,$n=null,Pn=null,fl=new Map,hl=new Map,ei=[],R0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mm(e,t){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":fl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hl.delete(t.pointerId)}}function dl(e,t,n,a,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Bi(t),t!==null&&fm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function N0(e,t,n,a,o){switch(t){case"focusin":return Wn=dl(Wn,e,t,n,a,o),!0;case"dragenter":return $n=dl($n,e,t,n,a,o),!0;case"mouseover":return Pn=dl(Pn,e,t,n,a,o),!0;case"pointerover":var s=o.pointerId;return fl.set(s,dl(fl.get(s)||null,e,t,n,a,o)),!0;case"gotpointercapture":return s=o.pointerId,hl.set(s,dl(hl.get(s)||null,e,t,n,a,o)),!0}return!1}function pm(e){var t=Mi(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Cc(e.priority,function(){hm(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Cc(e.priority,function(){hm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);wu=a,n.target.dispatchEvent(a),wu=null}else return t=Bi(n),t!==null&&fm(t),e.blockedOn=n,!1;t.shift()}return!0}function gm(e,t,n){qr(e)&&n.delete(t)}function U0(){As=!1,Wn!==null&&qr(Wn)&&(Wn=null),$n!==null&&qr($n)&&($n=null),Pn!==null&&qr(Pn)&&(Pn=null),fl.forEach(gm),hl.forEach(gm)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,U0)))}var Yr=null;function ym(e){Yr!==e&&(Yr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Yr===e&&(Yr=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],o=e[t+2];if(typeof a!="function"){if(Ds(a||n)===null)continue;break}var s=Bi(n);s!==null&&(e.splice(t,3),t-=3,wo(s,{pending:!0,data:o,method:n.method,action:a},a,o))}}))}function da(e){function t(E){return Gr(E,e)}Wn!==null&&Gr(Wn,e),$n!==null&&Gr($n,e),Pn!==null&&Gr(Pn,e),fl.forEach(t),hl.forEach(t);for(var n=0;n<ei.length;n++){var a=ei[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<ei.length&&(n=ei[0],n.blockedOn===null);)pm(n),n.blockedOn===null&&ei.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var o=n[a],s=n[a+1],g=o[wt]||null;if(typeof s=="function")g||ym(n);else if(g){var v=null;if(s&&s.hasAttribute("formAction")){if(o=s,g=s[wt]||null)v=g.formAction;else if(Ds(o)!==null)continue}else v=g.action;typeof v=="function"?n[a+1]=v:(n.splice(a,3),a-=3),ym(n)}}}function bm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(g){return o=g})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Ss(e){this._internalRoot=e}Vr.prototype.render=Ss.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,a=Rt();sm(n,a,e,t,null,null)},Vr.prototype.unmount=Ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sm(e.current,2,null,e,null,null),kr(),t[zi]=null}};function Vr(e){this._internalRoot=e}Vr.prototype.unstable_scheduleHydration=function(e){if(e){var t=xc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ei.length&&t!==0&&t<ei[n].priority;n++);ei.splice(n,0,e),n===0&&pm(e)}};var vm=r.version;if(vm!=="19.2.4")throw Error(u(527,vm,"19.2.4"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=d(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var L0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{gt=Xr.inject(L0),it=Xr}catch{}}return pl.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,a="",o=Th,s=xh,g=Ch;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=um(e,1,!1,null,null,n,a,null,o,s,g,bm),e[zi]=t.current,as(e),new Ss(t)},pl.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var a=!1,o="",s=Th,g=xh,v=Ch,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=um(e,1,!0,t,n??null,a,o,E,s,g,v,bm),t.context=om(null),n=t.current,a=Rt(),a=hu(a),o=Ln(a),o.callback=null,jn(n,o,a),n=a,t.current.lanes=n,Ea(t,n),rn(t),e[zi]=t.current,as(e),new Vr(t)},pl.version="19.2.4",pl}var Fm;function K0(){if(Fm)return Ts.exports;Fm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Ts.exports=Z0(),Ts.exports}var J0=K0();function W0(i,r){const l={};return(i[i.length-1]===""?[...i,""]:i).join((l.padRight?" ":"")+","+(l.padLeft===!1?"":" ")).trim()}const $0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,P0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,e1={};function zm(i,r){return(e1.jsx?P0:$0).test(i)}const t1=/[ \t\n\f\r]/g;function n1(i){return typeof i=="object"?i.type==="text"?Mm(i.value):!1:Mm(i)}function Mm(i){return i.replace(t1,"")===""}class kl{constructor(r,l,u){this.normal=l,this.property=r,u&&(this.space=u)}}kl.prototype.normal={};kl.prototype.property={};kl.prototype.space=void 0;function Ap(i,r){const l={},u={};for(const c of i)Object.assign(l,c.property),Object.assign(u,c.normal);return new kl(l,u,r)}function Zs(i){return i.toLowerCase()}class Ct{constructor(r,l){this.attribute=l,this.property=r}}Ct.prototype.attribute="";Ct.prototype.booleanish=!1;Ct.prototype.boolean=!1;Ct.prototype.commaOrSpaceSeparated=!1;Ct.prototype.commaSeparated=!1;Ct.prototype.defined=!1;Ct.prototype.mustUseProperty=!1;Ct.prototype.number=!1;Ct.prototype.overloadedBoolean=!1;Ct.prototype.property="";Ct.prototype.spaceSeparated=!1;Ct.prototype.space=void 0;let i1=0;const be=ki(),nt=ki(),Ks=ki(),Q=ki(),Ge=ki(),ya=ki(),Nt=ki();function ki(){return 2**++i1}const Js=Object.freeze(Object.defineProperty({__proto__:null,boolean:be,booleanish:nt,commaOrSpaceSeparated:Nt,commaSeparated:ya,number:Q,overloadedBoolean:Ks,spaceSeparated:Ge},Symbol.toStringTag,{value:"Module"})),zs=Object.keys(Js);class rc extends Ct{constructor(r,l,u,c){let h=-1;if(super(r,l),Bm(this,"space",c),typeof u=="number")for(;++h<zs.length;){const f=zs[h];Bm(this,zs[h],(u&Js[f])===Js[f])}}}rc.prototype.defined=!0;function Bm(i,r,l){l&&(i[r]=l)}function va(i){const r={},l={};for(const[u,c]of Object.entries(i.properties)){const h=new rc(u,i.transform(i.attributes||{},u),c,i.space);i.mustUseProperty&&i.mustUseProperty.includes(u)&&(h.mustUseProperty=!0),r[u]=h,l[Zs(u)]=u,l[Zs(h.attribute)]=u}return new kl(r,l,i.space)}const Sp=va({properties:{ariaActiveDescendant:null,ariaAtomic:nt,ariaAutoComplete:null,ariaBusy:nt,ariaChecked:nt,ariaColCount:Q,ariaColIndex:Q,ariaColSpan:Q,ariaControls:Ge,ariaCurrent:null,ariaDescribedBy:Ge,ariaDetails:null,ariaDisabled:nt,ariaDropEffect:Ge,ariaErrorMessage:null,ariaExpanded:nt,ariaFlowTo:Ge,ariaGrabbed:nt,ariaHasPopup:null,ariaHidden:nt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ge,ariaLevel:Q,ariaLive:null,ariaModal:nt,ariaMultiLine:nt,ariaMultiSelectable:nt,ariaOrientation:null,ariaOwns:Ge,ariaPlaceholder:null,ariaPosInSet:Q,ariaPressed:nt,ariaReadOnly:nt,ariaRelevant:null,ariaRequired:nt,ariaRoleDescription:Ge,ariaRowCount:Q,ariaRowIndex:Q,ariaRowSpan:Q,ariaSelected:nt,ariaSetSize:Q,ariaSort:null,ariaValueMax:Q,ariaValueMin:Q,ariaValueNow:Q,ariaValueText:null,role:null},transform(i,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function Ep(i,r){return r in i?i[r]:r}function kp(i,r){return Ep(i,r.toLowerCase())}const a1=va({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ya,acceptCharset:Ge,accessKey:Ge,action:null,allow:null,allowFullScreen:be,allowPaymentRequest:be,allowUserMedia:be,alt:null,as:null,async:be,autoCapitalize:null,autoComplete:Ge,autoFocus:be,autoPlay:be,blocking:Ge,capture:null,charSet:null,checked:be,cite:null,className:Ge,cols:Q,colSpan:null,content:null,contentEditable:nt,controls:be,controlsList:Ge,coords:Q|ya,crossOrigin:null,data:null,dateTime:null,decoding:null,default:be,defer:be,dir:null,dirName:null,disabled:be,download:Ks,draggable:nt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:be,formTarget:null,headers:Ge,height:Q,hidden:Ks,high:Q,href:null,hrefLang:null,htmlFor:Ge,httpEquiv:Ge,id:null,imageSizes:null,imageSrcSet:null,inert:be,inputMode:null,integrity:null,is:null,isMap:be,itemId:null,itemProp:Ge,itemRef:Ge,itemScope:be,itemType:Ge,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:be,low:Q,manifest:null,max:null,maxLength:Q,media:null,method:null,min:null,minLength:Q,multiple:be,muted:be,name:null,nonce:null,noModule:be,noValidate:be,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:be,optimum:Q,pattern:null,ping:Ge,placeholder:null,playsInline:be,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:be,referrerPolicy:null,rel:Ge,required:be,reversed:be,rows:Q,rowSpan:Q,sandbox:Ge,scope:null,scoped:be,seamless:be,selected:be,shadowRootClonable:be,shadowRootDelegatesFocus:be,shadowRootMode:null,shape:null,size:Q,sizes:null,slot:null,span:Q,spellCheck:nt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Q,step:null,style:null,tabIndex:Q,target:null,title:null,translate:null,type:null,typeMustMatch:be,useMap:null,value:nt,width:Q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ge,axis:null,background:null,bgColor:null,border:Q,borderColor:null,bottomMargin:Q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:be,declare:be,event:null,face:null,frame:null,frameBorder:null,hSpace:Q,leftMargin:Q,link:null,longDesc:null,lowSrc:null,marginHeight:Q,marginWidth:Q,noResize:be,noHref:be,noShade:be,noWrap:be,object:null,profile:null,prompt:null,rev:null,rightMargin:Q,rules:null,scheme:null,scrolling:nt,standby:null,summary:null,text:null,topMargin:Q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:be,disableRemotePlayback:be,prefix:null,property:null,results:Q,security:null,unselectable:null},space:"html",transform:kp}),l1=va({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Nt,accentHeight:Q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Q,amplitude:Q,arabicForm:null,ascent:Q,attributeName:null,attributeType:null,azimuth:Q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Q,by:null,calcMode:null,capHeight:Q,className:Ge,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Q,diffuseConstant:Q,direction:null,display:null,dur:null,divisor:Q,dominantBaseline:null,download:be,dx:null,dy:null,edgeMode:null,editable:null,elevation:Q,enableBackground:null,end:null,event:null,exponent:Q,externalResourcesRequired:null,fill:null,fillOpacity:Q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ya,g2:ya,glyphName:ya,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Q,horizOriginX:Q,horizOriginY:Q,id:null,ideographic:Q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Q,k:Q,k1:Q,k2:Q,k3:Q,k4:Q,kernelMatrix:Nt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Q,overlineThickness:Q,paintOrder:null,panose1:null,path:null,pathLength:Q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ge,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Q,pointsAtY:Q,pointsAtZ:Q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Nt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Nt,rev:Nt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Nt,requiredFeatures:Nt,requiredFonts:Nt,requiredFormats:Nt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Q,specularExponent:Q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Q,strikethroughThickness:Q,string:null,stroke:null,strokeDashArray:Nt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Q,strokeOpacity:Q,strokeWidth:null,style:null,surfaceScale:Q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Nt,tabIndex:Q,tableValues:null,target:null,targetX:Q,targetY:Q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Nt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Q,underlineThickness:Q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Q,values:null,vAlphabetic:Q,vMathematical:Q,vectorEffect:null,vHanging:Q,vIdeographic:Q,version:null,vertAdvY:Q,vertOriginX:Q,vertOriginY:Q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ep}),Tp=va({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(i,r){return"xlink:"+r.slice(5).toLowerCase()}}),xp=va({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:kp}),Cp=va({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(i,r){return"xml:"+r.slice(3).toLowerCase()}}),r1={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},u1=/[A-Z]/g,Om=/-[a-z]/g,o1=/^data[-\w.:]+$/i;function s1(i,r){const l=Zs(r);let u=r,c=Ct;if(l in i.normal)return i.property[i.normal[l]];if(l.length>4&&l.slice(0,4)==="data"&&o1.test(r)){if(r.charAt(4)==="-"){const h=r.slice(5).replace(Om,f1);u="data"+h.charAt(0).toUpperCase()+h.slice(1)}else{const h=r.slice(4);if(!Om.test(h)){let f=h.replace(u1,c1);f.charAt(0)!=="-"&&(f="-"+f),r="data"+f}}c=rc}return new c(u,r)}function c1(i){return"-"+i.toLowerCase()}function f1(i){return i.charAt(1).toUpperCase()}const h1=Ap([Sp,a1,Tp,xp,Cp],"html"),uc=Ap([Sp,l1,Tp,xp,Cp],"svg");function d1(i){return i.join(" ").trim()}var ma={},Ms,_m;function m1(){if(_m)return Ms;_m=1;var i=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,l=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,c=/^:\s*/,h=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,m=/^\s+|\s+$/g,p=`
`,d="/",b="*",y="",D="comment",w="declaration";function x(V,M){if(typeof V!="string")throw new TypeError("First argument must be a string");if(!V)return[];M=M||{};var I=1,R=1;function W(ie){var Z=ie.match(r);Z&&(I+=Z.length);var O=ie.lastIndexOf(p);R=~O?ie.length-O:R+ie.length}function P(){var ie={line:I,column:R};return function(Z){return Z.position=new _(ie),de(),Z}}function _(ie){this.start=ie,this.end={line:I,column:R},this.source=M.source}_.prototype.content=V;function J(ie){var Z=new Error(M.source+":"+I+":"+R+": "+ie);if(Z.reason=ie,Z.filename=M.source,Z.line=I,Z.column=R,Z.source=V,!M.silent)throw Z}function ue(ie){var Z=ie.exec(V);if(Z){var O=Z[0];return W(O),V=V.slice(O.length),Z}}function de(){ue(l)}function N(ie){var Z;for(ie=ie||[];Z=te();)Z!==!1&&ie.push(Z);return ie}function te(){var ie=P();if(!(d!=V.charAt(0)||b!=V.charAt(1))){for(var Z=2;y!=V.charAt(Z)&&(b!=V.charAt(Z)||d!=V.charAt(Z+1));)++Z;if(Z+=2,y===V.charAt(Z-1))return J("End of comment missing");var O=V.slice(2,Z-2);return R+=2,W(O),V=V.slice(Z),R+=2,ie({type:D,comment:O})}}function ee(){var ie=P(),Z=ue(u);if(Z){if(te(),!ue(c))return J("property missing ':'");var O=ue(h),X=ie({type:w,property:j(Z[0].replace(i,y)),value:O?j(O[0].replace(i,y)):y});return ue(f),X}}function we(){var ie=[];N(ie);for(var Z;Z=ee();)Z!==!1&&(ie.push(Z),N(ie));return ie}return de(),we()}function j(V){return V?V.replace(m,y):y}return Ms=x,Ms}var Im;function p1(){if(Im)return ma;Im=1;var i=ma&&ma.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ma,"__esModule",{value:!0}),ma.default=l;const r=i(m1());function l(u,c){let h=null;if(!u||typeof u!="string")return h;const f=(0,r.default)(u),m=typeof c=="function";return f.forEach(p=>{if(p.type!=="declaration")return;const{property:d,value:b}=p;m?c(d,b,p):b&&(h=h||{},h[d]=b)}),h}return ma}var gl={},Rm;function g1(){if(Rm)return gl;Rm=1,Object.defineProperty(gl,"__esModule",{value:!0}),gl.camelCase=void 0;var i=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,l=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,c=/^-(ms)-/,h=function(d){return!d||l.test(d)||i.test(d)},f=function(d,b){return b.toUpperCase()},m=function(d,b){return"".concat(b,"-")},p=function(d,b){return b===void 0&&(b={}),h(d)?d:(d=d.toLowerCase(),b.reactCompat?d=d.replace(c,m):d=d.replace(u,m),d.replace(r,f))};return gl.camelCase=p,gl}var yl,Nm;function y1(){if(Nm)return yl;Nm=1;var i=yl&&yl.__importDefault||function(c){return c&&c.__esModule?c:{default:c}},r=i(p1()),l=g1();function u(c,h){var f={};return!c||typeof c!="string"||(0,r.default)(c,function(m,p){m&&p&&(f[(0,l.camelCase)(m,h)]=p)}),f}return u.default=u,yl=u,yl}var b1=y1();const v1=Dp(b1),Fp=zp("end"),oc=zp("start");function zp(i){return r;function r(l){const u=l&&l.position&&l.position[i]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function w1(i){const r=oc(i),l=Fp(i);if(r&&l)return{start:r,end:l}}function wl(i){return!i||typeof i!="object"?"":"position"in i||"type"in i?Um(i.position):"start"in i||"end"in i?Um(i):"line"in i||"column"in i?Ws(i):""}function Ws(i){return Lm(i&&i.line)+":"+Lm(i&&i.column)}function Um(i){return Ws(i&&i.start)+"-"+Ws(i&&i.end)}function Lm(i){return i&&typeof i=="number"?i:1}class mt extends Error{constructor(r,l,u){super(),typeof l=="string"&&(u=l,l=void 0);let c="",h={},f=!1;if(l&&("line"in l&&"column"in l?h={place:l}:"start"in l&&"end"in l?h={place:l}:"type"in l?h={ancestors:[l],place:l.position}:h={...l}),typeof r=="string"?c=r:!h.cause&&r&&(f=!0,c=r.message,h.cause=r),!h.ruleId&&!h.source&&typeof u=="string"){const p=u.indexOf(":");p===-1?h.ruleId=u:(h.source=u.slice(0,p),h.ruleId=u.slice(p+1))}if(!h.place&&h.ancestors&&h.ancestors){const p=h.ancestors[h.ancestors.length-1];p&&(h.place=p.position)}const m=h.place&&"start"in h.place?h.place.start:h.place;this.ancestors=h.ancestors||void 0,this.cause=h.cause||void 0,this.column=m?m.column:void 0,this.fatal=void 0,this.file="",this.message=c,this.line=m?m.line:void 0,this.name=wl(h.place)||"1:1",this.place=h.place||void 0,this.reason=this.message,this.ruleId=h.ruleId||void 0,this.source=h.source||void 0,this.stack=f&&h.cause&&typeof h.cause.stack=="string"?h.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}mt.prototype.file="";mt.prototype.name="";mt.prototype.reason="";mt.prototype.message="";mt.prototype.stack="";mt.prototype.column=void 0;mt.prototype.line=void 0;mt.prototype.ancestors=void 0;mt.prototype.cause=void 0;mt.prototype.fatal=void 0;mt.prototype.place=void 0;mt.prototype.ruleId=void 0;mt.prototype.source=void 0;const sc={}.hasOwnProperty,D1=new Map,A1=/[A-Z]/g,S1=new Set(["table","tbody","thead","tfoot","tr"]),E1=new Set(["td","th"]),Mp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function k1(i,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const l=r.filePath||void 0;let u;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=O1(l,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=B1(l,r.jsx,r.jsxs)}const c={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:u,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:l,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?uc:h1,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},h=Bp(c,i,void 0);return h&&typeof h!="string"?h:c.create(i,c.Fragment,{children:h||void 0},void 0)}function Bp(i,r,l){if(r.type==="element")return T1(i,r,l);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return x1(i,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return F1(i,r,l);if(r.type==="mdxjsEsm")return C1(i,r);if(r.type==="root")return z1(i,r,l);if(r.type==="text")return M1(i,r)}function T1(i,r,l){const u=i.schema;let c=u;r.tagName.toLowerCase()==="svg"&&u.space==="html"&&(c=uc,i.schema=c),i.ancestors.push(r);const h=_p(i,r.tagName,!1),f=_1(i,r);let m=fc(i,r);return S1.has(r.tagName)&&(m=m.filter(function(p){return typeof p=="string"?!n1(p):!0})),Op(i,f,h,r),cc(f,m),i.ancestors.pop(),i.schema=u,i.create(r,h,f,l)}function x1(i,r){if(r.data&&r.data.estree&&i.evaluater){const u=r.data.estree.body[0];return u.type,i.evaluater.evaluateExpression(u.expression)}Sl(i,r.position)}function C1(i,r){if(r.data&&r.data.estree&&i.evaluater)return i.evaluater.evaluateProgram(r.data.estree);Sl(i,r.position)}function F1(i,r,l){const u=i.schema;let c=u;r.name==="svg"&&u.space==="html"&&(c=uc,i.schema=c),i.ancestors.push(r);const h=r.name===null?i.Fragment:_p(i,r.name,!0),f=I1(i,r),m=fc(i,r);return Op(i,f,h,r),cc(f,m),i.ancestors.pop(),i.schema=u,i.create(r,h,f,l)}function z1(i,r,l){const u={};return cc(u,fc(i,r)),i.create(r,i.Fragment,u,l)}function M1(i,r){return r.value}function Op(i,r,l,u){typeof l!="string"&&l!==i.Fragment&&i.passNode&&(r.node=u)}function cc(i,r){if(r.length>0){const l=r.length>1?r:r[0];l&&(i.children=l)}}function B1(i,r,l){return u;function u(c,h,f,m){const d=Array.isArray(f.children)?l:r;return m?d(h,f,m):d(h,f)}}function O1(i,r){return l;function l(u,c,h,f){const m=Array.isArray(h.children),p=oc(u);return r(c,h,f,m,{columnNumber:p?p.column-1:void 0,fileName:i,lineNumber:p?p.line:void 0},void 0)}}function _1(i,r){const l={};let u,c;for(c in r.properties)if(c!=="children"&&sc.call(r.properties,c)){const h=R1(i,c,r.properties[c]);if(h){const[f,m]=h;i.tableCellAlignToStyle&&f==="align"&&typeof m=="string"&&E1.has(r.tagName)?u=m:l[f]=m}}if(u){const h=l.style||(l.style={});h[i.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return l}function I1(i,r){const l={};for(const u of r.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&i.evaluater){const h=u.data.estree.body[0];h.type;const f=h.expression;f.type;const m=f.properties[0];m.type,Object.assign(l,i.evaluater.evaluateExpression(m.argument))}else Sl(i,r.position);else{const c=u.name;let h;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&i.evaluater){const m=u.value.data.estree.body[0];m.type,h=i.evaluater.evaluateExpression(m.expression)}else Sl(i,r.position);else h=u.value===null?!0:u.value;l[c]=h}return l}function fc(i,r){const l=[];let u=-1;const c=i.passKeys?new Map:D1;for(;++u<r.children.length;){const h=r.children[u];let f;if(i.passKeys){const p=h.type==="element"?h.tagName:h.type==="mdxJsxFlowElement"||h.type==="mdxJsxTextElement"?h.name:void 0;if(p){const d=c.get(p)||0;f=p+"-"+d,c.set(p,d+1)}}const m=Bp(i,h,f);m!==void 0&&l.push(m)}return l}function R1(i,r,l){const u=s1(i.schema,r);if(!(l==null||typeof l=="number"&&Number.isNaN(l))){if(Array.isArray(l)&&(l=u.commaSeparated?W0(l):d1(l)),u.property==="style"){let c=typeof l=="object"?l:N1(i,String(l));return i.stylePropertyNameCase==="css"&&(c=U1(c)),["style",c]}return[i.elementAttributeNameCase==="react"&&u.space?r1[u.property]||u.property:u.attribute,l]}}function N1(i,r){try{return v1(r,{reactCompat:!0})}catch(l){if(i.ignoreInvalidStyle)return{};const u=l,c=new mt("Cannot parse `style` attribute",{ancestors:i.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw c.file=i.filePath||void 0,c.url=Mp+"#cannot-parse-style-attribute",c}}function _p(i,r,l){let u;if(!l)u={type:"Literal",value:r};else if(r.includes(".")){const c=r.split(".");let h=-1,f;for(;++h<c.length;){const m=zm(c[h])?{type:"Identifier",name:c[h]}:{type:"Literal",value:c[h]};f=f?{type:"MemberExpression",object:f,property:m,computed:!!(h&&m.type==="Literal"),optional:!1}:m}u=f}else u=zm(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(u.type==="Literal"){const c=u.value;return sc.call(i.components,c)?i.components[c]:c}if(i.evaluater)return i.evaluater.evaluateExpression(u);Sl(i)}function Sl(i,r){const l=new mt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:i.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw l.file=i.filePath||void 0,l.url=Mp+"#cannot-handle-mdx-estrees-without-createevaluater",l}function U1(i){const r={};let l;for(l in i)sc.call(i,l)&&(r[L1(l)]=i[l]);return r}function L1(i){let r=i.replace(A1,j1);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function j1(i){return"-"+i.toLowerCase()}const Bs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},H1={};function hc(i,r){const l=H1,u=typeof l.includeImageAlt=="boolean"?l.includeImageAlt:!0,c=typeof l.includeHtml=="boolean"?l.includeHtml:!0;return Ip(i,u,c)}function Ip(i,r,l){if(q1(i)){if("value"in i)return i.type==="html"&&!l?"":i.value;if(r&&"alt"in i&&i.alt)return i.alt;if("children"in i)return jm(i.children,r,l)}return Array.isArray(i)?jm(i,r,l):""}function jm(i,r,l){const u=[];let c=-1;for(;++c<i.length;)u[c]=Ip(i[c],r,l);return u.join("")}function q1(i){return!!(i&&typeof i=="object")}const Hm=document.createElement("i");function dc(i){const r="&"+i+";";Hm.innerHTML=r;const l=Hm.textContent;return l.charCodeAt(l.length-1)===59&&i!=="semi"||l===r?!1:l}function Ut(i,r,l,u){const c=i.length;let h=0,f;if(r<0?r=-r>c?0:c+r:r=r>c?c:r,l=l>0?l:0,u.length<1e4)f=Array.from(u),f.unshift(r,l),i.splice(...f);else for(l&&i.splice(r,l);h<u.length;)f=u.slice(h,h+1e4),f.unshift(r,0),i.splice(...f),h+=1e4,r+=1e4}function Jt(i,r){return i.length>0?(Ut(i,i.length,0,r),i):r}const qm={}.hasOwnProperty;function Rp(i){const r={};let l=-1;for(;++l<i.length;)G1(r,i[l]);return r}function G1(i,r){let l;for(l in r){const c=(qm.call(i,l)?i[l]:void 0)||(i[l]={}),h=r[l];let f;if(h)for(f in h){qm.call(c,f)||(c[f]=[]);const m=h[f];Y1(c[f],Array.isArray(m)?m:m?[m]:[])}}}function Y1(i,r){let l=-1;const u=[];for(;++l<r.length;)(r[l].add==="after"?i:u).push(r[l]);Ut(i,0,0,u)}function Np(i,r){const l=Number.parseInt(i,r);return l<9||l===11||l>13&&l<32||l>126&&l<160||l>55295&&l<57344||l>64975&&l<65008||(l&65535)===65535||(l&65535)===65534||l>1114111?"�":String.fromCodePoint(l)}function tn(i){return i.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const bt=ai(/[A-Za-z]/),dt=ai(/[\dA-Za-z]/),V1=ai(/[#-'*+\--9=?A-Z^-~]/);function $r(i){return i!==null&&(i<32||i===127)}const $s=ai(/\d/),X1=ai(/[\dA-Fa-f]/),Q1=ai(/[!-/:-@[-`{-~]/);function ce(i){return i!==null&&i<-2}function qe(i){return i!==null&&(i<0||i===32)}function Ee(i){return i===-2||i===-1||i===32}const nu=ai(new RegExp("\\p{P}|\\p{S}","u")),Ei=ai(/\s/);function ai(i){return r;function r(l){return l!==null&&l>-1&&i.test(String.fromCharCode(l))}}function wa(i){const r=[];let l=-1,u=0,c=0;for(;++l<i.length;){const h=i.charCodeAt(l);let f="";if(h===37&&dt(i.charCodeAt(l+1))&&dt(i.charCodeAt(l+2)))c=2;else if(h<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(h))||(f=String.fromCharCode(h));else if(h>55295&&h<57344){const m=i.charCodeAt(l+1);h<56320&&m>56319&&m<57344?(f=String.fromCharCode(h,m),c=1):f="�"}else f=String.fromCharCode(h);f&&(r.push(i.slice(u,l),encodeURIComponent(f)),u=l+c+1,f=""),c&&(l+=c,c=0)}return r.join("")+i.slice(u)}function Fe(i,r,l,u){const c=u?u-1:Number.POSITIVE_INFINITY;let h=0;return f;function f(p){return Ee(p)?(i.enter(l),m(p)):r(p)}function m(p){return Ee(p)&&h++<c?(i.consume(p),m):(i.exit(l),r(p))}}const Z1={tokenize:K1};function K1(i){const r=i.attempt(this.parser.constructs.contentInitial,u,c);let l;return r;function u(m){if(m===null){i.consume(m);return}return i.enter("lineEnding"),i.consume(m),i.exit("lineEnding"),Fe(i,r,"linePrefix")}function c(m){return i.enter("paragraph"),h(m)}function h(m){const p=i.enter("chunkText",{contentType:"text",previous:l});return l&&(l.next=p),l=p,f(m)}function f(m){if(m===null){i.exit("chunkText"),i.exit("paragraph"),i.consume(m);return}return ce(m)?(i.consume(m),i.exit("chunkText"),h):(i.consume(m),f)}}const J1={tokenize:W1},Gm={tokenize:$1};function W1(i){const r=this,l=[];let u=0,c,h,f;return m;function m(R){if(u<l.length){const W=l[u];return r.containerState=W[1],i.attempt(W[0].continuation,p,d)(R)}return d(R)}function p(R){if(u++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,c&&I();const W=r.events.length;let P=W,_;for(;P--;)if(r.events[P][0]==="exit"&&r.events[P][1].type==="chunkFlow"){_=r.events[P][1].end;break}M(u);let J=W;for(;J<r.events.length;)r.events[J][1].end={..._},J++;return Ut(r.events,P+1,0,r.events.slice(W)),r.events.length=J,d(R)}return m(R)}function d(R){if(u===l.length){if(!c)return D(R);if(c.currentConstruct&&c.currentConstruct.concrete)return x(R);r.interrupt=!!(c.currentConstruct&&!c._gfmTableDynamicInterruptHack)}return r.containerState={},i.check(Gm,b,y)(R)}function b(R){return c&&I(),M(u),D(R)}function y(R){return r.parser.lazy[r.now().line]=u!==l.length,f=r.now().offset,x(R)}function D(R){return r.containerState={},i.attempt(Gm,w,x)(R)}function w(R){return u++,l.push([r.currentConstruct,r.containerState]),D(R)}function x(R){if(R===null){c&&I(),M(0),i.consume(R);return}return c=c||r.parser.flow(r.now()),i.enter("chunkFlow",{_tokenizer:c,contentType:"flow",previous:h}),j(R)}function j(R){if(R===null){V(i.exit("chunkFlow"),!0),M(0),i.consume(R);return}return ce(R)?(i.consume(R),V(i.exit("chunkFlow")),u=0,r.interrupt=void 0,m):(i.consume(R),j)}function V(R,W){const P=r.sliceStream(R);if(W&&P.push(null),R.previous=h,h&&(h.next=R),h=R,c.defineSkip(R.start),c.write(P),r.parser.lazy[R.start.line]){let _=c.events.length;for(;_--;)if(c.events[_][1].start.offset<f&&(!c.events[_][1].end||c.events[_][1].end.offset>f))return;const J=r.events.length;let ue=J,de,N;for(;ue--;)if(r.events[ue][0]==="exit"&&r.events[ue][1].type==="chunkFlow"){if(de){N=r.events[ue][1].end;break}de=!0}for(M(u),_=J;_<r.events.length;)r.events[_][1].end={...N},_++;Ut(r.events,ue+1,0,r.events.slice(J)),r.events.length=_}}function M(R){let W=l.length;for(;W-- >R;){const P=l[W];r.containerState=P[1],P[0].exit.call(r,i)}l.length=R}function I(){c.write([null]),h=void 0,c=void 0,r.containerState._closeFlow=void 0}}function $1(i,r,l){return Fe(i,i.attempt(this.parser.constructs.document,r,l),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function ba(i){if(i===null||qe(i)||Ei(i))return 1;if(nu(i))return 2}function iu(i,r,l){const u=[];let c=-1;for(;++c<i.length;){const h=i[c].resolveAll;h&&!u.includes(h)&&(r=h(r,l),u.push(h))}return r}const Ps={name:"attention",resolveAll:P1,tokenize:eb};function P1(i,r){let l=-1,u,c,h,f,m,p,d,b;for(;++l<i.length;)if(i[l][0]==="enter"&&i[l][1].type==="attentionSequence"&&i[l][1]._close){for(u=l;u--;)if(i[u][0]==="exit"&&i[u][1].type==="attentionSequence"&&i[u][1]._open&&r.sliceSerialize(i[u][1]).charCodeAt(0)===r.sliceSerialize(i[l][1]).charCodeAt(0)){if((i[u][1]._close||i[l][1]._open)&&(i[l][1].end.offset-i[l][1].start.offset)%3&&!((i[u][1].end.offset-i[u][1].start.offset+i[l][1].end.offset-i[l][1].start.offset)%3))continue;p=i[u][1].end.offset-i[u][1].start.offset>1&&i[l][1].end.offset-i[l][1].start.offset>1?2:1;const y={...i[u][1].end},D={...i[l][1].start};Ym(y,-p),Ym(D,p),f={type:p>1?"strongSequence":"emphasisSequence",start:y,end:{...i[u][1].end}},m={type:p>1?"strongSequence":"emphasisSequence",start:{...i[l][1].start},end:D},h={type:p>1?"strongText":"emphasisText",start:{...i[u][1].end},end:{...i[l][1].start}},c={type:p>1?"strong":"emphasis",start:{...f.start},end:{...m.end}},i[u][1].end={...f.start},i[l][1].start={...m.end},d=[],i[u][1].end.offset-i[u][1].start.offset&&(d=Jt(d,[["enter",i[u][1],r],["exit",i[u][1],r]])),d=Jt(d,[["enter",c,r],["enter",f,r],["exit",f,r],["enter",h,r]]),d=Jt(d,iu(r.parser.constructs.insideSpan.null,i.slice(u+1,l),r)),d=Jt(d,[["exit",h,r],["enter",m,r],["exit",m,r],["exit",c,r]]),i[l][1].end.offset-i[l][1].start.offset?(b=2,d=Jt(d,[["enter",i[l][1],r],["exit",i[l][1],r]])):b=0,Ut(i,u-1,l-u+3,d),l=u+d.length-b-2;break}}for(l=-1;++l<i.length;)i[l][1].type==="attentionSequence"&&(i[l][1].type="data");return i}function eb(i,r){const l=this.parser.constructs.attentionMarkers.null,u=this.previous,c=ba(u);let h;return f;function f(p){return h=p,i.enter("attentionSequence"),m(p)}function m(p){if(p===h)return i.consume(p),m;const d=i.exit("attentionSequence"),b=ba(p),y=!b||b===2&&c||l.includes(p),D=!c||c===2&&b||l.includes(u);return d._open=!!(h===42?y:y&&(c||!D)),d._close=!!(h===42?D:D&&(b||!y)),r(p)}}function Ym(i,r){i.column+=r,i.offset+=r,i._bufferIndex+=r}const tb={name:"autolink",tokenize:nb};function nb(i,r,l){let u=0;return c;function c(w){return i.enter("autolink"),i.enter("autolinkMarker"),i.consume(w),i.exit("autolinkMarker"),i.enter("autolinkProtocol"),h}function h(w){return bt(w)?(i.consume(w),f):w===64?l(w):d(w)}function f(w){return w===43||w===45||w===46||dt(w)?(u=1,m(w)):d(w)}function m(w){return w===58?(i.consume(w),u=0,p):(w===43||w===45||w===46||dt(w))&&u++<32?(i.consume(w),m):(u=0,d(w))}function p(w){return w===62?(i.exit("autolinkProtocol"),i.enter("autolinkMarker"),i.consume(w),i.exit("autolinkMarker"),i.exit("autolink"),r):w===null||w===32||w===60||$r(w)?l(w):(i.consume(w),p)}function d(w){return w===64?(i.consume(w),b):V1(w)?(i.consume(w),d):l(w)}function b(w){return dt(w)?y(w):l(w)}function y(w){return w===46?(i.consume(w),u=0,b):w===62?(i.exit("autolinkProtocol").type="autolinkEmail",i.enter("autolinkMarker"),i.consume(w),i.exit("autolinkMarker"),i.exit("autolink"),r):D(w)}function D(w){if((w===45||dt(w))&&u++<63){const x=w===45?D:y;return i.consume(w),x}return l(w)}}const Tl={partial:!0,tokenize:ib};function ib(i,r,l){return u;function u(h){return Ee(h)?Fe(i,c,"linePrefix")(h):c(h)}function c(h){return h===null||ce(h)?r(h):l(h)}}const Up={continuation:{tokenize:lb},exit:rb,name:"blockQuote",tokenize:ab};function ab(i,r,l){const u=this;return c;function c(f){if(f===62){const m=u.containerState;return m.open||(i.enter("blockQuote",{_container:!0}),m.open=!0),i.enter("blockQuotePrefix"),i.enter("blockQuoteMarker"),i.consume(f),i.exit("blockQuoteMarker"),h}return l(f)}function h(f){return Ee(f)?(i.enter("blockQuotePrefixWhitespace"),i.consume(f),i.exit("blockQuotePrefixWhitespace"),i.exit("blockQuotePrefix"),r):(i.exit("blockQuotePrefix"),r(f))}}function lb(i,r,l){const u=this;return c;function c(f){return Ee(f)?Fe(i,h,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):h(f)}function h(f){return i.attempt(Up,r,l)(f)}}function rb(i){i.exit("blockQuote")}const Lp={name:"characterEscape",tokenize:ub};function ub(i,r,l){return u;function u(h){return i.enter("characterEscape"),i.enter("escapeMarker"),i.consume(h),i.exit("escapeMarker"),c}function c(h){return Q1(h)?(i.enter("characterEscapeValue"),i.consume(h),i.exit("characterEscapeValue"),i.exit("characterEscape"),r):l(h)}}const jp={name:"characterReference",tokenize:ob};function ob(i,r,l){const u=this;let c=0,h,f;return m;function m(y){return i.enter("characterReference"),i.enter("characterReferenceMarker"),i.consume(y),i.exit("characterReferenceMarker"),p}function p(y){return y===35?(i.enter("characterReferenceMarkerNumeric"),i.consume(y),i.exit("characterReferenceMarkerNumeric"),d):(i.enter("characterReferenceValue"),h=31,f=dt,b(y))}function d(y){return y===88||y===120?(i.enter("characterReferenceMarkerHexadecimal"),i.consume(y),i.exit("characterReferenceMarkerHexadecimal"),i.enter("characterReferenceValue"),h=6,f=X1,b):(i.enter("characterReferenceValue"),h=7,f=$s,b(y))}function b(y){if(y===59&&c){const D=i.exit("characterReferenceValue");return f===dt&&!dc(u.sliceSerialize(D))?l(y):(i.enter("characterReferenceMarker"),i.consume(y),i.exit("characterReferenceMarker"),i.exit("characterReference"),r)}return f(y)&&c++<h?(i.consume(y),b):l(y)}}const Vm={partial:!0,tokenize:cb},Xm={concrete:!0,name:"codeFenced",tokenize:sb};function sb(i,r,l){const u=this,c={partial:!0,tokenize:P};let h=0,f=0,m;return p;function p(_){return d(_)}function d(_){const J=u.events[u.events.length-1];return h=J&&J[1].type==="linePrefix"?J[2].sliceSerialize(J[1],!0).length:0,m=_,i.enter("codeFenced"),i.enter("codeFencedFence"),i.enter("codeFencedFenceSequence"),b(_)}function b(_){return _===m?(f++,i.consume(_),b):f<3?l(_):(i.exit("codeFencedFenceSequence"),Ee(_)?Fe(i,y,"whitespace")(_):y(_))}function y(_){return _===null||ce(_)?(i.exit("codeFencedFence"),u.interrupt?r(_):i.check(Vm,j,W)(_)):(i.enter("codeFencedFenceInfo"),i.enter("chunkString",{contentType:"string"}),D(_))}function D(_){return _===null||ce(_)?(i.exit("chunkString"),i.exit("codeFencedFenceInfo"),y(_)):Ee(_)?(i.exit("chunkString"),i.exit("codeFencedFenceInfo"),Fe(i,w,"whitespace")(_)):_===96&&_===m?l(_):(i.consume(_),D)}function w(_){return _===null||ce(_)?y(_):(i.enter("codeFencedFenceMeta"),i.enter("chunkString",{contentType:"string"}),x(_))}function x(_){return _===null||ce(_)?(i.exit("chunkString"),i.exit("codeFencedFenceMeta"),y(_)):_===96&&_===m?l(_):(i.consume(_),x)}function j(_){return i.attempt(c,W,V)(_)}function V(_){return i.enter("lineEnding"),i.consume(_),i.exit("lineEnding"),M}function M(_){return h>0&&Ee(_)?Fe(i,I,"linePrefix",h+1)(_):I(_)}function I(_){return _===null||ce(_)?i.check(Vm,j,W)(_):(i.enter("codeFlowValue"),R(_))}function R(_){return _===null||ce(_)?(i.exit("codeFlowValue"),I(_)):(i.consume(_),R)}function W(_){return i.exit("codeFenced"),r(_)}function P(_,J,ue){let de=0;return N;function N(Z){return _.enter("lineEnding"),_.consume(Z),_.exit("lineEnding"),te}function te(Z){return _.enter("codeFencedFence"),Ee(Z)?Fe(_,ee,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(Z):ee(Z)}function ee(Z){return Z===m?(_.enter("codeFencedFenceSequence"),we(Z)):ue(Z)}function we(Z){return Z===m?(de++,_.consume(Z),we):de>=f?(_.exit("codeFencedFenceSequence"),Ee(Z)?Fe(_,ie,"whitespace")(Z):ie(Z)):ue(Z)}function ie(Z){return Z===null||ce(Z)?(_.exit("codeFencedFence"),J(Z)):ue(Z)}}}function cb(i,r,l){const u=this;return c;function c(f){return f===null?l(f):(i.enter("lineEnding"),i.consume(f),i.exit("lineEnding"),h)}function h(f){return u.parser.lazy[u.now().line]?l(f):r(f)}}const Os={name:"codeIndented",tokenize:hb},fb={partial:!0,tokenize:db};function hb(i,r,l){const u=this;return c;function c(d){return i.enter("codeIndented"),Fe(i,h,"linePrefix",5)(d)}function h(d){const b=u.events[u.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?f(d):l(d)}function f(d){return d===null?p(d):ce(d)?i.attempt(fb,f,p)(d):(i.enter("codeFlowValue"),m(d))}function m(d){return d===null||ce(d)?(i.exit("codeFlowValue"),f(d)):(i.consume(d),m)}function p(d){return i.exit("codeIndented"),r(d)}}function db(i,r,l){const u=this;return c;function c(f){return u.parser.lazy[u.now().line]?l(f):ce(f)?(i.enter("lineEnding"),i.consume(f),i.exit("lineEnding"),c):Fe(i,h,"linePrefix",5)(f)}function h(f){const m=u.events[u.events.length-1];return m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?r(f):ce(f)?c(f):l(f)}}const mb={name:"codeText",previous:gb,resolve:pb,tokenize:yb};function pb(i){let r=i.length-4,l=3,u,c;if((i[l][1].type==="lineEnding"||i[l][1].type==="space")&&(i[r][1].type==="lineEnding"||i[r][1].type==="space")){for(u=l;++u<r;)if(i[u][1].type==="codeTextData"){i[l][1].type="codeTextPadding",i[r][1].type="codeTextPadding",l+=2,r-=2;break}}for(u=l-1,r++;++u<=r;)c===void 0?u!==r&&i[u][1].type!=="lineEnding"&&(c=u):(u===r||i[u][1].type==="lineEnding")&&(i[c][1].type="codeTextData",u!==c+2&&(i[c][1].end=i[u-1][1].end,i.splice(c+2,u-c-2),r-=u-c-2,u=c+2),c=void 0);return i}function gb(i){return i!==96||this.events[this.events.length-1][1].type==="characterEscape"}function yb(i,r,l){let u=0,c,h;return f;function f(y){return i.enter("codeText"),i.enter("codeTextSequence"),m(y)}function m(y){return y===96?(i.consume(y),u++,m):(i.exit("codeTextSequence"),p(y))}function p(y){return y===null?l(y):y===32?(i.enter("space"),i.consume(y),i.exit("space"),p):y===96?(h=i.enter("codeTextSequence"),c=0,b(y)):ce(y)?(i.enter("lineEnding"),i.consume(y),i.exit("lineEnding"),p):(i.enter("codeTextData"),d(y))}function d(y){return y===null||y===32||y===96||ce(y)?(i.exit("codeTextData"),p(y)):(i.consume(y),d)}function b(y){return y===96?(i.consume(y),c++,b):c===u?(i.exit("codeTextSequence"),i.exit("codeText"),r(y)):(h.type="codeTextData",d(y))}}class bb{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,l){const u=l??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(r,u):r>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(r,l,u){const c=l||0;this.setCursor(Math.trunc(r));const h=this.right.splice(this.right.length-c,Number.POSITIVE_INFINITY);return u&&bl(this.left,u),h.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),bl(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),bl(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const l=this.left.splice(r,Number.POSITIVE_INFINITY);bl(this.right,l.reverse())}else{const l=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);bl(this.left,l.reverse())}}}function bl(i,r){let l=0;if(r.length<1e4)i.push(...r);else for(;l<r.length;)i.push(...r.slice(l,l+1e4)),l+=1e4}function Hp(i){const r={};let l=-1,u,c,h,f,m,p,d;const b=new bb(i);for(;++l<b.length;){for(;l in r;)l=r[l];if(u=b.get(l),l&&u[1].type==="chunkFlow"&&b.get(l-1)[1].type==="listItemPrefix"&&(p=u[1]._tokenizer.events,h=0,h<p.length&&p[h][1].type==="lineEndingBlank"&&(h+=2),h<p.length&&p[h][1].type==="content"))for(;++h<p.length&&p[h][1].type!=="content";)p[h][1].type==="chunkText"&&(p[h][1]._isInFirstContentOfListItem=!0,h++);if(u[0]==="enter")u[1].contentType&&(Object.assign(r,vb(b,l)),l=r[l],d=!0);else if(u[1]._container){for(h=l,c=void 0;h--;)if(f=b.get(h),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(c&&(b.get(c)[1].type="lineEndingBlank"),f[1].type="lineEnding",c=h);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;c&&(u[1].end={...b.get(c)[1].start},m=b.slice(c,l),m.unshift(u),b.splice(c,l-c+1,m))}}return Ut(i,0,Number.POSITIVE_INFINITY,b.slice(0)),!d}function vb(i,r){const l=i.get(r)[1],u=i.get(r)[2];let c=r-1;const h=[];let f=l._tokenizer;f||(f=u.parser[l.contentType](l.start),l._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const m=f.events,p=[],d={};let b,y,D=-1,w=l,x=0,j=0;const V=[j];for(;w;){for(;i.get(++c)[1]!==w;);h.push(c),w._tokenizer||(b=u.sliceStream(w),w.next||b.push(null),y&&f.defineSkip(w.start),w._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(b),w._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),y=w,w=w.next}for(w=l;++D<m.length;)m[D][0]==="exit"&&m[D-1][0]==="enter"&&m[D][1].type===m[D-1][1].type&&m[D][1].start.line!==m[D][1].end.line&&(j=D+1,V.push(j),w._tokenizer=void 0,w.previous=void 0,w=w.next);for(f.events=[],w?(w._tokenizer=void 0,w.previous=void 0):V.pop(),D=V.length;D--;){const M=m.slice(V[D],V[D+1]),I=h.pop();p.push([I,I+M.length-1]),i.splice(I,2,M)}for(p.reverse(),D=-1;++D<p.length;)d[x+p[D][0]]=x+p[D][1],x+=p[D][1]-p[D][0]-1;return d}const wb={resolve:Ab,tokenize:Sb},Db={partial:!0,tokenize:Eb};function Ab(i){return Hp(i),i}function Sb(i,r){let l;return u;function u(m){return i.enter("content"),l=i.enter("chunkContent",{contentType:"content"}),c(m)}function c(m){return m===null?h(m):ce(m)?i.check(Db,f,h)(m):(i.consume(m),c)}function h(m){return i.exit("chunkContent"),i.exit("content"),r(m)}function f(m){return i.consume(m),i.exit("chunkContent"),l.next=i.enter("chunkContent",{contentType:"content",previous:l}),l=l.next,c}}function Eb(i,r,l){const u=this;return c;function c(f){return i.exit("chunkContent"),i.enter("lineEnding"),i.consume(f),i.exit("lineEnding"),Fe(i,h,"linePrefix")}function h(f){if(f===null||ce(f))return l(f);const m=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?r(f):i.interrupt(u.parser.constructs.flow,l,r)(f)}}function qp(i,r,l,u,c,h,f,m,p){const d=p||Number.POSITIVE_INFINITY;let b=0;return y;function y(M){return M===60?(i.enter(u),i.enter(c),i.enter(h),i.consume(M),i.exit(h),D):M===null||M===32||M===41||$r(M)?l(M):(i.enter(u),i.enter(f),i.enter(m),i.enter("chunkString",{contentType:"string"}),j(M))}function D(M){return M===62?(i.enter(h),i.consume(M),i.exit(h),i.exit(c),i.exit(u),r):(i.enter(m),i.enter("chunkString",{contentType:"string"}),w(M))}function w(M){return M===62?(i.exit("chunkString"),i.exit(m),D(M)):M===null||M===60||ce(M)?l(M):(i.consume(M),M===92?x:w)}function x(M){return M===60||M===62||M===92?(i.consume(M),w):w(M)}function j(M){return!b&&(M===null||M===41||qe(M))?(i.exit("chunkString"),i.exit(m),i.exit(f),i.exit(u),r(M)):b<d&&M===40?(i.consume(M),b++,j):M===41?(i.consume(M),b--,j):M===null||M===32||M===40||$r(M)?l(M):(i.consume(M),M===92?V:j)}function V(M){return M===40||M===41||M===92?(i.consume(M),j):j(M)}}function Gp(i,r,l,u,c,h){const f=this;let m=0,p;return d;function d(w){return i.enter(u),i.enter(c),i.consume(w),i.exit(c),i.enter(h),b}function b(w){return m>999||w===null||w===91||w===93&&!p||w===94&&!m&&"_hiddenFootnoteSupport"in f.parser.constructs?l(w):w===93?(i.exit(h),i.enter(c),i.consume(w),i.exit(c),i.exit(u),r):ce(w)?(i.enter("lineEnding"),i.consume(w),i.exit("lineEnding"),b):(i.enter("chunkString",{contentType:"string"}),y(w))}function y(w){return w===null||w===91||w===93||ce(w)||m++>999?(i.exit("chunkString"),b(w)):(i.consume(w),p||(p=!Ee(w)),w===92?D:y)}function D(w){return w===91||w===92||w===93?(i.consume(w),m++,y):y(w)}}function Yp(i,r,l,u,c,h){let f;return m;function m(D){return D===34||D===39||D===40?(i.enter(u),i.enter(c),i.consume(D),i.exit(c),f=D===40?41:D,p):l(D)}function p(D){return D===f?(i.enter(c),i.consume(D),i.exit(c),i.exit(u),r):(i.enter(h),d(D))}function d(D){return D===f?(i.exit(h),p(f)):D===null?l(D):ce(D)?(i.enter("lineEnding"),i.consume(D),i.exit("lineEnding"),Fe(i,d,"linePrefix")):(i.enter("chunkString",{contentType:"string"}),b(D))}function b(D){return D===f||D===null||ce(D)?(i.exit("chunkString"),d(D)):(i.consume(D),D===92?y:b)}function y(D){return D===f||D===92?(i.consume(D),b):b(D)}}function Dl(i,r){let l;return u;function u(c){return ce(c)?(i.enter("lineEnding"),i.consume(c),i.exit("lineEnding"),l=!0,u):Ee(c)?Fe(i,u,l?"linePrefix":"lineSuffix")(c):r(c)}}const kb={name:"definition",tokenize:xb},Tb={partial:!0,tokenize:Cb};function xb(i,r,l){const u=this;let c;return h;function h(w){return i.enter("definition"),f(w)}function f(w){return Gp.call(u,i,m,l,"definitionLabel","definitionLabelMarker","definitionLabelString")(w)}function m(w){return c=tn(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),w===58?(i.enter("definitionMarker"),i.consume(w),i.exit("definitionMarker"),p):l(w)}function p(w){return qe(w)?Dl(i,d)(w):d(w)}function d(w){return qp(i,b,l,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(w)}function b(w){return i.attempt(Tb,y,y)(w)}function y(w){return Ee(w)?Fe(i,D,"whitespace")(w):D(w)}function D(w){return w===null||ce(w)?(i.exit("definition"),u.parser.defined.push(c),r(w)):l(w)}}function Cb(i,r,l){return u;function u(m){return qe(m)?Dl(i,c)(m):l(m)}function c(m){return Yp(i,h,l,"definitionTitle","definitionTitleMarker","definitionTitleString")(m)}function h(m){return Ee(m)?Fe(i,f,"whitespace")(m):f(m)}function f(m){return m===null||ce(m)?r(m):l(m)}}const Fb={name:"hardBreakEscape",tokenize:zb};function zb(i,r,l){return u;function u(h){return i.enter("hardBreakEscape"),i.consume(h),c}function c(h){return ce(h)?(i.exit("hardBreakEscape"),r(h)):l(h)}}const Mb={name:"headingAtx",resolve:Bb,tokenize:Ob};function Bb(i,r){let l=i.length-2,u=3,c,h;return i[u][1].type==="whitespace"&&(u+=2),l-2>u&&i[l][1].type==="whitespace"&&(l-=2),i[l][1].type==="atxHeadingSequence"&&(u===l-1||l-4>u&&i[l-2][1].type==="whitespace")&&(l-=u+1===l?2:4),l>u&&(c={type:"atxHeadingText",start:i[u][1].start,end:i[l][1].end},h={type:"chunkText",start:i[u][1].start,end:i[l][1].end,contentType:"text"},Ut(i,u,l-u+1,[["enter",c,r],["enter",h,r],["exit",h,r],["exit",c,r]])),i}function Ob(i,r,l){let u=0;return c;function c(b){return i.enter("atxHeading"),h(b)}function h(b){return i.enter("atxHeadingSequence"),f(b)}function f(b){return b===35&&u++<6?(i.consume(b),f):b===null||qe(b)?(i.exit("atxHeadingSequence"),m(b)):l(b)}function m(b){return b===35?(i.enter("atxHeadingSequence"),p(b)):b===null||ce(b)?(i.exit("atxHeading"),r(b)):Ee(b)?Fe(i,m,"whitespace")(b):(i.enter("atxHeadingText"),d(b))}function p(b){return b===35?(i.consume(b),p):(i.exit("atxHeadingSequence"),m(b))}function d(b){return b===null||b===35||qe(b)?(i.exit("atxHeadingText"),m(b)):(i.consume(b),d)}}const _b=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Qm=["pre","script","style","textarea"],Ib={concrete:!0,name:"htmlFlow",resolveTo:Ub,tokenize:Lb},Rb={partial:!0,tokenize:Hb},Nb={partial:!0,tokenize:jb};function Ub(i){let r=i.length;for(;r--&&!(i[r][0]==="enter"&&i[r][1].type==="htmlFlow"););return r>1&&i[r-2][1].type==="linePrefix"&&(i[r][1].start=i[r-2][1].start,i[r+1][1].start=i[r-2][1].start,i.splice(r-2,2)),i}function Lb(i,r,l){const u=this;let c,h,f,m,p;return d;function d(A){return b(A)}function b(A){return i.enter("htmlFlow"),i.enter("htmlFlowData"),i.consume(A),y}function y(A){return A===33?(i.consume(A),D):A===47?(i.consume(A),h=!0,j):A===63?(i.consume(A),c=3,u.interrupt?r:S):bt(A)?(i.consume(A),f=String.fromCharCode(A),V):l(A)}function D(A){return A===45?(i.consume(A),c=2,w):A===91?(i.consume(A),c=5,m=0,x):bt(A)?(i.consume(A),c=4,u.interrupt?r:S):l(A)}function w(A){return A===45?(i.consume(A),u.interrupt?r:S):l(A)}function x(A){const $="CDATA[";return A===$.charCodeAt(m++)?(i.consume(A),m===$.length?u.interrupt?r:ee:x):l(A)}function j(A){return bt(A)?(i.consume(A),f=String.fromCharCode(A),V):l(A)}function V(A){if(A===null||A===47||A===62||qe(A)){const $=A===47,he=f.toLowerCase();return!$&&!h&&Qm.includes(he)?(c=1,u.interrupt?r(A):ee(A)):_b.includes(f.toLowerCase())?(c=6,$?(i.consume(A),M):u.interrupt?r(A):ee(A)):(c=7,u.interrupt&&!u.parser.lazy[u.now().line]?l(A):h?I(A):R(A))}return A===45||dt(A)?(i.consume(A),f+=String.fromCharCode(A),V):l(A)}function M(A){return A===62?(i.consume(A),u.interrupt?r:ee):l(A)}function I(A){return Ee(A)?(i.consume(A),I):N(A)}function R(A){return A===47?(i.consume(A),N):A===58||A===95||bt(A)?(i.consume(A),W):Ee(A)?(i.consume(A),R):N(A)}function W(A){return A===45||A===46||A===58||A===95||dt(A)?(i.consume(A),W):P(A)}function P(A){return A===61?(i.consume(A),_):Ee(A)?(i.consume(A),P):R(A)}function _(A){return A===null||A===60||A===61||A===62||A===96?l(A):A===34||A===39?(i.consume(A),p=A,J):Ee(A)?(i.consume(A),_):ue(A)}function J(A){return A===p?(i.consume(A),p=null,de):A===null||ce(A)?l(A):(i.consume(A),J)}function ue(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||qe(A)?P(A):(i.consume(A),ue)}function de(A){return A===47||A===62||Ee(A)?R(A):l(A)}function N(A){return A===62?(i.consume(A),te):l(A)}function te(A){return A===null||ce(A)?ee(A):Ee(A)?(i.consume(A),te):l(A)}function ee(A){return A===45&&c===2?(i.consume(A),O):A===60&&c===1?(i.consume(A),X):A===62&&c===4?(i.consume(A),k):A===63&&c===3?(i.consume(A),S):A===93&&c===5?(i.consume(A),ve):ce(A)&&(c===6||c===7)?(i.exit("htmlFlowData"),i.check(Rb,H,we)(A)):A===null||ce(A)?(i.exit("htmlFlowData"),we(A)):(i.consume(A),ee)}function we(A){return i.check(Nb,ie,H)(A)}function ie(A){return i.enter("lineEnding"),i.consume(A),i.exit("lineEnding"),Z}function Z(A){return A===null||ce(A)?we(A):(i.enter("htmlFlowData"),ee(A))}function O(A){return A===45?(i.consume(A),S):ee(A)}function X(A){return A===47?(i.consume(A),f="",le):ee(A)}function le(A){if(A===62){const $=f.toLowerCase();return Qm.includes($)?(i.consume(A),k):ee(A)}return bt(A)&&f.length<8?(i.consume(A),f+=String.fromCharCode(A),le):ee(A)}function ve(A){return A===93?(i.consume(A),S):ee(A)}function S(A){return A===62?(i.consume(A),k):A===45&&c===2?(i.consume(A),S):ee(A)}function k(A){return A===null||ce(A)?(i.exit("htmlFlowData"),H(A)):(i.consume(A),k)}function H(A){return i.exit("htmlFlow"),r(A)}}function jb(i,r,l){const u=this;return c;function c(f){return ce(f)?(i.enter("lineEnding"),i.consume(f),i.exit("lineEnding"),h):l(f)}function h(f){return u.parser.lazy[u.now().line]?l(f):r(f)}}function Hb(i,r,l){return u;function u(c){return i.enter("lineEnding"),i.consume(c),i.exit("lineEnding"),i.attempt(Tl,r,l)}}const qb={name:"htmlText",tokenize:Gb};function Gb(i,r,l){const u=this;let c,h,f;return m;function m(S){return i.enter("htmlText"),i.enter("htmlTextData"),i.consume(S),p}function p(S){return S===33?(i.consume(S),d):S===47?(i.consume(S),P):S===63?(i.consume(S),R):bt(S)?(i.consume(S),ue):l(S)}function d(S){return S===45?(i.consume(S),b):S===91?(i.consume(S),h=0,x):bt(S)?(i.consume(S),I):l(S)}function b(S){return S===45?(i.consume(S),w):l(S)}function y(S){return S===null?l(S):S===45?(i.consume(S),D):ce(S)?(f=y,X(S)):(i.consume(S),y)}function D(S){return S===45?(i.consume(S),w):y(S)}function w(S){return S===62?O(S):S===45?D(S):y(S)}function x(S){const k="CDATA[";return S===k.charCodeAt(h++)?(i.consume(S),h===k.length?j:x):l(S)}function j(S){return S===null?l(S):S===93?(i.consume(S),V):ce(S)?(f=j,X(S)):(i.consume(S),j)}function V(S){return S===93?(i.consume(S),M):j(S)}function M(S){return S===62?O(S):S===93?(i.consume(S),M):j(S)}function I(S){return S===null||S===62?O(S):ce(S)?(f=I,X(S)):(i.consume(S),I)}function R(S){return S===null?l(S):S===63?(i.consume(S),W):ce(S)?(f=R,X(S)):(i.consume(S),R)}function W(S){return S===62?O(S):R(S)}function P(S){return bt(S)?(i.consume(S),_):l(S)}function _(S){return S===45||dt(S)?(i.consume(S),_):J(S)}function J(S){return ce(S)?(f=J,X(S)):Ee(S)?(i.consume(S),J):O(S)}function ue(S){return S===45||dt(S)?(i.consume(S),ue):S===47||S===62||qe(S)?de(S):l(S)}function de(S){return S===47?(i.consume(S),O):S===58||S===95||bt(S)?(i.consume(S),N):ce(S)?(f=de,X(S)):Ee(S)?(i.consume(S),de):O(S)}function N(S){return S===45||S===46||S===58||S===95||dt(S)?(i.consume(S),N):te(S)}function te(S){return S===61?(i.consume(S),ee):ce(S)?(f=te,X(S)):Ee(S)?(i.consume(S),te):de(S)}function ee(S){return S===null||S===60||S===61||S===62||S===96?l(S):S===34||S===39?(i.consume(S),c=S,we):ce(S)?(f=ee,X(S)):Ee(S)?(i.consume(S),ee):(i.consume(S),ie)}function we(S){return S===c?(i.consume(S),c=void 0,Z):S===null?l(S):ce(S)?(f=we,X(S)):(i.consume(S),we)}function ie(S){return S===null||S===34||S===39||S===60||S===61||S===96?l(S):S===47||S===62||qe(S)?de(S):(i.consume(S),ie)}function Z(S){return S===47||S===62||qe(S)?de(S):l(S)}function O(S){return S===62?(i.consume(S),i.exit("htmlTextData"),i.exit("htmlText"),r):l(S)}function X(S){return i.exit("htmlTextData"),i.enter("lineEnding"),i.consume(S),i.exit("lineEnding"),le}function le(S){return Ee(S)?Fe(i,ve,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):ve(S)}function ve(S){return i.enter("htmlTextData"),f(S)}}const mc={name:"labelEnd",resolveAll:Qb,resolveTo:Zb,tokenize:Kb},Yb={tokenize:Jb},Vb={tokenize:Wb},Xb={tokenize:$b};function Qb(i){let r=-1;const l=[];for(;++r<i.length;){const u=i[r][1];if(l.push(i[r]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const c=u.type==="labelImage"?4:2;u.type="data",r+=c}}return i.length!==l.length&&Ut(i,0,i.length,l),i}function Zb(i,r){let l=i.length,u=0,c,h,f,m;for(;l--;)if(c=i[l][1],h){if(c.type==="link"||c.type==="labelLink"&&c._inactive)break;i[l][0]==="enter"&&c.type==="labelLink"&&(c._inactive=!0)}else if(f){if(i[l][0]==="enter"&&(c.type==="labelImage"||c.type==="labelLink")&&!c._balanced&&(h=l,c.type!=="labelLink")){u=2;break}}else c.type==="labelEnd"&&(f=l);const p={type:i[h][1].type==="labelLink"?"link":"image",start:{...i[h][1].start},end:{...i[i.length-1][1].end}},d={type:"label",start:{...i[h][1].start},end:{...i[f][1].end}},b={type:"labelText",start:{...i[h+u+2][1].end},end:{...i[f-2][1].start}};return m=[["enter",p,r],["enter",d,r]],m=Jt(m,i.slice(h+1,h+u+3)),m=Jt(m,[["enter",b,r]]),m=Jt(m,iu(r.parser.constructs.insideSpan.null,i.slice(h+u+4,f-3),r)),m=Jt(m,[["exit",b,r],i[f-2],i[f-1],["exit",d,r]]),m=Jt(m,i.slice(f+1)),m=Jt(m,[["exit",p,r]]),Ut(i,h,i.length,m),i}function Kb(i,r,l){const u=this;let c=u.events.length,h,f;for(;c--;)if((u.events[c][1].type==="labelImage"||u.events[c][1].type==="labelLink")&&!u.events[c][1]._balanced){h=u.events[c][1];break}return m;function m(D){return h?h._inactive?y(D):(f=u.parser.defined.includes(tn(u.sliceSerialize({start:h.end,end:u.now()}))),i.enter("labelEnd"),i.enter("labelMarker"),i.consume(D),i.exit("labelMarker"),i.exit("labelEnd"),p):l(D)}function p(D){return D===40?i.attempt(Yb,b,f?b:y)(D):D===91?i.attempt(Vb,b,f?d:y)(D):f?b(D):y(D)}function d(D){return i.attempt(Xb,b,y)(D)}function b(D){return r(D)}function y(D){return h._balanced=!0,l(D)}}function Jb(i,r,l){return u;function u(y){return i.enter("resource"),i.enter("resourceMarker"),i.consume(y),i.exit("resourceMarker"),c}function c(y){return qe(y)?Dl(i,h)(y):h(y)}function h(y){return y===41?b(y):qp(i,f,m,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(y)}function f(y){return qe(y)?Dl(i,p)(y):b(y)}function m(y){return l(y)}function p(y){return y===34||y===39||y===40?Yp(i,d,l,"resourceTitle","resourceTitleMarker","resourceTitleString")(y):b(y)}function d(y){return qe(y)?Dl(i,b)(y):b(y)}function b(y){return y===41?(i.enter("resourceMarker"),i.consume(y),i.exit("resourceMarker"),i.exit("resource"),r):l(y)}}function Wb(i,r,l){const u=this;return c;function c(m){return Gp.call(u,i,h,f,"reference","referenceMarker","referenceString")(m)}function h(m){return u.parser.defined.includes(tn(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?r(m):l(m)}function f(m){return l(m)}}function $b(i,r,l){return u;function u(h){return i.enter("reference"),i.enter("referenceMarker"),i.consume(h),i.exit("referenceMarker"),c}function c(h){return h===93?(i.enter("referenceMarker"),i.consume(h),i.exit("referenceMarker"),i.exit("reference"),r):l(h)}}const Pb={name:"labelStartImage",resolveAll:mc.resolveAll,tokenize:ev};function ev(i,r,l){const u=this;return c;function c(m){return i.enter("labelImage"),i.enter("labelImageMarker"),i.consume(m),i.exit("labelImageMarker"),h}function h(m){return m===91?(i.enter("labelMarker"),i.consume(m),i.exit("labelMarker"),i.exit("labelImage"),f):l(m)}function f(m){return m===94&&"_hiddenFootnoteSupport"in u.parser.constructs?l(m):r(m)}}const tv={name:"labelStartLink",resolveAll:mc.resolveAll,tokenize:nv};function nv(i,r,l){const u=this;return c;function c(f){return i.enter("labelLink"),i.enter("labelMarker"),i.consume(f),i.exit("labelMarker"),i.exit("labelLink"),h}function h(f){return f===94&&"_hiddenFootnoteSupport"in u.parser.constructs?l(f):r(f)}}const _s={name:"lineEnding",tokenize:iv};function iv(i,r){return l;function l(u){return i.enter("lineEnding"),i.consume(u),i.exit("lineEnding"),Fe(i,r,"linePrefix")}}const Wr={name:"thematicBreak",tokenize:av};function av(i,r,l){let u=0,c;return h;function h(d){return i.enter("thematicBreak"),f(d)}function f(d){return c=d,m(d)}function m(d){return d===c?(i.enter("thematicBreakSequence"),p(d)):u>=3&&(d===null||ce(d))?(i.exit("thematicBreak"),r(d)):l(d)}function p(d){return d===c?(i.consume(d),u++,p):(i.exit("thematicBreakSequence"),Ee(d)?Fe(i,m,"whitespace")(d):m(d))}}const xt={continuation:{tokenize:ov},exit:cv,name:"list",tokenize:uv},lv={partial:!0,tokenize:fv},rv={partial:!0,tokenize:sv};function uv(i,r,l){const u=this,c=u.events[u.events.length-1];let h=c&&c[1].type==="linePrefix"?c[2].sliceSerialize(c[1],!0).length:0,f=0;return m;function m(w){const x=u.containerState.type||(w===42||w===43||w===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!u.containerState.marker||w===u.containerState.marker:$s(w)){if(u.containerState.type||(u.containerState.type=x,i.enter(x,{_container:!0})),x==="listUnordered")return i.enter("listItemPrefix"),w===42||w===45?i.check(Wr,l,d)(w):d(w);if(!u.interrupt||w===49)return i.enter("listItemPrefix"),i.enter("listItemValue"),p(w)}return l(w)}function p(w){return $s(w)&&++f<10?(i.consume(w),p):(!u.interrupt||f<2)&&(u.containerState.marker?w===u.containerState.marker:w===41||w===46)?(i.exit("listItemValue"),d(w)):l(w)}function d(w){return i.enter("listItemMarker"),i.consume(w),i.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||w,i.check(Tl,u.interrupt?l:b,i.attempt(lv,D,y))}function b(w){return u.containerState.initialBlankLine=!0,h++,D(w)}function y(w){return Ee(w)?(i.enter("listItemPrefixWhitespace"),i.consume(w),i.exit("listItemPrefixWhitespace"),D):l(w)}function D(w){return u.containerState.size=h+u.sliceSerialize(i.exit("listItemPrefix"),!0).length,r(w)}}function ov(i,r,l){const u=this;return u.containerState._closeFlow=void 0,i.check(Tl,c,h);function c(m){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Fe(i,r,"listItemIndent",u.containerState.size+1)(m)}function h(m){return u.containerState.furtherBlankLines||!Ee(m)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,f(m)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,i.attempt(rv,r,f)(m))}function f(m){return u.containerState._closeFlow=!0,u.interrupt=void 0,Fe(i,i.attempt(xt,r,l),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m)}}function sv(i,r,l){const u=this;return Fe(i,c,"listItemIndent",u.containerState.size+1);function c(h){const f=u.events[u.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===u.containerState.size?r(h):l(h)}}function cv(i){i.exit(this.containerState.type)}function fv(i,r,l){const u=this;return Fe(i,c,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function c(h){const f=u.events[u.events.length-1];return!Ee(h)&&f&&f[1].type==="listItemPrefixWhitespace"?r(h):l(h)}}const Zm={name:"setextUnderline",resolveTo:hv,tokenize:dv};function hv(i,r){let l=i.length,u,c,h;for(;l--;)if(i[l][0]==="enter"){if(i[l][1].type==="content"){u=l;break}i[l][1].type==="paragraph"&&(c=l)}else i[l][1].type==="content"&&i.splice(l,1),!h&&i[l][1].type==="definition"&&(h=l);const f={type:"setextHeading",start:{...i[u][1].start},end:{...i[i.length-1][1].end}};return i[c][1].type="setextHeadingText",h?(i.splice(c,0,["enter",f,r]),i.splice(h+1,0,["exit",i[u][1],r]),i[u][1].end={...i[h][1].end}):i[u][1]=f,i.push(["exit",f,r]),i}function dv(i,r,l){const u=this;let c;return h;function h(d){let b=u.events.length,y;for(;b--;)if(u.events[b][1].type!=="lineEnding"&&u.events[b][1].type!=="linePrefix"&&u.events[b][1].type!=="content"){y=u.events[b][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||y)?(i.enter("setextHeadingLine"),c=d,f(d)):l(d)}function f(d){return i.enter("setextHeadingLineSequence"),m(d)}function m(d){return d===c?(i.consume(d),m):(i.exit("setextHeadingLineSequence"),Ee(d)?Fe(i,p,"lineSuffix")(d):p(d))}function p(d){return d===null||ce(d)?(i.exit("setextHeadingLine"),r(d)):l(d)}}const mv={tokenize:pv};function pv(i){const r=this,l=i.attempt(Tl,u,i.attempt(this.parser.constructs.flowInitial,c,Fe(i,i.attempt(this.parser.constructs.flow,c,i.attempt(wb,c)),"linePrefix")));return l;function u(h){if(h===null){i.consume(h);return}return i.enter("lineEndingBlank"),i.consume(h),i.exit("lineEndingBlank"),r.currentConstruct=void 0,l}function c(h){if(h===null){i.consume(h);return}return i.enter("lineEnding"),i.consume(h),i.exit("lineEnding"),r.currentConstruct=void 0,l}}const gv={resolveAll:Xp()},yv=Vp("string"),bv=Vp("text");function Vp(i){return{resolveAll:Xp(i==="text"?vv:void 0),tokenize:r};function r(l){const u=this,c=this.parser.constructs[i],h=l.attempt(c,f,m);return f;function f(b){return d(b)?h(b):m(b)}function m(b){if(b===null){l.consume(b);return}return l.enter("data"),l.consume(b),p}function p(b){return d(b)?(l.exit("data"),h(b)):(l.consume(b),p)}function d(b){if(b===null)return!0;const y=c[b];let D=-1;if(y)for(;++D<y.length;){const w=y[D];if(!w.previous||w.previous.call(u,u.previous))return!0}return!1}}}function Xp(i){return r;function r(l,u){let c=-1,h;for(;++c<=l.length;)h===void 0?l[c]&&l[c][1].type==="data"&&(h=c,c++):(!l[c]||l[c][1].type!=="data")&&(c!==h+2&&(l[h][1].end=l[c-1][1].end,l.splice(h+2,c-h-2),c=h+2),h=void 0);return i?i(l,u):l}}function vv(i,r){let l=0;for(;++l<=i.length;)if((l===i.length||i[l][1].type==="lineEnding")&&i[l-1][1].type==="data"){const u=i[l-1][1],c=r.sliceStream(u);let h=c.length,f=-1,m=0,p;for(;h--;){const d=c[h];if(typeof d=="string"){for(f=d.length;d.charCodeAt(f-1)===32;)m++,f--;if(f)break;f=-1}else if(d===-2)p=!0,m++;else if(d!==-1){h++;break}}if(r._contentTypeTextTrailing&&l===i.length&&(m=0),m){const d={type:l===i.length||p||m<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:h?f:u.start._bufferIndex+f,_index:u.start._index+h,line:u.end.line,column:u.end.column-m,offset:u.end.offset-m},end:{...u.end}};u.end={...d.start},u.start.offset===u.end.offset?Object.assign(u,d):(i.splice(l,0,["enter",d,r],["exit",d,r]),l+=2)}l++}return i}const wv={42:xt,43:xt,45:xt,48:xt,49:xt,50:xt,51:xt,52:xt,53:xt,54:xt,55:xt,56:xt,57:xt,62:Up},Dv={91:kb},Av={[-2]:Os,[-1]:Os,32:Os},Sv={35:Mb,42:Wr,45:[Zm,Wr],60:Ib,61:Zm,95:Wr,96:Xm,126:Xm},Ev={38:jp,92:Lp},kv={[-5]:_s,[-4]:_s,[-3]:_s,33:Pb,38:jp,42:Ps,60:[tb,qb],91:tv,92:[Fb,Lp],93:mc,95:Ps,96:mb},Tv={null:[Ps,gv]},xv={null:[42,95]},Cv={null:[]},Fv=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:xv,contentInitial:Dv,disable:Cv,document:wv,flow:Sv,flowInitial:Av,insideSpan:Tv,string:Ev,text:kv},Symbol.toStringTag,{value:"Module"}));function zv(i,r,l){let u={_bufferIndex:-1,_index:0,line:l&&l.line||1,column:l&&l.column||1,offset:l&&l.offset||0};const c={},h=[];let f=[],m=[];const p={attempt:J(P),check:J(_),consume:I,enter:R,exit:W,interrupt:J(_,{interrupt:!0})},d={code:null,containerState:{},defineSkip:j,events:[],now:x,parser:i,previous:null,sliceSerialize:D,sliceStream:w,write:y};let b=r.tokenize.call(d,p);return r.resolveAll&&h.push(r),d;function y(te){return f=Jt(f,te),V(),f[f.length-1]!==null?[]:(ue(r,0),d.events=iu(h,d.events,d),d.events)}function D(te,ee){return Bv(w(te),ee)}function w(te){return Mv(f,te)}function x(){const{_bufferIndex:te,_index:ee,line:we,column:ie,offset:Z}=u;return{_bufferIndex:te,_index:ee,line:we,column:ie,offset:Z}}function j(te){c[te.line]=te.column,N()}function V(){let te;for(;u._index<f.length;){const ee=f[u._index];if(typeof ee=="string")for(te=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===te&&u._bufferIndex<ee.length;)M(ee.charCodeAt(u._bufferIndex));else M(ee)}}function M(te){b=b(te)}function I(te){ce(te)?(u.line++,u.column=1,u.offset+=te===-3?2:1,N()):te!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===f[u._index].length&&(u._bufferIndex=-1,u._index++)),d.previous=te}function R(te,ee){const we=ee||{};return we.type=te,we.start=x(),d.events.push(["enter",we,d]),m.push(we),we}function W(te){const ee=m.pop();return ee.end=x(),d.events.push(["exit",ee,d]),ee}function P(te,ee){ue(te,ee.from)}function _(te,ee){ee.restore()}function J(te,ee){return we;function we(ie,Z,O){let X,le,ve,S;return Array.isArray(ie)?H(ie):"tokenize"in ie?H([ie]):k(ie);function k(oe){return ke;function ke(Xe){const Re=Xe!==null&&oe[Xe],Lt=Xe!==null&&oe.null,sn=[...Array.isArray(Re)?Re:Re?[Re]:[],...Array.isArray(Lt)?Lt:Lt?[Lt]:[]];return H(sn)(Xe)}}function H(oe){return X=oe,le=0,oe.length===0?O:A(oe[le])}function A(oe){return ke;function ke(Xe){return S=de(),ve=oe,oe.partial||(d.currentConstruct=oe),oe.name&&d.parser.constructs.disable.null.includes(oe.name)?he():oe.tokenize.call(ee?Object.assign(Object.create(d),ee):d,p,$,he)(Xe)}}function $(oe){return te(ve,S),Z}function he(oe){return S.restore(),++le<X.length?A(X[le]):O}}}function ue(te,ee){te.resolveAll&&!h.includes(te)&&h.push(te),te.resolve&&Ut(d.events,ee,d.events.length-ee,te.resolve(d.events.slice(ee),d)),te.resolveTo&&(d.events=te.resolveTo(d.events,d))}function de(){const te=x(),ee=d.previous,we=d.currentConstruct,ie=d.events.length,Z=Array.from(m);return{from:ie,restore:O};function O(){u=te,d.previous=ee,d.currentConstruct=we,d.events.length=ie,m=Z,N()}}function N(){u.line in c&&u.column<2&&(u.column=c[u.line],u.offset+=c[u.line]-1)}}function Mv(i,r){const l=r.start._index,u=r.start._bufferIndex,c=r.end._index,h=r.end._bufferIndex;let f;if(l===c)f=[i[l].slice(u,h)];else{if(f=i.slice(l,c),u>-1){const m=f[0];typeof m=="string"?f[0]=m.slice(u):f.shift()}h>0&&f.push(i[c].slice(0,h))}return f}function Bv(i,r){let l=-1;const u=[];let c;for(;++l<i.length;){const h=i[l];let f;if(typeof h=="string")f=h;else switch(h){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=r?" ":"	";break}case-1:{if(!r&&c)continue;f=" ";break}default:f=String.fromCharCode(h)}c=h===-2,u.push(f)}return u.join("")}function Ov(i){const u={constructs:Rp([Fv,...(i||{}).extensions||[]]),content:c(Z1),defined:[],document:c(J1),flow:c(mv),lazy:{},string:c(yv),text:c(bv)};return u;function c(h){return f;function f(m){return zv(u,h,m)}}}function _v(i){for(;!Hp(i););return i}const Km=/[\0\t\n\r]/g;function Iv(){let i=1,r="",l=!0,u;return c;function c(h,f,m){const p=[];let d,b,y,D,w;for(h=r+(typeof h=="string"?h.toString():new TextDecoder(f||void 0).decode(h)),y=0,r="",l&&(h.charCodeAt(0)===65279&&y++,l=void 0);y<h.length;){if(Km.lastIndex=y,d=Km.exec(h),D=d&&d.index!==void 0?d.index:h.length,w=h.charCodeAt(D),!d){r=h.slice(y);break}if(w===10&&y===D&&u)p.push(-3),u=void 0;else switch(u&&(p.push(-5),u=void 0),y<D&&(p.push(h.slice(y,D)),i+=D-y),w){case 0:{p.push(65533),i++;break}case 9:{for(b=Math.ceil(i/4)*4,p.push(-2);i++<b;)p.push(-1);break}case 10:{p.push(-4),i=1;break}default:u=!0,i=1}y=D+1}return m&&(u&&p.push(-5),r&&p.push(r),p.push(null)),p}}const Rv=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Nv(i){return i.replace(Rv,Uv)}function Uv(i,r,l){if(r)return r;if(l.charCodeAt(0)===35){const c=l.charCodeAt(1),h=c===120||c===88;return Np(l.slice(h?2:1),h?16:10)}return dc(l)||i}const Qp={}.hasOwnProperty;function Lv(i,r,l){return r&&typeof r=="object"&&(l=r,r=void 0),jv(l)(_v(Ov(l).document().write(Iv()(i,r,!0))))}function jv(i){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:h(Ci),autolinkProtocol:de,autolinkEmail:de,atxHeading:h(Ti),blockQuote:h(Lt),characterEscape:de,characterReference:de,codeFenced:h(sn),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:h(sn,f),codeText:h(Da,f),codeTextData:de,data:de,codeFlowValue:de,definition:h(Cl),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:h(cn),hardBreakEscape:h(xi),hardBreakTrailing:h(xi),htmlFlow:h(Fl,f),htmlFlowData:de,htmlText:h(Fl,f),htmlTextData:de,image:h(zl),label:f,link:h(Ci),listItem:h(Aa),listItemValue:D,listOrdered:h(Fi,y),listUnordered:h(Fi),paragraph:h(ou),reference:A,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:h(Ti),strong:h(su),thematicBreak:h(cu)},exit:{atxHeading:p(),atxHeadingSequence:P,autolink:p(),autolinkEmail:Re,autolinkProtocol:Xe,blockQuote:p(),characterEscapeValue:N,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:oe,characterReference:ke,codeFenced:p(V),codeFencedFence:j,codeFencedFenceInfo:w,codeFencedFenceMeta:x,codeFlowValue:N,codeIndented:p(M),codeText:p(Z),codeTextData:N,data:N,definition:p(),definitionDestinationString:W,definitionLabelString:I,definitionTitleString:R,emphasis:p(),hardBreakEscape:p(ee),hardBreakTrailing:p(ee),htmlFlow:p(we),htmlFlowData:N,htmlText:p(ie),htmlTextData:N,image:p(X),label:ve,labelText:le,lineEnding:te,link:p(O),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:$,resourceDestinationString:S,resourceTitleString:k,resource:H,setextHeading:p(ue),setextHeadingLineSequence:J,setextHeadingText:_,strong:p(),thematicBreak:p()}};Zp(r,(i||{}).mdastExtensions||[]);const l={};return u;function u(q){let K={type:"root",children:[]};const me={stack:[K],tokenStack:[],config:r,enter:m,exit:d,buffer:f,resume:b,data:l},De=[];let Oe=-1;for(;++Oe<q.length;)if(q[Oe][1].type==="listOrdered"||q[Oe][1].type==="listUnordered")if(q[Oe][0]==="enter")De.push(Oe);else{const Ft=De.pop();Oe=c(q,Ft,Oe)}for(Oe=-1;++Oe<q.length;){const Ft=r[q[Oe][0]];Qp.call(Ft,q[Oe][1].type)&&Ft[q[Oe][1].type].call(Object.assign({sliceSerialize:q[Oe][2].sliceSerialize},me),q[Oe][1])}if(me.tokenStack.length>0){const Ft=me.tokenStack[me.tokenStack.length-1];(Ft[1]||Jm).call(me,void 0,Ft[0])}for(K.position={start:ni(q.length>0?q[0][1].start:{line:1,column:1,offset:0}),end:ni(q.length>0?q[q.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<r.transforms.length;)K=r.transforms[Oe](K)||K;return K}function c(q,K,me){let De=K-1,Oe=-1,Ft=!1,fn,gt,it,vt;for(;++De<=me;){const je=q[De];switch(je[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{je[0]==="enter"?Oe++:Oe--,vt=void 0;break}case"lineEndingBlank":{je[0]==="enter"&&(fn&&!vt&&!Oe&&!it&&(it=De),vt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:vt=void 0}if(!Oe&&je[0]==="enter"&&je[1].type==="listItemPrefix"||Oe===-1&&je[0]==="exit"&&(je[1].type==="listUnordered"||je[1].type==="listOrdered")){if(fn){let Mn=De;for(gt=void 0;Mn--;){const Wt=q[Mn];if(Wt[1].type==="lineEnding"||Wt[1].type==="lineEndingBlank"){if(Wt[0]==="exit")continue;gt&&(q[gt][1].type="lineEndingBlank",Ft=!0),Wt[1].type="lineEnding",gt=Mn}else if(!(Wt[1].type==="linePrefix"||Wt[1].type==="blockQuotePrefix"||Wt[1].type==="blockQuotePrefixWhitespace"||Wt[1].type==="blockQuoteMarker"||Wt[1].type==="listItemIndent"))break}it&&(!gt||it<gt)&&(fn._spread=!0),fn.end=Object.assign({},gt?q[gt][1].start:je[1].end),q.splice(gt||De,0,["exit",fn,je[2]]),De++,me++}if(je[1].type==="listItemPrefix"){const Mn={type:"listItem",_spread:!1,start:Object.assign({},je[1].start),end:void 0};fn=Mn,q.splice(De,0,["enter",Mn,je[2]]),De++,me++,it=void 0,vt=!0}}}return q[K][1]._spread=Ft,me}function h(q,K){return me;function me(De){m.call(this,q(De),De),K&&K.call(this,De)}}function f(){this.stack.push({type:"fragment",children:[]})}function m(q,K,me){this.stack[this.stack.length-1].children.push(q),this.stack.push(q),this.tokenStack.push([K,me||void 0]),q.position={start:ni(K.start),end:void 0}}function p(q){return K;function K(me){q&&q.call(this,me),d.call(this,me)}}function d(q,K){const me=this.stack.pop(),De=this.tokenStack.pop();if(De)De[0].type!==q.type&&(K?K.call(this,q,De[0]):(De[1]||Jm).call(this,q,De[0]));else throw new Error("Cannot close `"+q.type+"` ("+wl({start:q.start,end:q.end})+"): it’s not open");me.position.end=ni(q.end)}function b(){return hc(this.stack.pop())}function y(){this.data.expectingFirstListItemValue=!0}function D(q){if(this.data.expectingFirstListItemValue){const K=this.stack[this.stack.length-2];K.start=Number.parseInt(this.sliceSerialize(q),10),this.data.expectingFirstListItemValue=void 0}}function w(){const q=this.resume(),K=this.stack[this.stack.length-1];K.lang=q}function x(){const q=this.resume(),K=this.stack[this.stack.length-1];K.meta=q}function j(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function V(){const q=this.resume(),K=this.stack[this.stack.length-1];K.value=q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function M(){const q=this.resume(),K=this.stack[this.stack.length-1];K.value=q.replace(/(\r?\n|\r)$/g,"")}function I(q){const K=this.resume(),me=this.stack[this.stack.length-1];me.label=K,me.identifier=tn(this.sliceSerialize(q)).toLowerCase()}function R(){const q=this.resume(),K=this.stack[this.stack.length-1];K.title=q}function W(){const q=this.resume(),K=this.stack[this.stack.length-1];K.url=q}function P(q){const K=this.stack[this.stack.length-1];if(!K.depth){const me=this.sliceSerialize(q).length;K.depth=me}}function _(){this.data.setextHeadingSlurpLineEnding=!0}function J(q){const K=this.stack[this.stack.length-1];K.depth=this.sliceSerialize(q).codePointAt(0)===61?1:2}function ue(){this.data.setextHeadingSlurpLineEnding=void 0}function de(q){const me=this.stack[this.stack.length-1].children;let De=me[me.length-1];(!De||De.type!=="text")&&(De=pt(),De.position={start:ni(q.start),end:void 0},me.push(De)),this.stack.push(De)}function N(q){const K=this.stack.pop();K.value+=this.sliceSerialize(q),K.position.end=ni(q.end)}function te(q){const K=this.stack[this.stack.length-1];if(this.data.atHardBreak){const me=K.children[K.children.length-1];me.position.end=ni(q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(K.type)&&(de.call(this,q),N.call(this,q))}function ee(){this.data.atHardBreak=!0}function we(){const q=this.resume(),K=this.stack[this.stack.length-1];K.value=q}function ie(){const q=this.resume(),K=this.stack[this.stack.length-1];K.value=q}function Z(){const q=this.resume(),K=this.stack[this.stack.length-1];K.value=q}function O(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=K,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function X(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const K=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=K,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function le(q){const K=this.sliceSerialize(q),me=this.stack[this.stack.length-2];me.label=Nv(K),me.identifier=tn(K).toLowerCase()}function ve(){const q=this.stack[this.stack.length-1],K=this.resume(),me=this.stack[this.stack.length-1];if(this.data.inReference=!0,me.type==="link"){const De=q.children;me.children=De}else me.alt=K}function S(){const q=this.resume(),K=this.stack[this.stack.length-1];K.url=q}function k(){const q=this.resume(),K=this.stack[this.stack.length-1];K.title=q}function H(){this.data.inReference=void 0}function A(){this.data.referenceType="collapsed"}function $(q){const K=this.resume(),me=this.stack[this.stack.length-1];me.label=K,me.identifier=tn(this.sliceSerialize(q)).toLowerCase(),this.data.referenceType="full"}function he(q){this.data.characterReferenceType=q.type}function oe(q){const K=this.sliceSerialize(q),me=this.data.characterReferenceType;let De;me?(De=Np(K,me==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):De=dc(K);const Oe=this.stack[this.stack.length-1];Oe.value+=De}function ke(q){const K=this.stack.pop();K.position.end=ni(q.end)}function Xe(q){N.call(this,q);const K=this.stack[this.stack.length-1];K.url=this.sliceSerialize(q)}function Re(q){N.call(this,q);const K=this.stack[this.stack.length-1];K.url="mailto:"+this.sliceSerialize(q)}function Lt(){return{type:"blockquote",children:[]}}function sn(){return{type:"code",lang:null,meta:null,value:""}}function Da(){return{type:"inlineCode",value:""}}function Cl(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function cn(){return{type:"emphasis",children:[]}}function Ti(){return{type:"heading",depth:0,children:[]}}function xi(){return{type:"break"}}function Fl(){return{type:"html",value:""}}function zl(){return{type:"image",title:null,url:"",alt:null}}function Ci(){return{type:"link",title:null,url:"",children:[]}}function Fi(q){return{type:"list",ordered:q.type==="listOrdered",start:null,spread:q._spread,children:[]}}function Aa(q){return{type:"listItem",spread:q._spread,checked:null,children:[]}}function ou(){return{type:"paragraph",children:[]}}function su(){return{type:"strong",children:[]}}function pt(){return{type:"text",value:""}}function cu(){return{type:"thematicBreak"}}}function ni(i){return{line:i.line,column:i.column,offset:i.offset}}function Zp(i,r){let l=-1;for(;++l<r.length;){const u=r[l];Array.isArray(u)?Zp(i,u):Hv(i,u)}}function Hv(i,r){let l;for(l in r)if(Qp.call(r,l))switch(l){case"canContainEols":{const u=r[l];u&&i[l].push(...u);break}case"transforms":{const u=r[l];u&&i[l].push(...u);break}case"enter":case"exit":{const u=r[l];u&&Object.assign(i[l],u);break}}}function Jm(i,r){throw i?new Error("Cannot close `"+i.type+"` ("+wl({start:i.start,end:i.end})+"): a different token (`"+r.type+"`, "+wl({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+wl({start:r.start,end:r.end})+") is still open")}function qv(i){const r=this;r.parser=l;function l(u){return Lv(u,{...r.data("settings"),...i,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function Gv(i,r){const l={type:"element",tagName:"blockquote",properties:{},children:i.wrap(i.all(r),!0)};return i.patch(r,l),i.applyData(r,l)}function Yv(i,r){const l={type:"element",tagName:"br",properties:{},children:[]};return i.patch(r,l),[i.applyData(r,l),{type:"text",value:`
`}]}function Vv(i,r){const l=r.value?r.value+`
`:"",u={},c=r.lang?r.lang.split(/\s+/):[];c.length>0&&(u.className=["language-"+c[0]]);let h={type:"element",tagName:"code",properties:u,children:[{type:"text",value:l}]};return r.meta&&(h.data={meta:r.meta}),i.patch(r,h),h=i.applyData(r,h),h={type:"element",tagName:"pre",properties:{},children:[h]},i.patch(r,h),h}function Xv(i,r){const l={type:"element",tagName:"del",properties:{},children:i.all(r)};return i.patch(r,l),i.applyData(r,l)}function Qv(i,r){const l={type:"element",tagName:"em",properties:{},children:i.all(r)};return i.patch(r,l),i.applyData(r,l)}function Zv(i,r){const l=typeof i.options.clobberPrefix=="string"?i.options.clobberPrefix:"user-content-",u=String(r.identifier).toUpperCase(),c=wa(u.toLowerCase()),h=i.footnoteOrder.indexOf(u);let f,m=i.footnoteCounts.get(u);m===void 0?(m=0,i.footnoteOrder.push(u),f=i.footnoteOrder.length):f=h+1,m+=1,i.footnoteCounts.set(u,m);const p={type:"element",tagName:"a",properties:{href:"#"+l+"fn-"+c,id:l+"fnref-"+c+(m>1?"-"+m:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};i.patch(r,p);const d={type:"element",tagName:"sup",properties:{},children:[p]};return i.patch(r,d),i.applyData(r,d)}function Kv(i,r){const l={type:"element",tagName:"h"+r.depth,properties:{},children:i.all(r)};return i.patch(r,l),i.applyData(r,l)}function Jv(i,r){if(i.options.allowDangerousHtml){const l={type:"raw",value:r.value};return i.patch(r,l),i.applyData(r,l)}}function Kp(i,r){const l=r.referenceType;let u="]";if(l==="collapsed"?u+="[]":l==="full"&&(u+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+u}];const c=i.all(r),h=c[0];h&&h.type==="text"?h.value="["+h.value:c.unshift({type:"text",value:"["});const f=c[c.length-1];return f&&f.type==="text"?f.value+=u:c.push({type:"text",value:u}),c}function Wv(i,r){const l=String(r.identifier).toUpperCase(),u=i.definitionById.get(l);if(!u)return Kp(i,r);const c={src:wa(u.url||""),alt:r.alt};u.title!==null&&u.title!==void 0&&(c.title=u.title);const h={type:"element",tagName:"img",properties:c,children:[]};return i.patch(r,h),i.applyData(r,h)}function $v(i,r){const l={src:wa(r.url)};r.alt!==null&&r.alt!==void 0&&(l.alt=r.alt),r.title!==null&&r.title!==void 0&&(l.title=r.title);const u={type:"element",tagName:"img",properties:l,children:[]};return i.patch(r,u),i.applyData(r,u)}function Pv(i,r){const l={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};i.patch(r,l);const u={type:"element",tagName:"code",properties:{},children:[l]};return i.patch(r,u),i.applyData(r,u)}function ew(i,r){const l=String(r.identifier).toUpperCase(),u=i.definitionById.get(l);if(!u)return Kp(i,r);const c={href:wa(u.url||"")};u.title!==null&&u.title!==void 0&&(c.title=u.title);const h={type:"element",tagName:"a",properties:c,children:i.all(r)};return i.patch(r,h),i.applyData(r,h)}function tw(i,r){const l={href:wa(r.url)};r.title!==null&&r.title!==void 0&&(l.title=r.title);const u={type:"element",tagName:"a",properties:l,children:i.all(r)};return i.patch(r,u),i.applyData(r,u)}function nw(i,r,l){const u=i.all(r),c=l?iw(l):Jp(r),h={},f=[];if(typeof r.checked=="boolean"){const b=u[0];let y;b&&b.type==="element"&&b.tagName==="p"?y=b:(y={type:"element",tagName:"p",properties:{},children:[]},u.unshift(y)),y.children.length>0&&y.children.unshift({type:"text",value:" "}),y.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),h.className=["task-list-item"]}let m=-1;for(;++m<u.length;){const b=u[m];(c||m!==0||b.type!=="element"||b.tagName!=="p")&&f.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!c?f.push(...b.children):f.push(b)}const p=u[u.length-1];p&&(c||p.type!=="element"||p.tagName!=="p")&&f.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:h,children:f};return i.patch(r,d),i.applyData(r,d)}function iw(i){let r=!1;if(i.type==="list"){r=i.spread||!1;const l=i.children;let u=-1;for(;!r&&++u<l.length;)r=Jp(l[u])}return r}function Jp(i){const r=i.spread;return r??i.children.length>1}function aw(i,r){const l={},u=i.all(r);let c=-1;for(typeof r.start=="number"&&r.start!==1&&(l.start=r.start);++c<u.length;){const f=u[c];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){l.className=["contains-task-list"];break}}const h={type:"element",tagName:r.ordered?"ol":"ul",properties:l,children:i.wrap(u,!0)};return i.patch(r,h),i.applyData(r,h)}function lw(i,r){const l={type:"element",tagName:"p",properties:{},children:i.all(r)};return i.patch(r,l),i.applyData(r,l)}function rw(i,r){const l={type:"root",children:i.wrap(i.all(r))};return i.patch(r,l),i.applyData(r,l)}function uw(i,r){const l={type:"element",tagName:"strong",properties:{},children:i.all(r)};return i.patch(r,l),i.applyData(r,l)}function ow(i,r){const l=i.all(r),u=l.shift(),c=[];if(u){const f={type:"element",tagName:"thead",properties:{},children:i.wrap([u],!0)};i.patch(r.children[0],f),c.push(f)}if(l.length>0){const f={type:"element",tagName:"tbody",properties:{},children:i.wrap(l,!0)},m=oc(r.children[1]),p=Fp(r.children[r.children.length-1]);m&&p&&(f.position={start:m,end:p}),c.push(f)}const h={type:"element",tagName:"table",properties:{},children:i.wrap(c,!0)};return i.patch(r,h),i.applyData(r,h)}function sw(i,r,l){const u=l?l.children:void 0,h=(u?u.indexOf(r):1)===0?"th":"td",f=l&&l.type==="table"?l.align:void 0,m=f?f.length:r.children.length;let p=-1;const d=[];for(;++p<m;){const y=r.children[p],D={},w=f?f[p]:void 0;w&&(D.align=w);let x={type:"element",tagName:h,properties:D,children:[]};y&&(x.children=i.all(y),i.patch(y,x),x=i.applyData(y,x)),d.push(x)}const b={type:"element",tagName:"tr",properties:{},children:i.wrap(d,!0)};return i.patch(r,b),i.applyData(r,b)}function cw(i,r){const l={type:"element",tagName:"td",properties:{},children:i.all(r)};return i.patch(r,l),i.applyData(r,l)}const Wm=9,$m=32;function fw(i){const r=String(i),l=/\r?\n|\r/g;let u=l.exec(r),c=0;const h=[];for(;u;)h.push(Pm(r.slice(c,u.index),c>0,!0),u[0]),c=u.index+u[0].length,u=l.exec(r);return h.push(Pm(r.slice(c),c>0,!1)),h.join("")}function Pm(i,r,l){let u=0,c=i.length;if(r){let h=i.codePointAt(u);for(;h===Wm||h===$m;)u++,h=i.codePointAt(u)}if(l){let h=i.codePointAt(c-1);for(;h===Wm||h===$m;)c--,h=i.codePointAt(c-1)}return c>u?i.slice(u,c):""}function hw(i,r){const l={type:"text",value:fw(String(r.value))};return i.patch(r,l),i.applyData(r,l)}function dw(i,r){const l={type:"element",tagName:"hr",properties:{},children:[]};return i.patch(r,l),i.applyData(r,l)}const mw={blockquote:Gv,break:Yv,code:Vv,delete:Xv,emphasis:Qv,footnoteReference:Zv,heading:Kv,html:Jv,imageReference:Wv,image:$v,inlineCode:Pv,linkReference:ew,link:tw,listItem:nw,list:aw,paragraph:lw,root:rw,strong:uw,table:ow,tableCell:cw,tableRow:sw,text:hw,thematicBreak:dw,toml:Qr,yaml:Qr,definition:Qr,footnoteDefinition:Qr};function Qr(){}const Wp=-1,au=0,Al=1,Pr=2,pc=3,gc=4,yc=5,bc=6,$p=7,Pp=8,ep=typeof self=="object"?self:globalThis,pw=(i,r)=>{const l=(c,h)=>(i.set(h,c),c),u=c=>{if(i.has(c))return i.get(c);const[h,f]=r[c];switch(h){case au:case Wp:return l(f,c);case Al:{const m=l([],c);for(const p of f)m.push(u(p));return m}case Pr:{const m=l({},c);for(const[p,d]of f)m[u(p)]=u(d);return m}case pc:return l(new Date(f),c);case gc:{const{source:m,flags:p}=f;return l(new RegExp(m,p),c)}case yc:{const m=l(new Map,c);for(const[p,d]of f)m.set(u(p),u(d));return m}case bc:{const m=l(new Set,c);for(const p of f)m.add(u(p));return m}case $p:{const{name:m,message:p}=f;return l(new ep[m](p),c)}case Pp:return l(BigInt(f),c);case"BigInt":return l(Object(BigInt(f)),c);case"ArrayBuffer":return l(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:m}=new Uint8Array(f);return l(new DataView(m),f)}}return l(new ep[h](f),c)};return u},tp=i=>pw(new Map,i)(0),pa="",{toString:gw}={},{keys:yw}=Object,vl=i=>{const r=typeof i;if(r!=="object"||!i)return[au,r];const l=gw.call(i).slice(8,-1);switch(l){case"Array":return[Al,pa];case"Object":return[Pr,pa];case"Date":return[pc,pa];case"RegExp":return[gc,pa];case"Map":return[yc,pa];case"Set":return[bc,pa];case"DataView":return[Al,l]}return l.includes("Array")?[Al,l]:l.includes("Error")?[$p,l]:[Pr,l]},Zr=([i,r])=>i===au&&(r==="function"||r==="symbol"),bw=(i,r,l,u)=>{const c=(f,m)=>{const p=u.push(f)-1;return l.set(m,p),p},h=f=>{if(l.has(f))return l.get(f);let[m,p]=vl(f);switch(m){case au:{let b=f;switch(p){case"bigint":m=Pp,b=f.toString();break;case"function":case"symbol":if(i)throw new TypeError("unable to serialize "+p);b=null;break;case"undefined":return c([Wp],f)}return c([m,b],f)}case Al:{if(p){let D=f;return p==="DataView"?D=new Uint8Array(f.buffer):p==="ArrayBuffer"&&(D=new Uint8Array(f)),c([p,[...D]],f)}const b=[],y=c([m,b],f);for(const D of f)b.push(h(D));return y}case Pr:{if(p)switch(p){case"BigInt":return c([p,f.toString()],f);case"Boolean":case"Number":case"String":return c([p,f.valueOf()],f)}if(r&&"toJSON"in f)return h(f.toJSON());const b=[],y=c([m,b],f);for(const D of yw(f))(i||!Zr(vl(f[D])))&&b.push([h(D),h(f[D])]);return y}case pc:return c([m,f.toISOString()],f);case gc:{const{source:b,flags:y}=f;return c([m,{source:b,flags:y}],f)}case yc:{const b=[],y=c([m,b],f);for(const[D,w]of f)(i||!(Zr(vl(D))||Zr(vl(w))))&&b.push([h(D),h(w)]);return y}case bc:{const b=[],y=c([m,b],f);for(const D of f)(i||!Zr(vl(D)))&&b.push(h(D));return y}}const{message:d}=f;return c([m,{name:p,message:d}],f)};return h},np=(i,{json:r,lossy:l}={})=>{const u=[];return bw(!(r||l),!!r,new Map,u)(i),u},eu=typeof structuredClone=="function"?(i,r)=>r&&("json"in r||"lossy"in r)?tp(np(i,r)):structuredClone(i):(i,r)=>tp(np(i,r));function vw(i,r){const l=[{type:"text",value:"↩"}];return r>1&&l.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),l}function ww(i,r){return"Back to reference "+(i+1)+(r>1?"-"+r:"")}function Dw(i){const r=typeof i.options.clobberPrefix=="string"?i.options.clobberPrefix:"user-content-",l=i.options.footnoteBackContent||vw,u=i.options.footnoteBackLabel||ww,c=i.options.footnoteLabel||"Footnotes",h=i.options.footnoteLabelTagName||"h2",f=i.options.footnoteLabelProperties||{className:["sr-only"]},m=[];let p=-1;for(;++p<i.footnoteOrder.length;){const d=i.footnoteById.get(i.footnoteOrder[p]);if(!d)continue;const b=i.all(d),y=String(d.identifier).toUpperCase(),D=wa(y.toLowerCase());let w=0;const x=[],j=i.footnoteCounts.get(y);for(;j!==void 0&&++w<=j;){x.length>0&&x.push({type:"text",value:" "});let I=typeof l=="string"?l:l(p,w);typeof I=="string"&&(I={type:"text",value:I}),x.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+D+(w>1?"-"+w:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(p,w),className:["data-footnote-backref"]},children:Array.isArray(I)?I:[I]})}const V=b[b.length-1];if(V&&V.type==="element"&&V.tagName==="p"){const I=V.children[V.children.length-1];I&&I.type==="text"?I.value+=" ":V.children.push({type:"text",value:" "}),V.children.push(...x)}else b.push(...x);const M={type:"element",tagName:"li",properties:{id:r+"fn-"+D},children:i.wrap(b,!0)};i.patch(d,M),m.push(M)}if(m.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:h,properties:{...eu(f),id:"footnote-label"},children:[{type:"text",value:c}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:i.wrap(m,!0)},{type:"text",value:`
`}]}}const lu=(function(i){if(i==null)return kw;if(typeof i=="function")return ru(i);if(typeof i=="object")return Array.isArray(i)?Aw(i):Sw(i);if(typeof i=="string")return Ew(i);throw new Error("Expected function, string, or object as test")});function Aw(i){const r=[];let l=-1;for(;++l<i.length;)r[l]=lu(i[l]);return ru(u);function u(...c){let h=-1;for(;++h<r.length;)if(r[h].apply(this,c))return!0;return!1}}function Sw(i){const r=i;return ru(l);function l(u){const c=u;let h;for(h in i)if(c[h]!==r[h])return!1;return!0}}function Ew(i){return ru(r);function r(l){return l&&l.type===i}}function ru(i){return r;function r(l,u,c){return!!(Tw(l)&&i.call(this,l,typeof u=="number"?u:void 0,c||void 0))}}function kw(){return!0}function Tw(i){return i!==null&&typeof i=="object"&&"type"in i}const eg=[],xw=!0,ec=!1,Cw="skip";function tg(i,r,l,u){let c;typeof r=="function"&&typeof l!="function"?(u=l,l=r):c=r;const h=lu(c),f=u?-1:1;m(i,void 0,[])();function m(p,d,b){const y=p&&typeof p=="object"?p:{};if(typeof y.type=="string"){const w=typeof y.tagName=="string"?y.tagName:typeof y.name=="string"?y.name:void 0;Object.defineProperty(D,"name",{value:"node ("+(p.type+(w?"<"+w+">":""))+")"})}return D;function D(){let w=eg,x,j,V;if((!r||h(p,d,b[b.length-1]||void 0))&&(w=Fw(l(p,b)),w[0]===ec))return w;if("children"in p&&p.children){const M=p;if(M.children&&w[0]!==Cw)for(j=(u?M.children.length:-1)+f,V=b.concat(M);j>-1&&j<M.children.length;){const I=M.children[j];if(x=m(I,j,V)(),x[0]===ec)return x;j=typeof x[1]=="number"?x[1]:j+f}}return w}}}function Fw(i){return Array.isArray(i)?i:typeof i=="number"?[xw,i]:i==null?eg:[i]}function uu(i,r,l,u){let c,h,f;typeof r=="function"&&typeof l!="function"?(h=void 0,f=r,c=l):(h=r,f=l,c=u),tg(i,h,m,c);function m(p,d){const b=d[d.length-1],y=b?b.children.indexOf(p):void 0;return f(p,y,b)}}const tc={}.hasOwnProperty,zw={};function Mw(i,r){const l=r||zw,u=new Map,c=new Map,h=new Map,f={...mw,...l.handlers},m={all:d,applyData:Ow,definitionById:u,footnoteById:c,footnoteCounts:h,footnoteOrder:[],handlers:f,one:p,options:l,patch:Bw,wrap:Iw};return uu(i,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const y=b.type==="definition"?u:c,D=String(b.identifier).toUpperCase();y.has(D)||y.set(D,b)}}),m;function p(b,y){const D=b.type,w=m.handlers[D];if(tc.call(m.handlers,D)&&w)return w(m,b,y);if(m.options.passThrough&&m.options.passThrough.includes(D)){if("children"in b){const{children:j,...V}=b,M=eu(V);return M.children=m.all(b),M}return eu(b)}return(m.options.unknownHandler||_w)(m,b,y)}function d(b){const y=[];if("children"in b){const D=b.children;let w=-1;for(;++w<D.length;){const x=m.one(D[w],b);if(x){if(w&&D[w-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=ip(x.value)),!Array.isArray(x)&&x.type==="element")){const j=x.children[0];j&&j.type==="text"&&(j.value=ip(j.value))}Array.isArray(x)?y.push(...x):y.push(x)}}}return y}}function Bw(i,r){i.position&&(r.position=w1(i))}function Ow(i,r){let l=r;if(i&&i.data){const u=i.data.hName,c=i.data.hChildren,h=i.data.hProperties;if(typeof u=="string")if(l.type==="element")l.tagName=u;else{const f="children"in l?l.children:[l];l={type:"element",tagName:u,properties:{},children:f}}l.type==="element"&&h&&Object.assign(l.properties,eu(h)),"children"in l&&l.children&&c!==null&&c!==void 0&&(l.children=c)}return l}function _w(i,r){const l=r.data||{},u="value"in r&&!(tc.call(l,"hProperties")||tc.call(l,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:i.all(r)};return i.patch(r,u),i.applyData(r,u)}function Iw(i,r){const l=[];let u=-1;for(r&&l.push({type:"text",value:`
`});++u<i.length;)u&&l.push({type:"text",value:`
`}),l.push(i[u]);return r&&i.length>0&&l.push({type:"text",value:`
`}),l}function ip(i){let r=0,l=i.charCodeAt(r);for(;l===9||l===32;)r++,l=i.charCodeAt(r);return i.slice(r)}function ap(i,r){const l=Mw(i,r),u=l.one(i,void 0),c=Dw(l),h=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return c&&h.children.push({type:"text",value:`
`},c),h}function Rw(i,r){return i&&"run"in i?async function(l,u){const c=ap(l,{file:u,...r});await i.run(c,u)}:function(l,u){return ap(l,{file:u,...i||r})}}function lp(i){if(i)throw i}var Is,rp;function Nw(){if(rp)return Is;rp=1;var i=Object.prototype.hasOwnProperty,r=Object.prototype.toString,l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=function(d){return typeof Array.isArray=="function"?Array.isArray(d):r.call(d)==="[object Array]"},h=function(d){if(!d||r.call(d)!=="[object Object]")return!1;var b=i.call(d,"constructor"),y=d.constructor&&d.constructor.prototype&&i.call(d.constructor.prototype,"isPrototypeOf");if(d.constructor&&!b&&!y)return!1;var D;for(D in d);return typeof D>"u"||i.call(d,D)},f=function(d,b){l&&b.name==="__proto__"?l(d,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):d[b.name]=b.newValue},m=function(d,b){if(b==="__proto__")if(i.call(d,b)){if(u)return u(d,b).value}else return;return d[b]};return Is=function p(){var d,b,y,D,w,x,j=arguments[0],V=1,M=arguments.length,I=!1;for(typeof j=="boolean"&&(I=j,j=arguments[1]||{},V=2),(j==null||typeof j!="object"&&typeof j!="function")&&(j={});V<M;++V)if(d=arguments[V],d!=null)for(b in d)y=m(j,b),D=m(d,b),j!==D&&(I&&D&&(h(D)||(w=c(D)))?(w?(w=!1,x=y&&c(y)?y:[]):x=y&&h(y)?y:{},f(j,{name:b,newValue:p(I,x,D)})):typeof D<"u"&&f(j,{name:b,newValue:D}));return j},Is}var Uw=Nw();const Rs=Dp(Uw);function nc(i){if(typeof i!="object"||i===null)return!1;const r=Object.getPrototypeOf(i);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)}function Lw(){const i=[],r={run:l,use:u};return r;function l(...c){let h=-1;const f=c.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);m(null,...c);function m(p,...d){const b=i[++h];let y=-1;if(p){f(p);return}for(;++y<c.length;)(d[y]===null||d[y]===void 0)&&(d[y]=c[y]);c=d,b?jw(b,m)(...d):f(null,...d)}}function u(c){if(typeof c!="function")throw new TypeError("Expected `middelware` to be a function, not "+c);return i.push(c),r}}function jw(i,r){let l;return u;function u(...f){const m=i.length>f.length;let p;m&&f.push(c);try{p=i.apply(this,f)}catch(d){const b=d;if(m&&l)throw b;return c(b)}m||(p&&p.then&&typeof p.then=="function"?p.then(h,c):p instanceof Error?c(p):h(p))}function c(f,...m){l||(l=!0,r(f,...m))}function h(f){c(null,f)}}const un={basename:Hw,dirname:qw,extname:Gw,join:Yw,sep:"/"};function Hw(i,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');xl(i);let l=0,u=-1,c=i.length,h;if(r===void 0||r.length===0||r.length>i.length){for(;c--;)if(i.codePointAt(c)===47){if(h){l=c+1;break}}else u<0&&(h=!0,u=c+1);return u<0?"":i.slice(l,u)}if(r===i)return"";let f=-1,m=r.length-1;for(;c--;)if(i.codePointAt(c)===47){if(h){l=c+1;break}}else f<0&&(h=!0,f=c+1),m>-1&&(i.codePointAt(c)===r.codePointAt(m--)?m<0&&(u=c):(m=-1,u=f));return l===u?u=f:u<0&&(u=i.length),i.slice(l,u)}function qw(i){if(xl(i),i.length===0)return".";let r=-1,l=i.length,u;for(;--l;)if(i.codePointAt(l)===47){if(u){r=l;break}}else u||(u=!0);return r<0?i.codePointAt(0)===47?"/":".":r===1&&i.codePointAt(0)===47?"//":i.slice(0,r)}function Gw(i){xl(i);let r=i.length,l=-1,u=0,c=-1,h=0,f;for(;r--;){const m=i.codePointAt(r);if(m===47){if(f){u=r+1;break}continue}l<0&&(f=!0,l=r+1),m===46?c<0?c=r:h!==1&&(h=1):c>-1&&(h=-1)}return c<0||l<0||h===0||h===1&&c===l-1&&c===u+1?"":i.slice(c,l)}function Yw(...i){let r=-1,l;for(;++r<i.length;)xl(i[r]),i[r]&&(l=l===void 0?i[r]:l+"/"+i[r]);return l===void 0?".":Vw(l)}function Vw(i){xl(i);const r=i.codePointAt(0)===47;let l=Xw(i,!r);return l.length===0&&!r&&(l="."),l.length>0&&i.codePointAt(i.length-1)===47&&(l+="/"),r?"/"+l:l}function Xw(i,r){let l="",u=0,c=-1,h=0,f=-1,m,p;for(;++f<=i.length;){if(f<i.length)m=i.codePointAt(f);else{if(m===47)break;m=47}if(m===47){if(!(c===f-1||h===1))if(c!==f-1&&h===2){if(l.length<2||u!==2||l.codePointAt(l.length-1)!==46||l.codePointAt(l.length-2)!==46){if(l.length>2){if(p=l.lastIndexOf("/"),p!==l.length-1){p<0?(l="",u=0):(l=l.slice(0,p),u=l.length-1-l.lastIndexOf("/")),c=f,h=0;continue}}else if(l.length>0){l="",u=0,c=f,h=0;continue}}r&&(l=l.length>0?l+"/..":"..",u=2)}else l.length>0?l+="/"+i.slice(c+1,f):l=i.slice(c+1,f),u=f-c-1;c=f,h=0}else m===46&&h>-1?h++:h=-1}return l}function xl(i){if(typeof i!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(i))}const Qw={cwd:Zw};function Zw(){return"/"}function ic(i){return!!(i!==null&&typeof i=="object"&&"href"in i&&i.href&&"protocol"in i&&i.protocol&&i.auth===void 0)}function Kw(i){if(typeof i=="string")i=new URL(i);else if(!ic(i)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+i+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(i.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return Jw(i)}function Jw(i){if(i.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const r=i.pathname;let l=-1;for(;++l<r.length;)if(r.codePointAt(l)===37&&r.codePointAt(l+1)===50){const u=r.codePointAt(l+2);if(u===70||u===102){const c=new TypeError("File URL path must not include encoded / characters");throw c.code="ERR_INVALID_FILE_URL_PATH",c}}return decodeURIComponent(r)}const Ns=["history","path","basename","stem","extname","dirname"];class ng{constructor(r){let l;r?ic(r)?l={path:r}:typeof r=="string"||Ww(r)?l={value:r}:l=r:l={},this.cwd="cwd"in l?"":Qw.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Ns.length;){const h=Ns[u];h in l&&l[h]!==void 0&&l[h]!==null&&(this[h]=h==="history"?[...l[h]]:l[h])}let c;for(c in l)Ns.includes(c)||(this[c]=l[c])}get basename(){return typeof this.path=="string"?un.basename(this.path):void 0}set basename(r){Ls(r,"basename"),Us(r,"basename"),this.path=un.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?un.dirname(this.path):void 0}set dirname(r){up(this.basename,"dirname"),this.path=un.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?un.extname(this.path):void 0}set extname(r){if(Us(r,"extname"),up(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=un.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){ic(r)&&(r=Kw(r)),Ls(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?un.basename(this.path,this.extname):void 0}set stem(r){Ls(r,"stem"),Us(r,"stem"),this.path=un.join(this.dirname||"",r+(this.extname||""))}fail(r,l,u){const c=this.message(r,l,u);throw c.fatal=!0,c}info(r,l,u){const c=this.message(r,l,u);return c.fatal=void 0,c}message(r,l,u){const c=new mt(r,l,u);return this.path&&(c.name=this.path+":"+c.name,c.file=this.path),c.fatal=!1,this.messages.push(c),c}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function Us(i,r){if(i&&i.includes(un.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+un.sep+"`")}function Ls(i,r){if(!i)throw new Error("`"+r+"` cannot be empty")}function up(i,r){if(!i)throw new Error("Setting `"+r+"` requires `path` to be set too")}function Ww(i){return!!(i&&typeof i=="object"&&"byteLength"in i&&"byteOffset"in i)}const $w=(function(i){const u=this.constructor.prototype,c=u[i],h=function(){return c.apply(h,arguments)};return Object.setPrototypeOf(h,u),h}),Pw={}.hasOwnProperty;class vc extends $w{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Lw()}copy(){const r=new vc;let l=-1;for(;++l<this.attachers.length;){const u=this.attachers[l];r.use(...u)}return r.data(Rs(!0,{},this.namespace)),r}data(r,l){return typeof r=="string"?arguments.length===2?(qs("data",this.frozen),this.namespace[r]=l,this):Pw.call(this.namespace,r)&&this.namespace[r]||void 0:r?(qs("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[l,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const c=l.call(r,...u);typeof c=="function"&&this.transformers.use(c)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const l=Kr(r),u=this.parser||this.Parser;return js("parse",u),u(String(l),l)}process(r,l){const u=this;return this.freeze(),js("process",this.parser||this.Parser),Hs("process",this.compiler||this.Compiler),l?c(void 0,l):new Promise(c);function c(h,f){const m=Kr(r),p=u.parse(m);u.run(p,m,function(b,y,D){if(b||!y||!D)return d(b);const w=y,x=u.stringify(w,D);nD(x)?D.value=x:D.result=x,d(b,D)});function d(b,y){b||!y?f(b):h?h(y):l(void 0,y)}}}processSync(r){let l=!1,u;return this.freeze(),js("processSync",this.parser||this.Parser),Hs("processSync",this.compiler||this.Compiler),this.process(r,c),sp("processSync","process",l),u;function c(h,f){l=!0,lp(h),u=f}}run(r,l,u){op(r),this.freeze();const c=this.transformers;return!u&&typeof l=="function"&&(u=l,l=void 0),u?h(void 0,u):new Promise(h);function h(f,m){const p=Kr(l);c.run(r,p,d);function d(b,y,D){const w=y||r;b?m(b):f?f(w):u(void 0,w,D)}}}runSync(r,l){let u=!1,c;return this.run(r,l,h),sp("runSync","run",u),c;function h(f,m){lp(f),c=m,u=!0}}stringify(r,l){this.freeze();const u=Kr(l),c=this.compiler||this.Compiler;return Hs("stringify",c),op(r),c(r,u)}use(r,...l){const u=this.attachers,c=this.namespace;if(qs("use",this.frozen),r!=null)if(typeof r=="function")p(r,l);else if(typeof r=="object")Array.isArray(r)?m(r):f(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function h(d){if(typeof d=="function")p(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[b,...y]=d;p(b,y)}else f(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function f(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");m(d.plugins),d.settings&&(c.settings=Rs(!0,c.settings,d.settings))}function m(d){let b=-1;if(d!=null)if(Array.isArray(d))for(;++b<d.length;){const y=d[b];h(y)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function p(d,b){let y=-1,D=-1;for(;++y<u.length;)if(u[y][0]===d){D=y;break}if(D===-1)u.push([d,...b]);else if(b.length>0){let[w,...x]=b;const j=u[D][1];nc(j)&&nc(w)&&(w=Rs(!0,j,w)),u[D]=[d,w,...x]}}}}const eD=new vc().freeze();function js(i,r){if(typeof r!="function")throw new TypeError("Cannot `"+i+"` without `parser`")}function Hs(i,r){if(typeof r!="function")throw new TypeError("Cannot `"+i+"` without `compiler`")}function qs(i,r){if(r)throw new Error("Cannot call `"+i+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function op(i){if(!nc(i)||typeof i.type!="string")throw new TypeError("Expected node, got `"+i+"`")}function sp(i,r,l){if(!l)throw new Error("`"+i+"` finished async. Use `"+r+"` instead")}function Kr(i){return tD(i)?i:new ng(i)}function tD(i){return!!(i&&typeof i=="object"&&"message"in i&&"messages"in i)}function nD(i){return typeof i=="string"||iD(i)}function iD(i){return!!(i&&typeof i=="object"&&"byteLength"in i&&"byteOffset"in i)}const aD="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",cp=[],fp={allowDangerousHtml:!0},lD=/^(https?|ircs?|mailto|xmpp)$/i,rD=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function uD(i){const r=oD(i),l=sD(i);return cD(r.runSync(r.parse(l),l),i)}function oD(i){const r=i.rehypePlugins||cp,l=i.remarkPlugins||cp,u=i.remarkRehypeOptions?{...i.remarkRehypeOptions,...fp}:fp;return eD().use(qv).use(l).use(Rw,u).use(r)}function sD(i){const r=i.children||"",l=new ng;return typeof r=="string"&&(l.value=r),l}function cD(i,r){const l=r.allowedElements,u=r.allowElement,c=r.components,h=r.disallowedElements,f=r.skipHtml,m=r.unwrapDisallowed,p=r.urlTransform||fD;for(const b of rD)Object.hasOwn(r,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+aD+b.id,void 0);return uu(i,d),k1(i,{Fragment:re.Fragment,components:c,ignoreInvalidStyle:!0,jsx:re.jsx,jsxs:re.jsxs,passKeys:!0,passNode:!0});function d(b,y,D){if(b.type==="raw"&&D&&typeof y=="number")return f?D.children.splice(y,1):D.children[y]={type:"text",value:b.value},y;if(b.type==="element"){let w;for(w in Bs)if(Object.hasOwn(Bs,w)&&Object.hasOwn(b.properties,w)){const x=b.properties[w],j=Bs[w];(j===null||j.includes(b.tagName))&&(b.properties[w]=p(String(x||""),w,b))}}if(b.type==="element"){let w=l?!l.includes(b.tagName):h?h.includes(b.tagName):!1;if(!w&&u&&typeof y=="number"&&(w=!u(b,y,D)),w&&D&&typeof y=="number")return m&&b.children?D.children.splice(y,1,...b.children):D.children.splice(y,1),y}}}function fD(i){const r=i.indexOf(":"),l=i.indexOf("?"),u=i.indexOf("#"),c=i.indexOf("/");return r===-1||c!==-1&&r>c||l!==-1&&r>l||u!==-1&&r>u||lD.test(i.slice(0,r))?i:""}function hp(i,r){const l=String(i);if(typeof r!="string")throw new TypeError("Expected character");let u=0,c=l.indexOf(r);for(;c!==-1;)u++,c=l.indexOf(r,c+r.length);return u}function hD(i){if(typeof i!="string")throw new TypeError("Expected a string");return i.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function dD(i,r,l){const c=lu((l||{}).ignore||[]),h=mD(r);let f=-1;for(;++f<h.length;)tg(i,"text",m);function m(d,b){let y=-1,D;for(;++y<b.length;){const w=b[y],x=D?D.children:void 0;if(c(w,x?x.indexOf(w):void 0,D))return;D=w}if(D)return p(d,b)}function p(d,b){const y=b[b.length-1],D=h[f][0],w=h[f][1];let x=0;const V=y.children.indexOf(d);let M=!1,I=[];D.lastIndex=0;let R=D.exec(d.value);for(;R;){const W=R.index,P={index:R.index,input:R.input,stack:[...b,d]};let _=w(...R,P);if(typeof _=="string"&&(_=_.length>0?{type:"text",value:_}:void 0),_===!1?D.lastIndex=W+1:(x!==W&&I.push({type:"text",value:d.value.slice(x,W)}),Array.isArray(_)?I.push(..._):_&&I.push(_),x=W+R[0].length,M=!0),!D.global)break;R=D.exec(d.value)}return M?(x<d.value.length&&I.push({type:"text",value:d.value.slice(x)}),y.children.splice(V,1,...I)):I=[d],V+I.length}}function mD(i){const r=[];if(!Array.isArray(i))throw new TypeError("Expected find and replace tuple or list of tuples");const l=!i[0]||Array.isArray(i[0])?i:[i];let u=-1;for(;++u<l.length;){const c=l[u];r.push([pD(c[0]),gD(c[1])])}return r}function pD(i){return typeof i=="string"?new RegExp(hD(i),"g"):i}function gD(i){return typeof i=="function"?i:function(){return i}}const Gs="phrasing",Ys=["autolink","link","image","label"];function yD(){return{transforms:[ED],enter:{literalAutolink:vD,literalAutolinkEmail:Vs,literalAutolinkHttp:Vs,literalAutolinkWww:Vs},exit:{literalAutolink:SD,literalAutolinkEmail:AD,literalAutolinkHttp:wD,literalAutolinkWww:DD}}}function bD(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Gs,notInConstruct:Ys},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Gs,notInConstruct:Ys},{character:":",before:"[ps]",after:"\\/",inConstruct:Gs,notInConstruct:Ys}]}}function vD(i){this.enter({type:"link",title:null,url:"",children:[]},i)}function Vs(i){this.config.enter.autolinkProtocol.call(this,i)}function wD(i){this.config.exit.autolinkProtocol.call(this,i)}function DD(i){this.config.exit.data.call(this,i);const r=this.stack[this.stack.length-1];r.type,r.url="http://"+this.sliceSerialize(i)}function AD(i){this.config.exit.autolinkEmail.call(this,i)}function SD(i){this.exit(i)}function ED(i){dD(i,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,kD],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),TD]],{ignore:["link","linkReference"]})}function kD(i,r,l,u,c){let h="";if(!ig(c)||(/^w/i.test(r)&&(l=r+l,r="",h="http://"),!xD(l)))return!1;const f=CD(l+u);if(!f[0])return!1;const m={type:"link",title:null,url:h+r+f[0],children:[{type:"text",value:r+f[0]}]};return f[1]?[m,{type:"text",value:f[1]}]:m}function TD(i,r,l,u){return!ig(u,!0)||/[-\d_]$/.test(l)?!1:{type:"link",title:null,url:"mailto:"+r+"@"+l,children:[{type:"text",value:r+"@"+l}]}}function xD(i){const r=i.split(".");return!(r.length<2||r[r.length-1]&&(/_/.test(r[r.length-1])||!/[a-zA-Z\d]/.test(r[r.length-1]))||r[r.length-2]&&(/_/.test(r[r.length-2])||!/[a-zA-Z\d]/.test(r[r.length-2])))}function CD(i){const r=/[!"&'),.:;<>?\]}]+$/.exec(i);if(!r)return[i,void 0];i=i.slice(0,r.index);let l=r[0],u=l.indexOf(")");const c=hp(i,"(");let h=hp(i,")");for(;u!==-1&&c>h;)i+=l.slice(0,u+1),l=l.slice(u+1),u=l.indexOf(")"),h++;return[i,l]}function ig(i,r){const l=i.input.charCodeAt(i.index-1);return(i.index===0||Ei(l)||nu(l))&&(!r||l!==47)}ag.peek=ND;function FD(){this.buffer()}function zD(i){this.enter({type:"footnoteReference",identifier:"",label:""},i)}function MD(){this.buffer()}function BD(i){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},i)}function OD(i){const r=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=tn(this.sliceSerialize(i)).toLowerCase(),l.label=r}function _D(i){this.exit(i)}function ID(i){const r=this.resume(),l=this.stack[this.stack.length-1];l.type,l.identifier=tn(this.sliceSerialize(i)).toLowerCase(),l.label=r}function RD(i){this.exit(i)}function ND(){return"["}function ag(i,r,l,u){const c=l.createTracker(u);let h=c.move("[^");const f=l.enter("footnoteReference"),m=l.enter("reference");return h+=c.move(l.safe(l.associationId(i),{after:"]",before:h})),m(),f(),h+=c.move("]"),h}function UD(){return{enter:{gfmFootnoteCallString:FD,gfmFootnoteCall:zD,gfmFootnoteDefinitionLabelString:MD,gfmFootnoteDefinition:BD},exit:{gfmFootnoteCallString:OD,gfmFootnoteCall:_D,gfmFootnoteDefinitionLabelString:ID,gfmFootnoteDefinition:RD}}}function LD(i){let r=!1;return i&&i.firstLineBlank&&(r=!0),{handlers:{footnoteDefinition:l,footnoteReference:ag},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function l(u,c,h,f){const m=h.createTracker(f);let p=m.move("[^");const d=h.enter("footnoteDefinition"),b=h.enter("label");return p+=m.move(h.safe(h.associationId(u),{before:p,after:"]"})),b(),p+=m.move("]:"),u.children&&u.children.length>0&&(m.shift(4),p+=m.move((r?`
`:" ")+h.indentLines(h.containerFlow(u,m.current()),r?lg:jD))),d(),p}}function jD(i,r,l){return r===0?i:lg(i,r,l)}function lg(i,r,l){return(l?"":"    ")+i}const HD=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];rg.peek=XD;function qD(){return{canContainEols:["delete"],enter:{strikethrough:YD},exit:{strikethrough:VD}}}function GD(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:HD}],handlers:{delete:rg}}}function YD(i){this.enter({type:"delete",children:[]},i)}function VD(i){this.exit(i)}function rg(i,r,l,u){const c=l.createTracker(u),h=l.enter("strikethrough");let f=c.move("~~");return f+=l.containerPhrasing(i,{...c.current(),before:f,after:"~"}),f+=c.move("~~"),h(),f}function XD(){return"~"}function QD(i){return i.length}function ZD(i,r){const l=r||{},u=(l.align||[]).concat(),c=l.stringLength||QD,h=[],f=[],m=[],p=[];let d=0,b=-1;for(;++b<i.length;){const j=[],V=[];let M=-1;for(i[b].length>d&&(d=i[b].length);++M<i[b].length;){const I=KD(i[b][M]);if(l.alignDelimiters!==!1){const R=c(I);V[M]=R,(p[M]===void 0||R>p[M])&&(p[M]=R)}j.push(I)}f[b]=j,m[b]=V}let y=-1;if(typeof u=="object"&&"length"in u)for(;++y<d;)h[y]=dp(u[y]);else{const j=dp(u);for(;++y<d;)h[y]=j}y=-1;const D=[],w=[];for(;++y<d;){const j=h[y];let V="",M="";j===99?(V=":",M=":"):j===108?V=":":j===114&&(M=":");let I=l.alignDelimiters===!1?1:Math.max(1,p[y]-V.length-M.length);const R=V+"-".repeat(I)+M;l.alignDelimiters!==!1&&(I=V.length+I+M.length,I>p[y]&&(p[y]=I),w[y]=I),D[y]=R}f.splice(1,0,D),m.splice(1,0,w),b=-1;const x=[];for(;++b<f.length;){const j=f[b],V=m[b];y=-1;const M=[];for(;++y<d;){const I=j[y]||"";let R="",W="";if(l.alignDelimiters!==!1){const P=p[y]-(V[y]||0),_=h[y];_===114?R=" ".repeat(P):_===99?P%2?(R=" ".repeat(P/2+.5),W=" ".repeat(P/2-.5)):(R=" ".repeat(P/2),W=R):W=" ".repeat(P)}l.delimiterStart!==!1&&!y&&M.push("|"),l.padding!==!1&&!(l.alignDelimiters===!1&&I==="")&&(l.delimiterStart!==!1||y)&&M.push(" "),l.alignDelimiters!==!1&&M.push(R),M.push(I),l.alignDelimiters!==!1&&M.push(W),l.padding!==!1&&M.push(" "),(l.delimiterEnd!==!1||y!==d-1)&&M.push("|")}x.push(l.delimiterEnd===!1?M.join("").replace(/ +$/,""):M.join(""))}return x.join(`
`)}function KD(i){return i==null?"":String(i)}function dp(i){const r=typeof i=="string"?i.codePointAt(0):0;return r===67||r===99?99:r===76||r===108?108:r===82||r===114?114:0}function JD(i,r,l,u){const c=l.enter("blockquote"),h=l.createTracker(u);h.move("> "),h.shift(2);const f=l.indentLines(l.containerFlow(i,h.current()),WD);return c(),f}function WD(i,r,l){return">"+(l?"":" ")+i}function $D(i,r){return mp(i,r.inConstruct,!0)&&!mp(i,r.notInConstruct,!1)}function mp(i,r,l){if(typeof r=="string"&&(r=[r]),!r||r.length===0)return l;let u=-1;for(;++u<r.length;)if(i.includes(r[u]))return!0;return!1}function pp(i,r,l,u){let c=-1;for(;++c<l.unsafe.length;)if(l.unsafe[c].character===`
`&&$D(l.stack,l.unsafe[c]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function PD(i,r){const l=String(i);let u=l.indexOf(r),c=u,h=0,f=0;if(typeof r!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===c?++h>f&&(f=h):h=1,c=u+r.length,u=l.indexOf(r,c);return f}function eA(i,r){return!!(r.options.fences===!1&&i.value&&!i.lang&&/[^ \r\n]/.test(i.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(i.value))}function tA(i){const r=i.options.fence||"`";if(r!=="`"&&r!=="~")throw new Error("Cannot serialize code with `"+r+"` for `options.fence`, expected `` ` `` or `~`");return r}function nA(i,r,l,u){const c=tA(l),h=i.value||"",f=c==="`"?"GraveAccent":"Tilde";if(eA(i,l)){const y=l.enter("codeIndented"),D=l.indentLines(h,iA);return y(),D}const m=l.createTracker(u),p=c.repeat(Math.max(PD(h,c)+1,3)),d=l.enter("codeFenced");let b=m.move(p);if(i.lang){const y=l.enter(`codeFencedLang${f}`);b+=m.move(l.safe(i.lang,{before:b,after:" ",encode:["`"],...m.current()})),y()}if(i.lang&&i.meta){const y=l.enter(`codeFencedMeta${f}`);b+=m.move(" "),b+=m.move(l.safe(i.meta,{before:b,after:`
`,encode:["`"],...m.current()})),y()}return b+=m.move(`
`),h&&(b+=m.move(h+`
`)),b+=m.move(p),d(),b}function iA(i,r,l){return(l?"":"    ")+i}function wc(i){const r=i.options.quote||'"';if(r!=='"'&&r!=="'")throw new Error("Cannot serialize title with `"+r+"` for `options.quote`, expected `\"`, or `'`");return r}function aA(i,r,l,u){const c=wc(l),h=c==='"'?"Quote":"Apostrophe",f=l.enter("definition");let m=l.enter("label");const p=l.createTracker(u);let d=p.move("[");return d+=p.move(l.safe(l.associationId(i),{before:d,after:"]",...p.current()})),d+=p.move("]: "),m(),!i.url||/[\0- \u007F]/.test(i.url)?(m=l.enter("destinationLiteral"),d+=p.move("<"),d+=p.move(l.safe(i.url,{before:d,after:">",...p.current()})),d+=p.move(">")):(m=l.enter("destinationRaw"),d+=p.move(l.safe(i.url,{before:d,after:i.title?" ":`
`,...p.current()}))),m(),i.title&&(m=l.enter(`title${h}`),d+=p.move(" "+c),d+=p.move(l.safe(i.title,{before:d,after:c,...p.current()})),d+=p.move(c),m()),f(),d}function lA(i){const r=i.options.emphasis||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize emphasis with `"+r+"` for `options.emphasis`, expected `*`, or `_`");return r}function El(i){return"&#x"+i.toString(16).toUpperCase()+";"}function tu(i,r,l){const u=ba(i),c=ba(r);return u===void 0?c===void 0?l==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:c===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?c===void 0?{inside:!1,outside:!1}:c===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:c===void 0?{inside:!1,outside:!1}:c===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}ug.peek=rA;function ug(i,r,l,u){const c=lA(l),h=l.enter("emphasis"),f=l.createTracker(u),m=f.move(c);let p=f.move(l.containerPhrasing(i,{after:c,before:m,...f.current()}));const d=p.charCodeAt(0),b=tu(u.before.charCodeAt(u.before.length-1),d,c);b.inside&&(p=El(d)+p.slice(1));const y=p.charCodeAt(p.length-1),D=tu(u.after.charCodeAt(0),y,c);D.inside&&(p=p.slice(0,-1)+El(y));const w=f.move(c);return h(),l.attentionEncodeSurroundingInfo={after:D.outside,before:b.outside},m+p+w}function rA(i,r,l){return l.options.emphasis||"*"}function uA(i,r){let l=!1;return uu(i,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return l=!0,ec}),!!((!i.depth||i.depth<3)&&hc(i)&&(r.options.setext||l))}function oA(i,r,l,u){const c=Math.max(Math.min(6,i.depth||1),1),h=l.createTracker(u);if(uA(i,l)){const b=l.enter("headingSetext"),y=l.enter("phrasing"),D=l.containerPhrasing(i,{...h.current(),before:`
`,after:`
`});return y(),b(),D+`
`+(c===1?"=":"-").repeat(D.length-(Math.max(D.lastIndexOf("\r"),D.lastIndexOf(`
`))+1))}const f="#".repeat(c),m=l.enter("headingAtx"),p=l.enter("phrasing");h.move(f+" ");let d=l.containerPhrasing(i,{before:"# ",after:`
`,...h.current()});return/^[\t ]/.test(d)&&(d=El(d.charCodeAt(0))+d.slice(1)),d=d?f+" "+d:f,l.options.closeAtx&&(d+=" "+f),p(),m(),d}og.peek=sA;function og(i){return i.value||""}function sA(){return"<"}sg.peek=cA;function sg(i,r,l,u){const c=wc(l),h=c==='"'?"Quote":"Apostrophe",f=l.enter("image");let m=l.enter("label");const p=l.createTracker(u);let d=p.move("![");return d+=p.move(l.safe(i.alt,{before:d,after:"]",...p.current()})),d+=p.move("]("),m(),!i.url&&i.title||/[\0- \u007F]/.test(i.url)?(m=l.enter("destinationLiteral"),d+=p.move("<"),d+=p.move(l.safe(i.url,{before:d,after:">",...p.current()})),d+=p.move(">")):(m=l.enter("destinationRaw"),d+=p.move(l.safe(i.url,{before:d,after:i.title?" ":")",...p.current()}))),m(),i.title&&(m=l.enter(`title${h}`),d+=p.move(" "+c),d+=p.move(l.safe(i.title,{before:d,after:c,...p.current()})),d+=p.move(c),m()),d+=p.move(")"),f(),d}function cA(){return"!"}cg.peek=fA;function cg(i,r,l,u){const c=i.referenceType,h=l.enter("imageReference");let f=l.enter("label");const m=l.createTracker(u);let p=m.move("![");const d=l.safe(i.alt,{before:p,after:"]",...m.current()});p+=m.move(d+"]["),f();const b=l.stack;l.stack=[],f=l.enter("reference");const y=l.safe(l.associationId(i),{before:p,after:"]",...m.current()});return f(),l.stack=b,h(),c==="full"||!d||d!==y?p+=m.move(y+"]"):c==="shortcut"?p=p.slice(0,-1):p+=m.move("]"),p}function fA(){return"!"}fg.peek=hA;function fg(i,r,l){let u=i.value||"",c="`",h=-1;for(;new RegExp("(^|[^`])"+c+"([^`]|$)").test(u);)c+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++h<l.unsafe.length;){const f=l.unsafe[h],m=l.compilePattern(f);let p;if(f.atBreak)for(;p=m.exec(u);){let d=p.index;u.charCodeAt(d)===10&&u.charCodeAt(d-1)===13&&d--,u=u.slice(0,d)+" "+u.slice(p.index+1)}}return c+u+c}function hA(){return"`"}function hg(i,r){const l=hc(i);return!!(!r.options.resourceLink&&i.url&&!i.title&&i.children&&i.children.length===1&&i.children[0].type==="text"&&(l===i.url||"mailto:"+l===i.url)&&/^[a-z][a-z+.-]+:/i.test(i.url)&&!/[\0- <>\u007F]/.test(i.url))}dg.peek=dA;function dg(i,r,l,u){const c=wc(l),h=c==='"'?"Quote":"Apostrophe",f=l.createTracker(u);let m,p;if(hg(i,l)){const b=l.stack;l.stack=[],m=l.enter("autolink");let y=f.move("<");return y+=f.move(l.containerPhrasing(i,{before:y,after:">",...f.current()})),y+=f.move(">"),m(),l.stack=b,y}m=l.enter("link"),p=l.enter("label");let d=f.move("[");return d+=f.move(l.containerPhrasing(i,{before:d,after:"](",...f.current()})),d+=f.move("]("),p(),!i.url&&i.title||/[\0- \u007F]/.test(i.url)?(p=l.enter("destinationLiteral"),d+=f.move("<"),d+=f.move(l.safe(i.url,{before:d,after:">",...f.current()})),d+=f.move(">")):(p=l.enter("destinationRaw"),d+=f.move(l.safe(i.url,{before:d,after:i.title?" ":")",...f.current()}))),p(),i.title&&(p=l.enter(`title${h}`),d+=f.move(" "+c),d+=f.move(l.safe(i.title,{before:d,after:c,...f.current()})),d+=f.move(c),p()),d+=f.move(")"),m(),d}function dA(i,r,l){return hg(i,l)?"<":"["}mg.peek=mA;function mg(i,r,l,u){const c=i.referenceType,h=l.enter("linkReference");let f=l.enter("label");const m=l.createTracker(u);let p=m.move("[");const d=l.containerPhrasing(i,{before:p,after:"]",...m.current()});p+=m.move(d+"]["),f();const b=l.stack;l.stack=[],f=l.enter("reference");const y=l.safe(l.associationId(i),{before:p,after:"]",...m.current()});return f(),l.stack=b,h(),c==="full"||!d||d!==y?p+=m.move(y+"]"):c==="shortcut"?p=p.slice(0,-1):p+=m.move("]"),p}function mA(){return"["}function Dc(i){const r=i.options.bullet||"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bullet`, expected `*`, `+`, or `-`");return r}function pA(i){const r=Dc(i),l=i.options.bulletOther;if(!l)return r==="*"?"-":"*";if(l!=="*"&&l!=="+"&&l!=="-")throw new Error("Cannot serialize items with `"+l+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(l===r)throw new Error("Expected `bullet` (`"+r+"`) and `bulletOther` (`"+l+"`) to be different");return l}function gA(i){const r=i.options.bulletOrdered||".";if(r!=="."&&r!==")")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOrdered`, expected `.` or `)`");return r}function pg(i){const r=i.options.rule||"*";if(r!=="*"&&r!=="-"&&r!=="_")throw new Error("Cannot serialize rules with `"+r+"` for `options.rule`, expected `*`, `-`, or `_`");return r}function yA(i,r,l,u){const c=l.enter("list"),h=l.bulletCurrent;let f=i.ordered?gA(l):Dc(l);const m=i.ordered?f==="."?")":".":pA(l);let p=r&&l.bulletLastUsed?f===l.bulletLastUsed:!1;if(!i.ordered){const b=i.children?i.children[0]:void 0;if((f==="*"||f==="-")&&b&&(!b.children||!b.children[0])&&l.stack[l.stack.length-1]==="list"&&l.stack[l.stack.length-2]==="listItem"&&l.stack[l.stack.length-3]==="list"&&l.stack[l.stack.length-4]==="listItem"&&l.indexStack[l.indexStack.length-1]===0&&l.indexStack[l.indexStack.length-2]===0&&l.indexStack[l.indexStack.length-3]===0&&(p=!0),pg(l)===f&&b){let y=-1;for(;++y<i.children.length;){const D=i.children[y];if(D&&D.type==="listItem"&&D.children&&D.children[0]&&D.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(f=m),l.bulletCurrent=f;const d=l.containerFlow(i,u);return l.bulletLastUsed=f,l.bulletCurrent=h,c(),d}function bA(i){const r=i.options.listItemIndent||"one";if(r!=="tab"&&r!=="one"&&r!=="mixed")throw new Error("Cannot serialize items with `"+r+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return r}function vA(i,r,l,u){const c=bA(l);let h=l.bulletCurrent||Dc(l);r&&r.type==="list"&&r.ordered&&(h=(typeof r.start=="number"&&r.start>-1?r.start:1)+(l.options.incrementListMarker===!1?0:r.children.indexOf(i))+h);let f=h.length+1;(c==="tab"||c==="mixed"&&(r&&r.type==="list"&&r.spread||i.spread))&&(f=Math.ceil(f/4)*4);const m=l.createTracker(u);m.move(h+" ".repeat(f-h.length)),m.shift(f);const p=l.enter("listItem"),d=l.indentLines(l.containerFlow(i,m.current()),b);return p(),d;function b(y,D,w){return D?(w?"":" ".repeat(f))+y:(w?h:h+" ".repeat(f-h.length))+y}}function wA(i,r,l,u){const c=l.enter("paragraph"),h=l.enter("phrasing"),f=l.containerPhrasing(i,u);return h(),c(),f}const DA=lu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function AA(i,r,l,u){return(i.children.some(function(f){return DA(f)})?l.containerPhrasing:l.containerFlow).call(l,i,u)}function SA(i){const r=i.options.strong||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize strong with `"+r+"` for `options.strong`, expected `*`, or `_`");return r}gg.peek=EA;function gg(i,r,l,u){const c=SA(l),h=l.enter("strong"),f=l.createTracker(u),m=f.move(c+c);let p=f.move(l.containerPhrasing(i,{after:c,before:m,...f.current()}));const d=p.charCodeAt(0),b=tu(u.before.charCodeAt(u.before.length-1),d,c);b.inside&&(p=El(d)+p.slice(1));const y=p.charCodeAt(p.length-1),D=tu(u.after.charCodeAt(0),y,c);D.inside&&(p=p.slice(0,-1)+El(y));const w=f.move(c+c);return h(),l.attentionEncodeSurroundingInfo={after:D.outside,before:b.outside},m+p+w}function EA(i,r,l){return l.options.strong||"*"}function kA(i,r,l,u){return l.safe(i.value,u)}function TA(i){const r=i.options.ruleRepetition||3;if(r<3)throw new Error("Cannot serialize rules with repetition `"+r+"` for `options.ruleRepetition`, expected `3` or more");return r}function xA(i,r,l){const u=(pg(l)+(l.options.ruleSpaces?" ":"")).repeat(TA(l));return l.options.ruleSpaces?u.slice(0,-1):u}const yg={blockquote:JD,break:pp,code:nA,definition:aA,emphasis:ug,hardBreak:pp,heading:oA,html:og,image:sg,imageReference:cg,inlineCode:fg,link:dg,linkReference:mg,list:yA,listItem:vA,paragraph:wA,root:AA,strong:gg,text:kA,thematicBreak:xA};function CA(){return{enter:{table:FA,tableData:gp,tableHeader:gp,tableRow:MA},exit:{codeText:BA,table:zA,tableData:Xs,tableHeader:Xs,tableRow:Xs}}}function FA(i){const r=i._align;this.enter({type:"table",align:r.map(function(l){return l==="none"?null:l}),children:[]},i),this.data.inTable=!0}function zA(i){this.exit(i),this.data.inTable=void 0}function MA(i){this.enter({type:"tableRow",children:[]},i)}function Xs(i){this.exit(i)}function gp(i){this.enter({type:"tableCell",children:[]},i)}function BA(i){let r=this.resume();this.data.inTable&&(r=r.replace(/\\([\\|])/g,OA));const l=this.stack[this.stack.length-1];l.type,l.value=r,this.exit(i)}function OA(i,r){return r==="|"?r:i}function _A(i){const r=i||{},l=r.tableCellPadding,u=r.tablePipeAlign,c=r.stringLength,h=l?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:D,table:f,tableCell:p,tableRow:m}};function f(w,x,j,V){return d(b(w,j,V),w.align)}function m(w,x,j,V){const M=y(w,j,V),I=d([M]);return I.slice(0,I.indexOf(`
`))}function p(w,x,j,V){const M=j.enter("tableCell"),I=j.enter("phrasing"),R=j.containerPhrasing(w,{...V,before:h,after:h});return I(),M(),R}function d(w,x){return ZD(w,{align:x,alignDelimiters:u,padding:l,stringLength:c})}function b(w,x,j){const V=w.children;let M=-1;const I=[],R=x.enter("table");for(;++M<V.length;)I[M]=y(V[M],x,j);return R(),I}function y(w,x,j){const V=w.children;let M=-1;const I=[],R=x.enter("tableRow");for(;++M<V.length;)I[M]=p(V[M],w,x,j);return R(),I}function D(w,x,j){let V=yg.inlineCode(w,x,j);return j.stack.includes("tableCell")&&(V=V.replace(/\|/g,"\\$&")),V}}function IA(){return{exit:{taskListCheckValueChecked:yp,taskListCheckValueUnchecked:yp,paragraph:NA}}}function RA(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:UA}}}function yp(i){const r=this.stack[this.stack.length-2];r.type,r.checked=i.type==="taskListCheckValueChecked"}function NA(i){const r=this.stack[this.stack.length-2];if(r&&r.type==="listItem"&&typeof r.checked=="boolean"){const l=this.stack[this.stack.length-1];l.type;const u=l.children[0];if(u&&u.type==="text"){const c=r.children;let h=-1,f;for(;++h<c.length;){const m=c[h];if(m.type==="paragraph"){f=m;break}}f===l&&(u.value=u.value.slice(1),u.value.length===0?l.children.shift():l.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,l.position.start=Object.assign({},u.position.start)))}}this.exit(i)}function UA(i,r,l,u){const c=i.children[0],h=typeof i.checked=="boolean"&&c&&c.type==="paragraph",f="["+(i.checked?"x":" ")+"] ",m=l.createTracker(u);h&&m.move(f);let p=yg.listItem(i,r,l,{...u,...m.current()});return h&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,d)),p;function d(b){return b+f}}function LA(){return[yD(),UD(),qD(),CA(),IA()]}function jA(i){return{extensions:[bD(),LD(i),GD(),_A(i),RA()]}}const HA={tokenize:QA,partial:!0},bg={tokenize:ZA,partial:!0},vg={tokenize:KA,partial:!0},wg={tokenize:JA,partial:!0},qA={tokenize:WA,partial:!0},Dg={name:"wwwAutolink",tokenize:VA,previous:Sg},Ag={name:"protocolAutolink",tokenize:XA,previous:Eg},zn={name:"emailAutolink",tokenize:YA,previous:kg},on={};function GA(){return{text:on}}let Si=48;for(;Si<123;)on[Si]=zn,Si++,Si===58?Si=65:Si===91&&(Si=97);on[43]=zn;on[45]=zn;on[46]=zn;on[95]=zn;on[72]=[zn,Ag];on[104]=[zn,Ag];on[87]=[zn,Dg];on[119]=[zn,Dg];function YA(i,r,l){const u=this;let c,h;return f;function f(y){return!ac(y)||!kg.call(u,u.previous)||Ac(u.events)?l(y):(i.enter("literalAutolink"),i.enter("literalAutolinkEmail"),m(y))}function m(y){return ac(y)?(i.consume(y),m):y===64?(i.consume(y),p):l(y)}function p(y){return y===46?i.check(qA,b,d)(y):y===45||y===95||dt(y)?(h=!0,i.consume(y),p):b(y)}function d(y){return i.consume(y),c=!0,p}function b(y){return h&&c&&bt(u.previous)?(i.exit("literalAutolinkEmail"),i.exit("literalAutolink"),r(y)):l(y)}}function VA(i,r,l){const u=this;return c;function c(f){return f!==87&&f!==119||!Sg.call(u,u.previous)||Ac(u.events)?l(f):(i.enter("literalAutolink"),i.enter("literalAutolinkWww"),i.check(HA,i.attempt(bg,i.attempt(vg,h),l),l)(f))}function h(f){return i.exit("literalAutolinkWww"),i.exit("literalAutolink"),r(f)}}function XA(i,r,l){const u=this;let c="",h=!1;return f;function f(y){return(y===72||y===104)&&Eg.call(u,u.previous)&&!Ac(u.events)?(i.enter("literalAutolink"),i.enter("literalAutolinkHttp"),c+=String.fromCodePoint(y),i.consume(y),m):l(y)}function m(y){if(bt(y)&&c.length<5)return c+=String.fromCodePoint(y),i.consume(y),m;if(y===58){const D=c.toLowerCase();if(D==="http"||D==="https")return i.consume(y),p}return l(y)}function p(y){return y===47?(i.consume(y),h?d:(h=!0,p)):l(y)}function d(y){return y===null||$r(y)||qe(y)||Ei(y)||nu(y)?l(y):i.attempt(bg,i.attempt(vg,b),l)(y)}function b(y){return i.exit("literalAutolinkHttp"),i.exit("literalAutolink"),r(y)}}function QA(i,r,l){let u=0;return c;function c(f){return(f===87||f===119)&&u<3?(u++,i.consume(f),c):f===46&&u===3?(i.consume(f),h):l(f)}function h(f){return f===null?l(f):r(f)}}function ZA(i,r,l){let u,c,h;return f;function f(d){return d===46||d===95?i.check(wg,p,m)(d):d===null||qe(d)||Ei(d)||d!==45&&nu(d)?p(d):(h=!0,i.consume(d),f)}function m(d){return d===95?u=!0:(c=u,u=void 0),i.consume(d),f}function p(d){return c||u||!h?l(d):r(d)}}function KA(i,r){let l=0,u=0;return c;function c(f){return f===40?(l++,i.consume(f),c):f===41&&u<l?h(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?i.check(wg,r,h)(f):f===null||qe(f)||Ei(f)?r(f):(i.consume(f),c)}function h(f){return f===41&&u++,i.consume(f),c}}function JA(i,r,l){return u;function u(m){return m===33||m===34||m===39||m===41||m===42||m===44||m===46||m===58||m===59||m===63||m===95||m===126?(i.consume(m),u):m===38?(i.consume(m),h):m===93?(i.consume(m),c):m===60||m===null||qe(m)||Ei(m)?r(m):l(m)}function c(m){return m===null||m===40||m===91||qe(m)||Ei(m)?r(m):u(m)}function h(m){return bt(m)?f(m):l(m)}function f(m){return m===59?(i.consume(m),u):bt(m)?(i.consume(m),f):l(m)}}function WA(i,r,l){return u;function u(h){return i.consume(h),c}function c(h){return dt(h)?l(h):r(h)}}function Sg(i){return i===null||i===40||i===42||i===95||i===91||i===93||i===126||qe(i)}function Eg(i){return!bt(i)}function kg(i){return!(i===47||ac(i))}function ac(i){return i===43||i===45||i===46||i===95||dt(i)}function Ac(i){let r=i.length,l=!1;for(;r--;){const u=i[r][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){l=!0;break}if(u._gfmAutolinkLiteralWalkedInto){l=!1;break}}return i.length>0&&!l&&(i[i.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),l}const $A={tokenize:rS,partial:!0};function PA(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:iS,continuation:{tokenize:aS},exit:lS}},text:{91:{name:"gfmFootnoteCall",tokenize:nS},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:eS,resolveTo:tS}}}}function eS(i,r,l){const u=this;let c=u.events.length;const h=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let f;for(;c--;){const p=u.events[c][1];if(p.type==="labelImage"){f=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return m;function m(p){if(!f||!f._balanced)return l(p);const d=tn(u.sliceSerialize({start:f.end,end:u.now()}));return d.codePointAt(0)!==94||!h.includes(d.slice(1))?l(p):(i.enter("gfmFootnoteCallLabelMarker"),i.consume(p),i.exit("gfmFootnoteCallLabelMarker"),r(p))}}function tS(i,r){let l=i.length;for(;l--;)if(i[l][1].type==="labelImage"&&i[l][0]==="enter"){i[l][1];break}i[l+1][1].type="data",i[l+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},i[l+3][1].start),end:Object.assign({},i[i.length-1][1].end)},c={type:"gfmFootnoteCallMarker",start:Object.assign({},i[l+3][1].end),end:Object.assign({},i[l+3][1].end)};c.end.column++,c.end.offset++,c.end._bufferIndex++;const h={type:"gfmFootnoteCallString",start:Object.assign({},c.end),end:Object.assign({},i[i.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},h.start),end:Object.assign({},h.end)},m=[i[l+1],i[l+2],["enter",u,r],i[l+3],i[l+4],["enter",c,r],["exit",c,r],["enter",h,r],["enter",f,r],["exit",f,r],["exit",h,r],i[i.length-2],i[i.length-1],["exit",u,r]];return i.splice(l,i.length-l+1,...m),i}function nS(i,r,l){const u=this,c=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let h=0,f;return m;function m(y){return i.enter("gfmFootnoteCall"),i.enter("gfmFootnoteCallLabelMarker"),i.consume(y),i.exit("gfmFootnoteCallLabelMarker"),p}function p(y){return y!==94?l(y):(i.enter("gfmFootnoteCallMarker"),i.consume(y),i.exit("gfmFootnoteCallMarker"),i.enter("gfmFootnoteCallString"),i.enter("chunkString").contentType="string",d)}function d(y){if(h>999||y===93&&!f||y===null||y===91||qe(y))return l(y);if(y===93){i.exit("chunkString");const D=i.exit("gfmFootnoteCallString");return c.includes(tn(u.sliceSerialize(D)))?(i.enter("gfmFootnoteCallLabelMarker"),i.consume(y),i.exit("gfmFootnoteCallLabelMarker"),i.exit("gfmFootnoteCall"),r):l(y)}return qe(y)||(f=!0),h++,i.consume(y),y===92?b:d}function b(y){return y===91||y===92||y===93?(i.consume(y),h++,d):d(y)}}function iS(i,r,l){const u=this,c=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let h,f=0,m;return p;function p(x){return i.enter("gfmFootnoteDefinition")._container=!0,i.enter("gfmFootnoteDefinitionLabel"),i.enter("gfmFootnoteDefinitionLabelMarker"),i.consume(x),i.exit("gfmFootnoteDefinitionLabelMarker"),d}function d(x){return x===94?(i.enter("gfmFootnoteDefinitionMarker"),i.consume(x),i.exit("gfmFootnoteDefinitionMarker"),i.enter("gfmFootnoteDefinitionLabelString"),i.enter("chunkString").contentType="string",b):l(x)}function b(x){if(f>999||x===93&&!m||x===null||x===91||qe(x))return l(x);if(x===93){i.exit("chunkString");const j=i.exit("gfmFootnoteDefinitionLabelString");return h=tn(u.sliceSerialize(j)),i.enter("gfmFootnoteDefinitionLabelMarker"),i.consume(x),i.exit("gfmFootnoteDefinitionLabelMarker"),i.exit("gfmFootnoteDefinitionLabel"),D}return qe(x)||(m=!0),f++,i.consume(x),x===92?y:b}function y(x){return x===91||x===92||x===93?(i.consume(x),f++,b):b(x)}function D(x){return x===58?(i.enter("definitionMarker"),i.consume(x),i.exit("definitionMarker"),c.includes(h)||c.push(h),Fe(i,w,"gfmFootnoteDefinitionWhitespace")):l(x)}function w(x){return r(x)}}function aS(i,r,l){return i.check(Tl,r,i.attempt($A,r,l))}function lS(i){i.exit("gfmFootnoteDefinition")}function rS(i,r,l){const u=this;return Fe(i,c,"gfmFootnoteDefinitionIndent",5);function c(h){const f=u.events[u.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?r(h):l(h)}}function uS(i){let l=(i||{}).singleTilde;const u={name:"strikethrough",tokenize:h,resolveAll:c};return l==null&&(l=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function c(f,m){let p=-1;for(;++p<f.length;)if(f[p][0]==="enter"&&f[p][1].type==="strikethroughSequenceTemporary"&&f[p][1]._close){let d=p;for(;d--;)if(f[d][0]==="exit"&&f[d][1].type==="strikethroughSequenceTemporary"&&f[d][1]._open&&f[p][1].end.offset-f[p][1].start.offset===f[d][1].end.offset-f[d][1].start.offset){f[p][1].type="strikethroughSequence",f[d][1].type="strikethroughSequence";const b={type:"strikethrough",start:Object.assign({},f[d][1].start),end:Object.assign({},f[p][1].end)},y={type:"strikethroughText",start:Object.assign({},f[d][1].end),end:Object.assign({},f[p][1].start)},D=[["enter",b,m],["enter",f[d][1],m],["exit",f[d][1],m],["enter",y,m]],w=m.parser.constructs.insideSpan.null;w&&Ut(D,D.length,0,iu(w,f.slice(d+1,p),m)),Ut(D,D.length,0,[["exit",y,m],["enter",f[p][1],m],["exit",f[p][1],m],["exit",b,m]]),Ut(f,d-1,p-d+3,D),p=d+D.length-2;break}}for(p=-1;++p<f.length;)f[p][1].type==="strikethroughSequenceTemporary"&&(f[p][1].type="data");return f}function h(f,m,p){const d=this.previous,b=this.events;let y=0;return D;function D(x){return d===126&&b[b.length-1][1].type!=="characterEscape"?p(x):(f.enter("strikethroughSequenceTemporary"),w(x))}function w(x){const j=ba(d);if(x===126)return y>1?p(x):(f.consume(x),y++,w);if(y<2&&!l)return p(x);const V=f.exit("strikethroughSequenceTemporary"),M=ba(x);return V._open=!M||M===2&&!!j,V._close=!j||j===2&&!!M,m(x)}}}class oS{constructor(){this.map=[]}add(r,l,u){sS(this,r,l,u)}consume(r){if(this.map.sort(function(h,f){return h[0]-f[0]}),this.map.length===0)return;let l=this.map.length;const u=[];for(;l>0;)l-=1,u.push(r.slice(this.map[l][0]+this.map[l][1]),this.map[l][2]),r.length=this.map[l][0];u.push(r.slice()),r.length=0;let c=u.pop();for(;c;){for(const h of c)r.push(h);c=u.pop()}this.map.length=0}}function sS(i,r,l,u){let c=0;if(!(l===0&&u.length===0)){for(;c<i.map.length;){if(i.map[c][0]===r){i.map[c][1]+=l,i.map[c][2].push(...u);return}c+=1}i.map.push([r,l,u])}}function cS(i,r){let l=!1;const u=[];for(;r<i.length;){const c=i[r];if(l){if(c[0]==="enter")c[1].type==="tableContent"&&u.push(i[r+1][1].type==="tableDelimiterMarker"?"left":"none");else if(c[1].type==="tableContent"){if(i[r-1][1].type==="tableDelimiterMarker"){const h=u.length-1;u[h]=u[h]==="left"?"center":"right"}}else if(c[1].type==="tableDelimiterRow")break}else c[0]==="enter"&&c[1].type==="tableDelimiterRow"&&(l=!0);r+=1}return u}function fS(){return{flow:{null:{name:"table",tokenize:hS,resolveAll:dS}}}}function hS(i,r,l){const u=this;let c=0,h=0,f;return m;function m(N){let te=u.events.length-1;for(;te>-1;){const ie=u.events[te][1].type;if(ie==="lineEnding"||ie==="linePrefix")te--;else break}const ee=te>-1?u.events[te][1].type:null,we=ee==="tableHead"||ee==="tableRow"?_:p;return we===_&&u.parser.lazy[u.now().line]?l(N):we(N)}function p(N){return i.enter("tableHead"),i.enter("tableRow"),d(N)}function d(N){return N===124||(f=!0,h+=1),b(N)}function b(N){return N===null?l(N):ce(N)?h>1?(h=0,u.interrupt=!0,i.exit("tableRow"),i.enter("lineEnding"),i.consume(N),i.exit("lineEnding"),w):l(N):Ee(N)?Fe(i,b,"whitespace")(N):(h+=1,f&&(f=!1,c+=1),N===124?(i.enter("tableCellDivider"),i.consume(N),i.exit("tableCellDivider"),f=!0,b):(i.enter("data"),y(N)))}function y(N){return N===null||N===124||qe(N)?(i.exit("data"),b(N)):(i.consume(N),N===92?D:y)}function D(N){return N===92||N===124?(i.consume(N),y):y(N)}function w(N){return u.interrupt=!1,u.parser.lazy[u.now().line]?l(N):(i.enter("tableDelimiterRow"),f=!1,Ee(N)?Fe(i,x,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(N):x(N))}function x(N){return N===45||N===58?V(N):N===124?(f=!0,i.enter("tableCellDivider"),i.consume(N),i.exit("tableCellDivider"),j):P(N)}function j(N){return Ee(N)?Fe(i,V,"whitespace")(N):V(N)}function V(N){return N===58?(h+=1,f=!0,i.enter("tableDelimiterMarker"),i.consume(N),i.exit("tableDelimiterMarker"),M):N===45?(h+=1,M(N)):N===null||ce(N)?W(N):P(N)}function M(N){return N===45?(i.enter("tableDelimiterFiller"),I(N)):P(N)}function I(N){return N===45?(i.consume(N),I):N===58?(f=!0,i.exit("tableDelimiterFiller"),i.enter("tableDelimiterMarker"),i.consume(N),i.exit("tableDelimiterMarker"),R):(i.exit("tableDelimiterFiller"),R(N))}function R(N){return Ee(N)?Fe(i,W,"whitespace")(N):W(N)}function W(N){return N===124?x(N):N===null||ce(N)?!f||c!==h?P(N):(i.exit("tableDelimiterRow"),i.exit("tableHead"),r(N)):P(N)}function P(N){return l(N)}function _(N){return i.enter("tableRow"),J(N)}function J(N){return N===124?(i.enter("tableCellDivider"),i.consume(N),i.exit("tableCellDivider"),J):N===null||ce(N)?(i.exit("tableRow"),r(N)):Ee(N)?Fe(i,J,"whitespace")(N):(i.enter("data"),ue(N))}function ue(N){return N===null||N===124||qe(N)?(i.exit("data"),J(N)):(i.consume(N),N===92?de:ue)}function de(N){return N===92||N===124?(i.consume(N),ue):ue(N)}}function dS(i,r){let l=-1,u=!0,c=0,h=[0,0,0,0],f=[0,0,0,0],m=!1,p=0,d,b,y;const D=new oS;for(;++l<i.length;){const w=i[l],x=w[1];w[0]==="enter"?x.type==="tableHead"?(m=!1,p!==0&&(bp(D,r,p,d,b),b=void 0,p=0),d={type:"table",start:Object.assign({},x.start),end:Object.assign({},x.end)},D.add(l,0,[["enter",d,r]])):x.type==="tableRow"||x.type==="tableDelimiterRow"?(u=!0,y=void 0,h=[0,0,0,0],f=[0,l+1,0,0],m&&(m=!1,b={type:"tableBody",start:Object.assign({},x.start),end:Object.assign({},x.end)},D.add(l,0,[["enter",b,r]])),c=x.type==="tableDelimiterRow"?2:b?3:1):c&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")?(u=!1,f[2]===0&&(h[1]!==0&&(f[0]=f[1],y=Jr(D,r,h,c,void 0,y),h=[0,0,0,0]),f[2]=l)):x.type==="tableCellDivider"&&(u?u=!1:(h[1]!==0&&(f[0]=f[1],y=Jr(D,r,h,c,void 0,y)),h=f,f=[h[1],l,0,0])):x.type==="tableHead"?(m=!0,p=l):x.type==="tableRow"||x.type==="tableDelimiterRow"?(p=l,h[1]!==0?(f[0]=f[1],y=Jr(D,r,h,c,l,y)):f[1]!==0&&(y=Jr(D,r,f,c,l,y)),c=0):c&&(x.type==="data"||x.type==="tableDelimiterMarker"||x.type==="tableDelimiterFiller")&&(f[3]=l)}for(p!==0&&bp(D,r,p,d,b),D.consume(r.events),l=-1;++l<r.events.length;){const w=r.events[l];w[0]==="enter"&&w[1].type==="table"&&(w[1]._align=cS(r.events,l))}return i}function Jr(i,r,l,u,c,h){const f=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",m="tableContent";l[0]!==0&&(h.end=Object.assign({},ga(r.events,l[0])),i.add(l[0],0,[["exit",h,r]]));const p=ga(r.events,l[1]);if(h={type:f,start:Object.assign({},p),end:Object.assign({},p)},i.add(l[1],0,[["enter",h,r]]),l[2]!==0){const d=ga(r.events,l[2]),b=ga(r.events,l[3]),y={type:m,start:Object.assign({},d),end:Object.assign({},b)};if(i.add(l[2],0,[["enter",y,r]]),u!==2){const D=r.events[l[2]],w=r.events[l[3]];if(D[1].end=Object.assign({},w[1].end),D[1].type="chunkText",D[1].contentType="text",l[3]>l[2]+1){const x=l[2]+1,j=l[3]-l[2]-1;i.add(x,j,[])}}i.add(l[3]+1,0,[["exit",y,r]])}return c!==void 0&&(h.end=Object.assign({},ga(r.events,c)),i.add(c,0,[["exit",h,r]]),h=void 0),h}function bp(i,r,l,u,c){const h=[],f=ga(r.events,l);c&&(c.end=Object.assign({},f),h.push(["exit",c,r])),u.end=Object.assign({},f),h.push(["exit",u,r]),i.add(l+1,0,h)}function ga(i,r){const l=i[r],u=l[0]==="enter"?"start":"end";return l[1][u]}const mS={name:"tasklistCheck",tokenize:gS};function pS(){return{text:{91:mS}}}function gS(i,r,l){const u=this;return c;function c(p){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?l(p):(i.enter("taskListCheck"),i.enter("taskListCheckMarker"),i.consume(p),i.exit("taskListCheckMarker"),h)}function h(p){return qe(p)?(i.enter("taskListCheckValueUnchecked"),i.consume(p),i.exit("taskListCheckValueUnchecked"),f):p===88||p===120?(i.enter("taskListCheckValueChecked"),i.consume(p),i.exit("taskListCheckValueChecked"),f):l(p)}function f(p){return p===93?(i.enter("taskListCheckMarker"),i.consume(p),i.exit("taskListCheckMarker"),i.exit("taskListCheck"),m):l(p)}function m(p){return ce(p)?r(p):Ee(p)?i.check({tokenize:yS},r,l)(p):l(p)}}function yS(i,r,l){return Fe(i,u,"whitespace");function u(c){return c===null?l(c):r(c)}}function bS(i){return Rp([GA(),PA(),uS(i),fS(),pS()])}const vS={};function wS(i){const r=this,l=i||vS,u=r.data(),c=u.micromarkExtensions||(u.micromarkExtensions=[]),h=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),f=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);c.push(bS(l)),h.push(LA()),f.push(jA(l))}const DS=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,AS=Object.hasOwnProperty;class SS{constructor(){this.occurrences,this.reset()}slug(r,l){const u=this;let c=ES(r,l===!0);const h=c;for(;AS.call(u.occurrences,c);)u.occurrences[h]++,c=h+"-"+u.occurrences[h];return u.occurrences[c]=0,c}reset(){this.occurrences=Object.create(null)}}function ES(i,r){return typeof i!="string"?"":(r||(i=i.toLowerCase()),i.replace(DS,"").replace(/ /g,"-"))}function kS(i){const r=i.type==="element"?i.tagName.toLowerCase():"",l=r.length===2&&r.charCodeAt(0)===104?r.charCodeAt(1):0;return l>48&&l<55?l-48:void 0}function TS(i){return"children"in i?Tg(i):"value"in i?i.value:""}function xS(i){return i.type==="text"?i.value:"children"in i?Tg(i):""}function Tg(i){let r=-1;const l=[];for(;++r<i.children.length;)l[r]=xS(i.children[r]);return l.join("")}const CS={},vp=new SS;function FS(i){const l=(i||CS).prefix||"";return function(u){vp.reset(),uu(u,"element",function(c){kS(c)&&!c.properties.id&&(c.properties.id=l+vp.slug(TS(c)))})}}const Qs=[{id:"article5-death-of-middle-management",titleEn:"The Death of Middle Management: Everyone Becomes a TLM",titleZh:"中层管理的死亡：每个人都要成为 TLM",category:"Opinions",date:"2026-05-30",author:"Sean",release:"published",keywords:["Middle Management","AI Management","TLM","Strategy","Execution"],history:["Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Initial draft","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Added business context and sponsor-finding point","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): High-level structure and argument polish","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Context: The Translation Layer Is Shrinking
## Context：翻译层正在变薄

**English:**

For a long time, large organizations needed middle management because information moved slowly and context was trapped in people.

Vision lived at the top. Execution lived at the bottom. Between them sat a thick translation layer.

Executives spoke in vague ambition. "We need to win enterprise." "We need to improve retention." "We need an AI strategy." Middle managers turned that into initiatives, roadmap items, hiring plans, dashboards, and weekly follow-ups.

That work mattered. Someone had to translate vision into strategy, strategy into projects, and projects into tasks.

AI changes the cost of that translation.

A founder can now ask an AI system to turn a rough idea into a first-pass strategy. A product lead can turn notes into a roadmap. An engineer can ask for a plan, edge cases, tradeoffs, API sketches, migration steps, and test cases.

The information flow from vision to strategy to execution is getting faster.

That does not remove management. It kills the translator-only version of middle management.

**中文：**

很长一段时间里，大组织需要中层管理，因为信息流动很慢，而且 context 被困在人脑里。

Vision 在上面。Execution 在下面。中间隔着一层很厚的翻译层。

高层说的是模糊野心。“我们要赢 enterprise。”“我们要提高 retention。”“我们要有 AI strategy。”中层把这些话翻译成 initiative、roadmap、招聘计划、dashboard 和每周 follow-up。

这件事过去很重要。必须有人把 vision 变成 strategy，把 strategy 变成 project，把 project 变成 task。

AI 改变了翻译成本。

创始人现在可以让 AI 把一个模糊想法变成第一版 strategy。产品负责人可以把 notes 变成 roadmap。工程师可以直接要 plan、edge cases、tradeoffs、API sketch、migration steps 和 test cases。

从 vision 到 strategy 到 execution 的信息流动，正在变快。

这不会消灭管理。它会杀死只做翻译的中层管理。

---

## Thesis: Translator-Only Management Will Lose Leverage
## Thesis：只做翻译的管理会失去杠杆

**English:**

The middle manager who only translates is in trouble.

The role used to exist because translation was expensive. A vague executive goal had to pass through meetings, docs, alignment calls, planning cycles, and reporting chains before a team could act.

AI compresses that chain.

It can draft the strategy memo. It can turn the memo into a roadmap. It can turn the roadmap into tickets. It can summarize progress, spot blockers, compare tradeoffs, and generate weekly updates.

The person in the middle now needs to add more than formatting, coordination, and status relay.

They need judgment.

They need taste.

They need enough execution ability to know whether a roadmap is feasible.

And often, they need to build part of it themselves.

**中文：**

只做翻译的中层会很危险。

这个角色过去存在，是因为翻译很贵。一个模糊的高层目标，要经过会议、文档、alignment call、planning cycle 和汇报链，团队才能开始行动。

AI 压缩了这条链。

它可以起草 strategy memo。可以把 memo 变成 roadmap。可以把 roadmap 变成 ticket。可以总结进度，找 blocker，比较 tradeoff，生成 weekly update。

站在中间的人，现在必须提供比格式化、协调、状态传递更多的价值。

他需要判断力。

需要 taste。

需要足够的执行能力，判断 roadmap 是否可行。

很多时候，他还要亲自实现其中一部分。

---

## Point 1: Vision Can Move Closer To Execution
## Point 1：Vision 可以更靠近 Execution

**English:**

AI makes vague ideas easier to operationalize.

That is the first big change.

In the old organization, a leader had an idea. A director interpreted it. A manager broke it down. A PM wrote a spec. Engineers estimated it. Then the plan slowly moved back up the chain for approval.

Every layer added context. Every layer also added delay.

Now the first pass can happen much faster. A rough thought can become a structured plan in minutes. The leader can see assumptions earlier. The executor can see strategic intent earlier. The team can challenge the plan before it calcifies.

This reduces the need for people whose main job is passing information between rooms.

The new bottleneck is no longer "can someone write the plan?"

The bottleneck is "can someone tell whether the plan is true?"

**中文：**

AI 让模糊想法更容易进入操作层。

这是第一个大变化。

旧组织里，一个 leader 有想法。Director 解释它。Manager 拆解它。PM 写 spec。工程师估算。然后计划再慢慢往上走，等 approval。

每一层都增加 context。每一层也增加 delay。

现在，第一版可以快很多。一个粗糙想法，几分钟内就能变成结构化 plan。Leader 更早看到 assumptions。Executor 更早看到 strategic intent。团队可以在计划变硬之前挑战它。

这会减少一种岗位需求：主要工作是在房间之间传递信息的人。

新的瓶颈不再是“有没有人能写计划”。

新的瓶颈是“有没有人能判断这个计划是否真实”。

---

## Point 2: Scope Expands, So Management Moves Closer To Building
## Point 2：Scope 变大，管理会更靠近 Build

**English:**

AI expands individual scope.

An engineer can see more of product. A PM can understand more of implementation. A designer can prototype more of the workflow. A founder can inspect more of the execution plan.

This weakens the old IC-versus-EM split.

The future looks more like TLM: technical lead manager. More broadly, it is someone who can translate, lead, and make.

The exact title matters less than the shape of the work.

A TLM turns vague intent into a feasible strategy. Then they stay close enough to execution to know whether the strategy survives contact with reality.

They write part of the plan. They build part of the system. They review the tradeoffs. They notice when the AI-generated roadmap is elegant and impossible. They catch the gap between a clean strategy doc and the messy implementation path.

This is management with skin in the game.

**中文：**

AI 会扩大每个人的 scope。

工程师能看见更多产品。PM 能理解更多实现。设计师能 prototype 更多工作流。创始人能检查更多执行计划。

旧的 IC 和 EM 分裂会变弱。

未来更像 TLM：technical lead manager。更宽一点说，是一个能 translate、lead、make 的人。

具体 title 没那么重要。重要的是工作形状。

TLM 把模糊 intent 变成可行 strategy。然后他要离 execution 足够近，知道 strategy 撞上现实后还能不能活。

他写一部分 plan。建一部分 system。审 tradeoff。发现 AI 生成的 roadmap 哪些地方漂亮但不可行。抓住干净 strategy doc 和混乱 implementation path 之间的缝。

这是带 skin in the game 的管理。

---

## Point 3: Big Companies Still Need Human Direction
## Point 3：大公司仍然需要人的方向感

**English:**

The translator role will not disappear everywhere. It will become more judgment-heavy.

Large companies still need people who can read the organization.

At scale, vision becomes political. Strategy crosses functions. Execution touches legal, finance, sales, security, customer success, and compliance. Someone has to translate incentives, constraints, and words at the same time.

AI can summarize the meeting. It can expose the disagreement. It cannot fully resolve the politics.

AI can draft the roadmap. It cannot know which VP will block it, which team has hidden capacity, which compliance review will take six weeks, or which customer commitment already constrained the architecture.

More importantly, an AI system only knows the business you have managed to encode.

It can read the docs, tickets, CRM notes, Slack threads, dashboards, and call transcripts. That helps. But by default, it still does not know which customer pain is actually urgent, which revenue line matters this quarter, which internal metric is performative, which team is tired, which executive has credibility, or which sponsor can make a hard change real.

This is where the future translator, or TLM, still creates value.

Their job is no longer translating words. Their job is translating reality.

They know where the business should go next. They provide direction when AI produces ten plausible plans. They find the leadership sponsor who can protect the work, unblock the politics, and make the organization care.

Those two things are crucial: direction and sponsorship.

Without direction, the team executes a beautiful plan toward the wrong hill.

Without sponsorship, even the right plan dies in the organization.

So large organizations will still need translators who can operate inside the business and take responsibility for the path.

But the bar rises.

The valuable translator is a strategy operator. They understand the vision, map the constraints, choose the direction, create the roadmap, align the stakeholders, find the sponsor, and own part of the execution.

The weak translator says: "Here is what leadership wants."

The strong translator says: "Here is the feasible path. Here are the tradeoffs. Here is what I will personally drive."

**中文：**

Translator 这个角色不会在所有地方消失。它会变得更依赖判断。

大公司仍然需要能读懂组织的人。

规模一大，vision 会变得政治化。Strategy 会跨 function。Execution 会碰到 legal、finance、sales、security、customer success 和 compliance。必须有人跨激励翻译，不只是跨语言翻译。

AI 可以总结会议。它可以暴露分歧。它不能完全解决政治。

AI 可以起草 roadmap。它不知道哪个 VP 会挡，哪个团队有隐藏 capacity，哪次 compliance review 会拖六周，哪个客户承诺已经限制了架构。

更重要的是，AI 只懂你已经成功编码进去的业务。

它可以读文档、ticket、CRM note、Slack thread、dashboard 和 call transcript。这有帮助。但默认情况下，它仍然不知道哪个客户痛点现在最急，哪条 revenue line 这个季度最重要，哪个内部指标只是表演，哪个团队已经很累，哪个 executive 说话有分量，哪个 sponsor 能让一个困难变化真正发生。

这就是未来 translator，或者 TLM，继续创造价值的地方。

他的工作不再是翻译语言。他要翻译现实。

他知道业务下一步应该往哪里去。AI 给出十个看起来都合理的 plan 时，他提供方向感。他找到 leadership 里的 sponsor，让这件事被保护、被 unblock，并且真的变成组织优先级。

这两个点对工作至关重要：方向感和 sponsorship。

没有方向感，团队会把一个漂亮 plan 执行到错误山头。

没有 sponsor，即使 plan 是对的，也会死在组织里。

所以，大组织仍然需要能在业务里运转、并且对路径负责的 translator。

但门槛会提高。

有价值的 translator 要升级成 strategy operator。他理解 vision，画出 constraints，选择方向，做出 roadmap，对齐 stakeholders，找到 sponsor，并拥有一部分 execution。

弱 translator 说：“这是 leadership 想要的。”

强 translator 说：“这是可行路径。这些是 tradeoffs。这一部分我亲自推进。”

---

## The Objection: AI Will Learn The Organization Too
## 反对意见：AI 也会越来越懂组织

**English:**

The strongest objection is that AI will get much better at company context.

It will connect to Slack, Jira, Linear, Salesforce, GitHub, docs, meetings, support tickets, product analytics, and financial systems. It will learn how decisions were made, which teams are overloaded, which customers are angry, which projects keep slipping, and which leaders usually approve what.

This is true.

This is why weak translation dies even faster.

If your value is remembering what happened in meetings, AI will remember more. If your value is forwarding status, AI will forward it faster. If your value is writing the first version of the roadmap, AI will write it cheaper.

Defensible human value comes from judgment under incomplete context.

Even with every system connected, the organization still needs someone to decide which signal matters, which conflict deserves escalation, which customer pain should redirect the roadmap, which executive should sponsor the work, and when a clean AI-generated plan is politically or operationally fake.

AI can make the map richer.

Someone still has to choose the route.

**中文：**

最强的反对意见是：AI 会越来越懂公司 context。

它会接入 Slack、Jira、Linear、Salesforce、GitHub、文档、会议、support ticket、产品分析和财务系统。它会学到决策过去怎么发生，哪些团队过载，哪些客户生气，哪些项目总是延期，哪些 leader 通常会 approve 什么。

这是对的。

所以弱翻译会死得更快。

如果你的价值是记得会议里发生过什么，AI 会记得更多。如果你的价值是转发状态，AI 会转得更快。如果你的价值是写第一版 roadmap，AI 会写得更便宜。

人的可防守价值，来自在 context 仍然不完整时做判断。

即使所有系统都接上了，组织仍然需要有人判断哪个 signal 重要，哪个冲突值得 escalation，哪个客户痛点应该改变 roadmap，哪个 executive 应该 sponsor 这件事，以及什么时候一个干净的 AI-generated plan 在政治上或操作上是假的。

AI 可以让地图更丰富。

但仍然需要有人选择路线。

---

## What Dies And What Survives
## 什么会死，什么会留下

**English:**

What dies:

- Status relay.
- Meeting forwarding.
- Translation without judgment.
- Roadmap writing without feasibility ownership.
- People management disconnected from execution.

What survives:

- Judgment under ambiguity.
- Strategy under constraints.
- Cross-functional trust.
- Direction grounded in business reality.
- Sponsor-finding inside leadership.
- Roadmap design.
- Execution ownership.
- The ability to turn fuzzy vision into a feasible path.

Middle management does not vanish in one clean cut. It gets compressed. The low-value layer disappears first. The high-value layer becomes more demanding.

The old middle manager translated between thinkers and doers.

The new one has to think and do.

**中文：**

会死掉的东西：

- 状态转发。
- 会议转发。
- 没有判断力的翻译。
- 不拥有可行性的 roadmap 写作。
- 和执行脱节的 people management。

会留下的东西：

- 模糊环境下的判断。
- 约束条件下的 strategy。
- 跨 function 的信任。
- 扎在业务现实里的方向感。
- 在 leadership 里找到 sponsor 的能力。
- Roadmap 设计。
- Execution ownership。
- 把模糊 vision 变成可行路径的能力。

中层管理不会被一刀切地消灭。它会被压缩。低价值层先消失。高价值层变得更难。

旧中层在 thinker 和 doer 之间做翻译。

新中层必须同时 think 和 do。

---

## Recap: The Manager Becomes A Builder Again
## Recap：Manager 要重新成为 Builder

**English:**

AI makes information flow faster.

Vision can become strategy faster. Strategy can become roadmap faster. Roadmap can become execution faster.

That compresses the middle.

The future middle manager cannot live on translation alone. They need to turn fuzzy intent into feasible strategy. They need to know which plan will break. They need to choose the right hill, find the sponsor, and own a piece of the build.

In smaller companies, this means fewer pure managers.

In larger companies, it means better translators with deeper execution responsibility. They understand the business, understand the people, set direction, and find the sponsor who can make the work matter.

The old question was: are you an IC or an EM?

The new question is sharper: can you convert ambiguity into direction, sponsorship, and execution, then carry part of that execution yourself?

That is the death of middle management as we knew it.

And the rise of the TLM.

**中文：**

AI 让信息流动更快。

Vision 可以更快变成 strategy。Strategy 可以更快变成 roadmap。Roadmap 可以更快变成 execution。

中间层会被压缩。

未来的中层管理不能只靠翻译活着。他要把模糊 intent 变成可行 strategy。要知道哪个 plan 会碎。要选对山头，找到 sponsor，并拥有一部分 build。

在小公司，纯 manager 会更少。

在大公司，translator 会更强，也会承担更深的 execution responsibility。他要懂业务，懂人，提供方向感，并找到能让事情成立的 sponsor。

旧问题是：你是 IC 还是 EM？

新问题更尖锐：你能不能把 ambiguity 变成方向、sponsorship 和 execution？你能不能亲自扛起其中一部分？

这就是我们熟悉的中层管理之死。

也是 TLM 的崛起。`},{id:"article6-winning-with-taste-in-ai-era",titleEn:"Winning in the AI Era: Taste Is the Bottleneck",titleZh:"AI 时代如何赢：关键是 Taste",category:"Opinions",date:"2026-05-30",author:"Sean",release:"published",keywords:["AI Era","Taste","Judgment","Role Models","Frontier Work"],history:["Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Initial draft","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Editorial polish","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Context: Building Is Getting Cheap
## Context：做出来正在变便宜

**English:**

AI is collapsing the distance between idea and implementation.

A rough product thought can become a prototype. An engineer can ask for architecture options, migration plans, tests, edge cases, and first-pass code. A founder can generate landing pages, sales copy, research questions, pricing pages, dashboards, and internal tools.

The output still breaks. The plan still needs judgment. The code still needs review.

But the direction is clear: more people can make more things faster.

That changes the bottleneck.

When making was expensive, the winner was often the person who could execute at all. When making becomes cheap, the winner is the person who knows what is worth making, what good looks like, and where the current version is quietly wrong.

That is taste.

The problem is that I do not fully know what taste is.

That is the interesting part.

Taste is hard to define cleanly. It is not one skill. It is not just aesthetics. It is not just product judgment, technical judgment, business judgment, or design judgment. It is a moving combination of all of them, shaped by exposure, decisions, mistakes, role models, and repeated contact with reality.

So the useful question is not "can we define taste perfectly?"

The useful question is: can we approximate its shape and train toward it?

**中文：**

AI 正在压缩 idea 到 implementation 的距离。

一个粗糙产品想法可以变成 prototype。工程师可以直接要 architecture options、migration plan、tests、edge cases 和 first-pass code。Founder 可以生成 landing page、sales copy、研究问题、pricing page、dashboard 和内部工具。

输出还是会坏。计划还是需要判断。代码还是要 review。

但方向很清楚：更多人可以更快做出更多东西。

瓶颈因此改变了。

当“做出来”很贵时，赢家常常是那个能执行的人。当“做出来”变便宜时，赢家变成那个知道什么值得做、什么算好、当前版本哪里不对劲的人。

这就是 taste。

问题是，我也不知道 taste 到底是什么。

这正是精彩的地方。

Taste 很难被完整定义。它不是单一技能。也不只是审美。不只是产品判断、技术判断、商业判断或设计判断。它是这些东西的移动组合，被 exposure、decision、mistake、role model 和反复接触现实塑形。

所以真正有用的问题不是“我们能不能完美定义 taste？”

真正有用的问题是：我们能不能逼近它的形状，并且朝那个方向训练自己？

---

## Thesis: Taste Is A Sensor For Quality
## Thesis：Taste 是质量传感器

**English:**

Taste is a sensor for quality under ambiguity.

It tells you when something is almost right but not sharp enough. It tells you when a product feels powerful but confusing. It tells you when a technical design is elegant but too clever. It tells you when a strategy sounds smart but will not survive the first real customer conversation.

Good taste does not always give you a complete answer.

Often it gives you a smell.

This is off.

This is too generic.

This solves the demo, not the workflow.

This looks impressive, but the user will not trust it.

This architecture is beautiful, but the team cannot operate it.

That smell matters more now because AI can generate plausible work at scale. Plausible writing. Plausible product specs. Plausible code. Plausible designs. Plausible strategies.

Bad output is easy to reject.

Plausible output is more dangerous. It passes a lazy review. It creates the feeling of progress. It lets the team move before anyone has asked whether the thing is true.

Taste is what lets you reject the plausible and push toward the real.

**中文：**

Taste 是在模糊环境里感知质量的传感器。

它会告诉你：某个东西接近对了，但还不够锋利。某个产品看起来强，但用起来乱。某个技术设计很优雅，但太聪明。某个 strategy 听起来漂亮，但遇到第一个真实客户就会碎。

好的 taste 不一定总是给你完整答案。

很多时候，它先给你一种 smell。

这里不对。

这个太 generic。

这解决了 demo，没有解决 workflow。

这看起来很厉害，但用户不会信。

这个架构很美，但团队运维不了。

这种 smell 在现在更重要，因为 AI 可以大规模生成“看起来合理”的东西。合理的文章。合理的产品 spec。合理的代码。合理的设计。合理的 strategy。

坏输出很容易拒绝。

更危险的是 plausible output。它能通过懒惰 review。它制造进展感。它让团队在没人追问“这东西到底真不真”之前就继续往前走。

Taste 让你拒绝“看起来差不多”，继续往真实推进。

---

## 1. Become An Advocate For A Direction
## 1. 成为某个方向的 Advocator

**English:**

One way to train taste is to become an advocate for a direction.

Pick a frontier. AI coding. Agent workflows. AI-native education. Personal software. Vertical AI. New design tools. Anything real enough that people are building and arguing about it.

Then take a side.

Do not take it forever. Do not turn it into religion. Take it seriously enough that you have to defend it.

Advocacy sharpens perception. If you say "AI coding is the future," you must learn which parts of coding AI actually improves, which parts it still fails at, which teams benefit first, which workflows are fake, and which demos hide human labor.

If you say "agents will change enterprise software," you must learn where agents break: permissions, memory, evaluation, latency, trust, handoff, auditability, and unclear ownership.

The point is to build a view strong enough to be tested.

A weak view stays vague and survives everything. A strong view meets reality and gets corrected.

That correction is where taste grows.

**中文：**

训练 taste 的一个方法，是成为某个方向的 advocator。

选一个前沿方向。AI coding。Agent workflow。AI-native education。Personal software。Vertical AI。新的设计工具。任何一个足够真实、已经有人在建、有人在争论的方向都可以。

然后站队。

不是永远站队。也不是宗教式站队。你只需要认真到必须为它辩护。

Advocacy 会迫使感知变锋利。如果你说“AI coding 是未来”，你就必须搞清楚 AI 到底改善了 coding 的哪一部分，哪一部分还很烂，哪些团队会先受益，哪些 workflow 是假的，哪些 demo 藏了人工劳动。

如果你说“agents 会改变 enterprise software”，你就必须理解 agents 在哪里会坏：权限、memory、evaluation、latency、trust、handoff、auditability，以及不清楚谁负责。

重点是形成一个强到可以被测试的观点。

弱观点保持模糊，所以什么都能解释。强观点撞上现实，然后被修正。

修正发生的地方，就是 taste 生长的地方。

---

## 2. Use The Frontier, Do Not Only Read About It
## 2. 去体验最前沿的产品，不要只读二手总结

**English:**

Taste needs contact.

Reading summaries is useful. Watching demos is useful. Commentary is useful. But taste does not form from secondhand descriptions alone.

You have to use the frontier products.

Use the new coding tools until you feel where they accelerate you and where they quietly create debt. Use the new design tools until you know which outputs feel alive and which ones feel like template paste. Use the new AI research tools until you know when they help you think and when they only create organized noise.

The frontier is usually messy.

That mess is the training data.

When a product is early, you can feel its assumptions. You can see what the builders think the user is doing. You can see where the workflow is fighting the model, where the model is fighting the interface, and where the whole thing suddenly works.

Mature products hide those decisions.

Frontier products expose them.

That exposure trains taste because you start noticing quality before the market has named it.

**中文：**

Taste 需要接触。

读总结有用。看 demo 有用。读 commentary 也有用。但 taste 不会只从二手描述里长出来。

你必须亲自用最前沿的产品。

用新的 coding tools，用到你感觉出它在哪里加速你，在哪里悄悄制造 debt。用新的设计工具，用到你知道哪些输出是活的，哪些只是 template paste。用新的 AI research tools，用到你知道它什么时候帮助你思考，什么时候只是制造结构化噪音。

前沿产品通常很乱。

这种乱就是训练数据。

产品还早的时候，你能摸到它的 assumptions。你能看到 builder 以为用户在做什么。你能看到 workflow 在哪里和 model 打架，model 在哪里和 interface 打架，也能看到它在哪个瞬间突然成立。

成熟产品会隐藏这些决定。

前沿产品会暴露它们。

这种暴露会训练 taste，因为你开始在市场命名质量之前，先感知质量。

---

## 3. Do Frontier Work Yourself
## 3. 做最前沿的工作

**English:**

Using frontier products is still not enough.

You have to do frontier work.

Build with the tools. Ship something real. Automate a workflow you understand. Try to replace part of your own job. Try to make an AI system useful for a user who does not care about AI.

Taste gets sharper when being wrong has a cost.

It is easy to have opinions about product quality when you are looking at screenshots. It is harder when users ignore your feature. It is easy to talk about agents in theory. It is harder when your agent fails halfway through a workflow and nobody knows whether to retry, escalate, or trust the partial result.

The work teaches tradeoffs that essays cannot teach.

Speed versus correctness.

Autonomy versus control.

Power versus simplicity.

Beauty versus clarity.

Generalization versus the one workflow that actually matters.

Good taste is not formed by admiring good things from a distance. It is formed by making decisions, watching them fail, and learning which failure you should have smelled earlier.

**中文：**

只体验前沿产品仍然不够。

你还要做最前沿的工作。

用这些工具去 build。Ship 一个真实东西。自动化一个你理解的 workflow。尝试替代你自己工作的一部分。尝试让一个不关心 AI 的用户真正用上 AI system。

当判断错误需要付出代价时，taste 会变锋利。

看 screenshot 时，评价产品质量很容易。用户完全不用你的 feature 时，就难多了。理论上谈 agents 很容易。你的 agent 在 workflow 中间失败，没人知道该 retry、escalate，还是信任 partial result 时，就难多了。

工作本身会教你文章教不了的 tradeoff。

速度和正确性。

自主性和控制感。

能力和简单性。

美感和清晰度。

通用性和那个真正重要的 workflow。

好的 taste 不是远远欣赏好东西形成的。它来自做决定，看决定失败，然后意识到哪个 failure 你本来应该更早闻出来。

---

## 4. Study Decisions, Not Only Outputs
## 4. 学习决定，不只是学习结果

**English:**

Most people study finished products.

They look at the UI, the feature list, the launch post, the metrics, the public story.

That is useful, but incomplete.

Taste lives in the decisions behind the output.

Why did the team choose this onboarding flow? Why does this product hide power behind a simple default? Why does this tool expose configuration instead of automating it? Why did this company ship a narrower product instead of a broader platform? Why did this design remove one more button even though advanced users might want it?

The output is the fossil.

The decision is the living thing.

To train taste, reverse-engineer the decision path. What constraints were likely present? What alternatives did they reject? What did they optimize for? What did they sacrifice? Which users did they choose to disappoint?

This is especially important in AI products because every good AI workflow is full of tradeoffs.

How much should the system ask before acting?

When should it show reasoning?

When should it interrupt?

When should it be deterministic?

When should it let the user steer?

Taste is the ability to feel those choices before they become obvious.

**中文：**

大多数人学习 finished product。

他们看 UI、feature list、launch post、metrics、public story。

这有用，但不完整。

Taste 藏在输出背后的决定里。

为什么团队选择这个 onboarding flow？为什么这个产品把能力藏在简单默认值后面？为什么这个工具暴露配置，而不是自动化掉？为什么这家公司先 ship 一个更窄的产品，而不是更宽的平台？为什么这个设计又删掉了一个按钮，即使 advanced users 可能想要？

输出是化石。

决定才是活物。

训练 taste，要 reverse-engineer 决策路径。当时可能有什么约束？他们拒绝了哪些 alternative？他们优化什么？牺牲什么？选择让哪类用户失望？

这在 AI 产品里尤其重要，因为每个好的 AI workflow 都充满 tradeoff。

系统行动前应该问多少问题？

什么时候展示 reasoning？

什么时候打断用户？

什么时候必须 deterministic？

什么时候应该让用户 steering？

Taste 是在这些选择变得显而易见之前，先感知它们的能力。

---

## 5. Build Role Models And Mimic Them
## 5. 建立 Role Model，然后模仿他们

**English:**

Another way to train taste is to borrow someone else's taste before you have your own.

Find role models.

Not abstract heroes. Specific people whose work you can inspect. A founder who writes sharp strategy. A designer who makes interfaces feel inevitable. An engineer who simplifies systems without making them weak. A product leader who can cut scope without killing ambition.

Then mimic them.

At first, this may feel embarrassing.

You may copy the surface. The phrasing. The structure. The way they critique. The way they ask questions. The way they make decisions. Some of it will be clumsy. Some of it will be imitation without understanding.

That is fine.

The goal is to use mimicry as an entry point, then outgrow the imitation.

When you imitate a strong operator, you are forced to ask: why did they think this way? Why did they ignore that metric? Why did they simplify here? Why did they refuse this feature? Why did they move fast there but slow down here?

At the beginning, mimicry is performance.

With reflection, it becomes apprenticeship.

With enough contact with reality, it becomes your own judgment.

**中文：**

训练 taste 的另一个方法，是在你还没有自己的 taste 之前，先借用别人的 taste。

建立 role model。

不是抽象偶像。是那些你能检查其作品的人。一个 strategy 写得很锋利的 founder。一个能把界面做得像“本来就该这样”的 designer。一个能简化系统但不削弱系统的 engineer。一个能砍 scope 但不砍 ambition 的 product leader。

然后模仿他们。

一开始可能会很尴尬。

你可能只复制表面。措辞。结构。批评方式。提问方式。做决定的姿势。有些会笨拙。有些会像东施效颦。有些只是还不理解的模仿。

没关系。

目标是把 mimicry 当入口，然后长出自己的判断。

当你模仿一个强 operator，你会被迫追问：为什么他会这样想？为什么他忽略那个 metric？为什么这里简化？为什么拒绝这个 feature？为什么那里加速，这里反而放慢？

刚开始，模仿是一种表演。

带着反思，模仿会变成学徒制。

再经过足够多现实反馈，它会变成你自己的判断。

---

## 6. The Objection: Taste Can Become Vibes
## 6. 反对意见：Taste 可能变成 Vibes

**English:**

There is a danger in talking about taste.

Taste can become a lazy word.

People can use it to hide preference, status, insecurity, or lack of evidence. "This lacks taste" can mean "I do not like it." "This feels wrong" can mean "I cannot explain my objection." "This is tasteful" can become a way for insiders to protect their own style.

That version of taste is weak.

Real taste must stay connected to reality.

It should predict something. Users trust this more. The workflow is clearer. The system is easier to operate. The writing is sharper. The design reduces confusion. The strategy creates better decisions. The product gets adopted faster. The code is easier to change.

Taste should be willing to meet feedback.

It should be willing to be wrong.

It should improve after shipping.

That is the difference between taste and vibes.

Vibes avoid accountability.

Taste accepts accountability and still acts before all the data arrives.

**中文：**

谈 taste 有一个危险。

Taste 很容易变成懒词。

人们可以用它隐藏偏好、身份感、不安全感，或者证据不足。“这个没有 taste”可能只是“我不喜欢”。“这里感觉不对”可能只是“我说不清楚反对理由”。“这个很有品味”也可能变成圈内人保护自己风格的暗号。

这种 taste 很弱。

真正的 taste 必须和现实连接。

它应该能预测某些东西。用户更信任这个。Workflow 更清楚。系统更容易运维。文字更锋利。设计减少困惑。Strategy 让决策变好。产品更快被 adoption。代码更容易改。

Taste 应该愿意接受反馈。

应该愿意承认错误。

应该在 ship 之后变得更好。

这就是 taste 和 vibes 的区别。

Vibes 逃避问责。

Taste 接受问责，同时仍然敢在数据完整之前行动。

---

## Recap: Approximate The Shape
## Recap：逼近那个形状

**English:**

AI makes production cheaper.

That does not make humans less important. It changes which human abilities matter most.

The scarce ability is no longer only producing work. It is directing work. Judging work. Smelling what is wrong. Knowing what matters. Making tradeoffs. Choosing the next version before the world has handed you a rubric.

That is why taste matters.

We do not need a perfect definition to start training it.

Become an advocate for a direction. Use frontier products. Do frontier work. Study decisions behind outputs. Build role models. Mimic them. Reflect on why the mimicry works or fails. Keep shipping so your taste stays accountable to reality.

At first, taste may feel borrowed.

Then it becomes a pattern.

Then it becomes a sensor.

Eventually it becomes a point of view.

In the AI era, winning may depend less on whether you can generate the next artifact and more on whether you can tell which artifact deserves to exist.

**中文：**

AI 让生产变便宜。

这不代表人不重要。它改变的是哪些人的能力最重要。

稀缺能力不再只是产出工作。稀缺的是 directing work、judging work、闻出哪里不对、知道什么重要、做 tradeoff，并在世界还没给你评分标准之前选出下一个版本。

这就是为什么 taste 重要。

我们不需要完美定义它，才开始训练它。

成为某个方向的 advocator。使用前沿产品。做前沿工作。学习输出背后的决定。建立 role model。模仿他们。反思为什么模仿有效或失败。持续 ship，让 taste 继续接受现实问责。

一开始，taste 可能是借来的。

然后它变成 pattern。

再然后它变成 sensor。

最后它变成你的 point of view。

AI 时代如何赢，可能不再主要取决于你能不能生成下一个 artifact。

而是取决于你能不能判断，哪个 artifact 值得存在。`},{id:"article4-peoples-ai-vs-ai-moratorium",titleEn:"Against the AI Moratorium: The People's AI Must Be Built",titleZh:"反对 AI 暂停键：普通人的 AI 必须被建造出来",category:"Commentary",date:"2026-05-25",author:"Sean",release:"published",keywords:["Bernie Sanders","AI Moratorium","People-first AI","AI Safety","Big Tech"],history:["Mon May 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Initial draft","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Summary
## 摘要

**English:**

I agree with Bernie Sanders's warning about the power structure around AI.

The context is his recent AI argument and policy push. Sanders warns that Big Tech and billionaires will capture AI, use it against workers, and push the costs of data centers onto communities. His answer is a moratorium on new large AI data centers until stronger safeguards exist.

That is the problem this piece responds to: concentrated AI power is real, but a pause may strengthen the companies that already have power.

This matters now because AI infrastructure, regulation, labor politics, and public fear are colliding at the same time. The rules written in this window may decide whether AI becomes only a corporate weapon or also a public tool.

Big Tech has strong incentives to turn AI into a profit machine: replace labor, push down wages, expand surveillance, and keep productivity gains moving toward capital.

But I reject his main prescription.

Pausing AI infrastructure sounds like protection for ordinary people. In practice, it may protect the incumbents. What we need to build is AI that ordinary people can use, audit, and aim back at platforms.

Safety has to mean more than slowing down. It has to distribute power.

The response has four steps: explain Sanders's claim, show why a pause can freeze monopoly, argue that ordinary people need AI too, and define what people-first AI should do.

**中文：**

我同意 Bernie Sanders 对 AI 权力结构的警告。

背景是他最近关于 AI 的视频和政策主张。Sanders 警告，Big Tech 和亿万富翁会控制 AI，用它伤害工人，并把数据中心的成本推给社区。他的答案是暂停新的大型 AI 数据中心，直到更强的安全保护到位。

这篇文章回应的问题是：AI 权力集中确实危险，但暂停建设可能强化已经有权力的公司。

为什么现在要讲：AI 基础设施、监管、劳工政治和公众恐惧正在同一时间撞在一起。这个窗口写下的规则，可能决定 AI 只会成为企业武器，还是也能成为公共工具。

Big Tech 有很强的激励把 AI 变成利润机器：替代劳动，压低工资，扩大监控，并把生产率收益继续集中到资本手里。

但我不同意他的主要处方。

暂停 AI 基础设施建设，听起来像保护普通人。实际可能保护巨头。真正需要建设的，是普通人能使用、能审计、能对抗平台的 AI。

安全不该停在减速上。安全要靠权力分散。

这篇回应分四步：先讲清 Sanders 的观点，再说明暂停为什么可能冻结垄断，然后解释普通人也需要 AI，最后定义 people-first AI 应该做什么。

## What Sanders Is Arguing
## Sanders 在说什么

**English:**

Sanders's recent video and policy push make the same argument: control of AI is concentrating in the hands of a few tech giants and billionaires.

His point is clear. Without constraints, AI will not naturally serve ordinary workers. It is more likely to replace labor, suppress wages, generate deepfakes, expand surveillance, and consume local electricity and water.

His policy response is the AI Data Center Moratorium Act, introduced with Alexandria Ocasio-Cortez. The bill would pause new large AI data centers until privacy, labor, environmental, electricity, and democratic safeguards are in place.

I think his diagnosis is strong.

His policy direction is too weak.

The gap between those two sentences is the whole argument. A strong diagnosis can still produce a weak remedy.

**中文：**

Sanders 最近的视频和政策动作，讲的是同一个问题：AI 的控制权正在集中到少数科技巨头和亿万富翁手里。

他的判断很清楚。没有约束，AI 不会自然服务普通工人。它更可能被用来替代劳动、压低工资、制造深伪信息、扩大监控，并消耗社区的电力和水资源。

他的政策回应，是和 Alexandria Ocasio-Cortez 推动 AI Data Center Moratorium Act。这个法案要求，在隐私、劳工、环境、电力和民主安全保护到位之前，暂停新的大型 AI 数据中心建设。

我认为他的诊断很强。

他的政策方向太弱。

这两句话之间，就是整篇文章的分歧。诊断可以很强，处方仍然可能太弱。

## Point 1: A Pause May Freeze Monopoly
## Point 1: 暂停可能冻结垄断

**English:**

Sanders is worried about concentrated power. That worry is valid.

The problem is that a pause may fail to distribute power. It may freeze the current power map.

Early AI diffusion is messy. That messiness gives small companies, open-source communities, independent developers, educators, and ordinary workers an opening. Compute, models, tools, and workflows are still moving. Ordinary people can use AI to learn programming, read contracts, analyze financial statements, do research, and build automation.

That is already a form of power redistribution.

If new data centers and infrastructure are paused, later entrants get blocked first. The giants already have compute, cloud platforms, capital, and lobbying capacity. Scarcer compute raises prices. More complex compliance raises costs. The companies that can absorb those costs are usually the large ones.

So the harder question is this:

If we are worried about AI monopoly, why choose a policy that may push scarce resources further toward the companies that already have them?

Waiting for big companies to become better is not realistic. Big companies are incentive machines. If profit comes from automation layoffs, data extraction, closed ecosystems, and regulatory arbitrage, they will keep moving in those directions.

Without counter-power, capital rarely gives up capital logic.

Restraint from above is insufficient. Ordinary people also need capability from below.

**中文：**

Sanders 的核心担心是权力集中。这个担心成立。

问题是，暂停建设未必会分散权力。它可能把现有权力冻住。

AI 扩散早期很混乱。也正因为混乱，小公司、开源社区、独立开发者、教育者和普通劳动者还有入口。算力、模型、工具和工作流仍在流动。普通人可以用 AI 学编程，读合同，分析财报，做研究，搭自动化。

这已经是一种权力再分配。

如果暂停新的数据中心和基础设施建设，后来者会先被卡住。巨头已经有算力、云平台、资本和游说能力。算力越稀缺，价格越高。合规越复杂，成本越高。最后能承担这些成本的，还是大公司。

所以要追问一个更硬的问题：

如果我们担心少数公司垄断 AI，为什么要选择一种可能让稀缺资源更集中在少数公司手里的政策？

等待大公司变好也不现实。大公司是激励机器。只要利润来自自动化裁员、数据攫取、封闭生态和监管套利，它们就会继续沿着这些方向走。

没有对抗力量，资本很少主动放弃资本逻辑。

上面的约束不够。普通人也需要下面的能力。

## Point 2: Ordinary People Must Also Have AI
## Point 2: 普通人也必须拥有 AI

**English:**

In Sanders's story, ordinary people often appear in a passive position.

They are workers replaced by AI. Voters manipulated by algorithms. Data sources harvested by platforms. Residents affected by data center electricity costs.

All of that is real.

But ordinary people can also become AI users. That half of the story matters.

AI's most important democratic potential goes beyond efficiency. It lowers the cost of judgment and literacy.

Many capabilities used to be locked behind education, professional networks, consulting fees, language barriers, and technical barriers. To understand a contract, you needed a lawyer. To read financial statements, you needed accounting knowledge. To automate a workflow, you needed programming skill. To learn an industry deeply, you needed mentors and time.

Now an ordinary person can turn AI into a tutor, opposing counsel, research assistant, coding partner, negotiation coach, and fact checker.

AI will hallucinate. It will flatter you. It will miss context.

It cannot replace judgment.

But it can train judgment.

A public that cannot use AI can only be influenced by AI. A public that can use AI has a chance to audit it, argue with it, route around it, and organize against it.

That is why people-first AI matters. It gives people a way to use AI back.

**中文：**

Sanders 的叙事里，普通人经常站在被动位置。

他们是被 AI 替代的工人。被算法操纵的选民。被平台收割的数据源。被数据中心电费外部性影响的社区居民。

这些身份都真实存在。

但普通人也可以成为 AI 的使用者。这一半现实不能丢。

AI 最重要的民主化潜力超过效率。它降低了判断力和见识的获得成本。

过去，很多能力被教育背景、职业网络、咨询费用、语言门槛和技术门槛锁住。想理解合同，要找律师。想看懂财报，要懂会计。想做自动化，要会编程。想系统学习一个行业，要有导师和时间。

现在，一个普通人可以把 AI 变成私人导师、反方辩手、研究助理、代码搭档、谈判教练、事实核查员。

AI 会胡说。会迎合。会漏掉上下文。

它不能替代判断。

但它可以训练判断。

一个不会使用 AI 的公众，只能被 AI 影响。一个会使用 AI 的公众，才有机会审计 AI、反驳 AI、绕过 AI，并组织起来对抗 AI。

这就是 people-first AI 的意义。人也要能反过来使用 AI。

## Point 3: People-First AI Is The Counter-Tool
## Point 3: People-First AI 才是反击工具

**English:**

Big companies will use AI to maximize profit.

Ordinary people need AI to improve their bargaining power, detection power, and organizing power.

That is the point of people-first AI. It should not be a softer chatbot. It should be sharper.

It can be a contract reviewer for workers, flagging dangerous non-compete terms.

It can be a price detector for consumers, checking whether platforms are personalizing prices against them.

It can be a tenant rights assistant, helping renters understand whether a landlord's terms are legal.

It can be a learning coach for students, pulling high-quality education out of expensive schools and tutoring systems.

It can be a fact-checking system for journalists and citizens, tracing the holes in political ads, deepfake videos, and corporate PR.

It can be an analysis tool for unions and community groups, turning scattered complaints into structured evidence.

The goal is clear: make deception harder, exploitation more expensive, and information asymmetry smaller.

"AI safety" should mean more than building less AI. A better frame is to build AI that is safety-first, public-first, auditable, competitive, and affordable for ordinary people.

That still leaves a hard question: what should regulation do if the pause button is the wrong tool?

**中文：**

大公司会用 AI 最大化利润。

普通人也需要用 AI 提高谈判能力、识别能力和组织能力。

这就是 people-first AI 的意义。它不该只是一个更温柔的聊天机器人。它应该更锋利。

它可以是劳动者的合同审阅器，指出竞业协议里的危险条款。

它可以是消费者的价格侦测器，看出平台有没有对你做个性化加价。

它可以是租客的权益助手，帮你理解房东条款是否合法。

它可以是学生的学习教练，把高质量教育从昂贵学校和补习体系里释放出来。

它可以是记者和公民的事实核查系统，追踪政治广告、深伪视频和企业公关稿里的漏洞。

它可以是工会和社区组织的分析工具，把分散的抱怨变成结构化证据。

这类 AI 的目标很清楚：让欺骗更难，让压榨更贵，让信息不对称更小。

“AI 安全”不该只被理解成少建 AI。更好的理解是：建造安全优先、公众优先、可审计、可竞争、普通人用得起的 AI。

这会留下一个更难的问题：如果暂停键用错了，监管到底应该做什么？

## The Counterargument For A Pause
## 支持暂停的最强理由

**English:**

The strongest case for a pause should be taken seriously.

AI infrastructure is not abstract. Data centers use electricity, water, land, tax incentives, and grid capacity. If a community bears those costs while the gains flow to a small group of platforms, the public has a right to object.

There is also a sequencing argument. Once surveillance systems, worker-monitoring tools, deepfake pipelines, and automated replacement workflows are deployed, the damage may be hard to reverse. A pause can create time for democratic institutions to catch up.

That argument is not foolish.

The question is whether a broad pause actually gives power to the public, or whether it gives more time and scarcity advantage to incumbents.

My concern is the second outcome.

A good policy should slow the harmful uses, tax the externalities, force auditability, and fund public capability. A broad infrastructure pause risks doing one thing too bluntly: making AI harder to access for everyone except the companies that already have it.

**中文：**

支持暂停的最强理由，应该认真对待。

AI 基础设施不是抽象东西。数据中心会消耗电力、水、土地、税收优惠和电网容量。如果社区承担这些成本，而收益流向少数平台，公众当然有权反对。

还有一个顺序问题。监控系统、工人管理工具、深伪管线和自动化替代流程一旦部署，伤害可能很难逆转。暂停可以给民主机构争取追赶时间。

这个论点不蠢。

真正的问题是：广泛暂停到底会把权力交给公众，还是会把更多时间和稀缺资源优势交给 incumbents？

我担心的是后者。

好的政策应该放慢有害用途，征收外部性成本，强制可审计，并资助公共能力。广泛基础设施暂停的问题是太钝：它可能让所有人更难获得 AI，除了那些已经拥有 AI 的公司。

## What Regulation Should Do
## 监管应该做什么

**English:**

A serious alternative to the pause button still needs regulation.

Sanders's concerns about electricity, privacy, labor replacement, deepfakes, and democratic manipulation all have real foundations. Data centers should not shift unlimited electricity and water costs onto communities. Companies should not train on public data and privatize all the gains. Platforms should not use AI to monitor workers, manipulate consumers, or steer voters.

The policy direction should be clear: limit harm and expand capacity.

For example:

- Charge data centers for real electricity, water, and carbon costs.
- Require independent audits for high-risk AI systems.
- Strengthen data rights and privacy protections.
- Use antitrust policy against vertical bundling across cloud, chips, models, and distribution.
- Give schools, libraries, community colleges, small businesses, unions, and local governments public compute credits and open-source AI tools.
- Require large companies that gain major AI productivity benefits to fund retraining, profit sharing, and role transitions.
- Support open models, explainable tools, and local deployment.

This path is harder. It is also more serious.

Its goal is not to make AI arrive more slowly. Its goal is to prevent AI capability from flowing only to capital.

**中文：**

反对暂停键，不代表支持无监管狂奔。

Sanders 对电力、隐私、劳动替代、深伪和民主操纵的担忧，都有现实基础。数据中心不能无限制地把电费和水资源成本转嫁给社区。企业不能用公共数据训练模型，再把收益全部私有化。平台不能用 AI 监控工人、诱导消费者、操纵选民。

政策方向应该清楚：管住伤害，扩大能力。

比如：

- 对数据中心征收真实的电力、水资源和碳成本。
- 要求高风险 AI 系统接受独立审计。
- 强化数据权利和隐私保护。
- 用反垄断政策限制云、芯片、模型和分发渠道的纵向捆绑。
- 给学校、图书馆、社区学院、小企业、工会和地方政府提供公共算力券和开源 AI 工具。
- 要求因 AI 获得重大生产率收益的大企业承担员工再培训、利润分享和转岗责任。
- 支持开放模型、可解释工具和本地部署。

这条路线更难。但它更认真。

目标很清楚：防止 AI 的能力只流向资本。减速本身不够。

## Recap
## 回到核心

**English:**

Sanders's warning is worth hearing.

Technology does not automatically side with ordinary people. Capital will turn every new tool into a profit machine until someone stops it.

But pausing construction is not neutral. In a market where giants already lead, capital is concentrated, and infrastructure is scarce, a pause can freeze monopoly.

The real choice is plain.

Will AI belong only to giants, or also to ordinary people?

Do we wait for big companies to restrain themselves, or build tools that can audit, check, and fight them?

Does safety mean stopping, or does it mean distributing capability?

I choose the latter.

AI will become power.

Ordinary people should demand more than a slower arrival of power. They should demand some of that power for themselves.

That is the question Sanders's argument leaves behind.

The hard question is not whether we need AI safety. We do.

The hard question is safety for whom, from whom, and with what power on the other side.

If safety only means making ordinary people wait, it may leave them dependent on the same institutions that already control the tools.

If safety means giving people ways to inspect, contest, and redirect AI systems, then safety becomes democratic capacity.

So the next time someone says "AI safety," ask what kind of safety they mean.

Safety that protects people from AI.

Or safety that gives people enough power to protect themselves.

**中文：**

Sanders 的警告值得听。

技术不会自动站在普通人这边。资本会把每一种新工具变成利润机器，直到有人阻止它。

但暂停建设带有方向。在一个巨头领先、资本集中、基础设施稀缺的市场里，暂停很可能冻结垄断。

真正的选择很朴素。

AI 只给巨头用，还是也给普通人用？

我们等待大公司自我约束，还是建造能审计、制衡、反击大公司的工具？

安全意味着停止，还是意味着把能力分散到更多人手里？

我选择后者。

AI 会成为权力。

普通人不该只要求权力慢一点到来。普通人应该要求自己也拥有它。

这才是 Sanders 的论点最后留下的问题。

真正难的问题不是我们要不要 AI safety。我们当然需要。

真正难的问题是：谁的 safety？防谁？另一边又给普通人留下什么能力？

如果 safety 只是让普通人等待，它可能只是让普通人继续依赖那些已经控制工具的机构。

如果 safety 意味着普通人有办法检查、质疑、反制和重新定向 AI 系统，那 safety 就不只是防护栏。它会变成一种民主能力。

所以下一次有人说 AI safety 时，真正该追问的是：他说的是哪一种 safety？

是保护人们不被 AI 伤害的 safety。

还是让人们拥有足够能力保护自己的 safety。

## References

**English:**

- Bernie Sanders, ["AI must work for working families, not just the billionaires who own it."](https://www.sanders.senate.gov/videos/ai-must-work-for-working-families-not-just-the-billionaires-who-own-it/)
- Sanders and Ocasio-Cortez, ["AI Data Center Moratorium Act,"](https://www.sanders.senate.gov/press-releases/news-sanders-ocasio-cortez-announce-ai-data-center-moratorium-act/) March 25, 2026.
- U.S. Senate HELP Committee Minority Staff Report, ["The Big Tech Oligarchs' War Against Workers,"](https://www.sanders.senate.gov/wp-content/uploads/10.6.2025-The-Big-Tech-Oligarchs-War-Against-Workers.pdf) October 6, 2025.
- The Hill, ["Bernie Sanders, labor leaders warn of AI risks for workers,"](https://www.sanders.senate.gov/in-the-news/bernie-sanders-labor-leaders-warn-of-ai-risks-for-workers/) April 17, 2026.

## 参考资料

**中文：**

- Bernie Sanders, ["AI must work for working families, not just the billionaires who own it."](https://www.sanders.senate.gov/videos/ai-must-work-for-working-families-not-just-the-billionaires-who-own-it/)
- Sanders and Ocasio-Cortez, ["AI Data Center Moratorium Act,"](https://www.sanders.senate.gov/press-releases/news-sanders-ocasio-cortez-announce-ai-data-center-moratorium-act/) March 25, 2026.
- U.S. Senate HELP Committee Minority Staff Report, ["The Big Tech Oligarchs' War Against Workers,"](https://www.sanders.senate.gov/wp-content/uploads/10.6.2025-The-Big-Tech-Oligarchs-War-Against-Workers.pdf) October 6, 2025.
- The Hill, ["Bernie Sanders, labor leaders warn of AI risks for workers,"](https://www.sanders.senate.gov/in-the-news/bernie-sanders-labor-leaders-warn-of-ai-risks-for-workers/) April 17, 2026.`},{id:"article1-engineeringbinary",titleEn:"The Engineering Binary: Product, Infrastructure, and the FDE Bridge",titleZh:"工程师的二元演变：产品、基座与 FDE 的桥梁",category:"Opinions",date:"2026-03-29",author:"Sean",release:"published",keywords:["Engineering Binary","Product vs Infrastructure","FDE","AI Engineering"],history:["Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release","Tue Mar 31 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Added temporal arc, citations, and North Star collaboration section","Wed Apr 01 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Prose rewrite — less formulaic, more human voice","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Introduction: AI Changed The Bottleneck
## 引言：AI 改变了瓶颈

**English:**

For years, engineers were sorted by stack.

React. Go. Kubernetes. Postgres. Frontend. Backend. Data. DevOps.

That made sense when implementation was the hard part. The stack defined the work because writing the code took most of the energy. Teams split the system into layers. Each layer got its own specialist. Coordination was painful, but everyone accepted the cost.

Now the problem is different: AI is making implementation cheaper.

When code gets easier to produce, the old engineering categories lose force. The hard question moves to ownership. Who understands the user, the platform, or the deployment reality well enough to direct AI and stay accountable for the result?

This matters now because AI can already draft across frontend, backend, data, tests, and infrastructure. Companies will ask fewer people to cover wider scope. Engineers need a clearer map of where durable leverage still lives.

That is the bottleneck shift.

AI can scaffold the component. It can write the CRUD endpoint. It can draft the migration. What it cannot do, at least not by itself, is own the outcome. It cannot decide why this feature matters, why this user is stuck, why this deployment failed inside a messy enterprise, or which platform primitive should exist for the next hundred product teams.

That is the new shape of engineering.

The middle layer is thinning. Ticket executors lose leverage. The engineers who survive own one of three things: the product outcome, the infrastructure primitive, or the deployment gap between the two.

To see why those three survive, start with the old problem: turning domain knowledge into working systems.

**中文：**

过去很多年，工程师按技术栈分类。

React。Go。Kubernetes。Postgres。前端。后端。数据。DevOps。

这在过去是合理的。实现本身很难。写代码占掉大部分精力。团队把系统切成一层一层。每一层都有专家。沟通很痛，但大家接受这个成本。

现在的问题变了：AI 正在让实现变便宜。

代码更容易产出后，旧工程分类的力量会下降。真正难的是 ownership。谁理解用户、平台或部署现实？谁能指挥 AI 写出来，并对结果负责？

为什么现在要讲：AI 已经能跨前端、后端、数据、测试和基础设施写第一版。公司会让更少的人覆盖更大的 scope。工程师需要更清楚地知道，自己的长期杠杆在哪里。

瓶颈就这样变了。

AI 能搭组件。能写 CRUD 接口。能起草 migration。它做不到的，是独立拥有结果。它不知道为什么这个功能重要。它不知道用户为什么卡住。它不知道一个产品为什么在真实企业里部署失败。它也不知道哪一个平台原语值得为后面一百个产品团队建出来。

这就是工程的新形状。

中间层正在变薄。只执行 ticket 的工程师杠杆会下降。留下来的工程师，要拥有三件事之一：产品结果，基础设施原语，或两者之间的部署鸿沟。

要理解为什么这三类人会留下，先看一个老问题：如何把领域知识变成能运行的系统。

---

## The Same Problem Across Five Eras
## 同一个问题，五个时代

**English:**

The core need never changed.

People with domain knowledge have always needed to turn that knowledge into reliable systems. An actuary wants mortality models to run across millions of policies. A supply-chain operator wants disruption models to route shipments. A loan officer wants risk judgment to become a repeatable workflow.

What changed was the barrier between understanding and delivery.

Before computing, the domain expert was also the computing layer. Work moved slowly because calculation moved slowly.

In the mainframe era, the programmer became the translator. The domain expert explained the model. Someone else turned it into machine instructions. Translation became the bottleneck.

In the client-server era, specialization exploded. Frontend, backend, database, systems. Conway's Law took over. The software copied the communication structure of the team.

In the cloud era, abstraction helped. AWS hid servers. Frameworks hid boilerplate. The full-stack engineer tried to restore ownership, but the stack was still too wide for one person to own well.

Now AI abstracts implementation inside each layer. The question moves from "can you write it?" to "do you understand the work well enough to direct AI to write it?"

That shift matters. It means the domain expert and the builder can move closer together again.

That creates three durable centers of ownership.

**中文：**

核心需求从未变过。

有领域知识的人，一直需要把知识变成可靠系统。精算师想让死亡率模型跑过数百万份保单。供应链负责人想让中断模型调度货物。信贷人员想把风险判断变成可重复的工作流。

变化的是理解和交付之间的障碍。

计算机之前，领域专家自己就是计算层。工作慢，因为计算慢。

大型机时代，程序员变成翻译者。领域专家解释模型。另一个人把它变成机器指令。翻译成了瓶颈。

客户端-服务器时代，专业化爆炸。前端、后端、数据库、系统。康威定律开始接管。软件复制了团队的沟通结构。

云时代，抽象开始帮忙。AWS 隐藏服务器。框架隐藏样板代码。全栈工程师试图夺回所有权，但栈仍然太宽，一个人很难真正拥有。

现在，AI 在每一层内部抽象实现。问题从“你能不能写出来”，转向“你是否理解得足够深，能指挥 AI 写出来”。

这个转移很关键。它让领域专家和构建者再次靠近。

于是，工程里的长期 ownership 会集中到三类人身上。

---

## Product Engineer: Own The Outcome
## 产品工程师：拥有结果

**English:**

A Product Engineer owns the user problem end to end.

Take a loan approval flow. In the old model, a frontend engineer built the form. A backend engineer wrote the decision API. A database engineer tuned the query. A PM tried to hold the story together.

Every handoff lost context.

The form felt wrong. Nobody owned it. The API was slow. Backend blamed the query. The database engineer had never watched a borrower rage-refresh the page and submit twice.

The Product Engineer owns the whole loop.

They understand that a three-second delay can create duplicate applications. They know that a confusing label can break trust. They use AI to move across layers. The important skill shifts from typing code faster to knowing what should exist.

Their day starts with product signals. Did users finish the task? Where did they drop? Did errors spike overnight? The work is a loop: understand, build, ship, watch, adjust.

The metric is adoption. Then task completion. Then latency and error rate.

If users do not adopt the feature, the Product Engineer owns the question. Is the UX wrong? Is the workflow wrong? Is the problem fake?

That is the first ownership path: own the user outcome. The second path sits underneath it.

**中文：**

产品工程师端到端拥有用户问题。

想象一个贷款审批流程。旧模式里，前端工程师写表单。后端工程师写决策 API。数据库工程师优化查询。产品经理试图把故事串起来。

每一次交接都会丢上下文。

表单体验不对，没人真正拥有。API 慢，后端怪查询。数据库工程师从没看过借款人在页面上反复刷新，然后提交两次。

产品工程师拥有完整回路。

他理解，三秒延迟可能制造重复申请。一个含糊的标签可能摧毁信任。他用 AI 跨层推进。核心能力从更快打字，转向知道什么东西应该存在。

他的一天从产品信号开始。用户完成任务了吗？在哪里掉了？昨晚错误有没有尖峰？工作循环很短：理解，构建，发布，观察，调整。

指标先看 adoption。再看任务完成率。再看延迟和错误率。

如果用户不用这个功能，产品工程师要负责追问。是 UX 错了？是工作流错了？还是问题本身就不存在？

这是第一条 ownership 路径：拥有用户结果。第二条路径在它下面。

---

## Infrastructure Engineer: Build Primitives That Disappear
## 基座工程师：构建会消失的原语

**English:**

Infrastructure Engineering has a different customer.

The Product Engineer serves the user. The Infrastructure Engineer serves the Product Engineer.

Their best work disappears. Storage scales without a meeting. Authentication works without a custom project. Billing tracks usage without a spreadsheet. Model serving handles load without every team building its own pipeline.

In an AI-native company, the platform layer gets harder. It now includes vector storage, model routing, inference reliability, token cost accounting, evaluation pipelines, and permissioned retrieval.

AI can help write pieces of this system. It cannot replace the systems judgment needed to make it boring at scale.

A good Infrastructure Engineer asks one question: what primitive should exist so product teams stop solving the same problem?

The signal is self-service. If Product Engineers keep filing tickets, the platform is leaking. If ticket volume falls while product velocity rises, the platform is compounding.

Product owns the outcome. Infrastructure owns the reusable primitive. A third role appears when the product has to survive a real customer environment.

**中文：**

基座工程师服务的是另一个客户。

产品工程师服务用户。基座工程师服务产品工程师。

他们最好的工作会消失。存储扩展不需要开会。认证接入不需要专项项目。计费自动追踪用量，不靠表格。模型服务能扛住负载，不需要每个团队都搭一套管线。

在 AI 原生公司里，平台层更难了。它包括向量存储、模型路由、推理可靠性、token 成本核算、评测管线和带权限的检索。

AI 可以帮忙写系统的一部分。它无法替代系统判断。真正难的是让复杂系统在规模化之后变得无聊。

优秀的基座工程师会问一个问题：应该出现什么原语，才能让产品团队停止反复解决同一个问题？

信号是自助化。产品工程师一直开工单，平台就在漏水。工单下降，产品速度上升，平台才在复利。

产品拥有结果。基座拥有可复用原语。第三类角色，出现在产品必须进入真实客户环境的时候。

---

## FDE: Cross The Deployment Gap
## FDE：跨过部署鸿沟

**English:**

A good product and a successful deployment are different things.

The demo works. The architecture is clean. The model performs well. Then the product lands inside a real enterprise and adoption stalls.

Why?

The customer's data lives in fourteen formats. The SSO system is ancient. The team calls a workflow by a name no product designer used. A field that looks simple carries twenty years of organizational history.

This is the Forward Deployed Engineer's world.

The FDE moves into the client's reality. They adapt the product without turning every deployment into a custom fork. They write the integration layer. They watch users hesitate. They learn which model outputs need explanation and which ones are actually wrong.

The job is engineering with business context.

The FDE also closes the system loop. They send field reality back to Product and Infrastructure. Product learns which features fail in the wild. Infrastructure learns which primitives every deployment keeps rebuilding.

The metric is time to real adoption. If a client cannot reach meaningful usage without a permanent FDE standing beside them, the product has not been deployed. It is being operated by hand.

These three roles matter most when they work as one system.

**中文：**

好产品和成功部署是两件事。

Demo 可以很好。架构可以很干净。模型指标可以漂亮。然后产品进入真实企业，使用率卡住。

为什么？

客户数据有十四种格式。SSO 系统很老。团队对某个流程的叫法，产品设计师从没听过。一个看似简单的字段，背后有二十年的组织历史。

这就是 FDE 的世界。

FDE 进入客户现实。他们调整产品，但不能把每次部署都变成定制分支。他们写集成层。他们观察用户在哪一步犹豫。他们判断哪些模型输出需要解释，哪些真的错了。

这是一种带完整业务上下文的工程。

FDE 还负责闭合系统回路。他们把现场现实传回产品和基座。产品知道哪些功能在真实环境里失效。基座知道哪些原语每次部署都在重复造。

关键指标是真实采用速度。如果客户没有常驻 FDE 就无法形成稳定使用，产品还没有完成部署。它只是被人工托管着。

这三类角色放进同一个系统里，才真正有力量。

---

## The System Loop
## 系统回路

**English:**

These three roles only make sense as a loop.

Infrastructure builds primitives. Product turns them into user outcomes. FDE gets those outcomes working inside client reality. Then FDE returns the field signal.

When the loop works, the company compounds.

Product teams move faster because Infrastructure removes repeated work. FDEs deploy faster because Product leaves the right configuration surface. Infrastructure improves faster because FDE shows which gaps appear across clients.

When the loop breaks, the failure is easy to see.

Product builds impressive features nobody uses. Infrastructure hits 99.99% uptime while product teams drown in tickets. FDE becomes a permanent workaround. The company keeps shipping, but the customer does not expand.

The system metric is year-two NRR: net revenue retention after the customer has lived with the product. A client expands only when the product is useful, reliable, and adopted in the real environment.

**中文：**

这三个角色只有放进回路里才完整。

基座构建原语。产品把原语变成用户结果。FDE 让结果在客户现实里跑起来。然后 FDE 把现场信号传回来。

回路顺畅，公司才会复利。

产品团队更快，因为基座移除了重复工作。FDE 部署更快，因为产品留下了正确的配置面。基座进化更快，因为 FDE 看见了多个客户反复出现的缺口。

回路断掉，失败也很清楚。

产品做出漂亮功能，没人用。基座可用性 99.99%，产品团队却被工单淹没。FDE 变成永久临时方案。公司一直发版，客户却不扩张。

系统级指标是第二年 NRR，也就是客户使用一段时间后的净收入留存。客户愿意扩张，说明产品有用、可靠，并且真的在现实环境里被采用。

---

## The Objection: AI Also Makes Generalists Cheap
## 反对意见：AI 也会让 Generalist 变便宜

**English:**

The obvious objection is that AI does not only compress specialists. It can also compress generalists.

If everyone can ask AI to move across the stack, "full-stack" stops being a strong identity. A person who merely touches many layers is not defensible. AI can touch many layers too.

That is why ownership matters more than breadth.

The Product Engineer is not valuable because they can write frontend and backend code. They are valuable because they own the user outcome.

The Infrastructure Engineer is not valuable because they know Kubernetes trivia. They are valuable because they create primitives that make other teams faster.

The FDE is not valuable because they can hack integrations. They are valuable because they can cross the messy gap between product promise and customer reality.

AI makes shallow breadth cheap.

It makes accountable ownership more important.

**中文：**

最明显的反对意见是：AI 压缩的不只是 specialist，也会压缩 generalist。

如果每个人都能让 AI 跨栈工作，“full-stack” 本身就不再是强身份。一个人只是能碰很多层，并不防守。AI 也能碰很多层。

所以关键转向了 ownership。

产品工程师的价值，不是他能写前端和后端。他的价值是拥有用户结果。

基座工程师的价值，不是他知道 Kubernetes 冷知识。他的价值是创造让其他团队更快的原语。

FDE 的价值，不是他能临时写 integration。他的价值是跨过产品承诺和客户现实之间的混乱距离。

AI 会让浅层宽度变便宜。

它会让真正负责的 ownership 变得更重要。

---

## Conclusion: Choose Your Moat
## 总结：选择你的护城河

**English:**

AI makes engineering broader. It removes the old excuse for narrow engineering.

If implementation gets cheaper, ownership becomes more valuable.

The Product Engineer owns the outcome. The Infrastructure Engineer owns the primitive. The FDE owns the deployment gap.

Titles matter less. Moats matter more.

The question for an engineer is simple: what do you own that AI cannot own for you?

**中文：**

AI 会让工程变宽。它会消灭狭窄工程的旧借口。

如果实现变便宜，所有权就会变贵。

产品工程师拥有结果。基座工程师拥有原语。FDE 拥有部署鸿沟。

头衔没那么重要。护城河更重要。

对工程师来说，真正的问题很简单：你拥有什么，是 AI 无法替你拥有的？`},{id:"article2-saas-endgame",titleEn:"The SaaS Endgame: UI Gets Thin, Value Moves Deeper",titleZh:"SaaS 的终局：UI 变薄，价值转向更深处",category:"Opinions",date:"2026-03-29",author:"Sean",release:"published",keywords:["SaaS","AI SaaS","Distribution","System of Record","Network Effects","Vertical AI"],history:["Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Rewritten around AI-era SaaS value capture","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Context: The SaaS Surface Is Losing Power
## 背景：SaaS 的表层正在失去力量

**English:**

The old SaaS company won by owning the screen.

The user opened the app. Clicked the dashboard. Filled the form. Moved the record. The UI was the place where work happened, so the UI captured value.

AI changes that.

An agent can draft the update, summarize the account, fill the ticket, query the database, trigger the workflow, and write back to the system. The user may never open the full app. They may ask from Slack, email, a browser sidebar, or another AI workspace.

That is the problem for SaaS: when UI becomes thin, where does value move?

My view is simple.

Some SaaS will disappear. Thin UI wrapped around generic workflow will get absorbed by AI agents, platforms, or the system of record underneath it.

Some SaaS will become stronger. The winners will own something deeper than the interface: network effects, scale effects, UGC, system of record, vertical domain knowledge, or distribution.

UI still matters. Bad UI still kills adoption. But UI alone is no longer a moat.

**中文：**

旧 SaaS 公司靠拥有屏幕赢。

用户打开 app。看 dashboard。填表单。移动 record。工作发生在 UI 里，所以 UI 捕获价值。

AI 改变了这一点。

Agent 可以写更新，总结 account，填 ticket，查数据库，触发 workflow，再把结果写回系统。用户可能根本不打开完整 app。他可能在 Slack、邮件、浏览器侧边栏，或另一个 AI workspace 里完成工作。

这就是 SaaS 面临的问题：当 UI 变薄，价值会转移到哪里？

我的判断很简单。

一部分 SaaS 会消失。只是在通用 workflow 外面包一层 UI 的产品，会被 AI agent、平台，或底层 system of record 吸收。

另一部分 SaaS 会变强。赢家会拥有比界面更深的东西：网络效应、规模效应、UGC、system of record、vertical domain knowledge，或 distribution。

UI 仍然重要。差 UI 仍然会杀死 adoption。但 UI 本身不再是护城河。

---

## What Gets Weaker: Thin UI Around Generic Work
## 会变弱的东西：通用工作的薄 UI

**English:**

The weakest SaaS product in the AI era is a thin interface over a generic task.

Think of a tool that takes notes, rewrites emails, makes a simple dashboard, routes a basic approval, or wraps a public API with a cleaner screen.

These products can still be useful. But useful is not the same as defensible.

If the task has no proprietary data, no deep workflow, no unique distribution, and no hard domain logic, AI can reproduce it quickly. The base model can add the feature. The platform can bundle it. The system of record can expose it as one more command.

The user will not ask, "Which app has the prettiest UI?"

The user will ask, "Where is my work already happening?"

That shift moves value away from the surface and toward the place that owns context.

**中文：**

AI 时代最弱的 SaaS，是包在通用任务外面的一层薄界面。

比如记笔记、改邮件、做简单 dashboard、跑基础审批、把公共 API 包成更好看的页面。

这类产品仍然可能有用。但有用不等于可防守。

如果任务没有私有数据，没有深工作流，没有独特分发，也没有困难的行业逻辑，AI 很快能复刻它。基础模型可以加这个功能。平台可以打包它。system of record 可以把它变成一个 command。

用户不会问：“哪个 app 的 UI 最漂亮？”

用户会问：“我的工作本来在哪里发生？”

这个变化会把价值从表层移走，推向真正拥有 context 的地方。

---

## 1. System Of Record: AI Needs A Source Of Truth
## 1. System Of Record：AI 需要事实源

**English:**

The first place value moves is the system of record.

A system of record is where the company keeps the canonical version of work: customers, contracts, employees, tickets, invoices, inventory, code, incidents, policies, audit logs.

AI increases the importance of this layer.

An agent can answer a question only if it knows which data is true. It can take action only if it has permission. It can automate work only if it can write the result back somewhere trusted.

That is why CRM, ERP, HRIS, ITSM, billing, observability, security, and industry-specific record systems still matter.

The UI on top may change. The command surface may move into chat. But the trusted record, permission model, workflow history, and audit trail become more valuable.

In the old world, the app was where the user clicked.

In the AI world, the system of record is where the agent must verify, act, and remember.

**中文：**

价值转移的第一个地方，是 system of record。

System of record 是公司保存标准事实的地方：客户、合同、员工、ticket、invoice、库存、代码、incident、policy、audit log。

AI 会提高这一层的重要性。

Agent 要回答问题，必须知道哪份数据是真的。Agent 要执行动作，必须有权限。Agent 要自动化工作，必须把结果写回一个可信系统。

所以 CRM、ERP、HRIS、ITSM、billing、observability、security，以及各行业自己的 record system 仍然重要。

上面的 UI 可能改变。命令入口可能进入 chat。但可信 record、权限模型、workflow history 和 audit trail 会变得更值钱。

旧世界里，app 是用户点击的地方。

AI 世界里，system of record 是 agent 核对事实、执行动作、保存记忆的地方。

---

## 2. Network Effects And UGC: The Product Gets Smarter With Use
## 2. 网络效应和 UGC：产品越用越强

**English:**

The second place value moves is networked knowledge.

Slack is a good example.

Slack is company memory. The chat UI is only the entry point. Channels contain decisions, mistakes, customer context, product history, incident traces, files, and informal explanations that never make it into docs.

The more a team uses Slack, the more Slack understands how the company works. AI search, channel recaps, thread summaries, and agent integrations make that history easier to use.

That is why Slack can get stronger with AI. AI turns messy communication into retrievable organizational memory.

Reddit shows the public version.

Reddit owns a huge corpus of user-generated discussion. It is current, messy, opinionated, and full of niche human judgment. That kind of UGC is valuable to AI because it captures how real people describe real problems.

Reddit's data partnerships with Google and OpenAI make the point clear: AI companies want access to real-time, structured, unique content.

The pattern is simple.

If users create context while using the product, AI can make that context more useful. That creates a stronger loop: more usage creates more data, more data improves AI utility, better AI utility attracts more usage.

**中文：**

价值转移的第二个地方，是网络化知识。

Slack 是一个好例子。

Slack 是公司记忆。聊天 UI 只是入口。Channel 里有决策、错误、客户 context、产品历史、incident 痕迹、文件，以及很多永远不会进入正式文档的解释。

团队越用 Slack，Slack 越理解这家公司如何运转。AI search、channel recap、thread summary 和 agent integration，会让这些历史更容易被使用。

所以 Slack 可能在 AI 时代变得更强。AI 把混乱沟通变成可检索的组织记忆。

Reddit 展示的是公开网络版本。

Reddit 拥有巨大的用户生成讨论语料。它实时、混乱、有观点，而且充满细分场景下的人类判断。这类 UGC 对 AI 很有价值，因为它记录了真实的人如何描述真实的问题。

Reddit 和 Google、OpenAI 的数据合作说明了这一点：AI 公司想要实时、结构化、独特的内容。

模式很简单。

如果用户在使用产品时创造 context，AI 就能让这些 context 更有用。循环会变强：更多使用产生更多数据，更多数据提高 AI 效用，更好的 AI 效用吸引更多使用。

---

## 3. Vertical Domain Knowledge: Generic AI Still Needs A Map
## 3. Vertical Domain Knowledge：通用 AI 仍然需要地图

**English:**

The third place value moves is vertical domain knowledge.

Generic AI can write a decent first draft. It can explain general rules. It can imitate a workflow. But real industries are full of edge cases.

Healthcare claims. Construction change orders. Insurance underwriting. Restaurant operations. Logistics exceptions. Financial compliance. Clinical documentation. Government procurement.

Each domain has strange terms, hidden constraints, approval paths, compliance rules, seasonal patterns, and exceptions that only practitioners understand.

Strong vertical SaaS already encodes that knowledge.

It knows which fields matter. Which workflow step cannot be skipped. Which exception is normal. Which document needs review. Which approval path will fail. Which metric actually predicts risk.

AI makes this knowledge more valuable because it can turn domain judgment into action. The model can draft, classify, route, summarize, and recommend. But the vertical SaaS system tells it what matters and what must happen next.

A label like "AI for industry X" is weak.

The defensible product is a working map of industry X.

**中文：**

价值转移的第三个地方，是 vertical domain knowledge。

通用 AI 可以写出不错的第一版。可以解释通用规则。可以模仿一个 workflow。但真实行业里到处都是边界情况。

医疗理赔。建筑变更单。保险核保。餐厅运营。物流异常。金融合规。临床文档。政府采购。

每个行业都有奇怪术语、隐藏约束、审批路径、合规规则、季节性模式，以及只有从业者懂的例外。

强 vertical SaaS 本来就编码了这些知识。

它知道哪些字段重要。哪个 workflow step 不能跳。哪个 exception 是正常的。哪份文档需要 review。哪条审批路径会失败。哪个指标真的能预测风险。

AI 会让这些知识更值钱，因为它能把行业判断变成行动。模型可以起草、分类、路由、总结、推荐。但 vertical SaaS system 会告诉它什么重要，以及下一步必须做什么。

“AI for industry X” 这种标签很弱。

可防守的产品，是一张能运行的行业地图。

---

## 4. Distribution And Deployment: The Last Mile Becomes The Moat
## 4. Distribution And Deployment：最后一公里变成护城河

**English:**

The fourth place value moves is distribution.

When the UI was the product, distribution meant getting people to sign up and log in.

In AI-native SaaS, distribution means something deeper: getting AI into the actual workflow, with trust, permissions, integrations, training, and change management.

That is why deployment companies matter.

AI does not deploy itself. A model demo can look magical and still fail inside a real company. The data is messy. Permissions are unclear. Teams disagree on process. Legal wants auditability. Security wants control. Users do not trust the output. Managers do not know how to measure ROI.

The company that owns deployment owns the last mile of value.

This is a distribution advantage. The services motion is the entry point. The deployment layer learns where the product breaks, which integrations matter, which users resist, and which workflow actually creates value. That knowledge feeds back into the product.

In the AI era, the winner may be someone other than the company with the prettiest app.

The winner may be the company that can get useful AI adopted inside a messy enterprise.

**中文：**

价值转移的第四个地方，是 distribution。

当 UI 是产品时，distribution 意味着让人注册、登录、使用。

在 AI-native SaaS 里，distribution 更深：把 AI 放进真实 workflow，带着信任、权限、集成、培训和 change management 一起落地。

这就是为什么会出现 deployment company。

AI 不会自己部署自己。模型 demo 可以很惊艳，但进入真实公司后仍然失败。数据很乱。权限不清。团队对流程有分歧。Legal 要 auditability。Security 要 control。用户不信输出。Manager 不知道怎么衡量 ROI。

谁拥有 deployment，谁就拥有价值最后一公里。

这是一种 distribution advantage。服务动作只是入口。Deployment layer 会知道产品在哪里断，哪些 integration 重要，哪些用户抗拒，哪个 workflow 真正创造价值。这些知识会反哺产品本身。

AI 时代，最漂亮的 app 未必赢。

赢家可能是最能把有用 AI 部署进混乱企业的人。

---

## The Objection: UI Still Matters
## 反对意见：UI 仍然重要

**English:**

The strongest objection is that the UI does not disappear.

That is true.

Even in an agentic world, humans still need to inspect, correct, approve, compare, and trust. A bad interface can make a strong system feel dangerous. A confusing workflow can kill adoption. A beautiful surface can still accelerate distribution.

So the point is not that UI becomes worthless.

The point is that UI becomes insufficient.

In the old SaaS era, owning the screen could be enough. In the AI era, the screen has to be attached to something deeper: trusted records, accumulated context, domain logic, networked knowledge, or deployment capability.

UI remains the door.

It is no longer the house.

**中文：**

最强的反对意见是：UI 不会消失。

这是对的。

即使在 agentic world 里，人仍然需要检查、修正、批准、比较和建立信任。坏界面会让强系统显得危险。混乱 workflow 会杀死 adoption。漂亮表层仍然可以加速 distribution。

所以重点不是 UI 没价值。

重点是 UI 不够了。

旧 SaaS 时代，占住屏幕可能就够。在 AI 时代，屏幕必须连接到更深的东西：可信 record、累积 context、行业逻辑、网络化知识，或部署能力。

UI 仍然是门。

但它不再是房子。

---

## Recap: SaaS Does Not Die Evenly
## 回到核心：SaaS 不会一起死亡

**English:**

The lazy version of the argument says SaaS is dead.

That is too simple.

UI-only SaaS is in trouble. Generic workflow SaaS is in trouble. Products without data, workflow, domain knowledge, or distribution will get compressed.

But SaaS with deeper value can become stronger.

System of record becomes the source of truth for AI.

Networked products become organizational memory.

UGC platforms become training and retrieval assets.

Vertical SaaS becomes the map that lets AI act safely in a domain.

Deployment-led companies become the bridge between model capability and real adoption.

The value does not disappear.

It moves deeper.

**中文：**

懒惰版本的结论是：SaaS 死了。

这太简单。

只靠 UI 的 SaaS 会很危险。通用 workflow SaaS 会很危险。不拥有数据、工作流、行业知识或分发能力的产品，会被压缩。

但拥有更深价值的 SaaS 会变强。

System of record 会成为 AI 的事实源。

网络型产品会成为组织记忆。

UGC 平台会成为训练和检索资产。

Vertical SaaS 会成为 AI 在行业里安全行动的地图。

Deployment-led company 会成为模型能力和真实 adoption 之间的桥。

价值不会消失。

它会转移到更深处。

## References
## 参考资料

**English:**

- Salesforce, ["Salesforce Launches Trusted Generative AI for Customers in Slack"](https://www.salesforce.com/news/stories/slack-ai-news/slack-ai_search-2/), February 14, 2024.
- Slack Help Center, ["Guide to AI features in Slack"](https://slack.com/help/articles/25076892548883-Guide-to-AI-features-in-Slack).
- OpenAI, ["OpenAI and Reddit Partnership"](https://openai.com/index/openai-and-reddit-partnership/), May 16, 2024.
- Google, ["Google expands partnership with Reddit"](https://blog.google/inside-google/company-announcements/expanded-reddit-partnership/), February 22, 2024.

**中文：**

- Salesforce, ["Salesforce Launches Trusted Generative AI for Customers in Slack"](https://www.salesforce.com/news/stories/slack-ai-news/slack-ai_search-2/), February 14, 2024.
- Slack Help Center, ["Guide to AI features in Slack"](https://slack.com/help/articles/25076892548883-Guide-to-AI-features-in-Slack).
- OpenAI, ["OpenAI and Reddit Partnership"](https://openai.com/index/openai-and-reddit-partnership/), May 16, 2024.
- Google, ["Google expands partnership with Reddit"](https://blog.google/inside-google/company-announcements/expanded-reddit-partnership/), February 22, 2024.`},{id:"article3-ai-native-moats",titleEn:"Moats in the AI Native Era: The Trinity of Data, Insight, and Workflow",titleZh:"AI Native 时代的护城河：数据、洞察与工作流的三位一体",category:"Opinions",date:"2026-03-29",author:"Sean",release:"published",keywords:["AI Moat","Unique Data","Unique Insight","Unique Workflows","Midjourney","Palantir"],history:["Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Deepened moat argument and added single-factor failure cases","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Expanded workflow moat into systems of record, systems of action, and vertical platforms"],body:`## The 48-Hour Countdown
## 48 小时倒计时

**English:**

The easiest AI startup to build is also the easiest one to kill.

Take a legal summarization product. It calls a frontier model. It asks for a summary. It formats the answer. It wraps the workflow in a clean UI. Users like it because the old workflow was painful.

Then the base model provider ships long-context document analysis. Or the legal software suite adds the same feature. Or another small team rebuilds the product over a weekend with a better prompt, a lower price, and the same demo.

The product was useful. It still lost.

It lost because the intelligence was rented, the workflow was shallow, the data was not proprietary, and the insight was generic. The company did not own the reason the output was good. It owned a temporary arrangement around someone else's model.

That is the central problem for AI-native companies.

AI makes product creation cheaper. It also makes product imitation cheaper. The same force that lets a small team launch in 48 hours lets a competitor, platform, or model provider erase the first version in 48 hours.

Speed helps you start. It does not protect you.

The new moat test is simple:

If a better base model can absorb your product, you do not have a moat. You have a timer.

Durable AI-native advantage comes from a learning loop the model provider cannot easily own: unique data, unique insight, and unique workflow.

Data gives the system private reality. Insight tells the system what that reality means. Workflow turns that knowledge into repeated action and new feedback.

The moat is not any one of the three. The moat is the loop between them.

**中文：**

最容易做的 AI startup，也最容易被杀死。

想象一个法律摘要产品。它调用前沿模型。让模型总结文件。格式化答案。套上干净的 UI。用户喜欢，因为旧流程确实痛苦。

然后基础模型厂商发布长上下文文档分析。或者法律软件套件加上同样功能。或者另一个小团队用更好的 prompt、更低的价格、同样的 demo，在一个周末复刻出来。

产品有用。它还是输了。

它输在这里：智能是租来的，工作流很浅，数据不独特，洞察也通用。公司没有拥有“为什么输出好”的原因。它只是围绕别人的模型，拥有了一段临时排列。

这是 AI-native 公司最核心的问题。

AI 降低了产品创造成本，也降低了产品模仿成本。它让小团队 48 小时上线，也让竞争对手、平台、模型厂商 48 小时抹掉第一版产品。

速度能帮你开始，不能保护你。

新的护城河测试很简单：

如果一个更强的基础模型能吸收你的产品，你没有护城河。你只有倒计时。

AI-native 时代的持久优势，来自模型厂商不容易拥有的学习回路：独特数据、独特洞察、独特工作流。

数据给系统私有现实。洞察告诉系统如何理解现实。工作流把这种理解变成反复发生的行动，并带回新的反馈。

护城河不是其中任何一个单点。护城河是三者之间的循环。

---

## Why Old Moats Leak Faster Now
## 为什么旧护城河漏得更快

**English:**

In the old software era, a product could defend itself with interface, feature depth, integration work, sales motion, and switching cost.

Those still matter.

But AI changes their half-life.

A polished UI is easier to copy when generation and frontend tooling improve. Feature depth is easier to imitate when models can draft code, tests, and documentation. Integrations still take work, but the first version gets cheaper. Sales still matters, but customers can now ask a sharper question: why should I buy this tool instead of waiting for my existing platform to add the AI feature?

The dangerous category is the product that looks like software from the outside and behaves like a prompt from the inside.

It has a screen. It has onboarding. It has pricing. It has a demo. But when you open the machine, most of the value comes from a generic model call plus a little formatting.

That may be a good wedge. It is rarely a durable company.

The deeper question is whether use creates owned learning.

Does every customer interaction generate data only you can see? Does your system learn which signals matter in a domain? Does your workflow become the place where decisions are made, corrected, approved, and remembered?

If usage does not make the product smarter, more trusted, or harder to leave, growth may only make the timer louder.

**中文：**

旧软件时代，一个产品可以靠界面、功能深度、集成工作、销售动作和切换成本保护自己。

这些仍然重要。

但 AI 改变了它们的半衰期。

生成能力和前端工具变强后，漂亮 UI 更容易复制。模型可以起草代码、测试和文档后，功能深度更容易追。集成仍然要做，但第一版会更便宜。销售仍然重要，但客户会问一个更尖锐的问题：为什么我要买这个工具，而不是等现有平台加上 AI 功能？

危险的是一种产品：外面看起来像软件，里面运行起来像 prompt。

它有界面。有 onboarding。有价格。有 demo。但打开机器后，大部分价值来自一次通用模型调用，再加一点格式化。

这可以是一个很好的 wedge。它很少是一家持久公司。

更深的问题是：使用是否创造 owned learning。

每一次客户交互，是否生成只有你能看见的数据？系统是否学会某个领域里哪些信号真的重要？你的工作流是否变成决策发生、修正、批准和被记住的地方？

如果使用不会让产品更聪明、更可信、更难离开，增长可能只是让倒计时更响。

---

## 1. Unique Data: Reality Others Cannot See
## 1. 独特数据：别人看不见的现实

**English:**

Data becomes a moat only when it captures reality that others cannot access and turns that reality into better decisions.

Size alone is not enough.

A large scraped dataset is often a raw material advantage. It may help with a first model, a benchmark, or a demo. But if others can buy it, scrape it, license it, or approximate it with synthetic data, the advantage decays.

Defensible data has three properties.

First, it is generated by the business itself. A payments network sees transactions as they happen: merchant, amount, time, geography, account history, device fingerprint, dispute pattern, and anomaly sequence. That data is not an internet artifact. It is operational truth.

Second, it is attached to outcomes. The system does not just know that something happened. It knows whether the transaction was fraudulent, whether the borrower repaid, whether the patient improved, whether the sales lead converted, whether the shipment failed.

Third, it compounds through use. More usage produces more edge cases. More edge cases improve the model, the rules, the review process, and the product itself.

That is why first-party transaction data, credit histories, logistics exceptions, medical workflows, enterprise permissions, and customer support resolutions can matter so much. They describe reality at the moment decisions are made.

The sharper test is this:

Does our data encode a part of reality only we can see, and does that reality improve the next decision?

If the answer is no, the data is supply chain. It may be useful. It will not protect you for long.

But data alone is inert. A warehouse of facts does not know what matters. It needs a theory.

**中文：**

数据只有在捕捉别人看不见的现实，并且把这种现实变成更好的决策时，才会成为护城河。

规模本身不够。

一个很大的 scraped dataset，很多时候只是原材料优势。它可能帮你做出第一版模型、benchmark 或 demo。但如果别人可以买到、抓到、授权到，或者用 synthetic data 逼近，这个优势会衰减。

可防守的数据有三个特征。

第一，它由业务本身生成。支付网络能看到交易发生的瞬间：商户、金额、时间、地理位置、账户历史、设备指纹、争议模式、异常序列。这不是互联网残留物。这是运营真相。

第二，它连接结果。系统不只是知道某件事发生了。它知道这笔交易后来是不是欺诈，借款人是否还款，病人是否改善，销售线索是否转化，货运是否失败。

第三，它会随着使用复利。更多使用产生更多边缘情况。更多边缘情况改进模型、规则、审核流程和产品本身。

这就是为什么第一方交易数据、信贷历史、物流异常、医疗流程、企业权限和客服解决记录会很重要。它们描述的是决策发生时的现实。

更尖锐的测试是：

我们的数据是否编码了只有我们能看见的现实？这种现实是否会改善下一次决策？

如果答案是否定的，那只是数据供应链。它有用，但很难长期保护你。

但数据本身不会行动。一座事实仓库不知道什么重要。它需要一套理论。

---

## 2. Unique Insight: The Theory Behind The Data
## 2. 独特洞察：数据背后的理论

**English:**

Insight is the part of the business that knows how reality behaves.

It tells the system which signals are causal, which are noise, which exceptions break the rule, which metric matters when two dashboards disagree, and what action should follow a signal.

A commodities trader may see a port disruption and know which grain prices will move, where, and with what delay. A fraud team may know that a pattern is harmless for one merchant category and dangerous for another. A sales leader may know that one objection is real buying friction while another is polite rejection.

This knowledge is not just data. It is a model of the domain.

AI is very good at finding patterns. It is weaker when the system does not know which pattern deserves power.

That is why organizations need to encode insight into the product, not leave it trapped in expert heads, Slack threads, or postmortems.

Palantir's Ontology is a useful example because it is not just a database. It maps how a business thinks: what objects matter, how they relate, what counts as abnormal, who can act, and which decision should follow which signal.

The deeper point is not Palantir specifically. The deeper point is that every durable AI product needs an ontology of its own domain.

It may not be called an ontology. It may look like schemas, labels, evals, approval rules, simulation environments, playbooks, human review queues, or ranking functions. But it must exist somewhere.

Without it, the model has data and fluency, but no judgment.

The test is simple:

Give two companies the same base model and similar data. If one consistently makes better decisions, the difference is insight.

If both perform the same, neither owns much beyond access to compute.

**中文：**

洞察是业务里知道“现实如何运转”的那部分能力。

它告诉系统：哪个信号是因果，哪个只是噪音，哪个例外会击穿规则，两个 dashboard 冲突时哪个指标更重要，看到一个信号后应该采取什么动作。

一个大宗商品交易员看到港口中断，可能知道哪些粮食价格会变，在哪里变，延迟多久变。一个风控团队可能知道，同一种模式在某个商户类别里无害，在另一个类别里危险。一个销售负责人可能知道，某个异议是真正的购买阻力，另一个只是礼貌拒绝。

这不只是数据。这是领域模型。

AI 很擅长找模式。但如果系统不知道哪个模式应该被赋予权力，它就会变弱。

所以组织必须把洞察编码进产品，而不是让它困在专家脑子、Slack thread 或 postmortem 里。

Palantir 的 Ontology 是一个有用例子，因为它不只是数据库。它映射的是企业如何思考：什么对象重要，它们如何关联，什么算异常，谁可以行动，哪个信号之后应该触发哪个决策。

更深的重点不是 Palantir 本身。更深的重点是，每个持久 AI 产品都需要自己的领域 ontology。

它不一定叫 ontology。它可能表现为 schema、label、eval、审批规则、模拟环境、playbook、human review queue 或 ranking function。但它必须存在于某个地方。

没有它，模型有数据，有流畅表达，但没有判断。

测试很简单：

给两家公司同一个基础模型和相似数据。如果其中一家持续做出更好决策，差距就是洞察。

如果两家表现一样，它们拥有的多半只是算力入口。

---

## 3. Unique Workflow: Switching Costs In The Mind
## 3. 独特工作流：存在于大脑里的切换成本

**English:**

Workflow is the most underrated moat because it looks mundane from the outside.

It is where the product stops being a tool and becomes a way of operating.

A model can be copied. A feature can be copied. A workflow that has trained a user's habits, team language, approval rhythm, review process, and memory is harder to copy.

Good workflow changes how people think and act. It creates conventions, shortcuts, templates, defaults, feedback loops, and shared expectations. Leaving the product means exporting data and unlearning a way of working.

That is cognitive switching cost.

Midjourney is a useful consumer example. Its advantage did not come only from image quality. Prompt culture, community feedback, aesthetic conventions, remix behavior, and repeated creative practice became part of the product. Users learned how to think with it.

Databricks shows the enterprise version. Once a data team builds ingestion, transformation, governance, notebooks, permissions, ML workflows, and internal habits around a platform, migration becomes a rebuild. The workflow has entered the organization.

The workflow moat is especially important in AI because AI systems need correction.

The first answer is often not enough. Users inspect, edit, approve, reject, annotate, escalate, and compare. Those actions are not just interface events. They are training signals, trust signals, and process signals.

If the product owns the correction loop, it owns learning.

If the product only returns an answer and disappears, it gives away the most valuable part of the interaction.

Seat count alone does not create this. Usage alone does not create this. A habit that teaches the system and teaches the user at the same time creates this.

The strongest workflow is where humans and AI negotiate what becomes true.

That sentence matters.

AI can generate a draft. But the moat lives in what happens after the draft: who reviews it, what gets corrected, which version gets approved, which risk gets escalated, which record gets updated, and which action becomes official.

That is where workflow turns into a system of record and a system of action.

A system of record stores trusted reality: customers, cases, contracts, patient notes, design components, code, orders, inventory, permissions, decisions.

A system of action moves work forward: assign, approve, reject, merge, deploy, bill, route, notify, sign, close, escalate.

AI-native products become defensible when they connect both. They read the trusted record, reason over it, take or recommend action, collect correction, and write the result back into the record.

Record. Reason. Action. Feedback. Updated record.

That loop is where the old software moats reappear in AI-native form.

Network effects become workflow effects: every user, reviewer, expert, customer, and edge case improves the shared practice of the system.

Scale effects become learning effects: more usage creates more corrections, more exceptions, better evals, stronger defaults, and more trust.

Switching costs become organizational costs: leaving the product means losing decision history, approval paths, audit trails, templates, permissions, integrations, and the language the team uses to think.

The cost is highest when the workflow is frequent and consequential.

Frequent workflows create density. Consequential workflows create trust. The best products sit where mistakes affect money, customers, compliance, reputation, delivery, or safety.

That is why vertical platforms can become so strong.

A vertical product starts by solving a narrow workflow. Then it absorbs the objects, rules, approvals, exceptions, and language of an industry. Eventually the organization uses the product to think.

Salesforce is not just a CRM when a company thinks in accounts, opportunities, pipeline stages, forecasts, service cases, and customer history.

Figma is not just a design tool when designers, PMs, and engineers use it as the place where product intent, components, comments, prototypes, and handoff converge.

Toast is not just restaurant software when orders, payments, staff behavior, kitchen operations, and customer records flow through it.

At that point, replacing the SaaS product is no longer a procurement event.

It is organizational surgery.

**中文：**

工作流是最容易被低估的护城河，因为它从外面看很普通。

它是产品从“工具”变成“操作方式”的地方。

模型可以复制。功能可以复制。一个训练过用户习惯、团队语言、审批节奏、审核流程和组织记忆的工作流，更难复制。

好的工作流会改变人如何思考、如何行动。它创造惯例、快捷方式、模板、默认选项、反馈循环和共同预期。离开产品时，用户要导出数据，也要忘掉一种工作方式。

这是认知切换成本。

Midjourney 是一个有用的消费级例子。它的优势不只来自图片质量。提示词文化、社区反馈、美学惯例、remix 行为和反复创作练习，都变成了产品的一部分。用户学会了如何和它一起思考。

Databricks 展示了企业版本。一旦数据团队把摄取、转换、治理、notebook、权限、ML 工作流和内部习惯建在一个平台上，迁移就变成重建。工作流已经进入组织。

工作流护城河在 AI 里尤其重要，因为 AI 系统需要修正。

第一版答案经常不够。用户会检查、编辑、批准、拒绝、标注、升级、比较。这些动作不只是界面事件。它们是训练信号、信任信号和流程信号。

如果产品拥有 correction loop，它就拥有学习。

如果产品只返回一个答案然后消失，它就把交互里最有价值的部分交出去了。

Seat 数量本身不会创造这个。使用量本身也不会创造这个。真正有价值的是一种习惯：它同时训练系统，也训练用户。

最强的工作流，是人和 AI 一起决定什么可以进入现实的地方。

这句话很重要。

AI 可以生成草稿。但护城河藏在草稿之后：谁审核，哪里被修正，哪个版本被批准，哪个风险被升级，哪个记录被更新，哪个动作正式生效。

工作流就是在这里变成 system of record 和 system of action。

System of record 保存可信现实：客户、案件、合同、病历、设计组件、代码、订单、库存、权限、决策。

System of action 推动工作前进：分配、批准、拒绝、merge、deploy、计费、路由、通知、签署、关闭、升级。

AI-native 产品只有连接两端时，才开始变得可防守。它读取可信记录，理解记录，采取或建议行动，收集修正，再把结果写回事实源。

记录事实。理解事实。推进行动。收集反馈。更新事实源。

这个循环，是旧软件护城河在 AI-native 里的新形态。

网络效应变成工作流效应：每个用户、审核者、专家、客户和边缘情况，都会改善系统里的共同实践。

规模效应变成学习效应：更多使用带来更多修正、更多例外、更好的 eval、更强的默认值和更高的信任。

切换成本变成组织成本：离开产品意味着失去决策历史、审批路径、审计轨迹、模板、权限、集成，以及团队用来思考的语言。

当工作流高频且高后果时，这个成本最高。

高频创造密度。高后果创造信任。最好的产品，通常落在错误会影响钱、客户、合规、声誉、交付或安全的地方。

这就是为什么 vertical platform 会很强。

一个 vertical 产品起点可能只是解决一个窄工作流。然后它吸收一个行业里的对象、规则、审批、例外和语言。最后，组织会用这个产品来思考。

当一家公司用 account、opportunity、pipeline stage、forecast、service case 和 customer history 来思考客户时，Salesforce 就不只是 CRM。

当 designer、PM 和 engineer 都在 Figma 里对齐产品意图、组件、评论、prototype 和 handoff 时，Figma 就不只是设计工具。

当订单、支付、员工行为、厨房运营和客户记录都流过 Toast 时，Toast 就不只是餐厅软件。

到了这个阶段，更换 SaaS 不再是一次采购动作。

它更像一次组织手术。

---

## The Single-Factor Trap
## 单点护城河陷阱

**English:**

The mistake is treating data, insight, and workflow as three separate checkboxes.

Each one can fail alone.

Data without insight becomes a lake nobody knows how to use. Many companies have private data and still make mediocre decisions because the data is messy, unstructured, mis-labeled, politically sensitive, or disconnected from outcomes.

Insight without workflow becomes consulting. The expert knows what matters, but the product does not capture the judgment, repeat it, or turn it into new behavior. The knowledge walks out of the room every night.

Workflow without data and insight becomes habit without learning. Users may like the interface, but the product does not get meaningfully smarter. A competitor with better model quality or stronger distribution can attack it.

The strong form is the triangle.

Workflow produces proprietary data. Data exposes exceptions. Exceptions sharpen insight. Insight changes the workflow. The improved workflow produces better data.

That loop compounds.

This is why the best AI-native companies will look less like feature factories and more like learning machines.

They will not merely ask: what can the model do?

They will ask: what can our system learn that the model provider does not see?

**中文：**

错误在于把数据、洞察和工作流当成三个独立 checkbox。

每一个单独存在时都会失效。

只有数据，没有洞察，会变成没人会用的数据湖。很多公司有私有数据，但决策仍然平庸，因为数据混乱、非结构化、标签错误、政治敏感，或者没有连接结果。

只有洞察，没有工作流，会变成咨询。专家知道什么重要，但产品没有捕捉这种判断，不能重复它，也不能把它变成新行为。知识每天晚上都会走出房间。

只有工作流，没有数据和洞察，会变成没有学习的习惯。用户可能喜欢界面，但产品不会显著变聪明。模型质量更好或 distribution 更强的竞争对手可以攻击它。

强形态是三角形。

工作流产生专有数据。数据暴露例外。例外打磨洞察。洞察改变工作流。改进后的工作流产生更好的数据。

这个循环会复利。

这就是为什么最好的 AI-native 公司看起来不会像 feature factory，而会像 learning machine。

它们不会只问：模型能做什么？

它们会问：我们的系统能学到什么，是模型厂商看不见的？

---

## The Objection: Distribution Still Matters
## 反对意见：Distribution 仍然重要

**English:**

The strongest objection is that data, insight, and workflow are not the whole story.

Distribution still matters. Brand still matters. Capital still matters. Regulatory access still matters. A company with a mediocre product and great distribution can beat a sharper product that nobody sees.

That is true.

In fact, distribution may matter more in AI because customers are overwhelmed. Everyone has a demo. Everyone says agent. Everyone promises productivity. Trust becomes scarce.

But distribution is strongest when it compounds something real.

If a company has distribution but no unique data, no encoded insight, and no workflow depth, it can acquire users but may not keep advantage. The base model improves. The platform bundles the feature. The customer switches when the same job becomes easier inside a tool they already use.

Distribution can buy attention.

It cannot permanently substitute for owned learning.

The durable version is distribution attached to a compounding core: data that improves with usage, insight that sharpens decisions, and workflow that becomes part of how people operate.

The practical lesson is uncomfortable:

Go-to-market can create the opening. It cannot be the only moat unless it gives you access to a learning loop others cannot enter.

**中文：**

最强的反对意见是：数据、洞察和工作流不是全部。

Distribution 仍然重要。品牌仍然重要。资本仍然重要。监管入口仍然重要。一个产品一般但分发很强的公司，可能打败一个更锋利但没人看见的产品。

这是对的。

甚至在 AI 时代，distribution 可能更重要，因为客户已经被淹没。每个人都有 demo。每个人都说 agent。每个人都承诺 productivity。信任变得稀缺。

但 distribution 最强的时候，是它能放大真实复利。

如果一家公司有 distribution，却没有独特数据、编码后的洞察和深工作流，它可以获得用户，但未必能长期保住优势。基础模型会进步。平台会打包功能。客户会在自己已经使用的工具里完成同一件事。

Distribution 可以买到注意力。

它不能永久替代 owned learning。

真正持久的形态，是 distribution 连接到一个会复利的核心：越用越好的数据，让决策更准的洞察，以及进入人们操作方式里的 workflow。

实际教训有点不舒服：

Go-to-market 可以创造入口。但除非它让你进入别人进不来的学习回路，否则它不能成为唯一护城河。

---

## Conclusion: The 1-Person Unicorn Has To Own Something
## 总结：1 人独角兽也必须拥有东西

**English:**

AI compresses organizations. Work that once required teams can now be done by one person with the right tools.

That makes the 1-person unicorn imaginable.

It also makes weak companies more fragile.

If your output comes from public data, generic prompts, and a workflow any competitor can copy, AI will compress your value too.

The 1-person unicorn is possible only when the person owns leverage. Unique data. Unique insight. Unique workflow. Ideally all three in a loop.

The same test applies to a startup, a team inside a large company, and an individual career.

What reality can you see that others cannot?

What judgment do you have that turns that reality into better decisions?

What workflow makes that judgment repeatable, trusted, and hard to leave?

Those are the questions that matter.

A better API key will keep arriving.

The only durable answer is to own something the API key cannot reproduce.

**中文：**

AI 会压缩组织。过去需要团队完成的工作，现在一个人配合工具就能做。

这让 1 人独角兽变得可想象。

它也让弱公司更脆弱。

如果你的产出来自公共数据、通用提示词和竞争对手也能复制的工作流，AI 也会压缩你的价值。

1 人独角兽只有在拥有杠杆时才成立。独特数据。独特洞察。独特工作流。最好三者连成回路。

同一个测试也适用于 startup、大公司里的团队，以及个人职业。

你能看见什么别人看不见的现实？

你有什么判断，能把这种现实变成更好的决策？

你有什么工作流，能让这种判断被重复、被信任、并且难以离开？

这些才是重要问题。

更好的 API key 会不断到来。

唯一持久的回答，是拥有 API key 复制不了的东西。`}],wp=i=>{const r=Date.parse(i.date);return Number.isNaN(r)?0:r},zS=()=>{const i=window.location.pathname.toLowerCase(),r=new URLSearchParams(window.location.search),l=r.get("locale")||r.get("lang");return i.includes("/cn/")||l==="cn"||l==="zh"?"cn":"en"};function MS(){const[i,r]=ii.useState(null),[l,u]=ii.useState(zS),[c,h]=ii.useState(""),f=ii.useRef(null),m=112;ii.useEffect(()=>{const I=()=>{const R=window.location.hash.replace("#","");if(R&&!R.startsWith("section-")){const W=Qs.find(P=>P.id===R);W?(r(W),window.scrollTo(0,0)):r(null)}else window.location.hash||(r(null),window.scrollTo(0,0))};return window.addEventListener("hashchange",I),window.addEventListener("popstate",I),I(),()=>{window.removeEventListener("hashchange",I),window.removeEventListener("popstate",I)}},[]),ii.useEffect(()=>{if(!i)return;const I=()=>{const R=Array.from(document.querySelectorAll(".md-content h2, .md-content h3"));let W=R[0]?.id||"",P=Number.POSITIVE_INFINITY;for(const _ of R){const J=Math.abs(_.getBoundingClientRect().top-m);J<P&&(P=J,W=_.id)}h(W)};return window.addEventListener("scroll",I,{passive:!0}),I(),()=>window.removeEventListener("scroll",I)},[i,m]),ii.useEffect(()=>{if(i)return;const I=f.current;if(!I)return;const R=W=>{if(W.deltaY<=0)return;W.preventDefault();const P=I.getBoundingClientRect().bottom+window.scrollY;window.scrollTo({top:P,behavior:"instant"})};return I.addEventListener("wheel",R,{passive:!1}),()=>I.removeEventListener("wheel",R)},[i]);const p=[...Qs].sort((I,R)=>wp(R)-wp(I)),d=I=>{if(!(I.includes("**English:**")||I.includes("**中文：**")))return I.replace(/\\n/g,`
`);const W=I.replace(/\\n/g,`
`).split(`
`),P=[];let _="en";for(let J=0;J<W.length;J++){let ue=W[J];const de=ue.trim();if(de===""){P.push("");continue}if(de.includes("**English:**")){if(_="en",ue=ue.replace("**English:**","").trim(),ue==="")continue}else if(de.includes("**中文：**")){if(_="cn",ue=ue.replace("**中文：**","").trim(),ue==="")continue}else de.startsWith("#")&&(_=/[\u4e00-\u9fa5]/.test(de)?"cn":"en");(l==="en"&&_==="en"||l==="cn"&&_==="cn")&&P.push(ue)}return P.join(`
`)},b=I=>I.split(`
`).filter(W=>W.startsWith("## ")||W.startsWith("### ")).map(W=>{const P=W.startsWith("### ")?3:2,_=W.replace(/^###?\s+/,"").trim(),J=_.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,"");return{level:P,text:_,slug:J}}),y=I=>{const R=I?`#${I}`:`${window.location.pathname}${window.location.search}`;window.history.pushState(null,"",R);const W=I?Qs.find(P=>P.id===I)??null:null;r(W),window.scrollTo(0,0)},D=I=>I.release==="draft"?re.jsx("span",{className:"draft-tag",children:"Draft"}):null,w=()=>{const I=l==="cn"?"en":"cn",R=new URL(window.location.href);I==="cn"?R.searchParams.set("lang","cn"):(R.searchParams.delete("lang"),R.searchParams.delete("locale")),window.history.replaceState(null,"",`${R.pathname}${R.search}${R.hash}`),u(I),h("")},x=(I,R)=>re.jsxs("div",{className:"article-card",onClick:()=>y(I.id),children:[re.jsxs("div",{className:"article-number",children:["0",R+1]}),re.jsxs("div",{className:"article-info",children:[re.jsx("h2",{children:l==="cn"?I.titleZh:I.titleEn}),re.jsxs("div",{className:"card-meta",children:[D(I),re.jsx("span",{children:I.date})," • ",re.jsx("span",{children:I.keywords.slice(0,3).join(", ")})]})]})]},I.id),j=i?d(i.body):"",V=i?b(j):[],M=i?c:"";return re.jsxs("div",{className:"App",children:[re.jsx("nav",{children:re.jsxs("div",{className:"container nav-content",children:[re.jsx("div",{className:"logo",onClick:()=>y(null),children:"The Sean Thesis"}),re.jsx("button",{className:"language-switch",type:"button",onClick:w,"aria-label":l==="cn"?"Switch to English":"切换到中文",children:l==="cn"?"EN":"中"})]})}),re.jsx("main",{className:"container",children:i?re.jsxs("div",{className:"article-page-layout",children:[re.jsxs("article",{className:"article-view",children:[re.jsxs("span",{className:"back-link",onClick:()=>y(null),children:["← ",l==="cn"?"返回目录":"Back to Index"]}),re.jsxs("div",{className:"article-metadata-shelf",children:[re.jsxs("div",{className:"meta-item",children:[re.jsx("div",{className:"meta-label",children:"Author"}),re.jsx("div",{className:"meta-value",children:i.author})]}),re.jsxs("div",{className:"meta-item",children:[re.jsx("div",{className:"meta-label",children:"Published"}),re.jsx("div",{className:"meta-value",children:i.date})]}),re.jsxs("div",{className:"meta-item",children:[re.jsx("div",{className:"meta-label",children:"Category"}),re.jsx("div",{className:"meta-value",children:i.category})]}),i.keywords.length>0&&re.jsxs("div",{className:"meta-item",children:[re.jsx("div",{className:"meta-label",children:"Keywords"}),re.jsx("div",{className:"meta-value",children:i.keywords.join(", ")})]})]}),re.jsxs("div",{className:"article-title-block",children:[D(i),re.jsx("h1",{children:l==="cn"?i.titleZh:i.titleEn})]}),re.jsx("div",{className:"md-content",children:re.jsx(uD,{remarkPlugins:[wS],rehypePlugins:[FS],children:j})}),i.history.length>0&&re.jsxs("div",{className:"edit-history-section",children:[re.jsx("div",{className:"meta-label",children:"Edit History"}),re.jsx("ul",{children:i.history.map((I,R)=>re.jsx("li",{children:I},R))})]})]}),re.jsxs("aside",{className:"toc-sidebar",children:[re.jsx("div",{className:"toc-label",children:"Contents"}),re.jsx("ul",{className:"toc-list",children:V.map((I,R)=>re.jsx("li",{className:`toc-item level-${I.level}${M===I.slug?" active":""}`,children:re.jsx("a",{href:`#${I.slug}`,onClick:W=>{W.preventDefault();const P=document.getElementById(I.slug);if(P){const _=P.getBoundingClientRect().top+window.scrollY-m;window.scrollTo({top:_,behavior:"auto"}),h(I.slug)}},children:I.text})},R))})]})]}):re.jsxs(re.Fragment,{children:[re.jsxs("section",{className:"hero",ref:f,children:[re.jsxs("h1",{children:["Logic",re.jsx("br",{}),"& Intent"]}),re.jsx("p",{children:l==="cn"?"Sean 论题 • 关于技术与商业的系统性思考":"The Sean Thesis • Systemic Thoughts on Technology & Business"})]}),p.length>0&&re.jsxs("div",{className:"category-section",children:[re.jsx("div",{className:"category-label",children:l==="cn"?"Articles / 文章":"Articles"}),re.jsx("section",{className:"article-list",children:p.map((I,R)=>x(I,R))})]})]})}),re.jsxs("footer",{children:["© 2026 THE SEAN THESIS • ",l==="cn"?"逻辑与意图":"LOGIC & INTENT"]})]})}J0.createRoot(document.getElementById("root")).render(re.jsx(ii.StrictMode,{children:re.jsx(MS,{})}));
