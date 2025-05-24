import{y as k,z as C,B as $,i as d,r as y,a as f,x as s,O as a,m as R}from"./index-jgQLEoCx.js";import{n as _,c as b,o as O,r as j}from"./if-defined-ByNRz2cX.js";import{e as P,n as U}from"./ref-Cy49JFg5.js";import{R as T}from"./ConstantsUtil-Dmg8YACJ.js";const u=k({isLegalCheckboxChecked:!1}),w={state:u,subscribe(r){return $(u,()=>r(u))},subscribeKey(r,e){return C(u,r,e)},setIsLegalCheckboxChecked(r){u.isLegalCheckboxChecked=r}},L=d`
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    column-gap: var(--wui-spacing-1xs);
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  label > span {
    width: var(--wui-spacing-xl);
    height: var(--wui-spacing-xl);
    min-width: var(--wui-spacing-xl);
    min-height: var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-3xs);
    border-width: 1px;
    border-style: solid;
    border-color: var(--wui-color-gray-glass-010);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  label > span:hover,
  label > input[type='checkbox']:focus-visible + span {
    background-color: var(--wui-color-gray-glass-010);
  }

  label input[type='checkbox']:checked + span {
    background-color: var(--wui-color-blue-base-90);
  }

  label > span > wui-icon {
    opacity: 0;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span wui-icon {
    opacity: 1;
  }
`;var m=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var l=r.length-1;l>=0;l--)(c=r[l])&&(t=(i<3?c(t):i>3?c(e,n,t):c(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let h=class extends f{constructor(){super(...arguments),this.inputElementRef=P(),this.checked=void 0}render(){return s`
      <label>
        <input
          ${U(this.inputElementRef)}
          ?checked=${O(this.checked)}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" color="inverse-100" size="xxs"></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.checked,bubbles:!0,composed:!0}))}};h.styles=[y,L];m([_({type:Boolean})],h.prototype,"checked",void 0);h=m([b("wui-checkbox")],h);const B=d`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: var(--wui-spacing-s);
  }
  a {
    text-decoration: none;
    color: var(--wui-color-fg-150);
    font-weight: 500;
  }
`;var v=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var l=r.length-1;l>=0;l--)(c=r[l])&&(t=(i<3?c(t):i>3?c(e,n,t):c(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let p=class extends f{constructor(){super(),this.unsubscribe=[],this.checked=w.state.isLegalCheckboxChecked,this.unsubscribe.push(w.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var i;const{termsConditionsUrl:e,privacyPolicyUrl:n}=a.state,o=(i=a.state.features)==null?void 0:i.legalCheckbox;return!e&&!n||!o?null:s`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="fg-250" variant="small-400" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=a.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=a.state;return e?s`<a rel="noreferrer" target="_blank" href=${e}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=a.state;return e?s`<a rel="noreferrer" target="_blank" href=${e}>privacy policy</a>`:null}onCheckboxChange(){w.setIsLegalCheckboxChecked(!this.checked)}};p.styles=[B];v([j()],p.prototype,"checked",void 0);p=v([b("w3m-legal-checkbox")],p);const E=d`
  .reown-logo {
    height: var(--wui-spacing-xxl);
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    opacity: 0.9;
  }
`;var W=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var l=r.length-1;l>=0;l--)(c=r[l])&&(t=(i<3?c(t):i>3?c(e,n,t):c(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let x=class extends f{render(){return s`
      <a href=${T} rel="noreferrer" target="_blank" style="text-decoration: none;">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="xs"
          .padding=${["0","0","l","0"]}
        >
          <wui-text variant="small-500" color="fg-100"> UX by </wui-text>
          <wui-icon name="reown" size="xxxl" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};x.styles=[y,R,E];x=W([b("wui-ux-by-reown")],x);const D=d`
  :host > wui-flex {
    background-color: var(--wui-color-gray-glass-005);
  }

  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: var(--wui-spacing-m);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var z=function(r,e,n,o){var i=arguments.length,t=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(r,e,n,o);else for(var l=r.length-1;l>=0;l--)(c=r[l])&&(t=(i<3?c(t):i>3?c(e,n,t):c(e,n))||t);return i>3&&t&&Object.defineProperty(e,n,t),t};let g=class extends f{render(){var t;const{termsConditionsUrl:e,privacyPolicyUrl:n}=a.state,o=(t=a.state.features)==null?void 0:t.legalCheckbox;return!e&&!n||o?s`
        <wui-flex flexDirection="column">
          <wui-ux-by-reown class="branding-only"></wui-ux-by-reown>
        </wui-flex>
      `:s`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
          <wui-text color="fg-250" variant="small-400" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        <wui-ux-by-reown></wui-ux-by-reown>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=a.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=a.state;return e?s`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=a.state;return e?s`<a href=${e}>Privacy Policy</a>`:null}};g.styles=[D];g=z([b("w3m-legal-footer")],g);export{w as O};
