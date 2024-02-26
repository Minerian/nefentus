var d=Object.defineProperty;var m=(s,e,t)=>e in s?d(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var o=(s,e,t)=>(m(s,typeof e!="symbol"?e+"":e,t),t);import{aF as g,aX as C,aY as w,aZ as b,a_ as f,a$ as y,b0 as W,b1 as T,b2 as A,b3 as R,b4 as E,b5 as k,b6 as S,b7 as v,b8 as O,b9 as F,ba as I,bb as N,bc as P,bd as i,be as B}from"./index-ceef141d.js";import{S as _}from"./erc-1155-standard-ab2417d3.browser.esm-560c6e45.js";import{P as x}from"./thirdweb-checkout-fbd7e98d.browser.esm-71bd5ce7.js";class H{constructor(e){this.events=e}async getAllClaimerAddresses(e){const t=(await this.events.getEvents("TokensClaimed")).filter(r=>r.data&&g.isBigNumber(r.data.tokenId)?r.data.tokenId.eq(e):!1);return Array.from(new Set(t.filter(r=>{var a;return typeof((a=r.data)==null?void 0:a.claimer)=="string"}).map(r=>r.data.claimer)))}}const p=class p extends _{constructor(t,r,a){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new w(t,r,c,n,a);super(u,a,l);o(this,"createBatch",i(async(t,r)=>this.erc1155.lazyMint.prepare(t,r)));o(this,"claimTo",i((()=>{var t=this;return async function(r,a,n){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return t.erc1155.claimTo.prepare(r,a,n,{checkERC20Allowance:c})}})()));o(this,"claim",i((()=>{var t=this;return async function(r,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const c=await t.contractWrapper.getSignerAddress();return t.claimTo.prepare(c,r,a,n)}})()));o(this,"burnTokens",i(async(t,r)=>this.erc1155.burn.prepare(t,r)));this.abi=b.parse(c),this.metadata=new f(this.contractWrapper,y,this.storage),this.app=new W(this.contractWrapper,this.metadata,this.storage),this.roles=new T(this.contractWrapper,p.contractRoles),this.royalties=new A(this.contractWrapper,this.metadata),this.sales=new R(this.contractWrapper),this.claimConditions=new E(this.contractWrapper,this.metadata,this.storage),this.events=new k(this.contractWrapper),this.history=new H(this.events),this.encoder=new S(this.contractWrapper),this.estimator=new v(this.contractWrapper),this.platformFees=new O(this.contractWrapper),this.interceptor=new F(this.contractWrapper),this.checkout=new x(this.contractWrapper),this.owner=new I(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t){return this.erc1155.getOwned(t)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(N("transfer"),P)}async getClaimTransaction(t,r,a){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;return this.erc1155.getClaimTransaction(t,r,a,{checkERC20Allowance:n})}async prepare(t,r,a){return B.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};o(p,"contractRoles",C);let h=p;export{h as EditionDrop};
