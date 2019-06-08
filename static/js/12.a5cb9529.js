(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/components/Box/Box.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Box=t.shapeMapping=t.BASE_BORDER_RADII=void 0;var i=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=o(n("./node_modules/react/index.js")),l=n("./node_modules/react-native-web/dist/index.js"),c=n("./src/theme/index.ts");t.BASE_BORDER_RADII=4,4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};t.shapeMapping=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Box/Box.tsx"}});var u={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e){return a[e]})},d=function(e){var t=e.children,n=e.style,o=e.testID,r=(0,i.default)(e,["children","style","testID"]),a=(0,c.useTheme)(),d=[],b={};for(var f in r)if(f){var m=u[f];if(m){var p=m(r[f],a);d.push(p)}else b[f]=r[f]}return s.createElement(l.View,{testID:o,style:[b,d,n]},t)};t.Box=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Box/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Box/Box.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var r=o(n("./node_modules/react/index.js")),i=o(n("./node_modules/react-icons/fi/index.esm.js")),s=n("./src/theme/index.ts"),l=n("./src/components/Typography/Text.styles.ts");var c=function(e){var t=e.name,n=e.color,o=e.size,c=(0,s.useTheme)(),a=i["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(a,{color:n?(0,l.getTextColor)(c.colors.text)(n):n,size:o})};t.Icon=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Icon/Icon.web.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Switch/Switch.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var r=o(n("./node_modules/@babel/runtime/helpers/extends.js")),i=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=(o(n("./node_modules/react/index.js")),n("./node_modules/@mdx-js/react/dist/index.es.js")),l=n("./node_modules/docz/dist/index.esm.js"),c=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),a=n("./src/components/Switch/index.ts"),u=n("./src/components/Box/index.ts"),d={},b="wrapper";function f(e){var t=e.components,n=(0,i.default)(e,["components"]);return(0,s.mdx)(b,(0,r.default)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"switch"},"Switch"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(l.Playground,{__position:0,__code:"<Box>\n  <Toggle initial={true}>\n    {({ on, toggle }) => (\n      <Switch\n        isSwitchedOn={on}\n        onChange={toggle}\n        isDisabled={false}\n        onIcon={null}\n        offIcon={null}\n        duration={300}\n        getStyles={(props, theme) => ({\n          circleStyle: {},\n          containerStyle: {},\n          backgroundColorOff: '#F5F6F7',\n          backgroundColorOn: '#67c6bb',\n          circleColorOff: 'white',\n          circleColorOn: 'white',\n        })}\n      />\n    )}\n  </Toggle>\n</Box>",__scope:{props:this?this.props:n,Playground:l.Playground,Props:l.Props,Toggle:c.Toggle,Switch:a.Switch,Box:u.Box},mdxType:"Playground"},(0,s.mdx)(u.Box,{mdxType:"Box"},(0,s.mdx)(c.Toggle,{initial:!0,mdxType:"Toggle"},function(e){var t=e.on,n=e.toggle;return(0,s.mdx)(a.Switch,{isSwitchedOn:t,onChange:n,isDisabled:!1,onIcon:null,offIcon:null,duration:300,getStyles:function(e,t){return{circleStyle:{},containerStyle:{},backgroundColorOff:"#F5F6F7",backgroundColorOn:"#67c6bb",circleColorOff:"white",circleColorOn:"white"}},mdxType:"Switch"})}))),(0,s.mdx)("h3",{id:"props"},"Props"),(0,s.mdx)(l.Props,{of:a.Switch,mdxType:"Props"}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Switch/Switch.mdx"}}),f.isMDXComponent=!0},"./src/components/Switch/Switch.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getSwitchStyles=t.getSwitchVariables=void 0,"undefined"!==typeof SwitchVariables&&SwitchVariables&&SwitchVariables===Object(SwitchVariables)&&Object.isExtensible(SwitchVariables)&&Object.defineProperty(SwitchVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchVariables",filename:"src/components/Switch/Switch.styles.ts"}});var n=function(e){return{backgroundColorOff:e.colors.background.greyDefault,backgroundColorOn:e.colors.background.primaryDefault,circleColorOff:e.colors.background.content,circleColorOn:e.colors.background.content,circle:{alignItems:"center",backgroundColor:e.colors.background.content,borderRadius:24,display:"flex",height:38,justifyContent:"center",padding:0,width:38},container:{alignItems:"center",backgroundColor:e.colors.background.greyLight,borderRadius:24,flexDirection:"row",height:44,padding:3,width:72}}};t.getSwitchVariables=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSwitchVariables",filename:"src/components/Switch/Switch.styles.ts"}}),"undefined"!==typeof SwitchStylesRequired&&SwitchStylesRequired&&SwitchStylesRequired===Object(SwitchStylesRequired)&&Object.isExtensible(SwitchStylesRequired)&&Object.defineProperty(SwitchStylesRequired,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchStylesRequired",filename:"src/components/Switch/Switch.styles.ts"}}),"undefined"!==typeof SwitchStyles&&SwitchStyles&&SwitchStyles===Object(SwitchStyles)&&Object.isExtensible(SwitchStyles)&&Object.defineProperty(SwitchStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchStyles",filename:"src/components/Switch/Switch.styles.ts"}}),"undefined"!==typeof GetSwitchStyles&&GetSwitchStyles&&GetSwitchStyles===Object(GetSwitchStyles)&&Object.isExtensible(GetSwitchStyles)&&Object.defineProperty(GetSwitchStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetSwitchStyles",filename:"src/components/Switch/Switch.styles.ts"}});var o=function(e,t){var o=n(t);return{backgroundColorOff:o.backgroundColorOff,backgroundColorOn:o.backgroundColorOn,circleColorOff:o.circleColorOff,circleColorOn:o.circleColorOn,circleStyle:o.circle,containerStyle:o.container}};t.getSwitchStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSwitchStyles",filename:"src/components/Switch/Switch.styles.ts"}})},"./src/components/Switch/Switch.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Switch=void 0;var i=r(n("./node_modules/@babel/runtime/helpers/extends.js")),s=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=o(n("./node_modules/react/index.js")),c=n("./node_modules/react-native-web/dist/index.js"),a=n("./node_modules/react-spring/native.cjs.js"),u=n("./src/constants/Animation.ts"),d=n("./src/theme/index.ts"),b=n("./src/utils/mergeStyles.ts"),f=n("./src/components/Icon/index.ts"),m=n("./src/components/Switch/Switch.styles.ts"),p=(0,a.animated)(c.View);"undefined"!==typeof SwitchProps&&SwitchProps&&SwitchProps===Object(SwitchProps)&&Object.isExtensible(SwitchProps)&&Object.defineProperty(SwitchProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SwitchProps",filename:"src/components/Switch/Switch.tsx"}});var y=function(e){var t=e.onIcon,n=e.offIcon,o=e.onChange,r=e.isSwitchedOn,y=e.getStyles,g=e.testID,S=(0,s.default)(e,["onIcon","offIcon","onChange","isSwitchedOn","getStyles","testID"]),h=(0,d.useTheme)(),x=(0,b.mergeStyles)(m.getSwitchStyles,y)({},h),j=x.circleStyle,O=x.containerStyle,_=x.backgroundColorOff,w=x.backgroundColorOn,T=x.circleColorOff,v=x.circleColorOn,P=(0,a.useSpring)({config:u.springDefaultConfig,backgroundColor:r?w:_,circleColor:r?v:T,circlePosition:r?O.width-(j.width+2*O.padding):0}),R=P.backgroundColor,C=P.circleColor,E=P.circlePosition;return l.createElement(c.TouchableOpacity,(0,i.default)({accessible:!0,accessibilityLabel:"switch",onPress:o,activeOpacity:1,style:{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"},testID:g},S),l.createElement(p,{style:[O,{backgroundColor:R}]},l.createElement(p,{style:[j,{backgroundColor:C},{transform:[{translateX:E}]}]},r?t||l.createElement(f.Icon,{name:"check",size:20,color:h.colors.text.primary}):n||l.createElement(f.Icon,{name:"x",size:20,color:h.colors.text.default}))))};t.Switch=y,y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Switch",filename:"src/components/Switch/Switch.tsx"}})},"./src/components/Switch/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Switch/Switch.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Typography/Text.styles.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getTextStyles=t.getTextSize=t.getTextColor=t.getFontWeight=t.getFontFamily=void 0;var r=o(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof TextVariables&&TextVariables&&TextVariables===Object(TextVariables)&&Object.isExtensible(TextVariables)&&Object.defineProperty(TextVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextVariables",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStylesProps&&TextStylesProps&&TextStylesProps===Object(TextStylesProps)&&Object.isExtensible(TextStylesProps)&&Object.defineProperty(TextStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStylesProps",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]}};t.getFontFamily=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontFamily",filename:"src/components/Typography/Text.styles.ts"}});var s=function(e){return function(t){if(t)return e[t]||t}};t.getFontWeight=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){return e[t]||t}};t.getTextColor=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var c=function(e){return function(t){return e[t]||{fontSize:t}}};t.getTextSize=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e,t){var n=e.size,o=e.color,a=e.fontFamily,u=e.isInline,d=e.isItalic,b=e.align,f=e.transform,m=e.weight,p=c(t.textSizes)(n);return{textStyle:(0,r.default)({},p,{color:l(t.colors.text)(o),fontFamily:i(t.fontFamilies)(a),fontWeight:s(t.fontWeights)(m)||p.fontWeight,textAlign:b},u?{alignSelf:"flex-start",flexDirection:"row"}:{},d&&{fontStyle:"italic"},f&&{textTransform:f})}};t.getTextStyles=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/constants/Animation.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.springDefaultConfig=void 0;var n={friction:40,tension:450};t.springDefaultConfig=n,"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})},"./src/utils/mergeStyles.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.mergeStyles=void 0;var r=o(n("./node_modules/deepmerge/dist/umd.js"));"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var i=function(e,t){return function(n,o){var i=e(n,o);return t?(0,r.default)(i,t(n,o)):i}};t.mergeStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=12.c91b2cda408526d1cb1e.js.map