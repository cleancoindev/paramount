(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./src/components/Box/Box.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return s});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/View/index.js"),n=o("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},s=function(e){var t=e.children,o=e.testID,s=Object(r.a)(e,["children","testID"]),m=Object(n.a)(),c=[],u={};for(var b in s)if(b){var d=a[b];if(d){var f=d(s[b],m);c.push(f)}else u[b]=s[b]}return l.createElement(i.a,{testID:o,style:[u,c],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Typography/Text.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return b});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),n=o("./node_modules/docz/dist/index.esm.js"),a=o("./src/components/Box/Box.tsx"),s=o("./src/components/Typography/Text.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.mdx",c={},u="wrapper";function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)(u,Object(l.a)({},c,o,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(i.b)("h1",Object(l.a)({id:"text"},{__source:{fileName:m,lineNumber:24}}),"Text"),Object(i.b)("p",{__source:{fileName:m,lineNumber:27}},"Composes React Native's ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:27}},"Text")),Object(i.b)("h2",Object(l.a)({id:"usage"},{__source:{fileName:m,lineNumber:28}}),"Usage"),Object(i.b)(n.c,{__position:0,__code:'<Box flexDirection="column">\n  <Text size="xsmall">xsmall</Text>\n  <Text size="small">small</Text>\n  <Text size="medium">medium</Text>\n  <Text size="large">large</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Box:a.a,Text:s.a},mdxType:"Playground",__source:{fileName:m,lineNumber:31}},Object(i.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:m,lineNumber:38}},Object(i.b)(s.a,{size:"xsmall",mdxType:"Text",__source:{fileName:m,lineNumber:39}},"xsmall"),Object(i.b)(s.a,{size:"small",mdxType:"Text",__source:{fileName:m,lineNumber:40}},"small"),Object(i.b)(s.a,{size:"medium",mdxType:"Text",__source:{fileName:m,lineNumber:41}},"medium"),Object(i.b)(s.a,{size:"large",mdxType:"Text",__source:{fileName:m,lineNumber:42}},"large"))),Object(i.b)("h3",Object(l.a)({id:"colors"},{__source:{fileName:m,lineNumber:45}}),"Colors"),Object(i.b)(n.c,{__position:1,__code:'<Box flexDirection="column">\n  <Text color="#16a054">#16a054</Text>\n  <Text color="default">default</Text>\n  <Text color="muted">muted</Text>\n  <Text color="link">link</Text>\n  <Text color="white">white</Text>\n  <Text color="selected">selected</Text>\n  <Text color="primary">primary</Text>\n  <Text color="secondary">secondary</Text>\n  <Text color="danger">danger</Text>\n  <Text color="info">info</Text>\n  <Text color="success">success</Text>\n  <Text color="warning">warning</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Box:a.a,Text:s.a},mdxType:"Playground",__source:{fileName:m,lineNumber:48}},Object(i.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:m,lineNumber:55}},Object(i.b)(s.a,{color:"#16a054",mdxType:"Text",__source:{fileName:m,lineNumber:56}},"#16a054"),Object(i.b)(s.a,{color:"default",mdxType:"Text",__source:{fileName:m,lineNumber:57}},"default"),Object(i.b)(s.a,{color:"muted",mdxType:"Text",__source:{fileName:m,lineNumber:58}},"muted"),Object(i.b)(s.a,{color:"link",mdxType:"Text",__source:{fileName:m,lineNumber:59}},"link"),Object(i.b)(s.a,{color:"white",mdxType:"Text",__source:{fileName:m,lineNumber:60}},"white"),Object(i.b)(s.a,{color:"selected",mdxType:"Text",__source:{fileName:m,lineNumber:61}},"selected"),Object(i.b)(s.a,{color:"primary",mdxType:"Text",__source:{fileName:m,lineNumber:62}},"primary"),Object(i.b)(s.a,{color:"secondary",mdxType:"Text",__source:{fileName:m,lineNumber:63}},"secondary"),Object(i.b)(s.a,{color:"danger",mdxType:"Text",__source:{fileName:m,lineNumber:64}},"danger"),Object(i.b)(s.a,{color:"info",mdxType:"Text",__source:{fileName:m,lineNumber:65}},"info"),Object(i.b)(s.a,{color:"success",mdxType:"Text",__source:{fileName:m,lineNumber:66}},"success"),Object(i.b)(s.a,{color:"warning",mdxType:"Text",__source:{fileName:m,lineNumber:67}},"warning"))),Object(i.b)("h3",Object(l.a)({id:"font-weights"},{__source:{fileName:m,lineNumber:70}}),"Font Weights"),Object(i.b)(n.c,{__position:2,__code:'<Box flexDirection="column">\n  <Text weight="500">500</Text>\n  <Text weight="700">700</Text>\n  <Text weight="bold">bold</Text>\n  <Text weight="normal">normal</Text>\n  <Text weight="light">light</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Box:a.a,Text:s.a},mdxType:"Playground",__source:{fileName:m,lineNumber:73}},Object(i.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:m,lineNumber:80}},Object(i.b)(s.a,{weight:"500",mdxType:"Text",__source:{fileName:m,lineNumber:81}},"500"),Object(i.b)(s.a,{weight:"700",mdxType:"Text",__source:{fileName:m,lineNumber:82}},"700"),Object(i.b)(s.a,{weight:"bold",mdxType:"Text",__source:{fileName:m,lineNumber:83}},"bold"),Object(i.b)(s.a,{weight:"normal",mdxType:"Text",__source:{fileName:m,lineNumber:84}},"normal"),Object(i.b)(s.a,{weight:"light",mdxType:"Text",__source:{fileName:m,lineNumber:85}},"light"))),Object(i.b)("h3",Object(l.a)({id:"alignments"},{__source:{fileName:m,lineNumber:88}}),"Alignments"),Object(i.b)(n.c,{__position:3,__code:'<Box flexDirection="column">\n  <Text align="left">Lorem ipsum dolar set amet</Text>\n  <Text align="center">Lorem ipsum dolar set amet</Text>\n  <Text align="right">Lorem ipsum dolar set amet</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Box:a.a,Text:s.a},mdxType:"Playground",__source:{fileName:m,lineNumber:91}},Object(i.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:m,lineNumber:98}},Object(i.b)(s.a,{align:"left",mdxType:"Text",__source:{fileName:m,lineNumber:99}},"Lorem ipsum dolar set amet"),Object(i.b)(s.a,{align:"center",mdxType:"Text",__source:{fileName:m,lineNumber:100}},"Lorem ipsum dolar set amet"),Object(i.b)(s.a,{align:"right",mdxType:"Text",__source:{fileName:m,lineNumber:101}},"Lorem ipsum dolar set amet"))),Object(i.b)("h3",Object(l.a)({id:"transforms"},{__source:{fileName:m,lineNumber:104}}),"Transforms"),Object(i.b)(n.c,{__position:4,__code:'<Box flexDirection="column">\n  <Text transform="uppercase">Lorem ipsum dolar set amet</Text>\n  <Text transform="lowercase">Lorem ipsum dolar set amet</Text>\n  <Text transform="capitalize">Lorem ipsum dolar set amet</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Box:a.a,Text:s.a},mdxType:"Playground",__source:{fileName:m,lineNumber:107}},Object(i.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:m,lineNumber:114}},Object(i.b)(s.a,{transform:"uppercase",mdxType:"Text",__source:{fileName:m,lineNumber:115}},"Lorem ipsum dolar set amet"),Object(i.b)(s.a,{transform:"lowercase",mdxType:"Text",__source:{fileName:m,lineNumber:116}},"Lorem ipsum dolar set amet"),Object(i.b)(s.a,{transform:"capitalize",mdxType:"Text",__source:{fileName:m,lineNumber:117}},"Lorem ipsum dolar set amet"))),Object(i.b)("h3",Object(l.a)({id:"italic"},{__source:{fileName:m,lineNumber:120}}),"Italic"),Object(i.b)(n.c,{__position:5,__code:'<Box flexDirection="column">\n  <Text isItalic>Lorem ipsum dolar set amet</Text>\n</Box>',__scope:{props:this?this.props:o,Playground:n.c,Props:n.d,Box:a.a,Text:s.a},mdxType:"Playground",__source:{fileName:m,lineNumber:123}},Object(i.b)(a.a,{flexDirection:"column",mdxType:"Box",__source:{fileName:m,lineNumber:130}},Object(i.b)(s.a,{isItalic:!0,mdxType:"Text",__source:{fileName:m,lineNumber:131}},"Lorem ipsum dolar set amet"))),Object(i.b)("h2",Object(l.a)({id:"props"},{__source:{fileName:m,lineNumber:134}}),"Props"),Object(i.b)(n.d,{of:s.a,mdxType:"Props",__source:{fileName:m,lineNumber:137}}),Object(i.b)("h2",Object(l.a)({id:"customization"},{__source:{fileName:m,lineNumber:138}}),"Customization"),Object(i.b)("p",{__source:{fileName:m,lineNumber:141}},"Using ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:141}},"getStyles")," prop"),Object(i.b)("pre",{__source:{fileName:m,lineNumber:142}},Object(i.b)("code",Object(l.a)({parentName:"pre"},{},{__source:{fileName:m,lineNumber:142}}),"TextStyles {\n  textStyle: TextStyle;\n}\n\ngetStyles={(TextProps, Theme) => TextStyles}\n")),Object(i.b)("p",{__source:{fileName:m,lineNumber:148}},"Markup"),Object(i.b)("pre",{__source:{fileName:m,lineNumber:149}},Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:m,lineNumber:149}}),"<Text textStyle />\n")))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Text.mdx"}}),b.isMDXComponent=!0},"./src/components/Typography/Text.styles.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return l}),o.d(t,"b",function(){return i}),o.d(t,"c",function(){return a});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||t}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var n=function(e){return function(t){return e[t]||{fontSize:t}}};n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e,t){var o=e.color,a=void 0===o?"default":o,s=e.size,m=void 0===s?"medium":s,c=e.align,u=void 0===c?"left":c,b=e.weight,d=e.isItalic,f=void 0!==d&&d,p=e.transform,x=n(t.textSizes)(m);return{textStyle:Object(r.a)({},x,{color:i(t.colors.text)(a),fontFamily:t.fontFamilies.text,fontWeight:l(t.fontWeights)(b)||x.fontWeight,textAlign:u},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return c});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=o("./node_modules/react/index.js"),n=o("./node_modules/react-native-web/dist/exports/Text/index.js"),a=o("./src/theme/Theme.tsx"),s=o("./src/utils/mergeStyles.ts"),m=o("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var c=function(e){var t=e.children,o=(e.color,e.size,e.align,e.weight,e.getStyles),c=(e.isItalic,e.transform,Object(l.a)(e,["children","color","size","align","weight","getStyles","isItalic","transform"])),u=Object(a.a)(),b=Object(s.a)(m.c,o,u.components.getTextStyles)(e,u).textStyle;return i.createElement(n.a,Object(r.a)({style:b},c,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:75}}),t)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,o){"use strict";var r=o("./node_modules/deepmerge/dist/umd.js"),l=o.n(r),i=o("./node_modules/react/index.js"),n=o.n(i),a=o("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},m={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},c={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},u={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var x={small:4,medium:4,large:4},h={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:u.lightest,secondaryDefault:u.base,secondaryDark:u.dark,dangerLight:c.lightest,dangerDefault:c.base,dangerDark:c.dark,infoLight:m.lightest,infoDefault:m.base,infoDark:m.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:u.lightest,warningDefault:u.base,warningDark:u.dark},border:{default:s.light,primary:f.darkest,secondary:u.darkest,danger:c.darkest,info:m.darkest,success:d.darkest,warning:u.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:u.base,secondaryText:"white",danger:c.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:u.darkest,danger:c.darkest,info:m.darkest,success:d.darkest,warning:u.darkest}},g=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],y={colors:h,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:m.base,color:"white"},red:{backgroundColor:c.base,color:"white"},orange:{backgroundColor:u.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:m.light,color:m.darkest},red:{backgroundColor:c.light,color:c.darkest},orange:{backgroundColor:u.light,color:u.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===a.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:g,controlBorderRadius:x,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:x.medium},roundedBottom:{borderBottomLeftRadius:x.medium,borderBottomRightRadius:x.medium},roundedLeft:{borderBottomLeftRadius:x.medium,borderTopLeftRadius:x.medium},roundedRight:{borderBottomRightRadius:x.medium,borderTopRightRadius:x.medium},roundedTop:{borderTopLeftRadius:x.medium,borderTopRightRadius:x.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),o.d(t,"a",function(){return O});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var T=n.a.createContext(y);"undefined"!==typeof T&&T&&T===Object(T)&&Object.isExtensible(T)&&Object.defineProperty(T,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var _=function(e){return e?l()(y,e):y};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var j=function(e){var t=e.children,o=e.value,r=_(void 0===o?y:o);return n.a.createElement(T.Provider,{value:r,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var O=function(){return n.a.useContext(T)};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return i});var r=o("./node_modules/deepmerge/dist/umd.js"),l=o.n(r);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var i=function(e,t,o){return function(r,i){var n=[e(r,i)];return o&&n.push(o(r,i)),t&&n.push(t(r,i)),l.a.all(n)}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=27.63e03fa4bf7912bab9a6.js.map