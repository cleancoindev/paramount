(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),s=n("./node_modules/react-native-web/dist/exports/View/index.js"),l=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},i=function(e){var t=e.children,n=e.testID,i=Object(o.a)(e,["children","testID"]),u=Object(l.a)(),c=[],m={};for(var d in i)if(d){var b=a[d];if(b){var p=b(i[d],u);c.push(p)}else m[d]=i[d]}return r.createElement(s.a,{testID:n,style:[m,c],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=n("./node_modules/react/index.js"),s=n.n(r);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var l=function(e){var t=e.children,n=e.initial,r=void 0!==n&&n,l=s.a.useState(r),a=Object(o.a)(l,2),i=a[0],u=a[1],c=s.a.useCallback(function(){u(!i)},[i]),m=s.a.useCallback(function(e){u(e)},[]);return t({on:i,toggle:c,set:m})};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),l=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),u=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),m=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),d=n("./node_modules/react/index.js"),b=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=n("./node_modules/focus-trap/index.js"),f=n.n(p),_=n("./node_modules/react-dom/index.js"),x=n("./node_modules/react-spring/web.cjs.js"),y=n("./src/constants/Animation.ts"),j=n("./node_modules/exenv/index.js"),O=function(e){var t=d.useRef(null);d.useEffect(function(){var n,o=function(e){var t=document.createElement("div");return e&&t.setAttribute("id",e),t}(e);return n=o,document.body.lastElementChild&&document.body.insertBefore(n,document.body.lastElementChild.nextElementSibling),t.current&&o.appendChild(t.current),function(){t.current&&t.current.remove(),-1===o.childNodes.length&&o.remove()}},[]);return!t.current&&j.canUseDOM&&(t.current=document.createElement("div")),t.current};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/hooks/useElement.ts"}});var g=function(e){var t=e.isLocked;d.useEffect(function(){var e=window.getComputedStyle(document.body).overflow,n=function(){document.body.style.overflow=e};return t?document.body.style.overflow="hidden":n(),function(){return n()}},[t])};g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLockBodyScroll",filename:"src/hooks/useLockBodyScroll.ts"}});var N=function(e){var t=e.children,n=e.transparent,o=e.visible,r=e.shouldLockBodyScroll,s=void 0===r||r,l=e.onRequestClose,a=e.animationType,i=void 0===a?"none":a,u=!1,c=O();if(!c)return null;var m=d.useState(o),p=Object(b.a)(m,2),j=p[0],N=p[1],h=d.useRef(null),T=d.useRef(null);g({isLocked:!(!s||!o)}),d.useEffect(function(){var e=function(){T.current&&(T.current.deactivate(),T.current=null)};return o?(h.current&&!T.current&&(T.current=f()(h.current,{initialFocus:h.current,onDeactivate:function(){l&&o&&!u&&l()}}),T.current.activate()),N(!0)):e(),function(){u=!0,e()}},[o]);var B=Object(x.useSpring)({onRest:function(){return!o&&j&&N(!1)},config:y.a,opacity:"fade"===i?o?1:0:1,y:"slide"===i?o?0:100:0}),v=B.opacity,P=B.y;return _.createPortal(d.createElement(x.animated.div,{tabIndex:-1,ref:h,style:{backgroundColor:n?"transparent":"white",bottom:0,display:j?"flex":"none",flexDirection:"column",left:0,opacity:v,position:s?"fixed":"absolute",right:0,top:0,transform:P.interpolate(function(e){return"translateY(".concat(e,"%)")}),zIndex:1e3},__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/ModalBase.web.tsx",lineNumber:83}},o?t:null),c)};N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}}),n.d(t,"a",function(){return v});var h="/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/HistoryModal.web.tsx",T=0,B=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).modalId=++T,n.componentDidUpdate=function(e){var t=n.props.visible;e.visible!==t&&(t?n.updateBrowserHistory():n.handleManuallyClosed())},n.componentWillUnmount=function(){n.clearBrowserState()},n.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[n.modalId]||history.pushState(Object(l.a)({},history.state,{modal:Object(l.a)({},history.state&&history.state.modal,Object(s.a)({},n.modalId,!0))}),""),window.addEventListener("popstate",n.handlePopstate,!1)},n.handlePopstate=function(e){var t=n.props,o=t.visible,r=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[n.modalId]||!r||(n.clearBrowserState(),r()),!o&&e.state&&e.state.modal&&e.state.modal[n.modalId]&&history.go(-1)},n.handleEscapeKey=function(){var e=n.props.onRequestClose;(history.state||history.state.modal||history.state.modal[n.modalId])&&e&&(n.clearBrowserState(),e(),history.go(-1))},n.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[n.modalId]&&(n.clearBrowserState(),history.go(-1))},n.clearBrowserState=function(){history.replaceState(Object(l.a)({},history.state,{modal:Object(l.a)({},history.state&&history.state.modal,Object(s.a)({},n.modalId,!1))}),""),window.removeEventListener("popstate",n.handlePopstate,!1)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(r.a)({},this.props);return d.createElement(N,Object(r.a)({},e,{onRequestClose:this.handleEscapeKey,__source:{fileName:h,lineNumber:132}}))}}]),t}(d.Component),v=function(e){var t=e.useHistory,n=void 0!==t&&t,s=Object(o.a)(e,["useHistory"]);return n?d.createElement(B,Object(r.a)({},s,{__source:{fileName:h,lineNumber:140}})):d.createElement(N,Object(r.a)({},s,{__source:{fileName:h,lineNumber:142}}))};"undefined"!==typeof v&&v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/components/Modal/Modal.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),a=n("./src/components/Box/Box.tsx"),i=n("./src/components/Button/Button.tsx"),u=n("./src/components/Modal/HistoryModal.web.tsx"),c=n("./src/components/Typography/Text.tsx"),m=n("./src/components/Helpers/Toggle.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/Modal.mdx",b={},p="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)(p,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout",__source:{fileName:d,lineNumber:21}}),Object(s.b)("h1",Object(r.a)({id:"modal"},{__source:{fileName:d,lineNumber:24}}),"Modal"),Object(s.b)("p",{__source:{fileName:d,lineNumber:27}},"Modal covers the full screen. For a prompt/small version of modal, use ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:27}},"Dialog")),Object(s.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:d,lineNumber:28}}),"Usage"),Object(s.b)(l.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle, set }) => (\n    <Box>\n      <Modal\n        visible={on}\n        animationType="slide"\n        onRequestClose={() => set(false)}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the modal</Text>\n          <Button onPress={() => set(false)} title="Close button one" />\n          <Button onPress={() => set(false)} title="Close button two" />\n        </Box>\n      </Modal>\n      <Button onPress={() => set(true)} title="Open modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Playground:l.c,Props:l.d,Box:a.a,Button:i.a,Modal:u.a,HistoryModal:u.a,Text:c.a,Toggle:m.a},mdxType:"Playground",__source:{fileName:d,lineNumber:31}},Object(s.b)(m.a,{initial:!1,mdxType:"Toggle",__source:{fileName:d,lineNumber:42}},function(e){var t=e.on,n=(e.toggle,e.set);return Object(s.b)(a.a,{mdxType:"Box",__source:{fileName:d,lineNumber:47}},Object(s.b)(u.a,{visible:t,animationType:"slide",onRequestClose:function(){return n(!1)},mdxType:"Modal",__source:{fileName:d,lineNumber:48}},Object(s.b)(a.a,{height:1800,mdxType:"Box",__source:{fileName:d,lineNumber:49}},Object(s.b)(c.a,{mdxType:"Text",__source:{fileName:d,lineNumber:50}},"Put any content in the modal"),Object(s.b)(i.a,{onPress:function(){return n(!1)},title:"Close button one",mdxType:"Button",__source:{fileName:d,lineNumber:51}}),Object(s.b)(i.a,{onPress:function(){return n(!1)},title:"Close button two",mdxType:"Button",__source:{fileName:d,lineNumber:52}}))),Object(s.b)(i.a,{onPress:function(){return n(!0)},title:"Open modal",mdxType:"Button",__source:{fileName:d,lineNumber:55}}))})),Object(s.b)("h3",Object(r.a)({id:"nested"},{__source:{fileName:d,lineNumber:59}}),"Nested"),Object(s.b)(l.c,{__position:1,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal\n        visible={outerOn}\n        animationType="fade"\n        onRequestClose={() => outerSet(false)}\n      >\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  animationType="slide"\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Playground:l.c,Props:l.d,Box:a.a,Button:i.a,Modal:u.a,HistoryModal:u.a,Text:c.a,Toggle:m.a},mdxType:"Playground",__source:{fileName:d,lineNumber:62}},Object(s.b)(m.a,{initial:!1,mdxType:"Toggle",__source:{fileName:d,lineNumber:73}},function(e){var t=e.on,n=e.set;return Object(s.b)(a.a,{mdxType:"Box",__source:{fileName:d,lineNumber:77}},Object(s.b)(u.a,{visible:t,animationType:"fade",onRequestClose:function(){return n(!1)},mdxType:"Modal",__source:{fileName:d,lineNumber:78}},Object(s.b)(a.a,{height:1800,mdxType:"Box",__source:{fileName:d,lineNumber:79}},Object(s.b)(c.a,{mdxType:"Text",__source:{fileName:d,lineNumber:80}},"Outer modal"),Object(s.b)(i.a,{onPress:function(){return n(!1)},title:"Close outer modal button one",mdxType:"Button",__source:{fileName:d,lineNumber:81}}),Object(s.b)(i.a,{onPress:function(){return n(!1)},title:"Close outer modal button two",mdxType:"Button",__source:{fileName:d,lineNumber:82}}),Object(s.b)(m.a,{initial:!1,mdxType:"Toggle",__source:{fileName:d,lineNumber:83}},function(e){var t=e.on,n=e.set;return Object(s.b)(a.a,{mdxType:"Box",__source:{fileName:d,lineNumber:87}},Object(s.b)(u.a,{visible:t,animationType:"slide",onRequestClose:function(){return n(!1)},mdxType:"Modal",__source:{fileName:d,lineNumber:88}},Object(s.b)(a.a,{height:1800,mdxType:"Box",__source:{fileName:d,lineNumber:89}},Object(s.b)(c.a,{mdxType:"Text",__source:{fileName:d,lineNumber:90}},"Inner modal"),Object(s.b)(i.a,{onPress:function(){return n(!1)},title:"Close inner modal button one",mdxType:"Button",__source:{fileName:d,lineNumber:91}}),Object(s.b)(i.a,{onPress:function(){return n(!1)},title:"Close inner modal button two",mdxType:"Button",__source:{fileName:d,lineNumber:92}}))),Object(s.b)(i.a,{onPress:function(){return n(!0)},title:"Open inner modal",mdxType:"Button",__source:{fileName:d,lineNumber:95}}))}))),Object(s.b)(i.a,{onPress:function(){return n(!0)},title:"Open outer modal",mdxType:"Button",__source:{fileName:d,lineNumber:100}}))})),Object(s.b)("h3",Object(r.a)({id:"using-browser-history"},{__source:{fileName:d,lineNumber:104}}),"Using browser history"),Object(s.b)("p",{__source:{fileName:d,lineNumber:107}},"By using ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:107}},"useHistory")," prop it will mimic Android's back button behavior on web which closes modals. On RN, this will have no effect and will use a regular ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:107}},"Modal"),". Works in nested modals as well."),Object(s.b)("p",{__source:{fileName:d,lineNumber:108}},"Note: Uses history ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:108}},"state")," to manipulate modal state"),Object(s.b)(l.c,{__position:2,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal\n        useHistory\n        visible={outerOn}\n        onRequestClose={() => outerSet(false)}\n      >\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  useHistory\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Playground:l.c,Props:l.d,Box:a.a,Button:i.a,Modal:u.a,HistoryModal:u.a,Text:c.a,Toggle:m.a},mdxType:"Playground",__source:{fileName:d,lineNumber:109}},Object(s.b)(m.a,{initial:!1,mdxType:"Toggle",__source:{fileName:d,lineNumber:120}},function(e){var t=e.on,n=e.set;return Object(s.b)(a.a,{mdxType:"Box",__source:{fileName:d,lineNumber:124}},Object(s.b)(u.a,{useHistory:!0,visible:t,onRequestClose:function(){return n(!1)},mdxType:"Modal",__source:{fileName:d,lineNumber:125}},Object(s.b)(a.a,{height:1800,mdxType:"Box",__source:{fileName:d,lineNumber:126}},Object(s.b)(c.a,{mdxType:"Text",__source:{fileName:d,lineNumber:127}},"Outer modal"),Object(s.b)(i.a,{onPress:function(){return n(!1)},title:"Close outer modal button one",mdxType:"Button",__source:{fileName:d,lineNumber:128}}),Object(s.b)(i.a,{onPress:function(){return n(!1)},title:"Close outer modal button two",mdxType:"Button",__source:{fileName:d,lineNumber:129}}),Object(s.b)(m.a,{initial:!1,mdxType:"Toggle",__source:{fileName:d,lineNumber:130}},function(e){var t=e.on,n=e.set;return Object(s.b)(a.a,{mdxType:"Box",__source:{fileName:d,lineNumber:134}},Object(s.b)(u.a,{visible:t,useHistory:!0,onRequestClose:function(){return n(!1)},mdxType:"Modal",__source:{fileName:d,lineNumber:135}},Object(s.b)(a.a,{height:1800,mdxType:"Box",__source:{fileName:d,lineNumber:136}},Object(s.b)(c.a,{mdxType:"Text",__source:{fileName:d,lineNumber:137}},"Inner modal"),Object(s.b)(i.a,{onPress:function(){return n(!1)},title:"Close inner modal button one",mdxType:"Button",__source:{fileName:d,lineNumber:138}}),Object(s.b)(i.a,{onPress:function(){return n(!1)},title:"Close inner modal button two",mdxType:"Button",__source:{fileName:d,lineNumber:139}}))),Object(s.b)(i.a,{onPress:function(){return n(!0)},title:"Open inner modal",mdxType:"Button",__source:{fileName:d,lineNumber:142}}))}))),Object(s.b)(i.a,{onPress:function(){return n(!0)},title:"Open outer modal",mdxType:"Button",__source:{fileName:d,lineNumber:147}}))})),Object(s.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:d,lineNumber:151}}),"Props"),Object(s.b)(l.d,{of:u.a,mdxType:"Props",__source:{fileName:d,lineNumber:154}}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Modal/Modal.mdx"}}),f.isMDXComponent=!0},"./src/constants/Animation.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={friction:40,tension:450};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})}}]);
//# sourceMappingURL=31.8006827644a0760fcf95.js.map