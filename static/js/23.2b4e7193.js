(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/components/Drawer/Drawer.mdx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=b;var o=n(r("./node_modules/@babel/runtime/helpers/extends.js")),l=n(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(r("./node_modules/react/index.js")),s=r("./node_modules/@mdx-js/react/dist/index.es.js"),i=r("./node_modules/docz/dist/index.esm.js"),d=r("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),u=r("./src/components/Drawer/index.ts"),c=r("./src/components/Button/index.ts"),m=r("./src/components/Box/index.ts"),p=r("./src/components/Typography/index.ts"),y={},g="wrapper";function b(e){var t=e.components,r=(0,l.default)(e,["components"]);return(0,s.mdx)(g,(0,o.default)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"drawer"},"Drawer"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(i.Playground,{__position:0,__code:"<Drawer />\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} isInline title=\"Open drawer menu\" />\n      <Drawer\n        space={null} // px or %, null fits the content\n        offset={0}\n        position=\"bottom\"\n        isVisible={on}\n        onClose={toggle}\n        getStyles={(props, theme) => ({\n          modalContainerStyle: {},\n          containerStyle: {},\n        })}\n      >\n        <Box padding={24}>\n          <Box elevation={1} backgroundColor=\"white\" borderRadius={4}>\n            {[\n              {\n                onPress: toggle,\n                title: 'Menu Option 1',\n                color: 'danger',\n              },\n              {\n                onPress: toggle,\n                title: 'Menu Option 2',\n                color: 'primary',\n              },\n              {\n                onPress: toggle,\n                title: 'Menu Option 3',\n                color: 'secondary',\n              },\n              {\n                onPress: toggle,\n                title: 'Menu Option 4',\n              },\n            ].map(option => (\n              <Button key={option.title} appearance=\"minimal\" {...option} />\n            ))}\n          </Box>\n          <Box paddingTop={24}>\n            <Button onPress={toggle} title=\"Close\" />\n          </Box>\n        </Box>\n      </Drawer>\n    </>\n  )}\n</Toggle>",__scope:{props:this?this.props:r,Playground:i.Playground,Props:i.Props,Toggle:d.Toggle,Drawer:u.Drawer,Button:c.Button,Box:m.Box,Text:p.Text},mdxType:"Playground"},(0,s.mdx)(u.Drawer,{mdxType:"Drawer"}),(0,s.mdx)(d.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,r=e.toggle;return(0,s.mdx)(a.default.Fragment,null,(0,s.mdx)(c.Button,{onPress:r,isInline:!0,title:"Open drawer menu",mdxType:"Button"}),(0,s.mdx)(u.Drawer,{space:null,offset:0,position:"bottom",isVisible:t,onClose:r,getStyles:function(e,t){return{modalContainerStyle:{},containerStyle:{}}},mdxType:"Drawer"},(0,s.mdx)(m.Box,{padding:24,mdxType:"Box"},(0,s.mdx)(m.Box,{elevation:1,backgroundColor:"white",borderRadius:4,mdxType:"Box"},[{onPress:r,title:"Menu Option 1",color:"danger"},{onPress:r,title:"Menu Option 2",color:"primary"},{onPress:r,title:"Menu Option 3",color:"secondary"},{onPress:r,title:"Menu Option 4"}].map(function(e){return(0,s.mdx)(c.Button,(0,o.default)({key:e.title,appearance:"minimal"},e,{mdxType:"Button"}))})),(0,s.mdx)(m.Box,{paddingTop:24,mdxType:"Box"},(0,s.mdx)(c.Button,{onPress:r,title:"Close",mdxType:"Button"})))))})),(0,s.mdx)("h3",{id:"variants"},"Variants"),(0,s.mdx)(i.Playground,{__position:1,__code:'<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open bottom drawer" />\n      <Drawer space="30%" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open top drawer" />\n      <Drawer space="30%" position="top" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open left drawer" />\n      <Drawer space="30%" position="left" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open right drawer" />\n      <Drawer space="30%" position="right" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>',__scope:{props:this?this.props:r,Playground:i.Playground,Props:i.Props,Toggle:d.Toggle,Drawer:u.Drawer,Button:c.Button,Box:m.Box,Text:p.Text},mdxType:"Playground"},(0,s.mdx)(d.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,r=e.toggle;return(0,s.mdx)(a.default.Fragment,null,(0,s.mdx)(c.Button,{onPress:r,title:"Open bottom drawer",mdxType:"Button"}),(0,s.mdx)(u.Drawer,{space:"30%",isVisible:t,onClose:r,mdxType:"Drawer"},(0,s.mdx)(m.Box,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box"})))}),(0,s.mdx)(d.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,r=e.toggle;return(0,s.mdx)(a.default.Fragment,null,(0,s.mdx)(c.Button,{onPress:r,title:"Open top drawer",mdxType:"Button"}),(0,s.mdx)(u.Drawer,{space:"30%",position:"top",isVisible:t,onClose:r,mdxType:"Drawer"},(0,s.mdx)(m.Box,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box"})))}),(0,s.mdx)(d.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,r=e.toggle;return(0,s.mdx)(a.default.Fragment,null,(0,s.mdx)(c.Button,{onPress:r,title:"Open left drawer",mdxType:"Button"}),(0,s.mdx)(u.Drawer,{space:"30%",position:"left",isVisible:t,onClose:r,mdxType:"Drawer"},(0,s.mdx)(m.Box,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box"})))}),(0,s.mdx)(d.Toggle,{mdxType:"Toggle"},function(e){var t=e.on,r=e.toggle;return(0,s.mdx)(a.default.Fragment,null,(0,s.mdx)(c.Button,{onPress:r,title:"Open right drawer",mdxType:"Button"}),(0,s.mdx)(u.Drawer,{space:"30%",position:"right",isVisible:t,onClose:r,mdxType:"Drawer"},(0,s.mdx)(m.Box,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box"})))})))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Drawer/Drawer.mdx"}}),b.isMDXComponent=!0},"./src/components/Drawer/Drawer.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDrawerStyles=t.getDrawerVariables=void 0,"undefined"!==typeof DrawerVariables&&DrawerVariables&&DrawerVariables===Object(DrawerVariables)&&Object.isExtensible(DrawerVariables)&&Object.defineProperty(DrawerVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DrawerVariables",filename:"src/components/Drawer/Drawer.styles.ts"}});var r=function(e){return{container:{position:"absolute",width:"100%",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}}};t.getDrawerVariables=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDrawerVariables",filename:"src/components/Drawer/Drawer.styles.ts"}}),"undefined"!==typeof DrawerStyles&&DrawerStyles&&DrawerStyles===Object(DrawerStyles)&&Object.isExtensible(DrawerStyles)&&Object.defineProperty(DrawerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}}),"undefined"!==typeof GetDrawerStyles&&GetDrawerStyles&&GetDrawerStyles===Object(GetDrawerStyles)&&Object.isExtensible(GetDrawerStyles)&&Object.defineProperty(GetDrawerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}});var n=function(e,t){var r={container:{position:"absolute",width:"100%",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}};return{containerStyle:r.container,modalContainerStyle:r.modalContainer}};t.getDrawerStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}})},"./src/components/Drawer/Drawer.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Drawer=void 0;var l=o(r("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=o(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),s=n(r("./node_modules/react/index.js")),i=r("./node_modules/react-native-web/dist/index.js"),d=r("./node_modules/react-spring/native.cjs.js"),u=r("./src/constants/Animation.ts"),c=r("./src/theme/index.ts"),m=r("./src/utils/mergeStyles.ts"),p=r("./src/components/Modal/index.ts"),y=r("./src/components/Overlay/index.ts"),g=r("./src/components/Drawer/Drawer.styles.ts"),b=(0,d.animated)(i.View);"undefined"!==typeof DrawerProps&&DrawerProps&&DrawerProps===Object(DrawerProps)&&Object.isExtensible(DrawerProps)&&Object.defineProperty(DrawerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DrawerProps",filename:"src/components/Drawer/Drawer.tsx"}});var f=function(e){var t,r=e.children,n=e.isVisible,o=e.onClose,f=void 0===o?function(){return null}:o,w=e.position,x=void 0===w?"bottom":w,O=e.offset,v=void 0===O?0:O,D=e.space,h=e.getStyles,j=(0,c.useTheme)(),_=(0,m.mergeStyles)(g.getDrawerStyles,h)({},j),P=_.modalContainerStyle,S=_.containerStyle,T=(0,d.useSpring)((t={},(0,a.default)(t,x,v),(0,a.default)(t,"config",u.springDefaultConfig),(0,a.default)(t,"from",(0,a.default)({},x,-600)),(0,a.default)(t,"reset",!0),t));return s.createElement(p.Modal,{visible:n,transparent:!0,onRequestClose:f},s.createElement(i.View,{style:P},s.createElement(b,{style:(0,l.default)({},S,(0,a.default)({},x,T[x]),("left"===x||"right"===x)&&D&&{height:"100%",width:D},("bottom"===x||"top"===x)&&D&&{height:D,width:"100%"})},r),s.createElement(y.Overlay,{onPress:f})))};t.Drawer=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Drawer",filename:"src/components/Drawer/Drawer.tsx"}})},"./src/components/Drawer/index.ts":function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("./src/components/Drawer/Drawer.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Overlay/Overlay.styles.ts":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getOverlayStyles=t.getOverlayVariables=void 0;var o=n(r("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof OverlayVariables&&OverlayVariables&&OverlayVariables===Object(OverlayVariables)&&Object.isExtensible(OverlayVariables)&&Object.defineProperty(OverlayVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}});var l=function(e){return{overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}}};t.getOverlayVariables=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayVariables",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStyles&&OverlayStyles&&OverlayStyles===Object(OverlayStyles)&&Object.isExtensible(OverlayStyles)&&Object.defineProperty(OverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStylesProps&&OverlayStylesProps&&OverlayStylesProps===Object(OverlayStylesProps)&&Object.isExtensible(OverlayStylesProps)&&Object.defineProperty(OverlayStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStylesProps",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof GetOverlayStyles&&GetOverlayStyles&&GetOverlayStyles===Object(GetOverlayStyles)&&Object.isExtensible(GetOverlayStyles)&&Object.defineProperty(GetOverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}});var a=function(e,t){var r=e.transparent,n={overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}};return{overlayStyle:(0,o.default)({},n.overlay,{backgroundColor:r?"transparent":t.colors.background.overlay})}};t.getOverlayStyles=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}})},"./src/components/Overlay/Overlay.tsx":function(e,t,r){var n=r("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var o=n(r("./node_modules/react/index.js")),l=r("./node_modules/react-native-web/dist/index.js"),a=r("./src/theme/index.ts"),s=r("./src/utils/mergeStyles.ts"),i=r("./src/components/Overlay/Overlay.styles.ts"),d=function(e){var t=e.onPress,r=e.transparent,n=void 0!==r&&r,d=e.getStyles,u=(0,a.useTheme)(),c=(0,s.mergeStyles)(i.getOverlayStyles,d)({transparent:n},u).overlayStyle;return o.createElement(l.TouchableWithoutFeedback,{onPress:function(e){e.preventDefault(),t()}},o.createElement(l.View,{style:c}))};t.Overlay=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Overlay",filename:"src/components/Overlay/Overlay.tsx"}})},"./src/components/Overlay/index.ts":function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r("./src/components/Overlay/Overlay.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})}}]);
//# sourceMappingURL=23.c91b2cda408526d1cb1e.js.map