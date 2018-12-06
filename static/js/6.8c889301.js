(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/Button/BackButton.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("./node_modules/@babel/runtime/helpers/extends.js")),l=o(t("./node_modules/react/index.js")),r=t("./node_modules/react-icons/fi/index.js"),s=t("./src/theme/index.ts"),d=a(t("./src/components/Button/Button.tsx")),u=function(e){var n=e.theme;return l.createElement(d.default,(0,i.default)({appearance:"minimal",isInline:!0,iconBefore:l.createElement(r.FiArrowLeft,{size:24,color:n.themeVariables.colors.text.default}),size:"small"},e))},c=(0,s.withTheme)(u);n.default=c;try{u.displayName="BackButton",u.__docgenInfo={description:"",displayName:"BackButton",props:{color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the children. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/BackButton.tsx#BackButton"]={docgenInfo:u.__docgenInfo,name:"BackButton",path:"src/components/Button/BackButton.tsx#BackButton"})}catch(m){}},"./src/components/Button/Button.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.Button=void 0;var i=a(t("./node_modules/@babel/runtime/helpers/extends.js")),l=a(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=o(t("./node_modules/react/index.js")),s=t("./node_modules/react-native-web/dist/index.js"),d=t("./src/theme/index.ts"),u=t("./src/components/Layout/index.ts"),c=t("./src/components/Loading/index.ts"),m=t("./src/components/Typography/index.ts"),p=(0,d.withTheme)(function(e){var n=e.appearance,t=void 0===n?"primary":n,o=e.children,a=e.color,d=void 0===a?"default":a,p=e.iconAfter,f=e.iconBefore,h=(e.isActive,e.isDisabled),g=void 0!==h&&h,b=e.isInline,y=void 0!==b&&b,_=e.isLoading,v=void 0!==_&&_,C=e.onPress,D=void 0===C?function(){}:C,T=e.size,x=void 0===T?"medium":T,S=e.theme,B=(0,l.default)(e,["appearance","children","color","iconAfter","iconBefore","isActive","isDisabled","isInline","isLoading","onPress","size","theme"]),O=S.getButtonStyles(t,d,x,g,v,y),E=O.buttonStyle,V=O.textStyle,q=O.focusColor;return r.createElement(s.TouchableHighlight,(0,i.default)({accessibilityRole:"button",underlayColor:q,disabled:!(!g&&!v),onPress:D,style:E},B),r.createElement(s.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},f,r.createElement(u.GridBox,{paddingLeft:f?1:0,paddingRight:p?1:0},v?r.createElement(c.LoadingDots,{color:V.color}):o?r.createElement(m.Text,{style:V},o):null),p))});n.Button=p;var f=p;n.default=f;try{p.displayName="Button",p.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the children. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:p.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(h){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the children. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Button/Button.tsx#__class"})}catch(h){}},"./src/components/Button/index.ts":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(n,"IButtonProps",{enumerable:!0,get:function(){return i.IButtonProps}}),Object.defineProperty(n,"BackButton",{enumerable:!0,get:function(){return l.default}});var i=a(t("./src/components/Button/Button.tsx")),l=o(t("./src/components/Button/BackButton.tsx"));try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the children. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.ts#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Button/index.ts#__class"})}catch(r){}},"./src/components/Dialog/ConfirmDialog.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.ConfirmDialog=void 0;var i=a(t("./node_modules/@babel/runtime/helpers/extends.js")),l=a(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=o(t("./node_modules/react/index.js")),s=t("./node_modules/react-icons/fi/index.js"),d=t("./node_modules/react-native-web/dist/index.js"),u=t("./src/theme/index.ts"),c=t("./src/components/Button/index.ts"),m=t("./src/components/Layout/index.ts"),p=t("./src/components/Typography/index.ts"),f=a(t("./src/components/Dialog/Dialog.tsx")),h=function(e){var n=e.title,t=e.onClose;return r.createElement(m.GridBox,{padding:2,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},r.createElement(p.Heading,null,n),r.createElement(d.TouchableOpacity,{onPress:t},r.createElement(s.FiX,{size:24})))},g=function(e){var n=e.color,t=void 0===n?"primary":n,o=e.onClose,a=e.onConfirm,i=e.cancelLabel,l=e.confirmLabel;return r.createElement(m.GridBox,{padding:2,flexDirection:"row",justifyContent:"flex-end"},r.createElement(c.Button,{appearance:"minimal",onPress:o},i),r.createElement(m.GridBox,{paddingLeft:2},r.createElement(c.Button,{color:t,onPress:a},l)))},b=(0,u.withTheme)(function(e){var n=e.cancelLabel,t=void 0===n?"Cancel":n,o=e.children,a=e.confirmLabel,s=void 0===a?"Confirm":a,d=e.footer,u=e.header,c=e.onClose,p=e.onConfirm,b=e.title,y=(0,l.default)(e,["cancelLabel","children","confirmLabel","footer","header","onClose","onConfirm","title"]);return r.createElement(f.default,(0,i.default)({header:null===u?null:u||r.createElement(h,{onClose:c,title:b}),footer:null===d?null:d||r.createElement(g,{onClose:c,onConfirm:p,cancelLabel:t,confirmLabel:s}),onClose:c},y),r.createElement(m.GridBox,{padding:2},o))});n.ConfirmDialog=b;var y=b;n.default=y;try{b.displayName="ConfirmDialog",b.__docgenInfo={description:"",displayName:"ConfirmDialog",props:{isVisible:{defaultValue:null,description:"To show dialog or not",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},header:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"footer",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Title displayed in the header",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},cancelLabel:{defaultValue:null,description:"Label for cancel button",name:"cancelLabel",required:!1,type:{name:"string"}},confirmLabel:{defaultValue:null,description:"Label for confirm button",name:"confirmLabel",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Handler for confirm button",name:"onConfirm",required:!1,type:{name:"() => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/ConfirmDialog.tsx#ConfirmDialog"]={docgenInfo:b.__docgenInfo,name:"ConfirmDialog",path:"src/components/Dialog/ConfirmDialog.tsx#ConfirmDialog"})}catch(_){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{isVisible:{defaultValue:null,description:"To show dialog or not",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},header:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"footer",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Title displayed in the header",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},cancelLabel:{defaultValue:null,description:"Label for cancel button",name:"cancelLabel",required:!1,type:{name:"string"}},confirmLabel:{defaultValue:null,description:"Label for confirm button",name:"confirmLabel",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Handler for confirm button",name:"onConfirm",required:!1,type:{name:"() => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/ConfirmDialog.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Dialog/ConfirmDialog.tsx#__class"})}catch(_){}},"./src/components/Dialog/Dialog.mdx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=o(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=o(t("./node_modules/@babel/runtime/helpers/createClass.js")),r=o(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=o(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=o(t("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(t("./node_modules/react/index.js")),c=t("./node_modules/@mdx-js/tag/dist/index.js"),m=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),p=t("./node_modules/docz/dist/index.m.js"),f=t("./src/components/Dialog/index.ts"),h=t("./src/components/Button/index.ts"),g=t("./src/components/Layout/index.ts"),b=t("./src/components/Typography/index.ts"),y=function(e){function n(e){var t;return(0,i.default)(this,n),(t=(0,r.default)(this,(0,s.default)(n).call(this,e))).layout=null,t}return(0,d.default)(n,e),(0,l.default)(n,[{key:"render",value:function(){var e=this.props,n=e.components,t=(0,a.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:n},u.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"dialog"}},"Dialog"),u.default.createElement(c.MDXTag,{name:"p",components:n},"Dialog has no predefined styling and handlers. The content, header and footer is completely in your control. For a more out-of-box usage, you can use ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ConfirmDialog")," below"),u.default.createElement(p.Playground,{__position:0,__code:"<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Box>\n      <Dialog\n        header={<Text>Header</Text>}\n        footer={<Text>Footer</Text>}\n        isVisible={on}\n        onClose={toggle}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the dialog</Text>\n        </Box>\n      </Dialog>\n      <Button onPress={toggle}>Open dialog</Button>\n    </Box>\n  )}\n</Toggle>",__scope:{props:this?this.props:t,Toggle:m.Toggle,Dialog:f.Dialog,ConfirmDialog:f.ConfirmDialog,Button:h.Button,Box:g.Box,Text:b.Text}},u.default.createElement(m.Toggle,{initial:!1},function(e){var n=e.on,t=e.toggle;return u.default.createElement(g.Box,null,u.default.createElement(f.Dialog,{header:u.default.createElement(b.Text,null,"Header"),footer:u.default.createElement(b.Text,null,"Footer"),isVisible:n,onClose:t},u.default.createElement(g.Box,{height:1800},u.default.createElement(b.Text,null,"Put any content in the dialog"))),u.default.createElement(h.Button,{onPress:t},"Open dialog"))})),u.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"dialog-props"}},"Dialog Props"),u.default.createElement(p.PropsTable,{of:f.Dialog}),u.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"confirmdialog"}},"ConfirmDialog"),u.default.createElement(c.MDXTag,{name:"p",components:n},"Opposed to ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Dialog")," (above), ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ConfirmDialog")," has predefined styling and handlers; however, it still can pass props from ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Dialog")),u.default.createElement(p.Playground,{__position:2,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Box>\n      <ConfirmDialog\n        title="Confirm dialog"\n        isVisible={on}\n        onClose={toggle}\n        cancelLabel="Cancel label"\n        confirmLabel="Confirm label"\n      >\n        <Text>Add custom content here</Text>\n      </ConfirmDialog>\n      <Button onPress={toggle}>Open dialog</Button>\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:t,Toggle:m.Toggle,Dialog:f.Dialog,ConfirmDialog:f.ConfirmDialog,Button:h.Button,Box:g.Box,Text:b.Text}},u.default.createElement(m.Toggle,{initial:!1},function(e){var n=e.on,t=e.toggle;return u.default.createElement(g.Box,null,u.default.createElement(f.ConfirmDialog,{title:"Confirm dialog",isVisible:n,onClose:t,cancelLabel:"Cancel label",confirmLabel:"Confirm label"},u.default.createElement(b.Text,null,"Add custom content here")),u.default.createElement(h.Button,{onPress:t},"Open dialog"))})),u.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"confirmdialog-without-header"}},"ConfirmDialog without header"),u.default.createElement(c.MDXTag,{name:"p",components:n},"Opposed to ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Dialog")," (above), ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ConfirmDialog")," has predefined styling and handlers; however, it still can pass props from ",u.default.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Dialog")),u.default.createElement(p.Playground,{__position:3,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Box>\n      <ConfirmDialog\n        header={null}\n        isVisible={on}\n        onClose={toggle}\n        cancelLabel="Cancel label"\n        confirmLabel="Confirm label"\n      >\n        <Text>Add custom content here</Text>\n      </ConfirmDialog>\n      <Button onPress={toggle}>Open dialog</Button>\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:t,Toggle:m.Toggle,Dialog:f.Dialog,ConfirmDialog:f.ConfirmDialog,Button:h.Button,Box:g.Box,Text:b.Text}},u.default.createElement(m.Toggle,{initial:!1},function(e){var n=e.on,t=e.toggle;return u.default.createElement(g.Box,null,u.default.createElement(f.ConfirmDialog,{header:null,isVisible:n,onClose:t,cancelLabel:"Cancel label",confirmLabel:"Confirm label"},u.default.createElement(b.Text,null,"Add custom content here")),u.default.createElement(h.Button,{onPress:t},"Open dialog"))})),u.default.createElement(c.MDXTag,{name:"h2",components:n,props:{id:"confirmdialog-props"}},"ConfirmDialog Props"),u.default.createElement(p.PropsTable,{of:f.ConfirmDialog}))}}]),n}(u.default.Component);n.default=y},"./src/components/Dialog/Dialog.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=n.Dialog=void 0;var i=a(t("./node_modules/react/index.js")),l=t("./node_modules/react-native-web/dist/index.js"),r=t("./src/theme/index.ts"),s=o(t("./src/components/Dialog/Modal.web.tsx")),d=(0,r.withTheme)(function(e){var n=e.children,t=e.footer,o=e.header,a=e.isVisible,r=e.onClose,d=e.theme;if(!a)return null;var u=d.getDialogStyles(),c=u.modalContainerStyle,m=u.overlayStyle,p=u.containerStyle,f=u.bodyStyle;return i.createElement(s.default,{visible:a,transparent:!0,onDismiss:r},i.createElement(l.View,{style:c},i.createElement(l.View,{style:p},o,i.createElement(l.View,{style:f},n),t),i.createElement(l.TouchableWithoutFeedback,{onPress:r},i.createElement(l.View,{style:m}))))});n.Dialog=d;var u=d;n.default=u;try{d.displayName="Dialog",d.__docgenInfo={description:"",displayName:"Dialog",props:{isVisible:{defaultValue:null,description:"To show dialog or not",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},header:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Dialog.tsx#Dialog"]={docgenInfo:d.__docgenInfo,name:"Dialog",path:"src/components/Dialog/Dialog.tsx#Dialog"})}catch(c){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{isVisible:{defaultValue:null,description:"To show dialog or not",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},header:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Dialog.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Dialog/Dialog.tsx#__class"})}catch(c){}},"./src/components/Dialog/Modal.web.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(t("./node_modules/@babel/runtime/helpers/createClass.js")),r=a(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=a(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=a(t("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(t("./node_modules/react/index.js")),c=o(t("./node_modules/react-dom/index.js")),m=27,p=function(e){function n(e){var t;return(0,i.default)(this,n),(t=(0,r.default)(this,(0,s.default)(n).call(this,e))).el=void 0,t.modalRoot=void 0,t.content=u.createRef(),t.handleKeyDown=function(e){var n=t.props.onDismiss;e.keyCode===m&&n&&(e.stopPropagation(),n())},t.el=document.createElement("div"),t.modalRoot=document.getElementsByTagName("body")[0],t}return(0,d.default)(n,e),(0,l.default)(n,[{key:"componentDidMount",value:function(){this.modalRoot.appendChild(this.el),this.content.current&&this.content.current.focus()}},{key:"componentWillUnmount",value:function(){this.modalRoot.removeChild(this.el)}},{key:"render",value:function(){var e=this.props,n=e.transparent;return e.visible?u.createElement("div",null,c.createPortal(u.createElement("div",{ref:this.content,onKeyDown:this.handleKeyDown,tabIndex:-1,style:{backgroundColor:n?"transparent":"white",bottom:0,left:0,position:"fixed",right:0,top:0,zIndex:1e3}},this.props.children),this.el)):null}}]),n}(u.Component),f=p;n.default=f;try{p.displayName="Modal",p.__docgenInfo={description:"",displayName:"Modal",props:{animated:{defaultValue:null,description:"",name:"animated",required:!1,type:{name:"boolean"}},animationType:{defaultValue:null,description:"The `animationType` prop controls how the modal animates.\n\n- `slide` slides in from the bottom\n- `fade` fades into view\n- `none` appears without an animation",name:"animationType",required:!1,type:{name:'"none" | "slide" | "fade"'}},transparent:{defaultValue:null,description:"The `transparent` prop determines whether your modal will fill the entire view.\nSetting this to `true` will render the modal over a transparent background.",name:"transparent",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"The `visible` prop determines whether your modal is visible.",name:"visible",required:!1,type:{name:"boolean"}},onRequestClose:{defaultValue:null,description:"The `onRequestClose` prop allows passing a function that will be called once the modal has been dismissed.\n_On the Android platform, this is a required function._",name:"onRequestClose",required:!1,type:{name:"() => void"}},onShow:{defaultValue:null,description:"The `onShow` prop allows passing a function that will be called once the modal has been shown.",name:"onShow",required:!1,type:{name:"(event: NativeSyntheticEvent<any>) => void"}},presentationStyle:{defaultValue:null,description:"The `presentationStyle` determines the style of modal to show",name:"presentationStyle",required:!1,type:{name:'"fullScreen" | "pageSheet" | "formSheet" | "overFullScreen"'}},supportedOrientations:{defaultValue:null,description:"The `supportedOrientations` prop allows the modal to be rotated to any of the specified orientations.\nOn iOS, the modal is still restricted by what's specified in your app's Info.plist's UISupportedInterfaceOrientations field.",name:"supportedOrientations",required:!1,type:{name:'("portrait" | "portrait-upside-down" | "landscape" | "landscape-left" | "landscape-right")[]'}},onDismiss:{defaultValue:null,description:"The `onDismiss` prop allows passing a function that will be called once the modal has been dismissed.",name:"onDismiss",required:!1,type:{name:"() => void"}},onOrientationChange:{defaultValue:null,description:"The `onOrientationChange` callback is called when the orientation changes while the modal is being displayed.\nThe orientation provided is only 'portrait' or 'landscape'. This callback is also called on initial render, regardless of the current orientation.",name:"onOrientationChange",required:!1,type:{name:"(event: NativeSyntheticEvent<any>) => void"}},hardwareAccelerated:{defaultValue:null,description:"Controls whether to force hardware acceleration for the underlying window.",name:"hardwareAccelerated",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/Modal.web.tsx#Modal"]={docgenInfo:p.__docgenInfo,name:"Modal",path:"src/components/Dialog/Modal.web.tsx#Modal"})}catch(h){}},"./src/components/Dialog/index.ts":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"Dialog",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"IDialogProps",{enumerable:!0,get:function(){return a.IDialogProps}}),Object.defineProperty(n,"ConfirmDialog",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(n,"IConfirmDialogProps",{enumerable:!0,get:function(){return i.IConfirmDialogProps}});var a=o(t("./src/components/Dialog/Dialog.tsx")),i=o(t("./src/components/Dialog/ConfirmDialog.tsx"));try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{isVisible:{defaultValue:null,description:"To show dialog or not",name:"isVisible",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Called when clicking on overlay or pressing Esc",name:"onClose",required:!1,type:{name:"() => void"}},header:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"In ConfirmDialog, you can pass null to render nothing. If it is undefined, it will use default value",name:"footer",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Title displayed in the header",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},cancelLabel:{defaultValue:null,description:"Label for cancel button",name:"cancelLabel",required:!1,type:{name:"string"}},confirmLabel:{defaultValue:null,description:"Label for confirm button",name:"confirmLabel",required:!1,type:{name:"string"}},onConfirm:{defaultValue:null,description:"Handler for confirm button",name:"onConfirm",required:!1,type:{name:"() => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Dialog/index.ts#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Dialog/index.ts#__class"})}catch(l){}},"./src/components/Loading/LoadingDots.tsx":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=a(t("./node_modules/@babel/runtime/helpers/createClass.js")),r=a(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=a(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=a(t("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(t("./node_modules/react/index.js")),c=t("./node_modules/react-native-web/dist/index.js"),m=function(e){function n(e){var t;return(0,i.default)(this,n),(t=(0,r.default)(this,(0,s.default)(n).call(this,e))).animationState=void 0,t.animationState={dotOpacities:t.initializeDots(),shouldAnimate:!0,targetOpacity:1},t}return(0,d.default)(n,e),(0,l.default)(n,[{key:"initializeDots",value:function(){for(var e=[],n=0;n<this.props.numberOfDots;n++){var t=new c.Animated.Value(this.props.minOpacity);e.push(t)}return e}},{key:"componentDidMount",value:function(){this.animateDots.bind(this)(0)}},{key:"componentWillUnmount",value:function(){this.animationState.shouldAnimate=!1}},{key:"animateDots",value:function(e){if(this.animationState.shouldAnimate){if(e>=this.animationState.dotOpacities.length){e=0;var n=this.props.minOpacity;this.animationState.targetOpacity=this.animationState.targetOpacity===n?1:n}var t=e+1;c.Animated.timing(this.animationState.dotOpacities[e],{duration:this.props.duration,toValue:this.animationState.targetOpacity}).start(this.animateDots.bind(this,t))}}},{key:"render",value:function(){var e=this.props,n=e.size,t=e.color,o=this.animationState.dotOpacities.map(function(e,o){return u.createElement(c.Animated.View,{key:o,style:{backgroundColor:t,borderRadius:"50%",height:n,marginLeft:3,marginRight:3,opacity:e,width:n}})});return u.createElement(c.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},o)}}]),n}(u.Component);m.defaultProps={color:"#aaa",duration:300,minOpacity:0,numberOfDots:3,size:10};var p=m;n.default=p;try{m.displayName="LoadingDots",m.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:{value:"3"},description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"300"},description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:{value:"0"},description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#aaa"},description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/LoadingDots.tsx#LoadingDots"]={docgenInfo:m.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/LoadingDots.tsx#LoadingDots"})}catch(f){}},"./src/components/Loading/index.ts":function(e,n,t){var o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"LoadingDots",{enumerable:!0,get:function(){return a.default}});var a=o(t("./src/components/Loading/LoadingDots.tsx"));try{LoadingDots.displayName="LoadingDots",LoadingDots.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:null,description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:null,description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/index.ts#LoadingDots"]={docgenInfo:LoadingDots.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/index.ts#LoadingDots"})}catch(i){}}}]);
//# sourceMappingURL=6.1e564aa56a5ac1b17323.js.map