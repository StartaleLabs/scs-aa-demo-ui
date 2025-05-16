import{l as o}from"./index-BIPrX1Fj.js";import{e as n,f as c}from"./if-defined-CVdOr0LL.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d=()=>new l;class l{}const e=new WeakMap,G=n(class extends c{render(t){return o}update(t,[s]){var h;const i=s!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=s,this.ht=(h=t.options)==null?void 0:h.host,this.rt(this.ct=t.element)),o}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const s=this.ht??globalThis;let i=e.get(s);i===void 0&&(i=new WeakMap,e.set(s,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,s;return typeof this.G=="function"?(t=e.get(this.ht??globalThis))==null?void 0:t.get(this.G):(s=this.G)==null?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});export{d as e,G as n};
