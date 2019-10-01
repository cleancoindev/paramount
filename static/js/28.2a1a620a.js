(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./src/components/Helpers/ViewMeasure.tsx":function(e,n,r){"use strict";var t=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/react/index.js"),s=r("./node_modules/react-native-web/dist/exports/View/index.js"),a=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),l=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),u=r("./node_modules/react-native-web/dist/exports/Dimensions/index.js"),c=r("./node_modules/react-native-web/dist/exports/findNodeHandle/index.js"),d=r("./node_modules/react-native-web/dist/exports/Platform/index.js"),m=r("./node_modules/react-native-web/dist/exports/UIManager/index.js");"undefined"!==typeof Measurements&&Measurements&&Measurements===Object(Measurements)&&Object.isExtensible(Measurements)&&Object.defineProperty(Measurements,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Measurements",filename:"src/hooks/useMeasure.ts"}}),"undefined"!==typeof UseMeasureProps&&UseMeasureProps&&UseMeasureProps===Object(UseMeasureProps)&&Object.isExtensible(UseMeasureProps)&&Object.defineProperty(UseMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"UseMeasureProps",filename:"src/hooks/useMeasure.ts"}});var b={height:0,pageX:0,pageY:0,width:0,x:0,y:0};"undefined"!==typeof b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"initialMeasurements",filename:"src/hooks/useMeasure.ts"}});var p=function(e){return"web"===d.a.OS?e+window.scrollY:e},f=function(e){var n=e.onMeasure,r=e.ref,t=o.useState(b),i=Object(l.a)(t,2),s=i[0],d=i[1],f=o.useCallback(function(e){var t=Object(c.a)(r.current),i=s;t&&m.a.measure(t,function(r,t,o,s,l,u){var c=Object(a.a)({},i,e,{pageX:l,pageY:p(u)});d(c),n&&n(c)})},[s]),j=o.useCallback(function(e){var n=e.nativeEvent.layout;f(n)},[f,s]),_=o.useCallback(function(){f()},[f,s]);return o.useEffect(function(){return u.a.addEventListener("change",_),function(){return u.a.removeEventListener("change",_)}},[s]),{measurements:s,onLayout:j,onMeasure:f}};f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"useMeasure",filename:"src/hooks/useMeasure.ts"}}),r.d(n,"a",function(){return j});"undefined"!==typeof ViewMeasureRenderProp&&ViewMeasureRenderProp&&ViewMeasureRenderProp===Object(ViewMeasureRenderProp)&&Object.isExtensible(ViewMeasureRenderProp)&&Object.defineProperty(ViewMeasureRenderProp,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureRenderProp",filename:"src/components/Helpers/ViewMeasure.tsx"}}),"undefined"!==typeof ViewMeasureProps&&ViewMeasureProps&&ViewMeasureProps===Object(ViewMeasureProps)&&Object.isExtensible(ViewMeasureProps)&&Object.defineProperty(ViewMeasureProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasureProps",filename:"src/components/Helpers/ViewMeasure.tsx"}});var j=function(e){var n=e.onMeasure,r=e.children,a=Object(i.a)(e,["onMeasure","children"]),l="function"===typeof r,u=o.useRef(null),c=f({onMeasure:n,ref:u}),d=c.measurements,m=c.onLayout;return o.createElement(s.a,Object(t.a)({ref:u,onLayout:m,children:l?r(d):r},a,{__source:{fileName:"/home/travis/build/WeTrustPlatform/paramount/src/components/Helpers/ViewMeasure.tsx",lineNumber:24}}))};"undefined"!==typeof j&&j&&j===Object(j)&&Object.isExtensible(j)&&Object.defineProperty(j,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"ViewMeasure",filename:"src/components/Helpers/ViewMeasure.tsx"}})},"./src/components/Slider/Slider.mdx":function(e,n,r){"use strict";r.r(n),r.d(n,"default",function(){return d});var t=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),o=(r("./node_modules/react/index.js"),r("./node_modules/@mdx-js/react/dist/index.es.js")),s=r("./node_modules/docz/dist/index.esm.js"),a=r("./src/components/Slider/Slider.tsx"),l="/home/travis/build/WeTrustPlatform/paramount/src/components/Slider/Slider.mdx",u={},c="wrapper";function d(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(o.b)(c,Object(i.a)({},u,r,{components:n,mdxType:"MDXLayout",__source:{fileName:l,lineNumber:21}}),Object(o.b)("h1",Object(i.a)({id:"slider"},{__source:{fileName:l,lineNumber:24}}),"Slider"),Object(o.b)("h2",Object(i.a)({id:"usage"},{__source:{fileName:l,lineNumber:27}}),"Usage"),Object(o.b)(s.c,{__position:0,__code:"<Slider\n  size=\"small\"\n  value={0.3}\n  onValueChange={value => console.log('onValueChange', value)}\n  onSlidingComplete={value => console.log('onSlidingComplete', value)}\n  onSlidingStart={value => console.log('onSlidingStart', value)}\n/>",__scope:{props:this?this.props:r,Playground:s.c,Props:s.d,Slider:a.a},mdxType:"Playground",__source:{fileName:l,lineNumber:30}},Object(o.b)(a.a,{size:"small",value:.3,onValueChange:function(e){return console.log("onValueChange",e)},onSlidingComplete:function(e){return console.log("onSlidingComplete",e)},onSlidingStart:function(e){return console.log("onSlidingStart",e)},mdxType:"Slider",__source:{fileName:l,lineNumber:36}})),Object(o.b)("h3",Object(i.a)({id:"with-range"},{__source:{fileName:l,lineNumber:38}}),"With Range"),Object(o.b)("p",{__source:{fileName:l,lineNumber:41}},"By using ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:41}},"value")," as an array of ",Object(o.b)("inlineCode",{parentName:"p",__source:{fileName:l,lineNumber:41}},"[number, number]"),", it will automatically transform into a range slider. The minimum range is the value of the step"),Object(o.b)(s.c,{__position:1,__code:"<Slider\n  value={[30, 60]}\n  step={5}\n  minimumValue={0}\n  maximumValue={100}\n  onValueChange={value => console.log('onValueChange', value)}\n  onSlidingComplete={value => console.log('onSlidingComplete', value)}\n  onSlidingStart={value => console.log('onSlidingStart', value)}\n/>",__scope:{props:this?this.props:r,Playground:s.c,Props:s.d,Slider:a.a},mdxType:"Playground",__source:{fileName:l,lineNumber:42}},Object(o.b)(a.a,{value:[30,60],step:5,minimumValue:0,maximumValue:100,onValueChange:function(e){return console.log("onValueChange",e)},onSlidingComplete:function(e){return console.log("onSlidingComplete",e)},onSlidingStart:function(e){return console.log("onSlidingStart",e)},mdxType:"Slider",__source:{fileName:l,lineNumber:48}})),Object(o.b)("h2",Object(i.a)({id:"props"},{__source:{fileName:l,lineNumber:50}}),"Props"),Object(o.b)(s.d,{of:a.a,mdxType:"Props",__source:{fileName:l,lineNumber:53}}))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/components/Slider/Slider.mdx"}}),d.isMDXComponent=!0},"./src/components/Slider/Slider.tsx":function(e,n,r){"use strict";var t=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js"),i=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),o=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/extends.js"),s=r("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),a=r("./node_modules/dlv/dist/dlv.umd.js"),l=r.n(a),u=r("./node_modules/react/index.js"),c=r("./node_modules/react-native-web/dist/exports/PanResponder/index.js"),d=r("./node_modules/react-native-web/dist/exports/View/index.js"),m=function(e){var n=u.useRef(e);return u.useEffect(function(){n.current=e},[e]),n.current};m&&m===Object(m)&&Object.isExtensible(m)&&Object.defineProperty(m,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"usePrevious",filename:"src/hooks/usePrevious.ts"}});var b=r("./src/theme/Theme.tsx"),p=r("./src/utils/isControlSize.ts"),f=r("./src/utils/overrides.ts"),j=r("./src/components/Helpers/ViewMeasure.tsx");r.d(n,"a",function(){return y});var _="/home/travis/build/WeTrustPlatform/paramount/src/components/Slider/Slider.tsx";"undefined"!==typeof SliderOverrides&&SliderOverrides&&SliderOverrides===Object(SliderOverrides)&&Object.isExtensible(SliderOverrides)&&Object.defineProperty(SliderOverrides,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SliderOverrides",filename:"src/components/Slider/Slider.tsx"}}),"undefined"!==typeof SliderProps&&SliderProps&&SliderProps===Object(SliderProps)&&Object.isExtensible(SliderProps)&&Object.defineProperty(SliderProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"SliderProps",filename:"src/components/Slider/Slider.tsx"}});var v={height:0,pageX:0,pageY:0,width:0,x:0,y:0},g=function(e){var n=e.maximumValue,r=e.minimumValue;return function(e){return e>n?n:e<r?r:e}},O=function(e){return Array.isArray(e)},S=function(e){return O(e)?e[0]:e},h=function(e){return O(e)?e[1]:e},x={value:0,onSlidingStart:function(){},onSlidingComplete:function(){},onValueChange:function(){},minimumValue:0,maximumValue:1,step:0,size:"medium",isRange:!1},y=function(e){var n=e.value,r=void 0===n?x.value:n,t=e.onSlidingStart,i=void 0===t?x.onSlidingStart:t,a=e.onSlidingComplete,d=void 0===a?x.onSlidingComplete:a,p=e.onValueChange,j=void 0===p?x.onValueChange:p,y=e.minimumValue,N=void 0===y?x.minimumValue:y,C=e.maximumValue,E=void 0===C?x.maximumValue:C,R=e.step,z=void 0===R?x.step:R,k=e.size,T=void 0===k?x.size:k,H=e.isRange,U=void 0===H?x.isRange:H,W=e.overrides,D=void 0===W?{}:W,L=Object(b.b)(),X=r||(U?[N,E]:N),A=u.useState(X),Y=Object(s.a)(A,2),I=Y[0],J=Y[1],B=u.useState(!1),G=Object(s.a)(B,2),q=G[0],F=G[1],K=u.useState(v),Q=Object(s.a)(K,2),Z=Q[0],$=Q[1],ee=m(q),ne=(E-N)/Z.width,re=Z.width/(E-N),te=O(I),ie=function(e){var n=S(I)+e*ne,r=z?Math.round(n/z)*z:n,t=g({maximumValue:te?h(I)-z:E,minimumValue:N})(S(r)),i=function(e,n){return O(e)?[n,e[1]]:n}(I,t);J(i),j(i)},oe=function(e){var n=h(I)+e*ne,r=z?Math.round(n/z)*z:n,t=g({maximumValue:E,minimumValue:S(I)+z})(h(r)),i=function(e,n){return O(e)?[e[0],n]:n}(I,t);J(i),j(i)},se=function(e){return c.a.create({onStartShouldSetPanResponder:function(){return i(I),!0},onPanResponderGrant:function(){F(!0)},onPanResponderMove:function(n,r){var t=r.dx;return e(t)},onPanResponderRelease:function(){F(!1)}})},ae=u.useRef(se(ie)),le=u.useRef(se(oe));u.useEffect(function(){ae.current=se(ie),le.current=se(oe),ee&&!q&&d(I)},[q,ne]);var ue=S(I)*re,ce=h(I)*re,de=Object(f.a)(P,e,l()(L,"overrides.Slider.Root"),D.Root),me=Object(s.a)(de,2),be=me[0],pe=me[1],fe=Object(f.a)(M,e,l()(L,"overrides.Slider.UnselectedTrack"),D.UnselectedTrack),je=Object(s.a)(fe,2),_e=je[0],ve=je[1],ge=Object(f.a)(w,e,l()(L,"overrides.Slider.SelectedTrack"),D.SelectedTrack),Oe=Object(s.a)(ge,2),Se=Oe[0],he=Oe[1],xe=Object(f.a)(V,e,l()(L,"overrides.Slider.Thumb"),D.Thumb),ye=Object(s.a)(xe,2),Pe=ye[0],Me=ye[1];return u.createElement(be,Object(o.a)({size:T,onMeasure:$},pe,{__source:{fileName:_,lineNumber:287}}),u.createElement(_e,Object(o.a)({size:T},ve,{__source:{fileName:_,lineNumber:288}})),u.createElement(Se,Object(o.a)({isRangeSlider:te,left:ue,right:ce,size:T},he,{__source:{fileName:_,lineNumber:289}})),u.createElement(Pe,Object(o.a)({size:T,position:ue,isSliding:q,value:S(I)},ae.current.panHandlers,Me,{__source:{fileName:_,lineNumber:296}})),te&&u.createElement(Pe,Object(o.a)({size:T,position:ce,isSliding:q,value:h(I)},le.current.panHandlers,Me,{__source:{fileName:_,lineNumber:305}})))};"undefined"!==typeof y&&y&&y===Object(y)&&Object.isExtensible(y)&&Object.defineProperty(y,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"Slider",filename:"src/components/Slider/Slider.tsx"}});var P=function(e){var n=e.style,r=e.size,t=void 0===r?x.size:r,s=Object(i.a)(e,["style","size"]),a=Object(b.b)(),l=Object(p.a)(t)?a.controlHeights[t]:t;return u.createElement(j.a,Object(o.a)({style:[{height:l,justifyContent:"center"},n]},s,{__source:{fileName:_,lineNumber:329}}))},M=function(e){var n=e.style,r=e.size,t=void 0===r?x.size:r,s=Object(i.a)(e,["style","size"]),a=Object(b.b)(),l=Object(p.a)(t)?a.controlHeights[t]:t;return u.createElement(d.a,Object(o.a)({style:[{backgroundColor:a.colors.background.greyDark,borderRadius:8,height:l/4,position:"absolute",width:"100%"},n]},s,{__source:{fileName:_,lineNumber:353}}))},w=function(e){var n=e.style,r=e.size,s=void 0===r?x.size:r,a=e.left,l=void 0===a?0:a,c=e.right,m=void 0===c?0:c,f=e.isRangeSlider,j=Object(i.a)(e,["style","size","left","right","isRangeSlider"]),v=Object(b.b)(),g=Object(p.a)(s)?v.controlHeights[s]:s;return u.createElement(d.a,Object(o.a)({style:[Object(t.a)({backgroundColor:v.colors.background.primaryDefault,borderRadius:8,height:g/4,position:"absolute",width:"100%"},f?{left:l,width:m-l}:{width:l}),n]},j,{__source:{fileName:_,lineNumber:390}}))},V=function(e){e.style;var n=e.size,r=void 0===n?x.size:n,t=e.isSliding,s=void 0!==t&&t,a=e.position,l=void 0===a?0:a,c=Object(i.a)(e,["style","size","isSliding","position"]),m=Object(b.b)(),f=Object(p.a)(r)?m.controlHeights[r]:r,j=s?"grabbing":"grab";return u.createElement(d.a,Object(o.a)({accessible:!0,style:{backgroundColor:m.colors.background.content,borderColor:m.colors.border.primary,borderRadius:999,borderWidth:3,height:f,position:"absolute",width:f,zIndex:1,left:l-f/2,cursor:j}},c,{__source:{fileName:_,lineNumber:428}}))}},"./src/utils/isControlSize.ts":function(e,n,r){"use strict";r.d(n,"a",function(){return t});var t=function(e){return"number"!==typeof e};"undefined"!==typeof t&&t&&t===Object(t)&&Object.isExtensible(t)&&Object.defineProperty(t,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"isControlSize",filename:"src/utils/isControlSize.ts"}})}}]);
//# sourceMappingURL=28.b191fb7b5e305d4e6ce0.js.map