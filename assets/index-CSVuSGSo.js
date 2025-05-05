import{i as h,r as f,m as y,a as g,x as u}from"./index-CZx0p4U_.js";import{n as c,c as x,U as w}from"./if-defined-CaD9N74k.js";import"./index-y5n3Dtgq.js";const k=h`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var m=function(r,o,t,a){var i=arguments.length,e=i<3?o:a===null?a=Object.getOwnPropertyDescriptor(o,t):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,o,t,a);else for(var n=r.length-1;n>=0;n--)(l=r[n])&&(e=(i<3?l(e):i>3?l(o,t,e):l(o,t))||e);return i>3&&e&&Object.defineProperty(o,t,e),e};let s=class extends g{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return u`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="s" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${w.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?u`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:u`<wui-icon name="coinPlaceholder" color="fg-100"></wui-icon>`}};s.styles=[f,y,k];m([c()],s.prototype,"tokenName",void 0);m([c()],s.prototype,"tokenImageUrl",void 0);m([c({type:Number})],s.prototype,"tokenValue",void 0);m([c()],s.prototype,"tokenAmount",void 0);m([c()],s.prototype,"tokenCurrency",void 0);m([c({type:Boolean})],s.prototype,"clickable",void 0);s=m([x("wui-list-token")],s);const $=h`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-color-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
    transition: background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: background-color;
  }
`;var b=function(r,o,t,a){var i=arguments.length,e=i<3?o:a===null?a=Object.getOwnPropertyDescriptor(o,t):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,o,t,a);else for(var n=r.length-1;n>=0;n--)(l=r[n])&&(e=(i<3?l(e):i>3?l(o,t,e):l(o,t))||e);return i>3&&e&&Object.defineProperty(o,t,e),e};let p=class extends g{constructor(){super(...arguments),this.text=""}render(){return u`${this.template()}`}template(){return this.text?u`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};p.styles=[f,$];b([c()],p.prototype,"text",void 0);p=b([x("wui-separator")],p);const j=h`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-color-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var v=function(r,o,t,a){var i=arguments.length,e=i<3?o:a===null?a=Object.getOwnPropertyDescriptor(o,t):a,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,o,t,a);else for(var n=r.length-1;n>=0;n--)(l=r[n])&&(e=(i<3?l(e):i>3?l(o,t,e):l(o,t))||e);return i>3&&e&&Object.defineProperty(o,t,e),e};let d=class extends g{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){return this.style.cssText=`
    --local-width: var(--wui-icon-box-size-${this.size});
    --local-height: var(--wui-icon-box-size-${this.size});
    `,u`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",u`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const o=w.generateAvatarColors(this.address);return this.style.cssText+=`
 ${o}`,null}return this.dataset.variant="default",null}};d.styles=[f,j];v([c()],d.prototype,"imageSrc",void 0);v([c()],d.prototype,"alt",void 0);v([c()],d.prototype,"address",void 0);v([c()],d.prototype,"size",void 0);d=v([x("wui-avatar")],d);
