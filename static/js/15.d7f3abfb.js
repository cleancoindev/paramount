(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Box/Box.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/react/index.js"),a=n("./node_modules/react-native-web/dist/exports/View/index.js"),s=n("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var i={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},l=function(e){var t=e.children,n=e.testID,l=Object(r.a)(e,["children","testID"]),c=Object(s.b)(),u=[],b={};for(var d in l)if(d){var m=i[d];if(m){var p=m(l[d],c);u.push(p)}else b[d]=l[d]}return o.createElement(a.a,{testID:n,style:[b,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Inputs/TextInput.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return _});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=n("./node_modules/dlv/dist/dlv.umd.js"),l=n.n(i),c=n("./node_modules/react/index.js"),u=n("./node_modules/react-native-web/dist/exports/TextInput/index.js"),b=n("./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js"),d=n("./node_modules/react-native-web/dist/exports/View/index.js"),m=n("./src/theme/Theme.tsx"),p=n("./src/utils/isControlSize.ts"),f=n("./src/utils/overrides.ts"),x=n("./src/components/Icon/Icon.web.tsx"),j="/home/travis/build/WeTrustPlatform/paramount/src/components/Inputs/TextInput.tsx";"undefined"!==typeof TextInputOverrides&&TextInputOverrides&&TextInputOverrides===Object(TextInputOverrides)&&Object.isExtensible(TextInputOverrides)&&Object.defineProperty(TextInputOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputOverrides",filename:"src/components/Inputs/TextInput.tsx"}}),"undefined"!==typeof TextInputProps&&TextInputProps&&TextInputProps===Object(TextInputProps)&&Object.isExtensible(TextInputProps)&&Object.defineProperty(TextInputProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInputProps",filename:"src/components/Inputs/TextInput.tsx"}});var _=function(e){var t=e.size,n=void 0===t?"medium":t,r=e.isClearable,i=void 0!==r&&r,u=e.isDisabled,b=void 0!==u&&u,d=e.isInvalid,p=void 0!==d&&d,x=e.onClear,_=void 0===x?function(){}:x,I=e.onValueChange,N=void 0===I?function(){}:I,L=e.onChangeText,C=void 0===L?function(){}:L,P=e.value,E=e.overrides,B=void 0===E?{}:E,R=Object(s.a)(e,["size","isClearable","isDisabled","isInvalid","onClear","onValueChange","onChangeText","value","overrides"]),w=Object(m.b)(),z=Object(f.a)(h,e,l()(w,"overrides.TextInput.Root"),B.Root),k=Object(a.a)(z,2),W=k[0],D=k[1],S=Object(f.a)(O,e,l()(w,"overrides.TextInput.Input"),B.Input),V=Object(a.a)(S,2),H=V[0],M=V[1],X=Object(f.a)(g,e,l()(w,"overrides.TextInput.LeftIconWrapper"),B.LeftIconWrapper),A=Object(a.a)(X,2),J=A[0],F=A[1],U=Object(f.a)(y,e,l()(w,"overrides.TextInput.LeftIcon"),B.LeftIcon),q=Object(a.a)(U,2),G=q[0],K=q[1],Q=Object(f.a)(v,e,l()(w,"overrides.TextInput.RightIconWrapper"),B.RightIconWrapper),Y=Object(a.a)(Q,2),Z=Y[0],$=Y[1],ee=Object(f.a)(T,e,l()(w,"overrides.TextInput.RightIcon"),B.RightIcon),te=Object(a.a)(ee,2),ne=te[0],re=te[1];return c.createElement(W,Object(o.a)({},D,{__source:{fileName:j,lineNumber:120}}),c.createElement(J,Object(o.a)({},F,{__source:{fileName:j,lineNumber:121}}),c.createElement(G,Object(o.a)({isClearable:i,onClear:_,onValueChange:N,value:P,onChangeText:C},K,{__source:{fileName:j,lineNumber:122}}))),c.createElement(H,Object(o.a)({hasLeftIcon:!!B.LeftIcon,hasRightIcon:!(!i&&!B.RightIcon),size:n,isDisabled:b,isInvalid:p,onValueChange:N,value:P,onChangeText:C},R,M,{__source:{fileName:j,lineNumber:131}})),c.createElement(Z,Object(o.a)({},$,{__source:{fileName:j,lineNumber:143}}),c.createElement(ne,Object(o.a)({isClearable:i,onClear:_,onValueChange:N,value:P,onChangeText:C},re,{__source:{fileName:j,lineNumber:144}}))))};"undefined"!==typeof _&&_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"TextInput",filename:"src/components/Inputs/TextInput.tsx"}});var h=function(e){var t=e.children,n=e.style,r=Object(s.a)(e,["children","style"]);return c.createElement(d.a,Object(o.a)({style:[n]},r,{__source:{fileName:j,lineNumber:167}}),t)},O=function(e){var t=e.isDisabled,n=e.isInvalid,a=e.onValueChange,i=e.onChangeText,l=e.size,b=e.style,d=e.numberOfLines,f=e.textContentType,x=e.hasLeftIcon,_=e.hasRightIcon,h=e.placeholderTextColor,O=Object(s.a)(e,["isDisabled","isInvalid","onValueChange","onChangeText","size","style","numberOfLines","textContentType","hasLeftIcon","hasRightIcon","placeholderTextColor"]),g=Object(m.b)(),v=Object(p.a)(l)?{borderRadius:g.controlBorderRadius[l],height:g.controlHeights[l],paddingLeft:g.controlPaddings[l],paddingRight:g.controlPaddings[l],textSize:g.textSizes[l]}:{borderRadius:g.controlBorderRadius.medium,height:l,paddingLeft:g.controlPaddings.medium,paddingRight:g.controlPaddings.medium,textSize:g.textSizes.medium},y=v.borderRadius,T=v.height,I=v.paddingLeft,N=v.paddingRight,L=v.textSize;return c.createElement(u.a,Object(o.a)({style:[Object(r.a)({backgroundColor:g.colors.background.content,borderColor:g.colors.border.default,borderRadius:y,borderWidth:1,color:g.colors.text.default,height:T,paddingLeft:I,paddingRight:N,width:"100%"},L,t?{backgroundColor:g.colors.background.greyDark}:{},n?{borderColor:g.colors.border.danger}:{},d?{height:d*T,paddingVertical:16}:{},x&&{paddingLeft:40},_&&{paddingRight:40}),b],editable:!t,placeholderTextColor:h||g.colors.text.muted,name:f,numberOfLines:d,textContentType:f,onChangeText:function(e){a(e),i(e)}},O,{__source:{fileName:j,lineNumber:224}}))},g=function(e){var t=e.children,n=e.style,r=Object(s.a)(e,["children","style"]);return c.createElement(d.a,Object(o.a)({style:[{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",left:0,paddingHorizontal:8,position:"absolute",zIndex:1},n]},r,{__source:{fileName:j,lineNumber:272}}),t)},v=function(e){var t=e.children,n=e.style,r=Object(s.a)(e,["children","style"]);return c.createElement(d.a,Object(o.a)({style:[{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",paddingHorizontal:8,position:"absolute",right:0,zIndex:1},n]},r,{__source:{fileName:j,lineNumber:299}}),t)},y=function(e){return c.createElement(c.Fragment,null)},T=function(e){var t=e.isClearable,n=e.onClear,r=e.onValueChange,o=e.onChangeText,a=e.value,s=Object(m.b)();return a&&t?c.createElement(b.a,{onPress:function(){o(""),r(""),n()},__source:{fileName:j,lineNumber:339}},c.createElement(x.a,{name:"x",color:s.colors.text.default,__source:{fileName:j,lineNumber:346}})):null}},"./src/components/Typography/Label.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(n("./node_modules/react/index.js"),n("./node_modules/@mdx-js/react/dist/index.es.js")),s=n("./node_modules/docz/dist/index.esm.js"),i=n("./src/components/Box/Box.tsx"),l=n("./src/components/Inputs/TextInput.tsx"),c=n("./src/components/Typography/Label.tsx"),u="/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Label.mdx",b={},d="wrapper";function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(d,Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout",__source:{fileName:u,lineNumber:21}}),Object(a.b)("h1",Object(o.a)({id:"label"},{__source:{fileName:u,lineNumber:24}}),"Label"),Object(a.b)("p",{__source:{fileName:u,lineNumber:27}},"Composes ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:u,lineNumber:27}},"Text")),Object(a.b)("h2",Object(o.a)({id:"usage"},{__source:{fileName:u,lineNumber:28}}),"Usage"),Object(a.b)(s.c,{__position:0,__code:'<Box>\n  <Label label="Lorem ipsum dolar set amet">\n    <TextInput />\n  </Label>\n</Box>',__scope:{props:this?this.props:n,Playground:s.c,Props:s.d,Box:i.a,TextInput:l.a,Label:c.a},mdxType:"Playground",__source:{fileName:u,lineNumber:31}},Object(a.b)(i.a,{mdxType:"Box",__source:{fileName:u,lineNumber:39}},Object(a.b)(c.a,{label:"Lorem ipsum dolar set amet",mdxType:"Label",__source:{fileName:u,lineNumber:40}},Object(a.b)(l.a,{mdxType:"TextInput",__source:{fileName:u,lineNumber:41}})))),Object(a.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:u,lineNumber:45}}),"Props"),Object(a.b)(s.d,{of:c.a,mdxType:"Props",__source:{fileName:u,lineNumber:48}}))}m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Label.mdx"}}),m.isMDXComponent=!0},"./src/components/Typography/Label.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),s=n("./node_modules/dlv/dist/dlv.umd.js"),i=n.n(s),l=n("./node_modules/react/index.js"),c=n("./node_modules/react-native-web/dist/exports/Platform/index.js"),u=n("./node_modules/react-native-web/dist/exports/View/index.js"),b=n("./src/theme/Theme.tsx"),d=n("./src/utils/overrides.ts"),m=n("./src/components/Typography/Text.tsx"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Typography/Label.tsx";"undefined"!==typeof LabelOverrides&&LabelOverrides&&LabelOverrides===Object(LabelOverrides)&&Object.isExtensible(LabelOverrides)&&Object.defineProperty(LabelOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelOverrides",filename:"src/components/Typography/Label.tsx"}}),"undefined"!==typeof LabelProps&&LabelProps&&LabelProps===Object(LabelProps)&&Object.isExtensible(LabelProps)&&Object.defineProperty(LabelProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LabelProps",filename:"src/components/Typography/Label.tsx"}});var f=function(e){var t=e.children,n=e.position,r=void 0===n?"top":n,s=e.overrides,c=void 0===s?{}:s,u=e.label,m=Object(b.b)(),f=Object(d.a)(x,e,i()(m,"overrides.Label.Root"),c.Root),h=Object(a.a)(f,2),O=h[0],g=h[1],v=Object(d.a)(j,e,i()(m,"overrides.Label.Wrapper"),c.Wrapper),y=Object(a.a)(v,2),T=y[0],I=y[1],N=Object(d.a)(_,e,i()(m,"overrides.Label.LabelText"),c.LabelText),L=Object(a.a)(N,2),C=L[0],P=L[1];return l.createElement(O,Object(o.a)({},g,{__source:{fileName:p,lineNumber:61}}),"top"===r&&l.createElement(C,Object(o.a)({position:r,label:u},P,{__source:{fileName:p,lineNumber:63}})),l.createElement(T,Object(o.a)({position:r},I,{__source:{fileName:p,lineNumber:65}}),"left"===r&&l.createElement(C,Object(o.a)({position:r,label:u},P,{__source:{fileName:p,lineNumber:67}})),t,"right"===r&&l.createElement(C,Object(o.a)({position:r,label:u},P,{__source:{fileName:p,lineNumber:71}}))))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Label",filename:"src/components/Typography/Label.tsx"}});var x=function(e){var t=e.children,n=e.style,a=Object(r.a)(e,["children","style"]);return l.createElement(u.a,Object(o.a)({style:[n]},a,{__source:{fileName:p,lineNumber:88}}),t)},j=function(e){var t=e.children,n=e.style,a=e.position,s=Object(r.a)(e,["children","style","position"]),i={};switch(a){case"left":i={flexDirection:"row",alignItems:"center",paddingRight:8};break;case"right":i={flexDirection:"row",alignItems:"center",paddingLeft:8};break;case"top":default:i={paddingBottom:4}}return l.createElement(u.a,Object(o.a)({style:[i,n]},s,{__source:{fileName:p,lineNumber:127}}),t)},_=function(e){var t=e.label,n=e.position,a=e.style,s=Object(r.a)(e,["label","position","style"]);if(!t)return null;var i={};switch(n){case"left":i={paddingRight:8};break;case"right":i={paddingLeft:8};break;case"top":default:i={paddingBottom:4}}return l.createElement(m.a,Object(o.a)({style:[i,a],accessibilityRole:"web"===c.a.OS?"label":"none"},s,{__source:{fileName:p,lineNumber:161}}),t)}},"./src/utils/isControlSize.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return"number"!==typeof e};"undefined"!==typeof r&&r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=15.45803a928accea938909.js.map