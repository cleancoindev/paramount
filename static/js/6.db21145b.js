(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/components/Alert/Alert.styles.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getAlertStyles=t.alertVariables=void 0;var r=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=o(n("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof AlertStyles&&AlertStyles&&AlertStyles===Object(AlertStyles)&&Object.isExtensible(AlertStyles)&&Object.defineProperty(AlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertStyles",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof AlertSeparatedVariables&&AlertSeparatedVariables&&AlertSeparatedVariables===Object(AlertSeparatedVariables)&&Object.isExtensible(AlertSeparatedVariables)&&Object.defineProperty(AlertSeparatedVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertSeparatedVariables",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof AlertVariables&&AlertVariables&&AlertVariables===Object(AlertVariables)&&Object.isExtensible(AlertVariables)&&Object.defineProperty(AlertVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertVariables",filename:"src/components/Alert/Alert.styles.ts"}});var a=function(e){return{body:{flex:1},container:(0,s.default)({backgroundColor:e.colors.background.content,borderLeftWidth:5,borderRadius:e.controlBorderRadius.medium,display:"flex",flexDirection:"row",padding:16},e.elevations[2]),message:{},title:{},danger:{body:{},container:{borderLeftColor:e.colors.border.danger},message:{},title:{}},info:{body:{},container:{borderLeftColor:e.colors.border.info},message:{},title:{}},success:{body:{},container:{borderLeftColor:e.colors.border.success},message:{},title:{}},warning:{body:{},container:{borderLeftColor:e.colors.border.warning},message:{},title:{}}}};t.alertVariables=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"alertVariables",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof AlertStyleProps&&AlertStyleProps&&AlertStyleProps===Object(AlertStyleProps)&&Object.isExtensible(AlertStyleProps)&&Object.defineProperty(AlertStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertStyleProps",filename:"src/components/Alert/Alert.styles.ts"}}),"undefined"!==typeof GetAlertStyles&&GetAlertStyles&&GetAlertStyles===Object(GetAlertStyles)&&Object.isExtensible(GetAlertStyles)&&Object.defineProperty(GetAlertStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}});var i=function(e,t){var n=e.intent,o=a(t),i=o.container,l=o.body,c=o.title,u=o.message,d=(0,r.default)(o,["container","body","title","message"])[n];return{bodyStyle:(0,s.default)({},l,d.body),containerStyle:(0,s.default)({},i,d.container),textStyle:(0,s.default)({},u,d.message),titleStyle:(0,s.default)({},c,d.title)}};t.getAlertStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getAlertStyles",filename:"src/components/Alert/Alert.styles.ts"}})},"./src/components/Alert/Alert.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Alert=void 0;var r=o(n("./node_modules/react/index.js")),s=n("./node_modules/react-native-web/dist/index.js"),a=n("./src/theme/index.ts"),i=n("./src/utils/mergeStyles.ts"),l=n("./src/components/Box/index.ts"),c=n("./src/components/Icon/index.ts"),u=n("./src/components/Typography/index.ts"),d=n("./src/components/Alert/Alert.styles.ts");"undefined"!==typeof AlertProps&&AlertProps&&AlertProps===Object(AlertProps)&&Object.isExtensible(AlertProps)&&Object.defineProperty(AlertProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AlertProps",filename:"src/components/Alert/Alert.tsx"}});var m=function(e){var t=e.title,n=e.description,o=e.component,m=e.onClose,p=e.isCloseable,f=void 0!==p&&p,b=e.icon,y=e.intent,g=void 0===y?"info":y,x=e.getStyles,j=e.testID,T=(0,a.useTheme)(),_=(0,i.mergeStyles)(d.getAlertStyles,x)({intent:g},T),v=_.containerStyle,P=_.bodyStyle;return r.createElement(s.View,{style:v,testID:j},b||r.createElement(l.Box,{paddingRight:16,justifyContent:"center"},function(e){switch(e){case"success":return r.createElement(c.Icon,{name:"check-circle",size:24,color:"success"});case"warning":return r.createElement(c.Icon,{name:"alert-triangle",size:24,color:"warning"});case"danger":return r.createElement(c.Icon,{name:"alert-circle",size:24,color:"danger"});default:return r.createElement(c.Icon,{name:"info",size:24,color:"info"})}}(g)),o||r.createElement(s.View,{style:P},r.createElement(u.Text,{weight:"bold"},t),r.createElement(u.Text,null,n)),f&&r.createElement(s.TouchableOpacity,{onPress:m},r.createElement(l.Box,{paddingLeft:16},r.createElement(c.Icon,{name:"x",size:24,color:T.colors.text.default}))))};t.Alert=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Alert",filename:"src/components/Alert/Alert.tsx"}})},"./src/components/Alert/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Alert/Alert.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Button/Button.styles.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getButtonStyles=t.getButtonVariables=void 0;var r=o(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n("./src/components/Button/changeColor.ts");"undefined"!==typeof ButtonColorProps&&ButtonColorProps&&ButtonColorProps===Object(ButtonColorProps)&&Object.isExtensible(ButtonColorProps)&&Object.defineProperty(ButtonColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearances&&ButtonAppearances&&ButtonAppearances===Object(ButtonAppearances)&&Object.isExtensible(ButtonAppearances)&&Object.defineProperty(ButtonAppearances,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearances",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonAppearance&&ButtonAppearance&&ButtonAppearance===Object(ButtonAppearance)&&Object.isExtensible(ButtonAppearance)&&Object.defineProperty(ButtonAppearance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonAppearance",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof SizeStyles&&SizeStyles&&SizeStyles===Object(SizeStyles)&&Object.isExtensible(SizeStyles)&&Object.defineProperty(SizeStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SizeStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSizes&&ButtonSizes&&ButtonSizes===Object(ButtonSizes)&&Object.isExtensible(ButtonSizes)&&Object.defineProperty(ButtonSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSizes",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonSize&&ButtonSize&&ButtonSize===Object(ButtonSize)&&Object.isExtensible(ButtonSize)&&Object.defineProperty(ButtonSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonSize",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonVariables&&ButtonVariables&&ButtonVariables===Object(ButtonVariables)&&Object.isExtensible(ButtonVariables)&&Object.defineProperty(ButtonVariables,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonVariables",filename:"src/components/Button/Button.styles.ts"}});var i=function(e){return{appearances:{minimal:{default:{backgroundColor:e.colors.background.content,color:e.colors.text.default},danger:{backgroundColor:e.colors.background.content,color:e.colors.text.danger},primary:{backgroundColor:e.colors.background.content,color:e.colors.text.primary},secondary:{backgroundColor:e.colors.background.content,color:e.colors.text.secondary}},primary:{default:{backgroundColor:e.colors.button.default,color:e.colors.button.defaultText,loadingBackgroundColor:e.colors.background.overlay},danger:{backgroundColor:e.colors.button.danger,color:e.colors.button.dangerText,loadingBackgroundColor:e.colors.background.dangerLight},primary:{backgroundColor:e.colors.button.primary,color:e.colors.button.primaryText,loadingBackgroundColor:e.colors.background.primaryLight},secondary:{backgroundColor:e.colors.button.secondary,color:e.colors.button.secondaryText,loadingBackgroundColor:e.colors.background.secondaryLight}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3,color:e.colors.text.default},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3,color:e.colors.text.danger},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3,color:e.colors.text.primary},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3,color:e.colors.text.secondary}}},disabled:{backgroundColor:e.colors.button.disabled,color:e.colors.text.muted},sizes:{small:{borderRadius:e.controlBorderRadius.small,fontSize:e.textSizes.small.fontSize||14,height:e.controlHeights.small,paddingLeft:2*e.controlPaddings.small,paddingRight:2*e.controlPaddings.small},medium:{borderRadius:e.controlBorderRadius.medium,fontSize:e.textSizes.medium.fontSize||16,height:e.controlHeights.medium,paddingLeft:2*e.controlPaddings.medium,paddingRight:2*e.controlPaddings.medium},large:{borderRadius:e.controlBorderRadius.large,fontSize:e.textSizes.large.fontSize||20,height:e.controlHeights.large,paddingLeft:2*e.controlPaddings.large,paddingRight:2*e.controlPaddings.large}}}};t.getButtonVariables=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonVariables",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStyles&&ButtonStyles&&ButtonStyles===Object(ButtonStyles)&&Object.isExtensible(ButtonStyles)&&Object.defineProperty(ButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStyles",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof ButtonStylesProps&&ButtonStylesProps&&ButtonStylesProps===Object(ButtonStylesProps)&&Object.isExtensible(ButtonStylesProps)&&Object.defineProperty(ButtonStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonStylesProps",filename:"src/components/Button/Button.styles.ts"}}),"undefined"!==typeof GetButtonStyles&&GetButtonStyles&&GetButtonStyles===Object(GetButtonStyles)&&Object.isExtensible(GetButtonStyles)&&Object.defineProperty(GetButtonStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetButtonStyles",filename:"src/components/Button/Button.styles.ts"}});var l=function(e,t){var n=e.appearance,o=e.color,l=e.size,c=e.isDisabled,u=e.isLoading,d=e.isInline,m=e.iconBefore,p=e.iconAfter,f=i(t),b=f.appearances,y=f.sizes,g=f.disabled,x=(0,s.default)(f,["appearances","sizes","disabled"]),j=b[n][o],T=j.color,_=j.loadingBackgroundColor,v=(0,s.default)(j,["color","loadingBackgroundColor"]),P=y[l],O=P.fontSize,S=(0,s.default)(P,["fontSize"]),B=g.color,h=(0,s.default)(g,["color"]);return{buttonStyle:(0,r.default)({},c?(0,r.default)({},h,S):(0,r.default)({},S,x,v,u?{backgroundColor:_}:{}),d?{alignSelf:"flex-start",flexDirection:"row",flexWrap:"wrap"}:{}),focusColor:"minimal"===n||"outline"===n?t.colors.button.default:(0,a.darken)(v.backgroundColor,.05),textStyle:{alignItems:"center",color:c?B:T,display:"flex",fontSize:O,fontWeight:"600",justifyContent:"center",textAlign:"center"},innerButtonWrapperStyle:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"},buttonContentWrapperStyle:{paddingLeft:m?8:0,paddingRight:p?8:0}}};t.getButtonStyles=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getButtonStyles",filename:"src/components/Button/Button.styles.ts"}})},"./src/components/Button/Button.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Button=void 0;var s=r(n("./node_modules/@babel/runtime/helpers/extends.js")),a=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=o(n("./node_modules/react/index.js")),l=n("./node_modules/react-native-web/dist/index.js"),c=n("./src/theme/index.ts"),u=n("./src/utils/mergeStyles.ts"),d=n("./src/components/Loading/index.ts"),m=n("./src/components/Typography/index.ts"),p=n("./src/components/Button/Button.styles.ts");"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var f=function(e){var t=e.appearance,n=void 0===t?"primary":t,o=(e.title,e.color),r=void 0===o?"primary":o,d=e.getStyles,m=(e.icon,e.iconAfter),f=e.iconBefore,y=(e.iconLoading,e.isActive,e.isDisabled),g=void 0!==y&&y,x=e.isInline,j=void 0!==x&&x,T=e.isLoading,_=void 0!==T&&T,v=e.onPress,P=void 0===v?function(){}:v,O=e.size,S=void 0===O?"medium":O,B=e.testID,h=(0,a.default)(e,["appearance","title","color","getStyles","icon","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","testID"]),A=(0,c.useTheme)(),C=(0,u.mergeStyles)(p.getButtonStyles,d)({appearance:n,color:r,iconAfter:m,iconBefore:f,isDisabled:g,isInline:j,isLoading:_,size:S},A),E=C.buttonStyle,D=C.textStyle,k=C.focusColor,w=C.innerButtonWrapperStyle,I=C.buttonContentWrapperStyle;return i.createElement(l.TouchableHighlight,(0,s.default)({accessible:!0,accessibilityRole:"button",underlayColor:k,disabled:!(!g&&!_),onPress:P,style:E,testID:B},h),i.createElement(l.View,{style:w},f,i.createElement(l.View,{style:I},i.createElement(b,(0,s.default)({},e,{textStyle:D}))),m))};t.Button=f,f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonContentProps&&ButtonContentProps&&ButtonContentProps===Object(ButtonContentProps)&&Object.isExtensible(ButtonContentProps)&&Object.defineProperty(ButtonContentProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonContentProps",filename:"src/components/Button/Button.tsx"}});var b=function(e){var t=e.isLoading,n=e.iconLoading,o=e.icon,r=e.title,s=e.textStyle;return t?n||i.createElement(d.LoadingDots,{color:s.color}):o||(r?i.createElement(m.Text,{getStyles:function(){return{textStyle:s}}},r):null)}},"./src/components/Button/changeColor.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.lighten=t.darken=void 0;var n=function(e,t){for(e+="";e.length<t;)e="0"+e;return e},o=function(e,t,o){e=(e=e.replace(/^\s*|\s*$/,"")).replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,"#$1$1$2$2$3$3");var r=Math.round(256*t)*(o?-1:1),s="(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])",a=e.match(new RegExp("^rgba?\\(\\s*"+s+"\\s*,\\s*"+s+"\\s*,\\s*"+s+"(?:\\s*,\\s*(0|1|0?\\.\\d+))?\\s*\\)$","i")),i=a&&null!=a[4]?a[4]:null,l=a?[a[1],a[2],a[3]]:e.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i,function(e,t,n,o){return parseInt(t,16)+","+parseInt(n,16)+","+parseInt(o,16)}).split(/,/);return a?"rgb"+(null!==i?"a":"")+"("+Math[o?"max":"min"](parseInt(l[0],10)+r,o?0:255)+", "+Math[o?"max":"min"](parseInt(l[1],10)+r,o?0:255)+", "+Math[o?"max":"min"](parseInt(l[2],10)+r,o?0:255)+(null!==i?", "+i:"")+")":["#",n(Math[o?"max":"min"](parseInt(l[0],10)+r,o?0:255).toString(16),2),n(Math[o?"max":"min"](parseInt(l[1],10)+r,o?0:255).toString(16),2),n(Math[o?"max":"min"](parseInt(l[2],10)+r,o?0:255).toString(16),2)].join("")},r=function(e,t){return o(e,t,!0)};t.darken=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"darken",filename:"src/components/Button/changeColor.ts"}});var s=function(e,t){return o(e,t,!1)};t.lighten=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"lighten",filename:"src/components/Button/changeColor.ts"}})},"./src/components/Button/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Button/Button.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Icon/Icon.web.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;var r=o(n("./node_modules/react/index.js")),s=o(n("./node_modules/react-icons/fi/index.esm.js")),a=n("./src/theme/index.ts"),i=n("./src/components/Typography/Text.styles.ts");var l=function(e){var t=e.name,n=e.color,o=e.size,l=(0,a.useTheme)(),c=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(c,{color:n?(0,i.getTextColor)(l.colors.text)(n):n,size:o})};t.Icon=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Icon/Icon.web.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Loading/LoadingDots.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingDots=void 0;var s=r(n("./node_modules/@babel/runtime/regenerator/index.js")),a=r(n("./node_modules/@babel/runtime/helpers/asyncToGenerator.js")),i=o(n("./node_modules/react/index.js")),l=n("./node_modules/react-native-web/dist/index.js"),c=n("./node_modules/react-spring/native.cjs.js"),u=(0,c.animated)(l.View);"undefined"!==typeof LoadingDotsProps&&LoadingDotsProps&&LoadingDotsProps===Object(LoadingDotsProps)&&Object.isExtensible(LoadingDotsProps)&&Object.defineProperty(LoadingDotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDotsProps",filename:"src/components/Loading/LoadingDots.tsx"}});var d=["1","2","3"],m=function(e){var t=e.size,n=void 0===t?10:t,o=e.color,r=void 0===o?"#aaa":o,m=(0,c.useTrail)(d.length,{config:{duration:800},from:{opacity:0},reset:!0,to:function(){var e=(0,a.default)(s.default.mark(function e(t){return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,t({opacity:1});case 3:return e.next=5,t({opacity:0});case 5:e.next=0;break;case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return i.createElement(l.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},m.map(function(e,t){return i.createElement(u,{key:d[t],style:{backgroundColor:r,borderRadius:"50%",height:n,marginLeft:3,marginRight:3,opacity:e.opacity,width:n}})}))};t.LoadingDots=m,m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LoadingDots",filename:"src/components/Loading/LoadingDots.tsx"}})},"./src/components/Loading/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Loading/LoadingDots.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/components/Toast/Toast.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var r=o(n("./node_modules/@babel/runtime/helpers/extends.js")),s=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=o(n("./node_modules/react/index.js")),i=n("./node_modules/@mdx-js/react/dist/index.es.js"),l=n("./node_modules/docz/dist/index.esm.js"),c=n("./src/components/Toast/index.ts"),u=n("./src/components/Button/index.ts"),d=n("./src/components/Box/index.ts"),m={},p="wrapper";function f(e){var t=e.components,n=(0,s.default)(e,["components"]);return(0,i.mdx)(p,(0,r.default)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"toast"},"Toast"),(0,i.mdx)("p",null,"Composes ",(0,i.mdx)("inlineCode",{parentName:"p"},"Alert"),"."),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)(l.Playground,{__position:0,__code:"<ToastProvider\n  getStyles={(props, theme) => ({\n    containerStyle: {},\n  })}\n>\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <Button\n        onPress={() => {\n          notify({\n            title: 'Title',\n            description: 'Description',\n            component: null, // A React Component that overrides title and description\n            isCloseable: true,\n            offset: 16,\n            duration: 3000,\n            // ...Alert props e.g. getStyles\n          })\n        }}\n        title=\"Use\"\n      />\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:n,Playground:l.Playground,Props:l.Props,ToastContext:c.ToastContext,ToastProvider:c.ToastProvider,Toast:c.Toast,Button:u.Button,Box:d.Box},mdxType:"Playground"},(0,i.mdx)(c.ToastProvider,{getStyles:function(e,t){return{containerStyle:{}}},mdxType:"ToastProvider"},(0,i.mdx)(c.ToastContext.Consumer,null,function(e){var t=e.notify;return(0,i.mdx)(u.Button,{onPress:function(){t({title:"Title",description:"Description",component:null,isCloseable:!0,offset:16,duration:3e3})},title:"Use",mdxType:"Button"})}))),(0,i.mdx)("h3",{id:"variants"},"Variants"),(0,i.mdx)(l.Playground,{__position:1,__code:"<ToastProvider>\n  <ToastContext.Consumer>\n    {({ notify }) => (\n      <>\n        <Button\n          onPress={() =>\n            notify({\n              title: 'Title',\n              description: 'Description',\n              isCloseable: true,\n            })\n          }\n          title=\"Open default toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'success',\n              title: 'Title',\n            })\n          }\n          color=\"primary\"\n          title=\"Open success toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'danger',\n              title: 'Title',\n            })\n          }\n          color=\"danger\"\n          title=\"Open danger toast\"\n        />\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'warning',\n              title: 'Title',\n            })\n          }\n          color=\"secondary\"\n          title=\"Open warning toast\"\n        />\n      </>\n    )}\n  </ToastContext.Consumer>\n</ToastProvider>",__scope:{props:this?this.props:n,Playground:l.Playground,Props:l.Props,ToastContext:c.ToastContext,ToastProvider:c.ToastProvider,Toast:c.Toast,Button:u.Button,Box:d.Box},mdxType:"Playground"},(0,i.mdx)(c.ToastProvider,{mdxType:"ToastProvider"},(0,i.mdx)(c.ToastContext.Consumer,null,function(e){var t=e.notify;return(0,i.mdx)(a.default.Fragment,null,(0,i.mdx)(u.Button,{onPress:function(){return t({title:"Title",description:"Description",isCloseable:!0})},title:"Open default toast",mdxType:"Button"}),(0,i.mdx)(u.Button,{onPress:function(){return t({description:"Description",intent:"success",title:"Title"})},color:"primary",title:"Open success toast",mdxType:"Button"}),(0,i.mdx)(u.Button,{onPress:function(){return t({description:"Description",intent:"danger",title:"Title"})},color:"danger",title:"Open danger toast",mdxType:"Button"}),(0,i.mdx)(u.Button,{onPress:function(){return t({description:"Description",intent:"warning",title:"Title"})},color:"secondary",title:"Open warning toast",mdxType:"Button"}))}))),(0,i.mdx)("h3",{id:"props"},"Props"),(0,i.mdx)(l.Props,{of:c.Toast,mdxType:"Props"}))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Toast/Toast.mdx"}}),f.isMDXComponent=!0},"./src/components/Toast/Toast.styles.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.getToastStyles=void 0;var o=n("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof ToastStyles&&ToastStyles&&ToastStyles===Object(ToastStyles)&&Object.isExtensible(ToastStyles)&&Object.defineProperty(ToastStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastStyles",filename:"src/components/Toast/Toast.styles.ts"}}),"undefined"!==typeof GetToastStyles&&GetToastStyles&&GetToastStyles===Object(GetToastStyles)&&Object.isExtensible(GetToastStyles)&&Object.defineProperty(GetToastStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetToastStyles",filename:"src/components/Toast/Toast.styles.ts"}});var r=function(e,t){return{containerStyle:{left:32,marginBottom:0,marginLeft:"auto",marginRight:"auto",marginTop:0,maxWidth:560,position:"web"===o.Platform.OS?"fixed":"absolute",right:32,top:10,zIndex:100},wrapperStyle:{position:"absolute",width:"100%"}}};t.getToastStyles=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getToastStyles",filename:"src/components/Toast/Toast.styles.ts"}})},"./src/components/Toast/Toast.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.Toast=void 0;var s=r(n("./node_modules/@babel/runtime/helpers/extends.js")),a=r(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),i=o(n("./node_modules/react/index.js")),l=n("./src/components/Alert/index.ts");"undefined"!==typeof ToastId&&ToastId&&ToastId===Object(ToastId)&&Object.isExtensible(ToastId)&&Object.defineProperty(ToastId,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastId",filename:"src/components/Toast/Toast.tsx"}}),"undefined"!==typeof ToastSettings&&ToastSettings&&ToastSettings===Object(ToastSettings)&&Object.isExtensible(ToastSettings)&&Object.defineProperty(ToastSettings,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastSettings",filename:"src/components/Toast/Toast.tsx"}}),"undefined"!==typeof ToastInstance&&ToastInstance&&ToastInstance===Object(ToastInstance)&&Object.isExtensible(ToastInstance)&&Object.defineProperty(ToastInstance,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastInstance",filename:"src/components/Toast/Toast.tsx"}}),"undefined"!==typeof ToastProps&&ToastProps&&ToastProps===Object(ToastProps)&&Object.isExtensible(ToastProps)&&Object.defineProperty(ToastProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastProps",filename:"src/components/Toast/Toast.tsx"}});var c=function(e){var t=e.component,n=(e.id,e.onRemove),o=e.duration,r=void 0===o?3e3:o,c=(e.offset,(0,a.default)(e,["component","id","onRemove","duration","offset"]));return i.useEffect(function(){var e=setTimeout(function(){return n()},r);return function(){return clearTimeout(e)}},[]),i.createElement(i.Fragment,null,t||i.createElement(l.Alert,(0,s.default)({},c,{onClose:n})))};t.Toast=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toast",filename:"src/components/Toast/Toast.tsx"}})},"./src/components/Toast/ToastContext.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.useToast=t.ToastContext=void 0;var r=o(n("./node_modules/react/index.js"));"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastContext",filename:"src/components/Toast/ToastContext.ts"}});var s={id:"1",onRemove:function(){return null}},a={danger:function(){return s},notify:function(){return s},removeToast:function(e){},success:function(){return s},warning:function(){return s}},i=r.createContext(a);t.ToastContext=i,"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastContext",filename:"src/components/Toast/ToastContext.ts"}});var l=function(){return r.useContext(i)};t.useToast=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useToast",filename:"src/components/Toast/ToastContext.ts"}})},"./src/components/Toast/ToastProvider.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ToastProvider=void 0;var s=r(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),a=r(n("./node_modules/@babel/runtime/helpers/slicedToArray.js")),i=r(n("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),l=o(n("./node_modules/react/index.js")),c=n("./node_modules/react-native-web/dist/index.js"),u=n("./node_modules/react-spring/native.cjs.js"),d=n("./src/constants/Animation.ts"),m=n("./src/theme/index.ts"),p=n("./src/utils/mergeStyles.ts"),f=n("./src/components/Toast/Toast.tsx"),b=n("./src/components/Toast/Toast.styles.ts"),y=n("./src/components/Toast/ToastContext.ts"),g=(0,u.animated)(c.View);"undefined"!==typeof ToastProviderProps&&ToastProviderProps&&ToastProviderProps===Object(ToastProviderProps)&&Object.isExtensible(ToastProviderProps)&&Object.defineProperty(ToastProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastProviderProps",filename:"src/components/Toast/ToastProvider.tsx"}});var x,j=function(e){return!!e.id},T={toasts:[]};!function(e){e.ADD_TOAST="ADD_TOAST",e.REMOVE_TOAST="REMOVE_TOAST"}(x||(x={}));var _=function(e,t){switch(t.type){case x.ADD_TOAST:return{toasts:[].concat((0,i.default)(e.toasts),[t.payload.toast])};case x.REMOVE_TOAST:return{toasts:e.toasts.filter(function(e){return e.id!==t.payload.id})};default:throw new Error}},v=function(e){var t=e.children,n=e.getStyles,o=l.useRef(0),r=l.useReducer(_,T),i=(0,a.default)(r,2),v=i[0],P=i[1],O=(0,m.useTheme)(),S=(0,p.mergeStyles)(b.getToastStyles,n)({intent:"info"},O),B=S.containerStyle,h=S.wrapperStyle,A=l.useCallback(function(e){var t=function(e){var t=++o.current,n=j(e)?"".concat(e.id,"-").concat(t):"".concat(t);return(0,s.default)({id:n,onRemove:function(){return P({type:x.REMOVE_TOAST,payload:{id:n}})}},e)}(e);if(j(e)){var n=!0,r=!1,a=void 0;try{for(var i,l=v.toasts["function"===typeof Symbol?Symbol.iterator:"@@iterator"]();!(n=(i=l.next()).done);n=!0){var c=i.value;String(c.id).startsWith(String(e.id))&&P({payload:{id:c.id},type:x.REMOVE_TOAST})}}catch(u){r=!0,a=u}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}}return P({type:x.ADD_TOAST,payload:{toast:t}}),t},[]),C=(0,u.useTransition)(v.toasts,function(e){return e.id},{config:d.springDefaultConfig,enter:{translateY:10},from:{translateY:-500},leave:{translateY:-500}});return l.createElement(y.ToastContext.Provider,{value:{danger:function(e){return A((0,s.default)({},e,{intent:"danger"}))},notify:function(e){return A((0,s.default)({},e))},success:function(e){return A((0,s.default)({},e,{intent:"success"}))},warning:function(e){return A((0,s.default)({},e,{intent:"warning"}))},removeToast:function(e){return P({type:x.REMOVE_TOAST,payload:{id:e}})}}},t,l.createElement(c.View,{style:B},C.map(function(e){var t=e.item,n=e.props,o=e.key;return l.createElement(g,{key:o,style:(0,s.default)({},h,{transform:[{translateY:n.translateY}]})},l.createElement(f.Toast,t))})))};t.ToastProvider=v,v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToastProvider",filename:"src/components/Toast/ToastProvider.tsx"}})},"./src/components/Toast/index.ts":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n("./src/components/Toast/Toast.tsx");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})});var r=n("./src/components/Toast/ToastContext.ts");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var s=n("./src/components/Toast/ToastProvider.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})})},"./src/constants/Animation.ts":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.springDefaultConfig=void 0;var n={friction:40,tension:450};t.springDefaultConfig=n,"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"springDefaultConfig",filename:"src/constants/Animation.ts"}})}}]);
//# sourceMappingURL=6.c91b2cda408526d1cb1e.js.map