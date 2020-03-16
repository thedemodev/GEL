(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1380:function(e,n,t){"use strict";t.r(n);var o=t(216),r=t(0),i=t(213),a=t(338),c=t(215);function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=function(e){var n=e.context,t=e.showCode,s=e.showDemo,u=["Page One","Page Two","Page Three"],g=l(Object(r.useState)(0),2),f=g[0],p=g[1],b=l(Object(r.useState)(0),2),x=b[0],v=b[1];return Object(i.jsx)(o.a,{context:n,showCode:t,showDemo:s,scope:{Playground:o.a,context:n,showCode:t,showDemo:s,Intopia:c.a,Pagination:a.Pagination,Page:a.Page,content:u,current:f,setCurrent:p,current2:x,setCurrent2:v},code:'<>\n  <Intopia />\n\n  <h2>Declarative</h2>\n  <Pagination>\n    <Page\n      text="1"\n      onClick={(event, page) => console.log(`Page ${page}`, event)}\n    />\n    <Page\n      text="2"\n      onClick={(event, page) => console.log(`Page ${page}`, event)}\n    />\n    <Page\n      text="3"\n      onClick={(event, page) => console.log(`Page ${page}`, event)}\n    />\n  </Pagination>\n\n  <Pagination current={1}>\n    <Page\n      text="1"\n      onClick={(event, page) => console.log(`Page ${page}`, event)}\n    />\n    <Page\n      text="2"\n      onClick={(event, page) => console.log(`Page ${page}`, event)}\n    />\n    <Page\n      text="3"\n      onClick={(event, page) => console.log(`Page ${page}`, event)}\n    />\n  </Pagination>\n\n  <h2>Infinite</h2>\n  <Pagination infinite>\n    <Page\n      text="1"\n      onClick={(event, page) => console.log(`Infinite page ${page}`, event)}\n    />\n    <Page\n      text="2"\n      onClick={(event, page) => console.log(`Infinite page ${page}`, event)}\n    />\n    <Page\n      text="3"\n      onClick={(event, page) => console.log(`Infinite page ${page}`, event)}\n    />\n  </Pagination>\n\n  <Pagination infinite current={1}>\n    <Page\n      text="1"\n      onClick={(event, page) => console.log(`Infinite page ${page}`, event)}\n    />\n    <Page\n      text="2"\n      onClick={(event, page) => console.log(`Infinite page ${page}`, event)}\n    />\n    <Page\n      text="3"\n      onClick={(event, page) => console.log(`Infinite page ${page}`, event)}\n    />\n  </Pagination>\n\n  <h2>Customise back and next buttons</h2>\n  <Pagination\n    back={{\n      visible: true,\n      text: "Go back",\n      onClick: (event, page) => console.log(`Go to ${page}`, event),\n      assistiveText: page => `Go to previous page which is ${page}`\n    }}\n    next={{\n      visible: true,\n      text: "Go forth",\n      onClick: (event, page) => console.log(`Go to ${page}`, event),\n      assistiveText: page => `Go to next page which is ${page}`\n    }}\n  >\n    <Page\n      text="1"\n      onClick={(event, page) => console.log(`Page ${page}`, event)}\n    />\n    <Page\n      text="2"\n      onClick={(event, page) => console.log(`Page ${page}`, event)}\n    />\n    <Page\n      text="3"\n      onClick={(event, page) => console.log(`Page ${page}`, event)}\n    />\n  </Pagination>\n\n  <h2>Event bubble</h2>\n  <Pagination\n    infinite\n    current={1}\n    back={{\n      onClick: () =>\n        console.log("this event will run in addition to the normal logic")\n    }}\n    next={{\n      onClick: event => {\n        event.preventDefault();\n        console.log(\n          "this event will only run without any logic disabling the default"\n        );\n      }\n    }}\n  >\n    <Page\n      text="1"\n      onClick={() => console.log("this page will run the normal code")}\n    />\n    <Page\n      text="2"\n      onClick={() => console.log("this page will run the normal code")}\n    />\n    <Page\n      text="3"\n      onClick={event => {\n        event.preventDefault();\n        console.log("this page will only run our code");\n      }}\n    />\n  </Pagination>\n\n  <h2>Declarative as router</h2>\n  <p>{content[current]}</p>\n  <Pagination\n    current={current}\n    back={{\n      onClick: (event, index) => {\n        event.preventDefault();\n        setCurrent(index);\n      }\n    }}\n    next={{\n      onClick: (event, index) => {\n        event.preventDefault();\n        setCurrent(index);\n      }\n    }}\n  >\n    <Page\n      onClick={(event, index) => {\n        event.preventDefault();\n        setCurrent(index);\n      }}\n      text="1"\n    />\n    <Page\n      onClick={(event, index) => {\n        event.preventDefault();\n        setCurrent(index);\n      }}\n      text="2"\n    />\n    <Page\n      onClick={(event, index) => {\n        event.preventDefault();\n        setCurrent(index);\n      }}\n      text="3"\n    />\n  </Pagination>\n\n  <br />\n  <hr />\n  <br />\n\n  <h2>Data Driven</h2>\n  <Pagination\n    data={[\n      {\n        text: "1",\n        onClick: (event, page) => console.log(`Page ${page}`, event)\n      },\n      {\n        text: "2",\n        onClick: (event, page) => console.log(`Page ${page}`, event)\n      },\n      {\n        text: "3",\n        onClick: (event, page) => console.log(`Page ${page}`, event)\n      }\n    ]}\n  />\n\n  <Pagination\n    current={1}\n    data={[\n      {\n        text: "1",\n        onClick: (event, page) => console.log(`Page ${page}`, event)\n      },\n      {\n        text: "2",\n        onClick: (event, page) => console.log(`Page ${page}`, event)\n      },\n      {\n        text: "3",\n        onClick: (event, page) => console.log(`Page ${page}`, event)\n      }\n    ]}\n  />\n\n  <Pagination\n    current={2}\n    infinite\n    back={{\n      visible: true\n    }}\n    data={[\n      {\n        text: "1",\n        onClick: (event, page) => console.log(`Page ${page}`, event)\n      },\n      {\n        text: "2",\n        onClick: (event, page) => console.log(`Page ${page}`, event)\n      },\n      {\n        text: "3",\n        onClick: (event, page) => console.log(`Page ${page}`, event)\n      }\n    ]}\n  />\n\n  <h2>Data Driven as router</h2>\n  <p>{content[current2]}</p>\n  <Pagination\n    current={current2}\n    infinite\n    back={{\n      onClick: (event, page) => console.log(`Go to page ${page + 1}`, event)\n    }}\n    next={{\n      onClick: (event, page) => console.log(`Go to page ${page + 1}`, event)\n    }}\n    data={[\n      {\n        onClick: (_, index) => {\n          setCurrent2(index);\n        },\n        text: "1"\n      },\n      {\n        onClick: (_, index) => {\n          setCurrent2(index);\n        },\n        text: "2"\n      },\n      {\n        onClick: (_, index) => {\n          setCurrent2(index);\n        },\n        text: "3"\n      }\n    ]}\n  />\n</>;\n'},Object(i.jsx)(c.a,null),Object(i.jsx)("h2",null,"Declarative"),Object(i.jsx)(a.Pagination,null,Object(i.jsx)(a.Page,{text:"1",onClick:function(e,n){return console.log("Page ".concat(n),e)}}),Object(i.jsx)(a.Page,{text:"2",onClick:function(e,n){return console.log("Page ".concat(n),e)}}),Object(i.jsx)(a.Page,{text:"3",onClick:function(e,n){return console.log("Page ".concat(n),e)}})),Object(i.jsx)(a.Pagination,{current:1},Object(i.jsx)(a.Page,{text:"1",onClick:function(e,n){return console.log("Page ".concat(n),e)}}),Object(i.jsx)(a.Page,{text:"2",onClick:function(e,n){return console.log("Page ".concat(n),e)}}),Object(i.jsx)(a.Page,{text:"3",onClick:function(e,n){return console.log("Page ".concat(n),e)}})),Object(i.jsx)("h2",null,"Infinite"),Object(i.jsx)(a.Pagination,{infinite:!0},Object(i.jsx)(a.Page,{text:"1",onClick:function(e,n){return console.log("Infinite page ".concat(n),e)}}),Object(i.jsx)(a.Page,{text:"2",onClick:function(e,n){return console.log("Infinite page ".concat(n),e)}}),Object(i.jsx)(a.Page,{text:"3",onClick:function(e,n){return console.log("Infinite page ".concat(n),e)}})),Object(i.jsx)(a.Pagination,{infinite:!0,current:1},Object(i.jsx)(a.Page,{text:"1",onClick:function(e,n){return console.log("Infinite page ".concat(n),e)}}),Object(i.jsx)(a.Page,{text:"2",onClick:function(e,n){return console.log("Infinite page ".concat(n),e)}}),Object(i.jsx)(a.Page,{text:"3",onClick:function(e,n){return console.log("Infinite page ".concat(n),e)}})),Object(i.jsx)("h2",null,"Customise back and next buttons"),Object(i.jsx)(a.Pagination,{back:{visible:!0,text:"Go back",onClick:function(e,n){return console.log("Go to ".concat(n),e)},assistiveText:function(e){return"Go to previous page which is ".concat(e)}},next:{visible:!0,text:"Go forth",onClick:function(e,n){return console.log("Go to ".concat(n),e)},assistiveText:function(e){return"Go to next page which is ".concat(e)}}},Object(i.jsx)(a.Page,{text:"1",onClick:function(e,n){return console.log("Page ".concat(n),e)}}),Object(i.jsx)(a.Page,{text:"2",onClick:function(e,n){return console.log("Page ".concat(n),e)}}),Object(i.jsx)(a.Page,{text:"3",onClick:function(e,n){return console.log("Page ".concat(n),e)}})),Object(i.jsx)("h2",null,"Event bubble"),Object(i.jsx)(a.Pagination,{infinite:!0,current:1,back:{onClick:function(){return console.log("this event will run in addition to the normal logic")}},next:{onClick:function(e){e.preventDefault(),console.log("this event will only run without any logic disabling the default")}}},Object(i.jsx)(a.Page,{text:"1",onClick:function(){return console.log("this page will run the normal code")}}),Object(i.jsx)(a.Page,{text:"2",onClick:function(){return console.log("this page will run the normal code")}}),Object(i.jsx)(a.Page,{text:"3",onClick:function(e){e.preventDefault(),console.log("this page will only run our code")}})),Object(i.jsx)("h2",null,"Declarative as router"),Object(i.jsx)("p",null,u[f]),Object(i.jsx)(a.Pagination,{current:f,back:{onClick:function(e,n){e.preventDefault(),p(n)}},next:{onClick:function(e,n){e.preventDefault(),p(n)}}},Object(i.jsx)(a.Page,{onClick:function(e,n){e.preventDefault(),p(n)},text:"1"}),Object(i.jsx)(a.Page,{onClick:function(e,n){e.preventDefault(),p(n)},text:"2"}),Object(i.jsx)(a.Page,{onClick:function(e,n){e.preventDefault(),p(n)},text:"3"})),Object(i.jsx)("br",null),Object(i.jsx)("hr",null),Object(i.jsx)("br",null),Object(i.jsx)("h2",null,"Data Driven"),Object(i.jsx)(a.Pagination,{data:[{text:"1",onClick:function(e,n){return console.log("Page ".concat(n),e)}},{text:"2",onClick:function(e,n){return console.log("Page ".concat(n),e)}},{text:"3",onClick:function(e,n){return console.log("Page ".concat(n),e)}}]}),Object(i.jsx)(a.Pagination,{current:1,data:[{text:"1",onClick:function(e,n){return console.log("Page ".concat(n),e)}},{text:"2",onClick:function(e,n){return console.log("Page ".concat(n),e)}},{text:"3",onClick:function(e,n){return console.log("Page ".concat(n),e)}}]}),Object(i.jsx)(a.Pagination,{current:2,infinite:!0,back:{visible:!0},data:[{text:"1",onClick:function(e,n){return console.log("Page ".concat(n),e)}},{text:"2",onClick:function(e,n){return console.log("Page ".concat(n),e)}},{text:"3",onClick:function(e,n){return console.log("Page ".concat(n),e)}}]}),Object(i.jsx)("h2",null,"Data Driven as router"),Object(i.jsx)("p",null,u[x]),Object(i.jsx)(a.Pagination,{current:x,infinite:!0,back:{onClick:function(e,n){return console.log("Go to page ".concat(n+1),e)}},next:{onClick:function(e,n){return console.log("Go to page ".concat(n+1),e)}},data:[{onClick:function(e,n){v(n)},text:"1"},{onClick:function(e,n){v(n)},text:"2"},{onClick:function(e,n){v(n)},text:"3"}]}))}},215:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t(213);function r(e){var n=e.ignore,t=e.props;return Object(o.jsx)("div",Object.assign({},t,{css:{background:n?"#f3cccc":"#ffffe5",border:"1px solid #000",padding:"1rem",color:"#000",fontSize:"16px",marginBottom:"1rem","& p:last-child":{marginBottom:0}}}),Object(o.jsx)("strong",null,"INTOPIA NOTES"),Object(o.jsx)("p",null,n?"Ignore this component please":"This component is ready to be tested!"))}},307:function(e){e.exports=JSON.parse('{"name":"@westpac/pagination","version":"1.0.0","description":"Pagination is used to navigate within a set of related views. This element allows navigation within both finite (a set number) and infinite (unknown number) of views.","repository":"https://github.com/WestpacGEL/GEL.git","author":"Westpac GEL Team <gel@westpac.com.au>","contributors":[{"name":"Dominik Wilkowski","email":"Hi@Dominik-Wilkowski.com","url":"https://dominik-wilkowski.com"},{"name":"Flore Laforge","email":"florelaforge@gmail.com","url":"http://florelaforge.com/"}],"license":"GPL-3.0+","scripts":{"start":"PACKAGE_NAME=pagination webpack-dev-server --config ../../helpers/example/start.webpack.config.js","test":"start-server-and-test start http://localhost:8080 test:all","test:dev":"start-server-and-test start http://localhost:8080 test:test-dev","test:all":"yarn test:integration","test:integration":"cypress run","test:test-dev":"cypress open"},"main":"dist/pagination.cjs.js","module":"dist/pagination.esm.js","dependencies":{"@babel/runtime":"^7.6.2","@westpac/core":"^1.0.0","prop-types":"^15.7.2"},"peerDependencies":{"react":"^16.11.0"},"devDependencies":{"@westpac/button":"*","@westpac/icon":"*","cypress":"^4.1.0","react":"^16.13.0","start-server-and-test":"^1.10.8"}}')},338:function(e,n,t){e.exports=t(343)},343:function(e,n,t){"use strict";t.r(n);var o=t(0);function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.pages,t=void 0===n?[]:n,i=e.current,a=void 0===i?0:i,c=e.infinite,l=void 0!==c&&c,s=Object(o.useState)(a),u=r(s,2),g=u[0],f=u[1],p=t.length,b=function(e,n,t){e.persist(),"function"==typeof n[t].onClick&&n[t].onClick(e,t),f(t)},x=function(e){e.persist(),b(e,t,g===p-1?l?0:p-1:g+1)},v=function(e){e.persist(),0===g?b(e,t,l?p-1:0):0!==g&&b(e,t,g-1)};return{next:x,previous:v,current:g,setCurrent:f,setPage:b}},a=t(213);function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=function(e){e.current,e.infinite,e.back,e.next,e.data;var n=c(e,["current","infinite","back","next","data"]);return Object(a.jsx)("nav",n)},s=function(){return{}};function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g=function(e){e.current,e.infinite,e.back,e.next,e.data,e.overrides;var n=u(e,["current","infinite","back","next","data","overrides"]);return Object(a.jsx)("ul",n)},f=function(){return{listStyle:"none",display:"flex",paddingLeft:0,margin:"1.3125rem 0",borderRadius:"0.1875rem",alignItems:"center"}},p=t(307);function b(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var x=function(e){e.index,e.nextIndex,e.text,e.first,e.last,e.disabled,e.assistiveText,e.current,e.active;var n=b(e,["index","nextIndex","text","first","last","disabled","assistiveText","current","active"]);return Object(a.jsx)("li",n)},v=function(){return{}};function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var P=function(e){e.index,e.nextIndex,e.text,e.first,e.last,e.assistiveText,e.current,e.active;var n=O(e,["index","nextIndex","text","first","last","assistiveText","current","active"]);return Object(a.jsx)("button",Object.assign({type:"button"},n))},k=function(e,n){var t=n.active,o=n.first,r=n.last,i=n.disabled,c=Object(a.useBrand)().COLORS;return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({appearance:"none",marginLeft:-1,lineHeight:1.15,display:"inline-block",border:"1px solid ".concat(t?c.hero:c.border),backgroundColor:t?c.hero:"#fff",padding:"0.4375rem 0.75rem",fontSize:"0.875rem",color:t?"#fff":c.neutral,textDecoration:"none",cursor:"pointer",transition:"background .2s ease, border .2s ease",":hover":{backgroundColor:!t&&c.background}},o&&{marginLeft:0,borderTopLeftRadius:"0.1875rem",borderBottomLeftRadius:"0.1875rem"},{},r&&{borderTopRightRadius:"0.1875rem",borderBottomRightRadius:"0.1875rem"},{},i&&{color:c.muted,backgroundColor:c.light,cursor:"not-allowed",opacity:"0.5"})};function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function C(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=function(e){var n,t=e.index,o=e.nextIndex,r=e.text,i=e.first,c=e.last,l=e.disabled,s=e.assistiveText,u=e.onClick,g=C(e,["index","nextIndex","text","first","last","disabled","assistiveText","onClick"]),f=Object(a.useBrand)(),b=f.OVERRIDES[p.name],d=f[p.name],j={Page:{styles:v,component:x,attributes:function(){return null}},Link:{styles:k,component:P,attributes:function(){return null}}},O=$(),m=O.current,w=O.overrides,D=t===m,I=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({index:t,nextIndex:o,text:r,first:i,last:c,disabled:l,assistiveText:s,onClick:u,current:m,active:D,overrides:w},g),S=Object(a.overrideReconciler)(j,b,d,w);return Object(a.jsx)(S.Page.component,Object.assign({index:t,nextIndex:o,text:r,first:i,last:c,disabled:l,assistiveText:s,current:m,active:D},g,S.Page.attributes(I),{css:S.Page.styles(I)}),Object(a.jsx)(S.Link.component,Object.assign((y(n={"aria-current":D?"page":void 0,"aria-label":s,"aria-disabled":l,disabled:l,onClick:u,index:t,nextIndex:o,text:r,first:i,last:c},"disabled",l),y(n,"assistiveText",s),y(n,"current",m),y(n,"active",D),n),S.Link.attributes(I),{css:S.Link.styles(I)}),r))};function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){I(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function S(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}m.defaultProps={disabled:!1};var T=Object(o.createContext)(),$=function(){var e=Object(o.useContext)(T);if(!e)throw new Error("Page components should be wrapped in <Pagination>.");return e},E=function(e){var n=e.current,t=e.infinite,r=e.back,c=e.next,u=e.data,b=e.children,x=e.overrides,v=S(e,["current","infinite","back","next","data","children","overrides"]),d=Object(a.useBrand)(),j=d.OVERRIDES[p.name],O=d[p.name],P={Pagination:{styles:s,component:l,attributes:function(){return null}},PageList:{styles:f,component:g,attributes:function(e,n){return n}}},k=D({current:n,infinite:t,back:r,next:c,data:u,overrides:x},v),h=Object(a.overrideReconciler)(P,j,O,x),y=Object(a.mergeWith)({text:"Back",visible:!0,assistiveText:function(e){return null}},r),C=Object(a.mergeWith)({text:"Next",visible:!0,assistiveText:function(e){return null}},c),w=u;u||(w=o.Children.map(b,(function(e){return D({},e.props)})));var I=i({pages:w,current:n,infinite:t});Object(o.useEffect)((function(){I.setCurrent(n)}),[n]);var $=w.length,E=I.current+1;E>$-1&&(E=t?0:$-1);var G=I.current-1;return G<0&&(G=t?$-1:0),Object(a.jsx)(T.Provider,{value:{current:I.current,overrides:x}},Object(a.jsx)(h.Pagination.component,Object.assign({"aria-label":"Page number",current:n,infinite:t,back:r,next:c,data:u},v,h.Pagination.attributes(k),{css:h.Pagination.styles(k)}),Object(a.jsx)(h.PageList.component,Object.assign({current:n,infinite:t,back:r,next:c,data:u},h.PageList.attributes(k),{css:h.PageList.styles(k)}),y.visible&&Object(a.jsx)(m,{first:!0,text:y.text,nextIndex:G,disabled:0===I.current&&!t,assistiveText:y.assistiveText(G),onClick:Object(a.wrapHandlers)((function(e){return y.onClick&&y.onClick(e,G)}),(function(e){return I.previous(e)}))}),w.map((function(e,n){return Object(a.jsx)(m,{key:n,index:n,text:e.text,onClick:function(e){return I.setPage(e,w,n)}})})),C.visible&&Object(a.jsx)(m,{last:!0,text:C.text,nextIndex:E,disabled:I.current===$-1&&!t,assistiveText:C.assistiveText(E),onClick:Object(a.wrapHandlers)((function(e){return C.onClick&&C.onClick(e,E)}),(function(e){return I.next(e)}))}))))};E.defaultProps={current:0},t.d(n,"usePagination",(function(){return i})),t.d(n,"Pagination",(function(){return E})),t.d(n,"Page",(function(){return m}))}}]);