(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"./src/components/Alert/Alert.mdx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=l(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=l(n("./node_modules/@babel/runtime/helpers/createClass.js")),i=l(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=l(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=l(n("./node_modules/@babel/runtime/helpers/inherits.js")),c=l(n("./node_modules/react/index.js")),u=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),m=l(n("./src/components/Alert/Alert.tsx")),f=n("./src/components/Layout/index.ts"),g=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,i.default)(this,(0,s.default)(t).call(this,e))).layout=null,n}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,r.default)(e,["components"]);return c.default.createElement(u.MDXTag,{name:"wrapper",components:t},c.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),c.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"alerts"}},"Alerts"),c.default.createElement(p.Playground,{__position:0,__code:'<Spacing paddingVertical={2}>\n  <Alert title="Info" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="success" title="Success" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="warning" title="Warning" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="danger" title="Danger" description="Message" />\n</Spacing>',__scope:{props:this?this.props:n,Alert:m.default,Spacing:f.Spacing}},c.default.createElement(f.Spacing,{paddingVertical:2},c.default.createElement(m.default,{title:"Info",description:"Message"})),c.default.createElement(f.Spacing,{paddingVertical:2},c.default.createElement(m.default,{intent:"success",title:"Success",description:"Message"})),c.default.createElement(f.Spacing,{paddingVertical:2},c.default.createElement(m.default,{intent:"warning",title:"Warning",description:"Message"})),c.default.createElement(f.Spacing,{paddingVertical:2},c.default.createElement(m.default,{intent:"danger",title:"Danger",description:"Message"}))),c.default.createElement(u.MDXTag,{name:"h3",components:t,props:{id:"closable-alerts"}},"Closable Alerts"),c.default.createElement(p.Playground,{__position:1,__code:'<Alert isCloseable title="Closeable" description="Message" />',__scope:{props:this?this.props:n,Alert:m.default,Spacing:f.Spacing}},c.default.createElement(m.default,{isCloseable:!0,title:"Closeable",description:"Message"})),c.default.createElement(u.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),c.default.createElement(p.PropsTable,{of:m.default}))}}]),t}(c.default.Component);t.default=g},"./src/components/Alert/Alert.styles.ts":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getAlertStyles=t.alertVariables=void 0;var r=l(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=l(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),o=function(e){return{body:{flex:1},container:(0,a.default)({backgroundColor:e.colors.background.plain,borderLeftWidth:5,borderRadius:e.controlBorderRadius.medium,display:"flex",flexDirection:"row",padding:16},e.elevations[2]),message:{},title:{},danger:{body:{},container:{borderLeftColor:e.colors.border.danger},message:{},title:{}},info:{body:{},container:{borderLeftColor:e.colors.border.info},message:{},title:{}},success:{body:{},container:{borderLeftColor:e.colors.border.success},message:{},title:{}},warning:{body:{},container:{borderLeftColor:e.colors.border.warning},message:{},title:{}}}};t.alertVariables=o;t.getAlertStyles=function(e,t){var n=e.intent,l=o(t),i=l.container,s=l.body,d=l.title,c=l.message,u=(0,r.default)(l,["container","body","title","message"])[n];return{bodyStyle:(0,a.default)({},s,u.body),containerStyle:(0,a.default)({},i,u.container),textStyle:(0,a.default)({},c,u.message),titleStyle:(0,a.default)({},d,u.title)}};try{o.displayName="alertVariables",o.__docgenInfo={description:"",displayName:"alertVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.styles.ts#alertVariables"]={docgenInfo:o.__docgenInfo,name:"alertVariables",path:"src/components/Alert/Alert.styles.ts#alertVariables"})}catch(i){}},"./src/components/Alert/Alert.tsx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Alert=void 0;var r=l(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),o=n("./src/icons/index.ts"),i=n("./src/theme/index.ts"),s=n("./src/utils/mergeStyles.ts"),d=n("./src/components/Layout/index.ts"),c=n("./src/components/Typography/index.ts"),u=n("./src/components/Alert/Alert.styles.ts"),p=(0,i.withTheme)(function(e){var t=e.title,n=e.description,l=e.component,i=e.onClose,p=e.isCloseable,m=void 0!==p&&p,f=e.icon,g=e.intent,y=void 0===g?"info":g,b=e.getStyles,_=e.theme,S=e.testID,A=(0,s.mergeStyles)(u.getAlertStyles,b)({intent:y},_),h=A.containerStyle,V=A.bodyStyle;return r.createElement(a.View,{style:h,testID:S},f||r.createElement(d.Spacing,{paddingRight:2,justifyContent:"center"},function(e,t){switch(e){case"success":return r.createElement(o.Icon,{name:"check-circle",size:24,color:t.colors.text.success});case"warning":return r.createElement(o.Icon,{name:"alert-triangle",size:24,color:t.colors.text.warning});case"danger":return r.createElement(o.Icon,{name:"alert-circle",size:24,color:t.colors.text.danger});default:return r.createElement(o.Icon,{name:"info",size:24,color:t.colors.text.info})}}(y,_)),l||r.createElement(a.View,{style:V},r.createElement(c.Strong,null,t),r.createElement(c.Text,null,n)),m&&r.createElement(a.TouchableOpacity,{onPress:i},r.createElement(d.Spacing,{paddingLeft:2},r.createElement(o.Icon,{name:"x",size:24,color:_.colors.text.default}))))});t.Alert=p;var m=p;t.default=m;try{p.displayName="Alert",p.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},isCloseable:{defaultValue:null,description:"",name:"isCloseable",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:'"danger" | "info" | "success" | "warning"'}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetAlertStyles, DeepPartial<AlertStyles>>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:p.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(f){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"() => void"}},isCloseable:{defaultValue:null,description:"",name:"isCloseable",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:'"danger" | "info" | "success" | "warning"'}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetAlertStyles, DeepPartial<AlertStyles>>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Alert/Alert.tsx#__class"})}catch(f){}},"./src/icons/Icon.web.tsx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n("./node_modules/react/index.js")),a=l(n("./node_modules/react-icons/fi/index.js"));t.default=function(e){var t=e.name,n=e.color,l=e.size,o=a["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(o,{color:n,size:l})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"FeatherIconName"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(o){}},"./src/icons/index.ts":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return r.default}});var r=l(n("./src/icons/Icon.web.tsx"));try{icons.displayName="icons",icons.__docgenInfo={description:"",displayName:"icons",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"FeatherIconName"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.ts#icons"]={docgenInfo:icons.__docgenInfo,name:"icons",path:"src/icons/index.ts#icons"})}catch(a){}}}]);
//# sourceMappingURL=24.7c8b8ae9ca06f7c8fa50.js.map