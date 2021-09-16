"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[216],{40216:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "loadGLTFMesh": () => (/* binding */ G)\n/* harmony export */ });\n/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30936);\n/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66341);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(61681);\n/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1662);\n/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34344);\n/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8909);\n/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1983);\n/* harmony import */ var _MeshComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77727);\n/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1680);\n/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33206);\n/* harmony import */ var _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(124);\n/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81936);\n/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86717);\n/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56999);\n/* harmony import */ var _buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79);\n/* harmony import */ var _georeference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91780);\n/* harmony import */ var _views_3d_glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91420);\n/* harmony import */ var _views_3d_glTF_loader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20016);\n/* harmony import */ var _views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1731);\n/* harmony import */ var _views_3d_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(58196);\n/* harmony import */ var _views_3d_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(14634);\n/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14789);\n/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(32101);\n/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(385);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nasync function G(t,e,r){const o=new _views_3d_glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_15__/* .DefaultLoadingContext */ .C(K(r)),s=(await (0,_views_3d_glTF_loader_js__WEBPACK_IMPORTED_MODULE_16__/* .load */ .z)(o,e,r,!0)).model,a=s.lods.shift(),i=new Map,u=new Map;s.textures.forEach(((t,e)=>i.set(e,Q(t)))),s.materials.forEach(((t,e)=>u.set(e,H(t,i))));const l=P(a);for(const n of a.parts)J(l,n,u);const{position:c,normal:f,tangent:p,color:d,texCoord0:g}=l.vertexAttributes,x={position:c.typedBuffer,normal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(f)?f.typedBuffer:null,tangent:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(p)?p.typedBuffer:null,uv:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(g)?g.typedBuffer:null,color:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(d)?d.typedBuffer:null},b=(0,_georeference_js__WEBPACK_IMPORTED_MODULE_14__/* .georeferenceByTransform */ .w1)(x,t,r);return{transform:b.transform,components:l.components,spatialReference:t.spatialReference,vertexAttributes:new _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP({position:b.vertexAttributes.position,normal:b.vertexAttributes.normal,tangent:b.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function K(t){return null!=t&&t.resolveFile?{busy:!1,request:async(r,o,s)=>{const a=t.resolveFile(r),i="image"===o?"image":"binary"===o?"array-buffer":"json";return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(a,{responseType:i,signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(s)?s.signal:null})).data}}:null}function P(t){let e=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1};for(const{attributes:{position:o,normal:n,color:s,tangent:a,texCoord0:i}}of t.parts)e+=o.count,n&&(r.normal=!0),s&&(r.color=!0),a&&(r.tangent=!0),i&&(r.texCoord0=!0);return{writeIndex:0,vertexAttributes:{position:(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__/* .createBuffer */ .gS)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3f64 */ .fP,e),normal:r.normal?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__/* .createBuffer */ .gS)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3f */ .ct,e):null,tangent:r.tangent?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__/* .createBuffer */ .gS)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec4f */ .ek,e):null,color:r.color?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__/* .createBuffer */ .gS)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec4u8 */ .mc,e):null,texCoord0:r.texCoord0?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__/* .createBuffer */ .gS)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec2f */ .Eu,e):null},components:[]}}function Q(t){return new _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z({data:t.data,wrap:Y(t.parameters.wrap)})}function H(e,n){const s=new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(tt(e.color,e.opacity)),a=e.emissiveFactor?new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(et(e.emissiveFactor)):null;return new _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z({color:s,colorTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .unwrap */ .Wg)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .applySome */ .yw)(e.textureColor,(t=>n.get(t)))),normalTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .unwrap */ .Wg)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .applySome */ .yw)(e.textureNormal,(t=>n.get(t)))),emissiveColor:a,emissiveTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .unwrap */ .Wg)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .applySome */ .yw)(e.textureEmissive,(t=>n.get(t)))),occlusionTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .unwrap */ .Wg)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .applySome */ .yw)(e.textureOcclusion,(t=>n.get(t)))),alphaMode:X(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .unwrap */ .Wg)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .applySome */ .yw)(e.textureMetallicRoughness,(t=>n.get(t))))})}function J(t,e,r){const{position:o,normal:i,tangent:u,color:c,texCoord0:f}=t.vertexAttributes,m=t.writeIndex,p=e.attributes.position.count;if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_11__.t)(o.slice(m,p),e.attributes.position,e.transform),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(e.attributes.normal)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(i)){const t=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),e.transform);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_11__.a)(i.slice(m,p),e.attributes.normal,t)}else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(i)&&(0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_19__.f)(i,0,0,1,{dstIndex:m,count:p});if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(e.attributes.tangent)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(u)){const t=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),e.transform);(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_12__.t)(u.slice(m,p),e.attributes.tangent,t)}else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(u)&&(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_20__.f)(u,0,0,1,1,{dstIndex:m,count:p});if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(e.attributes.texCoord0)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(f)?(0,_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_21__.n)(f.slice(m,p),e.attributes.texCoord0):(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(f)&&(0,_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_21__.f)(f,0,0,{dstIndex:m,count:p}),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(e.attributes.color)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(c)){const t=e.attributes.color,r=c.slice(m,p);if(4===t.elementCount)t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec4f */ .ek?(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_12__.s)(r,t,255):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec4u8 */ .mc?(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_20__.c)(r,t):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec4u16 */ .v6&&(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_12__.a)(r,t,8);else{(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_20__.f)(r,255,255,255,255);const e=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3u8.fromTypedArray */ .ne.fromTypedArray(r.typedBuffer,r.typedBufferStride);t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3f */ .ct?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_11__.s)(e,t,255):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3u8 */ .ne?(0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_19__.c)(e,t):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3u16 */ .mw&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_11__.b)(e,t,8)}}else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(c)&&(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_20__.f)(c.slice(m,p),255,255,255,255);const b=W(e.indices||p,e.primitiveType);if(m)for(let n=0;n<b.length;n++)b[n]+=m;t.components.push(new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z({faces:b,material:r.get(e.material).clone(),trustSourceNormals:!0})),t.writeIndex+=p}function W(t,e){switch(e){case 4:return (0,_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .trianglesToTriangles */ .nh)(t,_views_3d_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_18__/* .generateIndexArray */ .DX);case 5:return (0,_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .triangleStripToTriangles */ .DA)(t);case 6:return (0,_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .triangleFanToTriangles */ .jX)(t)}}function X(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Y(t){return{horizontal:Z(t.s),vertical:Z(t.t)}}function Z(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function $(t){return t**(1/_views_3d_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_23__/* .COLOR_GAMMA */ .K)*255}function tt(t,e){return (0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__.f)($(t[0]),$(t[1]),$(t[2]),e)}function et(t){return (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.f)($(t[0]),$(t[1]),$(t[2]))}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js?')}}]);