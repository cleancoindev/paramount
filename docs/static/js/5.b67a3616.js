(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/components/Toast/Toast.mdx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=o(n("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=o(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=o(n("./node_modules/@babel/runtime/helpers/createClass.js")),i=o(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=o(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),l=o(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(n("./node_modules/react/index.js")),c=n("./node_modules/@mdx-js/tag/dist/index.js"),p=n("./node_modules/docz/dist/index.m.js"),m=n("./src/components/Toast/index.ts"),f=n("./src/components/Button/index.ts"),_=o(n("./src/components/Toast/Toast.tsx")),T=function(e){function t(e){var n;return(0,r.default)(this,t),(n=(0,i.default)(this,(0,d.default)(t).call(this,e))).layout=null,n}return(0,l.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){var e=this.props,t=e.components,n=(0,s.default)(e,["components"]);return u.default.createElement(c.MDXTag,{name:"wrapper",components:t},u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"usage"}},"Usage"),u.default.createElement(c.MDXTag,{name:"h3",components:t,props:{id:"go"}},"Go"),u.default.createElement(p.Playground,{__codesandbox:"undefined",__position:0,__code:"<ToastProvider>\n  <ToastConsumer>\n    {({ notify }) => (\n      <>\n        <Button\n          onPress={() =>\n            notify({ title: 'Title', description: 'Description' })\n          }\n        >\n          Open default toast\n        </Button>\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'success',\n              title: 'Title',\n            })\n          }\n        >\n          Open success toast\n        </Button>\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'danger',\n              title: 'Title',\n            })\n          }\n        >\n          Open danger toast\n        </Button>\n        <Button\n          onPress={() =>\n            notify({\n              description: 'Description',\n              intent: 'warning',\n              title: 'Title',\n            })\n          }\n        >\n          Open warning toast\n        </Button>\n      </>\n    )}\n  </ToastConsumer>\n</ToastProvider>",__scope:{props:this?this.props:n,ToastConsumer:m.ToastConsumer,ToastProvider:m.ToastProvider,Button:f.Button,Toast:_.default}},u.default.createElement(m.ToastProvider,null,u.default.createElement(m.ToastConsumer,null,function(e){var t=e.notify;return u.default.createElement(u.default.Fragment,null,u.default.createElement(f.Button,{onPress:function(){return t({title:"Title",description:"Description"})}},"Open default toast"),u.default.createElement(f.Button,{onPress:function(){return t({description:"Description",intent:"success",title:"Title"})}},"Open success toast"),u.default.createElement(f.Button,{onPress:function(){return t({description:"Description",intent:"danger",title:"Title"})}},"Open danger toast"),u.default.createElement(f.Button,{onPress:function(){return t({description:"Description",intent:"warning",title:"Title"})}},"Open warning toast"))}))),u.default.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"props"}},"Props"),u.default.createElement(p.PropsTable,{of:_.default}))}}]),t}(u.default.Component);t.default=T},"./src/components/Toast/Toast.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Toast=void 0;var r=s(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),a=s(n("./node_modules/@babel/runtime/helpers/createClass.js")),i=s(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),d=s(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),l=s(n("./node_modules/@babel/runtime/helpers/inherits.js")),u=o(n("./node_modules/react/index.js")),c=n("./node_modules/react-native-web/dist/index.js"),p=n("./src/theme/index.ts"),m=n("./src/components/Layout/index.ts"),f=n("./src/components/Typography/index.ts"),_=function(e){function t(e){var n;return(0,r.default)(this,t),(n=(0,i.default)(this,(0,d.default)(t).call(this,e))).closeTimer=null,n.state={offset:new c.Animated.Value(-100)},n}return(0,l.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onRemove,n=e.duration,o=this.state.offset;c.Animated.sequence([c.Animated.spring(o,{tension:-5,toValue:0}),c.Animated.timing(o,{duration:n,easing:c.Easing.ease,toValue:-100})]).start(function(){return t()})}},{key:"render",value:function(){var e=this.props,t=e.theme,n=e.component,o=e.title,s=e.description,r=e.intent,a=void 0===r?"info":r,i=t.getToastStyles(a),d=i.toastStyle,l=i.textStyle;return u.createElement(c.Animated.View,{style:{transform:[{translateY:this.state.offset}]}},n||u.createElement(m.Box,d,u.createElement(f.Text,{dangerouslySetInlineStyle:{__style:l},size:"large"},o),u.createElement(f.Text,{dangerouslySetInlineStyle:{__style:l}},s)))}}]),t}(u.Component),T=(0,p.withTheme)(_);t.Toast=T;var y=T;t.default=y;try{T.displayName="Toast",T.__docgenInfo={description:"",displayName:"Toast",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactNode"}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:'"danger" | "info" | "success" | "warning"'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#Toast"]={docgenInfo:T.__docgenInfo,name:"Toast",path:"src/components/Toast/Toast.tsx#Toast"})}catch(C){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"() => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},duration:{defaultValue:null,description:"",name:"duration",required:!1,type:{name:"number"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ReactNode"}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:'"danger" | "info" | "success" | "warning"'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/Toast.tsx#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Toast/Toast.tsx#__class"})}catch(C){}},"./src/components/Toast/ToastContext.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(t,"__esModule",{value:!0}),t.ToastConsumer=t.ToastProvider=void 0;var s=o(n("./node_modules/react/index.js")).createContext({danger:function(){return null},notify:function(){return null},success:function(){return null},warning:function(){return null}}),r=s.Provider,a=s.Consumer;t.ToastConsumer=a,t.ToastProvider=r;try{ProviderExoticComponent.displayName="ProviderExoticComponent",ProviderExoticComponent.__docgenInfo={description:"",displayName:"ProviderExoticComponent",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"IToastContext"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastContext.ts#ProviderExoticComponent"]={docgenInfo:ProviderExoticComponent.__docgenInfo,name:"ProviderExoticComponent",path:"src/components/Toast/ToastContext.ts#ProviderExoticComponent"})}catch(i){}try{ExoticComponent.displayName="ExoticComponent",ExoticComponent.__docgenInfo={description:"",displayName:"ExoticComponent",props:{unstable_observedBits:{defaultValue:null,description:"",name:"unstable_observedBits",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastContext.ts#ExoticComponent"]={docgenInfo:ExoticComponent.__docgenInfo,name:"ExoticComponent",path:"src/components/Toast/ToastContext.ts#ExoticComponent"})}catch(i){}},"./src/components/Toast/ToastProvider.tsx":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ToastProvider=void 0;var r=s(n("./node_modules/@babel/runtime/helpers/extends.js")),a=s(n("./node_modules/@babel/runtime/helpers/objectSpread.js")),i=s(n("./node_modules/@babel/runtime/helpers/slicedToArray.js")),d=s(n("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),l=s(n("./node_modules/@babel/runtime/helpers/classCallCheck.js")),u=s(n("./node_modules/@babel/runtime/helpers/createClass.js")),c=s(n("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js")),p=s(n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js")),m=s(n("./node_modules/@babel/runtime/helpers/inherits.js")),f=o(n("./node_modules/react/index.js")),_=n("./node_modules/react-native-web/dist/index.js"),T=n("./src/theme/index.ts"),y=s(n("./src/components/Toast/Toast.tsx")),C=n("./src/components/Toast/ToastContext.ts"),v=function(e){return!!e.id},b=function(e){function t(e){var n;return(0,l.default)(this,t),(n=(0,c.default)(this,(0,p.default)(t).call(this,e))).removeToast=function(e){n.setState(function(t){return{toasts:t.toasts.filter(function(t){return t.id!==e})}})},n.notify=function(e){var t=n.createToastInstance(e);if(v(e)){var o=!0,s=!1,r=void 0;try{for(var a,i=n.state.toasts["function"===typeof Symbol&&"function"===typeof Symbol?Symbol.iterator:"@@iterator"]();!(o=(a=i.next()).done);o=!0){var l=a.value;String(l.id).startsWith(String(e.id))&&n.removeToast(l.id)}}catch(u){s=!0,r=u}finally{try{o||null==i.return||i.return()}finally{if(s)throw r}}}n.setState(function(e){return{toasts:(0,d.default)(e.toasts).concat([t])}})},n.createToastInstance=function(e){var o=++t.idCounter,s=v(e)?"".concat(e.id,"-").concat(o):"".concat(o);return{component:e.component,description:e.description,duration:e.duration||1e3,id:s,intent:e.intent,onRemove:function(){return n.removeToast(s)},title:e.title}},n.state={toasts:[]},n}return(0,m.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.children,o=t.theme,s=this.state.toasts,d=(0,i.default)(s,1)[0],l=o.getToastStyles("info").containerStyle;return f.createElement(C.ToastProvider,{value:{danger:function(t){return e.notify((0,a.default)({},t,{intent:"danger"}))},notify:function(t){return e.notify((0,a.default)({},t))},success:function(t){return e.notify((0,a.default)({},t,{intent:"success"}))},warning:function(t){return e.notify((0,a.default)({},t,{intent:"warning"}))}}},n,f.createElement(_.View,{style:l},d&&f.createElement(y.default,(0,r.default)({key:d.id},d))))}}]),t}(f.Component);t.ToastProvider=b,b.idCounter=0;var h=(0,T.withTheme)(b);t.default=h;try{b.displayName="ToastProvider",b.__docgenInfo={description:"",displayName:"ToastProvider",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/ToastProvider.tsx#ToastProvider"]={docgenInfo:b.__docgenInfo,name:"ToastProvider",path:"src/components/Toast/ToastProvider.tsx#ToastProvider"})}catch(E){}},"./src/components/Toast/index.ts":function(e,t,n){var o=n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ToastConsumer",{enumerable:!0,get:function(){return s.ToastConsumer}}),Object.defineProperty(t,"ToastContextProvider",{enumerable:!0,get:function(){return s.ToastProvider}}),Object.defineProperty(t,"ToastProvider",{enumerable:!0,get:function(){return r.default}});var s=n("./src/components/Toast/ToastContext.ts"),r=o(n("./src/components/Toast/ToastProvider.tsx"));try{ExoticComponent.displayName="ExoticComponent",ExoticComponent.__docgenInfo={description:"",displayName:"ExoticComponent",props:{unstable_observedBits:{defaultValue:null,description:"",name:"unstable_observedBits",required:!1,type:{name:"number"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.ts#ExoticComponent"]={docgenInfo:ExoticComponent.__docgenInfo,name:"ExoticComponent",path:"src/components/Toast/index.ts#ExoticComponent"})}catch(a){}try{ProviderExoticComponent.displayName="ProviderExoticComponent",ProviderExoticComponent.__docgenInfo={description:"",displayName:"ProviderExoticComponent",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"IToastContext"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.ts#ProviderExoticComponent"]={docgenInfo:ProviderExoticComponent.__docgenInfo,name:"ProviderExoticComponent",path:"src/components/Toast/index.ts#ProviderExoticComponent"})}catch(a){}try{__class.displayName="__class",__class.__docgenInfo={description:"",displayName:"__class",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toast/index.ts#__class"]={docgenInfo:__class.__docgenInfo,name:"__class",path:"src/components/Toast/index.ts#__class"})}catch(a){}}}]);
//# sourceMappingURL=5.45b35819e1a9f842a7f2.js.map