import{m as P1}from"./index--lqpBvBf.js";import{e as $1,x as O1}from"./index.es-AhyaNcPu.js";function Il(e,t=[]){const r=[];return Object.keys(e).forEach(n=>{if(t.length&&!t.includes(n))return;const o=e[n];r.push(...o.accounts)}),r}function Os(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("positive integer expected, got "+e)}function R1(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function Ni(e,...t){if(!R1(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length "+t+", got length="+e.length)}function B1(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Os(e.outputLen),Os(e.blockLen)}function Vn(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function Nd(e,t){Ni(e);const r=t.outputLen;if(e.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}const Ui=BigInt(2**32-1),Nl=BigInt(32);function L1(e,t=!1){return t?{h:Number(e&Ui),l:Number(e>>Nl&Ui)}:{h:Number(e>>Nl&Ui)|0,l:Number(e&Ui)|0}}function U1(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let o=0;o<e.length;o++){const{h:i,l:s}=L1(e[o],t);[r[o],n[o]]=[i,s]}return[r,n]}const M1=(e,t,r)=>e<<r|t>>>32-r,z1=(e,t,r)=>t<<r|e>>>32-r,D1=(e,t,r)=>t<<r-32|e>>>64-r,j1=(e,t,r)=>e<<r-32|t>>>64-r,yn=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function W1(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))}function fa(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function Ut(e,t){return e<<32-t|e>>>t}const Sl=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function H1(e){return e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255}function _l(e){for(let t=0;t<e.length;t++)e[t]=H1(e[t])}function F1(e){if(typeof e!="string")throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array(new TextEncoder().encode(e))}function Ks(e){return typeof e=="string"&&(e=F1(e)),Ni(e),e}function V1(...e){let t=0;for(let n=0;n<e.length;n++){const o=e[n];Ni(o),t+=o.length}const r=new Uint8Array(t);for(let n=0,o=0;n<e.length;n++){const i=e[n];r.set(i,o),o+=i.length}return r}let Qc=class{clone(){return this._cloneInto()}};function Sd(e){const t=n=>e().update(Ks(n)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function _d(e=32){if(yn&&typeof yn.getRandomValues=="function")return yn.getRandomValues(new Uint8Array(e));if(yn&&typeof yn.randomBytes=="function")return yn.randomBytes(e);throw new Error("crypto.getRandomValues must be defined")}const Td=[],Pd=[],$d=[],q1=BigInt(0),po=BigInt(1),Z1=BigInt(2),G1=BigInt(7),K1=BigInt(256),Y1=BigInt(113);for(let e=0,t=po,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],Td.push(2*(5*n+r)),Pd.push((e+1)*(e+2)/2%64);let o=q1;for(let i=0;i<7;i++)t=(t<<po^(t>>G1)*Y1)%K1,t&Z1&&(o^=po<<(po<<BigInt(i))-po);$d.push(o)}const[J1,X1]=U1($d,!0),Tl=(e,t,r)=>r>32?D1(e,t,r):M1(e,t,r),Pl=(e,t,r)=>r>32?j1(e,t,r):z1(e,t,r);function Q1(e,t=24){const r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let s=0;s<10;s++)r[s]=e[s]^e[s+10]^e[s+20]^e[s+30]^e[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,c=(s+2)%10,l=r[c],u=r[c+1],d=Tl(l,u,1)^r[a],h=Pl(l,u,1)^r[a+1];for(let p=0;p<50;p+=10)e[s+p]^=d,e[s+p+1]^=h}let o=e[2],i=e[3];for(let s=0;s<24;s++){const a=Pd[s],c=Tl(o,i,a),l=Pl(o,i,a),u=Td[s];o=e[u],i=e[u+1],e[u]=c,e[u+1]=l}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)r[a]=e[s+a];for(let a=0;a<10;a++)e[s+a]^=~r[(a+2)%10]&r[(a+4)%10]}e[0]^=J1[n],e[1]^=X1[n]}r.fill(0)}let eh=class Od extends Qc{constructor(t,r,n,o=!1,i=24){if(super(),this.blockLen=t,this.suffix=r,this.outputLen=n,this.enableXOF=o,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Os(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=W1(this.state)}keccak(){Sl||_l(this.state32),Q1(this.state32,this.rounds),Sl||_l(this.state32),this.posOut=0,this.pos=0}update(t){Vn(this);const{blockLen:r,state:n}=this;t=Ks(t);const o=t.length;for(let i=0;i<o;){const s=Math.min(r-this.pos,o-i);for(let a=0;a<s;a++)n[this.pos++]^=t[i++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:r,pos:n,blockLen:o}=this;t[n]^=r,(r&128)!==0&&n===o-1&&this.keccak(),t[o-1]^=128,this.keccak()}writeInto(t){Vn(this,!1),Ni(t),this.finish();const r=this.state,{blockLen:n}=this;for(let o=0,i=t.length;o<i;){this.posOut>=n&&this.keccak();const s=Math.min(n-this.posOut,i-o);t.set(r.subarray(this.posOut,this.posOut+s),o),this.posOut+=s,o+=s}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Os(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(Nd(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:r,suffix:n,outputLen:o,rounds:i,enableXOF:s}=this;return t||(t=new Od(r,n,o,s,i)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=i,t.suffix=n,t.outputLen=o,t.enableXOF=s,t.destroyed=this.destroyed,t}};const th=(e,t,r)=>Sd(()=>new eh(t,e,r));th(1,136,256/8);function ga(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("positive integer expected, got "+e)}function Rd(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function wt(e,...t){if(!Rd(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length "+t+", got length="+e.length)}function $l(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function rh(e,t){wt(e);const r=t.outputLen;if(e.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}function Ol(e){if(typeof e!="boolean")throw new Error(`boolean expected, not ${e}`)}const Nr=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),nh=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),oh=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!oh)throw new Error("Non little-endian hardware is not supported");function ih(e){if(typeof e!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}function Cc(e){if(typeof e=="string")e=ih(e);else if(Rd(e))e=xc(e);else throw new Error("Uint8Array expected, got "+typeof e);return e}function sh(e,t){if(t==null||typeof t!="object")throw new Error("options must be defined");return Object.assign(e,t)}function ah(e,t){if(e.length!==t.length)return!1;let r=0;for(let n=0;n<e.length;n++)r|=e[n]^t[n];return r===0}const ch=(e,t)=>{function r(n,...o){if(wt(n),e.nonceLength!==void 0){const l=o[0];if(!l)throw new Error("nonce / iv required");e.varSizeNonce?wt(l):wt(l,e.nonceLength)}const i=e.tagLength;i&&o[1]!==void 0&&wt(o[1]);const s=t(n,...o),a=(l,u)=>{if(u!==void 0){if(l!==2)throw new Error("cipher output not supported");wt(u)}};let c=!1;return{encrypt(l,u){if(c)throw new Error("cannot encrypt() twice with same key + nonce");return c=!0,wt(l),a(s.encrypt.length,u),s.encrypt(l,u)},decrypt(l,u){if(wt(l),i&&l.length<i)throw new Error("invalid ciphertext length: smaller than tagLength="+i);return a(s.decrypt.length,u),s.decrypt(l,u)}}}return Object.assign(r,e),r};function Rl(e,t,r=!0){if(t===void 0)return new Uint8Array(e);if(t.length!==e)throw new Error("invalid output length, expected "+e+", got: "+t.length);if(r&&!lh(t))throw new Error("invalid output, must be aligned");return t}function Bl(e,t,r,n){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,n);const o=BigInt(32),i=BigInt(4294967295),s=Number(r>>o&i),a=Number(r&i);e.setUint32(t+4,s,n),e.setUint32(t+0,a,n)}function lh(e){return e.byteOffset%4===0}function xc(e){return Uint8Array.from(e)}function qn(...e){for(let t=0;t<e.length;t++)e[t].fill(0)}const Bd=e=>Uint8Array.from(e.split("").map(t=>t.charCodeAt(0))),uh=Bd("expand 16-byte k"),dh=Bd("expand 32-byte k"),hh=Nr(uh),ph=Nr(dh);function we(e,t){return e<<t|e>>>32-t}function Ec(e){return e.byteOffset%4===0}const Mi=64,fh=16,Ld=2**32-1,Ll=new Uint32Array;function gh(e,t,r,n,o,i,s,a){const c=o.length,l=new Uint8Array(Mi),u=Nr(l),d=Ec(o)&&Ec(i),h=d?Nr(o):Ll,p=d?Nr(i):Ll;for(let m=0;m<c;s++){if(e(t,r,n,u,s,a),s>=Ld)throw new Error("arx: counter overflow");const g=Math.min(Mi,c-m);if(d&&g===Mi){const f=m/4;if(m%4!==0)throw new Error("arx: invalid block position");for(let w=0,v;w<fh;w++)v=f+w,p[v]=h[v]^u[w];m+=Mi;continue}for(let f=0,w;f<g;f++)w=m+f,i[w]=o[w]^l[f];m+=g}}function wh(e,t){const{allowShortKeys:r,extendNonceFn:n,counterLength:o,counterRight:i,rounds:s}=sh({allowShortKeys:!1,counterLength:8,counterRight:!1,rounds:20},t);if(typeof e!="function")throw new Error("core must be a function");return ga(o),ga(s),Ol(i),Ol(r),(a,c,l,u,d=0)=>{wt(a),wt(c),wt(l);const h=l.length;if(u===void 0&&(u=new Uint8Array(h)),wt(u),ga(d),d<0||d>=Ld)throw new Error("arx: counter overflow");if(u.length<h)throw new Error(`arx: output (${u.length}) is shorter than data (${h})`);const p=[];let m=a.length,g,f;if(m===32)p.push(g=xc(a)),f=ph;else if(m===16&&r)g=new Uint8Array(32),g.set(a),g.set(a,16),f=hh,p.push(g);else throw new Error(`arx: invalid 32-byte key, got length=${m}`);Ec(c)||p.push(c=xc(c));const w=Nr(g);if(n){if(c.length!==24)throw new Error("arx: extended nonce must be 24 bytes");n(f,w,Nr(c.subarray(0,16)),w),c=c.subarray(16)}const v=16-o;if(v!==c.length)throw new Error(`arx: nonce must be ${v} or 16 bytes`);if(v!==12){const k=new Uint8Array(12);k.set(c,i?0:12-c.length),c=k,p.push(c)}const b=Nr(c);return gh(e,f,w,b,l,u,d,s),qn(...p),u}}const Ge=(e,t)=>e[t++]&255|(e[t++]&255)<<8;let mh=class{constructor(t){this.blockLen=16,this.outputLen=16,this.buffer=new Uint8Array(16),this.r=new Uint16Array(10),this.h=new Uint16Array(10),this.pad=new Uint16Array(8),this.pos=0,this.finished=!1,t=Cc(t),wt(t,32);const r=Ge(t,0),n=Ge(t,2),o=Ge(t,4),i=Ge(t,6),s=Ge(t,8),a=Ge(t,10),c=Ge(t,12),l=Ge(t,14);this.r[0]=r&8191,this.r[1]=(r>>>13|n<<3)&8191,this.r[2]=(n>>>10|o<<6)&7939,this.r[3]=(o>>>7|i<<9)&8191,this.r[4]=(i>>>4|s<<12)&255,this.r[5]=s>>>1&8190,this.r[6]=(s>>>14|a<<2)&8191,this.r[7]=(a>>>11|c<<5)&8065,this.r[8]=(c>>>8|l<<8)&8191,this.r[9]=l>>>5&127;for(let u=0;u<8;u++)this.pad[u]=Ge(t,16+2*u)}process(t,r,n=!1){const o=n?0:2048,{h:i,r:s}=this,a=s[0],c=s[1],l=s[2],u=s[3],d=s[4],h=s[5],p=s[6],m=s[7],g=s[8],f=s[9],w=Ge(t,r+0),v=Ge(t,r+2),b=Ge(t,r+4),k=Ge(t,r+6),$=Ge(t,r+8),S=Ge(t,r+10),R=Ge(t,r+12),P=Ge(t,r+14);let I=i[0]+(w&8191),L=i[1]+((w>>>13|v<<3)&8191),O=i[2]+((v>>>10|b<<6)&8191),U=i[3]+((b>>>7|k<<9)&8191),H=i[4]+((k>>>4|$<<12)&8191),E=i[5]+($>>>1&8191),C=i[6]+(($>>>14|S<<2)&8191),x=i[7]+((S>>>11|R<<5)&8191),T=i[8]+((R>>>8|P<<8)&8191),_=i[9]+(P>>>5|o),B=0,z=B+I*a+L*(5*f)+O*(5*g)+U*(5*m)+H*(5*p);B=z>>>13,z&=8191,z+=E*(5*h)+C*(5*d)+x*(5*u)+T*(5*l)+_*(5*c),B+=z>>>13,z&=8191;let D=B+I*c+L*a+O*(5*f)+U*(5*g)+H*(5*m);B=D>>>13,D&=8191,D+=E*(5*p)+C*(5*h)+x*(5*d)+T*(5*u)+_*(5*l),B+=D>>>13,D&=8191;let q=B+I*l+L*c+O*a+U*(5*f)+H*(5*g);B=q>>>13,q&=8191,q+=E*(5*m)+C*(5*p)+x*(5*h)+T*(5*d)+_*(5*u),B+=q>>>13,q&=8191;let ne=B+I*u+L*l+O*c+U*a+H*(5*f);B=ne>>>13,ne&=8191,ne+=E*(5*g)+C*(5*m)+x*(5*p)+T*(5*h)+_*(5*d),B+=ne>>>13,ne&=8191;let oe=B+I*d+L*u+O*l+U*c+H*a;B=oe>>>13,oe&=8191,oe+=E*(5*f)+C*(5*g)+x*(5*m)+T*(5*p)+_*(5*h),B+=oe>>>13,oe&=8191;let pe=B+I*h+L*d+O*u+U*l+H*c;B=pe>>>13,pe&=8191,pe+=E*a+C*(5*f)+x*(5*g)+T*(5*m)+_*(5*p),B+=pe>>>13,pe&=8191;let ve=B+I*p+L*h+O*d+U*u+H*l;B=ve>>>13,ve&=8191,ve+=E*c+C*a+x*(5*f)+T*(5*g)+_*(5*m),B+=ve>>>13,ve&=8191;let Pe=B+I*m+L*p+O*h+U*d+H*u;B=Pe>>>13,Pe&=8191,Pe+=E*l+C*c+x*a+T*(5*f)+_*(5*g),B+=Pe>>>13,Pe&=8191;let Ae=B+I*g+L*m+O*p+U*h+H*d;B=Ae>>>13,Ae&=8191,Ae+=E*u+C*l+x*c+T*a+_*(5*f),B+=Ae>>>13,Ae&=8191;let ke=B+I*f+L*g+O*m+U*p+H*h;B=ke>>>13,ke&=8191,ke+=E*d+C*u+x*l+T*c+_*a,B+=ke>>>13,ke&=8191,B=(B<<2)+B|0,B=B+z|0,z=B&8191,B=B>>>13,D+=B,i[0]=z,i[1]=D,i[2]=q,i[3]=ne,i[4]=oe,i[5]=pe,i[6]=ve,i[7]=Pe,i[8]=Ae,i[9]=ke}finalize(){const{h:t,pad:r}=this,n=new Uint16Array(10);let o=t[1]>>>13;t[1]&=8191;for(let a=2;a<10;a++)t[a]+=o,o=t[a]>>>13,t[a]&=8191;t[0]+=o*5,o=t[0]>>>13,t[0]&=8191,t[1]+=o,o=t[1]>>>13,t[1]&=8191,t[2]+=o,n[0]=t[0]+5,o=n[0]>>>13,n[0]&=8191;for(let a=1;a<10;a++)n[a]=t[a]+o,o=n[a]>>>13,n[a]&=8191;n[9]-=8192;let i=(o^1)-1;for(let a=0;a<10;a++)n[a]&=i;i=~i;for(let a=0;a<10;a++)t[a]=t[a]&i|n[a];t[0]=(t[0]|t[1]<<13)&65535,t[1]=(t[1]>>>3|t[2]<<10)&65535,t[2]=(t[2]>>>6|t[3]<<7)&65535,t[3]=(t[3]>>>9|t[4]<<4)&65535,t[4]=(t[4]>>>12|t[5]<<1|t[6]<<14)&65535,t[5]=(t[6]>>>2|t[7]<<11)&65535,t[6]=(t[7]>>>5|t[8]<<8)&65535,t[7]=(t[8]>>>8|t[9]<<5)&65535;let s=t[0]+r[0];t[0]=s&65535;for(let a=1;a<8;a++)s=(t[a]+r[a]|0)+(s>>>16)|0,t[a]=s&65535;qn(n)}update(t){$l(this);const{buffer:r,blockLen:n}=this;t=Cc(t);const o=t.length;for(let i=0;i<o;){const s=Math.min(n-this.pos,o-i);if(s===n){for(;n<=o-i;i+=n)this.process(t,i);continue}r.set(t.subarray(i,i+s),this.pos),this.pos+=s,i+=s,this.pos===n&&(this.process(r,0,!1),this.pos=0)}return this}destroy(){qn(this.h,this.r,this.buffer,this.pad)}digestInto(t){$l(this),rh(t,this),this.finished=!0;const{buffer:r,h:n}=this;let{pos:o}=this;if(o){for(r[o++]=1;o<16;o++)r[o]=0;this.process(r,0,!0)}this.finalize();let i=0;for(let s=0;s<8;s++)t[i++]=n[s]>>>0,t[i++]=n[s]>>>8;return t}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const n=t.slice(0,r);return this.destroy(),n}};function vh(e){const t=(n,o)=>e(o).update(Cc(n)).digest(),r=e(new Uint8Array(32));return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=n=>e(n),t}const bh=vh(e=>new mh(e));function yh(e,t,r,n,o,i=20){let s=e[0],a=e[1],c=e[2],l=e[3],u=t[0],d=t[1],h=t[2],p=t[3],m=t[4],g=t[5],f=t[6],w=t[7],v=o,b=r[0],k=r[1],$=r[2],S=s,R=a,P=c,I=l,L=u,O=d,U=h,H=p,E=m,C=g,x=f,T=w,_=v,B=b,z=k,D=$;for(let ne=0;ne<i;ne+=2)S=S+L|0,_=we(_^S,16),E=E+_|0,L=we(L^E,12),S=S+L|0,_=we(_^S,8),E=E+_|0,L=we(L^E,7),R=R+O|0,B=we(B^R,16),C=C+B|0,O=we(O^C,12),R=R+O|0,B=we(B^R,8),C=C+B|0,O=we(O^C,7),P=P+U|0,z=we(z^P,16),x=x+z|0,U=we(U^x,12),P=P+U|0,z=we(z^P,8),x=x+z|0,U=we(U^x,7),I=I+H|0,D=we(D^I,16),T=T+D|0,H=we(H^T,12),I=I+H|0,D=we(D^I,8),T=T+D|0,H=we(H^T,7),S=S+O|0,D=we(D^S,16),x=x+D|0,O=we(O^x,12),S=S+O|0,D=we(D^S,8),x=x+D|0,O=we(O^x,7),R=R+U|0,_=we(_^R,16),T=T+_|0,U=we(U^T,12),R=R+U|0,_=we(_^R,8),T=T+_|0,U=we(U^T,7),P=P+H|0,B=we(B^P,16),E=E+B|0,H=we(H^E,12),P=P+H|0,B=we(B^P,8),E=E+B|0,H=we(H^E,7),I=I+L|0,z=we(z^I,16),C=C+z|0,L=we(L^C,12),I=I+L|0,z=we(z^I,8),C=C+z|0,L=we(L^C,7);let q=0;n[q++]=s+S|0,n[q++]=a+R|0,n[q++]=c+P|0,n[q++]=l+I|0,n[q++]=u+L|0,n[q++]=d+O|0,n[q++]=h+U|0,n[q++]=p+H|0,n[q++]=m+E|0,n[q++]=g+C|0,n[q++]=f+x|0,n[q++]=w+T|0,n[q++]=v+_|0,n[q++]=b+B|0,n[q++]=k+z|0,n[q++]=$+D|0}const Ch=wh(yh,{counterRight:!1,counterLength:4,allowShortKeys:!1}),xh=new Uint8Array(16),Ul=(e,t)=>{e.update(t);const r=t.length%16;r&&e.update(xh.subarray(r))},Eh=new Uint8Array(32);function Ml(e,t,r,n,o){const i=e(t,r,Eh),s=bh.create(i);o&&Ul(s,o),Ul(s,n);const a=new Uint8Array(16),c=nh(a);Bl(c,0,BigInt(o?o.length:0),!0),Bl(c,8,BigInt(n.length),!0),s.update(a);const l=s.digest();return qn(i,a),l}const Ah=e=>(t,r,n)=>({encrypt(o,i){const s=o.length;i=Rl(s+16,i,!1),i.set(o);const a=i.subarray(0,-16);e(t,r,a,a,1);const c=Ml(e,t,r,a,n);return i.set(c,s),qn(c),i},decrypt(o,i){i=Rl(o.length-16,i,!1);const s=o.subarray(0,-16),a=o.subarray(-16),c=Ml(e,t,r,s,n);if(!ah(a,c))throw new Error("invalid tag");return i.set(o.subarray(0,-16)),e(t,r,i,i,1),qn(c),i}});ch({blockSize:64,nonceLength:12,tagLength:16},Ah(Ch));let Ud=class extends Qc{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,B1(t);const n=Ks(r);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,i=new Uint8Array(o);i.set(n.length>o?t.create().update(n).digest():n);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){return Vn(this),this.iHash.update(t),this}digestInto(t){Vn(this),Ni(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:n,finished:o,destroyed:i,blockLen:s,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=i,t.blockLen=s,t.outputLen=a,t.oHash=r._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}};const Md=(e,t,r)=>new Ud(e,t).update(r).digest();Md.create=(e,t)=>new Ud(e,t);function kh(e,t,r,n){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,n);const o=BigInt(32),i=BigInt(4294967295),s=Number(r>>o&i),a=Number(r&i),c=n?4:0,l=n?0:4;e.setUint32(t+c,s,n),e.setUint32(t+l,a,n)}function Ih(e,t,r){return e&t^~e&r}function Nh(e,t,r){return e&t^e&r^t&r}let Sh=class extends Qc{constructor(t,r,n,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=n,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=fa(this.buffer)}update(t){Vn(this);const{view:r,buffer:n,blockLen:o}=this;t=Ks(t);const i=t.length;for(let s=0;s<i;){const a=Math.min(o-this.pos,i-s);if(a===o){const c=fa(t);for(;o<=i-s;s+=o)this.process(c,s);continue}n.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Vn(this),Nd(t,this),this.finished=!0;const{buffer:r,view:n,blockLen:o,isLE:i}=this;let{pos:s}=this;r[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(n,0),s=0);for(let d=s;d<o;d++)r[d]=0;kh(n,o-8,BigInt(this.length*8),i),this.process(n,0);const a=fa(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<l;d++)a.setUint32(4*d,u[d],i)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const n=t.slice(0,r);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:n,length:o,finished:i,destroyed:s,pos:a}=this;return t.length=o,t.pos=a,t.finished=i,t.destroyed=s,o%r&&t.buffer.set(n),t}};const _h=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),pr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),fr=new Uint32Array(64);let Th=class extends Sh{constructor(){super(64,32,8,!1),this.A=pr[0]|0,this.B=pr[1]|0,this.C=pr[2]|0,this.D=pr[3]|0,this.E=pr[4]|0,this.F=pr[5]|0,this.G=pr[6]|0,this.H=pr[7]|0}get(){const{A:t,B:r,C:n,D:o,E:i,F:s,G:a,H:c}=this;return[t,r,n,o,i,s,a,c]}set(t,r,n,o,i,s,a,c){this.A=t|0,this.B=r|0,this.C=n|0,this.D=o|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=c|0}process(t,r){for(let d=0;d<16;d++,r+=4)fr[d]=t.getUint32(r,!1);for(let d=16;d<64;d++){const h=fr[d-15],p=fr[d-2],m=Ut(h,7)^Ut(h,18)^h>>>3,g=Ut(p,17)^Ut(p,19)^p>>>10;fr[d]=g+fr[d-7]+m+fr[d-16]|0}let{A:n,B:o,C:i,D:s,E:a,F:c,G:l,H:u}=this;for(let d=0;d<64;d++){const h=Ut(a,6)^Ut(a,11)^Ut(a,25),p=u+h+Ih(a,c,l)+_h[d]+fr[d]|0,m=(Ut(n,2)^Ut(n,13)^Ut(n,22))+Nh(n,o,i)|0;u=l,l=c,c=a,a=s+p|0,s=i,i=o,o=n,n=p+m|0}n=n+this.A|0,o=o+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(n,o,i,s,a,c,l,u)}roundClean(){fr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}};const Ph=Sd(()=>new Th);/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Ys=BigInt(0),Js=BigInt(1),$h=BigInt(2);function hn(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function Si(e){if(!hn(e))throw new Error("Uint8Array expected")}function Zn(e,t){if(typeof t!="boolean")throw new Error(e+" boolean expected, got "+t)}const Oh=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Gn(e){Si(e);let t="";for(let r=0;r<e.length;r++)t+=Oh[e[r]];return t}function jn(e){const t=e.toString(16);return t.length&1?"0"+t:t}function el(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return e===""?Ys:BigInt("0x"+e)}const Zt={_0:48,_9:57,A:65,F:70,a:97,f:102};function zl(e){if(e>=Zt._0&&e<=Zt._9)return e-Zt._0;if(e>=Zt.A&&e<=Zt.F)return e-(Zt.A-10);if(e>=Zt.a&&e<=Zt.f)return e-(Zt.a-10)}function Kn(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const t=e.length,r=t/2;if(t%2)throw new Error("hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(r);for(let o=0,i=0;o<r;o++,i+=2){const s=zl(e.charCodeAt(i)),a=zl(e.charCodeAt(i+1));if(s===void 0||a===void 0){const c=e[i]+e[i+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+i)}n[o]=s*16+a}return n}function on(e){return el(Gn(e))}function Jo(e){return Si(e),el(Gn(Uint8Array.from(e).reverse()))}function Yn(e,t){return Kn(e.toString(16).padStart(t*2,"0"))}function Xs(e,t){return Yn(e,t).reverse()}function Rh(e){return Kn(jn(e))}function gt(e,t,r){let n;if(typeof t=="string")try{n=Kn(t)}catch(i){throw new Error(e+" must be hex string or Uint8Array, cause: "+i)}else if(hn(t))n=Uint8Array.from(t);else throw new Error(e+" must be hex string or Uint8Array");const o=n.length;if(typeof r=="number"&&o!==r)throw new Error(e+" of length "+r+" expected, got "+o);return n}function Xo(...e){let t=0;for(let n=0;n<e.length;n++){const o=e[n];Si(o),t+=o.length}const r=new Uint8Array(t);for(let n=0,o=0;n<e.length;n++){const i=e[n];r.set(i,o),o+=i.length}return r}function Bh(e,t){if(e.length!==t.length)return!1;let r=0;for(let n=0;n<e.length;n++)r|=e[n]^t[n];return r===0}function Lh(e){if(typeof e!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}const wa=e=>typeof e=="bigint"&&Ys<=e;function Qs(e,t,r){return wa(e)&&wa(t)&&wa(r)&&t<=e&&e<r}function lr(e,t,r,n){if(!Qs(t,r,n))throw new Error("expected valid "+e+": "+r+" <= n < "+n+", got "+t)}function zd(e){let t;for(t=0;e>Ys;e>>=Js,t+=1);return t}function Uh(e,t){return e>>BigInt(t)&Js}function Mh(e,t,r){return e|(r?Js:Ys)<<BigInt(t)}const tl=e=>($h<<BigInt(e-1))-Js,ma=e=>new Uint8Array(e),Dl=e=>Uint8Array.from(e);function Dd(e,t,r){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof r!="function")throw new Error("hmacFn must be a function");let n=ma(e),o=ma(e),i=0;const s=()=>{n.fill(1),o.fill(0),i=0},a=(...u)=>r(o,n,...u),c=(u=ma())=>{o=a(Dl([0]),u),n=a(),u.length!==0&&(o=a(Dl([1]),u),n=a())},l=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let u=0;const d=[];for(;u<t;){n=a();const h=n.slice();d.push(h),u+=n.length}return Xo(...d)};return(u,d)=>{s(),c(u);let h;for(;!(h=d(l()));)c();return s(),h}}const zh={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",stringOrUint8Array:e=>typeof e=="string"||hn(e),isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function ao(e,t,r={}){const n=(o,i,s)=>{const a=zh[i];if(typeof a!="function")throw new Error("invalid validator function");const c=e[o];if(!(s&&c===void 0)&&!a(c,e))throw new Error("param "+String(o)+" is invalid. Expected "+i+", got "+c)};for(const[o,i]of Object.entries(t))n(o,i,!1);for(const[o,i]of Object.entries(r))n(o,i,!0);return e}const Dh=()=>{throw new Error("not implemented")};function Ac(e){const t=new WeakMap;return(r,...n)=>{const o=t.get(r);if(o!==void 0)return o;const i=e(r,...n);return t.set(r,i),i}}var jh=Object.freeze({__proto__:null,isBytes:hn,abytes:Si,abool:Zn,bytesToHex:Gn,numberToHexUnpadded:jn,hexToNumber:el,hexToBytes:Kn,bytesToNumberBE:on,bytesToNumberLE:Jo,numberToBytesBE:Yn,numberToBytesLE:Xs,numberToVarBytesBE:Rh,ensureBytes:gt,concatBytes:Xo,equalBytes:Bh,utf8ToBytes:Lh,inRange:Qs,aInRange:lr,bitLen:zd,bitGet:Uh,bitSet:Mh,bitMask:tl,createHmacDrbg:Dd,validateObject:ao,notImplemented:Dh,memoized:Ac});const qe=BigInt(0),Re=BigInt(1),Qr=BigInt(2),Wh=BigInt(3),kc=BigInt(4),jl=BigInt(5),Wl=BigInt(8);function st(e,t){const r=e%t;return r>=qe?r:t+r}function jd(e,t,r){if(t<qe)throw new Error("invalid exponent, negatives unsupported");if(r<=qe)throw new Error("invalid modulus");if(r===Re)return qe;let n=Re;for(;t>qe;)t&Re&&(n=n*e%r),e=e*e%r,t>>=Re;return n}function Rt(e,t,r){let n=e;for(;t-- >qe;)n*=n,n%=r;return n}function Ic(e,t){if(e===qe)throw new Error("invert: expected non-zero number");if(t<=qe)throw new Error("invert: expected positive modulus, got "+t);let r=st(e,t),n=t,o=qe,i=Re;for(;r!==qe;){const s=n/r,a=n%r,c=o-i*s;n=r,r=a,o=i,i=c}if(n!==Re)throw new Error("invert: does not exist");return st(o,t)}function Hh(e){const t=(e-Re)/Qr;let r,n,o;for(r=e-Re,n=0;r%Qr===qe;r/=Qr,n++);for(o=Qr;o<e&&jd(o,t,e)!==e-Re;o++)if(o>1e3)throw new Error("Cannot find square root: likely non-prime P");if(n===1){const s=(e+Re)/kc;return function(a,c){const l=a.pow(c,s);if(!a.eql(a.sqr(l),c))throw new Error("Cannot find square root");return l}}const i=(r+Re)/Qr;return function(s,a){if(s.pow(a,t)===s.neg(s.ONE))throw new Error("Cannot find square root");let c=n,l=s.pow(s.mul(s.ONE,o),r),u=s.pow(a,i),d=s.pow(a,r);for(;!s.eql(d,s.ONE);){if(s.eql(d,s.ZERO))return s.ZERO;let h=1;for(let m=s.sqr(d);h<c&&!s.eql(m,s.ONE);h++)m=s.sqr(m);const p=s.pow(l,Re<<BigInt(c-h-1));l=s.sqr(p),u=s.mul(u,p),d=s.mul(d,l),c=h}return u}}function Fh(e){if(e%kc===Wh){const t=(e+Re)/kc;return function(r,n){const o=r.pow(n,t);if(!r.eql(r.sqr(o),n))throw new Error("Cannot find square root");return o}}if(e%Wl===jl){const t=(e-jl)/Wl;return function(r,n){const o=r.mul(n,Qr),i=r.pow(o,t),s=r.mul(n,i),a=r.mul(r.mul(s,Qr),i),c=r.mul(s,r.sub(a,r.ONE));if(!r.eql(r.sqr(c),n))throw new Error("Cannot find square root");return c}}return Hh(e)}const Vh=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function qh(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},r=Vh.reduce((n,o)=>(n[o]="function",n),t);return ao(e,r)}function Zh(e,t,r){if(r<qe)throw new Error("invalid exponent, negatives unsupported");if(r===qe)return e.ONE;if(r===Re)return t;let n=e.ONE,o=t;for(;r>qe;)r&Re&&(n=e.mul(n,o)),o=e.sqr(o),r>>=Re;return n}function Gh(e,t){const r=new Array(t.length),n=t.reduce((i,s,a)=>e.is0(s)?i:(r[a]=i,e.mul(i,s)),e.ONE),o=e.inv(n);return t.reduceRight((i,s,a)=>e.is0(s)?i:(r[a]=e.mul(i,r[a]),e.mul(i,s)),o),r}function Wd(e,t){const r=t!==void 0?t:e.toString(2).length,n=Math.ceil(r/8);return{nBitLength:r,nByteLength:n}}function Hd(e,t,r=!1,n={}){if(e<=qe)throw new Error("invalid field: expected ORDER > 0, got "+e);const{nBitLength:o,nByteLength:i}=Wd(e,t);if(i>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let s;const a=Object.freeze({ORDER:e,isLE:r,BITS:o,BYTES:i,MASK:tl(o),ZERO:qe,ONE:Re,create:c=>st(c,e),isValid:c=>{if(typeof c!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof c);return qe<=c&&c<e},is0:c=>c===qe,isOdd:c=>(c&Re)===Re,neg:c=>st(-c,e),eql:(c,l)=>c===l,sqr:c=>st(c*c,e),add:(c,l)=>st(c+l,e),sub:(c,l)=>st(c-l,e),mul:(c,l)=>st(c*l,e),pow:(c,l)=>Zh(a,c,l),div:(c,l)=>st(c*Ic(l,e),e),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>Ic(c,e),sqrt:n.sqrt||(c=>(s||(s=Fh(e)),s(a,c))),invertBatch:c=>Gh(a,c),cmov:(c,l,u)=>u?l:c,toBytes:c=>r?Xs(c,i):Yn(c,i),fromBytes:c=>{if(c.length!==i)throw new Error("Field.fromBytes: expected "+i+" bytes, got "+c.length);return r?Jo(c):on(c)}});return Object.freeze(a)}function Fd(e){if(typeof e!="bigint")throw new Error("field order must be bigint");const t=e.toString(2).length;return Math.ceil(t/8)}function Vd(e){const t=Fd(e);return t+Math.ceil(t/2)}function Kh(e,t,r=!1){const n=e.length,o=Fd(t),i=Vd(t);if(n<16||n<i||n>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+n);const s=r?Jo(e):on(e),a=st(s,t-Re)+Re;return r?Xs(a,o):Yn(a,o)}const Hl=BigInt(0),zi=BigInt(1);function va(e,t){const r=t.negate();return e?r:t}function qd(e,t){if(!Number.isSafeInteger(e)||e<=0||e>t)throw new Error("invalid window size, expected [1.."+t+"], got W="+e)}function ba(e,t){qd(e,t);const r=Math.ceil(t/e)+1,n=2**(e-1);return{windows:r,windowSize:n}}function Yh(e,t){if(!Array.isArray(e))throw new Error("array expected");e.forEach((r,n)=>{if(!(r instanceof t))throw new Error("invalid point at index "+n)})}function Jh(e,t){if(!Array.isArray(e))throw new Error("array of scalars expected");e.forEach((r,n)=>{if(!t.isValid(r))throw new Error("invalid scalar at index "+n)})}const ya=new WeakMap,Zd=new WeakMap;function Ca(e){return Zd.get(e)||1}function Xh(e,t){return{constTimeNegate:va,hasPrecomputes(r){return Ca(r)!==1},unsafeLadder(r,n,o=e.ZERO){let i=r;for(;n>Hl;)n&zi&&(o=o.add(i)),i=i.double(),n>>=zi;return o},precomputeWindow(r,n){const{windows:o,windowSize:i}=ba(n,t),s=[];let a=r,c=a;for(let l=0;l<o;l++){c=a,s.push(c);for(let u=1;u<i;u++)c=c.add(a),s.push(c);a=c.double()}return s},wNAF(r,n,o){const{windows:i,windowSize:s}=ba(r,t);let a=e.ZERO,c=e.BASE;const l=BigInt(2**r-1),u=2**r,d=BigInt(r);for(let h=0;h<i;h++){const p=h*s;let m=Number(o&l);o>>=d,m>s&&(m-=u,o+=zi);const g=p,f=p+Math.abs(m)-1,w=h%2!==0,v=m<0;m===0?c=c.add(va(w,n[g])):a=a.add(va(v,n[f]))}return{p:a,f:c}},wNAFUnsafe(r,n,o,i=e.ZERO){const{windows:s,windowSize:a}=ba(r,t),c=BigInt(2**r-1),l=2**r,u=BigInt(r);for(let d=0;d<s;d++){const h=d*a;if(o===Hl)break;let p=Number(o&c);if(o>>=u,p>a&&(p-=l,o+=zi),p===0)continue;let m=n[h+Math.abs(p)-1];p<0&&(m=m.negate()),i=i.add(m)}return i},getPrecomputes(r,n,o){let i=ya.get(n);return i||(i=this.precomputeWindow(n,r),r!==1&&ya.set(n,o(i))),i},wNAFCached(r,n,o){const i=Ca(r);return this.wNAF(i,this.getPrecomputes(i,r,o),n)},wNAFCachedUnsafe(r,n,o,i){const s=Ca(r);return s===1?this.unsafeLadder(r,n,i):this.wNAFUnsafe(s,this.getPrecomputes(s,r,o),n,i)},setWindowSize(r,n){qd(n,t),Zd.set(r,n),ya.delete(r)}}}function Qh(e,t,r,n){if(Yh(r,e),Jh(n,t),r.length!==n.length)throw new Error("arrays of points and scalars must have equal length");const o=e.ZERO,i=zd(BigInt(r.length)),s=i>12?i-3:i>4?i-2:i?2:1,a=(1<<s)-1,c=new Array(a+1).fill(o),l=Math.floor((t.BITS-1)/s)*s;let u=o;for(let d=l;d>=0;d-=s){c.fill(o);for(let p=0;p<n.length;p++){const m=n[p],g=Number(m>>BigInt(d)&BigInt(a));c[g]=c[g].add(r[p])}let h=o;for(let p=c.length-1,m=o;p>0;p--)m=m.add(c[p]),h=h.add(m);if(u=u.add(h),d!==0)for(let p=0;p<s;p++)u=u.double()}return u}function Gd(e){return qh(e.Fp),ao(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...Wd(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}BigInt(0),BigInt(1),BigInt(2),BigInt(8);const Cn=BigInt(0),xa=BigInt(1);function ep(e){return ao(e,{a:"bigint"},{montgomeryBits:"isSafeInteger",nByteLength:"isSafeInteger",adjustScalarBytes:"function",domain:"function",powPminus2:"function",Gu:"bigint"}),Object.freeze({...e})}function tp(e){const t=ep(e),{P:r}=t,n=v=>st(v,r),o=t.montgomeryBits,i=Math.ceil(o/8),s=t.nByteLength,a=t.adjustScalarBytes||(v=>v),c=t.powPminus2||(v=>jd(v,r-BigInt(2),r));function l(v,b,k){const $=n(v*(b-k));return b=n(b-$),k=n(k+$),[b,k]}const u=(t.a-BigInt(2))/BigInt(4);function d(v,b){lr("u",v,Cn,r),lr("scalar",b,Cn,r);const k=b,$=v;let S=xa,R=Cn,P=v,I=xa,L=Cn,O;for(let H=BigInt(o-1);H>=Cn;H--){const E=k>>H&xa;L^=E,O=l(L,S,P),S=O[0],P=O[1],O=l(L,R,I),R=O[0],I=O[1],L=E;const C=S+R,x=n(C*C),T=S-R,_=n(T*T),B=x-_,z=P+I,D=P-I,q=n(D*C),ne=n(z*T),oe=q+ne,pe=q-ne;P=n(oe*oe),I=n($*n(pe*pe)),S=n(x*_),R=n(B*(x+n(u*B)))}O=l(L,S,P),S=O[0],P=O[1],O=l(L,R,I),R=O[0],I=O[1];const U=c(R);return n(S*U)}function h(v){return Xs(n(v),i)}function p(v){const b=gt("u coordinate",v,i);return s===32&&(b[31]&=127),Jo(b)}function m(v){const b=gt("scalar",v),k=b.length;if(k!==i&&k!==s){let $=""+i+" or "+s;throw new Error("invalid scalar, expected "+$+" bytes, got "+k)}return Jo(a(b))}function g(v,b){const k=p(b),$=m(v),S=d(k,$);if(S===Cn)throw new Error("invalid private or public key received");return h(S)}const f=h(t.Gu);function w(v){return g(v,f)}return{scalarMult:g,scalarMultBase:w,getSharedSecret:(v,b)=>g(v,b),getPublicKey:v=>w(v),utils:{randomPrivateKey:()=>t.randomBytes(t.nByteLength)},GuBytes:f}}const Nc=BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");BigInt(0);const rp=BigInt(1),Fl=BigInt(2),np=BigInt(3),op=BigInt(5);BigInt(8);function ip(e){const t=BigInt(10),r=BigInt(20),n=BigInt(40),o=BigInt(80),i=Nc,s=e*e%i*e%i,a=Rt(s,Fl,i)*s%i,c=Rt(a,rp,i)*e%i,l=Rt(c,op,i)*c%i,u=Rt(l,t,i)*l%i,d=Rt(u,r,i)*u%i,h=Rt(d,n,i)*d%i,p=Rt(h,o,i)*h%i,m=Rt(p,o,i)*h%i,g=Rt(m,t,i)*l%i;return{pow_p_5_8:Rt(g,Fl,i)*e%i,b2:s}}function sp(e){return e[0]&=248,e[31]&=127,e[31]|=64,e}tp({P:Nc,a:BigInt(486662),montgomeryBits:255,nByteLength:32,Gu:BigInt(9),powPminus2:e=>{const t=Nc,{pow_p_5_8:r,b2:n}=ip(e);return st(Rt(r,np,t)*n,t)},adjustScalarBytes:sp,randomBytes:_d});function Vl(e){e.lowS!==void 0&&Zn("lowS",e.lowS),e.prehash!==void 0&&Zn("prehash",e.prehash)}function ap(e){const t=Gd(e);ao(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:r,Fp:n,a:o}=t;if(r){if(!n.eql(o,n.ZERO))throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if(typeof r!="object"||typeof r.beta!="bigint"||typeof r.splitScalar!="function")throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:cp,hexToBytes:lp}=jh;let up=class extends Error{constructor(t=""){super(t)}};const ir={Err:up,_tlv:{encode:(e,t)=>{const{Err:r}=ir;if(e<0||e>256)throw new r("tlv.encode: wrong tag");if(t.length&1)throw new r("tlv.encode: unpadded data");const n=t.length/2,o=jn(n);if(o.length/2&128)throw new r("tlv.encode: long form length too big");const i=n>127?jn(o.length/2|128):"";return jn(e)+i+o+t},decode(e,t){const{Err:r}=ir;let n=0;if(e<0||e>256)throw new r("tlv.encode: wrong tag");if(t.length<2||t[n++]!==e)throw new r("tlv.decode: wrong tlv");const o=t[n++],i=!!(o&128);let s=0;if(!i)s=o;else{const c=o&127;if(!c)throw new r("tlv.decode(long): indefinite length not supported");if(c>4)throw new r("tlv.decode(long): byte length is too big");const l=t.subarray(n,n+c);if(l.length!==c)throw new r("tlv.decode: length bytes not complete");if(l[0]===0)throw new r("tlv.decode(long): zero leftmost byte");for(const u of l)s=s<<8|u;if(n+=c,s<128)throw new r("tlv.decode(long): not minimal encoding")}const a=t.subarray(n,n+s);if(a.length!==s)throw new r("tlv.decode: wrong value length");return{v:a,l:t.subarray(n+s)}}},_int:{encode(e){const{Err:t}=ir;if(e<ar)throw new t("integer: negative integers are not allowed");let r=jn(e);if(Number.parseInt(r[0],16)&8&&(r="00"+r),r.length&1)throw new t("unexpected DER parsing assertion: unpadded hex");return r},decode(e){const{Err:t}=ir;if(e[0]&128)throw new t("invalid signature integer: negative");if(e[0]===0&&!(e[1]&128))throw new t("invalid signature integer: unnecessary leading zero");return cp(e)}},toSig(e){const{Err:t,_int:r,_tlv:n}=ir,o=typeof e=="string"?lp(e):e;Si(o);const{v:i,l:s}=n.decode(48,o);if(s.length)throw new t("invalid signature: left bytes after parsing");const{v:a,l:c}=n.decode(2,i),{v:l,l:u}=n.decode(2,c);if(u.length)throw new t("invalid signature: left bytes after parsing");return{r:r.decode(a),s:r.decode(l)}},hexFromSig(e){const{_tlv:t,_int:r}=ir,n=t.encode(2,r.encode(e.r)),o=t.encode(2,r.encode(e.s)),i=n+o;return t.encode(48,i)}},ar=BigInt(0),He=BigInt(1);BigInt(2);const ql=BigInt(3);BigInt(4);function dp(e){const t=ap(e),{Fp:r}=t,n=Hd(t.n,t.nBitLength),o=t.toBytes||((g,f,w)=>{const v=f.toAffine();return Xo(Uint8Array.from([4]),r.toBytes(v.x),r.toBytes(v.y))}),i=t.fromBytes||(g=>{const f=g.subarray(1),w=r.fromBytes(f.subarray(0,r.BYTES)),v=r.fromBytes(f.subarray(r.BYTES,2*r.BYTES));return{x:w,y:v}});function s(g){const{a:f,b:w}=t,v=r.sqr(g),b=r.mul(v,g);return r.add(r.add(b,r.mul(g,f)),w)}if(!r.eql(r.sqr(t.Gy),s(t.Gx)))throw new Error("bad generator point: equation left != right");function a(g){return Qs(g,He,t.n)}function c(g){const{allowedPrivateKeyLengths:f,nByteLength:w,wrapPrivateKey:v,n:b}=t;if(f&&typeof g!="bigint"){if(hn(g)&&(g=Gn(g)),typeof g!="string"||!f.includes(g.length))throw new Error("invalid private key");g=g.padStart(w*2,"0")}let k;try{k=typeof g=="bigint"?g:on(gt("private key",g,w))}catch{throw new Error("invalid private key, expected hex or "+w+" bytes, got "+typeof g)}return v&&(k=st(k,b)),lr("private key",k,He,b),k}function l(g){if(!(g instanceof h))throw new Error("ProjectivePoint expected")}const u=Ac((g,f)=>{const{px:w,py:v,pz:b}=g;if(r.eql(b,r.ONE))return{x:w,y:v};const k=g.is0();f==null&&(f=k?r.ONE:r.inv(b));const $=r.mul(w,f),S=r.mul(v,f),R=r.mul(b,f);if(k)return{x:r.ZERO,y:r.ZERO};if(!r.eql(R,r.ONE))throw new Error("invZ was invalid");return{x:$,y:S}}),d=Ac(g=>{if(g.is0()){if(t.allowInfinityPoint&&!r.is0(g.py))return;throw new Error("bad point: ZERO")}const{x:f,y:w}=g.toAffine();if(!r.isValid(f)||!r.isValid(w))throw new Error("bad point: x or y not FE");const v=r.sqr(w),b=s(f);if(!r.eql(v,b))throw new Error("bad point: equation left != right");if(!g.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class h{constructor(f,w,v){if(this.px=f,this.py=w,this.pz=v,f==null||!r.isValid(f))throw new Error("x required");if(w==null||!r.isValid(w))throw new Error("y required");if(v==null||!r.isValid(v))throw new Error("z required");Object.freeze(this)}static fromAffine(f){const{x:w,y:v}=f||{};if(!f||!r.isValid(w)||!r.isValid(v))throw new Error("invalid affine point");if(f instanceof h)throw new Error("projective point not allowed");const b=k=>r.eql(k,r.ZERO);return b(w)&&b(v)?h.ZERO:new h(w,v,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(f){const w=r.invertBatch(f.map(v=>v.pz));return f.map((v,b)=>v.toAffine(w[b])).map(h.fromAffine)}static fromHex(f){const w=h.fromAffine(i(gt("pointHex",f)));return w.assertValidity(),w}static fromPrivateKey(f){return h.BASE.multiply(c(f))}static msm(f,w){return Qh(h,n,f,w)}_setWindowSize(f){m.setWindowSize(this,f)}assertValidity(){d(this)}hasEvenY(){const{y:f}=this.toAffine();if(r.isOdd)return!r.isOdd(f);throw new Error("Field doesn't support isOdd")}equals(f){l(f);const{px:w,py:v,pz:b}=this,{px:k,py:$,pz:S}=f,R=r.eql(r.mul(w,S),r.mul(k,b)),P=r.eql(r.mul(v,S),r.mul($,b));return R&&P}negate(){return new h(this.px,r.neg(this.py),this.pz)}double(){const{a:f,b:w}=t,v=r.mul(w,ql),{px:b,py:k,pz:$}=this;let S=r.ZERO,R=r.ZERO,P=r.ZERO,I=r.mul(b,b),L=r.mul(k,k),O=r.mul($,$),U=r.mul(b,k);return U=r.add(U,U),P=r.mul(b,$),P=r.add(P,P),S=r.mul(f,P),R=r.mul(v,O),R=r.add(S,R),S=r.sub(L,R),R=r.add(L,R),R=r.mul(S,R),S=r.mul(U,S),P=r.mul(v,P),O=r.mul(f,O),U=r.sub(I,O),U=r.mul(f,U),U=r.add(U,P),P=r.add(I,I),I=r.add(P,I),I=r.add(I,O),I=r.mul(I,U),R=r.add(R,I),O=r.mul(k,$),O=r.add(O,O),I=r.mul(O,U),S=r.sub(S,I),P=r.mul(O,L),P=r.add(P,P),P=r.add(P,P),new h(S,R,P)}add(f){l(f);const{px:w,py:v,pz:b}=this,{px:k,py:$,pz:S}=f;let R=r.ZERO,P=r.ZERO,I=r.ZERO;const L=t.a,O=r.mul(t.b,ql);let U=r.mul(w,k),H=r.mul(v,$),E=r.mul(b,S),C=r.add(w,v),x=r.add(k,$);C=r.mul(C,x),x=r.add(U,H),C=r.sub(C,x),x=r.add(w,b);let T=r.add(k,S);return x=r.mul(x,T),T=r.add(U,E),x=r.sub(x,T),T=r.add(v,b),R=r.add($,S),T=r.mul(T,R),R=r.add(H,E),T=r.sub(T,R),I=r.mul(L,x),R=r.mul(O,E),I=r.add(R,I),R=r.sub(H,I),I=r.add(H,I),P=r.mul(R,I),H=r.add(U,U),H=r.add(H,U),E=r.mul(L,E),x=r.mul(O,x),H=r.add(H,E),E=r.sub(U,E),E=r.mul(L,E),x=r.add(x,E),U=r.mul(H,x),P=r.add(P,U),U=r.mul(T,x),R=r.mul(C,R),R=r.sub(R,U),U=r.mul(C,H),I=r.mul(T,I),I=r.add(I,U),new h(R,P,I)}subtract(f){return this.add(f.negate())}is0(){return this.equals(h.ZERO)}wNAF(f){return m.wNAFCached(this,f,h.normalizeZ)}multiplyUnsafe(f){const{endo:w,n:v}=t;lr("scalar",f,ar,v);const b=h.ZERO;if(f===ar)return b;if(this.is0()||f===He)return this;if(!w||m.hasPrecomputes(this))return m.wNAFCachedUnsafe(this,f,h.normalizeZ);let{k1neg:k,k1:$,k2neg:S,k2:R}=w.splitScalar(f),P=b,I=b,L=this;for(;$>ar||R>ar;)$&He&&(P=P.add(L)),R&He&&(I=I.add(L)),L=L.double(),$>>=He,R>>=He;return k&&(P=P.negate()),S&&(I=I.negate()),I=new h(r.mul(I.px,w.beta),I.py,I.pz),P.add(I)}multiply(f){const{endo:w,n:v}=t;lr("scalar",f,He,v);let b,k;if(w){const{k1neg:$,k1:S,k2neg:R,k2:P}=w.splitScalar(f);let{p:I,f:L}=this.wNAF(S),{p:O,f:U}=this.wNAF(P);I=m.constTimeNegate($,I),O=m.constTimeNegate(R,O),O=new h(r.mul(O.px,w.beta),O.py,O.pz),b=I.add(O),k=L.add(U)}else{const{p:$,f:S}=this.wNAF(f);b=$,k=S}return h.normalizeZ([b,k])[0]}multiplyAndAddUnsafe(f,w,v){const b=h.BASE,k=(S,R)=>R===ar||R===He||!S.equals(b)?S.multiplyUnsafe(R):S.multiply(R),$=k(this,w).add(k(f,v));return $.is0()?void 0:$}toAffine(f){return u(this,f)}isTorsionFree(){const{h:f,isTorsionFree:w}=t;if(f===He)return!0;if(w)return w(h,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:f,clearCofactor:w}=t;return f===He?this:w?w(h,this):this.multiplyUnsafe(t.h)}toRawBytes(f=!0){return Zn("isCompressed",f),this.assertValidity(),o(h,this,f)}toHex(f=!0){return Zn("isCompressed",f),Gn(this.toRawBytes(f))}}h.BASE=new h(t.Gx,t.Gy,r.ONE),h.ZERO=new h(r.ZERO,r.ONE,r.ZERO);const p=t.nBitLength,m=Xh(h,t.endo?Math.ceil(p/2):p);return{CURVE:t,ProjectivePoint:h,normPrivateKeyToScalar:c,weierstrassEquation:s,isWithinCurveOrder:a}}function hp(e){const t=Gd(e);return ao(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function pp(e){const t=hp(e),{Fp:r,n}=t,o=r.BYTES+1,i=2*r.BYTES+1;function s(E){return st(E,n)}function a(E){return Ic(E,n)}const{ProjectivePoint:c,normPrivateKeyToScalar:l,weierstrassEquation:u,isWithinCurveOrder:d}=dp({...t,toBytes(E,C,x){const T=C.toAffine(),_=r.toBytes(T.x),B=Xo;return Zn("isCompressed",x),x?B(Uint8Array.from([C.hasEvenY()?2:3]),_):B(Uint8Array.from([4]),_,r.toBytes(T.y))},fromBytes(E){const C=E.length,x=E[0],T=E.subarray(1);if(C===o&&(x===2||x===3)){const _=on(T);if(!Qs(_,He,r.ORDER))throw new Error("Point is not on curve");const B=u(_);let z;try{z=r.sqrt(B)}catch(q){const ne=q instanceof Error?": "+q.message:"";throw new Error("Point is not on curve"+ne)}const D=(z&He)===He;return(x&1)===1!==D&&(z=r.neg(z)),{x:_,y:z}}else if(C===i&&x===4){const _=r.fromBytes(T.subarray(0,r.BYTES)),B=r.fromBytes(T.subarray(r.BYTES,2*r.BYTES));return{x:_,y:B}}else{const _=o,B=i;throw new Error("invalid Point, expected length of "+_+", or uncompressed "+B+", got "+C)}}}),h=E=>Gn(Yn(E,t.nByteLength));function p(E){const C=n>>He;return E>C}function m(E){return p(E)?s(-E):E}const g=(E,C,x)=>on(E.slice(C,x));class f{constructor(C,x,T){this.r=C,this.s=x,this.recovery=T,this.assertValidity()}static fromCompact(C){const x=t.nByteLength;return C=gt("compactSignature",C,x*2),new f(g(C,0,x),g(C,x,2*x))}static fromDER(C){const{r:x,s:T}=ir.toSig(gt("DER",C));return new f(x,T)}assertValidity(){lr("r",this.r,He,n),lr("s",this.s,He,n)}addRecoveryBit(C){return new f(this.r,this.s,C)}recoverPublicKey(C){const{r:x,s:T,recovery:_}=this,B=S(gt("msgHash",C));if(_==null||![0,1,2,3].includes(_))throw new Error("recovery id invalid");const z=_===2||_===3?x+t.n:x;if(z>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");const D=(_&1)===0?"02":"03",q=c.fromHex(D+h(z)),ne=a(z),oe=s(-B*ne),pe=s(T*ne),ve=c.BASE.multiplyAndAddUnsafe(q,oe,pe);if(!ve)throw new Error("point at infinify");return ve.assertValidity(),ve}hasHighS(){return p(this.s)}normalizeS(){return this.hasHighS()?new f(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return Kn(this.toDERHex())}toDERHex(){return ir.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return Kn(this.toCompactHex())}toCompactHex(){return h(this.r)+h(this.s)}}const w={isValidPrivateKey(E){try{return l(E),!0}catch{return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>{const E=Vd(t.n);return Kh(t.randomBytes(E),t.n)},precompute(E=8,C=c.BASE){return C._setWindowSize(E),C.multiply(BigInt(3)),C}};function v(E,C=!0){return c.fromPrivateKey(E).toRawBytes(C)}function b(E){const C=hn(E),x=typeof E=="string",T=(C||x)&&E.length;return C?T===o||T===i:x?T===2*o||T===2*i:E instanceof c}function k(E,C,x=!0){if(b(E))throw new Error("first arg must be private key");if(!b(C))throw new Error("second arg must be public key");return c.fromHex(C).multiply(l(E)).toRawBytes(x)}const $=t.bits2int||function(E){if(E.length>8192)throw new Error("input is too large");const C=on(E),x=E.length*8-t.nBitLength;return x>0?C>>BigInt(x):C},S=t.bits2int_modN||function(E){return s($(E))},R=tl(t.nBitLength);function P(E){return lr("num < 2^"+t.nBitLength,E,ar,R),Yn(E,t.nByteLength)}function I(E,C,x=L){if(["recovered","canonical"].some(Ae=>Ae in x))throw new Error("sign() legacy options not supported");const{hash:T,randomBytes:_}=t;let{lowS:B,prehash:z,extraEntropy:D}=x;B==null&&(B=!0),E=gt("msgHash",E),Vl(x),z&&(E=gt("prehashed msgHash",T(E)));const q=S(E),ne=l(C),oe=[P(ne),P(q)];if(D!=null&&D!==!1){const Ae=D===!0?_(r.BYTES):D;oe.push(gt("extraEntropy",Ae))}const pe=Xo(...oe),ve=q;function Pe(Ae){const ke=$(Ae);if(!d(ke))return;const $e=a(ke),Ue=c.BASE.multiply(ke).toAffine(),Oe=s(Ue.x);if(Oe===ar)return;const Me=s($e*s(ve+Oe*ne));if(Me===ar)return;let St=(Ue.x===Oe?0:2)|Number(Ue.y&He),ho=Me;return B&&p(Me)&&(ho=m(Me),St^=1),new f(Oe,ho,St)}return{seed:pe,k2sig:Pe}}const L={lowS:t.lowS,prehash:!1},O={lowS:t.lowS,prehash:!1};function U(E,C,x=L){const{seed:T,k2sig:_}=I(E,C,x),B=t;return Dd(B.hash.outputLen,B.nByteLength,B.hmac)(T,_)}c.BASE._setWindowSize(8);function H(E,C,x,T=O){var Me;const _=E;C=gt("msgHash",C),x=gt("publicKey",x);const{lowS:B,prehash:z,format:D}=T;if(Vl(T),"strict"in T)throw new Error("options.strict was renamed to lowS");if(D!==void 0&&D!=="compact"&&D!=="der")throw new Error("format must be compact or der");const q=typeof _=="string"||hn(_),ne=!q&&!D&&typeof _=="object"&&_!==null&&typeof _.r=="bigint"&&typeof _.s=="bigint";if(!q&&!ne)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let oe,pe;try{if(ne&&(oe=new f(_.r,_.s)),q){try{D!=="compact"&&(oe=f.fromDER(_))}catch(St){if(!(St instanceof ir.Err))throw St}!oe&&D!=="der"&&(oe=f.fromCompact(_))}pe=c.fromHex(x)}catch{return!1}if(!oe||B&&oe.hasHighS())return!1;z&&(C=t.hash(C));const{r:ve,s:Pe}=oe,Ae=S(C),ke=a(Pe),$e=s(Ae*ke),Ue=s(ve*ke),Oe=(Me=c.BASE.multiplyAndAddUnsafe(pe,$e,Ue))==null?void 0:Me.toAffine();return Oe?s(Oe.x)===ve:!1}return{CURVE:t,getPublicKey:v,getSharedSecret:k,sign:U,verify:H,ProjectivePoint:c,Signature:f,utils:w}}function fp(e){return{hash:e,hmac:(t,...r)=>Md(e,t,V1(...r)),randomBytes:_d}}function gp(e,t){const r=n=>pp({...e,...fp(n)});return{...r(t),create:r}}const Kd=Hd(BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff")),wp=Kd.create(BigInt("-3")),mp=BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b");gp({a:wp,b:mp,Fp:Kd,n:BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"),Gx:BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"),Gy:BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5"),h:BigInt(1),lowS:!1},Ph);const vp={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}};function bp(e,t){const{message:r,code:n}=vp[e];return{message:r,code:n}}function Sc(e,t){return!!Array.isArray(e)}const Rs={};var Zl={};const yp="wc",Cp="ethereum_provider",xp=`${yp}@2:${Cp}:`,Ep="https://rpc.walletconnect.org/v1/",_c=["eth_sendTransaction","personal_sign"],Ap=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_sendCalls","wallet_getCapabilities","wallet_getCallsStatus","wallet_showCallsStatus"],Tc=["chainChanged","accountsChanged"],kp=["chainChanged","accountsChanged","message","disconnect","connect"];var Ip=Object.defineProperty,Np=Object.defineProperties,Sp=Object.getOwnPropertyDescriptors,Gl=Object.getOwnPropertySymbols,_p=Object.prototype.hasOwnProperty,Tp=Object.prototype.propertyIsEnumerable,Pc=(e,t,r)=>t in e?Ip(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Jr=(e,t)=>{for(var r in t||(t={}))_p.call(t,r)&&Pc(e,r,t[r]);if(Gl)for(var r of Gl(t))Tp.call(t,r)&&Pc(e,r,t[r]);return e},fo=(e,t)=>Np(e,Sp(t)),ut=(e,t,r)=>Pc(e,typeof t!="symbol"?t+"":t,r);function Bs(e){return Number(e[0].split(":")[1])}function Di(e){return`0x${e.toString(16)}`}function Pp(e){const{chains:t,optionalChains:r,methods:n,optionalMethods:o,events:i,optionalEvents:s,rpcMap:a}=e;if(!Sc(t))throw new Error("Invalid chains");const c={chains:t,methods:n||_c,events:i||Tc,rpcMap:Jr({},t.length?{[Bs(t)]:a[Bs(t)]}:{})},l=i==null?void 0:i.filter(p=>!Tc.includes(p)),u=n==null?void 0:n.filter(p=>!_c.includes(p));if(!r&&!s&&!o&&!(l!=null&&l.length)&&!(u!=null&&u.length))return{required:t.length?c:void 0};const d=(l==null?void 0:l.length)&&(u==null?void 0:u.length)||!r,h={chains:[...new Set(d?c.chains.concat(r||[]):r)],methods:[...new Set(c.methods.concat(o!=null&&o.length?o:Ap))],events:[...new Set(c.events.concat(s!=null&&s.length?s:kp))],rpcMap:a};return{required:t.length?c:void 0,optional:r.length?h:void 0}}class rl{constructor(){ut(this,"events",new P1.EventEmitter),ut(this,"namespace","eip155"),ut(this,"accounts",[]),ut(this,"signer"),ut(this,"chainId",1),ut(this,"modal"),ut(this,"rpc"),ut(this,"STORAGE_KEY",xp),ut(this,"on",(t,r)=>(this.events.on(t,r),this)),ut(this,"once",(t,r)=>(this.events.once(t,r),this)),ut(this,"removeListener",(t,r)=>(this.events.removeListener(t,r),this)),ut(this,"off",(t,r)=>(this.events.off(t,r),this)),ut(this,"parseAccount",t=>this.isCompatibleChainId(t)?this.parseAccountId(t).address:t),this.signer={},this.rpc={}}static async init(t){const r=new rl;return await r.initialize(t),r}async request(t,r){return await this.signer.request(t,this.formatChainId(this.chainId),r)}sendAsync(t,r,n){this.signer.sendAsync(t,r,this.formatChainId(this.chainId),n)}get connected(){return this.signer.client?this.signer.client.core.relayer.connected:!1}get connecting(){return this.signer.client?this.signer.client.core.relayer.connecting:!1}async enable(){return this.session||await this.connect(),await this.request({method:"eth_requestAccounts"})}async connect(t){var r;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts(t);const{required:n,optional:o}=Pp(this.rpc);try{const i=await new Promise(async(a,c)=>{var l,u;this.rpc.showQrModal&&((l=this.modal)==null||l.open(),(u=this.modal)==null||u.subscribeState(h=>{!h.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),c(new Error("Connection request reset. Please try again.")))}));const d=t!=null&&t.scopedProperties?{[this.namespace]:t.scopedProperties}:void 0;await this.signer.connect(fo(Jr({namespaces:Jr({},n&&{[this.namespace]:n})},o&&{optionalNamespaces:{[this.namespace]:o}}),{pairingTopic:t==null?void 0:t.pairingTopic,scopedProperties:d})).then(h=>{a(h)}).catch(h=>{var p;(p=this.modal)==null||p.showErrorMessage("Unable to connect"),c(new Error(h.message))})});if(!i)return;const s=Il(i.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:s),this.setAccounts(s),this.events.emit("connect",{chainId:Di(this.chainId)})}catch(i){throw this.signer.logger.error(i),i}finally{(r=this.modal)==null||r.close()}}async authenticate(t,r){var n;if(!this.signer.client)throw new Error("Provider not initialized. Call init() first");this.loadConnectOpts({chains:t==null?void 0:t.chains});try{const o=await new Promise(async(s,a)=>{var c,l;this.rpc.showQrModal&&((c=this.modal)==null||c.open(),(l=this.modal)==null||l.subscribeState(u=>{!u.open&&!this.signer.session&&(this.signer.abortPairingAttempt(),a(new Error("Connection request reset. Please try again.")))})),await this.signer.authenticate(fo(Jr({},t),{chains:this.rpc.chains}),r).then(u=>{s(u)}).catch(u=>{var d;(d=this.modal)==null||d.showErrorMessage("Unable to connect"),a(new Error(u.message))})}),i=o.session;if(i){const s=Il(i.namespaces,[this.namespace]);this.setChainIds(this.rpc.chains.length?this.rpc.chains:s),this.setAccounts(s),this.events.emit("connect",{chainId:Di(this.chainId)})}return o}catch(o){throw this.signer.logger.error(o),o}finally{(n=this.modal)==null||n.close()}}async disconnect(){this.session&&await this.signer.disconnect(),this.reset()}get isWalletConnect(){return!0}get session(){return this.signer.session}registerEventListeners(){this.signer.on("session_event",t=>{const{params:r}=t,{event:n}=r;n.name==="accountsChanged"?(this.accounts=this.parseAccounts(n.data),this.events.emit("accountsChanged",this.accounts)):n.name==="chainChanged"?this.setChainId(this.formatChainId(n.data)):this.events.emit(n.name,n.data),this.events.emit("session_event",t)}),this.signer.on("accountsChanged",t=>{this.accounts=this.parseAccounts(t),this.events.emit("accountsChanged",this.accounts)}),this.signer.on("chainChanged",t=>{const r=parseInt(t);this.chainId=r,this.events.emit("chainChanged",Di(this.chainId)),this.persist()}),this.signer.on("session_update",t=>{this.events.emit("session_update",t)}),this.signer.on("session_delete",t=>{this.reset(),this.events.emit("session_delete",t),this.events.emit("disconnect",fo(Jr({},bp("USER_DISCONNECTED")),{data:t.topic,name:"USER_DISCONNECTED"}))}),this.signer.on("display_uri",t=>{this.events.emit("display_uri",t)})}switchEthereumChain(t){this.request({method:"wallet_switchEthereumChain",params:[{chainId:t.toString(16)}]})}isCompatibleChainId(t){return typeof t=="string"?t.startsWith(`${this.namespace}:`):!1}formatChainId(t){return`${this.namespace}:${t}`}parseChainId(t){return Number(t.split(":")[1])}setChainIds(t){const r=t.filter(n=>this.isCompatibleChainId(n)).map(n=>this.parseChainId(n));r.length&&(this.chainId=r[0],this.events.emit("chainChanged",Di(this.chainId)),this.persist())}setChainId(t){if(this.isCompatibleChainId(t)){const r=this.parseChainId(t);this.chainId=r,this.switchEthereumChain(r)}}parseAccountId(t){const[r,n,o]=t.split(":");return{chainId:`${r}:${n}`,address:o}}setAccounts(t){this.accounts=t.filter(r=>this.parseChainId(this.parseAccountId(r).chainId)===this.chainId).map(r=>this.parseAccountId(r).address),this.events.emit("accountsChanged",this.accounts)}getRpcConfig(t){var r,n;const o=(r=t==null?void 0:t.chains)!=null?r:[],i=(n=t==null?void 0:t.optionalChains)!=null?n:[],s=o.concat(i);if(!s.length)throw new Error("No chains specified in either `chains` or `optionalChains`");const a=o.length?(t==null?void 0:t.methods)||_c:[],c=o.length?(t==null?void 0:t.events)||Tc:[],l=(t==null?void 0:t.optionalMethods)||[],u=(t==null?void 0:t.optionalEvents)||[],d=(t==null?void 0:t.rpcMap)||this.buildRpcMap(s,t.projectId),h=(t==null?void 0:t.qrModalOptions)||void 0;return{chains:o==null?void 0:o.map(p=>this.formatChainId(p)),optionalChains:i.map(p=>this.formatChainId(p)),methods:a,events:c,optionalMethods:l,optionalEvents:u,rpcMap:d,showQrModal:!!(t!=null&&t.showQrModal),qrModalOptions:h,projectId:t.projectId,metadata:t.metadata}}buildRpcMap(t,r){const n={};return t.forEach(o=>{n[o]=this.getRpcUrl(o,r)}),n}async initialize(t){if(this.rpc=this.getRpcConfig(t),this.chainId=this.rpc.chains.length?Bs(this.rpc.chains):Bs(this.rpc.optionalChains),this.signer=await $1.init({projectId:this.rpc.projectId,metadata:this.rpc.metadata,disableProviderPing:t.disableProviderPing,relayUrl:t.relayUrl,storage:t.storage,storageOptions:t.storageOptions,customStoragePrefix:t.customStoragePrefix,telemetryEnabled:t.telemetryEnabled,logger:t.logger}),this.registerEventListeners(),await this.loadPersistedSession(),this.rpc.showQrModal){let r;try{const{createAppKit:n}=await Promise.resolve().then(function(){return Wm}),{convertWCMToAppKitOptions:o}=await Promise.resolve().then(function(){return Qm}),i=o(fo(Jr({},this.rpc.qrModalOptions),{chains:[...new Set([...this.rpc.chains,...this.rpc.optionalChains])],metadata:this.rpc.metadata,projectId:this.rpc.projectId}));if(!i.networks.length)throw new Error("No networks found for WalletConnect·");r=n(fo(Jr({},i),{universalProvider:this.signer,manualWCControl:!0}))}catch{throw new Error("To use QR modal, please install @reown/appkit package")}if(r)try{this.modal=r}catch(n){throw this.signer.logger.error(n),new Error("Could not generate WalletConnectModal Instance")}}}loadConnectOpts(t){if(!t)return;const{chains:r,optionalChains:n,rpcMap:o}=t;r&&Sc(r)&&(this.rpc.chains=r.map(i=>this.formatChainId(i)),r.forEach(i=>{this.rpc.rpcMap[i]=(o==null?void 0:o[i])||this.getRpcUrl(i)})),n&&Sc(n)&&(this.rpc.optionalChains=[],this.rpc.optionalChains=n==null?void 0:n.map(i=>this.formatChainId(i)),n.forEach(i=>{this.rpc.rpcMap[i]=(o==null?void 0:o[i])||this.getRpcUrl(i)}))}getRpcUrl(t,r){var n;return((n=this.rpc.rpcMap)==null?void 0:n[t])||`${Ep}?chainId=eip155:${t}&projectId=${r||this.rpc.projectId}`}async loadPersistedSession(){if(this.session)try{const t=await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),r=this.session.namespaces[`${this.namespace}:${t}`]?this.session.namespaces[`${this.namespace}:${t}`]:this.session.namespaces[this.namespace];this.setChainIds(t?[this.formatChainId(t)]:r==null?void 0:r.accounts),this.setAccounts(r==null?void 0:r.accounts)}catch(t){this.signer.logger.error("Failed to load persisted session, clearing state..."),this.signer.logger.error(t),await this.disconnect().catch(r=>this.signer.logger.warn(r))}}reset(){this.chainId=1,this.accounts=[]}persist(){this.session&&this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`,this.chainId)}parseAccounts(t){return typeof t=="string"||t instanceof String?[this.parseAccount(t)]:t.map(r=>this.parseAccount(r))}}const c6=rl;var ea=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yd={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ea,function(){var r=1e3,n=6e4,o=36e5,i="millisecond",s="second",a="minute",c="hour",l="day",u="week",d="month",h="quarter",p="year",m="date",g="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(E){var C=["th","st","nd","rd"],x=E%100;return"["+E+(C[(x-20)%10]||C[x]||C[0])+"]"}},b=function(E,C,x){var T=String(E);return!T||T.length>=C?E:""+Array(C+1-T.length).join(x)+E},k={s:b,z:function(E){var C=-E.utcOffset(),x=Math.abs(C),T=Math.floor(x/60),_=x%60;return(C<=0?"+":"-")+b(T,2,"0")+":"+b(_,2,"0")},m:function E(C,x){if(C.date()<x.date())return-E(x,C);var T=12*(x.year()-C.year())+(x.month()-C.month()),_=C.clone().add(T,d),B=x-_<0,z=C.clone().add(T+(B?-1:1),d);return+(-(T+(x-_)/(B?_-z:z-_))||0)},a:function(E){return E<0?Math.ceil(E)||0:Math.floor(E)},p:function(E){return{M:d,y:p,w:u,d:l,D:m,h:c,m:a,s,ms:i,Q:h}[E]||String(E||"").toLowerCase().replace(/s$/,"")},u:function(E){return E===void 0}},$="en",S={};S[$]=v;var R="$isDayjsObject",P=function(E){return E instanceof U||!(!E||!E[R])},I=function E(C,x,T){var _;if(!C)return $;if(typeof C=="string"){var B=C.toLowerCase();S[B]&&(_=B),x&&(S[B]=x,_=B);var z=C.split("-");if(!_&&z.length>1)return E(z[0])}else{var D=C.name;S[D]=C,_=D}return!T&&_&&($=_),_||!T&&$},L=function(E,C){if(P(E))return E.clone();var x=typeof C=="object"?C:{};return x.date=E,x.args=arguments,new U(x)},O=k;O.l=I,O.i=P,O.w=function(E,C){return L(E,{locale:C.$L,utc:C.$u,x:C.$x,$offset:C.$offset})};var U=function(){function E(x){this.$L=I(x.locale,null,!0),this.parse(x),this.$x=this.$x||x.x||{},this[R]=!0}var C=E.prototype;return C.parse=function(x){this.$d=function(T){var _=T.date,B=T.utc;if(_===null)return new Date(NaN);if(O.u(_))return new Date;if(_ instanceof Date)return new Date(_);if(typeof _=="string"&&!/Z$/i.test(_)){var z=_.match(f);if(z){var D=z[2]-1||0,q=(z[7]||"0").substring(0,3);return B?new Date(Date.UTC(z[1],D,z[3]||1,z[4]||0,z[5]||0,z[6]||0,q)):new Date(z[1],D,z[3]||1,z[4]||0,z[5]||0,z[6]||0,q)}}return new Date(_)}(x),this.init()},C.init=function(){var x=this.$d;this.$y=x.getFullYear(),this.$M=x.getMonth(),this.$D=x.getDate(),this.$W=x.getDay(),this.$H=x.getHours(),this.$m=x.getMinutes(),this.$s=x.getSeconds(),this.$ms=x.getMilliseconds()},C.$utils=function(){return O},C.isValid=function(){return this.$d.toString()!==g},C.isSame=function(x,T){var _=L(x);return this.startOf(T)<=_&&_<=this.endOf(T)},C.isAfter=function(x,T){return L(x)<this.startOf(T)},C.isBefore=function(x,T){return this.endOf(T)<L(x)},C.$g=function(x,T,_){return O.u(x)?this[T]:this.set(_,x)},C.unix=function(){return Math.floor(this.valueOf()/1e3)},C.valueOf=function(){return this.$d.getTime()},C.startOf=function(x,T){var _=this,B=!!O.u(T)||T,z=O.p(x),D=function(ke,$e){var Ue=O.w(_.$u?Date.UTC(_.$y,$e,ke):new Date(_.$y,$e,ke),_);return B?Ue:Ue.endOf(l)},q=function(ke,$e){return O.w(_.toDate()[ke].apply(_.toDate("s"),(B?[0,0,0,0]:[23,59,59,999]).slice($e)),_)},ne=this.$W,oe=this.$M,pe=this.$D,ve="set"+(this.$u?"UTC":"");switch(z){case p:return B?D(1,0):D(31,11);case d:return B?D(1,oe):D(0,oe+1);case u:var Pe=this.$locale().weekStart||0,Ae=(ne<Pe?ne+7:ne)-Pe;return D(B?pe-Ae:pe+(6-Ae),oe);case l:case m:return q(ve+"Hours",0);case c:return q(ve+"Minutes",1);case a:return q(ve+"Seconds",2);case s:return q(ve+"Milliseconds",3);default:return this.clone()}},C.endOf=function(x){return this.startOf(x,!1)},C.$set=function(x,T){var _,B=O.p(x),z="set"+(this.$u?"UTC":""),D=(_={},_[l]=z+"Date",_[m]=z+"Date",_[d]=z+"Month",_[p]=z+"FullYear",_[c]=z+"Hours",_[a]=z+"Minutes",_[s]=z+"Seconds",_[i]=z+"Milliseconds",_)[B],q=B===l?this.$D+(T-this.$W):T;if(B===d||B===p){var ne=this.clone().set(m,1);ne.$d[D](q),ne.init(),this.$d=ne.set(m,Math.min(this.$D,ne.daysInMonth())).$d}else D&&this.$d[D](q);return this.init(),this},C.set=function(x,T){return this.clone().$set(x,T)},C.get=function(x){return this[O.p(x)]()},C.add=function(x,T){var _,B=this;x=Number(x);var z=O.p(T),D=function(oe){var pe=L(B);return O.w(pe.date(pe.date()+Math.round(oe*x)),B)};if(z===d)return this.set(d,this.$M+x);if(z===p)return this.set(p,this.$y+x);if(z===l)return D(1);if(z===u)return D(7);var q=(_={},_[a]=n,_[c]=o,_[s]=r,_)[z]||1,ne=this.$d.getTime()+x*q;return O.w(ne,this)},C.subtract=function(x,T){return this.add(-1*x,T)},C.format=function(x){var T=this,_=this.$locale();if(!this.isValid())return _.invalidDate||g;var B=x||"YYYY-MM-DDTHH:mm:ssZ",z=O.z(this),D=this.$H,q=this.$m,ne=this.$M,oe=_.weekdays,pe=_.months,ve=_.meridiem,Pe=function($e,Ue,Oe,Me){return $e&&($e[Ue]||$e(T,B))||Oe[Ue].slice(0,Me)},Ae=function($e){return O.s(D%12||12,$e,"0")},ke=ve||function($e,Ue,Oe){var Me=$e<12?"AM":"PM";return Oe?Me.toLowerCase():Me};return B.replace(w,function($e,Ue){return Ue||function(Oe){switch(Oe){case"YY":return String(T.$y).slice(-2);case"YYYY":return O.s(T.$y,4,"0");case"M":return ne+1;case"MM":return O.s(ne+1,2,"0");case"MMM":return Pe(_.monthsShort,ne,pe,3);case"MMMM":return Pe(pe,ne);case"D":return T.$D;case"DD":return O.s(T.$D,2,"0");case"d":return String(T.$W);case"dd":return Pe(_.weekdaysMin,T.$W,oe,2);case"ddd":return Pe(_.weekdaysShort,T.$W,oe,3);case"dddd":return oe[T.$W];case"H":return String(D);case"HH":return O.s(D,2,"0");case"h":return Ae(1);case"hh":return Ae(2);case"a":return ke(D,q,!0);case"A":return ke(D,q,!1);case"m":return String(q);case"mm":return O.s(q,2,"0");case"s":return String(T.$s);case"ss":return O.s(T.$s,2,"0");case"SSS":return O.s(T.$ms,3,"0");case"Z":return z}return null}($e)||z.replace(":","")})},C.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},C.diff=function(x,T,_){var B,z=this,D=O.p(T),q=L(x),ne=(q.utcOffset()-this.utcOffset())*n,oe=this-q,pe=function(){return O.m(z,q)};switch(D){case p:B=pe()/12;break;case d:B=pe();break;case h:B=pe()/3;break;case u:B=(oe-ne)/6048e5;break;case l:B=(oe-ne)/864e5;break;case c:B=oe/o;break;case a:B=oe/n;break;case s:B=oe/r;break;default:B=oe}return _?B:O.a(B)},C.daysInMonth=function(){return this.endOf(d).$D},C.$locale=function(){return S[this.$L]},C.locale=function(x,T){if(!x)return this.$L;var _=this.clone(),B=I(x,T,!0);return B&&(_.$L=B),_},C.clone=function(){return O.w(this.$d,this)},C.toDate=function(){return new Date(this.valueOf())},C.toJSON=function(){return this.isValid()?this.toISOString():null},C.toISOString=function(){return this.$d.toISOString()},C.toString=function(){return this.$d.toUTCString()},E}(),H=U.prototype;return L.prototype=H,[["$ms",i],["$s",s],["$m",a],["$H",c],["$W",l],["$M",d],["$y",p],["$D",m]].forEach(function(E){H[E[1]]=function(C){return this.$g(C,E[0],E[1])}}),L.extend=function(E,C){return E.$i||(E(C,U,L),E.$i=!0),L},L.locale=I,L.isDayjs=P,L.unix=function(E){return L(1e3*E)},L.en=S[$],L.Ls=S,L.p={},L})})(Yd);var $c=Yd.exports,Jd={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ea,function(){return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],o=r%100;return"["+r+(n[(o-20)%10]||n[o]||n[0])+"]"}}})})(Jd);var $p=Jd.exports,Xd={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ea,function(){return function(r,n,o){r=r||{};var i=n.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,u,d,h){return i.fromToBase(l,u,d,h)}o.en.relativeTime=s,i.fromToBase=function(l,u,d,h,p){for(var m,g,f,w=d.$locale().relativeTime||s,v=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],b=v.length,k=0;k<b;k+=1){var $=v[k];$.d&&(m=h?o(l).diff(d,$.d,!0):d.diff(l,$.d,!0));var S=(r.rounding||Math.round)(Math.abs(m));if(f=m>0,S<=$.r||!$.r){S<=1&&k>0&&($=v[k-1]);var R=w[$.l];p&&(S=p(""+S)),g=typeof R=="string"?R.replace("%d",S):R(S,u,$.l,f);break}}if(u)return g;var P=f?w.future:w.past;return typeof P=="function"?P(g):P.replace("%s",g)},i.to=function(l,u){return a(l,u,this,!0)},i.from=function(l,u){return a(l,u,this)};var c=function(l){return l.$u?o.utc():o()};i.toNow=function(l){return this.to(c(this),l)},i.fromNow=function(l){return this.from(c(this),l)}}})})(Xd);var Op=Xd.exports,Qd={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ea,function(){return function(r,n,o){o.updateLocale=function(i,s){var a=o.Ls[i];if(a)return(s?Object.keys(s):[]).forEach(function(c){a[c]=s[c]}),a}}})})(Qd);var Rp=Qd.exports;$c.extend(Op),$c.extend(Rp);const Bp={...$p,name:"en-web3-modal",relativeTime:{future:"in %s",past:"%s ago",s:"%d sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}};$c.locale("en-web3-modal",Bp);const e0={caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0},parseEvmChainId(e){return typeof e=="string"?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace(e,t){return(e==null?void 0:e.filter(r=>r.chainNamespace===t))||[]},getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]}};var Lp=20,Up=1,xn=1e6,Mp=1e6,zp=-7,Dp=21,jp=!1,Vo="[big.js] ",sn=Vo+"Invalid ",ji=sn+"decimal places",Wp=sn+"rounding mode",Kl=Vo+"Division by zero",Ee={},Ft=void 0,Hp=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function t0(){function e(t){var r=this;if(!(r instanceof e))return t===Ft?t0():new e(t);if(t instanceof e)r.s=t.s,r.e=t.e,r.c=t.c.slice();else{if(typeof t!="string"){if(e.strict===!0&&typeof t!="bigint")throw TypeError(sn+"value");t=t===0&&1/t<0?"-0":String(t)}Fp(r,t)}r.constructor=e}return e.prototype=Ee,e.DP=Lp,e.RM=Up,e.NE=zp,e.PE=Dp,e.strict=jp,e.roundDown=0,e.roundHalfUp=1,e.roundHalfEven=2,e.roundUp=3,e}function Fp(e,t){var r,n,o;if(!Hp.test(t))throw Error(sn+"number");for(e.s=t.charAt(0)=="-"?(t=t.slice(1),-1):1,(r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),o=t.length,n=0;n<o&&t.charAt(n)=="0";)++n;if(n==o)e.c=[e.e=0];else{for(;o>0&&t.charAt(--o)=="0";);for(e.e=r-n-1,e.c=[],r=0;n<=o;)e.c[r++]=+t.charAt(n++)}return e}function Br(e,t,r,n){var o=e.c;if(r===Ft&&(r=e.constructor.RM),r!==0&&r!==1&&r!==2&&r!==3)throw Error(Wp);if(t<1)n=r===3&&(n||!!o[0])||t===0&&(r===1&&o[0]>=5||r===2&&(o[0]>5||o[0]===5&&(n||o[1]!==Ft))),o.length=1,n?(e.e=e.e-t+1,o[0]=1):o[0]=e.e=0;else if(t<o.length){if(n=r===1&&o[t]>=5||r===2&&(o[t]>5||o[t]===5&&(n||o[t+1]!==Ft||o[t-1]&1))||r===3&&(n||!!o[0]),o.length=t,n){for(;++o[--t]>9;)if(o[t]=0,t===0){++e.e,o.unshift(1);break}}for(t=o.length;!o[--t];)o.pop()}return e}function Lr(e,t,r){var n=e.e,o=e.c.join(""),i=o.length;if(t)o=o.charAt(0)+(i>1?"."+o.slice(1):"")+(n<0?"e":"e+")+n;else if(n<0){for(;++n;)o="0"+o;o="0."+o}else if(n>0)if(++n>i)for(n-=i;n--;)o+="0";else n<i&&(o=o.slice(0,n)+"."+o.slice(n));else i>1&&(o=o.charAt(0)+"."+o.slice(1));return e.s<0&&r?"-"+o:o}Ee.abs=function(){var e=new this.constructor(this);return e.s=1,e},Ee.cmp=function(e){var t,r=this,n=r.c,o=(e=new r.constructor(e)).c,i=r.s,s=e.s,a=r.e,c=e.e;if(!n[0]||!o[0])return n[0]?i:o[0]?-s:0;if(i!=s)return i;if(t=i<0,a!=c)return a>c^t?1:-1;for(s=(a=n.length)<(c=o.length)?a:c,i=-1;++i<s;)if(n[i]!=o[i])return n[i]>o[i]^t?1:-1;return a==c?0:a>c^t?1:-1},Ee.div=function(e){var t=this,r=t.constructor,n=t.c,o=(e=new r(e)).c,i=t.s==e.s?1:-1,s=r.DP;if(s!==~~s||s<0||s>xn)throw Error(ji);if(!o[0])throw Error(Kl);if(!n[0])return e.s=i,e.c=[e.e=0],e;var a,c,l,u,d,h=o.slice(),p=a=o.length,m=n.length,g=n.slice(0,a),f=g.length,w=e,v=w.c=[],b=0,k=s+(w.e=t.e-e.e)+1;for(w.s=i,i=k<0?0:k,h.unshift(0);f++<a;)g.push(0);do{for(l=0;l<10;l++){if(a!=(f=g.length))u=a>f?1:-1;else for(d=-1,u=0;++d<a;)if(o[d]!=g[d]){u=o[d]>g[d]?1:-1;break}if(u<0){for(c=f==a?o:h;f;){if(g[--f]<c[f]){for(d=f;d&&!g[--d];)g[d]=9;--g[d],g[f]+=10}g[f]-=c[f]}for(;!g[0];)g.shift()}else break}v[b++]=u?l:++l,g[0]&&u?g[f]=n[p]||0:g=[n[p]]}while((p++<m||g[0]!==Ft)&&i--);return!v[0]&&b!=1&&(v.shift(),w.e--,k--),b>k&&Br(w,k,r.RM,g[0]!==Ft),w},Ee.eq=function(e){return this.cmp(e)===0},Ee.gt=function(e){return this.cmp(e)>0},Ee.gte=function(e){return this.cmp(e)>-1},Ee.lt=function(e){return this.cmp(e)<0},Ee.lte=function(e){return this.cmp(e)<1},Ee.minus=Ee.sub=function(e){var t,r,n,o,i=this,s=i.constructor,a=i.s,c=(e=new s(e)).s;if(a!=c)return e.s=-c,i.plus(e);var l=i.c.slice(),u=i.e,d=e.c,h=e.e;if(!l[0]||!d[0])return d[0]?e.s=-c:l[0]?e=new s(i):e.s=1,e;if(a=u-h){for((o=a<0)?(a=-a,n=l):(h=u,n=d),n.reverse(),c=a;c--;)n.push(0);n.reverse()}else for(r=((o=l.length<d.length)?l:d).length,a=c=0;c<r;c++)if(l[c]!=d[c]){o=l[c]<d[c];break}if(o&&(n=l,l=d,d=n,e.s=-e.s),(c=(r=d.length)-(t=l.length))>0)for(;c--;)l[t++]=0;for(c=t;r>a;){if(l[--r]<d[r]){for(t=r;t&&!l[--t];)l[t]=9;--l[t],l[r]+=10}l[r]-=d[r]}for(;l[--c]===0;)l.pop();for(;l[0]===0;)l.shift(),--h;return l[0]||(e.s=1,l=[h=0]),e.c=l,e.e=h,e},Ee.mod=function(e){var t,r=this,n=r.constructor,o=r.s,i=(e=new n(e)).s;if(!e.c[0])throw Error(Kl);return r.s=e.s=1,t=e.cmp(r)==1,r.s=o,e.s=i,t?new n(r):(o=n.DP,i=n.RM,n.DP=n.RM=0,r=r.div(e),n.DP=o,n.RM=i,this.minus(r.times(e)))},Ee.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e},Ee.plus=Ee.add=function(e){var t,r,n,o=this,i=o.constructor;if(e=new i(e),o.s!=e.s)return e.s=-e.s,o.minus(e);var s=o.e,a=o.c,c=e.e,l=e.c;if(!a[0]||!l[0])return l[0]||(a[0]?e=new i(o):e.s=o.s),e;if(a=a.slice(),t=s-c){for(t>0?(c=s,n=l):(t=-t,n=a),n.reverse();t--;)n.push(0);n.reverse()}for(a.length-l.length<0&&(n=l,l=a,a=n),t=l.length,r=0;t;a[t]%=10)r=(a[--t]=a[t]+l[t]+r)/10|0;for(r&&(a.unshift(r),++c),t=a.length;a[--t]===0;)a.pop();return e.c=a,e.e=c,e},Ee.pow=function(e){var t=this,r=new t.constructor("1"),n=r,o=e<0;if(e!==~~e||e<-1e6||e>Mp)throw Error(sn+"exponent");for(o&&(e=-e);e&1&&(n=n.times(t)),e>>=1,!!e;)t=t.times(t);return o?r.div(n):n},Ee.prec=function(e,t){if(e!==~~e||e<1||e>xn)throw Error(sn+"precision");return Br(new this.constructor(this),e,t)},Ee.round=function(e,t){if(e===Ft)e=0;else if(e!==~~e||e<-1e6||e>xn)throw Error(ji);return Br(new this.constructor(this),e+this.e+1,t)},Ee.sqrt=function(){var e,t,r,n=this,o=n.constructor,i=n.s,s=n.e,a=new o("0.5");if(!n.c[0])return new o(n);if(i<0)throw Error(Vo+"No square root");i=Math.sqrt(+Lr(n,!0,!0)),i===0||i===1/0?(t=n.c.join(""),t.length+s&1||(t+="0"),i=Math.sqrt(t),s=((s+1)/2|0)-(s<0||s&1),e=new o((i==1/0?"5e":(i=i.toExponential()).slice(0,i.indexOf("e")+1))+s)):e=new o(i+""),s=e.e+(o.DP+=4);do r=e,e=a.times(r.plus(n.div(r)));while(r.c.slice(0,s).join("")!==e.c.slice(0,s).join(""));return Br(e,(o.DP-=4)+e.e+1,o.RM)},Ee.times=Ee.mul=function(e){var t,r=this,n=r.constructor,o=r.c,i=(e=new n(e)).c,s=o.length,a=i.length,c=r.e,l=e.e;if(e.s=r.s==e.s?1:-1,!o[0]||!i[0])return e.c=[e.e=0],e;for(e.e=c+l,s<a&&(t=o,o=i,i=t,l=s,s=a,a=l),t=new Array(l=s+a);l--;)t[l]=0;for(c=a;c--;){for(a=0,l=s+c;l>c;)a=t[l]+i[c]*o[l-c-1]+a,t[l--]=a%10,a=a/10|0;t[l]=a}for(a?++e.e:t.shift(),c=t.length;!t[--c];)t.pop();return e.c=t,e},Ee.toExponential=function(e,t){var r=this,n=r.c[0];if(e!==Ft){if(e!==~~e||e<0||e>xn)throw Error(ji);for(r=Br(new r.constructor(r),++e,t);r.c.length<e;)r.c.push(0)}return Lr(r,!0,!!n)},Ee.toFixed=function(e,t){var r=this,n=r.c[0];if(e!==Ft){if(e!==~~e||e<0||e>xn)throw Error(ji);for(r=Br(new r.constructor(r),e+r.e+1,t),e=e+r.e+1;r.c.length<e;)r.c.push(0)}return Lr(r,!1,!!n)},Ee[Symbol.for("nodejs.util.inspect.custom")]=Ee.toJSON=Ee.toString=function(){var e=this,t=e.constructor;return Lr(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])},Ee.toNumber=function(){var e=+Lr(this,!0,!0);if(this.constructor.strict===!0&&!this.eq(e.toString()))throw Error(Vo+"Imprecise conversion");return e},Ee.toPrecision=function(e,t){var r=this,n=r.constructor,o=r.c[0];if(e!==Ft){if(e!==~~e||e<1||e>xn)throw Error(sn+"precision");for(r=Br(new n(r),e,t);r.c.length<e;)r.c.push(0)}return Lr(r,e<=r.e||r.e<=n.NE||r.e>=n.PE,!!o)},Ee.valueOf=function(){var e=this,t=e.constructor;if(t.strict===!0)throw Error(Vo+"valueOf disallowed");return Lr(e,e.e<=t.NE||e.e>=t.PE,!0)};var go=t0();const Wi={bigNumber(e){return e?new go(e):new go(0)},multiply(e,t){if(e===void 0||t===void 0)return new go(0);const r=new go(e),n=new go(t);return r.times(n)},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})},parseLocalStringToNumber(e){return e===void 0?0:parseFloat(e.replace(/,/gu,""))}},Vp=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],qp=[{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],Zp=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],re={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"ID_AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],HTTP_STATUS_CODES:{SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network"},Gp={getERC20Abi:e=>re.USDT_CONTRACT_ADDRESSES.includes(e)?Zp:Vp,getSwapAbi:()=>qp},gr={validateCaipAddress(e){var t;if(((t=e.split(":"))==null?void 0:t.length)!==3)throw new Error("Invalid CAIP Address");return e},parseCaipAddress(e){const t=e.split(":");if(t.length!==3)throw new Error(`Invalid CAIP-10 address: ${e}`);const[r,n,o]=t;if(!r||!n||!o)throw new Error(`Invalid CAIP-10 address: ${e}`);return{chainNamespace:r,chainId:n,address:o}},parseCaipNetworkId(e){const t=e.split(":");if(t.length!==2)throw new Error(`Invalid CAIP-2 network id: ${e}`);const[r,n]=t;if(!r||!n)throw new Error(`Invalid CAIP-2 network id: ${e}`);return{chainNamespace:r,chainId:n}}},de={WALLET_ID:"@appkit/wallet_id",WALLET_NAME:"@appkit/wallet_name",SOLANA_WALLET:"@appkit/solana_wallet",SOLANA_CAIP_CHAIN:"@appkit/solana_caip_chain",ACTIVE_CAIP_NETWORK_ID:"@appkit/active_caip_network_id",CONNECTED_SOCIAL:"@appkit/connected_social",CONNECTED_SOCIAL_USERNAME:"@appkit-wallet/SOCIAL_USERNAME",RECENT_WALLETS:"@appkit/recent_wallets",DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",ACTIVE_NAMESPACE:"@appkit/active_namespace",CONNECTED_NAMESPACES:"@appkit/connected_namespaces",CONNECTION_STATUS:"@appkit/connection_status",SIWX_AUTH_TOKEN:"@appkit/siwx-auth-token",SIWX_NONCE_TOKEN:"@appkit/siwx-nonce-token",TELEGRAM_SOCIAL_PROVIDER:"@appkit/social_provider",NATIVE_BALANCE_CACHE:"@appkit/native_balance_cache",PORTFOLIO_CACHE:"@appkit/portfolio_cache",ENS_CACHE:"@appkit/ens_cache",IDENTITY_CACHE:"@appkit/identity_cache",PREFERRED_ACCOUNT_TYPES:"@appkit/preferred_account_types"};function Ea(e){if(!e)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}const le={setItem(e,t){Do()&&t!==void 0&&localStorage.setItem(e,t)},getItem(e){if(Do())return localStorage.getItem(e)||void 0},removeItem(e){Do()&&localStorage.removeItem(e)},clear(){Do()&&localStorage.clear()}};function Do(){return typeof window<"u"&&typeof localStorage<"u"}function kr(e,t){return t==="light"?{"--w3m-accent":(e==null?void 0:e["--w3m-accent"])||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":(e==null?void 0:e["--w3m-accent"])||"hsla(230, 100%, 67%, 1)","--w3m-background":"#121313"}}const Kp=Symbol(),Yl=Object.getPrototypeOf,Oc=new WeakMap,Yp=e=>e&&(Oc.has(e)?Oc.get(e):Yl(e)===Object.prototype||Yl(e)===Array.prototype),Jp=e=>Yp(e)&&e[Kp]||null,Jl=(e,t=!0)=>{Oc.set(e,t)},Aa=e=>typeof e=="object"&&e!==null,xr=new WeakMap,jo=new WeakSet,Xp=(e=Object.is,t=(l,u)=>new Proxy(l,u),r=l=>Aa(l)&&!jo.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),n=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},o=new WeakMap,i=(l,u,d=n)=>{const h=o.get(l);if((h==null?void 0:h[0])===u)return h[1];const p=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return Jl(p,!0),o.set(l,[u,p]),Reflect.ownKeys(l).forEach(m=>{if(Object.getOwnPropertyDescriptor(p,m))return;const g=Reflect.get(l,m),{enumerable:f}=Reflect.getOwnPropertyDescriptor(l,m),w={value:g,enumerable:f,configurable:!0};if(jo.has(g))Jl(g,!1);else if(g instanceof Promise)delete w.value,w.get=()=>d(g);else if(xr.has(g)){const[v,b]=xr.get(g);w.value=i(v,b(),d)}Object.defineProperty(p,m,w)}),Object.preventExtensions(p)},s=new WeakMap,a=[1,1],c=l=>{if(!Aa(l))throw new Error("object required");const u=s.get(l);if(u)return u;let d=a[0];const h=new Set,p=(P,I=++a[0])=>{d!==I&&(d=I,h.forEach(L=>L(P,I)))};let m=a[1];const g=(P=++a[1])=>(m!==P&&!h.size&&(m=P,w.forEach(([I])=>{const L=I[1](P);L>d&&(d=L)})),d),f=P=>(I,L)=>{const O=[...I];O[1]=[P,...O[1]],p(O,L)},w=new Map,v=(P,I)=>{if((Rs?"production":void 0)!=="production"&&w.has(P))throw new Error("prop listener already exists");if(h.size){const L=I[3](f(P));w.set(P,[I,L])}else w.set(P,[I])},b=P=>{var I;const L=w.get(P);L&&(w.delete(P),(I=L[1])==null||I.call(L))},k=P=>(h.add(P),h.size===1&&w.forEach(([I,L],O)=>{if((Rs?"production":void 0)!=="production"&&L)throw new Error("remove already exists");const U=I[3](f(O));w.set(O,[I,U])}),()=>{h.delete(P),h.size===0&&w.forEach(([I,L],O)=>{L&&(L(),w.set(O,[I]))})}),$=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),S=t($,{deleteProperty(P,I){const L=Reflect.get(P,I);b(I);const O=Reflect.deleteProperty(P,I);return O&&p(["delete",[I],L]),O},set(P,I,L,O){const U=Reflect.has(P,I),H=Reflect.get(P,I,O);if(U&&(e(H,L)||s.has(L)&&e(H,s.get(L))))return!0;b(I),Aa(L)&&(L=Jp(L)||L);let E=L;if(L instanceof Promise)L.then(C=>{L.status="fulfilled",L.value=C,p(["resolve",[I],C])}).catch(C=>{L.status="rejected",L.reason=C,p(["reject",[I],C])});else{!xr.has(L)&&r(L)&&(E=c(L));const C=!jo.has(E)&&xr.get(E);C&&v(I,C)}return Reflect.set(P,I,E,O),p(["set",[I],L,H]),!0}});s.set(l,S);const R=[$,g,i,k];return xr.set(S,R),Reflect.ownKeys(l).forEach(P=>{const I=Object.getOwnPropertyDescriptor(l,P);"value"in I&&(S[P]=l[P],delete I.value,delete I.writable),Object.defineProperty($,P,I)}),S})=>[c,xr,jo,e,t,r,n,o,i,s,a],[Qp]=Xp();function Ne(e={}){return Qp(e)}function Xe(e,t,r){const n=xr.get(e);(Rs?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");let o;const i=[],s=n[3];let a=!1;const c=s(l=>{i.push(l),o||(o=Promise.resolve().then(()=>{o=void 0,a&&t(i.splice(0))}))});return a=!0,()=>{a=!1,c()}}function Qo(e,t){const r=xr.get(e);(Rs?"production":void 0)!=="production"&&!r&&console.warn("Please use proxy object");const[n,o,i]=r;return i(n,o(),t)}function pn(e){return jo.add(e),e}function tt(e,t,r,n){let o=e[t];return Xe(e,()=>{const i=e[t];Object.is(o,i)||r(o=i)},n)}function ef(e){const t=Ne({data:Array.from([]),has(r){return this.data.some(n=>n[0]===r)},set(r,n){const o=this.data.find(i=>i[0]===r);return o?o[1]=n:this.data.push([r,n]),this},get(r){var n;return(n=this.data.find(o=>o[0]===r))==null?void 0:n[1]},delete(r){const n=this.data.findIndex(o=>o[0]===r);return n===-1?!1:(this.data.splice(n,1),!0)},clear(){this.data.splice(0)},get size(){return this.data.length},toJSON(){return new Map(this.data)},forEach(r){this.data.forEach(n=>{r(n[1],n[0],this)})},keys(){return this.data.map(r=>r[0]).values()},values(){return this.data.map(r=>r[1]).values()},entries(){return new Map(this.data).entries()},get[Symbol.toStringTag](){return"Map"},[Symbol.iterator](){return this.entries()}});return Object.defineProperties(t,{data:{enumerable:!1},size:{enumerable:!1},toJSON:{enumerable:!1}}),Object.seal(t),t}const ka=(typeof process<"u"&&typeof Zl<"u"?Zl.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",tf=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:"",supportedChains:["eip155"]},{label:"Meld.io",name:"meld",feeRange:"1-2%",url:"https://meldcrypto.com",supportedChains:["eip155","solana"]}],je={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:ka,SECURE_SITE_DASHBOARD:`${ka}/dashboard`,SECURE_SITE_FAVICON:`${ka}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","berachain","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Berachain:"berachain",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],BALANCE_SUPPORTED_CHAINS:["eip155","solana"],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:["eip155"],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:["eip155","solana"],ACTIVITY_ENABLED_CHAIN_NAMESPACES:["eip155"],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in a new browser tab"},DEFAULT_FEATURES:{swaps:!0,onramp:!0,receive:!0,send:!0,email:!0,emailShowWallets:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],history:!0,analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0},DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"}},X={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5},isCacheExpired(e,t){return Date.now()-e>t},getActiveNetworkProps(){const e=X.getActiveNamespace(),t=X.getActiveCaipNetworkId(),r=t?t.split(":")[1]:void 0,n=r?isNaN(Number(r))?r:Number(r):void 0;return{namespace:e,caipNetworkId:t,chainId:n}},setWalletConnectDeepLink({name:e,href:t}){try{le.setItem(de.DEEPLINK_CHOICE,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=le.getItem(de.DEEPLINK_CHOICE);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{le.removeItem(de.DEEPLINK_CHOICE)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{le.setItem(de.ACTIVE_NAMESPACE,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{le.setItem(de.ACTIVE_CAIP_NETWORK_ID,e),X.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return le.getItem(de.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to get active caip network id");return}},deleteActiveCaipNetworkId(){try{le.removeItem(de.ACTIVE_CAIP_NETWORK_ID)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{const t=Ea(e);le.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{const t=X.getRecentWallets();t.find(r=>r.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),le.setItem(de.RECENT_WALLETS,JSON.stringify(t)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const e=le.getItem(de.RECENT_WALLETS);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},setConnectedConnectorId(e,t){try{const r=Ea(e);le.setItem(r,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return le.getItem(de.ACTIVE_NAMESPACE)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{const t=Ea(e);return le.getItem(t)}catch{console.info("Unable to get connected connector id in namespace ",e)}},setConnectedSocialProvider(e){try{le.setItem(de.CONNECTED_SOCIAL,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return le.getItem(de.CONNECTED_SOCIAL)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{le.removeItem(de.CONNECTED_SOCIAL)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return le.getItem(de.CONNECTED_SOCIAL_USERNAME)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var e,t;return(t=(e=le.getItem(de.ACTIVE_CAIP_NETWORK_ID))==null?void 0:e.split(":"))==null?void 0:t[1]},setConnectionStatus(e){try{le.setItem(de.CONNECTION_STATUS,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return le.getItem(de.CONNECTION_STATUS)}catch{return}},getConnectedNamespaces(){try{const e=le.getItem(de.CONNECTED_NAMESPACES);return e!=null&&e.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{const t=Array.from(new Set(e));le.setItem(de.CONNECTED_NAMESPACES,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{const t=X.getConnectedNamespaces();t.includes(e)||(t.push(e),X.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{const t=X.getConnectedNamespaces(),r=t.indexOf(e);r>-1&&(t.splice(r,1),X.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return le.getItem(de.TELEGRAM_SOCIAL_PROVIDER)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{le.setItem(de.TELEGRAM_SOCIAL_PROVIDER,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{le.removeItem(de.TELEGRAM_SOCIAL_PROVIDER)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{const t=le.getItem(de.PORTFOLIO_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{const t=X.getBalanceCache();le.setItem(de.PORTFOLIO_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{const t=X.getBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.portfolio))return t.balance;X.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{const t=X.getBalanceCache();t[e.caipAddress]=e,le.setItem(de.PORTFOLIO_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{const t=le.getItem(de.NATIVE_BALANCE_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{const t=X.getBalanceCache();le.setItem(de.NATIVE_BALANCE_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{const t=X.getNativeBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.nativeBalance))return t;console.info("Discarding cache for address",e),X.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{const t=X.getNativeBalanceCache();t[e.caipAddress]=e,le.setItem(de.NATIVE_BALANCE_CACHE,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{const t=le.getItem(de.ENS_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{const t=X.getEnsCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.ens))return t.ens;X.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{const t=X.getEnsCache();t[e.address]=e,le.setItem(de.ENS_CACHE,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{const t=X.getEnsCache();le.setItem(de.ENS_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{const t=le.getItem(de.IDENTITY_CACHE);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{const t=X.getIdentityCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.identity))return t.identity;X.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{const t=X.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},le.setItem(de.IDENTITY_CACHE,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{const t=X.getIdentityCache();le.setItem(de.IDENTITY_CACHE,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},clearAddressCache(){try{le.removeItem(de.PORTFOLIO_CACHE),le.removeItem(de.NATIVE_BALANCE_CACHE),le.removeItem(de.ENS_CACHE),le.removeItem(de.IDENTITY_CACHE)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{le.setItem(de.PREFERRED_ACCOUNT_TYPES,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{const e=le.getItem(de.PREFERRED_ACCOUNT_TYPES);return JSON.parse(e)}catch{console.info("Unable to get preferred account types")}}},j={isMobile(){var e;return this.isClient()?!!((e=window==null?void 0:window.matchMedia("(pointer:coarse)"))!=null&&e.matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(e,t=""){return e==null?void 0:e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){if(!this.isMobile())return!1;const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return j.isMobile()&&e.includes("android")},isIos(){if(!this.isMobile())return!1;const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return e.includes("iphone")||e.includes("ipad")},isSafari(){return this.isClient()?(window==null?void 0:window.navigator.userAgent.toLowerCase()).includes("safari"):!1},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=je.TEN_SEC_MS:!0},isAllowedRetry(e,t=je.ONE_SEC_MS){return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{return(window==null?void 0:window.self)!==(window==null?void 0:window.top)}catch{return!1}},getPairingExpiry(){return Date.now()+je.FOUR_MINUTES_MS},getNetworkId(e){return e==null?void 0:e.split(":")[1]},getPlainAddress(e){return e==null?void 0:e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let r;return(...n)=>{function o(){e(...n)}r&&clearTimeout(r),r=setTimeout(o,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(j.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));const n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(e,t){if(!j.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);const n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},getOpenTargetForPlatform(e){return e==="popupWindow"?e:this.isTelegram()?X.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,r){window==null||window.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},returnOpenHref(e,t,r){return window==null?void 0:window.open(e,this.getOpenTargetForPlatform(t),r||"noreferrer noopener")},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},async preloadImage(e){const t=new Promise((r,n)=>{const o=new Image;o.onload=r,o.onerror=n,o.crossOrigin="anonymous",o.src=e});return Promise.race([t,j.wait(2e3)])},formatBalance(e,t){let r="0.000";if(typeof e=="string"){const n=Number(e);if(n){const o=Math.floor(n*1e3)/1e3;o&&(r=o.toString())}}return`${r}${t?` ${t}`:""}`},formatBalance2(e,t){var n;let r;if(e==="0")r="0";else if(typeof e=="string"){const o=Number(e);o&&(r=(n=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:n[0])}return{value:r??"0",rest:r==="0"?"000":"",symbol:t}},getApiUrl(){return re.W3M_API_URL},getBlockchainApiUrl(){return re.BLOCKCHAIN_API_RPC_URL},getAnalyticsUrl(){return re.PULSE_API_URL},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})},parseError(e){var t,r;return typeof e=="string"?e:typeof((r=(t=e==null?void 0:e.issues)==null?void 0:t[0])==null?void 0:r.message)=="string"?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){const r={};return t&&e&&(e.forEach((n,o)=>{r[n]=o}),t.sort((n,o)=>{const i=r[n.id],s=r[o.id];return i!==void 0&&s!==void 0?i-s:i!==void 0?-1:s!==void 0?1:0})),t},calculateBalance(e){let t=0;for(const r of e)t+=r.value??0;return t},formatTokenBalance(e){const t=e.toFixed(2),[r,n]=t.split(".");return{dollars:r,pennies:n}},isAddress(e,t="eip155"){switch(t){case"eip155":if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(e)||/^(?:0x)?[0-9A-F]{40}$/iu.test(e))return!0}else return!1;return!1;case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);default:return!1}},uniqueBy(e,t){const r=new Set;return e.filter(n=>{const o=n[t];return r.has(o)?!1:(r.add(o),!0)})},generateSdkVersion(e,t,r){const n=e.length===0?je.ADAPTER_TYPES.UNIVERSAL:e.map(o=>o.adapterType).join(",");return`${t}-${n}-${r}`},createAccount(e,t,r,n,o){return{namespace:e,address:t,type:r,publicKey:n,path:o}},isCaipAddress(e){if(typeof e!="string")return!1;const t=e.split(":"),r=t[0];return t.filter(Boolean).length===3&&r in re.CHAIN_NAME_MAP},isMac(){const e=window==null?void 0:window.navigator.userAgent.toLowerCase();return e.includes("macintosh")&&!e.includes("safari")},formatTelegramSocialLoginUrl(e){const t=`--${encodeURIComponent(window==null?void 0:window.location.href)}`,r="state=";if(new URL(e).host==="auth.magic.link"){const n="provider_authorization_url=",o=e.substring(e.indexOf(n)+n.length),i=this.injectIntoUrl(decodeURIComponent(o),r,t);return e.replace(o,encodeURIComponent(i))}return this.injectIntoUrl(e,r,t)},injectIntoUrl(e,t,r){const n=e.indexOf(t);if(n===-1)throw new Error(`${t} parameter not found in the URL: ${e}`);const o=e.indexOf("&",n),i=t.length,s=o!==-1?o:e.length,a=e.substring(0,n+i),c=e.substring(n+i,s),l=e.substring(o),u=c+r;return a+u+l}};async function wo(...e){const t=await fetch(...e);if(!t.ok)throw new Error(`HTTP status code: ${t.status}`,{cause:t});return t}class ta{constructor({baseUrl:t,clientId:r}){this.baseUrl=t,this.clientId=r}async get({headers:t,signal:r,cache:n,...o}){const i=this.createUrl(o);return(await wo(i,{method:"GET",headers:t,signal:r,cache:n})).json()}async getBlob({headers:t,signal:r,...n}){const o=this.createUrl(n);return(await wo(o,{method:"GET",headers:t,signal:r})).blob()}async post({body:t,headers:r,signal:n,...o}){const i=this.createUrl(o);return(await wo(i,{method:"POST",headers:r,body:t?JSON.stringify(t):void 0,signal:n})).json()}async put({body:t,headers:r,signal:n,...o}){const i=this.createUrl(o);return(await wo(i,{method:"PUT",headers:r,body:t?JSON.stringify(t):void 0,signal:n})).json()}async delete({body:t,headers:r,signal:n,...o}){const i=this.createUrl(o);return(await wo(i,{method:"DELETE",headers:r,body:t?JSON.stringify(t):void 0,signal:n})).json()}createUrl({path:t,params:r}){const n=new URL(t,this.baseUrl);return r&&Object.entries(r).forEach(([o,i])=>{i&&n.searchParams.append(o,i)}),this.clientId&&n.searchParams.append("clientId",this.clientId),n}}const rf={handleSolanaDeeplinkRedirect(e){if(y.state.activeChain===re.CHAIN.SOLANA){const t=window.location.href,r=encodeURIComponent(t);if(e==="Phantom"&&!("phantom"in window)){const n=t.startsWith("https")?"https":"http",o=t.split("/")[2],i=encodeURIComponent(`${n}://${o}`);window.location.href=`https://phantom.app/ul/browse/${r}?ref=${i}`}e==="Coinbase Wallet"&&!("coinbaseSolana"in window)&&(window.location.href=`https://go.cb-w.com/dapp?cb_url=${r}`)}}},dt=Ne({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),ct={state:dt,subscribeNetworkImages(e){return Xe(dt.networkImages,()=>e(dt.networkImages))},subscribeKey(e,t){return tt(dt,e,t)},subscribe(e){return Xe(dt,()=>e(dt))},setWalletImage(e,t){dt.walletImages[e]=t},setNetworkImage(e,t){dt.networkImages[e]=t},setChainImage(e,t){dt.chainImages[e]=t},setConnectorImage(e,t){dt.connectorImages={...dt.connectorImages,[e]:t}},setTokenImage(e,t){dt.tokenImages[e]=t},setCurrencyImage(e,t){dt.currencyImages[e]=t}},nf={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00"},Ia=Ne({networkImagePromises:{}}),We={async fetchWalletImage(e){if(e)return await Z._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){return e?this.getNetworkImageById(e)||(Ia.networkImagePromises[e]||(Ia.networkImagePromises[e]=Z._fetchNetworkImage(e)),await Ia.networkImagePromises[e],this.getNetworkImageById(e)):void 0},getWalletImageById(e){if(e)return ct.state.walletImages[e]},getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return ct.state.walletImages[e.image_id]},getNetworkImage(e){var t,r,n;if((t=e==null?void 0:e.assets)!=null&&t.imageUrl)return(r=e==null?void 0:e.assets)==null?void 0:r.imageUrl;if((n=e==null?void 0:e.assets)!=null&&n.imageId)return ct.state.networkImages[e.assets.imageId]},getNetworkImageById(e){if(e)return ct.state.networkImages[e]},getConnectorImage(e){if(e!=null&&e.imageUrl)return e.imageUrl;if(e!=null&&e.imageId)return ct.state.connectorImages[e.imageId]},getChainImage(e){return ct.state.networkImages[nf[e]]}},of={getFeatureValue(e,t){const r=t==null?void 0:t[e];return r===void 0?je.DEFAULT_FEATURES[e]:r},filterSocialsByPlatform(e){if(!e||!e.length)return e;if(j.isTelegram()){if(j.isIos())return e.filter(t=>t!=="google");if(j.isMac())return e.filter(t=>t!=="x");if(j.isAndroid())return e.filter(t=>!["facebook","x"].includes(t))}return e}},ae=Ne({features:je.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:{solana:"eoa",bip122:"payment",polkadot:"eoa",eip155:"smartAccount"},enableNetworkSwitch:!0}),M={state:ae,subscribeKey(e,t){return tt(ae,e,t)},setOptions(e){Object.assign(ae,e)},setFeatures(e){if(!e)return;ae.features||(ae.features=je.DEFAULT_FEATURES);const t={...ae.features,...e};ae.features=t,ae.features.socials&&(ae.features.socials=of.filterSocialsByPlatform(ae.features.socials))},setProjectId(e){ae.projectId=e},setCustomRpcUrls(e){ae.customRpcUrls=e},setAllWallets(e){ae.allWallets=e},setIncludeWalletIds(e){ae.includeWalletIds=e},setExcludeWalletIds(e){ae.excludeWalletIds=e},setFeaturedWalletIds(e){ae.featuredWalletIds=e},setTokens(e){ae.tokens=e},setTermsConditionsUrl(e){ae.termsConditionsUrl=e},setPrivacyPolicyUrl(e){ae.privacyPolicyUrl=e},setCustomWallets(e){ae.customWallets=e},setIsSiweEnabled(e){ae.isSiweEnabled=e},setIsUniversalProvider(e){ae.isUniversalProvider=e},setSdkVersion(e){ae.sdkVersion=e},setMetadata(e){ae.metadata=e},setDisableAppend(e){ae.disableAppend=e},setEIP6963Enabled(e){ae.enableEIP6963=e},setDebug(e){ae.debug=e},setEnableWalletConnect(e){ae.enableWalletConnect=e},setEnableWalletGuide(e){ae.enableWalletGuide=e},setEnableAuthLogger(e){ae.enableAuthLogger=e},setEnableWallets(e){ae.enableWallets=e},setHasMultipleAddresses(e){ae.hasMultipleAddresses=e},setSIWX(e){ae.siwx=e},setConnectMethodsOrder(e){ae.features={...ae.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){ae.features={...ae.features,walletFeaturesOrder:e}},setSocialsOrder(e){ae.features={...ae.features,socials:e}},setCollapseWallets(e){ae.features={...ae.features,collapseWallets:e}},setEnableEmbedded(e){ae.enableEmbedded=e},setAllowUnsupportedChain(e){ae.allowUnsupportedChain=e},setManualWCControl(e){ae.manualWCControl=e},setEnableNetworkSwitch(e){ae.enableNetworkSwitch=e},setDefaultAccountTypes(e={}){Object.entries(e).forEach(([t,r])=>{r&&(ae.defaultAccountTypes[t]=r)})},setUniversalProviderConfigOverride(e){ae.universalProviderConfigOverride=e},getUniversalProviderConfigOverride(){return ae.universalProviderConfigOverride},getSnapshot(){return Qo(ae)}},wr=Ne({message:"",variant:"info",open:!1}),Sr={state:wr,subscribeKey(e,t){return tt(wr,e,t)},open(e,t){const{debug:r}=M.state,{shortMessage:n,longMessage:o}=e;r&&(wr.message=n,wr.variant=t,wr.open=!0),o&&console.error(typeof o=="function"?o():o)},close(){wr.open=!1,wr.message="",wr.variant="info"}},sf=j.getAnalyticsUrl(),af=new ta({baseUrl:sf,clientId:null}),cf=["MODAL_CREATED"],Gt=Ne({timestamp:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"}}),he={state:Gt,subscribe(e){return Xe(Gt,()=>e(Gt))},getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:r}=M.state;return{projectId:e,st:t,sv:r||"html-wagmi-4.2.2"}},async _sendAnalyticsEvent(e){try{const t=ee.state.address;if(cf.includes(e.data.event)||typeof window>"u")return;await af.post({path:"/e",params:he.getSdkProperties(),body:{eventId:j.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:t}}}),Gt.reportedErrors.FORBIDDEN=!1}catch(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===re.HTTP_STATUS_CODES.FORBIDDEN&&!Gt.reportedErrors.FORBIDDEN&&(Sr.open({shortMessage:"Invalid App Configuration",longMessage:`Origin ${Do()?window.origin:"uknown"} not found on Allowlist - update configuration on cloud.reown.com`},"error"),Gt.reportedErrors.FORBIDDEN=!0)}},sendEvent(e){var t;Gt.timestamp=Date.now(),Gt.data=e,(t=M.state.features)!=null&&t.analytics&&he._sendAnalyticsEvent(Gt)}},lf=["1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79","fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa","a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393"],uf=j.getApiUrl(),bt=new ta({baseUrl:uf,clientId:null}),df=40,Xl=4,hf=20,Ce=Ne({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1}),Z={state:Ce,subscribeKey(e,t){return tt(Ce,e,t)},_getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:r}=M.state;return{projectId:e,st:t||"appkit",sv:r||"html-wagmi-4.2.2"}},_filterOutExtensions(e){return M.state.isUniversalProvider?e.filter(t=>!!(t.mobile_link||t.desktop_link||t.webapp_link)):e},async _fetchWalletImage(e){const t=`${bt.baseUrl}/getWalletImage/${e}`,r=await bt.getBlob({path:t,params:Z._getSdkProperties()});ct.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){const t=`${bt.baseUrl}/public/getAssetImage/${e}`,r=await bt.getBlob({path:t,params:Z._getSdkProperties()});ct.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){const t=`${bt.baseUrl}/public/getAssetImage/${e}`,r=await bt.getBlob({path:t,params:Z._getSdkProperties()});ct.setConnectorImage(e,URL.createObjectURL(r))},async _fetchCurrencyImage(e){const t=`${bt.baseUrl}/public/getCurrencyImage/${e}`,r=await bt.getBlob({path:t,params:Z._getSdkProperties()});ct.setCurrencyImage(e,URL.createObjectURL(r))},async _fetchTokenImage(e){const t=`${bt.baseUrl}/public/getTokenImage/${e}`,r=await bt.getBlob({path:t,params:Z._getSdkProperties()});ct.setTokenImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){var t;const e=(t=y.getAllRequestedCaipNetworks())==null?void 0:t.map(({assets:r})=>r==null?void 0:r.imageId).filter(Boolean).filter(r=>!We.getNetworkImageById(r));e&&await Promise.allSettled(e.map(r=>Z._fetchNetworkImage(r)))},async fetchConnectorImages(){const{connectors:e}=G.state,t=e.map(({imageId:r})=>r).filter(Boolean);await Promise.allSettled(t.map(r=>Z._fetchConnectorImage(r)))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map(t=>Z._fetchCurrencyImage(t)))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map(t=>Z._fetchTokenImage(t)))},async fetchWallets(e){var r,n;const t=e.exclude??[];return Z._getSdkProperties().sv.startsWith("html-core-")&&t.push(...lf),await bt.get({path:"/getWallets",params:{...Z._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:(r=e.include)==null?void 0:r.join(","),exclude:(n=e.exclude)==null?void 0:n.join(",")}})},async fetchFeaturedWallets(){const{featuredWalletIds:e}=M.state;if(e!=null&&e.length){const t={...Z._getSdkProperties(),page:1,entries:(e==null?void 0:e.length)??Xl,include:e},{data:r}=await Z.fetchWallets(t);r.sort((o,i)=>e.indexOf(o.id)-e.indexOf(i.id));const n=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled(n.map(o=>Z._fetchWalletImage(o))),Ce.featured=r,Ce.allFeatured=r}},async fetchRecommendedWallets(){try{Ce.isFetchingRecommendedWallets=!0;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=M.state,n=[...t??[],...r??[]].filter(Boolean),o=y.getRequestedCaipNetworkIds().join(","),i={page:1,entries:Xl,include:e,exclude:n,chains:o},{data:s,count:a}=await Z.fetchWallets(i),c=X.getRecentWallets(),l=s.map(d=>d.image_id).filter(Boolean),u=c.map(d=>d.image_id).filter(Boolean);await Promise.allSettled([...l,...u].map(d=>Z._fetchWalletImage(d))),Ce.recommended=s,Ce.allRecommended=s,Ce.count=a??0}catch{}finally{Ce.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage({page:e}){const{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=M.state,o=y.getRequestedCaipNetworkIds().join(","),i=[...Ce.recommended.map(({id:u})=>u),...r??[],...n??[]].filter(Boolean),s={page:e,entries:df,include:t,exclude:i,chains:o},{data:a,count:c}=await Z.fetchWallets(s),l=a.slice(0,hf).map(u=>u.image_id).filter(Boolean);await Promise.allSettled(l.map(u=>Z._fetchWalletImage(u))),Ce.wallets=j.uniqueBy([...Ce.wallets,...Z._filterOutExtensions(a)],"id"),Ce.count=c>Ce.count?c:Ce.count,Ce.page=e},async initializeExcludedWallets({ids:e}){const t=y.getRequestedCaipNetworkIds().join(","),r={page:1,entries:e.length,include:e,chains:t},{data:n}=await Z.fetchWallets(r);n&&n.forEach(o=>{Ce.excludedWallets.push({rdns:o.rdns,name:o.name})})},async searchWallet({search:e,badge:t}){const{includeWalletIds:r,excludeWalletIds:n}=M.state,o=y.getRequestedCaipNetworkIds().join(",");Ce.search=[];const i={page:1,entries:100,search:e==null?void 0:e.trim(),badge_type:t,include:r,exclude:n,chains:o},{data:s}=await Z.fetchWallets(i);he.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:t??"",search:e??""}});const a=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a.map(c=>Z._fetchWalletImage(c)),j.wait(300)]),Ce.search=Z._filterOutExtensions(s)},initPromise(e,t){return Ce.promises[e]||(Ce.promises[e]=t())},prefetch({fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:r=!0,fetchNetworkImages:n=!0}={}){const o=[e&&Z.initPromise("connectorImages",Z.fetchConnectorImages),t&&Z.initPromise("featuredWallets",Z.fetchFeaturedWallets),r&&Z.initPromise("recommendedWallets",Z.fetchRecommendedWallets),n&&Z.initPromise("networkImages",Z.fetchNetworkImages)].filter(Boolean);return Promise.allSettled(o)},prefetchAnalyticsConfig(){var e;(e=M.state.features)!=null&&e.analytics&&Z.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:e}=await bt.get({path:"/getAnalyticsConfig",params:Z._getSdkProperties()});M.setFeatures({analytics:e})}catch{M.setFeatures({analytics:!1})}},setFilterByNamespace(e){if(!e){Ce.featured=Ce.allFeatured,Ce.recommended=Ce.allRecommended;return}const t=y.getRequestedCaipNetworkIds().join(",");Ce.featured=Ce.allFeatured.filter(r=>{var n;return(n=r.chains)==null?void 0:n.some(o=>t.includes(o))}),Ce.recommended=Ce.allRecommended.filter(r=>{var n;return(n=r.chains)==null?void 0:n.some(o=>t.includes(o))})}},ye=Ne({view:"Connect",history:["Connect"],transactionStack:[]}),V={state:ye,subscribeKey(e,t){return tt(ye,e,t)},pushTransactionStack(e){ye.transactionStack.push(e)},popTransactionStack(e){var r,n;const t=ye.transactionStack.pop();if(t)if(e)this.goBack(),(r=t==null?void 0:t.onCancel)==null||r.call(t);else{if(t.goBack)this.goBack();else if(t.replace){const o=ye.history.indexOf("ConnectingSiwe");o>0?this.goBackToIndex(o-1):(ge.close(),ye.history=[])}else t.view&&this.reset(t.view);(n=t==null?void 0:t.onSuccess)==null||n.call(t)}},push(e,t){e!==ye.view&&(ye.view=e,ye.history.push(e),ye.data=t)},reset(e,t){ye.view=e,ye.history=[e],ye.data=t},replace(e,t){ye.history.at(-1)===e||(ye.view=e,ye.history[ye.history.length-1]=e,ye.data=t)},goBack(){var t;const e=!y.state.activeCaipAddress&&this.state.view==="ConnectingFarcaster";if(ye.history.length>1&&!ye.history.includes("UnsupportedChain")){ye.history.pop();const[r]=ye.history.slice(-1);r&&(ye.view=r)}else ge.close();(t=ye.data)!=null&&t.wallet&&(ye.data.wallet=void 0),setTimeout(()=>{var r,n,o;if(e){ee.setFarcasterUrl(void 0,y.state.activeChain);const i=G.getAuthConnector();(r=i==null?void 0:i.provider)==null||r.reload();const s=Qo(M.state);(o=(n=i==null?void 0:i.provider)==null?void 0:n.syncDappData)==null||o.call(n,{metadata:s.metadata,sdkVersion:s.sdkVersion,projectId:s.projectId,sdkType:s.sdkType})}},100)},goBackToIndex(e){if(ye.history.length>1){ye.history=ye.history.slice(0,e+1);const[t]=ye.history.slice(-1);t&&(ye.view=t)}}},Kt=Ne({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),De={state:Kt,subscribe(e){return Xe(Kt,()=>e(Kt))},setThemeMode(e){Kt.themeMode=e;try{const t=G.getAuthConnector();if(t){const r=De.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:r,w3mThemeVariables:kr(r,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){Kt.themeVariables={...Kt.themeVariables,...e};try{const t=G.getAuthConnector();if(t){const r=De.getSnapshot().themeVariables;t.provider.syncTheme({themeVariables:r,w3mThemeVariables:kr(Kt.themeVariables,Kt.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot(){return Qo(Kt)}},r0={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},xe=Ne({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:{...r0}}),G={state:xe,subscribe(e){return Xe(xe,()=>{e(xe)})},subscribeKey(e,t){return tt(xe,e,t)},initialize(e){e.forEach(t=>{const r=X.getConnectedConnectorId(t);r&&this.setConnectorId(r,t)})},setActiveConnector(e){e&&(xe.activeConnector=pn(e))},setConnectors(e){e.filter(t=>!xe.allConnectors.some(r=>r.id===t.id&&this.getConnectorName(r.name)===this.getConnectorName(t.name)&&r.chain===t.chain)).forEach(t=>{t.type!=="MULTI_CHAIN"&&xe.allConnectors.push(pn(t))}),xe.connectors=this.mergeMultiChainConnectors(xe.allConnectors)},removeAdapter(e){xe.allConnectors=xe.allConnectors.filter(t=>t.chain!==e),xe.connectors=this.mergeMultiChainConnectors(xe.allConnectors)},mergeMultiChainConnectors(e){const t=this.generateConnectorMapByName(e),r=[];return t.forEach(n=>{const o=n[0],i=(o==null?void 0:o.id)===re.CONNECTOR_ID.AUTH;n.length>1&&o?r.push({name:o.name,imageUrl:o.imageUrl,imageId:o.imageId,connectors:[...n],type:i?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(o==null?void 0:o.id)||""}):o&&r.push(o)}),r},generateConnectorMapByName(e){const t=new Map;return e.forEach(r=>{const{name:n}=r,o=this.getConnectorName(n);if(!o)return;const i=t.get(o)||[];i.find(s=>s.chain===r.chain)||i.push(r),t.set(o,i)}),t},getConnectorName(e){return e&&({"Trust Wallet":"Trust"}[e]||e)},getUniqueConnectorsByName(e){const t=[];return e.forEach(r=>{t.find(n=>n.chain===r.chain)||t.push(r)}),t},addConnector(e){var t,r,n;if(e.id===re.CONNECTOR_ID.AUTH){const o=e,i=Qo(M.state),s=De.getSnapshot().themeMode,a=De.getSnapshot().themeVariables;(r=(t=o==null?void 0:o.provider)==null?void 0:t.syncDappData)==null||r.call(t,{metadata:i.metadata,sdkVersion:i.sdkVersion,projectId:i.projectId,sdkType:i.sdkType}),(n=o==null?void 0:o.provider)==null||n.syncTheme({themeMode:s,themeVariables:a,w3mThemeVariables:kr(a,s)}),this.setConnectors([e])}else this.setConnectors([e])},getAuthConnector(e){var n;const t=e||y.state.activeChain,r=xe.connectors.find(o=>o.id===re.CONNECTOR_ID.AUTH);if(r)return(n=r==null?void 0:r.connectors)!=null&&n.length?r.connectors.find(o=>o.chain===t):r},getAnnouncedConnectorRdns(){return xe.connectors.filter(e=>e.type==="ANNOUNCED").map(e=>{var t;return(t=e.info)==null?void 0:t.rdns})},getConnectorById(e){return xe.allConnectors.find(t=>t.id===e)},getConnector(e,t){return xe.allConnectors.filter(r=>r.chain===y.state.activeChain).find(r=>{var n;return r.explorerId===e||((n=r.info)==null?void 0:n.rdns)===t})},syncIfAuthConnector(e){var i,s;if(e.id!=="ID_AUTH")return;const t=e,r=Qo(M.state),n=De.getSnapshot().themeMode,o=De.getSnapshot().themeVariables;(s=(i=t==null?void 0:t.provider)==null?void 0:i.syncDappData)==null||s.call(i,{metadata:r.metadata,sdkVersion:r.sdkVersion,sdkType:r.sdkType,projectId:r.projectId}),t.provider.syncTheme({themeMode:n,themeVariables:o,w3mThemeVariables:kr(o,n)})},getConnectorsByNamespace(e){const t=xe.allConnectors.filter(r=>r.chain===e);return this.mergeMultiChainConnectors(t)},selectWalletConnector(e){const t=G.getConnector(e.id,e.rdns);y.state.activeChain===re.CHAIN.SOLANA&&rf.handleSolanaDeeplinkRedirect((t==null?void 0:t.name)||e.name||""),t?V.push("ConnectingExternal",{connector:t}):V.push("ConnectingWalletConnect",{wallet:e})},getConnectors(e){return e?this.getConnectorsByNamespace(e):this.mergeMultiChainConnectors(xe.allConnectors)},setFilterByNamespace(e){xe.filterByNamespace=e,xe.connectors=this.getConnectors(e),Z.setFilterByNamespace(e)},setConnectorId(e,t){e&&(xe.activeConnectorIds={...xe.activeConnectorIds,[t]:e},X.setConnectedConnectorId(t,e))},removeConnectorId(e){xe.activeConnectorIds={...xe.activeConnectorIds,[e]:void 0},X.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return xe.activeConnectorIds[e]},isConnected(e){return e?!!xe.activeConnectorIds[e]:Object.values(xe.activeConnectorIds).some(t=>!!t)},resetConnectorIds(){xe.activeConnectorIds={...r0}}};function Hi(e,t){return G.getConnectorId(e)===t}function pf(e){const t=Array.from(y.state.chains.keys());let r=[];return e?(r.push([e,y.state.chains.get(e)]),Hi(e,re.CONNECTOR_ID.WALLET_CONNECT)?t.forEach(n=>{n!==e&&Hi(n,re.CONNECTOR_ID.WALLET_CONNECT)&&r.push([n,y.state.chains.get(n)])}):Hi(e,re.CONNECTOR_ID.AUTH)&&t.forEach(n=>{n!==e&&Hi(n,re.CONNECTOR_ID.AUTH)&&r.push([n,y.state.chains.get(n)])})):r=Array.from(y.state.chains.entries()),r}const Er={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},Xr=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),ze=Ne({...Xr}),Ie={state:ze,subscribeKey(e,t){return tt(ze,e,t)},showLoading(e,t={}){this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){const t=j.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){ze.message=Xr.message,ze.variant=Xr.variant,ze.svg=Xr.svg,ze.open=Xr.open,ze.autoClose=Xr.autoClose},_showMessage({message:e,svg:t,variant:r="success",autoClose:n=Xr.autoClose}){ze.open?(ze.open=!1,setTimeout(()=>{ze.message=e,ze.variant=r,ze.svg=t,ze.open=!0,ze.autoClose=n},150)):(ze.message=e,ze.variant=r,ze.svg=t,ze.open=!0,ze.autoClose=n)}},_r={getSIWX(){return M.state.siwx},async initializeIfEnabled(){var i;const e=M.state.siwx,t=y.getActiveCaipAddress();if(!(e&&t))return;const[r,n,o]=t.split(":");if(y.checkIfSupportedNetwork(r))try{if((await e.getSessions(`${r}:${n}`,o)).length)return;await ge.open({view:"SIWXSignMessage"})}catch(s){console.error("SIWXUtil:initializeIfEnabled",s),he.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:this.getSIWXEventProperties()}),await((i=Q._getClient())==null?void 0:i.disconnect().catch(console.error)),V.reset("Connect"),Ie.showError("A problem occurred while trying initialize authentication")}},async requestSignMessage(){const e=M.state.siwx,t=j.getPlainAddress(y.getActiveCaipAddress()),r=y.getActiveCaipNetwork(),n=Q._getClient();if(!e)throw new Error("SIWX is not enabled");if(!t)throw new Error("No ActiveCaipAddress found");if(!r)throw new Error("No ActiveCaipNetwork or client found");if(!n)throw new Error("No ConnectionController client found");try{const o=await e.createMessage({chainId:r.caipNetworkId,accountAddress:t}),i=o.toString();G.getConnectorId(r.chainNamespace)===re.CONNECTOR_ID.AUTH&&V.pushTransactionStack({view:null,goBack:!1,replace:!0});const s=await n.signMessage(i);await e.addSession({data:o,message:i,signature:s}),ge.close(),he.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:this.getSIWXEventProperties()})}catch(o){const i=this.getSIWXEventProperties();(!ge.state.open||V.state.view==="ApproveTransaction")&&await ge.open({view:"SIWXSignMessage"}),i.isSmartAccount?Ie.showError("This application might not support Smart Accounts"):Ie.showError("Signature declined"),he.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:i}),console.error("SWIXUtil:requestSignMessage",o)}},async cancelSignMessage(){var e,t;try{(t=(e=this.getSIWX())==null?void 0:e.getRequired)!=null&&t.call(e)?await Q.disconnect():ge.close(),V.reset("Connect"),he.sendEvent({event:"CLICK_CANCEL_SIWX",type:"track",properties:this.getSIWXEventProperties()})}catch(r){console.error("SIWXUtil:cancelSignMessage",r)}},async getSessions(){const e=M.state.siwx,t=j.getPlainAddress(y.getActiveCaipAddress()),r=y.getActiveCaipNetwork();return e&&t&&r?e.getSessions(r.caipNetworkId,t):[]},async isSIWXCloseDisabled(){var t;const e=this.getSIWX();if(e){const r=V.state.view==="ApproveTransaction",n=V.state.view==="SIWXSignMessage";if(r||n)return((t=e.getRequired)==null?void 0:t.call(e))&&(await this.getSessions()).length===0}return!1},async universalProviderAuthenticate({universalProvider:e,chains:t,methods:r}){var a,c,l;const n=_r.getSIWX(),o=new Set(t.map(u=>u.split(":")[0]));if(!n||o.size!==1||!o.has("eip155"))return!1;const i=await n.createMessage({chainId:((a=y.getActiveCaipNetwork())==null?void 0:a.caipNetworkId)||"",accountAddress:""}),s=await e.authenticate({nonce:i.nonce,domain:i.domain,uri:i.uri,exp:i.expirationTime,iat:i.issuedAt,nbf:i.notBefore,requestId:i.requestId,version:i.version,resources:i.resources,statement:i.statement,chainId:i.chainId,methods:r,chains:[i.chainId,...t.filter(u=>u!==i.chainId)]});if(Ie.showLoading("Authenticating...",{autoClose:!1}),ee.setConnectedWalletInfo({...s.session.peer.metadata,name:s.session.peer.metadata.name,icon:(c=s.session.peer.metadata.icons)==null?void 0:c[0],type:"WALLET_CONNECT"},Array.from(o)[0]),(l=s==null?void 0:s.auths)==null?void 0:l.length){const u=s.auths.map(d=>{const h=e.client.formatAuthMessage({request:d.p,iss:d.p.iss});return{data:{...d.p,accountAddress:d.p.iss.split(":").slice(-1).join(""),chainId:d.p.iss.split(":").slice(2,4).join(":"),uri:d.p.aud,version:d.p.version||i.version,expirationTime:d.p.exp,issuedAt:d.p.iat,notBefore:d.p.nbf},message:h,signature:d.s.s,cacao:d}});try{await n.setSessions(u),he.sendEvent({type:"track",event:"SIWX_AUTH_SUCCESS",properties:_r.getSIWXEventProperties()})}catch(d){throw console.error("SIWX:universalProviderAuth - failed to set sessions",d),he.sendEvent({type:"track",event:"SIWX_AUTH_ERROR",properties:_r.getSIWXEventProperties()}),await e.disconnect().catch(console.error),d}finally{Ie.hide()}}return!0},getSIWXEventProperties(){var t,r;const e=y.state.activeChain;return{network:((t=y.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)||"",isSmartAccount:((r=ee.state.preferredAccountTypes)==null?void 0:r[e])===Er.ACCOUNT_TYPES.SMART_ACCOUNT}},async clearSessions(){const e=this.getSIWX();e&&await e.setSessions([])}},Se=Ne({transactions:[],coinbaseTransactions:{},transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),ff={state:Se,subscribe(e){return Xe(Se,()=>e(Se))},setLastNetworkInView(e){Se.lastNetworkInView=e},async fetchTransactions(e,t){var r,n;if(!e)throw new Error("Transactions can't be fetched without an accountAddress");Se.loading=!0;try{const o=await ce.fetchTransactions({account:e,cursor:Se.next,onramp:t,cache:t==="coinbase"?"no-cache":void 0,chainId:(r=y.state.activeCaipNetwork)==null?void 0:r.caipNetworkId}),i=this.filterSpamTransactions(o.data),s=this.filterByConnectedChain(i),a=[...Se.transactions,...s];Se.loading=!1,t==="coinbase"?Se.coinbaseTransactions=this.groupTransactionsByYearAndMonth(Se.coinbaseTransactions,o.data):(Se.transactions=a,Se.transactionsByYear=this.groupTransactionsByYearAndMonth(Se.transactionsByYear,s)),Se.empty=a.length===0,Se.next=o.next?o.next:void 0}catch{const o=y.state.activeChain;he.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:M.state.projectId,cursor:Se.next,isSmartAccount:((n=ee.state.preferredAccountTypes)==null?void 0:n[o])===Er.ACCOUNT_TYPES.SMART_ACCOUNT}}),Ie.showError("Failed to fetch transactions"),Se.loading=!1,Se.empty=!0,Se.next=void 0}},groupTransactionsByYearAndMonth(e={},t=[]){const r=e;return t.forEach(n=>{const o=new Date(n.metadata.minedAt).getFullYear(),i=new Date(n.metadata.minedAt).getMonth(),s=r[o]??{},a=(s[i]??[]).filter(c=>c.id!==n.id);r[o]={...s,[i]:[...a,n].sort((c,l)=>new Date(l.metadata.minedAt).getTime()-new Date(c.metadata.minedAt).getTime())}}),r},filterSpamTransactions(e){return e.filter(t=>!t.transfers.every(r=>{var n;return((n=r.nft_info)==null?void 0:n.flags.is_spam)===!0}))},filterByConnectedChain(e){var r;const t=(r=y.state.activeCaipNetwork)==null?void 0:r.caipNetworkId;return e.filter(n=>n.metadata.chain===t)},clearCursor(){Se.next=void 0},resetTransactions(){Se.transactions=[],Se.transactionsByYear={},Se.lastNetworkInView=void 0,Se.loading=!1,Se.empty=!1,Se.next=void 0}},_e=Ne({wcError:!1,buffering:!1,status:"disconnected"});let En;const Q={state:_e,subscribeKey(e,t){return tt(_e,e,t)},_getClient(){return _e._client},setClient(e){_e._client=pn(e)},async connectWalletConnect(){var e,t,r,n;if(j.isTelegram()||j.isSafari()&&j.isIos()){if(En){await En,En=void 0;return}if(!j.isPairingExpired(_e==null?void 0:_e.wcPairingExpiry)){const o=_e.wcUri;_e.wcUri=o;return}En=(t=(e=this._getClient())==null?void 0:e.connectWalletConnect)==null?void 0:t.call(e).catch(()=>{}),this.state.status="connecting",await En,En=void 0,_e.wcPairingExpiry=void 0,this.state.status="connected"}else await((n=(r=this._getClient())==null?void 0:r.connectWalletConnect)==null?void 0:n.call(r))},async connectExternal(e,t,r=!0){var n,o;await((o=(n=this._getClient())==null?void 0:n.connectExternal)==null?void 0:o.call(n,e)),r&&y.setActiveNamespace(t)},async reconnectExternal(e){var r,n;await((n=(r=this._getClient())==null?void 0:r.reconnectExternal)==null?void 0:n.call(r,e));const t=e.chain||y.state.activeChain;t&&G.setConnectorId(e.id,t)},async setPreferredAccountType(e,t){var n;ge.setLoading(!0,y.state.activeChain);const r=G.getAuthConnector();r&&(ee.setPreferredAccountType(e,t),await r.provider.setPreferredAccount(e),X.setPreferredAccountTypes(ee.state.preferredAccountTypes??{[t]:e}),await this.reconnectExternal(r),ge.setLoading(!1,y.state.activeChain),he.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:((n=y.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)||""}}))},async signMessage(e){var t;return(t=this._getClient())==null?void 0:t.signMessage(e)},parseUnits(e,t){var r;return(r=this._getClient())==null?void 0:r.parseUnits(e,t)},formatUnits(e,t){var r;return(r=this._getClient())==null?void 0:r.formatUnits(e,t)},async sendTransaction(e){var t;return(t=this._getClient())==null?void 0:t.sendTransaction(e)},async getCapabilities(e){var t;return(t=this._getClient())==null?void 0:t.getCapabilities(e)},async grantPermissions(e){var t;return(t=this._getClient())==null?void 0:t.grantPermissions(e)},async walletGetAssets(e){var t;return((t=this._getClient())==null?void 0:t.walletGetAssets(e))??{}},async estimateGas(e){var t;return(t=this._getClient())==null?void 0:t.estimateGas(e)},async writeContract(e){var t;return(t=this._getClient())==null?void 0:t.writeContract(e)},async getEnsAddress(e){var t;return(t=this._getClient())==null?void 0:t.getEnsAddress(e)},async getEnsAvatar(e){var t;return(t=this._getClient())==null?void 0:t.getEnsAvatar(e)},checkInstalled(e){var t,r;return((r=(t=this._getClient())==null?void 0:t.checkInstalled)==null?void 0:r.call(t,e))||!1},resetWcConnection(){_e.wcUri=void 0,_e.wcPairingExpiry=void 0,_e.wcLinking=void 0,_e.recentWallet=void 0,_e.status="disconnected",ff.resetTransactions(),X.deleteWalletConnectDeepLink()},resetUri(){_e.wcUri=void 0,_e.wcPairingExpiry=void 0},finalizeWcConnection(){var r,n;const{wcLinking:e,recentWallet:t}=Q.state;e&&X.setWalletConnectDeepLink(e),t&&X.setAppKitRecent(t),he.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:((n=(r=V.state.data)==null?void 0:r.wallet)==null?void 0:n.name)||"Unknown"}})},setWcBasic(e){_e.wcBasic=e},setUri(e){_e.wcUri=e,_e.wcPairingExpiry=j.getPairingExpiry()},setWcLinking(e){_e.wcLinking=e},setWcError(e){_e.wcError=e,_e.buffering=!1},setRecentWallet(e){_e.recentWallet=e},setBuffering(e){_e.buffering=e},setStatus(e){_e.status=e},async disconnect(e){try{ge.setLoading(!0,e),await _r.clearSessions(),await y.disconnect(e),ge.setLoading(!1,e),G.setFilterByNamespace(void 0)}catch{throw new Error("Failed to disconnect")}}},An=Ne({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1}),ur={state:An,subscribe(e){return Xe(An,()=>e(An))},subscribeOpen(e){return tt(An,"open",e)},set(e){Object.assign(An,{...An,...e})}};function _i(e,{strict:t=!0}={}){return!e||typeof e!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")}function Jn(e){return _i(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}const n0="2.27.0";let mo={getDocsUrl:({docsBaseUrl:e,docsPath:t="",docsSlug:r})=>t?`${e??"https://viem.sh"}${t}${r?`#${r}`:""}`:void 0,version:`viem@${n0}`};class me extends Error{constructor(t,r={}){var a,c;const n=r.cause instanceof me?r.cause.details:(a=r.cause)!=null&&a.message?r.cause.message:r.details,o=r.cause instanceof me&&r.cause.docsPath||r.docsPath,i=(c=mo.getDocsUrl)==null?void 0:c.call(mo,{...r,docsPath:o}),s=[t||"An error occurred.","",...r.metaMessages?[...r.metaMessages,""]:[],...i?[`Docs: ${i}`]:[],...n?[`Details: ${n}`]:[],...mo.version?[`Version: ${mo.version}`]:[]].join(`
`);super(s,r.cause?{cause:r.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),this.details=n,this.docsPath=o,this.metaMessages=r.metaMessages,this.name=r.name??this.name,this.shortMessage=t,this.version=n0}walk(t){return o0(this,t)}}function o0(e,t){return t!=null&&t(e)?e:e&&typeof e=="object"&&"cause"in e&&e.cause!==void 0?o0(e.cause,t):t?null:e}class gf extends me{constructor({offset:t,position:r,size:n}){super(`Slice ${r==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${n}).`,{name:"SliceOffsetOutOfBoundsError"})}}class i0 extends me{constructor({size:t,targetSize:r,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${t}) exceeds padding size (${r}).`,{name:"SizeExceedsPaddingSizeError"})}}function co(e,{dir:t,size:r=32}={}){return typeof e=="string"?wf(e,{dir:t,size:r}):mf(e,{dir:t,size:r})}function wf(e,{dir:t,size:r=32}={}){if(r===null)return e;const n=e.replace("0x","");if(n.length>r*2)throw new i0({size:Math.ceil(n.length/2),targetSize:r,type:"hex"});return`0x${n[t==="right"?"padEnd":"padStart"](r*2,"0")}`}function mf(e,{dir:t,size:r=32}={}){if(r===null)return e;if(e.length>r)throw new i0({size:e.length,targetSize:r,type:"bytes"});const n=new Uint8Array(r);for(let o=0;o<r;o++){const i=t==="right";n[i?o:r-o-1]=e[i?o:e.length-o-1]}return n}class vf extends me{constructor({max:t,min:r,signed:n,size:o,value:i}){super(`Number "${i}" is not in safe ${o?`${o*8}-bit ${n?"signed":"unsigned"} `:""}integer range ${t?`(${r} to ${t})`:`(above ${r})`}`,{name:"IntegerOutOfRangeError"})}}class bf extends me{constructor({givenSize:t,maxSize:r}){super(`Size cannot exceed ${r} bytes. Given size: ${t} bytes.`,{name:"SizeOverflowError"})}}function Ls(e,{dir:t="left"}={}){let r=typeof e=="string"?e.replace("0x",""):e,n=0;for(let o=0;o<r.length-1&&r[t==="left"?o:r.length-o-1].toString()==="0";o++)n++;return r=t==="left"?r.slice(n):r.slice(0,r.length-n),typeof e=="string"?(r.length===1&&t==="right"&&(r=`${r}0`),`0x${r.length%2===1?`0${r}`:r}`):r}function lo(e,{size:t}){if(Jn(e)>t)throw new bf({givenSize:Jn(e),maxSize:t})}function On(e,t={}){const{signed:r}=t;t.size&&lo(e,{size:t.size});const n=BigInt(e);if(!r)return n;const o=(e.length-2)/2,i=(1n<<BigInt(o)*8n-1n)-1n;return n<=i?n:n-BigInt(`0x${"f".padStart(o*2,"f")}`)-1n}function Us(e,t={}){return Number(On(e,t))}const yf=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function ue(e,t={}){return typeof e=="number"||typeof e=="bigint"?s0(e,t):typeof e=="string"?a0(e,t):typeof e=="boolean"?Cf(e,t):Rr(e,t)}function Cf(e,t={}){const r=`0x${Number(e)}`;return typeof t.size=="number"?(lo(r,{size:t.size}),co(r,{size:t.size})):r}function Rr(e,t={}){let r="";for(let o=0;o<e.length;o++)r+=yf[e[o]];const n=`0x${r}`;return typeof t.size=="number"?(lo(n,{size:t.size}),co(n,{dir:"right",size:t.size})):n}function s0(e,t={}){const{signed:r,size:n}=t,o=BigInt(e);let i;n?r?i=(1n<<BigInt(n)*8n-1n)-1n:i=2n**(BigInt(n)*8n)-1n:typeof e=="number"&&(i=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof i=="bigint"&&r?-i-1n:0;if(i&&o>i||o<s){const c=typeof e=="bigint"?"n":"";throw new vf({max:i?`${i}${c}`:void 0,min:`${s}${c}`,signed:r,size:n,value:`${e}${c}`})}const a=`0x${(r&&o<0?(1n<<BigInt(n*8))+BigInt(o):o).toString(16)}`;return n?co(a,{size:n}):a}const xf=new TextEncoder;function a0(e,t={}){const r=xf.encode(e);return Rr(r,t)}const Ef=new TextEncoder;function c0(e,t={}){return typeof e=="number"||typeof e=="bigint"?kf(e,t):typeof e=="boolean"?Af(e,t):_i(e)?fn(e,t):l0(e,t)}function Af(e,t={}){const r=new Uint8Array(1);return r[0]=Number(e),typeof t.size=="number"?(lo(r,{size:t.size}),co(r,{size:t.size})):r}const Yt={zero:48,nine:57,A:65,F:70,a:97,f:102};function Ql(e){if(e>=Yt.zero&&e<=Yt.nine)return e-Yt.zero;if(e>=Yt.A&&e<=Yt.F)return e-(Yt.A-10);if(e>=Yt.a&&e<=Yt.f)return e-(Yt.a-10)}function fn(e,t={}){let r=e;t.size&&(lo(r,{size:t.size}),r=co(r,{dir:"right",size:t.size}));let n=r.slice(2);n.length%2&&(n=`0${n}`);const o=n.length/2,i=new Uint8Array(o);for(let s=0,a=0;s<o;s++){const c=Ql(n.charCodeAt(a++)),l=Ql(n.charCodeAt(a++));if(c===void 0||l===void 0)throw new me(`Invalid byte sequence ("${n[a-2]}${n[a-1]}" in "${n}").`);i[s]=c*16+l}return i}function kf(e,t){const r=s0(e,t);return fn(r)}function l0(e,t={}){const r=Ef.encode(e);return typeof t.size=="number"?(lo(r,{size:t.size}),co(r,{dir:"right",size:t.size})):r}function Ms(e){if(!Number.isSafeInteger(e)||e<0)throw new Error("positive integer expected, got "+e)}function If(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function Ti(e,...t){if(!If(e))throw new Error("Uint8Array expected");if(t.length>0&&!t.includes(e.length))throw new Error("Uint8Array expected of length "+t+", got length="+e.length)}function Nf(e){if(typeof e!="function"||typeof e.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Ms(e.outputLen),Ms(e.blockLen)}function Xn(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function u0(e,t){Ti(e);const r=t.outputLen;if(e.length<r)throw new Error("digestInto() expects output buffer of length at least "+r)}const Fi=BigInt(2**32-1),eu=BigInt(32);function Sf(e,t=!1){return t?{h:Number(e&Fi),l:Number(e>>eu&Fi)}:{h:Number(e>>eu&Fi)|0,l:Number(e&Fi)|0}}function _f(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let o=0;o<e.length;o++){const{h:i,l:s}=Sf(e[o],t);[r[o],n[o]]=[i,s]}return[r,n]}const Tf=(e,t,r)=>e<<r|t>>>32-r,Pf=(e,t,r)=>t<<r|e>>>32-r,$f=(e,t,r)=>t<<r-32|e>>>64-r,Of=(e,t,r)=>e<<r-32|t>>>64-r,kn=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;function Rf(e){return new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4))}function Na(e){return new DataView(e.buffer,e.byteOffset,e.byteLength)}function Mt(e,t){return e<<32-t|e>>>t}const tu=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;function Bf(e){return e<<24&4278190080|e<<8&16711680|e>>>8&65280|e>>>24&255}function ru(e){for(let t=0;t<e.length;t++)e[t]=Bf(e[t])}function Lf(e){if(typeof e!="string")throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array(new TextEncoder().encode(e))}function ra(e){return typeof e=="string"&&(e=Lf(e)),Ti(e),e}function Uf(...e){let t=0;for(let n=0;n<e.length;n++){const o=e[n];Ti(o),t+=o.length}const r=new Uint8Array(t);for(let n=0,o=0;n<e.length;n++){const i=e[n];r.set(i,o),o+=i.length}return r}class nl{clone(){return this._cloneInto()}}function d0(e){const t=n=>e().update(ra(n)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}function Mf(e=32){if(kn&&typeof kn.getRandomValues=="function")return kn.getRandomValues(new Uint8Array(e));if(kn&&typeof kn.randomBytes=="function")return kn.randomBytes(e);throw new Error("crypto.getRandomValues must be defined")}const h0=[],p0=[],f0=[],zf=BigInt(0),vo=BigInt(1),Df=BigInt(2),jf=BigInt(7),Wf=BigInt(256),Hf=BigInt(113);for(let e=0,t=vo,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],h0.push(2*(5*n+r)),p0.push((e+1)*(e+2)/2%64);let o=zf;for(let i=0;i<7;i++)t=(t<<vo^(t>>jf)*Hf)%Wf,t&Df&&(o^=vo<<(vo<<BigInt(i))-vo);f0.push(o)}const[Ff,Vf]=_f(f0,!0),nu=(e,t,r)=>r>32?$f(e,t,r):Tf(e,t,r),ou=(e,t,r)=>r>32?Of(e,t,r):Pf(e,t,r);function qf(e,t=24){const r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let s=0;s<10;s++)r[s]=e[s]^e[s+10]^e[s+20]^e[s+30]^e[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,c=(s+2)%10,l=r[c],u=r[c+1],d=nu(l,u,1)^r[a],h=ou(l,u,1)^r[a+1];for(let p=0;p<50;p+=10)e[s+p]^=d,e[s+p+1]^=h}let o=e[2],i=e[3];for(let s=0;s<24;s++){const a=p0[s],c=nu(o,i,a),l=ou(o,i,a),u=h0[s];o=e[u],i=e[u+1],e[u]=c,e[u+1]=l}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)r[a]=e[s+a];for(let a=0;a<10;a++)e[s+a]^=~r[(a+2)%10]&r[(a+4)%10]}e[0]^=Ff[n],e[1]^=Vf[n]}r.fill(0)}class ol extends nl{constructor(t,r,n,o=!1,i=24){if(super(),this.blockLen=t,this.suffix=r,this.outputLen=n,this.enableXOF=o,this.rounds=i,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Ms(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Rf(this.state)}keccak(){tu||ru(this.state32),qf(this.state32,this.rounds),tu||ru(this.state32),this.posOut=0,this.pos=0}update(t){Xn(this);const{blockLen:r,state:n}=this;t=ra(t);const o=t.length;for(let i=0;i<o;){const s=Math.min(r-this.pos,o-i);for(let a=0;a<s;a++)n[this.pos++]^=t[i++];this.pos===r&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:r,pos:n,blockLen:o}=this;t[n]^=r,(r&128)!==0&&n===o-1&&this.keccak(),t[o-1]^=128,this.keccak()}writeInto(t){Xn(this,!1),Ti(t),this.finish();const r=this.state,{blockLen:n}=this;for(let o=0,i=t.length;o<i;){this.posOut>=n&&this.keccak();const s=Math.min(n-this.posOut,i-o);t.set(r.subarray(this.posOut,this.posOut+s),o),this.posOut+=s,o+=s}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Ms(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(u0(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:r,suffix:n,outputLen:o,rounds:i,enableXOF:s}=this;return t||(t=new ol(r,n,o,s,i)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=i,t.suffix=n,t.outputLen=o,t.enableXOF=s,t.destroyed=this.destroyed,t}}const Zf=(e,t,r)=>d0(()=>new ol(t,e,r)),g0=Zf(1,136,256/8);function Gf(e,t){const r=t,n=g0(_i(e,{strict:!1})?c0(e):e);return r==="bytes"?n:ue(n)}class gn extends me{constructor({address:t}){super(`Address "${t}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."],name:"InvalidAddressError"})}}class na extends Map{constructor(t){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=t}get(t){const r=super.get(t);return super.has(t)&&r!==void 0&&(this.delete(t),super.set(t,r)),r}set(t,r){if(super.set(t,r),this.maxSize&&this.size>this.maxSize){const n=this.keys().next().value;n&&this.delete(n)}return this}}const Sa=new na(8192);function Kf(e,t){if(Sa.has(`${e}.${t}`))return Sa.get(`${e}.${t}`);const r=e.substring(2).toLowerCase(),n=Gf(l0(r),"bytes"),o=r.split("");for(let s=0;s<40;s+=2)n[s>>1]>>4>=8&&o[s]&&(o[s]=o[s].toUpperCase()),(n[s>>1]&15)>=8&&o[s+1]&&(o[s+1]=o[s+1].toUpperCase());const i=`0x${o.join("")}`;return Sa.set(`${e}.${t}`,i),i}const Yf=/^0x[a-fA-F0-9]{40}$/,_a=new na(8192);function wn(e,t){const{strict:r=!0}=t??{},n=`${e}.${r}`;if(_a.has(n))return _a.get(n);const o=Yf.test(e)?e.toLowerCase()===e?!0:r?Kf(e)===e:!0:!1;return _a.set(n,o),o}function Pi(e){return`0x${e.reduce((t,r)=>t+r.replace("0x",""),"")}`}function Jf(e,t,r,{strict:n}={}){return _i(e,{strict:!1})?Qf(e,t,r,{strict:n}):Xf(e,t,r,{strict:n})}function w0(e,t,r){if(Jn(e)!==r-t)throw new gf({offset:r,position:"end",size:Jn(e)})}function Xf(e,t,r,{strict:n}={}){const o=e.slice(t,r);return n&&w0(o,t,r),o}function Qf(e,t,r,{strict:n}={}){const o=`0x${e.replace("0x","").slice(t*2,r*2)}`;return n&&w0(o,t,r),o}class iu extends me{constructor({offset:t}){super(`Offset \`${t}\` cannot be negative.`,{name:"NegativeOffsetError"})}}class eg extends me{constructor({length:t,position:r}){super(`Position \`${r}\` is out of bounds (\`0 < position < ${t}\`).`,{name:"PositionOutOfBoundsError"})}}class tg extends me{constructor({count:t,limit:r}){super(`Recursive read limit of \`${r}\` exceeded (recursive read count: \`${t}\`).`,{name:"RecursiveReadLimitExceededError"})}}const rg={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:Number.POSITIVE_INFINITY,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new tg({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new eg({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new iu({offset:e});const t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new iu({offset:e});const t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){const r=t??this.position;return this.assertPosition(r+e-1),this.bytes.subarray(r,r+e)},inspectUint8(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){const t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){const t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){const t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,e&255),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();const r=this.inspectBytes(e);return this.position+=t??e,r},readUint8(){this.assertReadLimit(),this._touch();const e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();const e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();const e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();const e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){const t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===Number.POSITIVE_INFINITY)return;const e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function m0(e,{recursiveReadLimit:t=8192}={}){const r=Object.create(rg);return r.bytes=e,r.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=t,r}const an=(e,t,r)=>JSON.stringify(e,(n,o)=>typeof o=="bigint"?o.toString():o,r),ng={ether:-9,wei:9};function v0(e,t){let r=e.toString();const n=r.startsWith("-");n&&(r=r.slice(1)),r=r.padStart(t,"0");let[o,i]=[r.slice(0,r.length-t),r.slice(r.length-t)];return i=i.replace(/(0+)$/,""),`${n?"-":""}${o||"0"}${i?`.${i}`:""}`}function Rc(e,t="wei"){return v0(e,ng[t])}function og(e){const t=Object.entries(e).map(([n,o])=>o===void 0||o===!1?null:[n,o]).filter(Boolean),r=t.reduce((n,[o])=>Math.max(n,o.length),0);return t.map(([n,o])=>`  ${`${n}:`.padEnd(r+1)}  ${o}`).join(`
`)}class ig extends me{constructor({v:t}){super(`Invalid \`v\` value "${t}". Expected 27 or 28.`,{name:"InvalidLegacyVError"})}}class sg extends me{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",og(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- an EIP-7702 Transaction with `authorizationList`, or","- a Legacy Transaction with `gasPrice`"],name:"InvalidSerializableTransactionError"})}}class ag extends me{constructor({storageKey:t}){super(`Size for storage key "${t}" is invalid. Expected 32 bytes. Got ${Math.floor((t.length-2)/2)} bytes.`,{name:"InvalidStorageKeySizeError"})}}const il=e=>e;class qo extends me{constructor({body:t,cause:r,details:n,headers:o,status:i,url:s}){super("HTTP request failed.",{cause:r,details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${il(s)}`,t&&`Request body: ${an(t)}`].filter(Boolean),name:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=o,this.status=i,this.url=s}}class b0 extends me{constructor({body:t,error:r,url:n}){super("RPC Request failed.",{cause:r,details:r.message,metaMessages:[`URL: ${il(n)}`,`Request body: ${an(t)}`],name:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=r.code,this.data=r.data}}class su extends me{constructor({body:t,url:r}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${il(r)}`,`Request body: ${an(t)}`],name:"TimeoutError"})}}const cg=-1;class lt extends me{constructor(t,{code:r,docsPath:n,metaMessages:o,name:i,shortMessage:s}){super(s,{cause:t,docsPath:n,metaMessages:o||(t==null?void 0:t.metaMessages),name:i||"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=i||t.name,this.code=t instanceof b0?t.code:r??cg}}class vt extends lt{constructor(t,r){super(t,r),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=r.data}}class ei extends lt{constructor(t){super(t,{code:ei.code,name:"ParseRpcError",shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."})}}Object.defineProperty(ei,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class ti extends lt{constructor(t){super(t,{code:ti.code,name:"InvalidRequestRpcError",shortMessage:"JSON is not a valid request object."})}}Object.defineProperty(ti,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class ri extends lt{constructor(t,{method:r}={}){super(t,{code:ri.code,name:"MethodNotFoundRpcError",shortMessage:`The method${r?` "${r}"`:""} does not exist / is not available.`})}}Object.defineProperty(ri,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class ni extends lt{constructor(t){super(t,{code:ni.code,name:"InvalidParamsRpcError",shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(ni,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Qn extends lt{constructor(t){super(t,{code:Qn.code,name:"InternalRpcError",shortMessage:"An internal error was received."})}}Object.defineProperty(Qn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class oi extends lt{constructor(t){super(t,{code:oi.code,name:"InvalidInputRpcError",shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)})}}Object.defineProperty(oi,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class ii extends lt{constructor(t){super(t,{code:ii.code,name:"ResourceNotFoundRpcError",shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(ii,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class si extends lt{constructor(t){super(t,{code:si.code,name:"ResourceUnavailableRpcError",shortMessage:"Requested resource not available."})}}Object.defineProperty(si,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class eo extends lt{constructor(t){super(t,{code:eo.code,name:"TransactionRejectedRpcError",shortMessage:"Transaction creation failed."})}}Object.defineProperty(eo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class rn extends lt{constructor(t,{method:r}={}){super(t,{code:rn.code,name:"MethodNotSupportedRpcError",shortMessage:`Method${r?` "${r}"`:""} is not supported.`})}}Object.defineProperty(rn,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class to extends lt{constructor(t){super(t,{code:to.code,name:"LimitExceededRpcError",shortMessage:"Request exceeds defined limit."})}}Object.defineProperty(to,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class ai extends lt{constructor(t){super(t,{code:ai.code,name:"JsonRpcVersionUnsupportedError",shortMessage:"Version of JSON-RPC protocol is not supported."})}}Object.defineProperty(ai,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class cn extends vt{constructor(t){super(t,{code:cn.code,name:"UserRejectedRequestError",shortMessage:"User rejected the request."})}}Object.defineProperty(cn,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class ci extends vt{constructor(t){super(t,{code:ci.code,name:"UnauthorizedProviderError",shortMessage:"The requested method and/or account has not been authorized by the user."})}}Object.defineProperty(ci,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class li extends vt{constructor(t,{method:r}={}){super(t,{code:li.code,name:"UnsupportedProviderMethodError",shortMessage:`The Provider does not support the requested method${r?` " ${r}"`:""}.`})}}Object.defineProperty(li,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class ui extends vt{constructor(t){super(t,{code:ui.code,name:"ProviderDisconnectedError",shortMessage:"The Provider is disconnected from all chains."})}}Object.defineProperty(ui,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class di extends vt{constructor(t){super(t,{code:di.code,name:"ChainDisconnectedError",shortMessage:"The Provider is not connected to the requested chain."})}}Object.defineProperty(di,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class hi extends vt{constructor(t){super(t,{code:hi.code,name:"SwitchChainError",shortMessage:"An error occurred when attempting to switch chain."})}}Object.defineProperty(hi,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class pi extends vt{constructor(t){super(t,{code:pi.code,name:"UnsupportedNonOptionalCapabilityError",shortMessage:"This Wallet does not support a capability that was not marked as optional."})}}Object.defineProperty(pi,"code",{enumerable:!0,configurable:!0,writable:!0,value:5700});class fi extends vt{constructor(t){super(t,{code:fi.code,name:"UnsupportedChainIdError",shortMessage:"This Wallet does not support the requested chain ID."})}}Object.defineProperty(fi,"code",{enumerable:!0,configurable:!0,writable:!0,value:5710});class gi extends vt{constructor(t){super(t,{code:gi.code,name:"DuplicateIdError",shortMessage:"There is already a bundle submitted with this ID."})}}Object.defineProperty(gi,"code",{enumerable:!0,configurable:!0,writable:!0,value:5720});class wi extends vt{constructor(t){super(t,{code:wi.code,name:"UnknownBundleIdError",shortMessage:"This bundle id is unknown / has not been submitted"})}}Object.defineProperty(wi,"code",{enumerable:!0,configurable:!0,writable:!0,value:5730});class mi extends vt{constructor(t){super(t,{code:mi.code,name:"BundleTooLargeError",shortMessage:"The call bundle is too large for the Wallet to process."})}}Object.defineProperty(mi,"code",{enumerable:!0,configurable:!0,writable:!0,value:5740});class vi extends vt{constructor(t){super(t,{code:vi.code,name:"AtomicReadyWalletRejectedUpgradeError",shortMessage:"The Wallet can support atomicity after an upgrade, but the user rejected the upgrade."})}}Object.defineProperty(vi,"code",{enumerable:!0,configurable:!0,writable:!0,value:5750});class bi extends vt{constructor(t){super(t,{code:bi.code,name:"AtomicityNotSupportedError",shortMessage:"The wallet does not support atomic execution but the request requires it."})}}Object.defineProperty(bi,"code",{enumerable:!0,configurable:!0,writable:!0,value:5760});class lg extends lt{constructor(t){super(t,{name:"UnknownRpcError",shortMessage:"An unknown RPC error occurred."})}}function uo(e,t="hex"){const r=y0(e),n=m0(new Uint8Array(r.length));return r.encode(n),t==="hex"?Rr(n.bytes):n.bytes}function y0(e){return Array.isArray(e)?ug(e.map(t=>y0(t))):dg(e)}function ug(e){const t=e.reduce((n,o)=>n+o.length,0),r=C0(t);return{length:t<=55?1+t:1+r+t,encode(n){t<=55?n.pushByte(192+t):(n.pushByte(247+r),r===1?n.pushUint8(t):r===2?n.pushUint16(t):r===3?n.pushUint24(t):n.pushUint32(t));for(const{encode:o}of e)o(n)}}}function dg(e){const t=typeof e=="string"?fn(e):e,r=C0(t.length);return{length:t.length===1&&t[0]<128?1:t.length<=55?1+t.length:1+r+t.length,encode(n){t.length===1&&t[0]<128?n.pushBytes(t):t.length<=55?(n.pushByte(128+t.length),n.pushBytes(t)):(n.pushByte(183+r),r===1?n.pushUint8(t.length):r===2?n.pushUint16(t.length):r===3?n.pushUint24(t.length):n.pushUint32(t.length),n.pushBytes(t))}}}function C0(e){if(e<2**8)return 1;if(e<2**16)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new me("Length is too large.")}class Bc extends me{constructor({cause:t,message:r}={}){var o;const n=(o=r==null?void 0:r.replace("execution reverted: ",""))==null?void 0:o.replace("execution reverted","");super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`,{cause:t,name:"ExecutionRevertedError"})}}Object.defineProperty(Bc,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(Bc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class oa extends me{constructor({cause:t,maxFeePerGas:r}={}){super(`The fee cap (\`maxFeePerGas\`${r?` = ${Rc(r)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t,name:"FeeCapTooHighError"})}}Object.defineProperty(oa,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class x0 extends me{constructor({cause:t,maxPriorityFeePerGas:r,maxFeePerGas:n}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${r?` = ${Rc(r)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${Rc(n)} gwei`:""}).`].join(`
`),{cause:t,name:"TipAboveFeeCapError"})}}Object.defineProperty(x0,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});function sl(e,t){return({exclude:r,format:n})=>({exclude:r,format:o=>{const i=t(o);if(r)for(const s of r)delete i[s];return{...i,...n(o)}},type:e})}const al=2n**256n-1n,E0={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844","0x4":"eip7702"};function cl(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?Us(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?Us(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?E0[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return e.authorizationList&&(t.authorizationList=pg(e.authorizationList)),t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if(typeof t.v=="bigint"){if(t.v===0n||t.v===27n)return 0;if(t.v===1n||t.v===28n)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),t.type==="eip2930"&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip1559"&&delete t.maxFeePerBlobGas,t}const hg=sl("transaction",cl);function pg(e){return e.map(t=>({address:t.address,chainId:Number(t.chainId),nonce:Number(t.nonce),r:t.r,s:t.s,yParity:Number(t.yParity)}))}function fg(e){const t=(e.transactions??[]).map(r=>typeof r=="string"?r:cl(r));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}const gg=sl("block",fg);function A0(e){const{kzg:t}=e,r=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),n=typeof e.blobs[0]=="string"?e.blobs.map(i=>fn(i)):e.blobs,o=[];for(const i of n)o.push(Uint8Array.from(t.blobToKzgCommitment(i)));return r==="bytes"?o:o.map(i=>Rr(i))}function k0(e){const{kzg:t}=e,r=e.to??(typeof e.blobs[0]=="string"?"hex":"bytes"),n=typeof e.blobs[0]=="string"?e.blobs.map(s=>fn(s)):e.blobs,o=typeof e.commitments[0]=="string"?e.commitments.map(s=>fn(s)):e.commitments,i=[];for(let s=0;s<n.length;s++){const a=n[s],c=o[s];i.push(Uint8Array.from(t.computeBlobKzgProof(a,c)))}return r==="bytes"?i:i.map(s=>Rr(s))}function wg(e,t,r,n){if(typeof e.setBigUint64=="function")return e.setBigUint64(t,r,n);const o=BigInt(32),i=BigInt(4294967295),s=Number(r>>o&i),a=Number(r&i),c=n?4:0,l=n?0:4;e.setUint32(t+c,s,n),e.setUint32(t+l,a,n)}function mg(e,t,r){return e&t^~e&r}function vg(e,t,r){return e&t^e&r^t&r}class bg extends nl{constructor(t,r,n,o){super(),this.blockLen=t,this.outputLen=r,this.padOffset=n,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(t),this.view=Na(this.buffer)}update(t){Xn(this);const{view:r,buffer:n,blockLen:o}=this;t=ra(t);const i=t.length;for(let s=0;s<i;){const a=Math.min(o-this.pos,i-s);if(a===o){const c=Na(t);for(;o<=i-s;s+=o)this.process(c,s);continue}n.set(t.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===o&&(this.process(r,0),this.pos=0)}return this.length+=t.length,this.roundClean(),this}digestInto(t){Xn(this),u0(t,this),this.finished=!0;const{buffer:r,view:n,blockLen:o,isLE:i}=this;let{pos:s}=this;r[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(n,0),s=0);for(let d=s;d<o;d++)r[d]=0;wg(n,o-8,BigInt(this.length*8),i),this.process(n,0);const a=Na(t),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,u=this.get();if(l>u.length)throw new Error("_sha2: outputLen bigger than state");for(let d=0;d<l;d++)a.setUint32(4*d,u[d],i)}digest(){const{buffer:t,outputLen:r}=this;this.digestInto(t);const n=t.slice(0,r);return this.destroy(),n}_cloneInto(t){t||(t=new this.constructor),t.set(...this.get());const{blockLen:r,buffer:n,length:o,finished:i,destroyed:s,pos:a}=this;return t.length=o,t.pos=a,t.finished=i,t.destroyed=s,o%r&&t.buffer.set(n),t}}const yg=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),mr=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),vr=new Uint32Array(64);class Cg extends bg{constructor(){super(64,32,8,!1),this.A=mr[0]|0,this.B=mr[1]|0,this.C=mr[2]|0,this.D=mr[3]|0,this.E=mr[4]|0,this.F=mr[5]|0,this.G=mr[6]|0,this.H=mr[7]|0}get(){const{A:t,B:r,C:n,D:o,E:i,F:s,G:a,H:c}=this;return[t,r,n,o,i,s,a,c]}set(t,r,n,o,i,s,a,c){this.A=t|0,this.B=r|0,this.C=n|0,this.D=o|0,this.E=i|0,this.F=s|0,this.G=a|0,this.H=c|0}process(t,r){for(let d=0;d<16;d++,r+=4)vr[d]=t.getUint32(r,!1);for(let d=16;d<64;d++){const h=vr[d-15],p=vr[d-2],m=Mt(h,7)^Mt(h,18)^h>>>3,g=Mt(p,17)^Mt(p,19)^p>>>10;vr[d]=g+vr[d-7]+m+vr[d-16]|0}let{A:n,B:o,C:i,D:s,E:a,F:c,G:l,H:u}=this;for(let d=0;d<64;d++){const h=Mt(a,6)^Mt(a,11)^Mt(a,25),p=u+h+mg(a,c,l)+yg[d]+vr[d]|0,m=(Mt(n,2)^Mt(n,13)^Mt(n,22))+vg(n,o,i)|0;u=l,l=c,c=a,a=s+p|0,s=i,i=o,o=n,n=p+m|0}n=n+this.A|0,o=o+this.B|0,i=i+this.C|0,s=s+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,u=u+this.H|0,this.set(n,o,i,s,a,c,l,u)}roundClean(){vr.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const I0=d0(()=>new Cg);function xg(e,t){const r=t,n=I0(_i(e,{strict:!1})?c0(e):e);return r==="bytes"?n:ue(n)}function Eg(e){const{commitment:t,version:r=1}=e,n=e.to??(typeof t=="string"?"hex":"bytes"),o=xg(t,"bytes");return o.set([r],0),n==="bytes"?o:Rr(o)}function Ag(e){const{commitments:t,version:r}=e,n=e.to??(typeof t[0]=="string"?"hex":"bytes"),o=[];for(const i of t)o.push(Eg({commitment:i,to:n,version:r}));return o}const au=6,N0=32,ll=4096,S0=N0*ll,cu=S0*au-1-1*ll*au,_0=1;class kg extends me{constructor({maxSize:t,size:r}){super("Blob size is too large.",{metaMessages:[`Max: ${t} bytes`,`Given: ${r} bytes`],name:"BlobSizeTooLargeError"})}}class T0 extends me{constructor(){super("Blob data must not be empty.",{name:"EmptyBlobError"})}}class Ig extends me{constructor({hash:t,size:r}){super(`Versioned hash "${t}" size is invalid.`,{metaMessages:["Expected: 32",`Received: ${r}`],name:"InvalidVersionedHashSizeError"})}}class Ng extends me{constructor({hash:t,version:r}){super(`Versioned hash "${t}" version is invalid.`,{metaMessages:[`Expected: ${_0}`,`Received: ${r}`],name:"InvalidVersionedHashVersionError"})}}function Sg(e){const t=e.to??(typeof e.data=="string"?"hex":"bytes"),r=typeof e.data=="string"?fn(e.data):e.data,n=Jn(r);if(!n)throw new T0;if(n>cu)throw new kg({maxSize:cu,size:n});const o=[];let i=!0,s=0;for(;i;){const a=m0(new Uint8Array(S0));let c=0;for(;c<ll;){const l=r.slice(s,s+(N0-1));if(a.pushByte(0),a.pushBytes(l),l.length<31){a.pushByte(128),i=!1;break}c++,s+=31}o.push(a)}return t==="bytes"?o.map(a=>a.bytes):o.map(a=>Rr(a.bytes))}function _g(e){const{data:t,kzg:r,to:n}=e,o=e.blobs??Sg({data:t,to:n}),i=e.commitments??A0({blobs:o,kzg:r,to:n}),s=e.proofs??k0({blobs:o,commitments:i,kzg:r,to:n}),a=[];for(let c=0;c<o.length;c++)a.push({blob:o[c],commitment:i[c],proof:s[c]});return a}function Tg(e){if(e.type)return e.type;if(typeof e.authorizationList<"u")return"eip7702";if(typeof e.blobs<"u"||typeof e.blobVersionedHashes<"u"||typeof e.maxFeePerBlobGas<"u"||typeof e.sidecars<"u")return"eip4844";if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new sg({transaction:e})}function Pg(e,{args:t,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:t,eventName:r}:{}}}class ia extends me{constructor({chainId:t}){super(typeof t=="number"?`Chain ID "${t}" is invalid.`:"Chain ID is invalid.",{name:"InvalidChainIdError"})}}function $g(){let e=()=>{},t=()=>{};return{promise:new Promise((r,n)=>{e=r,t=n}),resolve:e,reject:t}}const Ta=new Map;function Og({fn:e,id:t,shouldSplitBatch:r,wait:n=0,sort:o}){const i=async()=>{const u=c();s();const d=u.map(({args:h})=>h);d.length!==0&&e(d).then(h=>{o&&Array.isArray(h)&&h.sort(o);for(let p=0;p<u.length;p++){const{resolve:m}=u[p];m==null||m([h[p],h])}}).catch(h=>{for(let p=0;p<u.length;p++){const{reject:m}=u[p];m==null||m(h)}})},s=()=>Ta.delete(t),a=()=>c().map(({args:u})=>u),c=()=>Ta.get(t)||[],l=u=>Ta.set(t,[...c(),u]);return{flush:s,async schedule(u){const{promise:d,resolve:h,reject:p}=$g();return r!=null&&r([...a(),u])&&i(),c().length>0?(l({args:u,resolve:h,reject:p}),d):(l({args:u,resolve:h,reject:p}),setTimeout(i,n),d)}}}async function P0(e){return new Promise(t=>setTimeout(t,e))}new na(128);const Lc=256;let Vi=Lc,qi;function Rg(e=11){if(!qi||Vi+e>Lc*2){qi="",Vi=0;for(let t=0;t<Lc;t++)qi+=(256+Math.random()*256|0).toString(16).substring(1)}return qi.substring(Vi,Vi+++e)}const Zi=new na(8192);function Bg(e,{enabled:t=!0,id:r}){if(!t||!r)return e();if(Zi.get(r))return Zi.get(r);const n=e().finally(()=>Zi.delete(r));return Zi.set(r,n),n}function Lg(e,{delay:t=100,retryCount:r=2,shouldRetry:n=()=>!0}={}){return new Promise((o,i)=>{const s=async({count:a=0}={})=>{const c=async({error:l})=>{const u=typeof t=="function"?t({count:a,error:l}):t;u&&await P0(u),s({count:a+1})};try{const l=await e();o(l)}catch(l){if(a<r&&await n({count:a,error:l}))return c({error:l});i(l)}};s()})}function Ug(e,t={}){return async(r,n={})=>{var d;const{dedupe:o=!1,methods:i,retryDelay:s=150,retryCount:a=3,uid:c}={...t,...n},{method:l}=r;if((d=i==null?void 0:i.exclude)!=null&&d.includes(l))throw new rn(new Error("method not supported"),{method:l});if(i!=null&&i.include&&!i.include.includes(l))throw new rn(new Error("method not supported"),{method:l});const u=o?a0(`${c}.${an(r)}`):void 0;return Bg(()=>Lg(async()=>{try{return await e(r)}catch(h){const p=h;switch(p.code){case ei.code:throw new ei(p);case ti.code:throw new ti(p);case ri.code:throw new ri(p,{method:r.method});case ni.code:throw new ni(p);case Qn.code:throw new Qn(p);case oi.code:throw new oi(p);case ii.code:throw new ii(p);case si.code:throw new si(p);case eo.code:throw new eo(p);case rn.code:throw new rn(p,{method:r.method});case to.code:throw new to(p);case ai.code:throw new ai(p);case cn.code:throw new cn(p);case ci.code:throw new ci(p);case li.code:throw new li(p);case ui.code:throw new ui(p);case di.code:throw new di(p);case hi.code:throw new hi(p);case pi.code:throw new pi(p);case fi.code:throw new fi(p);case gi.code:throw new gi(p);case wi.code:throw new wi(p);case mi.code:throw new mi(p);case vi.code:throw new vi(p);case bi.code:throw new bi(p);case 5e3:throw new cn(p);default:throw h instanceof me?h:new lg(p)}}},{delay:({count:h,error:p})=>{var m;if(p&&p instanceof qo){const g=(m=p==null?void 0:p.headers)==null?void 0:m.get("Retry-After");if(g!=null&&g.match(/\d/))return Number.parseInt(g)*1e3}return~~(1<<h)*s},retryCount:a,shouldRetry:({error:h})=>Mg(h)}),{enabled:o,id:u})}}function Mg(e){return"code"in e&&typeof e.code=="number"?e.code===-1||e.code===to.code||e.code===Qn.code:e instanceof qo&&e.status?e.status===403||e.status===408||e.status===413||e.status===429||e.status===500||e.status===502||e.status===503||e.status===504:!0}function $0({key:e,methods:t,name:r,request:n,retryCount:o=3,retryDelay:i=150,timeout:s,type:a},c){const l=Rg();return{config:{key:e,methods:t,name:r,request:n,retryCount:o,retryDelay:i,timeout:s,type:a},request:Ug(n,{methods:t,retryCount:o,retryDelay:i,uid:l}),value:c}}function lu(e,t={}){const{key:r="fallback",name:n="Fallback",rank:o=!1,shouldThrow:i=zg,retryCount:s,retryDelay:a}=t;return({chain:c,pollingInterval:l=4e3,timeout:u,...d})=>{let h=e,p=()=>{};const m=$0({key:r,name:n,async request({method:g,params:f}){let w;const v=async(b=0)=>{const k=h[b]({...d,chain:c,retryCount:0,timeout:u});try{const $=await k.request({method:g,params:f});return p({method:g,params:f,response:$,transport:k,status:"success"}),$}catch($){if(p({error:$,method:g,params:f,transport:k,status:"error"}),i($)||b===h.length-1||(w??(w=h.slice(b+1).some(S=>{const{include:R,exclude:P}=S({chain:c}).config.methods||{};return R?R.includes(g):P?!P.includes(g):!0})),!w))throw $;return v(b+1)}};return v()},retryCount:s,retryDelay:a,type:"fallback"},{onResponse:g=>p=g,transports:h.map(g=>g({chain:c,retryCount:0}))});if(o){const g=typeof o=="object"?o:{};Dg({chain:c,interval:g.interval??l,onTransports:f=>h=f,ping:g.ping,sampleCount:g.sampleCount,timeout:g.timeout,transports:h,weights:g.weights})}return m}}function zg(e){return!!("code"in e&&typeof e.code=="number"&&(e.code===eo.code||e.code===cn.code||Bc.nodeMessage.test(e.message)||e.code===5e3))}function Dg({chain:e,interval:t=4e3,onTransports:r,ping:n,sampleCount:o=10,timeout:i=1e3,transports:s,weights:a={}}){const{stability:c=.7,latency:l=.3}=a,u=[],d=async()=>{const h=await Promise.all(s.map(async g=>{const f=g({chain:e,retryCount:0,timeout:i}),w=Date.now();let v,b;try{await(n?n({transport:f}):f.request({method:"net_listening"})),b=1}catch{b=0}finally{v=Date.now()}return{latency:v-w,success:b}}));u.push(h),u.length>o&&u.shift();const p=Math.max(...u.map(g=>Math.max(...g.map(({latency:f})=>f)))),m=s.map((g,f)=>{const w=u.map($=>$[f].latency),v=1-w.reduce(($,S)=>$+S,0)/w.length/p,b=u.map($=>$[f].success),k=b.reduce(($,S)=>$+S,0)/b.length;return k===0?[0,f]:[l*v+c*k,f]}).sort((g,f)=>f[0]-g[0]);r(m.map(([,g])=>s[g])),await P0(t),d()};d()}class jg extends me{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}function Wg(e,{errorInstance:t=new Error("timed out"),timeout:r,signal:n}){return new Promise((o,i)=>{(async()=>{let s;try{const a=new AbortController;r>0&&(s=setTimeout(()=>{n?a.abort():i(t)},r)),o(await e({signal:(a==null?void 0:a.signal)||null}))}catch(a){(a==null?void 0:a.name)==="AbortError"&&i(t),i(a)}finally{clearTimeout(s)}})()})}function Hg(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const uu=Hg();function Fg(e,t={}){return{async request(r){var d;const{body:n,onRequest:o=t.onRequest,onResponse:i=t.onResponse,timeout:s=t.timeout??1e4}=r,a={...t.fetchOptions??{},...r.fetchOptions??{}},{headers:c,method:l,signal:u}=a;try{const h=await Wg(async({signal:m})=>{const g={...a,body:Array.isArray(n)?an(n.map(v=>({jsonrpc:"2.0",id:v.id??uu.take(),...v}))):an({jsonrpc:"2.0",id:n.id??uu.take(),...n}),headers:{"Content-Type":"application/json",...c},method:l||"POST",signal:u||(s>0?m:null)},f=new Request(e,g),w=await(o==null?void 0:o(f,g))??{...g,url:e};return await fetch(w.url??e,w)},{errorInstance:new su({body:n,url:e}),timeout:s,signal:!0});i&&await i(h);let p;if((d=h.headers.get("Content-Type"))!=null&&d.startsWith("application/json"))p=await h.json();else{p=await h.text();try{p=JSON.parse(p||"{}")}catch(m){if(h.ok)throw m;p={error:p}}}if(!h.ok)throw new qo({body:n,details:an(p.error)||h.statusText,headers:h.headers,status:h.status,url:e});return p}catch(h){throw h instanceof qo||h instanceof su?h:new qo({body:n,cause:h,url:e})}}}}function Gi(e,t={}){const{batch:r,fetchOptions:n,key:o="http",methods:i,name:s="HTTP JSON-RPC",onFetchRequest:a,onFetchResponse:c,retryDelay:l,raw:u}=t;return({chain:d,retryCount:h,timeout:p})=>{const{batchSize:m=1e3,wait:g=0}=typeof r=="object"?r:{},f=t.retryCount??h,w=p??t.timeout??1e4,v=e||(d==null?void 0:d.rpcUrls.default.http[0]);if(!v)throw new jg;const b=Fg(v,{fetchOptions:n,onRequest:a,onResponse:c,timeout:w});return $0({key:o,methods:i,name:s,async request({method:k,params:$}){const S={method:k,params:$},{schedule:R}=Og({id:v,wait:g,shouldSplitBatch(O){return O.length>m},fn:O=>b.request({body:O}),sort:(O,U)=>O.id-U.id}),P=async O=>r?R(O):[await b.request({body:O})],[{error:I,result:L}]=await P(S);if(u)return{error:I,result:L};if(I)throw new b0({body:S,error:I,url:v});return L},retryCount:f,retryDelay:l,timeout:w,type:"http"},{fetchOptions:n,url:v})}}function Lt(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}function Vg(e){const{authorizationList:t}=e;if(t)for(const r of t){const{chainId:n}=r,o=r.address;if(!wn(o))throw new gn({address:o});if(n<0)throw new ia({chainId:n})}ul(e)}function qg(e){const{blobVersionedHashes:t}=e;if(t){if(t.length===0)throw new T0;for(const r of t){const n=Jn(r),o=Us(Jf(r,0,1));if(n!==32)throw new Ig({hash:r,size:n});if(o!==_0)throw new Ng({hash:r,version:o})}}ul(e)}function ul(e){const{chainId:t,maxPriorityFeePerGas:r,maxFeePerGas:n,to:o}=e;if(t<=0)throw new ia({chainId:t});if(o&&!wn(o))throw new gn({address:o});if(n&&n>al)throw new oa({maxFeePerGas:n});if(r&&n&&r>n)throw new x0({maxFeePerGas:n,maxPriorityFeePerGas:r})}function Zg(e){const{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:o,to:i}=e;if(t<=0)throw new ia({chainId:t});if(i&&!wn(i))throw new gn({address:i});if(r||o)throw new me("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(n&&n>al)throw new oa({maxFeePerGas:n})}function Gg(e){const{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:o,to:i}=e;if(i&&!wn(i))throw new gn({address:i});if(typeof t<"u"&&t<=0)throw new ia({chainId:t});if(r||o)throw new me("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(n&&n>al)throw new oa({maxFeePerGas:n})}function sa(e){if(!e||e.length===0)return[];const t=[];for(let r=0;r<e.length;r++){const{address:n,storageKeys:o}=e[r];for(let i=0;i<o.length;i++)if(o[i].length-2!==64)throw new ag({storageKey:o[i]});if(!wn(n,{strict:!1}))throw new gn({address:n});t.push([n,o])}return t}function Kg(e,t){const r=Tg(e);return r==="eip1559"?Xg(e,t):r==="eip2930"?Qg(e,t):r==="eip4844"?Jg(e,t):r==="eip7702"?Yg(e,t):ew(e,t)}function Yg(e,t){const{authorizationList:r,chainId:n,gas:o,nonce:i,to:s,value:a,maxFeePerGas:c,maxPriorityFeePerGas:l,accessList:u,data:d}=e;Vg(e);const h=sa(u),p=tw(r);return Pi(["0x04",uo([ue(n),i?ue(i):"0x",l?ue(l):"0x",c?ue(c):"0x",o?ue(o):"0x",s??"0x",a?ue(a):"0x",d??"0x",h,p,...$i(e,t)])])}function Jg(e,t){const{chainId:r,gas:n,nonce:o,to:i,value:s,maxFeePerBlobGas:a,maxFeePerGas:c,maxPriorityFeePerGas:l,accessList:u,data:d}=e;qg(e);let h=e.blobVersionedHashes,p=e.sidecars;if(e.blobs&&(typeof h>"u"||typeof p>"u")){const b=typeof e.blobs[0]=="string"?e.blobs:e.blobs.map(S=>Rr(S)),k=e.kzg,$=A0({blobs:b,kzg:k});if(typeof h>"u"&&(h=Ag({commitments:$})),typeof p>"u"){const S=k0({blobs:b,commitments:$,kzg:k});p=_g({blobs:b,commitments:$,proofs:S})}}const m=sa(u),g=[ue(r),o?ue(o):"0x",l?ue(l):"0x",c?ue(c):"0x",n?ue(n):"0x",i??"0x",s?ue(s):"0x",d??"0x",m,a?ue(a):"0x",h??[],...$i(e,t)],f=[],w=[],v=[];if(p)for(let b=0;b<p.length;b++){const{blob:k,commitment:$,proof:S}=p[b];f.push(k),w.push($),v.push(S)}return Pi(["0x03",uo(p?[g,f,w,v]:g)])}function Xg(e,t){const{chainId:r,gas:n,nonce:o,to:i,value:s,maxFeePerGas:a,maxPriorityFeePerGas:c,accessList:l,data:u}=e;ul(e);const d=sa(l),h=[ue(r),o?ue(o):"0x",c?ue(c):"0x",a?ue(a):"0x",n?ue(n):"0x",i??"0x",s?ue(s):"0x",u??"0x",d,...$i(e,t)];return Pi(["0x02",uo(h)])}function Qg(e,t){const{chainId:r,gas:n,data:o,nonce:i,to:s,value:a,accessList:c,gasPrice:l}=e;Zg(e);const u=sa(c),d=[ue(r),i?ue(i):"0x",l?ue(l):"0x",n?ue(n):"0x",s??"0x",a?ue(a):"0x",o??"0x",u,...$i(e,t)];return Pi(["0x01",uo(d)])}function ew(e,t){const{chainId:r=0,gas:n,data:o,nonce:i,to:s,value:a,gasPrice:c}=e;Gg(e);let l=[i?ue(i):"0x",c?ue(c):"0x",n?ue(n):"0x",s??"0x",a?ue(a):"0x",o??"0x"];if(t){const u=(()=>{if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(t.v===35n?0n:1n);if(r>0)return BigInt(r*2)+BigInt(35n+t.v-27n);const p=27n+(t.v===27n?0n:1n);if(t.v!==p)throw new ig({v:t.v});return p})(),d=Ls(t.r),h=Ls(t.s);l=[...l,ue(u),d==="0x00"?"0x":d,h==="0x00"?"0x":h]}else r>0&&(l=[...l,ue(r),"0x","0x"]);return uo(l)}function $i(e,t){const r=t??e,{v:n,yParity:o}=r;if(typeof r.r>"u")return[];if(typeof r.s>"u")return[];if(typeof n>"u"&&typeof o>"u")return[];const i=Ls(r.r),s=Ls(r.s);return[typeof o=="number"?o?ue(1):"0x":n===0n?"0x":n===1n?ue(1):n===27n?"0x":ue(1),i==="0x00"?"0x":i,s==="0x00"?"0x":s]}function tw(e){if(!e||e.length===0)return[];const t=[];for(const r of e){const{chainId:n,nonce:o,...i}=r,s=r.address;t.push([n?ue(n):"0x",s,o?ue(o):"0x",...$i({},i)])}return t}const rw={"0x0":"reverted","0x1":"success"};function nw(e){const t={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(r=>Pg(r)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Us(e.transactionIndex):null,status:e.status?rw[e.status]:null,type:e.type?E0[e.type]||e.type:null};return e.blobGasPrice&&(t.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(t.blobGasUsed=BigInt(e.blobGasUsed)),t}const ow=sl("transactionReceipt",nw),iw=new Uint8Array([7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8]),O0=new Uint8Array(new Array(16).fill(0).map((e,t)=>t)),sw=O0.map(e=>(9*e+5)%16);let aw=[O0],cw=[sw];for(let e=0;e<4;e++)for(let t of[aw,cw])t.push(t[e].map(r=>iw[r]));/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */const aa=BigInt(0),ca=BigInt(1),lw=BigInt(2);function mn(e){return e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name==="Uint8Array"}function Oi(e){if(!mn(e))throw new Error("Uint8Array expected")}function ro(e,t){if(typeof t!="boolean")throw new Error(e+" boolean expected, got "+t)}const uw=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function no(e){Oi(e);let t="";for(let r=0;r<e.length;r++)t+=uw[e[r]];return t}function Wn(e){const t=e.toString(16);return t.length&1?"0"+t:t}function dl(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);return e===""?aa:BigInt("0x"+e)}const Jt={_0:48,_9:57,A:65,F:70,a:97,f:102};function du(e){if(e>=Jt._0&&e<=Jt._9)return e-Jt._0;if(e>=Jt.A&&e<=Jt.F)return e-(Jt.A-10);if(e>=Jt.a&&e<=Jt.f)return e-(Jt.a-10)}function oo(e){if(typeof e!="string")throw new Error("hex string expected, got "+typeof e);const t=e.length,r=t/2;if(t%2)throw new Error("hex string expected, got unpadded hex of length "+t);const n=new Uint8Array(r);for(let o=0,i=0;o<r;o++,i+=2){const s=du(e.charCodeAt(i)),a=du(e.charCodeAt(i+1));if(s===void 0||a===void 0){const c=e[i]+e[i+1];throw new Error('hex string expected, got non-hex character "'+c+'" at index '+i)}n[o]=s*16+a}return n}function ln(e){return dl(no(e))}function hl(e){return Oi(e),dl(no(Uint8Array.from(e).reverse()))}function io(e,t){return oo(e.toString(16).padStart(t*2,"0"))}function pl(e,t){return io(e,t).reverse()}function dw(e){return oo(Wn(e))}function Bt(e,t,r){let n;if(typeof t=="string")try{n=oo(t)}catch(i){throw new Error(e+" must be hex string or Uint8Array, cause: "+i)}else if(mn(t))n=Uint8Array.from(t);else throw new Error(e+" must be hex string or Uint8Array");const o=n.length;if(typeof r=="number"&&o!==r)throw new Error(e+" of length "+r+" expected, got "+o);return n}function yi(...e){let t=0;for(let n=0;n<e.length;n++){const o=e[n];Oi(o),t+=o.length}const r=new Uint8Array(t);for(let n=0,o=0;n<e.length;n++){const i=e[n];r.set(i,o),o+=i.length}return r}function hw(e,t){if(e.length!==t.length)return!1;let r=0;for(let n=0;n<e.length;n++)r|=e[n]^t[n];return r===0}function pw(e){if(typeof e!="string")throw new Error("string expected");return new Uint8Array(new TextEncoder().encode(e))}const Pa=e=>typeof e=="bigint"&&aa<=e;function la(e,t,r){return Pa(e)&&Pa(t)&&Pa(r)&&t<=e&&e<r}function un(e,t,r,n){if(!la(t,r,n))throw new Error("expected valid "+e+": "+r+" <= n < "+n+", got "+t)}function R0(e){let t;for(t=0;e>aa;e>>=ca,t+=1);return t}function fw(e,t){return e>>BigInt(t)&ca}function gw(e,t,r){return e|(r?ca:aa)<<BigInt(t)}const fl=e=>(lw<<BigInt(e-1))-ca,$a=e=>new Uint8Array(e),hu=e=>Uint8Array.from(e);function B0(e,t,r){if(typeof e!="number"||e<2)throw new Error("hashLen must be a number");if(typeof t!="number"||t<2)throw new Error("qByteLen must be a number");if(typeof r!="function")throw new Error("hmacFn must be a function");let n=$a(e),o=$a(e),i=0;const s=()=>{n.fill(1),o.fill(0),i=0},a=(...u)=>r(o,n,...u),c=(u=$a())=>{o=a(hu([0]),u),n=a(),u.length!==0&&(o=a(hu([1]),u),n=a())},l=()=>{if(i++>=1e3)throw new Error("drbg: tried 1000 values");let u=0;const d=[];for(;u<t;){n=a();const h=n.slice();d.push(h),u+=n.length}return yi(...d)};return(u,d)=>{s(),c(u);let h;for(;!(h=d(l()));)c();return s(),h}}const ww={bigint:e=>typeof e=="bigint",function:e=>typeof e=="function",boolean:e=>typeof e=="boolean",string:e=>typeof e=="string",stringOrUint8Array:e=>typeof e=="string"||mn(e),isSafeInteger:e=>Number.isSafeInteger(e),array:e=>Array.isArray(e),field:(e,t)=>t.Fp.isValid(e),hash:e=>typeof e=="function"&&Number.isSafeInteger(e.outputLen)};function Ri(e,t,r={}){const n=(o,i,s)=>{const a=ww[i];if(typeof a!="function")throw new Error("invalid validator function");const c=e[o];if(!(s&&c===void 0)&&!a(c,e))throw new Error("param "+String(o)+" is invalid. Expected "+i+", got "+c)};for(const[o,i]of Object.entries(t))n(o,i,!1);for(const[o,i]of Object.entries(r))n(o,i,!0);return e}const mw=()=>{throw new Error("not implemented")};function Uc(e){const t=new WeakMap;return(r,...n)=>{const o=t.get(r);if(o!==void 0)return o;const i=e(r,...n);return t.set(r,i),i}}var vw=Object.freeze({__proto__:null,isBytes:mn,abytes:Oi,abool:ro,bytesToHex:no,numberToHexUnpadded:Wn,hexToNumber:dl,hexToBytes:oo,bytesToNumberBE:ln,bytesToNumberLE:hl,numberToBytesBE:io,numberToBytesLE:pl,numberToVarBytesBE:dw,ensureBytes:Bt,concatBytes:yi,equalBytes:hw,utf8ToBytes:pw,inRange:la,aInRange:un,bitLen:R0,bitGet:fw,bitSet:gw,bitMask:fl,createHmacDrbg:B0,validateObject:Ri,notImplemented:mw,memoized:Uc});const bw="0.1.1";function yw(){return bw}class et extends Error{constructor(t,r={}){const n=(()=>{var a;if(r.cause instanceof et){if(r.cause.details)return r.cause.details;if(r.cause.shortMessage)return r.cause.shortMessage}return(a=r.cause)!=null&&a.message?r.cause.message:r.details})(),o=r.cause instanceof et&&r.cause.docsPath||r.docsPath,i=`https://oxlib.sh${o??""}`,s=[t||"An error occurred.",...r.metaMessages?["",...r.metaMessages]:[],...n||o?["",n?`Details: ${n}`:void 0,o?`See: ${i}`:void 0]:[]].filter(a=>typeof a=="string").join(`
`);super(s,r.cause?{cause:r.cause}:void 0),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:`ox@${yw()}`}),this.cause=r.cause,this.details=n,this.docs=i,this.docsPath=o,this.shortMessage=t}walk(t){return L0(this,t)}}function L0(e,t){return t!=null&&t(e)?e:e&&typeof e=="object"&&"cause"in e&&e.cause?L0(e.cause,t):t?null:e}function Cw(e,t){if(fu(e)>t)throw new _w({givenSize:fu(e),maxSize:t})}const Xt={zero:48,nine:57,A:65,F:70,a:97,f:102};function pu(e){if(e>=Xt.zero&&e<=Xt.nine)return e-Xt.zero;if(e>=Xt.A&&e<=Xt.F)return e-(Xt.A-10);if(e>=Xt.a&&e<=Xt.f)return e-(Xt.a-10)}function xw(e,t={}){const{dir:r,size:n=32}=t;if(n===0)return e;if(e.length>n)throw new Tw({size:e.length,targetSize:n,type:"Bytes"});const o=new Uint8Array(n);for(let i=0;i<n;i++){const s=r==="right";o[s?i:n-i-1]=e[s?i:e.length-i-1]}return o}function gl(e,t){if(Mc(e)>t)throw new Uw({givenSize:Mc(e),maxSize:t})}function U0(e,t={}){const{dir:r,size:n=32}=t;if(n===0)return e;const o=e.replace("0x","");if(o.length>n*2)throw new Mw({size:Math.ceil(o.length/2),targetSize:n,type:"Hex"});return`0x${o[r==="right"?"padEnd":"padStart"](n*2,"0")}`}const Ew=new TextEncoder;function Aw(e){return e instanceof Uint8Array?e:typeof e=="string"?Iw(e):kw(e)}function kw(e){return e instanceof Uint8Array?e:new Uint8Array(e)}function Iw(e,t={}){const{size:r}=t;let n=e;r&&(gl(e,r),n=wl(e,r));let o=n.slice(2);o.length%2&&(o=`0${o}`);const i=o.length/2,s=new Uint8Array(i);for(let a=0,c=0;a<i;a++){const l=pu(o.charCodeAt(c++)),u=pu(o.charCodeAt(c++));if(l===void 0||u===void 0)throw new et(`Invalid byte sequence ("${o[c-2]}${o[c-1]}" in "${o}").`);s[a]=l*16+u}return s}function Nw(e,t={}){const{size:r}=t,n=Ew.encode(e);return typeof r=="number"?(Cw(n,r),Sw(n,r)):n}function Sw(e,t){return xw(e,{dir:"right",size:t})}function fu(e){return e.length}class _w extends et{constructor({givenSize:t,maxSize:r}){super(`Size cannot exceed \`${r}\` bytes. Given size: \`${t}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeOverflowError"})}}class Tw extends et{constructor({size:t,targetSize:r,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${t}\`) exceeds padding size (\`${r}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeExceedsPaddingSizeError"})}}const Pw=new TextEncoder,$w=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function M0(...e){return`0x${e.reduce((t,r)=>t+r.replace("0x",""),"")}`}function Ow(e,t={}){const r=`0x${Number(e)}`;return typeof t.size=="number"?(gl(r,t.size),zs(r,t.size)):r}function z0(e,t={}){let r="";for(let o=0;o<e.length;o++)r+=$w[e[o]];const n=`0x${r}`;return typeof t.size=="number"?(gl(n,t.size),wl(n,t.size)):n}function Rw(e,t={}){const{signed:r,size:n}=t,o=BigInt(e);let i;n?r?i=(1n<<BigInt(n)*8n-1n)-1n:i=2n**(BigInt(n)*8n)-1n:typeof e=="number"&&(i=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof i=="bigint"&&r?-i-1n:0;if(i&&o>i||o<s){const c=typeof e=="bigint"?"n":"";throw new Lw({max:i?`${i}${c}`:void 0,min:`${s}${c}`,signed:r,size:n,value:`${e}${c}`})}const a=`0x${(r&&o<0?(1n<<BigInt(n*8))+BigInt(o):o).toString(16)}`;return n?zs(a,n):a}function Bw(e,t={}){return z0(Pw.encode(e),t)}function zs(e,t){return U0(e,{dir:"left",size:t})}function wl(e,t){return U0(e,{dir:"right",size:t})}function Mc(e){return Math.ceil((e.length-2)/2)}class Lw extends et{constructor({max:t,min:r,signed:n,size:o,value:i}){super(`Number \`${i}\` is not in safe${o?` ${o*8}-bit`:""}${n?" signed":" unsigned"} integer range ${t?`(\`${r}\` to \`${t}\`)`:`(above \`${r}\`)`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.IntegerOutOfRangeError"})}}class Uw extends et{constructor({givenSize:t,maxSize:r}){super(`Size cannot exceed \`${r}\` bytes. Given size: \`${t}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.SizeOverflowError"})}}class Mw extends et{constructor({size:t,targetSize:r,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (\`${t}\`) exceeds padding size (\`${r}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Hex.SizeExceedsPaddingSizeError"})}}function zw(e,t={}){const{as:r=typeof e=="string"?"Hex":"Bytes"}=t,n=g0(Aw(e));return r==="Bytes"?n:z0(n)}class Dw extends Map{constructor(t){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=t}get(t){const r=super.get(t);return super.has(t)&&r!==void 0&&(this.delete(t),super.set(t,r)),r}set(t,r){if(super.set(t,r),this.maxSize&&this.size>this.maxSize){const n=this.keys().next().value;n&&this.delete(n)}return this}}const jw={checksum:new Dw(8192)},Oa=jw.checksum,Ww=/^0x[a-fA-F0-9]{40}$/;function D0(e,t={}){const{strict:r=!0}=t;if(!Ww.test(e))throw new gu({address:e,cause:new Fw});if(r){if(e.toLowerCase()===e)return;if(Hw(e)!==e)throw new gu({address:e,cause:new Vw})}}function Hw(e){if(Oa.has(e))return Oa.get(e);D0(e,{strict:!1});const t=e.substring(2).toLowerCase(),r=zw(Nw(t),{as:"Bytes"}),n=t.split("");for(let i=0;i<40;i+=2)r[i>>1]>>4>=8&&n[i]&&(n[i]=n[i].toUpperCase()),(r[i>>1]&15)>=8&&n[i+1]&&(n[i+1]=n[i+1].toUpperCase());const o=`0x${n.join("")}`;return Oa.set(e,o),o}class gu extends et{constructor({address:t,cause:r}){super(`Address "${t}" is invalid.`,{cause:r}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidAddressError"})}}class Fw extends et{constructor(){super("Address is not a 20 byte (40 hexadecimal character) value."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidInputError"})}}class Vw extends et{constructor(){super("Address does not match its checksum counterpart."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidChecksumError"})}}const qw=/^(.*)\[([0-9]*)\]$/,Zw=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,Gw=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function zc(e,t){if(e.length!==t.length)throw new Yw({expectedLength:e.length,givenLength:t.length});const r=[];for(let n=0;n<e.length;n++){const o=e[n],i=t[n];r.push(zc.encode(o,i))}return M0(...r)}(function(e){function t(r,n,o=!1){if(r==="address"){const c=n;return D0(c),zs(c.toLowerCase(),o?32:0)}if(r==="string")return Bw(n);if(r==="bytes")return n;if(r==="bool")return zs(Ow(n),o?32:1);const i=r.match(Gw);if(i){const[c,l,u="256"]=i,d=Number.parseInt(u)/8;return Rw(n,{size:o?32:d,signed:l==="int"})}const s=r.match(Zw);if(s){const[c,l]=s;if(Number.parseInt(l)!==(n.length-2)/2)throw new Kw({expectedSize:Number.parseInt(l),value:n});return wl(n,o?32:0)}const a=r.match(qw);if(a&&Array.isArray(n)){const[c,l]=a,u=[];for(let d=0;d<n.length;d++)u.push(t(l,n[d],!0));return u.length===0?"0x":M0(...u)}throw new Jw(r)}e.encode=t})(zc||(zc={}));class Kw extends et{constructor({expectedSize:t,value:r}){super(`Size of bytes "${r}" (bytes${Mc(r)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.BytesSizeMismatchError"})}}class Yw extends et{constructor({expectedLength:t,givenLength:r}){super(["ABI encoding parameters/values length mismatch.",`Expected length (parameters): ${t}`,`Given length (values): ${r}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.LengthMismatchError"})}}class Jw extends et{constructor(t){super(`Type \`${t}\` is not a valid ABI Type.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.InvalidTypeError"})}}class j0 extends nl{constructor(t,r){super(),this.finished=!1,this.destroyed=!1,Nf(t);const n=ra(r);if(this.iHash=t.create(),typeof this.iHash.update!="function")throw new Error("Expected instance of class which extends utils.Hash");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;const o=this.blockLen,i=new Uint8Array(o);i.set(n.length>o?t.create().update(n).digest():n);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=t.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),i.fill(0)}update(t){return Xn(this),this.iHash.update(t),this}digestInto(t){Xn(this),Ti(t,this.outputLen),this.finished=!0,this.iHash.digestInto(t),this.oHash.update(t),this.oHash.digestInto(t),this.destroy()}digest(){const t=new Uint8Array(this.oHash.outputLen);return this.digestInto(t),t}_cloneInto(t){t||(t=Object.create(Object.getPrototypeOf(this),{}));const{oHash:r,iHash:n,finished:o,destroyed:i,blockLen:s,outputLen:a}=this;return t=t,t.finished=o,t.destroyed=i,t.blockLen=s,t.outputLen=a,t.oHash=r._cloneInto(t.oHash),t.iHash=n._cloneInto(t.iHash),t}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}}const W0=(e,t,r)=>new j0(e,t).update(r).digest();W0.create=(e,t)=>new j0(e,t);const Ze=BigInt(0),Be=BigInt(1),en=BigInt(2),Xw=BigInt(3),Dc=BigInt(4),wu=BigInt(5),mu=BigInt(8);function at(e,t){const r=e%t;return r>=Ze?r:t+r}function Qw(e,t,r){if(t<Ze)throw new Error("invalid exponent, negatives unsupported");if(r<=Ze)throw new Error("invalid modulus");if(r===Be)return Ze;let n=Be;for(;t>Ze;)t&Be&&(n=n*e%r),e=e*e%r,t>>=Be;return n}function yt(e,t,r){let n=e;for(;t-- >Ze;)n*=n,n%=r;return n}function jc(e,t){if(e===Ze)throw new Error("invert: expected non-zero number");if(t<=Ze)throw new Error("invert: expected positive modulus, got "+t);let r=at(e,t),n=t,o=Ze,i=Be;for(;r!==Ze;){const s=n/r,a=n%r,c=o-i*s;n=r,r=a,o=i,i=c}if(n!==Be)throw new Error("invert: does not exist");return at(o,t)}function e2(e){const t=(e-Be)/en;let r,n,o;for(r=e-Be,n=0;r%en===Ze;r/=en,n++);for(o=en;o<e&&Qw(o,t,e)!==e-Be;o++)if(o>1e3)throw new Error("Cannot find square root: likely non-prime P");if(n===1){const s=(e+Be)/Dc;return function(a,c){const l=a.pow(c,s);if(!a.eql(a.sqr(l),c))throw new Error("Cannot find square root");return l}}const i=(r+Be)/en;return function(s,a){if(s.pow(a,t)===s.neg(s.ONE))throw new Error("Cannot find square root");let c=n,l=s.pow(s.mul(s.ONE,o),r),u=s.pow(a,i),d=s.pow(a,r);for(;!s.eql(d,s.ONE);){if(s.eql(d,s.ZERO))return s.ZERO;let h=1;for(let m=s.sqr(d);h<c&&!s.eql(m,s.ONE);h++)m=s.sqr(m);const p=s.pow(l,Be<<BigInt(c-h-1));l=s.sqr(p),u=s.mul(u,p),d=s.mul(d,l),c=h}return u}}function t2(e){if(e%Dc===Xw){const t=(e+Be)/Dc;return function(r,n){const o=r.pow(n,t);if(!r.eql(r.sqr(o),n))throw new Error("Cannot find square root");return o}}if(e%mu===wu){const t=(e-wu)/mu;return function(r,n){const o=r.mul(n,en),i=r.pow(o,t),s=r.mul(n,i),a=r.mul(r.mul(s,en),i),c=r.mul(s,r.sub(a,r.ONE));if(!r.eql(r.sqr(c),n))throw new Error("Cannot find square root");return c}}return e2(e)}const r2=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function n2(e){const t={ORDER:"bigint",MASK:"bigint",BYTES:"isSafeInteger",BITS:"isSafeInteger"},r=r2.reduce((n,o)=>(n[o]="function",n),t);return Ri(e,r)}function o2(e,t,r){if(r<Ze)throw new Error("invalid exponent, negatives unsupported");if(r===Ze)return e.ONE;if(r===Be)return t;let n=e.ONE,o=t;for(;r>Ze;)r&Be&&(n=e.mul(n,o)),o=e.sqr(o),r>>=Be;return n}function i2(e,t){const r=new Array(t.length),n=t.reduce((i,s,a)=>e.is0(s)?i:(r[a]=i,e.mul(i,s)),e.ONE),o=e.inv(n);return t.reduceRight((i,s,a)=>e.is0(s)?i:(r[a]=e.mul(i,r[a]),e.mul(i,s)),o),r}function H0(e,t){const r=t!==void 0?t:e.toString(2).length,n=Math.ceil(r/8);return{nBitLength:r,nByteLength:n}}function F0(e,t,r=!1,n={}){if(e<=Ze)throw new Error("invalid field: expected ORDER > 0, got "+e);const{nBitLength:o,nByteLength:i}=H0(e,t);if(i>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");let s;const a=Object.freeze({ORDER:e,isLE:r,BITS:o,BYTES:i,MASK:fl(o),ZERO:Ze,ONE:Be,create:c=>at(c,e),isValid:c=>{if(typeof c!="bigint")throw new Error("invalid field element: expected bigint, got "+typeof c);return Ze<=c&&c<e},is0:c=>c===Ze,isOdd:c=>(c&Be)===Be,neg:c=>at(-c,e),eql:(c,l)=>c===l,sqr:c=>at(c*c,e),add:(c,l)=>at(c+l,e),sub:(c,l)=>at(c-l,e),mul:(c,l)=>at(c*l,e),pow:(c,l)=>o2(a,c,l),div:(c,l)=>at(c*jc(l,e),e),sqrN:c=>c*c,addN:(c,l)=>c+l,subN:(c,l)=>c-l,mulN:(c,l)=>c*l,inv:c=>jc(c,e),sqrt:n.sqrt||(c=>(s||(s=t2(e)),s(a,c))),invertBatch:c=>i2(a,c),cmov:(c,l,u)=>u?l:c,toBytes:c=>r?pl(c,i):io(c,i),fromBytes:c=>{if(c.length!==i)throw new Error("Field.fromBytes: expected "+i+" bytes, got "+c.length);return r?hl(c):ln(c)}});return Object.freeze(a)}function V0(e){if(typeof e!="bigint")throw new Error("field order must be bigint");const t=e.toString(2).length;return Math.ceil(t/8)}function q0(e){const t=V0(e);return t+Math.ceil(t/2)}function s2(e,t,r=!1){const n=e.length,o=V0(t),i=q0(t);if(n<16||n<i||n>1024)throw new Error("expected "+i+"-1024 bytes of input, got "+n);const s=r?hl(e):ln(e),a=at(s,t-Be)+Be;return r?pl(a,o):io(a,o)}const vu=BigInt(0),Ki=BigInt(1);function Ra(e,t){const r=t.negate();return e?r:t}function Z0(e,t){if(!Number.isSafeInteger(e)||e<=0||e>t)throw new Error("invalid window size, expected [1.."+t+"], got W="+e)}function Ba(e,t){Z0(e,t);const r=Math.ceil(t/e)+1,n=2**(e-1);return{windows:r,windowSize:n}}function a2(e,t){if(!Array.isArray(e))throw new Error("array expected");e.forEach((r,n)=>{if(!(r instanceof t))throw new Error("invalid point at index "+n)})}function c2(e,t){if(!Array.isArray(e))throw new Error("array of scalars expected");e.forEach((r,n)=>{if(!t.isValid(r))throw new Error("invalid scalar at index "+n)})}const La=new WeakMap,G0=new WeakMap;function Ua(e){return G0.get(e)||1}function l2(e,t){return{constTimeNegate:Ra,hasPrecomputes(r){return Ua(r)!==1},unsafeLadder(r,n,o=e.ZERO){let i=r;for(;n>vu;)n&Ki&&(o=o.add(i)),i=i.double(),n>>=Ki;return o},precomputeWindow(r,n){const{windows:o,windowSize:i}=Ba(n,t),s=[];let a=r,c=a;for(let l=0;l<o;l++){c=a,s.push(c);for(let u=1;u<i;u++)c=c.add(a),s.push(c);a=c.double()}return s},wNAF(r,n,o){const{windows:i,windowSize:s}=Ba(r,t);let a=e.ZERO,c=e.BASE;const l=BigInt(2**r-1),u=2**r,d=BigInt(r);for(let h=0;h<i;h++){const p=h*s;let m=Number(o&l);o>>=d,m>s&&(m-=u,o+=Ki);const g=p,f=p+Math.abs(m)-1,w=h%2!==0,v=m<0;m===0?c=c.add(Ra(w,n[g])):a=a.add(Ra(v,n[f]))}return{p:a,f:c}},wNAFUnsafe(r,n,o,i=e.ZERO){const{windows:s,windowSize:a}=Ba(r,t),c=BigInt(2**r-1),l=2**r,u=BigInt(r);for(let d=0;d<s;d++){const h=d*a;if(o===vu)break;let p=Number(o&c);if(o>>=u,p>a&&(p-=l,o+=Ki),p===0)continue;let m=n[h+Math.abs(p)-1];p<0&&(m=m.negate()),i=i.add(m)}return i},getPrecomputes(r,n,o){let i=La.get(n);return i||(i=this.precomputeWindow(n,r),r!==1&&La.set(n,o(i))),i},wNAFCached(r,n,o){const i=Ua(r);return this.wNAF(i,this.getPrecomputes(i,r,o),n)},wNAFCachedUnsafe(r,n,o,i){const s=Ua(r);return s===1?this.unsafeLadder(r,n,i):this.wNAFUnsafe(s,this.getPrecomputes(s,r,o),n,i)},setWindowSize(r,n){Z0(n,t),G0.set(r,n),La.delete(r)}}}function u2(e,t,r,n){if(a2(r,e),c2(n,t),r.length!==n.length)throw new Error("arrays of points and scalars must have equal length");const o=e.ZERO,i=R0(BigInt(r.length)),s=i>12?i-3:i>4?i-2:i?2:1,a=(1<<s)-1,c=new Array(a+1).fill(o),l=Math.floor((t.BITS-1)/s)*s;let u=o;for(let d=l;d>=0;d-=s){c.fill(o);for(let p=0;p<n.length;p++){const m=n[p],g=Number(m>>BigInt(d)&BigInt(a));c[g]=c[g].add(r[p])}let h=o;for(let p=c.length-1,m=o;p>0;p--)m=m.add(c[p]),h=h.add(m);if(u=u.add(h),d!==0)for(let p=0;p<s;p++)u=u.double()}return u}function K0(e){return n2(e.Fp),Ri(e,{n:"bigint",h:"bigint",Gx:"field",Gy:"field"},{nBitLength:"isSafeInteger",nByteLength:"isSafeInteger"}),Object.freeze({...H0(e.n,e.nBitLength),...e,p:e.Fp.ORDER})}function bu(e){e.lowS!==void 0&&ro("lowS",e.lowS),e.prehash!==void 0&&ro("prehash",e.prehash)}function d2(e){const t=K0(e);Ri(t,{a:"field",b:"field"},{allowedPrivateKeyLengths:"array",wrapPrivateKey:"boolean",isTorsionFree:"function",clearCofactor:"function",allowInfinityPoint:"boolean",fromBytes:"function",toBytes:"function"});const{endo:r,Fp:n,a:o}=t;if(r){if(!n.eql(o,n.ZERO))throw new Error("invalid endomorphism, can only be defined for Koblitz curves that have a=0");if(typeof r!="object"||typeof r.beta!="bigint"||typeof r.splitScalar!="function")throw new Error("invalid endomorphism, expected beta: bigint and splitScalar: function")}return Object.freeze({...t})}const{bytesToNumberBE:h2,hexToBytes:p2}=vw;class f2 extends Error{constructor(t=""){super(t)}}const sr={Err:f2,_tlv:{encode:(e,t)=>{const{Err:r}=sr;if(e<0||e>256)throw new r("tlv.encode: wrong tag");if(t.length&1)throw new r("tlv.encode: unpadded data");const n=t.length/2,o=Wn(n);if(o.length/2&128)throw new r("tlv.encode: long form length too big");const i=n>127?Wn(o.length/2|128):"";return Wn(e)+i+o+t},decode(e,t){const{Err:r}=sr;let n=0;if(e<0||e>256)throw new r("tlv.encode: wrong tag");if(t.length<2||t[n++]!==e)throw new r("tlv.decode: wrong tlv");const o=t[n++],i=!!(o&128);let s=0;if(!i)s=o;else{const c=o&127;if(!c)throw new r("tlv.decode(long): indefinite length not supported");if(c>4)throw new r("tlv.decode(long): byte length is too big");const l=t.subarray(n,n+c);if(l.length!==c)throw new r("tlv.decode: length bytes not complete");if(l[0]===0)throw new r("tlv.decode(long): zero leftmost byte");for(const u of l)s=s<<8|u;if(n+=c,s<128)throw new r("tlv.decode(long): not minimal encoding")}const a=t.subarray(n,n+s);if(a.length!==s)throw new r("tlv.decode: wrong value length");return{v:a,l:t.subarray(n+s)}}},_int:{encode(e){const{Err:t}=sr;if(e<cr)throw new t("integer: negative integers are not allowed");let r=Wn(e);if(Number.parseInt(r[0],16)&8&&(r="00"+r),r.length&1)throw new t("unexpected DER parsing assertion: unpadded hex");return r},decode(e){const{Err:t}=sr;if(e[0]&128)throw new t("invalid signature integer: negative");if(e[0]===0&&!(e[1]&128))throw new t("invalid signature integer: unnecessary leading zero");return h2(e)}},toSig(e){const{Err:t,_int:r,_tlv:n}=sr,o=typeof e=="string"?p2(e):e;Oi(o);const{v:i,l:s}=n.decode(48,o);if(s.length)throw new t("invalid signature: left bytes after parsing");const{v:a,l:c}=n.decode(2,i),{v:l,l:u}=n.decode(2,c);if(u.length)throw new t("invalid signature: left bytes after parsing");return{r:r.decode(a),s:r.decode(l)}},hexFromSig(e){const{_tlv:t,_int:r}=sr,n=t.encode(2,r.encode(e.r)),o=t.encode(2,r.encode(e.s)),i=n+o;return t.encode(48,i)}},cr=BigInt(0),Fe=BigInt(1);BigInt(2);const yu=BigInt(3);BigInt(4);function g2(e){const t=d2(e),{Fp:r}=t,n=F0(t.n,t.nBitLength),o=t.toBytes||((g,f,w)=>{const v=f.toAffine();return yi(Uint8Array.from([4]),r.toBytes(v.x),r.toBytes(v.y))}),i=t.fromBytes||(g=>{const f=g.subarray(1),w=r.fromBytes(f.subarray(0,r.BYTES)),v=r.fromBytes(f.subarray(r.BYTES,2*r.BYTES));return{x:w,y:v}});function s(g){const{a:f,b:w}=t,v=r.sqr(g),b=r.mul(v,g);return r.add(r.add(b,r.mul(g,f)),w)}if(!r.eql(r.sqr(t.Gy),s(t.Gx)))throw new Error("bad generator point: equation left != right");function a(g){return la(g,Fe,t.n)}function c(g){const{allowedPrivateKeyLengths:f,nByteLength:w,wrapPrivateKey:v,n:b}=t;if(f&&typeof g!="bigint"){if(mn(g)&&(g=no(g)),typeof g!="string"||!f.includes(g.length))throw new Error("invalid private key");g=g.padStart(w*2,"0")}let k;try{k=typeof g=="bigint"?g:ln(Bt("private key",g,w))}catch{throw new Error("invalid private key, expected hex or "+w+" bytes, got "+typeof g)}return v&&(k=at(k,b)),un("private key",k,Fe,b),k}function l(g){if(!(g instanceof h))throw new Error("ProjectivePoint expected")}const u=Uc((g,f)=>{const{px:w,py:v,pz:b}=g;if(r.eql(b,r.ONE))return{x:w,y:v};const k=g.is0();f==null&&(f=k?r.ONE:r.inv(b));const $=r.mul(w,f),S=r.mul(v,f),R=r.mul(b,f);if(k)return{x:r.ZERO,y:r.ZERO};if(!r.eql(R,r.ONE))throw new Error("invZ was invalid");return{x:$,y:S}}),d=Uc(g=>{if(g.is0()){if(t.allowInfinityPoint&&!r.is0(g.py))return;throw new Error("bad point: ZERO")}const{x:f,y:w}=g.toAffine();if(!r.isValid(f)||!r.isValid(w))throw new Error("bad point: x or y not FE");const v=r.sqr(w),b=s(f);if(!r.eql(v,b))throw new Error("bad point: equation left != right");if(!g.isTorsionFree())throw new Error("bad point: not in prime-order subgroup");return!0});class h{constructor(f,w,v){if(this.px=f,this.py=w,this.pz=v,f==null||!r.isValid(f))throw new Error("x required");if(w==null||!r.isValid(w))throw new Error("y required");if(v==null||!r.isValid(v))throw new Error("z required");Object.freeze(this)}static fromAffine(f){const{x:w,y:v}=f||{};if(!f||!r.isValid(w)||!r.isValid(v))throw new Error("invalid affine point");if(f instanceof h)throw new Error("projective point not allowed");const b=k=>r.eql(k,r.ZERO);return b(w)&&b(v)?h.ZERO:new h(w,v,r.ONE)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}static normalizeZ(f){const w=r.invertBatch(f.map(v=>v.pz));return f.map((v,b)=>v.toAffine(w[b])).map(h.fromAffine)}static fromHex(f){const w=h.fromAffine(i(Bt("pointHex",f)));return w.assertValidity(),w}static fromPrivateKey(f){return h.BASE.multiply(c(f))}static msm(f,w){return u2(h,n,f,w)}_setWindowSize(f){m.setWindowSize(this,f)}assertValidity(){d(this)}hasEvenY(){const{y:f}=this.toAffine();if(r.isOdd)return!r.isOdd(f);throw new Error("Field doesn't support isOdd")}equals(f){l(f);const{px:w,py:v,pz:b}=this,{px:k,py:$,pz:S}=f,R=r.eql(r.mul(w,S),r.mul(k,b)),P=r.eql(r.mul(v,S),r.mul($,b));return R&&P}negate(){return new h(this.px,r.neg(this.py),this.pz)}double(){const{a:f,b:w}=t,v=r.mul(w,yu),{px:b,py:k,pz:$}=this;let S=r.ZERO,R=r.ZERO,P=r.ZERO,I=r.mul(b,b),L=r.mul(k,k),O=r.mul($,$),U=r.mul(b,k);return U=r.add(U,U),P=r.mul(b,$),P=r.add(P,P),S=r.mul(f,P),R=r.mul(v,O),R=r.add(S,R),S=r.sub(L,R),R=r.add(L,R),R=r.mul(S,R),S=r.mul(U,S),P=r.mul(v,P),O=r.mul(f,O),U=r.sub(I,O),U=r.mul(f,U),U=r.add(U,P),P=r.add(I,I),I=r.add(P,I),I=r.add(I,O),I=r.mul(I,U),R=r.add(R,I),O=r.mul(k,$),O=r.add(O,O),I=r.mul(O,U),S=r.sub(S,I),P=r.mul(O,L),P=r.add(P,P),P=r.add(P,P),new h(S,R,P)}add(f){l(f);const{px:w,py:v,pz:b}=this,{px:k,py:$,pz:S}=f;let R=r.ZERO,P=r.ZERO,I=r.ZERO;const L=t.a,O=r.mul(t.b,yu);let U=r.mul(w,k),H=r.mul(v,$),E=r.mul(b,S),C=r.add(w,v),x=r.add(k,$);C=r.mul(C,x),x=r.add(U,H),C=r.sub(C,x),x=r.add(w,b);let T=r.add(k,S);return x=r.mul(x,T),T=r.add(U,E),x=r.sub(x,T),T=r.add(v,b),R=r.add($,S),T=r.mul(T,R),R=r.add(H,E),T=r.sub(T,R),I=r.mul(L,x),R=r.mul(O,E),I=r.add(R,I),R=r.sub(H,I),I=r.add(H,I),P=r.mul(R,I),H=r.add(U,U),H=r.add(H,U),E=r.mul(L,E),x=r.mul(O,x),H=r.add(H,E),E=r.sub(U,E),E=r.mul(L,E),x=r.add(x,E),U=r.mul(H,x),P=r.add(P,U),U=r.mul(T,x),R=r.mul(C,R),R=r.sub(R,U),U=r.mul(C,H),I=r.mul(T,I),I=r.add(I,U),new h(R,P,I)}subtract(f){return this.add(f.negate())}is0(){return this.equals(h.ZERO)}wNAF(f){return m.wNAFCached(this,f,h.normalizeZ)}multiplyUnsafe(f){const{endo:w,n:v}=t;un("scalar",f,cr,v);const b=h.ZERO;if(f===cr)return b;if(this.is0()||f===Fe)return this;if(!w||m.hasPrecomputes(this))return m.wNAFCachedUnsafe(this,f,h.normalizeZ);let{k1neg:k,k1:$,k2neg:S,k2:R}=w.splitScalar(f),P=b,I=b,L=this;for(;$>cr||R>cr;)$&Fe&&(P=P.add(L)),R&Fe&&(I=I.add(L)),L=L.double(),$>>=Fe,R>>=Fe;return k&&(P=P.negate()),S&&(I=I.negate()),I=new h(r.mul(I.px,w.beta),I.py,I.pz),P.add(I)}multiply(f){const{endo:w,n:v}=t;un("scalar",f,Fe,v);let b,k;if(w){const{k1neg:$,k1:S,k2neg:R,k2:P}=w.splitScalar(f);let{p:I,f:L}=this.wNAF(S),{p:O,f:U}=this.wNAF(P);I=m.constTimeNegate($,I),O=m.constTimeNegate(R,O),O=new h(r.mul(O.px,w.beta),O.py,O.pz),b=I.add(O),k=L.add(U)}else{const{p:$,f:S}=this.wNAF(f);b=$,k=S}return h.normalizeZ([b,k])[0]}multiplyAndAddUnsafe(f,w,v){const b=h.BASE,k=(S,R)=>R===cr||R===Fe||!S.equals(b)?S.multiplyUnsafe(R):S.multiply(R),$=k(this,w).add(k(f,v));return $.is0()?void 0:$}toAffine(f){return u(this,f)}isTorsionFree(){const{h:f,isTorsionFree:w}=t;if(f===Fe)return!0;if(w)return w(h,this);throw new Error("isTorsionFree() has not been declared for the elliptic curve")}clearCofactor(){const{h:f,clearCofactor:w}=t;return f===Fe?this:w?w(h,this):this.multiplyUnsafe(t.h)}toRawBytes(f=!0){return ro("isCompressed",f),this.assertValidity(),o(h,this,f)}toHex(f=!0){return ro("isCompressed",f),no(this.toRawBytes(f))}}h.BASE=new h(t.Gx,t.Gy,r.ONE),h.ZERO=new h(r.ZERO,r.ONE,r.ZERO);const p=t.nBitLength,m=l2(h,t.endo?Math.ceil(p/2):p);return{CURVE:t,ProjectivePoint:h,normPrivateKeyToScalar:c,weierstrassEquation:s,isWithinCurveOrder:a}}function w2(e){const t=K0(e);return Ri(t,{hash:"hash",hmac:"function",randomBytes:"function"},{bits2int:"function",bits2int_modN:"function",lowS:"boolean"}),Object.freeze({lowS:!0,...t})}function m2(e){const t=w2(e),{Fp:r,n}=t,o=r.BYTES+1,i=2*r.BYTES+1;function s(E){return at(E,n)}function a(E){return jc(E,n)}const{ProjectivePoint:c,normPrivateKeyToScalar:l,weierstrassEquation:u,isWithinCurveOrder:d}=g2({...t,toBytes(E,C,x){const T=C.toAffine(),_=r.toBytes(T.x),B=yi;return ro("isCompressed",x),x?B(Uint8Array.from([C.hasEvenY()?2:3]),_):B(Uint8Array.from([4]),_,r.toBytes(T.y))},fromBytes(E){const C=E.length,x=E[0],T=E.subarray(1);if(C===o&&(x===2||x===3)){const _=ln(T);if(!la(_,Fe,r.ORDER))throw new Error("Point is not on curve");const B=u(_);let z;try{z=r.sqrt(B)}catch(q){const ne=q instanceof Error?": "+q.message:"";throw new Error("Point is not on curve"+ne)}const D=(z&Fe)===Fe;return(x&1)===1!==D&&(z=r.neg(z)),{x:_,y:z}}else if(C===i&&x===4){const _=r.fromBytes(T.subarray(0,r.BYTES)),B=r.fromBytes(T.subarray(r.BYTES,2*r.BYTES));return{x:_,y:B}}else{const _=o,B=i;throw new Error("invalid Point, expected length of "+_+", or uncompressed "+B+", got "+C)}}}),h=E=>no(io(E,t.nByteLength));function p(E){const C=n>>Fe;return E>C}function m(E){return p(E)?s(-E):E}const g=(E,C,x)=>ln(E.slice(C,x));class f{constructor(C,x,T){this.r=C,this.s=x,this.recovery=T,this.assertValidity()}static fromCompact(C){const x=t.nByteLength;return C=Bt("compactSignature",C,x*2),new f(g(C,0,x),g(C,x,2*x))}static fromDER(C){const{r:x,s:T}=sr.toSig(Bt("DER",C));return new f(x,T)}assertValidity(){un("r",this.r,Fe,n),un("s",this.s,Fe,n)}addRecoveryBit(C){return new f(this.r,this.s,C)}recoverPublicKey(C){const{r:x,s:T,recovery:_}=this,B=S(Bt("msgHash",C));if(_==null||![0,1,2,3].includes(_))throw new Error("recovery id invalid");const z=_===2||_===3?x+t.n:x;if(z>=r.ORDER)throw new Error("recovery id 2 or 3 invalid");const D=(_&1)===0?"02":"03",q=c.fromHex(D+h(z)),ne=a(z),oe=s(-B*ne),pe=s(T*ne),ve=c.BASE.multiplyAndAddUnsafe(q,oe,pe);if(!ve)throw new Error("point at infinify");return ve.assertValidity(),ve}hasHighS(){return p(this.s)}normalizeS(){return this.hasHighS()?new f(this.r,s(-this.s),this.recovery):this}toDERRawBytes(){return oo(this.toDERHex())}toDERHex(){return sr.hexFromSig({r:this.r,s:this.s})}toCompactRawBytes(){return oo(this.toCompactHex())}toCompactHex(){return h(this.r)+h(this.s)}}const w={isValidPrivateKey(E){try{return l(E),!0}catch{return!1}},normPrivateKeyToScalar:l,randomPrivateKey:()=>{const E=q0(t.n);return s2(t.randomBytes(E),t.n)},precompute(E=8,C=c.BASE){return C._setWindowSize(E),C.multiply(BigInt(3)),C}};function v(E,C=!0){return c.fromPrivateKey(E).toRawBytes(C)}function b(E){const C=mn(E),x=typeof E=="string",T=(C||x)&&E.length;return C?T===o||T===i:x?T===2*o||T===2*i:E instanceof c}function k(E,C,x=!0){if(b(E))throw new Error("first arg must be private key");if(!b(C))throw new Error("second arg must be public key");return c.fromHex(C).multiply(l(E)).toRawBytes(x)}const $=t.bits2int||function(E){if(E.length>8192)throw new Error("input is too large");const C=ln(E),x=E.length*8-t.nBitLength;return x>0?C>>BigInt(x):C},S=t.bits2int_modN||function(E){return s($(E))},R=fl(t.nBitLength);function P(E){return un("num < 2^"+t.nBitLength,E,cr,R),io(E,t.nByteLength)}function I(E,C,x=L){if(["recovered","canonical"].some(Ae=>Ae in x))throw new Error("sign() legacy options not supported");const{hash:T,randomBytes:_}=t;let{lowS:B,prehash:z,extraEntropy:D}=x;B==null&&(B=!0),E=Bt("msgHash",E),bu(x),z&&(E=Bt("prehashed msgHash",T(E)));const q=S(E),ne=l(C),oe=[P(ne),P(q)];if(D!=null&&D!==!1){const Ae=D===!0?_(r.BYTES):D;oe.push(Bt("extraEntropy",Ae))}const pe=yi(...oe),ve=q;function Pe(Ae){const ke=$(Ae);if(!d(ke))return;const $e=a(ke),Ue=c.BASE.multiply(ke).toAffine(),Oe=s(Ue.x);if(Oe===cr)return;const Me=s($e*s(ve+Oe*ne));if(Me===cr)return;let St=(Ue.x===Oe?0:2)|Number(Ue.y&Fe),ho=Me;return B&&p(Me)&&(ho=m(Me),St^=1),new f(Oe,ho,St)}return{seed:pe,k2sig:Pe}}const L={lowS:t.lowS,prehash:!1},O={lowS:t.lowS,prehash:!1};function U(E,C,x=L){const{seed:T,k2sig:_}=I(E,C,x),B=t;return B0(B.hash.outputLen,B.nByteLength,B.hmac)(T,_)}c.BASE._setWindowSize(8);function H(E,C,x,T=O){var Me;const _=E;C=Bt("msgHash",C),x=Bt("publicKey",x);const{lowS:B,prehash:z,format:D}=T;if(bu(T),"strict"in T)throw new Error("options.strict was renamed to lowS");if(D!==void 0&&D!=="compact"&&D!=="der")throw new Error("format must be compact or der");const q=typeof _=="string"||mn(_),ne=!q&&!D&&typeof _=="object"&&_!==null&&typeof _.r=="bigint"&&typeof _.s=="bigint";if(!q&&!ne)throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");let oe,pe;try{if(ne&&(oe=new f(_.r,_.s)),q){try{D!=="compact"&&(oe=f.fromDER(_))}catch(St){if(!(St instanceof sr.Err))throw St}!oe&&D!=="der"&&(oe=f.fromCompact(_))}pe=c.fromHex(x)}catch{return!1}if(!oe||B&&oe.hasHighS())return!1;z&&(C=t.hash(C));const{r:ve,s:Pe}=oe,Ae=S(C),ke=a(Pe),$e=s(Ae*ke),Ue=s(ve*ke),Oe=(Me=c.BASE.multiplyAndAddUnsafe(pe,$e,Ue))==null?void 0:Me.toAffine();return Oe?s(Oe.x)===ve:!1}return{CURVE:t,getPublicKey:v,getSharedSecret:k,sign:U,verify:H,ProjectivePoint:c,Signature:f,utils:w}}function v2(e){return{hash:e,hmac:(t,...r)=>W0(e,t,Uf(...r)),randomBytes:Mf}}function b2(e,t){const r=n=>m2({...e,...v2(n)});return{...r(t),create:r}}const Y0=BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),Cu=BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),y2=BigInt(1),Wc=BigInt(2),xu=(e,t)=>(e+t/Wc)/t;function C2(e){const t=Y0,r=BigInt(3),n=BigInt(6),o=BigInt(11),i=BigInt(22),s=BigInt(23),a=BigInt(44),c=BigInt(88),l=e*e*e%t,u=l*l*e%t,d=yt(u,r,t)*u%t,h=yt(d,r,t)*u%t,p=yt(h,Wc,t)*l%t,m=yt(p,o,t)*p%t,g=yt(m,i,t)*m%t,f=yt(g,a,t)*g%t,w=yt(f,c,t)*f%t,v=yt(w,a,t)*g%t,b=yt(v,r,t)*u%t,k=yt(b,s,t)*m%t,$=yt(k,n,t)*l%t,S=yt($,Wc,t);if(!Hc.eql(Hc.sqr(S),e))throw new Error("Cannot find square root");return S}const Hc=F0(Y0,void 0,void 0,{sqrt:C2});b2({a:BigInt(0),b:BigInt(7),Fp:Hc,n:Cu,Gx:BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),Gy:BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),h:BigInt(1),lowS:!0,endo:{beta:BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),splitScalar:e=>{const t=Cu,r=BigInt("0x3086d221a7d46bcde86c90e49284eb15"),n=-y2*BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),o=BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),i=r,s=BigInt("0x100000000000000000000000000000000"),a=xu(i*e,t),c=xu(-n*e,t);let l=at(e-a*r-c*o,t),u=at(-a*n-c*i,t);const d=l>s,h=u>s;if(d&&(l=t-l),h&&(u=t-u),l>s||u>s)throw new Error("splitScalar: Endomorphism failed, k="+e);return{k1neg:d,k1:l,k2neg:h,k2:u}}}},I0),BigInt(0);const Ma={createBalance(e,t){const r={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:r.name,symbol:r.symbol,chainId:t,address:e.address==="native"?void 0:this.convertAddressToCAIP10Address(e.address,t),value:r.value,price:r.price,quantity:{decimals:r.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:r.decimals})},iconUrl:r.iconUrl}},convertHexToBalance({hex:e,decimals:t}){return v0(BigInt(e),t)},convertAddressToCAIP10Address(e,t){return`${t}:${e}`},createCAIP2ChainId(e,t){return`${t}:${parseInt(e,16)}`},getChainIdHexFromCAIP2ChainId(e){const t=e.split(":");if(t.length<2||!t[1])return"0x0";const r=t[1],n=parseInt(r,10);return isNaN(n)?"0x0":`0x${n.toString(16)}`},isWalletGetAssetsResponse(e){return typeof e!="object"||e===null?!1:Object.values(e).every(t=>Array.isArray(t)&&t.every(r=>this.isValidAsset(r)))},isValidAsset(e){return typeof e=="object"&&e!==null&&typeof e.address=="string"&&typeof e.balance=="string"&&(e.type==="ERC20"||e.type==="NATIVE")&&typeof e.metadata=="object"&&e.metadata!==null&&typeof e.metadata.name=="string"&&typeof e.metadata.symbol=="string"&&typeof e.metadata.decimals=="number"&&typeof e.metadata.price=="number"&&typeof e.metadata.iconUrl=="string"}},Eu={async getMyTokensWithBalance(e){const t=ee.state.address,r=y.state.activeCaipNetwork;if(!t||!r)return[];if(r.chainNamespace==="eip155"){const o=await this.getEIP155Balances(t,r);if(o)return this.filterLowQualityTokens(o)}const n=await ce.getBalance(t,r.caipNetworkId,e);return this.filterLowQualityTokens(n.balances)},async getEIP155Balances(e,t){var r,n,o;try{const i=Ma.getChainIdHexFromCAIP2ChainId(t.caipNetworkId);if(!((o=(n=(r=await Q.getCapabilities(e))==null?void 0:r[i])==null?void 0:n.assetDiscovery)!=null&&o.supported))return null;const s=await Q.walletGetAssets({account:e,chainFilter:[i]});return Ma.isWalletGetAssetsResponse(s)?(s[i]||[]).map(a=>Ma.createBalance(a,t.caipNetworkId)):null}catch{return null}},filterLowQualityTokens(e){return e.filter(t=>t.quantity.decimals!=="0")},mapBalancesToSwapTokens(e){return(e==null?void 0:e.map(t=>({...t,address:t!=null&&t.address?t.address:y.getActiveNetworkTokenAddress(),decimals:parseInt(t.quantity.decimals,10),logoUri:t.iconUrl,eip2612:!1})))||[]}},fe=Ne({tokenBalances:[],loading:!1}),Au={state:fe,subscribe(e){return Xe(fe,()=>e(fe))},subscribeKey(e,t){return tt(fe,e,t)},setToken(e){e&&(fe.token=pn(e))},setTokenAmount(e){fe.sendTokenAmount=e},setReceiverAddress(e){fe.receiverAddress=e},setReceiverProfileImageUrl(e){fe.receiverProfileImageUrl=e},setReceiverProfileName(e){fe.receiverProfileName=e},setGasPrice(e){fe.gasPrice=e},setGasPriceInUsd(e){fe.gasPriceInUSD=e},setNetworkBalanceInUsd(e){fe.networkBalanceInUSD=e},setLoading(e){fe.loading=e},sendToken(){var e;switch((e=y.state.activeCaipNetwork)==null?void 0:e.chainNamespace){case"eip155":this.sendEvmToken();return;case"solana":this.sendSolanaToken();return;default:throw new Error("Unsupported chain")}},sendEvmToken(){var r,n,o,i,s,a;const e=y.state.activeChain,t=(r=ee.state.preferredAccountTypes)==null?void 0:r[e];(n=this.state.token)!=null&&n.address&&this.state.sendTokenAmount&&this.state.receiverAddress?(he.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===Er.ACCOUNT_TYPES.SMART_ACCOUNT,token:this.state.token.address,amount:this.state.sendTokenAmount,network:((o=y.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)||""}}),this.sendERC20Token({receiverAddress:this.state.receiverAddress,tokenAddress:this.state.token.address,sendTokenAmount:this.state.sendTokenAmount,decimals:this.state.token.quantity.decimals})):this.state.receiverAddress&&this.state.sendTokenAmount&&this.state.gasPrice&&((i=this.state.token)!=null&&i.quantity.decimals)&&(he.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:t===Er.ACCOUNT_TYPES.SMART_ACCOUNT,token:(s=this.state.token)==null?void 0:s.symbol,amount:this.state.sendTokenAmount,network:((a=y.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)||""}}),this.sendNativeToken({receiverAddress:this.state.receiverAddress,sendTokenAmount:this.state.sendTokenAmount,gasPrice:this.state.gasPrice,decimals:this.state.token.quantity.decimals}))},async fetchTokenBalance(e){var i,s;fe.loading=!0;const t=(i=y.state.activeCaipNetwork)==null?void 0:i.caipNetworkId,r=(s=y.state.activeCaipNetwork)==null?void 0:s.chainNamespace,n=y.state.activeCaipAddress,o=n?j.getPlainAddress(n):void 0;if(fe.lastRetry&&!j.isAllowedRetry(fe.lastRetry,30*je.ONE_SEC_MS))return fe.loading=!1,[];try{if(o&&t&&r){const a=await Eu.getMyTokensWithBalance();return fe.tokenBalances=a,fe.lastRetry=void 0,a}}catch(a){fe.lastRetry=Date.now(),e==null||e(a),Ie.showError("Token Balance Unavailable")}finally{fe.loading=!1}return[]},fetchNetworkBalance(){if(fe.tokenBalances.length===0)return;const e=Eu.mapBalancesToSwapTokens(fe.tokenBalances);if(!e)return;const t=e.find(r=>r.address===y.getActiveNetworkTokenAddress());t&&(fe.networkBalanceInUSD=t?Wi.multiply(t.quantity.numeric,t.price).toString():"0")},isInsufficientNetworkTokenForGas(e,t){const r=t||"0";return Wi.bigNumber(e).eq(0)?!0:Wi.bigNumber(Wi.bigNumber(r)).gt(e)},hasInsufficientGasFunds(){var r;const e=y.state.activeChain;let t=!0;return((r=ee.state.preferredAccountTypes)==null?void 0:r[e])===Er.ACCOUNT_TYPES.SMART_ACCOUNT?t=!1:fe.networkBalanceInUSD&&(t=this.isInsufficientNetworkTokenForGas(fe.networkBalanceInUSD,fe.gasPriceInUSD)),t},async sendNativeToken(e){var s,a,c,l,u,d;const t=y.state.activeChain;V.pushTransactionStack({view:"Account",goBack:!1});const r=e.receiverAddress,n=ee.state.address,o=Q.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals)),i="0x";try{await Q.sendTransaction({chainNamespace:"eip155",to:r,address:n,data:i,value:o??BigInt(0),gasPrice:e.gasPrice}),Ie.showSuccess("Transaction started"),he.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:((s=ee.state.preferredAccountTypes)==null?void 0:s[t])===Er.ACCOUNT_TYPES.SMART_ACCOUNT,token:((a=this.state.token)==null?void 0:a.symbol)||"",amount:e.sendTokenAmount,network:((c=y.state.activeCaipNetwork)==null?void 0:c.caipNetworkId)||""}}),this.resetSend()}catch(h){console.error("SendController:sendERC20Token - failed to send native token",h);const p=h instanceof Error?h.message:"Unknown error";he.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:p,isSmartAccount:((l=ee.state.preferredAccountTypes)==null?void 0:l[t])===Er.ACCOUNT_TYPES.SMART_ACCOUNT,token:((u=this.state.token)==null?void 0:u.symbol)||"",amount:e.sendTokenAmount,network:((d=y.state.activeCaipNetwork)==null?void 0:d.caipNetworkId)||""}}),Ie.showError("Something went wrong")}},async sendERC20Token(e){var r,n,o;V.pushTransactionStack({view:"Account",goBack:!1});const t=Q.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals));try{if(ee.state.address&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){const i=j.getPlainAddress(e.tokenAddress);await Q.writeContract({fromAddress:ee.state.address,tokenAddress:i,args:[e.receiverAddress,t??BigInt(0)],method:"transfer",abi:Gp.getERC20Abi(i),chainNamespace:"eip155"}),Ie.showSuccess("Transaction started"),this.resetSend()}}catch(i){console.error("SendController:sendERC20Token - failed to send erc20 token",i);const s=i instanceof Error?i.message:"Unknown error";he.sendEvent({type:"track",event:"SEND_ERROR",properties:{message:s,isSmartAccount:((r=ee.state.preferredAccountTypes)==null?void 0:r.eip155)===Er.ACCOUNT_TYPES.SMART_ACCOUNT,token:((n=this.state.token)==null?void 0:n.symbol)||"",amount:e.sendTokenAmount,network:((o=y.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)||""}}),Ie.showError("Something went wrong")}},sendSolanaToken(){if(!this.state.sendTokenAmount||!this.state.receiverAddress){Ie.showError("Please enter a valid amount and receiver address");return}V.pushTransactionStack({view:"Account",goBack:!1}),Q.sendTransaction({chainNamespace:"solana",to:this.state.receiverAddress,value:this.state.sendTokenAmount}).then(()=>{this.resetSend(),ee.fetchTokenBalance()}).catch(e=>{Ie.showError("Failed to send transaction. Please try again."),console.error("SendController:sendToken - failed to send solana transaction",e)})},resetSend(){fe.token=void 0,fe.sendTokenAmount=void 0,fe.receiverAddress=void 0,fe.receiverProfileImageUrl=void 0,fe.receiverProfileName=void 0,fe.loading=!1,fe.tokenBalances=[]}},za={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[],user:void 0},Yi={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},F=Ne({chains:ef(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{networkControllerClient:void 0,connectionControllerClient:void 0},isSwitchingNamespace:!1}),y={state:F,subscribe(e){return Xe(F,()=>{e(F)})},subscribeKey(e,t){return tt(F,e,t)},subscribeChainProp(e,t,r){let n;return Xe(F.chains,()=>{var i;const o=r||F.activeChain;if(o){const s=(i=F.chains.get(o))==null?void 0:i[e];n!==s&&(n=s,t(s))}})},initialize(e,t,r){const{chainId:n,namespace:o}=X.getActiveNetworkProps(),i=t==null?void 0:t.find(c=>c.id.toString()===(n==null?void 0:n.toString())),s=e.find(c=>(c==null?void 0:c.namespace)===o)||(e==null?void 0:e[0]),a=new Set([...(t==null?void 0:t.map(c=>c.chainNamespace))??[]]);((e==null?void 0:e.length)===0||!s)&&(F.noAdapters=!0),F.noAdapters||(F.activeChain=s==null?void 0:s.namespace,F.activeCaipNetwork=i,this.setChainNetworkData(s==null?void 0:s.namespace,{caipNetwork:i}),F.activeChain&&ur.set({activeChain:s==null?void 0:s.namespace})),a.forEach(c=>{const l=t==null?void 0:t.filter(u=>u.chainNamespace===c);y.state.chains.set(c,{namespace:c,networkState:Ne({...Yi,caipNetwork:l==null?void 0:l[0]}),accountState:Ne(za),caipNetworks:l??[],...r}),this.setRequestedCaipNetworks(l??[],c)})},removeAdapter(e){var t,r;if(F.activeChain===e){const n=Array.from(F.chains.entries()).find(([o])=>o!==e);if(n){const o=(r=(t=n[1])==null?void 0:t.caipNetworks)==null?void 0:r[0];o&&this.setActiveCaipNetwork(o)}}F.chains.delete(e)},addAdapter(e,{networkControllerClient:t,connectionControllerClient:r},n){F.chains.set(e.namespace,{namespace:e.namespace,networkState:{...Yi,caipNetwork:n[0]},accountState:za,caipNetworks:n,connectionControllerClient:r,networkControllerClient:t}),this.setRequestedCaipNetworks((n==null?void 0:n.filter(o=>o.chainNamespace===e.namespace))??[],e.namespace)},addNetwork(e){var r;const t=F.chains.get(e.chainNamespace);if(t){const n=[...t.caipNetworks||[]];(r=t.caipNetworks)!=null&&r.find(o=>o.id===e.id)||n.push(e),F.chains.set(e.chainNamespace,{...t,caipNetworks:n}),this.setRequestedCaipNetworks(n,e.chainNamespace)}},removeNetwork(e,t){var n,o,i;const r=F.chains.get(e);if(r){const s=((n=F.activeCaipNetwork)==null?void 0:n.id)===t,a=[...((o=r.caipNetworks)==null?void 0:o.filter(c=>c.id!==t))||[]];s&&((i=r==null?void 0:r.caipNetworks)!=null&&i[0])&&this.setActiveCaipNetwork(r.caipNetworks[0]),F.chains.set(e,{...r,caipNetworks:a}),this.setRequestedCaipNetworks(a||[],e)}},setAdapterNetworkState(e,t){const r=F.chains.get(e);r&&(r.networkState={...r.networkState||Yi,...t},F.chains.set(e,r))},setChainAccountData(e,t,r=!0){if(!e)throw new Error("Chain is required to update chain account data");const n=F.chains.get(e);if(n){const o={...n.accountState||za,...t};F.chains.set(e,{...n,accountState:o}),(F.chains.size===1||F.activeChain===e)&&(t.caipAddress&&(F.activeCaipAddress=t.caipAddress),ee.replaceState(o))}},setChainNetworkData(e,t){if(!e)return;const r=F.chains.get(e);if(r){const n={...r.networkState||Yi,...t};F.chains.set(e,{...r,networkState:n})}},setAccountProp(e,t,r,n=!0){this.setChainAccountData(r,{[e]:t},n),e==="status"&&t==="disconnected"&&r&&G.removeConnectorId(r)},setActiveNamespace(e){var n,o;F.activeChain=e;const t=e?F.chains.get(e):void 0,r=(n=t==null?void 0:t.networkState)==null?void 0:n.caipNetwork;r!=null&&r.id&&e&&(F.activeCaipAddress=(o=t==null?void 0:t.accountState)==null?void 0:o.caipAddress,F.activeCaipNetwork=r,this.setChainNetworkData(e,{caipNetwork:r}),X.setActiveCaipNetworkId(r==null?void 0:r.caipNetworkId),ur.set({activeChain:e,selectedNetworkId:r==null?void 0:r.caipNetworkId}))},setActiveCaipNetwork(e){var r,n,o;if(!e)return;F.activeChain!==e.chainNamespace&&this.setIsSwitchingNamespace(!0);const t=F.chains.get(e.chainNamespace);F.activeChain=e.chainNamespace,F.activeCaipNetwork=e,this.setChainNetworkData(e.chainNamespace,{caipNetwork:e}),(r=t==null?void 0:t.accountState)!=null&&r.address?F.activeCaipAddress=`${e.chainNamespace}:${e.id}:${(n=t==null?void 0:t.accountState)==null?void 0:n.address}`:F.activeCaipAddress=void 0,this.setAccountProp("caipAddress",F.activeCaipAddress,e.chainNamespace),t&&ee.replaceState(t.accountState),Au.resetSend(),ur.set({activeChain:F.activeChain,selectedNetworkId:(o=F.activeCaipNetwork)==null?void 0:o.caipNetworkId}),X.setActiveCaipNetworkId(e.caipNetworkId),!this.checkIfSupportedNetwork(e.chainNamespace)&&M.state.enableNetworkSwitch&&!M.state.allowUnsupportedChain&&!Q.state.wcBasic&&this.showUnsupportedChainUI()},addCaipNetwork(e){var r;if(!e)return;const t=F.chains.get(e.chainNamespace);t&&((r=t==null?void 0:t.caipNetworks)==null||r.push(e))},async switchActiveNamespace(e){var o;if(!e)return;const t=e!==y.state.activeChain,r=(o=y.getNetworkData(e))==null?void 0:o.caipNetwork,n=y.getCaipNetworkByNamespace(e,r==null?void 0:r.id);t&&n&&await y.switchActiveNetwork(n)},async switchActiveNetwork(e){var r,n;!((n=(r=y.state.chains.get(y.state.activeChain))==null?void 0:r.caipNetworks)!=null&&n.some(o=>{var i;return o.id===((i=F.activeCaipNetwork)==null?void 0:i.id)}))&&V.goBack();const t=this.getNetworkControllerClient(e.chainNamespace);t&&(await t.switchCaipNetwork(e),he.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}}))},getNetworkControllerClient(e){const t=e||F.activeChain,r=F.chains.get(t);if(!r)throw new Error("Chain adapter not found");if(!r.networkControllerClient)throw new Error("NetworkController client not set");return r.networkControllerClient},getConnectionControllerClient(e){const t=e||F.activeChain;if(!t)throw new Error("Chain is required to get connection controller client");const r=F.chains.get(t);if(!(r!=null&&r.connectionControllerClient))throw new Error("ConnectionController client not set");return r.connectionControllerClient},getAccountProp(e,t){var o;let r=F.activeChain;if(t&&(r=t),!r)return;const n=(o=F.chains.get(r))==null?void 0:o.accountState;if(n)return n[e]},getNetworkProp(e,t){var n;const r=(n=F.chains.get(t))==null?void 0:n.networkState;if(r)return r[e]},getRequestedCaipNetworks(e){const t=F.chains.get(e),{approvedCaipNetworkIds:r=[],requestedCaipNetworks:n=[]}=(t==null?void 0:t.networkState)||{};return j.sortRequestedNetworks(r,n)},getAllRequestedCaipNetworks(){const e=[];return F.chains.forEach(t=>{const r=this.getRequestedCaipNetworks(t.namespace);e.push(...r)}),e},setRequestedCaipNetworks(e,t){this.setAdapterNetworkState(t,{requestedCaipNetworks:e})},getAllApprovedCaipNetworkIds(){const e=[];return F.chains.forEach(t=>{const r=this.getApprovedCaipNetworkIds(t.namespace);e.push(...r)}),e},getActiveCaipNetwork(){return F.activeCaipNetwork},getActiveCaipAddress(){return F.activeCaipAddress},getApprovedCaipNetworkIds(e){var t,r;return((r=(t=F.chains.get(e))==null?void 0:t.networkState)==null?void 0:r.approvedCaipNetworkIds)||[]},async setApprovedCaipNetworksData(e){var r;const t=await((r=this.getNetworkControllerClient())==null?void 0:r.getApprovedCaipNetworksData());this.setAdapterNetworkState(e,{approvedCaipNetworkIds:t==null?void 0:t.approvedCaipNetworkIds,supportsAllNetworks:t==null?void 0:t.supportsAllNetworks})},checkIfSupportedNetwork(e,t){const r=t||F.activeCaipNetwork,n=this.getRequestedCaipNetworks(e);return n.length?n==null?void 0:n.some(o=>o.id===(r==null?void 0:r.id)):!0},checkIfSupportedChainId(e){var t;return F.activeChain?(t=this.getRequestedCaipNetworks(F.activeChain))==null?void 0:t.some(r=>r.id===e):!0},setSmartAccountEnabledNetworks(e,t){this.setAdapterNetworkState(t,{smartAccountEnabledNetworks:e})},checkIfSmartAccountEnabled(){var r,n;const e=e0.caipNetworkIdToNumber((r=F.activeCaipNetwork)==null?void 0:r.caipNetworkId),t=F.activeChain;return!t||!e?!1:!!((n=this.getNetworkProp("smartAccountEnabledNetworks",t))!=null&&n.includes(Number(e)))},getActiveNetworkTokenAddress(){var n,o;const e=((n=F.activeCaipNetwork)==null?void 0:n.chainNamespace)||"eip155",t=((o=F.activeCaipNetwork)==null?void 0:o.id)||1,r=je.NATIVE_TOKEN_ADDRESS[e];return`${e}:${t}:${r}`},showUnsupportedChainUI(){ge.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const e=F.activeCaipNetwork;return!!(e!=null&&e.chainNamespace&&je.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){this.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]})},resetAccount(e){const t=e;if(!t)throw new Error("Chain is required to set account prop");F.activeCaipAddress=void 0,this.setChainAccountData(t,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountTypes:void 0,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,allAccounts:[],user:void 0,status:"disconnected"}),G.removeConnectorId(t)},async disconnect(e){const t=pf(e);try{Au.resetSend();const r=await Promise.allSettled(t.map(async([o,i])=>{var s;try{const{caipAddress:a}=this.getAccountData(o)||{};a&&((s=i.connectionControllerClient)!=null&&s.disconnect)&&await i.connectionControllerClient.disconnect(o),this.resetAccount(o),this.resetNetwork(o)}catch(a){throw new Error(`Failed to disconnect chain ${o}: ${a.message}`)}}));Q.resetWcConnection();const n=r.filter(o=>o.status==="rejected");if(n.length>0)throw new Error(n.map(o=>o.reason.message).join(", "));X.deleteConnectedSocialProvider(),e?G.removeConnectorId(e):G.resetConnectorIds(),he.sendEvent({type:"track",event:"DISCONNECT_SUCCESS",properties:{namespace:e||"all"}})}catch(r){console.error(r.message||"Failed to disconnect chains"),he.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:r.message||"Failed to disconnect chains"}})}},setIsSwitchingNamespace(e){F.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){var r,n;const e=[];let t;if(F.chains.forEach(o=>{re.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(i=>i===o.namespace)&&o.namespace&&e.push(o.namespace)}),e.length>0){const o=e[0];return t=o?(n=(r=F.chains.get(o))==null?void 0:r.caipNetworks)==null?void 0:n[0]:void 0,t}},getAccountData(e){var t;return e?(t=y.state.chains.get(e))==null?void 0:t.accountState:ee.state},getNetworkData(e){var r;const t=e||F.activeChain;if(t)return(r=y.state.chains.get(t))==null?void 0:r.networkState},getCaipNetworkByNamespace(e,t){var o,i,s;if(!e)return;const r=y.state.chains.get(e);return((o=r==null?void 0:r.caipNetworks)==null?void 0:o.find(a=>a.id===t))||((i=r==null?void 0:r.networkState)==null?void 0:i.caipNetwork)||((s=r==null?void 0:r.caipNetworks)==null?void 0:s[0])},getRequestedCaipNetworkIds(){const e=G.state.filterByNamespace;return(e?[F.chains.get(e)]:Array.from(F.chains.values())).flatMap(t=>(t==null?void 0:t.caipNetworks)||[]).map(t=>t.caipNetworkId)},getCaipNetworks(e){return e?y.getRequestedCaipNetworks(e):y.getAllRequestedCaipNetworks()}},x2={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},J0=j.getBlockchainApiUrl(),ht=Ne({clientId:null,api:new ta({baseUrl:J0,clientId:null}),supportedChains:{http:[],ws:[]}}),ce={state:ht,async get(e){const{st:t,sv:r}=ce.getSdkProperties(),n=M.state.projectId,o={...e.params||{},st:t,sv:r,projectId:n};return ht.api.get({...e,params:o})},getSdkProperties(){const{sdkType:e,sdkVersion:t}=M.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{ht.supportedChains.http.length||await ce.getSupportedNetworks()}catch{return!1}return ht.supportedChains.http.includes(e)},async getSupportedNetworks(){const e=await ce.get({path:"v1/supported-chains"});return ht.supportedChains=e,e},async fetchIdentity({address:e,caipNetworkId:t}){if(!await ce.isNetworkSupported(t))return{avatar:"",name:""};const r=X.getIdentityFromCacheForAddress(e);if(r)return r;const n=await ce.get({path:`/v1/identity/${e}`,params:{sender:y.state.activeCaipAddress?j.getPlainAddress(y.state.activeCaipAddress):void 0}});return X.updateIdentityCache({address:e,identity:n,timestamp:Date.now()}),n},async fetchTransactions({account:e,cursor:t,onramp:r,signal:n,cache:o,chainId:i}){var s;return await ce.isNetworkSupported((s=y.state.activeCaipNetwork)==null?void 0:s.caipNetworkId)?ce.get({path:`/v1/account/${e}/history`,params:{cursor:t,onramp:r,chainId:i},signal:n,cache:o}):{data:[],next:void 0}},async fetchSwapQuote({amount:e,userAddress:t,from:r,to:n,gasPrice:o}){var i;return await ce.isNetworkSupported((i=y.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)?ce.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:e,userAddress:t,from:r,to:n,gasPrice:o}}):{quotes:[]}},async fetchSwapTokens({chainId:e}){var t;return await ce.isNetworkSupported((t=y.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)?ce.get({path:"/v1/convert/tokens",params:{chainId:e}}):{tokens:[]}},async fetchTokenPrice({addresses:e}){var t;return await ce.isNetworkSupported((t=y.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)?ht.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:e,projectId:M.state.projectId},headers:{"Content-Type":"application/json"}}):{fungibles:[]}},async fetchSwapAllowance({tokenAddress:e,userAddress:t}){var r;return await ce.isNetworkSupported((r=y.state.activeCaipNetwork)==null?void 0:r.caipNetworkId)?ce.get({path:"/v1/convert/allowance",params:{tokenAddress:e,userAddress:t},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice({chainId:e}){var n;const{st:t,sv:r}=ce.getSdkProperties();if(!await ce.isNetworkSupported((n=y.state.activeCaipNetwork)==null?void 0:n.caipNetworkId))throw new Error("Network not supported for Gas Price");return ce.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:e,st:t,sv:r}})},async generateSwapCalldata({amount:e,from:t,to:r,userAddress:n,disableEstimate:o}){var i;if(!await ce.isNetworkSupported((i=y.state.activeCaipNetwork)==null?void 0:i.caipNetworkId))throw new Error("Network not supported for Swaps");return ht.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:e,eip155:{slippage:je.CONVERT_SLIPPAGE_TOLERANCE},projectId:M.state.projectId,from:t,to:r,userAddress:n,disableEstimate:o}})},async generateApproveCalldata({from:e,to:t,userAddress:r}){var i;const{st:n,sv:o}=ce.getSdkProperties();if(!await ce.isNetworkSupported((i=y.state.activeCaipNetwork)==null?void 0:i.caipNetworkId))throw new Error("Network not supported for Swaps");return ce.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:r,from:e,to:t,st:n,sv:o}})},async getBalance(e,t,r){var c;const{st:n,sv:o}=ce.getSdkProperties();if(!await ce.isNetworkSupported((c=y.state.activeCaipNetwork)==null?void 0:c.caipNetworkId))return Ie.showError("Token Balance Unavailable"),{balances:[]};const i=`${t}:${e}`,s=X.getBalanceCacheForCaipAddress(i);if(s)return s;const a=await ce.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:r,st:n,sv:o}});return X.updateBalanceCache({caipAddress:i,balance:a,timestamp:Date.now()}),a},async lookupEnsName(e){var t;return await ce.isNetworkSupported((t=y.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)?ce.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName({address:e}){var t;return await ce.isNetworkSupported((t=y.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)?ce.get({path:`/v1/profile/reverse/${e}`,params:{sender:ee.state.address,apiVersion:"2"}}):[]},async getEnsNameSuggestions(e){var t;return await ce.isNetworkSupported((t=y.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)?ce.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName({coinType:e,address:t,message:r,signature:n}){var o;return await ce.isNetworkSupported((o=y.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?ht.api.post({path:"/v1/profile/account",body:{coin_type:e,address:t,message:r,signature:n},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL({destinationWallets:e,partnerUserId:t,defaultNetwork:r,purchaseAmount:n,paymentAmount:o}){var i;return await ce.isNetworkSupported((i=y.state.activeCaipNetwork)==null?void 0:i.caipNetworkId)?(await ht.api.post({path:"/v1/generators/onrampurl",params:{projectId:M.state.projectId},body:{destinationWallets:e,defaultNetwork:r,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:n,presetFiatAmount:o}})).url:""},async getOnrampOptions(){var e;if(!await ce.isNetworkSupported((e=y.state.activeCaipNetwork)==null?void 0:e.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await ce.get({path:"/v1/onramp/options"})}catch{return x2}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:r,network:n}){var o;try{return await ce.isNetworkSupported((o=y.state.activeCaipNetwork)==null?void 0:o.caipNetworkId)?await ht.api.post({path:"/v1/onramp/quote",params:{projectId:M.state.projectId},body:{purchaseCurrency:e,paymentCurrency:t,amount:r,network:n}}):null}catch{return{coinbaseFee:{amount:r,currency:t.id},networkFee:{amount:r,currency:t.id},paymentSubtotal:{amount:r,currency:t.id},paymentTotal:{amount:r,currency:t.id},purchaseAmount:{amount:r,currency:t.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(e){var t;return await ce.isNetworkSupported((t=y.state.activeCaipNetwork)==null?void 0:t.caipNetworkId)?ce.get({path:`/v1/sessions/${e}`}):[]},async revokeSmartSession(e,t,r){var n;return await ce.isNetworkSupported((n=y.state.activeCaipNetwork)==null?void 0:n.caipNetworkId)?ht.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:M.state.projectId},body:{pci:t,signature:r}}):{success:!1}},setClientId(e){ht.clientId=e,ht.api=new ta({baseUrl:J0,clientId:e})}},Ct=Ne({currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,allAccounts:[]}),ee={state:Ct,replaceState(e){e&&Object.assign(Ct,pn(e))},subscribe(e){return y.subscribeChainProp("accountState",t=>{if(t)return e(t)})},subscribeKey(e,t,r){let n;return y.subscribeChainProp("accountState",o=>{if(o){const i=o[e];n!==i&&(n=i,t(i))}},r)},setStatus(e,t){y.setAccountProp("status",e,t)},getCaipAddress(e){return y.getAccountProp("caipAddress",e)},setCaipAddress(e,t){const r=e?j.getPlainAddress(e):void 0;t===y.state.activeChain&&(y.state.activeCaipAddress=e),y.setAccountProp("caipAddress",e,t),y.setAccountProp("address",r,t)},setBalance(e,t,r){y.setAccountProp("balance",e,r),y.setAccountProp("balanceSymbol",t,r)},setProfileName(e,t){y.setAccountProp("profileName",e,t)},setProfileImage(e,t){y.setAccountProp("profileImage",e,t)},setUser(e,t){y.setAccountProp("user",e,t)},setAddressExplorerUrl(e,t){y.setAccountProp("addressExplorerUrl",e,t)},setSmartAccountDeployed(e,t){y.setAccountProp("smartAccountDeployed",e,t)},setCurrentTab(e){y.setAccountProp("currentTab",e,y.state.activeChain)},setTokenBalance(e,t){e&&y.setAccountProp("tokenBalance",e,t)},setShouldUpdateToAddress(e,t){y.setAccountProp("shouldUpdateToAddress",e,t)},setAllAccounts(e,t){y.setAccountProp("allAccounts",e,t)},addAddressLabel(e,t,r){const n=y.getAccountProp("addressLabels",r)||new Map;n.set(e,t),y.setAccountProp("addressLabels",n,r)},removeAddressLabel(e,t){const r=y.getAccountProp("addressLabels",t)||new Map;r.delete(e),y.setAccountProp("addressLabels",r,t)},setConnectedWalletInfo(e,t){y.setAccountProp("connectedWalletInfo",e,t,!1)},setPreferredAccountType(e,t){y.setAccountProp("preferredAccountTypes",{...Ct.preferredAccountTypes,[t]:e},t)},setPreferredAccountTypes(e){Ct.preferredAccountTypes=e},setSocialProvider(e,t){e&&y.setAccountProp("socialProvider",e,t)},setSocialWindow(e,t){y.setAccountProp("socialWindow",e?pn(e):void 0,t)},setFarcasterUrl(e,t){y.setAccountProp("farcasterUrl",e,t)},async fetchTokenBalance(e){var i,s;Ct.balanceLoading=!0;const t=(i=y.state.activeCaipNetwork)==null?void 0:i.caipNetworkId,r=(s=y.state.activeCaipNetwork)==null?void 0:s.chainNamespace,n=y.state.activeCaipAddress,o=n?j.getPlainAddress(n):void 0;if(Ct.lastRetry&&!j.isAllowedRetry(Ct.lastRetry,30*je.ONE_SEC_MS))return Ct.balanceLoading=!1,[];try{if(o&&t&&r){const a=(await ce.getBalance(o,t)).balances.filter(c=>c.quantity.decimals!=="0");return this.setTokenBalance(a,r),Ct.lastRetry=void 0,Ct.balanceLoading=!1,a}}catch(a){Ct.lastRetry=Date.now(),e==null||e(a),Ie.showError("Token Balance Unavailable")}finally{Ct.balanceLoading=!1}return[]},resetAccount(e){y.resetAccount(e)}},rt=Ne({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),ge={state:rt,subscribe(e){return Xe(rt,()=>e(rt))},subscribeKey(e,t){return tt(rt,e,t)},async open(e){var n;const t=ee.state.status==="connected";Q.state.wcBasic?Z.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1}):await Z.prefetch({fetchConnectorImages:!t,fetchFeaturedWallets:!t,fetchRecommendedWallets:!t}),e!=null&&e.namespace?(await y.switchActiveNamespace(e.namespace),ge.setLoading(!0,e.namespace)):ge.setLoading(!0),G.setFilterByNamespace(e==null?void 0:e.namespace);const r=(n=y.getAccountData(e==null?void 0:e.namespace))==null?void 0:n.caipAddress;y.state.noAdapters&&!r?j.isMobile()?V.reset("AllWallets"):V.reset("ConnectingWalletConnectBasic"):e!=null&&e.view?V.reset(e.view,e.data):r?V.reset("Account"):V.reset("Connect"),rt.open=!0,ur.set({open:!0}),he.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:!!r}})},close(){const e=M.state.enableEmbedded,t=!!y.state.activeCaipAddress;rt.open&&he.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),rt.open=!1,ge.clearLoading(),e?t?V.replace("Account"):V.push("Connect"):ur.set({open:!1}),Q.resetUri()},setLoading(e,t){t&&rt.loadingNamespaceMap.set(t,e),rt.loading=e,ur.set({loading:e})},clearLoading(){rt.loadingNamespaceMap.clear(),rt.loading=!1},shake(){rt.shake||(rt.shake=!0,setTimeout(()=>{rt.shake=!1},500))}},ku={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},E2={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},A2={providers:tf,selectedProvider:null,error:null,purchaseCurrency:ku,paymentCurrency:E2,purchaseCurrencies:[ku],paymentCurrencies:[],quotesLoading:!1};Ne(A2);const k2={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:je.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0};Ne(k2);const _t=Ne({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Rn={state:_t,subscribe(e){return Xe(_t,()=>e(_t))},subscribeKey(e,t){return tt(_t,e,t)},showTooltip({message:e,triggerRect:t,variant:r}){_t.open=!0,_t.message=e,_t.triggerRect=t,_t.variant=r},hide(){_t.open=!1,_t.message="",_t.triggerRect={width:0,height:0,top:0,left:0}}},Iu=2147483648,I2={convertEVMChainIdToCoinType(e){if(e>=Iu)throw new Error("Invalid chainId");return(Iu|e)>>>0}},xt=Ne({suggestions:[],loading:!1}),X0={state:xt,subscribe(e){return Xe(xt,()=>e(xt))},subscribeKey(e,t){return tt(xt,e,t)},async resolveName(e){var t,r;try{return await ce.lookupEnsName(e)}catch(n){const o=n;throw new Error(((r=(t=o==null?void 0:o.reasons)==null?void 0:t[0])==null?void 0:r.description)||"Error resolving name")}},async isNameRegistered(e){try{return await ce.lookupEnsName(e),!0}catch{return!1}},async getSuggestions(e){try{xt.loading=!0,xt.suggestions=[];const t=await ce.getEnsNameSuggestions(e);return xt.suggestions=t.suggestions.map(r=>({...r,name:r.name}))||[],xt.suggestions}catch(t){const r=this.parseEnsApiError(t,"Error fetching name suggestions");throw new Error(r)}finally{xt.loading=!1}},async getNamesForAddress(e){try{if(!y.state.activeCaipNetwork)return[];const t=X.getEnsFromCacheForAddress(e);if(t)return t;const r=await ce.reverseLookupEnsName({address:e});return X.updateEnsCache({address:e,ens:r,timestamp:Date.now()}),r}catch(t){const r=this.parseEnsApiError(t,"Error fetching names for address");throw new Error(r)}},async registerName(e){const t=y.state.activeCaipNetwork;if(!t)throw new Error("Network not found");const r=ee.state.address,n=G.getAuthConnector();if(!r||!n)throw new Error("Address or auth connector not found");xt.loading=!0;try{const o=JSON.stringify({name:e,attributes:{},timestamp:Math.floor(Date.now()/1e3)});V.pushTransactionStack({view:"RegisterAccountNameSuccess",goBack:!1,replace:!0,onCancel(){xt.loading=!1}});const i=await Q.signMessage(o),s=t.id;if(!s)throw new Error("Network not found");const a=I2.convertEVMChainIdToCoinType(Number(s));await ce.registerEnsName({coinType:a,address:r,signature:i,message:o}),ee.setProfileName(e,t.chainNamespace),V.replace("RegisterAccountNameSuccess")}catch(o){const i=this.parseEnsApiError(o,`Error registering name ${e}`);throw V.replace("RegisterAccountName"),new Error(i)}finally{xt.loading=!1}},validateName(e){return/^[a-zA-Z0-9-]{4,}$/u.test(e)},parseEnsApiError(e,t){var r,n;return((n=(r=e==null?void 0:e.reasons)==null?void 0:r[0])==null?void 0:n.description)||t}};Ne({isLegalCheckboxChecked:!1});const Cr={EIP155:"eip155",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED"},Ds={NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200"},ConnectorImageIds:{[re.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[re.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[re.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[re.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[re.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[re.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[re.CONNECTOR_ID.INJECTED]:"Browser Wallet",[re.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[re.CONNECTOR_ID.COINBASE]:"Coinbase",[re.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[re.CONNECTOR_ID.LEDGER]:"Ledger",[re.CONNECTOR_ID.SAFE]:"Safe"}},ml={getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach(([r,n])=>{t[`${Cr.EIP155}:${r}`]=n}),t},isLowerCaseMatch(e,t){return(e==null?void 0:e.toLowerCase())===(t==null?void 0:t.toLowerCase())}},Ji={UniversalProviderErrors:{UNAUTHORIZED_DOMAIN_NOT_ALLOWED:{message:"Unauthorized: origin not allowed",alertErrorKey:"INVALID_APP_CONFIGURATION"},JWT_VALIDATION_ERROR:{message:"JWT validation error: JWT Token is not yet valid",alertErrorKey:"JWT_TOKEN_NOT_VALID"},INVALID_KEY:{message:"Unauthorized: invalid key",alertErrorKey:"INVALID_PROJECT_ID"}},ALERT_ERRORS:{SWITCH_NETWORK_NOT_FOUND:{shortMessage:"Network Not Found",longMessage:"Network not found - please make sure it is included in 'networks' array in createAppKit function"},INVALID_APP_CONFIGURATION:{shortMessage:"Invalid App Configuration",longMessage:()=>`Origin ${N2()?window.origin:"unknown"} not found on Allowlist - update configuration on cloud.reown.com`},SOCIALS_TIMEOUT:{shortMessage:"Invalid App Configuration",longMessage:()=>"There was an issue loading the embedded wallet. Please verify that your domain is allowed at cloud.reown.com"},JWT_TOKEN_NOT_VALID:{shortMessage:"Session Expired",longMessage:"Invalid session found on UniversalProvider - please check your time settings and connect again"},INVALID_PROJECT_ID:{shortMessage:"Invalid App Configuration",longMessage:"Invalid Project ID - update configuration"},PROJECT_ID_NOT_CONFIGURED:{shortMessage:"Project ID Not Configured",longMessage:"Project ID Not Configured - update configuration on cloud.reown.com"}}};function N2(){return typeof window<"u"}function S2(e){try{return JSON.stringify(e)}catch{return'"[Circular]"'}}var _2=T2;function T2(e,t,r){var n=r&&r.stringify||S2,o=1;if(typeof e=="object"&&e!==null){var i=t.length+o;if(i===1)return e;var s=new Array(i);s[0]=n(e);for(var a=1;a<i;a++)s[a]=n(t[a]);return s.join(" ")}if(typeof e!="string")return e;var c=t.length;if(c===0)return e;for(var l="",u=1-o,d=-1,h=e&&e.length||0,p=0;p<h;){if(e.charCodeAt(p)===37&&p+1<h){switch(d=d>-1?d:0,e.charCodeAt(p+1)){case 100:case 102:if(u>=c||t[u]==null)break;d<p&&(l+=e.slice(d,p)),l+=Number(t[u]),d=p+2,p++;break;case 105:if(u>=c||t[u]==null)break;d<p&&(l+=e.slice(d,p)),l+=Math.floor(Number(t[u])),d=p+2,p++;break;case 79:case 111:case 106:if(u>=c||t[u]===void 0)break;d<p&&(l+=e.slice(d,p));var m=typeof t[u];if(m==="string"){l+="'"+t[u]+"'",d=p+2,p++;break}if(m==="function"){l+=t[u].name||"<anonymous>",d=p+2,p++;break}l+=n(t[u]),d=p+2,p++;break;case 115:if(u>=c)break;d<p&&(l+=e.slice(d,p)),l+=String(t[u]),d=p+2,p++;break;case 37:d<p&&(l+=e.slice(d,p)),l+="%",d=p+2,p++,u--;break}++u}++p}return d===-1?e:(d<h&&(l+=e.slice(d)),l)}const Nu=_2;var tn=qt;const Ci=D2().console||{},P2={mapHttpRequest:Xi,mapHttpResponse:Xi,wrapRequestSerializer:Da,wrapResponseSerializer:Da,wrapErrorSerializer:Da,req:Xi,res:Xi,err:L2};function $2(e,t){return Array.isArray(e)?e.filter(function(r){return r!=="!stdSerializers.err"}):e===!0?Object.keys(t):!1}function qt(e){e=e||{},e.browser=e.browser||{};const t=e.browser.transmit;if(t&&typeof t.send!="function")throw Error("pino: transmit option must have a send function");const r=e.browser.write||Ci;e.browser.write&&(e.browser.asObject=!0);const n=e.serializers||{},o=$2(e.browser.serialize,n);let i=e.browser.serialize;Array.isArray(e.browser.serialize)&&e.browser.serialize.indexOf("!stdSerializers.err")>-1&&(i=!1);const s=["error","fatal","warn","info","debug","trace"];typeof r=="function"&&(r.error=r.fatal=r.warn=r.info=r.debug=r.trace=r),e.enabled===!1&&(e.level="silent");const a=e.level||"info",c=Object.create(r);c.log||(c.log=xi),Object.defineProperty(c,"levelVal",{get:u}),Object.defineProperty(c,"level",{get:d,set:h});const l={transmit:t,serialize:o,asObject:e.browser.asObject,levels:s,timestamp:U2(e)};c.levels=qt.levels,c.level=a,c.setMaxListeners=c.getMaxListeners=c.emit=c.addListener=c.on=c.prependListener=c.once=c.prependOnceListener=c.removeListener=c.removeAllListeners=c.listeners=c.listenerCount=c.eventNames=c.write=c.flush=xi,c.serializers=n,c._serialize=o,c._stdErrSerialize=i,c.child=p,t&&(c._logEvent=Fc());function u(){return this.level==="silent"?1/0:this.levels.values[this.level]}function d(){return this._level}function h(m){if(m!=="silent"&&!this.levels.values[m])throw Error("unknown level "+m);this._level=m,In(l,c,"error","log"),In(l,c,"fatal","error"),In(l,c,"warn","error"),In(l,c,"info","log"),In(l,c,"debug","log"),In(l,c,"trace","log")}function p(m,g){if(!m)throw new Error("missing bindings for child Pino");g=g||{},o&&m.serializers&&(g.serializers=m.serializers);const f=g.serializers;if(o&&f){var w=Object.assign({},n,f),v=e.browser.serialize===!0?Object.keys(w):o;delete m.serializers,ua([m],v,w,this._stdErrSerialize)}function b(k){this._childLevel=(k._childLevel|0)+1,this.error=Nn(k,m,"error"),this.fatal=Nn(k,m,"fatal"),this.warn=Nn(k,m,"warn"),this.info=Nn(k,m,"info"),this.debug=Nn(k,m,"debug"),this.trace=Nn(k,m,"trace"),w&&(this.serializers=w,this._serialize=v),t&&(this._logEvent=Fc([].concat(k._logEvent.bindings,m)))}return b.prototype=this,new b(this)}return c}qt.levels={values:{fatal:60,error:50,warn:40,info:30,debug:20,trace:10},labels:{10:"trace",20:"debug",30:"info",40:"warn",50:"error",60:"fatal"}},qt.stdSerializers=P2,qt.stdTimeFunctions=Object.assign({},{nullTime:Q0,epochTime:e1,unixTime:M2,isoTime:z2});function In(e,t,r,n){const o=Object.getPrototypeOf(t);t[r]=t.levelVal>t.levels.values[r]?xi:o[r]?o[r]:Ci[r]||Ci[n]||xi,O2(e,t,r)}function O2(e,t,r){!e.transmit&&t[r]===xi||(t[r]=function(n){return function(){const o=e.timestamp(),i=new Array(arguments.length),s=Object.getPrototypeOf&&Object.getPrototypeOf(this)===Ci?Ci:this;for(var a=0;a<i.length;a++)i[a]=arguments[a];if(e.serialize&&!e.asObject&&ua(i,this._serialize,this.serializers,this._stdErrSerialize),e.asObject?n.call(s,R2(this,r,i,o)):n.apply(s,i),e.transmit){const c=e.transmit.level||t.level,l=qt.levels.values[c],u=qt.levels.values[r];if(u<l)return;B2(this,{ts:o,methodLevel:r,methodValue:u,transmitValue:qt.levels.values[e.transmit.level||t.level],send:e.transmit.send,val:t.levelVal},i)}}}(t[r]))}function R2(e,t,r,n){e._serialize&&ua(r,e._serialize,e.serializers,e._stdErrSerialize);const o=r.slice();let i=o[0];const s={};n&&(s.time=n),s.level=qt.levels.values[t];let a=(e._childLevel|0)+1;if(a<1&&(a=1),i!==null&&typeof i=="object"){for(;a--&&typeof o[0]=="object";)Object.assign(s,o.shift());i=o.length?Nu(o.shift(),o):void 0}else typeof i=="string"&&(i=Nu(o.shift(),o));return i!==void 0&&(s.msg=i),s}function ua(e,t,r,n){for(const o in e)if(n&&e[o]instanceof Error)e[o]=qt.stdSerializers.err(e[o]);else if(typeof e[o]=="object"&&!Array.isArray(e[o]))for(const i in e[o])t&&t.indexOf(i)>-1&&i in r&&(e[o][i]=r[i](e[o][i]))}function Nn(e,t,r){return function(){const n=new Array(1+arguments.length);n[0]=t;for(var o=1;o<n.length;o++)n[o]=arguments[o-1];return e[r].apply(this,n)}}function B2(e,t,r){const n=t.send,o=t.ts,i=t.methodLevel,s=t.methodValue,a=t.val,c=e._logEvent.bindings;ua(r,e._serialize||Object.keys(e.serializers),e.serializers,e._stdErrSerialize===void 0?!0:e._stdErrSerialize),e._logEvent.ts=o,e._logEvent.messages=r.filter(function(l){return c.indexOf(l)===-1}),e._logEvent.level.label=i,e._logEvent.level.value=s,n(i,e._logEvent,a),e._logEvent=Fc(c)}function Fc(e){return{ts:0,messages:[],bindings:e||[],level:{label:"",value:0}}}function L2(e){const t={type:e.constructor.name,msg:e.message,stack:e.stack};for(const r in e)t[r]===void 0&&(t[r]=e[r]);return t}function U2(e){return typeof e.timestamp=="function"?e.timestamp:e.timestamp===!1?Q0:e1}function Xi(){return{}}function Da(e){return e}function xi(){}function Q0(){return!1}function e1(){return Date.now()}function M2(){return Math.round(Date.now()/1e3)}function z2(){return new Date(Date.now()).toISOString()}function D2(){function e(t){return typeof t<"u"&&t}try{return typeof globalThis<"u"||Object.defineProperty(Object.prototype,"globalThis",{get:function(){return delete Object.prototype.globalThis,this.globalThis=this},configurable:!0}),globalThis}catch{return e(self)||e(window)||e(this)||{}}}const j2=e=>JSON.stringify(e,(t,r)=>typeof r=="bigint"?r.toString()+"n":r);function Su(e){return typeof e=="string"?e:j2(e)||""}const W2={level:"info"},vl=1e3*1024;class H2{constructor(t){this.nodeValue=t,this.sizeInBytes=new TextEncoder().encode(this.nodeValue).length,this.next=null}get value(){return this.nodeValue}get size(){return this.sizeInBytes}}class _u{constructor(t){this.head=null,this.tail=null,this.lengthInNodes=0,this.maxSizeInBytes=t,this.sizeInBytes=0}append(t){const r=new H2(t);if(r.size>this.maxSizeInBytes)throw new Error(`[LinkedList] Value too big to insert into list: ${t} with size ${r.size}`);for(;this.size+r.size>this.maxSizeInBytes;)this.shift();this.head?(this.tail&&(this.tail.next=r),this.tail=r):(this.head=r,this.tail=r),this.lengthInNodes++,this.sizeInBytes+=r.size}shift(){if(!this.head)return;const t=this.head;this.head=this.head.next,this.head||(this.tail=null),this.lengthInNodes--,this.sizeInBytes-=t.size}toArray(){const t=[];let r=this.head;for(;r!==null;)t.push(r.value),r=r.next;return t}get length(){return this.lengthInNodes}get size(){return this.sizeInBytes}toOrderedArray(){return Array.from(this)}[Symbol.iterator](){let t=this.head;return{next:()=>{if(!t)return{done:!0,value:null};const r=t.value;return t=t.next,{done:!1,value:r}}}}}class t1{constructor(t,r=vl){this.level=t??"error",this.levelValue=tn.levels.values[this.level],this.MAX_LOG_SIZE_IN_BYTES=r,this.logs=new _u(this.MAX_LOG_SIZE_IN_BYTES)}forwardToConsole(t,r){r===tn.levels.values.error?console.error(t):r===tn.levels.values.warn?console.warn(t):r===tn.levels.values.debug?console.debug(t):r===tn.levels.values.trace?console.trace(t):console.log(t)}appendToLogs(t){this.logs.append(Su({timestamp:new Date().toISOString(),log:t}));const r=typeof t=="string"?JSON.parse(t).level:t.level;r>=this.levelValue&&this.forwardToConsole(t,r)}getLogs(){return this.logs}clearLogs(){this.logs=new _u(this.MAX_LOG_SIZE_IN_BYTES)}getLogArray(){return Array.from(this.logs)}logsToBlob(t){const r=this.getLogArray();return r.push(Su({extraMetadata:t})),new Blob(r,{type:"application/json"})}}class F2{constructor(t,r=vl){this.baseChunkLogger=new t1(t,r)}write(t){this.baseChunkLogger.appendToLogs(t)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(t){return this.baseChunkLogger.logsToBlob(t)}downloadLogsBlobInBrowser(t){const r=URL.createObjectURL(this.logsToBlob(t)),n=document.createElement("a");n.href=r,n.download=`walletconnect-logs-${new Date().toISOString()}.txt`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(r)}}class V2{constructor(t,r=vl){this.baseChunkLogger=new t1(t,r)}write(t){this.baseChunkLogger.appendToLogs(t)}getLogs(){return this.baseChunkLogger.getLogs()}clearLogs(){this.baseChunkLogger.clearLogs()}getLogArray(){return this.baseChunkLogger.getLogArray()}logsToBlob(t){return this.baseChunkLogger.logsToBlob(t)}}var q2=Object.defineProperty,Z2=Object.defineProperties,G2=Object.getOwnPropertyDescriptors,Tu=Object.getOwnPropertySymbols,K2=Object.prototype.hasOwnProperty,Y2=Object.prototype.propertyIsEnumerable,Pu=(e,t,r)=>t in e?q2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,js=(e,t)=>{for(var r in t||(t={}))K2.call(t,r)&&Pu(e,r,t[r]);if(Tu)for(var r of Tu(t))Y2.call(t,r)&&Pu(e,r,t[r]);return e},Ws=(e,t)=>Z2(e,G2(t));function J2(e){return Ws(js({},e),{level:(e==null?void 0:e.level)||W2.level})}function X2(e){var t,r;const n=new F2((t=e.opts)==null?void 0:t.level,e.maxSizeInBytes);return{logger:tn(Ws(js({},e.opts),{level:"trace",browser:Ws(js({},(r=e.opts)==null?void 0:r.browser),{write:o=>n.write(o)})})),chunkLoggerController:n}}function Q2(e){var t;const r=new V2((t=e.opts)==null?void 0:t.level,e.maxSizeInBytes);return{logger:tn(Ws(js({},e.opts),{level:"trace"})),chunkLoggerController:r}}function em(e){return typeof e.loggerOverride<"u"&&typeof e.loggerOverride!="string"?{logger:e.loggerOverride,chunkLoggerController:null}:typeof window<"u"?X2(e):Q2(e)}const tm={createLogger(e,t="error"){const r=J2({level:t}),{logger:n}=em({opts:r});return n.error=(...o)=>{for(const i of o)if(i instanceof Error){e(i,...o);return}e(void 0,...o)},n}},rm="rpc.walletconnect.org";function $u(e,t){const r=new URL("https://rpc.walletconnect.org/v1/");return r.searchParams.set("chainId",e),r.searchParams.set("projectId",t),r.toString()}const ja=["near:mainnet","solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp","eip155:1101","eip155:56","eip155:42161","eip155:7777777","eip155:59144","eip155:324","solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1","eip155:5000","solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz","eip155:80084","eip155:5003","eip155:100","eip155:8453","eip155:42220","eip155:1313161555","eip155:17000","eip155:1","eip155:300","eip155:1313161554","eip155:1329","eip155:84532","eip155:421614","eip155:11155111","eip155:8217","eip155:43114","solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z","eip155:999999999","eip155:11155420","eip155:80002","eip155:97","eip155:43113","eip155:137","eip155:10","eip155:1301","bip122:000000000019d6689c085ae165831e93","bip122:000000000933ea01ad0ee984209779ba"],Bn={extendRpcUrlWithProjectId(e,t){let r=!1;try{r=new URL(e).host===rm}catch{r=!1}if(r){const n=new URL(e);return n.searchParams.has("projectId")||n.searchParams.set("projectId",t),n.toString()}return e},isCaipNetwork(e){return"chainNamespace"in e&&"caipNetworkId"in e},getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:re.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${re.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,r){var o,i,s;const n=(s=(i=(o=e.rpcUrls)==null?void 0:o.default)==null?void 0:i.http)==null?void 0:s[0];return ja.includes(t)?$u(t,r):n||""},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:r,customRpcUrls:n}){var h,p,m,g,f;const o=this.getChainNamespace(e),i=this.getCaipNetworkId(e),s=(h=e.rpcUrls.default.http)==null?void 0:h[0],a=this.getDefaultRpcUrl(e,i,r),c=((g=(m=(p=e==null?void 0:e.rpcUrls)==null?void 0:p.chainDefault)==null?void 0:m.http)==null?void 0:g[0])||s,l=((f=n==null?void 0:n[i])==null?void 0:f.map(w=>w.url))||[],u=[...l,a],d=[...l];return c&&!d.includes(c)&&d.push(c),{...e,chainNamespace:o,caipNetworkId:i,assets:{imageId:Ds.NetworkImageIds[e.id],imageUrl:t==null?void 0:t[e.id]},rpcUrls:{...e.rpcUrls,default:{http:u},chainDefault:{http:d}}}},extendCaipNetworks(e,{customNetworkImageUrls:t,projectId:r,customRpcUrls:n}){return e.map(o=>Bn.extendCaipNetwork(o,{customNetworkImageUrls:t,customRpcUrls:n,projectId:r}))},getViemTransport(e,t,r){var o,i,s;const n=[];return r==null||r.forEach(a=>{n.push(Gi(a.url,a.config))}),ja.includes(e.caipNetworkId)&&n.push(Gi($u(e.caipNetworkId,t),{fetchOptions:{headers:{"Content-Type":"text/plain"}}})),(s=(i=(o=e==null?void 0:e.rpcUrls)==null?void 0:o.default)==null?void 0:i.http)==null||s.forEach(a=>{n.push(Gi(a))}),lu(n)},extendWagmiTransports(e,t,r){if(ja.includes(e.caipNetworkId)){const n=this.getDefaultRpcUrl(e,e.caipNetworkId,t);return lu([r,Gi(n)])}return r},getUnsupportedNetwork(e){return{id:e.split(":")[1],caipNetworkId:e,name:re.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(":")[0],nativeCurrency:{name:"",decimals:0,symbol:""},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(e){var a;const t=X.getActiveCaipNetworkId(),r=y.getAllRequestedCaipNetworks(),n=Array.from(((a=y.state.chains)==null?void 0:a.keys())||[]),o=t==null?void 0:t.split(":")[0],i=o?n.includes(o):!1,s=r==null?void 0:r.find(c=>c.caipNetworkId===t);return i&&!s&&t?this.getUnsupportedNetwork(t):s||e||(r==null?void 0:r[0])}},Hs={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0},nt=Ne({providers:{...Hs},providerIds:{...Hs}}),Te={state:nt,subscribeKey(e,t){return tt(nt,e,t)},subscribe(e){return Xe(nt,()=>{e(nt)})},subscribeProviders(e){return Xe(nt.providers,()=>e(nt.providers))},setProvider(e,t){t&&(nt.providers[e]=pn(t))},getProvider(e){return nt.providers[e]},setProviderId(e,t){t&&(nt.providerIds[e]=t)},getProviderId(e){if(e)return nt.providerIds[e]},reset(){nt.providers={...Hs},nt.providerIds={...Hs}},resetChain(e){nt.providers[e]=void 0,nt.providerIds[e]=void 0}};var Ou;(function(e){e.Google="google",e.Github="github",e.Apple="apple",e.Facebook="facebook",e.X="x",e.Discord="discord",e.Farcaster="farcaster"})(Ou||(Ou={}));const Ir={VIEW_DIRECTION:{Next:"next",Prev:"prev"},DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"],ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150}},vn={filterOutDuplicatesByRDNS(e){const t=M.state.enableEIP6963?G.state.connectors:[],r=X.getRecentWallets(),n=t.map(s=>{var a;return(a=s.info)==null?void 0:a.rdns}).filter(Boolean),o=r.map(s=>s.rdns).filter(Boolean),i=n.concat(o);if(i.includes("io.metamask.mobile")&&j.isMobile()){const s=i.indexOf("io.metamask.mobile");i[s]="io.metamask"}return e.filter(s=>!i.includes(String(s==null?void 0:s.rdns)))},filterOutDuplicatesByIds(e){const t=G.state.connectors.filter(s=>s.type==="ANNOUNCED"||s.type==="INJECTED"),r=X.getRecentWallets(),n=t.map(s=>s.explorerId),o=r.map(s=>s.id),i=n.concat(o);return e.filter(s=>!i.includes(s==null?void 0:s.id))},filterOutDuplicateWallets(e){const t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)},markWalletsAsInstalled(e){const{connectors:t}=G.state,r=t.filter(n=>n.type==="ANNOUNCED").reduce((n,o)=>{var i;return(i=o.info)!=null&&i.rdns&&(n[o.info.rdns]=!0),n},{});return e.map(n=>({...n,installed:!!n.rdns&&!!r[n.rdns??""]})).sort((n,o)=>Number(o.installed)-Number(n.installed))},getConnectOrderMethod(e,t){var c;const r=(e==null?void 0:e.connectMethodsOrder)||((c=M.state.features)==null?void 0:c.connectMethodsOrder),n=t||G.state.connectors;if(r)return r;const{injected:o,announced:i}=dr.getConnectorsByType(n,Z.state.recommended,Z.state.featured),s=o.filter(dr.showConnector),a=i.filter(dr.showConnector);return s.length||a.length?["wallet","email","social"]:Ir.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(e){const t=!!e.rdns&&Z.state.excludedWallets.some(n=>n.rdns===e.rdns),r=!!e.name&&Z.state.excludedWallets.some(n=>ml.isLowerCaseMatch(n.name,e.name));return t||r}},dr={getConnectorsByType(e,t,r){const{customWallets:n}=M.state,o=X.getRecentWallets(),i=vn.filterOutDuplicateWallets(t),s=vn.filterOutDuplicateWallets(r),a=e.filter(d=>d.type==="MULTI_CHAIN"),c=e.filter(d=>d.type==="ANNOUNCED"),l=e.filter(d=>d.type==="INJECTED"),u=e.filter(d=>d.type==="EXTERNAL");return{custom:n,recent:o,external:u,multiChain:a,announced:c,injected:l,recommended:i,featured:s}},showConnector(e){var o;const t=(o=e.info)==null?void 0:o.rdns,r=!!t&&Z.state.excludedWallets.some(i=>!!i.rdns&&i.rdns===t),n=!!e.name&&Z.state.excludedWallets.some(i=>ml.isLowerCaseMatch(i.name,e.name));return!(e.type==="INJECTED"&&(!j.isMobile()&&e.name==="Browser Wallet"||!t&&!Q.checkInstalled()||r||n)||(e.type==="ANNOUNCED"||e.type==="EXTERNAL")&&(r||n))},getIsConnectedWithWC(){return Array.from(y.state.chains.values()).some(e=>G.getConnectorId(e.namespace)===re.CONNECTOR_ID.WALLET_CONNECT)},getConnectorTypeOrder({recommended:e,featured:t,custom:r,recent:n,announced:o,injected:i,multiChain:s,external:a,overriddenConnectors:c=(l=>(l=M.state.features)==null?void 0:l.connectorTypeOrder)()??[]}){const u=dr.getIsConnectedWithWC(),d=[{type:"walletConnect",isEnabled:M.state.enableWalletConnect&&!u},{type:"recent",isEnabled:n.length>0},{type:"injected",isEnabled:[...i,...o,...s].length>0},{type:"featured",isEnabled:t.length>0},{type:"custom",isEnabled:r&&r.length>0},{type:"external",isEnabled:a.length>0},{type:"recommended",isEnabled:e.length>0}].filter(g=>g.isEnabled),h=new Set(d.map(g=>g.type)),p=c.filter(g=>h.has(g)).map(g=>({type:g,isEnabled:!0})),m=d.filter(({type:g})=>!p.some(({type:f})=>f===g));return Array.from(new Set([...p,...m].map(({type:g})=>g)))}};/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ps=globalThis,bl=Ps.ShadowRoot&&(Ps.ShadyCSS===void 0||Ps.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yl=Symbol(),Ru=new WeakMap;class r1{constructor(t,r,n){if(this._$cssResult$=!0,n!==yl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(bl&&t===void 0){const n=r!==void 0&&r.length===1;n&&(t=Ru.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ru.set(r,t))}return t}toString(){return this.cssText}}const Nt=e=>new r1(typeof e=="string"?e:e+"",void 0,yl),se=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new r1(r,e,yl)},nm=(e,t)=>{if(bl)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),o=Ps.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,e.appendChild(n)}},Bu=bl?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return Nt(r)})(e):e;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{is:om,defineProperty:im,getOwnPropertyDescriptor:sm,getOwnPropertyNames:am,getOwnPropertySymbols:cm,getPrototypeOf:lm}=Object,Tr=globalThis,Lu=Tr.trustedTypes,um=Lu?Lu.emptyScript:"",Wa=Tr.reactiveElementPolyfillSupport,Zo=(e,t)=>e,Fs={toAttribute(e,t){switch(t){case Boolean:e=e?um:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Cl=(e,t)=>!om(e,t),Uu={attribute:!0,type:String,converter:Fs,reflect:!1,useDefault:!1,hasChanged:Cl};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Tr.litPropertyMetadata??(Tr.litPropertyMetadata=new WeakMap);class Ln extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Uu){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(t,n,r);o!==void 0&&im(this.prototype,t,o)}}static getPropertyDescriptor(t,r,n){const{get:o,set:i}=sm(this.prototype,t)??{get(){return this[r]},set(s){this[r]=s}};return{get:o,set(s){const a=o==null?void 0:o.call(this);i==null||i.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Uu}static _$Ei(){if(this.hasOwnProperty(Zo("elementProperties")))return;const t=lm(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Zo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Zo("properties"))){const r=this.properties,n=[...am(r),...cm(r)];for(const o of n)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const o of n)r.unshift(Bu(o))}else t!==void 0&&r.push(Bu(t));return r}static _$Eu(t,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$EO)==null||r.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nm(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostConnected)==null?void 0:n.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostDisconnected)==null?void 0:n.call(r)})}attributeChangedCallback(t,r,n){this._$AK(t,n)}_$ET(t,r){var i;const n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){const s=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Fs).toAttribute(r,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,r){var i,s;const n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const a=n.getPropertyOptions(o),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:Fs;this._$Em=o,this[o]=c.fromAttribute(r,a.type)??((s=this._$Ej)==null?void 0:s.get(o))??null,this._$Em=null}}requestUpdate(t,r,n){var o;if(t!==void 0){const i=this.constructor,s=this[t];if(n??(n=i.getPropertyOptions(t)),!((n.hasChanged??Cl)(s,r)||n.useDefault&&n.reflect&&s===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(i._$Eu(t,n))))return;this.C(t,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,s??r??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(r=void 0),this._$AL.set(t,r)),o===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,s]of o){const{wrapped:a}=s,c=this[i];a!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,s,c)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$EO)==null||r.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(t){}firstUpdated(t){}}Ln.elementStyles=[],Ln.shadowRootOptions={mode:"open"},Ln[Zo("elementProperties")]=new Map,Ln[Zo("finalized")]=new Map,Wa==null||Wa({ReactiveElement:Ln}),(Tr.reactiveElementVersions??(Tr.reactiveElementVersions=[])).push("2.1.0");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Go=globalThis,Vs=Go.trustedTypes,Mu=Vs?Vs.createPolicy("lit-html",{createHTML:e=>e}):void 0,n1="$lit$",Ar=`lit$${Math.random().toFixed(9).slice(2)}$`,o1="?"+Ar,dm=`<${o1}>`,bn=document,Ei=()=>bn.createComment(""),Ai=e=>e===null||typeof e!="object"&&typeof e!="function",xl=Array.isArray,hm=e=>xl(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Ha=`[ 	
\f\r]`,bo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zu=/-->/g,Du=/>/g,Ur=RegExp(`>|${Ha}(?:([^\\s"'>=/]+)(${Ha}*=${Ha}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ju=/'/g,Wu=/"/g,i1=/^(?:script|style|textarea|title)$/i,s1=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),A=s1(1),W=s1(2),hr=Symbol.for("lit-noChange"),Le=Symbol.for("lit-nothing"),Hu=new WeakMap,nn=bn.createTreeWalker(bn,129);function a1(e,t){if(!xl(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mu!==void 0?Mu.createHTML(t):t}const pm=(e,t)=>{const r=e.length-1,n=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=bo;for(let a=0;a<r;a++){const c=e[a];let l,u,d=-1,h=0;for(;h<c.length&&(s.lastIndex=h,u=s.exec(c),u!==null);)h=s.lastIndex,s===bo?u[1]==="!--"?s=zu:u[1]!==void 0?s=Du:u[2]!==void 0?(i1.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Ur):u[3]!==void 0&&(s=Ur):s===Ur?u[0]===">"?(s=o??bo,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,l=u[1],s=u[3]===void 0?Ur:u[3]==='"'?Wu:ju):s===Wu||s===ju?s=Ur:s===zu||s===Du?s=bo:(s=Ur,o=void 0);const p=s===Ur&&e[a+1].startsWith("/>")?" ":"";i+=s===bo?c+dm:d>=0?(n.push(l),c.slice(0,d)+n1+c.slice(d)+Ar+p):c+Ar+(d===-2?a:p)}return[a1(e,i+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class ki{constructor({strings:t,_$litType$:r},n){let o;this.parts=[];let i=0,s=0;const a=t.length-1,c=this.parts,[l,u]=pm(t,r);if(this.el=ki.createElement(l,n),nn.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=nn.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(n1)){const h=u[s++],p=o.getAttribute(d).split(Ar),m=/([.?@])?(.*)/.exec(h);c.push({type:1,index:i,name:m[2],strings:p,ctor:m[1]==="."?gm:m[1]==="?"?wm:m[1]==="@"?mm:da}),o.removeAttribute(d)}else d.startsWith(Ar)&&(c.push({type:6,index:i}),o.removeAttribute(d));if(i1.test(o.tagName)){const d=o.textContent.split(Ar),h=d.length-1;if(h>0){o.textContent=Vs?Vs.emptyScript:"";for(let p=0;p<h;p++)o.append(d[p],Ei()),nn.nextNode(),c.push({type:2,index:++i});o.append(d[h],Ei())}}}else if(o.nodeType===8)if(o.data===o1)c.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(Ar,d+1))!==-1;)c.push({type:7,index:i}),d+=Ar.length-1}i++}}static createElement(t,r){const n=bn.createElement("template");return n.innerHTML=t,n}}function so(e,t,r=e,n){var s,a;if(t===hr)return t;let o=n!==void 0?(s=r._$Co)==null?void 0:s[n]:r._$Cl;const i=Ai(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=so(e,o._$AS(e,t.values),o,n)),t}class fm{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??bn).importNode(r,!0);nn.currentNode=o;let i=nn.nextNode(),s=0,a=0,c=n[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new Bi(i,i.nextSibling,this,t):c.type===1?l=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(l=new vm(i,this,t)),this._$AV.push(l),c=n[++a]}s!==(c==null?void 0:c.index)&&(i=nn.nextNode(),s++)}return nn.currentNode=bn,o}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}}class Bi{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,o){this.type=2,this._$AH=Le,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=so(this,t,r),Ai(t)?t===Le||t==null||t===""?(this._$AH!==Le&&this._$AR(),this._$AH=Le):t!==this._$AH&&t!==hr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):hm(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Le&&Ai(this._$AH)?this._$AA.nextSibling.data=t:this.T(bn.createTextNode(t)),this._$AH=t}$(t){var i;const{values:r,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ki.createElement(a1(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const s=new fm(o,this),a=s.u(this.options);s.p(r),this.T(a),this._$AH=s}}_$AC(t){let r=Hu.get(t.strings);return r===void 0&&Hu.set(t.strings,r=new ki(t)),r}k(t){xl(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const i of t)o===r.length?r.push(n=new Bi(this.O(Ei()),this.O(Ei()),this,this.options)):n=r[o],n._$AI(i),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class da{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,o,i){this.type=1,this._$AH=Le,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Le}_$AI(t,r=this,n,o){const i=this.strings;let s=!1;if(i===void 0)t=so(this,t,r,0),s=!Ai(t)||t!==this._$AH&&t!==hr,s&&(this._$AH=t);else{const a=t;let c,l;for(t=i[0],c=0;c<i.length-1;c++)l=so(this,a[n+c],r,c),l===hr&&(l=this._$AH[c]),s||(s=!Ai(l)||l!==this._$AH[c]),l===Le?t=Le:t!==Le&&(t+=(l??"")+i[c+1]),this._$AH[c]=l}s&&!o&&this.j(t)}j(t){t===Le?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class gm extends da{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Le?void 0:t}}class wm extends da{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Le)}}class mm extends da{constructor(t,r,n,o,i){super(t,r,n,o,i),this.type=5}_$AI(t,r=this){if((t=so(this,t,r,0)??Le)===hr)return;const n=this._$AH,o=t===Le&&n!==Le||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==Le&&(n===Le||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class vm{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){so(this,t)}}const Fa=Go.litHtmlPolyfillSupport;Fa==null||Fa(ki,Bi),(Go.litHtmlVersions??(Go.litHtmlVersions=[])).push("3.3.0");const bm=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let o=n._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;n._$litPart$=o=new Bi(t.insertBefore(Ei(),i),i,void 0,r??{})}return o._$AI(e),o};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const dn=globalThis;class J extends Ln{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=bm(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return hr}}var Id;J._$litElement$=!0,J.finalized=!0,(Id=dn.litElementHydrateSupport)==null||Id.call(dn,{LitElement:J});const Va=dn.litElementPolyfillSupport;Va==null||Va({LitElement:J}),(dn.litElementVersions??(dn.litElementVersions=[])).push("4.2.0");let Ko,Pr,$r;function ym(e,t){Ko=document.createElement("style"),Pr=document.createElement("style"),$r=document.createElement("style"),Ko.textContent=Hn(e).core.cssText,Pr.textContent=Hn(e).dark.cssText,$r.textContent=Hn(e).light.cssText,document.head.appendChild(Ko),document.head.appendChild(Pr),document.head.appendChild($r),c1(t)}function c1(e){Pr&&$r&&(e==="light"?(Pr.removeAttribute("media"),$r.media="enabled"):($r.removeAttribute("media"),Pr.media="enabled"))}function Cm(e){Ko&&Pr&&$r&&(Ko.textContent=Hn(e).core.cssText,Pr.textContent=Hn(e).dark.cssText,$r.textContent=Hn(e).light.cssText)}function Hn(e){return{core:se`
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
        --w3m-color-mix-strength: ${Nt(e!=null&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${Nt((e==null?void 0:e["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${Nt((e==null?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${Nt((e==null?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${Nt((e==null?void 0:e["--w3m-z-index"])||999)};

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
    `,light:se`
      :root {
        --w3m-color-mix: ${Nt((e==null?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${Nt(kr(e,"dark")["--w3m-accent"])};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: ${Nt(kr(e,"dark")["--w3m-background"])};
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
    `,dark:se`
      :root {
        --w3m-color-mix: ${Nt((e==null?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${Nt(kr(e,"light")["--w3m-accent"])};
        --w3m-default: #000;

        --wui-color-modal-bg-base: ${Nt(kr(e,"light")["--w3m-background"])};
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
    `}}const be=se`
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
`,Ye=se`
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
`,Li=se`
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
`,Ve={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){try{return new URL(e).hostname}catch{return""}},getTruncateString({string:e,charsStart:t,charsEnd:r,truncate:n}){return e.length<=t+r?e:n==="end"?`${e.substring(0,t)}...`:n==="start"?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`},generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").replace(/[^a-f0-9]/gu,"").substring(0,6).padEnd(6,"0"),r=this.hexToRgb(t),n=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),o=100-3*Number(n==null?void 0:n.replace("px","")),i=`${o}% ${o}% at 65% 40%`,s=[];for(let a=0;a<5;a+=1){const c=this.tintColor(r,.15*a);s.push(`rgb(${c[0]}, ${c[1]}, ${c[2]})`)}return`
    --local-color-1: ${s[0]};
    --local-color-2: ${s[1]};
    --local-color-3: ${s[2]};
    --local-color-4: ${s[3]};
    --local-color-5: ${s[4]};
    --local-radial-circle: ${i}
   `},hexToRgb(e){const t=parseInt(e,16),r=t>>16&255,n=t>>8&255,o=t&255;return[r,n,o]},tintColor(e,t){const[r,n,o]=e,i=Math.round(r+(255-r)*t),s=Math.round(n+(255-n)*t),a=Math.round(o+(255-o)*t);return[i,s,a]},isNumber(e){return/^[0-9]+$/u.test(e)},getColorTheme(e){var t;return e||(typeof window<"u"&&window.matchMedia?(t=window.matchMedia("(prefers-color-scheme: dark)"))!=null&&t.matches?"dark":"light":"dark")},splitBalance(e){const t=e.split(".");return t.length===2?[t[0],t[1]]:["0","00"]},roundNumber(e,t,r){return e.toString().length>=t?Number(e).toFixed(r):e},formatNumberToLocalString(e,t=2){return e===void 0?"0.00":typeof e=="number"?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t})}};function xm(e,t){const{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(o){customElements.get(e)||customElements.define(e,o)}}}function Em(e,t){return customElements.get(e)||customElements.define(e,t),t}function Y(e){return function(t){return typeof t=="function"?Em(e,t):xm(e,t)}}function Am(e){if(e.length>=255)throw new TypeError("Alphabet too long");const t=new Uint8Array(256);for(let l=0;l<t.length;l++)t[l]=255;for(let l=0;l<e.length;l++){const u=e.charAt(l),d=u.charCodeAt(0);if(t[d]!==255)throw new TypeError(u+" is ambiguous");t[d]=l}const r=e.length,n=e.charAt(0),o=Math.log(r)/Math.log(256),i=Math.log(256)/Math.log(r);function s(l){if(l instanceof Uint8Array||(ArrayBuffer.isView(l)?l=new Uint8Array(l.buffer,l.byteOffset,l.byteLength):Array.isArray(l)&&(l=Uint8Array.from(l))),!(l instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(l.length===0)return"";let u=0,d=0,h=0;const p=l.length;for(;h!==p&&l[h]===0;)h++,u++;const m=(p-h)*i+1>>>0,g=new Uint8Array(m);for(;h!==p;){let v=l[h],b=0;for(let k=m-1;(v!==0||b<d)&&k!==-1;k--,b++)v+=256*g[k]>>>0,g[k]=v%r>>>0,v=v/r>>>0;if(v!==0)throw new Error("Non-zero carry");d=b,h++}let f=m-d;for(;f!==m&&g[f]===0;)f++;let w=n.repeat(u);for(;f<m;++f)w+=e.charAt(g[f]);return w}function a(l){if(typeof l!="string")throw new TypeError("Expected String");if(l.length===0)return new Uint8Array;let u=0,d=0,h=0;for(;l[u]===n;)d++,u++;const p=(l.length-u)*o+1>>>0,m=new Uint8Array(p);for(;u<l.length;){const v=l.charCodeAt(u);if(v>255)return;let b=t[v];if(b===255)return;let k=0;for(let $=p-1;(b!==0||k<h)&&$!==-1;$--,k++)b+=r*m[$]>>>0,m[$]=b%256>>>0,b=b/256>>>0;if(b!==0)throw new Error("Non-zero carry");h=k,u++}let g=p-h;for(;g!==p&&m[g]===0;)g++;const f=new Uint8Array(d+(p-g));let w=d;for(;g!==p;)f[w++]=m[g++];return f}function c(l){const u=a(l);if(u)return u;throw new Error("Non-base"+r+" character")}return{encode:s,decodeUnsafe:a,decode:c}}var km="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",Im=Am(km);const Qi={ERROR_CODE_UNRECOGNIZED_CHAIN_ID:4902,ERROR_CODE_DEFAULT:5e3,ERROR_INVALID_CHAIN_ID:32603},l1={gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},Nm={block:gg({format(e){var t;return{transactions:(t=e.transactions)==null?void 0:t.map(r=>{if(typeof r=="string")return r;const n=cl(r);return n.typeHex==="0x7e"&&(n.isSystemTx=r.isSystemTx,n.mint=r.mint?On(r.mint):void 0,n.sourceHash=r.sourceHash,n.type="deposit"),n}),stateRoot:e.stateRoot}}}),transaction:hg({format(e){const t={};return e.type==="0x7e"&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?On(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:ow({format(e){return{l1GasPrice:e.l1GasPrice?On(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?On(e.l1GasUsed):null,l1Fee:e.l1Fee?On(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null}}})};function Sm(e,t){return Pm(e)?Tm(e):Kg(e,t)}const _m={transaction:Sm};function Tm(e){$m(e);const{sourceHash:t,data:r,from:n,gas:o,isSystemTx:i,mint:s,to:a,value:c}=e,l=[t,n,a??"0x",s?ue(s):"0x",c?ue(c):"0x",o?ue(o):"0x",i?"0x1":"0x",r??"0x"];return Pi(["0x7e",uo(l)])}function Pm(e){return e.type==="deposit"||typeof e.sourceHash<"u"}function $m(e){const{from:t,to:r}=e;if(t&&!wn(t))throw new gn({address:t});if(r&&!wn(r))throw new gn({address:r})}const te={contracts:l1,formatters:Nm,serializers:_m};({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts},Lt({id:53456,name:"BirdLayer",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.birdlayer.xyz","https://rpc1.birdlayer.xyz"],webSocket:["wss://rpc.birdlayer.xyz/ws"]}},blockExplorers:{default:{name:"BirdLayer Explorer",url:"https://scan.birdlayer.xyz"}}}));({...te.contracts});const qa=1;Lt({...te,id:60808,name:"BOB",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.gobob.xyz"],webSocket:["wss://rpc.gobob.xyz"]}},blockExplorers:{default:{name:"BOB Explorer",url:"https://explorer.gobob.xyz"}},contracts:{...te.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:23131},l2OutputOracle:{[qa]:{address:"0xdDa53E23f8a32640b04D7256e651C1db98dB11C1",blockCreated:4462615}},portal:{[qa]:{address:"0x8AdeE124447435fE03e3CD24dF3f4cAE32E65a3E",blockCreated:4462615}}},sourceId:qa});const Za=11155111;Lt({...te,id:808813,name:"BOB Sepolia",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://bob-sepolia.rpc.gobob.xyz"],webSocket:["wss://bob-sepolia.rpc.gobob.xyz"]}},blockExplorers:{default:{name:"BOB Sepolia Explorer",url:"https://bob-sepolia.explorer.gobob.xyz"}},contracts:{...te.contracts,multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:35677},l2OutputOracle:{[Za]:{address:"0x14D0069452b4AE2b250B395b8adAb771E4267d2f",blockCreated:4462615}},portal:{[Za]:{address:"0x867B1Aa872b9C8cB5E9F7755feDC45BB24Ad0ae4",blockCreated:4462615}}},testnet:!0,sourceId:Za});const Om={contracts:l1};({...Om.contracts},Lt({id:44,name:"Crab Network",nativeCurrency:{decimals:18,name:"Crab Network Native Token",symbol:"CRAB"},rpcUrls:{default:{http:["https://crab-rpc.darwinia.network"],webSocket:["wss://crab-rpc.darwinia.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://crab-scan.darwinia.network"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:3032593}}})),Lt({id:66665,name:"Creator",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.creatorchain.io"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.creatorchain.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11"}},testnet:!0}),{...te.contracts},{...te.contracts},Lt({id:53457,name:"DODOchain Testnet",nativeCurrency:{decimals:18,name:"DODO",symbol:"DODO"},rpcUrls:{default:{http:["https://dodochain-testnet.alt.technology"],webSocket:["wss://dodochain-testnet.alt.technology/ws"]}},blockExplorers:{default:{name:"DODOchain Testnet (Sepolia) Explorer",url:"https://testnet-scan.dodochain.com"}},testnet:!0});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});const Rm=11155111;Lt({...te,id:3397901,network:"funkiSepolia",name:"Funki Sepolia Sandbox",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://funki-testnet.alt.technology"]}},blockExplorers:{default:{name:"Funki Sepolia Sandbox Explorer",url:"https://sepolia-sandbox.funkichain.com/"}},testnet:!0,contracts:{...te.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1620204}},sourceId:Rm});const es=17e3;Lt({...te,name:"Garnet Testnet",testnet:!0,id:17069,sourceId:es,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.garnetchain.com"],webSocket:["wss://rpc.garnetchain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.garnetchain.com"}},contracts:{...te.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{[es]:{address:"0x57ee40586fbE286AfC75E67cb69511A6D9aF5909",blockCreated:1274684}},l2OutputOracle:{[es]:{address:"0xCb8E7AC561b8EF04F2a15865e9fbc0766FEF569B",blockCreated:1274684}},l1StandardBridge:{[es]:{address:"0x09bcDd311FE398F80a78BE37E489f5D440DB95DE",blockCreated:1274684}}}});({...te.contracts});({...te.contracts},Lt({id:701,name:"Koi Network",nativeCurrency:{decimals:18,name:"Koi Network Native Token",symbol:"KRING"},rpcUrls:{default:{http:["https://koi-rpc.darwinia.network"],webSocket:["wss://koi-rpc.darwinia.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://koi-scan.darwinia.network"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:180001}},testnet:!0}));({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});const Fu=11155111;Lt({...te,name:"Pyrope Testnet",testnet:!0,id:695569,sourceId:Fu,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.pyropechain.com"],webSocket:["wss://rpc.pyropechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://pyrope.blockscout.com"}},contracts:{...te.contracts,l1StandardBridge:{[Fu]:{address:"0xC24932c31D9621aE9e792576152B7ef010cFC2F8"}}}});const ts=1;Lt({...te,name:"Redstone",id:690,sourceId:ts,nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.redstonechain.com"],webSocket:["wss://rpc.redstonechain.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.redstone.xyz"}},contracts:{...te.contracts,multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"},portal:{[ts]:{address:"0xC7bCb0e8839a28A1cFadd1CF716de9016CdA51ae",blockCreated:19578329}},l2OutputOracle:{[ts]:{address:"0xa426A052f657AEEefc298b3B5c35a470e4739d69",blockCreated:19578337}},l1StandardBridge:{[ts]:{address:"0xc473ca7E02af24c129c2eEf51F2aDf0411c1Df69",blockCreated:19578331}}}});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts},{...te.contracts}),{...te.contracts};({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});({...te.contracts});function Fn(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}const Vu=Fn({id:"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",name:"Solana",network:"solana-mainnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!1,chainNamespace:"solana",caipNetworkId:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",deprecatedCaipNetworkId:"solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"}),qu=Fn({id:"EtWTRABZaYq6iMfeYKouRu166VU2xqa1",name:"Solana Devnet",network:"solana-devnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",deprecatedCaipNetworkId:"solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"});Fn({id:"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",name:"Solana Testnet",network:"solana-testnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"}),Fn({id:"000000000019d6689c085ae165831e93",caipNetworkId:"bip122:000000000019d6689c085ae165831e93",chainNamespace:"bip122",name:"Bitcoin",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}}),Fn({id:"000000000933ea01ad0ee984209779ba",caipNetworkId:"bip122:000000000933ea01ad0ee984209779ba",chainNamespace:"bip122",name:"Bitcoin Testnet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});const Bm={solana:["solana_signMessage","solana_signTransaction","solana_requestAccounts","solana_getAccounts","solana_signAllTransactions","solana_signAndSendTransaction"],eip155:["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_showCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"],bip122:["sendTransfer","signMessage","signPsbt","getAccountAddresses"]},u1={getMethodsByChainNamespace(e){return Bm[e]||[]},createDefaultNamespace(e){return{methods:this.getMethodsByChainNamespace(e),events:["accountsChanged","chainChanged"],chains:[],rpcMap:{}}},applyNamespaceOverrides(e,t){if(!t)return{...e};const r={...e},n=new Set;if(t.methods&&Object.keys(t.methods).forEach(o=>n.add(o)),t.chains&&Object.keys(t.chains).forEach(o=>n.add(o)),t.events&&Object.keys(t.events).forEach(o=>n.add(o)),t.rpcMap&&Object.keys(t.rpcMap).forEach(o=>{const[i]=o.split(":");i&&n.add(i)}),n.forEach(o=>{r[o]||(r[o]=this.createDefaultNamespace(o))}),t.methods&&Object.entries(t.methods).forEach(([o,i])=>{r[o]&&(r[o].methods=i)}),t.chains&&Object.entries(t.chains).forEach(([o,i])=>{r[o]&&(r[o].chains=i)}),t.events&&Object.entries(t.events).forEach(([o,i])=>{r[o]&&(r[o].events=i)}),t.rpcMap){const o=new Set;Object.entries(t.rpcMap).forEach(([i,s])=>{const[a,c]=i.split(":");!a||!c||!r[a]||(r[a].rpcMap||(r[a].rpcMap={}),o.has(a)||(r[a].rpcMap={},o.add(a)),r[a].rpcMap[c]=s)})}return r},createNamespaces(e,t){const r=e.reduce((n,o)=>{const{id:i,chainNamespace:s,rpcUrls:a}=o,c=a.default.http[0];n[s]||(n[s]=this.createDefaultNamespace(s));const l=`${s}:${i}`,u=n[s];switch(u.chains.push(l),l){case Vu.caipNetworkId:u.chains.push(Vu.deprecatedCaipNetworkId);break;case qu.caipNetworkId:u.chains.push(qu.deprecatedCaipNetworkId);break}return u!=null&&u.rpcMap&&c&&(u.rpcMap[i]=c),n},{});return this.applyNamespaceOverrides(r,t)},resolveReownName:async e=>{var r;const t=await X0.resolveName(e);return((r=(Object.values(t==null?void 0:t.addresses)||[])[0])==null?void 0:r.address)||!1},getChainsFromNamespaces(e={}){return Object.values(e).flatMap(t=>{const r=t.chains||[],n=t.accounts.map(o=>{const[i,s]=o.split(":");return`${i}:${s}`});return Array.from(new Set([...r,...n]))})},isSessionEventData(e){return typeof e=="object"&&e!==null&&"id"in e&&"topic"in e&&"params"in e&&typeof e.params=="object"&&e.params!==null&&"chainId"in e.params&&"event"in e.params&&typeof e.params.event=="object"&&e.params.event!==null}};class d1{constructor({provider:t,namespace:r}){this.id=re.CONNECTOR_ID.WALLET_CONNECT,this.name=Ds.ConnectorNamesMap[re.CONNECTOR_ID.WALLET_CONNECT],this.type="WALLET_CONNECT",this.imageId=Ds.ConnectorImageIds[re.CONNECTOR_ID.WALLET_CONNECT],this.getCaipNetworks=y.getCaipNetworks.bind(y),this.caipNetworks=this.getCaipNetworks(),this.provider=t,this.chain=r}get chains(){return this.getCaipNetworks()}async connectWalletConnect(){if(!await this.authenticate()){const t=this.getCaipNetworks(),r=M.state.universalProviderConfigOverride,n=u1.createNamespaces(t,r);await this.provider.connect({optionalNamespaces:n})}return{clientId:await this.provider.client.core.crypto.getClientId(),session:this.provider.session}}async disconnect(){await this.provider.disconnect()}async authenticate(){const t=this.chains.map(r=>r.caipNetworkId);return _r.universalProviderAuthenticate({universalProvider:this.provider,chains:t,methods:Lm})}}const Lm=["eth_accounts","eth_requestAccounts","eth_sendRawTransaction","eth_sign","eth_signTransaction","eth_signTypedData","eth_signTypedData_v3","eth_signTypedData_v4","eth_sendTransaction","personal_sign","wallet_switchEthereumChain","wallet_addEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode","wallet_getCallsStatus","wallet_sendCalls","wallet_getCapabilities","wallet_grantPermissions","wallet_revokePermissions","wallet_getAssets"];class Um{constructor(t){this.availableConnectors=[],this.eventListeners=new Map,this.getCaipNetworks=r=>y.getCaipNetworks(r),t&&this.construct(t)}construct(t){this.projectId=t.projectId,this.namespace=t.namespace,this.adapterType=t.adapterType}get connectors(){return this.availableConnectors}get networks(){return this.getCaipNetworks(this.namespace)}setAuthProvider(t){this.addConnector({id:re.CONNECTOR_ID.AUTH,type:"AUTH",name:re.CONNECTOR_NAMES.AUTH,provider:t,imageId:Ds.ConnectorImageIds[re.CONNECTOR_ID.AUTH],chain:this.namespace,chains:[]})}addConnector(...t){const r=new Set;this.availableConnectors=[...t,...this.availableConnectors].filter(n=>r.has(n.id)?!1:(r.add(n.id),!0)),this.emit("connectors",this.availableConnectors)}setStatus(t,r){ee.setStatus(t,r)}on(t,r){var n;this.eventListeners.has(t)||this.eventListeners.set(t,new Set),(n=this.eventListeners.get(t))==null||n.add(r)}off(t,r){const n=this.eventListeners.get(t);n&&n.delete(r)}removeAllEventListeners(){this.eventListeners.forEach(t=>{t.clear()})}emit(t,r){const n=this.eventListeners.get(t);n&&n.forEach(o=>o(r))}async connectWalletConnect(t){return{clientId:(await this.getWalletConnectConnector().connectWalletConnect()).clientId}}async switchNetwork(t){var i;const{caipNetwork:r,providerType:n}=t;if(!t.provider)return;const o="provider"in t.provider?t.provider.provider:t.provider;if(n==="WALLET_CONNECT"){o.setDefaultChain(r.caipNetworkId);return}if(o&&n==="AUTH"){const s=o,a=(i=ee.state.preferredAccountTypes)==null?void 0:i[r.chainNamespace];await s.switchNetwork(r.caipNetworkId);const c=await s.getUser({chainId:r.caipNetworkId,preferredAccountType:a});this.emit("switchNetwork",c)}}getWalletConnectConnector(){const t=this.connectors.find(r=>r instanceof d1);if(!t)throw new Error("WalletConnectConnector not found");return t}}class Mm extends Um{setUniversalProvider(t){this.addConnector(new d1({provider:t,caipNetworks:this.getCaipNetworks(),namespace:this.namespace}))}async connect(t){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:Number(t.chainId),provider:this.provider,address:""})}async disconnect(){try{await this.getWalletConnectConnector().disconnect()}catch(t){console.warn("UniversalAdapter:disconnect - error",t)}}async getAccounts({namespace:t}){var n,o,i,s,a;const r=((a=(s=(i=(o=(n=this.provider)==null?void 0:n.session)==null?void 0:o.namespaces)==null?void 0:i[t])==null?void 0:s.accounts)==null?void 0:a.map(c=>{const[,,l]=c.split(":");return l}).filter((c,l,u)=>u.indexOf(c)===l))||[];return Promise.resolve({accounts:r.map(c=>j.createAccount(t,c,t==="bip122"?"payment":"eoa"))})}async syncConnectors(){return Promise.resolve()}async getBalance(t){var n,o,i,s,a;if(!(t.caipNetwork&&je.BALANCE_SUPPORTED_CHAINS.includes((n=t.caipNetwork)==null?void 0:n.chainNamespace))||(o=t.caipNetwork)!=null&&o.testnet)return{balance:"0.00",symbol:((i=t.caipNetwork)==null?void 0:i.nativeCurrency.symbol)||""};if(ee.state.balanceLoading&&t.chainId===((s=y.state.activeCaipNetwork)==null?void 0:s.id))return{balance:ee.state.balance||"0.00",symbol:ee.state.balanceSymbol||""};const r=(await ee.fetchTokenBalance()).find(c=>{var l,u;return c.chainId===`${(l=t.caipNetwork)==null?void 0:l.chainNamespace}:${t.chainId}`&&c.symbol===((u=t.caipNetwork)==null?void 0:u.nativeCurrency.symbol)});return{balance:(r==null?void 0:r.quantity.numeric)||"0.00",symbol:(r==null?void 0:r.symbol)||((a=t.caipNetwork)==null?void 0:a.nativeCurrency.symbol)||""}}async signMessage(t){var s,a,c;const{provider:r,message:n,address:o}=t;if(!r)throw new Error("UniversalAdapter:signMessage - provider is undefined");let i="";return((s=y.state.activeCaipNetwork)==null?void 0:s.chainNamespace)===re.CHAIN.SOLANA?i=(await r.request({method:"solana_signMessage",params:{message:Im.encode(new TextEncoder().encode(n)),pubkey:o}},(a=y.state.activeCaipNetwork)==null?void 0:a.caipNetworkId)).signature:i=await r.request({method:"personal_sign",params:[n,o]},(c=y.state.activeCaipNetwork)==null?void 0:c.caipNetworkId),{signature:i}}async estimateGas(){return Promise.resolve({gas:BigInt(0)})}async getProfile(){return Promise.resolve({profileImage:"",profileName:""})}async sendTransaction(){return Promise.resolve({hash:""})}walletGetAssets(t){return Promise.resolve({})}async writeContract(){return Promise.resolve({hash:""})}async getEnsAddress(){return Promise.resolve({address:!1})}parseUnits(){return 0n}formatUnits(){return"0"}async getCapabilities(){return Promise.resolve({})}async grantPermissions(){return Promise.resolve({})}async revokePermissions(){return Promise.resolve("0x")}async syncConnection(){return Promise.resolve({id:"WALLET_CONNECT",type:"WALLET_CONNECT",chainId:1,provider:this.provider,address:""})}async switchNetwork(t){var o,i,s,a,c,l;const{caipNetwork:r}=t,n=this.getWalletConnectConnector();if(r.chainNamespace===re.CHAIN.EVM)try{await((o=n.provider)==null?void 0:o.request({method:"wallet_switchEthereumChain",params:[{chainId:ue(r.id)}]}))}catch(u){if(u.code===Qi.ERROR_CODE_UNRECOGNIZED_CHAIN_ID||u.code===Qi.ERROR_INVALID_CHAIN_ID||u.code===Qi.ERROR_CODE_DEFAULT||((s=(i=u==null?void 0:u.data)==null?void 0:i.originalError)==null?void 0:s.code)===Qi.ERROR_CODE_UNRECOGNIZED_CHAIN_ID)try{await((l=n.provider)==null?void 0:l.request({method:"wallet_addEthereumChain",params:[{chainId:ue(r.id),rpcUrls:[(a=r==null?void 0:r.rpcUrls.chainDefault)==null?void 0:a.http],chainName:r.name,nativeCurrency:r.nativeCurrency,blockExplorerUrls:[(c=r.blockExplorers)==null?void 0:c.default.url]}]}))}catch{throw new Error("Chain is not supported")}}n.provider.setDefaultChain(r.caipNetworkId)}getWalletConnectProvider(){var t;return(t=this.connectors.find(r=>r.type==="WALLET_CONNECT"))==null?void 0:t.provider}}class zm{constructor(t){this.chainNamespaces=[],this.reportedAlertErrors={},this.getCaipNetwork=(r,n)=>{var o,i,s,a;if(r){const c=(i=(o=y.getNetworkData(r))==null?void 0:o.requestedCaipNetworks)==null?void 0:i.find(u=>u.id===n);return c||((s=y.getNetworkData(r))==null?void 0:s.caipNetwork)||((a=y.getRequestedCaipNetworks(r).filter(u=>u.chainNamespace===r))==null?void 0:a[0])}return y.state.activeCaipNetwork||this.defaultCaipNetwork},this.getCaipNetworkId=()=>{const r=this.getCaipNetwork();if(r)return r.id},this.getCaipNetworks=r=>y.getCaipNetworks(r),this.getActiveChainNamespace=()=>y.state.activeChain,this.setRequestedCaipNetworks=(r,n)=>{y.setRequestedCaipNetworks(r,n)},this.getApprovedCaipNetworkIds=()=>y.getAllApprovedCaipNetworkIds(),this.getCaipAddress=r=>y.state.activeChain===r||!r?y.state.activeCaipAddress:y.getAccountProp("caipAddress",r),this.setClientId=r=>{ce.setClientId(r)},this.getProvider=r=>Te.getProvider(r),this.getProviderType=r=>Te.getProviderId(r),this.getPreferredAccountType=r=>{var n;return(n=ee.state.preferredAccountTypes)==null?void 0:n[r]},this.setCaipAddress=(r,n)=>{ee.setCaipAddress(r,n)},this.setBalance=(r,n,o)=>{ee.setBalance(r,n,o)},this.setProfileName=(r,n)=>{ee.setProfileName(r,n)},this.setProfileImage=(r,n)=>{ee.setProfileImage(r,n)},this.setUser=(r,n)=>{ee.setUser(r,n),M.state.enableEmbedded&&ge.close()},this.resetAccount=r=>{ee.resetAccount(r)},this.setCaipNetwork=r=>{y.setActiveCaipNetwork(r)},this.setCaipNetworkOfNamespace=(r,n)=>{y.setChainNetworkData(n,{caipNetwork:r})},this.setAllAccounts=(r,n)=>{ee.setAllAccounts(r,n),M.setHasMultipleAddresses((r==null?void 0:r.length)>1)},this.setStatus=(r,n)=>{ee.setStatus(r,n),G.isConnected()?X.setConnectionStatus("connected"):X.setConnectionStatus("disconnected")},this.getAddressByChainNamespace=r=>y.getAccountProp("address",r),this.setConnectors=r=>{const n=[...G.state.allConnectors,...r];G.setConnectors(n)},this.fetchIdentity=r=>ce.fetchIdentity(r),this.getReownName=r=>X0.getNamesForAddress(r),this.getConnectors=()=>G.getConnectors(),this.getConnectorImage=r=>We.getConnectorImage(r),this.setConnectedWalletInfo=(r,n)=>{const o=Te.getProviderId(n),i=r?{...r,type:o}:void 0;ee.setConnectedWalletInfo(i,n)},this.getIsConnectedState=()=>!!y.state.activeCaipAddress,this.addAddressLabel=(r,n,o)=>{ee.addAddressLabel(r,n,o)},this.removeAddressLabel=(r,n)=>{ee.removeAddressLabel(r,n)},this.getAddress=r=>y.state.activeChain===r||!r?ee.state.address:y.getAccountProp("address",r),this.setApprovedCaipNetworksData=r=>y.setApprovedCaipNetworksData(r),this.resetNetwork=r=>{y.resetNetwork(r)},this.addConnector=r=>{G.addConnector(r)},this.resetWcConnection=()=>{Q.resetWcConnection()},this.setAddressExplorerUrl=(r,n)=>{ee.setAddressExplorerUrl(r,n)},this.setSmartAccountDeployed=(r,n)=>{ee.setSmartAccountDeployed(r,n)},this.setSmartAccountEnabledNetworks=(r,n)=>{y.setSmartAccountEnabledNetworks(r,n)},this.setPreferredAccountType=(r,n)=>{ee.setPreferredAccountType(r,n)},this.setEIP6963Enabled=r=>{M.setEIP6963Enabled(r)},this.handleUnsafeRPCRequest=()=>{if(this.isOpen()){if(this.isTransactionStackEmpty())return;this.redirect("ApproveTransaction")}else this.open({view:"ApproveTransaction"})},this.options=t,this.version=t.sdkVersion,this.caipNetworks=this.extendCaipNetworks(t),this.chainNamespaces=this.getChainNamespacesSet(t.adapters,this.caipNetworks),this.defaultCaipNetwork=this.extendDefaultCaipNetwork(t),this.chainAdapters=this.createAdapters(t.adapters),this.initialize(t)}getChainNamespacesSet(t,r){const n=t==null?void 0:t.map(i=>i.namespace).filter(i=>!!i);if(n!=null&&n.length)return[...new Set(n)];const o=r==null?void 0:r.map(i=>i.chainNamespace);return[...new Set(o)]}async initialize(t){this.initControllers(t),await this.initChainAdapters(),await this.injectModalUi(),this.sendInitializeEvent(t),ur.set({initialized:!0}),await this.syncExistingConnection()}sendInitializeEvent(t){var n;const{...r}=t;delete r.adapters,delete r.universalProvider,he.sendEvent({type:"track",event:"INITIALIZE",properties:{...r,networks:t.networks.map(o=>o.id),siweConfig:{options:((n=t.siweConfig)==null?void 0:n.options)||{}}}})}initControllers(t){this.initializeOptionsController(t),this.initializeChainController(t),this.initializeThemeController(t),this.initializeConnectionController(t),this.initializeConnectorController()}initializeThemeController(t){t.themeMode&&De.setThemeMode(t.themeMode),t.themeVariables&&De.setThemeVariables(t.themeVariables)}initializeChainController(t){if(!this.connectionControllerClient||!this.networkControllerClient)throw new Error("ConnectionControllerClient and NetworkControllerClient must be set");y.initialize(t.adapters??[],this.caipNetworks,{connectionControllerClient:this.connectionControllerClient,networkControllerClient:this.networkControllerClient});const r=this.getDefaultNetwork();r&&y.setActiveCaipNetwork(r)}initializeConnectionController(t){Q.setWcBasic(t.basic??!1)}initializeConnectorController(){G.initialize(this.chainNamespaces)}initializeOptionsController(t){var i;M.setDebug(t.debug!==!1),M.setEnableWalletConnect(t.enableWalletConnect!==!1),M.setEnableWalletGuide(t.enableWalletGuide!==!1),M.setEnableWallets(t.enableWallets!==!1),M.setEIP6963Enabled(t.enableEIP6963!==!1),M.setEnableNetworkSwitch(t.enableNetworkSwitch!==!1),M.setEnableAuthLogger(t.enableAuthLogger!==!1),M.setCustomRpcUrls(t.customRpcUrls),M.setSdkVersion(t.sdkVersion),M.setProjectId(t.projectId),M.setEnableEmbedded(t.enableEmbedded),M.setAllWallets(t.allWallets),M.setIncludeWalletIds(t.includeWalletIds),M.setExcludeWalletIds(t.excludeWalletIds),M.setFeaturedWalletIds(t.featuredWalletIds),M.setTokens(t.tokens),M.setTermsConditionsUrl(t.termsConditionsUrl),M.setPrivacyPolicyUrl(t.privacyPolicyUrl),M.setCustomWallets(t.customWallets),M.setFeatures(t.features),M.setAllowUnsupportedChain(t.allowUnsupportedChain),M.setUniversalProviderConfigOverride(t.universalProviderConfigOverride),M.setDefaultAccountTypes(t.defaultAccountTypes);const r=X.getPreferredAccountTypes(),n={...M.state.defaultAccountTypes,...r};ee.setPreferredAccountTypes(n);const o=this.getDefaultMetaData();if(!t.metadata&&o&&(t.metadata=o),M.setMetadata(t.metadata),M.setDisableAppend(t.disableAppend),M.setEnableEmbedded(t.enableEmbedded),M.setSIWX(t.siwx),!t.projectId){Sr.open(Ji.ALERT_ERRORS.PROJECT_ID_NOT_CONFIGURED,"error");return}if((i=t.adapters)!=null&&i.find(s=>s.namespace===re.CHAIN.EVM)&&t.siweConfig){if(t.siwx)throw new Error("Cannot set both `siweConfig` and `siwx` options");M.setSIWX(t.siweConfig.mapToSIWX())}}getDefaultMetaData(){var t,r,n,o;return typeof window<"u"&&typeof document<"u"?{name:((r=(t=document.getElementsByTagName("title"))==null?void 0:t[0])==null?void 0:r.textContent)||"",description:((n=document.querySelector('meta[property="og:description"]'))==null?void 0:n.content)||"",url:window.location.origin,icons:[((o=document.querySelector('link[rel~="icon"]'))==null?void 0:o.href)||""]}:null}setUnsupportedNetwork(t){const r=this.getActiveChainNamespace();if(r){const n=Bn.getUnsupportedNetwork(`${r}:${t}`);y.setActiveCaipNetwork(n)}}getDefaultNetwork(){return Bn.getCaipNetworkFromStorage(this.defaultCaipNetwork)}extendCaipNetwork(t,r){return Bn.extendCaipNetwork(t,{customNetworkImageUrls:r.chainImages,projectId:r.projectId})}extendCaipNetworks(t){return Bn.extendCaipNetworks(t.networks,{customNetworkImageUrls:t.chainImages,customRpcUrls:t.customRpcUrls,projectId:t.projectId})}extendDefaultCaipNetwork(t){const r=t.networks.find(n=>{var o;return n.id===((o=t.defaultNetwork)==null?void 0:o.id)});return r?Bn.extendCaipNetwork(r,{customNetworkImageUrls:t.chainImages,customRpcUrls:t.customRpcUrls,projectId:t.projectId}):void 0}createClients(){this.connectionControllerClient={connectWalletConnect:async()=>{var i;const t=y.state.activeChain,r=this.getAdapter(t),n=(i=this.getCaipNetwork(t))==null?void 0:i.id;if(!r)throw new Error("Adapter not found");const o=await r.connectWalletConnect(n);this.close(),this.setClientId((o==null?void 0:o.clientId)||null),X.setConnectedNamespaces([...y.state.chains.keys()]),this.chainNamespaces.forEach(s=>{G.setConnectorId(Cr.CONNECTOR_TYPE_WALLET_CONNECT,s)}),await this.syncWalletConnectAccount()},connectExternal:async({id:t,info:r,type:n,provider:o,chain:i,caipNetwork:s})=>{var p,m,g,f,w,v;const a=y.state.activeChain,c=i||a,l=this.getAdapter(c);if(i&&i!==a&&!s){const b=this.getCaipNetworks().find(k=>k.chainNamespace===i);b&&this.setCaipNetwork(b)}if(!l)throw new Error("Adapter not found");const u=this.getCaipNetwork(c),d=await l.connect({id:t,info:r,type:n,provider:o,chainId:(s==null?void 0:s.id)||(u==null?void 0:u.id),rpcUrl:((g=(m=(p=s==null?void 0:s.rpcUrls)==null?void 0:p.default)==null?void 0:m.http)==null?void 0:g[0])||((v=(w=(f=u==null?void 0:u.rpcUrls)==null?void 0:f.default)==null?void 0:w.http)==null?void 0:v[0])});if(!d)return;X.addConnectedNamespace(c),this.syncProvider({...d,chainNamespace:c});const{accounts:h}=await l.getAccounts({namespace:c,id:t});this.setAllAccounts(h,c),this.setStatus("connected",c)},reconnectExternal:async({id:t,info:r,type:n,provider:o})=>{var a;const i=y.state.activeChain,s=this.getAdapter(i);s!=null&&s.reconnect&&(await(s==null?void 0:s.reconnect({id:t,info:r,type:n,provider:o,chainId:(a=this.getCaipNetwork())==null?void 0:a.id})),X.addConnectedNamespace(i))},disconnect:async t=>{const r=t||y.state.activeChain,n=this.getAdapter(r),o=Te.getProvider(r),i=Te.getProviderId(r);await(n==null?void 0:n.disconnect({provider:o,providerType:i})),X.removeConnectedNamespace(r),Te.resetChain(r),this.setUser(void 0,r),this.setStatus("disconnected",r)},checkInstalled:t=>t?t.some(r=>{var n;return!!((n=window.ethereum)!=null&&n[String(r)])}):!!window.ethereum,signMessage:async t=>{var r,n;return((n=await((r=this.getAdapter(y.state.activeChain))==null?void 0:r.signMessage({message:t,address:ee.state.address,provider:Te.getProvider(y.state.activeChain)})))==null?void 0:n.signature)||""},sendTransaction:async t=>{var r;if(t.chainNamespace===re.CHAIN.EVM){const n=this.getAdapter(y.state.activeChain),o=Te.getProvider(y.state.activeChain);return((r=await(n==null?void 0:n.sendTransaction({...t,caipNetwork:this.getCaipNetwork(),provider:o})))==null?void 0:r.hash)||""}return""},estimateGas:async t=>{var r;if(t.chainNamespace===re.CHAIN.EVM){const n=this.getAdapter(y.state.activeChain),o=Te.getProvider(y.state.activeChain),i=this.getCaipNetwork();if(!i)throw new Error("CaipNetwork is undefined");return((r=await(n==null?void 0:n.estimateGas({...t,provider:o,caipNetwork:i})))==null?void 0:r.gas)||0n}return 0n},getEnsAvatar:async()=>{var t,r,n;return((n=await((r=this.getAdapter(y.state.activeChain))==null?void 0:r.getProfile({address:ee.state.address,chainId:Number((t=this.getCaipNetwork())==null?void 0:t.id)})))==null?void 0:n.profileImage)||!1},getEnsAddress:async t=>{var o;const r=this.getAdapter(y.state.activeChain),n=this.getCaipNetwork();return n&&((o=await(r==null?void 0:r.getEnsAddress({name:t,caipNetwork:n})))==null?void 0:o.address)||!1},writeContract:async t=>{var s;const r=this.getAdapter(y.state.activeChain),n=this.getCaipNetwork(),o=this.getCaipAddress(),i=Te.getProvider(y.state.activeChain);if(!n||!o)throw new Error("CaipNetwork or CaipAddress is undefined");return(s=await(r==null?void 0:r.writeContract({...t,caipNetwork:n,provider:i,caipAddress:o})))==null?void 0:s.hash},parseUnits:(t,r)=>{var n;return((n=this.getAdapter(y.state.activeChain))==null?void 0:n.parseUnits({value:t,decimals:r}))??0n},formatUnits:(t,r)=>{var n;return((n=this.getAdapter(y.state.activeChain))==null?void 0:n.formatUnits({value:t,decimals:r}))??"0"},getCapabilities:async t=>{var r;return await((r=this.getAdapter(y.state.activeChain))==null?void 0:r.getCapabilities(t))},grantPermissions:async t=>{var r;return await((r=this.getAdapter(y.state.activeChain))==null?void 0:r.grantPermissions(t))},revokePermissions:async t=>{const r=this.getAdapter(y.state.activeChain);return r!=null&&r.revokePermissions?await r.revokePermissions(t):"0x"},walletGetAssets:async t=>{var r;return await((r=this.getAdapter(y.state.activeChain))==null?void 0:r.walletGetAssets(t))??{}}},this.networkControllerClient={switchCaipNetwork:async t=>await this.switchCaipNetwork(t),getApprovedCaipNetworksData:async()=>this.getApprovedCaipNetworksData()},Q.setClient(this.connectionControllerClient)}getApprovedCaipNetworksData(){var t,r,n,o,i;if(Te.getProviderId(y.state.activeChain)===Cr.CONNECTOR_TYPE_WALLET_CONNECT){const s=(r=(t=this.universalProvider)==null?void 0:t.session)==null?void 0:r.namespaces;return{supportsAllNetworks:((i=(o=(n=this.universalProvider)==null?void 0:n.session)==null?void 0:o.peer)==null?void 0:i.metadata.name)==="MetaMask Wallet",approvedCaipNetworkIds:this.getChainsFromNamespaces(s)}}return{supportsAllNetworks:!0,approvedCaipNetworkIds:[]}}async switchCaipNetwork(t){var n;if(!t)return;const r=t.chainNamespace;if(this.getAddressByChainNamespace(t.chainNamespace)){const o=Te.getProvider(r),i=Te.getProviderId(r);if(t.chainNamespace===y.state.activeChain)await((n=this.getAdapter(r))==null?void 0:n.switchNetwork({caipNetwork:t,provider:o,providerType:i}));else if(this.setCaipNetwork(t),i===Cr.CONNECTOR_TYPE_WALLET_CONNECT)this.syncWalletConnectAccount();else{const s=this.getAddressByChainNamespace(r);s&&this.syncAccount({address:s,chainId:t.id,chainNamespace:r})}}else this.setCaipNetwork(t)}getChainsFromNamespaces(t={}){return Object.values(t).flatMap(r=>{const n=r.chains||[],o=r.accounts.map(i=>{const{chainId:s,chainNamespace:a}=gr.parseCaipAddress(i);return`${a}:${s}`});return Array.from(new Set([...n,...o]))})}createAdapters(t){return this.createClients(),this.chainNamespaces.reduce((r,n)=>{var i;const o=t==null?void 0:t.find(s=>s.namespace===n);return o?(o.construct({namespace:n,projectId:(i=this.options)==null?void 0:i.projectId,networks:this.getCaipNetworks()}),r[n]=o):r[n]=new Mm({namespace:n,networks:this.getCaipNetworks()}),r},{})}async initChainAdapter(t){var r;this.onConnectors(t),this.listenAdapter(t),(r=this.chainAdapters)==null||r[t].syncConnectors(this.options,this),await this.createUniversalProviderForAdapter(t)}async initChainAdapters(){await Promise.all(this.chainNamespaces.map(async t=>{await this.initChainAdapter(t)}))}onConnectors(t){var r;(r=this.getAdapter(t))==null||r.on("connectors",this.setConnectors.bind(this))}listenAdapter(t){const r=this.getAdapter(t);if(!r)return;const n=X.getConnectionStatus();n==="connected"?this.setStatus("connecting",t):n==="disconnected"?(X.clearAddressCache(),this.setStatus(n,t)):this.setStatus(n,t),r.on("switchNetwork",({address:o,chainId:i})=>{const s=this.getCaipNetworks().find(l=>l.id===i||l.caipNetworkId===i),a=y.state.activeChain===t,c=y.getAccountProp("address",t);if(s){const l=a&&o?o:c;l&&this.syncAccount({address:l,chainId:s.id,chainNamespace:t})}else this.setUnsupportedNetwork(i)}),r.on("disconnect",this.disconnect.bind(this,t)),r.on("pendingTransactions",()=>{const o=ee.state.address,i=y.state.activeCaipNetwork;!o||!(i!=null&&i.id)||this.updateNativeBalance(o,i.id,i.chainNamespace)}),r.on("accountChanged",({address:o,chainId:i})=>{var a,c;const s=y.state.activeChain===t;s&&i?this.syncAccount({address:o,chainId:i,chainNamespace:t}):s&&((a=y.state.activeCaipNetwork)!=null&&a.id)?this.syncAccount({address:o,chainId:(c=y.state.activeCaipNetwork)==null?void 0:c.id,chainNamespace:t}):this.syncAccountInfo(o,i,t)})}async createUniversalProviderForAdapter(t){var r,n,o;await this.getUniversalProvider(),this.universalProvider&&((o=(n=(r=this.chainAdapters)==null?void 0:r[t])==null?void 0:n.setUniversalProvider)==null||o.call(n,this.universalProvider))}async syncExistingConnection(){await Promise.allSettled(this.chainNamespaces.map(t=>this.syncNamespaceConnection(t)))}async syncNamespaceConnection(t){try{const r=G.getConnectorId(t);switch(this.setStatus("connecting",t),r){case re.CONNECTOR_ID.WALLET_CONNECT:await this.syncWalletConnectAccount();break;case re.CONNECTOR_ID.AUTH:break;default:await this.syncAdapterConnection(t)}}catch(r){console.warn("AppKit couldn't sync existing connection",r),this.setStatus("disconnected",t)}}async syncAdapterConnection(t){var s,a,c;const r=this.getAdapter(t),n=G.getConnectorId(t),o=this.getCaipNetwork(t),i=G.getConnectors(t).find(l=>l.id===n);try{if(!r||!i)throw new Error(`Adapter or connector not found for namespace ${t}`);if(!(o!=null&&o.id))throw new Error("CaipNetwork not found");const l=await(r==null?void 0:r.syncConnection({namespace:t,id:i.id,chainId:o.id,rpcUrl:(c=(a=(s=o==null?void 0:o.rpcUrls)==null?void 0:s.default)==null?void 0:a.http)==null?void 0:c[0]}));if(l){const u=await(r==null?void 0:r.getAccounts({namespace:t,id:i.id}));u&&u.accounts.length>0?this.setAllAccounts(u.accounts,t):this.setAllAccounts([j.createAccount(t,l.address,"eoa")],t),this.syncProvider({...l,chainNamespace:t}),await this.syncAccount({...l,chainNamespace:t}),this.setStatus("connected",t)}else this.setStatus("disconnected",t)}catch{this.setStatus("disconnected",t)}}async syncWalletConnectAccount(){const t=this.chainNamespaces.map(async r=>{var a,c,l,u,d;const n=this.getAdapter(r),o=((u=(l=(c=(a=this.universalProvider)==null?void 0:a.session)==null?void 0:c.namespaces)==null?void 0:l[r])==null?void 0:u.accounts)||[],i=(d=y.state.activeCaipNetwork)==null?void 0:d.id,s=o.find(h=>{const{chainId:p}=gr.parseCaipAddress(h);return p===(i==null?void 0:i.toString())})||o[0];if(s){const h=gr.validateCaipAddress(s),{chainId:p,address:m}=gr.parseCaipAddress(h);if(Te.setProviderId(r,Cr.CONNECTOR_TYPE_WALLET_CONNECT),this.caipNetworks&&y.state.activeCaipNetwork&&(n==null?void 0:n.namespace)!==re.CHAIN.EVM){const g=n==null?void 0:n.getWalletConnectProvider({caipNetworks:this.getCaipNetworks(),provider:this.universalProvider,activeCaipNetwork:y.state.activeCaipNetwork});Te.setProvider(r,g)}else Te.setProvider(r,this.universalProvider);G.setConnectorId(re.CONNECTOR_ID.WALLET_CONNECT,r),X.addConnectedNamespace(r),this.syncWalletConnectAccounts(r),await this.syncAccount({address:m,chainId:p,chainNamespace:r})}else this.setStatus("disconnected",r);await y.setApprovedCaipNetworksData(r)});await Promise.all(t)}syncWalletConnectAccounts(t){var n,o,i,s,a;const r=(a=(s=(i=(o=(n=this.universalProvider)==null?void 0:n.session)==null?void 0:o.namespaces)==null?void 0:i[t])==null?void 0:s.accounts)==null?void 0:a.map(c=>{const{address:l}=gr.parseCaipAddress(c);return l}).filter((c,l,u)=>u.indexOf(c)===l);r&&this.setAllAccounts(r.map(c=>j.createAccount(t,c,t==="bip122"?"payment":"eoa")),t)}syncProvider({type:t,provider:r,id:n,chainNamespace:o}){Te.setProviderId(o,t),Te.setProvider(o,r),G.setConnectorId(n,o)}async syncAccount(t){var d,h;const r=t.chainNamespace===y.state.activeChain,n=y.getCaipNetworkByNamespace(t.chainNamespace,t.chainId),{address:o,chainId:i,chainNamespace:s}=t,{chainId:a}=X.getActiveNetworkProps(),c=i||a,l=((d=y.state.activeCaipNetwork)==null?void 0:d.name)===re.UNSUPPORTED_NETWORK_NAME,u=y.getNetworkProp("supportsAllNetworks",s);if(this.setStatus("connected",s),!(l&&!u)&&c){let p=this.getCaipNetworks().find(f=>f.id.toString()===c.toString()),m=this.getCaipNetworks().find(f=>f.chainNamespace===s);if(!u&&!p&&!m){const f=this.getApprovedCaipNetworkIds()||[],w=f.find(b=>{var k;return((k=gr.parseCaipNetworkId(b))==null?void 0:k.chainId)===c.toString()}),v=f.find(b=>{var k;return((k=gr.parseCaipNetworkId(b))==null?void 0:k.chainNamespace)===s});p=this.getCaipNetworks().find(b=>b.caipNetworkId===w),m=this.getCaipNetworks().find(b=>b.caipNetworkId===v||"deprecatedCaipNetworkId"in b&&b.deprecatedCaipNetworkId===v)}const g=p||m;(g==null?void 0:g.chainNamespace)===y.state.activeChain?M.state.enableNetworkSwitch&&!M.state.allowUnsupportedChain&&((h=y.state.activeCaipNetwork)==null?void 0:h.name)===re.UNSUPPORTED_NETWORK_NAME?y.showUnsupportedChainUI():this.setCaipNetwork(g):r||n&&this.setCaipNetworkOfNamespace(n,s),this.syncConnectedWalletInfo(s),ml.isLowerCaseMatch(o,ee.state.address)||this.syncAccountInfo(o,g==null?void 0:g.id,s),r?await this.syncBalance({address:o,chainId:g==null?void 0:g.id,chainNamespace:s}):await this.syncBalance({address:o,chainId:n==null?void 0:n.id,chainNamespace:s})}}async syncAccountInfo(t,r,n){const o=this.getCaipAddress(n),i=r||(o==null?void 0:o.split(":")[1]);if(!i)return;const s=`${n}:${i}:${t}`;this.setCaipAddress(s,n),await this.syncIdentity({address:t,chainId:i,chainNamespace:n})}async syncReownName(t,r){try{const n=await this.getReownName(t);if(n[0]){const o=n[0];this.setProfileName(o.name,r)}else this.setProfileName(null,r)}catch{this.setProfileName(null,r)}}syncConnectedWalletInfo(t){var o;const r=G.getConnectorId(t),n=Te.getProviderId(t);if(n===Cr.CONNECTOR_TYPE_ANNOUNCED||n===Cr.CONNECTOR_TYPE_INJECTED){if(r){const i=this.getConnectors().find(s=>s.id===r);if(i){const{info:s,name:a,imageUrl:c}=i,l=c||this.getConnectorImage(i);this.setConnectedWalletInfo({name:a,icon:l,...s},t)}}}else if(n===Cr.CONNECTOR_TYPE_WALLET_CONNECT){const i=Te.getProvider(t);i!=null&&i.session&&this.setConnectedWalletInfo({...i.session.peer.metadata,name:i.session.peer.metadata.name,icon:(o=i.session.peer.metadata.icons)==null?void 0:o[0]},t)}else if(r)if(r===re.CONNECTOR_ID.COINBASE){const i=this.getConnectors().find(s=>s.id===re.CONNECTOR_ID.COINBASE);this.setConnectedWalletInfo({name:"Coinbase Wallet",icon:this.getConnectorImage(i)},t)}else this.setConnectedWalletInfo({name:r},t)}async syncBalance(t){!e0.getNetworksByNamespace(this.getCaipNetworks(),t.chainNamespace).find(r=>{var n;return r.id.toString()===((n=t.chainId)==null?void 0:n.toString())})||!t.chainId||await this.updateNativeBalance(t.address,t.chainId,t.chainNamespace)}async updateNativeBalance(t,r,n){const o=this.getAdapter(n),i=y.getCaipNetworkByNamespace(n,r);if(o){const s=await o.getBalance({address:t,chainId:r,caipNetwork:i,tokens:this.options.tokens});this.setBalance(s.balance,s.symbol,n)}}async initializeUniversalAdapter(){var n,o,i,s,a,c,l,u,d,h;const t=tm.createLogger((p,...m)=>{p&&this.handleAlertError(p),console.error(...m)}),r={projectId:(n=this.options)==null?void 0:n.projectId,metadata:{name:(o=this.options)!=null&&o.metadata?(i=this.options)==null?void 0:i.metadata.name:"",description:(s=this.options)!=null&&s.metadata?(a=this.options)==null?void 0:a.metadata.description:"",url:(c=this.options)!=null&&c.metadata?(l=this.options)==null?void 0:l.metadata.url:"",icons:(u=this.options)!=null&&u.metadata?(d=this.options)==null?void 0:d.metadata.icons:[""]},logger:t};M.setManualWCControl(!!((h=this.options)!=null&&h.manualWCControl)),this.universalProvider=this.options.universalProvider??await O1.init(r),this.listenWalletConnect()}listenWalletConnect(){this.universalProvider&&(this.universalProvider.on("display_uri",t=>{Q.setUri(t)}),this.universalProvider.on("connect",Q.finalizeWcConnection),this.universalProvider.on("disconnect",()=>{this.chainNamespaces.forEach(t=>{this.resetAccount(t)}),Q.resetWcConnection()}),this.universalProvider.on("chainChanged",t=>{const r=this.getCaipNetworks().find(o=>o.id==t),n=this.getCaipNetwork();if(!r){this.setUnsupportedNetwork(t);return}(n==null?void 0:n.id)!==(r==null?void 0:r.id)&&this.setCaipNetwork(r)}),this.universalProvider.on("session_event",t=>{if(u1.isSessionEventData(t)){const{name:r,data:n}=t.params.event;r==="accountsChanged"&&Array.isArray(n)&&j.isCaipAddress(n[0])&&this.syncAccount(gr.parseCaipAddress(n[0]))}}))}createUniversalProvider(){var t;return!this.universalProviderInitPromise&&j.isClient()&&((t=this.options)!=null&&t.projectId)&&(this.universalProviderInitPromise=this.initializeUniversalAdapter()),this.universalProviderInitPromise}async getUniversalProvider(){if(!this.universalProvider)try{await this.createUniversalProvider()}catch(t){he.sendEvent({type:"error",event:"INTERNAL_SDK_ERROR",properties:{errorType:"UniversalProviderInitError",errorMessage:t instanceof Error?t.message:"Unknown",uncaught:!1}}),console.error("AppKit:getUniversalProvider - Cannot create provider",t)}return this.universalProvider}handleAlertError(t){const r=Object.entries(Ji.UniversalProviderErrors).find(([,{message:a}])=>t.message.includes(a)),[n,o]=r??[],{message:i,alertErrorKey:s}=o??{};if(n&&i&&!this.reportedAlertErrors[n]){const a=Ji.ALERT_ERRORS[s];a&&(Sr.open(a,"error"),this.reportedAlertErrors[n]=!0)}}getAdapter(t){var r;if(t)return(r=this.chainAdapters)==null?void 0:r[t]}createAdapter(t){var o;if(!t)return;const r=t.namespace;if(!r)return;this.createClients();const n=t;n.namespace=r,n.construct({namespace:r,projectId:(o=this.options)==null?void 0:o.projectId,networks:this.getCaipNetworks()}),this.chainNamespaces.includes(r)||this.chainNamespaces.push(r),this.chainAdapters&&(this.chainAdapters[r]=n)}async open(t){if(await this.injectModalUi(),t!=null&&t.uri&&Q.setUri(t.uri),t==null?void 0:t.arguments)switch(t==null?void 0:t.view){case"Swap":return ge.open({...t,data:{swap:t.arguments}})}return ge.open(t)}async close(){await this.injectModalUi(),ge.close()}setLoading(t,r){ge.setLoading(t,r)}async disconnect(t){await Q.disconnect(t)}getError(){return""}getChainId(){var t;return(t=y.state.activeCaipNetwork)==null?void 0:t.id}async switchNetwork(t){const r=this.getCaipNetworks().find(n=>n.id===t.id);if(!r){Sr.open(Ji.ALERT_ERRORS.SWITCH_NETWORK_NOT_FOUND,"error");return}await y.switchActiveNetwork(r)}getWalletProvider(){return y.state.activeChain?Te.state.providers[y.state.activeChain]:null}getWalletProviderType(){return Te.getProviderId(y.state.activeChain)}subscribeProviders(t){return Te.subscribeProviders(t)}getThemeMode(){return De.state.themeMode}getThemeVariables(){return De.state.themeVariables}setThemeMode(t){De.setThemeMode(t),c1(De.state.themeMode)}setTermsConditionsUrl(t){M.setTermsConditionsUrl(t)}setPrivacyPolicyUrl(t){M.setPrivacyPolicyUrl(t)}setThemeVariables(t){De.setThemeVariables(t),Cm(De.state.themeVariables)}subscribeTheme(t){return De.subscribe(t)}getWalletInfo(){return ee.state.connectedWalletInfo}getAccount(t){var i;const r=G.getAuthConnector(t),n=y.getAccountData(t),o=y.state.activeChain;if(n)return{allAccounts:n.allAccounts,caipAddress:n.caipAddress,address:j.getPlainAddress(n.caipAddress),isConnected:!!n.caipAddress,status:n.status,embeddedWalletInfo:r?{user:n.user?{...n.user,username:X.getConnectedSocialUsername()}:void 0,authProvider:n.socialProvider||"email",accountType:(i=n.preferredAccountTypes)==null?void 0:i[t||o],isSmartAccountDeployed:!!n.smartAccountDeployed}:void 0}}subscribeAccount(t,r){const n=()=>{const o=this.getAccount(r);o&&t(o)};r?y.subscribeChainProp("accountState",n,r):y.subscribe(n),G.subscribe(n)}subscribeNetwork(t){return y.subscribe(({activeCaipNetwork:r})=>{t({caipNetwork:r,chainId:r==null?void 0:r.id,caipNetworkId:r==null?void 0:r.caipNetworkId})})}subscribeWalletInfo(t){return ee.subscribeKey("connectedWalletInfo",t)}subscribeShouldUpdateToAddress(t){ee.subscribeKey("shouldUpdateToAddress",t)}subscribeCaipNetworkChange(t){y.subscribeKey("activeCaipNetwork",t)}getState(){return ur.state}subscribeState(t){return ur.subscribe(t)}showErrorMessage(t){Ie.showError(t)}showSuccessMessage(t){Ie.showSuccess(t)}getEvent(){return{...he.state}}subscribeEvents(t){return he.subscribe(t)}replace(t){V.replace(t)}redirect(t){V.push(t)}popTransactionStack(t){V.popTransactionStack(t)}isOpen(){return ge.state.open}isTransactionStackEmpty(){return V.state.transactionStack.length===0}isTransactionShouldReplaceView(){var t;return(t=V.state.transactionStack[V.state.transactionStack.length-1])==null?void 0:t.replace}static getInstance(){return this.instance}updateFeatures(t){M.setFeatures(t)}updateOptions(t){const r={...M.state||{},...t};M.setOptions(r)}setConnectMethodsOrder(t){M.setConnectMethodsOrder(t)}setWalletFeaturesOrder(t){M.setWalletFeaturesOrder(t)}setCollapseWallets(t){M.setCollapseWallets(t)}setSocialsOrder(t){M.setSocialsOrder(t)}getConnectMethodsOrder(){return vn.getConnectOrderMethod(M.state.features,G.getConnectors())}addNetwork(t,r){if(this.chainAdapters&&!this.chainAdapters[t])throw new Error(`Adapter for namespace ${t} doesn't exist`);const n=this.extendCaipNetwork(r,this.options);this.getCaipNetworks().find(o=>o.id===n.id)||y.addNetwork(n)}removeNetwork(t,r){if(this.chainAdapters&&!this.chainAdapters[t])throw new Error(`Adapter for namespace ${t} doesn't exist`);this.getCaipNetworks().find(n=>n.id===r)&&y.removeNetwork(t,r)}}let Zu=!1;class h1 extends zm{async open(t){G.isConnected()||await super.open(t)}async close(){await super.close(),this.options.manualWCControl&&Q.finalizeWcConnection()}async syncIdentity(t){return Promise.resolve()}async syncBalance(t){return Promise.resolve()}async injectModalUi(){if(!Zu&&j.isClient()){if(await Promise.resolve().then(function(){return J5}),await Promise.resolve().then(function(){return pv}),!document.querySelector("w3m-modal")){const t=document.createElement("w3m-modal");!M.state.disableAppend&&!M.state.enableEmbedded&&document.body.insertAdjacentElement("beforeend",t)}Zu=!0}}}const Dm="1.7.3";function jm(e){return new h1({...e,basic:!0,sdkVersion:`html-core-${Dm}`})}var Wm=Object.freeze({__proto__:null,createAppKit:jm,AppKit:h1}),Hm=Object.defineProperty,Fm=Object.defineProperties,Vm=Object.getOwnPropertyDescriptors,Gu=Object.getOwnPropertySymbols,qm=Object.prototype.hasOwnProperty,Zm=Object.prototype.propertyIsEnumerable,Ku=(e,t,r)=>t in e?Hm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Gm=(e,t)=>{for(var r in t||(t={}))qm.call(t,r)&&Ku(e,r,t[r]);if(Gu)for(var r of Gu(t))Zm.call(t,r)&&Ku(e,r,t[r]);return e},Km=(e,t)=>Fm(e,Vm(t));function Ym(e){if(e)return{"--w3m-font-family":e["--wcm-font-family"],"--w3m-accent":e["--wcm-accent-color"],"--w3m-color-mix":e["--wcm-background-color"],"--w3m-z-index":e["--wcm-z-index"]?Number(e["--wcm-z-index"]):void 0,"--w3m-qr-color":e["--wcm-accent-color"],"--w3m-font-size-master":e["--wcm-text-medium-regular-size"],"--w3m-border-radius-master":e["--wcm-container-border-radius"],"--w3m-color-mix-strength":0}}const Jm=e=>{const[t,r]=e.split(":");return Fn({id:r,caipNetworkId:e,chainNamespace:t,name:"",nativeCurrency:{name:"",symbol:"",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}})};function Xm(e){var t,r,n,o,i,s,a;const c=(t=e.chains)==null?void 0:t.map(Jm).filter(Boolean);if(c.length===0)throw new Error("At least one chain must be specified");const l=c.find(d=>{var h;return d.id===((h=e.defaultChain)==null?void 0:h.id)}),u={projectId:e.projectId,networks:c,themeMode:e.themeMode,themeVariables:Ym(e.themeVariables),chainImages:e.chainImages,connectorImages:e.walletImages,defaultNetwork:l,metadata:Km(Gm({},e.metadata),{name:((r=e.metadata)==null?void 0:r.name)||"WalletConnect",description:((n=e.metadata)==null?void 0:n.description)||"Connect to WalletConnect-compatible wallets",url:((o=e.metadata)==null?void 0:o.url)||"https://walletconnect.org",icons:((i=e.metadata)==null?void 0:i.icons)||["https://walletconnect.org/walletconnect-logo.png"]}),showWallets:!0,featuredWalletIds:e.explorerRecommendedWalletIds==="NONE"?[]:Array.isArray(e.explorerRecommendedWalletIds)?e.explorerRecommendedWalletIds:[],excludeWalletIds:e.explorerExcludedWalletIds==="ALL"?[]:Array.isArray(e.explorerExcludedWalletIds)?e.explorerExcludedWalletIds:[],enableEIP6963:!1,enableInjected:!1,enableCoinbase:!0,enableWalletConnect:!0,features:{email:!1,socials:!1}};if((s=e.mobileWallets)!=null&&s.length||(a=e.desktopWallets)!=null&&a.length){const d=[...(e.mobileWallets||[]).map(m=>({id:m.id,name:m.name,links:m.links})),...(e.desktopWallets||[]).map(m=>({id:m.id,name:m.name,links:{native:m.links.native,universal:m.links.universal}}))],h=[...u.featuredWalletIds||[],...u.excludeWalletIds||[]],p=d.filter(m=>!h.includes(m.id));p.length&&(u.customWallets=p)}return u}var Qm=Object.freeze({__proto__:null,convertWCMToAppKitOptions:Xm});/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const e3={attribute:!0,type:String,converter:Fs,reflect:!1,hasChanged:Cl},t3=(e=e3,t,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(r.name,e),n==="accessor"){const{name:s}=r;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,c,e)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(n==="setter"){const{name:s}=r;return function(a){const c=this[s];t.call(this,a),this.requestUpdate(s,c,e)}}throw Error("Unsupported decorator location: "+n)};function N(e){return(t,r)=>typeof r=="object"?t3(e,t,r):((n,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,n),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,r)}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function K(e){return N({...e,state:!0,attribute:!1})}var r3=se`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,pt=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Qe=class extends J{render(){return this.style.cssText=`
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
      padding-top: ${this.padding&&Ve.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ve.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ve.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ve.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ve.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ve.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ve.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ve.getSpacingStyles(this.margin,3)};
    `,A`<slot></slot>`}};Qe.styles=[be,r3],pt([N()],Qe.prototype,"flexDirection",void 0),pt([N()],Qe.prototype,"flexWrap",void 0),pt([N()],Qe.prototype,"flexBasis",void 0),pt([N()],Qe.prototype,"flexGrow",void 0),pt([N()],Qe.prototype,"flexShrink",void 0),pt([N()],Qe.prototype,"alignItems",void 0),pt([N()],Qe.prototype,"justifyContent",void 0),pt([N()],Qe.prototype,"columnGap",void 0),pt([N()],Qe.prototype,"rowGap",void 0),pt([N()],Qe.prototype,"gap",void 0),pt([N()],Qe.prototype,"padding",void 0),pt([N()],Qe.prototype,"margin",void 0),Qe=pt([Y("wui-flex")],Qe);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ie=e=>e??Le;/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const n3=e=>e===null||typeof e!="object"&&typeof e!="function",o3=e=>e.strings===void 0;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const p1={ATTRIBUTE:1,CHILD:2},El=e=>(...t)=>({_$litDirective$:e,values:t});class f1{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Yo=(e,t)=>{var n;const r=e._$AN;if(r===void 0)return!1;for(const o of r)(n=o._$AO)==null||n.call(o,t,!1),Yo(o,t);return!0},qs=e=>{let t,r;do{if((t=e._$AM)===void 0)break;r=t._$AN,r.delete(e),e=t}while((r==null?void 0:r.size)===0)},g1=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(r===void 0)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),a3(t)}};function i3(e){this._$AN!==void 0?(qs(this),this._$AM=e,g1(this)):this._$AM=e}function s3(e,t=!1,r=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let i=r;i<n.length;i++)Yo(n[i],!1),qs(n[i]);else n!=null&&(Yo(n,!1),qs(n));else Yo(this,e)}const a3=e=>{e.type==p1.CHILD&&(e._$AP??(e._$AP=s3),e._$AQ??(e._$AQ=i3))};class w1 extends f1{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,r,n){super._$AT(t,r,n),g1(this),this.isConnected=t._$AU}_$AO(t,r=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),r&&(Yo(this,t),qs(this))}setValue(t){if(o3(this._$Ct))this._$Ct._$AI(t,this);else{const r=[...this._$Ct._$AH];r[this._$Ci]=t,this._$Ct._$AI(r,this,0)}}disconnected(){}reconnected(){}}/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class c3{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class l3{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??(this.Y=new Promise(t=>this.Z=t))}resume(){var t;(t=this.Z)==null||t.call(this),this.Y=this.Z=void 0}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Yu=e=>!n3(e)&&typeof e.then=="function",Ju=1073741823;class u3 extends w1{constructor(){super(...arguments),this._$Cwt=Ju,this._$Cbt=[],this._$CK=new c3(this),this._$CX=new l3}render(...t){return t.find(r=>!Yu(r))??hr}update(t,r){const n=this._$Cbt;let o=n.length;this._$Cbt=r;const i=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<r.length&&!(a>this._$Cwt);a++){const c=r[a];if(!Yu(c))return this._$Cwt=a,c;a<o&&c===n[a]||(this._$Cwt=Ju,o=0,Promise.resolve(c).then(async l=>{for(;s.get();)await s.get();const u=i.deref();if(u!==void 0){const d=u._$Cbt.indexOf(c);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(l))}}))}return hr}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const d3=El(u3);class h3{constructor(){this.cache=new Map}set(t,r){this.cache.set(t,r)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}}const Ga=new h3;var p3=se`
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
`,yo=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const Xu={add:async()=>(await Promise.resolve().then(function(){return gv})).addSvg,allWallets:async()=>(await Promise.resolve().then(function(){return mv})).allWalletsSvg,arrowBottomCircle:async()=>(await Promise.resolve().then(function(){return bv})).arrowBottomCircleSvg,appStore:async()=>(await Promise.resolve().then(function(){return Cv})).appStoreSvg,apple:async()=>(await Promise.resolve().then(function(){return Ev})).appleSvg,arrowBottom:async()=>(await Promise.resolve().then(function(){return kv})).arrowBottomSvg,arrowLeft:async()=>(await Promise.resolve().then(function(){return Nv})).arrowLeftSvg,arrowRight:async()=>(await Promise.resolve().then(function(){return _v})).arrowRightSvg,arrowTop:async()=>(await Promise.resolve().then(function(){return Pv})).arrowTopSvg,bank:async()=>(await Promise.resolve().then(function(){return Ov})).bankSvg,browser:async()=>(await Promise.resolve().then(function(){return Bv})).browserSvg,card:async()=>(await Promise.resolve().then(function(){return Uv})).cardSvg,checkmark:async()=>(await Promise.resolve().then(function(){return zv})).checkmarkSvg,checkmarkBold:async()=>(await Promise.resolve().then(function(){return jv})).checkmarkBoldSvg,chevronBottom:async()=>(await Promise.resolve().then(function(){return Hv})).chevronBottomSvg,chevronLeft:async()=>(await Promise.resolve().then(function(){return Vv})).chevronLeftSvg,chevronRight:async()=>(await Promise.resolve().then(function(){return Zv})).chevronRightSvg,chevronTop:async()=>(await Promise.resolve().then(function(){return Kv})).chevronTopSvg,chromeStore:async()=>(await Promise.resolve().then(function(){return Jv})).chromeStoreSvg,clock:async()=>(await Promise.resolve().then(function(){return Qv})).clockSvg,close:async()=>(await Promise.resolve().then(function(){return t4})).closeSvg,compass:async()=>(await Promise.resolve().then(function(){return n4})).compassSvg,coinPlaceholder:async()=>(await Promise.resolve().then(function(){return i4})).coinPlaceholderSvg,copy:async()=>(await Promise.resolve().then(function(){return a4})).copySvg,cursor:async()=>(await Promise.resolve().then(function(){return l4})).cursorSvg,cursorTransparent:async()=>(await Promise.resolve().then(function(){return d4})).cursorTransparentSvg,desktop:async()=>(await Promise.resolve().then(function(){return p4})).desktopSvg,disconnect:async()=>(await Promise.resolve().then(function(){return g4})).disconnectSvg,discord:async()=>(await Promise.resolve().then(function(){return m4})).discordSvg,etherscan:async()=>(await Promise.resolve().then(function(){return b4})).etherscanSvg,extension:async()=>(await Promise.resolve().then(function(){return C4})).extensionSvg,externalLink:async()=>(await Promise.resolve().then(function(){return E4})).externalLinkSvg,facebook:async()=>(await Promise.resolve().then(function(){return k4})).facebookSvg,farcaster:async()=>(await Promise.resolve().then(function(){return N4})).farcasterSvg,filters:async()=>(await Promise.resolve().then(function(){return _4})).filtersSvg,github:async()=>(await Promise.resolve().then(function(){return P4})).githubSvg,google:async()=>(await Promise.resolve().then(function(){return O4})).googleSvg,helpCircle:async()=>(await Promise.resolve().then(function(){return B4})).helpCircleSvg,image:async()=>(await Promise.resolve().then(function(){return U4})).imageSvg,id:async()=>(await Promise.resolve().then(function(){return z4})).idSvg,infoCircle:async()=>(await Promise.resolve().then(function(){return j4})).infoCircleSvg,lightbulb:async()=>(await Promise.resolve().then(function(){return H4})).lightbulbSvg,mail:async()=>(await Promise.resolve().then(function(){return V4})).mailSvg,mobile:async()=>(await Promise.resolve().then(function(){return Z4})).mobileSvg,more:async()=>(await Promise.resolve().then(function(){return K4})).moreSvg,networkPlaceholder:async()=>(await Promise.resolve().then(function(){return J4})).networkPlaceholderSvg,nftPlaceholder:async()=>(await Promise.resolve().then(function(){return Q4})).nftPlaceholderSvg,off:async()=>(await Promise.resolve().then(function(){return tb})).offSvg,playStore:async()=>(await Promise.resolve().then(function(){return nb})).playStoreSvg,plus:async()=>(await Promise.resolve().then(function(){return ib})).plusSvg,qrCode:async()=>(await Promise.resolve().then(function(){return ab})).qrCodeIcon,recycleHorizontal:async()=>(await Promise.resolve().then(function(){return lb})).recycleHorizontalSvg,refresh:async()=>(await Promise.resolve().then(function(){return db})).refreshSvg,search:async()=>(await Promise.resolve().then(function(){return pb})).searchSvg,send:async()=>(await Promise.resolve().then(function(){return gb})).sendSvg,swapHorizontal:async()=>(await Promise.resolve().then(function(){return mb})).swapHorizontalSvg,swapHorizontalMedium:async()=>(await Promise.resolve().then(function(){return bb})).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await Promise.resolve().then(function(){return Cb})).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await Promise.resolve().then(function(){return Eb})).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await Promise.resolve().then(function(){return kb})).swapVerticalSvg,telegram:async()=>(await Promise.resolve().then(function(){return Nb})).telegramSvg,threeDots:async()=>(await Promise.resolve().then(function(){return _b})).threeDotsSvg,twitch:async()=>(await Promise.resolve().then(function(){return Pb})).twitchSvg,twitter:async()=>(await Promise.resolve().then(function(){return kd})).xSvg,twitterIcon:async()=>(await Promise.resolve().then(function(){return Rb})).twitterIconSvg,verify:async()=>(await Promise.resolve().then(function(){return Lb})).verifySvg,verifyFilled:async()=>(await Promise.resolve().then(function(){return Mb})).verifyFilledSvg,wallet:async()=>(await Promise.resolve().then(function(){return Db})).walletSvg,walletConnect:async()=>(await Promise.resolve().then(function(){return yc})).walletConnectSvg,walletConnectLightBrown:async()=>(await Promise.resolve().then(function(){return yc})).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await Promise.resolve().then(function(){return yc})).walletConnectBrownSvg,walletPlaceholder:async()=>(await Promise.resolve().then(function(){return Vb})).walletPlaceholderSvg,warningCircle:async()=>(await Promise.resolve().then(function(){return Zb})).warningCircleSvg,x:async()=>(await Promise.resolve().then(function(){return kd})).xSvg,info:async()=>(await Promise.resolve().then(function(){return Kb})).infoSvg,exclamationTriangle:async()=>(await Promise.resolve().then(function(){return Jb})).exclamationTriangleSvg,reown:async()=>(await Promise.resolve().then(function(){return Qb})).reownSvg};async function f3(e){if(Ga.has(e))return Ga.get(e);const t=(Xu[e]??Xu.copy)();return Ga.set(e,t),t}let Mr=class extends J{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `,A`${d3(f3(this.name),A`<div class="fallback"></div>`)}`}};Mr.styles=[be,Li,p3],yo([N()],Mr.prototype,"size",void 0),yo([N()],Mr.prototype,"name",void 0),yo([N()],Mr.prototype,"color",void 0),yo([N()],Mr.prototype,"aspectRatio",void 0),Mr=yo([Y("wui-icon")],Mr);/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const m1=El(class extends f1{constructor(e){var t;if(super(e),e.type!==p1.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var n,o;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((n=this.nt)!=null&&n.has(i))&&this.st.add(i);return this.render(t)}const r=e.element.classList;for(const i of this.st)i in t||(r.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||(o=this.nt)!=null&&o.has(i)||(s?(r.add(i),this.st.add(i)):(r.remove(i),this.st.delete(i)))}return hr}});var g3=se`
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
`,Co=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let zr=class extends J{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,A`<slot class=${m1(e)}></slot>`}};zr.styles=[be,g3],Co([N()],zr.prototype,"variant",void 0),Co([N()],zr.prototype,"color",void 0),Co([N()],zr.prototype,"align",void 0),Co([N()],zr.prototype,"lineClamp",void 0),zr=Co([Y("wui-text")],zr);var w3=se`
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
`,Qt=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Tt=class extends J{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t=this.size==="lg",r=this.size==="xl",n=t?"12%":"16%",o=t?"xxs":r?"s":"3xl",i=this.background==="gray",s=this.background==="opaque",a=this.backgroundColor==="accent-100"&&s||this.backgroundColor==="success-100"&&s||this.backgroundColor==="error-100"&&s||this.backgroundColor==="inverse-100"&&s;let c=`var(--wui-color-${this.backgroundColor})`;return a?c=`var(--wui-icon-box-bg-${this.backgroundColor})`:i&&(c=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${c};
       --local-bg-mix: ${a||i?"100%":n};
       --local-border-radius: var(--wui-border-radius-${o});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,A` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Tt.styles=[be,Ye,w3],Qt([N()],Tt.prototype,"size",void 0),Qt([N()],Tt.prototype,"backgroundColor",void 0),Qt([N()],Tt.prototype,"iconColor",void 0),Qt([N()],Tt.prototype,"iconSize",void 0),Qt([N()],Tt.prototype,"background",void 0),Qt([N({type:Boolean})],Tt.prototype,"border",void 0),Qt([N()],Tt.prototype,"borderColor",void 0),Qt([N()],Tt.prototype,"icon",void 0),Tt=Qt([Y("wui-icon-box")],Tt);var m3=se`
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
`,rs=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Sn=class extends J{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,A`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};Sn.styles=[be,Li,m3],rs([N()],Sn.prototype,"src",void 0),rs([N()],Sn.prototype,"alt",void 0),rs([N()],Sn.prototype,"size",void 0),Sn=rs([Y("wui-image")],Sn);var v3=se`
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
`,Dr=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let er=class extends J{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
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
    ></wui-icon>`}};er.styles=[Ye,be,v3],Dr([N()],er.prototype,"size",void 0),Dr([N()],er.prototype,"name",void 0),Dr([N()],er.prototype,"imageSrc",void 0),Dr([N()],er.prototype,"walletIcon",void 0),Dr([N({type:Boolean})],er.prototype,"installed",void 0),Dr([N()],er.prototype,"badgeSize",void 0),er=Dr([Y("wui-wallet-image")],er);var b3=se`
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
`,Qu=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const Ka=4;let ns=class extends J{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<Ka;return A`${this.walletImages.slice(0,Ka).map(({src:t,walletName:r})=>A`
            <wui-wallet-image
              size="inherit"
              imageSrc=${t}
              name=${ie(r)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(Ka-this.walletImages.length)].map(()=>A` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};ns.styles=[be,b3],Qu([N({type:Array})],ns.prototype,"walletImages",void 0),ns=Qu([Y("wui-all-wallets-image")],ns);var y3=se`
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
`,Ya=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let xo=class extends J{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return A`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};xo.styles=[be,y3],Ya([N()],xo.prototype,"variant",void 0),Ya([N()],xo.prototype,"size",void 0),xo=Ya([Y("wui-tag")],xo);var C3=se`
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
`,ot=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Je=class extends J{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.tabIdx=void 0,this.installed=!1,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return A`
      <button ?disabled=${this.disabled} tabindex=${ie(this.tabIdx)}>
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
      ></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?A`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?A`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Je.styles=[be,Ye,C3],ot([N({type:Array})],Je.prototype,"walletImages",void 0),ot([N()],Je.prototype,"imageSrc",void 0),ot([N()],Je.prototype,"name",void 0),ot([N()],Je.prototype,"tagLabel",void 0),ot([N()],Je.prototype,"tagVariant",void 0),ot([N()],Je.prototype,"icon",void 0),ot([N()],Je.prototype,"walletIcon",void 0),ot([N()],Je.prototype,"tabIdx",void 0),ot([N({type:Boolean})],Je.prototype,"installed",void 0),ot([N({type:Boolean})],Je.prototype,"disabled",void 0),ot([N({type:Boolean})],Je.prototype,"showAllWallets",void 0),ot([N({type:Boolean})],Je.prototype,"loading",void 0),ot([N({type:String})],Je.prototype,"loadingSpinnerColor",void 0),Je=ot([Y("wui-list-wallet")],Je);var Eo=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let _n=class extends J{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.state.connectors,this.count=Z.state.count,this.isFetchingRecommendedWallets=Z.state.isFetchingRecommendedWallets,this.unsubscribe.push(G.subscribeKey("connectors",e=>this.connectors=e),Z.subscribeKey("count",e=>this.count=e),Z.subscribeKey("isFetchingRecommendedWallets",e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.find(s=>s.id==="walletConnect"),{allWallets:t}=M.state;if(!e||t==="HIDE"||t==="ONLY_MOBILE"&&!j.isMobile())return null;const r=Z.state.featured.length,n=this.count+r,o=n<10?n:Math.floor(n/10)*10,i=o<n?`${o}+`:`${o}`;return A`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${i}
        tagVariant="shade"
        data-testid="all-wallets"
        tabIdx=${ie(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        loadingSpinnerColor=${this.isFetchingRecommendedWallets?"fg-300":"accent-100"}
      ></wui-list-wallet>
    `}onAllWallets(){he.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),V.push("AllWallets")}};Eo([N()],_n.prototype,"tabIdx",void 0),Eo([K()],_n.prototype,"connectors",void 0),Eo([K()],_n.prototype,"count",void 0),Eo([K()],_n.prototype,"isFetchingRecommendedWallets",void 0),_n=Eo([Y("w3m-all-wallets-widget")],_n);var Ja=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let os=class extends J{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.state.connectors,this.unsubscribe.push(G.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(t=>t.type==="ANNOUNCED");return e!=null&&e.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${e.filter(dr.showConnector).map(t=>A`
              <wui-list-wallet
                imageSrc=${ie(We.getConnectorImage(t))}
                name=${t.name??"Unknown"}
                @click=${()=>this.onConnector(t)}
                tagVariant="success"
                tagLabel="installed"
                data-testid=${`wallet-selector-${t.id}`}
                .installed=${!0}
                tabIdx=${ie(this.tabIdx)}
              >
              </wui-list-wallet>
            `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){e.id==="walletConnect"?j.isMobile()?V.push("AllWallets"):V.push("ConnectingWalletConnect"):V.push("ConnectingExternal",{connector:e})}};Ja([N()],os.prototype,"tabIdx",void 0),Ja([K()],os.prototype,"connectors",void 0),os=Ja([Y("w3m-connect-announced-widget")],os);var is=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Ao=class extends J{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.state.connectors,this.loading=!1,this.unsubscribe.push(G.subscribeKey("connectors",e=>this.connectors=e)),j.isTelegram()&&j.isIos()&&(this.loading=!Q.state.wcUri,this.unsubscribe.push(Q.subscribeKey("wcUri",e=>this.loading=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{customWallets:e}=M.state;if(!(e!=null&&e.length))return this.style.cssText="display: none",null;const t=this.filterOutDuplicateWallets(e);return A`<wui-flex flexDirection="column" gap="xs">
      ${t.map(r=>A`
          <wui-list-wallet
            imageSrc=${ie(We.getWalletImage(r))}
            name=${r.name??"Unknown"}
            @click=${()=>this.onConnectWallet(r)}
            data-testid=${`wallet-selector-${r.id}`}
            tabIdx=${ie(this.tabIdx)}
            ?loading=${this.loading}
          >
          </wui-list-wallet>
        `)}
    </wui-flex>`}filterOutDuplicateWallets(e){const t=X.getRecentWallets(),r=this.connectors.map(i=>{var s;return(s=i.info)==null?void 0:s.rdns}).filter(Boolean),n=t.map(i=>i.rdns).filter(Boolean),o=r.concat(n);if(o.includes("io.metamask.mobile")&&j.isMobile()){const i=o.indexOf("io.metamask.mobile");o[i]="io.metamask"}return e.filter(i=>!o.includes(String(i==null?void 0:i.rdns)))}onConnectWallet(e){this.loading||V.push("ConnectingWalletConnect",{wallet:e})}};is([N()],Ao.prototype,"tabIdx",void 0),is([K()],Ao.prototype,"connectors",void 0),is([K()],Ao.prototype,"loading",void 0),Ao=is([Y("w3m-connect-custom-widget")],Ao);var Xa=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ss=class extends J{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.state.connectors,this.unsubscribe.push(G.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(t=>t.type==="EXTERNAL").filter(dr.showConnector).filter(t=>t.id!==re.CONNECTOR_ID.COINBASE_SDK);return e!=null&&e.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>A`
            <wui-list-wallet
              imageSrc=${ie(We.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              data-testid=${`wallet-selector-external-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${ie(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){V.push("ConnectingExternal",{connector:e})}};Xa([N()],ss.prototype,"tabIdx",void 0),Xa([K()],ss.prototype,"connectors",void 0),ss=Xa([Y("w3m-connect-external-widget")],ss);var Qa=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let as=class extends J{constructor(){super(...arguments),this.tabIdx=void 0,this.wallets=[]}render(){return this.wallets.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${this.wallets.map(e=>A`
            <wui-list-wallet
              data-testid=${`wallet-selector-featured-${e.id}`}
              imageSrc=${ie(We.getWalletImage(e))}
              name=${e.name??"Unknown"}
              @click=${()=>this.onConnectWallet(e)}
              tabIdx=${ie(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){G.selectWalletConnector(e)}};Qa([N()],as.prototype,"tabIdx",void 0),Qa([N()],as.prototype,"wallets",void 0),as=Qa([Y("w3m-connect-featured-widget")],as);var ec=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let cs=class extends J{constructor(){super(...arguments),this.tabIdx=void 0,this.connectors=[]}render(){var t;const e=this.connectors;return!(e!=null&&e.length)||e.length===1&&((t=e[0])==null?void 0:t.name)==="Browser Wallet"&&!j.isMobile()?(this.style.cssText="display: none",null):A`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(r=>{var o;const n=(o=r.info)==null?void 0:o.rdns;return!j.isMobile()&&r.name==="Browser Wallet"?null:!n&&!Q.checkInstalled()?(this.style.cssText="display: none",null):dr.showConnector(r)?A`
            <wui-list-wallet
              imageSrc=${ie(We.getConnectorImage(r))}
              .installed=${!0}
              name=${r.name??"Unknown"}
              tagVariant="success"
              tagLabel="installed"
              data-testid=${`wallet-selector-${r.id}`}
              @click=${()=>this.onConnector(r)}
              tabIdx=${ie(this.tabIdx)}
            >
            </wui-list-wallet>
          `:null})}
      </wui-flex>
    `}onConnector(e){G.setActiveConnector(e),V.push("ConnectingExternal",{connector:e})}};ec([N()],cs.prototype,"tabIdx",void 0),ec([N()],cs.prototype,"connectors",void 0),cs=ec([Y("w3m-connect-injected-widget")],cs);var tc=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ls=class extends J{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.state.connectors,this.unsubscribe.push(G.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.connectors.filter(t=>t.type==="MULTI_CHAIN"&&t.name!=="WalletConnect");return e!=null&&e.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>A`
            <wui-list-wallet
              imageSrc=${ie(We.getConnectorImage(t))}
              .installed=${!0}
              name=${t.name??"Unknown"}
              tagVariant="shade"
              tagLabel="multichain"
              data-testid=${`wallet-selector-${t.id}`}
              @click=${()=>this.onConnector(t)}
              tabIdx=${ie(this.tabIdx)}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnector(e){G.setActiveConnector(e),V.push("ConnectingMultiChain")}};tc([N()],ls.prototype,"tabIdx",void 0),tc([K()],ls.prototype,"connectors",void 0),ls=tc([Y("w3m-connect-multi-chain-widget")],ls);var us=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ko=class extends J{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.state.connectors,this.loading=!1,this.unsubscribe.push(G.subscribeKey("connectors",e=>this.connectors=e)),j.isTelegram()&&j.isIos()&&(this.loading=!Q.state.wcUri,this.unsubscribe.push(Q.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const e=X.getRecentWallets().filter(t=>!vn.isExcluded(t)).filter(t=>!this.hasWalletConnector(t)).filter(t=>this.isWalletCompatibleWithCurrentChain(t));return e.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${e.map(t=>A`
            <wui-list-wallet
              imageSrc=${ie(We.getWalletImage(t))}
              name=${t.name??"Unknown"}
              @click=${()=>this.onConnectWallet(t)}
              tagLabel="recent"
              tagVariant="shade"
              tabIdx=${ie(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){this.loading||G.selectWalletConnector(e)}hasWalletConnector(e){return this.connectors.some(t=>t.id===e.id||t.name===e.name)}isWalletCompatibleWithCurrentChain(e){const t=y.state.activeChain;return t&&e.chains?e.chains.some(r=>{const n=r.split(":")[0];return t===n}):!0}};us([N()],ko.prototype,"tabIdx",void 0),us([K()],ko.prototype,"connectors",void 0),us([K()],ko.prototype,"loading",void 0),ko=us([Y("w3m-connect-recent-widget")],ko);var ds=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Io=class extends J{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.wallets=[],this.loading=!1,j.isTelegram()&&j.isIos()&&(this.loading=!Q.state.wcUri,this.unsubscribe.push(Q.subscribeKey("wcUri",e=>this.loading=!e)))}render(){const{connectors:e}=G.state,{customWallets:t,featuredWalletIds:r}=M.state,n=X.getRecentWallets(),o=e.find(l=>l.id==="walletConnect"),i=e.filter(l=>l.type==="INJECTED"||l.type==="ANNOUNCED"||l.type==="MULTI_CHAIN").filter(l=>l.name!=="Browser Wallet");if(!o)return null;if(r||t||!this.wallets.length)return this.style.cssText="display: none",null;const s=i.length+n.length,a=Math.max(0,2-s),c=vn.filterOutDuplicateWallets(this.wallets).slice(0,a);return c.length?A`
      <wui-flex flexDirection="column" gap="xs">
        ${c.map(l=>A`
            <wui-list-wallet
              imageSrc=${ie(We.getWalletImage(l))}
              name=${(l==null?void 0:l.name)??"Unknown"}
              @click=${()=>this.onConnectWallet(l)}
              tabIdx=${ie(this.tabIdx)}
              ?loading=${this.loading}
            >
            </wui-list-wallet>
          `)}
      </wui-flex>
    `:(this.style.cssText="display: none",null)}onConnectWallet(e){if(this.loading)return;const t=G.getConnector(e.id,e.rdns);t?V.push("ConnectingExternal",{connector:t}):V.push("ConnectingWalletConnect",{wallet:e})}};ds([N()],Io.prototype,"tabIdx",void 0),ds([N()],Io.prototype,"wallets",void 0),ds([K()],Io.prototype,"loading",void 0),Io=ds([Y("w3m-connect-recommended-widget")],Io);var hs=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let No=class extends J{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.state.connectors,this.connectorImages=ct.state.connectorImages,this.unsubscribe.push(G.subscribeKey("connectors",e=>this.connectors=e),ct.subscribeKey("connectorImages",e=>this.connectorImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(j.isMobile())return this.style.cssText="display: none",null;const e=this.connectors.find(r=>r.id==="walletConnect");if(!e)return this.style.cssText="display: none",null;const t=e.imageUrl||this.connectorImages[(e==null?void 0:e.imageId)??""];return A`
      <wui-list-wallet
        imageSrc=${ie(t)}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        tabIdx=${ie(this.tabIdx)}
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `}onConnector(e){G.setActiveConnector(e),V.push("ConnectingWalletConnect")}};hs([N()],No.prototype,"tabIdx",void 0),hs([K()],No.prototype,"connectors",void 0),hs([K()],No.prototype,"connectorImages",void 0),No=hs([Y("w3m-connect-walletconnect-widget")],No);var x3=se`
  :host {
    margin-top: var(--wui-spacing-3xs);
  }
  wui-separator {
    margin: var(--wui-spacing-m) calc(var(--wui-spacing-m) * -1) var(--wui-spacing-xs)
      calc(var(--wui-spacing-m) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }
`,So=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let jr=class extends J{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=G.state.connectors,this.recommended=Z.state.recommended,this.featured=Z.state.featured,this.unsubscribe.push(G.subscribeKey("connectors",e=>this.connectors=e),Z.subscribeKey("recommended",e=>this.recommended=e),Z.subscribeKey("featured",e=>this.featured=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return A`
      <wui-flex flexDirection="column" gap="xs"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){const{custom:e,recent:t,announced:r,injected:n,multiChain:o,recommended:i,featured:s,external:a}=dr.getConnectorsByType(this.connectors,this.recommended,this.featured);return dr.getConnectorTypeOrder({custom:e,recent:t,announced:r,injected:n,multiChain:o,recommended:i,featured:s,external:a}).map(c=>{switch(c){case"injected":return A`
            ${o.length?A`<w3m-connect-multi-chain-widget
                  tabIdx=${ie(this.tabIdx)}
                ></w3m-connect-multi-chain-widget>`:null}
            ${r.length?A`<w3m-connect-announced-widget
                  tabIdx=${ie(this.tabIdx)}
                ></w3m-connect-announced-widget>`:null}
            ${n.length?A`<w3m-connect-injected-widget
                  .connectors=${n}
                  tabIdx=${ie(this.tabIdx)}
                ></w3m-connect-injected-widget>`:null}
          `;case"walletConnect":return A`<w3m-connect-walletconnect-widget
            tabIdx=${ie(this.tabIdx)}
          ></w3m-connect-walletconnect-widget>`;case"recent":return A`<w3m-connect-recent-widget
            tabIdx=${ie(this.tabIdx)}
          ></w3m-connect-recent-widget>`;case"featured":return A`<w3m-connect-featured-widget
            .wallets=${s}
            tabIdx=${ie(this.tabIdx)}
          ></w3m-connect-featured-widget>`;case"custom":return A`<w3m-connect-custom-widget
            tabIdx=${ie(this.tabIdx)}
          ></w3m-connect-custom-widget>`;case"external":return A`<w3m-connect-external-widget
            tabIdx=${ie(this.tabIdx)}
          ></w3m-connect-external-widget>`;case"recommended":return A`<w3m-connect-recommended-widget
            .wallets=${i}
            tabIdx=${ie(this.tabIdx)}
          ></w3m-connect-recommended-widget>`;default:return console.warn(`Unknown connector type: ${c}`),null}})}};jr.styles=x3,So([N()],jr.prototype,"tabIdx",void 0),So([K()],jr.prototype,"connectors",void 0),So([K()],jr.prototype,"recommended",void 0),So([K()],jr.prototype,"featured",void 0),jr=So([Y("w3m-connector-list")],jr);var E3=se`
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
`,br=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let zt=class extends J{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{var n;const r=t===this.activeTab;return A`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
          data-testid="tab-${(n=e.label)==null?void 0:n.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?A`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const r=this.buttons[this.activeTab],n=this.buttons[e],o=r==null?void 0:r.querySelector("wui-text"),i=n==null?void 0:n.querySelector("wui-text"),s=n==null?void 0:n.getBoundingClientRect(),a=i==null?void 0:i.getBoundingClientRect();r&&o&&!t&&e!==this.activeTab&&(o.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&s&&a&&i&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(s.width+a.width)+6}px`,n.animate([{width:`${s.width+a.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),i.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};zt.styles=[be,Ye,E3],br([N({type:Array})],zt.prototype,"tabs",void 0),br([N()],zt.prototype,"onTabChange",void 0),br([N({type:Array})],zt.prototype,"buttons",void 0),br([N({type:Boolean})],zt.prototype,"disabled",void 0),br([N()],zt.prototype,"localTabWidth",void 0),br([K()],zt.prototype,"activeTab",void 0),br([K()],zt.prototype,"isDense",void 0),zt=br([Y("wui-tabs")],zt);var ps=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let _o=class extends J{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Q.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return A`
      <wui-flex justifyContent="center" .padding=${["0","0","l","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(t=>t==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:t==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:t==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:t==="web"?{label:"Webapp",icon:"browser",platform:"web"}:t==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:t})=>t),e}onTabChange(e){var r;const t=this.platformTabs[e];t&&((r=this.onSelectPlatfrom)==null||r.call(this,t))}};ps([N({type:Array})],_o.prototype,"platforms",void 0),ps([N()],_o.prototype,"onSelectPlatfrom",void 0),ps([K()],_o.prototype,"buffering",void 0),_o=ps([Y("w3m-connecting-header")],_o);var A3=se`
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
`,rc=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let To=class extends J{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: ${this.color==="inherit"?"inherit":`var(--wui-color-${this.color})`}`,this.dataset.size=this.size,A`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};To.styles=[be,A3],rc([N()],To.prototype,"color",void 0),rc([N()],To.prototype,"size",void 0),To=rc([Y("wui-loading-spinner")],To);var k3=se`
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
`,Dt=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const ed={main:"inverse-100",inverse:"inverse-000",accent:"accent-100","accent-error":"error-100","accent-success":"success-100",neutral:"fg-100",disabled:"gray-glass-020"},I3={lg:"paragraph-600",md:"small-600"},N3={lg:"md",md:"md"};let Et=class extends J{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="main",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??I3[this.size];return A`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled}
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){if(this.loading){const e=N3[this.size],t=this.disabled?ed.disabled:ed[this.variant];return A`<wui-loading-spinner color=${t} size=${e}></wui-loading-spinner>`}return A``}};Et.styles=[be,Ye,k3],Dt([N()],Et.prototype,"size",void 0),Dt([N({type:Boolean})],Et.prototype,"disabled",void 0),Dt([N({type:Boolean})],Et.prototype,"fullWidth",void 0),Dt([N({type:Boolean})],Et.prototype,"loading",void 0),Dt([N()],Et.prototype,"variant",void 0),Dt([N({type:Boolean})],Et.prototype,"hasIconLeft",void 0),Dt([N({type:Boolean})],Et.prototype,"hasIconRight",void 0),Dt([N()],Et.prototype,"borderRadius",void 0),Dt([N()],Et.prototype,"textVariant",void 0),Et=Dt([Y("wui-button")],Et);var S3=se`
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
`,fs=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Tn=class extends J{constructor(){super(...arguments),this.tabIdx=void 0,this.disabled=!1,this.color="inherit"}render(){return A`
      <button ?disabled=${this.disabled} tabindex=${ie(this.tabIdx)}>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Tn.styles=[be,Ye,S3],fs([N()],Tn.prototype,"tabIdx",void 0),fs([N({type:Boolean})],Tn.prototype,"disabled",void 0),fs([N()],Tn.prototype,"color",void 0),Tn=fs([Y("wui-link")],Tn);var _3=se`
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
`,td=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let gs=class extends J{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,r=116+t,n=245+t,o=360+t*1.75;return A`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${r} ${n}"
          stroke-dashoffset=${o}
        />
      </svg>
    `}};gs.styles=[be,_3],td([N({type:Number})],gs.prototype,"radius",void 0),gs=td([Y("wui-loading-thumbnail")],gs);var T3=se`
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
`,Wr=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let tr=class extends J{constructor(){super(...arguments),this.variant="accent",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.size="md",this.text=""}render(){const e=this.size==="sm"?"small-600":"paragraph-600";return A`
      <button
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
        data-size=${this.size}
      >
        ${this.imageSrc?A`<wui-image src=${this.imageSrc}></wui-image>`:null}
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};tr.styles=[be,Ye,T3],Wr([N()],tr.prototype,"variant",void 0),Wr([N()],tr.prototype,"imageSrc",void 0),Wr([N({type:Boolean})],tr.prototype,"disabled",void 0),Wr([N()],tr.prototype,"icon",void 0),Wr([N()],tr.prototype,"size",void 0),Wr([N()],tr.prototype,"text",void 0),tr=Wr([Y("wui-chip-button")],tr);var P3=se`
  wui-flex {
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,ws=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Pn=class extends J{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return A`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-chip-button size="sm" variant="shade" text=${this.buttonLabel} icon="chevronRight">
        </wui-chip-button>
      </wui-flex>
    `}};Pn.styles=[be,Ye,P3],ws([N({type:Boolean})],Pn.prototype,"disabled",void 0),ws([N()],Pn.prototype,"label",void 0),ws([N()],Pn.prototype,"buttonLabel",void 0),Pn=ws([Y("wui-cta-button")],Pn);var $3=se`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,rd=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ms=class extends J{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:r,chrome_store:n,homepage:o}=this.wallet,i=j.isMobile(),s=j.isIos(),a=j.isAndroid(),c=[t,r,o,n].filter(Boolean).length>1,l=Ve.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return c&&!i?A`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>V.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&o?A`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?A`
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
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&j.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&j.openHref(this.wallet.homepage,"_blank")}};ms.styles=[$3],rd([N({type:Object})],ms.prototype,"wallet",void 0),ms=rd([Y("w3m-mobile-download-links")],ms);var O3=se`
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
`,Pt=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};class Ke extends J{constructor(){var t,r,n,o,i;super(),this.wallet=(t=V.state.data)==null?void 0:t.wallet,this.connector=(r=V.state.data)==null?void 0:r.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=We.getWalletImage(this.wallet)??We.getConnectorImage(this.connector),this.name=((n=this.wallet)==null?void 0:n.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=Q.state.wcUri,this.error=Q.state.wcError,this.ready=!1,this.showRetry=!1,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.buffering=!1,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Q.subscribeKey("wcUri",s=>{var a;this.uri=s,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(a=this.onConnect)==null||a.call(this))}),Q.subscribeKey("wcError",s=>this.error=s),Q.subscribeKey("buffering",s=>this.buffering=s)),(j.isTelegram()||j.isSafari())&&j.isIos()&&Q.state.wcUri&&((i=this.onConnect)==null||i.call(this))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){var n;(n=this.onRender)==null||n.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let r=`Continue in ${this.name}`;return this.buffering&&(r="Connecting..."),this.error&&(r="Connection declined"),A`
      <wui-flex
        data-error=${ie(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ie(this.imageSrc)}></wui-wallet-image>

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
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
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
    `}onShowRetry(){var t,r;this.error&&!this.showRetry&&(this.showRetry=!0,(r=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button"))==null||r.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var t,r;this.buffering||(Q.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(r=this.onConnect)==null||r.call(this))}loaderTemplate(){const t=De.state.themeVariables["--w3m-border-radius-master"],r=t?parseInt(t.replace("px",""),10):4;return A`<wui-loading-thumbnail radius=${r*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(j.copyToClopboard(this.uri),Ie.showSuccess("Link copied"))}catch{Ie.showError("Failed to copy")}}}Ke.styles=O3,Pt([K()],Ke.prototype,"isRetrying",void 0),Pt([K()],Ke.prototype,"uri",void 0),Pt([K()],Ke.prototype,"error",void 0),Pt([K()],Ke.prototype,"ready",void 0),Pt([K()],Ke.prototype,"showRetry",void 0),Pt([K()],Ke.prototype,"secondaryBtnLabel",void 0),Pt([K()],Ke.prototype,"secondaryLabel",void 0),Pt([K()],Ke.prototype,"buffering",void 0),Pt([K()],Ke.prototype,"isLoading",void 0),Pt([N({type:Boolean})],Ke.prototype,"isMobile",void 0),Pt([N()],Ke.prototype,"onRetry",void 0);var R3=function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let nd=class extends Ke{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:t}=G.state,r=t.find(n=>{var o,i,s;return n.type==="ANNOUNCED"&&((o=n.info)==null?void 0:o.rdns)===((i=this.wallet)==null?void 0:i.rdns)||n.type==="INJECTED"||n.name===((s=this.wallet)==null?void 0:s.name)});if(r)await Q.connectExternal(r,r.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");ge.close(),he.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(t){he.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};nd=R3([Y("w3m-connecting-wc-browser")],nd);var B3=function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let od=class extends Ke{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:t,name:r}=this.wallet,{redirect:n,href:o}=j.formatNativeUrl(t,this.uri);Q.setWcLinking({name:r,href:o}),Q.setRecentWallet(this.wallet),j.openHref(n,"_blank")}catch{this.error=!0}}};od=B3([Y("w3m-connecting-wc-desktop")],od);var L3=function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let id=class extends Ke{constructor(){if(super(),this.btnLabelTimeout=void 0,this.labelTimeout=void 0,this.onRender=()=>{var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))},this.onConnect=()=>{var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:t,name:r}=this.wallet,{redirect:n,href:o}=j.formatNativeUrl(t,this.uri);Q.setWcLinking({name:r,href:o}),Q.setRecentWallet(this.wallet);const i=j.isIframe()?"_top":"_self";j.openHref(n,i),clearTimeout(this.labelTimeout),this.secondaryLabel=je.CONNECT_LABELS.MOBILE}catch(t){he.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:t instanceof Error?t.message:"Error parsing the deeplink",uri:this.uri,mobile_link:this.wallet.mobile_link,name:this.wallet.name}}),this.error=!0}},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.initializeStateAndTimers(),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this)),clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout)}initializeStateAndTimers(){this.secondaryBtnLabel=void 0,this.secondaryLabel=je.CONNECT_LABELS.MOBILE,this.btnLabelTimeout=setTimeout(()=>{this.secondaryBtnLabel="Try again",this.secondaryLabel=je.CONNECT_LABELS.MOBILE},je.FIVE_SEC_MS),this.labelTimeout=setTimeout(()=>{this.secondaryLabel="Hold tight... it's taking longer than expected"},je.THREE_SEC_MS)}onBuffering(){const e=j.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&(Q.setBuffering(!0),setTimeout(()=>{Q.setBuffering(!1)},5e3))}onTryAgain(){this.buffering||(clearTimeout(this.btnLabelTimeout),clearTimeout(this.labelTimeout),this.initializeStateAndTimers(),Q.setWcError(!1),this.onConnect())}};id=L3([Y("w3m-connecting-wc-mobile")],id);var Wo={},U3=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},v1={},mt={};let nc;const M3=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];mt.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17},mt.getSymbolTotalCodewords=function(e){return M3[e]},mt.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t},mt.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');nc=e},mt.isKanjiModeEnabled=function(){return typeof nc<"u"},mt.toSJIS=function(e){return nc(e)};var ha={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+r)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,n){if(e.isValid(r))return r;try{return t(r)}catch{return n}}})(ha);function b1(){this.buffer=[],this.length=0}b1.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var z3=b1;function Ho(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}Ho.prototype.set=function(e,t,r,n){const o=e*this.size+t;this.data[o]=r,n&&(this.reservedBit[o]=!0)},Ho.prototype.get=function(e,t){return this.data[e*this.size+t]},Ho.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},Ho.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var D3=Ho,y1={};(function(e){const t=mt.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const n=Math.floor(r/7)+2,o=t(r),i=o===145?26:Math.ceil((o-13)/(2*n-2))*2,s=[o-7];for(let a=1;a<n-1;a++)s[a]=s[a-1]-i;return s.push(6),s.reverse()},e.getPositions=function(r){const n=[],o=e.getRowColCoords(r),i=o.length;for(let s=0;s<i;s++)for(let a=0;a<i;a++)s===0&&a===0||s===0&&a===i-1||s===i-1&&a===0||n.push([o[s],o[a]]);return n}})(y1);var C1={};const j3=mt.getSymbolSize,sd=7;C1.getPositions=function(e){const t=j3(e);return[[0,0],[t-sd,0],[0,t-sd]]};var x1={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(n){return n!=null&&n!==""&&!isNaN(n)&&n>=0&&n<=7},e.from=function(n){return e.isValid(n)?parseInt(n,10):void 0},e.getPenaltyN1=function(n){const o=n.size;let i=0,s=0,a=0,c=null,l=null;for(let u=0;u<o;u++){s=a=0,c=l=null;for(let d=0;d<o;d++){let h=n.get(u,d);h===c?s++:(s>=5&&(i+=t.N1+(s-5)),c=h,s=1),h=n.get(d,u),h===l?a++:(a>=5&&(i+=t.N1+(a-5)),l=h,a=1)}s>=5&&(i+=t.N1+(s-5)),a>=5&&(i+=t.N1+(a-5))}return i},e.getPenaltyN2=function(n){const o=n.size;let i=0;for(let s=0;s<o-1;s++)for(let a=0;a<o-1;a++){const c=n.get(s,a)+n.get(s,a+1)+n.get(s+1,a)+n.get(s+1,a+1);(c===4||c===0)&&i++}return i*t.N2},e.getPenaltyN3=function(n){const o=n.size;let i=0,s=0,a=0;for(let c=0;c<o;c++){s=a=0;for(let l=0;l<o;l++)s=s<<1&2047|n.get(c,l),l>=10&&(s===1488||s===93)&&i++,a=a<<1&2047|n.get(l,c),l>=10&&(a===1488||a===93)&&i++}return i*t.N3},e.getPenaltyN4=function(n){let o=0;const i=n.data.length;for(let s=0;s<i;s++)o+=n.data[s];return Math.abs(Math.ceil(o*100/i/5)-10)*t.N4};function r(n,o,i){switch(n){case e.Patterns.PATTERN000:return(o+i)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return i%3===0;case e.Patterns.PATTERN011:return(o+i)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(i/3))%2===0;case e.Patterns.PATTERN101:return o*i%2+o*i%3===0;case e.Patterns.PATTERN110:return(o*i%2+o*i%3)%2===0;case e.Patterns.PATTERN111:return(o*i%3+(o+i)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}e.applyMask=function(n,o){const i=o.size;for(let s=0;s<i;s++)for(let a=0;a<i;a++)o.isReserved(a,s)||o.xor(a,s,r(n,a,s))},e.getBestMask=function(n,o){const i=Object.keys(e.Patterns).length;let s=0,a=1/0;for(let c=0;c<i;c++){o(c),e.applyMask(c,n);const l=e.getPenaltyN1(n)+e.getPenaltyN2(n)+e.getPenaltyN3(n)+e.getPenaltyN4(n);e.applyMask(c,n),l<a&&(a=l,s=c)}return s}})(x1);var Zs={};const yr=ha,vs=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],bs=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Zs.getBlocksCount=function(e,t){switch(t){case yr.L:return vs[(e-1)*4+0];case yr.M:return vs[(e-1)*4+1];case yr.Q:return vs[(e-1)*4+2];case yr.H:return vs[(e-1)*4+3];default:return}},Zs.getTotalCodewordsCount=function(e,t){switch(t){case yr.L:return bs[(e-1)*4+0];case yr.M:return bs[(e-1)*4+1];case yr.Q:return bs[(e-1)*4+2];case yr.H:return bs[(e-1)*4+3];default:return}};var E1={},ys={};const Po=new Uint8Array(512),Cs=new Uint8Array(256);(function(){let e=1;for(let t=0;t<255;t++)Po[t]=e,Cs[e]=t,e<<=1,e&256&&(e^=285);for(let t=255;t<512;t++)Po[t]=Po[t-255]})(),ys.log=function(e){if(e<1)throw new Error("log("+e+")");return Cs[e]},ys.exp=function(e){return Po[e]},ys.mul=function(e,t){return e===0||t===0?0:Po[Cs[e]+Cs[t]]},function(e){const t=ys;e.mul=function(r,n){const o=new Uint8Array(r.length+n.length-1);for(let i=0;i<r.length;i++)for(let s=0;s<n.length;s++)o[i+s]^=t.mul(r[i],n[s]);return o},e.mod=function(r,n){let o=new Uint8Array(r);for(;o.length-n.length>=0;){const i=o[0];for(let a=0;a<n.length;a++)o[a]^=t.mul(n[a],i);let s=0;for(;s<o.length&&o[s]===0;)s++;o=o.slice(s)}return o},e.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let o=0;o<r;o++)n=e.mul(n,new Uint8Array([1,t.exp(o)]));return n}}(E1);const ad=E1;function Vc(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Vc.prototype.initialize=function(e){this.degree=e,this.genPoly=ad.generateECPolynomial(this.degree)},Vc.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const r=ad.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){const o=new Uint8Array(this.degree);return o.set(r,n),o}return r};var W3=Vc,A1={},Or={},qc={};qc.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var Vt={};const k1="[0-9]+",H3="[A-Z $%*+\\-./:]+";let Ii="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Ii=Ii.replace(/u/g,"\\u");const F3="(?:(?![A-Z0-9 $%*+\\-./:]|"+Ii+`)(?:.|[\r
]))+`;Vt.KANJI=new RegExp(Ii,"g"),Vt.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Vt.BYTE=new RegExp(F3,"g"),Vt.NUMERIC=new RegExp(k1,"g"),Vt.ALPHANUMERIC=new RegExp(H3,"g");const V3=new RegExp("^"+Ii+"$"),q3=new RegExp("^"+k1+"$"),Z3=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");Vt.testKanji=function(e){return V3.test(e)},Vt.testNumeric=function(e){return q3.test(e)},Vt.testAlphanumeric=function(e){return Z3.test(e)},function(e){const t=qc,r=Vt;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,i){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?o.ccBits[0]:i<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return r.testNumeric(o)?e.NUMERIC:r.testAlphanumeric(o)?e.ALPHANUMERIC:r.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(o,i){if(e.isValid(o))return o;try{return n(o)}catch{return i}}}(Or),function(e){const t=mt,r=Zs,n=ha,o=Or,i=qc,s=7973,a=t.getBCHDigit(s);function c(h,p,m){for(let g=1;g<=40;g++)if(p<=e.getCapacity(g,m,h))return g}function l(h,p){return o.getCharCountIndicator(h,p)+4}function u(h,p){let m=0;return h.forEach(function(g){const f=l(g.mode,p);m+=f+g.getBitsLength()}),m}function d(h,p){for(let m=1;m<=40;m++)if(u(h,m)<=e.getCapacity(m,p,o.MIXED))return m}e.from=function(h,p){return i.isValid(h)?parseInt(h,10):p},e.getCapacity=function(h,p,m){if(!i.isValid(h))throw new Error("Invalid QR Code version");typeof m>"u"&&(m=o.BYTE);const g=t.getSymbolTotalCodewords(h),f=r.getTotalCodewordsCount(h,p),w=(g-f)*8;if(m===o.MIXED)return w;const v=w-l(m,h);switch(m){case o.NUMERIC:return Math.floor(v/10*3);case o.ALPHANUMERIC:return Math.floor(v/11*2);case o.KANJI:return Math.floor(v/13);case o.BYTE:default:return Math.floor(v/8)}},e.getBestVersionForData=function(h,p){let m;const g=n.from(p,n.M);if(Array.isArray(h)){if(h.length>1)return d(h,g);if(h.length===0)return 1;m=h[0]}else m=h;return c(m.mode,m.getLength(),g)},e.getEncodedBits=function(h){if(!i.isValid(h)||h<7)throw new Error("Invalid QR Code version");let p=h<<12;for(;t.getBCHDigit(p)-a>=0;)p^=s<<t.getBCHDigit(p)-a;return h<<12|p}}(A1);var I1={};const Zc=mt,N1=1335,G3=21522,cd=Zc.getBCHDigit(N1);I1.getEncodedBits=function(e,t){const r=e.bit<<3|t;let n=r<<10;for(;Zc.getBCHDigit(n)-cd>=0;)n^=N1<<Zc.getBCHDigit(n)-cd;return(r<<10|n)^G3};var S1={};const K3=Or;function Un(e){this.mode=K3.NUMERIC,this.data=e.toString()}Un.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},Un.prototype.getLength=function(){return this.data.length},Un.prototype.getBitsLength=function(){return Un.getBitsLength(this.data.length)},Un.prototype.write=function(e){let t,r,n;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),n=parseInt(r,10),e.put(n,10);const o=this.data.length-t;o>0&&(r=this.data.substr(t),n=parseInt(r,10),e.put(n,o*3+1))};var Y3=Un;const J3=Or,oc=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Mn(e){this.mode=J3.ALPHANUMERIC,this.data=e}Mn.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},Mn.prototype.getLength=function(){return this.data.length},Mn.prototype.getBitsLength=function(){return Mn.getBitsLength(this.data.length)},Mn.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=oc.indexOf(this.data[t])*45;r+=oc.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(oc.indexOf(this.data[t]),6)};var X3=Mn,Q3=function(e){for(var t=[],r=e.length,n=0;n<r;n++){var o=e.charCodeAt(n);if(o>=55296&&o<=56319&&r>n+1){var i=e.charCodeAt(n+1);i>=56320&&i<=57343&&(o=(o-55296)*1024+i-56320+65536,n+=1)}if(o<128){t.push(o);continue}if(o<2048){t.push(o>>6|192),t.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){t.push(o>>12|224),t.push(o>>6&63|128),t.push(o&63|128);continue}if(o>=65536&&o<=1114111){t.push(o>>18|240),t.push(o>>12&63|128),t.push(o>>6&63|128),t.push(o&63|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer};const e5=Q3,t5=Or;function zn(e){this.mode=t5.BYTE,typeof e=="string"&&(e=e5(e)),this.data=new Uint8Array(e)}zn.getBitsLength=function(e){return e*8},zn.prototype.getLength=function(){return this.data.length},zn.prototype.getBitsLength=function(){return zn.getBitsLength(this.data.length)},zn.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)};var r5=zn;const n5=Or,o5=mt;function Dn(e){this.mode=n5.KANJI,this.data=e}Dn.getBitsLength=function(e){return e*13},Dn.prototype.getLength=function(){return this.data.length},Dn.prototype.getBitsLength=function(){return Dn.getBitsLength(this.data.length)},Dn.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=o5.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),e.put(r,13)}};var i5=Dn,ld={exports:{}};(function(e){var t={single_source_shortest_paths:function(r,n,o){var i={},s={};s[n]=0;var a=t.PriorityQueue.make();a.push(n,0);for(var c,l,u,d,h,p,m,g,f;!a.empty();){c=a.pop(),l=c.value,d=c.cost,h=r[l]||{};for(u in h)h.hasOwnProperty(u)&&(p=h[u],m=d+p,g=s[u],f=typeof s[u]>"u",(f||g>m)&&(s[u]=m,a.push(u,m),i[u]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var w=["Could not find a path from ",n," to ",o,"."].join("");throw new Error(w)}return i},extract_shortest_path_from_predecessor_list:function(r,n){for(var o=[],i=n;i;)o.push(i),r[i],i=r[i];return o.reverse(),o},find_path:function(r,n,o){var i=t.single_source_shortest_paths(r,n,o);return t.extract_shortest_path_from_predecessor_list(i,o)},PriorityQueue:{make:function(r){var n=t.PriorityQueue,o={},i;r=r||{};for(i in n)n.hasOwnProperty(i)&&(o[i]=n[i]);return o.queue=[],o.sorter=r.sorter||n.default_sorter,o},default_sorter:function(r,n){return r.cost-n.cost},push:function(r,n){var o={value:r,cost:n};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(ld),function(e){const t=Or,r=Y3,n=X3,o=r5,i=i5,s=Vt,a=mt,c=ld.exports;function l(w){return unescape(encodeURIComponent(w)).length}function u(w,v,b){const k=[];let $;for(;($=w.exec(b))!==null;)k.push({data:$[0],index:$.index,mode:v,length:$[0].length});return k}function d(w){const v=u(s.NUMERIC,t.NUMERIC,w),b=u(s.ALPHANUMERIC,t.ALPHANUMERIC,w);let k,$;return a.isKanjiModeEnabled()?(k=u(s.BYTE,t.BYTE,w),$=u(s.KANJI,t.KANJI,w)):(k=u(s.BYTE_KANJI,t.BYTE,w),$=[]),v.concat(b,k,$).sort(function(S,R){return S.index-R.index}).map(function(S){return{data:S.data,mode:S.mode,length:S.length}})}function h(w,v){switch(v){case t.NUMERIC:return r.getBitsLength(w);case t.ALPHANUMERIC:return n.getBitsLength(w);case t.KANJI:return i.getBitsLength(w);case t.BYTE:return o.getBitsLength(w)}}function p(w){return w.reduce(function(v,b){const k=v.length-1>=0?v[v.length-1]:null;return k&&k.mode===b.mode?(v[v.length-1].data+=b.data,v):(v.push(b),v)},[])}function m(w){const v=[];for(let b=0;b<w.length;b++){const k=w[b];switch(k.mode){case t.NUMERIC:v.push([k,{data:k.data,mode:t.ALPHANUMERIC,length:k.length},{data:k.data,mode:t.BYTE,length:k.length}]);break;case t.ALPHANUMERIC:v.push([k,{data:k.data,mode:t.BYTE,length:k.length}]);break;case t.KANJI:v.push([k,{data:k.data,mode:t.BYTE,length:l(k.data)}]);break;case t.BYTE:v.push([{data:k.data,mode:t.BYTE,length:l(k.data)}])}}return v}function g(w,v){const b={},k={start:{}};let $=["start"];for(let S=0;S<w.length;S++){const R=w[S],P=[];for(let I=0;I<R.length;I++){const L=R[I],O=""+S+I;P.push(O),b[O]={node:L,lastCount:0},k[O]={};for(let U=0;U<$.length;U++){const H=$[U];b[H]&&b[H].node.mode===L.mode?(k[H][O]=h(b[H].lastCount+L.length,L.mode)-h(b[H].lastCount,L.mode),b[H].lastCount+=L.length):(b[H]&&(b[H].lastCount=L.length),k[H][O]=h(L.length,L.mode)+4+t.getCharCountIndicator(L.mode,v))}}$=P}for(let S=0;S<$.length;S++)k[$[S]].end=0;return{map:k,table:b}}function f(w,v){let b;const k=t.getBestModeForData(w);if(b=t.from(v,k),b!==t.BYTE&&b.bit<k.bit)throw new Error('"'+w+'" cannot be encoded with mode '+t.toString(b)+`.
 Suggested mode is: `+t.toString(k));switch(b===t.KANJI&&!a.isKanjiModeEnabled()&&(b=t.BYTE),b){case t.NUMERIC:return new r(w);case t.ALPHANUMERIC:return new n(w);case t.KANJI:return new i(w);case t.BYTE:return new o(w)}}e.fromArray=function(w){return w.reduce(function(v,b){return typeof b=="string"?v.push(f(b,null)):b.data&&v.push(f(b.data,b.mode)),v},[])},e.fromString=function(w,v){const b=d(w,a.isKanjiModeEnabled()),k=m(b),$=g(k,v),S=c.find_path($.map,"start","end"),R=[];for(let P=1;P<S.length-1;P++)R.push($.table[S[P]].node);return e.fromArray(p(R))},e.rawSplit=function(w){return e.fromArray(d(w,a.isKanjiModeEnabled()))}}(S1);const pa=mt,ic=ha,s5=z3,a5=D3,c5=y1,l5=C1,Gc=x1,Kc=Zs,u5=W3,Gs=A1,d5=I1,h5=Or,sc=S1;function p5(e,t){const r=e.size,n=l5.getPositions(t);for(let o=0;o<n.length;o++){const i=n[o][0],s=n[o][1];for(let a=-1;a<=7;a++)if(!(i+a<=-1||r<=i+a))for(let c=-1;c<=7;c++)s+c<=-1||r<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?e.set(i+a,s+c,!0,!0):e.set(i+a,s+c,!1,!0))}}function f5(e){const t=e.size;for(let r=8;r<t-8;r++){const n=r%2===0;e.set(r,6,n,!0),e.set(6,r,n,!0)}}function g5(e,t){const r=c5.getPositions(t);for(let n=0;n<r.length;n++){const o=r[n][0],i=r[n][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(o+s,i+a,!0,!0):e.set(o+s,i+a,!1,!0)}}function w5(e,t){const r=e.size,n=Gs.getEncodedBits(t);let o,i,s;for(let a=0;a<18;a++)o=Math.floor(a/3),i=a%3+r-8-3,s=(n>>a&1)===1,e.set(o,i,s,!0),e.set(i,o,s,!0)}function ac(e,t,r){const n=e.size,o=d5.getEncodedBits(t,r);let i,s;for(i=0;i<15;i++)s=(o>>i&1)===1,i<6?e.set(i,8,s,!0):i<8?e.set(i+1,8,s,!0):e.set(n-15+i,8,s,!0),i<8?e.set(8,n-i-1,s,!0):i<9?e.set(8,15-i-1+1,s,!0):e.set(8,15-i-1,s,!0);e.set(n-8,8,1,!0)}function m5(e,t){const r=e.size;let n=-1,o=r-1,i=7,s=0;for(let a=r-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!e.isReserved(o,a-c)){let l=!1;s<t.length&&(l=(t[s]>>>i&1)===1),e.set(o,a-c,l),i--,i===-1&&(s++,i=7)}if(o+=n,o<0||r<=o){o-=n,n=-n;break}}}function v5(e,t,r){const n=new s5;r.forEach(function(c){n.put(c.mode.bit,4),n.put(c.getLength(),h5.getCharCountIndicator(c.mode,e)),c.write(n)});const o=pa.getSymbolTotalCodewords(e),i=Kc.getTotalCodewordsCount(e,t),s=(o-i)*8;for(n.getLengthInBits()+4<=s&&n.put(0,4);n.getLengthInBits()%8!==0;)n.putBit(0);const a=(s-n.getLengthInBits())/8;for(let c=0;c<a;c++)n.put(c%2?17:236,8);return b5(n,e,t)}function b5(e,t,r){const n=pa.getSymbolTotalCodewords(t),o=Kc.getTotalCodewordsCount(t,r),i=n-o,s=Kc.getBlocksCount(t,r),a=n%s,c=s-a,l=Math.floor(n/s),u=Math.floor(i/s),d=u+1,h=l-u,p=new u5(h);let m=0;const g=new Array(s),f=new Array(s);let w=0;const v=new Uint8Array(e.buffer);for(let R=0;R<s;R++){const P=R<c?u:d;g[R]=v.slice(m,m+P),f[R]=p.encode(g[R]),m+=P,w=Math.max(w,P)}const b=new Uint8Array(n);let k=0,$,S;for($=0;$<w;$++)for(S=0;S<s;S++)$<g[S].length&&(b[k++]=g[S][$]);for($=0;$<h;$++)for(S=0;S<s;S++)b[k++]=f[S][$];return b}function y5(e,t,r,n){let o;if(Array.isArray(e))o=sc.fromArray(e);else if(typeof e=="string"){let l=t;if(!l){const u=sc.rawSplit(e);l=Gs.getBestVersionForData(u,r)}o=sc.fromString(e,l||40)}else throw new Error("Invalid data");const i=Gs.getBestVersionForData(o,r);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=i;else if(t<i)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+i+`.
`);const s=v5(t,r,o),a=pa.getSymbolSize(t),c=new a5(a);return p5(c,t),f5(c),g5(c,t),ac(c,r,0),t>=7&&w5(c,t),m5(c,s),isNaN(n)&&(n=Gc.getBestMask(c,ac.bind(null,c,r))),Gc.applyMask(n,c),ac(c,r,n),{modules:c,version:t,errorCorrectionLevel:r,maskPattern:n,segments:o}}v1.create=function(e,t){if(typeof e>"u"||e==="")throw new Error("No input text");let r=ic.M,n,o;return typeof t<"u"&&(r=ic.from(t.errorCorrectionLevel,ic.M),n=Gs.from(t.version),o=Gc.from(t.maskPattern),t.toSJISFunc&&pa.setToSJISFunction(t.toSJISFunc)),y5(e,n,r,o)};var _1={},Yc={};(function(e){function t(r){if(typeof r=="number"&&(r=r.toString()),typeof r!="string")throw new Error("Color should be defined as hex string");let n=r.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+r);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(i){return[i,i]}))),n.length===6&&n.push("F","F");const o=parseInt(n.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+n.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const n=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,i=r.scale||4;return{width:o,scale:o?4:i,margin:n,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,n){return n.width&&n.width>=r+n.margin*2?n.width/(r+n.margin*2):n.scale},e.getImageWidth=function(r,n){const o=e.getScale(r,n);return Math.floor((r+n.margin*2)*o)},e.qrToImageData=function(r,n,o){const i=n.modules.size,s=n.modules.data,a=e.getScale(i,o),c=Math.floor((i+o.margin*2)*a),l=o.margin*a,u=[o.color.light,o.color.dark];for(let d=0;d<c;d++)for(let h=0;h<c;h++){let p=(d*c+h)*4,m=o.color.light;if(d>=l&&h>=l&&d<c-l&&h<c-l){const g=Math.floor((d-l)/a),f=Math.floor((h-l)/a);m=u[s[g*i+f]?1:0]}r[p++]=m.r,r[p++]=m.g,r[p++]=m.b,r[p]=m.a}}})(Yc),function(e){const t=Yc;function r(o,i,s){o.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,i,s){let a=s,c=i;typeof a>"u"&&(!i||!i.getContext)&&(a=i,i=void 0),i||(c=n()),a=t.getOptions(a);const l=t.getImageWidth(o.modules.size,a),u=c.getContext("2d"),d=u.createImageData(l,l);return t.qrToImageData(d.data,o,a),r(u,c,l),u.putImageData(d,0,0),c},e.renderToDataURL=function(o,i,s){let a=s;typeof a>"u"&&(!i||!i.getContext)&&(a=i,i=void 0),a||(a={});const c=e.render(o,i,a),l=a.type||"image/png",u=a.rendererOpts||{};return c.toDataURL(l,u.quality)}}(_1);var T1={};const C5=Yc;function ud(e,t){const r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function cc(e,t,r){let n=e+t;return typeof r<"u"&&(n+=" "+r),n}function x5(e,t,r){let n="",o=0,i=!1,s=0;for(let a=0;a<e.length;a++){const c=Math.floor(a%t),l=Math.floor(a/t);!c&&!i&&(i=!0),e[a]?(s++,a>0&&c>0&&e[a-1]||(n+=i?cc("M",c+r,.5+l+r):cc("m",o,0),o=0,i=!1),c+1<t&&e[a+1]||(n+=cc("h",s),s=0)):o++}return n}T1.render=function(e,t,r){const n=C5.getOptions(t),o=e.modules.size,i=e.modules.data,s=o+n.margin*2,a=n.color.light.a?"<path "+ud(n.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",c="<path "+ud(n.color.dark,"stroke")+' d="'+x5(i,o,n.margin)+'"/>',l='viewBox="0 0 '+s+" "+s+'"',u='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+l+' shape-rendering="crispEdges">'+a+c+`</svg>
`;return typeof r=="function"&&r(null,u),u};const E5=U3,Jc=v1,dd=_1,A5=T1;function lc(e,t,r,n,o){const i=[].slice.call(arguments,1),s=i.length,a=typeof i[s-1]=="function";if(!a&&!E5())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=r,r=t,t=n=void 0):s===3&&(t.getContext&&typeof o>"u"?(o=n,n=void 0):(o=n,n=r,r=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(r=t,t=n=void 0):s===2&&!t.getContext&&(n=r,r=t,t=void 0),new Promise(function(c,l){try{const u=Jc.create(r,n);c(e(u,t,n))}catch(u){l(u)}})}try{const c=Jc.create(r,n);o(null,e(c,t,n))}catch(c){o(c)}}Wo.create=Jc.create,Wo.toCanvas=lc.bind(null,dd.render),Wo.toDataURL=lc.bind(null,dd.renderToDataURL),Wo.toString=lc.bind(null,function(e,t,r){return A5.render(e,r)});const k5=.1,hd=2.5,rr=7;function uc(e,t,r){return e===t?!1:(e-t<0?t-e:e-t)<=r+k5}function I5(e,t){const r=Array.prototype.slice.call(Wo.create(e,{errorCorrectionLevel:t}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((o,i,s)=>(s%n===0?o.push([i]):o[o.length-1].push(i))&&o,[])}const N5={generate({uri:e,size:t,logoSize:r,dotColor:n="#141414"}){const o="transparent",i=[],s=I5(e,"Q"),a=t/s.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x:m,y:g})=>{const f=(s.length-rr)*a*m,w=(s.length-rr)*a*g,v=.45;for(let b=0;b<c.length;b+=1){const k=a*(rr-b*2);i.push(W`
            <rect
              fill=${b===2?n:o}
              width=${b===0?k-5:k}
              rx= ${b===0?(k-5)*v:k*v}
              ry= ${b===0?(k-5)*v:k*v}
              stroke=${n}
              stroke-width=${b===0?5:0}
              height=${b===0?k-5:k}
              x= ${b===0?w+a*b+5/2:w+a*b}
              y= ${b===0?f+a*b+5/2:f+a*b}
            />
          `)}});const l=Math.floor((r+25)/a),u=s.length/2-l/2,d=s.length/2+l/2-1,h=[];s.forEach((m,g)=>{m.forEach((f,w)=>{if(s[g][w]&&!(g<rr&&w<rr||g>s.length-(rr+1)&&w<rr||g<rr&&w>s.length-(rr+1))&&!(g>u&&g<d&&w>u&&w<d)){const v=g*a+a/2,b=w*a+a/2;h.push([v,b])}})});const p={};return h.forEach(([m,g])=>{var f;p[m]?(f=p[m])==null||f.push(g):p[m]=[g]}),Object.entries(p).map(([m,g])=>{const f=g.filter(w=>g.every(v=>!uc(w,v,a)));return[Number(m),f]}).forEach(([m,g])=>{g.forEach(f=>{i.push(W`<circle cx=${m} cy=${f} fill=${n} r=${a/hd} />`)})}),Object.entries(p).filter(([m,g])=>g.length>1).map(([m,g])=>{const f=g.filter(w=>g.some(v=>uc(w,v,a)));return[Number(m),f]}).map(([m,g])=>{g.sort((w,v)=>w<v?-1:1);const f=[];for(const w of g){const v=f.find(b=>b.some(k=>uc(w,k,a)));v?v.push(w):f.push([w])}return[m,f.map(w=>[w[0],w[w.length-1]])]}).forEach(([m,g])=>{g.forEach(([f,w])=>{i.push(W`
              <line
                x1=${m}
                x2=${m}
                y1=${f}
                y2=${w}
                stroke=${n}
                stroke-width=${a/(hd/2)}
                stroke-linecap="round"
              />
            `)})}),i}};var S5=se`
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
`,nr=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const _5="#3396ff";let $t=class extends J{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`
     --local-size: ${this.size}px;
     --local-icon-color: ${this.color??_5}
    `,A`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return W`
      <svg height=${e} width=${e}>
        ${N5.generate({uri:this.uri,size:e,logoSize:this.arenaClear?0:e/4,dotColor:this.color})}
      </svg>
    `}templateVisual(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?A`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:A`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};$t.styles=[be,S5],nr([N()],$t.prototype,"uri",void 0),nr([N({type:Number})],$t.prototype,"size",void 0),nr([N()],$t.prototype,"theme",void 0),nr([N()],$t.prototype,"imageSrc",void 0),nr([N()],$t.prototype,"alt",void 0),nr([N()],$t.prototype,"color",void 0),nr([N({type:Boolean})],$t.prototype,"arenaClear",void 0),nr([N({type:Boolean})],$t.prototype,"farcaster",void 0),$t=nr([Y("wui-qr-code")],$t);var T5=se`
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
`,$o=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Hr=class extends J{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m",this.variant="default"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,A`<slot></slot>`}};Hr.styles=[T5],$o([N()],Hr.prototype,"width",void 0),$o([N()],Hr.prototype,"height",void 0),$o([N()],Hr.prototype,"borderRadius",void 0),$o([N()],Hr.prototype,"variant",void 0),Hr=$o([Y("wui-shimmer")],Hr);var P5=se`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }
`,$5=function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let dc=class extends J{render(){return A`
      <wui-flex
        justifyContent="center"
        alignItems="center"
        gap="xs"
        .padding=${["0","0","l","0"]}
      >
        <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
        <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
      </wui-flex>
    `}};dc.styles=[be,Ye,P5],dc=$5([Y("wui-ux-by-reown")],dc);var O5=se`
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
`,R5=function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let hc=class extends Ke{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.unsubscribe)==null||e.forEach(t=>t()),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),A`
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
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return Q.setWcLinking(void 0),Q.setRecentWallet(this.wallet),A` <wui-qr-code
      size=${e}
      theme=${De.state.themeMode}
      uri=${this.uri}
      imageSrc=${ie(We.getWalletImage(this.wallet))}
      color=${ie(De.state.themeVariables["--w3m-qr-color"])}
      alt=${ie(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return A`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};hc.styles=O5,hc=R5([Y("w3m-connecting-wc-qrcode")],hc);var B5=function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let pd=class extends J{constructor(){var e;if(super(),this.wallet=(e=V.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return A`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ie(We.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};pd=B5([Y("w3m-connecting-wc-unsupported")],pd);var fd=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let pc=class extends Ke{constructor(){if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(Q.subscribeKey("wcUri",()=>{this.updateLoadingState()})),he.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:t,name:r}=this.wallet,{redirect:n,href:o}=j.formatUniversalUrl(t,this.uri);Q.setWcLinking({name:r,href:o}),Q.setRecentWallet(this.wallet),j.openHref(n,"_blank")}catch{this.error=!0}}};fd([K()],pc.prototype,"isLoading",void 0),pc=fd([Y("w3m-connecting-wc-web")],pc);var xs=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Oo=class extends J{constructor(){var e;super(),this.wallet=(e=V.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!M.state.siwx,this.determinePlatforms(),this.initializeConnection()}render(){return A`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
      <wui-ux-by-reown></wui-ux-by-reown>
    `}async initializeConnection(e=!1){if(!(this.platform==="browser"||M.state.manualWCControl&&!e))try{const{wcPairingExpiry:t,status:r}=Q.state;(e||M.state.enableEmbedded||j.isPairingExpired(t)||r==="connecting")&&(await Q.connectWalletConnect(),this.isSiwxEnabled||ge.close())}catch(t){he.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),Q.setWcError(!0),Ie.showError(t.message??"Connection error"),Q.resetWcConnection(),V.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:o}=this.wallet,i=n==null?void 0:n.map(({injected_id:p})=>p).filter(Boolean),s=[...o?[o]:i??[]],a=M.state.isUniversalProvider?!1:s.length,c=e,l=r,u=Q.checkInstalled(s),d=a&&u,h=t&&!j.isMobile();d&&!y.state.noAdapters&&this.platforms.push("browser"),c&&this.platforms.push(j.isMobile()?"mobile":"qrcode"),l&&this.platforms.push("web"),h&&this.platforms.push("desktop"),!d&&a&&!y.state.noAdapters&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return A`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return A`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return A`
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
    `:null}async onSelectPlatform(e){var r;const t=(r=this.shadowRoot)==null?void 0:r.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};xs([K()],Oo.prototype,"platform",void 0),xs([K()],Oo.prototype,"platforms",void 0),xs([K()],Oo.prototype,"isSiwxEnabled",void 0),Oo=xs([Y("w3m-connecting-wc-view")],Oo);var gd=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let $s=class extends J{constructor(){super(...arguments),this.isMobile=j.isMobile()}render(){if(this.isMobile){const{featured:e,recommended:t}=Z.state,{customWallets:r}=M.state,n=X.getRecentWallets(),o=e.length||t.length||(r==null?void 0:r.length)||n.length;return A`<wui-flex
        flexDirection="column"
        gap="xs"
        .margin=${["3xs","s","s","s"]}
      >
        ${o?A`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return A`<wui-flex flexDirection="column" .padding=${["0","0","l","0"]}>
      <w3m-connecting-wc-view></w3m-connecting-wc-view>
      <wui-flex flexDirection="column" .padding=${["0","m","0","m"]}>
        <w3m-all-wallets-widget></w3m-all-wallets-widget> </wui-flex
    ></wui-flex>`}};gd([K()],$s.prototype,"isMobile",void 0),$s=gd([Y("w3m-connecting-wc-basic-view")],$s);/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Al=()=>new L5;class L5{}const fc=new WeakMap,kl=El(class extends w1{render(e){return Le}update(e,[t]){var n;const r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=(n=e.options)==null?void 0:n.host,this.rt(this.ct=e.element)),Le}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let r=fc.get(t);r===void 0&&(r=new WeakMap,fc.set(t,r)),r.get(this.G)!==void 0&&this.G.call(this.ht,void 0),r.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=fc.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var U5=se`
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
`,wd=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Es=class extends J{constructor(){super(...arguments),this.inputElementRef=Al(),this.checked=void 0}render(){return A`
      <label>
        <input
          ${kl(this.inputElementRef)}
          type="checkbox"
          ?checked=${ie(this.checked)}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};Es.styles=[be,Ye,Li,U5],wd([N({type:Boolean})],Es.prototype,"checked",void 0),Es=wd([Y("wui-switch")],Es);var M5=se`
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
`,md=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let As=class extends J{constructor(){super(...arguments),this.checked=void 0}render(){return A`
      <button>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-switch ?checked=${ie(this.checked)}></wui-switch>
      </button>
    `}};As.styles=[be,Ye,M5],md([N({type:Boolean})],As.prototype,"checked",void 0),As=md([Y("wui-certified-switch")],As);var z5=se`
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
`,vd=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ks=class extends J{constructor(){super(...arguments),this.icon="copy"}render(){return A`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};ks.styles=[be,Ye,z5],vd([N()],ks.prototype,"icon",void 0),ks=vd([Y("wui-input-element")],ks);var D5=se`
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
`,jt=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let At=class extends J{constructor(){super(...arguments),this.inputElementRef=Al(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-padding-right-${this.inputRightPadding}`,t={[`wui-size-${this.size}`]:!0,[e]:!!this.inputRightPadding};return A`${this.templateIcon()}
      <input
        data-testid="wui-input-text"
        ${kl(this.inputElementRef)}
        class=${m1(t)}
        type=${this.type}
        enterkeyhint=${ie(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
        tabindex=${ie(this.tabIdx)}
      />
      <slot></slot>`}templateIcon(){return this.icon?A`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};At.styles=[be,Ye,D5],jt([N()],At.prototype,"size",void 0),jt([N()],At.prototype,"icon",void 0),jt([N({type:Boolean})],At.prototype,"disabled",void 0),jt([N()],At.prototype,"placeholder",void 0),jt([N()],At.prototype,"type",void 0),jt([N()],At.prototype,"keyHint",void 0),jt([N()],At.prototype,"value",void 0),jt([N()],At.prototype,"inputRightPadding",void 0),jt([N()],At.prototype,"tabIdx",void 0),At=jt([Y("wui-input-text")],At);var j5=se`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`,W5=function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let gc=class extends J{constructor(){super(...arguments),this.inputComponentRef=Al()}render(){return A`
      <wui-input-text
        ${kl(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){var t;const e=(t=this.inputComponentRef.value)==null?void 0:t.inputElementRef.value;e&&(e.value="",e.focus(),e.dispatchEvent(new Event("input")))}};gc.styles=[be,j5],gc=W5([Y("wui-search-bar")],gc);const H5=W`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var F5=se`
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
`,bd=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Is=class extends J{constructor(){super(...arguments),this.type="wallet"}render(){return A`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?A` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${H5}`:A`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Is.styles=[be,Ye,F5],bd([N()],Is.prototype,"type",void 0),Is=bd([Y("wui-card-select-loader")],Is);var V5=se`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,kt=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let it=class extends J{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&Ve.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&Ve.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&Ve.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&Ve.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&Ve.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&Ve.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&Ve.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&Ve.getSpacingStyles(this.margin,3)};
    `,A`<slot></slot>`}};it.styles=[be,V5],kt([N()],it.prototype,"gridTemplateRows",void 0),kt([N()],it.prototype,"gridTemplateColumns",void 0),kt([N()],it.prototype,"justifyItems",void 0),kt([N()],it.prototype,"alignItems",void 0),kt([N()],it.prototype,"justifyContent",void 0),kt([N()],it.prototype,"alignContent",void 0),kt([N()],it.prototype,"columnGap",void 0),kt([N()],it.prototype,"rowGap",void 0),kt([N()],it.prototype,"gap",void 0),kt([N()],it.prototype,"padding",void 0),kt([N()],it.prototype,"margin",void 0),it=kt([Y("wui-grid")],it);var q5=se`
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
`,Ro=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Fr=class extends J{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?(this.visible=!0,this.fetchImageSrc()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var t,r;const e=((t=this.wallet)==null?void 0:t.badge_type)==="certified";return A`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="3xs">
          <wui-text
            variant="tiny-500"
            color="inherit"
            class=${ie(e?"certified":void 0)}
            >${(r=this.wallet)==null?void 0:r.name}</wui-text
          >
          ${e?A`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,t;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():A`
      <wui-wallet-image
        size="md"
        imageSrc=${ie(this.imageSrc)}
        name=${(e=this.wallet)==null?void 0:e.name}
        .installed=${(t=this.wallet)==null?void 0:t.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return A`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=We.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await We.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}};Fr.styles=q5,Ro([K()],Fr.prototype,"visible",void 0),Ro([K()],Fr.prototype,"imageSrc",void 0),Ro([K()],Fr.prototype,"imageLoading",void 0),Ro([N()],Fr.prototype,"wallet",void 0),Fr=Ro([Y("w3m-all-wallets-list-item")],Fr);var Z5=se`
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
`,Bo=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const yd="local-paginator";let Vr=class extends J{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!Z.state.wallets.length,this.wallets=Z.state.wallets,this.recommended=Z.state.recommended,this.featured=Z.state.featured,this.unsubscribe.push(Z.subscribeKey("wallets",e=>this.wallets=e),Z.subscribeKey("recommended",e=>this.recommended=e),Z.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(t=>t()),(e=this.paginationObserver)==null||e.disconnect()}render(){return A`
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
    `}async initialFetch(){var t;this.loading=!0;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-grid");e&&(await Z.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>A`
        <wui-card-select-loader type="wallet" id=${ie(t)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=j.uniqueBy([...this.featured,...this.recommended,...this.wallets],"id");return vn.markWalletsAsInstalled(e).map(t=>A`
        <w3m-all-wallets-list-item
          @click=${()=>this.onConnectWallet(t)}
          .wallet=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:r,count:n}=Z.state,o=window.innerWidth<352?3:4,i=e.length+t.length;let s=Math.ceil(i/o)*o-i+o;return s-=e.length?r.length%o:0,n===0&&r.length>0?null:n===0||[...r,...e,...t].length<n?this.shimmerTemplate(s,yd):null}createPaginationObserver(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(`#${yd}`);e&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.loading){const{page:n,count:o,wallets:i}=Z.state;i.length<o&&Z.fetchWalletsByPage({page:n+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){G.selectWalletConnector(e)}};Vr.styles=Z5,Bo([K()],Vr.prototype,"loading",void 0),Bo([K()],Vr.prototype,"wallets",void 0),Bo([K()],Vr.prototype,"recommended",void 0),Bo([K()],Vr.prototype,"featured",void 0),Vr=Bo([Y("w3m-all-wallets-list")],Vr);var G5=se`
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
`,Ns=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let $n=class extends J{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?A`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await Z.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=Z.state,t=vn.markWalletsAsInstalled(e);return e.length?A`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","s","s","s"]}
        rowGap="l"
        columnGap="xs"
        justifyContent="space-between"
      >
        ${t.map(r=>A`
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
      `}onConnectWallet(e){G.selectWalletConnector(e)}};$n.styles=G5,Ns([K()],$n.prototype,"loading",void 0),Ns([N()],$n.prototype,"query",void 0),Ns([N()],$n.prototype,"badge",void 0),$n=Ns([Y("w3m-all-wallets-search")],$n);var wc=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Fo=class extends J{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=j.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return A`
      <wui-flex .padding=${["0","s","s","s"]} gap="xs">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge}
          @click=${this.onClick.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?A`<w3m-all-wallets-search
            query=${this.search}
            badge=${ie(this.badge)}
          ></w3m-all-wallets-search>`:A`<w3m-all-wallets-list badge=${ie(this.badge)}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onClick(){if(this.badge==="certified"){this.badge=void 0;return}this.badge="certified",Ie.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})}qrButtonTemplate(){return j.isMobile()?A`
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
      `:null}onWalletConnectQr(){V.push("ConnectingWalletConnect")}};wc([K()],Fo.prototype,"search",void 0),wc([K()],Fo.prototype,"badge",void 0),Fo=wc([Y("w3m-all-wallets-view")],Fo);var K5=se`
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
`,Ot=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let ft=class extends J{constructor(){super(...arguments),this.tabIdx=void 0,this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return A`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${ie(this.iconVariant)}
        tabindex=${ie(this.tabIdx)}
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return A`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return A`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t=this.iconVariant==="square-blue"?"mdl":"md",r=this.iconSize?this.iconSize:t;return A`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?A`<wui-loading-spinner
        data-testid="wui-list-item-loading-spinner"
        color="fg-300"
      ></wui-loading-spinner>`:A``}chevronTemplate(){return this.chevron?A`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};ft.styles=[be,Ye,K5],Ot([N()],ft.prototype,"icon",void 0),Ot([N()],ft.prototype,"iconSize",void 0),Ot([N()],ft.prototype,"tabIdx",void 0),Ot([N()],ft.prototype,"variant",void 0),Ot([N()],ft.prototype,"iconVariant",void 0),Ot([N({type:Boolean})],ft.prototype,"disabled",void 0),Ot([N()],ft.prototype,"imageSrc",void 0),Ot([N()],ft.prototype,"alt",void 0),Ot([N({type:Boolean})],ft.prototype,"chevron",void 0),Ot([N({type:Boolean})],ft.prototype,"loading",void 0),ft=Ot([Y("wui-list-item")],ft);var Y5=function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Xc=class extends J{constructor(){var e;super(...arguments),this.wallet=(e=V.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return A`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?A`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?A`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?A`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?A`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&j.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&j.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&j.openHref(this.wallet.homepage,"_blank")}};Xc=Y5([Y("w3m-downloads-view")],Xc);var J5=Object.freeze({__proto__:null,get W3mConnectingWcBasicView(){return $s},get W3mAllWalletsView(){return Fo},get W3mDownloadsView(){return Xc}}),X5=se`
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
`,Q5=function(e,t,r,n){var o=arguments.length,i=o<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,r):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let mc=class extends J{render(){return A`<slot></slot>`}};mc.styles=[be,X5],mc=Q5([Y("wui-card")],mc);var ev=se`
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
`,Lo=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let qr=class extends J{constructor(){super(...arguments),this.message="",this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="info"}render(){return this.style.cssText=`
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
    `}onClose(){Sr.close()}};qr.styles=[be,ev],Lo([N()],qr.prototype,"message",void 0),Lo([N()],qr.prototype,"backgroundColor",void 0),Lo([N()],qr.prototype,"iconColor",void 0),Lo([N()],qr.prototype,"icon",void 0),qr=Lo([Y("wui-alertbar")],qr);var tv=se`
  :host {
    display: block;
    position: absolute;
    top: var(--wui-spacing-s);
    left: var(--wui-spacing-l);
    right: var(--wui-spacing-l);
    opacity: 0;
    pointer-events: none;
  }
`,Cd=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const rv={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"exclamationTriangle"}};let Ss=class extends J{constructor(){super(),this.unsubscribe=[],this.open=Sr.state.open,this.onOpen(!0),this.unsubscribe.push(Sr.subscribeKey("open",e=>{this.open=e,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t}=Sr.state,r=rv[t];return A`
      <wui-alertbar
        message=${e}
        backgroundColor=${r==null?void 0:r.backgroundColor}
        iconColor=${r==null?void 0:r.iconColor}
        icon=${r==null?void 0:r.icon}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};Ss.styles=tv,Cd([K()],Ss.prototype,"open",void 0),Ss=Cd([Y("w3m-alertbar")],Ss);var nv=se`
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
`,Uo=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Zr=class extends J{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",t=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${t});
`,A`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Zr.styles=[be,Ye,Li,nv],Uo([N()],Zr.prototype,"size",void 0),Uo([N({type:Boolean})],Zr.prototype,"disabled",void 0),Uo([N()],Zr.prototype,"icon",void 0),Uo([N()],Zr.prototype,"iconColor",void 0),Zr=Uo([Y("wui-icon-link")],Zr);var ov=se`
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
`,xd=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let _s=class extends J{constructor(){super(...arguments),this.imageSrc=""}render(){return A`<button>
      ${this.imageTemplate()}
      <wui-icon size="xs" color="fg-200" name="chevronBottom"></wui-icon>
    </button>`}imageTemplate(){return this.imageSrc?A`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`:A`<wui-icon-box
      size="xxs"
      iconColor="fg-200"
      backgroundColor="fg-100"
      background="opaque"
      icon="networkPlaceholder"
    ></wui-icon-box>`}};_s.styles=[be,Ye,Li,ov],xd([N()],_s.prototype,"imageSrc",void 0),_s=xd([Y("wui-select")],_s);var iv=se`
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
`,Wt=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const sv=["SmartSessionList"];function vc(){var i,s,a,c,l,u,d;const e=(s=(i=V.state.data)==null?void 0:i.connector)==null?void 0:s.name,t=(c=(a=V.state.data)==null?void 0:a.wallet)==null?void 0:c.name,r=(u=(l=V.state.data)==null?void 0:l.network)==null?void 0:u.name,n=t??e,o=G.getConnectors();return{Connect:`Connect ${o.length===1&&((d=o[0])==null?void 0:d.id)==="w3m-email"?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",Downloads:n?`Get ${n}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Profile:void 0,SwitchNetwork:r??"Switch Network",SwitchAddress:"Switch Address",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select token",SwapPreview:"Preview swap",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",ConnectWallets:"Connect wallet",ConnectSocials:"All socials",ConnectingSocial:ee.state.socialProvider?ee.state.socialProvider:"Connect Social",ConnectingMultiChain:"Select chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In"}}let It=class extends J{constructor(){super(),this.unsubscribe=[],this.heading=vc()[V.state.view],this.network=y.state.activeCaipNetwork,this.networkImage=We.getNetworkImage(this.network),this.buffering=!1,this.showBack=!1,this.prevHistoryLength=1,this.view=V.state.view,this.viewDirection="",this.headerText=vc()[V.state.view],this.unsubscribe.push(ct.subscribeNetworkImages(()=>{this.networkImage=We.getNetworkImage(this.network)}),V.subscribeKey("view",e=>{setTimeout(()=>{this.view=e,this.headerText=vc()[e]},Ir.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),Q.subscribeKey("buffering",e=>this.buffering=e),y.subscribeKey("activeCaipNetwork",e=>{this.network=e,this.networkImage=We.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return A`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){he.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),V.push("WhatIsAWallet")}async onClose(){V.state.view==="UnsupportedChain"||await _r.isSIWXCloseDisabled()?ge.shake():ge.close()}rightHeaderTemplate(){var t,r;const e=(r=(t=M==null?void 0:M.state)==null?void 0:t.features)==null?void 0:r.smartSessions;return V.state.view!=="Account"||!e?this.closeButtonTemplate():A`<wui-flex>
      <wui-icon-link
        icon="clock"
        @click=${()=>V.push("SmartSessionList")}
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
    `}titleTemplate(){const e=sv.includes(this.view);return A`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="xs"
      >
        <wui-text variant="paragraph-700" color="fg-100" data-testid="w3m-header-text"
          >${this.headerText}</wui-text
        >
        ${e?A`<wui-tag variant="main">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var c;const{view:e}=V.state,t=e==="Connect",r=M.state.enableEmbedded,n=e==="ApproveTransaction",o=e==="ConnectingSiwe",i=e==="Account",s=M.state.enableNetworkSwitch,a=n||o||t&&r;return i&&s?A`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${ie((c=this.network)==null?void 0:c.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${ie(this.networkImage)}
      ></wui-select>`:this.showBack&&!a?A`<wui-icon-link
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:A`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}onNetworks(){this.isAllowedNetworkSwitch()&&(he.sendEvent({type:"track",event:"CLICK_NETWORKS"}),V.push("Networks"))}isAllowedNetworkSwitch(){const e=y.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,r=e==null?void 0:e.find(({id:n})=>{var o;return n===((o=this.network)==null?void 0:o.id)});return t||!r}getPadding(){return this.heading?["l","2l","l","2l"]:["0","2l","0","2l"]}onViewChange(){const{history:e}=V.state;let t=Ir.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=Ir.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var r;const{history:e}=V.state,t=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){V.goBack()}};It.styles=iv,Wt([K()],It.prototype,"heading",void 0),Wt([K()],It.prototype,"network",void 0),Wt([K()],It.prototype,"networkImage",void 0),Wt([K()],It.prototype,"buffering",void 0),Wt([K()],It.prototype,"showBack",void 0),Wt([K()],It.prototype,"prevHistoryLength",void 0),Wt([K()],It.prototype,"view",void 0),Wt([K()],It.prototype,"viewDirection",void 0),Wt([K()],It.prototype,"headerText",void 0),It=Wt([Y("w3m-header")],It);var av=se`
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
`,Gr=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let or=class extends J{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message="",this.loading=!1,this.iconType="default"}render(){return A`
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
    ></wui-icon-box>`}};or.styles=[be,av],Gr([N()],or.prototype,"backgroundColor",void 0),Gr([N()],or.prototype,"iconColor",void 0),Gr([N()],or.prototype,"icon",void 0),Gr([N()],or.prototype,"message",void 0),Gr([N()],or.prototype,"loading",void 0),Gr([N()],or.prototype,"iconType",void 0),or=Gr([Y("wui-snackbar")],or);var cv=se`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,Ed=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const lv={loading:void 0,success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Ts=class extends J{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Ie.state.open,this.unsubscribe.push(Ie.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:t,svg:r}=Ie.state,n=lv[t],{icon:o,iconColor:i}=r??n??{};return A`
      <wui-snackbar
        message=${e}
        backgroundColor=${n==null?void 0:n.backgroundColor}
        iconColor=${i}
        icon=${o}
        .loading=${t==="loading"}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),Ie.state.autoClose&&(this.timeout=setTimeout(()=>Ie.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Ts.styles=cv,Ed([K()],Ts.prototype,"open",void 0),Ts=Ed([Y("w3m-snackbar")],Ts);var uv=se`
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
`,Mo=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let Kr=class extends J{constructor(){super(),this.unsubscribe=[],this.open=Rn.state.open,this.message=Rn.state.message,this.triggerRect=Rn.state.triggerRect,this.variant=Rn.state.variant,this.unsubscribe.push(Rn.subscribe(e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${e}px;
    --w3m-tooltip-left: ${t}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,A`<wui-flex>
      <wui-icon data-placement="top" color="fg-100" size="inherit" name="cursor"></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>
    </wui-flex>`}};Kr.styles=[uv],Mo([K()],Kr.prototype,"open",void 0),Mo([K()],Kr.prototype,"message",void 0),Mo([K()],Kr.prototype,"triggerRect",void 0),Mo([K()],Kr.prototype,"variant",void 0),Kr=Mo([Y("w3m-tooltip"),Y("w3m-tooltip")],Kr);var dv=se`
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
`,bc=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};let zo=class extends J{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=V.state.view,this.viewDirection="",this.unsubscribe.push(V.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){var e;this.resizeObserver=new ResizeObserver(([t])=>{const r=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(this.style.setProperty("--prev-height",this.prevHeight),this.style.setProperty("--new-height",r),this.style.animation="w3m-view-height 150ms forwards ease",this.style.height="auto"),setTimeout(()=>{this.prevHeight=r,this.style.animation="unset"},Ir.ANIMATION_DURATIONS.ModalHeight)}),(e=this.resizeObserver)==null||e.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(t=>t())}render(){return A`<div class="w3m-router-container" view-direction="${this.viewDirection}">
      ${this.viewTemplate()}
    </div>`}viewTemplate(){switch(this.view){case"AccountSettings":return A`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return A`<w3m-account-view></w3m-account-view>`;case"AllWallets":return A`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return A`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return A`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return A`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return A`<w3m-connect-view></w3m-connect-view>`;case"Create":return A`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return A`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return A`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return A`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return A`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return A`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return A`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return A`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"Downloads":return A`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return A`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return A`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return A`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return A`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return A`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return A`<w3m-network-switch-view></w3m-network-switch-view>`;case"Profile":return A`<w3m-profile-view></w3m-profile-view>`;case"SwitchAddress":return A`<w3m-switch-address-view></w3m-switch-address-view>`;case"Transactions":return A`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return A`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return A`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return A`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return A`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return A`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return A`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return A`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return A`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return A`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return A`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return A`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return A`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return A`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return A`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return A`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WhatIsABuy":return A`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return A`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return A`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return A`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return A`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return A`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return A`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return A`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return A`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return A`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return A`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return A`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return A`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;default:return A`<w3m-connect-view></w3m-connect-view>`}}onViewChange(e){Rn.hide();let t=Ir.VIEW_DIRECTION.Next;const{history:r}=V.state;r.length<this.prevHistoryLength&&(t=Ir.VIEW_DIRECTION.Prev),this.prevHistoryLength=r.length,this.viewDirection=t,setTimeout(()=>{this.view=e},Ir.ANIMATION_DURATIONS.ViewTransition)}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};zo.styles=dv,bc([K()],zo.prototype,"view",void 0),bc([K()],zo.prototype,"viewDirection",void 0),zo=bc([Y("w3m-router")],zo);var hv=se`
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
`,Yr=function(e,t,r,n){var o=arguments.length,i=o<3?t:n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(i=(o<3?s(i):o>3?s(t,r,i):s(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i};const Ad="scroll-lock";let Ht=class extends J{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=M.state.enableEmbedded,this.open=ge.state.open,this.caipAddress=y.state.activeCaipAddress,this.caipNetwork=y.state.activeCaipNetwork,this.shake=ge.state.shake,this.filterByNamespace=G.state.filterByNamespace,this.initializeTheming(),Z.prefetchAnalyticsConfig(),this.unsubscribe.push(ge.subscribeKey("open",e=>e?this.onOpen():this.onClose()),ge.subscribeKey("shake",e=>this.shake=e),y.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),y.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),M.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e),G.subscribeKey("filterByNamespace",e=>{var t;this.filterByNamespace!==e&&!((t=y.getAccountData(e))!=null&&t.caipAddress)&&(Z.fetchRecommendedWallets(),this.filterByNamespace=e)}))}firstUpdated(){if(this.caipAddress){if(this.enableEmbedded){ge.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?A`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?A`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return A` <wui-card
      shake="${this.shake}"
      data-embedded="${ie(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){V.state.view==="UnsupportedChain"||await _r.isSIWXCloseDisabled()?ge.shake():ge.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=De.state,r=Ve.getColorTheme(t);ym(e,r)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),Ie.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Ad,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Ad}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")this.handleClose();else if(r.key==="Tab"){const{tagName:n}=r.target;n&&!n.includes("W3M-")&&!n.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=y.state.isSwitchingNamespace,r=j.getPlainAddress(e);!r&&!t?ge.close():t&&r&&V.goBack(),await _r.initializeIfEnabled(),this.caipAddress=e,y.setIsSwitchingNamespace(!1)}onNewNetwork(e){var m,g;const t=this.caipNetwork,r=(m=t==null?void 0:t.caipNetworkId)==null?void 0:m.toString(),n=t==null?void 0:t.chainNamespace,o=(g=e==null?void 0:e.caipNetworkId)==null?void 0:g.toString(),i=e==null?void 0:e.chainNamespace,s=r!==o,a=s&&n===i,c=(t==null?void 0:t.name)===re.UNSUPPORTED_NETWORK_NAME,l=V.state.view==="ConnectingExternal",u=!this.caipAddress,d=V.state.view==="UnsupportedChain",h=ge.state.open;let p=!1;h&&!l&&(u?s&&(p=!0):(d||a&&!c)&&(p=!0)),p&&V.state.view!=="SIWXSignMessage"&&V.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(Z.prefetch(),Z.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}};Ht.styles=hv,Yr([N({type:Boolean})],Ht.prototype,"enableEmbedded",void 0),Yr([K()],Ht.prototype,"open",void 0),Yr([K()],Ht.prototype,"caipAddress",void 0),Yr([K()],Ht.prototype,"caipNetwork",void 0),Yr([K()],Ht.prototype,"shake",void 0),Yr([K()],Ht.prototype,"filterByNamespace",void 0),Ht=Yr([Y("w3m-modal")],Ht);var pv=Object.freeze({__proto__:null,get W3mModal(){return Ht}});const fv=W`<svg
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
>`;var gv=Object.freeze({__proto__:null,addSvg:fv});const wv=W`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`;var mv=Object.freeze({__proto__:null,allWalletsSvg:wv});const vv=W`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`;var bv=Object.freeze({__proto__:null,arrowBottomCircleSvg:vv});const yv=W`
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
</svg>`;var Cv=Object.freeze({__proto__:null,appStoreSvg:yv});const xv=W`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var Ev=Object.freeze({__proto__:null,appleSvg:xv});const Av=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var kv=Object.freeze({__proto__:null,arrowBottomSvg:Av});const Iv=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var Nv=Object.freeze({__proto__:null,arrowLeftSvg:Iv});const Sv=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var _v=Object.freeze({__proto__:null,arrowRightSvg:Sv});const Tv=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`;var Pv=Object.freeze({__proto__:null,arrowTopSvg:Tv});const $v=W`<svg
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
>`;var Ov=Object.freeze({__proto__:null,bankSvg:$v});const Rv=W`<svg fill="none" viewBox="0 0 20 20">
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
</svg>`;var Bv=Object.freeze({__proto__:null,browserSvg:Rv});const Lv=W`<svg
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
>`;var Uv=Object.freeze({__proto__:null,cardSvg:Lv});const Mv=W`<svg
  width="28"
  height="28"
  viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M25.5297 4.92733C26.1221 5.4242 26.1996 6.30724 25.7027 6.89966L12.2836 22.8997C12.0316 23.2001 11.6652 23.3811 11.2735 23.3986C10.8817 23.4161 10.5006 23.2686 10.2228 22.9919L2.38218 15.1815C1.83439 14.6358 1.83268 13.7494 2.37835 13.2016C2.92403 12.6538 3.81046 12.6521 4.35825 13.1978L11.1183 19.9317L23.5573 5.10036C24.0542 4.50794 24.9372 4.43047 25.5297 4.92733Z"
    fill="currentColor"/>
</svg>
`;var zv=Object.freeze({__proto__:null,checkmarkSvg:Mv});const Dv=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var jv=Object.freeze({__proto__:null,checkmarkBoldSvg:Dv});const Wv=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var Hv=Object.freeze({__proto__:null,chevronBottomSvg:Wv});const Fv=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Vv=Object.freeze({__proto__:null,chevronLeftSvg:Fv});const qv=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Zv=Object.freeze({__proto__:null,chevronRightSvg:qv});const Gv=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var Kv=Object.freeze({__proto__:null,chevronTopSvg:Gv});const Yv=W`<svg width="36" height="36" fill="none">
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
</svg>`;var Jv=Object.freeze({__proto__:null,chromeStoreSvg:Yv});const Xv=W`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path 
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M7.00235 2C4.24 2 2.00067 4.23858 2.00067 7C2.00067 9.76142 4.24 12 7.00235 12C9.7647 12 12.004 9.76142 12.004 7C12.004 4.23858 9.7647 2 7.00235 2ZM0 7C0 3.13401 3.13506 0 7.00235 0C10.8696 0 14.0047 3.13401 14.0047 7C14.0047 10.866 10.8696 14 7.00235 14C3.13506 14 0 10.866 0 7ZM7.00235 3C7.55482 3 8.00269 3.44771 8.00269 4V6.58579L9.85327 8.43575C10.2439 8.82627 10.2439 9.45944 9.85327 9.84996C9.46262 10.2405 8.82924 10.2405 8.43858 9.84996L6.29501 7.70711C6.10741 7.51957 6.00201 7.26522 6.00201 7V4C6.00201 3.44771 6.44988 3 7.00235 3Z" 
    fill="currentColor"
  />
</svg>`;var Qv=Object.freeze({__proto__:null,clockSvg:Xv});const e4=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var t4=Object.freeze({__proto__:null,closeSvg:e4});const r4=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`;var n4=Object.freeze({__proto__:null,compassSvg:r4});const o4=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`;var i4=Object.freeze({__proto__:null,coinPlaceholderSvg:o4});const s4=W`<svg
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
>`;var a4=Object.freeze({__proto__:null,copySvg:s4});const c4=W` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`;var l4=Object.freeze({__proto__:null,cursorSvg:c4});const u4=W`<svg fill="none" viewBox="0 0 14 6">
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
</svg> `;var d4=Object.freeze({__proto__:null,cursorTransparentSvg:u4});const h4=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`;var p4=Object.freeze({__proto__:null,desktopSvg:h4});const f4=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`;var g4=Object.freeze({__proto__:null,disconnectSvg:f4});const w4=W`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var m4=Object.freeze({__proto__:null,discordSvg:w4});const v4=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`;var b4=Object.freeze({__proto__:null,etherscanSvg:v4});const y4=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`;var C4=Object.freeze({__proto__:null,extensionSvg:y4});const x4=W`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var E4=Object.freeze({__proto__:null,externalLinkSvg:x4});const A4=W`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var k4=Object.freeze({__proto__:null,facebookSvg:A4});const I4=W`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
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
</svg>`;var N4=Object.freeze({__proto__:null,farcasterSvg:I4});const S4=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var _4=Object.freeze({__proto__:null,filtersSvg:S4});const T4=W`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var P4=Object.freeze({__proto__:null,githubSvg:T4});const $4=W`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var O4=Object.freeze({__proto__:null,googleSvg:$4});const R4=W`<svg fill="none" viewBox="0 0 16 16">
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
</svg>`;var B4=Object.freeze({__proto__:null,helpCircleSvg:R4});const L4=W`<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M4.98926 3.73932C4.2989 3.73932 3.73926 4.29896 3.73926 4.98932C3.73926 5.67968 4.2989 6.23932 4.98926 6.23932C5.67962 6.23932 6.23926 5.67968 6.23926 4.98932C6.23926 4.29896 5.67962 3.73932 4.98926 3.73932Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.60497 0.500001H6.39504C5.41068 0.499977 4.59185 0.499958 3.93178 0.571471C3.24075 0.64634 2.60613 0.809093 2.04581 1.21619C1.72745 1.44749 1.44749 1.72745 1.21619 2.04581C0.809093 2.60613 0.64634 3.24075 0.571471 3.93178C0.499958 4.59185 0.499977 5.41065 0.500001 6.39501V7.57815C0.499998 8.37476 0.499995 9.05726 0.534869 9.62725C0.570123 10.2034 0.644114 10.7419 0.828442 11.2302C0.925651 11.4877 1.05235 11.7287 1.21619 11.9542C1.44749 12.2726 1.72745 12.5525 2.04581 12.7838C2.60613 13.1909 3.24075 13.3537 3.93178 13.4285C4.59185 13.5001 5.41066 13.5 6.39503 13.5H7.60496C8.58933 13.5 9.40815 13.5001 10.0682 13.4285C10.7593 13.3537 11.3939 13.1909 11.9542 12.7838C12.2726 12.5525 12.5525 12.2726 12.7838 11.9542C13.1909 11.3939 13.3537 10.7593 13.4285 10.0682C13.5 9.40816 13.5 8.58935 13.5 7.60497V6.39505C13.5 5.41068 13.5 4.59185 13.4285 3.93178C13.3537 3.24075 13.1909 2.60613 12.7838 2.04581C12.5525 1.72745 12.2726 1.44749 11.9542 1.21619C11.3939 0.809093 10.7593 0.64634 10.0682 0.571471C9.40816 0.499958 8.58933 0.499977 7.60497 0.500001ZM3.22138 2.83422C3.38394 2.71612 3.62634 2.61627 4.14721 2.55984C4.68679 2.50138 5.39655 2.5 6.45 2.5H7.55C8.60345 2.5 9.31322 2.50138 9.8528 2.55984C10.3737 2.61627 10.6161 2.71612 10.7786 2.83422C10.9272 2.94216 11.0578 3.07281 11.1658 3.22138C11.2839 3.38394 11.3837 3.62634 11.4402 4.14721C11.4986 4.68679 11.5 5.39655 11.5 6.45V6.49703C10.9674 6.11617 10.386 5.84936 9.74213 5.81948C8.40536 5.75745 7.3556 6.73051 6.40509 7.84229C6.33236 7.92737 6.27406 7.98735 6.22971 8.02911L6.1919 8.00514L6.17483 7.99427C6.09523 7.94353 5.98115 7.87083 5.85596 7.80302C5.56887 7.64752 5.18012 7.4921 4.68105 7.4921C4.66697 7.4921 4.6529 7.49239 4.63884 7.49299C3.79163 7.52878 3.09922 8.1106 2.62901 8.55472C2.58751 8.59392 2.54594 8.6339 2.50435 8.6745C2.50011 8.34653 2.5 7.97569 2.5 7.55V6.45C2.5 5.39655 2.50138 4.68679 2.55984 4.14721C2.61627 3.62634 2.71612 3.38394 2.83422 3.22138C2.94216 3.07281 3.07281 2.94216 3.22138 2.83422ZM10.3703 8.14825C10.6798 8.37526 11.043 8.71839 11.4832 9.20889C11.4744 9.44992 11.4608 9.662 11.4402 9.8528C11.3837 10.3737 11.2839 10.6161 11.1658 10.7786C11.0578 10.9272 10.9272 11.0578 10.7786 11.1658C10.6161 11.2839 10.3737 11.3837 9.8528 11.4402C9.31322 11.4986 8.60345 11.5 7.55 11.5H6.45C5.39655 11.5 4.68679 11.4986 4.14721 11.4402C3.62634 11.3837 3.38394 11.2839 3.22138 11.1658C3.15484 11.1174 3.0919 11.0645 3.03298 11.0075C3.10126 10.9356 3.16806 10.8649 3.23317 10.7959L3.29772 10.7276C3.55763 10.4525 3.78639 10.2126 4.00232 10.0087C4.22016 9.80294 4.39412 9.66364 4.53524 9.57742C4.63352 9.51738 4.69022 9.49897 4.71275 9.49345C4.76387 9.49804 4.81803 9.51537 4.90343 9.56162C4.96409 9.59447 5.02355 9.63225 5.11802 9.69238L5.12363 9.69595C5.20522 9.74789 5.32771 9.82587 5.46078 9.89278C5.76529 10.0459 6.21427 10.186 6.74977 10.0158C7.21485 9.86796 7.59367 9.52979 7.92525 9.14195C8.91377 7.98571 9.38267 7.80495 9.64941 7.81733C9.7858 7.82366 10.0101 7.884 10.3703 8.14825Z" fill="currentColor"/>
</svg>`;var U4=Object.freeze({__proto__:null,imageSvg:L4});const M4=W`<svg
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
</svg>`;var z4=Object.freeze({__proto__:null,idSvg:M4});const D4=W`<svg fill="none" viewBox="0 0 14 15">
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
</svg>`;var j4=Object.freeze({__proto__:null,infoCircleSvg:D4});const W4=W`<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00177 1.78569C3.8179 1.78569 2.85819 2.74508 2.85819 3.92855C2.85819 4.52287 3.09928 5.05956 3.49077 5.4485L3.5005 5.45817C3.64381 5.60054 3.76515 5.72108 3.85631 5.81845C3.93747 5.90512 4.05255 6.03218 4.12889 6.1805C4.16999 6.26034 4.19 6.30843 4.21768 6.39385C4.22145 6.40546 4.22499 6.41703 4.22833 6.42855H5.77521C5.77854 6.41703 5.78208 6.40547 5.78585 6.39385C5.81353 6.30843 5.83354 6.26034 5.87464 6.1805C5.95098 6.03218 6.06606 5.90512 6.14722 5.81845C6.23839 5.72108 6.35973 5.60053 6.50304 5.45816L6.51276 5.4485C6.90425 5.05956 7.14534 4.52287 7.14534 3.92855C7.14534 2.74508 6.18563 1.78569 5.00177 1.78569ZM5.71629 7.85712H4.28724C4.28724 8.21403 4.28876 8.40985 4.30703 8.54571C4.30727 8.54748 4.30751 8.54921 4.30774 8.55091C4.30944 8.55115 4.31118 8.55138 4.31295 8.55162C4.44884 8.56989 4.64474 8.5714 5.00177 8.5714C5.3588 8.5714 5.55469 8.56989 5.69059 8.55162C5.69236 8.55138 5.69409 8.55115 5.69579 8.55091C5.69603 8.54921 5.69627 8.54748 5.6965 8.54571C5.71477 8.40985 5.71629 8.21403 5.71629 7.85712ZM2.85819 7.14283C2.85819 6.9948 2.85796 6.91114 2.8548 6.85032C2.85461 6.84656 2.85441 6.84309 2.85421 6.83988C2.84393 6.8282 2.83047 6.81334 2.81301 6.79469C2.74172 6.71856 2.63908 6.61643 2.48342 6.46178C1.83307 5.81566 1.42914 4.91859 1.42914 3.92855C1.42914 1.9561 3.02866 0.357117 5.00177 0.357117C6.97487 0.357117 8.57439 1.9561 8.57439 3.92855C8.57439 4.91859 8.17047 5.81566 7.52012 6.46178C7.36445 6.61643 7.26182 6.71856 7.19053 6.79469C7.17306 6.81334 7.1596 6.8282 7.14932 6.83988C7.14912 6.84309 7.14892 6.84656 7.14873 6.85032C7.14557 6.91114 7.14534 6.9948 7.14534 7.14283V7.85712C7.14534 7.87009 7.14535 7.88304 7.14535 7.89598C7.14541 8.19889 7.14547 8.49326 7.11281 8.73606C7.076 9.00978 6.98631 9.32212 6.72678 9.58156C6.46726 9.841 6.15481 9.93065 5.881 9.96745C5.63813 10.0001 5.34365 10 5.04064 9.99998C5.0277 9.99998 5.01474 9.99998 5.00177 9.99998C4.98879 9.99998 4.97583 9.99998 4.96289 9.99998C4.65988 10 4.36541 10.0001 4.12253 9.96745C3.84872 9.93065 3.53628 9.841 3.27675 9.58156C3.01722 9.32212 2.92753 9.00978 2.89072 8.73606C2.85807 8.49326 2.85812 8.19889 2.85818 7.89598C2.85819 7.88304 2.85819 7.87008 2.85819 7.85712V7.14283ZM7.1243 6.86977C7.12366 6.87069 7.1233 6.87116 7.12327 6.87119C7.12323 6.87123 7.12356 6.87076 7.1243 6.86977ZM2.88027 6.8712C2.88025 6.87119 2.87988 6.8707 2.87921 6.86975C2.87995 6.87072 2.88028 6.8712 2.88027 6.8712Z" fill="#949E9E"/>
</svg>`;var H4=Object.freeze({__proto__:null,lightbulbSvg:W4});const F4=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`;var V4=Object.freeze({__proto__:null,mailSvg:F4});const q4=W`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`;var Z4=Object.freeze({__proto__:null,mobileSvg:q4});const G4=W`<svg fill="none" viewBox="0 0 41 40">
  <path
    style="fill: var(--wui-color-fg-100);"
    fill-opacity=".05"
    d="M.6 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z"
  />
  <path
    fill="#949E9E"
    d="M15.6 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM23.1 20.31a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM28.1 22.81a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  />
</svg>`;var K4=Object.freeze({__proto__:null,moreSvg:G4});const Y4=W`<svg fill="none" viewBox="0 0 22 20">
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
</svg>`;var J4=Object.freeze({__proto__:null,networkPlaceholderSvg:Y4});const X4=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`;var Q4=Object.freeze({__proto__:null,nftPlaceholderSvg:X4});const eb=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`;var tb=Object.freeze({__proto__:null,offSvg:eb});const rb=W` <svg
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
</svg>`;var nb=Object.freeze({__proto__:null,playStoreSvg:rb});const ob=W`<svg
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
>`;var ib=Object.freeze({__proto__:null,plusSvg:ob});const sb=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`;var ab=Object.freeze({__proto__:null,qrCodeIcon:sb});const cb=W`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`;var lb=Object.freeze({__proto__:null,recycleHorizontalSvg:cb});const ub=W`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`;var db=Object.freeze({__proto__:null,refreshSvg:ub});const hb=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`;var pb=Object.freeze({__proto__:null,searchSvg:hb});const fb=W`<svg fill="none" viewBox="0 0 21 20">
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
>`;var gb=Object.freeze({__proto__:null,sendSvg:fb});const wb=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`;var mb=Object.freeze({__proto__:null,swapHorizontalSvg:wb});const vb=W`<svg
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

`;var bb=Object.freeze({__proto__:null,swapHorizontalMediumSvg:vb});const yb=W`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`;var Cb=Object.freeze({__proto__:null,swapHorizontalBoldSvg:yb});const xb=W`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`;var Eb=Object.freeze({__proto__:null,swapHorizontalRoundedBoldSvg:xb});const Ab=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`;var kb=Object.freeze({__proto__:null,swapVerticalSvg:Ab});const Ib=W`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
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
</svg>`;var Nb=Object.freeze({__proto__:null,telegramSvg:Ib});const Sb=W`<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 3.71875C6.0335 3.71875 5.25 2.93525 5.25 1.96875C5.25 1.00225 6.0335 0.21875 7 0.21875C7.9665 0.21875 8.75 1.00225 8.75 1.96875C8.75 2.93525 7.9665 3.71875 7 3.71875Z" fill="#949E9E"/>
  <path d="M7 8.96875C6.0335 8.96875 5.25 8.18525 5.25 7.21875C5.25 6.25225 6.0335 5.46875 7 5.46875C7.9665 5.46875 8.75 6.25225 8.75 7.21875C8.75 8.18525 7.9665 8.96875 7 8.96875Z" fill="#949E9E"/>
  <path d="M5.25 12.4688C5.25 13.4352 6.0335 14.2187 7 14.2187C7.9665 14.2187 8.75 13.4352 8.75 12.4688C8.75 11.5023 7.9665 10.7188 7 10.7188C6.0335 10.7188 5.25 11.5023 5.25 12.4688Z" fill="#949E9E"/>
</svg>`;var _b=Object.freeze({__proto__:null,threeDotsSvg:Sb});const Tb=W`<svg fill="none" viewBox="0 0 40 40">
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
</svg>`;var Pb=Object.freeze({__proto__:null,twitchSvg:Tb});const $b=W`<svg fill="none" viewBox="0 0 41 40">
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
</svg>`;var kd=Object.freeze({__proto__:null,xSvg:$b});const Ob=W`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`;var Rb=Object.freeze({__proto__:null,twitterIconSvg:Ob});const Bb=W`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`;var Lb=Object.freeze({__proto__:null,verifySvg:Bb});const Ub=W`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`;var Mb=Object.freeze({__proto__:null,verifyFilledSvg:Ub});const zb=W`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`;var Db=Object.freeze({__proto__:null,walletSvg:zb});const jb=W`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,Wb=W`
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
`,Hb=W`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`;var yc=Object.freeze({__proto__:null,walletConnectSvg:jb,walletConnectLightBrownSvg:Wb,walletConnectBrownSvg:Hb});const Fb=W`
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
`;var Vb=Object.freeze({__proto__:null,walletPlaceholderSvg:Fb});const qb=W`<svg fill="none" viewBox="0 0 20 20">
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
</svg>`;var Zb=Object.freeze({__proto__:null,warningCircleSvg:qb});const Gb=W`<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.125 6.875C9.125 6.57833 9.21298 6.28832 9.3778 6.04165C9.54262 5.79497 9.77689 5.60271 10.051 5.48918C10.3251 5.37565 10.6267 5.34594 10.9176 5.40382C11.2086 5.4617 11.4759 5.60456 11.6857 5.81434C11.8954 6.02412 12.0383 6.29139 12.0962 6.58236C12.1541 6.87334 12.1244 7.17494 12.0108 7.44903C11.8973 7.72311 11.705 7.95738 11.4584 8.1222C11.2117 8.28703 10.9217 8.375 10.625 8.375C10.2272 8.375 9.84565 8.21696 9.56434 7.93566C9.28304 7.65436 9.125 7.27282 9.125 6.875ZM21.125 11C21.125 13.0025 20.5312 14.9601 19.4186 16.6251C18.3061 18.2902 16.7248 19.5879 14.8747 20.3543C13.0246 21.1206 10.9888 21.3211 9.02471 20.9305C7.06066 20.5398 5.25656 19.5755 3.84055 18.1595C2.42454 16.7435 1.46023 14.9393 1.06955 12.9753C0.678878 11.0112 0.879387 8.97543 1.64572 7.12533C2.41206 5.27523 3.70981 3.69392 5.37486 2.58137C7.0399 1.46882 8.99747 0.875 11 0.875C13.6844 0.877978 16.258 1.94567 18.1562 3.84383C20.0543 5.74199 21.122 8.3156 21.125 11ZM18.875 11C18.875 9.44247 18.4131 7.91992 17.5478 6.62488C16.6825 5.32985 15.4526 4.32049 14.0136 3.72445C12.5747 3.12841 10.9913 2.97246 9.46367 3.27632C7.93607 3.58017 6.53288 4.3302 5.43154 5.43153C4.3302 6.53287 3.58018 7.93606 3.27632 9.46366C2.97246 10.9913 3.12841 12.5747 3.72445 14.0136C4.32049 15.4526 5.32985 16.6825 6.62489 17.5478C7.91993 18.4131 9.44248 18.875 11 18.875C13.0879 18.8728 15.0896 18.0424 16.566 16.566C18.0424 15.0896 18.8728 13.0879 18.875 11ZM12.125 14.4387V11.375C12.125 10.8777 11.9275 10.4008 11.5758 10.0492C11.2242 9.69754 10.7473 9.5 10.25 9.5C9.98433 9.4996 9.72708 9.59325 9.52383 9.76435C9.32058 9.93544 9.18444 10.173 9.13952 10.4348C9.09461 10.6967 9.14381 10.966 9.27843 11.195C9.41304 11.4241 9.62438 11.5981 9.875 11.6863V14.75C9.875 15.2473 10.0725 15.7242 10.4242 16.0758C10.7758 16.4275 11.2527 16.625 11.75 16.625C12.0157 16.6254 12.2729 16.5318 12.4762 16.3607C12.6794 16.1896 12.8156 15.952 12.8605 15.6902C12.9054 15.4283 12.8562 15.159 12.7216 14.93C12.587 14.7009 12.3756 14.5269 12.125 14.4387Z" fill="currentColor"/>
</svg>`;var Kb=Object.freeze({__proto__:null,infoSvg:Gb});const Yb=W`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0162 11.6312L9.55059 2.13937C9.39228 1.86862 9.16584 1.64405 8.8938 1.48798C8.62176 1.33192 8.3136 1.2498 7.99997 1.2498C7.68634 1.2498 7.37817 1.33192 7.10613 1.48798C6.83409 1.64405 6.60765 1.86862 6.44934 2.13937L0.983716 11.6312C0.830104 11.894 0.749146 12.1928 0.749146 12.4972C0.749146 12.8015 0.830104 13.1004 0.983716 13.3631C1.14027 13.6352 1.3664 13.8608 1.63889 14.0166C1.91139 14.1725 2.22044 14.253 2.53434 14.25H13.4656C13.7793 14.2528 14.0881 14.1721 14.3603 14.0163C14.6326 13.8604 14.8585 13.635 15.015 13.3631C15.1688 13.1005 15.2499 12.8017 15.2502 12.4973C15.2504 12.193 15.1696 11.8941 15.0162 11.6312ZM13.7162 12.6125C13.6908 12.6558 13.6541 12.6914 13.6101 12.7157C13.5661 12.7399 13.5164 12.7517 13.4662 12.75H2.53434C2.48415 12.7517 2.43442 12.7399 2.39042 12.7157C2.34641 12.6914 2.30976 12.6558 2.28434 12.6125C2.26278 12.5774 2.25137 12.5371 2.25137 12.4959C2.25137 12.4548 2.26278 12.4144 2.28434 12.3794L7.74997 2.88749C7.77703 2.84583 7.81408 2.8116 7.85774 2.7879C7.9014 2.7642 7.95029 2.75178 7.99997 2.75178C8.04964 2.75178 8.09854 2.7642 8.1422 2.7879C8.18586 2.8116 8.2229 2.84583 8.24997 2.88749L13.715 12.3794C13.7367 12.4143 13.7483 12.4546 13.7486 12.4958C13.7488 12.5369 13.7376 12.5773 13.7162 12.6125ZM7.24997 8.49999V6.49999C7.24997 6.30108 7.32898 6.11031 7.46964 5.96966C7.61029 5.82901 7.80105 5.74999 7.99997 5.74999C8.19888 5.74999 8.38964 5.82901 8.5303 5.96966C8.67095 6.11031 8.74997 6.30108 8.74997 6.49999V8.49999C8.74997 8.6989 8.67095 8.88967 8.5303 9.03032C8.38964 9.17097 8.19888 9.24999 7.99997 9.24999C7.80105 9.24999 7.61029 9.17097 7.46964 9.03032C7.32898 8.88967 7.24997 8.6989 7.24997 8.49999ZM8.99997 11C8.99997 11.1978 8.94132 11.3911 8.83144 11.5556C8.72155 11.72 8.56538 11.8482 8.38265 11.9239C8.19992 11.9996 7.99886 12.0194 7.80488 11.9808C7.6109 11.9422 7.43271 11.847 7.29286 11.7071C7.15301 11.5672 7.05777 11.3891 7.01918 11.1951C6.9806 11.0011 7.0004 10.8 7.07609 10.6173C7.15177 10.4346 7.27995 10.2784 7.4444 10.1685C7.60885 10.0586 7.80219 9.99999 7.99997 9.99999C8.26518 9.99999 8.51954 10.1053 8.70707 10.2929C8.89461 10.4804 8.99997 10.7348 8.99997 11Z" fill="currentColor"/>
</svg>
`;var Jb=Object.freeze({__proto__:null,exclamationTriangleSvg:Yb});const Xb=W`<svg width="60" height="16" viewBox="0 0 60 16" fill="none"">
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
</svg>`;var Qb=Object.freeze({__proto__:null,reownSvg:Xb});export{c6 as EthereumProvider,kp as OPTIONAL_EVENTS,Ap as OPTIONAL_METHODS,Tc as REQUIRED_EVENTS,_c as REQUIRED_METHODS,rl as default};
