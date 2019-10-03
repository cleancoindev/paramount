(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./src/components/Box/Box.tsx":function(e,n,i){"use strict";var t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=i("./node_modules/react/index.js"),r=i("./node_modules/react-native-web/dist/exports/View/index.js"),s=i("./src/theme/Theme.tsx"),a=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),c=i("./node_modules/dlv/dist/dlv.umd.js"),l=i.n(c),b=i("./src/utils/overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var u=function(e,n){return"number"===typeof e?e:n.spacing[e]};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var m=function(e){var n=e.size,i=void 0===n?"medium":n,c=e.orientation,m=void 0===c?"vertical":c,p=e.style,d=Object(t.a)(e,["size","orientation","style"]),f=Object(s.b)();return o.createElement(r.a,Object(a.a)({style:["vertical"===m?{height:u(i,f)}:{width:u(i,f)},Object(b.b)(e,p),Object(b.b)(e,l()(f,"overrides.Spacing.style"))]},d,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),i.d(n,"a",function(){return d});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var p={backgroundColor:function(e,n){return n.colors.background[e]?{backgroundColor:n.colors.background[e]}:{backgroundColor:e}},elevation:function(e,n){return n.elevations[e]},shape:function(e,n){return n.containerShapes[e]},space:u,spaceBottom:u,spaceEnd:u,spaceHorizontal:u,spaceLeft:u,spaceRight:u,spaceStart:u,spaceTop:u,spaceVertical:u},d=function(e){var n=e.children,i=e.testID,a=Object(t.a)(e,["children","testID"]),c=Object(s.b)(),l=[],b={};for(var u in a)if(u){var m=p[u];if(m){var d=m(a[u],c);l.push(d)}else b[u]=a[u]}return o.createElement(r.a,{testID:i,style:[b,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:78}},n)};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Layout/Visible.mdx":function(e,n,i){"use strict";i.r(n),i.d(n,"default",function(){return d});var t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=(i("./node_modules/react/index.js"),i("./node_modules/@mdx-js/react/dist/index.es.js")),s=i("./node_modules/docz/dist/index.esm.js"),a=i("./src/components/Box/Box.tsx"),c=i("./src/components/Layout/Visible.tsx"),l=i("./src/components/Layout/LayoutProvider.tsx"),b=i("./src/components/Typography/Text.tsx"),u="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Visible.mdx",m={},p="wrapper";function d(e){var n=e.components,i=Object(t.a)(e,["components"]);return Object(r.b)(p,Object(o.a)({},m,i,{components:n,mdxType:"MDXLayout",__source:{fileName:u,lineNumber:21}}),Object(r.b)("h1",Object(o.a)({id:"visible"},{__source:{fileName:u,lineNumber:24}}),"Visible"),Object(r.b)("p",{__source:{fileName:u,lineNumber:27}},"Renders children when the current screen size matches defined sizes"),Object(r.b)("p",{__source:{fileName:u,lineNumber:28}},"Refer to ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:28}},"Layout")," docs for setup"),Object(r.b)("p",{__source:{fileName:u,lineNumber:29}},"Resize the window to see different blocks appearing responsively"),Object(r.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:u,lineNumber:30}}),"Usage"),Object(r.b)(s.c,{__position:0,__code:'<LayoutProvider>\n  <Visible large xlarge>\n    <Box backgroundColor="#67c6bb" height={48}>\n      <Text align="center" color="white">\n        Large and greater\n      </Text>\n    </Box>\n  </Visible>\n  <Visible medium>\n    <Box backgroundColor="#1ca5F7" height={48}>\n      <Text align="center" color="white">\n        Medium\n      </Text>\n    </Box>\n  </Visible>\n  <Visible xsmall small>\n    <Box backgroundColor="#d26557" height={48}>\n      <Text align="center" color="white">\n        Small and lower\n      </Text>\n    </Box>\n  </Visible>\n</LayoutProvider>',__scope:{props:this?this.props:i,Playground:s.c,Props:s.d,Box:a.a,Visible:c.a,LayoutProvider:l.a,Text:b.a},mdxType:"Playground",__source:{fileName:u,lineNumber:33}},Object(r.b)(l.a,{mdxType:"LayoutProvider",__source:{fileName:u,lineNumber:42}},Object(r.b)(c.a,{large:!0,xlarge:!0,mdxType:"Visible",__source:{fileName:u,lineNumber:43}},Object(r.b)(a.a,{backgroundColor:"#67c6bb",height:48,mdxType:"Box",__source:{fileName:u,lineNumber:44}},Object(r.b)(b.a,{align:"center",color:"white",mdxType:"Text",__source:{fileName:u,lineNumber:45}},"Large and greater"))),Object(r.b)(c.a,{medium:!0,mdxType:"Visible",__source:{fileName:u,lineNumber:50}},Object(r.b)(a.a,{backgroundColor:"#1ca5F7",height:48,mdxType:"Box",__source:{fileName:u,lineNumber:51}},Object(r.b)(b.a,{align:"center",color:"white",mdxType:"Text",__source:{fileName:u,lineNumber:52}},"Medium"))),Object(r.b)(c.a,{xsmall:!0,small:!0,mdxType:"Visible",__source:{fileName:u,lineNumber:57}},Object(r.b)(a.a,{backgroundColor:"#d26557",height:48,mdxType:"Box",__source:{fileName:u,lineNumber:58}},Object(r.b)(b.a,{align:"center",color:"white",mdxType:"Text",__source:{fileName:u,lineNumber:59}},"Small and lower"))))),Object(r.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:u,lineNumber:66}}),"Props"),Object(r.b)(s.d,{of:c.a,mdxType:"Props",__source:{fileName:u,lineNumber:69}}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Layout/Visible.mdx"}}),d.isMDXComponent=!0},"./src/components/Layout/Visible.tsx":function(e,n,i){"use strict";i.d(n,"a",function(){return s});var t=i("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=i("./node_modules/react/index.js"),r=i("./src/components/Layout/LayoutContext.tsx");"undefined"!==typeof VisibleConfig&&VisibleConfig&&VisibleConfig===Object(VisibleConfig)&&Object.isExtensible(VisibleConfig)&&Object.defineProperty(VisibleConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VisibleConfig",filename:"src/components/Layout/Visible.tsx"}}),"undefined"!==typeof VisibleProps&&VisibleProps&&VisibleProps===Object(VisibleProps)&&Object.isExtensible(VisibleProps)&&Object.defineProperty(VisibleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VisibleProps",filename:"src/components/Layout/Visible.tsx"}});var s=function(e){var n=e.children;return function(e,n){var i=function(e){return[e.xsmall,e.small,e.medium,e.large,e.xlarge]}(e),t=r.a.indexOf(n);return!!i.find(function(e,n){return n===t&&!!e})}(Object(t.a)(e,["children"]),Object(r.e)().currentScreenSize)?o.createElement(o.Fragment,null,n):o.createElement(o.Fragment,null)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Visible",filename:"src/components/Layout/Visible.tsx"}})}}]);
//# sourceMappingURL=29.4c284e002fba279a1c41.js.map