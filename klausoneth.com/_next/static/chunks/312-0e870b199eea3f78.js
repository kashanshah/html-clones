"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[312],{95739:function(t,e,i){i.d(e,{SpeedInsights:function(){return m}});var s=i(2265),r=i(71169),o=()=>{window.si||(window.si=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];(window.siq=window.siq||[]).push(e)})};function n(){return false}function l(t){return new RegExp("/".concat(t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"(?=[/?#]|$)"))}var h="https://va.vercel-scripts.com/v1/speed-insights",a="".concat(h,"/script.js"),c="".concat(h,"/script.debug.js");function u(t){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(e.current)t.route&&e.current(t.route);else{let i=function(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!("undefined"!=typeof window)||null===e.route)return null;o();let i=!!e.dsn,s=e.scriptSrc||(i?a:"/_vercel/speed-insights/script.js");if(document.head.querySelector('script[src*="'.concat(s,'"]')))return null;e.beforeSend&&(null==(t=window.si)||t.call(window,"beforeSend",e.beforeSend));let r=document.createElement("script");return r.src=s,r.defer=!0,r.dataset.sdkn="@vercel/speed-insights"+(e.framework?"/".concat(e.framework):""),r.dataset.sdkv="1.0.12",e.sampleRate&&(r.dataset.sampleRate=e.sampleRate.toString()),e.route&&(r.dataset.route=e.route),e.endpoint&&(r.dataset.endpoint=e.endpoint),e.dsn&&(r.dataset.dsn=e.dsn),r.onerror=()=>{console.log("[Vercel Speed Insights] Failed to load script from ".concat(s,". Please check if any content blockers are enabled and try again."))},document.head.appendChild(r),{setRoute:t=>{r.dataset.route=null!=t?t:void 0}}}({framework:t.framework||"react",...t});i&&(e.current=i.setRoute)}},[t.route]),null}var d=()=>{let t=(0,r.useParams)(),e=(0,r.useSearchParams)()||new URLSearchParams,i=(0,r.usePathname)(),s={...Object.fromEntries(e.entries()),...t||{}};return t?function(t,e){if(!t||!e)return t;let i=t;try{let t=Object.entries(e);for(let[e,s]of t)if(!Array.isArray(s)){let t=l(s);t.test(i)&&(i=i.replace(t,"/[".concat(e,"]")))}for(let[e,s]of t)if(Array.isArray(s)){let t=l(s.join("/"));t.test(i)&&(i=i.replace(t,"/[...".concat(e,"]")))}return i}catch(e){return t}}(i,s):null};function p(t){let e=d();return s.createElement(u,{route:e,...t,framework:"next"})}function m(t){return s.createElement(s.Suspense,{fallback:null},s.createElement(p,{...t}))}},67359:function(t,e,i){i.d(e,{pi:function(){return f},LZ:function(){return S}});var s="undefined"!=typeof window&&new class{constructor(){this.raf=t=>{requestAnimationFrame(this.raf);let e=t-this.now;this.now=t;for(let i=0;i<this.callbacks.length;i++)this.callbacks[i].callback(t,e)},this.callbacks=[],this.now=performance.now(),requestAnimationFrame(this.raf)}add(t,e=0){return this.callbacks.push({callback:t,priority:e}),this.callbacks.sort((t,e)=>t.priority-e.priority),()=>this.remove(t)}remove(t){this.callbacks=this.callbacks.filter(({callback:e})=>t!==e)}};function r(t,e,i){return Math.max(t,Math.min(e,i))}var o=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(t){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;let i=r(0,this.currentTime/this.duration,1),s=(e=i>=1)?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else if(this.lerp){var i,s,o;this.value=(i=this.value,s=this.to,(1-(o=1-Math.exp(-(60*this.lerp)*t)))*i+o*s),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)}else this.value=this.to,e=!0;e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i,duration:s,easing:r,onStart:o,onUpdate:n}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=r,this.currentTime=0,this.isRunning=!0,o?.(),this.onUpdate=n}},n=class{constructor(t,e,{autoResize:i=!0,debounce:s=250}={}){if(this.wrapper=t,this.content=e,i){var r;let t;this.debouncedResize=(r=this.resize,function(...e){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,e)},s)}),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)}this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},l=class{events={};emit(t,...e){let i=this.events[t]||[];for(let t=0,s=i.length;t<s;t++)i[t]?.(...e)}on(t,e){return this.events[t]?.push(e)||(this.events[t]=[e]),()=>{this.events[t]=this.events[t]?.filter(t=>e!==t)}}off(t,e){this.events[t]=this.events[t]?.filter(t=>e!==t)}destroy(){this.events={}}},h=100/6,a={passive:!1},c=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,a),this.element.addEventListener("touchstart",this.onTouchStart,a),this.element.addEventListener("touchmove",this.onTouchMove,a),this.element.addEventListener("touchend",this.onTouchEnd,a)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new l;on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,a),this.element.removeEventListener("touchstart",this.onTouchStart,a),this.element.removeEventListener("touchmove",this.onTouchMove,a),this.element.removeEventListener("touchend",this.onTouchEnd,a)}onTouchStart=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})};onTouchMove=t=>{let{clientX:e,clientY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:r},this.emitter.emit("scroll",{deltaX:s,deltaY:r,event:t})};onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})};onWheel=t=>{let{deltaX:e,deltaY:i,deltaMode:s}=t,r=1===s?h:2===s?this.window.width:1,o=1===s?h:2===s?this.window.height:1;e*=r,i*=o,e*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:t})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},u=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new o;emitter=new l;dimensions;virtualScroll;constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:i=t,smoothWheel:s=!0,syncTouch:r=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:l=35,duration:h,easing:a=t=>Math.min(1,1.001-Math.pow(2,-10*t)),lerp:u=.1,infinite:d=!1,orientation:p="vertical",gestureOrientation:m="vertical",touchMultiplier:v=1,wheelMultiplier:f=1,autoResize:w=!0,prevent:S,virtualScroll:g,overscroll:y=!0,__experimental__naiveDimensions:E=!1}={}){window.lenisVersion="1.1.14",t&&t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,eventsTarget:i,smoothWheel:s,syncTouch:r,syncTouchLerp:o,touchInertiaMultiplier:l,duration:h,easing:a,lerp:u,infinite:d,gestureOrientation:m,orientation:p,touchMultiplier:v,wheelMultiplier:f,autoResize:w,prevent:S,virtualScroll:g,overscroll:y,__experimental__naiveDimensions:E},this.dimensions=new n(t,e,{autoResize:w}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new c(i,{touchMultiplier:v,wheelMultiplier:f}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName()}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}onPointerDown=t=>{1===t.button&&this.reset()};onVirtualScroll=t=>{if("function"==typeof this.options.virtualScroll&&!1===this.options.virtualScroll(t))return;let{deltaX:e,deltaY:i,event:s}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:s}),s.ctrlKey||s.lenisStopPropagation)return;let r=s.type.includes("touch"),o=s.type.includes("wheel");if(this.isTouching="touchstart"===s.type||"touchmove"===s.type,this.options.syncTouch&&r&&"touchstart"===s.type&&!this.isStopped&&!this.isLocked){this.reset();return}let n=0===e&&0===i,l="vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e;if(n||l)return;let h=s.composedPath();h=h.slice(0,h.indexOf(this.rootElement));let a=this.options.prevent;if(h.find(t=>t instanceof HTMLElement&&("function"==typeof a&&a?.(t)||t.hasAttribute?.("data-lenis-prevent")||r&&t.hasAttribute?.("data-lenis-prevent-touch")||o&&t.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){s.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&o)){this.isScrolling="native",this.animate.stop(),s.lenisStopPropagation=!0;return}let c=i;"both"===this.options.gestureOrientation?c=Math.abs(i)>Math.abs(e)?i:e:"horizontal"===this.options.gestureOrientation&&(c=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||0===this.animatedScroll&&i>0||this.animatedScroll===this.limit&&i<0))&&(s.lenisStopPropagation=!0),s.preventDefault();let u=r&&this.options.syncTouch,d=r&&"touchend"===s.type&&Math.abs(c)>5;d&&(c=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+c,{programmatic:!1,...u?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(null!==this._resetVelocityTimeout&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(!1===this.isScrolling||"native"===this.isScrolling){let t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isScrolling="native",this.emit(),0!==this.velocity&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){let e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:s=!1,duration:o=this.options.duration,easing:n=this.options.easing,lerp:l=this.options.lerp,onStart:h,onComplete:a,force:c=!1,programmatic:u=!0,userData:d}={}){if(!this.isStopped&&!this.isLocked||c){if("string"==typeof t&&["top","left","start"].includes(t))t=0;else if("string"==typeof t&&["bottom","right","end"].includes(t))t=this.limit;else{let i;if("string"==typeof t?i=document.querySelector(t):t instanceof HTMLElement&&t?.nodeType&&(i=t),i){if(this.options.wrapper!==window){let t=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?t.left:t.top}let s=i.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof t){if(t+=e,t=Math.round(t),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):t=r(0,t,this.limit),t===this.targetScroll){h?.(this),a?.(this);return}if(this.userData=d??{},i){this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),a?.(this),this.userData={};return}u||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:o,easing:n,lerp:l,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",h?.(this)},onUpdate:(t,e)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),u&&(this.targetScroll=t),e||this.emit(),e&&(this.reset(),this.emit(),a?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){var t;return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll}get progress(){return 0===this.limit?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return"smooth"===this.isScrolling}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),"smooth"===this.isScrolling&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}},d=i(2265),p=i(57437),m=(0,d.createContext)(null),v=new class{set(t){for(let e of(this.state=t,this.listeners))e(this.state)}subscribe(t){return this.listeners=[...this.listeners,t],()=>{this.listeners=this.listeners.filter(e=>e!==t)}}get(){return this.state}constructor(t){this.listeners=[],this.state=t}}(null),f=(0,d.forwardRef)((t,e)=>{let{children:i,root:r=!1,options:o={},autoRaf:n=!0,rafPriority:l=0,className:h,props:a}=t,c=(0,d.useRef)(null),f=(0,d.useRef)(null),[w,S]=(0,d.useState)(void 0);(0,d.useImperativeHandle)(e,()=>({wrapper:c.current,content:f.current,lenis:w}),[w]),(0,d.useEffect)(()=>{let t=new u({...o,...!r&&{wrapper:c.current,content:f.current}});return S(t),()=>{t.destroy(),S(void 0)}},[r,JSON.stringify(o)]),(0,d.useEffect)(()=>{if(w&&n)return s.add(t=>w.raf(t),l)},[w,n,l]);let g=(0,d.useRef)([]),y=(0,d.useCallback)((t,e)=>{g.current.push({callback:t,priority:e}),g.current.sort((t,e)=>t.priority-e.priority)},[]),E=(0,d.useCallback)(t=>{g.current=g.current.filter(e=>e.callback!==t)},[]);return(0,d.useEffect)(()=>{if(r&&w)return v.set({lenis:w,addCallback:y,removeCallback:E}),()=>v.set(null)},[r,w,y,E]),(0,d.useEffect)(()=>{if(!w)return;let t=t=>{for(let i=0;i<g.current.length;i++){var e;null===(e=g.current[i])||void 0===e||e.callback(t)}};return w.on("scroll",t),()=>{w.off("scroll",t)}},[w]),(0,p.jsx)(m.Provider,{value:{lenis:w,addCallback:y,removeCallback:E},children:r?i:(0,p.jsx)("div",{ref:c,className:h,...a,children:(0,p.jsx)("div",{ref:f,children:i})})})}),w={};function S(t){var e;let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=(0,d.useContext)(m),o=function(t){let[e,i]=(0,d.useState)(t.get());return(0,d.useEffect)(()=>t.subscribe(t=>i(t)),[t]),e}(v),{lenis:n,addCallback:l,removeCallback:h}=null!==(e=null!=r?r:o)&&void 0!==e?e:w;return(0,d.useEffect)(()=>{if(t&&l&&h&&n)return l(t,s),t(n),()=>{h(t)}},[n,l,h,s,...i]),n}}}]);