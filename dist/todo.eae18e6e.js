parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Aovf":[function(require,module,exports) {
var e=document.getElementById("todo-form"),t=document.querySelector("#todo-form input"),n=document.getElementById("todo-list"),r="todos",a=[];function o(){localStorage.setItem(r,JSON.stringify(a))}function d(e){var t=e.target.parentElement;t.remove(),a=a.filter(function(e){return e.id!==parseInt(t.id)}),o()}function i(e){var t=document.createElement("li");t.id=e.id;var r=document.createElement("span");r.innerText=e.text;var a=document.createElement("button");a.innerText="x",a.addEventListener("click",d),t.appendChild(r),t.appendChild(a),n.appendChild(t)}function l(e){e.preventDefault();var n=t.value;t.value="";var r={text:n,id:Date.now()};a.push(r),i(r),o()}e.addEventListener("submit",l);var u=localStorage.getItem(r);if(null!==u){var c=JSON.parse(u);a=c,c.forEach(i)}
},{}]},{},["Aovf"], null)
//# sourceMappingURL=/todo.eae18e6e.js.map