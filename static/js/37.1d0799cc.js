(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./src/components/Box/Box.tsx":function(e,o,t){"use strict";t.d(o,"a",function(){return n});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/react/index.js"),l=t("./node_modules/react-native-web/dist/exports/View/index.js"),m=t("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={backgroundColor:function(e,o){return o.colors.background[e]?{backgroundColor:o.colors.background[e]}:{backgroundColor:e}},elevation:function(e,o){return o.elevations[e]},shape:function(e,o){return o.containerShapes[e]}},n=function(e){var o=e.children,t=e.testID,n=Object(r.a)(e,["children","testID"]),s=Object(m.b)(),c=[],u={};for(var x in n)if(x){var b=a[x];if(b){var p=b(n[x],s);c.push(p)}else u[x]=n[x]}return i.createElement(l.a,{testID:t,style:[u,c],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},o)};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Typography/Text.mdx":function(e,o,t){"use strict";t.r(o),t.d(o,"default",function(){return x});var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),m=t("./node_modules/docz/dist/index.esm.js"),a=t("./src/components/Box/Box.tsx"),n=t("./src/components/Typography/Text.tsx"),s="/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.mdx",c={},u="wrapper";function x(e){var o=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)(u,Object(i.a)({},c,t,{components:o,mdxType:"MDXLayout",__source:{fileName:s,lineNumber:21}}),Object(l.b)("h1",Object(i.a)({id:"text"},{__source:{fileName:s,lineNumber:24}}),"Text"),Object(l.b)("p",{__source:{fileName:s,lineNumber:27}},"Composes React Native's ",Object(l.b)("inlineCode",{parentName:"p",__source:{fileName:s,lineNumber:27}},"Text")),Object(l.b)("h2",Object(i.a)({id:"usage"},{__source:{fileName:s,lineNumber:28}}),"Usage"),Object(l.b)(m.c,{__position:0,__code:'<Box flexDirection="column">\n  <Text size="xsmall">xsmall</Text>\n  <Text size="small">small</Text>\n  <Text size="medium">medium</Text>\n  <Text size="large">large</Text>\n</Box>',__scope:{props:this?this.props:t,Playground:m.c,Props:m.d,Box:a.a,Text:n.a},mdxType:"Playground",__source:{fileName:s,lineNumber:31}},Object(l.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:s,lineNumber:38}},Object(l.b)(n.a,{size:"xsmall",mdxType:"Text",__source:{fileName:s,lineNumber:39}},"xsmall"),Object(l.b)(n.a,{size:"small",mdxType:"Text",__source:{fileName:s,lineNumber:40}},"small"),Object(l.b)(n.a,{size:"medium",mdxType:"Text",__source:{fileName:s,lineNumber:41}},"medium"),Object(l.b)(n.a,{size:"large",mdxType:"Text",__source:{fileName:s,lineNumber:42}},"large"))),Object(l.b)("h3",Object(i.a)({id:"colors"},{__source:{fileName:s,lineNumber:45}}),"Colors"),Object(l.b)(m.c,{__position:1,__code:'<Box flexDirection="column">\n  <Text color="#16a054">#16a054</Text>\n  <Text color="default">default</Text>\n  <Text color="muted">muted</Text>\n  <Text color="link">link</Text>\n  <Text color="white">white</Text>\n  <Text color="selected">selected</Text>\n  <Text color="primary">primary</Text>\n  <Text color="secondary">secondary</Text>\n  <Text color="danger">danger</Text>\n  <Text color="info">info</Text>\n  <Text color="success">success</Text>\n  <Text color="warning">warning</Text>\n</Box>',__scope:{props:this?this.props:t,Playground:m.c,Props:m.d,Box:a.a,Text:n.a},mdxType:"Playground",__source:{fileName:s,lineNumber:48}},Object(l.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:s,lineNumber:55}},Object(l.b)(n.a,{color:"#16a054",mdxType:"Text",__source:{fileName:s,lineNumber:56}},"#16a054"),Object(l.b)(n.a,{color:"default",mdxType:"Text",__source:{fileName:s,lineNumber:57}},"default"),Object(l.b)(n.a,{color:"muted",mdxType:"Text",__source:{fileName:s,lineNumber:58}},"muted"),Object(l.b)(n.a,{color:"link",mdxType:"Text",__source:{fileName:s,lineNumber:59}},"link"),Object(l.b)(n.a,{color:"white",mdxType:"Text",__source:{fileName:s,lineNumber:60}},"white"),Object(l.b)(n.a,{color:"selected",mdxType:"Text",__source:{fileName:s,lineNumber:61}},"selected"),Object(l.b)(n.a,{color:"primary",mdxType:"Text",__source:{fileName:s,lineNumber:62}},"primary"),Object(l.b)(n.a,{color:"secondary",mdxType:"Text",__source:{fileName:s,lineNumber:63}},"secondary"),Object(l.b)(n.a,{color:"danger",mdxType:"Text",__source:{fileName:s,lineNumber:64}},"danger"),Object(l.b)(n.a,{color:"info",mdxType:"Text",__source:{fileName:s,lineNumber:65}},"info"),Object(l.b)(n.a,{color:"success",mdxType:"Text",__source:{fileName:s,lineNumber:66}},"success"),Object(l.b)(n.a,{color:"warning",mdxType:"Text",__source:{fileName:s,lineNumber:67}},"warning"))),Object(l.b)("h3",Object(i.a)({id:"font-weights"},{__source:{fileName:s,lineNumber:70}}),"Font Weights"),Object(l.b)(m.c,{__position:2,__code:'<Box flexDirection="column">\n  <Text weight="500">500</Text>\n  <Text weight="700">700</Text>\n  <Text weight="bold">bold</Text>\n  <Text weight="normal">normal</Text>\n  <Text weight="light">light</Text>\n</Box>',__scope:{props:this?this.props:t,Playground:m.c,Props:m.d,Box:a.a,Text:n.a},mdxType:"Playground",__source:{fileName:s,lineNumber:73}},Object(l.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:s,lineNumber:80}},Object(l.b)(n.a,{weight:"500",mdxType:"Text",__source:{fileName:s,lineNumber:81}},"500"),Object(l.b)(n.a,{weight:"700",mdxType:"Text",__source:{fileName:s,lineNumber:82}},"700"),Object(l.b)(n.a,{weight:"bold",mdxType:"Text",__source:{fileName:s,lineNumber:83}},"bold"),Object(l.b)(n.a,{weight:"normal",mdxType:"Text",__source:{fileName:s,lineNumber:84}},"normal"),Object(l.b)(n.a,{weight:"light",mdxType:"Text",__source:{fileName:s,lineNumber:85}},"light"))),Object(l.b)("h3",Object(i.a)({id:"alignments"},{__source:{fileName:s,lineNumber:88}}),"Alignments"),Object(l.b)(m.c,{__position:3,__code:'<Box flexDirection="column">\n  <Text align="left">Lorem ipsum dolar set amet</Text>\n  <Text align="center">Lorem ipsum dolar set amet</Text>\n  <Text align="right">Lorem ipsum dolar set amet</Text>\n</Box>',__scope:{props:this?this.props:t,Playground:m.c,Props:m.d,Box:a.a,Text:n.a},mdxType:"Playground",__source:{fileName:s,lineNumber:91}},Object(l.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:s,lineNumber:98}},Object(l.b)(n.a,{align:"left",mdxType:"Text",__source:{fileName:s,lineNumber:99}},"Lorem ipsum dolar set amet"),Object(l.b)(n.a,{align:"center",mdxType:"Text",__source:{fileName:s,lineNumber:100}},"Lorem ipsum dolar set amet"),Object(l.b)(n.a,{align:"right",mdxType:"Text",__source:{fileName:s,lineNumber:101}},"Lorem ipsum dolar set amet"))),Object(l.b)("h3",Object(i.a)({id:"transforms"},{__source:{fileName:s,lineNumber:104}}),"Transforms"),Object(l.b)(m.c,{__position:4,__code:'<Box flexDirection="column">\n  <Text transform="uppercase">Lorem ipsum dolar set amet</Text>\n  <Text transform="lowercase">Lorem ipsum dolar set amet</Text>\n  <Text transform="capitalize">Lorem ipsum dolar set amet</Text>\n</Box>',__scope:{props:this?this.props:t,Playground:m.c,Props:m.d,Box:a.a,Text:n.a},mdxType:"Playground",__source:{fileName:s,lineNumber:107}},Object(l.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:s,lineNumber:114}},Object(l.b)(n.a,{transform:"uppercase",mdxType:"Text",__source:{fileName:s,lineNumber:115}},"Lorem ipsum dolar set amet"),Object(l.b)(n.a,{transform:"lowercase",mdxType:"Text",__source:{fileName:s,lineNumber:116}},"Lorem ipsum dolar set amet"),Object(l.b)(n.a,{transform:"capitalize",mdxType:"Text",__source:{fileName:s,lineNumber:117}},"Lorem ipsum dolar set amet"))),Object(l.b)("h3",Object(i.a)({id:"italic"},{__source:{fileName:s,lineNumber:120}}),"Italic"),Object(l.b)(m.c,{__position:5,__code:'<Box flexDirection="column">\n  <Text isItalic>Lorem ipsum dolar set amet</Text>\n</Box>',__scope:{props:this?this.props:t,Playground:m.c,Props:m.d,Box:a.a,Text:n.a},mdxType:"Playground",__source:{fileName:s,lineNumber:123}},Object(l.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:s,lineNumber:130}},Object(l.b)(n.a,{isItalic:!0,mdxType:"Text",__source:{fileName:s,lineNumber:131}},"Lorem ipsum dolar set amet"))),Object(l.b)("h2",Object(i.a)({id:"props"},{__source:{fileName:s,lineNumber:134}}),"Props"),Object(l.b)(m.d,{of:n.a,mdxType:"Props",__source:{fileName:s,lineNumber:137}}))}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Text.mdx"}}),x.isMDXComponent=!0}}]);
//# sourceMappingURL=37.b191fb7b5e305d4e6ce0.js.map