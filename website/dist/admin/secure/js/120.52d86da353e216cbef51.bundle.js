(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{1334:function(e,r,t){"use strict";t.r(r);var n=t(216),o=t(213),i=t(294),c=t(217),a=t(218),s=t(0),l=t(215);r.default=function(e){var r=e.context,t=e.showCode,u=e.showDemo,d=Object(o.useBrand)().COLORS,b=[{icon:c.HeadsetIcon,text:"1300 888 888",url:"tel:1300888888",onClick:function(){}}];return Object(o.jsx)(n.a,{context:r,showCode:t,showDemo:u,scope:{Playground:n.a,context:r,showCode:t,showDemo:u,Intopia:l.a,Global:o.Global,COLORS:d,FormPod:i.FormPod,FormPodPanel:i.FormPodPanel,FormPodPanelBody:i.FormPodPanelBody,FormPodPanelFooter:i.FormPodPanelFooter,FormPodContactList:i.FormPodContactList,contactItems:b,FormPodIndicator:i.FormPodIndicator,FormPodActions:i.FormPodActions,Fragment:s.Fragment,Button:a.Button},code:'<>\n  <Intopia ignore />\n\n  <Global\n    styles={{\n      // Lets apply a background to simulate being inside the Template component\n      body: {\n        backgroundColor: COLORS.background\n      }\n    }}\n  />\n\n  <FormPod preheading="Preheading" heading="Heading">\n    <FormPodPanel>\n      <FormPodPanelBody>[PANEL CONTENT]</FormPodPanelBody>\n      <FormPodPanelFooter\n        left={<FormPodContactList items={contactItems} />}\n        right={<FormPodIndicator />}\n      />\n    </FormPodPanel>\n    <FormPodActions\n      primary={\n        <Fragment>\n          <Button appearance="primary" soft size="large" block={[true, false]}>\n            Back\n          </Button>\n          <Button appearance="primary" size="large" block={[true, false]}>\n            Next\n          </Button>\n        </Fragment>\n      }\n      secondary={\n        <Button appearance="faint" soft size="large" block={[true, false]}>\n          Cancel\n        </Button>\n      }\n    />\n  </FormPod>\n</>;\n'},Object(o.jsx)(l.a,{ignore:!0}),Object(o.jsx)(o.Global,{styles:{body:{backgroundColor:d.background}}}),Object(o.jsx)(i.FormPod,{preheading:"Preheading",heading:"Heading"},Object(o.jsx)(i.FormPodPanel,null,Object(o.jsx)(i.FormPodPanelBody,null,"[PANEL CONTENT]"),Object(o.jsx)(i.FormPodPanelFooter,{left:Object(o.jsx)(i.FormPodContactList,{items:b}),right:Object(o.jsx)(i.FormPodIndicator,null)})),Object(o.jsx)(i.FormPodActions,{primary:Object(o.jsx)(s.Fragment,null,Object(o.jsx)(a.Button,{appearance:"primary",soft:!0,size:"large",block:[!0,!1]},"Back"),Object(o.jsx)(a.Button,{appearance:"primary",size:"large",block:[!0,!1]},"Next")),secondary:Object(o.jsx)(a.Button,{appearance:"faint",soft:!0,size:"large",block:[!0,!1]},"Cancel")})))}},215:function(e,r,t){"use strict";t.d(r,"a",(function(){return o}));var n=t(213);function o(e){var r=e.ignore,t=e.props;return Object(n.jsx)("div",Object.assign({},t,{css:{background:r?"#f3cccc":"#ffffe5",border:"1px solid #000",padding:"1rem",color:"#000",fontSize:"16px",marginBottom:"1rem","& p:last-child":{marginBottom:0}}}),Object(n.jsx)("strong",null,"INTOPIA NOTES"),Object(n.jsx)("p",null,r?"Ignore this component please":"This component is ready to be tested!"))}},294:function(e,r,t){e.exports=t(300)},300:function(e,r,t){"use strict";t.r(r);t(0);var n=t(213);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=function(e){var r=e.align,t=a(e,["align"]),o=Object(n.useMediaQuery)();return Object(n.jsx)("div",Object.assign({css:o({position:"relative",textAlign:r,marginBottom:["1.5rem",null,"1.875rem"]})},t))},l=function(e){var r=e.icon,t=a(e,["icon"]),o=Object(n.useBrand)().COLORS,i=Object(n.useMediaQuery)();return Object(n.jsx)(r,Object.assign({css:i({position:[null,"absolute"],right:[null,0],bottom:[null,0],display:"inline-block",border:"1px solid ".concat(o.border),backgroundColor:"#fff",borderRadius:"50%",width:"4.125rem",height:"4.125rem",padding:"0.875rem",textAlign:"center",marginBottom:["0.75rem","-0.375rem"]}),size:"large"},t))},u=function(e){var r=e.tag,t=a(e,["tag"]),o=Object(n.useBrand)(),c=o.COLORS,s=o.TYPE,l=Object(n.useMediaQuery)();return Object(n.jsx)(r,Object.assign({css:l(i({display:[null,null,"none"],color:c.muted,margin:"0 0 0.375rem",textTransform:"uppercase",fontSize:"0.6875rem"},s.bodyFont[700]))},t))},d=function(e){var r=e.tag,t=a(e,["tag"]),o=Object(n.useBrand)().TYPE;return Object(n.jsx)(r,Object.assign({css:i({fontSize:["1.5rem","1.875rem"],margin:0},o.bodyFont[300])},t))},b=function(e){var r=Object(n.useMediaQuery)();return Object(n.jsx)("div",Object.assign({css:r({display:["flex","block"],flex:"0 0 auto",justifyContent:"space-between",marginLeft:[null,"auto"]})},e))},O=function(e){var r=Object(n.useMediaQuery)();return Object(n.jsx)("div",Object.assign({css:r({flex:1,marginTop:["0.75rem",0],marginRight:[null,"1.5rem"]})},e))},f=function(e){var r=e.item,t=a(e,["item"]),o=Object(n.useBrand)().COLORS,i=Object(n.useMediaQuery)(),c=r.icon,s=void 0===r.iconColor?o.primary:r.color;return Object(n.jsx)("li",Object.assign({css:{display:"inline-block"}},t),Object(n.jsx)("a",{href:r.url,css:{display:"inline-block",color:"inherit",textDecoration:"none",verticalAlign:"middle"},onClick:r.onClick},c&&Object(n.jsx)(c,{size:"medium",css:i({marginRight:"0.75rem"}),color:s}),Object(n.jsx)("span",{css:i({verticalAlign:"middle"})},r.text)))};function m(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}s.defaultProps={align:"left"},l.defaultProps={},u.defaultProps={tag:"p"},d.defaultProps={tag:"h1"},f.defaultProps={};var j=function(e){var r=e.icon,t=e.preheading,o=e.heading,i=e.children,c=m(e,["icon","preheading","heading","children"]),a=Object(n.useMediaQuery)(),b={marginRight:[null,"4.125rem"],paddingRight:[null,"0.75rem"]};return Object(n.jsx)("div",c,Object(n.jsx)(s,{align:r&&["center","left"]},r&&Object(n.jsx)(l,{icon:r}),t&&Object(n.jsx)(u,{css:a(r&&b)},t),o&&Object(n.jsx)(d,{css:a(r&&b)},o)),i)};function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}j.defaultProps={};var g=function(e){var r=e.primary,t=e.secondary,o=e.reverse,i=p(e,["primary","secondary","reverse"]),c=Object(n.useMediaQuery)(),a=[Object(n.jsx)(b,{key:"primary"},r),Object(n.jsx)(O,{key:"secondary"},t)];return Object(n.jsx)("div",Object.assign({css:c({display:[null,"flex"],flexDirection:!o&&[null,"row-reverse"],marginTop:"1.875rem","button + button":{marginLeft:["0.75rem","0.5rem"]}})},i),o?a.reverse():a)};g.defaultProps={reverse:!1};var y=function(e){var r=Object(n.useMediaQuery)();return Object(n.jsx)("div",Object.assign({css:r({fontSize:"1rem",textAlign:["center","left"],marginBottom:["1.5rem",0]})},e))};function P(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var x=function(e){var r=e.items,t=P(e,["items"]);return Object(n.jsx)("ul",Object.assign({css:{listStyle:"none",paddingLeft:0,margin:0,"li + li":{marginLeft:"1.125rem"}}},t),(r||[]).map((function(e,r){return Object(n.jsx)(f,{key:r,item:e})})))};x.defaultProps={};var v=t(217);function h(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var F=function(e){var r=e.icon,t=e.text,o=h(e,["icon","text"]),i=Object(n.useBrand)().COLORS;return Object(n.jsx)("div",Object.assign({css:{color:i.muted}},o),t&&Object(n.jsx)("span",{css:{verticalAlign:"middle"}},t),r&&Object(n.jsx)(r,{size:"medium",css:{marginLeft:"0.75rem"}}))};function k(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}F.defaultProps={icon:v.RefreshIcon,text:"Saving"};var w=function(e){var r=e.noBorderTop,t=k(e,["noBorderTop"]),o=Object(n.useBrand)().COLORS;return Object(n.jsx)("div",Object.assign({css:{backgroundColor:"#fff",borderTop:!r&&"1px solid ".concat(o.hero),borderBottom:"1px solid ".concat(o.border)}},t))};function B(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}w.defaultProps={noBorderTop:!1};var S=function(e){var r=e.expanded,t=B(e,["expanded"]),o=Object(n.useMediaQuery)();return Object(n.jsx)("div",Object.assign({css:o({padding:r?["1.875rem 0.75rem","3rem 2.25rem"]:["1.875rem 0.75rem","3.75rem 13%","3.75rem 6%","3.75rem 13%"]})},t))};function C(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}S.defaultProps={expanded:!1};var I=function(e){var r=e.left,t=e.right,o=C(e,["left","right"]),i=Object(n.useBrand)().COLORS;return Object(n.jsx)("div",Object.assign({css:{display:"flex",alignItems:"center",height:"3.375rem",backgroundColor:i.light,padding:"0.75rem"}},o),r&&Object(n.jsx)("div",null,r),t&&Object(n.jsx)("div",{css:{marginLeft:"auto"}},t))};I.defaultProps={},t.d(r,"FormPod",(function(){return j})),t.d(r,"FormPodActions",(function(){return g})),t.d(r,"FormPodActionsText",(function(){return y})),t.d(r,"FormPodContactList",(function(){return x})),t.d(r,"FormPodIndicator",(function(){return F})),t.d(r,"FormPodPanel",(function(){return w})),t.d(r,"FormPodPanelBody",(function(){return S})),t.d(r,"FormPodPanelFooter",(function(){return I}))}}]);