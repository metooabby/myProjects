!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).AvueComponent={})}(this,function(e){"use strict";var n=function(e,n,t,o,i,a,r,s,c,d){"boolean"!=typeof r&&(c=s,s=r,r=!1);var u,l="function"==typeof t?t.options:t;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),o&&(l._scopeId=o),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=u):n&&(u=r?function(){n.call(this,d(this.$root.$options.shadowRoot))}:function(e){n.call(this,s(e))}),u)if(l.functional){var p=l.render;l.render=function(e,n){return u.call(n),p(e,n)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return t},t="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var o=document.head||document.getElementsByTagName("head")[0],i={};var a=n({render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"avue-component"},[t("p",[e._v("The counter is set to "),t("b",[e._v(e._s(e.counter))]),e._v(".")]),e._v(" "),t("button",{on:{click:function(n){e.counter+=1}}},[e._v("Click +1")]),e._v(" "),t("button",{on:{click:function(n){e.counter-=1}}},[e._v("Click -1")]),e._v(" "),t("button",{on:{click:function(n){e.counter=e.initCounter}}},[e._v("Reset")]),e._v(" "),t("b-field",[t("b-numberinput",{model:{value:e.number,callback:function(n){e.number=n},expression:"number"}})],1)],1)},staticRenderFns:[]},function(e){e&&e("data-v-dc183cec_0",{source:".avue-component[data-v-dc183cec]{display:block;width:400px;margin:25px auto;border:1px solid #ccc;background:#eaeaea;text-align:center;padding:25px}.avue-component p[data-v-dc183cec]{margin:0 0 1em}",map:void 0,media:void 0})},{name:"AvueComponent",data:function(){return{counter:5,initCounter:5,number:10}}},"data-v-dc183cec",!1,void 0,function(e){return function(e,n){return function(e,n){var a=t?n.media||"default":e,r=i[a]||(i[a]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);var s=n.source;if(n.map&&(s+="\n/*# sourceURL="+n.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),o.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(s),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{var c=r.ids.size-1,d=document.createTextNode(s),u=r.element.childNodes;u[c]&&r.element.removeChild(u[c]),u.length?r.element.insertBefore(d,u[c]):r.element.appendChild(d)}}}(e,n)}},void 0);function r(e){r.installed||(r.installed=!0,e.component("AvueComponent",a))}var s={install:r},c=null;"undefined"!=typeof window?c=window.Vue:"undefined"!=typeof global&&(c=global.Vue),c&&c.use(s),a.install=r,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})});