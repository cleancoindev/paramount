(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./src/components/Helpers/Responsive.tsx":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.Responsive=n.isWindowBelowMaxWidth=n.isWindowAboveMinWidth=void 0;var r=t("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof ResponsiveRenderPropType&&ResponsiveRenderPropType&&ResponsiveRenderPropType===Object(ResponsiveRenderPropType)&&Object.isExtensible(ResponsiveRenderPropType)&&Object.defineProperty(ResponsiveRenderPropType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveRenderPropType",filename:"src/components/Helpers/Responsive.tsx"}}),"undefined"!==typeof ResponsiveChildrenProps&&ResponsiveChildrenProps&&ResponsiveChildrenProps===Object(ResponsiveChildrenProps)&&Object.isExtensible(ResponsiveChildrenProps)&&Object.defineProperty(ResponsiveChildrenProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveChildrenProps",filename:"src/components/Helpers/Responsive.tsx"}}),"undefined"!==typeof ResponsiveProps&&ResponsiveProps&&ResponsiveProps===Object(ResponsiveProps)&&Object.isExtensible(ResponsiveProps)&&Object.defineProperty(ResponsiveProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ResponsiveProps",filename:"src/components/Helpers/Responsive.tsx"}});var s=function(e){return r.Dimensions.get("window").width>e};n.isWindowAboveMinWidth=s,s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isWindowAboveMinWidth",filename:"src/components/Helpers/Responsive.tsx"}});var i=function(e){return r.Dimensions.get("window").width<e};n.isWindowBelowMaxWidth=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isWindowBelowMaxWidth",filename:"src/components/Helpers/Responsive.tsx"}});var o=function(e){var n=e.children,t=e.minWidth,r=e.maxWidth,o=!0,l=!0;t&&(o=s(t)),r&&(l=i(r));var u=o&&l;return"function"===typeof n?n({matches:u}):u?n:null};n.Responsive=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Responsive",filename:"src/components/Helpers/Responsive.tsx"}})},"./src/components/Helpers/ViewMeasure.tsx":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.ViewMeasure=void 0;var i=s(t("./node_modules/@babel/runtime/helpers/extends.js")),o=s(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),l=r(t("./node_modules/react/index.js")),u=t("./node_modules/react-native-web/dist/index.js"),a=t("./src/hooks/useMeasure.ts");"undefined"!==typeof ViewMeasureRenderPropType&&ViewMeasureRenderPropType&&ViewMeasureRenderPropType===Object(ViewMeasureRenderPropType)&&Object.isExtensible(ViewMeasureRenderPropType)&&Object.defineProperty(ViewMeasureRenderPropType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureRenderPropType",filename:"src/components/Helpers/ViewMeasure.tsx"}}),"undefined"!==typeof ViewMeasureProps&&ViewMeasureProps&&ViewMeasureProps===Object(ViewMeasureProps)&&Object.isExtensible(ViewMeasureProps)&&Object.defineProperty(ViewMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureProps",filename:"src/components/Helpers/ViewMeasure.tsx"}});var d=function(e){var n=e.onMeasure,t=e.children,r=(0,o.default)(e,["onMeasure","children"]),s="function"===typeof t,d=l.useRef(null),c=(0,a.useMeasure)({onMeasure:n,ref:d}),m=c.measurements,p=c.onLayout;return l.createElement(u.View,(0,i.default)({ref:d,onLayout:p,children:s?t(m):t},r))};n.ViewMeasure=d,d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasure",filename:"src/components/Helpers/ViewMeasure.tsx"}})},"./src/components/Helpers/index.ts":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=t("./src/components/Helpers/ViewMeasure.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return r[e]}})});var s=t("./src/components/Helpers/Responsive.tsx");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return s[e]}})})},"./src/components/Slider/Slider.mdx":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=c;var s=r(t("./node_modules/@babel/runtime/helpers/extends.js")),i=r(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),o=(r(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),l=t("./node_modules/docz/dist/index.esm.js"),u=t("./src/components/Slider/index.ts"),a={},d="wrapper";function c(e){var n=e.components,t=(0,i.default)(e,["components"]);return(0,o.mdx)(d,(0,s.default)({},a,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"slider"},"Slider"),(0,o.mdx)("h3",{id:"usage"},"Usage"),(0,o.mdx)(l.Playground,{__position:0,__code:"<Slider\n  size={40}\n  initialValue={0.3} // either number for single thumb slider or [number, number] for range slider\n  step={0}\n  isRange={false} // Only used if you are not passing initialValue\n  minimumValue={0}\n  maximumValue={1}\n  onValueChange={value => console.log('onValueChange', value)}\n  onSlidingComplete={value => console.log('onSlidingComplete', value)}\n  onSlidingStart={value => console.log('onSlidingStart', value)}\n  getStyles={(props, theme) => ({\n    containerStyle: {},\n    selectedTrackStyle: {},\n    thumbStyle: {},\n    unselectedTrackStyle: {},\n  })}\n/>",__scope:{props:this?this.props:t,Playground:l.Playground,Props:l.Props,Slider:u.Slider},mdxType:"Playground"},(0,o.mdx)(u.Slider,{size:40,initialValue:.3,step:0,isRange:!1,minimumValue:0,maximumValue:1,onValueChange:function(e){return console.log("onValueChange",e)},onSlidingComplete:function(e){return console.log("onSlidingComplete",e)},onSlidingStart:function(e){return console.log("onSlidingStart",e)},getStyles:function(e,n){return{containerStyle:{},selectedTrackStyle:{},thumbStyle:{},unselectedTrackStyle:{}}},mdxType:"Slider"})),(0,o.mdx)("h3",{id:"with-range"},"With Range"),(0,o.mdx)("p",null,"By using ",(0,o.mdx)("inlineCode",{parentName:"p"},"initialValue")," as an array of ",(0,o.mdx)("inlineCode",{parentName:"p"},"[number, number]"),", it will automatically translate it into a range slider. The minimum range is the value of the step"),(0,o.mdx)(l.Playground,{__position:1,__code:"<Slider\n  initialValue={[30, 60]} // This is an [number, number] instead of a number\n  step={5}\n  minimumValue={0}\n  maximumValue={100}\n  onValueChange={value => console.log('onValueChange', value)}\n  onSlidingComplete={value => console.log('onSlidingComplete', value)}\n  onSlidingStart={value => console.log('onSlidingStart', value)}\n/>",__scope:{props:this?this.props:t,Playground:l.Playground,Props:l.Props,Slider:u.Slider},mdxType:"Playground"},(0,o.mdx)(u.Slider,{initialValue:[30,60],step:5,minimumValue:0,maximumValue:100,onValueChange:function(e){return console.log("onValueChange",e)},onSlidingComplete:function(e){return console.log("onSlidingComplete",e)},onSlidingStart:function(e){return console.log("onSlidingStart",e)},mdxType:"Slider"})),(0,o.mdx)("h3",{id:"props"},"Props"),(0,o.mdx)(l.Props,{of:u.Slider,mdxType:"Props"}))}c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Slider/Slider.mdx"}}),c.isMDXComponent=!0},"./src/components/Slider/Slider.styles.ts":function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getSliderStyles=void 0,"undefined"!==typeof SliderStylesProps&&SliderStylesProps&&SliderStylesProps===Object(SliderStylesProps)&&Object.isExtensible(SliderStylesProps)&&Object.defineProperty(SliderStylesProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SliderStylesProps",filename:"src/components/Slider/Slider.styles.ts"}}),"undefined"!==typeof SliderStyles&&SliderStyles&&SliderStyles===Object(SliderStyles)&&Object.isExtensible(SliderStyles)&&Object.defineProperty(SliderStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SliderStyles",filename:"src/components/Slider/Slider.styles.ts"}}),"undefined"!==typeof GetSliderStyles&&GetSliderStyles&&GetSliderStyles===Object(GetSliderStyles)&&Object.isExtensible(GetSliderStyles)&&Object.defineProperty(GetSliderStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetSliderStyles",filename:"src/components/Slider/Slider.styles.ts"}});var t=function(e,n){var t=e.size;return{containerStyle:{height:t,justifyContent:"center"},selectedTrackStyle:{backgroundColor:n.colors.background.primaryDefault,borderRadius:8,height:8,position:"absolute",width:"100%"},thumbStyle:{backgroundColor:n.colors.background.content,borderColor:n.colors.border.primary,borderRadius:999,borderWidth:3,height:t,position:"absolute",width:t,zIndex:1},unselectedTrackStyle:{backgroundColor:n.colors.background.greyDark,borderRadius:8,height:8,position:"absolute",width:"100%"}}};n.getSliderStyles=t,t&&t===Object(t)&&Object.isExtensible(t)&&Object.defineProperty(t,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"getSliderStyles",filename:"src/components/Slider/Slider.styles.ts"}})},"./src/components/Slider/Slider.tsx":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.Slider=void 0;var i=s(t("./node_modules/@babel/runtime/helpers/extends.js")),o=s(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),l=s(t("./node_modules/@babel/runtime/helpers/slicedToArray.js")),u=r(t("./node_modules/react/index.js")),a=t("./node_modules/react-native-web/dist/index.js"),d=t("./src/hooks/index.ts"),c=t("./src/theme/index.ts"),m=t("./src/utils/mergeStyles.ts"),p=t("./src/components/Helpers/index.ts"),f=t("./src/components/Slider/Slider.styles.ts");"undefined"!==typeof Rect&&Rect&&Rect===Object(Rect)&&Object.isExtensible(Rect)&&Object.defineProperty(Rect,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Rect",filename:"src/components/Slider/Slider.tsx"}}),"undefined"!==typeof RangeValue&&RangeValue&&RangeValue===Object(RangeValue)&&Object.isExtensible(RangeValue)&&Object.defineProperty(RangeValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"RangeValue",filename:"src/components/Slider/Slider.tsx"}}),"undefined"!==typeof SliderValue&&SliderValue&&SliderValue===Object(SliderValue)&&Object.isExtensible(SliderValue)&&Object.defineProperty(SliderValue,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SliderValue",filename:"src/components/Slider/Slider.tsx"}}),"undefined"!==typeof SliderProps&&SliderProps&&SliderProps===Object(SliderProps)&&Object.isExtensible(SliderProps)&&Object.defineProperty(SliderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SliderProps",filename:"src/components/Slider/Slider.tsx"}});var b={height:0,pageX:0,pageY:0,width:0,x:0,y:0},y=function(e){var n=e.maximumValue,t=e.minimumValue;return function(e){return e>n?n:e<t?t:e}},S=function(e){return Array.isArray(e)},v=function(e){return S(e)?e[0]:e},g=function(e){return S(e)?e[1]:e},j=function(e){var n=e.initialValue,t=void 0===n?0:n,r=e.onSlidingStart,s=void 0===r?function(){}:r,j=e.onSlidingComplete,_=void 0===j?function(){}:j,P=e.onValueChange,h=void 0===P?function(){}:P,O=e.minimumValue,x=void 0===O?0:O,R=e.maximumValue,M=void 0===R?1:R,V=e.size,w=void 0===V?40:V,E=e.step,k=void 0===E?0:E,T=e.getStyles,C=e.isRange,W=t||(void 0!==C&&C?[x,M]:x),H=u.useState(W),A=(0,l.default)(H,2),D=A[0],G=A[1],L=u.useState(!1),q=(0,l.default)(L,2),B=q[0],U=q[1],z=u.useState(b),X=(0,l.default)(z,2),N=X[0],Y=X[1],I=(0,d.usePrevious)(B),J=(M-x)/N.width,F=N.width/(M-x),K=S(D),Q=function(e){var n=v(D)+e*J,t=k?Math.round(n/k)*k:n,r=y({maximumValue:K?g(D)-k:M,minimumValue:x})(v(t)),s=function(e,n){return S(e)?[n,e[1]]:n}(D,r);G(s),h(s)},Z=function(e){var n=g(D)+e*J,t=k?Math.round(n/k)*k:n,r=y({maximumValue:M,minimumValue:v(D)+k})(g(t)),s=function(e,n){return S(e)?[e[0],n]:n}(D,r);G(s),h(s)},$=function(e){return a.PanResponder.create({onStartShouldSetPanResponder:function(){return s(D),!0},onPanResponderGrant:function(){U(!0)},onPanResponderMove:function(n,t){var r=t.dx;return e(r)},onPanResponderRelease:function(){U(!1)}})},ee=u.useRef($(Q)),ne=u.useRef($(Z));u.useEffect(function(){ee.current=$(Q),ne.current=$(Z),I&&!B&&_(D)},[B,J]);var te=(0,c.useTheme)(),re=(0,m.mergeStyles)(f.getSliderStyles,T)({size:w},te),se=re.containerStyle,ie=re.selectedTrackStyle,oe=re.thumbStyle,le=re.unselectedTrackStyle,ue=v(D)*F,ae=g(D)*F,de=B?"grabbing":"grab";return u.createElement(p.ViewMeasure,{onMeasure:Y,style:(0,o.default)({},se)},u.createElement(a.View,{style:le}),u.createElement(a.View,{style:(0,o.default)({},ie,K?{left:ue,width:ae-ue}:{width:ue})}),u.createElement(a.View,(0,i.default)({accessible:!0,style:(0,o.default)({},oe,{left:ue-w/2,cursor:de})},ee.current.panHandlers)),K&&u.createElement(a.View,(0,i.default)({accessible:!0,style:(0,o.default)({},oe,{left:ae-w/2,cursor:de})},ne.current.panHandlers)))};n.Slider=j,j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Slider",filename:"src/components/Slider/Slider.tsx"}})},"./src/components/Slider/index.ts":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=t("./src/components/Slider/Slider.tsx");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return r[e]}})})},"./src/hooks/index.ts":function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=t("./src/hooks/usePrevious.ts");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return r[e]}})});var s=t("./src/hooks/useMeasure.ts");Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return s[e]}})});var i=t("./src/hooks/useElement.ts");Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return i[e]}})});var o=t("./src/hooks/useLockBodyScroll.ts");Object.keys(o).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return o[e]}})})},"./src/hooks/useElement.ts":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.useElement=void 0;var s=t("./node_modules/exenv/index.js"),i=r(t("./node_modules/react/index.js")),o=function(e){var n=i.useRef(null);i.useEffect(function(){var t,r=function(e){var n=document.createElement("div");return e&&n.setAttribute("id",e),n}(e);return t=r,document.body.lastElementChild&&document.body.insertBefore(t,document.body.lastElementChild.nextElementSibling),n.current&&r.appendChild(n.current),function(){n.current&&n.current.remove(),-1===r.childNodes.length&&r.remove()}},[]);return!n.current&&s.canUseDOM&&(n.current=document.createElement("div")),n.current};n.useElement=o,o&&o===Object(o)&&Object.isExtensible(o)&&Object.defineProperty(o,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useElement",filename:"src/hooks/useElement.ts"}})},"./src/hooks/useLockBodyScroll.ts":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.useLockBodyScroll=void 0;var s=r(t("./node_modules/react/index.js")),i=function(e){var n=e.isLocked;s.useEffect(function(){var e=window.getComputedStyle(document.body).overflow,t=function(){document.body.style.overflow=e};return n?document.body.style.overflow="hidden":t(),function(){return t()}},[n])};n.useLockBodyScroll=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useLockBodyScroll",filename:"src/hooks/useLockBodyScroll.ts"}})},"./src/hooks/useMeasure.ts":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"),s=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.useMeasure=n.initialMeasurements=void 0;var i=s(t("./node_modules/@babel/runtime/helpers/objectSpread.js")),o=s(t("./node_modules/@babel/runtime/helpers/slicedToArray.js")),l=r(t("./node_modules/react/index.js")),u=t("./node_modules/react-native-web/dist/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/hooks/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/hooks/useMeasure.ts"}});var a={height:0,pageX:0,pageY:0,width:0,x:0,y:0};n.initialMeasurements=a,"undefined"!==typeof a&&a&&a===Object(a)&&Object.isExtensible(a)&&Object.defineProperty(a,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initialMeasurements",filename:"src/hooks/useMeasure.ts"}});var d=function(e){return"web"===u.Platform.OS?e+window.scrollY:e},c=function(e){var n=e.onMeasure,t=e.ref,r=l.useState(a),s=(0,o.default)(r,2),c=s[0],m=s[1],p=l.useCallback(function(e){var r=(0,u.findNodeHandle)(t.current),s=c;r&&u.UIManager.measure(r,function(t,r,o,l,u,a){var c=(0,i.default)({},s,e,{pageX:u,pageY:d(a)});m(c),n&&n(c)})},[c]),f=l.useCallback(function(e){var n=e.nativeEvent.layout;p(n)},[p,c]),b=l.useCallback(function(){p()},[p,c]);return l.useEffect(function(){return u.Dimensions.addEventListener("change",b),function(){return u.Dimensions.removeEventListener("change",b)}},[c]),{measurements:c,onLayout:f,onMeasure:p}};n.useMeasure=c,c&&c===Object(c)&&Object.isExtensible(c)&&Object.defineProperty(c,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/hooks/useMeasure.ts"}})},"./src/hooks/usePrevious.ts":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");Object.defineProperty(n,"__esModule",{value:!0}),n.usePrevious=void 0;var s=r(t("./node_modules/react/index.js")),i=function(e){var n=s.useRef(e);return s.useEffect(function(){n.current=e},[e]),n.current};n.usePrevious=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"usePrevious",filename:"src/hooks/usePrevious.ts"}})},"./src/utils/mergeStyles.ts":function(e,n,t){var r=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.mergeStyles=void 0;var s=r(t("./node_modules/deepmerge/dist/umd.js"));"undefined"!==typeof GetStyles&&GetStyles&&GetStyles===Object(GetStyles)&&Object.isExtensible(GetStyles)&&Object.defineProperty(GetStyles,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"GetStyles",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ArgumentTypes&&ArgumentTypes&&ArgumentTypes===Object(ArgumentTypes)&&Object.isExtensible(ArgumentTypes)&&Object.defineProperty(ArgumentTypes,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ArgumentTypes",filename:"src/utils/mergeStyles.ts"}}),"undefined"!==typeof ReplaceReturnType&&ReplaceReturnType&&ReplaceReturnType===Object(ReplaceReturnType)&&Object.isExtensible(ReplaceReturnType)&&Object.defineProperty(ReplaceReturnType,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ReplaceReturnType",filename:"src/utils/mergeStyles.ts"}});var i=function(e,n){return function(t,r){var i=e(t,r);return n?(0,s.default)(i,n(t,r)):i}};n.mergeStyles=i,i&&i===Object(i)&&Object.isExtensible(i)&&Object.defineProperty(i,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"mergeStyles",filename:"src/utils/mergeStyles.ts"}})}}]);
//# sourceMappingURL=10.c91b2cda408526d1cb1e.js.map