const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/secp256k1-Bsj2Pg6C.js","assets/index-LINZo7Ev.js","assets/index-CtKu3gDI.css"])))=>i.map(i=>d[i]);
import{_ as Wm,H as Vm,I as pr,J as Dt,K as V,L as Fm,M as $s,N as Km,O as Ko,P as Ih,V as Zm,Q as Gn,R as zi,k as Nl,A as Gm,a as $t,W as Ym,X as Jm,Y as Qt,Z as ms,$ as Ma,a0 as Ed,a1 as gr,a2 as Xm,a3 as xd,a4 as Id,a5 as Pl,a6 as Ad,a7 as cp,a8 as Qm,a9 as e2,aa as t2,ab as lp,ac as An,ad as Og,ae as ni,af as jr,ag as wi,ah as kr}from"./index-LINZo7Ev.js";function ia(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function up(t){return ia(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}const Tg="2.23.2";let so={getDocsUrl:({docsBaseUrl:t,docsPath:e="",docsSlug:r})=>e?`${t??"https://viem.sh"}${e}${r?`#${r}`:""}`:void 0,version:`viem@${Tg}`};class ks extends Error{constructor(e,r={}){var a;const i=(()=>{var c;return r.cause instanceof ks?r.cause.details:(c=r.cause)!=null&&c.message?r.cause.message:r.details})(),s=r.cause instanceof ks&&r.cause.docsPath||r.docsPath,n=(a=so.getDocsUrl)==null?void 0:a.call(so,{...r,docsPath:s}),o=[e||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...n?[`Docs: ${n}`]:[],...i?[`Details: ${i}`]:[],...so.version?[`Version: ${so.version}`]:[]].join(`
`);super(o,r.cause?{cause:r.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=i,this.docsPath=s,this.metaMessages=r.metaMessages,this.name=r.name??this.name,this.shortMessage=e,this.version=Tg}walk(e){return Rg(this,e)}}function Rg(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t&&t.cause!==void 0?Rg(t.cause,e):e?null:t}class Lg extends ks{constructor({size:e,targetSize:r,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`,{name:"SizeExceedsPaddingSizeError"})}}function Yn(t,{dir:e,size:r=32}={}){return typeof t=="string"?r2(t,{dir:e,size:r}):i2(t,{dir:e,size:r})}function r2(t,{dir:e,size:r=32}={}){if(r===null)return t;const i=t.replace("0x","");if(i.length>r*2)throw new Lg({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i[e==="right"?"padEnd":"padStart"](r*2,"0")}`}function i2(t,{dir:e,size:r=32}={}){if(r===null)return t;if(t.length>r)throw new Lg({size:t.length,targetSize:r,type:"bytes"});const i=new Uint8Array(r);for(let s=0;s<r;s++){const n=e==="right";i[n?s:r-s-1]=t[n?s:t.length-s-1]}return i}class s2 extends ks{constructor({max:e,min:r,signed:i,size:s,value:n}){super(`Number "${n}" is not in safe ${s?`${s*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${e?`(${r} to ${e})`:`(above ${r})`}`,{name:"IntegerOutOfRangeError"})}}class n2 extends ks{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`,{name:"SizeOverflowError"})}}function Jn(t,{size:e}){if(up(t)>e)throw new n2({givenSize:up(t),maxSize:e})}function Ah(t,e={}){const{signed:r}=e;e.size&&Jn(t,{size:e.size});const i=BigInt(t);if(!r)return i;const s=(t.length-2)/2,n=(1n<<BigInt(s)*8n-1n)-1n;return i<=n?i:i-BigInt(`0x${"f".padStart(s*2,"f")}`)-1n}function o2(t,e={}){return Number(Ah(t,e))}const a2=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Sh(t,e={}){return typeof t=="number"||typeof t=="bigint"?Bg(t,e):typeof t=="string"?u2(t,e):typeof t=="boolean"?c2(t,e):Ug(t,e)}function c2(t,e={}){const r=`0x${Number(t)}`;return typeof e.size=="number"?(Jn(r,{size:e.size}),Yn(r,{size:e.size})):r}function Ug(t,e={}){let r="";for(let s=0;s<t.length;s++)r+=a2[t[s]];const i=`0x${r}`;return typeof e.size=="number"?(Jn(i,{size:e.size}),Yn(i,{dir:"right",size:e.size})):i}function Bg(t,e={}){const{signed:r,size:i}=e,s=BigInt(t);let n;i?r?n=(1n<<BigInt(i)*8n-1n)-1n:n=2n**(BigInt(i)*8n)-1n:typeof t=="number"&&(n=BigInt(Number.MAX_SAFE_INTEGER));const o=typeof n=="bigint"&&r?-n-1n:0;if(n&&s>n||s<o){const c=typeof t=="bigint"?"n":"";throw new s2({max:n?`${n}${c}`:void 0,min:`${o}${c}`,signed:r,size:i,value:`${t}${c}`})}const a=`0x${(r&&s<0?(1n<<BigInt(i*8))+BigInt(s):s).toString(16)}`;return i?Yn(a,{size:i}):a}const l2=new TextEncoder;function u2(t,e={}){const r=l2.encode(t);return Ug(r,e)}const h2=new TextEncoder;function d2(t,e={}){return typeof t=="number"||typeof t=="bigint"?g2(t,e):typeof t=="boolean"?p2(t,e):ia(t)?Mg(t,e):Dg(t,e)}function p2(t,e={}){const r=new Uint8Array(1);return r[0]=Number(t),typeof e.size=="number"?(Jn(r,{size:e.size}),Yn(r,{size:e.size})):r}const Fr={zero:48,nine:57,A:65,F:70,a:97,f:102};function hp(t){if(t>=Fr.zero&&t<=Fr.nine)return t-Fr.zero;if(t>=Fr.A&&t<=Fr.F)return t-(Fr.A-10);if(t>=Fr.a&&t<=Fr.f)return t-(Fr.a-10)}function Mg(t,e={}){let r=t;e.size&&(Jn(r,{size:e.size}),r=Yn(r,{dir:"right",size:e.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);const s=i.length/2,n=new Uint8Array(s);for(let o=0,a=0;o<s;o++){const c=hp(i.charCodeAt(a++)),l=hp(i.charCodeAt(a++));if(c===void 0||l===void 0)throw new ks(`Invalid byte sequence ("${i[a-2]}${i[a-1]}" in "${i}").`);n[o]=c*16+l}return n}function g2(t,e){const r=Bg(t,e);return Mg(r)}function Dg(t,e={}){const r=h2.encode(t);return typeof e.size=="number"?(Jn(r,{size:e.size}),Yn(r,{dir:"right",size:e.size})):r}function cl(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function f2(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Ol(t,...e){if(!f2(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function sP(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");cl(t.outputLen),cl(t.blockLen)}function dp(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function w2(t,e){Ol(t);const r=e.outputLen;if(t.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}const tc=BigInt(2**32-1),pp=BigInt(32);function m2(t,e=!1){return e?{h:Number(t&tc),l:Number(t>>pp&tc)}:{h:Number(t>>pp&tc)|0,l:Number(t&tc)|0}}function v2(t,e=!1){let r=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:n,l:o}=m2(t[s],e);[r[s],i[s]]=[n,o]}return[r,i]}const b2=(t,e,r)=>t<<r|e>>>32-r,y2=(t,e,r)=>e<<r|t>>>32-r,C2=(t,e,r)=>e<<r-32|t>>>64-r,E2=(t,e,r)=>t<<r-32|e>>>64-r,qs=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */function x2(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function nP(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function oP(t,e){return t<<32-e|t>>>e}const gp=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function I2(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}function fp(t){for(let e=0;e<t.length;e++)t[e]=I2(t[e])}function A2(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function jg(t){return typeof t=="string"&&(t=A2(t)),Ol(t),t}function aP(...t){let e=0;for(let i=0;i<t.length;i++){const s=t[i];Ol(s),e+=s.length}const r=new Uint8Array(e);for(let i=0,s=0;i<t.length;i++){const n=t[i];r.set(n,s),s+=n.length}return r}class S2{clone(){return this._cloneInto()}}function _2(t){const e=i=>t().update(jg(i)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function cP(t=32){if(qs&&typeof qs.getRandomValues=="function")return qs.getRandomValues(new Uint8Array(t));if(qs&&typeof qs.randomBytes=="function")return qs.randomBytes(t);throw new Error("crypto.getRandomValues must be defined")}const zg=[],qg=[],Hg=[],$2=BigInt(0),no=BigInt(1),k2=BigInt(2),N2=BigInt(7),P2=BigInt(256),O2=BigInt(113);for(let t=0,e=no,r=1,i=0;t<24;t++){[r,i]=[i,(2*r+3*i)%5],zg.push(2*(5*i+r)),qg.push((t+1)*(t+2)/2%64);let s=$2;for(let n=0;n<7;n++)e=(e<<no^(e>>N2)*O2)%P2,e&k2&&(s^=no<<(no<<BigInt(n))-no);Hg.push(s)}const[T2,R2]=v2(Hg,!0),wp=(t,e,r)=>r>32?C2(t,e,r):b2(t,e,r),mp=(t,e,r)=>r>32?E2(t,e,r):y2(t,e,r);function L2(t,e=24){const r=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let o=0;o<10;o++)r[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,l=r[c],u=r[c+1],h=wp(l,u,1)^r[a],d=mp(l,u,1)^r[a+1];for(let p=0;p<50;p+=10)t[o+p]^=h,t[o+p+1]^=d}let s=t[2],n=t[3];for(let o=0;o<24;o++){const a=qg[o],c=wp(s,n,a),l=mp(s,n,a),u=zg[o];s=t[u],n=t[u+1],t[u]=c,t[u+1]=l}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)r[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~r[(a+2)%10]&r[(a+4)%10]}t[0]^=T2[i],t[1]^=R2[i]}r.fill(0)}class Sd extends S2{constructor(e,r,i,s=!1,n=24){if(super(),this.blockLen=e,this.suffix=r,this.outputLen=i,this.enableXOF=s,this.rounds=n,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,cl(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=x2(this.state)}keccak(){gp||fp(this.state32),L2(this.state32,this.rounds),gp||fp(this.state32),this.posOut=0,this.pos=0}update(e){dp(this);const{blockLen:r,state:i}=this;e=jg(e);const s=e.length;for(let n=0;n<s;){const o=Math.min(r-this.pos,s-n);for(let a=0;a<o;a++)i[this.pos++]^=e[n++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:r,pos:i,blockLen:s}=this;e[i]^=r,(r&128)!==0&&i===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){dp(this,!1),Ol(e),this.finish();const r=this.state,{blockLen:i}=this;for(let s=0,n=e.length;s<n;){this.posOut>=i&&this.keccak();const o=Math.min(i-this.posOut,n-s);e.set(r.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return cl(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(w2(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:r,suffix:i,outputLen:s,rounds:n,enableXOF:o}=this;return e||(e=new Sd(r,i,s,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=i,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}}const U2=(t,e,r)=>_2(()=>new Sd(e,t,r)),B2=U2(1,136,256/8);function Wg(t,e){const r=e||"hex",i=B2(ia(t,{strict:!1})?d2(t):t);return r==="bytes"?i:Sh(i)}class M2 extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const r=super.get(e);return super.has(e)&&r!==void 0&&(this.delete(e),super.set(e,r)),r}set(e,r){if(super.set(e,r),this.maxSize&&this.size>this.maxSize){const i=this.keys().next().value;i&&this.delete(i)}return this}}const ru=new M2(8192);function D2(t,e){if(ru.has(`${t}.${e}`))return ru.get(`${t}.${e}`);const r=t.substring(2).toLowerCase(),i=Wg(Dg(r),"bytes"),s=r.split("");for(let o=0;o<40;o+=2)i[o>>1]>>4>=8&&s[o]&&(s[o]=s[o].toUpperCase()),(i[o>>1]&15)>=8&&s[o+1]&&(s[o+1]=s[o+1].toUpperCase());const n=`0x${s.join("")}`;return ru.set(`${t}.${e}`,n),n}function j2(t){const e=Wg(`0x${t.substring(4)}`).substring(26);return D2(`0x${e}`)}async function z2({hash:t,signature:e}){const r=ia(t)?t:Sh(t),{secp256k1:i}=await Wm(async()=>{const{secp256k1:o}=await import("./secp256k1-Bsj2Pg6C.js");return{secp256k1:o}},__vite__mapDeps([0,1,2]));return`0x${(()=>{if(typeof e=="object"&&"r"in e&&"s"in e){const{r:l,s:u,v:h,yParity:d}=e,p=Number(d??h),w=vp(p);return new i.Signature(Ah(l),Ah(u)).addRecoveryBit(w)}const o=ia(e)?e:Sh(e),a=o2(`0x${o.slice(130)}`),c=vp(a);return i.Signature.fromCompact(o.substring(2,130)).addRecoveryBit(c)})().recoverPublicKey(r.substring(2)).toHex(!1)}`}function vp(t){if(t===0||t===1)return t;if(t===27)return 0;if(t===28)return 1;throw new Error("Invalid yParityOrV value")}async function q2({hash:t,signature:e}){return j2(await z2({hash:t,signature:e}))}var H2={};const W2=":";function kn(t){const[e,r]=t.split(W2);return{namespace:e,reference:r}}function bp(t,e=[]){const r=[];return Object.keys(t).forEach(i=>{if(e.length&&!e.includes(i))return;const s=t[i];r.push(...s.accounts)}),r}function Vg(t,e){return t.includes(":")?[t]:e.chains||[]}var V2=Object.defineProperty,F2=Object.defineProperties,K2=Object.getOwnPropertyDescriptors,yp=Object.getOwnPropertySymbols,Z2=Object.prototype.hasOwnProperty,G2=Object.prototype.propertyIsEnumerable,Cp=(t,e,r)=>e in t?V2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ep=(t,e)=>{for(var r in e||(e={}))Z2.call(e,r)&&Cp(t,r,e[r]);if(yp)for(var r of yp(e))G2.call(e,r)&&Cp(t,r,e[r]);return t},Y2=(t,e)=>F2(t,K2(e));const J2="ReactNative",Jt={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},X2="js";function ll(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function qi(){return!$s.getDocument()&&!!$s.getNavigator()&&navigator.product===J2}function Q2(){return qi()&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"&&(global==null?void 0:global.Platform.OS)==="android"}function ev(){return qi()&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"&&(global==null?void 0:global.Platform.OS)==="ios"}function Da(){return!ll()&&!!$s.getNavigator()&&!!$s.getDocument()}function ja(){return qi()?Jt.reactNative:ll()?Jt.node:Da()?Jt.browser:Jt.unknown}function xp(){var t;try{return qi()&&typeof global<"u"&&typeof(global==null?void 0:global.Application)<"u"?(t=global.Application)==null?void 0:t.applicationId:void 0}catch{return}}function tv(t,e){const r=new URLSearchParams(t);for(const i of Object.keys(e).sort())if(e.hasOwnProperty(i)){const s=e[i];s!==void 0&&r.set(i,s)}return r.toString()}function rv(t){var e,r;const i=Fg();try{return t!=null&&t.url&&i.url&&t.url!==i.url&&(console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${i.url}. This is probably unintended and can lead to issues.`),t.url=i.url),(e=t==null?void 0:t.icons)!=null&&e.length&&t.icons.length>0&&(t.icons=t.icons.filter(s=>s!=="")),Y2(Ep(Ep({},i),t),{url:(t==null?void 0:t.url)||i.url,name:(t==null?void 0:t.name)||i.name,description:(t==null?void 0:t.description)||i.description,icons:(r=t==null?void 0:t.icons)!=null&&r.length&&t.icons.length>0?t.icons:i.icons})}catch(s){return console.warn("Error populating app metadata",s),t||i}}function Fg(){return Vm.getWindowMetadata()||{name:"",description:"",url:"",icons:[""]}}function iv(){if(ja()===Jt.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:r,Version:i}=global.Platform;return[r,i].join("-")}const t=Km();if(t===null)return"unknown";const e=t.os?t.os.replace(" ","").toLowerCase():"unknown";return t.type==="browser"?[e,t.name,t.version].join("-"):[e,t.version].join("-")}function sv(){var t;const e=ja();return e===Jt.browser?[e,((t=$s.getLocation())==null?void 0:t.host)||"unknown"].join(":"):e}function Kg(t,e,r){const i=iv(),s=sv();return[[t,e].join("-"),[X2,r].join("-"),i,s].join("/")}function nv({protocol:t,version:e,relayUrl:r,sdkVersion:i,auth:s,projectId:n,useOnCloseEvent:o,bundleId:a,packageName:c}){const l=r.split("?"),u=Kg(t,e,i),h={auth:s,ua:u,projectId:n,useOnCloseEvent:o,packageName:c||void 0,bundleId:a||void 0},d=tv(l[1]||"",h);return l[0]+"?"+d}function vs(t,e){return t.filter(r=>e.includes(r)).length===t.length}function _h(t){return Object.fromEntries(t.entries())}function $h(t){return new Map(Object.entries(t))}function ls(t=V.FIVE_MINUTES,e){const r=V.toMiliseconds(t||V.FIVE_MINUTES);let i,s,n,o;return{resolve:a=>{n&&i&&(clearTimeout(n),i(a),o=Promise.resolve(a))},reject:a=>{n&&s&&(clearTimeout(n),s(a))},done:()=>new Promise((a,c)=>{if(o)return a(o);n=setTimeout(()=>{const l=new Error(e);o=Promise.reject(l),c(l)},r),i=a,s=c})}}function Pi(t,e,r){return new Promise(async(i,s)=>{const n=setTimeout(()=>s(new Error(r)),e);try{const o=await t;i(o)}catch(o){s(o)}clearTimeout(n)})}function Zg(t,e){if(typeof e=="string"&&e.startsWith(`${t}:`))return e;if(t.toLowerCase()==="topic"){if(typeof e!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${e}`}else if(t.toLowerCase()==="id"){if(typeof e!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${e}`}throw new Error(`Unknown expirer target type: ${t}`)}function ov(t){return Zg("topic",t)}function av(t){return Zg("id",t)}function Gg(t){const[e,r]=t.split(":"),i={id:void 0,topic:void 0};if(e==="topic"&&typeof r=="string")i.topic=r;else if(e==="id"&&Number.isInteger(Number(r)))i.id=Number(r);else throw new Error(`Invalid target, expected id:number or topic:string, got ${e}:${r}`);return i}function tt(t,e){return V.fromMiliseconds(Date.now()+V.toMiliseconds(t))}function Si(t){return Date.now()>=V.toMiliseconds(t)}function Ne(t,e){return`${t}${e?`:${e}`:""}`}function tl(t=[],e=[]){return[...new Set([...t,...e])]}async function cv({id:t,topic:e,wcDeepLink:r}){var i;try{if(!r)return;const s=typeof r=="string"?JSON.parse(r):r,n=s==null?void 0:s.href;if(typeof n!="string")return;const o=lv(n,t,e),a=ja();if(a===Jt.browser){if(!((i=$s.getDocument())!=null&&i.hasFocus())){console.warn("Document does not have focus, skipping deeplink.");return}uv(o)}else a===Jt.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(s){console.error(s)}}function lv(t,e,r){const i=`requestId=${e}&sessionTopic=${r}`;t.endsWith("/")&&(t=t.slice(0,-1));let s=`${t}`;if(t.startsWith("https://t.me")){const n=t.includes("?")?"&startapp=":"?startapp=";s=`${s}${n}${gv(i,!0)}`}else s=`${s}/wc?${i}`;return s}function uv(t){let e="_self";pv()?e="_top":(dv()||t.startsWith("https://")||t.startsWith("http://"))&&(e="_blank"),window.open(t,e,"noreferrer noopener")}async function hv(t,e){let r="";try{if(Da()&&(r=localStorage.getItem(e),r))return r;r=await t.getItem(e)}catch(i){console.error(i)}return r}function Ip(t,e){if(!t.includes(e))return null;const r=t.split(/([&,?,=])/),i=r.indexOf(e);return r[i+2]}function Ap(){return typeof crypto<"u"&&crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}function _d(){return typeof process<"u"&&H2.IS_VITEST==="true"}function dv(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)}function pv(){try{return window.self!==window.top}catch{return!1}}function gv(t,e=!1){const r=Buffer.from(t).toString("base64");return e?r.replace(/[=]/g,""):r}function Yg(t){return Buffer.from(t,"base64").toString("utf-8")}function fv(t){return new Promise(e=>setTimeout(e,t))}function sa(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function wv(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function za(t,...e){if(!wv(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function $d(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");sa(t.outputLen),sa(t.blockLen)}function On(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function Jg(t,e){za(t);const r=e.outputLen;if(t.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}const rc=BigInt(2**32-1),Sp=BigInt(32);function mv(t,e=!1){return e?{h:Number(t&rc),l:Number(t>>Sp&rc)}:{h:Number(t>>Sp&rc)|0,l:Number(t&rc)|0}}function vv(t,e=!1){let r=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:n,l:o}=mv(t[s],e);[r[s],i[s]]=[n,o]}return[r,i]}const bv=(t,e,r)=>t<<r|e>>>32-r,yv=(t,e,r)=>e<<r|t>>>32-r,Cv=(t,e,r)=>e<<r-32|t>>>64-r,Ev=(t,e,r)=>t<<r-32|e>>>64-r,Hs=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function xv(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function iu(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function Nr(t,e){return t<<32-e|t>>>e}const _p=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Iv(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}function $p(t){for(let e=0;e<t.length;e++)t[e]=Iv(t[e])}function Av(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function Tn(t){return typeof t=="string"&&(t=Av(t)),za(t),t}function Sv(...t){let e=0;for(let i=0;i<t.length;i++){const s=t[i];za(s),e+=s.length}const r=new Uint8Array(e);for(let i=0,s=0;i<t.length;i++){const n=t[i];r.set(n,s),s+=n.length}return r}let kd=class{clone(){return this._cloneInto()}};function Xg(t){const e=i=>t().update(Tn(i)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function Xn(t=32){if(Hs&&typeof Hs.getRandomValues=="function")return Hs.getRandomValues(new Uint8Array(t));if(Hs&&typeof Hs.randomBytes=="function")return Hs.randomBytes(t);throw new Error("crypto.getRandomValues must be defined")}const Qg=[],ef=[],tf=[],_v=BigInt(0),oo=BigInt(1),$v=BigInt(2),kv=BigInt(7),Nv=BigInt(256),Pv=BigInt(113);for(let t=0,e=oo,r=1,i=0;t<24;t++){[r,i]=[i,(2*r+3*i)%5],Qg.push(2*(5*i+r)),ef.push((t+1)*(t+2)/2%64);let s=_v;for(let n=0;n<7;n++)e=(e<<oo^(e>>kv)*Pv)%Nv,e&$v&&(s^=oo<<(oo<<BigInt(n))-oo);tf.push(s)}const[Ov,Tv]=vv(tf,!0),kp=(t,e,r)=>r>32?Cv(t,e,r):bv(t,e,r),Np=(t,e,r)=>r>32?Ev(t,e,r):yv(t,e,r);function Rv(t,e=24){const r=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let o=0;o<10;o++)r[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,l=r[c],u=r[c+1],h=kp(l,u,1)^r[a],d=Np(l,u,1)^r[a+1];for(let p=0;p<50;p+=10)t[o+p]^=h,t[o+p+1]^=d}let s=t[2],n=t[3];for(let o=0;o<24;o++){const a=ef[o],c=kp(s,n,a),l=Np(s,n,a),u=Qg[o];s=t[u],n=t[u+1],t[u]=c,t[u+1]=l}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)r[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~r[(a+2)%10]&r[(a+4)%10]}t[0]^=Ov[i],t[1]^=Tv[i]}r.fill(0)}let Lv=class rf extends kd{constructor(e,r,i,s=!1,n=24){if(super(),this.blockLen=e,this.suffix=r,this.outputLen=i,this.enableXOF=s,this.rounds=n,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,sa(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=xv(this.state)}keccak(){_p||$p(this.state32),Rv(this.state32,this.rounds),_p||$p(this.state32),this.posOut=0,this.pos=0}update(e){On(this);const{blockLen:r,state:i}=this;e=Tn(e);const s=e.length;for(let n=0;n<s;){const o=Math.min(r-this.pos,s-n);for(let a=0;a<o;a++)i[this.pos++]^=e[n++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:r,pos:i,blockLen:s}=this;e[i]^=r,(r&128)!==0&&i===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){On(this,!1),za(e),this.finish();const r=this.state,{blockLen:i}=this;for(let s=0,n=e.length;s<n;){this.posOut>=i&&this.keccak();const o=Math.min(i-this.posOut,n-s);e.set(r.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return sa(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(Jg(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:r,suffix:i,outputLen:s,rounds:n,enableXOF:o}=this;return e||(e=new rf(r,i,s,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=i,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}};const Uv=(t,e,r)=>Xg(()=>new Lv(e,t,r)),Bv=Uv(1,136,256/8),Mv="https://rpc.walletconnect.org/v1";function sf(t){const e=`Ethereum Signed Message:
${t.length}`,r=new TextEncoder().encode(e+t);return"0x"+Buffer.from(Bv(r)).toString("hex")}async function Dv(t,e,r,i,s,n){switch(r.t){case"eip191":return await jv(t,e,r.s);case"eip1271":return await zv(t,e,r.s,i,s,n);default:throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`)}}async function jv(t,e,r){return(await q2({hash:sf(e),signature:r})).toLowerCase()===t.toLowerCase()}async function zv(t,e,r,i,s,n){const o=kn(i);if(!o.namespace||!o.reference)throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${i}`);try{const a="0x1626ba7e",c="0000000000000000000000000000000000000000000000000000000000000040",l="0000000000000000000000000000000000000000000000000000000000000041",u=r.substring(2),h=sf(e).substring(2),d=a+h+c+l+u,p=await fetch(`${n||Mv}/?chainId=${i}&projectId=${s}`,{method:"POST",body:JSON.stringify({id:qv(),jsonrpc:"2.0",method:"eth_call",params:[{to:t,data:d},"latest"]})}),{result:w}=await p.json();return w?w.slice(0,a.length).toLowerCase()===a.toLowerCase():!1}catch(a){return console.error("isValidEip1271Signature: ",a),!1}}function qv(){return Date.now()+Math.floor(Math.random()*1e3)}function Hv(t){const e=atob(t),r=new Uint8Array(e.length);for(let o=0;o<e.length;o++)r[o]=e.charCodeAt(o);const i=r[0];if(i===0)throw new Error("No signatures found");const s=1+i*64;if(r.length<s)throw new Error("Transaction data too short for claimed signature count");if(r.length<100)throw new Error("Transaction too short");const n=Buffer.from(t,"base64").slice(1,65);return Zm.encode(n)}var Wv=Object.defineProperty,Vv=Object.defineProperties,Fv=Object.getOwnPropertyDescriptors,Pp=Object.getOwnPropertySymbols,Kv=Object.prototype.hasOwnProperty,Zv=Object.prototype.propertyIsEnumerable,Op=(t,e,r)=>e in t?Wv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Gv=(t,e)=>{for(var r in e||(e={}))Kv.call(e,r)&&Op(t,r,e[r]);if(Pp)for(var r of Pp(e))Zv.call(e,r)&&Op(t,r,e[r]);return t},Yv=(t,e)=>Vv(t,Fv(e));const Jv="did:pkh:",Nd=t=>t==null?void 0:t.split(":"),Xv=t=>{const e=t&&Nd(t);if(e)return t.includes(Jv)?e[3]:e[1]},kh=t=>{const e=t&&Nd(t);if(e)return e[2]+":"+e[3]},ul=t=>{const e=t&&Nd(t);if(e)return e.pop()};async function Tp(t){const{cacao:e,projectId:r}=t,{s:i,p:s}=e,n=nf(s,s.iss),o=ul(s.iss);return await Dv(o,n,i,kh(s.iss),r)}const nf=(t,e)=>{const r=`${t.domain} wants you to sign in with your Ethereum account:`,i=ul(e);if(!t.aud&&!t.uri)throw new Error("Either `aud` or `uri` is required to construct the message");let s=t.statement||void 0;const n=`URI: ${t.aud||t.uri}`,o=`Version: ${t.version}`,a=`Chain ID: ${Xv(e)}`,c=`Nonce: ${t.nonce}`,l=`Issued At: ${t.iat}`,u=t.exp?`Expiration Time: ${t.exp}`:void 0,h=t.nbf?`Not Before: ${t.nbf}`:void 0,d=t.requestId?`Request ID: ${t.requestId}`:void 0,p=t.resources?`Resources:${t.resources.map(g=>`
- ${g}`).join("")}`:void 0,w=rl(t.resources);if(w){const g=na(w);s=ab(s,g)}return[r,i,"",s,"",n,o,a,c,l,u,h,d,p].filter(g=>g!=null).join(`
`)};function Qv(t){return Buffer.from(JSON.stringify(t)).toString("base64")}function eb(t){return JSON.parse(Buffer.from(t,"base64").toString("utf-8"))}function Ns(t){if(!t)throw new Error("No recap provided, value is undefined");if(!t.att)throw new Error("No `att` property found");const e=Object.keys(t.att);if(!(e!=null&&e.length))throw new Error("No resources found in `att` property");e.forEach(r=>{const i=t.att[r];if(Array.isArray(i))throw new Error(`Resource must be an object: ${r}`);if(typeof i!="object")throw new Error(`Resource must be an object: ${r}`);if(!Object.keys(i).length)throw new Error(`Resource object is empty: ${r}`);Object.keys(i).forEach(s=>{const n=i[s];if(!Array.isArray(n))throw new Error(`Ability limits ${s} must be an array of objects, found: ${n}`);if(!n.length)throw new Error(`Value of ${s} is empty array, must be an array with objects`);n.forEach(o=>{if(typeof o!="object")throw new Error(`Ability limits (${s}) must be an array of objects, found: ${o}`)})})})}function tb(t,e,r,i={}){return r==null||r.sort((s,n)=>s.localeCompare(n)),{att:{[t]:rb(e,r,i)}}}function rb(t,e,r={}){e=e==null?void 0:e.sort((s,n)=>s.localeCompare(n));const i=e.map(s=>({[`${t}/${s}`]:[r]}));return Object.assign({},...i)}function of(t){return Ns(t),`urn:recap:${Qv(t).replace(/=/g,"")}`}function na(t){const e=eb(t.replace("urn:recap:",""));return Ns(e),e}function ib(t,e,r){const i=tb(t,e,r);return of(i)}function sb(t){return t&&t.includes("urn:recap:")}function nb(t,e){const r=na(t),i=na(e),s=ob(r,i);return of(s)}function ob(t,e){Ns(t),Ns(e);const r=Object.keys(t.att).concat(Object.keys(e.att)).sort((s,n)=>s.localeCompare(n)),i={att:{}};return r.forEach(s=>{var n,o;Object.keys(((n=t.att)==null?void 0:n[s])||{}).concat(Object.keys(((o=e.att)==null?void 0:o[s])||{})).sort((a,c)=>a.localeCompare(c)).forEach(a=>{var c,l;i.att[s]=Yv(Gv({},i.att[s]),{[a]:((c=t.att[s])==null?void 0:c[a])||((l=e.att[s])==null?void 0:l[a])})})}),i}function ab(t="",e){Ns(e);const r="I further authorize the stated URI to perform the following actions on my behalf: ";if(t.includes(r))return t;const i=[];let s=0;Object.keys(e.att).forEach(a=>{const c=Object.keys(e.att[a]).map(h=>({ability:h.split("/")[0],action:h.split("/")[1]}));c.sort((h,d)=>h.action.localeCompare(d.action));const l={};c.forEach(h=>{l[h.ability]||(l[h.ability]=[]),l[h.ability].push(h.action)});const u=Object.keys(l).map(h=>(s++,`(${s}) '${h}': '${l[h].join("', '")}' for '${a}'.`));i.push(u.join(", ").replace(".,","."))});const n=i.join(" "),o=`${r}${n}`;return`${t?t+" ":""}${o}`}function Rp(t){var e;const r=na(t);Ns(r);const i=(e=r.att)==null?void 0:e.eip155;return i?Object.keys(i).map(s=>s.split("/")[1]):[]}function Lp(t){const e=na(t);Ns(e);const r=[];return Object.values(e.att).forEach(i=>{Object.values(i).forEach(s=>{var n;(n=s==null?void 0:s[0])!=null&&n.chains&&r.push(s[0].chains)})}),[...new Set(r.flat())]}function rl(t){if(!t)return;const e=t==null?void 0:t[t.length-1];return sb(e)?e:void 0}function su(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function af(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Gt(t,...e){if(!af(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function Up(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function cb(t,e){Gt(t);const r=e.outputLen;if(t.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}function Bp(t){if(typeof t!="boolean")throw new Error(`boolean expected, not ${t}`)}const Ri=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),lb=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),ub=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!ub)throw new Error("Non little-endian hardware is not supported");function hb(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}function Nh(t){if(typeof t=="string")t=hb(t);else if(af(t))t=Ph(t);else throw new Error("Uint8Array expected, got "+typeof t);return t}function db(t,e){if(e==null||typeof e!="object")throw new Error("options must be defined");return Object.assign(t,e)}function pb(t,e){if(t.length!==e.length)return!1;let r=0;for(let i=0;i<t.length;i++)r|=t[i]^e[i];return r===0}const gb=(t,e)=>{function r(i,...s){if(Gt(i),t.nonceLength!==void 0){const l=s[0];if(!l)throw new Error("nonce / iv required");t.varSizeNonce?Gt(l):Gt(l,t.nonceLength)}const n=t.tagLength;n&&s[1]!==void 0&&Gt(s[1]);const o=e(i,...s),a=(l,u)=>{if(u!==void 0){if(l!==2)throw new Error("cipher output not supported");Gt(u)}};let c=!1;return{encrypt(l,u){if(c)throw new Error("cannot encrypt() twice with same key + nonce");return c=!0,Gt(l),a(o.encrypt.length,u),o.encrypt(l,u)},decrypt(l,u){if(Gt(l),n&&l.length<n)throw new Error("invalid ciphertext length: smaller than tagLength="+n);return a(o.decrypt.length,u),o.decrypt(l,u)}}}return Object.assign(r,t),r};function Mp(t,e,r=!0){if(e===void 0)return new Uint8Array(t);if(e.length!==t)throw new Error("invalid output length, expected "+t+", got: "+e.length);if(r&&!fb(e))throw new Error("invalid output, must be aligned");return e}function Dp(t,e,r,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,r,i);const s=BigInt(32),n=BigInt(4294967295),o=Number(r>>s&n),a=Number(r&n);t.setUint32(e+4,o,i),t.setUint32(e+0,a,i)}function fb(t){return t.byteOffset%4===0}function Ph(t){return Uint8Array.from(t)}function Rn(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}const cf=t=>Uint8Array.from(t.split("").map(e=>e.charCodeAt(0))),wb=cf("expand 16-byte k"),mb=cf("expand 32-byte k"),vb=Ri(wb),bb=Ri(mb);function Ie(t,e){return t<<e|t>>>32-e}function Oh(t){return t.byteOffset%4===0}const ic=64,yb=16,lf=2**32-1,jp=new Uint32Array;function Cb(t,e,r,i,s,n,o,a){const c=s.length,l=new Uint8Array(ic),u=Ri(l),h=Oh(s)&&Oh(n),d=h?Ri(s):jp,p=h?Ri(n):jp;for(let w=0;w<c;o++){if(t(e,r,i,u,o,a),o>=lf)throw new Error("arx: counter overflow");const g=Math.min(ic,c-w);if(h&&g===ic){const f=w/4;if(w%4!==0)throw new Error("arx: invalid block position");for(let m=0,v;m<yb;m++)v=f+m,p[v]=d[v]^u[m];w+=ic;continue}for(let f=0,m;f<g;f++)m=w+f,n[m]=s[m]^l[f];w+=g}}function Eb(t,e){const{allowShortKeys:r,extendNonceFn:i,counterLength:s,counterRight:n,rounds:o}=db({allowShortKeys:!1,counterLength:8,counterRight:!1,rounds:20},e);if(typeof t!="function")throw new Error("core must be a function");return su(s),su(o),Bp(n),Bp(r),(a,c,l,u,h=0)=>{Gt(a),Gt(c),Gt(l);const d=l.length;if(u===void 0&&(u=new Uint8Array(d)),Gt(u),su(h),h<0||h>=lf)throw new Error("arx: counter overflow");if(u.length<d)throw new Error(`arx: output (${u.length}) is shorter than data (${d})`);const p=[];let w=a.length,g,f;if(w===32)p.push(g=Ph(a)),f=bb;else if(w===16&&r)g=new Uint8Array(32),g.set(a),g.set(a,16),f=vb,p.push(g);else throw new Error(`arx: invalid 32-byte key, got length=${w}`);Oh(c)||p.push(c=Ph(c));const m=Ri(g);if(i){if(c.length!==24)throw new Error("arx: extended nonce must be 24 bytes");i(f,m,Ri(c.subarray(0,16)),m),c=c.subarray(16)}const v=16-s;if(v!==c.length)throw new Error(`arx: nonce must be ${v} or 16 bytes`);if(v!==12){const y=new Uint8Array(12);y.set(c,n?0:12-c.length),c=y,p.push(c)}const b=Ri(c);return Cb(t,f,m,b,l,u,h,o),Rn(...p),u}}const pt=(t,e)=>t[e++]&255|(t[e++]&255)<<8;let xb=class{constructor(e){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,e=Nh(e),Gt(e,32);const r=pt(e,0),i=pt(e,2),s=pt(e,4),n=pt(e,6),o=pt(e,8),a=pt(e,10),c=pt(e,12),l=pt(e,14);this.r[0]=r&8191,this.r[1]=(r>>>13|i<<3)&8191,this.r[2]=(i>>>10|s<<6)&7939,this.r[3]=(s>>>7|n<<9)&8191,this.r[4]=(n>>>4|o<<12)&255,this.r[5]=o>>>1&8190,this.r[6]=(o>>>14|a<<2)&8191,this.r[7]=(a>>>11|c<<5)&8065,this.r[8]=(c>>>8|l<<8)&8191,this.r[9]=l>>>5&127;for(let u=0;u<8;u++)this.pad[u]=pt(e,16+2*u)}process(e,r,i=!1){const s=i?0:2048,{h:n,r:o}=this,a=o[0],c=o[1],l=o[2],u=o[3],h=o[4],d=o[5],p=o[6],w=o[7],g=o[8],f=o[9],m=pt(e,r+0),v=pt(e,r+2),b=pt(e,r+4),y=pt(e,r+6),$=pt(e,r+8),_=pt(e,r+10),P=pt(e,r+12),k=pt(e,r+14);let S=n[0]+(m&8191),U=n[1]+((m>>>13|v<<3)&8191),L=n[2]+((v>>>10|b<<6)&8191),M=n[3]+((b>>>7|y<<9)&8191),F=n[4]+((y>>>4|$<<12)&8191),I=n[5]+($>>>1&8191),E=n[6]+(($>>>14|_<<2)&8191),x=n[7]+((_>>>11|P<<5)&8191),T=n[8]+((P>>>8|k<<8)&8191),O=n[9]+(k>>>5|s),R=0,B=R+S*a+U*(5*f)+L*(5*g)+M*(5*w)+F*(5*p);R=B>>>13,B&=8191,B+=I*(5*d)+E*(5*h)+x*(5*u)+T*(5*l)+O*(5*c),R+=B>>>13,B&=8191;let z=R+S*c+U*a+L*(5*f)+M*(5*g)+F*(5*w);R=z>>>13,z&=8191,z+=I*(5*p)+E*(5*d)+x*(5*h)+T*(5*u)+O*(5*l),R+=z>>>13,z&=8191;let K=R+S*l+U*c+L*a+M*(5*f)+F*(5*g);R=K>>>13,K&=8191,K+=I*(5*w)+E*(5*p)+x*(5*d)+T*(5*h)+O*(5*u),R+=K>>>13,K&=8191;let se=R+S*u+U*l+L*c+M*a+F*(5*f);R=se>>>13,se&=8191,se+=I*(5*g)+E*(5*w)+x*(5*p)+T*(5*d)+O*(5*h),R+=se>>>13,se&=8191;let re=R+S*h+U*u+L*l+M*c+F*a;R=re>>>13,re&=8191,re+=I*(5*f)+E*(5*g)+x*(5*w)+T*(5*p)+O*(5*d),R+=re>>>13,re&=8191;let ge=R+S*d+U*h+L*u+M*l+F*c;R=ge>>>13,ge&=8191,ge+=I*a+E*(5*f)+x*(5*g)+T*(5*w)+O*(5*p),R+=ge>>>13,ge&=8191;let be=R+S*p+U*d+L*h+M*u+F*l;R=be>>>13,be&=8191,be+=I*c+E*a+x*(5*f)+T*(5*g)+O*(5*w),R+=be>>>13,be&=8191;let Le=R+S*w+U*p+L*d+M*h+F*u;R=Le>>>13,Le&=8191,Le+=I*l+E*c+x*a+T*(5*f)+O*(5*g),R+=Le>>>13,Le&=8191;let xe=R+S*g+U*w+L*p+M*d+F*h;R=xe>>>13,xe&=8191,xe+=I*u+E*l+x*c+T*a+O*(5*f),R+=xe>>>13,xe&=8191;let ye=R+S*f+U*g+L*w+M*p+F*d;R=ye>>>13,ye&=8191,ye+=I*h+E*u+x*l+T*c+O*a,R+=ye>>>13,ye&=8191,R=(R<<2)+R|0,R=R+B|0,B=R&8191,R=R>>>13,z+=R,n[0]=B,n[1]=z,n[2]=K,n[3]=se,n[4]=re,n[5]=ge,n[6]=be,n[7]=Le,n[8]=xe,n[9]=ye}finalize(){const{h:e,pad:r}=this,i=new Uint16Array(10);let s=e[1]>>>13;e[1]&=8191;for(let a=2;a<10;a++)e[a]+=s,s=e[a]>>>13,e[a]&=8191;e[0]+=s*5,s=e[0]>>>13,e[0]&=8191,e[1]+=s,s=e[1]>>>13,e[1]&=8191,e[2]+=s,i[0]=e[0]+5,s=i[0]>>>13,i[0]&=8191;for(let a=1;a<10;a++)i[a]=e[a]+s,s=i[a]>>>13,i[a]&=8191;i[9]-=8192;let n=(s^1)-1;for(let a=0;a<10;a++)i[a]&=n;n=~n;for(let a=0;a<10;a++)e[a]=e[a]&n|i[a];e[0]=(e[0]|e[1]<<13)&65535,e[1]=(e[1]>>>3|e[2]<<10)&65535,e[2]=(e[2]>>>6|e[3]<<7)&65535,e[3]=(e[3]>>>9|e[4]<<4)&65535,e[4]=(e[4]>>>12|e[5]<<1|e[6]<<14)&65535,e[5]=(e[6]>>>2|e[7]<<11)&65535,e[6]=(e[7]>>>5|e[8]<<8)&65535,e[7]=(e[8]>>>8|e[9]<<5)&65535;let o=e[0]+r[0];e[0]=o&65535;for(let a=1;a<8;a++)o=(e[a]+r[a]|0)+(o>>>16)|0,e[a]=o&65535;Rn(i)}update(e){Up(this);const{buffer:r,blockLen:i}=this;e=Nh(e);const s=e.length;for(let n=0;n<s;){const o=Math.min(i-this.pos,s-n);if(o===i){for(;i<=s-n;n+=i)this.process(e,n);continue}r.set(e.subarray(n,n+o),this.pos),this.pos+=o,n+=o,this.pos===i&&(this.process(r,0,!1),this.pos=0)}return this}destroy(){Rn(this.h,this.r,this.buffer,this.pad)}digestInto(e){Up(this),cb(e,this),this.finished=!0;const{buffer:r,h:i}=this;let{pos:s}=this;if(s){for(r[s++]=1;s<16;s++)r[s]=0;this.process(r,0,!0)}this.finalize();let n=0;for(let o=0;o<8;o++)e[n++]=i[o]>>>0,e[n++]=i[o]>>>8;return e}digest(){const{buffer:e,outputLen:r}=this;this.digestInto(e);const i=e.slice(0,r);return this.destroy(),i}};function Ib(t){const e=(i,s)=>t(s).update(Nh(i)).digest(),r=t(new Uint8Array(32));return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=i=>t(i),e}const Ab=Ib(t=>new xb(t));function Sb(t,e,r,i,s,n=20){let o=t[0],a=t[1],c=t[2],l=t[3],u=e[0],h=e[1],d=e[2],p=e[3],w=e[4],g=e[5],f=e[6],m=e[7],v=s,b=r[0],y=r[1],$=r[2],_=o,P=a,k=c,S=l,U=u,L=h,M=d,F=p,I=w,E=g,x=f,T=m,O=v,R=b,B=y,z=$;for(let se=0;se<n;se+=2)_=_+U|0,O=Ie(O^_,16),I=I+O|0,U=Ie(U^I,12),_=_+U|0,O=Ie(O^_,8),I=I+O|0,U=Ie(U^I,7),P=P+L|0,R=Ie(R^P,16),E=E+R|0,L=Ie(L^E,12),P=P+L|0,R=Ie(R^P,8),E=E+R|0,L=Ie(L^E,7),k=k+M|0,B=Ie(B^k,16),x=x+B|0,M=Ie(M^x,12),k=k+M|0,B=Ie(B^k,8),x=x+B|0,M=Ie(M^x,7),S=S+F|0,z=Ie(z^S,16),T=T+z|0,F=Ie(F^T,12),S=S+F|0,z=Ie(z^S,8),T=T+z|0,F=Ie(F^T,7),_=_+L|0,z=Ie(z^_,16),x=x+z|0,L=Ie(L^x,12),_=_+L|0,z=Ie(z^_,8),x=x+z|0,L=Ie(L^x,7),P=P+M|0,O=Ie(O^P,16),T=T+O|0,M=Ie(M^T,12),P=P+M|0,O=Ie(O^P,8),T=T+O|0,M=Ie(M^T,7),k=k+F|0,R=Ie(R^k,16),I=I+R|0,F=Ie(F^I,12),k=k+F|0,R=Ie(R^k,8),I=I+R|0,F=Ie(F^I,7),S=S+U|0,B=Ie(B^S,16),E=E+B|0,U=Ie(U^E,12),S=S+U|0,B=Ie(B^S,8),E=E+B|0,U=Ie(U^E,7);let K=0;i[K++]=o+_|0,i[K++]=a+P|0,i[K++]=c+k|0,i[K++]=l+S|0,i[K++]=u+U|0,i[K++]=h+L|0,i[K++]=d+M|0,i[K++]=p+F|0,i[K++]=w+I|0,i[K++]=g+E|0,i[K++]=f+x|0,i[K++]=m+T|0,i[K++]=v+O|0,i[K++]=b+R|0,i[K++]=y+B|0,i[K++]=$+z|0}const _b=Eb(Sb,{counterRight:!1,counterLength:4,allowShortKeys:!1}),$b=new Uint8Array(16),zp=(t,e)=>{t.update(e);const r=e.length%16;r&&t.update($b.subarray(r))},kb=new Uint8Array(32);function qp(t,e,r,i,s){const n=t(e,r,kb),o=Ab.create(n);s&&zp(o,s),zp(o,i);const a=new Uint8Array(16),c=lb(a);Dp(c,0,BigInt(s?s.length:0),!0),Dp(c,8,BigInt(i.length),!0),o.update(a);const l=o.digest();return Rn(n,a),l}const Nb=t=>(e,r,i)=>({encrypt(s,n){const o=s.length;n=Mp(o+16,n,!1),n.set(s);const a=n.subarray(0,-16);t(e,r,a,a,1);const c=qp(t,e,r,a,i);return n.set(c,o),Rn(c),n},decrypt(s,n){n=Mp(s.length-16,n,!1);const o=s.subarray(0,-16),a=s.subarray(-16),c=qp(t,e,r,o,i);if(!pb(a,c))throw new Error("invalid tag");return n.set(s.subarray(0,-16)),t(e,r,n,n,1),Rn(c),n}}),uf=gb({blockSize:64,nonceLength:12,tagLength:16},Nb(_b));let hf=class extends kd{constructor(e,r){super(),this.finished=!1,this.destroyed=!1,$d(e);const i=Tn(r);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const s=this.blockLen,n=new Uint8Array(s);n.set(i.length>s?e.create().update(i).digest():i);for(let o=0;o<n.length;o++)n[o]^=54;this.iHash.update(n),this.oHash=e.create();for(let o=0;o<n.length;o++)n[o]^=106;this.oHash.update(n),n.fill(0)}update(e){return On(this),this.iHash.update(e),this}digestInto(e){On(this),za(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:i,finished:s,destroyed:n,blockLen:o,outputLen:a}=this;return e=e,e.finished=s,e.destroyed=n,e.blockLen=o,e.outputLen=a,e.oHash=r._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}};const Tl=(t,e,r)=>new hf(t,e).update(r).digest();Tl.create=(t,e)=>new hf(t,e);function Pb(t,e,r){return $d(t),r===void 0&&(r=new Uint8Array(t.outputLen)),Tl(t,Tn(r),Tn(e))}const nu=new Uint8Array([0]),Hp=new Uint8Array;function Ob(t,e,r,i=32){if($d(t),sa(i),i>255*t.outputLen)throw new Error("Length should be <= 255*HashLen");const s=Math.ceil(i/t.outputLen);r===void 0&&(r=Hp);const n=new Uint8Array(s*t.outputLen),o=Tl.create(t,e),a=o._cloneInto(),c=new Uint8Array(o.outputLen);for(let l=0;l<s;l++)nu[0]=l+1,a.update(l===0?Hp:c).update(r).update(nu).digestInto(c),n.set(c,t.outputLen*l),o._cloneInto(a);return o.destroy(),a.destroy(),c.fill(0),nu.fill(0),n.slice(0,i)}const Tb=(t,e,r,i,s)=>Ob(t,Pb(t,e,r),i,s);function Rb(t,e,r,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,r,i);const s=BigInt(32),n=BigInt(4294967295),o=Number(r>>s&n),a=Number(r&n),c=i?4:0,l=i?0:4;t.setUint32(e+c,o,i),t.setUint32(e+l,a,i)}function Lb(t,e,r){return t&e^~t&r}function Ub(t,e,r){return t&e^t&r^e&r}let Bb=class extends kd{constructor(e,r,i,s){super(),this.blockLen=e,this.outputLen=r,this.padOffset=i,this.isLE=s,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=iu(this.buffer)}update(e){On(this);const{view:r,buffer:i,blockLen:s}=this;e=Tn(e);const n=e.length;for(let o=0;o<n;){const a=Math.min(s-this.pos,n-o);if(a===s){const c=iu(e);for(;s<=n-o;o+=s)this.process(c,o);continue}i.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===s&&(this.process(r,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){On(this),Jg(e,this),this.finished=!0;const{buffer:r,view:i,blockLen:s,isLE:n}=this;let{pos:o}=this;r[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>s-o&&(this.process(i,0),o=0);for(let h=o;h<s;h++)r[h]=0;Rb(i,s-8,BigInt(this.length*8),n),this.process(i,0);const a=iu(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let h=0;h<l;h++)a.setUint32(4*h,u[h],n)}digest(){const{buffer:e,outputLen:r}=this;this.digestInto(e);const i=e.slice(0,r);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:r,buffer:i,length:s,finished:n,destroyed:o,pos:a}=this;return e.length=s,e.pos=a,e.finished=n,e.destroyed=o,s%r&&e.buffer.set(i),e}};const Mb=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),mi=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),vi=new Uint32Array(64);let Db=class extends Bb{constructor(){super(64,32,8,!1),this.A=mi[0]|0,this.B=mi[1]|0,this.C=mi[2]|0,this.D=mi[3]|0,this.E=mi[4]|0,this.F=mi[5]|0,this.G=mi[6]|0,this.H=mi[7]|0}get(){const{A:e,B:r,C:i,D:s,E:n,F:o,G:a,H:c}=this;return[e,r,i,s,n,o,a,c]}set(e,r,i,s,n,o,a,c){this.A=e|0,this.B=r|0,this.C=i|0,this.D=s|0,this.E=n|0,this.F=o|0,this.G=a|0,this.H=c|0}process(e,r){for(let h=0;h<16;h++,r+=4)vi[h]=e.getUint32(r,!1);for(let h=16;h<64;h++){const d=vi[h-15],p=vi[h-2],w=Nr(d,7)^Nr(d,18)^d>>>3,g=Nr(p,17)^Nr(p,19)^p>>>10;vi[h]=g+vi[h-7]+w+vi[h-16]|0}let{A:i,B:s,C:n,D:o,E:a,F:c,G:l,H:u}=this;for(let h=0;h<64;h++){const d=Nr(a,6)^Nr(a,11)^Nr(a,25),p=u+d+Lb(a,c,l)+Mb[h]+vi[h]|0,w=(Nr(i,2)^Nr(i,13)^Nr(i,22))+Ub(i,s,n)|0;u=l,l=c,c=a,a=o+p|0,o=n,n=s,s=i,i=p+w|0}i=i+this.A|0,s=s+this.B|0,n=n+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(i,s,n,o,a,c,l,u)}roundClean(){vi.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}};const qa=Xg(()=>new Db);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Rl=BigInt(0),Ll=BigInt(1),jb=BigInt(2);function Ps(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Ha(t){if(!Ps(t))throw new Error("Uint8Array expected")}function Ln(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}const zb=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Un(t){Ha(t);let e="";for(let r=0;r<t.length;r++)e+=zb[t[r]];return e}function Sn(t){const e=t.toString(16);return e.length&1?"0"+e:e}function Pd(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?Rl:BigInt("0x"+t)}const Kr={_0:48,_9:57,A:65,F:70,a:97,f:102};function Wp(t){if(t>=Kr._0&&t<=Kr._9)return t-Kr._0;if(t>=Kr.A&&t<=Kr.F)return t-(Kr.A-10);if(t>=Kr.a&&t<=Kr.f)return t-(Kr.a-10)}function Bn(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length,r=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const i=new Uint8Array(r);for(let s=0,n=0;s<r;s++,n+=2){const o=Wp(t.charCodeAt(n)),a=Wp(t.charCodeAt(n+1));if(o===void 0||a===void 0){const c=t[n]+t[n+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+n)}i[s]=o*16+a}return i}function Cs(t){return Pd(Un(t))}function oa(t){return Ha(t),Pd(Un(Uint8Array.from(t).reverse()))}function Mn(t,e){return Bn(t.toString(16).padStart(e*2,"0"))}function Ul(t,e){return Mn(t,e).reverse()}function qb(t){return Bn(Sn(t))}function Zt(t,e,r){let i;if(typeof e=="string")try{i=Bn(e)}catch(n){throw new Error(t+" must be hex string or Uint8Array, cause: "+n)}else if(Ps(e))i=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const s=i.length;if(typeof r=="number"&&s!==r)throw new Error(t+" of length "+r+" expected, got "+s);return i}function aa(...t){let e=0;for(let i=0;i<t.length;i++){const s=t[i];Ha(s),e+=s.length}const r=new Uint8Array(e);for(let i=0,s=0;i<t.length;i++){const n=t[i];r.set(n,s),s+=n.length}return r}function Hb(t,e){if(t.length!==e.length)return!1;let r=0;for(let i=0;i<t.length;i++)r|=t[i]^e[i];return r===0}function Wb(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}const ou=t=>typeof t=="bigint"&&Rl<=t;function Bl(t,e,r){return ou(t)&&ou(e)&&ou(r)&&e<=t&&t<r}function hi(t,e,r,i){if(!Bl(e,r,i))throw new Error("expected valid "+t+": "+r+" <= n < "+i+", got "+e)}function df(t){let e;for(e=0;t>Rl;t>>=Ll,e+=1);return e}function Vb(t,e){return t>>BigInt(e)&Ll}function Fb(t,e,r){return t|(r?Ll:Rl)<<BigInt(e)}const Od=t=>(jb<<BigInt(t-1))-Ll,au=t=>new Uint8Array(t),Vp=t=>Uint8Array.from(t);function pf(t,e,r){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof r!="function")throw new Error("hmacFn must be a function");let i=au(t),s=au(t),n=0;const o=()=>{i.fill(1),s.fill(0),n=0},a=(...u)=>r(s,i,...u),c=(u=au())=>{s=a(Vp([0]),u),i=a(),u.length!==0&&(s=a(Vp([1]),u),i=a())},l=()=>{if(n++>=1e3)throw new Error("drbg: tried 1000 values");let u=0;const h=[];for(;u<e;){i=a();const d=i.slice();h.push(d),u+=i.length}return aa(...h)};return(u,h)=>{o(),c(u);let d;for(;!(d=h(l()));)c();return o(),d}}const Kb={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||Ps(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function Qn(t,e,r={}){const i=(s,n,o)=>{const a=Kb[n];if(typeof a!="function")throw new Error("invalid validator function");const c=t[s];if(!(o&&c===void 0)&&!a(c,t))throw new Error("param "+String(s)+" is invalid. Expected "+n+", got "+c)};for(const[s,n]of Object.entries(e))i(s,n,!1);for(const[s,n]of Object.entries(r))i(s,n,!0);return t}const Zb=()=>{throw new Error("not implemented")};function Th(t){const e=new WeakMap;return(r,...i)=>{const s=e.get(r);if(s!==void 0)return s;const n=t(r,...i);return e.set(r,n),n}}var Gb=Object.freeze({__proto__:null,isBytes:Ps,abytes:Ha,abool:Ln,bytesToHex:Un,numberToHexUnpadded:Sn,hexToNumber:Pd,hexToBytes:Bn,bytesToNumberBE:Cs,bytesToNumberLE:oa,numberToBytesBE:Mn,numberToBytesLE:Ul,numberToVarBytesBE:qb,ensureBytes:Zt,concatBytes:aa,equalBytes:Hb,utf8ToBytes:Wb,inRange:Bl,aInRange:hi,bitLen:df,bitGet:Vb,bitSet:Fb,bitMask:Od,createHmacDrbg:pf,validateObject:Qn,notImplemented:Zb,memoized:Th});const ht=BigInt(0),Ge=BigInt(1),ds=BigInt(2),Yb=BigInt(3),Rh=BigInt(4),Fp=BigInt(5),Kp=BigInt(8);function Ut(t,e){const r=t%e;return r>=ht?r:e+r}function gf(t,e,r){if(e<ht)throw new Error("invalid exponent, negatives unsupported");if(r<=ht)throw new Error("invalid modulus");if(r===Ge)return ht;let i=Ge;for(;e>ht;)e&Ge&&(i=i*t%r),t=t*t%r,e>>=Ge;return i}function Ir(t,e,r){let i=t;for(;e-- >ht;)i*=i,i%=r;return i}function Lh(t,e){if(t===ht)throw new Error("invert: expected non-zero number");if(e<=ht)throw new Error("invert: expected positive modulus, got "+e);let r=Ut(t,e),i=e,s=ht,n=Ge;for(;r!==ht;){const o=i/r,a=i%r,c=s-n*o;i=r,r=a,s=n,n=c}if(i!==Ge)throw new Error("invert: does not exist");return Ut(s,e)}function Jb(t){const e=(t-Ge)/ds;let r,i,s;for(r=t-Ge,i=0;r%ds===ht;r/=ds,i++);for(s=ds;s<t&&gf(s,e,t)!==t-Ge;s++)if(s>1e3)throw new Error("Cannot find square root: likely non-prime P");if(i===1){const o=(t+Ge)/Rh;return function(a,c){const l=a.pow(c,o);if(!a.eql(a.sqr(l),c))throw new Error("Cannot find square root");return l}}const n=(r+Ge)/ds;return function(o,a){if(o.pow(a,e)===o.neg(o.ONE))throw new Error("Cannot find square root");let c=i,l=o.pow(o.mul(o.ONE,s),r),u=o.pow(a,n),h=o.pow(a,r);for(;!o.eql(h,o.ONE);){if(o.eql(h,o.ZERO))return o.ZERO;let d=1;for(let w=o.sqr(h);d<c&&!o.eql(w,o.ONE);d++)w=o.sqr(w);const p=o.pow(l,Ge<<BigInt(c-d-1));l=o.sqr(p),u=o.mul(u,p),h=o.mul(h,l),c=d}return u}}function Xb(t){if(t%Rh===Yb){const e=(t+Ge)/Rh;return function(r,i){const s=r.pow(i,e);if(!r.eql(r.sqr(s),i))throw new Error("Cannot find square root");return s}}if(t%Kp===Fp){const e=(t-Fp)/Kp;return function(r,i){const s=r.mul(i,ds),n=r.pow(s,e),o=r.mul(i,n),a=r.mul(r.mul(o,ds),n),c=r.mul(o,r.sub(a,r.ONE));if(!r.eql(r.sqr(c),i))throw new Error("Cannot find square root");return c}}return Jb(t)}const Qb=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function ey(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},r=Qb.reduce((i,s)=>(i[s]="function",i),e);return Qn(t,r)}function ty(t,e,r){if(r<ht)throw new Error("invalid exponent, negatives unsupported");if(r===ht)return t.ONE;if(r===Ge)return e;let i=t.ONE,s=e;for(;r>ht;)r&Ge&&(i=t.mul(i,s)),s=t.sqr(s),r>>=Ge;return i}function ry(t,e){const r=new Array(e.length),i=e.reduce((n,o,a)=>t.is0(o)?n:(r[a]=n,t.mul(n,o)),t.ONE),s=t.inv(i);return e.reduceRight((n,o,a)=>t.is0(o)?n:(r[a]=t.mul(n,r[a]),t.mul(n,o)),s),r}function ff(t,e){const r=e!==void 0?e:t.toString(2).length,i=Math.ceil(r/8);return{nBitLength:r,nByteLength:i}}function wf(t,e,r=!1,i={}){if(t<=ht)throw new Error("invalid field: expected ORDER > 0, got "+t);const{nBitLength:s,nByteLength:n}=ff(t,e);if(n>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let o;const a=Object.freeze({ORDER:t,isLE:r,BITS:s,BYTES:n,MASK:Od(s),ZERO:ht,ONE:Ge,create:c=>Ut(c,t),isValid:c=>{if(typeof c!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof c);return ht<=c&&c<t},is0:c=>c===ht,isOdd:c=>(c&Ge)===Ge,neg:c=>Ut(-c,t),eql:(c,l)=>c===l,sqr:c=>Ut(c*c,t),add:(c,l)=>Ut(c+l,t),sub:(c,l)=>Ut(c-l,t),mul:(c,l)=>Ut(c*l,t),pow:(c,l)=>ty(a,c,l),div:(c,l)=>Ut(c*Lh(l,t),t),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>Lh(c,t),sqrt:i.sqrt||(c=>(o||(o=Xb(t)),o(a,c))),invertBatch:c=>ry(a,c),cmov:(c,l,u)=>u?l:c,toBytes:c=>r?Ul(c,n):Mn(c,n),fromBytes:c=>{if(c.length!==n)throw new Error("Field.fromBytes: expected "+n+" bytes, got "+c.length);return r?oa(c):Cs(c)}});return Object.freeze(a)}function mf(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function vf(t){const e=mf(t);return e+Math.ceil(e/2)}function iy(t,e,r=!1){const i=t.length,s=mf(e),n=vf(e);if(i<16||i<n||i>1024)throw new Error("expected "+n+"-1024 bytes of input, got "+i);const o=r?oa(t):Cs(t),a=Ut(o,e-Ge)+Ge;return r?Ul(a,s):Mn(a,s)}const Zp=BigInt(0),sc=BigInt(1);function cu(t,e){const r=e.negate();return t?r:e}function bf(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function lu(t,e){bf(t,e);const r=Math.ceil(e/t)+1,i=2**(t-1);return{windows:r,windowSize:i}}function sy(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((r,i)=>{if(!(r instanceof e))throw new Error("invalid point at index "+i)})}function ny(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((r,i)=>{if(!e.isValid(r))throw new Error("invalid scalar at index "+i)})}const uu=new WeakMap,yf=new WeakMap;function hu(t){return yf.get(t)||1}function oy(t,e){return{constTimeNegate:cu,hasPrecomputes(r){return hu(r)!==1},unsafeLadder(r,i,s=t.ZERO){let n=r;for(;i>Zp;)i&sc&&(s=s.add(n)),n=n.double(),i>>=sc;return s},precomputeWindow(r,i){const{windows:s,windowSize:n}=lu(i,e),o=[];let a=r,c=a;for(let l=0;l<s;l++){c=a,o.push(c);for(let u=1;u<n;u++)c=c.add(a),o.push(c);a=c.double()}return o},wNAF(r,i,s){const{windows:n,windowSize:o}=lu(r,e);let a=t.ZERO,c=t.BASE;const l=BigInt(2**r-1),u=2**r,h=BigInt(r);for(let d=0;d<n;d++){const p=d*o;let w=Number(s&l);s>>=h,w>o&&(w-=u,s+=sc);const g=p,f=p+Math.abs(w)-1,m=d%2!==0,v=w<0;w===0?c=c.add(cu(m,i[g])):a=a.add(cu(v,i[f]))}return{p:a,f:c}},wNAFUnsafe(r,i,s,n=t.ZERO){const{windows:o,windowSize:a}=lu(r,e),c=BigInt(2**r-1),l=2**r,u=BigInt(r);for(let h=0;h<o;h++){const d=h*a;if(s===Zp)break;let p=Number(s&c);if(s>>=u,p>a&&(p-=l,s+=sc),p===0)continue;let w=i[d+Math.abs(p)-1];p<0&&(w=w.negate()),n=n.add(w)}return n},getPrecomputes(r,i,s){let n=uu.get(i);return n||(n=this.precomputeWindow(i,r),r!==1&&uu.set(i,s(n))),n},wNAFCached(r,i,s){const n=hu(r);return this.wNAF(n,this.getPrecomputes(n,r,s),i)},wNAFCachedUnsafe(r,i,s,n){const o=hu(r);return o===1?this.unsafeLadder(r,i,n):this.wNAFUnsafe(o,this.getPrecomputes(o,r,s),i,n)},setWindowSize(r,i){bf(i,e),yf.set(r,i),uu.delete(r)}}}function ay(t,e,r,i){if(sy(r,t),ny(i,e),r.length!==i.length)throw new Error("arrays of points and scalars must have equal length");const s=t.ZERO,n=df(BigInt(r.length)),o=n>12?n-3:n>4?n-2:n?2:1,a=(1<<o)-1,c=new Array(a+1).fill(s),l=Math.floor((e.BITS-1)/o)*o;let u=s;for(let h=l;h>=0;h-=o){c.fill(s);for(let p=0;p<i.length;p++){const w=i[p],g=Number(w>>BigInt(h)&BigInt(a));c[g]=c[g].add(r[p])}let d=s;for(let p=c.length-1,w=s;p>0;p--)w=w.add(c[p]),d=d.add(w);if(u=u.add(d),h!==0)for(let p=0;p<o;p++)u=u.double()}return u}function Cf(t){return ey(t.Fp),Qn(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...ff(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}BigInt(0),BigInt(1),BigInt(2),BigInt(8);const Ws=BigInt(0),du=BigInt(1);function cy(t){return Qn(t,{a:"bigint"},{montgomeryBits:"isSafeInteger",nByteLength:"isSafeInteger",adjustScalarBytes:"function",domain:"function",powPminus2:"function",Gu:"bigint"}),Object.freeze({...t})}function ly(t){const e=cy(t),{P:r}=e,i=v=>Ut(v,r),s=e.montgomeryBits,n=Math.ceil(s/8),o=e.nByteLength,a=e.adjustScalarBytes||(v=>v),c=e.powPminus2||(v=>gf(v,r-BigInt(2),r));function l(v,b,y){const $=i(v*(b-y));return b=i(b-$),y=i(y+$),[b,y]}const u=(e.a-BigInt(2))/BigInt(4);function h(v,b){hi("u",v,Ws,r),hi("scalar",b,Ws,r);const y=b,$=v;let _=du,P=Ws,k=v,S=du,U=Ws,L;for(let F=BigInt(s-1);F>=Ws;F--){const I=y>>F&du;U^=I,L=l(U,_,k),_=L[0],k=L[1],L=l(U,P,S),P=L[0],S=L[1],U=I;const E=_+P,x=i(E*E),T=_-P,O=i(T*T),R=x-O,B=k+S,z=k-S,K=i(z*E),se=i(B*T),re=K+se,ge=K-se;k=i(re*re),S=i($*i(ge*ge)),_=i(x*O),P=i(R*(x+i(u*R)))}L=l(U,_,k),_=L[0],k=L[1],L=l(U,P,S),P=L[0],S=L[1];const M=c(P);return i(_*M)}function d(v){return Ul(i(v),n)}function p(v){const b=Zt("u coordinate",v,n);return o===32&&(b[31]&=127),oa(b)}function w(v){const b=Zt("scalar",v),y=b.length;if(y!==n&&y!==o){let $=""+n+" or "+o;throw new Error("invalid scalar, expected "+$+" bytes, got "+y)}return oa(a(b))}function g(v,b){const y=p(b),$=w(v),_=h(y,$);if(_===Ws)throw new Error("invalid private or public key received");return d(_)}const f=d(e.Gu);function m(v){return g(v,f)}return{scalarMult:g,scalarMultBase:m,getSharedSecret:(v,b)=>g(v,b),getPublicKey:v=>m(v),utils:{randomPrivateKey:()=>e.randomBytes(e.nByteLength)},GuBytes:f}}const Uh=BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");BigInt(0);const uy=BigInt(1),Gp=BigInt(2),hy=BigInt(3),dy=BigInt(5);BigInt(8);function py(t){const e=BigInt(10),r=BigInt(20),i=BigInt(40),s=BigInt(80),n=Uh,o=t*t%n*t%n,a=Ir(o,Gp,n)*o%n,c=Ir(a,uy,n)*t%n,l=Ir(c,dy,n)*c%n,u=Ir(l,e,n)*l%n,h=Ir(u,r,n)*u%n,d=Ir(h,i,n)*h%n,p=Ir(d,s,n)*d%n,w=Ir(p,s,n)*d%n,g=Ir(w,e,n)*l%n;return{pow_p_5_8:Ir(g,Gp,n)*t%n,b2:o}}function gy(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}const Bh=ly({P:Uh,a:BigInt(486662),montgomeryBits:255,nByteLength:32,Gu:BigInt(9),powPminus2:t=>{const e=Uh,{pow_p_5_8:r,b2:i}=py(t);return Ut(Ir(r,hy,e)*i,e)},adjustScalarBytes:gy,randomBytes:Xn});function Yp(t){t.lowS!==void 0&&Ln("lowS",t.lowS),t.prehash!==void 0&&Ln("prehash",t.prehash)}function fy(t){const e=Cf(t);Qn(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:r,Fp:i,a:s}=e;if(r){if(!i.eql(s,i.ZERO))throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if(typeof r!="object"||typeof r.beta!="bigint"||typeof r.splitScalar!="function")throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:wy,hexToBytes:my}=Gb;let vy=class extends Error{constructor(e=""){super(e)}};const ai={Err:vy,_tlv:{encode:(t,e)=>{const{Err:r}=ai;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(e.length&1)throw new r("tlv.encode: unpadded data");const i=e.length/2,s=Sn(i);if(s.length/2&128)throw new r("tlv.encode: long form length too big");const n=i>127?Sn(s.length/2|128):"";return Sn(t)+n+s+e},decode(t,e){const{Err:r}=ai;let i=0;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(e.length<2||e[i++]!==t)throw new r("tlv.decode: wrong tlv");const s=e[i++],n=!!(s&128);let o=0;if(!n)o=s;else{const c=s&127;if(!c)throw new r("tlv.decode(long): indefinite length not supported");if(c>4)throw new r("tlv.decode(long): byte length is too big");const l=e.subarray(i,i+c);if(l.length!==c)throw new r("tlv.decode: length bytes not complete");if(l[0]===0)throw new r("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(i+=c,o<128)throw new r("tlv.decode(long): not minimal encoding")}const a=e.subarray(i,i+o);if(a.length!==o)throw new r("tlv.decode: wrong value length");return{v:a,l:e.subarray(i+o)}}},_int:{encode(t){const{Err:e}=ai;if(t<li)throw new e("integer: negative integers are not allowed");let r=Sn(t);if(Number.parseInt(r[0],16)&8&&(r="00"+r),r.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return r},decode(t){const{Err:e}=ai;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return wy(t)}},toSig(t){const{Err:e,_int:r,_tlv:i}=ai,s=typeof t=="string"?my(t):t;Ha(s);const{v:n,l:o}=i.decode(48,s);if(o.length)throw new e("invalid signature: left bytes after parsing");const{v:a,l:c}=i.decode(2,n),{v:l,l:u}=i.decode(2,c);if(u.length)throw new e("invalid signature: left bytes after parsing");return{r:r.decode(a),s:r.decode(l)}},hexFromSig(t){const{_tlv:e,_int:r}=ai,i=e.encode(2,r.encode(t.r)),s=e.encode(2,r.encode(t.s)),n=i+s;return e.encode(48,n)}},li=BigInt(0),at=BigInt(1);BigInt(2);const Jp=BigInt(3);BigInt(4);function by(t){const e=fy(t),{Fp:r}=e,i=wf(e.n,e.nBitLength),s=e.toBytes||((g,f,m)=>{const v=f.toAffine();return aa(Uint8Array.from([4]),r.toBytes(v.x),r.toBytes(v.y))}),n=e.fromBytes||(g=>{const f=g.subarray(1),m=r.fromBytes(f.subarray(0,r.BYTES)),v=r.fromBytes(f.subarray(r.BYTES,2*r.BYTES));return{x:m,y:v}});function o(g){const{a:f,b:m}=e,v=r.sqr(g),b=r.mul(v,g);return r.add(r.add(b,r.mul(g,f)),m)}if(!r.eql(r.sqr(e.Gy),o(e.Gx)))throw new Error("bad generator point: equation left != right");function a(g){return Bl(g,at,e.n)}function c(g){const{allowedPrivateKeyLengths:f,nByteLength:m,wrapPrivateKey:v,n:b}=e;if(f&&typeof g!="bigint"){if(Ps(g)&&(g=Un(g)),typeof g!="string"||!f.includes(g.length))throw new Error("invalid private key");g=g.padStart(m*2,"0")}let y;try{y=typeof g=="bigint"?g:Cs(Zt("private key",g,m))}catch{throw new Error("invalid private key, expected hex or "+m+" bytes, got "+typeof g)}return v&&(y=Ut(y,b)),hi("private key",y,at,b),y}function l(g){if(!(g instanceof d))throw new Error("ProjectivePoint expected")}const u=Th((g,f)=>{const{px:m,py:v,pz:b}=g;if(r.eql(b,r.ONE))return{x:m,y:v};const y=g.is0();f==null&&(f=y?r.ONE:r.inv(b));const $=r.mul(m,f),_=r.mul(v,f),P=r.mul(b,f);if(y)return{x:r.ZERO,y:r.ZERO};if(!r.eql(P,r.ONE))throw new Error("invZ was invalid");return{x:$,y:_}}),h=Th(g=>{if(g.is0()){if(e.allowInfinityPoint&&!r.is0(g.py))return;throw new Error("bad point: ZERO")}const{x:f,y:m}=g.toAffine();if(!r.isValid(f)||!r.isValid(m))throw new Error("bad point: x or y not FE");const v=r.sqr(m),b=o(f);if(!r.eql(v,b))throw new Error("bad point: equation left != right");if(!g.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class d{constructor(f,m,v){if(this.px=f,this.py=m,this.pz=v,f==null||!r.isValid(f))throw new Error("x required");if(m==null||!r.isValid(m))throw new Error("y required");if(v==null||!r.isValid(v))throw new Error("z required");Object.freeze(this)}static fromAffine(f){const{x:m,y:v}=f||{};if(!f||!r.isValid(m)||!r.isValid(v))throw new Error("invalid affine point");if(f instanceof d)throw new Error("projective point not allowed");const b=y=>r.eql(y,r.ZERO);return b(m)&&b(v)?d.ZERO:new d(m,v,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(f){const m=r.invertBatch(f.map(v=>v.pz));return f.map((v,b)=>v.toAffine(m[b])).map(d.fromAffine)}static fromHex(f){const m=d.fromAffine(n(Zt("pointHex",f)));return m.assertValidity(),m}static fromPrivateKey(f){return d.BASE.multiply(c(f))}static msm(f,m){return ay(d,i,f,m)}_setWindowSize(f){w.setWindowSize(this,f)}assertValidity(){h(this)}hasEvenY(){const{y:f}=this.toAffine();if(r.isOdd)return!r.isOdd(f);throw new Error("Field doesn't support isOdd")}equals(f){l(f);const{px:m,py:v,pz:b}=this,{px:y,py:$,pz:_}=f,P=r.eql(r.mul(m,_),r.mul(y,b)),k=r.eql(r.mul(v,_),r.mul($,b));return P&&k}negate(){return new d(this.px,r.neg(this.py),this.pz)}double(){const{a:f,b:m}=e,v=r.mul(m,Jp),{px:b,py:y,pz:$}=this;let _=r.ZERO,P=r.ZERO,k=r.ZERO,S=r.mul(b,b),U=r.mul(y,y),L=r.mul($,$),M=r.mul(b,y);return M=r.add(M,M),k=r.mul(b,$),k=r.add(k,k),_=r.mul(f,k),P=r.mul(v,L),P=r.add(_,P),_=r.sub(U,P),P=r.add(U,P),P=r.mul(_,P),_=r.mul(M,_),k=r.mul(v,k),L=r.mul(f,L),M=r.sub(S,L),M=r.mul(f,M),M=r.add(M,k),k=r.add(S,S),S=r.add(k,S),S=r.add(S,L),S=r.mul(S,M),P=r.add(P,S),L=r.mul(y,$),L=r.add(L,L),S=r.mul(L,M),_=r.sub(_,S),k=r.mul(L,U),k=r.add(k,k),k=r.add(k,k),new d(_,P,k)}add(f){l(f);const{px:m,py:v,pz:b}=this,{px:y,py:$,pz:_}=f;let P=r.ZERO,k=r.ZERO,S=r.ZERO;const U=e.a,L=r.mul(e.b,Jp);let M=r.mul(m,y),F=r.mul(v,$),I=r.mul(b,_),E=r.add(m,v),x=r.add(y,$);E=r.mul(E,x),x=r.add(M,F),E=r.sub(E,x),x=r.add(m,b);let T=r.add(y,_);return x=r.mul(x,T),T=r.add(M,I),x=r.sub(x,T),T=r.add(v,b),P=r.add($,_),T=r.mul(T,P),P=r.add(F,I),T=r.sub(T,P),S=r.mul(U,x),P=r.mul(L,I),S=r.add(P,S),P=r.sub(F,S),S=r.add(F,S),k=r.mul(P,S),F=r.add(M,M),F=r.add(F,M),I=r.mul(U,I),x=r.mul(L,x),F=r.add(F,I),I=r.sub(M,I),I=r.mul(U,I),x=r.add(x,I),M=r.mul(F,x),k=r.add(k,M),M=r.mul(T,x),P=r.mul(E,P),P=r.sub(P,M),M=r.mul(E,F),S=r.mul(T,S),S=r.add(S,M),new d(P,k,S)}subtract(f){return this.add(f.negate())}is0(){return this.equals(d.ZERO)}wNAF(f){return w.wNAFCached(this,f,d.normalizeZ)}multiplyUnsafe(f){const{endo:m,n:v}=e;hi("scalar",f,li,v);const b=d.ZERO;if(f===li)return b;if(this.is0()||f===at)return this;if(!m||w.hasPrecomputes(this))return w.wNAFCachedUnsafe(this,f,d.normalizeZ);let{k1neg:y,k1:$,k2neg:_,k2:P}=m.splitScalar(f),k=b,S=b,U=this;for(;$>li||P>li;)$&at&&(k=k.add(U)),P&at&&(S=S.add(U)),U=U.double(),$>>=at,P>>=at;return y&&(k=k.negate()),_&&(S=S.negate()),S=new d(r.mul(S.px,m.beta),S.py,S.pz),k.add(S)}multiply(f){const{endo:m,n:v}=e;hi("scalar",f,at,v);let b,y;if(m){const{k1neg:$,k1:_,k2neg:P,k2:k}=m.splitScalar(f);let{p:S,f:U}=this.wNAF(_),{p:L,f:M}=this.wNAF(k);S=w.constTimeNegate($,S),L=w.constTimeNegate(P,L),L=new d(r.mul(L.px,m.beta),L.py,L.pz),b=S.add(L),y=U.add(M)}else{const{p:$,f:_}=this.wNAF(f);b=$,y=_}return d.normalizeZ([b,y])[0]}multiplyAndAddUnsafe(f,m,v){const b=d.BASE,y=(_,P)=>P===li||P===at||!_.equals(b)?_.multiplyUnsafe(P):_.multiply(P),$=y(this,m).add(y(f,v));return $.is0()?void 0:$}toAffine(f){return u(this,f)}isTorsionFree(){const{h:f,isTorsionFree:m}=e;if(f===at)return!0;if(m)return m(d,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:f,clearCofactor:m}=e;return f===at?this:m?m(d,this):this.multiplyUnsafe(e.h)}toRawBytes(f=!0){return Ln("isCompressed",f),this.assertValidity(),s(d,this,f)}toHex(f=!0){return Ln("isCompressed",f),Un(this.toRawBytes(f))}}d.BASE=new d(e.Gx,e.Gy,r.ONE),d.ZERO=new d(r.ZERO,r.ONE,r.ZERO);const p=e.nBitLength,w=oy(d,e.endo?Math.ceil(p/2):p);return{CURVE:e,ProjectivePoint:d,normPrivateKeyToScalar:c,weierstrassEquation:o,isWithinCurveOrder:a}}function yy(t){const e=Cf(t);return Qn(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function Cy(t){const e=yy(t),{Fp:r,n:i}=e,s=r.BYTES+1,n=2*r.BYTES+1;function o(I){return Ut(I,i)}function a(I){return Lh(I,i)}const{ProjectivePoint:c,normPrivateKeyToScalar:l,weierstrassEquation:u,isWithinCurveOrder:h}=by({...e,toBytes(I,E,x){const T=E.toAffine(),O=r.toBytes(T.x),R=aa;return Ln("isCompressed",x),x?R(Uint8Array.from([E.hasEvenY()?2:3]),O):R(Uint8Array.from([4]),O,r.toBytes(T.y))},fromBytes(I){const E=I.length,x=I[0],T=I.subarray(1);if(E===s&&(x===2||x===3)){const O=Cs(T);if(!Bl(O,at,r.ORDER))throw new Error("Point is not on curve");const R=u(O);let B;try{B=r.sqrt(R)}catch(K){const se=K instanceof Error?": "+K.message:"";throw new Error("Point is not on curve"+se)}const z=(B&at)===at;return(x&1)===1!==z&&(B=r.neg(B)),{x:O,y:B}}else if(E===n&&x===4){const O=r.fromBytes(T.subarray(0,r.BYTES)),R=r.fromBytes(T.subarray(r.BYTES,2*r.BYTES));return{x:O,y:R}}else{const O=s,R=n;throw new Error("invalid Point, expected length of "+O+", or uncompressed "+R+", got "+E)}}}),d=I=>Un(Mn(I,e.nByteLength));function p(I){const E=i>>at;return I>E}function w(I){return p(I)?o(-I):I}const g=(I,E,x)=>Cs(I.slice(E,x));class f{constructor(E,x,T){this.r=E,this.s=x,this.recovery=T,this.assertValidity()}static fromCompact(E){const x=e.nByteLength;return E=Zt("compactSignature",E,x*2),new f(g(E,0,x),g(E,x,2*x))}static fromDER(E){const{r:x,s:T}=ai.toSig(Zt("DER",E));return new f(x,T)}assertValidity(){hi("r",this.r,at,i),hi("s",this.s,at,i)}addRecoveryBit(E){return new f(this.r,this.s,E)}recoverPublicKey(E){const{r:x,s:T,recovery:O}=this,R=_(Zt("msgHash",E));if(O==null||![0,1,2,3].includes(O))throw new Error("recovery id invalid");const B=O===2||O===3?x+e.n:x;if(B>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");const z=(O&1)===0?"02":"03",K=c.fromHex(z+d(B)),se=a(B),re=o(-R*se),ge=o(T*se),be=c.BASE.multiplyAndAddUnsafe(K,re,ge);if(!be)throw new Error("point at infinify");return be.assertValidity(),be}hasHighS(){return p(this.s)}normalizeS(){return this.hasHighS()?new f(this.r,o(-this.s),this.recovery):this}toDERRawBytes(){return Bn(this.toDERHex())}toDERHex(){return ai.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Bn(this.toCompactHex())}toCompactHex(){return d(this.r)+d(this.s)}}const m={isValidPrivateKey(I){try{return l(I),!0}catch{return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>{const I=vf(e.n);return iy(e.randomBytes(I),e.n)},precompute(I=8,E=c.BASE){return E._setWindowSize(I),E.multiply(BigInt(3)),E}};function v(I,E=!0){return c.fromPrivateKey(I).toRawBytes(E)}function b(I){const E=Ps(I),x=typeof I=="string",T=(E||x)&&I.length;return E?T===s||T===n:x?T===2*s||T===2*n:I instanceof c}function y(I,E,x=!0){if(b(I))throw new Error("first arg must be private key");if(!b(E))throw new Error("second arg must be public key");return c.fromHex(E).multiply(l(I)).toRawBytes(x)}const $=e.bits2int||function(I){if(I.length>8192)throw new Error("input is too large");const E=Cs(I),x=I.length*8-e.nBitLength;return x>0?E>>BigInt(x):E},_=e.bits2int_modN||function(I){return o($(I))},P=Od(e.nBitLength);function k(I){return hi("num < 2^"+e.nBitLength,I,li,P),Mn(I,e.nByteLength)}function S(I,E,x=U){if(["recovered","canonical"].some(xe=>xe in x))throw new Error("sign() legacy options not supported");const{hash:T,randomBytes:O}=e;let{lowS:R,prehash:B,extraEntropy:z}=x;R==null&&(R=!0),I=Zt("msgHash",I),Yp(x),B&&(I=Zt("prehashed msgHash",T(I)));const K=_(I),se=l(E),re=[k(se),k(K)];if(z!=null&&z!==!1){const xe=z===!0?O(r.BYTES):z;re.push(Zt("extraEntropy",xe))}const ge=aa(...re),be=K;function Le(xe){const ye=$(xe);if(!h(ye))return;const je=a(ye),Ve=c.BASE.multiply(ye).toAffine(),Fe=o(Ve.x);if(Fe===li)return;const Ze=o(je*o(be+Fe*se));if(Ze===li)return;let xt=(Ve.x===Fe?0:2)|Number(Ve.y&at),Wi=Ze;return R&&p(Ze)&&(Wi=w(Ze),xt^=1),new f(Fe,Wi,xt)}return{seed:ge,k2sig:Le}}const U={lowS:e.lowS,prehash:!1},L={lowS:e.lowS,prehash:!1};function M(I,E,x=U){const{seed:T,k2sig:O}=S(I,E,x),R=e;return pf(R.hash.outputLen,R.nByteLength,R.hmac)(T,O)}c.BASE._setWindowSize(8);function F(I,E,x,T=L){var Ze;const O=I;E=Zt("msgHash",E),x=Zt("publicKey",x);const{lowS:R,prehash:B,format:z}=T;if(Yp(T),"strict"in T)throw new Error("options.strict was renamed to lowS");if(z!==void 0&&z!=="compact"&&z!=="der")throw new Error("format must be compact or der");const K=typeof O=="string"||Ps(O),se=!K&&!z&&typeof O=="object"&&O!==null&&typeof O.r=="bigint"&&typeof O.s=="bigint";if(!K&&!se)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let re,ge;try{if(se&&(re=new f(O.r,O.s)),K){try{z!=="compact"&&(re=f.fromDER(O))}catch(xt){if(!(xt instanceof ai.Err))throw xt}!re&&z!=="der"&&(re=f.fromCompact(O))}ge=c.fromHex(x)}catch{return!1}if(!re||R&&re.hasHighS())return!1;B&&(E=e.hash(E));const{r:be,s:Le}=re,xe=_(E),ye=a(Le),je=o(xe*ye),Ve=o(be*ye),Fe=(Ze=c.BASE.multiplyAndAddUnsafe(ge,je,Ve))==null?void 0:Ze.toAffine();return Fe?o(Fe.x)===be:!1}return{CURVE:e,getPublicKey:v,getSharedSecret:y,sign:M,verify:F,ProjectivePoint:c,Signature:f,utils:m}}function Ey(t){return{hash:t,hmac:(e,...r)=>Tl(t,e,Sv(...r)),randomBytes:Xn}}function xy(t,e){const r=i=>Cy({...t,...Ey(i)});return{...r(e),create:r}}const Ef=wf(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff")),Iy=Ef.create(BigInt("-3")),Ay=BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"),Sy=xy({a:Iy,b:Ay,Fp:Ef,n:BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),Gx:BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),Gy:BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),h:BigInt(1),lowS:!1},qa),xf="base10",St="base16",Sr="base64pad",ki="base64url",Wa="utf8",If=0,di=1,Va=2,_y=0,Xp=1,Zo=12,Td=32;function $y(){const t=Bh.utils.randomPrivateKey(),e=Bh.getPublicKey(t);return{privateKey:Dt(t,St),publicKey:Dt(e,St)}}function Mh(){const t=Xn(Td);return Dt(t,St)}function ky(t,e){const r=Bh.getSharedSecret(pr(t,St),pr(e,St)),i=Tb(qa,r,void 0,void 0,Td);return Dt(i,St)}function il(t){const e=qa(pr(t,St));return Dt(e,St)}function zr(t){const e=qa(pr(t,Wa));return Dt(e,St)}function Af(t){return pr(`${t}`,xf)}function Os(t){return Number(Dt(t,xf))}function Sf(t){return t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}function _f(t){const e=t.replace(/-/g,"+").replace(/_/g,"/"),r=(4-e.length%4)%4;return e+"=".repeat(r)}function Ny(t){const e=Af(typeof t.type<"u"?t.type:If);if(Os(e)===di&&typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const r=typeof t.senderPublicKey<"u"?pr(t.senderPublicKey,St):void 0,i=typeof t.iv<"u"?pr(t.iv,St):Xn(Zo),s=pr(t.symKey,St),n=uf(s,i).encrypt(pr(t.message,Wa)),o=$f({type:e,sealed:n,iv:i,senderPublicKey:r});return t.encoding===ki?Sf(o):o}function Py(t){const e=pr(t.symKey,St),{sealed:r,iv:i}=ca({encoded:t.encoded,encoding:t.encoding}),s=uf(e,i).decrypt(r);if(s===null)throw new Error("Failed to decrypt");return Dt(s,Wa)}function Oy(t,e){const r=Af(Va),i=Xn(Zo),s=pr(t,Wa),n=$f({type:r,sealed:s,iv:i});return e===ki?Sf(n):n}function Ty(t,e){const{sealed:r}=ca({encoded:t,encoding:e});return Dt(r,Wa)}function $f(t){if(Os(t.type)===Va)return Dt(Ko([t.type,t.sealed]),Sr);if(Os(t.type)===di){if(typeof t.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return Dt(Ko([t.type,t.senderPublicKey,t.iv,t.sealed]),Sr)}return Dt(Ko([t.type,t.iv,t.sealed]),Sr)}function ca(t){const e=(t.encoding||Sr)===ki?_f(t.encoded):t.encoded,r=pr(e,Sr),i=r.slice(_y,Xp),s=Xp;if(Os(i)===di){const c=s+Td,l=c+Zo,u=r.slice(s,c),h=r.slice(c,l),d=r.slice(l);return{type:i,sealed:d,iv:h,senderPublicKey:u}}if(Os(i)===Va){const c=r.slice(s),l=Xn(Zo);return{type:i,sealed:c,iv:l}}const n=s+Zo,o=r.slice(s,n),a=r.slice(n);return{type:i,sealed:a,iv:o}}function Ry(t,e){const r=ca({encoded:t,encoding:e==null?void 0:e.encoding});return kf({type:Os(r.type),senderPublicKey:typeof r.senderPublicKey<"u"?Dt(r.senderPublicKey,St):void 0,receiverPublicKey:e==null?void 0:e.receiverPublicKey})}function kf(t){const e=(t==null?void 0:t.type)||If;if(e===di){if(typeof(t==null?void 0:t.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(t==null?void 0:t.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:e,senderPublicKey:t==null?void 0:t.senderPublicKey,receiverPublicKey:t==null?void 0:t.receiverPublicKey}}function Qp(t){return t.type===di&&typeof t.senderPublicKey=="string"&&typeof t.receiverPublicKey=="string"}function e0(t){return t.type===Va}function Ly(t){const e=Buffer.from(t.x,"base64"),r=Buffer.from(t.y,"base64");return Ko([new Uint8Array([4]),e,r])}function Uy(t,e){const[r,i,s]=t.split("."),n=Buffer.from(_f(s),"base64");if(n.length!==64)throw new Error("Invalid signature length");const o=n.slice(0,32),a=n.slice(32,64),c=`${r}.${i}`,l=qa(c),u=Ly(e);if(!Sy.verify(Ko([o,a]),l,u))throw new Error("Invalid signature");return Ih(t).payload}const By="irn";function hl(t){return(t==null?void 0:t.relay)||{protocol:By}}function Do(t){const e=Fm[t];if(typeof e>"u")throw new Error(`Relay Protocol not supported: ${t}`);return e}function My(t,e="-"){const r={},i="relay"+e;return Object.keys(t).forEach(s=>{if(s.startsWith(i)){const n=s.replace(i,""),o=t[s];r[n]=o}}),r}function t0(t){if(!t.includes("wc:")){const l=Yg(t);l!=null&&l.includes("wc:")&&(t=l)}t=t.includes("wc://")?t.replace("wc://",""):t,t=t.includes("wc:")?t.replace("wc:",""):t;const e=t.indexOf(":"),r=t.indexOf("?")!==-1?t.indexOf("?"):void 0,i=t.substring(0,e),s=t.substring(e+1,r).split("@"),n=typeof r<"u"?t.substring(r):"",o=new URLSearchParams(n),a={};o.forEach((l,u)=>{a[u]=l});const c=typeof a.methods=="string"?a.methods.split(","):void 0;return{protocol:i,topic:Dy(s[0]),version:parseInt(s[1],10),symKey:a.symKey,relay:My(a),methods:c,expiryTimestamp:a.expiryTimestamp?parseInt(a.expiryTimestamp,10):void 0}}function Dy(t){return t.startsWith("//")?t.substring(2):t}function jy(t,e="-"){const r="relay",i={};return Object.keys(t).forEach(s=>{const n=s,o=r+e+n;t[n]&&(i[o]=t[n])}),i}function r0(t){const e=new URLSearchParams,r=jy(t.relay);Object.keys(r).sort().forEach(s=>{e.set(s,r[s])}),e.set("symKey",t.symKey),t.expiryTimestamp&&e.set("expiryTimestamp",t.expiryTimestamp.toString()),t.methods&&e.set("methods",t.methods.join(","));const i=e.toString();return`${t.protocol}:${t.topic}@${t.version}?${i}`}function nc(t,e,r){return`${t}?wc_ev=${r}&topic=${e}`}function eo(t){const e=[];return t.forEach(r=>{const[i,s]=r.split(":");e.push(`${i}:${s}`)}),e}function zy(t){const e=[];return Object.values(t).forEach(r=>{e.push(...eo(r.accounts))}),e}function qy(t,e){const r=[];return Object.values(t).forEach(i=>{eo(i.accounts).includes(e)&&r.push(...i.methods)}),r}function Hy(t,e){const r=[];return Object.values(t).forEach(i=>{eo(i.accounts).includes(e)&&r.push(...i.events)}),r}function Rd(t){return t.includes(":")}function jo(t){return Rd(t)?t.split(":")[0]:t}function Wy(t){const e={};return t==null||t.forEach(r=>{var i;const[s,n]=r.split(":");e[s]||(e[s]={accounts:[],chains:[],events:[],methods:[]}),e[s].accounts.push(r),(i=e[s].chains)==null||i.push(`${s}:${n}`)}),e}function i0(t,e){e=e.map(i=>i.replace("did:pkh:",""));const r=Wy(e);for(const[i,s]of Object.entries(r))s.methods?s.methods=tl(s.methods,t):s.methods=t,s.events=["chainChanged","accountsChanged"];return r}const Vy={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},Fy={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function q(t,e){const{message:r,code:i}=Fy[t];return{message:e?`${r} ${e}`:r,code:i}}function Re(t,e){const{message:r,code:i}=Vy[t];return{message:e?`${r} ${e}`:r,code:i}}function _r(t,e){return!!Array.isArray(t)}function la(t){return Object.getPrototypeOf(t)===Object.prototype&&Object.keys(t).length}function mt(t){return typeof t>"u"}function Qe(t,e){return e&&mt(t)?!0:typeof t=="string"&&!!t.trim().length}function Ld(t,e){return e&&mt(t)?!0:typeof t=="number"&&!isNaN(t)}function Ky(t,e){const{requiredNamespaces:r}=e,i=Object.keys(t.namespaces),s=Object.keys(r);let n=!0;return vs(s,i)?(i.forEach(o=>{const{accounts:a,methods:c,events:l}=t.namespaces[o],u=eo(a),h=r[o];(!vs(Vg(o,h),u)||!vs(h.methods,c)||!vs(h.events,l))&&(n=!1)}),n):!1}function dl(t){return Qe(t,!1)&&t.includes(":")?t.split(":").length===2:!1}function Zy(t){if(Qe(t,!1)&&t.includes(":")){const e=t.split(":");if(e.length===3){const r=e[0]+":"+e[1];return!!e[2]&&dl(r)}}return!1}function Gy(t){function e(r){try{return typeof new URL(r)<"u"}catch{return!1}}try{if(Qe(t,!1)){if(e(t))return!0;const r=Yg(t);return e(r)}}catch{}return!1}function Yy(t){var e;return(e=t==null?void 0:t.proposer)==null?void 0:e.publicKey}function Jy(t){return t==null?void 0:t.topic}function Xy(t,e){let r=null;return Qe(t==null?void 0:t.publicKey,!1)||(r=q("MISSING_OR_INVALID",`${e} controller public key should be a string`)),r}function s0(t){let e=!0;return _r(t)?t.length&&(e=t.every(r=>Qe(r,!1))):e=!1,e}function Qy(t,e,r){let i=null;return _r(e)&&e.length?e.forEach(s=>{i||dl(s)||(i=Re("UNSUPPORTED_CHAINS",`${r}, chain ${s} should be a string and conform to "namespace:chainId" format`))}):dl(t)||(i=Re("UNSUPPORTED_CHAINS",`${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),i}function e3(t,e,r){let i=null;return Object.entries(t).forEach(([s,n])=>{if(i)return;const o=Qy(s,Vg(s,n),`${e} ${r}`);o&&(i=o)}),i}function t3(t,e){let r=null;return _r(t)?t.forEach(i=>{r||Zy(i)||(r=Re("UNSUPPORTED_ACCOUNTS",`${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`))}):r=Re("UNSUPPORTED_ACCOUNTS",`${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),r}function r3(t,e){let r=null;return Object.values(t).forEach(i=>{if(r)return;const s=t3(i==null?void 0:i.accounts,`${e} namespace`);s&&(r=s)}),r}function i3(t,e){let r=null;return s0(t==null?void 0:t.methods)?s0(t==null?void 0:t.events)||(r=Re("UNSUPPORTED_EVENTS",`${e}, events should be an array of strings or empty array for no events`)):r=Re("UNSUPPORTED_METHODS",`${e}, methods should be an array of strings or empty array for no methods`),r}function Nf(t,e){let r=null;return Object.values(t).forEach(i=>{if(r)return;const s=i3(i,`${e}, namespace`);s&&(r=s)}),r}function s3(t,e,r){let i=null;if(t&&la(t)){const s=Nf(t,e);s&&(i=s);const n=e3(t,e,r);n&&(i=n)}else i=q("MISSING_OR_INVALID",`${e}, ${r} should be an object with data`);return i}function pu(t,e){let r=null;if(t&&la(t)){const i=Nf(t,e);i&&(r=i);const s=r3(t,e);s&&(r=s)}else r=q("MISSING_OR_INVALID",`${e}, namespaces should be an object with data`);return r}function Pf(t){return Qe(t.protocol,!0)}function n3(t,e){let r=!1;return t?t&&_r(t)&&t.length&&t.forEach(i=>{r=Pf(i)}):r=!0,r}function o3(t){return typeof t=="number"}function Lt(t){return typeof t<"u"&&typeof t!==null}function a3(t){return!(!t||typeof t!="object"||!t.code||!Ld(t.code,!1)||!t.message||!Qe(t.message,!1))}function c3(t){return!(mt(t)||!Qe(t.method,!1))}function l3(t){return!(mt(t)||mt(t.result)&&mt(t.error)||!Ld(t.id,!1)||!Qe(t.jsonrpc,!1))}function u3(t){return!(mt(t)||!Qe(t.name,!1))}function n0(t,e){return!(!dl(e)||!zy(t).includes(e))}function h3(t,e,r){return Qe(r,!1)?qy(t,e).includes(r):!1}function d3(t,e,r){return Qe(r,!1)?Hy(t,e).includes(r):!1}function o0(t,e,r){let i=null;const s=p3(t),n=g3(e),o=Object.keys(s),a=Object.keys(n),c=a0(Object.keys(t)),l=a0(Object.keys(e)),u=c.filter(h=>!l.includes(h));return u.length&&(i=q("NON_CONFORMING_NAMESPACES",`${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(e).toString()}`)),vs(o,a)||(i=q("NON_CONFORMING_NAMESPACES",`${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)),Object.keys(e).forEach(h=>{if(!h.includes(":")||i)return;const d=eo(e[h].accounts);d.includes(h)||(i=q("NON_CONFORMING_NAMESPACES",`${r} namespaces accounts don't satisfy namespace accounts for ${h}
        Required: ${h}
        Approved: ${d.toString()}`))}),o.forEach(h=>{i||(vs(s[h].methods,n[h].methods)?vs(s[h].events,n[h].events)||(i=q("NON_CONFORMING_NAMESPACES",`${r} namespaces events don't satisfy namespace events for ${h}`)):i=q("NON_CONFORMING_NAMESPACES",`${r} namespaces methods don't satisfy namespace methods for ${h}`))}),i}function p3(t){const e={};return Object.keys(t).forEach(r=>{var i;r.includes(":")?e[r]=t[r]:(i=t[r].chains)==null||i.forEach(s=>{e[s]={methods:t[r].methods,events:t[r].events}})}),e}function a0(t){return[...new Set(t.map(e=>e.includes(":")?e.split(":")[0]:e))]}function g3(t){const e={};return Object.keys(t).forEach(r=>{if(r.includes(":"))e[r]=t[r];else{const i=eo(t[r].accounts);i==null||i.forEach(s=>{e[s]={accounts:t[r].accounts.filter(n=>n.includes(`${s}:`)),methods:t[r].methods,events:t[r].events}})}}),e}function f3(t,e){return Ld(t,!1)&&t<=e.max&&t>=e.min}function c0(){const t=ja();return new Promise(e=>{switch(t){case Jt.browser:e(w3());break;case Jt.reactNative:e(m3());break;case Jt.node:e(v3());break;default:e(!0)}})}function w3(){return Da()&&(navigator==null?void 0:navigator.onLine)}async function m3(){if(qi()&&typeof global<"u"&&global!=null&&global.NetInfo){const t=await(global==null?void 0:global.NetInfo.fetch());return t==null?void 0:t.isConnected}return!0}function v3(){return!0}function b3(t){switch(ja()){case Jt.browser:y3(t);break;case Jt.reactNative:C3(t);break}}function y3(t){!qi()&&Da()&&(window.addEventListener("online",()=>t(!0)),window.addEventListener("offline",()=>t(!1)))}function C3(t){qi()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(e=>t(e==null?void 0:e.isConnected)))}const gu={};let ao=class{static get(e){return gu[e]}static set(e,r){gu[e]=r}static delete(e){delete gu[e]}};var E3=Object.defineProperty,x3=(t,e,r)=>e in t?E3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,l0=(t,e,r)=>x3(t,typeof e!="symbol"?e+"":e,r);let I3=class extends Gn{constructor(e){super(),this.opts=e,l0(this,"protocol","wc"),l0(this,"version",2)}};var A3=Object.defineProperty,S3=(t,e,r)=>e in t?A3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,_3=(t,e,r)=>S3(t,e+"",r);let $3=class extends Gn{constructor(e,r){super(),this.core=e,this.logger=r,_3(this,"records",new Map)}},k3=class{constructor(e,r){this.logger=e,this.core=r}};class N3 extends Gn{constructor(e,r){super(),this.relayer=e,this.logger=r}}let P3=class extends Gn{constructor(e){super()}},O3=class{constructor(e,r,i,s){this.core=e,this.logger=r,this.name=i}},T3=class extends Gn{constructor(e,r){super(),this.relayer=e,this.logger=r}},R3=class extends Gn{constructor(e,r){super(),this.core=e,this.logger=r}},L3=class{constructor(e,r,i){this.core=e,this.logger=r,this.store=i}},U3=class{constructor(e,r){this.projectId=e,this.logger=r}},B3=class{constructor(e,r,i){this.core=e,this.logger=r,this.telemetryEnabled=i}};var M3=Object.defineProperty,D3=(t,e,r)=>e in t?M3(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,u0=(t,e,r)=>D3(t,typeof e!="symbol"?e+"":e,r);let j3=class{constructor(e){this.opts=e,u0(this,"protocol","wc"),u0(this,"version",2)}},z3=class{constructor(e){this.client=e}};var q3={};const Of="wc",Tf=2,Dh="core",Vr=`${Of}@2:${Dh}:`,H3={logger:"error"},W3={database:":memory:"},V3="crypto",h0="client_ed25519_seed",F3=V.ONE_DAY,K3="keychain",Z3="0.3",G3="messages",Y3="0.3",d0=V.SIX_HOURS,J3="publisher",Rf="irn",X3="error",Lf="wss://relay.walletconnect.org",Q3="relayer",ut={message:"relayer_message",message_ack:"relayer_message_ack",connect:"relayer_connect",disconnect:"relayer_disconnect",error:"relayer_error",connection_stalled:"relayer_connection_stalled",transport_closed:"relayer_transport_closed",publish:"relayer_publish"},e5="_subscription",tr={payload:"payload",connect:"connect",disconnect:"disconnect",error:"error"},t5=.1,jh="2.19.2",We={link_mode:"link_mode",relay:"relay"},sl={inbound:"inbound",outbound:"outbound"},r5="0.3",i5="WALLETCONNECT_CLIENT_ID",p0="WALLETCONNECT_LINK_MODE_APPS",Kt={created:"subscription_created",deleted:"subscription_deleted",expired:"subscription_expired",disabled:"subscription_disabled",sync:"subscription_sync",resubscribed:"subscription_resubscribed"},s5="subscription",n5="0.3",o5="pairing",a5="0.3",co={wc_pairingDelete:{req:{ttl:V.ONE_DAY,prompt:!1,tag:1e3},res:{ttl:V.ONE_DAY,prompt:!1,tag:1001}},wc_pairingPing:{req:{ttl:V.THIRTY_SECONDS,prompt:!1,tag:1002},res:{ttl:V.THIRTY_SECONDS,prompt:!1,tag:1003}},unregistered_method:{req:{ttl:V.ONE_DAY,prompt:!1,tag:0},res:{ttl:V.ONE_DAY,prompt:!1,tag:0}}},ps={create:"pairing_create",expire:"pairing_expire",delete:"pairing_delete",ping:"pairing_ping"},wr={created:"history_created",updated:"history_updated",deleted:"history_deleted",sync:"history_sync"},c5="history",l5="0.3",u5="expirer",dr={created:"expirer_created",deleted:"expirer_deleted",expired:"expirer_expired",sync:"expirer_sync"},h5="0.3",d5="verify-api",p5="https://verify.walletconnect.com",Uf="https://verify.walletconnect.org",Go=Uf,g5=`${Go}/v3`,f5=[p5,Uf],w5="echo",m5="https://echo.walletconnect.com",Mr={pairing_started:"pairing_started",pairing_uri_validation_success:"pairing_uri_validation_success",pairing_uri_not_expired:"pairing_uri_not_expired",store_new_pairing:"store_new_pairing",subscribing_pairing_topic:"subscribing_pairing_topic",subscribe_pairing_topic_success:"subscribe_pairing_topic_success",existing_pairing:"existing_pairing",pairing_not_expired:"pairing_not_expired",emit_inactive_pairing:"emit_inactive_pairing",emit_session_proposal:"emit_session_proposal",subscribing_to_pairing_topic:"subscribing_to_pairing_topic"},oi={no_wss_connection:"no_wss_connection",no_internet_connection:"no_internet_connection",malformed_pairing_uri:"malformed_pairing_uri",active_pairing_already_exists:"active_pairing_already_exists",subscribe_pairing_topic_failure:"subscribe_pairing_topic_failure",pairing_expired:"pairing_expired",proposal_expired:"proposal_expired",proposal_listener_not_found:"proposal_listener_not_found"},mr={session_approve_started:"session_approve_started",proposal_not_expired:"proposal_not_expired",session_namespaces_validation_success:"session_namespaces_validation_success",create_session_topic:"create_session_topic",subscribing_session_topic:"subscribing_session_topic",subscribe_session_topic_success:"subscribe_session_topic_success",publishing_session_approve:"publishing_session_approve",session_approve_publish_success:"session_approve_publish_success",store_session:"store_session",publishing_session_settle:"publishing_session_settle",session_settle_publish_success:"session_settle_publish_success"},Vi={no_internet_connection:"no_internet_connection",no_wss_connection:"no_wss_connection",proposal_expired:"proposal_expired",subscribe_session_topic_failure:"subscribe_session_topic_failure",session_approve_publish_failure:"session_approve_publish_failure",session_settle_publish_failure:"session_settle_publish_failure",session_approve_namespace_validation_failure:"session_approve_namespace_validation_failure",proposal_not_found:"proposal_not_found"},Fi={authenticated_session_approve_started:"authenticated_session_approve_started",create_authenticated_session_topic:"create_authenticated_session_topic",cacaos_verified:"cacaos_verified",store_authenticated_session:"store_authenticated_session",subscribing_authenticated_session_topic:"subscribing_authenticated_session_topic",subscribe_authenticated_session_topic_success:"subscribe_authenticated_session_topic_success",publishing_authenticated_session_approve:"publishing_authenticated_session_approve"},lo={no_internet_connection:"no_internet_connection",invalid_cacao:"invalid_cacao",subscribe_authenticated_session_topic_failure:"subscribe_authenticated_session_topic_failure",authenticated_session_approve_publish_failure:"authenticated_session_approve_publish_failure",authenticated_session_pending_request_not_found:"authenticated_session_pending_request_not_found"},v5=.1,b5="event-client",y5=86400,C5="https://pulse.walletconnect.org/batch";function E5(t,e){if(t.length>=255)throw new TypeError("Alphabet too long");for(var r=new Uint8Array(256),i=0;i<r.length;i++)r[i]=255;for(var s=0;s<t.length;s++){var n=t.charAt(s),o=n.charCodeAt(0);if(r[o]!==255)throw new TypeError(n+" is ambiguous");r[o]=s}var a=t.length,c=t.charAt(0),l=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function h(w){if(w instanceof Uint8Array||(ArrayBuffer.isView(w)?w=new Uint8Array(w.buffer,w.byteOffset,w.byteLength):Array.isArray(w)&&(w=Uint8Array.from(w))),!(w instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(w.length===0)return"";for(var g=0,f=0,m=0,v=w.length;m!==v&&w[m]===0;)m++,g++;for(var b=(v-m)*u+1>>>0,y=new Uint8Array(b);m!==v;){for(var $=w[m],_=0,P=b-1;($!==0||_<f)&&P!==-1;P--,_++)$+=256*y[P]>>>0,y[P]=$%a>>>0,$=$/a>>>0;if($!==0)throw new Error("Non-zero carry");f=_,m++}for(var k=b-f;k!==b&&y[k]===0;)k++;for(var S=c.repeat(g);k<b;++k)S+=t.charAt(y[k]);return S}function d(w){if(typeof w!="string")throw new TypeError("Expected String");if(w.length===0)return new Uint8Array;var g=0;if(w[g]!==" "){for(var f=0,m=0;w[g]===c;)f++,g++;for(var v=(w.length-g)*l+1>>>0,b=new Uint8Array(v);w[g];){var y=r[w.charCodeAt(g)];if(y===255)return;for(var $=0,_=v-1;(y!==0||$<m)&&_!==-1;_--,$++)y+=a*b[_]>>>0,b[_]=y%256>>>0,y=y/256>>>0;if(y!==0)throw new Error("Non-zero carry");m=$,g++}if(w[g]!==" "){for(var P=v-m;P!==v&&b[P]===0;)P++;for(var k=new Uint8Array(f+(v-P)),S=f;P!==v;)k[S++]=b[P++];return k}}}function p(w){var g=d(w);if(g)return g;throw new Error(`Non-${e} character`)}return{encode:h,decodeUnsafe:d,decode:p}}var x5=E5,I5=x5;const Bf=t=>{if(t instanceof Uint8Array&&t.constructor.name==="Uint8Array")return t;if(t instanceof ArrayBuffer)return new Uint8Array(t);if(ArrayBuffer.isView(t))return new Uint8Array(t.buffer,t.byteOffset,t.byteLength);throw new Error("Unknown type, must be binary type")},A5=t=>new TextEncoder().encode(t),S5=t=>new TextDecoder().decode(t);let _5=class{constructor(e,r,i){this.name=e,this.prefix=r,this.baseEncode=i}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}},$5=class{constructor(e,r,i){if(this.name=e,this.prefix=r,r.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=r.codePointAt(0),this.baseDecode=i}decode(e){if(typeof e=="string"){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(e){return Mf(this,e)}},k5=class{constructor(e){this.decoders=e}or(e){return Mf(this,e)}decode(e){const r=e[0],i=this.decoders[r];if(i)return i.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}};const Mf=(t,e)=>new k5({...t.decoders||{[t.prefix]:t},...e.decoders||{[e.prefix]:e}});let N5=class{constructor(e,r,i,s){this.name=e,this.prefix=r,this.baseEncode=i,this.baseDecode=s,this.encoder=new _5(e,r,i),this.decoder=new $5(e,r,s)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}};const Ml=({name:t,prefix:e,encode:r,decode:i})=>new N5(t,e,r,i),Fa=({prefix:t,name:e,alphabet:r})=>{const{encode:i,decode:s}=I5(r,e);return Ml({prefix:t,name:e,encode:i,decode:n=>Bf(s(n))})},P5=(t,e,r,i)=>{const s={};for(let u=0;u<e.length;++u)s[e[u]]=u;let n=t.length;for(;t[n-1]==="=";)--n;const o=new Uint8Array(n*r/8|0);let a=0,c=0,l=0;for(let u=0;u<n;++u){const h=s[t[u]];if(h===void 0)throw new SyntaxError(`Non-${i} character`);c=c<<r|h,a+=r,a>=8&&(a-=8,o[l++]=255&c>>a)}if(a>=r||255&c<<8-a)throw new SyntaxError("Unexpected end of data");return o},O5=(t,e,r)=>{const i=e[e.length-1]==="=",s=(1<<r)-1;let n="",o=0,a=0;for(let c=0;c<t.length;++c)for(a=a<<8|t[c],o+=8;o>r;)o-=r,n+=e[s&a>>o];if(o&&(n+=e[s&a<<r-o]),i)for(;n.length*r&7;)n+="=";return n},vt=({name:t,prefix:e,bitsPerChar:r,alphabet:i})=>Ml({prefix:e,name:t,encode(s){return O5(s,i,r)},decode(s){return P5(s,i,r,t)}}),T5=Ml({prefix:"\0",name:"identity",encode:t=>S5(t),decode:t=>A5(t)});var R5=Object.freeze({__proto__:null,identity:T5});const L5=vt({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1});var U5=Object.freeze({__proto__:null,base2:L5});const B5=vt({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3});var M5=Object.freeze({__proto__:null,base8:B5});const D5=Fa({prefix:"9",name:"base10",alphabet:"0123456789"});var j5=Object.freeze({__proto__:null,base10:D5});const z5=vt({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),q5=vt({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4});var H5=Object.freeze({__proto__:null,base16:z5,base16upper:q5});const W5=vt({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),V5=vt({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),F5=vt({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),K5=vt({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),Z5=vt({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),G5=vt({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),Y5=vt({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),J5=vt({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),X5=vt({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5});var Q5=Object.freeze({__proto__:null,base32:W5,base32upper:V5,base32pad:F5,base32padupper:K5,base32hex:Z5,base32hexupper:G5,base32hexpad:Y5,base32hexpadupper:J5,base32z:X5});const e4=Fa({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),t4=Fa({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"});var r4=Object.freeze({__proto__:null,base36:e4,base36upper:t4});const i4=Fa({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),s4=Fa({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"});var n4=Object.freeze({__proto__:null,base58btc:i4,base58flickr:s4});const o4=vt({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),a4=vt({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),c4=vt({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),l4=vt({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6});var u4=Object.freeze({__proto__:null,base64:o4,base64pad:a4,base64url:c4,base64urlpad:l4});const Df=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),h4=Df.reduce((t,e,r)=>(t[r]=e,t),[]),d4=Df.reduce((t,e,r)=>(t[e.codePointAt(0)]=r,t),[]);function p4(t){return t.reduce((e,r)=>(e+=h4[r],e),"")}function g4(t){const e=[];for(const r of t){const i=d4[r.codePointAt(0)];if(i===void 0)throw new Error(`Non-base256emoji character: ${r}`);e.push(i)}return new Uint8Array(e)}const f4=Ml({prefix:"🚀",name:"base256emoji",encode:p4,decode:g4});var w4=Object.freeze({__proto__:null,base256emoji:f4}),m4=jf,g0=128,v4=-128,b4=Math.pow(2,31);function jf(t,e,r){e=e||[],r=r||0;for(var i=r;t>=b4;)e[r++]=t&255|g0,t/=128;for(;t&v4;)e[r++]=t&255|g0,t>>>=7;return e[r]=t|0,jf.bytes=r-i+1,e}var y4=zh,C4=128,f0=127;function zh(t,i){var r=0,i=i||0,s=0,n=i,o,a=t.length;do{if(n>=a)throw zh.bytes=0,new RangeError("Could not decode varint");o=t[n++],r+=s<28?(o&f0)<<s:(o&f0)*Math.pow(2,s),s+=7}while(o>=C4);return zh.bytes=n-i,r}var E4=Math.pow(2,7),x4=Math.pow(2,14),I4=Math.pow(2,21),A4=Math.pow(2,28),S4=Math.pow(2,35),_4=Math.pow(2,42),$4=Math.pow(2,49),k4=Math.pow(2,56),N4=Math.pow(2,63),P4=function(t){return t<E4?1:t<x4?2:t<I4?3:t<A4?4:t<S4?5:t<_4?6:t<$4?7:t<k4?8:t<N4?9:10},O4={encode:m4,decode:y4,encodingLength:P4},zf=O4;const w0=(t,e,r=0)=>(zf.encode(t,e,r),e),m0=t=>zf.encodingLength(t),qh=(t,e)=>{const r=e.byteLength,i=m0(t),s=i+m0(r),n=new Uint8Array(s+r);return w0(t,n,0),w0(r,n,i),n.set(e,s),new T4(t,r,e,n)};let T4=class{constructor(e,r,i,s){this.code=e,this.size=r,this.digest=i,this.bytes=s}};const qf=({name:t,code:e,encode:r})=>new R4(t,e,r);let R4=class{constructor(e,r,i){this.name=e,this.code=r,this.encode=i}digest(e){if(e instanceof Uint8Array){const r=this.encode(e);return r instanceof Uint8Array?qh(this.code,r):r.then(i=>qh(this.code,i))}else throw Error("Unknown type, must be binary type")}};const Hf=t=>async e=>new Uint8Array(await crypto.subtle.digest(t,e)),L4=qf({name:"sha2-256",code:18,encode:Hf("SHA-256")}),U4=qf({name:"sha2-512",code:19,encode:Hf("SHA-512")});var B4=Object.freeze({__proto__:null,sha256:L4,sha512:U4});const Wf=0,M4="identity",Vf=Bf,D4=t=>qh(Wf,Vf(t)),j4={code:Wf,name:M4,encode:Vf,digest:D4};var z4=Object.freeze({__proto__:null,identity:j4});new TextEncoder,new TextDecoder;const v0={...R5,...U5,...M5,...j5,...H5,...Q5,...r4,...n4,...u4,...w4};({...B4,...z4});function q4(t=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?globalThis.Buffer.allocUnsafe(t):new Uint8Array(t)}function Ff(t,e,r,i){return{name:t,prefix:e,encoder:{name:t,prefix:e,encode:r},decoder:{decode:i}}}const b0=Ff("utf8","u",t=>"u"+new TextDecoder("utf8").decode(t),t=>new TextEncoder().encode(t.substring(1))),fu=Ff("ascii","a",t=>{let e="a";for(let r=0;r<t.length;r++)e+=String.fromCharCode(t[r]);return e},t=>{t=t.substring(1);const e=q4(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}),H4={utf8:b0,"utf-8":b0,hex:v0.base16,latin1:fu,ascii:fu,binary:fu,...v0};function W4(t,e="utf8"){const r=H4[e];if(!r)throw new Error(`Unsupported encoding "${e}"`);return(e==="utf8"||e==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(t,"utf8"):r.decoder.decode(`${r.prefix}${t}`)}var V4=Object.defineProperty,F4=(t,e,r)=>e in t?V4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Pr=(t,e,r)=>F4(t,typeof e!="symbol"?e+"":e,r);let K4=class{constructor(e,r){this.core=e,this.logger=r,Pr(this,"keychain",new Map),Pr(this,"name",K3),Pr(this,"version",Z3),Pr(this,"initialized",!1),Pr(this,"storagePrefix",Vr),Pr(this,"init",async()=>{if(!this.initialized){const i=await this.getKeyChain();typeof i<"u"&&(this.keychain=i),this.initialized=!0}}),Pr(this,"has",i=>(this.isInitialized(),this.keychain.has(i))),Pr(this,"set",async(i,s)=>{this.isInitialized(),this.keychain.set(i,s),await this.persist()}),Pr(this,"get",i=>{this.isInitialized();const s=this.keychain.get(i);if(typeof s>"u"){const{message:n}=q("NO_MATCHING_KEY",`${this.name}: ${i}`);throw new Error(n)}return s}),Pr(this,"del",async i=>{this.isInitialized(),this.keychain.delete(i),await this.persist()}),this.core=e,this.logger=$t(r,this.name)}get context(){return Qt(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}async setKeyChain(e){await this.core.storage.setItem(this.storageKey,_h(e))}async getKeyChain(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?$h(e):void 0}async persist(){await this.setKeyChain(this.keychain)}isInitialized(){if(!this.initialized){const{message:e}=q("NOT_INITIALIZED",this.name);throw new Error(e)}}};var Z4=Object.defineProperty,G4=(t,e,r)=>e in t?Z4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,gt=(t,e,r)=>G4(t,typeof e!="symbol"?e+"":e,r);class Y4{constructor(e,r,i){this.core=e,this.logger=r,gt(this,"name",V3),gt(this,"keychain"),gt(this,"randomSessionIdentifier",Mh()),gt(this,"initialized",!1),gt(this,"init",async()=>{this.initialized||(await this.keychain.init(),this.initialized=!0)}),gt(this,"hasKeys",s=>(this.isInitialized(),this.keychain.has(s))),gt(this,"getClientId",async()=>{this.isInitialized();const s=await this.getClientSeed(),n=cp(s);return Qm(n.publicKey)}),gt(this,"generateKeyPair",()=>{this.isInitialized();const s=$y();return this.setPrivateKey(s.publicKey,s.privateKey)}),gt(this,"signJWT",async s=>{this.isInitialized();const n=await this.getClientSeed(),o=cp(n),a=this.randomSessionIdentifier;return await e2(a,s,F3,o)}),gt(this,"generateSharedKey",(s,n,o)=>{this.isInitialized();const a=this.getPrivateKey(s),c=ky(a,n);return this.setSymKey(c,o)}),gt(this,"setSymKey",async(s,n)=>{this.isInitialized();const o=n||il(s);return await this.keychain.set(o,s),o}),gt(this,"deleteKeyPair",async s=>{this.isInitialized(),await this.keychain.del(s)}),gt(this,"deleteSymKey",async s=>{this.isInitialized(),await this.keychain.del(s)}),gt(this,"encode",async(s,n,o)=>{this.isInitialized();const a=kf(o),c=t2(n);if(e0(a))return Oy(c,o==null?void 0:o.encoding);if(Qp(a)){const d=a.senderPublicKey,p=a.receiverPublicKey;s=await this.generateSharedKey(d,p)}const l=this.getSymKey(s),{type:u,senderPublicKey:h}=a;return Ny({type:u,symKey:l,message:c,senderPublicKey:h,encoding:o==null?void 0:o.encoding})}),gt(this,"decode",async(s,n,o)=>{this.isInitialized();const a=Ry(n,o);if(e0(a)){const c=Ty(n,o==null?void 0:o.encoding);return lp(c)}if(Qp(a)){const c=a.receiverPublicKey,l=a.senderPublicKey;s=await this.generateSharedKey(c,l)}try{const c=this.getSymKey(s),l=Py({symKey:c,encoded:n,encoding:o==null?void 0:o.encoding});return lp(l)}catch(c){this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`),this.logger.error(c)}}),gt(this,"getPayloadType",(s,n=Sr)=>{const o=ca({encoded:s,encoding:n});return Os(o.type)}),gt(this,"getPayloadSenderPublicKey",(s,n=Sr)=>{const o=ca({encoded:s,encoding:n});return o.senderPublicKey?Dt(o.senderPublicKey,St):void 0}),this.core=e,this.logger=$t(r,this.name),this.keychain=i||new K4(this.core,this.logger)}get context(){return Qt(this.logger)}async setPrivateKey(e,r){return await this.keychain.set(e,r),e}getPrivateKey(e){return this.keychain.get(e)}async getClientSeed(){let e="";try{e=this.keychain.get(h0)}catch{e=Mh(),await this.keychain.set(h0,e)}return W4(e,"base16")}getSymKey(e){return this.keychain.get(e)}isInitialized(){if(!this.initialized){const{message:e}=q("NOT_INITIALIZED",this.name);throw new Error(e)}}}var J4=Object.defineProperty,X4=Object.defineProperties,Q4=Object.getOwnPropertyDescriptors,y0=Object.getOwnPropertySymbols,e6=Object.prototype.hasOwnProperty,t6=Object.prototype.propertyIsEnumerable,Hh=(t,e,r)=>e in t?J4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,r6=(t,e)=>{for(var r in e||(e={}))e6.call(e,r)&&Hh(t,r,e[r]);if(y0)for(var r of y0(e))t6.call(e,r)&&Hh(t,r,e[r]);return t},i6=(t,e)=>X4(t,Q4(e)),zt=(t,e,r)=>Hh(t,typeof e!="symbol"?e+"":e,r);let s6=class extends k3{constructor(e,r){super(e,r),this.logger=e,this.core=r,zt(this,"messages",new Map),zt(this,"messagesWithoutClientAck",new Map),zt(this,"name",G3),zt(this,"version",Y3),zt(this,"initialized",!1),zt(this,"storagePrefix",Vr),zt(this,"init",async()=>{if(!this.initialized){this.logger.trace("Initialized");try{const i=await this.getRelayerMessages();typeof i<"u"&&(this.messages=i);const s=await this.getRelayerMessagesWithoutClientAck();typeof s<"u"&&(this.messagesWithoutClientAck=s),this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",size:this.messages.size})}catch(i){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(i)}finally{this.initialized=!0}}}),zt(this,"set",async(i,s,n)=>{this.isInitialized();const o=zr(s);let a=this.messages.get(i);if(typeof a>"u"&&(a={}),typeof a[o]<"u")return o;if(a[o]=s,this.messages.set(i,a),n===sl.inbound){const c=this.messagesWithoutClientAck.get(i)||{};this.messagesWithoutClientAck.set(i,i6(r6({},c),{[o]:s}))}return await this.persist(),o}),zt(this,"get",i=>{this.isInitialized();let s=this.messages.get(i);return typeof s>"u"&&(s={}),s}),zt(this,"getWithoutAck",i=>{this.isInitialized();const s={};for(const n of i){const o=this.messagesWithoutClientAck.get(n)||{};s[n]=Object.values(o)}return s}),zt(this,"has",(i,s)=>{this.isInitialized();const n=this.get(i),o=zr(s);return typeof n[o]<"u"}),zt(this,"ack",async(i,s)=>{this.isInitialized();const n=this.messagesWithoutClientAck.get(i);if(typeof n>"u")return;const o=zr(s);delete n[o],Object.keys(n).length===0?this.messagesWithoutClientAck.delete(i):this.messagesWithoutClientAck.set(i,n),await this.persist()}),zt(this,"del",async i=>{this.isInitialized(),this.messages.delete(i),this.messagesWithoutClientAck.delete(i),await this.persist()}),this.logger=$t(e,this.name),this.core=r}get context(){return Qt(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get storageKeyWithoutClientAck(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name+"_withoutClientAck"}async setRelayerMessages(e){await this.core.storage.setItem(this.storageKey,_h(e))}async setRelayerMessagesWithoutClientAck(e){await this.core.storage.setItem(this.storageKeyWithoutClientAck,_h(e))}async getRelayerMessages(){const e=await this.core.storage.getItem(this.storageKey);return typeof e<"u"?$h(e):void 0}async getRelayerMessagesWithoutClientAck(){const e=await this.core.storage.getItem(this.storageKeyWithoutClientAck);return typeof e<"u"?$h(e):void 0}async persist(){await this.setRelayerMessages(this.messages),await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck)}isInitialized(){if(!this.initialized){const{message:e}=q("NOT_INITIALIZED",this.name);throw new Error(e)}}};var n6=Object.defineProperty,o6=Object.defineProperties,a6=Object.getOwnPropertyDescriptors,C0=Object.getOwnPropertySymbols,c6=Object.prototype.hasOwnProperty,l6=Object.prototype.propertyIsEnumerable,Wh=(t,e,r)=>e in t?n6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,oc=(t,e)=>{for(var r in e||(e={}))c6.call(e,r)&&Wh(t,r,e[r]);if(C0)for(var r of C0(e))l6.call(e,r)&&Wh(t,r,e[r]);return t},wu=(t,e)=>o6(t,a6(e)),vr=(t,e,r)=>Wh(t,typeof e!="symbol"?e+"":e,r);let u6=class extends N3{constructor(e,r){super(e,r),this.relayer=e,this.logger=r,vr(this,"events",new zi.EventEmitter),vr(this,"name",J3),vr(this,"queue",new Map),vr(this,"publishTimeout",V.toMiliseconds(V.ONE_MINUTE)),vr(this,"initialPublishTimeout",V.toMiliseconds(V.ONE_SECOND*15)),vr(this,"needsTransportRestart",!1),vr(this,"publish",async(i,s,n)=>{var o;this.logger.debug("Publishing Payload"),this.logger.trace({type:"method",method:"publish",params:{topic:i,message:s,opts:n}});const a=(n==null?void 0:n.ttl)||d0,c=hl(n),l=(n==null?void 0:n.prompt)||!1,u=(n==null?void 0:n.tag)||0,h=(n==null?void 0:n.id)||An().toString(),d={topic:i,message:s,opts:{ttl:a,relay:c,prompt:l,tag:u,id:h,attestation:n==null?void 0:n.attestation,tvf:n==null?void 0:n.tvf}},p=`Failed to publish payload, please try again. id:${h} tag:${u}`;try{const w=new Promise(async g=>{const f=({id:v})=>{d.opts.id===v&&(this.removeRequestFromQueue(v),this.relayer.events.removeListener(ut.publish,f),g(d))};this.relayer.events.on(ut.publish,f);const m=Pi(new Promise((v,b)=>{this.rpcPublish({topic:i,message:s,ttl:a,prompt:l,tag:u,id:h,attestation:n==null?void 0:n.attestation,tvf:n==null?void 0:n.tvf}).then(v).catch(y=>{this.logger.warn(y,y==null?void 0:y.message),b(y)})}),this.initialPublishTimeout,`Failed initial publish, retrying.... id:${h} tag:${u}`);try{await m,this.events.removeListener(ut.publish,f)}catch(v){this.queue.set(h,wu(oc({},d),{attempt:1})),this.logger.warn(v,v==null?void 0:v.message)}});this.logger.trace({type:"method",method:"publish",params:{id:h,topic:i,message:s,opts:n}}),await Pi(w,this.publishTimeout,p)}catch(w){if(this.logger.debug("Failed to Publish Payload"),this.logger.error(w),(o=n==null?void 0:n.internal)!=null&&o.throwOnFailedPublish)throw w}finally{this.queue.delete(h)}}),vr(this,"on",(i,s)=>{this.events.on(i,s)}),vr(this,"once",(i,s)=>{this.events.once(i,s)}),vr(this,"off",(i,s)=>{this.events.off(i,s)}),vr(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),this.relayer=e,this.logger=$t(r,this.name),this.registerEventListeners()}get context(){return Qt(this.logger)}async rpcPublish(e){var r,i,s,n;const{topic:o,message:a,ttl:c=d0,prompt:l,tag:u,id:h,attestation:d,tvf:p}=e,w={method:Do(hl().protocol).publish,params:oc({topic:o,message:a,ttl:c,prompt:l,tag:u,attestation:d},p),id:h};mt((r=w.params)==null?void 0:r.prompt)&&((i=w.params)==null||delete i.prompt),mt((s=w.params)==null?void 0:s.tag)&&((n=w.params)==null||delete n.tag),this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"message",direction:"outgoing",request:w});const g=await this.relayer.request(w);return this.relayer.events.emit(ut.publish,e),this.logger.debug("Successfully Published Payload"),g}removeRequestFromQueue(e){this.queue.delete(e)}checkQueue(){this.queue.forEach(async(e,r)=>{const i=e.attempt+1;this.queue.set(r,wu(oc({},e),{attempt:i}));const{topic:s,message:n,opts:o,attestation:a}=e;this.logger.warn({},`Publisher: queue->publishing: ${e.opts.id}, tag: ${e.opts.tag}, attempt: ${i}`),await this.rpcPublish(wu(oc({},e),{topic:s,message:n,ttl:o.ttl,prompt:o.prompt,tag:o.tag,id:o.id,attestation:a,tvf:o.tvf})),this.logger.warn({},`Publisher: queue->published: ${e.opts.id}`)})}registerEventListeners(){this.relayer.core.heartbeat.on(Ma.pulse,()=>{if(this.needsTransportRestart){this.needsTransportRestart=!1,this.relayer.events.emit(ut.connection_stalled);return}this.checkQueue()}),this.relayer.on(ut.message_ack,e=>{this.removeRequestFromQueue(e.id.toString())})}};var h6=Object.defineProperty,d6=(t,e,r)=>e in t?h6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Vs=(t,e,r)=>d6(t,typeof e!="symbol"?e+"":e,r);let p6=class{constructor(){Vs(this,"map",new Map),Vs(this,"set",(e,r)=>{const i=this.get(e);this.exists(e,r)||this.map.set(e,[...i,r])}),Vs(this,"get",e=>this.map.get(e)||[]),Vs(this,"exists",(e,r)=>this.get(e).includes(r)),Vs(this,"delete",(e,r)=>{if(typeof r>"u"){this.map.delete(e);return}if(!this.map.has(e))return;const i=this.get(e);if(!this.exists(e,r))return;const s=i.filter(n=>n!==r);if(!s.length){this.map.delete(e);return}this.map.set(e,s)}),Vs(this,"clear",()=>{this.map.clear()})}get topics(){return Array.from(this.map.keys())}};var g6=Object.defineProperty,f6=Object.defineProperties,w6=Object.getOwnPropertyDescriptors,E0=Object.getOwnPropertySymbols,m6=Object.prototype.hasOwnProperty,v6=Object.prototype.propertyIsEnumerable,Vh=(t,e,r)=>e in t?g6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,uo=(t,e)=>{for(var r in e||(e={}))m6.call(e,r)&&Vh(t,r,e[r]);if(E0)for(var r of E0(e))v6.call(e,r)&&Vh(t,r,e[r]);return t},mu=(t,e)=>f6(t,w6(e)),Ue=(t,e,r)=>Vh(t,typeof e!="symbol"?e+"":e,r);let b6=class extends T3{constructor(e,r){super(e,r),this.relayer=e,this.logger=r,Ue(this,"subscriptions",new Map),Ue(this,"topicMap",new p6),Ue(this,"events",new zi.EventEmitter),Ue(this,"name",s5),Ue(this,"version",n5),Ue(this,"pending",new Map),Ue(this,"cached",[]),Ue(this,"initialized",!1),Ue(this,"storagePrefix",Vr),Ue(this,"subscribeTimeout",V.toMiliseconds(V.ONE_MINUTE)),Ue(this,"initialSubscribeTimeout",V.toMiliseconds(V.ONE_SECOND*15)),Ue(this,"clientId"),Ue(this,"batchSubscribeTopicsLimit",500),Ue(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),this.registerEventListeners(),await this.restore()),this.initialized=!0}),Ue(this,"subscribe",async(i,s)=>{this.isInitialized(),this.logger.debug("Subscribing Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:i,opts:s}});try{const n=hl(s),o={topic:i,relay:n,transportType:s==null?void 0:s.transportType};this.pending.set(i,o);const a=await this.rpcSubscribe(i,n,s);return typeof a=="string"&&(this.onSubscribe(a,o),this.logger.debug("Successfully Subscribed Topic"),this.logger.trace({type:"method",method:"subscribe",params:{topic:i,opts:s}})),a}catch(n){throw this.logger.debug("Failed to Subscribe Topic"),this.logger.error(n),n}}),Ue(this,"unsubscribe",async(i,s)=>{this.isInitialized(),typeof(s==null?void 0:s.id)<"u"?await this.unsubscribeById(i,s.id,s):await this.unsubscribeByTopic(i,s)}),Ue(this,"isSubscribed",i=>new Promise(s=>{s(this.topicMap.topics.includes(i))})),Ue(this,"isKnownTopic",i=>new Promise(s=>{s(this.topicMap.topics.includes(i)||this.pending.has(i)||this.cached.some(n=>n.topic===i))})),Ue(this,"on",(i,s)=>{this.events.on(i,s)}),Ue(this,"once",(i,s)=>{this.events.once(i,s)}),Ue(this,"off",(i,s)=>{this.events.off(i,s)}),Ue(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),Ue(this,"start",async()=>{await this.onConnect()}),Ue(this,"stop",async()=>{await this.onDisconnect()}),Ue(this,"restart",async()=>{await this.restore(),await this.onRestart()}),Ue(this,"checkPending",async()=>{if(this.pending.size===0&&(!this.initialized||!this.relayer.connected))return;const i=[];this.pending.forEach(s=>{i.push(s)}),await this.batchSubscribe(i)}),Ue(this,"registerEventListeners",()=>{this.relayer.core.heartbeat.on(Ma.pulse,async()=>{await this.checkPending()}),this.events.on(Kt.created,async i=>{const s=Kt.created;this.logger.info(`Emitting ${s}`),this.logger.debug({type:"event",event:s,data:i}),await this.persist()}),this.events.on(Kt.deleted,async i=>{const s=Kt.deleted;this.logger.info(`Emitting ${s}`),this.logger.debug({type:"event",event:s,data:i}),await this.persist()})}),this.relayer=e,this.logger=$t(r,this.name),this.clientId=""}get context(){return Qt(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.relayer.core.customStoragePrefix+"//"+this.name}get length(){return this.subscriptions.size}get ids(){return Array.from(this.subscriptions.keys())}get values(){return Array.from(this.subscriptions.values())}get topics(){return this.topicMap.topics}get hasAnyTopics(){return this.topicMap.topics.length>0||this.pending.size>0||this.cached.length>0||this.subscriptions.size>0}hasSubscription(e,r){let i=!1;try{i=this.getSubscription(e).topic===r}catch{}return i}reset(){this.cached=[],this.initialized=!0}onDisable(){this.cached=this.values,this.subscriptions.clear(),this.topicMap.clear()}async unsubscribeByTopic(e,r){const i=this.topicMap.get(e);await Promise.all(i.map(async s=>await this.unsubscribeById(e,s,r)))}async unsubscribeById(e,r,i){this.logger.debug("Unsubscribing Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:r,opts:i}});try{const s=hl(i);await this.restartToComplete({topic:e,id:r,relay:s}),await this.rpcUnsubscribe(e,r,s);const n=Re("USER_DISCONNECTED",`${this.name}, ${e}`);await this.onUnsubscribe(e,r,n),this.logger.debug("Successfully Unsubscribed Topic"),this.logger.trace({type:"method",method:"unsubscribe",params:{topic:e,id:r,opts:i}})}catch(s){throw this.logger.debug("Failed to Unsubscribe Topic"),this.logger.error(s),s}}async rpcSubscribe(e,r,i){var s;(!i||(i==null?void 0:i.transportType)===We.relay)&&await this.restartToComplete({topic:e,id:e,relay:r});const n={method:Do(r.protocol).subscribe,params:{topic:e}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:n});const o=(s=i==null?void 0:i.internal)==null?void 0:s.throwOnFailedPublish;try{const a=await this.getSubscriptionId(e);if((i==null?void 0:i.transportType)===We.link_mode)return setTimeout(()=>{(this.relayer.connected||this.relayer.connecting)&&this.relayer.request(n).catch(u=>this.logger.warn(u))},V.toMiliseconds(V.ONE_SECOND)),a;const c=new Promise(async u=>{const h=d=>{d.topic===e&&(this.events.removeListener(Kt.created,h),u(d.id))};this.events.on(Kt.created,h);try{const d=await Pi(new Promise((p,w)=>{this.relayer.request(n).catch(g=>{this.logger.warn(g,g==null?void 0:g.message),w(g)}).then(p)}),this.initialSubscribeTimeout,`Subscribing to ${e} failed, please try again`);this.events.removeListener(Kt.created,h),u(d)}catch{}}),l=await Pi(c,this.subscribeTimeout,`Subscribing to ${e} failed, please try again`);if(!l&&o)throw new Error(`Subscribing to ${e} failed, please try again`);return l?a:null}catch(a){if(this.logger.debug("Outgoing Relay Subscribe Payload stalled"),this.relayer.events.emit(ut.connection_stalled),o)throw a}return null}async rpcBatchSubscribe(e){if(!e.length)return;const r=e[0].relay,i={method:Do(r.protocol).batchSubscribe,params:{topics:e.map(s=>s.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});try{await await Pi(new Promise(s=>{this.relayer.request(i).catch(n=>this.logger.warn(n)).then(s)}),this.subscribeTimeout,"rpcBatchSubscribe failed, please try again")}catch{this.relayer.events.emit(ut.connection_stalled)}}async rpcBatchFetchMessages(e){if(!e.length)return;const r=e[0].relay,i={method:Do(r.protocol).batchFetchMessages,params:{topics:e.map(n=>n.topic)}};this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:i});let s;try{s=await await Pi(new Promise((n,o)=>{this.relayer.request(i).catch(a=>{this.logger.warn(a),o(a)}).then(n)}),this.subscribeTimeout,"rpcBatchFetchMessages failed, please try again")}catch{this.relayer.events.emit(ut.connection_stalled)}return s}rpcUnsubscribe(e,r,i){const s={method:Do(i.protocol).unsubscribe,params:{topic:e,id:r}};return this.logger.debug("Outgoing Relay Payload"),this.logger.trace({type:"payload",direction:"outgoing",request:s}),this.relayer.request(s)}onSubscribe(e,r){this.setSubscription(e,mu(uo({},r),{id:e})),this.pending.delete(r.topic)}onBatchSubscribe(e){e.length&&e.forEach(r=>{this.setSubscription(r.id,uo({},r)),this.pending.delete(r.topic)})}async onUnsubscribe(e,r,i){this.events.removeAllListeners(r),this.hasSubscription(r,e)&&this.deleteSubscription(r,i),await this.relayer.messages.del(e)}async setRelayerSubscriptions(e){await this.relayer.core.storage.setItem(this.storageKey,e)}async getRelayerSubscriptions(){return await this.relayer.core.storage.getItem(this.storageKey)}setSubscription(e,r){this.logger.debug("Setting subscription"),this.logger.trace({type:"method",method:"setSubscription",id:e,subscription:r}),this.addSubscription(e,r)}addSubscription(e,r){this.subscriptions.set(e,uo({},r)),this.topicMap.set(r.topic,e),this.events.emit(Kt.created,r)}getSubscription(e){this.logger.debug("Getting subscription"),this.logger.trace({type:"method",method:"getSubscription",id:e});const r=this.subscriptions.get(e);if(!r){const{message:i}=q("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(i)}return r}deleteSubscription(e,r){this.logger.debug("Deleting subscription"),this.logger.trace({type:"method",method:"deleteSubscription",id:e,reason:r});const i=this.getSubscription(e);this.subscriptions.delete(e),this.topicMap.delete(i.topic,e),this.events.emit(Kt.deleted,mu(uo({},i),{reason:r}))}async persist(){await this.setRelayerSubscriptions(this.values),this.events.emit(Kt.sync)}async onRestart(){if(this.cached.length){const e=[...this.cached],r=Math.ceil(this.cached.length/this.batchSubscribeTopicsLimit);for(let i=0;i<r;i++){const s=e.splice(0,this.batchSubscribeTopicsLimit);await this.batchSubscribe(s)}}this.events.emit(Kt.resubscribed)}async restore(){try{const e=await this.getRelayerSubscriptions();if(typeof e>"u"||!e.length)return;if(this.subscriptions.size){const{message:r}=q("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(r),this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),new Error(r)}this.cached=e,this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),this.logger.trace({type:"method",method:"restore",subscriptions:this.values})}catch(e){this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),this.logger.error(e)}}async batchSubscribe(e){e.length&&(await this.rpcBatchSubscribe(e),this.onBatchSubscribe(await Promise.all(e.map(async r=>mu(uo({},r),{id:await this.getSubscriptionId(r.topic)})))))}async batchFetchMessages(e){if(!e.length)return;this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);const r=await this.rpcBatchFetchMessages(e);r&&r.messages&&(await fv(V.toMiliseconds(V.ONE_SECOND)),await this.relayer.handleBatchMessageEvents(r.messages))}async onConnect(){await this.restart(),this.reset()}onDisconnect(){this.onDisable()}isInitialized(){if(!this.initialized){const{message:e}=q("NOT_INITIALIZED",this.name);throw new Error(e)}}async restartToComplete(e){!this.relayer.connected&&!this.relayer.connecting&&(this.cached.push(e),await this.relayer.transportOpen())}async getClientId(){return this.clientId||(this.clientId=await this.relayer.core.crypto.getClientId()),this.clientId}async getSubscriptionId(e){return zr(e+await this.getClientId())}};var y6=Object.defineProperty,x0=Object.getOwnPropertySymbols,C6=Object.prototype.hasOwnProperty,E6=Object.prototype.propertyIsEnumerable,Fh=(t,e,r)=>e in t?y6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,I0=(t,e)=>{for(var r in e||(e={}))C6.call(e,r)&&Fh(t,r,e[r]);if(x0)for(var r of x0(e))E6.call(e,r)&&Fh(t,r,e[r]);return t},Ae=(t,e,r)=>Fh(t,typeof e!="symbol"?e+"":e,r);let x6=class extends P3{constructor(e){super(e),Ae(this,"protocol","wc"),Ae(this,"version",2),Ae(this,"core"),Ae(this,"logger"),Ae(this,"events",new zi.EventEmitter),Ae(this,"provider"),Ae(this,"messages"),Ae(this,"subscriber"),Ae(this,"publisher"),Ae(this,"name",Q3),Ae(this,"transportExplicitlyClosed",!1),Ae(this,"initialized",!1),Ae(this,"connectionAttemptInProgress",!1),Ae(this,"relayUrl"),Ae(this,"projectId"),Ae(this,"packageName"),Ae(this,"bundleId"),Ae(this,"hasExperiencedNetworkDisruption",!1),Ae(this,"pingTimeout"),Ae(this,"heartBeatTimeout",V.toMiliseconds(V.THIRTY_SECONDS+V.FIVE_SECONDS)),Ae(this,"reconnectTimeout"),Ae(this,"connectPromise"),Ae(this,"reconnectInProgress",!1),Ae(this,"requestsInFlight",[]),Ae(this,"connectTimeout",V.toMiliseconds(V.ONE_SECOND*15)),Ae(this,"request",async r=>{var i,s;this.logger.debug("Publishing Request Payload");const n=r.id||An().toString();await this.toEstablishConnection();try{this.logger.trace({id:n,method:r.method,topic:(i=r.params)==null?void 0:i.topic},"relayer.request - publishing...");const o=`${n}:${((s=r.params)==null?void 0:s.tag)||""}`;this.requestsInFlight.push(o);const a=await this.provider.request(r);return this.requestsInFlight=this.requestsInFlight.filter(c=>c!==o),a}catch(o){throw this.logger.debug(`Failed to Publish Request: ${n}`),o}}),Ae(this,"resetPingTimeout",()=>{ll()&&(clearTimeout(this.pingTimeout),this.pingTimeout=setTimeout(()=>{var r,i,s,n;try{this.logger.debug({},"pingTimeout: Connection stalled, terminating..."),(n=(s=(i=(r=this.provider)==null?void 0:r.connection)==null?void 0:i.socket)==null?void 0:s.terminate)==null||n.call(s)}catch(o){this.logger.warn(o,o==null?void 0:o.message)}},this.heartBeatTimeout))}),Ae(this,"onPayloadHandler",r=>{this.onProviderPayload(r),this.resetPingTimeout()}),Ae(this,"onConnectHandler",()=>{this.logger.warn({},"Relayer connected 🛜"),this.startPingTimeout(),this.events.emit(ut.connect)}),Ae(this,"onDisconnectHandler",()=>{this.logger.warn({},"Relayer disconnected 🛑"),this.requestsInFlight=[],this.onProviderDisconnect()}),Ae(this,"onProviderErrorHandler",r=>{this.logger.fatal(`Fatal socket error: ${r.message}`),this.events.emit(ut.error,r),this.logger.fatal("Fatal socket error received, closing transport"),this.transportClose()}),Ae(this,"registerProviderListeners",()=>{this.provider.on(tr.payload,this.onPayloadHandler),this.provider.on(tr.connect,this.onConnectHandler),this.provider.on(tr.disconnect,this.onDisconnectHandler),this.provider.on(tr.error,this.onProviderErrorHandler)}),this.core=e.core,this.logger=typeof e.logger<"u"&&typeof e.logger!="string"?$t(e.logger,this.name):Ed(Nl({level:e.logger||X3})),this.messages=new s6(this.logger,e.core),this.subscriber=new b6(this,this.logger),this.publisher=new u6(this,this.logger),this.relayUrl=(e==null?void 0:e.relayUrl)||Lf,this.projectId=e.projectId,Q2()?this.packageName=xp():ev()&&(this.bundleId=xp()),this.provider={}}async init(){if(this.logger.trace("Initialized"),this.registerEventListeners(),await Promise.all([this.messages.init(),this.subscriber.init()]),this.initialized=!0,this.subscriber.hasAnyTopics)try{await this.transportOpen()}catch(e){this.logger.warn(e,e==null?void 0:e.message)}}get context(){return Qt(this.logger)}get connected(){var e,r,i;return((i=(r=(e=this.provider)==null?void 0:e.connection)==null?void 0:r.socket)==null?void 0:i.readyState)===1||!1}get connecting(){var e,r,i;return((i=(r=(e=this.provider)==null?void 0:e.connection)==null?void 0:r.socket)==null?void 0:i.readyState)===0||this.connectPromise!==void 0||!1}async publish(e,r,i){this.isInitialized(),await this.publisher.publish(e,r,i),await this.recordMessageEvent({topic:e,message:r,publishedAt:Date.now(),transportType:We.relay},sl.outbound)}async subscribe(e,r){var i,s,n;this.isInitialized(),(!(r!=null&&r.transportType)||(r==null?void 0:r.transportType)==="relay")&&await this.toEstablishConnection();const o=typeof((i=r==null?void 0:r.internal)==null?void 0:i.throwOnFailedPublish)>"u"?!0:(s=r==null?void 0:r.internal)==null?void 0:s.throwOnFailedPublish;let a=((n=this.subscriber.topicMap.get(e))==null?void 0:n[0])||"",c;const l=u=>{u.topic===e&&(this.subscriber.off(Kt.created,l),c())};return await Promise.all([new Promise(u=>{c=u,this.subscriber.on(Kt.created,l)}),new Promise(async(u,h)=>{a=await this.subscriber.subscribe(e,I0({internal:{throwOnFailedPublish:o}},r)).catch(d=>{o&&h(d)})||a,u()})]),a}async unsubscribe(e,r){this.isInitialized(),await this.subscriber.unsubscribe(e,r)}on(e,r){this.events.on(e,r)}once(e,r){this.events.once(e,r)}off(e,r){this.events.off(e,r)}removeListener(e,r){this.events.removeListener(e,r)}async transportDisconnect(){this.provider.disconnect&&(this.hasExperiencedNetworkDisruption||this.connected)?await Pi(this.provider.disconnect(),2e3,"provider.disconnect()").catch(()=>this.onProviderDisconnect()):this.onProviderDisconnect()}async transportClose(){this.transportExplicitlyClosed=!0,await this.transportDisconnect()}async transportOpen(e){if(!this.subscriber.hasAnyTopics){this.logger.warn("Starting WS connection skipped because the client has no topics to work with.");return}if(this.connectPromise?(this.logger.debug({},"Waiting for existing connection attempt to resolve..."),await this.connectPromise,this.logger.debug({},"Existing connection attempt resolved")):(this.connectPromise=new Promise(async(r,i)=>{await this.connect(e).then(r).catch(i).finally(()=>{this.connectPromise=void 0})}),await this.connectPromise),!this.connected)throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`)}async restartTransport(e){this.logger.debug({},"Restarting transport..."),!this.connectionAttemptInProgress&&(this.relayUrl=e||this.relayUrl,await this.confirmOnlineStateOrThrow(),await this.transportClose(),await this.transportOpen())}async confirmOnlineStateOrThrow(){if(!await c0())throw new Error("No internet connection detected. Please restart your network and try again.")}async handleBatchMessageEvents(e){if((e==null?void 0:e.length)===0){this.logger.trace("Batch message events is empty. Ignoring...");return}const r=e.sort((i,s)=>i.publishedAt-s.publishedAt);this.logger.debug(`Batch of ${r.length} message events sorted`);for(const i of r)try{await this.onMessageEvent(i)}catch(s){this.logger.warn(s,"Error while processing batch message event: "+(s==null?void 0:s.message))}this.logger.trace(`Batch of ${r.length} message events processed`)}async onLinkMessageEvent(e,r){const{topic:i}=e;if(!r.sessionExists){const s=tt(V.FIVE_MINUTES),n={topic:i,expiry:s,relay:{protocol:"irn"},active:!1};await this.core.pairing.pairings.set(i,n)}this.events.emit(ut.message,e),await this.recordMessageEvent(e,sl.inbound)}async connect(e){await this.confirmOnlineStateOrThrow(),e&&e!==this.relayUrl&&(this.relayUrl=e,await this.transportDisconnect()),this.connectionAttemptInProgress=!0,this.transportExplicitlyClosed=!1;let r=1;for(;r<6;){try{if(this.transportExplicitlyClosed)break;this.logger.debug({},`Connecting to ${this.relayUrl}, attempt: ${r}...`),await this.createProvider(),await new Promise(async(i,s)=>{const n=()=>{s(new Error("Connection interrupted while trying to subscribe"))};this.provider.once(tr.disconnect,n),await Pi(new Promise((o,a)=>{this.provider.connect().then(o).catch(a)}),this.connectTimeout,`Socket stalled when trying to connect to ${this.relayUrl}`).catch(o=>{s(o)}).finally(()=>{this.provider.off(tr.disconnect,n),clearTimeout(this.reconnectTimeout)}),await new Promise(async(o,a)=>{const c=()=>{a(new Error("Connection interrupted while trying to subscribe"))};this.provider.once(tr.disconnect,c),await this.subscriber.start().then(o).catch(a).finally(()=>{this.provider.off(tr.disconnect,c)})}),this.hasExperiencedNetworkDisruption=!1,i()})}catch(i){await this.subscriber.stop();const s=i;this.logger.warn({},s.message),this.hasExperiencedNetworkDisruption=!0}finally{this.connectionAttemptInProgress=!1}if(this.connected){this.logger.debug({},`Connected to ${this.relayUrl} successfully on attempt: ${r}`);break}await new Promise(i=>setTimeout(i,V.toMiliseconds(r*1))),r++}}startPingTimeout(){var e,r,i,s,n;if(ll())try{(r=(e=this.provider)==null?void 0:e.connection)!=null&&r.socket&&((n=(s=(i=this.provider)==null?void 0:i.connection)==null?void 0:s.socket)==null||n.on("ping",()=>{this.resetPingTimeout()})),this.resetPingTimeout()}catch(o){this.logger.warn(o,o==null?void 0:o.message)}}async createProvider(){this.provider.connection&&this.unregisterProviderListeners();const e=await this.core.crypto.signJWT(this.relayUrl);this.provider=new gr(new Xm(nv({sdkVersion:jh,protocol:this.protocol,version:this.version,relayUrl:this.relayUrl,projectId:this.projectId,auth:e,useOnCloseEvent:!0,bundleId:this.bundleId,packageName:this.packageName}))),this.registerProviderListeners()}async recordMessageEvent(e,r){const{topic:i,message:s}=e;await this.messages.set(i,s,r)}async shouldIgnoreMessageEvent(e){const{topic:r,message:i}=e;if(!i||i.length===0)return this.logger.warn(`Ignoring invalid/empty message: ${i}`),!0;if(!await this.subscriber.isKnownTopic(r))return this.logger.warn(`Ignoring message for unknown topic ${r}`),!0;const s=this.messages.has(r,i);return s&&this.logger.warn(`Ignoring duplicate message: ${i}`),s}async onProviderPayload(e){if(this.logger.debug("Incoming Relay Payload"),this.logger.trace({type:"payload",direction:"incoming",payload:e}),xd(e)){if(!e.method.endsWith(e5))return;const r=e.params,{topic:i,message:s,publishedAt:n,attestation:o}=r.data,a={topic:i,message:s,publishedAt:n,transportType:We.relay,attestation:o};this.logger.debug("Emitting Relayer Payload"),this.logger.trace(I0({type:"event",event:r.id},a)),this.events.emit(r.id,a),await this.acknowledgePayload(e),await this.onMessageEvent(a)}else Id(e)&&this.events.emit(ut.message_ack,e)}async onMessageEvent(e){await this.shouldIgnoreMessageEvent(e)||(await this.recordMessageEvent(e,sl.inbound),this.events.emit(ut.message,e))}async acknowledgePayload(e){const r=Pl(e.id,!0);await this.provider.connection.send(r)}unregisterProviderListeners(){this.provider.off(tr.payload,this.onPayloadHandler),this.provider.off(tr.connect,this.onConnectHandler),this.provider.off(tr.disconnect,this.onDisconnectHandler),this.provider.off(tr.error,this.onProviderErrorHandler),clearTimeout(this.pingTimeout)}async registerEventListeners(){let e=await c0();b3(async r=>{e!==r&&(e=r,r?await this.transportOpen().catch(i=>this.logger.error(i,i==null?void 0:i.message)):(this.hasExperiencedNetworkDisruption=!0,await this.transportDisconnect(),this.transportExplicitlyClosed=!1))})}async onProviderDisconnect(){clearTimeout(this.pingTimeout),this.events.emit(ut.disconnect),this.connectionAttemptInProgress=!1,!this.reconnectInProgress&&(this.reconnectInProgress=!0,await this.subscriber.stop(),this.subscriber.hasAnyTopics&&(this.transportExplicitlyClosed||(this.reconnectTimeout=setTimeout(async()=>{await this.transportOpen().catch(e=>this.logger.error(e,e==null?void 0:e.message)),this.reconnectTimeout=void 0,this.reconnectInProgress=!1},V.toMiliseconds(t5)))))}isInitialized(){if(!this.initialized){const{message:e}=q("NOT_INITIALIZED",this.name);throw new Error(e)}}async toEstablishConnection(){await this.confirmOnlineStateOrThrow(),!this.connected&&await this.connect()}};function I6(){}function A0(t){if(!t||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e===null||e===Object.prototype||Object.getPrototypeOf(e)===null?Object.prototype.toString.call(t)==="[object Object]":!1}function S0(t){return Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))}function _0(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const A6="[object RegExp]",S6="[object String]",_6="[object Number]",$6="[object Boolean]",$0="[object Arguments]",k6="[object Symbol]",N6="[object Date]",P6="[object Map]",O6="[object Set]",T6="[object Array]",R6="[object Function]",L6="[object ArrayBuffer]",vu="[object Object]",U6="[object Error]",B6="[object DataView]",M6="[object Uint8Array]",D6="[object Uint8ClampedArray]",j6="[object Uint16Array]",z6="[object Uint32Array]",q6="[object BigUint64Array]",H6="[object Int8Array]",W6="[object Int16Array]",V6="[object Int32Array]",F6="[object BigInt64Array]",K6="[object Float32Array]",Z6="[object Float64Array]";function G6(t,e){return t===e||Number.isNaN(t)&&Number.isNaN(e)}function Y6(t,e,r){return zo(t,e,void 0,void 0,void 0,void 0,r)}function zo(t,e,r,i,s,n,o){const a=o(t,e,r,i,s,n);if(a!==void 0)return a;if(typeof t==typeof e)switch(typeof t){case"bigint":case"string":case"boolean":case"symbol":case"undefined":return t===e;case"number":return t===e||Object.is(t,e);case"function":return t===e;case"object":return Yo(t,e,n,o)}return Yo(t,e,n,o)}function Yo(t,e,r,i){if(Object.is(t,e))return!0;let s=_0(t),n=_0(e);if(s===$0&&(s=vu),n===$0&&(n=vu),s!==n)return!1;switch(s){case S6:return t.toString()===e.toString();case _6:{const c=t.valueOf(),l=e.valueOf();return G6(c,l)}case $6:case N6:case k6:return Object.is(t.valueOf(),e.valueOf());case A6:return t.source===e.source&&t.flags===e.flags;case R6:return t===e}r=r??new Map;const o=r.get(t),a=r.get(e);if(o!=null&&a!=null)return o===e;r.set(t,e),r.set(e,t);try{switch(s){case P6:{if(t.size!==e.size)return!1;for(const[c,l]of t.entries())if(!e.has(c)||!zo(l,e.get(c),c,t,e,r,i))return!1;return!0}case O6:{if(t.size!==e.size)return!1;const c=Array.from(t.values()),l=Array.from(e.values());for(let u=0;u<c.length;u++){const h=c[u],d=l.findIndex(p=>zo(h,p,void 0,t,e,r,i));if(d===-1)return!1;l.splice(d,1)}return!0}case T6:case M6:case D6:case j6:case z6:case q6:case H6:case W6:case V6:case F6:case K6:case Z6:{if(typeof Buffer<"u"&&Buffer.isBuffer(t)!==Buffer.isBuffer(e)||t.length!==e.length)return!1;for(let c=0;c<t.length;c++)if(!zo(t[c],e[c],c,t,e,r,i))return!1;return!0}case L6:return t.byteLength!==e.byteLength?!1:Yo(new Uint8Array(t),new Uint8Array(e),r,i);case B6:return t.byteLength!==e.byteLength||t.byteOffset!==e.byteOffset?!1:Yo(new Uint8Array(t),new Uint8Array(e),r,i);case U6:return t.name===e.name&&t.message===e.message;case vu:{if(!(Yo(t.constructor,e.constructor,r,i)||A0(t)&&A0(e)))return!1;const c=[...Object.keys(t),...S0(t)],l=[...Object.keys(e),...S0(e)];if(c.length!==l.length)return!1;for(let u=0;u<c.length;u++){const h=c[u],d=t[h];if(!Object.hasOwn(e,h))return!1;const p=e[h];if(!zo(d,p,h,t,e,r,i))return!1}return!0}default:return!1}}finally{r.delete(t),r.delete(e)}}function J6(t,e){return Y6(t,e,I6)}var X6=Object.defineProperty,k0=Object.getOwnPropertySymbols,Q6=Object.prototype.hasOwnProperty,e8=Object.prototype.propertyIsEnumerable,Kh=(t,e,r)=>e in t?X6(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,N0=(t,e)=>{for(var r in e||(e={}))Q6.call(e,r)&&Kh(t,r,e[r]);if(k0)for(var r of k0(e))e8.call(e,r)&&Kh(t,r,e[r]);return t},Nt=(t,e,r)=>Kh(t,typeof e!="symbol"?e+"":e,r);let js=class extends O3{constructor(e,r,i,s=Vr,n=void 0){super(e,r,i,s),this.core=e,this.logger=r,this.name=i,Nt(this,"map",new Map),Nt(this,"version",r5),Nt(this,"cached",[]),Nt(this,"initialized",!1),Nt(this,"getKey"),Nt(this,"storagePrefix",Vr),Nt(this,"recentlyDeleted",[]),Nt(this,"recentlyDeletedLimit",200),Nt(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(o=>{this.getKey&&o!==null&&!mt(o)?this.map.set(this.getKey(o),o):Yy(o)?this.map.set(o.id,o):Jy(o)&&this.map.set(o.topic,o)}),this.cached=[],this.initialized=!0)}),Nt(this,"set",async(o,a)=>{this.isInitialized(),this.map.has(o)?await this.update(o,a):(this.logger.debug("Setting value"),this.logger.trace({type:"method",method:"set",key:o,value:a}),this.map.set(o,a),await this.persist())}),Nt(this,"get",o=>(this.isInitialized(),this.logger.debug("Getting value"),this.logger.trace({type:"method",method:"get",key:o}),this.getData(o))),Nt(this,"getAll",o=>(this.isInitialized(),o?this.values.filter(a=>Object.keys(o).every(c=>J6(a[c],o[c]))):this.values)),Nt(this,"update",async(o,a)=>{this.isInitialized(),this.logger.debug("Updating value"),this.logger.trace({type:"method",method:"update",key:o,update:a});const c=N0(N0({},this.getData(o)),a);this.map.set(o,c),await this.persist()}),Nt(this,"delete",async(o,a)=>{this.isInitialized(),this.map.has(o)&&(this.logger.debug("Deleting value"),this.logger.trace({type:"method",method:"delete",key:o,reason:a}),this.map.delete(o),this.addToRecentlyDeleted(o),await this.persist())}),this.logger=$t(r,this.name),this.storagePrefix=s,this.getKey=n}get context(){return Qt(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.map.size}get keys(){return Array.from(this.map.keys())}get values(){return Array.from(this.map.values())}addToRecentlyDeleted(e){this.recentlyDeleted.push(e),this.recentlyDeleted.length>=this.recentlyDeletedLimit&&this.recentlyDeleted.splice(0,this.recentlyDeletedLimit/2)}async setDataStore(e){await this.core.storage.setItem(this.storageKey,e)}async getDataStore(){return await this.core.storage.getItem(this.storageKey)}getData(e){const r=this.map.get(e);if(!r){if(this.recentlyDeleted.includes(e)){const{message:s}=q("MISSING_OR_INVALID",`Record was recently deleted - ${this.name}: ${e}`);throw this.logger.error(s),new Error(s)}const{message:i}=q("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.error(i),new Error(i)}return r}async persist(){await this.setDataStore(this.values)}async restore(){try{const e=await this.getDataStore();if(typeof e>"u"||!e.length)return;if(this.map.size){const{message:r}=q("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(r),new Error(r)}this.cached=e,this.logger.debug(`Successfully Restored value for ${this.name}`),this.logger.trace({type:"method",method:"restore",value:this.values})}catch(e){this.logger.debug(`Failed to Restore value for ${this.name}`),this.logger.error(e)}}isInitialized(){if(!this.initialized){const{message:e}=q("NOT_INITIALIZED",this.name);throw new Error(e)}}};var t8=Object.defineProperty,r8=(t,e,r)=>e in t?t8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,me=(t,e,r)=>r8(t,typeof e!="symbol"?e+"":e,r);let i8=class{constructor(e,r){this.core=e,this.logger=r,me(this,"name",o5),me(this,"version",a5),me(this,"events",new Ad),me(this,"pairings"),me(this,"initialized",!1),me(this,"storagePrefix",Vr),me(this,"ignoredPayloadTypes",[di]),me(this,"registeredMethods",[]),me(this,"init",async()=>{this.initialized||(await this.pairings.init(),await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.initialized=!0,this.logger.trace("Initialized"))}),me(this,"register",({methods:i})=>{this.isInitialized(),this.registeredMethods=[...new Set([...this.registeredMethods,...i])]}),me(this,"create",async i=>{this.isInitialized();const s=Mh(),n=await this.core.crypto.setSymKey(s),o=tt(V.FIVE_MINUTES),a={protocol:Rf},c={topic:n,expiry:o,relay:a,active:!1,methods:i==null?void 0:i.methods},l=r0({protocol:this.core.protocol,version:this.core.version,topic:n,symKey:s,relay:a,expiryTimestamp:o,methods:i==null?void 0:i.methods});return this.events.emit(ps.create,c),this.core.expirer.set(n,o),await this.pairings.set(n,c),await this.core.relayer.subscribe(n,{transportType:i==null?void 0:i.transportType}),{topic:n,uri:l}}),me(this,"pair",async i=>{this.isInitialized();const s=this.core.eventClient.createEvent({properties:{topic:i==null?void 0:i.uri,trace:[Mr.pairing_started]}});this.isValidPair(i,s);const{topic:n,symKey:o,relay:a,expiryTimestamp:c,methods:l}=t0(i.uri);s.props.properties.topic=n,s.addTrace(Mr.pairing_uri_validation_success),s.addTrace(Mr.pairing_uri_not_expired);let u;if(this.pairings.keys.includes(n)){if(u=this.pairings.get(n),s.addTrace(Mr.existing_pairing),u.active)throw s.setError(oi.active_pairing_already_exists),new Error(`Pairing already exists: ${n}. Please try again with a new connection URI.`);s.addTrace(Mr.pairing_not_expired)}const h=c||tt(V.FIVE_MINUTES),d={topic:n,relay:a,expiry:h,active:!1,methods:l};this.core.expirer.set(n,h),await this.pairings.set(n,d),s.addTrace(Mr.store_new_pairing),i.activatePairing&&await this.activate({topic:n}),this.events.emit(ps.create,d),s.addTrace(Mr.emit_inactive_pairing),this.core.crypto.keychain.has(n)||await this.core.crypto.setSymKey(o,n),s.addTrace(Mr.subscribing_pairing_topic);try{await this.core.relayer.confirmOnlineStateOrThrow()}catch{s.setError(oi.no_internet_connection)}try{await this.core.relayer.subscribe(n,{relay:a})}catch(p){throw s.setError(oi.subscribe_pairing_topic_failure),p}return s.addTrace(Mr.subscribe_pairing_topic_success),d}),me(this,"activate",async({topic:i})=>{this.isInitialized();const s=tt(V.FIVE_MINUTES);this.core.expirer.set(i,s),await this.pairings.update(i,{active:!0,expiry:s})}),me(this,"ping",async i=>{this.isInitialized(),await this.isValidPing(i),this.logger.warn("ping() is deprecated and will be removed in the next major release.");const{topic:s}=i;if(this.pairings.keys.includes(s)){const n=await this.sendRequest(s,"wc_pairingPing",{}),{done:o,resolve:a,reject:c}=ls();this.events.once(Ne("pairing_ping",n),({error:l})=>{l?c(l):a()}),await o()}}),me(this,"updateExpiry",async({topic:i,expiry:s})=>{this.isInitialized(),await this.pairings.update(i,{expiry:s})}),me(this,"updateMetadata",async({topic:i,metadata:s})=>{this.isInitialized(),await this.pairings.update(i,{peerMetadata:s})}),me(this,"getPairings",()=>(this.isInitialized(),this.pairings.values)),me(this,"disconnect",async i=>{this.isInitialized(),await this.isValidDisconnect(i);const{topic:s}=i;this.pairings.keys.includes(s)&&(await this.sendRequest(s,"wc_pairingDelete",Re("USER_DISCONNECTED")),await this.deletePairing(s))}),me(this,"formatUriFromPairing",i=>{this.isInitialized();const{topic:s,relay:n,expiry:o,methods:a}=i,c=this.core.crypto.keychain.get(s);return r0({protocol:this.core.protocol,version:this.core.version,topic:s,symKey:c,relay:n,expiryTimestamp:o,methods:a})}),me(this,"sendRequest",async(i,s,n)=>{const o=ms(s,n),a=await this.core.crypto.encode(i,o),c=co[s].req;return this.core.history.set(i,o),this.core.relayer.publish(i,a,c),o.id}),me(this,"sendResult",async(i,s,n)=>{const o=Pl(i,n),a=await this.core.crypto.encode(s,o),c=(await this.core.history.get(s,i)).request.method,l=co[c].res;await this.core.relayer.publish(s,a,l),await this.core.history.resolve(o)}),me(this,"sendError",async(i,s,n)=>{const o=Og(i,n),a=await this.core.crypto.encode(s,o),c=(await this.core.history.get(s,i)).request.method,l=co[c]?co[c].res:co.unregistered_method.res;await this.core.relayer.publish(s,a,l),await this.core.history.resolve(o)}),me(this,"deletePairing",async(i,s)=>{await this.core.relayer.unsubscribe(i),await Promise.all([this.pairings.delete(i,Re("USER_DISCONNECTED")),this.core.crypto.deleteSymKey(i),s?Promise.resolve():this.core.expirer.del(i)])}),me(this,"cleanup",async()=>{const i=this.pairings.getAll().filter(s=>Si(s.expiry));await Promise.all(i.map(s=>this.deletePairing(s.topic)))}),me(this,"onRelayEventRequest",async i=>{const{topic:s,payload:n}=i;switch(n.method){case"wc_pairingPing":return await this.onPairingPingRequest(s,n);case"wc_pairingDelete":return await this.onPairingDeleteRequest(s,n);default:return await this.onUnknownRpcMethodRequest(s,n)}}),me(this,"onRelayEventResponse",async i=>{const{topic:s,payload:n}=i,o=(await this.core.history.get(s,n.id)).request.method;switch(o){case"wc_pairingPing":return this.onPairingPingResponse(s,n);default:return this.onUnknownRpcMethodResponse(o)}}),me(this,"onPairingPingRequest",async(i,s)=>{const{id:n}=s;try{this.isValidPing({topic:i}),await this.sendResult(n,i,!0),this.events.emit(ps.ping,{id:n,topic:i})}catch(o){await this.sendError(n,i,o),this.logger.error(o)}}),me(this,"onPairingPingResponse",(i,s)=>{const{id:n}=s;setTimeout(()=>{ni(s)?this.events.emit(Ne("pairing_ping",n),{}):jr(s)&&this.events.emit(Ne("pairing_ping",n),{error:s.error})},500)}),me(this,"onPairingDeleteRequest",async(i,s)=>{const{id:n}=s;try{this.isValidDisconnect({topic:i}),await this.deletePairing(i),this.events.emit(ps.delete,{id:n,topic:i})}catch(o){await this.sendError(n,i,o),this.logger.error(o)}}),me(this,"onUnknownRpcMethodRequest",async(i,s)=>{const{id:n,method:o}=s;try{if(this.registeredMethods.includes(o))return;const a=Re("WC_METHOD_UNSUPPORTED",o);await this.sendError(n,i,a),this.logger.error(a)}catch(a){await this.sendError(n,i,a),this.logger.error(a)}}),me(this,"onUnknownRpcMethodResponse",i=>{this.registeredMethods.includes(i)||this.logger.error(Re("WC_METHOD_UNSUPPORTED",i))}),me(this,"isValidPair",(i,s)=>{var n;if(!Lt(i)){const{message:a}=q("MISSING_OR_INVALID",`pair() params: ${i}`);throw s.setError(oi.malformed_pairing_uri),new Error(a)}if(!Gy(i.uri)){const{message:a}=q("MISSING_OR_INVALID",`pair() uri: ${i.uri}`);throw s.setError(oi.malformed_pairing_uri),new Error(a)}const o=t0(i==null?void 0:i.uri);if(!((n=o==null?void 0:o.relay)!=null&&n.protocol)){const{message:a}=q("MISSING_OR_INVALID","pair() uri#relay-protocol");throw s.setError(oi.malformed_pairing_uri),new Error(a)}if(!(o!=null&&o.symKey)){const{message:a}=q("MISSING_OR_INVALID","pair() uri#symKey");throw s.setError(oi.malformed_pairing_uri),new Error(a)}if(o!=null&&o.expiryTimestamp&&V.toMiliseconds(o==null?void 0:o.expiryTimestamp)<Date.now()){s.setError(oi.pairing_expired);const{message:a}=q("EXPIRED","pair() URI has expired. Please try again with a new connection URI.");throw new Error(a)}}),me(this,"isValidPing",async i=>{if(!Lt(i)){const{message:n}=q("MISSING_OR_INVALID",`ping() params: ${i}`);throw new Error(n)}const{topic:s}=i;await this.isValidPairingTopic(s)}),me(this,"isValidDisconnect",async i=>{if(!Lt(i)){const{message:n}=q("MISSING_OR_INVALID",`disconnect() params: ${i}`);throw new Error(n)}const{topic:s}=i;await this.isValidPairingTopic(s)}),me(this,"isValidPairingTopic",async i=>{if(!Qe(i,!1)){const{message:s}=q("MISSING_OR_INVALID",`pairing topic should be a string: ${i}`);throw new Error(s)}if(!this.pairings.keys.includes(i)){const{message:s}=q("NO_MATCHING_KEY",`pairing topic doesn't exist: ${i}`);throw new Error(s)}if(Si(this.pairings.get(i).expiry)){await this.deletePairing(i);const{message:s}=q("EXPIRED",`pairing topic: ${i}`);throw new Error(s)}}),this.core=e,this.logger=$t(r,this.name),this.pairings=new js(this.core,this.logger,this.name,this.storagePrefix)}get context(){return Qt(this.logger)}isInitialized(){if(!this.initialized){const{message:e}=q("NOT_INITIALIZED",this.name);throw new Error(e)}}registerRelayerEvents(){this.core.relayer.on(ut.message,async e=>{const{topic:r,message:i,transportType:s}=e;if(this.pairings.keys.includes(r)&&s!==We.link_mode&&!this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i)))try{const n=await this.core.crypto.decode(r,i);xd(n)?(this.core.history.set(r,n),await this.onRelayEventRequest({topic:r,payload:n})):Id(n)&&(await this.core.history.resolve(n),await this.onRelayEventResponse({topic:r,payload:n}),this.core.history.delete(r,n.id)),await this.core.relayer.messages.ack(r,i)}catch(n){this.logger.error(n)}})}registerExpirerEvents(){this.core.expirer.on(dr.expired,async e=>{const{topic:r}=Gg(e.target);r&&this.pairings.keys.includes(r)&&(await this.deletePairing(r,!0),this.events.emit(ps.expire,{topic:r}))})}};var s8=Object.defineProperty,n8=(t,e,r)=>e in t?s8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ft=(t,e,r)=>n8(t,typeof e!="symbol"?e+"":e,r);let o8=class extends $3{constructor(e,r){super(e,r),this.core=e,this.logger=r,ft(this,"records",new Map),ft(this,"events",new zi.EventEmitter),ft(this,"name",c5),ft(this,"version",l5),ft(this,"cached",[]),ft(this,"initialized",!1),ft(this,"storagePrefix",Vr),ft(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(i=>this.records.set(i.id,i)),this.cached=[],this.registerEventListeners(),this.initialized=!0)}),ft(this,"set",(i,s,n)=>{if(this.isInitialized(),this.logger.debug("Setting JSON-RPC request history record"),this.logger.trace({type:"method",method:"set",topic:i,request:s,chainId:n}),this.records.has(s.id))return;const o={id:s.id,topic:i,request:{method:s.method,params:s.params||null},chainId:n,expiry:tt(V.THIRTY_DAYS)};this.records.set(o.id,o),this.persist(),this.events.emit(wr.created,o)}),ft(this,"resolve",async i=>{if(this.isInitialized(),this.logger.debug("Updating JSON-RPC response history record"),this.logger.trace({type:"method",method:"update",response:i}),!this.records.has(i.id))return;const s=await this.getRecord(i.id);typeof s.response>"u"&&(s.response=jr(i)?{error:i.error}:{result:i.result},this.records.set(s.id,s),this.persist(),this.events.emit(wr.updated,s))}),ft(this,"get",async(i,s)=>(this.isInitialized(),this.logger.debug("Getting record"),this.logger.trace({type:"method",method:"get",topic:i,id:s}),await this.getRecord(s))),ft(this,"delete",(i,s)=>{this.isInitialized(),this.logger.debug("Deleting record"),this.logger.trace({type:"method",method:"delete",id:s}),this.values.forEach(n=>{if(n.topic===i){if(typeof s<"u"&&n.id!==s)return;this.records.delete(n.id),this.events.emit(wr.deleted,n)}}),this.persist()}),ft(this,"exists",async(i,s)=>(this.isInitialized(),this.records.has(s)?(await this.getRecord(s)).topic===i:!1)),ft(this,"on",(i,s)=>{this.events.on(i,s)}),ft(this,"once",(i,s)=>{this.events.once(i,s)}),ft(this,"off",(i,s)=>{this.events.off(i,s)}),ft(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),this.logger=$t(r,this.name)}get context(){return Qt(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get size(){return this.records.size}get keys(){return Array.from(this.records.keys())}get values(){return Array.from(this.records.values())}get pending(){const e=[];return this.values.forEach(r=>{if(typeof r.response<"u")return;const i={topic:r.topic,request:ms(r.request.method,r.request.params,r.id),chainId:r.chainId};return e.push(i)}),e}async setJsonRpcRecords(e){await this.core.storage.setItem(this.storageKey,e)}async getJsonRpcRecords(){return await this.core.storage.getItem(this.storageKey)}getRecord(e){this.isInitialized();const r=this.records.get(e);if(!r){const{message:i}=q("NO_MATCHING_KEY",`${this.name}: ${e}`);throw new Error(i)}return r}async persist(){await this.setJsonRpcRecords(this.values),this.events.emit(wr.sync)}async restore(){try{const e=await this.getJsonRpcRecords();if(typeof e>"u"||!e.length)return;if(this.records.size){const{message:r}=q("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(r),new Error(r)}this.cached=e,this.logger.debug(`Successfully Restored records for ${this.name}`),this.logger.trace({type:"method",method:"restore",records:this.values})}catch(e){this.logger.debug(`Failed to Restore records for ${this.name}`),this.logger.error(e)}}registerEventListeners(){this.events.on(wr.created,e=>{const r=wr.created;this.logger.info(`Emitting ${r}`),this.logger.debug({type:"event",event:r,record:e})}),this.events.on(wr.updated,e=>{const r=wr.updated;this.logger.info(`Emitting ${r}`),this.logger.debug({type:"event",event:r,record:e})}),this.events.on(wr.deleted,e=>{const r=wr.deleted;this.logger.info(`Emitting ${r}`),this.logger.debug({type:"event",event:r,record:e})}),this.core.heartbeat.on(Ma.pulse,()=>{this.cleanup()})}cleanup(){try{this.isInitialized();let e=!1;this.records.forEach(r=>{V.toMiliseconds(r.expiry||0)-Date.now()<=0&&(this.logger.info(`Deleting expired history log: ${r.id}`),this.records.delete(r.id),this.events.emit(wr.deleted,r,!1),e=!0)}),e&&this.persist()}catch(e){this.logger.warn(e)}}isInitialized(){if(!this.initialized){const{message:e}=q("NOT_INITIALIZED",this.name);throw new Error(e)}}};var a8=Object.defineProperty,c8=(t,e,r)=>e in t?a8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,yt=(t,e,r)=>c8(t,typeof e!="symbol"?e+"":e,r);let l8=class extends R3{constructor(e,r){super(e,r),this.core=e,this.logger=r,yt(this,"expirations",new Map),yt(this,"events",new zi.EventEmitter),yt(this,"name",u5),yt(this,"version",h5),yt(this,"cached",[]),yt(this,"initialized",!1),yt(this,"storagePrefix",Vr),yt(this,"init",async()=>{this.initialized||(this.logger.trace("Initialized"),await this.restore(),this.cached.forEach(i=>this.expirations.set(i.target,i)),this.cached=[],this.registerEventListeners(),this.initialized=!0)}),yt(this,"has",i=>{try{const s=this.formatTarget(i);return typeof this.getExpiration(s)<"u"}catch{return!1}}),yt(this,"set",(i,s)=>{this.isInitialized();const n=this.formatTarget(i),o={target:n,expiry:s};this.expirations.set(n,o),this.checkExpiry(n,o),this.events.emit(dr.created,{target:n,expiration:o})}),yt(this,"get",i=>{this.isInitialized();const s=this.formatTarget(i);return this.getExpiration(s)}),yt(this,"del",i=>{if(this.isInitialized(),this.has(i)){const s=this.formatTarget(i),n=this.getExpiration(s);this.expirations.delete(s),this.events.emit(dr.deleted,{target:s,expiration:n})}}),yt(this,"on",(i,s)=>{this.events.on(i,s)}),yt(this,"once",(i,s)=>{this.events.once(i,s)}),yt(this,"off",(i,s)=>{this.events.off(i,s)}),yt(this,"removeListener",(i,s)=>{this.events.removeListener(i,s)}),this.logger=$t(r,this.name)}get context(){return Qt(this.logger)}get storageKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//"+this.name}get length(){return this.expirations.size}get keys(){return Array.from(this.expirations.keys())}get values(){return Array.from(this.expirations.values())}formatTarget(e){if(typeof e=="string")return ov(e);if(typeof e=="number")return av(e);const{message:r}=q("UNKNOWN_TYPE",`Target type: ${typeof e}`);throw new Error(r)}async setExpirations(e){await this.core.storage.setItem(this.storageKey,e)}async getExpirations(){return await this.core.storage.getItem(this.storageKey)}async persist(){await this.setExpirations(this.values),this.events.emit(dr.sync)}async restore(){try{const e=await this.getExpirations();if(typeof e>"u"||!e.length)return;if(this.expirations.size){const{message:r}=q("RESTORE_WILL_OVERRIDE",this.name);throw this.logger.error(r),new Error(r)}this.cached=e,this.logger.debug(`Successfully Restored expirations for ${this.name}`),this.logger.trace({type:"method",method:"restore",expirations:this.values})}catch(e){this.logger.debug(`Failed to Restore expirations for ${this.name}`),this.logger.error(e)}}getExpiration(e){const r=this.expirations.get(e);if(!r){const{message:i}=q("NO_MATCHING_KEY",`${this.name}: ${e}`);throw this.logger.warn(i),new Error(i)}return r}checkExpiry(e,r){const{expiry:i}=r;V.toMiliseconds(i)-Date.now()<=0&&this.expire(e,r)}expire(e,r){this.expirations.delete(e),this.events.emit(dr.expired,{target:e,expiration:r})}checkExpirations(){this.core.relayer.connected&&this.expirations.forEach((e,r)=>this.checkExpiry(r,e))}registerEventListeners(){this.core.heartbeat.on(Ma.pulse,()=>this.checkExpirations()),this.events.on(dr.created,e=>{const r=dr.created;this.logger.info(`Emitting ${r}`),this.logger.debug({type:"event",event:r,data:e}),this.persist()}),this.events.on(dr.expired,e=>{const r=dr.expired;this.logger.info(`Emitting ${r}`),this.logger.debug({type:"event",event:r,data:e}),this.persist()}),this.events.on(dr.deleted,e=>{const r=dr.deleted;this.logger.info(`Emitting ${r}`),this.logger.debug({type:"event",event:r,data:e}),this.persist()})}isInitialized(){if(!this.initialized){const{message:e}=q("NOT_INITIALIZED",this.name);throw new Error(e)}}};var u8=Object.defineProperty,h8=(t,e,r)=>e in t?u8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Xe=(t,e,r)=>h8(t,typeof e!="symbol"?e+"":e,r);let d8=class extends L3{constructor(e,r,i){super(e,r,i),this.core=e,this.logger=r,this.store=i,Xe(this,"name",d5),Xe(this,"abortController"),Xe(this,"isDevEnv"),Xe(this,"verifyUrlV3",g5),Xe(this,"storagePrefix",Vr),Xe(this,"version",Tf),Xe(this,"publicKey"),Xe(this,"fetchPromise"),Xe(this,"init",async()=>{var s;this.isDevEnv||(this.publicKey=await this.store.getItem(this.storeKey),this.publicKey&&V.toMiliseconds((s=this.publicKey)==null?void 0:s.expiresAt)<Date.now()&&(this.logger.debug("verify v2 public key expired"),await this.removePublicKey()))}),Xe(this,"register",async s=>{if(!Da()||this.isDevEnv)return;const n=window.location.origin,{id:o,decryptedId:a}=s,c=`${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n}&id=${o}&decryptedId=${a}`;try{const l=$s.getDocument(),u=this.startAbortTimer(V.ONE_SECOND*5),h=await new Promise((d,p)=>{const w=()=>{window.removeEventListener("message",f),l.body.removeChild(g),p("attestation aborted")};this.abortController.signal.addEventListener("abort",w);const g=l.createElement("iframe");g.src=c,g.style.display="none",g.addEventListener("error",w,{signal:this.abortController.signal});const f=m=>{if(m.data&&typeof m.data=="string")try{const v=JSON.parse(m.data);if(v.type==="verify_attestation"){if(Ih(v.attestation).payload.id!==o)return;clearInterval(u),l.body.removeChild(g),this.abortController.signal.removeEventListener("abort",w),window.removeEventListener("message",f),d(v.attestation===null?"":v.attestation)}}catch(v){this.logger.warn(v)}};l.body.appendChild(g),window.addEventListener("message",f,{signal:this.abortController.signal})});return this.logger.debug("jwt attestation",h),h}catch(l){this.logger.warn(l)}return""}),Xe(this,"resolve",async s=>{if(this.isDevEnv)return"";const{attestationId:n,hash:o,encryptedId:a}=s;if(n===""){this.logger.debug("resolve: attestationId is empty, skipping");return}if(n){if(Ih(n).payload.id!==a)return;const l=await this.isValidJwtAttestation(n);if(l){if(!l.isVerified){this.logger.warn("resolve: jwt attestation: origin url not verified");return}return l}}if(!o)return;const c=this.getVerifyUrl(s==null?void 0:s.verifyUrl);return this.fetchAttestation(o,c)}),Xe(this,"fetchAttestation",async(s,n)=>{this.logger.debug(`resolving attestation: ${s} from url: ${n}`);const o=this.startAbortTimer(V.ONE_SECOND*5),a=await fetch(`${n}/attestation/${s}?v2Supported=true`,{signal:this.abortController.signal});return clearTimeout(o),a.status===200?await a.json():void 0}),Xe(this,"getVerifyUrl",s=>{let n=s||Go;return f5.includes(n)||(this.logger.info(`verify url: ${n}, not included in trusted list, assigning default: ${Go}`),n=Go),n}),Xe(this,"fetchPublicKey",async()=>{try{this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);const s=this.startAbortTimer(V.FIVE_SECONDS),n=await fetch(`${this.verifyUrlV3}/public-key`,{signal:this.abortController.signal});return clearTimeout(s),await n.json()}catch(s){this.logger.warn(s)}}),Xe(this,"persistPublicKey",async s=>{this.logger.debug("persisting public key to local storage",s),await this.store.setItem(this.storeKey,s),this.publicKey=s}),Xe(this,"removePublicKey",async()=>{this.logger.debug("removing verify v2 public key from storage"),await this.store.removeItem(this.storeKey),this.publicKey=void 0}),Xe(this,"isValidJwtAttestation",async s=>{const n=await this.getPublicKey();try{if(n)return this.validateAttestation(s,n)}catch(a){this.logger.error(a),this.logger.warn("error validating attestation")}const o=await this.fetchAndPersistPublicKey();try{if(o)return this.validateAttestation(s,o)}catch(a){this.logger.error(a),this.logger.warn("error validating attestation")}}),Xe(this,"getPublicKey",async()=>this.publicKey?this.publicKey:await this.fetchAndPersistPublicKey()),Xe(this,"fetchAndPersistPublicKey",async()=>{if(this.fetchPromise)return await this.fetchPromise,this.publicKey;this.fetchPromise=new Promise(async n=>{const o=await this.fetchPublicKey();o&&(await this.persistPublicKey(o),n(o))});const s=await this.fetchPromise;return this.fetchPromise=void 0,s}),Xe(this,"validateAttestation",(s,n)=>{const o=Uy(s,n.publicKey),a={hasExpired:V.toMiliseconds(o.exp)<Date.now(),payload:o};if(a.hasExpired)throw this.logger.warn("resolve: jwt attestation expired"),new Error("JWT attestation expired");return{origin:a.payload.origin,isScam:a.payload.isScam,isVerified:a.payload.isVerified}}),this.logger=$t(r,this.name),this.abortController=new AbortController,this.isDevEnv=_d(),this.init()}get storeKey(){return this.storagePrefix+this.version+this.core.customStoragePrefix+"//verify:public:key"}get context(){return Qt(this.logger)}startAbortTimer(e){return this.abortController=new AbortController,setTimeout(()=>this.abortController.abort(),V.toMiliseconds(e))}};var p8=Object.defineProperty,g8=(t,e,r)=>e in t?p8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,P0=(t,e,r)=>g8(t,typeof e!="symbol"?e+"":e,r);let f8=class extends U3{constructor(e,r){super(e,r),this.projectId=e,this.logger=r,P0(this,"context",w5),P0(this,"registerDeviceToken",async i=>{const{clientId:s,token:n,notificationType:o,enableEncrypted:a=!1}=i,c=`${m5}/${this.projectId}/clients`;await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:s,type:o,token:n,always_raw:a})})}),this.logger=$t(r,this.context)}};var w8=Object.defineProperty,O0=Object.getOwnPropertySymbols,m8=Object.prototype.hasOwnProperty,v8=Object.prototype.propertyIsEnumerable,Zh=(t,e,r)=>e in t?w8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ho=(t,e)=>{for(var r in e||(e={}))m8.call(e,r)&&Zh(t,r,e[r]);if(O0)for(var r of O0(e))v8.call(e,r)&&Zh(t,r,e[r]);return t},nt=(t,e,r)=>Zh(t,typeof e!="symbol"?e+"":e,r);let b8=class extends B3{constructor(e,r,i=!0){super(e,r,i),this.core=e,this.logger=r,nt(this,"context",b5),nt(this,"storagePrefix",Vr),nt(this,"storageVersion",v5),nt(this,"events",new Map),nt(this,"shouldPersist",!1),nt(this,"init",async()=>{if(!_d())try{const s={eventId:Ap(),timestamp:Date.now(),domain:this.getAppDomain(),props:{event:"INIT",type:"",properties:{client_id:await this.core.crypto.getClientId(),user_agent:Kg(this.core.relayer.protocol,this.core.relayer.version,jh)}}};await this.sendEvent([s])}catch(s){this.logger.warn(s)}}),nt(this,"createEvent",s=>{const{event:n="ERROR",type:o="",properties:{topic:a,trace:c}}=s,l=Ap(),u=this.core.projectId||"",h=Date.now(),d=ho({eventId:l,timestamp:h,props:{event:n,type:o,properties:{topic:a,trace:c}},bundleId:u,domain:this.getAppDomain()},this.setMethods(l));return this.telemetryEnabled&&(this.events.set(l,d),this.shouldPersist=!0),d}),nt(this,"getEvent",s=>{const{eventId:n,topic:o}=s;if(n)return this.events.get(n);const a=Array.from(this.events.values()).find(c=>c.props.properties.topic===o);if(a)return ho(ho({},a),this.setMethods(a.eventId))}),nt(this,"deleteEvent",s=>{const{eventId:n}=s;this.events.delete(n),this.shouldPersist=!0}),nt(this,"setEventListeners",()=>{this.core.heartbeat.on(Ma.pulse,async()=>{this.shouldPersist&&await this.persist(),this.events.forEach(s=>{V.fromMiliseconds(Date.now())-V.fromMiliseconds(s.timestamp)>y5&&(this.events.delete(s.eventId),this.shouldPersist=!0)})})}),nt(this,"setMethods",s=>({addTrace:n=>this.addTrace(s,n),setError:n=>this.setError(s,n)})),nt(this,"addTrace",(s,n)=>{const o=this.events.get(s);o&&(o.props.properties.trace.push(n),this.events.set(s,o),this.shouldPersist=!0)}),nt(this,"setError",(s,n)=>{const o=this.events.get(s);o&&(o.props.type=n,o.timestamp=Date.now(),this.events.set(s,o),this.shouldPersist=!0)}),nt(this,"persist",async()=>{await this.core.storage.setItem(this.storageKey,Array.from(this.events.values())),this.shouldPersist=!1}),nt(this,"restore",async()=>{try{const s=await this.core.storage.getItem(this.storageKey)||[];if(!s.length)return;s.forEach(n=>{this.events.set(n.eventId,ho(ho({},n),this.setMethods(n.eventId)))})}catch(s){this.logger.warn(s)}}),nt(this,"submit",async()=>{if(!this.telemetryEnabled||this.events.size===0)return;const s=[];for(const[n,o]of this.events)o.props.type&&s.push(o);if(s.length!==0)try{if((await this.sendEvent(s)).ok)for(const n of s)this.events.delete(n.eventId),this.shouldPersist=!0}catch(n){this.logger.warn(n)}}),nt(this,"sendEvent",async s=>{const n=this.getAppDomain()?"":"&sp=desktop";return await fetch(`${C5}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${jh}${n}`,{method:"POST",body:JSON.stringify(s)})}),nt(this,"getAppDomain",()=>Fg().url),this.logger=$t(r,this.context),this.telemetryEnabled=i,i?this.restore().then(async()=>{await this.submit(),this.setEventListeners()}):this.persist()}get storageKey(){return this.storagePrefix+this.storageVersion+this.core.customStoragePrefix+"//"+this.context}};var y8=Object.defineProperty,T0=Object.getOwnPropertySymbols,C8=Object.prototype.hasOwnProperty,E8=Object.prototype.propertyIsEnumerable,Gh=(t,e,r)=>e in t?y8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,R0=(t,e)=>{for(var r in e||(e={}))C8.call(e,r)&&Gh(t,r,e[r]);if(T0)for(var r of T0(e))E8.call(e,r)&&Gh(t,r,e[r]);return t},ze=(t,e,r)=>Gh(t,typeof e!="symbol"?e+"":e,r);let x8=class Kf extends I3{constructor(e){var r;super(e),ze(this,"protocol",Of),ze(this,"version",Tf),ze(this,"name",Dh),ze(this,"relayUrl"),ze(this,"projectId"),ze(this,"customStoragePrefix"),ze(this,"events",new zi.EventEmitter),ze(this,"logger"),ze(this,"heartbeat"),ze(this,"relayer"),ze(this,"crypto"),ze(this,"storage"),ze(this,"history"),ze(this,"expirer"),ze(this,"pairing"),ze(this,"verify"),ze(this,"echoClient"),ze(this,"linkModeSupportedApps"),ze(this,"eventClient"),ze(this,"initialized",!1),ze(this,"logChunkController"),ze(this,"on",(a,c)=>this.events.on(a,c)),ze(this,"once",(a,c)=>this.events.once(a,c)),ze(this,"off",(a,c)=>this.events.off(a,c)),ze(this,"removeListener",(a,c)=>this.events.removeListener(a,c)),ze(this,"dispatchEnvelope",({topic:a,message:c,sessionExists:l})=>{if(!a||!c)return;const u={topic:a,message:c,publishedAt:Date.now(),transportType:We.link_mode};this.relayer.onLinkMessageEvent(u,{sessionExists:l})});const i=this.getGlobalCore(e==null?void 0:e.customStoragePrefix);if(i)try{return this.customStoragePrefix=i.customStoragePrefix,this.logger=i.logger,this.heartbeat=i.heartbeat,this.crypto=i.crypto,this.history=i.history,this.expirer=i.expirer,this.storage=i.storage,this.relayer=i.relayer,this.pairing=i.pairing,this.verify=i.verify,this.echoClient=i.echoClient,this.linkModeSupportedApps=i.linkModeSupportedApps,this.eventClient=i.eventClient,this.initialized=i.initialized,this.logChunkController=i.logChunkController,i}catch(a){console.warn("Failed to copy global core",a)}this.projectId=e==null?void 0:e.projectId,this.relayUrl=(e==null?void 0:e.relayUrl)||Lf,this.customStoragePrefix=e!=null&&e.customStoragePrefix?`:${e.customStoragePrefix}`:"";const s=Nl({level:typeof(e==null?void 0:e.logger)=="string"&&e.logger?e.logger:H3.logger,name:Dh}),{logger:n,chunkLoggerController:o}=Gm({opts:s,maxSizeInBytes:e==null?void 0:e.maxLogBlobSizeInBytes,loggerOverride:e==null?void 0:e.logger});this.logChunkController=o,(r=this.logChunkController)!=null&&r.downloadLogsBlobInBrowser&&(window.downloadLogsBlobInBrowser=async()=>{var a,c;(a=this.logChunkController)!=null&&a.downloadLogsBlobInBrowser&&((c=this.logChunkController)==null||c.downloadLogsBlobInBrowser({clientId:await this.crypto.getClientId()}))}),this.logger=$t(n,this.name),this.heartbeat=new Ym,this.crypto=new Y4(this,this.logger,e==null?void 0:e.keychain),this.history=new o8(this,this.logger),this.expirer=new l8(this,this.logger),this.storage=e!=null&&e.storage?e.storage:new Jm(R0(R0({},W3),e==null?void 0:e.storageOptions)),this.relayer=new x6({core:this,logger:this.logger,relayUrl:this.relayUrl,projectId:this.projectId}),this.pairing=new i8(this,this.logger),this.verify=new d8(this,this.logger,this.storage),this.echoClient=new f8(this.projectId||"",this.logger),this.linkModeSupportedApps=[],this.eventClient=new b8(this,this.logger,e==null?void 0:e.telemetryEnabled),this.setGlobalCore(this)}static async init(e){const r=new Kf(e);await r.initialize();const i=await r.crypto.getClientId();return await r.storage.setItem(i5,i),r}get context(){return Qt(this.logger)}async start(){this.initialized||await this.initialize()}async getLogsBlob(){var e;return(e=this.logChunkController)==null?void 0:e.logsToBlob({clientId:await this.crypto.getClientId()})}async addLinkModeSupportedApp(e){this.linkModeSupportedApps.includes(e)||(this.linkModeSupportedApps.push(e),await this.storage.setItem(p0,this.linkModeSupportedApps))}async initialize(){this.logger.trace("Initialized");try{await this.crypto.init(),await this.history.init(),await this.expirer.init(),await this.relayer.init(),await this.heartbeat.init(),await this.pairing.init(),this.linkModeSupportedApps=await this.storage.getItem(p0)||[],this.initialized=!0,this.logger.info("Core Initialization Success")}catch(e){throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`,e),this.logger.error(e.message),e}}getGlobalCore(e=""){try{if(this.isGlobalCoreDisabled())return;const r=`_walletConnectCore_${e}`,i=`${r}_count`;return globalThis[i]=(globalThis[i]||0)+1,globalThis[i]>1&&console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i]} times.`),globalThis[r]}catch(r){console.warn("Failed to get global WalletConnect core",r);return}}setGlobalCore(e){var r;try{if(this.isGlobalCoreDisabled())return;const i=`_walletConnectCore_${((r=e.opts)==null?void 0:r.customStoragePrefix)||""}`;globalThis[i]=e}catch(i){console.warn("Failed to set global WalletConnect core",i)}}isGlobalCoreDisabled(){try{return typeof process<"u"&&q3.DISABLE_GLOBAL_CORE==="true"}catch{return!0}}};const I8=x8,Zf="wc",Gf=2,Yf="client",Ud=`${Zf}@${Gf}:${Yf}:`,bu={name:Yf,logger:"error"},L0="WALLETCONNECT_DEEPLINK_CHOICE",A8="proposal",U0="Proposal expired",S8="session",Fs=V.SEVEN_DAYS,_8="engine",ot={wc_sessionPropose:{req:{ttl:V.FIVE_MINUTES,prompt:!0,tag:1100},res:{ttl:V.FIVE_MINUTES,prompt:!1,tag:1101},reject:{ttl:V.FIVE_MINUTES,prompt:!1,tag:1120},autoReject:{ttl:V.FIVE_MINUTES,prompt:!1,tag:1121}},wc_sessionSettle:{req:{ttl:V.FIVE_MINUTES,prompt:!1,tag:1102},res:{ttl:V.FIVE_MINUTES,prompt:!1,tag:1103}},wc_sessionUpdate:{req:{ttl:V.ONE_DAY,prompt:!1,tag:1104},res:{ttl:V.ONE_DAY,prompt:!1,tag:1105}},wc_sessionExtend:{req:{ttl:V.ONE_DAY,prompt:!1,tag:1106},res:{ttl:V.ONE_DAY,prompt:!1,tag:1107}},wc_sessionRequest:{req:{ttl:V.FIVE_MINUTES,prompt:!0,tag:1108},res:{ttl:V.FIVE_MINUTES,prompt:!1,tag:1109}},wc_sessionEvent:{req:{ttl:V.FIVE_MINUTES,prompt:!0,tag:1110},res:{ttl:V.FIVE_MINUTES,prompt:!1,tag:1111}},wc_sessionDelete:{req:{ttl:V.ONE_DAY,prompt:!1,tag:1112},res:{ttl:V.ONE_DAY,prompt:!1,tag:1113}},wc_sessionPing:{req:{ttl:V.ONE_DAY,prompt:!1,tag:1114},res:{ttl:V.ONE_DAY,prompt:!1,tag:1115}},wc_sessionAuthenticate:{req:{ttl:V.ONE_HOUR,prompt:!0,tag:1116},res:{ttl:V.ONE_HOUR,prompt:!1,tag:1117},reject:{ttl:V.FIVE_MINUTES,prompt:!1,tag:1118},autoReject:{ttl:V.FIVE_MINUTES,prompt:!1,tag:1119}}},yu={min:V.FIVE_MINUTES,max:V.SEVEN_DAYS},Or={idle:"IDLE",active:"ACTIVE"},B0={eth_sendTransaction:{key:""},eth_sendRawTransaction:{key:""},wallet_sendCalls:{key:""},solana_signTransaction:{key:"signature"},solana_signAllTransactions:{key:"transactions"},solana_signAndSendTransaction:{key:"signature"}},$8="request",k8=["wc_sessionPropose","wc_sessionRequest","wc_authRequest","wc_sessionAuthenticate"],N8="wc",P8="auth",O8="authKeys",T8="pairingTopics",R8="requests",Dl=`${N8}@${1.5}:${P8}:`,nl=`${Dl}:PUB_KEY`;var L8=Object.defineProperty,U8=Object.defineProperties,B8=Object.getOwnPropertyDescriptors,M0=Object.getOwnPropertySymbols,M8=Object.prototype.hasOwnProperty,D8=Object.prototype.propertyIsEnumerable,Yh=(t,e,r)=>e in t?L8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Be=(t,e)=>{for(var r in e||(e={}))M8.call(e,r)&&Yh(t,r,e[r]);if(M0)for(var r of M0(e))D8.call(e,r)&&Yh(t,r,e[r]);return t},It=(t,e)=>U8(t,B8(e)),D=(t,e,r)=>Yh(t,typeof e!="symbol"?e+"":e,r);let j8=class extends z3{constructor(e){super(e),D(this,"name",_8),D(this,"events",new Ad),D(this,"initialized",!1),D(this,"requestQueue",{state:Or.idle,queue:[]}),D(this,"sessionRequestQueue",{state:Or.idle,queue:[]}),D(this,"requestQueueDelay",V.ONE_SECOND),D(this,"expectedPairingMethodMap",new Map),D(this,"recentlyDeletedMap",new Map),D(this,"recentlyDeletedLimit",200),D(this,"relayMessageCache",[]),D(this,"pendingSessions",new Map),D(this,"init",async()=>{this.initialized||(await this.cleanup(),this.registerRelayerEvents(),this.registerExpirerEvents(),this.registerPairingEvents(),await this.registerLinkModeListeners(),this.client.core.pairing.register({methods:Object.keys(ot)}),this.initialized=!0,setTimeout(async()=>{await this.processPendingMessageEvents(),this.sessionRequestQueue.queue=this.getPendingSessionRequests(),this.processSessionRequestQueue()},V.toMiliseconds(this.requestQueueDelay)))}),D(this,"connect",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();const i=It(Be({},r),{requiredNamespaces:r.requiredNamespaces||{},optionalNamespaces:r.optionalNamespaces||{}});await this.isValidConnect(i);const{pairingTopic:s,requiredNamespaces:n,optionalNamespaces:o,sessionProperties:a,scopedProperties:c,relays:l}=i;let u=s,h,d=!1;try{if(u){const _=this.client.core.pairing.pairings.get(u);this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."),d=_.active}}catch(_){throw this.client.logger.error(`connect() -> pairing.get(${u}) failed`),_}if(!u||!d){const{topic:_,uri:P}=await this.client.core.pairing.create();u=_,h=P}if(!u){const{message:_}=q("NO_MATCHING_KEY",`connect() pairing topic: ${u}`);throw new Error(_)}const p=await this.client.core.crypto.generateKeyPair(),w=ot.wc_sessionPropose.req.ttl||V.FIVE_MINUTES,g=tt(w),f=It(Be(Be({requiredNamespaces:n,optionalNamespaces:o,relays:l??[{protocol:Rf}],proposer:{publicKey:p,metadata:this.client.metadata},expiryTimestamp:g,pairingTopic:u},a&&{sessionProperties:a}),c&&{scopedProperties:c}),{id:wi()}),m=Ne("session_connect",f.id),{reject:v,resolve:b,done:y}=ls(w,U0),$=({id:_})=>{_===f.id&&(this.client.events.off("proposal_expire",$),this.pendingSessions.delete(f.id),this.events.emit(m,{error:{message:U0,code:0}}))};return this.client.events.on("proposal_expire",$),this.events.once(m,({error:_,session:P})=>{this.client.events.off("proposal_expire",$),_?v(_):P&&b(P)}),await this.sendRequest({topic:u,method:"wc_sessionPropose",params:f,throwOnFailedPublish:!0,clientRpcId:f.id}),await this.setProposal(f.id,f),{uri:h,approval:y}}),D(this,"pair",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{return await this.client.core.pairing.pair(r)}catch(i){throw this.client.logger.error("pair() failed"),i}}),D(this,"approve",async r=>{var i,s,n;const o=this.client.core.eventClient.createEvent({properties:{topic:(i=r==null?void 0:r.id)==null?void 0:i.toString(),trace:[mr.session_approve_started]}});try{this.isInitialized(),await this.confirmOnlineStateOrThrow()}catch(S){throw o.setError(Vi.no_internet_connection),S}try{await this.isValidProposalId(r==null?void 0:r.id)}catch(S){throw this.client.logger.error(`approve() -> proposal.get(${r==null?void 0:r.id}) failed`),o.setError(Vi.proposal_not_found),S}try{await this.isValidApprove(r)}catch(S){throw this.client.logger.error("approve() -> isValidApprove() failed"),o.setError(Vi.session_approve_namespace_validation_failure),S}const{id:a,relayProtocol:c,namespaces:l,sessionProperties:u,scopedProperties:h,sessionConfig:d}=r,p=this.client.proposal.get(a);this.client.core.eventClient.deleteEvent({eventId:o.eventId});const{pairingTopic:w,proposer:g,requiredNamespaces:f,optionalNamespaces:m}=p;let v=(s=this.client.core.eventClient)==null?void 0:s.getEvent({topic:w});v||(v=(n=this.client.core.eventClient)==null?void 0:n.createEvent({type:mr.session_approve_started,properties:{topic:w,trace:[mr.session_approve_started,mr.session_namespaces_validation_success]}}));const b=await this.client.core.crypto.generateKeyPair(),y=g.publicKey,$=await this.client.core.crypto.generateSharedKey(b,y),_=Be(Be(Be({relay:{protocol:c??"irn"},namespaces:l,controller:{publicKey:b,metadata:this.client.metadata},expiry:tt(Fs)},u&&{sessionProperties:u}),h&&{scopedProperties:h}),d&&{sessionConfig:d}),P=We.relay;v.addTrace(mr.subscribing_session_topic);try{await this.client.core.relayer.subscribe($,{transportType:P})}catch(S){throw v.setError(Vi.subscribe_session_topic_failure),S}v.addTrace(mr.subscribe_session_topic_success);const k=It(Be({},_),{topic:$,requiredNamespaces:f,optionalNamespaces:m,pairingTopic:w,acknowledged:!1,self:_.controller,peer:{publicKey:g.publicKey,metadata:g.metadata},controller:b,transportType:We.relay});await this.client.session.set($,k),v.addTrace(mr.store_session);try{v.addTrace(mr.publishing_session_settle),await this.sendRequest({topic:$,method:"wc_sessionSettle",params:_,throwOnFailedPublish:!0}).catch(S=>{throw v==null||v.setError(Vi.session_settle_publish_failure),S}),v.addTrace(mr.session_settle_publish_success),v.addTrace(mr.publishing_session_approve),await this.sendResult({id:a,topic:w,result:{relay:{protocol:c??"irn"},responderPublicKey:b},throwOnFailedPublish:!0}).catch(S=>{throw v==null||v.setError(Vi.session_approve_publish_failure),S}),v.addTrace(mr.session_approve_publish_success)}catch(S){throw this.client.logger.error(S),this.client.session.delete($,Re("USER_DISCONNECTED")),await this.client.core.relayer.unsubscribe($),S}return this.client.core.eventClient.deleteEvent({eventId:v.eventId}),await this.client.core.pairing.updateMetadata({topic:w,metadata:g.metadata}),await this.client.proposal.delete(a,Re("USER_DISCONNECTED")),await this.client.core.pairing.activate({topic:w}),await this.setExpiry($,tt(Fs)),{topic:$,acknowledged:()=>Promise.resolve(this.client.session.get($))}}),D(this,"reject",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidReject(r)}catch(o){throw this.client.logger.error("reject() -> isValidReject() failed"),o}const{id:i,reason:s}=r;let n;try{n=this.client.proposal.get(i).pairingTopic}catch(o){throw this.client.logger.error(`reject() -> proposal.get(${i}) failed`),o}n&&(await this.sendError({id:i,topic:n,error:s,rpcOpts:ot.wc_sessionPropose.reject}),await this.client.proposal.delete(i,Re("USER_DISCONNECTED")))}),D(this,"update",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidUpdate(r)}catch(h){throw this.client.logger.error("update() -> isValidUpdate() failed"),h}const{topic:i,namespaces:s}=r,{done:n,resolve:o,reject:a}=ls(),c=wi(),l=An().toString(),u=this.client.session.get(i).namespaces;return this.events.once(Ne("session_update",c),({error:h})=>{h?a(h):o()}),await this.client.session.update(i,{namespaces:s}),await this.sendRequest({topic:i,method:"wc_sessionUpdate",params:{namespaces:s},throwOnFailedPublish:!0,clientRpcId:c,relayRpcId:l}).catch(h=>{this.client.logger.error(h),this.client.session.update(i,{namespaces:u}),a(h)}),{acknowledged:n}}),D(this,"extend",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidExtend(r)}catch(c){throw this.client.logger.error("extend() -> isValidExtend() failed"),c}const{topic:i}=r,s=wi(),{done:n,resolve:o,reject:a}=ls();return this.events.once(Ne("session_extend",s),({error:c})=>{c?a(c):o()}),await this.setExpiry(i,tt(Fs)),this.sendRequest({topic:i,method:"wc_sessionExtend",params:{},clientRpcId:s,throwOnFailedPublish:!0}).catch(c=>{a(c)}),{acknowledged:n}}),D(this,"request",async r=>{this.isInitialized();try{await this.isValidRequest(r)}catch(m){throw this.client.logger.error("request() -> isValidRequest() failed"),m}const{chainId:i,request:s,topic:n,expiry:o=ot.wc_sessionRequest.req.ttl}=r,a=this.client.session.get(n);(a==null?void 0:a.transportType)===We.relay&&await this.confirmOnlineStateOrThrow();const c=wi(),l=An().toString(),{done:u,resolve:h,reject:d}=ls(o,"Request expired. Please try again.");this.events.once(Ne("session_request",c),({error:m,result:v})=>{m?d(m):h(v)});const p="wc_sessionRequest",w=this.getAppLinkIfEnabled(a.peer.metadata,a.transportType);if(w)return await this.sendRequest({clientRpcId:c,relayRpcId:l,topic:n,method:p,params:{request:It(Be({},s),{expiryTimestamp:tt(o)}),chainId:i},expiry:o,throwOnFailedPublish:!0,appLink:w}).catch(m=>d(m)),this.client.events.emit("session_request_sent",{topic:n,request:s,chainId:i,id:c}),await u();const g={request:It(Be({},s),{expiryTimestamp:tt(o)}),chainId:i},f=this.shouldSetTVF(p,g);return await Promise.all([new Promise(async m=>{await this.sendRequest(Be({clientRpcId:c,relayRpcId:l,topic:n,method:p,params:g,expiry:o,throwOnFailedPublish:!0},f&&{tvf:this.getTVFParams(c,g)})).catch(v=>d(v)),this.client.events.emit("session_request_sent",{topic:n,request:s,chainId:i,id:c}),m()}),new Promise(async m=>{var v;if(!((v=a.sessionConfig)!=null&&v.disableDeepLink)){const b=await hv(this.client.core.storage,L0);await cv({id:c,topic:n,wcDeepLink:b})}m()}),u()]).then(m=>m[2])}),D(this,"respond",async r=>{this.isInitialized(),await this.isValidRespond(r);const{topic:i,response:s}=r,{id:n}=s,o=this.client.session.get(i);o.transportType===We.relay&&await this.confirmOnlineStateOrThrow();const a=this.getAppLinkIfEnabled(o.peer.metadata,o.transportType);ni(s)?await this.sendResult({id:n,topic:i,result:s.result,throwOnFailedPublish:!0,appLink:a}):jr(s)&&await this.sendError({id:n,topic:i,error:s.error,appLink:a}),this.cleanupAfterResponse(r)}),D(this,"ping",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow();try{await this.isValidPing(r)}catch(s){throw this.client.logger.error("ping() -> isValidPing() failed"),s}const{topic:i}=r;if(this.client.session.keys.includes(i)){const s=wi(),n=An().toString(),{done:o,resolve:a,reject:c}=ls();this.events.once(Ne("session_ping",s),({error:l})=>{l?c(l):a()}),await Promise.all([this.sendRequest({topic:i,method:"wc_sessionPing",params:{},throwOnFailedPublish:!0,clientRpcId:s,relayRpcId:n}),o()])}else this.client.core.pairing.pairings.keys.includes(i)&&(this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."),await this.client.core.pairing.ping({topic:i}))}),D(this,"emit",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidEmit(r);const{topic:i,event:s,chainId:n}=r,o=An().toString(),a=wi();await this.sendRequest({topic:i,method:"wc_sessionEvent",params:{event:s,chainId:n},throwOnFailedPublish:!0,relayRpcId:o,clientRpcId:a})}),D(this,"disconnect",async r=>{this.isInitialized(),await this.confirmOnlineStateOrThrow(),await this.isValidDisconnect(r);const{topic:i}=r;if(this.client.session.keys.includes(i))await this.sendRequest({topic:i,method:"wc_sessionDelete",params:Re("USER_DISCONNECTED"),throwOnFailedPublish:!0}),await this.deleteSession({topic:i,emitEvent:!1});else if(this.client.core.pairing.pairings.keys.includes(i))await this.client.core.pairing.disconnect({topic:i});else{const{message:s}=q("MISMATCHED_TOPIC",`Session or pairing topic not found: ${i}`);throw new Error(s)}}),D(this,"find",r=>(this.isInitialized(),this.client.session.getAll().filter(i=>Ky(i,r)))),D(this,"getPendingSessionRequests",()=>this.client.pendingRequest.getAll()),D(this,"authenticate",async(r,i)=>{var s;this.isInitialized(),this.isValidAuthenticate(r);const n=i&&this.client.core.linkModeSupportedApps.includes(i)&&((s=this.client.metadata.redirect)==null?void 0:s.linkMode),o=n?We.link_mode:We.relay;o===We.relay&&await this.confirmOnlineStateOrThrow();const{chains:a,statement:c="",uri:l,domain:u,nonce:h,type:d,exp:p,nbf:w,methods:g=[],expiry:f}=r,m=[...r.resources||[]],{topic:v,uri:b}=await this.client.core.pairing.create({methods:["wc_sessionAuthenticate"],transportType:o});this.client.logger.info({message:"Generated new pairing",pairing:{topic:v,uri:b}});const y=await this.client.core.crypto.generateKeyPair(),$=il(y);if(await Promise.all([this.client.auth.authKeys.set(nl,{responseTopic:$,publicKey:y}),this.client.auth.pairingTopics.set($,{topic:$,pairingTopic:v})]),await this.client.core.relayer.subscribe($,{transportType:o}),this.client.logger.info(`sending request to new pairing topic: ${v}`),g.length>0){const{namespace:R}=kn(a[0]);let B=ib(R,"request",g);rl(m)&&(B=nb(B,m.pop())),m.push(B)}const _=f&&f>ot.wc_sessionAuthenticate.req.ttl?f:ot.wc_sessionAuthenticate.req.ttl,P={authPayload:{type:d??"caip122",chains:a,statement:c,aud:l,domain:u,version:"1",nonce:h,iat:new Date().toISOString(),exp:p,nbf:w,resources:m},requester:{publicKey:y,metadata:this.client.metadata},expiryTimestamp:tt(_)},k={eip155:{chains:a,methods:[...new Set(["personal_sign",...g])],events:["chainChanged","accountsChanged"]}},S={requiredNamespaces:{},optionalNamespaces:k,relays:[{protocol:"irn"}],pairingTopic:v,proposer:{publicKey:y,metadata:this.client.metadata},expiryTimestamp:tt(ot.wc_sessionPropose.req.ttl),id:wi()},{done:U,resolve:L,reject:M}=ls(_,"Request expired"),F=wi(),I=Ne("session_connect",S.id),E=Ne("session_request",F),x=async({error:R,session:B})=>{this.events.off(E,T),R?M(R):B&&L({session:B})},T=async R=>{var B,z,K;if(await this.deletePendingAuthRequest(F,{message:"fulfilled",code:0}),R.error){const ye=Re("WC_METHOD_UNSUPPORTED","wc_sessionAuthenticate");return R.error.code===ye.code?void 0:(this.events.off(I,x),M(R.error.message))}await this.deleteProposal(S.id),this.events.off(I,x);const{cacaos:se,responder:re}=R.result,ge=[],be=[];for(const ye of se){await Tp({cacao:ye,projectId:this.client.core.projectId})||(this.client.logger.error(ye,"Signature verification failed"),M(Re("SESSION_SETTLEMENT_FAILED","Signature verification failed")));const{p:je}=ye,Ve=rl(je.resources),Fe=[kh(je.iss)],Ze=ul(je.iss);if(Ve){const xt=Rp(Ve),Wi=Lp(Ve);ge.push(...xt),Fe.push(...Wi)}for(const xt of Fe)be.push(`${xt}:${Ze}`)}const Le=await this.client.core.crypto.generateSharedKey(y,re.publicKey);let xe;ge.length>0&&(xe={topic:Le,acknowledged:!0,self:{publicKey:y,metadata:this.client.metadata},peer:re,controller:re.publicKey,expiry:tt(Fs),requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:v,namespaces:i0([...new Set(ge)],[...new Set(be)]),transportType:o},await this.client.core.relayer.subscribe(Le,{transportType:o}),await this.client.session.set(Le,xe),v&&await this.client.core.pairing.updateMetadata({topic:v,metadata:re.metadata}),xe=this.client.session.get(Le)),(B=this.client.metadata.redirect)!=null&&B.linkMode&&(z=re.metadata.redirect)!=null&&z.linkMode&&(K=re.metadata.redirect)!=null&&K.universal&&i&&(this.client.core.addLinkModeSupportedApp(re.metadata.redirect.universal),this.client.session.update(Le,{transportType:We.link_mode})),L({auths:se,session:xe})};this.events.once(I,x),this.events.once(E,T);let O;try{if(n){const R=ms("wc_sessionAuthenticate",P,F);this.client.core.history.set(v,R);const B=await this.client.core.crypto.encode("",R,{type:Va,encoding:ki});O=nc(i,v,B)}else await Promise.all([this.sendRequest({topic:v,method:"wc_sessionAuthenticate",params:P,expiry:r.expiry,throwOnFailedPublish:!0,clientRpcId:F}),this.sendRequest({topic:v,method:"wc_sessionPropose",params:S,expiry:ot.wc_sessionPropose.req.ttl,throwOnFailedPublish:!0,clientRpcId:S.id})])}catch(R){throw this.events.off(I,x),this.events.off(E,T),R}return await this.setProposal(S.id,S),await this.setAuthRequest(F,{request:It(Be({},P),{verifyContext:{}}),pairingTopic:v,transportType:o}),{uri:O??b,response:U}}),D(this,"approveSessionAuthenticate",async r=>{const{id:i,auths:s}=r,n=this.client.core.eventClient.createEvent({properties:{topic:i.toString(),trace:[Fi.authenticated_session_approve_started]}});try{this.isInitialized()}catch(f){throw n.setError(lo.no_internet_connection),f}const o=this.getPendingAuthRequest(i);if(!o)throw n.setError(lo.authenticated_session_pending_request_not_found),new Error(`Could not find pending auth request with id ${i}`);const a=o.transportType||We.relay;a===We.relay&&await this.confirmOnlineStateOrThrow();const c=o.requester.publicKey,l=await this.client.core.crypto.generateKeyPair(),u=il(c),h={type:di,receiverPublicKey:c,senderPublicKey:l},d=[],p=[];for(const f of s){if(!await Tp({cacao:f,projectId:this.client.core.projectId})){n.setError(lo.invalid_cacao);const $=Re("SESSION_SETTLEMENT_FAILED","Signature verification failed");throw await this.sendError({id:i,topic:u,error:$,encodeOpts:h}),new Error($.message)}n.addTrace(Fi.cacaos_verified);const{p:m}=f,v=rl(m.resources),b=[kh(m.iss)],y=ul(m.iss);if(v){const $=Rp(v),_=Lp(v);d.push(...$),b.push(..._)}for(const $ of b)p.push(`${$}:${y}`)}const w=await this.client.core.crypto.generateSharedKey(l,c);n.addTrace(Fi.create_authenticated_session_topic);let g;if((d==null?void 0:d.length)>0){g={topic:w,acknowledged:!0,self:{publicKey:l,metadata:this.client.metadata},peer:{publicKey:c,metadata:o.requester.metadata},controller:c,expiry:tt(Fs),authentication:s,requiredNamespaces:{},optionalNamespaces:{},relay:{protocol:"irn"},pairingTopic:o.pairingTopic,namespaces:i0([...new Set(d)],[...new Set(p)]),transportType:a},n.addTrace(Fi.subscribing_authenticated_session_topic);try{await this.client.core.relayer.subscribe(w,{transportType:a})}catch(f){throw n.setError(lo.subscribe_authenticated_session_topic_failure),f}n.addTrace(Fi.subscribe_authenticated_session_topic_success),await this.client.session.set(w,g),n.addTrace(Fi.store_authenticated_session),await this.client.core.pairing.updateMetadata({topic:o.pairingTopic,metadata:o.requester.metadata})}n.addTrace(Fi.publishing_authenticated_session_approve);try{await this.sendResult({topic:u,id:i,result:{cacaos:s,responder:{publicKey:l,metadata:this.client.metadata}},encodeOpts:h,throwOnFailedPublish:!0,appLink:this.getAppLinkIfEnabled(o.requester.metadata,a)})}catch(f){throw n.setError(lo.authenticated_session_approve_publish_failure),f}return await this.client.auth.requests.delete(i,{message:"fulfilled",code:0}),await this.client.core.pairing.activate({topic:o.pairingTopic}),this.client.core.eventClient.deleteEvent({eventId:n.eventId}),{session:g}}),D(this,"rejectSessionAuthenticate",async r=>{this.isInitialized();const{id:i,reason:s}=r,n=this.getPendingAuthRequest(i);if(!n)throw new Error(`Could not find pending auth request with id ${i}`);n.transportType===We.relay&&await this.confirmOnlineStateOrThrow();const o=n.requester.publicKey,a=await this.client.core.crypto.generateKeyPair(),c=il(o),l={type:di,receiverPublicKey:o,senderPublicKey:a};await this.sendError({id:i,topic:c,error:s,encodeOpts:l,rpcOpts:ot.wc_sessionAuthenticate.reject,appLink:this.getAppLinkIfEnabled(n.requester.metadata,n.transportType)}),await this.client.auth.requests.delete(i,{message:"rejected",code:0}),await this.client.proposal.delete(i,Re("USER_DISCONNECTED"))}),D(this,"formatAuthMessage",r=>{this.isInitialized();const{request:i,iss:s}=r;return nf(i,s)}),D(this,"processRelayMessageCache",()=>{setTimeout(async()=>{if(this.relayMessageCache.length!==0)for(;this.relayMessageCache.length>0;)try{const r=this.relayMessageCache.shift();r&&await this.onRelayMessage(r)}catch(r){this.client.logger.error(r)}},50)}),D(this,"cleanupDuplicatePairings",async r=>{if(r.pairingTopic)try{const i=this.client.core.pairing.pairings.get(r.pairingTopic),s=this.client.core.pairing.pairings.getAll().filter(n=>{var o,a;return((o=n.peerMetadata)==null?void 0:o.url)&&((a=n.peerMetadata)==null?void 0:a.url)===r.peer.metadata.url&&n.topic&&n.topic!==i.topic});if(s.length===0)return;this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`),await Promise.all(s.map(n=>this.client.core.pairing.disconnect({topic:n.topic}))),this.client.logger.info("Duplicate pairings clean up finished")}catch(i){this.client.logger.error(i)}}),D(this,"deleteSession",async r=>{var i;const{topic:s,expirerHasDeleted:n=!1,emitEvent:o=!0,id:a=0}=r,{self:c}=this.client.session.get(s);await this.client.core.relayer.unsubscribe(s),await this.client.session.delete(s,Re("USER_DISCONNECTED")),this.addToRecentlyDeleted(s,"session"),this.client.core.crypto.keychain.has(c.publicKey)&&await this.client.core.crypto.deleteKeyPair(c.publicKey),this.client.core.crypto.keychain.has(s)&&await this.client.core.crypto.deleteSymKey(s),n||this.client.core.expirer.del(s),this.client.core.storage.removeItem(L0).catch(l=>this.client.logger.warn(l)),this.getPendingSessionRequests().forEach(l=>{l.topic===s&&this.deletePendingSessionRequest(l.id,Re("USER_DISCONNECTED"))}),s===((i=this.sessionRequestQueue.queue[0])==null?void 0:i.topic)&&(this.sessionRequestQueue.state=Or.idle),o&&this.client.events.emit("session_delete",{id:a,topic:s})}),D(this,"deleteProposal",async(r,i)=>{if(i)try{const s=this.client.proposal.get(r),n=this.client.core.eventClient.getEvent({topic:s.pairingTopic});n==null||n.setError(Vi.proposal_expired)}catch{}await Promise.all([this.client.proposal.delete(r,Re("USER_DISCONNECTED")),i?Promise.resolve():this.client.core.expirer.del(r)]),this.addToRecentlyDeleted(r,"proposal")}),D(this,"deletePendingSessionRequest",async(r,i,s=!1)=>{await Promise.all([this.client.pendingRequest.delete(r,i),s?Promise.resolve():this.client.core.expirer.del(r)]),this.addToRecentlyDeleted(r,"request"),this.sessionRequestQueue.queue=this.sessionRequestQueue.queue.filter(n=>n.id!==r),s&&(this.sessionRequestQueue.state=Or.idle,this.client.events.emit("session_request_expire",{id:r}))}),D(this,"deletePendingAuthRequest",async(r,i,s=!1)=>{await Promise.all([this.client.auth.requests.delete(r,i),s?Promise.resolve():this.client.core.expirer.del(r)])}),D(this,"setExpiry",async(r,i)=>{this.client.session.keys.includes(r)&&(this.client.core.expirer.set(r,i),await this.client.session.update(r,{expiry:i}))}),D(this,"setProposal",async(r,i)=>{this.client.core.expirer.set(r,tt(ot.wc_sessionPropose.req.ttl)),await this.client.proposal.set(r,i)}),D(this,"setAuthRequest",async(r,i)=>{const{request:s,pairingTopic:n,transportType:o=We.relay}=i;this.client.core.expirer.set(r,s.expiryTimestamp),await this.client.auth.requests.set(r,{authPayload:s.authPayload,requester:s.requester,expiryTimestamp:s.expiryTimestamp,id:r,pairingTopic:n,verifyContext:s.verifyContext,transportType:o})}),D(this,"setPendingSessionRequest",async r=>{const{id:i,topic:s,params:n,verifyContext:o}=r,a=n.request.expiryTimestamp||tt(ot.wc_sessionRequest.req.ttl);this.client.core.expirer.set(i,a),await this.client.pendingRequest.set(i,{id:i,topic:s,params:n,verifyContext:o})}),D(this,"sendRequest",async r=>{const{topic:i,method:s,params:n,expiry:o,relayRpcId:a,clientRpcId:c,throwOnFailedPublish:l,appLink:u,tvf:h}=r,d=ms(s,n,c);let p;const w=!!u;try{const m=w?ki:Sr;p=await this.client.core.crypto.encode(i,d,{encoding:m})}catch(m){throw await this.cleanup(),this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${i} failed`),m}let g;if(k8.includes(s)){const m=zr(JSON.stringify(d)),v=zr(p);g=await this.client.core.verify.register({id:v,decryptedId:m})}const f=ot[s].req;if(f.attestation=g,o&&(f.ttl=o),a&&(f.id=a),this.client.core.history.set(i,d),w){const m=nc(u,i,p);await global.Linking.openURL(m,this.client.name)}else{const m=ot[s].req;o&&(m.ttl=o),a&&(m.id=a),m.tvf=It(Be({},h),{correlationId:d.id}),l?(m.internal=It(Be({},m.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(i,p,m)):this.client.core.relayer.publish(i,p,m).catch(v=>this.client.logger.error(v))}return d.id}),D(this,"sendResult",async r=>{const{id:i,topic:s,result:n,throwOnFailedPublish:o,encodeOpts:a,appLink:c}=r,l=Pl(i,n);let u;const h=c&&typeof(global==null?void 0:global.Linking)<"u";try{const w=h?ki:Sr;u=await this.client.core.crypto.encode(s,l,It(Be({},a||{}),{encoding:w}))}catch(w){throw await this.cleanup(),this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s} failed`),w}let d,p;try{d=await this.client.core.history.get(s,i);const w=d.request;try{this.shouldSetTVF(w.method,w.params)&&(p=this.getTVFParams(i,w.params,n))}catch(g){this.client.logger.warn("sendResult() -> getTVFParams() failed",g)}}catch(w){throw this.client.logger.error(`sendResult() -> history.get(${s}, ${i}) failed`),w}if(h){const w=nc(c,s,u);await global.Linking.openURL(w,this.client.name)}else{const w=d.request.method,g=ot[w].res;g.tvf=It(Be({},p),{correlationId:i}),o?(g.internal=It(Be({},g.internal),{throwOnFailedPublish:!0}),await this.client.core.relayer.publish(s,u,g)):this.client.core.relayer.publish(s,u,g).catch(f=>this.client.logger.error(f))}await this.client.core.history.resolve(l)}),D(this,"sendError",async r=>{const{id:i,topic:s,error:n,encodeOpts:o,rpcOpts:a,appLink:c}=r,l=Og(i,n);let u;const h=c&&typeof(global==null?void 0:global.Linking)<"u";try{const p=h?ki:Sr;u=await this.client.core.crypto.encode(s,l,It(Be({},o||{}),{encoding:p}))}catch(p){throw await this.cleanup(),this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s} failed`),p}let d;try{d=await this.client.core.history.get(s,i)}catch(p){throw this.client.logger.error(`sendError() -> history.get(${s}, ${i}) failed`),p}if(h){const p=nc(c,s,u);await global.Linking.openURL(p,this.client.name)}else{const p=d.request.method,w=a||ot[p].res;this.client.core.relayer.publish(s,u,w)}await this.client.core.history.resolve(l)}),D(this,"cleanup",async()=>{const r=[],i=[];this.client.session.getAll().forEach(s=>{let n=!1;Si(s.expiry)&&(n=!0),this.client.core.crypto.keychain.has(s.topic)||(n=!0),n&&r.push(s.topic)}),this.client.proposal.getAll().forEach(s=>{Si(s.expiryTimestamp)&&i.push(s.id)}),await Promise.all([...r.map(s=>this.deleteSession({topic:s})),...i.map(s=>this.deleteProposal(s))])}),D(this,"onProviderMessageEvent",async r=>{!this.initialized||this.relayMessageCache.length>0?this.relayMessageCache.push(r):await this.onRelayMessage(r)}),D(this,"onRelayEventRequest",async r=>{this.requestQueue.queue.push(r),await this.processRequestsQueue()}),D(this,"processRequestsQueue",async()=>{if(this.requestQueue.state===Or.active){this.client.logger.info("Request queue already active, skipping...");return}for(this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`);this.requestQueue.queue.length>0;){this.requestQueue.state=Or.active;const r=this.requestQueue.queue.shift();if(r)try{await this.processRequest(r)}catch(i){this.client.logger.warn(i)}}this.requestQueue.state=Or.idle}),D(this,"processRequest",async r=>{const{topic:i,payload:s,attestation:n,transportType:o,encryptedId:a}=r,c=s.method;if(!this.shouldIgnorePairingRequest({topic:i,requestMethod:c}))switch(c){case"wc_sessionPropose":return await this.onSessionProposeRequest({topic:i,payload:s,attestation:n,encryptedId:a});case"wc_sessionSettle":return await this.onSessionSettleRequest(i,s);case"wc_sessionUpdate":return await this.onSessionUpdateRequest(i,s);case"wc_sessionExtend":return await this.onSessionExtendRequest(i,s);case"wc_sessionPing":return await this.onSessionPingRequest(i,s);case"wc_sessionDelete":return await this.onSessionDeleteRequest(i,s);case"wc_sessionRequest":return await this.onSessionRequest({topic:i,payload:s,attestation:n,encryptedId:a,transportType:o});case"wc_sessionEvent":return await this.onSessionEventRequest(i,s);case"wc_sessionAuthenticate":return await this.onSessionAuthenticateRequest({topic:i,payload:s,attestation:n,encryptedId:a,transportType:o});default:return this.client.logger.info(`Unsupported request method ${c}`)}}),D(this,"onRelayEventResponse",async r=>{const{topic:i,payload:s,transportType:n}=r,o=(await this.client.core.history.get(i,s.id)).request.method;switch(o){case"wc_sessionPropose":return this.onSessionProposeResponse(i,s,n);case"wc_sessionSettle":return this.onSessionSettleResponse(i,s);case"wc_sessionUpdate":return this.onSessionUpdateResponse(i,s);case"wc_sessionExtend":return this.onSessionExtendResponse(i,s);case"wc_sessionPing":return this.onSessionPingResponse(i,s);case"wc_sessionRequest":return this.onSessionRequestResponse(i,s);case"wc_sessionAuthenticate":return this.onSessionAuthenticateResponse(i,s);default:return this.client.logger.info(`Unsupported response method ${o}`)}}),D(this,"onRelayEventUnknownPayload",r=>{const{topic:i}=r,{message:s}=q("MISSING_OR_INVALID",`Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`);throw new Error(s)}),D(this,"shouldIgnorePairingRequest",r=>{const{topic:i,requestMethod:s}=r,n=this.expectedPairingMethodMap.get(i);return!n||n.includes(s)?!1:!!(n.includes("wc_sessionAuthenticate")&&this.client.events.listenerCount("session_authenticate")>0)}),D(this,"onSessionProposeRequest",async r=>{const{topic:i,payload:s,attestation:n,encryptedId:o}=r,{params:a,id:c}=s;try{const l=this.client.core.eventClient.getEvent({topic:i});this.client.events.listenerCount("session_proposal")===0&&(console.warn("No listener for session_proposal event"),l==null||l.setError(oi.proposal_listener_not_found)),this.isValidConnect(Be({},s.params));const u=a.expiryTimestamp||tt(ot.wc_sessionPropose.req.ttl),h=Be({id:c,pairingTopic:i,expiryTimestamp:u},a);await this.setProposal(c,h);const d=await this.getVerifyContext({attestationId:n,hash:zr(JSON.stringify(s)),encryptedId:o,metadata:h.proposer.metadata});l==null||l.addTrace(Mr.emit_session_proposal),this.client.events.emit("session_proposal",{id:c,params:h,verifyContext:d})}catch(l){await this.sendError({id:c,topic:i,error:l,rpcOpts:ot.wc_sessionPropose.autoReject}),this.client.logger.error(l)}}),D(this,"onSessionProposeResponse",async(r,i,s)=>{const{id:n}=i;if(ni(i)){const{result:o}=i;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",result:o});const a=this.client.proposal.get(n);this.client.logger.trace({type:"method",method:"onSessionProposeResponse",proposal:a});const c=a.proposer.publicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",selfPublicKey:c});const l=o.responderPublicKey;this.client.logger.trace({type:"method",method:"onSessionProposeResponse",peerPublicKey:l});const u=await this.client.core.crypto.generateSharedKey(c,l);this.pendingSessions.set(n,{sessionTopic:u,pairingTopic:r,proposalId:n,publicKey:c});const h=await this.client.core.relayer.subscribe(u,{transportType:s});this.client.logger.trace({type:"method",method:"onSessionProposeResponse",subscriptionId:h}),await this.client.core.pairing.activate({topic:r})}else if(jr(i)){await this.client.proposal.delete(n,Re("USER_DISCONNECTED"));const o=Ne("session_connect",n);if(this.events.listenerCount(o)===0)throw new Error(`emitting ${o} without any listeners, 954`);this.events.emit(o,{error:i.error})}}),D(this,"onSessionSettleRequest",async(r,i)=>{const{id:s,params:n}=i;try{this.isValidSessionSettleRequest(n);const{relay:o,controller:a,expiry:c,namespaces:l,sessionProperties:u,scopedProperties:h,sessionConfig:d}=i.params,p=[...this.pendingSessions.values()].find(f=>f.sessionTopic===r);if(!p)return this.client.logger.error(`Pending session not found for topic ${r}`);const w=this.client.proposal.get(p.proposalId),g=It(Be(Be(Be({topic:r,relay:o,expiry:c,namespaces:l,acknowledged:!0,pairingTopic:p.pairingTopic,requiredNamespaces:w.requiredNamespaces,optionalNamespaces:w.optionalNamespaces,controller:a.publicKey,self:{publicKey:p.publicKey,metadata:this.client.metadata},peer:{publicKey:a.publicKey,metadata:a.metadata}},u&&{sessionProperties:u}),h&&{scopedProperties:h}),d&&{sessionConfig:d}),{transportType:We.relay});await this.client.session.set(g.topic,g),await this.setExpiry(g.topic,g.expiry),await this.client.core.pairing.updateMetadata({topic:p.pairingTopic,metadata:g.peer.metadata}),this.client.events.emit("session_connect",{session:g}),this.events.emit(Ne("session_connect",p.proposalId),{session:g}),this.pendingSessions.delete(p.proposalId),this.deleteProposal(p.proposalId,!1),this.cleanupDuplicatePairings(g),await this.sendResult({id:i.id,topic:r,result:!0,throwOnFailedPublish:!0})}catch(o){await this.sendError({id:s,topic:r,error:o}),this.client.logger.error(o)}}),D(this,"onSessionSettleResponse",async(r,i)=>{const{id:s}=i;ni(i)?(await this.client.session.update(r,{acknowledged:!0}),this.events.emit(Ne("session_approve",s),{})):jr(i)&&(await this.client.session.delete(r,Re("USER_DISCONNECTED")),this.events.emit(Ne("session_approve",s),{error:i.error}))}),D(this,"onSessionUpdateRequest",async(r,i)=>{const{params:s,id:n}=i;try{const o=`${r}_session_update`,a=ao.get(o);if(a&&this.isRequestOutOfSync(a,n)){this.client.logger.warn(`Discarding out of sync request - ${n}`),this.sendError({id:n,topic:r,error:Re("INVALID_UPDATE_REQUEST")});return}this.isValidUpdate(Be({topic:r},s));try{ao.set(o,n),await this.client.session.update(r,{namespaces:s.namespaces}),await this.sendResult({id:n,topic:r,result:!0,throwOnFailedPublish:!0})}catch(c){throw ao.delete(o),c}this.client.events.emit("session_update",{id:n,topic:r,params:s})}catch(o){await this.sendError({id:n,topic:r,error:o}),this.client.logger.error(o)}}),D(this,"isRequestOutOfSync",(r,i)=>i.toString().slice(0,-3)<r.toString().slice(0,-3)),D(this,"onSessionUpdateResponse",(r,i)=>{const{id:s}=i,n=Ne("session_update",s);if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners`);ni(i)?this.events.emit(Ne("session_update",s),{}):jr(i)&&this.events.emit(Ne("session_update",s),{error:i.error})}),D(this,"onSessionExtendRequest",async(r,i)=>{const{id:s}=i;try{this.isValidExtend({topic:r}),await this.setExpiry(r,tt(Fs)),await this.sendResult({id:s,topic:r,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_extend",{id:s,topic:r})}catch(n){await this.sendError({id:s,topic:r,error:n}),this.client.logger.error(n)}}),D(this,"onSessionExtendResponse",(r,i)=>{const{id:s}=i,n=Ne("session_extend",s);if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners`);ni(i)?this.events.emit(Ne("session_extend",s),{}):jr(i)&&this.events.emit(Ne("session_extend",s),{error:i.error})}),D(this,"onSessionPingRequest",async(r,i)=>{const{id:s}=i;try{this.isValidPing({topic:r}),await this.sendResult({id:s,topic:r,result:!0,throwOnFailedPublish:!0}),this.client.events.emit("session_ping",{id:s,topic:r})}catch(n){await this.sendError({id:s,topic:r,error:n}),this.client.logger.error(n)}}),D(this,"onSessionPingResponse",(r,i)=>{const{id:s}=i,n=Ne("session_ping",s);setTimeout(()=>{if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners 2176`);ni(i)?this.events.emit(Ne("session_ping",s),{}):jr(i)&&this.events.emit(Ne("session_ping",s),{error:i.error})},500)}),D(this,"onSessionDeleteRequest",async(r,i)=>{const{id:s}=i;try{this.isValidDisconnect({topic:r,reason:i.params}),Promise.all([new Promise(n=>{this.client.core.relayer.once(ut.publish,async()=>{n(await this.deleteSession({topic:r,id:s}))})}),this.sendResult({id:s,topic:r,result:!0,throwOnFailedPublish:!0}),this.cleanupPendingSentRequestsForTopic({topic:r,error:Re("USER_DISCONNECTED")})]).catch(n=>this.client.logger.error(n))}catch(n){this.client.logger.error(n)}}),D(this,"onSessionRequest",async r=>{var i,s,n;const{topic:o,payload:a,attestation:c,encryptedId:l,transportType:u}=r,{id:h,params:d}=a;try{await this.isValidRequest(Be({topic:o},d));const p=this.client.session.get(o),w=await this.getVerifyContext({attestationId:c,hash:zr(JSON.stringify(ms("wc_sessionRequest",d,h))),encryptedId:l,metadata:p.peer.metadata,transportType:u}),g={id:h,topic:o,params:d,verifyContext:w};await this.setPendingSessionRequest(g),u===We.link_mode&&(i=p.peer.metadata.redirect)!=null&&i.universal&&this.client.core.addLinkModeSupportedApp((s=p.peer.metadata.redirect)==null?void 0:s.universal),(n=this.client.signConfig)!=null&&n.disableRequestQueue?this.emitSessionRequest(g):(this.addSessionRequestToSessionRequestQueue(g),this.processSessionRequestQueue())}catch(p){await this.sendError({id:h,topic:o,error:p}),this.client.logger.error(p)}}),D(this,"onSessionRequestResponse",(r,i)=>{const{id:s}=i,n=Ne("session_request",s);if(this.events.listenerCount(n)===0)throw new Error(`emitting ${n} without any listeners`);ni(i)?this.events.emit(Ne("session_request",s),{result:i.result}):jr(i)&&this.events.emit(Ne("session_request",s),{error:i.error})}),D(this,"onSessionEventRequest",async(r,i)=>{const{id:s,params:n}=i;try{const o=`${r}_session_event_${n.event.name}`,a=ao.get(o);if(a&&this.isRequestOutOfSync(a,s)){this.client.logger.info(`Discarding out of sync request - ${s}`);return}this.isValidEmit(Be({topic:r},n)),this.client.events.emit("session_event",{id:s,topic:r,params:n}),ao.set(o,s)}catch(o){await this.sendError({id:s,topic:r,error:o}),this.client.logger.error(o)}}),D(this,"onSessionAuthenticateResponse",(r,i)=>{const{id:s}=i;this.client.logger.trace({type:"method",method:"onSessionAuthenticateResponse",topic:r,payload:i}),ni(i)?this.events.emit(Ne("session_request",s),{result:i.result}):jr(i)&&this.events.emit(Ne("session_request",s),{error:i.error})}),D(this,"onSessionAuthenticateRequest",async r=>{var i;const{topic:s,payload:n,attestation:o,encryptedId:a,transportType:c}=r;try{const{requester:l,authPayload:u,expiryTimestamp:h}=n.params,d=await this.getVerifyContext({attestationId:o,hash:zr(JSON.stringify(n)),encryptedId:a,metadata:l.metadata,transportType:c}),p={requester:l,pairingTopic:s,id:n.id,authPayload:u,verifyContext:d,expiryTimestamp:h};await this.setAuthRequest(n.id,{request:p,pairingTopic:s,transportType:c}),c===We.link_mode&&(i=l.metadata.redirect)!=null&&i.universal&&this.client.core.addLinkModeSupportedApp(l.metadata.redirect.universal),this.client.events.emit("session_authenticate",{topic:s,params:n.params,id:n.id,verifyContext:d})}catch(l){this.client.logger.error(l);const u=n.params.requester.publicKey,h=await this.client.core.crypto.generateKeyPair(),d=this.getAppLinkIfEnabled(n.params.requester.metadata,c),p={type:di,receiverPublicKey:u,senderPublicKey:h};await this.sendError({id:n.id,topic:s,error:l,encodeOpts:p,rpcOpts:ot.wc_sessionAuthenticate.autoReject,appLink:d})}}),D(this,"addSessionRequestToSessionRequestQueue",r=>{this.sessionRequestQueue.queue.push(r)}),D(this,"cleanupAfterResponse",r=>{this.deletePendingSessionRequest(r.response.id,{message:"fulfilled",code:0}),setTimeout(()=>{this.sessionRequestQueue.state=Or.idle,this.processSessionRequestQueue()},V.toMiliseconds(this.requestQueueDelay))}),D(this,"cleanupPendingSentRequestsForTopic",({topic:r,error:i})=>{const s=this.client.core.history.pending;s.length>0&&s.filter(n=>n.topic===r&&n.request.method==="wc_sessionRequest").forEach(n=>{const o=n.request.id,a=Ne("session_request",o);if(this.events.listenerCount(a)===0)throw new Error(`emitting ${a} without any listeners`);this.events.emit(Ne("session_request",n.request.id),{error:i})})}),D(this,"processSessionRequestQueue",()=>{if(this.sessionRequestQueue.state===Or.active){this.client.logger.info("session request queue is already active.");return}const r=this.sessionRequestQueue.queue[0];if(!r){this.client.logger.info("session request queue is empty.");return}try{this.sessionRequestQueue.state=Or.active,this.emitSessionRequest(r)}catch(i){this.client.logger.error(i)}}),D(this,"emitSessionRequest",r=>{this.client.events.emit("session_request",r)}),D(this,"onPairingCreated",r=>{if(r.methods&&this.expectedPairingMethodMap.set(r.topic,r.methods),r.active)return;const i=this.client.proposal.getAll().find(s=>s.pairingTopic===r.topic);i&&this.onSessionProposeRequest({topic:r.topic,payload:ms("wc_sessionPropose",It(Be({},i),{requiredNamespaces:i.requiredNamespaces,optionalNamespaces:i.optionalNamespaces,relays:i.relays,proposer:i.proposer,sessionProperties:i.sessionProperties,scopedProperties:i.scopedProperties}),i.id)})}),D(this,"isValidConnect",async r=>{if(!Lt(r)){const{message:l}=q("MISSING_OR_INVALID",`connect() params: ${JSON.stringify(r)}`);throw new Error(l)}const{pairingTopic:i,requiredNamespaces:s,optionalNamespaces:n,sessionProperties:o,scopedProperties:a,relays:c}=r;if(mt(i)||await this.isValidPairingTopic(i),!n3(c)){const{message:l}=q("MISSING_OR_INVALID",`connect() relays: ${c}`);throw new Error(l)}if(!mt(s)&&la(s)!==0&&this.validateNamespaces(s,"requiredNamespaces"),!mt(n)&&la(n)!==0&&this.validateNamespaces(n,"optionalNamespaces"),mt(o)||this.validateSessionProps(o,"sessionProperties"),!mt(a)){this.validateSessionProps(a,"scopedProperties");const l=Object.keys(s||{}).concat(Object.keys(n||{}));if(!Object.keys(a).every(u=>l.includes(u)))throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(a)}, required/optional namespaces: ${JSON.stringify(l)}`)}}),D(this,"validateNamespaces",(r,i)=>{const s=s3(r,"connect()",i);if(s)throw new Error(s.message)}),D(this,"isValidApprove",async r=>{if(!Lt(r))throw new Error(q("MISSING_OR_INVALID",`approve() params: ${r}`).message);const{id:i,namespaces:s,relayProtocol:n,sessionProperties:o,scopedProperties:a}=r;this.checkRecentlyDeleted(i),await this.isValidProposalId(i);const c=this.client.proposal.get(i),l=pu(s,"approve()");if(l)throw new Error(l.message);const u=o0(c.requiredNamespaces,s,"approve()");if(u)throw new Error(u.message);if(!Qe(n,!0)){const{message:h}=q("MISSING_OR_INVALID",`approve() relayProtocol: ${n}`);throw new Error(h)}if(mt(o)||this.validateSessionProps(o,"sessionProperties"),!mt(a)){this.validateSessionProps(a,"scopedProperties");const h=new Set(Object.keys(s));if(!Object.keys(a).every(d=>h.has(d)))throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(a)}, approved namespaces: ${Array.from(h).join(", ")}`)}}),D(this,"isValidReject",async r=>{if(!Lt(r)){const{message:n}=q("MISSING_OR_INVALID",`reject() params: ${r}`);throw new Error(n)}const{id:i,reason:s}=r;if(this.checkRecentlyDeleted(i),await this.isValidProposalId(i),!a3(s)){const{message:n}=q("MISSING_OR_INVALID",`reject() reason: ${JSON.stringify(s)}`);throw new Error(n)}}),D(this,"isValidSessionSettleRequest",r=>{if(!Lt(r)){const{message:l}=q("MISSING_OR_INVALID",`onSessionSettleRequest() params: ${r}`);throw new Error(l)}const{relay:i,controller:s,namespaces:n,expiry:o}=r;if(!Pf(i)){const{message:l}=q("MISSING_OR_INVALID","onSessionSettleRequest() relay protocol should be a string");throw new Error(l)}const a=Xy(s,"onSessionSettleRequest()");if(a)throw new Error(a.message);const c=pu(n,"onSessionSettleRequest()");if(c)throw new Error(c.message);if(Si(o)){const{message:l}=q("EXPIRED","onSessionSettleRequest()");throw new Error(l)}}),D(this,"isValidUpdate",async r=>{if(!Lt(r)){const{message:c}=q("MISSING_OR_INVALID",`update() params: ${r}`);throw new Error(c)}const{topic:i,namespaces:s}=r;this.checkRecentlyDeleted(i),await this.isValidSessionTopic(i);const n=this.client.session.get(i),o=pu(s,"update()");if(o)throw new Error(o.message);const a=o0(n.requiredNamespaces,s,"update()");if(a)throw new Error(a.message)}),D(this,"isValidExtend",async r=>{if(!Lt(r)){const{message:s}=q("MISSING_OR_INVALID",`extend() params: ${r}`);throw new Error(s)}const{topic:i}=r;this.checkRecentlyDeleted(i),await this.isValidSessionTopic(i)}),D(this,"isValidRequest",async r=>{if(!Lt(r)){const{message:c}=q("MISSING_OR_INVALID",`request() params: ${r}`);throw new Error(c)}const{topic:i,request:s,chainId:n,expiry:o}=r;this.checkRecentlyDeleted(i),await this.isValidSessionTopic(i);const{namespaces:a}=this.client.session.get(i);if(!n0(a,n)){const{message:c}=q("MISSING_OR_INVALID",`request() chainId: ${n}`);throw new Error(c)}if(!c3(s)){const{message:c}=q("MISSING_OR_INVALID",`request() ${JSON.stringify(s)}`);throw new Error(c)}if(!h3(a,n,s.method)){const{message:c}=q("MISSING_OR_INVALID",`request() method: ${s.method}`);throw new Error(c)}if(o&&!f3(o,yu)){const{message:c}=q("MISSING_OR_INVALID",`request() expiry: ${o}. Expiry must be a number (in seconds) between ${yu.min} and ${yu.max}`);throw new Error(c)}}),D(this,"isValidRespond",async r=>{var i;if(!Lt(r)){const{message:o}=q("MISSING_OR_INVALID",`respond() params: ${r}`);throw new Error(o)}const{topic:s,response:n}=r;try{await this.isValidSessionTopic(s)}catch(o){throw(i=r==null?void 0:r.response)!=null&&i.id&&this.cleanupAfterResponse(r),o}if(!l3(n)){const{message:o}=q("MISSING_OR_INVALID",`respond() response: ${JSON.stringify(n)}`);throw new Error(o)}}),D(this,"isValidPing",async r=>{if(!Lt(r)){const{message:s}=q("MISSING_OR_INVALID",`ping() params: ${r}`);throw new Error(s)}const{topic:i}=r;await this.isValidSessionOrPairingTopic(i)}),D(this,"isValidEmit",async r=>{if(!Lt(r)){const{message:a}=q("MISSING_OR_INVALID",`emit() params: ${r}`);throw new Error(a)}const{topic:i,event:s,chainId:n}=r;await this.isValidSessionTopic(i);const{namespaces:o}=this.client.session.get(i);if(!n0(o,n)){const{message:a}=q("MISSING_OR_INVALID",`emit() chainId: ${n}`);throw new Error(a)}if(!u3(s)){const{message:a}=q("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(a)}if(!d3(o,n,s.name)){const{message:a}=q("MISSING_OR_INVALID",`emit() event: ${JSON.stringify(s)}`);throw new Error(a)}}),D(this,"isValidDisconnect",async r=>{if(!Lt(r)){const{message:s}=q("MISSING_OR_INVALID",`disconnect() params: ${r}`);throw new Error(s)}const{topic:i}=r;await this.isValidSessionOrPairingTopic(i)}),D(this,"isValidAuthenticate",r=>{const{chains:i,uri:s,domain:n,nonce:o}=r;if(!Array.isArray(i)||i.length===0)throw new Error("chains is required and must be a non-empty array");if(!Qe(s,!1))throw new Error("uri is required parameter");if(!Qe(n,!1))throw new Error("domain is required parameter");if(!Qe(o,!1))throw new Error("nonce is required parameter");if([...new Set(i.map(c=>kn(c).namespace))].length>1)throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");const{namespace:a}=kn(i[0]);if(a!=="eip155")throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")}),D(this,"getVerifyContext",async r=>{const{attestationId:i,hash:s,encryptedId:n,metadata:o,transportType:a}=r,c={verified:{verifyUrl:o.verifyUrl||Go,validation:"UNKNOWN",origin:o.url||""}};try{if(a===We.link_mode){const u=this.getAppLinkIfEnabled(o,a);return c.verified.validation=u&&new URL(u).origin===new URL(o.url).origin?"VALID":"INVALID",c}const l=await this.client.core.verify.resolve({attestationId:i,hash:s,encryptedId:n,verifyUrl:o.verifyUrl});l&&(c.verified.origin=l.origin,c.verified.isScam=l.isScam,c.verified.validation=l.origin===new URL(o.url).origin?"VALID":"INVALID")}catch(l){this.client.logger.warn(l)}return this.client.logger.debug(`Verify context: ${JSON.stringify(c)}`),c}),D(this,"validateSessionProps",(r,i)=>{Object.values(r).forEach((s,n)=>{if(s==null){const{message:o}=q("MISSING_OR_INVALID",`${i} must contain an existing value for each key. Received: ${s} for key ${Object.keys(r)[n]}`);throw new Error(o)}})}),D(this,"getPendingAuthRequest",r=>{const i=this.client.auth.requests.get(r);return typeof i=="object"?i:void 0}),D(this,"addToRecentlyDeleted",(r,i)=>{if(this.recentlyDeletedMap.set(r,i),this.recentlyDeletedMap.size>=this.recentlyDeletedLimit){let s=0;const n=this.recentlyDeletedLimit/2;for(const o of this.recentlyDeletedMap.keys()){if(s++>=n)break;this.recentlyDeletedMap.delete(o)}}}),D(this,"checkRecentlyDeleted",r=>{const i=this.recentlyDeletedMap.get(r);if(i){const{message:s}=q("MISSING_OR_INVALID",`Record was recently deleted - ${i}: ${r}`);throw new Error(s)}}),D(this,"isLinkModeEnabled",(r,i)=>{var s,n,o,a,c,l,u,h,d;return!r||i!==We.link_mode?!1:((n=(s=this.client.metadata)==null?void 0:s.redirect)==null?void 0:n.linkMode)===!0&&((a=(o=this.client.metadata)==null?void 0:o.redirect)==null?void 0:a.universal)!==void 0&&((l=(c=this.client.metadata)==null?void 0:c.redirect)==null?void 0:l.universal)!==""&&((u=r==null?void 0:r.redirect)==null?void 0:u.universal)!==void 0&&((h=r==null?void 0:r.redirect)==null?void 0:h.universal)!==""&&((d=r==null?void 0:r.redirect)==null?void 0:d.linkMode)===!0&&this.client.core.linkModeSupportedApps.includes(r.redirect.universal)&&typeof(global==null?void 0:global.Linking)<"u"}),D(this,"getAppLinkIfEnabled",(r,i)=>{var s;return this.isLinkModeEnabled(r,i)?(s=r==null?void 0:r.redirect)==null?void 0:s.universal:void 0}),D(this,"handleLinkModeMessage",({url:r})=>{if(!r||!r.includes("wc_ev")||!r.includes("topic"))return;const i=Ip(r,"topic")||"",s=decodeURIComponent(Ip(r,"wc_ev")||""),n=this.client.session.keys.includes(i);n&&this.client.session.update(i,{transportType:We.link_mode}),this.client.core.dispatchEnvelope({topic:i,message:s,sessionExists:n})}),D(this,"registerLinkModeListeners",async()=>{var r;if(_d()||qi()&&(r=this.client.metadata.redirect)!=null&&r.linkMode){const i=global==null?void 0:global.Linking;if(typeof i<"u"){i.addEventListener("url",this.handleLinkModeMessage,this.client.name);const s=await i.getInitialURL();s&&setTimeout(()=>{this.handleLinkModeMessage({url:s})},50)}}}),D(this,"shouldSetTVF",(r,i)=>{if(!i||r!=="wc_sessionRequest")return!1;const{request:s}=i;return Object.keys(B0).includes(s.method)}),D(this,"getTVFParams",(r,i,s)=>{var n,o;try{const a=i.request.method,c=this.extractTxHashesFromResult(a,s);return It(Be({correlationId:r,rpcMethods:[a],chainId:i.chainId},this.isValidContractData(i.request.params)&&{contractAddresses:[(o=(n=i.request.params)==null?void 0:n[0])==null?void 0:o.to]}),{txHashes:c})}catch(a){this.client.logger.warn("Error getting TVF params",a)}return{}}),D(this,"isValidContractData",r=>{var i;if(!r)return!1;try{const s=(r==null?void 0:r.data)||((i=r==null?void 0:r[0])==null?void 0:i.data);if(!s.startsWith("0x"))return!1;const n=s.slice(2);return/^[0-9a-fA-F]*$/.test(n)?n.length%2===0:!1}catch{}return!1}),D(this,"extractTxHashesFromResult",(r,i)=>{try{const s=B0[r];if(typeof i=="string")return[i];const n=i[s.key];if(_r(n))return r==="solana_signAllTransactions"?n.map(o=>Hv(o)):n;if(typeof n=="string")return[n]}catch(s){this.client.logger.warn("Error extracting tx hashes from result",s)}return[]})}async processPendingMessageEvents(){try{const e=this.client.session.keys,r=this.client.core.relayer.messages.getWithoutAck(e);for(const[i,s]of Object.entries(r))for(const n of s)try{await this.onProviderMessageEvent({topic:i,message:n,publishedAt:Date.now()})}catch{this.client.logger.warn(`Error processing pending message event for topic: ${i}, message: ${n}`)}}catch(e){this.client.logger.warn("processPendingMessageEvents failed",e)}}isInitialized(){if(!this.initialized){const{message:e}=q("NOT_INITIALIZED",this.name);throw new Error(e)}}async confirmOnlineStateOrThrow(){await this.client.core.relayer.confirmOnlineStateOrThrow()}registerRelayerEvents(){this.client.core.relayer.on(ut.message,e=>{this.onProviderMessageEvent(e)})}async onRelayMessage(e){const{topic:r,message:i,attestation:s,transportType:n}=e,{publicKey:o}=this.client.auth.authKeys.keys.includes(nl)?this.client.auth.authKeys.get(nl):{publicKey:void 0};try{const a=await this.client.core.crypto.decode(r,i,{receiverPublicKey:o,encoding:n===We.link_mode?ki:Sr});xd(a)?(this.client.core.history.set(r,a),await this.onRelayEventRequest({topic:r,payload:a,attestation:s,transportType:n,encryptedId:zr(i)})):Id(a)?(await this.client.core.history.resolve(a),await this.onRelayEventResponse({topic:r,payload:a,transportType:n}),this.client.core.history.delete(r,a.id)):await this.onRelayEventUnknownPayload({topic:r,payload:a,transportType:n}),await this.client.core.relayer.messages.ack(r,i)}catch(a){this.client.logger.error(a)}}registerExpirerEvents(){this.client.core.expirer.on(dr.expired,async e=>{const{topic:r,id:i}=Gg(e.target);if(i&&this.client.pendingRequest.keys.includes(i))return await this.deletePendingSessionRequest(i,q("EXPIRED"),!0);if(i&&this.client.auth.requests.keys.includes(i))return await this.deletePendingAuthRequest(i,q("EXPIRED"),!0);r?this.client.session.keys.includes(r)&&(await this.deleteSession({topic:r,expirerHasDeleted:!0}),this.client.events.emit("session_expire",{topic:r})):i&&(await this.deleteProposal(i,!0),this.client.events.emit("proposal_expire",{id:i}))})}registerPairingEvents(){this.client.core.pairing.events.on(ps.create,e=>this.onPairingCreated(e)),this.client.core.pairing.events.on(ps.delete,e=>{this.addToRecentlyDeleted(e.topic,"pairing")})}isValidPairingTopic(e){if(!Qe(e,!1)){const{message:r}=q("MISSING_OR_INVALID",`pairing topic should be a string: ${e}`);throw new Error(r)}if(!this.client.core.pairing.pairings.keys.includes(e)){const{message:r}=q("NO_MATCHING_KEY",`pairing topic doesn't exist: ${e}`);throw new Error(r)}if(Si(this.client.core.pairing.pairings.get(e).expiry)){const{message:r}=q("EXPIRED",`pairing topic: ${e}`);throw new Error(r)}}async isValidSessionTopic(e){if(!Qe(e,!1)){const{message:r}=q("MISSING_OR_INVALID",`session topic should be a string: ${e}`);throw new Error(r)}if(this.checkRecentlyDeleted(e),!this.client.session.keys.includes(e)){const{message:r}=q("NO_MATCHING_KEY",`session topic doesn't exist: ${e}`);throw new Error(r)}if(Si(this.client.session.get(e).expiry)){await this.deleteSession({topic:e});const{message:r}=q("EXPIRED",`session topic: ${e}`);throw new Error(r)}if(!this.client.core.crypto.keychain.has(e)){const{message:r}=q("MISSING_OR_INVALID",`session topic does not exist in keychain: ${e}`);throw await this.deleteSession({topic:e}),new Error(r)}}async isValidSessionOrPairingTopic(e){if(this.checkRecentlyDeleted(e),this.client.session.keys.includes(e))await this.isValidSessionTopic(e);else if(this.client.core.pairing.pairings.keys.includes(e))this.isValidPairingTopic(e);else if(Qe(e,!1)){const{message:r}=q("NO_MATCHING_KEY",`session or pairing topic doesn't exist: ${e}`);throw new Error(r)}else{const{message:r}=q("MISSING_OR_INVALID",`session or pairing topic should be a string: ${e}`);throw new Error(r)}}async isValidProposalId(e){if(!o3(e)){const{message:r}=q("MISSING_OR_INVALID",`proposal id should be a number: ${e}`);throw new Error(r)}if(!this.client.proposal.keys.includes(e)){const{message:r}=q("NO_MATCHING_KEY",`proposal id doesn't exist: ${e}`);throw new Error(r)}if(Si(this.client.proposal.get(e).expiryTimestamp)){await this.deleteProposal(e);const{message:r}=q("EXPIRED",`proposal id: ${e}`);throw new Error(r)}}},z8=class extends js{constructor(e,r){super(e,r,A8,Ud),this.core=e,this.logger=r}},q8=class extends js{constructor(e,r){super(e,r,S8,Ud),this.core=e,this.logger=r}},H8=class extends js{constructor(e,r){super(e,r,$8,Ud,i=>i.id),this.core=e,this.logger=r}};class W8 extends js{constructor(e,r){super(e,r,O8,Dl,()=>nl),this.core=e,this.logger=r}}class V8 extends js{constructor(e,r){super(e,r,T8,Dl),this.core=e,this.logger=r}}class F8 extends js{constructor(e,r){super(e,r,R8,Dl,i=>i.id),this.core=e,this.logger=r}}var K8=Object.defineProperty,Z8=(t,e,r)=>e in t?K8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Cu=(t,e,r)=>Z8(t,typeof e!="symbol"?e+"":e,r);let G8=class{constructor(e,r){this.core=e,this.logger=r,Cu(this,"authKeys"),Cu(this,"pairingTopics"),Cu(this,"requests"),this.authKeys=new W8(this.core,this.logger),this.pairingTopics=new V8(this.core,this.logger),this.requests=new F8(this.core,this.logger)}async init(){await this.authKeys.init(),await this.pairingTopics.init(),await this.requests.init()}};var Y8=Object.defineProperty,J8=(t,e,r)=>e in t?Y8(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ve=(t,e,r)=>J8(t,typeof e!="symbol"?e+"":e,r);let X8=class Jf extends j3{constructor(e){super(e),ve(this,"protocol",Zf),ve(this,"version",Gf),ve(this,"name",bu.name),ve(this,"metadata"),ve(this,"core"),ve(this,"logger"),ve(this,"events",new zi.EventEmitter),ve(this,"engine"),ve(this,"session"),ve(this,"proposal"),ve(this,"pendingRequest"),ve(this,"auth"),ve(this,"signConfig"),ve(this,"on",(i,s)=>this.events.on(i,s)),ve(this,"once",(i,s)=>this.events.once(i,s)),ve(this,"off",(i,s)=>this.events.off(i,s)),ve(this,"removeListener",(i,s)=>this.events.removeListener(i,s)),ve(this,"removeAllListeners",i=>this.events.removeAllListeners(i)),ve(this,"connect",async i=>{try{return await this.engine.connect(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"pair",async i=>{try{return await this.engine.pair(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"approve",async i=>{try{return await this.engine.approve(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"reject",async i=>{try{return await this.engine.reject(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"update",async i=>{try{return await this.engine.update(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"extend",async i=>{try{return await this.engine.extend(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"request",async i=>{try{return await this.engine.request(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"respond",async i=>{try{return await this.engine.respond(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"ping",async i=>{try{return await this.engine.ping(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"emit",async i=>{try{return await this.engine.emit(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"disconnect",async i=>{try{return await this.engine.disconnect(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"find",i=>{try{return this.engine.find(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"getPendingSessionRequests",()=>{try{return this.engine.getPendingSessionRequests()}catch(i){throw this.logger.error(i.message),i}}),ve(this,"authenticate",async(i,s)=>{try{return await this.engine.authenticate(i,s)}catch(n){throw this.logger.error(n.message),n}}),ve(this,"formatAuthMessage",i=>{try{return this.engine.formatAuthMessage(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"approveSessionAuthenticate",async i=>{try{return await this.engine.approveSessionAuthenticate(i)}catch(s){throw this.logger.error(s.message),s}}),ve(this,"rejectSessionAuthenticate",async i=>{try{return await this.engine.rejectSessionAuthenticate(i)}catch(s){throw this.logger.error(s.message),s}}),this.name=(e==null?void 0:e.name)||bu.name,this.metadata=rv(e==null?void 0:e.metadata),this.signConfig=e==null?void 0:e.signConfig;const r=typeof(e==null?void 0:e.logger)<"u"&&typeof(e==null?void 0:e.logger)!="string"?e.logger:Ed(Nl({level:(e==null?void 0:e.logger)||bu.logger}));this.core=(e==null?void 0:e.core)||new I8(e),this.logger=$t(r,this.name),this.session=new q8(this.core,this.logger),this.proposal=new z8(this.core,this.logger),this.pendingRequest=new H8(this.core,this.logger),this.engine=new j8(this),this.auth=new G8(this.core,this.logger)}static async init(e){const r=new Jf(e);return await r.initialize(),r}get context(){return Qt(this.logger)}get pairing(){return this.core.pairing.pairings}async initialize(){this.logger.trace("Initialized");try{await this.core.start(),await this.session.init(),await this.proposal.init(),await this.pendingRequest.init(),await this.auth.init(),await this.engine.init(),this.logger.info("SignClient Initialization Success"),setTimeout(()=>{this.engine.processRelayMessageCache()},V.toMiliseconds(V.ONE_SECOND))}catch(e){throw this.logger.info("SignClient Initialization Failure"),this.logger.error(e.message),e}}};const D0="error",Q8="wss://relay.walletconnect.org",e9="wc",t9="universal_provider",ac=`${e9}@2:${t9}:`,Xf="https://rpc.walletconnect.org/v1/",wn="generic",r9=`${Xf}bundler`,fr={DEFAULT_CHAIN_CHANGED:"default_chain_changed"};function i9(){}function Bd(t){return t==null||typeof t!="object"&&typeof t!="function"}function Md(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function s9(t){if(Bd(t))return t;if(Array.isArray(t)||Md(t)||t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);const e=Object.getPrototypeOf(t),r=e.constructor;if(t instanceof Date||t instanceof Map||t instanceof Set)return new r(t);if(t instanceof RegExp){const i=new r(t);return i.lastIndex=t.lastIndex,i}if(t instanceof DataView)return new r(t.buffer.slice(0));if(t instanceof Error){const i=new r(t.message);return i.stack=t.stack,i.name=t.name,i.cause=t.cause,i}if(typeof File<"u"&&t instanceof File)return new r([t],t.name,{type:t.type,lastModified:t.lastModified});if(typeof t=="object"){const i=Object.create(e);return Object.assign(i,t)}return t}function j0(t){return typeof t=="object"&&t!==null}function Qf(t){return Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))}function ew(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const n9="[object RegExp]",tw="[object String]",rw="[object Number]",iw="[object Boolean]",sw="[object Arguments]",o9="[object Symbol]",a9="[object Date]",c9="[object Map]",l9="[object Set]",u9="[object Array]",h9="[object ArrayBuffer]",d9="[object Object]",p9="[object DataView]",g9="[object Uint8Array]",f9="[object Uint8ClampedArray]",w9="[object Uint16Array]",m9="[object Uint32Array]",v9="[object Int8Array]",b9="[object Int16Array]",y9="[object Int32Array]",C9="[object Float32Array]",E9="[object Float64Array]";function x9(t,e){return _n(t,void 0,t,new Map,e)}function _n(t,e,r,i=new Map,s=void 0){const n=s==null?void 0:s(t,e,r,i);if(n!=null)return n;if(Bd(t))return t;if(i.has(t))return i.get(t);if(Array.isArray(t)){const o=new Array(t.length);i.set(t,o);for(let a=0;a<t.length;a++)o[a]=_n(t[a],a,r,i,s);return Object.hasOwn(t,"index")&&(o.index=t.index),Object.hasOwn(t,"input")&&(o.input=t.input),o}if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp){const o=new RegExp(t.source,t.flags);return o.lastIndex=t.lastIndex,o}if(t instanceof Map){const o=new Map;i.set(t,o);for(const[a,c]of t)o.set(a,_n(c,a,r,i,s));return o}if(t instanceof Set){const o=new Set;i.set(t,o);for(const a of t)o.add(_n(a,void 0,r,i,s));return o}if(typeof Buffer<"u"&&Buffer.isBuffer(t))return t.subarray();if(Md(t)){const o=new(Object.getPrototypeOf(t)).constructor(t.length);i.set(t,o);for(let a=0;a<t.length;a++)o[a]=_n(t[a],a,r,i,s);return o}if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer)return t.slice(0);if(t instanceof DataView){const o=new DataView(t.buffer.slice(0),t.byteOffset,t.byteLength);return i.set(t,o),gs(o,t,r,i,s),o}if(typeof File<"u"&&t instanceof File){const o=new File([t],t.name,{type:t.type});return i.set(t,o),gs(o,t,r,i,s),o}if(t instanceof Blob){const o=new Blob([t],{type:t.type});return i.set(t,o),gs(o,t,r,i,s),o}if(t instanceof Error){const o=new t.constructor;return i.set(t,o),o.message=t.message,o.name=t.name,o.stack=t.stack,o.cause=t.cause,gs(o,t,r,i,s),o}if(typeof t=="object"&&I9(t)){const o=Object.create(Object.getPrototypeOf(t));return i.set(t,o),gs(o,t,r,i,s),o}return t}function gs(t,e,r=t,i,s){const n=[...Object.keys(e),...Qf(e)];for(let o=0;o<n.length;o++){const a=n[o],c=Object.getOwnPropertyDescriptor(t,a);(c==null||c.writable)&&(t[a]=_n(e[a],a,r,i,s))}}function I9(t){switch(ew(t)){case sw:case u9:case h9:case p9:case iw:case a9:case C9:case E9:case v9:case b9:case y9:case c9:case rw:case d9:case n9:case l9:case tw:case o9:case g9:case f9:case w9:case m9:return!0;default:return!1}}function A9(t,e){return x9(t,(r,i,s,n)=>{if(typeof t=="object")switch(Object.prototype.toString.call(t)){case rw:case tw:case iw:{const o=new t.constructor(t==null?void 0:t.valueOf());return gs(o,t),o}case sw:{const o={};return gs(o,t),o.length=t.length,o[Symbol.iterator]=t[Symbol.iterator],o}default:return}})}function z0(t){return A9(t)}function q0(t){return t!==null&&typeof t=="object"&&ew(t)==="[object Arguments]"}function S9(t){return Md(t)}function _9(t){var r;if(typeof t!="object"||t==null)return!1;if(Object.getPrototypeOf(t)===null)return!0;if(Object.prototype.toString.call(t)!=="[object Object]"){const i=t[Symbol.toStringTag];return i==null||!((r=Object.getOwnPropertyDescriptor(t,Symbol.toStringTag))!=null&&r.writable)?!1:t.toString()===`[object ${i}]`}let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function $9(t,...e){const r=e.slice(0,-1),i=e[e.length-1];let s=t;for(let n=0;n<r.length;n++){const o=r[n];s=Jh(s,o,i,new Map)}return s}function Jh(t,e,r,i){if(Bd(t)&&(t=Object(t)),e==null||typeof e!="object")return t;if(i.has(e))return s9(i.get(e));if(i.set(e,t),Array.isArray(e)){e=e.slice();for(let n=0;n<e.length;n++)e[n]=e[n]??void 0}const s=[...Object.keys(e),...Qf(e)];for(let n=0;n<s.length;n++){const o=s[n];let a=e[o],c=t[o];if(q0(a)&&(a={...a}),q0(c)&&(c={...c}),typeof Buffer<"u"&&Buffer.isBuffer(a)&&(a=z0(a)),Array.isArray(a))if(typeof c=="object"&&c!=null){const u=[],h=Reflect.ownKeys(c);for(let d=0;d<h.length;d++){const p=h[d];u[p]=c[p]}c=u}else c=[];const l=r(c,a,o,t,e,i);l!=null?t[o]=l:Array.isArray(a)||j0(c)&&j0(a)?t[o]=Jh(c,a,r,i):c==null&&_9(a)?t[o]=Jh({},a,r,i):c==null&&S9(a)?t[o]=z0(a):(c===void 0||a!==void 0)&&(t[o]=a)}return t}function k9(t,...e){return $9(t,...e,i9)}var N9=Object.defineProperty,P9=Object.defineProperties,O9=Object.getOwnPropertyDescriptors,H0=Object.getOwnPropertySymbols,T9=Object.prototype.hasOwnProperty,R9=Object.prototype.propertyIsEnumerable,W0=(t,e,r)=>e in t?N9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,cc=(t,e)=>{for(var r in e||(e={}))T9.call(e,r)&&W0(t,r,e[r]);if(H0)for(var r of H0(e))R9.call(e,r)&&W0(t,r,e[r]);return t},L9=(t,e)=>P9(t,O9(e));function Xt(t,e,r){var i;const s=kn(t);return((i=e.rpcMap)==null?void 0:i[s.reference])||`${Xf}?chainId=${s.namespace}:${s.reference}&projectId=${r}`}function zs(t){return t.includes(":")?t.split(":")[1]:t}function nw(t){return t.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)}function U9(t,e){const r=Object.keys(e.namespaces).filter(s=>s.includes(t));if(!r.length)return[];const i=[];return r.forEach(s=>{const n=e.namespaces[s].accounts;i.push(...n)}),i}function Eu(t={},e={}){const r=V0(t),i=V0(e);return k9(r,i)}function V0(t){var e,r,i,s;const n={};if(!la(t))return n;for(const[o,a]of Object.entries(t)){const c=Rd(o)?[o]:a.chains,l=a.methods||[],u=a.events||[],h=a.rpcMap||{},d=jo(o);n[d]=L9(cc(cc({},n[d]),a),{chains:tl(c,(e=n[d])==null?void 0:e.chains),methods:tl(l,(r=n[d])==null?void 0:r.methods),events:tl(u,(i=n[d])==null?void 0:i.events),rpcMap:cc(cc({},h),(s=n[d])==null?void 0:s.rpcMap)})}return n}function F0(t){return t.includes(":")?t.split(":")[2]:t}function K0(t){const e={};for(const[r,i]of Object.entries(t)){const s=i.methods||[],n=i.events||[],o=i.accounts||[],a=Rd(r)?[r]:i.chains?i.chains:nw(i.accounts);e[r]={chains:a,methods:s,events:n,accounts:o}}return e}function xu(t){return typeof t=="number"?t:t.includes("0x")?parseInt(t,16):(t=t.includes(":")?t.split(":")[1]:t,isNaN(Number(t))?t:Number(t))}const ow={},Se=t=>ow[t],Iu=(t,e)=>{ow[t]=e};var B9=Object.defineProperty,M9=(t,e,r)=>e in t?B9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ks=(t,e,r)=>M9(t,typeof e!="symbol"?e+"":e,r);let D9=class{constructor(e){Ks(this,"name","polkadot"),Ks(this,"client"),Ks(this,"httpProviders"),Ks(this,"events"),Ks(this,"namespace"),Ks(this,"chainId"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=zs(r);e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||Xt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new gr(new kr(i,Se("disableProviderPing")))}};var j9=Object.defineProperty,z9=Object.defineProperties,q9=Object.getOwnPropertyDescriptors,Z0=Object.getOwnPropertySymbols,H9=Object.prototype.hasOwnProperty,W9=Object.prototype.propertyIsEnumerable,Xh=(t,e,r)=>e in t?j9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,G0=(t,e)=>{for(var r in e||(e={}))H9.call(e,r)&&Xh(t,r,e[r]);if(Z0)for(var r of Z0(e))W9.call(e,r)&&Xh(t,r,e[r]);return t},Y0=(t,e)=>z9(t,q9(e)),Zs=(t,e,r)=>Xh(t,typeof e!="symbol"?e+"":e,r);let V9=class{constructor(e){Zs(this,"name","eip155"),Zs(this,"client"),Zs(this,"chainId"),Zs(this,"namespace"),Zs(this,"httpProviders"),Zs(this,"events"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.httpProviders=this.createHttpProviders(),this.chainId=parseInt(this.getDefaultChain())}async request(e){switch(e.request.method){case"eth_requestAccounts":return this.getAccounts();case"eth_accounts":return this.getAccounts();case"wallet_switchEthereumChain":return await this.handleSwitchChain(e);case"eth_chainId":return parseInt(this.getDefaultChain());case"wallet_getCapabilities":return await this.getCapabilities(e);case"wallet_getCallsStatus":return await this.getCallStatus(e)}return this.namespace.methods.includes(e.request.method)?await this.client.request(e):this.getHttpProvider().request(e.request)}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(parseInt(e),r),this.chainId=parseInt(e),this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId.toString();if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}createHttpProvider(e,r){const i=r||Xt(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new gr(new kr(i,Se("disableProviderPing")))}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=parseInt(zs(r));e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}getHttpProvider(){const e=this.chainId,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}async handleSwitchChain(e){var r,i;let s=e.request.params?(r=e.request.params[0])==null?void 0:r.chainId:"0x0";s=s.startsWith("0x")?s:`0x${s}`;const n=parseInt(s,16);if(this.isChainApproved(n))this.setDefaultChain(`${n}`);else if(this.namespace.methods.includes("wallet_switchEthereumChain"))await this.client.request({topic:e.topic,request:{method:e.request.method,params:[{chainId:s}]},chainId:(i=this.namespace.chains)==null?void 0:i[0]}),this.setDefaultChain(`${n}`);else throw new Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);return null}isChainApproved(e){return this.namespace.chains.includes(`${this.name}:${e}`)}async getCapabilities(e){var r,i,s;const n=(i=(r=e.request)==null?void 0:r.params)==null?void 0:i[0];if(!n)throw new Error("Missing address parameter in `wallet_getCapabilities` request");const o=this.client.session.get(e.topic),a=((s=o==null?void 0:o.sessionProperties)==null?void 0:s.capabilities)||{};if(a!=null&&a[n])return a==null?void 0:a[n];const c=await this.client.request(e);try{await this.client.session.update(e.topic,{sessionProperties:Y0(G0({},o.sessionProperties||{}),{capabilities:Y0(G0({},a||{}),{[n]:c})})})}catch(l){console.warn("Failed to update session with capabilities",l)}return c}async getCallStatus(e){var r,i;const s=this.client.session.get(e.topic),n=(r=s.sessionProperties)==null?void 0:r.bundler_name;if(n){const a=this.getBundlerUrl(e.chainId,n);try{return await this.getUserOperationReceipt(a,e)}catch(c){console.warn("Failed to fetch call status from bundler",c,a)}}const o=(i=s.sessionProperties)==null?void 0:i.bundler_url;if(o)try{return await this.getUserOperationReceipt(o,e)}catch(a){console.warn("Failed to fetch call status from custom bundler",a,o)}if(this.namespace.methods.includes(e.request.method))return await this.client.request(e);throw new Error("Fetching call status not approved by the wallet.")}async getUserOperationReceipt(e,r){var i;const s=new URL(e),n=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ms("eth_getUserOperationReceipt",[(i=r.request.params)==null?void 0:i[0]]))});if(!n.ok)throw new Error(`Failed to fetch user operation receipt - ${n.status}`);return await n.json()}getBundlerUrl(e,r){return`${r9}?projectId=${this.client.core.projectId}&chainId=${e}&bundler=${r}`}};var F9=Object.defineProperty,K9=(t,e,r)=>e in t?F9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Gs=(t,e,r)=>K9(t,typeof e!="symbol"?e+"":e,r);let Z9=class{constructor(e){Gs(this,"name","solana"),Gs(this,"client"),Gs(this,"httpProviders"),Gs(this,"events"),Gs(this,"namespace"),Gs(this,"chainId"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=zs(r);e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||Xt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new gr(new kr(i,Se("disableProviderPing")))}};var G9=Object.defineProperty,Y9=(t,e,r)=>e in t?G9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Ys=(t,e,r)=>Y9(t,typeof e!="symbol"?e+"":e,r);let J9=class{constructor(e){Ys(this,"name","cosmos"),Ys(this,"client"),Ys(this,"httpProviders"),Ys(this,"events"),Ys(this,"namespace"),Ys(this,"chainId"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=zs(r);e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||Xt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new gr(new kr(i,Se("disableProviderPing")))}};var X9=Object.defineProperty,Q9=(t,e,r)=>e in t?X9(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Js=(t,e,r)=>Q9(t,typeof e!="symbol"?e+"":e,r);let e7=class{constructor(e){Js(this,"name","algorand"),Js(this,"client"),Js(this,"httpProviders"),Js(this,"events"),Js(this,"namespace"),Js(this,"chainId"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){if(!this.httpProviders[e]){const i=r||Xt(`${this.name}:${e}`,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,i)}this.chainId=e,this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;e[r]=this.createHttpProvider(r,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||Xt(e,this.namespace,this.client.core.projectId);return typeof i>"u"?void 0:new gr(new kr(i,Se("disableProviderPing")))}};var t7=Object.defineProperty,r7=(t,e,r)=>e in t?t7(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Xs=(t,e,r)=>r7(t,typeof e!="symbol"?e+"":e,r);class i7{constructor(e){Xs(this,"name","cip34"),Xs(this,"client"),Xs(this,"httpProviders"),Xs(this,"events"),Xs(this,"namespace"),Xs(this,"chainId"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{const i=this.getCardanoRPCUrl(r),s=zs(r);e[s]=this.createHttpProvider(s,i)}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}getCardanoRPCUrl(e){const r=this.namespace.rpcMap;if(r)return r[e]}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||this.getCardanoRPCUrl(e);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new gr(new kr(i,Se("disableProviderPing")))}}var s7=Object.defineProperty,n7=(t,e,r)=>e in t?s7(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,Qs=(t,e,r)=>n7(t,typeof e!="symbol"?e+"":e,r);class o7{constructor(e){Qs(this,"name","elrond"),Qs(this,"client"),Qs(this,"httpProviders"),Qs(this,"events"),Qs(this,"namespace"),Qs(this,"chainId"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=zs(r);e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||Xt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new gr(new kr(i,Se("disableProviderPing")))}}var a7=Object.defineProperty,c7=(t,e,r)=>e in t?a7(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,en=(t,e,r)=>c7(t,typeof e!="symbol"?e+"":e,r);let l7=class{constructor(e){en(this,"name","multiversx"),en(this,"client"),en(this,"httpProviders"),en(this,"events"),en(this,"namespace"),en(this,"chainId"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;const s=zs(r);e[s]=this.createHttpProvider(s,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||Xt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new gr(new kr(i,Se("disableProviderPing")))}};var u7=Object.defineProperty,h7=(t,e,r)=>e in t?u7(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,tn=(t,e,r)=>h7(t,typeof e!="symbol"?e+"":e,r);let d7=class{constructor(e){tn(this,"name","near"),tn(this,"client"),tn(this,"httpProviders"),tn(this,"events"),tn(this,"namespace"),tn(this,"chainId"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){if(this.chainId=e,!this.httpProviders[e]){const i=r||Xt(`${this.name}:${e}`,this.namespace);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,i)}this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{var i;e[r]=this.createHttpProvider(r,(i=this.namespace.rpcMap)==null?void 0:i[r])}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||Xt(e,this.namespace);return typeof i>"u"?void 0:new gr(new kr(i,Se("disableProviderPing")))}};var p7=Object.defineProperty,g7=(t,e,r)=>e in t?p7(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,rn=(t,e,r)=>g7(t,typeof e!="symbol"?e+"":e,r);let f7=class{constructor(e){rn(this,"name","tezos"),rn(this,"client"),rn(this,"httpProviders"),rn(this,"events"),rn(this,"namespace"),rn(this,"chainId"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace=Object.assign(this.namespace,e)}requestAccounts(){return this.getAccounts()}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider().request(e.request)}setDefaultChain(e,r){if(this.chainId=e,!this.httpProviders[e]){const i=r||Xt(`${this.name}:${e}`,this.namespace);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);this.setHttpProvider(e,i)}this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${this.chainId}`)}getAccounts(){const e=this.namespace.accounts;return e?e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2])||[]:[]}createHttpProviders(){const e={};return this.namespace.chains.forEach(r=>{e[r]=this.createHttpProvider(r)}),e}getHttpProvider(){const e=`${this.name}:${this.chainId}`,r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||Xt(e,this.namespace);return typeof i>"u"?void 0:new gr(new kr(i))}};var w7=Object.defineProperty,m7=(t,e,r)=>e in t?w7(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,sn=(t,e,r)=>m7(t,typeof e!="symbol"?e+"":e,r);let v7=class{constructor(e){sn(this,"name",wn),sn(this,"client"),sn(this,"httpProviders"),sn(this,"events"),sn(this,"namespace"),sn(this,"chainId"),this.namespace=e.namespace,this.events=Se("events"),this.client=Se("client"),this.chainId=this.getDefaultChain(),this.httpProviders=this.createHttpProviders()}updateNamespace(e){this.namespace.chains=[...new Set((this.namespace.chains||[]).concat(e.chains||[]))],this.namespace.accounts=[...new Set((this.namespace.accounts||[]).concat(e.accounts||[]))],this.namespace.methods=[...new Set((this.namespace.methods||[]).concat(e.methods||[]))],this.namespace.events=[...new Set((this.namespace.events||[]).concat(e.events||[]))],this.httpProviders=this.createHttpProviders()}requestAccounts(){return this.getAccounts()}request(e){return this.namespace.methods.includes(e.request.method)?this.client.request(e):this.getHttpProvider(e.chainId).request(e.request)}setDefaultChain(e,r){this.httpProviders[e]||this.setHttpProvider(e,r),this.chainId=e,this.events.emit(fr.DEFAULT_CHAIN_CHANGED,`${this.name}:${e}`)}getDefaultChain(){if(this.chainId)return this.chainId;if(this.namespace.defaultChain)return this.namespace.defaultChain;const e=this.namespace.chains[0];if(!e)throw new Error("ChainId not found");return e.split(":")[1]}getAccounts(){const e=this.namespace.accounts;return e?[...new Set(e.filter(r=>r.split(":")[1]===this.chainId.toString()).map(r=>r.split(":")[2]))]:[]}createHttpProviders(){var e,r;const i={};return(r=(e=this.namespace)==null?void 0:e.accounts)==null||r.forEach(s=>{const n=kn(s);i[`${n.namespace}:${n.reference}`]=this.createHttpProvider(s)}),i}getHttpProvider(e){const r=this.httpProviders[e];if(typeof r>"u")throw new Error(`JSON-RPC provider for ${e} not found`);return r}setHttpProvider(e,r){const i=this.createHttpProvider(e,r);i&&(this.httpProviders[e]=i)}createHttpProvider(e,r){const i=r||Xt(e,this.namespace,this.client.core.projectId);if(!i)throw new Error(`No RPC url provided for chainId: ${e}`);return new gr(new kr(i,Se("disableProviderPing")))}};var b7=Object.defineProperty,y7=Object.defineProperties,C7=Object.getOwnPropertyDescriptors,J0=Object.getOwnPropertySymbols,E7=Object.prototype.hasOwnProperty,x7=Object.prototype.propertyIsEnumerable,Qh=(t,e,r)=>e in t?b7(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,lc=(t,e)=>{for(var r in e||(e={}))E7.call(e,r)&&Qh(t,r,e[r]);if(J0)for(var r of J0(e))x7.call(e,r)&&Qh(t,r,e[r]);return t},Au=(t,e)=>y7(t,C7(e)),rr=(t,e,r)=>Qh(t,typeof e!="symbol"?e+"":e,r);class jl{constructor(e){rr(this,"client"),rr(this,"namespaces"),rr(this,"optionalNamespaces"),rr(this,"sessionProperties"),rr(this,"scopedProperties"),rr(this,"events",new Ad),rr(this,"rpcProviders",{}),rr(this,"session"),rr(this,"providerOpts"),rr(this,"logger"),rr(this,"uri"),rr(this,"disableProviderPing",!1),this.providerOpts=e,this.logger=typeof(e==null?void 0:e.logger)<"u"&&typeof(e==null?void 0:e.logger)!="string"?e.logger:Ed(Nl({level:(e==null?void 0:e.logger)||D0})),this.disableProviderPing=(e==null?void 0:e.disableProviderPing)||!1}static async init(e){const r=new jl(e);return await r.initialize(),r}async request(e,r,i){const[s,n]=this.validateChain(r);if(!this.session)throw new Error("Please call connect() before request()");return await this.getProvider(s).request({request:lc({},e),chainId:`${s}:${n}`,topic:this.session.topic,expiry:i})}sendAsync(e,r,i,s){const n=new Date().getTime();this.request(e,i,s).then(o=>r(null,Pl(n,o))).catch(o=>r(o,void 0))}async enable(){if(!this.client)throw new Error("Sign Client not initialized");return this.session||await this.connect({namespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties}),await this.requestAccounts()}async disconnect(){var e;if(!this.session)throw new Error("Please call connect() before enable()");await this.client.disconnect({topic:(e=this.session)==null?void 0:e.topic,reason:Re("USER_DISCONNECTED")}),await this.cleanup()}async connect(e){if(!this.client)throw new Error("Sign Client not initialized");if(this.setNamespaces(e),await this.cleanupPendingPairings(),!e.skipPairing)return await this.pair(e.pairingTopic)}async authenticate(e,r){if(!this.client)throw new Error("Sign Client not initialized");this.setNamespaces(e),await this.cleanupPendingPairings();const{uri:i,response:s}=await this.client.authenticate(e,r);i&&(this.uri=i,this.events.emit("display_uri",i));const n=await s();if(this.session=n.session,this.session){const o=K0(this.session.namespaces);this.namespaces=Eu(this.namespaces,o),await this.persist("namespaces",this.namespaces),this.onConnect()}return n}on(e,r){this.events.on(e,r)}once(e,r){this.events.once(e,r)}removeListener(e,r){this.events.removeListener(e,r)}off(e,r){this.events.off(e,r)}get isWalletConnect(){return!0}async pair(e){const{uri:r,approval:i}=await this.client.connect({pairingTopic:e,requiredNamespaces:this.namespaces,optionalNamespaces:this.optionalNamespaces,sessionProperties:this.sessionProperties,scopedProperties:this.scopedProperties});r&&(this.uri=r,this.events.emit("display_uri",r));const s=await i();this.session=s;const n=K0(s.namespaces);return this.namespaces=Eu(this.namespaces,n),await this.persist("namespaces",this.namespaces),await this.persist("optionalNamespaces",this.optionalNamespaces),this.onConnect(),this.session}setDefaultChain(e,r){try{if(!this.session)return;const[i,s]=this.validateChain(e),n=this.getProvider(i);n.name===wn?n.setDefaultChain(`${i}:${s}`,r):n.setDefaultChain(s,r)}catch(i){if(!/Please call connect/.test(i.message))throw i}}async cleanupPendingPairings(e={}){this.logger.info("Cleaning up inactive pairings...");const r=this.client.pairing.getAll();if(_r(r)){for(const i of r)e.deletePairings?this.client.core.expirer.set(i.topic,0):await this.client.core.relayer.subscriber.unsubscribe(i.topic);this.logger.info(`Inactive pairings cleared: ${r.length}`)}}abortPairingAttempt(){this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.")}async checkStorage(){this.namespaces=await this.getFromStore("namespaces")||{},this.optionalNamespaces=await this.getFromStore("optionalNamespaces")||{},this.session&&this.createProviders()}async initialize(){this.logger.trace("Initialized"),await this.createClient(),await this.checkStorage(),this.registerEventListeners()}async createClient(){var e,r;if(this.client=this.providerOpts.client||await X8.init({core:this.providerOpts.core,logger:this.providerOpts.logger||D0,relayUrl:this.providerOpts.relayUrl||Q8,projectId:this.providerOpts.projectId,metadata:this.providerOpts.metadata,storageOptions:this.providerOpts.storageOptions,storage:this.providerOpts.storage,name:this.providerOpts.name,customStoragePrefix:this.providerOpts.customStoragePrefix,telemetryEnabled:this.providerOpts.telemetryEnabled}),this.providerOpts.session)try{this.session=this.client.session.get(this.providerOpts.session.topic)}catch(i){throw this.logger.error("Failed to get session",i),new Error(`The provided session: ${(r=(e=this.providerOpts)==null?void 0:e.session)==null?void 0:r.topic} doesn't exist in the Sign client`)}else{const i=this.client.session.getAll();this.session=i[0]}this.logger.trace("SignClient Initialized")}createProviders(){if(!this.client)throw new Error("Sign Client not initialized");if(!this.session)throw new Error("Session not initialized. Please call connect() before enable()");const e=[...new Set(Object.keys(this.session.namespaces).map(r=>jo(r)))];Iu("client",this.client),Iu("events",this.events),Iu("disableProviderPing",this.disableProviderPing),e.forEach(r=>{if(!this.session)return;const i=U9(r,this.session),s=nw(i),n=Eu(this.namespaces,this.optionalNamespaces),o=Au(lc({},n[r]),{accounts:i,chains:s});switch(r){case"eip155":this.rpcProviders[r]=new V9({namespace:o});break;case"algorand":this.rpcProviders[r]=new e7({namespace:o});break;case"solana":this.rpcProviders[r]=new Z9({namespace:o});break;case"cosmos":this.rpcProviders[r]=new J9({namespace:o});break;case"polkadot":this.rpcProviders[r]=new D9({namespace:o});break;case"cip34":this.rpcProviders[r]=new i7({namespace:o});break;case"elrond":this.rpcProviders[r]=new o7({namespace:o});break;case"multiversx":this.rpcProviders[r]=new l7({namespace:o});break;case"near":this.rpcProviders[r]=new d7({namespace:o});break;case"tezos":this.rpcProviders[r]=new f7({namespace:o});break;default:this.rpcProviders[wn]?this.rpcProviders[wn].updateNamespace(o):this.rpcProviders[wn]=new v7({namespace:o})}})}registerEventListeners(){if(typeof this.client>"u")throw new Error("Sign Client is not initialized");this.client.on("session_ping",e=>{var r;const{topic:i}=e;i===((r=this.session)==null?void 0:r.topic)&&this.events.emit("session_ping",e)}),this.client.on("session_event",e=>{var r;const{params:i,topic:s}=e;if(s!==((r=this.session)==null?void 0:r.topic))return;const{event:n}=i;if(n.name==="accountsChanged"){const o=n.data;o&&_r(o)&&this.events.emit("accountsChanged",o.map(F0))}else if(n.name==="chainChanged"){const o=i.chainId,a=i.event.data,c=jo(o),l=xu(o)!==xu(a)?`${c}:${xu(a)}`:o;this.onChainChanged(l)}else this.events.emit(n.name,n.data);this.events.emit("session_event",e)}),this.client.on("session_update",({topic:e,params:r})=>{var i,s;if(e!==((i=this.session)==null?void 0:i.topic))return;const{namespaces:n}=r,o=(s=this.client)==null?void 0:s.session.get(e);this.session=Au(lc({},o),{namespaces:n}),this.onSessionUpdate(),this.events.emit("session_update",{topic:e,params:r})}),this.client.on("session_delete",async e=>{var r;e.topic===((r=this.session)==null?void 0:r.topic)&&(await this.cleanup(),this.events.emit("session_delete",e),this.events.emit("disconnect",Au(lc({},Re("USER_DISCONNECTED")),{data:e.topic})))}),this.on(fr.DEFAULT_CHAIN_CHANGED,e=>{this.onChainChanged(e,!0)})}getProvider(e){return this.rpcProviders[e]||this.rpcProviders[wn]}onSessionUpdate(){Object.keys(this.rpcProviders).forEach(e=>{var r;this.getProvider(e).updateNamespace((r=this.session)==null?void 0:r.namespaces[e])})}setNamespaces(e){const{namespaces:r,optionalNamespaces:i,sessionProperties:s,scopedProperties:n}=e;r&&Object.keys(r).length&&(this.namespaces=r),i&&Object.keys(i).length&&(this.optionalNamespaces=i),this.sessionProperties=s,this.scopedProperties=n}validateChain(e){const[r,i]=(e==null?void 0:e.split(":"))||["",""];if(!this.namespaces||!Object.keys(this.namespaces).length)return[r,i];if(r&&!Object.keys(this.namespaces||{}).map(o=>jo(o)).includes(r))throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);if(r&&i)return[r,i];const s=jo(Object.keys(this.namespaces)[0]),n=this.rpcProviders[s].getDefaultChain();return[s,n]}async requestAccounts(){const[e]=this.validateChain();return await this.getProvider(e).requestAccounts()}async onChainChanged(e,r=!1){if(!this.namespaces)return;const[i,s]=this.validateChain(e);if(!s)return;this.updateNamespaceChain(i,s),this.events.emit("chainChanged",s);const n=this.getProvider(i).getDefaultChain();r||this.getProvider(i).setDefaultChain(s),this.emitAccountsChangedOnChainChange({namespace:i,previousChainId:n,newChainId:e}),await this.persist("namespaces",this.namespaces)}emitAccountsChangedOnChainChange({namespace:e,previousChainId:r,newChainId:i}){var s,n;try{if(r===i)return;const o=(n=(s=this.session)==null?void 0:s.namespaces[e])==null?void 0:n.accounts;if(!o)return;const a=o.filter(c=>c.includes(`${i}:`)).map(F0);if(!_r(a))return;this.events.emit("accountsChanged",a)}catch(o){this.logger.warn("Failed to emit accountsChanged on chain change",o)}}updateNamespaceChain(e,r){if(!this.namespaces)return;const i=this.namespaces[e]?e:`${e}:${r}`,s={chains:[],methods:[],events:[],defaultChain:r};this.namespaces[i]?this.namespaces[i]&&(this.namespaces[i].defaultChain=r):this.namespaces[i]=s}onConnect(){this.createProviders(),this.events.emit("connect",{session:this.session})}async cleanup(){this.namespaces=void 0,this.optionalNamespaces=void 0,this.sessionProperties=void 0,await this.deleteFromStore("namespaces"),await this.deleteFromStore("optionalNamespaces"),await this.deleteFromStore("sessionProperties"),this.session=void 0,await this.cleanupPendingPairings({deletePairings:!0}),await this.cleanupStorage()}async persist(e,r){var i;const s=((i=this.session)==null?void 0:i.topic)||"";await this.client.core.storage.setItem(`${ac}/${e}${s}`,r)}async getFromStore(e){var r;const i=((r=this.session)==null?void 0:r.topic)||"";return await this.client.core.storage.getItem(`${ac}/${e}${i}`)}async deleteFromStore(e){var r;const i=((r=this.session)==null?void 0:r.topic)||"";await this.client.core.storage.removeItem(`${ac}/${e}${i}`)}async cleanupStorage(){var e;try{if(((e=this.client)==null?void 0:e.session.length)>0)return;const r=await this.client.core.storage.getKeys();for(const i of r)i.startsWith(ac)&&await this.client.core.storage.removeItem(i)}catch(r){this.logger.warn("Failed to cleanup storage",r)}}}const I7=jl,pl={};var X0={};const A7="wc",S7="ethereum_provider",_7=`${A7}@2:${S7}:`,$7="https://rpc.walletconnect.org/v1/",gl=["eth_sendTransaction","personal_sign"],aw=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],fl=["chainChanged","accountsChanged"],cw=["chainChanged","accountsChanged","message","disconnect","connect"];var k7=Object.defineProperty,N7=Object.defineProperties,P7=Object.getOwnPropertyDescriptors,Q0=Object.getOwnPropertySymbols,O7=Object.prototype.hasOwnProperty,T7=Object.prototype.propertyIsEnumerable,ed=(t,e,r)=>e in t?k7(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,us=(t,e)=>{for(var r in e||(e={}))O7.call(e,r)&&ed(t,r,e[r]);if(Q0)for(var r of Q0(e))T7.call(e,r)&&ed(t,r,e[r]);return t},po=(t,e)=>N7(t,P7(e)),qt=(t,e,r)=>ed(t,typeof e!="symbol"?e+"":e,r);function wl(t){return Number(t[0].split(":")[1])}function uc(t){return`0x${t.toString(16)}`}function R7(t){const{chains:e,optionalChains:r,methods:i,optionalMethods:s,events:n,optionalEvents:o,rpcMap:a}=t;if(!_r(e))throw new Error("Invalid chains");const c={chains:e,methods:i||gl,events:n||fl,rpcMap:us({},e.length?{[wl(e)]:a[wl(e)]}:{})},l=n==null?void 0:n.filter(p=>!fl.includes(p)),u=i==null?void 0:i.filter(p=>!gl.includes(p));if(!r&&!o&&!s&&!(l!=null&&l.length)&&!(u!=null&&u.length))return{required:e.length?c:void 0};const h=(l==null?void 0:l.length)&&(u==null?void 0:u.length)||!r,d={chains:[...new Set(h?c.chains.concat(r||[]):r)],methods:[...new Set(c.methods.concat(s!=null&&s.length?s:aw))],events:[...new Set(c.events.concat(o!=null&&o.length?o:cw))],rpcMap:a};return{required:e.length?c:void 0,optional:r.length?d:void 0}}class zl{constructor(){qt(this,"events",new zi.EventEmitter),qt(this,"namespace","eip155"),qt(this,"accounts",[]),qt(this,"signer"),qt(this,"chainId",1),qt(this,"modal"),qt(this,"rpc"),qt(this,"STORAGE_KEY",_7),qt(this,"on",(e,r)=>(this.events.on(e,r),this)),qt(this,"once",(e,r)=>(this.events.once(e,r),this)),qt(this,"removeListener",(e,r)=>(this.events.removeListener(e,r),this)),qt(this,"off",(e,r)=>(this.events.off(e,r),this)),qt(this,"parseAccount",e=>this.isCompatibleChainId(e)?this.parseAccountId(e).address:e),this.signer={},this.rpc={}}static async init(e){const r=new zl;return await r.initialize(e),r}async request(e,r){return await this.signer.request(e,this.formatChainId(this.chainId),r)}sendAsync(e,r,i){this.signer.sendAsync(e,r,this.formatChainId(this.chainId),i)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(e){var r;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(e);const{required:i,optional:s}=R7(this.rpc);try{const n=await new Promise(async(a,c)=>{var l,u;this.rpc.showQrModal&&((l=this.modal)==null||l.open(),(u=this.modal)==null||u.subscribeState(d=>{!d.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),c(new Error("Connection request reset. Please try again.")))}));const h=e!=null&&e.scopedProperties?{[this.namespace]:e.scopedProperties}:void 0;await this.signer.connect(po(us({namespaces:us({},i&&{[this.namespace]:i})},s&&{optionalNamespaces:{[this.namespace]:s}}),{pairingTopic:e==null?void 0:e.pairingTopic,scopedProperties:h})).then(d=>{a(d)}).catch(d=>{var p;(p=this.modal)==null||p.showErrorMessage("Unable to connect"),c(new Error(d.message))})});if(!n)return;const o=bp(n.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:o),this.setAccounts(o),this.events.emit("connect",{chainId:uc(this.chainId)})}catch(n){throw this.signer.logger.error(n),n}finally{(r=this.modal)==null||r.close()}}async authenticate(e,r){var i;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:e==null?void 0:e.chains});try{const s=await new Promise(async(o,a)=>{var c,l;this.rpc.showQrModal&&((c=this.modal)==null||c.open(),(l=this.modal)==null||l.subscribeState(u=>{!u.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),a(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(po(us({},e),{chains:this.rpc.chains}),r).then(u=>{o(u)}).catch(u=>{var h;(h=this.modal)==null||h.showErrorMessage("Unable to connect"),a(new Error(u.message))})}),n=s.session;if(n){const o=bp(n.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:o),this.setAccounts(o),this.events.emit("connect",{chainId:uc(this.chainId)})}return s}catch(s){throw this.signer.logger.error(s),s}finally{(i=this.modal)==null||i.close()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",e=>{const{params:r}=e,{event:i}=r;i.name==="accountsChanged"?(this.accounts=this.parseAccounts(i.data),this.events.emit("accountsChanged",this.accounts)):i.name==="chainChanged"?this.setChainId(this.formatChainId(i.data)):this.events.emit(i.name,i.data),this.events.emit("session_event",e)}),this.signer.on("accountsChanged",e=>{this.accounts=this.parseAccounts(e),this.events.emit("accountsChanged",this.accounts)}),this.signer.on("chainChanged",e=>{const r=parseInt(e);this.chainId=r,this.events.emit("chainChanged",uc(this.chainId)),this.persist()}),this.signer.on("session_update",e=>{this.events.emit("session_update",e)}),this.signer.on("session_delete",e=>{this.reset(),this.events.emit("session_delete",e),this.events.emit("disconnect",po(us({},Re("USER_DISCONNECTED")),{data:e.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",e=>{this.events.emit("display_uri",e)})}switchEthereumChain(e){this.request({method:"wallet_switchEthereumChain",params:[{chainId:e.toString(16)}]})}isCompatibleChainId(e){return typeof e=="string"?e.startsWith(`${this.namespace}:`):!1}formatChainId(e){return`${this.namespace}:${e}`}parseChainId(e){return Number(e.split(":")[1])}setChainIds(e){const r=e.filter(i=>this.isCompatibleChainId(i)).map(i=>this.parseChainId(i));r.length&&(this.chainId=r[0],this.events.emit("chainChanged",uc(this.chainId)),this.persist())}setChainId(e){if(this.isCompatibleChainId(e)){const r=this.parseChainId(e);this.chainId=r,this.switchEthereumChain(r)}}parseAccountId(e){const[r,i,s]=e.split(":");return{chainId:`${r}:${i}`,address:s}}setAccounts(e){this.accounts=e.filter(r=>this.parseChainId(this.parseAccountId(r).chainId)===this.chainId).map(r=>this.parseAccountId(r).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(e){var r,i;const s=(r=e==null?void 0:e.chains)!=null?r:[],n=(i=e==null?void 0:e.optionalChains)!=null?i:[],o=s.concat(n);if(!o.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const a=s.length?(e==null?void 0:e.methods)||gl:[],c=s.length?(e==null?void 0:e.events)||fl:[],l=(e==null?void 0:e.optionalMethods)||[],u=(e==null?void 0:e.optionalEvents)||[],h=(e==null?void 0:e.rpcMap)||this.buildRpcMap(o,e.projectId),d=(e==null?void 0:e.qrModalOptions)||void 0;return{chains:s==null?void 0:s.map(p=>this.formatChainId(p)),optionalChains:n.map(p=>this.formatChainId(p)),methods:a,events:c,optionalMethods:l,optionalEvents:u,rpcMap:h,showQrModal:!!(e!=null&&e.showQrModal),qrModalOptions:d,projectId:e.projectId,metadata:e.metadata}}buildRpcMap(e,r){const i={};return e.forEach(s=>{i[s]=this.getRpcUrl(s,r)}),i}async initialize(e){if(this.rpc=this.getRpcConfig(e),this.chainId=this.rpc.chains.length?wl(this.rpc.chains):wl(this.rpc.optionalChains),this.signer=await I7.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:e.disableProviderPing,relayUrl:e.relayUrl,storage:e.storage,storageOptions:e.storageOptions,customStoragePrefix:e.customStoragePrefix,telemetryEnabled:e.telemetryEnabled,logger:e.logger}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let r;try{const{createAppKit:i}=await Promise.resolve().then(function(){return VA}),{convertWCMToAppKitOptions:s}=await Promise.resolve().then(function(){return rS}),n=s(po(us({},this.rpc.qrModalOptions),{chains:[...new Set([...this.rpc.chains,...this.rpc.optionalChains])],metadata:this.rpc.metadata,projectId:this.rpc.projectId}));if(!n.networks.length)throw new Error("No networks found for WalletConnect·");r=i(po(us({},n),{universalProvider:this.signer,manualWCControl:!0}))}catch{throw new Error("To use QR modal, please install @reown/appkit package")}if(r)try{this.modal=r}catch(i){throw this.signer.logger.error(i),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(e){if(!e)return;const{chains:r,optionalChains:i,rpcMap:s}=e;r&&_r(r)&&(this.rpc.chains=r.map(n=>this.formatChainId(n)),r.forEach(n=>{this.rpc.rpcMap[n]=(s==null?void 0:s[n])||this.getRpcUrl(n)})),i&&_r(i)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=i==null?void 0:i.map(n=>this.formatChainId(n)),i.forEach(n=>{this.rpc.rpcMap[n]=(s==null?void 0:s[n])||this.getRpcUrl(n)}))}getRpcUrl(e,r){var i;return((i=this.rpc.rpcMap)==null?void 0:i[e])||`${$7}?chainId=eip155:${e}&projectId=${r||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const e=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),r=this.session.namespaces[`${this.namespace}:${e}`]?this.session.namespaces[`${this.namespace}:${e}`]:this.session.namespaces[this.namespace];this.setChainIds(e?[this.formatChainId(e)]:r==null?void 0:r.accounts),this.setAccounts(r==null?void 0:r.accounts)}catch(e){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(e),await this.disconnect().catch(r=>this.signer.logger.warn(r))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(e){return typeof e=="string"||e instanceof String?[this.parseAccount(e)]:e.map(r=>this.parseAccount(r))}}const L7=zl;var ql=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lw={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(ql,function(){var r=1e3,i=6e4,s=36e5,n="millisecond",o="second",a="minute",c="hour",l="day",u="week",h="month",d="quarter",p="year",w="date",g="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(I){var E=["th","st","nd","rd"],x=I%100;return"["+I+(E[(x-20)%10]||E[x]||E[0])+"]"}},b=function(I,E,x){var T=String(I);return!T||T.length>=E?I:""+Array(E+1-T.length).join(x)+I},y={s:b,z:function(I){var E=-I.utcOffset(),x=Math.abs(E),T=Math.floor(x/60),O=x%60;return(E<=0?"+":"-")+b(T,2,"0")+":"+b(O,2,"0")},m:function I(E,x){if(E.date()<x.date())return-I(x,E);var T=12*(x.year()-E.year())+(x.month()-E.month()),O=E.clone().add(T,h),R=x-O<0,B=E.clone().add(T+(R?-1:1),h);return+(-(T+(x-O)/(R?O-B:B-O))||0)},a:function(I){return I<0?Math.ceil(I)||0:Math.floor(I)},p:function(I){return{M:h,y:p,w:u,d:l,D:w,h:c,m:a,s:o,ms:n,Q:d}[I]||String(I||"").toLowerCase().replace(/s$/,"")},u:function(I){return I===void 0}},$="en",_={};_[$]=v;var P="$isDayjsObject",k=function(I){return I instanceof M||!(!I||!I[P])},S=function I(E,x,T){var O;if(!E)return $;if(typeof E=="string"){var R=E.toLowerCase();_[R]&&(O=R),x&&(_[R]=x,O=R);var B=E.split("-");if(!O&&B.length>1)return I(B[0])}else{var z=E.name;_[z]=E,O=z}return!T&&O&&($=O),O||!T&&$},U=function(I,E){if(k(I))return I.clone();var x=typeof E=="object"?E:{};return x.date=I,x.args=arguments,new M(x)},L=y;L.l=S,L.i=k,L.w=function(I,E){return U(I,{locale:E.$L,utc:E.$u,x:E.$x,$offset:E.$offset})};var M=function(){function I(x){this.$L=S(x.locale,null,!0),this.parse(x),this.$x=this.$x||x.x||{},this[P]=!0}var E=I.prototype;return E.parse=function(x){this.$d=function(T){var O=T.date,R=T.utc;if(O===null)return new Date(NaN);if(L.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var B=O.match(f);if(B){var z=B[2]-1||0,K=(B[7]||"0").substring(0,3);return R?new Date(Date.UTC(B[1],z,B[3]||1,B[4]||0,B[5]||0,B[6]||0,K)):new Date(B[1],z,B[3]||1,B[4]||0,B[5]||0,B[6]||0,K)}}return new Date(O)}(x),this.init()},E.init=function(){var x=this.$d;this.$y=x.getFullYear(),this.$M=x.getMonth(),this.$D=x.getDate(),this.$W=x.getDay(),this.$H=x.getHours(),this.$m=x.getMinutes(),this.$s=x.getSeconds(),this.$ms=x.getMilliseconds()},E.$utils=function(){return L},E.isValid=function(){return this.$d.toString()!==g},E.isSame=function(x,T){var O=U(x);return this.startOf(T)<=O&&O<=this.endOf(T)},E.isAfter=function(x,T){return U(x)<this.startOf(T)},E.isBefore=function(x,T){return this.endOf(T)<U(x)},E.$g=function(x,T,O){return L.u(x)?this[T]:this.set(O,x)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function(x,T){var O=this,R=!!L.u(T)||T,B=L.p(x),z=function(ye,je){var Ve=L.w(O.$u?Date.UTC(O.$y,je,ye):new Date(O.$y,je,ye),O);return R?Ve:Ve.endOf(l)},K=function(ye,je){return L.w(O.toDate()[ye].apply(O.toDate("s"),(R?[0,0,0,0]:[23,59,59,999]).slice(je)),O)},se=this.$W,re=this.$M,ge=this.$D,be="set"+(this.$u?"UTC":"");switch(B){case p:return R?z(1,0):z(31,11);case h:return R?z(1,re):z(0,re+1);case u:var Le=this.$locale().weekStart||0,xe=(se<Le?se+7:se)-Le;return z(R?ge-xe:ge+(6-xe),re);case l:case w:return K(be+"Hours",0);case c:return K(be+"Minutes",1);case a:return K(be+"Seconds",2);case o:return K(be+"Milliseconds",3);default:return this.clone()}},E.endOf=function(x){return this.startOf(x,!1)},E.$set=function(x,T){var O,R=L.p(x),B="set"+(this.$u?"UTC":""),z=(O={},O[l]=B+"Date",O[w]=B+"Date",O[h]=B+"Month",O[p]=B+"FullYear",O[c]=B+"Hours",O[a]=B+"Minutes",O[o]=B+"Seconds",O[n]=B+"Milliseconds",O)[R],K=R===l?this.$D+(T-this.$W):T;if(R===h||R===p){var se=this.clone().set(w,1);se.$d[z](K),se.init(),this.$d=se.set(w,Math.min(this.$D,se.daysInMonth())).$d}else z&&this.$d[z](K);return this.init(),this},E.set=function(x,T){return this.clone().$set(x,T)},E.get=function(x){return this[L.p(x)]()},E.add=function(x,T){var O,R=this;x=Number(x);var B=L.p(T),z=function(re){var ge=U(R);return L.w(ge.date(ge.date()+Math.round(re*x)),R)};if(B===h)return this.set(h,this.$M+x);if(B===p)return this.set(p,this.$y+x);if(B===l)return z(1);if(B===u)return z(7);var K=(O={},O[a]=i,O[c]=s,O[o]=r,O)[B]||1,se=this.$d.getTime()+x*K;return L.w(se,this)},E.subtract=function(x,T){return this.add(-1*x,T)},E.format=function(x){var T=this,O=this.$locale();if(!this.isValid())return O.invalidDate||g;var R=x||"YYYY-MM-DDTHH:mm:ssZ",B=L.z(this),z=this.$H,K=this.$m,se=this.$M,re=O.weekdays,ge=O.months,be=O.meridiem,Le=function(je,Ve,Fe,Ze){return je&&(je[Ve]||je(T,R))||Fe[Ve].slice(0,Ze)},xe=function(je){return L.s(z%12||12,je,"0")},ye=be||function(je,Ve,Fe){var Ze=je<12?"AM":"PM";return Fe?Ze.toLowerCase():Ze};return R.replace(m,function(je,Ve){return Ve||function(Fe){switch(Fe){case"YY":return String(T.$y).slice(-2);case"YYYY":return L.s(T.$y,4,"0");case"M":return se+1;case"MM":return L.s(se+1,2,"0");case"MMM":return Le(O.monthsShort,se,ge,3);case"MMMM":return Le(ge,se);case"D":return T.$D;case"DD":return L.s(T.$D,2,"0");case"d":return String(T.$W);case"dd":return Le(O.weekdaysMin,T.$W,re,2);case"ddd":return Le(O.weekdaysShort,T.$W,re,3);case"dddd":return re[T.$W];case"H":return String(z);case"HH":return L.s(z,2,"0");case"h":return xe(1);case"hh":return xe(2);case"a":return ye(z,K,!0);case"A":return ye(z,K,!1);case"m":return String(K);case"mm":return L.s(K,2,"0");case"s":return String(T.$s);case"ss":return L.s(T.$s,2,"0");case"SSS":return L.s(T.$ms,3,"0");case"Z":return B}return null}(je)||B.replace(":","")})},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function(x,T,O){var R,B=this,z=L.p(T),K=U(x),se=(K.utcOffset()-this.utcOffset())*i,re=this-K,ge=function(){return L.m(B,K)};switch(z){case p:R=ge()/12;break;case h:R=ge();break;case d:R=ge()/3;break;case u:R=(re-se)/6048e5;break;case l:R=(re-se)/864e5;break;case c:R=re/s;break;case a:R=re/i;break;case o:R=re/r;break;default:R=re}return O?R:L.a(R)},E.daysInMonth=function(){return this.endOf(h).$D},E.$locale=function(){return _[this.$L]},E.locale=function(x,T){if(!x)return this.$L;var O=this.clone(),R=S(x,T,!0);return R&&(O.$L=R),O},E.clone=function(){return L.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},I}(),F=M.prototype;return U.prototype=F,[["$ms",n],["$s",o],["$m",a],["$H",c],["$W",l],["$M",h],["$y",p],["$D",w]].forEach(function(I){F[I[1]]=function(E){return this.$g(E,I[0],I[1])}}),U.extend=function(I,E){return I.$i||(I(E,M,U),I.$i=!0),U},U.locale=S,U.isDayjs=k,U.unix=function(I){return U(1e3*I)},U.en=_[$],U.Ls=_,U.p={},U})})(lw);var td=lw.exports,uw={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(ql,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var i=["th","st","nd","rd"],s=r%100;return"["+r+(i[(s-20)%10]||i[s]||i[0])+"]"}}})})(uw);var U7=uw.exports,hw={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(ql,function(){return function(r,i,s){r=r||{};var n=i.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,u,h,d){return n.fromToBase(l,u,h,d)}s.en.relativeTime=o,n.fromToBase=function(l,u,h,d,p){for(var w,g,f,m=h.$locale().relativeTime||o,v=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],b=v.length,y=0;y<b;y+=1){var $=v[y];$.d&&(w=d?s(l).diff(h,$.d,!0):h.diff(l,$.d,!0));var _=(r.rounding||Math.round)(Math.abs(w));if(f=w>0,_<=$.r||!$.r){_<=1&&y>0&&($=v[y-1]);var P=m[$.l];p&&(_=p(""+_)),g=typeof P=="string"?P.replace("%d",_):P(_,u,$.l,f);break}}if(u)return g;var k=f?m.future:m.past;return typeof k=="function"?k(g):k.replace("%s",g)},n.to=function(l,u){return a(l,u,this,!0)},n.from=function(l,u){return a(l,u,this)};var c=function(l){return l.$u?s.utc():s()};n.toNow=function(l){return this.to(c(this),l)},n.fromNow=function(l){return this.from(c(this),l)}}})})(hw);var B7=hw.exports,dw={exports:{}};(function(t,e){(function(r,i){t.exports=i()})(ql,function(){return function(r,i,s){s.updateLocale=function(n,o){var a=s.Ls[n];if(a)return(o?Object.keys(o):[]).forEach(function(c){a[c]=o[c]}),a}}})})(dw);var M7=dw.exports;td.extend(B7),td.extend(M7);const D7={...U7,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};td.locale("en-web3-modal",D7);const pw={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0},parseEvmChainId(t){return typeof t=="string"?this.caipNetworkIdToNumber(t):t},getNetworksByNamespace(t,e){return(t==null?void 0:t.filter(r=>r.chainNamespace===e))||[]},getFirstNetworkByNamespace(t,e){return this.getNetworksByNamespace(t,e)[0]}};var j7=20,z7=1,nn=1e6,q7=1e6,H7=-7,W7=21,V7=!1,Jo="[big.js] ",Es=Jo+"Invalid ",hc=Es+"decimal places",F7=Es+"rounding mode",e1=Jo+"Division by zero",Te={},qr=void 0,K7=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function gw(){function t(e){var r=this;if(!(r instanceof t))return e===qr?gw():new t(e);if(e instanceof t)r.s=e.s,r.e=e.e,r.c=e.c.slice();else{if(typeof e!="string"){if(t.strict===!0&&typeof e!="bigint")throw TypeError(Es+"value");e=e===0&&1/e<0?"-0":String(e)}Z7(r,e)}r.constructor=t}return t.prototype=Te,t.DP=j7,t.RM=z7,t.NE=H7,t.PE=W7,t.strict=V7,t.roundDown=0,t.roundHalfUp=1,t.roundHalfEven=2,t.roundUp=3,t}function Z7(t,e){var r,i,s;if(!K7.test(e))throw Error(Es+"number");for(t.s=e.charAt(0)=="-"?(e=e.slice(1),-1):1,(r=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(r<0&&(r=i),r+=+e.slice(i+1),e=e.substring(0,i)):r<0&&(r=e.length),s=e.length,i=0;i<s&&e.charAt(i)=="0";)++i;if(i==s)t.c=[t.e=0];else{for(;s>0&&e.charAt(--s)=="0";);for(t.e=r-i-1,t.c=[],r=0;i<=s;)t.c[r++]=+e.charAt(i++)}return t}function Ki(t,e,r,i){var s=t.c;if(r===qr&&(r=t.constructor.RM),r!==0&&r!==1&&r!==2&&r!==3)throw Error(F7);if(e<1)i=r===3&&(i||!!s[0])||e===0&&(r===1&&s[0]>=5||r===2&&(s[0]>5||s[0]===5&&(i||s[1]!==qr))),s.length=1,i?(t.e=t.e-e+1,s[0]=1):s[0]=t.e=0;else if(e<s.length){if(i=r===1&&s[e]>=5||r===2&&(s[e]>5||s[e]===5&&(i||s[e+1]!==qr||s[e-1]&1))||r===3&&(i||!!s[0]),s.length=e,i){for(;++s[--e]>9;)if(s[e]=0,e===0){++t.e,s.unshift(1);break}}for(e=s.length;!s[--e];)s.pop()}return t}function Zi(t,e,r){var i=t.e,s=t.c.join(""),n=s.length;if(e)s=s.charAt(0)+(n>1?"."+s.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)s="0"+s;s="0."+s}else if(i>0)if(++i>n)for(i-=n;i--;)s+="0";else i<n&&(s=s.slice(0,i)+"."+s.slice(i));else n>1&&(s=s.charAt(0)+"."+s.slice(1));return t.s<0&&r?"-"+s:s}Te.abs=function(){var t=new this.constructor(this);return t.s=1,t},Te.cmp=function(t){var e,r=this,i=r.c,s=(t=new r.constructor(t)).c,n=r.s,o=t.s,a=r.e,c=t.e;if(!i[0]||!s[0])return i[0]?n:s[0]?-o:0;if(n!=o)return n;if(e=n<0,a!=c)return a>c^e?1:-1;for(o=(a=i.length)<(c=s.length)?a:c,n=-1;++n<o;)if(i[n]!=s[n])return i[n]>s[n]^e?1:-1;return a==c?0:a>c^e?1:-1},Te.div=function(t){var e=this,r=e.constructor,i=e.c,s=(t=new r(t)).c,n=e.s==t.s?1:-1,o=r.DP;if(o!==~~o||o<0||o>nn)throw Error(hc);if(!s[0])throw Error(e1);if(!i[0])return t.s=n,t.c=[t.e=0],t;var a,c,l,u,h,d=s.slice(),p=a=s.length,w=i.length,g=i.slice(0,a),f=g.length,m=t,v=m.c=[],b=0,y=o+(m.e=e.e-t.e)+1;for(m.s=n,n=y<0?0:y,d.unshift(0);f++<a;)g.push(0);do{for(l=0;l<10;l++){if(a!=(f=g.length))u=a>f?1:-1;else for(h=-1,u=0;++h<a;)if(s[h]!=g[h]){u=s[h]>g[h]?1:-1;break}if(u<0){for(c=f==a?s:d;f;){if(g[--f]<c[f]){for(h=f;h&&!g[--h];)g[h]=9;--g[h],g[f]+=10}g[f]-=c[f]}for(;!g[0];)g.shift()}else break}v[b++]=u?l:++l,g[0]&&u?g[f]=i[p]||0:g=[i[p]]}while((p++<w||g[0]!==qr)&&n--);return!v[0]&&b!=1&&(v.shift(),m.e--,y--),b>y&&Ki(m,y,r.RM,g[0]!==qr),m},Te.eq=function(t){return this.cmp(t)===0},Te.gt=function(t){return this.cmp(t)>0},Te.gte=function(t){return this.cmp(t)>-1},Te.lt=function(t){return this.cmp(t)<0},Te.lte=function(t){return this.cmp(t)<1},Te.minus=Te.sub=function(t){var e,r,i,s,n=this,o=n.constructor,a=n.s,c=(t=new o(t)).s;if(a!=c)return t.s=-c,n.plus(t);var l=n.c.slice(),u=n.e,h=t.c,d=t.e;if(!l[0]||!h[0])return h[0]?t.s=-c:l[0]?t=new o(n):t.s=1,t;if(a=u-d){for((s=a<0)?(a=-a,i=l):(d=u,i=h),i.reverse(),c=a;c--;)i.push(0);i.reverse()}else for(r=((s=l.length<h.length)?l:h).length,a=c=0;c<r;c++)if(l[c]!=h[c]){s=l[c]<h[c];break}if(s&&(i=l,l=h,h=i,t.s=-t.s),(c=(r=h.length)-(e=l.length))>0)for(;c--;)l[e++]=0;for(c=e;r>a;){if(l[--r]<h[r]){for(e=r;e&&!l[--e];)l[e]=9;--l[e],l[r]+=10}l[r]-=h[r]}for(;l[--c]===0;)l.pop();for(;l[0]===0;)l.shift(),--d;return l[0]||(t.s=1,l=[d=0]),t.c=l,t.e=d,t},Te.mod=function(t){var e,r=this,i=r.constructor,s=r.s,n=(t=new i(t)).s;if(!t.c[0])throw Error(e1);return r.s=t.s=1,e=t.cmp(r)==1,r.s=s,t.s=n,e?new i(r):(s=i.DP,n=i.RM,i.DP=i.RM=0,r=r.div(t),i.DP=s,i.RM=n,this.minus(r.times(t)))},Te.neg=function(){var t=new this.constructor(this);return t.s=-t.s,t},Te.plus=Te.add=function(t){var e,r,i,s=this,n=s.constructor;if(t=new n(t),s.s!=t.s)return t.s=-t.s,s.minus(t);var o=s.e,a=s.c,c=t.e,l=t.c;if(!a[0]||!l[0])return l[0]||(a[0]?t=new n(s):t.s=s.s),t;if(a=a.slice(),e=o-c){for(e>0?(c=o,i=l):(e=-e,i=a),i.reverse();e--;)i.push(0);i.reverse()}for(a.length-l.length<0&&(i=l,l=a,a=i),e=l.length,r=0;e;a[e]%=10)r=(a[--e]=a[e]+l[e]+r)/10|0;for(r&&(a.unshift(r),++c),e=a.length;a[--e]===0;)a.pop();return t.c=a,t.e=c,t},Te.pow=function(t){var e=this,r=new e.constructor("1"),i=r,s=t<0;if(t!==~~t||t<-1e6||t>q7)throw Error(Es+"exponent");for(s&&(t=-t);t&1&&(i=i.times(e)),t>>=1,!!t;)e=e.times(e);return s?r.div(i):i},Te.prec=function(t,e){if(t!==~~t||t<1||t>nn)throw Error(Es+"precision");return Ki(new this.constructor(this),t,e)},Te.round=function(t,e){if(t===qr)t=0;else if(t!==~~t||t<-1e6||t>nn)throw Error(hc);return Ki(new this.constructor(this),t+this.e+1,e)},Te.sqrt=function(){var t,e,r,i=this,s=i.constructor,n=i.s,o=i.e,a=new s("0.5");if(!i.c[0])return new s(i);if(n<0)throw Error(Jo+"No square root");n=Math.sqrt(+Zi(i,!0,!0)),n===0||n===1/0?(e=i.c.join(""),e.length+o&1||(e+="0"),n=Math.sqrt(e),o=((o+1)/2|0)-(o<0||o&1),t=new s((n==1/0?"5e":(n=n.toExponential()).slice(0,n.indexOf("e")+1))+o)):t=new s(n+""),o=t.e+(s.DP+=4);do r=t,t=a.times(r.plus(i.div(r)));while(r.c.slice(0,o).join("")!==t.c.slice(0,o).join(""));return Ki(t,(s.DP-=4)+t.e+1,s.RM)},Te.times=Te.mul=function(t){var e,r=this,i=r.constructor,s=r.c,n=(t=new i(t)).c,o=s.length,a=n.length,c=r.e,l=t.e;if(t.s=r.s==t.s?1:-1,!s[0]||!n[0])return t.c=[t.e=0],t;for(t.e=c+l,o<a&&(e=s,s=n,n=e,l=o,o=a,a=l),e=new Array(l=o+a);l--;)e[l]=0;for(c=a;c--;){for(a=0,l=o+c;l>c;)a=e[l]+n[c]*s[l-c-1]+a,e[l--]=a%10,a=a/10|0;e[l]=a}for(a?++t.e:e.shift(),c=e.length;!e[--c];)e.pop();return t.c=e,t},Te.toExponential=function(t,e){var r=this,i=r.c[0];if(t!==qr){if(t!==~~t||t<0||t>nn)throw Error(hc);for(r=Ki(new r.constructor(r),++t,e);r.c.length<t;)r.c.push(0)}return Zi(r,!0,!!i)},Te.toFixed=function(t,e){var r=this,i=r.c[0];if(t!==qr){if(t!==~~t||t<0||t>nn)throw Error(hc);for(r=Ki(new r.constructor(r),t+r.e+1,e),t=t+r.e+1;r.c.length<t;)r.c.push(0)}return Zi(r,!1,!!i)},Te[Symbol.for("nodejs.util.inspect.custom")]=Te.toJSON=Te.toString=function(){var t=this,e=t.constructor;return Zi(t,t.e<=e.NE||t.e>=e.PE,!!t.c[0])},Te.toNumber=function(){var t=+Zi(this,!0,!0);if(this.constructor.strict===!0&&!this.eq(t.toString()))throw Error(Jo+"Imprecise conversion");return t},Te.toPrecision=function(t,e){var r=this,i=r.constructor,s=r.c[0];if(t!==qr){if(t!==~~t||t<1||t>nn)throw Error(Es+"precision");for(r=Ki(new i(r),t,e);r.c.length<t;)r.c.push(0)}return Zi(r,t<=r.e||r.e<=i.NE||r.e>=i.PE,!!s)},Te.valueOf=function(){var t=this,e=t.constructor;if(e.strict===!0)throw Error(Jo+"valueOf disallowed");return Zi(t,t.e<=e.NE||t.e>=e.PE,!0)};var go=gw();const dc={bigNumber(t){return t?new go(t):new go(0)},multiply(t,e){if(t===void 0||e===void 0)return new go(0);const r=new go(t),i=new go(e);return r.times(i)},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})},parseLocalStringToNumber(t){return t===void 0?0:parseFloat(t.replace(/,/gu,""))}},G7=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Y7=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],J7=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],ae={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network"},X7={getERC20Abi:t=>ae.USDT_CONTRACT_ADDRESSES.includes(t)?J7:G7,getSwapAbi:()=>Y7},bi={validateCaipAddress(t){var e;if(((e=t.split(":"))==null?void 0:e.length)!==3)throw new Error("Invalid CAIP Address");return t},parseCaipAddress(t){const e=t.split(":");if(e.length!==3)throw new Error(`Invalid CAIP-10 address: ${t}`);const[r,i,s]=e;if(!r||!i||!s)throw new Error(`Invalid CAIP-10 address: ${t}`);return{chainNamespace:r,chainId:i,address:s}},parseCaipNetworkId(t){const e=t.split(":");if(e.length!==2)throw new Error(`Invalid CAIP-2 network id: ${t}`);const[r,i]=e;if(!r||!i)throw new Error(`Invalid CAIP-2 network id: ${t}`);return{chainNamespace:r,chainId:i}}},fe={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types"};function Su(t){if(!t)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${t}:connected_connector_id`}const de={setItem(t,e){qo()&&e!==void 0&&localStorage.setItem(t,e)},getItem(t){if(qo())return localStorage.getItem(t)||void 0},removeItem(t){qo()&&localStorage.removeItem(t)},clear(){qo()&&localStorage.clear()}};function qo(){return typeof window<"u"&&typeof localStorage<"u"}function Oi(t,e){return e==="light"?{"--w3m-accent":(t==null?void 0:t["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(t==null?void 0:t["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}const Q7=Symbol(),t1=Object.getPrototypeOf,rd=new WeakMap,eC=t=>t&&(rd.has(t)?rd.get(t):t1(t)===Object.prototype||t1(t)===Array.prototype),tC=t=>eC(t)&&t[Q7]||null,r1=(t,e=!0)=>{rd.set(t,e)},_u=t=>typeof t=="object"&&t!==null,_i=new WeakMap,Ho=new WeakSet,rC=(t=Object.is,e=(l,u)=>new Proxy(l,u),r=l=>_u(l)&&!Ho.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),i=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},s=new WeakMap,n=(l,u,h=i)=>{const d=s.get(l);if((d==null?void 0:d[0])===u)return d[1];const p=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return r1(p,!0),s.set(l,[u,p]),Reflect.ownKeys(l).forEach(w=>{if(Object.getOwnPropertyDescriptor(p,w))return;const g=Reflect.get(l,w),{enumerable:f}=Reflect.getOwnPropertyDescriptor(l,w),m={value:g,enumerable:f,configurable:!0};if(Ho.has(g))r1(g,!1);else if(g instanceof Promise)delete m.value,m.get=()=>h(g);else if(_i.has(g)){const[v,b]=_i.get(g);m.value=n(v,b(),h)}Object.defineProperty(p,w,m)}),Object.preventExtensions(p)},o=new WeakMap,a=[1,1],c=l=>{if(!_u(l))throw new Error("object required");const u=o.get(l);if(u)return u;let h=a[0];const d=new Set,p=(k,S=++a[0])=>{h!==S&&(h=S,d.forEach(U=>U(k,S)))};let w=a[1];const g=(k=++a[1])=>(w!==k&&!d.size&&(w=k,m.forEach(([S])=>{const U=S[1](k);U>h&&(h=U)})),h),f=k=>(S,U)=>{const L=[...S];L[1]=[k,...L[1]],p(L,U)},m=new Map,v=(k,S)=>{if((pl?"production":void 0)!=="production"&&m.has(k))throw new Error("prop listener already exists");if(d.size){const U=S[3](f(k));m.set(k,[S,U])}else m.set(k,[S])},b=k=>{var S;const U=m.get(k);U&&(m.delete(k),(S=U[1])==null||S.call(U))},y=k=>(d.add(k),d.size===1&&m.forEach(([S,U],L)=>{if((pl?"production":void 0)!=="production"&&U)throw new Error("remove already exists");const M=S[3](f(L));m.set(L,[S,M])}),()=>{d.delete(k),d.size===0&&m.forEach(([S,U],L)=>{U&&(U(),m.set(L,[S]))})}),$=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),_=e($,{deleteProperty(k,S){const U=Reflect.get(k,S);b(S);const L=Reflect.deleteProperty(k,S);return L&&p(["delete",[S],U]),L},set(k,S,U,L){const M=Reflect.has(k,S),F=Reflect.get(k,S,L);if(M&&(t(F,U)||o.has(U)&&t(F,o.get(U))))return!0;b(S),_u(U)&&(U=tC(U)||U);let I=U;if(U instanceof Promise)U.then(E=>{U.status="fulfilled",U.value=E,p(["resolve",[S],E])}).catch(E=>{U.status="rejected",U.reason=E,p(["reject",[S],E])});else{!_i.has(U)&&r(U)&&(I=c(U));const E=!Ho.has(I)&&_i.get(I);E&&v(S,E)}return Reflect.set(k,S,I,L),p(["set",[S],U,F]),!0}});o.set(l,_);const P=[$,g,n,y];return _i.set(_,P),Reflect.ownKeys(l).forEach(k=>{const S=Object.getOwnPropertyDescriptor(l,k);"value"in S&&(_[k]=l[k],delete S.value,delete S.writable),Object.defineProperty($,k,S)}),_})=>[c,_i,Ho,t,e,r,i,s,n,o,a],[iC]=rC();function De(t={}){return iC(t)}function Et(t,e,r){const i=_i.get(t);(pl?"production":void 0)!=="production"&&!i&&console.warn("Please use proxy object");let s;const n=[],o=i[3];let a=!1;const c=o(l=>{n.push(l),s||(s=Promise.resolve().then(()=>{s=void 0,a&&e(n.splice(0))}))});return a=!0,()=>{a=!1,c()}}function ua(t,e){const r=_i.get(t);(pl?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");const[i,s,n]=r;return n(i,s(),e)}function Ts(t){return Ho.add(t),t}function kt(t,e,r,i){let s=t[e];return Et(t,()=>{const n=t[e];Object.is(s,n)||r(s=n)},i)}function sC(t){const e=De({data:Array.from([]),has(r){return this.data.some(i=>i[0]===r)},set(r,i){const s=this.data.find(n=>n[0]===r);return s?s[1]=i:this.data.push([r,i]),this},get(r){var i;return(i=this.data.find(s=>s[0]===r))==null?void 0:i[1]},delete(r){const i=this.data.findIndex(s=>s[0]===r);return i===-1?!1:(this.data.splice(i,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(r){this.data.forEach(i=>{r(i[1],i[0],this)})},keys(){return this.data.map(r=>r[0]).values()},values(){return this.data.map(r=>r[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(e,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(e),e}const $u=(typeof process<"u"&&typeof X0<"u"?X0.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",nC=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],it={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:$u,SECURE_SITE_DASHBOARD:`${$u}/dashboard`,SECURE_SITE_FAVICON:`${$u}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in a new browser tab"},DEFAULT_FEATURES:{swaps:!0,onramp:!0,receive:!0,send:!0,email:!0,emailShowWallets:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],history:!0,analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0},DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}},te={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired(t,e){return Date.now()-t>e},getActiveNetworkProps(){const t=te.getActiveNamespace(),e=te.getActiveCaipNetworkId(),r=e?e.split(":")[1]:void 0,i=r?isNaN(Number(r))?r:Number(r):void 0;return{namespace:t,caipNetworkId:e,chainId:i}},setWalletConnectDeepLink({name:t,href:e}){try{de.setItem(fe.DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=de.getItem(fe.DEEPLINK_CHOICE);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{de.removeItem(fe.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(t){try{de.setItem(fe.ACTIVE_NAMESPACE,t)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(t){try{de.setItem(fe.ACTIVE_CAIP_NETWORK_ID,t),te.setActiveNamespace(t.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return de.getItem(fe.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{de.removeItem(fe.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(t){try{const e=Su(t);de.removeItem(e)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(t){try{const e=te.getRecentWallets();e.find(r=>r.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),de.setItem(fe.RECENT_WALLETS,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const t=de.getItem(fe.RECENT_WALLETS);return t?JSON.parse(t):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(t,e){try{const r=Su(t);de.setItem(r,e)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return de.getItem(fe.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(t){if(t)try{const e=Su(t);return de.getItem(e)}catch{console.info("Unable to get connected connector id in namespace ",t)}},setConnectedSocialProvider(t){try{de.setItem(fe.CONNECTED_SOCIAL,t)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return de.getItem(fe.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{de.removeItem(fe.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return de.getItem(fe.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var t,e;return(e=(t=de.getItem(fe.ACTIVE_CAIP_NETWORK_ID))==null?void 0:t.split(":"))==null?void 0:e[1]},setConnectionStatus(t){try{de.setItem(fe.CONNECTION_STATUS,t)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return de.getItem(fe.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const t=de.getItem(fe.CONNECTED_NAMESPACES);return t!=null&&t.length?t.split(","):[]}catch{return[]}},setConnectedNamespaces(t){try{const e=Array.from(new Set(t));de.setItem(fe.CONNECTED_NAMESPACES,e.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(t){try{const e=te.getConnectedNamespaces();e.includes(t)||(e.push(t),te.setConnectedNamespaces(e))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(t){try{const e=te.getConnectedNamespaces(),r=e.indexOf(t);r>-1&&(e.splice(r,1),te.setConnectedNamespaces(e))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return de.getItem(fe.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(t){try{de.setItem(fe.TELEGRAM_SOCIAL_PROVIDER,t)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{de.removeItem(fe.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let t={};try{const e=de.getItem(fe.PORTFOLIO_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get balance cache")}return t},removeAddressFromBalanceCache(t){try{const e=te.getBalanceCache();de.setItem(fe.PORTFOLIO_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove address from balance cache",t)}},getBalanceCacheForCaipAddress(t){try{const e=te.getBalanceCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.portfolio))return e.balance;te.removeAddressFromBalanceCache(t)}catch{console.info("Unable to get balance cache for address",t)}},updateBalanceCache(t){try{const e=te.getBalanceCache();e[t.caipAddress]=t,de.setItem(fe.PORTFOLIO_CACHE,JSON.stringify(e))}catch{console.info("Unable to update balance cache",t)}},getNativeBalanceCache(){let t={};try{const e=de.getItem(fe.NATIVE_BALANCE_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get balance cache")}return t},removeAddressFromNativeBalanceCache(t){try{const e=te.getBalanceCache();de.setItem(fe.NATIVE_BALANCE_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove address from balance cache",t)}},getNativeBalanceCacheForCaipAddress(t){try{const e=te.getNativeBalanceCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.nativeBalance))return e;console.info("Discarding cache for address",t),te.removeAddressFromBalanceCache(t)}catch{console.info("Unable to get balance cache for address",t)}},updateNativeBalanceCache(t){try{const e=te.getNativeBalanceCache();e[t.caipAddress]=t,de.setItem(fe.NATIVE_BALANCE_CACHE,JSON.stringify(e))}catch{console.info("Unable to update balance cache",t)}},getEnsCache(){let t={};try{const e=de.getItem(fe.ENS_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get ens name cache")}return t},getEnsFromCacheForAddress(t){try{const e=te.getEnsCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.ens))return e.ens;te.removeEnsFromCache(t)}catch{console.info("Unable to get ens name from cache",t)}},updateEnsCache(t){try{const e=te.getEnsCache();e[t.address]=t,de.setItem(fe.ENS_CACHE,JSON.stringify(e))}catch{console.info("Unable to update ens name cache",t)}},removeEnsFromCache(t){try{const e=te.getEnsCache();de.setItem(fe.ENS_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove ens name from cache",t)}},getIdentityCache(){let t={};try{const e=de.getItem(fe.IDENTITY_CACHE);t=e?JSON.parse(e):{}}catch{console.info("Unable to get identity cache")}return t},getIdentityFromCacheForAddress(t){try{const e=te.getIdentityCache()[t];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.identity))return e.identity;te.removeIdentityFromCache(t)}catch{console.info("Unable to get identity from cache",t)}},updateIdentityCache(t){try{const e=te.getIdentityCache();e[t.address]={identity:t.identity,timestamp:t.timestamp},de.setItem(fe.IDENTITY_CACHE,JSON.stringify(e))}catch{console.info("Unable to update identity cache",t)}},removeIdentityFromCache(t){try{const e=te.getIdentityCache();de.setItem(fe.IDENTITY_CACHE,JSON.stringify({...e,[t]:void 0}))}catch{console.info("Unable to remove identity from cache",t)}},clearAddressCache(){try{de.removeItem(fe.PORTFOLIO_CACHE),de.removeItem(fe.NATIVE_BALANCE_CACHE),de.removeItem(fe.ENS_CACHE),de.removeItem(fe.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(t){try{de.setItem(fe.PREFERRED_ACCOUNT_TYPES,JSON.stringify(t))}catch{console.info("Unable to set preferred account types",t)}},getPreferredAccountTypes(){try{const t=de.getItem(fe.PREFERRED_ACCOUNT_TYPES);return JSON.parse(t)}catch{console.info("Unable to get preferred account types")}}},H={isMobile(){var t;return this.isClient()?!!((t=window==null?void 0:window.matchMedia("(pointer:coarse)"))!=null&&t.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(t,e=""){return t==null?void 0:t.caipNetworkId.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return H.isMobile()&&t.includes("android")},isIos(){if(!this.isMobile())return!1;const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return t.includes("iphone")||t.includes("ipad")},isSafari(){return this.isClient()?(window==null?void 0:window.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=it.TEN_SEC_MS:!0},isAllowedRetry(t,e=it.ONE_SEC_MS){return Date.now()-t>=e},copyToClopboard(t){navigator.clipboard.writeText(t)},isIframe(){try{return(window==null?void 0:window.self)!==(window==null?void 0:window.top)}catch{return!1}},getPairingExpiry(){return Date.now()+it.FOUR_MINUTES_MS},getNetworkId(t){return t==null?void 0:t.split(":")[1]},getPlainAddress(t){return t==null?void 0:t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let r;return(...i)=>{function s(){t(...i)}r&&clearTimeout(r),r=setTimeout(s,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(H.isHttpUrl(t))return this.formatUniversalUrl(t,e);let r=t;r.includes("://")||(r=t.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.isTelegram()&&this.isAndroid()&&(e=encodeURIComponent(e));const i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},formatUniversalUrl(t,e){if(!H.isHttpUrl(t))return this.formatNativeUrl(t,e);let r=t;r.endsWith("/")||(r=`${r}/`);const i=encodeURIComponent(e);return{redirect:`${r}wc?uri=${i}`,href:r}},getOpenTargetForPlatform(t){return t==="popupWindow"?t:this.isTelegram()?te.getTelegramSocialProvider()?"_top":"_blank":t},openHref(t,e,r){window==null||window.open(t,this.getOpenTargetForPlatform(e),r||"noreferrer noopener")},returnOpenHref(t,e,r){return window==null?void 0:window.open(t,this.getOpenTargetForPlatform(e),r||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},async preloadImage(t){const e=new Promise((r,i)=>{const s=new Image;s.onload=r,s.onerror=i,s.crossOrigin="anonymous",s.src=t});return Promise.race([e,H.wait(2e3)])},formatBalance(t,e){let r="0.000";if(typeof t=="string"){const i=Number(t);if(i){const s=Math.floor(i*1e3)/1e3;s&&(r=s.toString())}}return`${r}${e?` ${e}`:""}`},formatBalance2(t,e){var i;let r;if(t==="0")r="0";else if(typeof t=="string"){const s=Number(t);s&&(r=(i=s.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:e}},getApiUrl(){return ae.W3M_API_URL},getBlockchainApiUrl(){return ae.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return ae.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,r;return typeof t=="string"?t:typeof((r=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:r.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){const r={};return e&&t&&(t.forEach((i,s)=>{r[i]=s}),e.sort((i,s)=>{const n=r[i.id],o=r[s.id];return n!==void 0&&o!==void 0?n-o:n!==void 0?-1:o!==void 0?1:0})),e},calculateBalance(t){let e=0;for(const r of t)e+=r.value??0;return e},formatTokenBalance(t){const e=t.toFixed(2),[r,i]=e.split(".");return{dollars:r,pennies:i}},isAddress(t,e="eip155"){switch(e){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)||/^(?:0x)?[0-9A-F]{40}$/iu.test(t))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(t);default:return!1}},uniqueBy(t,e){const r=new Set;return t.filter(i=>{const s=i[e];return r.has(s)?!1:(r.add(s),!0)})},generateSdkVersion(t,e,r){const i=t.length===0?it.ADAPTER_TYPES.UNIVERSAL:t.map(s=>s.adapterType).join(",");return`${e}-${i}-${r}`},createAccount(t,e,r,i,s){return{namespace:t,address:e,type:r,publicKey:i,path:s}},isCaipAddress(t){if(typeof t!="string")return!1;const e=t.split(":"),r=e[0];return e.filter(Boolean).length===3&&r in ae.CHAIN_NAME_MAP},isMac(){const t=window==null?void 0:window.navigator.userAgent.toLowerCase();return t.includes("macintosh")&&!t.includes("safari")},formatTelegramSocialLoginUrl(t){const e=`--${encodeURIComponent(window==null?void 0:window.location.href)}`,r="state=";if(new URL(t).host==="auth.magic.link"){const i="provider_authorization_url=",s=t.substring(t.indexOf(i)+i.length),n=this.injectIntoUrl(decodeURIComponent(s),r,e);return t.replace(s,encodeURIComponent(n))}return this.injectIntoUrl(t,r,e)},injectIntoUrl(t,e,r){const i=t.indexOf(e);if(i===-1)throw new Error(`${e} parameter not found in the URL: ${t}`);const s=t.indexOf("&",i),n=e.length,o=s!==-1?s:t.length,a=t.substring(0,i+n),c=t.substring(i+n,o),l=t.substring(s),u=c+r;return a+u+l}};async function fo(...t){const e=await fetch(...t);if(!e.ok)throw new Error(`HTTP status code: ${e.status}`,{cause:e});return e}class Hl{constructor({baseUrl:e,clientId:r}){this.baseUrl=e,this.clientId=r}async get({headers:e,signal:r,cache:i,...s}){const n=this.createUrl(s);return(await fo(n,{method:"GET",headers:e,signal:r,cache:i})).json()}async getBlob({headers:e,signal:r,...i}){const s=this.createUrl(i);return(await fo(s,{method:"GET",headers:e,signal:r})).blob()}async post({body:e,headers:r,signal:i,...s}){const n=this.createUrl(s);return(await fo(n,{method:"POST",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}async put({body:e,headers:r,signal:i,...s}){const n=this.createUrl(s);return(await fo(n,{method:"PUT",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}async delete({body:e,headers:r,signal:i,...s}){const n=this.createUrl(s);return(await fo(n,{method:"DELETE",headers:r,body:e?JSON.stringify(e):void 0,signal:i})).json()}createUrl({path:e,params:r}){const i=new URL(e,this.baseUrl);return r&&Object.entries(r).forEach(([s,n])=>{n&&i.searchParams.append(s,n)}),this.clientId&&i.searchParams.append("clientId",this.clientId),i}}const oC={handleSolanaDeeplinkRedirect(t){if(C.state.activeChain===ae.CHAIN.SOLANA){const e=window.location.href,r=encodeURIComponent(e);if(t==="Phantom"&&!("phantom"in window)){const i=e.startsWith("https")?"https":"http",s=e.split("/")[2],n=encodeURIComponent(`${i}://${s}`);window.location.href=`https://phantom.app/ul/browse/${r}?ref=${n}`}t==="Coinbase Wallet"&&!("coinbaseSolana"in window)&&(window.location.href=`https://go.cb-w.com/dapp?cb_url=${r}`)}}},Ht=De({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),Mt={state:Ht,subscribeNetworkImages(t){return Et(Ht.networkImages,()=>t(Ht.networkImages))},subscribeKey(t,e){return kt(Ht,t,e)},subscribe(t){return Et(Ht,()=>t(Ht))},setWalletImage(t,e){Ht.walletImages[t]=e},setNetworkImage(t,e){Ht.networkImages[t]=e},setChainImage(t,e){Ht.chainImages[t]=e},setConnectorImage(t,e){Ht.connectorImages={...Ht.connectorImages,[t]:e}},setTokenImage(t,e){Ht.tokenImages[t]=e},setCurrencyImage(t,e){Ht.currencyImages[t]=e}},aC={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00"},ku=De({networkImagePromises:{}}),st={async fetchWalletImage(t){if(t)return await Y._fetchWalletImage(t),this.getWalletImageById(t)},async fetchNetworkImage(t){return t?this.getNetworkImageById(t)||(ku.networkImagePromises[t]||(ku.networkImagePromises[t]=Y._fetchNetworkImage(t)),await ku.networkImagePromises[t],this.getNetworkImageById(t)):void 0},getWalletImageById(t){if(t)return Mt.state.walletImages[t]},getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return Mt.state.walletImages[t.image_id]},getNetworkImage(t){var e,r,i;if((e=t==null?void 0:t.assets)!=null&&e.imageUrl)return(r=t==null?void 0:t.assets)==null?void 0:r.imageUrl;if((i=t==null?void 0:t.assets)!=null&&i.imageId)return Mt.state.networkImages[t.assets.imageId]},getNetworkImageById(t){if(t)return Mt.state.networkImages[t]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return Mt.state.connectorImages[t.imageId]},getChainImage(t){return Mt.state.networkImages[aC[t]]}},cC={getFeatureValue(t,e){const r=e==null?void 0:e[t];return r===void 0?it.DEFAULT_FEATURES[t]:r},filterSocialsByPlatform(t){if(!t||!t.length)return t;if(H.isTelegram()){if(H.isIos())return t.filter(e=>e!=="google");if(H.isMac())return t.filter(e=>e!=="x");if(H.isAndroid())return t.filter(e=>!["facebook","x"].includes(e))}return t}},ue=De({features:it.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:{solana:"eoa",bip122:"payment",polkadot:"eoa",eip155:"smartAccount"},enableNetworkSwitch:!0}),j={state:ue,subscribeKey(t,e){return kt(ue,t,e)},setOptions(t){Object.assign(ue,t)},setFeatures(t){if(!t)return;ue.features||(ue.features=it.DEFAULT_FEATURES);const e={...ue.features,...t};ue.features=e,ue.features.socials&&(ue.features.socials=cC.filterSocialsByPlatform(ue.features.socials))},setProjectId(t){ue.projectId=t},setCustomRpcUrls(t){ue.customRpcUrls=t},setAllWallets(t){ue.allWallets=t},setIncludeWalletIds(t){ue.includeWalletIds=t},setExcludeWalletIds(t){ue.excludeWalletIds=t},setFeaturedWalletIds(t){ue.featuredWalletIds=t},setTokens(t){ue.tokens=t},setTermsConditionsUrl(t){ue.termsConditionsUrl=t},setPrivacyPolicyUrl(t){ue.privacyPolicyUrl=t},setCustomWallets(t){ue.customWallets=t},setIsSiweEnabled(t){ue.isSiweEnabled=t},setIsUniversalProvider(t){ue.isUniversalProvider=t},setSdkVersion(t){ue.sdkVersion=t},setMetadata(t){ue.metadata=t},setDisableAppend(t){ue.disableAppend=t},setEIP6963Enabled(t){ue.enableEIP6963=t},setDebug(t){ue.debug=t},setEnableWalletConnect(t){ue.enableWalletConnect=t},setEnableWalletGuide(t){ue.enableWalletGuide=t},setEnableAuthLogger(t){ue.enableAuthLogger=t},setEnableWallets(t){ue.enableWallets=t},setHasMultipleAddresses(t){ue.hasMultipleAddresses=t},setSIWX(t){ue.siwx=t},setConnectMethodsOrder(t){ue.features={...ue.features,connectMethodsOrder:t}},setWalletFeaturesOrder(t){ue.features={...ue.features,walletFeaturesOrder:t}},setSocialsOrder(t){ue.features={...ue.features,socials:t}},setCollapseWallets(t){ue.features={...ue.features,collapseWallets:t}},setEnableEmbedded(t){ue.enableEmbedded=t},setAllowUnsupportedChain(t){ue.allowUnsupportedChain=t},setManualWCControl(t){ue.manualWCControl=t},setEnableNetworkSwitch(t){ue.enableNetworkSwitch=t},setDefaultAccountTypes(t={}){Object.entries(t).forEach(([e,r])=>{r&&(ue.defaultAccountTypes[e]=r)})},setUniversalProviderConfigOverride(t){ue.universalProviderConfigOverride=t},getUniversalProviderConfigOverride(){return ue.universalProviderConfigOverride},getSnapshot(){return ua(ue)}},yi=De({message:"",variant:"info",open:!1}),Li={state:yi,subscribeKey(t,e){return kt(yi,t,e)},open(t,e){const{debug:r}=j.state,{shortMessage:i,longMessage:s}=t;r&&(yi.message=i,yi.variant=e,yi.open=!0),s&&console.error(typeof s=="function"?s():s)},close(){yi.open=!1,yi.message="",yi.variant="info"}},lC=H.getAnalyticsUrl(),uC=new Hl({baseUrl:lC,clientId:null}),hC=["MODAL_CREATED"],Zr=De({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),we={state:Zr,subscribe(t){return Et(Zr,()=>t(Zr))},getSdkProperties(){const{projectId:t,sdkType:e,sdkVersion:r}=j.state;return{projectId:t,st:e,sv:r||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(t){try{const e=ne.state.address;if(hC.includes(t.data.event)||typeof window>"u")return;await uC.post({path:"/e",params:we.getSdkProperties(),body:{eventId:H.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:{...t.data,address:e}}}),Zr.reportedErrors.FORBIDDEN=!1}catch(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===ae.HTTP_STATUS_CODES.FORBIDDEN&&!Zr.reportedErrors.FORBIDDEN&&(Li.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${qo()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),Zr.reportedErrors.FORBIDDEN=!0)}},sendEvent(t){var e;Zr.timestamp=Date.now(),Zr.data=t,(e=j.state.features)!=null&&e.analytics&&we._sendAnalyticsEvent(Zr)}},dC=["1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79","fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa","a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393"],pC=H.getApiUrl(),ir=new Hl({baseUrl:pC,clientId:null}),gC=40,i1=4,fC=20,Pe=De({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),Y={state:Pe,subscribeKey(t,e){return kt(Pe,t,e)},_getSdkProperties(){const{projectId:t,sdkType:e,sdkVersion:r}=j.state;return{projectId:t,st:e||"appkit",sv:r||"html-wagmi-4.2.2"}},_filterOutExtensions(t){return j.state.isUniversalProvider?t.filter(e=>!!(e.mobile_link||e.desktop_link||e.webapp_link)):t},async _fetchWalletImage(t){const e=`${ir.baseUrl}/getWalletImage/${t}`,r=await ir.getBlob({path:e,params:Y._getSdkProperties()});Mt.setWalletImage(t,URL.createObjectURL(r))},async _fetchNetworkImage(t){const e=`${ir.baseUrl}/public/getAssetImage/${t}`,r=await ir.getBlob({path:e,params:Y._getSdkProperties()});Mt.setNetworkImage(t,URL.createObjectURL(r))},async _fetchConnectorImage(t){const e=`${ir.baseUrl}/public/getAssetImage/${t}`,r=await ir.getBlob({path:e,params:Y._getSdkProperties()});Mt.setConnectorImage(t,URL.createObjectURL(r))},async _fetchCurrencyImage(t){const e=`${ir.baseUrl}/public/getCurrencyImage/${t}`,r=await ir.getBlob({path:e,params:Y._getSdkProperties()});Mt.setCurrencyImage(t,URL.createObjectURL(r))},async _fetchTokenImage(t){const e=`${ir.baseUrl}/public/getTokenImage/${t}`,r=await ir.getBlob({path:e,params:Y._getSdkProperties()});Mt.setTokenImage(t,URL.createObjectURL(r))},async fetchNetworkImages(){var e;const t=(e=C.getAllRequestedCaipNetworks())==null?void 0:e.map(({assets:r})=>r==null?void 0:r.imageId).filter(Boolean).filter(r=>!st.getNetworkImageById(r));t&&await Promise.allSettled(t.map(r=>Y._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:t}=J.state,e=t.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(e.map(r=>Y._fetchConnectorImage(r)))},async fetchCurrencyImages(t=[]){await Promise.allSettled(t.map(e=>Y._fetchCurrencyImage(e)))},async fetchTokenImages(t=[]){await Promise.allSettled(t.map(e=>Y._fetchTokenImage(e)))},async fetchWallets(t){var r,i;const e=t.exclude??[];return Y._getSdkProperties().sv.startsWith("html-core-")&&e.push(...dC),await ir.get({path:"/getWallets",params:{...Y._getSdkProperties(),...t,page:String(t.page),entries:String(t.entries),include:(r=t.include)==null?void 0:r.join(","),exclude:(i=t.exclude)==null?void 0:i.join(",")}})},async fetchFeaturedWallets(){const{featuredWalletIds:t}=j.state;if(t!=null&&t.length){const e={...Y._getSdkProperties(),page:1,entries:(t==null?void 0:t.length)??i1,include:t},{data:r}=await Y.fetchWallets(e);r.sort((s,n)=>t.indexOf(s.id)-t.indexOf(n.id));const i=r.map(s=>s.image_id).filter(Boolean);await Promise.allSettled(i.map(s=>Y._fetchWalletImage(s))),Pe.featured=r,Pe.allFeatured=r}},async fetchRecommendedWallets(){try{Pe.isFetchingRecommendedWallets=!0;const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:r}=j.state,i=[...e??[],...r??[]].filter(Boolean),s=C.getRequestedCaipNetworkIds().join(","),n={page:1,entries:i1,include:t,exclude:i,chains:s},{data:o,count:a}=await Y.fetchWallets(n),c=te.getRecentWallets(),l=o.map(h=>h.image_id).filter(Boolean),u=c.map(h=>h.image_id).filter(Boolean);await Promise.allSettled([...l,...u].map(h=>Y._fetchWalletImage(h))),Pe.recommended=o,Pe.allRecommended=o,Pe.count=a??0}catch{}finally{Pe.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:t}){const{includeWalletIds:e,excludeWalletIds:r,featuredWalletIds:i}=j.state,s=C.getRequestedCaipNetworkIds().join(","),n=[...Pe.recommended.map(({id:u})=>u),...r??[],...i??[]].filter(Boolean),o={page:t,entries:gC,include:e,exclude:n,chains:s},{data:a,count:c}=await Y.fetchWallets(o),l=a.slice(0,fC).map(u=>u.image_id).filter(Boolean);await Promise.allSettled(l.map(u=>Y._fetchWalletImage(u))),Pe.wallets=H.uniqueBy([...Pe.wallets,...Y._filterOutExtensions(a)],"id"),Pe.count=c>Pe.count?c:Pe.count,Pe.page=t},async initializeExcludedWallets({ids:t}){const e=C.getRequestedCaipNetworkIds().join(","),r={page:1,entries:t.length,include:t,chains:e},{data:i}=await Y.fetchWallets(r);i&&i.forEach(s=>{Pe.excludedWallets.push({rdns:s.rdns,name:s.name})})},async searchWallet({search:t,badge:e}){const{includeWalletIds:r,excludeWalletIds:i}=j.state,s=C.getRequestedCaipNetworkIds().join(",");Pe.search=[];const n={page:1,entries:100,search:t==null?void 0:t.trim(),badge_type:e,include:r,exclude:i,chains:s},{data:o}=await Y.fetchWallets(n);we.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:e??"",search:t??""}});const a=o.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>Y._fetchWalletImage(c)),H.wait(300)]),Pe.search=Y._filterOutExtensions(o)},initPromise(t,e){return Pe.promises[t]||(Pe.promises[t]=e())},prefetch({fetchConnectorImages:t=!0,fetchFeaturedWallets:e=!0,fetchRecommendedWallets:r=!0,fetchNetworkImages:i=!0}={}){const s=[t&&Y.initPromise("connectorImages",Y.fetchConnectorImages),e&&Y.initPromise("featuredWallets",Y.fetchFeaturedWallets),r&&Y.initPromise("recommendedWallets",Y.fetchRecommendedWallets),i&&Y.initPromise("networkImages",Y.fetchNetworkImages)].filter(Boolean);return Promise.allSettled(s)},prefetchAnalyticsConfig(){var t;(t=j.state.features)!=null&&t.analytics&&Y.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:t}=await ir.get({path:"/getAnalyticsConfig",params:Y._getSdkProperties()});j.setFeatures({analytics:t})}catch{j.setFeatures({analytics:!1})}},setFilterByNamespace(t){if(!t){Pe.featured=Pe.allFeatured,Pe.recommended=Pe.allRecommended;return}const e=C.getRequestedCaipNetworkIds().join(",");Pe.featured=Pe.allFeatured.filter(r=>{var i;return(i=r.chains)==null?void 0:i.some(s=>e.includes(s))}),Pe.recommended=Pe.allRecommended.filter(r=>{var i;return(i=r.chains)==null?void 0:i.some(s=>e.includes(s))})}},ke=De({view:"Connect",history:["Connect"],transactionStack:[]}),G={state:ke,subscribeKey(t,e){return kt(ke,t,e)},pushTransactionStack(t){ke.transactionStack.push(t)},popTransactionStack(t){var r,i;const e=ke.transactionStack.pop();if(e)if(t)this.goBack(),(r=e==null?void 0:e.onCancel)==null||r.call(e);else{if(e.goBack)this.goBack();else if(e.replace){const s=ke.history.indexOf("ConnectingSiwe");s>0?this.goBackToIndex(s-1):(Ee.close(),ke.history=[])}else e.view&&this.reset(e.view);(i=e==null?void 0:e.onSuccess)==null||i.call(e)}},push(t,e){t!==ke.view&&(ke.view=t,ke.history.push(t),ke.data=e)},reset(t,e){ke.view=t,ke.history=[t],ke.data=e},replace(t,e){ke.history.at(-1)===t||(ke.view=t,ke.history[ke.history.length-1]=t,ke.data=e)},goBack(){var e;const t=!C.state.activeCaipAddress&&this.state.view==="ConnectingFarcaster";if(ke.history.length>1&&!ke.history.includes("UnsupportedChain")){ke.history.pop();const[r]=ke.history.slice(-1);r&&(ke.view=r)}else Ee.close();(e=ke.data)!=null&&e.wallet&&(ke.data.wallet=void 0),setTimeout(()=>{var r,i,s;if(t){ne.setFarcasterUrl(void 0,C.state.activeChain);const n=J.getAuthConnector();(r=n==null?void 0:n.provider)==null||r.reload();const o=ua(j.state);(s=(i=n==null?void 0:n.provider)==null?void 0:i.syncDappData)==null||s.call(i,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId,sdkType:o.sdkType})}},100)},goBackToIndex(t){if(ke.history.length>1){ke.history=ke.history.slice(0,t+1);const[e]=ke.history.slice(-1);e&&(ke.view=e)}}},Gr=De({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),rt={state:Gr,subscribe(t){return Et(Gr,()=>t(Gr))},setThemeMode(t){Gr.themeMode=t;try{const e=J.getAuthConnector();if(e){const r=rt.getSnapshot().themeVariables;e.provider.syncTheme({themeMode:t,themeVariables:r,w3mThemeVariables:Oi(r,t)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(t){Gr.themeVariables={...Gr.themeVariables,...t};try{const e=J.getAuthConnector();if(e){const r=rt.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:r,w3mThemeVariables:Oi(Gr.themeVariables,Gr.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return ua(Gr)}},fw={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},Oe=De({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...fw}}),J={state:Oe,subscribe(t){return Et(Oe,()=>{t(Oe)})},subscribeKey(t,e){return kt(Oe,t,e)},initialize(t){t.forEach(e=>{const r=te.getConnectedConnectorId(e);r&&this.setConnectorId(r,e)})},setActiveConnector(t){t&&(Oe.activeConnector=Ts(t))},setConnectors(t){t.filter(e=>!Oe.allConnectors.some(r=>r.id===e.id&&this.getConnectorName(r.name)===this.getConnectorName(e.name)&&r.chain===e.chain)).forEach(e=>{e.type!=="MULTI_CHAIN"&&Oe.allConnectors.push(Ts(e))}),Oe.connectors=this.mergeMultiChainConnectors(Oe.allConnectors)},removeAdapter(t){Oe.allConnectors=Oe.allConnectors.filter(e=>e.chain!==t),Oe.connectors=this.mergeMultiChainConnectors(Oe.allConnectors)},mergeMultiChainConnectors(t){const e=this.generateConnectorMapByName(t),r=[];return e.forEach(i=>{const s=i[0],n=(s==null?void 0:s.id)===ae.CONNECTOR_ID.AUTH;i.length>1&&s?r.push({name:s.name,imageUrl:s.imageUrl,imageId:s.imageId,connectors:[...i],type:n?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(s==null?void 0:s.id)||""}):s&&r.push(s)}),r},generateConnectorMapByName(t){const e=new Map;return t.forEach(r=>{const{name:i}=r,s=this.getConnectorName(i);if(!s)return;const n=e.get(s)||[];n.find(o=>o.chain===r.chain)||n.push(r),e.set(s,n)}),e},getConnectorName(t){return t&&({"Trust Wallet":"Trust"}[t]||t)},getUniqueConnectorsByName(t){const e=[];return t.forEach(r=>{e.find(i=>i.chain===r.chain)||e.push(r)}),e},addConnector(t){var e,r,i;if(t.id===ae.CONNECTOR_ID.AUTH){const s=t,n=ua(j.state),o=rt.getSnapshot().themeMode,a=rt.getSnapshot().themeVariables;(r=(e=s==null?void 0:s.provider)==null?void 0:e.syncDappData)==null||r.call(e,{metadata:n.metadata,sdkVersion:n.sdkVersion,projectId:n.projectId,sdkType:n.sdkType}),(i=s==null?void 0:s.provider)==null||i.syncTheme({themeMode:o,themeVariables:a,w3mThemeVariables:Oi(a,o)}),this.setConnectors([t])}else this.setConnectors([t])},getAuthConnector(t){var i;const e=t||C.state.activeChain,r=Oe.connectors.find(s=>s.id===ae.CONNECTOR_ID.AUTH);if(r)return(i=r==null?void 0:r.connectors)!=null&&i.length?r.connectors.find(s=>s.chain===e):r},getAnnouncedConnectorRdns(){return Oe.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectorById(t){return Oe.allConnectors.find(e=>e.id===t)},getConnector(t,e){return Oe.allConnectors.filter(r=>r.chain===C.state.activeChain).find(r=>{var i;return r.explorerId===t||((i=r.info)==null?void 0:i.rdns)===e})},syncIfAuthConnector(t){var n,o;if(t.id!=="ID_AUTH")return;const e=t,r=ua(j.state),i=rt.getSnapshot().themeMode,s=rt.getSnapshot().themeVariables;(o=(n=e==null?void 0:e.provider)==null?void 0:n.syncDappData)==null||o.call(n,{metadata:r.metadata,sdkVersion:r.sdkVersion,sdkType:r.sdkType,projectId:r.projectId}),e.provider.syncTheme({themeMode:i,themeVariables:s,w3mThemeVariables:Oi(s,i)})},getConnectorsByNamespace(t){const e=Oe.allConnectors.filter(r=>r.chain===t);return this.mergeMultiChainConnectors(e)},selectWalletConnector(t){const e=J.getConnector(t.id,t.rdns);C.state.activeChain===ae.CHAIN.SOLANA&&oC.handleSolanaDeeplinkRedirect((e==null?void 0:e.name)||t.name||""),e?G.push("ConnectingExternal",{connector:e}):G.push("ConnectingWalletConnect",{wallet:t})},getConnectors(t){return t?this.getConnectorsByNamespace(t):this.mergeMultiChainConnectors(Oe.allConnectors)},setFilterByNamespace(t){Oe.filterByNamespace=t,Oe.connectors=this.getConnectors(t),Y.setFilterByNamespace(t)},setConnectorId(t,e){t&&(Oe.activeConnectorIds={...Oe.activeConnectorIds,[e]:t},te.setConnectedConnectorId(e,t))},removeConnectorId(t){Oe.activeConnectorIds={...Oe.activeConnectorIds,[t]:void 0},te.deleteConnectedConnectorId(t)},getConnectorId(t){if(t)return Oe.activeConnectorIds[t]},isConnected(t){return t?!!Oe.activeConnectorIds[t]:Object.values(Oe.activeConnectorIds).some(e=>!!e)},resetConnectorIds(){Oe.activeConnectorIds={...fw}}};function pc(t,e){return J.getConnectorId(t)===e}function wC(t){const e=Array.from(C.state.chains.keys());let r=[];return t?(r.push([t,C.state.chains.get(t)]),pc(t,ae.CONNECTOR_ID.WALLET_CONNECT)?e.forEach(i=>{i!==t&&pc(i,ae.CONNECTOR_ID.WALLET_CONNECT)&&r.push([i,C.state.chains.get(i)])}):pc(t,ae.CONNECTOR_ID.AUTH)&&e.forEach(i=>{i!==t&&pc(i,ae.CONNECTOR_ID.AUTH)&&r.push([i,C.state.chains.get(i)])})):r=Array.from(C.state.chains.entries()),r}const $i={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},hs=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),et=De({...hs}),Me={state:et,subscribeKey(t,e){return kt(et,t,e)},showLoading(t,e={}){this._showMessage({message:t,variant:"loading",...e})},showSuccess(t){this._showMessage({message:t,variant:"success"})},showSvg(t,e){this._showMessage({message:t,svg:e})},showError(t){const e=H.parseError(t);this._showMessage({message:e,variant:"error"})},hide(){et.message=hs.message,et.variant=hs.variant,et.svg=hs.svg,et.open=hs.open,et.autoClose=hs.autoClose},_showMessage({message:t,svg:e,variant:r="success",autoClose:i=hs.autoClose}){et.open?(et.open=!1,setTimeout(()=>{et.message=t,et.variant=r,et.svg=e,et.open=!0,et.autoClose=i},150)):(et.message=t,et.variant=r,et.svg=e,et.open=!0,et.autoClose=i)}},Ui={getSIWX(){return j.state.siwx},async initializeIfEnabled(){var n;const t=j.state.siwx,e=C.getActiveCaipAddress();if(!(t&&e))return;const[r,i,s]=e.split(":");if(C.checkIfSupportedNetwork(r))try{if((await t.getSessions(`${r}:${i}`,s)).length)return;await Ee.open({view:"SIWXSignMessage"})}catch(o){console.error("SIWXUtil:initializeIfEnabled",o),we.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties()}),await((n=ie._getClient())==null?void 0:n.disconnect().catch(console.error)),G.reset("Connect"),Me.showError("A problem occurred while trying initialize authentication")}},async requestSignMessage(){const t=j.state.siwx,e=H.getPlainAddress(C.getActiveCaipAddress()),r=C.getActiveCaipNetwork(),i=ie._getClient();if(!t)throw new Error("SIWX is not enabled");if(!e)throw new Error("No ActiveCaipAddress found");if(!r)throw new Error("No ActiveCaipNetwork or client found");if(!i)throw new Error("No ConnectionController client found");try{const s=await t.createMessage({chainId:r.caipNetworkId,accountAddress:e}),n=s.toString();J.getConnectorId(r.chainNamespace)===ae.CONNECTOR_ID.AUTH&&G.pushTransactionStack({view:null,goBack:!1,replace:!0});const o=await i.signMessage(n);await t.addSession({data:s,message:n,signature:o}),Ee.close(),we.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(s){const n=this.getSIWXEventProperties();(!Ee.state.open||G.state.view==="ApproveTransaction")&&await Ee.open({view:"SIWXSignMessage"}),n.isSmartAccount?Me.showError("This application might not support Smart Accounts"):Me.showError("Signature declined"),we.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:n}),console.error("SWIXUtil:requestSignMessage",s)}},async cancelSignMessage(){var t,e;try{(e=(t=this.getSIWX())==null?void 0:t.getRequired)!=null&&e.call(t)?await ie.disconnect():Ee.close(),G.reset("Connect"),we.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(r){console.error("SIWXUtil:cancelSignMessage",r)}},async getSessions(){const t=j.state.siwx,e=H.getPlainAddress(C.getActiveCaipAddress()),r=C.getActiveCaipNetwork();return t&&e&&r?t.getSessions(r.caipNetworkId,e):[]},async isSIWXCloseDisabled(){var e;const t=this.getSIWX();if(t){const r=G.state.view==="ApproveTransaction",i=G.state.view==="SIWXSignMessage";if(r||i)return((e=t.getRequired)==null?void 0:e.call(t))&&(await this.getSessions()).length===0}return!1},async universalProviderAuthenticate({universalProvider:t,chains:e,methods:r}){var a,c,l;const i=Ui.getSIWX(),s=new Set(e.map(u=>u.split(":")[0]));if(!i||s.size!==1||!s.has("eip155"))return!1;const n=await i.createMessage({chainId:((a=C.getActiveCaipNetwork())==null?void 0:a.caipNetworkId)||"",accountAddress:""}),o=await t.authenticate({nonce:n.nonce,domain:n.domain,uri:n.uri,exp:n.expirationTime,iat:n.issuedAt,nbf:n.notBefore,requestId:n.requestId,version:n.version,resources:n.resources,statement:n.statement,chainId:n.chainId,methods:r,chains:[n.chainId,...e.filter(u=>u!==n.chainId)]});if(Me.showLoading("Authenticating...",{autoClose:!1}),ne.setConnectedWalletInfo({...o.session.peer.metadata,name:o.session.peer.metadata.name,icon:(c=o.session.peer.metadata.icons)==null?void 0:c[0],type:"WALLET_CONNECT"},Array.from(s)[0]),(l=o==null?void 0:o.auths)==null?void 0:l.length){const u=o.auths.map(h=>{const d=t.client.formatAuthMessage({request:h.p,iss:h.p.iss});return{data:{...h.p,accountAddress:h.p.iss.split(":").slice(-1).join(""),chainId:h.p.iss.split(":").slice(2,4).join(":"),uri:h.p.aud,version:h.p.version||n.version,expirationTime:h.p.exp,issuedAt:h.p.iat,notBefore:h.p.nbf},message:d,signature:h.s.s,cacao:h}});try{await i.setSessions(u),we.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:Ui.getSIWXEventProperties()})}catch(h){throw console.error("SIWX:universalProviderAuth - failed to set sessions",h),we.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:Ui.getSIWXEventProperties()}),await t.disconnect().catch(console.error),h}finally{Me.hide()}}return!0},getSIWXEventProperties(){var e,r;const t=C.state.activeChain;return{network:((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)||"",isSmartAccount:((r=ne.state.preferredAccountTypes)==null?void 0:r[t])===$i.ACCOUNT_TYPES.SMART_ACCOUNT}},async clearSessions(){const t=this.getSIWX();t&&await t.setSessions([])}},qe=De({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),mC={state:qe,subscribe(t){return Et(qe,()=>t(qe))},setLastNetworkInView(t){qe.lastNetworkInView=t},async fetchTransactions(t,e){var r,i;if(!t)throw new Error("Transactions can't be fetched without an accountAddress");qe.loading=!0;try{const s=await he.fetchTransactions({account:t,cursor:qe.next,onramp:e,cache:e==="coinbase"?"no-cache":void 0,chainId:(r=C.state.activeCaipNetwork)==null?void 0:r.caipNetworkId}),n=this.filterSpamTransactions(s.data),o=this.filterByConnectedChain(n),a=[...qe.transactions,...o];qe.loading=!1,e==="coinbase"?qe.coinbaseTransactions=this.groupTransactionsByYearAndMonth(qe.coinbaseTransactions,s.data):(qe.transactions=a,qe.transactionsByYear=this.groupTransactionsByYearAndMonth(qe.transactionsByYear,o)),qe.empty=a.length===0,qe.next=s.next?s.next:void 0}catch{const s=C.state.activeChain;we.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:j.state.projectId,cursor:qe.next,isSmartAccount:((i=ne.state.preferredAccountTypes)==null?void 0:i[s])===$i.ACCOUNT_TYPES.SMART_ACCOUNT}}),Me.showError("Failed to fetch transactions"),qe.loading=!1,qe.empty=!0,qe.next=void 0}},groupTransactionsByYearAndMonth(t={},e=[]){const r=t;return e.forEach(i=>{const s=new Date(i.metadata.minedAt).getFullYear(),n=new Date(i.metadata.minedAt).getMonth(),o=r[s]??{},a=(o[n]??[]).filter(c=>c.id!==i.id);r[s]={...o,[n]:[...a,i].sort((c,l)=>new Date(l.metadata.minedAt).getTime()-new Date(c.metadata.minedAt).getTime())}}),r},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(r=>{var i;return((i=r.nft_info)==null?void 0:i.flags.is_spam)===!0}))},filterByConnectedChain(t){var r;const e=(r=C.state.activeCaipNetwork)==null?void 0:r.caipNetworkId;return t.filter(i=>i.metadata.chain===e)},clearCursor(){qe.next=void 0},resetTransactions(){qe.transactions=[],qe.transactionsByYear={},qe.lastNetworkInView=void 0,qe.loading=!1,qe.empty=!1,qe.next=void 0}},He=De({wcError:!1,buffering:!1,status:"disconnected"});let on;const ie={state:He,subscribeKey(t,e){return kt(He,t,e)},_getClient(){return He._client},setClient(t){He._client=Ts(t)},async connectWalletConnect(){var t,e,r,i;if(H.isTelegram()||H.isSafari()&&H.isIos()){if(on){await on,on=void 0;return}if(!H.isPairingExpired(He==null?void 0:He.wcPairingExpiry)){const s=He.wcUri;He.wcUri=s;return}on=(e=(t=this._getClient())==null?void 0:t.connectWalletConnect)==null?void 0:e.call(t).catch(()=>{}),this.state.status="connecting",await on,on=void 0,He.wcPairingExpiry=void 0,this.state.status="connected"}else await((i=(r=this._getClient())==null?void 0:r.connectWalletConnect)==null?void 0:i.call(r))},async connectExternal(t,e,r=!0){var i,s;await((s=(i=this._getClient())==null?void 0:i.connectExternal)==null?void 0:s.call(i,t)),r&&C.setActiveNamespace(e)},async reconnectExternal(t){var r,i;await((i=(r=this._getClient())==null?void 0:r.reconnectExternal)==null?void 0:i.call(r,t));const e=t.chain||C.state.activeChain;e&&J.setConnectorId(t.id,e)},async setPreferredAccountType(t,e){var i;Ee.setLoading(!0,C.state.activeChain);const r=J.getAuthConnector();r&&(ne.setPreferredAccountType(t,e),await r.provider.setPreferredAccount(t),te.setPreferredAccountTypes(ne.state.preferredAccountTypes??{[e]:t}),await this.reconnectExternal(r),Ee.setLoading(!1,C.state.activeChain),we.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:t,network:((i=C.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)||""}}))},async signMessage(t){var e;return(e=this._getClient())==null?void 0:e.signMessage(t)},parseUnits(t,e){var r;return(r=this._getClient())==null?void 0:r.parseUnits(t,e)},formatUnits(t,e){var r;return(r=this._getClient())==null?void 0:r.formatUnits(t,e)},async sendTransaction(t){var e;return(e=this._getClient())==null?void 0:e.sendTransaction(t)},async getCapabilities(t){var e;return(e=this._getClient())==null?void 0:e.getCapabilities(t)},async grantPermissions(t){var e;return(e=this._getClient())==null?void 0:e.grantPermissions(t)},async walletGetAssets(t){var e;return((e=this._getClient())==null?void 0:e.walletGetAssets(t))??{}},async estimateGas(t){var e;return(e=this._getClient())==null?void 0:e.estimateGas(t)},async writeContract(t){var e;return(e=this._getClient())==null?void 0:e.writeContract(t)},async getEnsAddress(t){var e;return(e=this._getClient())==null?void 0:e.getEnsAddress(t)},async getEnsAvatar(t){var e;return(e=this._getClient())==null?void 0:e.getEnsAvatar(t)},checkInstalled(t){var e,r;return((r=(e=this._getClient())==null?void 0:e.checkInstalled)==null?void 0:r.call(e,t))||!1},resetWcConnection(){He.wcUri=void 0,He.wcPairingExpiry=void 0,He.wcLinking=void 0,He.recentWallet=void 0,He.status="disconnected",mC.resetTransactions(),te.deleteWalletConnectDeepLink()},resetUri(){He.wcUri=void 0,He.wcPairingExpiry=void 0},finalizeWcConnection(){var r,i;const{wcLinking:t,recentWallet:e}=ie.state;t&&te.setWalletConnectDeepLink(t),e&&te.setAppKitRecent(e),we.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode",name:((i=(r=G.state.data)==null?void 0:r.wallet)==null?void 0:i.name)||"Unknown"}})},setWcBasic(t){He.wcBasic=t},setUri(t){He.wcUri=t,He.wcPairingExpiry=H.getPairingExpiry()},setWcLinking(t){He.wcLinking=t},setWcError(t){He.wcError=t,He.buffering=!1},setRecentWallet(t){He.recentWallet=t},setBuffering(t){He.buffering=t},setStatus(t){He.status=t},async disconnect(t){try{Ee.setLoading(!0,t),await Ui.clearSessions(),await C.disconnect(t),Ee.setLoading(!1,t),J.setFilterByNamespace(void 0)}catch{throw new Error("Failed to disconnect")}}},an=De({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),pi={state:an,subscribe(t){return Et(an,()=>t(an))},subscribeOpen(t){return kt(an,"open",t)},set(t){Object.assign(an,{...an,...t})}};function Ka(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function Dn(t){return Ka(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}const ww="2.27.0";let wo={getDocsUrl:({docsBaseUrl:t,docsPath:e="",docsSlug:r})=>e?`${t??"https://viem.sh"}${e}${r?`#${r}`:""}`:void 0,version:`viem@${ww}`};class _e extends Error{constructor(e,r={}){var a,c;const i=r.cause instanceof _e?r.cause.details:(a=r.cause)!=null&&a.message?r.cause.message:r.details,s=r.cause instanceof _e&&r.cause.docsPath||r.docsPath,n=(c=wo.getDocsUrl)==null?void 0:c.call(wo,{...r,docsPath:s}),o=[e||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...n?[`Docs: ${n}`]:[],...i?[`Details: ${i}`]:[],...wo.version?[`Version: ${wo.version}`]:[]].join(`
`);super(o,r.cause?{cause:r.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=i,this.docsPath=s,this.metaMessages=r.metaMessages,this.name=r.name??this.name,this.shortMessage=e,this.version=ww}walk(e){return mw(this,e)}}function mw(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t&&t.cause!==void 0?mw(t.cause,e):e?null:t}class vC extends _e{constructor({offset:e,position:r,size:i}){super(`Slice ${r==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${i}).`,{name:"SliceOffsetOutOfBoundsError"})}}class vw extends _e{constructor({size:e,targetSize:r,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${e}) exceeds padding size (${r}).`,{name:"SizeExceedsPaddingSizeError"})}}function to(t,{dir:e,size:r=32}={}){return typeof t=="string"?bC(t,{dir:e,size:r}):yC(t,{dir:e,size:r})}function bC(t,{dir:e,size:r=32}={}){if(r===null)return t;const i=t.replace("0x","");if(i.length>r*2)throw new vw({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i[e==="right"?"padEnd":"padStart"](r*2,"0")}`}function yC(t,{dir:e,size:r=32}={}){if(r===null)return t;if(t.length>r)throw new vw({size:t.length,targetSize:r,type:"bytes"});const i=new Uint8Array(r);for(let s=0;s<r;s++){const n=e==="right";i[n?s:r-s-1]=t[n?s:t.length-s-1]}return i}class CC extends _e{constructor({max:e,min:r,signed:i,size:s,value:n}){super(`Number "${n}" is not in safe ${s?`${s*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${e?`(${r} to ${e})`:`(above ${r})`}`,{name:"IntegerOutOfRangeError"})}}class EC extends _e{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed ${r} bytes. Given size: ${e} bytes.`,{name:"SizeOverflowError"})}}function ml(t,{dir:e="left"}={}){let r=typeof t=="string"?t.replace("0x",""):t,i=0;for(let s=0;s<r.length-1&&r[e==="left"?s:r.length-s-1].toString()==="0";s++)i++;return r=e==="left"?r.slice(i):r.slice(0,r.length-i),typeof t=="string"?(r.length===1&&e==="right"&&(r=`${r}0`),`0x${r.length%2===1?`0${r}`:r}`):r}function ro(t,{size:e}){if(Dn(t)>e)throw new EC({givenSize:Dn(t),maxSize:e})}function mn(t,e={}){const{signed:r}=e;e.size&&ro(t,{size:e.size});const i=BigInt(t);if(!r)return i;const s=(t.length-2)/2,n=(1n<<BigInt(s)*8n-1n)-1n;return i<=n?i:i-BigInt(`0x${"f".padStart(s*2,"f")}`)-1n}function vl(t,e={}){return Number(mn(t,e))}const xC=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function pe(t,e={}){return typeof t=="number"||typeof t=="bigint"?bw(t,e):typeof t=="string"?yw(t,e):typeof t=="boolean"?IC(t,e):Hi(t,e)}function IC(t,e={}){const r=`0x${Number(t)}`;return typeof e.size=="number"?(ro(r,{size:e.size}),to(r,{size:e.size})):r}function Hi(t,e={}){let r="";for(let s=0;s<t.length;s++)r+=xC[t[s]];const i=`0x${r}`;return typeof e.size=="number"?(ro(i,{size:e.size}),to(i,{dir:"right",size:e.size})):i}function bw(t,e={}){const{signed:r,size:i}=e,s=BigInt(t);let n;i?r?n=(1n<<BigInt(i)*8n-1n)-1n:n=2n**(BigInt(i)*8n)-1n:typeof t=="number"&&(n=BigInt(Number.MAX_SAFE_INTEGER));const o=typeof n=="bigint"&&r?-n-1n:0;if(n&&s>n||s<o){const c=typeof t=="bigint"?"n":"";throw new CC({max:n?`${n}${c}`:void 0,min:`${o}${c}`,signed:r,size:i,value:`${t}${c}`})}const a=`0x${(r&&s<0?(1n<<BigInt(i*8))+BigInt(s):s).toString(16)}`;return i?to(a,{size:i}):a}const AC=new TextEncoder;function yw(t,e={}){const r=AC.encode(t);return Hi(r,e)}const SC=new TextEncoder;function Cw(t,e={}){return typeof t=="number"||typeof t=="bigint"?$C(t,e):typeof t=="boolean"?_C(t,e):Ka(t)?Rs(t,e):Ew(t,e)}function _C(t,e={}){const r=new Uint8Array(1);return r[0]=Number(t),typeof e.size=="number"?(ro(r,{size:e.size}),to(r,{size:e.size})):r}const Yr={zero:48,nine:57,A:65,F:70,a:97,f:102};function s1(t){if(t>=Yr.zero&&t<=Yr.nine)return t-Yr.zero;if(t>=Yr.A&&t<=Yr.F)return t-(Yr.A-10);if(t>=Yr.a&&t<=Yr.f)return t-(Yr.a-10)}function Rs(t,e={}){let r=t;e.size&&(ro(r,{size:e.size}),r=to(r,{dir:"right",size:e.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);const s=i.length/2,n=new Uint8Array(s);for(let o=0,a=0;o<s;o++){const c=s1(i.charCodeAt(a++)),l=s1(i.charCodeAt(a++));if(c===void 0||l===void 0)throw new _e(`Invalid byte sequence ("${i[a-2]}${i[a-1]}" in "${i}").`);n[o]=c*16+l}return n}function $C(t,e){const r=bw(t,e);return Rs(r)}function Ew(t,e={}){const r=SC.encode(t);return typeof e.size=="number"?(ro(r,{size:e.size}),to(r,{dir:"right",size:e.size})):r}function bl(t){if(!Number.isSafeInteger(t)||t<0)throw new Error("positive integer expected, got "+t)}function kC(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Za(t,...e){if(!kC(t))throw new Error("Uint8Array expected");if(e.length>0&&!e.includes(t.length))throw new Error("Uint8Array expected of length "+e+", got length="+t.length)}function NC(t){if(typeof t!="function"||typeof t.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");bl(t.outputLen),bl(t.blockLen)}function jn(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function xw(t,e){Za(t);const r=e.outputLen;if(t.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}const gc=BigInt(2**32-1),n1=BigInt(32);function PC(t,e=!1){return e?{h:Number(t&gc),l:Number(t>>n1&gc)}:{h:Number(t>>n1&gc)|0,l:Number(t&gc)|0}}function OC(t,e=!1){let r=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let s=0;s<t.length;s++){const{h:n,l:o}=PC(t[s],e);[r[s],i[s]]=[n,o]}return[r,i]}const TC=(t,e,r)=>t<<r|e>>>32-r,RC=(t,e,r)=>e<<r|t>>>32-r,LC=(t,e,r)=>e<<r-32|t>>>64-r,UC=(t,e,r)=>t<<r-32|e>>>64-r,cn=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function BC(t){return new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4))}function Nu(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function Tr(t,e){return t<<32-e|t>>>e}const o1=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function MC(t){return t<<24&4278190080|t<<8&16711680|t>>>8&65280|t>>>24&255}function a1(t){for(let e=0;e<t.length;e++)t[e]=MC(t[e])}function DC(t){if(typeof t!="string")throw new Error("utf8ToBytes expected string, got "+typeof t);return new Uint8Array(new TextEncoder().encode(t))}function Wl(t){return typeof t=="string"&&(t=DC(t)),Za(t),t}function jC(...t){let e=0;for(let i=0;i<t.length;i++){const s=t[i];Za(s),e+=s.length}const r=new Uint8Array(e);for(let i=0,s=0;i<t.length;i++){const n=t[i];r.set(n,s),s+=n.length}return r}class Dd{clone(){return this._cloneInto()}}function Iw(t){const e=i=>t().update(Wl(i)).digest(),r=t();return e.outputLen=r.outputLen,e.blockLen=r.blockLen,e.create=()=>t(),e}function zC(t=32){if(cn&&typeof cn.getRandomValues=="function")return cn.getRandomValues(new Uint8Array(t));if(cn&&typeof cn.randomBytes=="function")return cn.randomBytes(t);throw new Error("crypto.getRandomValues must be defined")}const Aw=[],Sw=[],_w=[],qC=BigInt(0),mo=BigInt(1),HC=BigInt(2),WC=BigInt(7),VC=BigInt(256),FC=BigInt(113);for(let t=0,e=mo,r=1,i=0;t<24;t++){[r,i]=[i,(2*r+3*i)%5],Aw.push(2*(5*i+r)),Sw.push((t+1)*(t+2)/2%64);let s=qC;for(let n=0;n<7;n++)e=(e<<mo^(e>>WC)*FC)%VC,e&HC&&(s^=mo<<(mo<<BigInt(n))-mo);_w.push(s)}const[KC,ZC]=OC(_w,!0),c1=(t,e,r)=>r>32?LC(t,e,r):TC(t,e,r),l1=(t,e,r)=>r>32?UC(t,e,r):RC(t,e,r);function GC(t,e=24){const r=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let o=0;o<10;o++)r[o]=t[o]^t[o+10]^t[o+20]^t[o+30]^t[o+40];for(let o=0;o<10;o+=2){const a=(o+8)%10,c=(o+2)%10,l=r[c],u=r[c+1],h=c1(l,u,1)^r[a],d=l1(l,u,1)^r[a+1];for(let p=0;p<50;p+=10)t[o+p]^=h,t[o+p+1]^=d}let s=t[2],n=t[3];for(let o=0;o<24;o++){const a=Sw[o],c=c1(s,n,a),l=l1(s,n,a),u=Aw[o];s=t[u],n=t[u+1],t[u]=c,t[u+1]=l}for(let o=0;o<50;o+=10){for(let a=0;a<10;a++)r[a]=t[o+a];for(let a=0;a<10;a++)t[o+a]^=~r[(a+2)%10]&r[(a+4)%10]}t[0]^=KC[i],t[1]^=ZC[i]}r.fill(0)}class jd extends Dd{constructor(e,r,i,s=!1,n=24){if(super(),this.blockLen=e,this.suffix=r,this.outputLen=i,this.enableXOF=s,this.rounds=n,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,bl(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=BC(this.state)}keccak(){o1||a1(this.state32),GC(this.state32,this.rounds),o1||a1(this.state32),this.posOut=0,this.pos=0}update(e){jn(this);const{blockLen:r,state:i}=this;e=Wl(e);const s=e.length;for(let n=0;n<s;){const o=Math.min(r-this.pos,s-n);for(let a=0;a<o;a++)i[this.pos++]^=e[n++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:r,pos:i,blockLen:s}=this;e[i]^=r,(r&128)!==0&&i===s-1&&this.keccak(),e[s-1]^=128,this.keccak()}writeInto(e){jn(this,!1),Za(e),this.finish();const r=this.state,{blockLen:i}=this;for(let s=0,n=e.length;s<n;){this.posOut>=i&&this.keccak();const o=Math.min(i-this.posOut,n-s);e.set(r.subarray(this.posOut,this.posOut+o),s),this.posOut+=o,s+=o}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return bl(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(xw(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:r,suffix:i,outputLen:s,rounds:n,enableXOF:o}=this;return e||(e=new jd(r,i,s,o,n)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=n,e.suffix=i,e.outputLen=s,e.enableXOF=o,e.destroyed=this.destroyed,e}}const YC=(t,e,r)=>Iw(()=>new jd(e,t,r)),$w=YC(1,136,256/8);function JC(t,e){const r=e,i=$w(Ka(t,{strict:!1})?Cw(t):t);return r==="bytes"?i:pe(i)}class Ls extends _e{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."],name:"InvalidAddressError"})}}class Vl extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const r=super.get(e);return super.has(e)&&r!==void 0&&(this.delete(e),super.set(e,r)),r}set(e,r){if(super.set(e,r),this.maxSize&&this.size>this.maxSize){const i=this.keys().next().value;i&&this.delete(i)}return this}}const Pu=new Vl(8192);function XC(t,e){if(Pu.has(`${t}.${e}`))return Pu.get(`${t}.${e}`);const r=t.substring(2).toLowerCase(),i=JC(Ew(r),"bytes"),s=r.split("");for(let o=0;o<40;o+=2)i[o>>1]>>4>=8&&s[o]&&(s[o]=s[o].toUpperCase()),(i[o>>1]&15)>=8&&s[o+1]&&(s[o+1]=s[o+1].toUpperCase());const n=`0x${s.join("")}`;return Pu.set(`${t}.${e}`,n),n}const QC=/^0x[a-fA-F0-9]{40}$/,Ou=new Vl(8192);function Us(t,e){const{strict:r=!0}=e??{},i=`${t}.${r}`;if(Ou.has(i))return Ou.get(i);const s=QC.test(t)?t.toLowerCase()===t?!0:r?XC(t)===t:!0:!1;return Ou.set(i,s),s}function Ga(t){return`0x${t.reduce((e,r)=>e+r.replace("0x",""),"")}`}function eE(t,e,r,{strict:i}={}){return Ka(t,{strict:!1})?rE(t,e,r,{strict:i}):tE(t,e,r,{strict:i})}function kw(t,e,r){if(Dn(t)!==r-e)throw new vC({offset:r,position:"end",size:Dn(t)})}function tE(t,e,r,{strict:i}={}){const s=t.slice(e,r);return i&&kw(s,e,r),s}function rE(t,e,r,{strict:i}={}){const s=`0x${t.replace("0x","").slice(e*2,r*2)}`;return i&&kw(s,e,r),s}class u1 extends _e{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`,{name:"NegativeOffsetError"})}}class iE extends _e{constructor({length:e,position:r}){super(`Position \`${r}\` is out of bounds (\`0 < position < ${e}\`).`,{name:"PositionOutOfBoundsError"})}}class sE extends _e{constructor({count:e,limit:r}){super(`Recursive read limit of \`${r}\` exceeded (recursive read count: \`${e}\`).`,{name:"RecursiveReadLimitExceededError"})}}const nE={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new sE({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(t){if(t<0||t>this.bytes.length-1)throw new iE({length:this.bytes.length,position:t})},decrementPosition(t){if(t<0)throw new u1({offset:t});const e=this.position-t;this.assertPosition(e),this.position=e},getReadCount(t){return this.positionReadCount.get(t||this.position)||0},incrementPosition(t){if(t<0)throw new u1({offset:t});const e=this.position+t;this.assertPosition(e),this.position=e},inspectByte(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(t,e){const r=e??this.position;return this.assertPosition(r+t-1),this.bytes.subarray(r,r+t)},inspectUint8(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(t){const e=t??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(t){const e=t??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(t){const e=t??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushBytes(t){this.assertPosition(this.position+t.length-1),this.bytes.set(t,this.position),this.position+=t.length},pushUint8(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushUint16(t){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,t),this.position+=2},pushUint24(t){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,t>>8),this.dataView.setUint8(this.position+2,t&255),this.position+=3},pushUint32(t){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,t),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const t=this.inspectByte();return this.position++,t},readBytes(t,e){this.assertReadLimit(),this._touch();const r=this.inspectBytes(t);return this.position+=e??t,r},readUint8(){this.assertReadLimit(),this._touch();const t=this.inspectUint8();return this.position+=1,t},readUint16(){this.assertReadLimit(),this._touch();const t=this.inspectUint16();return this.position+=2,t},readUint24(){this.assertReadLimit(),this._touch();const t=this.inspectUint24();return this.position+=3,t},readUint32(){this.assertReadLimit(),this._touch();const t=this.inspectUint32();return this.position+=4,t},get remaining(){return this.bytes.length-this.position},setPosition(t){const e=this.position;return this.assertPosition(t),this.position=t,()=>this.position=e},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const t=this.getReadCount();this.positionReadCount.set(this.position,t+1),t>0&&this.recursiveReadCount++}};function Nw(t,{recursiveReadLimit:e=8192}={}){const r=Object.create(nE);return r.bytes=t,r.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=e,r}const xs=(t,e,r)=>JSON.stringify(t,(i,s)=>typeof s=="bigint"?s.toString():s,r),oE={ether:-9,wei:9};function Pw(t,e){let r=t.toString();const i=r.startsWith("-");i&&(r=r.slice(1)),r=r.padStart(e,"0");let[s,n]=[r.slice(0,r.length-e),r.slice(r.length-e)];return n=n.replace(/(0+)$/,""),`${i?"-":""}${s||"0"}${n?`.${n}`:""}`}function id(t,e="wei"){return Pw(t,oE[e])}function aE(t){const e=Object.entries(t).map(([i,s])=>s===void 0||s===!1?null:[i,s]).filter(Boolean),r=e.reduce((i,[s])=>Math.max(i,s.length),0);return e.map(([i,s])=>`  ${`${i}:`.padEnd(r+1)}  ${s}`).join(`
`)}class cE extends _e{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`,{name:"InvalidLegacyVError"})}}class lE extends _e{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",aE(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- an EIP-7702 Transaction with `authorizationList`, or","- a Legacy Transaction with `gasPrice`"],name:"InvalidSerializableTransactionError"})}}class uE extends _e{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`,{name:"InvalidStorageKeySizeError"})}}const zd=t=>t;class Xo extends _e{constructor({body:e,cause:r,details:i,headers:s,status:n,url:o}){super("HTTP request failed.",{cause:r,details:i,metaMessages:[n&&`Status: ${n}`,`URL: ${zd(o)}`,e&&`Request body: ${xs(e)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=s,this.status=n,this.url=o}}class Ow extends _e{constructor({body:e,error:r,url:i}){super("RPC Request failed.",{cause:r,details:r.message,metaMessages:[`URL: ${zd(i)}`,`Request body: ${xs(e)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=r.code,this.data=r.data}}class h1 extends _e{constructor({body:e,url:r}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${zd(r)}`,`Request body: ${xs(e)}`],name:"TimeoutError"})}}const hE=-1;class jt extends _e{constructor(e,{code:r,docsPath:i,metaMessages:s,name:n,shortMessage:o}){super(o,{cause:e,docsPath:i,metaMessages:s||(e==null?void 0:e.metaMessages),name:n||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=n||e.name,this.code=e instanceof Ow?e.code:r??hE}}class er extends jt{constructor(e,r){super(e,r),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=r.data}}class ha extends jt{constructor(e){super(e,{code:ha.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(ha,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class da extends jt{constructor(e){super(e,{code:da.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(da,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class pa extends jt{constructor(e,{method:r}={}){super(e,{code:pa.code,name:"MethodNotFoundRpcError",shortMessage:`The method${r?` "${r}"`:""} does not exist / is not available.`})}}Object.defineProperty(pa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class ga extends jt{constructor(e){super(e,{code:ga.code,name:"InvalidParamsRpcError",shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(ga,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class zn extends jt{constructor(e){super(e,{code:zn.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(zn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class fa extends jt{constructor(e){super(e,{code:fa.code,name:"InvalidInputRpcError",shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(fa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class wa extends jt{constructor(e){super(e,{code:wa.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(wa,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class ma extends jt{constructor(e){super(e,{code:ma.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(ma,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class qn extends jt{constructor(e){super(e,{code:qn.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(qn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class bs extends jt{constructor(e,{method:r}={}){super(e,{code:bs.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${r?` "${r}"`:""} is not supported.`})}}Object.defineProperty(bs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Hn extends jt{constructor(e){super(e,{code:Hn.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(Hn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class va extends jt{constructor(e){super(e,{code:va.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(va,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Is extends er{constructor(e){super(e,{code:Is.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(Is,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class ba extends er{constructor(e){super(e,{code:ba.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(ba,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class ya extends er{constructor(e,{method:r}={}){super(e,{code:ya.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${r?` " ${r}"`:""}.`})}}Object.defineProperty(ya,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Ca extends er{constructor(e){super(e,{code:Ca.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(Ca,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Ea extends er{constructor(e){super(e,{code:Ea.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(Ea,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class xa extends er{constructor(e){super(e,{code:xa.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(xa,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class Ia extends er{constructor(e){super(e,{code:Ia.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(Ia,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class Aa extends er{constructor(e){super(e,{code:Aa.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(Aa,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class Sa extends er{constructor(e){super(e,{code:Sa.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(Sa,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class _a extends er{constructor(e){super(e,{code:_a.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(_a,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class $a extends er{constructor(e){super(e,{code:$a.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty($a,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class ka extends er{constructor(e){super(e,{code:ka.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(ka,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class Na extends er{constructor(e){super(e,{code:Na.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(Na,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class dE extends jt{constructor(e){super(e,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}function io(t,e="hex"){const r=Tw(t),i=Nw(new Uint8Array(r.length));return r.encode(i),e==="hex"?Hi(i.bytes):i.bytes}function Tw(t){return Array.isArray(t)?pE(t.map(e=>Tw(e))):gE(t)}function pE(t){const e=t.reduce((i,s)=>i+s.length,0),r=Rw(e);return{length:e<=55?1+e:1+r+e,encode(i){e<=55?i.pushByte(192+e):(i.pushByte(247+r),r===1?i.pushUint8(e):r===2?i.pushUint16(e):r===3?i.pushUint24(e):i.pushUint32(e));for(const{encode:s}of t)s(i)}}}function gE(t){const e=typeof t=="string"?Rs(t):t,r=Rw(e.length);return{length:e.length===1&&e[0]<128?1:e.length<=55?1+e.length:1+r+e.length,encode(i){e.length===1&&e[0]<128?i.pushBytes(e):e.length<=55?(i.pushByte(128+e.length),i.pushBytes(e)):(i.pushByte(183+r),r===1?i.pushUint8(e.length):r===2?i.pushUint16(e.length):r===3?i.pushUint24(e.length):i.pushUint32(e.length),i.pushBytes(e))}}}function Rw(t){if(t<2**8)return 1;if(t<2**16)return 2;if(t<2**24)return 3;if(t<2**32)return 4;throw new _e("Length is too large.")}class sd extends _e{constructor({cause:e,message:r}={}){var s;const i=(s=r==null?void 0:r.replace("execution reverted: ",""))==null?void 0:s.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:e,name:"ExecutionRevertedError"})}}Object.defineProperty(sd,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(sd,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class Fl extends _e{constructor({cause:e,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${id(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e,name:"FeeCapTooHighError"})}}Object.defineProperty(Fl,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class Lw extends _e{constructor({cause:e,maxPriorityFeePerGas:r,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${id(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${id(i)} gwei`:""}).`].join(`
`),{cause:e,name:"TipAboveFeeCapError"})}}Object.defineProperty(Lw,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});function qd(t,e){return({exclude:r,format:i})=>({exclude:r,format:s=>{const n=e(s);if(r)for(const o of r)delete n[o];return{...n,...i(s)}},type:t})}const Hd=2n**256n-1n,Uw={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844","0x4":"eip7702"};function Wd(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?vl(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerBlobGas:t.maxFeePerBlobGas?BigInt(t.maxFeePerBlobGas):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?vl(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?Uw[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return t.authorizationList&&(e.authorizationList=wE(t.authorizationList)),e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e.type==="eip1559"&&delete e.maxFeePerBlobGas,e}const fE=qd("transaction",Wd);function wE(t){return t.map(e=>({address:e.address,chainId:Number(e.chainId),nonce:Number(e.nonce),r:e.r,s:e.s,yParity:Number(e.yParity)}))}function mE(t){const e=(t.transactions??[]).map(r=>typeof r=="string"?r:Wd(r));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,blobGasUsed:t.blobGasUsed?BigInt(t.blobGasUsed):void 0,difficulty:t.difficulty?BigInt(t.difficulty):void 0,excessBlobGas:t.excessBlobGas?BigInt(t.excessBlobGas):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}const vE=qd("block",mE);function Bw(t){const{kzg:e}=t,r=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),i=typeof t.blobs[0]=="string"?t.blobs.map(n=>Rs(n)):t.blobs,s=[];for(const n of i)s.push(Uint8Array.from(e.blobToKzgCommitment(n)));return r==="bytes"?s:s.map(n=>Hi(n))}function Mw(t){const{kzg:e}=t,r=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),i=typeof t.blobs[0]=="string"?t.blobs.map(o=>Rs(o)):t.blobs,s=typeof t.commitments[0]=="string"?t.commitments.map(o=>Rs(o)):t.commitments,n=[];for(let o=0;o<i.length;o++){const a=i[o],c=s[o];n.push(Uint8Array.from(e.computeBlobKzgProof(a,c)))}return r==="bytes"?n:n.map(o=>Hi(o))}function bE(t,e,r,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,r,i);const s=BigInt(32),n=BigInt(4294967295),o=Number(r>>s&n),a=Number(r&n),c=i?4:0,l=i?0:4;t.setUint32(e+c,o,i),t.setUint32(e+l,a,i)}function yE(t,e,r){return t&e^~t&r}function CE(t,e,r){return t&e^t&r^e&r}class EE extends Dd{constructor(e,r,i,s){super(),this.blockLen=e,this.outputLen=r,this.padOffset=i,this.isLE=s,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Nu(this.buffer)}update(e){jn(this);const{view:r,buffer:i,blockLen:s}=this;e=Wl(e);const n=e.length;for(let o=0;o<n;){const a=Math.min(s-this.pos,n-o);if(a===s){const c=Nu(e);for(;s<=n-o;o+=s)this.process(c,o);continue}i.set(e.subarray(o,o+a),this.pos),this.pos+=a,o+=a,this.pos===s&&(this.process(r,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){jn(this),xw(e,this),this.finished=!0;const{buffer:r,view:i,blockLen:s,isLE:n}=this;let{pos:o}=this;r[o++]=128,this.buffer.subarray(o).fill(0),this.padOffset>s-o&&(this.process(i,0),o=0);for(let h=o;h<s;h++)r[h]=0;bE(i,s-8,BigInt(this.length*8),n),this.process(i,0);const a=Nu(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let h=0;h<l;h++)a.setUint32(4*h,u[h],n)}digest(){const{buffer:e,outputLen:r}=this;this.digestInto(e);const i=e.slice(0,r);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:r,buffer:i,length:s,finished:n,destroyed:o,pos:a}=this;return e.length=s,e.pos=a,e.finished=n,e.destroyed=o,s%r&&e.buffer.set(i),e}}const xE=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ci=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),Ei=new Uint32Array(64);class IE extends EE{constructor(){super(64,32,8,!1),this.A=Ci[0]|0,this.B=Ci[1]|0,this.C=Ci[2]|0,this.D=Ci[3]|0,this.E=Ci[4]|0,this.F=Ci[5]|0,this.G=Ci[6]|0,this.H=Ci[7]|0}get(){const{A:e,B:r,C:i,D:s,E:n,F:o,G:a,H:c}=this;return[e,r,i,s,n,o,a,c]}set(e,r,i,s,n,o,a,c){this.A=e|0,this.B=r|0,this.C=i|0,this.D=s|0,this.E=n|0,this.F=o|0,this.G=a|0,this.H=c|0}process(e,r){for(let h=0;h<16;h++,r+=4)Ei[h]=e.getUint32(r,!1);for(let h=16;h<64;h++){const d=Ei[h-15],p=Ei[h-2],w=Tr(d,7)^Tr(d,18)^d>>>3,g=Tr(p,17)^Tr(p,19)^p>>>10;Ei[h]=g+Ei[h-7]+w+Ei[h-16]|0}let{A:i,B:s,C:n,D:o,E:a,F:c,G:l,H:u}=this;for(let h=0;h<64;h++){const d=Tr(a,6)^Tr(a,11)^Tr(a,25),p=u+d+yE(a,c,l)+xE[h]+Ei[h]|0,w=(Tr(i,2)^Tr(i,13)^Tr(i,22))+CE(i,s,n)|0;u=l,l=c,c=a,a=o+p|0,o=n,n=s,s=i,i=p+w|0}i=i+this.A|0,s=s+this.B|0,n=n+this.C|0,o=o+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(i,s,n,o,a,c,l,u)}roundClean(){Ei.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Dw=Iw(()=>new IE);function AE(t,e){const r=e,i=Dw(Ka(t,{strict:!1})?Cw(t):t);return r==="bytes"?i:pe(i)}function SE(t){const{commitment:e,version:r=1}=t,i=t.to??(typeof e=="string"?"hex":"bytes"),s=AE(e,"bytes");return s.set([r],0),i==="bytes"?s:Hi(s)}function _E(t){const{commitments:e,version:r}=t,i=t.to??(typeof e[0]=="string"?"hex":"bytes"),s=[];for(const n of e)s.push(SE({commitment:n,to:i,version:r}));return s}const d1=6,jw=32,Vd=4096,zw=jw*Vd,p1=zw*d1-1-1*Vd*d1,qw=1;class $E extends _e{constructor({maxSize:e,size:r}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${r} bytes`],name:"BlobSizeTooLargeError"})}}class Hw extends _e{constructor(){super("Blob data must not be empty.",{name:"EmptyBlobError"})}}class kE extends _e{constructor({hash:e,size:r}){super(`Versioned hash "${e}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${r}`],name:"InvalidVersionedHashSizeError"})}}class NE extends _e{constructor({hash:e,version:r}){super(`Versioned hash "${e}" version is invalid.`,{metaMessages:[`Expected: ${qw}`,`Received: ${r}`],name:"InvalidVersionedHashVersionError"})}}function PE(t){const e=t.to??(typeof t.data=="string"?"hex":"bytes"),r=typeof t.data=="string"?Rs(t.data):t.data,i=Dn(r);if(!i)throw new Hw;if(i>p1)throw new $E({maxSize:p1,size:i});const s=[];let n=!0,o=0;for(;n;){const a=Nw(new Uint8Array(zw));let c=0;for(;c<Vd;){const l=r.slice(o,o+(jw-1));if(a.pushByte(0),a.pushBytes(l),l.length<31){a.pushByte(128),n=!1;break}c++,o+=31}s.push(a)}return e==="bytes"?s.map(a=>a.bytes):s.map(a=>Hi(a.bytes))}function OE(t){const{data:e,kzg:r,to:i}=t,s=t.blobs??PE({data:e,to:i}),n=t.commitments??Bw({blobs:s,kzg:r,to:i}),o=t.proofs??Mw({blobs:s,commitments:n,kzg:r,to:i}),a=[];for(let c=0;c<s.length;c++)a.push({blob:s[c],commitment:n[c],proof:o[c]});return a}function TE(t){if(t.type)return t.type;if(typeof t.authorizationList<"u")return"eip7702";if(typeof t.blobs<"u"||typeof t.blobVersionedHashes<"u"||typeof t.maxFeePerBlobGas<"u"||typeof t.sidecars<"u")return"eip4844";if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new lE({transaction:t})}function RE(t,{args:e,eventName:r}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...r?{args:e,eventName:r}:{}}}class Kl extends _e{constructor({chainId:e}){super(typeof e=="number"?`Chain ID "${e}" is invalid.`:"Chain ID is invalid.",{name:"InvalidChainIdError"})}}function LE(){let t=()=>{},e=()=>{};return{promise:new Promise((r,i)=>{t=r,e=i}),resolve:t,reject:e}}const Tu=new Map;function UE({fn:t,id:e,shouldSplitBatch:r,wait:i=0,sort:s}){const n=async()=>{const u=c();o();const h=u.map(({args:d})=>d);h.length!==0&&t(h).then(d=>{s&&Array.isArray(d)&&d.sort(s);for(let p=0;p<u.length;p++){const{resolve:w}=u[p];w==null||w([d[p],d])}}).catch(d=>{for(let p=0;p<u.length;p++){const{reject:w}=u[p];w==null||w(d)}})},o=()=>Tu.delete(e),a=()=>c().map(({args:u})=>u),c=()=>Tu.get(e)||[],l=u=>Tu.set(e,[...c(),u]);return{flush:o,async schedule(u){const{promise:h,resolve:d,reject:p}=LE();return r!=null&&r([...a(),u])&&n(),c().length>0?(l({args:u,resolve:d,reject:p}),h):(l({args:u,resolve:d,reject:p}),setTimeout(n,i),h)}}}async function Ww(t){return new Promise(e=>setTimeout(e,t))}new Vl(128);const nd=256;let fc=nd,wc;function BE(t=11){if(!wc||fc+t>nd*2){wc="",fc=0;for(let e=0;e<nd;e++)wc+=(256+Math.random()*256|0).toString(16).substring(1)}return wc.substring(fc,fc+++t)}const mc=new Vl(8192);function ME(t,{enabled:e=!0,id:r}){if(!e||!r)return t();if(mc.get(r))return mc.get(r);const i=t().finally(()=>mc.delete(r));return mc.set(r,i),i}function DE(t,{delay:e=100,retryCount:r=2,shouldRetry:i=()=>!0}={}){return new Promise((s,n)=>{const o=async({count:a=0}={})=>{const c=async({error:l})=>{const u=typeof e=="function"?e({count:a,error:l}):e;u&&await Ww(u),o({count:a+1})};try{const l=await t();s(l)}catch(l){if(a<r&&await i({count:a,error:l}))return c({error:l});n(l)}};o()})}function jE(t,e={}){return async(r,i={})=>{var h;const{dedupe:s=!1,methods:n,retryDelay:o=150,retryCount:a=3,uid:c}={...e,...i},{method:l}=r;if((h=n==null?void 0:n.exclude)!=null&&h.includes(l))throw new bs(new Error("method not supported"),{method:l});if(n!=null&&n.include&&!n.include.includes(l))throw new bs(new Error("method not supported"),{method:l});const u=s?yw(`${c}.${xs(r)}`):void 0;return ME(()=>DE(async()=>{try{return await t(r)}catch(d){const p=d;switch(p.code){case ha.code:throw new ha(p);case da.code:throw new da(p);case pa.code:throw new pa(p,{method:r.method});case ga.code:throw new ga(p);case zn.code:throw new zn(p);case fa.code:throw new fa(p);case wa.code:throw new wa(p);case ma.code:throw new ma(p);case qn.code:throw new qn(p);case bs.code:throw new bs(p,{method:r.method});case Hn.code:throw new Hn(p);case va.code:throw new va(p);case Is.code:throw new Is(p);case ba.code:throw new ba(p);case ya.code:throw new ya(p);case Ca.code:throw new Ca(p);case Ea.code:throw new Ea(p);case xa.code:throw new xa(p);case Ia.code:throw new Ia(p);case Aa.code:throw new Aa(p);case Sa.code:throw new Sa(p);case _a.code:throw new _a(p);case $a.code:throw new $a(p);case ka.code:throw new ka(p);case Na.code:throw new Na(p);case 5e3:throw new Is(p);default:throw d instanceof _e?d:new dE(p)}}},{delay:({count:d,error:p})=>{var w;if(p&&p instanceof Xo){const g=(w=p==null?void 0:p.headers)==null?void 0:w.get("Retry-After");if(g!=null&&g.match(/\d/))return Number.parseInt(g)*1e3}return~~(1<<d)*o},retryCount:a,shouldRetry:({error:d})=>zE(d)}),{enabled:s,id:u})}}function zE(t){return"code"in t&&typeof t.code=="number"?t.code===-1||t.code===Hn.code||t.code===zn.code:t instanceof Xo&&t.status?t.status===403||t.status===408||t.status===413||t.status===429||t.status===500||t.status===502||t.status===503||t.status===504:!0}function Vw({key:t,methods:e,name:r,request:i,retryCount:s=3,retryDelay:n=150,timeout:o,type:a},c){const l=BE();return{config:{key:t,methods:e,name:r,request:i,retryCount:s,retryDelay:n,timeout:o,type:a},request:jE(i,{methods:e,retryCount:s,retryDelay:n,uid:l}),value:c}}function g1(t,e={}){const{key:r="fallback",name:i="Fallback",rank:s=!1,shouldThrow:n=qE,retryCount:o,retryDelay:a}=e;return({chain:c,pollingInterval:l=4e3,timeout:u,...h})=>{let d=t,p=()=>{};const w=Vw({key:r,name:i,async request({method:g,params:f}){let m;const v=async(b=0)=>{const y=d[b]({...h,chain:c,retryCount:0,timeout:u});try{const $=await y.request({method:g,params:f});return p({method:g,params:f,response:$,transport:y,status:"success"}),$}catch($){if(p({error:$,method:g,params:f,transport:y,status:"error"}),n($)||b===d.length-1||(m??(m=d.slice(b+1).some(_=>{const{include:P,exclude:k}=_({chain:c}).config.methods||{};return P?P.includes(g):k?!k.includes(g):!0})),!m))throw $;return v(b+1)}};return v()},retryCount:o,retryDelay:a,type:"fallback"},{onResponse:g=>p=g,transports:d.map(g=>g({chain:c,retryCount:0}))});if(s){const g=typeof s=="object"?s:{};HE({chain:c,interval:g.interval??l,onTransports:f=>d=f,ping:g.ping,sampleCount:g.sampleCount,timeout:g.timeout,transports:d,weights:g.weights})}return w}}function qE(t){return!!("code"in t&&typeof t.code=="number"&&(t.code===qn.code||t.code===Is.code||sd.nodeMessage.test(t.message)||t.code===5e3))}function HE({chain:t,interval:e=4e3,onTransports:r,ping:i,sampleCount:s=10,timeout:n=1e3,transports:o,weights:a={}}){const{stability:c=.7,latency:l=.3}=a,u=[],h=async()=>{const d=await Promise.all(o.map(async g=>{const f=g({chain:t,retryCount:0,timeout:n}),m=Date.now();let v,b;try{await(i?i({transport:f}):f.request({method:"net_listening"})),b=1}catch{b=0}finally{v=Date.now()}return{latency:v-m,success:b}}));u.push(d),u.length>s&&u.shift();const p=Math.max(...u.map(g=>Math.max(...g.map(({latency:f})=>f)))),w=o.map((g,f)=>{const m=u.map($=>$[f].latency),v=1-m.reduce(($,_)=>$+_,0)/m.length/p,b=u.map($=>$[f].success),y=b.reduce(($,_)=>$+_,0)/b.length;return y===0?[0,f]:[l*v+c*y,f]}).sort((g,f)=>f[0]-g[0]);r(w.map(([,g])=>o[g])),await Ww(e),h()};h()}class WE extends _e{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}function VE(t,{errorInstance:e=new Error("timed out"),timeout:r,signal:i}){return new Promise((s,n)=>{(async()=>{let o;try{const a=new AbortController;r>0&&(o=setTimeout(()=>{i?a.abort():n(e)},r)),s(await t({signal:(a==null?void 0:a.signal)||null}))}catch(a){(a==null?void 0:a.name)==="AbortError"&&n(e),n(a)}finally{clearTimeout(o)}})()})}function FE(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const f1=FE();function KE(t,e={}){return{async request(r){var h;const{body:i,onRequest:s=e.onRequest,onResponse:n=e.onResponse,timeout:o=e.timeout??1e4}=r,a={...e.fetchOptions??{},...r.fetchOptions??{}},{headers:c,method:l,signal:u}=a;try{const d=await VE(async({signal:w})=>{const g={...a,body:Array.isArray(i)?xs(i.map(v=>({jsonrpc:"2.0",id:v.id??f1.take(),...v}))):xs({jsonrpc:"2.0",id:i.id??f1.take(),...i}),headers:{"Content-Type":"application/json",...c},method:l||"POST",signal:u||(o>0?w:null)},f=new Request(t,g),m=await(s==null?void 0:s(f,g))??{...g,url:t};return await fetch(m.url??t,m)},{errorInstance:new h1({body:i,url:t}),timeout:o,signal:!0});n&&await n(d);let p;if((h=d.headers.get("Content-Type"))!=null&&h.startsWith("application/json"))p=await d.json();else{p=await d.text();try{p=JSON.parse(p||"{}")}catch(w){if(d.ok)throw w;p={error:p}}}if(!d.ok)throw new Xo({body:i,details:xs(p.error)||d.statusText,headers:d.headers,status:d.status,url:t});return p}catch(d){throw d instanceof Xo||d instanceof h1?d:new Xo({body:i,cause:d,url:t})}}}}function vc(t,e={}){const{batch:r,fetchOptions:i,key:s="http",methods:n,name:o="HTTP JSON-RPC",onFetchRequest:a,onFetchResponse:c,retryDelay:l,raw:u}=e;return({chain:h,retryCount:d,timeout:p})=>{const{batchSize:w=1e3,wait:g=0}=typeof r=="object"?r:{},f=e.retryCount??d,m=p??e.timeout??1e4,v=t||(h==null?void 0:h.rpcUrls.default.http[0]);if(!v)throw new WE;const b=KE(v,{fetchOptions:i,onRequest:a,onResponse:c,timeout:m});return Vw({key:s,methods:n,name:o,async request({method:y,params:$}){const _={method:y,params:$},{schedule:P}=UE({id:v,wait:g,shouldSplitBatch(L){return L.length>w},fn:L=>b.request({body:L}),sort:(L,M)=>L.id-M.id}),k=async L=>r?P(L):[await b.request({body:L})],[{error:S,result:U}]=await k(_);if(u)return{error:S,result:U};if(S)throw new Ow({body:_,error:S,url:v});return U},retryCount:f,retryDelay:l,timeout:m,type:"http"},{fetchOptions:i,url:v})}}function $r(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}function ZE(t){const{authorizationList:e}=t;if(e)for(const r of e){const{chainId:i}=r,s=r.address;if(!Us(s))throw new Ls({address:s});if(i<0)throw new Kl({chainId:i})}Fd(t)}function GE(t){const{blobVersionedHashes:e}=t;if(e){if(e.length===0)throw new Hw;for(const r of e){const i=Dn(r),s=vl(eE(r,0,1));if(i!==32)throw new kE({hash:r,size:i});if(s!==qw)throw new NE({hash:r,version:s})}}Fd(t)}function Fd(t){const{chainId:e,maxPriorityFeePerGas:r,maxFeePerGas:i,to:s}=t;if(e<=0)throw new Kl({chainId:e});if(s&&!Us(s))throw new Ls({address:s});if(i&&i>Hd)throw new Fl({maxFeePerGas:i});if(r&&i&&r>i)throw new Lw({maxFeePerGas:i,maxPriorityFeePerGas:r})}function YE(t){const{chainId:e,maxPriorityFeePerGas:r,gasPrice:i,maxFeePerGas:s,to:n}=t;if(e<=0)throw new Kl({chainId:e});if(n&&!Us(n))throw new Ls({address:n});if(r||s)throw new _e("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(i&&i>Hd)throw new Fl({maxFeePerGas:i})}function JE(t){const{chainId:e,maxPriorityFeePerGas:r,gasPrice:i,maxFeePerGas:s,to:n}=t;if(n&&!Us(n))throw new Ls({address:n});if(typeof e<"u"&&e<=0)throw new Kl({chainId:e});if(r||s)throw new _e("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(i&&i>Hd)throw new Fl({maxFeePerGas:i})}function Zl(t){if(!t||t.length===0)return[];const e=[];for(let r=0;r<t.length;r++){const{address:i,storageKeys:s}=t[r];for(let n=0;n<s.length;n++)if(s[n].length-2!==64)throw new uE({storageKey:s[n]});if(!Us(i,{strict:!1}))throw new Ls({address:i});e.push([i,s])}return e}function XE(t,e){const r=TE(t);return r==="eip1559"?tx(t,e):r==="eip2930"?rx(t,e):r==="eip4844"?ex(t,e):r==="eip7702"?QE(t,e):ix(t,e)}function QE(t,e){const{authorizationList:r,chainId:i,gas:s,nonce:n,to:o,value:a,maxFeePerGas:c,maxPriorityFeePerGas:l,accessList:u,data:h}=t;ZE(t);const d=Zl(u),p=sx(r);return Ga(["0x04",io([pe(i),n?pe(n):"0x",l?pe(l):"0x",c?pe(c):"0x",s?pe(s):"0x",o??"0x",a?pe(a):"0x",h??"0x",d,p,...Ya(t,e)])])}function ex(t,e){const{chainId:r,gas:i,nonce:s,to:n,value:o,maxFeePerBlobGas:a,maxFeePerGas:c,maxPriorityFeePerGas:l,accessList:u,data:h}=t;GE(t);let d=t.blobVersionedHashes,p=t.sidecars;if(t.blobs&&(typeof d>"u"||typeof p>"u")){const b=typeof t.blobs[0]=="string"?t.blobs:t.blobs.map(_=>Hi(_)),y=t.kzg,$=Bw({blobs:b,kzg:y});if(typeof d>"u"&&(d=_E({commitments:$})),typeof p>"u"){const _=Mw({blobs:b,commitments:$,kzg:y});p=OE({blobs:b,commitments:$,proofs:_})}}const w=Zl(u),g=[pe(r),s?pe(s):"0x",l?pe(l):"0x",c?pe(c):"0x",i?pe(i):"0x",n??"0x",o?pe(o):"0x",h??"0x",w,a?pe(a):"0x",d??[],...Ya(t,e)],f=[],m=[],v=[];if(p)for(let b=0;b<p.length;b++){const{blob:y,commitment:$,proof:_}=p[b];f.push(y),m.push($),v.push(_)}return Ga(["0x03",io(p?[g,f,m,v]:g)])}function tx(t,e){const{chainId:r,gas:i,nonce:s,to:n,value:o,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:l,data:u}=t;Fd(t);const h=Zl(l),d=[pe(r),s?pe(s):"0x",c?pe(c):"0x",a?pe(a):"0x",i?pe(i):"0x",n??"0x",o?pe(o):"0x",u??"0x",h,...Ya(t,e)];return Ga(["0x02",io(d)])}function rx(t,e){const{chainId:r,gas:i,data:s,nonce:n,to:o,value:a,accessList:c,gasPrice:l}=t;YE(t);const u=Zl(c),h=[pe(r),n?pe(n):"0x",l?pe(l):"0x",i?pe(i):"0x",o??"0x",a?pe(a):"0x",s??"0x",u,...Ya(t,e)];return Ga(["0x01",io(h)])}function ix(t,e){const{chainId:r=0,gas:i,data:s,nonce:n,to:o,value:a,gasPrice:c}=t;JE(t);let l=[n?pe(n):"0x",c?pe(c):"0x",i?pe(i):"0x",o??"0x",a?pe(a):"0x",s??"0x"];if(e){const u=(()=>{if(e.v>=35n)return(e.v-35n)/2n>0?e.v:27n+(e.v===35n?0n:1n);if(r>0)return BigInt(r*2)+BigInt(35n+e.v-27n);const p=27n+(e.v===27n?0n:1n);if(e.v!==p)throw new cE({v:e.v});return p})(),h=ml(e.r),d=ml(e.s);l=[...l,pe(u),h==="0x00"?"0x":h,d==="0x00"?"0x":d]}else r>0&&(l=[...l,pe(r),"0x","0x"]);return io(l)}function Ya(t,e){const r=e??t,{v:i,yParity:s}=r;if(typeof r.r>"u")return[];if(typeof r.s>"u")return[];if(typeof i>"u"&&typeof s>"u")return[];const n=ml(r.r),o=ml(r.s);return[typeof s=="number"?s?pe(1):"0x":i===0n?"0x":i===1n?pe(1):i===27n?"0x":pe(1),n==="0x00"?"0x":n,o==="0x00"?"0x":o]}function sx(t){if(!t||t.length===0)return[];const e=[];for(const r of t){const{chainId:i,nonce:s,...n}=r,o=r.address;e.push([i?pe(i):"0x",o,s?pe(s):"0x",...Ya({},n)])}return e}const nx={"0x0":"reverted","0x1":"success"};function ox(t){const e={...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(r=>RE(r)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?vl(t.transactionIndex):null,status:t.status?nx[t.status]:null,type:t.type?Uw[t.type]||t.type:null};return t.blobGasPrice&&(e.blobGasPrice=BigInt(t.blobGasPrice)),t.blobGasUsed&&(e.blobGasUsed=BigInt(t.blobGasUsed)),e}const ax=qd("transactionReceipt",ox),cx=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),Fw=new Uint8Array(new Array(16).fill(0).map((t,e)=>e)),lx=Fw.map(t=>(9*t+5)%16);let ux=[Fw],hx=[lx];for(let t=0;t<4;t++)for(let e of[ux,hx])e.push(e[t].map(r=>cx[r]));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Gl=BigInt(0),Yl=BigInt(1),dx=BigInt(2);function Bs(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"}function Ja(t){if(!Bs(t))throw new Error("Uint8Array expected")}function Wn(t,e){if(typeof e!="boolean")throw new Error(t+" boolean expected, got "+e)}const px=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Vn(t){Ja(t);let e="";for(let r=0;r<t.length;r++)e+=px[t[r]];return e}function $n(t){const e=t.toString(16);return e.length&1?"0"+e:e}function Kd(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);return t===""?Gl:BigInt("0x"+t)}const Jr={_0:48,_9:57,A:65,F:70,a:97,f:102};function w1(t){if(t>=Jr._0&&t<=Jr._9)return t-Jr._0;if(t>=Jr.A&&t<=Jr.F)return t-(Jr.A-10);if(t>=Jr.a&&t<=Jr.f)return t-(Jr.a-10)}function Fn(t){if(typeof t!="string")throw new Error("hex string expected, got "+typeof t);const e=t.length,r=e/2;if(e%2)throw new Error("hex string expected, got unpadded hex of length "+e);const i=new Uint8Array(r);for(let s=0,n=0;s<r;s++,n+=2){const o=w1(t.charCodeAt(n)),a=w1(t.charCodeAt(n+1));if(o===void 0||a===void 0){const c=t[n]+t[n+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+n)}i[s]=o*16+a}return i}function As(t){return Kd(Vn(t))}function Zd(t){return Ja(t),Kd(Vn(Uint8Array.from(t).reverse()))}function Kn(t,e){return Fn(t.toString(16).padStart(e*2,"0"))}function Gd(t,e){return Kn(t,e).reverse()}function gx(t){return Fn($n(t))}function Ar(t,e,r){let i;if(typeof e=="string")try{i=Fn(e)}catch(n){throw new Error(t+" must be hex string or Uint8Array, cause: "+n)}else if(Bs(e))i=Uint8Array.from(e);else throw new Error(t+" must be hex string or Uint8Array");const s=i.length;if(typeof r=="number"&&s!==r)throw new Error(t+" of length "+r+" expected, got "+s);return i}function Pa(...t){let e=0;for(let i=0;i<t.length;i++){const s=t[i];Ja(s),e+=s.length}const r=new Uint8Array(e);for(let i=0,s=0;i<t.length;i++){const n=t[i];r.set(n,s),s+=n.length}return r}function fx(t,e){if(t.length!==e.length)return!1;let r=0;for(let i=0;i<t.length;i++)r|=t[i]^e[i];return r===0}function wx(t){if(typeof t!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(t))}const Ru=t=>typeof t=="bigint"&&Gl<=t;function Jl(t,e,r){return Ru(t)&&Ru(e)&&Ru(r)&&e<=t&&t<r}function Ss(t,e,r,i){if(!Jl(e,r,i))throw new Error("expected valid "+t+": "+r+" <= n < "+i+", got "+e)}function Kw(t){let e;for(e=0;t>Gl;t>>=Yl,e+=1);return e}function mx(t,e){return t>>BigInt(e)&Yl}function vx(t,e,r){return t|(r?Yl:Gl)<<BigInt(e)}const Yd=t=>(dx<<BigInt(t-1))-Yl,Lu=t=>new Uint8Array(t),m1=t=>Uint8Array.from(t);function Zw(t,e,r){if(typeof t!="number"||t<2)throw new Error("hashLen must be a number");if(typeof e!="number"||e<2)throw new Error("qByteLen must be a number");if(typeof r!="function")throw new Error("hmacFn must be a function");let i=Lu(t),s=Lu(t),n=0;const o=()=>{i.fill(1),s.fill(0),n=0},a=(...u)=>r(s,i,...u),c=(u=Lu())=>{s=a(m1([0]),u),i=a(),u.length!==0&&(s=a(m1([1]),u),i=a())},l=()=>{if(n++>=1e3)throw new Error("drbg: tried 1000 values");let u=0;const h=[];for(;u<e;){i=a();const d=i.slice();h.push(d),u+=i.length}return Pa(...h)};return(u,h)=>{o(),c(u);let d;for(;!(d=h(l()));)c();return o(),d}}const bx={bigint:t=>typeof t=="bigint",function:t=>typeof t=="function",boolean:t=>typeof t=="boolean",string:t=>typeof t=="string",stringOrUint8Array:t=>typeof t=="string"||Bs(t),isSafeInteger:t=>Number.isSafeInteger(t),array:t=>Array.isArray(t),field:(t,e)=>e.Fp.isValid(t),hash:t=>typeof t=="function"&&Number.isSafeInteger(t.outputLen)};function Xa(t,e,r={}){const i=(s,n,o)=>{const a=bx[n];if(typeof a!="function")throw new Error("invalid validator function");const c=t[s];if(!(o&&c===void 0)&&!a(c,t))throw new Error("param "+String(s)+" is invalid. Expected "+n+", got "+c)};for(const[s,n]of Object.entries(e))i(s,n,!1);for(const[s,n]of Object.entries(r))i(s,n,!0);return t}const yx=()=>{throw new Error("not implemented")};function od(t){const e=new WeakMap;return(r,...i)=>{const s=e.get(r);if(s!==void 0)return s;const n=t(r,...i);return e.set(r,n),n}}var Cx=Object.freeze({__proto__:null,isBytes:Bs,abytes:Ja,abool:Wn,bytesToHex:Vn,numberToHexUnpadded:$n,hexToNumber:Kd,hexToBytes:Fn,bytesToNumberBE:As,bytesToNumberLE:Zd,numberToBytesBE:Kn,numberToBytesLE:Gd,numberToVarBytesBE:gx,ensureBytes:Ar,concatBytes:Pa,equalBytes:fx,utf8ToBytes:wx,inRange:Jl,aInRange:Ss,bitLen:Kw,bitGet:mx,bitSet:vx,bitMask:Yd,createHmacDrbg:Zw,validateObject:Xa,notImplemented:yx,memoized:od});const Ex="0.1.1";function xx(){return Ex}class _t extends Error{constructor(e,r={}){const i=(()=>{var a;if(r.cause instanceof _t){if(r.cause.details)return r.cause.details;if(r.cause.shortMessage)return r.cause.shortMessage}return(a=r.cause)!=null&&a.message?r.cause.message:r.details})(),s=r.cause instanceof _t&&r.cause.docsPath||r.docsPath,n=`https://oxlib.sh${s??""}`,o=[e||"An error occurred.",...r.metaMessages?["",...r.metaMessages]:[],...i||s?["",i?`Details: ${i}`:void 0,s?`See: ${n}`:void 0]:[]].filter(a=>typeof a=="string").join(`
`);super(o,r.cause?{cause:r.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:`ox@${xx()}`}),this.cause=r.cause,this.details=i,this.docs=n,this.docsPath=s,this.shortMessage=e}walk(e){return Gw(this,e)}}function Gw(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t&&t.cause?Gw(t.cause,e):e?null:t}function Ix(t,e){if(b1(t)>e)throw new Ox({givenSize:b1(t),maxSize:e})}const Xr={zero:48,nine:57,A:65,F:70,a:97,f:102};function v1(t){if(t>=Xr.zero&&t<=Xr.nine)return t-Xr.zero;if(t>=Xr.A&&t<=Xr.F)return t-(Xr.A-10);if(t>=Xr.a&&t<=Xr.f)return t-(Xr.a-10)}function Ax(t,e={}){const{dir:r,size:i=32}=e;if(i===0)return t;if(t.length>i)throw new Tx({size:t.length,targetSize:i,type:"Bytes"});const s=new Uint8Array(i);for(let n=0;n<i;n++){const o=r==="right";s[o?n:i-n-1]=t[o?n:t.length-n-1]}return s}function Jd(t,e){if(ad(t)>e)throw new jx({givenSize:ad(t),maxSize:e})}function Yw(t,e={}){const{dir:r,size:i=32}=e;if(i===0)return t;const s=t.replace("0x","");if(s.length>i*2)throw new zx({size:Math.ceil(s.length/2),targetSize:i,type:"Hex"});return`0x${s[r==="right"?"padEnd":"padStart"](i*2,"0")}`}const Sx=new TextEncoder;function _x(t){return t instanceof Uint8Array?t:typeof t=="string"?kx(t):$x(t)}function $x(t){return t instanceof Uint8Array?t:new Uint8Array(t)}function kx(t,e={}){const{size:r}=e;let i=t;r&&(Jd(t,r),i=Xd(t,r));let s=i.slice(2);s.length%2&&(s=`0${s}`);const n=s.length/2,o=new Uint8Array(n);for(let a=0,c=0;a<n;a++){const l=v1(s.charCodeAt(c++)),u=v1(s.charCodeAt(c++));if(l===void 0||u===void 0)throw new _t(`Invalid byte sequence ("${s[c-2]}${s[c-1]}" in "${s}").`);o[a]=l*16+u}return o}function Nx(t,e={}){const{size:r}=e,i=Sx.encode(t);return typeof r=="number"?(Ix(i,r),Px(i,r)):i}function Px(t,e){return Ax(t,{dir:"right",size:e})}function b1(t){return t.length}class Ox extends _t{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed \`${r}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeOverflowError"})}}class Tx extends _t{constructor({size:e,targetSize:r,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${r}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeExceedsPaddingSizeError"})}}const Rx=new TextEncoder,Lx=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Jw(...t){return`0x${t.reduce((e,r)=>e+r.replace("0x",""),"")}`}function Ux(t,e={}){const r=`0x${Number(t)}`;return typeof e.size=="number"?(Jd(r,e.size),yl(r,e.size)):r}function Xw(t,e={}){let r="";for(let s=0;s<t.length;s++)r+=Lx[t[s]];const i=`0x${r}`;return typeof e.size=="number"?(Jd(i,e.size),Xd(i,e.size)):i}function Bx(t,e={}){const{signed:r,size:i}=e,s=BigInt(t);let n;i?r?n=(1n<<BigInt(i)*8n-1n)-1n:n=2n**(BigInt(i)*8n)-1n:typeof t=="number"&&(n=BigInt(Number.MAX_SAFE_INTEGER));const o=typeof n=="bigint"&&r?-n-1n:0;if(n&&s>n||s<o){const c=typeof t=="bigint"?"n":"";throw new Dx({max:n?`${n}${c}`:void 0,min:`${o}${c}`,signed:r,size:i,value:`${t}${c}`})}const a=`0x${(r&&s<0?(1n<<BigInt(i*8))+BigInt(s):s).toString(16)}`;return i?yl(a,i):a}function Mx(t,e={}){return Xw(Rx.encode(t),e)}function yl(t,e){return Yw(t,{dir:"left",size:e})}function Xd(t,e){return Yw(t,{dir:"right",size:e})}function ad(t){return Math.ceil((t.length-2)/2)}class Dx extends _t{constructor({max:e,min:r,signed:i,size:s,value:n}){super(`Number \`${n}\` is not in safe${s?` ${s*8}-bit`:""}${i?" signed":" unsigned"} integer range ${e?`(\`${r}\` to \`${e}\`)`:`(above \`${r}\`)`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.IntegerOutOfRangeError"})}}class jx extends _t{constructor({givenSize:e,maxSize:r}){super(`Size cannot exceed \`${r}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.SizeOverflowError"})}}class zx extends _t{constructor({size:e,targetSize:r,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${r}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.SizeExceedsPaddingSizeError"})}}function qx(t,e={}){const{as:r=typeof t=="string"?"Hex":"Bytes"}=e,i=$w(_x(t));return r==="Bytes"?i:Xw(i)}class Hx extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){const r=super.get(e);return super.has(e)&&r!==void 0&&(this.delete(e),super.set(e,r)),r}set(e,r){if(super.set(e,r),this.maxSize&&this.size>this.maxSize){const i=this.keys().next().value;i&&this.delete(i)}return this}}const Wx={checksum:new Hx(8192)},Uu=Wx.checksum,Vx=/^0x[a-fA-F0-9]{40}$/;function Qw(t,e={}){const{strict:r=!0}=e;if(!Vx.test(t))throw new y1({address:t,cause:new Kx});if(r){if(t.toLowerCase()===t)return;if(Fx(t)!==t)throw new y1({address:t,cause:new Zx})}}function Fx(t){if(Uu.has(t))return Uu.get(t);Qw(t,{strict:!1});const e=t.substring(2).toLowerCase(),r=qx(Nx(e),{as:"Bytes"}),i=e.split("");for(let n=0;n<40;n+=2)r[n>>1]>>4>=8&&i[n]&&(i[n]=i[n].toUpperCase()),(r[n>>1]&15)>=8&&i[n+1]&&(i[n+1]=i[n+1].toUpperCase());const s=`0x${i.join("")}`;return Uu.set(t,s),s}class y1 extends _t{constructor({address:e,cause:r}){super(`Address "${e}" is invalid.`,{cause:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidAddressError"})}}class Kx extends _t{constructor(){super("Address is not a 20 byte (40 hexadecimal character) value."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidInputError"})}}class Zx extends _t{constructor(){super("Address does not match its checksum counterpart."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidChecksumError"})}}const Gx=/^(.*)\[([0-9]*)\]$/,Yx=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Jx=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function cd(t,e){if(t.length!==e.length)throw new Qx({expectedLength:t.length,givenLength:e.length});const r=[];for(let i=0;i<t.length;i++){const s=t[i],n=e[i];r.push(cd.encode(s,n))}return Jw(...r)}(function(t){function e(r,i,s=!1){if(r==="address"){const c=i;return Qw(c),yl(c.toLowerCase(),s?32:0)}if(r==="string")return Mx(i);if(r==="bytes")return i;if(r==="bool")return yl(Ux(i),s?32:1);const n=r.match(Jx);if(n){const[c,l,u="256"]=n,h=Number.parseInt(u)/8;return Bx(i,{size:s?32:h,signed:l==="int"})}const o=r.match(Yx);if(o){const[c,l]=o;if(Number.parseInt(l)!==(i.length-2)/2)throw new Xx({expectedSize:Number.parseInt(l),value:i});return Xd(i,s?32:0)}const a=r.match(Gx);if(a&&Array.isArray(i)){const[c,l]=a,u=[];for(let h=0;h<i.length;h++)u.push(e(l,i[h],!0));return u.length===0?"0x":Jw(...u)}throw new eI(r)}t.encode=e})(cd||(cd={}));class Xx extends _t{constructor({expectedSize:e,value:r}){super(`Size of bytes "${r}" (bytes${ad(r)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.BytesSizeMismatchError"})}}class Qx extends _t{constructor({expectedLength:e,givenLength:r}){super(["ABI encoding parameters/values length mismatch.",`Expected length (parameters): ${e}`,`Given length (values): ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.LengthMismatchError"})}}class eI extends _t{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.InvalidTypeError"})}}class em extends Dd{constructor(e,r){super(),this.finished=!1,this.destroyed=!1,NC(e);const i=Wl(r);if(this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const s=this.blockLen,n=new Uint8Array(s);n.set(i.length>s?e.create().update(i).digest():i);for(let o=0;o<n.length;o++)n[o]^=54;this.iHash.update(n),this.oHash=e.create();for(let o=0;o<n.length;o++)n[o]^=106;this.oHash.update(n),n.fill(0)}update(e){return jn(this),this.iHash.update(e),this}digestInto(e){jn(this),Za(e,this.outputLen),this.finished=!0,this.iHash.digestInto(e),this.oHash.update(e),this.oHash.digestInto(e),this.destroy()}digest(){const e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:i,finished:s,destroyed:n,blockLen:o,outputLen:a}=this;return e=e,e.finished=s,e.destroyed=n,e.blockLen=o,e.outputLen=a,e.oHash=r._cloneInto(e.oHash),e.iHash=i._cloneInto(e.iHash),e}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const tm=(t,e,r)=>new em(t,e).update(r).digest();tm.create=(t,e)=>new em(t,e);const dt=BigInt(0),Ye=BigInt(1),fs=BigInt(2),tI=BigInt(3),ld=BigInt(4),C1=BigInt(5),E1=BigInt(8);function Bt(t,e){const r=t%e;return r>=dt?r:e+r}function rI(t,e,r){if(e<dt)throw new Error("invalid exponent, negatives unsupported");if(r<=dt)throw new Error("invalid modulus");if(r===Ye)return dt;let i=Ye;for(;e>dt;)e&Ye&&(i=i*t%r),t=t*t%r,e>>=Ye;return i}function sr(t,e,r){let i=t;for(;e-- >dt;)i*=i,i%=r;return i}function ud(t,e){if(t===dt)throw new Error("invert: expected non-zero number");if(e<=dt)throw new Error("invert: expected positive modulus, got "+e);let r=Bt(t,e),i=e,s=dt,n=Ye;for(;r!==dt;){const o=i/r,a=i%r,c=s-n*o;i=r,r=a,s=n,n=c}if(i!==Ye)throw new Error("invert: does not exist");return Bt(s,e)}function iI(t){const e=(t-Ye)/fs;let r,i,s;for(r=t-Ye,i=0;r%fs===dt;r/=fs,i++);for(s=fs;s<t&&rI(s,e,t)!==t-Ye;s++)if(s>1e3)throw new Error("Cannot find square root: likely non-prime P");if(i===1){const o=(t+Ye)/ld;return function(a,c){const l=a.pow(c,o);if(!a.eql(a.sqr(l),c))throw new Error("Cannot find square root");return l}}const n=(r+Ye)/fs;return function(o,a){if(o.pow(a,e)===o.neg(o.ONE))throw new Error("Cannot find square root");let c=i,l=o.pow(o.mul(o.ONE,s),r),u=o.pow(a,n),h=o.pow(a,r);for(;!o.eql(h,o.ONE);){if(o.eql(h,o.ZERO))return o.ZERO;let d=1;for(let w=o.sqr(h);d<c&&!o.eql(w,o.ONE);d++)w=o.sqr(w);const p=o.pow(l,Ye<<BigInt(c-d-1));l=o.sqr(p),u=o.mul(u,p),h=o.mul(h,l),c=d}return u}}function sI(t){if(t%ld===tI){const e=(t+Ye)/ld;return function(r,i){const s=r.pow(i,e);if(!r.eql(r.sqr(s),i))throw new Error("Cannot find square root");return s}}if(t%E1===C1){const e=(t-C1)/E1;return function(r,i){const s=r.mul(i,fs),n=r.pow(s,e),o=r.mul(i,n),a=r.mul(r.mul(o,fs),n),c=r.mul(o,r.sub(a,r.ONE));if(!r.eql(r.sqr(c),i))throw new Error("Cannot find square root");return c}}return iI(t)}const nI=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function oI(t){const e={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},r=nI.reduce((i,s)=>(i[s]="function",i),e);return Xa(t,r)}function aI(t,e,r){if(r<dt)throw new Error("invalid exponent, negatives unsupported");if(r===dt)return t.ONE;if(r===Ye)return e;let i=t.ONE,s=e;for(;r>dt;)r&Ye&&(i=t.mul(i,s)),s=t.sqr(s),r>>=Ye;return i}function cI(t,e){const r=new Array(e.length),i=e.reduce((n,o,a)=>t.is0(o)?n:(r[a]=n,t.mul(n,o)),t.ONE),s=t.inv(i);return e.reduceRight((n,o,a)=>t.is0(o)?n:(r[a]=t.mul(n,r[a]),t.mul(n,o)),s),r}function rm(t,e){const r=e!==void 0?e:t.toString(2).length,i=Math.ceil(r/8);return{nBitLength:r,nByteLength:i}}function im(t,e,r=!1,i={}){if(t<=dt)throw new Error("invalid field: expected ORDER > 0, got "+t);const{nBitLength:s,nByteLength:n}=rm(t,e);if(n>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let o;const a=Object.freeze({ORDER:t,isLE:r,BITS:s,BYTES:n,MASK:Yd(s),ZERO:dt,ONE:Ye,create:c=>Bt(c,t),isValid:c=>{if(typeof c!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof c);return dt<=c&&c<t},is0:c=>c===dt,isOdd:c=>(c&Ye)===Ye,neg:c=>Bt(-c,t),eql:(c,l)=>c===l,sqr:c=>Bt(c*c,t),add:(c,l)=>Bt(c+l,t),sub:(c,l)=>Bt(c-l,t),mul:(c,l)=>Bt(c*l,t),pow:(c,l)=>aI(a,c,l),div:(c,l)=>Bt(c*ud(l,t),t),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>ud(c,t),sqrt:i.sqrt||(c=>(o||(o=sI(t)),o(a,c))),invertBatch:c=>cI(a,c),cmov:(c,l,u)=>u?l:c,toBytes:c=>r?Gd(c,n):Kn(c,n),fromBytes:c=>{if(c.length!==n)throw new Error("Field.fromBytes: expected "+n+" bytes, got "+c.length);return r?Zd(c):As(c)}});return Object.freeze(a)}function sm(t){if(typeof t!="bigint")throw new Error("field order must be bigint");const e=t.toString(2).length;return Math.ceil(e/8)}function nm(t){const e=sm(t);return e+Math.ceil(e/2)}function lI(t,e,r=!1){const i=t.length,s=sm(e),n=nm(e);if(i<16||i<n||i>1024)throw new Error("expected "+n+"-1024 bytes of input, got "+i);const o=r?Zd(t):As(t),a=Bt(o,e-Ye)+Ye;return r?Gd(a,s):Kn(a,s)}const x1=BigInt(0),bc=BigInt(1);function Bu(t,e){const r=e.negate();return t?r:e}function om(t,e){if(!Number.isSafeInteger(t)||t<=0||t>e)throw new Error("invalid window size, expected [1.."+e+"], got W="+t)}function Mu(t,e){om(t,e);const r=Math.ceil(e/t)+1,i=2**(t-1);return{windows:r,windowSize:i}}function uI(t,e){if(!Array.isArray(t))throw new Error("array expected");t.forEach((r,i)=>{if(!(r instanceof e))throw new Error("invalid point at index "+i)})}function hI(t,e){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((r,i)=>{if(!e.isValid(r))throw new Error("invalid scalar at index "+i)})}const Du=new WeakMap,am=new WeakMap;function ju(t){return am.get(t)||1}function dI(t,e){return{constTimeNegate:Bu,hasPrecomputes(r){return ju(r)!==1},unsafeLadder(r,i,s=t.ZERO){let n=r;for(;i>x1;)i&bc&&(s=s.add(n)),n=n.double(),i>>=bc;return s},precomputeWindow(r,i){const{windows:s,windowSize:n}=Mu(i,e),o=[];let a=r,c=a;for(let l=0;l<s;l++){c=a,o.push(c);for(let u=1;u<n;u++)c=c.add(a),o.push(c);a=c.double()}return o},wNAF(r,i,s){const{windows:n,windowSize:o}=Mu(r,e);let a=t.ZERO,c=t.BASE;const l=BigInt(2**r-1),u=2**r,h=BigInt(r);for(let d=0;d<n;d++){const p=d*o;let w=Number(s&l);s>>=h,w>o&&(w-=u,s+=bc);const g=p,f=p+Math.abs(w)-1,m=d%2!==0,v=w<0;w===0?c=c.add(Bu(m,i[g])):a=a.add(Bu(v,i[f]))}return{p:a,f:c}},wNAFUnsafe(r,i,s,n=t.ZERO){const{windows:o,windowSize:a}=Mu(r,e),c=BigInt(2**r-1),l=2**r,u=BigInt(r);for(let h=0;h<o;h++){const d=h*a;if(s===x1)break;let p=Number(s&c);if(s>>=u,p>a&&(p-=l,s+=bc),p===0)continue;let w=i[d+Math.abs(p)-1];p<0&&(w=w.negate()),n=n.add(w)}return n},getPrecomputes(r,i,s){let n=Du.get(i);return n||(n=this.precomputeWindow(i,r),r!==1&&Du.set(i,s(n))),n},wNAFCached(r,i,s){const n=ju(r);return this.wNAF(n,this.getPrecomputes(n,r,s),i)},wNAFCachedUnsafe(r,i,s,n){const o=ju(r);return o===1?this.unsafeLadder(r,i,n):this.wNAFUnsafe(o,this.getPrecomputes(o,r,s),i,n)},setWindowSize(r,i){om(i,e),am.set(r,i),Du.delete(r)}}}function pI(t,e,r,i){if(uI(r,t),hI(i,e),r.length!==i.length)throw new Error("arrays of points and scalars must have equal length");const s=t.ZERO,n=Kw(BigInt(r.length)),o=n>12?n-3:n>4?n-2:n?2:1,a=(1<<o)-1,c=new Array(a+1).fill(s),l=Math.floor((e.BITS-1)/o)*o;let u=s;for(let h=l;h>=0;h-=o){c.fill(s);for(let p=0;p<i.length;p++){const w=i[p],g=Number(w>>BigInt(h)&BigInt(a));c[g]=c[g].add(r[p])}let d=s;for(let p=c.length-1,w=s;p>0;p--)w=w.add(c[p]),d=d.add(w);if(u=u.add(d),h!==0)for(let p=0;p<o;p++)u=u.double()}return u}function cm(t){return oI(t.Fp),Xa(t,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...rm(t.n,t.nBitLength),...t,p:t.Fp.ORDER})}function I1(t){t.lowS!==void 0&&Wn("lowS",t.lowS),t.prehash!==void 0&&Wn("prehash",t.prehash)}function gI(t){const e=cm(t);Xa(e,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:r,Fp:i,a:s}=e;if(r){if(!i.eql(s,i.ZERO))throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if(typeof r!="object"||typeof r.beta!="bigint"||typeof r.splitScalar!="function")throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...e})}const{bytesToNumberBE:fI,hexToBytes:wI}=Cx;class mI extends Error{constructor(e=""){super(e)}}const ci={Err:mI,_tlv:{encode:(t,e)=>{const{Err:r}=ci;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(e.length&1)throw new r("tlv.encode: unpadded data");const i=e.length/2,s=$n(i);if(s.length/2&128)throw new r("tlv.encode: long form length too big");const n=i>127?$n(s.length/2|128):"";return $n(t)+n+s+e},decode(t,e){const{Err:r}=ci;let i=0;if(t<0||t>256)throw new r("tlv.encode: wrong tag");if(e.length<2||e[i++]!==t)throw new r("tlv.decode: wrong tlv");const s=e[i++],n=!!(s&128);let o=0;if(!n)o=s;else{const c=s&127;if(!c)throw new r("tlv.decode(long): indefinite length not supported");if(c>4)throw new r("tlv.decode(long): byte length is too big");const l=e.subarray(i,i+c);if(l.length!==c)throw new r("tlv.decode: length bytes not complete");if(l[0]===0)throw new r("tlv.decode(long): zero leftmost byte");for(const u of l)o=o<<8|u;if(i+=c,o<128)throw new r("tlv.decode(long): not minimal encoding")}const a=e.subarray(i,i+o);if(a.length!==o)throw new r("tlv.decode: wrong value length");return{v:a,l:e.subarray(i+o)}}},_int:{encode(t){const{Err:e}=ci;if(t<ui)throw new e("integer: negative integers are not allowed");let r=$n(t);if(Number.parseInt(r[0],16)&8&&(r="00"+r),r.length&1)throw new e("unexpected DER parsing assertion: unpadded hex");return r},decode(t){const{Err:e}=ci;if(t[0]&128)throw new e("invalid signature integer: negative");if(t[0]===0&&!(t[1]&128))throw new e("invalid signature integer: unnecessary leading zero");return fI(t)}},toSig(t){const{Err:e,_int:r,_tlv:i}=ci,s=typeof t=="string"?wI(t):t;Ja(s);const{v:n,l:o}=i.decode(48,s);if(o.length)throw new e("invalid signature: left bytes after parsing");const{v:a,l:c}=i.decode(2,n),{v:l,l:u}=i.decode(2,c);if(u.length)throw new e("invalid signature: left bytes after parsing");return{r:r.decode(a),s:r.decode(l)}},hexFromSig(t){const{_tlv:e,_int:r}=ci,i=e.encode(2,r.encode(t.r)),s=e.encode(2,r.encode(t.s)),n=i+s;return e.encode(48,n)}},ui=BigInt(0),ct=BigInt(1);BigInt(2);const A1=BigInt(3);BigInt(4);function vI(t){const e=gI(t),{Fp:r}=e,i=im(e.n,e.nBitLength),s=e.toBytes||((g,f,m)=>{const v=f.toAffine();return Pa(Uint8Array.from([4]),r.toBytes(v.x),r.toBytes(v.y))}),n=e.fromBytes||(g=>{const f=g.subarray(1),m=r.fromBytes(f.subarray(0,r.BYTES)),v=r.fromBytes(f.subarray(r.BYTES,2*r.BYTES));return{x:m,y:v}});function o(g){const{a:f,b:m}=e,v=r.sqr(g),b=r.mul(v,g);return r.add(r.add(b,r.mul(g,f)),m)}if(!r.eql(r.sqr(e.Gy),o(e.Gx)))throw new Error("bad generator point: equation left != right");function a(g){return Jl(g,ct,e.n)}function c(g){const{allowedPrivateKeyLengths:f,nByteLength:m,wrapPrivateKey:v,n:b}=e;if(f&&typeof g!="bigint"){if(Bs(g)&&(g=Vn(g)),typeof g!="string"||!f.includes(g.length))throw new Error("invalid private key");g=g.padStart(m*2,"0")}let y;try{y=typeof g=="bigint"?g:As(Ar("private key",g,m))}catch{throw new Error("invalid private key, expected hex or "+m+" bytes, got "+typeof g)}return v&&(y=Bt(y,b)),Ss("private key",y,ct,b),y}function l(g){if(!(g instanceof d))throw new Error("ProjectivePoint expected")}const u=od((g,f)=>{const{px:m,py:v,pz:b}=g;if(r.eql(b,r.ONE))return{x:m,y:v};const y=g.is0();f==null&&(f=y?r.ONE:r.inv(b));const $=r.mul(m,f),_=r.mul(v,f),P=r.mul(b,f);if(y)return{x:r.ZERO,y:r.ZERO};if(!r.eql(P,r.ONE))throw new Error("invZ was invalid");return{x:$,y:_}}),h=od(g=>{if(g.is0()){if(e.allowInfinityPoint&&!r.is0(g.py))return;throw new Error("bad point: ZERO")}const{x:f,y:m}=g.toAffine();if(!r.isValid(f)||!r.isValid(m))throw new Error("bad point: x or y not FE");const v=r.sqr(m),b=o(f);if(!r.eql(v,b))throw new Error("bad point: equation left != right");if(!g.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class d{constructor(f,m,v){if(this.px=f,this.py=m,this.pz=v,f==null||!r.isValid(f))throw new Error("x required");if(m==null||!r.isValid(m))throw new Error("y required");if(v==null||!r.isValid(v))throw new Error("z required");Object.freeze(this)}static fromAffine(f){const{x:m,y:v}=f||{};if(!f||!r.isValid(m)||!r.isValid(v))throw new Error("invalid affine point");if(f instanceof d)throw new Error("projective point not allowed");const b=y=>r.eql(y,r.ZERO);return b(m)&&b(v)?d.ZERO:new d(m,v,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(f){const m=r.invertBatch(f.map(v=>v.pz));return f.map((v,b)=>v.toAffine(m[b])).map(d.fromAffine)}static fromHex(f){const m=d.fromAffine(n(Ar("pointHex",f)));return m.assertValidity(),m}static fromPrivateKey(f){return d.BASE.multiply(c(f))}static msm(f,m){return pI(d,i,f,m)}_setWindowSize(f){w.setWindowSize(this,f)}assertValidity(){h(this)}hasEvenY(){const{y:f}=this.toAffine();if(r.isOdd)return!r.isOdd(f);throw new Error("Field doesn't support isOdd")}equals(f){l(f);const{px:m,py:v,pz:b}=this,{px:y,py:$,pz:_}=f,P=r.eql(r.mul(m,_),r.mul(y,b)),k=r.eql(r.mul(v,_),r.mul($,b));return P&&k}negate(){return new d(this.px,r.neg(this.py),this.pz)}double(){const{a:f,b:m}=e,v=r.mul(m,A1),{px:b,py:y,pz:$}=this;let _=r.ZERO,P=r.ZERO,k=r.ZERO,S=r.mul(b,b),U=r.mul(y,y),L=r.mul($,$),M=r.mul(b,y);return M=r.add(M,M),k=r.mul(b,$),k=r.add(k,k),_=r.mul(f,k),P=r.mul(v,L),P=r.add(_,P),_=r.sub(U,P),P=r.add(U,P),P=r.mul(_,P),_=r.mul(M,_),k=r.mul(v,k),L=r.mul(f,L),M=r.sub(S,L),M=r.mul(f,M),M=r.add(M,k),k=r.add(S,S),S=r.add(k,S),S=r.add(S,L),S=r.mul(S,M),P=r.add(P,S),L=r.mul(y,$),L=r.add(L,L),S=r.mul(L,M),_=r.sub(_,S),k=r.mul(L,U),k=r.add(k,k),k=r.add(k,k),new d(_,P,k)}add(f){l(f);const{px:m,py:v,pz:b}=this,{px:y,py:$,pz:_}=f;let P=r.ZERO,k=r.ZERO,S=r.ZERO;const U=e.a,L=r.mul(e.b,A1);let M=r.mul(m,y),F=r.mul(v,$),I=r.mul(b,_),E=r.add(m,v),x=r.add(y,$);E=r.mul(E,x),x=r.add(M,F),E=r.sub(E,x),x=r.add(m,b);let T=r.add(y,_);return x=r.mul(x,T),T=r.add(M,I),x=r.sub(x,T),T=r.add(v,b),P=r.add($,_),T=r.mul(T,P),P=r.add(F,I),T=r.sub(T,P),S=r.mul(U,x),P=r.mul(L,I),S=r.add(P,S),P=r.sub(F,S),S=r.add(F,S),k=r.mul(P,S),F=r.add(M,M),F=r.add(F,M),I=r.mul(U,I),x=r.mul(L,x),F=r.add(F,I),I=r.sub(M,I),I=r.mul(U,I),x=r.add(x,I),M=r.mul(F,x),k=r.add(k,M),M=r.mul(T,x),P=r.mul(E,P),P=r.sub(P,M),M=r.mul(E,F),S=r.mul(T,S),S=r.add(S,M),new d(P,k,S)}subtract(f){return this.add(f.negate())}is0(){return this.equals(d.ZERO)}wNAF(f){return w.wNAFCached(this,f,d.normalizeZ)}multiplyUnsafe(f){const{endo:m,n:v}=e;Ss("scalar",f,ui,v);const b=d.ZERO;if(f===ui)return b;if(this.is0()||f===ct)return this;if(!m||w.hasPrecomputes(this))return w.wNAFCachedUnsafe(this,f,d.normalizeZ);let{k1neg:y,k1:$,k2neg:_,k2:P}=m.splitScalar(f),k=b,S=b,U=this;for(;$>ui||P>ui;)$&ct&&(k=k.add(U)),P&ct&&(S=S.add(U)),U=U.double(),$>>=ct,P>>=ct;return y&&(k=k.negate()),_&&(S=S.negate()),S=new d(r.mul(S.px,m.beta),S.py,S.pz),k.add(S)}multiply(f){const{endo:m,n:v}=e;Ss("scalar",f,ct,v);let b,y;if(m){const{k1neg:$,k1:_,k2neg:P,k2:k}=m.splitScalar(f);let{p:S,f:U}=this.wNAF(_),{p:L,f:M}=this.wNAF(k);S=w.constTimeNegate($,S),L=w.constTimeNegate(P,L),L=new d(r.mul(L.px,m.beta),L.py,L.pz),b=S.add(L),y=U.add(M)}else{const{p:$,f:_}=this.wNAF(f);b=$,y=_}return d.normalizeZ([b,y])[0]}multiplyAndAddUnsafe(f,m,v){const b=d.BASE,y=(_,P)=>P===ui||P===ct||!_.equals(b)?_.multiplyUnsafe(P):_.multiply(P),$=y(this,m).add(y(f,v));return $.is0()?void 0:$}toAffine(f){return u(this,f)}isTorsionFree(){const{h:f,isTorsionFree:m}=e;if(f===ct)return!0;if(m)return m(d,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:f,clearCofactor:m}=e;return f===ct?this:m?m(d,this):this.multiplyUnsafe(e.h)}toRawBytes(f=!0){return Wn("isCompressed",f),this.assertValidity(),s(d,this,f)}toHex(f=!0){return Wn("isCompressed",f),Vn(this.toRawBytes(f))}}d.BASE=new d(e.Gx,e.Gy,r.ONE),d.ZERO=new d(r.ZERO,r.ONE,r.ZERO);const p=e.nBitLength,w=dI(d,e.endo?Math.ceil(p/2):p);return{CURVE:e,ProjectivePoint:d,normPrivateKeyToScalar:c,weierstrassEquation:o,isWithinCurveOrder:a}}function bI(t){const e=cm(t);return Xa(e,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...e})}function yI(t){const e=bI(t),{Fp:r,n:i}=e,s=r.BYTES+1,n=2*r.BYTES+1;function o(I){return Bt(I,i)}function a(I){return ud(I,i)}const{ProjectivePoint:c,normPrivateKeyToScalar:l,weierstrassEquation:u,isWithinCurveOrder:h}=vI({...e,toBytes(I,E,x){const T=E.toAffine(),O=r.toBytes(T.x),R=Pa;return Wn("isCompressed",x),x?R(Uint8Array.from([E.hasEvenY()?2:3]),O):R(Uint8Array.from([4]),O,r.toBytes(T.y))},fromBytes(I){const E=I.length,x=I[0],T=I.subarray(1);if(E===s&&(x===2||x===3)){const O=As(T);if(!Jl(O,ct,r.ORDER))throw new Error("Point is not on curve");const R=u(O);let B;try{B=r.sqrt(R)}catch(K){const se=K instanceof Error?": "+K.message:"";throw new Error("Point is not on curve"+se)}const z=(B&ct)===ct;return(x&1)===1!==z&&(B=r.neg(B)),{x:O,y:B}}else if(E===n&&x===4){const O=r.fromBytes(T.subarray(0,r.BYTES)),R=r.fromBytes(T.subarray(r.BYTES,2*r.BYTES));return{x:O,y:R}}else{const O=s,R=n;throw new Error("invalid Point, expected length of "+O+", or uncompressed "+R+", got "+E)}}}),d=I=>Vn(Kn(I,e.nByteLength));function p(I){const E=i>>ct;return I>E}function w(I){return p(I)?o(-I):I}const g=(I,E,x)=>As(I.slice(E,x));class f{constructor(E,x,T){this.r=E,this.s=x,this.recovery=T,this.assertValidity()}static fromCompact(E){const x=e.nByteLength;return E=Ar("compactSignature",E,x*2),new f(g(E,0,x),g(E,x,2*x))}static fromDER(E){const{r:x,s:T}=ci.toSig(Ar("DER",E));return new f(x,T)}assertValidity(){Ss("r",this.r,ct,i),Ss("s",this.s,ct,i)}addRecoveryBit(E){return new f(this.r,this.s,E)}recoverPublicKey(E){const{r:x,s:T,recovery:O}=this,R=_(Ar("msgHash",E));if(O==null||![0,1,2,3].includes(O))throw new Error("recovery id invalid");const B=O===2||O===3?x+e.n:x;if(B>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");const z=(O&1)===0?"02":"03",K=c.fromHex(z+d(B)),se=a(B),re=o(-R*se),ge=o(T*se),be=c.BASE.multiplyAndAddUnsafe(K,re,ge);if(!be)throw new Error("point at infinify");return be.assertValidity(),be}hasHighS(){return p(this.s)}normalizeS(){return this.hasHighS()?new f(this.r,o(-this.s),this.recovery):this}toDERRawBytes(){return Fn(this.toDERHex())}toDERHex(){return ci.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Fn(this.toCompactHex())}toCompactHex(){return d(this.r)+d(this.s)}}const m={isValidPrivateKey(I){try{return l(I),!0}catch{return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>{const I=nm(e.n);return lI(e.randomBytes(I),e.n)},precompute(I=8,E=c.BASE){return E._setWindowSize(I),E.multiply(BigInt(3)),E}};function v(I,E=!0){return c.fromPrivateKey(I).toRawBytes(E)}function b(I){const E=Bs(I),x=typeof I=="string",T=(E||x)&&I.length;return E?T===s||T===n:x?T===2*s||T===2*n:I instanceof c}function y(I,E,x=!0){if(b(I))throw new Error("first arg must be private key");if(!b(E))throw new Error("second arg must be public key");return c.fromHex(E).multiply(l(I)).toRawBytes(x)}const $=e.bits2int||function(I){if(I.length>8192)throw new Error("input is too large");const E=As(I),x=I.length*8-e.nBitLength;return x>0?E>>BigInt(x):E},_=e.bits2int_modN||function(I){return o($(I))},P=Yd(e.nBitLength);function k(I){return Ss("num < 2^"+e.nBitLength,I,ui,P),Kn(I,e.nByteLength)}function S(I,E,x=U){if(["recovered","canonical"].some(xe=>xe in x))throw new Error("sign() legacy options not supported");const{hash:T,randomBytes:O}=e;let{lowS:R,prehash:B,extraEntropy:z}=x;R==null&&(R=!0),I=Ar("msgHash",I),I1(x),B&&(I=Ar("prehashed msgHash",T(I)));const K=_(I),se=l(E),re=[k(se),k(K)];if(z!=null&&z!==!1){const xe=z===!0?O(r.BYTES):z;re.push(Ar("extraEntropy",xe))}const ge=Pa(...re),be=K;function Le(xe){const ye=$(xe);if(!h(ye))return;const je=a(ye),Ve=c.BASE.multiply(ye).toAffine(),Fe=o(Ve.x);if(Fe===ui)return;const Ze=o(je*o(be+Fe*se));if(Ze===ui)return;let xt=(Ve.x===Fe?0:2)|Number(Ve.y&ct),Wi=Ze;return R&&p(Ze)&&(Wi=w(Ze),xt^=1),new f(Fe,Wi,xt)}return{seed:ge,k2sig:Le}}const U={lowS:e.lowS,prehash:!1},L={lowS:e.lowS,prehash:!1};function M(I,E,x=U){const{seed:T,k2sig:O}=S(I,E,x),R=e;return Zw(R.hash.outputLen,R.nByteLength,R.hmac)(T,O)}c.BASE._setWindowSize(8);function F(I,E,x,T=L){var Ze;const O=I;E=Ar("msgHash",E),x=Ar("publicKey",x);const{lowS:R,prehash:B,format:z}=T;if(I1(T),"strict"in T)throw new Error("options.strict was renamed to lowS");if(z!==void 0&&z!=="compact"&&z!=="der")throw new Error("format must be compact or der");const K=typeof O=="string"||Bs(O),se=!K&&!z&&typeof O=="object"&&O!==null&&typeof O.r=="bigint"&&typeof O.s=="bigint";if(!K&&!se)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let re,ge;try{if(se&&(re=new f(O.r,O.s)),K){try{z!=="compact"&&(re=f.fromDER(O))}catch(xt){if(!(xt instanceof ci.Err))throw xt}!re&&z!=="der"&&(re=f.fromCompact(O))}ge=c.fromHex(x)}catch{return!1}if(!re||R&&re.hasHighS())return!1;B&&(E=e.hash(E));const{r:be,s:Le}=re,xe=_(E),ye=a(Le),je=o(xe*ye),Ve=o(be*ye),Fe=(Ze=c.BASE.multiplyAndAddUnsafe(ge,je,Ve))==null?void 0:Ze.toAffine();return Fe?o(Fe.x)===be:!1}return{CURVE:e,getPublicKey:v,getSharedSecret:y,sign:M,verify:F,ProjectivePoint:c,Signature:f,utils:m}}function CI(t){return{hash:t,hmac:(e,...r)=>tm(t,e,jC(...r)),randomBytes:zC}}function EI(t,e){const r=i=>yI({...t,...CI(i)});return{...r(e),create:r}}const lm=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),S1=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),xI=BigInt(1),hd=BigInt(2),_1=(t,e)=>(t+e/hd)/e;function II(t){const e=lm,r=BigInt(3),i=BigInt(6),s=BigInt(11),n=BigInt(22),o=BigInt(23),a=BigInt(44),c=BigInt(88),l=t*t*t%e,u=l*l*t%e,h=sr(u,r,e)*u%e,d=sr(h,r,e)*u%e,p=sr(d,hd,e)*l%e,w=sr(p,s,e)*p%e,g=sr(w,n,e)*w%e,f=sr(g,a,e)*g%e,m=sr(f,c,e)*f%e,v=sr(m,a,e)*g%e,b=sr(v,r,e)*u%e,y=sr(b,o,e)*w%e,$=sr(y,i,e)*l%e,_=sr($,hd,e);if(!dd.eql(dd.sqr(_),t))throw new Error("Cannot find square root");return _}const dd=im(lm,void 0,void 0,{sqrt:II});EI({a:BigInt(0),b:BigInt(7),Fp:dd,n:S1,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:t=>{const e=S1,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),i=-xI*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),s=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),n=r,o=BigInt("0x100000000000000000000000000000000"),a=_1(n*t,e),c=_1(-i*t,e);let l=Bt(t-a*r-c*s,e),u=Bt(-a*i-c*n,e);const h=l>o,d=u>o;if(h&&(l=e-l),d&&(u=e-u),l>o||u>o)throw new Error("splitScalar: Endomorphism failed, k="+t);return{k1neg:h,k1:l,k2neg:d,k2:u}}}},Dw),BigInt(0);const zu={createBalance(t,e){const r={name:t.metadata.name||"",symbol:t.metadata.symbol||"",decimals:t.metadata.decimals||0,value:t.metadata.value||0,price:t.metadata.price||0,iconUrl:t.metadata.iconUrl||""};return{name:r.name,symbol:r.symbol,chainId:e,address:t.address==="native"?void 0:this.convertAddressToCAIP10Address(t.address,e),value:r.value,price:r.price,quantity:{decimals:r.decimals.toString(),numeric:this.convertHexToBalance({hex:t.balance,decimals:r.decimals})},iconUrl:r.iconUrl}},convertHexToBalance({hex:t,decimals:e}){return Pw(BigInt(t),e)},convertAddressToCAIP10Address(t,e){return`${e}:${t}`},createCAIP2ChainId(t,e){return`${e}:${parseInt(t,16)}`},getChainIdHexFromCAIP2ChainId(t){const e=t.split(":");if(e.length<2||!e[1])return"0x0";const r=e[1],i=parseInt(r,10);return isNaN(i)?"0x0":`0x${i.toString(16)}`},isWalletGetAssetsResponse(t){return typeof t!="object"||t===null?!1:Object.values(t).every(e=>Array.isArray(e)&&e.every(r=>this.isValidAsset(r)))},isValidAsset(t){return typeof t=="object"&&t!==null&&typeof t.address=="string"&&typeof t.balance=="string"&&(t.type==="ERC20"||t.type==="NATIVE")&&typeof t.metadata=="object"&&t.metadata!==null&&typeof t.metadata.name=="string"&&typeof t.metadata.symbol=="string"&&typeof t.metadata.decimals=="number"&&typeof t.metadata.price=="number"&&typeof t.metadata.iconUrl=="string"}},$1={async getMyTokensWithBalance(t){const e=ne.state.address,r=C.state.activeCaipNetwork;if(!e||!r)return[];if(r.chainNamespace==="eip155"){const s=await this.getEIP155Balances(e,r);if(s)return this.filterLowQualityTokens(s)}const i=await he.getBalance(e,r.caipNetworkId,t);return this.filterLowQualityTokens(i.balances)},async getEIP155Balances(t,e){var r,i,s;try{const n=zu.getChainIdHexFromCAIP2ChainId(e.caipNetworkId);if(!((s=(i=(r=await ie.getCapabilities(t))==null?void 0:r[n])==null?void 0:i.assetDiscovery)!=null&&s.supported))return null;const o=await ie.walletGetAssets({account:t,chainFilter:[n]});return zu.isWalletGetAssetsResponse(o)?(o[n]||[]).map(a=>zu.createBalance(a,e.caipNetworkId)):null}catch{return null}},filterLowQualityTokens(t){return t.filter(e=>e.quantity.decimals!=="0")},mapBalancesToSwapTokens(t){return(t==null?void 0:t.map(e=>({...e,address:e!=null&&e.address?e.address:C.getActiveNetworkTokenAddress(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1})))||[]}},Ce=De({tokenBalances:[],loading:!1}),k1={state:Ce,subscribe(t){return Et(Ce,()=>t(Ce))},subscribeKey(t,e){return kt(Ce,t,e)},setToken(t){t&&(Ce.token=Ts(t))},setTokenAmount(t){Ce.sendTokenAmount=t},setReceiverAddress(t){Ce.receiverAddress=t},setReceiverProfileImageUrl(t){Ce.receiverProfileImageUrl=t},setReceiverProfileName(t){Ce.receiverProfileName=t},setGasPrice(t){Ce.gasPrice=t},setGasPriceInUsd(t){Ce.gasPriceInUSD=t},setNetworkBalanceInUsd(t){Ce.networkBalanceInUSD=t},setLoading(t){Ce.loading=t},sendToken(){var t;switch((t=C.state.activeCaipNetwork)==null?void 0:t.chainNamespace){case"eip155":this.sendEvmToken();return;case"solana":this.sendSolanaToken();return;default:throw new Error("Unsupported chain")}},sendEvmToken(){var r,i,s,n,o,a;const t=C.state.activeChain,e=(r=ne.state.preferredAccountTypes)==null?void 0:r[t];(i=this.state.token)!=null&&i.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(we.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:e===$i.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:((s=C.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&((n=this.state.token)!=null&&n.quantity.decimals)&&(we.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:e===$i.ACCOUNT_TYPES.SMART_ACCOUNT,token:(o=this.state.token)==null?void 0:o.symbol,amount:this.state.sendTokenAmount,network:((a=C.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async fetchTokenBalance(t){var n,o;Ce.loading=!0;const e=(n=C.state.activeCaipNetwork)==null?void 0:n.caipNetworkId,r=(o=C.state.activeCaipNetwork)==null?void 0:o.chainNamespace,i=C.state.activeCaipAddress,s=i?H.getPlainAddress(i):void 0;if(Ce.lastRetry&&!H.isAllowedRetry(Ce.lastRetry,30*it.ONE_SEC_MS))return Ce.loading=!1,[];try{if(s&&e&&r){const a=await $1.getMyTokensWithBalance();return Ce.tokenBalances=a,Ce.lastRetry=void 0,a}}catch(a){Ce.lastRetry=Date.now(),t==null||t(a),Me.showError("Token Balance Unavailable")}finally{Ce.loading=!1}return[]},fetchNetworkBalance(){if(Ce.tokenBalances.length===0)return;const t=$1.mapBalancesToSwapTokens(Ce.tokenBalances);if(!t)return;const e=t.find(r=>r.address===C.getActiveNetworkTokenAddress());e&&(Ce.networkBalanceInUSD=e?dc.multiply(e.quantity.numeric,e.price).toString():"0")},isInsufficientNetworkTokenForGas(t,e){const r=e||"0";return dc.bigNumber(t).eq(0)?!0:dc.bigNumber(dc.bigNumber(r)).gt(t)},hasInsufficientGasFunds(){var r;const t=C.state.activeChain;let e=!0;return((r=ne.state.preferredAccountTypes)==null?void 0:r[t])===$i.ACCOUNT_TYPES.SMART_ACCOUNT?e=!1:Ce.networkBalanceInUSD&&(e=this.isInsufficientNetworkTokenForGas(Ce.networkBalanceInUSD,Ce.gasPriceInUSD)),e},async sendNativeToken(t){var o,a,c,l,u,h;const e=C.state.activeChain;G.pushTransactionStack({view:"Account",goBack:!1});const r=t.receiverAddress,i=ne.state.address,s=ie.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals)),n="0x";try{await ie.sendTransaction({chainNamespace:"eip155",to:r,address:i,data:n,value:s??BigInt(0),gasPrice:t.gasPrice}),Me.showSuccess("Transaction started"),we.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:((o=ne.state.preferredAccountTypes)==null?void 0:o[e])===$i.ACCOUNT_TYPES.SMART_ACCOUNT,token:((a=this.state.token)==null?void 0:a.symbol)||"",amount:t.sendTokenAmount,network:((c=C.state.activeCaipNetwork)==null?void 0:c.caipNetworkId)||""}}),this.resetSend()}catch(d){console.error("SendController:sendERC20Token - failed to send native token",d);const p=d instanceof Error?d.message:"Unknown error";we.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:p,isSmartAccount:((l=ne.state.preferredAccountTypes)==null?void 0:l[e])===$i.ACCOUNT_TYPES.SMART_ACCOUNT,token:((u=this.state.token)==null?void 0:u.symbol)||"",amount:t.sendTokenAmount,network:((h=C.state.activeCaipNetwork)==null?void 0:h.caipNetworkId)||""}}),Me.showError("Something went wrong")}},async sendERC20Token(t){var r,i,s;G.pushTransactionStack({view:"Account",goBack:!1});const e=ie.parseUnits(t.sendTokenAmount.toString(),Number(t.decimals));try{if(ne.state.address&&t.sendTokenAmount&&t.receiverAddress&&t.tokenAddress){const n=H.getPlainAddress(t.tokenAddress);await ie.writeContract({fromAddress:ne.state.address,tokenAddress:n,args:[t.receiverAddress,e??BigInt(0)],method:"transfer",abi:X7.getERC20Abi(n),chainNamespace:"eip155"}),Me.showSuccess("Transaction started"),this.resetSend()}}catch(n){console.error("SendController:sendERC20Token - failed to send erc20 token",n);const o=n instanceof Error?n.message:"Unknown error";we.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:o,isSmartAccount:((r=ne.state.preferredAccountTypes)==null?void 0:r.eip155)===$i.ACCOUNT_TYPES.SMART_ACCOUNT,token:((i=this.state.token)==null?void 0:i.symbol)||"",amount:t.sendTokenAmount,network:((s=C.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)||""}}),Me.showError("Something went wrong")}},sendSolanaToken(){if(!this.state.sendTokenAmount||!this.state.receiverAddress){Me.showError("Please enter a valid amount and receiver address");return}G.pushTransactionStack({view:"Account",goBack:!1}),ie.sendTransaction({chainNamespace:"solana",to:this.state.receiverAddress,value:this.state.sendTokenAmount}).then(()=>{this.resetSend(),ne.fetchTokenBalance()}).catch(t=>{Me.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send solana transaction",t)})},resetSend(){Ce.token=void 0,Ce.sendTokenAmount=void 0,Ce.receiverAddress=void 0,Ce.receiverProfileImageUrl=void 0,Ce.receiverProfileName=void 0,Ce.loading=!1,Ce.tokenBalances=[]}},qu={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},yc={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},Z=De({chains:sC(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),C={state:Z,subscribe(t){return Et(Z,()=>{t(Z)})},subscribeKey(t,e){return kt(Z,t,e)},subscribeChainProp(t,e,r){let i;return Et(Z.chains,()=>{var n;const s=r||Z.activeChain;if(s){const o=(n=Z.chains.get(s))==null?void 0:n[t];i!==o&&(i=o,e(o))}})},initialize(t,e,r){const{chainId:i,namespace:s}=te.getActiveNetworkProps(),n=e==null?void 0:e.find(c=>c.id.toString()===(i==null?void 0:i.toString())),o=t.find(c=>(c==null?void 0:c.namespace)===s)||(t==null?void 0:t[0]),a=new Set([...(e==null?void 0:e.map(c=>c.chainNamespace))??[]]);((t==null?void 0:t.length)===0||!o)&&(Z.noAdapters=!0),Z.noAdapters||(Z.activeChain=o==null?void 0:o.namespace,Z.activeCaipNetwork=n,this.setChainNetworkData(o==null?void 0:o.namespace,{caipNetwork:n}),Z.activeChain&&pi.set({activeChain:o==null?void 0:o.namespace})),a.forEach(c=>{const l=e==null?void 0:e.filter(u=>u.chainNamespace===c);C.state.chains.set(c,{namespace:c,networkState:De({...yc,caipNetwork:l==null?void 0:l[0]}),accountState:De(qu),caipNetworks:l??[],...r}),this.setRequestedCaipNetworks(l??[],c)})},removeAdapter(t){var e,r;if(Z.activeChain===t){const i=Array.from(Z.chains.entries()).find(([s])=>s!==t);if(i){const s=(r=(e=i[1])==null?void 0:e.caipNetworks)==null?void 0:r[0];s&&this.setActiveCaipNetwork(s)}}Z.chains.delete(t)},addAdapter(t,{networkControllerClient:e,connectionControllerClient:r},i){Z.chains.set(t.namespace,{namespace:t.namespace,networkState:{...yc,caipNetwork:i[0]},accountState:qu,caipNetworks:i,connectionControllerClient:r,networkControllerClient:e}),this.setRequestedCaipNetworks((i==null?void 0:i.filter(s=>s.chainNamespace===t.namespace))??[],t.namespace)},addNetwork(t){var r;const e=Z.chains.get(t.chainNamespace);if(e){const i=[...e.caipNetworks||[]];(r=e.caipNetworks)!=null&&r.find(s=>s.id===t.id)||i.push(t),Z.chains.set(t.chainNamespace,{...e,caipNetworks:i}),this.setRequestedCaipNetworks(i,t.chainNamespace)}},removeNetwork(t,e){var i,s,n;const r=Z.chains.get(t);if(r){const o=((i=Z.activeCaipNetwork)==null?void 0:i.id)===e,a=[...((s=r.caipNetworks)==null?void 0:s.filter(c=>c.id!==e))||[]];o&&((n=r==null?void 0:r.caipNetworks)!=null&&n[0])&&this.setActiveCaipNetwork(r.caipNetworks[0]),Z.chains.set(t,{...r,caipNetworks:a}),this.setRequestedCaipNetworks(a||[],t)}},setAdapterNetworkState(t,e){const r=Z.chains.get(t);r&&(r.networkState={...r.networkState||yc,...e},Z.chains.set(t,r))},setChainAccountData(t,e,r=!0){if(!t)throw new Error("Chain is required to update chain account data");const i=Z.chains.get(t);if(i){const s={...i.accountState||qu,...e};Z.chains.set(t,{...i,accountState:s}),(Z.chains.size===1||Z.activeChain===t)&&(e.caipAddress&&(Z.activeCaipAddress=e.caipAddress),ne.replaceState(s))}},setChainNetworkData(t,e){if(!t)return;const r=Z.chains.get(t);if(r){const i={...r.networkState||yc,...e};Z.chains.set(t,{...r,networkState:i})}},setAccountProp(t,e,r,i=!0){this.setChainAccountData(r,{[t]:e},i),t==="status"&&e==="disconnected"&&r&&J.removeConnectorId(r)},setActiveNamespace(t){var i,s;Z.activeChain=t;const e=t?Z.chains.get(t):void 0,r=(i=e==null?void 0:e.networkState)==null?void 0:i.caipNetwork;r!=null&&r.id&&t&&(Z.activeCaipAddress=(s=e==null?void 0:e.accountState)==null?void 0:s.caipAddress,Z.activeCaipNetwork=r,this.setChainNetworkData(t,{caipNetwork:r}),te.setActiveCaipNetworkId(r==null?void 0:r.caipNetworkId),pi.set({activeChain:t,selectedNetworkId:r==null?void 0:r.caipNetworkId}))},setActiveCaipNetwork(t){var r,i,s;if(!t)return;Z.activeChain!==t.chainNamespace&&this.setIsSwitchingNamespace(!0);const e=Z.chains.get(t.chainNamespace);Z.activeChain=t.chainNamespace,Z.activeCaipNetwork=t,this.setChainNetworkData(t.chainNamespace,{caipNetwork:t}),(r=e==null?void 0:e.accountState)!=null&&r.address?Z.activeCaipAddress=`${t.chainNamespace}:${t.id}:${(i=e==null?void 0:e.accountState)==null?void 0:i.address}`:Z.activeCaipAddress=void 0,this.setAccountProp("caipAddress",Z.activeCaipAddress,t.chainNamespace),e&&ne.replaceState(e.accountState),k1.resetSend(),pi.set({activeChain:Z.activeChain,selectedNetworkId:(s=Z.activeCaipNetwork)==null?void 0:s.caipNetworkId}),te.setActiveCaipNetworkId(t.caipNetworkId),!this.checkIfSupportedNetwork(t.chainNamespace)&&j.state.enableNetworkSwitch&&!j.state.allowUnsupportedChain&&!ie.state.wcBasic&&this.showUnsupportedChainUI()},addCaipNetwork(t){var r;if(!t)return;const e=Z.chains.get(t.chainNamespace);e&&((r=e==null?void 0:e.caipNetworks)==null||r.push(t))},async switchActiveNamespace(t){var s;if(!t)return;const e=t!==C.state.activeChain,r=(s=C.getNetworkData(t))==null?void 0:s.caipNetwork,i=C.getCaipNetworkByNamespace(t,r==null?void 0:r.id);e&&i&&await C.switchActiveNetwork(i)},async switchActiveNetwork(t){var r,i;!((i=(r=C.state.chains.get(C.state.activeChain))==null?void 0:r.caipNetworks)!=null&&i.some(s=>{var n;return s.id===((n=Z.activeCaipNetwork)==null?void 0:n.id)}))&&G.goBack();const e=this.getNetworkControllerClient(t.chainNamespace);e&&(await e.switchCaipNetwork(t),we.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.caipNetworkId}}))},getNetworkControllerClient(t){const e=t||Z.activeChain,r=Z.chains.get(e);if(!r)throw new Error("Chain adapter not found");if(!r.networkControllerClient)throw new Error("NetworkController client not set");return r.networkControllerClient},getConnectionControllerClient(t){const e=t||Z.activeChain;if(!e)throw new Error("Chain is required to get connection controller client");const r=Z.chains.get(e);if(!(r!=null&&r.connectionControllerClient))throw new Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(t,e){var s;let r=Z.activeChain;if(e&&(r=e),!r)return;const i=(s=Z.chains.get(r))==null?void 0:s.accountState;if(i)return i[t]},getNetworkProp(t,e){var i;const r=(i=Z.chains.get(e))==null?void 0:i.networkState;if(r)return r[t]},getRequestedCaipNetworks(t){const e=Z.chains.get(t),{approvedCaipNetworkIds:r=[],requestedCaipNetworks:i=[]}=(e==null?void 0:e.networkState)||{};return H.sortRequestedNetworks(r,i)},getAllRequestedCaipNetworks(){const t=[];return Z.chains.forEach(e=>{const r=this.getRequestedCaipNetworks(e.namespace);t.push(...r)}),t},setRequestedCaipNetworks(t,e){this.setAdapterNetworkState(e,{requestedCaipNetworks:t})},getAllApprovedCaipNetworkIds(){const t=[];return Z.chains.forEach(e=>{const r=this.getApprovedCaipNetworkIds(e.namespace);t.push(...r)}),t},getActiveCaipNetwork(){return Z.activeCaipNetwork},getActiveCaipAddress(){return Z.activeCaipAddress},getApprovedCaipNetworkIds(t){var e,r;return((r=(e=Z.chains.get(t))==null?void 0:e.networkState)==null?void 0:r.approvedCaipNetworkIds)||[]},async setApprovedCaipNetworksData(t){var r;const e=await((r=this.getNetworkControllerClient())==null?void 0:r.getApprovedCaipNetworksData());this.setAdapterNetworkState(t,{approvedCaipNetworkIds:e==null?void 0:e.approvedCaipNetworkIds,supportsAllNetworks:e==null?void 0:e.supportsAllNetworks})},checkIfSupportedNetwork(t,e){const r=e||Z.activeCaipNetwork,i=this.getRequestedCaipNetworks(t);return i.length?i==null?void 0:i.some(s=>s.id===(r==null?void 0:r.id)):!0},checkIfSupportedChainId(t){var e;return Z.activeChain?(e=this.getRequestedCaipNetworks(Z.activeChain))==null?void 0:e.some(r=>r.id===t):!0},setSmartAccountEnabledNetworks(t,e){this.setAdapterNetworkState(e,{smartAccountEnabledNetworks:t})},checkIfSmartAccountEnabled(){var r,i;const t=pw.caipNetworkIdToNumber((r=Z.activeCaipNetwork)==null?void 0:r.caipNetworkId),e=Z.activeChain;return!e||!t?!1:!!((i=this.getNetworkProp("smartAccountEnabledNetworks",e))!=null&&i.includes(Number(t)))},getActiveNetworkTokenAddress(){var i,s;const t=((i=Z.activeCaipNetwork)==null?void 0:i.chainNamespace)||"eip155",e=((s=Z.activeCaipNetwork)==null?void 0:s.id)||1,r=it.NATIVE_TOKEN_ADDRESS[t];return`${t}:${e}:${r}`},showUnsupportedChainUI(){Ee.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const t=Z.activeCaipNetwork;return!!(t!=null&&t.chainNamespace&&it.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(t.chainNamespace))},resetNetwork(t){this.setAdapterNetworkState(t,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(t){const e=t;if(!e)throw new Error("Chain is required to set account prop");Z.activeCaipAddress=void 0,this.setChainAccountData(e,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),J.removeConnectorId(e)},async disconnect(t){const e=wC(t);try{k1.resetSend();const r=await Promise.allSettled(e.map(async([s,n])=>{var o;try{const{caipAddress:a}=this.getAccountData(s)||{};a&&((o=n.connectionControllerClient)!=null&&o.disconnect)&&await n.connectionControllerClient.disconnect(s),this.resetAccount(s),this.resetNetwork(s)}catch(a){throw new Error(`Failed to disconnect chain ${s}: ${a.message}`)}}));ie.resetWcConnection();const i=r.filter(s=>s.status==="rejected");if(i.length>0)throw new Error(i.map(s=>s.reason.message).join(", "));te.deleteConnectedSocialProvider(),t?J.removeConnectorId(t):J.resetConnectorIds(),we.sendEvent({type:"track",event:"DISCONNECT_SUCCESS",properties:{namespace:t||"all"}})}catch(r){console.error(r.message||"Failed to disconnect chains"),we.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:r.message||"Failed to disconnect chains"}})}},setIsSwitchingNamespace(t){Z.isSwitchingNamespace=t},getFirstCaipNetworkSupportsAuthConnector(){var r,i;const t=[];let e;if(Z.chains.forEach(s=>{ae.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(n=>n===s.namespace)&&s.namespace&&t.push(s.namespace)}),t.length>0){const s=t[0];return e=s?(i=(r=Z.chains.get(s))==null?void 0:r.caipNetworks)==null?void 0:i[0]:void 0,e}},getAccountData(t){var e;return t?(e=C.state.chains.get(t))==null?void 0:e.accountState:ne.state},getNetworkData(t){var r;const e=t||Z.activeChain;if(e)return(r=C.state.chains.get(e))==null?void 0:r.networkState},getCaipNetworkByNamespace(t,e){var s,n,o;if(!t)return;const r=C.state.chains.get(t);return((s=r==null?void 0:r.caipNetworks)==null?void 0:s.find(a=>a.id===e))||((n=r==null?void 0:r.networkState)==null?void 0:n.caipNetwork)||((o=r==null?void 0:r.caipNetworks)==null?void 0:o[0])},getRequestedCaipNetworkIds(){const t=J.state.filterByNamespace;return(t?[Z.chains.get(t)]:Array.from(Z.chains.values())).flatMap(e=>(e==null?void 0:e.caipNetworks)||[]).map(e=>e.caipNetworkId)},getCaipNetworks(t){return t?C.getRequestedCaipNetworks(t):C.getAllRequestedCaipNetworks()}},AI={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},um=H.getBlockchainApiUrl(),Wt=De({clientId:null,api:new Hl({baseUrl:um,clientId:null}),supportedChains:{http:[],ws:[]}}),he={state:Wt,async get(t){const{st:e,sv:r}=he.getSdkProperties(),i=j.state.projectId,s={...t.params||{},st:e,sv:r,projectId:i};return Wt.api.get({...t,params:s})},getSdkProperties(){const{sdkType:t,sdkVersion:e}=j.state;return{st:t||"unknown",sv:e||"unknown"}},async isNetworkSupported(t){if(!t)return!1;try{Wt.supportedChains.http.length||await he.getSupportedNetworks()}catch{return!1}return Wt.supportedChains.http.includes(t)},async getSupportedNetworks(){const t=await he.get({path:"v1/supported-chains"});return Wt.supportedChains=t,t},async fetchIdentity({address:t,caipNetworkId:e}){if(!await he.isNetworkSupported(e))return{avatar:"",name:""};const r=te.getIdentityFromCacheForAddress(t);if(r)return r;const i=await he.get({path:`/v1/identity/${t}`,params:{sender:C.state.activeCaipAddress?H.getPlainAddress(C.state.activeCaipAddress):void 0}});return te.updateIdentityCache({address:t,identity:i,timestamp:Date.now()}),i},async fetchTransactions({account:t,cursor:e,onramp:r,signal:i,cache:s,chainId:n}){var o;return await he.isNetworkSupported((o=C.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?he.get({path:`/v1/account/${t}/history`,params:{cursor:e,onramp:r,chainId:n},signal:i,cache:s}):{data:[],next:void 0}},async fetchSwapQuote({amount:t,userAddress:e,from:r,to:i,gasPrice:s}){var n;return await he.isNetworkSupported((n=C.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?he.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:t,userAddress:e,from:r,to:i,gasPrice:s}}):{quotes:[]}},async fetchSwapTokens({chainId:t}){var e;return await he.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?he.get({path:"/v1/convert/tokens",params:{chainId:t}}):{tokens:[]}},async fetchTokenPrice({addresses:t}){var e;return await he.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?Wt.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:t,projectId:j.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]}},async fetchSwapAllowance({tokenAddress:t,userAddress:e}){var r;return await he.isNetworkSupported((r=C.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?he.get({path:"/v1/convert/allowance",params:{tokenAddress:t,userAddress:e},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:t}){var i;const{st:e,sv:r}=he.getSdkProperties();if(!await he.isNetworkSupported((i=C.state.activeCaipNetwork)==null?void 0:i.caipNetworkId))throw new Error("Network not supported for Gas Price");return he.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:t,st:e,sv:r}})},async generateSwapCalldata({amount:t,from:e,to:r,userAddress:i,disableEstimate:s}){var n;if(!await he.isNetworkSupported((n=C.state.activeCaipNetwork)==null?void 0:n.caipNetworkId))throw new Error("Network not supported for Swaps");return Wt.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:t,eip155:{slippage:it.CONVERT_SLIPPAGE_TOLERANCE},projectId:j.state.projectId,from:e,to:r,userAddress:i,disableEstimate:s}})},async generateApproveCalldata({from:t,to:e,userAddress:r}){var n;const{st:i,sv:s}=he.getSdkProperties();if(!await he.isNetworkSupported((n=C.state.activeCaipNetwork)==null?void 0:n.caipNetworkId))throw new Error("Network not supported for Swaps");return he.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:r,from:t,to:e,st:i,sv:s}})},async getBalance(t,e,r){var c;const{st:i,sv:s}=he.getSdkProperties();if(!await he.isNetworkSupported((c=C.state.activeCaipNetwork)==null?void 0:c.caipNetworkId))return Me.showError("Token Balance Unavailable"),{balances:[]};const n=`${e}:${t}`,o=te.getBalanceCacheForCaipAddress(n);if(o)return o;const a=await he.get({path:`/v1/account/${t}/balance`,params:{currency:"usd",chainId:e,forceUpdate:r,st:i,sv:s}});return te.updateBalanceCache({caipAddress:n,balance:a,timestamp:Date.now()}),a},async lookupEnsName(t){var e;return await he.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?he.get({path:`/v1/profile/account/${t}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:t}){var e;return await he.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?he.get({path:`/v1/profile/reverse/${t}`,params:{sender:ne.state.address,apiVersion:"2"}}):[]},async getEnsNameSuggestions(t){var e;return await he.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?he.get({path:`/v1/profile/suggestions/${t}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:t,address:e,message:r,signature:i}){var s;return await he.isNetworkSupported((s=C.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?Wt.api.post({path:"/v1/profile/account",body:{coin_type:t,address:e,message:r,signature:i},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:t,partnerUserId:e,defaultNetwork:r,purchaseAmount:i,paymentAmount:s}){var n;return await he.isNetworkSupported((n=C.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?(await Wt.api.post({path:"/v1/generators/onrampurl",params:{projectId:j.state.projectId},body:{destinationWallets:t,defaultNetwork:r,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:s}})).url:""},async getOnrampOptions(){var t;if(!await he.isNetworkSupported((t=C.state.activeCaipNetwork)==null?void 0:t.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await he.get({path:"/v1/onramp/options"})}catch{return AI}},async getOnrampQuote({purchaseCurrency:t,paymentCurrency:e,amount:r,network:i}){var s;try{return await he.isNetworkSupported((s=C.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?await Wt.api.post({path:"/v1/onramp/quote",params:{projectId:j.state.projectId},body:{purchaseCurrency:t,paymentCurrency:e,amount:r,network:i}}):null}catch{return{coinbaseFee:{amount:r,currency:e.id},networkFee:{amount:r,currency:e.id},paymentSubtotal:{amount:r,currency:e.id},paymentTotal:{amount:r,currency:e.id},purchaseAmount:{amount:r,currency:e.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(t){var e;return await he.isNetworkSupported((e=C.state.activeCaipNetwork)==null?void 0:e.caipNetworkId)?he.get({path:`/v1/sessions/${t}`}):[]},async revokeSmartSession(t,e,r){var i;return await he.isNetworkSupported((i=C.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)?Wt.api.post({path:`/v1/sessions/${t}/revoke`,params:{projectId:j.state.projectId},body:{pci:e,signature:r}}):{success:!1}},setClientId(t){Wt.clientId=t,Wt.api=new Hl({baseUrl:um,clientId:t})}},nr=De({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),ne={state:nr,replaceState(t){t&&Object.assign(nr,Ts(t))},subscribe(t){return C.subscribeChainProp("accountState",e=>{if(e)return t(e)})},subscribeKey(t,e,r){let i;return C.subscribeChainProp("accountState",s=>{if(s){const n=s[t];i!==n&&(i=n,e(n))}},r)},setStatus(t,e){C.setAccountProp("status",t,e)},getCaipAddress(t){return C.getAccountProp("caipAddress",t)},setCaipAddress(t,e){const r=t?H.getPlainAddress(t):void 0;e===C.state.activeChain&&(C.state.activeCaipAddress=t),C.setAccountProp("caipAddress",t,e),C.setAccountProp("address",r,e)},setBalance(t,e,r){C.setAccountProp("balance",t,r),C.setAccountProp("balanceSymbol",e,r)},setProfileName(t,e){C.setAccountProp("profileName",t,e)},setProfileImage(t,e){C.setAccountProp("profileImage",t,e)},setUser(t,e){C.setAccountProp("user",t,e)},setAddressExplorerUrl(t,e){C.setAccountProp("addressExplorerUrl",t,e)},setSmartAccountDeployed(t,e){C.setAccountProp("smartAccountDeployed",t,e)},setCurrentTab(t){C.setAccountProp("currentTab",t,C.state.activeChain)},setTokenBalance(t,e){t&&C.setAccountProp("tokenBalance",t,e)},setShouldUpdateToAddress(t,e){C.setAccountProp("shouldUpdateToAddress",t,e)},setAllAccounts(t,e){C.setAccountProp("allAccounts",t,e)},addAddressLabel(t,e,r){const i=C.getAccountProp("addressLabels",r)||new Map;i.set(t,e),C.setAccountProp("addressLabels",i,r)},removeAddressLabel(t,e){const r=C.getAccountProp("addressLabels",e)||new Map;r.delete(t),C.setAccountProp("addressLabels",r,e)},setConnectedWalletInfo(t,e){C.setAccountProp("connectedWalletInfo",t,e,!1)},setPreferredAccountType(t,e){C.setAccountProp("preferredAccountTypes",{...nr.preferredAccountTypes,[e]:t},e)},setPreferredAccountTypes(t){nr.preferredAccountTypes=t},setSocialProvider(t,e){t&&C.setAccountProp("socialProvider",t,e)},setSocialWindow(t,e){C.setAccountProp("socialWindow",t?Ts(t):void 0,e)},setFarcasterUrl(t,e){C.setAccountProp("farcasterUrl",t,e)},async fetchTokenBalance(t){var n,o;nr.balanceLoading=!0;const e=(n=C.state.activeCaipNetwork)==null?void 0:n.caipNetworkId,r=(o=C.state.activeCaipNetwork)==null?void 0:o.chainNamespace,i=C.state.activeCaipAddress,s=i?H.getPlainAddress(i):void 0;if(nr.lastRetry&&!H.isAllowedRetry(nr.lastRetry,30*it.ONE_SEC_MS))return nr.balanceLoading=!1,[];try{if(s&&e&&r){const a=(await he.getBalance(s,e)).balances.filter(c=>c.quantity.decimals!=="0");return this.setTokenBalance(a,r),nr.lastRetry=void 0,nr.balanceLoading=!1,a}}catch(a){nr.lastRetry=Date.now(),t==null||t(a),Me.showError("Token Balance Unavailable")}finally{nr.balanceLoading=!1}return[]},resetAccount(t){C.resetAccount(t)}},Pt=De({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),Ee={state:Pt,subscribe(t){return Et(Pt,()=>t(Pt))},subscribeKey(t,e){return kt(Pt,t,e)},async open(t){var i;const e=ne.state.status==="connected";ie.state.wcBasic?Y.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await Y.prefetch({fetchConnectorImages:!e,fetchFeaturedWallets:!e,fetchRecommendedWallets:!e}),t!=null&&t.namespace?(await C.switchActiveNamespace(t.namespace),Ee.setLoading(!0,t.namespace)):Ee.setLoading(!0),J.setFilterByNamespace(t==null?void 0:t.namespace);const r=(i=C.getAccountData(t==null?void 0:t.namespace))==null?void 0:i.caipAddress;C.state.noAdapters&&!r?H.isMobile()?G.reset("AllWallets"):G.reset("ConnectingWalletConnectBasic"):t!=null&&t.view?G.reset(t.view,t.data):r?G.reset("Account"):G.reset("Connect"),Pt.open=!0,pi.set({open:!0}),we.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!r}})},close(){const t=j.state.enableEmbedded,e=!!C.state.activeCaipAddress;Pt.open&&we.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}}),Pt.open=!1,Ee.clearLoading(),t?e?G.replace("Account"):G.push("Connect"):pi.set({open:!1}),ie.resetUri()},setLoading(t,e){e&&Pt.loadingNamespaceMap.set(e,t),Pt.loading=t,pi.set({loading:t})},clearLoading(){Pt.loadingNamespaceMap.clear(),Pt.loading=!1},shake(){Pt.shake||(Pt.shake=!0,setTimeout(()=>{Pt.shake=!1},500))}},N1={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},SI={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},_I={providers:nC,selectedProvider:null,error:null,purchaseCurrency:N1,paymentCurrency:SI,purchaseCurrencies:[N1],paymentCurrencies:[],quotesLoading:!1};De(_I);const $I={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:it.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0};De($I);const br=De({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),vn={state:br,subscribe(t){return Et(br,()=>t(br))},subscribeKey(t,e){return kt(br,t,e)},showTooltip({message:t,triggerRect:e,variant:r}){br.open=!0,br.message=t,br.triggerRect=e,br.variant=r},hide(){br.open=!1,br.message="",br.triggerRect={width:0,height:0,top:0,left:0}}},P1=2147483648,kI={convertEVMChainIdToCoinType(t){if(t>=P1)throw new Error("Invalid chainId");return(P1|t)>>>0}},or=De({suggestions:[],loading:!1}),hm={state:or,subscribe(t){return Et(or,()=>t(or))},subscribeKey(t,e){return kt(or,t,e)},async resolveName(t){var e,r;try{return await he.lookupEnsName(t)}catch(i){const s=i;throw new Error(((r=(e=s==null?void 0:s.reasons)==null?void 0:e[0])==null?void 0:r.description)||"Error resolving name")}},async isNameRegistered(t){try{return await he.lookupEnsName(t),!0}catch{return!1}},async getSuggestions(t){try{or.loading=!0,or.suggestions=[];const e=await he.getEnsNameSuggestions(t);return or.suggestions=e.suggestions.map(r=>({...r,name:r.name}))||[],or.suggestions}catch(e){const r=this.parseEnsApiError(e,"Error fetching name suggestions");throw new Error(r)}finally{or.loading=!1}},async getNamesForAddress(t){try{if(!C.state.activeCaipNetwork)return[];const e=te.getEnsFromCacheForAddress(t);if(e)return e;const r=await he.reverseLookupEnsName({address:t});return te.updateEnsCache({address:t,ens:r,timestamp:Date.now()}),r}catch(e){const r=this.parseEnsApiError(e,"Error fetching names for address");throw new Error(r)}},async registerName(t){const e=C.state.activeCaipNetwork;if(!e)throw new Error("Network not found");const r=ne.state.address,i=J.getAuthConnector();if(!r||!i)throw new Error("Address or auth connector not found");or.loading=!0;try{const s=JSON.stringify({name:t,attributes:{},timestamp:Math.floor(Date.now()/1e3)});G.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){or.loading=!1}});const n=await ie.signMessage(s),o=e.id;if(!o)throw new Error("Network not found");const a=kI.convertEVMChainIdToCoinType(Number(o));await he.registerEnsName({coinType:a,address:r,signature:n,message:s}),ne.setProfileName(t,e.chainNamespace),G.replace("RegisterAccountNameSuccess")}catch(s){const n=this.parseEnsApiError(s,`Error registering name ${t}`);throw G.replace("RegisterAccountName"),new Error(n)}finally{or.loading=!1}},validateName(t){return/^[a-zA-Z0-9-]{4,}$/u.test(t)},parseEnsApiError(t,e){var r,i;return((i=(r=t==null?void 0:t.reasons)==null?void 0:r[0])==null?void 0:i.description)||e}};De({isLegalCheckboxChecked:!1});const Ai={EIP155:"eip155",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED"},Cl={NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200"},ConnectorImageIds:{[ae.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ae.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ae.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[ae.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[ae.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[ae.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[ae.CONNECTOR_ID.INJECTED]:"Browser Wallet",[ae.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[ae.CONNECTOR_ID.COINBASE]:"Coinbase",[ae.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[ae.CONNECTOR_ID.LEDGER]:"Ledger",[ae.CONNECTOR_ID.SAFE]:"Safe"}},Qd={getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([r,i])=>{e[`${Ai.EIP155}:${r}`]=i}),e},isLowerCaseMatch(t,e){return(t==null?void 0:t.toLowerCase())===(e==null?void 0:e.toLowerCase())}},Cc={UniversalProviderErrors:{UNAUTHORIZED_DOMAIN_NOT_ALLOWED:{message:"Unauthorized: origin not allowed",alertErrorKey:"INVALID_APP_CONFIGURATION"},JWT_VALIDATION_ERROR:{message:"JWT validation error: JWT Token is not yet valid",alertErrorKey:"JWT_TOKEN_NOT_VALID"},INVALID_KEY:{message:"Unauthorized: invalid key",alertErrorKey:"INVALID_PROJECT_ID"}},ALERT_ERRORS:{SWITCH_NETWORK_NOT_FOUND:{shortMessage:"Network Not Found",longMessage:"Network not found - please make sure it is included in 'networks' array in createAppKit function"},INVALID_APP_CONFIGURATION:{shortMessage:"Invalid App Configuration",longMessage:()=>`Origin ${NI()?window.origin:"unknown"} not found on Allowlist - update configuration on cloud.reown.com`},SOCIALS_TIMEOUT:{shortMessage:"Invalid App Configuration",longMessage:()=>"There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com"},JWT_TOKEN_NOT_VALID:{shortMessage:"Session Expired",longMessage:"Invalid session found on UniversalProvider - please check your time settings and connect again"},INVALID_PROJECT_ID:{shortMessage:"Invalid App Configuration",longMessage:"Invalid Project ID - update configuration"},PROJECT_ID_NOT_CONFIGURED:{shortMessage:"Project ID Not Configured",longMessage:"Project ID Not Configured - update configuration on cloud.reown.com"}}};function NI(){return typeof window<"u"}function PI(t){try{return JSON.stringify(t)}catch{return'"[Circular]"'}}var OI=TI;function TI(t,e,r){var i=r&&r.stringify||PI,s=1;if(typeof t=="object"&&t!==null){var n=e.length+s;if(n===1)return t;var o=new Array(n);o[0]=i(t);for(var a=1;a<n;a++)o[a]=i(e[a]);return o.join(" ")}if(typeof t!="string")return t;var c=e.length;if(c===0)return t;for(var l="",u=1-s,h=-1,d=t&&t.length||0,p=0;p<d;){if(t.charCodeAt(p)===37&&p+1<d){switch(h=h>-1?h:0,t.charCodeAt(p+1)){case 100:case 102:if(u>=c||e[u]==null)break;h<p&&(l+=t.slice(h,p)),l+=Number(e[u]),h=p+2,p++;break;case 105:if(u>=c||e[u]==null)break;h<p&&(l+=t.slice(h,p)),l+=Math.floor(Number(e[u])),h=p+2,p++;break;case 79:case 111:case 106:if(u>=c||e[u]===void 0)break;h<p&&(l+=t.slice(h,p));var w=typeof e[u];if(w==="string"){l+="'"+e[u]+"'",h=p+2,p++;break}if(w==="function"){l+=e[u].name||"<anonymous>",h=p+2,p++;break}l+=i(e[u]),h=p+2,p++;break;case 115:if(u>=c)break;h<p&&(l+=t.slice(h,p)),l+=String(e[u]),h=p+2,p++;break;case 37:h<p&&(l+=t.slice(h,p)),l+="%",h=p+2,p++,u--;break}++u}++p}return h===-1?t:(h<d&&(l+=t.slice(h)),l)}const O1=OI;var ws=Wr;const Oa=HI().console||{},RI={mapHttpRequest:Ec,mapHttpResponse:Ec,wrapRequestSerializer:Hu,wrapResponseSerializer:Hu,wrapErrorSerializer:Hu,req:Ec,res:Ec,err:DI};function LI(t,e){return Array.isArray(t)?t.filter(function(r){return r!=="!stdSerializers.err"}):t===!0?Object.keys(e):!1}function Wr(t){t=t||{},t.browser=t.browser||{};const e=t.browser.transmit;if(e&&typeof e.send!="function")throw Error("pino: transmit option must have a send function");const r=t.browser.write||Oa;t.browser.write&&(t.browser.asObject=!0);const i=t.serializers||{},s=LI(t.browser.serialize,i);let n=t.browser.serialize;Array.isArray(t.browser.serialize)&&t.browser.serialize.indexOf("!stdSerializers.err")>-1&&(n=!1);const o=["error","fatal","warn","info","debug","trace"];typeof r=="function"&&(r.error=r.fatal=r.warn=r.info=r.debug=r.trace=r),t.enabled===!1&&(t.level="silent");const a=t.level||"info",c=Object.create(r);c.log||(c.log=Ta),Object.defineProperty(c,"levelVal",{get:u}),Object.defineProperty(c,"level",{get:h,set:d});const l={transmit:e,serialize:s,asObject:t.browser.asObject,levels:o,timestamp:jI(t)};c.levels=Wr.levels,c.level=a,c.setMaxListeners=c.getMaxListeners=c.emit=c.addListener=c.on=c.prependListener=c.once=c.prependOnceListener=c.removeListener=c.removeAllListeners=c.listeners=c.listenerCount=c.eventNames=c.write=c.flush=Ta,c.serializers=i,c._serialize=s,c._stdErrSerialize=n,c.child=p,e&&(c._logEvent=pd());function u(){return this.level==="silent"?1/0:this.levels.values[this.level]}function h(){return this._level}function d(w){if(w!=="silent"&&!this.levels.values[w])throw Error("unknown level "+w);this._level=w,ln(l,c,"error","log"),ln(l,c,"fatal","error"),ln(l,c,"warn","error"),ln(l,c,"info","log"),ln(l,c,"debug","log"),ln(l,c,"trace","log")}function p(w,g){if(!w)throw new Error("missing bindings for child Pino");g=g||{},s&&w.serializers&&(g.serializers=w.serializers);const f=g.serializers;if(s&&f){var m=Object.assign({},i,f),v=t.browser.serialize===!0?Object.keys(m):s;delete w.serializers,Xl([w],v,m,this._stdErrSerialize)}function b(y){this._childLevel=(y._childLevel|0)+1,this.error=un(y,w,"error"),this.fatal=un(y,w,"fatal"),this.warn=un(y,w,"warn"),this.info=un(y,w,"info"),this.debug=un(y,w,"debug"),this.trace=un(y,w,"trace"),m&&(this.serializers=m,this._serialize=v),e&&(this._logEvent=pd([].concat(y._logEvent.bindings,w)))}return b.prototype=this,new b(this)}return c}Wr.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},Wr.stdSerializers=RI,Wr.stdTimeFunctions=Object.assign({},{nullTime:dm,epochTime:pm,unixTime:zI,isoTime:qI});function ln(t,e,r,i){const s=Object.getPrototypeOf(e);e[r]=e.levelVal>e.levels.values[r]?Ta:s[r]?s[r]:Oa[r]||Oa[i]||Ta,UI(t,e,r)}function UI(t,e,r){!t.transmit&&e[r]===Ta||(e[r]=function(i){return function(){const s=t.timestamp(),n=new Array(arguments.length),o=Object.getPrototypeOf&&Object.getPrototypeOf(this)===Oa?Oa:this;for(var a=0;a<n.length;a++)n[a]=arguments[a];if(t.serialize&&!t.asObject&&Xl(n,this._serialize,this.serializers,this._stdErrSerialize),t.asObject?i.call(o,BI(this,r,n,s)):i.apply(o,n),t.transmit){const c=t.transmit.level||e.level,l=Wr.levels.values[c],u=Wr.levels.values[r];if(u<l)return;MI(this,{ts:s,methodLevel:r,methodValue:u,transmitValue:Wr.levels.values[t.transmit.level||e.level],send:t.transmit.send,val:e.levelVal},n)}}}(e[r]))}function BI(t,e,r,i){t._serialize&&Xl(r,t._serialize,t.serializers,t._stdErrSerialize);const s=r.slice();let n=s[0];const o={};i&&(o.time=i),o.level=Wr.levels.values[e];let a=(t._childLevel|0)+1;if(a<1&&(a=1),n!==null&&typeof n=="object"){for(;a--&&typeof s[0]=="object";)Object.assign(o,s.shift());n=s.length?O1(s.shift(),s):void 0}else typeof n=="string"&&(n=O1(s.shift(),s));return n!==void 0&&(o.msg=n),o}function Xl(t,e,r,i){for(const s in t)if(i&&t[s]instanceof Error)t[s]=Wr.stdSerializers.err(t[s]);else if(typeof t[s]=="object"&&!Array.isArray(t[s]))for(const n in t[s])e&&e.indexOf(n)>-1&&n in r&&(t[s][n]=r[n](t[s][n]))}function un(t,e,r){return function(){const i=new Array(1+arguments.length);i[0]=e;for(var s=1;s<i.length;s++)i[s]=arguments[s-1];return t[r].apply(this,i)}}function MI(t,e,r){const i=e.send,s=e.ts,n=e.methodLevel,o=e.methodValue,a=e.val,c=t._logEvent.bindings;Xl(r,t._serialize||Object.keys(t.serializers),t.serializers,t._stdErrSerialize===void 0?!0:t._stdErrSerialize),t._logEvent.ts=s,t._logEvent.messages=r.filter(function(l){return c.indexOf(l)===-1}),t._logEvent.level.label=n,t._logEvent.level.value=o,i(n,t._logEvent,a),t._logEvent=pd(c)}function pd(t){return{ts:0,messages:[],bindings:t||[],level:{label:"",value:0}}}function DI(t){const e={type:t.constructor.name,msg:t.message,stack:t.stack};for(const r in t)e[r]===void 0&&(e[r]=t[r]);return e}function jI(t){return typeof t.timestamp=="function"?t.timestamp:t.timestamp===!1?dm:pm}function Ec(){return{}}function Hu(t){return t}function Ta(){}function dm(){return!1}function pm(){return Date.now()}function zI(){return Math.round(Date.now()/1e3)}function qI(){return new Date(Date.now()).toISOString()}function HI(){function t(e){return typeof e<"u"&&e}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return t(self)||t(window)||t(this)||{}}}const WI=t=>JSON.stringify(t,(e,r)=>typeof r=="bigint"?r.toString()+"n":r);function T1(t){return typeof t=="string"?t:WI(t)||""}const VI={level:"info"},ep=1e3*1024;class FI{constructor(e){this.nodeValue=e,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class R1{constructor(e){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=e,this.sizeInBytes=0}append(e){const r=new FI(e);if(r.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${r.size}`);for(;this.size+r.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=r),this.tail=r):(this.head=r,this.tail=r),this.lengthInNodes++,this.sizeInBytes+=r.size}shift(){if(!this.head)return;const e=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=e.size}toArray(){const e=[];let r=this.head;for(;r!==null;)e.push(r.value),r=r.next;return e}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let e=this.head;return{next:()=>{if(!e)return{done:!0,value:null};const r=e.value;return e=e.next,{done:!1,value:r}}}}}class gm{constructor(e,r=ep){this.level=e??"error",this.levelValue=ws.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=r,this.logs=new R1(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(e,r){r===ws.levels.values.error?console.error(e):r===ws.levels.values.warn?console.warn(e):r===ws.levels.values.debug?console.debug(e):r===ws.levels.values.trace?console.trace(e):console.log(e)}appendToLogs(e){this.logs.append(T1({timestamp:new Date().toISOString(),log:e}));const r=typeof e=="string"?JSON.parse(e).level:e.level;r>=this.levelValue&&this.forwardToConsole(e,r)}getLogs(){return this.logs}clearLogs(){this.logs=new R1(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(e){const r=this.getLogArray();return r.push(T1({extraMetadata:e})),new Blob(r,{type:"application/json"})}}class KI{constructor(e,r=ep){this.baseChunkLogger=new gm(e,r)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}downloadLogsBlobInBrowser(e){const r=URL.createObjectURL(this.logsToBlob(e)),i=document.createElement("a");i.href=r,i.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}}class ZI{constructor(e,r=ep){this.baseChunkLogger=new gm(e,r)}write(e){this.baseChunkLogger.appendToLogs(e)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(e){return this.baseChunkLogger.logsToBlob(e)}}var GI=Object.defineProperty,YI=Object.defineProperties,JI=Object.getOwnPropertyDescriptors,L1=Object.getOwnPropertySymbols,XI=Object.prototype.hasOwnProperty,QI=Object.prototype.propertyIsEnumerable,U1=(t,e,r)=>e in t?GI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,El=(t,e)=>{for(var r in e||(e={}))XI.call(e,r)&&U1(t,r,e[r]);if(L1)for(var r of L1(e))QI.call(e,r)&&U1(t,r,e[r]);return t},xl=(t,e)=>YI(t,JI(e));function eA(t){return xl(El({},t),{level:(t==null?void 0:t.level)||VI.level})}function tA(t){var e,r;const i=new KI((e=t.opts)==null?void 0:e.level,t.maxSizeInBytes);return{logger:ws(xl(El({},t.opts),{level:"trace",browser:xl(El({},(r=t.opts)==null?void 0:r.browser),{write:s=>i.write(s)})})),chunkLoggerController:i}}function rA(t){var e;const r=new ZI((e=t.opts)==null?void 0:e.level,t.maxSizeInBytes);return{logger:ws(xl(El({},t.opts),{level:"trace"})),chunkLoggerController:r}}function iA(t){return typeof t.loggerOverride<"u"&&typeof t.loggerOverride!="string"?{logger:t.loggerOverride,chunkLoggerController:null}:typeof window<"u"?tA(t):rA(t)}const sA={createLogger(t,e="error"){const r=eA({level:e}),{logger:i}=iA({opts:r});return i.error=(...s)=>{for(const n of s)if(n instanceof Error){t(n,...s);return}t(void 0,...s)},i}},nA="rpc.walletconnect.org";function B1(t,e){const r=new URL("https://rpc.walletconnect.org/v1/");return r.searchParams.set("chainId",t),r.searchParams.set("projectId",e),r.toString()}const Wu=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],bn={extendRpcUrlWithProjectId(t,e){let r=!1;try{r=new URL(t).host===nA}catch{r=!1}if(r){const i=new URL(t);return i.searchParams.has("projectId")||i.searchParams.set("projectId",e),i.toString()}return t},isCaipNetwork(t){return"chainNamespace"in t&&"caipNetworkId"in t},getChainNamespace(t){return this.isCaipNetwork(t)?t.chainNamespace:ae.CHAIN.EVM},getCaipNetworkId(t){return this.isCaipNetwork(t)?t.caipNetworkId:`${ae.CHAIN.EVM}:${t.id}`},getDefaultRpcUrl(t,e,r){var s,n,o;const i=(o=(n=(s=t.rpcUrls)==null?void 0:s.default)==null?void 0:n.http)==null?void 0:o[0];return Wu.includes(e)?B1(e,r):i||""},extendCaipNetwork(t,{customNetworkImageUrls:e,projectId:r,customRpcUrls:i}){var d,p,w,g,f;const s=this.getChainNamespace(t),n=this.getCaipNetworkId(t),o=(d=t.rpcUrls.default.http)==null?void 0:d[0],a=this.getDefaultRpcUrl(t,n,r),c=((g=(w=(p=t==null?void 0:t.rpcUrls)==null?void 0:p.chainDefault)==null?void 0:w.http)==null?void 0:g[0])||o,l=((f=i==null?void 0:i[n])==null?void 0:f.map(m=>m.url))||[],u=[...l,a],h=[...l];return c&&!h.includes(c)&&h.push(c),{...t,chainNamespace:s,caipNetworkId:n,assets:{imageId:Cl.NetworkImageIds[t.id],imageUrl:e==null?void 0:e[t.id]},rpcUrls:{...t.rpcUrls,default:{http:u},chainDefault:{http:h}}}},extendCaipNetworks(t,{customNetworkImageUrls:e,projectId:r,customRpcUrls:i}){return t.map(s=>bn.extendCaipNetwork(s,{customNetworkImageUrls:e,customRpcUrls:i,projectId:r}))},getViemTransport(t,e,r){var s,n,o;const i=[];return r==null||r.forEach(a=>{i.push(vc(a.url,a.config))}),Wu.includes(t.caipNetworkId)&&i.push(vc(B1(t.caipNetworkId,e),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),(o=(n=(s=t==null?void 0:t.rpcUrls)==null?void 0:s.default)==null?void 0:n.http)==null||o.forEach(a=>{i.push(vc(a))}),g1(i)},extendWagmiTransports(t,e,r){if(Wu.includes(t.caipNetworkId)){const i=this.getDefaultRpcUrl(t,t.caipNetworkId,e);return g1([r,vc(i)])}return r},getUnsupportedNetwork(t){return{id:t.split(":")[1],caipNetworkId:t,name:ae.UNSUPPORTED_NETWORK_NAME,chainNamespace:t.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(t){var a;const e=te.getActiveCaipNetworkId(),r=C.getAllRequestedCaipNetworks(),i=Array.from(((a=C.state.chains)==null?void 0:a.keys())||[]),s=e==null?void 0:e.split(":")[0],n=s?i.includes(s):!1,o=r==null?void 0:r.find(c=>c.caipNetworkId===e);return n&&!o&&e?this.getUnsupportedNetwork(e):o||t||(r==null?void 0:r[0])}},Il={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},Ot=De({providers:{...Il},providerIds:{...Il}}),Ke={state:Ot,subscribeKey(t,e){return kt(Ot,t,e)},subscribe(t){return Et(Ot,()=>{t(Ot)})},subscribeProviders(t){return Et(Ot.providers,()=>t(Ot.providers))},setProvider(t,e){e&&(Ot.providers[t]=Ts(e))},getProvider(t){return Ot.providers[t]},setProviderId(t,e){e&&(Ot.providerIds[t]=e)},getProviderId(t){if(t)return Ot.providerIds[t]},reset(){Ot.providers={...Il},Ot.providerIds={...Il}},resetChain(t){Ot.providers[t]=void 0,Ot.providerIds[t]=void 0}};var M1;(function(t){t.Google="google",t.Github="github",t.Apple="apple",t.Facebook="facebook",t.X="x",t.Discord="discord",t.Farcaster="farcaster"})(M1||(M1={}));const Ti={VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}},Ms={filterOutDuplicatesByRDNS(t){const e=j.state.enableEIP6963?J.state.connectors:[],r=te.getRecentWallets(),i=e.map(o=>{var a;return(a=o.info)==null?void 0:a.rdns}).filter(Boolean),s=r.map(o=>o.rdns).filter(Boolean),n=i.concat(s);if(n.includes("io.metamask.mobile")&&H.isMobile()){const o=n.indexOf("io.metamask.mobile");n[o]="io.metamask"}return t.filter(o=>!n.includes(String(o==null?void 0:o.rdns)))},filterOutDuplicatesByIds(t){const e=J.state.connectors.filter(o=>o.type==="ANNOUNCED"||o.type==="INJECTED"),r=te.getRecentWallets(),i=e.map(o=>o.explorerId),s=r.map(o=>o.id),n=i.concat(s);return t.filter(o=>!n.includes(o==null?void 0:o.id))},filterOutDuplicateWallets(t){const e=this.filterOutDuplicatesByRDNS(t);return this.filterOutDuplicatesByIds(e)},markWalletsAsInstalled(t){const{connectors:e}=J.state,r=e.filter(i=>i.type==="ANNOUNCED").reduce((i,s)=>{var n;return(n=s.info)!=null&&n.rdns&&(i[s.info.rdns]=!0),i},{});return t.map(i=>({...i,installed:!!i.rdns&&!!r[i.rdns??""]})).sort((i,s)=>Number(s.installed)-Number(i.installed))},getConnectOrderMethod(t,e){var c;const r=(t==null?void 0:t.connectMethodsOrder)||((c=j.state.features)==null?void 0:c.connectMethodsOrder),i=e||J.state.connectors;if(r)return r;const{injected:s,announced:n}=gi.getConnectorsByType(i,Y.state.recommended,Y.state.featured),o=s.filter(gi.showConnector),a=n.filter(gi.showConnector);return o.length||a.length?["wallet","email","social"]:Ti.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(t){const e=!!t.rdns&&Y.state.excludedWallets.some(i=>i.rdns===t.rdns),r=!!t.name&&Y.state.excludedWallets.some(i=>Qd.isLowerCaseMatch(i.name,t.name));return e||r}},gi={getConnectorsByType(t,e,r){const{customWallets:i}=j.state,s=te.getRecentWallets(),n=Ms.filterOutDuplicateWallets(e),o=Ms.filterOutDuplicateWallets(r),a=t.filter(h=>h.type==="MULTI_CHAIN"),c=t.filter(h=>h.type==="ANNOUNCED"),l=t.filter(h=>h.type==="INJECTED"),u=t.filter(h=>h.type==="EXTERNAL");return{custom:i,recent:s,external:u,multiChain:a,announced:c,injected:l,recommended:n,featured:o}},showConnector(t){var s;const e=(s=t.info)==null?void 0:s.rdns,r=!!e&&Y.state.excludedWallets.some(n=>!!n.rdns&&n.rdns===e),i=!!t.name&&Y.state.excludedWallets.some(n=>Qd.isLowerCaseMatch(n.name,t.name));return!(t.type==="INJECTED"&&(!H.isMobile()&&t.name==="Browser Wallet"||!e&&!ie.checkInstalled()||r||i)||(t.type==="ANNOUNCED"||t.type==="EXTERNAL")&&(r||i))},getIsConnectedWithWC(){return Array.from(C.state.chains.values()).some(t=>J.getConnectorId(t.namespace)===ae.CONNECTOR_ID.WALLET_CONNECT)},getConnectorTypeOrder({recommended:t,featured:e,custom:r,recent:i,announced:s,injected:n,multiChain:o,external:a,overriddenConnectors:c=(l=>(l=j.state.features)==null?void 0:l.connectorTypeOrder)()??[]}){const u=gi.getIsConnectedWithWC(),h=[{type:"walletConnect",isEnabled:j.state.enableWalletConnect&&!u},{type:"recent",isEnabled:i.length>0},{type:"injected",isEnabled:[...n,...s,...o].length>0},{type:"featured",isEnabled:e.length>0},{type:"custom",isEnabled:r&&r.length>0},{type:"external",isEnabled:a.length>0},{type:"recommended",isEnabled:t.length>0}].filter(g=>g.isEnabled),d=new Set(h.map(g=>g.type)),p=c.filter(g=>d.has(g)).map(g=>({type:g,isEnabled:!0})),w=h.filter(({type:g})=>!p.some(({type:f})=>f===g));return Array.from(new Set([...p,...w].map(({type:g})=>g)))}};/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ol=globalThis,tp=ol.ShadowRoot&&(ol.ShadyCSS===void 0||ol.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rp=Symbol(),D1=new WeakMap;class fm{constructor(e,r,i){if(this._$cssResult$=!0,i!==rp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(tp&&e===void 0){const i=r!==void 0&&r.length===1;i&&(e=D1.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&D1.set(r,e))}return e}toString(){return this.cssText}}const hr=t=>new fm(typeof t=="string"?t:t+"",void 0,rp),le=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1],t[0]);return new fm(r,t,rp)},oA=(t,e)=>{if(tp)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const i=document.createElement("style"),s=ol.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=r.cssText,t.appendChild(i)}},j1=tp?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const i of e.cssRules)r+=i.cssText;return hr(r)})(t):t;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{is:aA,defineProperty:cA,getOwnPropertyDescriptor:lA,getOwnPropertyNames:uA,getOwnPropertySymbols:hA,getPrototypeOf:dA}=Object,Bi=globalThis,z1=Bi.trustedTypes,pA=z1?z1.emptyScript:"",Vu=Bi.reactiveElementPolyfillSupport,Qo=(t,e)=>t,Al={toAttribute(t,e){switch(e){case Boolean:t=t?pA:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},ip=(t,e)=>!aA(t,e),q1={attribute:!0,type:String,converter:Al,reflect:!1,useDefault:!1,hasChanged:ip};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Bi.litPropertyMetadata??(Bi.litPropertyMetadata=new WeakMap);class yn extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=q1){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,r);s!==void 0&&cA(this.prototype,e,s)}}static getPropertyDescriptor(e,r,i){const{get:s,set:n}=lA(this.prototype,e)??{get(){return this[r]},set(o){this[r]=o}};return{get:s,set(o){const a=s==null?void 0:s.call(this);n==null||n.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??q1}static _$Ei(){if(this.hasOwnProperty(Qo("elementProperties")))return;const e=dA(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Qo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qo("properties"))){const r=this.properties,i=[...uA(r),...hA(r)];for(const s of i)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[i,s]of r)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[r,i]of this.elementProperties){const s=this._$Eu(r,i);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)r.unshift(j1(s))}else e!==void 0&&r.push(j1(e));return r}static _$Eu(e,r){const i=r.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const i of r.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return oA(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostConnected)==null?void 0:i.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var i;return(i=r.hostDisconnected)==null?void 0:i.call(r)})}attributeChangedCallback(e,r,i){this._$AK(e,i)}_$ET(e,r){var n;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:Al).toAttribute(r,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,r){var n,o;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const a=i.getPropertyOptions(s),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)==null?void 0:n.fromAttribute)!==void 0?a.converter:Al;this._$Em=s,this[s]=c.fromAttribute(r,a.type)??((o=this._$Ej)==null?void 0:o.get(s))??null,this._$Em=null}}requestUpdate(e,r,i){var s;if(e!==void 0){const n=this.constructor,o=this[e];if(i??(i=n.getPropertyOptions(e)),!((i.hasChanged??ip)(o,r)||i.useDefault&&i.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,r,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??r??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(r=void 0),this._$AL.set(e,r)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,o]of this._$Ep)this[n]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[n,o]of s){const{wrapped:a}=o,c=this[n];a!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,o,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(i=this._$EO)==null||i.forEach(s=>{var n;return(n=s.hostUpdate)==null?void 0:n.call(s)}),this.update(r)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}}yn.elementStyles=[],yn.shadowRootOptions={mode:"open"},yn[Qo("elementProperties")]=new Map,yn[Qo("finalized")]=new Map,Vu==null||Vu({ReactiveElement:yn}),(Bi.reactiveElementVersions??(Bi.reactiveElementVersions=[])).push("2.1.0");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ea=globalThis,Sl=ea.trustedTypes,H1=Sl?Sl.createPolicy("lit-html",{createHTML:t=>t}):void 0,wm="$lit$",Ni=`lit$${Math.random().toFixed(9).slice(2)}$`,mm="?"+Ni,gA=`<${mm}>`,Ds=document,Ra=()=>Ds.createComment(""),La=t=>t===null||typeof t!="object"&&typeof t!="function",sp=Array.isArray,fA=t=>sp(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Fu=`[ 	
\f\r]`,vo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W1=/-->/g,V1=/>/g,Gi=RegExp(`>|${Fu}(?:([^\\s"'>=/]+)(${Fu}*=${Fu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),F1=/'/g,K1=/"/g,vm=/^(?:script|style|textarea|title)$/i,bm=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),A=bm(1),W=bm(2),fi=Symbol.for("lit-noChange"),Je=Symbol.for("lit-nothing"),Z1=new WeakMap,ys=Ds.createTreeWalker(Ds,129);function ym(t,e){if(!sp(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return H1!==void 0?H1.createHTML(e):e}const wA=(t,e)=>{const r=t.length-1,i=[];let s,n=e===2?"<svg>":e===3?"<math>":"",o=vo;for(let a=0;a<r;a++){const c=t[a];let l,u,h=-1,d=0;for(;d<c.length&&(o.lastIndex=d,u=o.exec(c),u!==null);)d=o.lastIndex,o===vo?u[1]==="!--"?o=W1:u[1]!==void 0?o=V1:u[2]!==void 0?(vm.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=Gi):u[3]!==void 0&&(o=Gi):o===Gi?u[0]===">"?(o=s??vo,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?Gi:u[3]==='"'?K1:F1):o===K1||o===F1?o=Gi:o===W1||o===V1?o=vo:(o=Gi,s=void 0);const p=o===Gi&&t[a+1].startsWith("/>")?" ":"";n+=o===vo?c+gA:h>=0?(i.push(l),c.slice(0,h)+wm+c.slice(h)+Ni+p):c+Ni+(h===-2?a:p)}return[ym(t,n+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Ua{constructor({strings:e,_$litType$:r},i){let s;this.parts=[];let n=0,o=0;const a=e.length-1,c=this.parts,[l,u]=wA(e,r);if(this.el=Ua.createElement(l,i),ys.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=ys.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(wm)){const d=u[o++],p=s.getAttribute(h).split(Ni),w=/([.?@])?(.*)/.exec(d);c.push({type:1,index:n,name:w[2],strings:p,ctor:w[1]==="."?vA:w[1]==="?"?bA:w[1]==="@"?yA:Ql}),s.removeAttribute(h)}else h.startsWith(Ni)&&(c.push({type:6,index:n}),s.removeAttribute(h));if(vm.test(s.tagName)){const h=s.textContent.split(Ni),d=h.length-1;if(d>0){s.textContent=Sl?Sl.emptyScript:"";for(let p=0;p<d;p++)s.append(h[p],Ra()),ys.nextNode(),c.push({type:2,index:++n});s.append(h[d],Ra())}}}else if(s.nodeType===8)if(s.data===mm)c.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(Ni,h+1))!==-1;)c.push({type:7,index:n}),h+=Ni.length-1}n++}}static createElement(e,r){const i=Ds.createElement("template");return i.innerHTML=e,i}}function Zn(t,e,r=t,i){var o,a;if(e===fi)return e;let s=i!==void 0?(o=r._$Co)==null?void 0:o[i]:r._$Cl;const n=La(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==n&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),n===void 0?s=void 0:(s=new n(t),s._$AT(t,r,i)),i!==void 0?(r._$Co??(r._$Co=[]))[i]=s:r._$Cl=s),s!==void 0&&(e=Zn(t,s._$AS(t,e.values),s,i)),e}class mA{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??Ds).importNode(r,!0);ys.currentNode=s;let n=ys.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new Qa(n,n.nextSibling,this,e):c.type===1?l=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(l=new CA(n,this,e)),this._$AV.push(l),c=i[++a]}o!==(c==null?void 0:c.index)&&(n=ys.nextNode(),o++)}return ys.currentNode=Ds,s}p(e){let r=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,r),r+=i.strings.length-2):i._$AI(e[r])),r++}}class Qa{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,i,s){this.type=2,this._$AH=Je,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Zn(this,e,r),La(e)?e===Je||e==null||e===""?(this._$AH!==Je&&this._$AR(),this._$AH=Je):e!==this._$AH&&e!==fi&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):fA(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Je&&La(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ds.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ua.createElement(ym(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===s)this._$AH.p(r);else{const o=new mA(s,this),a=o.u(this.options);o.p(r),this.T(a),this._$AH=o}}_$AC(e){let r=Z1.get(e.strings);return r===void 0&&Z1.set(e.strings,r=new Ua(e)),r}k(e){sp(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let i,s=0;for(const n of e)s===r.length?r.push(i=new Qa(this.O(Ra()),this.O(Ra()),this,this.options)):i=r[s],i._$AI(n),s++;s<r.length&&(this._$AR(i&&i._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class Ql{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,i,s,n){this.type=1,this._$AH=Je,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Je}_$AI(e,r=this,i,s){const n=this.strings;let o=!1;if(n===void 0)e=Zn(this,e,r,0),o=!La(e)||e!==this._$AH&&e!==fi,o&&(this._$AH=e);else{const a=e;let c,l;for(e=n[0],c=0;c<n.length-1;c++)l=Zn(this,a[i+c],r,c),l===fi&&(l=this._$AH[c]),o||(o=!La(l)||l!==this._$AH[c]),l===Je?e=Je:e!==Je&&(e+=(l??"")+n[c+1]),this._$AH[c]=l}o&&!s&&this.j(e)}j(e){e===Je?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class vA extends Ql{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Je?void 0:e}}class bA extends Ql{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Je)}}class yA extends Ql{constructor(e,r,i,s,n){super(e,r,i,s,n),this.type=5}_$AI(e,r=this){if((e=Zn(this,e,r,0)??Je)===fi)return;const i=this._$AH,s=e===Je&&i!==Je||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Je&&(i===Je||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class CA{constructor(e,r,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Zn(this,e)}}const Ku=ea.litHtmlPolyfillSupport;Ku==null||Ku(Ua,Qa),(ea.litHtmlVersions??(ea.litHtmlVersions=[])).push("3.3.0");const EA=(t,e,r)=>{const i=(r==null?void 0:r.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const n=(r==null?void 0:r.renderBefore)??null;i._$litPart$=s=new Qa(e.insertBefore(Ra(),n),n,void 0,r??{})}return s._$AI(t),s};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const _s=globalThis;class ee extends yn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=EA(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return fi}}var Pg;ee._$litElement$=!0,ee.finalized=!0,(Pg=_s.litElementHydrateSupport)==null||Pg.call(_s,{LitElement:ee});const Zu=_s.litElementPolyfillSupport;Zu==null||Zu({LitElement:ee}),(_s.litElementVersions??(_s.litElementVersions=[])).push("4.2.0");let ta,Mi,Di;function xA(t,e){ta=document.createElement("style"),Mi=document.createElement("style"),Di=document.createElement("style"),ta.textContent=Nn(t).core.cssText,Mi.textContent=Nn(t).dark.cssText,Di.textContent=Nn(t).light.cssText,document.head.appendChild(ta),document.head.appendChild(Mi),document.head.appendChild(Di),Cm(e)}function Cm(t){Mi&&Di&&(t==="light"?(Mi.removeAttribute("media"),Di.media="enabled"):(Di.removeAttribute("media"),Mi.media="enabled"))}function IA(t){ta&&Mi&&Di&&(ta.textContent=Nn(t).core.cssText,Mi.textContent=Nn(t).dark.cssText,Di.textContent=Nn(t).light.cssText)}function Nn(t){return{core:le`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      @keyframes w3m-shake {
        0% {
          transform: scale(1) rotate(0deg);
        }
        20% {
          transform: scale(1) rotate(-1deg);
        }
        40% {
          transform: scale(1) rotate(1.5deg);
        }
        60% {
          transform: scale(1) rotate(-1.5deg);
        }
        80% {
          transform: scale(1) rotate(1deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }
      @keyframes w3m-iframe-fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @keyframes w3m-iframe-zoom-in {
        0% {
          transform: translateY(50px);
          opacity: 0;
        }
        100% {
          transform: translateY(0px);
          opacity: 1;
        }
      }
      @keyframes w3m-iframe-zoom-in-mobile {
        0% {
          transform: scale(0.95);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      :root {
        --w3m-modal-width: 360px;
        --w3m-color-mix-strength: ${hr(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${hr((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${hr((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${hr((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${hr((t==null?void 0:t["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-title-6: calc(var(--w3m-font-size-master) * 2.2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-title-6: -0.88px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;
        --wui-spacing-5xl: 95px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-mdl: 36px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-2lg: 48px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;
        --wui-icon-size-xxl: 28px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-success-125: var(--wui-color-success-base-125);

        --wui-color-warning-100: var(--wui-color-warning-base-100);

        --wui-color-error-100: var(--wui-color-error-base-100);
        --wui-color-error-125: var(--wui-color-error-base-125);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-90: var(--wui-color-blue-base-90);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-wallet-button-bg: var(--wui-wallet-button-bg-base);

        --wui-box-shadow-blue: var(--wui-color-accent-glass-020);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 20%, transparent);

          --wui-color-accent-100: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 100%,
            transparent
          );
          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-color-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-color-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-color-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-color-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-300)
          );
          --wui-color-fg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-325)
          );
          --wui-color-fg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-350)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-300)
          );
          --wui-color-bg-325: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-325)
          );
          --wui-color-bg-350: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-350)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-success-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-125)
          );

          --wui-color-warning-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-warning-base-100)
          );

          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );
          --wui-color-blue-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-100)
          );
          --wui-color-blue-90: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-blue-base-90)
          );
          --wui-color-error-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-125)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );

          --wui-wallet-button-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-wallet-button-bg-base)
          );
        }
      }
    `,light:le`
      :root {
        --w3m-color-mix: ${hr((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${hr(Oi(t,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${hr(Oi(t,"dark")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(230, 100%, 67%, 1);
        --wui-color-blueberry-090: hsla(231, 76%, 61%, 1);
        --wui-color-blueberry-080: hsla(230, 59%, 55%, 1);
        --wui-color-blueberry-050: hsla(231, 100%, 70%, 0.1);

        --wui-color-fg-100: #e4e7e7;
        --wui-color-fg-125: #d0d5d5;
        --wui-color-fg-150: #a8b1b1;
        --wui-color-fg-175: #a8b0b0;
        --wui-color-fg-200: #949e9e;
        --wui-color-fg-225: #868f8f;
        --wui-color-fg-250: #788080;
        --wui-color-fg-275: #788181;
        --wui-color-fg-300: #6e7777;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #363636;

        --wui-color-bg-100: #141414;
        --wui-color-bg-125: #191a1a;
        --wui-color-bg-150: #1e1f1f;
        --wui-color-bg-175: #222525;
        --wui-color-bg-200: #272a2a;
        --wui-color-bg-225: #2c3030;
        --wui-color-bg-250: #313535;
        --wui-color-bg-275: #363b3b;
        --wui-color-bg-300: #3b4040;
        --wui-color-bg-325: #252525;
        --wui-color-bg-350: #ffffff;

        --wui-color-success-base-100: #26d962;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f25a67;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-color-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-color-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-color-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-color-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-color-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-color-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-color-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-color-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-color-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-color-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-color-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-color-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-color-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-color-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-color-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-color-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-color-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-color-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-color-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-color-gray-glass-090: rgba(255, 255, 255, 0.9);

        --wui-color-dark-glass-100: rgba(42, 42, 42, 1);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --w3m-card-embedded-shadow-color: rgb(17 17 18 / 25%);
      }
    `,dark:le`
      :root {
        --w3m-color-mix: ${hr((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${hr(Oi(t,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${hr(Oi(t,"light")["--w3m-background"])};
        --wui-color-accent-base-100: var(--w3m-accent);

        --wui-color-blueberry-100: hsla(231, 100%, 70%, 1);
        --wui-color-blueberry-090: hsla(231, 97%, 72%, 1);
        --wui-color-blueberry-080: hsla(231, 92%, 74%, 1);

        --wui-color-fg-100: #141414;
        --wui-color-fg-125: #2d3131;
        --wui-color-fg-150: #474d4d;
        --wui-color-fg-175: #636d6d;
        --wui-color-fg-200: #798686;
        --wui-color-fg-225: #828f8f;
        --wui-color-fg-250: #8b9797;
        --wui-color-fg-275: #95a0a0;
        --wui-color-fg-300: #9ea9a9;
        --wui-color-fg-325: #9a9a9a;
        --wui-color-fg-350: #d0d0d0;

        --wui-color-bg-100: #ffffff;
        --wui-color-bg-125: #f5fafa;
        --wui-color-bg-150: #f3f8f8;
        --wui-color-bg-175: #eef4f4;
        --wui-color-bg-200: #eaf1f1;
        --wui-color-bg-225: #e5eded;
        --wui-color-bg-250: #e1e9e9;
        --wui-color-bg-275: #dce7e7;
        --wui-color-bg-300: #d8e3e3;
        --wui-color-bg-325: #f3f3f3;
        --wui-color-bg-350: #202020;

        --wui-color-success-base-100: #26b562;
        --wui-color-success-base-125: #30a46b;

        --wui-color-warning-base-100: #f3a13f;

        --wui-color-error-base-100: #f05142;
        --wui-color-error-base-125: #df4a34;

        --wui-color-blue-base-100: rgba(102, 125, 255, 1);
        --wui-color-blue-base-90: rgba(102, 125, 255, 0.9);

        --wui-color-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-color-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-color-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-color-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-color-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-color-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-color-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-color-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-color-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-color-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-color-success-glass-reown-020: rgba(48, 164, 107, 0.2);

        --wui-color-warning-glass-reown-020: rgba(243, 161, 63, 0.2);

        --wui-color-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-color-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-color-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-color-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-color-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-color-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-color-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-color-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-color-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-color-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-color-error-glass-reown-020: rgba(223, 74, 52, 0.2);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-wallet-button-bg-base: var(--wui-color-bg-125);

        --wui-color-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-color-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-color-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-color-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-color-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-color-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-color-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-color-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-color-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-color-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-color-gray-glass-090: rgba(0, 0, 0, 0.9);

        --wui-color-dark-glass-100: rgba(233, 233, 233, 1);

        --w3m-card-embedded-shadow-color: rgb(224 225 233 / 25%);
      }
    `}}const $e=le`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,bt=le`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      box-shadow var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border, box-shadow, border-radius;
    outline: none;
    border: none;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  wui-flex {
    transition: border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius;
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-color-gray-glass-010);
    }
  }

  button:disabled > wui-icon-box {
    opacity: 0.5;
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,ec=le`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-blue-100 {
    color: var(--wui-color-blue-100);
  }

  .wui-color-blue-90 {
    color: var(--wui-color-blue-90);
  }

  .wui-color-error-125 {
    color: var(--wui-color-error-125);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-success-125 {
    color: var(--wui-color-success-125);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    color: var(--wui-color-fg-350);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-error-125 {
    background-color: var(--wui-color-error-125);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-success-125 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }

  .wui-color-fg-325 {
    background-color: var(--wui-color-fg-325);
  }

  .wui-color-fg-350 {
    background-color: var(--wui-color-fg-350);
  }
`,lt={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){try{return new URL(t).hostname}catch{return""}},getTruncateString({string:t,charsStart:e,charsEnd:r,truncate:i}){return t.length<=e+r?t:i==="end"?`${t.substring(0,e)}...`:i==="start"?`...${t.substring(t.length-r)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(r))}`},generateAvatarColors(t){const e=t.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(e),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(i==null?void 0:i.replace("px","")),n=`${s}% ${s}% at 65% 40%`,o=[];for(let a=0;a<5;a+=1){const c=this.tintColor(r,.15*a);o.push(`rgb(${c[0]}, ${c[1]}, ${c[2]})`)}return`
    --local-color-1: ${o[0]};
    --local-color-2: ${o[1]};
    --local-color-3: ${o[2]};
    --local-color-4: ${o[3]};
    --local-color-5: ${o[4]};
    --local-radial-circle: ${n}
   `},hexToRgb(t){const e=parseInt(t,16),r=e>>16&255,i=e>>8&255,s=e&255;return[r,i,s]},tintColor(t,e){const[r,i,s]=t,n=Math.round(r+(255-r)*e),o=Math.round(i+(255-i)*e),a=Math.round(s+(255-s)*e);return[n,o,a]},isNumber(t){return/^[0-9]+$/u.test(t)},getColorTheme(t){var e;return t||(typeof window<"u"&&window.matchMedia?(e=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&e.matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,r){return t.toString().length>=e?Number(t).toFixed(r):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}};function AA(t,e){const{kind:r,elements:i}=e;return{kind:r,elements:i,finisher(s){customElements.get(t)||customElements.define(t,s)}}}function SA(t,e){return customElements.get(t)||customElements.define(t,e),e}function Q(t){return function(e){return typeof e=="function"?SA(t,e):AA(t,e)}}function _A(t){if(t.length>=255)throw new TypeError("Alphabet too long");const e=new Uint8Array(256);for(let l=0;l<e.length;l++)e[l]=255;for(let l=0;l<t.length;l++){const u=t.charAt(l),h=u.charCodeAt(0);if(e[h]!==255)throw new TypeError(u+" is ambiguous");e[h]=l}const r=t.length,i=t.charAt(0),s=Math.log(r)/Math.log(256),n=Math.log(256)/Math.log(r);function o(l){if(l instanceof Uint8Array||(ArrayBuffer.isView(l)?l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength):Array.isArray(l)&&(l=Uint8Array.from(l))),!(l instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(l.length===0)return"";let u=0,h=0,d=0;const p=l.length;for(;d!==p&&l[d]===0;)d++,u++;const w=(p-d)*n+1>>>0,g=new Uint8Array(w);for(;d!==p;){let v=l[d],b=0;for(let y=w-1;(v!==0||b<h)&&y!==-1;y--,b++)v+=256*g[y]>>>0,g[y]=v%r>>>0,v=v/r>>>0;if(v!==0)throw new Error("Non-zero carry");h=b,d++}let f=w-h;for(;f!==w&&g[f]===0;)f++;let m=i.repeat(u);for(;f<w;++f)m+=t.charAt(g[f]);return m}function a(l){if(typeof l!="string")throw new TypeError("Expected String");if(l.length===0)return new Uint8Array;let u=0,h=0,d=0;for(;l[u]===i;)h++,u++;const p=(l.length-u)*s+1>>>0,w=new Uint8Array(p);for(;u<l.length;){const v=l.charCodeAt(u);if(v>255)return;let b=e[v];if(b===255)return;let y=0;for(let $=p-1;(b!==0||y<d)&&$!==-1;$--,y++)b+=r*w[$]>>>0,w[$]=b%256>>>0,b=b/256>>>0;if(b!==0)throw new Error("Non-zero carry");d=y,u++}let g=p-d;for(;g!==p&&w[g]===0;)g++;const f=new Uint8Array(h+(p-g));let m=h;for(;g!==p;)f[m++]=w[g++];return f}function c(l){const u=a(l);if(u)return u;throw new Error("Non-base"+r+" character")}return{encode:o,decodeUnsafe:a,decode:c}}var $A="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",kA=_A($A);const xc={ERROR_CODE_UNRECOGNIZED_CHAIN_ID:4902,ERROR_CODE_DEFAULT:5e3,ERROR_INVALID_CHAIN_ID:32603},Em={gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},NA={block:vE({format(t){var e;return{transactions:(e=t.transactions)==null?void 0:e.map(r=>{if(typeof r=="string")return r;const i=Wd(r);return i.typeHex==="0x7e"&&(i.isSystemTx=r.isSystemTx,i.mint=r.mint?mn(r.mint):void 0,i.sourceHash=r.sourceHash,i.type="deposit"),i}),stateRoot:t.stateRoot}}}),transaction:fE({format(t){const e={};return t.type==="0x7e"&&(e.isSystemTx=t.isSystemTx,e.mint=t.mint?mn(t.mint):void 0,e.sourceHash=t.sourceHash,e.type="deposit"),e}}),transactionReceipt:ax({format(t){return{l1GasPrice:t.l1GasPrice?mn(t.l1GasPrice):null,l1GasUsed:t.l1GasUsed?mn(t.l1GasUsed):null,l1Fee:t.l1Fee?mn(t.l1Fee):null,l1FeeScalar:t.l1FeeScalar?Number(t.l1FeeScalar):null}}})};function PA(t,e){return RA(t)?TA(t):XE(t,e)}const OA={transaction:PA};function TA(t){LA(t);const{sourceHash:e,data:r,from:i,gas:s,isSystemTx:n,mint:o,to:a,value:c}=t,l=[e,i,a??"0x",o?pe(o):"0x",c?pe(c):"0x",s?pe(s):"0x",n?"0x1":"0x",r??"0x"];return Ga(["0x7e",io(l)])}function RA(t){return t.type==="deposit"||typeof t.sourceHash<"u"}function LA(t){const{from:e,to:r}=t;if(e&&!Us(e))throw new Ls({address:e});if(r&&!Us(r))throw new Ls({address:r})}const oe={contracts:Em,formatters:NA,serializers:OA};({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts},$r({id:53456,name:"BirdLayer",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.birdlayer.xyz","https://rpc1.birdlayer.xyz"],webSocket:["wss://rpc.birdlayer.xyz/ws"]}},blockExplorers:{default:{name:"BirdLayer Explorer",url:"https://scan.birdlayer.xyz"}}}));({...oe.contracts});const Gu=1;$r({...oe,id:60808,name:"BOB",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.gobob.xyz"],webSocket:["wss://rpc.gobob.xyz"]}},blockExplorers:{default:{name:"BOB Explorer",url:"https://explorer.gobob.xyz"}},contracts:{...oe.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:23131},l2OutputOracle:{[Gu]:{address:"0xdDa53E23f8a32640b04D7256e651C1db98dB11C1",blockCreated:4462615}},portal:{[Gu]:{address:"0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E",blockCreated:4462615}}},sourceId:Gu});const Yu=11155111;$r({...oe,id:808813,name:"BOB Sepolia",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://bob-sepolia.rpc.gobob.xyz"],webSocket:["wss://bob-sepolia.rpc.gobob.xyz"]}},blockExplorers:{default:{name:"BOB Sepolia Explorer",url:"https://bob-sepolia.explorer.gobob.xyz"}},contracts:{...oe.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:35677},l2OutputOracle:{[Yu]:{address:"0x14D0069452b4AE2b250B395b8adAb771E4267d2f",blockCreated:4462615}},portal:{[Yu]:{address:"0x867B1Aa872b9C8cB5E9F7755feDC45BB24Ad0ae4",blockCreated:4462615}}},testnet:!0,sourceId:Yu});const UA={contracts:Em};({...UA.contracts},$r({id:44,name:"Crab Network",nativeCurrency:{decimals:18,name:"Crab Network Native Token",symbol:"CRAB"},rpcUrls:{default:{http:["https://crab-rpc.darwinia.network"],webSocket:["wss://crab-rpc.darwinia.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://crab-scan.darwinia.network"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:3032593}}})),$r({id:66665,name:"Creator",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.creatorchain.io"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.creatorchain.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11"}},testnet:!0}),{...oe.contracts},{...oe.contracts},$r({id:53457,name:"DODOchain Testnet",nativeCurrency:{decimals:18,name:"DODO",symbol:"DODO"},rpcUrls:{default:{http:["https://dodochain-testnet.alt.technology"],webSocket:["wss://dodochain-testnet.alt.technology/ws"]}},blockExplorers:{default:{name:"DODOchain Testnet (Sepolia) Explorer",url:"https://testnet-scan.dodochain.com"}},testnet:!0});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});const BA=11155111;$r({...oe,id:3397901,network:"funkiSepolia",name:"Funki Sepolia Sandbox",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://funki-testnet.alt.technology"]}},blockExplorers:{default:{name:"Funki Sepolia Sandbox Explorer",url:"https://sepolia-sandbox.funkichain.com/"}},testnet:!0,contracts:{...oe.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1620204}},sourceId:BA});const Ic=17e3;$r({...oe,name:"Garnet Testnet",testnet:!0,id:17069,sourceId:Ic,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.garnetchain.com"],webSocket:["wss://rpc.garnetchain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.garnetchain.com"}},contracts:{...oe.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{[Ic]:{address:"0x57ee40586fbE286AfC75E67cb69511A6D9aF5909",blockCreated:1274684}},l2OutputOracle:{[Ic]:{address:"0xCb8E7AC561b8EF04F2a15865e9fbc0766FEF569B",blockCreated:1274684}},l1StandardBridge:{[Ic]:{address:"0x09bcDd311FE398F80a78BE37E489f5D440DB95DE",blockCreated:1274684}}}});({...oe.contracts});({...oe.contracts},$r({id:701,name:"Koi Network",nativeCurrency:{decimals:18,name:"Koi Network Native Token",symbol:"KRING"},rpcUrls:{default:{http:["https://koi-rpc.darwinia.network"],webSocket:["wss://koi-rpc.darwinia.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://koi-scan.darwinia.network"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:180001}},testnet:!0}));({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});const G1=11155111;$r({...oe,name:"Pyrope Testnet",testnet:!0,id:695569,sourceId:G1,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.pyropechain.com"],webSocket:["wss://rpc.pyropechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://pyrope.blockscout.com"}},contracts:{...oe.contracts,l1StandardBridge:{[G1]:{address:"0xC24932c31D9621aE9e792576152B7ef010cFC2F8"}}}});const Ac=1;$r({...oe,name:"Redstone",id:690,sourceId:Ac,nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.redstonechain.com"],webSocket:["wss://rpc.redstonechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.redstone.xyz"}},contracts:{...oe.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{[Ac]:{address:"0xC7bCb0e8839a28A1cFadd1CF716de9016CdA51ae",blockCreated:19578329}},l2OutputOracle:{[Ac]:{address:"0xa426A052f657AEEefc298b3B5c35a470e4739d69",blockCreated:19578337}},l1StandardBridge:{[Ac]:{address:"0xc473ca7E02af24c129c2eEf51F2aDf0411c1Df69",blockCreated:19578331}}}});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts},{...oe.contracts}),{...oe.contracts};({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});({...oe.contracts});function Pn(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}const Y1=Pn({id:"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",name:"Solana",network:"solana-mainnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!1,chainNamespace:"solana",caipNetworkId:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",deprecatedCaipNetworkId:"solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"}),J1=Pn({id:"EtWTRABZaYq6iMfeYKouRu166VU2xqa1",name:"Solana Devnet",network:"solana-devnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",deprecatedCaipNetworkId:"solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"});Pn({id:"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",name:"Solana Testnet",network:"solana-testnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"}),Pn({id:"000000000019d6689c085ae165831e93",caipNetworkId:"bip122:000000000019d6689c085ae165831e93",chainNamespace:"bip122",name:"Bitcoin",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}}),Pn({id:"000000000933ea01ad0ee984209779ba",caipNetworkId:"bip122:000000000933ea01ad0ee984209779ba",chainNamespace:"bip122",name:"Bitcoin Testnet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});const MA={solana:["solana_signMessage","solana_signTransaction","solana_requestAccounts","solana_getAccounts","solana_signAllTransactions","solana_signAndSendTransaction"],eip155:["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_showCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"],bip122:["sendTransfer","signMessage","signPsbt","getAccountAddresses"]},xm={getMethodsByChainNamespace(t){return MA[t]||[]},createDefaultNamespace(t){return{methods:this.getMethodsByChainNamespace(t),events:["accountsChanged","chainChanged"],chains:[],rpcMap:{}}},applyNamespaceOverrides(t,e){if(!e)return{...t};const r={...t},i=new Set;if(e.methods&&Object.keys(e.methods).forEach(s=>i.add(s)),e.chains&&Object.keys(e.chains).forEach(s=>i.add(s)),e.events&&Object.keys(e.events).forEach(s=>i.add(s)),e.rpcMap&&Object.keys(e.rpcMap).forEach(s=>{const[n]=s.split(":");n&&i.add(n)}),i.forEach(s=>{r[s]||(r[s]=this.createDefaultNamespace(s))}),e.methods&&Object.entries(e.methods).forEach(([s,n])=>{r[s]&&(r[s].methods=n)}),e.chains&&Object.entries(e.chains).forEach(([s,n])=>{r[s]&&(r[s].chains=n)}),e.events&&Object.entries(e.events).forEach(([s,n])=>{r[s]&&(r[s].events=n)}),e.rpcMap){const s=new Set;Object.entries(e.rpcMap).forEach(([n,o])=>{const[a,c]=n.split(":");!a||!c||!r[a]||(r[a].rpcMap||(r[a].rpcMap={}),s.has(a)||(r[a].rpcMap={},s.add(a)),r[a].rpcMap[c]=o)})}return r},createNamespaces(t,e){const r=t.reduce((i,s)=>{const{id:n,chainNamespace:o,rpcUrls:a}=s,c=a.default.http[0];i[o]||(i[o]=this.createDefaultNamespace(o));const l=`${o}:${n}`,u=i[o];switch(u.chains.push(l),l){case Y1.caipNetworkId:u.chains.push(Y1.deprecatedCaipNetworkId);break;case J1.caipNetworkId:u.chains.push(J1.deprecatedCaipNetworkId);break}return u!=null&&u.rpcMap&&c&&(u.rpcMap[n]=c),i},{});return this.applyNamespaceOverrides(r,e)},resolveReownName:async t=>{var r;const e=await hm.resolveName(t);return((r=(Object.values(e==null?void 0:e.addresses)||[])[0])==null?void 0:r.address)||!1},getChainsFromNamespaces(t={}){return Object.values(t).flatMap(e=>{const r=e.chains||[],i=e.accounts.map(s=>{const[n,o]=s.split(":");return`${n}:${o}`});return Array.from(new Set([...r,...i]))})},isSessionEventData(t){return typeof t=="object"&&t!==null&&"id"in t&&"topic"in t&&"params"in t&&typeof t.params=="object"&&t.params!==null&&"chainId"in t.params&&"event"in t.params&&typeof t.params.event=="object"&&t.params.event!==null}};class Im{constructor({provider:e,namespace:r}){this.id=ae.CONNECTOR_ID.WALLET_CONNECT,this.name=Cl.ConnectorNamesMap[ae.CONNECTOR_ID.WALLET_CONNECT],this.type="WALLET_CONNECT",this.imageId=Cl.ConnectorImageIds[ae.CONNECTOR_ID.WALLET_CONNECT],this.getCaipNetworks=C.getCaipNetworks.bind(C),this.caipNetworks=this.getCaipNetworks(),this.provider=e,this.chain=r}get chains(){return this.getCaipNetworks()}async connectWalletConnect(){if(!await this.authenticate()){const e=this.getCaipNetworks(),r=j.state.universalProviderConfigOverride,i=xm.createNamespaces(e,r);await this.provider.connect({optionalNamespaces:i})}return{clientId:await this.provider.client.core.crypto.getClientId(),session:this.provider.session}}async disconnect(){await this.provider.disconnect()}async authenticate(){const e=this.chains.map(r=>r.caipNetworkId);return Ui.universalProviderAuthenticate({universalProvider:this.provider,chains:e,methods:DA})}}const DA=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"];class jA{constructor(e){this.availableConnectors=[],this.eventListeners=new Map,this.getCaipNetworks=r=>C.getCaipNetworks(r),e&&this.construct(e)}construct(e){this.projectId=e.projectId,this.namespace=e.namespace,this.adapterType=e.adapterType}get connectors(){return this.availableConnectors}get networks(){return this.getCaipNetworks(this.namespace)}setAuthProvider(e){this.addConnector({id:ae.CONNECTOR_ID.AUTH,type:"AUTH",name:ae.CONNECTOR_NAMES.AUTH,provider:e,imageId:Cl.ConnectorImageIds[ae.CONNECTOR_ID.AUTH],chain:this.namespace,chains:[]})}addConnector(...e){const r=new Set;this.availableConnectors=[...e,...this.availableConnectors].filter(i=>r.has(i.id)?!1:(r.add(i.id),!0)),this.emit("connectors",this.availableConnectors)}setStatus(e,r){ne.setStatus(e,r)}on(e,r){var i;this.eventListeners.has(e)||this.eventListeners.set(e,new Set),(i=this.eventListeners.get(e))==null||i.add(r)}off(e,r){const i=this.eventListeners.get(e);i&&i.delete(r)}removeAllEventListeners(){this.eventListeners.forEach(e=>{e.clear()})}emit(e,r){const i=this.eventListeners.get(e);i&&i.forEach(s=>s(r))}async connectWalletConnect(e){return{clientId:(await this.getWalletConnectConnector().connectWalletConnect()).clientId}}async switchNetwork(e){var n;const{caipNetwork:r,providerType:i}=e;if(!e.provider)return;const s="provider"in e.provider?e.provider.provider:e.provider;if(i==="WALLET_CONNECT"){s.setDefaultChain(r.caipNetworkId);return}if(s&&i==="AUTH"){const o=s,a=(n=ne.state.preferredAccountTypes)==null?void 0:n[r.chainNamespace];await o.switchNetwork(r.caipNetworkId);const c=await o.getUser({chainId:r.caipNetworkId,preferredAccountType:a});this.emit("switchNetwork",c)}}getWalletConnectConnector(){const e=this.connectors.find(r=>r instanceof Im);if(!e)throw new Error("WalletConnectConnector not found");return e}}class zA extends jA{setUniversalProvider(e){this.addConnector(new Im({provider:e,caipNetworks:this.getCaipNetworks(),namespace:this.namespace}))}async connect(e){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:Number(e.chainId),provider:this.provider,address:""})}async disconnect(){try{await this.getWalletConnectConnector().disconnect()}catch(e){console.warn("UniversalAdapter:disconnect - error",e)}}async getAccounts({namespace:e}){var i,s,n,o,a;const r=((a=(o=(n=(s=(i=this.provider)==null?void 0:i.session)==null?void 0:s.namespaces)==null?void 0:n[e])==null?void 0:o.accounts)==null?void 0:a.map(c=>{const[,,l]=c.split(":");return l}).filter((c,l,u)=>u.indexOf(c)===l))||[];return Promise.resolve({accounts:r.map(c=>H.createAccount(e,c,e==="bip122"?"payment":"eoa"))})}async syncConnectors(){return Promise.resolve()}async getBalance(e){var i,s,n,o,a;if(!(e.caipNetwork&&it.BALANCE_SUPPORTED_CHAINS.includes((i=e.caipNetwork)==null?void 0:i.chainNamespace))||(s=e.caipNetwork)!=null&&s.testnet)return{balance:"0.00",symbol:((n=e.caipNetwork)==null?void 0:n.nativeCurrency.symbol)||""};if(ne.state.balanceLoading&&e.chainId===((o=C.state.activeCaipNetwork)==null?void 0:o.id))return{balance:ne.state.balance||"0.00",symbol:ne.state.balanceSymbol||""};const r=(await ne.fetchTokenBalance()).find(c=>{var l,u;return c.chainId===`${(l=e.caipNetwork)==null?void 0:l.chainNamespace}:${e.chainId}`&&c.symbol===((u=e.caipNetwork)==null?void 0:u.nativeCurrency.symbol)});return{balance:(r==null?void 0:r.quantity.numeric)||"0.00",symbol:(r==null?void 0:r.symbol)||((a=e.caipNetwork)==null?void 0:a.nativeCurrency.symbol)||""}}async signMessage(e){var o,a,c;const{provider:r,message:i,address:s}=e;if(!r)throw new Error("UniversalAdapter:signMessage - provider is undefined");let n="";return((o=C.state.activeCaipNetwork)==null?void 0:o.chainNamespace)===ae.CHAIN.SOLANA?n=(await r.request({method:"solana_signMessage",params:{message:kA.encode(new TextEncoder().encode(i)),pubkey:s}},(a=C.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)).signature:n=await r.request({method:"personal_sign",params:[i,s]},(c=C.state.activeCaipNetwork)==null?void 0:c.caipNetworkId),{signature:n}}async estimateGas(){return Promise.resolve({gas:BigInt(0)})}async getProfile(){return Promise.resolve({profileImage:"",profileName:""})}async sendTransaction(){return Promise.resolve({hash:""})}walletGetAssets(e){return Promise.resolve({})}async writeContract(){return Promise.resolve({hash:""})}async getEnsAddress(){return Promise.resolve({address:!1})}parseUnits(){return 0n}formatUnits(){return"0"}async getCapabilities(){return Promise.resolve({})}async grantPermissions(){return Promise.resolve({})}async revokePermissions(){return Promise.resolve("0x")}async syncConnection(){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:1,provider:this.provider,address:""})}async switchNetwork(e){var s,n,o,a,c,l;const{caipNetwork:r}=e,i=this.getWalletConnectConnector();if(r.chainNamespace===ae.CHAIN.EVM)try{await((s=i.provider)==null?void 0:s.request({method:"wallet_switchEthereumChain",params:[{chainId:pe(r.id)}]}))}catch(u){if(u.code===xc.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||u.code===xc.ERROR_INVALID_CHAIN_ID||u.code===xc.ERROR_CODE_DEFAULT||((o=(n=u==null?void 0:u.data)==null?void 0:n.originalError)==null?void 0:o.code)===xc.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)try{await((l=i.provider)==null?void 0:l.request({method:"wallet_addEthereumChain",params:[{chainId:pe(r.id),rpcUrls:[(a=r==null?void 0:r.rpcUrls.chainDefault)==null?void 0:a.http],chainName:r.name,nativeCurrency:r.nativeCurrency,blockExplorerUrls:[(c=r.blockExplorers)==null?void 0:c.default.url]}]}))}catch{throw new Error("Chain is not supported")}}i.provider.setDefaultChain(r.caipNetworkId)}getWalletConnectProvider(){var e;return(e=this.connectors.find(r=>r.type==="WALLET_CONNECT"))==null?void 0:e.provider}}class qA{constructor(e){this.chainNamespaces=[],this.reportedAlertErrors={},this.getCaipNetwork=(r,i)=>{var s,n,o,a;if(r){const c=(n=(s=C.getNetworkData(r))==null?void 0:s.requestedCaipNetworks)==null?void 0:n.find(u=>u.id===i);return c||((o=C.getNetworkData(r))==null?void 0:o.caipNetwork)||((a=C.getRequestedCaipNetworks(r).filter(u=>u.chainNamespace===r))==null?void 0:a[0])}return C.state.activeCaipNetwork||this.defaultCaipNetwork},this.getCaipNetworkId=()=>{const r=this.getCaipNetwork();if(r)return r.id},this.getCaipNetworks=r=>C.getCaipNetworks(r),this.getActiveChainNamespace=()=>C.state.activeChain,this.setRequestedCaipNetworks=(r,i)=>{C.setRequestedCaipNetworks(r,i)},this.getApprovedCaipNetworkIds=()=>C.getAllApprovedCaipNetworkIds(),this.getCaipAddress=r=>C.state.activeChain===r||!r?C.state.activeCaipAddress:C.getAccountProp("caipAddress",r),this.setClientId=r=>{he.setClientId(r)},this.getProvider=r=>Ke.getProvider(r),this.getProviderType=r=>Ke.getProviderId(r),this.getPreferredAccountType=r=>{var i;return(i=ne.state.preferredAccountTypes)==null?void 0:i[r]},this.setCaipAddress=(r,i)=>{ne.setCaipAddress(r,i)},this.setBalance=(r,i,s)=>{ne.setBalance(r,i,s)},this.setProfileName=(r,i)=>{ne.setProfileName(r,i)},this.setProfileImage=(r,i)=>{ne.setProfileImage(r,i)},this.setUser=(r,i)=>{ne.setUser(r,i),j.state.enableEmbedded&&Ee.close()},this.resetAccount=r=>{ne.resetAccount(r)},this.setCaipNetwork=r=>{C.setActiveCaipNetwork(r)},this.setCaipNetworkOfNamespace=(r,i)=>{C.setChainNetworkData(i,{caipNetwork:r})},this.setAllAccounts=(r,i)=>{ne.setAllAccounts(r,i),j.setHasMultipleAddresses((r==null?void 0:r.length)>1)},this.setStatus=(r,i)=>{ne.setStatus(r,i),J.isConnected()?te.setConnectionStatus("connected"):te.setConnectionStatus("disconnected")},this.getAddressByChainNamespace=r=>C.getAccountProp("address",r),this.setConnectors=r=>{const i=[...J.state.allConnectors,...r];J.setConnectors(i)},this.fetchIdentity=r=>he.fetchIdentity(r),this.getReownName=r=>hm.getNamesForAddress(r),this.getConnectors=()=>J.getConnectors(),this.getConnectorImage=r=>st.getConnectorImage(r),this.setConnectedWalletInfo=(r,i)=>{const s=Ke.getProviderId(i),n=r?{...r,type:s}:void 0;ne.setConnectedWalletInfo(n,i)},this.getIsConnectedState=()=>!!C.state.activeCaipAddress,this.addAddressLabel=(r,i,s)=>{ne.addAddressLabel(r,i,s)},this.removeAddressLabel=(r,i)=>{ne.removeAddressLabel(r,i)},this.getAddress=r=>C.state.activeChain===r||!r?ne.state.address:C.getAccountProp("address",r),this.setApprovedCaipNetworksData=r=>C.setApprovedCaipNetworksData(r),this.resetNetwork=r=>{C.resetNetwork(r)},this.addConnector=r=>{J.addConnector(r)},this.resetWcConnection=()=>{ie.resetWcConnection()},this.setAddressExplorerUrl=(r,i)=>{ne.setAddressExplorerUrl(r,i)},this.setSmartAccountDeployed=(r,i)=>{ne.setSmartAccountDeployed(r,i)},this.setSmartAccountEnabledNetworks=(r,i)=>{C.setSmartAccountEnabledNetworks(r,i)},this.setPreferredAccountType=(r,i)=>{ne.setPreferredAccountType(r,i)},this.setEIP6963Enabled=r=>{j.setEIP6963Enabled(r)},this.handleUnsafeRPCRequest=()=>{if(this.isOpen()){if(this.isTransactionStackEmpty())return;this.redirect("ApproveTransaction")}else this.open({view:"ApproveTransaction"})},this.options=e,this.version=e.sdkVersion,this.caipNetworks=this.extendCaipNetworks(e),this.chainNamespaces=this.getChainNamespacesSet(e.adapters,this.caipNetworks),this.defaultCaipNetwork=this.extendDefaultCaipNetwork(e),this.chainAdapters=this.createAdapters(e.adapters),this.initialize(e)}getChainNamespacesSet(e,r){const i=e==null?void 0:e.map(n=>n.namespace).filter(n=>!!n);if(i!=null&&i.length)return[...new Set(i)];const s=r==null?void 0:r.map(n=>n.chainNamespace);return[...new Set(s)]}async initialize(e){this.initControllers(e),await this.initChainAdapters(),await this.injectModalUi(),this.sendInitializeEvent(e),pi.set({initialized:!0}),await this.syncExistingConnection()}sendInitializeEvent(e){var i;const{...r}=e;delete r.adapters,delete r.universalProvider,we.sendEvent({type:"track",event:"INITIALIZE",properties:{...r,networks:e.networks.map(s=>s.id),siweConfig:{options:((i=e.siweConfig)==null?void 0:i.options)||{}}}})}initControllers(e){this.initializeOptionsController(e),this.initializeChainController(e),this.initializeThemeController(e),this.initializeConnectionController(e),this.initializeConnectorController()}initializeThemeController(e){e.themeMode&&rt.setThemeMode(e.themeMode),e.themeVariables&&rt.setThemeVariables(e.themeVariables)}initializeChainController(e){if(!this.connectionControllerClient||!this.networkControllerClient)throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");C.initialize(e.adapters??[],this.caipNetworks,{connectionControllerClient:this.connectionControllerClient,networkControllerClient:this.networkControllerClient});const r=this.getDefaultNetwork();r&&C.setActiveCaipNetwork(r)}initializeConnectionController(e){ie.setWcBasic(e.basic??!1)}initializeConnectorController(){J.initialize(this.chainNamespaces)}initializeOptionsController(e){var n;j.setDebug(e.debug!==!1),j.setEnableWalletConnect(e.enableWalletConnect!==!1),j.setEnableWalletGuide(e.enableWalletGuide!==!1),j.setEnableWallets(e.enableWallets!==!1),j.setEIP6963Enabled(e.enableEIP6963!==!1),j.setEnableNetworkSwitch(e.enableNetworkSwitch!==!1),j.setEnableAuthLogger(e.enableAuthLogger!==!1),j.setCustomRpcUrls(e.customRpcUrls),j.setSdkVersion(e.sdkVersion),j.setProjectId(e.projectId),j.setEnableEmbedded(e.enableEmbedded),j.setAllWallets(e.allWallets),j.setIncludeWalletIds(e.includeWalletIds),j.setExcludeWalletIds(e.excludeWalletIds),j.setFeaturedWalletIds(e.featuredWalletIds),j.setTokens(e.tokens),j.setTermsConditionsUrl(e.termsConditionsUrl),j.setPrivacyPolicyUrl(e.privacyPolicyUrl),j.setCustomWallets(e.customWallets),j.setFeatures(e.features),j.setAllowUnsupportedChain(e.allowUnsupportedChain),j.setUniversalProviderConfigOverride(e.universalProviderConfigOverride),j.setDefaultAccountTypes(e.defaultAccountTypes);const r=te.getPreferredAccountTypes(),i={...j.state.defaultAccountTypes,...r};ne.setPreferredAccountTypes(i);const s=this.getDefaultMetaData();if(!e.metadata&&s&&(e.metadata=s),j.setMetadata(e.metadata),j.setDisableAppend(e.disableAppend),j.setEnableEmbedded(e.enableEmbedded),j.setSIWX(e.siwx),!e.projectId){Li.open(Cc.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,"error");return}if((n=e.adapters)!=null&&n.find(o=>o.namespace===ae.CHAIN.EVM)&&e.siweConfig){if(e.siwx)throw new Error("Cannot set both `siweConfig` and `siwx` options");j.setSIWX(e.siweConfig.mapToSIWX())}}getDefaultMetaData(){var e,r,i,s;return typeof window<"u"&&typeof document<"u"?{name:((r=(e=document.getElementsByTagName("title"))==null?void 0:e[0])==null?void 0:r.textContent)||"",description:((i=document.querySelector('meta[property="og:description"]'))==null?void 0:i.content)||"",url:window.location.origin,icons:[((s=document.querySelector('link[rel~="icon"]'))==null?void 0:s.href)||""]}:null}setUnsupportedNetwork(e){const r=this.getActiveChainNamespace();if(r){const i=bn.getUnsupportedNetwork(`${r}:${e}`);C.setActiveCaipNetwork(i)}}getDefaultNetwork(){return bn.getCaipNetworkFromStorage(this.defaultCaipNetwork)}extendCaipNetwork(e,r){return bn.extendCaipNetwork(e,{customNetworkImageUrls:r.chainImages,projectId:r.projectId})}extendCaipNetworks(e){return bn.extendCaipNetworks(e.networks,{customNetworkImageUrls:e.chainImages,customRpcUrls:e.customRpcUrls,projectId:e.projectId})}extendDefaultCaipNetwork(e){const r=e.networks.find(i=>{var s;return i.id===((s=e.defaultNetwork)==null?void 0:s.id)});return r?bn.extendCaipNetwork(r,{customNetworkImageUrls:e.chainImages,customRpcUrls:e.customRpcUrls,projectId:e.projectId}):void 0}createClients(){this.connectionControllerClient={connectWalletConnect:async()=>{var n;const e=C.state.activeChain,r=this.getAdapter(e),i=(n=this.getCaipNetwork(e))==null?void 0:n.id;if(!r)throw new Error("Adapter not found");const s=await r.connectWalletConnect(i);this.close(),this.setClientId((s==null?void 0:s.clientId)||null),te.setConnectedNamespaces([...C.state.chains.keys()]),this.chainNamespaces.forEach(o=>{J.setConnectorId(Ai.CONNECTOR_TYPE_WALLET_CONNECT,o)}),await this.syncWalletConnectAccount()},connectExternal:async({id:e,info:r,type:i,provider:s,chain:n,caipNetwork:o})=>{var p,w,g,f,m,v;const a=C.state.activeChain,c=n||a,l=this.getAdapter(c);if(n&&n!==a&&!o){const b=this.getCaipNetworks().find(y=>y.chainNamespace===n);b&&this.setCaipNetwork(b)}if(!l)throw new Error("Adapter not found");const u=this.getCaipNetwork(c),h=await l.connect({id:e,info:r,type:i,provider:s,chainId:(o==null?void 0:o.id)||(u==null?void 0:u.id),rpcUrl:((g=(w=(p=o==null?void 0:o.rpcUrls)==null?void 0:p.default)==null?void 0:w.http)==null?void 0:g[0])||((v=(m=(f=u==null?void 0:u.rpcUrls)==null?void 0:f.default)==null?void 0:m.http)==null?void 0:v[0])});if(!h)return;te.addConnectedNamespace(c),this.syncProvider({...h,chainNamespace:c});const{accounts:d}=await l.getAccounts({namespace:c,id:e});this.setAllAccounts(d,c),this.setStatus("connected",c)},reconnectExternal:async({id:e,info:r,type:i,provider:s})=>{var a;const n=C.state.activeChain,o=this.getAdapter(n);o!=null&&o.reconnect&&(await(o==null?void 0:o.reconnect({id:e,info:r,type:i,provider:s,chainId:(a=this.getCaipNetwork())==null?void 0:a.id})),te.addConnectedNamespace(n))},disconnect:async e=>{const r=e||C.state.activeChain,i=this.getAdapter(r),s=Ke.getProvider(r),n=Ke.getProviderId(r);await(i==null?void 0:i.disconnect({provider:s,providerType:n})),te.removeConnectedNamespace(r),Ke.resetChain(r),this.setUser(void 0,r),this.setStatus("disconnected",r)},checkInstalled:e=>e?e.some(r=>{var i;return!!((i=window.ethereum)!=null&&i[String(r)])}):!!window.ethereum,signMessage:async e=>{var r,i;return((i=await((r=this.getAdapter(C.state.activeChain))==null?void 0:r.signMessage({message:e,address:ne.state.address,provider:Ke.getProvider(C.state.activeChain)})))==null?void 0:i.signature)||""},sendTransaction:async e=>{var r;if(e.chainNamespace===ae.CHAIN.EVM){const i=this.getAdapter(C.state.activeChain),s=Ke.getProvider(C.state.activeChain);return((r=await(i==null?void 0:i.sendTransaction({...e,caipNetwork:this.getCaipNetwork(),provider:s})))==null?void 0:r.hash)||""}return""},estimateGas:async e=>{var r;if(e.chainNamespace===ae.CHAIN.EVM){const i=this.getAdapter(C.state.activeChain),s=Ke.getProvider(C.state.activeChain),n=this.getCaipNetwork();if(!n)throw new Error("CaipNetwork is undefined");return((r=await(i==null?void 0:i.estimateGas({...e,provider:s,caipNetwork:n})))==null?void 0:r.gas)||0n}return 0n},getEnsAvatar:async()=>{var e,r,i;return((i=await((r=this.getAdapter(C.state.activeChain))==null?void 0:r.getProfile({address:ne.state.address,chainId:Number((e=this.getCaipNetwork())==null?void 0:e.id)})))==null?void 0:i.profileImage)||!1},getEnsAddress:async e=>{var s;const r=this.getAdapter(C.state.activeChain),i=this.getCaipNetwork();return i&&((s=await(r==null?void 0:r.getEnsAddress({name:e,caipNetwork:i})))==null?void 0:s.address)||!1},writeContract:async e=>{var o;const r=this.getAdapter(C.state.activeChain),i=this.getCaipNetwork(),s=this.getCaipAddress(),n=Ke.getProvider(C.state.activeChain);if(!i||!s)throw new Error("CaipNetwork or CaipAddress is undefined");return(o=await(r==null?void 0:r.writeContract({...e,caipNetwork:i,provider:n,caipAddress:s})))==null?void 0:o.hash},parseUnits:(e,r)=>{var i;return((i=this.getAdapter(C.state.activeChain))==null?void 0:i.parseUnits({value:e,decimals:r}))??0n},formatUnits:(e,r)=>{var i;return((i=this.getAdapter(C.state.activeChain))==null?void 0:i.formatUnits({value:e,decimals:r}))??"0"},getCapabilities:async e=>{var r;return await((r=this.getAdapter(C.state.activeChain))==null?void 0:r.getCapabilities(e))},grantPermissions:async e=>{var r;return await((r=this.getAdapter(C.state.activeChain))==null?void 0:r.grantPermissions(e))},revokePermissions:async e=>{const r=this.getAdapter(C.state.activeChain);return r!=null&&r.revokePermissions?await r.revokePermissions(e):"0x"},walletGetAssets:async e=>{var r;return await((r=this.getAdapter(C.state.activeChain))==null?void 0:r.walletGetAssets(e))??{}}},this.networkControllerClient={switchCaipNetwork:async e=>await this.switchCaipNetwork(e),getApprovedCaipNetworksData:async()=>this.getApprovedCaipNetworksData()},ie.setClient(this.connectionControllerClient)}getApprovedCaipNetworksData(){var e,r,i,s,n;if(Ke.getProviderId(C.state.activeChain)===Ai.CONNECTOR_TYPE_WALLET_CONNECT){const o=(r=(e=this.universalProvider)==null?void 0:e.session)==null?void 0:r.namespaces;return{supportsAllNetworks:((n=(s=(i=this.universalProvider)==null?void 0:i.session)==null?void 0:s.peer)==null?void 0:n.metadata.name)==="MetaMask Wallet",approvedCaipNetworkIds:this.getChainsFromNamespaces(o)}}return{supportsAllNetworks:!0,approvedCaipNetworkIds:[]}}async switchCaipNetwork(e){var i;if(!e)return;const r=e.chainNamespace;if(this.getAddressByChainNamespace(e.chainNamespace)){const s=Ke.getProvider(r),n=Ke.getProviderId(r);if(e.chainNamespace===C.state.activeChain)await((i=this.getAdapter(r))==null?void 0:i.switchNetwork({caipNetwork:e,provider:s,providerType:n}));else if(this.setCaipNetwork(e),n===Ai.CONNECTOR_TYPE_WALLET_CONNECT)this.syncWalletConnectAccount();else{const o=this.getAddressByChainNamespace(r);o&&this.syncAccount({address:o,chainId:e.id,chainNamespace:r})}}else this.setCaipNetwork(e)}getChainsFromNamespaces(e={}){return Object.values(e).flatMap(r=>{const i=r.chains||[],s=r.accounts.map(n=>{const{chainId:o,chainNamespace:a}=bi.parseCaipAddress(n);return`${a}:${o}`});return Array.from(new Set([...i,...s]))})}createAdapters(e){return this.createClients(),this.chainNamespaces.reduce((r,i)=>{var n;const s=e==null?void 0:e.find(o=>o.namespace===i);return s?(s.construct({namespace:i,projectId:(n=this.options)==null?void 0:n.projectId,networks:this.getCaipNetworks()}),r[i]=s):r[i]=new zA({namespace:i,networks:this.getCaipNetworks()}),r},{})}async initChainAdapter(e){var r;this.onConnectors(e),this.listenAdapter(e),(r=this.chainAdapters)==null||r[e].syncConnectors(this.options,this),await this.createUniversalProviderForAdapter(e)}async initChainAdapters(){await Promise.all(this.chainNamespaces.map(async e=>{await this.initChainAdapter(e)}))}onConnectors(e){var r;(r=this.getAdapter(e))==null||r.on("connectors",this.setConnectors.bind(this))}listenAdapter(e){const r=this.getAdapter(e);if(!r)return;const i=te.getConnectionStatus();i==="connected"?this.setStatus("connecting",e):i==="disconnected"?(te.clearAddressCache(),this.setStatus(i,e)):this.setStatus(i,e),r.on("switchNetwork",({address:s,chainId:n})=>{const o=this.getCaipNetworks().find(l=>l.id===n||l.caipNetworkId===n),a=C.state.activeChain===e,c=C.getAccountProp("address",e);if(o){const l=a&&s?s:c;l&&this.syncAccount({address:l,chainId:o.id,chainNamespace:e})}else this.setUnsupportedNetwork(n)}),r.on("disconnect",this.disconnect.bind(this,e)),r.on("pendingTransactions",()=>{const s=ne.state.address,n=C.state.activeCaipNetwork;!s||!(n!=null&&n.id)||this.updateNativeBalance(s,n.id,n.chainNamespace)}),r.on("accountChanged",({address:s,chainId:n})=>{var a,c;const o=C.state.activeChain===e;o&&n?this.syncAccount({address:s,chainId:n,chainNamespace:e}):o&&((a=C.state.activeCaipNetwork)!=null&&a.id)?this.syncAccount({address:s,chainId:(c=C.state.activeCaipNetwork)==null?void 0:c.id,chainNamespace:e}):this.syncAccountInfo(s,n,e)})}async createUniversalProviderForAdapter(e){var r,i,s;await this.getUniversalProvider(),this.universalProvider&&((s=(i=(r=this.chainAdapters)==null?void 0:r[e])==null?void 0:i.setUniversalProvider)==null||s.call(i,this.universalProvider))}async syncExistingConnection(){await Promise.allSettled(this.chainNamespaces.map(e=>this.syncNamespaceConnection(e)))}async syncNamespaceConnection(e){try{const r=J.getConnectorId(e);switch(this.setStatus("connecting",e),r){case ae.CONNECTOR_ID.WALLET_CONNECT:await this.syncWalletConnectAccount();break;case ae.CONNECTOR_ID.AUTH:break;default:await this.syncAdapterConnection(e)}}catch(r){console.warn("AppKit couldn't sync existing connection",r),this.setStatus("disconnected",e)}}async syncAdapterConnection(e){var o,a,c;const r=this.getAdapter(e),i=J.getConnectorId(e),s=this.getCaipNetwork(e),n=J.getConnectors(e).find(l=>l.id===i);try{if(!r||!n)throw new Error(`Adapter or connector not found for namespace ${e}`);if(!(s!=null&&s.id))throw new Error("CaipNetwork not found");const l=await(r==null?void 0:r.syncConnection({namespace:e,id:n.id,chainId:s.id,rpcUrl:(c=(a=(o=s==null?void 0:s.rpcUrls)==null?void 0:o.default)==null?void 0:a.http)==null?void 0:c[0]}));if(l){const u=await(r==null?void 0:r.getAccounts({namespace:e,id:n.id}));u&&u.accounts.length>0?this.setAllAccounts(u.accounts,e):this.setAllAccounts([H.createAccount(e,l.address,"eoa")],e),this.syncProvider({...l,chainNamespace:e}),await this.syncAccount({...l,chainNamespace:e}),this.setStatus("connected",e)}else this.setStatus("disconnected",e)}catch{this.setStatus("disconnected",e)}}async syncWalletConnectAccount(){const e=this.chainNamespaces.map(async r=>{var a,c,l,u,h;const i=this.getAdapter(r),s=((u=(l=(c=(a=this.universalProvider)==null?void 0:a.session)==null?void 0:c.namespaces)==null?void 0:l[r])==null?void 0:u.accounts)||[],n=(h=C.state.activeCaipNetwork)==null?void 0:h.id,o=s.find(d=>{const{chainId:p}=bi.parseCaipAddress(d);return p===(n==null?void 0:n.toString())})||s[0];if(o){const d=bi.validateCaipAddress(o),{chainId:p,address:w}=bi.parseCaipAddress(d);if(Ke.setProviderId(r,Ai.CONNECTOR_TYPE_WALLET_CONNECT),this.caipNetworks&&C.state.activeCaipNetwork&&(i==null?void 0:i.namespace)!==ae.CHAIN.EVM){const g=i==null?void 0:i.getWalletConnectProvider({caipNetworks:this.getCaipNetworks(),provider:this.universalProvider,activeCaipNetwork:C.state.activeCaipNetwork});Ke.setProvider(r,g)}else Ke.setProvider(r,this.universalProvider);J.setConnectorId(ae.CONNECTOR_ID.WALLET_CONNECT,r),te.addConnectedNamespace(r),this.syncWalletConnectAccounts(r),await this.syncAccount({address:w,chainId:p,chainNamespace:r})}else this.setStatus("disconnected",r);await C.setApprovedCaipNetworksData(r)});await Promise.all(e)}syncWalletConnectAccounts(e){var i,s,n,o,a;const r=(a=(o=(n=(s=(i=this.universalProvider)==null?void 0:i.session)==null?void 0:s.namespaces)==null?void 0:n[e])==null?void 0:o.accounts)==null?void 0:a.map(c=>{const{address:l}=bi.parseCaipAddress(c);return l}).filter((c,l,u)=>u.indexOf(c)===l);r&&this.setAllAccounts(r.map(c=>H.createAccount(e,c,e==="bip122"?"payment":"eoa")),e)}syncProvider({type:e,provider:r,id:i,chainNamespace:s}){Ke.setProviderId(s,e),Ke.setProvider(s,r),J.setConnectorId(i,s)}async syncAccount(e){var h,d;const r=e.chainNamespace===C.state.activeChain,i=C.getCaipNetworkByNamespace(e.chainNamespace,e.chainId),{address:s,chainId:n,chainNamespace:o}=e,{chainId:a}=te.getActiveNetworkProps(),c=n||a,l=((h=C.state.activeCaipNetwork)==null?void 0:h.name)===ae.UNSUPPORTED_NETWORK_NAME,u=C.getNetworkProp("supportsAllNetworks",o);if(this.setStatus("connected",o),!(l&&!u)&&c){let p=this.getCaipNetworks().find(f=>f.id.toString()===c.toString()),w=this.getCaipNetworks().find(f=>f.chainNamespace===o);if(!u&&!p&&!w){const f=this.getApprovedCaipNetworkIds()||[],m=f.find(b=>{var y;return((y=bi.parseCaipNetworkId(b))==null?void 0:y.chainId)===c.toString()}),v=f.find(b=>{var y;return((y=bi.parseCaipNetworkId(b))==null?void 0:y.chainNamespace)===o});p=this.getCaipNetworks().find(b=>b.caipNetworkId===m),w=this.getCaipNetworks().find(b=>b.caipNetworkId===v||"deprecatedCaipNetworkId"in b&&b.deprecatedCaipNetworkId===v)}const g=p||w;(g==null?void 0:g.chainNamespace)===C.state.activeChain?j.state.enableNetworkSwitch&&!j.state.allowUnsupportedChain&&((d=C.state.activeCaipNetwork)==null?void 0:d.name)===ae.UNSUPPORTED_NETWORK_NAME?C.showUnsupportedChainUI():this.setCaipNetwork(g):r||i&&this.setCaipNetworkOfNamespace(i,o),this.syncConnectedWalletInfo(o),Qd.isLowerCaseMatch(s,ne.state.address)||this.syncAccountInfo(s,g==null?void 0:g.id,o),r?await this.syncBalance({address:s,chainId:g==null?void 0:g.id,chainNamespace:o}):await this.syncBalance({address:s,chainId:i==null?void 0:i.id,chainNamespace:o})}}async syncAccountInfo(e,r,i){const s=this.getCaipAddress(i),n=r||(s==null?void 0:s.split(":")[1]);if(!n)return;const o=`${i}:${n}:${e}`;this.setCaipAddress(o,i),await this.syncIdentity({address:e,chainId:n,chainNamespace:i})}async syncReownName(e,r){try{const i=await this.getReownName(e);if(i[0]){const s=i[0];this.setProfileName(s.name,r)}else this.setProfileName(null,r)}catch{this.setProfileName(null,r)}}syncConnectedWalletInfo(e){var s;const r=J.getConnectorId(e),i=Ke.getProviderId(e);if(i===Ai.CONNECTOR_TYPE_ANNOUNCED||i===Ai.CONNECTOR_TYPE_INJECTED){if(r){const n=this.getConnectors().find(o=>o.id===r);if(n){const{info:o,name:a,imageUrl:c}=n,l=c||this.getConnectorImage(n);this.setConnectedWalletInfo({name:a,icon:l,...o},e)}}}else if(i===Ai.CONNECTOR_TYPE_WALLET_CONNECT){const n=Ke.getProvider(e);n!=null&&n.session&&this.setConnectedWalletInfo({...n.session.peer.metadata,name:n.session.peer.metadata.name,icon:(s=n.session.peer.metadata.icons)==null?void 0:s[0]},e)}else if(r)if(r===ae.CONNECTOR_ID.COINBASE){const n=this.getConnectors().find(o=>o.id===ae.CONNECTOR_ID.COINBASE);this.setConnectedWalletInfo({name:"Coinbase Wallet",icon:this.getConnectorImage(n)},e)}else this.setConnectedWalletInfo({name:r},e)}async syncBalance(e){!pw.getNetworksByNamespace(this.getCaipNetworks(),e.chainNamespace).find(r=>{var i;return r.id.toString()===((i=e.chainId)==null?void 0:i.toString())})||!e.chainId||await this.updateNativeBalance(e.address,e.chainId,e.chainNamespace)}async updateNativeBalance(e,r,i){const s=this.getAdapter(i),n=C.getCaipNetworkByNamespace(i,r);if(s){const o=await s.getBalance({address:e,chainId:r,caipNetwork:n,tokens:this.options.tokens});this.setBalance(o.balance,o.symbol,i)}}async initializeUniversalAdapter(){var i,s,n,o,a,c,l,u,h,d;const e=sA.createLogger((p,...w)=>{p&&this.handleAlertError(p),console.error(...w)}),r={projectId:(i=this.options)==null?void 0:i.projectId,metadata:{name:(s=this.options)!=null&&s.metadata?(n=this.options)==null?void 0:n.metadata.name:"",description:(o=this.options)!=null&&o.metadata?(a=this.options)==null?void 0:a.metadata.description:"",url:(c=this.options)!=null&&c.metadata?(l=this.options)==null?void 0:l.metadata.url:"",icons:(u=this.options)!=null&&u.metadata?(h=this.options)==null?void 0:h.metadata.icons:[""]},logger:e};j.setManualWCControl(!!((d=this.options)!=null&&d.manualWCControl)),this.universalProvider=this.options.universalProvider??await jl.init(r),this.listenWalletConnect()}listenWalletConnect(){this.universalProvider&&(this.universalProvider.on("display_uri",e=>{ie.setUri(e)}),this.universalProvider.on("connect",ie.finalizeWcConnection),this.universalProvider.on("disconnect",()=>{this.chainNamespaces.forEach(e=>{this.resetAccount(e)}),ie.resetWcConnection()}),this.universalProvider.on("chainChanged",e=>{const r=this.getCaipNetworks().find(s=>s.id==e),i=this.getCaipNetwork();if(!r){this.setUnsupportedNetwork(e);return}(i==null?void 0:i.id)!==(r==null?void 0:r.id)&&this.setCaipNetwork(r)}),this.universalProvider.on("session_event",e=>{if(xm.isSessionEventData(e)){const{name:r,data:i}=e.params.event;r==="accountsChanged"&&Array.isArray(i)&&H.isCaipAddress(i[0])&&this.syncAccount(bi.parseCaipAddress(i[0]))}}))}createUniversalProvider(){var e;return!this.universalProviderInitPromise&&H.isClient()&&((e=this.options)!=null&&e.projectId)&&(this.universalProviderInitPromise=this.initializeUniversalAdapter()),this.universalProviderInitPromise}async getUniversalProvider(){if(!this.universalProvider)try{await this.createUniversalProvider()}catch(e){we.sendEvent({type:"error",event:"INTERNAL_SDK_ERROR",properties:{errorType:"UniversalProviderInitError",errorMessage:e instanceof Error?e.message:"Unknown",uncaught:!1}}),console.error("AppKit:getUniversalProvider - Cannot create provider",e)}return this.universalProvider}handleAlertError(e){const r=Object.entries(Cc.UniversalProviderErrors).find(([,{message:a}])=>e.message.includes(a)),[i,s]=r??[],{message:n,alertErrorKey:o}=s??{};if(i&&n&&!this.reportedAlertErrors[i]){const a=Cc.ALERT_ERRORS[o];a&&(Li.open(a,"error"),this.reportedAlertErrors[i]=!0)}}getAdapter(e){var r;if(e)return(r=this.chainAdapters)==null?void 0:r[e]}createAdapter(e){var s;if(!e)return;const r=e.namespace;if(!r)return;this.createClients();const i=e;i.namespace=r,i.construct({namespace:r,projectId:(s=this.options)==null?void 0:s.projectId,networks:this.getCaipNetworks()}),this.chainNamespaces.includes(r)||this.chainNamespaces.push(r),this.chainAdapters&&(this.chainAdapters[r]=i)}async open(e){if(await this.injectModalUi(),e!=null&&e.uri&&ie.setUri(e.uri),e==null?void 0:e.arguments)switch(e==null?void 0:e.view){case"Swap":return Ee.open({...e,data:{swap:e.arguments}})}return Ee.open(e)}async close(){await this.injectModalUi(),Ee.close()}setLoading(e,r){Ee.setLoading(e,r)}async disconnect(e){await ie.disconnect(e)}getError(){return""}getChainId(){var e;return(e=C.state.activeCaipNetwork)==null?void 0:e.id}async switchNetwork(e){const r=this.getCaipNetworks().find(i=>i.id===e.id);if(!r){Li.open(Cc.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND,"error");return}await C.switchActiveNetwork(r)}getWalletProvider(){return C.state.activeChain?Ke.state.providers[C.state.activeChain]:null}getWalletProviderType(){return Ke.getProviderId(C.state.activeChain)}subscribeProviders(e){return Ke.subscribeProviders(e)}getThemeMode(){return rt.state.themeMode}getThemeVariables(){return rt.state.themeVariables}setThemeMode(e){rt.setThemeMode(e),Cm(rt.state.themeMode)}setTermsConditionsUrl(e){j.setTermsConditionsUrl(e)}setPrivacyPolicyUrl(e){j.setPrivacyPolicyUrl(e)}setThemeVariables(e){rt.setThemeVariables(e),IA(rt.state.themeVariables)}subscribeTheme(e){return rt.subscribe(e)}getWalletInfo(){return ne.state.connectedWalletInfo}getAccount(e){var n;const r=J.getAuthConnector(e),i=C.getAccountData(e),s=C.state.activeChain;if(i)return{allAccounts:i.allAccounts,caipAddress:i.caipAddress,address:H.getPlainAddress(i.caipAddress),isConnected:!!i.caipAddress,status:i.status,embeddedWalletInfo:r?{user:i.user?{...i.user,username:te.getConnectedSocialUsername()}:void 0,authProvider:i.socialProvider||"email",accountType:(n=i.preferredAccountTypes)==null?void 0:n[e||s],isSmartAccountDeployed:!!i.smartAccountDeployed}:void 0}}subscribeAccount(e,r){const i=()=>{const s=this.getAccount(r);s&&e(s)};r?C.subscribeChainProp("accountState",i,r):C.subscribe(i),J.subscribe(i)}subscribeNetwork(e){return C.subscribe(({activeCaipNetwork:r})=>{e({caipNetwork:r,chainId:r==null?void 0:r.id,caipNetworkId:r==null?void 0:r.caipNetworkId})})}subscribeWalletInfo(e){return ne.subscribeKey("connectedWalletInfo",e)}subscribeShouldUpdateToAddress(e){ne.subscribeKey("shouldUpdateToAddress",e)}subscribeCaipNetworkChange(e){C.subscribeKey("activeCaipNetwork",e)}getState(){return pi.state}subscribeState(e){return pi.subscribe(e)}showErrorMessage(e){Me.showError(e)}showSuccessMessage(e){Me.showSuccess(e)}getEvent(){return{...we.state}}subscribeEvents(e){return we.subscribe(e)}replace(e){G.replace(e)}redirect(e){G.push(e)}popTransactionStack(e){G.popTransactionStack(e)}isOpen(){return Ee.state.open}isTransactionStackEmpty(){return G.state.transactionStack.length===0}isTransactionShouldReplaceView(){var e;return(e=G.state.transactionStack[G.state.transactionStack.length-1])==null?void 0:e.replace}static getInstance(){return this.instance}updateFeatures(e){j.setFeatures(e)}updateOptions(e){const r={...j.state||{},...e};j.setOptions(r)}setConnectMethodsOrder(e){j.setConnectMethodsOrder(e)}setWalletFeaturesOrder(e){j.setWalletFeaturesOrder(e)}setCollapseWallets(e){j.setCollapseWallets(e)}setSocialsOrder(e){j.setSocialsOrder(e)}getConnectMethodsOrder(){return Ms.getConnectOrderMethod(j.state.features,J.getConnectors())}addNetwork(e,r){if(this.chainAdapters&&!this.chainAdapters[e])throw new Error(`Adapter for namespace ${e} doesn't exist`);const i=this.extendCaipNetwork(r,this.options);this.getCaipNetworks().find(s=>s.id===i.id)||C.addNetwork(i)}removeNetwork(e,r){if(this.chainAdapters&&!this.chainAdapters[e])throw new Error(`Adapter for namespace ${e} doesn't exist`);this.getCaipNetworks().find(i=>i.id===r)&&C.removeNetwork(e,r)}}let X1=!1;class Am extends qA{async open(e){J.isConnected()||await super.open(e)}async close(){await super.close(),this.options.manualWCControl&&ie.finalizeWcConnection()}async syncIdentity(e){return Promise.resolve()}async syncBalance(e){return Promise.resolve()}async injectModalUi(){if(!X1&&H.isClient()){if(await Promise.resolve().then(function(){return e$}),await Promise.resolve().then(function(){return w$}),!document.querySelector("w3m-modal")){const e=document.createElement("w3m-modal");!j.state.disableAppend&&!j.state.enableEmbedded&&document.body.insertAdjacentElement("beforeend",e)}X1=!0}}}const HA="1.7.3";function WA(t){return new Am({...t,basic:!0,sdkVersion:`html-core-${HA}`})}var VA=Object.freeze({__proto__:null,createAppKit:WA,AppKit:Am}),FA=Object.defineProperty,KA=Object.defineProperties,ZA=Object.getOwnPropertyDescriptors,Q1=Object.getOwnPropertySymbols,GA=Object.prototype.hasOwnProperty,YA=Object.prototype.propertyIsEnumerable,eg=(t,e,r)=>e in t?FA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,JA=(t,e)=>{for(var r in e||(e={}))GA.call(e,r)&&eg(t,r,e[r]);if(Q1)for(var r of Q1(e))YA.call(e,r)&&eg(t,r,e[r]);return t},XA=(t,e)=>KA(t,ZA(e));function QA(t){if(t)return{"--w3m-font-family":t["--wcm-font-family"],"--w3m-accent":t["--wcm-accent-color"],"--w3m-color-mix":t["--wcm-background-color"],"--w3m-z-index":t["--wcm-z-index"]?Number(t["--wcm-z-index"]):void 0,"--w3m-qr-color":t["--wcm-accent-color"],"--w3m-font-size-master":t["--wcm-text-medium-regular-size"],"--w3m-border-radius-master":t["--wcm-container-border-radius"],"--w3m-color-mix-strength":0}}const eS=t=>{const[e,r]=t.split(":");return Pn({id:r,caipNetworkId:t,chainNamespace:e,name:"",nativeCurrency:{name:"",symbol:"",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}})};function tS(t){var e,r,i,s,n,o,a;const c=(e=t.chains)==null?void 0:e.map(eS).filter(Boolean);if(c.length===0)throw new Error("At least one chain must be specified");const l=c.find(h=>{var d;return h.id===((d=t.defaultChain)==null?void 0:d.id)}),u={projectId:t.projectId,networks:c,themeMode:t.themeMode,themeVariables:QA(t.themeVariables),chainImages:t.chainImages,connectorImages:t.walletImages,defaultNetwork:l,metadata:XA(JA({},t.metadata),{name:((r=t.metadata)==null?void 0:r.name)||"WalletConnect",description:((i=t.metadata)==null?void 0:i.description)||"Connect to WalletConnect-compatible wallets",url:((s=t.metadata)==null?void 0:s.url)||"https://walletconnect.org",icons:((n=t.metadata)==null?void 0:n.icons)||["https://walletconnect.org/walletconnect-logo.png"]}),showWallets:!0,featuredWalletIds:t.explorerRecommendedWalletIds==="NONE"?[]:Array.isArray(t.explorerRecommendedWalletIds)?t.explorerRecommendedWalletIds:[],excludeWalletIds:t.explorerExcludedWalletIds==="ALL"?[]:Array.isArray(t.explorerExcludedWalletIds)?t.explorerExcludedWalletIds:[],enableEIP6963:!1,enableInjected:!1,enableCoinbase:!0,enableWalletConnect:!0,features:{email:!1,socials:!1}};if((o=t.mobileWallets)!=null&&o.length||(a=t.desktopWallets)!=null&&a.length){const h=[...(t.mobileWallets||[]).map(w=>({id:w.id,name:w.name,links:w.links})),...(t.desktopWallets||[]).map(w=>({id:w.id,name:w.name,links:{native:w.links.native,universal:w.links.universal}}))],d=[...u.featuredWalletIds||[],...u.excludeWalletIds||[]],p=h.filter(w=>!d.includes(w.id));p.length&&(u.customWallets=p)}return u}var rS=Object.freeze({__proto__:null,convertWCMToAppKitOptions:tS});/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const iS={attribute:!0,type:String,converter:Al,reflect:!1,hasChanged:ip},sS=(t=iS,e,r)=>{const{kind:i,metadata:s}=r;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((t=Object.create(t)).wrapped=!0),n.set(r.name,t),i==="accessor"){const{name:o}=r;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,t)},init(a){return a!==void 0&&this.C(o,void 0,t,a),a}}}if(i==="setter"){const{name:o}=r;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,t)}}throw Error("Unsupported decorator location: "+i)};function N(t){return(e,r)=>typeof r=="object"?sS(t,e,r):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(t,e,r)}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function X(t){return N({...t,state:!0,attribute:!1})}var nS=le`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,Vt=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let At=class extends ee{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&lt.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&lt.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&lt.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&lt.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&lt.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&lt.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&lt.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&lt.getSpacingStyles(this.margin,3)};
    `,A`<slot></slot>`}};At.styles=[$e,nS],Vt([N()],At.prototype,"flexDirection",void 0),Vt([N()],At.prototype,"flexWrap",void 0),Vt([N()],At.prototype,"flexBasis",void 0),Vt([N()],At.prototype,"flexGrow",void 0),Vt([N()],At.prototype,"flexShrink",void 0),Vt([N()],At.prototype,"alignItems",void 0),Vt([N()],At.prototype,"justifyContent",void 0),Vt([N()],At.prototype,"columnGap",void 0),Vt([N()],At.prototype,"rowGap",void 0),Vt([N()],At.prototype,"gap",void 0),Vt([N()],At.prototype,"padding",void 0),Vt([N()],At.prototype,"margin",void 0),At=Vt([Q("wui-flex")],At);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ce=t=>t??Je;/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const oS=t=>t===null||typeof t!="object"&&typeof t!="function",aS=t=>t.strings===void 0;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Sm={ATTRIBUTE:1,CHILD:2},np=t=>(...e)=>({_$litDirective$:t,values:e});class _m{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,r,i){this._$Ct=e,this._$AM=r,this._$Ci=i}_$AS(e,r){return this.update(e,r)}update(e,r){return this.render(...r)}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ra=(t,e)=>{var i;const r=t._$AN;if(r===void 0)return!1;for(const s of r)(i=s._$AO)==null||i.call(s,e,!1),ra(s,e);return!0},_l=t=>{let e,r;do{if((e=t._$AM)===void 0)break;r=e._$AN,r.delete(t),t=e}while((r==null?void 0:r.size)===0)},$m=t=>{for(let e;e=t._$AM;t=e){let r=e._$AN;if(r===void 0)e._$AN=r=new Set;else if(r.has(t))break;r.add(t),uS(e)}};function cS(t){this._$AN!==void 0?(_l(this),this._$AM=t,$m(this)):this._$AM=t}function lS(t,e=!1,r=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let n=r;n<i.length;n++)ra(i[n],!1),_l(i[n]);else i!=null&&(ra(i,!1),_l(i));else ra(this,t)}const uS=t=>{t.type==Sm.CHILD&&(t._$AP??(t._$AP=lS),t._$AQ??(t._$AQ=cS))};class km extends _m{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,r,i){super._$AT(e,r,i),$m(this),this.isConnected=e._$AU}_$AO(e,r=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(s=this.disconnected)==null||s.call(this)),r&&(ra(this,e),_l(this))}setValue(e){if(aS(this._$Ct))this._$Ct._$AI(e,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=e,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class hS{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class dS{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(e=>this.Z=e))}resume(){var e;(e=this.Z)==null||e.call(this),this.Y=this.Z=void 0}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const tg=t=>!oS(t)&&typeof t.then=="function",rg=1073741823;class pS extends km{constructor(){super(...arguments),this._$Cwt=rg,this._$Cbt=[],this._$CK=new hS(this),this._$CX=new dS}render(...e){return e.find(r=>!tg(r))??fi}update(e,r){const i=this._$Cbt;let s=i.length;this._$Cbt=r;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<r.length&&!(a>this._$Cwt);a++){const c=r[a];if(!tg(c))return this._$Cwt=a,c;a<s&&c===i[a]||(this._$Cwt=rg,s=0,Promise.resolve(c).then(async l=>{for(;o.get();)await o.get();const u=n.deref();if(u!==void 0){const h=u._$Cbt.indexOf(c);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(l))}}))}return fi}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const gS=np(pS);class fS{constructor(){this.cache=new Map}set(e,r){this.cache.set(e,r)}get(e){return this.cache.get(e)}has(e){return this.cache.has(e)}delete(e){this.cache.delete(e)}clear(){this.cache.clear()}}const Ju=new fS;var wS=le`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`,bo=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const ig={add:async()=>(await Promise.resolve().then(function(){return v$})).addSvg,allWallets:async()=>(await Promise.resolve().then(function(){return y$})).allWalletsSvg,arrowBottomCircle:async()=>(await Promise.resolve().then(function(){return E$})).arrowBottomCircleSvg,appStore:async()=>(await Promise.resolve().then(function(){return I$})).appStoreSvg,apple:async()=>(await Promise.resolve().then(function(){return S$})).appleSvg,arrowBottom:async()=>(await Promise.resolve().then(function(){return $$})).arrowBottomSvg,arrowLeft:async()=>(await Promise.resolve().then(function(){return N$})).arrowLeftSvg,arrowRight:async()=>(await Promise.resolve().then(function(){return O$})).arrowRightSvg,arrowTop:async()=>(await Promise.resolve().then(function(){return R$})).arrowTopSvg,bank:async()=>(await Promise.resolve().then(function(){return U$})).bankSvg,browser:async()=>(await Promise.resolve().then(function(){return M$})).browserSvg,card:async()=>(await Promise.resolve().then(function(){return j$})).cardSvg,checkmark:async()=>(await Promise.resolve().then(function(){return q$})).checkmarkSvg,checkmarkBold:async()=>(await Promise.resolve().then(function(){return W$})).checkmarkBoldSvg,chevronBottom:async()=>(await Promise.resolve().then(function(){return F$})).chevronBottomSvg,chevronLeft:async()=>(await Promise.resolve().then(function(){return Z$})).chevronLeftSvg,chevronRight:async()=>(await Promise.resolve().then(function(){return Y$})).chevronRightSvg,chevronTop:async()=>(await Promise.resolve().then(function(){return X$})).chevronTopSvg,chromeStore:async()=>(await Promise.resolve().then(function(){return ek})).chromeStoreSvg,clock:async()=>(await Promise.resolve().then(function(){return rk})).clockSvg,close:async()=>(await Promise.resolve().then(function(){return sk})).closeSvg,compass:async()=>(await Promise.resolve().then(function(){return ok})).compassSvg,coinPlaceholder:async()=>(await Promise.resolve().then(function(){return ck})).coinPlaceholderSvg,copy:async()=>(await Promise.resolve().then(function(){return uk})).copySvg,cursor:async()=>(await Promise.resolve().then(function(){return dk})).cursorSvg,cursorTransparent:async()=>(await Promise.resolve().then(function(){return gk})).cursorTransparentSvg,desktop:async()=>(await Promise.resolve().then(function(){return wk})).desktopSvg,disconnect:async()=>(await Promise.resolve().then(function(){return vk})).disconnectSvg,discord:async()=>(await Promise.resolve().then(function(){return yk})).discordSvg,etherscan:async()=>(await Promise.resolve().then(function(){return Ek})).etherscanSvg,extension:async()=>(await Promise.resolve().then(function(){return Ik})).extensionSvg,externalLink:async()=>(await Promise.resolve().then(function(){return Sk})).externalLinkSvg,facebook:async()=>(await Promise.resolve().then(function(){return $k})).facebookSvg,farcaster:async()=>(await Promise.resolve().then(function(){return Nk})).farcasterSvg,filters:async()=>(await Promise.resolve().then(function(){return Ok})).filtersSvg,github:async()=>(await Promise.resolve().then(function(){return Rk})).githubSvg,google:async()=>(await Promise.resolve().then(function(){return Uk})).googleSvg,helpCircle:async()=>(await Promise.resolve().then(function(){return Mk})).helpCircleSvg,image:async()=>(await Promise.resolve().then(function(){return jk})).imageSvg,id:async()=>(await Promise.resolve().then(function(){return qk})).idSvg,infoCircle:async()=>(await Promise.resolve().then(function(){return Wk})).infoCircleSvg,lightbulb:async()=>(await Promise.resolve().then(function(){return Fk})).lightbulbSvg,mail:async()=>(await Promise.resolve().then(function(){return Zk})).mailSvg,mobile:async()=>(await Promise.resolve().then(function(){return Yk})).mobileSvg,more:async()=>(await Promise.resolve().then(function(){return Xk})).moreSvg,networkPlaceholder:async()=>(await Promise.resolve().then(function(){return eN})).networkPlaceholderSvg,nftPlaceholder:async()=>(await Promise.resolve().then(function(){return rN})).nftPlaceholderSvg,off:async()=>(await Promise.resolve().then(function(){return sN})).offSvg,playStore:async()=>(await Promise.resolve().then(function(){return oN})).playStoreSvg,plus:async()=>(await Promise.resolve().then(function(){return cN})).plusSvg,qrCode:async()=>(await Promise.resolve().then(function(){return uN})).qrCodeIcon,recycleHorizontal:async()=>(await Promise.resolve().then(function(){return dN})).recycleHorizontalSvg,refresh:async()=>(await Promise.resolve().then(function(){return gN})).refreshSvg,search:async()=>(await Promise.resolve().then(function(){return wN})).searchSvg,send:async()=>(await Promise.resolve().then(function(){return vN})).sendSvg,swapHorizontal:async()=>(await Promise.resolve().then(function(){return yN})).swapHorizontalSvg,swapHorizontalMedium:async()=>(await Promise.resolve().then(function(){return EN})).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await Promise.resolve().then(function(){return IN})).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await Promise.resolve().then(function(){return SN})).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await Promise.resolve().then(function(){return $N})).swapVerticalSvg,telegram:async()=>(await Promise.resolve().then(function(){return NN})).telegramSvg,threeDots:async()=>(await Promise.resolve().then(function(){return ON})).threeDotsSvg,twitch:async()=>(await Promise.resolve().then(function(){return RN})).twitchSvg,twitter:async()=>(await Promise.resolve().then(function(){return Ng})).xSvg,twitterIcon:async()=>(await Promise.resolve().then(function(){return BN})).twitterIconSvg,verify:async()=>(await Promise.resolve().then(function(){return DN})).verifySvg,verifyFilled:async()=>(await Promise.resolve().then(function(){return zN})).verifyFilledSvg,wallet:async()=>(await Promise.resolve().then(function(){return HN})).walletSvg,walletConnect:async()=>(await Promise.resolve().then(function(){return xh})).walletConnectSvg,walletConnectLightBrown:async()=>(await Promise.resolve().then(function(){return xh})).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await Promise.resolve().then(function(){return xh})).walletConnectBrownSvg,walletPlaceholder:async()=>(await Promise.resolve().then(function(){return ZN})).walletPlaceholderSvg,warningCircle:async()=>(await Promise.resolve().then(function(){return YN})).warningCircleSvg,x:async()=>(await Promise.resolve().then(function(){return Ng})).xSvg,info:async()=>(await Promise.resolve().then(function(){return XN})).infoSvg,exclamationTriangle:async()=>(await Promise.resolve().then(function(){return eP})).exclamationTriangleSvg,reown:async()=>(await Promise.resolve().then(function(){return rP})).reownSvg};async function mS(t){if(Ju.has(t))return Ju.get(t);const e=(ig[t]??ig.copy)();return Ju.set(t,e),e}let Yi=class extends ee{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,A`${gS(mS(this.name),A`<div class="fallback"></div>`)}`}};Yi.styles=[$e,ec,wS],bo([N()],Yi.prototype,"size",void 0),bo([N()],Yi.prototype,"name",void 0),bo([N()],Yi.prototype,"color",void 0),bo([N()],Yi.prototype,"aspectRatio",void 0),Yi=bo([Q("wui-icon")],Yi);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Nm=np(class extends _m{constructor(t){var e;if(super(t),t.type!==Sm.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in e)e[n]&&!((i=this.nt)!=null&&i.has(n))&&this.st.add(n);return this.render(e)}const r=t.element.classList;for(const n of this.st)n in e||(r.remove(n),this.st.delete(n));for(const n in e){const o=!!e[n];o===this.st.has(n)||(s=this.nt)!=null&&s.has(n)||(o?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return fi}});var vS=le`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`,yo=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Ji=class extends ee{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,A`<slot class=${Nm(t)}></slot>`}};Ji.styles=[$e,vS],yo([N()],Ji.prototype,"variant",void 0),yo([N()],Ji.prototype,"color",void 0),yo([N()],Ji.prototype,"align",void 0),yo([N()],Ji.prototype,"lineClamp",void 0),Ji=yo([Q("wui-text")],Ji);var bS=le`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,Qr=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let yr=class extends ee{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e=this.size==="lg",r=this.size==="xl",i=e?"12%":"16%",s=e?"xxs":r?"s":"3xl",n=this.background==="gray",o=this.background==="opaque",a=this.backgroundColor==="accent-100"&&o||this.backgroundColor==="success-100"&&o||this.backgroundColor==="error-100"&&o||this.backgroundColor==="inverse-100"&&o;let c=`var(--wui-color-${this.backgroundColor})`;return a?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:n&&(c=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${a||n?"100%":i};
       --local-border-radius: var(--wui-border-radius-${s});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,A` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};yr.styles=[$e,bt,bS],Qr([N()],yr.prototype,"size",void 0),Qr([N()],yr.prototype,"backgroundColor",void 0),Qr([N()],yr.prototype,"iconColor",void 0),Qr([N()],yr.prototype,"iconSize",void 0),Qr([N()],yr.prototype,"background",void 0),Qr([N({type:Boolean})],yr.prototype,"border",void 0),Qr([N()],yr.prototype,"borderColor",void 0),Qr([N()],yr.prototype,"icon",void 0),yr=Qr([Q("wui-icon-box")],yr);var yS=le`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,Sc=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let hn=class extends ee{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,A`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};hn.styles=[$e,ec,yS],Sc([N()],hn.prototype,"src",void 0),Sc([N()],hn.prototype,"alt",void 0),Sc([N()],hn.prototype,"size",void 0),hn=Sc([Q("wui-image")],hn);var CS=le`
  :host {
    position: relative;
    background-color: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-color-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-150, #1e1f1f);
    padding: 1px;
  }
`,Xi=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ei=class extends ee{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),A`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?A`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:A`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ei.styles=[bt,$e,CS],Xi([N()],ei.prototype,"size",void 0),Xi([N()],ei.prototype,"name",void 0),Xi([N()],ei.prototype,"imageSrc",void 0),Xi([N()],ei.prototype,"walletIcon",void 0),Xi([N({type:Boolean})],ei.prototype,"installed",void 0),Xi([N()],ei.prototype,"badgeSize",void 0),ei=Xi([Q("wui-wallet-image")],ei);var ES=le`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-color-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`,sg=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Xu=4;let _c=class extends ee{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Xu;return A`${this.walletImages.slice(0,Xu).map(({src:e,walletName:r})=>A`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${ce(r)}
            ></wui-wallet-image>
          `)}
      ${t?[...Array(Xu-this.walletImages.length)].map(()=>A` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};_c.styles=[$e,ES],sg([N({type:Array})],_c.prototype,"walletImages",void 0),_c=sg([Q("wui-all-wallets-image")],_c);var xS=le`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`,Qu=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Co=class extends ee{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"mini-700":"micro-700";return A`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};Co.styles=[$e,xS],Qu([N()],Co.prototype,"variant",void 0),Qu([N()],Co.prototype,"size",void 0),Co=Qu([Q("wui-tag")],Co);var IS=le`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:disabled {
    background-color: var(--wui-color-gray-glass-015);
    color: var(--wui-color-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-300);
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }
`,Tt=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Ct=class extends ee{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return A`
      <button ?disabled=${this.disabled} tabindex=${ce(this.tabIdx)}>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?A` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?A` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?A`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?A`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?A`<wui-loading-spinner
        size="lg"
        color=${this.loadingSpinnerColor}
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?A`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?A`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Ct.styles=[$e,bt,IS],Tt([N({type:Array})],Ct.prototype,"walletImages",void 0),Tt([N()],Ct.prototype,"imageSrc",void 0),Tt([N()],Ct.prototype,"name",void 0),Tt([N()],Ct.prototype,"tagLabel",void 0),Tt([N()],Ct.prototype,"tagVariant",void 0),Tt([N()],Ct.prototype,"icon",void 0),Tt([N()],Ct.prototype,"walletIcon",void 0),Tt([N()],Ct.prototype,"tabIdx",void 0),Tt([N({type:Boolean})],Ct.prototype,"installed",void 0),Tt([N({type:Boolean})],Ct.prototype,"disabled",void 0),Tt([N({type:Boolean})],Ct.prototype,"showAllWallets",void 0),Tt([N({type:Boolean})],Ct.prototype,"loading",void 0),Tt([N({type:String})],Ct.prototype,"loadingSpinnerColor",void 0),Ct=Tt([Q("wui-list-wallet")],Ct);var Eo=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let dn=class extends ee{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=J.state.connectors,this.count=Y.state.count,this.isFetchingRecommendedWallets=Y.state.isFetchingRecommendedWallets,this.unsubscribe.push(J.subscribeKey("connectors",t=>this.connectors=t),Y.subscribeKey("count",t=>this.count=t),Y.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(o=>o.id==="walletConnect"),{allWallets:e}=j.state;if(!t||e==="HIDE"||e==="ONLY_MOBILE"&&!H.isMobile())return null;const r=Y.state.featured.length,i=this.count+r,s=i<10?i:Math.floor(i/10)*10,n=s<i?`${s}+`:`${s}`;return A`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${n}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${ce(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){we.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),G.push("AllWallets")}};Eo([N()],dn.prototype,"tabIdx",void 0),Eo([X()],dn.prototype,"connectors",void 0),Eo([X()],dn.prototype,"count",void 0),Eo([X()],dn.prototype,"isFetchingRecommendedWallets",void 0),dn=Eo([Q("w3m-all-wallets-widget")],dn);var eh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let $c=class extends ee{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=J.state.connectors,this.unsubscribe.push(J.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="ANNOUNCED");return t!=null&&t.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${t.filter(gi.showConnector).map(e=>A`
              <wui-list-wallet
                imageSrc=${ce(st.getConnectorImage(e))}
                name=${e.name??"Unknown"}
                @click=${()=>this.onConnector(e)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${e.id}`}
                .installed=${!0}
                tabIdx=${ce(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){t.id==="walletConnect"?H.isMobile()?G.push("AllWallets"):G.push("ConnectingWalletConnect"):G.push("ConnectingExternal",{connector:t})}};eh([N()],$c.prototype,"tabIdx",void 0),eh([X()],$c.prototype,"connectors",void 0),$c=eh([Q("w3m-connect-announced-widget")],$c);var kc=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let xo=class extends ee{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=J.state.connectors,this.loading=!1,this.unsubscribe.push(J.subscribeKey("connectors",t=>this.connectors=t)),H.isTelegram()&&H.isIos()&&(this.loading=!ie.state.wcUri,this.unsubscribe.push(ie.subscribeKey("wcUri",t=>this.loading=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{customWallets:t}=j.state;if(!(t!=null&&t.length))return this.style.cssText="display: none",null;const e=this.filterOutDuplicateWallets(t);return A`<wui-flex flexDirection="column" gap="xs">
      ${e.map(r=>A`
          <wui-list-wallet
            imageSrc=${ce(st.getWalletImage(r))}
            name=${r.name??"Unknown"}
            @click=${()=>this.onConnectWallet(r)}
            data-testid=${`wallet-selector-${r.id}`}
            tabIdx=${ce(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(t){const e=te.getRecentWallets(),r=this.connectors.map(n=>{var o;return(o=n.info)==null?void 0:o.rdns}).filter(Boolean),i=e.map(n=>n.rdns).filter(Boolean),s=r.concat(i);if(s.includes("io.metamask.mobile")&&H.isMobile()){const n=s.indexOf("io.metamask.mobile");s[n]="io.metamask"}return t.filter(n=>!s.includes(String(n==null?void 0:n.rdns)))}onConnectWallet(t){this.loading||G.push("ConnectingWalletConnect",{wallet:t})}};kc([N()],xo.prototype,"tabIdx",void 0),kc([X()],xo.prototype,"connectors",void 0),kc([X()],xo.prototype,"loading",void 0),xo=kc([Q("w3m-connect-custom-widget")],xo);var th=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Nc=class extends ee{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=J.state.connectors,this.unsubscribe.push(J.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="EXTERNAL").filter(gi.showConnector).filter(e=>e.id!==ae.CONNECTOR_ID.COINBASE_SDK);return t!=null&&t.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>A`
            <wui-list-wallet
              imageSrc=${ce(st.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              data-testid=${`wallet-selector-external-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${ce(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){G.push("ConnectingExternal",{connector:t})}};th([N()],Nc.prototype,"tabIdx",void 0),th([X()],Nc.prototype,"connectors",void 0),Nc=th([Q("w3m-connect-external-widget")],Nc);var rh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Pc=class extends ee{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(t=>A`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${t.id}`}
              imageSrc=${ce(st.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tabIdx=${ce(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){J.selectWalletConnector(t)}};rh([N()],Pc.prototype,"tabIdx",void 0),rh([N()],Pc.prototype,"wallets",void 0),Pc=rh([Q("w3m-connect-featured-widget")],Pc);var ih=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Oc=class extends ee{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){var e;const t=this.connectors;return!(t!=null&&t.length)||t.length===1&&((e=t[0])==null?void 0:e.name)==="Browser Wallet"&&!H.isMobile()?(this.style.cssText="display: none",null):A`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(r=>{var s;const i=(s=r.info)==null?void 0:s.rdns;return!H.isMobile()&&r.name==="Browser Wallet"?null:!i&&!ie.checkInstalled()?(this.style.cssText="display: none",null):gi.showConnector(r)?A`
            <wui-list-wallet
              imageSrc=${ce(st.getConnectorImage(r))}
              .installed=${!0}
              name=${r.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${r.id}`}
              @click=${()=>this.onConnector(r)}
              tabIdx=${ce(this.tabIdx)}
            >
            </wui-list-wallet>
          `:null})}
      </wui-flex>
    `}onConnector(t){J.setActiveConnector(t),G.push("ConnectingExternal",{connector:t})}};ih([N()],Oc.prototype,"tabIdx",void 0),ih([N()],Oc.prototype,"connectors",void 0),Oc=ih([Q("w3m-connect-injected-widget")],Oc);var sh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Tc=class extends ee{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=J.state.connectors,this.unsubscribe.push(J.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.filter(e=>e.type==="MULTI_CHAIN"&&e.name!=="WalletConnect");return t!=null&&t.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>A`
            <wui-list-wallet
              imageSrc=${ce(st.getConnectorImage(e))}
              .installed=${!0}
              name=${e.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${e.id}`}
              @click=${()=>this.onConnector(e)}
              tabIdx=${ce(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(t){J.setActiveConnector(t),G.push("ConnectingMultiChain")}};sh([N()],Tc.prototype,"tabIdx",void 0),sh([X()],Tc.prototype,"connectors",void 0),Tc=sh([Q("w3m-connect-multi-chain-widget")],Tc);var Rc=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Io=class extends ee{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=J.state.connectors,this.loading=!1,this.unsubscribe.push(J.subscribeKey("connectors",t=>this.connectors=t)),H.isTelegram()&&H.isIos()&&(this.loading=!ie.state.wcUri,this.unsubscribe.push(ie.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const t=te.getRecentWallets().filter(e=>!Ms.isExcluded(e)).filter(e=>!this.hasWalletConnector(e)).filter(e=>this.isWalletCompatibleWithCurrentChain(e));return t.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${t.map(e=>A`
            <wui-list-wallet
              imageSrc=${ce(st.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${ce(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){this.loading||J.selectWalletConnector(t)}hasWalletConnector(t){return this.connectors.some(e=>e.id===t.id||e.name===t.name)}isWalletCompatibleWithCurrentChain(t){const e=C.state.activeChain;return e&&t.chains?t.chains.some(r=>{const i=r.split(":")[0];return e===i}):!0}};Rc([N()],Io.prototype,"tabIdx",void 0),Rc([X()],Io.prototype,"connectors",void 0),Rc([X()],Io.prototype,"loading",void 0),Io=Rc([Q("w3m-connect-recent-widget")],Io);var Lc=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Ao=class extends ee{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,H.isTelegram()&&H.isIos()&&(this.loading=!ie.state.wcUri,this.unsubscribe.push(ie.subscribeKey("wcUri",t=>this.loading=!t)))}render(){const{connectors:t}=J.state,{customWallets:e,featuredWalletIds:r}=j.state,i=te.getRecentWallets(),s=t.find(l=>l.id==="walletConnect"),n=t.filter(l=>l.type==="INJECTED"||l.type==="ANNOUNCED"||l.type==="MULTI_CHAIN").filter(l=>l.name!=="Browser Wallet");if(!s)return null;if(r||e||!this.wallets.length)return this.style.cssText="display: none",null;const o=n.length+i.length,a=Math.max(0,2-o),c=Ms.filterOutDuplicateWallets(this.wallets).slice(0,a);return c.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${c.map(l=>A`
            <wui-list-wallet
              imageSrc=${ce(st.getWalletImage(l))}
              name=${(l==null?void 0:l.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(l)}
              tabIdx=${ce(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(t){if(this.loading)return;const e=J.getConnector(t.id,t.rdns);e?G.push("ConnectingExternal",{connector:e}):G.push("ConnectingWalletConnect",{wallet:t})}};Lc([N()],Ao.prototype,"tabIdx",void 0),Lc([N()],Ao.prototype,"wallets",void 0),Lc([X()],Ao.prototype,"loading",void 0),Ao=Lc([Q("w3m-connect-recommended-widget")],Ao);var Uc=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let So=class extends ee{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=J.state.connectors,this.connectorImages=Mt.state.connectorImages,this.unsubscribe.push(J.subscribeKey("connectors",t=>this.connectors=t),Mt.subscribeKey("connectorImages",t=>this.connectorImages=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(H.isMobile())return this.style.cssText="display: none",null;const t=this.connectors.find(r=>r.id==="walletConnect");if(!t)return this.style.cssText="display: none",null;const e=t.imageUrl||this.connectorImages[(t==null?void 0:t.imageId)??""];return A`
      <wui-list-wallet
        imageSrc=${ce(e)}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${ce(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(t){J.setActiveConnector(t),G.push("ConnectingWalletConnect")}};Uc([N()],So.prototype,"tabIdx",void 0),Uc([X()],So.prototype,"connectors",void 0),Uc([X()],So.prototype,"connectorImages",void 0),So=Uc([Q("w3m-connect-walletconnect-widget")],So);var AS=le`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,_o=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Qi=class extends ee{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=J.state.connectors,this.recommended=Y.state.recommended,this.featured=Y.state.featured,this.unsubscribe.push(J.subscribeKey("connectors",t=>this.connectors=t),Y.subscribeKey("recommended",t=>this.recommended=t),Y.subscribeKey("featured",t=>this.featured=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return A`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:t,recent:e,announced:r,injected:i,multiChain:s,recommended:n,featured:o,external:a}=gi.getConnectorsByType(this.connectors,this.recommended,this.featured);return gi.getConnectorTypeOrder({custom:t,recent:e,announced:r,injected:i,multiChain:s,recommended:n,featured:o,external:a}).map(c=>{switch(c){case"injected":return A`
            ${s.length?A`<w3m-connect-multi-chain-widget
                  tabIdx=${ce(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${r.length?A`<w3m-connect-announced-widget
                  tabIdx=${ce(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${i.length?A`<w3m-connect-injected-widget
                  .connectors=${i}
                  tabIdx=${ce(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return A`<w3m-connect-walletconnect-widget
            tabIdx=${ce(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return A`<w3m-connect-recent-widget
            tabIdx=${ce(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return A`<w3m-connect-featured-widget
            .wallets=${o}
            tabIdx=${ce(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return A`<w3m-connect-custom-widget
            tabIdx=${ce(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return A`<w3m-connect-external-widget
            tabIdx=${ce(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return A`<w3m-connect-recommended-widget
            .wallets=${n}
            tabIdx=${ce(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${c}`),null}})}};Qi.styles=AS,_o([N()],Qi.prototype,"tabIdx",void 0),_o([X()],Qi.prototype,"connectors",void 0),_o([X()],Qi.prototype,"recommended",void 0),_o([X()],Qi.prototype,"featured",void 0),Qi=_o([Q("w3m-connector-list")],Qi);var SS=le`
  :host {
    display: inline-flex;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    min-height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,xi=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Rr=class extends ee{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,e)=>{var i;const r=e===this.activeTab;return A`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(e)}
          data-active=${r}
          data-testid="tab-${(i=t.label)==null?void 0:i.toLowerCase()}"
        >
          ${this.iconTemplate(t)}
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(t){return t.icon?A`<wui-icon size="xs" color="inherit" name=${t.icon}></wui-icon>`:null}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,e){const r=this.buttons[this.activeTab],i=this.buttons[t],s=r==null?void 0:r.querySelector("wui-text"),n=i==null?void 0:i.querySelector("wui-text"),o=i==null?void 0:i.getBoundingClientRect(),a=n==null?void 0:n.getBoundingClientRect();r&&s&&!e&&t!==this.activeTab&&(s.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&o&&a&&n&&(t!==this.activeTab||e)&&(this.localTabWidth=`${Math.round(o.width+a.width)+6}px`,i.animate([{width:`${o.width+a.width}px`}],{duration:e?0:500,fill:"forwards",easing:"ease"}),n.animate([{opacity:1}],{duration:e?0:125,delay:e?0:200,fill:"forwards",easing:"ease"}))}};Rr.styles=[$e,bt,SS],xi([N({type:Array})],Rr.prototype,"tabs",void 0),xi([N()],Rr.prototype,"onTabChange",void 0),xi([N({type:Array})],Rr.prototype,"buttons",void 0),xi([N({type:Boolean})],Rr.prototype,"disabled",void 0),xi([N()],Rr.prototype,"localTabWidth",void 0),xi([X()],Rr.prototype,"activeTab",void 0),xi([X()],Rr.prototype,"isDense",void 0),Rr=xi([Q("wui-tabs")],Rr);var Bc=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let $o=class extends ee{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(ie.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return A`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(e=>e==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:e==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:e==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:e==="web"?{label:"Webapp",icon:"browser",platform:"web"}:e==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:e})=>e),t}onTabChange(t){var r;const e=this.platformTabs[t];e&&((r=this.onSelectPlatfrom)==null||r.call(this,e))}};Bc([N({type:Array})],$o.prototype,"platforms",void 0),Bc([N()],$o.prototype,"onSelectPlatfrom",void 0),Bc([X()],$o.prototype,"buffering",void 0),$o=Bc([Q("w3m-connecting-header")],$o);var _S=le`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,nh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ko=class extends ee{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,A`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};ko.styles=[$e,_S],nh([N()],ko.prototype,"color",void 0),nh([N()],ko.prototype,"size",void 0),ko=nh([Q("wui-loading-spinner")],ko);var $S=le`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: none;
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
    height: 36px;
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='inverse'] {
    background-color: var(--wui-color-inverse-100);
    color: var(--wui-color-inverse-000);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='accent-error'] {
    background: var(--wui-color-error-glass-015);
    color: var(--wui-color-error-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-error-glass-010);
  }

  button[data-variant='accent-success'] {
    background: var(--wui-color-success-glass-015);
    color: var(--wui-color-success-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-success-glass-010);
  }

  button[data-variant='neutral'] {
    background: transparent;
    color: var(--wui-color-fg-100);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-variant='main']:focus-visible:enabled {
    background-color: var(--wui-color-accent-090);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='inverse']:focus-visible:enabled {
    background-color: var(--wui-color-inverse-100);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent']:focus-visible:enabled {
    background-color: var(--wui-color-accent-glass-010);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
  button[data-variant='accent-error']:focus-visible:enabled {
    background: var(--wui-color-error-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-error-100),
      0 0 0 4px var(--wui-color-error-glass-020);
  }
  button[data-variant='accent-success']:focus-visible:enabled {
    background: var(--wui-color-success-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-success-100),
      0 0 0 4px var(--wui-color-success-glass-020);
  }
  button[data-variant='neutral']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='accent-error']:hover:enabled {
      background: var(--wui-color-error-glass-020);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-error']:active:enabled {
      background: var(--wui-color-error-glass-030);
      color: var(--wui-color-error-100);
    }

    button[data-variant='accent-success']:hover:enabled {
      background: var(--wui-color-success-glass-020);
      color: var(--wui-color-success-100);
    }

    button[data-variant='accent-success']:active:enabled {
      background: var(--wui-color-success-glass-030);
      color: var(--wui-color-success-100);
    }

    button[data-variant='neutral']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='neutral']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }

    button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
      padding-left: var(--wui-spacing-m);
    }

    button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
      padding-right: var(--wui-spacing-m);
    }
  }

  /* -- Disabled state --------------------------------------------------- */
  button:disabled {
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    color: var(--wui-color-gray-glass-020);
    cursor: not-allowed;
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,Lr=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const ng={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},kS={lg:"paragraph-600",md:"small-600"},NS={lg:"md",md:"md"};let ar=class extends ee{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const t=this.textVariant??kS[this.size];return A`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const t=NS[this.size],e=this.disabled?ng.disabled:ng[this.variant];return A`<wui-loading-spinner color=${e} size=${t}></wui-loading-spinner>`}return A``}};ar.styles=[$e,bt,$S],Lr([N()],ar.prototype,"size",void 0),Lr([N({type:Boolean})],ar.prototype,"disabled",void 0),Lr([N({type:Boolean})],ar.prototype,"fullWidth",void 0),Lr([N({type:Boolean})],ar.prototype,"loading",void 0),Lr([N()],ar.prototype,"variant",void 0),Lr([N({type:Boolean})],ar.prototype,"hasIconLeft",void 0),Lr([N({type:Boolean})],ar.prototype,"hasIconRight",void 0),Lr([N()],ar.prototype,"borderRadius",void 0),Lr([N()],ar.prototype,"textVariant",void 0),ar=Lr([Q("wui-button")],ar);var PS=le`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-color-gray-glass-015);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }
`,Mc=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let pn=class extends ee{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return A`
      <button ?disabled=${this.disabled} tabindex=${ce(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};pn.styles=[$e,bt,PS],Mc([N()],pn.prototype,"tabIdx",void 0),Mc([N({type:Boolean})],pn.prototype,"disabled",void 0),Mc([N()],pn.prototype,"color",void 0),pn=Mc([Q("wui-link")],pn);var OS=le`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,og=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Dc=class extends ee{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,e=36-t,r=116+e,i=245+e,s=360+e*1.75;return A`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${r} ${i}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};Dc.styles=[$e,OS],og([N({type:Number})],Dc.prototype,"radius",void 0),Dc=og([Q("wui-loading-thumbnail")],Dc);var TS=le`
  button {
    border: none;
    border-radius: var(--wui-border-radius-3xl);
  }

  button[data-variant='main'] {
    background-color: var(--wui-color-accent-100);
    color: var(--wui-color-inverse-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='accent'] {
    background-color: var(--wui-color-accent-glass-010);
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  button[data-variant='gray'] {
    background-color: transparent;
    color: var(--wui-color-fg-200);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-variant='shade'] {
    background-color: transparent;
    color: var(--wui-color-accent-100);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  button[data-size='sm'] {
    height: 32px;
    padding: 0 var(--wui-spacing-s);
  }

  button[data-size='md'] {
    height: 40px;
    padding: 0 var(--wui-spacing-l);
  }

  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='main'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='gray'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='main']:focus-visible {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='main']:active:enabled {
      background-color: var(--wui-color-accent-080);
    }

    button[data-variant='accent']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }

    button[data-variant='accent']:active:enabled {
      background-color: var(--wui-color-accent-glass-020);
    }

    button[data-variant='shade']:focus-visible,
    button[data-variant='gray']:focus-visible,
    button[data-variant='shade']:hover,
    button[data-variant='gray']:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    button[data-variant='gray']:active,
    button[data-variant='shade']:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  button.disabled {
    color: var(--wui-color-gray-glass-020);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    pointer-events: none;
  }
`,es=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ti=class extends ee{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const t=this.size==="sm"?"small-600":"paragraph-600";return A`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?A`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${t} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};ti.styles=[$e,bt,TS],es([N()],ti.prototype,"variant",void 0),es([N()],ti.prototype,"imageSrc",void 0),es([N({type:Boolean})],ti.prototype,"disabled",void 0),es([N()],ti.prototype,"icon",void 0),es([N()],ti.prototype,"size",void 0),es([N()],ti.prototype,"text",void 0),ti=es([Q("wui-chip-button")],ti);var RS=le`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,jc=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let gn=class extends ee{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return A`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};gn.styles=[$e,bt,RS],jc([N({type:Boolean})],gn.prototype,"disabled",void 0),jc([N()],gn.prototype,"label",void 0),jc([N()],gn.prototype,"buttonLabel",void 0),gn=jc([Q("wui-cta-button")],gn);var LS=le`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,ag=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let zc=class extends ee{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:e,play_store:r,chrome_store:i,homepage:s}=this.wallet,n=H.isMobile(),o=H.isIos(),a=H.isAndroid(),c=[e,r,s,i].filter(Boolean).length>1,l=lt.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!n?A`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>G.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&s?A`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:e&&o?A`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&a?A`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&H.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&H.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&H.openHref(this.wallet.homepage,"_blank")}};zc.styles=[LS],ag([N({type:Object})],zc.prototype,"wallet",void 0),zc=ag([Q("w3m-mobile-download-links")],zc);var US=le`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,Cr=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};class wt extends ee{constructor(){var e,r,i,s,n;super(),this.wallet=(e=G.state.data)==null?void 0:e.wallet,this.connector=(r=G.state.data)==null?void 0:r.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=st.getWalletImage(this.wallet)??st.getConnectorImage(this.connector),this.name=((i=this.wallet)==null?void 0:i.name)??((s=this.connector)==null?void 0:s.name)??"Wallet",this.isRetrying=!1,this.uri=ie.state.wcUri,this.error=ie.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(ie.subscribeKey("wcUri",o=>{var a;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),ie.subscribeKey("wcError",o=>this.error=o),ie.subscribeKey("buffering",o=>this.buffering=o)),(H.isTelegram()||H.isSafari())&&H.isIos()&&ie.state.wcUri&&((n=this.onConnect)==null||n.call(this))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var i;(i=this.onRender)==null||i.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let r=`Continue in ${this.name}`;return this.buffering&&(r="Connecting..."),this.error&&(r="Connection declined"),A`
      <wui-flex
        data-error=${ce(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ce(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${r}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?A`
              <wui-button
                variant="accent"
                size="md"
                ?disabled=${this.isRetrying||!this.error&&this.buffering||this.isLoading}
                @click=${this.onTryAgain.bind(this)}
                data-testid="w3m-connecting-widget-secondary-button"
              >
                <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
                ${this.secondaryBtnLabel}
              </wui-button>
            `:null}
      </wui-flex>

      ${this.isWalletConnect?A`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200" data-testid="wui-link-copy">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e,r;this.error&&!this.showRetry&&(this.showRetry=!0,(r=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button"))==null||r.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var e,r;this.buffering||(ie.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(r=this.onConnect)==null||r.call(this))}loaderTemplate(){const e=rt.state.themeVariables["--w3m-border-radius-master"],r=e?parseInt(e.replace("px",""),10):4;return A`<wui-loading-thumbnail radius=${r*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(H.copyToClopboard(this.uri),Me.showSuccess("Link copied"))}catch{Me.showError("Failed to copy")}}}wt.styles=US,Cr([X()],wt.prototype,"isRetrying",void 0),Cr([X()],wt.prototype,"uri",void 0),Cr([X()],wt.prototype,"error",void 0),Cr([X()],wt.prototype,"ready",void 0),Cr([X()],wt.prototype,"showRetry",void 0),Cr([X()],wt.prototype,"secondaryBtnLabel",void 0),Cr([X()],wt.prototype,"secondaryLabel",void 0),Cr([X()],wt.prototype,"buffering",void 0),Cr([X()],wt.prototype,"isLoading",void 0),Cr([N({type:Boolean})],wt.prototype,"isMobile",void 0),Cr([N()],wt.prototype,"onRetry",void 0);var BS=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let cg=class extends wt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var t;try{this.error=!1;const{connectors:e}=J.state,r=e.find(i=>{var s,n,o;return i.type==="ANNOUNCED"&&((s=i.info)==null?void 0:s.rdns)===((n=this.wallet)==null?void 0:n.rdns)||i.type==="INJECTED"||i.name===((o=this.wallet)==null?void 0:o.name)});if(r)await ie.connectExternal(r,r.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");Ee.close(),we.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((t=this.wallet)==null?void 0:t.name)||"Unknown"}})}catch(e){we.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};cg=BS([Q("w3m-connecting-wc-browser")],cg);var MS=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let lg=class extends wt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:r}=this.wallet,{redirect:i,href:s}=H.formatNativeUrl(e,this.uri);ie.setWcLinking({name:r,href:s}),ie.setRecentWallet(this.wallet),H.openHref(i,"_blank")}catch{this.error=!0}}};lg=MS([Q("w3m-connecting-wc-desktop")],lg);var DS=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ug=class extends wt{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))},this.onConnect=()=>{var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:e,name:r}=this.wallet,{redirect:i,href:s}=H.formatNativeUrl(e,this.uri);ie.setWcLinking({name:r,href:s}),ie.setRecentWallet(this.wallet);const n=H.isIframe()?"_top":"_self";H.openHref(i,n),clearTimeout(this.labelTimeout),this.secondaryLabel=it.CONNECT_LABELS.MOBILE}catch(e){we.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:e instanceof Error?e.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.initializeStateAndTimers(),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}initializeStateAndTimers(){this.secondaryBtnLabel=void 0,this.secondaryLabel=it.CONNECT_LABELS.MOBILE,this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=it.CONNECT_LABELS.MOBILE},it.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},it.THREE_SEC_MS)}onBuffering(){const t=H.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(ie.setBuffering(!0),setTimeout(()=>{ie.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout),this.initializeStateAndTimers(),ie.setWcError(!1),this.onConnect())}};ug=DS([Q("w3m-connecting-wc-mobile")],ug);var Wo={},jS=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Pm={},Yt={};let oh;const zS=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Yt.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17},Yt.getSymbolTotalCodewords=function(t){return zS[t]},Yt.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e},Yt.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');oh=t},Yt.isKanjiModeEnabled=function(){return typeof oh<"u"},Yt.toSJIS=function(t){return oh(t)};var eu={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+r)}}t.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},t.from=function(r,i){if(t.isValid(r))return r;try{return e(r)}catch{return i}}})(eu);function Om(){this.buffer=[],this.length=0}Om.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let r=0;r<e;r++)this.putBit((t>>>e-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var qS=Om;function Vo(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Vo.prototype.set=function(t,e,r,i){const s=t*this.size+e;this.data[s]=r,i&&(this.reservedBit[s]=!0)},Vo.prototype.get=function(t,e){return this.data[t*this.size+e]},Vo.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},Vo.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var HS=Vo,Tm={};(function(t){const e=Yt.getSymbolSize;t.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,s=e(r),n=s===145?26:Math.ceil((s-13)/(2*i-2))*2,o=[s-7];for(let a=1;a<i-1;a++)o[a]=o[a-1]-n;return o.push(6),o.reverse()},t.getPositions=function(r){const i=[],s=t.getRowColCoords(r),n=s.length;for(let o=0;o<n;o++)for(let a=0;a<n;a++)o===0&&a===0||o===0&&a===n-1||o===n-1&&a===0||i.push([s[o],s[a]]);return i}})(Tm);var Rm={};const WS=Yt.getSymbolSize,hg=7;Rm.getPositions=function(t){const e=WS(t);return[[0,0],[e-hg,0],[0,e-hg]]};var Lm={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},t.from=function(i){return t.isValid(i)?parseInt(i,10):void 0},t.getPenaltyN1=function(i){const s=i.size;let n=0,o=0,a=0,c=null,l=null;for(let u=0;u<s;u++){o=a=0,c=l=null;for(let h=0;h<s;h++){let d=i.get(u,h);d===c?o++:(o>=5&&(n+=e.N1+(o-5)),c=d,o=1),d=i.get(h,u),d===l?a++:(a>=5&&(n+=e.N1+(a-5)),l=d,a=1)}o>=5&&(n+=e.N1+(o-5)),a>=5&&(n+=e.N1+(a-5))}return n},t.getPenaltyN2=function(i){const s=i.size;let n=0;for(let o=0;o<s-1;o++)for(let a=0;a<s-1;a++){const c=i.get(o,a)+i.get(o,a+1)+i.get(o+1,a)+i.get(o+1,a+1);(c===4||c===0)&&n++}return n*e.N2},t.getPenaltyN3=function(i){const s=i.size;let n=0,o=0,a=0;for(let c=0;c<s;c++){o=a=0;for(let l=0;l<s;l++)o=o<<1&2047|i.get(c,l),l>=10&&(o===1488||o===93)&&n++,a=a<<1&2047|i.get(l,c),l>=10&&(a===1488||a===93)&&n++}return n*e.N3},t.getPenaltyN4=function(i){let s=0;const n=i.data.length;for(let o=0;o<n;o++)s+=i.data[o];return Math.abs(Math.ceil(s*100/n/5)-10)*e.N4};function r(i,s,n){switch(i){case t.Patterns.PATTERN000:return(s+n)%2===0;case t.Patterns.PATTERN001:return s%2===0;case t.Patterns.PATTERN010:return n%3===0;case t.Patterns.PATTERN011:return(s+n)%3===0;case t.Patterns.PATTERN100:return(Math.floor(s/2)+Math.floor(n/3))%2===0;case t.Patterns.PATTERN101:return s*n%2+s*n%3===0;case t.Patterns.PATTERN110:return(s*n%2+s*n%3)%2===0;case t.Patterns.PATTERN111:return(s*n%3+(s+n)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}t.applyMask=function(i,s){const n=s.size;for(let o=0;o<n;o++)for(let a=0;a<n;a++)s.isReserved(a,o)||s.xor(a,o,r(i,a,o))},t.getBestMask=function(i,s){const n=Object.keys(t.Patterns).length;let o=0,a=1/0;for(let c=0;c<n;c++){s(c),t.applyMask(c,i);const l=t.getPenaltyN1(i)+t.getPenaltyN2(i)+t.getPenaltyN3(i)+t.getPenaltyN4(i);t.applyMask(c,i),l<a&&(a=l,o=c)}return o}})(Lm);var $l={};const Ii=eu,qc=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Hc=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];$l.getBlocksCount=function(t,e){switch(e){case Ii.L:return qc[(t-1)*4+0];case Ii.M:return qc[(t-1)*4+1];case Ii.Q:return qc[(t-1)*4+2];case Ii.H:return qc[(t-1)*4+3];default:return}},$l.getTotalCodewordsCount=function(t,e){switch(e){case Ii.L:return Hc[(t-1)*4+0];case Ii.M:return Hc[(t-1)*4+1];case Ii.Q:return Hc[(t-1)*4+2];case Ii.H:return Hc[(t-1)*4+3];default:return}};var Um={},Wc={};const No=new Uint8Array(512),Vc=new Uint8Array(256);(function(){let t=1;for(let e=0;e<255;e++)No[e]=t,Vc[t]=e,t<<=1,t&256&&(t^=285);for(let e=255;e<512;e++)No[e]=No[e-255]})(),Wc.log=function(t){if(t<1)throw new Error("log("+t+")");return Vc[t]},Wc.exp=function(t){return No[t]},Wc.mul=function(t,e){return t===0||e===0?0:No[Vc[t]+Vc[e]]},function(t){const e=Wc;t.mul=function(r,i){const s=new Uint8Array(r.length+i.length-1);for(let n=0;n<r.length;n++)for(let o=0;o<i.length;o++)s[n+o]^=e.mul(r[n],i[o]);return s},t.mod=function(r,i){let s=new Uint8Array(r);for(;s.length-i.length>=0;){const n=s[0];for(let a=0;a<i.length;a++)s[a]^=e.mul(i[a],n);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},t.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let s=0;s<r;s++)i=t.mul(i,new Uint8Array([1,e.exp(s)]));return i}}(Um);const dg=Um;function gd(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}gd.prototype.initialize=function(t){this.degree=t,this.genPoly=dg.generateECPolynomial(this.degree)},gd.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const r=dg.mod(e,this.genPoly),i=this.degree-r.length;if(i>0){const s=new Uint8Array(this.degree);return s.set(r,i),s}return r};var VS=gd,Bm={},ji={},fd={};fd.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var Hr={};const Mm="[0-9]+",FS="[A-Z $%*+\\-./:]+";let Ba="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ba=Ba.replace(/u/g,"\\u");const KS="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ba+`)(?:.|[\r
]))+`;Hr.KANJI=new RegExp(Ba,"g"),Hr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Hr.BYTE=new RegExp(KS,"g"),Hr.NUMERIC=new RegExp(Mm,"g"),Hr.ALPHANUMERIC=new RegExp(FS,"g");const ZS=new RegExp("^"+Ba+"$"),GS=new RegExp("^"+Mm+"$"),YS=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Hr.testKanji=function(t){return ZS.test(t)},Hr.testNumeric=function(t){return GS.test(t)},Hr.testAlphanumeric=function(t){return YS.test(t)},function(t){const e=fd,r=Hr;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(s,n){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?s.ccBits[0]:n<27?s.ccBits[1]:s.ccBits[2]},t.getBestModeForData=function(s){return r.testNumeric(s)?t.NUMERIC:r.testAlphanumeric(s)?t.ALPHANUMERIC:r.testKanji(s)?t.KANJI:t.BYTE},t.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},t.isValid=function(s){return s&&s.bit&&s.ccBits};function i(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+s)}}t.from=function(s,n){if(t.isValid(s))return s;try{return i(s)}catch{return n}}}(ji),function(t){const e=Yt,r=$l,i=eu,s=ji,n=fd,o=7973,a=e.getBCHDigit(o);function c(d,p,w){for(let g=1;g<=40;g++)if(p<=t.getCapacity(g,w,d))return g}function l(d,p){return s.getCharCountIndicator(d,p)+4}function u(d,p){let w=0;return d.forEach(function(g){const f=l(g.mode,p);w+=f+g.getBitsLength()}),w}function h(d,p){for(let w=1;w<=40;w++)if(u(d,w)<=t.getCapacity(w,p,s.MIXED))return w}t.from=function(d,p){return n.isValid(d)?parseInt(d,10):p},t.getCapacity=function(d,p,w){if(!n.isValid(d))throw new Error("Invalid QR Code version");typeof w>"u"&&(w=s.BYTE);const g=e.getSymbolTotalCodewords(d),f=r.getTotalCodewordsCount(d,p),m=(g-f)*8;if(w===s.MIXED)return m;const v=m-l(w,d);switch(w){case s.NUMERIC:return Math.floor(v/10*3);case s.ALPHANUMERIC:return Math.floor(v/11*2);case s.KANJI:return Math.floor(v/13);case s.BYTE:default:return Math.floor(v/8)}},t.getBestVersionForData=function(d,p){let w;const g=i.from(p,i.M);if(Array.isArray(d)){if(d.length>1)return h(d,g);if(d.length===0)return 1;w=d[0]}else w=d;return c(w.mode,w.getLength(),g)},t.getEncodedBits=function(d){if(!n.isValid(d)||d<7)throw new Error("Invalid QR Code version");let p=d<<12;for(;e.getBCHDigit(p)-a>=0;)p^=o<<e.getBCHDigit(p)-a;return d<<12|p}}(Bm);var Dm={};const wd=Yt,jm=1335,JS=21522,pg=wd.getBCHDigit(jm);Dm.getEncodedBits=function(t,e){const r=t.bit<<3|e;let i=r<<10;for(;wd.getBCHDigit(i)-pg>=0;)i^=jm<<wd.getBCHDigit(i)-pg;return(r<<10|i)^JS};var zm={};const XS=ji;function Cn(t){this.mode=XS.NUMERIC,this.data=t.toString()}Cn.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},Cn.prototype.getLength=function(){return this.data.length},Cn.prototype.getBitsLength=function(){return Cn.getBitsLength(this.data.length)},Cn.prototype.write=function(t){let e,r,i;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),i=parseInt(r,10),t.put(i,10);const s=this.data.length-e;s>0&&(r=this.data.substr(e),i=parseInt(r,10),t.put(i,s*3+1))};var QS=Cn;const e_=ji,ah=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function En(t){this.mode=e_.ALPHANUMERIC,this.data=t}En.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},En.prototype.getLength=function(){return this.data.length},En.prototype.getBitsLength=function(){return En.getBitsLength(this.data.length)},En.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=ah.indexOf(this.data[e])*45;r+=ah.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(ah.indexOf(this.data[e]),6)};var t_=En,r_=function(t){for(var e=[],r=t.length,i=0;i<r;i++){var s=t.charCodeAt(i);if(s>=55296&&s<=56319&&r>i+1){var n=t.charCodeAt(i+1);n>=56320&&n<=57343&&(s=(s-55296)*1024+n-56320+65536,i+=1)}if(s<128){e.push(s);continue}if(s<2048){e.push(s>>6|192),e.push(s&63|128);continue}if(s<55296||s>=57344&&s<65536){e.push(s>>12|224),e.push(s>>6&63|128),e.push(s&63|128);continue}if(s>=65536&&s<=1114111){e.push(s>>18|240),e.push(s>>12&63|128),e.push(s>>6&63|128),e.push(s&63|128);continue}e.push(239,191,189)}return new Uint8Array(e).buffer};const i_=r_,s_=ji;function xn(t){this.mode=s_.BYTE,typeof t=="string"&&(t=i_(t)),this.data=new Uint8Array(t)}xn.getBitsLength=function(t){return t*8},xn.prototype.getLength=function(){return this.data.length},xn.prototype.getBitsLength=function(){return xn.getBitsLength(this.data.length)},xn.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var n_=xn;const o_=ji,a_=Yt;function In(t){this.mode=o_.KANJI,this.data=t}In.getBitsLength=function(t){return t*13},In.prototype.getLength=function(){return this.data.length},In.prototype.getBitsLength=function(){return In.getBitsLength(this.data.length)},In.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=a_.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),t.put(r,13)}};var c_=In,gg={exports:{}};(function(t){var e={single_source_shortest_paths:function(r,i,s){var n={},o={};o[i]=0;var a=e.PriorityQueue.make();a.push(i,0);for(var c,l,u,h,d,p,w,g,f;!a.empty();){c=a.pop(),l=c.value,h=c.cost,d=r[l]||{};for(u in d)d.hasOwnProperty(u)&&(p=d[u],w=h+p,g=o[u],f=typeof o[u]>"u",(f||g>w)&&(o[u]=w,a.push(u,w),n[u]=l))}if(typeof s<"u"&&typeof o[s]>"u"){var m=["Could not find a path from ",i," to ",s,"."].join("");throw new Error(m)}return n},extract_shortest_path_from_predecessor_list:function(r,i){for(var s=[],n=i;n;)s.push(n),r[n],n=r[n];return s.reverse(),s},find_path:function(r,i,s){var n=e.single_source_shortest_paths(r,i,s);return e.extract_shortest_path_from_predecessor_list(n,s)},PriorityQueue:{make:function(r){var i=e.PriorityQueue,s={},n;r=r||{};for(n in i)i.hasOwnProperty(n)&&(s[n]=i[n]);return s.queue=[],s.sorter=r.sorter||i.default_sorter,s},default_sorter:function(r,i){return r.cost-i.cost},push:function(r,i){var s={value:r,cost:i};this.queue.push(s),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(gg),function(t){const e=ji,r=QS,i=t_,s=n_,n=c_,o=Hr,a=Yt,c=gg.exports;function l(m){return unescape(encodeURIComponent(m)).length}function u(m,v,b){const y=[];let $;for(;($=m.exec(b))!==null;)y.push({data:$[0],index:$.index,mode:v,length:$[0].length});return y}function h(m){const v=u(o.NUMERIC,e.NUMERIC,m),b=u(o.ALPHANUMERIC,e.ALPHANUMERIC,m);let y,$;return a.isKanjiModeEnabled()?(y=u(o.BYTE,e.BYTE,m),$=u(o.KANJI,e.KANJI,m)):(y=u(o.BYTE_KANJI,e.BYTE,m),$=[]),v.concat(b,y,$).sort(function(_,P){return _.index-P.index}).map(function(_){return{data:_.data,mode:_.mode,length:_.length}})}function d(m,v){switch(v){case e.NUMERIC:return r.getBitsLength(m);case e.ALPHANUMERIC:return i.getBitsLength(m);case e.KANJI:return n.getBitsLength(m);case e.BYTE:return s.getBitsLength(m)}}function p(m){return m.reduce(function(v,b){const y=v.length-1>=0?v[v.length-1]:null;return y&&y.mode===b.mode?(v[v.length-1].data+=b.data,v):(v.push(b),v)},[])}function w(m){const v=[];for(let b=0;b<m.length;b++){const y=m[b];switch(y.mode){case e.NUMERIC:v.push([y,{data:y.data,mode:e.ALPHANUMERIC,length:y.length},{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.ALPHANUMERIC:v.push([y,{data:y.data,mode:e.BYTE,length:y.length}]);break;case e.KANJI:v.push([y,{data:y.data,mode:e.BYTE,length:l(y.data)}]);break;case e.BYTE:v.push([{data:y.data,mode:e.BYTE,length:l(y.data)}])}}return v}function g(m,v){const b={},y={start:{}};let $=["start"];for(let _=0;_<m.length;_++){const P=m[_],k=[];for(let S=0;S<P.length;S++){const U=P[S],L=""+_+S;k.push(L),b[L]={node:U,lastCount:0},y[L]={};for(let M=0;M<$.length;M++){const F=$[M];b[F]&&b[F].node.mode===U.mode?(y[F][L]=d(b[F].lastCount+U.length,U.mode)-d(b[F].lastCount,U.mode),b[F].lastCount+=U.length):(b[F]&&(b[F].lastCount=U.length),y[F][L]=d(U.length,U.mode)+4+e.getCharCountIndicator(U.mode,v))}}$=k}for(let _=0;_<$.length;_++)y[$[_]].end=0;return{map:y,table:b}}function f(m,v){let b;const y=e.getBestModeForData(m);if(b=e.from(v,y),b!==e.BYTE&&b.bit<y.bit)throw new Error('"'+m+'" cannot be encoded with mode '+e.toString(b)+`.
 Suggested mode is: `+e.toString(y));switch(b===e.KANJI&&!a.isKanjiModeEnabled()&&(b=e.BYTE),b){case e.NUMERIC:return new r(m);case e.ALPHANUMERIC:return new i(m);case e.KANJI:return new n(m);case e.BYTE:return new s(m)}}t.fromArray=function(m){return m.reduce(function(v,b){return typeof b=="string"?v.push(f(b,null)):b.data&&v.push(f(b.data,b.mode)),v},[])},t.fromString=function(m,v){const b=h(m,a.isKanjiModeEnabled()),y=w(b),$=g(y,v),_=c.find_path($.map,"start","end"),P=[];for(let k=1;k<_.length-1;k++)P.push($.table[_[k]].node);return t.fromArray(p(P))},t.rawSplit=function(m){return t.fromArray(h(m,a.isKanjiModeEnabled()))}}(zm);const tu=Yt,ch=eu,l_=qS,u_=HS,h_=Tm,d_=Rm,md=Lm,vd=$l,p_=VS,kl=Bm,g_=Dm,f_=ji,lh=zm;function w_(t,e){const r=t.size,i=d_.getPositions(e);for(let s=0;s<i.length;s++){const n=i[s][0],o=i[s][1];for(let a=-1;a<=7;a++)if(!(n+a<=-1||r<=n+a))for(let c=-1;c<=7;c++)o+c<=-1||r<=o+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(n+a,o+c,!0,!0):t.set(n+a,o+c,!1,!0))}}function m_(t){const e=t.size;for(let r=8;r<e-8;r++){const i=r%2===0;t.set(r,6,i,!0),t.set(6,r,i,!0)}}function v_(t,e){const r=h_.getPositions(e);for(let i=0;i<r.length;i++){const s=r[i][0],n=r[i][1];for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++)o===-2||o===2||a===-2||a===2||o===0&&a===0?t.set(s+o,n+a,!0,!0):t.set(s+o,n+a,!1,!0)}}function b_(t,e){const r=t.size,i=kl.getEncodedBits(e);let s,n,o;for(let a=0;a<18;a++)s=Math.floor(a/3),n=a%3+r-8-3,o=(i>>a&1)===1,t.set(s,n,o,!0),t.set(n,s,o,!0)}function uh(t,e,r){const i=t.size,s=g_.getEncodedBits(e,r);let n,o;for(n=0;n<15;n++)o=(s>>n&1)===1,n<6?t.set(n,8,o,!0):n<8?t.set(n+1,8,o,!0):t.set(i-15+n,8,o,!0),n<8?t.set(8,i-n-1,o,!0):n<9?t.set(8,15-n-1+1,o,!0):t.set(8,15-n-1,o,!0);t.set(i-8,8,1,!0)}function y_(t,e){const r=t.size;let i=-1,s=r-1,n=7,o=0;for(let a=r-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(s,a-c)){let l=!1;o<e.length&&(l=(e[o]>>>n&1)===1),t.set(s,a-c,l),n--,n===-1&&(o++,n=7)}if(s+=i,s<0||r<=s){s-=i,i=-i;break}}}function C_(t,e,r){const i=new l_;r.forEach(function(c){i.put(c.mode.bit,4),i.put(c.getLength(),f_.getCharCountIndicator(c.mode,t)),c.write(i)});const s=tu.getSymbolTotalCodewords(t),n=vd.getTotalCodewordsCount(t,e),o=(s-n)*8;for(i.getLengthInBits()+4<=o&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const a=(o-i.getLengthInBits())/8;for(let c=0;c<a;c++)i.put(c%2?17:236,8);return E_(i,t,e)}function E_(t,e,r){const i=tu.getSymbolTotalCodewords(e),s=vd.getTotalCodewordsCount(e,r),n=i-s,o=vd.getBlocksCount(e,r),a=i%o,c=o-a,l=Math.floor(i/o),u=Math.floor(n/o),h=u+1,d=l-u,p=new p_(d);let w=0;const g=new Array(o),f=new Array(o);let m=0;const v=new Uint8Array(t.buffer);for(let P=0;P<o;P++){const k=P<c?u:h;g[P]=v.slice(w,w+k),f[P]=p.encode(g[P]),w+=k,m=Math.max(m,k)}const b=new Uint8Array(i);let y=0,$,_;for($=0;$<m;$++)for(_=0;_<o;_++)$<g[_].length&&(b[y++]=g[_][$]);for($=0;$<d;$++)for(_=0;_<o;_++)b[y++]=f[_][$];return b}function x_(t,e,r,i){let s;if(Array.isArray(t))s=lh.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const u=lh.rawSplit(t);l=kl.getBestVersionForData(u,r)}s=lh.fromString(t,l||40)}else throw new Error("Invalid data");const n=kl.getBestVersionForData(s,r);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=n;else if(e<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const o=C_(e,r,s),a=tu.getSymbolSize(e),c=new u_(a);return w_(c,e),m_(c),v_(c,e),uh(c,r,0),e>=7&&b_(c,e),y_(c,o),isNaN(i)&&(i=md.getBestMask(c,uh.bind(null,c,r))),md.applyMask(i,c),uh(c,r,i),{modules:c,version:e,errorCorrectionLevel:r,maskPattern:i,segments:s}}Pm.create=function(t,e){if(typeof t>"u"||t==="")throw new Error("No input text");let r=ch.M,i,s;return typeof e<"u"&&(r=ch.from(e.errorCorrectionLevel,ch.M),i=kl.from(e.version),s=md.from(e.maskPattern),e.toSJISFunc&&tu.setToSJISFunction(e.toSJISFunc)),x_(t,i,r,s)};var qm={},bd={};(function(t){function e(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let i=r.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+r);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(n){return[n,n]}))),i.length===6&&i.push("F","F");const s=parseInt(i.join(""),16);return{r:s>>24&255,g:s>>16&255,b:s>>8&255,a:s&255,hex:"#"+i.slice(0,6).join("")}}t.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,s=r.width&&r.width>=21?r.width:void 0,n=r.scale||4;return{width:s,scale:s?4:n,margin:i,color:{dark:e(r.color.dark||"#000000ff"),light:e(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},t.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},t.getImageWidth=function(r,i){const s=t.getScale(r,i);return Math.floor((r+i.margin*2)*s)},t.qrToImageData=function(r,i,s){const n=i.modules.size,o=i.modules.data,a=t.getScale(n,s),c=Math.floor((n+s.margin*2)*a),l=s.margin*a,u=[s.color.light,s.color.dark];for(let h=0;h<c;h++)for(let d=0;d<c;d++){let p=(h*c+d)*4,w=s.color.light;if(h>=l&&d>=l&&h<c-l&&d<c-l){const g=Math.floor((h-l)/a),f=Math.floor((d-l)/a);w=u[o[g*n+f]?1:0]}r[p++]=w.r,r[p++]=w.g,r[p++]=w.b,r[p]=w.a}}})(bd),function(t){const e=bd;function r(s,n,o){s.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=o,n.width=o,n.style.height=o+"px",n.style.width=o+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(s,n,o){let a=o,c=n;typeof a>"u"&&(!n||!n.getContext)&&(a=n,n=void 0),n||(c=i()),a=e.getOptions(a);const l=e.getImageWidth(s.modules.size,a),u=c.getContext("2d"),h=u.createImageData(l,l);return e.qrToImageData(h.data,s,a),r(u,c,l),u.putImageData(h,0,0),c},t.renderToDataURL=function(s,n,o){let a=o;typeof a>"u"&&(!n||!n.getContext)&&(a=n,n=void 0),a||(a={});const c=t.render(s,n,a),l=a.type||"image/png",u=a.rendererOpts||{};return c.toDataURL(l,u.quality)}}(qm);var Hm={};const I_=bd;function fg(t,e){const r=t.a/255,i=e+'="'+t.hex+'"';return r<1?i+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':i}function hh(t,e,r){let i=t+e;return typeof r<"u"&&(i+=" "+r),i}function A_(t,e,r){let i="",s=0,n=!1,o=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!n&&(n=!0),t[a]?(o++,a>0&&c>0&&t[a-1]||(i+=n?hh("M",c+r,.5+l+r):hh("m",s,0),s=0,n=!1),c+1<e&&t[a+1]||(i+=hh("h",o),o=0)):s++}return i}Hm.render=function(t,e,r){const i=I_.getOptions(e),s=t.modules.size,n=t.modules.data,o=s+i.margin*2,a=i.color.light.a?"<path "+fg(i.color.light,"fill")+' d="M0 0h'+o+"v"+o+'H0z"/>':"",c="<path "+fg(i.color.dark,"stroke")+' d="'+A_(n,s,i.margin)+'"/>',l='viewBox="0 0 '+o+" "+o+'"',u='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+c+`</svg>
`;return typeof r=="function"&&r(null,u),u};const S_=jS,yd=Pm,wg=qm,__=Hm;function dh(t,e,r,i,s){const n=[].slice.call(arguments,1),o=n.length,a=typeof n[o-1]=="function";if(!a&&!S_())throw new Error("Callback required as last argument");if(a){if(o<2)throw new Error("Too few arguments provided");o===2?(s=r,r=e,e=i=void 0):o===3&&(e.getContext&&typeof s>"u"?(s=i,i=void 0):(s=i,i=r,r=e,e=void 0))}else{if(o<1)throw new Error("Too few arguments provided");return o===1?(r=e,e=i=void 0):o===2&&!e.getContext&&(i=r,r=e,e=void 0),new Promise(function(c,l){try{const u=yd.create(r,i);c(t(u,e,i))}catch(u){l(u)}})}try{const c=yd.create(r,i);s(null,t(c,e,i))}catch(c){s(c)}}Wo.create=yd.create,Wo.toCanvas=dh.bind(null,wg.render),Wo.toDataURL=dh.bind(null,wg.renderToDataURL),Wo.toString=dh.bind(null,function(t,e,r){return __.render(t,r)});const $_=.1,mg=2.5,ri=7;function ph(t,e,r){return t===e?!1:(t-e<0?e-t:t-e)<=r+$_}function k_(t,e){const r=Array.prototype.slice.call(Wo.create(t,{errorCorrectionLevel:e}).modules.data,0),i=Math.sqrt(r.length);return r.reduce((s,n,o)=>(o%i===0?s.push([n]):s[s.length-1].push(n))&&s,[])}const N_={generate({uri:t,size:e,logoSize:r,dotColor:i="#141414"}){const s="transparent",n=[],o=k_(t,"Q"),a=e/o.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:w,y:g})=>{const f=(o.length-ri)*a*w,m=(o.length-ri)*a*g,v=.45;for(let b=0;b<c.length;b+=1){const y=a*(ri-b*2);n.push(W`
            <rect
              fill=${b===2?i:s}
              width=${b===0?y-5:y}
              rx= ${b===0?(y-5)*v:y*v}
              ry= ${b===0?(y-5)*v:y*v}
              stroke=${i}
              stroke-width=${b===0?5:0}
              height=${b===0?y-5:y}
              x= ${b===0?m+a*b+5/2:m+a*b}
              y= ${b===0?f+a*b+5/2:f+a*b}
            />
          `)}});const l=Math.floor((r+25)/a),u=o.length/2-l/2,h=o.length/2+l/2-1,d=[];o.forEach((w,g)=>{w.forEach((f,m)=>{if(o[g][m]&&!(g<ri&&m<ri||g>o.length-(ri+1)&&m<ri||g<ri&&m>o.length-(ri+1))&&!(g>u&&g<h&&m>u&&m<h)){const v=g*a+a/2,b=m*a+a/2;d.push([v,b])}})});const p={};return d.forEach(([w,g])=>{var f;p[w]?(f=p[w])==null||f.push(g):p[w]=[g]}),Object.entries(p).map(([w,g])=>{const f=g.filter(m=>g.every(v=>!ph(m,v,a)));return[Number(w),f]}).forEach(([w,g])=>{g.forEach(f=>{n.push(W`<circle cx=${w} cy=${f} fill=${i} r=${a/mg} />`)})}),Object.entries(p).filter(([w,g])=>g.length>1).map(([w,g])=>{const f=g.filter(m=>g.some(v=>ph(m,v,a)));return[Number(w),f]}).map(([w,g])=>{g.sort((m,v)=>m<v?-1:1);const f=[];for(const m of g){const v=f.find(b=>b.some(y=>ph(m,y,a)));v?v.push(m):f.push([m])}return[w,f.map(m=>[m[0],m[m.length-1]])]}).forEach(([w,g])=>{g.forEach(([f,m])=>{n.push(W`
              <line
                x1=${w}
                x2=${w}
                y1=${f}
                y2=${m}
                stroke=${i}
                stroke-width=${a/(mg/2)}
                stroke-linecap="round"
              />
            `)})}),n}};var P_=le`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: var(--local-icon-color) !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,ii=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const O_="#3396ff";let Er=class extends ee{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??O_}
    `,A`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return W`
      <svg height=${t} width=${t}>
        ${N_.generate({uri:this.uri,size:t,logoSize:this.arenaClear?0:t/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?A`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:A`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Er.styles=[$e,P_],ii([N()],Er.prototype,"uri",void 0),ii([N({type:Number})],Er.prototype,"size",void 0),ii([N()],Er.prototype,"theme",void 0),ii([N()],Er.prototype,"imageSrc",void 0),ii([N()],Er.prototype,"alt",void 0),ii([N()],Er.prototype,"color",void 0),ii([N({type:Boolean})],Er.prototype,"arenaClear",void 0),ii([N({type:Boolean})],Er.prototype,"farcaster",void 0),Er=ii([Q("wui-qr-code")],Er);var T_=le`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  :host([variant='light']) {
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-150) 5%,
      var(--wui-color-bg-150) 48%,
      var(--wui-color-bg-200) 55%,
      var(--wui-color-bg-200) 60%,
      var(--wui-color-bg-200) calc(60% + 10px),
      var(--wui-color-bg-150) calc(60% + 12px),
      var(--wui-color-bg-150) 100%
    );
    background-size: 250%;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,Po=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ts=class extends ee{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,A`<slot></slot>`}};ts.styles=[T_],Po([N()],ts.prototype,"width",void 0),Po([N()],ts.prototype,"height",void 0),Po([N()],ts.prototype,"borderRadius",void 0),Po([N()],ts.prototype,"variant",void 0),ts=Po([Q("wui-shimmer")],ts);var R_=le`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`,L_=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let gh=class extends ee{render(){return A`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};gh.styles=[$e,bt,R_],gh=L_([Q("wui-ux-by-reown")],gh);var U_=le`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`,B_=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let fh=class extends wt{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(e=>e()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),A`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","xl","xl","xl"]}
        gap="xl"
      >
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,e=this.wallet?this.wallet.name:void 0;return ie.setWcLinking(void 0),ie.setRecentWallet(this.wallet),A` <wui-qr-code
      size=${t}
      theme=${rt.state.themeMode}
      uri=${this.uri}
      imageSrc=${ce(st.getWalletImage(this.wallet))}
      color=${ce(rt.state.themeVariables["--w3m-qr-color"])}
      alt=${ce(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return A`<wui-link
      .disabled=${t}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};fh.styles=U_,fh=B_([Q("w3m-connecting-wc-qrcode")],fh);var M_=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let vg=class extends ee{constructor(){var t;if(super(),this.wallet=(t=G.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return A`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ce(st.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};vg=M_([Q("w3m-connecting-wc-unsupported")],vg);var bg=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let wh=class extends wt{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(ie.subscribeKey("wcUri",()=>{this.updateLoadingState()})),we.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:r}=this.wallet,{redirect:i,href:s}=H.formatUniversalUrl(e,this.uri);ie.setWcLinking({name:r,href:s}),ie.setRecentWallet(this.wallet),H.openHref(i,"_blank")}catch{this.error=!0}}};bg([X()],wh.prototype,"isLoading",void 0),wh=bg([Q("w3m-connecting-wc-web")],wh);var Fc=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Oo=class extends ee{constructor(){var t;super(),this.wallet=(t=G.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!j.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return A`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(t=!1){if(!(this.platform==="browser"||j.state.manualWCControl&&!t))try{const{wcPairingExpiry:e,status:r}=ie.state;(t||j.state.enableEmbedded||H.isPairingExpired(e)||r==="connecting")&&(await ie.connectWalletConnect(),this.isSiwxEnabled||Ee.close())}catch(e){we.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),ie.setWcError(!0),Me.showError(e.message??"Connection error"),ie.resetWcConnection(),G.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:e,webapp_link:r,injected:i,rdns:s}=this.wallet,n=i==null?void 0:i.map(({injected_id:p})=>p).filter(Boolean),o=[...s?[s]:n??[]],a=j.state.isUniversalProvider?!1:o.length,c=t,l=r,u=ie.checkInstalled(o),h=a&&u,d=e&&!H.isMobile();h&&!C.state.noAdapters&&this.platforms.push("browser"),c&&this.platforms.push(H.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),d&&this.platforms.push("desktop"),!h&&a&&!C.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return A`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return A`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return A`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return A`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return A`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return A`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?A`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const e=(r=this.shadowRoot)==null?void 0:r.querySelector("div");e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Fc([X()],Oo.prototype,"platform",void 0),Fc([X()],Oo.prototype,"platforms",void 0),Fc([X()],Oo.prototype,"isSiwxEnabled",void 0),Oo=Fc([Q("w3m-connecting-wc-view")],Oo);var yg=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let al=class extends ee{constructor(){super(...arguments),this.isMobile=H.isMobile()}render(){if(this.isMobile){const{featured:t,recommended:e}=Y.state,{customWallets:r}=j.state,i=te.getRecentWallets(),s=t.length||e.length||(r==null?void 0:r.length)||i.length;return A`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${s?A`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return A`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};yg([X()],al.prototype,"isMobile",void 0),al=yg([Q("w3m-connecting-wc-basic-view")],al);/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const op=()=>new D_;class D_{}const mh=new WeakMap,ap=np(class extends km{render(t){return Je}update(t,[e]){var i;const r=e!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),Je}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let r=mh.get(e);r===void 0&&(r=new WeakMap,mh.set(e,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){var t,e;return typeof this.G=="function"?(t=mh.get(this.ht??globalThis))==null?void 0:t.get(this.G):(e=this.G)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var j_=le`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 22px;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--wui-color-blue-100);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-002);
    border-radius: 999px;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color;
  }

  span:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
    background-color: var(--wui-color-inverse-100);
    transition: transform var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    will-change: transform;
    border-radius: 50%;
  }

  input:checked + span {
    border-color: var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-blue-100);
  }

  input:not(:checked) + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }
`,Cg=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Kc=class extends ee{constructor(){super(...arguments),this.inputElementRef=op(),this.checked=void 0}render(){return A`
      <label>
        <input
          ${ap(this.inputElementRef)}
          type="checkbox"
          ?checked=${ce(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};Kc.styles=[$e,bt,ec,j_],Cg([N({type:Boolean})],Kc.prototype,"checked",void 0),Kc=Cg([Q("wui-switch")],Kc);var z_=le`
  :host {
    height: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: var(--wui-spacing-1xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,Eg=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Zc=class extends ee{constructor(){super(...arguments),this.checked=void 0}render(){return A`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${ce(this.checked)}></wui-switch>
      </button>
    `}};Zc.styles=[$e,bt,z_],Eg([N({type:Boolean})],Zc.prototype,"checked",void 0),Zc=Eg([Q("wui-certified-switch")],Zc);var q_=le`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }

    button:active:enabled {
      background-color: var(--wui-color-fg-225);
    }
  }
`,xg=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Gc=class extends ee{constructor(){super(...arguments),this.icon="copy"}render(){return A`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Gc.styles=[$e,bt,q_],xg([N()],Gc.prototype,"icon",void 0),Gc=xg([Q("wui-input-element")],Gc);var H_=le`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-color-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-color-gray-glass-005);
    -webkit-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  .wui-padding-right-xs {
    padding-right: var(--wui-spacing-xs);
  }

  .wui-padding-right-s {
    padding-right: var(--wui-spacing-s);
  }

  .wui-padding-right-m {
    padding-right: var(--wui-spacing-m);
  }

  .wui-padding-right-l {
    padding-right: var(--wui-spacing-l);
  }

  .wui-padding-right-xl {
    padding-right: var(--wui-spacing-xl);
  }

  .wui-padding-right-2xl {
    padding-right: var(--wui-spacing-2xl);
  }

  .wui-padding-right-3xl {
    padding-right: var(--wui-spacing-3xl);
  }

  .wui-padding-right-4xl {
    padding-right: var(--wui-spacing-4xl);
  }

  .wui-padding-right-5xl {
    padding-right: var(--wui-spacing-5xl);
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-m) 17.25px var(--wui-spacing-m);
  }
  wui-icon + .wui-size-mdl,
  wui-loading-spinner + .wui-size-mdl {
    padding: 17.25px var(--wui-spacing-3xl) 17.25px 40px;
  }
  wui-icon[data-input='mdl'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,Ur=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let cr=class extends ee{constructor(){super(...arguments),this.inputElementRef=op(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const t=`wui-padding-right-${this.inputRightPadding}`,e={[`wui-size-${this.size}`]:!0,[t]:!!this.inputRightPadding};return A`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${ap(this.inputElementRef)}
        class=${Nm(e)}
        type=${this.type}
        enterkeyhint=${ce(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${ce(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?A`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};cr.styles=[$e,bt,H_],Ur([N()],cr.prototype,"size",void 0),Ur([N()],cr.prototype,"icon",void 0),Ur([N({type:Boolean})],cr.prototype,"disabled",void 0),Ur([N()],cr.prototype,"placeholder",void 0),Ur([N()],cr.prototype,"type",void 0),Ur([N()],cr.prototype,"keyHint",void 0),Ur([N()],cr.prototype,"value",void 0),Ur([N()],cr.prototype,"inputRightPadding",void 0),Ur([N()],cr.prototype,"tabIdx",void 0),cr=Ur([Q("wui-input-text")],cr);var W_=le`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,V_=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let vh=class extends ee{constructor(){super(...arguments),this.inputComponentRef=op()}render(){return A`
      <wui-input-text
        ${ap(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){var e;const t=(e=this.inputComponentRef.value)==null?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};vh.styles=[$e,W_],vh=V_([Q("wui-search-bar")],vh);const F_=W`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var K_=le`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-color-gray-glass-010);
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,Ig=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Yc=class extends ee{constructor(){super(...arguments),this.type="wallet"}render(){return A`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?A` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${F_}`:A`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Yc.styles=[$e,bt,K_],Ig([N()],Yc.prototype,"type",void 0),Yc=Ig([Q("wui-card-select-loader")],Yc);var Z_=le`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,lr=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Rt=class extends ee{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&lt.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&lt.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&lt.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&lt.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&lt.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&lt.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&lt.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&lt.getSpacingStyles(this.margin,3)};
    `,A`<slot></slot>`}};Rt.styles=[$e,Z_],lr([N()],Rt.prototype,"gridTemplateRows",void 0),lr([N()],Rt.prototype,"gridTemplateColumns",void 0),lr([N()],Rt.prototype,"justifyItems",void 0),lr([N()],Rt.prototype,"alignItems",void 0),lr([N()],Rt.prototype,"justifyContent",void 0),lr([N()],Rt.prototype,"alignContent",void 0),lr([N()],Rt.prototype,"columnGap",void 0),lr([N()],Rt.prototype,"rowGap",void 0),lr([N()],Rt.prototype,"gap",void 0),lr([N()],Rt.prototype,"padding",void 0),lr([N()],Rt.prototype,"margin",void 0),Rt=lr([Q("wui-grid")],Rt);var G_=le`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-s) var(--wui-spacing-0);
    background-color: var(--wui-color-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    transition:
      color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1),
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  button:hover:enabled {
    background-color: var(--wui-color-gray-glass-005);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-color-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-color-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-color-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-color-accent-glass-010);
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,To=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let rs=class extends ee{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,r;const t=((e=this.wallet)==null?void 0:e.badge_type)==="certified";return A`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${ce(t?"certified":void 0)}
            >${(r=this.wallet)==null?void 0:r.name}</wui-text
          >
          ${t?A`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,e;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():A`
      <wui-wallet-image
        size="md"
        imageSrc=${ce(this.imageSrc)}
        name=${(t=this.wallet)==null?void 0:t.name}
        .installed=${(e=this.wallet)==null?void 0:e.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return A`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=st.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await st.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};rs.styles=G_,To([X()],rs.prototype,"visible",void 0),To([X()],rs.prototype,"imageSrc",void 0),To([X()],rs.prototype,"imageLoading",void 0),To([N()],rs.prototype,"wallet",void 0),rs=To([Q("w3m-all-wallets-list-item")],rs);var Y_=le`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,Ro=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const Ag="local-paginator";let is=class extends ee{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!Y.state.wallets.length,this.wallets=Y.state.wallets,this.recommended=Y.state.recommended,this.featured=Y.state.featured,this.unsubscribe.push(Y.subscribeKey("wallets",t=>this.wallets=t),Y.subscribeKey("recommended",t=>this.recommended=t),Y.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(e=>e()),(t=this.paginationObserver)==null||t.disconnect()}render(){return A`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-grid");t&&(await Y.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,e){return[...Array(t)].map(()=>A`
        <wui-card-select-loader type="wallet" id=${ce(e)}></wui-card-select-loader>
      `)}walletsTemplate(){const t=H.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return Ms.markWalletsAsInstalled(t).map(e=>A`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:e,featured:r,count:i}=Y.state,s=window.innerWidth<352?3:4,n=t.length+e.length;let o=Math.ceil(n/s)*s-n+s;return o-=t.length?r.length%s:0,i===0&&r.length>0?null:i===0||[...r,...t,...e].length<i?this.shimmerTemplate(o,Ag):null}createPaginationObserver(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(`#${Ag}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.loading){const{page:i,count:s,wallets:n}=Y.state;n.length<s&&Y.fetchWalletsByPage({page:i+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){J.selectWalletConnector(t)}};is.styles=Y_,Ro([X()],is.prototype,"loading",void 0),Ro([X()],is.prototype,"wallets",void 0),Ro([X()],is.prototype,"recommended",void 0),Ro([X()],is.prototype,"featured",void 0),is=Ro([Q("w3m-all-wallets-list")],is);var J_=le`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,Jc=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let fn=class extends ee{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?A`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await Y.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=Y.state,e=Ms.markWalletsAsInstalled(t);return t.length?A`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${e.map(r=>A`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:A`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="s"
          flexDirection="column"
        >
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="fg-200" variant="paragraph-500">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){J.selectWalletConnector(t)}};fn.styles=J_,Jc([X()],fn.prototype,"loading",void 0),Jc([N()],fn.prototype,"query",void 0),Jc([N()],fn.prototype,"badge",void 0),fn=Jc([Q("w3m-all-wallets-search")],fn);var bh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Fo=class extends ee{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=H.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return A`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?A`<w3m-all-wallets-search
            query=${this.search}
            badge=${ce(this.badge)}
          ></w3m-all-wallets-search>`:A`<w3m-all-wallets-list badge=${ce(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",Me.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return H.isMobile()?A`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){G.push("ConnectingWalletConnect")}};bh([X()],Fo.prototype,"search",void 0),bh([X()],Fo.prototype,"badge",void 0),Fo=bh([Q("w3m-all-wallets-view")],Fo);var X_=le`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-color-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-color-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    color: var(--wui-color-gray-glass-020);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,xr=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Ft=class extends ee{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return A`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${ce(this.iconVariant)}
        tabindex=${ce(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return A`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return A`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",e=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:e;return A`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${e}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?A`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:A``}chevronTemplate(){return this.chevron?A`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Ft.styles=[$e,bt,X_],xr([N()],Ft.prototype,"icon",void 0),xr([N()],Ft.prototype,"iconSize",void 0),xr([N()],Ft.prototype,"tabIdx",void 0),xr([N()],Ft.prototype,"variant",void 0),xr([N()],Ft.prototype,"iconVariant",void 0),xr([N({type:Boolean})],Ft.prototype,"disabled",void 0),xr([N()],Ft.prototype,"imageSrc",void 0),xr([N()],Ft.prototype,"alt",void 0),xr([N({type:Boolean})],Ft.prototype,"chevron",void 0),xr([N({type:Boolean})],Ft.prototype,"loading",void 0),Ft=xr([Q("wui-list-item")],Ft);var Q_=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Cd=class extends ee{constructor(){var t;super(...arguments),this.wallet=(t=G.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return A`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?A`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?A`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?A`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?A`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&H.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&H.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&H.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&H.openHref(this.wallet.homepage,"_blank")}};Cd=Q_([Q("w3m-downloads-view")],Cd);var e$=Object.freeze({__proto__:null,get W3mConnectingWcBasicView(){return al},get W3mAllWalletsView(){return Fo},get W3mDownloadsView(){return Cd}}),t$=le`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }

  :host([data-embedded='true']) {
    box-shadow:
      0 0 0 1px var(--wui-color-gray-glass-005),
      0px 4px 12px 4px var(--w3m-card-embedded-shadow-color);
  }
`,r$=function(t,e,r,i){var s=arguments.length,n=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let yh=class extends ee{render(){return A`<slot></slot>`}};yh.styles=[$e,t$],yh=r$([Q("wui-card")],yh);var i$=le`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-dark-glass-100);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-325);
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: var(--wui-border-radius-3xs);
    background-color: var(--local-icon-bg-value);
  }
`,Lo=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ss=class extends ee{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
      --local-icon-bg-value: var(--wui-color-${this.backgroundColor});
   `,A`
      <wui-flex flexDirection="row" justifyContent="space-between" alignItems="center">
        <wui-flex columnGap="xs" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color=${this.iconColor} size="md" name=${this.icon}></wui-icon>
          </wui-flex>
          <wui-text variant="small-500" color="bg-350" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="bg-350"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){Li.close()}};ss.styles=[$e,i$],Lo([N()],ss.prototype,"message",void 0),Lo([N()],ss.prototype,"backgroundColor",void 0),Lo([N()],ss.prototype,"iconColor",void 0),Lo([N()],ss.prototype,"icon",void 0),ss=Lo([Q("wui-alertbar")],ss);var s$=le`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,Sg=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const n$={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let Xc=class extends ee{constructor(){super(),this.unsubscribe=[],this.open=Li.state.open,this.onOpen(!0),this.unsubscribe.push(Li.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:e}=Li.state,r=n$[e];return A`
      <wui-alertbar
        message=${t}
        backgroundColor=${r==null?void 0:r.backgroundColor}
        iconColor=${r==null?void 0:r.iconColor}
        icon=${r==null?void 0:r.icon}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Xc.styles=s$,Sg([X()],Xc.prototype,"open",void 0),Xc=Sg([Q("w3m-alertbar")],Xc);var o$=le`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,Uo=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let ns=class extends ee{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const t=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",e=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${t});
    --local-padding: var(${e});
`,A`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};ns.styles=[$e,bt,ec,o$],Uo([N()],ns.prototype,"size",void 0),Uo([N({type:Boolean})],ns.prototype,"disabled",void 0),Uo([N()],ns.prototype,"icon",void 0),Uo([N()],ns.prototype,"iconColor",void 0),ns=Uo([Q("wui-icon-link")],ns);var a$=le`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: var(--wui-spacing-xxs);
    gap: var(--wui-spacing-xxs);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-md);
    border-radius: var(--wui-border-radius-xxs);
  }

  wui-image {
    border-radius: 100%;
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  wui-icon-box {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  button:active {
    background-color: var(--wui-color-gray-glass-005);
  }
`,_g=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Qc=class extends ee{constructor(){super(...arguments),this.imageSrc=""}render(){return A`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:A`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};Qc.styles=[$e,bt,ec,a$],_g([N()],Qc.prototype,"imageSrc",void 0),Qc=_g([Q("wui-select")],Qc);var c$=le`
  :host {
    height: 64px;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards var(--wui-ease-out-power-2),
      slide-down-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards var(--wui-ease-out-power-2),
      slide-up-in 120ms forwards var(--wui-ease-out-power-2);
    animation-delay: 0ms, 200ms;
  }

  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`,Br=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const l$=["SmartSessionList"];function Ch(){var n,o,a,c,l,u,h;const t=(o=(n=G.state.data)==null?void 0:n.connector)==null?void 0:o.name,e=(c=(a=G.state.data)==null?void 0:a.wallet)==null?void 0:c.name,r=(u=(l=G.state.data)==null?void 0:l.network)==null?void 0:u.name,i=e??t,s=J.getConnectors();return{Connect:`Connect ${s.length===1&&((h=s[0])==null?void 0:h.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:i?`Get ${i}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:r??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:ne.state.socialProvider?ne.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let ur=class extends ee{constructor(){super(),this.unsubscribe=[],this.heading=Ch()[G.state.view],this.network=C.state.activeCaipNetwork,this.networkImage=st.getNetworkImage(this.network),this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=G.state.view,this.viewDirection="",this.headerText=Ch()[G.state.view],this.unsubscribe.push(Mt.subscribeNetworkImages(()=>{this.networkImage=st.getNetworkImage(this.network)}),G.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.headerText=Ch()[t]},Ti.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),ie.subscribeKey("buffering",t=>this.buffering=t),C.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=st.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return A`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){we.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),G.push("WhatIsAWallet")}async onClose(){G.state.view==="UnsupportedChain"||await Ui.isSIWXCloseDisabled()?Ee.shake():Ee.close()}rightHeaderTemplate(){var e,r;const t=(r=(e=j==null?void 0:j.state)==null?void 0:e.features)==null?void 0:r.smartSessions;return G.state.view!=="Account"||!t?this.closeButtonTemplate():A`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>G.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-link>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return A`
      <wui-icon-link
        ?disabled=${this.buffering}
        icon="close"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-link>
    `}titleTemplate(){const t=l$.includes(this.view);return A`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${t?A`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var c;const{view:t}=G.state,e=t==="Connect",r=j.state.enableEmbedded,i=t==="ApproveTransaction",s=t==="ConnectingSiwe",n=t==="Account",o=j.state.enableNetworkSwitch,a=i||s||e&&r;return n&&o?A`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${ce((c=this.network)==null?void 0:c.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${ce(this.networkImage)}
      ></wui-select>`:this.showBack&&!a?A`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:A`<wui-icon-link
      data-hidden=${!e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(we.sendEvent({type:"track",event:"CLICK_NETWORKS"}),G.push("Networks"))}isAllowedNetworkSwitch(){const t=C.getAllRequestedCaipNetworks(),e=t?t.length>1:!1,r=t==null?void 0:t.find(({id:i})=>{var s;return i===((s=this.network)==null?void 0:s.id)});return e||!r}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:t}=G.state;let e=Ti.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(e=Ti.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=e}async onHistoryChange(){var r;const{history:t}=G.state,e=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");t.length>1&&!this.showBack&&e?(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&e&&(await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){G.goBack()}};ur.styles=c$,Br([X()],ur.prototype,"heading",void 0),Br([X()],ur.prototype,"network",void 0),Br([X()],ur.prototype,"networkImage",void 0),Br([X()],ur.prototype,"buffering",void 0),Br([X()],ur.prototype,"showBack",void 0),Br([X()],ur.prototype,"prevHistoryLength",void 0),Br([X()],ur.prototype,"view",void 0),Br([X()],ur.prototype,"viewDirection",void 0),Br([X()],ur.prototype,"headerText",void 0),ur=Br([Q("w3m-header")],ur);var u$=le`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-color-gray-glass-005);
    box-sizing: border-box;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);

    max-width: 300px;
  }

  :host wui-loading-spinner {
    margin-left: var(--wui-spacing-3xs);
  }
`,os=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let si=class extends ee{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return A`
      ${this.templateIcon()}
      <wui-text variant="paragraph-500" color="fg-100" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return this.loading?A`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:this.iconType==="default"?A`<wui-icon size="xl" color=${this.iconColor} name=${this.icon}></wui-icon>`:A`<wui-icon-box
      size="sm"
      iconSize="xs"
      iconColor=${this.iconColor}
      backgroundColor=${this.backgroundColor}
      icon=${this.icon}
      background="opaque"
    ></wui-icon-box>`}};si.styles=[$e,u$],os([N()],si.prototype,"backgroundColor",void 0),os([N()],si.prototype,"iconColor",void 0),os([N()],si.prototype,"icon",void 0),os([N()],si.prototype,"message",void 0),os([N()],si.prototype,"loading",void 0),os([N()],si.prototype,"iconType",void 0),si=os([Q("wui-snackbar")],si);var h$=le`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,$g=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const d$={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let el=class extends ee{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Me.state.open,this.unsubscribe.push(Me.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:e,svg:r}=Me.state,i=d$[e],{icon:s,iconColor:n}=r??i??{};return A`
      <wui-snackbar
        message=${t}
        backgroundColor=${i==null?void 0:i.backgroundColor}
        iconColor=${n}
        icon=${s}
        .loading=${e==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),Me.state.autoClose&&(this.timeout=setTimeout(()=>Me.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};el.styles=h$,$g([X()],el.prototype,"open",void 0),el=$g([Q("w3m-snackbar")],el);var p$=le`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-bg-100);
    position: fixed;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--w3m-modal-width) - var(--wui-spacing-xl));
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-color-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: var(--wui-color-bg-150);
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,Bo=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let as=class extends ee{constructor(){super(),this.unsubscribe=[],this.open=vn.state.open,this.message=vn.state.message,this.triggerRect=vn.state.triggerRect,this.variant=vn.state.variant,this.unsubscribe.push(vn.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,e=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${e}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,A`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};as.styles=[p$],Bo([X()],as.prototype,"open",void 0),Bo([X()],as.prototype,"message",void 0),Bo([X()],as.prototype,"triggerRect",void 0),Bo([X()],as.prototype,"variant",void 0),as=Bo([Q("w3m-tooltip"),Q("w3m-tooltip")],as);var g$=le`
  :host {
    --prev-height: 0px;
    --new-height: 0px;
    display: block;
  }

  div.w3m-router-container {
    transform: translateY(0);
    opacity: 1;
  }

  div.w3m-router-container[view-direction='prev'] {
    animation:
      slide-left-out 150ms forwards ease,
      slide-left-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  div.w3m-router-container[view-direction='next'] {
    animation:
      slide-right-out 150ms forwards ease,
      slide-right-in 150ms forwards ease;
    animation-delay: 0ms, 200ms;
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px);
      opacity: 1;
    }
    to {
      transform: translateX(-10px);
      opacity: 0;
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(10px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,Eh=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};let Mo=class extends ee{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=G.state.view,this.viewDirection="",this.unsubscribe.push(G.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){var t;this.resizeObserver=new ResizeObserver(([e])=>{const r=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",r),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=r,this.style.animation="unset"},Ti.ANIMATION_DURATIONS.ModalHeight)}),(t=this.resizeObserver)==null||t.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return A`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return A`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return A`<w3m-account-view></w3m-account-view>`;case"AllWallets":return A`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return A`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return A`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return A`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return A`<w3m-connect-view></w3m-connect-view>`;case"Create":return A`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return A`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return A`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return A`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return A`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return A`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return A`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return A`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return A`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return A`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return A`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return A`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return A`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return A`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return A`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return A`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return A`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return A`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return A`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return A`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return A`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return A`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return A`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return A`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return A`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return A`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return A`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return A`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return A`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return A`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return A`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return A`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return A`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return A`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return A`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return A`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return A`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return A`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return A`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return A`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return A`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return A`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return A`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return A`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return A`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return A`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;default:return A`<w3m-connect-view></w3m-connect-view>`}}onViewChange(t){vn.hide();let e=Ti.VIEW_DIRECTION.Next;const{history:r}=G.state;r.length<this.prevHistoryLength&&(e=Ti.VIEW_DIRECTION.Prev),this.prevHistoryLength=r.length,this.viewDirection=e,setTimeout(()=>{this.view=t},Ti.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};Mo.styles=g$,Eh([X()],Mo.prototype,"view",void 0),Eh([X()],Mo.prototype,"viewDirection",void 0),Mo=Eh([Q("w3m-router")],Mo);var f$=le`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`,cs=function(t,e,r,i){var s=arguments.length,n=s<3?e:i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(t,e,r,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(s<3?o(n):s>3?o(e,r,n):o(e,r))||n);return s>3&&n&&Object.defineProperty(e,r,n),n};const kg="scroll-lock";let Dr=class extends ee{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=j.state.enableEmbedded,this.open=Ee.state.open,this.caipAddress=C.state.activeCaipAddress,this.caipNetwork=C.state.activeCaipNetwork,this.shake=Ee.state.shake,this.filterByNamespace=J.state.filterByNamespace,this.initializeTheming(),Y.prefetchAnalyticsConfig(),this.unsubscribe.push(Ee.subscribeKey("open",t=>t?this.onOpen():this.onClose()),Ee.subscribeKey("shake",t=>this.shake=t),C.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),C.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),j.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),J.subscribeKey("filterByNamespace",t=>{var e;this.filterByNamespace!==t&&!((e=C.getAccountData(t))!=null&&e.caipAddress)&&(Y.fetchRecommendedWallets(),this.filterByNamespace=t)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){Ee.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?A`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?A`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return A` <wui-card
      shake="${this.shake}"
      data-embedded="${ce(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){t.target===t.currentTarget&&await this.handleClose()}async handleClose(){G.state.view==="UnsupportedChain"||await Ui.isSIWXCloseDisabled()?Ee.shake():Ee.close()}initializeTheming(){const{themeVariables:t,themeMode:e}=rt.state,r=lt.getColorTheme(e);xA(t,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),Me.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=kg,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${kg}"]`);t&&t.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}async onNewAddress(t){const e=C.state.isSwitchingNamespace,r=H.getPlainAddress(t);!r&&!e?Ee.close():e&&r&&G.goBack(),await Ui.initializeIfEnabled(),this.caipAddress=t,C.setIsSwitchingNamespace(!1)}onNewNetwork(t){var w,g;const e=this.caipNetwork,r=(w=e==null?void 0:e.caipNetworkId)==null?void 0:w.toString(),i=e==null?void 0:e.chainNamespace,s=(g=t==null?void 0:t.caipNetworkId)==null?void 0:g.toString(),n=t==null?void 0:t.chainNamespace,o=r!==s,a=o&&i===n,c=(e==null?void 0:e.name)===ae.UNSUPPORTED_NETWORK_NAME,l=G.state.view==="ConnectingExternal",u=!this.caipAddress,h=G.state.view==="UnsupportedChain",d=Ee.state.open;let p=!1;d&&!l&&(u?o&&(p=!0):(h||a&&!c)&&(p=!0)),p&&G.state.view!=="SIWXSignMessage"&&G.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(Y.prefetch(),Y.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}};Dr.styles=f$,cs([N({type:Boolean})],Dr.prototype,"enableEmbedded",void 0),cs([X()],Dr.prototype,"open",void 0),cs([X()],Dr.prototype,"caipAddress",void 0),cs([X()],Dr.prototype,"caipNetwork",void 0),cs([X()],Dr.prototype,"shake",void 0),cs([X()],Dr.prototype,"filterByNamespace",void 0),Dr=cs([Q("w3m-modal")],Dr);var w$=Object.freeze({__proto__:null,get W3mModal(){return Dr}});const m$=W`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#667dff"
  /></svg
>`;var v$=Object.freeze({__proto__:null,addSvg:m$});const b$=W`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;var y$=Object.freeze({__proto__:null,allWalletsSvg:b$});const C$=W`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`;var E$=Object.freeze({__proto__:null,arrowBottomCircleSvg:C$});const x$=W`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`;var I$=Object.freeze({__proto__:null,appStoreSvg:x$});const A$=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var S$=Object.freeze({__proto__:null,appleSvg:A$});const _$=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var $$=Object.freeze({__proto__:null,arrowBottomSvg:_$});const k$=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var N$=Object.freeze({__proto__:null,arrowLeftSvg:k$});const P$=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var O$=Object.freeze({__proto__:null,arrowRightSvg:P$});const T$=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var R$=Object.freeze({__proto__:null,arrowTopSvg:T$});const L$=W`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`;var U$=Object.freeze({__proto__:null,bankSvg:L$});const B$=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`;var M$=Object.freeze({__proto__:null,browserSvg:B$});const D$=W`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`;var j$=Object.freeze({__proto__:null,cardSvg:D$});const z$=W`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`;var q$=Object.freeze({__proto__:null,checkmarkSvg:z$});const H$=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var W$=Object.freeze({__proto__:null,checkmarkBoldSvg:H$});const V$=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var F$=Object.freeze({__proto__:null,chevronBottomSvg:V$});const K$=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Z$=Object.freeze({__proto__:null,chevronLeftSvg:K$});const G$=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Y$=Object.freeze({__proto__:null,chevronRightSvg:G$});const J$=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var X$=Object.freeze({__proto__:null,chevronTopSvg:J$});const Q$=W`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`;var ek=Object.freeze({__proto__:null,chromeStoreSvg:Q$});const tk=W`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`;var rk=Object.freeze({__proto__:null,clockSvg:tk});const ik=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var sk=Object.freeze({__proto__:null,closeSvg:ik});const nk=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`;var ok=Object.freeze({__proto__:null,compassSvg:nk});const ak=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`;var ck=Object.freeze({__proto__:null,coinPlaceholderSvg:ak});const lk=W`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`;var uk=Object.freeze({__proto__:null,copySvg:lk});const hk=W` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;var dk=Object.freeze({__proto__:null,cursorSvg:hk});const pk=W`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `;var gk=Object.freeze({__proto__:null,cursorTransparentSvg:pk});const fk=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`;var wk=Object.freeze({__proto__:null,desktopSvg:fk});const mk=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var vk=Object.freeze({__proto__:null,disconnectSvg:mk});const bk=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`;var yk=Object.freeze({__proto__:null,discordSvg:bk});const Ck=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;var Ek=Object.freeze({__proto__:null,etherscanSvg:Ck});const xk=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`;var Ik=Object.freeze({__proto__:null,extensionSvg:xk});const Ak=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var Sk=Object.freeze({__proto__:null,externalLinkSvg:Ak});const _k=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var $k=Object.freeze({__proto__:null,facebookSvg:_k});const kk=W`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`;var Nk=Object.freeze({__proto__:null,farcasterSvg:kk});const Pk=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var Ok=Object.freeze({__proto__:null,filtersSvg:Pk});const Tk=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var Rk=Object.freeze({__proto__:null,githubSvg:Tk});const Lk=W`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`;var Uk=Object.freeze({__proto__:null,googleSvg:Lk});const Bk=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`;var Mk=Object.freeze({__proto__:null,helpCircleSvg:Bk});const Dk=W`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`;var jk=Object.freeze({__proto__:null,imageSvg:Dk});const zk=W`<svg
 xmlns="http://www.w3.org/2000/svg"
 width="28"
 height="28"
 viewBox="0 0 28 28"
 fill="none">
  <path
    fill="#949E9E"
    fill-rule="evenodd"
    d="M7.974 2.975h12.052c1.248 0 2.296 0 3.143.092.89.096 1.723.307 2.461.844a4.9 4.9 0 0 1 1.084 1.084c.537.738.748 1.57.844 2.461.092.847.092 1.895.092 3.143v6.802c0 1.248 0 2.296-.092 3.143-.096.89-.307 1.723-.844 2.461a4.9 4.9 0 0 1-1.084 1.084c-.738.537-1.57.748-2.461.844-.847.092-1.895.092-3.143.092H7.974c-1.247 0-2.296 0-3.143-.092-.89-.096-1.723-.307-2.461-.844a4.901 4.901 0 0 1-1.084-1.084c-.537-.738-.748-1.571-.844-2.461C.35 19.697.35 18.649.35 17.4v-6.802c0-1.248 0-2.296.092-3.143.096-.89.307-1.723.844-2.461A4.9 4.9 0 0 1 2.37 3.91c.738-.537 1.571-.748 2.461-.844.847-.092 1.895-.092 3.143-.092ZM5.133 5.85c-.652.071-.936.194-1.117.326a2.1 2.1 0 0 0-.465.465c-.132.181-.255.465-.325 1.117-.074.678-.076 1.573-.076 2.917v6.65c0 1.344.002 2.239.076 2.917.07.652.193.936.325 1.117a2.1 2.1 0 0 0 .465.465c.181.132.465.255 1.117.326.678.073 1.574.075 2.917.075h11.9c1.344 0 2.239-.002 2.917-.075.652-.071.936-.194 1.117-.326.179-.13.335-.286.465-.465.132-.181.255-.465.326-1.117.073-.678.075-1.573.075-2.917v-6.65c0-1.344-.002-2.239-.075-2.917-.071-.652-.194-.936-.326-1.117a2.1 2.1 0 0 0-.465-.465c-.181-.132-.465-.255-1.117-.326-.678-.073-1.573-.075-2.917-.075H8.05c-1.343 0-2.239.002-2.917.075Zm.467 7.275a3.15 3.15 0 1 1 6.3 0 3.15 3.15 0 0 1-6.3 0Zm8.75-1.75a1.4 1.4 0 0 1 1.4-1.4h3.5a1.4 1.4 0 0 1 0 2.8h-3.5a1.4 1.4 0 0 1-1.4-1.4Zm0 5.25a1.4 1.4 0 0 1 1.4-1.4H21a1.4 1.4 0 1 1 0 2.8h-5.25a1.4 1.4 0 0 1-1.4-1.4Z"
    clip-rule="evenodd"/>
</svg>`;var qk=Object.freeze({__proto__:null,idSvg:zk});const Hk=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Wk=Object.freeze({__proto__:null,infoCircleSvg:Hk});const Vk=W`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`;var Fk=Object.freeze({__proto__:null,lightbulbSvg:Vk});const Kk=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`;var Zk=Object.freeze({__proto__:null,mailSvg:Kk});const Gk=W`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`;var Yk=Object.freeze({__proto__:null,mobileSvg:Gk});const Jk=W`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`;var Xk=Object.freeze({__proto__:null,moreSvg:Jk});const Qk=W`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`;var eN=Object.freeze({__proto__:null,networkPlaceholderSvg:Qk});const tN=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`;var rN=Object.freeze({__proto__:null,nftPlaceholderSvg:tN});const iN=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`;var sN=Object.freeze({__proto__:null,offSvg:iN});const nN=W` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`;var oN=Object.freeze({__proto__:null,playStoreSvg:nN});const aN=W`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`;var cN=Object.freeze({__proto__:null,plusSvg:aN});const lN=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`;var uN=Object.freeze({__proto__:null,qrCodeIcon:lN});const hN=W`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`;var dN=Object.freeze({__proto__:null,recycleHorizontalSvg:hN});const pN=W`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`;var gN=Object.freeze({__proto__:null,refreshSvg:pN});const fN=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`;var wN=Object.freeze({__proto__:null,searchSvg:fN});const mN=W`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`;var vN=Object.freeze({__proto__:null,sendSvg:mN});const bN=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var yN=Object.freeze({__proto__:null,swapHorizontalSvg:bN});const CN=W`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`;var EN=Object.freeze({__proto__:null,swapHorizontalMediumSvg:CN});const xN=W`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`;var IN=Object.freeze({__proto__:null,swapHorizontalBoldSvg:xN});const AN=W`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`;var SN=Object.freeze({__proto__:null,swapHorizontalRoundedBoldSvg:AN});const _N=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var $N=Object.freeze({__proto__:null,swapVerticalSvg:_N});const kN=W`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`;var NN=Object.freeze({__proto__:null,telegramSvg:kN});const PN=W`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`;var ON=Object.freeze({__proto__:null,threeDotsSvg:PN});const TN=W`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`;var RN=Object.freeze({__proto__:null,twitchSvg:TN});const LN=W`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`;var Ng=Object.freeze({__proto__:null,xSvg:LN});const UN=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;var BN=Object.freeze({__proto__:null,twitterIconSvg:UN});const MN=W`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`;var DN=Object.freeze({__proto__:null,verifySvg:MN});const jN=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`;var zN=Object.freeze({__proto__:null,verifyFilledSvg:jN});const qN=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`;var HN=Object.freeze({__proto__:null,walletSvg:qN});const WN=W`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,VN=W`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="#202020"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,FN=W`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`;var xh=Object.freeze({__proto__:null,walletConnectSvg:WN,walletConnectLightBrownSvg:VN,walletConnectBrownSvg:FN});const KN=W`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`;var ZN=Object.freeze({__proto__:null,walletPlaceholderSvg:KN});const GN=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var YN=Object.freeze({__proto__:null,warningCircleSvg:GN});const JN=W`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`;var XN=Object.freeze({__proto__:null,infoSvg:JN});const QN=W`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`;var eP=Object.freeze({__proto__:null,exclamationTriangleSvg:QN});const tP=W`<svg width="60" height="16" viewBox="0 0 60 16" fill="none"">
  <path d="M9.3335 4.66667C9.3335 2.08934 11.4229 0 14.0002 0H20.6669C23.2442 0 25.3335 2.08934 25.3335 4.66667V11.3333C25.3335 13.9106 23.2442 16 20.6669 16H14.0002C11.4229 16 9.3335 13.9106 9.3335 11.3333V4.66667Z" fill="#363636"/>
  <path d="M15.6055 11.0003L17.9448 4.66699H18.6316L16.2923 11.0003H15.6055Z" fill="#F6F6F6"/>
  <path d="M0 4.33333C0 1.9401 1.9401 0 4.33333 0C6.72657 0 8.66669 1.9401 8.66669 4.33333V11.6667C8.66669 14.0599 6.72657 16 4.33333 16C1.9401 16 0 14.0599 0 11.6667V4.33333Z" fill="#363636"/>
  <path d="M3.9165 9.99934V9.16602H4.74983V9.99934H3.9165Z" fill="#F6F6F6"/>
  <path d="M26 8C26 3.58172 29.3517 0 33.4863 0H52.5137C56.6483 0 60 3.58172 60 8C60 12.4183 56.6483 16 52.5137 16H33.4863C29.3517 16 26 12.4183 26 8Z" fill="#363636"/>
  <path d="M49.3687 9.95834V6.26232H50.0213V6.81966C50.256 6.40899 50.7326 6.16699 51.2606 6.16699C52.0599 6.16699 52.6173 6.67299 52.6173 7.65566V9.95834H51.972V7.69234C51.972 7.04696 51.6053 6.70966 51.07 6.70966C50.4906 6.70966 50.0213 7.17168 50.0213 7.82433V9.95834H49.3687Z" fill="#F6F6F6"/>
  <path d="M45.2538 9.95773L44.5718 6.26172H45.1877L45.6717 9.31242L46.3098 7.30306H46.9184L47.5491 9.29041L48.0404 6.26172H48.6564L47.9744 9.95773H47.2411L46.6178 8.03641L45.9871 9.95773H45.2538Z" fill="#F6F6F6"/>
  <path d="M42.3709 10.0536C41.2489 10.0536 40.5889 9.21765 40.5889 8.1103C40.5889 7.01035 41.2489 6.16699 42.3709 6.16699C43.4929 6.16699 44.1529 7.01035 44.1529 8.1103C44.1529 9.21765 43.4929 10.0536 42.3709 10.0536ZM42.3709 9.51096C43.1775 9.51096 43.4856 8.82164 43.4856 8.10296C43.4856 7.39163 43.1775 6.70966 42.3709 6.70966C41.5642 6.70966 41.2562 7.39163 41.2562 8.10296C41.2562 8.82164 41.5642 9.51096 42.3709 9.51096Z" fill="#F6F6F6"/>
  <path d="M38.2805 10.0536C37.1952 10.0536 36.5132 9.22499 36.5132 8.1103C36.5132 7.00302 37.1952 6.16699 38.2805 6.16699C39.1972 6.16699 40.0038 6.68766 39.9159 8.27896H37.1805C37.2319 8.96103 37.5472 9.5183 38.2805 9.5183C38.7718 9.5183 39.0945 9.21765 39.2045 8.87299H39.8499C39.7472 9.48903 39.1679 10.0536 38.2805 10.0536ZM37.1952 7.78765H39.2852C39.2338 7.04696 38.8892 6.70232 38.2805 6.70232C37.6132 6.70232 37.2832 7.18635 37.1952 7.78765Z" fill="#F6F6F6"/>
  <path d="M33.3828 9.95773V6.26172H34.0501V6.88506C34.2848 6.47439 34.6882 6.26172 35.1061 6.26172H35.9935V6.88506H35.0548C34.4682 6.88506 34.0501 7.26638 34.0501 8.00706V9.95773H33.3828Z" fill="#F6F6F6"/>
</svg>`;var rP=Object.freeze({__proto__:null,reownSvg:tP});const aO=Object.freeze(Object.defineProperty({__proto__:null,EthereumProvider:L7,OPTIONAL_EVENTS:cw,OPTIONAL_METHODS:aw,REQUIRED_EVENTS:fl,REQUIRED_METHODS:gl,default:zl},Symbol.toStringTag,{value:"Module"}));export{S2 as H,dp as a,w2 as b,nP as c,sP as d,Ol as e,cP as f,aP as g,aO as i,oP as r,jg as t,_2 as w};
