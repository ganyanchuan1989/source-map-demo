/*! For license information please see testLib.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.testLib=t():e.testLib=t()}(self,(function(){return(()=>{"use strict";var e={432:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(294);function n(){throw new Error("报错了")}function i(){return o.createElement("div",null,o.createElement("button",{onClick:n},"error"))}},418:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function n(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,c,f=n(e),u=1;u<arguments.length;u++){for(var p in a=Object(arguments[u]))r.call(a,p)&&(f[p]=a[p]);if(t){c=t(a);for(var s=0;s<c.length;s++)o.call(a,c[s])&&(f[c[s]]=a[c[s]])}}return f}},408:(e,t,r)=>{var o=r(418),n=60103;if("function"==typeof Symbol&&Symbol.for){var i=Symbol.for;n=i("react.element"),i("react.portal"),i("react.fragment"),i("react.strict_mode"),i("react.profiler"),i("react.provider"),i("react.context"),i("react.forward_ref"),i("react.suspense"),i("react.memo"),i("react.lazy")}"function"==typeof Symbol&&Symbol.iterator;function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var c={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function u(e,t,r){this.props=e,this.context=t,this.refs=f,this.updater=r||c}function p(){}function s(e,t,r){this.props=e,this.context=t,this.refs=f,this.updater=r||c}u.prototype.isReactComponent={},u.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(a(85));this.updater.enqueueSetState(this,e,t,"setState")},u.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},p.prototype=u.prototype;var l=s.prototype=new p;l.constructor=s,o(l,u.prototype),l.isPureReactComponent=!0;var d=null,y=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,r){var o,i={},a=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)y.call(t,o)&&!b.hasOwnProperty(o)&&(i[o]=t[o]);var f=arguments.length-2;if(1===f)i.children=r;else if(1<f){for(var u=Array(f),p=0;p<f;p++)u[p]=arguments[p+2];i.children=u}if(e&&e.defaultProps)for(o in f=e.defaultProps)void 0===i[o]&&(i[o]=f[o]);return{$$typeof:n,type:e,key:a,ref:c,props:i,_owner:d}}},294:(e,t,r)=>{e.exports=r(408)}},t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}return r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(432)})()}));
//# sourceMappingURL=testLib.js.map