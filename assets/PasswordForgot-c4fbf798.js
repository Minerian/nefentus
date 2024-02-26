import{r as t,f as h,e as j,a9 as c,j as e,w as b,I as v,ab as N}from"./index-ceef141d.js";import{u as w,t as E}from"./zod-26008f98.js";import{E as I}from"./error-08a7b626.js";import{H as W}from"./Helmet-244c3607.js";const k="_login_1cnmn_1",P="_message_1cnmn_8",S="_errormessagecontainer_1cnmn_15",y="_messagecontainer_1cnmn_22",B="_left_1cnmn_29",M="_card_1cnmn_33",F="_inputWrapper_1cnmn_50",L="_remeberInfo_1cnmn_56",A="_checkBox_1cnmn_73",H="_buttonWrapper_1cnmn_92",R="_top_1cnmn_105",U="_info_1cnmn_116",n={login:k,message:P,errormessagecontainer:S,messagecontainer:y,left:B,card:M,inputWrapper:F,remeberInfo:L,checkBox:A,buttonWrapper:H,top:R,info:U},$=()=>{var a;const[i,r]=t.useState(null),[o,m]=t.useState(null),l=new h,{t:s}=j(),d=c.object({email:c.string().min(1,{message:s("messages.validation.email")})}),{register:p,handleSubmit:g,formState:{errors:_}}=w({resolver:E(d),mode:"onSubmit"});async function u(f){try{if(await l.forgotPassword(f.email)==null){r(s("messages.error.email"));return}m(s("messages.info.email"))}catch{r(s("messages.error.sendingEmail"))}}return e.jsx("div",{className:n.login,children:e.jsxs("div",{className:n.card,children:[e.jsxs("div",{className:n.left,children:[e.jsx("img",{src:b,alt:"nefentus logo"}),e.jsx("h3",{children:s("forgot-password.title")})]}),e.jsx("div",{className:n.top,children:e.jsxs("div",{className:n.message,children:[e.jsx(I,{error:i||((a=_.email)==null?void 0:a.message)}),o&&e.jsx("div",{className:n.messagecontainer,children:e.jsx("p",{children:o})})]})}),e.jsxs("form",{onSubmit:g(u),children:[e.jsx(v,{register:p,name:"email",label:s("signUp.emailLabel"),placeholder:s("signUp.emailPlaceholder")}),e.jsx("div",{className:n.buttonWrapper,children:e.jsx(N,{link:null,type:"submit",children:s("forgot-password.button")})}),e.jsx("div",{className:n.info,children:e.jsx("p",{children:s("forgot-password.info")})})]})]})})},D=()=>e.jsxs("div",{className:"dashboardFont",children:[e.jsx(W,{children:e.jsx("title",{children:"Nefentus | Password forgotten"})}),e.jsx($,{})]});export{D as default};
