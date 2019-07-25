(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"./src/components/Layout/Layout.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return s});var a=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=(t("./node_modules/react/index.js"),t("./node_modules/@mdx-js/react/dist/index.es.js")),i="/home/travis/build/WeTrustPlatform/paramount/src/components/Layout/Layout.mdx",l={},u="wrapper";function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)(u,Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout",__source:{fileName:i,lineNumber:20}}),Object(o.b)("h1",Object(r.a)({id:"layout"},{__source:{fileName:i,lineNumber:21}}),"Layout"),Object(o.b)("p",{__source:{fileName:i,lineNumber:24}},"Paramount provides building blocks to create responsive layout via components ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:24}},"Visible"),", ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:24}},"Row and Column"),", ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:24}},"Container")," and convenience functions (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#usage"},{__source:{fileName:i,lineNumber:24}}),"see Usage"),")"),Object(o.b)("h2",Object(r.a)({id:"setup"},{__source:{fileName:i,lineNumber:27}}),"Setup"),Object(o.b)("p",{__source:{fileName:i,lineNumber:30}},"Put ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:30}},"LayoutProvider")," at the top level component to wrap components that make use of ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:30}},"LayoutContext"),". For options, ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#options"},{__source:{fileName:i,lineNumber:30}}),"see Configuration Options")),Object(o.b)("pre",{__source:{fileName:i,lineNumber:33}},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:i,lineNumber:33}}),"<LayoutProvider value={options}>{children}</LayoutProvider>\n")),Object(o.b)("h2",Object(r.a)({id:"usage"},{__source:{fileName:i,lineNumber:37}}),"Usage"),Object(o.b)("p",{__source:{fileName:i,lineNumber:40}},"Paramount exposes a convenience hook ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:40}},"useLayout")," that you can import to make use of utility functions for layout"),Object(o.b)("h3",Object(r.a)({id:"currentscreensize"},{__source:{fileName:i,lineNumber:41}}),"currentScreenSize"),Object(o.b)("p",{__source:{fileName:i,lineNumber:44}},"Retrieves the current screen size"),Object(o.b)("pre",{__source:{fileName:i,lineNumber:45}},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:i,lineNumber:45}}),"const MyComponent = () => {\n  const { currentScreenSize } = useLayout();\n\n  console.log(currentScreenSize);\n  // either xsmall, small, medium, large, xlarge\n  ...\n}\n")),Object(o.b)("h3",Object(r.a)({id:"getresponsivevalue"},{__source:{fileName:i,lineNumber:55}}),"getResponsiveValue"),Object(o.b)("p",{__source:{fileName:i,lineNumber:58}},"Returns arbitrary value that matches nearest defined size that is smaller than or equal to current screen size"),Object(o.b)("pre",{__source:{fileName:i,lineNumber:59}},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"},{__source:{fileName:i,lineNumber:59}}),"const MyComponent = () => {\n  const { getResponsiveValue } = useLayout();\n\n  // Can be strings, numbers or any\n  const value = getResponsiveValue({ xsmall: 'blue', large: 'red' });\n\n  console.log(value);\n  // If currentScreenSize is large, it will return `red`\n  // If currentScreenSize is small, it will return `blue`\n  // If currentScreenSize is xsmall, it will return `blue`\n  ...\n}\n")),Object(o.b)("h3",Object(r.a)({id:"responsive-components"},{__source:{fileName:i,lineNumber:74}}),"Responsive Components"),Object(o.b)("p",{__source:{fileName:i,lineNumber:77}},Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:77}},"Visible"),", ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:77}},"Row and Column"),", ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:i,lineNumber:77}},"Container")),Object(o.b)("h2",Object(r.a)({id:"options"},{__source:{fileName:i,lineNumber:78}}),"Options"),Object(o.b)("p",{__source:{fileName:i,lineNumber:81}},"These are all the available configuration options, as well as the default layout configuration"),Object(o.b)("pre",{__source:{fileName:i,lineNumber:82}},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"},{__source:{fileName:i,lineNumber:82}}),"export const defaultLayout: LayoutInterface = {\n  breakpoints: {\n    small: 480,\n\n    medium: 768,\n\n    large: 992,\n\n    xlarge: 1200,\n  },\n  containerSizes: {\n    small: 540,\n\n    medium: 720,\n\n    large: 960,\n\n    xlarge: 1140,\n  },\n  gridColumnCount: 12,\n  gutterWidth: 30,\n};\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Layout/Layout.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=41.5b19e800acee81b461c1.js.map