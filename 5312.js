"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[5312],{89626:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Fp": () => (/* binding */ r),\n/* harmony export */   "RL": () => (/* binding */ m),\n/* harmony export */   "UV": () => (/* binding */ a),\n/* harmony export */   "bk": () => (/* binding */ f)\n/* harmony export */ });\n/* unused harmony export getSDFSymbol */\n/* harmony import */ var _core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73534);\n/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53736);\n/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10927);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nfunction r(t){if(!t)return null;switch(t.type){case"CIMPointSymbol":{const n=t.symbolLayers;return n&&1===n.length?r(n[0]):null}case"CIMVectorMarker":{var n;const o=t.markerGraphics;if(!o||1!==o.length)return null;const r=o[0];if(!r)return null;const l=r.geometry;if(!l)return null;const e=r.symbol;return!e||"CIMPolygonSymbol"!==e.type&&"CIMLineSymbol"!==e.type||null!=(n=e.symbolLayers)&&n.some((t=>!!t.effects))?null:{geom:l,asFill:"CIMPolygonSymbol"===e.type}}case"sdf":return{geom:t.geom,asFill:t.asFill}}return null}function l(t){const n=t.markerGraphics;if(!n||1!==n.length)return null;const o=n[0];if(!o)return null;const r=o.symbol;return!r||"CIMPolygonSymbol"!==r.type&&"CIMLineSymbol"!==r.type?null:r}function e(t){return t?t.rings?t.rings:t.paths?t.paths:void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax?[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]:null:null}function s(t){let n=1/0,r=-1/0,l=1/0,e=-1/0;for(const o of t)for(const t of o)t[0]<n&&(n=t[0]),t[0]>r&&(r=t[0]),t[1]<l&&(l=t[1]),t[1]>e&&(e=t[1]);return new _Rect_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(n,l,r-n,e-l)}function i(t){let n=1/0,o=-1/0,r=1/0,l=-1/0;for(const e of t)for(const t of e)t[0]<n&&(n=t[0]),t[0]>o&&(o=t[0]),t[1]<r&&(r=t[1]),t[1]>l&&(l=t[1]);return[n,r,o,l]}function f(t){return t?t.rings?i(t.rings):t.paths?i(t.paths):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isExtent */ .YX)(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function a(t,n,o,r,l){const[e,s,i,f]=t;if(i<e||f<s)return[0,0,0];const a=i-e,m=f-s,u=128,c=1,y=Math.floor(.5*(.5*u-c)),h=(u-2*(y+c))/Math.max(a,m),x=Math.round(a*h)+2*y,M=Math.round(m*h)+2*y;let g=1;if(n){g=M/h/(n.ymax-n.ymin)}let p=0,d=0;if(r)if(l){if(n&&o&&n.ymax-n.ymin>0){const t=(n.xmax-n.xmin)/(n.ymax-n.ymin);p=r.x/(o*t),d=r.y/o}}else p=r.x,d=r.y;p=.5*(n.xmax+n.xmin)+p*(n.xmax-n.xmin),d=.5*(n.ymax+n.ymin)+d*(n.ymax-n.ymin),p-=e,d-=s,p*=h,d*=h,p+=y,d+=y;return[g,p/x-.5,-(d/M-.5)]}function m(t){const n=e(t.geom),o=s(n),r=128,l=1,i=Math.floor(.5*(.5*r-l)),f=(r-2*(i+l))/Math.max(o.width,o.height),a=Math.round(o.width*f)+2*i,m=Math.round(o.height*f)+2*i,h=[];for(const e of n)if(e&&e.length>1){const n=[];for(const r of e){let[l,e]=r;l-=o.x,e-=o.y,l*=f,e*=f,l+=i-.5,e+=i-.5,t.asFill?n.push([l,e]):n.push([Math.round(l),Math.round(e)])}if(t.asFill){const t=n.length-1;n[0][0]===n[t][0]&&n[0][1]===n[t][1]||n.push(n[0])}h.push(n)}const x=u(h,a,m,i);return t.asFill&&c(h,a,m,i,x),[y(x,i),a,m]}function u(t,n,o,r){const l=n*o,e=new Array(l),s=r*r+1;for(let i=0;i<l;++i)e[i]=s;for(const i of t){const t=i.length;for(let l=1;l<t;++l){const t=i[l-1],s=i[l];let f,a,m,u;t[0]<s[0]?(f=t[0],a=s[0]):(f=s[0],a=t[0]),t[1]<s[1]?(m=t[1],u=s[1]):(m=s[1],u=t[1]);let c=Math.floor(f)-r,y=Math.floor(a)+r,h=Math.floor(m)-r,x=Math.floor(u)+r;c<0&&(c=0),y>n&&(y=n),h<0&&(h=0),x>o&&(x=o);const M=s[0]-t[0],g=s[1]-t[1],p=M*M+g*g;for(let r=c;r<y;r++)for(let l=h;l<x;l++){let i,f,a=(r-t[0])*M+(l-t[1])*g;a<0?(i=t[0],f=t[1]):a>p?(i=s[0],f=s[1]):(a/=p,i=t[0]+a*M,f=t[1]+a*g);const m=(r-i)*(r-i)+(l-f)*(l-f),u=(o-l-1)*n+r;m<e[u]&&(e[u]=m)}}}for(let i=0;i<l;++i)e[i]=Math.sqrt(e[i]);return e}function c(t,n,o,r,l){for(const e of t){const t=e.length;for(let s=1;s<t;++s){const t=e[s-1],i=e[s];let f,a,m,u;t[0]<i[0]?(f=t[0],a=i[0]):(f=i[0],a=t[0]),t[1]<i[1]?(m=t[1],u=i[1]):(m=i[1],u=t[1]);let c=Math.floor(f),y=Math.floor(a)+1,h=Math.floor(m),x=Math.floor(u)+1;c<r&&(c=r),y>n-r&&(y=n-r),h<r&&(h=r),x>o-r&&(x=o-r);for(let e=h;e<x;++e){if(t[1]>e==i[1]>e)continue;const s=(o-e-1)*n;for(let n=c;n<y;++n)n<(i[0]-t[0])*(e-t[1])/(i[1]-t[1])+t[0]&&(l[s+n]=-l[s+n]);for(let t=r;t<c;++t)l[s+t]=-l[s+t]}}}}function y(n,o){const r=2*o,l=n.length,e=new Uint8Array(4*l);for(let s=0;s<l;++s){const o=.5-n[s]/r;(0,_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__/* .packFloatRGBA */ .I)(o,e,4*s)}return e}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/symbols/cim/SDFHelper.js?')},75312:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "S": () => (/* binding */ oe),\n/* harmony export */   "c": () => (/* binding */ H)\n/* harmony export */ });\n/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30936);\n/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67134);\n/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13802);\n/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(61681);\n/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(95550);\n/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21130);\n/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30879);\n/* harmony import */ var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95215);\n/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25609);\n/* harmony import */ var _SDFHelper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89626);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(60789);\n/* harmony import */ var _effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29882);\n/* harmony import */ var _views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28432);\n/* harmony import */ var _views_2d_engine_webgl_fontUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70734);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst P=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getLogger */ .Z.getLogger("esri.symbols.cim.cimAnalyzer");function M(e){switch(e){case"Butt":return _enums_js__WEBPACK_IMPORTED_MODULE_6__/* .CapType.BUTT */ .RL.BUTT;case"Square":return _enums_js__WEBPACK_IMPORTED_MODULE_6__/* .CapType.SQUARE */ .RL.SQUARE;default:return _enums_js__WEBPACK_IMPORTED_MODULE_6__/* .CapType.ROUND */ .RL.ROUND}}function L(e){switch(e){case"Bevel":return _enums_js__WEBPACK_IMPORTED_MODULE_6__/* .JoinType.BEVEL */ .AH.BEVEL;case"Miter":return _enums_js__WEBPACK_IMPORTED_MODULE_6__/* .JoinType.MITER */ .AH.MITER;default:return _enums_js__WEBPACK_IMPORTED_MODULE_6__/* .JoinType.ROUND */ .AH.ROUND}}function I(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function w(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function X(e){let t="",i="";if(e){const o=e.toLowerCase();-1!==o.indexOf("italic")?t="italic":-1!==o.indexOf("oblique")&&(t="oblique"),-1!==o.indexOf("bold")?i="bold":-1!==o.indexOf("light")&&(i="lighter")}return{style:t,weight:i}}function x(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function z(e,t,i,o){let r;e[t]?r=e[t]:(r={},e[t]=r),r[i]=o}function J(e){const t=e.markerPlacement;return t&&t.angleToLine?_enums_js__WEBPACK_IMPORTED_MODULE_6__/* .Alignment.MAP */ .v2.MAP:_enums_js__WEBPACK_IMPORTED_MODULE_6__/* .Alignment.SCREEN */ .v2.SCREEN}async function H(e,t,i,o,r){const n=null!=o?o:[];if(!e)return n;let a,s;const c={};if("CIMSymbolReference"!==e.type)return P.error("Expect cim type to be \'CIMSymbolReference\'"),n;if(a=e.symbol,s=e.primitiveOverrides,s){const e=[];for(const i of s){const o=i.valueExpressionInfo;if(o&&t){const r=o.expression,n=(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_4__/* .createRendererExpression */ .Yi)(r,t.spatialReference,t.fields).then((e=>{e&&z(c,i.primitiveName,i.propertyName,e)}));e.push(n)}else null!=i.value&&z(c,i.primitiveName,i.propertyName,i.value)}e.length>0&&await Promise.all(e)}const f=[];switch(ne(a,i,f),f.length>0&&await Promise.all(f),a.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":R(a,s,c,t,n,i,r)}return n}function R(e,t,i,o,r,n,l){if(!e)return;const a=e.symbolLayers;if(!a)return;const f=e.effects;let m;const u=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getSize */ .B$.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(m=_enums_js__WEBPACK_IMPORTED_MODULE_6__/* .Alignment.MAP */ .v2.MAP);let y=a.length;for(;y--;){const s=a[y];if(!s||!1===s.enable)continue;let p;f&&f.length&&(p=[...f]);const h=s.effects;h&&h.length&&(f?p.push(...h):p=[...h]);const g=[];let d;_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .OverrideHelper.findEffectOverrides */ .E0.findEffectOverrides(p,t,g),d=g.length>0?ee(p,g,i,o):p;const S=[];switch(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .OverrideHelper.findApplicableOverrides */ .E0.findApplicableOverrides(s,t,S),s.type){case"CIMSolidFill":Y(s,d,i,S,o,r);break;case"CIMPictureFill":A(s,d,i,S,o,n,r);break;case"CIMHatchFill":E(s,d,i,S,o,r);break;case"CIMGradientFill":$(s,d,i,S,o,r);break;case"CIMSolidStroke":j(s,d,i,S,o,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMPictureStroke":F(s,d,i,S,o,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMGradientStroke":T(s,d,i,S,o,r,"CIMPolygonSymbol"===e.type,u);break;case"CIMCharacterMarker":if(W(s,d,i,S,o,r))break;break;case"CIMPictureMarker":if(W(s,d,i,S,o,r))break;"CIMLineSymbol"===e.type&&(m=J(s)),D(s,d,i,S,o,n,r,m,u);break;case"CIMVectorMarker":if(W(s,d,i,S,o,r))break;"CIMLineSymbol"===e.type&&(m=J(s)),U(s,d,i,S,o,r,n,m,u,l);break;default:P.error("Cannot analyze CIM layer",s.type)}}}function Y(e,t,i,o,r,l){const a=e.primitiveName,s=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(e.color),[c,f]=re(o,a,t,null),m=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(e)+f).toString();l.push({type:"fill",templateHash:m,materialHash:c?()=>m:m,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:Z(a,i,"Color",r,s,_),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t})}function A(e,t,i,r,l,a,s){const c=e.primitiveName,f=e.tintColor?(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(e.tintColor):{r:255,g:255,b:255,a:1},[m,p]=re(r,c,t,null),u=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(e)+p).toString(),y=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();let d=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.scaleX);if("width"in e){const t=e.width;let i=1;const r=a.getResource(e.url);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(r)&&(i=r.width/r.height),d/=i*(e.height/t)}s.push({type:"fill",templateHash:u,materialHash:m?()=>y:y,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:Z(c,i,"TintColor",l,f,_),height:Z(c,i,"Height",l,e.height),scaleX:Z(c,i,"ScaleX",l,d),angle:Z(c,i,"Rotation",l,(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.rotation)),offsetX:Z(c,i,"OffsetX",l,(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetX)),offsetY:Z(c,i,"OffsetY",l,(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetY)),url:e.url})}function E(e,t,i,o,r,l){const a=["Rotation","OffsetX","OffsetY"],s=o.filter((t=>t.primitiveName!==e.primitiveName&&-1===a.indexOf(t.propertyName))),c=e.primitiveName,[f,m]=re(o,c,t,null),p=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(e)+m).toString(),u=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();l.push({type:"fill",templateHash:p,materialHash:f?ie(u,i,s,r):u,cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:Z(c,i,"Separation",r,e.separation),scaleX:1,angle:Z(c,i,"Rotation",r,(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.rotation)),offsetX:Z(c,i,"OffsetX",r,(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetX)),offsetY:Z(c,i,"OffsetY",r,(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetY))})}function $(e,t,i,o,r,l){const a=e.primitiveName,[s,c]=re(o,a,t,null),f=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(e)+c).toString();l.push({type:"fill",templateHash:f,materialHash:s?ie(f,i,o,r):f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function j(e,t,i,o,r,l,a,s){const c=e.primitiveName,f=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(e.color),m=void 0!==e.width?e.width:4,p=M(e.capStyle),u=L(e.joinStyle),y=e.miterLimit,[g,d]=re(o,c,t,null),S=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(e)+d).toString();let v,N;if(t&&t instanceof Array&&t.length>0){const e=t[t.length-1];if("CIMGeometricEffectDashes"===e.type&&"NoConstraint"===e.lineDashEnding&&null===e.offsetAlongLine){const e=(t=[...t]).pop();v=e.dashTemplate,N=e.scaleDash}}l.push({type:"line",templateHash:S,materialHash:g?()=>S:S,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:Z(c,i,"Color",r,f,_),width:Z(c,i,"Width",r,m),cap:Z(c,i,"CapStyle",r,p),join:Z(c,i,"JoinStyle",r,u),miterLimit:Z(c,i,"MiterLimit",r,y),referenceWidth:s,zOrder:Q(e.name),dashTemplate:v,scaleDash:N})}function F(e,t,i,o,r,l,a,s){const c=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,m=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(e.tintColor),p=void 0!==e.width?e.width:4,u=M(e.capStyle),y=L(e.joinStyle),g=e.miterLimit,[d,S]=re(o,f,t,null),v=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(e)+S).toString();l.push({type:"line",templateHash:v,materialHash:d?()=>c:c,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:Z(f,i,"TintColor",r,m,_),width:Z(f,i,"Width",r,p),cap:Z(f,i,"CapStyle",r,u),join:Z(f,i,"JoinStyle",r,y),miterLimit:Z(f,i,"MiterLimit",r,g),referenceWidth:s,zOrder:Q(e.name),dashTemplate:null,scaleDash:!1,url:e.url})}function T(e,t,i,o,r,l,a,s){const c=e.primitiveName,f=void 0!==e.width?e.width:4,m=M(e.capStyle),p=L(e.joinStyle),u=e.miterLimit,[y,h]=re(o,c,t,null),g=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(e)+h).toString();l.push({type:"line",templateHash:g,materialHash:y?ie(g,i,o,r):g,cim:e,materialOverrides:null,isOutline:a,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:Z(c,i,"Width",r,f),cap:Z(c,i,"CapStyle",r,m),join:Z(c,i,"JoinStyle",r,p),miterLimit:Z(c,i,"MiterLimit",r,u),referenceWidth:s,zOrder:Q(e.name),dashTemplate:null,scaleDash:!1})}function W(e,t,i,o,r,l){const a=e.markerPlacement;if(!a||"CIMMarkerPlacementInsidePolygon"!==a.type)return!1;const s=a,c=["Rotation","OffsetX","OffsetY"],f=o.filter((t=>t.primitiveName!==e.primitiveName&&-1===c.indexOf(t.propertyName))),m="url"in e?e.url:null,[p,u]=re(o,s.primitiveName,t,null),y=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(e)+u).toString();let h=s.stepY,d=null,S=1;return a.shiftOddRows&&(h*=2,d=function(e){return e?2*e:0},S=.5),l.push({type:"fill",templateHash:y,materialHash:p?ie(y,i,f,r):y,cim:e,materialOverrides:f,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:Z(s.primitiveName,i,"StepY",r,h,d),scaleX:S,angle:Z(s.primitiveName,i,"GridAngle",r,s.gridAngle),offsetX:Z(s.primitiveName,i,"OffsetX",r,(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(s.offsetX)),offsetY:Z(s.primitiveName,i,"OffsetY",r,(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(s.offsetY)),url:m}),!0}function D(e,t,i,r,l,a,s,c,f){var m;const p=e.primitiveName,u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.size);let y=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.scaleX);const d=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.rotation),S=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetX),v=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetY),N=e.tintColor?(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(e.tintColor):{r:255,g:255,b:255,a:1},b=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),C=te(e.markerPlacement,r,i,l),[k,O]=re(r,p,t,C),P=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(e)+O).toString(),M=null!=(m=e.anchorPoint)?m:{x:0,y:0};if("width"in e){const t=e.width;let i=1;const r=a.getResource(e.url);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(r)&&(i=r.width/r.height),y/=i*(u/t)}s.push({type:"marker",templateHash:P,materialHash:k?()=>b:b,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:c,size:Z(p,i,"Size",l,u),scaleX:Z(p,i,"ScaleX",l,y),rotation:Z(p,i,"Rotation",l,d),offsetX:Z(p,i,"OffsetX",l,S),offsetY:Z(p,i,"OffsetY",l,v),color:Z(p,i,"TintColor",l,N,_),anchorPoint:{x:M.x,y:-M.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:f,sizeRatio:1,markerPlacement:e.markerPlacement,url:e.url})}function U(e,t,i,o,r,n,l,a,s,c){const f=e.markerGraphics;if(!f)return;let m=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(m=t.ymax-t.ymin)}const p=te(e.markerPlacement,o,i,r);for(const u of f)if(u){const f=u.symbol;if(!f)continue;switch(f.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":B(e,t,p,u,o,i,r,n,l,a,s,m,c);break;case"CIMTextSymbol":G(e,t,p,u,i,o,r,n,a,s,m)}}}function G(e,t,i,o,r,l,a,f,m,p,u){const y=[];_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .OverrideHelper.findApplicableOverrides */ .E0.findApplicableOverrides(o,l,y);const N=o.geometry;if(!("x"in N)||!("y"in N))return;const b=o.symbol,C=x(b),k=X(b.fontStyleName),P=(0,_views_2d_engine_webgl_fontUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .getFontFamily */ .BN)(b.fontFamilyName);b.font={family:P,decoration:C,...k};const M=e.frame,L=N.x-.5*(M.xmin+M.xmax),z=N.y-.5*(M.ymin+M.ymax),J=e.size/u,H=e.primitiveName,R=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(b.height)*J,Y=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(b.angle),A=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetX)+((0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(b.offsetX)+L)*J,E=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetY)+((0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(b.offsetY)+z)*J,$=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getFillColor */ .B$.getFillColor(b));let j=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getStrokeColor */ .B$.getStrokeColor(b)),F=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getStrokeWidth */ .B$.getStrokeWidth(b);F||(j=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getFillColor */ .B$.getFillColor(b.haloSymbol)),F=b.haloSize*J);const[T,W]=re(l,H,t,i),D=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),U=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(o)+D+W).toString();let G=Z(o.primitiveName,r,"TextString",a,o.textString,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* ._adjustTextCase */ .X3,b.textCase);if(null==G)return;const{fontStyleName:B}=b,q=P+(B?"-"+B.toLowerCase():"-regular"),V=q;"string"==typeof G&&G.indexOf("[")>-1&&b.fieldMap&&(G=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .createLabelOverrideFunction */ .Qs)(b.fieldMap,G,b.textCase)),f.push({type:"text",templateHash:U,materialHash:T||"function"==typeof G||G.match(/\\[(.*?)\\]/)?(e,t,i)=>V+"-"+(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .evaluateValueOrFunction */ .hf)(G,e,t,i):V+"-"+(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(G),cim:b,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:m,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:q,decoration:C,weight:Z(H,r,"Weight",a,k.weight),style:Z(H,r,"Size",a,k.style),size:Z(H,r,"Size",a,R),angle:Z(H,r,"Rotation",a,Y),offsetX:Z(H,r,"OffsetX",a,A),offsetY:Z(H,r,"OffsetY",a,E),horizontalAlignment:I(b.horizontalAlignment),verticalAlignment:w(b.verticalAlignment),text:G,color:$,outlineColor:j,outlineSize:F,referenceSize:p,sizeRatio:1,markerPlacement:i})}function B(e,t,i,r,l,a,c,f,m,p,d,S,v){const N=r.symbol,b=N.symbolLayers;if(!b)return;if(v)return void V(e,t,i,r,a,l,c,f,m,p,d,S);let k=b.length;if(le(b))return void q(e,t,i,r,b,l,a,c,f,p,d,S);const O=_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_8__/* .CIMEffectHelper.applyEffects */ .j.applyEffects(N.effects,r.geometry,m.geometryEngine);if(O)for(;k--;){const v=b[k];if(v&&!1!==v.enable)switch(v.type){case"CIMSolidFill":case"CIMSolidStroke":{var P;const N=_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_8__/* .CIMEffectHelper.applyEffects */ .j.applyEffects(v.effects,O,m.geometryEngine),b=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_7__/* .getExtent */ .bk)(N);if(!b)continue;const[k,M,L]=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_7__/* .getSDFMetrics */ .UV)(b,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),I="CIMSolidFill"===v.type,w={type:"sdf",geom:N,asFill:I},X=e.primitiveName,x=null!=(P=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.size))?P:10,z=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.rotation),J=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetX),H=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetY),R=v.path,Y=v.primitiveName,A=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(I?_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getFillColor */ .B$.getFillColor(v):_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getStrokeColor */ .B$.getStrokeColor(v)),E=I?{r:0,g:0,b:0,a:0}:(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getStrokeColor */ .B$.getStrokeColor(v)),$=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getStrokeWidth */ .B$.getStrokeWidth(v);if(!I&&!$)break;let j=!1,F="";for(const e of l)e.primitiveName!==Y&&e.primitiveName!==X||(void 0!==e.value?F+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(j=!0));(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(t)&&"function"==typeof t&&(j=!0);const T=JSON.stringify({...e,markerGraphics:null}),W=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(w)+R).toString(),D={type:"marker",templateHash:(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(r)+JSON.stringify(v)+T+F).toString(),materialHash:j?()=>W:W,cim:w,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:p,anchorPoint:{x:M,y:L},isAbsoluteAnchorPoint:!1,size:Z(e.primitiveName,a,"Size",c,x),rotation:Z(e.primitiveName,a,"Rotation",c,z),offsetX:Z(e.primitiveName,a,"OffsetX",c,J),offsetY:Z(e.primitiveName,a,"OffsetY",c,H),scaleX:1,frameHeight:S,rotateClockwise:e.rotateClockwise,referenceSize:d,sizeRatio:k,color:Z(Y,a,"Color",c,A,_),outlineColor:Z(Y,a,"Color",c,E,_),outlineWidth:Z(Y,a,"Width",c,$),markerPlacement:i,path:R};f.push(D);break}default:V(e,t,i,r,a,l,c,f,m,p,d,S)}}}function q(e,t,i,o,r,l,a,c,f,m,p,d){const S=o.geometry,v=r[0],N=r[1],b=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_7__/* .getExtent */ .bk)(S);if(!b)return;const[C,k,O]=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_7__/* .getSDFMetrics */ .UV)(b,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),P={type:"sdf",geom:S,asFill:!0},M=e.primitiveName,L=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.size),I=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.rotation),w=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetX),X=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetY),x=N.path,z=N.primitiveName,J=v.primitiveName,H=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getFillColor */ .B$.getFillColor(N)),R=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getStrokeColor */ .B$.getStrokeColor(v)),Y=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getStrokeWidth */ .B$.getStrokeWidth(v);let A=!1,E="";for(const n of l)n.primitiveName!==z&&n.primitiveName!==J&&n.primitiveName!==M||(void 0!==n.value?E+=`-${n.primitiveName}-${n.propertyName}-${JSON.stringify(n.value)}`:n.valueExpressionInfo&&(A=!0));const $=JSON.stringify({...e,markerGraphics:null}),j=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(P)+x).toString(),F={type:"marker",templateHash:(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(o)+JSON.stringify(N)+JSON.stringify(v)+$+E).toString(),materialHash:A?()=>j:j,cim:P,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:m,anchorPoint:{x:k,y:O},isAbsoluteAnchorPoint:!1,size:Z(e.primitiveName,a,"Size",c,L),rotation:Z(e.primitiveName,a,"Rotation",c,I),offsetX:Z(e.primitiveName,a,"OffsetX",c,w),offsetY:Z(e.primitiveName,a,"OffsetY",c,X),scaleX:1,frameHeight:d,rotateClockwise:e.rotateClockwise,referenceSize:p,sizeRatio:C,color:Z(z,a,"Color",c,H,_),outlineColor:Z(J,a,"Color",c,R,_),outlineWidth:Z(J,a,"Width",c,Y),markerPlacement:i,path:x};f.push(F)}function V(e,t,i,l,a,c,f,m,p,u,y,h){const d=K(e,l);let S=[];const v=["Rotation","OffsetX","OffsetY"];S=c.filter((t=>t.primitiveName!==e.primitiveName||-1===v.indexOf(t.propertyName)));let N="";for(const o of c)void 0!==o.value&&(N+=`-${o.primitiveName}-${o.propertyName}-${JSON.stringify(o.value)}`);const[b,C,k]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .CIMSymbolHelper.getTextureAnchor */ .B$.getTextureAnchor(d,p),O=e.primitiveName,P=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.rotation),M=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetX),L=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .getValue */ .NA)(e.offsetY),I=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(JSON.stringify(d)+N).toString(),w={type:"marker",templateHash:I,materialHash:S.length>0||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(t)&&"function"==typeof t?ie(I,a,S,f):I,cim:d,materialOverrides:S,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:b,y:C},isAbsoluteAnchorPoint:!1,size:e.size,rotation:Z(O,a,"Rotation",f,P),offsetX:Z(O,a,"OffsetX",f,M),offsetY:Z(O,a,"OffsetY",f,L),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:h,rotateClockwise:e.rotateClockwise,referenceSize:y,sizeRatio:k/(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .pt2px */ .F2)(e.size),markerPlacement:i};m.push(w)}function K(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}function Q(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(!isNaN(t))return t}return 0}function _(t){if(!t||0===t.length)return null;const i=new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(t).toRgba();return{r:i[0],g:i[1],b:i[2],a:i[3]}}function Z(e,t,i,o,r,n,l){const s=t[e];if(s){const e=s[i];if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,l):e;if(null!=e&&e instanceof _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_4__/* .ArcadeExpression */ .mz)return(t,i,a)=>{let s=(0,_views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(e,t,{$view:a},o.geometryType,i);return null!==s&&n&&(s=n.call(null,s,l)),null!==s?s:r}}return r}function ee(e,i,o,r){for(const t of i){if(t.valueExpressionInfo){const e=o[t.primitiveName]&&o[t.primitiveName][t.propertyName];e instanceof _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_4__/* .ArcadeExpression */ .mz&&(t.fn=(t,i,o)=>(0,_views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(e,t,{$view:o},r.geometryType,i))}}const n=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e;return(o,r,l)=>{for(const e of i)e.fn&&(e.value=e.fn(o,r,l));const a=[];for(let c of e){var s;const e=null==(s=c)?void 0:s.primitiveName;if(e){let o=!1;for(const r of i)if(r.primitiveName===e){const e=n(r.propertyName);null!=r.value&&r.value!==c[e]&&(o||(c=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .d9)(c),o=!0),c[e]=r.value)}}a.push(c)}return a}}function te(e,i,o,r){const n=[];if(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .OverrideHelper.findApplicableOverrides */ .E0.findApplicableOverrides(e,i,n),0===n.length)return e;for(const t of n){if(t.valueExpressionInfo){const e=o[t.primitiveName]&&o[t.primitiveName][t.propertyName];e instanceof _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_4__/* .ArcadeExpression */ .mz&&(t.fn=(t,i,o)=>(0,_views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(e,t,{$view:o},r.geometryType,i))}}const l=e=>e?e.charAt(0).toLowerCase()+e.substr(1):e;return(i,o,r)=>{for(const e of n)e.fn&&(e.value=e.fn(i,o,r));const a=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .d9)(e),s=e.primitiveName;for(const e of n)if(e.primitiveName===s){const t=l(e.propertyName);null!=e.value&&e.value!==a[t]&&(a[t]=e.value)}return a}}function ie(e,t,i,o){for(const r of i){if(r.valueExpressionInfo){const e=t[r.primitiveName]&&t[r.primitiveName][r.propertyName];e instanceof _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_4__/* .ArcadeExpression */ .mz&&(r.fn=(t,i,r)=>(0,_views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(e,t,{$view:r},o.geometryType,i))}}return(t,o,r)=>{for(const e of i)e.fn&&(e.value=e.fn(t,o,r));return (0,_core_string_js__WEBPACK_IMPORTED_MODULE_3__/* .numericHash */ .hP)(e+_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .OverrideHelper.buildOverrideKey */ .E0.buildOverrideKey(i)).toString()}}function oe(e,t){if(!t||0===t.length)return e;const i=JSON.parse(JSON.stringify(e));return _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .OverrideHelper.applyOverrides */ .E0.applyOverrides(i,t),i}function re(e,t,i,r){let n=!1,l="";for(const o of e)o.primitiveName===t&&(void 0!==o.value?l+=`-${o.primitiveName}-${o.propertyName}-${JSON.stringify(o.value)}`:o.valueExpressionInfo&&(n=!0));return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(i)&&"function"==typeof i&&(n=!0),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(r)&&"function"==typeof r&&(n=!0),[n,l]}function ne(e,t,i){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const o=e.symbolLayers;if(!o)return;for(const e of o)switch(se(e,t,i),e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&i.push(t.fetchResource(e.url,null));break;case"CIMVectorMarker":{const o=e.markerGraphics;if(!o)continue;for(const e of o)if(e){const o=e.symbol;o&&ne(o,t,i)}}}}}}const le=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects;let ae;function se(e,t,i){if(!e.effects||(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_11__/* .isSome */ .pC)(t.geometryEngine))return;if(ae)return void i.push(ae);(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .isGeometryEngineRequired */ .Cc)(e.effects)&&(ae=(0,_utils_js__WEBPACK_IMPORTED_MODULE_10__/* .importGeometryEngine */ .RI)(),i.push(ae),ae.then((e=>t.geometryEngine=e)))}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/symbols/cim/cimAnalyzer.js?')},29882:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "j": () => (/* binding */ f)\n/* harmony export */ });\n/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53736);\n/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94843);\n/* harmony import */ var _CIMEffects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24262);\n/* harmony import */ var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56038);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst c=96/72;class f{static executeEffects(t,s,r){const f=(0,_CIMCursor_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneAndDecodeGeometry */ .GP)(s),p=c;let u=new _CIMEffects_js__WEBPACK_IMPORTED_MODULE_2__/* .SimpleGeometryCursor */ .M(f);for(const e of t){const t=(0,_CIMOperators_js__WEBPACK_IMPORTED_MODULE_3__/* .getEffectOperator */ .h)(e);t&&(u=t.execute(u,e,p,r))}return u}static next(t){const s=t.next();return (0,_CIMCursor_js__WEBPACK_IMPORTED_MODULE_1__/* .deltaEncodeGeometry */ .wp)(s),s}static applyEffects(e,r,c){if(!e)return r;let f=new _CIMEffects_js__WEBPACK_IMPORTED_MODULE_2__/* .SimpleGeometryCursor */ .M(r);for(const t of e){const s=(0,_CIMOperators_js__WEBPACK_IMPORTED_MODULE_3__/* .getEffectOperator */ .h)(t);s&&(f=s.execute(f,t,1,c))}let p,u=null;for(;p=f.next();)u?(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolyline */ .l9)(u)?(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolyline */ .l9)(p)&&u.paths.push(...p.paths):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolygon */ .oU)(u)&&(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolygon */ .oU)(p)&&u.rings.push(...p.rings):u=p;return u}}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/symbols/cim/effects/CIMEffectHelper.js?')},70734:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "BN": () => (/* binding */ t),\n/* harmony export */   "Yc": () => (/* binding */ n)\n/* harmony export */ });\n/* unused harmony export getFontDecorationTop */\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst e=(/* unused pure expression or super */ null && (-26)),r=(/* unused pure expression or super */ null && (-18));function t(e){const r=e.toLowerCase().split(" ").join("-");switch(r){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return r}}function n(e){const r=u(e)+c(e);return t(e.family)+(r.length>0?r:"-regular")}function s(t){switch(t){case"underline":return e;case"line-through":return r}return NaN}function u(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function c(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/engine/webgl/fontUtils.js?')}}]);