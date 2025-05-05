import{i as x,r as $,m as A,a as k,x as l,A as w,e as u,S as h,G as g,T as v,W as R,R as T,d as I}from"./index-CZx0p4U_.js";import{n as C,c as N,U as S,o as O,r as m}from"./if-defined-CaD9N74k.js";import"./index-pzGjhD_p.js";import"./index-y5n3Dtgq.js";import"./index-CIvomTTJ.js";import"./index-LINZo7Ev.js";import"./index-D_sE5vDe.js";const _=x`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var b=function(n,e,r,i){var s=arguments.length,t=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(t=(s<3?o(t):s>3?o(e,r,t):o(e,r))||t);return s>3&&t&&Object.defineProperty(e,r,t),t};let p=class extends k{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return l`
      <button>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return l` <wui-flex class="networks">
      ${e==null?void 0:e.map(r=>l` <wui-flex class="network-icon"> <wui-image src=${r}></wui-image> </wui-flex>`)}
    </wui-flex>`}};p.styles=[$,A,_];b([C({type:Array})],p.prototype,"networkImages",void 0);b([C()],p.prototype,"text",void 0);p=b([N("wui-compatible-network")],p);const E=x`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var d=function(n,e,r,i){var s=arguments.length,t=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,r):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,r,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(t=(s<3?o(t):s>3?o(e,r,t):o(e,r))||t);return s>3&&t&&Object.defineProperty(e,r,t),t};let c=class extends k{constructor(){super(),this.unsubscribe=[],this.address=w.state.address,this.profileName=w.state.profileName,this.network=u.state.activeCaipNetwork,this.preferredAccountTypes=w.state.preferredAccountTypes,this.unsubscribe.push(w.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountTypes=e.preferredAccountTypes):h.showError("Account not found")}),u.subscribeKey("activeCaipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=g.getNetworkImage(this.network);return l` <wui-flex
      flexDirection="column"
      .padding=${["0","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${S.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${e||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${v.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${O(v.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var o,a;const e=u.getAllRequestedCaipNetworks(),r=u.checkIfSmartAccountEnabled(),i=u.state.activeCaipNetwork;if(((o=this.preferredAccountTypes)==null?void 0:o[i==null?void 0:i.chainNamespace])===R.ACCOUNT_TYPES.SMART_ACCOUNT&&r)return i?l`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[g.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const t=((a=e==null?void 0:e.filter(f=>{var y;return(y=f==null?void 0:f.assets)==null?void 0:y.imageId}))==null?void 0:a.slice(0,5)).map(g.getNetworkImage).filter(Boolean);return l`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${t}
    ></wui-compatible-network>`}onReceiveClick(){T.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(I.copyToClopboard(this.address),h.showSuccess("Address copied"))}catch{h.showError("Failed to copy")}}};c.styles=E;d([m()],c.prototype,"address",void 0);d([m()],c.prototype,"profileName",void 0);d([m()],c.prototype,"network",void 0);d([m()],c.prototype,"preferredAccountTypes",void 0);c=d([N("w3m-wallet-receive-view")],c);export{c as W3mWalletReceiveView};
