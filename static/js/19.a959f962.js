(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/Checkbox/Checkbox.mdx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=n(t("./node_modules/@babel/runtime/helpers/classCallCheck.js")),s=n(t("./node_modules/@babel/runtime/helpers/createClass.js")),a=n(t("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),c=n(t("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=n(t("./node_modules/@babel/runtime/helpers/inherits.js")),d=n(t("./node_modules/react/index.js")),u=t("./node_modules/@mdx-js/tag/dist/index.js"),b=t("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),p=t("./node_modules/docz/dist/index.m.js"),h=n(t("./src/components/Checkbox/Checkbox.tsx")),m=n(t("./src/components/Checkbox/LabeledCheckbox.tsx")),f=function(e){function o(e){var t;return(0,l.default)(this,o),(t=(0,a.default)(this,(0,c.default)(o).call(this,e))).layout=null,t}return(0,i.default)(o,e),(0,s.default)(o,[{key:"render",value:function(){var e=this.props,o=e.components,t=(0,r.default)(e,["components"]);return d.default.createElement(u.MDXTag,{name:"wrapper",components:o},d.default.createElement(u.MDXTag,{name:"h1",components:o,props:{id:"usage"}},"Usage"),d.default.createElement(u.MDXTag,{name:"h3",components:o,props:{id:"usage-1"}},"Usage"),d.default.createElement(p.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Checkbox\n      shape="square" // or "circle"\n      isChecked={on}\n      isDisabled={false}\n      isInteractive={true}\n      checkedIcon={null}\n      onChange={toggle}\n      getStyles={(props, theme) => ({\n        checkboxStyle: {},\n        checkboxFocusBackgroundColor: \'\',\n      })}\n    />\n  )}\n</Toggle>',__scope:{props:this?this.props:t,Toggle:b.Toggle,Checkbox:h.default,LabeledCheckbox:m.default}},d.default.createElement(b.Toggle,{initial:!1},function(e){var o=e.on,t=e.toggle;return d.default.createElement(h.default,{shape:"square",isChecked:o,isDisabled:!1,isInteractive:!0,checkedIcon:null,onChange:t,getStyles:function(e,o){return{checkboxStyle:{},checkboxFocusBackgroundColor:""}}})})),d.default.createElement(u.MDXTag,{name:"h3",components:o,props:{id:"labeled-checkboxes"}},"Labeled Checkboxes"),d.default.createElement(p.Playground,{__position:1,__code:'<LabeledCheckbox shape="circle" label="Default" />',__scope:{props:this?this.props:t,Toggle:b.Toggle,Checkbox:h.default,LabeledCheckbox:m.default}},d.default.createElement(m.default,{shape:"circle",label:"Default"})),d.default.createElement(u.MDXTag,{name:"h2",components:o,props:{id:"props"}},"Props"),d.default.createElement(p.PropsTable,{of:h.default}))}}]),o}(d.default.Component);o.default=f},"./src/components/Checkbox/Checkbox.styles.ts":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.getCheckboxStyles=o.getCheckboxVariables=void 0;var r=n(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=function(e){return{base:{backgroundColor:e.colors.background.plain,borderColor:e.colors.border.default,borderWidth:1,height:32,width:32},checked:{backgroundColor:e.colors.background.primary.default,borderColor:"transparent"},checkedFocus:{backgroundColor:e.colors.background.primary.focus},disabled:{backgroundColor:e.colors.background.disabled,borderColor:e.colors.border.default},shape:{circle:{borderRadius:999},square:{borderRadius:e.controlBorderRadius.small}},uncheckedFocus:{backgroundColor:e.colors.background.tint1}}};o.getCheckboxVariables=l;o.getCheckboxStyles=function(e,o){var t=e.isChecked,n=e.isDisabled,s=e.shape,a=l(o);return{checkboxFocusBackgroundColor:t?a.checkedFocus.backgroundColor:a.uncheckedFocus.backgroundColor,checkboxStyle:(0,r.default)({},a.base,t?a.checked:{},n?a.disabled:{},a.shape[s])}};try{l.displayName="getCheckboxVariables",l.__docgenInfo={description:"",displayName:"getCheckboxVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox/Checkbox.styles.ts#getCheckboxVariables"]={docgenInfo:l.__docgenInfo,name:"getCheckboxVariables",path:"src/components/Checkbox/Checkbox.styles.ts#getCheckboxVariables"})}catch(s){}},"./src/components/Checkbox/Checkbox.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=o.Checkbox=void 0;var l=r(t("./node_modules/@babel/runtime/helpers/extends.js")),s=r(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=n(t("./node_modules/react/index.js")),c=t("./node_modules/react-native-web/dist/index.js"),i=t("./src/icons/index.ts"),d=t("./src/theme/index.ts"),u=t("./src/utils/mergeStyles.ts"),b=t("./src/components/Checkbox/Checkbox.styles.ts"),p=(0,d.withTheme)(function(e){var o=e.isChecked,t=void 0!==o&&o,n=e.isDisabled,r=void 0!==n&&n,d=e.isInteractive,p=void 0===d||d,h=e.checkedIcon,m=e.onChange,f=void 0===m?function(){return null}:m,g=e.shape,k=void 0===g?"square":g,C=e.theme,x=e.getStyles,_=e.testID,y=(0,s.default)(e,["isChecked","isDisabled","isInteractive","checkedIcon","onChange","shape","theme","getStyles","testID"]),v=(0,u.mergeStyles)(b.getCheckboxStyles,x)({isChecked:t,isDisabled:r,shape:k},C),S=v.checkboxStyle,j=v.checkboxFocusBackgroundColor;return a.createElement(c.TouchableHighlight,(0,l.default)({accessible:!0,style:S,underlayColor:j},p?{disabled:r,onPress:f}:{disabled:!0},{testID:_},y),a.createElement(c.View,{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center"}},t?h||a.createElement(i.Icon,{name:"check",size:20,color:C.colors.text.plain}):null))});o.Checkbox=p;var h=p;o.default=h},"./src/components/Checkbox/LabeledCheckbox.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=o.LabeledCheckbox=void 0;var l=r(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(t("./node_modules/react/index.js")),a=t("./src/theme/index.ts"),c=r(t("./src/components/Checkbox/Checkbox.tsx")),i=t("./src/components/Layout/index.ts"),d=t("./src/components/Typography/index.ts"),u=(0,a.withTheme)(function(e){var o=e.label,t=e.position,n=void 0===t?"right":t,r=e.color,a=e.size,u=(0,l.default)(e,["label","position","color","size"]);return o?s.createElement(i.Box,{flexDirection:"row",alignItems:"center"},"left"===n&&s.createElement(d.Text,{size:a,color:r},o),s.createElement(i.Spacing,{paddingHorizontal:1},s.createElement(c.default,u)),"right"===n&&s.createElement(d.Text,{size:a,color:r},o)):s.createElement(c.default,u)});o.LabeledCheckbox=u;var b=u;o.default=b},"./src/icons/Icon.web.tsx":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=n(t("./node_modules/react/index.js")),l=n(t("./node_modules/react-icons/fi/index.js"));o.default=function(e){var o=e.name,t=e.color,n=e.size,s=l["Fi".concat(function(e){var o=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return o.charAt(0).toUpperCase()+o.slice(1)}(o))];return r.createElement(s,{color:t,size:n})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(s){}},"./src/icons/index.ts":function(e,o,t){var n=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(o,"__esModule",{value:!0}),Object.defineProperty(o,"Icon",{enumerable:!0,get:function(){return r.default}});var r=n(t("./src/icons/Icon.web.tsx"))}}]);
//# sourceMappingURL=19.2b611ef9eabd6392e9f4.js.map