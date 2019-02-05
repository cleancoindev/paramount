(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/components/Layout/Box.tsx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BASE_BORDER_RADII=void 0;var l=n(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),d=r(a("./node_modules/react/index.js")),i=a("./node_modules/react-native-web/dist/index.js"),u=a("./src/theme/index.ts");t.BASE_BORDER_RADII=4;var o={circle:{borderRadius:"50%"},pill:{borderRadius:"999px"},rounded:{borderRadius:"".concat(4,"px")},roundedBottom:{borderRadius:"0 0 ".concat(4,"px ").concat(4,"px")},roundedLeft:{borderRadius:"".concat(4,"px 0 0 ").concat(4,"px")},roundedRight:{borderRadius:"0 ".concat(4,"px ").concat(4,"px 0")},roundedTop:{borderRadius:"".concat(4,"px ").concat(4,"px 0 0")},square:{borderRadius:"0"}},s={elevation:function(e){function t(t,a){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return t.elevations[e]}),shape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return o[e]})},m=function(e){var t=e.theme,a=(0,l.default)(e,["theme"]),r=a.children,n=a.style,u=(0,l.default)(a,["children","style"]),o=[],m={};for(var p in u)if(p){var f=s[p];if(f){var c=f(u[p],t);o.push(c)}else m[p]=u[p]}return d.createElement(i.View,{style:[m,o,n]},r)},p=(0,u.withTheme)(m);t.default=p;try{m.displayName="Box",m.__docgenInfo={description:"",displayName:"Box",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}},elevation:{defaultValue:null,description:"Sets the elevation of a view, using Android's underlying\n[elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).\nThis adds a drop shadow to the item and affects z-order for overlapping views.\nOnly supported on Android 5.0+, has no effect on earlier versions.",name:"elevation",required:!1,type:{name:"0 | 4 | 1 | 2 | 3 | 5 | 6"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},backfaceVisibility:{defaultValue:null,description:"",name:"backfaceVisibility",required:!1,type:{name:'"visible" | "hidden"'}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderBottomColor:{defaultValue:null,description:"",name:"borderBottomColor",required:!1,type:{name:"string"}},borderBottomEndRadius:{defaultValue:null,description:"",name:"borderBottomEndRadius",required:!1,type:{name:"number"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"number"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"number"}},borderBottomStartRadius:{defaultValue:null,description:"",name:"borderBottomStartRadius",required:!1,type:{name:"number"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"number"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderEndColor:{defaultValue:null,description:"",name:"borderEndColor",required:!1,type:{name:"string"}},borderLeftColor:{defaultValue:null,description:"",name:"borderLeftColor",required:!1,type:{name:"string"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"number"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},borderRightColor:{defaultValue:null,description:"",name:"borderRightColor",required:!1,type:{name:"string"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"number"}},borderStartColor:{defaultValue:null,description:"",name:"borderStartColor",required:!1,type:{name:"string"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'"solid" | "dotted" | "dashed"'}},borderTopColor:{defaultValue:null,description:"",name:"borderTopColor",required:!1,type:{name:"string"}},borderTopEndRadius:{defaultValue:null,description:"",name:"borderTopEndRadius",required:!1,type:{name:"number"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"number"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"number"}},borderTopStartRadius:{defaultValue:null,description:"",name:"borderTopStartRadius",required:!1,type:{name:"number"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around"'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"FlexAlignType"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "baseline" | "auto"'}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:"number"}},borderEndWidth:{defaultValue:null,description:"",name:"borderEndWidth",required:!1,type:{name:"ReactText"}},borderStartWidth:{defaultValue:null,description:"",name:"borderStartWidth",required:!1,type:{name:"ReactText"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactText"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'"flex" | "none"'}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"ReactText"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"number"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ReactText"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'"row" | "column" | "row-reverse" | "column-reverse"'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"number"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"number"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'"wrap" | "nowrap" | "wrap-reverse"'}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ReactText"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactText"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ReactText"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ReactText"}},marginEnd:{defaultValue:null,description:"",name:"marginEnd",required:!1,type:{name:"ReactText"}},marginHorizontal:{defaultValue:null,description:"",name:"marginHorizontal",required:!1,type:{name:"ReactText"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ReactText"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ReactText"}},marginStart:{defaultValue:null,description:"",name:"marginStart",required:!1,type:{name:"ReactText"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ReactText"}},marginVertical:{defaultValue:null,description:"",name:"marginVertical",required:!1,type:{name:"ReactText"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ReactText"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ReactText"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ReactText"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ReactText"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'"visible" | "hidden" | "scroll"'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ReactText"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ReactText"}},paddingEnd:{defaultValue:null,description:"",name:"paddingEnd",required:!1,type:{name:"ReactText"}},paddingHorizontal:{defaultValue:null,description:"",name:"paddingHorizontal",required:!1,type:{name:"ReactText"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ReactText"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ReactText"}},paddingStart:{defaultValue:null,description:"",name:"paddingStart",required:!1,type:{name:"ReactText"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ReactText"}},paddingVertical:{defaultValue:null,description:"",name:"paddingVertical",required:!1,type:{name:"ReactText"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"absolute" | "relative"'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactText"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"ReactText"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactText"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ReactText"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},direction:{defaultValue:null,description:"@platform ios",name:"direction",required:!1,type:{name:'"inherit" | "ltr" | "rtl"'}},shadowColor:{defaultValue:null,description:"",name:"shadowColor",required:!1,type:{name:"string"}},shadowOffset:{defaultValue:null,description:"",name:"shadowOffset",required:!1,type:{name:"{ width: number; height: number; }"}},shadowOpacity:{defaultValue:null,description:"",name:"shadowOpacity",required:!1,type:{name:"number"}},shadowRadius:{defaultValue:null,description:"",name:"shadowRadius",required:!1,type:{name:"number"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"(PerpectiveTransform | RotateTransform | RotateXTransform | RotateYTransform | RotateZTransform | ScaleTransform | ScaleXTransform | ScaleYTransform | TranslateXTransform | TranslateYTransform | SkewXTransform | SkewYTransform)[]"}},transformMatrix:{defaultValue:null,description:"",name:"transformMatrix",required:!1,type:{name:"number[]"}},rotation:{defaultValue:null,description:"",name:"rotation",required:!1,type:{name:"number"}},scaleX:{defaultValue:null,description:"",name:"scaleX",required:!1,type:{name:"number"}},scaleY:{defaultValue:null,description:"",name:"scaleY",required:!1,type:{name:"number"}},translateX:{defaultValue:null,description:"",name:"translateX",required:!1,type:{name:"number"}},translateY:{defaultValue:null,description:"",name:"translateY",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Box.tsx#Box"]={docgenInfo:m.__docgenInfo,name:"Box",path:"src/components/Layout/Box.tsx#Box"})}catch(f){}},"./src/components/Layout/Spacing.tsx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("./node_modules/@babel/runtime/helpers/objectSpread.js")),d=r(a("./node_modules/react/index.js")),i=a("./src/theme/index.ts"),u=n(a("./src/components/Layout/Box.tsx")),o={height:!0,margin:!0,marginBottom:!0,marginEnd:!0,marginHorizontal:!0,marginLeft:!0,marginRight:!0,marginStart:!0,marginTop:!0,marginVertical:!0,padding:!0,paddingBottom:!0,paddingEnd:!0,paddingHorizontal:!0,paddingLeft:!0,paddingRight:!0,paddingStart:!0,paddingTop:!0,paddingVertical:!0},s=function(e){var t=(0,l.default)({},e);for(var a in e)o[a]&&(t[a]=e[a]*(e.gridPointMultiplier||8));return d.createElement(u.default,t)},m=(0,i.withTheme)(s);t.default=m;try{s.displayName="Spacing",s.__docgenInfo={description:"",displayName:"Spacing",props:{gridPointMultiplier:{defaultValue:null,description:"",name:"gridPointMultiplier",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"GridScale"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"GridScale"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"GridScale"}},marginEnd:{defaultValue:null,description:"",name:"marginEnd",required:!1,type:{name:"GridScale"}},marginHorizontal:{defaultValue:null,description:"",name:"marginHorizontal",required:!1,type:{name:"GridScale"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"GridScale"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"GridScale"}},marginStart:{defaultValue:null,description:"",name:"marginStart",required:!1,type:{name:"GridScale"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"GridScale"}},marginVertical:{defaultValue:null,description:"",name:"marginVertical",required:!1,type:{name:"GridScale"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"GridScale"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"GridScale"}},paddingEnd:{defaultValue:null,description:"",name:"paddingEnd",required:!1,type:{name:"GridScale"}},paddingHorizontal:{defaultValue:null,description:"",name:"paddingHorizontal",required:!1,type:{name:"GridScale"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"GridScale"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"GridScale"}},paddingStart:{defaultValue:null,description:"",name:"paddingStart",required:!1,type:{name:"GridScale"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"GridScale"}},paddingVertical:{defaultValue:null,description:"",name:"paddingVertical",required:!1,type:{name:"GridScale"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"ViewStyle"}},elevation:{defaultValue:null,description:"Sets the elevation of a view, using Android's underlying\n[elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).\nThis adds a drop shadow to the item and affects z-order for overlapping views.\nOnly supported on Android 5.0+, has no effect on earlier versions.",name:"elevation",required:!1,type:{name:"0 | 1 | 2 | 3 | 4 | 5 | 6"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},backfaceVisibility:{defaultValue:null,description:"",name:"backfaceVisibility",required:!1,type:{name:'"visible" | "hidden"'}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderBottomColor:{defaultValue:null,description:"",name:"borderBottomColor",required:!1,type:{name:"string"}},borderBottomEndRadius:{defaultValue:null,description:"",name:"borderBottomEndRadius",required:!1,type:{name:"number"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"number"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"number"}},borderBottomStartRadius:{defaultValue:null,description:"",name:"borderBottomStartRadius",required:!1,type:{name:"number"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"number"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderEndColor:{defaultValue:null,description:"",name:"borderEndColor",required:!1,type:{name:"string"}},borderLeftColor:{defaultValue:null,description:"",name:"borderLeftColor",required:!1,type:{name:"string"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"number"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},borderRightColor:{defaultValue:null,description:"",name:"borderRightColor",required:!1,type:{name:"string"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"number"}},borderStartColor:{defaultValue:null,description:"",name:"borderStartColor",required:!1,type:{name:"string"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'"solid" | "dotted" | "dashed"'}},borderTopColor:{defaultValue:null,description:"",name:"borderTopColor",required:!1,type:{name:"string"}},borderTopEndRadius:{defaultValue:null,description:"",name:"borderTopEndRadius",required:!1,type:{name:"number"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"number"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"number"}},borderTopStartRadius:{defaultValue:null,description:"",name:"borderTopStartRadius",required:!1,type:{name:"number"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around"'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"FlexAlignType"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "baseline" | "auto"'}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:"number"}},borderEndWidth:{defaultValue:null,description:"",name:"borderEndWidth",required:!1,type:{name:"ReactText"}},borderStartWidth:{defaultValue:null,description:"",name:"borderStartWidth",required:!1,type:{name:"ReactText"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactText"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'"flex" | "none"'}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"ReactText"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"number"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ReactText"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'"row" | "column" | "row-reverse" | "column-reverse"'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"number"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"number"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'"wrap" | "nowrap" | "wrap-reverse"'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactText"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ReactText"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ReactText"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ReactText"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ReactText"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'"visible" | "hidden" | "scroll"'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"absolute" | "relative"'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactText"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"ReactText"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactText"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ReactText"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},direction:{defaultValue:null,description:"@platform ios",name:"direction",required:!1,type:{name:'"inherit" | "ltr" | "rtl"'}},shadowColor:{defaultValue:null,description:"",name:"shadowColor",required:!1,type:{name:"string"}},shadowOffset:{defaultValue:null,description:"",name:"shadowOffset",required:!1,type:{name:"{ width: number; height: number; }"}},shadowOpacity:{defaultValue:null,description:"",name:"shadowOpacity",required:!1,type:{name:"number"}},shadowRadius:{defaultValue:null,description:"",name:"shadowRadius",required:!1,type:{name:"number"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"(PerpectiveTransform | RotateTransform | RotateXTransform | RotateYTransform | RotateZTransform | ScaleTransform | ScaleXTransform | ScaleYTransform | TranslateXTransform | TranslateYTransform | SkewXTransform | SkewYTransform)[]"}},transformMatrix:{defaultValue:null,description:"",name:"transformMatrix",required:!1,type:{name:"number[]"}},rotation:{defaultValue:null,description:"",name:"rotation",required:!1,type:{name:"number"}},scaleX:{defaultValue:null,description:"",name:"scaleX",required:!1,type:{name:"number"}},scaleY:{defaultValue:null,description:"",name:"scaleY",required:!1,type:{name:"number"}},translateX:{defaultValue:null,description:"",name:"translateX",required:!1,type:{name:"number"}},translateY:{defaultValue:null,description:"",name:"translateY",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Spacing.tsx#Spacing"]={docgenInfo:s.__docgenInfo,name:"Spacing",path:"src/components/Layout/Spacing.tsx#Spacing"})}catch(p){}},"./src/theme/ThemeContext.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeContext=void 0;var n=r(a("./node_modules/react/index.js")),l=a("./src/theme/default-theme/index.ts"),d=n.createContext(l.defaultTheme);t.ThemeContext=d},"./src/theme/ThemeInterface.ts":function(e,t){},"./src/theme/createTheme.ts":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.createTheme=void 0;var r=a("./src/theme/default-theme/index.ts"),n=a("./node_modules/deepmerge/dist/umd.js"),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaultTheme;return n(r.defaultTheme,e)};t.createTheme=l;try{l.displayName="createTheme",l.__docgenInfo={description:"",displayName:"createTheme",props:{colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"DeepPartial<Colors>"}},fills:{defaultValue:null,description:"",name:"fills",required:!1,type:{name:"DeepPartial<Fills>"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!1,type:{name:"DeepPartial<FontFamilies>"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!1,type:{name:"DeepPartial<FontWeights>"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!1,type:{name:"DeepPartial<HeadingSizes>"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!1,type:{name:"DeepPartial<ParagraphSizes>"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!1,type:{name:"DeepPartial<TextSizes>"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!1,type:{name:"DeepPartial<ViewStyle>[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!1,type:{name:"DeepPartial<ControlSizes>"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!1,type:{name:"DeepPartial<ControlSizes>"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!1,type:{name:"DeepPartial<ControlSizes>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/createTheme.ts#createTheme"]={docgenInfo:l.__docgenInfo,name:"createTheme",path:"src/theme/createTheme.ts#createTheme"})}catch(d){}},"./src/theme/default-theme/controls/index.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.controlBorderRadius=t.controlHeights=t.controlPaddings=void 0;t.controlPaddings={small:8,medium:16,large:24};t.controlHeights={small:40,medium:48,large:56};t.controlBorderRadius={small:4,medium:4,large:4}},"./src/theme/default-theme/foundational-styles/colors.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("./src/theme/default-theme/foundational-styles/palette.ts")),l={background:{overlay:"rgba(0,0,0,0.3)",plain:"white",disabled:n.default.neutral.light,tint1:n.default.neutral.lightest,tint2:"#F5F6F7",primary:{default:n.default.teal.base,focus:n.default.teal.dark,focusLight:n.default.teal.lightest},secondary:{default:n.default.orange.base,focus:n.default.orange.dark,focusLight:n.default.orange.lightest},danger:{default:n.default.red.base,focus:n.default.red.dark,focusLight:n.default.red.lightest},info:{default:n.default.blue.base,focus:n.default.blue.dark,focusLight:n.default.blue.lightest},success:{default:n.default.green.base,focus:n.default.green.dark,focusLight:n.default.green.lightest},warning:{default:n.default.orange.base,focus:n.default.orange.dark,focusLight:n.default.orange.lightest}},border:{default:n.default.neutral.light,muted:"#EDF0F2",primary:n.default.teal.darkest,secondary:n.default.orange.darkest,danger:n.default.red.darkest,info:n.default.blue.darkest,success:n.default.green.darkest,warning:n.default.orange.darkest},text:{dark:n.default.neutral.darkest,default:n.default.neutral.darkest,muted:n.default.neutral.dark,plain:"white",selected:"white",primary:n.default.teal.darkest,secondary:n.default.orange.darkest,danger:n.default.red.darkest,info:n.default.blue.darkest,success:n.default.green.darkest,warning:n.default.orange.darkest}};t.default=l},"./src/theme/default-theme/foundational-styles/elevations.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("./src/theme/default-theme/foundational-styles/palette.ts")),l=[{elevation:0,shadowColor:n.default.neutral.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:n.default.neutral.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:n.default.neutral.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:n.default.neutral.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:n.default.neutral.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:n.default.neutral.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}];t.default=l},"./src/theme/default-theme/foundational-styles/fills.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("./src/theme/default-theme/foundational-styles/palette.ts")),l={solid:{neutral:{backgroundColor:n.default.neutral.base,color:"white"},blue:{backgroundColor:n.default.blue.base,color:"white"},red:{backgroundColor:n.default.red.base,color:"white"},orange:{backgroundColor:n.default.orange.base,color:"white"},yellow:{backgroundColor:n.default.yellow.base,color:n.default.yellow.darkest},green:{backgroundColor:n.default.green.base,color:"white"},teal:{backgroundColor:n.default.teal.base,color:"white"},purple:{backgroundColor:n.default.purple.base,color:"white"}},subtle:{neutral:{backgroundColor:n.default.neutral.light,color:n.default.neutral.darkest},blue:{backgroundColor:n.default.blue.light,color:n.default.blue.darkest},red:{backgroundColor:n.default.red.light,color:n.default.red.darkest},orange:{backgroundColor:n.default.orange.light,color:n.default.orange.darkest},yellow:{backgroundColor:n.default.yellow.light,color:n.default.yellow.darkest},green:{backgroundColor:n.default.green.light,color:n.default.green.darkest},teal:{backgroundColor:n.default.teal.light,color:n.default.teal.darkest},purple:{backgroundColor:n.default.purple.light,color:n.default.purple.darkest}}};t.default=l},"./src/theme/default-theme/foundational-styles/index.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"colors",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"elevations",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"fills",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"palette",{enumerable:!0,get:function(){return i.default}});var n=r(a("./src/theme/default-theme/foundational-styles/colors.ts")),l=r(a("./src/theme/default-theme/foundational-styles/elevations.ts")),d=r(a("./src/theme/default-theme/foundational-styles/fills.ts")),i=r(a("./src/theme/default-theme/foundational-styles/palette.ts"))},"./src/theme/default-theme/foundational-styles/palette.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={neutral:{lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},blue:{lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},red:{lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},orange:{lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},yellow:{lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},green:{lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},teal:{lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},purple:{lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"}}},"./src/theme/default-theme/index.ts":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.defaultTheme=void 0;var r=a("./src/theme/default-theme/controls/index.ts"),n=a("./src/theme/default-theme/foundational-styles/index.ts"),l=a("./src/theme/default-theme/typography/index.ts"),d={colors:n.colors,fills:n.fills,fontFamilies:l.fontFamilies,fontWeights:l.fontWeights,headingSizes:l.headingSizes,paragraphSizes:l.paragraphSizes,textSizes:l.textSizes,elevations:n.elevations,controlBorderRadius:r.controlBorderRadius,controlHeights:r.controlHeights,controlPaddings:r.controlPaddings};t.defaultTheme=d},"./src/theme/default-theme/typography/fontFamilies.ts":function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.fontFamilies=void 0;var r="web"===a("./node_modules/react-native-web/dist/index.js").Platform.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:void 0,mono:void 0,text:void 0};t.fontFamilies=r;var n=r;t.default=n},"./src/theme/default-theme/typography/fontWeights.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.fontWeights=void 0;var a={bold:"700",light:"300",normal:"600"};t.fontWeights=a;var r=a;t.default=r},"./src/theme/default-theme/typography/headingSizes.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={xxxlarge:35,xxlarge:29,xlarge:24,large:20,medium:16,small:14}},"./src/theme/default-theme/typography/index.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"fontFamilies",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"fontWeights",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"textSizes",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"paragraphSizes",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"headingSizes",{enumerable:!0,get:function(){return u.default}});var n=r(a("./src/theme/default-theme/typography/fontFamilies.ts")),l=r(a("./src/theme/default-theme/typography/fontWeights.ts")),d=r(a("./src/theme/default-theme/typography/textSizes.ts")),i=r(a("./src/theme/default-theme/typography/paragraphSizes.ts")),u=r(a("./src/theme/default-theme/typography/headingSizes.ts"))},"./src/theme/default-theme/typography/paragraphSizes.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={large:20,medium:16,small:14}},"./src/theme/default-theme/typography/textSizes.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={large:20,medium:16,small:14}},"./src/theme/index.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0});var n={defaultTheme:!0,withTheme:!0,createTheme:!0};Object.defineProperty(t,"defaultTheme",{enumerable:!0,get:function(){return l.defaultTheme}}),Object.defineProperty(t,"withTheme",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"createTheme",{enumerable:!0,get:function(){return o.createTheme}});var l=a("./src/theme/default-theme/index.ts"),d=a("./src/theme/ThemeContext.ts");Object.keys(d).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}}))});var i=a("./src/theme/ThemeInterface.ts");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}}))});var u=r(a("./src/theme/withTheme.tsx")),o=a("./src/theme/createTheme.ts");try{theme.displayName="theme",theme.__docgenInfo={description:"",displayName:"theme",props:{colors:{defaultValue:null,description:"",name:"colors",required:!1,type:{name:"DeepPartial<Colors>"}},fills:{defaultValue:null,description:"",name:"fills",required:!1,type:{name:"DeepPartial<Fills>"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!1,type:{name:"DeepPartial<FontFamilies>"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!1,type:{name:"DeepPartial<FontWeights>"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!1,type:{name:"DeepPartial<HeadingSizes>"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!1,type:{name:"DeepPartial<ParagraphSizes>"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!1,type:{name:"DeepPartial<TextSizes>"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!1,type:{name:"DeepPartial<ViewStyle>[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!1,type:{name:"DeepPartial<ControlSizes>"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!1,type:{name:"DeepPartial<ControlSizes>"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!1,type:{name:"DeepPartial<ControlSizes>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/index.ts#theme"]={docgenInfo:theme.__docgenInfo,name:"theme",path:"src/theme/index.ts#theme"})}catch(s){}},"./src/theme/withTheme.tsx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("./node_modules/@babel/runtime/helpers/extends.js")),d=n(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=n(a("./node_modules/@babel/runtime/helpers/createClass.js")),u=n(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),o=n(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),s=n(a("./node_modules/@babel/runtime/helpers/inherits.js")),m=r(a("./node_modules/react/index.js")),p=a("./src/theme/ThemeContext.ts"),f=function(e){var t,a,r=e.displayName||e.name||"Component";return a=t=function(t){function a(){return(0,d.default)(this,a),(0,u.default)(this,(0,o.default)(a).apply(this,arguments))}return(0,s.default)(a,t),(0,i.default)(a,[{key:"render",value:function(){var t=this;return m.createElement(p.ThemeContext.Consumer,null,function(a){return m.createElement(e,(0,l.default)({theme:a},t.props))})}}]),a}(m.PureComponent),t.displayName=r,a},c=f;t.default=c;try{f.displayName="withTheme",f.__docgenInfo={description:"",displayName:"withTheme",props:{propTypes:{defaultValue:null,description:"",name:"propTypes",required:!0,type:{name:"WeakValidationMap<TWrappedComponentProps>"}},contextTypes:{defaultValue:null,description:"",name:"contextTypes",required:!0,type:{name:"ValidationMap<any>"}},defaultProps:{defaultValue:null,description:"",name:"defaultProps",required:!0,type:{name:"Partial<TWrappedComponentProps>"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/theme/withTheme.tsx#withTheme"]={docgenInfo:f.__docgenInfo,name:"withTheme",path:"src/theme/withTheme.tsx#withTheme"})}catch(h){}}}]);
//# sourceMappingURL=1.2c158a778b3d94f247de.js.map