(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/Alert/Alert.mdx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=m;var l=n(r("./node_modules/@babel/runtime/helpers/extends.js")),s=n(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=(n(r("./node_modules/react/index.js")),r("./node_modules/@mdx-js/react/dist/index.es.js")),i=r("./node_modules/docz/dist/index.esm.js"),a=r("./src/components/Alert/Alert.tsx"),c=r("./src/components/Layout/index.ts"),d={},p="wrapper";function m(e){var t=e.components,r=(0,s.default)(e,["components"]);return(0,o.mdx)(p,(0,l.default)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"alert"},"Alert"),(0,o.mdx)("h3",{id:"usage"},"Usage"),(0,o.mdx)(i.Playground,{__position:0,__code:'<Alert\n  title="Kitchen sink"\n  description="Message"\n  isCloseable\n  intent="success"\n  component={null} // Overrides body\n  getStyles={(props, theme) => ({\n    bodyStyle: {},\n    containerStyle: {},\n  })}\n/>',__scope:{props:this?this.props:r,Playground:i.Playground,Props:i.Props,Alert:a.Alert,Spacing:c.Spacing},mdxType:"Playground"},(0,o.mdx)(a.Alert,{title:"Kitchen sink",description:"Message",isCloseable:!0,intent:"success",component:null,getStyles:function(e,t){return{bodyStyle:{},containerStyle:{}}},mdxType:"Alert"})),(0,o.mdx)("h3",{id:"variants"},"Variants"),(0,o.mdx)(i.Playground,{__position:1,__code:'<Spacing paddingVertical={2}>\n  <Alert title="Info" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="success" title="Success" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="warning" title="Warning" description="Message" />\n</Spacing>\n<Spacing paddingVertical={2}>\n  <Alert intent="danger" title="Danger" description="Message" />\n</Spacing>',__scope:{props:this?this.props:r,Playground:i.Playground,Props:i.Props,Alert:a.Alert,Spacing:c.Spacing},mdxType:"Playground"},(0,o.mdx)(c.Spacing,{paddingVertical:2,mdxType:"Spacing"},(0,o.mdx)(a.Alert,{title:"Info",description:"Message",mdxType:"Alert"})),(0,o.mdx)(c.Spacing,{paddingVertical:2,mdxType:"Spacing"},(0,o.mdx)(a.Alert,{intent:"success",title:"Success",description:"Message",mdxType:"Alert"})),(0,o.mdx)(c.Spacing,{paddingVertical:2,mdxType:"Spacing"},(0,o.mdx)(a.Alert,{intent:"warning",title:"Warning",description:"Message",mdxType:"Alert"})),(0,o.mdx)(c.Spacing,{paddingVertical:2,mdxType:"Spacing"},(0,o.mdx)(a.Alert,{intent:"danger",title:"Danger",description:"Message",mdxType:"Alert"}))),(0,o.mdx)("h3",{id:"props"},"Props"),(0,o.mdx)(i.Props,{of:a.Alert,mdxType:"Props"}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Alert/Alert.mdx"}}),m.isMDXComponent=!0},"./src/components/Alert/Alert.styles.ts":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getAlertStyles=t.alertVariables=void 0;var l=n(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(r("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof AlertStyles&&AlertStyles&&AlertStyles===Object(AlertStyles)&&Object.isExtensible(AlertStyles)&&Object.defineProperty(AlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertStyles",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof AlertSeparatedVariables&&AlertSeparatedVariables&&AlertSeparatedVariables===Object(AlertSeparatedVariables)&&Object.isExtensible(AlertSeparatedVariables)&&Object.defineProperty(AlertSeparatedVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertSeparatedVariables",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof AlertVariables&&AlertVariables&&AlertVariables===Object(AlertVariables)&&Object.isExtensible(AlertVariables)&&Object.defineProperty(AlertVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertVariables",filename:"src/components/Alert/Alert.styles.ts"}});var o=function(e){return{body:{flex:1},container:(0,s.default)({backgroundColor:e.colors.background.content,borderLeftWidth:5,borderRadius:e.controlBorderRadius.medium,display:"flex",flexDirection:"row",padding:16},e.elevations[2]),message:{},title:{},danger:{body:{},container:{borderLeftColor:e.colors.border.danger},message:{},title:{}},info:{body:{},container:{borderLeftColor:e.colors.border.info},message:{},title:{}},success:{body:{},container:{borderLeftColor:e.colors.border.success},message:{},title:{}},warning:{body:{},container:{borderLeftColor:e.colors.border.warning},message:{},title:{}}}};t.alertVariables=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alertVariables",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof AlertStyleProps&&AlertStyleProps&&AlertStyleProps===Object(AlertStyleProps)&&Object.isExtensible(AlertStyleProps)&&Object.defineProperty(AlertStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertStyleProps",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof GetAlertStyles&&GetAlertStyles&&GetAlertStyles===Object(GetAlertStyles)&&Object.isExtensible(GetAlertStyles)&&Object.defineProperty(GetAlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}});var i=function(e,t){var r=e.intent,n=o(t),i=n.container,a=n.body,c=n.title,d=n.message,p=(0,l.default)(n,["container","body","title","message"])[r];return{bodyStyle:(0,s.default)({},a,p.body),containerStyle:(0,s.default)({},i,p.container),textStyle:(0,s.default)({},d,p.message),titleStyle:(0,s.default)({},c,p.title)}};t.getAlertStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}})},"./src/components/Alert/Alert.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Alert=void 0;var l=n(r("./node_modules/react/index.js")),s=r("./node_modules/react-native-web/dist/index.js"),o=r("./src/icons/index.ts"),i=r("./src/theme/index.ts"),a=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Layout/index.ts"),d=r("./src/components/Typography/index.ts"),p=r("./src/components/Alert/Alert.styles.ts");"undefined"!==typeof AlertProps&&AlertProps&&AlertProps===Object(AlertProps)&&Object.isExtensible(AlertProps)&&Object.defineProperty(AlertProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertProps",filename:"src/components/Alert/Alert.tsx"}});var m=function(e){var t=e.title,r=e.description,n=e.component,m=e.onClose,u=e.isCloseable,b=void 0!==u&&u,y=e.icon,f=e.intent,g=void 0===f?"info":f,A=e.getStyles,x=e.testID,S=(0,i.useTheme)(),j=(0,a.mergeStyles)(p.getAlertStyles,A)({intent:g},S),_=j.containerStyle,P=j.bodyStyle;return l.createElement(s.View,{style:_,testID:x},y||l.createElement(c.Spacing,{paddingRight:2,justifyContent:"center"},function(e,t){switch(e){case"success":return l.createElement(o.Icon,{name:"check-circle",size:24,color:t.colors.text.success});case"warning":return l.createElement(o.Icon,{name:"alert-triangle",size:24,color:t.colors.text.warning});case"danger":return l.createElement(o.Icon,{name:"alert-circle",size:24,color:t.colors.text.danger});default:return l.createElement(o.Icon,{name:"info",size:24,color:t.colors.text.info})}}(g,S)),n||l.createElement(s.View,{style:P},l.createElement(d.Text,{isBold:!0},t),l.createElement(d.Text,null,r)),b&&l.createElement(s.TouchableOpacity,{onPress:m},l.createElement(c.Spacing,{paddingLeft:2},l.createElement(o.Icon,{name:"x",size:24,color:S.colors.text.default}))))};t.Alert=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Alert",filename:"src/components/Alert/Alert.tsx"}})},"./src/icons/Icon.web.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r("./node_modules/react/index.js")),s=n(r("./node_modules/react-icons/fi/index.esm.js"));t.default=function(e){var t=e.name,r=e.color,n=e.size,o=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return l.createElement(o,{color:r,size:n})}},"./src/icons/index.ts":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return l.default}});var l=n(r("./src/icons/Icon.web.tsx"));"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/icons/index.ts"}})}}]);
//# sourceMappingURL=20.60947c7ec53ed41ff970.js.map