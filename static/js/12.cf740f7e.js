(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/View/index.js"),s=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var l={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},i=function(e){var t=e.children,n=e.style,i=e.testID,c=Object(o.a)(e,["children","style","testID"]),u=Object(s.a)(),d=[],m={};for(var b in c)if(b){var p=l[b];if(p){var y=p(c[b],u);d.push(y)}else m[b]=c[b]}return r.createElement(a.a,{testID:i,style:[m,d,n],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:55}},t)};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Dialog/Dialog.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),s=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/components/Box/Box.tsx"),i=n("./src/components/Button/Button.tsx"),c=n("./src/components/Dialog/Dialog.tsx"),u=n("./src/components/Typography/Heading.tsx"),d=n("./src/components/Icon/Icon.web.tsx"),m=n("./src/components/Typography/Text.tsx"),b=n("./src/components/Helpers/Toggle.tsx"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Dialog/Dialog.mdx",y={},f="wrapper";function g(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(f,Object(r.a)({},y,n,{components:t,mdxType:"MDXLayout",__source:{fileName:p,lineNumber:21}}),Object(a.b)("h1",Object(r.a)({id:"dialog"},{__source:{fileName:p,lineNumber:24}}),"Dialog"),Object(a.b)("p",{__source:{fileName:p,lineNumber:27}},"Dialog has no predefined styling and handlers. The content, header and footer is completely in your control."),Object(a.b)("h3",Object(r.a)({id:"usage"},{__source:{fileName:p,lineNumber:28}}),"Usage"),Object(a.b)(s.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Box>\n      <Dialog\n        header={\n          <Box\n            padding={16}\n            flexDirection="row"\n            justifyContent="space-between"\n            alignItems="center"\n          >\n            <Heading>Title</Heading>\n            <Button\n              appearance="minimal"\n              icon={<Icon name="x" size={24} />}\n              onPress={toggle}\n            />\n          </Box>\n        }\n        footer={\n          <Box padding={16} flexDirection="row" justifyContent="flex-end">\n            <Button appearance="minimal" onPress={toggle} title="Cancel" />\n            <Box paddingLeft={16}>\n              <Button\n                color="primary"\n                onPress={() => console.log(\'Button clicked\')}\n                title="Accept"\n              />\n            </Box>\n          </Box>\n        }\n        isVisible={on}\n        onRequestClose={toggle}\n        useHistory={false}\n        getStyles={(props, theme) => ({\n          modalContainerStyle: {},\n          containerStyle: {},\n          bodyStyle: {},\n        })}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the dialog</Text>\n        </Box>\n      </Dialog>\n      <Button onPress={toggle} title="Open dialog" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Playground:s.c,Props:s.d,Box:l.a,Button:i.a,Dialog:c.a,Heading:u.a,Icon:d.a,Text:m.a,Toggle:b.a},mdxType:"Playground",__source:{fileName:p,lineNumber:31}},Object(a.b)(b.a,{initial:!1,mdxType:"Toggle",__source:{fileName:p,lineNumber:43}},function(e){var t=e.on,n=e.toggle;return Object(a.b)(l.a,{mdxType:"Box",__source:{fileName:p,lineNumber:47}},Object(a.b)(c.a,{header:Object(a.b)(l.a,{padding:16,flexDirection:"row",justifyContent:"space-between",alignItems:"center",mdxType:"Box",__source:{fileName:p,lineNumber:48}},Object(a.b)(u.a,{mdxType:"Heading",__source:{fileName:p,lineNumber:49}},"Title"),Object(a.b)(i.a,{appearance:"minimal",icon:Object(a.b)(d.a,{name:"x",size:24,mdxType:"Icon",__source:{fileName:p,lineNumber:50}}),onPress:n,mdxType:"Button",__source:{fileName:p,lineNumber:50}})),footer:Object(a.b)(l.a,{padding:16,flexDirection:"row",justifyContent:"flex-end",mdxType:"Box",__source:{fileName:p,lineNumber:51}},Object(a.b)(i.a,{appearance:"minimal",onPress:n,title:"Cancel",mdxType:"Button",__source:{fileName:p,lineNumber:52}}),Object(a.b)(l.a,{paddingLeft:16,mdxType:"Box",__source:{fileName:p,lineNumber:53}},Object(a.b)(i.a,{color:"primary",onPress:function(){return console.log("Button clicked")},title:"Accept",mdxType:"Button",__source:{fileName:p,lineNumber:54}}))),isVisible:t,onRequestClose:n,useHistory:!1,getStyles:function(e,t){return{modalContainerStyle:{},containerStyle:{},bodyStyle:{}}},mdxType:"Dialog",__source:{fileName:p,lineNumber:48}},Object(a.b)(l.a,{height:1800,mdxType:"Box",__source:{fileName:p,lineNumber:61}},Object(a.b)(m.a,{mdxType:"Text",__source:{fileName:p,lineNumber:62}},"Put any content in the dialog"))),Object(a.b)(i.a,{onPress:n,title:"Open dialog",mdxType:"Button",__source:{fileName:p,lineNumber:65}}))})),Object(a.b)("h3",Object(r.a)({id:"dialog-props"},{__source:{fileName:p,lineNumber:69}}),"Dialog Props"),Object(a.b)(s.d,{of:c.a,mdxType:"Props",__source:{fileName:p,lineNumber:72}}))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Dialog/Dialog.mdx"}}),g.isMDXComponent=!0},"./src/components/Dialog/Dialog.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./node_modules/react-native-web/dist/exports/ScrollView/index.js"),a=n("./node_modules/react-native-web/dist/exports/View/index.js"),s=n("./src/theme/Theme.tsx"),l=n("./src/utils/mergeStyles.ts"),i=n("./src/components/Modal/HistoryModal.web.tsx"),c=n("./src/components/Overlay/Overlay.tsx");"undefined"!==typeof DialogStyles&&DialogStyles&&DialogStyles===Object(DialogStyles)&&Object.isExtensible(DialogStyles)&&Object.defineProperty(DialogStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogStyles",filename:"src/components/Dialog/Dialog.styles.ts"}}),"undefined"!==typeof GetDialogStyles&&GetDialogStyles&&GetDialogStyles===Object(GetDialogStyles)&&Object.isExtensible(GetDialogStyles)&&Object.defineProperty(GetDialogStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDialogStyles",filename:"src/components/Dialog/Dialog.styles.ts"}});var u=function(e,t){return{bodyStyle:{maxHeight:400},containerStyle:{backgroundColor:"white",borderRadius:t.controlBorderRadius.medium,elevation:1,maxHeight:"80%",maxWidth:600,minWidth:280,position:"relative",zIndex:1},contentContainerStyle:{},modalContainerStyle:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"},overlayStyle:{}}};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDialogStyles",filename:"src/components/Dialog/Dialog.styles.ts"}}),n.d(t,"a",function(){return m});var d="/home/travis/build/WeTrustPlatform/paramount/src/components/Dialog/Dialog.tsx";"undefined"!==typeof DialogProps&&DialogProps&&DialogProps===Object(DialogProps)&&Object.isExtensible(DialogProps)&&Object.defineProperty(DialogProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DialogProps",filename:"src/components/Dialog/Dialog.tsx"}});var m=function(e){var t=e.children,n=e.footer,m=e.header,b=e.shouldLockBodyScroll,p=void 0===b||b,y=e.isVisible,f=e.onRequestClose,g=void 0===f?function(){return null}:f,j=e.getStyles,O=e.useHistory,_=Object(s.a)(),x=Object(l.a)(u,j,_.components.getDialogStyles)({},_),v=x.modalContainerStyle,h=x.containerStyle,S=x.bodyStyle,P=x.contentContainerStyle,T=x.overlayStyle;return o.createElement(i.a,{useHistory:O,visible:y,transparent:!0,animationType:"fade",onRequestClose:g,shouldLockBodyScroll:p,__source:{fileName:d,lineNumber:62}},o.createElement(a.a,{style:v,__source:{fileName:d,lineNumber:70}},o.createElement(a.a,{style:h,__source:{fileName:d,lineNumber:71}},m,o.createElement(r.a,{contentContainerStyle:P,style:S,__source:{fileName:d,lineNumber:73}},t),n),o.createElement(c.a,{getStyles:function(){return{overlayStyle:T}},onPress:g,__source:{fileName:d,lineNumber:81}})))};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dialog",filename:"src/components/Dialog/Dialog.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/react/index.js"),a=n.n(r);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var s=function(e){var t=e.children,n=e.initial,r=void 0!==n&&n,s=a.a.useState(r),l=Object(o.a)(s,2),i=l[0],c=l[1],u=a.a.useCallback(function(){c(!i)},[i]),d=a.a.useCallback(function(e){c(e)},[]);return t({on:i,toggle:u,set:d})};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("./node_modules/react/index.js"),r=n("./node_modules/react-icons/fi/index.esm.js"),a=n("./src/theme/Theme.tsx"),s=n("./src/components/Typography/Text.styles.ts");var l=function(e){var t=e.name,n=e.color,l=e.size,i=Object(a.a)(),c=r["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(c,{color:n?Object(s.c)(i.colors.text)(n):n,size:l,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),d=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),m=n("./node_modules/react/index.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=n("./node_modules/focus-trap/index.js"),y=n.n(p),f=n("./node_modules/react-dom/index.js"),g=n("./node_modules/react-spring/web.cjs.js"),j=n("./src/constants/Animation.ts"),O=n("./node_modules/exenv/index.js"),_=function(e){var t=m.useRef(null);m.useEffect(function(){var n,o=function(e){var t=document.createElement("div");return e&&t.setAttribute("id",e),t}(e);return n=o,document.body.lastElementChild&&document.body.insertBefore(n,document.body.lastElementChild.nextElementSibling),t.current&&o.appendChild(t.current),function(){t.current&&t.current.remove(),-1===o.childNodes.length&&o.remove()}},[]);return!t.current&&O.canUseDOM&&(t.current=document.createElement("div")),t.current};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/hooks/useElement.ts"}});var x=function(e){var t=e.isLocked;m.useEffect(function(){var e=window.getComputedStyle(document.body).overflow,n=function(){document.body.style.overflow=e};return t?document.body.style.overflow="hidden":n(),function(){return n()}},[t])};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLockBodyScroll",filename:"src/hooks/useLockBodyScroll.ts"}});var v=function(e){var t=e.children,n=e.transparent,o=e.visible,r=e.shouldLockBodyScroll,a=void 0===r||r,s=e.onRequestClose,l=e.animationType,i=void 0===l?"none":l,c=!1,u=_();if(!u)return null;var d=m.useState(o),p=Object(b.a)(d,2),O=p[0],v=p[1],h=m.useRef(null),S=m.useRef(null);x({isLocked:!(!a||!o)}),m.useEffect(function(){var e=function(){S.current&&(S.current.deactivate(),S.current=null)};return o?(h.current&&!S.current&&(S.current=y()(h.current,{initialFocus:h.current,onDeactivate:function(){s&&o&&!c&&s()}}),S.current.activate()),v(!0)):e(),function(){c=!0,e()}},[o]);var P=Object(g.useSpring)({onRest:function(){return!o&&O&&v(!1)},config:j.a,opacity:"fade"===i?o?1:0:1,y:"slide"===i?o?0:100:0}),T=P.opacity,N=P.y;return f.createPortal(m.createElement(g.animated.div,{tabIndex:-1,ref:h,style:{backgroundColor:n?"transparent":"white",bottom:0,display:O?"flex":"none",flexDirection:"column",left:0,opacity:T,position:a?"fixed":"absolute",right:0,top:0,transform:N.interpolate(function(e){return"translateY(".concat(e,"%)")}),zIndex:1e3},__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/ModalBase.web.tsx",lineNumber:83}},o?t:null),u)};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}}),n.d(t,"a",function(){return T});var h="/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/HistoryModal.web.tsx",S=0,P=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).modalId=++S,n.componentDidUpdate=function(e){var t=n.props.visible;e.visible!==t&&(t?n.updateBrowserHistory():n.handleManuallyClosed())},n.componentWillUnmount=function(){n.clearBrowserState()},n.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[n.modalId]||history.pushState(Object(s.a)({},history.state,{modal:Object(s.a)({},history.state&&history.state.modal,Object(a.a)({},n.modalId,!0))}),""),window.addEventListener("popstate",n.handlePopstate,!1)},n.handlePopstate=function(e){var t=n.props,o=t.visible,r=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[n.modalId]||!r||(n.clearBrowserState(),r()),!o&&e.state&&e.state.modal&&e.state.modal[n.modalId]&&history.go(-1)},n.handleEscapeKey=function(){var e=n.props.onRequestClose;(history.state||history.state.modal||history.state.modal[n.modalId])&&e&&(n.clearBrowserState(),e(),history.go(-1))},n.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[n.modalId]&&(n.clearBrowserState(),history.go(-1))},n.clearBrowserState=function(){history.replaceState(Object(s.a)({},history.state,{modal:Object(s.a)({},history.state&&history.state.modal,Object(a.a)({},n.modalId,!1))}),""),window.removeEventListener("popstate",n.handlePopstate,!1)},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(r.a)({},this.props);return m.createElement(v,Object(r.a)({},e,{onRequestClose:this.handleEscapeKey,__source:{fileName:h,lineNumber:132}}))}}]),t}(m.Component),T=function(e){var t=e.useHistory,n=void 0!==t&&t,a=Object(o.a)(e,["useHistory"]);return n?m.createElement(P,Object(r.a)({},a,{__source:{fileName:h,lineNumber:140}})):m.createElement(v,Object(r.a)({},a,{__source:{fileName:h,lineNumber:142}}))};"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/components/Overlay/Overlay.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),r=n("./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js"),a=n("./node_modules/react-native-web/dist/exports/View/index.js"),s=n("./src/theme/Theme.tsx"),l=n("./src/utils/mergeStyles.ts");"undefined"!==typeof OverlayStyles&&OverlayStyles&&OverlayStyles===Object(OverlayStyles)&&Object.isExtensible(OverlayStyles)&&Object.defineProperty(OverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof OverlayStylesProps&&OverlayStylesProps&&OverlayStylesProps===Object(OverlayStylesProps)&&Object.isExtensible(OverlayStylesProps)&&Object.defineProperty(OverlayStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"OverlayStylesProps",filename:"src/components/Overlay/Overlay.styles.ts"}}),"undefined"!==typeof GetOverlayStyles&&GetOverlayStyles&&GetOverlayStyles===Object(GetOverlayStyles)&&Object.isExtensible(GetOverlayStyles)&&Object.defineProperty(GetOverlayStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}});var i=function(e,t){return{overlayStyle:{backgroundColor:e.transparent?"transparent":t.colors.background.overlay,bottom:0,cursor:"auto",height:"100%",left:0,position:"absolute",right:0,top:0,width:"100%"}}};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getOverlayStyles",filename:"src/components/Overlay/Overlay.styles.ts"}}),n.d(t,"a",function(){return u});var c="/home/travis/build/WeTrustPlatform/paramount/src/components/Overlay/Overlay.tsx",u=function(e){var t=e.onPress,n=e.transparent,u=void 0!==n&&n,d=e.getStyles,m=Object(s.a)(),b=Object(l.a)(i,d,m.components.getOverlayStyles)({transparent:u},m).overlayStyle;return o.createElement(r.a,{onPress:function(e){e.preventDefault(),t()},__source:{fileName:c,lineNumber:30}},o.createElement(a.a,{style:b,__source:{fileName:c,lineNumber:36}}))};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Overlay",filename:"src/components/Overlay/Overlay.tsx"}})},"./src/components/Typography/Heading.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/react/index.js"),s=n("./node_modules/react-native-web/dist/exports/Platform/index.js"),l=n("./node_modules/react-native-web/dist/exports/Text/index.js"),i=n("./src/theme/Theme.tsx"),c=n("./src/utils/mergeStyles.ts"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),d=n("./src/components/Typography/Text.styles.ts");"undefined"!==typeof HeadingStyles&&HeadingStyles&&HeadingStyles===Object(HeadingStyles)&&Object.isExtensible(HeadingStyles)&&Object.defineProperty(HeadingStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingStyles",filename:"src/components/Typography/Heading.styles.ts"}}),"undefined"!==typeof HeadingStylesProps&&HeadingStylesProps&&HeadingStylesProps===Object(HeadingStylesProps)&&Object.isExtensible(HeadingStylesProps)&&Object.defineProperty(HeadingStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingStylesProps",filename:"src/components/Typography/Heading.styles.ts"}}),"undefined"!==typeof GetHeadingStyles&&GetHeadingStyles&&GetHeadingStyles===Object(GetHeadingStyles)&&Object.isExtensible(GetHeadingStyles)&&Object.defineProperty(GetHeadingStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetHeadingStyles",filename:"src/components/Typography/Heading.styles.ts"}});var m=function(e){return function(t){return e[t]||{fontSize:t}}};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getHeadingSize",filename:"src/components/Typography/Heading.styles.ts"}});var b=function(e,t){var n=e.size,o=e.align,r=e.color,a=e.weight,s=m(t.headingSizes)(n);return{headingStyle:Object(u.a)({},s,{color:Object(d.c)(t.colors.text)(r),fontFamily:t.fontFamilies.heading,fontWeight:Object(d.b)(t.fontWeights)(a)||s.fontWeight,textAlign:o})}};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getHeadingStyles",filename:"src/components/Typography/Heading.styles.ts"}}),n.d(t,"a",function(){return p});"undefined"!==typeof HeadingProps&&HeadingProps&&HeadingProps===Object(HeadingProps)&&Object.isExtensible(HeadingProps)&&Object.defineProperty(HeadingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingProps",filename:"src/components/Typography/Heading.tsx"}});var p=function(e){var t=e.accessibilityLevel,n=e.size,u=void 0===n?"medium":n,d=e.align,m=void 0===d?"left":d,p=e.color,y=void 0===p?"default":p,f=e.weight,g=e.getStyles,j=Object(r.a)(e,["accessibilityLevel","size","align","color","weight","getStyles"]),O=Object(i.a)(),_=Object(c.a)(b,g,O.components.getHeadingStyles)({size:u,align:m,color:y,weight:f},O).headingStyle;return a.createElement(l.a,Object(o.a)({accessibilityRole:"web"===s.a.OS?"heading":"none","aria-level":t,style:_},j,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Heading.tsx",lineNumber:45}}))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Heading",filename:"src/components/Typography/Heading.tsx"}})},"./src/constants/Animation.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={friction:40,tension:450};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})}}]);
//# sourceMappingURL=12.82f069c698e68bbc7e14.js.map