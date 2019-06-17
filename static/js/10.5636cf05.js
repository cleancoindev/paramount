(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Checkbox/Checkbox.mdx":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return u});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),l=(o("./node_modules/react/index.js"),o("./node_modules/@mdx-js/react/dist/index.es.js")),i=o("./node_modules/docz/dist/index.esm.js"),a=o("./src/components/Checkbox/Checkbox.tsx"),s=o("./src/components/Form/FormField.tsx"),c=o("./src/components/Helpers/Toggle.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/Checkbox/Checkbox.mdx",b={},d="wrapper";function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(l.b)(d,Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(l.b)("h1",Object(n.a)({id:"checkbox"},{__source:{fileName:m,lineNumber:23}}),"Checkbox"),Object(l.b)("h3",Object(n.a)({id:"usage"},{__source:{fileName:m,lineNumber:26}}),"Usage"),Object(l.b)(i.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <FormField label="Checkbox" labelPosition="right">\n      <Checkbox\n        shape="square" // or "circle"\n        isChecked={on}\n        isDisabled={false}\n        isInteractive={true}\n        onChange={toggle}\n        size="medium"\n        getStyles={(props, theme) => ({\n          touchableStyle: {},\n          checkboxStyle: {},\n          checkColor: \'white\',\n          checkboxFocusBackgroundColor: \'#fafafa\',\n        })}\n      />\n    </FormField>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Playground:i.c,Props:i.d,Checkbox:a.a,FormField:s.a,Toggle:c.a},mdxType:"Playground",__source:{fileName:m,lineNumber:29}},Object(l.b)(c.a,{initial:!1,mdxType:"Toggle",__source:{fileName:m,lineNumber:37}},function(e){var t=e.on,o=e.toggle;return Object(l.b)(s.a,{label:"Checkbox",labelPosition:"right",mdxType:"FormField",__source:{fileName:m,lineNumber:41}},Object(l.b)(a.a,{shape:"square",isChecked:t,isDisabled:!1,isInteractive:!0,onChange:o,size:"medium",getStyles:function(e,t){return{touchableStyle:{},checkboxStyle:{},checkColor:"white",checkboxFocusBackgroundColor:"#fafafa"}},mdxType:"Checkbox",__source:{fileName:m,lineNumber:42}}))})),Object(l.b)("h3",Object(n.a)({id:"props"},{__source:{fileName:m,lineNumber:52}}),"Props"),Object(l.b)(i.d,{of:a.a,mdxType:"Props",__source:{fileName:m,lineNumber:55}}))}u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Checkbox/Checkbox.mdx"}}),u.isMDXComponent=!0},"./src/components/Checkbox/Checkbox.tsx":function(e,t,o){"use strict";var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/TouchableHighlight/index.js"),a=o("./node_modules/react-native-web/dist/exports/View/index.js"),s=o("./src/theme/Theme.tsx"),c=o("./src/utils/mergeStyles.ts"),m=o("./src/components/Icon/Icon.web.tsx"),b=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof CheckboxStylesProps&&CheckboxStylesProps&&CheckboxStylesProps===Object(CheckboxStylesProps)&&Object.isExtensible(CheckboxStylesProps)&&Object.defineProperty(CheckboxStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStylesProps",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof CheckboxStyles&&CheckboxStyles&&CheckboxStyles===Object(CheckboxStyles)&&Object.isExtensible(CheckboxStyles)&&Object.defineProperty(CheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof GetCheckboxStyles&&GetCheckboxStyles&&GetCheckboxStyles===Object(GetCheckboxStyles)&&Object.isExtensible(GetCheckboxStyles)&&Object.defineProperty(GetCheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}});var d=function(e,t){var o=e.isChecked,r=e.isDisabled,n=e.shape,l=e.size,i=t.controlHeights[l]-16;return{checkColor:t.colors.text.white,checkboxFocusBackgroundColor:o?t.colors.background.primaryDark:t.colors.background.greyLight,checkboxStyle:Object(b.a)({alignItems:"center",backgroundColor:t.colors.background.content,borderColor:t.colors.border.default,borderWidth:1,height:i,justifyContent:"center",width:i},o?{backgroundColor:t.colors.background.primaryDefault,borderColor:"transparent"}:{},r?{backgroundColor:t.colors.background.greyDark,borderColor:t.colors.border.default}:{},{circle:{borderRadius:999},square:{borderRadius:t.controlBorderRadius.small}}[n]),touchableStyle:{}}};d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),o.d(t,"a",function(){return f});var u="/home/travis/build/WeTrustPlatform/paramount/src/components/Checkbox/Checkbox.tsx";"undefined"!==typeof CheckboxShape&&CheckboxShape&&CheckboxShape===Object(CheckboxShape)&&Object.isExtensible(CheckboxShape)&&Object.defineProperty(CheckboxShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxShape",filename:"src/components/Checkbox/Checkbox.tsx"}}),"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/Checkbox.tsx"}});var f=function(e){var t=e.isChecked,o=void 0!==t&&t,b=e.isDisabled,f=void 0!==b&&b,p=e.isInteractive,h=void 0===p||p,g=e.onChange,y=void 0===g?function(){return null}:g,x=e.shape,j=void 0===x?"square":x,O=e.size,_=void 0===O?"medium":O,C=e.getStyles,S=e.testID,T=Object(n.a)(e,["isChecked","isDisabled","isInteractive","onChange","shape","size","getStyles","testID"]),P=Object(s.a)(),F=Object(c.a)(d,C,P.components.getCheckboxStyles)({isChecked:o,isDisabled:f,shape:j,size:_},P),k=F.touchableStyle,v=F.checkboxStyle,E=F.checkColor,w=F.checkboxFocusBackgroundColor;return l.createElement(i.a,Object(r.a)({accessible:h,style:k,underlayColor:w},h?{disabled:f,onPress:y}:{disabled:!0},{testID:S},T,{__source:{fileName:u,lineNumber:69}}),l.createElement(a.a,{style:v,__source:{fileName:u,lineNumber:84}},o?l.createElement(m.a,{name:"check",size:20,color:E,__source:{fileName:u,lineNumber:85}}):null))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/Checkbox.tsx"}})},"./src/components/Form/FormField.tsx":function(e,t,o){"use strict";var r=o("./node_modules/react/index.js"),n=o("./node_modules/react-native-web/dist/exports/View/index.js"),l=o("./src/theme/Theme.tsx"),i=o("./src/utils/mergeStyles.ts"),a=o("./src/components/Typography/Label.tsx"),s=o("./src/components/Typography/Text.tsx");"undefined"!==typeof FormFieldStylesProps&&FormFieldStylesProps&&FormFieldStylesProps===Object(FormFieldStylesProps)&&Object.isExtensible(FormFieldStylesProps)&&Object.defineProperty(FormFieldStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldStylesProps",filename:"src/components/Form/FormField.styles.tsx"}}),"undefined"!==typeof FormFieldStyles&&FormFieldStyles&&FormFieldStyles===Object(FormFieldStyles)&&Object.isExtensible(FormFieldStyles)&&Object.defineProperty(FormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}}),"undefined"!==typeof GetFormFieldStyles&&GetFormFieldStyles&&GetFormFieldStyles===Object(GetFormFieldStyles)&&Object.isExtensible(GetFormFieldStyles)&&Object.defineProperty(GetFormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}});var c=function(e,t){var o={},r={};switch(e.labelPosition){case"left":o={paddingRight:8},r={flexDirection:"row",alignItems:"center"};break;case"right":o={paddingLeft:8},r={flexDirection:"row",alignItems:"center"};break;default:o={paddingBottom:4},r={paddingBottom:4}}return{containerStyles:{},descriptionTextStyle:{paddingBottom:4},errorTextStyle:{},errorWrapperStyle:{},labelTextStyle:{},labelWrapperStyle:o,wrapperStyle:r}};c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}}),o.d(t,"a",function(){return b});var m="/home/travis/build/WeTrustPlatform/paramount/src/components/Form/FormField.tsx";"undefined"!==typeof FormFieldLabelPosition&&FormFieldLabelPosition&&FormFieldLabelPosition===Object(FormFieldLabelPosition)&&Object.isExtensible(FormFieldLabelPosition)&&Object.defineProperty(FormFieldLabelPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldLabelPosition",filename:"src/components/Form/FormField.tsx"}}),"undefined"!==typeof FormFieldProps&&FormFieldProps&&FormFieldProps===Object(FormFieldProps)&&Object.isExtensible(FormFieldProps)&&Object.defineProperty(FormFieldProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldProps",filename:"src/components/Form/FormField.tsx"}});var b=function(e){var t=e.label,o=e.error,b=e.children,d=e.description,u=e.labelPosition,f=void 0===u?"top":u,p=e.getStyles,h=Object(l.a)(),g=Object(i.a)(c,p,h.components.getFormFieldStyles)({labelPosition:f},h),y=g.containerStyles,x=g.descriptionTextStyle,j=g.errorTextStyle,O=g.errorWrapperStyle,_=g.labelTextStyle,C=g.labelWrapperStyle,S=g.wrapperStyle,T=r.createElement(n.a,{style:C,__source:{fileName:m,lineNumber:59}},r.createElement(a.a,{getStyles:function(){return{textStyle:_}},__source:{fileName:m,lineNumber:60}},t));return r.createElement(n.a,{style:y,__source:{fileName:m,lineNumber:65}},t&&"top"===f&&T,r.createElement(n.a,{style:S,__source:{fileName:m,lineNumber:67}},t&&"left"===f&&T,b,t&&"right"===f&&T),d&&r.createElement(s.a,{color:"muted",getStyles:function(){return{textStyle:x}},__source:{fileName:m,lineNumber:73}},d),o&&r.createElement(n.a,{style:O,__source:{fileName:m,lineNumber:81}},r.createElement(s.a,{color:"danger",getStyles:function(){return{textStyle:j}},__source:{fileName:m,lineNumber:82}},o)))};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormField",filename:"src/components/Form/FormField.tsx"}})},"./src/components/Helpers/Toggle.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return i});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=o("./node_modules/react/index.js"),l=o.n(n);"undefined"!==typeof ToggleRenderProps&&ToggleRenderProps&&ToggleRenderProps===Object(ToggleRenderProps)&&Object.isExtensible(ToggleRenderProps)&&Object.defineProperty(ToggleRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleRenderProps",filename:"src/components/Helpers/Toggle.tsx"}}),"undefined"!==typeof ToggleProps&&ToggleProps&&ToggleProps===Object(ToggleProps)&&Object.isExtensible(ToggleProps)&&Object.defineProperty(ToggleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ToggleProps",filename:"src/components/Helpers/Toggle.tsx"}});var i=function(e){var t=e.children,o=e.initial,n=void 0!==o&&o,i=l.a.useState(n),a=Object(r.a)(i,2),s=a[0],c=a[1],m=l.a.useCallback(function(){c(!s)},[s]),b=l.a.useCallback(function(e){c(e)},[]);return t({on:s,toggle:m,set:b})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Toggle",filename:"src/components/Helpers/Toggle.tsx"}})},"./src/components/Icon/Icon.web.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return a});var r=o("./node_modules/react/index.js"),n=o("./node_modules/react-icons/fi/index.esm.js"),l=o("./src/theme/Theme.tsx"),i=o("./src/components/Typography/Text.styles.ts");var a=function(e){var t=e.name,o=e.color,a=e.size,s=Object(l.a)(),c=n["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return r.createElement(c,{color:o?Object(i.c)(s.colors.text)(o):o,size:a,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Icon/Icon.web.tsx",lineNumber:23}})};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Typography/Label.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return s});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/Platform/index.js"),a=o("./src/components/Typography/Text.tsx"),s=function(e){var t=e.children,o=Object(n.a)(e,["children"]);return l.createElement(a.a,Object(r.a)({accessibilityRole:"web"===i.a.OS?"label":"none"},o,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Label.tsx",lineNumber:10}}),t)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/components/Typography/Label.tsx"}})},"./src/components/Typography/Text.styles.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"b",function(){return l}),o.d(t,"c",function(){return i}),o.d(t,"d",function(){return s});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");"undefined"!==typeof TextStylesProps&&TextStylesProps&&TextStylesProps===Object(TextStylesProps)&&Object.isExtensible(TextStylesProps)&&Object.defineProperty(TextStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStylesProps",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof TextStyles&&TextStyles&&TextStyles===Object(TextStyles)&&Object.isExtensible(TextStyles)&&Object.defineProperty(TextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyles",filename:"src/components/Typography/Text.styles.ts"}}),"undefined"!==typeof GetTextStyles&&GetTextStyles&&GetTextStyles===Object(GetTextStyles)&&Object.isExtensible(GetTextStyles)&&Object.defineProperty(GetTextStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetTextStyles",filename:"src/components/Typography/Text.styles.ts"}});var n=function(e){return function(t){return e[t]}};"undefined"!==typeof n&&n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontFamily",filename:"src/components/Typography/Text.styles.ts"}});var l=function(e){return function(t){if(t)return e[t]||t}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFontWeight",filename:"src/components/Typography/Text.styles.ts"}});var i=function(e){return function(t){return e[t]||t}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextColor",filename:"src/components/Typography/Text.styles.ts"}});var a=function(e){return function(t){return e[t]||{fontSize:t}}};a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextSize",filename:"src/components/Typography/Text.styles.ts"}});var s=function(e,t){var o=e.size,s=e.color,c=e.fontFamily,m=e.isInline,b=e.isItalic,d=e.align,u=e.transform,f=e.weight,p=a(t.textSizes)(o);return{textStyle:Object(r.a)({},p,{color:i(t.colors.text)(s),fontFamily:n(t.fontFamilies)(c),fontWeight:l(t.fontWeights)(f)||p.fontWeight,textAlign:d},m?{alignSelf:"flex-start",flexDirection:"row"}:{},b&&{fontStyle:"italic"},u&&{textTransform:u})}};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getTextStyles",filename:"src/components/Typography/Text.styles.ts"}})},"./src/components/Typography/Text.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return m});var r=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),n=o("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=o("./node_modules/react/index.js"),i=o("./node_modules/react-native-web/dist/exports/Text/index.js"),a=o("./src/theme/Theme.tsx"),s=o("./src/utils/mergeStyles.ts"),c=o("./src/components/Typography/Text.styles.ts");"undefined"!==typeof TextStyleProps&&TextStyleProps&&TextStyleProps===Object(TextStyleProps)&&Object.isExtensible(TextStyleProps)&&Object.defineProperty(TextStyleProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextStyleProps",filename:"src/components/Typography/Text.tsx"}}),"undefined"!==typeof TextProps&&TextProps&&TextProps===Object(TextProps)&&Object.isExtensible(TextProps)&&Object.defineProperty(TextProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextProps",filename:"src/components/Typography/Text.tsx"}});var m=function(e){var t=e.children,o=e.color,m=void 0===o?"default":o,b=e.fontFamily,d=void 0===b?"text":b,u=e.size,f=void 0===u?"medium":u,p=e.align,h=void 0===p?"left":p,g=e.weight,y=e.isInline,x=void 0!==y&&y,j=e.getStyles,O=e.isItalic,_=void 0!==O&&O,C=e.transform,S=Object(n.a)(e,["children","color","fontFamily","size","align","weight","isInline","getStyles","isItalic","transform"]),T=Object(a.a)(),P=Object(s.a)(c.d,j,T.components.getTextStyles)({align:h,color:m,fontFamily:d,isInline:x,isItalic:_,size:f,transform:C,weight:g},T).textStyle;return l.createElement(i.a,Object(r.a)({style:P},S,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Text.tsx",lineNumber:64}}),t)};"undefined"!==typeof m&&m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Text",filename:"src/components/Typography/Text.tsx"}})},"./src/theme/Theme.tsx":function(e,t,o){"use strict";var r=o("./node_modules/deepmerge/dist/umd.js"),n=o.n(r),l=o("./node_modules/react/index.js"),i=o.n(l),a=o("./node_modules/react-native-web/dist/exports/Platform/index.js");"undefined"!==typeof ColorPalette&&ColorPalette&&ColorPalette===Object(ColorPalette)&&Object.isExtensible(ColorPalette)&&Object.defineProperty(ColorPalette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColorPalette",filename:"src/theme/palette.ts"}}),"undefined"!==typeof Palette&&Palette&&Palette===Object(Palette)&&Object.isExtensible(Palette)&&Object.defineProperty(Palette,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Palette",filename:"src/theme/palette.ts"}});var s={lightest:"#fafafa",light:"#eeeeee",base:"#cccccc",dark:"#a7a7a7",darkest:"#7e7e7e"},c={lightest:"#e5f5ff",light:"#ceecff",base:"#1ca5F7",dark:"#59a9de",darkest:"#33495f"},m={lightest:"#f9e1de",light:"#f9aa9f",base:"#d26557",dark:"#bb584e",darkest:"#b74033"},b={lightest:"#fce8cf",light:"#f2c58a",base:"#f3b058",dark:"#ec8e30",darkest:"#b26500"},d={lightest:"#fef8e7",light:"#fbe6a2",base:"#f7d154",dark:"#d1b047",darkest:"#7e6514"},u={lightest:"#eafff3",light:"#c2edd5",base:"#54bf84",dark:"#42a46e",darkest:"#16a054"},f={lightest:"#d6fcf7",light:"#c0f9f2",base:"#67c6bb",dark:"#3fa296",darkest:"#1b877a"},p={lightest:"#f8f7fc",light:"#eae7f8",base:"#735dd0",dark:"#37248f",darkest:"#37248f"};"undefined"!==typeof purple&&purple&&purple===Object(purple)&&Object.isExtensible(purple)&&Object.defineProperty(purple,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"purple",filename:"src/theme/palette.ts"}}),"undefined"!==typeof teal&&teal&&teal===Object(teal)&&Object.isExtensible(teal)&&Object.defineProperty(teal,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"teal",filename:"src/theme/palette.ts"}}),"undefined"!==typeof green&&green&&green===Object(green)&&Object.isExtensible(green)&&Object.defineProperty(green,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"green",filename:"src/theme/palette.ts"}}),"undefined"!==typeof yellow&&yellow&&yellow===Object(yellow)&&Object.isExtensible(yellow)&&Object.defineProperty(yellow,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"yellow",filename:"src/theme/palette.ts"}}),"undefined"!==typeof orange&&orange&&orange===Object(orange)&&Object.isExtensible(orange)&&Object.defineProperty(orange,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"orange",filename:"src/theme/palette.ts"}}),"undefined"!==typeof red&&red&&red===Object(red)&&Object.isExtensible(red)&&Object.defineProperty(red,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"red",filename:"src/theme/palette.ts"}}),"undefined"!==typeof blue&&blue&&blue===Object(blue)&&Object.isExtensible(blue)&&Object.defineProperty(blue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"blue",filename:"src/theme/palette.ts"}}),"undefined"!==typeof neutral&&neutral&&neutral===Object(neutral)&&Object.isExtensible(neutral)&&Object.defineProperty(neutral,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"neutral",filename:"src/theme/palette.ts"}});var h={small:4,medium:4,large:4},g={background:{base:"white",content:"white",overlay:"rgba(0,0,0,0.3)",greyLight:s.lightest,greyDefault:"#F5F6F7",greyDark:s.light,primaryLight:f.lightest,primaryDefault:f.base,primaryDark:f.dark,secondaryLight:b.lightest,secondaryDefault:b.base,secondaryDark:b.dark,dangerLight:m.lightest,dangerDefault:m.base,dangerDark:m.dark,infoLight:c.lightest,infoDefault:c.base,infoDark:c.dark,successLight:u.lightest,successDefault:u.base,successDark:u.dark,warningLight:b.lightest,warningDefault:b.base,warningDark:b.dark},border:{default:s.light,primary:f.darkest,secondary:b.darkest,danger:m.darkest,info:c.darkest,success:u.darkest,warning:b.darkest},button:{disabled:s.light,disabledText:s.darkest,default:s.lightest,defaultText:s.darkest,primary:f.base,primaryText:"white",secondary:b.base,secondaryText:"white",danger:m.base,dangerText:"white"},text:{link:s.darkest,default:s.darkest,muted:s.dark,white:"white",selected:"white",primary:f.darkest,secondary:b.darkest,danger:m.darkest,info:c.darkest,success:u.darkest,warning:b.darkest}},y=[{elevation:0,shadowColor:s.dark,shadowOffset:{width:0,height:0},shadowOpacity:0,shadowRadius:0},{elevation:1,shadowColor:s.dark,shadowOffset:{width:1,height:1},shadowOpacity:.15,shadowRadius:8},{elevation:2,shadowColor:s.dark,shadowOffset:{width:2,height:2},shadowOpacity:.2,shadowRadius:10},{elevation:3,shadowColor:s.dark,shadowOffset:{width:3,height:3},shadowOpacity:.25,shadowRadius:12},{elevation:4,shadowColor:s.dark,shadowOffset:{width:4,height:4},shadowOpacity:.3,shadowRadius:8},{elevation:5,shadowColor:s.dark,shadowOffset:{width:5,height:5},shadowOpacity:.35,shadowRadius:8}],x={colors:g,fills:{solid:{neutral:{backgroundColor:s.base,color:"white"},blue:{backgroundColor:c.base,color:"white"},red:{backgroundColor:m.base,color:"white"},orange:{backgroundColor:b.base,color:"white"},yellow:{backgroundColor:d.base,color:d.darkest},green:{backgroundColor:u.base,color:"white"},teal:{backgroundColor:f.base,color:"white"},purple:{backgroundColor:p.base,color:"white"}},subtle:{neutral:{backgroundColor:s.light,color:s.darkest},blue:{backgroundColor:c.light,color:c.darkest},red:{backgroundColor:m.light,color:m.darkest},orange:{backgroundColor:b.light,color:b.darkest},yellow:{backgroundColor:d.light,color:d.darkest},green:{backgroundColor:u.light,color:u.darkest},teal:{backgroundColor:f.light,color:f.darkest},purple:{backgroundColor:p.light,color:p.darkest}}},fontFamilies:"web"===a.a.OS?{heading:'"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',text:'"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}:{heading:"System",mono:"System",text:"System"},fontWeights:{bold:"bold",light:"300",normal:"normal"},headingSizes:{xxxlarge:{fontSize:35,letterSpacing:-.2,lineHeight:40},xxlarge:{fontSize:29,letterSpacing:-.2,lineHeight:32},xlarge:{fontSize:24,letterSpacing:-.07,lineHeight:28},large:{fontSize:20,letterSpacing:-.07,lineHeight:24},medium:{fontSize:16,letterSpacing:-.05,lineHeight:20},small:{fontSize:14,letterSpacing:-.05,lineHeight:20}},paragraphSizes:{small:{fontSize:14,lineHeight:24},medium:{fontSize:16,lineHeight:21},large:{fontSize:18,lineHeight:18}},textSizes:{large:{fontSize:20},medium:{fontSize:16},small:{fontSize:14},xsmall:{fontSize:12}},elevations:y,controlBorderRadius:h,controlHeights:{small:40,medium:48,large:56},controlPaddings:{small:8,medium:16,large:24},containerShapes:{circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:h.medium},roundedBottom:{borderBottomLeftRadius:h.medium,borderBottomRightRadius:h.medium},roundedLeft:{borderBottomLeftRadius:h.medium,borderTopLeftRadius:h.medium},roundedRight:{borderBottomRightRadius:h.medium,borderTopRightRadius:h.medium},roundedTop:{borderTopLeftRadius:h.medium,borderTopRightRadius:h.medium},square:{borderRadius:0}},components:{}};"undefined"!==typeof x&&x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"defaultTheme",filename:"src/theme/defaultTheme.ts"}}),o.d(t,"a",function(){return C});"undefined"!==typeof TextSizes&&TextSizes&&TextSizes===Object(TextSizes)&&Object.isExtensible(TextSizes)&&Object.defineProperty(TextSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextSize&&TextSize&&TextSize===Object(TextSize)&&Object.isExtensible(TextSize)&&Object.defineProperty(TextSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSizes&&HeadingSizes&&HeadingSizes===Object(HeadingSizes)&&Object.isExtensible(HeadingSizes)&&Object.defineProperty(HeadingSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof HeadingSize&&HeadingSize&&HeadingSize===Object(HeadingSize)&&Object.isExtensible(HeadingSize)&&Object.defineProperty(HeadingSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"HeadingSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSizes&&ParagraphSizes&&ParagraphSizes===Object(ParagraphSizes)&&Object.isExtensible(ParagraphSizes)&&Object.defineProperty(ParagraphSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ParagraphSize&&ParagraphSize&&ParagraphSize===Object(ParagraphSize)&&Object.isExtensible(ParagraphSize)&&Object.defineProperty(ParagraphSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ParagraphSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamilies&&FontFamilies&&FontFamilies===Object(FontFamilies)&&Object.isExtensible(FontFamilies)&&Object.defineProperty(FontFamilies,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamilies",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontFamily&&FontFamily&&FontFamily===Object(FontFamily)&&Object.isExtensible(FontFamily)&&Object.defineProperty(FontFamily,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontFamily",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof RNFontWeight&&RNFontWeight&&RNFontWeight===Object(RNFontWeight)&&Object.isExtensible(RNFontWeight)&&Object.defineProperty(RNFontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RNFontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeights&&FontWeights&&FontWeights===Object(FontWeights)&&Object.isExtensible(FontWeights)&&Object.defineProperty(FontWeights,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeights",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FontWeight&&FontWeight&&FontWeight===Object(FontWeight)&&Object.isExtensible(FontWeight)&&Object.defineProperty(FontWeight,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FontWeight",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColors&&TextColors&&TextColors===Object(TextColors)&&Object.isExtensible(TextColors)&&Object.defineProperty(TextColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof TextColor&&TextColor&&TextColor===Object(TextColor)&&Object.isExtensible(TextColor)&&Object.defineProperty(TextColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColors&&ButtonColors&&ButtonColors===Object(ButtonColors)&&Object.isExtensible(ButtonColors)&&Object.defineProperty(ButtonColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColorsWithText&&ButtonColorsWithText&&ButtonColorsWithText===Object(ButtonColorsWithText)&&Object.isExtensible(ButtonColorsWithText)&&Object.defineProperty(ButtonColorsWithText,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColorsWithText",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ButtonColor&&ButtonColor&&ButtonColor===Object(ButtonColor)&&Object.isExtensible(ButtonColor)&&Object.defineProperty(ButtonColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColors&&BorderColors&&BorderColors===Object(BorderColors)&&Object.isExtensible(BorderColors)&&Object.defineProperty(BorderColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BorderColor&&BorderColor&&BorderColor===Object(BorderColor)&&Object.isExtensible(BorderColor)&&Object.defineProperty(BorderColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BorderColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColors&&BackgroundColors&&BackgroundColors===Object(BackgroundColors)&&Object.isExtensible(BackgroundColors)&&Object.defineProperty(BackgroundColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof BackgroundColor&&BackgroundColor&&BackgroundColor===Object(BackgroundColor)&&Object.isExtensible(BackgroundColor)&&Object.defineProperty(BackgroundColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BackgroundColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Colors&&Colors&&Colors===Object(Colors)&&Object.isExtensible(Colors)&&Object.defineProperty(Colors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Colors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevations&&Elevations&&Elevations===Object(Elevations)&&Object.isExtensible(Elevations)&&Object.defineProperty(Elevations,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevations",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Elevation&&Elevation&&Elevation===Object(Elevation)&&Object.isExtensible(Elevation)&&Object.defineProperty(Elevation,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Elevation",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSizes&&ControlSizes&&ControlSizes===Object(ControlSizes)&&Object.isExtensible(ControlSizes)&&Object.defineProperty(ControlSizes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSizes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ControlSize&&ControlSize&&ControlSize===Object(ControlSize)&&Object.isExtensible(ControlSize)&&Object.defineProperty(ControlSize,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ControlSize",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColorProps&&FillColorProps&&FillColorProps===Object(FillColorProps)&&Object.isExtensible(FillColorProps)&&Object.defineProperty(FillColorProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColorProps",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColors&&FillColors&&FillColors===Object(FillColors)&&Object.isExtensible(FillColors)&&Object.defineProperty(FillColors,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColors",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof FillColor&&FillColor&&FillColor===Object(FillColor)&&Object.isExtensible(FillColor)&&Object.defineProperty(FillColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FillColor",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Fills&&Fills&&Fills===Object(Fills)&&Object.isExtensible(Fills)&&Object.defineProperty(Fills,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Fills",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShapes&&ContainerShapes&&ContainerShapes===Object(ContainerShapes)&&Object.isExtensible(ContainerShapes)&&Object.defineProperty(ContainerShapes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShapes",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ContainerShape&&ContainerShape&&ContainerShape===Object(ContainerShape)&&Object.isExtensible(ContainerShape)&&Object.defineProperty(ContainerShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerShape",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof Theme&&Theme&&Theme===Object(Theme)&&Object.isExtensible(Theme)&&Object.defineProperty(Theme,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Theme",filename:"src/theme/Theme.tsx"}});var j=i.a.createContext(x);"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeContext",filename:"src/theme/Theme.tsx"}}),"undefined"!==typeof ThemeProviderProps&&ThemeProviderProps&&ThemeProviderProps===Object(ThemeProviderProps)&&Object.isExtensible(ThemeProviderProps)&&Object.defineProperty(ThemeProviderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProviderProps",filename:"src/theme/Theme.tsx"}});var O=function(e){return e?n()(x,e):x};O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"createTheme",filename:"src/theme/Theme.tsx"}});var _=function(e){var t=e.children,o=e.value,r=O(void 0===o?x:o);return i.a.createElement(j.Provider,{value:r,__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/theme/Theme.tsx",lineNumber:313}},t)};_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ThemeProvider",filename:"src/theme/Theme.tsx"}});var C=function(){return i.a.useContext(j)};"undefined"!==typeof C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useTheme",filename:"src/theme/Theme.tsx"}})},"./src/utils/mergeStyles.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return l});var r=o("./node_modules/deepmerge/dist/umd.js"),n=o.n(r);"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var l=function(e,t,o){return function(r,l){var i=[e(r,l)];return o&&i.push(o(r,l)),t&&i.push(t(r,l)),n.a.all(i)}};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=10.9060220f93ad6f48cc11.js.map