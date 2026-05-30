(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&u(f)}).observe(document,{childList:!0,subtree:!0});function a(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function u(c){if(c.ep)return;c.ep=!0;const h=a(c);fetch(c.href,h)}})();function Dp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Es={exports:{}},ma={};var wm;function H0(){if(wm)return ma;wm=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function a(u,c,h){var f=null;if(h!==void 0&&(f=""+h),c.key!==void 0&&(f=""+c.key),"key"in c){h={};for(var m in c)m!=="key"&&(h[m]=c[m])}else h=c;return c=h.ref,{$$typeof:i,type:u,key:f,ref:c!==void 0?c:null,props:h}}return ma.Fragment=r,ma.jsx=a,ma.jsxs=a,ma}var Dm;function q0(){return Dm||(Dm=1,Es.exports=H0()),Es.exports}var re=q0(),Ts={exports:{}},pe={};var Am;function G0(){if(Am)return pe;Am=1;var i=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),D=Symbol.iterator;function w(T){return T===null||typeof T!="object"?null:(T=D&&T[D]||T["@@iterator"],typeof T=="function"?T:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,V={};function x(T,j,A){this.props=T,this.context=j,this.refs=V,this.updater=A||C}x.prototype.isReactComponent={},x.prototype.setState=function(T,j){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,j,"setState")},x.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function H(){}H.prototype=x.prototype;function N(T,j,A){this.props=T,this.context=j,this.refs=V,this.updater=A||C}var P=N.prototype=new H;P.constructor=N,L(P,x.prototype),P.isPureReactComponent=!0;var te=Array.isArray;function R(){}var Z={H:null,A:null,T:null,S:null},se=Object.prototype.hasOwnProperty;function me(T,j,A){var W=A.ref;return{$$typeof:i,type:T,key:j,ref:W!==void 0?W:null,props:A}}function I(T,j){return me(T.type,j,T.props)}function ee(T){return typeof T=="object"&&T!==null&&T.$$typeof===i}function $(T){var j={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(A){return j[A]})}var we=/\/+/g;function ie(T,j){return typeof T=="object"&&T!==null&&T.key!=null?$(""+T.key):j.toString(36)}function K(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(R,R):(T.status="pending",T.then(function(j){T.status==="pending"&&(T.status="fulfilled",T.value=j)},function(j){T.status==="pending"&&(T.status="rejected",T.reason=j)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function O(T,j,A,W,he){var ue=typeof T;(ue==="undefined"||ue==="boolean")&&(T=null);var Te=!1;if(T===null)Te=!0;else switch(ue){case"bigint":case"string":case"number":Te=!0;break;case"object":switch(T.$$typeof){case i:case r:Te=!0;break;case b:return Te=T._init,O(Te(T._payload),j,A,W,he)}}if(Te)return he=he(T),Te=W===""?"."+ie(T,0):W,te(he)?(A="",Te!=null&&(A=Te.replace(we,"$&/")+"/"),O(he,j,A,"",function(Lt){return Lt})):he!=null&&(ee(he)&&(he=I(he,A+(he.key==null||T&&T.key===he.key?"":(""+he.key).replace(we,"$&/")+"/")+Te)),j.push(he)),1;Te=0;var Xe=W===""?".":W+":";if(te(T))for(var Re=0;Re<T.length;Re++)W=T[Re],ue=Xe+ie(W,Re),Te+=O(W,j,A,ue,he);else if(Re=w(T),typeof Re=="function")for(T=Re.call(T),Re=0;!(W=T.next()).done;)W=W.value,ue=Xe+ie(W,Re++),Te+=O(W,j,A,ue,he);else if(ue==="object"){if(typeof T.then=="function")return O(K(T),j,A,W,he);throw j=String(T),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return Te}function X(T,j,A){if(T==null)return T;var W=[],he=0;return O(T,W,"","",function(ue){return j.call(A,ue,he++)}),W}function ae(T){if(T._status===-1){var j=T._result;j=j(),j.then(function(A){(T._status===0||T._status===-1)&&(T._status=1,T._result=A)},function(A){(T._status===0||T._status===-1)&&(T._status=2,T._result=A)}),T._status===-1&&(T._status=0,T._result=j)}if(T._status===1)return T._result.default;throw T._result}var ve=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},S={map:X,forEach:function(T,j,A){X(T,function(){j.apply(this,arguments)},A)},count:function(T){var j=0;return X(T,function(){j++}),j},toArray:function(T){return X(T,function(j){return j})||[]},only:function(T){if(!ee(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return pe.Activity=y,pe.Children=S,pe.Component=x,pe.Fragment=a,pe.Profiler=c,pe.PureComponent=N,pe.StrictMode=u,pe.Suspense=p,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Z,pe.__COMPILER_RUNTIME={__proto__:null,c:function(T){return Z.H.useMemoCache(T)}},pe.cache=function(T){return function(){return T.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(T,j,A){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var W=L({},T.props),he=T.key;if(j!=null)for(ue in j.key!==void 0&&(he=""+j.key),j)!se.call(j,ue)||ue==="key"||ue==="__self"||ue==="__source"||ue==="ref"&&j.ref===void 0||(W[ue]=j[ue]);var ue=arguments.length-2;if(ue===1)W.children=A;else if(1<ue){for(var Te=Array(ue),Xe=0;Xe<ue;Xe++)Te[Xe]=arguments[Xe+2];W.children=Te}return me(T.type,he,W)},pe.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:h,_context:T},T},pe.createElement=function(T,j,A){var W,he={},ue=null;if(j!=null)for(W in j.key!==void 0&&(ue=""+j.key),j)se.call(j,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(he[W]=j[W]);var Te=arguments.length-2;if(Te===1)he.children=A;else if(1<Te){for(var Xe=Array(Te),Re=0;Re<Te;Re++)Xe[Re]=arguments[Re+2];he.children=Xe}if(T&&T.defaultProps)for(W in Te=T.defaultProps,Te)he[W]===void 0&&(he[W]=Te[W]);return me(T,ue,he)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(T){return{$$typeof:m,render:T}},pe.isValidElement=ee,pe.lazy=function(T){return{$$typeof:b,_payload:{_status:-1,_result:T},_init:ae}},pe.memo=function(T,j){return{$$typeof:d,type:T,compare:j===void 0?null:j}},pe.startTransition=function(T){var j=Z.T,A={};Z.T=A;try{var W=T(),he=Z.S;he!==null&&he(A,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(R,ve)}catch(ue){ve(ue)}finally{j!==null&&A.types!==null&&(j.types=A.types),Z.T=j}},pe.unstable_useCacheRefresh=function(){return Z.H.useCacheRefresh()},pe.use=function(T){return Z.H.use(T)},pe.useActionState=function(T,j,A){return Z.H.useActionState(T,j,A)},pe.useCallback=function(T,j){return Z.H.useCallback(T,j)},pe.useContext=function(T){return Z.H.useContext(T)},pe.useDebugValue=function(){},pe.useDeferredValue=function(T,j){return Z.H.useDeferredValue(T,j)},pe.useEffect=function(T,j){return Z.H.useEffect(T,j)},pe.useEffectEvent=function(T){return Z.H.useEffectEvent(T)},pe.useId=function(){return Z.H.useId()},pe.useImperativeHandle=function(T,j,A){return Z.H.useImperativeHandle(T,j,A)},pe.useInsertionEffect=function(T,j){return Z.H.useInsertionEffect(T,j)},pe.useLayoutEffect=function(T,j){return Z.H.useLayoutEffect(T,j)},pe.useMemo=function(T,j){return Z.H.useMemo(T,j)},pe.useOptimistic=function(T,j){return Z.H.useOptimistic(T,j)},pe.useReducer=function(T,j,A){return Z.H.useReducer(T,j,A)},pe.useRef=function(T){return Z.H.useRef(T)},pe.useState=function(T){return Z.H.useState(T)},pe.useSyncExternalStore=function(T,j,A){return Z.H.useSyncExternalStore(T,j,A)},pe.useTransition=function(){return Z.H.useTransition()},pe.version="19.2.4",pe}var Sm;function ac(){return Sm||(Sm=1,Ts.exports=G0()),Ts.exports}var ii=ac(),ks={exports:{}},pa={},xs={exports:{}},Cs={};var Em;function Y0(){return Em||(Em=1,(function(i){function r(O,X){var ae=O.length;O.push(X);e:for(;0<ae;){var ve=ae-1>>>1,S=O[ve];if(0<c(S,X))O[ve]=X,O[ae]=S,ae=ve;else break e}}function a(O){return O.length===0?null:O[0]}function u(O){if(O.length===0)return null;var X=O[0],ae=O.pop();if(ae!==X){O[0]=ae;e:for(var ve=0,S=O.length,T=S>>>1;ve<T;){var j=2*(ve+1)-1,A=O[j],W=j+1,he=O[W];if(0>c(A,ae))W<S&&0>c(he,A)?(O[ve]=he,O[W]=ae,ve=W):(O[ve]=A,O[j]=ae,ve=j);else if(W<S&&0>c(he,ae))O[ve]=he,O[W]=ae,ve=W;else break e}}return X}function c(O,X){var ae=O.sortIndex-X.sortIndex;return ae!==0?ae:O.id-X.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var f=Date,m=f.now();i.unstable_now=function(){return f.now()-m}}var p=[],d=[],b=1,y=null,D=3,w=!1,C=!1,L=!1,V=!1,x=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(O){for(var X=a(d);X!==null;){if(X.callback===null)u(d);else if(X.startTime<=O)u(d),X.sortIndex=X.expirationTime,r(p,X);else break;X=a(d)}}function te(O){if(L=!1,P(O),!C)if(a(p)!==null)C=!0,R||(R=!0,$());else{var X=a(d);X!==null&&K(te,X.startTime-O)}}var R=!1,Z=-1,se=5,me=-1;function I(){return V?!0:!(i.unstable_now()-me<se)}function ee(){if(V=!1,R){var O=i.unstable_now();me=O;var X=!0;try{e:{C=!1,L&&(L=!1,H(Z),Z=-1),w=!0;var ae=D;try{t:{for(P(O),y=a(p);y!==null&&!(y.expirationTime>O&&I());){var ve=y.callback;if(typeof ve=="function"){y.callback=null,D=y.priorityLevel;var S=ve(y.expirationTime<=O);if(O=i.unstable_now(),typeof S=="function"){y.callback=S,P(O),X=!0;break t}y===a(p)&&u(p),P(O)}else u(p);y=a(p)}if(y!==null)X=!0;else{var T=a(d);T!==null&&K(te,T.startTime-O),X=!1}}break e}finally{y=null,D=ae,w=!1}X=void 0}}finally{X?$():R=!1}}}var $;if(typeof N=="function")$=function(){N(ee)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,ie=we.port2;we.port1.onmessage=ee,$=function(){ie.postMessage(null)}}else $=function(){x(ee,0)};function K(O,X){Z=x(function(){O(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_next=function(O){switch(D){case 1:case 2:case 3:var X=3;break;default:X=D}var ae=D;D=X;try{return O()}finally{D=ae}},i.unstable_requestPaint=function(){V=!0},i.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ae=D;D=O;try{return X()}finally{D=ae}},i.unstable_scheduleCallback=function(O,X,ae){var ve=i.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ve+ae:ve):ae=ve,O){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ae+S,O={id:b++,callback:X,priorityLevel:O,startTime:ae,expirationTime:S,sortIndex:-1},ae>ve?(O.sortIndex=ae,r(d,O),a(p)===null&&O===a(d)&&(L?(H(Z),Z=-1):L=!0,K(te,ae-ve))):(O.sortIndex=S,r(p,O),C||w||(C=!0,R||(R=!0,$()))),O},i.unstable_shouldYield=I,i.unstable_wrapCallback=function(O){var X=D;return function(){var ae=D;D=X;try{return O.apply(this,arguments)}finally{D=ae}}}})(Cs)),Cs}var Tm;function V0(){return Tm||(Tm=1,xs.exports=Y0()),xs.exports}var Fs={exports:{}},ht={};var km;function X0(){if(km)return ht;km=1;var i=ac();function r(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)d+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var u={d:{f:a,r:function(){throw Error(r(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},c=Symbol.for("react.portal");function h(p,d,b){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:p,containerInfo:d,implementation:b}}var f=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,ht.createPortal=function(p,d){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(r(299));return h(p,d,null,b)},ht.flushSync=function(p){var d=f.T,b=u.p;try{if(f.T=null,u.p=2,p)return p()}finally{f.T=d,u.p=b,u.d.f()}},ht.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,u.d.C(p,d))},ht.prefetchDNS=function(p){typeof p=="string"&&u.d.D(p)},ht.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var b=d.as,y=m(b,d.crossOrigin),D=typeof d.integrity=="string"?d.integrity:void 0,w=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;b==="style"?u.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:y,integrity:D,fetchPriority:w}):b==="script"&&u.d.X(p,{crossOrigin:y,integrity:D,fetchPriority:w,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},ht.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var b=m(d.as,d.crossOrigin);u.d.M(p,{crossOrigin:b,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&u.d.M(p)},ht.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var b=d.as,y=m(b,d.crossOrigin);u.d.L(p,b,{crossOrigin:y,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},ht.preloadModule=function(p,d){if(typeof p=="string")if(d){var b=m(d.as,d.crossOrigin);u.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:b,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else u.d.m(p)},ht.requestFormReset=function(p){u.d.r(p)},ht.unstable_batchedUpdates=function(p,d){return p(d)},ht.useFormState=function(p,d,b){return f.H.useFormState(p,d,b)},ht.useFormStatus=function(){return f.H.useHostTransitionStatus()},ht.version="19.2.4",ht}var xm;function Q0(){if(xm)return Fs.exports;xm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),Fs.exports=X0(),Fs.exports}var Cm;function Z0(){if(Cm)return pa;Cm=1;var i=V0(),r=ac(),a=Q0();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(h(e)!==e)throw Error(u(188))}function d(e){var t=e.alternate;if(!t){if(t=h(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,l=t;;){var o=n.return;if(o===null)break;var s=o.alternate;if(s===null){if(l=o.return,l!==null){n=l;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===n)return p(o),e;if(s===l)return p(o),t;s=s.sibling}throw Error(u(188))}if(n.return!==l.return)n=o,l=s;else{for(var g=!1,v=o.child;v;){if(v===n){g=!0,n=o,l=s;break}if(v===l){g=!0,l=o,n=s;break}v=v.sibling}if(!g){for(v=s.child;v;){if(v===n){g=!0,n=s,l=o;break}if(v===l){g=!0,l=s,n=o;break}v=v.sibling}if(!g)throw Error(u(189))}}if(n.alternate!==l)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,D=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case x:return"Profiler";case V:return"StrictMode";case te:return"Suspense";case R:return"SuspenseList";case me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case C:return"Portal";case N:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Z:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case se:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var K=Array.isArray,O=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},ve=[],S=-1;function T(e){return{current:e}}function j(e){0>S||(e.current=ve[S],ve[S]=null,S--)}function A(e,t){S++,ve[S]=e.current,e.current=t}var W=T(null),he=T(null),ue=T(null),Te=T(null);function Xe(e,t){switch(A(ue,t),A(he,e),A(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gd(t),e=Yd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(W),A(W,e)}function Re(){j(W),j(he),j(ue)}function Lt(e){e.memoizedState!==null&&A(Te,e);var t=W.current,n=Yd(t,e.type);t!==n&&(A(he,e),A(W,n))}function sn(e){he.current===e&&(j(W),j(he)),Te.current===e&&(j(Te),ca._currentValue=ae)}var Dl,Ca;function cn(e){if(Dl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dl=t&&t[1]||"",Ca=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Dl+e+Ca}var ki=!1;function xi(e,t){if(!e||ki)return"";ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(_){var B=_}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(_){B=_}e.call(Y.prototype)}}else{try{throw Error()}catch(_){B=_}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(_){if(_&&B&&typeof _.stack=="string")return[_.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),g=s[0],v=s[1];if(g&&v){var E=g.split(`
`),M=v.split(`
`);for(o=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;o<M.length&&!M[o].includes("DetermineComponentFrameRoot");)o++;if(l===E.length||o===M.length)for(l=E.length-1,o=M.length-1;1<=l&&0<=o&&E[l]!==M[o];)o--;for(;1<=l&&0<=o;l--,o--)if(E[l]!==M[o]){if(l!==1||o!==1)do if(l--,o--,0>o||E[l]!==M[o]){var U=`
`+E[l].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=l&&0<=o);break}}}finally{ki=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?cn(n):""}function Fa(e,t){switch(e.tag){case 26:case 27:case 5:return cn(e.type);case 16:return cn("Lazy");case 13:return e.child!==t&&t!==null?cn("Suspense Fallback"):cn("Suspense");case 19:return cn("SuspenseList");case 0:case 15:return xi(e.type,!1);case 11:return xi(e.type.render,!1);case 1:return xi(e.type,!0);case 31:return cn("Activity");default:return""}}function za(e){try{var t="",n=null;do t+=Fa(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ci=Object.prototype.hasOwnProperty,Fi=i.unstable_scheduleCallback,Al=i.unstable_cancelCallback,ou=i.unstable_shouldYield,su=i.unstable_requestPaint,pt=i.unstable_now,cu=i.unstable_getCurrentPriorityLevel,q=i.unstable_ImmediatePriority,J=i.unstable_UserBlockingPriority,de=i.unstable_NormalPriority,De=i.unstable_LowPriority,Oe=i.unstable_IdlePriority,Ft=i.log,fn=i.unstable_setDisableYieldValue,gt=null,it=null;function vt(e){if(typeof Ft=="function"&&fn(e),it&&typeof it.setStrictMode=="function")try{it.setStrictMode(gt,e)}catch{}}var je=Math.clz32?Math.clz32:xg,Mn=Math.log,Wt=Math.LN2;function xg(e){return e>>>=0,e===0?32:31-(Mn(e)/Wt|0)|0}var Ma=256,Ba=262144,Oa=4194304;function ai(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _a(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var o=0,s=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var v=l&134217727;return v!==0?(l=v&~s,l!==0?o=ai(l):(g&=v,g!==0?o=ai(g):n||(n=v&~e,n!==0&&(o=ai(n))))):(v=l&~s,v!==0?o=ai(v):g!==0?o=ai(g):n||(n=l&~e,n!==0&&(o=ai(n)))),o===0?0:t!==0&&t!==o&&(t&s)===0&&(s=o&-o,n=t&-t,s>=n||s===32&&(n&4194048)!==0)?t:o}function Sl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Cg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sc(){var e=Oa;return Oa<<=1,(Oa&62914560)===0&&(Oa=4194304),e}function fu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function El(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Fg(e,t,n,l,o,s){var g=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var v=e.entanglements,E=e.expirationTimes,M=e.hiddenUpdates;for(n=g&~n;0<n;){var U=31-je(n),Y=1<<U;v[U]=0,E[U]=-1;var B=M[U];if(B!==null)for(M[U]=null,U=0;U<B.length;U++){var _=B[U];_!==null&&(_.lane&=-536870913)}n&=~Y}l!==0&&Ec(e,l,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(g&~t))}function Ec(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-je(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Tc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-je(n),o=1<<l;o&t|e[l]&t&&(e[l]|=t),n&=~o}}function kc(e,t){var n=t&-t;return n=(n&42)!==0?1:hu(n),(n&(e.suspendedLanes|t))!==0?0:n}function hu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function du(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function xc(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:dm(e.type))}function Cc(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var Bn=Math.random().toString(36).slice(2),ut="__reactFiber$"+Bn,wt="__reactProps$"+Bn,zi="__reactContainer$"+Bn,mu="__reactEvents$"+Bn,zg="__reactListeners$"+Bn,Mg="__reactHandles$"+Bn,Fc="__reactResources$"+Bn,Tl="__reactMarker$"+Bn;function pu(e){delete e[ut],delete e[wt],delete e[mu],delete e[zg],delete e[Mg]}function Mi(e){var t=e[ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zi]||n[ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wd(e);e!==null;){if(n=e[ut])return n;e=Wd(e)}return t}e=n,n=e.parentNode}return null}function Bi(e){if(e=e[ut]||e[zi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function kl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Oi(e){var t=e[Fc];return t||(t=e[Fc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function at(e){e[Tl]=!0}var zc=new Set,Mc={};function ri(e,t){_i(e,t),_i(e+"Capture",t)}function _i(e,t){for(Mc[e]=t,e=0;e<t.length;e++)zc.add(t[e])}var Bg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bc={},Oc={};function Og(e){return Ci.call(Oc,e)?!0:Ci.call(Bc,e)?!1:Bg.test(e)?Oc[e]=!0:(Bc[e]=!0,!1)}function Ia(e,t,n){if(Og(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ra(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function hn(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _g(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var o=l.get,s=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(g){n=""+g,s.call(this,g)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gu(e){if(!e._valueTracker){var t=_c(e)?"checked":"value";e._valueTracker=_g(e,t,""+e[t])}}function Ic(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=_c(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Na(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ig=/[\n"\\]/g;function Ht(e){return e.replace(Ig,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function yu(e,t,n,l,o,s,g,v){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+jt(t)):e.value!==""+jt(t)&&(e.value=""+jt(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?bu(e,g,jt(t)):n!=null?bu(e,g,jt(n)):l!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+jt(v):e.removeAttribute("name")}function Rc(e,t,n,l,o,s,g,v){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){gu(e);return}n=n!=null?""+jt(n):"",t=t!=null?""+jt(t):n,v||t===e.value||(e.value=t),e.defaultValue=t}l=l??o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=v?e.checked:!!l,e.defaultChecked=!!l,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),gu(e)}function bu(e,t,n){t==="number"&&Na(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Ii(e,t,n,l){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&l&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Nc(e,t,n){if(t!=null&&(t=""+jt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+jt(n):""}function Uc(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(u(92));if(K(l)){if(1<l.length)throw Error(u(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=jt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),gu(e)}function Ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lc(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Rg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function jc(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var o in t)l=t[o],t.hasOwnProperty(o)&&n[o]!==l&&Lc(e,o,l)}else for(var s in t)t.hasOwnProperty(s)&&Lc(e,s,t[s])}function vu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ng=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ug=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ua(e){return Ug.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function dn(){}var wu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,Ui=null;function Hc(e){var t=Bi(e);if(t&&(e=t.stateNode)){var n=e[wt]||null;e:switch(e=t.stateNode,t.type){case"input":if(yu(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var o=l[wt]||null;if(!o)throw Error(u(90));yu(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&Ic(l)}break e;case"textarea":Nc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Ii(e,!!n.multiple,t,!1)}}}var Au=!1;function qc(e,t,n){if(Au)return e(t,n);Au=!0;try{var l=e(t);return l}finally{if(Au=!1,(Ni!==null||Ui!==null)&&(Tr(),Ni&&(t=Ni,e=Ui,Ui=Ni=null,Hc(t),e)))for(t=0;t<e.length;t++)Hc(e[t])}}function xl(e,t){var n=e.stateNode;if(n===null)return null;var l=n[wt]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(mn)try{var Cl={};Object.defineProperty(Cl,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Cl,Cl),window.removeEventListener("test",Cl,Cl)}catch{Su=!1}var On=null,Eu=null,La=null;function Gc(){if(La)return La;var e,t=Eu,n=t.length,l,o="value"in On?On.value:On.textContent,s=o.length;for(e=0;e<n&&t[e]===o[e];e++);var g=n-e;for(l=1;l<=g&&t[n-l]===o[s-l];l++);return La=o.slice(e,1<l?1-l:void 0)}function ja(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ha(){return!0}function Yc(){return!1}function Dt(e){function t(n,l,o,s,g){this._reactName=n,this._targetInst=o,this.type=l,this.nativeEvent=s,this.target=g,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(n=e[v],this[v]=n?n(s):s[v]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ha:Yc,this.isPropagationStopped=Yc,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),t}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qa=Dt(ui),Fl=y({},ui,{view:0,detail:0}),Lg=Dt(Fl),Tu,ku,zl,Ga=y({},Fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zl&&(zl&&e.type==="mousemove"?(Tu=e.screenX-zl.screenX,ku=e.screenY-zl.screenY):ku=Tu=0,zl=e),Tu)},movementY:function(e){return"movementY"in e?e.movementY:ku}}),Vc=Dt(Ga),jg=y({},Ga,{dataTransfer:0}),Hg=Dt(jg),qg=y({},Fl,{relatedTarget:0}),xu=Dt(qg),Gg=y({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),Yg=Dt(Gg),Vg=y({},ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xg=Dt(Vg),Qg=y({},ui,{data:0}),Xc=Dt(Qg),Zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jg[e])?!!t[e]:!1}function Cu(){return Wg}var Pg=y({},Fl,{key:function(e){if(e.key){var t=Zg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ja(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cu,charCode:function(e){return e.type==="keypress"?ja(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ja(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$g=Dt(Pg),ey=y({},Ga,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qc=Dt(ey),ty=y({},Fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cu}),ny=Dt(ty),iy=y({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),ly=Dt(iy),ay=y({},Ga,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=Dt(ay),uy=y({},ui,{newState:0,oldState:0}),oy=Dt(uy),sy=[9,13,27,32],Fu=mn&&"CompositionEvent"in window,Ml=null;mn&&"documentMode"in document&&(Ml=document.documentMode);var cy=mn&&"TextEvent"in window&&!Ml,Zc=mn&&(!Fu||Ml&&8<Ml&&11>=Ml),Kc=" ",Jc=!1;function Wc(e,t){switch(e){case"keyup":return sy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Li=!1;function fy(e,t){switch(e){case"compositionend":return Pc(t);case"keypress":return t.which!==32?null:(Jc=!0,Kc);case"textInput":return e=t.data,e===Kc&&Jc?null:e;default:return null}}function hy(e,t){if(Li)return e==="compositionend"||!Fu&&Wc(e,t)?(e=Gc(),La=Eu=On=null,Li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zc&&t.locale!=="ko"?null:t.data;default:return null}}var dy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dy[e.type]:t==="textarea"}function ef(e,t,n,l){Ni?Ui?Ui.push(l):Ui=[l]:Ni=l,t=Br(t,"onChange"),0<t.length&&(n=new qa("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Bl=null,Ol=null;function my(e){Nd(e,0)}function Ya(e){var t=kl(e);if(Ic(t))return e}function tf(e,t){if(e==="change")return t}var nf=!1;if(mn){var zu;if(mn){var Mu="oninput"in document;if(!Mu){var lf=document.createElement("div");lf.setAttribute("oninput","return;"),Mu=typeof lf.oninput=="function"}zu=Mu}else zu=!1;nf=zu&&(!document.documentMode||9<document.documentMode)}function af(){Bl&&(Bl.detachEvent("onpropertychange",rf),Ol=Bl=null)}function rf(e){if(e.propertyName==="value"&&Ya(Ol)){var t=[];ef(t,Ol,e,Du(e)),qc(my,t)}}function py(e,t,n){e==="focusin"?(af(),Bl=t,Ol=n,Bl.attachEvent("onpropertychange",rf)):e==="focusout"&&af()}function gy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ya(Ol)}function yy(e,t){if(e==="click")return Ya(t)}function by(e,t){if(e==="input"||e==="change")return Ya(t)}function vy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:vy;function _l(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var o=n[l];if(!Ci.call(t,o)||!zt(e[o],t[o]))return!1}return!0}function uf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function of(e,t){var n=uf(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=uf(n)}}function sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Na(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Na(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wy=mn&&"documentMode"in document&&11>=document.documentMode,ji=null,Ou=null,Il=null,_u=!1;function ff(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_u||ji==null||ji!==Na(l)||(l=ji,"selectionStart"in l&&Bu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Il&&_l(Il,l)||(Il=l,l=Br(Ou,"onSelect"),0<l.length&&(t=new qa("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=ji)))}function oi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hi={animationend:oi("Animation","AnimationEnd"),animationiteration:oi("Animation","AnimationIteration"),animationstart:oi("Animation","AnimationStart"),transitionrun:oi("Transition","TransitionRun"),transitionstart:oi("Transition","TransitionStart"),transitioncancel:oi("Transition","TransitionCancel"),transitionend:oi("Transition","TransitionEnd")},Iu={},hf={};mn&&(hf=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function si(e){if(Iu[e])return Iu[e];if(!Hi[e])return e;var t=Hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in hf)return Iu[e]=t[n];return e}var df=si("animationend"),mf=si("animationiteration"),pf=si("animationstart"),Dy=si("transitionrun"),Ay=si("transitionstart"),Sy=si("transitioncancel"),gf=si("transitionend"),yf=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Pt(e,t){yf.set(e,t),ri(t,[e])}var Va=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},qt=[],qi=0,Nu=0;function Xa(){for(var e=qi,t=Nu=qi=0;t<e;){var n=qt[t];qt[t++]=null;var l=qt[t];qt[t++]=null;var o=qt[t];qt[t++]=null;var s=qt[t];if(qt[t++]=null,l!==null&&o!==null){var g=l.pending;g===null?o.next=o:(o.next=g.next,g.next=o),l.pending=o}s!==0&&bf(n,o,s)}}function Qa(e,t,n,l){qt[qi++]=e,qt[qi++]=t,qt[qi++]=n,qt[qi++]=l,Nu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Uu(e,t,n,l){return Qa(e,t,n,l),Za(e)}function ci(e,t){return Qa(e,null,null,t),Za(e)}function bf(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var o=!1,s=e.return;s!==null;)s.childLanes|=n,l=s.alternate,l!==null&&(l.childLanes|=n),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&t!==null&&(o=31-je(n),e=s.hiddenUpdates,l=e[o],l===null?e[o]=[t]:l.push(t),t.lane=n|536870912),s):null}function Za(e){if(50<ia)throw ia=0,Zo=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Gi={};function Ey(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,n,l){return new Ey(e,t,n,l)}function Lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pn(e,t){var n=e.alternate;return n===null?(n=Mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ka(e,t,n,l,o,s){var g=0;if(l=e,typeof e=="function")Lu(e)&&(g=1);else if(typeof e=="string")g=F0(e,n,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case me:return e=Mt(31,n,t,o),e.elementType=me,e.lanes=s,e;case L:return fi(n.children,o,s,t);case V:g=8,o|=24;break;case x:return e=Mt(12,n,t,o|2),e.elementType=x,e.lanes=s,e;case te:return e=Mt(13,n,t,o),e.elementType=te,e.lanes=s,e;case R:return e=Mt(19,n,t,o),e.elementType=R,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:g=10;break e;case H:g=9;break e;case P:g=11;break e;case Z:g=14;break e;case se:g=16,l=null;break e}g=29,n=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=Mt(g,n,t,o),t.elementType=e,t.type=l,t.lanes=s,t}function fi(e,t,n,l){return e=Mt(7,e,l,t),e.lanes=n,e}function ju(e,t,n){return e=Mt(6,e,null,t),e.lanes=n,e}function wf(e){var t=Mt(18,null,null,0);return t.stateNode=e,t}function Hu(e,t,n){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Df=new WeakMap;function Gt(e,t){if(typeof e=="object"&&e!==null){var n=Df.get(e);return n!==void 0?n:(t={value:e,source:t,stack:za(t)},Df.set(e,t),t)}return{value:e,source:t,stack:za(t)}}var Yi=[],Vi=0,Ja=null,Rl=0,Yt=[],Vt=0,_n=null,nn=1,ln="";function gn(e,t){Yi[Vi++]=Rl,Yi[Vi++]=Ja,Ja=e,Rl=t}function Af(e,t,n){Yt[Vt++]=nn,Yt[Vt++]=ln,Yt[Vt++]=_n,_n=e;var l=nn;e=ln;var o=32-je(l)-1;l&=~(1<<o),n+=1;var s=32-je(t)+o;if(30<s){var g=o-o%5;s=(l&(1<<g)-1).toString(32),l>>=g,o-=g,nn=1<<32-je(t)+o|n<<o|l,ln=s+e}else nn=1<<s|n<<o|l,ln=e}function qu(e){e.return!==null&&(gn(e,1),Af(e,1,0))}function Gu(e){for(;e===Ja;)Ja=Yi[--Vi],Yi[Vi]=null,Rl=Yi[--Vi],Yi[Vi]=null;for(;e===_n;)_n=Yt[--Vt],Yt[Vt]=null,ln=Yt[--Vt],Yt[Vt]=null,nn=Yt[--Vt],Yt[Vt]=null}function Sf(e,t){Yt[Vt++]=nn,Yt[Vt++]=ln,Yt[Vt++]=_n,nn=t.id,ln=t.overflow,_n=e}var ot=null,Ye=null,Ce=!1,In=null,Xt=!1,Yu=Error(u(519));function Rn(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Nl(Gt(t,e)),Yu}function Ef(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[ut]=e,t[wt]=l,n){case"dialog":Se("cancel",t),Se("close",t);break;case"iframe":case"object":case"embed":Se("load",t);break;case"video":case"audio":for(n=0;n<aa.length;n++)Se(aa[n],t);break;case"source":Se("error",t);break;case"img":case"image":case"link":Se("error",t),Se("load",t);break;case"details":Se("toggle",t);break;case"input":Se("invalid",t),Rc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Se("invalid",t);break;case"textarea":Se("invalid",t),Uc(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Hd(t.textContent,n)?(l.popover!=null&&(Se("beforetoggle",t),Se("toggle",t)),l.onScroll!=null&&Se("scroll",t),l.onScrollEnd!=null&&Se("scrollend",t),l.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||Rn(e,!0)}function Tf(e){for(ot=e.return;ot;)switch(ot.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:ot=ot.return}}function Xi(e){if(e!==ot)return!1;if(!Ce)return Tf(e),Ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ss(e.type,e.memoizedProps)),n=!n),n&&Ye&&Rn(e),Tf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ye=Jd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ye=Jd(e)}else t===27?(t=Ye,Jn(e.type)?(e=ms,ms=null,Ye=e):Ye=t):Ye=ot?Zt(e.stateNode.nextSibling):null;return!0}function hi(){Ye=ot=null,Ce=!1}function Vu(){var e=In;return e!==null&&(Tt===null?Tt=e:Tt.push.apply(Tt,e),In=null),e}function Nl(e){In===null?In=[e]:In.push(e)}var Xu=T(null),di=null,yn=null;function Nn(e,t,n){A(Xu,t._currentValue),t._currentValue=n}function bn(e){e._currentValue=Xu.current,j(Xu)}function Qu(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Zu(e,t,n,l){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var g=o.child;s=s.firstContext;e:for(;s!==null;){var v=s;s=o;for(var E=0;E<t.length;E++)if(v.context===t[E]){s.lanes|=n,v=s.alternate,v!==null&&(v.lanes|=n),Qu(s.return,n,e),l||(g=null);break e}s=v.next}}else if(o.tag===18){if(g=o.return,g===null)throw Error(u(341));g.lanes|=n,s=g.alternate,s!==null&&(s.lanes|=n),Qu(g,n,e),g=null}else g=o.child;if(g!==null)g.return=o;else for(g=o;g!==null;){if(g===e){g=null;break}if(o=g.sibling,o!==null){o.return=g.return,g=o;break}g=g.return}o=g}}function Qi(e,t,n,l){e=null;for(var o=t,s=!1;o!==null;){if(!s){if((o.flags&524288)!==0)s=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var g=o.alternate;if(g===null)throw Error(u(387));if(g=g.memoizedProps,g!==null){var v=o.type;zt(o.pendingProps.value,g.value)||(e!==null?e.push(v):e=[v])}}else if(o===Te.current){if(g=o.alternate,g===null)throw Error(u(387));g.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(ca):e=[ca])}o=o.return}e!==null&&Zu(t,e,n,l),t.flags|=262144}function Wa(e){for(e=e.firstContext;e!==null;){if(!zt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mi(e){di=e,yn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function st(e){return kf(di,e)}function Pa(e,t){return di===null&&mi(e),kf(e,t)}function kf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},yn===null){if(e===null)throw Error(u(308));yn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yn=yn.next=t;return n}var Ty=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ky=i.unstable_scheduleCallback,xy=i.unstable_NormalPriority,Pe={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new Ty,data:new Map,refCount:0}}function Ul(e){e.refCount--,e.refCount===0&&ky(xy,function(){e.controller.abort()})}var Ll=null,Ju=0,Zi=0,Ki=null;function Cy(e,t){if(Ll===null){var n=Ll=[];Ju=0,Zi=es(),Ki={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Ju++,t.then(xf,xf),t}function xf(){if(--Ju===0&&Ll!==null){Ki!==null&&(Ki.status="fulfilled");var e=Ll;Ll=null,Zi=0,Ki=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Fy(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(l.status="rejected",l.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),l}var Cf=O.S;O.S=function(e,t){fd=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cy(e,t),Cf!==null&&Cf(e,t)};var pi=T(null);function Wu(){var e=pi.current;return e!==null?e:He.pooledCache}function $a(e,t){t===null?A(pi,pi.current):A(pi,t.pool)}function Ff(){var e=Wu();return e===null?null:{parent:Pe._currentValue,pool:e}}var Ji=Error(u(460)),Pu=Error(u(474)),er=Error(u(542)),tr={then:function(){}};function zf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Of(e),e;default:if(typeof t.status=="string")t.then(dn,dn);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=l}},function(l){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Of(e),e}throw yi=t,Ji}}function gi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(yi=n,Ji):n}}var yi=null;function Bf(){if(yi===null)throw Error(u(459));var e=yi;return yi=null,e}function Of(e){if(e===Ji||e===er)throw Error(u(483))}var Wi=null,jl=0;function nr(e){var t=jl;return jl+=1,Wi===null&&(Wi=[]),Mf(Wi,e,t)}function Hl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ir(e,t){throw t.$$typeof===D?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function _f(e){function t(F,k){if(e){var z=F.deletions;z===null?(F.deletions=[k],F.flags|=16):z.push(k)}}function n(F,k){if(!e)return null;for(;k!==null;)t(F,k),k=k.sibling;return null}function l(F){for(var k=new Map;F!==null;)F.key!==null?k.set(F.key,F):k.set(F.index,F),F=F.sibling;return k}function o(F,k){return F=pn(F,k),F.index=0,F.sibling=null,F}function s(F,k,z){return F.index=z,e?(z=F.alternate,z!==null?(z=z.index,z<k?(F.flags|=67108866,k):z):(F.flags|=67108866,k)):(F.flags|=1048576,k)}function g(F){return e&&F.alternate===null&&(F.flags|=67108866),F}function v(F,k,z,G){return k===null||k.tag!==6?(k=ju(z,F.mode,G),k.return=F,k):(k=o(k,z),k.return=F,k)}function E(F,k,z,G){var oe=z.type;return oe===L?U(F,k,z.props.children,G,z.key):k!==null&&(k.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===se&&gi(oe)===k.type)?(k=o(k,z.props),Hl(k,z),k.return=F,k):(k=Ka(z.type,z.key,z.props,null,F.mode,G),Hl(k,z),k.return=F,k)}function M(F,k,z,G){return k===null||k.tag!==4||k.stateNode.containerInfo!==z.containerInfo||k.stateNode.implementation!==z.implementation?(k=Hu(z,F.mode,G),k.return=F,k):(k=o(k,z.children||[]),k.return=F,k)}function U(F,k,z,G,oe){return k===null||k.tag!==7?(k=fi(z,F.mode,G,oe),k.return=F,k):(k=o(k,z),k.return=F,k)}function Y(F,k,z){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ju(""+k,F.mode,z),k.return=F,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case w:return z=Ka(k.type,k.key,k.props,null,F.mode,z),Hl(z,k),z.return=F,z;case C:return k=Hu(k,F.mode,z),k.return=F,k;case se:return k=gi(k),Y(F,k,z)}if(K(k)||$(k))return k=fi(k,F.mode,z,null),k.return=F,k;if(typeof k.then=="function")return Y(F,nr(k),z);if(k.$$typeof===N)return Y(F,Pa(F,k),z);ir(F,k)}return null}function B(F,k,z,G){var oe=k!==null?k.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return oe!==null?null:v(F,k,""+z,G);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return z.key===oe?E(F,k,z,G):null;case C:return z.key===oe?M(F,k,z,G):null;case se:return z=gi(z),B(F,k,z,G)}if(K(z)||$(z))return oe!==null?null:U(F,k,z,G,null);if(typeof z.then=="function")return B(F,k,nr(z),G);if(z.$$typeof===N)return B(F,k,Pa(F,z),G);ir(F,z)}return null}function _(F,k,z,G,oe){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return F=F.get(z)||null,v(k,F,""+G,oe);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case w:return F=F.get(G.key===null?z:G.key)||null,E(k,F,G,oe);case C:return F=F.get(G.key===null?z:G.key)||null,M(k,F,G,oe);case se:return G=gi(G),_(F,k,z,G,oe)}if(K(G)||$(G))return F=F.get(z)||null,U(k,F,G,oe,null);if(typeof G.then=="function")return _(F,k,z,nr(G),oe);if(G.$$typeof===N)return _(F,k,z,Pa(k,G),oe);ir(k,G)}return null}function ne(F,k,z,G){for(var oe=null,ze=null,le=k,ye=k=0,xe=null;le!==null&&ye<z.length;ye++){le.index>ye?(xe=le,le=null):xe=le.sibling;var Me=B(F,le,z[ye],G);if(Me===null){le===null&&(le=xe);break}e&&le&&Me.alternate===null&&t(F,le),k=s(Me,k,ye),ze===null?oe=Me:ze.sibling=Me,ze=Me,le=xe}if(ye===z.length)return n(F,le),Ce&&gn(F,ye),oe;if(le===null){for(;ye<z.length;ye++)le=Y(F,z[ye],G),le!==null&&(k=s(le,k,ye),ze===null?oe=le:ze.sibling=le,ze=le);return Ce&&gn(F,ye),oe}for(le=l(le);ye<z.length;ye++)xe=_(le,F,ye,z[ye],G),xe!==null&&(e&&xe.alternate!==null&&le.delete(xe.key===null?ye:xe.key),k=s(xe,k,ye),ze===null?oe=xe:ze.sibling=xe,ze=xe);return e&&le.forEach(function(ti){return t(F,ti)}),Ce&&gn(F,ye),oe}function fe(F,k,z,G){if(z==null)throw Error(u(151));for(var oe=null,ze=null,le=k,ye=k=0,xe=null,Me=z.next();le!==null&&!Me.done;ye++,Me=z.next()){le.index>ye?(xe=le,le=null):xe=le.sibling;var ti=B(F,le,Me.value,G);if(ti===null){le===null&&(le=xe);break}e&&le&&ti.alternate===null&&t(F,le),k=s(ti,k,ye),ze===null?oe=ti:ze.sibling=ti,ze=ti,le=xe}if(Me.done)return n(F,le),Ce&&gn(F,ye),oe;if(le===null){for(;!Me.done;ye++,Me=z.next())Me=Y(F,Me.value,G),Me!==null&&(k=s(Me,k,ye),ze===null?oe=Me:ze.sibling=Me,ze=Me);return Ce&&gn(F,ye),oe}for(le=l(le);!Me.done;ye++,Me=z.next())Me=_(le,F,ye,Me.value,G),Me!==null&&(e&&Me.alternate!==null&&le.delete(Me.key===null?ye:Me.key),k=s(Me,k,ye),ze===null?oe=Me:ze.sibling=Me,ze=Me);return e&&le.forEach(function(j0){return t(F,j0)}),Ce&&gn(F,ye),oe}function Le(F,k,z,G){if(typeof z=="object"&&z!==null&&z.type===L&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case w:e:{for(var oe=z.key;k!==null;){if(k.key===oe){if(oe=z.type,oe===L){if(k.tag===7){n(F,k.sibling),G=o(k,z.props.children),G.return=F,F=G;break e}}else if(k.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===se&&gi(oe)===k.type){n(F,k.sibling),G=o(k,z.props),Hl(G,z),G.return=F,F=G;break e}n(F,k);break}else t(F,k);k=k.sibling}z.type===L?(G=fi(z.props.children,F.mode,G,z.key),G.return=F,F=G):(G=Ka(z.type,z.key,z.props,null,F.mode,G),Hl(G,z),G.return=F,F=G)}return g(F);case C:e:{for(oe=z.key;k!==null;){if(k.key===oe)if(k.tag===4&&k.stateNode.containerInfo===z.containerInfo&&k.stateNode.implementation===z.implementation){n(F,k.sibling),G=o(k,z.children||[]),G.return=F,F=G;break e}else{n(F,k);break}else t(F,k);k=k.sibling}G=Hu(z,F.mode,G),G.return=F,F=G}return g(F);case se:return z=gi(z),Le(F,k,z,G)}if(K(z))return ne(F,k,z,G);if($(z)){if(oe=$(z),typeof oe!="function")throw Error(u(150));return z=oe.call(z),fe(F,k,z,G)}if(typeof z.then=="function")return Le(F,k,nr(z),G);if(z.$$typeof===N)return Le(F,k,Pa(F,z),G);ir(F,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,k!==null&&k.tag===6?(n(F,k.sibling),G=o(k,z),G.return=F,F=G):(n(F,k),G=ju(z,F.mode,G),G.return=F,F=G),g(F)):n(F,k)}return function(F,k,z,G){try{jl=0;var oe=Le(F,k,z,G);return Wi=null,oe}catch(le){if(le===Ji||le===er)throw le;var ze=Mt(29,le,null,F.mode);return ze.lanes=G,ze.return=F,ze}finally{}}}var bi=_f(!0),If=_f(!1),Un=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ln(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Be&2)!==0){var o=l.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t,t=Za(e),bf(e,null,n),t}return Qa(e,l,t,n),Za(e)}function ql(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Tc(e,n)}}function to(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var o=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var g={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?o=s=g:s=s.next=g,n=n.next}while(n!==null);s===null?o=s=t:s=s.next=t}else o=s=t;n={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var no=!1;function Gl(){if(no){var e=Ki;if(e!==null)throw e}}function Yl(e,t,n,l){no=!1;var o=e.updateQueue;Un=!1;var s=o.firstBaseUpdate,g=o.lastBaseUpdate,v=o.shared.pending;if(v!==null){o.shared.pending=null;var E=v,M=E.next;E.next=null,g===null?s=M:g.next=M,g=E;var U=e.alternate;U!==null&&(U=U.updateQueue,v=U.lastBaseUpdate,v!==g&&(v===null?U.firstBaseUpdate=M:v.next=M,U.lastBaseUpdate=E))}if(s!==null){var Y=o.baseState;g=0,U=M=E=null,v=s;do{var B=v.lane&-536870913,_=B!==v.lane;if(_?(ke&B)===B:(l&B)===B){B!==0&&B===Zi&&(no=!0),U!==null&&(U=U.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var ne=e,fe=v;B=t;var Le=n;switch(fe.tag){case 1:if(ne=fe.payload,typeof ne=="function"){Y=ne.call(Le,Y,B);break e}Y=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=fe.payload,B=typeof ne=="function"?ne.call(Le,Y,B):ne,B==null)break e;Y=y({},Y,B);break e;case 2:Un=!0}}B=v.callback,B!==null&&(e.flags|=64,_&&(e.flags|=8192),_=o.callbacks,_===null?o.callbacks=[B]:_.push(B))}else _={lane:B,tag:v.tag,payload:v.payload,callback:v.callback,next:null},U===null?(M=U=_,E=Y):U=U.next=_,g|=B;if(v=v.next,v===null){if(v=o.shared.pending,v===null)break;_=v,v=_.next,_.next=null,o.lastBaseUpdate=_,o.shared.pending=null}}while(!0);U===null&&(E=Y),o.baseState=E,o.firstBaseUpdate=M,o.lastBaseUpdate=U,s===null&&(o.shared.lanes=0),Vn|=g,e.lanes=g,e.memoizedState=Y}}function Rf(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function Nf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rf(n[e],t)}var Pi=T(null),lr=T(0);function Uf(e,t){e=xn,A(lr,e),A(Pi,t),xn=e|t.baseLanes}function io(){A(lr,xn),A(Pi,Pi.current)}function lo(){xn=lr.current,j(Pi),j(lr)}var Bt=T(null),Qt=null;function Hn(e){var t=e.alternate;A(Je,Je.current&1),A(Bt,e),Qt===null&&(t===null||Pi.current!==null||t.memoizedState!==null)&&(Qt=e)}function ao(e){A(Je,Je.current),A(Bt,e),Qt===null&&(Qt=e)}function Lf(e){e.tag===22?(A(Je,Je.current),A(Bt,e),Qt===null&&(Qt=e)):qn()}function qn(){A(Je,Je.current),A(Bt,Bt.current)}function Ot(e){j(Bt),Qt===e&&(Qt=null),j(Je)}var Je=T(0);function ar(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||hs(n)||ds(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vn=0,ge=null,Ne=null,$e=null,rr=!1,$i=!1,vi=!1,ur=0,Vl=0,el=null,zy=0;function Ze(){throw Error(u(321))}function ro(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function uo(e,t,n,l,o,s){return vn=s,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,O.H=e===null||e.memoizedState===null?Ah:So,vi=!1,s=n(l,o),vi=!1,$i&&(s=Hf(t,n,l,o)),jf(e),s}function jf(e){O.H=Zl;var t=Ne!==null&&Ne.next!==null;if(vn=0,$e=Ne=ge=null,rr=!1,Vl=0,el=null,t)throw Error(u(300));e===null||et||(e=e.dependencies,e!==null&&Wa(e)&&(et=!0))}function Hf(e,t,n,l){ge=e;var o=0;do{if($i&&(el=null),Vl=0,$i=!1,25<=o)throw Error(u(301));if(o+=1,$e=Ne=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}O.H=Sh,s=t(n,l)}while($i);return s}function My(){var e=O.H,t=e.useState()[0];return t=typeof t.then=="function"?Xl(t):t,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(ge.flags|=1024),t}function oo(){var e=ur!==0;return ur=0,e}function so(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function co(e){if(rr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rr=!1}vn=0,$e=Ne=ge=null,$i=!1,Vl=ur=0,el=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ge.memoizedState=$e=e:$e=$e.next=e,$e}function We(){if(Ne===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=$e===null?ge.memoizedState:$e.next;if(t!==null)$e=t,Ne=e;else{if(e===null)throw ge.alternate===null?Error(u(467)):Error(u(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},$e===null?ge.memoizedState=$e=e:$e=$e.next=e}return $e}function or(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(e){var t=Vl;return Vl+=1,el===null&&(el=[]),e=Mf(el,e,t),t=ge,($e===null?t.memoizedState:$e.next)===null&&(t=t.alternate,O.H=t===null||t.memoizedState===null?Ah:So),e}function sr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xl(e);if(e.$$typeof===N)return st(e)}throw Error(u(438,String(e)))}function fo(e){var t=null,n=ge.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ge.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=or(),ge.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=I;return t.index++,n}function wn(e,t){return typeof t=="function"?t(e):t}function cr(e){var t=We();return ho(t,Ne,e)}function ho(e,t,n){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=n;var o=e.baseQueue,s=l.pending;if(s!==null){if(o!==null){var g=o.next;o.next=s.next,s.next=g}t.baseQueue=o=s,l.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var v=g=null,E=null,M=t,U=!1;do{var Y=M.lane&-536870913;if(Y!==M.lane?(ke&Y)===Y:(vn&Y)===Y){var B=M.revertLane;if(B===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),Y===Zi&&(U=!0);else if((vn&B)===B){M=M.next,B===Zi&&(U=!0);continue}else Y={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},E===null?(v=E=Y,g=s):E=E.next=Y,ge.lanes|=B,Vn|=B;Y=M.action,vi&&n(s,Y),s=M.hasEagerState?M.eagerState:n(s,Y)}else B={lane:Y,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},E===null?(v=E=B,g=s):E=E.next=B,ge.lanes|=Y,Vn|=Y;M=M.next}while(M!==null&&M!==t);if(E===null?g=s:E.next=v,!zt(s,e.memoizedState)&&(et=!0,U&&(n=Ki,n!==null)))throw n;e.memoizedState=s,e.baseState=g,e.baseQueue=E,l.lastRenderedState=s}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function mo(e){var t=We(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var l=n.dispatch,o=n.pending,s=t.memoizedState;if(o!==null){n.pending=null;var g=o=o.next;do s=e(s,g.action),g=g.next;while(g!==o);zt(s,t.memoizedState)||(et=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,l]}function qf(e,t,n){var l=ge,o=We(),s=Ce;if(s){if(n===void 0)throw Error(u(407));n=n()}else n=t();var g=!zt((Ne||o).memoizedState,n);if(g&&(o.memoizedState=n,et=!0),o=o.queue,yo(Vf.bind(null,l,o,e),[e]),o.getSnapshot!==t||g||$e!==null&&$e.memoizedState.tag&1){if(l.flags|=2048,tl(9,{destroy:void 0},Yf.bind(null,l,o,n,t),null),He===null)throw Error(u(349));s||(vn&127)!==0||Gf(l,t,n)}return n}function Gf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t=or(),ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Yf(e,t,n,l){t.value=n,t.getSnapshot=l,Xf(t)&&Qf(e)}function Vf(e,t,n){return n(function(){Xf(t)&&Qf(e)})}function Xf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Qf(e){var t=ci(e,2);t!==null&&kt(t,e,2)}function po(e){var t=yt();if(typeof e=="function"){var n=e;if(e=n(),vi){vt(!0);try{n()}finally{vt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},t}function Zf(e,t,n,l){return e.baseState=n,ho(e,Ne,typeof l=="function"?l:wn)}function By(e,t,n,l,o){if(dr(e))throw Error(u(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){s.listeners.push(g)}};O.T!==null?n(!0):s.isTransition=!1,l(s),n=t.pending,n===null?(s.next=t.pending=s,Kf(t,s)):(s.next=n.next,t.pending=n.next=s)}}function Kf(e,t){var n=t.action,l=t.payload,o=e.state;if(t.isTransition){var s=O.T,g={};O.T=g;try{var v=n(o,l),E=O.S;E!==null&&E(g,v),Jf(e,t,v)}catch(M){go(e,t,M)}finally{s!==null&&g.types!==null&&(s.types=g.types),O.T=s}}else try{s=n(o,l),Jf(e,t,s)}catch(M){go(e,t,M)}}function Jf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Wf(e,t,l)},function(l){return go(e,t,l)}):Wf(e,t,n)}function Wf(e,t,n){t.status="fulfilled",t.value=n,Pf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Kf(e,n)))}function go(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Pf(t),t=t.next;while(t!==l)}e.action=null}function Pf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $f(e,t){return t}function eh(e,t){if(Ce){var n=He.formState;if(n!==null){e:{var l=ge;if(Ce){if(Ye){t:{for(var o=Ye,s=Xt;o.nodeType!==8;){if(!s){o=null;break t}if(o=Zt(o.nextSibling),o===null){o=null;break t}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){Ye=Zt(o.nextSibling),l=o.data==="F!";break e}}Rn(l)}l=!1}l&&(t=n[0])}}return n=yt(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$f,lastRenderedState:t},n.queue=l,n=vh.bind(null,ge,l),l.dispatch=n,l=po(!1),s=Ao.bind(null,ge,!1,l.queue),l=yt(),o={state:t,dispatch:null,action:e,pending:null},l.queue=o,n=By.bind(null,ge,o,s,n),o.dispatch=n,l.memoizedState=e,[t,n,!1]}function th(e){var t=We();return nh(t,Ne,e)}function nh(e,t,n){if(t=ho(e,t,$f)[0],e=cr(wn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Xl(t)}catch(g){throw g===Ji?er:g}else l=t;t=We();var o=t.queue,s=o.dispatch;return n!==t.memoizedState&&(ge.flags|=2048,tl(9,{destroy:void 0},Oy.bind(null,o,n),null)),[l,s,e]}function Oy(e,t){e.action=t}function ih(e){var t=We(),n=Ne;if(n!==null)return nh(t,n,e);We(),t=t.memoizedState,n=We();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function tl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ge.updateQueue,t===null&&(t=or(),ge.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function lh(){return We().memoizedState}function fr(e,t,n,l){var o=yt();ge.flags|=e,o.memoizedState=tl(1|t,{destroy:void 0},n,l===void 0?null:l)}function hr(e,t,n,l){var o=We();l=l===void 0?null:l;var s=o.memoizedState.inst;Ne!==null&&l!==null&&ro(l,Ne.memoizedState.deps)?o.memoizedState=tl(t,s,n,l):(ge.flags|=e,o.memoizedState=tl(1|t,s,n,l))}function ah(e,t){fr(8390656,8,e,t)}function yo(e,t){hr(2048,8,e,t)}function _y(e){ge.flags|=4;var t=ge.updateQueue;if(t===null)t=or(),ge.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function rh(e){var t=We().memoizedState;return _y({ref:t,nextImpl:e}),function(){if((Be&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function uh(e,t){return hr(4,2,e,t)}function oh(e,t){return hr(4,4,e,t)}function sh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ch(e,t,n){n=n!=null?n.concat([e]):null,hr(4,4,sh.bind(null,t,e),n)}function bo(){}function fh(e,t){var n=We();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&ro(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function hh(e,t){var n=We();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&ro(t,l[1]))return l[0];if(l=e(),vi){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[l,t],l}function vo(e,t,n){return n===void 0||(vn&1073741824)!==0&&(ke&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=dd(),ge.lanes|=e,Vn|=e,n)}function dh(e,t,n,l){return zt(n,t)?n:Pi.current!==null?(e=vo(e,n,l),zt(e,t)||(et=!0),e):(vn&42)===0||(vn&1073741824)!==0&&(ke&261930)===0?(et=!0,e.memoizedState=n):(e=dd(),ge.lanes|=e,Vn|=e,t)}function mh(e,t,n,l,o){var s=X.p;X.p=s!==0&&8>s?s:8;var g=O.T,v={};O.T=v,Ao(e,!1,t,n);try{var E=o(),M=O.S;if(M!==null&&M(v,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var U=Fy(E,l);Ql(e,t,U,Rt(e))}else Ql(e,t,l,Rt(e))}catch(Y){Ql(e,t,{then:function(){},status:"rejected",reason:Y},Rt())}finally{X.p=s,g!==null&&v.types!==null&&(g.types=v.types),O.T=g}}function Iy(){}function wo(e,t,n,l){if(e.tag!==5)throw Error(u(476));var o=ph(e).queue;mh(e,o,t,ae,n===null?Iy:function(){return gh(e),n(l)})}function ph(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gh(e){var t=ph(e);t.next===null&&(t=e.alternate.memoizedState),Ql(e,t.next.queue,{},Rt())}function Do(){return st(ca)}function yh(){return We().memoizedState}function bh(){return We().memoizedState}function Ry(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Rt();e=Ln(n);var l=jn(t,e,n);l!==null&&(kt(l,t,n),ql(l,t,n)),t={cache:Ku()},e.payload=t;return}t=t.return}}function Ny(e,t,n){var l=Rt();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dr(e)?wh(t,n):(n=Uu(e,t,n,l),n!==null&&(kt(n,e,l),Dh(n,t,l)))}function vh(e,t,n){var l=Rt();Ql(e,t,n,l)}function Ql(e,t,n,l){var o={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(dr(e))wh(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var g=t.lastRenderedState,v=s(g,n);if(o.hasEagerState=!0,o.eagerState=v,zt(v,g))return Qa(e,t,o,0),He===null&&Xa(),!1}catch{}finally{}if(n=Uu(e,t,o,l),n!==null)return kt(n,e,l),Dh(n,t,l),!0}return!1}function Ao(e,t,n,l){if(l={lane:2,revertLane:es(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},dr(e)){if(t)throw Error(u(479))}else t=Uu(e,n,l,2),t!==null&&kt(t,e,2)}function dr(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function wh(e,t){$i=rr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dh(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Tc(e,n)}}var Zl={readContext:st,use:sr,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useLayoutEffect:Ze,useInsertionEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useSyncExternalStore:Ze,useId:Ze,useHostTransitionStatus:Ze,useFormState:Ze,useActionState:Ze,useOptimistic:Ze,useMemoCache:Ze,useCacheRefresh:Ze};Zl.useEffectEvent=Ze;var Ah={readContext:st,use:sr,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:ah,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,fr(4194308,4,sh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fr(4194308,4,e,t)},useInsertionEffect:function(e,t){fr(4,2,e,t)},useMemo:function(e,t){var n=yt();t=t===void 0?null:t;var l=e();if(vi){vt(!0);try{e()}finally{vt(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=yt();if(n!==void 0){var o=n(t);if(vi){vt(!0);try{n(t)}finally{vt(!1)}}}else o=t;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=Ny.bind(null,ge,e),[l.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=po(e);var t=e.queue,n=vh.bind(null,ge,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bo,useDeferredValue:function(e,t){var n=yt();return vo(n,e,t)},useTransition:function(){var e=po(!1);return e=mh.bind(null,ge,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ge,o=yt();if(Ce){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),He===null)throw Error(u(349));(ke&127)!==0||Gf(l,t,n)}o.memoizedState=n;var s={value:n,getSnapshot:t};return o.queue=s,ah(Vf.bind(null,l,s,e),[e]),l.flags|=2048,tl(9,{destroy:void 0},Yf.bind(null,l,s,n,t),null),n},useId:function(){var e=yt(),t=He.identifierPrefix;if(Ce){var n=ln,l=nn;n=(l&~(1<<32-je(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ur++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zy++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Do,useFormState:eh,useActionState:eh,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ao.bind(null,ge,!0,n),n.dispatch=t,[e,t]},useMemoCache:fo,useCacheRefresh:function(){return yt().memoizedState=Ry.bind(null,ge)},useEffectEvent:function(e){var t=yt(),n={impl:e};return t.memoizedState=n,function(){if((Be&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},So={readContext:st,use:sr,useCallback:fh,useContext:st,useEffect:yo,useImperativeHandle:ch,useInsertionEffect:uh,useLayoutEffect:oh,useMemo:hh,useReducer:cr,useRef:lh,useState:function(){return cr(wn)},useDebugValue:bo,useDeferredValue:function(e,t){var n=We();return dh(n,Ne.memoizedState,e,t)},useTransition:function(){var e=cr(wn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:qf,useId:yh,useHostTransitionStatus:Do,useFormState:th,useActionState:th,useOptimistic:function(e,t){var n=We();return Zf(n,Ne,e,t)},useMemoCache:fo,useCacheRefresh:bh};So.useEffectEvent=rh;var Sh={readContext:st,use:sr,useCallback:fh,useContext:st,useEffect:yo,useImperativeHandle:ch,useInsertionEffect:uh,useLayoutEffect:oh,useMemo:hh,useReducer:mo,useRef:lh,useState:function(){return mo(wn)},useDebugValue:bo,useDeferredValue:function(e,t){var n=We();return Ne===null?vo(n,e,t):dh(n,Ne.memoizedState,e,t)},useTransition:function(){var e=mo(wn)[0],t=We().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:qf,useId:yh,useHostTransitionStatus:Do,useFormState:ih,useActionState:ih,useOptimistic:function(e,t){var n=We();return Ne!==null?Zf(n,Ne,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:fo,useCacheRefresh:bh};Sh.useEffectEvent=rh;function Eo(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var To={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=Rt(),o=Ln(l);o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,l),t!==null&&(kt(t,e,l),ql(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=Rt(),o=Ln(l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=jn(e,o,l),t!==null&&(kt(t,e,l),ql(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Rt(),l=Ln(n);l.tag=2,t!=null&&(l.callback=t),t=jn(e,l,n),t!==null&&(kt(t,e,n),ql(t,e,n))}};function Eh(e,t,n,l,o,s,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,s,g):t.prototype&&t.prototype.isPureReactComponent?!_l(n,l)||!_l(o,s):!0}function Th(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function wi(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function kh(e){Va(e)}function xh(e){console.error(e)}function Ch(e){Va(e)}function mr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Fh(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function ko(e,t,n){return n=Ln(n),n.tag=3,n.payload={element:null},n.callback=function(){mr(e,t)},n}function zh(e){return e=Ln(e),e.tag=3,e}function Mh(e,t,n,l){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var s=l.value;e.payload=function(){return o(s)},e.callback=function(){Fh(t,n,l)}}var g=n.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Fh(t,n,l),typeof o!="function"&&(Xn===null?Xn=new Set([this]):Xn.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function Uy(e,t,n,l,o){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Qi(t,n,o,!0),n=Bt.current,n!==null){switch(n.tag){case 31:case 13:return Qt===null?kr():n.alternate===null&&Ke===0&&(Ke=3),n.flags&=-257,n.flags|=65536,n.lanes=o,l===tr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Wo(e,l,o)),!1;case 22:return n.flags|=65536,l===tr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Wo(e,l,o)),!1}throw Error(u(435,n.tag))}return Wo(e,l,o),kr(),!1}if(Ce)return t=Bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,l!==Yu&&(e=Error(u(422),{cause:l}),Nl(Gt(e,n)))):(l!==Yu&&(t=Error(u(423),{cause:l}),Nl(Gt(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=Gt(l,n),o=ko(e.stateNode,l,o),to(e,o),Ke!==4&&(Ke=2)),!1;var s=Error(u(520),{cause:l});if(s=Gt(s,n),na===null?na=[s]:na.push(s),Ke!==4&&(Ke=2),t===null)return!0;l=Gt(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=ko(n.stateNode,l,e),to(n,e),!1;case 1:if(t=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Xn===null||!Xn.has(s))))return n.flags|=65536,o&=-o,n.lanes|=o,o=zh(o),Mh(o,e,n,l),to(n,o),!1}n=n.return}while(n!==null);return!1}var xo=Error(u(461)),et=!1;function ct(e,t,n,l){t.child=e===null?If(t,null,n,l):bi(t,e.child,n,l)}function Bh(e,t,n,l,o){n=n.render;var s=t.ref;if("ref"in l){var g={};for(var v in l)v!=="ref"&&(g[v]=l[v])}else g=l;return mi(t),l=uo(e,t,n,g,s,o),v=oo(),e!==null&&!et?(so(e,t,o),Dn(e,t,o)):(Ce&&v&&qu(t),t.flags|=1,ct(e,t,l,o),t.child)}function Oh(e,t,n,l,o){if(e===null){var s=n.type;return typeof s=="function"&&!Lu(s)&&s.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=s,_h(e,t,s,l,o)):(e=Ka(n.type,null,l,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Io(e,o)){var g=s.memoizedProps;if(n=n.compare,n=n!==null?n:_l,n(g,l)&&e.ref===t.ref)return Dn(e,t,o)}return t.flags|=1,e=pn(s,l),e.ref=t.ref,e.return=t,t.child=e}function _h(e,t,n,l,o){if(e!==null){var s=e.memoizedProps;if(_l(s,l)&&e.ref===t.ref)if(et=!1,t.pendingProps=l=s,Io(e,o))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,Dn(e,t,o)}return Co(e,t,n,l,o)}function Ih(e,t,n,l){var o=l.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|n:n,e!==null){for(l=t.child=e.child,o=0;l!==null;)o=o|l.lanes|l.childLanes,l=l.sibling;l=o&~s}else l=0,t.child=null;return Rh(e,t,s,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$a(t,s!==null?s.cachePool:null),s!==null?Uf(t,s):io(),Lf(t);else return l=t.lanes=536870912,Rh(e,t,s!==null?s.baseLanes|n:n,n,l)}else s!==null?($a(t,s.cachePool),Uf(t,s),qn(),t.memoizedState=null):(e!==null&&$a(t,null),io(),qn());return ct(e,t,o,n),t.child}function Kl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rh(e,t,n,l,o){var s=Wu();return s=s===null?null:{parent:Pe._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&$a(t,null),io(),Lf(t),e!==null&&Qi(e,t,l,!0),t.childLanes=o,null}function pr(e,t){return t=yr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Nh(e,t,n){return bi(t,e.child,null,n),e=pr(t,t.pendingProps),e.flags|=2,Ot(t),t.memoizedState=null,e}function Ly(e,t,n){var l=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ce){if(l.mode==="hidden")return e=pr(t,l),t.lanes=536870912,Kl(null,e);if(ao(t),(e=Ye)?(e=Kd(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_n!==null?{id:nn,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},n=wf(e),n.return=t,t.child=n,ot=t,Ye=null)):e=null,e===null)throw Rn(t);return t.lanes=536870912,null}return pr(t,l)}var s=e.memoizedState;if(s!==null){var g=s.dehydrated;if(ao(t),o)if(t.flags&256)t.flags&=-257,t=Nh(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(et||Qi(e,t,n,!1),o=(n&e.childLanes)!==0,et||o){if(l=He,l!==null&&(g=kc(l,n),g!==0&&g!==s.retryLane))throw s.retryLane=g,ci(e,g),kt(l,e,g),xo;kr(),t=Nh(e,t,n)}else e=s.treeContext,Ye=Zt(g.nextSibling),ot=t,Ce=!0,In=null,Xt=!1,e!==null&&Sf(t,e),t=pr(t,l),t.flags|=4096;return t}return e=pn(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Co(e,t,n,l,o){return mi(t),n=uo(e,t,n,l,void 0,o),l=oo(),e!==null&&!et?(so(e,t,o),Dn(e,t,o)):(Ce&&l&&qu(t),t.flags|=1,ct(e,t,n,o),t.child)}function Uh(e,t,n,l,o,s){return mi(t),t.updateQueue=null,n=Hf(t,l,n,o),jf(e),l=oo(),e!==null&&!et?(so(e,t,s),Dn(e,t,s)):(Ce&&l&&qu(t),t.flags|=1,ct(e,t,n,s),t.child)}function Lh(e,t,n,l,o){if(mi(t),t.stateNode===null){var s=Gi,g=n.contextType;typeof g=="object"&&g!==null&&(s=st(g)),s=new n(l,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=To,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=l,s.state=t.memoizedState,s.refs={},$u(t),g=n.contextType,s.context=typeof g=="object"&&g!==null?st(g):Gi,s.state=t.memoizedState,g=n.getDerivedStateFromProps,typeof g=="function"&&(Eo(t,n,g,l),s.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(g=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),g!==s.state&&To.enqueueReplaceState(s,s.state,null),Yl(t,l,s,o),Gl(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){s=t.stateNode;var v=t.memoizedProps,E=wi(n,v);s.props=E;var M=s.context,U=n.contextType;g=Gi,typeof U=="object"&&U!==null&&(g=st(U));var Y=n.getDerivedStateFromProps;U=typeof Y=="function"||typeof s.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,U||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(v||M!==g)&&Th(t,s,l,g),Un=!1;var B=t.memoizedState;s.state=B,Yl(t,l,s,o),Gl(),M=t.memoizedState,v||B!==M||Un?(typeof Y=="function"&&(Eo(t,n,Y,l),M=t.memoizedState),(E=Un||Eh(t,n,E,l,B,M,g))?(U||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=M),s.props=l,s.state=M,s.context=g,l=E):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{s=t.stateNode,eo(e,t),g=t.memoizedProps,U=wi(n,g),s.props=U,Y=t.pendingProps,B=s.context,M=n.contextType,E=Gi,typeof M=="object"&&M!==null&&(E=st(M)),v=n.getDerivedStateFromProps,(M=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(g!==Y||B!==E)&&Th(t,s,l,E),Un=!1,B=t.memoizedState,s.state=B,Yl(t,l,s,o),Gl();var _=t.memoizedState;g!==Y||B!==_||Un||e!==null&&e.dependencies!==null&&Wa(e.dependencies)?(typeof v=="function"&&(Eo(t,n,v,l),_=t.memoizedState),(U=Un||Eh(t,n,U,l,B,_,E)||e!==null&&e.dependencies!==null&&Wa(e.dependencies))?(M||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(l,_,E),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(l,_,E)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=_),s.props=l,s.state=_,s.context=E,l=U):(typeof s.componentDidUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),l=!1)}return s=l,gr(e,t),l=(t.flags&128)!==0,s||l?(s=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&l?(t.child=bi(t,e.child,null,o),t.child=bi(t,null,n,o)):ct(e,t,n,o),t.memoizedState=s.state,e=t.child):e=Dn(e,t,o),e}function jh(e,t,n,l){return hi(),t.flags|=256,ct(e,t,n,l),t.child}var Fo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zo(e){return{baseLanes:e,cachePool:Ff()}}function Mo(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=It),e}function Hh(e,t,n){var l=t.pendingProps,o=!1,s=(t.flags&128)!==0,g;if((g=s)||(g=e!==null&&e.memoizedState===null?!1:(Je.current&2)!==0),g&&(o=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ce){if(o?Hn(t):qn(),(e=Ye)?(e=Kd(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_n!==null?{id:nn,overflow:ln}:null,retryLane:536870912,hydrationErrors:null},n=wf(e),n.return=t,t.child=n,ot=t,Ye=null)):e=null,e===null)throw Rn(t);return ds(e)?t.lanes=32:t.lanes=536870912,null}var v=l.children;return l=l.fallback,o?(qn(),o=t.mode,v=yr({mode:"hidden",children:v},o),l=fi(l,o,n,null),v.return=t,l.return=t,v.sibling=l,t.child=v,l=t.child,l.memoizedState=zo(n),l.childLanes=Mo(e,g,n),t.memoizedState=Fo,Kl(null,l)):(Hn(t),Bo(t,v))}var E=e.memoizedState;if(E!==null&&(v=E.dehydrated,v!==null)){if(s)t.flags&256?(Hn(t),t.flags&=-257,t=Oo(e,t,n)):t.memoizedState!==null?(qn(),t.child=e.child,t.flags|=128,t=null):(qn(),v=l.fallback,o=t.mode,l=yr({mode:"visible",children:l.children},o),v=fi(v,o,n,null),v.flags|=2,l.return=t,v.return=t,l.sibling=v,t.child=l,bi(t,e.child,null,n),l=t.child,l.memoizedState=zo(n),l.childLanes=Mo(e,g,n),t.memoizedState=Fo,t=Kl(null,l));else if(Hn(t),ds(v)){if(g=v.nextSibling&&v.nextSibling.dataset,g)var M=g.dgst;g=M,l=Error(u(419)),l.stack="",l.digest=g,Nl({value:l,source:null,stack:null}),t=Oo(e,t,n)}else if(et||Qi(e,t,n,!1),g=(n&e.childLanes)!==0,et||g){if(g=He,g!==null&&(l=kc(g,n),l!==0&&l!==E.retryLane))throw E.retryLane=l,ci(e,l),kt(g,e,l),xo;hs(v)||kr(),t=Oo(e,t,n)}else hs(v)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,Ye=Zt(v.nextSibling),ot=t,Ce=!0,In=null,Xt=!1,e!==null&&Sf(t,e),t=Bo(t,l.children),t.flags|=4096);return t}return o?(qn(),v=l.fallback,o=t.mode,E=e.child,M=E.sibling,l=pn(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,M!==null?v=pn(M,v):(v=fi(v,o,n,null),v.flags|=2),v.return=t,l.return=t,l.sibling=v,t.child=l,Kl(null,l),l=t.child,v=e.child.memoizedState,v===null?v=zo(n):(o=v.cachePool,o!==null?(E=Pe._currentValue,o=o.parent!==E?{parent:E,pool:E}:o):o=Ff(),v={baseLanes:v.baseLanes|n,cachePool:o}),l.memoizedState=v,l.childLanes=Mo(e,g,n),t.memoizedState=Fo,Kl(e.child,l)):(Hn(t),n=e.child,e=n.sibling,n=pn(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=n,t.memoizedState=null,n)}function Bo(e,t){return t=yr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yr(e,t){return e=Mt(22,e,null,t),e.lanes=0,e}function Oo(e,t,n){return bi(t,e.child,null,n),e=Bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qh(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Qu(e.return,t,n)}function _o(e,t,n,l,o,s){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:o,treeForkCount:s}:(g.isBackwards=t,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=n,g.tailMode=o,g.treeForkCount=s)}function Gh(e,t,n){var l=t.pendingProps,o=l.revealOrder,s=l.tail;l=l.children;var g=Je.current,v=(g&2)!==0;if(v?(g=g&1|2,t.flags|=128):g&=1,A(Je,g),ct(e,t,l,n),l=Ce?Rl:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qh(e,n,t);else if(e.tag===19)qh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ar(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),_o(t,!1,o,n,s,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ar(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}_o(t,!0,n,null,s,l);break;case"together":_o(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Qi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Io(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wa(e)))}function jy(e,t,n){switch(t.tag){case 3:Xe(t,t.stateNode.containerInfo),Nn(t,Pe,e.memoizedState.cache),hi();break;case 27:case 5:Lt(t);break;case 4:Xe(t,t.stateNode.containerInfo);break;case 10:Nn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ao(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Hn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Hh(e,t,n):(Hn(t),e=Dn(e,t,n),e!==null?e.sibling:null);Hn(t);break;case 19:var o=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Qi(e,t,n,!1),l=(n&t.childLanes)!==0),o){if(l)return Gh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),A(Je,Je.current),l)break;return null;case 22:return t.lanes=0,Ih(e,t,n,t.pendingProps);case 24:Nn(t,Pe,e.memoizedState.cache)}return Dn(e,t,n)}function Yh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!Io(e,n)&&(t.flags&128)===0)return et=!1,jy(e,t,n);et=(e.flags&131072)!==0}else et=!1,Ce&&(t.flags&1048576)!==0&&Af(t,Rl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=gi(t.elementType),t.type=e,typeof e=="function")Lu(e)?(l=wi(e,l),t.tag=1,t=Lh(null,t,e,l,n)):(t.tag=0,t=Co(null,t,e,l,n));else{if(e!=null){var o=e.$$typeof;if(o===P){t.tag=11,t=Bh(null,t,e,l,n);break e}else if(o===Z){t.tag=14,t=Oh(null,t,e,l,n);break e}}throw t=ie(e)||e,Error(u(306,t,""))}}return t;case 0:return Co(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,o=wi(l,t.pendingProps),Lh(e,t,l,o,n);case 3:e:{if(Xe(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var s=t.memoizedState;o=s.element,eo(e,t),Yl(t,l,null,n);var g=t.memoizedState;if(l=g.cache,Nn(t,Pe,l),l!==s.cache&&Zu(t,[Pe],n,!0),Gl(),l=g.element,s.isDehydrated)if(s={element:l,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=jh(e,t,l,n);break e}else if(l!==o){o=Gt(Error(u(424)),t),Nl(o),t=jh(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=Zt(e.firstChild),ot=t,Ce=!0,In=null,Xt=!0,n=If(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(hi(),l===o){t=Dn(e,t,n);break e}ct(e,t,l,n)}t=t.child}return t;case 26:return gr(e,t),e===null?(n=tm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ce||(n=t.type,e=t.pendingProps,l=Or(ue.current).createElement(n),l[ut]=t,l[wt]=e,ft(l,n,e),at(l),t.stateNode=l):t.memoizedState=tm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Lt(t),e===null&&Ce&&(l=t.stateNode=Pd(t.type,t.pendingProps,ue.current),ot=t,Xt=!0,o=Ye,Jn(t.type)?(ms=o,Ye=Zt(l.firstChild)):Ye=o),ct(e,t,t.pendingProps.children,n),gr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ce&&((o=l=Ye)&&(l=g0(l,t.type,t.pendingProps,Xt),l!==null?(t.stateNode=l,ot=t,Ye=Zt(l.firstChild),Xt=!1,o=!0):o=!1),o||Rn(t)),Lt(t),o=t.type,s=t.pendingProps,g=e!==null?e.memoizedProps:null,l=s.children,ss(o,s)?l=null:g!==null&&ss(o,g)&&(t.flags|=32),t.memoizedState!==null&&(o=uo(e,t,My,null,null,n),ca._currentValue=o),gr(e,t),ct(e,t,l,n),t.child;case 6:return e===null&&Ce&&((e=n=Ye)&&(n=y0(n,t.pendingProps,Xt),n!==null?(t.stateNode=n,ot=t,Ye=null,e=!0):e=!1),e||Rn(t)),null;case 13:return Hh(e,t,n);case 4:return Xe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=bi(t,null,l,n):ct(e,t,l,n),t.child;case 11:return Bh(e,t,t.type,t.pendingProps,n);case 7:return ct(e,t,t.pendingProps,n),t.child;case 8:return ct(e,t,t.pendingProps.children,n),t.child;case 12:return ct(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Nn(t,t.type,l.value),ct(e,t,l.children,n),t.child;case 9:return o=t.type._context,l=t.pendingProps.children,mi(t),o=st(o),l=l(o),t.flags|=1,ct(e,t,l,n),t.child;case 14:return Oh(e,t,t.type,t.pendingProps,n);case 15:return _h(e,t,t.type,t.pendingProps,n);case 19:return Gh(e,t,n);case 31:return Ly(e,t,n);case 22:return Ih(e,t,n,t.pendingProps);case 24:return mi(t),l=st(Pe),e===null?(o=Wu(),o===null&&(o=He,s=Ku(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=n),o=s),t.memoizedState={parent:l,cache:o},$u(t),Nn(t,Pe,o)):((e.lanes&n)!==0&&(eo(e,t),Yl(t,null,null,n),Gl()),o=e.memoizedState,s=t.memoizedState,o.parent!==l?(o={parent:l,cache:l},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Nn(t,Pe,l)):(l=s.cache,Nn(t,Pe,l),l!==o.cache&&Zu(t,[Pe],n,!0))),ct(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function An(e){e.flags|=4}function Ro(e,t,n,l,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(yd())e.flags|=8192;else throw yi=tr,Pu}else e.flags&=-16777217}function Vh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rm(t))if(yd())e.flags|=8192;else throw yi=tr,Pu}function br(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Sc():536870912,e.lanes|=t,al|=t)}function Jl(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Hy(e,t,n){var l=t.pendingProps;switch(Gu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),bn(Pe),Re(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?An(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Vu())),Ve(t),null;case 26:var o=t.type,s=t.memoizedState;return e===null?(An(t),s!==null?(Ve(t),Vh(t,s)):(Ve(t),Ro(t,o,null,l,n))):s?s!==e.memoizedState?(An(t),Ve(t),Vh(t,s)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&An(t),Ve(t),Ro(t,o,e,l,n)),null;case 27:if(sn(t),n=ue.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&An(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}e=W.current,Xi(t)?Ef(t):(e=Pd(o,l,n),t.stateNode=e,An(t))}return Ve(t),null;case 5:if(sn(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&An(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Ve(t),null}if(s=W.current,Xi(t))Ef(t);else{var g=Or(ue.current);switch(s){case 1:s=g.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=g.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=g.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=g.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=g.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof l.is=="string"?g.createElement("select",{is:l.is}):g.createElement("select"),l.multiple?s.multiple=!0:l.size&&(s.size=l.size);break;default:s=typeof l.is=="string"?g.createElement(o,{is:l.is}):g.createElement(o)}}s[ut]=t,s[wt]=l;e:for(g=t.child;g!==null;){if(g.tag===5||g.tag===6)s.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}t.stateNode=s;e:switch(ft(s,o,l),o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&An(t)}}return Ve(t),Ro(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&An(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ue.current,Xi(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,o=ot,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[ut]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Hd(e.nodeValue,n)),e||Rn(t,!0)}else e=Or(e).createTextNode(l),e[ut]=t,t.stateNode=e}return Ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Xi(t),n!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[ut]=t}else hi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else n=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ot(t),t):(Ot(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ve(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Xi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(u(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(u(317));o[ut]=t}else hi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),o=!1}else o=Vu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Ot(t),t):(Ot(t),null)}return Ot(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool),s=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(s=l.memoizedState.cachePool.pool),s!==o&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),br(t,t.updateQueue),Ve(t),null);case 4:return Re(),e===null&&ls(t.stateNode.containerInfo),Ve(t),null;case 10:return bn(t.type),Ve(t),null;case 19:if(j(Je),l=t.memoizedState,l===null)return Ve(t),null;if(o=(t.flags&128)!==0,s=l.rendering,s===null)if(o)Jl(l,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ar(e),s!==null){for(t.flags|=128,Jl(l,!1),e=s.updateQueue,t.updateQueue=e,br(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vf(n,e),n=n.sibling;return A(Je,Je.current&1|2),Ce&&gn(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&pt()>Sr&&(t.flags|=128,o=!0,Jl(l,!1),t.lanes=4194304)}else{if(!o)if(e=ar(s),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,br(t,e),Jl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!Ce)return Ve(t),null}else 2*pt()-l.renderingStartTime>Sr&&n!==536870912&&(t.flags|=128,o=!0,Jl(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(e=l.last,e!==null?e.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=pt(),e.sibling=null,n=Je.current,A(Je,o?n&1|2:n&1),Ce&&gn(t,l.treeForkCount),e):(Ve(t),null);case 22:case 23:return Ot(t),lo(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),n=t.updateQueue,n!==null&&br(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&j(pi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),bn(Pe),Ve(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function qy(e,t){switch(Gu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return bn(Pe),Re(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return sn(t),null;case 31:if(t.memoizedState!==null){if(Ot(t),t.alternate===null)throw Error(u(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ot(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));hi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(Je),null;case 4:return Re(),null;case 10:return bn(t.type),null;case 22:case 23:return Ot(t),lo(),e!==null&&j(pi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return bn(Pe),null;case 25:return null;default:return null}}function Xh(e,t){switch(Gu(t),t.tag){case 3:bn(Pe),Re();break;case 26:case 27:case 5:sn(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&Ot(t);break;case 13:Ot(t);break;case 19:j(Je);break;case 10:bn(t.type);break;case 22:case 23:Ot(t),lo(),e!==null&&j(pi);break;case 24:bn(Pe)}}function Wl(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){l=void 0;var s=n.create,g=n.inst;l=s(),g.destroy=l}n=n.next}while(n!==o)}}catch(v){Ie(t,t.return,v)}}function Gn(e,t,n){try{var l=t.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var s=o.next;l=s;do{if((l.tag&e)===e){var g=l.inst,v=g.destroy;if(v!==void 0){g.destroy=void 0,o=t;var E=n,M=v;try{M()}catch(U){Ie(o,E,U)}}}l=l.next}while(l!==s)}}catch(U){Ie(t,t.return,U)}}function Qh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Nf(t,n)}catch(l){Ie(e,e.return,l)}}}function Zh(e,t,n){n.props=wi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Ie(e,t,l)}}function Pl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(o){Ie(e,t,o)}}function an(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(o){Ie(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Ie(e,t,o)}else n.current=null}function Kh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(o){Ie(e,e.return,o)}}function No(e,t,n){try{var l=e.stateNode;c0(l,e.type,n,t),l[wt]=t}catch(o){Ie(e,e.return,o)}}function Jh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Jn(e.type)||e.tag===4}function Uo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Jn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lo(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn));else if(l!==4&&(l===27&&Jn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Lo(e,t,n),e=e.sibling;e!==null;)Lo(e,t,n),e=e.sibling}function vr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Jn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(vr(e,t,n),e=e.sibling;e!==null;)vr(e,t,n),e=e.sibling}function Wh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ft(t,l,n),t[ut]=e,t[wt]=n}catch(s){Ie(e,e.return,s)}}var Sn=!1,tt=!1,jo=!1,Ph=typeof WeakSet=="function"?WeakSet:Set,rt=null;function Gy(e,t){if(e=e.containerInfo,us=jr,e=cf(e),Bu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var o=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var g=0,v=-1,E=-1,M=0,U=0,Y=e,B=null;t:for(;;){for(var _;Y!==n||o!==0&&Y.nodeType!==3||(v=g+o),Y!==s||l!==0&&Y.nodeType!==3||(E=g+l),Y.nodeType===3&&(g+=Y.nodeValue.length),(_=Y.firstChild)!==null;)B=Y,Y=_;for(;;){if(Y===e)break t;if(B===n&&++M===o&&(v=g),B===s&&++U===l&&(E=g),(_=Y.nextSibling)!==null)break;Y=B,B=Y.parentNode}Y=_}n=v===-1||E===-1?null:{start:v,end:E}}else n=null}n=n||{start:0,end:0}}else n=null;for(os={focusedElem:e,selectionRange:n},jr=!1,rt=t;rt!==null;)if(t=rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,rt=e;else for(;rt!==null;){switch(t=rt,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,n=t,o=s.memoizedProps,s=s.memoizedState,l=n.stateNode;try{var ne=wi(n.type,o);e=l.getSnapshotBeforeUpdate(ne,s),l.__reactInternalSnapshotBeforeUpdate=e}catch(fe){Ie(n,n.return,fe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)fs(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fs(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,rt=e;break}rt=t.return}}function $h(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Tn(e,n),l&4&&Wl(5,n);break;case 1:if(Tn(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(g){Ie(n,n.return,g)}else{var o=wi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Ie(n,n.return,g)}}l&64&&Qh(n),l&512&&Pl(n,n.return);break;case 3:if(Tn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Nf(e,t)}catch(g){Ie(n,n.return,g)}}break;case 27:t===null&&l&4&&Wh(n);case 26:case 5:Tn(e,n),t===null&&l&4&&Kh(n),l&512&&Pl(n,n.return);break;case 12:Tn(e,n);break;case 31:Tn(e,n),l&4&&nd(e,n);break;case 13:Tn(e,n),l&4&&id(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Py.bind(null,n),b0(e,n))));break;case 22:if(l=n.memoizedState!==null||Sn,!l){t=t!==null&&t.memoizedState!==null||tt,o=Sn;var s=tt;Sn=l,(tt=t)&&!s?kn(e,n,(n.subtreeFlags&8772)!==0):Tn(e,n),Sn=o,tt=s}break;case 30:break;default:Tn(e,n)}}function ed(e){var t=e.alternate;t!==null&&(e.alternate=null,ed(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,At=!1;function En(e,t,n){for(n=n.child;n!==null;)td(e,t,n),n=n.sibling}function td(e,t,n){if(it&&typeof it.onCommitFiberUnmount=="function")try{it.onCommitFiberUnmount(gt,n)}catch{}switch(n.tag){case 26:tt||an(n,t),En(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tt||an(n,t);var l=Qe,o=At;Jn(n.type)&&(Qe=n.stateNode,At=!1),En(e,t,n),ua(n.stateNode),Qe=l,At=o;break;case 5:tt||an(n,t);case 6:if(l=Qe,o=At,Qe=null,En(e,t,n),Qe=l,At=o,Qe!==null)if(At)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(n.stateNode)}catch(s){Ie(n,t,s)}else try{Qe.removeChild(n.stateNode)}catch(s){Ie(n,t,s)}break;case 18:Qe!==null&&(At?(e=Qe,Qd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),dl(e)):Qd(Qe,n.stateNode));break;case 4:l=Qe,o=At,Qe=n.stateNode.containerInfo,At=!0,En(e,t,n),Qe=l,At=o;break;case 0:case 11:case 14:case 15:Gn(2,n,t),tt||Gn(4,n,t),En(e,t,n);break;case 1:tt||(an(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Zh(n,t,l)),En(e,t,n);break;case 21:En(e,t,n);break;case 22:tt=(l=tt)||n.memoizedState!==null,En(e,t,n),tt=l;break;default:En(e,t,n)}}function nd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{dl(e)}catch(n){Ie(t,t.return,n)}}}function id(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{dl(e)}catch(n){Ie(t,t.return,n)}}function Yy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Ph),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Ph),t;default:throw Error(u(435,e.tag))}}function wr(e,t){var n=Yy(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var o=$y.bind(null,e,l);l.then(o,o)}})}function St(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var o=n[l],s=e,g=t,v=g;e:for(;v!==null;){switch(v.tag){case 27:if(Jn(v.type)){Qe=v.stateNode,At=!1;break e}break;case 5:Qe=v.stateNode,At=!1;break e;case 3:case 4:Qe=v.stateNode.containerInfo,At=!0;break e}v=v.return}if(Qe===null)throw Error(u(160));td(s,g,o),Qe=null,At=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}var $t=null;function ld(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:St(t,e),Et(e),l&4&&(Gn(3,e,e.return),Wl(3,e),Gn(5,e,e.return));break;case 1:St(t,e),Et(e),l&512&&(tt||n===null||an(n,n.return)),l&64&&Sn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var o=$t;if(St(t,e),Et(e),l&512&&(tt||n===null||an(n,n.return)),l&4){var s=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(l){case"title":s=o.getElementsByTagName("title")[0],(!s||s[Tl]||s[ut]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(l),o.head.insertBefore(s,o.querySelector("head > title"))),ft(s,l,n),s[ut]=e,at(s),l=s;break e;case"link":var g=lm("link","href",o).get(l+(n.href||""));if(g){for(var v=0;v<g.length;v++)if(s=g[v],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){g.splice(v,1);break t}}s=o.createElement(l),ft(s,l,n),o.head.appendChild(s);break;case"meta":if(g=lm("meta","content",o).get(l+(n.content||""))){for(v=0;v<g.length;v++)if(s=g[v],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){g.splice(v,1);break t}}s=o.createElement(l),ft(s,l,n),o.head.appendChild(s);break;default:throw Error(u(468,l))}s[ut]=e,at(s),l=s}e.stateNode=l}else am(o,e.type,e.stateNode);else e.stateNode=im(o,l,e.memoizedProps);else s!==l?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,l===null?am(o,e.type,e.stateNode):im(o,l,e.memoizedProps)):l===null&&e.stateNode!==null&&No(e,e.memoizedProps,n.memoizedProps)}break;case 27:St(t,e),Et(e),l&512&&(tt||n===null||an(n,n.return)),n!==null&&l&4&&No(e,e.memoizedProps,n.memoizedProps);break;case 5:if(St(t,e),Et(e),l&512&&(tt||n===null||an(n,n.return)),e.flags&32){o=e.stateNode;try{Ri(o,"")}catch(ne){Ie(e,e.return,ne)}}l&4&&e.stateNode!=null&&(o=e.memoizedProps,No(e,o,n!==null?n.memoizedProps:o)),l&1024&&(jo=!0);break;case 6:if(St(t,e),Et(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ne){Ie(e,e.return,ne)}}break;case 3:if(Rr=null,o=$t,$t=_r(t.containerInfo),St(t,e),$t=o,Et(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{dl(t.containerInfo)}catch(ne){Ie(e,e.return,ne)}jo&&(jo=!1,ad(e));break;case 4:l=$t,$t=_r(e.stateNode.containerInfo),St(t,e),Et(e),$t=l;break;case 12:St(t,e),Et(e);break;case 31:St(t,e),Et(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wr(e,l)));break;case 13:St(t,e),Et(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ar=pt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wr(e,l)));break;case 22:o=e.memoizedState!==null;var E=n!==null&&n.memoizedState!==null,M=Sn,U=tt;if(Sn=M||o,tt=U||E,St(t,e),tt=U,Sn=M,Et(e),l&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||E||Sn||tt||Di(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){E=n=t;try{if(s=E.stateNode,o)g=s.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{v=E.stateNode;var Y=E.memoizedProps.style,B=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;v.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ne){Ie(E,E.return,ne)}}}else if(t.tag===6){if(n===null){E=t;try{E.stateNode.nodeValue=o?"":E.memoizedProps}catch(ne){Ie(E,E.return,ne)}}}else if(t.tag===18){if(n===null){E=t;try{var _=E.stateNode;o?Zd(_,!0):Zd(E.stateNode,!1)}catch(ne){Ie(E,E.return,ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,wr(e,n))));break;case 19:St(t,e),Et(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,wr(e,l)));break;case 30:break;case 21:break;default:St(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Jh(l)){n=l;break}l=l.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var o=n.stateNode,s=Uo(e);vr(e,s,o);break;case 5:var g=n.stateNode;n.flags&32&&(Ri(g,""),n.flags&=-33);var v=Uo(e);vr(e,v,g);break;case 3:case 4:var E=n.stateNode.containerInfo,M=Uo(e);Lo(e,M,E);break;default:throw Error(u(161))}}catch(U){Ie(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ad(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ad(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$h(e,t.alternate,t),t=t.sibling}function Di(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gn(4,t,t.return),Di(t);break;case 1:an(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Zh(t,t.return,n),Di(t);break;case 27:ua(t.stateNode);case 26:case 5:an(t,t.return),Di(t);break;case 22:t.memoizedState===null&&Di(t);break;case 30:Di(t);break;default:Di(t)}e=e.sibling}}function kn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,o=e,s=t,g=s.flags;switch(s.tag){case 0:case 11:case 15:kn(o,s,n),Wl(4,s);break;case 1:if(kn(o,s,n),l=s,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(M){Ie(l,l.return,M)}if(l=s,o=l.updateQueue,o!==null){var v=l.stateNode;try{var E=o.shared.hiddenCallbacks;if(E!==null)for(o.shared.hiddenCallbacks=null,o=0;o<E.length;o++)Rf(E[o],v)}catch(M){Ie(l,l.return,M)}}n&&g&64&&Qh(s),Pl(s,s.return);break;case 27:Wh(s);case 26:case 5:kn(o,s,n),n&&l===null&&g&4&&Kh(s),Pl(s,s.return);break;case 12:kn(o,s,n);break;case 31:kn(o,s,n),n&&g&4&&nd(o,s);break;case 13:kn(o,s,n),n&&g&4&&id(o,s);break;case 22:s.memoizedState===null&&kn(o,s,n),Pl(s,s.return);break;case 30:break;default:kn(o,s,n)}t=t.sibling}}function Ho(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ul(n))}function qo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e))}function en(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rd(e,t,n,l),t=t.sibling}function rd(e,t,n,l){var o=t.flags;switch(t.tag){case 0:case 11:case 15:en(e,t,n,l),o&2048&&Wl(9,t);break;case 1:en(e,t,n,l);break;case 3:en(e,t,n,l),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ul(e)));break;case 12:if(o&2048){en(e,t,n,l),e=t.stateNode;try{var s=t.memoizedProps,g=s.id,v=s.onPostCommit;typeof v=="function"&&v(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Ie(t,t.return,E)}}else en(e,t,n,l);break;case 31:en(e,t,n,l);break;case 13:en(e,t,n,l);break;case 23:break;case 22:s=t.stateNode,g=t.alternate,t.memoizedState!==null?s._visibility&2?en(e,t,n,l):$l(e,t):s._visibility&2?en(e,t,n,l):(s._visibility|=2,nl(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),o&2048&&Ho(g,t);break;case 24:en(e,t,n,l),o&2048&&qo(t.alternate,t);break;default:en(e,t,n,l)}}function nl(e,t,n,l,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,g=t,v=n,E=l,M=g.flags;switch(g.tag){case 0:case 11:case 15:nl(s,g,v,E,o),Wl(8,g);break;case 23:break;case 22:var U=g.stateNode;g.memoizedState!==null?U._visibility&2?nl(s,g,v,E,o):$l(s,g):(U._visibility|=2,nl(s,g,v,E,o)),o&&M&2048&&Ho(g.alternate,g);break;case 24:nl(s,g,v,E,o),o&&M&2048&&qo(g.alternate,g);break;default:nl(s,g,v,E,o)}t=t.sibling}}function $l(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,o=l.flags;switch(l.tag){case 22:$l(n,l),o&2048&&Ho(l.alternate,l);break;case 24:$l(n,l),o&2048&&qo(l.alternate,l);break;default:$l(n,l)}t=t.sibling}}var ea=8192;function il(e,t,n){if(e.subtreeFlags&ea)for(e=e.child;e!==null;)ud(e,t,n),e=e.sibling}function ud(e,t,n){switch(e.tag){case 26:il(e,t,n),e.flags&ea&&e.memoizedState!==null&&z0(n,$t,e.memoizedState,e.memoizedProps);break;case 5:il(e,t,n);break;case 3:case 4:var l=$t;$t=_r(e.stateNode.containerInfo),il(e,t,n),$t=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ea,ea=16777216,il(e,t,n),ea=l):il(e,t,n));break;default:il(e,t,n)}}function od(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ta(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];rt=l,cd(l,e)}od(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sd(e),e=e.sibling}function sd(e){switch(e.tag){case 0:case 11:case 15:ta(e),e.flags&2048&&Gn(9,e,e.return);break;case 3:ta(e);break;case 12:ta(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Dr(e)):ta(e);break;default:ta(e)}}function Dr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];rt=l,cd(l,e)}od(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gn(8,t,t.return),Dr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Dr(t));break;default:Dr(t)}e=e.sibling}}function cd(e,t){for(;rt!==null;){var n=rt;switch(n.tag){case 0:case 11:case 15:Gn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ul(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,rt=l;else e:for(n=e;rt!==null;){l=rt;var o=l.sibling,s=l.return;if(ed(l),l===n){rt=null;break e}if(o!==null){o.return=s,rt=o;break e}rt=s}}}var Vy={getCacheForType:function(e){var t=st(Pe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return st(Pe).controller.signal}},Xy=typeof WeakMap=="function"?WeakMap:Map,Be=0,He=null,Ae=null,ke=0,_e=0,_t=null,Yn=!1,ll=!1,Go=!1,xn=0,Ke=0,Vn=0,Ai=0,Yo=0,It=0,al=0,na=null,Tt=null,Vo=!1,Ar=0,fd=0,Sr=1/0,Er=null,Xn=null,lt=0,Qn=null,rl=null,Cn=0,Xo=0,Qo=null,hd=null,ia=0,Zo=null;function Rt(){return(Be&2)!==0&&ke!==0?ke&-ke:O.T!==null?es():xc()}function dd(){if(It===0)if((ke&536870912)===0||Ce){var e=Ba;Ba<<=1,(Ba&3932160)===0&&(Ba=262144),It=e}else It=536870912;return e=Bt.current,e!==null&&(e.flags|=32),It}function kt(e,t,n){(e===He&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(ul(e,0),Zn(e,ke,It,!1)),El(e,n),((Be&2)===0||e!==He)&&(e===He&&((Be&2)===0&&(Ai|=n),Ke===4&&Zn(e,ke,It,!1)),rn(e))}function md(e,t,n){if((Be&6)!==0)throw Error(u(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Sl(e,t),o=l?Ky(e,t):Jo(e,t,!0),s=l;do{if(o===0){ll&&!l&&Zn(e,t,0,!1);break}else{if(n=e.current.alternate,s&&!Qy(n)){o=Jo(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var v=e;o=na;var E=v.current.memoizedState.isDehydrated;if(E&&(ul(v,g).flags|=256),g=Jo(v,g,!1),g!==2){if(Go&&!E){v.errorRecoveryDisabledLanes|=s,Ai|=s,o=4;break e}s=Tt,Tt=o,s!==null&&(Tt===null?Tt=s:Tt.push.apply(Tt,s))}o=g}if(s=!1,o!==2)continue}}if(o===1){ul(e,0),Zn(e,t,0,!0);break}e:{switch(l=e,s=o,s){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Zn(l,t,It,!Yn);break e;case 2:Tt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(o=Ar+300-pt(),10<o)){if(Zn(l,t,It,!Yn),_a(l,0,!0)!==0)break e;Cn=t,l.timeoutHandle=Vd(pd.bind(null,l,n,Tt,Er,Vo,t,It,Ai,al,Yn,s,"Throttled",-0,0),o);break e}pd(l,n,Tt,Er,Vo,t,It,Ai,al,Yn,s,null,-0,0)}}break}while(!0);rn(e)}function pd(e,t,n,l,o,s,g,v,E,M,U,Y,B,_){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},ud(t,s,Y);var ne=(s&62914560)===s?Ar-pt():(s&4194048)===s?fd-pt():0;if(ne=M0(Y,ne),ne!==null){Cn=s,e.cancelPendingCommit=ne(Sd.bind(null,e,t,s,n,l,o,g,v,E,U,Y,null,B,_)),Zn(e,s,g,!M);return}}Sd(e,t,s,n,l,o,g,v,E)}function Qy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var o=n[l],s=o.getSnapshot;o=o.value;try{if(!zt(s(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zn(e,t,n,l){t&=~Yo,t&=~Ai,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var o=t;0<o;){var s=31-je(o),g=1<<s;l[s]=-1,o&=~g}n!==0&&Ec(e,n,t)}function Tr(){return(Be&6)===0?(la(0),!1):!0}function Ko(){if(Ae!==null){if(_e===0)var e=Ae.return;else e=Ae,yn=di=null,co(e),Wi=null,jl=0,e=Ae;for(;e!==null;)Xh(e.alternate,e),e=e.return;Ae=null}}function ul(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,d0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Cn=0,Ko(),He=e,Ae=n=pn(e.current,null),ke=t,_e=0,_t=null,Yn=!1,ll=Sl(e,t),Go=!1,al=It=Yo=Ai=Vn=Ke=0,Tt=na=null,Vo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var o=31-je(l),s=1<<o;t|=e[o],l&=~s}return xn=t,Xa(),n}function gd(e,t){ge=null,O.H=Zl,t===Ji||t===er?(t=Bf(),_e=3):t===Pu?(t=Bf(),_e=4):_e=t===xo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,Ae===null&&(Ke=1,mr(e,Gt(t,e.current)))}function yd(){var e=Bt.current;return e===null?!0:(ke&4194048)===ke?Qt===null:(ke&62914560)===ke||(ke&536870912)!==0?e===Qt:!1}function bd(){var e=O.H;return O.H=Zl,e===null?Zl:e}function vd(){var e=O.A;return O.A=Vy,e}function kr(){Ke=4,Yn||(ke&4194048)!==ke&&Bt.current!==null||(ll=!0),(Vn&134217727)===0&&(Ai&134217727)===0||He===null||Zn(He,ke,It,!1)}function Jo(e,t,n){var l=Be;Be|=2;var o=bd(),s=vd();(He!==e||ke!==t)&&(Er=null,ul(e,t)),t=!1;var g=Ke;e:do try{if(_e!==0&&Ae!==null){var v=Ae,E=_t;switch(_e){case 8:Ko(),g=6;break e;case 3:case 2:case 9:case 6:Bt.current===null&&(t=!0);var M=_e;if(_e=0,_t=null,ol(e,v,E,M),n&&ll){g=0;break e}break;default:M=_e,_e=0,_t=null,ol(e,v,E,M)}}Zy(),g=Ke;break}catch(U){gd(e,U)}while(!0);return t&&e.shellSuspendCounter++,yn=di=null,Be=l,O.H=o,O.A=s,Ae===null&&(He=null,ke=0,Xa()),g}function Zy(){for(;Ae!==null;)wd(Ae)}function Ky(e,t){var n=Be;Be|=2;var l=bd(),o=vd();He!==e||ke!==t?(Er=null,Sr=pt()+500,ul(e,t)):ll=Sl(e,t);e:do try{if(_e!==0&&Ae!==null){t=Ae;var s=_t;t:switch(_e){case 1:_e=0,_t=null,ol(e,t,s,1);break;case 2:case 9:if(zf(s)){_e=0,_t=null,Dd(t);break}t=function(){_e!==2&&_e!==9||He!==e||(_e=7),rn(e)},s.then(t,t);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:zf(s)?(_e=0,_t=null,Dd(t)):(_e=0,_t=null,ol(e,t,s,7));break;case 5:var g=null;switch(Ae.tag){case 26:g=Ae.memoizedState;case 5:case 27:var v=Ae;if(g?rm(g):v.stateNode.complete){_e=0,_t=null;var E=v.sibling;if(E!==null)Ae=E;else{var M=v.return;M!==null?(Ae=M,xr(M)):Ae=null}break t}}_e=0,_t=null,ol(e,t,s,5);break;case 6:_e=0,_t=null,ol(e,t,s,6);break;case 8:Ko(),Ke=6;break e;default:throw Error(u(462))}}Jy();break}catch(U){gd(e,U)}while(!0);return yn=di=null,O.H=l,O.A=o,Be=n,Ae!==null?0:(He=null,ke=0,Xa(),Ke)}function Jy(){for(;Ae!==null&&!ou();)wd(Ae)}function wd(e){var t=Yh(e.alternate,e,xn);e.memoizedProps=e.pendingProps,t===null?xr(e):Ae=t}function Dd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Uh(n,t,t.pendingProps,t.type,void 0,ke);break;case 11:t=Uh(n,t,t.pendingProps,t.type.render,t.ref,ke);break;case 5:co(t);default:Xh(n,t),t=Ae=vf(t,xn),t=Yh(n,t,xn)}e.memoizedProps=e.pendingProps,t===null?xr(e):Ae=t}function ol(e,t,n,l){yn=di=null,co(t),Wi=null,jl=0;var o=t.return;try{if(Uy(e,o,t,n,ke)){Ke=1,mr(e,Gt(n,e.current)),Ae=null;return}}catch(s){if(o!==null)throw Ae=o,s;Ke=1,mr(e,Gt(n,e.current)),Ae=null;return}t.flags&32768?(Ce||l===1?e=!0:ll||(ke&536870912)!==0?e=!1:(Yn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Bt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Ad(t,e)):xr(t)}function xr(e){var t=e;do{if((t.flags&32768)!==0){Ad(t,Yn);return}e=t.return;var n=Hy(t.alternate,t,xn);if(n!==null){Ae=n;return}if(t=t.sibling,t!==null){Ae=t;return}Ae=t=e}while(t!==null);Ke===0&&(Ke=5)}function Ad(e,t){do{var n=qy(e.alternate,e);if(n!==null){n.flags&=32767,Ae=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ae=e;return}Ae=e=n}while(e!==null);Ke=6,Ae=null}function Sd(e,t,n,l,o,s,g,v,E){e.cancelPendingCommit=null;do Cr();while(lt!==0);if((Be&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(s=t.lanes|t.childLanes,s|=Nu,Fg(e,n,s,g,v,E),e===He&&(Ae=He=null,ke=0),rl=t,Qn=e,Cn=n,Xo=s,Qo=o,hd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,e0(de,function(){return Cd(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=O.T,O.T=null,o=X.p,X.p=2,g=Be,Be|=4;try{Gy(e,t,n)}finally{Be=g,X.p=o,O.T=l}}lt=1,Ed(),Td(),kd()}}function Ed(){if(lt===1){lt=0;var e=Qn,t=rl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=O.T,O.T=null;var l=X.p;X.p=2;var o=Be;Be|=4;try{ld(t,e);var s=os,g=cf(e.containerInfo),v=s.focusedElem,E=s.selectionRange;if(g!==v&&v&&v.ownerDocument&&sf(v.ownerDocument.documentElement,v)){if(E!==null&&Bu(v)){var M=E.start,U=E.end;if(U===void 0&&(U=M),"selectionStart"in v)v.selectionStart=M,v.selectionEnd=Math.min(U,v.value.length);else{var Y=v.ownerDocument||document,B=Y&&Y.defaultView||window;if(B.getSelection){var _=B.getSelection(),ne=v.textContent.length,fe=Math.min(E.start,ne),Le=E.end===void 0?fe:Math.min(E.end,ne);!_.extend&&fe>Le&&(g=Le,Le=fe,fe=g);var F=of(v,fe),k=of(v,Le);if(F&&k&&(_.rangeCount!==1||_.anchorNode!==F.node||_.anchorOffset!==F.offset||_.focusNode!==k.node||_.focusOffset!==k.offset)){var z=Y.createRange();z.setStart(F.node,F.offset),_.removeAllRanges(),fe>Le?(_.addRange(z),_.extend(k.node,k.offset)):(z.setEnd(k.node,k.offset),_.addRange(z))}}}}for(Y=[],_=v;_=_.parentNode;)_.nodeType===1&&Y.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<Y.length;v++){var G=Y[v];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}jr=!!us,os=us=null}finally{Be=o,X.p=l,O.T=n}}e.current=t,lt=2}}function Td(){if(lt===2){lt=0;var e=Qn,t=rl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=O.T,O.T=null;var l=X.p;X.p=2;var o=Be;Be|=4;try{$h(e,t.alternate,t)}finally{Be=o,X.p=l,O.T=n}}lt=3}}function kd(){if(lt===4||lt===3){lt=0,su();var e=Qn,t=rl,n=Cn,l=hd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?lt=5:(lt=0,rl=Qn=null,xd(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Xn=null),du(n),t=t.stateNode,it&&typeof it.onCommitFiberRoot=="function")try{it.onCommitFiberRoot(gt,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=O.T,o=X.p,X.p=2,O.T=null;try{for(var s=e.onRecoverableError,g=0;g<l.length;g++){var v=l[g];s(v.value,{componentStack:v.stack})}}finally{O.T=t,X.p=o}}(Cn&3)!==0&&Cr(),rn(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===Zo?ia++:(ia=0,Zo=e):ia=0,la(0)}}function xd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ul(t)))}function Cr(){return Ed(),Td(),kd(),Cd()}function Cd(){if(lt!==5)return!1;var e=Qn,t=Xo;Xo=0;var n=du(Cn),l=O.T,o=X.p;try{X.p=32>n?32:n,O.T=null,n=Qo,Qo=null;var s=Qn,g=Cn;if(lt=0,rl=Qn=null,Cn=0,(Be&6)!==0)throw Error(u(331));var v=Be;if(Be|=4,sd(s.current),rd(s,s.current,g,n),Be=v,la(0,!1),it&&typeof it.onPostCommitFiberRoot=="function")try{it.onPostCommitFiberRoot(gt,s)}catch{}return!0}finally{X.p=o,O.T=l,xd(e,t)}}function Fd(e,t,n){t=Gt(n,t),t=ko(e.stateNode,t,2),e=jn(e,t,2),e!==null&&(El(e,2),rn(e))}function Ie(e,t,n){if(e.tag===3)Fd(e,e,n);else for(;t!==null;){if(t.tag===3){Fd(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xn===null||!Xn.has(l))){e=Gt(n,e),n=zh(2),l=jn(t,n,2),l!==null&&(Mh(n,l,t,e),El(l,2),rn(l));break}}t=t.return}}function Wo(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Xy;var o=new Set;l.set(t,o)}else o=l.get(t),o===void 0&&(o=new Set,l.set(t,o));o.has(n)||(Go=!0,o.add(n),e=Wy.bind(null,e,t,n),t.then(e,e))}function Wy(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,He===e&&(ke&n)===n&&(Ke===4||Ke===3&&(ke&62914560)===ke&&300>pt()-Ar?(Be&2)===0&&ul(e,0):Yo|=n,al===ke&&(al=0)),rn(e)}function zd(e,t){t===0&&(t=Sc()),e=ci(e,t),e!==null&&(El(e,t),rn(e))}function Py(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zd(e,n)}function $y(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),zd(e,n)}function e0(e,t){return Fi(e,t)}var Fr=null,sl=null,Po=!1,zr=!1,$o=!1,Kn=0;function rn(e){e!==sl&&e.next===null&&(sl===null?Fr=sl=e:sl=sl.next=e),zr=!0,Po||(Po=!0,n0())}function la(e,t){if(!$o&&zr){$o=!0;do for(var n=!1,l=Fr;l!==null;){if(e!==0){var o=l.pendingLanes;if(o===0)var s=0;else{var g=l.suspendedLanes,v=l.pingedLanes;s=(1<<31-je(42|e)+1)-1,s&=o&~(g&~v),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,_d(l,s))}else s=ke,s=_a(l,l===He?s:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(s&3)===0||Sl(l,s)||(n=!0,_d(l,s));l=l.next}while(n);$o=!1}}function t0(){Md()}function Md(){zr=Po=!1;var e=0;Kn!==0&&h0()&&(e=Kn);for(var t=pt(),n=null,l=Fr;l!==null;){var o=l.next,s=Bd(l,t);s===0?(l.next=null,n===null?Fr=o:n.next=o,o===null&&(sl=n)):(n=l,(e!==0||(s&3)!==0)&&(zr=!0)),l=o}lt!==0&&lt!==5||la(e),Kn!==0&&(Kn=0)}function Bd(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var g=31-je(s),v=1<<g,E=o[g];E===-1?((v&n)===0||(v&l)!==0)&&(o[g]=Cg(v,t)):E<=t&&(e.expiredLanes|=v),s&=~v}if(t=He,n=ke,n=_a(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Al(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Sl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Al(l),du(n)){case 2:case 8:n=J;break;case 32:n=de;break;case 268435456:n=Oe;break;default:n=de}return l=Od.bind(null,e),n=Fi(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Al(l),e.callbackPriority=2,e.callbackNode=null,2}function Od(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var l=ke;return l=_a(e,e===He?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(md(e,l,t),Bd(e,pt()),e.callbackNode!=null&&e.callbackNode===n?Od.bind(null,e):null)}function _d(e,t){if(Cr())return null;md(e,t,!0)}function n0(){m0(function(){(Be&6)!==0?Fi(q,t0):Md()})}function es(){if(Kn===0){var e=Zi;e===0&&(e=Ma,Ma<<=1,(Ma&261888)===0&&(Ma=256)),Kn=e}return Kn}function Id(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ua(""+e)}function Rd(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function i0(e,t,n,l,o){if(t==="submit"&&n&&n.stateNode===o){var s=Id((o[wt]||null).action),g=l.submitter;g&&(t=(t=g[wt]||null)?Id(t.formAction):g.getAttribute("formAction"),t!==null&&(s=t,g=null));var v=new qa("action","action",null,l,o);e.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Kn!==0){var E=g?Rd(o,g):new FormData(o);wo(n,{pending:!0,data:E,method:o.method,action:s},null,E)}}else typeof s=="function"&&(v.preventDefault(),E=g?Rd(o,g):new FormData(o),wo(n,{pending:!0,data:E,method:o.method,action:s},s,E))},currentTarget:o}]})}}for(var ts=0;ts<Ru.length;ts++){var ns=Ru[ts],l0=ns.toLowerCase(),a0=ns[0].toUpperCase()+ns.slice(1);Pt(l0,"on"+a0)}Pt(df,"onAnimationEnd"),Pt(mf,"onAnimationIteration"),Pt(pf,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(Dy,"onTransitionRun"),Pt(Ay,"onTransitionStart"),Pt(Sy,"onTransitionCancel"),Pt(gf,"onTransitionEnd"),_i("onMouseEnter",["mouseout","mouseover"]),_i("onMouseLeave",["mouseout","mouseover"]),_i("onPointerEnter",["pointerout","pointerover"]),_i("onPointerLeave",["pointerout","pointerover"]),ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ri("onBeforeInput",["compositionend","keypress","textInput","paste"]),ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(aa));function Nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],o=l.event;l=l.listeners;e:{var s=void 0;if(t)for(var g=l.length-1;0<=g;g--){var v=l[g],E=v.instance,M=v.currentTarget;if(v=v.listener,E!==s&&o.isPropagationStopped())break e;s=v,o.currentTarget=M;try{s(o)}catch(U){Va(U)}o.currentTarget=null,s=E}else for(g=0;g<l.length;g++){if(v=l[g],E=v.instance,M=v.currentTarget,v=v.listener,E!==s&&o.isPropagationStopped())break e;s=v,o.currentTarget=M;try{s(o)}catch(U){Va(U)}o.currentTarget=null,s=E}}}}function Se(e,t){var n=t[mu];n===void 0&&(n=t[mu]=new Set);var l=e+"__bubble";n.has(l)||(Ud(t,e,2,!1),n.add(l))}function is(e,t,n){var l=0;t&&(l|=4),Ud(n,e,l,t)}var Mr="_reactListening"+Math.random().toString(36).slice(2);function ls(e){if(!e[Mr]){e[Mr]=!0,zc.forEach(function(n){n!=="selectionchange"&&(r0.has(n)||is(n,!1,e),is(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mr]||(t[Mr]=!0,is("selectionchange",!1,t))}}function Ud(e,t,n,l){switch(dm(t)){case 2:var o=_0;break;case 8:o=I0;break;default:o=vs}n=o.bind(null,t,n,e),o=void 0,!Su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function as(e,t,n,l,o){var s=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var g=l.tag;if(g===3||g===4){var v=l.stateNode.containerInfo;if(v===o)break;if(g===4)for(g=l.return;g!==null;){var E=g.tag;if((E===3||E===4)&&g.stateNode.containerInfo===o)return;g=g.return}for(;v!==null;){if(g=Mi(v),g===null)return;if(E=g.tag,E===5||E===6||E===26||E===27){l=s=g;continue e}v=v.parentNode}}l=l.return}qc(function(){var M=s,U=Du(n),Y=[];e:{var B=yf.get(e);if(B!==void 0){var _=qa,ne=e;switch(e){case"keypress":if(ja(n)===0)break e;case"keydown":case"keyup":_=$g;break;case"focusin":ne="focus",_=xu;break;case"focusout":ne="blur",_=xu;break;case"beforeblur":case"afterblur":_=xu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Hg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=ny;break;case df:case mf:case pf:_=Yg;break;case gf:_=ly;break;case"scroll":case"scrollend":_=Lg;break;case"wheel":_=ry;break;case"copy":case"cut":case"paste":_=Xg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Qc;break;case"toggle":case"beforetoggle":_=oy}var fe=(t&4)!==0,Le=!fe&&(e==="scroll"||e==="scrollend"),F=fe?B!==null?B+"Capture":null:B;fe=[];for(var k=M,z;k!==null;){var G=k;if(z=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||z===null||F===null||(G=xl(k,F),G!=null&&fe.push(ra(k,G,z))),Le)break;k=k.return}0<fe.length&&(B=new _(B,ne,null,n,U),Y.push({event:B,listeners:fe}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",_=e==="mouseout"||e==="pointerout",B&&n!==wu&&(ne=n.relatedTarget||n.fromElement)&&(Mi(ne)||ne[zi]))break e;if((_||B)&&(B=U.window===U?U:(B=U.ownerDocument)?B.defaultView||B.parentWindow:window,_?(ne=n.relatedTarget||n.toElement,_=M,ne=ne?Mi(ne):null,ne!==null&&(Le=h(ne),fe=ne.tag,ne!==Le||fe!==5&&fe!==27&&fe!==6)&&(ne=null)):(_=null,ne=M),_!==ne)){if(fe=Vc,G="onMouseLeave",F="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(fe=Qc,G="onPointerLeave",F="onPointerEnter",k="pointer"),Le=_==null?B:kl(_),z=ne==null?B:kl(ne),B=new fe(G,k+"leave",_,n,U),B.target=Le,B.relatedTarget=z,G=null,Mi(U)===M&&(fe=new fe(F,k+"enter",ne,n,U),fe.target=z,fe.relatedTarget=Le,G=fe),Le=G,_&&ne)t:{for(fe=u0,F=_,k=ne,z=0,G=F;G;G=fe(G))z++;G=0;for(var oe=k;oe;oe=fe(oe))G++;for(;0<z-G;)F=fe(F),z--;for(;0<G-z;)k=fe(k),G--;for(;z--;){if(F===k||k!==null&&F===k.alternate){fe=F;break t}F=fe(F),k=fe(k)}fe=null}else fe=null;_!==null&&Ld(Y,B,_,fe,!1),ne!==null&&Le!==null&&Ld(Y,Le,ne,fe,!0)}}e:{if(B=M?kl(M):window,_=B.nodeName&&B.nodeName.toLowerCase(),_==="select"||_==="input"&&B.type==="file")var ze=tf;else if($c(B))if(nf)ze=by;else{ze=gy;var le=py}else _=B.nodeName,!_||_.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?M&&vu(M.elementType)&&(ze=tf):ze=yy;if(ze&&(ze=ze(e,M))){ef(Y,ze,n,U);break e}le&&le(e,B,M),e==="focusout"&&M&&B.type==="number"&&M.memoizedProps.value!=null&&bu(B,"number",B.value)}switch(le=M?kl(M):window,e){case"focusin":($c(le)||le.contentEditable==="true")&&(ji=le,Ou=M,Il=null);break;case"focusout":Il=Ou=ji=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,ff(Y,n,U);break;case"selectionchange":if(wy)break;case"keydown":case"keyup":ff(Y,n,U)}var ye;if(Fu)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Li?Wc(e,n)&&(xe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(xe="onCompositionStart");xe&&(Zc&&n.locale!=="ko"&&(Li||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Li&&(ye=Gc()):(On=U,Eu="value"in On?On.value:On.textContent,Li=!0)),le=Br(M,xe),0<le.length&&(xe=new Xc(xe,e,null,n,U),Y.push({event:xe,listeners:le}),ye?xe.data=ye:(ye=Pc(n),ye!==null&&(xe.data=ye)))),(ye=cy?fy(e,n):hy(e,n))&&(xe=Br(M,"onBeforeInput"),0<xe.length&&(le=new Xc("onBeforeInput","beforeinput",null,n,U),Y.push({event:le,listeners:xe}),le.data=ye)),i0(Y,e,M,n,U)}Nd(Y,t)})}function ra(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Br(e,t){for(var n=t+"Capture",l=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=xl(e,n),o!=null&&l.unshift(ra(e,o,s)),o=xl(e,t),o!=null&&l.push(ra(e,o,s))),e.tag===3)return l;e=e.return}return[]}function u0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ld(e,t,n,l,o){for(var s=t._reactName,g=[];n!==null&&n!==l;){var v=n,E=v.alternate,M=v.stateNode;if(v=v.tag,E!==null&&E===l)break;v!==5&&v!==26&&v!==27||M===null||(E=M,o?(M=xl(n,s),M!=null&&g.unshift(ra(n,M,E))):o||(M=xl(n,s),M!=null&&g.push(ra(n,M,E)))),n=n.return}g.length!==0&&e.push({event:t,listeners:g})}var o0=/\r\n?/g,s0=/\u0000|\uFFFD/g;function jd(e){return(typeof e=="string"?e:""+e).replace(o0,`
`).replace(s0,"")}function Hd(e,t){return t=jd(t),jd(e)===t}function Ue(e,t,n,l,o,s){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ri(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ri(e,""+l);break;case"className":Ra(e,"class",l);break;case"tabIndex":Ra(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ra(e,n,l);break;case"style":jc(e,l,s);break;case"data":if(t!=="object"){Ra(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Ua(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(t!=="input"&&Ue(e,t,"name",o.name,o,null),Ue(e,t,"formEncType",o.formEncType,o,null),Ue(e,t,"formMethod",o.formMethod,o,null),Ue(e,t,"formTarget",o.formTarget,o,null)):(Ue(e,t,"encType",o.encType,o,null),Ue(e,t,"method",o.method,o,null),Ue(e,t,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=Ua(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=dn);break;case"onScroll":l!=null&&Se("scroll",e);break;case"onScrollEnd":l!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=Ua(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Ia(e,"popover",l);break;case"xlinkActuate":hn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":hn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":hn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":hn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":hn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":hn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":hn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":hn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":hn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ia(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ng.get(n)||n,Ia(e,n,l))}}function rs(e,t,n,l,o,s){switch(n){case"style":jc(e,l,s);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ri(e,l):(typeof l=="number"||typeof l=="bigint")&&Ri(e,""+l);break;case"onScroll":l!=null&&Se("scroll",e);break;case"onScrollEnd":l!=null&&Se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=dn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mc.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),s=e[wt]||null,s=s!=null?s[n]:null,typeof s=="function"&&e.removeEventListener(t,s,o),typeof l=="function")){typeof s!="function"&&s!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,o);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Ia(e,n,l)}}}function ft(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var l=!1,o=!1,s;for(s in n)if(n.hasOwnProperty(s)){var g=n[s];if(g!=null)switch(s){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ue(e,t,s,g,n,null)}}o&&Ue(e,t,"srcSet",n.srcSet,n,null),l&&Ue(e,t,"src",n.src,n,null);return;case"input":Se("invalid",e);var v=s=g=o=null,E=null,M=null;for(l in n)if(n.hasOwnProperty(l)){var U=n[l];if(U!=null)switch(l){case"name":o=U;break;case"type":g=U;break;case"checked":E=U;break;case"defaultChecked":M=U;break;case"value":s=U;break;case"defaultValue":v=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,t));break;default:Ue(e,t,l,U,n,null)}}Rc(e,s,v,E,M,g,o,!1);return;case"select":Se("invalid",e),l=g=s=null;for(o in n)if(n.hasOwnProperty(o)&&(v=n[o],v!=null))switch(o){case"value":s=v;break;case"defaultValue":g=v;break;case"multiple":l=v;default:Ue(e,t,o,v,n,null)}t=s,n=g,e.multiple=!!l,t!=null?Ii(e,!!l,t,!1):n!=null&&Ii(e,!!l,n,!0);return;case"textarea":Se("invalid",e),s=o=l=null;for(g in n)if(n.hasOwnProperty(g)&&(v=n[g],v!=null))switch(g){case"value":l=v;break;case"defaultValue":o=v;break;case"children":s=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(u(91));break;default:Ue(e,t,g,v,n,null)}Uc(e,l,o,s);return;case"option":for(E in n)if(n.hasOwnProperty(E)&&(l=n[E],l!=null))switch(E){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ue(e,t,E,l,n,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(l=0;l<aa.length;l++)Se(aa[l],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in n)if(n.hasOwnProperty(M)&&(l=n[M],l!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ue(e,t,M,l,n,null)}return;default:if(vu(t)){for(U in n)n.hasOwnProperty(U)&&(l=n[U],l!==void 0&&rs(e,t,U,l,n,void 0));return}}for(v in n)n.hasOwnProperty(v)&&(l=n[v],l!=null&&Ue(e,t,v,l,n,null))}function c0(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,g=null,v=null,E=null,M=null,U=null;for(_ in n){var Y=n[_];if(n.hasOwnProperty(_)&&Y!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":E=Y;default:l.hasOwnProperty(_)||Ue(e,t,_,null,l,Y)}}for(var B in l){var _=l[B];if(Y=n[B],l.hasOwnProperty(B)&&(_!=null||Y!=null))switch(B){case"type":s=_;break;case"name":o=_;break;case"checked":M=_;break;case"defaultChecked":U=_;break;case"value":g=_;break;case"defaultValue":v=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(u(137,t));break;default:_!==Y&&Ue(e,t,B,_,l,Y)}}yu(e,g,v,E,M,U,s,o);return;case"select":_=g=v=B=null;for(s in n)if(E=n[s],n.hasOwnProperty(s)&&E!=null)switch(s){case"value":break;case"multiple":_=E;default:l.hasOwnProperty(s)||Ue(e,t,s,null,l,E)}for(o in l)if(s=l[o],E=n[o],l.hasOwnProperty(o)&&(s!=null||E!=null))switch(o){case"value":B=s;break;case"defaultValue":v=s;break;case"multiple":g=s;default:s!==E&&Ue(e,t,o,s,l,E)}t=v,n=g,l=_,B!=null?Ii(e,!!n,B,!1):!!l!=!!n&&(t!=null?Ii(e,!!n,t,!0):Ii(e,!!n,n?[]:"",!1));return;case"textarea":_=B=null;for(v in n)if(o=n[v],n.hasOwnProperty(v)&&o!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ue(e,t,v,null,l,o)}for(g in l)if(o=l[g],s=n[g],l.hasOwnProperty(g)&&(o!=null||s!=null))switch(g){case"value":B=o;break;case"defaultValue":_=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(u(91));break;default:o!==s&&Ue(e,t,g,o,l,s)}Nc(e,B,_);return;case"option":for(var ne in n)if(B=n[ne],n.hasOwnProperty(ne)&&B!=null&&!l.hasOwnProperty(ne))switch(ne){case"selected":e.selected=!1;break;default:Ue(e,t,ne,null,l,B)}for(E in l)if(B=l[E],_=n[E],l.hasOwnProperty(E)&&B!==_&&(B!=null||_!=null))switch(E){case"selected":e.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Ue(e,t,E,B,l,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in n)B=n[fe],n.hasOwnProperty(fe)&&B!=null&&!l.hasOwnProperty(fe)&&Ue(e,t,fe,null,l,B);for(M in l)if(B=l[M],_=n[M],l.hasOwnProperty(M)&&B!==_&&(B!=null||_!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(u(137,t));break;default:Ue(e,t,M,B,l,_)}return;default:if(vu(t)){for(var Le in n)B=n[Le],n.hasOwnProperty(Le)&&B!==void 0&&!l.hasOwnProperty(Le)&&rs(e,t,Le,void 0,l,B);for(U in l)B=l[U],_=n[U],!l.hasOwnProperty(U)||B===_||B===void 0&&_===void 0||rs(e,t,U,B,l,_);return}}for(var F in n)B=n[F],n.hasOwnProperty(F)&&B!=null&&!l.hasOwnProperty(F)&&Ue(e,t,F,null,l,B);for(Y in l)B=l[Y],_=n[Y],!l.hasOwnProperty(Y)||B===_||B==null&&_==null||Ue(e,t,Y,B,l,_)}function qd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function f0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var o=n[l],s=o.transferSize,g=o.initiatorType,v=o.duration;if(s&&v&&qd(g)){for(g=0,v=o.responseEnd,l+=1;l<n.length;l++){var E=n[l],M=E.startTime;if(M>v)break;var U=E.transferSize,Y=E.initiatorType;U&&qd(Y)&&(E=E.responseEnd,g+=U*(E<v?1:(v-M)/(E-M)))}if(--l,t+=8*(s+g)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var us=null,os=null;function Or(e){return e.nodeType===9?e:e.ownerDocument}function Gd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=null;function h0(){var e=window.event;return e&&e.type==="popstate"?e===cs?!1:(cs=e,!0):(cs=null,!1)}var Vd=typeof setTimeout=="function"?setTimeout:void 0,d0=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(e){return Xd.resolve(null).then(e).catch(p0)}:Vd;function p0(e){setTimeout(function(){throw e})}function Jn(e){return e==="head"}function Qd(e,t){var n=t,l=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(o),dl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")ua(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ua(n);for(var s=n.firstChild;s;){var g=s.nextSibling,v=s.nodeName;s[Tl]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=g}}else n==="body"&&ua(e.ownerDocument.body);n=o}while(n);dl(t)}function Zd(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function fs(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":fs(n),pu(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function g0(e,t,n,l){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Tl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function y0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Zt(e.nextSibling),e===null))return null;return e}function Kd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function hs(e){return e.data==="$?"||e.data==="$~"}function ds(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function b0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ms=null;function Jd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Zt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Pd(e,t,n){switch(t=Or(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function ua(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pu(e)}var Kt=new Map,$d=new Set;function _r(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fn=X.d;X.d={f:v0,r:w0,D:D0,C:A0,L:S0,m:E0,X:k0,S:T0,M:x0};function v0(){var e=Fn.f(),t=Tr();return e||t}function w0(e){var t=Bi(e);t!==null&&t.tag===5&&t.type==="form"?gh(t):Fn.r(e)}var cl=typeof document>"u"?null:document;function em(e,t,n){var l=cl;if(l&&typeof t=="string"&&t){var o=Ht(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),$d.has(o)||($d.add(o),e={rel:e,crossOrigin:n,href:t},l.querySelector(o)===null&&(t=l.createElement("link"),ft(t,"link",e),at(t),l.head.appendChild(t)))}}function D0(e){Fn.D(e),em("dns-prefetch",e,null)}function A0(e,t){Fn.C(e,t),em("preconnect",e,t)}function S0(e,t,n){Fn.L(e,t,n);var l=cl;if(l&&e&&t){var o='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+Ht(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+Ht(n.imageSizes)+'"]')):o+='[href="'+Ht(e)+'"]';var s=o;switch(t){case"style":s=fl(e);break;case"script":s=hl(e)}Kt.has(s)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Kt.set(s,e),l.querySelector(o)!==null||t==="style"&&l.querySelector(oa(s))||t==="script"&&l.querySelector(sa(s))||(t=l.createElement("link"),ft(t,"link",e),at(t),l.head.appendChild(t)))}}function E0(e,t){Fn.m(e,t);var n=cl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+Ht(l)+'"][href="'+Ht(e)+'"]',s=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=hl(e)}if(!Kt.has(s)&&(e=y({rel:"modulepreload",href:e},t),Kt.set(s,e),n.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(sa(s)))return}l=n.createElement("link"),ft(l,"link",e),at(l),n.head.appendChild(l)}}}function T0(e,t,n){Fn.S(e,t,n);var l=cl;if(l&&e){var o=Oi(l).hoistableStyles,s=fl(e);t=t||"default";var g=o.get(s);if(!g){var v={loading:0,preload:null};if(g=l.querySelector(oa(s)))v.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Kt.get(s))&&ps(e,n);var E=g=l.createElement("link");at(E),ft(E,"link",e),E._p=new Promise(function(M,U){E.onload=M,E.onerror=U}),E.addEventListener("load",function(){v.loading|=1}),E.addEventListener("error",function(){v.loading|=2}),v.loading|=4,Ir(g,t,l)}g={type:"stylesheet",instance:g,count:1,state:v},o.set(s,g)}}}function k0(e,t){Fn.X(e,t);var n=cl;if(n&&e){var l=Oi(n).hoistableScripts,o=hl(e),s=l.get(o);s||(s=n.querySelector(sa(o)),s||(e=y({src:e,async:!0},t),(t=Kt.get(o))&&gs(e,t),s=n.createElement("script"),at(s),ft(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(o,s))}}function x0(e,t){Fn.M(e,t);var n=cl;if(n&&e){var l=Oi(n).hoistableScripts,o=hl(e),s=l.get(o);s||(s=n.querySelector(sa(o)),s||(e=y({src:e,async:!0,type:"module"},t),(t=Kt.get(o))&&gs(e,t),s=n.createElement("script"),at(s),ft(s,"link",e),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},l.set(o,s))}}function tm(e,t,n,l){var o=(o=ue.current)?_r(o):null;if(!o)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=fl(n.href),n=Oi(o).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=fl(n.href);var s=Oi(o).hoistableStyles,g=s.get(e);if(g||(o=o.ownerDocument||o,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,g),(s=o.querySelector(oa(e)))&&!s._p&&(g.instance=s,g.state.loading=5),Kt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Kt.set(e,n),s||C0(o,e,n,g.state))),t&&l===null)throw Error(u(528,""));return g}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hl(n),n=Oi(o).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function fl(e){return'href="'+Ht(e)+'"'}function oa(e){return'link[rel="stylesheet"]['+e+"]"}function nm(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function C0(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ft(t,"link",n),at(t),e.head.appendChild(t))}function hl(e){return'[src="'+Ht(e)+'"]'}function sa(e){return"script[async]"+e}function im(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Ht(n.href)+'"]');if(l)return t.instance=l,at(l),l;var o=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),at(l),ft(l,"style",o),Ir(l,n.precedence,e),t.instance=l;case"stylesheet":o=fl(n.href);var s=e.querySelector(oa(o));if(s)return t.state.loading|=4,t.instance=s,at(s),s;l=nm(n),(o=Kt.get(o))&&ps(l,o),s=(e.ownerDocument||e).createElement("link"),at(s);var g=s;return g._p=new Promise(function(v,E){g.onload=v,g.onerror=E}),ft(s,"link",l),t.state.loading|=4,Ir(s,n.precedence,e),t.instance=s;case"script":return s=hl(n.src),(o=e.querySelector(sa(s)))?(t.instance=o,at(o),o):(l=n,(o=Kt.get(s))&&(l=y({},n),gs(l,o)),e=e.ownerDocument||e,o=e.createElement("script"),at(o),ft(o,"link",l),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ir(l,n.precedence,e));return t.instance}function Ir(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,s=o,g=0;g<l.length;g++){var v=l[g];if(v.dataset.precedence===t)s=v;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function ps(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function gs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rr=null;function lm(e,t,n){if(Rr===null){var l=new Map,o=Rr=new Map;o.set(n,l)}else o=Rr,l=o.get(n),l||(l=new Map,o.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var s=n[o];if(!(s[Tl]||s[ut]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var g=s.getAttribute(t)||"";g=e+g;var v=l.get(g);v?v.push(s):l.set(g,[s])}}return l}function am(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function F0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function rm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function z0(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=fl(l.href),s=t.querySelector(oa(o));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Nr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=s,at(s);return}s=t.ownerDocument||t,l=nm(l),(o=Kt.get(o))&&ps(l,o),s=s.createElement("link"),at(s);var g=s;g._p=new Promise(function(v,E){g.onload=v,g.onerror=E}),ft(s,"link",l),n.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Nr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var ys=0;function M0(e,t){return e.stylesheets&&e.count===0&&Lr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Lr(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&ys===0&&(ys=62500*f0());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Lr(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>ys?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(o)}}:null}function Nr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Lr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ur=null;function Lr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ur=new Map,t.forEach(B0,e),Ur=null,Nr.call(e))}function B0(e,t){if(!(t.state.loading&4)){var n=Ur.get(e);if(n)var l=n.get(null);else{n=new Map,Ur.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var g=o[s];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(n.set(g.dataset.precedence,g),l=g)}l&&n.set(null,l)}o=t.instance,g=o.getAttribute("data-precedence"),s=n.get(g)||l,s===l&&n.set(null,o),n.set(g,o),this.count++,l=Nr.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var ca={$$typeof:N,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function O0(e,t,n,l,o,s,g,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fu(0),this.hiddenUpdates=fu(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function um(e,t,n,l,o,s,g,v,E,M,U,Y){return e=new O0(e,t,n,g,E,M,U,Y,v),t=1,s===!0&&(t|=24),s=Mt(3,null,null,t),e.current=s,s.stateNode=e,t=Ku(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:l,isDehydrated:n,cache:t},$u(s),e}function om(e){return e?(e=Gi,e):Gi}function sm(e,t,n,l,o,s){o=om(o),l.context===null?l.context=o:l.pendingContext=o,l=Ln(t),l.payload={element:n},s=s===void 0?null:s,s!==null&&(l.callback=s),n=jn(e,l,t),n!==null&&(kt(n,e,t),ql(n,e,t))}function cm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bs(e,t){cm(e,t),(e=e.alternate)&&cm(e,t)}function fm(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&kt(t,e,67108864),bs(e,67108864)}}function hm(e){if(e.tag===13||e.tag===31){var t=Rt();t=hu(t);var n=ci(e,t);n!==null&&kt(n,e,t),bs(e,t)}}var jr=!0;function _0(e,t,n,l){var o=O.T;O.T=null;var s=X.p;try{X.p=2,vs(e,t,n,l)}finally{X.p=s,O.T=o}}function I0(e,t,n,l){var o=O.T;O.T=null;var s=X.p;try{X.p=8,vs(e,t,n,l)}finally{X.p=s,O.T=o}}function vs(e,t,n,l){if(jr){var o=ws(l);if(o===null)as(e,t,l,Hr,n),mm(e,l);else if(N0(o,e,t,n,l))l.stopPropagation();else if(mm(e,l),t&4&&-1<R0.indexOf(e)){for(;o!==null;){var s=Bi(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var g=ai(s.pendingLanes);if(g!==0){var v=s;for(v.pendingLanes|=2,v.entangledLanes|=2;g;){var E=1<<31-je(g);v.entanglements[1]|=E,g&=~E}rn(s),(Be&6)===0&&(Sr=pt()+500,la(0))}}break;case 31:case 13:v=ci(s,2),v!==null&&kt(v,s,2),Tr(),bs(s,2)}if(s=ws(l),s===null&&as(e,t,l,Hr,n),s===o)break;o=s}o!==null&&l.stopPropagation()}else as(e,t,l,null,n)}}function ws(e){return e=Du(e),Ds(e)}var Hr=null;function Ds(e){if(Hr=null,e=Mi(e),e!==null){var t=h(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Hr=e,null}function dm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cu()){case q:return 2;case J:return 8;case de:case De:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var As=!1,Wn=null,Pn=null,$n=null,fa=new Map,ha=new Map,ei=[],R0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mm(e,t){switch(e){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(t.pointerId)}}function da(e,t,n,l,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:s,targetContainers:[o]},t!==null&&(t=Bi(t),t!==null&&fm(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function N0(e,t,n,l,o){switch(t){case"focusin":return Wn=da(Wn,e,t,n,l,o),!0;case"dragenter":return Pn=da(Pn,e,t,n,l,o),!0;case"mouseover":return $n=da($n,e,t,n,l,o),!0;case"pointerover":var s=o.pointerId;return fa.set(s,da(fa.get(s)||null,e,t,n,l,o)),!0;case"gotpointercapture":return s=o.pointerId,ha.set(s,da(ha.get(s)||null,e,t,n,l,o)),!0}return!1}function pm(e){var t=Mi(e.target);if(t!==null){var n=h(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,Cc(e.priority,function(){hm(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Cc(e.priority,function(){hm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ws(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);wu=l,n.target.dispatchEvent(l),wu=null}else return t=Bi(n),t!==null&&fm(t),e.blockedOn=n,!1;t.shift()}return!0}function gm(e,t,n){qr(e)&&n.delete(t)}function U0(){As=!1,Wn!==null&&qr(Wn)&&(Wn=null),Pn!==null&&qr(Pn)&&(Pn=null),$n!==null&&qr($n)&&($n=null),fa.forEach(gm),ha.forEach(gm)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,U0)))}var Yr=null;function ym(e){Yr!==e&&(Yr=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Yr===e&&(Yr=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],o=e[t+2];if(typeof l!="function"){if(Ds(l||n)===null)continue;break}var s=Bi(n);s!==null&&(e.splice(t,3),t-=3,wo(s,{pending:!0,data:o,method:n.method,action:l},l,o))}}))}function dl(e){function t(E){return Gr(E,e)}Wn!==null&&Gr(Wn,e),Pn!==null&&Gr(Pn,e),$n!==null&&Gr($n,e),fa.forEach(t),ha.forEach(t);for(var n=0;n<ei.length;n++){var l=ei[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ei.length&&(n=ei[0],n.blockedOn===null);)pm(n),n.blockedOn===null&&ei.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var o=n[l],s=n[l+1],g=o[wt]||null;if(typeof s=="function")g||ym(n);else if(g){var v=null;if(s&&s.hasAttribute("formAction")){if(o=s,g=s[wt]||null)v=g.formAction;else if(Ds(o)!==null)continue}else v=g.action;typeof v=="function"?n[l+1]=v:(n.splice(l,3),l-=3),ym(n)}}}function bm(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(g){return o=g})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function Ss(e){this._internalRoot=e}Vr.prototype.render=Ss.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,l=Rt();sm(n,l,e,t,null,null)},Vr.prototype.unmount=Ss.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sm(e.current,2,null,e,null,null),Tr(),t[zi]=null}};function Vr(e){this._internalRoot=e}Vr.prototype.unstable_scheduleHydration=function(e){if(e){var t=xc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ei.length&&t!==0&&t<ei[n].priority;n++);ei.splice(n,0,e),n===0&&pm(e)}};var vm=r.version;if(vm!=="19.2.4")throw Error(u(527,vm,"19.2.4"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=d(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var L0={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{gt=Xr.inject(L0),it=Xr}catch{}}return pa.createRoot=function(e,t){if(!c(e))throw Error(u(299));var n=!1,l="",o=kh,s=xh,g=Ch;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError)),t=um(e,1,!1,null,null,n,l,null,o,s,g,bm),e[zi]=t.current,ls(e),new Ss(t)},pa.hydrateRoot=function(e,t,n){if(!c(e))throw Error(u(299));var l=!1,o="",s=kh,g=xh,v=Ch,E=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(g=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.formState!==void 0&&(E=n.formState)),t=um(e,1,!0,t,n??null,l,o,E,s,g,v,bm),t.context=om(null),n=t.current,l=Rt(),l=hu(l),o=Ln(l),o.callback=null,jn(n,o,l),n=l,t.current.lanes=n,El(t,n),rn(t),e[zi]=t.current,ls(e),new Vr(t)},pa.version="19.2.4",pa}var Fm;function K0(){if(Fm)return ks.exports;Fm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(r){console.error(r)}}return i(),ks.exports=Z0(),ks.exports}var J0=K0();function W0(i,r){const a={};return(i[i.length-1]===""?[...i,""]:i).join((a.padRight?" ":"")+","+(a.padLeft===!1?"":" ")).trim()}const P0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,$0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,eb={};function zm(i,r){return(eb.jsx?$0:P0).test(i)}const tb=/[ \t\n\f\r]/g;function nb(i){return typeof i=="object"?i.type==="text"?Mm(i.value):!1:Mm(i)}function Mm(i){return i.replace(tb,"")===""}class Ta{constructor(r,a,u){this.normal=a,this.property=r,u&&(this.space=u)}}Ta.prototype.normal={};Ta.prototype.property={};Ta.prototype.space=void 0;function Ap(i,r){const a={},u={};for(const c of i)Object.assign(a,c.property),Object.assign(u,c.normal);return new Ta(a,u,r)}function Zs(i){return i.toLowerCase()}class Ct{constructor(r,a){this.attribute=a,this.property=r}}Ct.prototype.attribute="";Ct.prototype.booleanish=!1;Ct.prototype.boolean=!1;Ct.prototype.commaOrSpaceSeparated=!1;Ct.prototype.commaSeparated=!1;Ct.prototype.defined=!1;Ct.prototype.mustUseProperty=!1;Ct.prototype.number=!1;Ct.prototype.overloadedBoolean=!1;Ct.prototype.property="";Ct.prototype.spaceSeparated=!1;Ct.prototype.space=void 0;let ib=0;const be=Ti(),nt=Ti(),Ks=Ti(),Q=Ti(),Ge=Ti(),yl=Ti(),Nt=Ti();function Ti(){return 2**++ib}const Js=Object.freeze(Object.defineProperty({__proto__:null,boolean:be,booleanish:nt,commaOrSpaceSeparated:Nt,commaSeparated:yl,number:Q,overloadedBoolean:Ks,spaceSeparated:Ge},Symbol.toStringTag,{value:"Module"})),zs=Object.keys(Js);class rc extends Ct{constructor(r,a,u,c){let h=-1;if(super(r,a),Bm(this,"space",c),typeof u=="number")for(;++h<zs.length;){const f=zs[h];Bm(this,zs[h],(u&Js[f])===Js[f])}}}rc.prototype.defined=!0;function Bm(i,r,a){a&&(i[r]=a)}function vl(i){const r={},a={};for(const[u,c]of Object.entries(i.properties)){const h=new rc(u,i.transform(i.attributes||{},u),c,i.space);i.mustUseProperty&&i.mustUseProperty.includes(u)&&(h.mustUseProperty=!0),r[u]=h,a[Zs(u)]=u,a[Zs(h.attribute)]=u}return new Ta(r,a,i.space)}const Sp=vl({properties:{ariaActiveDescendant:null,ariaAtomic:nt,ariaAutoComplete:null,ariaBusy:nt,ariaChecked:nt,ariaColCount:Q,ariaColIndex:Q,ariaColSpan:Q,ariaControls:Ge,ariaCurrent:null,ariaDescribedBy:Ge,ariaDetails:null,ariaDisabled:nt,ariaDropEffect:Ge,ariaErrorMessage:null,ariaExpanded:nt,ariaFlowTo:Ge,ariaGrabbed:nt,ariaHasPopup:null,ariaHidden:nt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ge,ariaLevel:Q,ariaLive:null,ariaModal:nt,ariaMultiLine:nt,ariaMultiSelectable:nt,ariaOrientation:null,ariaOwns:Ge,ariaPlaceholder:null,ariaPosInSet:Q,ariaPressed:nt,ariaReadOnly:nt,ariaRelevant:null,ariaRequired:nt,ariaRoleDescription:Ge,ariaRowCount:Q,ariaRowIndex:Q,ariaRowSpan:Q,ariaSelected:nt,ariaSetSize:Q,ariaSort:null,ariaValueMax:Q,ariaValueMin:Q,ariaValueNow:Q,ariaValueText:null,role:null},transform(i,r){return r==="role"?r:"aria-"+r.slice(4).toLowerCase()}});function Ep(i,r){return r in i?i[r]:r}function Tp(i,r){return Ep(i,r.toLowerCase())}const lb=vl({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:yl,acceptCharset:Ge,accessKey:Ge,action:null,allow:null,allowFullScreen:be,allowPaymentRequest:be,allowUserMedia:be,alt:null,as:null,async:be,autoCapitalize:null,autoComplete:Ge,autoFocus:be,autoPlay:be,blocking:Ge,capture:null,charSet:null,checked:be,cite:null,className:Ge,cols:Q,colSpan:null,content:null,contentEditable:nt,controls:be,controlsList:Ge,coords:Q|yl,crossOrigin:null,data:null,dateTime:null,decoding:null,default:be,defer:be,dir:null,dirName:null,disabled:be,download:Ks,draggable:nt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:be,formTarget:null,headers:Ge,height:Q,hidden:Ks,high:Q,href:null,hrefLang:null,htmlFor:Ge,httpEquiv:Ge,id:null,imageSizes:null,imageSrcSet:null,inert:be,inputMode:null,integrity:null,is:null,isMap:be,itemId:null,itemProp:Ge,itemRef:Ge,itemScope:be,itemType:Ge,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:be,low:Q,manifest:null,max:null,maxLength:Q,media:null,method:null,min:null,minLength:Q,multiple:be,muted:be,name:null,nonce:null,noModule:be,noValidate:be,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:be,optimum:Q,pattern:null,ping:Ge,placeholder:null,playsInline:be,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:be,referrerPolicy:null,rel:Ge,required:be,reversed:be,rows:Q,rowSpan:Q,sandbox:Ge,scope:null,scoped:be,seamless:be,selected:be,shadowRootClonable:be,shadowRootDelegatesFocus:be,shadowRootMode:null,shape:null,size:Q,sizes:null,slot:null,span:Q,spellCheck:nt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:Q,step:null,style:null,tabIndex:Q,target:null,title:null,translate:null,type:null,typeMustMatch:be,useMap:null,value:nt,width:Q,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ge,axis:null,background:null,bgColor:null,border:Q,borderColor:null,bottomMargin:Q,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:be,declare:be,event:null,face:null,frame:null,frameBorder:null,hSpace:Q,leftMargin:Q,link:null,longDesc:null,lowSrc:null,marginHeight:Q,marginWidth:Q,noResize:be,noHref:be,noShade:be,noWrap:be,object:null,profile:null,prompt:null,rev:null,rightMargin:Q,rules:null,scheme:null,scrolling:nt,standby:null,summary:null,text:null,topMargin:Q,valueType:null,version:null,vAlign:null,vLink:null,vSpace:Q,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:be,disableRemotePlayback:be,prefix:null,property:null,results:Q,security:null,unselectable:null},space:"html",transform:Tp}),ab=vl({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Nt,accentHeight:Q,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:Q,amplitude:Q,arabicForm:null,ascent:Q,attributeName:null,attributeType:null,azimuth:Q,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:Q,by:null,calcMode:null,capHeight:Q,className:Ge,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:Q,diffuseConstant:Q,direction:null,display:null,dur:null,divisor:Q,dominantBaseline:null,download:be,dx:null,dy:null,edgeMode:null,editable:null,elevation:Q,enableBackground:null,end:null,event:null,exponent:Q,externalResourcesRequired:null,fill:null,fillOpacity:Q,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:yl,g2:yl,glyphName:yl,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:Q,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Q,horizOriginX:Q,horizOriginY:Q,id:null,ideographic:Q,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:Q,k:Q,k1:Q,k2:Q,k3:Q,k4:Q,kernelMatrix:Nt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:Q,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:Q,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:Q,overlineThickness:Q,paintOrder:null,panose1:null,path:null,pathLength:Q,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ge,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:Q,pointsAtY:Q,pointsAtZ:Q,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Nt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Nt,rev:Nt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Nt,requiredFeatures:Nt,requiredFonts:Nt,requiredFormats:Nt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:Q,specularExponent:Q,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:Q,strikethroughThickness:Q,string:null,stroke:null,strokeDashArray:Nt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Q,strokeOpacity:Q,strokeWidth:null,style:null,surfaceScale:Q,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Nt,tabIndex:Q,tableValues:null,target:null,targetX:Q,targetY:Q,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Nt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:Q,underlineThickness:Q,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:Q,values:null,vAlphabetic:Q,vMathematical:Q,vectorEffect:null,vHanging:Q,vIdeographic:Q,version:null,vertAdvY:Q,vertOriginX:Q,vertOriginY:Q,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:Q,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Ep}),kp=vl({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(i,r){return"xlink:"+r.slice(5).toLowerCase()}}),xp=vl({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Tp}),Cp=vl({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(i,r){return"xml:"+r.slice(3).toLowerCase()}}),rb={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},ub=/[A-Z]/g,Om=/-[a-z]/g,ob=/^data[-\w.:]+$/i;function sb(i,r){const a=Zs(r);let u=r,c=Ct;if(a in i.normal)return i.property[i.normal[a]];if(a.length>4&&a.slice(0,4)==="data"&&ob.test(r)){if(r.charAt(4)==="-"){const h=r.slice(5).replace(Om,fb);u="data"+h.charAt(0).toUpperCase()+h.slice(1)}else{const h=r.slice(4);if(!Om.test(h)){let f=h.replace(ub,cb);f.charAt(0)!=="-"&&(f="-"+f),r="data"+f}}c=rc}return new c(u,r)}function cb(i){return"-"+i.toLowerCase()}function fb(i){return i.charAt(1).toUpperCase()}const hb=Ap([Sp,lb,kp,xp,Cp],"html"),uc=Ap([Sp,ab,kp,xp,Cp],"svg");function db(i){return i.join(" ").trim()}var ml={},Ms,_m;function mb(){if(_m)return Ms;_m=1;var i=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,a=/^\s*/,u=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,c=/^:\s*/,h=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,f=/^[;\s]*/,m=/^\s+|\s+$/g,p=`
`,d="/",b="*",y="",D="comment",w="declaration";function C(V,x){if(typeof V!="string")throw new TypeError("First argument must be a string");if(!V)return[];x=x||{};var H=1,N=1;function P(ie){var K=ie.match(r);K&&(H+=K.length);var O=ie.lastIndexOf(p);N=~O?ie.length-O:N+ie.length}function te(){var ie={line:H,column:N};return function(K){return K.position=new R(ie),me(),K}}function R(ie){this.start=ie,this.end={line:H,column:N},this.source=x.source}R.prototype.content=V;function Z(ie){var K=new Error(x.source+":"+H+":"+N+": "+ie);if(K.reason=ie,K.filename=x.source,K.line=H,K.column=N,K.source=V,!x.silent)throw K}function se(ie){var K=ie.exec(V);if(K){var O=K[0];return P(O),V=V.slice(O.length),K}}function me(){se(a)}function I(ie){var K;for(ie=ie||[];K=ee();)K!==!1&&ie.push(K);return ie}function ee(){var ie=te();if(!(d!=V.charAt(0)||b!=V.charAt(1))){for(var K=2;y!=V.charAt(K)&&(b!=V.charAt(K)||d!=V.charAt(K+1));)++K;if(K+=2,y===V.charAt(K-1))return Z("End of comment missing");var O=V.slice(2,K-2);return N+=2,P(O),V=V.slice(K),N+=2,ie({type:D,comment:O})}}function $(){var ie=te(),K=se(u);if(K){if(ee(),!se(c))return Z("property missing ':'");var O=se(h),X=ie({type:w,property:L(K[0].replace(i,y)),value:O?L(O[0].replace(i,y)):y});return se(f),X}}function we(){var ie=[];I(ie);for(var K;K=$();)K!==!1&&(ie.push(K),I(ie));return ie}return me(),we()}function L(V){return V?V.replace(m,y):y}return Ms=C,Ms}var Im;function pb(){if(Im)return ml;Im=1;var i=ml&&ml.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ml,"__esModule",{value:!0}),ml.default=a;const r=i(mb());function a(u,c){let h=null;if(!u||typeof u!="string")return h;const f=(0,r.default)(u),m=typeof c=="function";return f.forEach(p=>{if(p.type!=="declaration")return;const{property:d,value:b}=p;m?c(d,b,p):b&&(h=h||{},h[d]=b)}),h}return ml}var ga={},Rm;function gb(){if(Rm)return ga;Rm=1,Object.defineProperty(ga,"__esModule",{value:!0}),ga.camelCase=void 0;var i=/^--[a-zA-Z0-9_-]+$/,r=/-([a-z])/g,a=/^[^-]+$/,u=/^-(webkit|moz|ms|o|khtml)-/,c=/^-(ms)-/,h=function(d){return!d||a.test(d)||i.test(d)},f=function(d,b){return b.toUpperCase()},m=function(d,b){return"".concat(b,"-")},p=function(d,b){return b===void 0&&(b={}),h(d)?d:(d=d.toLowerCase(),b.reactCompat?d=d.replace(c,m):d=d.replace(u,m),d.replace(r,f))};return ga.camelCase=p,ga}var ya,Nm;function yb(){if(Nm)return ya;Nm=1;var i=ya&&ya.__importDefault||function(c){return c&&c.__esModule?c:{default:c}},r=i(pb()),a=gb();function u(c,h){var f={};return!c||typeof c!="string"||(0,r.default)(c,function(m,p){m&&p&&(f[(0,a.camelCase)(m,h)]=p)}),f}return u.default=u,ya=u,ya}var bb=yb();const vb=Dp(bb),Fp=zp("end"),oc=zp("start");function zp(i){return r;function r(a){const u=a&&a.position&&a.position[i]||{};if(typeof u.line=="number"&&u.line>0&&typeof u.column=="number"&&u.column>0)return{line:u.line,column:u.column,offset:typeof u.offset=="number"&&u.offset>-1?u.offset:void 0}}}function wb(i){const r=oc(i),a=Fp(i);if(r&&a)return{start:r,end:a}}function wa(i){return!i||typeof i!="object"?"":"position"in i||"type"in i?Um(i.position):"start"in i||"end"in i?Um(i):"line"in i||"column"in i?Ws(i):""}function Ws(i){return Lm(i&&i.line)+":"+Lm(i&&i.column)}function Um(i){return Ws(i&&i.start)+"-"+Ws(i&&i.end)}function Lm(i){return i&&typeof i=="number"?i:1}class mt extends Error{constructor(r,a,u){super(),typeof a=="string"&&(u=a,a=void 0);let c="",h={},f=!1;if(a&&("line"in a&&"column"in a?h={place:a}:"start"in a&&"end"in a?h={place:a}:"type"in a?h={ancestors:[a],place:a.position}:h={...a}),typeof r=="string"?c=r:!h.cause&&r&&(f=!0,c=r.message,h.cause=r),!h.ruleId&&!h.source&&typeof u=="string"){const p=u.indexOf(":");p===-1?h.ruleId=u:(h.source=u.slice(0,p),h.ruleId=u.slice(p+1))}if(!h.place&&h.ancestors&&h.ancestors){const p=h.ancestors[h.ancestors.length-1];p&&(h.place=p.position)}const m=h.place&&"start"in h.place?h.place.start:h.place;this.ancestors=h.ancestors||void 0,this.cause=h.cause||void 0,this.column=m?m.column:void 0,this.fatal=void 0,this.file="",this.message=c,this.line=m?m.line:void 0,this.name=wa(h.place)||"1:1",this.place=h.place||void 0,this.reason=this.message,this.ruleId=h.ruleId||void 0,this.source=h.source||void 0,this.stack=f&&h.cause&&typeof h.cause.stack=="string"?h.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}mt.prototype.file="";mt.prototype.name="";mt.prototype.reason="";mt.prototype.message="";mt.prototype.stack="";mt.prototype.column=void 0;mt.prototype.line=void 0;mt.prototype.ancestors=void 0;mt.prototype.cause=void 0;mt.prototype.fatal=void 0;mt.prototype.place=void 0;mt.prototype.ruleId=void 0;mt.prototype.source=void 0;const sc={}.hasOwnProperty,Db=new Map,Ab=/[A-Z]/g,Sb=new Set(["table","tbody","thead","tfoot","tr"]),Eb=new Set(["td","th"]),Mp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Tb(i,r){if(!r||r.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const a=r.filePath||void 0;let u;if(r.development){if(typeof r.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");u=Ob(a,r.jsxDEV)}else{if(typeof r.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof r.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");u=Bb(a,r.jsx,r.jsxs)}const c={Fragment:r.Fragment,ancestors:[],components:r.components||{},create:u,elementAttributeNameCase:r.elementAttributeNameCase||"react",evaluater:r.createEvaluater?r.createEvaluater():void 0,filePath:a,ignoreInvalidStyle:r.ignoreInvalidStyle||!1,passKeys:r.passKeys!==!1,passNode:r.passNode||!1,schema:r.space==="svg"?uc:hb,stylePropertyNameCase:r.stylePropertyNameCase||"dom",tableCellAlignToStyle:r.tableCellAlignToStyle!==!1},h=Bp(c,i,void 0);return h&&typeof h!="string"?h:c.create(i,c.Fragment,{children:h||void 0},void 0)}function Bp(i,r,a){if(r.type==="element")return kb(i,r,a);if(r.type==="mdxFlowExpression"||r.type==="mdxTextExpression")return xb(i,r);if(r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement")return Fb(i,r,a);if(r.type==="mdxjsEsm")return Cb(i,r);if(r.type==="root")return zb(i,r,a);if(r.type==="text")return Mb(i,r)}function kb(i,r,a){const u=i.schema;let c=u;r.tagName.toLowerCase()==="svg"&&u.space==="html"&&(c=uc,i.schema=c),i.ancestors.push(r);const h=_p(i,r.tagName,!1),f=_b(i,r);let m=fc(i,r);return Sb.has(r.tagName)&&(m=m.filter(function(p){return typeof p=="string"?!nb(p):!0})),Op(i,f,h,r),cc(f,m),i.ancestors.pop(),i.schema=u,i.create(r,h,f,a)}function xb(i,r){if(r.data&&r.data.estree&&i.evaluater){const u=r.data.estree.body[0];return u.type,i.evaluater.evaluateExpression(u.expression)}Sa(i,r.position)}function Cb(i,r){if(r.data&&r.data.estree&&i.evaluater)return i.evaluater.evaluateProgram(r.data.estree);Sa(i,r.position)}function Fb(i,r,a){const u=i.schema;let c=u;r.name==="svg"&&u.space==="html"&&(c=uc,i.schema=c),i.ancestors.push(r);const h=r.name===null?i.Fragment:_p(i,r.name,!0),f=Ib(i,r),m=fc(i,r);return Op(i,f,h,r),cc(f,m),i.ancestors.pop(),i.schema=u,i.create(r,h,f,a)}function zb(i,r,a){const u={};return cc(u,fc(i,r)),i.create(r,i.Fragment,u,a)}function Mb(i,r){return r.value}function Op(i,r,a,u){typeof a!="string"&&a!==i.Fragment&&i.passNode&&(r.node=u)}function cc(i,r){if(r.length>0){const a=r.length>1?r:r[0];a&&(i.children=a)}}function Bb(i,r,a){return u;function u(c,h,f,m){const d=Array.isArray(f.children)?a:r;return m?d(h,f,m):d(h,f)}}function Ob(i,r){return a;function a(u,c,h,f){const m=Array.isArray(h.children),p=oc(u);return r(c,h,f,m,{columnNumber:p?p.column-1:void 0,fileName:i,lineNumber:p?p.line:void 0},void 0)}}function _b(i,r){const a={};let u,c;for(c in r.properties)if(c!=="children"&&sc.call(r.properties,c)){const h=Rb(i,c,r.properties[c]);if(h){const[f,m]=h;i.tableCellAlignToStyle&&f==="align"&&typeof m=="string"&&Eb.has(r.tagName)?u=m:a[f]=m}}if(u){const h=a.style||(a.style={});h[i.stylePropertyNameCase==="css"?"text-align":"textAlign"]=u}return a}function Ib(i,r){const a={};for(const u of r.attributes)if(u.type==="mdxJsxExpressionAttribute")if(u.data&&u.data.estree&&i.evaluater){const h=u.data.estree.body[0];h.type;const f=h.expression;f.type;const m=f.properties[0];m.type,Object.assign(a,i.evaluater.evaluateExpression(m.argument))}else Sa(i,r.position);else{const c=u.name;let h;if(u.value&&typeof u.value=="object")if(u.value.data&&u.value.data.estree&&i.evaluater){const m=u.value.data.estree.body[0];m.type,h=i.evaluater.evaluateExpression(m.expression)}else Sa(i,r.position);else h=u.value===null?!0:u.value;a[c]=h}return a}function fc(i,r){const a=[];let u=-1;const c=i.passKeys?new Map:Db;for(;++u<r.children.length;){const h=r.children[u];let f;if(i.passKeys){const p=h.type==="element"?h.tagName:h.type==="mdxJsxFlowElement"||h.type==="mdxJsxTextElement"?h.name:void 0;if(p){const d=c.get(p)||0;f=p+"-"+d,c.set(p,d+1)}}const m=Bp(i,h,f);m!==void 0&&a.push(m)}return a}function Rb(i,r,a){const u=sb(i.schema,r);if(!(a==null||typeof a=="number"&&Number.isNaN(a))){if(Array.isArray(a)&&(a=u.commaSeparated?W0(a):db(a)),u.property==="style"){let c=typeof a=="object"?a:Nb(i,String(a));return i.stylePropertyNameCase==="css"&&(c=Ub(c)),["style",c]}return[i.elementAttributeNameCase==="react"&&u.space?rb[u.property]||u.property:u.attribute,a]}}function Nb(i,r){try{return vb(r,{reactCompat:!0})}catch(a){if(i.ignoreInvalidStyle)return{};const u=a,c=new mt("Cannot parse `style` attribute",{ancestors:i.ancestors,cause:u,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw c.file=i.filePath||void 0,c.url=Mp+"#cannot-parse-style-attribute",c}}function _p(i,r,a){let u;if(!a)u={type:"Literal",value:r};else if(r.includes(".")){const c=r.split(".");let h=-1,f;for(;++h<c.length;){const m=zm(c[h])?{type:"Identifier",name:c[h]}:{type:"Literal",value:c[h]};f=f?{type:"MemberExpression",object:f,property:m,computed:!!(h&&m.type==="Literal"),optional:!1}:m}u=f}else u=zm(r)&&!/^[a-z]/.test(r)?{type:"Identifier",name:r}:{type:"Literal",value:r};if(u.type==="Literal"){const c=u.value;return sc.call(i.components,c)?i.components[c]:c}if(i.evaluater)return i.evaluater.evaluateExpression(u);Sa(i)}function Sa(i,r){const a=new mt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:i.ancestors,place:r,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw a.file=i.filePath||void 0,a.url=Mp+"#cannot-handle-mdx-estrees-without-createevaluater",a}function Ub(i){const r={};let a;for(a in i)sc.call(i,a)&&(r[Lb(a)]=i[a]);return r}function Lb(i){let r=i.replace(Ab,jb);return r.slice(0,3)==="ms-"&&(r="-"+r),r}function jb(i){return"-"+i.toLowerCase()}const Bs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Hb={};function hc(i,r){const a=Hb,u=typeof a.includeImageAlt=="boolean"?a.includeImageAlt:!0,c=typeof a.includeHtml=="boolean"?a.includeHtml:!0;return Ip(i,u,c)}function Ip(i,r,a){if(qb(i)){if("value"in i)return i.type==="html"&&!a?"":i.value;if(r&&"alt"in i&&i.alt)return i.alt;if("children"in i)return jm(i.children,r,a)}return Array.isArray(i)?jm(i,r,a):""}function jm(i,r,a){const u=[];let c=-1;for(;++c<i.length;)u[c]=Ip(i[c],r,a);return u.join("")}function qb(i){return!!(i&&typeof i=="object")}const Hm=document.createElement("i");function dc(i){const r="&"+i+";";Hm.innerHTML=r;const a=Hm.textContent;return a.charCodeAt(a.length-1)===59&&i!=="semi"||a===r?!1:a}function Ut(i,r,a,u){const c=i.length;let h=0,f;if(r<0?r=-r>c?0:c+r:r=r>c?c:r,a=a>0?a:0,u.length<1e4)f=Array.from(u),f.unshift(r,a),i.splice(...f);else for(a&&i.splice(r,a);h<u.length;)f=u.slice(h,h+1e4),f.unshift(r,0),i.splice(...f),h+=1e4,r+=1e4}function Jt(i,r){return i.length>0?(Ut(i,i.length,0,r),i):r}const qm={}.hasOwnProperty;function Rp(i){const r={};let a=-1;for(;++a<i.length;)Gb(r,i[a]);return r}function Gb(i,r){let a;for(a in r){const c=(qm.call(i,a)?i[a]:void 0)||(i[a]={}),h=r[a];let f;if(h)for(f in h){qm.call(c,f)||(c[f]=[]);const m=h[f];Yb(c[f],Array.isArray(m)?m:m?[m]:[])}}}function Yb(i,r){let a=-1;const u=[];for(;++a<r.length;)(r[a].add==="after"?i:u).push(r[a]);Ut(i,0,0,u)}function Np(i,r){const a=Number.parseInt(i,r);return a<9||a===11||a>13&&a<32||a>126&&a<160||a>55295&&a<57344||a>64975&&a<65008||(a&65535)===65535||(a&65535)===65534||a>1114111?"�":String.fromCodePoint(a)}function tn(i){return i.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const bt=li(/[A-Za-z]/),dt=li(/[\dA-Za-z]/),Vb=li(/[#-'*+\--9=?A-Z^-~]/);function Pr(i){return i!==null&&(i<32||i===127)}const Ps=li(/\d/),Xb=li(/[\dA-Fa-f]/),Qb=li(/[!-/:-@[-`{-~]/);function ce(i){return i!==null&&i<-2}function qe(i){return i!==null&&(i<0||i===32)}function Ee(i){return i===-2||i===-1||i===32}const nu=li(new RegExp("\\p{P}|\\p{S}","u")),Ei=li(/\s/);function li(i){return r;function r(a){return a!==null&&a>-1&&i.test(String.fromCharCode(a))}}function wl(i){const r=[];let a=-1,u=0,c=0;for(;++a<i.length;){const h=i.charCodeAt(a);let f="";if(h===37&&dt(i.charCodeAt(a+1))&&dt(i.charCodeAt(a+2)))c=2;else if(h<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(h))||(f=String.fromCharCode(h));else if(h>55295&&h<57344){const m=i.charCodeAt(a+1);h<56320&&m>56319&&m<57344?(f=String.fromCharCode(h,m),c=1):f="�"}else f=String.fromCharCode(h);f&&(r.push(i.slice(u,a),encodeURIComponent(f)),u=a+c+1,f=""),c&&(a+=c,c=0)}return r.join("")+i.slice(u)}function Fe(i,r,a,u){const c=u?u-1:Number.POSITIVE_INFINITY;let h=0;return f;function f(p){return Ee(p)?(i.enter(a),m(p)):r(p)}function m(p){return Ee(p)&&h++<c?(i.consume(p),m):(i.exit(a),r(p))}}const Zb={tokenize:Kb};function Kb(i){const r=i.attempt(this.parser.constructs.contentInitial,u,c);let a;return r;function u(m){if(m===null){i.consume(m);return}return i.enter("lineEnding"),i.consume(m),i.exit("lineEnding"),Fe(i,r,"linePrefix")}function c(m){return i.enter("paragraph"),h(m)}function h(m){const p=i.enter("chunkText",{contentType:"text",previous:a});return a&&(a.next=p),a=p,f(m)}function f(m){if(m===null){i.exit("chunkText"),i.exit("paragraph"),i.consume(m);return}return ce(m)?(i.consume(m),i.exit("chunkText"),h):(i.consume(m),f)}}const Jb={tokenize:Wb},Gm={tokenize:Pb};function Wb(i){const r=this,a=[];let u=0,c,h,f;return m;function m(N){if(u<a.length){const P=a[u];return r.containerState=P[1],i.attempt(P[0].continuation,p,d)(N)}return d(N)}function p(N){if(u++,r.containerState._closeFlow){r.containerState._closeFlow=void 0,c&&H();const P=r.events.length;let te=P,R;for(;te--;)if(r.events[te][0]==="exit"&&r.events[te][1].type==="chunkFlow"){R=r.events[te][1].end;break}x(u);let Z=P;for(;Z<r.events.length;)r.events[Z][1].end={...R},Z++;return Ut(r.events,te+1,0,r.events.slice(P)),r.events.length=Z,d(N)}return m(N)}function d(N){if(u===a.length){if(!c)return D(N);if(c.currentConstruct&&c.currentConstruct.concrete)return C(N);r.interrupt=!!(c.currentConstruct&&!c._gfmTableDynamicInterruptHack)}return r.containerState={},i.check(Gm,b,y)(N)}function b(N){return c&&H(),x(u),D(N)}function y(N){return r.parser.lazy[r.now().line]=u!==a.length,f=r.now().offset,C(N)}function D(N){return r.containerState={},i.attempt(Gm,w,C)(N)}function w(N){return u++,a.push([r.currentConstruct,r.containerState]),D(N)}function C(N){if(N===null){c&&H(),x(0),i.consume(N);return}return c=c||r.parser.flow(r.now()),i.enter("chunkFlow",{_tokenizer:c,contentType:"flow",previous:h}),L(N)}function L(N){if(N===null){V(i.exit("chunkFlow"),!0),x(0),i.consume(N);return}return ce(N)?(i.consume(N),V(i.exit("chunkFlow")),u=0,r.interrupt=void 0,m):(i.consume(N),L)}function V(N,P){const te=r.sliceStream(N);if(P&&te.push(null),N.previous=h,h&&(h.next=N),h=N,c.defineSkip(N.start),c.write(te),r.parser.lazy[N.start.line]){let R=c.events.length;for(;R--;)if(c.events[R][1].start.offset<f&&(!c.events[R][1].end||c.events[R][1].end.offset>f))return;const Z=r.events.length;let se=Z,me,I;for(;se--;)if(r.events[se][0]==="exit"&&r.events[se][1].type==="chunkFlow"){if(me){I=r.events[se][1].end;break}me=!0}for(x(u),R=Z;R<r.events.length;)r.events[R][1].end={...I},R++;Ut(r.events,se+1,0,r.events.slice(Z)),r.events.length=R}}function x(N){let P=a.length;for(;P-- >N;){const te=a[P];r.containerState=te[1],te[0].exit.call(r,i)}a.length=N}function H(){c.write([null]),h=void 0,c=void 0,r.containerState._closeFlow=void 0}}function Pb(i,r,a){return Fe(i,i.attempt(this.parser.constructs.document,r,a),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function bl(i){if(i===null||qe(i)||Ei(i))return 1;if(nu(i))return 2}function iu(i,r,a){const u=[];let c=-1;for(;++c<i.length;){const h=i[c].resolveAll;h&&!u.includes(h)&&(r=h(r,a),u.push(h))}return r}const $s={name:"attention",resolveAll:$b,tokenize:e1};function $b(i,r){let a=-1,u,c,h,f,m,p,d,b;for(;++a<i.length;)if(i[a][0]==="enter"&&i[a][1].type==="attentionSequence"&&i[a][1]._close){for(u=a;u--;)if(i[u][0]==="exit"&&i[u][1].type==="attentionSequence"&&i[u][1]._open&&r.sliceSerialize(i[u][1]).charCodeAt(0)===r.sliceSerialize(i[a][1]).charCodeAt(0)){if((i[u][1]._close||i[a][1]._open)&&(i[a][1].end.offset-i[a][1].start.offset)%3&&!((i[u][1].end.offset-i[u][1].start.offset+i[a][1].end.offset-i[a][1].start.offset)%3))continue;p=i[u][1].end.offset-i[u][1].start.offset>1&&i[a][1].end.offset-i[a][1].start.offset>1?2:1;const y={...i[u][1].end},D={...i[a][1].start};Ym(y,-p),Ym(D,p),f={type:p>1?"strongSequence":"emphasisSequence",start:y,end:{...i[u][1].end}},m={type:p>1?"strongSequence":"emphasisSequence",start:{...i[a][1].start},end:D},h={type:p>1?"strongText":"emphasisText",start:{...i[u][1].end},end:{...i[a][1].start}},c={type:p>1?"strong":"emphasis",start:{...f.start},end:{...m.end}},i[u][1].end={...f.start},i[a][1].start={...m.end},d=[],i[u][1].end.offset-i[u][1].start.offset&&(d=Jt(d,[["enter",i[u][1],r],["exit",i[u][1],r]])),d=Jt(d,[["enter",c,r],["enter",f,r],["exit",f,r],["enter",h,r]]),d=Jt(d,iu(r.parser.constructs.insideSpan.null,i.slice(u+1,a),r)),d=Jt(d,[["exit",h,r],["enter",m,r],["exit",m,r],["exit",c,r]]),i[a][1].end.offset-i[a][1].start.offset?(b=2,d=Jt(d,[["enter",i[a][1],r],["exit",i[a][1],r]])):b=0,Ut(i,u-1,a-u+3,d),a=u+d.length-b-2;break}}for(a=-1;++a<i.length;)i[a][1].type==="attentionSequence"&&(i[a][1].type="data");return i}function e1(i,r){const a=this.parser.constructs.attentionMarkers.null,u=this.previous,c=bl(u);let h;return f;function f(p){return h=p,i.enter("attentionSequence"),m(p)}function m(p){if(p===h)return i.consume(p),m;const d=i.exit("attentionSequence"),b=bl(p),y=!b||b===2&&c||a.includes(p),D=!c||c===2&&b||a.includes(u);return d._open=!!(h===42?y:y&&(c||!D)),d._close=!!(h===42?D:D&&(b||!y)),r(p)}}function Ym(i,r){i.column+=r,i.offset+=r,i._bufferIndex+=r}const t1={name:"autolink",tokenize:n1};function n1(i,r,a){let u=0;return c;function c(w){return i.enter("autolink"),i.enter("autolinkMarker"),i.consume(w),i.exit("autolinkMarker"),i.enter("autolinkProtocol"),h}function h(w){return bt(w)?(i.consume(w),f):w===64?a(w):d(w)}function f(w){return w===43||w===45||w===46||dt(w)?(u=1,m(w)):d(w)}function m(w){return w===58?(i.consume(w),u=0,p):(w===43||w===45||w===46||dt(w))&&u++<32?(i.consume(w),m):(u=0,d(w))}function p(w){return w===62?(i.exit("autolinkProtocol"),i.enter("autolinkMarker"),i.consume(w),i.exit("autolinkMarker"),i.exit("autolink"),r):w===null||w===32||w===60||Pr(w)?a(w):(i.consume(w),p)}function d(w){return w===64?(i.consume(w),b):Vb(w)?(i.consume(w),d):a(w)}function b(w){return dt(w)?y(w):a(w)}function y(w){return w===46?(i.consume(w),u=0,b):w===62?(i.exit("autolinkProtocol").type="autolinkEmail",i.enter("autolinkMarker"),i.consume(w),i.exit("autolinkMarker"),i.exit("autolink"),r):D(w)}function D(w){if((w===45||dt(w))&&u++<63){const C=w===45?D:y;return i.consume(w),C}return a(w)}}const ka={partial:!0,tokenize:i1};function i1(i,r,a){return u;function u(h){return Ee(h)?Fe(i,c,"linePrefix")(h):c(h)}function c(h){return h===null||ce(h)?r(h):a(h)}}const Up={continuation:{tokenize:a1},exit:r1,name:"blockQuote",tokenize:l1};function l1(i,r,a){const u=this;return c;function c(f){if(f===62){const m=u.containerState;return m.open||(i.enter("blockQuote",{_container:!0}),m.open=!0),i.enter("blockQuotePrefix"),i.enter("blockQuoteMarker"),i.consume(f),i.exit("blockQuoteMarker"),h}return a(f)}function h(f){return Ee(f)?(i.enter("blockQuotePrefixWhitespace"),i.consume(f),i.exit("blockQuotePrefixWhitespace"),i.exit("blockQuotePrefix"),r):(i.exit("blockQuotePrefix"),r(f))}}function a1(i,r,a){const u=this;return c;function c(f){return Ee(f)?Fe(i,h,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(f):h(f)}function h(f){return i.attempt(Up,r,a)(f)}}function r1(i){i.exit("blockQuote")}const Lp={name:"characterEscape",tokenize:u1};function u1(i,r,a){return u;function u(h){return i.enter("characterEscape"),i.enter("escapeMarker"),i.consume(h),i.exit("escapeMarker"),c}function c(h){return Qb(h)?(i.enter("characterEscapeValue"),i.consume(h),i.exit("characterEscapeValue"),i.exit("characterEscape"),r):a(h)}}const jp={name:"characterReference",tokenize:o1};function o1(i,r,a){const u=this;let c=0,h,f;return m;function m(y){return i.enter("characterReference"),i.enter("characterReferenceMarker"),i.consume(y),i.exit("characterReferenceMarker"),p}function p(y){return y===35?(i.enter("characterReferenceMarkerNumeric"),i.consume(y),i.exit("characterReferenceMarkerNumeric"),d):(i.enter("characterReferenceValue"),h=31,f=dt,b(y))}function d(y){return y===88||y===120?(i.enter("characterReferenceMarkerHexadecimal"),i.consume(y),i.exit("characterReferenceMarkerHexadecimal"),i.enter("characterReferenceValue"),h=6,f=Xb,b):(i.enter("characterReferenceValue"),h=7,f=Ps,b(y))}function b(y){if(y===59&&c){const D=i.exit("characterReferenceValue");return f===dt&&!dc(u.sliceSerialize(D))?a(y):(i.enter("characterReferenceMarker"),i.consume(y),i.exit("characterReferenceMarker"),i.exit("characterReference"),r)}return f(y)&&c++<h?(i.consume(y),b):a(y)}}const Vm={partial:!0,tokenize:c1},Xm={concrete:!0,name:"codeFenced",tokenize:s1};function s1(i,r,a){const u=this,c={partial:!0,tokenize:te};let h=0,f=0,m;return p;function p(R){return d(R)}function d(R){const Z=u.events[u.events.length-1];return h=Z&&Z[1].type==="linePrefix"?Z[2].sliceSerialize(Z[1],!0).length:0,m=R,i.enter("codeFenced"),i.enter("codeFencedFence"),i.enter("codeFencedFenceSequence"),b(R)}function b(R){return R===m?(f++,i.consume(R),b):f<3?a(R):(i.exit("codeFencedFenceSequence"),Ee(R)?Fe(i,y,"whitespace")(R):y(R))}function y(R){return R===null||ce(R)?(i.exit("codeFencedFence"),u.interrupt?r(R):i.check(Vm,L,P)(R)):(i.enter("codeFencedFenceInfo"),i.enter("chunkString",{contentType:"string"}),D(R))}function D(R){return R===null||ce(R)?(i.exit("chunkString"),i.exit("codeFencedFenceInfo"),y(R)):Ee(R)?(i.exit("chunkString"),i.exit("codeFencedFenceInfo"),Fe(i,w,"whitespace")(R)):R===96&&R===m?a(R):(i.consume(R),D)}function w(R){return R===null||ce(R)?y(R):(i.enter("codeFencedFenceMeta"),i.enter("chunkString",{contentType:"string"}),C(R))}function C(R){return R===null||ce(R)?(i.exit("chunkString"),i.exit("codeFencedFenceMeta"),y(R)):R===96&&R===m?a(R):(i.consume(R),C)}function L(R){return i.attempt(c,P,V)(R)}function V(R){return i.enter("lineEnding"),i.consume(R),i.exit("lineEnding"),x}function x(R){return h>0&&Ee(R)?Fe(i,H,"linePrefix",h+1)(R):H(R)}function H(R){return R===null||ce(R)?i.check(Vm,L,P)(R):(i.enter("codeFlowValue"),N(R))}function N(R){return R===null||ce(R)?(i.exit("codeFlowValue"),H(R)):(i.consume(R),N)}function P(R){return i.exit("codeFenced"),r(R)}function te(R,Z,se){let me=0;return I;function I(K){return R.enter("lineEnding"),R.consume(K),R.exit("lineEnding"),ee}function ee(K){return R.enter("codeFencedFence"),Ee(K)?Fe(R,$,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(K):$(K)}function $(K){return K===m?(R.enter("codeFencedFenceSequence"),we(K)):se(K)}function we(K){return K===m?(me++,R.consume(K),we):me>=f?(R.exit("codeFencedFenceSequence"),Ee(K)?Fe(R,ie,"whitespace")(K):ie(K)):se(K)}function ie(K){return K===null||ce(K)?(R.exit("codeFencedFence"),Z(K)):se(K)}}}function c1(i,r,a){const u=this;return c;function c(f){return f===null?a(f):(i.enter("lineEnding"),i.consume(f),i.exit("lineEnding"),h)}function h(f){return u.parser.lazy[u.now().line]?a(f):r(f)}}const Os={name:"codeIndented",tokenize:h1},f1={partial:!0,tokenize:d1};function h1(i,r,a){const u=this;return c;function c(d){return i.enter("codeIndented"),Fe(i,h,"linePrefix",5)(d)}function h(d){const b=u.events[u.events.length-1];return b&&b[1].type==="linePrefix"&&b[2].sliceSerialize(b[1],!0).length>=4?f(d):a(d)}function f(d){return d===null?p(d):ce(d)?i.attempt(f1,f,p)(d):(i.enter("codeFlowValue"),m(d))}function m(d){return d===null||ce(d)?(i.exit("codeFlowValue"),f(d)):(i.consume(d),m)}function p(d){return i.exit("codeIndented"),r(d)}}function d1(i,r,a){const u=this;return c;function c(f){return u.parser.lazy[u.now().line]?a(f):ce(f)?(i.enter("lineEnding"),i.consume(f),i.exit("lineEnding"),c):Fe(i,h,"linePrefix",5)(f)}function h(f){const m=u.events[u.events.length-1];return m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?r(f):ce(f)?c(f):a(f)}}const m1={name:"codeText",previous:g1,resolve:p1,tokenize:y1};function p1(i){let r=i.length-4,a=3,u,c;if((i[a][1].type==="lineEnding"||i[a][1].type==="space")&&(i[r][1].type==="lineEnding"||i[r][1].type==="space")){for(u=a;++u<r;)if(i[u][1].type==="codeTextData"){i[a][1].type="codeTextPadding",i[r][1].type="codeTextPadding",a+=2,r-=2;break}}for(u=a-1,r++;++u<=r;)c===void 0?u!==r&&i[u][1].type!=="lineEnding"&&(c=u):(u===r||i[u][1].type==="lineEnding")&&(i[c][1].type="codeTextData",u!==c+2&&(i[c][1].end=i[u-1][1].end,i.splice(c+2,u-c-2),r-=u-c-2,u=c+2),c=void 0);return i}function g1(i){return i!==96||this.events[this.events.length-1][1].type==="characterEscape"}function y1(i,r,a){let u=0,c,h;return f;function f(y){return i.enter("codeText"),i.enter("codeTextSequence"),m(y)}function m(y){return y===96?(i.consume(y),u++,m):(i.exit("codeTextSequence"),p(y))}function p(y){return y===null?a(y):y===32?(i.enter("space"),i.consume(y),i.exit("space"),p):y===96?(h=i.enter("codeTextSequence"),c=0,b(y)):ce(y)?(i.enter("lineEnding"),i.consume(y),i.exit("lineEnding"),p):(i.enter("codeTextData"),d(y))}function d(y){return y===null||y===32||y===96||ce(y)?(i.exit("codeTextData"),p(y)):(i.consume(y),d)}function b(y){return y===96?(i.consume(y),c++,b):c===u?(i.exit("codeTextSequence"),i.exit("codeText"),r(y)):(h.type="codeTextData",d(y))}}class b1{constructor(r){this.left=r?[...r]:[],this.right=[]}get(r){if(r<0||r>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+r+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return r<this.left.length?this.left[r]:this.right[this.right.length-r+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(r,a){const u=a??Number.POSITIVE_INFINITY;return u<this.left.length?this.left.slice(r,u):r>this.left.length?this.right.slice(this.right.length-u+this.left.length,this.right.length-r+this.left.length).reverse():this.left.slice(r).concat(this.right.slice(this.right.length-u+this.left.length).reverse())}splice(r,a,u){const c=a||0;this.setCursor(Math.trunc(r));const h=this.right.splice(this.right.length-c,Number.POSITIVE_INFINITY);return u&&ba(this.left,u),h.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(r){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(r)}pushMany(r){this.setCursor(Number.POSITIVE_INFINITY),ba(this.left,r)}unshift(r){this.setCursor(0),this.right.push(r)}unshiftMany(r){this.setCursor(0),ba(this.right,r.reverse())}setCursor(r){if(!(r===this.left.length||r>this.left.length&&this.right.length===0||r<0&&this.left.length===0))if(r<this.left.length){const a=this.left.splice(r,Number.POSITIVE_INFINITY);ba(this.right,a.reverse())}else{const a=this.right.splice(this.left.length+this.right.length-r,Number.POSITIVE_INFINITY);ba(this.left,a.reverse())}}}function ba(i,r){let a=0;if(r.length<1e4)i.push(...r);else for(;a<r.length;)i.push(...r.slice(a,a+1e4)),a+=1e4}function Hp(i){const r={};let a=-1,u,c,h,f,m,p,d;const b=new b1(i);for(;++a<b.length;){for(;a in r;)a=r[a];if(u=b.get(a),a&&u[1].type==="chunkFlow"&&b.get(a-1)[1].type==="listItemPrefix"&&(p=u[1]._tokenizer.events,h=0,h<p.length&&p[h][1].type==="lineEndingBlank"&&(h+=2),h<p.length&&p[h][1].type==="content"))for(;++h<p.length&&p[h][1].type!=="content";)p[h][1].type==="chunkText"&&(p[h][1]._isInFirstContentOfListItem=!0,h++);if(u[0]==="enter")u[1].contentType&&(Object.assign(r,v1(b,a)),a=r[a],d=!0);else if(u[1]._container){for(h=a,c=void 0;h--;)if(f=b.get(h),f[1].type==="lineEnding"||f[1].type==="lineEndingBlank")f[0]==="enter"&&(c&&(b.get(c)[1].type="lineEndingBlank"),f[1].type="lineEnding",c=h);else if(!(f[1].type==="linePrefix"||f[1].type==="listItemIndent"))break;c&&(u[1].end={...b.get(c)[1].start},m=b.slice(c,a),m.unshift(u),b.splice(c,a-c+1,m))}}return Ut(i,0,Number.POSITIVE_INFINITY,b.slice(0)),!d}function v1(i,r){const a=i.get(r)[1],u=i.get(r)[2];let c=r-1;const h=[];let f=a._tokenizer;f||(f=u.parser[a.contentType](a.start),a._contentTypeTextTrailing&&(f._contentTypeTextTrailing=!0));const m=f.events,p=[],d={};let b,y,D=-1,w=a,C=0,L=0;const V=[L];for(;w;){for(;i.get(++c)[1]!==w;);h.push(c),w._tokenizer||(b=u.sliceStream(w),w.next||b.push(null),y&&f.defineSkip(w.start),w._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=!0),f.write(b),w._isInFirstContentOfListItem&&(f._gfmTasklistFirstContentOfListItem=void 0)),y=w,w=w.next}for(w=a;++D<m.length;)m[D][0]==="exit"&&m[D-1][0]==="enter"&&m[D][1].type===m[D-1][1].type&&m[D][1].start.line!==m[D][1].end.line&&(L=D+1,V.push(L),w._tokenizer=void 0,w.previous=void 0,w=w.next);for(f.events=[],w?(w._tokenizer=void 0,w.previous=void 0):V.pop(),D=V.length;D--;){const x=m.slice(V[D],V[D+1]),H=h.pop();p.push([H,H+x.length-1]),i.splice(H,2,x)}for(p.reverse(),D=-1;++D<p.length;)d[C+p[D][0]]=C+p[D][1],C+=p[D][1]-p[D][0]-1;return d}const w1={resolve:A1,tokenize:S1},D1={partial:!0,tokenize:E1};function A1(i){return Hp(i),i}function S1(i,r){let a;return u;function u(m){return i.enter("content"),a=i.enter("chunkContent",{contentType:"content"}),c(m)}function c(m){return m===null?h(m):ce(m)?i.check(D1,f,h)(m):(i.consume(m),c)}function h(m){return i.exit("chunkContent"),i.exit("content"),r(m)}function f(m){return i.consume(m),i.exit("chunkContent"),a.next=i.enter("chunkContent",{contentType:"content",previous:a}),a=a.next,c}}function E1(i,r,a){const u=this;return c;function c(f){return i.exit("chunkContent"),i.enter("lineEnding"),i.consume(f),i.exit("lineEnding"),Fe(i,h,"linePrefix")}function h(f){if(f===null||ce(f))return a(f);const m=u.events[u.events.length-1];return!u.parser.constructs.disable.null.includes("codeIndented")&&m&&m[1].type==="linePrefix"&&m[2].sliceSerialize(m[1],!0).length>=4?r(f):i.interrupt(u.parser.constructs.flow,a,r)(f)}}function qp(i,r,a,u,c,h,f,m,p){const d=p||Number.POSITIVE_INFINITY;let b=0;return y;function y(x){return x===60?(i.enter(u),i.enter(c),i.enter(h),i.consume(x),i.exit(h),D):x===null||x===32||x===41||Pr(x)?a(x):(i.enter(u),i.enter(f),i.enter(m),i.enter("chunkString",{contentType:"string"}),L(x))}function D(x){return x===62?(i.enter(h),i.consume(x),i.exit(h),i.exit(c),i.exit(u),r):(i.enter(m),i.enter("chunkString",{contentType:"string"}),w(x))}function w(x){return x===62?(i.exit("chunkString"),i.exit(m),D(x)):x===null||x===60||ce(x)?a(x):(i.consume(x),x===92?C:w)}function C(x){return x===60||x===62||x===92?(i.consume(x),w):w(x)}function L(x){return!b&&(x===null||x===41||qe(x))?(i.exit("chunkString"),i.exit(m),i.exit(f),i.exit(u),r(x)):b<d&&x===40?(i.consume(x),b++,L):x===41?(i.consume(x),b--,L):x===null||x===32||x===40||Pr(x)?a(x):(i.consume(x),x===92?V:L)}function V(x){return x===40||x===41||x===92?(i.consume(x),L):L(x)}}function Gp(i,r,a,u,c,h){const f=this;let m=0,p;return d;function d(w){return i.enter(u),i.enter(c),i.consume(w),i.exit(c),i.enter(h),b}function b(w){return m>999||w===null||w===91||w===93&&!p||w===94&&!m&&"_hiddenFootnoteSupport"in f.parser.constructs?a(w):w===93?(i.exit(h),i.enter(c),i.consume(w),i.exit(c),i.exit(u),r):ce(w)?(i.enter("lineEnding"),i.consume(w),i.exit("lineEnding"),b):(i.enter("chunkString",{contentType:"string"}),y(w))}function y(w){return w===null||w===91||w===93||ce(w)||m++>999?(i.exit("chunkString"),b(w)):(i.consume(w),p||(p=!Ee(w)),w===92?D:y)}function D(w){return w===91||w===92||w===93?(i.consume(w),m++,y):y(w)}}function Yp(i,r,a,u,c,h){let f;return m;function m(D){return D===34||D===39||D===40?(i.enter(u),i.enter(c),i.consume(D),i.exit(c),f=D===40?41:D,p):a(D)}function p(D){return D===f?(i.enter(c),i.consume(D),i.exit(c),i.exit(u),r):(i.enter(h),d(D))}function d(D){return D===f?(i.exit(h),p(f)):D===null?a(D):ce(D)?(i.enter("lineEnding"),i.consume(D),i.exit("lineEnding"),Fe(i,d,"linePrefix")):(i.enter("chunkString",{contentType:"string"}),b(D))}function b(D){return D===f||D===null||ce(D)?(i.exit("chunkString"),d(D)):(i.consume(D),D===92?y:b)}function y(D){return D===f||D===92?(i.consume(D),b):b(D)}}function Da(i,r){let a;return u;function u(c){return ce(c)?(i.enter("lineEnding"),i.consume(c),i.exit("lineEnding"),a=!0,u):Ee(c)?Fe(i,u,a?"linePrefix":"lineSuffix")(c):r(c)}}const T1={name:"definition",tokenize:x1},k1={partial:!0,tokenize:C1};function x1(i,r,a){const u=this;let c;return h;function h(w){return i.enter("definition"),f(w)}function f(w){return Gp.call(u,i,m,a,"definitionLabel","definitionLabelMarker","definitionLabelString")(w)}function m(w){return c=tn(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)),w===58?(i.enter("definitionMarker"),i.consume(w),i.exit("definitionMarker"),p):a(w)}function p(w){return qe(w)?Da(i,d)(w):d(w)}function d(w){return qp(i,b,a,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(w)}function b(w){return i.attempt(k1,y,y)(w)}function y(w){return Ee(w)?Fe(i,D,"whitespace")(w):D(w)}function D(w){return w===null||ce(w)?(i.exit("definition"),u.parser.defined.push(c),r(w)):a(w)}}function C1(i,r,a){return u;function u(m){return qe(m)?Da(i,c)(m):a(m)}function c(m){return Yp(i,h,a,"definitionTitle","definitionTitleMarker","definitionTitleString")(m)}function h(m){return Ee(m)?Fe(i,f,"whitespace")(m):f(m)}function f(m){return m===null||ce(m)?r(m):a(m)}}const F1={name:"hardBreakEscape",tokenize:z1};function z1(i,r,a){return u;function u(h){return i.enter("hardBreakEscape"),i.consume(h),c}function c(h){return ce(h)?(i.exit("hardBreakEscape"),r(h)):a(h)}}const M1={name:"headingAtx",resolve:B1,tokenize:O1};function B1(i,r){let a=i.length-2,u=3,c,h;return i[u][1].type==="whitespace"&&(u+=2),a-2>u&&i[a][1].type==="whitespace"&&(a-=2),i[a][1].type==="atxHeadingSequence"&&(u===a-1||a-4>u&&i[a-2][1].type==="whitespace")&&(a-=u+1===a?2:4),a>u&&(c={type:"atxHeadingText",start:i[u][1].start,end:i[a][1].end},h={type:"chunkText",start:i[u][1].start,end:i[a][1].end,contentType:"text"},Ut(i,u,a-u+1,[["enter",c,r],["enter",h,r],["exit",h,r],["exit",c,r]])),i}function O1(i,r,a){let u=0;return c;function c(b){return i.enter("atxHeading"),h(b)}function h(b){return i.enter("atxHeadingSequence"),f(b)}function f(b){return b===35&&u++<6?(i.consume(b),f):b===null||qe(b)?(i.exit("atxHeadingSequence"),m(b)):a(b)}function m(b){return b===35?(i.enter("atxHeadingSequence"),p(b)):b===null||ce(b)?(i.exit("atxHeading"),r(b)):Ee(b)?Fe(i,m,"whitespace")(b):(i.enter("atxHeadingText"),d(b))}function p(b){return b===35?(i.consume(b),p):(i.exit("atxHeadingSequence"),m(b))}function d(b){return b===null||b===35||qe(b)?(i.exit("atxHeadingText"),m(b)):(i.consume(b),d)}}const _1=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Qm=["pre","script","style","textarea"],I1={concrete:!0,name:"htmlFlow",resolveTo:U1,tokenize:L1},R1={partial:!0,tokenize:H1},N1={partial:!0,tokenize:j1};function U1(i){let r=i.length;for(;r--&&!(i[r][0]==="enter"&&i[r][1].type==="htmlFlow"););return r>1&&i[r-2][1].type==="linePrefix"&&(i[r][1].start=i[r-2][1].start,i[r+1][1].start=i[r-2][1].start,i.splice(r-2,2)),i}function L1(i,r,a){const u=this;let c,h,f,m,p;return d;function d(A){return b(A)}function b(A){return i.enter("htmlFlow"),i.enter("htmlFlowData"),i.consume(A),y}function y(A){return A===33?(i.consume(A),D):A===47?(i.consume(A),h=!0,L):A===63?(i.consume(A),c=3,u.interrupt?r:S):bt(A)?(i.consume(A),f=String.fromCharCode(A),V):a(A)}function D(A){return A===45?(i.consume(A),c=2,w):A===91?(i.consume(A),c=5,m=0,C):bt(A)?(i.consume(A),c=4,u.interrupt?r:S):a(A)}function w(A){return A===45?(i.consume(A),u.interrupt?r:S):a(A)}function C(A){const W="CDATA[";return A===W.charCodeAt(m++)?(i.consume(A),m===W.length?u.interrupt?r:$:C):a(A)}function L(A){return bt(A)?(i.consume(A),f=String.fromCharCode(A),V):a(A)}function V(A){if(A===null||A===47||A===62||qe(A)){const W=A===47,he=f.toLowerCase();return!W&&!h&&Qm.includes(he)?(c=1,u.interrupt?r(A):$(A)):_1.includes(f.toLowerCase())?(c=6,W?(i.consume(A),x):u.interrupt?r(A):$(A)):(c=7,u.interrupt&&!u.parser.lazy[u.now().line]?a(A):h?H(A):N(A))}return A===45||dt(A)?(i.consume(A),f+=String.fromCharCode(A),V):a(A)}function x(A){return A===62?(i.consume(A),u.interrupt?r:$):a(A)}function H(A){return Ee(A)?(i.consume(A),H):I(A)}function N(A){return A===47?(i.consume(A),I):A===58||A===95||bt(A)?(i.consume(A),P):Ee(A)?(i.consume(A),N):I(A)}function P(A){return A===45||A===46||A===58||A===95||dt(A)?(i.consume(A),P):te(A)}function te(A){return A===61?(i.consume(A),R):Ee(A)?(i.consume(A),te):N(A)}function R(A){return A===null||A===60||A===61||A===62||A===96?a(A):A===34||A===39?(i.consume(A),p=A,Z):Ee(A)?(i.consume(A),R):se(A)}function Z(A){return A===p?(i.consume(A),p=null,me):A===null||ce(A)?a(A):(i.consume(A),Z)}function se(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||qe(A)?te(A):(i.consume(A),se)}function me(A){return A===47||A===62||Ee(A)?N(A):a(A)}function I(A){return A===62?(i.consume(A),ee):a(A)}function ee(A){return A===null||ce(A)?$(A):Ee(A)?(i.consume(A),ee):a(A)}function $(A){return A===45&&c===2?(i.consume(A),O):A===60&&c===1?(i.consume(A),X):A===62&&c===4?(i.consume(A),T):A===63&&c===3?(i.consume(A),S):A===93&&c===5?(i.consume(A),ve):ce(A)&&(c===6||c===7)?(i.exit("htmlFlowData"),i.check(R1,j,we)(A)):A===null||ce(A)?(i.exit("htmlFlowData"),we(A)):(i.consume(A),$)}function we(A){return i.check(N1,ie,j)(A)}function ie(A){return i.enter("lineEnding"),i.consume(A),i.exit("lineEnding"),K}function K(A){return A===null||ce(A)?we(A):(i.enter("htmlFlowData"),$(A))}function O(A){return A===45?(i.consume(A),S):$(A)}function X(A){return A===47?(i.consume(A),f="",ae):$(A)}function ae(A){if(A===62){const W=f.toLowerCase();return Qm.includes(W)?(i.consume(A),T):$(A)}return bt(A)&&f.length<8?(i.consume(A),f+=String.fromCharCode(A),ae):$(A)}function ve(A){return A===93?(i.consume(A),S):$(A)}function S(A){return A===62?(i.consume(A),T):A===45&&c===2?(i.consume(A),S):$(A)}function T(A){return A===null||ce(A)?(i.exit("htmlFlowData"),j(A)):(i.consume(A),T)}function j(A){return i.exit("htmlFlow"),r(A)}}function j1(i,r,a){const u=this;return c;function c(f){return ce(f)?(i.enter("lineEnding"),i.consume(f),i.exit("lineEnding"),h):a(f)}function h(f){return u.parser.lazy[u.now().line]?a(f):r(f)}}function H1(i,r,a){return u;function u(c){return i.enter("lineEnding"),i.consume(c),i.exit("lineEnding"),i.attempt(ka,r,a)}}const q1={name:"htmlText",tokenize:G1};function G1(i,r,a){const u=this;let c,h,f;return m;function m(S){return i.enter("htmlText"),i.enter("htmlTextData"),i.consume(S),p}function p(S){return S===33?(i.consume(S),d):S===47?(i.consume(S),te):S===63?(i.consume(S),N):bt(S)?(i.consume(S),se):a(S)}function d(S){return S===45?(i.consume(S),b):S===91?(i.consume(S),h=0,C):bt(S)?(i.consume(S),H):a(S)}function b(S){return S===45?(i.consume(S),w):a(S)}function y(S){return S===null?a(S):S===45?(i.consume(S),D):ce(S)?(f=y,X(S)):(i.consume(S),y)}function D(S){return S===45?(i.consume(S),w):y(S)}function w(S){return S===62?O(S):S===45?D(S):y(S)}function C(S){const T="CDATA[";return S===T.charCodeAt(h++)?(i.consume(S),h===T.length?L:C):a(S)}function L(S){return S===null?a(S):S===93?(i.consume(S),V):ce(S)?(f=L,X(S)):(i.consume(S),L)}function V(S){return S===93?(i.consume(S),x):L(S)}function x(S){return S===62?O(S):S===93?(i.consume(S),x):L(S)}function H(S){return S===null||S===62?O(S):ce(S)?(f=H,X(S)):(i.consume(S),H)}function N(S){return S===null?a(S):S===63?(i.consume(S),P):ce(S)?(f=N,X(S)):(i.consume(S),N)}function P(S){return S===62?O(S):N(S)}function te(S){return bt(S)?(i.consume(S),R):a(S)}function R(S){return S===45||dt(S)?(i.consume(S),R):Z(S)}function Z(S){return ce(S)?(f=Z,X(S)):Ee(S)?(i.consume(S),Z):O(S)}function se(S){return S===45||dt(S)?(i.consume(S),se):S===47||S===62||qe(S)?me(S):a(S)}function me(S){return S===47?(i.consume(S),O):S===58||S===95||bt(S)?(i.consume(S),I):ce(S)?(f=me,X(S)):Ee(S)?(i.consume(S),me):O(S)}function I(S){return S===45||S===46||S===58||S===95||dt(S)?(i.consume(S),I):ee(S)}function ee(S){return S===61?(i.consume(S),$):ce(S)?(f=ee,X(S)):Ee(S)?(i.consume(S),ee):me(S)}function $(S){return S===null||S===60||S===61||S===62||S===96?a(S):S===34||S===39?(i.consume(S),c=S,we):ce(S)?(f=$,X(S)):Ee(S)?(i.consume(S),$):(i.consume(S),ie)}function we(S){return S===c?(i.consume(S),c=void 0,K):S===null?a(S):ce(S)?(f=we,X(S)):(i.consume(S),we)}function ie(S){return S===null||S===34||S===39||S===60||S===61||S===96?a(S):S===47||S===62||qe(S)?me(S):(i.consume(S),ie)}function K(S){return S===47||S===62||qe(S)?me(S):a(S)}function O(S){return S===62?(i.consume(S),i.exit("htmlTextData"),i.exit("htmlText"),r):a(S)}function X(S){return i.exit("htmlTextData"),i.enter("lineEnding"),i.consume(S),i.exit("lineEnding"),ae}function ae(S){return Ee(S)?Fe(i,ve,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(S):ve(S)}function ve(S){return i.enter("htmlTextData"),f(S)}}const mc={name:"labelEnd",resolveAll:Q1,resolveTo:Z1,tokenize:K1},Y1={tokenize:J1},V1={tokenize:W1},X1={tokenize:P1};function Q1(i){let r=-1;const a=[];for(;++r<i.length;){const u=i[r][1];if(a.push(i[r]),u.type==="labelImage"||u.type==="labelLink"||u.type==="labelEnd"){const c=u.type==="labelImage"?4:2;u.type="data",r+=c}}return i.length!==a.length&&Ut(i,0,i.length,a),i}function Z1(i,r){let a=i.length,u=0,c,h,f,m;for(;a--;)if(c=i[a][1],h){if(c.type==="link"||c.type==="labelLink"&&c._inactive)break;i[a][0]==="enter"&&c.type==="labelLink"&&(c._inactive=!0)}else if(f){if(i[a][0]==="enter"&&(c.type==="labelImage"||c.type==="labelLink")&&!c._balanced&&(h=a,c.type!=="labelLink")){u=2;break}}else c.type==="labelEnd"&&(f=a);const p={type:i[h][1].type==="labelLink"?"link":"image",start:{...i[h][1].start},end:{...i[i.length-1][1].end}},d={type:"label",start:{...i[h][1].start},end:{...i[f][1].end}},b={type:"labelText",start:{...i[h+u+2][1].end},end:{...i[f-2][1].start}};return m=[["enter",p,r],["enter",d,r]],m=Jt(m,i.slice(h+1,h+u+3)),m=Jt(m,[["enter",b,r]]),m=Jt(m,iu(r.parser.constructs.insideSpan.null,i.slice(h+u+4,f-3),r)),m=Jt(m,[["exit",b,r],i[f-2],i[f-1],["exit",d,r]]),m=Jt(m,i.slice(f+1)),m=Jt(m,[["exit",p,r]]),Ut(i,h,i.length,m),i}function K1(i,r,a){const u=this;let c=u.events.length,h,f;for(;c--;)if((u.events[c][1].type==="labelImage"||u.events[c][1].type==="labelLink")&&!u.events[c][1]._balanced){h=u.events[c][1];break}return m;function m(D){return h?h._inactive?y(D):(f=u.parser.defined.includes(tn(u.sliceSerialize({start:h.end,end:u.now()}))),i.enter("labelEnd"),i.enter("labelMarker"),i.consume(D),i.exit("labelMarker"),i.exit("labelEnd"),p):a(D)}function p(D){return D===40?i.attempt(Y1,b,f?b:y)(D):D===91?i.attempt(V1,b,f?d:y)(D):f?b(D):y(D)}function d(D){return i.attempt(X1,b,y)(D)}function b(D){return r(D)}function y(D){return h._balanced=!0,a(D)}}function J1(i,r,a){return u;function u(y){return i.enter("resource"),i.enter("resourceMarker"),i.consume(y),i.exit("resourceMarker"),c}function c(y){return qe(y)?Da(i,h)(y):h(y)}function h(y){return y===41?b(y):qp(i,f,m,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(y)}function f(y){return qe(y)?Da(i,p)(y):b(y)}function m(y){return a(y)}function p(y){return y===34||y===39||y===40?Yp(i,d,a,"resourceTitle","resourceTitleMarker","resourceTitleString")(y):b(y)}function d(y){return qe(y)?Da(i,b)(y):b(y)}function b(y){return y===41?(i.enter("resourceMarker"),i.consume(y),i.exit("resourceMarker"),i.exit("resource"),r):a(y)}}function W1(i,r,a){const u=this;return c;function c(m){return Gp.call(u,i,h,f,"reference","referenceMarker","referenceString")(m)}function h(m){return u.parser.defined.includes(tn(u.sliceSerialize(u.events[u.events.length-1][1]).slice(1,-1)))?r(m):a(m)}function f(m){return a(m)}}function P1(i,r,a){return u;function u(h){return i.enter("reference"),i.enter("referenceMarker"),i.consume(h),i.exit("referenceMarker"),c}function c(h){return h===93?(i.enter("referenceMarker"),i.consume(h),i.exit("referenceMarker"),i.exit("reference"),r):a(h)}}const $1={name:"labelStartImage",resolveAll:mc.resolveAll,tokenize:ev};function ev(i,r,a){const u=this;return c;function c(m){return i.enter("labelImage"),i.enter("labelImageMarker"),i.consume(m),i.exit("labelImageMarker"),h}function h(m){return m===91?(i.enter("labelMarker"),i.consume(m),i.exit("labelMarker"),i.exit("labelImage"),f):a(m)}function f(m){return m===94&&"_hiddenFootnoteSupport"in u.parser.constructs?a(m):r(m)}}const tv={name:"labelStartLink",resolveAll:mc.resolveAll,tokenize:nv};function nv(i,r,a){const u=this;return c;function c(f){return i.enter("labelLink"),i.enter("labelMarker"),i.consume(f),i.exit("labelMarker"),i.exit("labelLink"),h}function h(f){return f===94&&"_hiddenFootnoteSupport"in u.parser.constructs?a(f):r(f)}}const _s={name:"lineEnding",tokenize:iv};function iv(i,r){return a;function a(u){return i.enter("lineEnding"),i.consume(u),i.exit("lineEnding"),Fe(i,r,"linePrefix")}}const Wr={name:"thematicBreak",tokenize:lv};function lv(i,r,a){let u=0,c;return h;function h(d){return i.enter("thematicBreak"),f(d)}function f(d){return c=d,m(d)}function m(d){return d===c?(i.enter("thematicBreakSequence"),p(d)):u>=3&&(d===null||ce(d))?(i.exit("thematicBreak"),r(d)):a(d)}function p(d){return d===c?(i.consume(d),u++,p):(i.exit("thematicBreakSequence"),Ee(d)?Fe(i,m,"whitespace")(d):m(d))}}const xt={continuation:{tokenize:ov},exit:cv,name:"list",tokenize:uv},av={partial:!0,tokenize:fv},rv={partial:!0,tokenize:sv};function uv(i,r,a){const u=this,c=u.events[u.events.length-1];let h=c&&c[1].type==="linePrefix"?c[2].sliceSerialize(c[1],!0).length:0,f=0;return m;function m(w){const C=u.containerState.type||(w===42||w===43||w===45?"listUnordered":"listOrdered");if(C==="listUnordered"?!u.containerState.marker||w===u.containerState.marker:Ps(w)){if(u.containerState.type||(u.containerState.type=C,i.enter(C,{_container:!0})),C==="listUnordered")return i.enter("listItemPrefix"),w===42||w===45?i.check(Wr,a,d)(w):d(w);if(!u.interrupt||w===49)return i.enter("listItemPrefix"),i.enter("listItemValue"),p(w)}return a(w)}function p(w){return Ps(w)&&++f<10?(i.consume(w),p):(!u.interrupt||f<2)&&(u.containerState.marker?w===u.containerState.marker:w===41||w===46)?(i.exit("listItemValue"),d(w)):a(w)}function d(w){return i.enter("listItemMarker"),i.consume(w),i.exit("listItemMarker"),u.containerState.marker=u.containerState.marker||w,i.check(ka,u.interrupt?a:b,i.attempt(av,D,y))}function b(w){return u.containerState.initialBlankLine=!0,h++,D(w)}function y(w){return Ee(w)?(i.enter("listItemPrefixWhitespace"),i.consume(w),i.exit("listItemPrefixWhitespace"),D):a(w)}function D(w){return u.containerState.size=h+u.sliceSerialize(i.exit("listItemPrefix"),!0).length,r(w)}}function ov(i,r,a){const u=this;return u.containerState._closeFlow=void 0,i.check(ka,c,h);function c(m){return u.containerState.furtherBlankLines=u.containerState.furtherBlankLines||u.containerState.initialBlankLine,Fe(i,r,"listItemIndent",u.containerState.size+1)(m)}function h(m){return u.containerState.furtherBlankLines||!Ee(m)?(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,f(m)):(u.containerState.furtherBlankLines=void 0,u.containerState.initialBlankLine=void 0,i.attempt(rv,r,f)(m))}function f(m){return u.containerState._closeFlow=!0,u.interrupt=void 0,Fe(i,i.attempt(xt,r,a),"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m)}}function sv(i,r,a){const u=this;return Fe(i,c,"listItemIndent",u.containerState.size+1);function c(h){const f=u.events[u.events.length-1];return f&&f[1].type==="listItemIndent"&&f[2].sliceSerialize(f[1],!0).length===u.containerState.size?r(h):a(h)}}function cv(i){i.exit(this.containerState.type)}function fv(i,r,a){const u=this;return Fe(i,c,"listItemPrefixWhitespace",u.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function c(h){const f=u.events[u.events.length-1];return!Ee(h)&&f&&f[1].type==="listItemPrefixWhitespace"?r(h):a(h)}}const Zm={name:"setextUnderline",resolveTo:hv,tokenize:dv};function hv(i,r){let a=i.length,u,c,h;for(;a--;)if(i[a][0]==="enter"){if(i[a][1].type==="content"){u=a;break}i[a][1].type==="paragraph"&&(c=a)}else i[a][1].type==="content"&&i.splice(a,1),!h&&i[a][1].type==="definition"&&(h=a);const f={type:"setextHeading",start:{...i[u][1].start},end:{...i[i.length-1][1].end}};return i[c][1].type="setextHeadingText",h?(i.splice(c,0,["enter",f,r]),i.splice(h+1,0,["exit",i[u][1],r]),i[u][1].end={...i[h][1].end}):i[u][1]=f,i.push(["exit",f,r]),i}function dv(i,r,a){const u=this;let c;return h;function h(d){let b=u.events.length,y;for(;b--;)if(u.events[b][1].type!=="lineEnding"&&u.events[b][1].type!=="linePrefix"&&u.events[b][1].type!=="content"){y=u.events[b][1].type==="paragraph";break}return!u.parser.lazy[u.now().line]&&(u.interrupt||y)?(i.enter("setextHeadingLine"),c=d,f(d)):a(d)}function f(d){return i.enter("setextHeadingLineSequence"),m(d)}function m(d){return d===c?(i.consume(d),m):(i.exit("setextHeadingLineSequence"),Ee(d)?Fe(i,p,"lineSuffix")(d):p(d))}function p(d){return d===null||ce(d)?(i.exit("setextHeadingLine"),r(d)):a(d)}}const mv={tokenize:pv};function pv(i){const r=this,a=i.attempt(ka,u,i.attempt(this.parser.constructs.flowInitial,c,Fe(i,i.attempt(this.parser.constructs.flow,c,i.attempt(w1,c)),"linePrefix")));return a;function u(h){if(h===null){i.consume(h);return}return i.enter("lineEndingBlank"),i.consume(h),i.exit("lineEndingBlank"),r.currentConstruct=void 0,a}function c(h){if(h===null){i.consume(h);return}return i.enter("lineEnding"),i.consume(h),i.exit("lineEnding"),r.currentConstruct=void 0,a}}const gv={resolveAll:Xp()},yv=Vp("string"),bv=Vp("text");function Vp(i){return{resolveAll:Xp(i==="text"?vv:void 0),tokenize:r};function r(a){const u=this,c=this.parser.constructs[i],h=a.attempt(c,f,m);return f;function f(b){return d(b)?h(b):m(b)}function m(b){if(b===null){a.consume(b);return}return a.enter("data"),a.consume(b),p}function p(b){return d(b)?(a.exit("data"),h(b)):(a.consume(b),p)}function d(b){if(b===null)return!0;const y=c[b];let D=-1;if(y)for(;++D<y.length;){const w=y[D];if(!w.previous||w.previous.call(u,u.previous))return!0}return!1}}}function Xp(i){return r;function r(a,u){let c=-1,h;for(;++c<=a.length;)h===void 0?a[c]&&a[c][1].type==="data"&&(h=c,c++):(!a[c]||a[c][1].type!=="data")&&(c!==h+2&&(a[h][1].end=a[c-1][1].end,a.splice(h+2,c-h-2),c=h+2),h=void 0);return i?i(a,u):a}}function vv(i,r){let a=0;for(;++a<=i.length;)if((a===i.length||i[a][1].type==="lineEnding")&&i[a-1][1].type==="data"){const u=i[a-1][1],c=r.sliceStream(u);let h=c.length,f=-1,m=0,p;for(;h--;){const d=c[h];if(typeof d=="string"){for(f=d.length;d.charCodeAt(f-1)===32;)m++,f--;if(f)break;f=-1}else if(d===-2)p=!0,m++;else if(d!==-1){h++;break}}if(r._contentTypeTextTrailing&&a===i.length&&(m=0),m){const d={type:a===i.length||p||m<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:h?f:u.start._bufferIndex+f,_index:u.start._index+h,line:u.end.line,column:u.end.column-m,offset:u.end.offset-m},end:{...u.end}};u.end={...d.start},u.start.offset===u.end.offset?Object.assign(u,d):(i.splice(a,0,["enter",d,r],["exit",d,r]),a+=2)}a++}return i}const wv={42:xt,43:xt,45:xt,48:xt,49:xt,50:xt,51:xt,52:xt,53:xt,54:xt,55:xt,56:xt,57:xt,62:Up},Dv={91:T1},Av={[-2]:Os,[-1]:Os,32:Os},Sv={35:M1,42:Wr,45:[Zm,Wr],60:I1,61:Zm,95:Wr,96:Xm,126:Xm},Ev={38:jp,92:Lp},Tv={[-5]:_s,[-4]:_s,[-3]:_s,33:$1,38:jp,42:$s,60:[t1,q1],91:tv,92:[F1,Lp],93:mc,95:$s,96:m1},kv={null:[$s,gv]},xv={null:[42,95]},Cv={null:[]},Fv=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:xv,contentInitial:Dv,disable:Cv,document:wv,flow:Sv,flowInitial:Av,insideSpan:kv,string:Ev,text:Tv},Symbol.toStringTag,{value:"Module"}));function zv(i,r,a){let u={_bufferIndex:-1,_index:0,line:a&&a.line||1,column:a&&a.column||1,offset:a&&a.offset||0};const c={},h=[];let f=[],m=[];const p={attempt:Z(te),check:Z(R),consume:H,enter:N,exit:P,interrupt:Z(R,{interrupt:!0})},d={code:null,containerState:{},defineSkip:L,events:[],now:C,parser:i,previous:null,sliceSerialize:D,sliceStream:w,write:y};let b=r.tokenize.call(d,p);return r.resolveAll&&h.push(r),d;function y(ee){return f=Jt(f,ee),V(),f[f.length-1]!==null?[]:(se(r,0),d.events=iu(h,d.events,d),d.events)}function D(ee,$){return Bv(w(ee),$)}function w(ee){return Mv(f,ee)}function C(){const{_bufferIndex:ee,_index:$,line:we,column:ie,offset:K}=u;return{_bufferIndex:ee,_index:$,line:we,column:ie,offset:K}}function L(ee){c[ee.line]=ee.column,I()}function V(){let ee;for(;u._index<f.length;){const $=f[u._index];if(typeof $=="string")for(ee=u._index,u._bufferIndex<0&&(u._bufferIndex=0);u._index===ee&&u._bufferIndex<$.length;)x($.charCodeAt(u._bufferIndex));else x($)}}function x(ee){b=b(ee)}function H(ee){ce(ee)?(u.line++,u.column=1,u.offset+=ee===-3?2:1,I()):ee!==-1&&(u.column++,u.offset++),u._bufferIndex<0?u._index++:(u._bufferIndex++,u._bufferIndex===f[u._index].length&&(u._bufferIndex=-1,u._index++)),d.previous=ee}function N(ee,$){const we=$||{};return we.type=ee,we.start=C(),d.events.push(["enter",we,d]),m.push(we),we}function P(ee){const $=m.pop();return $.end=C(),d.events.push(["exit",$,d]),$}function te(ee,$){se(ee,$.from)}function R(ee,$){$.restore()}function Z(ee,$){return we;function we(ie,K,O){let X,ae,ve,S;return Array.isArray(ie)?j(ie):"tokenize"in ie?j([ie]):T(ie);function T(ue){return Te;function Te(Xe){const Re=Xe!==null&&ue[Xe],Lt=Xe!==null&&ue.null,sn=[...Array.isArray(Re)?Re:Re?[Re]:[],...Array.isArray(Lt)?Lt:Lt?[Lt]:[]];return j(sn)(Xe)}}function j(ue){return X=ue,ae=0,ue.length===0?O:A(ue[ae])}function A(ue){return Te;function Te(Xe){return S=me(),ve=ue,ue.partial||(d.currentConstruct=ue),ue.name&&d.parser.constructs.disable.null.includes(ue.name)?he():ue.tokenize.call($?Object.assign(Object.create(d),$):d,p,W,he)(Xe)}}function W(ue){return ee(ve,S),K}function he(ue){return S.restore(),++ae<X.length?A(X[ae]):O}}}function se(ee,$){ee.resolveAll&&!h.includes(ee)&&h.push(ee),ee.resolve&&Ut(d.events,$,d.events.length-$,ee.resolve(d.events.slice($),d)),ee.resolveTo&&(d.events=ee.resolveTo(d.events,d))}function me(){const ee=C(),$=d.previous,we=d.currentConstruct,ie=d.events.length,K=Array.from(m);return{from:ie,restore:O};function O(){u=ee,d.previous=$,d.currentConstruct=we,d.events.length=ie,m=K,I()}}function I(){u.line in c&&u.column<2&&(u.column=c[u.line],u.offset+=c[u.line]-1)}}function Mv(i,r){const a=r.start._index,u=r.start._bufferIndex,c=r.end._index,h=r.end._bufferIndex;let f;if(a===c)f=[i[a].slice(u,h)];else{if(f=i.slice(a,c),u>-1){const m=f[0];typeof m=="string"?f[0]=m.slice(u):f.shift()}h>0&&f.push(i[c].slice(0,h))}return f}function Bv(i,r){let a=-1;const u=[];let c;for(;++a<i.length;){const h=i[a];let f;if(typeof h=="string")f=h;else switch(h){case-5:{f="\r";break}case-4:{f=`
`;break}case-3:{f=`\r
`;break}case-2:{f=r?" ":"	";break}case-1:{if(!r&&c)continue;f=" ";break}default:f=String.fromCharCode(h)}c=h===-2,u.push(f)}return u.join("")}function Ov(i){const u={constructs:Rp([Fv,...(i||{}).extensions||[]]),content:c(Zb),defined:[],document:c(Jb),flow:c(mv),lazy:{},string:c(yv),text:c(bv)};return u;function c(h){return f;function f(m){return zv(u,h,m)}}}function _v(i){for(;!Hp(i););return i}const Km=/[\0\t\n\r]/g;function Iv(){let i=1,r="",a=!0,u;return c;function c(h,f,m){const p=[];let d,b,y,D,w;for(h=r+(typeof h=="string"?h.toString():new TextDecoder(f||void 0).decode(h)),y=0,r="",a&&(h.charCodeAt(0)===65279&&y++,a=void 0);y<h.length;){if(Km.lastIndex=y,d=Km.exec(h),D=d&&d.index!==void 0?d.index:h.length,w=h.charCodeAt(D),!d){r=h.slice(y);break}if(w===10&&y===D&&u)p.push(-3),u=void 0;else switch(u&&(p.push(-5),u=void 0),y<D&&(p.push(h.slice(y,D)),i+=D-y),w){case 0:{p.push(65533),i++;break}case 9:{for(b=Math.ceil(i/4)*4,p.push(-2);i++<b;)p.push(-1);break}case 10:{p.push(-4),i=1;break}default:u=!0,i=1}y=D+1}return m&&(u&&p.push(-5),r&&p.push(r),p.push(null)),p}}const Rv=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function Nv(i){return i.replace(Rv,Uv)}function Uv(i,r,a){if(r)return r;if(a.charCodeAt(0)===35){const c=a.charCodeAt(1),h=c===120||c===88;return Np(a.slice(h?2:1),h?16:10)}return dc(a)||i}const Qp={}.hasOwnProperty;function Lv(i,r,a){return r&&typeof r=="object"&&(a=r,r=void 0),jv(a)(_v(Ov(a).document().write(Iv()(i,r,!0))))}function jv(i){const r={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:h(Ci),autolinkProtocol:me,autolinkEmail:me,atxHeading:h(ki),blockQuote:h(Lt),characterEscape:me,characterReference:me,codeFenced:h(sn),codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:h(sn,f),codeText:h(Dl,f),codeTextData:me,data:me,codeFlowValue:me,definition:h(Ca),definitionDestinationString:f,definitionLabelString:f,definitionTitleString:f,emphasis:h(cn),hardBreakEscape:h(xi),hardBreakTrailing:h(xi),htmlFlow:h(Fa,f),htmlFlowData:me,htmlText:h(Fa,f),htmlTextData:me,image:h(za),label:f,link:h(Ci),listItem:h(Al),listItemValue:D,listOrdered:h(Fi,y),listUnordered:h(Fi),paragraph:h(ou),reference:A,referenceString:f,resourceDestinationString:f,resourceTitleString:f,setextHeading:h(ki),strong:h(su),thematicBreak:h(cu)},exit:{atxHeading:p(),atxHeadingSequence:te,autolink:p(),autolinkEmail:Re,autolinkProtocol:Xe,blockQuote:p(),characterEscapeValue:I,characterReferenceMarkerHexadecimal:he,characterReferenceMarkerNumeric:he,characterReferenceValue:ue,characterReference:Te,codeFenced:p(V),codeFencedFence:L,codeFencedFenceInfo:w,codeFencedFenceMeta:C,codeFlowValue:I,codeIndented:p(x),codeText:p(K),codeTextData:I,data:I,definition:p(),definitionDestinationString:P,definitionLabelString:H,definitionTitleString:N,emphasis:p(),hardBreakEscape:p($),hardBreakTrailing:p($),htmlFlow:p(we),htmlFlowData:I,htmlText:p(ie),htmlTextData:I,image:p(X),label:ve,labelText:ae,lineEnding:ee,link:p(O),listItem:p(),listOrdered:p(),listUnordered:p(),paragraph:p(),referenceString:W,resourceDestinationString:S,resourceTitleString:T,resource:j,setextHeading:p(se),setextHeadingLineSequence:Z,setextHeadingText:R,strong:p(),thematicBreak:p()}};Zp(r,(i||{}).mdastExtensions||[]);const a={};return u;function u(q){let J={type:"root",children:[]};const de={stack:[J],tokenStack:[],config:r,enter:m,exit:d,buffer:f,resume:b,data:a},De=[];let Oe=-1;for(;++Oe<q.length;)if(q[Oe][1].type==="listOrdered"||q[Oe][1].type==="listUnordered")if(q[Oe][0]==="enter")De.push(Oe);else{const Ft=De.pop();Oe=c(q,Ft,Oe)}for(Oe=-1;++Oe<q.length;){const Ft=r[q[Oe][0]];Qp.call(Ft,q[Oe][1].type)&&Ft[q[Oe][1].type].call(Object.assign({sliceSerialize:q[Oe][2].sliceSerialize},de),q[Oe][1])}if(de.tokenStack.length>0){const Ft=de.tokenStack[de.tokenStack.length-1];(Ft[1]||Jm).call(de,void 0,Ft[0])}for(J.position={start:ni(q.length>0?q[0][1].start:{line:1,column:1,offset:0}),end:ni(q.length>0?q[q.length-2][1].end:{line:1,column:1,offset:0})},Oe=-1;++Oe<r.transforms.length;)J=r.transforms[Oe](J)||J;return J}function c(q,J,de){let De=J-1,Oe=-1,Ft=!1,fn,gt,it,vt;for(;++De<=de;){const je=q[De];switch(je[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{je[0]==="enter"?Oe++:Oe--,vt=void 0;break}case"lineEndingBlank":{je[0]==="enter"&&(fn&&!vt&&!Oe&&!it&&(it=De),vt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:vt=void 0}if(!Oe&&je[0]==="enter"&&je[1].type==="listItemPrefix"||Oe===-1&&je[0]==="exit"&&(je[1].type==="listUnordered"||je[1].type==="listOrdered")){if(fn){let Mn=De;for(gt=void 0;Mn--;){const Wt=q[Mn];if(Wt[1].type==="lineEnding"||Wt[1].type==="lineEndingBlank"){if(Wt[0]==="exit")continue;gt&&(q[gt][1].type="lineEndingBlank",Ft=!0),Wt[1].type="lineEnding",gt=Mn}else if(!(Wt[1].type==="linePrefix"||Wt[1].type==="blockQuotePrefix"||Wt[1].type==="blockQuotePrefixWhitespace"||Wt[1].type==="blockQuoteMarker"||Wt[1].type==="listItemIndent"))break}it&&(!gt||it<gt)&&(fn._spread=!0),fn.end=Object.assign({},gt?q[gt][1].start:je[1].end),q.splice(gt||De,0,["exit",fn,je[2]]),De++,de++}if(je[1].type==="listItemPrefix"){const Mn={type:"listItem",_spread:!1,start:Object.assign({},je[1].start),end:void 0};fn=Mn,q.splice(De,0,["enter",Mn,je[2]]),De++,de++,it=void 0,vt=!0}}}return q[J][1]._spread=Ft,de}function h(q,J){return de;function de(De){m.call(this,q(De),De),J&&J.call(this,De)}}function f(){this.stack.push({type:"fragment",children:[]})}function m(q,J,de){this.stack[this.stack.length-1].children.push(q),this.stack.push(q),this.tokenStack.push([J,de||void 0]),q.position={start:ni(J.start),end:void 0}}function p(q){return J;function J(de){q&&q.call(this,de),d.call(this,de)}}function d(q,J){const de=this.stack.pop(),De=this.tokenStack.pop();if(De)De[0].type!==q.type&&(J?J.call(this,q,De[0]):(De[1]||Jm).call(this,q,De[0]));else throw new Error("Cannot close `"+q.type+"` ("+wa({start:q.start,end:q.end})+"): it’s not open");de.position.end=ni(q.end)}function b(){return hc(this.stack.pop())}function y(){this.data.expectingFirstListItemValue=!0}function D(q){if(this.data.expectingFirstListItemValue){const J=this.stack[this.stack.length-2];J.start=Number.parseInt(this.sliceSerialize(q),10),this.data.expectingFirstListItemValue=void 0}}function w(){const q=this.resume(),J=this.stack[this.stack.length-1];J.lang=q}function C(){const q=this.resume(),J=this.stack[this.stack.length-1];J.meta=q}function L(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function V(){const q=this.resume(),J=this.stack[this.stack.length-1];J.value=q.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function x(){const q=this.resume(),J=this.stack[this.stack.length-1];J.value=q.replace(/(\r?\n|\r)$/g,"")}function H(q){const J=this.resume(),de=this.stack[this.stack.length-1];de.label=J,de.identifier=tn(this.sliceSerialize(q)).toLowerCase()}function N(){const q=this.resume(),J=this.stack[this.stack.length-1];J.title=q}function P(){const q=this.resume(),J=this.stack[this.stack.length-1];J.url=q}function te(q){const J=this.stack[this.stack.length-1];if(!J.depth){const de=this.sliceSerialize(q).length;J.depth=de}}function R(){this.data.setextHeadingSlurpLineEnding=!0}function Z(q){const J=this.stack[this.stack.length-1];J.depth=this.sliceSerialize(q).codePointAt(0)===61?1:2}function se(){this.data.setextHeadingSlurpLineEnding=void 0}function me(q){const de=this.stack[this.stack.length-1].children;let De=de[de.length-1];(!De||De.type!=="text")&&(De=pt(),De.position={start:ni(q.start),end:void 0},de.push(De)),this.stack.push(De)}function I(q){const J=this.stack.pop();J.value+=this.sliceSerialize(q),J.position.end=ni(q.end)}function ee(q){const J=this.stack[this.stack.length-1];if(this.data.atHardBreak){const de=J.children[J.children.length-1];de.position.end=ni(q.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&r.canContainEols.includes(J.type)&&(me.call(this,q),I.call(this,q))}function $(){this.data.atHardBreak=!0}function we(){const q=this.resume(),J=this.stack[this.stack.length-1];J.value=q}function ie(){const q=this.resume(),J=this.stack[this.stack.length-1];J.value=q}function K(){const q=this.resume(),J=this.stack[this.stack.length-1];J.value=q}function O(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const J=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=J,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function X(){const q=this.stack[this.stack.length-1];if(this.data.inReference){const J=this.data.referenceType||"shortcut";q.type+="Reference",q.referenceType=J,delete q.url,delete q.title}else delete q.identifier,delete q.label;this.data.referenceType=void 0}function ae(q){const J=this.sliceSerialize(q),de=this.stack[this.stack.length-2];de.label=Nv(J),de.identifier=tn(J).toLowerCase()}function ve(){const q=this.stack[this.stack.length-1],J=this.resume(),de=this.stack[this.stack.length-1];if(this.data.inReference=!0,de.type==="link"){const De=q.children;de.children=De}else de.alt=J}function S(){const q=this.resume(),J=this.stack[this.stack.length-1];J.url=q}function T(){const q=this.resume(),J=this.stack[this.stack.length-1];J.title=q}function j(){this.data.inReference=void 0}function A(){this.data.referenceType="collapsed"}function W(q){const J=this.resume(),de=this.stack[this.stack.length-1];de.label=J,de.identifier=tn(this.sliceSerialize(q)).toLowerCase(),this.data.referenceType="full"}function he(q){this.data.characterReferenceType=q.type}function ue(q){const J=this.sliceSerialize(q),de=this.data.characterReferenceType;let De;de?(De=Np(J,de==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):De=dc(J);const Oe=this.stack[this.stack.length-1];Oe.value+=De}function Te(q){const J=this.stack.pop();J.position.end=ni(q.end)}function Xe(q){I.call(this,q);const J=this.stack[this.stack.length-1];J.url=this.sliceSerialize(q)}function Re(q){I.call(this,q);const J=this.stack[this.stack.length-1];J.url="mailto:"+this.sliceSerialize(q)}function Lt(){return{type:"blockquote",children:[]}}function sn(){return{type:"code",lang:null,meta:null,value:""}}function Dl(){return{type:"inlineCode",value:""}}function Ca(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function cn(){return{type:"emphasis",children:[]}}function ki(){return{type:"heading",depth:0,children:[]}}function xi(){return{type:"break"}}function Fa(){return{type:"html",value:""}}function za(){return{type:"image",title:null,url:"",alt:null}}function Ci(){return{type:"link",title:null,url:"",children:[]}}function Fi(q){return{type:"list",ordered:q.type==="listOrdered",start:null,spread:q._spread,children:[]}}function Al(q){return{type:"listItem",spread:q._spread,checked:null,children:[]}}function ou(){return{type:"paragraph",children:[]}}function su(){return{type:"strong",children:[]}}function pt(){return{type:"text",value:""}}function cu(){return{type:"thematicBreak"}}}function ni(i){return{line:i.line,column:i.column,offset:i.offset}}function Zp(i,r){let a=-1;for(;++a<r.length;){const u=r[a];Array.isArray(u)?Zp(i,u):Hv(i,u)}}function Hv(i,r){let a;for(a in r)if(Qp.call(r,a))switch(a){case"canContainEols":{const u=r[a];u&&i[a].push(...u);break}case"transforms":{const u=r[a];u&&i[a].push(...u);break}case"enter":case"exit":{const u=r[a];u&&Object.assign(i[a],u);break}}}function Jm(i,r){throw i?new Error("Cannot close `"+i.type+"` ("+wa({start:i.start,end:i.end})+"): a different token (`"+r.type+"`, "+wa({start:r.start,end:r.end})+") is open"):new Error("Cannot close document, a token (`"+r.type+"`, "+wa({start:r.start,end:r.end})+") is still open")}function qv(i){const r=this;r.parser=a;function a(u){return Lv(u,{...r.data("settings"),...i,extensions:r.data("micromarkExtensions")||[],mdastExtensions:r.data("fromMarkdownExtensions")||[]})}}function Gv(i,r){const a={type:"element",tagName:"blockquote",properties:{},children:i.wrap(i.all(r),!0)};return i.patch(r,a),i.applyData(r,a)}function Yv(i,r){const a={type:"element",tagName:"br",properties:{},children:[]};return i.patch(r,a),[i.applyData(r,a),{type:"text",value:`
`}]}function Vv(i,r){const a=r.value?r.value+`
`:"",u={},c=r.lang?r.lang.split(/\s+/):[];c.length>0&&(u.className=["language-"+c[0]]);let h={type:"element",tagName:"code",properties:u,children:[{type:"text",value:a}]};return r.meta&&(h.data={meta:r.meta}),i.patch(r,h),h=i.applyData(r,h),h={type:"element",tagName:"pre",properties:{},children:[h]},i.patch(r,h),h}function Xv(i,r){const a={type:"element",tagName:"del",properties:{},children:i.all(r)};return i.patch(r,a),i.applyData(r,a)}function Qv(i,r){const a={type:"element",tagName:"em",properties:{},children:i.all(r)};return i.patch(r,a),i.applyData(r,a)}function Zv(i,r){const a=typeof i.options.clobberPrefix=="string"?i.options.clobberPrefix:"user-content-",u=String(r.identifier).toUpperCase(),c=wl(u.toLowerCase()),h=i.footnoteOrder.indexOf(u);let f,m=i.footnoteCounts.get(u);m===void 0?(m=0,i.footnoteOrder.push(u),f=i.footnoteOrder.length):f=h+1,m+=1,i.footnoteCounts.set(u,m);const p={type:"element",tagName:"a",properties:{href:"#"+a+"fn-"+c,id:a+"fnref-"+c+(m>1?"-"+m:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(f)}]};i.patch(r,p);const d={type:"element",tagName:"sup",properties:{},children:[p]};return i.patch(r,d),i.applyData(r,d)}function Kv(i,r){const a={type:"element",tagName:"h"+r.depth,properties:{},children:i.all(r)};return i.patch(r,a),i.applyData(r,a)}function Jv(i,r){if(i.options.allowDangerousHtml){const a={type:"raw",value:r.value};return i.patch(r,a),i.applyData(r,a)}}function Kp(i,r){const a=r.referenceType;let u="]";if(a==="collapsed"?u+="[]":a==="full"&&(u+="["+(r.label||r.identifier)+"]"),r.type==="imageReference")return[{type:"text",value:"!["+r.alt+u}];const c=i.all(r),h=c[0];h&&h.type==="text"?h.value="["+h.value:c.unshift({type:"text",value:"["});const f=c[c.length-1];return f&&f.type==="text"?f.value+=u:c.push({type:"text",value:u}),c}function Wv(i,r){const a=String(r.identifier).toUpperCase(),u=i.definitionById.get(a);if(!u)return Kp(i,r);const c={src:wl(u.url||""),alt:r.alt};u.title!==null&&u.title!==void 0&&(c.title=u.title);const h={type:"element",tagName:"img",properties:c,children:[]};return i.patch(r,h),i.applyData(r,h)}function Pv(i,r){const a={src:wl(r.url)};r.alt!==null&&r.alt!==void 0&&(a.alt=r.alt),r.title!==null&&r.title!==void 0&&(a.title=r.title);const u={type:"element",tagName:"img",properties:a,children:[]};return i.patch(r,u),i.applyData(r,u)}function $v(i,r){const a={type:"text",value:r.value.replace(/\r?\n|\r/g," ")};i.patch(r,a);const u={type:"element",tagName:"code",properties:{},children:[a]};return i.patch(r,u),i.applyData(r,u)}function ew(i,r){const a=String(r.identifier).toUpperCase(),u=i.definitionById.get(a);if(!u)return Kp(i,r);const c={href:wl(u.url||"")};u.title!==null&&u.title!==void 0&&(c.title=u.title);const h={type:"element",tagName:"a",properties:c,children:i.all(r)};return i.patch(r,h),i.applyData(r,h)}function tw(i,r){const a={href:wl(r.url)};r.title!==null&&r.title!==void 0&&(a.title=r.title);const u={type:"element",tagName:"a",properties:a,children:i.all(r)};return i.patch(r,u),i.applyData(r,u)}function nw(i,r,a){const u=i.all(r),c=a?iw(a):Jp(r),h={},f=[];if(typeof r.checked=="boolean"){const b=u[0];let y;b&&b.type==="element"&&b.tagName==="p"?y=b:(y={type:"element",tagName:"p",properties:{},children:[]},u.unshift(y)),y.children.length>0&&y.children.unshift({type:"text",value:" "}),y.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:r.checked,disabled:!0},children:[]}),h.className=["task-list-item"]}let m=-1;for(;++m<u.length;){const b=u[m];(c||m!==0||b.type!=="element"||b.tagName!=="p")&&f.push({type:"text",value:`
`}),b.type==="element"&&b.tagName==="p"&&!c?f.push(...b.children):f.push(b)}const p=u[u.length-1];p&&(c||p.type!=="element"||p.tagName!=="p")&&f.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:h,children:f};return i.patch(r,d),i.applyData(r,d)}function iw(i){let r=!1;if(i.type==="list"){r=i.spread||!1;const a=i.children;let u=-1;for(;!r&&++u<a.length;)r=Jp(a[u])}return r}function Jp(i){const r=i.spread;return r??i.children.length>1}function lw(i,r){const a={},u=i.all(r);let c=-1;for(typeof r.start=="number"&&r.start!==1&&(a.start=r.start);++c<u.length;){const f=u[c];if(f.type==="element"&&f.tagName==="li"&&f.properties&&Array.isArray(f.properties.className)&&f.properties.className.includes("task-list-item")){a.className=["contains-task-list"];break}}const h={type:"element",tagName:r.ordered?"ol":"ul",properties:a,children:i.wrap(u,!0)};return i.patch(r,h),i.applyData(r,h)}function aw(i,r){const a={type:"element",tagName:"p",properties:{},children:i.all(r)};return i.patch(r,a),i.applyData(r,a)}function rw(i,r){const a={type:"root",children:i.wrap(i.all(r))};return i.patch(r,a),i.applyData(r,a)}function uw(i,r){const a={type:"element",tagName:"strong",properties:{},children:i.all(r)};return i.patch(r,a),i.applyData(r,a)}function ow(i,r){const a=i.all(r),u=a.shift(),c=[];if(u){const f={type:"element",tagName:"thead",properties:{},children:i.wrap([u],!0)};i.patch(r.children[0],f),c.push(f)}if(a.length>0){const f={type:"element",tagName:"tbody",properties:{},children:i.wrap(a,!0)},m=oc(r.children[1]),p=Fp(r.children[r.children.length-1]);m&&p&&(f.position={start:m,end:p}),c.push(f)}const h={type:"element",tagName:"table",properties:{},children:i.wrap(c,!0)};return i.patch(r,h),i.applyData(r,h)}function sw(i,r,a){const u=a?a.children:void 0,h=(u?u.indexOf(r):1)===0?"th":"td",f=a&&a.type==="table"?a.align:void 0,m=f?f.length:r.children.length;let p=-1;const d=[];for(;++p<m;){const y=r.children[p],D={},w=f?f[p]:void 0;w&&(D.align=w);let C={type:"element",tagName:h,properties:D,children:[]};y&&(C.children=i.all(y),i.patch(y,C),C=i.applyData(y,C)),d.push(C)}const b={type:"element",tagName:"tr",properties:{},children:i.wrap(d,!0)};return i.patch(r,b),i.applyData(r,b)}function cw(i,r){const a={type:"element",tagName:"td",properties:{},children:i.all(r)};return i.patch(r,a),i.applyData(r,a)}const Wm=9,Pm=32;function fw(i){const r=String(i),a=/\r?\n|\r/g;let u=a.exec(r),c=0;const h=[];for(;u;)h.push($m(r.slice(c,u.index),c>0,!0),u[0]),c=u.index+u[0].length,u=a.exec(r);return h.push($m(r.slice(c),c>0,!1)),h.join("")}function $m(i,r,a){let u=0,c=i.length;if(r){let h=i.codePointAt(u);for(;h===Wm||h===Pm;)u++,h=i.codePointAt(u)}if(a){let h=i.codePointAt(c-1);for(;h===Wm||h===Pm;)c--,h=i.codePointAt(c-1)}return c>u?i.slice(u,c):""}function hw(i,r){const a={type:"text",value:fw(String(r.value))};return i.patch(r,a),i.applyData(r,a)}function dw(i,r){const a={type:"element",tagName:"hr",properties:{},children:[]};return i.patch(r,a),i.applyData(r,a)}const mw={blockquote:Gv,break:Yv,code:Vv,delete:Xv,emphasis:Qv,footnoteReference:Zv,heading:Kv,html:Jv,imageReference:Wv,image:Pv,inlineCode:$v,linkReference:ew,link:tw,listItem:nw,list:lw,paragraph:aw,root:rw,strong:uw,table:ow,tableCell:cw,tableRow:sw,text:hw,thematicBreak:dw,toml:Qr,yaml:Qr,definition:Qr,footnoteDefinition:Qr};function Qr(){}const Wp=-1,lu=0,Aa=1,$r=2,pc=3,gc=4,yc=5,bc=6,Pp=7,$p=8,ep=typeof self=="object"?self:globalThis,pw=(i,r)=>{const a=(c,h)=>(i.set(h,c),c),u=c=>{if(i.has(c))return i.get(c);const[h,f]=r[c];switch(h){case lu:case Wp:return a(f,c);case Aa:{const m=a([],c);for(const p of f)m.push(u(p));return m}case $r:{const m=a({},c);for(const[p,d]of f)m[u(p)]=u(d);return m}case pc:return a(new Date(f),c);case gc:{const{source:m,flags:p}=f;return a(new RegExp(m,p),c)}case yc:{const m=a(new Map,c);for(const[p,d]of f)m.set(u(p),u(d));return m}case bc:{const m=a(new Set,c);for(const p of f)m.add(u(p));return m}case Pp:{const{name:m,message:p}=f;return a(new ep[m](p),c)}case $p:return a(BigInt(f),c);case"BigInt":return a(Object(BigInt(f)),c);case"ArrayBuffer":return a(new Uint8Array(f).buffer,f);case"DataView":{const{buffer:m}=new Uint8Array(f);return a(new DataView(m),f)}}return a(new ep[h](f),c)};return u},tp=i=>pw(new Map,i)(0),pl="",{toString:gw}={},{keys:yw}=Object,va=i=>{const r=typeof i;if(r!=="object"||!i)return[lu,r];const a=gw.call(i).slice(8,-1);switch(a){case"Array":return[Aa,pl];case"Object":return[$r,pl];case"Date":return[pc,pl];case"RegExp":return[gc,pl];case"Map":return[yc,pl];case"Set":return[bc,pl];case"DataView":return[Aa,a]}return a.includes("Array")?[Aa,a]:a.includes("Error")?[Pp,a]:[$r,a]},Zr=([i,r])=>i===lu&&(r==="function"||r==="symbol"),bw=(i,r,a,u)=>{const c=(f,m)=>{const p=u.push(f)-1;return a.set(m,p),p},h=f=>{if(a.has(f))return a.get(f);let[m,p]=va(f);switch(m){case lu:{let b=f;switch(p){case"bigint":m=$p,b=f.toString();break;case"function":case"symbol":if(i)throw new TypeError("unable to serialize "+p);b=null;break;case"undefined":return c([Wp],f)}return c([m,b],f)}case Aa:{if(p){let D=f;return p==="DataView"?D=new Uint8Array(f.buffer):p==="ArrayBuffer"&&(D=new Uint8Array(f)),c([p,[...D]],f)}const b=[],y=c([m,b],f);for(const D of f)b.push(h(D));return y}case $r:{if(p)switch(p){case"BigInt":return c([p,f.toString()],f);case"Boolean":case"Number":case"String":return c([p,f.valueOf()],f)}if(r&&"toJSON"in f)return h(f.toJSON());const b=[],y=c([m,b],f);for(const D of yw(f))(i||!Zr(va(f[D])))&&b.push([h(D),h(f[D])]);return y}case pc:return c([m,f.toISOString()],f);case gc:{const{source:b,flags:y}=f;return c([m,{source:b,flags:y}],f)}case yc:{const b=[],y=c([m,b],f);for(const[D,w]of f)(i||!(Zr(va(D))||Zr(va(w))))&&b.push([h(D),h(w)]);return y}case bc:{const b=[],y=c([m,b],f);for(const D of f)(i||!Zr(va(D)))&&b.push(h(D));return y}}const{message:d}=f;return c([m,{name:p,message:d}],f)};return h},np=(i,{json:r,lossy:a}={})=>{const u=[];return bw(!(r||a),!!r,new Map,u)(i),u},eu=typeof structuredClone=="function"?(i,r)=>r&&("json"in r||"lossy"in r)?tp(np(i,r)):structuredClone(i):(i,r)=>tp(np(i,r));function vw(i,r){const a=[{type:"text",value:"↩"}];return r>1&&a.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(r)}]}),a}function ww(i,r){return"Back to reference "+(i+1)+(r>1?"-"+r:"")}function Dw(i){const r=typeof i.options.clobberPrefix=="string"?i.options.clobberPrefix:"user-content-",a=i.options.footnoteBackContent||vw,u=i.options.footnoteBackLabel||ww,c=i.options.footnoteLabel||"Footnotes",h=i.options.footnoteLabelTagName||"h2",f=i.options.footnoteLabelProperties||{className:["sr-only"]},m=[];let p=-1;for(;++p<i.footnoteOrder.length;){const d=i.footnoteById.get(i.footnoteOrder[p]);if(!d)continue;const b=i.all(d),y=String(d.identifier).toUpperCase(),D=wl(y.toLowerCase());let w=0;const C=[],L=i.footnoteCounts.get(y);for(;L!==void 0&&++w<=L;){C.length>0&&C.push({type:"text",value:" "});let H=typeof a=="string"?a:a(p,w);typeof H=="string"&&(H={type:"text",value:H}),C.push({type:"element",tagName:"a",properties:{href:"#"+r+"fnref-"+D+(w>1?"-"+w:""),dataFootnoteBackref:"",ariaLabel:typeof u=="string"?u:u(p,w),className:["data-footnote-backref"]},children:Array.isArray(H)?H:[H]})}const V=b[b.length-1];if(V&&V.type==="element"&&V.tagName==="p"){const H=V.children[V.children.length-1];H&&H.type==="text"?H.value+=" ":V.children.push({type:"text",value:" "}),V.children.push(...C)}else b.push(...C);const x={type:"element",tagName:"li",properties:{id:r+"fn-"+D},children:i.wrap(b,!0)};i.patch(d,x),m.push(x)}if(m.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:h,properties:{...eu(f),id:"footnote-label"},children:[{type:"text",value:c}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:i.wrap(m,!0)},{type:"text",value:`
`}]}}const au=(function(i){if(i==null)return Tw;if(typeof i=="function")return ru(i);if(typeof i=="object")return Array.isArray(i)?Aw(i):Sw(i);if(typeof i=="string")return Ew(i);throw new Error("Expected function, string, or object as test")});function Aw(i){const r=[];let a=-1;for(;++a<i.length;)r[a]=au(i[a]);return ru(u);function u(...c){let h=-1;for(;++h<r.length;)if(r[h].apply(this,c))return!0;return!1}}function Sw(i){const r=i;return ru(a);function a(u){const c=u;let h;for(h in i)if(c[h]!==r[h])return!1;return!0}}function Ew(i){return ru(r);function r(a){return a&&a.type===i}}function ru(i){return r;function r(a,u,c){return!!(kw(a)&&i.call(this,a,typeof u=="number"?u:void 0,c||void 0))}}function Tw(){return!0}function kw(i){return i!==null&&typeof i=="object"&&"type"in i}const eg=[],xw=!0,ec=!1,Cw="skip";function tg(i,r,a,u){let c;typeof r=="function"&&typeof a!="function"?(u=a,a=r):c=r;const h=au(c),f=u?-1:1;m(i,void 0,[])();function m(p,d,b){const y=p&&typeof p=="object"?p:{};if(typeof y.type=="string"){const w=typeof y.tagName=="string"?y.tagName:typeof y.name=="string"?y.name:void 0;Object.defineProperty(D,"name",{value:"node ("+(p.type+(w?"<"+w+">":""))+")"})}return D;function D(){let w=eg,C,L,V;if((!r||h(p,d,b[b.length-1]||void 0))&&(w=Fw(a(p,b)),w[0]===ec))return w;if("children"in p&&p.children){const x=p;if(x.children&&w[0]!==Cw)for(L=(u?x.children.length:-1)+f,V=b.concat(x);L>-1&&L<x.children.length;){const H=x.children[L];if(C=m(H,L,V)(),C[0]===ec)return C;L=typeof C[1]=="number"?C[1]:L+f}}return w}}}function Fw(i){return Array.isArray(i)?i:typeof i=="number"?[xw,i]:i==null?eg:[i]}function uu(i,r,a,u){let c,h,f;typeof r=="function"&&typeof a!="function"?(h=void 0,f=r,c=a):(h=r,f=a,c=u),tg(i,h,m,c);function m(p,d){const b=d[d.length-1],y=b?b.children.indexOf(p):void 0;return f(p,y,b)}}const tc={}.hasOwnProperty,zw={};function Mw(i,r){const a=r||zw,u=new Map,c=new Map,h=new Map,f={...mw,...a.handlers},m={all:d,applyData:Ow,definitionById:u,footnoteById:c,footnoteCounts:h,footnoteOrder:[],handlers:f,one:p,options:a,patch:Bw,wrap:Iw};return uu(i,function(b){if(b.type==="definition"||b.type==="footnoteDefinition"){const y=b.type==="definition"?u:c,D=String(b.identifier).toUpperCase();y.has(D)||y.set(D,b)}}),m;function p(b,y){const D=b.type,w=m.handlers[D];if(tc.call(m.handlers,D)&&w)return w(m,b,y);if(m.options.passThrough&&m.options.passThrough.includes(D)){if("children"in b){const{children:L,...V}=b,x=eu(V);return x.children=m.all(b),x}return eu(b)}return(m.options.unknownHandler||_w)(m,b,y)}function d(b){const y=[];if("children"in b){const D=b.children;let w=-1;for(;++w<D.length;){const C=m.one(D[w],b);if(C){if(w&&D[w-1].type==="break"&&(!Array.isArray(C)&&C.type==="text"&&(C.value=ip(C.value)),!Array.isArray(C)&&C.type==="element")){const L=C.children[0];L&&L.type==="text"&&(L.value=ip(L.value))}Array.isArray(C)?y.push(...C):y.push(C)}}}return y}}function Bw(i,r){i.position&&(r.position=wb(i))}function Ow(i,r){let a=r;if(i&&i.data){const u=i.data.hName,c=i.data.hChildren,h=i.data.hProperties;if(typeof u=="string")if(a.type==="element")a.tagName=u;else{const f="children"in a?a.children:[a];a={type:"element",tagName:u,properties:{},children:f}}a.type==="element"&&h&&Object.assign(a.properties,eu(h)),"children"in a&&a.children&&c!==null&&c!==void 0&&(a.children=c)}return a}function _w(i,r){const a=r.data||{},u="value"in r&&!(tc.call(a,"hProperties")||tc.call(a,"hChildren"))?{type:"text",value:r.value}:{type:"element",tagName:"div",properties:{},children:i.all(r)};return i.patch(r,u),i.applyData(r,u)}function Iw(i,r){const a=[];let u=-1;for(r&&a.push({type:"text",value:`
`});++u<i.length;)u&&a.push({type:"text",value:`
`}),a.push(i[u]);return r&&i.length>0&&a.push({type:"text",value:`
`}),a}function ip(i){let r=0,a=i.charCodeAt(r);for(;a===9||a===32;)r++,a=i.charCodeAt(r);return i.slice(r)}function lp(i,r){const a=Mw(i,r),u=a.one(i,void 0),c=Dw(a),h=Array.isArray(u)?{type:"root",children:u}:u||{type:"root",children:[]};return c&&h.children.push({type:"text",value:`
`},c),h}function Rw(i,r){return i&&"run"in i?async function(a,u){const c=lp(a,{file:u,...r});await i.run(c,u)}:function(a,u){return lp(a,{file:u,...i||r})}}function ap(i){if(i)throw i}var Is,rp;function Nw(){if(rp)return Is;rp=1;var i=Object.prototype.hasOwnProperty,r=Object.prototype.toString,a=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=function(d){return typeof Array.isArray=="function"?Array.isArray(d):r.call(d)==="[object Array]"},h=function(d){if(!d||r.call(d)!=="[object Object]")return!1;var b=i.call(d,"constructor"),y=d.constructor&&d.constructor.prototype&&i.call(d.constructor.prototype,"isPrototypeOf");if(d.constructor&&!b&&!y)return!1;var D;for(D in d);return typeof D>"u"||i.call(d,D)},f=function(d,b){a&&b.name==="__proto__"?a(d,b.name,{enumerable:!0,configurable:!0,value:b.newValue,writable:!0}):d[b.name]=b.newValue},m=function(d,b){if(b==="__proto__")if(i.call(d,b)){if(u)return u(d,b).value}else return;return d[b]};return Is=function p(){var d,b,y,D,w,C,L=arguments[0],V=1,x=arguments.length,H=!1;for(typeof L=="boolean"&&(H=L,L=arguments[1]||{},V=2),(L==null||typeof L!="object"&&typeof L!="function")&&(L={});V<x;++V)if(d=arguments[V],d!=null)for(b in d)y=m(L,b),D=m(d,b),L!==D&&(H&&D&&(h(D)||(w=c(D)))?(w?(w=!1,C=y&&c(y)?y:[]):C=y&&h(y)?y:{},f(L,{name:b,newValue:p(H,C,D)})):typeof D<"u"&&f(L,{name:b,newValue:D}));return L},Is}var Uw=Nw();const Rs=Dp(Uw);function nc(i){if(typeof i!="object"||i===null)return!1;const r=Object.getPrototypeOf(i);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)}function Lw(){const i=[],r={run:a,use:u};return r;function a(...c){let h=-1;const f=c.pop();if(typeof f!="function")throw new TypeError("Expected function as last argument, not "+f);m(null,...c);function m(p,...d){const b=i[++h];let y=-1;if(p){f(p);return}for(;++y<c.length;)(d[y]===null||d[y]===void 0)&&(d[y]=c[y]);c=d,b?jw(b,m)(...d):f(null,...d)}}function u(c){if(typeof c!="function")throw new TypeError("Expected `middelware` to be a function, not "+c);return i.push(c),r}}function jw(i,r){let a;return u;function u(...f){const m=i.length>f.length;let p;m&&f.push(c);try{p=i.apply(this,f)}catch(d){const b=d;if(m&&a)throw b;return c(b)}m||(p&&p.then&&typeof p.then=="function"?p.then(h,c):p instanceof Error?c(p):h(p))}function c(f,...m){a||(a=!0,r(f,...m))}function h(f){c(null,f)}}const un={basename:Hw,dirname:qw,extname:Gw,join:Yw,sep:"/"};function Hw(i,r){if(r!==void 0&&typeof r!="string")throw new TypeError('"ext" argument must be a string');xa(i);let a=0,u=-1,c=i.length,h;if(r===void 0||r.length===0||r.length>i.length){for(;c--;)if(i.codePointAt(c)===47){if(h){a=c+1;break}}else u<0&&(h=!0,u=c+1);return u<0?"":i.slice(a,u)}if(r===i)return"";let f=-1,m=r.length-1;for(;c--;)if(i.codePointAt(c)===47){if(h){a=c+1;break}}else f<0&&(h=!0,f=c+1),m>-1&&(i.codePointAt(c)===r.codePointAt(m--)?m<0&&(u=c):(m=-1,u=f));return a===u?u=f:u<0&&(u=i.length),i.slice(a,u)}function qw(i){if(xa(i),i.length===0)return".";let r=-1,a=i.length,u;for(;--a;)if(i.codePointAt(a)===47){if(u){r=a;break}}else u||(u=!0);return r<0?i.codePointAt(0)===47?"/":".":r===1&&i.codePointAt(0)===47?"//":i.slice(0,r)}function Gw(i){xa(i);let r=i.length,a=-1,u=0,c=-1,h=0,f;for(;r--;){const m=i.codePointAt(r);if(m===47){if(f){u=r+1;break}continue}a<0&&(f=!0,a=r+1),m===46?c<0?c=r:h!==1&&(h=1):c>-1&&(h=-1)}return c<0||a<0||h===0||h===1&&c===a-1&&c===u+1?"":i.slice(c,a)}function Yw(...i){let r=-1,a;for(;++r<i.length;)xa(i[r]),i[r]&&(a=a===void 0?i[r]:a+"/"+i[r]);return a===void 0?".":Vw(a)}function Vw(i){xa(i);const r=i.codePointAt(0)===47;let a=Xw(i,!r);return a.length===0&&!r&&(a="."),a.length>0&&i.codePointAt(i.length-1)===47&&(a+="/"),r?"/"+a:a}function Xw(i,r){let a="",u=0,c=-1,h=0,f=-1,m,p;for(;++f<=i.length;){if(f<i.length)m=i.codePointAt(f);else{if(m===47)break;m=47}if(m===47){if(!(c===f-1||h===1))if(c!==f-1&&h===2){if(a.length<2||u!==2||a.codePointAt(a.length-1)!==46||a.codePointAt(a.length-2)!==46){if(a.length>2){if(p=a.lastIndexOf("/"),p!==a.length-1){p<0?(a="",u=0):(a=a.slice(0,p),u=a.length-1-a.lastIndexOf("/")),c=f,h=0;continue}}else if(a.length>0){a="",u=0,c=f,h=0;continue}}r&&(a=a.length>0?a+"/..":"..",u=2)}else a.length>0?a+="/"+i.slice(c+1,f):a=i.slice(c+1,f),u=f-c-1;c=f,h=0}else m===46&&h>-1?h++:h=-1}return a}function xa(i){if(typeof i!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(i))}const Qw={cwd:Zw};function Zw(){return"/"}function ic(i){return!!(i!==null&&typeof i=="object"&&"href"in i&&i.href&&"protocol"in i&&i.protocol&&i.auth===void 0)}function Kw(i){if(typeof i=="string")i=new URL(i);else if(!ic(i)){const r=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+i+"`");throw r.code="ERR_INVALID_ARG_TYPE",r}if(i.protocol!=="file:"){const r=new TypeError("The URL must be of scheme file");throw r.code="ERR_INVALID_URL_SCHEME",r}return Jw(i)}function Jw(i){if(i.hostname!==""){const u=new TypeError('File URL host must be "localhost" or empty on darwin');throw u.code="ERR_INVALID_FILE_URL_HOST",u}const r=i.pathname;let a=-1;for(;++a<r.length;)if(r.codePointAt(a)===37&&r.codePointAt(a+1)===50){const u=r.codePointAt(a+2);if(u===70||u===102){const c=new TypeError("File URL path must not include encoded / characters");throw c.code="ERR_INVALID_FILE_URL_PATH",c}}return decodeURIComponent(r)}const Ns=["history","path","basename","stem","extname","dirname"];class ng{constructor(r){let a;r?ic(r)?a={path:r}:typeof r=="string"||Ww(r)?a={value:r}:a=r:a={},this.cwd="cwd"in a?"":Qw.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let u=-1;for(;++u<Ns.length;){const h=Ns[u];h in a&&a[h]!==void 0&&a[h]!==null&&(this[h]=h==="history"?[...a[h]]:a[h])}let c;for(c in a)Ns.includes(c)||(this[c]=a[c])}get basename(){return typeof this.path=="string"?un.basename(this.path):void 0}set basename(r){Ls(r,"basename"),Us(r,"basename"),this.path=un.join(this.dirname||"",r)}get dirname(){return typeof this.path=="string"?un.dirname(this.path):void 0}set dirname(r){up(this.basename,"dirname"),this.path=un.join(r||"",this.basename)}get extname(){return typeof this.path=="string"?un.extname(this.path):void 0}set extname(r){if(Us(r,"extname"),up(this.dirname,"extname"),r){if(r.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(r.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=un.join(this.dirname,this.stem+(r||""))}get path(){return this.history[this.history.length-1]}set path(r){ic(r)&&(r=Kw(r)),Ls(r,"path"),this.path!==r&&this.history.push(r)}get stem(){return typeof this.path=="string"?un.basename(this.path,this.extname):void 0}set stem(r){Ls(r,"stem"),Us(r,"stem"),this.path=un.join(this.dirname||"",r+(this.extname||""))}fail(r,a,u){const c=this.message(r,a,u);throw c.fatal=!0,c}info(r,a,u){const c=this.message(r,a,u);return c.fatal=void 0,c}message(r,a,u){const c=new mt(r,a,u);return this.path&&(c.name=this.path+":"+c.name,c.file=this.path),c.fatal=!1,this.messages.push(c),c}toString(r){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(r||void 0).decode(this.value)}}function Us(i,r){if(i&&i.includes(un.sep))throw new Error("`"+r+"` cannot be a path: did not expect `"+un.sep+"`")}function Ls(i,r){if(!i)throw new Error("`"+r+"` cannot be empty")}function up(i,r){if(!i)throw new Error("Setting `"+r+"` requires `path` to be set too")}function Ww(i){return!!(i&&typeof i=="object"&&"byteLength"in i&&"byteOffset"in i)}const Pw=(function(i){const u=this.constructor.prototype,c=u[i],h=function(){return c.apply(h,arguments)};return Object.setPrototypeOf(h,u),h}),$w={}.hasOwnProperty;class vc extends Pw{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Lw()}copy(){const r=new vc;let a=-1;for(;++a<this.attachers.length;){const u=this.attachers[a];r.use(...u)}return r.data(Rs(!0,{},this.namespace)),r}data(r,a){return typeof r=="string"?arguments.length===2?(qs("data",this.frozen),this.namespace[r]=a,this):$w.call(this.namespace,r)&&this.namespace[r]||void 0:r?(qs("data",this.frozen),this.namespace=r,this):this.namespace}freeze(){if(this.frozen)return this;const r=this;for(;++this.freezeIndex<this.attachers.length;){const[a,...u]=this.attachers[this.freezeIndex];if(u[0]===!1)continue;u[0]===!0&&(u[0]=void 0);const c=a.call(r,...u);typeof c=="function"&&this.transformers.use(c)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(r){this.freeze();const a=Kr(r),u=this.parser||this.Parser;return js("parse",u),u(String(a),a)}process(r,a){const u=this;return this.freeze(),js("process",this.parser||this.Parser),Hs("process",this.compiler||this.Compiler),a?c(void 0,a):new Promise(c);function c(h,f){const m=Kr(r),p=u.parse(m);u.run(p,m,function(b,y,D){if(b||!y||!D)return d(b);const w=y,C=u.stringify(w,D);nD(C)?D.value=C:D.result=C,d(b,D)});function d(b,y){b||!y?f(b):h?h(y):a(void 0,y)}}}processSync(r){let a=!1,u;return this.freeze(),js("processSync",this.parser||this.Parser),Hs("processSync",this.compiler||this.Compiler),this.process(r,c),sp("processSync","process",a),u;function c(h,f){a=!0,ap(h),u=f}}run(r,a,u){op(r),this.freeze();const c=this.transformers;return!u&&typeof a=="function"&&(u=a,a=void 0),u?h(void 0,u):new Promise(h);function h(f,m){const p=Kr(a);c.run(r,p,d);function d(b,y,D){const w=y||r;b?m(b):f?f(w):u(void 0,w,D)}}}runSync(r,a){let u=!1,c;return this.run(r,a,h),sp("runSync","run",u),c;function h(f,m){ap(f),c=m,u=!0}}stringify(r,a){this.freeze();const u=Kr(a),c=this.compiler||this.Compiler;return Hs("stringify",c),op(r),c(r,u)}use(r,...a){const u=this.attachers,c=this.namespace;if(qs("use",this.frozen),r!=null)if(typeof r=="function")p(r,a);else if(typeof r=="object")Array.isArray(r)?m(r):f(r);else throw new TypeError("Expected usable value, not `"+r+"`");return this;function h(d){if(typeof d=="function")p(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[b,...y]=d;p(b,y)}else f(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function f(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");m(d.plugins),d.settings&&(c.settings=Rs(!0,c.settings,d.settings))}function m(d){let b=-1;if(d!=null)if(Array.isArray(d))for(;++b<d.length;){const y=d[b];h(y)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function p(d,b){let y=-1,D=-1;for(;++y<u.length;)if(u[y][0]===d){D=y;break}if(D===-1)u.push([d,...b]);else if(b.length>0){let[w,...C]=b;const L=u[D][1];nc(L)&&nc(w)&&(w=Rs(!0,L,w)),u[D]=[d,w,...C]}}}}const eD=new vc().freeze();function js(i,r){if(typeof r!="function")throw new TypeError("Cannot `"+i+"` without `parser`")}function Hs(i,r){if(typeof r!="function")throw new TypeError("Cannot `"+i+"` without `compiler`")}function qs(i,r){if(r)throw new Error("Cannot call `"+i+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function op(i){if(!nc(i)||typeof i.type!="string")throw new TypeError("Expected node, got `"+i+"`")}function sp(i,r,a){if(!a)throw new Error("`"+i+"` finished async. Use `"+r+"` instead")}function Kr(i){return tD(i)?i:new ng(i)}function tD(i){return!!(i&&typeof i=="object"&&"message"in i&&"messages"in i)}function nD(i){return typeof i=="string"||iD(i)}function iD(i){return!!(i&&typeof i=="object"&&"byteLength"in i&&"byteOffset"in i)}const lD="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",cp=[],fp={allowDangerousHtml:!0},aD=/^(https?|ircs?|mailto|xmpp)$/i,rD=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function uD(i){const r=oD(i),a=sD(i);return cD(r.runSync(r.parse(a),a),i)}function oD(i){const r=i.rehypePlugins||cp,a=i.remarkPlugins||cp,u=i.remarkRehypeOptions?{...i.remarkRehypeOptions,...fp}:fp;return eD().use(qv).use(a).use(Rw,u).use(r)}function sD(i){const r=i.children||"",a=new ng;return typeof r=="string"&&(a.value=r),a}function cD(i,r){const a=r.allowedElements,u=r.allowElement,c=r.components,h=r.disallowedElements,f=r.skipHtml,m=r.unwrapDisallowed,p=r.urlTransform||fD;for(const b of rD)Object.hasOwn(r,b.from)&&(""+b.from+(b.to?"use `"+b.to+"` instead":"remove it")+lD+b.id,void 0);return uu(i,d),Tb(i,{Fragment:re.Fragment,components:c,ignoreInvalidStyle:!0,jsx:re.jsx,jsxs:re.jsxs,passKeys:!0,passNode:!0});function d(b,y,D){if(b.type==="raw"&&D&&typeof y=="number")return f?D.children.splice(y,1):D.children[y]={type:"text",value:b.value},y;if(b.type==="element"){let w;for(w in Bs)if(Object.hasOwn(Bs,w)&&Object.hasOwn(b.properties,w)){const C=b.properties[w],L=Bs[w];(L===null||L.includes(b.tagName))&&(b.properties[w]=p(String(C||""),w,b))}}if(b.type==="element"){let w=a?!a.includes(b.tagName):h?h.includes(b.tagName):!1;if(!w&&u&&typeof y=="number"&&(w=!u(b,y,D)),w&&D&&typeof y=="number")return m&&b.children?D.children.splice(y,1,...b.children):D.children.splice(y,1),y}}}function fD(i){const r=i.indexOf(":"),a=i.indexOf("?"),u=i.indexOf("#"),c=i.indexOf("/");return r===-1||c!==-1&&r>c||a!==-1&&r>a||u!==-1&&r>u||aD.test(i.slice(0,r))?i:""}function hp(i,r){const a=String(i);if(typeof r!="string")throw new TypeError("Expected character");let u=0,c=a.indexOf(r);for(;c!==-1;)u++,c=a.indexOf(r,c+r.length);return u}function hD(i){if(typeof i!="string")throw new TypeError("Expected a string");return i.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function dD(i,r,a){const c=au((a||{}).ignore||[]),h=mD(r);let f=-1;for(;++f<h.length;)tg(i,"text",m);function m(d,b){let y=-1,D;for(;++y<b.length;){const w=b[y],C=D?D.children:void 0;if(c(w,C?C.indexOf(w):void 0,D))return;D=w}if(D)return p(d,b)}function p(d,b){const y=b[b.length-1],D=h[f][0],w=h[f][1];let C=0;const V=y.children.indexOf(d);let x=!1,H=[];D.lastIndex=0;let N=D.exec(d.value);for(;N;){const P=N.index,te={index:N.index,input:N.input,stack:[...b,d]};let R=w(...N,te);if(typeof R=="string"&&(R=R.length>0?{type:"text",value:R}:void 0),R===!1?D.lastIndex=P+1:(C!==P&&H.push({type:"text",value:d.value.slice(C,P)}),Array.isArray(R)?H.push(...R):R&&H.push(R),C=P+N[0].length,x=!0),!D.global)break;N=D.exec(d.value)}return x?(C<d.value.length&&H.push({type:"text",value:d.value.slice(C)}),y.children.splice(V,1,...H)):H=[d],V+H.length}}function mD(i){const r=[];if(!Array.isArray(i))throw new TypeError("Expected find and replace tuple or list of tuples");const a=!i[0]||Array.isArray(i[0])?i:[i];let u=-1;for(;++u<a.length;){const c=a[u];r.push([pD(c[0]),gD(c[1])])}return r}function pD(i){return typeof i=="string"?new RegExp(hD(i),"g"):i}function gD(i){return typeof i=="function"?i:function(){return i}}const Gs="phrasing",Ys=["autolink","link","image","label"];function yD(){return{transforms:[ED],enter:{literalAutolink:vD,literalAutolinkEmail:Vs,literalAutolinkHttp:Vs,literalAutolinkWww:Vs},exit:{literalAutolink:SD,literalAutolinkEmail:AD,literalAutolinkHttp:wD,literalAutolinkWww:DD}}}function bD(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Gs,notInConstruct:Ys},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Gs,notInConstruct:Ys},{character:":",before:"[ps]",after:"\\/",inConstruct:Gs,notInConstruct:Ys}]}}function vD(i){this.enter({type:"link",title:null,url:"",children:[]},i)}function Vs(i){this.config.enter.autolinkProtocol.call(this,i)}function wD(i){this.config.exit.autolinkProtocol.call(this,i)}function DD(i){this.config.exit.data.call(this,i);const r=this.stack[this.stack.length-1];r.type,r.url="http://"+this.sliceSerialize(i)}function AD(i){this.config.exit.autolinkEmail.call(this,i)}function SD(i){this.exit(i)}function ED(i){dD(i,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,TD],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),kD]],{ignore:["link","linkReference"]})}function TD(i,r,a,u,c){let h="";if(!ig(c)||(/^w/i.test(r)&&(a=r+a,r="",h="http://"),!xD(a)))return!1;const f=CD(a+u);if(!f[0])return!1;const m={type:"link",title:null,url:h+r+f[0],children:[{type:"text",value:r+f[0]}]};return f[1]?[m,{type:"text",value:f[1]}]:m}function kD(i,r,a,u){return!ig(u,!0)||/[-\d_]$/.test(a)?!1:{type:"link",title:null,url:"mailto:"+r+"@"+a,children:[{type:"text",value:r+"@"+a}]}}function xD(i){const r=i.split(".");return!(r.length<2||r[r.length-1]&&(/_/.test(r[r.length-1])||!/[a-zA-Z\d]/.test(r[r.length-1]))||r[r.length-2]&&(/_/.test(r[r.length-2])||!/[a-zA-Z\d]/.test(r[r.length-2])))}function CD(i){const r=/[!"&'),.:;<>?\]}]+$/.exec(i);if(!r)return[i,void 0];i=i.slice(0,r.index);let a=r[0],u=a.indexOf(")");const c=hp(i,"(");let h=hp(i,")");for(;u!==-1&&c>h;)i+=a.slice(0,u+1),a=a.slice(u+1),u=a.indexOf(")"),h++;return[i,a]}function ig(i,r){const a=i.input.charCodeAt(i.index-1);return(i.index===0||Ei(a)||nu(a))&&(!r||a!==47)}lg.peek=ND;function FD(){this.buffer()}function zD(i){this.enter({type:"footnoteReference",identifier:"",label:""},i)}function MD(){this.buffer()}function BD(i){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},i)}function OD(i){const r=this.resume(),a=this.stack[this.stack.length-1];a.type,a.identifier=tn(this.sliceSerialize(i)).toLowerCase(),a.label=r}function _D(i){this.exit(i)}function ID(i){const r=this.resume(),a=this.stack[this.stack.length-1];a.type,a.identifier=tn(this.sliceSerialize(i)).toLowerCase(),a.label=r}function RD(i){this.exit(i)}function ND(){return"["}function lg(i,r,a,u){const c=a.createTracker(u);let h=c.move("[^");const f=a.enter("footnoteReference"),m=a.enter("reference");return h+=c.move(a.safe(a.associationId(i),{after:"]",before:h})),m(),f(),h+=c.move("]"),h}function UD(){return{enter:{gfmFootnoteCallString:FD,gfmFootnoteCall:zD,gfmFootnoteDefinitionLabelString:MD,gfmFootnoteDefinition:BD},exit:{gfmFootnoteCallString:OD,gfmFootnoteCall:_D,gfmFootnoteDefinitionLabelString:ID,gfmFootnoteDefinition:RD}}}function LD(i){let r=!1;return i&&i.firstLineBlank&&(r=!0),{handlers:{footnoteDefinition:a,footnoteReference:lg},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function a(u,c,h,f){const m=h.createTracker(f);let p=m.move("[^");const d=h.enter("footnoteDefinition"),b=h.enter("label");return p+=m.move(h.safe(h.associationId(u),{before:p,after:"]"})),b(),p+=m.move("]:"),u.children&&u.children.length>0&&(m.shift(4),p+=m.move((r?`
`:" ")+h.indentLines(h.containerFlow(u,m.current()),r?ag:jD))),d(),p}}function jD(i,r,a){return r===0?i:ag(i,r,a)}function ag(i,r,a){return(a?"":"    ")+i}const HD=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];rg.peek=XD;function qD(){return{canContainEols:["delete"],enter:{strikethrough:YD},exit:{strikethrough:VD}}}function GD(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:HD}],handlers:{delete:rg}}}function YD(i){this.enter({type:"delete",children:[]},i)}function VD(i){this.exit(i)}function rg(i,r,a,u){const c=a.createTracker(u),h=a.enter("strikethrough");let f=c.move("~~");return f+=a.containerPhrasing(i,{...c.current(),before:f,after:"~"}),f+=c.move("~~"),h(),f}function XD(){return"~"}function QD(i){return i.length}function ZD(i,r){const a=r||{},u=(a.align||[]).concat(),c=a.stringLength||QD,h=[],f=[],m=[],p=[];let d=0,b=-1;for(;++b<i.length;){const L=[],V=[];let x=-1;for(i[b].length>d&&(d=i[b].length);++x<i[b].length;){const H=KD(i[b][x]);if(a.alignDelimiters!==!1){const N=c(H);V[x]=N,(p[x]===void 0||N>p[x])&&(p[x]=N)}L.push(H)}f[b]=L,m[b]=V}let y=-1;if(typeof u=="object"&&"length"in u)for(;++y<d;)h[y]=dp(u[y]);else{const L=dp(u);for(;++y<d;)h[y]=L}y=-1;const D=[],w=[];for(;++y<d;){const L=h[y];let V="",x="";L===99?(V=":",x=":"):L===108?V=":":L===114&&(x=":");let H=a.alignDelimiters===!1?1:Math.max(1,p[y]-V.length-x.length);const N=V+"-".repeat(H)+x;a.alignDelimiters!==!1&&(H=V.length+H+x.length,H>p[y]&&(p[y]=H),w[y]=H),D[y]=N}f.splice(1,0,D),m.splice(1,0,w),b=-1;const C=[];for(;++b<f.length;){const L=f[b],V=m[b];y=-1;const x=[];for(;++y<d;){const H=L[y]||"";let N="",P="";if(a.alignDelimiters!==!1){const te=p[y]-(V[y]||0),R=h[y];R===114?N=" ".repeat(te):R===99?te%2?(N=" ".repeat(te/2+.5),P=" ".repeat(te/2-.5)):(N=" ".repeat(te/2),P=N):P=" ".repeat(te)}a.delimiterStart!==!1&&!y&&x.push("|"),a.padding!==!1&&!(a.alignDelimiters===!1&&H==="")&&(a.delimiterStart!==!1||y)&&x.push(" "),a.alignDelimiters!==!1&&x.push(N),x.push(H),a.alignDelimiters!==!1&&x.push(P),a.padding!==!1&&x.push(" "),(a.delimiterEnd!==!1||y!==d-1)&&x.push("|")}C.push(a.delimiterEnd===!1?x.join("").replace(/ +$/,""):x.join(""))}return C.join(`
`)}function KD(i){return i==null?"":String(i)}function dp(i){const r=typeof i=="string"?i.codePointAt(0):0;return r===67||r===99?99:r===76||r===108?108:r===82||r===114?114:0}function JD(i,r,a,u){const c=a.enter("blockquote"),h=a.createTracker(u);h.move("> "),h.shift(2);const f=a.indentLines(a.containerFlow(i,h.current()),WD);return c(),f}function WD(i,r,a){return">"+(a?"":" ")+i}function PD(i,r){return mp(i,r.inConstruct,!0)&&!mp(i,r.notInConstruct,!1)}function mp(i,r,a){if(typeof r=="string"&&(r=[r]),!r||r.length===0)return a;let u=-1;for(;++u<r.length;)if(i.includes(r[u]))return!0;return!1}function pp(i,r,a,u){let c=-1;for(;++c<a.unsafe.length;)if(a.unsafe[c].character===`
`&&PD(a.stack,a.unsafe[c]))return/[ \t]/.test(u.before)?"":" ";return`\\
`}function $D(i,r){const a=String(i);let u=a.indexOf(r),c=u,h=0,f=0;if(typeof r!="string")throw new TypeError("Expected substring");for(;u!==-1;)u===c?++h>f&&(f=h):h=1,c=u+r.length,u=a.indexOf(r,c);return f}function eA(i,r){return!!(r.options.fences===!1&&i.value&&!i.lang&&/[^ \r\n]/.test(i.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(i.value))}function tA(i){const r=i.options.fence||"`";if(r!=="`"&&r!=="~")throw new Error("Cannot serialize code with `"+r+"` for `options.fence`, expected `` ` `` or `~`");return r}function nA(i,r,a,u){const c=tA(a),h=i.value||"",f=c==="`"?"GraveAccent":"Tilde";if(eA(i,a)){const y=a.enter("codeIndented"),D=a.indentLines(h,iA);return y(),D}const m=a.createTracker(u),p=c.repeat(Math.max($D(h,c)+1,3)),d=a.enter("codeFenced");let b=m.move(p);if(i.lang){const y=a.enter(`codeFencedLang${f}`);b+=m.move(a.safe(i.lang,{before:b,after:" ",encode:["`"],...m.current()})),y()}if(i.lang&&i.meta){const y=a.enter(`codeFencedMeta${f}`);b+=m.move(" "),b+=m.move(a.safe(i.meta,{before:b,after:`
`,encode:["`"],...m.current()})),y()}return b+=m.move(`
`),h&&(b+=m.move(h+`
`)),b+=m.move(p),d(),b}function iA(i,r,a){return(a?"":"    ")+i}function wc(i){const r=i.options.quote||'"';if(r!=='"'&&r!=="'")throw new Error("Cannot serialize title with `"+r+"` for `options.quote`, expected `\"`, or `'`");return r}function lA(i,r,a,u){const c=wc(a),h=c==='"'?"Quote":"Apostrophe",f=a.enter("definition");let m=a.enter("label");const p=a.createTracker(u);let d=p.move("[");return d+=p.move(a.safe(a.associationId(i),{before:d,after:"]",...p.current()})),d+=p.move("]: "),m(),!i.url||/[\0- \u007F]/.test(i.url)?(m=a.enter("destinationLiteral"),d+=p.move("<"),d+=p.move(a.safe(i.url,{before:d,after:">",...p.current()})),d+=p.move(">")):(m=a.enter("destinationRaw"),d+=p.move(a.safe(i.url,{before:d,after:i.title?" ":`
`,...p.current()}))),m(),i.title&&(m=a.enter(`title${h}`),d+=p.move(" "+c),d+=p.move(a.safe(i.title,{before:d,after:c,...p.current()})),d+=p.move(c),m()),f(),d}function aA(i){const r=i.options.emphasis||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize emphasis with `"+r+"` for `options.emphasis`, expected `*`, or `_`");return r}function Ea(i){return"&#x"+i.toString(16).toUpperCase()+";"}function tu(i,r,a){const u=bl(i),c=bl(r);return u===void 0?c===void 0?a==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:c===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:u===1?c===void 0?{inside:!1,outside:!1}:c===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:c===void 0?{inside:!1,outside:!1}:c===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}ug.peek=rA;function ug(i,r,a,u){const c=aA(a),h=a.enter("emphasis"),f=a.createTracker(u),m=f.move(c);let p=f.move(a.containerPhrasing(i,{after:c,before:m,...f.current()}));const d=p.charCodeAt(0),b=tu(u.before.charCodeAt(u.before.length-1),d,c);b.inside&&(p=Ea(d)+p.slice(1));const y=p.charCodeAt(p.length-1),D=tu(u.after.charCodeAt(0),y,c);D.inside&&(p=p.slice(0,-1)+Ea(y));const w=f.move(c);return h(),a.attentionEncodeSurroundingInfo={after:D.outside,before:b.outside},m+p+w}function rA(i,r,a){return a.options.emphasis||"*"}function uA(i,r){let a=!1;return uu(i,function(u){if("value"in u&&/\r?\n|\r/.test(u.value)||u.type==="break")return a=!0,ec}),!!((!i.depth||i.depth<3)&&hc(i)&&(r.options.setext||a))}function oA(i,r,a,u){const c=Math.max(Math.min(6,i.depth||1),1),h=a.createTracker(u);if(uA(i,a)){const b=a.enter("headingSetext"),y=a.enter("phrasing"),D=a.containerPhrasing(i,{...h.current(),before:`
`,after:`
`});return y(),b(),D+`
`+(c===1?"=":"-").repeat(D.length-(Math.max(D.lastIndexOf("\r"),D.lastIndexOf(`
`))+1))}const f="#".repeat(c),m=a.enter("headingAtx"),p=a.enter("phrasing");h.move(f+" ");let d=a.containerPhrasing(i,{before:"# ",after:`
`,...h.current()});return/^[\t ]/.test(d)&&(d=Ea(d.charCodeAt(0))+d.slice(1)),d=d?f+" "+d:f,a.options.closeAtx&&(d+=" "+f),p(),m(),d}og.peek=sA;function og(i){return i.value||""}function sA(){return"<"}sg.peek=cA;function sg(i,r,a,u){const c=wc(a),h=c==='"'?"Quote":"Apostrophe",f=a.enter("image");let m=a.enter("label");const p=a.createTracker(u);let d=p.move("![");return d+=p.move(a.safe(i.alt,{before:d,after:"]",...p.current()})),d+=p.move("]("),m(),!i.url&&i.title||/[\0- \u007F]/.test(i.url)?(m=a.enter("destinationLiteral"),d+=p.move("<"),d+=p.move(a.safe(i.url,{before:d,after:">",...p.current()})),d+=p.move(">")):(m=a.enter("destinationRaw"),d+=p.move(a.safe(i.url,{before:d,after:i.title?" ":")",...p.current()}))),m(),i.title&&(m=a.enter(`title${h}`),d+=p.move(" "+c),d+=p.move(a.safe(i.title,{before:d,after:c,...p.current()})),d+=p.move(c),m()),d+=p.move(")"),f(),d}function cA(){return"!"}cg.peek=fA;function cg(i,r,a,u){const c=i.referenceType,h=a.enter("imageReference");let f=a.enter("label");const m=a.createTracker(u);let p=m.move("![");const d=a.safe(i.alt,{before:p,after:"]",...m.current()});p+=m.move(d+"]["),f();const b=a.stack;a.stack=[],f=a.enter("reference");const y=a.safe(a.associationId(i),{before:p,after:"]",...m.current()});return f(),a.stack=b,h(),c==="full"||!d||d!==y?p+=m.move(y+"]"):c==="shortcut"?p=p.slice(0,-1):p+=m.move("]"),p}function fA(){return"!"}fg.peek=hA;function fg(i,r,a){let u=i.value||"",c="`",h=-1;for(;new RegExp("(^|[^`])"+c+"([^`]|$)").test(u);)c+="`";for(/[^ \r\n]/.test(u)&&(/^[ \r\n]/.test(u)&&/[ \r\n]$/.test(u)||/^`|`$/.test(u))&&(u=" "+u+" ");++h<a.unsafe.length;){const f=a.unsafe[h],m=a.compilePattern(f);let p;if(f.atBreak)for(;p=m.exec(u);){let d=p.index;u.charCodeAt(d)===10&&u.charCodeAt(d-1)===13&&d--,u=u.slice(0,d)+" "+u.slice(p.index+1)}}return c+u+c}function hA(){return"`"}function hg(i,r){const a=hc(i);return!!(!r.options.resourceLink&&i.url&&!i.title&&i.children&&i.children.length===1&&i.children[0].type==="text"&&(a===i.url||"mailto:"+a===i.url)&&/^[a-z][a-z+.-]+:/i.test(i.url)&&!/[\0- <>\u007F]/.test(i.url))}dg.peek=dA;function dg(i,r,a,u){const c=wc(a),h=c==='"'?"Quote":"Apostrophe",f=a.createTracker(u);let m,p;if(hg(i,a)){const b=a.stack;a.stack=[],m=a.enter("autolink");let y=f.move("<");return y+=f.move(a.containerPhrasing(i,{before:y,after:">",...f.current()})),y+=f.move(">"),m(),a.stack=b,y}m=a.enter("link"),p=a.enter("label");let d=f.move("[");return d+=f.move(a.containerPhrasing(i,{before:d,after:"](",...f.current()})),d+=f.move("]("),p(),!i.url&&i.title||/[\0- \u007F]/.test(i.url)?(p=a.enter("destinationLiteral"),d+=f.move("<"),d+=f.move(a.safe(i.url,{before:d,after:">",...f.current()})),d+=f.move(">")):(p=a.enter("destinationRaw"),d+=f.move(a.safe(i.url,{before:d,after:i.title?" ":")",...f.current()}))),p(),i.title&&(p=a.enter(`title${h}`),d+=f.move(" "+c),d+=f.move(a.safe(i.title,{before:d,after:c,...f.current()})),d+=f.move(c),p()),d+=f.move(")"),m(),d}function dA(i,r,a){return hg(i,a)?"<":"["}mg.peek=mA;function mg(i,r,a,u){const c=i.referenceType,h=a.enter("linkReference");let f=a.enter("label");const m=a.createTracker(u);let p=m.move("[");const d=a.containerPhrasing(i,{before:p,after:"]",...m.current()});p+=m.move(d+"]["),f();const b=a.stack;a.stack=[],f=a.enter("reference");const y=a.safe(a.associationId(i),{before:p,after:"]",...m.current()});return f(),a.stack=b,h(),c==="full"||!d||d!==y?p+=m.move(y+"]"):c==="shortcut"?p=p.slice(0,-1):p+=m.move("]"),p}function mA(){return"["}function Dc(i){const r=i.options.bullet||"*";if(r!=="*"&&r!=="+"&&r!=="-")throw new Error("Cannot serialize items with `"+r+"` for `options.bullet`, expected `*`, `+`, or `-`");return r}function pA(i){const r=Dc(i),a=i.options.bulletOther;if(!a)return r==="*"?"-":"*";if(a!=="*"&&a!=="+"&&a!=="-")throw new Error("Cannot serialize items with `"+a+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(a===r)throw new Error("Expected `bullet` (`"+r+"`) and `bulletOther` (`"+a+"`) to be different");return a}function gA(i){const r=i.options.bulletOrdered||".";if(r!=="."&&r!==")")throw new Error("Cannot serialize items with `"+r+"` for `options.bulletOrdered`, expected `.` or `)`");return r}function pg(i){const r=i.options.rule||"*";if(r!=="*"&&r!=="-"&&r!=="_")throw new Error("Cannot serialize rules with `"+r+"` for `options.rule`, expected `*`, `-`, or `_`");return r}function yA(i,r,a,u){const c=a.enter("list"),h=a.bulletCurrent;let f=i.ordered?gA(a):Dc(a);const m=i.ordered?f==="."?")":".":pA(a);let p=r&&a.bulletLastUsed?f===a.bulletLastUsed:!1;if(!i.ordered){const b=i.children?i.children[0]:void 0;if((f==="*"||f==="-")&&b&&(!b.children||!b.children[0])&&a.stack[a.stack.length-1]==="list"&&a.stack[a.stack.length-2]==="listItem"&&a.stack[a.stack.length-3]==="list"&&a.stack[a.stack.length-4]==="listItem"&&a.indexStack[a.indexStack.length-1]===0&&a.indexStack[a.indexStack.length-2]===0&&a.indexStack[a.indexStack.length-3]===0&&(p=!0),pg(a)===f&&b){let y=-1;for(;++y<i.children.length;){const D=i.children[y];if(D&&D.type==="listItem"&&D.children&&D.children[0]&&D.children[0].type==="thematicBreak"){p=!0;break}}}}p&&(f=m),a.bulletCurrent=f;const d=a.containerFlow(i,u);return a.bulletLastUsed=f,a.bulletCurrent=h,c(),d}function bA(i){const r=i.options.listItemIndent||"one";if(r!=="tab"&&r!=="one"&&r!=="mixed")throw new Error("Cannot serialize items with `"+r+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return r}function vA(i,r,a,u){const c=bA(a);let h=a.bulletCurrent||Dc(a);r&&r.type==="list"&&r.ordered&&(h=(typeof r.start=="number"&&r.start>-1?r.start:1)+(a.options.incrementListMarker===!1?0:r.children.indexOf(i))+h);let f=h.length+1;(c==="tab"||c==="mixed"&&(r&&r.type==="list"&&r.spread||i.spread))&&(f=Math.ceil(f/4)*4);const m=a.createTracker(u);m.move(h+" ".repeat(f-h.length)),m.shift(f);const p=a.enter("listItem"),d=a.indentLines(a.containerFlow(i,m.current()),b);return p(),d;function b(y,D,w){return D?(w?"":" ".repeat(f))+y:(w?h:h+" ".repeat(f-h.length))+y}}function wA(i,r,a,u){const c=a.enter("paragraph"),h=a.enter("phrasing"),f=a.containerPhrasing(i,u);return h(),c(),f}const DA=au(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function AA(i,r,a,u){return(i.children.some(function(f){return DA(f)})?a.containerPhrasing:a.containerFlow).call(a,i,u)}function SA(i){const r=i.options.strong||"*";if(r!=="*"&&r!=="_")throw new Error("Cannot serialize strong with `"+r+"` for `options.strong`, expected `*`, or `_`");return r}gg.peek=EA;function gg(i,r,a,u){const c=SA(a),h=a.enter("strong"),f=a.createTracker(u),m=f.move(c+c);let p=f.move(a.containerPhrasing(i,{after:c,before:m,...f.current()}));const d=p.charCodeAt(0),b=tu(u.before.charCodeAt(u.before.length-1),d,c);b.inside&&(p=Ea(d)+p.slice(1));const y=p.charCodeAt(p.length-1),D=tu(u.after.charCodeAt(0),y,c);D.inside&&(p=p.slice(0,-1)+Ea(y));const w=f.move(c+c);return h(),a.attentionEncodeSurroundingInfo={after:D.outside,before:b.outside},m+p+w}function EA(i,r,a){return a.options.strong||"*"}function TA(i,r,a,u){return a.safe(i.value,u)}function kA(i){const r=i.options.ruleRepetition||3;if(r<3)throw new Error("Cannot serialize rules with repetition `"+r+"` for `options.ruleRepetition`, expected `3` or more");return r}function xA(i,r,a){const u=(pg(a)+(a.options.ruleSpaces?" ":"")).repeat(kA(a));return a.options.ruleSpaces?u.slice(0,-1):u}const yg={blockquote:JD,break:pp,code:nA,definition:lA,emphasis:ug,hardBreak:pp,heading:oA,html:og,image:sg,imageReference:cg,inlineCode:fg,link:dg,linkReference:mg,list:yA,listItem:vA,paragraph:wA,root:AA,strong:gg,text:TA,thematicBreak:xA};function CA(){return{enter:{table:FA,tableData:gp,tableHeader:gp,tableRow:MA},exit:{codeText:BA,table:zA,tableData:Xs,tableHeader:Xs,tableRow:Xs}}}function FA(i){const r=i._align;this.enter({type:"table",align:r.map(function(a){return a==="none"?null:a}),children:[]},i),this.data.inTable=!0}function zA(i){this.exit(i),this.data.inTable=void 0}function MA(i){this.enter({type:"tableRow",children:[]},i)}function Xs(i){this.exit(i)}function gp(i){this.enter({type:"tableCell",children:[]},i)}function BA(i){let r=this.resume();this.data.inTable&&(r=r.replace(/\\([\\|])/g,OA));const a=this.stack[this.stack.length-1];a.type,a.value=r,this.exit(i)}function OA(i,r){return r==="|"?r:i}function _A(i){const r=i||{},a=r.tableCellPadding,u=r.tablePipeAlign,c=r.stringLength,h=a?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:D,table:f,tableCell:p,tableRow:m}};function f(w,C,L,V){return d(b(w,L,V),w.align)}function m(w,C,L,V){const x=y(w,L,V),H=d([x]);return H.slice(0,H.indexOf(`
`))}function p(w,C,L,V){const x=L.enter("tableCell"),H=L.enter("phrasing"),N=L.containerPhrasing(w,{...V,before:h,after:h});return H(),x(),N}function d(w,C){return ZD(w,{align:C,alignDelimiters:u,padding:a,stringLength:c})}function b(w,C,L){const V=w.children;let x=-1;const H=[],N=C.enter("table");for(;++x<V.length;)H[x]=y(V[x],C,L);return N(),H}function y(w,C,L){const V=w.children;let x=-1;const H=[],N=C.enter("tableRow");for(;++x<V.length;)H[x]=p(V[x],w,C,L);return N(),H}function D(w,C,L){let V=yg.inlineCode(w,C,L);return L.stack.includes("tableCell")&&(V=V.replace(/\|/g,"\\$&")),V}}function IA(){return{exit:{taskListCheckValueChecked:yp,taskListCheckValueUnchecked:yp,paragraph:NA}}}function RA(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:UA}}}function yp(i){const r=this.stack[this.stack.length-2];r.type,r.checked=i.type==="taskListCheckValueChecked"}function NA(i){const r=this.stack[this.stack.length-2];if(r&&r.type==="listItem"&&typeof r.checked=="boolean"){const a=this.stack[this.stack.length-1];a.type;const u=a.children[0];if(u&&u.type==="text"){const c=r.children;let h=-1,f;for(;++h<c.length;){const m=c[h];if(m.type==="paragraph"){f=m;break}}f===a&&(u.value=u.value.slice(1),u.value.length===0?a.children.shift():a.position&&u.position&&typeof u.position.start.offset=="number"&&(u.position.start.column++,u.position.start.offset++,a.position.start=Object.assign({},u.position.start)))}}this.exit(i)}function UA(i,r,a,u){const c=i.children[0],h=typeof i.checked=="boolean"&&c&&c.type==="paragraph",f="["+(i.checked?"x":" ")+"] ",m=a.createTracker(u);h&&m.move(f);let p=yg.listItem(i,r,a,{...u,...m.current()});return h&&(p=p.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,d)),p;function d(b){return b+f}}function LA(){return[yD(),UD(),qD(),CA(),IA()]}function jA(i){return{extensions:[bD(),LD(i),GD(),_A(i),RA()]}}const HA={tokenize:QA,partial:!0},bg={tokenize:ZA,partial:!0},vg={tokenize:KA,partial:!0},wg={tokenize:JA,partial:!0},qA={tokenize:WA,partial:!0},Dg={name:"wwwAutolink",tokenize:VA,previous:Sg},Ag={name:"protocolAutolink",tokenize:XA,previous:Eg},zn={name:"emailAutolink",tokenize:YA,previous:Tg},on={};function GA(){return{text:on}}let Si=48;for(;Si<123;)on[Si]=zn,Si++,Si===58?Si=65:Si===91&&(Si=97);on[43]=zn;on[45]=zn;on[46]=zn;on[95]=zn;on[72]=[zn,Ag];on[104]=[zn,Ag];on[87]=[zn,Dg];on[119]=[zn,Dg];function YA(i,r,a){const u=this;let c,h;return f;function f(y){return!lc(y)||!Tg.call(u,u.previous)||Ac(u.events)?a(y):(i.enter("literalAutolink"),i.enter("literalAutolinkEmail"),m(y))}function m(y){return lc(y)?(i.consume(y),m):y===64?(i.consume(y),p):a(y)}function p(y){return y===46?i.check(qA,b,d)(y):y===45||y===95||dt(y)?(h=!0,i.consume(y),p):b(y)}function d(y){return i.consume(y),c=!0,p}function b(y){return h&&c&&bt(u.previous)?(i.exit("literalAutolinkEmail"),i.exit("literalAutolink"),r(y)):a(y)}}function VA(i,r,a){const u=this;return c;function c(f){return f!==87&&f!==119||!Sg.call(u,u.previous)||Ac(u.events)?a(f):(i.enter("literalAutolink"),i.enter("literalAutolinkWww"),i.check(HA,i.attempt(bg,i.attempt(vg,h),a),a)(f))}function h(f){return i.exit("literalAutolinkWww"),i.exit("literalAutolink"),r(f)}}function XA(i,r,a){const u=this;let c="",h=!1;return f;function f(y){return(y===72||y===104)&&Eg.call(u,u.previous)&&!Ac(u.events)?(i.enter("literalAutolink"),i.enter("literalAutolinkHttp"),c+=String.fromCodePoint(y),i.consume(y),m):a(y)}function m(y){if(bt(y)&&c.length<5)return c+=String.fromCodePoint(y),i.consume(y),m;if(y===58){const D=c.toLowerCase();if(D==="http"||D==="https")return i.consume(y),p}return a(y)}function p(y){return y===47?(i.consume(y),h?d:(h=!0,p)):a(y)}function d(y){return y===null||Pr(y)||qe(y)||Ei(y)||nu(y)?a(y):i.attempt(bg,i.attempt(vg,b),a)(y)}function b(y){return i.exit("literalAutolinkHttp"),i.exit("literalAutolink"),r(y)}}function QA(i,r,a){let u=0;return c;function c(f){return(f===87||f===119)&&u<3?(u++,i.consume(f),c):f===46&&u===3?(i.consume(f),h):a(f)}function h(f){return f===null?a(f):r(f)}}function ZA(i,r,a){let u,c,h;return f;function f(d){return d===46||d===95?i.check(wg,p,m)(d):d===null||qe(d)||Ei(d)||d!==45&&nu(d)?p(d):(h=!0,i.consume(d),f)}function m(d){return d===95?u=!0:(c=u,u=void 0),i.consume(d),f}function p(d){return c||u||!h?a(d):r(d)}}function KA(i,r){let a=0,u=0;return c;function c(f){return f===40?(a++,i.consume(f),c):f===41&&u<a?h(f):f===33||f===34||f===38||f===39||f===41||f===42||f===44||f===46||f===58||f===59||f===60||f===63||f===93||f===95||f===126?i.check(wg,r,h)(f):f===null||qe(f)||Ei(f)?r(f):(i.consume(f),c)}function h(f){return f===41&&u++,i.consume(f),c}}function JA(i,r,a){return u;function u(m){return m===33||m===34||m===39||m===41||m===42||m===44||m===46||m===58||m===59||m===63||m===95||m===126?(i.consume(m),u):m===38?(i.consume(m),h):m===93?(i.consume(m),c):m===60||m===null||qe(m)||Ei(m)?r(m):a(m)}function c(m){return m===null||m===40||m===91||qe(m)||Ei(m)?r(m):u(m)}function h(m){return bt(m)?f(m):a(m)}function f(m){return m===59?(i.consume(m),u):bt(m)?(i.consume(m),f):a(m)}}function WA(i,r,a){return u;function u(h){return i.consume(h),c}function c(h){return dt(h)?a(h):r(h)}}function Sg(i){return i===null||i===40||i===42||i===95||i===91||i===93||i===126||qe(i)}function Eg(i){return!bt(i)}function Tg(i){return!(i===47||lc(i))}function lc(i){return i===43||i===45||i===46||i===95||dt(i)}function Ac(i){let r=i.length,a=!1;for(;r--;){const u=i[r][1];if((u.type==="labelLink"||u.type==="labelImage")&&!u._balanced){a=!0;break}if(u._gfmAutolinkLiteralWalkedInto){a=!1;break}}return i.length>0&&!a&&(i[i.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),a}const PA={tokenize:rS,partial:!0};function $A(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:iS,continuation:{tokenize:lS},exit:aS}},text:{91:{name:"gfmFootnoteCall",tokenize:nS},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:eS,resolveTo:tS}}}}function eS(i,r,a){const u=this;let c=u.events.length;const h=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let f;for(;c--;){const p=u.events[c][1];if(p.type==="labelImage"){f=p;break}if(p.type==="gfmFootnoteCall"||p.type==="labelLink"||p.type==="label"||p.type==="image"||p.type==="link")break}return m;function m(p){if(!f||!f._balanced)return a(p);const d=tn(u.sliceSerialize({start:f.end,end:u.now()}));return d.codePointAt(0)!==94||!h.includes(d.slice(1))?a(p):(i.enter("gfmFootnoteCallLabelMarker"),i.consume(p),i.exit("gfmFootnoteCallLabelMarker"),r(p))}}function tS(i,r){let a=i.length;for(;a--;)if(i[a][1].type==="labelImage"&&i[a][0]==="enter"){i[a][1];break}i[a+1][1].type="data",i[a+3][1].type="gfmFootnoteCallLabelMarker";const u={type:"gfmFootnoteCall",start:Object.assign({},i[a+3][1].start),end:Object.assign({},i[i.length-1][1].end)},c={type:"gfmFootnoteCallMarker",start:Object.assign({},i[a+3][1].end),end:Object.assign({},i[a+3][1].end)};c.end.column++,c.end.offset++,c.end._bufferIndex++;const h={type:"gfmFootnoteCallString",start:Object.assign({},c.end),end:Object.assign({},i[i.length-1][1].start)},f={type:"chunkString",contentType:"string",start:Object.assign({},h.start),end:Object.assign({},h.end)},m=[i[a+1],i[a+2],["enter",u,r],i[a+3],i[a+4],["enter",c,r],["exit",c,r],["enter",h,r],["enter",f,r],["exit",f,r],["exit",h,r],i[i.length-2],i[i.length-1],["exit",u,r]];return i.splice(a,i.length-a+1,...m),i}function nS(i,r,a){const u=this,c=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let h=0,f;return m;function m(y){return i.enter("gfmFootnoteCall"),i.enter("gfmFootnoteCallLabelMarker"),i.consume(y),i.exit("gfmFootnoteCallLabelMarker"),p}function p(y){return y!==94?a(y):(i.enter("gfmFootnoteCallMarker"),i.consume(y),i.exit("gfmFootnoteCallMarker"),i.enter("gfmFootnoteCallString"),i.enter("chunkString").contentType="string",d)}function d(y){if(h>999||y===93&&!f||y===null||y===91||qe(y))return a(y);if(y===93){i.exit("chunkString");const D=i.exit("gfmFootnoteCallString");return c.includes(tn(u.sliceSerialize(D)))?(i.enter("gfmFootnoteCallLabelMarker"),i.consume(y),i.exit("gfmFootnoteCallLabelMarker"),i.exit("gfmFootnoteCall"),r):a(y)}return qe(y)||(f=!0),h++,i.consume(y),y===92?b:d}function b(y){return y===91||y===92||y===93?(i.consume(y),h++,d):d(y)}}function iS(i,r,a){const u=this,c=u.parser.gfmFootnotes||(u.parser.gfmFootnotes=[]);let h,f=0,m;return p;function p(C){return i.enter("gfmFootnoteDefinition")._container=!0,i.enter("gfmFootnoteDefinitionLabel"),i.enter("gfmFootnoteDefinitionLabelMarker"),i.consume(C),i.exit("gfmFootnoteDefinitionLabelMarker"),d}function d(C){return C===94?(i.enter("gfmFootnoteDefinitionMarker"),i.consume(C),i.exit("gfmFootnoteDefinitionMarker"),i.enter("gfmFootnoteDefinitionLabelString"),i.enter("chunkString").contentType="string",b):a(C)}function b(C){if(f>999||C===93&&!m||C===null||C===91||qe(C))return a(C);if(C===93){i.exit("chunkString");const L=i.exit("gfmFootnoteDefinitionLabelString");return h=tn(u.sliceSerialize(L)),i.enter("gfmFootnoteDefinitionLabelMarker"),i.consume(C),i.exit("gfmFootnoteDefinitionLabelMarker"),i.exit("gfmFootnoteDefinitionLabel"),D}return qe(C)||(m=!0),f++,i.consume(C),C===92?y:b}function y(C){return C===91||C===92||C===93?(i.consume(C),f++,b):b(C)}function D(C){return C===58?(i.enter("definitionMarker"),i.consume(C),i.exit("definitionMarker"),c.includes(h)||c.push(h),Fe(i,w,"gfmFootnoteDefinitionWhitespace")):a(C)}function w(C){return r(C)}}function lS(i,r,a){return i.check(ka,r,i.attempt(PA,r,a))}function aS(i){i.exit("gfmFootnoteDefinition")}function rS(i,r,a){const u=this;return Fe(i,c,"gfmFootnoteDefinitionIndent",5);function c(h){const f=u.events[u.events.length-1];return f&&f[1].type==="gfmFootnoteDefinitionIndent"&&f[2].sliceSerialize(f[1],!0).length===4?r(h):a(h)}}function uS(i){let a=(i||{}).singleTilde;const u={name:"strikethrough",tokenize:h,resolveAll:c};return a==null&&(a=!0),{text:{126:u},insideSpan:{null:[u]},attentionMarkers:{null:[126]}};function c(f,m){let p=-1;for(;++p<f.length;)if(f[p][0]==="enter"&&f[p][1].type==="strikethroughSequenceTemporary"&&f[p][1]._close){let d=p;for(;d--;)if(f[d][0]==="exit"&&f[d][1].type==="strikethroughSequenceTemporary"&&f[d][1]._open&&f[p][1].end.offset-f[p][1].start.offset===f[d][1].end.offset-f[d][1].start.offset){f[p][1].type="strikethroughSequence",f[d][1].type="strikethroughSequence";const b={type:"strikethrough",start:Object.assign({},f[d][1].start),end:Object.assign({},f[p][1].end)},y={type:"strikethroughText",start:Object.assign({},f[d][1].end),end:Object.assign({},f[p][1].start)},D=[["enter",b,m],["enter",f[d][1],m],["exit",f[d][1],m],["enter",y,m]],w=m.parser.constructs.insideSpan.null;w&&Ut(D,D.length,0,iu(w,f.slice(d+1,p),m)),Ut(D,D.length,0,[["exit",y,m],["enter",f[p][1],m],["exit",f[p][1],m],["exit",b,m]]),Ut(f,d-1,p-d+3,D),p=d+D.length-2;break}}for(p=-1;++p<f.length;)f[p][1].type==="strikethroughSequenceTemporary"&&(f[p][1].type="data");return f}function h(f,m,p){const d=this.previous,b=this.events;let y=0;return D;function D(C){return d===126&&b[b.length-1][1].type!=="characterEscape"?p(C):(f.enter("strikethroughSequenceTemporary"),w(C))}function w(C){const L=bl(d);if(C===126)return y>1?p(C):(f.consume(C),y++,w);if(y<2&&!a)return p(C);const V=f.exit("strikethroughSequenceTemporary"),x=bl(C);return V._open=!x||x===2&&!!L,V._close=!L||L===2&&!!x,m(C)}}}class oS{constructor(){this.map=[]}add(r,a,u){sS(this,r,a,u)}consume(r){if(this.map.sort(function(h,f){return h[0]-f[0]}),this.map.length===0)return;let a=this.map.length;const u=[];for(;a>0;)a-=1,u.push(r.slice(this.map[a][0]+this.map[a][1]),this.map[a][2]),r.length=this.map[a][0];u.push(r.slice()),r.length=0;let c=u.pop();for(;c;){for(const h of c)r.push(h);c=u.pop()}this.map.length=0}}function sS(i,r,a,u){let c=0;if(!(a===0&&u.length===0)){for(;c<i.map.length;){if(i.map[c][0]===r){i.map[c][1]+=a,i.map[c][2].push(...u);return}c+=1}i.map.push([r,a,u])}}function cS(i,r){let a=!1;const u=[];for(;r<i.length;){const c=i[r];if(a){if(c[0]==="enter")c[1].type==="tableContent"&&u.push(i[r+1][1].type==="tableDelimiterMarker"?"left":"none");else if(c[1].type==="tableContent"){if(i[r-1][1].type==="tableDelimiterMarker"){const h=u.length-1;u[h]=u[h]==="left"?"center":"right"}}else if(c[1].type==="tableDelimiterRow")break}else c[0]==="enter"&&c[1].type==="tableDelimiterRow"&&(a=!0);r+=1}return u}function fS(){return{flow:{null:{name:"table",tokenize:hS,resolveAll:dS}}}}function hS(i,r,a){const u=this;let c=0,h=0,f;return m;function m(I){let ee=u.events.length-1;for(;ee>-1;){const ie=u.events[ee][1].type;if(ie==="lineEnding"||ie==="linePrefix")ee--;else break}const $=ee>-1?u.events[ee][1].type:null,we=$==="tableHead"||$==="tableRow"?R:p;return we===R&&u.parser.lazy[u.now().line]?a(I):we(I)}function p(I){return i.enter("tableHead"),i.enter("tableRow"),d(I)}function d(I){return I===124||(f=!0,h+=1),b(I)}function b(I){return I===null?a(I):ce(I)?h>1?(h=0,u.interrupt=!0,i.exit("tableRow"),i.enter("lineEnding"),i.consume(I),i.exit("lineEnding"),w):a(I):Ee(I)?Fe(i,b,"whitespace")(I):(h+=1,f&&(f=!1,c+=1),I===124?(i.enter("tableCellDivider"),i.consume(I),i.exit("tableCellDivider"),f=!0,b):(i.enter("data"),y(I)))}function y(I){return I===null||I===124||qe(I)?(i.exit("data"),b(I)):(i.consume(I),I===92?D:y)}function D(I){return I===92||I===124?(i.consume(I),y):y(I)}function w(I){return u.interrupt=!1,u.parser.lazy[u.now().line]?a(I):(i.enter("tableDelimiterRow"),f=!1,Ee(I)?Fe(i,C,"linePrefix",u.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(I):C(I))}function C(I){return I===45||I===58?V(I):I===124?(f=!0,i.enter("tableCellDivider"),i.consume(I),i.exit("tableCellDivider"),L):te(I)}function L(I){return Ee(I)?Fe(i,V,"whitespace")(I):V(I)}function V(I){return I===58?(h+=1,f=!0,i.enter("tableDelimiterMarker"),i.consume(I),i.exit("tableDelimiterMarker"),x):I===45?(h+=1,x(I)):I===null||ce(I)?P(I):te(I)}function x(I){return I===45?(i.enter("tableDelimiterFiller"),H(I)):te(I)}function H(I){return I===45?(i.consume(I),H):I===58?(f=!0,i.exit("tableDelimiterFiller"),i.enter("tableDelimiterMarker"),i.consume(I),i.exit("tableDelimiterMarker"),N):(i.exit("tableDelimiterFiller"),N(I))}function N(I){return Ee(I)?Fe(i,P,"whitespace")(I):P(I)}function P(I){return I===124?C(I):I===null||ce(I)?!f||c!==h?te(I):(i.exit("tableDelimiterRow"),i.exit("tableHead"),r(I)):te(I)}function te(I){return a(I)}function R(I){return i.enter("tableRow"),Z(I)}function Z(I){return I===124?(i.enter("tableCellDivider"),i.consume(I),i.exit("tableCellDivider"),Z):I===null||ce(I)?(i.exit("tableRow"),r(I)):Ee(I)?Fe(i,Z,"whitespace")(I):(i.enter("data"),se(I))}function se(I){return I===null||I===124||qe(I)?(i.exit("data"),Z(I)):(i.consume(I),I===92?me:se)}function me(I){return I===92||I===124?(i.consume(I),se):se(I)}}function dS(i,r){let a=-1,u=!0,c=0,h=[0,0,0,0],f=[0,0,0,0],m=!1,p=0,d,b,y;const D=new oS;for(;++a<i.length;){const w=i[a],C=w[1];w[0]==="enter"?C.type==="tableHead"?(m=!1,p!==0&&(bp(D,r,p,d,b),b=void 0,p=0),d={type:"table",start:Object.assign({},C.start),end:Object.assign({},C.end)},D.add(a,0,[["enter",d,r]])):C.type==="tableRow"||C.type==="tableDelimiterRow"?(u=!0,y=void 0,h=[0,0,0,0],f=[0,a+1,0,0],m&&(m=!1,b={type:"tableBody",start:Object.assign({},C.start),end:Object.assign({},C.end)},D.add(a,0,[["enter",b,r]])),c=C.type==="tableDelimiterRow"?2:b?3:1):c&&(C.type==="data"||C.type==="tableDelimiterMarker"||C.type==="tableDelimiterFiller")?(u=!1,f[2]===0&&(h[1]!==0&&(f[0]=f[1],y=Jr(D,r,h,c,void 0,y),h=[0,0,0,0]),f[2]=a)):C.type==="tableCellDivider"&&(u?u=!1:(h[1]!==0&&(f[0]=f[1],y=Jr(D,r,h,c,void 0,y)),h=f,f=[h[1],a,0,0])):C.type==="tableHead"?(m=!0,p=a):C.type==="tableRow"||C.type==="tableDelimiterRow"?(p=a,h[1]!==0?(f[0]=f[1],y=Jr(D,r,h,c,a,y)):f[1]!==0&&(y=Jr(D,r,f,c,a,y)),c=0):c&&(C.type==="data"||C.type==="tableDelimiterMarker"||C.type==="tableDelimiterFiller")&&(f[3]=a)}for(p!==0&&bp(D,r,p,d,b),D.consume(r.events),a=-1;++a<r.events.length;){const w=r.events[a];w[0]==="enter"&&w[1].type==="table"&&(w[1]._align=cS(r.events,a))}return i}function Jr(i,r,a,u,c,h){const f=u===1?"tableHeader":u===2?"tableDelimiter":"tableData",m="tableContent";a[0]!==0&&(h.end=Object.assign({},gl(r.events,a[0])),i.add(a[0],0,[["exit",h,r]]));const p=gl(r.events,a[1]);if(h={type:f,start:Object.assign({},p),end:Object.assign({},p)},i.add(a[1],0,[["enter",h,r]]),a[2]!==0){const d=gl(r.events,a[2]),b=gl(r.events,a[3]),y={type:m,start:Object.assign({},d),end:Object.assign({},b)};if(i.add(a[2],0,[["enter",y,r]]),u!==2){const D=r.events[a[2]],w=r.events[a[3]];if(D[1].end=Object.assign({},w[1].end),D[1].type="chunkText",D[1].contentType="text",a[3]>a[2]+1){const C=a[2]+1,L=a[3]-a[2]-1;i.add(C,L,[])}}i.add(a[3]+1,0,[["exit",y,r]])}return c!==void 0&&(h.end=Object.assign({},gl(r.events,c)),i.add(c,0,[["exit",h,r]]),h=void 0),h}function bp(i,r,a,u,c){const h=[],f=gl(r.events,a);c&&(c.end=Object.assign({},f),h.push(["exit",c,r])),u.end=Object.assign({},f),h.push(["exit",u,r]),i.add(a+1,0,h)}function gl(i,r){const a=i[r],u=a[0]==="enter"?"start":"end";return a[1][u]}const mS={name:"tasklistCheck",tokenize:gS};function pS(){return{text:{91:mS}}}function gS(i,r,a){const u=this;return c;function c(p){return u.previous!==null||!u._gfmTasklistFirstContentOfListItem?a(p):(i.enter("taskListCheck"),i.enter("taskListCheckMarker"),i.consume(p),i.exit("taskListCheckMarker"),h)}function h(p){return qe(p)?(i.enter("taskListCheckValueUnchecked"),i.consume(p),i.exit("taskListCheckValueUnchecked"),f):p===88||p===120?(i.enter("taskListCheckValueChecked"),i.consume(p),i.exit("taskListCheckValueChecked"),f):a(p)}function f(p){return p===93?(i.enter("taskListCheckMarker"),i.consume(p),i.exit("taskListCheckMarker"),i.exit("taskListCheck"),m):a(p)}function m(p){return ce(p)?r(p):Ee(p)?i.check({tokenize:yS},r,a)(p):a(p)}}function yS(i,r,a){return Fe(i,u,"whitespace");function u(c){return c===null?a(c):r(c)}}function bS(i){return Rp([GA(),$A(),uS(i),fS(),pS()])}const vS={};function wS(i){const r=this,a=i||vS,u=r.data(),c=u.micromarkExtensions||(u.micromarkExtensions=[]),h=u.fromMarkdownExtensions||(u.fromMarkdownExtensions=[]),f=u.toMarkdownExtensions||(u.toMarkdownExtensions=[]);c.push(bS(a)),h.push(LA()),f.push(jA(a))}const DS=/[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g,AS=Object.hasOwnProperty;class SS{constructor(){this.occurrences,this.reset()}slug(r,a){const u=this;let c=ES(r,a===!0);const h=c;for(;AS.call(u.occurrences,c);)u.occurrences[h]++,c=h+"-"+u.occurrences[h];return u.occurrences[c]=0,c}reset(){this.occurrences=Object.create(null)}}function ES(i,r){return typeof i!="string"?"":(r||(i=i.toLowerCase()),i.replace(DS,"").replace(/ /g,"-"))}function TS(i){const r=i.type==="element"?i.tagName.toLowerCase():"",a=r.length===2&&r.charCodeAt(0)===104?r.charCodeAt(1):0;return a>48&&a<55?a-48:void 0}function kS(i){return"children"in i?kg(i):"value"in i?i.value:""}function xS(i){return i.type==="text"?i.value:"children"in i?kg(i):""}function kg(i){let r=-1;const a=[];for(;++r<i.children.length;)a[r]=xS(i.children[r]);return a.join("")}const CS={},vp=new SS;function FS(i){const a=(i||CS).prefix||"";return function(u){vp.reset(),uu(u,"element",function(c){TS(c)&&!c.properties.id&&(c.properties.id=a+vp.slug(kS(c)))})}}const Qs=[{id:"article5-death-of-middle-management",titleEn:"The Death of Middle Management: Everyone Becomes a TLM",titleZh:"中层管理的死亡：每个人都要成为 TLM",category:"Opinions",date:"2026-05-30",author:"Sean",keywords:["Middle Management","AI Management","TLM","Strategy","Execution"],history:["Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Initial draft","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Added business context and sponsor-finding point","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): High-level structure and argument polish","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Context: The Translation Layer Is Shrinking
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

也是 TLM 的崛起。`},{id:"article6-winning-with-taste-in-ai-era",titleEn:"Winning in the AI Era: Taste Is the Bottleneck",titleZh:"AI 时代如何赢：关键是 Taste",category:"Opinions",date:"2026-05-30",author:"Sean",keywords:["AI Era","Taste","Judgment","Role Models","Frontier Work"],history:["Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Initial draft","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Editorial polish","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Context: Building Is Getting Cheap
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

而是取决于你能不能判断，哪个 artifact 值得存在。`},{id:"article7-ai-regulation-we-need",titleEn:"The AI Regulation We Actually Need",titleZh:"我们真正需要的 AI 监管",category:"Commentary",date:"2026-05-30",author:"Sean",keywords:["AI Regulation","AI Safety","Anthropic","Responsible Scaling","Public Power"],history:["Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Initial draft","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Summary
## 摘要

**English:**

The AI regulation debate keeps falling into two weak positions.

One side says: pause everything before AI becomes dangerous.

The other side says: let the market move, because regulation will only slow innovation.

Both are too simple.

The right question is not whether AI should be regulated. It should.

The right question is what kind of regulation reduces real harm without handing the future to the biggest companies.

Anthropic's Responsible Scaling Policy is useful here. Company policy is not enough. But the shape is right: define capability thresholds, require stronger safeguards as models become more capable, test before deployment, update the rules as the technology changes, and create a public record that can be checked.

That is much better than vague fear.

It is also much better than vague trust.

The AI regulation we need should be targeted, capability-based, auditable, enforceable, pro-competition, and public-serving.

It should prevent catastrophic misuse.

It should also prevent ordinary people from becoming permanently dependent on systems they cannot inspect, contest, or afford.

**中文：**

AI 监管讨论经常掉进两个很弱的位置。

一边说：AI 危险，所以先全部暂停。

另一边说：监管会拖慢创新，所以交给市场。

这两个都太简单。

真正的问题不是 AI 要不要监管。它当然需要监管。

真正的问题是：什么样的监管能减少真实伤害，又不会把未来直接送给最大公司。

Anthropic 的 Responsible Scaling Policy 在这里很有参考价值。公司自律远远不够，但这个框架的形状是对的：定义能力阈值，模型能力越强，安全要求越高；部署前测试；技术变化时更新规则；留下能被检查的公共记录。

这比模糊恐惧好很多。

也比模糊信任好很多。

我们需要的 AI 监管，应该是定向的、基于能力的、可审计的、可执行的、支持竞争的，并且服务公众的。

它要防止灾难性滥用。

也要防止普通人永久依赖那些自己无法检查、无法质疑、也用不起的系统。

## Context: The Debate Is Stuck
## 背景：讨论卡住了

**English:**

The Sanders argument is right about the danger.

AI power is concentrating. Frontier labs, cloud providers, chip companies, and distribution platforms are building a stack that ordinary people cannot easily leave. If AI becomes the interface for work, education, search, coding, customer service, finance, and media, whoever controls that interface controls a lot more than software.

So regulation is necessary.

But a blunt pause is not enough. It can freeze the companies that already have compute, models, capital, lobbyists, and distribution.

No regulation is also not enough. It asks society to trust the same incentives that created surveillance advertising, algorithmic opacity, gig-work arbitrage, dark patterns, and winner-take-most platforms.

The hard path runs between those two failures.

Regulation has to slow dangerous behavior without slowing the distribution of useful capability to ordinary people.

That means regulators need a better unit of analysis.

Not "AI" in general.

Not "data centers" in general.

Not "big models are bad" or "open models are good."

The unit should be capability, risk, deployment context, and control.

**中文：**

Sanders 对危险的判断是对的。

AI 权力正在集中。前沿模型公司、云厂商、芯片公司和分发平台，正在组成一个普通人很难离开的技术栈。如果 AI 变成工作、教育、搜索、编程、客服、金融和媒体的入口，控制这个入口的人控制的就不只是软件。

所以监管是必要的。

但粗暴暂停不够。它可能冻结已经拥有算力、模型、资本、游说能力和分发渠道的大公司。

完全不监管也不够。那等于要求社会继续相信同一套激励，而这套激励已经制造过监控广告、算法黑箱、零工套利、暗黑模式和赢家通吃的平台。

真正难的路穿过这两个失败之间。

监管要减慢危险行为，但不能减慢普通人获得有用能力。

这要求监管者换一个分析单位。

不是笼统的“AI”。

不是笼统的“数据中心”。

不是“大模型就是坏”或“开源模型就是好”。

监管单位应该是能力、风险、部署场景和控制权。

## 1. Regulate Capability, Not Vibes
## 1. 监管能力，不监管情绪

**English:**

The best idea in Anthropic's framework is the if-then structure.

If a model reaches a defined capability threshold, then stronger safeguards are required.

That sounds boring. It is not.

It moves the debate from mood to mechanism.

The question becomes concrete: can this model meaningfully help someone build a biological weapon? Can it carry out cyber operations beyond what existing tools allow? Can it autonomously perform AI research tasks that accelerate the next generation of models? Can it plan and execute long-horizon tasks with low human oversight?

If the answer is no, the model should not face the same burden as a frontier system.

If the answer is yes, the developer should not be allowed to say "trust us" and ship anyway.

This is the right shape for AI regulation because AI risk does not arrive evenly. A small summarization model, a classroom tutor, an internal customer-support assistant, and a frontier agentic model do not create the same risk.

Bad regulation treats them as the same.

Good regulation raises the burden when the capability rises.

**中文：**

Anthropic 这套框架里最好的想法，是 if-then 结构。

如果一个模型达到某个明确能力阈值，那么它就必须满足更高安全要求。

这听起来很无聊，其实不无聊。

它把讨论从情绪推到机制。

问题会变得具体：这个模型能不能显著帮助人制造生物武器？它能不能执行超过现有工具水平的网络攻击？它能不能自主完成 AI 研究任务，从而加速下一代模型？它能不能在很低人工监督下规划并执行长期任务？

如果答案是否定的，它就不该承受和前沿系统一样的监管负担。

如果答案是肯定的，开发者就不能只说一句“相信我们”，然后照常发布。

这是 AI 监管该有的形状，因为 AI 风险不是均匀到来的。一个小型摘要模型、课堂辅导工具、内部客服助手和前沿 agentic model，不会制造同一种风险。

坏监管把它们当成一回事。

好监管在能力上升时提高要求。

## 2. Require Safety Cases Before Deployment
## 2. 部署前要有 Safety Case

**English:**

A serious AI developer should be able to explain why a powerful model is safe enough to train, deploy, and scale.

That explanation should not be a press release.

It should be a safety case.

A safety case says: here are the capabilities we tested, here are the dangerous behaviors we tried to elicit, here are the safeguards we built, here are the failures we found, here is what remains uncertain, and here is why deployment is still justified.

This matters because frontier AI is too complex for slogans.

"We red-teamed it" is not enough.

"The model refused harmful prompts" is not enough.

"We have a policy" is not enough.

The public does not need every sensitive detail. Some security information should stay protected. But regulators and qualified third-party reviewers need enough access to test the claim.

If a company wants to deploy a system that may affect the public, the burden should be on the company to show its work.

**中文：**

一个严肃的 AI 开发者，应该能够解释为什么一个强模型可以安全地训练、部署和扩展。

这种解释不应该是一篇公关稿。

它应该是 safety case。

Safety case 要回答：我们测试了哪些能力，尝试诱发了哪些危险行为，建了哪些防护，发现了哪些失败，还有哪些不确定性，以及为什么在这些条件下仍然可以部署。

这很重要，因为前沿 AI 太复杂，不能靠口号监管。

“我们做过红队测试”不够。

“模型会拒绝危险提示词”不够。

“我们有一份政策”也不够。

公众不需要看到所有敏感细节。有些安全信息应该被保护。但监管者和合格第三方审查者，必须有足够访问权去测试这些说法。

如果一家公司想部署一个会影响公众的系统，举证责任应该在公司身上。

## 3. Third-Party Testing Should Become Real
## 3. 第三方测试要真正存在

**English:**

Self-governance is useful. It cannot be the final answer.

Anthropic says this itself. Its own writing argues that industry testing eventually needs broadly trusted third-party oversight, especially for frontier systems and national-security risks.

That is the right instinct.

The companies building the models have the strongest information. They also have the strongest incentive to ship.

So the regulatory system needs independent testing capacity.

Not symbolic audits.

Not checkbox compliance.

Actual technical testing.

The testing regime should include automated evaluations, expert human elicitation, red-team access, post-deployment incident reporting, and repeat testing when models are updated or given new tools.

Government also needs technical muscle. A regulator that cannot hire people who understand models, evals, security, and deployment will end up outsourcing judgment back to the companies it regulates.

That is how regulation becomes theater.

**中文：**

公司自律有用。它不能成为最终答案。

Anthropic 自己也承认这一点。它关于第三方测试的文章就说，行业测试最终需要被广泛信任的第三方监督，尤其是前沿系统和国家安全风险。

这个直觉是对的。

建模型的公司掌握最多信息。它们也最想发布。

所以监管体系必须拥有独立测试能力。

不是象征性审计。

不是勾选合规表。

而是真正的技术测试。

测试制度应该包括自动化评测、专家人工诱导、红队访问、部署后事故报告，以及模型更新或接入新工具后的重复测试。

政府也需要技术肌肉。一个无法招聘懂模型、eval、安全和部署的人才的监管机构，最后只能把判断外包回被监管公司。

那样的监管只是表演。

## 4. Regulation Must Stay Pro-Competition
## 4. 监管必须支持竞争

**English:**

This is the strongest objection to the Anthropic-style approach.

Capability thresholds, safety cases, testing, audits, and security standards all cost money.

Big labs can pay.

Small labs may not.

If regulation is badly designed, it becomes a moat.

The largest companies will say they support safety. Then they will help write rules that only they can afford to follow.

That is regulatory capture with a moral vocabulary.

So serious AI regulation needs a competition test.

Does this rule reduce actual risk, or does it mostly raise fixed costs?

Does it apply only where capabilities create serious danger, or does it burden every small model and open-source project?

Does it require transparency from frontier labs, or does it let them hide behind trade secrets while smaller actors get squeezed?

Does it preserve public-interest AI, academic research, open-source safety work, and small-company experimentation?

If regulation makes the safest path available only to trillion-dollar companies, it has failed.

**中文：**

这是 Anthropic 式路线最强的反对意见。

能力阈值、safety case、测试、审计和安全标准，都要花钱。

大模型公司付得起。

小团队未必付得起。

如果监管设计很差，它就会变成护城河。

最大公司会说自己支持安全。然后它们会帮助制定只有自己付得起的规则。

这是带着道德词汇的监管俘获。

所以严肃的 AI 监管必须通过竞争测试。

这条规则是在减少真实风险，还是主要提高固定成本？

它只在能力制造严重危险时适用，还是把每个小模型和开源项目都压住？

它是否要求前沿公司透明，还是让它们躲在商业机密后面，同时挤压小玩家？

它是否保留公共利益 AI、学术研究、开源安全工作和小公司实验空间？

如果监管最后让只有万亿美元公司才能走“安全路线”，它就是失败的。

## 5. Do Not Only Regulate Catastrophe
## 5. 不要只监管灾难风险

**English:**

Anthropic's framework is strongest on frontier and catastrophic risks.

That is important. It is not complete.

Most people will experience AI risk before they experience catastrophe.

They will experience it as wage pressure, automated firing, opaque loan decisions, manipulative feeds, synthetic scams, surveillance at work, fake evidence, biased screening, addictive companions, and customer-service systems that cannot be appealed.

These risks are not as cinematic as biological weapons or runaway autonomy.

They are still real.

So AI regulation needs two layers.

The first layer is frontier-risk regulation: capability thresholds, safety cases, testing, model security, misuse controls, incident reporting.

The second layer is public-rights regulation: data rights, explanation rights, appeal rights, labor protections, anti-fraud enforcement, platform accountability, and limits on AI surveillance.

The first layer protects society from extreme misuse.

The second layer protects people from quiet governance by machines they cannot challenge.

We need both.

**中文：**

Anthropic 的框架最强的地方，是前沿风险和灾难性风险。

这很重要。但不完整。

大多数人遇到 AI 风险，不会先遇到灾难。

他们会先遇到工资压力、自动化裁员、黑箱贷款决策、操纵性信息流、合成诈骗、工作场所监控、伪造证据、有偏招聘筛选、上瘾型陪伴产品，以及无法申诉的客服系统。

这些风险没有生物武器或失控自主系统那么有戏剧性。

但它们同样真实。

所以 AI 监管需要两层。

第一层是前沿风险监管：能力阈值、safety case、测试、模型安全、滥用控制、事故报告。

第二层是公共权利监管：数据权利、解释权、申诉权、劳工保护、反欺诈执法、平台问责，以及限制 AI 监控。

第一层保护社会免受极端滥用。

第二层保护普通人，不让他们被自己无法挑战的机器悄悄治理。

两层都需要。

## What Good Regulation Should Look Like
## 好监管应该长什么样

**English:**

A good AI regulatory regime would have a few simple commitments.

First, publish capability thresholds.

Society should know which model capabilities trigger stronger duties.

Second, require safety cases for frontier deployment.

Powerful systems should not be released on vibes.

Third, mandate independent testing where the risk is high enough.

Self-testing can start the process. It cannot end it.

Fourth, require incident reporting.

If a model enables a serious cyber incident, fraud wave, biosecurity concern, election manipulation campaign, or large-scale rights violation, regulators should not learn about it from journalists months later.

Fifth, protect competition.

Compliance should scale with risk, not with the regulator's desire to make every company look like a frontier lab.

Sixth, fund public capacity.

Schools, libraries, community colleges, local governments, unions, public defenders, journalists, and small businesses should have access to safe, affordable AI tools.

Seventh, preserve human appeal.

If AI affects your job, loan, housing, healthcare, education, legal status, or public benefits, you should have a way to understand and challenge the decision.

That is the difference between AI governance and AI bureaucracy.

**中文：**

一套好的 AI 监管制度，应该有几个简单承诺。

第一，公开能力阈值。

社会应该知道，哪些模型能力会触发更高义务。

第二，前沿模型部署前必须提交 safety case。

强系统不能靠感觉发布。

第三，在风险足够高的地方强制独立测试。

自测可以作为开始，但不能作为终点。

第四，要求事故报告。

如果模型导致严重网络安全事件、诈骗潮、生物安全担忧、选举操纵活动，或大规模权利侵害，监管者不应该几个月后才从记者那里知道。

第五，保护竞争。

合规要求应该随风险上升，而不是让每家公司都被迫长成前沿模型公司。

第六，资助公共能力。

学校、图书馆、社区学院、地方政府、工会、公设辩护人、记者和小企业，都应该能使用安全、可负担的 AI 工具。

第七，保留人的申诉权。

如果 AI 影响你的工作、贷款、住房、医疗、教育、法律身份或公共福利，你应该有办法理解并挑战这个决定。

这就是 AI governance 和 AI bureaucracy 的区别。

## Recap
## 回到核心

**English:**

The lesson from Anthropic is not "let Anthropic regulate AI."

The lesson is that AI regulation needs a working mechanism.

Capability thresholds are better than panic.

Safety cases are better than press releases.

Third-party testing is better than self-certification.

Iterative rules are better than static rules written for last year's technology.

But the Sanders warning still matters.

Regulation can also become a tool of monopoly. It can protect the public in language while protecting incumbents in practice.

So the real standard is this:

AI regulation should make dangerous systems harder to deploy recklessly, and useful systems easier for ordinary people to access safely.

It should reduce concentrated risk.

It should also reduce concentrated power.

That is the AI safety we actually need.

**中文：**

从 Anthropic 身上学到的，不是“让 Anthropic 监管 AI”。

真正该学的是：AI 监管需要可运行机制。

能力阈值比恐慌好。

Safety case 比公关稿好。

第三方测试比自我认证好。

可迭代规则比按照去年技术写死的静态规则好。

但 Sanders 的警告仍然重要。

监管也可能变成垄断工具。它可以在语言上保护公众，在实践中保护巨头。

所以真正的标准是：

AI 监管应该让危险系统更难被鲁莽部署，也让有用系统更容易被普通人安全使用。

它要减少集中的风险。

也要减少集中的权力。

这才是我们真正需要的 AI safety。

## References
## 参考资料

**English:**

- Anthropic, ["Anthropic's Responsible Scaling Policy"](https://www.anthropic.com/responsible-scaling-policy?slug=ai-training), last updated May 26, 2026.
- Anthropic, ["Anthropic's Responsible Scaling Policy: Version 3.0"](https://www.anthropic.com/news/responsible-scaling-policy-v3), February 24, 2026.
- Anthropic, ["The case for targeted regulation"](https://www.anthropic.com/news/the-case-for-targeted-regulation), October 2024.
- Anthropic, ["Third-party testing as a key ingredient of AI policy"](https://www.anthropic.com/news/third-party-testing), March 2024.

**中文：**

- Anthropic, ["Anthropic's Responsible Scaling Policy"](https://www.anthropic.com/responsible-scaling-policy?slug=ai-training), last updated May 26, 2026.
- Anthropic, ["Anthropic's Responsible Scaling Policy: Version 3.0"](https://www.anthropic.com/news/responsible-scaling-policy-v3), February 24, 2026.
- Anthropic, ["The case for targeted regulation"](https://www.anthropic.com/news/the-case-for-targeted-regulation), October 2024.
- Anthropic, ["Third-party testing as a key ingredient of AI policy"](https://www.anthropic.com/news/third-party-testing), March 2024.`},{id:"article4-peoples-ai-vs-ai-moratorium",titleEn:"Against the AI Moratorium: The People's AI Must Be Built",titleZh:"反对 AI 暂停键：普通人的 AI 必须被建造出来",category:"Commentary",date:"2026-05-25",author:"Sean",keywords:["Bernie Sanders","AI Moratorium","People-first AI","AI Safety","Big Tech"],history:["Mon May 25 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Initial draft","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Summary
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
- The Hill, ["Bernie Sanders, labor leaders warn of AI risks for workers,"](https://www.sanders.senate.gov/in-the-news/bernie-sanders-labor-leaders-warn-of-ai-risks-for-workers/) April 17, 2026.`},{id:"article1-engineeringbinary",titleEn:"The Engineering Binary: Product, Infrastructure, and the FDE Bridge",titleZh:"工程师的二元演变：产品、基座与 FDE 的桥梁",category:"Opinions",date:"2026-03-29",author:"Sean",keywords:["Engineering Binary","Product vs Infrastructure","FDE","AI Engineering"],history:["Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release","Tue Mar 31 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Added temporal arc, citations, and North Star collaboration section","Wed Apr 01 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Prose rewrite — less formulaic, more human voice","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Introduction: AI Changed The Bottleneck
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

对工程师来说，真正的问题很简单：你拥有什么，是 AI 无法替你拥有的？`},{id:"article2-saas-endgame",titleEn:"The SaaS Endgame: UI Gets Thin, Value Moves Deeper",titleZh:"SaaS 的终局：UI 变薄，价值转向更深处",category:"Opinions",date:"2026-03-29",author:"Sean",keywords:["SaaS","AI SaaS","Distribution","System of Record","Network Effects","Vertical AI"],history:["Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Rewritten around AI-era SaaS value capture","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## Context: The SaaS Surface Is Losing Power
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
- Google, ["Google expands partnership with Reddit"](https://blog.google/inside-google/company-announcements/expanded-reddit-partnership/), February 22, 2024.`},{id:"article3-ai-native-moats",titleEn:"Moats in the AI Native Era: The Trinity of Data, Insight, and Workflow",titleZh:"AI Native 时代的护城河：数据、洞察与工作流的三位一体",category:"Opinions",date:"2026-03-29",author:"Sean",keywords:["AI Moat","Unique Data","Unique Insight","Unique Workflows","Midjourney","Palantir"],history:["Sat Mar 28 2026 17:00:00 GMT-0700 (Pacific Daylight Time): Initial release","Sat May 30 2026 00:00:00 GMT-0700 (Pacific Daylight Time): Full-site editorial polish"],body:`## The 48-Hour Countdown
## 48 小时倒计时

**English:**

The easiest AI startup to build is also the easiest one to kill.

Take a legal summarization tool. It calls an LLM. It formats the answer. It wraps the workflow in a clean UI. Users like it.

Then the base model provider ships the same workflow as a default feature.

The product was useful. It still lost. It was only a configuration. The intelligence was rented. The workflow was shallow. The data was not proprietary. The insight was generic.

That is the problem: many AI products look like companies, but behave like prompt wrappers: thin shells around a model call.

They can get users. They can even get revenue. Then the base model improves, the platform adds the feature, or a competitor rebuilds the same thing over a weekend. The product survives only if it owns something the model provider cannot absorb.

This matters now because the gap between idea and implementation has collapsed. A small team can launch quickly. So can everyone else. Speed helps you start. It does not protect you.

This is the new moat test.

If a better base model can absorb your product, you do not have a moat. You have a timer.

In the AI-native era, durable advantage comes from three places: unique data, unique insight, and unique workflow. Everything else is exposed.

Data gives the system private reality. Insight tells it what that reality means. Workflow makes the product part of how people think and act.

**中文：**

最容易做的 AI startup，也最容易被杀死。

想象一个法律摘要工具。它调用大模型。格式化答案。套上干净的 UI。用户喜欢。

然后基础模型厂商把同样的工作流做成默认功能。

产品有用。它还是输了。因为它只是一段配置。智能是租来的。工作流很浅。数据不独特。洞察也通用。

问题在这里：很多 AI 产品看起来像公司，实际像 prompt wrapper：只是套在模型调用外面的一层薄壳。

它们可以有用户。也可以有收入。然后基础模型变强，平台加上同类功能，竞争对手一个周末复刻。产品只有拥有模型厂商吸收不了的东西，才可能活下来。

为什么现在要讲：idea 到 implementation 的距离被压短了。小团队可以很快上线。其他人也可以。速度能帮你开始，不能保护你。

这就是新的护城河测试。

如果一个更强的基础模型能吸收你的产品，你没有护城河。你只有倒计时。

AI 原生时代，持久优势来自三件事：独特数据、独特洞察、独特工作流。其他东西都暴露在外。

数据给系统私有现实。洞察告诉系统如何理解现实。工作流让产品进入人的思考和行动方式。

---

## 1. Unique Data: Reality Others Cannot See
## 1. 独特数据：别人看不见的现实

**English:**

Data becomes a moat only when it captures reality that others cannot access. Size alone is not enough.

A payments network sees transactions as they happen. Merchant, amount, time, geography, account history, anomaly patterns. That data describes behavior. The business produces it directly. It does not come from the public internet.

That matters.

An AI fraud model trained on first-party transaction truth has a ceiling that a public-data model cannot reach. The algorithm may be similar. The training reality is not.

The same logic applies elsewhere. A media company with decades of creative testing has private signal. A bank with long credit histories has private signal. A logistics company with live operational exceptions has private signal.

A sharper question is this: does our data encode a part of reality only we can see?

If the answer is no, the data is supply chain. It will not protect you.

But data alone is inert. It needs a theory.

**中文：**

数据只有在捕捉别人看不见的现实时，才会成为护城河。规模本身不够。

支付网络能看到交易发生的瞬间。商户、金额、时间、地理位置、账户历史、异常模式。这些数据描述真实行为。它由业务本身产生，不来自公共互联网。

这很重要。

一个用第一方交易真相训练的欺诈模型，有公共数据模型够不到的上限。算法可能相似。训练现实完全不同。

其他行业也一样。拥有多年创意测试记录的媒体公司，有私有信号。拥有长期信贷历史的银行，有私有信号。拥有实时运营异常的物流公司，也有私有信号。

更尖锐的问题是：我们的数据是否编码了只有我们能看见的现实？

如果答案是否定的，那只是数据供应链。它保护不了你。

但数据本身不会行动。它需要一套解释理论。

---

## 2. Unique Insight: The Theory Behind The Data
## 2. 独特洞察：数据背后的理论

**English:**

Data is raw material. Insight is the theory that tells the system what the data means.

A commodities trader may look at shipping disruptions and know which grain prices will move, where, and with what delay. That knowledge adds causality to data. It comes from years of watching reality behave badly.

AI can find correlations. It still needs a frame for interpretation.

Which signal is causal? Which pattern is noise? Which exception breaks the rule? Which metric matters when two signals conflict?

That is insight.

Good organizations encode this insight into how their systems work. Palantir's Ontology is one well-known example. It stores objects and maps how a business thinks: what entities matter, how decisions move, what counts as abnormal, which action should follow which signal.

The test is simple.

Give two companies the same base model. If one makes better decisions, the difference is insight. If both perform the same, neither owns much beyond compute.

Insight explains the world. Workflow changes behavior inside that world.

**中文：**

数据是原材料。洞察是解释数据的理论。

一个大宗商品交易员看到航运中断，可能知道哪些粮食价格会变，在哪里变，延迟多久变。这给数据加上了因果。它来自多年观察现实如何出错。

AI 可以找相关性。但它仍然需要解释框架。

哪个信号是因果？哪个模式只是噪音？哪个例外会击穿规则？两个信号冲突时，哪个指标更重要？

这就是洞察。

好的组织会把洞察编码进系统。Palantir 的 Ontology 是一个典型例子。它存对象，也映射企业如何思考：什么实体重要，决策如何流动，什么算异常，哪个信号之后应该触发什么动作。

测试很简单。

给两家公司同一个基础模型。如果其中一家做出更好决策，差距就是洞察。如果两家表现一样，它们拥有的多半只是算力。

洞察解释世界。工作流改变人在这个世界里的行动。

---

## 3. Unique Workflow: Switching Costs In The Mind
## 3. 独特工作流：存在于大脑里的切换成本

**English:**

The most underrated moat is workflow.

A model can be copied. A feature can be copied. A workflow that has trained a user's habits is harder to copy.

Good workflow changes how people think and act. It creates conventions, shortcuts, templates, feedback loops, and community memory. Leaving the product requires exporting data and unlearning a way of working.

That is cognitive switching cost.

Midjourney is a useful example. Its advantage came from more than the image model. The prompt culture, community feedback loop, aesthetic conventions, and repeated creative practice all became part of the product.

Databricks shows the enterprise version. Once a data team builds ingestion, transformation, governance, notebooks, and ML workflows around a platform, migration becomes a rebuild. The workflow has entered the organization.

This kind of moat compounds. More users create more patterns. More patterns create more shared practice. Shared practice makes the workflow harder to leave.

Seat count does not create that. Workflow does.

**中文：**

最容易被低估的护城河，是工作流。

模型可以复制。功能可以复制。训练过用户习惯的工作流更难复制。

好的工作流会改变人如何思考、如何行动。它创造惯例、快捷方式、模板、反馈循环和社区记忆。离开产品时，用户要导出数据，也要忘掉一种工作方式。

这是认知切换成本。

Midjourney 是一个有用例子。它的优势来自图像模型，也来自提示词文化、社区反馈、美学惯例和反复创作练习。这些都变成了产品的一部分。

Databricks 展示了企业版本。一旦数据团队把摄取、转换、治理、notebook 和 ML 工作流建在一个平台上，迁移就变成重建。工作流已经进入组织。

这种护城河会复利。更多用户创造更多模式。更多模式创造更多共同实践。共同实践让工作流更难离开。

Seat 数量不会创造这个。工作流会。

---

## The Objection: Distribution Still Matters
## 反对意见：Distribution 仍然重要

**English:**

The strongest objection is that data, insight, and workflow are not the whole story.

Distribution still matters. Brand still matters. Capital still matters. Regulatory access still matters. A company with a mediocre product and great distribution can beat a sharper product that nobody sees.

That is true.

But distribution is strongest when it compounds something real.

If a company has distribution but no unique data, no unique insight, and no workflow depth, it can acquire users but may not keep advantage. The base model improves. The platform bundles the feature. The user switches when the same job becomes easier somewhere else.

Distribution can buy attention.

It cannot permanently substitute for owned learning.

The durable version is distribution attached to a compounding core: data that improves with usage, insight that sharpens decisions, and workflow that becomes part of how people operate.

**中文：**

最强的反对意见是：数据、洞察和工作流不是全部。

Distribution 仍然重要。品牌仍然重要。资本仍然重要。监管入口仍然重要。一个产品一般但分发很强的公司，可能打败一个更锋利但没人看见的产品。

这是对的。

但 distribution 最强的时候，是它能放大真实复利。

如果一家公司有 distribution，却没有独特数据、独特洞察和深工作流，它可以获得用户，但未必能长期保住优势。基础模型会进步。平台会打包功能。用户会在同一个任务变得更容易的地方切走。

Distribution 可以买到注意力。

它不能永久替代 owned learning。

真正持久的形态，是 distribution 连接到一个会复利的核心：越用越好的数据，让决策更准的洞察，以及进入人们操作方式里的 workflow。

---

## Conclusion: The 1-Person Unicorn Has To Own Something
## 总结：1 人独角兽也必须拥有东西

**English:**

AI compresses organizations. Work that once required teams can now be done by one person with the right tools.

Moats do not come automatically.

If your output comes from public data, generic prompts, and a workflow any competitor can copy, AI will compress your value too.

The 1-person unicorn is possible only when the person owns leverage. Unique data. Unique insight. Unique workflow. Ideally all three.

That is the real question for companies and individuals:

What do you know, what do you own, and how do you work in a way that a better API key cannot reproduce?

Everything else is exposed.

**中文：**

AI 会压缩组织。过去需要团队完成的工作，现在一个人配合工具就能做。

但护城河不会自动出现。

如果你的产出来自公共数据、通用提示词和竞争对手也能复制的工作流，AI 也会压缩你的价值。

1 人独角兽只有在拥有杠杆时才成立。独特数据。独特洞察。独特工作流。最好三者都有。

这才是公司和个人都该问的问题：

你知道什么？你拥有什么？你如何工作？这些东西里，有哪些是一个更好的 API key 无法复制的？

其他一切都暴露在外。`}],wp=i=>{const r=Date.parse(i.date);return Number.isNaN(r)?0:r},zS=()=>{const i=window.location.pathname.toLowerCase(),r=new URLSearchParams(window.location.search),a=r.get("locale")||r.get("lang");return i.includes("/cn/")||a==="cn"||a==="zh"?"cn":"en"};function MS(){const[i,r]=ii.useState(null),[a,u]=ii.useState(zS),[c,h]=ii.useState(""),f=ii.useRef(null),m=112;ii.useEffect(()=>{const x=()=>{const H=window.location.hash.replace("#","");if(H&&!H.startsWith("section-")){const N=Qs.find(P=>P.id===H);N?(r(N),window.scrollTo(0,0)):r(null)}else window.location.hash||(r(null),window.scrollTo(0,0))};return window.addEventListener("hashchange",x),window.addEventListener("popstate",x),x(),()=>{window.removeEventListener("hashchange",x),window.removeEventListener("popstate",x)}},[]),ii.useEffect(()=>{if(!i)return;const x=()=>{const H=Array.from(document.querySelectorAll(".md-content h2, .md-content h3"));let N=H[0]?.id||"",P=Number.POSITIVE_INFINITY;for(const te of H){const R=Math.abs(te.getBoundingClientRect().top-m);R<P&&(P=R,N=te.id)}h(N)};return window.addEventListener("scroll",x,{passive:!0}),x(),()=>window.removeEventListener("scroll",x)},[i,m]),ii.useEffect(()=>{if(i)return;const x=f.current;if(!x)return;const H=N=>{if(N.deltaY<=0)return;N.preventDefault();const P=x.getBoundingClientRect().bottom+window.scrollY;window.scrollTo({top:P,behavior:"instant"})};return x.addEventListener("wheel",H,{passive:!1}),()=>x.removeEventListener("wheel",H)},[i]);const p=[...Qs].sort((x,H)=>wp(H)-wp(x)),d=x=>{if(!(x.includes("**English:**")||x.includes("**中文：**")))return x.replace(/\\n/g,`
`);const N=x.replace(/\\n/g,`
`).split(`
`),P=[];let te="en";for(let R=0;R<N.length;R++){let Z=N[R];const se=Z.trim();if(se===""){P.push("");continue}if(se.includes("**English:**")){if(te="en",Z=Z.replace("**English:**","").trim(),Z==="")continue}else if(se.includes("**中文：**")){if(te="cn",Z=Z.replace("**中文：**","").trim(),Z==="")continue}else se.startsWith("#")&&(te=/[\u4e00-\u9fa5]/.test(se)?"cn":"en");(a==="en"&&te==="en"||a==="cn"&&te==="cn")&&P.push(Z)}return P.join(`
`)},b=x=>x.split(`
`).filter(N=>N.startsWith("## ")||N.startsWith("### ")).map(N=>{const P=N.startsWith("### ")?3:2,te=N.replace(/^###?\s+/,"").trim(),R=te.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g,"-").replace(/^-+|-+$/g,"");return{level:P,text:te,slug:R}}),y=x=>{const H=x?`#${x}`:`${window.location.pathname}${window.location.search}`;window.history.pushState(null,"",H);const N=x?Qs.find(P=>P.id===x)??null:null;r(N),window.scrollTo(0,0)},D=()=>{const x=a==="cn"?"en":"cn",H=new URL(window.location.href);x==="cn"?H.searchParams.set("lang","cn"):(H.searchParams.delete("lang"),H.searchParams.delete("locale")),window.history.replaceState(null,"",`${H.pathname}${H.search}${H.hash}`),u(x),h("")},w=(x,H)=>re.jsxs("div",{className:"article-card",onClick:()=>y(x.id),children:[re.jsxs("div",{className:"article-number",children:["0",H+1]}),re.jsxs("div",{className:"article-info",children:[re.jsx("h2",{children:a==="cn"?x.titleZh:x.titleEn}),re.jsxs("div",{className:"card-meta",children:[re.jsx("span",{children:x.date})," • ",re.jsx("span",{children:x.keywords.slice(0,3).join(", ")})]})]})]},x.id),C=i?d(i.body):"",L=i?b(C):[],V=i?c:"";return re.jsxs("div",{className:"App",children:[re.jsx("nav",{children:re.jsxs("div",{className:"container nav-content",children:[re.jsx("div",{className:"logo",onClick:()=>y(null),children:"The Sean Thesis"}),re.jsx("button",{className:"language-switch",type:"button",onClick:D,"aria-label":a==="cn"?"Switch to English":"切换到中文",children:a==="cn"?"EN":"中"})]})}),re.jsx("main",{className:"container",children:i?re.jsxs("div",{className:"article-page-layout",children:[re.jsxs("article",{className:"article-view",children:[re.jsxs("span",{className:"back-link",onClick:()=>y(null),children:["← ",a==="cn"?"返回目录":"Back to Index"]}),re.jsxs("div",{className:"article-metadata-shelf",children:[re.jsxs("div",{className:"meta-item",children:[re.jsx("div",{className:"meta-label",children:"Author"}),re.jsx("div",{className:"meta-value",children:i.author})]}),re.jsxs("div",{className:"meta-item",children:[re.jsx("div",{className:"meta-label",children:"Published"}),re.jsx("div",{className:"meta-value",children:i.date})]}),re.jsxs("div",{className:"meta-item",children:[re.jsx("div",{className:"meta-label",children:"Category"}),re.jsx("div",{className:"meta-value",children:i.category})]}),i.keywords.length>0&&re.jsxs("div",{className:"meta-item",children:[re.jsx("div",{className:"meta-label",children:"Keywords"}),re.jsx("div",{className:"meta-value",children:i.keywords.join(", ")})]})]}),re.jsx("h1",{children:a==="cn"?i.titleZh:i.titleEn}),re.jsx("div",{className:"md-content",children:re.jsx(uD,{remarkPlugins:[wS],rehypePlugins:[FS],children:C})}),i.history.length>0&&re.jsxs("div",{className:"edit-history-section",children:[re.jsx("div",{className:"meta-label",children:"Edit History"}),re.jsx("ul",{children:i.history.map((x,H)=>re.jsx("li",{children:x},H))})]})]}),re.jsxs("aside",{className:"toc-sidebar",children:[re.jsx("div",{className:"toc-label",children:"Contents"}),re.jsx("ul",{className:"toc-list",children:L.map((x,H)=>re.jsx("li",{className:`toc-item level-${x.level}${V===x.slug?" active":""}`,children:re.jsx("a",{href:`#${x.slug}`,onClick:N=>{N.preventDefault();const P=document.getElementById(x.slug);if(P){const te=P.getBoundingClientRect().top+window.scrollY-m;window.scrollTo({top:te,behavior:"auto"}),h(x.slug)}},children:x.text})},H))})]})]}):re.jsxs(re.Fragment,{children:[re.jsxs("section",{className:"hero",ref:f,children:[re.jsxs("h1",{children:["Logic",re.jsx("br",{}),"& Intent"]}),re.jsx("p",{children:a==="cn"?"Sean 论题 • 关于技术与商业的系统性思考":"The Sean Thesis • Systemic Thoughts on Technology & Business"})]}),p.length>0&&re.jsxs("div",{className:"category-section",children:[re.jsx("div",{className:"category-label",children:a==="cn"?"Articles / 文章":"Articles"}),re.jsx("section",{className:"article-list",children:p.map((x,H)=>w(x,H))})]})]})}),re.jsxs("footer",{children:["© 2026 THE SEAN THESIS • ",a==="cn"?"逻辑与意图":"LOGIC & INTENT"]})]})}J0.createRoot(document.getElementById("root")).render(re.jsx(ii.StrictMode,{children:re.jsx(MS,{})}));
