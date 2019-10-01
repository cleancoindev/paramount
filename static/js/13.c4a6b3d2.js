(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./src/components/Box/Box.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return a});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/react/index.js"),s=o("./node_modules/react-native-web/dist/exports/View/index.js"),i=o("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var c={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},a=function(e){var t=e.children,o=e.testID,a=Object(r.a)(e,["children","testID"]),l=Object(i.b)(),u=[],d={};for(var b in a)if(b){var m=c[b];if(m){var p=m(a[b],l);u.push(p)}else d[b]=a[b]}return n.createElement(s.a,{testID:o,style:[d,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return i});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=o("./node_modules/react/index.js"),s=o.n(n);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var i=function(e){var t=e.children,o=e.initial,n=void 0!==o&&o,i=s.a.useState(n),c=Object(r.a)(i,2),a=c[0],l=c[1],u=s.a.useCallback(function(){l(!a)},[a]),d=s.a.useCallback(function(e){l(e)},[]);return t({on:a,toggle:u,set:d})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Switch/Switch.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return m});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),i=o("./node_modules/docz/dist/index.esm.js"),c=o("./src/components/Box/Box.tsx"),a=o("./src/components/Switch/Switch.tsx"),l=o("./src/components/Helpers/Toggle.tsx"),u="/home/travis/build/WeTrustPlatform/paramount/src/components/Switch/Switch.mdx",d={},b="wrapper";function m(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(s.b)(b,Object(n.a)({},d,o,{components:t,mdxType:"MDXLayout",__source:{fileName:u,lineNumber:21}}),Object(s.b)("h1",Object(n.a)({id:"switch"},{__source:{fileName:u,lineNumber:24}}),"Switch"),Object(s.b)("h2",Object(n.a)({id:"usage"},{__source:{fileName:u,lineNumber:27}}),"Usage"),Object(s.b)(i.c,{__position:0,__code:"<Box>\n  <Toggle initial={true}>\n    {({ on, toggle, set }) => <Switch value={on} onValueChange={set} />}\n  </Toggle>\n</Box>",__scope:{props:this?this.props:o,Playground:i.c,Props:i.d,Box:c.a,Switch:a.a,Toggle:l.a},mdxType:"Playground",__source:{fileName:u,lineNumber:30}},Object(s.b)(c.a,{mdxType:"Box",__source:{fileName:u,lineNumber:38}},Object(s.b)(l.a,{initial:!0,mdxType:"Toggle",__source:{fileName:u,lineNumber:39}},function(e){var t=e.on,o=(e.toggle,e.set);return Object(s.b)(a.a,{value:t,onValueChange:o,mdxType:"Switch",__source:{fileName:u,lineNumber:44}})}))),Object(s.b)("h2",Object(n.a)({id:"props"},{__source:{fileName:u,lineNumber:48}}),"Props"),Object(s.b)(i.d,{of:a.a,mdxType:"Props",__source:{fileName:u,lineNumber:51}}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Switch/Switch.mdx"}}),m.isMDXComponent=!0},"./src/components/Switch/Switch.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return _});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=o("./node_modules/dlv/dist/dlv.umd.js"),c=o.n(i),a=o("./node_modules/react/index.js"),l=o("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),u=o("./node_modules/react-native-web/dist/exports/View/index.js"),d=o("./node_modules/react-spring/native.cjs.js"),b=o("./src/constants/Animation.ts"),m=o("./src/theme/Theme.tsx"),p=o("./src/utils/isControlSize.ts"),f=o("./src/utils/overrides.ts"),g=o("./src/components/Icon/Icon.web.tsx"),h="/home/travis/build/WeTrustPlatform/paramount/src/components/Switch/Switch.tsx",j=Object(d.animated)(u.a);"undefined"!==typeof SwitchOverrides&&SwitchOverrides&&SwitchOverrides===Object(SwitchOverrides)&&Object.isExtensible(SwitchOverrides)&&Object.defineProperty(SwitchOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchOverrides",filename:"src/components/Switch/Switch.tsx"}}),"undefined"!==typeof SwitchProps&&SwitchProps&&SwitchProps===Object(SwitchProps)&&Object.isExtensible(SwitchProps)&&Object.defineProperty(SwitchProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchProps",filename:"src/components/Switch/Switch.tsx"}});var x={size:"medium",value:!1,isDisabled:!1,onValueChange:function(){}},_=function(e){var t=e.size,o=void 0===t?x.size:t,r=e.value,i=void 0===r?x.value:r,l=e.isDisabled,u=void 0===l?x.isDisabled:l,d=e.onValueChange,b=void 0===d?x.onValueChange:d,p=e.overrides,g=void 0===p?{}:p,j=Object(m.b)(),_=Object(f.a)(O,e,c()(j,"overrides.Switch.Touchable"),g.Touchable),v=Object(s.a)(_,2),w=v[0],S=v[1],T=Object(f.a)(P,e,c()(j,"overrides.Switch.Background"),g.Background),N=Object(s.a)(T,2),C=N[0],k=N[1],B=Object(f.a)(y,e,c()(j,"overrides.Switch.Circle"),g.Circle),D=Object(s.a)(B,2),z=D[0],E=D[1];return a.createElement(w,Object(n.a)({isDisabled:u,size:o,onPress:function(){return b(!i)}},S,{__source:{fileName:h,lineNumber:94}}),a.createElement(C,Object(n.a)({isDisabled:u,size:o,value:i},k,{__source:{fileName:h,lineNumber:100}}),a.createElement(z,Object(n.a)({isDisabled:u,size:o,value:i},E,{__source:{fileName:h,lineNumber:106}}))))};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Switch",filename:"src/components/Switch/Switch.tsx"}});var O=function(e){e.size;var t=e.isDisabled,o=e.children,s=e.style,i=Object(r.a)(e,["size","isDisabled","children","style"]);return a.createElement(l.a,Object(n.a)({activeOpacity:1,disabled:t,style:[{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"},s]},i,{__source:{fileName:h,lineNumber:127}}),o)},v=function(e,t){return Object(p.a)(e)?t.controlHeights[e]-8:e},w=function(e,t){return 2*v(e,t)},P=function(e){var t=e.size,o=void 0===t?x.size:t,s=e.isDisabled,i=void 0===s?x.isDisabled:s,c=e.children,l=e.value,u=e.style,p=Object(r.a)(e,["size","isDisabled","children","value","style"]),f=Object(m.b)(),g=Object(d.useSpring)({config:b.a,backgroundColor:l?i?f.colors.background.greyDefault:f.colors.background.primaryDefault:f.colors.background.greyDefault}).backgroundColor,_=v(o,f),O=w(o,f);return a.createElement(j,Object(n.a)({style:[{alignItems:"center",backgroundColor:f.colors.background.greyLight,borderRadius:24,flexDirection:"row",height:_+8,padding:3,width:O},{backgroundColor:g},u]},p,{__source:{fileName:h,lineNumber:184}}),c)},y=function(e){var t=e.size,o=void 0===t?x.size:t,s=e.isDisabled,i=e.value,c=e.style,l=Object(r.a)(e,["size","isDisabled","value","style"]),u=Object(m.b)(),p=v(o,u),f=w(o,u),_=Object(d.useSpring)({config:b.a,circleColor:u.colors.background.content,circlePosition:i?f-(p+6):0}),O=_.circleColor,P=_.circlePosition;return a.createElement(j,Object(n.a)({style:[{alignItems:"center",backgroundColor:u.colors.background.content,borderRadius:24,display:"flex",height:p,justifyContent:"center",padding:0,width:p},{backgroundColor:O},{transform:[{translateX:P}]},c]},l,{__source:{fileName:h,lineNumber:233}}),i?a.createElement(g.a,{name:"check",size:"xsmall",color:s?u.colors.text.white:u.colors.text.primary,__source:{fileName:h,lineNumber:253}}):a.createElement(g.a,{name:"x",size:"xsmall",color:s?u.colors.text.white:u.colors.text.default,__source:{fileName:h,lineNumber:261}}))}},"./src/utils/isControlSize.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=13.48818ae313f1216d8e7f.js.map