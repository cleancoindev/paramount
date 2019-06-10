(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/Dialog/Dialog.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var l=o(n("./node_modules/@babel/runtime/helpers/extends.js")),r=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=(o(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),s=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),i=n("./node_modules/react-native-web/dist/index.js"),c=n("./node_modules/docz/dist/index.esm.js"),d=n("./src/components/Icon/index.ts"),y=n("./src/components/Dialog/index.ts"),u=n("./src/components/Button/index.ts"),m=n("./src/components/Box/index.ts"),p=n("./src/components/Typography/index.ts"),g={},b="wrapper";function f(e){var t=e.components,n=(0,r.default)(e,["components"]);return(0,a.mdx)(b,(0,l.default)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"dialog"},"Dialog"),(0,a.mdx)("p",null,"Dialog has no predefined styling and handlers. The content, header and footer is completely in your control."),(0,a.mdx)("h3",{id:"usage"},"Usage"),(0,a.mdx)(c.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Box>\n      <Dialog\n        header={\n          <Box\n            padding={16}\n            flexDirection="row"\n            justifyContent="space-between"\n            alignItems="center"\n          >\n            <Heading>Title</Heading>\n            <TouchableOpacity onPress={toggle}>\n              <Icon name="x" size={24} />\n            </TouchableOpacity>\n          </Box>\n        }\n        footer={\n          <Box padding={16} flexDirection="row" justifyContent="flex-end">\n            <Button appearance="minimal" onPress={toggle} title="Cancel" />\n            <Box paddingLeft={16}>\n              <Button\n                color="primary"\n                onPress={() => console.log(\'Button clicked\')}\n                title="Accept"\n              />\n            </Box>\n          </Box>\n        }\n        isVisible={on}\n        onRequestClose={toggle}\n        useHistory={false}\n        getStyles={(props, theme) => ({\n          modalContainerStyle: {},\n          containerStyle: {},\n          bodyStyle: {},\n        })}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the dialog</Text>\n        </Box>\n      </Dialog>\n      <Button onPress={toggle} title="Open dialog" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Toggle:s.Toggle,TouchableOpacity:i.TouchableOpacity,Playground:c.Playground,Props:c.Props,Icon:d.Icon,Dialog:y.Dialog,Button:u.Button,Box:m.Box,Text:p.Text,Heading:p.Heading},mdxType:"Playground"},(0,a.mdx)(s.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var t=e.on,n=e.toggle;return(0,a.mdx)(m.Box,{mdxType:"Box"},(0,a.mdx)(y.Dialog,{header:(0,a.mdx)(m.Box,{padding:16,flexDirection:"row",justifyContent:"space-between",alignItems:"center",mdxType:"Box"},(0,a.mdx)(p.Heading,{mdxType:"Heading"},"Title"),(0,a.mdx)(i.TouchableOpacity,{onPress:n,mdxType:"TouchableOpacity"},(0,a.mdx)(d.Icon,{name:"x",size:24,mdxType:"Icon"}))),footer:(0,a.mdx)(m.Box,{padding:16,flexDirection:"row",justifyContent:"flex-end",mdxType:"Box"},(0,a.mdx)(u.Button,{appearance:"minimal",onPress:n,title:"Cancel",mdxType:"Button"}),(0,a.mdx)(m.Box,{paddingLeft:16,mdxType:"Box"},(0,a.mdx)(u.Button,{color:"primary",onPress:function(){return console.log("Button clicked")},title:"Accept",mdxType:"Button"}))),isVisible:t,onRequestClose:n,useHistory:!1,getStyles:function(e,t){return{modalContainerStyle:{},containerStyle:{},bodyStyle:{}}},mdxType:"Dialog"},(0,a.mdx)(m.Box,{height:1800,mdxType:"Box"},(0,a.mdx)(p.Text,{mdxType:"Text"},"Put any content in the dialog"))),(0,a.mdx)(u.Button,{onPress:n,title:"Open dialog",mdxType:"Button"}))})),(0,a.mdx)("h3",{id:"dialog-props"},"Dialog Props"),(0,a.mdx)(c.Props,{of:y.Dialog,mdxType:"Props"}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Dialog/Dialog.mdx"}}),f.isMDXComponent=!0},"./src/components/Dialog/Dialog.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDialogStyles=void 0,"undefined"!==typeof DialogStyles&&DialogStyles&&DialogStyles===Object(DialogStyles)&&Object.isExtensible(DialogStyles)&&Object.defineProperty(DialogStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogStyles",filename:"src/components/Dialog/Dialog.styles.ts"}}),"undefined"!==typeof GetDialogStyles&&GetDialogStyles&&GetDialogStyles===Object(GetDialogStyles)&&Object.isExtensible(GetDialogStyles)&&Object.defineProperty(GetDialogStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDialogStyles",filename:"src/components/Dialog/Dialog.styles.ts"}});var n=function(e,t){return{bodyStyle:{maxHeight:400},containerStyle:{backgroundColor:"white",borderRadius:t.controlBorderRadius.medium,elevation:1,maxHeight:"80%",maxWidth:600,minWidth:280,position:"relative",zIndex:1},contentContainerStyle:{},modalContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"},overlayStyle:{}}};t.getDialogStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDialogStyles",filename:"src/components/Dialog/Dialog.styles.ts"}})},"./src/components/Dialog/Dialog.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Dialog=void 0;var l=o(n("./node_modules/react/index.js")),r=n("./node_modules/react-native-web/dist/index.js"),a=n("./src/theme/index.ts"),s=n("./src/utils/mergeStyles.ts"),i=n("./src/components/Modal/index.ts"),c=n("./src/components/Overlay/index.ts"),d=n("./src/components/Dialog/Dialog.styles.ts");"undefined"!==typeof DialogProps&&DialogProps&&DialogProps===Object(DialogProps)&&Object.isExtensible(DialogProps)&&Object.defineProperty(DialogProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogProps",filename:"src/components/Dialog/Dialog.tsx"}});var y=function(e){var t=e.children,n=e.footer,o=e.header,y=e.shouldLockBodyScroll,u=void 0===y||y,m=e.isVisible,p=e.onRequestClose,g=void 0===p?function(){return null}:p,b=e.getStyles,f=e.useHistory,v=(0,a.useTheme)(),x=(0,s.mergeStyles)(d.getDialogStyles,b)({},v),O=x.modalContainerStyle,j=x.containerStyle,_=x.bodyStyle,S=x.contentContainerStyle,D=x.overlayStyle;return l.createElement(i.Modal,{useHistory:f,visible:m,transparent:!0,animationType:"fade",onRequestClose:g,shouldLockBodyScroll:u},l.createElement(r.View,{style:O},l.createElement(r.View,{style:j},o,l.createElement(r.ScrollView,{contentContainerStyle:S,style:_},t),n),l.createElement(c.Overlay,{getStyles:function(){return{overlayStyle:D}},onPress:g})))};t.Dialog=y,y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dialog",filename:"src/components/Dialog/Dialog.tsx"}})},"./src/components/Dialog/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Dialog/Dialog.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var l=o(n("./node_modules/react/index.js")),r=o(n("./node_modules/react-icons/fi/index.esm.js")),a=n("./src/theme/index.ts"),s=n("./src/components/Typography/Text.styles.ts");var i=function(e){var t=e.name,n=e.color,o=e.size,i=(0,a.useTheme)(),c=r["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return l.createElement(c,{color:n?(0,s.getTextColor)(i.colors.text)(n):n,size:o})};t.Icon=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Icon/Icon.web.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Overlay/Overlay.styles.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getOverlayStyles=t.getOverlayVariables=void 0;var l=o(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof OverlayVariables&&OverlayVariables&&OverlayVariables===Object(OverlayVariables)&&Object.isExtensible(OverlayVariables)&&Object.defineProperty(OverlayVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}});var r=function(e){return{overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}}};t.getOverlayVariables=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStyles&&OverlayStyles&&OverlayStyles===Object(OverlayStyles)&&Object.isExtensible(OverlayStyles)&&Object.defineProperty(OverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStylesProps&&OverlayStylesProps&&OverlayStylesProps===Object(OverlayStylesProps)&&Object.isExtensible(OverlayStylesProps)&&Object.defineProperty(OverlayStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStylesProps",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof GetOverlayStyles&&GetOverlayStyles&&GetOverlayStyles===Object(GetOverlayStyles)&&Object.isExtensible(GetOverlayStyles)&&Object.defineProperty(GetOverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}});var a=function(e,t){var n=e.transparent,o={overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}};return{overlayStyle:(0,l.default)({},o.overlay,{backgroundColor:n?"transparent":t.colors.background.overlay})}};t.getOverlayStyles=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}})},"./src/components/Overlay/Overlay.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var l=o(n("./node_modules/react/index.js")),r=n("./node_modules/react-native-web/dist/index.js"),a=n("./src/theme/index.ts"),s=n("./src/utils/mergeStyles.ts"),i=n("./src/components/Overlay/Overlay.styles.ts"),c=function(e){var t=e.onPress,n=e.transparent,o=void 0!==n&&n,c=e.getStyles,d=(0,a.useTheme)(),y=(0,s.mergeStyles)(i.getOverlayStyles,c)({transparent:o},d).overlayStyle;return l.createElement(r.TouchableWithoutFeedback,{onPress:function(e){e.preventDefault(),t()}},l.createElement(r.View,{style:y}))};t.Overlay=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Overlay",filename:"src/components/Overlay/Overlay.tsx"}})},"./src/components/Overlay/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Overlay/Overlay.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})}}]);
//# sourceMappingURL=19.6971a967f6fc7e7d002f.js.map