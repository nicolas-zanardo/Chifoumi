(()=>{"use strict";var e={315:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(15),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,'*{margin:0;padding:0;text-decoration:none}body{width:100%;font-family:Arial,sans-serif;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background-color:#e3e3e3}header{width:90%;height:20vh;display:flex;justify-content:center;align-items:center;background-color:#343434;color:#f5f5f5;font-family:"Original Surfer",cursive;box-shadow:0 5px 10px 4px rgba(83,83,83,.29);border:10px solid #f5f5f5;border-radius:15px;margin:1rem 2rem}main{max-width:80%;margin:1rem;border-radius:15px;height:70vh;display:flex;justify-content:center;align-items:center;flex-wrap:wrap}h1{font-size:10rem;transition:.3s}footer{height:10vh;display:flex;justify-content:center;align-items:center}button.btn-select,button.btn-game{padding:3rem}button.btn-select:hover,button.btn-game:hover{transform:scale(1.1)}button{font-size:2.5rem;outline:none;cursor:pointer;background:#f5f5f5;padding:2rem;margin:1rem;border-radius:1rem;border:none;box-shadow:1px 1px 2px 0px rgba(0,0,0,.5);transition:.3s}.ninja{display:none !important}.select-option,.game{padding:1rem;margin:1rem;display:flex;font-size:2rem;justify-content:space-around;align-items:center;flex-wrap:wrap}.select-option strong{color:indigo}.valid-option,.reload{max-height:5rem;font-size:2rem;display:flex;justify-content:center;align-items:center;padding:2rem 4rem;color:#fff;box-shadow:1px 1px 2px 0px rgba(0,0,0,.5);cursor:pointer;transition:300ms;border-radius:3rem 0 3rem 0}.valid-option:hover,.reload:hover{transform:scale(1.1)}.valid-option{background-color:indigo}.reload{background-color:#8a2be2}.messages{background:#fff;padding:3rem 5rem;margin:2rem;font-size:3rem;border-radius:15px;box-shadow:1px 1px 2px 0px rgba(0,0,0,.5)}.result{text-align:center;font-size:5rem}.display-result{display:flow;flex-direction:column;align-items:center;justify-content:space-between}',"",{version:3,sources:["webpack://./src/styles/style.scss"],names:[],mappings:"AAAA,EACI,QAAA,CACA,SAAA,CACA,oBAAA,CAGJ,KACI,UAAA,CACA,4BAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CACA,wBAAA,CAGJ,OACI,SAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,wBAAA,CACA,aAAA,CACA,qCAAA,CACA,4CAAA,CACA,yBAAA,CACA,kBAAA,CACA,gBAAA,CAGJ,KACI,aAAA,CACA,WAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CAGJ,GACI,eAAA,CACA,cAAA,CAIJ,OACI,WAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAGJ,kCACI,YAAA,CACA,8CACI,oBAAA,CAIR,OACI,gBAAA,CACA,YAAA,CACA,cAAA,CACA,kBAAA,CACA,YAAA,CACA,WAAA,CACA,kBAAA,CACA,WAAA,CACA,yCAAA,CACA,cAAA,CAGJ,OACI,uBAAA,CAGJ,qBACI,YAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CACA,4BAAA,CACA,kBAAA,CACA,cAAA,CAGJ,sBACI,YAAA,CAGJ,sBACI,eAAA,CACA,cAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CACA,yCAAA,CACA,cAAA,CACA,gBAAA,CACA,2BAAA,CACA,kCACI,oBAAA,CAIR,cACI,uBAAA,CAEJ,QACI,wBAAA,CAGJ,UACI,eAAA,CACA,iBAAA,CACA,WAAA,CACA,cAAA,CACA,kBAAA,CACA,yCAAA,CAGJ,QACI,iBAAA,CACA,cAAA,CAGJ,gBACI,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,6BAAA",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    text-decoration: none;\n}\n\nbody {\n    width: 100%;\n    font-family: Arial, sans-serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background-color: #e3e3e3;\n}\n\nheader {\n    width: 90%;\n    height: 20vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #343434;\n    color :whitesmoke;\n    font-family: 'Original Surfer', cursive;\n    box-shadow: 0 5px 10px 4px rgba(83, 83, 83, 0.29);\n    border: 10px solid whitesmoke;\n    border-radius: 15px;\n    margin: 1rem 2rem;\n}\n\nmain {\n    max-width: 80%;\n    margin: 1rem;\n    border-radius: 15px;\n    height: 70vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\nh1 {\n    font-size: 10rem;\n    transition: 0.3s;\n\n}\n\nfooter {\n    height: 10vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nbutton.btn-select, button.btn-game {\n    padding: 3rem;\n    &:hover {\n        transform: scale(1.1);\n    }\n}\n\nbutton {\n    font-size: 2.5rem;\n    outline: none;\n    cursor: pointer;\n    background: whitesmoke;\n    padding: 2rem;\n    margin: 1rem;\n    border-radius: 1rem;\n    border: none;\n    box-shadow: 1px 1px 2px 0px  rgb(black, 0.5);\n    transition: 0.3s;\n}\n\n.ninja {\n    display: none !important;\n}\n\n.select-option, .game{\n    padding: 1rem;\n    margin: 1rem;\n    display: flex;\n    font-size: 2rem;\n    justify-content: space-around;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.select-option strong {\n    color: indigo;\n}\n\n.valid-option, .reload {\n    max-height: 5rem;\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem 4rem;\n    color: white;\n    box-shadow: 1px 1px 2px 0px  rgb(black, 0.5);\n    cursor: pointer;\n    transition: 300ms;\n    border-radius: 3rem 0 3rem 0;\n    &:hover {\n        transform: scale(1.1);\n    }\n}\n\n.valid-option {\n    background-color: indigo;\n}\n.reload {\n    background-color: blueviolet;\n}\n\n.messages {\n    background: white;\n    padding: 3rem 5rem;\n    margin: 2rem;\n    font-size: 3rem;\n    border-radius: 15px;\n    box-shadow: 1px 1px 2px 0px  rgb(black, 0.5);\n}\n\n.result {\n    text-align: center;\n    font-size: 5rem;\n}\n\n.display-result {\n    display: flow;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}"],sourceRoot:""}]);const A=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var A=0;A<e.length;A++){var s=[].concat(e[A]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},15:e=>{function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}e.exports=function(e){var n,r,o=(r=4,function(e){if(Array.isArray(e))return e}(n=e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,A=e[Symbol.iterator]();!(r=(a=A.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==A.return||A.return()}finally{if(o)throw i}}return n}}(n,r)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),c="/*# ".concat(s," */"),l=a.sources.map((function(e){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(e," */")}));return[i].concat(l).concat([c]).join("\n")}return[i].join("\n")}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function A(e,t){for(var n={},r=[],o=0;o<e.length;o++){var A=e[o],s=t.base?A[0]+t.base:A[0],c=n[s]||0,l="".concat(s," ").concat(c);n[s]=c+1;var u=a(l),d={css:A[1],media:A[2],sourceMap:A[3]};-1!==u?(i[u].references++,i[u].updater(d)):i.push({identifier:l,updater:m(d,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,l=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function u(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,f=0;function m(e,t){var n,r,o;if(t.singleton){var i=f++;n=p||(p=s(t)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=s(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=A(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=A(e,t),c=0;c<n.length;c++){var l=a(n[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=s}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(315);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=function(){this.selectOption=document.querySelector(".select-option"),this.game=document.querySelector(".game"),this.messages=document.querySelector(".messages"),this.computer=document.querySelector(".computer"),this.yourChoice=document.querySelector(".your-choice"),this.result=document.querySelector(".result"),this.reload=document.querySelector(".reload"),this.response=document.querySelector(".response"),this.selectedOptionToPlay=document.querySelector(".select-option strong"),this.btnGame=document.querySelectorAll(".btn-game"),this.btnSelect=document.querySelectorAll(".btn-select"),this.valid=document.querySelector(".valid-option")};var i=[{name:"ciseau",lose:["puit","pierre"],inGame:!0},{name:"feuille",lose:["ciseau"],inGame:!0},{name:"pierre",lose:["puit","feuille"],inGame:!0},{name:"puit",lose:["feuille"],inGame:!0}];const a=function(){function e(){this.attackSelected="",this.arrayAttack=i,this.arrayAttackTEMP=i,this.computerObj={name:"",lose:[],inGame:!0}}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!1,configurable:!0}),e.prototype.getAttackSelected=function(){return this.attackSelected},e.prototype.setAttackSelected=function(e){this.attackSelected=e},e.prototype.getArrayAttack=function(){return this.arrayAttackTEMP},e.prototype.setArrayAttack=function(e){var t=this;this.arrayAttackTEMP=[],this.arrayAttack.forEach((function(t){t===e&&(!0===t.inGame?t.inGame=!1:t.inGame=!0)})),this.arrayAttack.forEach((function(e){!0===e.inGame&&t.arrayAttackTEMP.push(e)}))},e.prototype.setComputerObj=function(e){this.computerObj=e},e.prototype.getComputer=function(){return this.computerObj.name},e}(),A=function(){function e(){this.elt=new o,this.onInit(),this.listener(),this.valid()}return e.prototype.onInit=function(){this.countOptionSelectedByPlayer=document.querySelectorAll(".btn-select").length},e.prototype.valid=function(){var e=this;this.elt.valid.addEventListener("click",(function(){var t,n,r;null===(t=e.elt.selectOption)||void 0===t||t.classList.add("ninja"),null===(n=e.elt.game)||void 0===n||n.classList.remove("ninja"),null===(r=e.elt.valid)||void 0===r||r.classList.add("ninja"),e.elt.messages.innerHTML="Good luck 🍀",e.elt.messages.classList.remove("ninja");var o=a.Instance.getArrayAttack()[Math.round(Math.random()*(a.Instance.getArrayAttack().length-1))];a.Instance.setComputerObj(o)}))},e.prototype.listener=function(){var e=this;this.elt.btnSelect.forEach((function(t){t.addEventListener("click",(function(){var n=document.querySelector('[data-id-game = "'+t.dataset.id+'"]');n.classList.contains("ninja")?(e.countOptionSelectedByPlayer++,n.classList.remove("ninja"),t.style.backgroundColor="whitesmoke",t.style.color="black",a.Instance.setArrayAttack(i[t.dataset.id])):e.countOptionSelectedByPlayer>1&&(e.countOptionSelectedByPlayer--,n.classList.add("ninja"),t.style.backgroundColor="red",t.style.color="white",a.Instance.setArrayAttack(i[t.dataset.id])),e.elt.selectedOptionToPlay.innerHTML=""+e.countOptionSelectedByPlayer}))}))},e}(),s=function(){function e(){this.elt=new o,this.data=i}return e.prototype.display=function(e,t){this.elt.result.innerHTML=e,this.elt.game.classList.add("ninja"),this.elt.computer.innerHTML="Adversaire: <strong>"+a.Instance.getComputer()+"</strong>",this.elt.reload.classList.remove("ninja"),this.elt.messages.classList.add("ninja"),this.elt.response.classList.remove("ninja"),t&&(this.elt.yourChoice.style.backgroundColor=t,this.elt.yourChoice.style.color="white")},e.prototype.factoryAttack=function(e,t){var n=this,r=null;if(e===t)return this.display("Match Null 👊");this.data.forEach((function(o){o.name===e&&o.lose.forEach((function(e){if(e===t)return r=1})),n.result(r)}))},e.prototype.result=function(e){return 1===e?this.display("You Lose 😞","red"):this.display("You Win 🎉","green")},e}(),c=function(){function e(){this.elt=new o,this.listener(),this.reload()}return e.prototype.reload=function(){this.elt.reload.addEventListener("click",(function(){document.location.reload()}))},e.prototype.listener=function(){var e=this;this.elt.btnGame.forEach((function(t){t.addEventListener("click",(function(){a.Instance.setAttackSelected(t.dataset.nameGame),e.elt.yourChoice.innerHTML="Vous <strong>"+a.Instance.getAttackSelected()+"</strong>",(new s).factoryAttack(a.Instance.getAttackSelected(),a.Instance.getComputer())}))}))},e}();new A,new c})()})();
//# sourceMappingURL=bundle.js.map