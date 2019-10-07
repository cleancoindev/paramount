(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/components/Box/Box.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/View/index.js"),a=o("./src/theme/Theme.tsx"),c=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=o("./node_modules/dlv/dist/dlv.umd.js"),l=o.n(s),m=o("./src/utils/overrides.ts");"undefined"!==typeof SpacingProps&&SpacingProps&&SpacingProps===Object(SpacingProps)&&Object.isExtensible(SpacingProps)&&Object.defineProperty(SpacingProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingProps",filename:"src/components/Spacing/Spacing.tsx"}}),"undefined"!==typeof SpacingOverride&&SpacingOverride&&SpacingOverride===Object(SpacingOverride)&&Object.isExtensible(SpacingOverride)&&Object.defineProperty(SpacingOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SpacingOverride",filename:"src/components/Spacing/Spacing.tsx"}});var u=function(e,t){return"number"===typeof e?e:t.spacing[e]};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSpacing",filename:"src/components/Spacing/Spacing.tsx"}});var b=function(e){var t=e.size,o=void 0===t?"medium":t,s=e.orientation,b=void 0===s?"vertical":s,p=e.style,d=Object(r.a)(e,["size","orientation","style"]),x=Object(a.b)();return n.createElement(i.a,Object(c.a)({style:["vertical"===b?{height:u(o,x)}:{width:u(o,x)},Object(m.b)(e,p),Object(m.b)(e,l()(x,"overrides.Spacing.style"))]},d,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Spacing/Spacing.tsx",lineNumber:44}}))};b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Spacing",filename:"src/components/Spacing/Spacing.tsx"}}),o.d(t,"a",function(){return d});"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var p={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]},space:function(e,t){return{padding:u(e,t)}},spaceBottom:function(e,t){return{paddingBottom:u(e,t)}},spaceEnd:function(e,t){return{paddingEnd:u(e,t)}},spaceHorizontal:function(e,t){return{paddingHorizontal:u(e,t)}},spaceLeft:function(e,t){return{paddingLeft:u(e,t)}},spaceRight:function(e,t){return{paddingRight:u(e,t)}},spaceStart:function(e,t){return{paddingStart:u(e,t)}},spaceTop:function(e,t){return{paddingTop:u(e,t)}},spaceVertical:function(e,t){return{paddingVertical:u(e,t)}}},d=function(e){var t=e.children,o=e.testID,c=Object(r.a)(e,["children","testID"]),s=Object(a.b)(),l=[],m={};for(var u in c)if(u){var b=p[u];if(b){var d=b(c[u],s);l.push(d)}else m[u]=c[u]}return n.createElement(i.a,{testID:o,style:[m,l],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:106}},t)};"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Typography/Text.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return b});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),c=o("./src/components/Box/Box.tsx"),s=o("./src/components/Typography/Text.tsx"),l="/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.mdx",m={},u="wrapper";function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(n.a)({},m,o,{components:t,mdxType:"MDXLayout",__source:{fileName:l,lineNumber:21}}),Object(i.b)("h1",Object(n.a)({id:"text"},{__source:{fileName:l,lineNumber:24}}),"Text"),Object(i.b)("p",{__source:{fileName:l,lineNumber:27}},"Composes React Native's ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"Text")),Object(i.b)("h2",Object(n.a)({id:"usage"},{__source:{fileName:l,lineNumber:28}}),"Usage"),Object(i.b)(a.c,{__position:0,__code:'<Box flexDirection="column">\n  <Text size="xsmall">xsmall</Text>\n  <Text size="small">small</Text>\n  <Text size="medium">medium</Text>\n  <Text size="large">large</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:l,lineNumber:31}},Object(i.b)(c.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:l,lineNumber:38}},Object(i.b)(s.a,{size:"xsmall",mdxType:"Text",__source:{fileName:l,lineNumber:39}},"xsmall"),Object(i.b)(s.a,{size:"small",mdxType:"Text",__source:{fileName:l,lineNumber:40}},"small"),Object(i.b)(s.a,{size:"medium",mdxType:"Text",__source:{fileName:l,lineNumber:41}},"medium"),Object(i.b)(s.a,{size:"large",mdxType:"Text",__source:{fileName:l,lineNumber:42}},"large"))),Object(i.b)("h3",Object(n.a)({id:"colors"},{__source:{fileName:l,lineNumber:45}}),"Colors"),Object(i.b)(a.c,{__position:1,__code:'<Box flexDirection="column">\n  <Text color="#16a054">#16a054</Text>\n  <Text color="default">default</Text>\n  <Text color="muted">muted</Text>\n  <Text color="link">link</Text>\n  <Text color="white">white</Text>\n  <Text color="selected">selected</Text>\n  <Text color="primary">primary</Text>\n  <Text color="secondary">secondary</Text>\n  <Text color="danger">danger</Text>\n  <Text color="info">info</Text>\n  <Text color="success">success</Text>\n  <Text color="warning">warning</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:l,lineNumber:48}},Object(i.b)(c.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:l,lineNumber:55}},Object(i.b)(s.a,{color:"#16a054",mdxType:"Text",__source:{fileName:l,lineNumber:56}},"#16a054"),Object(i.b)(s.a,{color:"default",mdxType:"Text",__source:{fileName:l,lineNumber:57}},"default"),Object(i.b)(s.a,{color:"muted",mdxType:"Text",__source:{fileName:l,lineNumber:58}},"muted"),Object(i.b)(s.a,{color:"link",mdxType:"Text",__source:{fileName:l,lineNumber:59}},"link"),Object(i.b)(s.a,{color:"white",mdxType:"Text",__source:{fileName:l,lineNumber:60}},"white"),Object(i.b)(s.a,{color:"selected",mdxType:"Text",__source:{fileName:l,lineNumber:61}},"selected"),Object(i.b)(s.a,{color:"primary",mdxType:"Text",__source:{fileName:l,lineNumber:62}},"primary"),Object(i.b)(s.a,{color:"secondary",mdxType:"Text",__source:{fileName:l,lineNumber:63}},"secondary"),Object(i.b)(s.a,{color:"danger",mdxType:"Text",__source:{fileName:l,lineNumber:64}},"danger"),Object(i.b)(s.a,{color:"info",mdxType:"Text",__source:{fileName:l,lineNumber:65}},"info"),Object(i.b)(s.a,{color:"success",mdxType:"Text",__source:{fileName:l,lineNumber:66}},"success"),Object(i.b)(s.a,{color:"warning",mdxType:"Text",__source:{fileName:l,lineNumber:67}},"warning"))),Object(i.b)("h3",Object(n.a)({id:"font-weights"},{__source:{fileName:l,lineNumber:70}}),"Font Weights"),Object(i.b)(a.c,{__position:2,__code:'<Box flexDirection="column">\n  <Text weight="500">500</Text>\n  <Text weight="700">700</Text>\n  <Text weight="bold">bold</Text>\n  <Text weight="normal">normal</Text>\n  <Text weight="light">light</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:l,lineNumber:73}},Object(i.b)(c.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:l,lineNumber:80}},Object(i.b)(s.a,{weight:"500",mdxType:"Text",__source:{fileName:l,lineNumber:81}},"500"),Object(i.b)(s.a,{weight:"700",mdxType:"Text",__source:{fileName:l,lineNumber:82}},"700"),Object(i.b)(s.a,{weight:"bold",mdxType:"Text",__source:{fileName:l,lineNumber:83}},"bold"),Object(i.b)(s.a,{weight:"normal",mdxType:"Text",__source:{fileName:l,lineNumber:84}},"normal"),Object(i.b)(s.a,{weight:"light",mdxType:"Text",__source:{fileName:l,lineNumber:85}},"light"))),Object(i.b)("h3",Object(n.a)({id:"alignments"},{__source:{fileName:l,lineNumber:88}}),"Alignments"),Object(i.b)(a.c,{__position:3,__code:'<Box flexDirection="column">\n  <Text align="left">Lorem ipsum dolar set amet</Text>\n  <Text align="center">Lorem ipsum dolar set amet</Text>\n  <Text align="right">Lorem ipsum dolar set amet</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:l,lineNumber:91}},Object(i.b)(c.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:l,lineNumber:98}},Object(i.b)(s.a,{align:"left",mdxType:"Text",__source:{fileName:l,lineNumber:99}},"Lorem ipsum dolar set amet"),Object(i.b)(s.a,{align:"center",mdxType:"Text",__source:{fileName:l,lineNumber:100}},"Lorem ipsum dolar set amet"),Object(i.b)(s.a,{align:"right",mdxType:"Text",__source:{fileName:l,lineNumber:101}},"Lorem ipsum dolar set amet"))),Object(i.b)("h3",Object(n.a)({id:"transforms"},{__source:{fileName:l,lineNumber:104}}),"Transforms"),Object(i.b)(a.c,{__position:4,__code:'<Box flexDirection="column">\n  <Text transform="uppercase">Lorem ipsum dolar set amet</Text>\n  <Text transform="lowercase">Lorem ipsum dolar set amet</Text>\n  <Text transform="capitalize">Lorem ipsum dolar set amet</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:l,lineNumber:107}},Object(i.b)(c.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:l,lineNumber:114}},Object(i.b)(s.a,{transform:"uppercase",mdxType:"Text",__source:{fileName:l,lineNumber:115}},"Lorem ipsum dolar set amet"),Object(i.b)(s.a,{transform:"lowercase",mdxType:"Text",__source:{fileName:l,lineNumber:116}},"Lorem ipsum dolar set amet"),Object(i.b)(s.a,{transform:"capitalize",mdxType:"Text",__source:{fileName:l,lineNumber:117}},"Lorem ipsum dolar set amet"))),Object(i.b)("h3",Object(n.a)({id:"italic"},{__source:{fileName:l,lineNumber:120}}),"Italic"),Object(i.b)(a.c,{__position:5,__code:'<Box flexDirection="column">\n  <Text isItalic>Lorem ipsum dolar set amet</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:a.c,Props:a.d,Box:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:l,lineNumber:123}},Object(i.b)(c.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:l,lineNumber:130}},Object(i.b)(s.a,{isItalic:!0,mdxType:"Text",__source:{fileName:l,lineNumber:131}},"Lorem ipsum dolar set amet"))),Object(i.b)("h2",Object(n.a)({id:"props"},{__source:{fileName:l,lineNumber:134}}),"Props"),Object(i.b)(a.d,{of:s.a,mdxType:"Props",__source:{fileName:l,lineNumber:137}}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Text.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=37.fb2ef275bf02d8cd1666.js.map