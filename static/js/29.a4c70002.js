(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./src/components/Alert/Alert.mdx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=r(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=r(n("./node_modules/@babel/runtime/helpers/createClass.js")),s=r(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),i=r(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),c=r(n("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(n("./node_modules/react/index.js")),u=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),m=r(n("./src/components/Alert/Alert.tsx")),f=n("./src/components/Layout/index.ts"),g=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,s.default)(this,(0,i.default)(t).call(this,e))).layout=null,n}return(0,c.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,o.default)(e,["components"]);return d.default.createElement(u.MDXTag,{name:"wrapper",components:t},d.default.createElement(u.MDXTag,{name:"h1",components:t,props:{id:"alert"}},"Alert"),d.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),d.default.createElement(p.Playground,{__position:0,__code:'<Alert\n  title="Kitchen sink"\n  description="Message"\n  isCloseable\n  intent="success"\n  component={null} // Overrides body\n  getStyles={(props, theme) => ({\n    bodyStyle: {},\n    containerStyle: {},\n  })}\n/>',__scope:{props:this?this.props:n,Alert:m.default,Spacing:f.Spacing}},d.default.createElement(m.default,{title:"Kitchen sink",description:"Message",isCloseable:!0,intent:"success",component:null,getStyles:function(e,t){return{bodyStyle:{},containerStyle:{}}}})),d.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"variants"}},"Variants"),d.default.createElement(p.Playground,{__position:1,__code:'<Spacing paddingVertical={2}>\n  <Alert title="Info" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="success" title="Success" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="warning" title="Warning" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="danger" title="Danger" description="Message" />\n</Spacing>',__scope:{props:this?this.props:n,Alert:m.default,Spacing:f.Spacing}},d.default.createElement(f.Spacing,{paddingVertical:2},d.default.createElement(m.default,{title:"Info",description:"Message"})),d.default.createElement(f.Spacing,{paddingVertical:2},d.default.createElement(m.default,{intent:"success",title:"Success",description:"Message"})),d.default.createElement(f.Spacing,{paddingVertical:2},d.default.createElement(m.default,{intent:"warning",title:"Warning",description:"Message"})),d.default.createElement(f.Spacing,{paddingVertical:2},d.default.createElement(m.default,{intent:"danger",title:"Danger",description:"Message"}))),d.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"props"}},"Props"),d.default.createElement(p.PropsTable,{of:m.default}))}}]),t}(d.default.Component);t.default=g},"./src/components/Alert/Alert.styles.ts":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getAlertStyles=t.alertVariables=void 0;var o=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=r(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=function(e){return{body:{flex:1},container:(0,a.default)({backgroundColor:e.colors.background.white,borderLeftWidth:5,borderRadius:e.controlBorderRadius.medium,display:"flex",flexDirection:"row",padding:16},e.elevations[2]),message:{},title:{},danger:{body:{},container:{borderLeftColor:e.colors.border.danger},message:{},title:{}},info:{body:{},container:{borderLeftColor:e.colors.border.info},message:{},title:{}},success:{body:{},container:{borderLeftColor:e.colors.border.success},message:{},title:{}},warning:{body:{},container:{borderLeftColor:e.colors.border.warning},message:{},title:{}}}};t.alertVariables=l;t.getAlertStyles=function(e,t){var n=e.intent,r=l(t),s=r.container,i=r.body,c=r.title,d=r.message,u=(0,o.default)(r,["container","body","title","message"])[n];return{bodyStyle:(0,a.default)({},i,u.body),containerStyle:(0,a.default)({},s,u.container),textStyle:(0,a.default)({},d,u.message),titleStyle:(0,a.default)({},c,u.title)}};try{l.displayName="alertVariables",l.__docgenInfo={description:"",displayName:"alertVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.styles.ts#alertVariables"]={docgenInfo:l.__docgenInfo,name:"alertVariables",path:"src/components/Alert/Alert.styles.ts#alertVariables"})}catch(s){}},"./src/components/Alert/Alert.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Alert=void 0;var o=r(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),l=n("./src/icons/index.ts"),s=n("./src/theme/index.ts"),i=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Layout/index.ts"),d=n("./src/components/Typography/index.ts"),u=n("./src/components/Alert/Alert.styles.ts"),p=(0,s.withTheme)(function(e){var t=e.title,n=e.description,r=e.component,s=e.onClose,p=e.isCloseable,m=void 0!==p&&p,f=e.icon,g=e.intent,b=void 0===g?"info":g,y=e.getStyles,S=e.theme,h=e.testID,_=(0,i.mergeStyles)(u.getAlertStyles,y)({intent:b},S),E=_.containerStyle,x=_.bodyStyle;return o.createElement(a.View,{style:E,testID:h},f||o.createElement(c.Spacing,{paddingRight:2,justifyContent:"center"},function(e,t){switch(e){case"success":return o.createElement(l.Icon,{name:"check-circle",size:24,color:t.colors.text.success});case"warning":return o.createElement(l.Icon,{name:"alert-triangle",size:24,color:t.colors.text.warning});case"danger":return o.createElement(l.Icon,{name:"alert-circle",size:24,color:t.colors.text.danger});default:return o.createElement(l.Icon,{name:"info",size:24,color:t.colors.text.info})}}(b,S)),r||o.createElement(a.View,{style:x},o.createElement(d.Text,{isBold:!0},t),o.createElement(d.Text,null,n)),m&&o.createElement(a.TouchableOpacity,{onPress:s},o.createElement(c.Spacing,{paddingLeft:2},o.createElement(l.Icon,{name:"x",size:24,color:S.colors.text.default}))))});t.Alert=p;var m=p;t.default=m},"./src/icons/Icon.web.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("./node_modules/react/index.js")),a=r(n("./node_modules/react-icons/fi/index.js"));t.default=function(e){var t=e.name,n=e.color,r=e.size,l=a["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(l,{color:n,size:r})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(l){}},"./src/icons/index.ts":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return o.default}});var o=r(n("./src/icons/Icon.web.tsx"))}}]);
//# sourceMappingURL=29.86969e0292b67dd51c30.js.map