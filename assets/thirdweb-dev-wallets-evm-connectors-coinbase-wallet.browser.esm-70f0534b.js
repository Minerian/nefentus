import{aR as I,aJ as c,aQ as P,aI as w,aK as l,ax as m,aM as o,aT as E,aL as v,aN as _,aS as C}from"./index-ceef141d.js";import{W as U,U as u,a as b,A,S}from"./errors-d961f852.browser.esm-6960934e.js";import{n as f}from"./normalizeChainId-e4cc0175.browser.esm-196d9c80.js";var h=new WeakMap,d=new WeakMap,p=new WeakSet;class D extends U{constructor(t){let{chains:e,options:s}=t;super({chains:e,options:{reloadOnDisconnect:!1,...s}}),I(this,p),c(this,"id",P.coinbase),c(this,"name","Coinbase Wallet"),c(this,"ready",!0),w(this,h,{writable:!0,value:void 0}),w(this,d,{writable:!0,value:void 0}),c(this,"onAccountsChanged",i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:l(i[0])})}),c(this,"onChainChanged",i=>{const n=f(i),a=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:a}})}),c(this,"onDisconnect",()=>{this.emit("disconnect")})}async connect(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();this.setupListeners(),this.emit("message",{type:"connecting"});const s=await e.enable(),i=l(s[0]);let n=await this.getChainId(),a=this.isChainUnsupported(n);if(t&&n!==t)try{n=(await this.switchChain(t)).chainId,a=this.isChainUnsupported(n)}catch(r){console.error(`Connected but failed to switch to desired chain ${t}`,r)}return{account:i,chain:{id:n,unsupported:a},provider:new m(e)}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new u(e):e}}async disconnect(){if(!o(this,d))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});if(e.length===0)throw new Error("No accounts found");return l(e[0])}async getChainId(){const t=await this.getProvider();return f(t.chainId)}async getProvider(){var t;if(!o(this,d)){let e=(await E(()=>import("./index-5019966f.js").then(r=>r.i),["assets/index-5019966f.js","assets/index-ceef141d.js","assets/index-db7a3c62.css","assets/events-66b27c5c.js"])).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),v(this,h,new e(this.options));const s=(t=o(this,h).walletExtension)==null?void 0:t.getChainId(),i=this.chains.find(r=>this.options.chainId?r.chainId===this.options.chainId:r.chainId===s)||this.chains[0],n=this.options.chainId||(i==null?void 0:i.chainId),a=this.options.jsonRpcUrl||(i==null?void 0:i.rpc[0]);v(this,d,o(this,h).makeWeb3Provider(a,n))}return o(this,d)}async getSigner(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[e,s]=await Promise.all([this.getProvider(),this.getAccount()]);return new m(e,t).getSigner(s)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){const e=await this.getProvider(),s=_(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:s}]}),this.chains.find(i=>i.chainId===t)??{chainId:t,name:`Chain ${s}`,slug:`${s}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],testnet:!1,chain:"ethereum",shortName:"eth"}}catch(i){const n=this.chains.find(a=>a.chainId===t);if(!n)throw new b({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:s,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:n.rpc,blockExplorerUrls:this.getBlockExplorerUrls(n)}]}),n}catch(a){throw C(this,p,y).call(this,a)?new u(a):new A}throw C(this,p,y).call(this,i)?new u(i):new S(i)}}async setupListeners(){const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)}async getQrUrl(){if(await this.getProvider(),!o(this,h))throw new Error("Coinbase Wallet SDK not initialized");return o(this,h).getQrUrl()}}function y(g){return/(user rejected)/i.test(g.message)}export{D as CoinbaseWalletConnector};
