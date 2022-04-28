"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[9431],{79431:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ u)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36663);\n/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);\n/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15680);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61681);\n/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76868);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13802);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33156);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40266);\n/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80347);\n/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68114);\n/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57971);\n/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26216);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst g=["routeInfo","directionLines","directionPoints","polygonBarriers","polylineBarriers","pointBarriers","stops"],d=Object.freeze({remove(){},pause(){},resume(){}});let m=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__/* .LayerView2DMixin */ .y)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)){constructor(){super(...arguments),this._graphicsViews=new Map,this._highlightIds=new Map}attach(){for(const e of g)this.handles.add((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .watch */ .YP)((()=>(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(this.layer[e])?"routeInfo"===e?[(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .unwrap */ .Wg)(this.layer[e])]:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .unwrap */ .Wg)(this.layer[e]).toArray():null),(s=>this._createGraphicsView(e,s)),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .initial */ .nn),e)}detach(){this._destroyGraphicsViews()}highlight(e){let t;return"number"==typeof e?t=[e]:e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isCollection */ .Z.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this._addHighlight(t),{remove:()=>this._removeHighlight(t)}):d}async hitTest(e,s){if(this.suspended||!this._graphicsViews.size)return Promise.resolve(null);const i=Array.from(this._graphicsViews.values()).reverse().map((s=>s.hitTest(e))).flat().filter((e=>!!e));for(const t of i)t.layer=this.layer,t.sourceLayer=this.layer;return i}moveStart(){}moveEnd(){}update(e){for(const s of this._graphicsViews.values())s.processUpdate(e)}viewChange(){for(const e of this._graphicsViews.values())e.viewChange()}isUpdating(){for(const e of this._graphicsViews.values())if(e.updating)return!0;return!1}_createGraphicsView(e,r){this._destroyGraphicsView(e);const a=this.view,n=()=>this.requestUpdate(),l=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(r)?r.map((e=>{const{attributes:i,geometry:t,symbol:r,popupInfo:h}=e.toPortalJSON();return _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fromJSON */ .Z.fromJSON({attributes:i,geometry:t,symbol:r,popupTemplate:h})})):[]),d=new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(a.featuresTilingScheme),m=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z({container:d,graphics:l,requestUpdateCallback:n,view:a});this._graphicsViews.set(e,m),this.container.addChildAt(d,g.indexOf(e)),this._updateHighlight(),this.handles.add([(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .watch */ .YP)((()=>m.updating),(()=>this.notifyChange("updating")),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .initial */ .nn)],`updating-${e}`)}_destroyGraphicsView(e){if(!this._graphicsViews.has(e))return;const s=this._graphicsViews.get(e);this.container.removeChild(s.container),s.destroy(),this.handles.remove(`updating-${e}`),this._graphicsViews.delete(e)}_destroyGraphicsViews(){this.container.removeAllChildren();for(const[e,s]of this._graphicsViews.entries())this.handles.remove(e),s.destroy();this._graphicsViews.clear()}_addHighlight(e){for(const s of e)if(this._highlightIds.has(s)){const e=this._highlightIds.get(s);this._highlightIds.set(s,e+1)}else this._highlightIds.set(s,1);this._updateHighlight()}_removeHighlight(e){for(const s of e)if(this._highlightIds.has(s)){const e=this._highlightIds.get(s)-1;0===e?this._highlightIds.delete(s):this._highlightIds.set(s,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const s of this._graphicsViews.values())s.setHighlight(e)}};m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .j)("esri.views.2d.layers.RouteLayerView2D")],m);const u=m;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/layers/RouteLayerView2D.js?')},68114:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (/* binding */ i)\n/* harmony export */ });\n/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38716);\n/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26204);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nclass i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z{renderChildren(r){this.attributeView.bindTextures(r.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .WGLDrawPhase.MAP */ .jx.MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .WGLDrawPhase.HIGHLIGHT */ .jx.HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js?')}}]);