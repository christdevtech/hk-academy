"use strict";exports.id=9859,exports.ids=[9859],exports.modules={9406:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraftMode",{enumerable:!0,get:function(){return n}});let o=r(5020);class n{get isEnabled(){return this._provider.isEnabled}enable(){if(!(0,o.staticGenerationBailout)("draftMode().enable()"))return this._provider.enable()}disable(){if(!(0,o.staticGenerationBailout)("draftMode().disable()"))return this._provider.disable()}constructor(e){this._provider=e}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8561:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{headers:function(){return u},cookies:function(){return c},draftMode:function(){return f}});let o=r(9879),n=r(1749),s=r(3497),a=r(1877),i=r(5528),l=r(5020),d=r(9406);function u(){if((0,l.staticGenerationBailout)("headers",{link:"https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering"}))return n.HeadersAdapter.seal(new Headers({}));let e=a.requestAsyncStorage.getStore();if(!e)throw Error("Invariant: headers() expects to have requestAsyncStorage, none available.");return e.headers}function c(){if((0,l.staticGenerationBailout)("cookies",{link:"https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering"}))return o.RequestCookiesAdapter.seal(new s.RequestCookies(new Headers({})));let e=a.requestAsyncStorage.getStore();if(!e)throw Error("Invariant: cookies() expects to have requestAsyncStorage, none available.");let t=i.actionAsyncStorage.getStore();return t&&(t.isAction||t.isAppRoute)?e.mutableCookies:e.cookies}function f(){let e=a.requestAsyncStorage.getStore();if(!e)throw Error("Invariant: draftMode() expects to have requestAsyncStorage, none available.");return new d.DraftMode(e.draftMode)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1749:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyHeadersError:function(){return n},HeadersAdapter:function(){return s}});let o=r(8154);class n extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new n}}class s extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(t,r,n){if("symbol"==typeof r)return o.ReflectAdapter.get(t,r,n);let s=r.toLowerCase(),a=Object.keys(e).find(e=>e.toLowerCase()===s);if(void 0!==a)return o.ReflectAdapter.get(t,a,n)},set(t,r,n,s){if("symbol"==typeof r)return o.ReflectAdapter.set(t,r,n,s);let a=r.toLowerCase(),i=Object.keys(e).find(e=>e.toLowerCase()===a);return o.ReflectAdapter.set(t,i??r,n,s)},has(t,r){if("symbol"==typeof r)return o.ReflectAdapter.has(t,r);let n=r.toLowerCase(),s=Object.keys(e).find(e=>e.toLowerCase()===n);return void 0!==s&&o.ReflectAdapter.has(t,s)},deleteProperty(t,r){if("symbol"==typeof r)return o.ReflectAdapter.deleteProperty(t,r);let n=r.toLowerCase(),s=Object.keys(e).find(e=>e.toLowerCase()===n);return void 0===s||o.ReflectAdapter.deleteProperty(t,s)}})}static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"append":case"delete":case"set":return n.callable;default:return o.ReflectAdapter.get(e,t,r)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new s(e)}append(e,t){let r=this.headers[e];"string"==typeof r?this.headers[e]=[r,t]:Array.isArray(r)?r.push(t):this.headers[e]=t}delete(e){delete this.headers[e]}get(e){let t=this.headers[e];return void 0!==t?this.merge(t):null}has(e){return void 0!==this.headers[e]}set(e,t){this.headers[e]=t}forEach(e,t){for(let[r,o]of this.entries())e.call(t,o,r,this)}*entries(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase(),r=this.get(t);yield[t,r]}}*keys(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase();yield t}}*values(){for(let e of Object.keys(this.headers)){let t=this.get(e);yield t}}[Symbol.iterator](){return this.entries()}}},8154:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,t,r){let o=Reflect.get(e,t,r);return"function"==typeof o?o.bind(e):o}static set(e,t,r,o){return Reflect.set(e,t,r,o)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},9879:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyRequestCookiesError:function(){return s},RequestCookiesAdapter:function(){return a},getModifiedCookieValues:function(){return l},appendMutableCookies:function(){return d},MutableRequestCookiesAdapter:function(){return u}});let o=r(3497),n=r(8154);class s extends Error{constructor(){super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options")}static callable(){throw new s}}class a{static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"clear":case"delete":case"set":return s.callable;default:return n.ReflectAdapter.get(e,t,r)}}})}}let i=Symbol.for("next.mutated.cookies");function l(e){let t=e[i];return t&&Array.isArray(t)&&0!==t.length?t:[]}function d(e,t){let r=l(t);if(0===r.length)return!1;let n=new o.ResponseCookies(e),s=n.getAll();for(let e of r)n.set(e);for(let e of s)n.set(e);return!0}class u{static wrap(e,t){let r=new o.ResponseCookies(new Headers);for(let t of e.getAll())r.set(t);let s=[],a=new Set,l=()=>{var e;let n=null==fetch.__nextGetStaticStore?void 0:null==(e=fetch.__nextGetStaticStore.call(fetch))?void 0:e.getStore();n&&(n.pathWasRevalidated=!0);let i=r.getAll();if(s=i.filter(e=>a.has(e.name)),t){let e=[];for(let t of s){let r=new o.ResponseCookies(new Headers);r.set(t),e.push(r.toString())}t(e)}};return new Proxy(r,{get(e,t,r){switch(t){case i:return s;case"delete":return function(...t){a.add("string"==typeof t[0]?t[0]:t[0].name);try{e.delete(...t)}finally{l()}};case"set":return function(...t){a.add("string"==typeof t[0]?t[0]:t[0].name);try{return e.set(...t)}finally{l()}};default:return n.ReflectAdapter.get(e,t,r)}}})}}},9859:(e,t,r)=>{e.exports=r(8561)}};