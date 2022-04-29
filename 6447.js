"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[6447],{26447:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "ElevationProfileView2D": () => (/* binding */ h)\n});\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Handles.js\nvar Handles = __webpack_require__(44584);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js\nvar maybe = __webpack_require__(61681);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js\nvar reactiveUtils = __webpack_require__(76868);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/widgets/ElevationProfile/support/constants.js\nvar constants = __webpack_require__(89815);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/widgets/ElevationProfile/support/HoveredPoints.js\nvar HoveredPoints = __webpack_require__(55109);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js\nvar promiseUtils = __webpack_require__(78668);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/support/layerViewUtils.js\nvar layerViewUtils = __webpack_require__(42780);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/widgets/ElevationProfile/support/InputRepresentation2D.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nclass o{constructor(i){this._params=i,this._highlightTask=null,this._highlightHandle=null}destroy(){this.remove()}remove(){this._highlightTask=(0,maybe/* abortMaybe */.IM)(this._highlightTask),this._highlightHandle=(0,maybe/* removeMaybe */.hw)(this._highlightHandle)}update(i){if(this.remove(),(0,maybe/* isNone */.Wi)(i)||!a(i))return;const t=i.layer;this._highlightTask=(0,promiseUtils/* createTask */.vr)((async h=>{const e=await this._params.view.whenLayerView(t);(0,promiseUtils/* throwIfAborted */.k_)(h),(0,layerViewUtils/* highlightsSupported */.tl)(e)&&(this._highlightHandle=e.highlight(i))}))}}function a(i){return (0,maybe/* isSome */.pC)(i.geometry)&&"polyline"===i.geometry.type}\n\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/widgets/ElevationProfile/support/ElevationProfileView2D.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nclass h{constructor(e,n){this._handles=new Handles/* default */.Z,this._inputRepresentation=new o({view:e}),this._hoveredPoints=new HoveredPoints/* HoveredPoints */.l({view:e}),this._handles.add([(0,reactiveUtils/* watch */.YP)((()=>n.viewModel.hoveredPoints),(t=>this._hoveredPoints.update(t)),reactiveUtils/* syncAndInitial */.tX),(0,reactiveUtils/* watch */.YP)((()=>{const{state:t,highlightEnabled:e,viewModel:i}=n;return{input:i.input,state:t,highlightEnabled:e}}),(t=>this._updateInputRepresentation(t)),reactiveUtils/* syncAndInitial */.tX)])}destroy(){this._handles=(0,maybe/* destroyMaybe */.SC)(this._handles),this._inputRepresentation=(0,maybe/* destroyMaybe */.SC)(this._inputRepresentation),this._hoveredPoints=(0,maybe/* destroyMaybe */.SC)(this._hoveredPoints)}_updateInputRepresentation({input:t,state:e,highlightEnabled:i}){e===constants/* ElevationProfileState.Selected */.dd.Selected&&i?this._inputRepresentation.update(t):this._inputRepresentation.remove()}}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/widgets/ElevationProfile/support/ElevationProfileView2D.js_+_1_modules?')},55109:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "l": () => (/* binding */ h)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36663);\n/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53443);\n/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66591);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61681);\n/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76868);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81977);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40266);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89815);\n/* harmony import */ var _support_AnchorElementViewModel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83097);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nlet h=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z{constructor(e){super(e),this._hoveredPoints=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z}initialize(){this._updateScreenLocationsHandle=(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .watch */ .YP)((()=>this._hoveredPoints.toArray().map((({anchor:e,element:o})=>({screenLocation:e.screenLocation,element:o})))),(e=>{for(const{screenLocation:o,element:t}of e)(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__/* .applySome */ .yw)(o,(({x:e,y:o})=>{t.style.transform=`translate(${e}px, ${o}px)`}))}),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .syncAndInitial */ .tX)}destroy(){this._updateScreenLocationsHandle=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__/* .removeMaybe */ .hw)(this._updateScreenLocationsHandle),this._hoveredPoints.drain((e=>this._destroyHoveredPoint(e)))}update(e){const o=this.view,t=this._hoveredPoints,r=e.length;for(;this._hoveredPoints.length>r;)this._destroyHoveredPoint(this._hoveredPoints.pop());for(;this._hoveredPoints.length<r;){const e=this._makeHoveredPoint();t.push(e),o.surface.appendChild(e.element)}for(let s=0;s<r;++s){const o=t.getItemAt(r-1-s),i=e[s];this._updateHoveredPoint(o,i)}}_makeHoveredPoint(){const{size:e,borderStyle:o,borderColor:t,borderWidth:r,boxShadow:s}=_constants_js__WEBPACK_IMPORTED_MODULE_8__/* .HOVERED_POINTS_STYLE */ .ly,i=this.view,n=new _support_AnchorElementViewModel_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({view:i,screenLocationEnabled:!0}),c=document.createElement("div"),a=c.style;return a.position="absolute",a.top="0",a.left="0",a.contain="strict",a.boxSizing="border-box",a.width=`${e}px`,a.height=`${e}px`,a.marginTop=`-${e/2}px`,a.marginLeft=`-${e/2}px`,a.border=`${o} ${r}px ${t}`,a.borderRadius=`${e}px`,a.boxShadow=s,{anchor:n,element:c}}_updateHoveredPoint({anchor:e,element:o},t){e.screenLocationEnabled=!0,e.location=t.hoveredPoint;const r=o.style;r.display="block",r.background=t.color.toCss()}_destroyHoveredPoint({anchor:e,element:o}){e.destroy(),this.view.surface.removeChild(o)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)()],h.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .Cb)()],h.prototype,"_hoveredPoints",void 0),h=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .j)("esri.widgets.ElevationProfile.support.HoveredPoints")],h);\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/widgets/ElevationProfile/support/HoveredPoints.js?')}}]);