"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[91],{916:(e,t,n)=>{n.d(t,{h:()=>a});var r=n(2115),o=n(4577);let i=e=>{let t,n=new Set,r=(e,r)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=r?r:"object"!=typeof o||null===o)?o:Object.assign({},t,o),n.forEach(n=>n(t,e))}},o=()=>t,i={setState:r,getState:o,getInitialState:()=>l,subscribe:e=>(n.add(e),()=>n.delete(e))},l=t=e(r,o,i);return i},{useSyncExternalStoreWithSelector:l}=o,u=(e,t)=>{let n=e?i(e):i,o=(e,o=t)=>(function(e,t=e=>e,n){let o=l(e.subscribe,e.getState,e.getInitialState,t,n);return r.useDebugValue(o),o})(n,e,o);return Object.assign(o,n),o},a=(e,t)=>e?u(e,t):u},4400:(e,t,n)=>{n.d(t,{Af:()=>s,Nz:()=>l,u5:()=>c,y3:()=>d});var r,o,i=n(2115);function l(e,t,n){if(!e)return;if(!0===n(e))return e;let r=t?e.return:e.child;for(;r;){let e=l(r,t,n);if(e)return e;r=t?null:r.sibling}}function u(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}"u">typeof window&&((null==(r=window.document)?void 0:r.createElement)||(null==(o=window.navigator)?void 0:o.product)==="ReactNative")?i.useLayoutEffect:i.useEffect;let a=u(i.createContext(null));class s extends i.Component{render(){return i.createElement(a.Provider,{value:this._reactInternals},this.props.children)}}function c(){let e=i.useContext(a);if(null===e)throw Error("its-fine: useFiber must be called within a <FiberProvider />!");let t=i.useId();return i.useMemo(()=>{for(let n of[e,null==e?void 0:e.alternate]){if(!n)continue;let e=l(n,!1,e=>{let n=e.memoizedState;for(;n;){if(n.memoizedState===t)return!0;n=n.next}});if(e)return e}},[e,t])}let f=Symbol.for("react.context"),v=e=>null!==e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===f;function d(){let e=function(){let e=c(),[t]=i.useState(()=>new Map);t.clear();let n=e;for(;n;){let e=n.type;v(e)&&e!==a&&!t.has(e)&&t.set(e,i.use(u(e))),n=n.return}return t}();return i.useMemo(()=>Array.from(e.keys()).reduce((t,n)=>r=>i.createElement(t,null,i.createElement(n.Provider,{...r,value:e.get(n)})),e=>i.createElement(s,{...e})),[e])}},4577:(e,t,n)=>{e.exports=n(9617)},5538:(e,t,n)=>{var r=n(2115),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,l=r.useEffect,u=r.useLayoutEffect,a=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var c="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,c=r[1];return u(function(){o.value=n,o.getSnapshot=t,s(o)&&c({inst:o})},[e,n,t]),l(function(){return s(o)&&c({inst:o}),e(function(){s(o)&&c({inst:o})})},[e]),a(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},7930:(e,t)=>{function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,o=e[r];if(0<i(o,t))e[r]=t,e[n]=o,n=r;else break}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,o=e.length,l=o>>>1;r<l;){var u=2*(r+1)-1,a=e[u],s=u+1,c=e[s];if(0>i(a,n))s<o&&0>i(c,a)?(e[r]=c,e[s]=n,r=s):(e[r]=a,e[u]=n,r=u);else if(s<o&&0>i(c,n))e[r]=c,e[s]=n,r=s;else break}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"==typeof performance&&"function"==typeof performance.now){var l,u=performance;t.unstable_now=function(){return u.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var c=[],f=[],v=1,d=null,m=3,p=!1,y=!1,h=!1,x=!1,b="function"==typeof setTimeout?setTimeout:null,w="function"==typeof clearTimeout?clearTimeout:null,g="u">typeof setImmediate?setImmediate:null;function E(e){for(var t=r(f);null!==t;){if(null===t.callback)o(f);else if(t.startTime<=e)o(f),t.sortIndex=t.expirationTime,n(c,t);else break;t=r(f)}}function z(e){if(h=!1,E(e),!y)if(null!==r(c))y=!0,C||(C=!0,l());else{var t=r(f);null!==t&&O(z,t.startTime-e)}}var C=!1,_=-1,S=5,j=-1;function k(){return!!x||!(t.unstable_now()-j<S)}function T(){if(x=!1,C){var e=t.unstable_now();j=e;var n=!0;try{e:{y=!1,h&&(h=!1,w(_),_=-1),p=!0;var i=m;try{t:{for(E(e),d=r(c);null!==d&&!(d.expirationTime>e&&k());){var u=d.callback;if("function"==typeof u){d.callback=null,m=d.priorityLevel;var a=u(d.expirationTime<=e);if(e=t.unstable_now(),"function"==typeof a){d.callback=a,E(e),n=!0;break t}d===r(c)&&o(c),E(e)}else o(c);d=r(c)}if(null!==d)n=!0;else{var s=r(f);null!==s&&O(z,s.startTime-e),n=!1}}break e}finally{d=null,m=i,p=!1}}}finally{n?l():C=!1}}}if("function"==typeof g)l=function(){g(T)};else if("u">typeof MessageChannel){var M=new MessageChannel,I=M.port2;M.port1.onmessage=T,l=function(){I.postMessage(null)}}else l=function(){b(T,0)};function O(e,n){_=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_next=function(e){switch(m){case 1:case 2:case 3:var t=3;break;default:t=m}var n=m;m=t;try{return e()}finally{m=n}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=m;m=e;try{return t()}finally{m=n}},t.unstable_scheduleCallback=function(e,o,i){var u=t.unstable_now();switch(i="object"==typeof i&&null!==i&&"number"==typeof(i=i.delay)&&0<i?u+i:u,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=0x3fffffff;break;case 4:a=1e4;break;default:a=5e3}return a=i+a,e={id:v++,callback:o,priorityLevel:e,startTime:i,expirationTime:a,sortIndex:-1},i>u?(e.sortIndex=i,n(f,e),null===r(c)&&e===r(f)&&(h?(w(_),_=-1):h=!0,O(z,i-u))):(e.sortIndex=a,n(c,e),y||p||(y=!0,C||(C=!0,l()))),e},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(e){var t=m;return function(){var n=m;m=t;try{return e.apply(this,arguments)}finally{m=n}}}},8039:(e,t,n)=>{e.exports=n(5538)},8745:(e,t,n)=>{e.exports=n(7930)},9326:(e,t,n)=>{n.d(t,{DY:()=>l,IU:()=>a,uv:()=>u});let r=[];function o(e,t,n=(e,t)=>e===t){if(e===t)return!0;if(!e||!t)return!1;let r=e.length;if(t.length!==r)return!1;for(let o=0;o<r;o++)if(!n(e[o],t[o]))return!1;return!0}function i(e,t=null,n=!1,l={}){for(let i of(null===t&&(t=[e]),r))if(o(t,i.keys,i.equal)){if(n)return;if(Object.prototype.hasOwnProperty.call(i,"error"))throw i.error;if(Object.prototype.hasOwnProperty.call(i,"response"))return l.lifespan&&l.lifespan>0&&(i.timeout&&clearTimeout(i.timeout),i.timeout=setTimeout(i.remove,l.lifespan)),i.response;if(!n)throw i.promise}let u={keys:t,equal:l.equal,remove:()=>{let e=r.indexOf(u);-1!==e&&r.splice(e,1)},promise:("object"==typeof e&&"function"==typeof e.then?e:e(...t)).then(e=>{u.response=e,l.lifespan&&l.lifespan>0&&(u.timeout=setTimeout(u.remove,l.lifespan))}).catch(e=>u.error=e)};if(r.push(u),!n)throw u.promise}let l=(e,t,n)=>i(e,t,!1,n),u=(e,t,n)=>void i(e,t,!0,n),a=e=>{if(void 0===e||0===e.length)r.splice(0,r.length);else{let t=r.find(t=>o(e,t.keys,t.equal));t&&t.remove()}}},9367:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(5155),o=n(2115),i=n(2668),l=n(9625);function u(e,t){let n;return(...r)=>{window.clearTimeout(n),n=window.setTimeout(()=>e(...r),t)}}let a=["x","y","top","bottom","left","right","width","height"];var s=n(4400);function c({ref:e,children:t,fallback:n,resize:s,style:f,gl:v,events:d=i.f,eventSource:m,eventPrefix:p,shadows:y,linear:h,flat:x,legacy:b,orthographic:w,frameloop:g,dpr:E,performance:z,raycaster:C,camera:_,scene:S,onPointerMissed:j,onCreated:k,...T}){o.useMemo(()=>(0,i.e)(l),[]);let M=(0,i.u)(),[I,O]=function({debounce:e,scroll:t,polyfill:n,offsetSize:r}={debounce:0,scroll:!1,offsetSize:!1}){var i,l,s;let c=n||("u"<typeof window?class{}:window.ResizeObserver);if(!c)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[f,v]=(0,o.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),d=(0,o.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:f,orientationHandler:null}),m=e?"number"==typeof e?e:e.scroll:null,p=e?"number"==typeof e?e:e.resize:null,y=(0,o.useRef)(!1);(0,o.useEffect)(()=>(y.current=!0,()=>void(y.current=!1)));let[h,x,b]=(0,o.useMemo)(()=>{let e=()=>{let e,t;if(!d.current.element)return;let{left:n,top:o,width:i,height:l,bottom:u,right:s,x:c,y:f}=d.current.element.getBoundingClientRect(),m={left:n,top:o,width:i,height:l,bottom:u,right:s,x:c,y:f};d.current.element instanceof HTMLElement&&r&&(m.height=d.current.element.offsetHeight,m.width=d.current.element.offsetWidth),Object.freeze(m),y.current&&(e=d.current.lastBounds,t=m,!a.every(n=>e[n]===t[n]))&&v(d.current.lastBounds=m)};return[e,p?u(e,p):e,m?u(e,m):e]},[v,r,m,p]);function w(){d.current.scrollContainers&&(d.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",b,!0)),d.current.scrollContainers=null),d.current.resizeObserver&&(d.current.resizeObserver.disconnect(),d.current.resizeObserver=null),d.current.orientationHandler&&("orientation"in screen&&"removeEventListener"in screen.orientation?screen.orientation.removeEventListener("change",d.current.orientationHandler):"onorientationchange"in window&&window.removeEventListener("orientationchange",d.current.orientationHandler))}function g(){d.current.element&&(d.current.resizeObserver=new c(b),d.current.resizeObserver.observe(d.current.element),t&&d.current.scrollContainers&&d.current.scrollContainers.forEach(e=>e.addEventListener("scroll",b,{capture:!0,passive:!0})),d.current.orientationHandler=()=>{b()},"orientation"in screen&&"addEventListener"in screen.orientation?screen.orientation.addEventListener("change",d.current.orientationHandler):"onorientationchange"in window&&window.addEventListener("orientationchange",d.current.orientationHandler))}return i=b,l=!!t,(0,o.useEffect)(()=>{if(l)return window.addEventListener("scroll",i,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",i,!0)},[i,l]),s=x,(0,o.useEffect)(()=>(window.addEventListener("resize",s),()=>void window.removeEventListener("resize",s)),[s]),(0,o.useEffect)(()=>{w(),g()},[t,b,x]),(0,o.useEffect)(()=>w,[]),[e=>{e&&e!==d.current.element&&(w(),d.current.element=e,d.current.scrollContainers=function e(t){let n=[];if(!t||t===document.body)return n;let{overflow:r,overflowX:o,overflowY:i}=window.getComputedStyle(t);return[r,o,i].some(e=>"auto"===e||"scroll"===e)&&n.push(t),[...n,...e(t.parentElement)]}(e),g())},f,h]}({scroll:!0,debounce:{scroll:50,resize:0},...s}),P=o.useRef(null),L=o.useRef(null);o.useImperativeHandle(e,()=>P.current);let R=(0,i.a)(j),[F,D]=o.useState(!1),[q,H]=o.useState(!1);if(F)throw F;if(q)throw q;let B=o.useRef(null);(0,i.b)(()=>{let e=P.current;O.width>0&&O.height>0&&e&&(B.current||(B.current=(0,i.c)(e)),async function(){await B.current.configure({gl:v,scene:S,events:d,shadows:y,linear:h,flat:x,legacy:b,orthographic:w,frameloop:g,dpr:E,performance:z,raycaster:C,camera:_,size:O,onPointerMissed:(...e)=>null==R.current?void 0:R.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(m?(0,i.i)(m)?m.current:m:L.current),p&&e.setEvents({compute:(e,t)=>{let n=e[p+"X"],r=e[p+"Y"];t.pointer.set(n/t.size.width*2-1,-(2*(r/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==k||k(e)}}),B.current.render((0,r.jsx)(M,{children:(0,r.jsx)(i.E,{set:H,children:(0,r.jsx)(o.Suspense,{fallback:(0,r.jsx)(i.B,{set:D}),children:null!=t?t:null})})}))}())}),o.useEffect(()=>{let e=P.current;if(e)return()=>(0,i.d)(e)},[]);let Q=m?"none":"auto";return(0,r.jsx)("div",{ref:L,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:Q,...f},...T,children:(0,r.jsx)("div",{ref:I,style:{width:"100%",height:"100%"},children:(0,r.jsx)("canvas",{ref:P,style:{display:"block"},children:n})})})}function f(e){return(0,r.jsx)(s.Af,{children:(0,r.jsx)(c,{...e})})}n(8745);var v=n(5269);let d={uniforms:{uTime:{value:0},uMouse:{value:new v.I9Y(0,0)},uColor1:{value:new v.Q1f("#08081a")},uColor2:{value:new v.Q1f("#8b5cf6")},uColor3:{value:new v.Q1f("#3b82f6")},uColor4:{value:new v.Q1f("#6366f1")}},vertexShader:`
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;
    varying float vElevation;

    // Simplex 3D noise algorithm
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0))
              + i.y + vec4(0.0, i1.y, i2.y, 1.0))
              + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }

    void main() {
      vUv = uv;
      vec3 pos = position;
      float noiseFreq = 1.2;
      float noiseAmp = 0.45;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime * 0.15, pos.y * noiseFreq + uTime * 0.1, uTime * 0.1);
      
      // Interactive mouse offset
      float distToMouse = distance(uv, uMouse);
      float mouseFactor = smoothstep(0.5, 0.0, distToMouse) * 0.3;

      float elevation = snoise(noisePos) * noiseAmp + mouseFactor;
      pos.z += elevation;
      vElevation = elevation;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,fragmentShader:`
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      float mixFactor1 = smoothstep(-0.3, 0.3, vElevation);
      float mixFactor2 = smoothstep(0.0, 0.5, vUv.x + vElevation * 0.2);

      vec3 colorA = mix(uColor1, uColor2, mixFactor1);
      vec3 colorB = mix(uColor3, uColor4, mixFactor2);
      vec3 finalColor = mix(colorA, colorB, vUv.y);

      gl_FragColor = vec4(finalColor, 0.85);
    }
  `};function m(){let e=(0,o.useRef)(),t=(0,o.useRef)(),n=(0,o.useMemo)(()=>({uTime:{value:0},uMouse:{value:new v.I9Y(.5,.5)},uColor1:{value:new v.Q1f("#08081a")},uColor2:{value:new v.Q1f("#8b5cf6")},uColor3:{value:new v.Q1f("#3b82f6")},uColor4:{value:new v.Q1f("#5b21b6")}}),[]);return(0,i.D)((e,n)=>{t.current&&(t.current.uniforms.uTime.value+=.6*n,t.current.uniforms.uMouse.value.lerp(new v.I9Y((e.pointer.x+1)/2,(e.pointer.y+1)/2),.05))}),(0,r.jsxs)("mesh",{ref:e,rotation:[-Math.PI/4,0,0],position:[0,0,-2],children:[(0,r.jsx)("planeGeometry",{args:[14,10,64,64]}),(0,r.jsx)("shaderMaterial",{ref:t,args:[d],uniforms:n,transparent:!0,depthWrite:!1})]})}function p(){return(0,r.jsx)("div",{className:"absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-75",children:(0,r.jsx)(f,{camera:{position:[0,0,5],fov:45},dpr:[1,2],gl:{antialias:!0,alpha:!0},children:(0,r.jsx)(m,{})})})}},9617:(e,t,n)=>{var r=n(2115),o=n(8039),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=o.useSyncExternalStore,u=r.useRef,a=r.useEffect,s=r.useMemo,c=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var f=u(null);if(null===f.current){var v={hasValue:!1,value:null};f.current=v}else v=f.current;var d=l(e,(f=s(function(){function e(e){if(!a){if(a=!0,l=e,e=r(e),void 0!==o&&v.hasValue){var t=v.value;if(o(t,e))return u=t}return u=e}if(t=u,i(l,e))return t;var n=r(e);return void 0!==o&&o(t,n)?(l=e,t):(l=e,u=n)}var l,u,a=!1,s=void 0===n?null:n;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,n,r,o]))[0],f[1]);return a(function(){v.hasValue=!0,v.value=d},[d]),c(d),d}}}]);