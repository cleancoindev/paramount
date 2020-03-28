(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1204:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return c})),t.d(n,"default",(function(){return x}));t(16),t(5),t(6),t(4),t(7),t(9),t(3);var o=t(144),a=t(1180),l=t(14),r=t(272),i=t(43),s=t(39),u=t(133),b=t(161);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/Modal/Modal.mdx"}});var m={_frontmatter:c},p=a.a;function x(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)t=l[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(p,d({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"modal"},"Modal"),Object(o.b)("p",null,"Modal covers the full screen. For a prompt/small version of modal, use ",Object(o.b)("inlineCode",{parentName:"p"},"Dialog")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)(l.c,{__position:0,__code:'<Toggle initial={false}>\n  {({ on, toggle, set }) => (\n    <Box>\n      <Modal\n        visible={on}\n        animationType="slide"\n        onRequestClose={() => set(false)}\n      >\n        <Box height={1800}>\n          <Text>Put any content in the modal</Text>\n          <Button onPress={() => set(false)} title="Close button one" />\n          <Button onPress={() => set(false)} title="Close button two" />\n        </Box>\n      </Modal>\n      <Button onPress={() => set(true)} title="Open modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:t,DefaultLayout:a.a,Playground:l.c,Props:l.d,Modal:r.a,Box:i.a,Text:s.a,Button:u.a,Toggle:b.a},mdxType:"Playground"},Object(o.b)(b.a,{initial:!1,mdxType:"Toggle"},(function(e){var n=e.on,t=(e.toggle,e.set);return Object(o.b)(i.a,{mdxType:"Box"},Object(o.b)(r.a,{visible:n,animationType:"slide",onRequestClose:function(){return t(!1)},mdxType:"Modal"},Object(o.b)(i.a,{height:1800,mdxType:"Box"},Object(o.b)(s.a,{mdxType:"Text"},"Put any content in the modal"),Object(o.b)(u.a,{onPress:function(){return t(!1)},title:"Close button one",mdxType:"Button"}),Object(o.b)(u.a,{onPress:function(){return t(!1)},title:"Close button two",mdxType:"Button"}))),Object(o.b)(u.a,{onPress:function(){return t(!0)},title:"Open modal",mdxType:"Button"}))}))),Object(o.b)("h3",{id:"nested"},"Nested"),Object(o.b)(l.c,{__position:1,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal\n        visible={outerOn}\n        animationType="fade"\n        onRequestClose={() => outerSet(false)}\n      >\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  animationType="slide"\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:t,DefaultLayout:a.a,Playground:l.c,Props:l.d,Modal:r.a,Box:i.a,Text:s.a,Button:u.a,Toggle:b.a},mdxType:"Playground"},Object(o.b)(b.a,{initial:!1,mdxType:"Toggle"},(function(e){var n=e.on,t=e.set;return Object(o.b)(i.a,{mdxType:"Box"},Object(o.b)(r.a,{visible:n,animationType:"fade",onRequestClose:function(){return t(!1)},mdxType:"Modal"},Object(o.b)(i.a,{height:1800,mdxType:"Box"},Object(o.b)(s.a,{mdxType:"Text"},"Outer modal"),Object(o.b)(u.a,{onPress:function(){return t(!1)},title:"Close outer modal button one",mdxType:"Button"}),Object(o.b)(u.a,{onPress:function(){return t(!1)},title:"Close outer modal button two",mdxType:"Button"}),Object(o.b)(b.a,{initial:!1,mdxType:"Toggle"},(function(e){var n=e.on,t=e.set;return Object(o.b)(i.a,{mdxType:"Box"},Object(o.b)(r.a,{visible:n,animationType:"slide",onRequestClose:function(){return t(!1)},mdxType:"Modal"},Object(o.b)(i.a,{height:1800,mdxType:"Box"},Object(o.b)(s.a,{mdxType:"Text"},"Inner modal"),Object(o.b)(u.a,{onPress:function(){return t(!1)},title:"Close inner modal button one",mdxType:"Button"}),Object(o.b)(u.a,{onPress:function(){return t(!1)},title:"Close inner modal button two",mdxType:"Button"}))),Object(o.b)(u.a,{onPress:function(){return t(!0)},title:"Open inner modal",mdxType:"Button"}))})))),Object(o.b)(u.a,{onPress:function(){return t(!0)},title:"Open outer modal",mdxType:"Button"}))}))),Object(o.b)("h3",{id:"using-browser-history"},"Using browser history"),Object(o.b)("p",null,"By using ",Object(o.b)("inlineCode",{parentName:"p"},"useHistory")," prop it will mimic Android's back button behavior on web which closes modals. On RN, this will have no effect and will use a regular ",Object(o.b)("inlineCode",{parentName:"p"},"Modal"),". Works in nested modals as well."),Object(o.b)("p",null,"Note: Uses history ",Object(o.b)("inlineCode",{parentName:"p"},"state")," to manipulate modal state"),Object(o.b)(l.c,{__position:2,__code:'<Toggle initial={false}>\n  {({ on: outerOn, set: outerSet }) => (\n    <Box>\n      <Modal\n        useHistory\n        visible={outerOn}\n        onRequestClose={() => outerSet(false)}\n      >\n        <Box height={1800}>\n          <Text>Outer modal</Text>\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button one"\n          />\n          <Button\n            onPress={() => outerSet(false)}\n            title="Close outer modal button two"\n          />\n          <Toggle initial={false}>\n            {({ on: innerOn, set: innerSet }) => (\n              <Box>\n                <Modal\n                  visible={innerOn}\n                  useHistory\n                  onRequestClose={() => innerSet(false)}\n                >\n                  <Box height={1800}>\n                    <Text>Inner modal</Text>\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button one"\n                    />\n                    <Button\n                      onPress={() => innerSet(false)}\n                      title="Close inner modal button two"\n                    />\n                  </Box>\n                </Modal>\n                <Button\n                  onPress={() => innerSet(true)}\n                  title="Open inner modal"\n                />\n              </Box>\n            )}\n          </Toggle>\n        </Box>\n      </Modal>\n      <Button onPress={() => outerSet(true)} title="Open outer modal" />\n    </Box>\n  )}\n</Toggle>',__scope:{props:t,DefaultLayout:a.a,Playground:l.c,Props:l.d,Modal:r.a,Box:i.a,Text:s.a,Button:u.a,Toggle:b.a},mdxType:"Playground"},Object(o.b)(b.a,{initial:!1,mdxType:"Toggle"},(function(e){var n=e.on,t=e.set;return Object(o.b)(i.a,{mdxType:"Box"},Object(o.b)(r.a,{useHistory:!0,visible:n,onRequestClose:function(){return t(!1)},mdxType:"Modal"},Object(o.b)(i.a,{height:1800,mdxType:"Box"},Object(o.b)(s.a,{mdxType:"Text"},"Outer modal"),Object(o.b)(u.a,{onPress:function(){return t(!1)},title:"Close outer modal button one",mdxType:"Button"}),Object(o.b)(u.a,{onPress:function(){return t(!1)},title:"Close outer modal button two",mdxType:"Button"}),Object(o.b)(b.a,{initial:!1,mdxType:"Toggle"},(function(e){var n=e.on,t=e.set;return Object(o.b)(i.a,{mdxType:"Box"},Object(o.b)(r.a,{visible:n,useHistory:!0,onRequestClose:function(){return t(!1)},mdxType:"Modal"},Object(o.b)(i.a,{height:1800,mdxType:"Box"},Object(o.b)(s.a,{mdxType:"Text"},"Inner modal"),Object(o.b)(u.a,{onPress:function(){return t(!1)},title:"Close inner modal button one",mdxType:"Button"}),Object(o.b)(u.a,{onPress:function(){return t(!1)},title:"Close inner modal button two",mdxType:"Button"}))),Object(o.b)(u.a,{onPress:function(){return t(!0)},title:"Open inner modal",mdxType:"Button"}))})))),Object(o.b)(u.a,{onPress:function(){return t(!0)},title:"Open outer modal",mdxType:"Button"}))}))),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)(l.d,{of:r.a,mdxType:"Props"}))}x&&x===Object(x)&&Object.isExtensible(x)&&!x.hasOwnProperty("__filemeta")&&Object.defineProperty(x,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/Modal/Modal.mdx"}}),x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-modal-modal-mdx-76e54e9c4f3aac737ea3.js.map