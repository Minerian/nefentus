import{r as d,j as r}from"./index-ceef141d.js";import{a as f,s as l}from"./topInfo.module-430656a7.js";import{c as p}from"./constants-3a7ec10a.js";function P(e){const[i,t]=d.useState([c(),c()]);function c(){return p.map(a=>{})}async function n(){let a="thirdweb";e.status==="connected"&&e.address&&(a="metamask");const o=new f(a),u=p.map(s=>[s.address?s.address:o.WETH_CONTRACT_ADDRESS,s.decimals]),m=await Promise.all(u.map(s=>o.getUSDCPriceForToken(s[0],s[1],6)));t(m)}return d.useEffect(()=>{n()},[]),{prices:i,fetchPrices:n}}const T=({title:e,description:i,children:t})=>r.jsxs("div",{className:l.top,children:[r.jsxs("div",{children:[r.jsx("p",{children:e}),r.jsx("p",{children:i})]}),t]});export{T,P as u};
