(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/components/Button/BackButton.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/extends.js")),l=n(t("./node_modules/react/index.js")),s=t("./src/icons/index.ts"),i=t("./src/theme/index.ts"),d=r(t("./src/components/Button/Button.tsx")),u=(0,i.withTheme)(function(e){var o=e.theme;return l.createElement(d.default,(0,a.default)({appearance:"minimal",isInline:!0,iconBefore:l.createElement(s.Icon,{name:"arrow-left",size:24,color:o.colors.text.default}),size:"small"},e))});o.default=u},"./src/components/Button/Button.styles.ts":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.getButtonStyles=o.getButtonVariables=void 0;var r=n(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.plain,color:e.colors.text.default,focusColor:e.colors.background.tint2},danger:{backgroundColor:e.colors.background.plain,color:e.colors.text.danger,focusColor:e.colors.background.tint2},primary:{backgroundColor:e.colors.background.plain,color:e.colors.text.primary,focusColor:e.colors.background.tint2},secondary:{backgroundColor:e.colors.background.plain,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.tint2}},primary:{default:{backgroundColor:e.colors.background.tint1,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.tint2,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.danger.default,borderColor:e.colors.border.danger,color:"white",focusColor:e.colors.background.danger.focus,loadingBackgroundColor:e.colors.background.danger.focusLight},primary:{backgroundColor:e.colors.background.primary.default,borderColor:e.colors.border.primary,color:"white",focusColor:e.colors.background.primary.focus,loadingBackgroundColor:e.colors.background.primary.focusLight},secondary:{backgroundColor:e.colors.background.secondary.default,borderColor:e.colors.border.secondary,color:"white",focusColor:e.colors.background.secondary.focus,loadingBackgroundColor:e.colors.background.secondary.focusLight}},outline:{default:{backgroundColor:e.colors.background.plain,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.tint2},danger:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.danger.focusLight},primary:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primary.focusLight},secondary:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondary.focusLight}}},disabled:{backgroundColor:e.colors.background.disabled,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}}}};o.getButtonVariables=l;o.getButtonStyles=function(e,o){var t=e.appearance,n=e.color,s=e.size,i=e.isDisabled,d=e.isLoading,u=e.isInline,c=l(o),m=c.appearances,p=c.sizes,f=c.disabled,b=(0,a.default)(c,["appearances","sizes","disabled"]),h=m[t][n],g=h.color,y=h.focusColor,_=h.loadingBackgroundColor,v=(0,a.default)(h,["color","focusColor","loadingBackgroundColor"]),C=p[s],S=C.fontSize,x=(0,a.default)(C,["fontSize"]),M=f.color,j=(0,a.default)(f,["color"]);return{buttonStyle:(0,r.default)({},i?(0,r.default)({},j,x):(0,r.default)({},x,b,v,d?{backgroundColor:_}:{}),u?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:y,textStyle:{alignItems:"center",color:i?M:g,display:"flex",fontSize:S,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};try{l.displayName="getButtonVariables",l.__docgenInfo={description:"",displayName:"getButtonVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.styles.ts#getButtonVariables"]={docgenInfo:l.__docgenInfo,name:"getButtonVariables",path:"src/components/Button/Button.styles.ts#getButtonVariables"})}catch(s){}},"./src/components/Button/Button.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=o.Button=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/extends.js")),l=r(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(t("./node_modules/react/index.js")),i=t("./node_modules/react-native-web/dist/index.js"),d=t("./src/theme/index.ts"),u=t("./src/utils/mergeStyles.ts"),c=t("./src/components/Layout/index.ts"),m=t("./src/components/Loading/index.ts"),p=t("./src/components/Typography/index.ts"),f=t("./src/components/Button/Button.styles.ts"),b=(0,d.withTheme)(function(e){var o=e.appearance,t=void 0===o?"primary":o,n=e.title,r=e.color,d=void 0===r?"default":r,b=e.getStyles,h=e.iconAfter,g=e.iconBefore,y=e.iconLoading,_=(e.isActive,e.isDisabled),v=void 0!==_&&_,C=e.isInline,S=void 0!==C&&C,x=e.isLoading,M=void 0!==x&&x,j=e.onPress,B=void 0===j?function(){}:j,O=e.size,R=void 0===O?"medium":O,w=e.theme,P=e.testID,k=(0,l.default)(e,["appearance","title","color","getStyles","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","theme","testID"]),E=(0,u.mergeStyles)(f.getButtonStyles,b)({appearance:t,color:d,isDisabled:v,isInline:S,isLoading:M,size:R},w),I=E.buttonStyle,L=E.textStyle,T=E.focusColor;return s.createElement(i.TouchableHighlight,(0,a.default)({accessible:!0,accessibilityRole:"button",underlayColor:T,disabled:!(!v&&!M),onPress:B,style:I,testID:P},k),s.createElement(i.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},g,s.createElement(c.Spacing,{paddingLeft:g?1:0,paddingRight:h?1:0},M?y||s.createElement(m.LoadingDots,{color:L.color}):n?s.createElement(p.Text,{getStyles:function(){return{textStyle:L}}},n):null),h))});o.Button=b;var h=b;o.default=h},"./src/components/Button/ButtonGroup.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=n(t("./node_modules/react/index.js")),s=t("./src/theme/index.ts"),i=t("./src/components/Layout/index.ts"),d={horizontal:"row",vertical:"column"},u=(0,s.withTheme)(function(e){var o=e.children,t=e.direction,n=void 0===t?"vertical":t,r=e.theme,s=l.Children.count(o),u=l.Children.map(o,function(e,o){if(!l.isValidElement(e))return e;var t=e,i=t.props.size||"medium",d=r.controlBorderRadius[i];return l.cloneElement(t,{getStyles:function(){return{buttonStyle:(0,a.default)({},"vertical"===n?(0,a.default)({borderBottomWidth:1,borderColor:r.colors.border.default,borderRadius:0,borderWidth:0,elevation:0},0===o&&{borderTopLeftRadius:d,borderTopRightRadius:d},s-1===o&&{borderBottomLeftRadius:d,borderBottomRightRadius:d,borderBottomWidth:0}):(0,a.default)({borderColor:r.colors.border.default,borderLeftWidth:0,borderRadius:0,elevation:0},0===o&&{borderBottomLeftRadius:d,borderTopLeftRadius:d},s-1===o&&{borderBottomRightRadius:d,borderTopRightRadius:d}))}}})});return l.createElement(i.Box,{flexDirection:d[n]},u)});o.default=u},"./src/components/Button/index.ts":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Button",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(o,"ButtonProps",{enumerable:!0,get:function(){return a.ButtonProps}}),Object.defineProperty(o,"ButtonGroup",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(o,"ButtonGroupProps",{enumerable:!0,get:function(){return l.ButtonGroupProps}}),Object.defineProperty(o,"BackButton",{enumerable:!0,get:function(){return s.default}});var a=r(t("./src/components/Button/Button.tsx")),l=r(t("./src/components/Button/ButtonGroup.tsx")),s=n(t("./src/components/Button/BackButton.tsx"))},"./src/components/Loading/LoadingDots.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(t("./node_modules/@babel/runtime/helpers/createClass.js")),s=r(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(t("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(t("./node_modules/react/index.js")),c=t("./node_modules/react-native-web/dist/index.js"),m=function(e){function o(e){var t;return(0,a.default)(this,o),(t=(0,s.default)(this,(0,i.default)(o).call(this,e))).animationState=void 0,t.animationState={dotOpacities:t.initializeDots(),shouldAnimate:!0,targetOpacity:1},t}return(0,d.default)(o,e),(0,l.default)(o,[{key:"initializeDots",value:function(){for(var e=[],o=0;o<this.props.numberOfDots;o++){var t=new c.Animated.Value(this.props.minOpacity);e.push(t)}return e}},{key:"componentDidMount",value:function(){this.animateDots.bind(this)(0)}},{key:"componentWillUnmount",value:function(){this.animationState.shouldAnimate=!1}},{key:"animateDots",value:function(e){if(this.animationState.shouldAnimate){if(e>=this.animationState.dotOpacities.length){e=0;var o=this.props.minOpacity;this.animationState.targetOpacity=this.animationState.targetOpacity===o?1:o}var t=e+1;c.Animated.timing(this.animationState.dotOpacities[e],{duration:this.props.duration,toValue:this.animationState.targetOpacity}).start(this.animateDots.bind(this,t))}}},{key:"render",value:function(){var e=this.props,o=e.size,t=e.color,n=this.animationState.dotOpacities.map(function(e,n){return u.createElement(c.Animated.View,{key:n,style:{backgroundColor:t,borderRadius:"50%",height:o,marginLeft:3,marginRight:3,opacity:e,width:o}})});return u.createElement(c.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},n)}}]),o}(u.Component);m.defaultProps={color:"#aaa",duration:300,minOpacity:0,numberOfDots:3,size:10};var p=m;o.default=p;try{m.displayName="LoadingDots",m.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:{value:"3"},description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"300"},description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:{value:"0"},description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#aaa"},description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/LoadingDots.tsx#LoadingDots"]={docgenInfo:m.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/LoadingDots.tsx#LoadingDots"})}catch(f){}},"./src/components/Loading/index.ts":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"LoadingDots",{enumerable:!0,get:function(){return r.default}});var r=n(t("./src/components/Loading/LoadingDots.tsx"))},"./src/components/Modal/CloseableModal.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=o.CloseableModal=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(t("./node_modules/react/index.js")),s=t("./node_modules/react-native-web/dist/index.js"),i=t("./src/components/Modal/index.ts"),d=t("./src/icons/index.ts"),u=t("./src/theme/index.ts"),c=t("./src/components/Layout/index.ts"),m=r(t("./src/components/Modal/ModalContent.tsx")),p=function(e){var o=e.children,t=e.rightSide,n=e.onClose,r=(0,a.default)(e,["children","rightSide","onClose"]),p=l.useContext(u.ThemeContext);return l.createElement(i.Modal,r,l.createElement(m.default,null,l.createElement(c.Box,{flexDirection:"row",justifyContent:"space-between"},l.createElement(s.TouchableOpacity,{style:{width:56,height:60,justifyContent:"center"},onPress:function(e){e.preventDefault(),n()}},l.createElement(s.View,{style:{paddingHorizontal:8}},l.createElement(d.Icon,{color:p.colors.text.default,size:40,name:"x"}))),t),o))};o.CloseableModal=p;var f=p;o.default=f;try{p.displayName="CloseableModal",p.__docgenInfo={description:"",displayName:"CloseableModal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},rightSide:{defaultValue:null,description:"",name:"rightSide",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/CloseableModal.tsx#CloseableModal"]={docgenInfo:p.__docgenInfo,name:"CloseableModal",path:"src/components/Modal/CloseableModal.tsx#CloseableModal"})}catch(b){}},"./src/components/Modal/FormModal.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=o.FormModal=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/extends.js")),l=r(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(t("./node_modules/react/index.js")),i=t("./node_modules/react-native-web/dist/index.js"),d=t("./src/components/Typography/index.ts"),u=r(t("./src/components/Modal/CloseableModal.tsx")),c=function(e){var o=e.children,t=e.onClose,n=e.onClear,r=e.clearText,c=void 0===r?"Clear":r,m=(0,l.default)(e,["children","onClose","onClear","clearText"]);return s.createElement(u.default,(0,a.default)({onClose:t,rightSide:s.createElement(i.TouchableOpacity,{onPress:function(e){e.preventDefault(),n()}},s.createElement(i.View,{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:16}},s.createElement(d.Text,{isBold:!0},c)))},m),o)};o.FormModal=c;var m=c;o.default=m;try{c.displayName="FormModal",c.__docgenInfo={description:"",displayName:"FormModal",props:{onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},clearText:{defaultValue:null,description:"",name:"clearText",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/FormModal.tsx#FormModal"]={docgenInfo:c.__docgenInfo,name:"FormModal",path:"src/components/Modal/FormModal.tsx#FormModal"})}catch(p){}},"./src/components/Modal/HistoryModal.web.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=r(t("./node_modules/@babel/runtime/helpers/extends.js")),s=r(t("./node_modules/@babel/runtime/helpers/defineProperty.js")),i=r(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),d=r(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=r(t("./node_modules/@babel/runtime/helpers/createClass.js")),c=r(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),m=r(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),p=r(t("./node_modules/@babel/runtime/helpers/inherits.js")),f=n(t("./node_modules/react/index.js")),b=r(t("./src/components/Modal/ModalBase.web.tsx")),h=0,g=function(e){function o(){var e,t;(0,d.default)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=(0,c.default)(this,(e=(0,m.default)(o)).call.apply(e,[this].concat(r)))).modalId=++h,t.componentDidUpdate=function(e){var o=t.props.visible;e.visible!==o&&(o?t.updateBrowserHistory():t.handleManuallyClosed())},t.componentWillUnmount=function(){t.clearBrowserState()},t.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[t.modalId]||history.pushState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,s.default)({},t.modalId,!0))}),""),window.addEventListener("popstate",t.handlePopstate,!1)},t.handlePopstate=function(e){var o=t.props,n=o.visible,r=o.onRequestClose;e.state&&e.state.modal&&e.state.modal[t.modalId]||!r||(t.clearBrowserState(),r()),!n&&e.state&&e.state.modal&&e.state.modal[t.modalId]&&history.go(-1)},t.handleEscapeKey=function(){var e=t.props.onRequestClose;(history.state||history.state.modal||history.state.modal[t.modalId])&&e&&(t.clearBrowserState(),e(),history.go(-1))},t.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[t.modalId]&&(t.clearBrowserState(),history.go(-1))},t.clearBrowserState=function(){history.replaceState((0,i.default)({},history.state,{modal:(0,i.default)({},history.state&&history.state.modal,(0,s.default)({},t.modalId,!1))}),""),window.removeEventListener("popstate",t.handlePopstate,!1)},t}return(0,p.default)(o,e),(0,u.default)(o,[{key:"render",value:function(){var e=(0,l.default)({},this.props);return f.createElement(b.default,(0,l.default)({},e,{onRequestClose:this.handleEscapeKey}))}}]),o}(f.PureComponent);o.default=function(e){var o=e.useHistory,t=void 0!==o&&o,n=(0,a.default)(e,["useHistory"]);return t?f.createElement(g,n):f.createElement(b.default,n)};try{HistoryModalweb.displayName="HistoryModalweb",HistoryModalweb.__docgenInfo={description:"",displayName:"HistoryModalweb",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/HistoryModal.web.tsx#HistoryModalweb"]={docgenInfo:HistoryModalweb.__docgenInfo,name:"HistoryModalweb",path:"src/components/Modal/HistoryModal.web.tsx#HistoryModalweb"})}catch(y){}},"./src/components/Modal/Modal.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"HistoryModal",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(o,"HistoryModalProps",{enumerable:!0,get:function(){return r.HistoryModalProps}});var r=n(t("./src/components/Modal/HistoryModal.web.tsx"))},"./src/components/Modal/ModalBase.web.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=r(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(t("./node_modules/@babel/runtime/helpers/createClass.js")),s=r(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(t("./node_modules/@babel/runtime/helpers/inherits.js")),u=r(t("./node_modules/focus-trap/index.js")),c=n(t("./node_modules/react/index.js")),m=n(t("./node_modules/react-dom/index.js")),p=function(e){function o(e){var t;return(0,a.default)(this,o),(t=(0,s.default)(this,(0,i.default)(o).call(this,e))).el=void 0,t.modalRoot=void 0,t.focusTrap=void 0,t.isUnmounting=!1,t.content=c.createRef(),t.freezeBody=function(){document.body.style.overflow="hidden",document.body.style.height="100vh"},t.unfreezeBody=function(){document.body.style.overflow="",document.body.style.height=""},t.activateFocus=function(){var e=t.props.onRequestClose;t.content.current&&!t.focusTrap&&(t.focusTrap=(0,u.default)(t.content.current,{initialFocus:t.content.current,onDeactivate:function(){e&&t.props.visible&&!t.isUnmounting&&e()}}),t.focusTrap.activate())},t.deactivateFocus=function(){t.focusTrap&&(t.focusTrap.deactivate(),t.focusTrap=null)},t.el=null,t.modalRoot=null,t.focusTrap=null,t}return(0,d.default)(o,e),(0,l.default)(o,[{key:"componentDidMount",value:function(){this.el=document.createElement("div"),this.modalRoot=document.getElementsByTagName("body")[0],this.modalRoot.appendChild(this.el),this.forceUpdate()}},{key:"componentDidUpdate",value:function(){var e=this.props,o=e.visible,t=e.isBackgroundScrollable,n=void 0!==t&&t;o?(this.activateFocus(),n||this.freezeBody()):(this.deactivateFocus(),n||this.unfreezeBody())}},{key:"componentWillUnmount",value:function(){this.modalRoot&&this.el&&this.modalRoot.removeChild(this.el),this.isUnmounting=!0,this.deactivateFocus()}},{key:"render",value:function(){var e=this.props,o=e.transparent,t=e.visible,n=e.isBackgroundScrollable,r=void 0!==n&&n;return t&&this.el?m.createPortal(c.createElement("div",{tabIndex:-1,ref:this.content,style:{backgroundColor:o?"transparent":"white",bottom:0,left:0,overflow:"auto",position:r?"absolute":"fixed",right:0,top:0,zIndex:1e3}},this.props.children),this.el):null}}]),o}(c.PureComponent),f=p;o.default=f;try{p.displayName="ModalBase",p.__docgenInfo={description:"",displayName:"ModalBase",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/ModalBase.web.tsx#ModalBase"]={docgenInfo:p.__docgenInfo,name:"ModalBase",path:"src/components/Modal/ModalBase.web.tsx#ModalBase"})}catch(b){}},"./src/components/Modal/ModalContent.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=o.ModalContent=void 0;var r=n(t("./node_modules/react/index.js")),a=t("./node_modules/react-native-web/dist/index.js"),l=function(e){var o=e.children;return r.createElement(a.View,{style:{height:"100%",marginLeft:"auto",marginRight:"auto",maxWidth:960}},o)};o.ModalContent=l;var s=l;o.default=s;try{l.displayName="ModalContent",l.__docgenInfo={description:"",displayName:"ModalContent",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/ModalContent.tsx#ModalContent"]={docgenInfo:l.__docgenInfo,name:"ModalContent",path:"src/components/Modal/ModalContent.tsx#ModalContent"})}catch(i){}},"./src/components/Modal/index.ts":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Modal",{enumerable:!0,get:function(){return r.HistoryModal}}),Object.defineProperty(o,"ModalProps",{enumerable:!0,get:function(){return r.HistoryModalProps}}),Object.defineProperty(o,"ModalBase",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(o,"ModalBaseProps",{enumerable:!0,get:function(){return a.ModalBaseProps}}),Object.defineProperty(o,"HistoryModal",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(o,"HistoryModalProps",{enumerable:!0,get:function(){return l.HistoryModalProps}}),Object.defineProperty(o,"FormModal",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(o,"FormModalProps",{enumerable:!0,get:function(){return s.FormModalProps}}),Object.defineProperty(o,"CloseableModal",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(o,"CloseableModalProps",{enumerable:!0,get:function(){return i.CloseableModalProps}});var r=t("./src/components/Modal/Modal.tsx"),a=n(t("./src/components/Modal/ModalBase.web.tsx")),l=n(t("./src/components/Modal/HistoryModal.web.tsx")),s=n(t("./src/components/Modal/FormModal.tsx")),i=n(t("./src/components/Modal/CloseableModal.tsx"))},"./src/icons/Icon.web.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(t("./node_modules/react/index.js")),a=n(t("./node_modules/react-icons/fi/index.js"));o.default=function(e){var o=e.name,t=e.color,n=e.size,l=a["Fi".concat(function(e){var o=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return o.charAt(0).toUpperCase()+o.slice(1)}(o))];return r.createElement(l,{color:t,size:n})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(l){}},"./src/icons/index.ts":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Icon",{enumerable:!0,get:function(){return r.default}});var r=n(t("./src/icons/Icon.web.tsx"))}}]);
//# sourceMappingURL=2.28c645b10b8076f9a4c2.js.map