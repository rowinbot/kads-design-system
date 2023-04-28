"use strict";function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r,t={exports:{}},n={exports:{}},o={};var a,i,c,u,f,s,p,l,y,d,m,b,v,h,g={};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function S(){return i||(i=1,"production"===process.env.NODE_ENV?n.exports=function(){if(r)return o;r=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,a=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,c=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,f=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,d=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,b=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case s:case p:case a:case c:case i:case y:return e;default:switch(e=e&&e.$$typeof){case f:case l:case b:case m:case u:return e;default:return r}}case n:return r}}}function w(e){return O(e)===p}return o.AsyncMode=s,o.ConcurrentMode=p,o.ContextConsumer=f,o.ContextProvider=u,o.Element=t,o.ForwardRef=l,o.Fragment=a,o.Lazy=b,o.Memo=m,o.Portal=n,o.Profiler=c,o.StrictMode=i,o.Suspense=y,o.isAsyncMode=function(e){return w(e)||O(e)===s},o.isConcurrentMode=w,o.isContextConsumer=function(e){return O(e)===f},o.isContextProvider=function(e){return O(e)===u},o.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},o.isForwardRef=function(e){return O(e)===l},o.isFragment=function(e){return O(e)===a},o.isLazy=function(e){return O(e)===b},o.isMemo=function(e){return O(e)===m},o.isPortal=function(e){return O(e)===n},o.isProfiler=function(e){return O(e)===c},o.isStrictMode=function(e){return O(e)===i},o.isSuspense=function(e){return O(e)===y},o.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===c||e===i||e===y||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===m||e.$$typeof===u||e.$$typeof===f||e.$$typeof===l||e.$$typeof===h||e.$$typeof===g||e.$$typeof===S||e.$$typeof===v)},o.typeOf=O,o}():n.exports=(a||(a=1,"production"!==process.env.NODE_ENV&&function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,u=e?Symbol.for("react.async_mode"):60111,f=e?Symbol.for("react.concurrent_mode"):60111,s=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,l=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,h=e?Symbol.for("react.scope"):60119;function S(e){if("object"==typeof e&&null!==e){var l=e.$$typeof;switch(l){case r:var m=e.type;switch(m){case u:case f:case n:case a:case o:case p:return m;default:var b=m&&m.$$typeof;switch(b){case c:case s:case d:case y:case i:return b;default:return l}}case t:return l}}}var O=u,w=f,E=c,x=i,$=r,T=s,j=n,P=d,_=y,N=t,C=a,R=o,k=p,I=!1;function M(e){return S(e)===f}g.AsyncMode=O,g.ConcurrentMode=w,g.ContextConsumer=E,g.ContextProvider=x,g.Element=$,g.ForwardRef=T,g.Fragment=j,g.Lazy=P,g.Memo=_,g.Portal=N,g.Profiler=C,g.StrictMode=R,g.Suspense=k,g.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||S(e)===u},g.isConcurrentMode=M,g.isContextConsumer=function(e){return S(e)===c},g.isContextProvider=function(e){return S(e)===i},g.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},g.isForwardRef=function(e){return S(e)===s},g.isFragment=function(e){return S(e)===n},g.isLazy=function(e){return S(e)===d},g.isMemo=function(e){return S(e)===y},g.isPortal=function(e){return S(e)===t},g.isProfiler=function(e){return S(e)===a},g.isStrictMode=function(e){return S(e)===o},g.isSuspense=function(e){return S(e)===p},g.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===f||e===a||e===o||e===p||e===l||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===y||e.$$typeof===i||e.$$typeof===c||e.$$typeof===s||e.$$typeof===b||e.$$typeof===v||e.$$typeof===h||e.$$typeof===m)},g.typeOf=S}()),g)),n.exports}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/function O(){if(u)return c;u=1;var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;return c=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(n,o){for(var a,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(n),u=1;u<arguments.length;u++){for(var f in a=Object(arguments[u]))r.call(a,f)&&(c[f]=a[f]);if(e){i=e(a);for(var s=0;s<i.length;s++)t.call(a,i[s])&&(c[i[s]]=a[i[s]])}}return c},c}function w(){if(s)return f;s=1;return f="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function E(){return l?p:(l=1,p=Function.call.bind(Object.prototype.hasOwnProperty))}if("production"!==process.env.NODE_ENV){var x=S();t.exports=function(){if(b)return m;b=1;var e=S(),r=O(),t=w(),n=E(),o=function(){if(d)return y;d=1;var e=function(){};if("production"!==process.env.NODE_ENV){var r=w(),t={},n=E();e=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}}function o(o,a,i,c,u){if("production"!==process.env.NODE_ENV)for(var f in o)if(n(o,f)){var s;try{if("function"!=typeof o[f]){var p=Error((c||"React class")+": "+i+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}s=o[f](a,f,c,i,null,r)}catch(e){s=e}if(!s||s instanceof Error||e((c||"React class")+": type specification of "+i+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof s+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),s instanceof Error&&!(s.message in t)){t[s.message]=!0;var l=u?u():"";e("Failed "+i+" type: "+s.message+(null!=l?l:""))}}}return o.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(t={})},y=o}(),a=function(){};function i(){return null}return"production"!==process.env.NODE_ENV&&(a=function(e){var r="Warning: "+e;"undefined"!=typeof console&&console.error(r);try{throw new Error(r)}catch(e){}}),m=function(c,u){var f="function"==typeof Symbol&&Symbol.iterator,s="@@iterator",p="<<anonymous>>",l={array:b("array"),bigint:b("bigint"),bool:b("boolean"),func:b("function"),number:b("number"),object:b("object"),string:b("string"),symbol:b("symbol"),any:m(i),arrayOf:function(e){return m((function(r,n,o,a,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var c=r[n];if(!Array.isArray(c))return new d("Invalid "+a+" `"+i+"` of type `"+g(c)+"` supplied to `"+o+"`, expected an array.");for(var u=0;u<c.length;u++){var f=e(c,u,o,a,i+"["+u+"]",t);if(f instanceof Error)return f}return null}))},element:m((function(e,r,t,n,o){var a=e[r];return c(a)?null:new d("Invalid "+n+" `"+o+"` of type `"+g(a)+"` supplied to `"+t+"`, expected a single ReactElement.")})),elementType:m((function(r,t,n,o,a){var i=r[t];return e.isValidElementType(i)?null:new d("Invalid "+o+" `"+a+"` of type `"+g(i)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(r,t,n,o,a){if(!(r[t]instanceof e)){var i=e.name||p;return new d("Invalid "+o+" `"+a+"` of type `"+((c=r[t]).constructor&&c.constructor.name?c.constructor.name:p)+"` supplied to `"+n+"`, expected instance of `"+i+"`.")}var c;return null}))},node:m((function(e,r,t,n,o){return h(e[r])?null:new d("Invalid "+n+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(r,o,a,i,c){if("function"!=typeof e)return new d("Property `"+c+"` of component `"+a+"` has invalid PropType notation inside objectOf.");var u=r[o],f=g(u);if("object"!==f)return new d("Invalid "+i+" `"+c+"` of type `"+f+"` supplied to `"+a+"`, expected an object.");for(var s in u)if(n(u,s)){var p=e(u,s,a,i,c+"."+s,t);if(p instanceof Error)return p}return null}))},oneOf:function(e){return Array.isArray(e)?m((function(r,t,n,o,a){for(var i=r[t],c=0;c<e.length;c++)if(y(i,e[c]))return null;var u=JSON.stringify(e,(function(e,r){return"symbol"===S(r)?String(r):r}));return new d("Invalid "+o+" `"+a+"` of value `"+String(i)+"` supplied to `"+n+"`, expected one of "+u+".")})):("production"!==process.env.NODE_ENV&&a(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),i)},oneOfType:function(e){if(!Array.isArray(e))return"production"!==process.env.NODE_ENV&&a("Invalid argument supplied to oneOfType, expected an instance of array."),i;for(var r=0;r<e.length;r++){var o=e[r];if("function"!=typeof o)return a("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+O(o)+" at index "+r+"."),i}return m((function(r,o,a,i,c){for(var u=[],f=0;f<e.length;f++){var s=(0,e[f])(r,o,a,i,c,t);if(null==s)return null;s.data&&n(s.data,"expectedType")&&u.push(s.data.expectedType)}return new d("Invalid "+i+" `"+c+"` supplied to `"+a+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(r,n,o,a,i){var c=r[n],u=g(c);if("object"!==u)return new d("Invalid "+a+" `"+i+"` of type `"+u+"` supplied to `"+o+"`, expected `object`.");for(var f in e){var s=e[f];if("function"!=typeof s)return v(o,a,i,f,S(s));var p=s(c,f,o,a,i+"."+f,t);if(p)return p}return null}))},exact:function(e){return m((function(o,a,i,c,u){var f=o[a],s=g(f);if("object"!==s)return new d("Invalid "+c+" `"+u+"` of type `"+s+"` supplied to `"+i+"`, expected `object`.");var p=r({},o[a],e);for(var l in p){var y=e[l];if(n(e,l)&&"function"!=typeof y)return v(i,c,u,l,S(y));if(!y)return new d("Invalid "+c+" `"+u+"` key `"+l+"` supplied to `"+i+"`.\nBad object: "+JSON.stringify(o[a],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=y(f,l,i,c,u+"."+l,t);if(m)return m}return null}))}};function y(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}function d(e,r){this.message=e,this.data=r&&"object"==typeof r?r:{},this.stack=""}function m(e){if("production"!==process.env.NODE_ENV)var r={},n=0;function o(o,i,c,f,s,l,y){if(f=f||p,l=l||c,y!==t){if(u){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){var b=f+":"+c;!r[b]&&n<3&&(a("You are manually calling a React.PropTypes validation function for the `"+l+"` prop on `"+f+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[b]=!0,n++)}}return null==i[c]?o?null===i[c]?new d("The "+s+" `"+l+"` is marked as required in `"+f+"`, but its value is `null`."):new d("The "+s+" `"+l+"` is marked as required in `"+f+"`, but its value is `undefined`."):null:e(i,c,f,s,l)}var i=o.bind(null,!1);return i.isRequired=o.bind(null,!0),i}function b(e){return m((function(r,t,n,o,a,i){var c=r[t];return g(c)!==e?new d("Invalid "+o+" `"+a+"` of type `"+S(c)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,r,t,n,o){return new d((e||"React class")+": "+r+" type `"+t+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function h(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(h);if(null===e||c(e))return!0;var r=function(e){var r=e&&(f&&e[f]||e[s]);if("function"==typeof r)return r}(e);if(!r)return!1;var t,n=r.call(e);if(r!==e.entries){for(;!(t=n.next()).done;)if(!h(t.value))return!1}else for(;!(t=n.next()).done;){var o=t.value;if(o&&!h(o[1]))return!1}return!0;default:return!1}}function g(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return"symbol"===e||!!r&&("Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol)}(r,e)?"symbol":r}function S(e){if(null==e)return""+e;var r=g(e);if("object"===r){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return r}function O(e){var r=S(e);switch(r){case"array":case"object":return"an "+r;case"boolean":case"date":case"regexp":return"a "+r;default:return r}}return d.prototype=Error.prototype,l.checkPropTypes=o,l.resetWarningCache=o.resetWarningCache,l.PropTypes=l,l},m}()(x.isElement,!0)}else t.exports=function(){if(h)return v;h=1;var e=w();function r(){}function t(){}return t.resetWarningCache=r,v=function(){function n(r,t,n,o,a,i){if(i!==e){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function o(){return n}n.isRequired=n;var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:o,element:n,elementType:n,instanceOf:o,node:n,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:r};return a.PropTypes=a,a}}()();var $=e(t.exports);function T(e){var r=e.children;return React.createElement("button",{style:{backgroundColor:"#fff",border:"1px solid #000",padding:"0.5rem",borderRadius:"0.25rem",color:"#000",fontSize:"1rem",textTransform:"uppercase",cursor:"pointer"}},r)}function j(e){var r=e.children,t=e.order,n="h".concat(void 0===t?1:t);return React.createElement(n,{style:{textTransform:"uppercase"}},r)}T.propTypes={children:$.elementType.isRequired},j.propTypes={children:$.elementType.isRequired,order:$.oneOf([1,2,3,4,5,6])},exports.Button=T,exports.Title=j;
//# sourceMappingURL=index.js.map
