(()=>{"use strict";function e(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}var n=function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var o,t;return o=n,(t=[{key:"showMessage",value:function(e){alert(e,"title")}},{key:"print",value:function(e){console.log(e)}}])&&e(o.prototype,t),n}();$(document).ready((function(){console.log("document ready.."),$("#btn-sidebar-collapser").on("click",(function(){$(".sidebar").addClass("active"),$("#body-content").addClass("active")})),$("#btn-sidebar-toogle").on("click",(function(){$(".sidebar").toggleClass("active"),$("#body-content").toggleClass("active"),console.log("click"),(new n).print("very good")}))}))})();