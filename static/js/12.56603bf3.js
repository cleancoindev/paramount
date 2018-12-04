(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/components/Button/Button.mdx":function(e,t,a){var n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=n(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=n(a("./node_modules/@babel/runtime/helpers/createClass.js")),l=n(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=n(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),s=n(a("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(a("./node_modules/react/index.js")),c=a("./node_modules/@mdx-js/tag/dist/index.js"),p=a("./node_modules/docz/dist/index.m.js"),m=n(a("./src/components/Button/Button.tsx")),f=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,l.default)(this,(0,d.default)(t).call(this,e))).layout=null,a}return(0,s.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,a=(0,o.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"primary-appearance-default"}},"Primary appearance (default)"),u.default.createElement(p.Playground,{__position:0,__code:'<Button color="default">Default</Button>\n<Button color="primary">Primary</Button>\n<Button color="secondary">Secondary</Button>\n<Button color="danger">Danger</Button>',__scope:{props:this?this.props:a,Button:m.default}},u.default.createElement(m.default,{color:"default"},"Default"),u.default.createElement(m.default,{color:"primary"},"Primary"),u.default.createElement(m.default,{color:"secondary"},"Secondary"),u.default.createElement(m.default,{color:"danger"},"Danger")),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"outline-appearance"}},"Outline appearance"),u.default.createElement(p.Playground,{__position:1,__code:'<Button appearance="outline" color="default">\n  Default\n</Button>\n<Button appearance="outline" color="primary">\n  Primary\n</Button>\n<Button appearance="outline" color="secondary">\n  Secondary\n</Button>\n<Button appearance="outline" color="danger">\n  Danger\n</Button>',__scope:{props:this?this.props:a,Button:m.default}},u.default.createElement(m.default,{appearance:"outline",color:"default"},"Default"),u.default.createElement(m.default,{appearance:"outline",color:"primary"},"Primary"),u.default.createElement(m.default,{appearance:"outline",color:"secondary"},"Secondary"),u.default.createElement(m.default,{appearance:"outline",color:"danger"},"Danger")),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"minimal-appearance"}},"Minimal appearance"),u.default.createElement(p.Playground,{__position:2,__code:'<Button appearance="minimal" color="default">\n  Default\n</Button>\n<Button appearance="minimal" color="primary">\n  Primary\n</Button>\n<Button appearance="minimal" color="secondary">\n  Secondary\n</Button>\n<Button appearance="minimal" color="danger">\n  Danger\n</Button>',__scope:{props:this?this.props:a,Button:m.default}},u.default.createElement(m.default,{appearance:"minimal",color:"default"},"Default"),u.default.createElement(m.default,{appearance:"minimal",color:"primary"},"Primary"),u.default.createElement(m.default,{appearance:"minimal",color:"secondary"},"Secondary"),u.default.createElement(m.default,{appearance:"minimal",color:"danger"},"Danger")),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"loading-primary-button"}},"Loading Primary button"),u.default.createElement(p.Playground,{__position:3,__code:'<Button isLoading appearance="primary" color="primary">\n  Default\n</Button>\n<Button isLoading appearance="outline" color="primary">\n  Primary\n</Button>\n<Button isLoading appearance="minimal" color="primary">\n  Secondary\n</Button>',__scope:{props:this?this.props:a,Button:m.default}},u.default.createElement(m.default,{isLoading:!0,appearance:"primary",color:"primary"},"Default"),u.default.createElement(m.default,{isLoading:!0,appearance:"outline",color:"primary"},"Primary"),u.default.createElement(m.default,{isLoading:!0,appearance:"minimal",color:"primary"},"Secondary")),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"loading-secondary-button"}},"Loading Secondary button"),u.default.createElement(p.Playground,{__position:4,__code:'<Button isLoading appearance="primary" color="secondary">\n  Default\n</Button>\n<Button isLoading appearance="outline" color="secondary">\n  Primary\n</Button>\n<Button isLoading appearance="minimal" color="secondary">\n  Secondary\n</Button>',__scope:{props:this?this.props:a,Button:m.default}},u.default.createElement(m.default,{isLoading:!0,appearance:"primary",color:"secondary"},"Default"),u.default.createElement(m.default,{isLoading:!0,appearance:"outline",color:"secondary"},"Primary"),u.default.createElement(m.default,{isLoading:!0,appearance:"minimal",color:"secondary"},"Secondary")),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"other-props"}},"Other props"),u.default.createElement(p.Playground,{__position:5,__code:'<Button isInline color="primary">\n  Inline\n</Button>\n<Button isDisabled color="primary">\n  Disabled\n</Button>',__scope:{props:this?this.props:a,Button:m.default}},u.default.createElement(m.default,{isInline:!0,color:"primary"},"Inline"),u.default.createElement(m.default,{isDisabled:!0,color:"primary"},"Disabled")),u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),u.default.createElement(p.PropsTable,{of:m.default}))}}]),t}(u.default.Component);t.default=f},"./src/components/Button/Button.tsx":function(e,t,a){var n=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Button=void 0;var i=o(a("./node_modules/@babel/runtime/helpers/extends.js")),r=o(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(a("./node_modules/react/index.js")),d=a("./node_modules/react-native-web/dist/index.js"),s=a("./src/theme/index.ts"),u=a("./src/components/Layout/index.ts"),c=a("./src/components/Loading/index.ts"),p=a("./src/components/Typography/index.ts"),m=(0,s.withTheme)(function(e){var t=e.appearance,a=void 0===t?"primary":t,n=e.children,o=e.color,s=void 0===o?"default":o,m=e.iconAfter,f=e.iconBefore,y=(e.isActive,e.isDisabled),h=void 0!==y&&y,b=e.isInline,g=void 0!==b&&b,_=e.isLoading,B=void 0!==_&&_,v=e.onPress,D=void 0===v?function(){}:v,L=e.size,S=void 0===L?"medium":L,E=e.theme,O=(0,r.default)(e,["appearance","children","color","iconAfter","iconBefore","isActive","isDisabled","isInline","isLoading","onPress","size","theme"]),P=E.getButtonStyles(a,s,S,h,B,g),T=P.buttonStyle,j=P.textStyle,q=P.focusColor;return l.createElement(d.TouchableHighlight,(0,i.default)({accessibilityRole:"button",underlayColor:q,disabled:!(!h&&!B),onPress:D,style:T},O),l.createElement(d.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},f,l.createElement(u.GridBox,{paddingLeft:f?1:0,paddingRight:m?1:0},B?l.createElement(c.LoadingDots,{color:j.color}):n?l.createElement(p.Text,{style:j},n):null),m))});t.Button=m;var f=m;t.default=f;try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the children. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:m.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(y){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the children. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Button/Button.tsx#__class"})}catch(y){}},"./src/components/Loading/LoadingDots.tsx":function(e,t,a){var n=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=o(a("./node_modules/@babel/runtime/helpers/createClass.js")),l=o(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=o(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),s=o(a("./node_modules/@babel/runtime/helpers/inherits.js")),u=n(a("./node_modules/react/index.js")),c=a("./node_modules/react-native-web/dist/index.js"),p=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,l.default)(this,(0,d.default)(t).call(this,e))).animationState=void 0,a.animationState={dotOpacities:a.initializeDots(),shouldAnimate:!0,targetOpacity:1},a}return(0,s.default)(t,e),(0,r.default)(t,[{key:"initializeDots",value:function(){for(var e=[],t=0;t<this.props.numberOfDots;t++){var a=new c.Animated.Value(this.props.minOpacity);e.push(a)}return e}},{key:"componentDidMount",value:function(){this.animateDots.bind(this)(0)}},{key:"componentWillUnmount",value:function(){this.animationState.shouldAnimate=!1}},{key:"animateDots",value:function(e){if(this.animationState.shouldAnimate){if(e>=this.animationState.dotOpacities.length){e=0;var t=this.props.minOpacity;this.animationState.targetOpacity=this.animationState.targetOpacity===t?1:t}var a=e+1;c.Animated.timing(this.animationState.dotOpacities[e],{duration:this.props.duration,toValue:this.animationState.targetOpacity}).start(this.animateDots.bind(this,a))}}},{key:"render",value:function(){var e=this.props,t=e.size,a=e.color,n=this.animationState.dotOpacities.map(function(e,n){return u.createElement(c.Animated.View,{key:n,style:{backgroundColor:a,borderRadius:"50%",height:t,marginLeft:3,marginRight:3,opacity:e,width:t}})});return u.createElement(c.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},n)}}]),t}(u.Component);p.defaultProps={color:"#aaa",duration:300,minOpacity:0,numberOfDots:3,size:10};var m=p;t.default=m;try{p.displayName="LoadingDots",p.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:{value:"3"},description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"300"},description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:{value:"0"},description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#aaa"},description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/LoadingDots.tsx#LoadingDots"]={docgenInfo:p.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/LoadingDots.tsx#LoadingDots"})}catch(f){}},"./src/components/Loading/index.ts":function(e,t,a){var n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadingDots",{enumerable:!0,get:function(){return o.default}});var o=n(a("./src/components/Loading/LoadingDots.tsx"));try{LoadingDots.displayName="LoadingDots",LoadingDots.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:null,description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:null,description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/index.ts#LoadingDots"]={docgenInfo:LoadingDots.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/index.ts#LoadingDots"})}catch(i){}}}]);
//# sourceMappingURL=12.bea8f045849a822044fb.js.map