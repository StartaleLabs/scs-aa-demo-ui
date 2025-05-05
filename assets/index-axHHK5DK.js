import{i as v,r as b,m as f,k as m,a as g,x as h}from"./index-CZx0p4U_.js";import{n as l,c as w}from"./if-defined-CaD9N74k.js";const x=v`
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
`;var d=function(i,o,r,e){var a=arguments.length,t=a<3?o:e===null?e=Object.getOwnPropertyDescriptor(o,r):e,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,o,r,e);else for(var s=i.length-1;s>=0;s--)(n=i[s])&&(t=(a<3?n(t):a>3?n(o,r,t):n(o,r))||t);return a>3&&t&&Object.defineProperty(o,r,t),t};let c=class extends g{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const o=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",r=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${o});
    --local-padding: var(${r});
`,h`
      <button ?disabled=${this.disabled}>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};c.styles=[b,f,m,x];d([l()],c.prototype,"size",void 0);d([l({type:Boolean})],c.prototype,"disabled",void 0);d([l()],c.prototype,"icon",void 0);d([l()],c.prototype,"iconColor",void 0);c=d([w("wui-icon-link")],c);const y=v`
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
`;var p=function(i,o,r,e){var a=arguments.length,t=a<3?o:e===null?e=Object.getOwnPropertyDescriptor(o,r):e,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(i,o,r,e);else for(var s=i.length-1;s>=0;s--)(n=i[s])&&(t=(a<3?n(t):a>3?n(o,r,t):n(o,r))||t);return a>3&&t&&Object.defineProperty(o,r,t),t};let u=class extends g{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const o=this.size==="md"?"mini-700":"micro-700";return h`
      <wui-text data-variant=${this.variant} variant=${o} color="inherit">
        <slot></slot>
      </wui-text>
    `}};u.styles=[b,y];p([l()],u.prototype,"variant",void 0);p([l()],u.prototype,"size",void 0);u=p([w("wui-tag")],u);
