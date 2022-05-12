"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[2784],{92784:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ c)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36663);\n/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61681);\n/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15071);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81977);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);\n/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(35925);\n/* harmony import */ var _layers_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77953);\n/* harmony import */ var _LayerView3D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19654);\n/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26216);\n/* harmony import */ var _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36172);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nlet p=class extends((0,_LayerView3D_js__WEBPACK_IMPORTED_MODULE_9__/* .LayerView3D */ .A)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)){constructor(){super(...arguments),this._usedMemory=0,this._futureMemory=0,this.type="voxel-3d",this._wasmLayerId=-1}initialize(){var e;if("local"!==this.view.viewingMode)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("voxel:unsupported-viewingMode","Voxel layers support local viewingMode only.",{});if(this.view._stage.renderView.renderingContext.type!==_webgl_context_util_js__WEBPACK_IMPORTED_MODULE_11__/* .ContextType.WEBGL2 */ .zO.WEBGL2)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("voxel:unsupported-context","Voxel layers are supported in WebGL2 rendering contexts only.",{});if(!!(null==(e=this.view._stage.renderView.renderingContext.capabilities.colorBufferFloat)||!e.textureFloat))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("voxel:missing-color-buffer-float","Voxel layers require the WebGL2 extension EXT_color_buffer_float",{});const i=this.layer.spatialReference;if(!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .equals */ .fS)(i,this.view.spatialReference))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});const o=this.layer.style.currentVariableId,l=this.layer.getVolume(o),d=this.layer.getVariable(o);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(l)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(d)){const e=l.dimensions[0],r=l.dimensions[1],t=l.getZDimension();if(t>1){const s=l.dimensions[t],i=e.size*r.size*s.size;let o=1;switch(d.renderingFormat.type){case"Int16":case"UInt16":o=2;break;case"Int32":case"UInt32":case"Float32":o=4}this._futureMemory=o*i}}const p=_layers_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getInstance */ .Z.getInstance(),c=p.addLayer(this.view,this).then((e=>{this._wasmLayerId=e,this._suspendedHandle=(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .init */ .S1)(this,"suspended",(e=>{_layers_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getInstance */ .Z.getInstance().setLayerEnabled(this.view,this,!e)}))})).catch((e=>{if(p.removeLayer(this.view,this),this._wasmLayerId=-1,-1===e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("voxel:addLayer-failure","The voxel layer description was invalid.",{});if(-2===e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("voxel:addLayer-failure","The voxel layer web assembly module failed to download.",{})}));this.addResolvingPromise(c)}destroy(){_layers_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getInstance */ .Z.getInstance().removeLayer(this.view,this),this._suspendedHandle&&(this._suspendedHandle.remove(),this._suspendedHandle=null)}isUpdating(){return!(this._wasmLayerId<0)&&_layers_VoxelWasmManager_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"].getInstance */ .Z.getInstance().isUpdating(this.view,this._wasmLayerId)}updatingFlagChanged(){this.notifyChange("updating")}getUsedMemory(){return this._usedMemory}getUnloadedMemory(){return this._futureMemory}ignoresMemoryFactor(){return!0}get performanceInfo(){return{nodes:0,displayedNumberOfFeatures:0,maximumNumberOfFeatures:0,totalNumberOfFeatures:0,core:null}}setUsedMemory(e){this._usedMemory=e,this._futureMemory=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],p.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0,aliasOf:"layer.parsedUrl.path"})],p.prototype,"baseUrl",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_13__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.views.3d.layers.VoxelLayerView3D")],p);const c=p;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/3d/layers/VoxelLayerView3D.js?')}}]);