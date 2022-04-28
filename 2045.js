"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[2045,9420],{69420:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ F)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(36663);\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66341);\n/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37956);\n/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70375);\n/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53280);\n/* harmony import */ var _core_loadAll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63592);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(61681);\n/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15842);\n/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78668);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81977);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34248);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40266);\n/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39835);\n/* harmony import */ var _core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(65943);\n/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91772);\n/* harmony import */ var _geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(68577);\n/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(76136);\n/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(91223);\n/* harmony import */ var _mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(81432);\n/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87232);\n/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(27668);\n/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63989);\n/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(43330);\n/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(18241);\n/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(12478);\n/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(95874);\n/* harmony import */ var _mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(80002);\n/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2030);\n/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(51599);\n/* harmony import */ var _support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(24065);\n/* harmony import */ var _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(23875);\n/* harmony import */ var _support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(93698);\n/* harmony import */ var _support_versionUtils_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(76912);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nlet q=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_21__/* .BlendLayer */ .h)((0,_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_28__/* .TemporalLayer */ .n)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_26__/* .ScaleRangeLayer */ .M)((0,_mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_27__/* .SublayersOwner */ .x)((0,_mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_19__/* .ArcGISMapService */ .O)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_20__/* .ArcGISService */ .Y)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_23__/* .OperationalLayer */ .q)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_24__/* .PortalLayer */ .I)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_5__/* .MultiOriginJSONMixin */ .R)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_25__/* .RefreshableLayer */ .Q)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_18__/* .APIKeyMixin */ .V)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_22__/* .CustomParametersMixin */ .N)((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_3__/* .HandleOwnerMixin */ .p)(_Layer_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const r=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_34__/* .isSome */ .pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .throwIfAbortError */ .r9).then((()=>this._fetchService(r)))),Promise.resolve(this)}readImageFormat(e,r){const t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,r,t,o){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__/* .nameToId */ .M9)(o.origin);if(e===_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__/* .OriginId.PORTAL_ITEM */ .s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;s=(0,_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_32__/* .shouldWriteSublayerStructure */ .QV)(i,e,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__/* .OriginId.SERVICE */ .s3.SERVICE)}else if(e>_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__/* .OriginId.PORTAL_ITEM */ .s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");s=(0,_support_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_32__/* .shouldWriteSublayerStructure */ .QV)(i,e.sublayers,(0,_core_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_14__/* .nameToId */ .M9)(e.origin))}}const a=[],p={writeSublayerStructure:s,...o};let n=s;i.forEach((e=>{const r=e.write({},p);a.push(r),n=n||"user"===e.originOf("visible")}));a.some((e=>Object.keys(e).length>1))&&(r.layers=a),n&&(r.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,r,t,o){const i=o&&o.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new _support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_30__/* .ExportImageParameters */ .R({layer:this,floors:null==o?void 0:o.floors,scale:(0,_geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .getScale */ .yZ)({extent:e,width:r})*i}),a=s.toJSON();s.destroy();const p=!o||!o.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=e&&e.spatialReference,m=n.wkid||JSON.stringify(n.toJSON());a.dpi*=i;const l={};if(null!=o&&o.timeExtent){const{start:e,end:r}=o.timeExtent.toJSON();l.time=e&&r&&e===r?""+e:`${null==e?"null":e},${null==r?"null":r}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:m,imageSR:m,size:r+","+t,...a,...p,...l}}async fetchImage(e,t,i,s){var a;const p={responseType:"image",signal:null!=(a=null==s?void 0:s.signal)?a:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,i,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},n=this.parsedUrl.path+"/export";if(null!=p.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn\'t support dynamic layers, which is required to be able to change the sublayer\'s order, rendering, labeling or source.`,{query:p.query}));return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(n,p).then((e=>e.data)).catch((e=>{if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isAbortError */ .D_)(e))throw e;throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("mapimagelayer:image-fetch-error",`Unable to load image: ${n}`,{error:e})}))}async fetchRecomputedExtents(e={}){const o={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:i}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.url,o),{extent:s,fullExtent:a,timeExtent:p}=i,n=s||a;return{fullExtent:n&&_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"].fromJSON */ .Z.fromJSON(n),timeExtent:p&&_TimeExtent_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].fromJSON */ .Z.fromJSON({start:p[0],end:p[1]})}}loadAll(){return (0,_core_loadAll_js__WEBPACK_IMPORTED_MODULE_4__/* .loadAll */ .G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return (0,_support_versionUtils_js__WEBPACK_IMPORTED_MODULE_33__/* .serviceSupportsSpatialReference */ .D)(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({type:Boolean})],q.prototype,"datesInUnknownTimezone",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)()],q.prototype,"dpi",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)()],q.prototype,"gdbVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)()],q.prototype,"imageFormat",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__/* .reader */ .r)("imageFormat",["supportedImageFormatTypes"])],q.prototype,"readImageFormat",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],q.prototype,"imageMaxHeight",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],q.prototype,"imageMaxWidth",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)()],q.prototype,"imageTransparency",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],q.prototype,"isReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({json:{read:!1,write:!1}})],q.prototype,"labelsVisible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({type:["ArcGISMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)()],q.prototype,"sourceJSON",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({json:{write:{ignoreOrigin:!0}}})],q.prototype,"sublayers",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__/* .writer */ .c)("sublayers",{layers:{type:[_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .Z]},visibleLayers:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__/* .Integer */ .z8]}})],q.prototype,"writeSublayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],q.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .Cb)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__/* .url */ .HQ)],q.prototype,"url",void 0),q=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_35__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__/* .subclass */ .j)("esri.layers.MapImageLayer")],q);const F=q;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/layers/MapImageLayer.js?')},24065:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "R": () => (/* binding */ c)\n/* harmony export */ });\n/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36663);\n/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53443);\n/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53280);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61681);\n/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81977);\n/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7753);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39994);\n/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7283);\n/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40266);\n/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51599);\n/* harmony import */ var _sublayerUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93698);\n/* harmony import */ var _views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(89280);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst m={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let c=class extends((0,_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_1__/* .HandleOwnerMixin */ .p)(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const r=(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getLayerFloorFilterClause */ .ff)(this.floors,e);return e.toExportImageJSON(r)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .isExportDynamic */ .FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(m[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const r=!(null==(e=this.floors)||!e.length),s=this.visibleSublayers.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return s.length?JSON.stringify(s.reduce(((e,r)=>{const s=(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getLayerFloorFilterClause */ .ff)(this.floors,r),i=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_10__/* .isSome */ .pC)(s)?(0,_views_support_floorFilterUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .combineFloorsDefinitionExpression */ .Hp)(s,r):r.definitionExpression;return e[r.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const r=this.layer.sublayers,s=r=>{const t=this.scale,i=0===t,o=0===r.minScale||t<=r.minScale,a=0===r.maxScale||t>=r.maxScale;r.visible&&(i||o&&a)&&(r.sublayers?r.sublayers.forEach(s):e.unshift(r))};r&&r.forEach(s);const t=this._get("visibleSublayers");return!t||t.length!==e.length||t.some(((r,s)=>e[s]!==r))?e:t}toJSON(){const e=this.layer;let r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r={...r,layers:this.layers,layerDefs:this.layerDefs},r}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"dynamicLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],c.prototype,"floors",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"hasDynamicLayers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)()],c.prototype,"layer",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"layers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"layerDefs",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({type:Number})],c.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .combinedViewLayerTimeExtentProperty */ .qG)],c.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"version",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .Cb)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_11__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .j)("esri.layers.mixins.ExportImageParameters")],c);\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/layers/support/ExportImageParameters.js?')},89280:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Hp": () => (/* binding */ l),\n/* harmony export */   "cx": () => (/* binding */ o),\n/* harmony export */   "ff": () => (/* binding */ n)\n/* harmony export */ });\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction o(o){var n;const l=o.layer;if("floorInfo"in l&&null!=(n=l.floorInfo)&&n.floorField&&"floors"in o.view){return r(o.view.floors,l.floorInfo.floorField)}return null}function n(o,n){var l;return"floorInfo"in n&&null!=(l=n.floorInfo)&&l.floorField?r(o,n.floorInfo.floorField):null}function l(o,n){const{definitionExpression:l}=n;return o?l?`(${l}) AND (${o})`:o:l}function r(o,n){if(null==o||!o.length)return null;const l=o.filter((o=>""!==o)).map((o=>`\'${o}\'`));return l.push("\'\'"),`${n} IN (${l.join(",")}) OR ${n} IS NULL`}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/support/floorFilterUtils.js?')}}]);