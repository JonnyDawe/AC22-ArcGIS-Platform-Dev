"use strict";(self.webpackChunkreveal_js_testing=self.webpackChunkreveal_js_testing||[]).push([[5045],{25609:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "$y": () => (/* binding */ R),\n/* harmony export */   "AH": () => (/* binding */ n),\n/* harmony export */   "CS": () => (/* binding */ Y),\n/* harmony export */   "DD": () => (/* binding */ a),\n/* harmony export */   "Dd": () => (/* binding */ A),\n/* harmony export */   "Em": () => (/* binding */ P),\n/* harmony export */   "JS": () => (/* binding */ J),\n/* harmony export */   "Ky": () => (/* binding */ u),\n/* harmony export */   "Lh": () => (/* binding */ Z),\n/* harmony export */   "Qb": () => (/* binding */ ne),\n/* harmony export */   "RL": () => (/* binding */ e),\n/* harmony export */   "RS": () => (/* binding */ te),\n/* harmony export */   "TF": () => (/* binding */ S),\n/* harmony export */   "Tx": () => (/* binding */ r),\n/* harmony export */   "UR": () => (/* binding */ C),\n/* harmony export */   "UX": () => (/* binding */ ee),\n/* harmony export */   "bj": () => (/* binding */ X),\n/* harmony export */   "eZ": () => (/* binding */ l),\n/* harmony export */   "id": () => (/* binding */ N),\n/* harmony export */   "kP": () => (/* binding */ W),\n/* harmony export */   "r4": () => (/* binding */ b),\n/* harmony export */   "sj": () => (/* binding */ U),\n/* harmony export */   "v2": () => (/* binding */ i),\n/* harmony export */   "zQ": () => (/* binding */ L),\n/* harmony export */   "zV": () => (/* binding */ g)\n/* harmony export */ });\n/* unused harmony exports AngleAlignment, BalloonCalloutStyle, BlendingMode, CGAAttributeType, ClippingType, DominantSizeAxis, ExpressionReturnType, ExternalColorMixMode, FillMode, GeometricEffectEnclosingPolygonMethod, GeometricEffectExtensionOrigin, GeometricEffectOffsetOption, GeometricEffectOffsetTangentMethod, GradientAlignment, GradientFillMethod, GradientStrokeMethod, GradientStrokeType, HorizontalAlignment, LeaderLineStyle, LineDecorationStyle, LineGapType, MarkerPlacementType, MaterialMode, PlacementClip, PlacementRandomlyAlongLineRandomization, PlacementStepPosition, PointSymbolCalloutScale, RotationOrder, Simple3DLineStyle, SizeVariationMethod, SymbolUnits, TextCase, VerticalAlignment, WaterbodySize, WaveStrength */\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nvar e,n,i,t,r,o,l,a,u,c,d,f,s,p,g,C,m,T,S,P,R,B,h,N,M,O,L,A,y,E,D,F,v,x,W,U,k,H,b,w,I,G,q,J,X,Y,Z,K,Q,V,j,z,$,_,ee,ne,ie,te,re,oe;!function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(e||(e={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(n||(n={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(i||(i={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(t||(t={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(r||(r={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(o||(o={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(l||(l={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(a||(a={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(u||(u={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(c||(c={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(d||(d={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(f||(f={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(s||(s={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(p||(p={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(g||(g={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(C||(C={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(m||(m={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(T||(T={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(S||(S={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(P||(P={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(R||(R={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(B||(B={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(h||(h={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(N||(N={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(M||(M={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(O||(O={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(L||(L={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(A||(A={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(y||(y={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(E||(E={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(D||(D={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(F||(F={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(v||(v={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(x||(x={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(W||(W={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(U||(U={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(k||(k={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(H||(H={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(b||(b={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(w||(w={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(I||(I={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(G||(G={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(q||(q={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(J||(J={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(X||(X={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(Y||(Y={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(Z||(Z={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(K||(K={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(Q||(Q={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}(V||(V={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(j||(j={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(z||(z={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}($||($={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(_||(_={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(ee||(ee={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ne||(ne={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(ie||(ie={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(te||(te={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(re||(re={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(oe||(oe={}));\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/symbols/cim/enums.js?')},36609:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "r": () => (/* binding */ g)\n/* harmony export */ });\n/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91957);\n/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80085);\n/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4905);\n/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23148);\n/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95550);\n/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55709);\n/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69666);\n/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8909);\n/* harmony import */ var _symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25609);\n/* harmony import */ var _draw_support_settings_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(55444);\n/* harmony import */ var _interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50639);\n/* harmony import */ var _interactive_snapping_SnappingVisualizer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4371);\n/* harmony import */ var _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1759);\n/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15498);\n/* harmony import */ var _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(62589);\n/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53446);\n/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90819);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nclass g extends _interactive_snapping_SnappingVisualizer_js__WEBPACK_IMPORTED_MODULE_9__/* .SnappingVisualizer */ .a{constructor(e){super(),this.graphicsLayer=e}visualizeIntersectionPoint(e,r){return this._visualizeSnappingIndicator(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:r.coordinateHelper.spatialReference}),f)}visualizePoint(e,r){return this._visualizeSnappingIndicator(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z({x:e.point[0],y:e.point[1],spatialReference:r.coordinateHelper.spatialReference}),I)}visualizeLine(e,r){return this._visualizeSnappingIndicator(new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z({paths:[[e.lineStart,e.lineEnd]],spatialReference:r.coordinateHelper.spatialReference}),P)}visualizeParallelSign(e,r){return this._visualizeSnappingIndicator(new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z({paths:[[e.lineStart,e.lineEnd]],spatialReference:r.coordinateHelper.spatialReference}),x)}visualizeRightAngleQuad(e,r){return this._visualizeSnappingIndicator(new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:r.coordinateHelper.spatialReference}),z(e))}_visualizeSnappingIndicator(i,t){const n=new _Graphic_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({geometry:i,symbol:t});return this.graphicsLayer.add(n),(0,_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .makeHandle */ .kB)((()=>{this.graphicsLayer.remove(n)}))}}const u=_draw_support_settings_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.main.toArray */ .O.main.toArray(),M=[..._draw_support_settings_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.main.toRgb */ .O.main.toRgb(),100],f=new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z({outline:new _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z({width:1.5,color:u}),size:15,color:[0,0,0,0]}),I=new _symbols_SimpleMarkerSymbol_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z({outline:{width:.5,color:[0,0,0,1]},size:10,color:u}),P=new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:_symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_6__/* .LineCapStyle.Butt */ .kP.Butt,joinStyle:_symbols_cim_enums_js__WEBPACK_IMPORTED_MODULE_6__/* .LineJoinStyle.Round */ .r4.Round,miterLimit:10,width:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .px2pt */ .Wz)(_interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_8__/* .defaults.lineHintWidthTarget */ .c.lineHintWidthTarget),color:u}]}}}),x=new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:u}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:u}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),v=e=>new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .px2pt */ .Wz)(_interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_8__/* .defaults.rightAngleHintSize */ .c.rightAngleHintSize),rotation:e,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .px2pt */ .Wz)(_interactive_snapping_Settings_js__WEBPACK_IMPORTED_MODULE_8__/* .defaults.rightAngleHintOutlineSize */ .c.rightAngleHintOutlineSize),color:u},{type:"CIMSolidFill",enable:!0,color:M}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),C=v(45),L=v(225),z=(()=>{const e=(0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__.a)(),r=(0,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_4__.a)(),i=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();return o=>((0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__.f)(e,o.centerVertex,o.previousVertex),(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__.f)(r,o.nextVertex,o.previousVertex),(0,_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__.j)(i,e,r),i[2]<0?C:L)})();\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/interactive/SnappingVisualizer2D.js?')},45045:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  "DrawGraphicTool2D": () => (/* reexport */ E)\n});\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js\nvar tslib_es6 = __webpack_require__(36663);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry.js\nvar geometry = __webpack_require__(91957);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js\nvar Graphic = __webpack_require__(80085);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/handleUtils.js\nvar handleUtils = __webpack_require__(23148);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js\nvar maybe = __webpack_require__(61681);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js\nvar property = __webpack_require__(81977);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js\nvar arrayUtils = __webpack_require__(7753);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js\nvar has = __webpack_require__(39994);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js\nvar ensureType = __webpack_require__(7283);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js\nvar subclass = __webpack_require__(40266);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/interactive/SnappingVisualizer2D.js\nvar SnappingVisualizer2D = __webpack_require__(36609);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols.js + 1 modules\nvar symbols = __webpack_require__(4905);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/CIMSymbol.js\nvar CIMSymbol = __webpack_require__(62589);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js\nvar SimpleMarkerSymbol = __webpack_require__(1759);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/interactive/editingTools/draw/symbols.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst t=new CIMSymbol/* default */.Z({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",effects:[{type:"CIMGeometricEffectDashes",dashTemplate:[3.75,3.75],lineDashEnding:"HalfPattern",controlPointEnding:"NoConstraint"}],enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:1.6,color:[255,255,255,255]},{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:2,color:[0,0,0,255]}]}}}),l=new SimpleMarkerSymbol/* default */.Z({style:"circle",size:6,color:[127,127,127,1],outline:{color:[50,50,50],width:1}}),i=new SimpleMarkerSymbol/* default */.Z({style:"circle",size:6,color:[255,127,0,1],outline:{color:[50,50,50],width:1}});\n\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/draw/DrawGraphicTool.js + 2 modules\nvar DrawGraphicTool = __webpack_require__(54027);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/draw/DrawOperation.js + 2 modules\nvar DrawOperation = __webpack_require__(84703);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/draw/drawSurfaces.js\nvar drawSurfaces = __webpack_require__(15991);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 2 modules\nvar Point = __webpack_require__(53446);\n// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Multipoint.js\nvar Multipoint = __webpack_require__(74304);\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/interactive/editingTools/draw/DrawGraphicTool2D.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nlet E=class extends DrawGraphicTool/* DrawGraphicTool */.T{constructor(e){super(e),this._visualElementGraphics={outline:null,regularVertices:null,activeVertex:null},this.activeFillSymbol=null,this.type="draw-2d",this._visualElementSymbols={outline:(0,maybe/* unwrapOr */.Pt)(e.activeLineSymbol,t),regularVertices:(0,maybe/* unwrapOr */.Pt)(e.regularVerticesSymbol,l),activeVertex:(0,maybe/* unwrapOr */.Pt)(e.activeVertexSymbol,i),fill:(0,maybe/* unwrap */.Wg)(e.activeFillSymbol)}}normalizeCtorArgs(e){const t={...e};return delete t.activeFillSymbol,delete t.activeVertexSymbol,delete t.regularVerticesSymbol,delete t.activeLineSymbol,t}initializeGraphic(e){return (0,maybe/* isSome */.pC)(this._visualElementSymbols.fill)&&(e.symbol=this._visualElementSymbols.fill),null}makeDrawOperation(){const e=this.view;return new DrawOperation/* DrawOperation */.w({view:e,manipulators:this.manipulators,geometryType:(0,DrawGraphicTool/* geometryTypeToDrawOperationGeometryType */.I)(this.geometryType),drawingMode:this.mode,hasZ:this.hasZ,defaultZ:this.defaultZ,snapToSceneEnabled:this.snapToScene,drawSurface:new drawSurfaces/* MapDrawSurface */.hP(e),hasM:!1,snappingManager:this.snappingManager,snappingVisualizer:new SnappingVisualizer2D/* SnappingVisualizer2D */.r(this.internalGraphicsLayer)})}onActiveVertexChanged(e){if("point"===this.geometryType)return null;const[r,s]=e,n=new Point/* default */.Z({x:r,y:s,spatialReference:this.drawOperation.spatialReference});return (0,maybe/* isSome */.pC)(this._visualElementGraphics.activeVertex)?(this._visualElementGraphics.activeVertex.geometry=n,null):(this._visualElementGraphics.activeVertex=new Graphic/* default */.Z({geometry:n,symbol:this._visualElementSymbols.activeVertex,attributes:{displayOrder:2}}),this.internalGraphicsLayer.add(this._visualElementGraphics.activeVertex),this.internalGraphicsLayer.graphics.sort(_),(0,handleUtils/* makeHandle */.kB)((()=>{(0,maybe/* isSome */.pC)(this._visualElementGraphics.activeVertex)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.activeVertex),this._visualElementGraphics.activeVertex=(0,maybe/* destroyMaybe */.SC)(this._visualElementGraphics.activeVertex))})))}onOutlineChanged(e){const r=e.clone();if("polyline"===r.type){const e=r.paths[r.paths.length-1];e.splice(0,e.length-2)}return (0,maybe/* isSome */.pC)(this._visualElementGraphics.outline)?(this._visualElementGraphics.outline.geometry=r,null):(this._visualElementGraphics.outline=new Graphic/* default */.Z({geometry:r,symbol:this._visualElementSymbols.outline,attributes:{displayOrder:0}}),this.internalGraphicsLayer.add(this._visualElementGraphics.outline),this.internalGraphicsLayer.graphics.sort(_),(0,handleUtils/* makeHandle */.kB)((()=>{(0,maybe/* isSome */.pC)(this._visualElementGraphics.outline)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.outline),this._visualElementGraphics.outline=(0,maybe/* destroyMaybe */.SC)(this._visualElementGraphics.outline))})))}onRegularVerticesChanged(e){const r=new Multipoint/* default */.Z({points:e,spatialReference:this.drawOperation.spatialReference});return (0,maybe/* isSome */.pC)(this._visualElementGraphics.regularVertices)?(this._visualElementGraphics.regularVertices.geometry=r,null):(this._visualElementGraphics.regularVertices=new Graphic/* default */.Z({geometry:r,symbol:this._visualElementSymbols.regularVertices,attributes:{displayOrder:1}}),this.internalGraphicsLayer.add(this._visualElementGraphics.regularVertices),this.internalGraphicsLayer.graphics.sort(_),(0,handleUtils/* makeHandle */.kB)((()=>{(0,maybe/* isSome */.pC)(this._visualElementGraphics.regularVertices)&&(this.internalGraphicsLayer.remove(this._visualElementGraphics.regularVertices),this._visualElementGraphics.regularVertices=(0,maybe/* destroyMaybe */.SC)(this._visualElementGraphics.regularVertices))})))}};function _(e,t){var i,r,s,a;return(null!=(i=null==(r=e.attributes)?void 0:r.displayOrder)?i:-1/0)-(null!=(s=null==(a=t.attributes)?void 0:a.displayOrder)?s:-1/0)}(0,tslib_es6._)([(0,property/* property */.Cb)()],E.prototype,"activeFillSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({readOnly:!0})],E.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({constructOnly:!0,nonNullable:!0})],E.prototype,"view",void 0),E=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.interactive.draw.DrawGraphicTool2D")],E);\n\n;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/interactive/editingTools.js\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\n\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/2d/interactive/editingTools.js_+_2_modules?')},55444:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "O": () => (/* binding */ o),\n/* harmony export */   "X": () => (/* binding */ h)\n/* harmony export */ });\n/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30936);\n/*\nAll material copyright ESRI, All Rights Reserved, unless otherwise specified.\nSee https://js.arcgis.com/4.23/esri/copyright.txt for details.\n*/\nconst o={main:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z([255,127,0]),selected:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z([255,255,255]),outline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z([0,0,0,.5]),selectedOutline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z([255,255,255]),hoverOutline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z([255,255,255]),secondary:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z([255,255,255]),secondaryOutline:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z([100,100,100]),transparent:new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z([0,0,0,0])};function t(e,o){if(o)for(const t in o)e[t]=o[t]}class s{constructor(e){this.size=8,this.hoverSize=10,this.color=o.main,this.hoverColor=o.main,this.outlineColor=o.outline,this.hoverOutlineColor=o.hoverOutline,t(this,e)}}class n{constructor(e){this.color=o.secondary,this.hoverColor=o.main,t(this,e)}}class r{constructor(e){this.color=o.transparent,this.hoverColor=o.transparent,this.outlineColor=o.main,this.hoverOutlineColor=o.main,this.stagedColor=o.transparent,this.stagedOutlineColor=o.secondary,t(this,e)}}class i{constructor(e){this.vertex=new s,this.midpoint=new s({color:o.secondary,outlineColor:o.secondaryOutline,size:6}),this.selected=new s({color:o.selected,hoverColor:o.selected,hoverOutlineColor:o.hoverOutline}),t(this,e)}}class l{constructor(e){this.center=new s({color:o.secondaryOutline}),this.fill=new r,this.line=new n,this.vertex=new s({color:o.selected,outlineColor:o.main,hoverColor:o.selected,hoverOutlineColor:o.secondaryOutline}),t(this,e)}}class c{constructor(e){this.reshapeGraphics=new i,this.transformGraphics=new l,t(this,e)}}const h=new c;\n\n\n//# sourceURL=webpack://reveal-js-testing/./node_modules/@arcgis/core/views/draw/support/settings.js?')}}]);