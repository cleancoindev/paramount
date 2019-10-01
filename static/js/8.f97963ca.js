(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/Box/Box.tsx":function(e,o,t){"use strict";t.d(o,"a",function(){return c});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=t("./node_modules/react/index.js"),s=t("./node_modules/react-native-web/dist/exports/View/index.js"),i=t("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={backgroundColor:function(e,o){return o.colors.background[e]?{backgroundColor:o.colors.background[e]}:{backgroundColor:e}},elevation:function(e,o){return o.elevations[e]},shape:function(e,o){return o.containerShapes[e]}},c=function(e){var o=e.children,t=e.testID,c=Object(r.a)(e,["children","testID"]),l=Object(i.b)(),u=[],d={};for(var b in c)if(b){var p=a[b];if(p){var m=p(c[b],l);u.push(m)}else d[b]=c[b]}return n.createElement(s.a,{testID:t,style:[d,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},o)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Button/Button.tsx":function(e,o,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=t("./node_modules/dlv/dist/dlv.umd.js"),c=t.n(a),l=t("./node_modules/react/index.js"),u=t.n(l),d=t("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=t("./src/theme/Theme.tsx"),p=t("./src/utils/isControlSize.ts"),m=t("./src/utils/overrides.ts"),f=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),P=t.n(f),g=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),v=t("./node_modules/react-native-web/dist/exports/View/index.js"),j=t("./node_modules/react-spring/native.cjs.js"),O=function(e,o){return!e},_=function(){var e=u.a.useReducer(O,!0),o=Object(i.a)(e,2)[1];return u.a.useCallback(function(){o(null)},[o])};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var x="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",h=Object(j.animated)(v.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var y=function(e){var o=Object(b.b)(),t=e.size,r=void 0===t?10:t,n=e.color,s=void 0===n?o.colors.text.primary:n,i=_(),a=Object(j.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:i,reset:!0,to:function(){var e=Object(g.a)(P.a.mark(function e(o){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o({opacity:1});case 2:return e.next=4,o({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(o){return e.apply(this,arguments)}}()});return l.createElement(v.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:x,lineNumber:34}},a.map(function(e,o){return l.createElement(h,{key:o,style:{backgroundColor:s,borderRadius:999,height:r,marginLeft:3,marginRight:3,opacity:e.opacity,width:r},__source:{fileName:x,lineNumber:42}})}))};y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var T=t("./src/components/Typography/Text.tsx");t.d(o,"a",function(){return C});var B="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonOverrides&&ButtonOverrides&&ButtonOverrides===Object(ButtonOverrides)&&Object.isExtensible(ButtonOverrides)&&Object.defineProperty(ButtonOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonOverrides",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var M="primary",N="default",w=!1,E=!1,k="medium",C=function(e){var o=e.appearance,t=void 0===o?M:o,r=e.color,n=void 0===r?N:r,a=e.isDisabled,u=void 0===a?w:a,d=e.isLoading,p=void 0===d?E:d,f=e.size,P=void 0===f?k:f,g=e.onPress,v=void 0===g?function(){}:g,j=e.title,O=e.testID,_=e.overrides,x=void 0===_?{}:_,h=Object(b.b)(),y=Object(m.a)(R,e,c()(h,"overrides.Button.Touchable"),x.Touchable),T=Object(i.a)(y,2),C=T[0],D=T[1],H=Object(m.a)(L,e,c()(h,"overrides.Button.Title"),x.Title),z=Object(i.a)(H,2),S=z[0],W=z[1],U=Object(m.a)(V,e,c()(h,"overrides.Button.Loading"),x.Loading),F=Object(i.a)(U,2),X=F[0],A=F[1],G=Object(m.a)(I,e,c()(h,"overrides.Button.IconBefore"),x.IconBefore),Y=Object(i.a)(G,2),J=Y[0],q=Y[1],K=Object(m.a)(I,e,c()(h,"overrides.Button.IconAfter"),x.IconAfter),Q=Object(i.a)(K,2),Z=Q[0],$=Q[1];return l.createElement(C,Object(s.a)({appearance:t,color:n,isDisabled:u,isLoading:p,size:P,onPress:v,testID:O},D,{__source:{fileName:B,lineNumber:124}}),l.createElement(J,Object(s.a)({appearance:t,color:n,isDisabled:u,isLoading:p,size:P},q,{__source:{fileName:B,lineNumber:134}})),p?l.createElement(X,Object(s.a)({appearance:t,color:n},A,{__source:{fileName:B,lineNumber:143}})):l.createElement(S,Object(s.a)({appearance:t,color:n,isDisabled:u,size:P,title:j},W,{__source:{fileName:B,lineNumber:145}})),l.createElement(Z,Object(s.a)({appearance:t,color:n,isDisabled:u,isLoading:p,size:P},$,{__source:{fileName:B,lineNumber:154}})))};"undefined"!==typeof C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}});var R=function(e){var o=e.appearance,t=void 0===o?M:o,i=e.color,a=void 0===i?N:i,c=e.isDisabled,u=void 0===c?w:c,m=e.isLoading,f=void 0===m?E:m,P=e.size,g=void 0===P?k:P,v=e.children,j=e.style,O=Object(n.a)(e,["appearance","color","isDisabled","isLoading","size","children","style"]),_=Object(b.b)(),x=function(e,o){return{minimal:{default:{backgroundColor:e.colors.background.content},danger:{backgroundColor:e.colors.background.content},primary:{backgroundColor:e.colors.background.content},secondary:{backgroundColor:e.colors.background.content}},primary:{default:{backgroundColor:o?e.colors.background.overlay:e.colors.button.default},danger:{backgroundColor:o?e.colors.background.dangerLight:e.colors.button.danger},primary:{backgroundColor:o?e.colors.background.primaryLight:e.colors.button.primary},secondary:{backgroundColor:o?e.colors.background.secondaryLight:e.colors.button.secondary}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3}}}}(_,f),h=Object(p.a)(g)?{borderRadius:_.controlBorderRadius[g],height:_.controlHeights[g],paddingLeft:_.controlPaddings[g]+8,paddingRight:_.controlPaddings[g]+8}:{borderRadius:_.controlBorderRadius.medium,height:g,paddingLeft:_.controlPaddings.medium+8,paddingRight:_.controlPaddings.medium+8},y=h.borderRadius,T=h.height,C=h.paddingLeft,R=h.paddingRight;return l.createElement(d.a,Object(s.a)({accessibilityRole:"button",disabled:!(!u&&!f),style:[Object(r.a)({borderRadius:y,height:T,paddingLeft:C,paddingRight:R,flexDirection:"row",alignItems:"center",justifyContent:"center"},x[t][a],u&&{backgroundColor:_.colors.button.disabled}),j]},O,{__source:{fileName:B,lineNumber:284}}),v)},D=function(e){return{minimal:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary},primary:{default:e.colors.button.defaultText,danger:e.colors.button.dangerText,primary:e.colors.button.primaryText,secondary:e.colors.button.secondaryText},outline:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary}}},L=function(e){var o=e.appearance,t=void 0===o?M:o,i=e.color,a=void 0===i?N:i,c=e.isDisabled,u=void 0===c?w:c,d=e.size,m=void 0===d?k:d,f=e.title,P=e.style,g=Object(n.a)(e,["appearance","color","isDisabled","size","title","style"]),v=Object(b.b)(),j=Object(p.a)(m)?v.textSizes[m]:v.textSizes.medium;return l.createElement(T.a,Object(s.a)({weight:"bold",style:[Object(r.a)({alignItems:"center",color:u?v.colors.text.muted:D(v)[t][a],display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center",paddingHorizontal:8},j),P]},g,{__source:{fileName:B,lineNumber:365}}),f)},V=function(e){var o=e.appearance,t=void 0===o?M:o,r=e.color,n=void 0===r?N:r,s=Object(b.b)();return l.createElement(y,{color:D(s)[t][n],__source:{fileName:B,lineNumber:401}})},I=function(e){return l.createElement(l.Fragment,null)}},"./src/components/Helpers/Toggle.tsx":function(e,o,t){"use strict";t.d(o,"a",function(){return i});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=t("./node_modules/react/index.js"),s=t.n(n);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var i=function(e){var o=e.children,t=e.initial,n=void 0!==t&&t,i=s.a.useState(n),a=Object(r.a)(i,2),c=a[0],l=a[1],u=s.a.useCallback(function(){l(!c)},[c]),d=s.a.useCallback(function(e){l(e)},[]);return o({on:c,toggle:u,set:d})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Helpers/ViewMeasure.tsx":function(e,o,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=t("./node_modules/react/index.js"),i=t("./node_modules/react-native-web/dist/exports/View/index.js"),a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=t("./node_modules/react-native-web/dist/exports/Dimensions/index.js"),u=t("./node_modules/react-native-web/dist/exports/findNodeHandle/index.js"),d=t("./node_modules/react-native-web/dist/exports/Platform/index.js"),b=t("./node_modules/react-native-web/dist/exports/UIManager/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/hooks/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/hooks/useMeasure.ts"}});var p={height:0,pageX:0,pageY:0,width:0,x:0,y:0};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initialMeasurements",filename:"src/hooks/useMeasure.ts"}});var m=function(e){return"web"===d.a.OS?e+window.scrollY:e},f=function(e){var o=e.onMeasure,t=e.ref,r=s.useState(p),n=Object(c.a)(r,2),i=n[0],d=n[1],f=s.useCallback(function(e){var r=Object(u.a)(t.current),n=i;r&&b.a.measure(r,function(t,r,s,i,c,l){var u=Object(a.a)({},n,e,{pageX:c,pageY:m(l)});d(u),o&&o(u)})},[i]),P=s.useCallback(function(e){var o=e.nativeEvent.layout;f(o)},[f,i]),g=s.useCallback(function(){f()},[f,i]);return s.useEffect(function(){return l.a.addEventListener("change",g),function(){return l.a.removeEventListener("change",g)}},[i]),{measurements:i,onLayout:P,onMeasure:f}};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/hooks/useMeasure.ts"}}),t.d(o,"a",function(){return P});"undefined"!==typeof ViewMeasureRenderProp&&ViewMeasureRenderProp&&ViewMeasureRenderProp===Object(ViewMeasureRenderProp)&&Object.isExtensible(ViewMeasureRenderProp)&&Object.defineProperty(ViewMeasureRenderProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureRenderProp",filename:"src/components/Helpers/ViewMeasure.tsx"}}),"undefined"!==typeof ViewMeasureProps&&ViewMeasureProps&&ViewMeasureProps===Object(ViewMeasureProps)&&Object.isExtensible(ViewMeasureProps)&&Object.defineProperty(ViewMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureProps",filename:"src/components/Helpers/ViewMeasure.tsx"}});var P=function(e){var o=e.onMeasure,t=e.children,a=Object(n.a)(e,["onMeasure","children"]),c="function"===typeof t,l=s.useRef(null),u=f({onMeasure:o,ref:l}),d=u.measurements,b=u.onLayout;return s.createElement(i.a,Object(r.a)({ref:l,onLayout:b,children:c?t(d):t},a,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Helpers/ViewMeasure.tsx",lineNumber:24}}))};"undefined"!==typeof P&&P&&P===Object(P)&&Object.isExtensible(P)&&Object.defineProperty(P,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasure",filename:"src/components/Helpers/ViewMeasure.tsx"}})},"./src/components/Popover/Popover.mdx":function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return f});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i=t("./node_modules/docz/dist/index.esm.js"),a=t("./src/components/Box/Box.tsx"),c=t("./src/components/Button/Button.tsx"),l=t("./src/components/Popover/Popover.tsx"),u=t("./src/components/Helpers/Toggle.tsx"),d=t("./src/components/Typography/Text.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Popover/Popover.mdx",p={},m="wrapper";function f(e){var o=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)(m,Object(n.a)({},p,t,{components:o,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(s.b)("h1",Object(n.a)({id:"popover"},{__source:{fileName:b,lineNumber:24}}),"Popover"),Object(s.b)("p",{__source:{fileName:b,lineNumber:27}},"Composes ",Object(s.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:27}},"Positioner")),Object(s.b)("h2",Object(n.a)({id:"usage"},{__source:{fileName:b,lineNumber:28}}),"Usage"),Object(s.b)(i.c,{__position:0,__code:'<Box height={250}>\n  <Toggle>\n    {({ on, toggle }) => (\n      <Popover\n        isVisible={on}\n        position="bottom"\n        content={\n          <Box width={200} height={200}>\n            <Text>\n              Due to variety and complexity involved in detecting touch\n              outside of the component on the web and in native, managing its\n              open and closed state is in your control\n            </Text>\n            <Button\n              appearance="outline"\n              color="danger"\n              onPress={toggle}\n              title="Close popover"\n            />\n          </Box>\n        }\n      >\n        <Button onPress={toggle} title="Open popover" />\n      </Popover>\n    )}\n  </Toggle>\n</Box>',__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,Box:a.a,Button:c.a,Popover:l.a,Toggle:u.a,Text:d.a},mdxType:"Playground",__source:{fileName:b,lineNumber:31}},Object(s.b)(a.a,{height:250,mdxType:"Box",__source:{fileName:b,lineNumber:41}},Object(s.b)(u.a,{mdxType:"Toggle",__source:{fileName:b,lineNumber:42}},function(e){var o=e.on,t=e.toggle;return Object(s.b)(l.a,{isVisible:o,position:"bottom",content:Object(s.b)(a.a,{width:200,height:200,mdxType:"Box",__source:{fileName:b,lineNumber:46}},Object(s.b)(d.a,{mdxType:"Text",__source:{fileName:b,lineNumber:47}},"Due to variety and complexity involved in detecting touch outside of the component on the web and in native, managing its open and closed state is in your control"),Object(s.b)(c.a,{appearance:"outline",color:"danger",onPress:t,title:"Close popover",mdxType:"Button",__source:{fileName:b,lineNumber:52}})),mdxType:"Popover",__source:{fileName:b,lineNumber:46}},Object(s.b)(c.a,{onPress:t,title:"Open popover",mdxType:"Button",__source:{fileName:b,lineNumber:54}}))}))),Object(s.b)("h2",Object(n.a)({id:"props"},{__source:{fileName:b,lineNumber:59}}),"Props"),Object(s.b)(i.d,{of:l.a,mdxType:"Props",__source:{fileName:b,lineNumber:62}}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Popover/Popover.mdx"}}),f.isMDXComponent=!0},"./src/components/Popover/Popover.tsx":function(e,o,t){"use strict";var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/dlv/dist/dlv.umd.js"),c=t.n(a),l=t("./node_modules/react/index.js"),u=t("./node_modules/react-native-web/dist/exports/View/index.js"),d=t("./src/theme/Theme.tsx"),b=t("./src/utils/overrides.ts"),p=t("./src/components/Helpers/ViewMeasure.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Positioner/Positioner.tsx",f={TOP:"top",TOP_LEFT:"top-left",TOP_RIGHT:"top-right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",LEFT:"left",RIGHT:"right"};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"POSITION",filename:"src/components/Positioner/Positioner.tsx"}}),"undefined"!==typeof PositionerPosition&&PositionerPosition&&PositionerPosition===Object(PositionerPosition)&&Object.isExtensible(PositionerPosition)&&Object.defineProperty(PositionerPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerPosition",filename:"src/components/Positioner/Positioner.tsx"}}),"undefined"!==typeof PositionerBaseProps&&PositionerBaseProps&&PositionerBaseProps===Object(PositionerBaseProps)&&Object.isExtensible(PositionerBaseProps)&&Object.defineProperty(PositionerBaseProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerBaseProps",filename:"src/components/Positioner/Positioner.tsx"}}),"undefined"!==typeof PositionerOverrides&&PositionerOverrides&&PositionerOverrides===Object(PositionerOverrides)&&Object.isExtensible(PositionerOverrides)&&Object.defineProperty(PositionerOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerOverrides",filename:"src/components/Positioner/Positioner.tsx"}}),"undefined"!==typeof PositionerProps&&PositionerProps&&PositionerProps===Object(PositionerProps)&&Object.isExtensible(PositionerProps)&&Object.defineProperty(PositionerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PositionerProps",filename:"src/components/Positioner/Positioner.tsx"}});var P={height:0,pageX:0,pageY:0,width:0,x:0,y:0},g={isVisible:!1,position:f.BOTTOM},v=function(e){var o=e.children,t=e.content,r=e.isVisible,i=void 0===r?g.isVisible:r,a=e.position,u=void 0===a?g.position:a,v=e.overrides,O=void 0===v?{}:v,_=Object(d.b)(),x=l.useState(P),h=Object(s.a)(x,2),y=h[0],T=h[1],B=l.useState(P),M=Object(s.a)(B,2),N=M[0],w=M[1],E=!(!N.width&&!N.height),k=function(e){var o=e.position,t=e.targetMeasurements,r=e.positionerMeasurements;switch(o){case f.TOP_LEFT:return{left:0,top:-r.height-14};case f.TOP:return{left:t.width/2,top:-r.height-14,transform:[{translateX:-r.width/2}]};case f.TOP_RIGHT:return{right:0,top:-r.height-14};case f.LEFT:return{left:0-r.width-14,top:-r.height/2+t.height/2};case f.RIGHT:return{right:0-r.width-14,top:-r.height/2+t.height/2};case f.BOTTOM_RIGHT:return{right:0,top:t.height+14};case f.BOTTOM:return{left:t.width/2,top:t.height+14,transform:[{translateX:-r.width/2}]};case f.BOTTOM_LEFT:return{left:0,top:t.height+14};default:return{}}}({position:u,positionerMeasurements:N,targetMeasurements:y}),C=Object(b.a)(j,e,c()(_,"overrides.Positioner.Root"),O.Root),R=Object(s.a)(C,2),D=R[0],L=R[1],V=Object(b.a)(p.a,e,c()(_,"overrides.Positioner.Target"),O.Target),I=Object(s.a)(V,2),H=I[0],z=I[1];return l.createElement(l.Fragment,null,i&&l.createElement(D,Object(n.a)({positionStyle:k,isPositionerMeasurementsMeasured:E,onMeasure:w},L,{__source:{fileName:m,lineNumber:188}}),t),l.createElement(H,Object(n.a)({onMeasure:T},z,{__source:{fileName:m,lineNumber:197}}),o))};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Positioner",filename:"src/components/Positioner/Positioner.tsx"}});var j=function(e){var o=e.style,t=e.positionStyle,r=e.isPositionerMeasurementsMeasured,s=void 0!==r&&r,a=Object(i.a)(e,["style","positionStyle","isPositionerMeasurementsMeasured"]);return l.createElement(p.a,Object(n.a)({style:[{opacity:s?1:0,position:"absolute",zIndex:1},t,o]},a,{__source:{fileName:m,lineNumber:218}}))};t.d(o,"a",function(){return _});var O="/home/travis/build/WeTrustPlatform/paramount/src/components/Popover/Popover.tsx";"undefined"!==typeof PopoverOverrides&&PopoverOverrides&&PopoverOverrides===Object(PopoverOverrides)&&Object.isExtensible(PopoverOverrides)&&Object.defineProperty(PopoverOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverOverrides",filename:"src/components/Popover/Popover.tsx"}}),"undefined"!==typeof PopoverProps&&PopoverProps&&PopoverProps===Object(PopoverProps)&&Object.isExtensible(PopoverProps)&&Object.defineProperty(PopoverProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverProps",filename:"src/components/Popover/Popover.tsx"}});var _=function(e){var o=e.content,t=e.overrides,r=void 0===t?{}:t,a=Object(i.a)(e,["content","overrides"]),u=Object(d.b)(),p=Object(b.a)(x,e,c()(u,"overrides.Popover.Content"),r.Content),m=Object(s.a)(p,2),f=m[0],P=m[1];return l.createElement(v,Object(n.a)({content:l.createElement(f,Object(n.a)({},P,{__source:{fileName:O,lineNumber:33}}),o),overrides:r},a,{__source:{fileName:O,lineNumber:32}}))};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Popover",filename:"src/components/Popover/Popover.tsx"}});var x=function(e){var o=e.style,t=Object(i.a)(e,["style"]),s=Object(d.b)();return l.createElement(u.a,Object(n.a)({style:[Object(r.a)({backgroundColor:s.colors.background.content,padding:16},s.elevations[2]),o]},t,{__source:{fileName:O,lineNumber:46}}))}},"./src/utils/isControlSize.ts":function(e,o,t){"use strict";t.d(o,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=8.48818ae313f1216d8e7f.js.map