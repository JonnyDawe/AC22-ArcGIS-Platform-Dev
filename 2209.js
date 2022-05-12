"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[2209],{42209:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "registerFunctions": () => (/* binding */ T)\n/* harmony export */ });\n/* harmony import */ var _Dictionary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19249);\n/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94837);\n/* harmony import */ var _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68673);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction p(e){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?_Dictionary_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].convertObjectToArcadeDictionary */ .Z.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .layerFieldEsriConstants */ .yE[e.field.type],codedValues:e.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):_Dictionary_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].convertObjectToArcadeDictionary */ .Z.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_2__/* .layerFieldEsriConstants */ .yE[e.field.type],min:e.domain.min,max:e.domain.max}):null}function T(h){"async"===h.mode&&(h.functions.domain=function(n,u){return h.standardFunctionAsync(n,u,(function(n,u,d){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.p)(d,2,3),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.k)(d[0])){return p((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.T)(d[0],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.d)(d[1]),void 0===d[2]?void 0:(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.t)(d[2])))}if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.q)(d[0]))return d[0]._ensureLoaded().then((()=>p((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.d)(d[1]),d[0],null,void 0===d[2]?void 0:(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.t)(d[2])))));throw new Error("Invalid Parameter")}))},h.functions.subtypes=function(t,o){return h.standardFunctionAsync(t,o,(function(t,o,a){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.p)(a,1,1),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.k)(a[0])){const e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.Q)(a[0]);return e?_Dictionary_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].convertObjectToArcadeDictionary */ .Z.convertObjectToArcadeDictionary(e):null}if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.q)(a[0]))return a[0]._ensureLoaded().then((()=>{const e=a[0].subtypes();return e?_Dictionary_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].convertObjectToArcadeDictionary */ .Z.convertObjectToArcadeDictionary(e):null}));throw new Error("Invalid Parameter")}))},h.functions.domainname=function(n,t){return h.standardFunctionAsync(n,t,(function(n,t,u){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.p)(u,2,4),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.k)(u[0]))return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.U)(u[0],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.d)(u[1]),u[2],void 0===u[3]?void 0:(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.t)(u[3]));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.q)(u[0]))return u[0]._ensureLoaded().then((()=>{const n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.d)(u[1]),u[0],null,void 0===u[3]?void 0:(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.t)(u[3]));return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__._)(n,u[2])}));throw new Error("Invalid Parameter")}))},h.signatures.push({name:"domainname",min:"2",max:"4"}),h.functions.domaincode=function(n,t){return h.standardFunctionAsync(n,t,(function(n,t,u){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.p)(u,2,4),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.k)(u[0]))return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.V)(u[0],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.d)(u[1]),u[2],void 0===u[3]?void 0:(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.t)(u[3]));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.q)(u[0]))return u[0]._ensureLoaded().then((()=>{const n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.d)(u[1]),u[0],null,void 0===u[3]?void 0:(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.t)(u[3]));return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.$)(n,u[2])}));throw new Error("Invalid Parameter")}))},h.signatures.push({name:"domaincode",min:"2",max:"4"})),h.functions.text=function(n,r){return h.standardFunctionAsync(n,r,(function(n,r,t){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.p)(t,1,2),!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.q)(t[0]))return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.u)(t[0],t[1]);{const e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.C)(t[1],"");if(""===e)return t[0].castToText();if("schema"===e.toLowerCase())return t[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return t[0].convertToText("featureset",n.abortSignal)}}))},h.functions.gdbversion=function(n,t){return h.standardFunctionAsync(n,t,(function(n,t,o){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.p)(o,1,1),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.k)(o[0]))return o[0].gdbVersion();if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.q)(o[0]))return o[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},h.functions.schema=function(t,o){return h.standardFunctionAsync(t,o,(function(t,o,a){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.p)(a,1,1),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.q)(a[0]))return a[0].load().then((()=>_Dictionary_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].convertObjectToArcadeDictionary */ .Z.convertObjectToArcadeDictionary(a[0].schema())));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.k)(a[0])){const e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__.P)(a[0]);return e?_Dictionary_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].convertObjectToArcadeDictionary */ .Z.convertObjectToArcadeDictionary(e):null}throw new Error("Invalid Parameter")}))}}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/arcade/functions/featuresetstring.js?')}}]);