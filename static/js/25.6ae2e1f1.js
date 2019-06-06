(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./src/components/Box/Box.tsx":function(e,i,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),o=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(i,"__esModule",{value:!0}),i.Box=i.shapeMapping=i.BASE_BORDER_RADII=void 0;var n=o(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=r(t("./node_modules/react/index.js")),d=t("./node_modules/react-native-web/dist/index.js"),l=t("./src/theme/index.ts");i.BASE_BORDER_RADII=4,4===Object(4)&&Object.isExtensible(4)&&Object.defineProperty(4,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BASE_BORDER_RADII",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof Shape&&Shape&&Shape===Object(Shape)&&Object.isExtensible(Shape)&&Object.defineProperty(Shape,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Shape",filename:"src/components/Box/Box.tsx"}}),"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var a={circle:{borderRadius:999},pill:{borderRadius:999},rounded:{borderRadius:4},roundedBottom:{borderBottomLeftRadius:4,borderBottomRightRadius:4},roundedLeft:{borderBottomLeftRadius:4,borderTopLeftRadius:4},roundedRight:{borderBottomRightRadius:4,borderTopRightRadius:4},roundedTop:{borderTopLeftRadius:4,borderTopRightRadius:4},square:{borderRadius:0}};i.shapeMapping=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"shapeMapping",filename:"src/components/Box/Box.tsx"}});var u={backgroundColor:function(e,i){return i.colors.background[e]?{backgroundColor:i.colors.background[e]}:{backgroundColor:e}},elevation:function(e,i){return i.elevations[e]},shape:function(e){function i(i){return e.apply(this,arguments)}return i.toString=function(){return e.toString()},i}(function(e){return a[e]})},c=function(e){var i=e.children,t=e.style,r=e.testID,o=(0,n.default)(e,["children","style","testID"]),a=(0,l.useTheme)(),c=[],p={};for(var m in o)if(m){var b=u[m];if(b){var f=b(o[m],a);c.push(f)}else p[m]=o[m]}return s.createElement(d.View,{testID:r,style:[p,c,t]},i)};i.Box=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Box/index.ts":function(e,i,t){Object.defineProperty(i,"__esModule",{value:!0});var r=t("./src/components/Box/Box.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(i,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/components/Divider/Divider.mdx":function(e,i,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(i,"__esModule",{value:!0}),i.default=p;var o=r(t("./node_modules/@babel/runtime/helpers/extends.js")),n=r(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=(r(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),d=t("./node_modules/docz/dist/index.esm.js"),l=t("./src/components/Divider/Divider.tsx"),a=t("./src/components/Box/index.ts"),u={},c="wrapper";function p(e){var i=e.components,t=(0,n.default)(e,["components"]);return(0,s.mdx)(c,(0,o.default)({},u,t,{components:i,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"divider"},"Divider"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(d.Playground,{__position:0,__code:'<Box paddingVertical={40}>\n  <Divider\n    size={3}\n    color="#67c6bb"\n    position="horizontal"\n    getStyles={(props, theme) => ({\n      dividerStyle: {},\n    })}\n  />\n</Box>',__scope:{props:this?this.props:t,Playground:d.Playground,Props:d.Props,Divider:l.Divider,Box:a.Box},mdxType:"Playground"},(0,s.mdx)(a.Box,{paddingVertical:40,mdxType:"Box"},(0,s.mdx)(l.Divider,{size:3,color:"#67c6bb",position:"horizontal",getStyles:function(e,i){return{dividerStyle:{}}},mdxType:"Divider"}))),(0,s.mdx)("h3",{id:"props"},"Props"),(0,s.mdx)(d.Props,{of:l.Divider,mdxType:"Props"}))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Divider/Divider.mdx"}}),p.isMDXComponent=!0},"./src/components/Divider/Divider.styles.ts":function(e,i){Object.defineProperty(i,"__esModule",{value:!0}),i.getDividerStyles=i.getDividerColor=void 0,"undefined"!==typeof DividerStyles&&DividerStyles&&DividerStyles===Object(DividerStyles)&&Object.isExtensible(DividerStyles)&&Object.defineProperty(DividerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerStyles",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof DividerPosition&&DividerPosition&&DividerPosition===Object(DividerPosition)&&Object.isExtensible(DividerPosition)&&Object.defineProperty(DividerPosition,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerPosition",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof DividerStylesProps&&DividerStylesProps&&DividerStylesProps===Object(DividerStylesProps)&&Object.isExtensible(DividerStylesProps)&&Object.defineProperty(DividerStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerStylesProps",filename:"src/components/Divider/Divider.styles.ts"}}),"undefined"!==typeof GetDividerStyles&&GetDividerStyles&&GetDividerStyles===Object(GetDividerStyles)&&Object.isExtensible(GetDividerStyles)&&Object.defineProperty(GetDividerStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetDividerStyles",filename:"src/components/Divider/Divider.styles.ts"}});var t=function(e){return function(i){return e[i]||i}};i.getDividerColor=t,t&&t===Object(t)&&Object.isExtensible(t)&&Object.defineProperty(t,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDividerColor",filename:"src/components/Divider/Divider.styles.ts"}});var r=function(e,i){var r=e.size,o=e.color,n=e.position,s=t(i.colors.border)(o||i.colors.border.default),d={horizontal:{backgroundColor:s,height:r||1,width:"100%"},vertical:{backgroundColor:s,height:"100%",width:r||1}};return{dividerStyle:n?d[n]:d.horizontal}};i.getDividerStyles=r,r&&r===Object(r)&&Object.isExtensible(r)&&Object.defineProperty(r,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getDividerStyles",filename:"src/components/Divider/Divider.styles.ts"}})},"./src/components/Divider/Divider.tsx":function(e,i,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(i,"__esModule",{value:!0}),i.Divider=void 0;var o=r(t("./node_modules/react/index.js")),n=t("./node_modules/react-native-web/dist/index.js"),s=t("./src/theme/index.ts"),d=t("./src/utils/mergeStyles.ts"),l=t("./src/components/Divider/Divider.styles.ts");"undefined"!==typeof DividerProps&&DividerProps&&DividerProps===Object(DividerProps)&&Object.isExtensible(DividerProps)&&Object.defineProperty(DividerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"DividerProps",filename:"src/components/Divider/Divider.tsx"}});var a=function(e){var i=e.size,t=e.color,r=e.position,a=void 0===r?"horizontal":r,u=e.getStyles,c=(0,s.useTheme)(),p=(0,d.mergeStyles)(l.getDividerStyles,u)({size:i,color:t,position:a},c).dividerStyle;return o.createElement(n.View,{style:p})};i.Divider=a,a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Divider",filename:"src/components/Divider/Divider.tsx"}})},"./src/utils/mergeStyles.ts":function(e,i,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(i,"__esModule",{value:!0}),i.mergeStyles=void 0;var o=r(t("./node_modules/deepmerge/dist/umd.js"));"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var n=function(e,i){return function(t,r){var n=e(t,r);return i?(0,o.default)(n,i(t,r)):n}};i.mergeStyles=n,n&&n===Object(n)&&Object.isExtensible(n)&&Object.defineProperty(n,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=25.4cc213566970b153ecc8.js.map