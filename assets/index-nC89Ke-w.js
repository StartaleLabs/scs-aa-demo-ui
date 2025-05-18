import{i as N,a as k,x as a,r as L,e as v,Q as p,d as O,R as Y,O as V,f as z,A as E,W}from"./index-CKWNxG2P.js";import{n as l,c as _,o as j,r as b}from"./if-defined-NkAM0qLc.js";import{T as A,D as F}from"./index-CRmMs9OH.js";import"./index-DThi4pGL.js";import"./index-GDxIiTf8.js";import"./index-CTNwIV8R.js";var R;(function(s){s.approve="approved",s.bought="bought",s.borrow="borrowed",s.burn="burnt",s.cancel="canceled",s.claim="claimed",s.deploy="deployed",s.deposit="deposited",s.execute="executed",s.mint="minted",s.receive="received",s.repay="repaid",s.send="sent",s.sell="sold",s.stake="staked",s.trade="swapped",s.unstake="unstaked",s.withdraw="withdrawn"})(R||(R={}));const U=N`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
    background-color: var(--wui-color-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var m=function(s,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,t,e,r);else for(var c=s.length-1;c>=0;c--)(n=s[c])&&(i=(o<3?n(i):o>3?n(t,e,i):n(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i};let f=class extends k{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[t,e]=this.images,r=(t==null?void 0:t.type)==="NFT",o=e!=null&&e.url?e.type==="NFT":r,i=r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",n=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${i};
    --local-right-border-radius: ${n};
    `,a`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,e]=this.images,r=t==null?void 0:t.type;return this.images.length===2&&(t!=null&&t.url||e!=null&&e.url)?a`<div class="swap-images-container">
        ${t!=null&&t.url?a`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
        ${e!=null&&e.url?a`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
      </div>`:t!=null&&t.url?a`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:r==="NFT"?a`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:a`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let t="accent-100",e;return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?a`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};f.styles=[U];m([l()],f.prototype,"type",void 0);m([l()],f.prototype,"status",void 0);m([l()],f.prototype,"direction",void 0);m([l({type:Boolean})],f.prototype,"onlyDirectionIcon",void 0);m([l({type:Array})],f.prototype,"images",void 0);m([l({type:Object})],f.prototype,"secondImage",void 0);f=m([_("wui-transaction-visual")],f);const G=N`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var w=function(s,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,t,e,r);else for(var c=s.length-1;c>=0;c--)(n=s[c])&&(i=(o<3?n(i):o>3?n(t,e,i):n(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i};let d=class extends k{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return a`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${j(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${j(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${R[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var e;const t=(e=this.descriptions)==null?void 0:e[0];return t?a`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var e;const t=(e=this.descriptions)==null?void 0:e[1];return t?a`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};d.styles=[L,G];w([l()],d.prototype,"type",void 0);w([l({type:Array})],d.prototype,"descriptions",void 0);w([l()],d.prototype,"date",void 0);w([l({type:Boolean})],d.prototype,"onlyDirectionIcon",void 0);w([l()],d.prototype,"status",void 0);w([l()],d.prototype,"direction",void 0);w([l({type:Array})],d.prototype,"images",void 0);w([l({type:Array})],d.prototype,"price",void 0);w([l({type:Array})],d.prototype,"amount",void 0);w([l({type:Array})],d.prototype,"symbol",void 0);d=w([_("wui-transaction-list-item")],d);const M=N`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: var(--wui-spacing-m);
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var x=function(s,t,e,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,e):r,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(s,t,e,r);else for(var c=s.length-1;c>=0;c--)(n=s[c])&&(i=(o<3?n(i):o>3?n(t,e,i):n(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i};const D="last-transaction",K=7;let g=class extends k{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=v.state.activeCaipAddress,this.transactionsByYear=p.state.transactionsByYear,this.loading=p.state.loading,this.empty=p.state.empty,this.next=p.state.next,p.clearCursor(),this.unsubscribe.push(v.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(p.resetTransactions(),p.fetchTransactions(t)),this.caipAddress=t}),v.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),p.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return a` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){var r;const t=(r=v.state.activeCaipNetwork)==null?void 0:r.caipNetworkId;p.state.lastNetworkInView!==t&&(p.resetTransactions(),this.caipAddress&&p.fetchTransactions(O.getPlainAddress(this.caipAddress))),p.setLastNetworkInView(t)}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(e=>{const r=parseInt(e,10),o=new Array(12).fill(null).map((i,n)=>{var u;const c=A.getTransactionGroupTitle(r,n),h=(u=this.transactionsByYear[r])==null?void 0:u[n];return{groupTitle:c,transactions:h}}).filter(({transactions:i})=>i).reverse();return o.map(({groupTitle:i,transactions:n},c)=>{const h=c===o.length-1;return n?a`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${h?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200" data-testid="group-title"
                >${i}</wui-text
              >
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(n,h)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,e){const{date:r,descriptions:o,direction:i,isAllNFT:n,images:c,status:h,transfers:u,type:y}=this.getTransactionListItemProps(t),$=(u==null?void 0:u.length)>1;return(u==null?void 0:u.length)===2&&!n?a`
        <wui-transaction-list-item
          date=${r}
          .direction=${i}
          id=${e&&this.next?D:""}
          status=${h}
          type=${y}
          .images=${c}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:$?u.map((C,S)=>{const B=A.getTransferDescription(C),T=e&&S===u.length-1;return a` <wui-transaction-list-item
          date=${r}
          direction=${C.direction}
          id=${T&&this.next?D:""}
          status=${h}
          type=${y}
          .onlyDirectionIcon=${!0}
          .images=${[c[S]]}
          .descriptions=${[B]}
        ></wui-transaction-list-item>`}):a`
      <wui-transaction-list-item
        date=${r}
        .direction=${i}
        id=${e&&this.next?D:""}
        status=${h}
        type=${y}
        .images=${c}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(t,e){return t.map((r,o)=>{const i=e&&o===t.length-1;return a`${this.templateRenderTransaction(r,i)}`})}emptyStateActivity(){return a`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
      data-testid="empty-activity-state"
    >
      <wui-icon-box
        backgroundColor="gray-glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return a`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
      data-testid="empty-account-state"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?a`${this.emptyStateAccount()}`:a`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(K).fill(a` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t):null}onReceiveClick(){Y.push("WalletReceive")}createPaginationObserver(){const t=v.state.activeChain,{projectId:e}=V.state;this.paginationObserver=new IntersectionObserver(([r])=>{var o;r!=null&&r.isIntersecting&&!this.loading&&(p.fetchTransactions(O.getPlainAddress(this.caipAddress)),z.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:O.getPlainAddress(this.caipAddress),projectId:e,cursor:this.next,isSmartAccount:((o=E.state.preferredAccountTypes)==null?void 0:o[t])===W.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var e,r,o;(e=this.paginationObserver)==null||e.disconnect();const t=(r=this.shadowRoot)==null?void 0:r.querySelector(`#${D}`);t&&((o=this.paginationObserver)==null||o.observe(t))}getTransactionListItemProps(t){var h,u,y,$,I;const e=F.formatDate((h=t==null?void 0:t.metadata)==null?void 0:h.minedAt),r=A.getTransactionDescriptions(t),o=t==null?void 0:t.transfers,i=(u=t==null?void 0:t.transfers)==null?void 0:u[0],n=!!i&&((y=t==null?void 0:t.transfers)==null?void 0:y.every(C=>!!C.nft_info)),c=A.getTransactionImages(o);return{date:e,direction:i==null?void 0:i.direction,descriptions:r,isAllNFT:n,images:c,status:($=t.metadata)==null?void 0:$.status,transfers:o,type:(I=t.metadata)==null?void 0:I.operationType}}};g.styles=M;x([l()],g.prototype,"page",void 0);x([b()],g.prototype,"caipAddress",void 0);x([b()],g.prototype,"transactionsByYear",void 0);x([b()],g.prototype,"loading",void 0);x([b()],g.prototype,"empty",void 0);x([b()],g.prototype,"next",void 0);g=x([_("w3m-activity-list")],g);
