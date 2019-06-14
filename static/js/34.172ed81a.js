(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"./src/components/Helpers/State.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=n("./node_modules/react/index.js"),r=n.n(a);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var o=function(e){var t=e.children,n=e.initial,a=void 0!==n&&n,o=r.a.useState(a),b=Object(s.a)(o,2),i=b[0],l=b[1];return t({state:i,setState:r.a.useCallback(function(e){l(e)},[])})};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return b});var s=n("./node_modules/react/index.js"),a=n("./node_modules/react-icons/fi/index.esm.js"),r=n("./src/theme/Theme.tsx"),o=n("./src/components/Typography/Text.styles.ts");var b=function(e){var t=e.name,n=e.color,b=e.size,i=Object(r.a)(),l=a["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return s.createElement(l,{color:n?Object(o.c)(i.colors.text)(n):n,size:b,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Tabs/Tab.tsx":function(e,t,n){"use strict";var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),o=n("./node_modules/react-native-web/dist/exports/View/index.js"),b=n("./src/theme/Theme.tsx"),i=n("./src/utils/mergeStyles.ts"),l=n("./src/components/Button/Button.tsx"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TabStyles&&TabStyles&&TabStyles===Object(TabStyles)&&Object.isExtensible(TabStyles)&&Object.defineProperty(TabStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabStyles",filename:"src/components/Tabs/Tab.styles.ts"}}),"undefined"!==typeof GetTabStyleProps&&GetTabStyleProps&&GetTabStyleProps===Object(GetTabStyleProps)&&Object.isExtensible(GetTabStyleProps)&&Object.defineProperty(GetTabStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTabStyleProps",filename:"src/components/Tabs/Tab.styles.ts"}}),"undefined"!==typeof GetTabStyles&&GetTabStyles&&GetTabStyles===Object(GetTabStyles)&&Object.isExtensible(GetTabStyles)&&Object.defineProperty(GetTabStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTabStyles",filename:"src/components/Tabs/Tab.styles.ts"}});var u=function(e,t){var n=e.shouldStretch,s=e.isActive;return{buttonStyle:{backgroundColor:s?"white":"transparent"},containerStyle:Object(c.a)({backgroundColor:t.colors.background.greyDefault,padding:2},n?{flex:1}:{}),focusColor:t.colors.background.greyLight,textStyle:{color:s?t.colors.text.primary:t.colors.text.muted}}};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTabStyles",filename:"src/components/Tabs/Tab.styles.ts"}}),n.d(t,"a",function(){return p});var m="/home/travis/build/WeTrustPlatform/paramount/src/components/Tabs/Tab.tsx";"undefined"!==typeof TabProps&&TabProps&&TabProps===Object(TabProps)&&Object.isExtensible(TabProps)&&Object.defineProperty(TabProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabProps",filename:"src/components/Tabs/Tab.tsx"}});var p=function(e){var t=e.isActive,n=void 0!==t&&t,c=e.getStyles,p=e.index,d=e.onPress,f=e.shouldStretch,T=void 0===f||f,y=Object(a.a)(e,["isActive","getStyles","index","onPress","shouldStretch"]),j=Object(b.a)(),S=Object(i.a)(u,c,j.components.getTabStyles)({isActive:n,shouldStretch:T},j),_=S.containerStyle,x=S.buttonStyle,O=S.textStyle,P=S.focusColor;return r.createElement(o.a,{style:_,__source:{fileName:m,lineNumber:36}},r.createElement(l.a,Object(s.a)({color:n?"primary":"default",getStyles:function(){return{buttonStyle:x,focusColor:P,textStyle:O}},onPress:function(){p&&d&&d(p)}},y,{__source:{fileName:m,lineNumber:37}})))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tab",filename:"src/components/Tabs/Tab.tsx"}})},"./src/components/Tabs/Tabs.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),o=n("./node_modules/docz/dist/index.esm.js"),b=n("./src/components/Icon/Icon.web.tsx"),i=n("./src/components/Helpers/State.tsx"),l=n("./src/components/Tabs/Tabs.tsx"),c=n("./src/components/Tabs/Tab.tsx"),u="/home/travis/build/WeTrustPlatform/paramount/src/components/Tabs/Tabs.mdx",m={},p="wrapper";function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(r.b)(p,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout",__source:{fileName:u,lineNumber:21}}),Object(r.b)("h1",Object(a.a)({id:"tabs"},{__source:{fileName:u,lineNumber:24}}),"Tabs"),Object(r.b)("p",{__source:{fileName:u,lineNumber:27}},"You can use a custom component in place of ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:27}},"Tab")," component, though keep in mind you need to manage ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:27}},"isActive")," and ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:27}},"onPress")," by yourself"),Object(r.b)("h3",Object(a.a)({id:"usage"},{__source:{fileName:u,lineNumber:28}}),"Usage"),Object(r.b)(o.c,{__position:0,__code:"<State initial={{ activeTabIndex: 0 }}>\n  {({ state, setState }) => (\n    <Tabs\n      activeTabIndex={state.activeTabIndex}\n      onChange={index => setState({ activeTabIndex: index })}\n      getStyles={(props, theme) => ({\n        containerStyle: {},\n      })}\n    >\n      {new Array(4).fill(0).map((v, i) => {\n        if (i === 0) {\n          return (\n            <Tab\n              key={0}\n              title=\"Custom\"\n              onPress={() => setState({ activeTabIndex: 0 })}\n              getStyles={() => ({\n                containerStyle: {},\n                buttonStyle: {},\n                textStyle: {},\n                focusColor: '#fafafa',\n              })}\n            />\n          )\n        }\n        return <Tab key={i} title={`Tab ${i + 1}`} />\n      })}\n    </Tabs>\n  )}\n</State>",__scope:{props:this?this.props:n,Playground:o.c,Props:o.d,Icon:b.a,State:i.a,Tabs:l.a,Tab:c.a},mdxType:"Playground",__source:{fileName:u,lineNumber:31}},Object(r.b)(i.a,{initial:{activeTabIndex:0},mdxType:"State",__source:{fileName:u,lineNumber:40}},function(e){var t=e.state,n=e.setState;return Object(r.b)(l.a,{activeTabIndex:t.activeTabIndex,onChange:function(e){return n({activeTabIndex:e})},getStyles:function(e,t){return{containerStyle:{}}},mdxType:"Tabs",__source:{fileName:u,lineNumber:46}},new Array(4).fill(0).map(function(e,t){return 0===t?Object(r.b)(c.a,{key:0,title:"Custom",onPress:function(){return n({activeTabIndex:0})},getStyles:function(){return{containerStyle:{},buttonStyle:{},textStyle:{},focusColor:"#fafafa"}},mdxType:"Tab",__source:{fileName:u,lineNumber:53}}):Object(r.b)(c.a,{key:t,title:"Tab ".concat(t+1),mdxType:"Tab",__source:{fileName:u,lineNumber:63}})}))})),Object(r.b)("h3",Object(a.a)({id:"props"},{__source:{fileName:u,lineNumber:68}}),"Props"),Object(r.b)(o.d,{of:l.a,mdxType:"Props",__source:{fileName:u,lineNumber:71}}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Tabs/Tabs.mdx"}}),d.isMDXComponent=!0},"./src/components/Tabs/Tabs.tsx":function(e,t,n){"use strict";var s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),a=n("./node_modules/react/index.js"),r=n("./node_modules/react-native-web/dist/exports/View/index.js"),o=n("./src/theme/Theme.tsx"),b=n("./src/utils/mergeStyles.ts");"undefined"!==typeof TabsStyles&&TabsStyles&&TabsStyles===Object(TabsStyles)&&Object.isExtensible(TabsStyles)&&Object.defineProperty(TabsStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabsStyles",filename:"src/components/Tabs/Tabs.styles.ts"}}),"undefined"!==typeof GetTabsStyles&&GetTabsStyles&&GetTabsStyles===Object(GetTabsStyles)&&Object.isExtensible(GetTabsStyles)&&Object.defineProperty(GetTabsStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTabsStyles",filename:"src/components/Tabs/Tabs.styles.ts"}});var i=function(e,t){return{containerStyle:{borderRadius:t.controlBorderRadius.medium,flex:1,flexDirection:"row",justifyContent:"flex-start"}}};i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTabsStyles",filename:"src/components/Tabs/Tabs.styles.ts"}}),n.d(t,"a",function(){return l});"undefined"!==typeof TabsDistribution&&TabsDistribution&&TabsDistribution===Object(TabsDistribution)&&Object.isExtensible(TabsDistribution)&&Object.defineProperty(TabsDistribution,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabsDistribution",filename:"src/components/Tabs/Tabs.tsx"}}),"undefined"!==typeof TabsProps&&TabsProps&&TabsProps===Object(TabsProps)&&Object.isExtensible(TabsProps)&&Object.defineProperty(TabsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabsProps",filename:"src/components/Tabs/Tabs.tsx"}});var l=function(e){var t=e.children,n=e.activeTabIndex,l=e.onChange,c=e.getStyles,u=Object(o.a)(),m=Object(b.a)(i,c,u.components.getTabsStyles)({},u).containerStyle,p=a.Children.map(t,function(e,t){return e?Object(s.a)({index:t,isActive:t===n,onPress:function(e){return l(e)}},e.props):null}),d=a.Children.toArray(t);return a.createElement(r.a,{style:m,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Tabs/Tabs.tsx",lineNumber:44}},p.map(function(e,t){return a.cloneElement(d[t],e)}))};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tabs",filename:"src/components/Tabs/Tabs.tsx"}})}}]);
//# sourceMappingURL=34.0c0c915f3939282047ab.js.map