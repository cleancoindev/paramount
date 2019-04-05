(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"./src/components/Modal/Modal.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),a=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),r=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),s=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),u=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),i=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),d=o(n("./node_modules/react/index.js")),m=n("./node_modules/@mdx-js/tag/dist/index.js"),c=n("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),f=n("./node_modules/docz/dist/index.m.js"),p=n("./src/components/Modal/index.ts"),g=n("./src/components/Button/index.ts"),B=n("./src/components/Layout/index.ts"),x=n("./src/components/Typography/index.ts"),h=function(e){function t(e){var n;return(0,a.default)(this,t),(n=(0,s.default)(this,(0,u.default)(t).call(this,e))).layout=null,n}return(0,i.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,l.default)(e,["components"]);return d.default.createElement(m.MDXTag,{name:"wrapper",components:t},d.default.createElement(m.MDXTag,{name:"h1",components:t,props:{id:"modal"}},"Modal"),d.default.createElement(m.MDXTag,{name:"p",components:t},"Modal covers the full screen. For a prompt/small version of modal, use ",d.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Dialog")),d.default.createElement(m.MDXTag,{name:"h3",components:t,props:{id:"usage"}},"Usage"),d.default.createElement(f.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle, set }) => (\n    <Box>\n      <Modal visible={on} onRequestClose={() => set(false)}>\n        <Box height={1800}>\n          <Text>Put any content in the modal</Text>\n          <Button onPress={() => set(false)} title="Close button one" />\n          <Button onPress={() => set(false)} title="Close button two" />\n        </Box>\n      </Modal>\n      <Button onPress={() => set(true)} title="Open modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Toggle:c.Toggle,Modal:p.Modal,Button:g.Button,Box:B.Box,Text:x.Text}},d.default.createElement(c.Toggle,{initial:!1},function(e){var t=e.on,n=(e.toggle,e.set);return d.default.createElement(B.Box,null,d.default.createElement(p.Modal,{visible:t,onRequestClose:function(){return n(!1)}},d.default.createElement(B.Box,{height:1800},d.default.createElement(x.Text,null,"Put any content in the modal"),d.default.createElement(g.Button,{onPress:function(){return n(!1)},title:"Close button one"}),d.default.createElement(g.Button,{onPress:function(){return n(!1)},title:"Close button two"}))),d.default.createElement(g.Button,{onPress:function(){return n(!0)},title:"Open modal"}))})),d.default.createElement(m.MDXTag,{name:"h3",components:t,props:{id:"nested"}},"Nested"),d.default.createElement(f.Playground,{__position:1,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal visible={outerOn} onRequestClose={() => outerSet(false)}>\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Toggle:c.Toggle,Modal:p.Modal,Button:g.Button,Box:B.Box,Text:x.Text}},d.default.createElement(c.Toggle,{initial:!1},function(e){var t=e.on,n=e.set;return d.default.createElement(B.Box,null,d.default.createElement(p.Modal,{visible:t,onRequestClose:function(){return n(!1)}},d.default.createElement(B.Box,{height:1800},d.default.createElement(x.Text,null,"Outer modal"),d.default.createElement(g.Button,{onPress:function(){return n(!1)},title:"Close outer modal button one"}),d.default.createElement(g.Button,{onPress:function(){return n(!1)},title:"Close outer modal button two"}),d.default.createElement(c.Toggle,{initial:!1},function(e){var t=e.on,n=e.set;return d.default.createElement(B.Box,null,d.default.createElement(p.Modal,{visible:t,onRequestClose:function(){return n(!1)}},d.default.createElement(B.Box,{height:1800},d.default.createElement(x.Text,null,"Inner modal"),d.default.createElement(g.Button,{onPress:function(){return n(!1)},title:"Close inner modal button one"}),d.default.createElement(g.Button,{onPress:function(){return n(!1)},title:"Close inner modal button two"}))),d.default.createElement(g.Button,{onPress:function(){return n(!0)},title:"Open inner modal"}))}))),d.default.createElement(g.Button,{onPress:function(){return n(!0)},title:"Open outer modal"}))})),d.default.createElement(m.MDXTag,{name:"h3",components:t,props:{id:"using-browser-history"}},"Using browser history"),d.default.createElement(m.MDXTag,{name:"p",components:t},"By using ",d.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"useHistory")," prop it will mimic Android's back button behavior on web which closes modals. On RN, this will have no effect and will use a regular ",d.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Modal"),". Works in nested modals as well."),d.default.createElement(m.MDXTag,{name:"p",components:t},"Note: Uses history ",d.default.createElement(m.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"state")," to manipulate modal state"),d.default.createElement(f.Playground,{__position:2,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal\n        useHistory\n        visible={outerOn}\n        onRequestClose={() => outerSet(false)}\n      >\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  useHistory\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:n,Toggle:c.Toggle,Modal:p.Modal,Button:g.Button,Box:B.Box,Text:x.Text}},d.default.createElement(c.Toggle,{initial:!1},function(e){var t=e.on,n=e.set;return d.default.createElement(B.Box,null,d.default.createElement(p.Modal,{useHistory:!0,visible:t,onRequestClose:function(){return n(!1)}},d.default.createElement(B.Box,{height:1800},d.default.createElement(x.Text,null,"Outer modal"),d.default.createElement(g.Button,{onPress:function(){return n(!1)},title:"Close outer modal button one"}),d.default.createElement(g.Button,{onPress:function(){return n(!1)},title:"Close outer modal button two"}),d.default.createElement(c.Toggle,{initial:!1},function(e){var t=e.on,n=e.set;return d.default.createElement(B.Box,null,d.default.createElement(p.Modal,{visible:t,useHistory:!0,onRequestClose:function(){return n(!1)}},d.default.createElement(B.Box,{height:1800},d.default.createElement(x.Text,null,"Inner modal"),d.default.createElement(g.Button,{onPress:function(){return n(!1)},title:"Close inner modal button one"}),d.default.createElement(g.Button,{onPress:function(){return n(!1)},title:"Close inner modal button two"}))),d.default.createElement(g.Button,{onPress:function(){return n(!0)},title:"Open inner modal"}))}))),d.default.createElement(g.Button,{onPress:function(){return n(!0)},title:"Open outer modal"}))})),d.default.createElement(m.MDXTag,{name:"h2",components:t,props:{id:"modal-props"}},"Modal Props"),d.default.createElement(f.PropsTable,{of:p.Modal}))}}]),t}(d.default.Component);t.default=h}}]);
//# sourceMappingURL=33.28c645b10b8076f9a4c2.js.map