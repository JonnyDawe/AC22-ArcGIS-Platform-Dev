"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[6857],{80347:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "y": () => (/* binding */ f)\n});\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js\nvar tslib_es6 = __webpack_require__(36663);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 2 modules\nvar Collection = __webpack_require__(15680);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/collectionUtils.js\nvar collectionUtils = __webpack_require__(58811);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js\nvar Error = __webpack_require__(70375);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js\nvar reactiveUtils = __webpack_require__(76868);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js\nvar property = __webpack_require__(81977);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js\nvar arrayUtils = __webpack_require__(7753);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js\nvar has = __webpack_require__(39994);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js\nvar ensureType = __webpack_require__(7283);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js\nvar subclass = __webpack_require__(40266);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/Container.js\nvar Container = __webpack_require__(10530);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules\nvar JSONSupport = __webpack_require__(82064);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js\nvar Logger = __webpack_require__(13802);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/set.js\nvar set = __webpack_require__(33156);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/layers/support/ClipArea.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nlet e=class extends JSONSupport/* JSONSupport */.wq{};e=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.layers.support.ClipArea")],e);const t=e;\n\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/layers/support/ClipRect.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nvar s;let i=s=class extends t{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],i.prototype,"version",null),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.layers.support.ClipRect")],i);const p=i;\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js\nvar geometry = __webpack_require__(91957);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Geometry.js\nvar Geometry = __webpack_require__(20031);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js\nvar jsonUtils = __webpack_require__(53736);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js\nvar Extent = __webpack_require__(91772);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js\nvar Polygon = __webpack_require__(89542);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/layers/support/Geometry.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nvar y;const n={base:Geometry/* default */.Z,key:"type",typeMap:{extent:Extent/* default */.Z,polygon:Polygon/* default */.Z}};let c=y=class extends t{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};(0,tslib_es6._)([(0,property/* property */.Cb)({types:n,json:{read:jsonUtils/* fromJSON */.im,write:!0}})],c.prototype,"geometry",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],c.prototype,"version",null),c=y=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.layers.support.Geometry")],c);const a=c;\n\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/layers/support/Path.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nlet Path_e=class extends t{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:[[[Number]]],json:{write:!0}})],Path_e.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],Path_e.prototype,"version",null),Path_e=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.layers.support.Path")],Path_e);const Path_p=Path_e;\n\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst LayerView2D_y=Collection/* default.ofType */.Z.ofType({key:"type",base:t,typeMap:{rect:p,path:Path_p,geometry:a}}),f=t=>{let h=class extends t{constructor(){super(...arguments),this.attached=!1,this.clips=new LayerView2D_y,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){var e,t,s,p;const n=null==(e=null==(t=this.view)?void 0:t.spatialReferenceLocked)||e;(null==(s=this.view)?void 0:s.spatialReference)&&n&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new Error/* default */.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new Container/* Container */.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,reactiveUtils/* watch */.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),reactiveUtils/* syncAndInitial */.tX),(0,reactiveUtils/* watch */.YP)((()=>{var e,t;return null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1}),(e=>{this.container&&(this.container.opacity=e)}),reactiveUtils/* syncAndInitial */.tX),(0,reactiveUtils/* watch */.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),reactiveUtils/* syncAndInitial */.tX),(0,reactiveUtils/* watch */.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),reactiveUtils/* syncAndInitial */.tX),(0,reactiveUtils.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}))]),null!=(p=this.view)&&p.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null==(e=this.view)?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(e=this.updatingHandles)||!e.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:s,maxScale:i}=t;return(0===s||e<=s)&&(0===i||e>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&(!!super.canResume()&&this.visibleAtCurrentScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}};return (0,tslib_es6._)([(0,property/* property */.Cb)()],h.prototype,"attached",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:LayerView2D_y,set(e){const t=(0,collectionUtils/* referenceSetter */.Z)(e,this._get("clips"),LayerView2D_y);this._set("clips",t)}})],h.prototype,"clips",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],h.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],h.prototype,"moving",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],h.prototype,"spatialReferenceSupported",null),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],h.prototype,"updateParameters",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],h.prototype,"updateRequested",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)()],h.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.Cb)()],h.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],h.prototype,"visibleAtCurrentScale",null),h=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.layers.LayerView2D")],h),h};\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/layers/LayerView2D.js_+_4_modules?')},96857:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ m)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(36663);\n/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);\n/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15680);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61681);\n/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15071);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13802);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7283);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33156);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40266);\n/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80347);\n/* harmony import */ var _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68114);\n/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57971);\n/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(26216);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst g="sublayers",d="layerView",u=Object.freeze({remove(){},pause(){},resume(){}});let f=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_9__/* .LayerView2DMixin */ .y)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)){constructor(){super(...arguments),this._highlightIds=new Map}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(i=>i.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,i){const s=Array.from(this.graphicsViews(),(async i=>{const s=await i.hitTest(e);if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(i);for(const i of s)!i.popupTemplate&&e.popupTemplate&&(i.popupTemplate=e.popupTemplate)}return s}));return(await Promise.all(s)).flat()}highlight(e){let t;return"number"==typeof e?t=[e]:e instanceof _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].isCollection */ .Z.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):u}update(e){for(const i of this.graphicsViews())i.processUpdate(e)}attach(){const e=this.view,i=()=>this.requestUpdate(),s=this.layer.featureCollections;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(s)&&s.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const t of s){const s=new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(this.view.featuresTilingScheme);s.fadeTransitionEnabled=!0;const r=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z({view:e,graphics:t.source,renderer:t.renderer,requestUpdateCallback:i,container:s});this._graphicsViewsFeatureCollectionMap.set(r,t),this.container.addChild(r.container),this.handles.add([(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(t,"visible",(e=>r.container.visible=e)),(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(r,"updating",(()=>this.notifyChange("updating")))],d)}this._updateHighlight()}else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isSome */ .pC)(this.layer.sublayers)&&this.handles.add((0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__.on)(this.layer,"sublayers","change",(()=>this._createGraphicsViews()),(()=>this._createGraphicsViews()),(()=>this._destroyGraphicsViews())),g)}detach(){this._destroyGraphicsViews(),this.handles.remove(g)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(d);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_13__/* .isNone */ .Wi)(this.layer.sublayers))return;const e=[],i=this.view,s=()=>this.requestUpdate();for(const t of this.layer.sublayers){const r=new _graphics_GraphicContainer_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const a=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z({view:i,graphics:t.graphics,requestUpdateCallback:s,container:r});this.handles.add([t.on("graphic-update",a.graphicUpdateHandler),(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(t,"visible",(e=>a.container.visible=e)),(0,_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .init */ .S1)(a,"updating",(()=>this.notifyChange("updating")))],d),this.container.addChild(a.container),e.push(a)}this._graphicsViews=e,this._updateHighlight()}_addHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i);this._highlightIds.set(i,e+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_removeHighlight(e){for(const i of e)if(this._highlightIds.has(i)){const e=this._highlightIds.get(i)-1;0===e?this._highlightIds.delete(i):this._highlightIds.set(i,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const i of this.graphicsViews())i.setHighlight(e)}};f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_14__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .j)("esri.views.2d.layers.MapNotesLayerView2D")],f);const m=f;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/layers/MapNotesLayerView2D.js?')},68114:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (/* binding */ i)\n/* harmony export */ });\n/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38716);\n/* harmony import */ var _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26204);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nclass i extends _BaseGraphicContainer_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z{renderChildren(r){this.attributeView.bindTextures(r.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .WGLDrawPhase.MAP */ .jx.MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .WGLDrawPhase.HIGHLIGHT */ .jx.HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/layers/graphics/GraphicContainer.js?')},26216:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (/* binding */ u)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36663);\n/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53443);\n/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31355);\n/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53280);\n/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86618);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13802);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61681);\n/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64189);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81977);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40266);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nlet d=class extends((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_2__/* .HandleOwnerMixin */ .p)((0,_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_3__/* .IdentifiableMixin */ .I)((0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_5__/* .EsriPromiseMixin */ .v)(_core_Evented_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].EventedMixin */ .Z.EventedMixin(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const r=this.layer&&this.layer.id||"no id",t=this.layer&&this.layer.title||"no title";throw _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"].getLogger */ .Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: \'${t}\', id: \'${r}\')`,e),e}}))}get fullOpacity(){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .unwrapOr */ .Pt)(this.get("layer.opacity"),1)*(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .unwrapOr */ .Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){var e;return!!(null!=(e=this.updatingHandles)&&e.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){var e,r,t;return this.visible&&(null==(e=this.layer)?void 0:e.loaded)&&!(null!=(r=this.parent)&&r.suspended)&&(null==(t=this.view)?void 0:t.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},r=this;return r.view&&r.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .Cb)()],d.prototype,"fullOpacity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .Cb)()],d.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .Cb)()],d.prototype,"parent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .Cb)({readOnly:!0})],d.prototype,"suspended",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .Cb)({readOnly:!0})],d.prototype,"suspendInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .Cb)({readOnly:!0})],d.prototype,"legendEnabled",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .Cb)({type:Boolean,readOnly:!0})],d.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .Cb)({readOnly:!0})],d.prototype,"updatingProgress",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .Cb)()],d.prototype,"visible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .Cb)()],d.prototype,"view",void 0),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_12__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .j)("esri.views.layers.LayerView")],d);const u=d;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/layers/LayerView.js?')}}]);