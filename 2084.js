"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[2084],{52084:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "getPatternDescriptor": () => (/* binding */ N),\n/* harmony export */   "getSymbolLayerFill": () => (/* binding */ H),\n/* harmony export */   "previewSymbol3D": () => (/* binding */ X)\n/* harmony export */ });\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36567);\n/* harmony import */ var _core_colorUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(39043);\n/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39994);\n/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70375);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13802);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61681);\n/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78668);\n/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95550);\n/* harmony import */ var _gfxUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89298);\n/* harmony import */ var _IconSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(52285);\n/* harmony import */ var _ObjectSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4125);\n/* harmony import */ var _previewUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83773);\n/* harmony import */ var _renderUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64194);\n/* harmony import */ var _styleUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38453);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59672);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.20/esri/copyright.txt for details.\n*/\nconst U=22,D=120,O=80,I=40,R=20,E=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getLogger */ .Z.getLogger("esri.symbols.support.previewSymbol3D");function C(e){const t=e.outline,s=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(e.material)?e.material.color:null,r=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(s)?s.toHex():null;if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(t))return"fill"===e.type&&"#ffffff"===r?{color:"#bdc3c7",width:.75}:null;const o=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(t.size)||0;return{color:"rgba("+((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(o,O)}}function Z(t,s){const r=s&&s.resource,o=r&&r.href;if(t.thumbnail&&t.thumbnail.url)return Promise.resolve(t.thumbnail.url);if(o&&"object"!==s.type)return Promise.resolve((0,_utils_js__WEBPACK_IMPORTED_MODULE_11__/* .getIconHref */ .nf)(t,s));const a=(0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)("esri/images/Legend/legend3dsymboldefault.png");return t.styleOrigin&&(t.styleOrigin.styleName||t.styleOrigin.styleUrl)?(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_10__.resolveWebStyleSymbol)(t.styleOrigin,{portal:t.styleOrigin.portal},"webRef").catch((e=>e)).then((e=>{var t;return(null==e||null==(t=e.thumbnail)?void 0:t.url)||a})):Promise.resolve(a)}function q(e,r=1){const o=e.a,a=(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .toHSV */ ._Y)(e),l=a.h,n=a.s/r,i=100-(100-a.v)/r,{r:c,g:h,b:u}=(0,_core_colorUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .toRGB */ .xr)({h:l,s:n,v:i});return[c,h,u,o]}function A(e){return"water"===e.type?(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(e.color)?null:e.color:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(e.material)||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isNone */ .Wi)(e.material.color)?null:e.material.color}function H(e,t=0){const s=A(e);if(!s){if("fill"===e.type)return null;const s=_gfxUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .defaultThematicColor.r */ .Ne.r,r=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .adjustColorComponentBrightness */ .uH)(s,t);return[r,r,r,100]}const r=s.toRgba();for(let o=0;o<3;o++)r[o]=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .adjustColorComponentBrightness */ .uH)(r[o],t);return r}async function N(t,s){const r=t.style;if("none"===r)return null;return{type:"pattern",x:0,y:0,src:await (0,_gfxUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .getPatternUrlWithColor */ .Od)((0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .V)(`esri/symbols/patterns/${r}.png`),s.toCss(!0)),width:5,height:5}}function T(e){return e.outline?C(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function $(e,t){const s=A(e);if(!s)return null;let r="rgba(";return r+=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .adjustColorComponentBrightness */ .uH)(s.r,t)+",",r+=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .adjustColorComponentBrightness */ .uH)(s.g,t)+",",r+=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .adjustColorComponentBrightness */ .uH)(s.b,t)+",",r+s.a+");"}function B(e,t){const s=$(e,t);if(!s)return{};return{color:s,width:Math.min(e.size?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(e.size):.75,O)}}function F(e,t,s){const r=.75*s;return{type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function G(e){const t=e.depth,s=e.height,r=e.width;return r&&t&&s&&r===t&&r<s}function J(e,t,s){const r=[];if(!e)return r;switch(e.type){case"icon":{const s=0,o=0,a=t,l=t;switch(e.resource&&e.resource.primitive||_IconSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_6__/* .defaultPrimitive */ .SI){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:H(e,0),stroke:C(e)});break;case"square":r.push({shape:{type:"path",path:[{command:"M",values:[s,l]},{command:"L",values:[s,o]},{command:"L",values:[a,o]},{command:"L",values:[a,l]},{command:"Z",values:[]}]},fill:H(e,0),stroke:C(e)});break;case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[s,l]},{command:"L",values:[.5*a,o]},{command:"L",values:[a,l]},{command:"Z",values:[]}]},fill:H(e,0),stroke:C(e)});break;case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*a,o]},{command:"L",values:[.5*a,l]},{command:"M",values:[s,.5*l]},{command:"L",values:[a,.5*l]}]},stroke:T(e)});break;case"x":r.push({shape:{type:"path",path:[{command:"M",values:[s,o]},{command:"L",values:[a,l]},{command:"M",values:[a,o]},{command:"L",values:[s,l]}]},stroke:T(e)});break;case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[s,.5*l]},{command:"L",values:[.5*a,o]},{command:"L",values:[a,.5*l]},{command:"L",values:[.5*a,l]},{command:"Z",values:[]}]},fill:H(e,0),stroke:C(e)})}break}case"object":switch(e.resource&&e.resource.primitive||_ObjectSymbol3DLayerResource_js__WEBPACK_IMPORTED_MODULE_7__/* .defaultPrimitive */ .SI){case"cone":{const o=F(H(e,0),H(e,-.6),s?R:t),a=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getConeShapes */ .TE)(t,s);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:o});break}case"inverted-cone":{const s=H(e,0),o=F(s,H(e,-.6),t),a=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getInvertedConeShapes */ .DY)(t);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:s});break}case"cube":{const o=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getCubeShapes */ .Pc)(t,s);r.push({shape:o[0],fill:H(e,0)}),r.push({shape:o[1],fill:H(e,-.3)}),r.push({shape:o[2],fill:H(e,-.5)});break}case"cylinder":{const o=F(H(e,0),H(e,-.6),s?R:t),a=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getCylinderShapes */ .EB)(t,s);r.push({shape:a[0],fill:o}),r.push({shape:a[1],fill:o}),r.push({shape:a[2],fill:H(e,0)});break}case"diamond":{const s=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getDiamondShapes */ .XX)(t);r.push({shape:s[0],fill:H(e,-.3)}),r.push({shape:s[1],fill:H(e,0)}),r.push({shape:s[2],fill:H(e,-.3)}),r.push({shape:s[3],fill:H(e,-.7)});break}case"sphere":{const s=F(H(e,0),H(e,-.6));s.x1=0,s.y1=0,s.x2=.25*t,s.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:s});break}case"tetrahedron":{const s=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getTetrahedronShapes */ .tp)(t);r.push({shape:s[0],fill:H(e,-.3)}),r.push({shape:s[1],fill:H(e,0)}),r.push({shape:s[2],fill:H(e,-.6)});break}}break}return r}function K(e){return"icon"===e.type?"multiply":"tint"}function Q(e,t){const s=t&&t.size?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(t.size):null,r=t&&t.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(t.maxSize):null,o=t&&t.disableUpsampling,a=e.symbolLayers,l=[];let c=0,h=0;const u=a.getItemAt(a.length-1);let p;return u&&"icon"===u.type&&(p=u.size&&(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(u.size)),a.forEach((a=>{if("icon"!==a.type&&"object"!==a.type)return;const n="icon"===a.type?a.size&&(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(a.size):0,u=s||n?Math.ceil(Math.min(s||n,r||D)):U;if(a&&a.resource&&a.resource.href){const t=Z(e,a).then((function(e){const t=a.get("material.color"),s=K(a);return (0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .tintImageWithColor */ .r)(e,u,t,s,o)})).then((function(e){const t=e.width,s=e.height;return c=Math.max(c,t),h=Math.max(h,s),[{shape:{type:"image",x:0,y:0,width:t,height:s,src:e.url},fill:null,stroke:null}]}));l.push(t)}else{var m;let e=u;"icon"===a.type&&p&&s&&(e=u*(n/p));const r="tall"===(null==t?void 0:t.symbolConfig)||(null==t||null==(m=t.symbolConfig)?void 0:m.isTall)||"object"===a.type&&G(a);c=Math.max(c,r?R:e),h=Math.max(h,e),l.push(Promise.resolve(J(a,e,r)))}})),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .eachAlways */ .as)(l).then((function(e){const s=[];return e.forEach((function(e){e.value?s.push(e.value):e.error&&E.warn("error while building swatchInfo!",e.error)})),(0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .renderSymbol */ .w)(s,[c,h],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function V(e,t){const s=e.symbolLayers,r=[],o=(0,_utils_js__WEBPACK_IMPORTED_MODULE_11__/* .isVolumetricSymbol */ .YW)(e),a=t&&t.size?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(t.size):null,l=(t&&t.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(t.maxSize):null)||O;let n,c=0,h=0;return s.forEach(((e,t)=>{if(!e)return;if("line"!==e.type&&"path"!==e.type)return;const s=[];switch(e.type){case"line":{const r=B(e,0),o=r&&r.width||0;0===t&&(n=o);const i=Math.min(a||o,l),u=0===t?i:a?i*(o/n):i,p=u>I/2?2*u:I;h=Math.max(h,u),c=Math.max(c,p),r.width=u,s.push({shape:{type:"path",path:[{command:"M",values:[0,.5*h]},{command:"L",values:[c,.5*h]}]},stroke:r});break}case"path":{const t=Math.min(a||U,l),r=H(e,0),n=H(e,-.2),u=$(e,-.4),p=u?{color:u,width:1}:{};if("quad"===e.profile){var o,i;const t=null!=(o=e.width)?o:e.size,a=null!=(i=e.height)?i:e.size,l=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getPathSymbolShapes */ .eb)(t&&a?t/a:1,0===a,0===t),c={...p,join:"bevel"};s.push({shape:l[0],fill:n,stroke:c}),s.push({shape:l[1],fill:n,stroke:c}),s.push({shape:l[2],fill:r,stroke:c})}else s.push({shape:_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .shapes.pathSymbol3DLayer[0] */ .JZ.pathSymbol3DLayer[0],fill:n,stroke:p}),s.push({shape:_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .shapes.pathSymbol3DLayer[1] */ .JZ.pathSymbol3DLayer[1],fill:r,stroke:p});h=Math.max(h,t),c=h}}r.push(s)})),Promise.resolve((0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .renderSymbol */ .w)(r,[c,h],{node:t&&t.node,scale:o,opacity:t&&t.opacity}))}async function W(e,t){const s="mesh-3d"===e.type,r=e.symbolLayers,o=t&&t.size?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(t.size):null,a=t&&t.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(t.maxSize):null,n=o||U,c=[];let h=0,u=0,p=!1;for(let i=0;i<r.length;i++){const e=r.getItemAt(i),t=[];if(s&&"fill"!==e.type)continue;const o=_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .shapes.fill[0] */ .JZ.fill[0];switch(e.type){case"fill":{const r=C(e),i=Math.min(n,a||D);h=Math.max(h,i),u=Math.max(u,i),p=!0;let c=H(e,0);const m="pattern"in e&&e.pattern,f=A(e);!s&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .isSome */ .pC)(m)&&"style"===m.type&&"solid"!==m.style&&f&&(c=await N(m,f)),t.push({shape:o,fill:c,stroke:r});break}case"line":{const s={stroke:B(e,0),shape:o};h=Math.max(h,U),u=Math.max(u,U),t.push(s);break}case"extrude":{const s={join:"round",...B(e,-.4)},r=H(e,0),o=H(e,-.2),l=Math.min(n,a||D),i=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getExtrudeSymbolShapes */ .EV)(l);s.width=1,t.push({shape:i[0],fill:o,stroke:s}),t.push({shape:i[1],fill:o,stroke:s}),t.push({shape:i[2],fill:r,stroke:s});const c=U,p=.7*U+.5*l;h=Math.max(h,c),u=Math.max(u,p);break}case"water":{const s=A(e),r=q(s),o=q(s,2),l=q(s,3),i=(0,_previewUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getWaterSymbolShapes */ .ht)();p=!0,t.push({shape:i[0],fill:r}),t.push({shape:i[1],fill:o}),t.push({shape:i[2],fill:l});const c=Math.min(n,a||D);h=Math.max(h,c),u=Math.max(u,c);break}}c.push(t)}return Promise.resolve((0,_renderUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .renderSymbol */ .w)(c,[h,u],{node:t&&t.node,scale:p,opacity:t&&t.opacity}))}function X(e,t){if(0===e.symbolLayers.length)return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));let s=null;switch(e.type){case"point-3d":s=Q(e,t);break;case"line-3d":s=V(e,t);break;case"polygon-3d":case"mesh-3d":s=W(e,t)}return s||Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z("symbolPreview: swatchInfo3D","symbol not supported."))}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/symbols/support/previewSymbol3D.js?')}}]);