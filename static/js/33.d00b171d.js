(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/components/Counter/Counter.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return m});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),a=r("./node_modules/docz/dist/index.esm.js"),i=r("./src/components/Counter/Counter.tsx"),u=r("./src/components/Helpers/State.tsx"),l="/home/travis/build/WeTrustPlatform/paramount/src/components/Counter/Counter.mdx",c={},b="wrapper";function m(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(s.b)(b,Object(o.a)({},c,r,{components:t,mdxType:"MDXLayout",__source:{fileName:l,lineNumber:21}}),Object(s.b)("h1",Object(o.a)({id:"counter"},{__source:{fileName:l,lineNumber:23}}),"Counter"),Object(s.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:l,lineNumber:26}}),"Usage"),Object(s.b)(a.c,{__position:0,__code:"<State initial={{ value: 0 }}>\n  {({ state, setState }) => (\n    <Counter\n      value={state.value}\n      onValueChange={value => setState({ value })}\n    />\n  )}\n</State>",__scope:{props:this?this.props:r,Playground:a.c,Props:a.d,Counter:i.a,State:u.a},mdxType:"Playground",__source:{fileName:l,lineNumber:29}},Object(s.b)(u.a,{initial:{value:0},mdxType:"State",__source:{fileName:l,lineNumber:36}},function(e){var t=e.state,r=e.setState;return Object(s.b)(i.a,{value:t.value,onValueChange:function(e){return r({value:e})},mdxType:"Counter",__source:{fileName:l,lineNumber:42}})})),Object(s.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:l,lineNumber:47}}),"Props"),Object(s.b)(a.d,{of:i.a,mdxType:"Props",__source:{fileName:l,lineNumber:50}}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Counter/Counter.mdx"}}),m.isMDXComponent=!0},"./src/components/Counter/Counter.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return _});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=r("./node_modules/dlv/dist/dlv.umd.js"),u=r.n(i),l=r("./node_modules/react/index.js"),c=r("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=r("./node_modules/react-native-web/dist/exports/View/index.js"),m=r("./src/theme/Theme.tsx"),d=r("./src/utils/overrides.ts"),p=r("./src/components/Icon/Icon.web.tsx"),f=r("./src/components/Typography/Text.tsx"),j="/home/travis/build/WeTrustPlatform/paramount/src/components/Counter/Counter.tsx";"undefined"!==typeof CounterOverrides&&CounterOverrides&&CounterOverrides===Object(CounterOverrides)&&Object.isExtensible(CounterOverrides)&&Object.defineProperty(CounterOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterOverrides",filename:"src/components/Counter/Counter.tsx"}}),"undefined"!==typeof CounterProps&&CounterProps&&CounterProps===Object(CounterProps)&&Object.isExtensible(CounterProps)&&Object.defineProperty(CounterProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CounterProps",filename:"src/components/Counter/Counter.tsx"}});var _=function(e){var t=e.value,r=void 0===t?0:t,n=e.step,o=void 0===n?1:n,i=e.max,c=e.min,b=e.onValueChange,p=void 0===b?function(){}:b,f=e.overrides,_=void 0===f?{}:f,x=Object(m.b)(),N=c===r,h=i===r,S=Object(d.a)(O,e,u()(x,"overrides.Counter.Root"),_.Root),g=Object(a.a)(S,2),E=g[0],T=g[1],w=Object(d.a)(C,e,u()(x,"overrides.Counter.Touchable"),_.Touchable),D=Object(a.a)(w,2),R=D[0],I=D[1],H=Object(d.a)(v,e,u()(x,"overrides.Counter.Count"),_.Count),W=Object(a.a)(H,2),k=W[0],M=W[1],V=Object(d.a)(P,e,u()(x,"overrides.Counter.IconPlus"),_.IconPlus),z=Object(a.a)(V,2),X=z[0],A=z[1],J=Object(d.a)(y,e,u()(x,"overrides.Counter.IconMinus"),_.IconMinus),L=Object(a.a)(J,2),U=L[0],q=L[1],B=l.useCallback(function(){p(r+o)},[r]),F=l.useCallback(function(){p(r-o)},[r]);return l.createElement(E,Object(s.a)({},T,{__source:{fileName:j,lineNumber:109}}),l.createElement(R,Object(s.a)({isDisabled:N,onPress:F},I,{__source:{fileName:j,lineNumber:110}}),l.createElement(U,Object(s.a)({isDisabled:N},q,{__source:{fileName:j,lineNumber:115}}))),l.createElement(k,Object(s.a)({value:r},M,{__source:{fileName:j,lineNumber:117}})),l.createElement(R,Object(s.a)({isDisabled:h,onPress:B},I,{__source:{fileName:j,lineNumber:118}}),l.createElement(X,Object(s.a)({isDisabled:h},A,{__source:{fileName:j,lineNumber:123}}))))};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Counter",filename:"src/components/Counter/Counter.tsx"}});var O=function(e){var t=e.children,r=e.style,n=Object(o.a)(e,["children","style"]);return l.createElement(b.a,Object(s.a)({style:[{display:"flex",flexDirection:"row",alignItems:"center"},r]},n,{__source:{fileName:j,lineNumber:139}}),t)},v=function(e){var t=e.value,r=e.style,n=Object(o.a)(e,["value","style"]);return l.createElement(f.a,Object(s.a)({align:"center",style:[{paddingHorizontal:16,minWidth:56},Object(d.b)(e,r)]},n,{__source:{fileName:j,lineNumber:163}}),t)},C=function(e){var t=e.children,r=e.style,a=e.isDisabled,i=void 0!==a&&a,u=e.onPress,b=Object(o.a)(e,["children","style","isDisabled","onPress"]),d=Object(m.b)();return l.createElement(c.a,Object(s.a)({style:[Object(n.a)({alignItems:"center",borderColor:d.colors.border.primary,borderRadius:999,borderWidth:1,display:"flex",height:40,justifyContent:"center",width:40},i&&{borderColor:d.colors.border.default}),r],disabled:i,onPress:i?void 0:u},b,{__source:{fileName:j,lineNumber:188}}),t)},x=function(e){var t=e.isDisabled,r=e.name,n=Object(o.a)(e,["isDisabled","name"]),a=Object(m.b)();return l.createElement(p.a,Object(s.a)({name:r,size:"xsmall",color:t?a.colors.text.muted:a.colors.text.primary},n,{__source:{fileName:j,lineNumber:221}}))},P=function(e){return l.createElement(x,Object(s.a)({name:"plus"},e,{__source:{fileName:j,lineNumber:235}}))},y=function(e){return l.createElement(x,Object(s.a)({name:"minus"},e,{__source:{fileName:j,lineNumber:238}}))}},"./src/components/Helpers/State.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return a});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),o=r("./node_modules/react/index.js"),s=r.n(o);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var a=function(e){var t=e.children,r=e.initial,o=void 0!==r&&r,a=s.a.useState(o),i=Object(n.a)(a,2),u=i[0],l=i[1];return t({state:u,setState:s.a.useCallback(function(e){l(e)},[])})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})}}]);
//# sourceMappingURL=33.fb2ef275bf02d8cd1666.js.map