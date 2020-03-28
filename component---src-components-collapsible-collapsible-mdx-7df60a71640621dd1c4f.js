(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1183:function(e,n,o){"use strict";o.r(n),o.d(n,"_frontmatter",(function(){return b})),o.d(n,"default",(function(){return d}));o(16),o(4),o(5),o(3),o(7),o(9),o(2);var t=o(139),l=o(1170),a=o(12),r=o(431),i=o(43),c=o(155);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Collapsible/Collapsible.mdx"}});var p={_frontmatter:b},g=l.a;function d(e){var n=e.components,o=function(e,n){if(null==e)return{};var o,t,l={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(l[o]=e[o]);return l}(e,["components"]);return Object(t.b)(g,s({},p,o,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"collapsible"},"Collapsible"),Object(t.b)("p",null,"Component to reveal and hide content"),Object(t.b)("h2",{id:"usage"},"Usage"),Object(t.b)("h3",{id:"uncontrolled"},"Uncontrolled"),Object(t.b)(a.c,{__position:0,__code:'<Collapsible title="Toggle" initialIsOpen={false}>\n  <Box\n    marginVertical={16}\n    justifyContent="center"\n    alignItems="center"\n    height={300}\n    backgroundColor="#67c6bb"\n  />\n</Collapsible>',__scope:{props:o,DefaultLayout:l.a,Playground:a.c,Props:a.d,Collapsible:r.a,Box:i.a,Toggle:c.a},mdxType:"Playground"},Object(t.b)(r.a,{title:"Toggle",initialIsOpen:!1,mdxType:"Collapsible"},Object(t.b)(i.a,{marginVertical:16,justifyContent:"center",alignItems:"center",height:300,backgroundColor:"#67c6bb",mdxType:"Box"}))),Object(t.b)("h3",{id:"controlled"},"Controlled"),Object(t.b)(a.c,{__position:1,__code:'<Toggle initial={false}>\n  {({ on, toggle }) => (\n    <Collapsible\n      title={on ? \'Close collapsible\' : \'Open collapsible\'}\n      isOpen={on}\n      onOpen={toggle}\n      onClose={toggle}\n    >\n      <Box\n        marginVertical={16}\n        justifyContent="center"\n        alignItems="center"\n        height={300}\n        backgroundColor="#67c6bb"\n      />\n    </Collapsible>\n  )}\n</Toggle>',__scope:{props:o,DefaultLayout:l.a,Playground:a.c,Props:a.d,Collapsible:r.a,Box:i.a,Toggle:c.a},mdxType:"Playground"},Object(t.b)(c.a,{initial:!1,mdxType:"Toggle"},(function(e){var n=e.on,o=e.toggle;return Object(t.b)(r.a,{title:n?"Close collapsible":"Open collapsible",isOpen:n,onOpen:o,onClose:o,mdxType:"Collapsible"},Object(t.b)(i.a,{marginVertical:16,justifyContent:"center",alignItems:"center",height:300,backgroundColor:"#67c6bb",mdxType:"Box"}))}))),Object(t.b)("h2",{id:"props"},"Props"),Object(t.b)(a.d,{of:r.a,mdxType:"Props"}),Object(t.b)("h2",{id:"overrides"},"Overrides"),Object(t.b)("pre",null,Object(t.b)("code",s({parentName:"pre"},{className:"language-ts"}),"export interface CollapsibleOverrides {\n  Touchable: TouchableProps;\n  Title: TitleProps;\n  IconOpen: IconProps;\n  IconClose: IconProps;\n  Content: ContentProps;\n}\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Collapsible/Collapsible.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-collapsible-collapsible-mdx-7df60a71640621dd1c4f.js.map