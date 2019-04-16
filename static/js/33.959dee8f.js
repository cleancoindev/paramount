(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/components/Dialog/ConfirmDialog.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ConfirmDialog=void 0;var a=l(n("./node_modules/@babel/runtime/helpers/extends.js")),i=l(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=o(n("./node_modules/react/index.js")),s=n("./node_modules/react-native-web/dist/index.js"),d=n("./src/icons/index.ts"),u=n("./src/theme/index.ts"),c=n("./src/components/Button/index.ts"),m=n("./src/components/Layout/index.ts"),p=n("./src/components/Typography/index.ts"),g=l(n("./src/components/Dialog/Dialog.tsx")),f=function(e){var t=e.title,n=e.theme,o=e.onRequestClose;return r.createElement(m.Spacing,{padding:2,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},r.createElement(p.Heading,null,t),r.createElement(s.TouchableOpacity,{onPress:o},r.createElement(d.Icon,{name:"x",size:24,color:n.colors.text.default})))},y=function(e){var t=e.color,n=void 0===t?"primary":t,o=e.onRequestClose,l=e.onConfirm,a=e.cancelLabel,i=e.confirmLabel;return r.createElement(m.Spacing,{padding:2,flexDirection:"row",justifyContent:"flex-end"},r.createElement(c.Button,{appearance:"minimal",onPress:o,title:a}),r.createElement(m.Spacing,{paddingLeft:2},r.createElement(c.Button,{color:n,onPress:l,title:i})))},h=(0,u.withTheme)(function(e){var t=e.cancelLabel,n=void 0===t?"Cancel":t,o=e.children,l=e.confirmLabel,s=void 0===l?"Confirm":l,d=e.footer,u=e.header,c=e.onRequestClose,p=e.onConfirm,h=e.title,b=e.theme,D=(0,i.default)(e,["cancelLabel","children","confirmLabel","footer","header","onRequestClose","onConfirm","title","theme"]);return r.createElement(g.default,(0,a.default)({header:null===u?null:u||r.createElement(f,{theme:b,onRequestClose:c,title:h}),footer:null===d?null:d||r.createElement(y,{onRequestClose:c,onConfirm:p,cancelLabel:n,confirmLabel:s}),onRequestClose:c},D),r.createElement(m.Spacing,{padding:2},o))});t.ConfirmDialog=h;var b=h;t.default=b},"./src/components/Dialog/Dialog.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),i=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),r=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(n("./node_modules/react/index.js")),c=n("./node_modules/@mdx-js/tag/dist/index.js"),m=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),p=n("./node_modules/docz/dist/index.m.js"),g=n("./src/components/Dialog/index.ts"),f=n("./src/components/Button/index.ts"),y=n("./src/components/Layout/index.ts"),h=n("./src/components/Typography/index.ts"),b=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,r.default)(this,(0,s.default)(t).call(this,e))).layout=null,n}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,l.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"dialog"}},"Dialog"),u.default.createElement(c.MDXTag,{name:"p",components:t},"Dialog has no predefined styling and handlers. The content, header and footer is completely in your control. For a more out-of-box usage, you can use ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ConfirmDialog")," below"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(p.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Box>\n      <Dialog\n        header={<Text>Header</Text>}\n        footer={<Text>Footer</Text>}\n        isVisible={on}\n        onRequestClose={toggle}\n        useHistory={false}\n        getStyles={(props, theme) => ({\n          modalContainerStyle: {},\n          containerStyle: {},\n          bodyStyle: {},\n        })}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the dialog</Text>\n        </Box>\n      </Dialog>\n      <Button onPress={toggle} title="Open dialog" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Toggle:m.Toggle,Dialog:g.Dialog,Button:f.Button,Box:y.Box,Text:h.Text}},u.default.createElement(m.Toggle,{initial:!1},function(e){var t=e.on,n=e.toggle;return u.default.createElement(y.Box,null,u.default.createElement(g.Dialog,{header:u.default.createElement(h.Text,null,"Header"),footer:u.default.createElement(h.Text,null,"Footer"),isVisible:t,onRequestClose:n,useHistory:!1,getStyles:function(e,t){return{modalContainerStyle:{},containerStyle:{},bodyStyle:{}}}},u.default.createElement(y.Box,{height:1800},u.default.createElement(h.Text,null,"Put any content in the dialog"))),u.default.createElement(f.Button,{onPress:n,title:"Open dialog"}))})),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"dialog-props"}},"Dialog Props"),u.default.createElement(p.PropsTable,{of:g.Dialog}))}}]),t}(u.default.Component);t.default=b},"./src/components/Dialog/Dialog.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDialogStyles=t.getDialogVariables=void 0;var n=function(e){return{body:{maxHeight:400},container:{backgroundColor:"white",elevation:1,maxWidth:600,minWidth:280,position:"relative",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}}};t.getDialogVariables=n;var o=function(e){var t={body:{maxHeight:400},container:{backgroundColor:"white",elevation:1,maxWidth:600,minWidth:280,position:"relative",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}};return{bodyStyle:t.body,containerStyle:t.container,modalContainerStyle:t.modalContainer}};t.getDialogStyles=o;try{n.displayName="getDialogVariables",n.__docgenInfo={description:"",displayName:"getDialogVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Dialog.styles.ts#getDialogVariables"]={docgenInfo:n.__docgenInfo,name:"getDialogVariables",path:"src/components/Dialog/Dialog.styles.ts#getDialogVariables"})}catch(l){}try{o.displayName="getDialogStyles",o.__docgenInfo={description:"",displayName:"getDialogStyles",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Dialog.styles.ts#getDialogStyles"]={docgenInfo:o.__docgenInfo,name:"getDialogStyles",path:"src/components/Dialog/Dialog.styles.ts#getDialogStyles"})}catch(l){}},"./src/components/Dialog/Dialog.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Dialog=void 0;var l=o(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),i=n("./src/theme/index.ts"),r=n("./src/utils/mergeStyles.ts"),s=n("./src/components/Modal/index.ts"),d=n("./src/components/Overlay/index.ts"),u=n("./src/components/Dialog/Dialog.styles.ts"),c=function(e){var t=e.children,n=e.footer,o=e.header,c=e.isVisible,m=e.onRequestClose,p=void 0===m?function(){return null}:m,g=e.getStyles,f=e.useHistory,y=l.useContext(i.ThemeContext),h=(0,r.mergeStyles)(u.getDialogStyles,g)(y),b=h.modalContainerStyle,D=h.containerStyle,S=h.bodyStyle;return l.createElement(s.Modal,{useHistory:f,visible:c,transparent:!0,onRequestClose:p},l.createElement(a.View,{style:b},l.createElement(a.View,{style:D},o,l.createElement(a.View,{style:S},t),n),l.createElement(d.Overlay,{onPress:p})))};t.Dialog=c;var m=c;t.default=m;try{c.displayName="Dialog",c.__docgenInfo={description:"",displayName:"Dialog",props:{useHistory:{defaultValue:null,description:"Prop to be passed to Modal",name:"useHistory",required:!1,type:{name:"boolean"}},isVisible:{defaultValue:null,description:"To show dialog or not",name:"isVisible",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc, or using back button (requires useHistory to be true)",name:"onRequestClose",required:!1,type:{name:"() => void"}},header:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"footer",required:!1,type:{name:"ReactNode"}},getStyles:{defaultValue:null,description:"Inline styles for components",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetDialogStyles, DeepPartial<DialogStyles>>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Dialog.tsx#Dialog"]={docgenInfo:c.__docgenInfo,name:"Dialog",path:"src/components/Dialog/Dialog.tsx#Dialog"})}catch(p){}},"./src/components/Dialog/index.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Dialog",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"DialogProps",{enumerable:!0,get:function(){return l.DialogProps}}),Object.defineProperty(t,"ConfirmDialog",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ConfirmDialogProps",{enumerable:!0,get:function(){return a.ConfirmDialogProps}});var l=o(n("./src/components/Dialog/Dialog.tsx")),a=o(n("./src/components/Dialog/ConfirmDialog.tsx"))}}]);
//# sourceMappingURL=33.86969e0292b67dd51c30.js.map