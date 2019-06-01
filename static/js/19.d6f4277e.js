(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/Checkbox/Checkbox.mdx":function(e,o,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=p;var n=r(t("./node_modules/@babel/runtime/helpers/extends.js")),l=r(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=(r(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),c=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),i=t("./node_modules/docz/dist/index.esm.js"),a=t("./node_modules/react-native-web/dist/index.js"),b=t("./src/components/Checkbox/index.ts"),d=t("./src/components/Form/index.ts"),m={},u="wrapper";function p(e){var o=e.components,t=(0,l.default)(e,["components"]);return(0,s.mdx)(u,(0,n.default)({},m,t,{components:o,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"checkbox"},"Checkbox"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(i.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <FormField label="Checkbox" labelPosition="right">\n      <Checkbox\n        shape="square" // or "circle"\n        isChecked={on}\n        isDisabled={false}\n        isInteractive={true}\n        onChange={toggle}\n        size="medium"\n        getStyles={(props, theme) => ({\n          touchableStyle: {},\n          checkboxStyle: {},\n          checkColor: \'white\',\n          checkboxFocusBackgroundColor: \'\',\n        })}\n      />\n    </FormField>\n  )}\n</Toggle>',__scope:{props:this?this.props:t,Toggle:c.Toggle,Playground:i.Playground,Props:i.Props,Text:a.Text,Checkbox:b.Checkbox,FormField:d.FormField},mdxType:"Playground"},(0,s.mdx)(c.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var o=e.on,t=e.toggle;return(0,s.mdx)(d.FormField,{label:"Checkbox",labelPosition:"right",mdxType:"FormField"},(0,s.mdx)(b.Checkbox,{shape:"square",isChecked:o,isDisabled:!1,isInteractive:!0,onChange:t,size:"medium",getStyles:function(e,o){return{touchableStyle:{},checkboxStyle:{},checkColor:"white",checkboxFocusBackgroundColor:""}},mdxType:"Checkbox"}))})),(0,s.mdx)("h3",{id:"props"},"Props"),(0,s.mdx)(i.Props,{of:b.Checkbox,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Checkbox/Checkbox.mdx"}}),p.isMDXComponent=!0},"./src/components/Checkbox/Checkbox.styles.ts":function(e,o,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.getCheckboxStyles=void 0;var n=r(t("./node_modules/@babel/runtime/helpers/objectSpread.js"));"undefined"!==typeof CheckboxStylesProps&&CheckboxStylesProps&&CheckboxStylesProps===Object(CheckboxStylesProps)&&Object.isExtensible(CheckboxStylesProps)&&Object.defineProperty(CheckboxStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStylesProps",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof CheckboxStyles&&CheckboxStyles&&CheckboxStyles===Object(CheckboxStyles)&&Object.isExtensible(CheckboxStyles)&&Object.defineProperty(CheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}}),"undefined"!==typeof GetCheckboxStyles&&GetCheckboxStyles&&GetCheckboxStyles===Object(GetCheckboxStyles)&&Object.isExtensible(GetCheckboxStyles)&&Object.defineProperty(GetCheckboxStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}});var l=function(e,o){var t=e.isChecked,r=e.isDisabled,l=e.shape,s=e.size,c=o.controlHeights[s]-16;return{checkColor:o.colors.text.white,checkboxFocusBackgroundColor:t?o.colors.background.primaryDark:o.colors.background.greyLight,checkboxStyle:(0,n.default)({alignItems:"center",backgroundColor:o.colors.background.content,borderColor:o.colors.border.default,borderWidth:1,height:c,justifyContent:"center",width:c},t?{backgroundColor:o.colors.background.primaryDefault,borderColor:"transparent"}:{},r?{backgroundColor:o.colors.background.greyDark,borderColor:o.colors.border.default}:{},{circle:{borderRadius:999},square:{borderRadius:o.controlBorderRadius.small}}[l]),touchableStyle:{}}};o.getCheckboxStyles=l,l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getCheckboxStyles",filename:"src/components/Checkbox/Checkbox.styles.ts"}})},"./src/components/Checkbox/Checkbox.tsx":function(e,o,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Checkbox=void 0;var l=n(t("./node_modules/@babel/runtime/helpers/extends.js")),s=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),c=r(t("./node_modules/react/index.js")),i=t("./node_modules/react-native-web/dist/index.js"),a=t("./src/theme/index.ts"),b=t("./src/utils/mergeStyles.ts"),d=t("./src/components/Icon/index.ts"),m=t("./src/components/Checkbox/Checkbox.styles.ts");"undefined"!==typeof CheckboxShape&&CheckboxShape&&CheckboxShape===Object(CheckboxShape)&&Object.isExtensible(CheckboxShape)&&Object.defineProperty(CheckboxShape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxShape",filename:"src/components/Checkbox/Checkbox.tsx"}}),"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/Checkbox.tsx"}});var u=function(e){var o=e.isChecked,t=void 0!==o&&o,r=e.isDisabled,n=void 0!==r&&r,u=e.isInteractive,p=void 0===u||u,x=e.onChange,h=void 0===x?function(){return null}:x,y=e.shape,f=void 0===y?"square":y,k=e.size,F=void 0===k?"medium":k,C=e.getStyles,g=e.testID,j=(0,s.default)(e,["isChecked","isDisabled","isInteractive","onChange","shape","size","getStyles","testID"]),S=(0,a.useTheme)(),P=(0,b.mergeStyles)(m.getCheckboxStyles,C)({isChecked:t,isDisabled:n,shape:f,size:F},S),_=P.touchableStyle,v=P.checkboxStyle,O=P.checkColor,E=P.checkboxFocusBackgroundColor;return c.createElement(i.TouchableHighlight,(0,l.default)({accessible:p,style:_,underlayColor:E},p?{disabled:n,onPress:h}:{disabled:!0},{testID:g},j),c.createElement(i.View,{style:v},t?c.createElement(d.Icon,{name:"check",size:20,color:O}):null))};o.Checkbox=u,u&&u===Object(u)&&Object.isExtensible(u)&&Object.defineProperty(u,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/Checkbox.tsx"}})},"./src/components/Checkbox/index.ts":function(e,o,t){Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Checkbox",{enumerable:!0,get:function(){return r.Checkbox}}),Object.defineProperty(o,"CheckboxProps",{enumerable:!0,get:function(){return r.CheckboxProps}});var r=t("./src/components/Checkbox/Checkbox.tsx");"undefined"!==typeof CheckboxProps&&CheckboxProps&&CheckboxProps===Object(CheckboxProps)&&Object.isExtensible(CheckboxProps)&&Object.defineProperty(CheckboxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"CheckboxProps",filename:"src/components/Checkbox/index.ts"}}),"undefined"!==typeof Checkbox&&Checkbox&&Checkbox===Object(Checkbox)&&Object.isExtensible(Checkbox)&&Object.defineProperty(Checkbox,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Checkbox",filename:"src/components/Checkbox/index.ts"}})},"./src/components/Form/FormField.styles.tsx":function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.getFormFieldStyles=void 0,"undefined"!==typeof FormFieldStylesProps&&FormFieldStylesProps&&FormFieldStylesProps===Object(FormFieldStylesProps)&&Object.isExtensible(FormFieldStylesProps)&&Object.defineProperty(FormFieldStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldStylesProps",filename:"src/components/Form/FormField.styles.tsx"}}),"undefined"!==typeof FormFieldStyles&&FormFieldStyles&&FormFieldStyles===Object(FormFieldStyles)&&Object.isExtensible(FormFieldStyles)&&Object.defineProperty(FormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}}),"undefined"!==typeof GetFormFieldStyles&&GetFormFieldStyles&&GetFormFieldStyles===Object(GetFormFieldStyles)&&Object.isExtensible(GetFormFieldStyles)&&Object.defineProperty(GetFormFieldStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}});var t=function(e,o){var t={},r={};switch(e.labelPosition){case"left":t={paddingRight:8},r={flexDirection:"row",alignItems:"center"};break;case"right":t={paddingLeft:8},r={flexDirection:"row",alignItems:"center"};break;default:t={paddingBottom:4},r={paddingBottom:4}}return{containerStyles:{},descriptionTextStyle:{paddingBottom:4},errorTextStyle:{},errorWrapperStyle:{},labelTextStyle:{},labelWrapperStyle:t,wrapperStyle:r}};o.getFormFieldStyles=t,t&&t===Object(t)&&Object.isExtensible(t)&&Object.defineProperty(t,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getFormFieldStyles",filename:"src/components/Form/FormField.styles.tsx"}})},"./src/components/Form/FormField.tsx":function(e,o,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),o.FormField=void 0;var n=r(t("./node_modules/react/index.js")),l=t("./node_modules/react-native-web/dist/index.js"),s=t("./src/theme/index.ts"),c=t("./src/utils/mergeStyles.ts"),i=t("./src/components/Typography/index.ts"),a=t("./src/components/Form/FormField.styles.tsx");"undefined"!==typeof FormFieldLabelPosition&&FormFieldLabelPosition&&FormFieldLabelPosition===Object(FormFieldLabelPosition)&&Object.isExtensible(FormFieldLabelPosition)&&Object.defineProperty(FormFieldLabelPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldLabelPosition",filename:"src/components/Form/FormField.tsx"}}),"undefined"!==typeof FormFieldProps&&FormFieldProps&&FormFieldProps===Object(FormFieldProps)&&Object.isExtensible(FormFieldProps)&&Object.defineProperty(FormFieldProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormFieldProps",filename:"src/components/Form/FormField.tsx"}});var b=function(e){var o=e.label,t=e.error,r=e.children,b=e.description,d=e.labelPosition,m=void 0===d?"top":d,u=e.getStyles,p=(0,s.useTheme)(),x=(0,c.mergeStyles)(a.getFormFieldStyles,u)({labelPosition:m},p),h=x.containerStyles,y=x.descriptionTextStyle,f=x.errorTextStyle,k=x.errorWrapperStyle,F=x.labelTextStyle,C=x.labelWrapperStyle,g=x.wrapperStyle,j=n.createElement(l.View,{style:C},n.createElement(i.Label,{getStyles:function(){return{textStyle:F}}},o));return n.createElement(l.View,{style:h},o&&"top"===m&&j,n.createElement(l.View,{style:g},o&&"left"===m&&j,r,o&&"right"===m&&j),b&&n.createElement(i.Text,{color:"muted",getStyles:function(){return{textStyle:y}}},b),t&&n.createElement(l.View,{style:k},n.createElement(i.Text,{color:"danger",getStyles:function(){return{textStyle:f}}},t)))};o.FormField=b,b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"FormField",filename:"src/components/Form/FormField.tsx"}})},"./src/components/Form/index.ts":function(e,o,t){Object.defineProperty(o,"__esModule",{value:!0});var r=t("./src/components/Form/FormField.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(o,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Icon/Icon.web.tsx":function(e,o,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),o.Icon=void 0;var n=r(t("./node_modules/react/index.js")),l=r(t("./node_modules/react-icons/fi/index.esm.js"));var s=function(e){var o=e.name,t=e.color,r=e.size,s=l["Fi".concat(function(e){var o=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return o.charAt(0).toUpperCase()+o.slice(1)}(o))];return n.createElement(s,{color:t,size:r})};o.Icon=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Icon",filename:"src/components/Icon/Icon.web.tsx"}})},"./src/components/Icon/index.ts":function(e,o,t){Object.defineProperty(o,"__esModule",{value:!0});var r=t("./src/components/Icon/Icon.web.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(o,e,{enumerable:!0,get:function(){return r[e]}})})}}]);
//# sourceMappingURL=19.07e7feb6eef9113530b1.js.map