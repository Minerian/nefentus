import{j as e,r as t,at as p,f as d,T as l,m}from"./index-c9329193.js";import{H as f}from"./Helmet-35a305b3.js";import{R as x}from"./index-77016f49.js";import{T as y}from"./topInfo-7552a0fd.js";import"./modalOverlay-fc6a1066.js";import"./modalOverlay.module-dd54f8bc.js";import"./topInfo.module-8a8de9a7.js";import"./constants-3a7ec10a.js";import"./bitcoin-b42c0434.js";const I="_body_1172w_1",j="_price_1172w_5",u="_stock_1172w_6",h="_payInfo_1172w_18",n={body:I,price:j,stock:u,payInfo:h},_=({invoice:s})=>e.jsx(x,{priceUSD:s.price,userId:s.user?s.user.id:null,transInfoArg:{invoiceId:s.id},info:e.jsx(e.Fragment,{children:e.jsx("div",{className:`card ${n.payInfo}`,children:e.jsxs("div",{className:n.body,children:[e.jsx(y,{title:"Invoice",description:"Pay an invoice"}),e.jsxs("p",{className:n.price,children:[e.jsx("span",{children:"Price:"})," ",e.jsxs("span",{children:[s.price," USD"]})]})]})})})}),R=()=>{const[s,o]=t.useState({}),r=p().payLink,c=new d;async function i(){const a=await c.getInvoice(r);a&&o(a),console.log(a)}return t.useEffect(()=>{i()},[]),e.jsxs("div",{className:"container",children:[e.jsx(f,{children:e.jsx("title",{children:"Pay invoice | Nefentus"})}),e.jsx(l,{activeChain:"ethereum",supportedWallets:[m()],clientId:"639eea2ebcabed7eab90b56aceeed08b",children:e.jsx(_,{invoice:s})})]})};export{R as default};