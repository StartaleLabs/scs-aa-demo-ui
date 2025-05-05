import{t as ie,H as Z,B as K,I as q,e as A,c as se,A as $,J as oe,v as ne,w as ae,i as R,a as y,x as c,K as L,L as C,O as D,M as _,G as ce,f as ee,W as te,R as E,d as F,b as V,o as le,S as M,T as ue}from"./index-CZx0p4U_.js";import{n as p,c as g,o as h,r as d}from"./if-defined-CaD9N74k.js";import{D as de,T as pe}from"./index-C_X4geU4.js";import"./index-iYow9vZR.js";import"./index-y5n3Dtgq.js";import"./index-DuSPffcV.js";import"./index-CfX9bKRB.js";import{O as Y}from"./index-8bNzzWmZ.js";import"./index-BG1smVu9.js";import"./index-BstAP6f2.js";import"./index-CcTupny1.js";import"./index-LINZo7Ev.js";import"./index-jGS0STTz.js";const j={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},H={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},me={providers:Z,selectedProvider:null,error:null,purchaseCurrency:j,paymentCurrency:H,purchaseCurrencies:[j],paymentCurrencies:[],quotesLoading:!1},l=ie(me),u={state:l,subscribe(s){return ae(l,()=>s(l))},subscribeKey(s,e){return ne(l,s,e)},setSelectedProvider(s){if(s&&s.name==="meld"){const e=A.state.activeChain===se.CHAIN.SOLANA?"SOL":"USDC",t=$.state.address??"",i=new URL(s.url);i.searchParams.append("publicKey",oe),i.searchParams.append("destinationCurrencyCode",e),i.searchParams.append("walletAddress",t),s.url=i.toString()}l.selectedProvider=s},setPurchaseCurrency(s){l.purchaseCurrency=s},setPaymentCurrency(s){l.paymentCurrency=s},setPurchaseAmount(s){this.state.purchaseAmount=s},setPaymentAmount(s){this.state.paymentAmount=s},async getAvailableCurrencies(){const s=await K.getOnrampOptions();l.purchaseCurrencies=s.purchaseCurrencies,l.paymentCurrencies=s.paymentCurrencies,l.paymentCurrency=s.paymentCurrencies[0]||H,l.purchaseCurrency=s.purchaseCurrencies[0]||j,await q.fetchCurrencyImages(s.paymentCurrencies.map(e=>e.id)),await q.fetchTokenImages(s.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var s,e;l.quotesLoading=!0;try{const t=await K.getOnrampQuote({purchaseCurrency:l.purchaseCurrency,paymentCurrency:l.paymentCurrency,amount:((s=l.paymentAmount)==null?void 0:s.toString())||"0",network:(e=l.purchaseCurrency)==null?void 0:e.symbol});return l.quotesLoading=!1,l.purchaseAmount=Number(t==null?void 0:t.purchaseAmount.amount),t}catch(t){return l.error=t.message,l.quotesLoading=!1,null}finally{l.quotesLoading=!1}},resetState(){l.providers=Z,l.selectedProvider=null,l.error=null,l.purchaseCurrency=j,l.paymentCurrency=H,l.purchaseCurrencies=[j],l.paymentCurrencies=[],l.paymentAmount=void 0,l.purchaseAmount=void 0,l.quotesLoading=!1}},he=R`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var w=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let m=class extends y{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return c`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?c`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:c`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await q._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return c`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return c`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return c`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};m.styles=[he];w([p({type:Boolean})],m.prototype,"disabled",void 0);w([p()],m.prototype,"color",void 0);w([p()],m.prototype,"label",void 0);w([p()],m.prototype,"purchaseValue",void 0);w([p()],m.prototype,"purchaseCurrency",void 0);w([p()],m.prototype,"date",void 0);w([p({type:Boolean})],m.prototype,"completed",void 0);w([p({type:Boolean})],m.prototype,"inProgress",void 0);w([p({type:Boolean})],m.prototype,"failed",void 0);w([p()],m.prototype,"onClick",void 0);w([p()],m.prototype,"symbol",void 0);w([p()],m.prototype,"icon",void 0);m=w([g("w3m-onramp-activity-item")],m);const fe=R`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var B=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const we=7;let O=class extends y{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=u.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=L.state.coinbaseTransactions,this.tokenImages=C.state.tokenImages,this.unsubscribe.push(u.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),C.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},L.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),L.clearCursor(),this.fetchTransactions()}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(t=>{var a,N,X;const i=de.formatDate((a=t==null?void 0:t.metadata)==null?void 0:a.minedAt),o=t.transfers[0],r=o==null?void 0:o.fungible_info;if(!r)return null;const n=((N=r==null?void 0:r.icon)==null?void 0:N.url)||((X=this.tokenImages)==null?void 0:X[r.symbol||""]);return c`
        <w3m-onramp-activity-item
          label="Bought"
          .completed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${t.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${h(r.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${i}
          icon=${h(n)}
          symbol=${h(r.symbol)}
        ></w3m-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(t=>{const i=parseInt(t,10);return new Array(12).fill(null).map((r,n)=>n).reverse().map(r=>{var N;const n=pe.getTransactionGroupTitle(i,r),a=(N=this.coinbaseTransactions[i])==null?void 0:N[r];return a?c`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${n}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=$.state.address,t=D.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await L.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var o;const e=new Date;if((((o=this.coinbaseTransactions[e.getFullYear()])==null?void 0:o[e.getMonth()])||[]).filter(r=>r.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const r=$.state.address;await L.fetchTransactions(r,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(we).fill(c` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};O.styles=fe;B([d()],O.prototype,"selectedOnRampProvider",void 0);B([d()],O.prototype,"loading",void 0);B([d()],O.prototype,"coinbaseTransactions",void 0);B([d()],O.prototype,"tokenImages",void 0);O=B([g("w3m-onramp-activity-view")],O);const ye=R`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var W=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let k=class extends y{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=u.state.paymentCurrency,this.currencies=u.state.paymentCurrencies,this.currencyImages=C.state.currencyImages,this.checked=Y.state.isLegalCheckboxChecked,this.unsubscribe.push(u.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),C.subscribeKey("currencyImages",e=>this.currencyImages=e),Y.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var a;const{termsConditionsUrl:e,privacyPolicyUrl:t}=D.state,i=(a=D.state.features)==null?void 0:a.legalCheckbox,n=!!(e||t)&&!!i&&!this.checked;return c`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${h(n?"disabled":void 0)}
      >
        ${this.currenciesTemplate(n)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.currencies.map(t=>{var i;return c`
        <wui-list-item
          imageSrc=${h((i=this.currencyImages)==null?void 0:i[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${h(e?-1:void 0)}
        >
          <wui-text variant="paragraph-500" color="fg-100">${t.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(u.setPaymentCurrency(e),_.close())}};k.styles=ye;W([d()],k.prototype,"selectedCurrency",void 0);W([d()],k.prototype,"currencies",void 0);W([d()],k.prototype,"currencyImages",void 0);W([d()],k.prototype,"checked",void 0);k=W([g("w3m-onramp-fiat-select-view")],k);const ge=R`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    border: none;
    outline: none;
    background-color: var(--wui-color-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-color-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-color-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var I=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let v=class extends y{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return c`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${h(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?c`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:c`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var i;const e=A.getAllRequestedCaipNetworks(),t=(i=e==null?void 0:e.filter(o=>{var r;return(r=o==null?void 0:o.assets)==null?void 0:r.imageId}))==null?void 0:i.slice(0,5);return c`
      <wui-flex class="networks">
        ${t==null?void 0:t.map(o=>c`
            <wui-flex class="network-icon">
              <wui-image src=${h(ce.getNetworkImage(o))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};v.styles=[ge];I([p({type:Boolean})],v.prototype,"disabled",void 0);I([p()],v.prototype,"color",void 0);I([p()],v.prototype,"name",void 0);I([p()],v.prototype,"label",void 0);I([p()],v.prototype,"feeRange",void 0);I([p({type:Boolean})],v.prototype,"loading",void 0);I([p()],v.prototype,"onClick",void 0);v=I([g("w3m-onramp-provider-item")],v);const be=R`
  wui-flex {
    border-top: 1px solid var(--wui-color-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var ve=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let G=class extends y{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=D.state;return!e&&!t?null:c`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return c` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){var t;const e=A.state.activeChain;ee.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:((t=$.state.preferredAccountTypes)==null?void 0:t[e])===te.ACCOUNT_TYPES.SMART_ACCOUNT}}),E.push("WhatIsABuy")}};G.styles=[be];G=ve([g("w3m-onramp-providers-footer")],G);var re=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let Q=class extends y{constructor(){super(),this.unsubscribe=[],this.providers=u.state.providers,this.unsubscribe.push(u.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async t=>t.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(t==null?void 0:t.url));Promise.all(e).then(t=>{this.providers=this.providers.map((i,o)=>({...i,url:t[o]||""}))})}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","s","s","s"]} gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.filter(e=>e.supportedChains.includes(A.state.activeChain??"eip155")).map(e=>c`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
          ></w3m-onramp-provider-item>
        `)}onClickProvider(e){var i;const t=A.state.activeChain;u.setSelectedProvider(e),E.push("BuyInProgress"),F.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes"),ee.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:((i=$.state.preferredAccountTypes)==null?void 0:i[t])===te.ACCOUNT_TYPES.SMART_ACCOUNT}})}async getCoinbaseOnRampURL(){const e=$.state.address,t=A.state.activeCaipNetwork;if(!e)throw new Error("No address found");if(!(t!=null&&t.name))throw new Error("No network found");const i=V.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??V.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=u.state.purchaseCurrency,r=o?[o.symbol]:u.state.purchaseCurrencies.map(n=>n.symbol);return await K.generateOnRampURL({defaultNetwork:i,destinationWallets:[{address:e,blockchains:V.WC_COINBASE_PAY_SDK_CHAINS,assets:r}],partnerUserId:e,purchaseAmount:u.state.purchaseAmount})}};re([d()],Q.prototype,"providers",void 0);Q=re([g("w3m-onramp-providers-view")],Q);const xe=R`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var z=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let S=class extends y{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=u.state.purchaseCurrencies,this.tokens=u.state.purchaseCurrencies,this.tokenImages=C.state.tokenImages,this.checked=Y.state.isLegalCheckboxChecked,this.unsubscribe.push(u.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),C.subscribeKey("tokenImages",e=>this.tokenImages=e),Y.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var a;const{termsConditionsUrl:e,privacyPolicyUrl:t}=D.state,i=(a=D.state.features)==null?void 0:a.legalCheckbox,n=!!(e||t)&&!!i&&!this.checked;return c`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","s","s"]}
        gap="xs"
        class=${h(n?"disabled":void 0)}
      >
        ${this.currenciesTemplate(n)}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(e=!1){return this.tokens.map(t=>{var i;return c`
        <wui-list-item
          imageSrc=${h((i=this.tokenImages)==null?void 0:i[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${h(e?-1:void 0)}
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${t.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(u.setPurchaseCurrency(e),_.close())}};S.styles=xe;z([d()],S.prototype,"selectedCurrency",void 0);z([d()],S.prototype,"tokens",void 0);z([d()],S.prototype,"tokenImages",void 0);z([d()],S.prototype,"checked",void 0);S=z([g("w3m-onramp-token-select-view")],S);const Ce=R`
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

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
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

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var b=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let f=class extends y{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=u.state.selectedProvider,this.uri=le.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(u.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var i,o;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(i=this.selectedOnRampProvider)==null?void 0:i.label}`);const t=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return c`
      <wui-flex
        data-error=${h(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${h((o=this.selectedOnRampProvider)==null?void 0:o.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

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
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=$.state.address;if(!e)throw new Error("No address found");(await K.fetchTransactions({account:e,onramp:"coinbase"})).data.filter(o=>new Date(o.metadata.minedAt)>new Date(this.startTime)||o.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),E.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){M.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,F.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?c`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=ue.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${t*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){M.showError("No link found"),E.goBack();return}try{F.copyToClopboard(this.selectedOnRampProvider.url),M.showSuccess("Link copied")}catch{M.showError("Failed to copy")}}};f.styles=Ce;b([d()],f.prototype,"intervalId",void 0);b([d()],f.prototype,"selectedOnRampProvider",void 0);b([d()],f.prototype,"uri",void 0);b([d()],f.prototype,"ready",void 0);b([d()],f.prototype,"showRetry",void 0);b([d()],f.prototype,"buffering",void 0);b([d()],f.prototype,"error",void 0);b([d()],f.prototype,"startTime",void 0);b([p({type:Boolean})],f.prototype,"isMobile",void 0);b([p()],f.prototype,"onRetry",void 0);f=b([g("w3m-buy-in-progress-view")],f);var Te=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let J=class extends y{render(){return c`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${E.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};J=Te([g("w3m-what-is-a-buy-view")],J);const Re=R`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-color-gray-glass-002);
    background: var(--wui-color-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var U=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let T=class extends y{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=C.state.currencyImages,this.tokenImages=C.state.tokenImages,this.unsubscribe.push(u.subscribeKey("purchaseCurrency",t=>{!t||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(t))}),u.subscribeKey("paymentCurrency",t=>{!t||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(t))}),u.subscribe(t=>{this.type==="Fiat"?this.currencies=t.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=t.paymentCurrencies.map(this.formatPaymentCurrency)}),C.subscribe(t=>{this.currencyImages={...t.currencyImages},this.tokenImages={...t.tokenImages}}))}firstUpdated(){u.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var i;const e=((i=this.selectedCurrency)==null?void 0:i.symbol)||"",t=this.currencyImages[e]||this.tokenImages[e];return c`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?c` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>_.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${h(t)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:c`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};T.styles=Re;U([p({type:String})],T.prototype,"type",void 0);U([p({type:Number})],T.prototype,"value",void 0);U([d()],T.prototype,"currencies",void 0);U([d()],T.prototype,"selectedCurrency",void 0);U([d()],T.prototype,"currencyImages",void 0);U([d()],T.prototype,"tokenImages",void 0);T=U([g("w3m-onramp-input")],T);const Ae=R`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var P=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(n=s[a])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};const Ie={USD:"$",EUR:"€",GBP:"£"},Pe=[100,250,500,1e3];let x=class extends y{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=A.state.activeCaipAddress,this.loading=_.state.loading,this.paymentCurrency=u.state.paymentCurrency,this.paymentAmount=u.state.paymentAmount,this.purchaseAmount=u.state.purchaseAmount,this.quoteLoading=u.state.quotesLoading,this.unsubscribe.push(A.subscribeKey("activeCaipAddress",e=>this.caipAddress=e),_.subscribeKey("loading",e=>{this.loading=e}),u.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return c`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${Pe.map(e=>{var t;return c`<wui-button
                  variant=${this.paymentAmount===e?"accent":"neutral"}
                  size="md"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${Ie[((t=this.paymentCurrency)==null?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?c`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="main"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:c`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||_.open({view:"OnRampProviders"})}openModal(){_.open({view:"Connect"})}async onPaymentAmountChange(e){u.setPaymentAmount(Number(e.detail)),await u.getQuote()}async selectPresetAmount(e){u.setPaymentAmount(e),await u.getQuote()}};x.styles=Ae;P([p({type:Boolean})],x.prototype,"disabled",void 0);P([d()],x.prototype,"caipAddress",void 0);P([d()],x.prototype,"loading",void 0);P([d()],x.prototype,"paymentCurrency",void 0);P([d()],x.prototype,"paymentAmount",void 0);P([d()],x.prototype,"purchaseAmount",void 0);P([d()],x.prototype,"quoteLoading",void 0);x=P([g("w3m-onramp-widget")],x);export{f as W3mBuyInProgressView,O as W3mOnRampActivityView,Q as W3mOnRampProvidersView,k as W3mOnrampFiatSelectView,S as W3mOnrampTokensView,x as W3mOnrampWidget,J as W3mWhatIsABuyView};
