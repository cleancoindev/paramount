(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Button/Button.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Button=void 0;var o=a(n("./node_modules/@babel/runtime/helpers/extends.js")),r=a(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),s=a(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=i(n("./node_modules/react/index.js")),d=n("./node_modules/react-native-web/dist/index.js"),u=n("./src/theme/index.ts"),c=n("./src/components/Layout/index.ts"),p=n("./src/components/Loading/index.ts"),m=n("./src/components/Typography/index.ts"),f=(0,u.withTheme)(function(e){var t=e.appearance,n=void 0===t?"primary":t,i=e.title,a=e.color,u=void 0===a?"default":a,f=e.dangerouslySetInlineStyle,h=e.iconAfter,y=e.iconBefore,b=e.iconLoading,v=(e.isActive,e.isDisabled),g=void 0!==v&&v,w=e.isInline,_=void 0!==w&&w,S=e.isLoading,B=void 0!==S&&S,V=e.onPress,q=void 0===V?function(){}:V,T=e.size,O=void 0===T?"medium":T,L=e.theme,R=(0,s.default)(e,["appearance","title","color","dangerouslySetInlineStyle","iconAfter","iconBefore","iconLoading","isActive","isDisabled","isInline","isLoading","onPress","size","theme"]),D=L.getButtonStyles(n,u,O,g,B,_),I=D.buttonStyle,E=D.textStyle,A=D.focusColor;return l.createElement(d.TouchableHighlight,(0,o.default)({accessible:!0,accessibilityRole:"button",underlayColor:A,disabled:!(!g&&!B),onPress:q,style:(0,r.default)({},I,f&&f.buttonStyle)},R),l.createElement(d.View,{style:{alignItems:"center",flexDirection:"row",height:"100%",justifyContent:"center"}},y,l.createElement(c.Spacing,{paddingLeft:y?1:0,paddingRight:h?1:0},B?b||l.createElement(p.LoadingDots,{color:E.color}):i?l.createElement(m.Text,{dangerouslySetInlineStyle:{textStyle:(0,r.default)({},E,f&&f.textStyle)}},i):null),h))});t.Button=f;var h=f;t.default=h;try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the title. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}},iconLoading:{defaultValue:{value:"undefined"},description:"Sets an icon at loading state.",name:"iconLoading",required:!1,type:{name:"ReactNode"}},dangerouslySetInlineStyle:{defaultValue:null,description:"Inline styles for components",name:"dangerouslySetInlineStyle",required:!1,type:{name:"Partial<ButtonStyles>"}},activeOpacity:{defaultValue:null,description:"Determines what the opacity of the wrapped view should be when touch is active.",name:"activeOpacity",required:!1,type:{name:"number"}},onHideUnderlay:{defaultValue:null,description:"Called immediately after the underlay is hidden",name:"onHideUnderlay",required:!1,type:{name:"() => void"}},onShowUnderlay:{defaultValue:null,description:"Called immediately after the underlay is shown",name:"onShowUnderlay",required:!1,type:{name:"() => void"}},style:{defaultValue:null,description:"//FIXME: not in doc but available in examples\n@see https://facebook.github.io/react-native/docs/view.html#style",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},underlayColor:{defaultValue:null,description:"The color of the underlay that will show through when the touch is active.",name:"underlayColor",required:!1,type:{name:"string"}},delayLongPress:{defaultValue:null,description:"Delay in ms, from onPressIn, before onLongPress is called.",name:"delayLongPress",required:!1,type:{name:"number"}},delayPressIn:{defaultValue:null,description:"Delay in ms, from the start of the touch, before onPressIn is called.",name:"delayPressIn",required:!1,type:{name:"number"}},delayPressOut:{defaultValue:null,description:"Delay in ms, from the release of the touch, before onPressOut is called.",name:"delayPressOut",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"If true, disable all interactions for this component.",name:"disabled",required:!1,type:{name:"boolean"}},hitSlop:{defaultValue:null,description:"This defines how far your touch can start away from the button.\nThis is added to pressRetentionOffset when moving off of the button.\nNOTE The touch area never extends past the parent view bounds and\nthe Z-index of sibling views always takes precedence if a touch hits\ntwo overlapping views.",name:"hitSlop",required:!1,type:{name:"Insets"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n{nativeEvent: {layout: {x, y, width, height}}}",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},pressRetentionOffset:{defaultValue:null,description:"When the scroll view is disabled, this defines how far your\ntouch may move off of the button, before deactivating the button.\nOnce deactivated, try moving it back and you'll see that the button\nis once again reactivated! Move it back and forth several times\nwhile the scroll view is disabled. Ensure you pass in a constant\nto reduce memory allocations.",name:"pressRetentionOffset",required:!1,type:{name:"Insets"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"disabled" | "none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:f.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(y){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},color:{defaultValue:{value:'"default"'},description:"The intent of the button.",name:"color",required:!1,type:{name:'"default" | "danger" | "primary" | "secondary"'}},appearance:{defaultValue:{value:'"primary"'},description:"The appearance of the button.",name:"appearance",required:!1,type:{name:'"primary" | "minimal" | "outline"'}},size:{defaultValue:{value:'"medium"'},description:"The size of the button.",name:"size",required:!1,type:{name:'"small" | "medium" | "large"'}},isLoading:{defaultValue:{value:"false"},description:"When true, show a loading spinner before the title. This also disables the button.",name:"isLoading",required:!1,type:{name:"boolean"}},isActive:{defaultValue:{value:"false"},description:"Forcefully set the active state of a button.",name:"isActive",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"When true, the button is disabled. isLoading also sets the button to disabled.",name:"isDisabled",required:!1,type:{name:"boolean"}},isInline:{defaultValue:{value:"false"},description:"When true, the button will not stretch full width",name:"isInline",required:!1,type:{name:"boolean"}},onPress:{defaultValue:{value:"() => {}"},description:"Button press handler",name:"onPress",required:!1,type:{name:"() => void"}},iconBefore:{defaultValue:{value:"undefined"},description:"Sets an icon before the text.",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:{value:"undefined"},description:"Sets an icon after the text.",name:"iconAfter",required:!1,type:{name:"ReactNode"}},iconLoading:{defaultValue:{value:"undefined"},description:"Sets an icon at loading state.",name:"iconLoading",required:!1,type:{name:"ReactNode"}},dangerouslySetInlineStyle:{defaultValue:null,description:"Inline styles for components",name:"dangerouslySetInlineStyle",required:!1,type:{name:"Partial<ButtonStyles>"}},activeOpacity:{defaultValue:null,description:"Determines what the opacity of the wrapped view should be when touch is active.",name:"activeOpacity",required:!1,type:{name:"number"}},onHideUnderlay:{defaultValue:null,description:"Called immediately after the underlay is hidden",name:"onHideUnderlay",required:!1,type:{name:"() => void"}},onShowUnderlay:{defaultValue:null,description:"Called immediately after the underlay is shown",name:"onShowUnderlay",required:!1,type:{name:"() => void"}},style:{defaultValue:null,description:"//FIXME: not in doc but available in examples\n@see https://facebook.github.io/react-native/docs/view.html#style",name:"style",required:!1,type:{name:"StyleProp<ViewStyle>"}},underlayColor:{defaultValue:null,description:"The color of the underlay that will show through when the touch is active.",name:"underlayColor",required:!1,type:{name:"string"}},delayLongPress:{defaultValue:null,description:"Delay in ms, from onPressIn, before onLongPress is called.",name:"delayLongPress",required:!1,type:{name:"number"}},delayPressIn:{defaultValue:null,description:"Delay in ms, from the start of the touch, before onPressIn is called.",name:"delayPressIn",required:!1,type:{name:"number"}},delayPressOut:{defaultValue:null,description:"Delay in ms, from the release of the touch, before onPressOut is called.",name:"delayPressOut",required:!1,type:{name:"number"}},disabled:{defaultValue:null,description:"If true, disable all interactions for this component.",name:"disabled",required:!1,type:{name:"boolean"}},hitSlop:{defaultValue:null,description:"This defines how far your touch can start away from the button.\nThis is added to pressRetentionOffset when moving off of the button.\nNOTE The touch area never extends past the parent view bounds and\nthe Z-index of sibling views always takes precedence if a touch hits\ntwo overlapping views.",name:"hitSlop",required:!1,type:{name:"Insets"}},onLayout:{defaultValue:null,description:"Invoked on mount and layout changes with\n{nativeEvent: {layout: {x, y, width, height}}}",name:"onLayout",required:!1,type:{name:"(event: LayoutChangeEvent) => void"}},onLongPress:{defaultValue:null,description:"",name:"onLongPress",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressIn:{defaultValue:null,description:"",name:"onPressIn",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},onPressOut:{defaultValue:null,description:"",name:"onPressOut",required:!1,type:{name:"(event: GestureResponderEvent) => void"}},pressRetentionOffset:{defaultValue:null,description:"When the scroll view is disabled, this defines how far your\ntouch may move off of the button, before deactivating the button.\nOnce deactivated, try moving it back and you'll see that the button\nis once again reactivated! Move it back and forth several times\nwhile the scroll view is disabled. Ensure you pass in a constant\nto reduce memory allocations.",name:"pressRetentionOffset",required:!1,type:{name:"Insets"}},testID:{defaultValue:null,description:"Used to locate this view in end-to-end tests.",name:"testID",required:!1,type:{name:"string"}},accessible:{defaultValue:null,description:"When true, indicates that the view is an accessibility element.\nBy default, all the touchable elements are accessible.",name:"accessible",required:!1,type:{name:"boolean"}},accessibilityLabel:{defaultValue:null,description:"Overrides the text that's read by the screen reader when the user interacts with the element. By default, the\nlabel is constructed by traversing all the children and accumulating all the Text nodes separated by space.",name:"accessibilityLabel",required:!1,type:{name:"string"}},accessibilityRole:{defaultValue:null,description:"Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.",name:"accessibilityRole",required:!1,type:{name:"AccessibilityRole"}},accessibilityStates:{defaultValue:null,description:"Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.",name:"accessibilityStates",required:!1,type:{name:"AccessibilityState[]"}},accessibilityHint:{defaultValue:null,description:"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.",name:"accessibilityHint",required:!1,type:{name:"string"}},accessibilityComponentType:{defaultValue:null,description:"In some cases, we also want to alert the end user of the type of selected component (i.e., that it is a \u201cbutton\u201d).\nIf we were using native buttons, this would work automatically. Since we are using javascript, we need to\nprovide a bit more context for TalkBack. To do so, you must specify the \u2018accessibilityComponentType\u2019 property\nfor any UI component. For instances, we support \u2018button\u2019, \u2018radiobutton_checked\u2019 and \u2018radiobutton_unchecked\u2019 and so on.\n@platform android",name:"accessibilityComponentType",required:!1,type:{name:'"none" | "button" | "radiobutton_checked" | "radiobutton_unchecked"'}},accessibilityLiveRegion:{defaultValue:null,description:"Indicates to accessibility services whether the user should be notified when this view changes.\nWorks for Android API >= 19 only.\nSee http://developer.android.com/reference/android/view/View.html#attr_android:accessibilityLiveRegion for references.\n@platform android",name:"accessibilityLiveRegion",required:!1,type:{name:'"none" | "polite" | "assertive"'}},importantForAccessibility:{defaultValue:null,description:"Controls how view is important for accessibility which is if it fires accessibility events\nand if it is reported to accessibility services that query the screen.\nWorks for Android only. See http://developer.android.com/reference/android/R.attr.html#importantForAccessibility for references.\n\nPossible values:\n      'auto' - The system determines whether the view is important for accessibility - default (recommended).\n      'yes' - The view is important for accessibility.\n      'no' - The view is not important for accessibility.\n      'no-hide-descendants' - The view is not important for accessibility, nor are any of its descendant views.",name:"importantForAccessibility",required:!1,type:{name:'"auto" | "yes" | "no" | "no-hide-descendants"'}},accessibilityElementsHidden:{defaultValue:null,description:"A Boolean value indicating whether the accessibility elements contained within this accessibility element\nare hidden to the screen reader.\n@platform ios",name:"accessibilityElementsHidden",required:!1,type:{name:"boolean"}},accessibilityTraits:{defaultValue:null,description:"Accessibility traits tell a person using VoiceOver what kind of element they have selected.\nIs this element a label? A button? A header? These questions are answered by accessibilityTraits.\n@platform ios",name:"accessibilityTraits",required:!1,type:{name:'"disabled" | "none" | "button" | "link" | "search" | "image" | "text" | "adjustable" | "header" | "summary" | "selected" | "plays" | "key" | "frequentUpdates" | "startsMedia" | "allowsDirectInteraction" | "pageTurn" | AccessibilityTrait[]'}},onAccessibilityTap:{defaultValue:null,description:"When `accessible` is true, the system will try to invoke this function when the user performs accessibility tap gesture.\n@platform ios",name:"onAccessibilityTap",required:!1,type:{name:"() => void"}},onMagicTap:{defaultValue:null,description:"When accessible is true, the system will invoke this function when the user performs the magic tap gesture.\n@platform ios",name:"onMagicTap",required:!1,type:{name:"() => void"}},accessibilityIgnoresInvertColors:{defaultValue:null,description:"https://facebook.github.io/react-native/docs/accessibility#accessibilityignoresinvertcolorsios\n@platform ios",name:"accessibilityIgnoresInvertColors",required:!1,type:{name:"boolean"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Button/Button.tsx#__class"})}catch(y){}},"./src/components/Button/ButtonGroup.mdx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=i(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=i(n("./node_modules/@babel/runtime/helpers/createClass.js")),s=i(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=i(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=i(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=i(n("./node_modules/react/index.js")),c=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),m=i(n("./src/components/Button/Button.tsx")),f=i(n("./src/components/Button/ButtonGroup.tsx")),h=n("./src/components/Layout/index.ts"),y=function(e){function t(e){var n;return(0,o.default)(this,t),(n=(0,s.default)(this,(0,l.default)(t).call(this,e))).layout=null,n}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,a.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"vertical-button-group"}},"Vertical button group"),u.default.createElement(p.Playground,{__position:0,__code:'<ButtonGroup>\n  <Button color="default" title="Default" />\n  <Button color="primary" title="Primary" />\n  <Button color="secondary" title="Secondary" />\n  <Button color="danger" title="Danger" />\n</ButtonGroup>',__scope:{props:this?this.props:n,Button:m.default,ButtonGroup:f.default,Box:h.Box}},u.default.createElement(f.default,null,u.default.createElement(m.default,{color:"default",title:"Default"}),u.default.createElement(m.default,{color:"primary",title:"Primary"}),u.default.createElement(m.default,{color:"secondary",title:"Secondary"}),u.default.createElement(m.default,{color:"danger",title:"Danger"}))),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"vertical-button-group-1"}},"Vertical button group"),u.default.createElement(p.Playground,{__position:1,__code:'<ButtonGroup>\n  <Button appearance="outline" color="default" title="Default" />\n  <Button appearance="outline" color="primary" title="Primary" />\n  <Button appearance="outline" color="secondary" title="Secondary" />\n  <Button appearance="outline" color="danger" title="Danger" />\n</ButtonGroup>',__scope:{props:this?this.props:n,Button:m.default,ButtonGroup:f.default,Box:h.Box}},u.default.createElement(f.default,null,u.default.createElement(m.default,{appearance:"outline",color:"default",title:"Default"}),u.default.createElement(m.default,{appearance:"outline",color:"primary",title:"Primary"}),u.default.createElement(m.default,{appearance:"outline",color:"secondary",title:"Secondary"}),u.default.createElement(m.default,{appearance:"outline",color:"danger",title:"Danger"}))),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"horizontal-button-group"}},"Horizontal button group"),u.default.createElement(p.Playground,{__position:2,__code:'<ButtonGroup direction="horizontal">\n  <Button color="default" title="Default" />\n  <Button color="primary" title="Primary" />\n  <Button color="secondary" title="Secondary" />\n  <Button color="danger" title="Danger" />\n</ButtonGroup>',__scope:{props:this?this.props:n,Button:m.default,ButtonGroup:f.default,Box:h.Box}},u.default.createElement(f.default,{direction:"horizontal"},u.default.createElement(m.default,{color:"default",title:"Default"}),u.default.createElement(m.default,{color:"primary",title:"Primary"}),u.default.createElement(m.default,{color:"secondary",title:"Secondary"}),u.default.createElement(m.default,{color:"danger",title:"Danger"}))),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"horizontal-button-group-1"}},"Horizontal button group"),u.default.createElement(p.Playground,{__position:3,__code:'<ButtonGroup direction="horizontal">\n  <Button appearance="outline" color="default" title="Default" />\n  <Button appearance="outline" color="primary" title="Primary" />\n  <Button appearance="outline" color="secondary" title="Secondary" />\n  <Button appearance="outline" color="danger" title="Danger" />\n</ButtonGroup>',__scope:{props:this?this.props:n,Button:m.default,ButtonGroup:f.default,Box:h.Box}},u.default.createElement(f.default,{direction:"horizontal"},u.default.createElement(m.default,{appearance:"outline",color:"default",title:"Default"}),u.default.createElement(m.default,{appearance:"outline",color:"primary",title:"Primary"}),u.default.createElement(m.default,{appearance:"outline",color:"secondary",title:"Secondary"}),u.default.createElement(m.default,{appearance:"outline",color:"danger",title:"Danger"}))))}}]),t}(u.default.Component);t.default=y},"./src/components/Button/ButtonGroup.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),r=i(n("./node_modules/react/index.js")),s=n("./src/theme/index.ts"),l=n("./src/components/Layout/index.ts"),d={horizontal:"row",vertical:"column"},u=function(e){var t=e.children,n=e.direction,i=void 0===n?"vertical":n,a=e.theme,s=r.Children.count(t),u=r.Children.map(t,function(e,t){if(!r.isValidElement(e))return e;var n=e,l=n.props.size||"medium",d=a.themeVariables.controlBorderRadius[l];return r.cloneElement(n,{dangerouslySetInlineStyle:"vertical"===i?{buttonStyle:(0,o.default)({borderBottomWidth:1,borderColor:a.themeVariables.colors.border.default,borderRadius:0,borderWidth:0,elevation:0},0===t&&{borderTopLeftRadius:d,borderTopRightRadius:d},s-1===t&&{borderBottomLeftRadius:d,borderBottomRightRadius:d,borderBottomWidth:0})}:{buttonStyle:(0,o.default)({borderColor:a.themeVariables.colors.border.default,borderLeftWidth:0,borderRadius:0,elevation:0},0===t&&{borderBottomLeftRadius:d,borderTopLeftRadius:d},s-1===t&&{borderBottomRightRadius:d,borderTopRightRadius:d})}})});return r.createElement(l.Box,{flexDirection:d[i]},u)},c=(0,s.withTheme)(u);t.default=c;try{u.displayName="ButtonGroup",u.__docgenInfo={description:"",displayName:"ButtonGroup",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ButtonGroupDirection"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/ButtonGroup.tsx#ButtonGroup"]={docgenInfo:u.__docgenInfo,name:"ButtonGroup",path:"src/components/Button/ButtonGroup.tsx#ButtonGroup"})}catch(p){}},"./src/components/Loading/LoadingDots.tsx":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),a=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=a(n("./node_modules/@babel/runtime/helpers/createClass.js")),s=a(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),l=a(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),d=a(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=i(n("./node_modules/react/index.js")),c=n("./node_modules/react-native-web/dist/index.js"),p=function(e){function t(e){var n;return(0,o.default)(this,t),(n=(0,s.default)(this,(0,l.default)(t).call(this,e))).animationState=void 0,n.animationState={dotOpacities:n.initializeDots(),shouldAnimate:!0,targetOpacity:1},n}return(0,d.default)(t,e),(0,r.default)(t,[{key:"initializeDots",value:function(){for(var e=[],t=0;t<this.props.numberOfDots;t++){var n=new c.Animated.Value(this.props.minOpacity);e.push(n)}return e}},{key:"componentDidMount",value:function(){this.animateDots.bind(this)(0)}},{key:"componentWillUnmount",value:function(){this.animationState.shouldAnimate=!1}},{key:"animateDots",value:function(e){if(this.animationState.shouldAnimate){if(e>=this.animationState.dotOpacities.length){e=0;var t=this.props.minOpacity;this.animationState.targetOpacity=this.animationState.targetOpacity===t?1:t}var n=e+1;c.Animated.timing(this.animationState.dotOpacities[e],{duration:this.props.duration,toValue:this.animationState.targetOpacity}).start(this.animateDots.bind(this,n))}}},{key:"render",value:function(){var e=this.props,t=e.size,n=e.color,i=this.animationState.dotOpacities.map(function(e,i){return u.createElement(c.Animated.View,{key:i,style:{backgroundColor:n,borderRadius:"50%",height:t,marginLeft:3,marginRight:3,opacity:e,width:t}})});return u.createElement(c.View,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"}},i)}}]),t}(u.Component);p.defaultProps={color:"#aaa",duration:300,minOpacity:0,numberOfDots:3,size:10};var m=p;t.default=m;try{p.displayName="LoadingDots",p.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:{value:"3"},description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:{value:"300"},description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:{value:"0"},description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:{value:"#aaa"},description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:{value:"10"},description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/LoadingDots.tsx#LoadingDots"]={docgenInfo:p.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/LoadingDots.tsx#LoadingDots"})}catch(f){}},"./src/components/Loading/index.ts":function(e,t,n){var i=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadingDots",{enumerable:!0,get:function(){return a.default}});var a=i(n("./src/components/Loading/LoadingDots.tsx"));try{LoadingDots.displayName="LoadingDots",LoadingDots.__docgenInfo={description:"Ported from https://github.com/adorableio/react-native-animated-ellipsis",displayName:"LoadingDots",props:{numberOfDots:{defaultValue:null,description:"",name:"numberOfDots",required:!0,type:{name:"number"}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},minOpacity:{defaultValue:null,description:"",name:"minOpacity",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Loading/index.ts#LoadingDots"]={docgenInfo:LoadingDots.__docgenInfo,name:"LoadingDots",path:"src/components/Loading/index.ts#LoadingDots"})}catch(o){}}}]);
//# sourceMappingURL=15.9521e75addc224cfe3ff.js.map