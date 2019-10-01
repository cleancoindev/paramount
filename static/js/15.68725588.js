(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/Box/Box.tsx":function(e,o,r){"use strict";r.d(o,"a",function(){return a});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=r("./node_modules/react/index.js"),i=r("./node_modules/react-native-web/dist/exports/View/index.js"),l=r("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var m={backgroundColor:function(e,o){return o.colors.background[e]?{backgroundColor:o.colors.background[e]}:{backgroundColor:e}},elevation:function(e,o){return o.elevations[e]},shape:function(e,o){return o.containerShapes[e]}},a=function(e){var o=e.children,r=e.testID,a=Object(n.a)(e,["children","testID"]),u=Object(l.b)(),b=[],c={};for(var s in a)if(s){var d=m[s];if(d){var p=d(a[s],u);b.push(p)}else c[s]=a[s]}return t.createElement(i.a,{testID:r,style:[c,b],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},o)};"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/Layout/Column.tsx":function(e,o,r){"use strict";r.d(o,"a",function(){return f});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),t=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=r("./node_modules/dlv/dist/dlv.umd.js"),m=r.n(l),a=r("./node_modules/react/index.js"),u=r("./node_modules/react-native-web/dist/exports/View/index.js"),b=r("./src/theme/Theme.tsx"),c=r("./src/utils/overrides.ts"),s=r("./src/components/Layout/LayoutContext.tsx"),d=r("./src/components/Layout/Row.tsx"),p="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Column.tsx";"undefined"!==typeof ColumnConfigBase&&ColumnConfigBase&&ColumnConfigBase===Object(ColumnConfigBase)&&Object.isExtensible(ColumnConfigBase)&&Object.defineProperty(ColumnConfigBase,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnConfigBase",filename:"src/components/Layout/Column.tsx"}}),"undefined"!==typeof ColumnConfig&&ColumnConfig&&ColumnConfig===Object(ColumnConfig)&&Object.isExtensible(ColumnConfig)&&Object.defineProperty(ColumnConfig,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnConfig",filename:"src/components/Layout/Column.tsx"}}),"undefined"!==typeof ColumnProps&&ColumnProps&&ColumnProps===Object(ColumnProps)&&Object.isExtensible(ColumnProps)&&Object.defineProperty(ColumnProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnProps",filename:"src/components/Layout/Column.tsx"}}),"undefined"!==typeof ColumnOverride&&ColumnOverride&&ColumnOverride===Object(ColumnOverride)&&Object.isExtensible(ColumnOverride)&&Object.defineProperty(ColumnOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ColumnOverride",filename:"src/components/Layout/Column.tsx"}});var f=function(e){var o=e.children,r=e.override,l=Object(i.a)(e,["children","override"]),u=Object(b.b)(),s=Object(c.a)(_,e,m()(u,"overrides.Column"),r),d=Object(t.a)(s,2),f=d[0],x=d[1];return a.createElement(f,Object(n.a)({},l,x,{__source:{fileName:p,lineNumber:92}}),o)};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Column",filename:"src/components/Layout/Column.tsx"}});var _=function(e){var o=e.children,r=e.style,t=e.xsmall,l=e.small,m=e.medium,b=e.large,c=e.xlarge,f=e.offsetXsmall,_=e.offsetSmall,h=e.offsetMedium,j=e.offsetLarge,O=e.offsetXlarge,g=Object(i.a)(e,["children","style","xsmall","small","medium","large","xlarge","offsetXsmall","offsetSmall","offsetMedium","offsetLarge","offsetXlarge"]),y={xsmall:t,small:l,medium:m,large:b,xlarge:c,offsetXsmall:f,offsetSmall:_,offsetMedium:h,offsetLarge:j,offsetXlarge:O},v=Object(s.e)(),T=v.currentScreenSize,B=v.gridColumnCount,w=a.useContext(d.a),P=N(y),W=P.columns,R=P.offsetColumns,k=x(W,T),L=C(k||12,B),E=x(R,T),S=C(E||0,B);return a.createElement(u.a,Object(n.a)({style:[{flex:1,flexBasis:L,marginLeft:S,maxWidth:L,paddingLeft:w/2,paddingRight:w/2},r]},g,{__source:{fileName:p,lineNumber:141}}),o)},x=function(e,o){var r=e[o];if(r)return r;var n=function(e,o){var r=s.b.indexOf(o),n=s.b.find(function(o,n){return!(r>n)&&!!e[o]});return n?e[n]:null}(e,o);return n||null},C=function(e,o){return"".concat(e*(100/o),"%")};"undefined"!==typeof C&&C&&C===Object(C)&&Object.isExtensible(C)&&Object.defineProperty(C,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getProportion",filename:"src/components/Layout/Column.tsx"}});var N=function(e){var o=e.xsmall,r=e.small,n=e.medium,t=e.large,i=e.xlarge,l=e.offsetXsmall,m=e.offsetSmall,a=e.offsetMedium;return{columns:{xsmall:o,small:r,medium:n,large:t,xlarge:i},offsetColumns:{large:e.offsetLarge,medium:a,small:m,xlarge:e.offsetXlarge,xsmall:l}}};"undefined"!==typeof N&&N&&N===Object(N)&&Object.isExtensible(N)&&Object.defineProperty(N,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"splitColumnConfig",filename:"src/components/Layout/Column.tsx"}})},"./src/components/Layout/Container.tsx":function(e,o,r){"use strict";r.d(o,"a",function(){return p});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=r("./node_modules/dlv/dist/dlv.umd.js"),m=r.n(l),a=r("./node_modules/react/index.js"),u=r("./node_modules/react-native-web/dist/exports/View/index.js"),b=r("./src/theme/Theme.tsx"),c=r("./src/utils/overrides.ts"),s=r("./src/components/Layout/LayoutContext.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Container.tsx";"undefined"!==typeof ContainerProps&&ContainerProps&&ContainerProps===Object(ContainerProps)&&Object.isExtensible(ContainerProps)&&Object.defineProperty(ContainerProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerProps",filename:"src/components/Layout/Container.tsx"}}),"undefined"!==typeof ContainerOverride&&ContainerOverride&&ContainerOverride===Object(ContainerOverride)&&Object.isExtensible(ContainerOverride)&&Object.defineProperty(ContainerOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ContainerOverride",filename:"src/components/Layout/Container.tsx"}});var p=function(e){var o=e.children,r=e.size,n=e.fluid,l=void 0!==n&&n,u=e.override,s=Object(b.b)(),p=Object(c.a)(f,e,m()(s,"overrides.Container"),u),_=Object(i.a)(p,2),x=_[0],C=_[1];return a.createElement(x,Object(t.a)({size:r,fluid:l},C,{__source:{fileName:d,lineNumber:53}}),o)};"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Container",filename:"src/components/Layout/Container.tsx"}});var f=function(e){var o=e.size,r=e.fluid,i=e.children,l=e.style,m=Object(n.a)(e,["size","fluid","children","style"]),b=Object(s.e)(),c=b.gutterWidth,p=b.containerSizes,f=b.currentScreenSize;return a.createElement(u.a,Object(t.a)({style:[{marginLeft:"auto",marginRight:"auto",maxWidth:r?"100%":o?p[o]:_(p,f),paddingLeft:c/2,paddingRight:c/2,width:"100%"},l]},m,{__source:{fileName:d,lineNumber:70}}),i)},_=function(e,o){var r=s.b.indexOf(o),n=s.b.find(function(o,n){return"xsmall"!==o&&(!(r>n)&&!!e[o])});if("xsmall"!==n)return n?e[n]:void 0}},"./src/components/Layout/Row.tsx":function(e,o,r){"use strict";r.d(o,"a",function(){return p}),r.d(o,"b",function(){return f});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),l=r("./node_modules/dlv/dist/dlv.umd.js"),m=r.n(l),a=r("./node_modules/react/index.js"),u=r("./node_modules/react-native-web/dist/exports/View/index.js"),b=r("./src/theme/Theme.tsx"),c=r("./src/utils/overrides.ts"),s=r("./src/components/Layout/LayoutContext.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Row.tsx";"undefined"!==typeof RowProps&&RowProps&&RowProps===Object(RowProps)&&Object.isExtensible(RowProps)&&Object.defineProperty(RowProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowProps",filename:"src/components/Layout/Row.tsx"}}),"undefined"!==typeof RowOverride&&RowOverride&&RowOverride===Object(RowOverride)&&Object.isExtensible(RowOverride)&&Object.defineProperty(RowOverride,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RowOverride",filename:"src/components/Layout/Row.tsx"}});var p=a.createContext(s.d.gutterWidth);"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GutterWidthContext",filename:"src/components/Layout/Row.tsx"}});var f=function(e){var o=e.children,r=e.hasGutter,n=void 0===r||r,l=e.override,u=Object(s.e)().gutterWidth,f=Object(b.b)(),x=Object(c.a)(_,e,m()(f,"overrides.Row"),l),C=Object(i.a)(x,2),N=C[0],h=C[1];return a.createElement(N,Object(t.a)({hasGutter:n},h,{__source:{fileName:d,lineNumber:49}}),a.createElement(p.Provider,{value:n?u:0,__source:{fileName:d,lineNumber:50}},o))};"undefined"!==typeof f&&f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Row",filename:"src/components/Layout/Row.tsx"}});var _=function(e){var o=e.children,r=e.style,i=e.hasGutter,l=Object(n.a)(e,["children","style","hasGutter"]),m=Object(s.e)().gutterWidth;return a.createElement(u.a,Object(t.a)({style:[{flexDirection:"row",flexWrap:"wrap",marginLeft:i?-m/2:0,marginRight:i?-m/2:0},r]},l,{__source:{fileName:d,lineNumber:67}}),o)}},"./src/components/Layout/RowAndColumn.mdx":function(e,o,r){"use strict";r.r(o),r.d(o,"default",function(){return _});var n=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),t=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),l=r("./node_modules/docz/dist/index.esm.js"),m=r("./src/components/Box/Box.tsx"),a=r("./src/components/Layout/Container.tsx"),u=r("./src/components/Layout/Column.tsx"),b=r("./src/components/Layout/Row.tsx"),c=r("./src/components/Layout/LayoutProvider.tsx"),s=r("./src/components/Typography/Text.tsx"),d="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/RowAndColumn.mdx",p={},f="wrapper";function _(e){var o=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)(f,Object(t.a)({},p,r,{components:o,mdxType:"MDXLayout",__source:{fileName:d,lineNumber:21}}),Object(i.b)("h1",Object(t.a)({id:"row-and-column"},{__source:{fileName:d,lineNumber:24}}),"Row and Column"),Object(i.b)("p",{__source:{fileName:d,lineNumber:27}},Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:27}},"Column")," renders at the width of defined columns count. It will match nearest defined size that is smaller than or equal to current screen size.\n",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:28}},"Row")," wraps ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:28}},"Column"),"s to keep them horizontal"),Object(i.b)("p",{__source:{fileName:d,lineNumber:29}},"Refer to ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:29}},"Layout")," docs for setup"),Object(i.b)("h2",Object(t.a)({id:"usage"},{__source:{fileName:d,lineNumber:30}}),"Usage"),Object(i.b)(l.c,{__position:0,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={1}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={8}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column medium={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column medium={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:r,Playground:l.c,Props:l.d,Box:m.a,Container:a.a,Column:u.a,Row:b.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:33}},Object(i.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:44}},Object(i.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:45}},Object(i.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:46}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:47}},Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:48}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:49}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:51}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:52}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:54}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:55}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:57}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:58}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:60}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:61}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:63}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:64}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:66}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:67}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:69}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:70}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:72}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:73}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:75}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:76}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:78}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:79}})),Object(i.b)(u.a,{medium:1,mdxType:"Column",__source:{fileName:d,lineNumber:81}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:82}}))))),Object(i.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:87}},Object(i.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:88}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:89}},Object(i.b)(u.a,{medium:8,mdxType:"Column",__source:{fileName:d,lineNumber:90}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:91}})),Object(i.b)(u.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:93}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:94}}))))),Object(i.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:99}},Object(i.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:100}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:101}},Object(i.b)(u.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:102}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:103}})),Object(i.b)(u.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:105}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:106}})),Object(i.b)(u.a,{medium:4,mdxType:"Column",__source:{fileName:d,lineNumber:108}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:109}}))))),Object(i.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:114}},Object(i.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:115}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:116}},Object(i.b)(u.a,{medium:6,mdxType:"Column",__source:{fileName:d,lineNumber:117}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:118}})),Object(i.b)(u.a,{medium:6,mdxType:"Column",__source:{fileName:d,lineNumber:120}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:121}}))))))),Object(i.b)("h3",Object(t.a)({id:"column-wrapping"},{__source:{fileName:d,lineNumber:128}}),"Column wrapping"),Object(i.b)(l.c,{__position:1,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column xsmall={9}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={4}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:r,Playground:l.c,Props:l.d,Box:m.a,Container:a.a,Column:u.a,Row:b.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:131}},Object(i.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:142}},Object(i.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:143}},Object(i.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:144}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:145}},Object(i.b)(u.a,{xsmall:9,mdxType:"Column",__source:{fileName:d,lineNumber:146}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:147}})),Object(i.b)(u.a,{xsmall:4,mdxType:"Column",__source:{fileName:d,lineNumber:149}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:150}})),Object(i.b)(u.a,{xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:152}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:153}}))))))),Object(i.b)("h3",Object(t.a)({id:"offsets"},{__source:{fileName:d,lineNumber:160}}),"Offsets"),Object(i.b)(l.c,{__position:2,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row>\n        <Column offsetXsmall={2} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n      <Row>\n        <Column offsetXsmall={4} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n      <Row>\n        <Column offsetXsmall={6} xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:r,Playground:l.c,Props:l.d,Box:m.a,Container:a.a,Column:u.a,Row:b.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:163}},Object(i.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:174}},Object(i.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:175}},Object(i.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:176}},Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:177}},Object(i.b)(u.a,{offsetXsmall:2,xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:178}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:179}}))),Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:182}},Object(i.b)(u.a,{offsetXsmall:4,xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:183}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:184}}))),Object(i.b)(b.b,{mdxType:"Row",__source:{fileName:d,lineNumber:187}},Object(i.b)(u.a,{offsetXsmall:6,xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:188}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:189}}))))))),Object(i.b)("h3",Object(t.a)({id:"without-gutter"},{__source:{fileName:d,lineNumber:196}}),"Without gutter"),Object(i.b)(l.c,{__position:3,__code:'<LayoutProvider>\n  <Box paddingVertical={16}>\n    <Container>\n      <Row hasGutter={false}>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n        <Column xsmall={6}>\n          <Box backgroundColor="#67c6bb" height={48} borderWidth={1} />\n        </Column>\n      </Row>\n    </Container>\n  </Box>\n</LayoutProvider>',__scope:{props:this?this.props:r,Playground:l.c,Props:l.d,Box:m.a,Container:a.a,Column:u.a,Row:b.b,LayoutProvider:c.a,Text:s.a},mdxType:"Playground",__source:{fileName:d,lineNumber:199}},Object(i.b)(c.a,{mdxType:"LayoutProvider",__source:{fileName:d,lineNumber:210}},Object(i.b)(m.a,{paddingVertical:16,mdxType:"Box",__source:{fileName:d,lineNumber:211}},Object(i.b)(a.a,{mdxType:"Container",__source:{fileName:d,lineNumber:212}},Object(i.b)(b.b,{hasGutter:!1,mdxType:"Row",__source:{fileName:d,lineNumber:213}},Object(i.b)(u.a,{xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:214}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:215}})),Object(i.b)(u.a,{xsmall:6,mdxType:"Column",__source:{fileName:d,lineNumber:217}},Object(i.b)(m.a,{backgroundColor:"#67c6bb",height:48,borderWidth:1,mdxType:"Box",__source:{fileName:d,lineNumber:218}}))))))),Object(i.b)("h2",Object(t.a)({id:"row-props"},{__source:{fileName:d,lineNumber:225}}),"Row Props"),Object(i.b)(l.d,{of:b.b,mdxType:"Props",__source:{fileName:d,lineNumber:228}}),Object(i.b)("h2",Object(t.a)({id:"row-customization"},{__source:{fileName:d,lineNumber:229}}),"Row Customization"),Object(i.b)("p",{__source:{fileName:d,lineNumber:232}},"Using ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:232}},"getStyles")," prop"),Object(i.b)("pre",{__source:{fileName:d,lineNumber:233}},Object(i.b)("code",Object(t.a)({parentName:"pre"},{},{__source:{fileName:d,lineNumber:233}}),"RowStyles {\n  rowStyle: ViewStyle;\n}\n\ngetStyles={(RowProps, Theme) => RowStyles}\n")),Object(i.b)("p",{__source:{fileName:d,lineNumber:239}},"Markup"),Object(i.b)("pre",{__source:{fileName:d,lineNumber:240}},Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:d,lineNumber:240}}),"<View rowStyle />\n")),Object(i.b)("h2",Object(t.a)({id:"column-props"},{__source:{fileName:d,lineNumber:244}}),"Column Props"),Object(i.b)(l.d,{of:u.a,mdxType:"Props",__source:{fileName:d,lineNumber:247}}),Object(i.b)("h2",Object(t.a)({id:"column-customization"},{__source:{fileName:d,lineNumber:248}}),"Column Customization"),Object(i.b)("p",{__source:{fileName:d,lineNumber:251}},"Using ",Object(i.b)("inlineCode",{parentName:"p",__source:{fileName:d,lineNumber:251}},"getStyles")," prop"),Object(i.b)("pre",{__source:{fileName:d,lineNumber:252}},Object(i.b)("code",Object(t.a)({parentName:"pre"},{},{__source:{fileName:d,lineNumber:252}}),"ColumnStyles {\n  columnStyle: ViewStyle;\n}\n\ngetStyles={(ColumnProps, Theme) => ColumnStyles}\n")),Object(i.b)("p",{__source:{fileName:d,lineNumber:258}},"Markup"),Object(i.b)("pre",{__source:{fileName:d,lineNumber:259}},Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:d,lineNumber:259}}),"<View columnStyle />\n")))}_&&_===Object(_)&&Object.isExtensible(_)&&Object.defineProperty(_,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Layout/RowAndColumn.mdx"}}),_.isMDXComponent=!0}}]);
//# sourceMappingURL=15.48818ae313f1216d8e7f.js.map