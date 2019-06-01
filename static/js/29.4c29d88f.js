(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./src/components/Avatar/Avatar.mdx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=m;var s=r(a("./node_modules/@babel/runtime/helpers/extends.js")),n=r(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=(r(a("./node_modules/react/index.js")),a("./node_modules/@mdx-js/react/dist/index.es.js")),l=a("./node_modules/docz/dist/index.esm.js"),i=a("./src/components/Avatar/Avatar.tsx"),c={},v="wrapper";function m(e){var t=e.components,a=(0,n.default)(e,["components"]);return(0,o.mdx)(v,(0,s.default)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"avatar"},"Avatar"),(0,o.mdx)("h3",{id:"usage"},"Usage"),(0,o.mdx)(l.Playground,{__position:0,__code:'<Avatar\n  name="Bill Gates"\n  source={{ uri: \'https://picsum.photos/200/200\' }}\n  size={40}\n  isSolid={false}\n  color="automatic"\n  getInitials={(name, fallback) => `${name.charAt(0)}${name.charAt(5)}`}\n  getStyles={(props, theme) => ({\n    boxStyle: {},\n    textStyle: {},\n    imageStyle: {},\n  })}\n/>',__scope:{props:this?this.props:a,Playground:l.Playground,Props:l.Props,Avatar:i.Avatar},mdxType:"Playground"},(0,o.mdx)(i.Avatar,{name:"Bill Gates",source:{uri:"https://picsum.photos/200/200"},size:40,isSolid:!1,color:"automatic",getInitials:function(e,t){return"".concat(e.charAt(0)).concat(e.charAt(5))},getStyles:function(e,t){return{boxStyle:{},textStyle:{},imageStyle:{}}},mdxType:"Avatar"})),(0,o.mdx)("h3",{id:"automatic-name-usage"},"Automatic name usage"),(0,o.mdx)(l.Playground,{__position:1,__code:'<Avatar name="Bill Gates" />',__scope:{props:this?this.props:a,Playground:l.Playground,Props:l.Props,Avatar:i.Avatar},mdxType:"Playground"},(0,o.mdx)(i.Avatar,{name:"Bill Gates",mdxType:"Avatar"})),(0,o.mdx)("h3",{id:"props"},"Props"),(0,o.mdx)(l.Props,{of:i.Avatar,mdxType:"Props"}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Avatar/Avatar.mdx"}}),m.isMDXComponent=!0},"./src/components/Avatar/Avatar.styles.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getAvatarStyles=t.hashCode=t.getAvatarVariables=void 0;var s=r(a("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof AvatarVariables&&AvatarVariables&&AvatarVariables===Object(AvatarVariables)&&Object.isExtensible(AvatarVariables)&&Object.defineProperty(AvatarVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarVariables",filename:"src/components/Avatar/Avatar.styles.ts"}});var n=function(e){return{box:{alignItems:"center",borderRadius:9999,display:"flex",justifyContent:"center",overflow:"hidden",position:"relative"},image:{height:"100%",width:"100%"},text:{},fills:e.fills}};t.getAvatarVariables=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAvatarVariables",filename:"src/components/Avatar/Avatar.styles.ts"}});var o=function(e){var t=String(e),a=0;if(0===t.trim().length)return a;for(var r=0;r<t.length;r++)a=(a<<5)-a+t.charCodeAt(r),a&=a;return Math.abs(a)};t.hashCode=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hashCode",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarColor&&AvatarColor&&AvatarColor===Object(AvatarColor)&&Object.isExtensible(AvatarColor)&&Object.defineProperty(AvatarColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarColor",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarStylesProps&&AvatarStylesProps&&AvatarStylesProps===Object(AvatarStylesProps)&&Object.isExtensible(AvatarStylesProps)&&Object.defineProperty(AvatarStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarStylesProps",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarStyles&&AvatarStyles&&AvatarStyles===Object(AvatarStyles)&&Object.isExtensible(AvatarStyles)&&Object.defineProperty(AvatarStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}});var l=function(e,t){var a=t.isSolid,r=t.color,s=t.hashValue,n=e[a?"solid":"subtle"];if("automatic"===r){var o=Object.keys(n);return n[o[s%o.length]]}return n[r]};"undefined"!==typeof GetAvatarStyles&&GetAvatarStyles&&GetAvatarStyles===Object(GetAvatarStyles)&&Object.isExtensible(GetAvatarStyles)&&Object.defineProperty(GetAvatarStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetAvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}});var i=function(e,t){var a,r=e.name,i=e.color,c=e.hashValue,v=e.isSolid,m=e.size,u=void 0===m?24:m,d=e.sizeLimitOneCharacter,p=void 0===d?20:d,b=n(t),y=b.fills;if("automatic"===i){var A=o(c||r);a=l(b.fills,{color:i,hashValue:A,isSolid:v})}else a=l(y,{color:i,isSolid:v,hashValue:0});var f=function(e,t){return e<=t?Math.ceil(e/2.2):Math.ceil(e/2.6)}(u,p);return{boxStyle:(0,s.default)({},b.box,{backgroundColor:a.backgroundColor,height:u,width:u}),textStyle:(0,s.default)({},b.text,{color:a.color,fontSize:f,lineHeight:f}),imageStyle:b.image}};t.getAvatarStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}})},"./src/components/Avatar/Avatar.tsx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0;var s=r(a("./node_modules/react/index.js")),n=a("./node_modules/react-native-web/dist/index.js"),o=a("./src/theme/index.ts"),l=a("./src/utils/mergeStyles.ts"),i=a("./src/components/Typography/index.ts"),c=a("./src/components/Avatar/Avatar.styles.ts");"undefined"!==typeof GetInitialsType&&GetInitialsType&&GetInitialsType===Object(GetInitialsType)&&Object.isExtensible(GetInitialsType)&&Object.defineProperty(GetInitialsType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetInitialsType",filename:"src/components/Avatar/Avatar.tsx"}});var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t};"undefined"!==typeof AvatarProps&&AvatarProps&&AvatarProps===Object(AvatarProps)&&Object.isExtensible(AvatarProps)&&Object.defineProperty(AvatarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarProps",filename:"src/components/Avatar/Avatar.tsx"}});var m=function(e){var t=e.source,a=e.size,r=void 0===a?48:a,m=e.name,u=e.isSolid,d=void 0!==u&&u,p=e.hashValue,b=e.getInitials,y=void 0===b?v:b,A=e.color,f=void 0===A?"automatic":A,h=e.forceShowInitials,g=void 0!==h&&h,x=e.sizeLimitOneCharacter,j=void 0===x?20:x,S=e.getStyles,_=e.testID,P=(0,o.useTheme)(),O=!t||!1,C=y(m);r<=j&&(C=C.substring(0,1));var G=(0,l.mergeStyles)(c.getAvatarStyles,S)({color:f,hashValue:p,isSolid:d,name:m,size:r,sizeLimitOneCharacter:j},P),V=G.boxStyle,T=G.textStyle,E=G.imageStyle;return s.createElement(n.View,{style:V,testID:_},(O||g)&&s.createElement(i.Text,{getStyles:function(){return{textStyle:T}}},C),!O&&!!t&&s.createElement(n.Image,{source:t,style:E}))};t.Avatar=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Avatar",filename:"src/components/Avatar/Avatar.tsx"}})}}]);
//# sourceMappingURL=29.07e7feb6eef9113530b1.js.map