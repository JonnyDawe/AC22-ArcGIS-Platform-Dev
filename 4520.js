"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[4520],{24065:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "R": () => (/* binding */ c)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36663);\n/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53443);\n/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53280);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61681);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81977);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);\n/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51599);\n/* harmony import */ var _sublayerUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93698);\n/* harmony import */ var _views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89280);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__/* .HandleOwnerMixin */ .p)(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getLayerFloorFilterClause */ .ff)(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .isExportDynamic */ .FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(m[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null==(e=this.floors)||!e.length),s=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return s.length?JSON.stringify(s.reduce(((e,r)=>{const s=(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getLayerFloorFilterClause */ .ff)(this.floors,r),i=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__/* .isSome */ .pC)(s)?(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .combineFloorsDefinitionExpression */ .Hp)(s,r):r.definitionExpression;return e[r.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,o=0===r.minScale||t<=r.minScale,a=0===r.maxScale||t>=r.maxScale;r.visible&&(i||o&&a)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r))};r&&r.forEach(s);const t=this._get("visibleSublayers");return!t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"dynamicLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],c.prototype,"floors",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"hasDynamicLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],c.prototype,"layer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"layers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"layerDefs",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({type:Number})],c.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .combinedViewLayerTimeExtentProperty */ .qG)],c.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"version",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.layers.mixins.ExportImageParameters")],c);\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/layers/support/ExportImageParameters.js?')},93698:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "FN": () => (/* binding */ n),\n/* harmony export */   "QV": () => (/* binding */ e),\n/* harmony export */   "ac": () => (/* binding */ o)\n/* harmony export */ });\n/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65943);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction e(r,e,n){const o=e.flatten((({sublayers:r})=>r)).length;if(o!==r.length)return!0;return!!r.some((r=>r.originIdOf("minScale")>n||r.originIdOf("maxScale")>n||r.originIdOf("renderer")>n||r.originIdOf("labelingInfo")>n||r.originIdOf("opacity")>n||r.originIdOf("labelsVisible")>n||r.originIdOf("source")>n))||!i(r,e)}function n(e,n,o){return!!e.some((e=>{const n=e.source;return!(!n||"map-layer"===n.type&&n.mapLayerId===e.id&&(!n.gdbVersion||n.gdbVersion===o.gdbVersion))||e.originIdOf("renderer")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__/* .OriginId.SERVICE */ .s3.SERVICE||e.originIdOf("labelingInfo")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__/* .OriginId.SERVICE */ .s3.SERVICE||e.originIdOf("opacity")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__/* .OriginId.SERVICE */ .s3.SERVICE||e.originIdOf("labelsVisible")>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_0__/* .OriginId.SERVICE */ .s3.SERVICE}))||!i(e,n)}function i(r,e){if(!r||!r.length)return!0;const n=e.slice().reverse().flatten((({sublayers:r})=>r&&r.toArray().reverse())).map((r=>r.id)).toArray();if(r.length>n.length)return!1;let i=0;const o=n.length;for(const{id:t}of r){for(;i<o&&n[i]!==t;)i++;if(i>=o)return!1}return!0}function o(r){return!!r&&r.some((r=>null!=r.minScale||r.layerDefinition&&null!=r.layerDefinition.minScale))}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/layers/support/sublayerUtils.js?')},59468:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "k": () => (/* binding */ s)\n/* harmony export */ });\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}function n(t,n){return"number"==typeof t?t:t&&t.stops&&t.stops.length?e(t.stops):n}function r(t,e){if(!e)return t;const r=e.filter((t=>"size"===t.type)).map((e=>{const{maxSize:r,minSize:s}=e;return(n(r,t)+n(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let n=0;n<o;n++)s+=r[n];const f=Math.floor(s/o);return Math.max(f,t)}function s(e){const n=e&&e.renderer,s="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!n)return s;const o="visualVariables"in n?r(s,n.visualVariables):s;if("simple"===n.type)return t(o,n.symbol);if("unique-value"===n.type){let e=o;return n.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===n.type){let e=o;return n.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return n.type,o}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js?')},34520:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ a)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36663);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13802);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7283);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33156);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40266);\n/* harmony import */ var _DynamicLayerView3D_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78306);\n/* harmony import */ var _layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82512);\n/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99621);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nlet i=class extends((0,_layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_7__/* .MapImageLayerView */ .m)(_DynamicLayerView3D_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this.updatingHandles.add((()=>this.exportImageVersion),(()=>this.updatingHandles.addPromise(this.refreshDebounced())))}createFetchPopupFeaturesQueryGeometry(e,r){return (0,_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .createQueryGeometry */ .K)(e,r,this.view)}getFetchOptions(){return{timeExtent:this.timeExtent}}};i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_9__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .j)("esri.views.3d.layers.MapImageLayerView3D")],i);const a=i;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/3d/layers/MapImageLayerView3D.js?')},82512:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "m": () => (/* binding */ y)\n/* harmony export */ });\n/* unused harmony export default */\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36663);\n/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61681);\n/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78668);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81977);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);\n/* harmony import */ var _layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51599);\n/* harmony import */ var _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24065);\n/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59468);\n/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(30879);\n/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59439);\n/* harmony import */ var _support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89280);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst y=y=>{let d=class extends y{initialize(){this.exportImageParameters=new _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_8__/* .ExportImageParameters */ .R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,s){const{layer:a}=this;if(!e)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const i=this.get("view.scale"),p=[],m=async e=>{const r=0===e.minScale||i<=e.minScale,o=0===e.maxScale||i>=e.maxScale;if(e.visible&&r&&o)if(e.sublayers)e.sublayers.forEach(m);else if(e.popupEnabled){const r=(0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getFetchPopupTemplate */ .V)(e,{...s,defaultPopupTemplateEnabled:!1});(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(r)&&p.unshift({sublayer:e,popupTemplate:r})}},y=a.sublayers.toArray().reverse().map(m);await Promise.all(y);const d=p.map((async({sublayer:r,popupTemplate:o})=>{await r.load().catch((()=>{}));const a=r.createQuery(),i=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(s)?s.event:null,p=(0,_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .calculateTolerance */ .k)({renderer:r.renderer,event:i}),m=this.createFetchPopupFeaturesQueryGeometry(e,p);if(a.geometry=m,a.outFields=await (0,_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .getRequiredFields */ .e)(r,o),"map-image"===this.layer.type&&"floors"in this.view){var c,y;const e=null==(c=this.view)||null==(y=c.floors)?void 0:y.clone(),o=(0,_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .getLayerFloorFilterClause */ .ff)(e,r);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(o)&&(a.where=a.where?`(${a.where}) AND (${o})`:o)}const d=await this._loadArcadeModules(o);d&&d.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=m.width/p);return(await r.queryFeatures(a)).features}));return(await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .eachAlways */ .as)(d)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e;return!!super.canResume()&&(null==(e=this.timeExtent)||!e.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length")||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return (0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_9__/* .loadArcade */ .LC)()}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],d.prototype,"exportImageParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],d.prototype,"exportImageVersion",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],d.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],d.prototype,"suspended",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)(_layers_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .combinedViewLayerTimeExtentProperty */ .qG)],d.prototype,"timeExtent",void 0),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.views.layers.MapImageLayerView")],d),d};\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/layers/MapImageLayerView.js?')},59439:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "V": () => (/* binding */ d),\n/* harmony export */   "e": () => (/* binding */ t)\n/* harmony export */ });\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61681);\n/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17095);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nasync function t(t,d=t.popupTemplate){if(!(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(d))return[];const i=await d.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:n}=d,{objectIdField:s,typeIdField:a,globalIdField:o,relationships:u}=t;if(i.includes("*"))return["*"];const f=n?await (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getFeatureEditFields */ .CH)(t):[],r=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .fixFields */ .Q0)(t.fieldsIndex,[...i,...f]);return a&&r.push(a),r&&s&&t.fieldsIndex.has(s)&&-1===r.indexOf(s)&&r.push(s),r&&o&&t.fieldsIndex.has(o)&&-1===r.indexOf(o)&&r.push(o),u&&u.forEach((e=>{const{keyField:p}=e;r&&p&&t.fieldsIndex.has(p)&&-1===r.indexOf(p)&&r.push(p)})),r}function d(p,l){return p.popupTemplate?p.popupTemplate:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(l)&&l.defaultPopupTemplateEnabled&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__/* .isSome */ .pC)(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/layers/support/popupUtils.js?')},99621:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "D": () => (/* binding */ o),\n/* harmony export */   "K": () => (/* binding */ a)\n/* harmony export */ });\n/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61681);\n/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17321);\n/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59468);\n/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91772);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction a(t,n,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z){let s;if("2d"===a.type)s=n*a.resolution;else if("3d"===a.type){const i=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isSome */ .pC)(o)&&!o.equals(a.spatialReference)?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getMetersPerUnitForSR */ .c9)(o)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getMetersPerUnitForSR */ .c9)(a.spatialReference):n*i}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,i){const o=i.toMap(e);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__/* .isNone */ .Wi)(o))return!1;return a(o,(0,_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .calculateTolerance */ .k)(),i,s).intersects(r)}const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/support/drapedUtils.js?')},89280:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Hp": () => (/* binding */ l),\n/* harmony export */   "cx": () => (/* binding */ o),\n/* harmony export */   "ff": () => (/* binding */ n)\n/* harmony export */ });\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction o(o){var n;const l=o.layer;if("floorInfo"in l&&null!=(n=l.floorInfo)&&n.floorField&&"floors"in o.view){return r(o.view.floors,l.floorInfo.floorField)}return null}function n(o,n){var l;return"floorInfo"in n&&null!=(l=n.floorInfo)&&l.floorField?r(o,n.floorInfo.floorField):null}function l(o,n){const{definitionExpression:l}=n;return o?l?`(${l}) AND (${o})`:o:l}function r(o,n){if(null==o||!o.length)return null;const l=o.filter((o=>""!==o)).map((o=>`\'${o}\'`));return l.push("\'\'"),`${n} IN (${l.join(",")}) OR ${n} IS NULL`}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/support/floorFilterUtils.js?')}}]);