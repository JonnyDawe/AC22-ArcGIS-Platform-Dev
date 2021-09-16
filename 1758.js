"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[1758,1211],{13097:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "p": () => (/* binding */ t)\n/* harmony export */ });\n/* harmony import */ var _zscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2037);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nfunction t(t,o,r){if(!r||!r.features||!r.hasZ)return;const f=(0,_zscale_js__WEBPACK_IMPORTED_MODULE_0__/* .getGeometryZScaler */ .k)(r.geometryType,o,t.outSpatialReference);if(f)for(const e of r.features)f(e.geometry)}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/rest/query/operations/queryZScale.js?')},2037:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "k": () => (/* binding */ t),\n/* harmony export */   "P": () => (/* binding */ l)\n/* harmony export */ });\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61681);\n/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17321);\n/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35925);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nfunction t(t,c,l){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__/* .isNone */ .Wi)(c)||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__/* .isNone */ .Wi)(l)||l.vcsWkid||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .fS)(c,l))return null;const u=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ ._R)(c)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ ._R)(l);if(1===u)return null;switch(t){case"point":case"esriGeometryPoint":return n=>i(n,u);case"polyline":case"esriGeometryPolyline":return n=>s(n,u);case"polygon":case"esriGeometryPolygon":return n=>r(n,u);case"multipoint":case"esriGeometryMultipoint":return n=>f(n,u);default:return null}}function i(n,o){n&&null!=n.z&&(n.z*=o)}function r(n,o){if(n)for(const e of n.rings)for(const n of e)n.length>2&&(n[2]*=o)}function s(n,o){if(n)for(const e of n.paths)for(const n of e)n.length>2&&(n[2]*=o)}function f(n,o){if(n)for(const e of n.points)e.length>2&&(e[2]*=o)}function c(n,o,e){if(null==n.hasM||n.hasZ)for(const t of o)for(const n of t)n.length>2&&(n[2]*=e)}function l(n,e,t){if(!n&&!e||!t)return;const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ ._R)(t);u(n,t,i),u(e,t,i)}function u(n,o,e){if(n)for(const t of n)a(t.geometry,o,e)}function a(n,t,i){if(!n||!n.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .fS)(n.spatialReference,t))return;const r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ ._R)(n.spatialReference)/i;if(1!==r)if("x"in n)null!=n.z&&(n.z*=r);else if("rings"in n)c(n,n.rings,r);else if("paths"in n)c(n,n.paths,r);else if("points"in n&&(null==n.hasM||n.hasZ))for(const o of n.points)o.length>2&&(o[2]*=r)}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/rest/query/operations/zscale.js?')},51211:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(36663);\n/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);\n/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80085);\n/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25709);\n/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49004);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(61681);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81977);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7283);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13802);\n/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34248);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12571);\n/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39835);\n/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14685);\n/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(53736);\n/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12512);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nconst h=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* .JSONSupport */ .wq{constructor(e){super(e),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(e,t){const o=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"].fromJSON */ .Z.fromJSON(t.spatialReference),s=[];for(let i=0;i<e.length;i++){const t=e[i],p=_Graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fromJSON */ .Z.fromJSON(t),l=t.geometry&&t.geometry.spatialReference;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_14__/* .isSome */ .pC)(p.geometry)&&!l&&(p.geometry.spatialReference=o),s.push(p)}return s}writeGeometryType(e,t,r,o){if(e)return void h.write(e,t,r,o);const{features:s}=this;if(s)for(const i of s)if(i&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_14__/* .isSome */ .pC)(i.geometry))return void h.write(i.geometry.type,t,r,o)}readQueryGeometry(e,t){if(!e)return null;const r=!!e.spatialReference,o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .fromJSON */ .im)(e);return!r&&t.spatialReference&&(o.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"].fromJSON */ .Z.fromJSON(t.spatialReference)),o}writeSpatialReference(e,t){if(e)return void(t.spatialReference=e.toJSON());const{features:r}=this;if(r)for(const o of r)if(o&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_14__/* .isSome */ .pC)(o.geometry)&&o.geometry.spatialReference)return void(t.spatialReference=o.geometry.spatialReference.toJSON())}toJSON(e){const t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(let r=0;r<t.features.length;r++){const o=t.features[r];if(o.geometry){const t=e&&e[r];o.geometry=t&&t.toJSON()||o.geometry}}return t}quantize(e){const{scale:[t,r],translate:[o,s]}=e,n=e=>Math.round((e-o)/t),p=e=>Math.round((s-e)/r),l=this.features,a=this._getQuantizationFunction(this.geometryType,n,p);for(let y=0,m=l.length;y<m;y++)a((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_14__/* .unwrap */ .Wg)(l[y].geometry))||(l.splice(y,1),y--,m--);return this.transform=e,this}unquantize(){const{geometryType:e,features:t,transform:r}=this;if(!r)return this;const{translate:[o,s],scale:[i,p]}=r,l=e=>e*i+o,a=e=>s-e*p,y=this._getHydrationFunction(e,l,a);for(const{geometry:m}of t)(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_14__/* .isSome */ .pC)(m)&&y(m);return this.transform=null,this}_quantizePoints(e,t,r){let o,s;const n=[];for(let i=0,p=e.length;i<p;i++){const p=e[i];if(i>0){const e=t(p[0]),i=r(p[1]);e===o&&i===s||(n.push([e-o,i-s]),o=e,s=i)}else o=t(p[0]),s=r(p[1]),n.push([o,s])}return n.length>0?n:null}_getQuantizationFunction(e,t,r){return"point"===e?e=>(e.x=t(e.x),e.y=r(e.y),e):"polyline"===e||"polygon"===e?e=>{const o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isPolygon */ .oU)(e)?e.rings:e.paths,s=[];for(let n=0,i=o.length;n<i;n++){const e=o[n],i=this._quantizePoints(e,t,r);i&&s.push(i)}return s.length>0?((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isPolygon */ .oU)(e)?e.rings=s:e.paths=s,e):null}:"multipoint"===e?e=>{const o=this._quantizePoints(e.points,t,r);return o.length>0?(e.points=o,e):null}:"extent"===e?e=>e:null}_getHydrationFunction(e,t,r){return"point"===e?e=>{e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?e=>{const o=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isPolygon */ .oU)(e)?e.rings:e.paths;let s,n;for(let i=0,p=o.length;i<p;i++){const e=o[i];for(let o=0,i=e.length;o<i;o++){const i=e[o];o>0?(s+=i[0],n+=i[1]):(s=i[0],n=i[1]),i[0]=t(s),i[1]=r(n)}}}:"extent"===e?e=>{e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?e=>{const o=e.points;let s,n;for(let i=0,p=o.length;i<p;i++){const e=o[i];i>0?(s+=e[0],n+=e[1]):(s=e[0],n=e[1]),e[0]=t(s),e[1]=r(n)}}:void 0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .Cb)({type:String,json:{write:!0}})],d.prototype,"displayFieldName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"exceededTransferLimit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .Cb)({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z],json:{write:!0}})],d.prototype,"features",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .r)("features")],d.prototype,"readFeatures",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .Cb)({type:[_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z],json:{write:!0}})],d.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .Cb)({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:h.read}}})],d.prototype,"geometryType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__/* .writer */ .c)("geometryType")],d.prototype,"writeGeometryType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .Cb)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],d.prototype,"hasZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .Cb)({types:_geometry_js__WEBPACK_IMPORTED_MODULE_0__/* .geometryTypes */ .qM,json:{write:!0}})],d.prototype,"queryGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .r)("queryGeometry")],d.prototype,"readQueryGeometry",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .Cb)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,json:{write:!0}})],d.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__/* .writer */ .c)("spatialReference")],d.prototype,"writeSpatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .Cb)({json:{write:!0}})],d.prototype,"transform",void 0),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_15__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .j)("esri.rest.support.FeatureSet")],d),d.prototype.toJSON.isDefaultToJSON=!0,d||(d={});var g=d;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (g);\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/rest/support/FeatureSet.js?')}}]);