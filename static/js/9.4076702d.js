(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./src/components/Box/Box.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return i});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/react/index.js"),s=o("./node_modules/react-native-web/dist/exports/View/index.js"),a=o("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var l={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},i=function(e){var t=e.children,o=e.testID,i=Object(n.a)(e,["children","testID"]),u=Object(a.b)(),c=[],d={};for(var b in i)if(b){var m=l[b];if(m){var p=m(i[b],u);c.push(p)}else d[b]=i[b]}return r.createElement(s.a,{testID:o,style:[d,c],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Button/Button.tsx":function(e,t,o){"use strict";var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=o("./node_modules/dlv/dist/dlv.umd.js"),i=o.n(l),u=o("./node_modules/react/index.js"),c=o.n(u),d=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=o("./src/theme/Theme.tsx"),m=o("./src/utils/isControlSize.ts"),p=o("./src/utils/overrides.ts"),f=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),_=o.n(f),g=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),y=o("./node_modules/react-native-web/dist/exports/View/index.js"),x=o("./node_modules/react-spring/native.cjs.js"),j=function(e,t){return!e},O=function(){var e=c.a.useReducer(j,!0),t=Object(a.a)(e,2)[1];return c.a.useCallback(function(){t(null)},[t])};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var h="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",N=Object(x.animated)(y.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var v=function(e){var t=Object(b.b)(),o=e.size,n=void 0===o?10:o,r=e.color,s=void 0===r?t.colors.text.primary:r,a=O(),l=Object(x.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:a,reset:!0,to:function(){var e=Object(g.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return u.createElement(y.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:h,lineNumber:34}},l.map(function(e,t){return u.createElement(N,{key:t,style:{backgroundColor:s,borderRadius:999,height:n,marginLeft:3,marginRight:3,opacity:e.opacity,width:n},__source:{fileName:h,lineNumber:42}})}))};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var B=o("./src/components/Typography/Text.tsx");o.d(t,"a",function(){return P});var T="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonOverrides&&ButtonOverrides&&ButtonOverrides===Object(ButtonOverrides)&&Object.isExtensible(ButtonOverrides)&&Object.defineProperty(ButtonOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonOverrides",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var P=function(e){var t=e.appearance,o=void 0===t?"primary":t,n=e.color,r=void 0===n?"default":n,l=e.isDisabled,c=void 0!==l&&l,d=e.isLoading,m=void 0!==d&&d,f=e.size,_=void 0===f?"medium":f,g=e.onPress,y=void 0===g?function(){}:g,x=e.title,j=e.testID,O=e.overrides,h=void 0===O?{}:O,N=Object(b.b)(),v=Object(p.a)(C,e,i()(N,"overrides.Button.Touchable"),h.Touchable),B=Object(a.a)(v,2),P=B[0],w=B[1],S=Object(p.a)(k,e,i()(N,"overrides.Button.Title"),h.Title),R=Object(a.a)(S,2),D=R[0],I=R[1],L=Object(p.a)(M,e,i()(N,"overrides.Button.Loading"),h.Loading),H=Object(a.a)(L,2),z=H[0],W=H[1],q=Object(p.a)(E,e,i()(N,"overrides.Button.IconBefore"),h.IconBefore),A=Object(a.a)(q,2),U=A[0],F=A[1],X=Object(p.a)(E,e,i()(N,"overrides.Button.IconAfter"),h.IconAfter),J=Object(a.a)(X,2),K=J[0],V=J[1];return u.createElement(P,Object(s.a)({appearance:o,color:r,isDisabled:c,isLoading:m,size:_,onPress:y,testID:j},w,{__source:{fileName:T,lineNumber:117}}),u.createElement(U,Object(s.a)({appearance:o,color:r,isDisabled:c,isLoading:m,size:_},F,{__source:{fileName:T,lineNumber:127}})),m?u.createElement(z,Object(s.a)({appearance:o,color:r},W,{__source:{fileName:T,lineNumber:136}})):u.createElement(D,Object(s.a)({appearance:o,color:r,isDisabled:c,size:_,title:x},I,{__source:{fileName:T,lineNumber:138}})),u.createElement(K,Object(s.a)({appearance:o,color:r,isDisabled:c,isLoading:m,size:_},V,{__source:{fileName:T,lineNumber:147}})))};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}});var C=function(e){var t=e.appearance,o=e.color,a=e.isDisabled,l=e.isLoading,i=e.size,c=e.children,p=e.style,f=Object(r.a)(e,["appearance","color","isDisabled","isLoading","size","children","style"]),_=Object(b.b)(),g=function(e,t){return{minimal:{default:{backgroundColor:e.colors.background.content},danger:{backgroundColor:e.colors.background.content},primary:{backgroundColor:e.colors.background.content},secondary:{backgroundColor:e.colors.background.content}},primary:{default:{backgroundColor:t?e.colors.background.overlay:e.colors.button.default},danger:{backgroundColor:t?e.colors.background.dangerLight:e.colors.button.danger},primary:{backgroundColor:t?e.colors.background.primaryLight:e.colors.button.primary},secondary:{backgroundColor:t?e.colors.background.secondaryLight:e.colors.button.secondary}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3}}}}(_,l),y=Object(m.a)(i)?{borderRadius:_.controlBorderRadius[i],height:_.controlHeights[i],paddingLeft:_.controlPaddings[i]+8,paddingRight:_.controlPaddings[i]+8}:{borderRadius:_.controlBorderRadius.medium,height:i,paddingLeft:_.controlPaddings.medium+8,paddingRight:_.controlPaddings.medium+8},x=y.borderRadius,j=y.height,O=y.paddingLeft,h=y.paddingRight;return u.createElement(d.a,Object(s.a)({accessibilityRole:"button",disabled:!(!a&&!l),style:[Object(n.a)({borderRadius:x,height:j,paddingLeft:O,paddingRight:h,flexDirection:"row",alignItems:"center",justifyContent:"center"},g[t][o],a&&{backgroundColor:_.colors.button.disabled}),p]},f,{__source:{fileName:T,lineNumber:277}}),c)},w=function(e){return{minimal:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary},primary:{default:e.colors.button.defaultText,danger:e.colors.button.dangerText,primary:e.colors.button.primaryText,secondary:e.colors.button.secondaryText},outline:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary}}},k=function(e){var t=e.appearance,o=e.color,a=e.isDisabled,l=e.size,i=e.title,c=e.style,d=Object(r.a)(e,["appearance","color","isDisabled","size","title","style"]),p=Object(b.b)(),f=Object(m.a)(l)?p.textSizes[l]:p.textSizes.medium;return i?u.createElement(B.a,Object(s.a)({weight:"bold",style:[Object(n.a)({alignItems:"center",color:a?p.colors.text.muted:w(p)[t][o],display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center",paddingHorizontal:8},f),c]},d,{__source:{fileName:T,lineNumber:360}}),i):null},M=function(e){var t=e.appearance,o=e.color,n=Object(b.b)();return u.createElement(v,{color:w(n)[t][o],__source:{fileName:T,lineNumber:393}})},E=function(e){return u.createElement(u.Fragment,null)}},"./src/components/Helpers/Toggle.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return a});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=o("./node_modules/react/index.js"),s=o.n(r);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var a=function(e){var t=e.children,o=e.initial,r=void 0!==o&&o,a=s.a.useState(r),l=Object(n.a)(a,2),i=l[0],u=l[1],c=s.a.useCallback(function(){u(!i)},[i]),d=s.a.useCallback(function(e){u(e)},[]);return t({on:i,toggle:c,set:d})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Modal/HistoryModal.web.tsx":function(e,t,o){"use strict";var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),a=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),u=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),d=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),b=o("./node_modules/react/index.js"),m=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),p=o("./node_modules/focus-trap/index.js"),f=o.n(p),_=o("./node_modules/react-dom/index.js"),g=o("./node_modules/react-spring/web.cjs.js"),y=o("./src/constants/Animation.ts"),x=o("./node_modules/exenv/index.js"),j=function(e){var t=b.useRef(null);b.useEffect(function(){var o,n=function(e){var t=document.createElement("div");return e&&t.setAttribute("id",e),t}(e);return o=n,document.body.lastElementChild&&document.body.insertBefore(o,document.body.lastElementChild.nextElementSibling),t.current&&n.appendChild(t.current),function(){t.current&&t.current.remove(),-1===n.childNodes.length&&n.remove()}},[]);return!t.current&&x.canUseDOM&&(t.current=document.createElement("div")),t.current};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/hooks/useElement.ts"}});var O=function(e){var t=e.isLocked;b.useEffect(function(){var e=window.getComputedStyle(document.body).overflow,o=function(){document.body.style.overflow=e};return t?document.body.style.overflow="hidden":o(),function(){return o()}},[t])};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLockBodyScroll",filename:"src/hooks/useLockBodyScroll.ts"}});var h=function(e){var t=e.children,o=e.transparent,n=e.visible,r=e.shouldLockBodyScroll,s=void 0===r||r,a=e.onRequestClose,l=e.animationType,i=void 0===l?"none":l,u=!1,c=j();if(!c)return null;var d=b.useState(n),p=Object(m.a)(d,2),x=p[0],h=p[1],N=b.useRef(null),v=b.useRef(null);O({isLocked:!(!s||!n)}),b.useEffect(function(){var e=function(){v.current&&(v.current.deactivate(),v.current=null)};return n?(N.current&&!v.current&&(v.current=f()(N.current,{initialFocus:N.current,onDeactivate:function(){a&&n&&!u&&a()}}),v.current.activate()),h(!0)):e(),function(){u=!0,e()}},[n]);var B=Object(g.useSpring)({onRest:function(){return!n&&x&&h(!1)},config:y.a,opacity:"fade"===i?n?1:0:1,y:"slide"===i?n?0:100:0}),T=B.opacity,P=B.y;return _.createPortal(b.createElement(g.animated.div,{tabIndex:-1,ref:N,style:{backgroundColor:o?"transparent":"white",bottom:0,display:x?"flex":"none",flexDirection:"column",left:0,opacity:T,position:s?"fixed":"absolute",right:0,top:0,transform:P.interpolate(function(e){return"translateY(".concat(e,"%)")}),zIndex:1e3},__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/ModalBase.web.tsx",lineNumber:83}},n?t:null),c)};h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ModalBase",filename:"src/components/Modal/ModalBase.web.tsx"}}),o.d(t,"a",function(){return T});var N="/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/HistoryModal.web.tsx",v=0,B=function(e){function t(){var e,o;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(o=Object(u.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).modalId=++v,o.componentDidUpdate=function(e){var t=o.props.visible;e.visible!==t&&(t?o.updateBrowserHistory():o.handleManuallyClosed())},o.componentWillUnmount=function(){o.clearBrowserState()},o.updateBrowserHistory=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]||history.pushState(Object(a.a)({},history.state,{modal:Object(a.a)({},history.state&&history.state.modal,Object(s.a)({},o.modalId,!0))}),""),window.addEventListener("popstate",o.handlePopstate,!1)},o.handlePopstate=function(e){var t=o.props,n=t.visible,r=t.onRequestClose;e.state&&e.state.modal&&e.state.modal[o.modalId]||!r||(o.clearBrowserState(),r()),!n&&e.state&&e.state.modal&&e.state.modal[o.modalId]&&history.go(-1)},o.handleEscapeKey=function(){var e=o.props.onRequestClose;(history.state||history.state.modal||history.state.modal[o.modalId])&&e&&(o.clearBrowserState(),e(),history.go(-1))},o.handleManuallyClosed=function(){history.state&&history.state.modal&&history.state.modal[o.modalId]&&(o.clearBrowserState(),history.go(-1))},o.clearBrowserState=function(){history.replaceState(Object(a.a)({},history.state,{modal:Object(a.a)({},history.state&&history.state.modal,Object(s.a)({},o.modalId,!1))}),""),window.removeEventListener("popstate",o.handlePopstate,!1)},o}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(r.a)({},this.props);return b.createElement(h,Object(r.a)({},e,{onRequestClose:this.handleEscapeKey,__source:{fileName:N,lineNumber:132}}))}}]),t}(b.Component),T=function(e){var t=e.useHistory,o=void 0!==t&&t,s=Object(n.a)(e,["useHistory"]);return o?b.createElement(B,Object(r.a)({},s,{__source:{fileName:N,lineNumber:140}})):b.createElement(h,Object(r.a)({},s,{__source:{fileName:N,lineNumber:142}}))};"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HistoryModal",filename:"src/components/Modal/HistoryModal.web.tsx"}})},"./src/components/Modal/Modal.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return f});var n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),l=o("./src/components/Box/Box.tsx"),i=o("./src/components/Button/Button.tsx"),u=o("./src/components/Modal/HistoryModal.web.tsx"),c=o("./src/components/Typography/Text.tsx"),d=o("./src/components/Helpers/Toggle.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Modal/Modal.mdx",m={},p="wrapper";function f(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(s.b)(p,Object(r.a)({},m,o,{components:t,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(s.b)("h1",Object(r.a)({id:"modal"},{__source:{fileName:b,lineNumber:24}}),"Modal"),Object(s.b)("p",{__source:{fileName:b,lineNumber:27}},"Modal covers the full screen. For a prompt/small version of modal, use ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:27}},"Dialog")),Object(s.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:b,lineNumber:28}}),"Usage"),Object(s.b)(a.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle, set }) => (\n    <Box>\n      <Modal\n        visible={on}\n        animationType="slide"\n        onRequestClose={() => set(false)}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the modal</Text>\n          <Button onPress={() => set(false)} title="Close button one" />\n          <Button onPress={() => set(false)} title="Close button two" />\n        </Box>\n      </Modal>\n      <Button onPress={() => set(true)} title="Open modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:l.a,Button:i.a,Modal:u.a,HistoryModal:u.a,Text:c.a,Toggle:d.a},mdxType:"Playground",__source:{fileName:b,lineNumber:31}},Object(s.b)(d.a,{initial:!1,mdxType:"Toggle",__source:{fileName:b,lineNumber:42}},function(e){var t=e.on,o=(e.toggle,e.set);return Object(s.b)(l.a,{mdxType:"Box",__source:{fileName:b,lineNumber:47}},Object(s.b)(u.a,{visible:t,animationType:"slide",onRequestClose:function(){return o(!1)},mdxType:"Modal",__source:{fileName:b,lineNumber:48}},Object(s.b)(l.a,{height:1800,mdxType:"Box",__source:{fileName:b,lineNumber:49}},Object(s.b)(c.a,{mdxType:"Text",__source:{fileName:b,lineNumber:50}},"Put any content in the modal"),Object(s.b)(i.a,{onPress:function(){return o(!1)},title:"Close button one",mdxType:"Button",__source:{fileName:b,lineNumber:51}}),Object(s.b)(i.a,{onPress:function(){return o(!1)},title:"Close button two",mdxType:"Button",__source:{fileName:b,lineNumber:52}}))),Object(s.b)(i.a,{onPress:function(){return o(!0)},title:"Open modal",mdxType:"Button",__source:{fileName:b,lineNumber:55}}))})),Object(s.b)("h3",Object(r.a)({id:"nested"},{__source:{fileName:b,lineNumber:59}}),"Nested"),Object(s.b)(a.c,{__position:1,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal\n        visible={outerOn}\n        animationType="fade"\n        onRequestClose={() => outerSet(false)}\n      >\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  animationType="slide"\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:l.a,Button:i.a,Modal:u.a,HistoryModal:u.a,Text:c.a,Toggle:d.a},mdxType:"Playground",__source:{fileName:b,lineNumber:62}},Object(s.b)(d.a,{initial:!1,mdxType:"Toggle",__source:{fileName:b,lineNumber:73}},function(e){var t=e.on,o=e.set;return Object(s.b)(l.a,{mdxType:"Box",__source:{fileName:b,lineNumber:77}},Object(s.b)(u.a,{visible:t,animationType:"fade",onRequestClose:function(){return o(!1)},mdxType:"Modal",__source:{fileName:b,lineNumber:78}},Object(s.b)(l.a,{height:1800,mdxType:"Box",__source:{fileName:b,lineNumber:79}},Object(s.b)(c.a,{mdxType:"Text",__source:{fileName:b,lineNumber:80}},"Outer modal"),Object(s.b)(i.a,{onPress:function(){return o(!1)},title:"Close outer modal button one",mdxType:"Button",__source:{fileName:b,lineNumber:81}}),Object(s.b)(i.a,{onPress:function(){return o(!1)},title:"Close outer modal button two",mdxType:"Button",__source:{fileName:b,lineNumber:82}}),Object(s.b)(d.a,{initial:!1,mdxType:"Toggle",__source:{fileName:b,lineNumber:83}},function(e){var t=e.on,o=e.set;return Object(s.b)(l.a,{mdxType:"Box",__source:{fileName:b,lineNumber:87}},Object(s.b)(u.a,{visible:t,animationType:"slide",onRequestClose:function(){return o(!1)},mdxType:"Modal",__source:{fileName:b,lineNumber:88}},Object(s.b)(l.a,{height:1800,mdxType:"Box",__source:{fileName:b,lineNumber:89}},Object(s.b)(c.a,{mdxType:"Text",__source:{fileName:b,lineNumber:90}},"Inner modal"),Object(s.b)(i.a,{onPress:function(){return o(!1)},title:"Close inner modal button one",mdxType:"Button",__source:{fileName:b,lineNumber:91}}),Object(s.b)(i.a,{onPress:function(){return o(!1)},title:"Close inner modal button two",mdxType:"Button",__source:{fileName:b,lineNumber:92}}))),Object(s.b)(i.a,{onPress:function(){return o(!0)},title:"Open inner modal",mdxType:"Button",__source:{fileName:b,lineNumber:95}}))}))),Object(s.b)(i.a,{onPress:function(){return o(!0)},title:"Open outer modal",mdxType:"Button",__source:{fileName:b,lineNumber:100}}))})),Object(s.b)("h3",Object(r.a)({id:"using-browser-history"},{__source:{fileName:b,lineNumber:104}}),"Using browser history"),Object(s.b)("p",{__source:{fileName:b,lineNumber:107}},"By using ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:107}},"useHistory")," prop it will mimic Android's back button behavior on web which closes modals. On RN, this will have no effect and will use a regular ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:107}},"Modal"),". Works in nested modals as well."),Object(s.b)("p",{__source:{fileName:b,lineNumber:108}},"Note: Uses history ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:108}},"state")," to manipulate modal state"),Object(s.b)(a.c,{__position:2,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal\n        useHistory\n        visible={outerOn}\n        onRequestClose={() => outerSet(false)}\n      >\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  useHistory\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:l.a,Button:i.a,Modal:u.a,HistoryModal:u.a,Text:c.a,Toggle:d.a},mdxType:"Playground",__source:{fileName:b,lineNumber:109}},Object(s.b)(d.a,{initial:!1,mdxType:"Toggle",__source:{fileName:b,lineNumber:120}},function(e){var t=e.on,o=e.set;return Object(s.b)(l.a,{mdxType:"Box",__source:{fileName:b,lineNumber:124}},Object(s.b)(u.a,{useHistory:!0,visible:t,onRequestClose:function(){return o(!1)},mdxType:"Modal",__source:{fileName:b,lineNumber:125}},Object(s.b)(l.a,{height:1800,mdxType:"Box",__source:{fileName:b,lineNumber:126}},Object(s.b)(c.a,{mdxType:"Text",__source:{fileName:b,lineNumber:127}},"Outer modal"),Object(s.b)(i.a,{onPress:function(){return o(!1)},title:"Close outer modal button one",mdxType:"Button",__source:{fileName:b,lineNumber:128}}),Object(s.b)(i.a,{onPress:function(){return o(!1)},title:"Close outer modal button two",mdxType:"Button",__source:{fileName:b,lineNumber:129}}),Object(s.b)(d.a,{initial:!1,mdxType:"Toggle",__source:{fileName:b,lineNumber:130}},function(e){var t=e.on,o=e.set;return Object(s.b)(l.a,{mdxType:"Box",__source:{fileName:b,lineNumber:134}},Object(s.b)(u.a,{visible:t,useHistory:!0,onRequestClose:function(){return o(!1)},mdxType:"Modal",__source:{fileName:b,lineNumber:135}},Object(s.b)(l.a,{height:1800,mdxType:"Box",__source:{fileName:b,lineNumber:136}},Object(s.b)(c.a,{mdxType:"Text",__source:{fileName:b,lineNumber:137}},"Inner modal"),Object(s.b)(i.a,{onPress:function(){return o(!1)},title:"Close inner modal button one",mdxType:"Button",__source:{fileName:b,lineNumber:138}}),Object(s.b)(i.a,{onPress:function(){return o(!1)},title:"Close inner modal button two",mdxType:"Button",__source:{fileName:b,lineNumber:139}}))),Object(s.b)(i.a,{onPress:function(){return o(!0)},title:"Open inner modal",mdxType:"Button",__source:{fileName:b,lineNumber:142}}))}))),Object(s.b)(i.a,{onPress:function(){return o(!0)},title:"Open outer modal",mdxType:"Button",__source:{fileName:b,lineNumber:147}}))})),Object(s.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:b,lineNumber:151}}),"Props"),Object(s.b)(a.d,{of:u.a,mdxType:"Props",__source:{fileName:b,lineNumber:154}}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Modal/Modal.mdx"}}),f.isMDXComponent=!0},"./src/utils/isControlSize.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return n});var n=function(e){return"number"!==typeof e};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=9.45803a928accea938909.js.map