(function(){function h(e,t){var n=new Error('Cannot find module "'+e+'"'+(t?' from "'+t+'"':""));return n.code="MODULE_NOT_FOUND",n}function p(e){this.id=this.filename=e[0],this.loaded=!1}function d(n,r,i){var s=i&&i.globals;t[n]=r;if(s){var o=e||global;for(var u=0;u<s.length;u++){var a=s[u];l[n]=o[a]=C(n,n)}}}function v(e,t){u[e]=t}function m(e,t){a[e]=t}function g(e,t,n,r){var i=t.charAt(0)==="."?e+t.substring(1):e+"/$/"+t;o[i]=[n],r!==undefined&&(o[e+"/$/"+r]=[n,t,i])}function y(e){var t,n=0,r=e.length;for(t=0;t<r;t++){var i=e[t];i!=="."&&(i===".."?n--:(e[n]=i,n++))}return n===1?"/":(n>2&&e[n-1].length===0&&n--,e.length=n,e.join("/"))}function b(e,t){return y(e.split("/").concat(t.split("/")))}function w(e){var t=e.lastIndexOf("."),n;return t===-1||(n=e.lastIndexOf("/"))!==-1&&n>t?null:e.substring(0,t)}function E(e,t){return e.substring(0,e.length-t)}function S(e,t,n,r){var i=r&&"/"+t+"@"+r+n;return e+=n,[e,i,undefined]}function x(e,t){var n=e.lastIndexOf("$");if(n===-1)return[e,e,undefined];n+=2;var r=e.indexOf("/",n+3),i,s,u;r===-1?(i=e,s="",u=e.substring(n)):(i=e.substring(0,r),s=e.substring(r),u=e.substring(n,r));var a=o[i];return a===undefined?undefined:S(a[2]||i,a[1]||u,s,a[0])}function T(e,t){e.charAt(e.length-1)==="/"&&(e=e.slice(0,-1));var r=n.length;for(var i=0;i<r;i++){var s=n[i]+e,u=N(s,t);if(u)return u}var a,f,l=e.indexOf("/");l===-1?(a=e,f=""):(a=e.substring(0,l),f=e.substring(l));var c=t+"/$/"+a,h=o[c];if(h!==undefined)return S(h[2]||c,h[1]||a,f,h[0]);var p=t.lastIndexOf("/");while(p!==-1){var d=-1;if(p>0){d=t.lastIndexOf("/",p-1);if(d!==-1&&p-d===2&&t.charAt(d+1)==="$"){p=d;continue}}c=t.substring(0,p)+"/$/"+a,h=o[c];if(h!==undefined)return S(h[2]||c,h[1]||a,f,h[0]);if(d===-1)break;p=d}return undefined}function N(e,n){var r,i;if(e.charAt(0)===".")r=x(b(n,e),e);else if(e.charAt(0)==="/")r=x(y(e.split("/")));else{i=a[e];if(i)return N(i);r=T(e,n)}if(!r)return undefined;var s=r[0],o=r[1];if(!o)return N(s);var f;(f=u[o])!==undefined&&(s=b(s,f),o=b(o,f)),i=a[o],i!==undefined&&(s=b(s+"/..",i),o=b(o+"/..",i));var l=t[o];if(l===undefined){var c;if((c=w(o))===null||(l=t[c])===undefined)return undefined;s=E(s,o.length-c.length),o=c}return r[0]=s,r[1]=o,r[2]=l,r}function C(e,t){if(!e)throw h("");var n=N(e,t);if(!n)throw h(e,t);var r=n[0],i=s[r];if(i!==undefined)return i.exports;var o=n[1];if(l.hasOwnProperty(o))return l[o];var u=n[2];return i=new p(n),s[r]=i,i.load(u),i.exports}function k(e,t){var n=!0;t&&(n=t.wait!==!1);if(n&&!r)return i.push(arguments);C(e,"/")}function L(e){if(r=e!==!1){for(var t=0;t<i.length;t++)k.apply(i,i[t]);i.length=0}}function A(e){n.push(e)}var e=typeof window=="undefined"?null:window;if(e&&e.$rmod)return;var t={},n=[],r=!1,i=[],s={},o={},u={},a={},f={},l={},c;p.cache=s,c=p.prototype,c.load=function(e){var t=this.id;if(e&&e.constructor===Function){var n=t.lastIndexOf("/"),r=t.substring(0,n),i=t,o=f[r]||(f[r]={}),u=function(e){return o[e]||(o[e]=C(e,r))};u.resolve=function(e){if(!e)throw h("");var t=N(e,r);if(!t)throw h(e,r);return t[0]},u.cache=s,this.exports={},e.call(this,u,this.exports,this,i,r)}else this.exports=e;this.loaded=!0};var O={def:d,dep:g,run:k,main:v,remap:m,require:C,resolve:N,join:b,ready:L,addSearchPath:A};e?e.$rmod=O:module.exports=O})();
var template=require("marko").load(require.resolve("./template.marko"));template.render({marko:"marko"},function(e,t){console.log("Template output: "+t)});
$rmod.main("/marko@2.4.3","runtime/marko-runtime");
$rmod.dep("","marko","2.4.3");
$rmod.main("/async-writer@1.3.9","lib/async-writer");
$rmod.dep("/$/marko","async-writer","1.3.9");
$rmod.main("/process@0.6.0","index");
$rmod.dep("","process","0.6.0");
$rmod.remap("/process@0.6.0/index","browser");
$rmod.def("/process@0.6.0/browser",function(e,t,n,r,i){function o(){}var s=n.exports={};s.nextTick=function(){var e=typeof window!="undefined"&&window.setImmediate,t=typeof window!="undefined"&&window.postMessage&&window.addEventListener;if(e)return function(e){return window.setImmediate(e)};if(t){var n=[];return window.addEventListener("message",function(e){var t=e.source;if((t===window||t===null)&&e.data==="process-tick"){e.stopPropagation();if(n.length>0){var r=n.shift();r()}}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),s.title="browser",s.browser=!0,s.env={},s.argv=[],s.on=o,s.once=o,s.off=o,s.emit=o,s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")}});
$rmod.main("/events@1.0.2","events");
$rmod.dep("/$/marko","events","1.0.2");
$rmod.def("/events@1.0.2/events",function(e,t,n,r,i){function s(){this._events=this._events||{},this._maxListeners=this._maxListeners||undefined}function o(e){return typeof e=="function"}function u(e){return typeof e=="number"}function a(e){return typeof e=="object"&&e!==null}function f(e){return e===void 0}n.exports=s,s.EventEmitter=s,s.prototype._events=undefined,s.prototype._maxListeners=undefined,s.defaultMaxListeners=10,s.prototype.setMaxListeners=function(e){if(!u(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},s.prototype.emit=function(e){var t,n,r,i,s,u;this._events||(this._events={});if(e==="error")if(!this._events.error||a(this._events.error)&&!this._events.error.length)throw t=arguments[1],t instanceof Error?t:TypeError('Uncaught, unspecified "error" event.');n=this._events[e];if(f(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:r=arguments.length,i=new Array(r-1);for(s=1;s<r;s++)i[s-1]=arguments[s];n.apply(this,i)}else if(a(n)){r=arguments.length,i=new Array(r-1);for(s=1;s<r;s++)i[s-1]=arguments[s];u=n.slice(),r=u.length;for(s=0;s<r;s++)u[s].apply(this,i)}return!0},s.prototype.addListener=function(e,t){var n;if(!o(t))throw TypeError("listener must be a function");this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?a(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t;if(a(this._events[e])&&!this._events[e].warned){var n;f(this._maxListeners)?n=s.defaultMaxListeners:n=this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),typeof console.trace=="function"&&console.trace())}return this},s.prototype.on=s.prototype.addListener,s.prototype.once=function(e,t){function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var n=!1;return r.listener=t,this.on(e,r),this},s.prototype.removeListener=function(e,t){var n,r,i,s;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;n=this._events[e],i=n.length,r=-1;if(n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(a(n)){for(s=i;s-->0;)if(n[s]===t||n[s].listener&&n[s].listener===t){r=s;break}if(r<0)return this;n.length===1?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},s.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return arguments.length===0?this._events={}:this._events[e]&&delete this._events[e],this;if(arguments.length===0){for(t in this._events){if(t==="removeListener")continue;this.removeAllListeners(t)}return this.removeAllListeners("removeListener"),this._events={},this}n=this._events[e];if(o(n))this.removeListener(e,n);else while(n.length)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},s.prototype.listeners=function(e){var t;return!this._events||!this._events[e]?t=[]:o(this._events[e])?t=[this._events[e]]:t=this._events[e].slice(),t},s.listenerCount=function(e,t){var n;return!e._events||!e._events[t]?n=0:o(e._events[t])?n=1:n=e._events[t].length,n}});
$rmod.def("/async-writer@1.3.9/lib/AsyncWriter",function(e,t,n,r,i){function o(){this.str=""}function u(e){this._buffer="",this._wrapped=e}function c(e,t,n,r){var i=e.global,s=e._events,o=e._async;if(n==="finish"){if(o.finished)return r(),e;var u=!1,a=function(){if(u)return;u=!0,r()};s[t]("end",a),s[t]("finish",a)}else s[t](n,r);return e}function h(e){this.asyncWriter=e,this.writer=e.writer,this.finished=!1,this.flushed=!1,this.next=null,this.ready=!0}function p(e,t){var n=e.next;n&&(n.ready=!0,n.writer=n.asyncWriter.writer=t,n.flush())}function d(e,t){h.call(this,e),this.buffer=t}function v(e){h.call(this,e)}function m(e,t,n,r){this.data={},this.global=this.attributes=t||(t={}),this._af=this._prevAF=this._parentAF=null,this._isSync=!1,this._last=null,t.events||(t.events=e&&e.on?e:new a),this._events=t.events,n?this._async=n:this._async=t.async||(t.async={remaining:0,ended:!1,last:0,finished:!1});var i;e?r&&(i=e,e=new u(e)):e=new o,this.stream=i||e,this.writer=this._stream=e}var s=e("process");o.prototype={write:function(e){return this.str+=e,this},toString:function(){return this.str}},u.prototype={write:function(e){this._buffer+=e},flush:function(){this._buffer.length!==0&&(this._wrapped.write(this._buffer),this._buffer="",this._wrapped.flush&&this._wrapped.flush())},end:function(){this.flush(),this._wrapped.isTTY||this._wrapped.end()},on:function(e,t){return this._wrapped.on(e,t)},once:function(e,t){return this._wrapped.once(e,t)},emit:function(){var e=this._wrapped;return e.emit.apply(e)}};var a=e("/$/marko/$/events").EventEmitter,f=typeof s!="undefined"&&s.env.NODE_ENV==="development",l={write:function(){}};d.prototype={flush:function(){var e=this.writer,t=this.buffer.toString();t.length!==0&&e.write(t),this.flushed=!0,p(this,e)}},v.prototype={end:function(){this.finished||(this.finished=!0,this.ready&&this.flush())},flush:function(){if(!this.finished)return;this.flushed=!0;var e=this.writer;this.writer=this.asyncWriter.writer=l,p(this,e)}},m.DEFAULT_TIMEOUT=1e4,m.prototype={constructor:m,isAsyncWriter:m,sync:function(){this._isSync=!0},getAttributes:function(){return this.global},getAttribute:function(e){return this.global[e]},write:function(e){return e!=null&&this.writer.write(e.toString()),this},getOutput:function(){return this.writer.toString()},captureString:function(e,t){var n=new o;return this.swapWriter(n,e,t),n.toString()},swapWriter:function(e,t,n){var r=this.writer;this.writer=e,t.call(n),this.writer=r},createNestedWriter:function(e){var t=this,n=new m(e,t.global);return n._stream=t._stream,n.stream=t.stream,n},beginAsync:function(e){if(this._isSync)throw new Error("beginAsync() not allowed when using renderSync()");var t=!0,n=this.createNestedWriter(this.writer),r=this.writer=new o,i=new v(n),s=new d(this,r);i.next=s,n._af=i,n._parentAF=i;var u=this._prevAF||this._parentAF;return u&&(s.next=u.next,u.next=i,u.flushed||(t=!1)),i.ready=t,this._prevAF=s,n.handleBeginAsync(e,this),n},handleBeginAsync:function(e,t){var n=this,r=n._async,i,s;r.remaining++,e!=null&&(typeof e=="number"?i=e:(i=e.timeout,e.last===!0&&(i==null&&(i=0),r.last++),s=e.name)),i==null&&(i=m.DEFAULT_TIMEOUT),n.stack=f?(new Error).stack:null,n.name=s,i>0&&(n._timeoutId=setTimeout(function(){n.error(new Error("Async fragment "+(s?"("+s+") ":"")+"timed out after "+i+"ms"))},i)),this._events.emit("beginAsync",{writer:this,parentWriter:t})},on:function(e,t){return c(this,"on",e,t)},once:function(e,t){return c(this,"once",e,t)},onLast:function(e){var t=this._last;if(!t){t=this._last=[];var n=0,r=function i(){if(n===t.length)return;var e=t[n++];e(i)};this.once("last",function(){r()})}t.push(e)},emit:function(e){var t=this._events;switch(arguments.length){case 0:t.emit();break;case 1:t.emit(e);break;default:t.emit.apply(t,arguments)}return this},removeListener:function(){var e=this._events;return e.removeListener.apply(e,arguments),this},pipe:function(e){return this._stream.pipe(e),this},error:function(e){try{var t=this.stack,n=this.name;e=new Error("Async fragment failed"+(n?" ("+n+")":"")+". Exception: "+(e.stack||e)+(t?"\nCreation stack trace: "+t:"")),this.emit("error",e)}finally{this.end()}},end:function(e){e&&this.write(e);var t=this._af;return t?(t.end(),this.handleEnd(!0)):this.handleEnd(!1),this},handleEnd:function(e){var t=this._async;if(t.finished)return;var n;if(e){var r=this._timeoutId;r&&clearTimeout(r),n=--t.remaining}else n=t.remaining,t.ended=!0;t.ended&&(!t.lastFired&&t.remaining-t.last===0&&(t.lastFired=!0,t.last=0,this._events.emit("last")),n===0&&(t.finished=!0,this._finish()))},_finish:function(){this._stream.end?this._stream.end():this._events.emit("finish")},flush:function(){if(!this._async.finished){var e=this._stream;e&&e.flush&&e.flush()}}},m.prototype.w=m.prototype.write,m.enableAsyncStackTrace=function(){f=!0},n.exports=m});
$rmod.def("/async-writer@1.3.9/lib/async-writer",function(e,t,n,r,i){var s=e("./AsyncWriter");t.create=function(e,t){var n,r;t&&(n=t.global,r=t.buffer===!0);var i=new s(e,null,null,r);return n&&(i.global=i.attributes=n),i},t.enableAsyncStackTrace=function(){s.INCLUDE_STACK=!0},t.AsyncWriter=s});
$rmod.dep("/$/marko","raptor-util","1.0.10");
$rmod.def("/raptor-util@1.0.10/escapeXml",function(e,t,n,r,i){function l(e){return f[e]}function c(e){return typeof e=="string"?s.test(e)?e.replace(o,l):e:e==null?"":e.toString()}function h(e){return typeof e=="string"?u.test(e)?e.replace(a,l):e:e==null?"":e.toString()}var s=/[&<]/,o=/[&<]/g,u=/[&<>\"\'\n]/,a=/[&<>\"\'\n]/g,f={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;","\n":"&#10;"};n.exports=c,c.attr=h});
$rmod.main("/marko@2.4.3/runtime","marko-runtime");
$rmod.def("/raptor-util@1.0.10/attr",function(e,t,n,r,i){var s=e("./escapeXml").attr;n.exports=function(e,t,n){if(t===!0)t="";else{if(t==null||t===""||t===!1)return"";t='="'+(n===!1?t:s(t))+'"'}return" "+e+t}});
$rmod.def("/raptor-util@1.0.10/attrs",function(e,t,n,r,i){var s=e("./attr");n.exports=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&(t+=s(n,e[n]));return t}});
$rmod.def("/raptor-util@1.0.10/forEach",function(e,t,n,r,i){n.exports=function(e,t,n){e!=null&&(e.forEach?e:[e]).forEach(t,n)}});
$rmod.def("/raptor-util@1.0.10/arrayFromArguments",function(e,t,n,r,i){var s=[].slice;n.exports=function(e,t){return e?t?t<e.length?s.call(e,t):[]:s.call(e):[]}});
$rmod.main("/raptor-logging@1.0.5","lib/index");
$rmod.dep("/$/marko","raptor-logging","1.0.5");
$rmod.def("/raptor-logging@1.0.5/lib/raptor-logging",function(e,t,n,r,i){var s="./raptor-logging-impl";try{s=e.resolve(s)}catch(o){s=null}var u=function(){return!1},a={isTraceEnabled:u,isDebugEnabled:u,isInfoEnabled:u,isWarnEnabled:u,isErrorEnabled:u,isFatalEnabled:u,dump:u,trace:u,debug:u,info:u,warn:u,error:u,fatal:u},f={logger:function(){return a},configure:u,voidLogger:a};n.exports=s?e(s):f});
$rmod.def("/raptor-logging@1.0.5/lib/index",function(e,t,n,r,i){var s=typeof window=="undefined"?global:window;n.exports=s.__RAPTOR_LOGGING||(s.__RAPTOR_LOGGING=e("./raptor-logging"))});
$rmod.def("/marko@2.4.3/runtime/helpers",function(e,t,n,r,i){function m(e){return e==null?!1:Array.isArray(e)?!!e.length:e===""?!1:!0}function g(e){function t(e,n){t.renderer(e,n)}return t.renderer=function(n,r){var i=e.renderer||e.render;if(typeof renderFunc!="function")throw new Error("Invalid tag handler: "+e);t.renderer=i,i(n,r)},t}var s=e("/$/marko/$/raptor-util/escapeXml"),o=s.attr,u=e("./"),a=e("/$/marko/$/raptor-util/extend"),f=e("/$/marko/$/raptor-util/attr"),l=e("/$/marko/$/raptor-util/attrs"),c=e("/$/marko/$/raptor-util/forEach"),h=/\.marko(.xml|.html)?$/,p=e,d=e("/$/marko/$/raptor-util/arrayFromArguments"),v=e("/$/marko/$/raptor-logging").logger(n),y=0;n.exports={s:function(e){return e==null?"":e},fv:function(e,t){if(!e)return;e.forEach||(e=[e]);var n=0,r=e.length,i={getLength:function(){return r},isLast:function(){return n===r-1},isFirst:function(){return n===0},getIndex:function(){return n}};for(;n<r;n++){var s=e[n];t(s||"",i)}},f:c,fl:function(e,t){e!=null&&(Array.isArray(e)||(e=[e]),t(e,0,e.length))},fp:function(e,t){if(!e)return;for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])},e:function(e){return!m(e)},ne:m,x:s,xa:o,nx:function(e){return{toString:function(){return e}}},a:f,as:l,l:function(e){return typeof e=="string"?h.test(e)?u.load(e):p("view-engine").load(e):e.render?e:u.load(e)},r:function(e){var t=e.renderer||e.render||e;return typeof t!="function"?g(e):t},t:function(e,t,n,r,i){n||(n={});var s,o,u,a,f;i&&(s=i.hasOutParam,u=i.parent,o=i.targetProperty,a=i.hasNestedTags,f=i.isRepeated),r&&(a?r(e,n):(n.renderBody=r,n.invokeBody=function(){y||(y=1,v.warn("invokeBody(...) deprecated. Use renderBody(out) instead.",(new Error).stack));if(!s){var t=d(arguments);t.unshift(e),r.apply(this,t)}else r.apply(this,arguments)}));if(t)t(n,e);else if(o)if(f){var l=u[o];l?l.push(n):u[o]=[n]}else u[o]=n},c:function(e,t){var n=e.captureString(t);return{toString:function(){return n}}},i:function(e,t,n){if(!t)return;n.body&&(n.invokeBody=function(){return y||(y=1,v.warn("data.invokeBody() deprecated. Use data.body instead.",(new Error).stack)),n.body});if(typeof t=="string")u.render(t,n,e);else{if(typeof t.render!="function")throw new Error("Invalid template");t.render(n,e)}return this},xt:a}});
$rmod.def("/raptor-util@1.0.10/extend",function(e,t,n,r,i){n.exports=function(t,n){t||(t={});if(n)for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);return t}});
$rmod.def("/raptor-util@1.0.10/inherit",function(e,t,n,r,i){function o(e,t,n){var r=e.prototype,i=function(){};return i.prototype=t.prototype,e.prototype=new i,e.$super=t,n!==!1&&s(e.prototype,r),e.prototype.constructor=e,e}function u(e,t){return o(e,t,!0)}var s=e("./extend");n.exports=u,u._inherit=o});
$rmod.remap("/marko@2.4.3/runtime/loader","loader_browser");
$rmod.def("/marko@2.4.3/runtime/loader_browser",function(e,t,n,r,i){n.exports=function(n){return e(n)}});
$rmod.def("/marko@2.4.3/runtime/marko-runtime",function(e,t,n,r,i){function v(e){this._=null,this.buffer=!e||e.buffer!==!1}function m(e,n){var r=t.cache;if(!e)throw new Error('"templatePath" is required');var i;return typeof e=="string"?(i=r[e],i||(i=r[e]=new v(n),i._=u(e).create(o))):(i=e._,i||(i=e._=new v(n),i._=e.create(o))),i}var s=e("/$/marko/$/async-writer"),o=e("./helpers"),u,a,f=s.AsyncWriter,l=e("/$/marko/$/raptor-util/extend");t.AsyncWriter=f;var c,h="stream",p;try{p=e.resolve(h)}catch(d){}p&&(c=e(p)),v.prototype={renderSync:function(e){var t=new f;return t.sync(),e.$global&&(t.global=l(t.global,e.$global),delete e.$global),this._(e,t),t.end(),t.getOutput()},render:function(e,t){var n=t,r=e||{},i=this._,o=arguments[arguments.length-1],u=!1;if(typeof o=="function"){arguments.length===2&&(n=null);if(!n||!n.isAsyncWriter)n=new f(n),u=!0;n.on("finish",function(){o(null,n.getOutput(),n)}),n.once("error",o)}else if(!n||!n.isAsyncWriter){var a=n,c=this.buffer?{buffer:!0}:null;n=s.create(a,c),u=!0}return r.$global&&(n.global=l(n.global,r.$global),delete r.$global),i(r,n),u&&n.end(),n},stream:function(e){if(!c)throw new Error("Module not found: stream");return new a(this,e,this.buffer)}},c&&(a=function(e,t,n){a.$super.call(this),this._t=e,this._d=t,this._buffer=n,this._rendered=!1},a.prototype={write:function(e){e!=null&&this.push(e)},end:function(){this.push(null)},_read:function(){if(this._rendered)return;this._rendered=!0;var e=this._t,t=this._d,n=s.create(this,this._buffer?{buffer:!0}:null);e.render(t,n),n.end()}},e("/$/marko/$/raptor-util/inherit")(a,c.Readable)),t.load=m,t.render=function(e,t,n){return m(e).render(t,n)},t.stream=function(e,t){return m(e).stream(t)},t.cache={},t.createWriter=function(e){return new f(e)},t.helpers=o,t.Template=v,u=e("./loader")});
$rmod.def("/template.marko",function(e,t,n,r,i){t.create=function(e){var t=e.s,n=e.e,r=e.ne,i=e.x;return function(t,n){n.w("<div>a simple "+i(marko)+" template</div>")}}});
$rmod.def("/main",function(e,t,n,r,i){var s=e("/$/marko").load(e.resolve("./template.marko"));s.render({marko:"marko"},function(e,t){console.log("Template output: "+t)})});
$rmod.run("/main");