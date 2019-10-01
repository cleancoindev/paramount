(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./src/components/Avatar/Avatar.mdx":function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return d});var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),n=r("./node_modules/docz/dist/index.esm.js"),i=r("./src/components/Avatar/Avatar.tsx"),l=r("./src/components/Box/Box.tsx"),c="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.mdx",u={},m="wrapper";function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(s.b)(m,Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout",__source:{fileName:c,lineNumber:21}}),Object(s.b)("h1",Object(a.a)({id:"avatar"},{__source:{fileName:c,lineNumber:23}}),"Avatar"),Object(s.b)("p",{__source:{fileName:c,lineNumber:26}},"Display avatar image, with default for name initials"),Object(s.b)("h2",Object(a.a)({id:"usage"},{__source:{fileName:c,lineNumber:27}}),"Usage"),Object(s.b)(n.c,{__position:0,__code:'<Avatar\n  source={{ uri: \'https://picsum.photos/200/200\', width: 200, height: 200 }}\n  // Fallbacks to name if source is not provided\n  name="Bill Gates"\n  size="large"\n/>',__scope:{props:this?this.props:r,Playground:n.c,Props:n.d,Avatar:i.a,Box:l.a},mdxType:"Playground",__source:{fileName:c,lineNumber:30}},Object(s.b)(i.a,{source:{uri:"https://picsum.photos/200/200",width:200,height:200},name:"Bill Gates",size:"large",mdxType:"Avatar",__source:{fileName:c,lineNumber:37}})),Object(s.b)("h2",Object(a.a)({id:"props"},{__source:{fileName:c,lineNumber:44}}),"Props"),Object(s.b)(n.d,{of:i.a,mdxType:"Props",__source:{fileName:c,lineNumber:47}}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Avatar/Avatar.mdx"}}),d.isMDXComponent=!0},"./src/components/Avatar/Avatar.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return O});var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),n=r("./node_modules/dlv/dist/dlv.umd.js"),i=r.n(n),l=r("./node_modules/react/index.js"),c=r("./node_modules/react-native-web/dist/exports/Image/index.js"),u=r("./node_modules/react-native-web/dist/exports/View/index.js"),m=r("./src/theme/Theme.tsx"),d=r("./src/utils/isControlSize.ts"),b=r("./src/utils/overrides.ts"),p=r("./src/components/Typography/Text.tsx"),v="/home/travis/build/WeTrustPlatform/paramount/src/components/Avatar/Avatar.tsx";"undefined"!==typeof AvatarOverrides&&AvatarOverrides&&AvatarOverrides===Object(AvatarOverrides)&&Object.isExtensible(AvatarOverrides)&&Object.defineProperty(AvatarOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarOverrides",filename:"src/components/Avatar/Avatar.tsx"}}),"undefined"!==typeof AvatarProps&&AvatarProps&&AvatarProps===Object(AvatarProps)&&Object.isExtensible(AvatarProps)&&Object.defineProperty(AvatarProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarProps",filename:"src/components/Avatar/Avatar.tsx"}});var f="",j="medium",_=!1,O=function(e){var t=e.source,r=e.name,o=void 0===r?f:r,n=e.size,c=void 0===n?j:n,u=e.isSolid,d=void 0===u?_:u,p=e.color,O=e.testID,x=e.overrides,h=void 0===x?{}:x,P=Object(m.b)(),N=l.useState(!1),C=Object(s.a)(N,2),B=C[0],w=C[1],E=!t||B,z=Object(b.a)(A,e,i()(P,"overrides.Avatar.Root"),h.Root),S=Object(s.a)(z,2),I=S[0],k=S[1],T=Object(b.a)(g,e,i()(P,"overrides.Avatar.Initial"),h.Initials),D=Object(s.a)(T,2),W=D[0],M=D[1],H=Object(b.a)(y,e,i()(P,"overrides.Avatar.Image"),h.Image),R=Object(s.a)(H,2),X=R[0],G=R[1];return l.createElement(I,Object(a.a)({name:o,size:c,isSolid:d,color:p,testID:O},k,{__source:{fileName:v,lineNumber:99}}),E&&l.createElement(W,Object(a.a)({name:o,size:c,isSolid:d,color:p},M,{__source:{fileName:v,lineNumber:108}})),!E&&!!t&&l.createElement(X,Object(a.a)({onError:function(){return w(!0)},source:t},G,{__source:{fileName:v,lineNumber:117}})))};"undefined"!==typeof O&&O&&O===Object(O)&&Object.isExtensible(O)&&Object.defineProperty(O,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Avatar",filename:"src/components/Avatar/Avatar.tsx"}});var x=function(e){var t=String(e),r=0;if(0===t.trim().length)return r;for(var o=0;o<t.length;o++)r=(r<<5)-r+t.charCodeAt(o),r&=r;return Math.abs(r)};x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"hashCode",filename:"src/components/Avatar/Avatar.tsx"}}),"undefined"!==typeof AvatarColor&&AvatarColor&&AvatarColor===Object(AvatarColor)&&Object.isExtensible(AvatarColor)&&Object.defineProperty(AvatarColor,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"AvatarColor",filename:"src/components/Avatar/Avatar.tsx"}});var h={large:2,medium:1.5,small:1},A=function(e){var t=e.testID,r=e.children,o=e.name,a=void 0===o?f:o,s=e.size,n=void 0===s?j:s,i=e.isSolid,c=void 0===i?_:i,b=e.color,p=e.style,O=Object(m.b)(),A=O.fills[c?"solid":"subtle"],g=Object.keys(A),y=Object(d.a)(n)?O.controlHeights[n]*h[n]:n;return l.createElement(u.a,{style:[{alignItems:"center",backgroundColor:A[b||g[x(a)%g.length]].backgroundColor,borderRadius:9999,display:"flex",height:y,justifyContent:"center",overflow:"hidden",position:"relative",width:y},p],testID:t,__source:{fileName:v,lineNumber:181}},r)},g=function(e){var t=e.name,r=void 0===t?f:t,s=e.size,n=void 0===s?j:s,i=e.isSolid,c=void 0===i?_:i,u=e.color,b=e.style,O=Object(o.a)(e,["name","size","isSolid","color","style"]),A=Object(m.b)(),g=A.fills[c?"solid":"subtle"],y=Object.keys(g),P=Object(d.a)(n)?A.controlHeights[n]*h[n]:n,N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"?";return e?e.replace(/\s+/," ").split(" ").slice(0,2).map(function(e){return e&&e[0].toUpperCase()}).join(""):t}(r);return l.createElement(p.a,Object(a.a)({},O,{override:{style:[{color:g[u||y[x(r)%y.length]].color,fontSize:P/2,lineHeight:P},b]},__source:{fileName:v,lineNumber:245}}),N)},y=function(e){var t=e.style,r=Object(o.a)(e,["style"]);return l.createElement(c.a,Object(a.a)({style:[{height:"100%",width:"100%"},t]},r,{__source:{fileName:v,lineNumber:271}}))}},"./src/components/Box/Box.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return l});var o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=r("./node_modules/react/index.js"),s=r("./node_modules/react-native-web/dist/exports/View/index.js"),n=r("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var i={backgroundColor:function(e,t){return t.colors.background[e]?{backgroundColor:t.colors.background[e]}:{backgroundColor:e}},elevation:function(e,t){return t.elevations[e]},shape:function(e,t){return t.containerShapes[e]}},l=function(e){var t=e.children,r=e.testID,l=Object(o.a)(e,["children","testID"]),c=Object(n.b)(),u=[],m={};for(var d in l)if(d){var b=i[d];if(b){var p=b(l[d],c);u.push(p)}else m[d]=l[d]}return a.createElement(s.a,{testID:r,style:[m,u],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},t)};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/utils/isControlSize.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return o});var o=function(e){return"number"!==typeof e};"undefined"!==typeof o&&o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=18.48818ae313f1216d8e7f.js.map