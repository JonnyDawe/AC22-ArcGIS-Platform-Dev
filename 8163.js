"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[8163],{88163:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "registerFunctions": () => (/* binding */ fn)\n/* harmony export */ });\n/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88256);\n/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4080);\n/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94837);\n/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5306);\n/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78668);\n/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91772);\n/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20031);\n/* harmony import */ var _geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15917);\n/* harmony import */ var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74304);\n/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53446);\n/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(89542);\n/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90819);\n/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53736);\n/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17321);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction un(t){return 0===_kernel_js__WEBPACK_IMPORTED_MODULE_0__/* .version.indexOf */ .i8.indexOf("4.")?_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"].fromExtent */ .Z.fromExtent(t):new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z({spatialReference:t.spatialReference,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})}function sn(n){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(n,2,2),n[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z&&n[1]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);else if(n[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z&&null===n[1]);else if(n[1]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new Error("Illegal Argument")}function an(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .resolve */ .DB)(0);let r=1;if(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid){r=(0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__/* .getMetersPerVerticalUnitForSR */ ._R)(n.spatialReference)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .getMetersPerUnitForSR */ .c9)(n.spatialReference)}let e=0;if("polyline"===n.type)for(const i of n.paths)for(let n=1;n<i.length;n++)e+=(0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__/* .segmentLength3d */ .AW)(i[n],i[n-1],r);else if("polygon"===n.type)for(const i of n.rings){for(let n=1;n<i.length;n++)e+=(0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__/* .segmentLength3d */ .AW)(i[n],i[n-1],r);(i[0][0]!==i[i.length-1][0]||i[0][1]!==i[i.length-1][1]||void 0!==i[0][2]&&i[0][2]!==i[i.length-1][2])&&(e+=(0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__/* .segmentLength3d */ .AW)(i[0],i[i.length-1],r))}else"extent"===n.type&&(e+=2*(0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__/* .segmentLength3d */ .AW)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],r),e+=2*(0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__/* .segmentLength3d */ .AW)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],r),e*=2,e+=4*Math.abs((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(n.zmax,0)*r-(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(n.zmin,0)*r));const o=new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,e]]});return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .planarLength */ .sz)(o,t)}function fn(n){"async"===n.mode&&(n.functions.disjoint=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r)),null===r[0]||null===r[1]||(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .disjoint */ .ED)(r[0],r[1])}))},n.functions.intersects=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r)),null!==r[0]&&null!==r[1]&&(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .intersects */ .kK)(r[0],r[1])}))},n.functions.touches=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r)),null!==r[0]&&null!==r[1]&&(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .touches */ .W4)(r[0],r[1])}))},n.functions.crosses=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r)),null!==r[0]&&null!==r[1]&&(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .crosses */ .jU)(r[0],r[1])}))},n.functions.within=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r)),null!==r[0]&&null!==r[1]&&(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .within */ .uh)(r[0],r[1])}))},n.functions.contains=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r)),null!==r[0]&&null!==r[1]&&(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .contains */ .r3)(r[0],r[1])}))},n.functions.overlaps=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r)),null!==r[0]&&null!==r[1]&&(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .overlaps */ .Nm)(r[0],r[1])}))},n.functions.equals=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,2,2),r[0]===r[1]||(r[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z&&r[1]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z?(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .equals */ .fS)(r[0],r[1]):!(!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(r[0])||!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.o)(r[1]))&&r[0].getTime()===r[1].getTime())}))},n.functions.relate=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,3,3),r[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z&&r[1]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .relate */ .LV)(r[0],r[1],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.d)(r[2]));if(r[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z&&null===r[1])return!1;if(r[1]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z&&null===r[0])return!1;if(null===r[0]&&null===r[1])return!1;throw new Error("Illegal Argument")}))},n.functions.intersection=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){return sn(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r)),null===r[0]||null===r[1]?null:(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .intersect */ .wf)(r[0],r[1])}))},n.functions.union=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,i){const l=[];if(0===(i=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(i)).length)throw new Error("Function called with wrong number of Parameters");if(1===i.length)if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(i[0])){const n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(i[0]);for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");l.push(n[t])}}else{if(!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(i[0])){if(i[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.s)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(i[0]),r.spatialReference);if(null===i[0])return null;throw new Error("Illegal Argument")}{const n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(i[0].toArray());for(let t=0;t<n.length;t++)if(null!==n[t]){if(!(n[t]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");l.push(n[t])}}}else for(let t=0;t<i.length;t++)if(null!==i[t]){if(!(i[t]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");l.push(i[t])}return 0===l.length?null:(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .union */ .G0)(l)}))},n.functions.difference=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){return sn(e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(e)),null!==e[0]&&null===e[1]?(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(e[0]):null===e[0]?null:(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .difference */ .e5)(e[0],e[1])}))},n.functions.symmetricdifference=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){return sn(e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(e)),null===e[0]&&null===e[1]?null:null===e[0]?(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(e[1]):null===e[1]?(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(e[0]):(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .symmetricDifference */ .Sp)(e[0],e[1])}))},n.functions.clip=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,2,2),!(r[1]instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)&&null!==r[1])throw new Error("Illegal Argument");if(null===r[0])return null;if(!(r[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return null===r[1]?null:(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .clip */ .oq)(r[0],r[1])}))},n.functions.cut=function(r,e){return n.standardFunctionAsync(r,e,(function(n,r,e){if(e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(e),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(e,2,2),!(e[1]instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)&&null!==e[1])throw new Error("Illegal Argument");if(null===e[0])return[];if(!(e[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return null===e[1]?[(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(e[0])]:(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .cut */ .z7)(e[0],e[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,l){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l,1,2),null===(l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(l))[0])return 0;if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.q)(l[0]))return l[0].sumArea((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertSquareUnitsToCode */ .EI)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])){const n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l[0],t.spatialReference);return null===n?0:(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .planarArea */ .CJ)(n,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertSquareUnitsToCode */ .EI)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)))}if(!(l[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .planarArea */ .CJ)(l[0],(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertSquareUnitsToCode */ .EI)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(function(n,e,l){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l,1,2),null===(l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(l))[0])return 0;if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.q)(l[0]))return l[0].sumArea((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertSquareUnitsToCode */ .EI)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])){const n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.K)(l[0],t.spatialReference);return null===n?0:(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .geodesicArea */ .Y4)(n,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertSquareUnitsToCode */ .EI)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)))}if(!(l[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .geodesicArea */ .Y4)(l[0],(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertSquareUnitsToCode */ .EI)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)))}))},n.functions.length=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l,1,2),null===(l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(l))[0])return 0;if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.q)(l[0]))return l[0].sumLength((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)),!1,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])){const n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.J)(l[0],t.spatialReference);return null===n?0:(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .planarLength */ .sz)(n,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)))}if(!(l[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .planarLength */ .sz)(l[0],(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)))}))},n.functions.length3d=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l,1,2),null===(l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(l))[0])return 0;if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])){const n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.J)(l[0],t.spatialReference);return null===n?0:!0===n.hasZ?an(n,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1))):(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .planarLength */ .sz)(n,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)))}if(!(l[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return!0===l[0].hasZ?an(l[0],(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1))):(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .planarLength */ .sz)(l[0],(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)))}))},n.functions.lengthgeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l,1,2),null===(l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(l))[0])return 0;if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.q)(l[0]))return l[0].sumLength((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)),!0,t.abortSignal).then((n=>{if(t.abortSignal.aborted)throw new Error("Operation has been cancelled.");return n}));if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0])){const n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.J)(l[0],t.spatialReference);return null===n?0:(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .geodesicLength */ .kQ)(n,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)))}if(!(l[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .geodesicLength */ .kQ)(l[0],(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[1],-1)))}))},n.functions.distance=function(t,r){return n.standardFunctionAsync(t,r,(function(n,r,l){l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(l),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l,2,3);let u=l[0];((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0]))&&(u=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.L)(l[0],t.spatialReference));let f=l[1];if(((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[1])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[1]))&&(f=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.L)(l[1],t.spatialReference)),!(u instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");if(!(f instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .distance */ .TE)(u,f,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[2],-1)))}))},n.functions.distancegeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,2,3);const l=r[0],u=r[1];if(!(l instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z))throw new Error("Illegal Argument");if(!(u instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z))throw new Error("Illegal Argument");const s=new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z({paths:[],spatialReference:l.spatialReference});return s.addPath([l,u]),(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .geodesicLength */ .kQ)(s,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[2],-1)))}))},n.functions.densify=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,2,3),null===r[0])return null;if(!(r[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");const l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(r[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return r[0]instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z||r[0]instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z?(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .densify */ .Cz)(r[0],l,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[2],-1))):r[0]instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z?(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .densify */ .Cz)(un(r[0]),l,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[2],-1))):r[0]}))},n.functions.densifygeodetic=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,2,3),null===r[0])return null;if(!(r[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");const l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(r[1]);if(isNaN(l))throw new Error("Illegal Argument");if(l<=0)throw new Error("Illegal Argument");return r[0]instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z||r[0]instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z?(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .geodesicDensify */ .j2)(r[0],l,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[2],-1))):r[0]instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z?(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .geodesicDensify */ .j2)(un(r[0]),l,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[2],-1))):r[0]}))},n.functions.generalize=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,2,4),null===r[0])return null;if(!(r[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");const l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(r[1]);if(isNaN(l))throw new Error("Illegal Argument");return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .generalize */ .D$)(r[0],l,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.z)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[2],!0)),(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[3],-1)))}))},n.functions.buffer=function(r,l){return n.standardFunctionAsync(r,l,(function(n,r,l){if(l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(l),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l,2,3),null===l[0])return null;if(!(l[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");const u=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(l[1]);if(isNaN(u))throw new Error("Illegal Argument");return 0===u?(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(l[0]):(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .buffer */ .f3)(l[0],u,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[2],-1)))}))},n.functions.buffergeodetic=function(r,l){return n.standardFunctionAsync(r,l,(function(n,r,l){if(l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(l),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l,2,3),null===l[0])return null;if(!(l[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");const u=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(l[1]);if(isNaN(u))throw new Error("Illegal Argument");return 0===u?(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(l[0]):(0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .geodesicBuffer */ .rd)(l[0],u,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(l[2],-1)))}))},n.functions.offset=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,2,6),null===r[0])return null;if(!(r[0]instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z||r[0]instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z))throw new Error("Illegal Argument");const l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(r[1]);if(isNaN(l))throw new Error("Illegal Argument");const s=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[4],10));if(isNaN(s))throw new Error("Illegal Argument");const a=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[5],0));if(isNaN(a))throw new Error("Illegal Argument");return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .offset */ .cv)(r[0],l,(0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .convertLinearUnitsToCode */ .Lz)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[2],-1)),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.d)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[3],"round")).toLowerCase(),s,a)}))},n.functions.rotate=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,2,3);let e=r[0];if(null===e)return null;if(!(e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");e instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z&&(e=_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"].fromExtent */ .Z.fromExtent(e));const l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.t)(r[1]);if(isNaN(l))throw new Error("Illegal Argument");const u=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.C)(r[2],null);if(null===u)return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .rotate */ .U1)(e,l);if(u instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .rotate */ .U1)(e,l,u);throw new Error("Illegal Argument")}))},n.functions.centroid=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,l){if(l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(l),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l,1,1),null===l[0])return null;let u=l[0];if(((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.a)(l[0])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.b)(l[0]))&&(u=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.L)(l[0],r.spatialReference)),null===u)return null;if(!(u instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return u instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z?(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.s)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(l[0]),r.spatialReference):u instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z?u.centroid:u instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z?(0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__/* .centroidPolyline */ .s9)(u):u instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z?(0,_centroid_js__WEBPACK_IMPORTED_MODULE_3__/* .centroidMultiPoint */ .Ay)(u):u instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z?u.center:null}))},n.functions.multiparttosinglepart=function(r,e){return n.standardFunctionAsync(r,e,(function(n,e,l){l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(l),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(l,1,1);const u=[];if(null===l[0])return null;if(!(l[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");if(l[0]instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)return[(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.s)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(l[0]),r.spatialReference)];if(l[0]instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)return[(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.s)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(l[0]),r.spatialReference)];return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .simplify */ .og)(l[0]).then((n=>{if(n instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z){const t=[],r=[];for(let e=0;e<n.rings.length;e++)if(n.isClockwise(n.rings[e])){const r=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .fromJSON */ .im)({rings:[n.rings[e]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(r)}else r.push({ring:n.rings[e],pt:n.getPoint(e,0)});for(let n=0;n<r.length;n++)for(let e=0;e<t.length;e++)if(t[e].contains(r[n].pt)){t[e].addRing(r[n].ring);break}return t}if(n instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z){const t=[];for(let r=0;r<n.paths.length;r++){const e=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .fromJSON */ .im)({paths:[n.paths[r]],hasZ:!0===n.hasZ,hazM:!0===n.hasM,spatialReference:n.spatialReference.toJSON()});t.push(e)}return t}if(l[0]instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z){const n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.s)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneGeometry */ .r1)(l[0]),r.spatialReference);for(let t=0;t<n.points.length;t++)u.push(n.getPoint(t));return u}return null}))}))},n.functions.issimple=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,1,1),null===r[0])return!0;if(!(r[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .isSimple */ .Gg)(r[0])}))},n.functions.simplify=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.H)(r),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_2__.p)(r,1,1),null===r[0])return null;if(!(r[0]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))throw new Error("Illegal Argument");return (0,_geometry_geometryEngineAsync_js__WEBPACK_IMPORTED_MODULE_7__/* .simplify */ .og)(r[0])}))})}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/arcade/functions/geomasync.js?')}}]);