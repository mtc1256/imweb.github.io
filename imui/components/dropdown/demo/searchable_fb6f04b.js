define("components/dropdown/demo/searchable.jsx",function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var a=e("node_modules/react/react"),l=t(a),n=e("node_modules/react-dom/index"),d=t(n),u=e("components/dropdown/index.jsx"),r=t(u),o=function(){for(var e=[{name:"swift",value:101},{name:"java",value:121},{name:"javascript",value:332}],t=[],a=0;100>a;a++)t.push({name:"name"+a,value:a});return l.default.createElement("div",null,l.default.createElement("h3",null,"with default selected"),l.default.createElement(r.default,{options:e,defaultOption:e[0],searchable:!0}),l.default.createElement("h3",null,"without default selected"),l.default.createElement(r.default,{options:e,searchable:!0}),l.default.createElement("h3",null,"big data"),l.default.createElement(r.default,{options:t,searchable:!0}))};d.default.render(l.default.createElement(o,null),document.getElementById("searchable"))});