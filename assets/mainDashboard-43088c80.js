import{r as d,u as $,a as D,b as F,m as I,c as O,d as R,e as v,f as B,j as e,C as U,B as k,g as V,h as _,M as W,P as E,i as T,k as M,l as q,O as z,I as N,n as G,T as H}from"./index-c9329193.js";import{s as r,P as J,B as K,I as Q}from"./profileCard-980ae98c.js";import{u as X}from"./topInfo.module-8a8de9a7.js";import{u as Y,T as A}from"./topInfo-7552a0fd.js";import{c as f}from"./constants-3a7ec10a.js";import{E as Z}from"./earningCards-d312f729.js";import{S as ee}from"./signupByEmail-82a12497.js";import"./bitcoin-b42c0434.js";import"./vendorDashboardApi-758987af.js";import"./recaptcha-wrapper-ed08ea1d.js";import"./zod-759f93f6.js";import"./error-3c144da9.js";const se=()=>{const[a,n]=d.useState(!1);let l=$();const t={connect:D(),disconnect:F(),config:I(),address:O(),status:R()},{t:o}=v(),i=new B,[b,w]=d.useState([]),[p,m]=d.useState(!1),[y,x]=d.useState(!1),{balances:s,fetchBalances:j}=X(t),{prices:h,fetchPrices:g}=Y(t);return d.useEffect(()=>{g(),j(),t.status==="connected"&&t.address&&c();async function c(){await i.registerWalletAddress(t.address)}},[t.status,t.address]),d.useEffect(()=>{const c=s[1].map((u,C)=>({...f[C],middleName:"Ethereum",middleInfo:"Network",price:h[C],value:u}));w(c)},[h,s]),e.jsxs(U,{children:[e.jsxs("div",{className:r.top,children:[e.jsx("div",{className:r.label,children:o("dashboard.cryptoMarket")}),e.jsxs("div",{className:r.buttonWrapper,children:[e.jsxs("div",{className:r.btn,children:[e.jsx("p",{children:o("dashboard.hideBalance")}),e.jsx("div",{onClick:()=>n(c=>!c),className:`${a?r.activeToggle:""} ${r.toggle}`,children:e.jsx("div",{className:`${r.toggleCircle}`})})]}),e.jsxs("div",{className:r.buttons,children:[e.jsx(k,{color:"light",onClick:()=>m(!0),children:o("dashboard.receive")}),e.jsxs(k,{onClick:()=>x(!0),children:[" ",o("dashboard.send")]})]})]})]}),e.jsx("div",{className:r.body,children:b.filter(c=>!(a&&parseFloat(c.value)===0)).map((c,u)=>e.jsx(ae,{data:c},u))}),e.jsx(re,{show:p,walletAddress:l,setOpenReceiveModal:m}),e.jsx(te,{show:y,setShow:x})]})},ae=({data:a})=>{let n="loading",l="loading";return a.value&&(n=a.value,a.price&&(l=a.value*a.price)),e.jsxs("div",{className:r.cryptoItem,children:[e.jsxs("div",{className:r.left,children:[e.jsx("img",{src:a.icon,alt:""}),e.jsxs("div",{children:[e.jsx("div",{className:r.title,children:a.name}),e.jsx("div",{className:r.subtitle,children:`${parseFloat(a.price).toFixed(2)}`})]})]}),e.jsxs("div",{className:r.middle,children:[e.jsx("div",{className:r.title,children:a.middleName}),e.jsx("div",{className:r.subtitle,children:a.middleInfo})]}),e.jsxs("div",{className:r.right,children:[e.jsxs("div",{className:r.title,children:["$",V(l)]}),e.jsxs("div",{className:r.subtitle,children:[_(n,a.decimals)," ",a.abbr]})]})]})},re=({show:a,walletAddress:n,setOpenReceiveModal:l})=>{const{setInfoMessage:t,clearMessages:o}=d.useContext(W),{t:i}=v();return e.jsxs(E,{show:a,onConfirm:()=>{l(!1),o()},confirmTitle:i("dashboard.cryptoCard.close"),children:[e.jsx(T,{}),e.jsx(A,{title:i("dashboard.cryptoCard.receiveModal.title"),description:i("dashboard.cryptoCard.receiveModal.description")}),e.jsx("div",{className:r.modalInputs,children:e.jsx("div",{children:e.jsxs("div",{className:M.inputWrapper,children:[e.jsx("p",{className:`${M.label} ${M.dashboardLabel}`,children:i("dashboard.cryptoCard.wallet")}),e.jsx(q,{value:n,onCopy:()=>t(i("dashboard.cryptoCard.walletCopied"))})]})})})]})},te=({show:a,setShow:n})=>{const[l,t]=d.useState(f[0].abbr),[o,i]=d.useState(""),[b,w]=d.useState(""),[p,m]=d.useState(""),[y,x]=d.useState(!1),{t:s}=v(),{setInfoMessage:j,setErrorMessage:h,clearMessages:g}=d.useContext(W),c=async()=>{if(y)return;if(o===""){h(s("dashboard.cryptoCard.sendModal.amountError"));return}if(b===""){h(s("dashboard.cryptoCard.sendModal.addressError"));return}if(p===""){h(s("dashboard.cryptoCard.sendModal.passwordError"));return}const u=f.find(L=>L.abbr===l);if(!u){h(s("dashboard.cryptoCard.sendModal.correctCurrencyError"));return}const C=new B,S=await C.checkPassword(p);if(console.log("passwordCorrect: "+S),!S){h(s("dashboard.cryptoCard.sendModal.correctPasswordError"));return}m(""),x(!0),j(s("dashboard.cryptoCard.sendModal.withdrawing"));const P=u.address;await C.send(P,o,b,p)?(j(s("dashboard.cryptoCard.sendModal.withdrawSuccess")),fetchBalances()):h(s("dashboard.cryptoCard.sendModal.withdrawFailed"))};return e.jsxs(E,{show:a,cancelTitle:s("general.close"),confirmTitle:s("general.withdraw"),onClose:()=>{n(!1),g()},onConfirm:()=>c(),children:[e.jsx(T,{}),e.jsx(A,{title:s("dashboard.cryptoCard.sendModal.title"),description:s("dashboard.cryptoCard.sendModal.description")}),e.jsxs("div",{className:r.modalInputs,children:[e.jsx(z,{dashboard:!0,label:s("dashboard.cryptoCard.sendModal.currencyLabel"),placeholder:s("dashboard.cryptoCard.sendModal.currencyPlaceholder"),value:l,options:f.map(u=>u.abbr),setValue:t}),e.jsx(N,{dashboard:!0,label:s("dashboard.cryptoCard.sendModal.amountLabel"),placeholder:s("dashboard.cryptoCard.sendModal.amountLabel"),value:o,setState:i}),e.jsx(N,{dashboard:!0,label:s("dashboard.cryptoCard.sendModal.addressLabel"),placeholder:s("dashboard.cryptoCard.sendModal.addressLabel"),value:b,setState:w}),e.jsx(N,{dashboard:!0,label:s("dashboard.cryptoCard.sendModal.passwordLabel"),placeholder:s("dashboard.cryptoCard.sendModal.passwordLabel"),value:p,setState:m,secure:!0})]})]})},de=["00:00","04:00","08:00","12:00","16:00","20:00","00:00"],fe=()=>{const{t:a,i18n:n}=v(),{language:l}=n,{theme:t}=G(),o=d.useMemo(()=>({labels:de,datasets:[{label:a("dashboard.charts.last24h"),data:[1,2,3,4,5,6,7],borderColor:"#0784B5",backgroundColor:"#0784B5"},{label:a("dashboard.charts.previous24h"),data:[12,18,9,5,3,15,20],borderColor:t==="dark"?"rgba(255, 255, 255,0.2)":"rgba(0, 0, 0,0.2)",backgroundColor:t==="dark"?"rgba(255, 255, 255,0.2)":"rgba(0, 0, 0,0.2)"}]}),[l,t]);return e.jsxs("div",{children:[e.jsxs(H,{activeChain:"ethereum",supportedWallets:[I()],clientId:"639eea2ebcabed7eab90b56aceeed08b",children:[e.jsx(J,{}),e.jsx(K,{}),e.jsx(Z,{}),e.jsx(Q,{data:o}),e.jsx(se,{})]}),e.jsx(ee,{})]})};export{fe as default};