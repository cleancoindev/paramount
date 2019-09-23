(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),i=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var l={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},s=function(e){var t=e.children,n=e.testID,s=Object(o.a)(e,["children","testID"]),u=Object(a.a)(),c=[],m={};for(var b in s)if(b){var d=l[b];if(d){var f=d(s[b],u);c.push(f)}else m[b]=s[b]}return r.createElement(i.a,{testID:n,style:[m,c],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Layout/LayoutContext.tsx":function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return l}),n.d(t,"e",function(){return s});var o=n("./node_modules/react/index.js");"undefined"!==typeof Breakpoints&&Breakpoints&&Breakpoints===Object(Breakpoints)&&Object.isExtensible(Breakpoints)&&Object.defineProperty(Breakpoints,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Breakpoints",filename:"src/components/Layout/LayoutContext.tsx"}}),"undefined"!==typeof ScreenSizes&&ScreenSizes&&ScreenSizes===Object(ScreenSizes)&&Object.isExtensible(ScreenSizes)&&Object.defineProperty(ScreenSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScreenSizes",filename:"src/components/Layout/LayoutContext.tsx"}}),"undefined"!==typeof ColumnCount&&ColumnCount&&ColumnCount===Object(ColumnCount)&&Object.isExtensible(ColumnCount)&&Object.defineProperty(ColumnCount,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnCount",filename:"src/components/Layout/LayoutContext.tsx"}}),"undefined"!==typeof ContainerSizes&&ContainerSizes&&ContainerSizes===Object(ContainerSizes)&&Object.isExtensible(ContainerSizes)&&Object.defineProperty(ContainerSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerSizes",filename:"src/components/Layout/LayoutContext.tsx"}}),"undefined"!==typeof Breakpoint&&Breakpoint&&Breakpoint===Object(Breakpoint)&&Object.isExtensible(Breakpoint)&&Object.defineProperty(Breakpoint,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Breakpoint",filename:"src/components/Layout/LayoutContext.tsx"}}),"undefined"!==typeof ContainerSize&&ContainerSize&&ContainerSize===Object(ContainerSize)&&Object.isExtensible(ContainerSize)&&Object.defineProperty(ContainerSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerSize",filename:"src/components/Layout/LayoutContext.tsx"}}),"undefined"!==typeof ScreenSize&&ScreenSize&&ScreenSize===Object(ScreenSize)&&Object.isExtensible(ScreenSize)&&Object.defineProperty(ScreenSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScreenSize",filename:"src/components/Layout/LayoutContext.tsx"}}),"undefined"!==typeof GetResponsiveValueParam&&GetResponsiveValueParam&&GetResponsiveValueParam===Object(GetResponsiveValueParam)&&Object.isExtensible(GetResponsiveValueParam)&&Object.defineProperty(GetResponsiveValueParam,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetResponsiveValueParam",filename:"src/components/Layout/LayoutContext.tsx"}}),"undefined"!==typeof GetResponsiveValue&&GetResponsiveValue&&GetResponsiveValue===Object(GetResponsiveValue)&&Object.isExtensible(GetResponsiveValue)&&Object.defineProperty(GetResponsiveValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetResponsiveValue",filename:"src/components/Layout/LayoutContext.tsx"}}),"undefined"!==typeof LayoutInterface&&LayoutInterface&&LayoutInterface===Object(LayoutInterface)&&Object.isExtensible(LayoutInterface)&&Object.defineProperty(LayoutInterface,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutInterface",filename:"src/components/Layout/LayoutContext.tsx"}});var r={breakpoints:{small:480,medium:768,large:992,xlarge:1200},containerSizes:{small:540,medium:720,large:960,xlarge:1140},currentScreenSize:"small",getResponsiveValue:function(e){return e.xsmall||e.small||e.medium||e.large||e.xlarge||void 0},gridColumnCount:12,gutterWidth:30};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultLayout",filename:"src/components/Layout/LayoutContext.tsx"}});var i=["xsmall","small","medium","large","xlarge"];"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ASC_ORDER_SCREEN_SIZES",filename:"src/components/Layout/LayoutContext.tsx"}});var a=i.slice(0).reverse();"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DESC_ORDER_SCREEN_SIZES",filename:"src/components/Layout/LayoutContext.tsx"}});var l=o.createContext(r);"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutContext",filename:"src/components/Layout/LayoutContext.tsx"}});var s=function(){return o.useContext(l)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLayout",filename:"src/components/Layout/LayoutContext.tsx"}})},"./src/components/Layout/LayoutProvider.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return m});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/deepmerge/dist/cjs.js"),a=n.n(i),l=n("./node_modules/react/index.js"),s=n("./node_modules/react-native-web/dist/exports/Dimensions/index.js"),u=n("./src/components/Layout/LayoutContext.tsx");"undefined"!==typeof LayoutProviderProps&&LayoutProviderProps&&LayoutProviderProps===Object(LayoutProviderProps)&&Object.isExtensible(LayoutProviderProps)&&Object.defineProperty(LayoutProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutProviderProps",filename:"src/components/Layout/LayoutProvider.tsx"}});var c=function(e){var t=e.breakpoints,n=s.a.get("window");return u.b.find(function(e){if("xsmall"===e)return n.width<t.small;var o=t[e];return n.width>=o})||"xsmall"};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCurrentScreenSize",filename:"src/components/Layout/LayoutProvider.tsx"}});var m=function(e){var t=e.children,n=e.value,i=n?a()(u.d,n):u.d,m=l.useState(c(i)),b=Object(r.a)(m,2),d=b[0],f=b[1],p=l.useCallback(function(){f(c(i))},[]);return l.useLayoutEffect(function(){return s.a.addEventListener("change",p),function(){return s.a.removeEventListener("change",p)}},[]),l.createElement(u.c.Provider,{value:Object(o.a)({},i,{currentScreenSize:d,getResponsiveValue:function(e){return function(e,t){var n=u.b.indexOf(t),o=u.b.find(function(t,o){return!(n>o)&&void 0!==e[t]&&null!==e[t]});return o?e[o]:void 0}(e,d)}}),__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/LayoutProvider.tsx",lineNumber:75}},t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutProvider",filename:"src/components/Layout/LayoutProvider.tsx"}})},"./src/components/Layout/Visible.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/components/Box/Box.tsx"),s=n("./src/components/Layout/Visible.tsx"),u=n("./src/components/Layout/LayoutProvider.tsx"),c=n("./src/components/Typography/Text.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Visible.mdx",b={},d="wrapper";function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(i.b)("h1",Object(r.a)({id:"visible"},{__source:{fileName:m,lineNumber:24}}),"Visible"),Object(i.b)("p",{__source:{fileName:m,lineNumber:27}},"Renders children when the current screen size matches defined sizes"),Object(i.b)("p",{__source:{fileName:m,lineNumber:28}},"Refer to ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:28}},"Layout")," docs for setup"),Object(i.b)("p",{__source:{fileName:m,lineNumber:29}},"Resize the window to see different blocks appearing responsively"),Object(i.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:m,lineNumber:30}}),"Usage"),Object(i.b)(a.c,{__position:0,__code:'<LayoutProvider>\n  <Visible large xlarge>\n    <Box backgroundColor="#67c6bb" height={48}>\n      <Text align="center" color="white">\n        Large and greater\n      </Text>\n    </Box>\n  </Visible>\n  <Visible medium>\n    <Box backgroundColor="#1ca5F7" height={48}>\n      <Text align="center" color="white">\n        Medium\n      </Text>\n    </Box>\n  </Visible>\n  <Visible xsmall small>\n    <Box backgroundColor="#d26557" height={48}>\n      <Text align="center" color="white">\n        Small and lower\n      </Text>\n    </Box>\n  </Visible>\n</LayoutProvider>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:l.a,Visible:s.a,LayoutProvider:u.a,Text:c.a},mdxType:"Playground",__source:{fileName:m,lineNumber:33}},Object(i.b)(u.a,{mdxType:"LayoutProvider",__source:{fileName:m,lineNumber:42}},Object(i.b)(s.a,{large:!0,xlarge:!0,mdxType:"Visible",__source:{fileName:m,lineNumber:43}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,mdxType:"Box",__source:{fileName:m,lineNumber:44}},Object(i.b)(c.a,{align:"center",color:"white",mdxType:"Text",__source:{fileName:m,lineNumber:45}},"Large and greater"))),Object(i.b)(s.a,{medium:!0,mdxType:"Visible",__source:{fileName:m,lineNumber:50}},Object(i.b)(l.a,{backgroundColor:"#1ca5F7",height:48,mdxType:"Box",__source:{fileName:m,lineNumber:51}},Object(i.b)(c.a,{align:"center",color:"white",mdxType:"Text",__source:{fileName:m,lineNumber:52}},"Medium"))),Object(i.b)(s.a,{xsmall:!0,small:!0,mdxType:"Visible",__source:{fileName:m,lineNumber:57}},Object(i.b)(l.a,{backgroundColor:"#d26557",height:48,mdxType:"Box",__source:{fileName:m,lineNumber:58}},Object(i.b)(c.a,{align:"center",color:"white",mdxType:"Text",__source:{fileName:m,lineNumber:59}},"Small and lower"))))),Object(i.b)("h2",Object(r.a)({id:"props"},{__source:{fileName:m,lineNumber:66}}),"Props"),Object(i.b)(a.d,{of:s.a,mdxType:"Props",__source:{fileName:m,lineNumber:69}}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Layout/Visible.mdx"}}),f.isMDXComponent=!0},"./src/components/Layout/Visible.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=n("./node_modules/react/index.js"),i=n("./src/components/Layout/LayoutContext.tsx");"undefined"!==typeof VisibleConfig&&VisibleConfig&&VisibleConfig===Object(VisibleConfig)&&Object.isExtensible(VisibleConfig)&&Object.defineProperty(VisibleConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VisibleConfig",filename:"src/components/Layout/Visible.tsx"}}),"undefined"!==typeof VisibleProps&&VisibleProps&&VisibleProps===Object(VisibleProps)&&Object.isExtensible(VisibleProps)&&Object.defineProperty(VisibleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VisibleProps",filename:"src/components/Layout/Visible.tsx"}});var a=function(e){var t=e.children;return function(e,t){var n=function(e){return[e.xsmall,e.small,e.medium,e.large,e.xlarge]}(e),o=i.a.indexOf(t);return!!n.find(function(e,t){return t===o&&!!e})}(Object(o.a)(e,["children"]),r.useContext(i.c).currentScreenSize)?r.createElement(r.Fragment,null,t):r.createElement(r.Fragment,null)};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Visible",filename:"src/components/Layout/Visible.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return l});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var r=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||t}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]||{fontSize:t}}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e,t){var n=e.color,l=void 0===n?"default":n,s=e.size,u=void 0===s?"medium":s,c=e.align,m=void 0===c?"left":c,b=e.weight,d=e.isItalic,f=void 0!==d&&d,p=e.transform,g=a(t.textSizes)(u);return{textStyle:Object(o.a)({},g,{color:i(t.colors.text)(l),fontFamily:t.fontFamilies.text,fontWeight:r(t.fontWeights)(b)||g.fontWeight,textAlign:m},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/Text/index.js"),l=n("./src/theme/Theme.tsx"),s=n("./src/utils/mergeStyles.ts"),u=n("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var c=function(e){var t=e.children,n=(e.color,e.size,e.align,e.weight,e.getStyles),c=(e.isItalic,e.transform,Object(r.a)(e,["children","color","size","align","weight","getStyles","isItalic","transform"])),m=Object(l.a)(),b=Object(s.a)(u.d,n,m.components.getTextStyles)(e,m).textStyle;return i.createElement(a.a,Object(o.a)({style:b},c,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:75}}),t)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,n){"use strict";var o=n("./node_modules/deepmerge/dist/cjs.js"),r=n.n(o),i=n("./node_modules/react/index.js"),a=n.n(i),l=n("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},u={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},c={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},m={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={small:4,medium:4,large:4},y={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:m.lightest,secondaryDefault:m.base,secondaryDark:m.dark,dangerLight:c.lightest,dangerDefault:c.base,dangerDark:c.dark,infoLight:u.lightest,infoDefault:u.base,infoDark:u.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:m.lightest,warningDefault:m.base,warningDark:m.dark},border:{default:s.light,primary:f.darkest,secondary:m.darkest,danger:c.darkest,info:u.darkest,success:d.darkest,warning:m.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:m.base,secondaryText:"white",danger:c.base,dangerText:"white"},text:{link:f.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:m.darkest,danger:c.darkest,info:u.darkest,success:d.darkest,warning:m.darkest}},x=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],h={colors:y,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:u.base,color:"white"},red:{backgroundColor:c.base,color:"white"},orange:{backgroundColor:m.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:u.light,color:u.darkest},red:{backgroundColor:c.light,color:c.darkest},orange:{backgroundColor:m.light,color:m.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===l.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:x,controlBorderRadius:g,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:g.medium},roundedBottom:{borderBottomLeftRadius:g.medium,borderBottomRightRadius:g.medium},roundedLeft:{borderBottomLeftRadius:g.medium,borderTopLeftRadius:g.medium},roundedRight:{borderBottomRightRadius:g.medium,borderTopRightRadius:g.medium},roundedTop:{borderTopLeftRadius:g.medium,borderTopRightRadius:g.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),n.d(t,"a",function(){return C});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var j=a.a.createContext(h);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?r()(h,e):h};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var _=function(e){var t=e.children,n=e.value,o=O(void 0===n?h:n);return a.a.createElement(j.Provider,{value:o,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:317}},t)};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var C=function(){return a.a.useContext(j)};"undefined"!==typeof C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var o=n("./node_modules/deepmerge/dist/cjs.js"),r=n.n(o);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var i=function(e,t,n){return function(o,i){var a=[e(o,i)];return n&&a.push(n(o,i)),t&&a.push(t(o,i)),r.a.all(a)}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=16.148bda92f162f2cb1ab0.js.map