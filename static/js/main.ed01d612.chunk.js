(this["webpackJsonphtml5-qrcode-react"]=this["webpackJsonphtml5-qrcode-react"]||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(26),a=n.n(c),i=(n(88),n(34)),s=n(35),l=n(36),d=n(51),u=n(49),b=(n(89),n(75)),h=n(2),p="html5qr-code-full-region",j=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{id:p})}},{key:"componentWillUnmount",value:function(){this.html5QrcodeScanner.clear().catch((function(e){console.error("Failed to clear html5QrcodeScanner. ",e)}))}},{key:"componentDidMount",value:function(){var e=function(e){var t={};return e.fps&&(t.fps=e.fps),e.qrbox&&(t.qrbox=e.qrbox),e.aspectRatio&&(t.aspectRatio=e.aspectRatio),void 0!==e.disableFlip&&(t.disableFlip=e.disableFlip),e.formatsToSupport&&(t.formatsToSupport=e.formatsToSupport),t}(this.props),t=!0===this.props.verbose;if(!this.props.qrCodeSuccessCallback)throw"qrCodeSuccessCallback is required callback.";this.html5QrcodeScanner=new b.a(p,e,t),this.html5QrcodeScanner.render(this.props.qrCodeSuccessCallback,this.props.qrCodeErrorCallback)}}]),n}(r.a.Component),f=j,x=n(158),O=n(159);var m=function(e){var t=e.title;return Object(h.jsx)(o.Fragment,{children:Object(h.jsx)(x.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(h.jsx)(O.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,sx:{flex:1},children:t})})})},v=n(13),g=n(28),S=n(8),w=n(161),C=n(72),y=n(160),k=n(155),T=n(162),q=n(156),R=n(154),F=n(163),N=n(164),P=n(165),M=Object(S.a)("div")((function(e){var t=e.theme;return{height:"100%",backgroundColor:"light"===t.palette.mode?C.a[100]:t.palette.background.default}})),A=Object(S.a)(y.a)((function(e){return{backgroundColor:"light"===e.theme.palette.mode?"#fff":C.a[800]}})),B=Object(S.a)(y.a)((function(e){return{width:30,height:6,backgroundColor:"light"===e.theme.palette.mode?C.a[300]:C.a[900],borderRadius:3,position:"absolute",top:8,left:"calc(50% - 15px)"}})),Q=Object(S.a)("div")((function(e){e.theme;return{width:30,height:80,position:"absolute",bottom:8,left:"calc(50% - 15px)"}}));function z(e){var t=e.window,n=e.results,r=o.useState(!1),c=Object(v.a)(r,2),a=c[0],i=c[1],s=function(e){return function(){i(e)}},l=void 0!==t?function(){return t().document.body}:void 0;return Object(h.jsxs)(M,{children:[Object(h.jsx)(w.a,{}),Object(h.jsx)(g.a,{styles:{".MuiDrawer-root > .MuiPaper-root":{height:"calc(100% - ".concat(56,"px)"),overflow:"visible"}}}),Object(h.jsxs)(k.a,{container:l,anchor:"bottom",open:a,onClose:s(!1),onOpen:s(!0),swipeAreaWidth:56,disableSwipeToOpen:!1,ModalProps:{keepMounted:!0},children:[Object(h.jsxs)(A,{sx:{position:"absolute",top:-56,borderTopLeftRadius:8,borderTopRightRadius:8,visibility:"visible",right:0,left:0},children:[Object(h.jsx)(B,{}),Object(h.jsxs)(O.a,{sx:{p:2,color:"text.secondary"},children:[n.length," items"]})]}),Object(h.jsxs)(A,{sx:{px:2,pb:2,height:"100%",overflow:"auto"},children:[Object(h.jsx)(T.a,{children:n.map((function(e,t){return Object(h.jsx)(D,{decodedText:e,index:t})}))}),Object(h.jsx)(Q,{children:n.length>0&&Object(h.jsx)(N.a,{variant:"contained",children:"Bayar"})})]})]})]})}function D(e){var t=e.decodedText,n=e.index,r=o.useState("Not Registered"),c=Object(v.a)(r,2),a=c[0],i=c[1],s=o.useState(1),l=Object(v.a)(s,2),d=l[0],u=l[1];return o.useEffect((function(){fetch("https://payit.pythonanywhere.com/products/".concat(t)).then((function(e){return e.json().then((function(e){e.nama_item&&i(e.nama_item)}))}))}),[]),Object(h.jsxs)(q.a,{disablePadding:!0,children:[Object(h.jsx)(R.a,{children:Object(h.jsx)(F.a,{primary:a,primaryTypographyProps:{variant:"subtitle2",style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}})}),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(N.a,{size:"small",onClick:function(){return u(d-1)},children:"-"}),Object(h.jsx)(N.a,{disabled:!0,size:"small",children:d}),Object(h.jsx)(N.a,{size:"small",onClick:function(){return u(d+1)},children:"+"})]})]},n)}var E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={decodedText:[]},o.onNewScanResult=o.onNewScanResult.bind(Object(l.a)(o)),o}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{title:"Pay!t"}),Object(h.jsxs)("section",{className:"App-section",children:[Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(f,{fps:30,qrbox:250,disableFlip:!1,qrCodeSuccessCallback:this.onNewScanResult,formatsToSupport:[9]})]}),Object(h.jsx)(z,{results:this.state.decodedText})]})}},{key:"onNewScanResult",value:function(e,t){console.log("App [result]",t),this.setState((function(t,n){if(t.decodedText[t.decodedText.length-1]!==e)return t.decodedText.push(e),t}))}}]),n}(r.a.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),c(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),L()},88:function(e,t,n){},89:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.ed01d612.chunk.js.map