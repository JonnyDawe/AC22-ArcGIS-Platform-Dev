"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[5071],{35071:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "l": () => (/* binding */ u)\n/* harmony export */ });\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction t(t,n){for(var e=0;e<n.length;e++){const r=n[e];if("string"!=typeof r&&!Array.isArray(r))for(const n in r)if("default"!==n&&!(n in t)){const e=Object.getOwnPropertyDescriptor(r,n);e&&Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:()=>r[n]})}}return Object.freeze(t)}var n,e,r,i={exports:{}};n=i,e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,"undefined"!=typeof __filename&&(e=e||__filename),r=function(t){var n,r;(t=void 0!==(t=t||{})?t:{}).ready=new Promise((function(t,e){n=t,r=e}));var i,o={};for(i in t)t.hasOwnProperty(i)&&(o[i]=t[i]);var u,s,a,f,c,l="object"==typeof window,p="function"==typeof importScripts,h="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,d="";function m(n){return t.locateFile?t.locateFile(n,d):d+n}h?(d=p?require("path").dirname(d)+"/":__dirname+"/",u=function(t,n){return f||(f=require("fs")),c||(c=require("path")),t=c.normalize(t),f.readFileSync(t,n?null:"utf8")},a=function(t){var n=u(t,!0);return n.buffer||(n=new Uint8Array(n)),b(n.buffer),n},s=function(t,n,e){f||(f=require("fs")),c||(c=require("path")),t=c.normalize(t),f.readFile(t,(function(t,r){t?e(t):n(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof ct))throw t})),process.on("unhandledRejection",G),t.inspect=function(){return"[Emscripten Module object]"}):(l||p)&&(p?d=self.location.href:"undefined"!=typeof document&&document.currentScript&&(d=document.currentScript.src),e&&(d=e),d=0!==d.indexOf("blob:")?d.substr(0,d.lastIndexOf("/")+1):"",u=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.send(null),n.responseText},p&&(a=function(t){var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)}),s=function(t,n,e){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?n(r.response):e()},r.onerror=e,r.send(null)}),t.print||console.log.bind(console);var y,_,g=t.printErr||console.warn.bind(console);for(i in o)o.hasOwnProperty(i)&&(t[i]=o[i]);o=null,t.arguments,t.thisProgram,t.quit,t.wasmBinary&&(y=t.wasmBinary),t.noExitRuntime,"object"!=typeof WebAssembly&&G("no native wasm support detected");var w=!1;function b(t,n){t||G("Assertion failed: "+n)}var v,A,R,E,I,S="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function P(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.subarray&&S)return S.decode(t.subarray(n,i));for(var o="";n<i;){var u=t[n++];if(128&u){var s=63&t[n++];if(192!=(224&u)){var a=63&t[n++];if((u=224==(240&u)?(15&u)<<12|s<<6|a:(7&u)<<18|s<<12|a<<6|63&t[n++])<65536)o+=String.fromCharCode(u);else{var f=u-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else o+=String.fromCharCode((31&u)<<6|s)}else o+=String.fromCharCode(u)}return o}function x(t,n){return t?P(R,t,n):""}function T(t,n){return t%n>0&&(t+=n-t%n),t}function j(n){v=n,t.HEAP8=A=new Int8Array(n),t.HEAP16=new Int16Array(n),t.HEAP32=E=new Int32Array(n),t.HEAPU8=R=new Uint8Array(n),t.HEAPU16=new Uint16Array(n),t.HEAPU32=new Uint32Array(n),t.HEAPF32=new Float32Array(n),t.HEAPF64=new Float64Array(n)}t.INITIAL_MEMORY;var D=[],H=[],O=[];function W(){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)q(t.preRun.shift());Z(D)}function M(){Z(H)}function U(){if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;)F(t.postRun.shift());Z(O)}function q(t){D.unshift(t)}function C(t){H.unshift(t)}function F(t){O.unshift(t)}var B=0,k=null;function z(n){B++,t.monitorRunDependencies&&t.monitorRunDependencies(B)}function L(n){if(B--,t.monitorRunDependencies&&t.monitorRunDependencies(B),0==B&&k){var e=k;k=null,e()}}function G(n){t.onAbort&&t.onAbort(n),g(n+=""),w=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(n);throw r(e),e}t.preloadedImages={},t.preloadedAudios={};var X,N="data:application/octet-stream;base64,";function Y(t){return t.startsWith(N)}function J(t){return t.startsWith("file://")}function K(t){try{if(t==X&&y)return new Uint8Array(y);if(a)return a(t);throw"both async and sync fetching of the wasm failed"}catch(g){G(g)}}function Q(){if(!y&&(l||p)){if("function"==typeof fetch&&!J(X))return fetch(X,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at \'"+X+"\'";return t.arrayBuffer()})).catch((function(){return K(X)}));if(s)return new Promise((function(t,n){s(X,(function(n){t(new Uint8Array(n))}),n)}))}return Promise.resolve().then((function(){return K(X)}))}function V(){var n={a:st};function e(n,e){var r=n.exports;t.asm=r,j((_=t.asm.g).buffer),I=t.asm.m,C(t.asm.h),L()}function i(t){e(t.instance)}function o(t){return Q().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(t){g("failed to asynchronously prepare wasm: "+t),G(t)}))}function u(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Y(X)||J(X)||"function"!=typeof fetch?o(i):fetch(X,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(i,(function(t){return g("wasm streaming compile failed: "+t),g("falling back to ArrayBuffer instantiation"),o(i)}))}))}if(z(),t.instantiateWasm)try{return t.instantiateWasm(n,e)}catch(s){return g("Module.instantiateWasm callback failed with error: "+s),!1}return u().catch(r),{}}function Z(n){for(;n.length>0;){var e=n.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?I.get(r)():I.get(r)(e.arg):r(void 0===e.arg?null:e.arg)}else e(t)}}function $(t,n,e,r){G("Assertion failed: "+x(t)+", at: "+[n?x(n):"unknown filename",e,r?x(r):"unknown function"])}function tt(t){return ft(t+16)+16}function nt(t){this.excPtr=t,this.ptr=t-16,this.set_type=function(t){E[this.ptr+4>>2]=t},this.get_type=function(){return E[this.ptr+4>>2]},this.set_destructor=function(t){E[this.ptr+8>>2]=t},this.get_destructor=function(){return E[this.ptr+8>>2]},this.set_refcount=function(t){E[this.ptr>>2]=t},this.set_caught=function(t){t=t?1:0,A[this.ptr+12>>0]=t},this.get_caught=function(){return 0!=A[this.ptr+12>>0]},this.set_rethrown=function(t){t=t?1:0,A[this.ptr+13>>0]=t},this.get_rethrown=function(){return 0!=A[this.ptr+13>>0]},this.init=function(t,n){this.set_type(t),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=E[this.ptr>>2];E[this.ptr>>2]=t+1},this.release_ref=function(){var t=E[this.ptr>>2];return E[this.ptr>>2]=t-1,1===t}}function et(t,n,e){throw new nt(t).init(n,e),t}function rt(){G()}function it(t,n,e){R.copyWithin(t,n,n+e)}function ot(t){try{return _.grow(t-v.byteLength+65535>>>16),j(_.buffer),1}catch(n){}}function ut(t){var n=R.length,e=2147483648;if((t>>>=0)>e)return!1;for(var r=1;r<=4;r*=2){var i=n*(1+.2/r);if(i=Math.min(i,t+100663296),ot(Math.min(e,T(Math.max(t,i),65536))))return!0}return!1}Y(X="lerc-wasm.wasm")||(X=m(X));var st={a:$,c:tt,b:et,f:rt,d:it,e:ut};V(),t.___wasm_call_ctors=function(){return(t.___wasm_call_ctors=t.asm.h).apply(null,arguments)},t._lerc_getBlobInfo=function(){return(t._lerc_getBlobInfo=t.asm.i).apply(null,arguments)},t._lerc_getDataRanges=function(){return(t._lerc_getDataRanges=t.asm.j).apply(null,arguments)},t._lerc_decode=function(){return(t._lerc_decode=t.asm.k).apply(null,arguments)},t._lerc_decode_4D=function(){return(t._lerc_decode_4D=t.asm.l).apply(null,arguments)};var at,ft=t._malloc=function(){return(ft=t._malloc=t.asm.n).apply(null,arguments)};function ct(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function lt(e){function r(){at||(at=!0,t.calledRun=!0,w||(M(),n(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),U()))}B>0||(W(),B>0||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),r()}),1)):r()))}if(t._free=function(){return(t._free=t.asm.o).apply(null,arguments)},k=function t(){at||lt(),at||(k=t)},t.run=lt,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return lt(),t.ready},n.exports=r;const o=i.exports,u=Object.freeze(t({__proto__:null,default:o},[i.exports]));\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/chunks/lerc-wasm.js?')}}]);