!function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],s=0,d=[];s<a.length;s++)i=a[s],o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);d.length;)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={1:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var f=c;u.push([1,0]),n()}([,function(e,t,n){"use strict";(function(e){var t=n(3);(0,t.getUsers)().then(function(n){var r="";n.forEach(function(e){r+='<tr>\n      <td><a href="#" data-id="'+e.id+'" class="deleteUser">Delete</a></td>\n      <td>'+e.id+"</td>\n      <td>"+e.firstName+"</td>\n      <td>"+e.lastName+"</td>\n      <td>"+e.email+"</td>\n      </tr>"}),e.document.getElementById("users").innerHTML=r;var o=e.document.getElementsByClassName("deleteUser");Array.from(o,function(e){e.onclick=function(e){var n=e.target;e.preventDefault(),(0,t.deleteUser)(n.attributes["data-id"].value);var r=n.parentNode.parentNode;r.parentNode.removeChild(r)}})})}).call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=function(){return function(e){return fetch(r+e).then(o,u)}("users")},t.deleteUser=function(e){return function(e){var t=new Request(r+e,{method:"DELETE"});return fetch(t).then(o,u)}("users/"+e)},n(0);var r=(0,function(e){return e&&e.__esModule?e:{default:e}}(n(4)).default)();function o(e){return e.json()}function u(e){console.log(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function(e,t){t||(t=window.location.href);e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("useMockApi")?"http://localhost:3001/":"/"}}]);
//# sourceMappingURL=main.34d50e445f6c5b8603ee.js.map