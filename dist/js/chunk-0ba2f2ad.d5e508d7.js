(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ba2f2ad"],{"0cb2":function(t,e,n){var r=n("7b0b"),a=Math.floor,u="".replace,c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,i,l,s){var p=n+t.length,f=i.length,b=o;return void 0!==l&&(l=r(l),b=c),u.call(s,b,(function(r,u){var c;switch(u.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(p);case"<":c=l[u.slice(1,-1)];break;default:var o=+u;if(0===o)return r;if(o>f){var s=a(o/10);return 0===s?r:s<=f?void 0===i[s-1]?u.charAt(1):i[s-1]+u.charAt(1):r}c=i[o-1]}return void 0===c?"":c}))}},5319:function(t,e,n){"use strict";var r=n("d784"),a=n("d039"),u=n("825a"),c=n("a691"),o=n("50c4"),i=n("577e"),l=n("1d80"),s=n("8aa5"),p=n("0cb2"),f=n("14c3"),b=n("b622"),d=b("replace"),v=Math.max,h=Math.min,g=function(t){return void 0===t?t:String(t)},$=function(){return"$0"==="a".replace(/./,"$0")}(),y=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),k=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));r("replace",(function(t,e,n){var r=y?"$":"$0";return[function(t,n){var r=l(this),a=void 0==t?void 0:t[d];return void 0!==a?a.call(t,r,n):e.call(i(r),t,n)},function(t,a){var l=u(this),b=i(t);if("string"===typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var d=n(e,l,b,a);if(d.done)return d.value}var $="function"===typeof a;$||(a=i(a));var y=l.global;if(y){var k=l.unicode;l.lastIndex=0}var m=[];while(1){var x=f(l,b);if(null===x)break;if(m.push(x),!y)break;var w=i(x[0]);""===w&&(l.lastIndex=s(b,o(l.lastIndex),k))}for(var O="",j=0,R=0;R<m.length;R++){x=m[R];for(var A=i(x[0]),C=v(h(c(x.index),b.length),0),I=[],M=1;M<x.length;M++)I.push(g(x[M]));var J=x.groups;if($){var q=[A].concat(I,C,b);void 0!==J&&q.push(J);var S=i(a.apply(void 0,q))}else S=p(A,b,C,I,J,a);C>=j&&(O+=b.slice(j,C)+S,j=C+A.length)}return O+b.slice(j)}]}),!k||!$||y)},c618:function(t,e,n){"use strict";n.r(e);n("ac1f"),n("5319");var r=n("7a23");function a(t,e,n,a,u,c){return Object(r["q"])(),Object(r["c"])("div",null,[Object(r["e"])("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=function(){return c.getRouter&&c.getRouter.apply(c,arguments)})}," 取得方法 "),Object(r["e"])("button",{type:"button",class:"btn btn-primary",onClick:e[2]||(e[2]=function(){return c.push&&c.push.apply(c,arguments)})}," 到about頁面 "),Object(r["e"])("button",{type:"button",class:"btn btn-primary",onClick:e[3]||(e[3]=function(){return c.replace&&c.replace.apply(c,arguments)})}," 用replace到about頁面 "),Object(r["e"])("button",{type:"button",class:"btn btn-primary",onClick:e[4]||(e[4]=function(){return t.addRoute&&t.addRoute.apply(t,arguments)})}," 用addRoute增加頁面 ")])}var u={data:function(){return{}},methods:{getRouter:function(){console.log(this.$route),console.log(this.$router)},push:function(){this.$router.push({name:"About"})},replace:function(){this.$router.replace({name:"About"})}}};u.render=a;e["default"]=u}}]);
//# sourceMappingURL=chunk-0ba2f2ad.d5e508d7.js.map