"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[5784],{25609:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "$y": () => (/* binding */ R),\n/* harmony export */   "AH": () => (/* binding */ n),\n/* harmony export */   "CS": () => (/* binding */ Y),\n/* harmony export */   "DD": () => (/* binding */ a),\n/* harmony export */   "Dd": () => (/* binding */ A),\n/* harmony export */   "Em": () => (/* binding */ P),\n/* harmony export */   "JS": () => (/* binding */ J),\n/* harmony export */   "Ky": () => (/* binding */ u),\n/* harmony export */   "Lh": () => (/* binding */ Z),\n/* harmony export */   "Qb": () => (/* binding */ ne),\n/* harmony export */   "RL": () => (/* binding */ e),\n/* harmony export */   "RS": () => (/* binding */ te),\n/* harmony export */   "TF": () => (/* binding */ S),\n/* harmony export */   "Tx": () => (/* binding */ r),\n/* harmony export */   "UR": () => (/* binding */ C),\n/* harmony export */   "UX": () => (/* binding */ ee),\n/* harmony export */   "bj": () => (/* binding */ X),\n/* harmony export */   "eZ": () => (/* binding */ l),\n/* harmony export */   "id": () => (/* binding */ N),\n/* harmony export */   "kP": () => (/* binding */ W),\n/* harmony export */   "r4": () => (/* binding */ b),\n/* harmony export */   "sj": () => (/* binding */ U),\n/* harmony export */   "v2": () => (/* binding */ i),\n/* harmony export */   "zQ": () => (/* binding */ L),\n/* harmony export */   "zV": () => (/* binding */ g)\n/* harmony export */ });\n/* unused harmony exports AngleAlignment, BalloonCalloutStyle, BlendingMode, CGAAttributeType, ClippingType, DominantSizeAxis, ExpressionReturnType, ExternalColorMixMode, FillMode, GeometricEffectEnclosingPolygonMethod, GeometricEffectExtensionOrigin, GeometricEffectOffsetOption, GeometricEffectOffsetTangentMethod, GradientAlignment, GradientFillMethod, GradientStrokeMethod, GradientStrokeType, HorizontalAlignment, LeaderLineStyle, LineDecorationStyle, LineGapType, MarkerPlacementType, MaterialMode, PlacementClip, PlacementRandomlyAlongLineRandomization, PlacementStepPosition, PointSymbolCalloutScale, RotationOrder, Simple3DLineStyle, SizeVariationMethod, SymbolUnits, TextCase, VerticalAlignment, WaterbodySize, WaveStrength */\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nvar e,n,i,t,r,o,l,a,u,c,d,f,s,p,g,C,m,T,S,P,R,B,h,N,M,O,L,A,y,E,D,F,v,x,W,U,k,H,b,w,I,G,q,J,X,Y,Z,K,Q,V,j,z,$,_,ee,ne,ie,te,re,oe;!function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(e||(e={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(n||(n={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(i||(i={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(t||(t={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(r||(r={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(o||(o={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(l||(l={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(a||(a={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(u||(u={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(c||(c={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(d||(d={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(f||(f={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(s||(s={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(p||(p={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(g||(g={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(C||(C={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(m||(m={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(T||(T={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(S||(S={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(P||(P={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(R||(R={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(B||(B={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(h||(h={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(N||(N={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(M||(M={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(O||(O={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(L||(L={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(A||(A={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(y||(y={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(E||(E={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(D||(D={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(F||(F={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(v||(v={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(x||(x={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(W||(W={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(U||(U={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(k||(k={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(H||(H={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(b||(b={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(w||(w={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(I||(I={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(G||(G={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(q||(q={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(J||(J={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(X||(X={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(Y||(Y={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(Z||(Z={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(K||(K={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(Q||(Q={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(V||(V={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(j||(j={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(z||(z={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}($||($={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(_||(_={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(ee||(ee={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ne||(ne={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(ie||(ie={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(te||(te={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(re||(re={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(oe||(oe={}));\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/symbols/cim/enums.js?')},15875:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "mR": () => (/* binding */ re),\n  "C$": () => (/* binding */ q),\n  "e2": () => (/* binding */ H),\n  "Jq": () => (/* binding */ Ne),\n  "wO": () => (/* binding */ te),\n  "Mk": () => (/* binding */ ne),\n  "cM": () => (/* binding */ de),\n  "Z_": () => (/* binding */ pe),\n  "ws": () => (/* binding */ J),\n  "xV": () => (/* binding */ Q),\n  "Ub": () => (/* binding */ Le),\n  "UK": () => (/* binding */ ce),\n  "Yw": () => (/* binding */ ae),\n  "$_": () => (/* binding */ z),\n  "Gr": () => (/* binding */ he),\n  "nU": () => (/* binding */ W),\n  "Ll": () => (/* binding */ Ee),\n  "$K": () => (/* binding */ K),\n  "DQ": () => (/* binding */ Te),\n  "HX": () => (/* binding */ ge),\n  "hj": () => (/* binding */ Z),\n  "iw": () => (/* binding */ we),\n  "TB": () => (/* binding */ Se),\n  "sG": () => (/* binding */ ye),\n  "Gg": () => (/* binding */ Ie),\n  "js": () => (/* binding */ Ae),\n  "Y8": () => (/* binding */ k)\n});\n\n// UNUSED EXPORTS: C_FILL_STRIDE_SPEC, C_FILL_STRIDE_SPEC_DD, C_FILL_STRIDE_SPEC_SIMPLE, C_FILL_VERTEX_DEF, C_FILL_VERTEX_DEF_DD, C_FILL_VERTEX_DEF_SIMPLE, C_ICON_STRIDE_SPEC, C_ICON_VERTEX_DEF, C_LABEL_STRIDE_SPEC, C_LABEL_VERTEX_DEF, C_LINE_STRIDE_SPEC, C_LINE_VERTEX_DEF, C_TEXT_STRIDE_SPEC, C_TEXT_VERTEX_DEF, C_VBO_GEOMETRY, C_VBO_PERINSTANCE, C_VBO_PERINSTANCE_VV, createTextureFromTexelData, geometryToMappedGeometry, getBytes, getNamedBuffers, getTextProperties, getTransformParams, isValidSVG\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js\nvar Error = __webpack_require__(70375);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js\nvar Logger = __webpack_require__(13802);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js\nvar mathUtils = __webpack_require__(19431);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/cim/enums.js\nvar enums = __webpack_require__(25609);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/color.js\nvar color = __webpack_require__(62173);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js\nvar webgl_enums = __webpack_require__(38716);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/ObjectPool.js\nvar ObjectPool = __webpack_require__(34596);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/SymbolProperties.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nclass SymbolProperties_h{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(o,h,s,t,i,l,r,e,c){this.color=o,this.haloColor=h,this.haloSize=s,this.size=t,this.angle=i,this.offsetX=l,this.offsetY=r,this.hAnchor=e,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}SymbolProperties_h.pool=new ObjectPool/* default */.Z(SymbolProperties_h);\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/enums.js\nvar views_webgl_enums = __webpack_require__(91907);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/Texture.js\nvar Texture = __webpack_require__(43487);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/VertexElementDescriptor.js\nvar VertexElementDescriptor = __webpack_require__(41163);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst w=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.engine.webgl.Utils"),E="geometry",I="per_instance",S="per_instance_vv",A=[{name:E,strideInBytes:36}],L=[{name:E,strideInBytes:32}],N=[{name:E,strideInBytes:20}],D=[{name:E,strideInBytes:12}],M=[{name:E,strideInBytes:40}],v=[{name:E,strideInBytes:36}],U=[{name:E,strideInBytes:36}];function R(e){const t={};for(const r of e)t[r.name]=r.strideInBytes;return t}const _=R(A),B=R(L),b=R(N),C=R(D),O=R(M),F=R(v),x=R(U);function z(e,{fill:t}){switch(e){case webgl_enums/* WGLGeometryType.MARKER */.LW.MARKER:return _;case webgl_enums/* WGLGeometryType.FILL */.LW.FILL:return"dot-density"===t?C:"simple"===t?b:B;case webgl_enums/* WGLGeometryType.LINE */.LW.LINE:return O;case webgl_enums/* WGLGeometryType.TEXT */.LW.TEXT:return F;case webgl_enums/* WGLGeometryType.LABEL */.LW.LABEL:return x}}const j=[E],G=[E],P=[E],$=[E],V=[E];function Y(e){switch(e){case webgl_enums/* WGLGeometryType.MARKER */.LW.MARKER:return j;case webgl_enums/* WGLGeometryType.FILL */.LW.FILL:return G;case webgl_enums/* WGLGeometryType.LINE */.LW.LINE:return P;case webgl_enums/* WGLGeometryType.TEXT */.LW.TEXT:return $;case webgl_enums/* WGLGeometryType.LABEL */.LW.LABEL:return V}}function k(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function q(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}}function H(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function X(e){return u.pool.acquire(e.color?s(e.color):[255,255,255,255],e.haloColor?s(e.haloColor):[255,255,255,255],n(e.haloSize),n(e.font.size),e.angle*Math.PI/180,e.xoffset/e.font.size,e.yoffset/e.font.size,"left"===e.horizontalAlignment?0:"right"===e.horizontalAlignment?1:.5,"top"===e.verticalAlignment?0:"bottom"===e.verticalAlignment?1:.5)}function K(e){return null!=e}function Z(e){return"number"==typeof e}function J(t){switch(t){case"butt":return enums/* CapType.BUTT */.RL.BUTT;case"round":return enums/* CapType.ROUND */.RL.ROUND;case"square":return enums/* CapType.SQUARE */.RL.SQUARE;default:return w.error(new Error/* default */.Z("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),enums/* CapType.ROUND */.RL.ROUND}}function Q(t){switch(t){case"miter":return enums/* JoinType.MITER */.AH.MITER;case"bevel":return enums/* JoinType.BEVEL */.AH.BEVEL;case"round":return enums/* JoinType.ROUND */.AH.ROUND;default:return w.error(new Error/* default */.Z("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),enums/* JoinType.ROUND */.AH.ROUND}}function W(e){switch(e){case"opacity":return webgl_enums/* VVType.OPACITY */.pc.OPACITY;case"color":return webgl_enums/* VVType.COLOR */.pc.COLOR;case"rotation":return webgl_enums/* VVType.ROTATION */.pc.ROTATION;case"size":return webgl_enums/* VVType.SIZE */.pc.SIZE;default:return w.error(`Cannot interpret unknown vv: ${e}`),null}}function ee(e){const{transform:t,hasZ:r,hasM:n}=e;return{transform:t,hasZ:r,hasM:n}}function te(e,t,r,n,i,o,s){for(const c in o){const t=o[c].stride,n=k(t),s=o[c].data,a=r[c].data,u=t*i.vertexCount/n,l=t*e/n,m=t*i.vertexFrom/n;for(let e=0;e<u;++e)a[e+l]=s[e+m]}const a=i.indexCount;for(let c=0;c<a;++c)n[c+t]=s[c+i.indexFrom]-i.vertexFrom+e}const re={[E]:views_webgl_enums/* Usage.STATIC_DRAW */.l1.STATIC_DRAW};function ne(e,t){const r=[];for(let n=0;n<5;++n){const i=Y(n),o={};for(const e of i)o[e]={data:t(n,e)};r.push({data:e(n),buffers:o})}return r}function ie(e,t){let n,i;return r(t.width)&&r(t.height)?(n=!0,i=g.LINEAR_MIPMAP_LINEAR):(n=!1,i=g.LINEAR),new h(e,{target:m.TEXTURE_2D,pixelFormat:f.RGBA,internalFormat:f.RGBA,dataType:d.UNSIGNED_BYTE,hasMipmap:n,samplingMode:i,wrapMode:p.CLAMP_TO_EDGE,flipped:!0},t)}function oe(e){return{vertexFrom:void 0,vertexTo:void 0,geometry:e}}function se(e){switch(e){case views_webgl_enums/* DataType.BYTE */.g.BYTE:case views_webgl_enums/* DataType.UNSIGNED_BYTE */.g.UNSIGNED_BYTE:return 1;case views_webgl_enums/* DataType.SHORT */.g.SHORT:case views_webgl_enums/* DataType.UNSIGNED_SHORT */.g.UNSIGNED_SHORT:return 2;case views_webgl_enums/* DataType.FLOAT */.g.FLOAT:case views_webgl_enums/* DataType.INT */.g.INT:case views_webgl_enums/* DataType.UNSIGNED_INT */.g.UNSIGNED_INT:return 4}}function ae(t){switch(t){case views_webgl_enums/* PixelType.UNSIGNED_BYTE */.Br.UNSIGNED_BYTE:return 1;case views_webgl_enums/* PixelType.UNSIGNED_SHORT_4_4_4_4 */.Br.UNSIGNED_SHORT_4_4_4_4:return 2;case views_webgl_enums/* PixelType.FLOAT */.Br.FLOAT:return 4;default:return void w.error(new Error/* default */.Z("webgl-utils",`Unable to handle type ${t}`))}}function ce(t){switch(t){case views_webgl_enums/* PixelType.UNSIGNED_BYTE */.Br.UNSIGNED_BYTE:return Uint8Array;case views_webgl_enums/* PixelType.UNSIGNED_SHORT_4_4_4_4 */.Br.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case views_webgl_enums/* PixelType.FLOAT */.Br.FLOAT:return Float32Array;default:return void w.error(new Error/* default */.Z("webgl-utils",`Unable to handle type ${t}`))}}function ue(e){const t={};for(const r in e){const n=e[r];let i=0;t[r]=n.map((e=>{const t=new VertexElementDescriptor/* VertexElementDescriptor */.G(e.name,e.count,e.type,i,0,e.normalized||!1);return i+=e.count*se(e.type),t})),t[r].forEach((e=>e.stride=i))}return t}const le=e=>{const t=new Map;for(const r in e)for(const n of e[r])t.set(n.name,n.location);return t},me=e=>{const t={};for(const r in e){const n=e[r];t[r]=n.length?n[0].stride:0}return t},fe=new Map,de=(e,t)=>{if(!fe.has(e)){const r=ue(t),n={strides:me(r),bufferLayouts:r,attributes:le(t)};fe.set(e,n)}return fe.get(e)};function pe(e){e(webgl_enums/* WGLGeometryType.FILL */.LW.FILL),e(webgl_enums/* WGLGeometryType.LINE */.LW.LINE),e(webgl_enums/* WGLGeometryType.MARKER */.LW.MARKER),e(webgl_enums/* WGLGeometryType.TEXT */.LW.TEXT),e(webgl_enums/* WGLGeometryType.LABEL */.LW.LABEL)}const ye=e=>"path"in e&&De(e.path),ge=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,he=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,Te=e=>"url"in e&&e.url&&e.url.includes(".gif")||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/gif"),we=e=>"url"in e&&e.url&&e.url.includes(".png")||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/png"),Ee=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function Ie(e){switch(e.type){case"line":{const t=e;return"CIMSolidStroke"===t.cim.type&&!t.dashTemplate}case"fill":return"CIMSolidFill"===e.cim.type;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}const Se=e=>e.includes("data:image/svg+xml");function Ae(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function Le(e){const t="maxVVSize"in e&&e.maxVVSize,r="width"in e&&e.width||"size"in e&&e.size||0;return t||r}function Ne(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}const De=e=>!!e&&(e=e.trim(),!!(/^[mzlhvcsqta]\\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\\dz]$/i.test(e)&&e.length>4));\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js_+_1_modules?')},62173:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "aH": () => (/* binding */ f),\n/* harmony export */   "pr": () => (/* binding */ o),\n/* harmony export */   "t2": () => (/* binding */ i)\n/* harmony export */ });\n/* unused harmony exports copyAndPremultiply, premultiplyAlphaUint32, white */\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8530);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst n=(/* unused pure expression or super */ null && ([255,255,255,1])),t=(/* unused pure expression or super */ null && ([0,0,0,0]));function u(r,n){return Array.isArray(n)?(r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3]):(r[0]=n.r,r[1]=n.g,r[2]=n.b,r[3]=n.a),r}function o(r,n=0,t=!1){const u=r[n+3];return r[n+0]*=u,r[n+1]*=u,r[n+2]*=u,t||(r[n+3]*=255),r}function c(r){return o(u([],r))}function e(n){return o(u(t,n)),r(t[0],t[1],t[2],t[3])}function i(n){if(!n)return 0;const{r:t,g:u,b:o,a:c}=n;return (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* .i8888to32 */ .Jz)(t*c,u*c,o*c,255*c)}function f(n){if(!n)return 0;const[t,u,o,c]=n;return (0,_number_js__WEBPACK_IMPORTED_MODULE_0__/* .i8888to32 */ .Jz)(t*(c/255),u*(c/255),o*(c/255),c)}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/engine/webgl/color.js?')},14266:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "$0": () => (/* binding */ r),\n/* harmony export */   "AI": () => (/* binding */ c),\n/* harmony export */   "Al": () => (/* binding */ y),\n/* harmony export */   "CQ": () => (/* binding */ ot),\n/* harmony export */   "CU": () => (/* binding */ X),\n/* harmony export */   "D3": () => (/* binding */ u),\n/* harmony export */   "Ex": () => (/* binding */ b),\n/* harmony export */   "I_": () => (/* binding */ o),\n/* harmony export */   "Ic": () => (/* binding */ z),\n/* harmony export */   "Ij": () => (/* binding */ C),\n/* harmony export */   "Ip": () => (/* binding */ tt),\n/* harmony export */   "Iw": () => (/* binding */ j),\n/* harmony export */   "Jw": () => (/* binding */ G),\n/* harmony export */   "MI": () => (/* binding */ ht),\n/* harmony export */   "QU": () => (/* binding */ F),\n/* harmony export */   "SD": () => (/* binding */ rt),\n/* harmony export */   "Tz": () => (/* binding */ at),\n/* harmony export */   "Uh": () => (/* binding */ it),\n/* harmony export */   "V4": () => (/* binding */ W),\n/* harmony export */   "XJ": () => (/* binding */ _),\n/* harmony export */   "Xj": () => (/* binding */ E),\n/* harmony export */   "Zd": () => (/* binding */ R),\n/* harmony export */   "_5": () => (/* binding */ J),\n/* harmony export */   "_6": () => (/* binding */ pt),\n/* harmony export */   "a": () => (/* binding */ Y),\n/* harmony export */   "aK": () => (/* binding */ M),\n/* harmony export */   "dn": () => (/* binding */ V),\n/* harmony export */   "e0": () => (/* binding */ nt),\n/* harmony export */   "eF": () => (/* binding */ k),\n/* harmony export */   "f2": () => (/* binding */ D),\n/* harmony export */   "fL": () => (/* binding */ $),\n/* harmony export */   "iJ": () => (/* binding */ A),\n/* harmony export */   "iV": () => (/* binding */ S),\n/* harmony export */   "kF": () => (/* binding */ H),\n/* harmony export */   "lK": () => (/* binding */ O),\n/* harmony export */   "m4": () => (/* binding */ P),\n/* harmony export */   "nM": () => (/* binding */ B),\n/* harmony export */   "oK": () => (/* binding */ dt),\n/* harmony export */   "pU": () => (/* binding */ L),\n/* harmony export */   "ru": () => (/* binding */ i),\n/* harmony export */   "tQ": () => (/* binding */ U),\n/* harmony export */   "uG": () => (/* binding */ Q),\n/* harmony export */   "xl": () => (/* binding */ K),\n/* harmony export */   "xm": () => (/* binding */ s),\n/* harmony export */   "yP": () => (/* binding */ I)\n/* harmony export */ });\n/* unused harmony exports ANGLE_FACTOR_256, ATTRIBUTE_DATA_DD0, ATTRIBUTE_STORE_TEXTURE_SIZE, BUFFER_DATA_MINIMUM_SIZE, BUFFER_DATA_POOL_SIZE, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, ENABLE_EARLY_LABEL_DISCARD, EXTRUDE_SCALE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, MAX_GPU_UPLOADS_PER_FRAME, RASTER_TILE_SIZE, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst t=8,e=t-2,c=1e-30,h=64,i=4294967295,o=512,a=256,d=(/* unused pure expression or super */ null && (256/360)),n=(/* unused pure expression or super */ null && (!1)),p=128,r=8,s=29,f=1,g=16,l=16,m=o/p,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=12,F=5,G=6,H=5,I=6,J=0,K=1,L=2,M=3,N=3,O=4,P=2,Q=1,R=2,S=4,T=(/* unused pure expression or super */ null && (!1)),U=1.05,V=3,W=5,X=6,Y=1.15,Z=2,$=2,_=8,tt=500,et=4,ct=128,ht=10,it=2,ot=0,at=1,dt=4,nt=8,pt=4,rt=1;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js?')},38716:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "LW": () => (/* binding */ E),\n/* harmony export */   "Un": () => (/* binding */ O),\n/* harmony export */   "X": () => (/* binding */ A),\n/* harmony export */   "jx": () => (/* binding */ I),\n/* harmony export */   "mf": () => (/* binding */ _),\n/* harmony export */   "pc": () => (/* binding */ L)\n/* harmony export */ });\n/* unused harmony export WGLGeometryTransactionStatus */\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nvar E,T,I,L,A,_,O;!function(E){E[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL"}(E||(E={})),function(E){E[E.SUCCEEDED=0]="SUCCEEDED",E[E.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(T||(T={})),function(E){E[E.NONE=0]="NONE",E[E.MAP=1]="MAP",E[E.LABEL=2]="LABEL",E[E.LABEL_ALPHA=4]="LABEL_ALPHA",E[E.HITTEST=8]="HITTEST",E[E.HIGHLIGHT=16]="HIGHLIGHT",E[E.CLIP=32]="CLIP",E[E.DEBUG=64]="DEBUG",E[E.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(I||(I={})),function(E){E[E.SIZE=0]="SIZE",E[E.COLOR=1]="COLOR",E[E.OPACITY=2]="OPACITY",E[E.ROTATION=3]="ROTATION"}(L||(L={})),function(E){E[E.NONE=0]="NONE",E[E.OPACITY=1]="OPACITY",E[E.COLOR=2]="COLOR",E[E.ROTATION=4]="ROTATION",E[E.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",E[E.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",E[E.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",E[E.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(A||(A={})),function(E){E[E.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",E[E.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",E[E.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",E[E.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(_||(_={})),function(E){E[E.SPRITE=0]="SPRITE",E[E.GLYPH=1]="GLYPH"}(O||(O={}));\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js?')},8530:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Au": () => (/* binding */ M),\n/* harmony export */   "Jz": () => (/* binding */ x),\n/* harmony export */   "UJ": () => (/* binding */ w)\n/* harmony export */ });\n/* unused harmony exports i16, i32, i8, i8816to32, numTo32, toFloat32, toUint32, u16, u32, u4u4to8, u8 */\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst n=new Float32Array(1),r=new Uint32Array(n.buffer);function t(n,r,t){return Math.round(Math.max(Math.min(n,t),r))}function u(n){return t(n,-128,127)}function e(n){return t(n,-32768,32767)}function o(n){return t(n,-2147483648,2147483647)}function f(n){return t(n,0,255)}function i(n){return t(n,0,65535)}function c(n){return t(n,0,4294967295)}function a(t){return n[0]=t,r[0]}function h(t){return r[0]=t,n[0]}function M(n){return[255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]}function m(n,r){return 15&n|(15&r)<<4}function w(n,r){return 65535&n|r<<16}function x(n,r,t,u){return 255&n|(255&r)<<8|(255&t)<<16|u<<24}function y(n,r,t){return 255&n|(255&r)<<8|t<<16}function A(n){return 0|n}\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/engine/webgl/number.js?')}}]);