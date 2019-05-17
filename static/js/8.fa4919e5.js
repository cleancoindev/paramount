(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./src/components/Button/BackButton.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.BackButton=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/extends.js")),i=n(o("./node_modules/react/index.js")),a=o("./src/icons/index.ts"),l=o("./src/theme/index.ts"),d=o("./src/components/Button/Button.tsx"),c=function(e){var t=(0,l.useTheme)();return i.createElement(d.Button,(0,s.default)({appearance:"minimal",isInline:!0,iconBefore:i.createElement(a.Icon,{name:"arrow-left",size:24,color:t.colors.text.default}),size:"small"},e))};t.BackButton=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackButton",filename:"src/components/Button/BackButton.tsx"}})},"./src/components/Button/Button.styles.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var r=n(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));"undefined"!==typeof ButtonColorProps&&ButtonColorProps&&ButtonColorProps===Object(ButtonColorProps)&&Object.isExtensible(ButtonColorProps)&&Object.defineProperty(ButtonColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearances&&ButtonAppearances&&ButtonAppearances===Object(ButtonAppearances)&&Object.isExtensible(ButtonAppearances)&&Object.defineProperty(ButtonAppearances,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearance&&ButtonAppearance&&ButtonAppearance===Object(ButtonAppearance)&&Object.isExtensible(ButtonAppearance)&&Object.defineProperty(ButtonAppearance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearance",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof SizeStyles&&SizeStyles&&SizeStyles===Object(SizeStyles)&&Object.isExtensible(SizeStyles)&&Object.defineProperty(SizeStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSizes&&ButtonSizes&&ButtonSizes===Object(ButtonSizes)&&Object.isExtensible(ButtonSizes)&&Object.defineProperty(ButtonSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSizes",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSize&&ButtonSize&&ButtonSize===Object(ButtonSize)&&Object.isExtensible(ButtonSize)&&Object.defineProperty(ButtonSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSize",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonVariables&&ButtonVariables&&ButtonVariables===Object(ButtonVariables)&&Object.isExtensible(ButtonVariables)&&Object.defineProperty(ButtonVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonVariables",filename:"src/components/Button/Button.styles.ts"}});var i=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.content,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.content,color:e.colors.text.danger,focusColor:e.colors.background.greyDefault},primary:{backgroundColor:e.colors.background.content,color:e.colors.text.primary,focusColor:e.colors.background.greyDefault},secondary:{backgroundColor:e.colors.background.content,color:e.colors.text.secondary?e.colors.text.secondary:e.colors.text.default,focusColor:e.colors.background.greyDefault}},primary:{default:{backgroundColor:e.colors.background.greyLight,borderColor:e.colors.border.default,color:e.colors.text.default,focusColor:e.colors.background.greyDefault,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.background.dangerDefault,borderColor:e.colors.border.danger,color:e.colors.text.white,focusColor:e.colors.background.dangerDark,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.primaryDefault,borderColor:e.colors.border.primary,color:e.colors.text.white,focusColor:e.colors.background.primaryDark,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.secondaryDefault,borderColor:e.colors.border.secondary,color:e.colors.text.white,focusColor:e.colors.background.secondaryDark,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default,focusColor:e.colors.background.greyDefault},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger,focusColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary,focusColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary,focusColor:e.colors.background.secondaryLight}}},disabled:{backgroundColor:e.colors.background.greyDark,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:2*e.controlPaddings.small,paddingRight:2*e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:2*e.controlPaddings.medium,paddingRight:2*e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||20,height:e.controlHeights.large,paddingLeft:2*e.controlPaddings.large,paddingRight:2*e.controlPaddings.large}}}};t.getButtonVariables=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonVariables",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStyles&&ButtonStyles&&ButtonStyles===Object(ButtonStyles)&&Object.isExtensible(ButtonStyles)&&Object.defineProperty(ButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStylesProps&&ButtonStylesProps&&ButtonStylesProps===Object(ButtonStylesProps)&&Object.isExtensible(ButtonStylesProps)&&Object.defineProperty(ButtonStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStylesProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof GetButtonStyles&&GetButtonStyles&&GetButtonStyles===Object(GetButtonStyles)&&Object.isExtensible(GetButtonStyles)&&Object.defineProperty(GetButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetButtonStyles",filename:"src/components/Button/Button.styles.ts"}});var a=function(e,t){var o=e.appearance,n=e.color,a=e.size,l=e.isDisabled,d=e.isLoading,c=e.isInline,u=i(t),b=u.appearances,m=u.sizes,p=u.disabled,f=(0,s.default)(u,["appearances","sizes","disabled"]),y=b[o][n],T=y.color,g=y.focusColor,v=y.loadingBackgroundColor,x=(0,s.default)(y,["color","focusColor","loadingBackgroundColor"]),j=m[a],S=j.fontSize,_=(0,s.default)(j,["fontSize"]),P=p.color,B=(0,s.default)(p,["color"]);return{buttonStyle:(0,r.default)({},l?(0,r.default)({},B,_):(0,r.default)({},_,f,x,d?{backgroundColor:v}:{}),c?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:g,textStyle:{alignItems:"center",color:l?P:T,display:"flex",fontSize:S,fontWeight:"600",justifyContent:"center",textAlign:"center"}}};t.getButtonStyles=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonStyles",filename:"src/components/Button/Button.styles.ts"}})},"./src/components/Button/Button.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/extends.js")),i=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/react/index.js")),l=o("./node_modules/react-native-web/dist/index.js"),d=o("./src/theme/index.ts"),c=o("./src/utils/mergeStyles.ts"),u=o("./src/components/Box/index.ts"),b=o("./src/components/Loading/index.ts"),m=o("./src/components/Typography/index.ts"),p=o("./src/components/Button/Button.styles.ts");"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var f=function(e){var t=e.appearance,o=void 0===t?"primary":t,n=(e.title,e.color),r=void 0===n?"default":n,b=e.getStyles,m=(e.icon,e.iconAfter),f=e.iconBefore,T=(e.iconLoading,e.isActive,e.isDisabled),g=void 0!==T&&T,v=e.isInline,x=void 0!==v&&v,j=e.isLoading,S=void 0!==j&&j,_=e.onPress,P=void 0===_?function(){}:_,B=e.size,O=void 0===B?"medium":B,D=e.testID,h=(0,i.default)(e,["appearance","title","color","getStyles","icon","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","testID"]),C=(0,d.useTheme)(),k=(0,c.mergeStyles)(p.getButtonStyles,b)({appearance:o,color:r,isDisabled:g,isInline:x,isLoading:S,size:O},C),E=k.buttonStyle,z=k.textStyle,I=k.focusColor;return a.createElement(l.TouchableHighlight,(0,s.default)({accessible:!0,accessibilityRole:"button",underlayColor:I,disabled:!(!g&&!S),onPress:P,style:E,testID:D},h),a.createElement(l.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},f,a.createElement(u.Box,{paddingLeft:f?8:0,paddingRight:m?8:0},a.createElement(y,(0,s.default)({},e,{textStyle:z}))),m))};t.Button=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonContentProps&&ButtonContentProps&&ButtonContentProps===Object(ButtonContentProps)&&Object.isExtensible(ButtonContentProps)&&Object.defineProperty(ButtonContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonContentProps",filename:"src/components/Button/Button.tsx"}});var y=function(e){var t=e.isLoading,o=e.iconLoading,n=e.icon,r=e.title,s=e.textStyle;return t?o||a.createElement(b.LoadingDots,{color:s.color}):n||(r?a.createElement(m.Text,{getStyles:function(){return{textStyle:s}}},r):null)}},"./src/components/Button/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Button/Button.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var r=o("./src/components/Button/BackButton.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Divider/Divider.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getDividerStyles=t.getDividerColor=void 0,"undefined"!==typeof DividerStyles&&DividerStyles&&DividerStyles===Object(DividerStyles)&&Object.isExtensible(DividerStyles)&&Object.defineProperty(DividerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerStyles",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof DividerPosition&&DividerPosition&&DividerPosition===Object(DividerPosition)&&Object.isExtensible(DividerPosition)&&Object.defineProperty(DividerPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerPosition",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof DividerStylesProps&&DividerStylesProps&&DividerStylesProps===Object(DividerStylesProps)&&Object.isExtensible(DividerStylesProps)&&Object.defineProperty(DividerStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerStylesProps",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof GetDividerStyles&&GetDividerStyles&&GetDividerStyles===Object(GetDividerStyles)&&Object.isExtensible(GetDividerStyles)&&Object.defineProperty(GetDividerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDividerStyles",filename:"src/components/Divider/Divider.styles.ts"}});var o=function(e){return function(t){return e[t]||t}};t.getDividerColor=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDividerColor",filename:"src/components/Divider/Divider.styles.ts"}});var n=function(e,t){var n=e.size,r=e.color,s=e.position,i=o(t.colors.border)(r||t.colors.border.default),a={horizontal:{backgroundColor:i,height:n||1,width:"100%"},vertical:{backgroundColor:i,height:"100%",width:n||1}};return{dividerStyle:s?a[s]:a.horizontal}};t.getDividerStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDividerStyles",filename:"src/components/Divider/Divider.styles.ts"}})},"./src/components/Divider/Divider.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Divider=void 0;var r=n(o("./node_modules/react/index.js")),s=o("./node_modules/react-native-web/dist/index.js"),i=o("./src/theme/index.ts"),a=o("./src/utils/mergeStyles.ts"),l=o("./src/components/Divider/Divider.styles.ts");"undefined"!==typeof DividerProps&&DividerProps&&DividerProps===Object(DividerProps)&&Object.isExtensible(DividerProps)&&Object.defineProperty(DividerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerProps",filename:"src/components/Divider/Divider.tsx"}});var d=function(e){var t=e.size,o=e.color,n=e.position,d=void 0===n?"horizontal":n,c=e.getStyles,u=(0,i.useTheme)(),b=(0,a.mergeStyles)(l.getDividerStyles,c)({size:t,color:o,position:d},u).dividerStyle;return r.createElement(s.View,{style:b})};t.Divider=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Divider",filename:"src/components/Divider/Divider.tsx"}})},"./src/components/Divider/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Divider/Divider.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Loading/LoadingDots.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingDots=void 0;var s=r(o("./node_modules/@babel/runtime/regenerator/index.js")),i=r(o("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),a=n(o("./node_modules/react/index.js")),l=o("./node_modules/react-native-web/dist/index.js"),d=o("./node_modules/react-spring/native.cjs.js"),c=(0,d.animated)(l.View);"undefined"!==typeof LoadingDotsProps&&LoadingDotsProps&&LoadingDotsProps===Object(LoadingDotsProps)&&Object.isExtensible(LoadingDotsProps)&&Object.defineProperty(LoadingDotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDotsProps",filename:"src/components/Loading/LoadingDots.tsx"}});var u=["1","2","3"],b=function(e){var t=e.size,o=void 0===t?10:t,n=e.color,r=void 0===n?"#aaa":n,b=(0,d.useTrail)(u.length,{config:{duration:800},from:{opacity:0},reset:!0,to:function(){var e=(0,i.default)(s.default.mark(function e(t){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t({opacity:1});case 3:return e.next=5,t({opacity:0});case 5:e.next=0;break;case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return a.createElement(l.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},b.map(function(e,t){return a.createElement(c,{key:u[t],style:{backgroundColor:r,borderRadius:"50%",height:o,marginLeft:3,marginRight:3,opacity:e.opacity,width:o}})}))};t.LoadingDots=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDots",filename:"src/components/Loading/LoadingDots.tsx"}})},"./src/components/Loading/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Loading/LoadingDots.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})})},"./src/components/Tabs/Tab.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTabStyles=void 0,"undefined"!==typeof TabStyles&&TabStyles&&TabStyles===Object(TabStyles)&&Object.isExtensible(TabStyles)&&Object.defineProperty(TabStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabStyles",filename:"src/components/Tabs/Tab.styles.ts"}}),"undefined"!==typeof GetTabStyles&&GetTabStyles&&GetTabStyles===Object(GetTabStyles)&&Object.isExtensible(GetTabStyles)&&Object.defineProperty(GetTabStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTabStyles",filename:"src/components/Tabs/Tab.styles.ts"}});var o=function(e){return{buttonStyle:{borderRadius:0},containerStyle:{},dividerStyle:{borderRadius:0,bottom:0,position:"absolute"},textStyle:{}}};t.getTabStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTabStyles",filename:"src/components/Tabs/Tab.styles.ts"}})},"./src/components/Tabs/Tab.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Tab=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/extends.js")),i=r(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(o("./node_modules/react/index.js")),l=o("./node_modules/react-native-web/dist/index.js"),d=o("./src/theme/index.ts"),c=o("./src/utils/mergeStyles.ts"),u=o("./src/components/Button/index.ts"),b=o("./src/components/Divider/index.ts"),m=o("./src/components/Tabs/Tab.styles.ts");"undefined"!==typeof TabProps&&TabProps&&TabProps===Object(TabProps)&&Object.isExtensible(TabProps)&&Object.defineProperty(TabProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabProps",filename:"src/components/Tabs/Tab.tsx"}});var p=function(e){var t=e.isActive,o=void 0!==t&&t,n=e.getStyles,r=(0,i.default)(e,["isActive","getStyles"]),p=(0,d.useTheme)(),f=(0,c.mergeStyles)(m.getTabStyles,n)(p),y=f.containerStyle,T=f.dividerStyle,g=f.buttonStyle,v=f.textStyle;return a.createElement(l.View,{style:y},a.createElement(u.Button,(0,s.default)({color:o?"primary":"default",appearance:"minimal",getStyles:function(){return{buttonStyle:g,textStyle:v}}},r)),o&&a.createElement(b.Divider,{size:4,color:o?"primary":"default",getStyles:function(){return{dividerStyle:T}}}))};t.Tab=p,p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tab",filename:"src/components/Tabs/Tab.tsx"}})},"./src/components/Tabs/Tabs.mdx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=p;var r=n(o("./node_modules/@babel/runtime/helpers/extends.js")),s=n(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=(n(o("./node_modules/react/index.js")),o("./node_modules/@mdx-js/react/dist/index.es.js")),a=o("./node_modules/docz/dist/index.esm.js"),l=o("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),d=o("./node_modules/react-native-web/dist/index.js"),c=o("./src/icons/index.ts"),u=o("./src/components/Tabs/index.ts"),b={},m="wrapper";function p(e){var t=e.components,o=(0,s.default)(e,["components"]);return(0,i.mdx)(m,(0,r.default)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"tabs"},"Tabs"),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)(a.Playground,{__position:0,__code:'<Tabs\n  defaultActiveTabIndex={1}\n  onSetActiveTabIndex={index => console.log(\'Clicked\', index)}\n  activeTabIndex={undefined}\n  onPress={undefined}\n  distribution="fit" // or \'scrollable\'\n  getStyles={(props, theme) => ({\n    containerStyle: {}, // Only applied when distribution="fit"\n    tabContainerStyle: {},\n    buttonStyle: {},\n    textStyle: {},\n    dividerStyle: {},\n  })}\n>\n  <Tab title="Tab 1" />\n  <Tab title="Tab 2" />\n  <Tab title="Tab 3" />\n</Tabs>',__scope:{props:this?this.props:o,Playground:a.Playground,Props:a.Props,State:l.State,View:d.View,Icon:c.Icon,Tabs:u.Tabs,Tab:u.Tab},mdxType:"Playground"},(0,i.mdx)(u.Tabs,{defaultActiveTabIndex:1,onSetActiveTabIndex:function(e){return console.log("Clicked",e)},activeTabIndex:void 0,onPress:void 0,distribution:"fit",getStyles:function(e,t){return{containerStyle:{},tabContainerStyle:{},buttonStyle:{},textStyle:{},dividerStyle:{}}},mdxType:"Tabs"},(0,i.mdx)(u.Tab,{title:"Tab 1",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Tab 2",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Tab 3",mdxType:"Tab"}))),(0,i.mdx)("h3",{id:"controlled"},"Controlled"),(0,i.mdx)(a.Playground,{__position:1,__code:'<State initial={{ activeTabIndex: 0 }}>\n  {({ state, setState }) => (\n    <Tabs\n      distribution="scrollable"\n      activeTabIndex={state.activeTabIndex}\n      onPress={index => setState({ activeTabIndex: index })}\n    >\n      <Tab\n        icon={\n          <Icon\n            name="home"\n            size={24}\n            color={state.activeTabIndex === 0 ? \'#1b877a\' : \'#7e7e7e\'}\n          />\n        }\n      />\n      <Tab title="Tab 2" />\n      <Tab isDisabled title="Tab 3" />\n    </Tabs>\n  )}\n</State>',__scope:{props:this?this.props:o,Playground:a.Playground,Props:a.Props,State:l.State,View:d.View,Icon:c.Icon,Tabs:u.Tabs,Tab:u.Tab},mdxType:"Playground"},(0,i.mdx)(l.State,{initial:{activeTabIndex:0},mdxType:"State"},function(e){var t=e.state,o=e.setState;return(0,i.mdx)(u.Tabs,{distribution:"scrollable",activeTabIndex:t.activeTabIndex,onPress:function(e){return o({activeTabIndex:e})},mdxType:"Tabs"},(0,i.mdx)(u.Tab,{icon:(0,i.mdx)(c.Icon,{name:"home",size:24,color:0===t.activeTabIndex?"#1b877a":"#7e7e7e",mdxType:"Icon"}),mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Tab 2",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{isDisabled:!0,title:"Tab 3",mdxType:"Tab"}))})),(0,i.mdx)("h3",{id:"scrollable"},"Scrollable"),(0,i.mdx)(a.Playground,{__position:2,__code:'<Tabs distribution="scrollable">\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n  <Tab title="Unnamed Tab" />\n</Tabs>',__scope:{props:this?this.props:o,Playground:a.Playground,Props:a.Props,State:l.State,View:d.View,Icon:c.Icon,Tabs:u.Tabs,Tab:u.Tab},mdxType:"Playground"},(0,i.mdx)(u.Tabs,{distribution:"scrollable",mdxType:"Tabs"},(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}),(0,i.mdx)(u.Tab,{title:"Unnamed Tab",mdxType:"Tab"}))),(0,i.mdx)("h3",{id:"props"},"Props"),(0,i.mdx)(a.Props,{of:u.Tabs,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Tabs/Tabs.mdx"}}),p.isMDXComponent=!0},"./src/components/Tabs/Tabs.styles.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTabsStyles=void 0,"undefined"!==typeof TabsStyles&&TabsStyles&&TabsStyles===Object(TabsStyles)&&Object.isExtensible(TabsStyles)&&Object.defineProperty(TabsStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabsStyles",filename:"src/components/Tabs/Tabs.styles.ts"}}),"undefined"!==typeof GetTabsStylesProps&&GetTabsStylesProps&&GetTabsStylesProps===Object(GetTabsStylesProps)&&Object.isExtensible(GetTabsStylesProps)&&Object.defineProperty(GetTabsStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTabsStylesProps",filename:"src/components/Tabs/Tabs.styles.ts"}}),"undefined"!==typeof GetTabsStyles&&GetTabsStyles&&GetTabsStyles===Object(GetTabsStyles)&&Object.isExtensible(GetTabsStyles)&&Object.defineProperty(GetTabsStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTabsStyles",filename:"src/components/Tabs/Tabs.styles.ts"}});var o=function(e,t){return{buttonStyle:{},containerStyle:{flex:1,flexDirection:"row",justifyContent:"flex-start"},dividerStyle:{},tabContainerStyle:"fit"===e.distribution?{flex:1}:{},textStyle:{}}};t.getTabsStyles=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTabsStyles",filename:"src/components/Tabs/Tabs.styles.ts"}})},"./src/components/Tabs/Tabs.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Tabs=void 0;var s=r(o("./node_modules/@babel/runtime/helpers/objectSpread.js")),i=r(o("./node_modules/@babel/runtime/helpers/slicedToArray.js")),a=n(o("./node_modules/react/index.js")),l=o("./node_modules/react-native-web/dist/index.js"),d=o("./src/theme/index.ts"),c=o("./src/utils/mergeStyles.ts"),u=o("./src/components/Tabs/Tabs.styles.ts");"undefined"!==typeof TabsDistribution&&TabsDistribution&&TabsDistribution===Object(TabsDistribution)&&Object.isExtensible(TabsDistribution)&&Object.defineProperty(TabsDistribution,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabsDistribution",filename:"src/components/Tabs/Tabs.tsx"}}),"undefined"!==typeof TabsProps&&TabsProps&&TabsProps===Object(TabsProps)&&Object.isExtensible(TabsProps)&&Object.defineProperty(TabsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TabsProps",filename:"src/components/Tabs/Tabs.tsx"}}),"undefined"!==typeof WrapperProps&&WrapperProps&&WrapperProps===Object(WrapperProps)&&Object.isExtensible(WrapperProps)&&Object.defineProperty(WrapperProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"WrapperProps",filename:"src/components/Tabs/Tabs.tsx"}});var b=function(e){var t=e.children,o=e.activeTabIndex,n=e.defaultActiveTabIndex,r=void 0===n?0:n,b=e.onPress,m=e.onSetActiveTabIndex,p=e.getStyles,f=e.distribution,y=void 0===f?"fit":f,T=a.useState(r),g=(0,i.default)(T,2),v=g[0],x=g[1],j=(0,d.useTheme)(),S=!(!o&&!b),_=(0,c.mergeStyles)(u.getTabsStyles,p)({distribution:y},j),P=_.containerStyle,B=_.tabContainerStyle,O=_.textStyle,D=_.buttonStyle,h=_.dividerStyle,C=a.Children.map(t,function(e,t){if(!e)return null;var n={getStyles:function(){return{buttonStyle:D,containerStyle:B,dividerStyle:h,textStyle:O}}};return S?(0,s.default)({},n,{isActive:t===o,onPress:function(){return b(t)}}):(0,s.default)({},n,{isActive:t===v,onPress:function(){x(t),m&&m(t)}})}),k=a.Children.toArray(t);return"fit"===y?a.createElement(l.View,{style:P},C.map(function(e,t){return a.cloneElement(k[t],e)})):a.createElement(l.FlatList,{horizontal:!0,data:C,renderItem:function(e){var t=e.item,o=e.index;return a.cloneElement(k[o],t)}})};t.Tabs=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Tabs",filename:"src/components/Tabs/Tabs.tsx"}})},"./src/components/Tabs/index.ts":function(e,t,o){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./src/components/Tabs/Tabs.tsx");Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var r=o("./src/components/Tabs/Tab.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/icons/Icon.web.tsx":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(o("./node_modules/react/index.js")),s=n(o("./node_modules/react-icons/fi/index.esm.js"));t.default=function(e){var t=e.name,o=e.color,n=e.size,i=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(i,{color:o,size:n})}},"./src/icons/index.ts":function(e,t,o){var n=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return r.default}});var r=n(o("./src/icons/Icon.web.tsx"));"undefined"!==typeof Icon&&Icon&&Icon===Object(Icon)&&Object.isExtensible(Icon)&&Object.defineProperty(Icon,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/icons/index.ts"}})}}]);
//# sourceMappingURL=8.3d7113d4a0c0debd4275.js.map