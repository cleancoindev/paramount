(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"./src/components/Modal/Modal.mdx":function(e,n,o){var t=o("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=B;var l=t(o("./node_modules/@babel/runtime/helpers/extends.js")),s=t(o("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),d=(t(o("./node_modules/react/index.js")),o("./node_modules/@mdx-js/react/dist/index.es.js")),r=o("./node_modules/react-powerplug/dist/react-powerplug.esm.js"),i=o("./node_modules/docz/dist/index.esm.js"),u=o("./src/components/Modal/index.ts"),a=o("./src/components/Button/index.ts"),m=o("./src/components/Box/index.ts"),x=o("./src/components/Typography/index.ts"),p={},T="wrapper";function B(e){var n=e.components,o=(0,s.default)(e,["components"]);return(0,d.mdx)(T,(0,l.default)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"modal"},"Modal"),(0,d.mdx)("p",null,"Modal covers the full screen. For a prompt/small version of modal, use ",(0,d.mdx)("inlineCode",{parentName:"p"},"Dialog")),(0,d.mdx)("h3",{id:"usage"},"Usage"),(0,d.mdx)(i.Playground,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle, set }) => (\n    <Box>\n      <Modal\n        visible={on}\n        animationType="slide"\n        onRequestClose={() => set(false)}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the modal</Text>\n          <Button onPress={() => set(false)} title="Close button one" />\n          <Button onPress={() => set(false)} title="Close button two" />\n        </Box>\n      </Modal>\n      <Button onPress={() => set(true)} title="Open modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Toggle:r.Toggle,Playground:i.Playground,Props:i.Props,Modal:u.Modal,Button:a.Button,Box:m.Box,Text:x.Text},mdxType:"Playground"},(0,d.mdx)(r.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var n=e.on,o=(e.toggle,e.set);return(0,d.mdx)(m.Box,{mdxType:"Box"},(0,d.mdx)(u.Modal,{visible:n,animationType:"slide",onRequestClose:function(){return o(!1)},mdxType:"Modal"},(0,d.mdx)(m.Box,{height:1800,mdxType:"Box"},(0,d.mdx)(x.Text,{mdxType:"Text"},"Put any content in the modal"),(0,d.mdx)(a.Button,{onPress:function(){return o(!1)},title:"Close button one",mdxType:"Button"}),(0,d.mdx)(a.Button,{onPress:function(){return o(!1)},title:"Close button two",mdxType:"Button"}))),(0,d.mdx)(a.Button,{onPress:function(){return o(!0)},title:"Open modal",mdxType:"Button"}))})),(0,d.mdx)("h3",{id:"nested"},"Nested"),(0,d.mdx)(i.Playground,{__position:1,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal\n        visible={outerOn}\n        animationType="fade"\n        onRequestClose={() => outerSet(false)}\n      >\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  animationType="slide"\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Toggle:r.Toggle,Playground:i.Playground,Props:i.Props,Modal:u.Modal,Button:a.Button,Box:m.Box,Text:x.Text},mdxType:"Playground"},(0,d.mdx)(r.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var n=e.on,o=e.set;return(0,d.mdx)(m.Box,{mdxType:"Box"},(0,d.mdx)(u.Modal,{visible:n,animationType:"fade",onRequestClose:function(){return o(!1)},mdxType:"Modal"},(0,d.mdx)(m.Box,{height:1800,mdxType:"Box"},(0,d.mdx)(x.Text,{mdxType:"Text"},"Outer modal"),(0,d.mdx)(a.Button,{onPress:function(){return o(!1)},title:"Close outer modal button one",mdxType:"Button"}),(0,d.mdx)(a.Button,{onPress:function(){return o(!1)},title:"Close outer modal button two",mdxType:"Button"}),(0,d.mdx)(r.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var n=e.on,o=e.set;return(0,d.mdx)(m.Box,{mdxType:"Box"},(0,d.mdx)(u.Modal,{visible:n,animationType:"slide",onRequestClose:function(){return o(!1)},mdxType:"Modal"},(0,d.mdx)(m.Box,{height:1800,mdxType:"Box"},(0,d.mdx)(x.Text,{mdxType:"Text"},"Inner modal"),(0,d.mdx)(a.Button,{onPress:function(){return o(!1)},title:"Close inner modal button one",mdxType:"Button"}),(0,d.mdx)(a.Button,{onPress:function(){return o(!1)},title:"Close inner modal button two",mdxType:"Button"}))),(0,d.mdx)(a.Button,{onPress:function(){return o(!0)},title:"Open inner modal",mdxType:"Button"}))}))),(0,d.mdx)(a.Button,{onPress:function(){return o(!0)},title:"Open outer modal",mdxType:"Button"}))})),(0,d.mdx)("h3",{id:"using-browser-history"},"Using browser history"),(0,d.mdx)("p",null,"By using ",(0,d.mdx)("inlineCode",{parentName:"p"},"useHistory")," prop it will mimic Android's back button behavior on web which closes modals. On RN, this will have no effect and will use a regular ",(0,d.mdx)("inlineCode",{parentName:"p"},"Modal"),". Works in nested modals as well."),(0,d.mdx)("p",null,"Note: Uses history ",(0,d.mdx)("inlineCode",{parentName:"p"},"state")," to manipulate modal state"),(0,d.mdx)(i.Playground,{__position:2,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal\n        useHistory\n        visible={outerOn}\n        onRequestClose={() => outerSet(false)}\n      >\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  useHistory\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:this?this.props:o,Toggle:r.Toggle,Playground:i.Playground,Props:i.Props,Modal:u.Modal,Button:a.Button,Box:m.Box,Text:x.Text},mdxType:"Playground"},(0,d.mdx)(r.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var n=e.on,o=e.set;return(0,d.mdx)(m.Box,{mdxType:"Box"},(0,d.mdx)(u.Modal,{useHistory:!0,visible:n,onRequestClose:function(){return o(!1)},mdxType:"Modal"},(0,d.mdx)(m.Box,{height:1800,mdxType:"Box"},(0,d.mdx)(x.Text,{mdxType:"Text"},"Outer modal"),(0,d.mdx)(a.Button,{onPress:function(){return o(!1)},title:"Close outer modal button one",mdxType:"Button"}),(0,d.mdx)(a.Button,{onPress:function(){return o(!1)},title:"Close outer modal button two",mdxType:"Button"}),(0,d.mdx)(r.Toggle,{initial:!1,mdxType:"Toggle"},function(e){var n=e.on,o=e.set;return(0,d.mdx)(m.Box,{mdxType:"Box"},(0,d.mdx)(u.Modal,{visible:n,useHistory:!0,onRequestClose:function(){return o(!1)},mdxType:"Modal"},(0,d.mdx)(m.Box,{height:1800,mdxType:"Box"},(0,d.mdx)(x.Text,{mdxType:"Text"},"Inner modal"),(0,d.mdx)(a.Button,{onPress:function(){return o(!1)},title:"Close inner modal button one",mdxType:"Button"}),(0,d.mdx)(a.Button,{onPress:function(){return o(!1)},title:"Close inner modal button two",mdxType:"Button"}))),(0,d.mdx)(a.Button,{onPress:function(){return o(!0)},title:"Open inner modal",mdxType:"Button"}))}))),(0,d.mdx)(a.Button,{onPress:function(){return o(!0)},title:"Open outer modal",mdxType:"Button"}))})),(0,d.mdx)("h3",{id:"props"},"Props"),(0,d.mdx)(i.Props,{of:u.Modal,mdxType:"Props"}))}B&&B===Object(B)&&Object.isExtensible(B)&&Object.defineProperty(B,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Modal/Modal.mdx"}}),B.isMDXComponent=!0}}]);
//# sourceMappingURL=36.7497981aa2fc1635455c.js.map