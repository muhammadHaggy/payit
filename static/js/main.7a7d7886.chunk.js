(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{168:function(e,t,n){"use strict";n.r(t);var r=n(9),c=n(147),o=n.n(c),a=n(128),s=n(148),i=n(44),l=n(149),u=n(150),d=n(90),j=n(155),b=n(153),h=n(183),O=n(181),f=n(30);var m=function(e){var t=e.title;return Object(f.jsx)(r.Fragment,{children:Object(f.jsx)(h.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(f.jsx)(O.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,sx:{flex:1},children:t})})})},p=n(130),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).handleScan=function(e){e&&(r.state.resultList.includes(e)||(r.setState((function(t){return{result:e,resultList:[].concat(Object(i.a)(t.resultList),[e])}})),console.log(r.state.result),console.log(r.state.resultList)))},r.handleError=function(e){console.error(e)},r.state={result:"No result",resultList:[]},r.handleError=r.handleError.bind(Object(d.a)(r)),r.handleScan=r.handleScan.bind(Object(d.a)(r)),r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t,n,r,c,o,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.b,e.next=3,p.a.listVideoInputDevices();case 3:return n=e.sent,r=n[0].deviceId,console.log("Started decode from camera with id ".concat(r)),c=document.querySelector("#test-area-qr-code-webcam > video"),o=document.querySelector("#result"),e.next=10,t.decodeFromVideoDevice(r,c,(function(e,t,n){e&&(console.log(e.getText()),o.innerHTML+="<br/>".concat(e))}));case 10:s=e.sent,setTimeout((function(){return s.stop()}),2e4);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(m,{title:"Pay!t"}),Object(f.jsx)("div",{id:"test-area-qr-code-webcam",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(f.jsx)("video",{})}),Object(f.jsx)("p",{id:"result"})]})}}]),n}(r.Component),x=v,g=document.getElementById("root");o.a.render(Object(f.jsx)(r.StrictMode,{children:Object(f.jsx)(x,{})}),g)}},[[168,1,2]]]);
//# sourceMappingURL=main.7a7d7886.chunk.js.map