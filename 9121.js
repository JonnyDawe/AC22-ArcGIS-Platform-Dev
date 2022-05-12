"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[9121],{89121:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ u)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36663);\n/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66591);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13802);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61681);\n/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15071);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81977);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40266);\n/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(54957);\n/* harmony import */ var _LayerView3D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19654);\n/* harmony import */ var _TiledLayerView3D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8712);\n/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26216);\n/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55068);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLogger */ .Z.getLogger("esri.views.3d.layers.WMTSLayerView3d");let f=class extends((0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__/* .RefreshableLayerView */ .y)((0,_TiledLayerView3D_js__WEBPACK_IMPORTED_MODULE_9__/* .TiledLayerView3D */ .r)((0,_LayerView3D_js__WEBPACK_IMPORTED_MODULE_8__/* .LayerView3D */ .A)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)))){constructor(){super(...arguments),this.type="wmts-3d"}get hasMixedImageFormats(){return!0}_getCompatibleTileInfoMatrixSet(e,i=!1){const s=(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .getTileMaxtrixSetFromActiveLayer */ .mt)(this.layer);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(s)){if(_core_Collection_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].isCollection */ .Z.isCollection(s)){const t=s.find((t=>{const s=e(t);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(s)&&(i?d.error("The selected tile matrix set is not compatible with the view",s):this.addResolvingPromise(Promise.reject(s))),null==s}));return t}const o=e(s);return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(o)&&(i?d.error("The selected tile matrix set is not compatible with the view",o):this.addResolvingPromise(Promise.reject(o))),s}return null}initialize(){this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent)));const e=(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .whenTrueOnce */ .LR)(this.view,"basemapTerrain.tilingSchemeLocked").then((()=>{const e=this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent)||this._getTileInfoCompatibilityError(e.tileInfo,this.view.basemapTerrain.tilingScheme)));(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isNone */ .Wi)(e)||(this.layer.activeLayer.tileMatrixSetId!==e.id&&(this.layer.activeLayer.tileMatrixSetId=e.id),this.tileInfo=e.tileInfo,this.layer.fullExtent=e.fullExtent)}));this.addResolvingPromise(e),this.when((()=>this._initialized()))}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const e=this.layer.activeLayer.tileMatrixSet;return e&&!this._getTileInfoError(e.tileInfo,e.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_initialized(){this.updatingHandles.add((()=>{var e,t;return null==(e=this.layer)||null==(t=e.activeLayer)?void 0:t.styleId}),(()=>this.refresh())),this.updatingHandles.add((()=>{var e;return null==(e=this.layer)?void 0:e.activeLayer}),(e=>{const t=this._getCompatibleTileInfoMatrixSet((e=>this._getTileInfoSupportError(e.tileInfo,e.fullExtent)||this._getTileInfoCompatibilityError(e.tileInfo,this.view.basemapTerrain.tilingScheme)),!0);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(t)&&e.tileMatrixSetId!==t.id&&(this.layer.activeLayer.tileMatrixSetId=t.id),this.notifyChange("suspended"),this.canResume()&&this.refresh()}))}_getTileInfoError(e,t){return this._getTileInfoSupportError(e,t)||this._getTileInfoCompatibilityError(e,this.view.basemapTerrain.tilingScheme)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)({readOnly:!0})],f.prototype,"hasMixedImageFormats",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)()],f.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)()],f.prototype,"suspended",void 0),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .j)("esri.views.3d.layers.WMTSLayerView3D")],f);const u=f;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/3d/layers/WMTSLayerView3D.js?')},55068:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "y": () => (/* binding */ i)\n/* harmony export */ });\n/* unused harmony export default */\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36663);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13802);\n/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78668);\n/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76868);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81977);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40266);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst i=i=>{let c=class extends i{initialize(){this.handles.add((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__.on)((()=>this.layer),"refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isAbortError */ .D_)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLogger */ .Z.getLogger(this.declaredClass).error(r)}))})),"RefreshableLayerView")}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)()],c.prototype,"layer",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .j)("esri.layers.mixins.RefreshableLayerView")],c),c};\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/layers/RefreshableLayerView.js?')}}]);