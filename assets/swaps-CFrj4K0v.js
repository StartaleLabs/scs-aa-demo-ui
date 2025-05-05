import{i as C,a as U,e as A,N as D,x as u,b as K,f as W,R as S,A as j,d as V,M,W as F,r as Q,m as q}from"./index-CZx0p4U_.js";import{r as a,n as g,c as E,U as m}from"./if-defined-CaD9N74k.js";import"./index-BstAP6f2.js";import{M as R}from"./index-rRLWo53Y.js";import"./index-DkOGDaIi.js";import{S as n}from"./index-Br2TKdzY.js";import"./index-jGS0STTz.js";import"./index-CcTupny1.js";import"./index-y5n3Dtgq.js";import"./index-LINZo7Ev.js";import"./index-DuSPffcV.js";import"./index-iYow9vZR.js";const G={numericInputKeyDown(c,t,e){const o=["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"],s=c.metaKey||c.ctrlKey,i=c.key,r=i.toLocaleLowerCase(),l=r==="a",x=r==="c",v=r==="v",N=r==="x",_=i===",",L=i===".",B=i>="0"&&i<="9";!s&&(l||x||v||N)&&c.preventDefault(),t==="0"&&!_&&!L&&i==="0"&&c.preventDefault(),t==="0"&&B&&(e(i),c.preventDefault()),(_||L)&&(t||(e("0."),c.preventDefault()),(t!=null&&t.includes(".")||t!=null&&t.includes(","))&&c.preventDefault()),!B&&!o.includes(i)&&!L&&!_&&c.preventDefault()}},H=C`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-color-gray-glass-002);
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }
`;var k=function(c,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,t,e,o);else for(var l=c.length-1;l>=0;l--)(r=c[l])&&(i=(s<3?r(i):s>3?r(t,e,i):r(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};const X=K.CONVERT_SLIPPAGE_TOLERANCE;let f=class extends U{constructor(){var t;super(),this.unsubscribe=[],this.networkName=(t=A.state.activeCaipNetwork)==null?void 0:t.name,this.detailsOpen=!1,this.sourceToken=n.state.sourceToken,this.toToken=n.state.toToken,this.toTokenAmount=n.state.toTokenAmount,this.sourceTokenPriceInUSD=n.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=n.state.toTokenPriceInUSD,this.priceImpact=n.state.priceImpact,this.maxSlippage=n.state.maxSlippage,this.networkTokenSymbol=n.state.networkTokenSymbol,this.inputError=n.state.inputError,this.unsubscribe.push(n.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.toTokenAmount=e.toTokenAmount,this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage,this.sourceTokenPriceInUSD=e.sourceTokenPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.inputError=e.inputError}))}render(){const t=this.toTokenAmount&&this.maxSlippage?D.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return u`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100">
                  1 ${this.sourceToken.symbol} =
                  ${m.formatNumberToLocalString(e,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="small-400" color="fg-200">
                  $${m.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?u`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  ${this.priceImpact?u` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${m.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?u`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="xs">
                            <wui-text class="details-row-title" variant="small-400" color="fg-150">
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${t?`Transaction will be reversed if you receive less than ${m.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="xs" color="fg-250" name="infoCircle"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${m.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${X}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="xs">
                        <wui-text class="details-row-title" variant="small-400" color="fg-150">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="small-400" color="fg-200">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};f.styles=[H];k([a()],f.prototype,"networkName",void 0);k([g()],f.prototype,"detailsOpen",void 0);k([a()],f.prototype,"sourceToken",void 0);k([a()],f.prototype,"toToken",void 0);k([a()],f.prototype,"toTokenAmount",void 0);k([a()],f.prototype,"sourceTokenPriceInUSD",void 0);k([a()],f.prototype,"toTokenPriceInUSD",void 0);k([a()],f.prototype,"priceImpact",void 0);k([a()],f.prototype,"maxSlippage",void 0);k([a()],f.prototype,"networkTokenSymbol",void 0);k([a()],f.prototype,"inputError",void 0);f=k([E("w3m-swap-details")],f);const Y=C`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    background-color: var(--wui-color-gray-glass-002);
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-color-gray-glass-020);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-color-gray-glass-002);
  }
`;var z=function(c,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,t,e,o);else for(var l=c.length-1;l>=0;l--)(r=c[l])&&(i=(s<3?r(i):s>3?r(t,e,i):r(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let O=class extends U{constructor(){super(...arguments),this.target="sourceToken"}render(){return u`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="xxs"
        >
          <wui-shimmer width="80px" height="40px" borderRadius="xxs" variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return u`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-shimmer width="80px" height="40px" borderRadius="3xl" variant="light"></wui-shimmer>
      </wui-flex>
    `}};O.styles=[Y];z([g()],O.prototype,"target",void 0);O=z([E("w3m-swap-input-skeleton")],O);const Z=C`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-color-gray-glass-002);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-002);
    position: relative;
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px var(--wui-color-gray-glass-005);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-color-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var y=function(c,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,t,e,o);else for(var l=c.length-1;l>=0;l--)(r=c[l])&&(i=(s<3?r(i):s>3?r(t,e,i):r(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};const J=5e-5;let b=class extends U{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const t=this.marketValue||"0",e=D.bigNumber(t).gt("0");return u`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${e?`$${m.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return G.numericInputKeyDown(t,this.value,e=>{var o;return(o=this.onSetAmount)==null?void 0:o.call(this,this.target,e)})}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;const e=t.target.value.replace(/[^0-9.]/gu,"");e===","||e==="."?this.onSetAmount(this.target,"0."):e.endsWith(",")?this.onSetAmount(this.target,e.replace(",",".")):this.onSetAmount(this.target,e)}setMaxValueToInput(){var t;(t=this.onSetMaxValue)==null||t.call(this,this.target,this.balance)}templateTokenSelectButton(){return this.token?u`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:u` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="accent"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const t=D.multiply(this.balance,this.price),e=t?t==null?void 0:t.gt(J):!1;return u`
      ${e?u`<wui-text variant="small-400" color="fg-200">
            ${m.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(e):null}
    `}tokenActionButtonTemplate(t){return t?u` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:u` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){W.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),S.push("SwapSelectToken",{target:this.target})}onBuyToken(){S.push("OnRampProviders")}};b.styles=[Z];y([g()],b.prototype,"focused",void 0);y([g()],b.prototype,"balance",void 0);y([g()],b.prototype,"value",void 0);y([g()],b.prototype,"price",void 0);y([g()],b.prototype,"marketValue",void 0);y([g()],b.prototype,"disabled",void 0);y([g()],b.prototype,"target",void 0);y([g()],b.prototype,"token",void 0);y([g()],b.prototype,"onSetAmount",void 0);y([g()],b.prototype,"onSetMaxValue",void 0);b=y([E("w3m-swap-input")],b);const tt=C`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-color-gray-glass-005);
  }

  .swap-inputs-container {
    position: relative;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-color-modal-bg-base);
    padding: var(--wui-spacing-xxs);
  }

  .replace-tokens-button-container > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button-container > button:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var h=function(c,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,t,e,o);else for(var l=c.length-1;l>=0;l--)(r=c[l])&&(i=(s<3?r(i):s>3?r(t,e,i):r(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let p=class extends U{constructor(){var t,e;super(),this.unsubscribe=[],this.initialParams=(t=S.state.data)==null?void 0:t.swap,this.detailsOpen=!1,this.caipAddress=j.state.caipAddress,this.caipNetworkId=(e=A.state.activeCaipNetwork)==null?void 0:e.caipNetworkId,this.initialized=n.state.initialized,this.loadingQuote=n.state.loadingQuote,this.loadingPrices=n.state.loadingPrices,this.loadingTransaction=n.state.loadingTransaction,this.sourceToken=n.state.sourceToken,this.sourceTokenAmount=n.state.sourceTokenAmount,this.sourceTokenPriceInUSD=n.state.sourceTokenPriceInUSD,this.toToken=n.state.toToken,this.toTokenAmount=n.state.toTokenAmount,this.toTokenPriceInUSD=n.state.toTokenPriceInUSD,this.inputError=n.state.inputError,this.gasPriceInUSD=n.state.gasPriceInUSD,this.fetchError=n.state.fetchError,this.onDebouncedGetSwapCalldata=V.debounce(async()=>{await n.swapTokens()},200),A.subscribeKey("activeCaipNetwork",o=>this.onCaipNetworkChange({newCaipNetwork:o,resetSwapState:!0,initializeSwapState:!1})),j.subscribeKey("caipAddress",o=>this.onCaipAddressChange({newCaipAddress:o,resetSwapState:!0,initializeSwapState:!1})),this.unsubscribe.push(A.subscribeKey("activeCaipNetwork",o=>this.onCaipNetworkChange({newCaipNetwork:o,resetSwapState:!1,initializeSwapState:!0})),j.subscribeKey("caipAddress",o=>this.onCaipAddressChange({newCaipAddress:o,resetSwapState:!1,initializeSwapState:!0})),M.subscribeKey("open",o=>{o||n.resetState()}),S.subscribeKey("view",o=>{o.includes("Swap")||n.resetValues()}),n.subscribe(o=>{this.initialized=o.initialized,this.loadingQuote=o.loadingQuote,this.loadingPrices=o.loadingPrices,this.loadingTransaction=o.loadingTransaction,this.sourceToken=o.sourceToken,this.sourceTokenAmount=o.sourceTokenAmount,this.sourceTokenPriceInUSD=o.sourceTokenPriceInUSD,this.toToken=o.toToken,this.toTokenAmount=o.toTokenAmount,this.toTokenPriceInUSD=o.toTokenPriceInUSD,this.inputError=o.inputError,this.gasPriceInUSD=o.gasPriceInUSD,this.fetchError=o.fetchError}))}async firstUpdated(){n.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach(t=>t==null?void 0:t()),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{n.getNetworkTokenPrice(),n.getMyTokensWithBalance(),n.swapTokens()},1e4)}templateSwap(){return u`
      <wui-flex flexDirection="column" gap="s">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":this.sourceTokenAmount?this.inputError?this.inputError:"Review swap":"Enter amount"}templateReplaceTokensButton(){return u`
      <wui-flex class="replace-tokens-button-container">
        <button @click=${this.onSwitchTokens.bind(this)}>
          <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
        </button>
      </wui-flex>
    `}templateLoading(){return u`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex flexDirection="column" alignItems="center" gap="xs" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,e){var l,x;const o=(l=n.state.myTokensWithBalance)==null?void 0:l.find(v=>(v==null?void 0:v.address)===(e==null?void 0:e.address)),s=t==="toToken"?this.toTokenAmount:this.sourceTokenAmount,i=t==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,r=D.parseLocalStringToNumber(s)*i;return u`<w3m-swap-input
      .value=${t==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${t==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${e}
      .balance=${(x=o==null?void 0:o.quantity)==null?void 0:x.numeric}
      .price=${o==null?void 0:o.price}
      .marketValue=${r}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(t,e){const o=t==="sourceToken"?this.sourceToken:this.toToken,s=(o==null?void 0:o.address)===A.getActiveNetworkTokenAddress();let i="0";if(!e){i="0",this.handleChangeAmount(t,i);return}if(!this.gasPriceInUSD){i=e,this.handleChangeAmount(t,i);return}const r=D.bigNumber(this.gasPriceInUSD.toFixed(5)).div(this.sourceTokenPriceInUSD),l=s?D.bigNumber(e).minus(r):D.bigNumber(e);this.handleChangeAmount(t,l.gt(0)?l.toFixed(20):"0")}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:u`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(t,e){n.clearError(),t==="sourceToken"?n.setSourceTokenAmount(e):n.setToTokenAmount(e),this.onDebouncedGetSwapCalldata()}templateActionButton(){const t=!this.toToken||!this.sourceToken,e=!this.sourceTokenAmount,o=this.loadingQuote||this.loadingPrices||this.loadingTransaction,s=o||t||e||this.inputError;return u` <wui-flex gap="xs">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant=${t?"neutral":"main"}
        .loading=${o}
        .disabled=${s}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){n.switchTokens()}async onSwapPreview(){var e,o,s;const t=A.state.activeChain;this.fetchError&&await n.swapTokens(),W.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:((e=this.sourceToken)==null?void 0:e.symbol)||"",swapToToken:((o=this.toToken)==null?void 0:o.symbol)||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:((s=j.state.preferredAccountTypes)==null?void 0:s[t])===F.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.push("SwapPreview")}async handleSwapParameters(){this.initialParams&&(n.state.initialized||await new Promise(e=>{const o=n.subscribeKey("initialized",s=>{s&&(o==null||o(),e())})}),await this.setSwapParameters(this.initialParams))}async setSwapParameters({amount:t,fromToken:e,toToken:o}){(!n.state.tokens||!n.state.myTokensWithBalance)&&await new Promise(r=>{const l=n.subscribeKey("myTokensWithBalance",x=>{x&&x.length>0&&(l==null||l(),r())});setTimeout(()=>{l==null||l(),r()},5e3)});const s=[...n.state.tokens||[],...n.state.myTokensWithBalance||[]];if(e){const i=s.find(r=>r.symbol.toLowerCase()===e.toLowerCase());i&&n.setSourceToken(i)}if(o){const i=s.find(r=>r.symbol.toLowerCase()===o.toLowerCase());i&&n.setToToken(i)}t&&!isNaN(Number(t))&&n.setSourceTokenAmount(t)}onCaipAddressChange({newCaipAddress:t,resetSwapState:e,initializeSwapState:o}){this.caipAddress!==t&&(this.caipAddress=t,e&&n.resetState(),o&&n.initializeState())}onCaipNetworkChange({newCaipNetwork:t,resetSwapState:e,initializeSwapState:o}){this.caipNetworkId!==(t==null?void 0:t.caipNetworkId)&&(this.caipNetworkId=t==null?void 0:t.caipNetworkId,e&&n.resetState(),o&&n.initializeState())}};p.styles=tt;h([g({type:Object})],p.prototype,"initialParams",void 0);h([a()],p.prototype,"interval",void 0);h([a()],p.prototype,"detailsOpen",void 0);h([a()],p.prototype,"caipAddress",void 0);h([a()],p.prototype,"caipNetworkId",void 0);h([a()],p.prototype,"initialized",void 0);h([a()],p.prototype,"loadingQuote",void 0);h([a()],p.prototype,"loadingPrices",void 0);h([a()],p.prototype,"loadingTransaction",void 0);h([a()],p.prototype,"sourceToken",void 0);h([a()],p.prototype,"sourceTokenAmount",void 0);h([a()],p.prototype,"sourceTokenPriceInUSD",void 0);h([a()],p.prototype,"toToken",void 0);h([a()],p.prototype,"toTokenAmount",void 0);h([a()],p.prototype,"toTokenPriceInUSD",void 0);h([a()],p.prototype,"inputError",void 0);h([a()],p.prototype,"gasPriceInUSD",void 0);h([a()],p.prototype,"fetchError",void 0);p=h([E("w3m-swap-view")],p);const et=C`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-color-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-color-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-color-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-color-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-color-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-color-gray-glass-002);
  }
