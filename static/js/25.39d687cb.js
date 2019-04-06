(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/components/Avatar/Avatar.mdx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=r(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=r(a("./node_modules/@babel/runtime/helpers/createClass.js")),o=r(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=r(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),u=r(a("./node_modules/@babel/runtime/helpers/inherits.js")),d=r(a("./node_modules/react/index.js")),c=a("./node_modules/@mdx-js/tag/dist/index.js"),h=a("./node_modules/docz/dist/index.m.js"),p=r(a("./src/components/Avatar/Avatar.tsx")),m=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,o.default)(this,(0,l.default)(t).call(this,e))).layout=null,a}return(0,u.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,a=(0,n.default)(e,["components"]);return d.default.createElement(c.MDXTag,{name:"wrapper",components:t},d.default.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"avatar"}},"Avatar"),d.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),d.default.createElement(h.Playground,{__position:0,__code:'<Avatar\n  name="Bill Gates"\n  source={{ uri: \'https://picsum.photos/200/200\' }}\n  size={40}\n  isSolid={false}\n  color="automatic"\n  getInitials={(name, fallback) => `${name.charAt(0)}${name.charAt(5)}`}\n  getStyles={(props, theme) => ({\n    boxStyle: {},\n    textStyle: {},\n    imageStyle: {},\n  })}\n/>',__scope:{props:this?this.props:a,Avatar:p.default}},d.default.createElement(p.default,{name:"Bill Gates",source:{uri:"https://picsum.photos/200/200"},size:40,isSolid:!1,color:"automatic",getInitials:function(e,t){return"".concat(e.charAt(0)).concat(e.charAt(5))},getStyles:function(e,t){return{boxStyle:{},textStyle:{},imageStyle:{}}}})),d.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"automatic-name-usage"}},"Automatic name usage"),d.default.createElement(h.Playground,{__position:1,__code:'<Avatar name="Bill Gates" />',__scope:{props:this?this.props:a,Avatar:p.default}},d.default.createElement(p.default,{name:"Bill Gates"})),d.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),d.default.createElement(h.PropsTable,{of:p.default}))}}]),t}(d.default.Component);t.default=m},"./src/components/Avatar/Avatar.styles.ts":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getAvatarStyles=t.hashCode=t.getAvatarVariables=void 0;var n=r(a("./node_modules/@babel/runtime/helpers/objectSpread.js")),i=function(e){return{box:{alignItems:"center",borderRadius:9999,display:"flex",justifyContent:"center",overflow:"hidden",position:"relative"},image:{height:"100%",width:"100%"},text:{},fills:e.fills}};t.getAvatarVariables=i;var s=function(e){var t=String(e),a=0;if(0===t.trim().length)return a;for(var r=0;r<t.length;r++)a=(a<<5)-a+t.charCodeAt(r),a&=a;return Math.abs(a)};t.hashCode=s;var o=function(e,t){var a=t.isSolid,r=t.color,n=t.hashValue,i=e[a?"solid":"subtle"];if("automatic"===r){var s=Object.keys(i);return i[s[n%s.length]]}return i[r]};t.getAvatarStyles=function(e,t){var a,r=e.name,l=e.color,u=e.hashValue,d=e.isSolid,c=e.size,h=void 0===c?24:c,p=e.sizeLimitOneCharacter,m=void 0===p?20:p,g=i(t),f=g.fills;if("automatic"===l){var b=s(u||r);a=o(g.fills,{color:l,hashValue:b,isSolid:d})}else a=o(f,{color:l,isSolid:d,hashValue:0});var y=function(e,t){return e<=t?Math.ceil(e/2.2):Math.ceil(e/2.6)}(h,m);return{boxStyle:(0,n.default)({},g.box,{backgroundColor:a.backgroundColor,height:h,width:h}),textStyle:(0,n.default)({},g.text,{color:a.color,fontSize:y,lineHeight:y}),imageStyle:g.image}};try{i.displayName="getAvatarVariables",i.__docgenInfo={description:"",displayName:"getAvatarVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.styles.ts#getAvatarVariables"]={docgenInfo:i.__docgenInfo,name:"getAvatarVariables",path:"src/components/Avatar/Avatar.styles.ts#getAvatarVariables"})}catch(l){}try{s.displayName="hashCode",s.__docgenInfo={description:"",displayName:"hashCode",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!0,type:{name:"() => string"}},charAt:{defaultValue:null,description:"Returns the character at the specified index.\n@param pos The zero-based index of the desired character.",name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:"Returns the Unicode value of the character at the specified location.\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.",name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:"Returns a string that contains the concatenation of two or more strings.\n@param strings The strings to append to the end of the string.",name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:"Returns the position of the first occurrence of a substring.\n@param searchString The substring to search for in the string\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.",name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the last occurrence of a substring in the string.\n@param searchString The substring to search for.\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.",name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:"Determines whether two strings are equivalent in the current locale.\nDetermines whether two strings are equivalent in the current or specified locale.\n@param that String to compare to target string\n@param that String to compare to target string\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.",name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:"Matches a string with a regular expression, and returns an array containing the results of that search.\n@param regexp A variable name or string literal containing the regular expression pattern and flags.",name:"match",required:!0,type:{name:"(regexp: string | RegExp) => RegExpMatchArray"}},replace:{defaultValue:null,description:"Replaces text in a string, using a regular expression or search string.\nReplaces text in a string, using a regular expression or search string.\n@param searchValue A string to search for.\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\n@param searchValue A string to search for.\n@param replacer A function that returns the replacement text.",name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:"Finds the first substring match in a regular expression search.\n@param regexp The regular expression pattern and applicable flags.",name:"search",required:!0,type:{name:"(regexp: string | RegExp) => number"}},slice:{defaultValue:null,description:"Returns a section of a string.\n@param start The index to the beginning of the specified portion of stringObj.\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\rIf this value is not specified, the substring continues to the end of stringObj.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:"Split a string into substrings using the specified separator and return them as an array.\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\n@param limit A value used to limit the number of elements returned in the array.",name:"split",required:!0,type:{name:"(separator: string | RegExp, limit?: number) => string[]"}},substring:{defaultValue:null,description:"Returns the substring at the specified location within a String object.\n@param start The zero-based index number indicating the beginning of the substring.\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\rIf end is omitted, the characters from start through the end of the original string are returned.",name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"() => string"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"() => string"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:"Gets a substring beginning at the specified location and having the specified length.\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\n@param length The number of characters to include in the returned substring.",name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!0,type:{name:"() => string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.styles.ts#hashCode"]={docgenInfo:s.__docgenInfo,name:"hashCode",path:"src/components/Avatar/Avatar.styles.ts#hashCode"})}catch(l){}},"./src/components/Avatar/Avatar.tsx":function(e,t,a){var r=a("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Avatar=t.AvatarBase=t.globalGetInitials=void 0;var n=r(a("./node_modules/react/index.js")),i=a("./node_modules/react-native-web/dist/index.js"),s=a("./src/theme/index.ts"),o=a("./src/utils/mergeStyles.ts"),l=a("./src/components/Typography/index.ts"),u=a("./src/components/Avatar/Avatar.styles.ts"),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t};t.globalGetInitials=d;var c=function(e){var t=e.theme,a=e.source,r=e.size,s=void 0===r?48:r,c=e.name,h=e.isSolid,p=void 0!==h&&h,m=e.hashValue,g=e.getInitials,f=void 0===g?d:g,b=e.color,y=void 0===b?"automatic":b,v=e.forceShowInitials,S=void 0!==v&&v,A=e.sizeLimitOneCharacter,V=void 0===A?20:A,x=e.getStyles,C=e.testID,_=!a||!1,T=f(c);s<=V&&(T=T.substring(0,1));var q=(0,o.mergeStyles)(u.getAvatarStyles,x)({color:y,hashValue:m,isSolid:p,name:c,size:s,sizeLimitOneCharacter:V},t),R=q.boxStyle,I=q.textStyle,w=q.imageStyle;return n.createElement(i.View,{style:R,testID:C},(_||S)&&n.createElement(l.Text,{getStyles:function(){return{textStyle:I}}},T),!_&&!!a&&n.createElement(i.Image,{source:a,style:w}))};t.AvatarBase=c;var h=(0,s.withTheme)(c);t.Avatar=h;var p=h;t.default=p;try{c.displayName="AvatarBase",c.__docgenInfo={description:"",displayName:"AvatarBase",props:{source:{defaultValue:null,description:"The source attribute of the image.\nWhen it's not available, render initials instead.",name:"source",required:!1,type:{name:"ImageSourcePropType"}},size:{defaultValue:null,description:"The size of the avatar.",name:"size",required:!1,type:{name:"number"}},name:{defaultValue:null,description:"The name used for the initials and title attribute.",name:"name",required:!1,type:{name:"string"}},hashValue:{defaultValue:null,description:"The value used for the hash function.\nThe name is used as the hashValue by default.\nWhen dealing with anonymous users you should use the id instead.",name:"hashValue",required:!1,type:{name:"string"}},isSolid:{defaultValue:null,description:"When true, render a solid avatar.",name:"isSolid",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"The color used for the avatar.\nWhen the value is `automatic`, use the hash function to determine the color.",name:"color",required:!1,type:{name:'"automatic" | "neutral" | "blue" | "red" | "orange" | "yellow" | "green" | "teal" | "purple"'}},getInitials:{defaultValue:null,description:"Function to get the initials based on the name.",name:"getInitials",required:!1,type:{name:"GetInitialsType"}},forceShowInitials:{defaultValue:null,description:"When true, force show the initials.\nThis is useful in some cases when using Gravatar and transparent pngs.",name:"forceShowInitials",required:!1,type:{name:"boolean"}},sizeLimitOneCharacter:{defaultValue:null,description:"When the size is smaller than this number, use a single initial for the avatar.",name:"sizeLimitOneCharacter",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"Theme provided by ThemeProvider.",name:"theme",required:!0,type:{name:"Theme"}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetAvatarStyles, DeepPartial<AvatarStyles>>"}},testID:{defaultValue:null,description:"",name:"testID",required:!1,type:{name:"string"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Avatar/Avatar.tsx#AvatarBase"]={docgenInfo:c.__docgenInfo,name:"AvatarBase",path:"src/components/Avatar/Avatar.tsx#AvatarBase"})}catch(m){}}}]);
//# sourceMappingURL=25.d7205c1f92b4bb11febd.js.map