(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/components/Alert/Alert.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getAlertStyles=t.alertVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=function(e){return{body:{flex:1},container:(0,a.default)({backgroundColor:e.colors.background.white,borderLeftWidth:5,borderRadius:e.controlBorderRadius.medium,display:"flex",flexDirection:"row",padding:16},e.elevations[2]),message:{},title:{},danger:{body:{},container:{borderLeftColor:e.colors.border.danger},message:{},title:{}},info:{body:{},container:{borderLeftColor:e.colors.border.info},message:{},title:{}},success:{body:{},container:{borderLeftColor:e.colors.border.success},message:{},title:{}},warning:{body:{},container:{borderLeftColor:e.colors.border.warning},message:{},title:{}}}};t.alertVariables=s;t.getAlertStyles=function(e,t){var o=e.intent,n=s(t),i=n.container,l=n.body,d=n.title,u=n.message,c=(0,r.default)(n,["container","body","title","message"])[o];return{bodyStyle:(0,a.default)({},l,c.body),containerStyle:(0,a.default)({},i,c.container),textStyle:(0,a.default)({},u,c.message),titleStyle:(0,a.default)({},d,c.title)}};try{s.displayName="alertVariables",s.__docgenInfo={description:"",displayName:"alertVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.styles.ts#alertVariables"]={docgenInfo:s.__docgenInfo,name:"alertVariables",path:"src/components/Alert/Alert.styles.ts#alertVariables"})}catch(i){}},"./src/components/Alert/Alert.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Alert=void 0;var r=n(o("./node_modules/react/index.js")),a=o("./node_modules/react-native-web/dist/index.js"),s=o("./src/icons/index.ts"),i=o("./src/theme/index.ts"),l=o("./src/utils/mergeStyles.ts"),d=o("./src/components/Layout/index.ts"),u=o("./src/components/Typography/index.ts"),c=o("./src/components/Alert/Alert.styles.ts"),m=(0,i.withTheme)(function(e){var t=e.title,o=e.description,n=e.component,i=e.onClose,m=e.isCloseable,p=void 0!==m&&m,f=e.icon,b=e.intent,g=void 0===b?"info":b,y=e.getStyles,h=e.theme,v=e.testID,_=(0,l.mergeStyles)(c.getAlertStyles,y)({intent:g},h),S=_.containerStyle,C=_.bodyStyle;return r.createElement(a.View,{style:S,testID:v},f||r.createElement(d.Spacing,{paddingRight:2,justifyContent:"center"},function(e,t){switch(e){case"success":return r.createElement(s.Icon,{name:"check-circle",size:24,color:t.colors.text.success});case"warning":return r.createElement(s.Icon,{name:"alert-triangle",size:24,color:t.colors.text.warning});case"danger":return r.createElement(s.Icon,{name:"alert-circle",size:24,color:t.colors.text.danger});default:return r.createElement(s.Icon,{name:"info",size:24,color:t.colors.text.info})}}(g,h)),n||r.createElement(a.View,{style:C},r.createElement(u.Text,{isBold:!0},t),r.createElement(u.Text,null,o)),p&&r.createElement(a.TouchableOpacity,{onPress:i},r.createElement(d.Spacing,{paddingLeft:2},r.createElement(s.Icon,{name:"x",size:24,color:h.colors.text.default}))))});t.Alert=m;var p=m;t.default=p},"./src/components/Alert/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Alert",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"AlertProps",{enumerable:!0,get:function(){return r.AlertProps}});var r=n(o("./src/components/Alert/Alert.tsx"))},"./src/components/Button/BackButton.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(o("./node_modules/@babel/runtime/helpers/extends.js")),s=n(o("./node_modules/react/index.js")),i=o("./src/icons/index.ts"),l=o("./src/theme/index.ts"),d=r(o("./src/components/Button/Button.tsx")),u=(0,l.withTheme)(function(e){var t=e.theme;return s.createElement(d.default,(0,a.default)({appearance:"minimal",isInline:!0,iconBefore:s.createElement(i.Icon,{name:"arrow-left",size:24,color:t.colors.text.default}),size:"small"},e))});t.default=u},"./src/components/Button/Button.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.white,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.white,color:e.colors.text.danger,focusColor:e.colors.background.greyDefault},primary:{backgroundColor:e.colors.background.white,color:e.colors.text.primary,focusColor:e.colors.background.greyDefault},secondary:{backgroundColor:e.colors.background.white,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.greyDefault}},primary:{default:{backgroundColor:e.colors.background.greyLight,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.greyDefault,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.dangerDefault,borderColor:e.colors.border.danger,color:"white",focusColor:e.colors.background.dangerDark,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.primaryDefault,borderColor:e.colors.border.primary,color:"white",focusColor:e.colors.background.primaryDark,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.secondaryDefault,borderColor:e.colors.border.secondary,color:"white",focusColor:e.colors.background.secondaryDark,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.white,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.white,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondaryLight}}},disabled:{backgroundColor:e.colors.background.greyDark,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||20,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};t.getButtonVariables=s;t.getButtonStyles=function(e,t){var o=e.appearance,n=e.color,i=e.size,l=e.isDisabled,d=e.isLoading,u=e.isInline,c=s(t),m=c.appearances,p=c.sizes,f=c.disabled,b=(0,a.default)(c,["appearances","sizes","disabled"]),g=m[o][n],y=g.color,h=g.focusColor,v=g.loadingBackgroundColor,_=(0,a.default)(g,["color","focusColor","loadingBackgroundColor"]),S=p[i],C=S.fontSize,x=(0,a.default)(S,["fontSize"]),T=f.color,j=(0,a.default)(f,["color"]);return{buttonStyle:(0,r.default)({},l?(0,r.default)({},j,x):(0,r.default)({},x,b,_,d?{backgroundColor:v}:{}),u?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:h,textStyle:{alignItems:"center",color:l?T:y,display:"flex",fontSize:C,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};try{s.displayName="getButtonVariables",s.__docgenInfo={description:"",displayName:"getButtonVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.styles.ts#getButtonVariables"]={docgenInfo:s.__docgenInfo,name:"getButtonVariables",path:"src/components/Button/Button.styles.ts#getButtonVariables"})}catch(i){}},"./src/components/Button/Button.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Button=void 0;var a=r(o("./node_modules/@babel/runtime/helpers/extends.js")),s=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(o("./node_modules/react/index.js")),l=o("./node_modules/react-native-web/dist/index.js"),d=o("./src/theme/index.ts"),u=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Layout/index.ts"),m=o("./src/components/Loading/index.ts"),p=o("./src/components/Typography/index.ts"),f=o("./src/components/Button/Button.styles.ts"),b=(0,d.withTheme)(function(e){var t=e.appearance,o=void 0===t?"primary":t,n=e.title,r=e.color,d=void 0===r?"default":r,b=e.getStyles,g=e.iconAfter,y=e.iconBefore,h=e.iconLoading,v=(e.isActive,e.isDisabled),_=void 0!==v&&v,S=e.isInline,C=void 0!==S&&S,x=e.isLoading,T=void 0!==x&&x,j=e.onPress,B=void 0===j?function(){}:j,P=e.size,R=void 0===P?"medium":P,O=e.theme,k=e.testID,D=(0,s.default)(e,["appearance","title","color","getStyles","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","theme","testID"]),w=(0,u.mergeStyles)(f.getButtonStyles,b)({appearance:o,color:d,isDisabled:_,isInline:C,isLoading:T,size:R},O),V=w.buttonStyle,E=w.textStyle,z=w.focusColor;return i.createElement(l.TouchableHighlight,(0,a.default)({accessible:!0,accessibilityRole:"button",underlayColor:z,disabled:!(!_&&!T),onPress:B,style:V,testID:k},D),i.createElement(l.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},y,i.createElement(c.Spacing,{paddingLeft:y?1:0,paddingRight:g?1:0},T?h||i.createElement(m.LoadingDots,{color:E.color}):n?i.createElement(p.Text,{getStyles:function(){return{textStyle:E}}},n):null),g))});t.Button=b;var g=b;t.default=g},"./src/components/Button/ButtonGroup.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=n(o("./node_modules/react/index.js")),i=o("./src/theme/index.ts"),l=o("./src/components/Layout/index.ts"),d={horizontal:"row",vertical:"column"},u=(0,i.withTheme)(function(e){var t=e.children,o=e.direction,n=void 0===o?"vertical":o,r=e.theme,i=s.Children.count(t),u=s.Children.map(t,function(e,t){if(!s.isValidElement(e))return e;var o=e,l=o.props.size||"medium",d=r.controlBorderRadius[l];return s.cloneElement(o,{getStyles:function(){return{buttonStyle:(0,a.default)({},"vertical"===n?(0,a.default)({borderBottomWidth:1,borderColor:r.colors.border.default,borderRadius:0,borderWidth:0,elevation:0},0===t&&{borderTopLeftRadius:d,borderTopRightRadius:d},i-1===t&&{borderBottomLeftRadius:d,borderBottomRightRadius:d,borderBottomWidth:0}):(0,a.default)({borderColor:r.colors.border.default,borderLeftWidth:0,borderRadius:0,elevation:0},0===t&&{borderBottomLeftRadius:d,borderTopLeftRadius:d},i-1===t&&{borderBottomRightRadius:d,borderTopRightRadius:d}))}}})});return s.createElement(l.Box,{flexDirection:d[n]},u)});t.default=u},"./src/components/Button/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ButtonProps",{enumerable:!0,get:function(){return a.ButtonProps}}),Object.defineProperty(t,"ButtonGroup",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ButtonGroupProps",{enumerable:!0,get:function(){return s.ButtonGroupProps}}),Object.defineProperty(t,"BackButton",{enumerable:!0,get:function(){return i.default}});var a=r(o("./src/components/Button/Button.tsx")),s=r(o("./src/components/Button/ButtonGroup.tsx")),i=n(o("./src/components/Button/BackButton.tsx"))},"./src/components/Loading/LoadingDots.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),i=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(o("./node_modules/react/index.js")),c=o("./node_modules/react-native-web/dist/index.js"),m=function(e){function t(e){var o;return(0,a.default)(this,t),(o=(0,i.default)(this,(0,l.default)(t).call(this,e))).animationState=void 0,o.animationState={dotOpacities:o.initializeDots(),shouldAnimate:!0,targetOpacity:1},o}return(0,d.default)(t,e),(0,s.default)(t,[{key:"initializeDots",value:function(){for(var e=[],t=0;t<this.props.numberOfDots;t++){var o=new c.Animated.Value(this.props.minOpacity);e.push(o)}return e}},{key:"componentDidMount",value:function(){this.animateDots.bind(this)(0)}},{key:"componentWillUnmount",value:function(){this.animationState.shouldAnimate=!1}},{key:"animateDots",value:function(e){if(this.animationState.shouldAnimate){if(e>=this.animationState.dotOpacities.length){e=0;var t=this.props.minOpacity;this.animationState.targetOpacity=this.animationState.targetOpacity===t?1:t}var o=e+1;c.Animated.timing(this.animationState.dotOpacities[e],{duration:this.props.duration,toValue:this.animationState.targetOpacity}).start(this.animateDots.bind(this,o))}}},{key:"render",value:function(){var e=this.props,t=e.size,o=e.color,n=this.animationState.dotOpacities.map(function(e,n){return u.createElement(c.Animated.View,{key:n,style:{backgroundColor:o,borderRadius:"50%",height:t,marginLeft:3,marginRight:3,opacity:e,width:t}})});return u.createElement(c.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},n)}}]),t}(u.Component);m.defaultProps={color:"#aaa",duration:300,minOpacity:0,numberOfDots:3,size:10};var p=m;t.default=p;try{m.displayName="LoadingDots",m.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:{value:"3"},description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"300"},description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:{value:"0"},description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#aaa"},description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/LoadingDots.tsx#LoadingDots"]={docgenInfo:m.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/LoadingDots.tsx#LoadingDots"})}catch(f){}},"./src/components/Loading/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadingDots",{enumerable:!0,get:function(){return r.default}});var r=n(o("./src/components/Loading/LoadingDots.tsx"))},"./src/components/Toast/Toast.mdx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=n(o("./node_modules/@babel/runtime/helpers/createClass.js")),i=n(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=n(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=n(o("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(o("./node_modules/react/index.js")),c=o("./node_modules/@mdx-js/tag/dist/index.js"),m=o("./node_modules/docz/dist/index.m.js"),p=o("./src/components/Toast/index.ts"),f=o("./src/components/Button/index.ts"),b=o("./src/components/Layout/index.ts"),g=n(o("./src/components/Toast/Toast.tsx")),y=function(e){function t(e){var o;return(0,a.default)(this,t),(o=(0,i.default)(this,(0,l.default)(t).call(this,e))).layout=null,o}return(0,d.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,o=(0,r.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"toast"}},"Toast"),u.default.createElement(c.MDXTag,{name:"p",components:t},"Composes ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Alert"),"."),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(m.Playground,{__position:0,__code:"<ToastProvider\n  getStyles={(props, theme) => ({\n    containerStyle: {},\n  })}\n>\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <Button\n        onPress={() => {\n          notify({\n            title: 'Title',\n            description: 'Description',\n            component: null, // A React Component that overrides title and description\n            isCloseable: true,\n            offset: 16,\n            duration: 3000,\n            // ...Alert props e.g. getStyles\n          })\n        }}\n        title=\"Use\"\n      />\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:o,ToastContext:p.ToastContext,ToastProvider:p.ToastProvider,Button:f.Button,Box:b.Box,Toast:g.default}},u.default.createElement(p.ToastProvider,{getStyles:function(e,t){return{containerStyle:{}}}},u.default.createElement(p.ToastContext.Consumer,null,function(e){var t=e.notify;return u.default.createElement(f.Button,{onPress:function(){t({title:"Title",description:"Description",component:null,isCloseable:!0,offset:16,duration:3e3})},title:"Use"})}))),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"variants"}},"Variants"),u.default.createElement(m.Playground,{__position:1,__code:"<ToastProvider>\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <>\n        <Button\n          onPress={() =>\n            notify({\n              title: 'Title',\n              description: 'Description',\n              isCloseable: true,\n            })\n          }\n          title=\"Open default toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'success',\n              title: 'Title',\n            })\n          }\n          color=\"primary\"\n          title=\"Open success toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'danger',\n              title: 'Title',\n            })\n          }\n          color=\"danger\"\n          title=\"Open danger toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'warning',\n              title: 'Title',\n            })\n          }\n          color=\"secondary\"\n          title=\"Open warning toast\"\n        />\n      </>\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:o,ToastContext:p.ToastContext,ToastProvider:p.ToastProvider,Button:f.Button,Box:b.Box,Toast:g.default}},u.default.createElement(p.ToastProvider,null,u.default.createElement(p.ToastContext.Consumer,null,function(e){var t=e.notify;return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.Button,{onPress:function(){return t({title:"Title",description:"Description",isCloseable:!0})},title:"Open default toast"}),u.default.createElement(f.Button,{onPress:function(){return t({description:"Description",intent:"success",title:"Title"})},color:"primary",title:"Open success toast"}),u.default.createElement(f.Button,{onPress:function(){return t({description:"Description",intent:"danger",title:"Title"})},color:"danger",title:"Open danger toast"}),u.default.createElement(f.Button,{onPress:function(){return t({description:"Description",intent:"warning",title:"Title"})},color:"secondary",title:"Open warning toast"}))}))),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"props"}},"Props"),u.default.createElement(m.PropsTable,{of:g.default}))}}]),t}(u.default.Component);t.default=y},"./src/components/Toast/Toast.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getToastStyles=t.getToastVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=o("./node_modules/react-native-web/dist/index.js"),s=function(e){return{base:(0,r.default)({backgroundColor:e.colors.background.white,borderRadius:e.controlBorderRadius.medium,paddingBottom:16,paddingLeft:16,paddingRight:16,paddingTop:16},e.elevations[2]),backgroundDanger:{backgroundColor:e.colors.background.dangerDefault},textDanger:{color:e.colors.text.white},backgroundInfo:{backgroundColor:e.colors.background.white},textInfo:{color:e.colors.text.default},backgroundSuccess:{backgroundColor:e.colors.background.successDefault},textSuccess:{color:e.colors.text.white},backgroundWarning:{backgroundColor:e.colors.background.warningDefault},textWarning:{color:e.colors.text.white},container:{left:32,marginBottom:0,marginLeft:"auto",marginRight:"auto",marginTop:0,maxWidth:560,position:"web"===a.Platform.OS?"fixed":"absolute",right:32,top:10,zIndex:100}}};t.getToastVariables=s;t.getToastStyles=function(e,t){e.intent;return{containerStyle:s(t).container}};try{s.displayName="getToastVariables",s.__docgenInfo={description:"",displayName:"getToastVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.styles.ts#getToastVariables"]={docgenInfo:s.__docgenInfo,name:"getToastVariables",path:"src/components/Toast/Toast.styles.ts#getToastVariables"})}catch(i){}},"./src/components/Toast/Toast.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Toast=void 0;var a=r(o("./node_modules/@babel/runtime/helpers/extends.js")),s=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),d=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),m=n(o("./node_modules/react/index.js")),p=o("./node_modules/react-native-web/dist/index.js"),f=o("./src/theme/index.ts"),b=o("./src/components/Alert/index.ts"),g=500,y=function(e){function t(e){var o;return(0,i.default)(this,t),(o=(0,d.default)(this,(0,u.default)(t).call(this,e))).closeTimer=null,o.state={value:new p.Animated.Value(-g)},o}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onRemove,o=e.duration,n=void 0===o?3e3:o,r=e.offset,a=void 0===r?16:r,s=this.state.value;p.Animated.sequence([p.Animated.spring(s,{bounciness:8,speed:25,toValue:a}),p.Animated.delay(n),p.Animated.spring(s,{bounciness:8,speed:25,toValue:-g})]).start(function(){return t()})}},{key:"render",value:function(){var e=this.props,t=e.component,o=(e.offset,e.duration,e.id,e.onRemove),n=(0,s.default)(e,["component","offset","duration","id","onRemove"]);return m.createElement(p.Animated.View,{style:{transform:[{translateY:this.state.value}]}},t||m.createElement(b.Alert,(0,a.default)({},n,{onClose:o})))}}]),t}(m.Component),h=(0,f.withTheme)(y);t.Toast=h;var v=h;t.default=v},"./src/components/Toast/ToastContext.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ToastContext=void 0;var r=n(o("./node_modules/react/index.js")),a={id:"1",onRemove:function(){return null}},s={danger:function(){return a},notify:function(){return a},success:function(){return a},warning:function(){return a}},i=r.createContext(s);t.ToastContext=i},"./src/components/Toast/ToastProvider.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ToastProvider=void 0;var a=r(o("./node_modules/@babel/runtime/helpers/extends.js")),s=r(o("./node_modules/@babel/runtime/helpers/slicedToArray.js")),i=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=r(o("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),d=r(o("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=r(o("./node_modules/@babel/runtime/helpers/createClass.js")),c=r(o("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),m=r(o("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=r(o("./node_modules/@babel/runtime/helpers/inherits.js")),f=n(o("./node_modules/react/index.js")),b=o("./node_modules/react-native-web/dist/index.js"),g=o("./src/theme/index.ts"),y=o("./src/utils/mergeStyles.ts"),h=r(o("./src/components/Toast/Toast.tsx")),v=o("./src/components/Toast/Toast.styles.ts"),_=o("./src/components/Toast/ToastContext.ts"),S=function(e){return!!e.id},C=function(e){function t(e){var o;return(0,d.default)(this,t),(o=(0,c.default)(this,(0,m.default)(t).call(this,e))).removeToast=function(e){o.setState(function(t){return{toasts:t.toasts.filter(function(t){return t.id!==e})}})},o.notify=function(e){var t=o.createToastInstance(e);if(S(e)){var n=!0,r=!1,a=void 0;try{for(var s,i=o.state.toasts["function"===typeof Symbol&&"function"===typeof Symbol?Symbol.iterator:"@@iterator"]();!(n=(s=i.next()).done);n=!0){var d=s.value;String(d.id).startsWith(String(e.id))&&o.removeToast(d.id)}}catch(u){r=!0,a=u}finally{try{n||null==i.return||i.return()}finally{if(r)throw a}}}return o.setState(function(e){return{toasts:[].concat((0,l.default)(e.toasts.slice(1)),[t])}}),t},o.createToastInstance=function(e){var n=++t.idCounter,r=S(e)?"".concat(e.id,"-").concat(n):"".concat(n);return(0,i.default)({id:r,onRemove:function(){return o.removeToast(r)}},e)},o.state={toasts:[]},o}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.children,n=t.theme,r=t.getStyles,l=this.state.toasts,d=(0,s.default)(l,1)[0],u=(0,y.mergeStyles)(v.getToastStyles,r)({intent:"info"},n).containerStyle;return f.createElement(_.ToastContext.Provider,{value:{danger:function(t){return e.notify((0,i.default)({},t,{intent:"danger"}))},notify:function(t){return e.notify((0,i.default)({},t))},removeToast:function(t){return e.removeToast(t)},success:function(t){return e.notify((0,i.default)({},t,{intent:"success"}))},warning:function(t){return e.notify((0,i.default)({},t,{intent:"warning"}))}}},o,f.createElement(b.View,{style:u},d&&f.createElement(h.default,(0,a.default)({key:d.id},d))))}}]),t}(f.Component);t.ToastProvider=C,C.idCounter=0;var x=(0,g.withTheme)(C);t.default=x;try{C.displayName="ToastProvider",C.__docgenInfo={description:"",displayName:"ToastProvider",props:{theme:{defaultValue:null,description:"",name:"theme",required:!0,type:{name:"Theme"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetToastStyles, DeepPartial<ToastStyles>>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastProvider.tsx#ToastProvider"]={docgenInfo:C.__docgenInfo,name:"ToastProvider",path:"src/components/Toast/ToastProvider.tsx#ToastProvider"})}catch(T){}},"./src/components/Toast/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0});var r={ToastProvider:!0};Object.defineProperty(t,"ToastProvider",{enumerable:!0,get:function(){return s.default}});var a=o("./src/components/Toast/ToastContext.ts");Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(r,e)||Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}}))});var s=n(o("./src/components/Toast/ToastProvider.tsx"))},"./src/icons/Icon.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/react/index.js")),a=n(o("./node_modules/react-icons/fi/index.js"));t.default=function(e){var t=e.name,o=e.color,n=e.size,s=a["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(s,{color:o,size:n})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(s){}},"./src/icons/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return r.default}});var r=n(o("./src/icons/Icon.web.tsx"))}}]);
//# sourceMappingURL=18.86969e0292b67dd51c30.js.map