`;var w=function(c,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,t,e,o);else for(var l=c.length-1;l>=0;l--)(r=c[l])&&(i=(s<3?r(i):s>3?r(t,e,i):r(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let d=class extends U{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=n.state.approvalTransaction,this.swapTransaction=n.state.swapTransaction,this.sourceToken=n.state.sourceToken,this.sourceTokenAmount=n.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=n.state.sourceTokenPriceInUSD,this.toToken=n.state.toToken,this.toTokenAmount=n.state.toTokenAmount??"",this.toTokenPriceInUSD=n.state.toTokenPriceInUSD,this.caipNetwork=A.state.activeCaipNetwork,this.balanceSymbol=j.state.balanceSymbol,this.gasPriceInUSD=n.state.gasPriceInUSD,this.inputError=n.state.inputError,this.loadingQuote=n.state.loadingQuote,this.loadingApprovalTransaction=n.state.loadingApprovalTransaction,this.loadingBuildTransaction=n.state.loadingBuildTransaction,this.loadingTransaction=n.state.loadingTransaction,this.unsubscribe.push(j.subscribeKey("balanceSymbol",t=>{this.balanceSymbol!==t&&S.goBack()}),A.subscribeKey("activeCaipNetwork",t=>{this.caipNetwork!==t&&(this.caipNetwork=t)}),n.subscribe(t=>{this.approvalTransaction=t.approvalTransaction,this.swapTransaction=t.swapTransaction,this.sourceToken=t.sourceToken,this.gasPriceInUSD=t.gasPriceInUSD,this.toToken=t.toToken,this.gasPriceInUSD=t.gasPriceInUSD,this.toTokenPriceInUSD=t.toTokenPriceInUSD,this.sourceTokenAmount=t.sourceTokenAmount??"",this.toTokenAmount=t.toTokenAmount??"",this.inputError=t.inputError,t.inputError&&S.goBack(),this.loadingQuote=t.loadingQuote,this.loadingApprovalTransaction=t.loadingApprovalTransaction,this.loadingBuildTransaction=t.loadingBuildTransaction,this.loadingTransaction=t.loadingTransaction}))}firstUpdated(){n.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(t=>t==null?void 0:t()),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","l","l","l"]} gap="s">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{n.getApprovalLoadingState()||n.getTransaction()},1e4)}templateSwap(){var x,v,N,_;const t=`${m.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(x=this.sourceToken)==null?void 0:x.symbol}`,e=`${m.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(v=this.toToken)==null?void 0:v.symbol}`,o=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,s=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),i=m.formatNumberToLocalString(o),r=m.formatNumberToLocalString(s),l=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return u`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${i}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${(N=this.sourceToken)==null?void 0:N.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${r}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${(_=this.toToken)==null?void 0:_.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="main"
            ?loading=${l}
            ?disabled=${l}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="inverse-100">
              ${this.actionButtonLabel()}
            </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:u`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){S.goBack()}onSendTransaction(){this.approvalTransaction?n.sendTransactionForApproval(this.approvalTransaction):n.sendTransactionForSwap(this.swapTransaction)}};d.styles=et;w([a()],d.prototype,"interval",void 0);w([a()],d.prototype,"detailsOpen",void 0);w([a()],d.prototype,"approvalTransaction",void 0);w([a()],d.prototype,"swapTransaction",void 0);w([a()],d.prototype,"sourceToken",void 0);w([a()],d.prototype,"sourceTokenAmount",void 0);w([a()],d.prototype,"sourceTokenPriceInUSD",void 0);w([a()],d.prototype,"toToken",void 0);w([a()],d.prototype,"toTokenAmount",void 0);w([a()],d.prototype,"toTokenPriceInUSD",void 0);w([a()],d.prototype,"caipNetwork",void 0);w([a()],d.prototype,"balanceSymbol",void 0);w([a()],d.prototype,"gasPriceInUSD",void 0);w([a()],d.prototype,"inputError",void 0);w([a()],d.prototype,"loadingQuote",void 0);w([a()],d.prototype,"loadingApprovalTransaction",void 0);w([a()],d.prototype,"loadingBuildTransaction",void 0);w([a()],d.prototype,"loadingTransaction",void 0);d=w([E("w3m-swap-preview-view")],d);const ot=C`
  :host {
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      background-color var(--wui-ease-out-power-1) var(--wui-duration-lg),
      opacity var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: var(--wui-color-gray-glass-002);
    }

    :host > wui-flex:active {
      background-color: var(--wui-color-gray-glass-005);
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var P=function(c,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,t,e,o);else for(var l=c.length-1;l>=0;l--)(r=c[l])&&(i=(s<3?r(i):s>3?r(t,e,i):r(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let $=class extends U{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e;if(!this.visible)return null;const t=this.amount&&this.price?(e=D.multiply(this.price,this.amount))==null?void 0:e.toFixed(3):null;return u`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100" lineClamp="1">${this.name}</wui-text>
            ${t?u`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${m.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?u`<wui-text variant="small-400" color="fg-200">
                  ${m.formatNumberToLocalString(this.amount,4)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?u`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?u`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};$.styles=[Q,q,ot];P([g()],$.prototype,"imageSrc",void 0);P([g()],$.prototype,"name",void 0);P([g()],$.prototype,"symbol",void 0);P([g()],$.prototype,"price",void 0);P([g()],$.prototype,"amount",void 0);P([a()],$.prototype,"visible",void 0);P([a()],$.prototype,"imageError",void 0);$=P([E("wui-token-list-item")],$);const it=C`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-color-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-color-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-010);
  }
`;var I=function(c,t,e,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(c,t,e,o);else for(var l=c.length-1;l>=0;l--)(r=c[l])&&(i=(s<3?r(i):s>3?r(t,e,i):r(t,e))||i);return s>3&&i&&Object.defineProperty(t,e,i),i};let T=class extends U{constructor(){var t;super(),this.unsubscribe=[],this.targetToken=(t=S.state.data)==null?void 0:t.target,this.sourceToken=n.state.sourceToken,this.sourceTokenAmount=n.state.sourceTokenAmount,this.toToken=n.state.toToken,this.myTokensWithBalance=n.state.myTokensWithBalance,this.popularTokens=n.state.popularTokens,this.searchValue="",this.unsubscribe.push(n.subscribe(e=>{this.sourceToken=e.sourceToken,this.toToken=e.toToken,this.myTokensWithBalance=e.myTokensWithBalance}))}updated(){var o,s;const t=(o=this.renderRoot)==null?void 0:o.querySelector(".suggested-tokens-container");t==null||t.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const e=(s=this.renderRoot)==null?void 0:s.querySelector(".tokens");e==null||e.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var o,s;super.disconnectedCallback();const t=(o=this.renderRoot)==null?void 0:o.querySelector(".suggested-tokens-container"),e=(s=this.renderRoot)==null?void 0:s.querySelector(".tokens");t==null||t.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),e==null||e.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){this.targetToken==="sourceToken"?n.setSourceToken(t):(n.setToToken(t),this.sourceToken&&this.sourceTokenAmount&&n.swapTokens()),S.goBack()}templateSearchInput(){return u`
      <wui-flex .padding=${["3xs","s","0","s"]} gap="xs">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],e=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(t,this.searchValue),s=this.filterTokensWithText(e,this.searchValue);return u`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","s","s","s"]} flexDirection="column">
          ${(o==null?void 0:o.length)>0?u`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${o.map(i=>{var l,x,v;const r=i.symbol===((l=this.sourceToken)==null?void 0:l.symbol)||i.symbol===((x=this.toToken)==null?void 0:x.symbol);return u`
                    <wui-token-list-item
                      data-testid="swap-select-token-item-${i.symbol}"
                      name=${i.name}
                      ?disabled=${r}
                      symbol=${i.symbol}
                      price=${i==null?void 0:i.price}
                      amount=${(v=i==null?void 0:i.quantity)==null?void 0:v.numeric}
                      imageSrc=${i.logoUri}
                      @click=${()=>{r||this.onSelectToken(i)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Tokens</wui-text>
          </wui-flex>
          ${(s==null?void 0:s.length)>0?s.map(i=>u`
                  <wui-token-list-item
                    data-testid="swap-select-token-item-${i.symbol}"
                    name=${i.name}
                    symbol=${i.symbol}
                    imageSrc=${i.logoUri}
                    @click=${()=>this.onSelectToken(i)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const t=n.state.suggestedTokens?n.state.suggestedTokens.slice(0,8):null;return t?u`
      <wui-flex class="suggested-tokens-container" .padding=${["0","s","0","s"]} gap="xs">
        ${t.map(e=>u`
            <wui-token-button
              text=${e.symbol}
              imageSrc=${e.logoUri}
              @click=${()=>this.onSelectToken(e)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){var e;const t=(e=this.renderRoot)==null?void 0:e.querySelector(".suggested-tokens-container");t&&(t.style.setProperty("--suggested-tokens-scroll--left-opacity",R.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty("--suggested-tokens-scroll--right-opacity",R.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){var e;const t=(e=this.renderRoot)==null?void 0:e.querySelector(".tokens");t&&(t.style.setProperty("--tokens-scroll--top-opacity",R.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty("--tokens-scroll--bottom-opacity",R.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(t,e){return t.filter(o=>`${o.symbol} ${o.name} ${o.address}`.toLowerCase().includes(e.toLowerCase()))}};T.styles=it;I([a()],T.prototype,"interval",void 0);I([a()],T.prototype,"targetToken",void 0);I([a()],T.prototype,"sourceToken",void 0);I([a()],T.prototype,"sourceTokenAmount",void 0);I([a()],T.prototype,"toToken",void 0);I([a()],T.prototype,"myTokensWithBalance",void 0);I([a()],T.prototype,"popularTokens",void 0);I([a()],T.prototype,"searchValue",void 0);T=I([E("w3m-swap-select-token-view")],T);export{d as W3mSwapPreviewView,T as W3mSwapSelectTokenView,p as W3mSwapView};
