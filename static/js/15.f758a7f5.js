(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return c});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),i=n("./node_modules/react-native-web/dist/exports/View/index.js"),a=n("./src/theme/Theme.tsx");4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var l={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Box/Box.tsx"}});var s={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return l[e]})},c=function(e){var t=e.children,n=e.style,l=e.testID,c=Object(r.a)(e,["children","style","testID"]),u=Object(a.a)(),m=[],b={};for(var d in c)if(d){var f=s[d];if(f){var p=f(c[d],u);m.push(p)}else b[d]=c[d]}return o.createElement(i.a,{testID:l,style:[b,m,n],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:101}},t)};"undefined"!==typeof c&&c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Grid/LayoutContext.tsx":function(e,t,n){"use strict";n.d(t,"d",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return l}),n.d(t,"e",function(){return s});var r=n("./node_modules/react/index.js");"undefined"!==typeof Breakpoints&&Breakpoints&&Breakpoints===Object(Breakpoints)&&Object.isExtensible(Breakpoints)&&Object.defineProperty(Breakpoints,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Breakpoints",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof ScreenSizes&&ScreenSizes&&ScreenSizes===Object(ScreenSizes)&&Object.isExtensible(ScreenSizes)&&Object.defineProperty(ScreenSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScreenSizes",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof ColumnCount&&ColumnCount&&ColumnCount===Object(ColumnCount)&&Object.isExtensible(ColumnCount)&&Object.defineProperty(ColumnCount,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnCount",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof Breakpoint&&Breakpoint&&Breakpoint===Object(Breakpoint)&&Object.isExtensible(Breakpoint)&&Object.defineProperty(Breakpoint,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Breakpoint",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof ScreenSize&&ScreenSize&&ScreenSize===Object(ScreenSize)&&Object.isExtensible(ScreenSize)&&Object.defineProperty(ScreenSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ScreenSize",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof GetResponsiveValueParam&&GetResponsiveValueParam&&GetResponsiveValueParam===Object(GetResponsiveValueParam)&&Object.isExtensible(GetResponsiveValueParam)&&Object.defineProperty(GetResponsiveValueParam,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetResponsiveValueParam",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof GetResponsiveValue&&GetResponsiveValue&&GetResponsiveValue===Object(GetResponsiveValue)&&Object.isExtensible(GetResponsiveValue)&&Object.defineProperty(GetResponsiveValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetResponsiveValue",filename:"src/components/Grid/LayoutContext.tsx"}}),"undefined"!==typeof LayoutInterface&&LayoutInterface&&LayoutInterface===Object(LayoutInterface)&&Object.isExtensible(LayoutInterface)&&Object.defineProperty(LayoutInterface,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutInterface",filename:"src/components/Grid/LayoutContext.tsx"}});var o={breakpoints:{small:480,medium:720,large:960,xlarge:1280},currentScreenSize:"small",getResponsiveValue:function(e){return e.xsmall||e.small||e.medium||e.large||e.xlarge||void 0},gridColumnCount:12,gutterWidth:30,maxWidth:1440};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultLayout",filename:"src/components/Grid/LayoutContext.tsx"}});var i=["xsmall","small","medium","large","xlarge"];"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ASC_ORDER_SCREEN_SIZES",filename:"src/components/Grid/LayoutContext.tsx"}});var a=i.slice(0).reverse();"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DESC_ORDER_SCREEN_SIZES",filename:"src/components/Grid/LayoutContext.tsx"}});var l=r.createContext(o);"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutContext",filename:"src/components/Grid/LayoutContext.tsx"}});var s=function(){return r.useContext(l)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLayout",filename:"src/components/Grid/LayoutContext.tsx"}})},"./src/components/Grid/LayoutProvider.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=n("./node_modules/deepmerge/dist/umd.js"),a=n.n(i),l=n("./node_modules/react/index.js"),s=n("./node_modules/react-native-web/dist/exports/Dimensions/index.js"),c=n("./src/components/Grid/LayoutContext.tsx");"undefined"!==typeof LayoutProviderProps&&LayoutProviderProps&&LayoutProviderProps===Object(LayoutProviderProps)&&Object.isExtensible(LayoutProviderProps)&&Object.defineProperty(LayoutProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutProviderProps",filename:"src/components/Grid/LayoutProvider.tsx"}});var u=function(e){var t=e.breakpoints,n=s.a.get("window");return c.b.find(function(e){if("xsmall"===e)return n.width<t.small;var r=t[e];return n.width>=r})||"xsmall"};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCurrentScreenSize",filename:"src/components/Grid/LayoutProvider.tsx"}});var m=function(e){var t=e.children,n=e.value,i=n?a()(c.d,n):c.d,m=l.useState(u(i)),b=Object(o.a)(m,2),d=b[0],f=b[1],p=l.useCallback(function(){f(u(i))},[]);return l.useLayoutEffect(function(){return s.a.addEventListener("change",p),function(){return s.a.removeEventListener("change",p)}},[]),l.createElement(c.c.Provider,{value:Object(r.a)({},i,{currentScreenSize:d,getResponsiveValue:function(e){return function(e,t){var n=c.b.indexOf(t),r=c.b.find(function(t,r){return!(n>r)&&!!e[t]});return r?e[r]:void 0}(e,d)}}),__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Grid/LayoutProvider.tsx",lineNumber:75}},t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LayoutProvider",filename:"src/components/Grid/LayoutProvider.tsx"}})},"./src/components/Grid/Visible.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),a=n("./node_modules/docz/dist/index.esm.js"),l=n("./src/components/Box/Box.tsx"),s=n("./src/components/Grid/Visible.tsx"),c=n("./src/components/Grid/LayoutProvider.tsx"),u=n("./src/components/Typography/Text.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Grid/Visible.mdx",b={},d="wrapper";function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(i.b)("h1",Object(o.a)({id:"visible"},{__source:{fileName:m,lineNumber:24}}),"Visible"),Object(i.b)("h3",Object(o.a)({id:"usage"},{__source:{fileName:m,lineNumber:27}}),"Usage"),Object(i.b)(a.c,{__position:0,__code:'<LayoutProvider>\n  <Visible large xlarge>\n    <Box backgroundColor="#67c6bb" height={48}>\n      <Text align="center" color="white">\n        Large and greater\n      </Text>\n    </Box>\n  </Visible>\n  <Visible medium>\n    <Box backgroundColor="#1ca5F7" height={48}>\n      <Text align="center" color="white">\n        Medium\n      </Text>\n    </Box>\n  </Visible>\n  <Visible xsmall small>\n    <Box backgroundColor="#d26557" height={48}>\n      <Text align="center" color="white">\n        Small and lower\n      </Text>\n    </Box>\n  </Visible>\n</LayoutProvider>',__scope:{props:this?this.props:n,Playground:a.c,Props:a.d,Box:l.a,Visible:s.a,LayoutProvider:c.a,Text:u.a},mdxType:"Playground",__source:{fileName:m,lineNumber:30}},Object(i.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:m,lineNumber:39}},Object(i.b)(s.a,{large:!0,xlarge:!0,mdxType:"Visible",__source:{fileName:m,lineNumber:40}},Object(i.b)(l.a,{backgroundColor:"#67c6bb",height:48,mdxType:"Box",__source:{fileName:m,lineNumber:41}},Object(i.b)(u.a,{align:"center",color:"white",mdxType:"Text",__source:{fileName:m,lineNumber:42}},"Large and greater"))),Object(i.b)(s.a,{medium:!0,mdxType:"Visible",__source:{fileName:m,lineNumber:47}},Object(i.b)(l.a,{backgroundColor:"#1ca5F7",height:48,mdxType:"Box",__source:{fileName:m,lineNumber:48}},Object(i.b)(u.a,{align:"center",color:"white",mdxType:"Text",__source:{fileName:m,lineNumber:49}},"Medium"))),Object(i.b)(s.a,{xsmall:!0,small:!0,mdxType:"Visible",__source:{fileName:m,lineNumber:54}},Object(i.b)(l.a,{backgroundColor:"#d26557",height:48,mdxType:"Box",__source:{fileName:m,lineNumber:55}},Object(i.b)(u.a,{align:"center",color:"white",mdxType:"Text",__source:{fileName:m,lineNumber:56}},"Small and lower"))))))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Grid/Visible.mdx"}}),f.isMDXComponent=!0},"./src/components/Grid/Visible.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),i=n("./src/components/Grid/LayoutContext.tsx");"undefined"!==typeof VisibleConfig&&VisibleConfig&&VisibleConfig===Object(VisibleConfig)&&Object.isExtensible(VisibleConfig)&&Object.defineProperty(VisibleConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VisibleConfig",filename:"src/components/Grid/Visible.tsx"}}),"undefined"!==typeof VisibleProps&&VisibleProps&&VisibleProps===Object(VisibleProps)&&Object.isExtensible(VisibleProps)&&Object.defineProperty(VisibleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"VisibleProps",filename:"src/components/Grid/Visible.tsx"}});var a=function(e){var t=e.children;return function(e,t){var n=function(e){return[e.xsmall,e.small,e.medium,e.large,e.xlarge]}(e),r=i.a.indexOf(t);return!!n.find(function(e,t){return t===r&&!!e})}(Object(r.a)(e,["children"]),o.useContext(i.c).currentScreenSize)?t:null};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Visible",filename:"src/components/Grid/Visible.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return s});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStylesProps&&TextStylesProps&&TextStylesProps===Object(TextStylesProps)&&Object.isExtensible(TextStylesProps)&&Object.defineProperty(TextStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStylesProps",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e){return function(t){return e[t]}};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontFamily",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]||t}};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){return e[t]||{fontSize:t}}};l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var s=function(e,t){var n=e.size,s=e.color,c=e.fontFamily,u=e.isInline,m=e.isItalic,b=e.align,d=e.transform,f=e.weight,p=l(t.textSizes)(n);return{textStyle:Object(r.a)({},p,{color:a(t.colors.text)(s),fontFamily:o(t.fontFamilies)(c),fontWeight:i(t.fontWeights)(f)||p.fontWeight,textAlign:b},u?{alignSelf:"flex-start",flexDirection:"row"}:{},m&&{fontStyle:"italic"},d&&{textTransform:d})}};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/Text/index.js"),l=n("./src/theme/Theme.tsx"),s=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextStyleProps&&TextStyleProps&&TextStyleProps===Object(TextStyleProps)&&Object.isExtensible(TextStyleProps)&&Object.defineProperty(TextStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyleProps",filename:"src/components/Typography/Text.tsx"}}),"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var u=function(e){var t=e.children,n=e.color,u=void 0===n?"default":n,m=e.fontFamily,b=void 0===m?"text":m,d=e.size,f=void 0===d?"medium":d,p=e.align,g=void 0===p?"left":p,x=e.weight,y=e.isInline,h=void 0!==y&&y,j=e.getStyles,O=e.isItalic,_=void 0!==O&&O,v=e.transform,T=Object(o.a)(e,["children","color","fontFamily","size","align","weight","isInline","getStyles","isItalic","transform"]),P=Object(l.a)(),S=Object(s.a)(c.d,j,P.components.getTextStyles)({align:g,color:u,fontFamily:b,isInline:h,isItalic:_,size:f,transform:v,weight:x},P).textStyle;return i.createElement(a.a,Object(r.a)({style:S},T,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:64}}),t)};"undefined"!==typeof u&&u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,n){"use strict";var r=n("./node_modules/deepmerge/dist/umd.js"),o=n.n(r),i=n("./node_modules/react/index.js"),a=n.n(i),l=n("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},u={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},m={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:m.lightest,secondaryDefault:m.base,secondaryDark:m.dark,dangerLight:u.lightest,dangerDefault:u.base,dangerDark:u.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:m.lightest,warningDefault:m.base,warningDark:m.dark},border:{default:s.light,primary:f.darkest,secondary:m.darkest,danger:u.darkest,info:c.darkest,success:d.darkest,warning:m.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:m.base,secondaryText:"white",danger:u.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:m.darkest,danger:u.darkest,info:c.darkest,success:d.darkest,warning:m.darkest}},x=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],y={colors:g,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:u.base,color:"white"},orange:{backgroundColor:m.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:u.light,color:u.darkest},orange:{backgroundColor:m.light,color:m.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===l.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:void 0,mono:void 0,text:void 0},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14}},elevations:x,controlBorderRadius:{small:4,medium:4,large:4},controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},components:{}};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),n.d(t,"a",function(){return _});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var h=a.a.createContext(y);"undefined"!==typeof h&&h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var j=function(e){return e?o()(y,e):y};j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var O=function(e){var t=e.children,n=e.value,r=j(void 0===n?y:n);return a.a.createElement(h.Provider,{value:r,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:296}},t)};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var _=function(){return a.a.useContext(h)};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("./node_modules/deepmerge/dist/umd.js"),o=n.n(r);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var i=function(e,t,n){return function(r,i){var a=[e(r,i)];return n&&a.push(n(r,i)),t&&a.push(t(r,i)),o.a.all(a)}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=15.0c0c915f3939282047ab.js.map