(function(e){function n(n){for(var c,o,l=n[0],u=n[1],i=n[2],s=0,b=[];s<l.length;s++)o=l[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);d&&d(n);while(b.length)b.shift()();return r.push.apply(r,i||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],c=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(c=!1)}c&&(r.splice(n--,1),e=l(l.s=t[0]))}return e}var c={},a={app:0},r=[];function o(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0cd85dfd":"2a7f2143","chunk-2d0c8d9c":"b496175c","chunk-2d0cc9c7":"ce669cf3","chunk-2d0e17b4":"22a794ca","chunk-2d0e5e97":"17e0685b","chunk-2d2102cc":"47b83077","chunk-2d22bd01":"088180ad","chunk-2d22d746":"b773dccc","chunk-63c1eac8":"59f3df74","chunk-2d0aec70":"d9511fd7","chunk-2d2261a6":"026ae957"}[e]+".js"}function l(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,c){t=a[e]=[n,c]}));n.push(t[2]=c);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(e);var i=new Error;r=function(n){u.onerror=u.onload=null,clearTimeout(s);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",i.name="ChunkLoadError",i.type=c,i.request=r,t[1](i)}a[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(n)},l.m=e,l.c=c,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)l.d(t,c,function(n){return e[n]}.bind(null,c));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/test_vue3/dist/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var d=i;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1c5f":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23"),a=t("7bb1"),r=t("3aa8"),o=t("cbdf"),l=t("9457"),u={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},s=Object(c["e"])("a",{class:"navbar-brand",href:"#"},"Navbar",-1),d=Object(c["e"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["e"])("span",{class:"navbar-toggler-icon"})],-1),b={class:"collapse navbar-collapse",id:"navbarNav"},f={class:"navbar-nav"},m={class:"nav-item"},p=Object(c["d"])("Home"),h={class:"nav-item"},v=Object(c["d"])("About"),O={class:"nav-item"},j=Object(c["d"])("useMethods"),g={class:"nav-item"},k=Object(c["d"])("購物車"),y={class:"container"};function V(e,n,t,a,r,o){var l=Object(c["u"])("router-link"),V=Object(c["u"])("router-view");return Object(c["q"])(),Object(c["c"])("div",null,[Object(c["e"])("nav",u,[Object(c["e"])("div",i,[s,d,Object(c["e"])("div",b,[Object(c["e"])("ul",f,[Object(c["e"])("li",m,[Object(c["e"])(l,{class:"nav-link",to:"/"},{default:Object(c["C"])((function(){return[p]})),_:1})]),Object(c["e"])("li",h,[Object(c["e"])(l,{class:"nav-link",to:"/about"},{default:Object(c["C"])((function(){return[v]})),_:1})]),Object(c["e"])("li",O,[Object(c["e"])(l,{class:"nav-link",to:"/useMethods"},{default:Object(c["C"])((function(){return[j]})),_:1})]),Object(c["e"])("li",g,[Object(c["e"])(l,{class:"nav-link",to:{name:"購物車"}},{default:Object(c["C"])((function(){return[k]})),_:1})])])])])]),Object(c["e"])("div",y,[Object(c["e"])(V)])])}var _={data:function(){return{name:"老闆的家"}}};t("5e70");_.render=V;var w=_,P=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),x=(t("b0c0"),t("cf05")),M=t.n(x),S={class:"home"},C=Object(c["e"])("img",{alt:"Vue logo",src:M.a},null,-1),q={class:"mb-3"},T=Object(c["e"])("label",{for:"email",class:"form-label"},"Email",-1),E={class:"mb-3"},U=Object(c["e"])("label",{for:"name",class:"form-label"},"姓名",-1),F={class:"mb-3"},H=Object(c["e"])("label",{for:"phone",class:"form-label"},"電話",-1),N={class:"mb-3"},A=Object(c["e"])("label",{for:"region",class:"form-label"},"地區",-1),z=Object(c["e"])("option",{value:""},"請選擇地區",-1),J=Object(c["e"])("option",{value:"台北市"},"台北市",-1),L=Object(c["e"])("option",{value:"高雄市"},"高雄市",-1),W={class:"mb-3"},I=Object(c["e"])("label",{for:"address",class:"form-label"},"地址",-1),$=Object(c["e"])("button",{class:"btn btn-primary",type:"submit"},"Submit",-1);function B(e,n,t,a,r,o){var l=Object(c["u"])("Field"),u=Object(c["u"])("error-message"),i=Object(c["u"])("Form");return Object(c["q"])(),Object(c["c"])("div",S,[C,Object(c["e"])(i,{onSubmit:o.onSubmit},{default:Object(c["C"])((function(e){var t=e.errors;return[Object(c["e"])("div",q,[T,Object(c["e"])(l,{id:"email",name:"email",modelValue:r.user.email,"onUpdate:modelValue":n[1]||(n[1]=function(e){return r.user.email=e}),type:"email",class:["form-control",{"is-invalid":t["email"]}],rules:"email|required",placeholder:"請輸入 Email"},null,8,["modelValue","class"]),Object(c["e"])(u,{name:"email",class:"invalid-feedback"})]),Object(c["e"])("div",E,[U,Object(c["e"])(l,{id:"name",name:"姓名",modelValue:r.user.name,"onUpdate:modelValue":n[2]||(n[2]=function(e){return r.user.name=e}),type:"text",class:["form-control",{"is-invalid":t["姓名"]}],rules:"required",placeholder:"請輸入姓名"},null,8,["modelValue","class"]),Object(c["e"])(u,{name:"姓名",class:"invalid-feedback"})]),Object(c["e"])("div",F,[H,Object(c["e"])(l,{id:"phone",name:"電話",modelValue:r.user.phone,"onUpdate:modelValue":n[3]||(n[3]=function(e){return r.user.phone=e}),type:"text",class:["form-control",{"is-invalid":t["電話"]}],rules:o.isPhone,placeholder:"請輸入電話"},null,8,["modelValue","rules","class"]),Object(c["e"])(u,{name:"電話",class:"invalid-feedback"})]),Object(c["e"])("div",N,[A,Object(c["e"])(l,{id:"region",name:"地區",modelValue:r.user.region,"onUpdate:modelValue":n[4]||(n[4]=function(e){return r.user.region=e}),class:["form-control",{"is-invalid":t["地區"]}],as:"select",rules:"required"},{default:Object(c["C"])((function(){return[z,J,L]})),_:2},1032,["modelValue","class"]),Object(c["e"])(u,{name:"地區",class:"invalid-feedback"})]),Object(c["e"])("div",W,[I,Object(c["e"])(l,{id:"address",name:"地址",modelValue:r.user.address,"onUpdate:modelValue":n[5]||(n[5]=function(e){return r.user.address=e}),type:"text",class:"form-control",placeholder:"請輸入地址"},null,8,["modelValue"]),Object(c["e"])(u,{name:"地址",class:"invalid-feedback"})]),$]})),_:1},8,["onSubmit"])])}var D={name:"Home",data:function(){return{user:{email:"",name:"",address:"",phone:"",region:""}}},methods:{onSubmit:function(){console.log(this.user)},isPhone:function(e){var n=/^(09)[0-9]{8}$/;return!!n.test(e)||"需要正確的電話號碼"}},created:function(){console.log(this)}};D.render=B;var G=D,K=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"/useMethods",name:"UseMethods",component:function(){return t.e("chunk-0cd85dfd").then(t.bind(null,"c618"))}},{path:"/cart",name:"購物車",component:function(){return t.e("chunk-2d2102cc").then(t.bind(null,"b789"))},children:[{path:"a",component:function(){return t.e("chunk-2d0c8d9c").then(t.bind(null,"5748"))}},{path:"b",component:function(){return t.e("chunk-2d0cc9c7").then(t.bind(null,"4f54"))}},{path:"products",component:function(){return Promise.all([t.e("chunk-63c1eac8"),t.e("chunk-2d2261a6")]).then(t.bind(null,"e6dc"))}},{path:"productProps/:id",component:function(){return Promise.all([t.e("chunk-63c1eac8"),t.e("chunk-2d0aec70")]).then(t.bind(null,"0c07"))},props:function(e){return{id:e.params.id}}},{path:"multi",component:function(){return t.e("chunk-2d0e17b4").then(t.bind(null,"7b2e"))},children:[{path:"a2b",components:{left:function(){return t.e("chunk-2d0c8d9c").then(t.bind(null,"5748"))},right:function(){return t.e("chunk-2d0cc9c7").then(t.bind(null,"4f54"))}}},{path:"c2b",components:{left:function(){return t.e("chunk-2d22bd01").then(t.bind(null,"f122"))},right:function(){return t.e("chunk-2d0cc9c7").then(t.bind(null,"4f54"))}}}]}]},{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}},{path:"/:pathMatch(.*)*",redirect:{name:"Home"}}],Q=Object(P["a"])({history:Object(P["b"])(),routes:K}),R=Q;Object(a["e"])("required",r["c"]),Object(a["e"])("email",r["a"]),Object(a["e"])("min",r["b"]),Object(a["d"])({generateMessage:Object(o["a"])({zh_TW:l}),validateOnInput:!0}),Object(o["b"])("zh_TW");var X=Object(c["b"])(w).use(R);X.component("Field",a["b"]),X.component("Form",a["c"]),X.component("ErrorMessage",a["a"]),X.mount("#app")},"5e70":function(e,n,t){"use strict";t("1c5f")},cf05:function(e,n,t){e.exports=t.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0c0959cd.js.map