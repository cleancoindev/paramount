(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/components/Box/Box.tsx":function(e,n,a){"use strict";a.d(n,"a",function(){return s});var l=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=a("./node_modules/react/index.js"),t=a("./node_modules/react-native-web/dist/exports/View/index.js"),r=a("./src/theme/Theme.tsx");"undefined"!==typeof BoxProps&&BoxProps&&BoxProps===Object(BoxProps)&&Object.isExtensible(BoxProps)&&Object.defineProperty(BoxProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"BoxProps",filename:"src/components/Box/Box.tsx"}});var u={backgroundColor:function(e,n){return n.colors.background[e]?{backgroundColor:n.colors.background[e]}:{backgroundColor:e}},elevation:function(e,n){return n.elevations[e]},shape:function(e,n){return n.containerShapes[e]}},s=function(e){var n=e.children,a=e.testID,s=Object(l.a)(e,["children","testID"]),c=Object(r.b)(),i=[],b={};for(var m in s)if(m){var p=u[m];if(p){var d=p(s[m],c);i.push(d)}else b[m]=s[m]}return o.createElement(t.a,{testID:a,style:[b,i],__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Box/Box.tsx",lineNumber:53}},n)};"undefined"!==typeof s&&s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Box",filename:"src/components/Box/Box.tsx"}})},"./src/components/WheelPicker/WheelPicker.mdx":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return v});var l=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=a("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),t=(a("./node_modules/react/index.js"),a("./node_modules/@mdx-js/react/dist/index.es.js")),r=a("./node_modules/docz/dist/index.esm.js"),u=a("./src/components/Box/Box.tsx"),s=a("./src/components/Helpers/State.tsx"),c=a("./src/components/WheelPicker/WheelPicker.web.tsx"),i=a("./src/components/Icon/Icon.web.tsx"),b=a("./src/components/Inputs/TextInput.tsx"),m="/home/travis/build/WeTrustPlatform/paramount/src/components/WheelPicker/WheelPicker.mdx",p={},d="wrapper";function v(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(t.b)(d,Object(o.a)({},p,a,{components:n,mdxType:"MDXLayout",__source:{fileName:m,lineNumber:21}}),Object(t.b)("h1",Object(o.a)({id:"wheelpicker-experimental"},{__source:{fileName:m,lineNumber:23}}),"WheelPicker (Experimental)"),Object(t.b)(r.c,{__position:0,__code:"<State initial={{ month: 'March', day: '15', year: '2019' }}>\n  {({ state, setState }) => (\n    <Box flexDirection=\"row\">\n      <WheelPicker\n        value={state.month}\n        options={[\n          { label: 'January', value: 'January' },\n          { label: 'February', value: 'February' },\n          { label: 'March', value: 'March' },\n          { label: 'April', value: 'April' },\n          { label: 'May', value: 'May' },\n          { label: 'June', value: 'June' },\n          { label: 'July', value: 'July' },\n          { label: 'August', value: 'August' },\n          { label: 'September', value: 'September' },\n          { label: 'October', value: 'October' },\n          { label: 'November', value: 'November' },\n          { label: 'December', value: 'December' },\n        ]}\n        onValueChange={value => {\n          console.log(value)\n          setState({ month: value })\n        }}\n      />\n      <WheelPicker\n        value={state.day}\n        options={new Array(31)\n          .fill(0)\n          .map((v, i) => ({ label: `${i + 1}`, value: `${i + 1}` }))}\n        onValueChange={value => {\n          console.log(value)\n          setState({ day: value })\n        }}\n      />\n      <WheelPicker\n        value={state.year}\n        options={new Array(50)\n          .fill(0)\n          .map((v, i) => ({ label: `${2000 + i}`, value: `${2000 + i}` }))}\n        onValueChange={value => {\n          console.log(value)\n          setState({ year: value })\n        }}\n      />\n    </Box>\n  )}\n</State>",__scope:{props:this?this.props:a,Playground:r.c,Props:r.d,Box:u.a,State:s.a,WheelPicker:c.a,Icon:i.a,TextInput:b.a},mdxType:"Playground",__source:{fileName:m,lineNumber:26}},Object(t.b)(s.a,{initial:{month:"March",day:"15",year:"2019"},mdxType:"State",__source:{fileName:m,lineNumber:36}},function(e){var n=e.state,a=e.setState;return Object(t.b)(u.a,{flexDirection:"row",mdxType:"Box",__source:{fileName:m,lineNumber:44}},Object(t.b)(c.a,{value:n.month,options:[{label:"January",value:"January"},{label:"February",value:"February"},{label:"March",value:"March"},{label:"April",value:"April"},{label:"May",value:"May"},{label:"June",value:"June"},{label:"July",value:"July"},{label:"August",value:"August"},{label:"September",value:"September"},{label:"October",value:"October"},{label:"November",value:"November"},{label:"December",value:"December"}],onValueChange:function(e){console.log(e),a({month:e})},mdxType:"WheelPicker",__source:{fileName:m,lineNumber:45}}),Object(t.b)(c.a,{value:n.day,options:new Array(31).fill(0).map(function(e,n){return{label:"".concat(n+1),value:"".concat(n+1)}}),onValueChange:function(e){console.log(e),a({day:e})},mdxType:"WheelPicker",__source:{fileName:m,lineNumber:87}}),Object(t.b)(c.a,{value:n.year,options:new Array(50).fill(0).map(function(e,n){return{label:"".concat(2e3+n),value:"".concat(2e3+n)}}),onValueChange:function(e){console.log(e),a({year:e})},mdxType:"WheelPicker",__source:{fileName:m,lineNumber:96}}))})),Object(t.b)("h2",Object(o.a)({id:"props"},{__source:{fileName:m,lineNumber:108}}),"Props"),Object(t.b)(r.d,{of:c.a,mdxType:"Props",__source:{fileName:m,lineNumber:111}}))}v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/WheelPicker/WheelPicker.mdx"}}),v.isMDXComponent=!0},"./src/utils/isControlSize.ts":function(e,n,a){"use strict";a.d(n,"a",function(){return l});var l=function(e){return"number"!==typeof e};"undefined"!==typeof l&&l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=33.48818ae313f1216d8e7f.js.map