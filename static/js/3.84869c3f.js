(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/components/Button/BackButton.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.BackButton=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=n(o("./node_modules/react/index.js")),l=o("./src/icons/index.ts"),i=o("./src/theme/index.ts"),u=o("./src/components/Button/Button.tsx"),c=function(e){var t=(0,i.useTheme)();return a.createElement(u.Button,(0,s.default)({appearance:"minimal",isInline:!0,iconBefore:a.createElement(l.Icon,{name:"arrow-left",size:24,color:t.colors.text.default}),size:"small"},e))};t.BackButton=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackButton",filename:"src/components/Button/BackButton.tsx"}})},"./src/components/Button/Button.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));"undefined"!==typeof ButtonColorProps&&ButtonColorProps&&ButtonColorProps===Object(ButtonColorProps)&&Object.isExtensible(ButtonColorProps)&&Object.defineProperty(ButtonColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearances&&ButtonAppearances&&ButtonAppearances===Object(ButtonAppearances)&&Object.isExtensible(ButtonAppearances)&&Object.defineProperty(ButtonAppearances,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearance&&ButtonAppearance&&ButtonAppearance===Object(ButtonAppearance)&&Object.isExtensible(ButtonAppearance)&&Object.defineProperty(ButtonAppearance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearance",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof SizeStyles&&SizeStyles&&SizeStyles===Object(SizeStyles)&&Object.isExtensible(SizeStyles)&&Object.defineProperty(SizeStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSizes&&ButtonSizes&&ButtonSizes===Object(ButtonSizes)&&Object.isExtensible(ButtonSizes)&&Object.defineProperty(ButtonSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSizes",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSize&&ButtonSize&&ButtonSize===Object(ButtonSize)&&Object.isExtensible(ButtonSize)&&Object.defineProperty(ButtonSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSize",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonVariables&&ButtonVariables&&ButtonVariables===Object(ButtonVariables)&&Object.isExtensible(ButtonVariables)&&Object.defineProperty(ButtonVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonVariables",filename:"src/components/Button/Button.styles.ts"}});var a=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.content,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.content,color:e.colors.text.danger,focusColor:e.colors.background.greyDefault},primary:{backgroundColor:e.colors.background.content,color:e.colors.text.primary,focusColor:e.colors.background.greyDefault},secondary:{backgroundColor:e.colors.background.content,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.greyDefault}},primary:{default:{backgroundColor:e.colors.background.greyLight,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.greyDefault,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.dangerDefault,borderColor:e.colors.border.danger,color:e.colors.text.white,focusColor:e.colors.background.dangerDark,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.primaryDefault,borderColor:e.colors.border.primary,color:e.colors.text.white,focusColor:e.colors.background.primaryDark,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.secondaryDefault,borderColor:e.colors.border.secondary,color:e.colors.text.white,focusColor:e.colors.background.secondaryDark,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondaryLight}}},disabled:{backgroundColor:e.colors.background.greyDark,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:2*e.controlPaddings.small,paddingRight:2*e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:2*e.controlPaddings.medium,paddingRight:2*e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||20,height:e.controlHeights.large,paddingLeft:2*e.controlPaddings.large,paddingRight:2*e.controlPaddings.large}}}};t.getButtonVariables=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonVariables",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStyles&&ButtonStyles&&ButtonStyles===Object(ButtonStyles)&&Object.isExtensible(ButtonStyles)&&Object.defineProperty(ButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStylesProps&&ButtonStylesProps&&ButtonStylesProps===Object(ButtonStylesProps)&&Object.isExtensible(ButtonStylesProps)&&Object.defineProperty(ButtonStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStylesProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof GetButtonStyles&&GetButtonStyles&&GetButtonStyles===Object(GetButtonStyles)&&Object.isExtensible(GetButtonStyles)&&Object.defineProperty(GetButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetButtonStyles",filename:"src/components/Button/Button.styles.ts"}});var l=function(e,t){var o=e.appearance,n=e.color,l=e.size,i=e.isDisabled,u=e.isLoading,c=e.isInline,d=a(t),p=d.appearances,b=d.sizes,m=d.disabled,f=(0,s.default)(d,["appearances","sizes","disabled"]),y=p[o][n],j=y.color,g=y.focusColor,v=y.loadingBackgroundColor,_=(0,s.default)(y,["color","focusColor","loadingBackgroundColor"]),P=b[l],h=P.fontSize,M=(0,s.default)(P,["fontSize"]),x=m.color,B=(0,s.default)(m,["color"]);return{buttonStyle:(0,r.default)({},i?(0,r.default)({},B,M):(0,r.default)({},M,f,_,u?{backgroundColor:v}:{}),c?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:g,textStyle:{alignItems:"center",color:i?x:j,display:"flex",fontSize:h,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};t.getButtonStyles=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonStyles",filename:"src/components/Button/Button.styles.ts"}})},"./src/components/Button/Button.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),u=o("./src/theme/index.ts"),c=o("./src/utils/mergeStyles.ts"),d=o("./src/components/Layout/index.ts"),p=o("./src/components/Loading/index.ts"),b=o("./src/components/Typography/index.ts"),m=o("./src/components/Button/Button.styles.ts");"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var f=function(e){var t=e.appearance,o=void 0===t?"primary":t,n=(e.title,e.color),r=void 0===n?"default":n,p=e.getStyles,b=(e.icon,e.iconAfter),f=e.iconBefore,j=(e.iconLoading,e.isActive,e.isDisabled),g=void 0!==j&&j,v=e.isInline,_=void 0!==v&&v,P=e.isLoading,h=void 0!==P&&P,M=e.onPress,x=void 0===M?function(){}:M,B=e.size,O=void 0===B?"medium":B,C=e.testID,w=(0,a.default)(e,["appearance","title","color","getStyles","icon","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","testID"]),E=(0,u.useTheme)(),S=(0,c.mergeStyles)(m.getButtonStyles,p)({appearance:o,color:r,isDisabled:g,isInline:_,isLoading:h,size:O},E),R=S.buttonStyle,k=S.textStyle,D=S.focusColor;return l.createElement(i.TouchableHighlight,(0,s.default)({accessible:!0,accessibilityRole:"button",underlayColor:D,disabled:!(!g&&!h),onPress:x,style:R,testID:C},w),l.createElement(i.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},f,l.createElement(d.Spacing,{paddingLeft:f?1:0,paddingRight:b?1:0},l.createElement(y,(0,s.default)({},e,{textStyle:k}))),b))};t.Button=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonContentProps&&ButtonContentProps&&ButtonContentProps===Object(ButtonContentProps)&&Object.isExtensible(ButtonContentProps)&&Object.defineProperty(ButtonContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonContentProps",filename:"src/components/Button/Button.tsx"}});var y=function(e){var t=e.isLoading,o=e.iconLoading,n=e.icon,r=e.title,s=e.textStyle;return t?o||l.createElement(p.LoadingDots,{color:s.color}):n||(r?l.createElement(b.Text,{getStyles:function(){return{textStyle:s}}},r):null)}},"./src/components/Button/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Button/Button.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var r=o("./src/components/Button/BackButton.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Helpers/Responsive.tsx":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Responsive=t.isWindowBelowMaxWidth=t.isWindowAboveMinWidth=void 0;var n=o("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof ResponsiveRenderPropType&&ResponsiveRenderPropType&&ResponsiveRenderPropType===Object(ResponsiveRenderPropType)&&Object.isExtensible(ResponsiveRenderPropType)&&Object.defineProperty(ResponsiveRenderPropType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveRenderPropType",filename:"src/components/Helpers/Responsive.tsx"}}),"undefined"!==typeof ResponsiveChildrenProps&&ResponsiveChildrenProps&&ResponsiveChildrenProps===Object(ResponsiveChildrenProps)&&Object.isExtensible(ResponsiveChildrenProps)&&Object.defineProperty(ResponsiveChildrenProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveChildrenProps",filename:"src/components/Helpers/Responsive.tsx"}}),"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/Helpers/Responsive.tsx"}});var r=function(e){return n.Dimensions.get("window").width>e};t.isWindowAboveMinWidth=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isWindowAboveMinWidth",filename:"src/components/Helpers/Responsive.tsx"}});var s=function(e){return n.Dimensions.get("window").width<e};t.isWindowBelowMaxWidth=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isWindowBelowMaxWidth",filename:"src/components/Helpers/Responsive.tsx"}});var a=function(e){var t=e.children,o=e.minWidth,n=e.maxWidth,a=!0,l=!0;o&&(a=r(o)),n&&(l=s(n));var i=a&&l;return"function"===typeof t?t({matches:i}):i?t:null};t.Responsive=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Responsive",filename:"src/components/Helpers/Responsive.tsx"}})},"./src/components/Helpers/ViewMeasure.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ViewMeasure=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),u=o("./src/components/Helpers/useMeasure.ts");"undefined"!==typeof ViewMeasureRenderPropType&&ViewMeasureRenderPropType&&ViewMeasureRenderPropType===Object(ViewMeasureRenderPropType)&&Object.isExtensible(ViewMeasureRenderPropType)&&Object.defineProperty(ViewMeasureRenderPropType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureRenderPropType",filename:"src/components/Helpers/ViewMeasure.tsx"}}),"undefined"!==typeof ViewMeasureProps&&ViewMeasureProps&&ViewMeasureProps===Object(ViewMeasureProps)&&Object.isExtensible(ViewMeasureProps)&&Object.defineProperty(ViewMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureProps",filename:"src/components/Helpers/ViewMeasure.tsx"}});var c=function(e){var t=e.onMeasure,o=e.children,n=(0,a.default)(e,["onMeasure","children"]),r="function"===typeof o,c=(0,u.useMeasure)({onMeasure:t}),d=c.forwardRef,p=c.onLayout;return l.createElement(i.View,(0,s.default)({ref:d,onLayout:p,children:r?o(measurements):o},n))};t.ViewMeasure=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasure",filename:"src/components/Helpers/ViewMeasure.tsx"}})},"./src/components/Helpers/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Helpers/ViewMeasure.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var r=o("./src/components/Helpers/Responsive.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var s=o("./src/components/Helpers/useMeasure.ts");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var a=o("./src/components/Helpers/useElement.ts");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var l=o("./src/components/Helpers/useFreezeBody.ts");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},"./src/components/Helpers/useElement.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useElement=void 0;var r=n(o("./node_modules/react/index.js")),s=function(e){var t=r.useRef(null);r.useEffect(function(){var o,n=function(e){var t=document.createElement("div");return t.setAttribute("id",e),t}(e);return o=n,document.body.lastElementChild&&document.body.insertBefore(o,document.body.lastElementChild.nextElementSibling),t.current&&n.appendChild(t.current),function(){t.current&&t.current.remove(),-1===n.childNodes.length&&n.remove()}},[]);return t.current||(t.current=document.createElement("div")),t.current};t.useElement=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/components/Helpers/useElement.ts"}})},"./src/components/Helpers/useFreezeBody.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useFreezeBody=void 0;var r=n(o("./node_modules/react/index.js")),s=function(e){var t=e.isFrozen;r.useEffect(function(){var e=function(){document.body.style.overflow="",document.body.style.height=""};return t?(document.body.style.overflow="hidden",document.body.style.height="100vh"):e(),function(){return e()}},[t])};t.useFreezeBody=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useFreezeBody",filename:"src/components/Helpers/useFreezeBody.ts"}})},"./src/components/Helpers/useMeasure.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useMeasure=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=r(o("./node_modules/@babel/runtime/helpers/slicedToArray.js")),l=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/components/Helpers/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/components/Helpers/useMeasure.ts"}});var u=function(e){var t=l.createRef(),o=e.onMeasure,n=l.useState({height:0,pageX:0,pageY:0,width:0,x:0,y:0}),r=(0,a.default)(n,2),u=r[0],c=r[1],d=function(e){i.UIManager.measure((0,i.findNodeHandle)(t.current),function(t,n,r,a,l,i){var d=(0,s.default)({},u,e,{pageX:l,pageY:i});c(d),o&&o(d)})};return{forwardRef:t,measurements:u,onLayout:function(e){var t=e.nativeEvent.layout;d(t)},onMeasure:d}};t.useMeasure=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/components/Helpers/useMeasure.ts"}})},"./src/components/Loading/LoadingDots.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingDots=void 0;var s=r(o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js")),a=r(o("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),l=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),u=o("./node_modules/react-spring/native.cjs.js"),c=(0,u.animated)(i.View);"undefined"!==typeof LoadingDotsProps&&LoadingDotsProps&&LoadingDotsProps===Object(LoadingDotsProps)&&Object.isExtensible(LoadingDotsProps)&&Object.defineProperty(LoadingDotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDotsProps",filename:"src/components/Loading/LoadingDots.tsx"}});var d=["1","2","3"],p=function(e){var t=e.size,o=void 0===t?10:t,n=e.color,r=void 0===n?"#aaa":n,p=(0,u.useTrail)(d.length,{config:{duration:800},from:{opacity:0},reset:!0,to:function(){var e=(0,a.default)(s.default.mark(function e(t){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t({opacity:1});case 3:return e.next=5,t({opacity:0});case 5:e.next=0;break;case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return l.createElement(i.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},p.map(function(e,t){return l.createElement(c,{key:d[t],style:{backgroundColor:r,borderRadius:"50%",height:o,marginLeft:3,marginRight:3,opacity:e.opacity,width:o}})}))};t.LoadingDots=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDots",filename:"src/components/Loading/LoadingDots.tsx"}})},"./src/components/Loading/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Loading/LoadingDots.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Modal/CloseableModal.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.CloseableModal=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/react/index.js")),l=o("./node_modules/react-native-web/dist/index.js"),i=o("./src/components/Modal/index.ts"),u=o("./src/icons/index.ts"),c=o("./src/theme/index.ts"),d=o("./src/components/Layout/index.ts"),p=o("./src/components/Modal/ModalContent.tsx");"undefined"!==typeof CloseableModalProps&&CloseableModalProps&&CloseableModalProps===Object(CloseableModalProps)&&Object.isExtensible(CloseableModalProps)&&Object.defineProperty(CloseableModalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseableModalProps",filename:"src/components/Modal/CloseableModal.tsx"}});var b=function(e){var t=e.children,o=e.rightSide,n=e.onClose,r=(0,s.default)(e,["children","rightSide","onClose"]),b=(0,c.useTheme)();return a.createElement(i.Modal,r,a.createElement(p.ModalContent,null,a.createElement(d.Box,{flexDirection:"row",justifyContent:"space-between"},a.createElement(l.TouchableOpacity,{style:{width:56,height:60,justifyContent:"center"},onPress:function(e){e.preventDefault(),n()}},a.createElement(l.View,{style:{paddingHorizontal:8}},a.createElement(u.Icon,{color:b.colors.text.default,size:40,name:"x"}))),o),t))};t.CloseableModal=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CloseableModal",filename:"src/components/Modal/CloseableModal.tsx"}})},"./src/components/Modal/FormModal.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.FormModal=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/extends.js")),a=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(o("./node_modules/react/index.js")),i=o("./node_modules/react-native-web/dist/index.js"),u=o("./src/components/Typography/index.ts"),c=o("./src/components/Modal/CloseableModal.tsx");"undefined"!==typeof FormModalProps&&FormModalProps&&FormModalProps===Object(FormModalProps)&&Object.isExtensible(FormModalProps)&&Object.defineProperty(FormModalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormModalProps",filename:"src/components/Modal/FormModal.tsx"}});var d=function(e){var t=e.children,o=e.onClose,n=e.onClear,r=e.clearText,d=void 0===r?"Clear":r,p=(0,a.default)(e,["children","onClose","onClear","clearText"]);return l.createElement(c.CloseableModal,(0,s.default)({onClose:o,rightSide:l.createElement(i.TouchableOpacity,{onPress:function(e){e.preventDefault(),n()}},l.createElement(i.View,{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:16}},l.createElement(u.Text,{isBold:!0},d)))},p),t)};t.FormModal=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormModal",filename:"src/components/Modal/FormModal.tsx"}})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryModal=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=r(o("./node_modules/@babel/runtime/helpers/extends.js")),l=r(o("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),u=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),c=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),d=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),b=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),m=n(o("./node_modules/react/index.js")),f=o("./src/components/Modal/ModalBase.web.tsx"),y=0,j=function(e){function t(){var e,o;(0,u.default)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(o=(0,d.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(r)))).modalId=++y,o.componentDidUpdate=function(e){var t=o.props.visible;e.visible!==t&&(t?o.updateBrowserHistory():o.handleManuallyClosed())},o.componentWillUnmount=function(){o.clearBrowserState()},o.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]||history.pushState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,l.default)({},o.modalId,!0))}),""),window.addEventListener("popstate",o.handlePopstate,!1)},o.handlePopstate=function(e){var t=o.props,n=t.visible,r=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[o.modalId]||!r||(o.clearBrowserState(),r()),!n&&e.state&&e.state.modal&&e.state.modal[o.modalId]&&history.go(-1)},o.handleEscapeKey=function(){var e=o.props.onRequestClose;(history.state||history.state.modal||history.state.modal[o.modalId])&&e&&(o.clearBrowserState(),e(),history.go(-1))},o.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]&&(o.clearBrowserState(),history.go(-1))},o.clearBrowserState=function(){history.replaceState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,l.default)({},o.modalId,!1))}),""),window.removeEventListener("popstate",o.handlePopstate,!1)},o}return(0,b.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=(0,a.default)({},this.props);return m.createElement(f.ModalBase,(0,a.default)({},e,{onRequestClose:this.handleEscapeKey}))}}]),t}(m.Component),g=function(e){var t=e.useHistory,o=void 0!==t&&t,n=(0,s.default)(e,["useHistory"]);return o?m.createElement(j,n):m.createElement(f.ModalBase,n)};t.HistoryModal=g,g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/components/Modal/Modal.tsx":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Modal/HistoryModal.web.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Modal/ModalBase.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBase=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/slicedToArray.js")),a=r(o("./node_modules/focus-trap/index.js")),l=n(o("./node_modules/react/index.js")),i=n(o("./node_modules/react-dom/index.js")),u=o("./node_modules/react-spring/web.cjs.js"),c=o("./src/constants/Animation.ts"),d=o("./src/components/Helpers/index.ts"),p=function(e){var t=e.children,o=e.transparent,n=e.visible,r=e.isBackgroundScrollable,p=void 0!==r&&r,b=e.onRequestClose,m=e.animationType,f=void 0===m?"none":m,y=!1,j=(0,d.useElement)("modal"),g=l.useState(n),v=(0,s.default)(g,2),_=v[0],P=v[1],h=l.useRef(null),M=l.useRef(null);(0,d.useFreezeBody)({isFrozen:!(p||!n)}),l.useEffect(function(){var e=function(){M.current&&(M.current.deactivate(),M.current=null)};return n?(h.current&&!M.current&&(M.current=(0,a.default)(h.current,{initialFocus:h.current,onDeactivate:function(){b&&n&&!y&&b()}}),M.current.activate()),P(!0)):e(),function(){y=!0,e()}},[n]);var x=(0,u.useSpring)({onRest:function(){n||P(!1)},config:c.springDefaultConfig,opacity:"fade"===f?n?1:0:1,y:"slide"===f?n?0:100:0}),B=x.opacity,O=x.y;return i.createPortal(l.createElement(u.animated.div,{tabIndex:-1,ref:h,style:{backgroundColor:o?"transparent":"white",bottom:0,display:_?"flex":"none",flexDirection:"column",left:0,opacity:B,position:p?"absolute":"fixed",right:0,top:0,transform:O.interpolate(function(e){return"translateY(".concat(e,"%)")}),zIndex:1e3}},n?t:null),j)};t.ModalBase=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}})},"./src/components/Modal/ModalContent.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContent=void 0;var r=n(o("./node_modules/react/index.js")),s=o("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof ModalContentProps&&ModalContentProps&&ModalContentProps===Object(ModalContentProps)&&Object.isExtensible(ModalContentProps)&&Object.defineProperty(ModalContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalContentProps",filename:"src/components/Modal/ModalContent.tsx"}});var a=function(e){var t=e.children;return r.createElement(s.View,{style:{height:"100%",marginLeft:"auto",marginRight:"auto",maxWidth:960}},t)};t.ModalContent=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalContent",filename:"src/components/Modal/ModalContent.tsx"}})},"./src/components/Modal/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n={Modal:!0,ModalProps:!0};Object.defineProperty(t,"Modal",{enumerable:!0,get:function(){return i.HistoryModal}}),Object.defineProperty(t,"ModalProps",{enumerable:!0,get:function(){return i.HistoryModalProps}});var r=o("./src/components/Modal/ModalBase.web.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}}))});var s=o("./src/components/Modal/HistoryModal.web.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}}))});var a=o("./src/components/Modal/FormModal.tsx");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))});var l=o("./src/components/Modal/CloseableModal.tsx");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(n,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}}))});var i=o("./src/components/Modal/Modal.tsx");"undefined"!==typeof ModalProps&&ModalProps&&ModalProps===Object(ModalProps)&&Object.isExtensible(ModalProps)&&Object.defineProperty(ModalProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalProps",filename:"src/components/Modal/index.ts"}}),"undefined"!==typeof Modal&&Modal&&Modal===Object(Modal)&&Object.isExtensible(Modal)&&Object.defineProperty(Modal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Modal",filename:"src/components/Modal/index.ts"}})},"./src/constants/Animation.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.springDefaultConfig=void 0;var o={friction:40,tension:400};t.springDefaultConfig=o,"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})},"./src/icons/Icon.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/react/index.js")),s=n(o("./node_modules/react-icons/fi/index.esm.js"));t.default=function(e){var t=e.name,o=e.color,n=e.size,a=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(a,{color:o,size:n})}},"./src/icons/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return r.default}});var r=n(o("./src/icons/Icon.web.tsx"));"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/icons/index.ts"}})}}]);
//# sourceMappingURL=3.60947c7ec53ed41ff970.js.map