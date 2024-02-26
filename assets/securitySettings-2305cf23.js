import{r as a,e as q,f as ae,v as oe,j as e,A as o,E as ie,B as ne,P as S,_ as le,i as re,C as ce,S as ue}from"./index-c9329193.js";import{O as de,R as pe}from"./input-773f729a.js";import"./modalOverlay.module-dd54f8bc.js";const he="_button_3ry3p_1",me={button:he},ge="/nefentus/assets/copyClipboardWhite-6071009b.svg",fe=({data:s})=>{const[n,p]=a.useState(localStorage.getItem("hasTotp")==="true"),[l,h]=a.useState(localStorage.getItem("hasOtp")==="true"),[j,b]=a.useState(s.value),m=a.useRef(localStorage.getItem("email")),[F,T]=a.useState(!1),[V,_]=a.useState(!1),[L,$]=a.useState(!1),[N,D]=a.useState(""),[M,g]=a.useState(!1),[P,f]=a.useState(!1),[c,W]=a.useState(""),[I,O]=a.useState(!1),[J,w]=a.useState(!1),[k,z]=a.useState(""),[y,K]=a.useState(""),[R,Q]=a.useState(""),[U,A]=a.useState(null),[C,B]=a.useState(s.value),[x,G]=a.useState(localStorage.getItem("antiPhishingCode")),{t}=q(),r=new ae,H=oe();a.useEffect(()=>{s.flow==="otp"&&b(l),s.flow==="totp"&&b(n)},[l,n,x.current]);const X=async()=>{const i=await r.setupOtp({active:!l});h(!l),i.status===200&&(console.log(i.status,"status"),console.log(l,"statusOtp"),localStorage.setItem("hasOtp",(!l).toString()))},Y=async()=>{if(p(!n),n)await r.setupTotp({active:!1});else{f(!0);const i=await r.getTotpToken();W(i)}},E=async(i,u,v)=>{const d=await r.verifyTotpToken(i,u,v);console.log(d,"response"),(d==null?void 0:d.status)===200&&(await r.setupTotp({active:!0})==null||(localStorage.setItem("hasTotp",(!0).toString()),f(!1),$(!1))),d.status===400&&(T(!0),setTimeout(()=>{T(!1)}))},Z=[{label:t("security.passwords.labelCurrent"),placeholder:t("security.passwords.placeholderCurrent"),type:"password",value:k,onChange:z,required:!0},{label:t("security.passwords.labelNew"),placeholder:t("security.passwords.placeholderNew"),type:"password",value:y,onChange:K,required:!0},{label:t("security.passwords.labelConfirm"),placeholder:t("security.passwords.placeholderConfirm"),type:"password",value:R,onChange:Q,required:!0}],ee=async()=>{y!==R||await r.changePasswordDashboard(y,k)==null||O(!0)},se=()=>{O(!1),A(""),w(!1)},te=async()=>{const i={code:C},u=await r.setPhishingCode(i);u==="Success"&&(G(i.code),localStorage.setItem("antiPhishingCode",i.code)),u==null&&(await r.signout(),setTimeout(()=>{H("/")},1e3),B("")),g(!1)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:o.wrapper,children:e.jsxs("div",{className:o.itemWrapper,children:[e.jsxs("div",{className:o.left,children:[e.jsx("div",{className:o.label,children:s.label}),e.jsx("div",{className:o.description,children:s.description})]}),e.jsx("div",{className:o.right,children:s.type==="button"?e.jsx(ie,{value:j}):e.jsx(we,{type:s.flow,value:x||(s==null?void 0:s.value)})}),e.jsx(ne,{color:"gray",onClick:s.flow==="otp"?X:s.flow==="totp"?Y:s.flow==="password"?()=>w(!0):()=>g(!0),children:s.type==="button"?t(j?"general.disable":"general.enable"):t("general.edit")})]})}),e.jsxs(S,{show:P&&c,onClose:()=>{f(!P),p(!n)},onConfirm:()=>E(m.current,N,!1),cancelTitle:t("security.actions.close"),confirmTitle:t("security.actions.verify"),children:[e.jsx("div",{className:o.modalTitle,children:"TOTP ".concat(t("security.authentication"))}),L?e.jsxs("div",{children:[e.jsxs("div",{className:o.modalSubtitle,children:[" ","Enter code from Authenticator"]}),e.jsx(re,{}),e.jsx(de,{setOTPCode:D,resetCodeFlag:F,request:()=>{E(m.current,N,!1)}})]}):e.jsxs("div",{children:[e.jsxs("div",{className:o.modalSubtitle,children:[" ",t("security.scanModal.title")]}),e.jsx("div",{className:o.QRCode,children:e.jsx(le,{size:256,style:{height:"auto",maxWidth:"100%",width:"100%",borderRadius:"2rem",border:"white 1rem solid"},value:`otpauth://totp/Nefentus?secret=${c}&issuer=${m.current}`,viewBox:"0 0 256 256"})}),e.jsxs("div",{className:o.copyLink,children:[V&&e.jsx("div",{className:o.tooltip,children:"Link copied to clipboard!"}),e.jsxs("div",{className:o.linkBox,onClick:()=>{navigator.clipboard.writeText(c),_(!0)},children:[e.jsx("p",{id:"affiliate-link",className:o.url,children:(c==null?void 0:c.slice(0,15))+"..."}),e.jsx("img",{src:ge,alt:"url icon"})]})]})]})]}),e.jsx(S,{show:J,onClose:I?se:()=>w(!1),onConfirm:ee,cancelTitle:t("security.actions.close"),confirmTitle:t("security.actions.verify"),children:I?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:o.modalTitle,children:t("security.enterCode")}),e.jsx(pe,{value:U,setState:A,type:"text"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:o.modalTitle,children:t("security.passwords.title")}),Z.map((i,u)=>e.jsxs("div",{className:o.inputItem,children:[e.jsx("div",{className:o.modalSubtitle,children:i.label}),e.jsx("input",{className:o.input,type:i.type,name:"",id:"",value:i.value,placeholder:i.placeholder,onChange:v=>{i.onChange(v.target.value)},disabled:i.disabled===!0})]},u))]})}),e.jsx(S,{show:M,title:t("security.antiPhishingCodeTitle"),onConfirm:te,onClose:()=>g(!1),cancelTitle:t("general.cancel"),confirmTitle:t("general.confirm"),children:e.jsx(e.Fragment,{children:e.jsx("input",{className:o.input,value:C==="null"?"":C,placeholder:t("security.antiPhishingCodePlaceholder"),onChange:i=>{B(i.target.value)}})})})]})},we=({type:s,value:n})=>e.jsx("div",{className:o.value,children:s==="password"?"**********":s==="phishingCode"&&n!=="null"&&n?n:"Not Set"}),Se=()=>{const{t:s,i18n:n}=q(),{language:p}=n,l=a.useMemo(()=>[{label:s("security.items.loginLabel"),description:s("security.items.loginDescription"),type:"password",flow:"password"},{label:s("security.items.labelAuthentication"),description:s("security.items.descriptionAuthentication"),value:JSON.parse(localStorage.getItem("hasTotp")),type:"button",flow:"totp"},{label:s("security.items.labelPassword"),description:s("security.items.descriptionPassword"),value:JSON.parse(localStorage.getItem("hasOtp")),type:"button",flow:"otp"},{label:s("security.items.labelCode"),description:s("security.items.descriptionCode"),value:localStorage.getItem("antiPhishingCode"),type:"phishingCode",flow:"phishingCode"}],[p]);return e.jsxs(ce,{className:me.card,children:[e.jsx(ue,{title:s("security.settings.title"),description:s("security.settings.description")}),l.map(h=>e.jsx(fe,{data:h}))]})};export{Se as default};