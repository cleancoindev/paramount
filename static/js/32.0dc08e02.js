(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./src/components/Avatar/Avatar.mdx":function(e,t,a){var n=a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),s=n(a("./node_modules/@babel/runtime/helpers/classCallCheck.js")),l=n(a("./node_modules/@babel/runtime/helpers/createClass.js")),r=n(a("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=n(a("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=n(a("./node_modules/@babel/runtime/helpers/inherits.js")),d=n(a("./node_modules/react/index.js")),m=a("./node_modules/@mdx-js/tag/dist/index.js"),p=a("./node_modules/docz/dist/index.m.js"),c=n(a("./src/components/Avatar/Avatar.tsx")),f=function(e){function t(e){var a;return(0,s.default)(this,t),(a=(0,r.default)(this,(0,u.default)(t).call(this,e))).layout=null,a}return(0,i.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,a=(0,o.default)(e,["components"]);return d.default.createElement(m.MDXTag,{name:"wrapper",components:t},d.default.createElement(m.MDXTag,{name:"h1",components:t,props:{id:"avatar"}},"Avatar"),d.default.createElement(m.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),d.default.createElement(p.Playground,{__position:0,__code:'<Avatar\n  name="Bill Gates"\n  source={{ uri: \'https://picsum.photos/200/200\' }}\n  size={40}\n  isSolid={false}\n  color="automatic"\n  getInitials={(name, fallback) => `${name.charAt(0)}${name.charAt(5)}`}\n  getStyles={(props, theme) => ({\n    boxStyle: {},\n    textStyle: {},\n    imageStyle: {},\n  })}\n/>',__scope:{props:this?this.props:a,Avatar:c.default}},d.default.createElement(c.default,{name:"Bill Gates",source:{uri:"https://picsum.photos/200/200"},size:40,isSolid:!1,color:"automatic",getInitials:function(e,t){return"".concat(e.charAt(0)).concat(e.charAt(5))},getStyles:function(e,t){return{boxStyle:{},textStyle:{},imageStyle:{}}}})),d.default.createElement(m.MDXTag,{name:"h3",components:t,props:{id:"automatic-name-usage"}},"Automatic name usage"),d.default.createElement(p.Playground,{__position:1,__code:'<Avatar name="Bill Gates" />',__scope:{props:this?this.props:a,Avatar:c.default}},d.default.createElement(c.default,{name:"Bill Gates"})),d.default.createElement(m.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),d.default.createElement(p.PropsTable,{of:c.default}))}}]),t}(d.default.Component);t.default=f}}]);
//# sourceMappingURL=32.6a50c4f886a9f1dce107.js.map