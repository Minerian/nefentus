var C=Object.defineProperty;var g=(i,e,t)=>e in i?C(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var c=(i,e,t)=>(g(i,typeof e!="symbol"?e+"":e,t),t);import{aX as w,aY as W,aZ as f,a_ as T,b$ as y,b0 as S,b1 as A,b2 as E,b3 as N,b6 as R,b7 as U,b5 as k,b8 as M,b9 as F,c0 as I,b_ as d,c1 as _,c2 as x,ba as L,aF as o,bK as m,bb as v,bc as O,bd as p,be as B}from"./index-ceef141d.js";import{S as D}from"./erc-721-standard-961fbe42.browser.esm-3684ebad.js";import{P as Q}from"./thirdweb-checkout-fbd7e98d.browser.esm-71bd5ce7.js";const h=class h extends D{constructor(t,a,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,b=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,a,s,n,r);super(b,r,l);c(this,"createBatch",p(async(t,a)=>this.erc721.lazyMint.prepare(t,a)));c(this,"claimTo",p(async(t,a,r)=>this.erc721.claimTo.prepare(t,a,r)));c(this,"claim",p(async(t,a)=>this.erc721.claim.prepare(t,a)));c(this,"burn",p(async t=>this.erc721.burn.prepare(t)));this.abi=f.parse(s||[]),this.metadata=new T(this.contractWrapper,y,this.storage),this.app=new S(this.contractWrapper,this.metadata,this.storage),this.roles=new A(this.contractWrapper,h.contractRoles),this.royalties=new E(this.contractWrapper,this.metadata),this.sales=new N(this.contractWrapper),this.encoder=new R(this.contractWrapper),this.estimator=new U(this.contractWrapper),this.events=new k(this.contractWrapper),this.platformFees=new M(this.contractWrapper),this.interceptor=new F(this.contractWrapper),this.claimConditions=new I(this.contractWrapper,this.metadata,this.storage),this.signature=new d(this.contractWrapper,this.storage),this.revealer=new _(this.contractWrapper,this.storage,x.name,()=>this.erc721.nextTokenIdToMint()),this.signature=new d(this.contractWrapper,this.storage),this.owner=new L(this.contractWrapper),this.checkout=new Q(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),a=await this.totalUnclaimedSupply();return t.add(a)}async getAllClaimed(t){const a=o.from((t==null?void 0:t.start)||0).toNumber(),r=o.from((t==null?void 0:t.count)||m).toNumber(),n=Math.min((await this.totalClaimedSupply()).toNumber(),a+r);return await Promise.all(Array.from(Array(n).keys()).map(s=>this.get(s.toString())))}async getAllUnclaimed(t){const a=o.from((t==null?void 0:t.start)||0).toNumber(),r=o.from((t==null?void 0:t.count)||m).toNumber(),n=o.from(Math.max((await this.totalClaimedSupply()).toNumber(),a)),s=o.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),n.toNumber()+r));return await Promise.all(Array.from(Array(s.sub(n).toNumber()).keys()).map(l=>this.erc721.getTokenMetadata(n.add(l).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(v("transfer"),O)}async getClaimTransaction(t,a,r){return this.erc721.getClaimTransaction(t,a,r)}async prepare(t,a,r){return B.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}};c(h,"contractRoles",w);let u=h;export{u as SignatureDrop};
