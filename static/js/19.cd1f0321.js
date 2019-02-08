(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/components/Button/BackButton.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n("./node_modules/@babel/runtime/helpers/extends.js")),o=i(n("./node_modules/react/index.js")),r=n("./src/icons/index.ts"),l=n("./src/theme/index.ts"),d=a(n("./src/components/Button/Button.tsx")),u=function(e){var t=e.theme;return o.createElement(d.default,(0,s.default)({appearance:"minimal",isInline:!0,iconBefore:o.createElement(r.Icon,{name:"arrow-left",size:24,color:t.colors.text.default}),size:"small"},e))},c=(0,l.withTheme)(u);t.default=c;try{u.displayName="BackButton",u.__docgenInfo={description:"",displayName:"BackButton",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the title. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}},iconLoading:{defaultValue:{value:"undefined"},description:"Sets an icon at loading state.",name:"iconLoading",required:!1,type:{name:"ReactNode"}},getStyles:{defaultValue:null,description:"Inline styles for components",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetButtonStyles, DeepPartial<ButtonStyles>>"}},activeOpacity:{defaultValue:null,description:"Determines what the opacity of the wrapped view should be when touch is active.",name:"activeOpacity",required:!1,type:{name:"number"}},onHideUnderlay:{defaultValue:null,description:"Called immediately after the underlay is hidden",name:"onHideUnderlay",required:!1,type:{name:"() => void"}},onShowUnderlay:{defaultValue:null,description:"Called immediately after the underlay is shown",name:"onShowUnderlay",required:!1,type:{name:"() => void"}},style:{defaultValue:null,description:"//FIXME: not in doc but available in examples\n@see https://facebook.github.io/react-native/docs/view.html#style",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},underlayColor:{defaultValue:null,description:"The color of the underlay that will show through when the touch is active.",name:"underlayColor",required:!1,type:{name:"string"}},delayLongPress:{defaultValue:null,description:"Delay in ms, from onPressIn, before onLongPress is called.",name:"delayLongPress",required:!1,type:{name:"number"}},delayPressIn:{defaultValue:null,description:"Delay in ms, from the start of the touch, before onPressIn is called.",name:"delayPressIn",required:!1,type:{name:"number"}},delayPressOut:{defaultValue:null,description:"Delay in ms, from the release of the touch, before onPressOut is called.",name:"delayPressOut",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"If true, disable all interactions for this component.",name:"disabled",required:!1,type:{name:"boolean"}},hitSlop:{defaultValue:null,description:"This defines how far your touch can start away from the button.\nThis is added to pressRetentionOffset when moving off of the button.\nNOTE The touch area never extends past the parent view bounds and\nthe Z-index of sibling views always takes precedence if a touch hits\ntwo overlapping views.",name:"hitSlop",required:!1,type:{name:"Insets"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n{nativeEvent: {layout: {x, y, width, height}}}",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},pressRetentionOffset:{defaultValue:null,description:"When the scroll view is disabled, this defines how far your\ntouch may move off of the button, before deactivating the button.\nOnce deactivated, try moving it back and you'll see that the button\nis once again reactivated! Move it back and forth several times\nwhile the scroll view is disabled. Ensure you pass in a constant\nto reduce memory allocations.",name:"pressRetentionOffset",required:!1,type:{name:"Insets"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"disabled" | "none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/BackButton.tsx#BackButton"]={docgenInfo:u.__docgenInfo,name:"BackButton",path:"src/components/Button/BackButton.tsx#BackButton"})}catch(p){}},"./src/components/Button/ButtonGroup.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),o=i(n("./node_modules/react/index.js")),r=n("./src/theme/index.ts"),l=n("./src/components/Layout/index.ts"),d={horizontal:"row",vertical:"column"},u=function(e){var t=e.children,n=e.direction,i=void 0===n?"vertical":n,a=e.theme,r=o.Children.count(t),u=o.Children.map(t,function(e,t){if(!o.isValidElement(e))return e;var n=e,l=n.props.size||"medium",d=a.controlBorderRadius[l];return o.cloneElement(n,{getStyles:function(){return{buttonStyle:(0,s.default)({},"vertical"===i?(0,s.default)({borderBottomWidth:1,borderColor:a.colors.border.default,borderRadius:0,borderWidth:0,elevation:0},0===t&&{borderTopLeftRadius:d,borderTopRightRadius:d},r-1===t&&{borderBottomLeftRadius:d,borderBottomRightRadius:d,borderBottomWidth:0}):(0,s.default)({borderColor:a.colors.border.default,borderLeftWidth:0,borderRadius:0,elevation:0},0===t&&{borderBottomLeftRadius:d,borderTopLeftRadius:d},r-1===t&&{borderBottomRightRadius:d,borderTopRightRadius:d}))}}})});return o.createElement(l.Box,{flexDirection:d[i]},u)},c=(0,r.withTheme)(u);t.default=c;try{u.displayName="ButtonGroup",u.__docgenInfo={description:"",displayName:"ButtonGroup",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ButtonGroupDirection"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:u.__docgenInfo,name:"ButtonGroup",path:"src/components/Button/ButtonGroup.tsx#ButtonGroup"})}catch(p){}},"./src/components/Button/index.ts":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),a=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ButtonProps",{enumerable:!0,get:function(){return s.ButtonProps}}),Object.defineProperty(t,"ButtonGroup",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ButtonGroupProps",{enumerable:!0,get:function(){return o.ButtonGroupProps}}),Object.defineProperty(t,"BackButton",{enumerable:!0,get:function(){return r.default}});var s=a(n("./src/components/Button/Button.tsx")),o=a(n("./src/components/Button/ButtonGroup.tsx")),r=i(n("./src/components/Button/BackButton.tsx"));try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the title. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}},iconLoading:{defaultValue:{value:"undefined"},description:"Sets an icon at loading state.",name:"iconLoading",required:!1,type:{name:"ReactNode"}},getStyles:{defaultValue:null,description:"Inline styles for components",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetButtonStyles, DeepPartial<ButtonStyles>>"}},activeOpacity:{defaultValue:null,description:"Determines what the opacity of the wrapped view should be when touch is active.",name:"activeOpacity",required:!1,type:{name:"number"}},onHideUnderlay:{defaultValue:null,description:"Called immediately after the underlay is hidden",name:"onHideUnderlay",required:!1,type:{name:"() => void"}},onShowUnderlay:{defaultValue:null,description:"Called immediately after the underlay is shown",name:"onShowUnderlay",required:!1,type:{name:"() => void"}},style:{defaultValue:null,description:"//FIXME: not in doc but available in examples\n@see https://facebook.github.io/react-native/docs/view.html#style",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},underlayColor:{defaultValue:null,description:"The color of the underlay that will show through when the touch is active.",name:"underlayColor",required:!1,type:{name:"string"}},delayLongPress:{defaultValue:null,description:"Delay in ms, from onPressIn, before onLongPress is called.",name:"delayLongPress",required:!1,type:{name:"number"}},delayPressIn:{defaultValue:null,description:"Delay in ms, from the start of the touch, before onPressIn is called.",name:"delayPressIn",required:!1,type:{name:"number"}},delayPressOut:{defaultValue:null,description:"Delay in ms, from the release of the touch, before onPressOut is called.",name:"delayPressOut",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"If true, disable all interactions for this component.",name:"disabled",required:!1,type:{name:"boolean"}},hitSlop:{defaultValue:null,description:"This defines how far your touch can start away from the button.\nThis is added to pressRetentionOffset when moving off of the button.\nNOTE The touch area never extends past the parent view bounds and\nthe Z-index of sibling views always takes precedence if a touch hits\ntwo overlapping views.",name:"hitSlop",required:!1,type:{name:"Insets"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n{nativeEvent: {layout: {x, y, width, height}}}",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},pressRetentionOffset:{defaultValue:null,description:"When the scroll view is disabled, this defines how far your\ntouch may move off of the button, before deactivating the button.\nOnce deactivated, try moving it back and you'll see that the button\nis once again reactivated! Move it back and forth several times\nwhile the scroll view is disabled. Ensure you pass in a constant\nto reduce memory allocations.",name:"pressRetentionOffset",required:!1,type:{name:"Insets"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"disabled" | "none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.ts#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Button/index.ts#__class"})}catch(l){}},"./src/components/Progress/Progress.mdx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=i(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),o=i(n("./node_modules/@babel/runtime/helpers/createClass.js")),r=i(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=i(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=i(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=i(n("./node_modules/react/index.js")),c=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),m=i(n("./src/components/Progress/Progress.tsx")),f=n("./src/components/Layout/index.ts"),y=n("./src/components/Button/index.ts"),h=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),b=function(e){function t(e){var n;return(0,s.default)(this,t),(n=(0,r.default)(this,(0,l.default)(t).call(this,e))).layout=null,n}return(0,d.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,a.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"default"}},"Default"),u.default.createElement(p.Playground,{__position:0,__code:'<Counter initial={0}>\n  {({ count, incBy, decBy }) => (\n    <Box>\n      <Progress percent={count} />\n      <Box flexDirection="row">\n        <Button onPress={() => incBy(10)} title="Inc 10%" />\n        <Button onPress={() => decBy(10)} title="Dec 10%" />\n      </Box>\n    </Box>\n  )}\n</Counter>',__scope:{props:this?this.props:n,Progress:m.default,Box:f.Box,Button:y.Button,Counter:h.Counter}},u.default.createElement(h.Counter,{initial:0},function(e){var t=e.count,n=e.incBy,i=e.decBy;return u.default.createElement(f.Box,null,u.default.createElement(m.default,{percent:t}),u.default.createElement(f.Box,{flexDirection:"row"},u.default.createElement(y.Button,{onPress:function(){return n(10)},title:"Inc 10%"}),u.default.createElement(y.Button,{onPress:function(){return i(10)},title:"Dec 10%"})))})),u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),u.default.createElement(p.PropsTable,{of:m.default}))}}]),t}(u.default.Component);t.default=b},"./src/components/Progress/Progress.styles.ts":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.getProgressStyles=t.getProgressVariables=void 0;var a=i(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=function(e){return{container:{backgroundColor:e.colors.background.tint2},progress:{backgroundColor:e.colors.background.primary.default,height:"100%"},size:{small:{borderRadius:999,height:16},medium:{borderRadius:999,height:24},large:{borderRadius:999,height:32}}}};t.getProgressVariables=s;t.getProgressStyles=function(e,t){var n=e.size,i=s(t),o=i.size[n];return{containerStyle:(0,a.default)({},o,i.container),progressStyle:(0,a.default)({},o,i.progress)}};try{s.displayName="getProgressVariables",s.__docgenInfo={description:"",displayName:"getProgressVariables",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"Colors"}},fills:{defaultValue:null,description:"",name:"fills",required:!0,type:{name:"Fills"}},fontFamilies:{defaultValue:null,description:"",name:"fontFamilies",required:!0,type:{name:"FontFamilies"}},fontWeights:{defaultValue:null,description:"",name:"fontWeights",required:!0,type:{name:"FontWeights"}},headingSizes:{defaultValue:null,description:"",name:"headingSizes",required:!0,type:{name:"HeadingSizes"}},paragraphSizes:{defaultValue:null,description:"",name:"paragraphSizes",required:!0,type:{name:"ParagraphSizes"}},textSizes:{defaultValue:null,description:"",name:"textSizes",required:!0,type:{name:"TextSizes"}},elevations:{defaultValue:null,description:"",name:"elevations",required:!0,type:{name:"ViewStyle[]"}},controlPaddings:{defaultValue:null,description:"",name:"controlPaddings",required:!0,type:{name:"ControlSizes"}},controlHeights:{defaultValue:null,description:"",name:"controlHeights",required:!0,type:{name:"ControlSizes"}},controlBorderRadius:{defaultValue:null,description:"",name:"controlBorderRadius",required:!0,type:{name:"ControlSizes"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Progress/Progress.styles.ts#getProgressVariables"]={docgenInfo:s.__docgenInfo,name:"getProgressVariables",path:"src/components/Progress/Progress.styles.ts#getProgressVariables"})}catch(o){}},"./src/components/Progress/Progress.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Progress=void 0;var s=a(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),o=i(n("./node_modules/react/index.js")),r=n("./node_modules/react-native-web/dist/index.js"),l=n("./node_modules/react-spring/web.js"),d=n("./src/theme/index.ts"),u=n("./src/utils/mergeStyles.ts"),c=n("./src/components/Progress/Progress.styles.ts"),p=(0,d.withTheme)(function(e){var t=e.percent,n=void 0===t?0:t,i=e.size,a=void 0===i?"medium":i,d=e.getStyles,p=e.theme,m=(0,u.mergeStyles)(c.getProgressStyles,d)({size:a},p),f=m.containerStyle,y=m.progressStyle;return o.createElement(l.Spring,{to:{value:n}},function(e){var t=e.value;return o.createElement(r.View,{style:f},o.createElement(r.View,{accessibilityRole:"web"===r.Platform.OS?"progress":"none",style:(0,s.default)({width:"".concat(t,"%")},y)}))})});t.Progress=p;var m=p;t.default=m;try{p.displayName="Progress",p.__docgenInfo={description:"",displayName:"Progress",props:{percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetProgressStyles, DeepPartial<ProgressStyles>>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Progress/Progress.tsx#Progress"]={docgenInfo:p.__docgenInfo,name:"Progress",path:"src/components/Progress/Progress.tsx#Progress"})}catch(f){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{percent:{defaultValue:null,description:"",name:"percent",required:!1,type:{name:"number"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},getStyles:{defaultValue:null,description:"",name:"getStyles",required:!1,type:{name:"ReplaceReturnType<GetProgressStyles, DeepPartial<ProgressStyles>>"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Progress/Progress.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Progress/Progress.tsx#__class"})}catch(f){}},"./src/icons/Icon.web.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("./node_modules/react/index.js")),s=i(n("./node_modules/react-icons/fi/index.js"));t.default=function(e){var t=e.name,n=e.color,i=e.size,o=s["Fi".concat(function(e){var t=e.replace(/(\-\w)/g,function(e){return e[1].toUpperCase()});return t.charAt(0).toUpperCase()+t.slice(1)}(t))];return a.createElement(o,{color:n,size:i})};try{Iconweb.displayName="Iconweb",Iconweb.__docgenInfo={description:"",displayName:"Iconweb",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"FeatherIconName"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/Icon.web.tsx#Iconweb"]={docgenInfo:Iconweb.__docgenInfo,name:"Iconweb",path:"src/icons/Icon.web.tsx#Iconweb"})}catch(o){}},"./src/icons/index.ts":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Icon",{enumerable:!0,get:function(){return a.default}});var a=i(n("./src/icons/Icon.web.tsx"));try{icons.displayName="icons",icons.__docgenInfo={description:"",displayName:"icons",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"FeatherIconName"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/index.ts#icons"]={docgenInfo:icons.__docgenInfo,name:"icons",path:"src/icons/index.ts#icons"})}catch(s){}}}]);
//# sourceMappingURL=19.a89d5ab7f4c981b7396f.js.map