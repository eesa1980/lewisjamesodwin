(this["webpackJsonplewisjamesodwin.dev"]=this["webpackJsonplewisjamesodwin.dev"]||[]).push([[0],{19:function(n,e,t){},36:function(n,e,t){n.exports=t(63)},63:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(24),o=t.n(i),c=t(4),l=t(2),u=(t(19),t(7)),s=t.n(u),m=t(3),h=t(12),f=t(5),p=["#282828","#363636","#00564D","#00897B","#969696","#FFFFFF"];function d(){var n=Object(l.a)(["\n  height: 100vh !important;\n  width: 100vw !important;\n  position: absolute !important;\n\n  canvas {\n    height: 100vh !important;\n    width: 100vw !important;\n    margin: auto;\n    z-index: 0;\n    opacity: 0.8;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n"]);return d=function(){return n},n}var v=Object(m.a)(h.a)(d()),g=function(n){var e=n.page;s.a.setSeed(9);var t=function(n){var e=n.position,t=n.scale,a=n.color,i=n.rotation;return r.a.createElement("mesh",{visible:!0,position:e,receiveShadow:!0,scale:t,rotation:i},r.a.createElement("boxGeometry",{attach:"geometry",args:[2,2,2]}),r.a.createElement("meshBasicMaterial",{attach:"material",color:a}))};return r.a.createElement(v,null,r.a.createElement((function(){var n=Object(h.c)(),a=n.scene,i=n.camera;return Object(h.b)((function(n){f.a.fromTo(i.position,1,{x:i.position.x,y:i.position.y},{x:n.mouse.x,y:n.mouse.y,z:Math.abs(n.mouse.x)+Math.abs(n.mouse.y)+2}),a.rotation.y+=.001})),f.a.to(a.rotation,1,{x:Math.PI/2*e,y:Math.PI/2*-e}),r.a.createElement("group",null,function(n){for(var e=Math.pow(n,1/3),t=[],a=0;a<e&&!(t.length>=n);a++)for(var r=0;r<e;r++)for(var i=0;i<e;i++){var o=e<=1?.5:a/(e-1),l=e<=1?.5:r/(e-1),u=e<=1?.5:i/(e-1);t.push([o,l,u])}return t.map((function(n,e){var t=Object(c.a)(n,3),a=t[0],r=t[1],i=t[2];return{key:e,position:[s.a.noise3D(2*a,r,i,2,4),s.a.noise3D(a,2*r,i,2,4),s.a.noise3D(a,r,2*i,2,4)],color:s.a.pick(p.slice(0,4)),active:!1,scale:[.05,.05,.05],rotation:[0,0,0]}}))}(100).map((function(n,e){return r.a.createElement(t,{key:e,position:n.position,color:n.color,scale:n.scale,rotation:n.rotation})})))}),null))};function w(){var n=Object(l.a)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return w=function(){return n},n}var b=m.a.div(w()),y=function(n){var e=n.children;return r.a.createElement(b,null,e)};function x(){var n=Object(l.a)(["\n  content: '';\n  background: ",";\n  height: inherit;\n  max-height: inherit;\n  max-width: inherit;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  right: -20px;\n  top: -20px;\n  width: inherit;\n"]);return x=function(){return n},n}function E(){var n=Object(l.a)(["\n  content: '';\n  background: ",";\n  bottom: -20px;\n  height: inherit;\n  left: -20px;\n  max-height: inherit;\n  max-width: inherit;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  width: inherit;\n"]);return E=function(){return n},n}function j(){var n=Object(l.a)(["\n  width: auto;\n  height: auto;\n  color: ",";\n  background: ",";\n  height: inherit;\n  max-height: inherit;\n  max-width: inherit;\n  min-height: 100%;\n  min-width: 100%;\n  padding: 20px;\n  position: relative;\n  width: inherit;\n  z-index: 1;\n"]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n  width: auto;\n  height: auto;\n  max-height: calc(100vh - 80px);\n  max-width: calc(100vw - 80px);\n  position: absolute;\n  color: ",";\n  text-align: center;\n"]);return O=function(){return n},n}var k=m.a.div(O(),p[5]),z=m.a.div(j(),p[5],p[1]),I=m.a.div(E(),p[3]),F=m.a.div(x(),p[4]),M=function(n){var e=n.children,t=n.page,i=n.currentPage,o=Object(a.useRef)(),c=Object(a.useRef)(),l=Object(a.useRef)(),u=Object(a.useRef)(),s={opacity:0,transform:"translate(".concat(-100,"vw, ",100,"vh)")},m={opacity:0,transform:"translate(".concat(100,"vw, ",-100,"vh)")};return Object(a.useEffect)((function(){t===i?(f.a.to(l.current.style,1,{opacity:1,transform:"translate(".concat(0,"vw, ",0,"vh)")}),f.a.to(c.current.style,1,{opacity:1,transform:"translate(".concat(0,"vw, ",0,"vh)")}),f.a.to(u.current.style,1,{opacity:1,zIndex:1}),f.a.to(o.current.style,1,{opacity:1,transform:"scale(1)",zIndex:1})):(f.a.to(l.current.style,1,{opacity:0,transform:"translate(".concat(-50,"vw, ",50,"vh)")}),f.a.to(c.current.style,1,{opacity:0,transform:"translate(".concat(100,"vw, ",-100,"vh)")}),f.a.to(u.current.style,1,{opacity:0,zIndex:0}),f.a.to(o.current.style,1,{opacity:0,transform:"scale(0)",zIndex:0}))}),[i]),r.a.createElement(k,{ref:u,style:{opacity:0,zIndex:1}},r.a.createElement(I,{style:s,ref:l}),r.a.createElement(z,{ref:o,style:{opacity:0,transform:"scale(0)"}},e),r.a.createElement(F,{ref:c,style:m}))},R=t(11),P=t(18),B=t(31);function D(){var n=Object(l.a)(["\n  margin: 0 10px;\n  display: unset;\n  transition: all 0.2s;\n\n  :hover {\n    color: ",";\n  }\n"]);return D=function(){return n},n}function S(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-size: 2em;\n  margin: 0 40px;\n  text-align: center;\n\n  @media screen and (min-width: 700px) {\n    font-size: 4em;\n  }\n"]);return S=function(){return n},n}var W=m.a.div(S()),C=m.a.a(D(),p[4]),J=function(){return r.a.createElement(W,null,r.a.createElement(C,{href:"https://www.linkedin.com/in/lewis-james-odwin-71b4a08a/",target:"_blank"},r.a.createElement(R.a,{icon:P.a})),r.a.createElement(C,{href:"https://twitter.com/ilikecoding4web",target:"_blank"},r.a.createElement(R.a,{icon:P.b})),r.a.createElement(C,{href:"mailto:eesa1980@gmail.com",target:"_blank"},r.a.createElement(R.a,{icon:B.a})))};function _(){var n=Object(l.a)(["\n  font-weight: 100;\n  display: inline-block;\n"]);return _=function(){return n},n}function G(){var n=Object(l.a)(["\n  font-weight: 900;\n  display: inline-block;\n"]);return G=function(){return n},n}function L(){var n=Object(l.a)(["\n  margin: inherit;\n  padding: inherit;\n  margin: 0;\n  padding: 5px 20px;\n  text-transform: uppercase;\n  font-size: 1.5em;\n\n  @media screen and (min-width: 700px) {\n    font-size: 2.3em;\n    padding: 5px 40px;\n  }\n"]);return L=function(){return n},n}var T=m.a.h1(L()),Y=m.a.span(G()),$=m.a.span(_()),q=function(){return r.a.createElement(T,null,r.a.createElement(Y,null,"Lewis"),r.a.createElement($,null,"James"),r.a.createElement($,null,"Odwin"))},A=t(32),H=t.n(A),K=t(33);function N(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n"]);return N=function(){return n},n}var Q=m.a.main(N()),U=function(){var n=Object(a.useRef)(),e=Object(a.useRef)(),t=Object(a.useState)(1),i=Object(c.a)(t,2),o=i[0],l=i[1],u=Object(a.useCallback)((function(){l(o>=2?1:o+1)}),[o]),s=Object(a.useCallback)((function(){l(o<=2?1:o-1)}),[o]),m=Object(a.useCallback)((function(n){n.deltaY<0?s():u()}),[n,e]),h=H()(m,250,{leading:!0,trailing:!1,maxWait:1e3});return r.a.createElement(K.a,{ref:e,onSwiped:h},r.a.createElement("div",{ref:n,onWheel:h},r.a.createElement(y,null,r.a.createElement(g,{page:o}),r.a.createElement(Q,null,r.a.createElement(M,{currentPage:o,page:1},r.a.createElement(q,null)),r.a.createElement(M,{currentPage:o,page:2},r.a.createElement(J,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.6dd5afc3.chunk.js.map