(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/View/index.js"),i=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var l={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},c=function(e){var t=e.children,n=e.testID,c=Object(o.a)(e,["children","testID"]),u=Object(i.a)(),m=[],s={};for(var p in c)if(p){var b=l[p];if(b){var d=b(c[p],u);m.push(d)}else s[p]=c[p]}return r.createElement(a.a,{testID:n,style:[s,m],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Button/Button.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),i=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/components/Box/Box.tsx"),c=n("./src/components/Button/Button.tsx"),u="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.mdx",m={},s="wrapper";function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)(s,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout",__source:{fileName:u,lineNumber:21}}),Object(a.b)("h1",Object(r.a)({id:"button"},{__source:{fileName:u,lineNumber:23}}),"Button"),Object(a.b)("p",{__source:{fileName:u,lineNumber:26}},"Button component to trigger an action"),Object(a.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:u,lineNumber:27}}),"Usage"),Object(a.b)(i.c,{__position:0,__code:'<Box flexDirection="row">\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="default" title="Default" />\n    <Button color="default" appearance="outline" title="Default" />\n    <Button color="default" appearance="minimal" title="Default" />\n    <Button color="default" appearance="primary" title="Default" isLoading />\n  </Box>\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="primary" title="Primary" />\n    <Button color="primary" appearance="outline" title="Primary" />\n    <Button color="primary" appearance="minimal" title="Primary" />\n    <Button color="primary" appearance="primary" title="Primary" isLoading />\n  </Box>\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="secondary" title="Secondary" />\n    <Button color="secondary" appearance="outline" title="Secondary" />\n    <Button color="secondary" appearance="minimal" title="Secondary" />\n    <Button\n      color="secondary"\n      appearance="primary"\n      title="Secondary"\n      isLoading\n    />\n  </Box>\n  <Box paddingRight={16} height={240} justifyContent="space-between">\n    <Button color="danger" title="Danger" />\n    <Button color="danger" appearance="outline" title="Danger" />\n    <Button color="danger" appearance="minimal" title="Danger" />\n    <Button color="danger" appearance="primary" title="Danger" isLoading />\n  </Box>\n</Box>',__scope:{props:this?this.props:n,Playground:i.c,Props:i.d,Box:l.a,Button:c.a},mdxType:"Playground",__source:{fileName:u,lineNumber:30}},Object(a.b)(l.a,{flexDirection:"row",mdxType:"Box",__source:{fileName:u,lineNumber:37}},Object(a.b)(l.a,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box",__source:{fileName:u,lineNumber:38}},Object(a.b)(c.a,{color:"default",title:"Default",mdxType:"Button",__source:{fileName:u,lineNumber:39}}),Object(a.b)(c.a,{color:"default",appearance:"outline",title:"Default",mdxType:"Button",__source:{fileName:u,lineNumber:40}}),Object(a.b)(c.a,{color:"default",appearance:"minimal",title:"Default",mdxType:"Button",__source:{fileName:u,lineNumber:41}}),Object(a.b)(c.a,{color:"default",appearance:"primary",title:"Default",isLoading:!0,mdxType:"Button",__source:{fileName:u,lineNumber:42}})),Object(a.b)(l.a,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box",__source:{fileName:u,lineNumber:44}},Object(a.b)(c.a,{color:"primary",title:"Primary",mdxType:"Button",__source:{fileName:u,lineNumber:45}}),Object(a.b)(c.a,{color:"primary",appearance:"outline",title:"Primary",mdxType:"Button",__source:{fileName:u,lineNumber:46}}),Object(a.b)(c.a,{color:"primary",appearance:"minimal",title:"Primary",mdxType:"Button",__source:{fileName:u,lineNumber:47}}),Object(a.b)(c.a,{color:"primary",appearance:"primary",title:"Primary",isLoading:!0,mdxType:"Button",__source:{fileName:u,lineNumber:48}})),Object(a.b)(l.a,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box",__source:{fileName:u,lineNumber:50}},Object(a.b)(c.a,{color:"secondary",title:"Secondary",mdxType:"Button",__source:{fileName:u,lineNumber:51}}),Object(a.b)(c.a,{color:"secondary",appearance:"outline",title:"Secondary",mdxType:"Button",__source:{fileName:u,lineNumber:52}}),Object(a.b)(c.a,{color:"secondary",appearance:"minimal",title:"Secondary",mdxType:"Button",__source:{fileName:u,lineNumber:53}}),Object(a.b)(c.a,{color:"secondary",appearance:"primary",title:"Secondary",isLoading:!0,mdxType:"Button",__source:{fileName:u,lineNumber:54}})),Object(a.b)(l.a,{paddingRight:16,height:240,justifyContent:"space-between",mdxType:"Box",__source:{fileName:u,lineNumber:56}},Object(a.b)(c.a,{color:"danger",title:"Danger",mdxType:"Button",__source:{fileName:u,lineNumber:57}}),Object(a.b)(c.a,{color:"danger",appearance:"outline",title:"Danger",mdxType:"Button",__source:{fileName:u,lineNumber:58}}),Object(a.b)(c.a,{color:"danger",appearance:"minimal",title:"Danger",mdxType:"Button",__source:{fileName:u,lineNumber:59}}),Object(a.b)(c.a,{color:"danger",appearance:"primary",title:"Danger",isLoading:!0,mdxType:"Button",__source:{fileName:u,lineNumber:60}})))),Object(a.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:u,lineNumber:64}}),"Props"),Object(a.b)(i.d,{of:c.a,mdxType:"Props",__source:{fileName:u,lineNumber:67}}),Object(a.b)("h2",Object(r.a)({id:"customization"},{__source:{fileName:u,lineNumber:68}}),"Customization"),Object(a.b)("p",{__source:{fileName:u,lineNumber:71}},"Using ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:71}},"getStyles")," prop"),Object(a.b)("pre",{__source:{fileName:u,lineNumber:72}},Object(a.b)("code",Object(r.a)({parentName:"pre"},{},{__source:{fileName:u,lineNumber:72}}),"ButtonStyles {\n  touchableStyle: ViewStyle;\n  textStyle: TextStyle;\n  innerButtonWrapperStyle: ViewStyle;\n  buttonContentWrapperStyle: ViewStyle;\n}\n\ngetStyles={(ButtonProps, Theme) => ButtonStyles}\n")),Object(a.b)("p",{__source:{fileName:u,lineNumber:81}},"Markup"),Object(a.b)("pre",{__source:{fileName:u,lineNumber:82}},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:u,lineNumber:82}}),"<TouchableOpacity touchableStyle>\n  <View innerButtonWrapperStyle>\n    {iconBefore}\n    <View buttonContentWrapperStyle>\n      <Text textStyle />\n    </View>\n    {iconAfter}\n  </View>\n</TouchableOpacity>\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Button/Button.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=35.2b9c765f523754ce3d8b.js.map