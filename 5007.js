"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[5007],{15007:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "registerFunctions": () => (/* binding */ ne)\n/* harmony export */ });\n/* harmony import */ var _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58780);\n/* harmony import */ var _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19249);\n/* harmony import */ var _Feature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94634);\n/* harmony import */ var _featureSetCollection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33455);\n/* harmony import */ var _featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5345);\n/* harmony import */ var _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(30359);\n/* harmony import */ var _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(58830);\n/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94837);\n/* harmony import */ var _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45712);\n/* harmony import */ var _featureset_actions_AttributeFilter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62700);\n/* harmony import */ var _featureset_actions_OrderBy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2441);\n/* harmony import */ var _featureset_actions_Top_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81273);\n/* harmony import */ var _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(40581);\n/* harmony import */ var _featureset_sources_FeatureLayerMemory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20155);\n/* harmony import */ var _featureset_support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7429);\n/* harmony import */ var _featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68673);\n/* harmony import */ var _featureset_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62294);\n/* harmony import */ var _fieldStats_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45573);\n/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(78668);\n/* harmony import */ var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3362);\n/* harmony import */ var _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(77567);\n/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12512);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction J(e,t,n,r){if(1===r.length){if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(r[0]))return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_14__/* .calculateStat */ .t)(e,r[0],-1);if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.b)(r[0]))return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_14__/* .calculateStat */ .t)(e,r[0].toArray(),-1)}return (0,_fieldStats_js__WEBPACK_IMPORTED_MODULE_14__/* .calculateStat */ .t)(e,r,-1)}function K(e,t,n){const r=e.getVariables();if(r.length>0){const i=[];for(let e=0;e<r.length;e++){const a={name:r[e]};i.push(t.evaluateIdentifier(n,a))}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .all */ .$6)(i).then((t=>{const n={};for(let e=0;e<r.length;e++)n[r[e]]=t[e];return e.parameters=n,e}))}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(e)}function Y(e,t,n=null){for(const r in e)if(r.toLowerCase()===t.toLowerCase())return e[r];return n}function Z(e){if(null===e)return null;const t={type:Y(e,"type",""),name:Y(e,"name","")};if("range"===t.type)t.range=Y(e,"range",[]);else{t.codedValues=[];for(const n of Y(e,"codedValues",[]))t.codedValues.push({name:Y(n,"name",""),code:Y(n,"code",null)})}return t}function Q(e){if(null===e)return null;const t={},n=Y(e,"wkt",null);null!==n&&(t.wkt=n);const r=Y(e,"wkid",null);return null!==r&&(t.wkid=r),t}function X(e){if(null===e)return null;const t={hasZ:Y(e,"hasz",!1),hasM:Y(e,"hasm",!1)},n=Y(e,"spatialreference",null);n&&(t.spatialReference=Q(n));const r=Y(e,"x",null);if(null!==r)return t.x=r,t.y=Y(e,"y",null),t;const i=Y(e,"rings",null);if(null!==i)return t.rings=i,t;const a=Y(e,"paths",null);if(null!==a)return t.paths=a,t;const s=Y(e,"points",null);if(null!==s)return t.points=s,t;for(const l of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=Y(e,l,null);null!==n&&(t[l]=n)}return t}function ee(e,t){for(const n of t)if(n===e)return!0;return!1}function te(e){return!!e.layerDefinition&&(!!e.featureSet&&(!1!==ee(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&(null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&(!1!==(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(e.layerDefinition.fields)&&!1!==(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(e.featureSet.features)))))}function ne(V){"async"===V.mode&&(V.functions.getuser=function(n,r){return V.standardFunctionAsync(n,r,((r,s,l)=>{(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(l,1,2);let o=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(l[1],""),f=!0===o;if(o=!0===o||!1===o?"":(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(o),l[0]instanceof _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z){let e=null;return n.services&&n.services.portal&&(e=n.services.portal),e=(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.getPortal)(l[0],e),(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.lookupUser)(e,o,f).then((e=>{if(e){const n=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].convertObjectToArcadeDictionary */ .Z.convertObjectToArcadeDictionary(n)}return null}))}let u=null;if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.q)(l[0])&&(u=l[0]),u)return f=!1,o?null:u.load().then((()=>u.getOwningSystemUrl())).then((r=>{if(!r)return o?null:u.getIdentityUser().then((e=>e?_Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].convertObjectToArcadeDictionary */ .Z.convertObjectToArcadeDictionary({username:e}):null));let s=null;return n.services&&n.services.portal&&(s=n.services.portal),s=(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.getPortal)(new _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(r),s),(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.lookupUser)(s,o,f).then((e=>{if(e){const n=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].convertObjectToArcadeDictionary */ .Z.convertObjectToArcadeDictionary(n)}return null}))}));throw new Error("Invalid Parameter")}))},V.signatures.push({name:"getuser",min:"1",max:"2"}),V.functions.featuresetbyid=function(e,t){return V.standardFunctionAsync(e,t,((e,t,n)=>{if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(n,2,4),n[0]instanceof _featureSetCollection_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z){const e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(n[1]);let t=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(n[2],null);const r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.z)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(n[3],!0));if(null===t&&(t=["*"]),!1===(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(t))throw new Error("Invalid Parameter");return n[0].featureSetById(e,r,t)}throw new Error("Invalid Parameter")}))},V.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),V.functions.getfeatureset=function(e,t){return V.standardFunctionAsync(e,t,((t,n,r)=>{if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(r,1,2),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.k)(r[0])){let t=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(r[1],"datasource");return null===t&&(t="datasource"),t=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(t).toLowerCase(),(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.convertToFeatureSet)(r[0].fullSchema(),t,e.lrucache,e.interceptor,e.spatialReference)}throw new Error("Invalid Parameter")}))},V.signatures.push({name:"getfeatureset",min:"1",max:"2"}),V.functions.featuresetbyportalitem=function(t,n){return V.standardFunctionAsync(t,n,((n,r,a)=>{if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z){const e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(a[1]),n=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(a[2]);let r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(a[3],null);const s=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.z)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(a[4],!0));if(null===r&&(r=["*"]),!1===(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(r))throw new Error("Invalid Parameter");let o=null;return t.services&&t.services.portal&&(o=t.services.portal),o=(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.getPortal)(a[0],o),(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.constructFeatureSetFromPortalItem)(e,n,t.spatialReference,r,s,o,t.lrucache,t.interceptor)}if(!1===(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(a[0]))throw new Error("Portal is required");const s=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(a[0]),o=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(a[1]);let f=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(a[2],null);const u=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.z)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(a[3],!0));if(null===f&&(f=["*"]),!1===(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(f))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return (0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.constructFeatureSetFromPortalItem)(s,o,t.spatialReference,f,u,t.services.portal,t.lrucache,t.interceptor);throw new Error("Portal is required")}))},V.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),V.functions.featuresetbyname=function(e,t){return V.standardFunctionAsync(e,t,((e,t,n)=>{if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(n,2,4),n[0]instanceof _featureSetCollection_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z){const e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(n[1]);let t=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(n[2],null);const r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.z)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(n[3],!0));if(null===t&&(t=["*"]),!1===(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(t))throw new Error("Invalid Parameter");return n[0].featureSetByName(e,r,t)}throw new Error("Invalid Parameter")}))},V.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),V.functions.featureset=function(e,n){return V.standardFunction(e,n,((n,r,i)=>{(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(i,1,1);let a=i[0];const s={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(a))a=JSON.parse(a),void 0!==a.layerDefinition?(s.layerDefinition=a.layerDefinition,s.featureSet=a.featureSet,a.layerDefinition.spatialReference&&(s.layerDefinition.spatialReference=a.layerDefinition.spatialReference)):(s.featureSet.features=a.features,s.featureSet.geometryType=a.geometryType,s.layerDefinition.geometryType=s.featureSet.geometryType,s.layerDefinition.objectIdField=a.objectIdFieldName,s.layerDefinition.typeIdField=a.typeIdFieldName,s.layerDefinition.globalIdField=a.globalIdFieldName,s.layerDefinition.fields=a.fields,a.spatialReference&&(s.layerDefinition.spatialReference=a.spatialReference));else{if(!(i[0]instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z))throw new Error("Invalid Parameter");{a=JSON.parse(i[0].castToText());const e=Y(a,"layerdefinition");if(null!==e){s.layerDefinition.geometryType=Y(e,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.globalIdField=Y(e,"globalidfield",""),s.layerDefinition.objectIdField=Y(e,"objectidfield",""),s.layerDefinition.typeIdField=Y(e,"typeidfield","");const t=Y(e,"spatialreference",null);t&&(s.layerDefinition.spatialReference=Q(t));for(const r of Y(e,"fields",[])){const e={name:Y(r,"name",""),alias:Y(r,"alias",""),type:Y(r,"type",""),nullable:Y(r,"nullable",!0),editable:Y(r,"editable",!0),length:Y(r,"length",null),domain:Z(Y(r,"domain"))};s.layerDefinition.fields.push(e)}const n=Y(a,"featureset",null);if(n){const e={};for(const t of s.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of Y(n,"features",[])){const n={},r=Y(t,"attributes",{});for(const t in r)n[e[t.toLowerCase()]]=r[t];s.featureSet.features.push({attributes:n,geometry:X(Y(t,"geometry",null))})}}}else{s.layerDefinition.geometryType=Y(a,"geometrytype",""),s.featureSet.geometryType=s.layerDefinition.geometryType,s.layerDefinition.objectIdField=Y(a,"objectidfieldname",""),s.layerDefinition.typeIdField=Y(a,"typeidfieldname","");const e=Y(a,"spatialreference",null);e&&(s.layerDefinition.spatialReference=Q(e));for(const n of Y(a,"fields",[])){const e={name:Y(n,"name",""),alias:Y(n,"alias",""),type:Y(n,"type",""),nullable:Y(n,"nullable",!0),editable:Y(n,"editable",!0),length:Y(n,"length",null),domain:Z(Y(n,"domain"))};s.layerDefinition.fields.push(e)}const t={};for(const n of s.layerDefinition.fields)t[n.name.toLowerCase()]=n.name;for(const n of Y(a,"features",[])){const e={},r=Y(n,"attributes",{});for(const n in r)e[t[n.toLowerCase()]]=r[n];s.featureSet.features.push({attributes:e,geometry:X(Y(n,"geometry",null))})}}}}if(!1===te(s))throw new Error("Invalid Parameter");return _featureset_sources_FeatureLayerMemory_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"].create */ .Z.create(s,e.spatialReference)}))},V.signatures.push({name:"featureset",min:"1",max:"1"}),V.functions.filter=function(e,t){return V.standardFunctionAsync(e,t,((t,n,r)=>{if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(r,2,2),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(r[0])||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.b)(r[0])){const t=[];let n=r[0];n instanceof _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z&&(n=n.toArray());let i=null;if(r[1]instanceof _FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z)i=V.arcadeCustomFunctionHandler(r[1]);else if(r[1]instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.N)i=(...t)=>r[1].fn(e,{preparsed:!0,arguments:t});else{if(!(r[1]instanceof _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.S))throw new Error("Invalid Parameter");i=(...e)=>{if(e.length!==r[1].paramCount)throw new Error("Invalid parameters");return r[1].fn(...e)}}return n.reduce(((e,r,a)=>e.then((e=>{a>0&&!0===e&&t.push(n[a-1]);const s=i(r);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .isPromiseLike */ .y8)(s)?s:(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(s)}))),Promise.resolve(!1)).then((e=>(!0===e&&n.length>0&&t.push(n[n.length-1]),t)))}return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.q)(r[0])?r[0].load().then((t=>{const n=_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(r[1],t.getFieldsIndex()),i=n.getVariables();if(i.length>0){const t=[];for(let n=0;n<i.length;n++){const r={name:i[n]};t.push(V.evaluateIdentifier(e,r))}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .all */ .$6)(t).then((e=>{const t={};for(let n=0;n<i.length;n++)t[i[n]]=e[n];return n.parameters=t,new _featureset_actions_AttributeFilter_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z({parentfeatureset:r[0],whereclause:n})}))}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(new _featureset_actions_AttributeFilter_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z({parentfeatureset:r[0],whereclause:n}))})):V.failDefferred("Filter cannot accept this parameter type")}))},V.signatures.push({name:"filter",min:"2",max:"2"}),V.functions.orderby=function(e,t){return V.standardFunctionAsync(e,t,((e,t,n)=>{if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(n,2,2),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.q)(n[0])){const e=new _featureset_support_OrderbyClause_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z(n[1]);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(new _featureset_actions_OrderBy_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z({parentfeatureset:n[0],orderbyclause:e}))}return V.failDefferred("Order cannot accept this parameter type")}))},V.signatures.push({name:"orderby",min:"2",max:"2"}),V.functions.top=function(e,t){return V.standardFunctionAsync(e,t,((e,t,n)=>((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(n,2,2),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.q)(n[0])?(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(new _featureset_actions_Top_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z({parentfeatureset:n[0],topnum:n[1]})):(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(n[0])?(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.t)(n[1])>=n[0].length?n[0].slice(0):n[0].slice(0,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.t)(n[1])):(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.b)(n[0])?(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.t)(n[1])>=n[0].length()?n[0].slice(0):n[0].slice(0,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.t)(n[1])):V.failDefferred("Top cannot accept this parameter type"))))},V.signatures.push({name:"top",min:"2",max:"2"}),V.functions.first=function(e,t){return V.standardFunctionAsync(e,t,((e,t,r)=>((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(r,1,1),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.q)(r[0])?r[0].first(e.abortSignal).then((e=>{if(null!==e){const t=_Feature_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].createFromGraphicLikeObject */ .Z.createFromGraphicLikeObject(e.geometry,e.attributes,r[0]);t._underlyingGraphic=e,e=t}return e})):(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(r[0])?0===r[0].length?(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(null):(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(r[0][0]):(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.b)(r[0])?0===r[0].length()?(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(null):(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(r[0].get(0)):null)))},V.signatures.push({name:"first",min:"1",max:"1"}),V.functions.attachments=function(e,n){return V.standardFunctionAsync(e,n,((n,r,i)=>{(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(i,1,2);const a={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(i.length>1)if(i[1]instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z){if(i[1].hasField("minsize")&&(a.minsize=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.t)(i[1].field("minsize"))),i[1].hasField("metadata")&&(a.returnMetadata=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.z)(i[1].field("metadata"))),i[1].hasField("maxsize")&&(a.maxsize=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.t)(i[1].field("maxsize"))),i[1].hasField("types")){const e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.Y)(i[1].field("types"),!1);e.length>0&&(a.types=e)}}else if(null!==i[1])throw new Error("Invalid Parameter");if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.k)(i[0])){let t=i[0]._layer;return t instanceof _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_17__["default"]&&(t=(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.constructFeatureSet)(t,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===t||!1===(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.q)(t)?[]:t.load().then((()=>t.queryAttachments(i[0].field(t.objectIdField),a.minsize,a.maxsize,a.types,a.returnMetadata)))}if(null===i[0])return[];throw new Error("Invalid Parameter")}))},V.signatures.push({name:"attachments",min:"1",max:"2"}),V.functions.featuresetbyrelationshipname=function(e,t){return V.standardFunctionAsync(e,t,((t,n,r)=>{(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(r,2,4);const i=r[0],a=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(r[1]);let s=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(r[2],null);const l=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.z)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(r[3],!0));if(null===s&&(s=["*"]),!1===(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(s))throw new Error("Invalid Parameter");if(null===r[0])return null;if(!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.k)(r[0]))throw new Error("Invalid Parameter");let c=i._layer;return c instanceof _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_17__["default"]&&(c=(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.constructFeatureSet)(c,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===c||!1===(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.q)(c)?null:c.load().then((t=>{const n=t.relationshipMetaData().filter((e=>e.name===a));if(0===n.length)return null;if(void 0!==n[0].relationshipTableId&&null!==n[0].relationshipTableId&&n[0].relationshipTableId>-1)return (0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.constructFeatureSetFromRelationship)(t,n[0],i.field(t.objectIdField),t.spatialReference,s,l,e.lrucache,e.interceptor);let r=t.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+n[0].relatedTableId.toString():r+"/"+n[0].relatedTableId.toString(),(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.constructFeatureSetFromUrl)(r,t.spatialReference,s,l,e.lrucache,e.interceptor).then((e=>e.load().then((()=>e.relationshipMetaData())).then((r=>{if(r=r.filter((e=>e.id===n[0].id)),!1===i.hasField(n[0].keyField)||null===i.field(n[0].keyField))return t.getFeatureByObjectId(i.field(t.objectIdField),[n[0].keyField]).then((t=>{if(t){const i=_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(r[0].keyField+"= @id",e.getFieldsIndex());return i.parameters={id:t.attributes[n[0].keyField]},e.filter(i)}return new _featureset_sources_Empty_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z({parentfeatureset:e})}));const a=_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(r[0].keyField+"= @id",e.getFieldsIndex());return a.parameters={id:i.field(n[0].keyField)},e.filter(a)}))))):null}))}))},V.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),V.functions.featuresetbyassociation=function(e,t){return V.standardFunctionAsync(e,t,((t,n,r)=>{(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(r,2,3);const i=r[0],a=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.C)(r[1],"")).toLowerCase(),s=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(r[2])?(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(r[2]):null;if(null===r[0])return null;if(!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.k)(r[0]))throw new Error("Invalid Parameter");let l=i._layer;return l instanceof _layers_FeatureLayer_js__WEBPACK_IMPORTED_MODULE_17__["default"]&&(l=(0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.constructFeatureSet)(l,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===l||!1===(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.q)(l)?null:l.load().then((()=>{const t=l.serviceUrl();return (0,_featureSetUtils_js__WEBPACK_IMPORTED_MODULE_4__.constructAssociationMetaDataFeatureSetFromUrl)(t,e.spatialReference)})).then((e=>{let t=null,n=null,r=!1;if(null!==s&&""!==s&&void 0!==s){for(const t of e.terminals)t.terminalName===s&&(n=t.terminalId);null===n&&(r=!0)}const o=e.associations.getFieldsIndex(),f=o.get("TOGLOBALID").name,u=o.get("FROMGLOBALID").name,c=o.get("TOTERMINALID").name,d=o.get("FROMTERMINALID").name,m=o.get("FROMNETWORKSOURCEID").name,p=o.get("TONETWORKSOURCEID").name,y=o.get("ASSOCIATIONTYPE").name,g=o.get("ISCONTENTVISIBLE").name,h=o.get("OBJECTID").name;for(const a of l.fields)if("global-id"===a.type){t=i.field(a.name);break}let F=null,I=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .SqlExpressionAdapted */ .yN(new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z({name:"percentalong",alias:"percentalong",type:"double"}),_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create("0",e.associations.getFieldsIndex())),E=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .SqlExpressionAdapted */ .yN(new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z({name:"side",alias:"side",type:"string"}),_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create("\'\'",e.associations.getFieldsIndex()));const D="globalid",w="globalId",b={};for(const i in e.lkp)b[i]=e.lkp[i].sourceId;const A=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .StringToCodeAdapted */ .TO(new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z({name:"classname",alias:"classname",type:"string"}),null,b);let N="";switch(a){case"midspan":{N=`((${f}=\'${t}\') OR ( ${u}=\'${t}\')) AND (${y} IN (5))`,A.codefield=_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(`CASE WHEN (${f}=\'${t}\') THEN ${m} ELSE ${p} END`,e.associations.getFieldsIndex());const n=(0,_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_12__/* .cloneField */ .JW)(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet.findField */ .Xx.findField(e.associations.fields,u));n.name=D,n.alias=D,F=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .SqlExpressionAdapted */ .yN(n,_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(`CASE WHEN (${u}=\'${t}\') THEN ${f} ELSE ${u} END`,e.associations.getFieldsIndex())),I=e.unVersion>=4?new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .OriginalField */ .$X(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet.findField */ .Xx.findField(e.associations.fields,o.get("PERCENTALONG").name)):new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .SqlExpressionAdapted */ .yN(new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z({name:"percentalong",alias:"percentalong",type:"double"}),_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{N=`((${f}=\'${t}\') OR ( ${u}=\'${t}\')) AND (${y} IN (4,6))`,A.codefield=_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(`CASE WHEN (${f}=\'${t}\') THEN ${m} ELSE ${p} END`,e.associations.getFieldsIndex());const n=(0,_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_12__/* .cloneField */ .JW)(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet.findField */ .Xx.findField(e.associations.fields,u));n.name=D,n.alias=D,F=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .SqlExpressionAdapted */ .yN(n,_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(`CASE WHEN (${u}=\'${t}\') THEN ${f} ELSE ${u} END`,e.associations.getFieldsIndex())),E=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .SqlExpressionAdapted */ .yN(new _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z({name:"side",alias:"side",type:"string"}),_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(`CASE WHEN (${y}=4) THEN \'from\' ELSE \'to\' END`,e.associations.getFieldsIndex()));break}case"connected":{let r=`${f}=\'@T\'`,i=`${u}=\'@T\'`;null!==n&&(r+=` AND ${c}=@A`,i+=` AND ${d}=@A`),N="(("+r+") OR ("+i+"))",N=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.M)(N,"@T",t),r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.M)(r,"@T",t),null!==n&&(r=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.M)(r,"@A",n.toString()),N=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.M)(N,"@A",n.toString())),A.codefield=_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create("CASE WHEN "+r+` THEN ${m} ELSE ${p} END`,e.associations.getFieldsIndex());const a=(0,_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_12__/* .cloneField */ .JW)(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet.findField */ .Xx.findField(e.associations.fields,u));a.name=D,a.alias=D,F=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .SqlExpressionAdapted */ .yN(a,_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create("CASE WHEN "+r+` THEN ${u} ELSE ${f} END`,e.associations.getFieldsIndex()));break}case"container":N=`${f}=\'${t}\' AND ${y} = 2`,null!==n&&(N+=` AND ${c} = `+n.toString()),A.codefield=m,N="( "+N+" )",F=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .FieldRename */ .QP(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet.findField */ .Xx.findField(e.associations.fields,u),D,D);case"content":N=`(${u}=\'${t}\' AND ${y} = 2)`,null!==n&&(N+=` AND ${d} = `+n.toString()),A.codefield=p,N="( "+N+" )",F=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .FieldRename */ .QP(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet.findField */ .Xx.findField(e.associations.fields,f),D,D);break;case"structure":N=`(${f}=\'${t}\' AND ${y} = 3)`,null!==n&&(N+=` AND ${c} = `+n.toString()),A.codefield=m,N="( "+N+" )",F=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .FieldRename */ .QP(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet.findField */ .Xx.findField(e.associations.fields,u),D,w);break;case"attached":N=`(${u}=\'${t}\' AND ${y} = 3)`,null!==n&&(N+=` AND ${d} = `+n.toString()),A.codefield=p,N="( "+N+" )",F=new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .FieldRename */ .QP(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet.findField */ .Xx.findField(e.associations.fields,f),D,w);break;default:throw new Error("Invalid Parameter")}r&&(N="1 <> 1");return new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet */ .Xx({parentfeatureset:e.associations,adaptedFields:[new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .OriginalField */ .$X(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet.findField */ .Xx.findField(e.associations.fields,h)),new _featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .OriginalField */ .$X(_featureset_actions_Adapted_js__WEBPACK_IMPORTED_MODULE_6__/* .AdaptedFeatureSet.findField */ .Xx.findField(e.associations.fields,g)),F,E,A,I],extraFilter:N?_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(N,e.associations.getFieldsIndex()):null})}))}))},V.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),V.functions.groupby=function(e,n){return V.standardFunctionAsync(e,n,((n,r,i)=>((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(i,3,3),(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.q)(i[0])?i[0].load().then((n=>{const r=[],a=[];let s=!1,l=[];if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(i[1]))l.push(i[1]);else if(i[1]instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)l.push(i[1]);else if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(i[1]))l=i[1];else{if(!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.b)(i[1]))return V.failDefferred("Illegal Value: GroupBy");l=i[1].toArray()}for(const e of l)if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(e)){const t=_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(e),n.getFieldsIndex()),i=!0===(0,_featureset_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .isSingleField */ .y5)(t)?(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(e):"%%%%FIELDNAME";r.push({name:i,expression:t}),"%%%%FIELDNAME"===i&&(s=!0)}else{if(!(e instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z))return V.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(s=!0),!t)return V.failDefferred("Illegal Value: GroupBy");r.push({name:t,expression:_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(i||t,n.getFieldsIndex())})}}if(l=[],(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(i[2]))l.push(i[2]);else if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(i[2]))l=i[2];else if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.b)(i[2]))l=i[2].toArray();else{if(!(i[2]instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z))return V.failDefferred("Illegal Value: GroupBy");l.push(i[2])}for(const e of l){if(!(e instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z))return V.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"",r=e.hasField("statistic")?e.field("statistic"):"",i=e.hasField("expression")?e.field("expression"):"";if(!t||!r||!i)return V.failDefferred("Illegal Value: GroupBy");a.push({name:t,statistic:r.toLowerCase(),expression:_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(i,n.getFieldsIndex())})}}if(s){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of a)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}const o=[];for(const t of r)o.push(K(t.expression,V,e));for(const t of a)o.push(K(t.expression,V,e));return o.length>0?(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .all */ .$6)(o).then((()=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(i[0].groupby(r,a)))):(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(i[0].groupby(r,a))})):V.failDefferred("Illegal Value: GroupBy"))))},V.signatures.push({name:"groupby",min:"3",max:"3"}),V.functions.distinct=function(e,n){return V.standardFunctionAsync(e,n,((n,r,i)=>(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.q)(i[0])?((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.p)(i,2,2),i[0].load().then((n=>{const r=[];let a=[];if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(i[1]))a.push(i[1]);else if(i[1]instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)a.push(i[1]);else if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.a)(i[1]))a=i[1];else{if(!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.b)(i[1]))return V.failDefferred("Illegal Value: GroupBy");a=i[1].toArray()}let s=!1;for(const e of a)if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(e)){const t=_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(e),n.getFieldsIndex()),i=!0===(0,_featureset_support_sqlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .isSingleField */ .y5)(t)?(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_5__.d)(e):"%%%%FIELDNAME";r.push({name:i,expression:t}),"%%%%FIELDNAME"===i&&(s=!0)}else{if(!(e instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z))return V.failDefferred("Illegal Value: GroupBy");{const t=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===t&&(s=!0),!t)return V.failDefferred("Illegal Value: GroupBy");r.push({name:t,expression:_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_16__.WhereClause.create(i||t,n.getFieldsIndex())})}}if(s){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}const l=[];for(const t of r)l.push(K(t.expression,V,e));return l.length>0?(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .all */ .$6)(l).then((()=>(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(i[0].groupby(r,[])))):(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .resolve */ .DB)(i[0].groupby(r,[]))}))):J("distinct",n,r,i)))})}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/arcade/functions/featuresetbase.js?')}}]);