import{e as r,r as i,n as l,j as e,C as d,B as p}from"./index-c9329193.js";import{S as _}from"./signupByEmail-82a12497.js";import{B as x}from"./bitcoin-b42c0434.js";import"./recaptcha-wrapper-ed08ea1d.js";import"./zod-759f93f6.js";import"./error-3c144da9.js";const v="/nefentus/assets/convert-c04be4f7.svg",m="_cardWrapper_1k1yf_1",h="_card_1k1yf_1",j="_header_1k1yf_14",y="_options_1k1yf_21",f="_option_1k1yf_21",u="_circle_1k1yf_34",k="_light_1k1yf_44",N="_optionActive_1k1yf_49",B="_label_1k1yf_59",w="_optionText_1k1yf_63",T="_convertIcon_1k1yf_73",b="_walletBox_1k1yf_80",C="_walletTop_1k1yf_90",W="_walletBody_1k1yf_98",g="_inputWrapper_1k1yf_103",A="_button_1k1yf_125",$="_crypto_1k1yf_134",t={cardWrapper:m,card:h,header:j,options:y,option:f,circle:u,light:k,optionActive:N,label:B,optionText:w,convertIcon:T,walletBox:b,walletTop:C,walletBody:W,inputWrapper:g,button:A,crypto:$},I=()=>{const{t:s}=r(),[o,c]=i.useState(0),{theme:a}=l();return e.jsx("div",{className:t.cardWrapper,children:e.jsxs(d,{className:`${t.card} ${a!=="dark"?t.light:""}`,children:[e.jsxs("div",{className:t.header,children:[e.jsx("div",{className:t.label,children:s("converter.wallet")}),e.jsxs("div",{className:t.options,children:[e.jsxs("div",{onClick:()=>c(0),className:`${t.option} ${o===0?t.optionActive:""}`,children:[e.jsx("div",{className:t.circle}),e.jsx("div",{className:t.optionText,children:"Nef Wallet"})]}),e.jsxs("div",{onClick:()=>c(1),className:`${t.option} ${o===1?t.optionActive:""}`,children:[e.jsx("div",{className:t.circle}),e.jsx("div",{className:t.optionText,children:"Wallet Connect"})]})]})]}),e.jsxs("div",{children:[e.jsx(n,{}),e.jsx("div",{className:t.convertIcon,children:e.jsx("img",{src:v,alt:""})}),e.jsx(n,{}),e.jsx("div",{className:t.button,children:e.jsx(p,{children:s("converter.convert")})})]})]})})},n=()=>{const{t:s}=r();return e.jsxs("div",{className:t.walletBox,children:[e.jsxs("div",{className:t.walletTop,children:[e.jsx("div",{children:s("converter.from")}),e.jsxs("div",{children:[s("converter.balance"),": 0 BTC"]})]}),e.jsxs("div",{className:t.walletBody,children:[e.jsxs("div",{className:t.inputWrapper,children:[e.jsx("input",{type:"number",placeholder:"0.00"}),e.jsx("div",{children:"0.000045-6900"})]}),e.jsxs("div",{className:t.crypto,children:[e.jsx("img",{src:x,alt:""}),e.jsx("div",{children:"BTC"})]})]})]})},z=()=>e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(_,{})]});export{z as default};