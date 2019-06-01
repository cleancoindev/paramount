(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"./src/components/Avatar/Avatar.styles.ts":function(e,t,s){var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getAvatarStyles=t.hashCode=t.getAvatarVariables=void 0;var i=r(s("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof AvatarVariables&&AvatarVariables&&AvatarVariables===Object(AvatarVariables)&&Object.isExtensible(AvatarVariables)&&Object.defineProperty(AvatarVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarVariables",filename:"src/components/Avatar/Avatar.styles.ts"}});var a=function(e){return{box:{alignItems:"center",borderRadius:9999,display:"flex",justifyContent:"center",overflow:"hidden",position:"relative"},image:{height:"100%",width:"100%"},text:{},fills:e.fills}};t.getAvatarVariables=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAvatarVariables",filename:"src/components/Avatar/Avatar.styles.ts"}});var n=function(e){var t=String(e),s=0;if(0===t.trim().length)return s;for(var r=0;r<t.length;r++)s=(s<<5)-s+t.charCodeAt(r),s&=s;return Math.abs(s)};t.hashCode=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hashCode",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarColor&&AvatarColor&&AvatarColor===Object(AvatarColor)&&Object.isExtensible(AvatarColor)&&Object.defineProperty(AvatarColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarColor",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarStylesProps&&AvatarStylesProps&&AvatarStylesProps===Object(AvatarStylesProps)&&Object.isExtensible(AvatarStylesProps)&&Object.defineProperty(AvatarStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarStylesProps",filename:"src/components/Avatar/Avatar.styles.ts"}}),"undefined"!==typeof AvatarStyles&&AvatarStyles&&AvatarStyles===Object(AvatarStyles)&&Object.isExtensible(AvatarStyles)&&Object.defineProperty(AvatarStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}});var o=function(e,t){var s=t.isSolid,r=t.color,i=t.hashValue,a=e[s?"solid":"subtle"];if("automatic"===r){var n=Object.keys(a);return a[n[i%n.length]]}return a[r]};"undefined"!==typeof GetAvatarStyles&&GetAvatarStyles&&GetAvatarStyles===Object(GetAvatarStyles)&&Object.isExtensible(GetAvatarStyles)&&Object.defineProperty(GetAvatarStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetAvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}});var l=function(e,t){var s,r=e.name,l=e.color,c=e.hashValue,m=e.isSolid,d=e.size,u=void 0===d?24:d,p=e.sizeLimitOneCharacter,b=void 0===p?20:p,f=a(t),y=f.fills;if("automatic"===l){var v=n(c||r);s=o(f.fills,{color:l,hashValue:v,isSolid:m})}else s=o(y,{color:l,isSolid:m,hashValue:0});var S=function(e,t){return e<=t?Math.ceil(e/2.2):Math.ceil(e/2.6)}(u,b);return{boxStyle:(0,i.default)({},f.box,{backgroundColor:s.backgroundColor,height:u,width:u}),textStyle:(0,i.default)({},f.text,{color:s.color,fontSize:S,lineHeight:S}),imageStyle:f.image}};t.getAvatarStyles=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAvatarStyles",filename:"src/components/Avatar/Avatar.styles.ts"}})},"./src/components/Avatar/Avatar.tsx":function(e,t,s){var r=s("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Avatar=void 0;var i=r(s("./node_modules/react/index.js")),a=s("./node_modules/react-native-web/dist/index.js"),n=s("./src/theme/index.ts"),o=s("./src/utils/mergeStyles.ts"),l=s("./src/components/Typography/index.ts"),c=s("./src/components/Avatar/Avatar.styles.ts");"undefined"!==typeof GetInitialsType&&GetInitialsType&&GetInitialsType===Object(GetInitialsType)&&Object.isExtensible(GetInitialsType)&&Object.defineProperty(GetInitialsType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetInitialsType",filename:"src/components/Avatar/Avatar.tsx"}});var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t};"undefined"!==typeof AvatarProps&&AvatarProps&&AvatarProps===Object(AvatarProps)&&Object.isExtensible(AvatarProps)&&Object.defineProperty(AvatarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarProps",filename:"src/components/Avatar/Avatar.tsx"}});var d=function(e){var t=e.source,s=e.size,r=void 0===s?48:s,d=e.name,u=e.isSolid,p=void 0!==u&&u,b=e.hashValue,f=e.getInitials,y=void 0===f?m:f,v=e.color,S=void 0===v?"automatic":v,I=e.forceShowInitials,g=void 0!==I&&I,j=e.sizeLimitOneCharacter,x=void 0===j?20:j,L=e.getStyles,h=e.testID,_=(0,n.useTheme)(),A=!t||!1,O=y(d);r<=x&&(O=O.substring(0,1));var P=(0,o.mergeStyles)(c.getAvatarStyles,L)({color:S,hashValue:b,isSolid:p,name:d,size:r,sizeLimitOneCharacter:x},_),z=P.boxStyle,E=P.textStyle,C=P.imageStyle;return i.createElement(a.View,{style:z,testID:h},(A||g)&&i.createElement(l.Text,{getStyles:function(){return{textStyle:E}}},O),!A&&!!t&&i.createElement(a.Image,{source:t,style:C}))};t.Avatar=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Avatar",filename:"src/components/Avatar/Avatar.tsx"}})},"./src/components/Avatar/index.ts":function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});var r=s("./src/components/Avatar/Avatar.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Icon/Icon.web.tsx":function(e,t,s){var r=s("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var i=r(s("./node_modules/react/index.js")),a=r(s("./node_modules/react-icons/fi/index.esm.js"));var n=function(e){var t=e.name,s=e.color,r=e.size,n=a["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return i.createElement(n,{color:s,size:r})};t.Icon=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,t,s){Object.defineProperty(t,"__esModule",{value:!0});var r=s("./src/components/Icon/Icon.web.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/ListItem/ListItem.mdx":function(e,t,s){var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var i=r(s("./node_modules/@babel/runtime/helpers/extends.js")),a=r(s("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),n=(r(s("./node_modules/react/index.js")),s("./node_modules/@mdx-js/react/dist/index.es.js")),o=s("./node_modules/docz/dist/index.esm.js"),l=s("./src/components/ListItem/ListItem.tsx"),c=s("./src/components/Avatar/index.ts"),m=s("./src/components/Icon/index.ts"),d={},u="wrapper";function p(e){var t=e.components,s=(0,a.default)(e,["components"]);return(0,n.mdx)(u,(0,i.default)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"listitem"},"ListItem"),(0,n.mdx)("h3",{id:"usage"},"Usage"),(0,n.mdx)("p",null,"For image, it composes ",(0,n.mdx)("inlineCode",{parentName:"p"},"Avatar"),", you can pass ",(0,n.mdx)("inlineCode",{parentName:"p"},"avatarProps")," provide more specific customizations"),(0,n.mdx)(o.Playground,{__position:0,__code:'<ListItem\n  onPress={() => console.log(\'Press\')}\n  rightIcon={<Icon color="#7e7e7e" size={24} name="chevron-right" />}\n  leftIcon={\n    <Avatar size={45} source={{ uri: \'https://picsum.photos/200/200\' }} />\n  }\n  label="Some label"\n  description="Some description"\n  size="large"\n  isDisabled={false}\n  getStyles={(props, theme) => ({\n    imageWrapperStyle: {},\n    leftWrapperStyle: {},\n    textWrapperStyle: {},\n    containerStyle: {},\n    textStyle: {},\n    focusBackgroundColor: {},\n    wrapperStyle: {},\n  })}\n/>',__scope:{props:this?this.props:s,Playground:o.Playground,Props:o.Props,ListItem:l.ListItem,Avatar:c.Avatar,Icon:m.Icon},mdxType:"Playground"},(0,n.mdx)(l.ListItem,{onPress:function(){return console.log("Press")},rightIcon:(0,n.mdx)(m.Icon,{color:"#7e7e7e",size:24,name:"chevron-right",mdxType:"Icon"}),leftIcon:(0,n.mdx)(c.Avatar,{size:45,source:{uri:"https://picsum.photos/200/200"},mdxType:"Avatar"}),label:"Some label",description:"Some description",size:"large",isDisabled:!1,getStyles:function(e,t){return{imageWrapperStyle:{},leftWrapperStyle:{},textWrapperStyle:{},containerStyle:{},textStyle:{},focusBackgroundColor:{},wrapperStyle:{}}},mdxType:"ListItem"})),(0,n.mdx)("h3",{id:"props"},"Props"),(0,n.mdx)(o.Props,{of:l.ListItem,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/ListItem/ListItem.mdx"}}),p.isMDXComponent=!0},"./src/components/ListItem/ListItem.styles.ts":function(e,t,s){var r=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getListItemStyles=t.getListItemVariables=void 0;var i=r(s("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=r(s("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));"undefined"!==typeof SizeStyles&&SizeStyles&&SizeStyles===Object(SizeStyles)&&Object.isExtensible(SizeStyles)&&Object.defineProperty(SizeStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeStyles",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof ListItemSizes&&ListItemSizes&&ListItemSizes===Object(ListItemSizes)&&Object.isExtensible(ListItemSizes)&&Object.defineProperty(ListItemSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemSizes",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof ListItemSize&&ListItemSize&&ListItemSize===Object(ListItemSize)&&Object.isExtensible(ListItemSize)&&Object.defineProperty(ListItemSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemSize",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof ListItemVariables&&ListItemVariables&&ListItemVariables===Object(ListItemVariables)&&Object.isExtensible(ListItemVariables)&&Object.defineProperty(ListItemVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemVariables",filename:"src/components/ListItem/ListItem.styles.ts"}});var n=function(e){return{base:{backgroundColor:e.colors.background.content,borderBottomWidth:1,borderColor:e.colors.border.default,justifyContent:"center"},disabled:{backgroundColor:e.colors.background.greyDark},focusBackgroundColor:e.colors.background.greyLight,selected:{},sizes:{small:{fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:e.controlPaddings.small,paddingRight:e.controlPaddings.small},medium:{fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:e.controlPaddings.medium,paddingRight:e.controlPaddings.medium},large:{fontSize:e.textSizes.large.fontSize||18,height:e.controlHeights.large,paddingLeft:e.controlPaddings.large,paddingRight:e.controlPaddings.large}},wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"space-between"}}};t.getListItemVariables=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getListItemVariables",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof ListItemStyles&&ListItemStyles&&ListItemStyles===Object(ListItemStyles)&&Object.isExtensible(ListItemStyles)&&Object.defineProperty(ListItemStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemStyles",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof ListItemStylesProps&&ListItemStylesProps&&ListItemStylesProps===Object(ListItemStylesProps)&&Object.isExtensible(ListItemStylesProps)&&Object.defineProperty(ListItemStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemStylesProps",filename:"src/components/ListItem/ListItem.styles.ts"}}),"undefined"!==typeof GetListItemStyles&&GetListItemStyles&&GetListItemStyles===Object(GetListItemStyles)&&Object.isExtensible(GetListItemStyles)&&Object.defineProperty(GetListItemStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetListItemStyles",filename:"src/components/ListItem/ListItem.styles.ts"}});var o=function(e,t){var s=e.size,r=e.isDisabled,o=e.isSelected,l=n(t),c=l.base,m=l.disabled,d=l.selected,u=l.focusBackgroundColor,p=l.sizes[s],b=(p.fontSize,(0,a.default)(p,["fontSize"]));return{containerStyle:(0,i.default)({},c,b,o?d:{},r?m:{}),focusBackgroundColor:u,imageWrapperStyle:{marginRight:8},leftWrapperStyle:{alignItems:"center",flexDirection:"row"},textStyle:t.textSizes[s],textWrapperStyle:{height:"100%"},wrapperStyle:l.wrapper}};t.getListItemStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getListItemStyles",filename:"src/components/ListItem/ListItem.styles.ts"}})},"./src/components/ListItem/ListItem.tsx":function(e,t,s){var r=s("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),i=s("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ListItem=void 0;var a=i(s("./node_modules/@babel/runtime/helpers/extends.js")),n=i(s("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=r(s("./node_modules/react/index.js")),l=s("./node_modules/react-native-web/dist/index.js"),c=s("./src/theme/index.ts"),m=s("./src/utils/mergeStyles.ts"),d=s("./src/components/Typography/index.ts"),u=s("./src/components/ListItem/ListItem.styles.ts");"undefined"!==typeof ListItemProps&&ListItemProps&&ListItemProps===Object(ListItemProps)&&Object.isExtensible(ListItemProps)&&Object.defineProperty(ListItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItemProps",filename:"src/components/ListItem/ListItem.tsx"}});var p=function(e){var t=e.getStyles,s=e.isDisabled,r=void 0!==s&&s,i=e.label,p=e.description,b=e.size,f=void 0===b?"medium":b,y=e.onPress,v=e.rightIcon,S=void 0===v?null:v,I=e.leftIcon,g=e.testID,j=(0,n.default)(e,["getStyles","isDisabled","label","description","size","onPress","rightIcon","leftIcon","testID"]),x=(0,c.useTheme)(),L=(0,m.mergeStyles)(u.getListItemStyles,t)({size:f,isDisabled:r},x),h=L.imageWrapperStyle,_=L.leftWrapperStyle,A=L.textWrapperStyle,O=L.containerStyle,P=L.textStyle,z=L.focusBackgroundColor,E=L.wrapperStyle;return o.createElement(l.TouchableHighlight,(0,a.default)({disabled:r,underlayColor:z,style:O,testID:g,onPress:y},j),o.createElement(l.View,{style:E},o.createElement(l.View,{style:_},o.createElement(l.View,{style:h},I),o.createElement(l.View,{style:A},o.createElement(d.Text,{getStyles:function(){return{textStyle:P}}},i),o.createElement(d.Text,{size:"small"},p))),S))};t.ListItem=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ListItem",filename:"src/components/ListItem/ListItem.tsx"}})}}]);
//# sourceMappingURL=22.07e7feb6eef9113530b1.js.map