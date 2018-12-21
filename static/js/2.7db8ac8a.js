(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/Layout/Box.tsx":function(e,a,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),t=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.BASE_BORDER_RADII=void 0;var i=t(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),d=n(r("./node_modules/react/index.js")),l=r("./node_modules/react-native-web/dist/index.js"),u=r("./src/theme/index.ts");a.BASE_BORDER_RADII=4;var o={circle:{borderRadius:"50%"},pill:{borderRadius:"999px"},rounded:{borderRadius:"".concat(4,"px")},roundedBottom:{borderRadius:"0 0 ".concat(4,"px ").concat(4,"px")},roundedLeft:{borderRadius:"".concat(4,"px 0 0 ").concat(4,"px")},roundedRight:{borderRadius:"0 ".concat(4,"px ").concat(4,"px 0")},roundedTop:{borderRadius:"".concat(4,"px ").concat(4,"px 0 0")},square:{borderRadius:"0"}},m={elevation:function(e){function a(a,r){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(e,a){switch(e){case 0:case 1:case 2:default:return{shadowColor:a.themeVariables.colors.text.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8}}}),marginX:function(e){function a(a){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(e){return{marginLeft:e,marginRight:e}}),marginY:function(e){function a(a){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(e){return{marginBottom:e,marginTop:e}}),paddingX:function(e){function a(a){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(e){return{paddingLeft:e,paddingRight:e}}),paddingY:function(e){function a(a){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(e){return{paddingBottom:e,paddingTop:e}}),shape:function(e){function a(a){return e.apply(this,arguments)}return a.toString=function(){return e.toString()},a}(function(e){return o[e]})},p=function(e){var a=e.theme,r=(0,i.default)(e,["theme"]),n=r.children,t=(0,i.default)(r,["children"]),u=[],o={};for(var p in t)if(p){var s=m[p];if(s){var c=s(t[p],a);u.push(c)}else o[p]=t[p]}return d.createElement(l.View,{style:[o,u]},n)},s=(0,u.withTheme)(p);a.default=s;try{p.displayName="Box",p.__docgenInfo={description:"",displayName:"Box",props:{elevation:{defaultValue:null,description:"Sets the elevation of a view, using Android's underlying\n[elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).\nThis adds a drop shadow to the item and affects z-order for overlapping views.\nOnly supported on Android 5.0+, has no effect on earlier versions.",name:"elevation",required:!1,type:{name:"number"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"ReactText"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"ReactText"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"ReactText"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"ReactText"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},backfaceVisibility:{defaultValue:null,description:"",name:"backfaceVisibility",required:!1,type:{name:'"visible" | "hidden"'}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderBottomColor:{defaultValue:null,description:"",name:"borderBottomColor",required:!1,type:{name:"string"}},borderBottomEndRadius:{defaultValue:null,description:"",name:"borderBottomEndRadius",required:!1,type:{name:"number"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"number"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"number"}},borderBottomStartRadius:{defaultValue:null,description:"",name:"borderBottomStartRadius",required:!1,type:{name:"number"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"number"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderEndColor:{defaultValue:null,description:"",name:"borderEndColor",required:!1,type:{name:"string"}},borderLeftColor:{defaultValue:null,description:"",name:"borderLeftColor",required:!1,type:{name:"string"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"number"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},borderRightColor:{defaultValue:null,description:"",name:"borderRightColor",required:!1,type:{name:"string"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"number"}},borderStartColor:{defaultValue:null,description:"",name:"borderStartColor",required:!1,type:{name:"string"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'"solid" | "dotted" | "dashed"'}},borderTopColor:{defaultValue:null,description:"",name:"borderTopColor",required:!1,type:{name:"string"}},borderTopEndRadius:{defaultValue:null,description:"",name:"borderTopEndRadius",required:!1,type:{name:"number"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"number"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"number"}},borderTopStartRadius:{defaultValue:null,description:"",name:"borderTopStartRadius",required:!1,type:{name:"number"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around"'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"FlexAlignType"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "baseline" | "auto"'}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:"number"}},borderEndWidth:{defaultValue:null,description:"",name:"borderEndWidth",required:!1,type:{name:"ReactText"}},borderStartWidth:{defaultValue:null,description:"",name:"borderStartWidth",required:!1,type:{name:"ReactText"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactText"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'"flex" | "none"'}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"ReactText"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"number"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ReactText"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'"row" | "column" | "row-reverse" | "column-reverse"'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"number"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"number"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'"wrap" | "nowrap" | "wrap-reverse"'}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ReactText"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactText"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"ReactText"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"ReactText"}},marginEnd:{defaultValue:null,description:"",name:"marginEnd",required:!1,type:{name:"ReactText"}},marginHorizontal:{defaultValue:null,description:"",name:"marginHorizontal",required:!1,type:{name:"ReactText"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"ReactText"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"ReactText"}},marginStart:{defaultValue:null,description:"",name:"marginStart",required:!1,type:{name:"ReactText"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"ReactText"}},marginVertical:{defaultValue:null,description:"",name:"marginVertical",required:!1,type:{name:"ReactText"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ReactText"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ReactText"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ReactText"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ReactText"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'"visible" | "hidden" | "scroll"'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"ReactText"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"ReactText"}},paddingEnd:{defaultValue:null,description:"",name:"paddingEnd",required:!1,type:{name:"ReactText"}},paddingHorizontal:{defaultValue:null,description:"",name:"paddingHorizontal",required:!1,type:{name:"ReactText"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"ReactText"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"ReactText"}},paddingStart:{defaultValue:null,description:"",name:"paddingStart",required:!1,type:{name:"ReactText"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"ReactText"}},paddingVertical:{defaultValue:null,description:"",name:"paddingVertical",required:!1,type:{name:"ReactText"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"absolute" | "relative"'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactText"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"ReactText"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactText"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ReactText"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},direction:{defaultValue:null,description:"@platform ios",name:"direction",required:!1,type:{name:'"inherit" | "ltr" | "rtl"'}},shadowColor:{defaultValue:null,description:"",name:"shadowColor",required:!1,type:{name:"string"}},shadowOffset:{defaultValue:null,description:"",name:"shadowOffset",required:!1,type:{name:"{ width: number; height: number; }"}},shadowOpacity:{defaultValue:null,description:"",name:"shadowOpacity",required:!1,type:{name:"number"}},shadowRadius:{defaultValue:null,description:"",name:"shadowRadius",required:!1,type:{name:"number"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"(PerpectiveTransform | RotateTransform | RotateXTransform | RotateYTransform | RotateZTransform | ScaleTransform | ScaleXTransform | ScaleYTransform | TranslateXTransform | TranslateYTransform | SkewXTransform | SkewYTransform)[]"}},transformMatrix:{defaultValue:null,description:"",name:"transformMatrix",required:!1,type:{name:"number[]"}},rotation:{defaultValue:null,description:"",name:"rotation",required:!1,type:{name:"number"}},scaleX:{defaultValue:null,description:"",name:"scaleX",required:!1,type:{name:"number"}},scaleY:{defaultValue:null,description:"",name:"scaleY",required:!1,type:{name:"number"}},translateX:{defaultValue:null,description:"",name:"translateX",required:!1,type:{name:"number"}},translateY:{defaultValue:null,description:"",name:"translateY",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Box.tsx#Box"]={docgenInfo:p.__docgenInfo,name:"Box",path:"src/components/Layout/Box.tsx#Box"})}catch(c){}},"./src/components/Layout/Spacing.tsx":function(e,a,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),t=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=t(r("./node_modules/@babel/runtime/helpers/objectSpread.js")),d=n(r("./node_modules/react/index.js")),l=r("./src/theme/index.ts"),u=t(r("./src/components/Layout/Box.tsx")),o={height:!0,margin:!0,marginBottom:!0,marginEnd:!0,marginHorizontal:!0,marginLeft:!0,marginRight:!0,marginStart:!0,marginTop:!0,marginX:!0,marginY:!0,padding:!0,paddingBottom:!0,paddingEnd:!0,paddingHorizontal:!0,paddingLeft:!0,paddingRight:!0,paddingStart:!0,paddingTop:!0,paddingVertical:!0,paddingX:!0,paddingY:!0},m=function(e){var a=(0,i.default)({},e);for(var r in e)o[r]&&(a[r]=e[r]*(e.gridPointMultiplier||8));return d.createElement(u.default,a)},p=(0,l.withTheme)(m);a.default=p;try{m.displayName="Spacing",m.__docgenInfo={description:"",displayName:"Spacing",props:{gridPointMultiplier:{defaultValue:null,description:"",name:"gridPointMultiplier",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"GridScale"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"GridScale"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"GridScale"}},marginEnd:{defaultValue:null,description:"",name:"marginEnd",required:!1,type:{name:"GridScale"}},marginHorizontal:{defaultValue:null,description:"",name:"marginHorizontal",required:!1,type:{name:"GridScale"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"GridScale"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"GridScale"}},marginStart:{defaultValue:null,description:"",name:"marginStart",required:!1,type:{name:"GridScale"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"GridScale"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"GridScale"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"GridScale"}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"GridScale"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"GridScale"}},paddingEnd:{defaultValue:null,description:"",name:"paddingEnd",required:!1,type:{name:"GridScale"}},paddingHorizontal:{defaultValue:null,description:"",name:"paddingHorizontal",required:!1,type:{name:"GridScale"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"GridScale"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"GridScale"}},paddingStart:{defaultValue:null,description:"",name:"paddingStart",required:!1,type:{name:"GridScale"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"GridScale"}},paddingVertical:{defaultValue:null,description:"",name:"paddingVertical",required:!1,type:{name:"GridScale"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"GridScale"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"GridScale"}},elevation:{defaultValue:null,description:"Sets the elevation of a view, using Android's underlying\n[elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).\nThis adds a drop shadow to the item and affects z-order for overlapping views.\nOnly supported on Android 5.0+, has no effect on earlier versions.",name:"elevation",required:!1,type:{name:"number"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},backfaceVisibility:{defaultValue:null,description:"",name:"backfaceVisibility",required:!1,type:{name:'"visible" | "hidden"'}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderBottomColor:{defaultValue:null,description:"",name:"borderBottomColor",required:!1,type:{name:"string"}},borderBottomEndRadius:{defaultValue:null,description:"",name:"borderBottomEndRadius",required:!1,type:{name:"number"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"number"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"number"}},borderBottomStartRadius:{defaultValue:null,description:"",name:"borderBottomStartRadius",required:!1,type:{name:"number"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"number"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderEndColor:{defaultValue:null,description:"",name:"borderEndColor",required:!1,type:{name:"string"}},borderLeftColor:{defaultValue:null,description:"",name:"borderLeftColor",required:!1,type:{name:"string"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"number"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},borderRightColor:{defaultValue:null,description:"",name:"borderRightColor",required:!1,type:{name:"string"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"number"}},borderStartColor:{defaultValue:null,description:"",name:"borderStartColor",required:!1,type:{name:"string"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'"solid" | "dotted" | "dashed"'}},borderTopColor:{defaultValue:null,description:"",name:"borderTopColor",required:!1,type:{name:"string"}},borderTopEndRadius:{defaultValue:null,description:"",name:"borderTopEndRadius",required:!1,type:{name:"number"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"number"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"number"}},borderTopStartRadius:{defaultValue:null,description:"",name:"borderTopStartRadius",required:!1,type:{name:"number"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around"'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"FlexAlignType"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "baseline" | "auto"'}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:"number"}},borderEndWidth:{defaultValue:null,description:"",name:"borderEndWidth",required:!1,type:{name:"ReactText"}},borderStartWidth:{defaultValue:null,description:"",name:"borderStartWidth",required:!1,type:{name:"ReactText"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactText"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'"flex" | "none"'}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"ReactText"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"number"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ReactText"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'"row" | "column" | "row-reverse" | "column-reverse"'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"number"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"number"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'"wrap" | "nowrap" | "wrap-reverse"'}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactText"}},marginVertical:{defaultValue:null,description:"",name:"marginVertical",required:!1,type:{name:"ReactText"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ReactText"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ReactText"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ReactText"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ReactText"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'"visible" | "hidden" | "scroll"'}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"absolute" | "relative"'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactText"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"ReactText"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactText"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ReactText"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},direction:{defaultValue:null,description:"@platform ios",name:"direction",required:!1,type:{name:'"inherit" | "ltr" | "rtl"'}},shadowColor:{defaultValue:null,description:"",name:"shadowColor",required:!1,type:{name:"string"}},shadowOffset:{defaultValue:null,description:"",name:"shadowOffset",required:!1,type:{name:"{ width: number; height: number; }"}},shadowOpacity:{defaultValue:null,description:"",name:"shadowOpacity",required:!1,type:{name:"number"}},shadowRadius:{defaultValue:null,description:"",name:"shadowRadius",required:!1,type:{name:"number"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"(PerpectiveTransform | RotateTransform | RotateXTransform | RotateYTransform | RotateZTransform | ScaleTransform | ScaleXTransform | ScaleYTransform | TranslateXTransform | TranslateYTransform | SkewXTransform | SkewYTransform)[]"}},transformMatrix:{defaultValue:null,description:"",name:"transformMatrix",required:!1,type:{name:"number[]"}},rotation:{defaultValue:null,description:"",name:"rotation",required:!1,type:{name:"number"}},scaleX:{defaultValue:null,description:"",name:"scaleX",required:!1,type:{name:"number"}},scaleY:{defaultValue:null,description:"",name:"scaleY",required:!1,type:{name:"number"}},translateX:{defaultValue:null,description:"",name:"translateX",required:!1,type:{name:"number"}},translateY:{defaultValue:null,description:"",name:"translateY",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Spacing.tsx#Spacing"]={docgenInfo:m.__docgenInfo,name:"Spacing",path:"src/components/Layout/Spacing.tsx#Spacing"})}catch(s){}},"./src/components/Layout/index.ts":function(e,a,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"Box",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(a,"IBoxProps",{enumerable:!0,get:function(){return t.IBoxProps}}),Object.defineProperty(a,"Spacing",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(a,"ISpacingProps",{enumerable:!0,get:function(){return i.ISpacingProps}});var t=n(r("./src/components/Layout/Box.tsx")),i=n(r("./src/components/Layout/Spacing.tsx"));try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{elevation:{defaultValue:null,description:"Sets the elevation of a view, using Android's underlying\n[elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).\nThis adds a drop shadow to the item and affects z-order for overlapping views.\nOnly supported on Android 5.0+, has no effect on earlier versions.",name:"elevation",required:!1,type:{name:"number"}},marginX:{defaultValue:null,description:"",name:"marginX",required:!1,type:{name:"GridScale"}},marginY:{defaultValue:null,description:"",name:"marginY",required:!1,type:{name:"GridScale"}},paddingX:{defaultValue:null,description:"",name:"paddingX",required:!1,type:{name:"GridScale"}},paddingY:{defaultValue:null,description:"",name:"paddingY",required:!1,type:{name:"GridScale"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"Shape"}},backfaceVisibility:{defaultValue:null,description:"",name:"backfaceVisibility",required:!1,type:{name:'"visible" | "hidden"'}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},borderBottomColor:{defaultValue:null,description:"",name:"borderBottomColor",required:!1,type:{name:"string"}},borderBottomEndRadius:{defaultValue:null,description:"",name:"borderBottomEndRadius",required:!1,type:{name:"number"}},borderBottomLeftRadius:{defaultValue:null,description:"",name:"borderBottomLeftRadius",required:!1,type:{name:"number"}},borderBottomRightRadius:{defaultValue:null,description:"",name:"borderBottomRightRadius",required:!1,type:{name:"number"}},borderBottomStartRadius:{defaultValue:null,description:"",name:"borderBottomStartRadius",required:!1,type:{name:"number"}},borderBottomWidth:{defaultValue:null,description:"",name:"borderBottomWidth",required:!1,type:{name:"number"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderEndColor:{defaultValue:null,description:"",name:"borderEndColor",required:!1,type:{name:"string"}},borderLeftColor:{defaultValue:null,description:"",name:"borderLeftColor",required:!1,type:{name:"string"}},borderLeftWidth:{defaultValue:null,description:"",name:"borderLeftWidth",required:!1,type:{name:"number"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"number"}},borderRightColor:{defaultValue:null,description:"",name:"borderRightColor",required:!1,type:{name:"string"}},borderRightWidth:{defaultValue:null,description:"",name:"borderRightWidth",required:!1,type:{name:"number"}},borderStartColor:{defaultValue:null,description:"",name:"borderStartColor",required:!1,type:{name:"string"}},borderStyle:{defaultValue:null,description:"",name:"borderStyle",required:!1,type:{name:'"solid" | "dotted" | "dashed"'}},borderTopColor:{defaultValue:null,description:"",name:"borderTopColor",required:!1,type:{name:"string"}},borderTopEndRadius:{defaultValue:null,description:"",name:"borderTopEndRadius",required:!1,type:{name:"number"}},borderTopLeftRadius:{defaultValue:null,description:"",name:"borderTopLeftRadius",required:!1,type:{name:"number"}},borderTopRightRadius:{defaultValue:null,description:"",name:"borderTopRightRadius",required:!1,type:{name:"number"}},borderTopStartRadius:{defaultValue:null,description:"",name:"borderTopStartRadius",required:!1,type:{name:"number"}},borderTopWidth:{defaultValue:null,description:"",name:"borderTopWidth",required:!1,type:{name:"number"}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"number"}},opacity:{defaultValue:null,description:"",name:"opacity",required:!1,type:{name:"number"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around"'}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"FlexAlignType"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "stretch" | "baseline" | "auto"'}},aspectRatio:{defaultValue:null,description:"",name:"aspectRatio",required:!1,type:{name:"number"}},borderEndWidth:{defaultValue:null,description:"",name:"borderEndWidth",required:!1,type:{name:"ReactText"}},borderStartWidth:{defaultValue:null,description:"",name:"borderStartWidth",required:!1,type:{name:"ReactText"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"ReactText"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:'"flex" | "none"'}},end:{defaultValue:null,description:"",name:"end",required:!1,type:{name:"ReactText"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"number"}},flexBasis:{defaultValue:null,description:"",name:"flexBasis",required:!1,type:{name:"ReactText"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:'"row" | "column" | "row-reverse" | "column-reverse"'}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"number"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"number"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:'"wrap" | "nowrap" | "wrap-reverse"'}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"GridScale"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:'"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"'}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"ReactText"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"GridScale"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"GridScale"}},marginEnd:{defaultValue:null,description:"",name:"marginEnd",required:!1,type:{name:"GridScale"}},marginHorizontal:{defaultValue:null,description:"",name:"marginHorizontal",required:!1,type:{name:"GridScale"}},marginLeft:{defaultValue:null,description:"",name:"marginLeft",required:!1,type:{name:"GridScale"}},marginRight:{defaultValue:null,description:"",name:"marginRight",required:!1,type:{name:"GridScale"}},marginStart:{defaultValue:null,description:"",name:"marginStart",required:!1,type:{name:"GridScale"}},marginTop:{defaultValue:null,description:"",name:"marginTop",required:!1,type:{name:"GridScale"}},marginVertical:{defaultValue:null,description:"",name:"marginVertical",required:!1,type:{name:"ReactText"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ReactText"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ReactText"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ReactText"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ReactText"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:'"visible" | "hidden" | "scroll"'}},padding:{defaultValue:null,description:"",name:"padding",required:!1,type:{name:"GridScale"}},paddingBottom:{defaultValue:null,description:"",name:"paddingBottom",required:!1,type:{name:"GridScale"}},paddingEnd:{defaultValue:null,description:"",name:"paddingEnd",required:!1,type:{name:"GridScale"}},paddingHorizontal:{defaultValue:null,description:"",name:"paddingHorizontal",required:!1,type:{name:"GridScale"}},paddingLeft:{defaultValue:null,description:"",name:"paddingLeft",required:!1,type:{name:"GridScale"}},paddingRight:{defaultValue:null,description:"",name:"paddingRight",required:!1,type:{name:"GridScale"}},paddingStart:{defaultValue:null,description:"",name:"paddingStart",required:!1,type:{name:"GridScale"}},paddingTop:{defaultValue:null,description:"",name:"paddingTop",required:!1,type:{name:"GridScale"}},paddingVertical:{defaultValue:null,description:"",name:"paddingVertical",required:!1,type:{name:"GridScale"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:'"absolute" | "relative"'}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"ReactText"}},start:{defaultValue:null,description:"",name:"start",required:!1,type:{name:"ReactText"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"ReactText"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ReactText"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"number"}},direction:{defaultValue:null,description:"@platform ios",name:"direction",required:!1,type:{name:'"inherit" | "ltr" | "rtl"'}},shadowColor:{defaultValue:null,description:"",name:"shadowColor",required:!1,type:{name:"string"}},shadowOffset:{defaultValue:null,description:"",name:"shadowOffset",required:!1,type:{name:"{ width: number; height: number; }"}},shadowOpacity:{defaultValue:null,description:"",name:"shadowOpacity",required:!1,type:{name:"number"}},shadowRadius:{defaultValue:null,description:"",name:"shadowRadius",required:!1,type:{name:"number"}},transform:{defaultValue:null,description:"",name:"transform",required:!1,type:{name:"(PerpectiveTransform | RotateTransform | RotateXTransform | RotateYTransform | RotateZTransform | ScaleTransform | ScaleXTransform | ScaleYTransform | TranslateXTransform | TranslateYTransform | SkewXTransform | SkewYTransform)[]"}},transformMatrix:{defaultValue:null,description:"",name:"transformMatrix",required:!1,type:{name:"number[]"}},rotation:{defaultValue:null,description:"",name:"rotation",required:!1,type:{name:"number"}},scaleX:{defaultValue:null,description:"",name:"scaleX",required:!1,type:{name:"number"}},scaleY:{defaultValue:null,description:"",name:"scaleY",required:!1,type:{name:"number"}},translateX:{defaultValue:null,description:"",name:"translateX",required:!1,type:{name:"number"}},translateY:{defaultValue:null,description:"",name:"translateY",required:!1,type:{name:"number"}},gridPointMultiplier:{defaultValue:null,description:"",name:"gridPointMultiplier",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/index.ts#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Layout/index.ts#__class"})}catch(d){}}}]);
//# sourceMappingURL=2.a25c3d173b827ca62ae8.js.map