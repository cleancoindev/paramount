(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),s=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var l={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},i=function(e){var t=e.children,n=e.style,i=e.testID,c=Object(r.a)(e,["children","style","testID"]),u=Object(a.a)(),m=[],d={};for(var b in c)if(b){var p=l[b];if(p){var f=p(c[b],u);m.push(f)}else d[b]=c[b]}return o.createElement(s.a,{testID:i,style:[d,m,n],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:55}},t)};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Drawer/Drawer.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=n("./node_modules/react/index.js"),a=n.n(s),l=n("./node_modules/@mdx-js/react/dist/index.es.js"),i=n("./node_modules/docz/dist/index.esm.js"),c=n("./src/components/Box/Box.tsx"),u=n("./src/components/Button/Button.tsx"),m=n("./src/components/Drawer/Drawer.tsx"),d=n("./src/components/Typography/Text.tsx"),b=n("./src/components/Helpers/Toggle.tsx"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Drawer/Drawer.mdx",f={},y="wrapper";function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)(y,Object(o.a)({},f,n,{components:t,mdxType:"MDXLayout",__source:{fileName:p,lineNumber:21}}),Object(l.b)("h1",Object(o.a)({id:"drawer"},{__source:{fileName:p,lineNumber:24}}),"Drawer"),Object(l.b)("h3",Object(o.a)({id:"usage"},{__source:{fileName:p,lineNumber:27}}),"Usage"),Object(l.b)(i.c,{__position:0,__code:"<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} isInline title=\"Open drawer menu\" />\n      <Drawer\n        space={undefined} // px or %, null fits the content\n        offset={0}\n        position=\"bottom\"\n        isVisible={on}\n        onClose={toggle}\n        getStyles={(props, theme) => ({\n          modalContainerStyle: {},\n          containerStyle: {},\n        })}\n      >\n        <Box padding={24}>\n          <Box elevation={1} backgroundColor=\"white\" borderRadius={4}>\n            {[\n              {\n                onPress: toggle,\n                title: 'Menu Option 1',\n                color: 'danger',\n              },\n              {\n                onPress: toggle,\n                title: 'Menu Option 2',\n                color: 'primary',\n              },\n              {\n                onPress: toggle,\n                title: 'Menu Option 3',\n                color: 'secondary',\n              },\n              {\n                onPress: toggle,\n                title: 'Menu Option 4',\n              },\n            ].map(option => (\n              <Button key={option.title} appearance=\"minimal\" {...option} />\n            ))}\n          </Box>\n          <Box paddingTop={24}>\n            <Button onPress={toggle} title=\"Close\" />\n          </Box>\n        </Box>\n      </Drawer>\n    </>\n  )}\n</Toggle>",__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Box:c.a,Button:u.a,Drawer:m.a,Text:d.a,Toggle:b.a},mdxType:"Playground",__source:{fileName:p,lineNumber:30}},Object(l.b)(b.a,{mdxType:"Toggle",__source:{fileName:p,lineNumber:40}},function(e){var t=e.on,n=e.toggle;return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.a,{onPress:n,isInline:!0,title:"Open drawer menu",mdxType:"Button",__source:{fileName:p,lineNumber:45}}),Object(l.b)(m.a,{space:void 0,offset:0,position:"bottom",isVisible:t,onClose:n,getStyles:function(e,t){return{modalContainerStyle:{},containerStyle:{}}},mdxType:"Drawer",__source:{fileName:p,lineNumber:46}},Object(l.b)(c.a,{padding:24,mdxType:"Box",__source:{fileName:p,lineNumber:51}},Object(l.b)(c.a,{elevation:1,backgroundColor:"white",borderRadius:4,mdxType:"Box",__source:{fileName:p,lineNumber:52}},[{onPress:n,title:"Menu Option 1",color:"danger"},{onPress:n,title:"Menu Option 2",color:"primary"},{onPress:n,title:"Menu Option 3",color:"secondary"},{onPress:n,title:"Menu Option 4"}].map(function(e){return Object(l.b)(u.a,Object(o.a)({key:e.title,appearance:"minimal"},e,{mdxType:"Button",__source:{fileName:p,lineNumber:68}}))})),Object(l.b)(c.a,{paddingTop:24,mdxType:"Box",__source:{fileName:p,lineNumber:70}},Object(l.b)(u.a,{onPress:n,title:"Close",mdxType:"Button",__source:{fileName:p,lineNumber:71}})))))})),Object(l.b)("h3",Object(o.a)({id:"variants"},{__source:{fileName:p,lineNumber:78}}),"Variants"),Object(l.b)(i.c,{__position:1,__code:'<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open bottom drawer" />\n      <Drawer space="30%" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open top drawer" />\n      <Drawer space="30%" position="top" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open left drawer" />\n      <Drawer space="30%" position="left" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>\n<Toggle>\n  {({ on, toggle }) => (\n    <>\n      <Button onPress={toggle} title="Open right drawer" />\n      <Drawer space="30%" position="right" isVisible={on} onClose={toggle}>\n        <Box width="100%" height="100%" backgroundColor="white" />\n      </Drawer>\n    </>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Box:c.a,Button:u.a,Drawer:m.a,Text:d.a,Toggle:b.a},mdxType:"Playground",__source:{fileName:p,lineNumber:81}},Object(l.b)(b.a,{mdxType:"Toggle",__source:{fileName:p,lineNumber:91}},function(e){var t=e.on,n=e.toggle;return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.a,{onPress:n,title:"Open bottom drawer",mdxType:"Button",__source:{fileName:p,lineNumber:96}}),Object(l.b)(m.a,{space:"30%",isVisible:t,onClose:n,mdxType:"Drawer",__source:{fileName:p,lineNumber:97}},Object(l.b)(c.a,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box",__source:{fileName:p,lineNumber:98}})))}),Object(l.b)(b.a,{mdxType:"Toggle",__source:{fileName:p,lineNumber:102}},function(e){var t=e.on,n=e.toggle;return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.a,{onPress:n,title:"Open top drawer",mdxType:"Button",__source:{fileName:p,lineNumber:107}}),Object(l.b)(m.a,{space:"30%",position:"top",isVisible:t,onClose:n,mdxType:"Drawer",__source:{fileName:p,lineNumber:108}},Object(l.b)(c.a,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box",__source:{fileName:p,lineNumber:109}})))}),Object(l.b)(b.a,{mdxType:"Toggle",__source:{fileName:p,lineNumber:113}},function(e){var t=e.on,n=e.toggle;return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.a,{onPress:n,title:"Open left drawer",mdxType:"Button",__source:{fileName:p,lineNumber:118}}),Object(l.b)(m.a,{space:"30%",position:"left",isVisible:t,onClose:n,mdxType:"Drawer",__source:{fileName:p,lineNumber:119}},Object(l.b)(c.a,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box",__source:{fileName:p,lineNumber:120}})))}),Object(l.b)(b.a,{mdxType:"Toggle",__source:{fileName:p,lineNumber:124}},function(e){var t=e.on,n=e.toggle;return Object(l.b)(a.a.Fragment,null,Object(l.b)(u.a,{onPress:n,title:"Open right drawer",mdxType:"Button",__source:{fileName:p,lineNumber:129}}),Object(l.b)(m.a,{space:"30%",position:"right",isVisible:t,onClose:n,mdxType:"Drawer",__source:{fileName:p,lineNumber:130}},Object(l.b)(c.a,{width:"100%",height:"100%",backgroundColor:"white",mdxType:"Box",__source:{fileName:p,lineNumber:131}})))})))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Drawer/Drawer.mdx"}}),g.isMDXComponent=!0},"./src/components/Drawer/Drawer.tsx":function(e,t,n){"use strict";var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/View/index.js"),l=n("./node_modules/react-spring/native.cjs.js"),i=n("./src/constants/Animation.ts"),c=n("./src/theme/Theme.tsx"),u=n("./src/utils/mergeStyles.ts"),m=n("./src/components/Modal/HistoryModal.web.tsx"),d=n("./src/components/Overlay/Overlay.tsx");"undefined"!==typeof DrawerStyles&&DrawerStyles&&DrawerStyles===Object(DrawerStyles)&&Object.isExtensible(DrawerStyles)&&Object.defineProperty(DrawerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}}),"undefined"!==typeof GetDrawerStyles&&GetDrawerStyles&&GetDrawerStyles===Object(GetDrawerStyles)&&Object.isExtensible(GetDrawerStyles)&&Object.defineProperty(GetDrawerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}});var b=function(e,t){return{containerStyle:{position:"absolute",width:"100%",zIndex:1},modalContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"}}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDrawerStyles",filename:"src/components/Drawer/Drawer.styles.ts"}}),n.d(t,"a",function(){return y});var p="/home/travis/build/WeTrustPlatform/paramount/src/components/Drawer/Drawer.tsx",f=Object(l.animated)(a.a);"undefined"!==typeof DrawerProps&&DrawerProps&&DrawerProps===Object(DrawerProps)&&Object.isExtensible(DrawerProps)&&Object.defineProperty(DrawerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DrawerProps",filename:"src/components/Drawer/Drawer.tsx"}});var y=function(e){var t,n=e.children,y=e.isVisible,g=e.onClose,O=void 0===g?function(){return null}:g,_=e.position,j=void 0===_?"bottom":_,v=e.offset,x=void 0===v?0:v,h=e.space,w=e.getStyles,P=Object(c.a)(),N=Object(u.a)(b,w,P.components.getDrawerStyles)({},P),T=N.modalContainerStyle,D=N.containerStyle,S=Object(l.useSpring)((t={},Object(o.a)(t,j,x),Object(o.a)(t,"config",i.a),Object(o.a)(t,"from",Object(o.a)({},j,-600)),Object(o.a)(t,"reset",!0),t));return s.createElement(m.a,{visible:y,transparent:!0,onRequestClose:O,__source:{fileName:p,lineNumber:62}},s.createElement(a.a,{style:T,__source:{fileName:p,lineNumber:63}},s.createElement(f,{style:Object(r.a)({},D,Object(o.a)({},j,S[j]),("left"===j||"right"===j)&&h&&{height:"100%",width:h},("bottom"===j||"top"===j)&&h&&{height:h,width:"100%"}),__source:{fileName:p,lineNumber:66}},n),s.createElement(d.a,{onPress:O,__source:{fileName:p,lineNumber:84}})))};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Drawer",filename:"src/components/Drawer/Drawer.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=n("./node_modules/react/index.js"),s=n.n(o);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var a=function(e){var t=e.children,n=e.initial,o=void 0!==n&&n,a=s.a.useState(o),l=Object(r.a)(a,2),i=l[0],c=l[1],u=s.a.useCallback(function(){c(!i)},[i]),m=s.a.useCallback(function(e){c(e)},[]);return t({on:i,toggle:u,set:m})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,n){"use strict";var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),d=n("./node_modules/react/index.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=n("./node_modules/focus-trap/index.js"),f=n.n(p),y=n("./node_modules/react-dom/index.js"),g=n("./node_modules/react-spring/web.cjs.js"),O=n("./src/constants/Animation.ts"),_=n("./node_modules/exenv/index.js"),j=function(e){var t=d.useRef(null);d.useEffect(function(){var n,r=function(e){var t=document.createElement("div");return e&&t.setAttribute("id",e),t}(e);return n=r,document.body.lastElementChild&&document.body.insertBefore(n,document.body.lastElementChild.nextElementSibling),t.current&&r.appendChild(t.current),function(){t.current&&t.current.remove(),-1===r.childNodes.length&&r.remove()}},[]);return!t.current&&_.canUseDOM&&(t.current=document.createElement("div")),t.current};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/hooks/useElement.ts"}});var v=function(e){var t=e.isLocked;d.useEffect(function(){var e=window.getComputedStyle(document.body).overflow,n=function(){document.body.style.overflow=e};return t?document.body.style.overflow="hidden":n(),function(){return n()}},[t])};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLockBodyScroll",filename:"src/hooks/useLockBodyScroll.ts"}});var x=function(e){var t=e.children,n=e.transparent,r=e.visible,o=e.shouldLockBodyScroll,s=void 0===o||o,a=e.onRequestClose,l=e.animationType,i=void 0===l?"none":l,c=!1,u=j();if(!u)return null;var m=d.useState(r),p=Object(b.a)(m,2),_=p[0],x=p[1],h=d.useRef(null),w=d.useRef(null);v({isLocked:!(!s||!r)}),d.useEffect(function(){var e=function(){w.current&&(w.current.deactivate(),w.current=null)};return r?(h.current&&!w.current&&(w.current=f()(h.current,{initialFocus:h.current,onDeactivate:function(){a&&r&&!c&&a()}}),w.current.activate()),x(!0)):e(),function(){c=!0,e()}},[r]);var P=Object(g.useSpring)({onRest:function(){return!r&&_&&x(!1)},config:O.a,opacity:"fade"===i?r?1:0:1,y:"slide"===i?r?0:100:0}),N=P.opacity,T=P.y;return y.createPortal(d.createElement(g.animated.div,{tabIndex:-1,ref:h,style:{backgroundColor:n?"transparent":"white",bottom:0,display:_?"flex":"none",flexDirection:"column",left:0,opacity:N,position:s?"fixed":"absolute",right:0,top:0,transform:T.interpolate(function(e){return"translateY(".concat(e,"%)")}),zIndex:1e3},__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/ModalBase.web.tsx",lineNumber:83}},r?t:null),u)};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}}),n.d(t,"a",function(){return N});var h="/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/HistoryModal.web.tsx",w=0,P=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).modalId=++w,n.componentDidUpdate=function(e){var t=n.props.visible;e.visible!==t&&(t?n.updateBrowserHistory():n.handleManuallyClosed())},n.componentWillUnmount=function(){n.clearBrowserState()},n.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[n.modalId]||history.pushState(Object(a.a)({},history.state,{modal:Object(a.a)({},history.state&&history.state.modal,Object(s.a)({},n.modalId,!0))}),""),window.addEventListener("popstate",n.handlePopstate,!1)},n.handlePopstate=function(e){var t=n.props,r=t.visible,o=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[n.modalId]||!o||(n.clearBrowserState(),o()),!r&&e.state&&e.state.modal&&e.state.modal[n.modalId]&&history.go(-1)},n.handleEscapeKey=function(){var e=n.props.onRequestClose;(history.state||history.state.modal||history.state.modal[n.modalId])&&e&&(n.clearBrowserState(),e(),history.go(-1))},n.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[n.modalId]&&(n.clearBrowserState(),history.go(-1))},n.clearBrowserState=function(){history.replaceState(Object(a.a)({},history.state,{modal:Object(a.a)({},history.state&&history.state.modal,Object(s.a)({},n.modalId,!1))}),""),window.removeEventListener("popstate",n.handlePopstate,!1)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(o.a)({},this.props);return d.createElement(x,Object(o.a)({},e,{onRequestClose:this.handleEscapeKey,__source:{fileName:h,lineNumber:132}}))}}]),t}(d.Component),N=function(e){var t=e.useHistory,n=void 0!==t&&t,s=Object(r.a)(e,["useHistory"]);return n?d.createElement(P,Object(o.a)({},s,{__source:{fileName:h,lineNumber:140}})):d.createElement(x,Object(o.a)({},s,{__source:{fileName:h,lineNumber:142}}))};"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/components/Overlay/Overlay.tsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),o=n("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js"),s=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx"),l=n("./src/utils/mergeStyles.ts");"undefined"!==typeof OverlayStyles&&OverlayStyles&&OverlayStyles===Object(OverlayStyles)&&Object.isExtensible(OverlayStyles)&&Object.defineProperty(OverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStylesProps&&OverlayStylesProps&&OverlayStylesProps===Object(OverlayStylesProps)&&Object.isExtensible(OverlayStylesProps)&&Object.defineProperty(OverlayStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStylesProps",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof GetOverlayStyles&&GetOverlayStyles&&GetOverlayStyles===Object(GetOverlayStyles)&&Object.isExtensible(GetOverlayStyles)&&Object.defineProperty(GetOverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}});var i=function(e,t){return{overlayStyle:{backgroundColor:e.transparent?"transparent":t.colors.background.overlay,bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}}};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),n.d(t,"a",function(){return u});var c="/home/travis/build/WeTrustPlatform/paramount/src/components/Overlay/Overlay.tsx",u=function(e){var t=e.onPress,n=e.transparent,u=void 0!==n&&n,m=e.getStyles,d=Object(a.a)(),b=Object(l.a)(i,m,d.components.getOverlayStyles)({transparent:u},d).overlayStyle;return r.createElement(o.a,{onPress:function(e){e.preventDefault(),t()},__source:{fileName:c,lineNumber:30}},r.createElement(s.a,{style:b,__source:{fileName:c,lineNumber:36}}))};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Overlay",filename:"src/components/Overlay/Overlay.tsx"}})},"./src/constants/Animation.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r={friction:40,tension:450};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})}}]);
//# sourceMappingURL=23.9060220f93ad6f48cc11.js.map