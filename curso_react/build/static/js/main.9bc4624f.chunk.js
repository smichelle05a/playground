(this.webpackJsonpcurso_react=this.webpackJsonpcurso_react||[]).push([[0],[,function(e,t,r){e.exports={data:"ProductDetails_data__y9Rx_",productTitle:"ProductDetails_productTitle__Vs8o4",productDescription:"ProductDetails_productDescription__1st5T",options:"ProductDetails_options__Yohq-",selected:"ProductDetails_selected__1FB2_",featureItem:"ProductDetails_featureItem__1FY9G",selectedFeature:"ProductDetails_selectedFeature__37tZJ",primaryBtn:"ProductDetails_primaryBtn__pLJQJ",sectionHeading:"ProductDetails_sectionHeading__3cFuD"}},,function(e,t,r){e.exports={mainContainer:"App_mainContainer__1-z7u",data:"App_data__SrCUY",preview:"App_preview__2R8zS"}},function(e,t,r){e.exports={preview:"ProductPreview_preview__3K0Q2",timeSection:"ProductPreview_timeSection__2vx4t",heartRateSection:"ProductPreview_heartRateSection__3YIg2",beat:"ProductPreview_beat__12_41"}},,,,,function(e,t,r){e.exports={topBar:"NavBar_topBar__25xSe"}},,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var a=r(2),c=r.n(a),n=r(6),i=r.n(n),s=(r(16),r(7)),o=r(8),u=r(11),l=r(10),d=r(3),p=r.n(d),m=(r(17),r(18),{title:"FitBit 19 - The Smartest Watch",description:"Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.",colorOptions:[{styleName:"Black Strap",imageUrl:"https://imgur.com/iOeUBV7.png"},{styleName:"Red Strap",imageUrl:"https://imgur.com/PTgQlim.png"},{styleName:"Blue Strap",imageUrl:"https://imgur.com/Mplj1YR.png"},{styleName:"Purple Strap",imageUrl:"https://imgur.com/xSIK4M8.png"}],featureList:["Time","Heart Rate"]});Object.freeze(m);var j=m,_=r(4),h=r.n(_),b=r(0);var O=function(e){return Object(b.jsxs)("div",{className:h.a.preview,children:[Object(b.jsx)("img",{src:e.currentPreview,alt:"Product Preview"}),1===e.currentFeature?Object(b.jsxs)("div",{className:h.a.heartRateSection,children:[Object(b.jsx)("i",{className:"fas fa-heartbeat"}),Object(b.jsx)("p",{children:"78"})]}):Object(b.jsx)("div",{className:h.a.timeSection,children:Object(b.jsx)("p",{children:function(){var e=(new Date).getHours()>9?(new Date).getHours():"0".concat((new Date).getHours()),t=(new Date).getMinutes()>9?(new Date).getMinutes():"0".concat((new Date).getMinutes());return"".concat(e,":").concat(t)}()})})]})},v=r(1),g=r.n(v);var x=function(e){var t=e.data.colorOptions.map((function(t,r){var a=[g.a.options];return r===e.currentPos&&a.push(g.a.selected),Object(b.jsx)("img",{className:a.join(" "),src:t.imageUrl,alt:t.styleName,onClick:function(){e.onColorOption(r)}},r)})),r=e.data.featureList.map((function(t,r){var a=[g.a.featureItem];return r===e.currentFeature&&a.push(g.a.selectedFeature),Object(b.jsx)("button",{className:a.join(" "),onClick:function(){e.onFeatureClick(r)},children:t},r)}));return Object(b.jsxs)("div",{className:g.a.data,children:[Object(b.jsx)("h1",{className:g.a.productTitle,children:e.data.title}),Object(b.jsxs)("p",{className:g.a.productDescription,children:[" ",e.data.description," "]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:g.a.sectionHeading,children:"Select Color"}),t]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:g.a.sectionHeading,children:"Features"}),r]}),Object(b.jsx)("button",{className:g.a.primaryBtn,children:"Buy Now"})]})},f=r(9),P=r.n(f);var w=function(){return Object(b.jsx)("header",{children:Object(b.jsx)("nav",{className:P.a.topBar,children:Object(b.jsx)("img",{src:"https://i.dlpng.com/static/png/197684_preview.png",alt:"amazon logo",width:"100"})})})},F=function(e){Object(u.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={productData:j,currentPos:0,currentFeature:0},e.onColorOption=function(t){e.setState((function(){return{currentPos:t}}))},e.onFeatureClick=function(t){e.setState((function(){return{currentFeature:t}}))},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this.state.productData.colorOptions[this.state.currentPos].imageUrl;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(w,{}),Object(b.jsxs)("section",{className:p.a.mainContainer,children:[Object(b.jsx)("div",{className:p.a.preview,children:Object(b.jsx)(O,{currentPreview:e,currentFeature:this.state.currentFeature})}),Object(b.jsx)("div",{className:p.a.data,children:Object(b.jsx)(x,{data:this.state.productData,currentPos:this.state.currentPos,onColorOption:this.onColorOption,onFeatureClick:this.onFeatureClick,currentFeature:this.state.currentFeature})})]}),Object(b.jsx)("script",{src:"./assets/css/bootstrap/bootstrap.bundle.js"})]})}}]),r}(a.Component),N=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,21)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),N()}],[[20,1,2]]]);
//# sourceMappingURL=main.9bc4624f.chunk.js.map