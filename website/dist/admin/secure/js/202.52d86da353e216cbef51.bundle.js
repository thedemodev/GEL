(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{1239:function(e,n,o){"use strict";o.r(n);var c=o(1),t=o(82),a=o(3),r=o(83);n.default=({onChange:e,autoFocus:n,field:o,value:s,renderContext:l,errors:i})=>{const d=o.options.find(e=>e.value===s),u="ks-input-".concat(o.path),j=i.every(e=>!(e instanceof Error&&"AccessDeniedError"===e.name)),b=i.find(e=>e instanceof Error&&"AccessDeniedError"===e.name),p="dialog"===l?{menuPortalTarget:document.body,menuShouldBlockScroll:!0}:null;return Object(c.jsx)(t.a,null,Object(c.jsx)(t.d,{htmlFor:u,field:o,errors:i}),o.config.adminDoc&&Object(c.jsx)(t.b,null,o.config.adminDoc),Object(c.jsx)(t.c,null,Object(c.jsx)("div",{css:{flex:1}},Object(c.jsx)(r.a,Object(a.a)({autoFocus:n,value:j?d:void 0,placeholder:j?void 0:b.message,options:o.options,onChange:n=>{e(n?n.value:null)},isClearable:!0,id:"react-select-".concat(u),inputId:u,instanceId:u},p)))))}}}]);