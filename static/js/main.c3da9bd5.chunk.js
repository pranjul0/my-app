(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(4),l=a.n(s),r=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar- ".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("form",{className:"d-flex",children:Object(o.jsxs)("div",{className:"form-check form-switch text- ".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input mx-3",onClick:e.enableDarkMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label mx-3",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})})}),Object(o.jsx)("li",{className:"nav-item"})]})})]})})})}function b(e){var t=Object(n.useState)(""),a=Object(r.a)(t,2),c=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"myBox",onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"grey"},rows:"8",value:c})}),Object(o.jsx)("button",{className:"btn btn-warning my-2 mx-2",onClick:function(){var e=c.toUpperCase();s(e)},children:"Convert to UpperCase"}),Object(o.jsx)("button",{className:"btn btn-warning my-2 mx-2",onClick:function(){var e=c.toLowerCase();s(e)},children:"Convert to LowerCase"}),Object(o.jsx)("button",{className:"btn btn-warning my-2 mx-2",onClick:function(){s("")},children:"Clear"}),Object(o.jsx)("button",{className:"btn btn-warning my-2 mx-2",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:"Your Text Summary "}),Object(o.jsxs)("p",{children:[c.split(" ").length," words and ",c.length," Char"]})]})]})}function d(e){return e.alert&&Object(o.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(o.jsxs)("strong",{children:[e.alert.type," "]}),":",e.alert.msg,Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})}var j=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),l=Object(r.a)(s,2),j=l[0],m=l[1],h=function(e,t){m({msg:e,type:t})};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{mode:a,enableDarkMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#042743",h("Dark Mode Enable","Success")):(c("light"),document.body.style.backgroundColor="white",h("Light Mode Enable","Success"))}}),Object(o.jsx)(d,{alert:j}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{heading:"Enter the text to analyze  Below",mode:a})})]})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),m()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.c3da9bd5.chunk.js.map