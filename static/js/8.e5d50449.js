(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/Box/Box.tsx":function(e,t,l){"use strict";l.d(t,"a",function(){return s});var o=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=l("./node_modules/react/index.js"),r=l("./node_modules/react-native-web/dist/exports/View/index.js"),a=l("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var i={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},s=function(e){var t=e.children,l=e.testID,s=Object(o.a)(e,["children","testID"]),c=Object(a.a)(),b=[],m={};for(var u in s)if(u){var d=i[u];if(d){var f=d(s[u],c);b.push(f)}else m[u]=s[u]}return n.createElement(r.a,{testID:l,style:[m,b],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Collapsible/Collapsible.mdx":function(e,t,l){"use strict";l.r(t),l.d(t,"default",function(){return d});var o=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),r=(l("./node_modules/react/index.js"),l("./node_modules/@mdx-js/react/dist/index.es.js")),a=l("./node_modules/docz/dist/index.esm.js"),i=l("./src/components/Box/Box.tsx"),s=l("./src/components/Collapsible/Collapsible.tsx"),c=l("./src/components/Helpers/Toggle.tsx"),b="/home/travis/build/WeTrustPlatform/paramount/src/components/Collapsible/Collapsible.mdx",m={},u="wrapper";function d(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},m,l,{components:t,mdxType:"MDXLayout",__source:{fileName:b,lineNumber:21}}),Object(r.b)("h1",Object(n.a)({id:"collapsible"},{__source:{fileName:b,lineNumber:23}}),"Collapsible"),Object(r.b)("p",{__source:{fileName:b,lineNumber:26}},"Component to reveal and hide content"),Object(r.b)("h3",Object(n.a)({id:"usage"},{__source:{fileName:b,lineNumber:27}}),"Usage"),Object(r.b)(a.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Collapsible\n      title={on ? \'Close collapsible\' : \'Open collapsible\'}\n      isOpen={on}\n      onOpen={toggle}\n      onClose={toggle}\n    >\n      <Box\n        marginVertical={16}\n        justifyContent="center"\n        alignItems="center"\n        height={300}\n        backgroundColor="#67c6bb"\n      />\n    </Collapsible>\n  )}\n</Toggle>',__scope:{props:this?this.props:l,Playground:a.c,Props:a.d,Box:i.a,Collapsible:s.a,Toggle:c.a},mdxType:"Playground",__source:{fileName:b,lineNumber:30}},Object(r.b)(c.a,{initial:!1,mdxType:"Toggle",__source:{fileName:b,lineNumber:38}},function(e){var t=e.on,l=e.toggle;return Object(r.b)(s.a,{title:t?"Close collapsible":"Open collapsible",isOpen:t,onOpen:l,onClose:l,mdxType:"Collapsible",__source:{fileName:b,lineNumber:42}},Object(r.b)(i.a,{marginVertical:16,justifyContent:"center",alignItems:"center",height:300,backgroundColor:"#67c6bb",mdxType:"Box",__source:{fileName:b,lineNumber:43}}))})),Object(r.b)("h3",Object(n.a)({id:"props"},{__source:{fileName:b,lineNumber:47}}),"Props"),Object(r.b)(a.d,{of:s.a,mdxType:"Props",__source:{fileName:b,lineNumber:50}}),Object(r.b)("h3",Object(n.a)({id:"customization"},{__source:{fileName:b,lineNumber:51}}),"Customization"),Object(r.b)("p",{__source:{fileName:b,lineNumber:54}},"Using ",Object(r.b)("inlineCode",{parentName:"p",__source:{fileName:b,lineNumber:54}},"getStyles")," prop"),Object(r.b)("pre",{__source:{fileName:b,lineNumber:55}},Object(r.b)("code",Object(n.a)({parentName:"pre"},{},{__source:{fileName:b,lineNumber:55}}),"CollapsibleStyles {\n  touchableStyle: ViewStyle;\n  outerWrapperStyle: ViewStyle;\n  contentWrapperStyle: ViewStyle;\n  textStyle: ViewStyle;\n  iconWrapperStyle: ViewStyle;\n}\n\ngetStyles={(CollapsibleProps, Theme) => CollapsibleStyles}\n")),Object(r.b)("p",{__source:{fileName:b,lineNumber:65}},"Markup"),Object(r.b)("pre",{__source:{fileName:b,lineNumber:66}},Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:b,lineNumber:66}}),"<>\n  <TouchableOpacity touchableStyle>\n    <View outerWrapperStyle>\n      <Text textStyle>{title}</Text>\n      <View iconWrapperStyle>{icon}</View>\n    </View>\n  </TouchableOpacity>\n  <View contentWrapperStyle>{children}</View>\n</>\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Collapsible/Collapsible.mdx"}}),d.isMDXComponent=!0},"./src/components/Collapsible/Collapsible.tsx":function(e,t,l){"use strict";var o=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),r=l("./node_modules/react/index.js"),a=l("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),i=l("./node_modules/react-native-web/dist/exports/View/index.js"),s=l("./src/theme/Theme.tsx"),c=l("./src/utils/mergeStyles.ts"),b=l("./src/components/Icon/Icon.web.tsx"),m=l("./src/components/Typography/Text.tsx");"undefined"!==typeof CollapsibleStyles&&CollapsibleStyles&&CollapsibleStyles===Object(CollapsibleStyles)&&Object.isExtensible(CollapsibleStyles)&&Object.defineProperty(CollapsibleStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CollapsibleStyles",filename:"src/components/Collapsible/Collapsible.styles.ts"}}),"undefined"!==typeof GetCollapsibleStyles&&GetCollapsibleStyles&&GetCollapsibleStyles===Object(GetCollapsibleStyles)&&Object.isExtensible(GetCollapsibleStyles)&&Object.defineProperty(GetCollapsibleStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCollapsibleStyles",filename:"src/components/Collapsible/Collapsible.styles.ts"}});var u=function(e,t){return{contentWrapperStyle:{overflow:"hidden"},iconWrapperStyle:{paddingLeft:4},outerWrapperStyle:{alignItems:"center",display:"flex",flexDirection:"row"},textStyle:{},touchableStyle:{}}};u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCollapsibleStyles",filename:"src/components/Collapsible/Collapsible.styles.ts"}}),l.d(t,"a",function(){return f});var d="/home/travis/build/WeTrustPlatform/paramount/src/components/Collapsible/Collapsible.tsx";"undefined"!==typeof CollapsibleProps&&CollapsibleProps&&CollapsibleProps===Object(CollapsibleProps)&&Object.isExtensible(CollapsibleProps)&&Object.defineProperty(CollapsibleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CollapsibleProps",filename:"src/components/Collapsible/Collapsible.tsx"}});var f=function(e){var t=e.title,l=e.children,f=e.header,p=e.initialIsOpen,g=void 0!==p&&p,h=e.isOpen,y=void 0!==h&&h,x=e.getStyles,j=e.testID,O=e.onOpen,_=void 0===O?function(){}:O,C=e.onClose,T=void 0===C?function(){}:C,S=e.accessibilityHint,P=e.accessibilityLabel,v=e.accessible,k=void 0===v||v,E=Object(s.a)(),w=r.useState(g),F=Object(n.a)(w,2),z=F[0],B=F[1],N="boolean"===typeof y,R=N?y:z,W=Object(c.a)(u,x,E.components.getCollapsibleStyles)(Object(o.a)({},e,{isOpen:R}),E),H=W.touchableStyle,I=W.outerWrapperStyle,D=W.contentWrapperStyle,G=W.textStyle,L=W.iconWrapperStyle,A=r.useCallback(function(){N?y?T():_():z?(B(!1),T()):(B(!0),_())},[z,y,N]);return r.createElement(r.Fragment,null,r.createElement(a.a,{testID:j,onPress:A,style:H,accessibilityHint:S,accessibilityLabel:P,accessible:k,__source:{fileName:d,lineNumber:118}},r.createElement(i.a,{style:I,__source:{fileName:d,lineNumber:126}},f||r.createElement(r.Fragment,null,r.createElement(m.a,{size:"large",getStyles:function(){return{textStyle:G}},__source:{fileName:d,lineNumber:129}},t),r.createElement(i.a,{style:L,__source:{fileName:d,lineNumber:132}},r.createElement(b.a,{size:28,name:R?"chevron-up":"chevron-down",color:E.colors.text.default,__source:{fileName:d,lineNumber:133}}))))),r.createElement(i.a,{style:D,__source:{fileName:d,lineNumber:143}},R&&l))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Collapsible",filename:"src/components/Collapsible/Collapsible.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,l){"use strict";l.d(t,"a",function(){return a});var o=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=l("./node_modules/react/index.js"),r=l.n(n);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var a=function(e){var t=e.children,l=e.initial,n=void 0!==l&&l,a=r.a.useState(n),i=Object(o.a)(a,2),s=i[0],c=i[1],b=r.a.useCallback(function(){c(!s)},[s]),m=r.a.useCallback(function(e){c(e)},[]);return t({on:s,toggle:b,set:m})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,l){"use strict";l.d(t,"a",function(){return i});var o=l("./node_modules/react/index.js"),n=l("./node_modules/react-icons/fi/index.esm.js"),r=l("./src/theme/Theme.tsx"),a=l("./src/components/Typography/Text.styles.ts");var i=function(e){var t=e.name,l=e.color,i=e.size,s=Object(r.a)(),c=n["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return o.createElement(c,{color:l?Object(a.b)(s.colors.text)(l):l,size:i,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,l){"use strict";l.d(t,"a",function(){return n}),l.d(t,"b",function(){return r}),l.d(t,"c",function(){return i});var o=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var n=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var r=function(e){return function(t){return e[t]||t}};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]||{fontSize:t}}};a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e,t){var l=e.color,i=void 0===l?"default":l,s=e.size,c=void 0===s?"medium":s,b=e.align,m=void 0===b?"left":b,u=e.weight,d=e.isItalic,f=void 0!==d&&d,p=e.transform,g=a(t.textSizes)(c);return{textStyle:Object(o.a)({},g,{color:r(t.colors.text)(i),fontFamily:t.fontFamilies.text,fontWeight:n(t.fontWeights)(u)||g.fontWeight,textAlign:m},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,l){"use strict";l.d(t,"a",function(){return b});var o=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=l("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=l("./node_modules/react/index.js"),a=l("./node_modules/react-native-web/dist/exports/Text/index.js"),i=l("./src/theme/Theme.tsx"),s=l("./src/utils/mergeStyles.ts"),c=l("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var b=function(e){var t=e.children,l=(e.color,e.size,e.align,e.weight,e.getStyles),b=(e.isItalic,e.transform,Object(n.a)(e,["children","color","size","align","weight","getStyles","isItalic","transform"])),m=Object(i.a)(),u=Object(s.a)(c.c,l,m.components.getTextStyles)(e,m).textStyle;return r.createElement(a.a,Object(o.a)({style:u},b,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:75}}),t)};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,l){"use strict";var o=l("./node_modules/deepmerge/dist/umd.js"),n=l.n(o),r=l("./node_modules/react/index.js"),a=l.n(r),i=l("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},b={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},m={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},u={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var g={small:4,medium:4,large:4},h={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:m.lightest,secondaryDefault:m.base,secondaryDark:m.dark,dangerLight:b.lightest,dangerDefault:b.base,dangerDark:b.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:m.lightest,warningDefault:m.base,warningDark:m.dark},border:{default:s.light,primary:f.darkest,secondary:m.darkest,danger:b.darkest,info:c.darkest,success:d.darkest,warning:m.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:m.base,secondaryText:"white",danger:b.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:m.darkest,danger:b.darkest,info:c.darkest,success:d.darkest,warning:m.darkest}},y=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],x={colors:h,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:b.base,color:"white"},orange:{backgroundColor:m.base,color:"white"},yellow:{backgroundColor:u.base,color:u.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:b.light,color:b.darkest},orange:{backgroundColor:m.light,color:m.darkest},yellow:{backgroundColor:u.light,color:u.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===i.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:y,controlBorderRadius:g,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:g.medium},roundedBottom:{borderBottomLeftRadius:g.medium,borderBottomRightRadius:g.medium},roundedLeft:{borderBottomLeftRadius:g.medium,borderTopLeftRadius:g.medium},roundedRight:{borderBottomRightRadius:g.medium,borderTopRightRadius:g.medium},roundedTop:{borderTopLeftRadius:g.medium,borderTopRightRadius:g.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),l.d(t,"a",function(){return C});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var j=a.a.createContext(x);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?n()(x,e):x};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var _=function(e){var t=e.children,l=e.value,o=O(void 0===l?x:l);return a.a.createElement(j.Provider,{value:o,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:315}},t)};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var C=function(){return a.a.useContext(j)};"undefined"!==typeof C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,l){"use strict";l.d(t,"a",function(){return r});var o=l("./node_modules/deepmerge/dist/umd.js"),n=l.n(o);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var r=function(e,t,l){return function(o,r){var a=[e(o,r)];return l&&a.push(l(o,r)),t&&a.push(t(o,r)),n.a.all(a)}};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=8.952f4e377a528e25f675.js.map