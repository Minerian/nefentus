import{r as o,e as h,j as s,a0 as j}from"./index-c9329193.js";import{S as T}from"./signupByEmail-82a12497.js";import{v as y}from"./vendorDashboardApi-758987af.js";import{T as $,a as v,b as A}from"./tableStatus-e76c9ce3.js";import{h as D}from"./moment-fbc5633a.js";import"./recaptcha-wrapper-ed08ea1d.js";import"./zod-759f93f6.js";import"./error-3c144da9.js";const O=()=>{const[i,c]=o.useState([]),[S,l]=o.useState([]),d=new y,[u,m]=o.useState(0),{t:a}=h(),f=[a("transactions.table.product"),a("transactions.table.order"),a("transactions.table.email"),a("transactions.table.amount"),a("transactions.table.currency"),a("transactions.table.transaction"),a("transactions.table.date"),a("transactions.table.earnings"),a("transactions.table.action")];o.useEffect(()=>{p()},[]);async function p(){let t=await d.getOrders();if(t=t.reverse(),t){let r=0;t.forEach(e=>{r=r+e.totalPrice});const n=t.map(e=>b(e)),x=t.map(e=>e.id);m(r),c(n),l(x)}}function b(t){var r,n;return[t.product?t.product.name:a("payment.customPayment"),`#${t.id}`,(n=(r=t.invoice)==null?void 0:r.user)==null?void 0:n.email,`${t.totalPrice}`,s.jsx($,{color:"blue",children:t.currency}),`#${t.invoice.id}`,D(t.updatedAt).format("MMM D, YYYY"),`$${t.totalPrice}`,s.jsx(v,{button2:"Details"})]}return s.jsxs("div",{children:[s.jsx(j,{title:a("transactions.title"),description:`${a("transactions.subtitle")} ${u}$`}),s.jsx(A,{grid:"1.4fr 1fr 2fr 1fr 1fr 1fr 1fr 1fr 1fr",label:f,data:i})]})},k=()=>s.jsxs("div",{children:[s.jsx(O,{}),s.jsx(T,{})]});export{k as default};