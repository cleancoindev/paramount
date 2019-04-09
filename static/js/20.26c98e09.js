(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"./src/components/Drawer/Drawer.mdx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=r(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=r(n("./node_modules/@babel/runtime/helpers/createClass.js")),i=r(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),s=r(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=r(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=r(n("./node_modules/react/index.js")),c=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),m=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),g=r(n("./src/components/Drawer/Drawer.tsx")),f=n("./src/components/Button/index.ts"),y=n("./src/components/Layout/index.ts"),h=n("./src/components/Typography/index.ts"),w=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,i.default)(this,(0,s.default)(t).call(this,e))).layout=null,n}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,l.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"drawer"}},"Drawer"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(p.Playground,{__position:0,__code:'<Drawer\n  space="30%"\n  isVisible={false}\n  onClose={() => console.log(\'Close\')}\n  offset={0}\n  position="left"\n  getStyles={(props, theme) => ({\n    modalContainerStyle: {},\n    containerStyle: {},\n  })}\n/>',__scope:{props:this?this.props:n,Toggle:m.Toggle,Drawer:g.default,Button:f.Button,Box:y.Box,Spacing:y.Spacing,Text:h.Text}},u.default.createElement(g.default,{space:"30%",isVisible:!1,onClose:function(){return console.log("Close")},offset:0,position:"left",getStyles:function(e,t){return{modalContainerStyle:{},containerStyle:{}}}})),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"variants"}},"Variants"),u.default.createElement(p.Playground,{__position:1,__code:'<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open bottom drawer" />\n      <Drawer space="30%" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open top drawer" />\n      <Drawer space="30%" position="top" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open left drawer" />\n      <Drawer space="30%" position="left" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open right drawer" />\n      <Drawer space="30%" position="right" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Toggle:m.Toggle,Drawer:g.default,Button:f.Button,Box:y.Box,Spacing:y.Spacing,Text:h.Text}},u.default.createElement(m.Toggle,null,function(e){var t=e.on,n=e.toggle;return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.Button,{onPress:n,title:"Open bottom drawer"}),u.default.createElement(g.default,{space:"30%",isVisible:t,onClose:n},u.default.createElement(y.Box,{width:"100%",height:"100%",backgroundColor:"white"})))}),u.default.createElement(m.Toggle,null,function(e){var t=e.on,n=e.toggle;return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.Button,{onPress:n,title:"Open top drawer"}),u.default.createElement(g.default,{space:"30%",position:"top",isVisible:t,onClose:n},u.default.createElement(y.Box,{width:"100%",height:"100%",backgroundColor:"white"})))}),u.default.createElement(m.Toggle,null,function(e){var t=e.on,n=e.toggle;return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.Button,{onPress:n,title:"Open left drawer"}),u.default.createElement(g.default,{space:"30%",position:"left",isVisible:t,onClose:n},u.default.createElement(y.Box,{width:"100%",height:"100%",backgroundColor:"white"})))}),u.default.createElement(m.Toggle,null,function(e){var t=e.on,n=e.toggle;return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.Button,{onPress:n,title:"Open right drawer"}),u.default.createElement(g.default,{space:"30%",position:"right",isVisible:t,onClose:n},u.default.createElement(y.Box,{width:"100%",height:"100%",backgroundColor:"white"})))})))}}]),t}(u.default.Component);t.default=w},"./src/components/Drawer/Drawer.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDrawerStyles=t.getDrawerVariables=void 0;var n=function(e){return{container:{position:"absolute",width:"100%",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}}};t.getDrawerVariables=n;var r=function(e){var t={container:{position:"absolute",width:"100%",zIndex:1},modalContainer:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}};return{containerStyle:t.container,modalContainerStyle:t.modalContainer}};t.getDrawerStyles=r;try{n.displayName="getDrawerVariables",n.__docgenInfo={description:"",displayName:"getDrawerVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/Drawer.styles.ts#getDrawerVariables"]={docgenInfo:n.__docgenInfo,name:"getDrawerVariables",path:"src/components/Drawer/Drawer.styles.ts#getDrawerVariables"})}catch(l){}try{r.displayName="getDrawerStyles",r.__docgenInfo={description:"",displayName:"getDrawerStyles",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Drawer/Drawer.styles.ts#getDrawerStyles"]={docgenInfo:r.__docgenInfo,name:"getDrawerStyles",path:"src/components/Drawer/Drawer.styles.ts#getDrawerStyles"})}catch(l){}},"./src/components/Drawer/Drawer.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),l=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Drawer=void 0;var a=l(n("./node_modules/@babel/runtime/helpers/defineProperty.js")),o=l(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),i=r(n("./node_modules/react/index.js")),s=n("./node_modules/react-native-web/dist/index.js"),d=n("./src/theme/index.ts"),u=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Modal/index.ts"),p=n("./src/components/Overlay/index.ts"),m=n("./src/components/Drawer/Drawer.styles.ts"),g=(0,d.withTheme)(function(e){var t=e.children,n=e.isVisible,r=e.onClose,l=void 0===r?function(){return null}:r,d=e.position,g=void 0===d?"bottom":d,f=e.offset,y=void 0===f?0:f,h=e.space,w=e.theme,S=e.getStyles,b=(0,u.mergeStyles)(m.getDrawerStyles,S)(w),v=b.modalContainerStyle,_=b.containerStyle;if(!n)return null;var V=new s.Animated.Value(-500);return s.Animated.spring(V,{bounciness:0,speed:70,toValue:y}).start(),i.createElement(c.Modal,{visible:!0,transparent:!0,onRequestClose:l},i.createElement(s.View,{style:v},i.createElement(s.Animated.View,{style:(0,o.default)({},_,(0,a.default)({},g,V),("left"===g||"right"===g)&&h&&{height:"100%",width:h},("bottom"===g||"top"===g)&&h&&{height:h,width:"100%"})},t),i.createElement(p.Overlay,{onPress:l})))});t.Drawer=g;var f=g;t.default=f},"./src/components/Overlay/Overlay.styles.ts":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getOverlayStyles=t.getOverlayVariables=void 0;var l=r(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=function(e){return{overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}}};t.getOverlayVariables=a;t.getOverlayStyles=function(e,t){var n=e.transparent,r={overlay:{bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}};return{overlayStyle:(0,l.default)({},r.overlay,{backgroundColor:n?"transparent":t.colors.background.overlay})}};try{a.displayName="getOverlayVariables",a.__docgenInfo={description:"",displayName:"getOverlayVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlay/Overlay.styles.ts#getOverlayVariables"]={docgenInfo:a.__docgenInfo,name:"getOverlayVariables",path:"src/components/Overlay/Overlay.styles.ts#getOverlayVariables"})}catch(o){}},"./src/components/Overlay/Overlay.tsx":function(e,t,n){var r=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Overlay=void 0;var l=r(n("./node_modules/react/index.js")),a=n("./node_modules/react-native-web/dist/index.js"),o=n("./src/theme/index.ts"),i=n("./src/utils/mergeStyles.ts"),s=n("./src/components/Overlay/Overlay.styles.ts"),d=(0,o.withTheme)(function(e){var t=e.onPress,n=e.transparent,r=void 0!==n&&n,o=e.theme,d=e.getStyles,u=(0,i.mergeStyles)(s.getOverlayStyles,d)({transparent:r},o).overlayStyle;return l.createElement(a.TouchableWithoutFeedback,{onPress:function(e){e.preventDefault(),t()}},l.createElement(a.View,{style:u}))});t.Overlay=d},"./src/components/Overlay/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n("./src/components/Overlay/Overlay.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})}}]);
//# sourceMappingURL=20.7aba8e595b8ba48a0e5f.js.map