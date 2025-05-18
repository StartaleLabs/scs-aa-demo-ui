import{i as u,r as p,m as b,k as f,a as h,x as m}from"./index-CKWNxG2P.js";import{n as c,c as v}from"./if-defined-NkAM0qLc.js";const w=u`
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
`;var n=function(r,o,e,s){var a=arguments.length,i=a<3?o:s===null?s=Object.getOwnPropertyDescriptor(o,e):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,o,e,s);else for(var l=r.length-1;l>=0;l--)(d=r[l])&&(i=(a<3?d(i):a>3?d(o,e,i):d(o,e))||i);return a>3&&i&&Object.defineProperty(o,e,i),i};let t=class extends h{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const o=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",e=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${o});
    --local-padding: var(${e});
`,m`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};t.styles=[p,b,f,w];n([c()],t.prototype,"size",void 0);n([c({type:Boolean})],t.prototype,"disabled",void 0);n([c()],t.prototype,"icon",void 0);n([c()],t.prototype,"iconColor",void 0);t=n([v("wui-icon-link")],t);
