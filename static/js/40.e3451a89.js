(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"./src/components/Typography/Paragraph.mdx":function(e,a,r){var o=r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(a,"__esModule",{value:!0}),a.default=x;var n=o(r("./node_modules/@babel/runtime/helpers/extends.js")),p=o(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=(o(r("./node_modules/react/index.js")),r("./node_modules/@mdx-js/react/dist/index.es.js")),t=r("./node_modules/docz/dist/index.esm.js"),m=r("./src/components/Typography/index.ts"),d=r("./src/components/Box/index.ts"),i={},l="wrapper";function x(e){var a=e.components,r=(0,p.default)(e,["components"]);return(0,s.mdx)(l,(0,n.default)({},i,r,{components:a,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"paragraph"},"Paragraph"),(0,s.mdx)("p",null,"Composes React Native's ",(0,s.mdx)("inlineCode",{parentName:"p"},"Text")," component (i.e. you can pass its props)"),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Note!!!")," In web environment sometimes you need to wrap ",(0,s.mdx)("inlineCode",{parentName:"p"},"Paragraph")," in a ",(0,s.mdx)("inlineCode",{parentName:"p"},"<Box>")," or provide a parent node with ",(0,s.mdx)("inlineCode",{parentName:"p"},"display: flex")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"flex-direction: column")," for centering to work properly. In React Native it is non issue because all nodes be default have these properties"),(0,s.mdx)("h3",{id:"usage"},"Usage"),(0,s.mdx)(t.Playground,{__position:0,__code:'<Box>\n  <Paragraph\n    color="primary"\n    align="left"\n    size="large" // small - large or number\n    fontFamily="text"\n    weight="normal"\n    getStyles={(props, theme) => ({\n      paragraphStyle: {},\n    })}\n  >\n    Lorem ipsum dolar set amet\n  </Paragraph>\n</Box>',__scope:{props:this?this.props:r,Playground:t.Playground,Props:t.Props,Paragraph:m.Paragraph,Box:d.Box},mdxType:"Playground"},(0,s.mdx)(d.Box,{mdxType:"Box"},(0,s.mdx)(m.Paragraph,{color:"primary",align:"left",size:"large",fontFamily:"text",weight:"normal",getStyles:function(e,a){return{paragraphStyle:{}}},mdxType:"Paragraph"},"Lorem ipsum dolar set amet"))),(0,s.mdx)("h3",{id:"sizes"},"Sizes"),(0,s.mdx)(t.Playground,{__position:1,__code:'<Box flexDirection="column">\n  <Paragraph size="small">Lorem ipsum dolar set amet</Paragraph>\n  <Paragraph size="medium">Lorem ipsum dolar set amet</Paragraph>\n  <Paragraph size="large">Lorem ipsum dolar set amet</Paragraph>\n</Box>',__scope:{props:this?this.props:r,Playground:t.Playground,Props:t.Props,Paragraph:m.Paragraph,Box:d.Box},mdxType:"Playground"},(0,s.mdx)(d.Box,{flexDirection:"column",mdxType:"Box"},(0,s.mdx)(m.Paragraph,{size:"small",mdxType:"Paragraph"},"Lorem ipsum dolar set amet"),(0,s.mdx)(m.Paragraph,{size:"medium",mdxType:"Paragraph"},"Lorem ipsum dolar set amet"),(0,s.mdx)(m.Paragraph,{size:"large",mdxType:"Paragraph"},"Lorem ipsum dolar set amet"))),(0,s.mdx)("h3",{id:"props"},"Props"),(0,s.mdx)(t.Props,{of:m.Paragraph,mdxType:"Props"}))}x&&x===Object(x)&&Object.isExtensible(x)&&Object.defineProperty(x,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Typography/Paragraph.mdx"}}),x.isMDXComponent=!0}}]);
//# sourceMappingURL=40.23bd610e18d3963597e6.js.map