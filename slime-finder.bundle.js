webpackJsonp([0],{1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){this.x=t,this.z=e}return t.prototype.offset=function(e,n){return new t(this.x+e,this.z+n)},t.prototype.round=function(){return new t(Math.round(this.x),Math.round(this.z))},t.prototype.distance=function(t){return Math.sqrt(Math.pow(t.x-this.x,2)+Math.pow(t.z-this.z,2))},t}();e.default=a},10:function(t,e,n){var a=n(20);"string"==typeof a&&(a=[[t.i,a,""]]);n(4)(a,{});a.locals&&(t.exports=a.locals)},11:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=function(){function t(t,e){this.centerChanges=t.changes,this.center=t.prop,this.scaleChanges=new a.Bus,this.scale=this.scaleChanges.scan(e,function(t,e){return e(t)}).skipDuplicates()}return t}();e.default=i},12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(47),i=n(3),r=function(){function t(t){this.changes=new i.Bus,this.prop=this.changes.scan(t,function(t,e){return e(t)}).skipDuplicates(a.isEqual)}return t}();e.default=r},13:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(44);var a=n(0),i=n(3),r=n(23),o=n(8),s=n(1),u=function(){function t(t){var e=this;this.center=t.center,this.scale=t.scale,this.canvas=a(".atlas-container canvas.atlas").get(0),this.scaleSlider=a(".atlas-container input.atlas-scale").get(0);var n=function(){return{w:a(window).width(),h:a(window).height()}},o=a(window).asEventStream("resize").throttle(50).map(n).merge(i.once(n()));i.combineAsArray(this.center,this.scale,o).onValues(function(t,n,i){e.canvas.width=i.w,e.canvas.height=Math.floor(.5*i.h),a(e.scaleSlider).height(Math.floor(.3*a(e.canvas).height())),e.redraw(t,n)}),this.scale.onValue(function(t){e.scaleSlider.value=String(t)});var s=a(this.scaleSlider).asEventStream("input").map(function(t){return function(){return Number(e.scaleSlider.value)}});t.scaleChanges.plug(s);var u=(new r.Manager(this.canvas,{domEvents:!0,recognizers:[[r.Pan],[r.Pinch]]}),a(this.canvas).asEventStream("wheel").doAction(".preventDefault").debounceImmediate(10).map(function(t){var n=Number(e.scaleSlider.min),a=Number(e.scaleSlider.max),i=Number(e.scaleSlider.step);return function(e){return t.originalEvent.deltaY>0?Math.min(e+i,a):Math.max(e-i,n)}}));t.scaleChanges.plug(u);var c=a(this.canvas).asEventStream("pinchstart").doAction(".preventDefault"),l=a(this.canvas).asEventStream("pinch").doAction(".preventDefault").debounceImmediate(50),h=a(this.canvas).asEventStream("pinchend pinchcancel").doAction(".preventDefault"),f=c.merge(l).merge(h),d=i.combineAsArray(this.scale,f).withStateMachine(null,function(t,n){if(n.hasValue()){var a=n.value(),r=a[0],o=a[1],s=o.originalEvent,u=s.gesture;switch(s.type){case"pinchstart":return[r,[]];case"pinch":if(t){var c=Number(e.scaleSlider.min),l=Number(e.scaleSlider.max),h=Number(e.scaleSlider.step),f=u.scale,d=t*f,p=Math.round(d*(1/h))/(1/h),v=Math.min(Math.max(p,c),l);return[t,[new i.Next(v)]]}}}return[null,[]]}).map(function(t){return function(){return t}});t.scaleChanges.plug(d);var p=a(this.canvas).asEventStream("panstart").doAction(".preventDefault"),v=a(this.canvas).asEventStream("pan").doAction(".preventDefault").debounceImmediate(10),g=a(this.canvas).asEventStream("panend pancancel").doAction(".preventDefault"),m=p.merge(v).merge(g),w=i.combineAsArray(this.scale,this.center,m).withStateMachine(null,function(t,n){if(n.hasValue()){var r=n.value(),o=r[0],s=r[1],u=r[2],c=u.originalEvent,l=c.gesture;switch(c.type){case"panstart":return[s,[]];case"pan":if(t){var h=e.canvas.width/a(e.canvas).width(),f=e.canvas.height/a(e.canvas).height(),d=-l.deltaX*h/o,p=-l.deltaY*f/o,v=t.offset(d,p).round();return[t,[new i.Next(v)]]}}}return[null,[]]}).map(function(t){return function(){return t}});t.centerChanges.plug(w)}return t.prototype.redraw=function(t,e){var n=this.canvas.getContext("2d");if(n){n.clearRect(0,0,this.canvas.width,this.canvas.height),n.fillStyle="rgba(0, 0, 0, 0)",n.fill();var a=new s.default(t.x-this.canvas.width/2/e,t.z-this.canvas.height/2/e),i=new s.default(a.x+this.canvas.width/e,a.z+this.canvas.height/e),r=function(t){return t.x>=a.x&&t.z>=a.z&&t.x<i.x&&t.z<i.z},u=function(t){return r(t.origin)||r(t.origin.offset(16,0))||r(t.origin.offset(0,16))||r(t.origin.offset(16,16))},c=function(t){return new s.default((t.x-a.x)*e,(t.z-a.z)*e)};n.strokeStyle="rgba(0, 0, 0, 0.8)",n.fillStyle="rgba(127, 255, 0, 0.4)",n.lineWidth=1;for(var l=new o.default(a);u(l);l=l.offset(0,1))for(var h=l;u(h);h=h.offset(1,0)){var f=c(h.origin);n.strokeRect(Math.floor(f.x),Math.floor(f.z),16*e,16*e),h.isSlimy&&n.fillRect(Math.floor(f.x),Math.floor(f.z),16*e,16*e)}n.strokeStyle="rgba(255, 0, 0, 0.4)",n.lineWidth=3,n.beginPath(),n.arc(Math.floor(c(t).x),Math.floor(c(t).z),4,0,2*Math.PI),n.stroke()}},t}();e.default=u},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),i=n(1),r=n(8),o=function(){function t(t){this.changes=a("#position-x, #position-z").asEventStream("input").map(function(){return function(){return new i.default(Number(a("#position-x").val()),Number(a("#position-z").val()))}}),t.changes.plug(this.changes),t.prop.onValue(function(t){a("#position-x").val(t.x),a("#position-z").val(t.z)}),this.chunk=t.prop.map(function(t){return new r.default(t)}),this.chunk.onValue(function(t){a("#chunk-from-x").text(t.origin.x),a("#chunk-from-z").text(t.origin.z),a("#chunk-to-x").text(t.origin.x+15),a("#chunk-to-z").text(t.origin.z+15),t.isSlimy?a("#chunk-is-slimy").fadeIn(50):a("#chunk-is-slimy").fadeOut(50)})}return t}();e.default=o},20:function(t,e,n){e=t.exports=n(2)(void 0),e.push([t.i,"h1{padding:0 0 0 1em}input[type=range][orient=vertical]{writing-mode:bt-lr;-webkit-appearance:slider-vertical}",""])},21:function(t,e,n){e=t.exports=n(2)(void 0),e.push([t.i,".atlas-container{position:relative}.atlas-container .atlas-scale-container{position:absolute;padding:0 5px;margin:1em}.atlas-container .atlas-scale-container input.atlas-scale{width:8px;height:125px;max-height:80%;margin:.2em auto;-webkit-transform:rotateX(180deg);-moz-transform:rotateX(180deg);-ms-transform:rotateX(180deg);-o-transform:rotateX(180deg);transform:rotateX(180deg)}.atlas-container canvas.atlas{width:100%;height:auto;cursor:move}",""])},44:function(t,e,n){var a=n(21);"string"==typeof a&&(a=[[t.i,a,""]]);n(4)(a,{});a.locals&&(t.exports=a.locals)},45:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(9),n(10);var a=n(11),i=n(12),r=n(13),o=n(14),s=n(1);n(0)(function(){var t=function(){var t=window.location.hash.match(/^#([-0-9.]+),([-0-9.]+)$/);return t?new s.default(Number(t[1]),Number(t[2])):new s.default(0,0)}(),e=function(){var t=localStorage.getItem("atlas.scale");return null==t?4:Number(t)}(),n=new i.default(t),u=(new o.default(n),new a.default(n,e));new r.default(u),n.prop.onValue(function(t){window.history.replaceState("","","#"+t.x+","+t.z)}),u.scale.onValue(function(t){localStorage.setItem("atlas.scale",String(t))})})},46:function(t,e,n){"use strict";function a(t,e){var n=65535&t,a=t>>>16,i=65535&e,r=e>>>16,o=n*i,s=o>>>16;return s+=a*i,s&=65535,((65535&(s+=n*r))<<16|65535&o)>>>0}function i(t,e){var n=65535&t,a=t>>>16,i=65535&e,r=e>>>16,o=n*i,s=o>>>16;s+=n*r;var u=s>>>16;s&=65535,s+=a*i,u+=s>>>16;var c=u>>>16;return u&=65535,u+=a*r,((65535&(c+=u>>>16))<<16|65535&u)>>>0}Object.defineProperty(e,"__esModule",{value:!0}),e.umul32_lo=a,e.umul32_hi=i},8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),i=n(39),r=n(1),o=n(46),s=a(5e3),u=function(){function t(t){var e=new r.default(16*Math.floor(t.x/16),16*Math.floor(t.z/16)),n=e.x+","+e.z,a=s.get(n);a?this._chunk=a:(this._chunk=new c(e),s.set(n,this._chunk))}return Object.defineProperty(t.prototype,"origin",{get:function(){return this._chunk.origin},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isSlimy",{get:function(){return this._chunk.isSlimy},enumerable:!0,configurable:!0}),t.prototype.offset=function(e,n){return new t(new r.default(this.origin.x+16*e,this.origin.z+16*n))},t}();e.default=u;var c=function(){function t(t){this.origin=t,this._isSlimy=null}return Object.defineProperty(t.prototype,"isSlimy",{get:function(){/*! MCPE slime-chunk checker; reverse engineered by @protolambda and @jocopa3
             * Ported by PHO from Java code:
             *   https://gist.github.com/protolambda/00b85bf34a75fd8176342b1ad28bfccc
             */
if(null==this._isSlimy){var t=this.origin.x/16>>>0,e=this.origin.z/16>>>0,n=o.umul32_lo(t,522133279)^e,a=new i(n),r=a.random_int(),s=o.umul32_hi(r,3435973837),u=s>>>3,c=(2*(u+4*u&4294967295)&4294967295)>>>0;this._isSlimy=r==c}return this._isSlimy},enumerable:!0,configurable:!0}),t}()}},[45]);
//# sourceMappingURL=slime-finder.bundle.js.map