(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/components/Avatar/Avatar.tsx":function(e,t,r){"use strict";var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=r("./node_modules/react/index.js"),i=r("./node_modules/react-native-web/dist/exports/Image/index.js"),o=r("./node_modules/react-native-web/dist/exports/View/index.js"),l=r("./src/theme/Theme.tsx"),s=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Typography/Text.tsx"),m=function(e){var t=String(e),r=0;if(0===t.trim().length)return r;for(var a=0;a<t.length;a++)r=(r<<5)-r+t.charCodeAt(a),r&=r;return Math.abs(r)};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hashCode",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarColor&&AvatarColor&&AvatarColor===Object(AvatarColor)&&Object.isExtensible(AvatarColor)&&Object.defineProperty(AvatarColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarColor",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarStyles&&AvatarStyles&&AvatarStyles===Object(AvatarStyles)&&Object.isExtensible(AvatarStyles)&&Object.defineProperty(AvatarStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}});var u=function(e,t){var r=t.isSolid,a=t.color,n=t.hashValue,i=e[r?"solid":"subtle"];if("automatic"===a){var o=Object.keys(i);return i[o[n%o.length]]}return i[a]};"undefined"!==typeof GetAvatarStyles&&GetAvatarStyles&&GetAvatarStyles===Object(GetAvatarStyles)&&Object.isExtensible(GetAvatarStyles)&&Object.defineProperty(GetAvatarStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetAvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}});var b={large:2,medium:1.5,small:1},d=function(e,t){var r,a=e.name,n=e.color,i=void 0===n?"automatic":n,o=e.isSolid,l=void 0!==o&&o,s=e.size,c=void 0===s?"medium":s,d=t.fills;if("automatic"===i){var f=m(a);r=u(t.fills,{color:i,hashValue:f,isSolid:l})}else r=u(d,{color:i,isSolid:l,hashValue:0});var p=t.controlHeights[c]*b[c];return{containerStyle:{alignItems:"center",backgroundColor:r.backgroundColor,borderRadius:9999,display:"flex",height:p,justifyContent:"center",overflow:"hidden",position:"relative",width:p},textStyle:{color:r.color,fontSize:p/2,lineHeight:p},imageStyle:{height:"100%",width:"100%"}}};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}}),r.d(t,"a",function(){return p});var f="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.tsx";"undefined"!==typeof GetInitialsType&&GetInitialsType&&GetInitialsType===Object(GetInitialsType)&&Object.isExtensible(GetInitialsType)&&Object.defineProperty(GetInitialsType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetInitialsType",filename:"src/components/Avatar/Avatar.tsx"}});"undefined"!==typeof AvatarProps&&AvatarProps&&AvatarProps===Object(AvatarProps)&&Object.isExtensible(AvatarProps)&&Object.defineProperty(AvatarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarProps",filename:"src/components/Avatar/Avatar.tsx"}});var p=function(e){var t=e.source,r=e.name,m=e.getStyles,u=e.testID,b=e.imageAccessibilityLabel,p=e.accessibilityLabel,y=Object(l.a)(),g=n.useState(!1),h=Object(a.a)(g,2),j=h[0],x=h[1],O=!t||j,_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t}(r),S=Object(s.a)(d,m,y.components.getAvatarStyles)(e,y),v=S.containerStyle,T=S.textStyle,C=S.imageStyle;return n.createElement(o.a,{accessibilityLabel:p,style:v,testID:u,__source:{fileName:f,lineNumber:95}},O&&n.createElement(c.a,{getStyles:function(){return{textStyle:T}},__source:{fileName:f,lineNumber:101}},_),!O&&!!t&&n.createElement(i.a,{accessibilityLabel:b,onError:function(){return x(!0)},source:t,style:C,__source:{fileName:f,lineNumber:104}}))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Avatar",filename:"src/components/Avatar/Avatar.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return l});var a=r("./node_modules/react/index.js"),n=r("./node_modules/react-icons/fi/index.esm.js"),i=r("./src/theme/Theme.tsx"),o=r("./src/components/Typography/Text.styles.ts");var l=function(e){var t=e.name,r=e.color,l=e.size,s=void 0===l?24:l,c=Object(i.a)(),m=n["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return a.createElement(m,{color:r?Object(o.b)(c.colors.text)(r):r,size:s,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/ListItem/ListItem.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return d});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),o=r("./node_modules/docz/dist/index.esm.js"),l=r("./src/components/Avatar/Avatar.tsx"),s=r("./src/components/Icon/Icon.web.tsx"),c=r("./src/components/ListItem/ListItem.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/ListItem/ListItem.mdx",u={},b="wrapper";function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)(b,Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(i.b)("h1",Object(n.a)({id:"listitem"},{__source:{fileName:m,lineNumber:24}}),"ListItem"),Object(i.b)("p",{__source:{fileName:m,lineNumber:27}},"For image, it composes ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:27}},"Avatar"),", you can pass ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:27}},"avatarProps")," provide more specific customizations"),Object(i.b)("h2",Object(n.a)({id:"usage"},{__source:{fileName:m,lineNumber:28}}),"Usage"),Object(i.b)(o.c,{__position:0,__code:"<ListItem\n  onPress={() => console.log('Press')}\n  avatarProps={{\n    source: { uri: 'https://picsum.photos/200/200' },\n  }}\n  title=\"Some label\"\n  description=\"Some description\"\n/>",__scope:{props:this?this.props:r,Playground:o.c,Props:o.d,Avatar:l.a,Icon:s.a,ListItem:c.a},mdxType:"Playground",__source:{fileName:m,lineNumber:31}},Object(i.b)(c.a,{onPress:function(){return console.log("Press")},avatarProps:{source:{uri:"https://picsum.photos/200/200"}},title:"Some label",description:"Some description",mdxType:"ListItem",__source:{fileName:m,lineNumber:39}})),Object(i.b)("h2",Object(n.a)({id:"props"},{__source:{fileName:m,lineNumber:45}}),"Props"),Object(i.b)(o.d,{of:c.a,mdxType:"Props",__source:{fileName:m,lineNumber:48}}),Object(i.b)("h2",Object(n.a)({id:"customization"},{__source:{fileName:m,lineNumber:49}}),"Customization"),Object(i.b)("p",{__source:{fileName:m,lineNumber:52}},"Using ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:m,lineNumber:52}},"getStyles")," prop"),Object(i.b)("pre",{__source:{fileName:m,lineNumber:53}},Object(i.b)("code",Object(n.a)({parentName:"pre"},{},{__source:{fileName:m,lineNumber:53}}),"ListItemStyles {\n  imageWrapperStyle: ViewStyle;\n  wrapperStyle: ViewStyle;\n  touchableStyle: ViewStyle;\n  leftWrapperStyle: ViewStyle;\n  textWrapperStyle: ViewStyle;\n  titleStyle: TextStyle;\n  descriptionStyle: TextStyle;\n}\n\ngetStyles={(ListItemProps, Theme) => ListItemStyles}\n")),Object(i.b)("p",{__source:{fileName:m,lineNumber:65}},"Markup"),Object(i.b)("pre",{__source:{fileName:m,lineNumber:66}},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:m,lineNumber:66}}),"<TouchableOpacity touchableStyle>\n  <View wrapperStyle>\n    <View leftWrapperStyle>\n      <View imageWrapperStyle>{leftNode || <Avatar />}</View>\n      <View textWrapperStyle>\n        {title}\n        {description}\n      </View>\n    </View>\n    {rightNode}\n  </View>\n</TouchableOpacity>\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ListItem/ListItem.mdx"}}),d.isMDXComponent=!0},"./src/components/ListItem/ListItem.tsx":function(e,t,r){"use strict";var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=r("./node_modules/react/index.js"),i=r("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),o=r("./node_modules/react-native-web/dist/exports/View/index.js"),l=r("./src/theme/Theme.tsx"),s=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Avatar/Avatar.tsx"),m=r("./src/components/Icon/Icon.web.tsx"),u=r("./src/components/Typography/Text.tsx"),b=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof ListItemStyles&&ListItemStyles&&ListItemStyles===Object(ListItemStyles)&&Object.isExtensible(ListItemStyles)&&Object.defineProperty(ListItemStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemStyles",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof GetListItemStyles&&GetListItemStyles&&GetListItemStyles===Object(GetListItemStyles)&&Object.isExtensible(GetListItemStyles)&&Object.defineProperty(GetListItemStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetListItemStyles",filename:"src/components/ListItem/ListItem.styles.ts"}});var d=function(e,t){var r=e.isDisabled;return{descriptionStyle:{},imageWrapperStyle:{marginRight:8},leftWrapperStyle:{alignItems:"center",flexDirection:"row"},rightWrapperStyle:{position:"absolute",right:0,zIndex:2},textWrapperStyle:{justifyContent:"center"},titleStyle:{},touchableStyle:Object(b.a)({backgroundColor:t.colors.background.content,height:72,justifyContent:"center"},r?{backgroundColor:t.colors.background.greyDark}:{}),wrapperStyle:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getListItemStyles",filename:"src/components/ListItem/ListItem.styles.ts"}}),r.d(t,"a",function(){return p});var f="/home/travis/build/WeTrustPlatform/paramount/src/components/ListItem/ListItem.tsx";"undefined"!==typeof ListItemProps&&ListItemProps&&ListItemProps===Object(ListItemProps)&&Object.isExtensible(ListItemProps)&&Object.defineProperty(ListItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemProps",filename:"src/components/ListItem/ListItem.tsx"}});var p=function(e){var t=e.avatarProps,r=e.getStyles,b=e.isDisabled,p=void 0!==b&&b,y=e.title,g=e.description,h=e.onPress,j=e.rightNode,x=e.leftNode,O=e.testID,_=e.accessibilityHint,S=e.accessibilityLabel,v=e.accessible,T=void 0===v||v,C=Object(l.a)(),P=Object(s.a)(d,r,C.components.getListItemStyles)(e,C),E=P.imageWrapperStyle,w=P.leftWrapperStyle,k=P.textWrapperStyle,F=P.touchableStyle,I=P.titleStyle,z=P.descriptionStyle,N=P.rightWrapperStyle,A=P.wrapperStyle;return n.createElement(i.a,{disabled:p,style:F,testID:O,onPress:h,accessibilityHint:_,accessibilityLabel:S,accessible:T,__source:{fileName:f,lineNumber:105}},n.createElement(o.a,{style:A,__source:{fileName:f,lineNumber:114}},n.createElement(o.a,{style:w,__source:{fileName:f,lineNumber:115}},x||t?n.createElement(o.a,{style:E,__source:{fileName:f,lineNumber:117}},x||n.createElement(c.a,Object(a.a)({size:"small"},t,{__source:{fileName:f,lineNumber:118}}))):null,n.createElement(o.a,{style:k,__source:{fileName:f,lineNumber:121}},y?"string"===typeof y?n.createElement(u.a,{getStyles:function(){return{textStyle:I}},size:"large",__source:{fileName:f,lineNumber:124}},y):y:null,g?"string"===typeof g?n.createElement(u.a,{getStyles:function(){return{textStyle:z}},size:"medium",color:"muted",__source:{fileName:f,lineNumber:136}},g):g:null)),null===j?null:n.createElement(o.a,{style:N,__source:{fileName:f,lineNumber:150}},j||n.createElement(m.a,{color:"default",size:24,name:"chevron-right",__source:{fileName:f,lineNumber:152}}))))};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItem",filename:"src/components/ListItem/ListItem.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return i}),r.d(t,"c",function(){return l});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var n=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||t}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var o=function(e){return function(t){return e[t]||{fontSize:t}}};o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e,t){var r=e.color,l=void 0===r?"default":r,s=e.size,c=void 0===s?"medium":s,m=e.align,u=void 0===m?"left":m,b=e.weight,d=e.isItalic,f=void 0!==d&&d,p=e.transform,y=o(t.textSizes)(c);return{textStyle:Object(a.a)({},y,{color:i(t.colors.text)(l),fontFamily:t.fontFamilies.text,fontWeight:n(t.fontWeights)(b)||y.fontWeight,textAlign:u},f&&{fontStyle:"italic"},p&&{textTransform:p})}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return m});var a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/react/index.js"),o=r("./node_modules/react-native-web/dist/exports/Text/index.js"),l=r("./src/theme/Theme.tsx"),s=r("./src/utils/mergeStyles.ts"),c=r("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var m=function(e){var t=e.children,r=(e.color,e.size,e.align,e.weight,e.getStyles),m=(e.isItalic,e.transform,Object(n.a)(e,["children","color","size","align","weight","getStyles","isItalic","transform"])),u=Object(l.a)(),b=Object(s.a)(c.c,r,u.components.getTextStyles)(e,u).textStyle;return i.createElement(o.a,Object(a.a)({style:b},m,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:75}}),t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,r){"use strict";var a=r("./node_modules/deepmerge/dist/cjs.js"),n=r.n(a),i=r("./node_modules/react/index.js"),o=r.n(i),l=r("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},m={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},u={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},b={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},d={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var y={small:4,medium:4,large:4},g={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:u.lightest,secondaryDefault:u.base,secondaryDark:u.dark,dangerLight:m.lightest,dangerDefault:m.base,dangerDark:m.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:d.lightest,successDefault:d.base,successDark:d.dark,warningLight:u.lightest,warningDefault:u.base,warningDark:u.dark},border:{default:s.light,primary:f.darkest,secondary:u.darkest,danger:m.darkest,info:c.darkest,success:d.darkest,warning:u.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:u.base,secondaryText:"white",danger:m.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:u.darkest,danger:m.darkest,info:c.darkest,success:d.darkest,warning:u.darkest}},h=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],j={colors:g,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:m.base,color:"white"},orange:{backgroundColor:u.base,color:"white"},yellow:{backgroundColor:b.base,color:b.darkest},green:{backgroundColor:d.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:m.light,color:m.darkest},orange:{backgroundColor:u.light,color:u.darkest},yellow:{backgroundColor:b.light,color:b.darkest},green:{backgroundColor:d.light,color:d.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===l.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:h,controlBorderRadius:y,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:y.medium},roundedBottom:{borderBottomLeftRadius:y.medium,borderBottomRightRadius:y.medium},roundedLeft:{borderBottomLeftRadius:y.medium,borderTopLeftRadius:y.medium},roundedRight:{borderBottomRightRadius:y.medium,borderTopRightRadius:y.medium},roundedTop:{borderTopLeftRadius:y.medium,borderTopRightRadius:y.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),r.d(t,"a",function(){return S});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var x=o.a.createContext(j);"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?n()(j,e):j};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var _=function(e){var t=e.children,r=e.value,a=O(void 0===r?j:r);return o.a.createElement(x.Provider,{value:a,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:317}},t)};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var S=function(){return o.a.useContext(x)};"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var a=r("./node_modules/deepmerge/dist/cjs.js"),n=r.n(a);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var i=function(e,t,r){return function(a,i){var o=[e(a,i)];return r&&o.push(r(a,i)),t&&o.push(t(a,i)),n.a.all(o)}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=16.508d715af73dbca3cb87.js.map