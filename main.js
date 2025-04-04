var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.0
		
    a - Represents an alpha character (A-Z,a-z)
    9 - Represents a numeric character (0-9)
    * - Represents an alphanumeric character (A-Z,a-z,0-9)
	
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

/**
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});


/*
Autosize is a small, stand-alone script to automatically adjust textarea height to fit text.

#### Demo

Full documentation and a demo can be found at [jacklmoore.com/autosize](http://jacklmoore.com/autosize)

#### Install via NPM
```bash
npm install autosize
```

#### Browser compatibility

Chrome | Firefox | IE | Safari | iOS Safari | Android | Opera Mini | Windows Phone IE
------ | --------|----|--------|------------|---------|------------|------------------
yes    | yes     | 9  | yes    | yes        | 4       | ?          | 8.1

#### Usage

The autosize function accepts a single textarea element, or an array or array-like object (such as a NodeList or jQuery collection) of textarea elements.

```javascript
// from a NodeList
autosize(document.querySelectorAll('textarea'));

// from a single Node
autosize(document.querySelector('textarea'));

// from a jQuery collection
autosize($('textarea'));
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e||self).autosize=t()}(this,function(){var e,t,n="function"==typeof Map?new Map:(e=[],t=[],{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){-1===e.indexOf(n)&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}),o=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){o=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function r(e){var t=n.get(e);t&&t.destroy()}function i(e){var t=n.get(e);t&&t.update()}var l=null;return"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((l=function(e){return e}).destroy=function(e){return e},l.update=function(e){return e}):((l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!n.has(e)){var t,r=null,i=null,l=null,d=function(){e.clientWidth!==i&&c()},u=function(t){window.removeEventListener("resize",d,!1),e.removeEventListener("input",c,!1),e.removeEventListener("keyup",c,!1),e.removeEventListener("autosize:destroy",u,!1),e.removeEventListener("autosize:update",c,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),n.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",u,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",c,!1),window.addEventListener("resize",d,!1),e.addEventListener("input",c,!1),e.addEventListener("autosize:update",c,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",n.set(e,{destroy:u,update:c}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),r="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(r)&&(r=0),c()}function a(t){var n=e.style.width;e.style.width="0px",e.style.width=n,e.style.overflowY=t}function s(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),n=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+r+"px",i=e.clientWidth,t.forEach(function(e){e.node.scrollTop=e.scrollTop}),n&&(document.documentElement.scrollTop=n)}}function c(){s();var t=Math.round(parseFloat(e.style.height)),n=window.getComputedStyle(e,null),r="content-box"===n.boxSizing?Math.round(parseFloat(n.height)):e.offsetHeight;if(r<t?"hidden"===n.overflowY&&(a("scroll"),s(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==n.overflowY&&(a("hidden"),s(),r="content-box"===n.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),l!==r){l=r;var i=o("autosize:resized");try{e.dispatchEvent(i)}catch(e){}}}}(e)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),l});
