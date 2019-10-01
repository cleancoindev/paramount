(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"./docs/Layout.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var o=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),a=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i=t("./node_modules/docz/dist/index.esm.js"),u=t("./src/theme/Theme.tsx"),s=t("./src/components/Layout/LayoutContext.tsx"),c=t("./src/components/Typography/Text.tsx"),l="/home/travis/build/WeTrustPlatform/paramount/docs/Layout.mdx",m={},b=function(e){var n=e.children;return Object(a.b)(u.a,{__source:{fileName:l,lineNumber:16}},n)};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(b,Object(r.a)({},m,t,{components:n,mdxType:"MDXLayout",__source:{fileName:l,lineNumber:21}}),Object(a.b)("h1",Object(r.a)({id:"layout"},{__source:{fileName:l,lineNumber:24}}),"Layout"),Object(a.b)("p",{__source:{fileName:l,lineNumber:27}},"Paramount provides building blocks to create responsive layout via components ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"Visible"),", ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"Row and Column"),", ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:27}},"Container")," and convenience functions (",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#usage"},{__source:{fileName:l,lineNumber:27}}),"see Usage"),")"),Object(a.b)("h2",Object(r.a)({id:"setup"},{__source:{fileName:l,lineNumber:30}}),"Setup"),Object(a.b)("p",{__source:{fileName:l,lineNumber:33}},"Make sure to use ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:33}},"ThemeProvider")," at the top-level component. For options, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#options"},{__source:{fileName:l,lineNumber:33}}),"see Configuration Options")),Object(a.b)("pre",{__source:{fileName:l,lineNumber:36}},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:l,lineNumber:36}}),"<ThemeProvider value={{ layout: options }}>{children}</ThemeProvider>\n")),Object(a.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:l,lineNumber:40}}),"Usage"),Object(a.b)("p",{__source:{fileName:l,lineNumber:43}},"Paramount exposes a convenience hook ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:43}},"useLayout")," that you can import to make use of utility functions for layout"),Object(a.b)("h3",Object(r.a)({id:"currentscreensize"},{__source:{fileName:l,lineNumber:44}}),"currentScreenSize"),Object(a.b)("p",{__source:{fileName:l,lineNumber:47}},"Retrieves the current screen size"),Object(a.b)(i.c,{__position:0,__code:"() => {\n  const { currentScreenSize } = useLayout()\n  return <Text>{`currentScreenSize: ${currentScreenSize}`}</Text>\n}",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,ThemeProvider:u.a,useLayout:s.e,Text:c.a},mdxType:"Playground",__source:{fileName:l,lineNumber:48}},function(){var e=Object(s.e)().currentScreenSize;return Object(a.b)(c.a,{mdxType:"Text",__source:{fileName:l,lineNumber:60}},"currentScreenSize: ".concat(e))}),Object(a.b)("h3",Object(r.a)({id:"getresponsivevalue"},{__source:{fileName:l,lineNumber:63}}),"getResponsiveValue"),Object(a.b)(i.c,{__position:1,__code:"() => {\n  const { getResponsiveValue } = useLayout()\n  const color = getResponsiveValue({\n    xsmall: 'red',\n    large: 'blue',\n  })\n  const number = getResponsiveValue({\n    xsmall: 0,\n    large: 1,\n  })\n  return <Text>{`color: ${color}, number: ${number}`}</Text>\n}",__scope:{props:this?this.props:t,Playground:i.c,Props:i.d,ThemeProvider:u.a,useLayout:s.e,Text:c.a},mdxType:"Playground",__source:{fileName:l,lineNumber:66}},function(){var e=Object(s.e)().getResponsiveValue,n=e({xsmall:"red",large:"blue"}),t=e({xsmall:0,large:1});return Object(a.b)(c.a,{mdxType:"Text",__source:{fileName:l,lineNumber:86}},"color: ".concat(n,", number: ").concat(t))}),Object(a.b)("h3",Object(r.a)({id:"responsive-components"},{__source:{fileName:l,lineNumber:89}}),"Responsive Components"),Object(a.b)("p",{__source:{fileName:l,lineNumber:92}},Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:92}},"Visible"),", ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:92}},"Row and Column"),", ",Object(a.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:92}},"Container")),Object(a.b)("h2",Object(r.a)({id:"options"},{__source:{fileName:l,lineNumber:93}}),"Options"),Object(a.b)("p",{__source:{fileName:l,lineNumber:96}},"These are all the available configuration options, as well as the default layout configuration"),Object(a.b)("pre",{__source:{fileName:l,lineNumber:97}},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"},{__source:{fileName:l,lineNumber:97}}),"export const defaultLayout: Layout = {\n  breakpoints: {\n    small: 480,\n\n    medium: 768,\n\n    large: 992,\n\n    xlarge: 1200,\n  },\n  containerSizes: {\n    small: 540,\n\n    medium: 720,\n\n    large: 960,\n\n    xlarge: 1140,\n  },\n  gridColumnCount: 12,\n  gutterWidth: 30,\n};\n")))}p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/Layout.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=42.b191fb7b5e305d4e6ce0.js.map