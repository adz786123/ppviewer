(function(e){function t(t){for(var r,u,c=t[0],a=t[1],p=t[2],l=0,s=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);f&&f(t);while(s.length)s.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/ppviewer/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=a;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21db":function(e,t,n){},"2b1f":function(e,t,n){"use strict";n("6d6f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("WebViewer",{attrs:{path:"".concat(e.publicPath,"lib")}})],1)},i=[],u=function(){var e=this,t=e._self._c;return t("div",{ref:"viewer"})},c=[],a=(n("14d9"),n("df0f")),p=n.n(a),f={name:"WebViewer",props:{path:String},mounted:function(){p()({path:this.path,initialDoc:"initialDoc: /ppviewer/files/document.pdf",licenseKey:"m2vQI76xIF4pXVaM4cfF"},this.$refs.viewer).then((function(e){var t=e.Core,n=e.UI;t.documentViewer.addEventListener("documentLoaded",(function(){console.log("document loaded")})),t.documentViewer.addEventListener("pageNumberUpdated",(function(e){console.log("Page number is: ".concat(e))})),n.setHeaderItems((function(e){e.push({type:"none",img:"https://icons.getbootstrap.com/assets/icons/caret-right-fill.svg",onClick:function(){var e=t.documentViewer.getCurrentPage(),n=t.documentViewer.getPageCount(),r=e===n;r?t.documentViewer.setCurrentPage(1):t.documentViewer.setCurrentPage(e+1)}})}))}))}},l=f,s=(n("2b1f"),n("2877")),d=Object(s["a"])(l,u,c,!1,null,"71628460",null),b=d.exports,v={name:"app",components:{WebViewer:b},data:function(){return{publicPath:"/ppviewer/"}}},h=v,g=(n("6968"),Object(s["a"])(h,o,i,!1,null,null,null)),m=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")},6968:function(e,t,n){"use strict";n("21db")},"6d6f":function(e,t,n){}});
//# sourceMappingURL=app.4fe3f8bf.js.map