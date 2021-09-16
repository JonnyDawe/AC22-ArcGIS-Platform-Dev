"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[4864],{86618:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "I": () => (/* binding */ r)\n/* harmony export */ });\n/* unused harmony export Identifiable */\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36663);\n/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12571);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nlet t=0;const r=r=>{let o=class extends r{constructor(...e){super(...e),Object.defineProperty(this,"uid",{writable:!1,configurable:!1,value:Date.now().toString(16)+"-object-"+t++})}};return o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_0__/* .subclass */ .j)("esri.core.Identifiable")],o),o};let o=class extends(r(class{})){};o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_1__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_0__/* .subclass */ .j)("esri.core.Identifiable")],o);\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/core/Identifiable.js?')},15842:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "R": () => (/* binding */ l),\n  "w": () => (/* binding */ O)\n});\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js\nvar tslib_es6 = __webpack_require__(36663);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 5 modules\nvar Accessor = __webpack_require__(23657);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js\nvar maybe = __webpack_require__(61681);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js\nvar lang = __webpack_require__(67134);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js\nvar PropertyOrigin = __webpack_require__(65943);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nclass r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(PropertyOrigin/* OriginIdNum */.kk),this._values=new Map}clone(s){const i=new r,o=this._originStores[0];o&&o.forEach(((s,e)=>{i.set(e,(0,lang/* clone */.d9)(s),0)}));for(let r=2;r<PropertyOrigin/* OriginIdNum */.kk;r++){const e=this._originStores[r];e&&e.forEach(((e,o)=>{s&&s.has(o)||i.set(o,(0,lang/* clone */.d9)(e),r)}))}return i}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,e,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||(0,maybe/* assumeNonNull */.j0)(this._propertyOriginMap.get(t))<=r){const s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),s!==e}return!1}delete(t,s=6){const e=this._originStores[s];if(!e)return;const r=e.get(t);if(e.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return r}has(t,s){const e=void 0===s?this._values:this._originStores[s];return!!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e&&e.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t)}}/* harmony default export */ const MultiOriginStore = (r);\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/read.js\nvar read = __webpack_require__(70148);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/utils.js\nvar utils = __webpack_require__(95620);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js + 1 modules\nvar subclass = __webpack_require__(12571);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nconst a=t=>{let a=class extends t{constructor(...r){super(...r);const t=(0,maybe/* assumeNonNull */.j0)((0,utils/* getProperties */.vw)(this)),o=t.metadatas,i=t.store,n=new MultiOriginStore;t.store=n,i.keys().forEach((r=>{n.set(r,i.get(r),0)})),Object.keys(o).forEach((r=>{t.internalGet(r)&&n.set(r,t.internalGet(r),0)}))}read(r,t){(0,read/* read */.ij)(this,r,t)}getAtOrigin(r,t){const s=u(this),e=(0,PropertyOrigin/* nameToId */.M9)(t);if("string"==typeof r)return s.get(r,e);const o={};return r.forEach((r=>{o[r]=s.get(r,e)})),o}originOf(r){return (0,PropertyOrigin/* idToName */.x3)(this.originIdOf(r))}originIdOf(r){return u(this).originOf(r)}revert(r,t){const s=u(this),e=(0,PropertyOrigin/* nameToId */.M9)(t),o=(0,utils/* getProperties */.vw)(this);let n;n="string"==typeof r?"*"===r?s.keys(e):[r]:r,n.forEach((r=>{o.invalidate(r),s.revert(r,e),o.commit(r)}))}};return a=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],a),a};function u(r){return (0,utils/* getProperties */.vw)(r).store}let f=class extends(a(Accessor/* default */.Z)){};f=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/write.js\nvar write = __webpack_require__(86561);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nconst p=t=>{let s=class extends t{constructor(...r){super(...r)}clear(r,t="user"){return MultiOriginJSONSupport_u(this).delete(r,(0,PropertyOrigin/* nameToId */.M9)(t))}write(r={},t){return (0,write/* write */.cW)(this,r=r||{},t),r}setAtOrigin(r,t,s){(0,utils/* getProperties */.vw)(this).setAtOrigin(r,t,(0,PropertyOrigin/* nameToId */.M9)(s))}removeOrigin(r){const t=MultiOriginJSONSupport_u(this),s=(0,PropertyOrigin/* nameToId */.M9)(r),o=t.keys(s);for(const e of o)t.originOf(e)===s&&t.set(e,t.get(e,s),6)}updateOrigin(r,t){const s=MultiOriginJSONSupport_u(this),i=(0,PropertyOrigin/* nameToId */.M9)(t),c=this.get(r);for(let e=i+1;e<PropertyOrigin/* OriginIdNum */.kk;++e)s.delete(r,e);s.set(r,c,i)}toJSON(r){return this.write({},r)}};return s=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.core.WriteableMultiOriginJSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function MultiOriginJSONSupport_u(r){return (0,utils/* getProperties */.vw)(r).store}const l=t=>{let e=class extends(p(a(t))){constructor(...r){super(...r)}};return e=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.core.MultiOriginJSONSupport")],e),e};let O=class extends(l(Accessor/* default */.Z)){};O=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.core.MultiOriginJSONSupport")],O);\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js_+_2_modules?')},76136:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(36663);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51366);\n/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91957);\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66341);\n/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70375);\n/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31355);\n/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86618);\n/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68309);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13802);\n/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78668);\n/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3466);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81977);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12571);\n/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91772);\n/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14685);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nlet m=0;const h=_core_Logger_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getLogger */ .Z.getLogger("esri.layers.Layer");let f=class extends(_core_Evented_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].EventedMixin */ .Z.EventedMixin((0,_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_5__/* .IdentifiableMixin */ .I)(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z))){constructor(){super(...arguments),this.attributionDataUrl=null,this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z(-180,-90,180,90,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"].WGS84 */ .Z.WGS84),this.id=Date.now().toString(16)+"-layer-"+m++,this.legendEnabled=!0,this.listMode="show",this.opacity=1,this.parent=null,this.popupEnabled=!0,this.attributionVisible=!0,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"].WGS84 */ .Z.WGS84,this.title=null,this.type=null,this.url=null,this.visible=!0}static async fromArcGISServerUrl(t){const r="string"==typeof t?{url:t}:t,e=await __webpack_require__.e(/* import() */ 6361).then(__webpack_require__.bind(__webpack_require__, 66361));try{return await e.fromUrl(r)}catch(o){throw h.error("#fromArcGISServerUrl({ url: \'"+r.url+"\'})","Failed to create layer from arcgis server url",o),o}}static async fromPortalItem(t){const e="portalItem"in t?t:{portalItem:t},o=await __webpack_require__.e(/* import() */ 5831).then(__webpack_require__.bind(__webpack_require__, 55831));try{return await o.fromItem(e)}catch(i){const t=e&&e.portalItem,o=t&&t.id||"unset",a=t&&t.portal&&t.portal.url||_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].portalUrl */ .Z.portalUrl;throw h.error("#fromPortalItem()","Failed to create layer from portal item (portal: \'"+a+"\', id: \'"+o+"\')",i),i}}initialize(){this.when().catch((t=>{var r,e;(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .isAbortError */ .D_)(t)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"].getLogger */ .Z.getLogger(this.declaredClass).error("#load()",`Failed to load layer (title: \'${null!=(r=this.title)?r:"no title"}\', id: \'${null!=(e=this.id)?e:"no id"}\')`,{error:t})}))}destroy(){if(this.parent){const t=this,r=this.parent;"layers"in r&&r.layers.includes(t)?r.layers.remove(t):"tables"in r&&r.tables.includes(t)?r.tables.remove(t):"baseLayers"in r&&r.baseLayers.includes(t)?r.baseLayers.remove(t):"baseLayers"in r&&r.referenceLayers.includes(t)&&r.referenceLayers.remove(t)}}get hasAttributionData(){return null!=this.attributionDataUrl}get parsedUrl(){const t=this.url;return t?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .urlToObject */ .mN)(t):null}async fetchAttributionData(){const t=this.attributionDataUrl;if(this.hasAttributionData&&t){return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(t,{query:{f:"json"},responseType:"json"})).data}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("layer:no-attribution-data","Layer does not have attribution data")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:String})],f.prototype,"attributionDataUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z})],f.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({readOnly:!0})],f.prototype,"hasAttributionData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:String})],f.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:Boolean,nonNullable:!0})],f.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:["show","hide","hide-children"]})],f.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:Number,range:{min:0,max:1},nonNullable:!0})],f.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)()],f.prototype,"parent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({readOnly:!0})],f.prototype,"parsedUrl",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:Boolean})],f.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:Boolean})],f.prototype,"attributionVisible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z})],f.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:String})],f.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:String,readOnly:!0,json:{read:!1}})],f.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)()],f.prototype,"url",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .Cb)({type:Boolean,nonNullable:!0})],f.prototype,"visible",void 0),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_16__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__/* .subclass */ .j)("esri.layers.Layer")],f);var b=f;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (b);\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/layers/Layer.js?')},74864:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(36663);\n/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);\n/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15842);\n/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63625);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81977);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13802);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12571);\n/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76136);\n/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18241);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nlet u=class extends((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_9__/* .PortalLayer */ .I)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .MultiOriginJSONMixin */ .R)(_Layer_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z))){constructor(r){super(r),this.resourceInfo=null,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise(((r,o)=>{(0,_core_scheduling_js__WEBPACK_IMPORTED_MODULE_2__/* .schedule */ .Os)((()=>{const r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unsupported layer type";r&&(s+=" "+r),o(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("layer:unsupported-layer-type",s,{layerType:r}))}))})))}read(r,e){const o={resourceInfo:r};null!=r.id&&(o.id=r.id),null!=r.title&&(o.title=r.title),super.read(o,e)}write(r){return Object.assign(r||{},this.resourceInfo,{id:this.id})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)({readOnly:!0})],u.prototype,"resourceInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)({type:["show","hide"]})],u.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)({json:{read:!1},readOnly:!0,value:"unsupported"})],u.prototype,"type",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_10__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .j)("esri.layers.UnsupportedLayer")],u);var c=u;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (c);\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/layers/UnsupportedLayer.js?')},18241:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "I": () => (/* binding */ w)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(36663);\n/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88256);\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66341);\n/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67979);\n/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70375);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13802);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61681);\n/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78668);\n/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3466);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81977);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(34248);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12571);\n/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39835);\n/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26869);\n/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(53110);\n/* harmony import */ var _portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90298);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nconst j=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getLogger */ .Z.getLogger("esri.layers.mixins.PortalLayer"),w=i=>{let w=class extends i{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0}destroy(){var t;null==(t=this.portalItem)||t.destroy(),this.portalItem=null}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,e,r){if(e.itemId)return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]({id:e.itemId,portal:r&&r.portal})}writePortalItem(t,e){t&&t.id&&(e.itemId=t.id)}async loadFromPortal(t,e){if(this.portalItem&&this.portalItem.id)try{const r=await __webpack_require__.e(/* import() */ 9112).then(__webpack_require__.bind(__webpack_require__, 49112));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .throwIfAborted */ .k_)(e),await r.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},e)}catch(r){throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isAbortError */ .D_)(r)||j.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\\n  ${r}`),r}}async finishLoadEditablePortalLayer(t){this._set("userHasEditingPrivileges",await this.fetchUserHasEditingPrivileges(t).catch((t=>((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .throwIfAbortError */ .r9)(t),!0))))}async fetchUserHasEditingPrivileges(t){const r=this.url?null==_kernel_js__WEBPACK_IMPORTED_MODULE_0__.id?void 0:_kernel_js__WEBPACK_IMPORTED_MODULE_0__.id.findCredential(this.url):null;if(!r)return!0;const s=P.credential===r?P.user:await this.fetchEditingUser(t);return P.credential=r,P.user=s,(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_16__/* .isNone */ .Wi)(s)||null==s.privileges||s.privileges.includes("features:user:edit")}async fetchEditingUser(t){var o,i;const a=null==(o=this.portalItem)||null==(i=o.portal)?void 0:i.user;if(a)return a;const n=_kernel_js__WEBPACK_IMPORTED_MODULE_0__.id.findServerInfo(this.url);if(null==n||!n.owningSystemUrl)return null;const p=`${n.owningSystemUrl}/sharing/rest`,m=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"].getDefault */ .Z.getDefault();if(m&&m.loaded&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .normalize */ .Fv)(m.restUrl)===(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .normalize */ .Fv)(p))return m.user;const c=`${p}/community/self`,d=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_16__/* .isSome */ .pC)(t)?t.signal:null,h=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .result */ .q6)((0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(c,{authMode:"no-prompt",query:{f:"json"},signal:d}));return h.ok?_portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(h.value.data):null}read(t,e){e&&(e.layer=this),super.read(t,e)}write(t,e){const r=e&&e.portal,s=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"].getDefault */ .Z.getDefault());return r&&s&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .hasSamePortal */ .tm)(s.restUrl,r.restUrl)?(e.messages&&e.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z("layer:cross-portal",`The layer \'${this.title} (${this.id})\' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...e,layer:this})}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({type:_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]})],w.prototype,"portalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_10__/* .reader */ .r)("web-document","portalItem",["itemId"])],w.prototype,"readPortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_12__/* .writer */ .c)("web-document","portalItem",{itemId:{type:String}})],w.prototype,"writePortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)()],w.prototype,"resourceReferences",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({readOnly:!0})],w.prototype,"userHasEditingPrivileges",void 0),w=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_17__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_11__/* .subclass */ .j)("esri.layers.mixins.PortalLayer")],w),w},P={credential:null,user:null};\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/layers/mixins/PortalLayer.js?')}}]);