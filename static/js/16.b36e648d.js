(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/components/Dialog/Dialog.mdx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var o=l(n("./node_modules/@babel/runtime/helpers/extends.js")),a=l(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=(l(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),r=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),s=n("./node_modules/react-native-web/dist/index.js"),c=n("./node_modules/docz/dist/index.esm.js"),d=n("./src/icons/index.ts"),y=n("./src/components/Dialog/index.ts"),u=n("./src/components/Button/index.ts"),m=n("./src/components/Layout/index.ts"),g=n("./src/components/Typography/index.ts"),p={},b="wrapper";function f(e){var t=e.components,n=(0,a.default)(e,["components"]);return(0,i.mdx)(b,(0,o.default)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"dialog"},"Dialog"),(0,i.mdx)("p",null,"Dialog has no predefined styling and handlers. The content, header and footer is completely in your control."),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)(c.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Box>\n      <Dialog\n        header={\n          <Spacing\n            padding={2}\n            flexDirection="row"\n            justifyContent="space-between"\n            alignItems="center"\n          >\n            <Heading>Title</Heading>\n            <TouchableOpacity onPress={toggle}>\n              <Icon name="x" size={24} />\n            </TouchableOpacity>\n          </Spacing>\n        }\n        footer={\n          <Spacing padding={2} flexDirection="row" justifyContent="flex-end">\n            <Button appearance="minimal" onPress={toggle} title="Cancel" />\n            <Spacing paddingLeft={2}>\n              <Button\n                color="primary"\n                onPress={() => console.log(\'Button clicked\')}\n                title="Accept"\n              />\n            </Spacing>\n          </Spacing>\n        }\n        isVisible={on}\n        onRequestClose={toggle}\n        useHistory={false}\n        getStyles={(props, theme) => ({\n          modalContainerStyle: {},\n          containerStyle: {},\n          bodyStyle: {},\n        })}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the dialog</Text>\n        </Box>\n      </Dialog>\n      <Button onPress={toggle} title="Open dialog" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Toggle:r.Toggle,TouchableOpacity:s.TouchableOpacity,Playground:c.Playground,Props:c.Props,Icon:d.Icon,Dialog:y.Dialog,Button:u.Button,Box:m.Box,Spacing:m.Spacing,Text:g.Text,Heading:g.Heading},mdxType:"Playground"},(0,i.mdx)(r.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var t=e.on,n=e.toggle;return(0,i.mdx)(m.Box,{mdxType:"Box"},(0,i.mdx)(y.Dialog,{header:(0,i.mdx)(m.Spacing,{padding:2,flexDirection:"row",justifyContent:"space-between",alignItems:"center",mdxType:"Spacing"},(0,i.mdx)(g.Heading,{mdxType:"Heading"},"Title"),(0,i.mdx)(s.TouchableOpacity,{onPress:n,mdxType:"TouchableOpacity"},(0,i.mdx)(d.Icon,{name:"x",size:24,mdxType:"Icon"}))),footer:(0,i.mdx)(m.Spacing,{padding:2,flexDirection:"row",justifyContent:"flex-end",mdxType:"Spacing"},(0,i.mdx)(u.Button,{appearance:"minimal",onPress:n,title:"Cancel",mdxType:"Button"}),(0,i.mdx)(m.Spacing,{paddingLeft:2,mdxType:"Spacing"},(0,i.mdx)(u.Button,{color:"primary",onPress:function(){return console.log("Button clicked")},title:"Accept",mdxType:"Button"}))),isVisible:t,onRequestClose:n,useHistory:!1,getStyles:function(e,t){return{modalContainerStyle:{},containerStyle:{},bodyStyle:{}}},mdxType:"Dialog"},(0,i.mdx)(m.Box,{height:1800,mdxType:"Box"},(0,i.mdx)(g.Text,{mdxType:"Text"},"Put any content in the dialog"))),(0,i.mdx)(u.Button,{onPress:n,title:"Open dialog",mdxType:"Button"}))})),(0,i.mdx)("h3",{id:"dialog-props"},"Dialog Props"),(0,i.mdx)(c.Props,{of:y.Dialog,mdxType:"Props"}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Dialog/Dialog.mdx"}}),f.isMDXComponent=!0},"./src/components/Dialog/Dialog.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDialogStyles=t.getDialogVariables=void 0,"undefined"!==typeof DialogVariables&&DialogVariables&&DialogVariables===Object(DialogVariables)&&Object.isExtensible(DialogVariables)&&Object.defineProperty(DialogVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogVariables",filename:"src/components/Dialog/Dialog.styles.ts"}});var n=function(e){return{body:{maxHeight:400},container:{backgroundColor:"white",borderRadius:e.controlBorderRadius.medium,elevation:1,maxWidth:600,minWidth:280,position:"relative",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}}};t.getDialogVariables=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDialogVariables",filename:"src/components/Dialog/Dialog.styles.ts"}}),"undefined"!==typeof DialogStyles&&DialogStyles&&DialogStyles===Object(DialogStyles)&&Object.isExtensible(DialogStyles)&&Object.defineProperty(DialogStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogStyles",filename:"src/components/Dialog/Dialog.styles.ts"}}),"undefined"!==typeof GetDialogStyles&&GetDialogStyles&&GetDialogStyles===Object(GetDialogStyles)&&Object.isExtensible(GetDialogStyles)&&Object.defineProperty(GetDialogStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDialogStyles",filename:"src/components/Dialog/Dialog.styles.ts"}});var l=function(e){var t=n(e);return{bodyStyle:t.body,containerStyle:t.container,modalContainerStyle:t.modalContainer}};t.getDialogStyles=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDialogStyles",filename:"src/components/Dialog/Dialog.styles.ts"}})},"./src/components/Dialog/Dialog.tsx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Dialog=void 0;var o=l(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),i=n("./src/theme/index.ts"),r=n("./src/utils/mergeStyles.ts"),s=n("./src/components/Modal/index.ts"),c=n("./src/components/Overlay/index.ts"),d=n("./src/components/Dialog/Dialog.styles.ts");"undefined"!==typeof DialogProps&&DialogProps&&DialogProps===Object(DialogProps)&&Object.isExtensible(DialogProps)&&Object.defineProperty(DialogProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogProps",filename:"src/components/Dialog/Dialog.tsx"}});var y=function(e){var t=e.children,n=e.footer,l=e.header,y=e.isBackgroundScrollable,u=void 0!==y&&y,m=e.isVisible,g=e.onRequestClose,p=void 0===g?function(){return null}:g,b=e.getStyles,f=e.useHistory,O=(0,i.useTheme)(),v=(0,r.mergeStyles)(d.getDialogStyles,b)(O),x=v.modalContainerStyle,D=v.containerStyle,S=v.bodyStyle;return o.createElement(s.Modal,{useHistory:f,visible:m,transparent:!0,animationType:"fade",onRequestClose:p,isBackgroundScrollable:u},o.createElement(a.View,{style:x},o.createElement(a.View,{style:D},l,o.createElement(a.View,{style:S},t),n),o.createElement(c.Overlay,{onPress:p})))};t.Dialog=y,y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dialog",filename:"src/components/Dialog/Dialog.tsx"}})},"./src/components/Dialog/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var l=n("./src/components/Dialog/Dialog.tsx");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})},"./src/components/Overlay/Overlay.styles.ts":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getOverlayStyles=t.getOverlayVariables=void 0;var o=l(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof OverlayVariables&&OverlayVariables&&OverlayVariables===Object(OverlayVariables)&&Object.isExtensible(OverlayVariables)&&Object.defineProperty(OverlayVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}});var a=function(e){return{overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}}};t.getOverlayVariables=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStyles&&OverlayStyles&&OverlayStyles===Object(OverlayStyles)&&Object.isExtensible(OverlayStyles)&&Object.defineProperty(OverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStylesProps&&OverlayStylesProps&&OverlayStylesProps===Object(OverlayStylesProps)&&Object.isExtensible(OverlayStylesProps)&&Object.defineProperty(OverlayStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStylesProps",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof GetOverlayStyles&&GetOverlayStyles&&GetOverlayStyles===Object(GetOverlayStyles)&&Object.isExtensible(GetOverlayStyles)&&Object.defineProperty(GetOverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}});var i=function(e,t){var n=e.transparent,l={overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}};return{overlayStyle:(0,o.default)({},l.overlay,{backgroundColor:n?"transparent":t.colors.background.overlay})}};t.getOverlayStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}})},"./src/components/Overlay/Overlay.tsx":function(e,t,n){var l=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var o=l(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),i=n("./src/theme/index.ts"),r=n("./src/utils/mergeStyles.ts"),s=n("./src/components/Overlay/Overlay.styles.ts"),c=function(e){var t=e.onPress,n=e.transparent,l=void 0!==n&&n,c=e.getStyles,d=(0,i.useTheme)(),y=(0,r.mergeStyles)(s.getOverlayStyles,c)({transparent:l},d).overlayStyle;return o.createElement(a.TouchableWithoutFeedback,{onPress:function(e){e.preventDefault(),t()}},o.createElement(a.View,{style:y}))};t.Overlay=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Overlay",filename:"src/components/Overlay/Overlay.tsx"}})},"./src/components/Overlay/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var l=n("./src/components/Overlay/Overlay.tsx");Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})})}}]);
//# sourceMappingURL=16.60947c7ec53ed41ff970.js.map