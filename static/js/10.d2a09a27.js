(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Button/Button.tsx":function(e,t,r){"use strict";var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=r("./node_modules/dlv/dist/dlv.umd.js"),c=r.n(s),l=r("./node_modules/react/index.js"),u=r.n(l),d=r("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),b=r("./src/theme/Theme.tsx"),m=r("./src/utils/isControlSize.ts"),p=r("./src/utils/overrides.ts"),f=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator/index.js"),P=r.n(f),j=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),O=r("./node_modules/react-native-web/dist/exports/View/index.js"),_=r("./node_modules/react-spring/native.cjs.js"),g=function(e,t){return!e},v=function(){var e=u.a.useReducer(g,!0),t=Object(i.a)(e,2)[1];return u.a.useCallback(function(){t(null)},[t])};v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useForceUpdate",filename:"src/hooks/useForceUpdate.ts"}});var y="/home/travis/build/WeTrustPlatform/paramount/src/components/LoadingIndicators/Dots.tsx",k=Object(_.animated)(O.a);"undefined"!==typeof DotsProps&&DotsProps&&DotsProps===Object(DotsProps)&&Object.isExtensible(DotsProps)&&Object.defineProperty(DotsProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DotsProps",filename:"src/components/LoadingIndicators/Dots.tsx"}});var x=function(e){var t=Object(b.b)(),r=e.size,o=void 0===r?10:r,n=e.color,a=void 0===n?t.colors.text.primary:n,i=v(),s=Object(_.useTrail)(3,{config:{duration:800},from:{opacity:0},onRest:i,reset:!0,to:function(){var e=Object(j.a)(P.a.mark(function e(t){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({opacity:1});case 2:return e.next=4,t({opacity:0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()});return l.createElement(O.a,{style:{alignItems:"center",flexDirection:"row",justifyContent:"center"},__source:{fileName:y,lineNumber:34}},s.map(function(e,t){return l.createElement(k,{key:t,style:{backgroundColor:a,borderRadius:999,height:o,marginLeft:3,marginRight:3,opacity:e.opacity,width:o},__source:{fileName:y,lineNumber:42}})}))};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Dots",filename:"src/components/LoadingIndicators/Dots.tsx"}});var h=r("./src/components/Typography/Text.tsx");r.d(t,"a",function(){return S});var N="/home/travis/build/WeTrustPlatform/paramount/src/components/Button/Button.tsx";"undefined"!==typeof ButtonOverrides&&ButtonOverrides&&ButtonOverrides===Object(ButtonOverrides)&&Object.isExtensible(ButtonOverrides)&&Object.defineProperty(ButtonOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonOverrides",filename:"src/components/Button/Button.tsx"}}),"undefined"!==typeof ButtonProps&&ButtonProps&&ButtonProps===Object(ButtonProps)&&Object.isExtensible(ButtonProps)&&Object.defineProperty(ButtonProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ButtonProps",filename:"src/components/Button/Button.tsx"}});var S=function(e){var t=e.appearance,r=void 0===t?"primary":t,o=e.color,n=void 0===o?"default":o,s=e.isDisabled,u=void 0!==s&&s,d=e.isLoading,m=void 0!==d&&d,f=e.size,P=void 0===f?"medium":f,j=e.onPress,O=void 0===j?function(){}:j,_=e.title,g=e.testID,v=e.overrides,y=void 0===v?{}:v,k=Object(b.b)(),x=Object(p.a)(C,e,c()(k,"overrides.Button.Touchable"),y.Touchable),h=Object(i.a)(x,2),S=h[0],E=h[1],D=Object(p.a)(B,e,c()(k,"overrides.Button.Title"),y.Title),R=Object(i.a)(D,2),w=R[0],L=R[1],z=Object(p.a)(I,e,c()(k,"overrides.Button.Loading"),y.Loading),W=Object(i.a)(z,2),A=W[0],U=W[1],H=Object(p.a)(T,e,c()(k,"overrides.Button.IconBefore"),y.IconBefore),V=Object(i.a)(H,2),M=V[0],F=V[1],X=Object(p.a)(T,e,c()(k,"overrides.Button.IconAfter"),y.IconAfter),J=Object(i.a)(X,2),G=J[0],Y=J[1];return l.createElement(S,Object(a.a)({appearance:r,color:n,isDisabled:u,isLoading:m,size:P,onPress:O,testID:g},E,{__source:{fileName:N,lineNumber:117}}),l.createElement(M,Object(a.a)({appearance:r,color:n,isDisabled:u,isLoading:m,size:P},F,{__source:{fileName:N,lineNumber:127}})),m?l.createElement(A,Object(a.a)({appearance:r,color:n},U,{__source:{fileName:N,lineNumber:136}})):l.createElement(w,Object(a.a)({appearance:r,color:n,isDisabled:u,size:P,title:_},L,{__source:{fileName:N,lineNumber:138}})),l.createElement(G,Object(a.a)({appearance:r,color:n,isDisabled:u,isLoading:m,size:P},Y,{__source:{fileName:N,lineNumber:147}})))};"undefined"!==typeof S&&S&&S===Object(S)&&Object.isExtensible(S)&&Object.defineProperty(S,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Button",filename:"src/components/Button/Button.tsx"}});var C=function(e){var t=e.appearance,r=e.color,i=e.isDisabled,s=e.isLoading,c=e.size,u=e.children,p=e.style,f=Object(n.a)(e,["appearance","color","isDisabled","isLoading","size","children","style"]),P=Object(b.b)(),j=function(e,t){return{minimal:{default:{backgroundColor:e.colors.background.content},danger:{backgroundColor:e.colors.background.content},primary:{backgroundColor:e.colors.background.content},secondary:{backgroundColor:e.colors.background.content}},primary:{default:{backgroundColor:t?e.colors.background.greyLight:e.colors.button.default},danger:{backgroundColor:t?e.colors.background.dangerLight:e.colors.button.danger},primary:{backgroundColor:t?e.colors.background.primaryLight:e.colors.button.primary},secondary:{backgroundColor:t?e.colors.background.secondaryLight:e.colors.button.secondary}},outline:{default:{backgroundColor:e.colors.background.content,borderColor:e.colors.text.default,borderWidth:3},danger:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.danger,borderWidth:3},primary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.primary,borderWidth:3},secondary:{backgroundColor:e.colors.background.content,borderColor:e.colors.border.secondary,borderWidth:3}}}}(P,s),O=Object(m.a)(c)?{borderRadius:P.controlBorderRadius[c],height:P.controlHeights[c],paddingLeft:P.controlPaddings[c]+8,paddingRight:P.controlPaddings[c]+8}:{borderRadius:P.controlBorderRadius.medium,height:c,paddingLeft:P.controlPaddings.medium+8,paddingRight:P.controlPaddings.medium+8},_=O.borderRadius,g=O.height,v=O.paddingLeft,y=O.paddingRight;return l.createElement(d.a,Object(a.a)({accessibilityRole:"button",disabled:!(!i&&!s),style:[Object(o.a)({borderRadius:_,height:g,paddingLeft:v,paddingRight:y,flexDirection:"row",alignItems:"center",justifyContent:"center"},j[t][r],i&&{backgroundColor:P.colors.button.disabled}),p]},f,{__source:{fileName:N,lineNumber:277}}),u)},E=function(e){return{minimal:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary},primary:{default:e.colors.button.defaultText,danger:e.colors.button.dangerText,primary:e.colors.button.primaryText,secondary:e.colors.button.secondaryText},outline:{default:e.colors.text.default,danger:e.colors.text.danger,primary:e.colors.text.primary,secondary:e.colors.text.secondary}}},B=function(e){var t=e.appearance,r=e.color,i=e.isDisabled,s=e.size,c=e.title,u=e.style,d=Object(n.a)(e,["appearance","color","isDisabled","size","title","style"]),f=Object(b.b)(),P=Object(m.a)(s)?f.textSizes[s]:f.textSizes.medium;return c?l.createElement(h.a,Object(a.a)({weight:"bold",style:[Object(o.a)({alignItems:"center",color:i?f.colors.text.muted:E(f)[t][r],display:"flex",fontWeight:"600",justifyContent:"center",textAlign:"center",paddingHorizontal:8},P),Object(p.b)(e,u)]},d,{__source:{fileName:N,lineNumber:360}}),c):null},I=function(e){var t=e.appearance,r=e.color,o=Object(b.b)();return l.createElement(x,{color:E(o)[t][r],__source:{fileName:N,lineNumber:393}})},T=function(e){return l.createElement(l.Fragment,null)}},"./src/components/Helpers/State.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=r("./node_modules/react/index.js"),a=r.n(n);"undefined"!==typeof StateRenderProps&&StateRenderProps&&StateRenderProps===Object(StateRenderProps)&&Object.isExtensible(StateRenderProps)&&Object.defineProperty(StateRenderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateRenderProps",filename:"src/components/Helpers/State.tsx"}}),"undefined"!==typeof StateProps&&StateProps&&StateProps===Object(StateProps)&&Object.isExtensible(StateProps)&&Object.defineProperty(StateProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StateProps",filename:"src/components/Helpers/State.tsx"}});var i=function(e){var t=e.children,r=e.initial,n=void 0!==r&&r,i=a.a.useState(n),s=Object(o.a)(i,2),c=s[0],l=s[1];return t({state:c,setState:a.a.useCallback(function(e){l(e)},[])})};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"State",filename:"src/components/Helpers/State.tsx"}})},"./src/components/Pickers/Picker.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return b});var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),i=r("./node_modules/docz/dist/index.esm.js"),s=r("./src/components/Helpers/State.tsx"),c=r("./src/components/Pickers/Picker.tsx"),l="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/Picker.mdx",u={},d="wrapper";function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)(d,Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:l,lineNumber:21}}),Object(a.b)("h1",Object(n.a)({id:"picker"},{__source:{fileName:l,lineNumber:24}}),"Picker"),Object(a.b)("p",{__source:{fileName:l,lineNumber:27}},"You can use a custom component in place of ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"Tab")," component, though keep in mind you need to manage ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"isActive")," and ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"onPress")," by yourself"),Object(a.b)("h2",Object(n.a)({id:"usage"},{__source:{fileName:l,lineNumber:28}}),"Usage"),Object(a.b)(i.c,{__position:0,__code:"<State initial={{ value: 'Tab 1' }}>\n  {({ state, setState }) => (\n    <Picker\n      value={state.value}\n      onValueChange={tab => setState({ value: tab })}\n      data={new Array(4).fill(0).map((v, i) => ({\n        value: `Tab ${i + 1}`,\n      }))}\n    />\n  )}\n</State>",__scope:{props:this?this.props:r,Playground:i.c,Props:i.d,State:s.a,Picker:c.a},mdxType:"Playground",__source:{fileName:l,lineNumber:31}},Object(a.b)(s.a,{initial:{value:"Tab 1"},mdxType:"State",__source:{fileName:l,lineNumber:38}},function(e){var t=e.state,r=e.setState;return Object(a.b)(c.a,{value:t.value,onValueChange:function(e){return r({value:e})},data:new Array(4).fill(0).map(function(e,t){return{value:"Tab ".concat(t+1)}}),mdxType:"Picker",__source:{fileName:l,lineNumber:44}})})),Object(a.b)("h2",Object(n.a)({id:"props"},{__source:{fileName:l,lineNumber:51}}),"Props"),Object(a.b)(i.d,{of:c.a,mdxType:"Props",__source:{fileName:l,lineNumber:54}}))}b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Pickers/Picker.mdx"}}),b.isMDXComponent=!0},"./src/components/Pickers/Picker.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return f});var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=r("./node_modules/dlv/dist/dlv.umd.js"),s=r.n(i),c=r("./node_modules/react/index.js"),l=r("./node_modules/react-native-web/dist/exports/View/index.js"),u=r("./src/theme/Theme.tsx"),d=r("./src/utils/overrides.ts"),b=r("./src/components/Button/Button.tsx"),m=r("./src/components/Pickers/usePicker.tsx"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Pickers/Picker.tsx";"undefined"!==typeof PickerOverrides&&PickerOverrides&&PickerOverrides===Object(PickerOverrides)&&Object.isExtensible(PickerOverrides)&&Object.defineProperty(PickerOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerOverrides",filename:"src/components/Pickers/Picker.tsx"}}),"undefined"!==typeof ItemProps&&ItemProps&&ItemProps===Object(ItemProps)&&Object.isExtensible(ItemProps)&&Object.defineProperty(ItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ItemProps",filename:"src/components/Pickers/Picker.tsx"}}),"undefined"!==typeof PickerProps&&PickerProps&&PickerProps===Object(PickerProps)&&Object.isExtensible(PickerProps)&&Object.defineProperty(PickerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerProps",filename:"src/components/Pickers/Picker.tsx"}});var f=function(e){var t=e.data,r=void 0===t?[]:t,o=e.value,i=e.onValueChange,l=void 0===i?function(){}:i,b=e.keyExtractor,f=e.isMulti,O=e.overrides,_=void 0===O?{}:O,g=Object(u.b)(),v=Object(d.a)(P,e,s()(g,"overrides.Picker.Root"),_.Root),y=Object(a.a)(v,2),k=y[0],x=y[1],h=Object(d.a)(j,e,s()(g,"overrides.Picker.Item"),_.Item),N=Object(a.a)(h,2),S=N[0],C=N[1],E=Object(m.a)({value:o,onValueChange:l,data:r,isMulti:f,keyExtractor:b}),B=E.items,I=E.handleSelect;return c.createElement(k,Object(n.a)({},x,{__source:{fileName:p,lineNumber:82}}),B.map(function(e){return c.createElement(S,Object(n.a)({key:e.key,onSelect:function(){return I(e.value,e.index,e.isSelected)},item:e},C,{__source:{fileName:p,lineNumber:84}}))}))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Picker",filename:"src/components/Pickers/Picker.tsx"}});var P=function(e){var t=e.children,r=e.style,a=Object(o.a)(e,["children","style"]),i=Object(u.b)();return c.createElement(l.a,Object(n.a)({style:[{borderRadius:i.controlBorderRadius.medium,flex:1,flexDirection:"row",justifyContent:"flex-start"},r]},a,{__source:{fileName:p,lineNumber:104}}),t)},j=function(e){var t=e.item,r=e.onSelect,o=t.isSelected,n=t.value,a=Object(u.b)();return c.createElement(b.a,{color:o?"primary":"default",overrides:{Touchable:{style:{backgroundColor:o?"white":"transparent",paddingLeft:0,paddingRight:0}},Title:{style:{color:o?a.colors.text.primary:a.colors.text.muted}}},title:"string"===typeof n?n:"Invalid value",onPress:r,__source:{fileName:p,lineNumber:129}})};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"StyledItem",filename:"src/components/Pickers/Picker.tsx"}})},"./src/components/Pickers/usePicker.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),n=r("./node_modules/react/index.js");"undefined"!==typeof PickerItem&&PickerItem&&PickerItem===Object(PickerItem)&&Object.isExtensible(PickerItem)&&Object.defineProperty(PickerItem,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerItem",filename:"src/components/Pickers/usePicker.tsx"}}),"undefined"!==typeof PickerItemProps&&PickerItemProps&&PickerItemProps===Object(PickerItemProps)&&Object.isExtensible(PickerItemProps)&&Object.defineProperty(PickerItemProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PickerItemProps",filename:"src/components/Pickers/usePicker.tsx"}}),"undefined"!==typeof UsePickerProps&&UsePickerProps&&UsePickerProps===Object(UsePickerProps)&&Object.isExtensible(UsePickerProps)&&Object.defineProperty(UsePickerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UsePickerProps",filename:"src/components/Pickers/usePicker.tsx"}});var a=function(e){return Array.isArray(e)},i=function(e){var t=e.value,r=e.onValueChange,i=void 0===r?function(){}:r,s=e.data,c=void 0===s?[]:s,l=e.keyExtractor;return{handleSelect:n.useCallback(function(e,r,o){a(t)?i(o?t.filter(function(t){return t!==e}):t.concat(e),r):i(e,r)},[t,i]),items:c.map(function(e,r){var n=a(t)?t.some(function(t){return t===e.value}):t===e.value;return Object(o.a)({},e,{key:l?l(e):e.key||"".concat(r),index:r,isSelected:n})})}};"undefined"!==typeof i&&i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"usePicker",filename:"src/components/Pickers/usePicker.tsx"}})},"./src/utils/isControlSize.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return o});var o=function(e){return"number"!==typeof e};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=10.4c284e002fba279a1c41.js.map