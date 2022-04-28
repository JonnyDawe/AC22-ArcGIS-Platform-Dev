"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[4110],{34110:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "default": () => (/* binding */ A)\n});\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js\nvar tslib_es6 = __webpack_require__(36663);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js\nvar Error = __webpack_require__(70375);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Handles.js\nvar Handles = __webpack_require__(44584);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js\nvar maybe = __webpack_require__(61681);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules\nvar MultiOriginJSONSupport = __webpack_require__(15842);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js\nvar promiseUtils = __webpack_require__(78668);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js\nvar reactiveUtils = __webpack_require__(76868);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js\nvar property = __webpack_require__(81977);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js\nvar arrayUtils = __webpack_require__(7753);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js\nvar has = __webpack_require__(39994);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js\nvar ensureType = __webpack_require__(7283);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js\nvar reader = __webpack_require__(34248);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js\nvar subclass = __webpack_require__(40266);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/multiOriginJSONSupportUtils.js\nvar multiOriginJSONSupportUtils = __webpack_require__(71760);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js\nvar urlUtils = __webpack_require__(3466);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/uuid.js\nvar uuid = __webpack_require__(12173);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/metadata.js\nvar metadata = __webpack_require__(41610);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js\nvar PropertyOrigin = __webpack_require__(65943);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/portal/support/resourceExtension.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction resourceExtension_p(i){return o[n(i)]||e}function n(i){return i instanceof Blob?i.type:t(i.url)}function t(p){const n=(0,urlUtils/* getPathExtension */.Ml)(p);return g[n]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const l in g)o[g[l]]=l;\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/persistableUrlUtils.js\nvar persistableUrlUtils = __webpack_require__(16641);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction w(r){const e=(0,maybe/* isSome */.pC)(r)&&r.origins?r.origins:[void 0];return(t,o)=>{const i=v(r,t,o);for(const r of e){const e=(0,property/* propertyJSONMeta */.CJ)(t,r,o);for(const t in i)e[t]=i[t]}}}function v(r,e,o){if((0,maybe/* isSome */.pC)(r)&&"resource"===r.type)return U(r,e,o);switch((0,maybe/* isSome */.pC)(r)&&r.type?r.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:t,write:r}=persistableUrlUtils.p;return{read:t,write:r}}}}function U(e,s,u){const p=(0,metadata/* getOwnPropertyMetadata */.VZ)(s,u);return{type:String,read:(t,r,e)=>{const o=(0,persistableUrlUtils.r)(t,r,e);return p.type===String?o:"function"==typeof p.type?new p.type({url:o}):void 0},write:{writer(s,a,l,f){if(!f||!f.resources)return"string"==typeof s?void(a[l]=(0,persistableUrlUtils.t)(s,f)):void(a[l]=s.write({},f));const m=R(s),g=m?(0,persistableUrlUtils.t)(m,{...f,verifyItemRelativeUrls:f&&f.verifyItemRelativeUrls?{writtenUrls:f.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},persistableUrlUtils.M.NO):null,w=p.type!==String&&(!(0,multiOriginJSONSupportUtils/* isMultiOriginJSONMixin */.l)(this)||f&&f.origin&&this.originIdOf(u)>(0,PropertyOrigin/* nameToId */.M9)(f.origin));f&&f.portalItem&&(0,maybe/* isSome */.pC)(g)&&!(0,urlUtils/* isAbsolute */.YP)(g)?w?I(this,u,s,g,a,l,f,e):O(g,a,l,f):f&&f.portalItem&&((0,maybe/* isNone */.Wi)(g)||(0,maybe/* isSome */.pC)((0,persistableUrlUtils.i)(g))||(0,urlUtils/* isBlobProtocol */.jc)(g)||w)?j(this,u,s,g,a,l,f,e):a[l]=g}}}}function j(t,r,o,i,u,a,c,l){const m=(0,uuid/* generateUUID */.D)(),y=b(o,i,c),h=(0,urlUtils/* join */.v_)((0,maybe/* get */.U2)(l,"prefix"),m),d=`${h}.${resourceExtension_p(y)}`,g=c.portalItem.resourceFromPath(d);(0,urlUtils/* isBlobProtocol */.jc)(i)&&c.resources.pendingOperations.push(P(i).then((t=>{g.path=`${h}.${resourceExtension_p(t)}`,u[a]=g.itemRelativeUrl})).catch((()=>{}))),S(t,r,g,y,c.resources.toAdd),u[a]=g.itemRelativeUrl}function I(t,r,e,o,i,n,s,p){const a=s.portalItem.resourceFromPath(o),c=b(e,o,s);resourceExtension_p(c)===(0,urlUtils/* getPathExtension */.Ml)(a.path)?(S(t,r,a,c,s.resources.toUpdate),i[n]=o):j(t,r,e,o,i,n,s,p)}function O(t,r,e,o){o.resources.toKeep.push({resource:o.portalItem.resourceFromPath(t)}),r[e]=t}function S(t,r,e,o,i){i.push({resource:e,content:o,finish:e=>{N(t,r,e)}})}function b(t,r,e){return"string"==typeof t?{url:r}:new Blob([JSON.stringify(t.toJSON(e))],{type:"application/json"})}async function P(t){const r=(await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 66341))).default,{data:e}=await r(t,{responseType:"blob"});return e}function R(t){return (0,maybe/* isNone */.Wi)(t)?null:"string"==typeof t?t:t.url}function N(t,r,e){"string"==typeof t[r]?t[r]=e.url:t[r].url=e.url}\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js\nvar Layer = __webpack_require__(76136);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js\nvar APIKeyMixin = __webpack_require__(91223);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js\nvar ArcGISService = __webpack_require__(87232);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules\nvar OperationalLayer = __webpack_require__(43330);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js\nvar PortalLayer = __webpack_require__(18241);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js\nvar ScaleRangeLayer = __webpack_require__(95874);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/SceneService.js + 1 modules\nvar SceneService = __webpack_require__(69877);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules\nvar commonProperties = __webpack_require__(51599);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js\nvar I3SLayerDefinitions = __webpack_require__(97304);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js\nvar request = __webpack_require__(66341);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 2 modules\nvar Collection = __webpack_require__(15680);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules\nvar JSONSupport = __webpack_require__(82064);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js\nvar geometry = __webpack_require__(91957);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js\nvar lang = __webpack_require__(67134);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Warning.js\nvar Warning = __webpack_require__(96863);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js\nvar writer = __webpack_require__(39835);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection.js + 1 modules\nvar projection = __webpack_require__(92376);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js\nvar Polygon = __webpack_require__(89542);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/SceneModification.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nvar m;let y=m=class extends JSONSupport/* JSONSupport */.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,r,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,projection/* canProjectWithoutEngine */.Up)(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new Warning/* default */.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new Polygon/* default */.Z;(0,projection/* projectPolygon */.Wt)(e,p,s.layer.spatialReference),r[o]=p.toJSON(s)}else r[o]=e.toJSON(s);delete r[o].spatialReference}clone(){return new m({geometry:(0,lang/* clone */.d9)(this.geometry),type:this.type})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:Polygon/* default */.Z}),w()],y.prototype,"geometry",void 0),(0,tslib_es6._)([(0,writer/* writer */.c)(["web-scene","portal-item"],"geometry")],y.prototype,"writeGeometry",null),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["clip","mask","replace"],nonNullable:!0}),w()],y.prototype,"type",void 0),y=m=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.SceneModification")],y);const f=y;\n\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/support/SceneModifications.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nvar SceneModifications_m;let SceneModifications_n=SceneModifications_m=class extends((0,JSONSupport/* JSONSupportMixin */.eC)(Collection/* default.ofType */.Z.ofType(f))){constructor(r){super(r),this.url=null}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}clone(){return new SceneModifications_m({url:this.url,items:this.items.map((r=>r.clone()))})}_readModifications(r,o){for(const t of r)this.add(f.fromJSON(t,o))}static fromJSON(r,o){const t=new SceneModifications_m;return t._readModifications(r,o),t}static async fromUrl(r,t,e){const c={url:(0,urlUtils/* urlToObject */.mN)(r),origin:"service"},a=await (0,request["default"])(r,{responseType:"json",signal:(0,maybe/* get */.U2)(e,"signal")}),n=t.toJSON(),l=[];for(const o of a.data)l.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},c));return new SceneModifications_m({url:r,items:l})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String})],SceneModifications_n.prototype,"url",void 0),SceneModifications_n=SceneModifications_m=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.support.SceneModifications")],SceneModifications_n);const l=SceneModifications_n;\n\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/layers/IntegratedMeshLayer.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nlet IntegratedMeshLayer_b=class extends((0,SceneService/* SceneService */.Vt)((0,ArcGISService/* ArcGISService */.Y)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.I)((0,ScaleRangeLayer/* ScaleRangeLayer */.M)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.R)((0,APIKeyMixin/* APIKeyMixin */.V)(Layer/* default */.Z)))))))){constructor(...e){super(...e),this.handles=new Handles/* default */.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add((0,reactiveUtils.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),reactiveUtils/* sync */.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,r){this._modificationsSource={url:(0,persistableUrlUtils.f)(e,r),context:r}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,maybe/* get */.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(r){(0,promiseUtils/* throwIfAbortError */.r9)(r)}if(await this._fetchService(t),(0,maybe/* isSome */.pC)(this._modificationsSource)){const t=await l.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,maybe/* isNone */.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(SceneService/* SaveOperationType.SAVE_AS */.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(SceneService/* SaveOperationType.SAVE */.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new Error/* default */.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new Error/* default */.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new Error/* default */.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,readOnly:!0})],IntegratedMeshLayer_b.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["show","hide"]})],IntegratedMeshLayer_b.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:["IntegratedMeshLayer"]})],IntegratedMeshLayer_b.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{read:!1},readOnly:!0})],IntegratedMeshLayer_b.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:I3SLayerDefinitions/* I3SNodePageDefinition */.U4,readOnly:!0})],IntegratedMeshLayer_b.prototype,"nodePages",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[I3SLayerDefinitions/* I3SMaterialDefinition */.QI],readOnly:!0})],IntegratedMeshLayer_b.prototype,"materialDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[I3SLayerDefinitions/* I3STextureSetDefinition */.Yh],readOnly:!0})],IntegratedMeshLayer_b.prototype,"textureSetDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[I3SLayerDefinitions/* I3SGeometryDefinition */.H3],readOnly:!0})],IntegratedMeshLayer_b.prototype,"geometryDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],IntegratedMeshLayer_b.prototype,"serviceUpdateTimeStamp",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:l}),w({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],IntegratedMeshLayer_b.prototype,"modifications",void 0),(0,tslib_es6._)([(0,reader/* reader */.r)(["web-scene","portal-item"],"modifications")],IntegratedMeshLayer_b.prototype,"readModifications",null),(0,tslib_es6._)([(0,property/* property */.Cb)(commonProperties/* elevationInfo */.PV)],IntegratedMeshLayer_b.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],IntegratedMeshLayer_b.prototype,"path",void 0),IntegratedMeshLayer_b=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.layers.IntegratedMeshLayer")],IntegratedMeshLayer_b);const A=IntegratedMeshLayer_b;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/layers/IntegratedMeshLayer.js_+_4_modules?')}}]);