"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[6782],{6782:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ d)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36663);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13802);\n/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78668);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81977);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);\n/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12688);\n/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80347);\n/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23134);\n/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26216);\n/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(55068);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst h=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLogger */ .Z.getLogger("esri.views.2d.layers.BaseDynamicLayerView2D");let c=class extends((0,_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__/* .RefreshableLayerView */ .y)((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__/* .LayerView2DMixin */ .y)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z))){update(t){this.strategy.update(t).catch((t=>{(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isAbortError */ .D_)(t)||h.error(t)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_7__/* .BitmapContainer */ .c,this.container.addChild(this._bitmapContainer),this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this.strategy.destroy(),this.strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(t,e,r){return this.layer.fetchImage(t,e,r)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],c.prototype,"strategy",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],c.prototype,"updating",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.views.2d.layers.BaseDynamicLayerView2D")],c);const d=c;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js?')}}]);