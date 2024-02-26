import{r,k as ae,e as K,j as e,i as He,I as de,O as V,B as _e,M as ye,Z as ke,C as Ce,g as Ne,$ as se,v as ze,a0 as Ze}from"./index-c9329193.js";import{M as Ge}from"./modalOverlay-fc6a1066.js";import{C as Ye,b as Je,L as Ke,P as Qe,c as Xe,d as ea,p as aa,a as sa,e as ta,E as oa}from"./earningCards-d312f729.js";import{T as Be,a as ra,b as na}from"./tableStatus-e76c9ce3.js";import{h as la}from"./moment-fbc5633a.js";import{R as pe}from"./constants-3a7ec10a.js";import{S as ia}from"./signupByEmail-82a12497.js";import"./modalOverlay.module-dd54f8bc.js";import"./vendorDashboardApi-758987af.js";import"./bitcoin-b42c0434.js";import"./recaptcha-wrapper-ed08ea1d.js";import"./zod-759f93f6.js";import"./error-3c144da9.js";const ca="_body_1gzh9_1",da={body:ca},pa="_title_17vx1_1",_a="_lineWrapper_17vx1_6",ua="_line_17vx1_6",ma="_label_17vx1_17",ha="_total_17vx1_27",ga="_legendBody_17vx1_37",xa="_legend_17vx1_37",fa="_passwordWrapper_17vx1_53",ba="_passwordContainer_17vx1_57",va="_iconEye_17vx1_62",ja="_left_17vx1_75",Ba="_right_17vx1_76",wa="_circle_17vx1_90",ya="_modalWrapper_17vx1_97",ka="_modal_17vx1_97",Ca="_modalInputs_17vx1_110",Na="_cancelButton_17vx1_118",Sa="_modalButtons_17vx1_129",N={title:pa,lineWrapper:_a,line:ua,label:ma,total:ha,legendBody:ga,legend:xa,passwordWrapper:fa,passwordContainer:ba,iconEye:va,left:ja,right:Ba,circle:wa,modalWrapper:ya,modal:ka,modalInputs:Ca,cancelButton:Na,modalButtons:Sa},Aa="_title_17vx1_1",$a="_lineWrapper_17vx1_6",La="_line_17vx1_6",Wa="_label_17vx1_17",Da="_total_17vx1_27",Ea="_legendBody_17vx1_37",Ta="_legend_17vx1_37",qa="_passwordWrapper_17vx1_53",Ua="_passwordContainer_17vx1_57",Ma="_iconEye_17vx1_62",Ia="_left_17vx1_75",Pa="_right_17vx1_76",Ra="_circle_17vx1_90",Fa="_modalWrapper_17vx1_97",Va="_modal_17vx1_97",Oa="_modalInputs_17vx1_110",Ha="_cancelButton_17vx1_118",za="_modalButtons_17vx1_129",q={title:Aa,lineWrapper:$a,line:La,label:Wa,total:Da,legendBody:Ea,legend:Ta,passwordWrapper:qa,passwordContainer:Ua,iconEye:Ma,left:Ia,right:Pa,circle:Ra,modalWrapper:Fa,modal:Va,modalInputs:Oa,cancelButton:Ha,modalButtons:za},Se=({type:a,clearFields:s,addUser:p,operationType:b,firstName:x,setFirstName:i,lastName:w,setLastName:c,email:B,setEmail:v,role:_,setRole:u,password:d,setPassword:t})=>{const[g,f]=r.useState(!1),[S,L]=r.useState(null),m=`${ae.input} ${ae.dashboardInput}`,{t:h}=K();return e.jsx(Ge,{children:e.jsxs("div",{className:q.modal,children:[e.jsx(He,{}),e.jsxs("h4",{children:[b!=="add"?"Edit":"Create"," User"]}),e.jsxs("div",{className:q.modalInputs,children:[e.jsx(de,{dashboard:!0,label:h("dashboard.modal.firstName").concat("*"),placeholder:h("dashboard.modal.firstNamePlaceholder"),value:x,setState:i}),e.jsx(de,{dashboard:!0,label:h("dashboard.modal.lastName").concat("*"),placeholder:h("dashboard.modal.lastNamePlaceholder"),value:w,setState:c}),e.jsx(de,{dashboard:!0,label:h("dashboard.modal.email").concat("*"),placeholder:h("dashboard.modal.emailPlaceholder"),value:B,setState:v,disabled:S!==null}),b==="add"&&e.jsxs("div",{className:q.passwordContainer,children:[e.jsx("p",{className:`${ae.label} ${ae.passwordLabel}`,children:h("dashboard.modal.password").concat("*")}),e.jsxs("div",{className:q.passwordWrapper,children:[e.jsx("input",{className:m,type:g?"text":"password",placeholder:h("dashboard.modal.passwordPlaceholder"),value:d,onChange:k=>t(k.target.value)}),e.jsx("div",{className:q.iconEye,alt:"View password",onClick:()=>f(!g),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 -960 960 960",width:"24",children:e.jsx("path",{style:{fill:"white"},d:"M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"})})})]})]}),a==="admin"&&e.jsx(V,{label:h("dashboard.modal.role").concat("*"),value:_,options:["Vendor","Affiliate","Broker","Senior Broker","Leader"],dashboard:!0,setValue:u}),a==="leader"&&e.jsx(V,{label:h("dashboard.modal.role").concat("*"),value:_,options:["Vendor","Affiliate","Broker","Senior Broker"],dashboard:!0,setValue:u}),a==="seniorbroker"&&e.jsx(V,{label:h("dashboard.modal.role").concat("*"),value:_,options:["Vendor","Affiliate","Broker"],dashboard:!0,setValue:u}),a==="broker"&&e.jsx(V,{label:h("dashboard.modal.role").concat("*"),value:_,options:["Vendor","Affiliate"],dashboard:!0,setValue:u})]}),e.jsxs("div",{className:q.modalButtons,children:[e.jsx("div",{className:q.cancelButton,onClick:()=>{s()},children:h("general.cancel")}),e.jsx(_e,{onClick:p,color:"white",children:h("general.confirm")})]})]})})},Za=({data:a,userCnt:s,type:p,setIsReloadData:b})=>{const[x,i]=r.useState(""),[w,c]=r.useState(""),[B,v]=r.useState(""),[_,u]=r.useState(""),[d,t]=r.useState("Select Role"),[g,f]=r.useState(!1),[S,L]=r.useState(null),{t:m}=K(),{setInfoMessage:h,setErrorMessage:k,clearMessages:re}=r.useContext(ye),U=new ke(p),O=async()=>{L(null),i(""),c(""),v(""),u(""),t(""),f(!0)},Q=()=>{i(""),c(""),v(""),u(""),t("")},M=async()=>{if(x===""){k(m("messages.error.firstNameRequired"));return}if(w===""){k(m("messages.error.lastNameRequired"));return}if(B===""&&S===null){k(m("messages.error.emailRequired"));return}if(_===""&&S===null){k(m("messages.error.passwordRequired"));return}if(d===""){k(m("messages.error.roleRequired"));return}if(S)await U.updateUser(x,w,S,userRole==="ROLE_AFFILIATE"?"Vendor":d)?h(m("messages.success.updateUser")):k(m("messages.error.updateUser"));else{const j=await U.addUser(x,w,B,_,userRole==="ROLE_AFFILIATE"?"Vendor":d);if(j){if(j.ok){f(!1),b(W=>!W),Q(),h(m("messages.success.addUser"));return}else if(j.status===409){k(m("messages.error.userExist"));return}}k(m("messages.error.addUser"))}},H=()=>{re(),Q(),f(!1)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ce,{children:[e.jsx("div",{className:N.title,children:m("dashboard.registrationsRoles")}),e.jsxs("div",{className:N.lineGroup,children:[e.jsx("div",{className:N.lineWrapper,children:a.map((j,W)=>e.jsx("div",{className:N.line,style:{backgroundColor:j.color,width:j.percentage+"%"}},W))}),e.jsxs("div",{className:N.label,children:[e.jsx("p",{children:"0%"}),e.jsx("p",{children:"100%"})]}),e.jsxs("div",{className:N.total,children:[e.jsx("p",{children:m("dashboard.total")}),e.jsx("p",{children:s})]}),e.jsx("div",{className:N.legendBody,children:a.map((j,W)=>e.jsxs("div",{className:N.legend,children:[e.jsxs("div",{className:N.left,children:[e.jsx("div",{className:N.circle,style:{backgroundColor:j.color}}),e.jsx("p",{children:m(`dashboard.roles.${j.legend.replaceAll(" ","")}`)})]}),e.jsxs("div",{className:N.right,children:[e.jsx("p",{children:j.num}),e.jsxs("p",{children:[j.percentage,"%"]})]})]},W))}),e.jsx(_e,{onClick:O,children:m("dashboard.addUser")}),p!=="partner"&&e.jsx("div",{style:{marginTop:"1.5rem"},children:e.jsx(_e,{color:"light",link:"/dashboard/kyc",children:m("dashboard.KYCRequests")})})]})]}),e.jsx(e.Fragment,{children:e.jsx("div",{className:N.modalWrapper,children:g&&e.jsx(Se,{type:p,clearFields:H,addUser:M,operationType:"add",firstName:x,setFirstName:i,lastName:w,setLastName:c,email:B,setEmail:v,role:d,setRole:t,password:_,setPassword:u})})})]})},Ga="_card_10xtq_1",Ya="_label_10xtq_6",Ja="_chart_10xtq_10",Ka="_graphCard_10xtq_15",Qa="_info_10xtq_20",Xa="_graphAmount_10xtq_27",es="_datePicker_10xtq_33",as="_tooltip_10xtq_45",ss="_fadeout_10xtq_1",ts="_chartContainer_10xtq_56",os="_dropdownWrap_10xtq_63",rs="_dropdownBorder_10xtq_69",A={card:Ga,label:Ya,chart:Ja,graphCard:Ka,info:Qa,graphAmount:Xa,datePicker:es,tooltip:as,fadeout:ss,chartContainer:ts,dropdownWrap:os,dropdownBorder:rs};Ye.register(Je,Ke,Qe,Xe,ea,aa,sa);const ns={responsive:!0,maintainAspectRatio:!1,tension:.1,plugins:{title:{display:!0},legend:{position:"bottom"}},scales:{y:{beginAtZero:!0,grid:{color:"rgba(255,255,255,0.08)"},ticks:{callback:function(a,s,p){return a+" $"},suggestedMin:0,padding:10,color:"rgba(255,255,255,0.6)",font:{size:window.innerWidth<550?8:12,family:"Axiforma ",weight:400}}},x:{grid:{display:!1},ticks:{color:"rgba(255,255,255,0.6)",padding:10,font:{family:"Axiforma",weight:400,size:window.innerWidth<550?8:12}}}}},te=new Date,ls=24*60*60*1e3,Ae=Math.round((te-new Date("Apr 01 2023"))/ls),oe=[];let we=[];for(let a=0;a<Ae;a+=2){const s=new Date("Apr 01 2023");s.setDate(s.getDate()+a);const p=s.toLocaleString("default",{month:"short"}),b=s.getDate();oe.push(`${p}, ${b}`)}if(oe[oe.length-1]!==te.toLocaleDateString()){const a=te.toLocaleString("default",{month:"short"}),s=te.getDate();oe.push(`${a}, ${s}`)}Array.from({length:Ae},()=>0);function is(a){we=a?Object.keys(a):[];const s=a?Object.values(a):[];return{labels:we,datasets:[{label:"Income",data:s,borderColor:"#0784B5",backgroundColor:"#0784B5"}]}}function cs(a){return a==null?"2023-04-01":Object.keys(a)[0]}function ds(a){if(a){const p=Object.values(a).reduce(function(b,x){return b+x},0);return"$"+Ne(p)}else return"$0"}function ps(a){if(a==null)return"2023-04-30";{const s=Object.keys(a);return s[s.length-1]}}const _s=({data:a})=>{const{t:s}=K(),[p,b]=r.useState(s("graph.choosePeriod")),x=[s("graph.months.January"),s("graph.months.February"),s("graph.months.March"),s("graph.months.April"),s("graph.months.May"),s("graph.months.June"),s("graph.months.July"),s("graph.months.August"),s("graph.months.September"),s("graph.months.October"),s("graph.months.November"),s("graph.months.December")],i=v=>Object.keys(v).reduce((_,u)=>{const d=u.split("-"),t=x[parseInt(d[1],10)-1],g=d[0],f=`${t} ${g}`;return _.includes(f)||_.push(f),_},[]),w=[s("graph.allTime"),...i(a)],B=((v,_)=>{if(_===s("graph.allTime")||_===s("graph.choosePeriod"))return v;{const u={};for(const d in v){const t=d.split("-"),g=x[parseInt(t[1],10)-1],f=`${t[0]}`;`${g} ${f}`===_&&(u[d]=v[d])}return u}})({...a},p);return e.jsxs(Ce,{className:`${A.card}`,children:[e.jsxs("div",{className:A.info,children:[e.jsxs("div",{className:A.left,children:[e.jsx("div",{className:A.label,children:s("dashboard.income")}),e.jsx("div",{className:A.graphAmount,children:ds(B)})]}),e.jsxs("div",{className:A.dropdownWrap,children:[e.jsx("div",{className:A.dropdownBorder,children:e.jsx(V,{label:"",value:p,options:w,setValue:b})}),e.jsxs("div",{className:A.datePicker,children:[e.jsx("p",{children:cs(B)}),e.jsx("p",{children:" - "}),e.jsx("p",{children:ps(B)})]})]})]}),e.jsx("div",{className:A.chart,children:e.jsx(ta,{options:ns,data:is(B)})})]})},us=({chartData:a,data:s,userCnt:p,type:b,setIsReloadData:x})=>e.jsxs("div",{className:da.body,children:[e.jsx(_s,{data:a}),e.jsx(Za,{data:s,userCnt:p,type:b,setIsReloadData:x})]}),ms="_body_15650_1",hs="_topButtonWrapper_15650_5",gs="_affiliateLink_15650_14",xs="_linkBox_15650_21",fs="_affiliateLabel_15650_28",bs="_url_15650_33",vs="_rows_15650_53",js="_registration_15650_61",Bs="_bar_15650_71",ws="_barVendor_15650_85",ys="_lineBoxVendor_15650_86",ks="_barAffiliate_15650_90",Cs="_lineBoxAffiliate_15650_91",Ns="_barBroker_15650_95",Ss="_lineBoxBroker_15650_96",As="_barSeniorBroker_15650_100",$s="_lineBoxSeniorBroker_15650_101",Ls="_barLeader_15650_105",Ws="_lineBoxLeader_15650_106",Ds="_barAdmin_15650_110",Es="_lineBoxAdmin_15650_111",Ts="_leftLine_15650_115",qs="_percentageLabel_15650_120",Us="_totalBoxTop_15650_130",Ms="_infoBox_15650_142",Is="_right_15650_161",Ps="_lineBox_15650_86",Rs="_button_15650_176",Fs="_tableCard_15650_182",Vs="_tableAdmin_15650_189",Os="_tableDiamond_15650_193",Hs="_tableBody_15650_197",zs="_box_15650_203",Zs="_approved_15650_209",Gs="_pending_15650_214",Ys="_linkWrapper_15650_219",Js="_actionsLink_15650_225",Ks="_deleteLink_15650_231",Qs="_tableWrapper_15650_242",Xs="_top_15650_5",et="_inputs_15650_256",at="_modalWrapper_15650_265",st="_modal_15650_265",tt="_modalInputs_15650_279",ot="_modalButtons_15650_286",rt="_passwordWrapper_15650_309",nt="_iconEye_15650_315",lt={body:ms,topButtonWrapper:hs,affiliateLink:gs,linkBox:xs,affiliateLabel:fs,url:bs,rows:vs,registration:js,bar:Bs,barVendor:ws,lineBoxVendor:ys,barAffiliate:ks,lineBoxAffiliate:Cs,barBroker:Ns,lineBoxBroker:Ss,barSeniorBroker:As,lineBoxSeniorBroker:$s,barLeader:Ls,lineBoxLeader:Ws,barAdmin:Ds,lineBoxAdmin:Es,leftLine:Ts,percentageLabel:qs,totalBoxTop:Us,infoBox:Ms,right:Is,lineBox:Ps,button:Rs,tableCard:Fs,tableAdmin:Vs,tableDiamond:Os,tableBody:Hs,box:zs,approved:Zs,pending:Gs,linkWrapper:Ys,actionsLink:Js,deleteLink:Ks,tableWrapper:Qs,top:Xs,inputs:et,modalWrapper:at,modal:st,modalInputs:tt,modalButtons:ot,passwordWrapper:rt,iconEye:nt},it="_paginationWrapper_1g79c_1",ct="_nav_1g79c_8",dt="_pagination_1g79c_1",pt="_hide_1g79c_26",_t="_pageInput_1g79c_31",$={paginationWrapper:it,nav:ct,pagination:dt,hide:pt,pageInput:_t},ut=({renderItems:a,data:s,setDataPage:p,setDataSize:b,searchTrigger:x})=>{const[i,w]=r.useState(0),[c,B]=r.useState(10),{t:v}=K(),_=s.length,u=Math.ceil(_/c);function d(g){w(g),a(g*c,(g+1)*c)}function t(g){B(g),w(0),a(0,g)}return r.useEffect(()=>{p(i),b(c)},[i,c]),r.useEffect(()=>{x&&w(0)},[x]),r.useEffect(()=>{a(i*c,(i+1)*c)},[s,i,c]),e.jsxs("div",{className:$.paginationWrapper,children:[e.jsx("nav",{"aria-label":"pagination",className:$.nav,children:e.jsxs("ul",{className:$.pagination,children:[e.jsx("li",{onClick:()=>d(0),className:se({[$.hide]:i===0}),children:"«"}),e.jsx("li",{onClick:()=>d(i-1),className:se({[$.hide]:i===0}),children:"‹"}),e.jsxs("li",{children:[e.jsx(mt,{value:i+1,updatePage:d})," ",v("general.of")," ",u]}),e.jsx("li",{onClick:()=>d(i+1),className:se({[$.hide]:i+1===u}),children:"›"}),e.jsx("li",{onClick:()=>d(u-1),className:se({[$.hide]:i+1===u}),children:"»"})]})}),e.jsx(V,{options:[10,20,50,100],value:c,setValue:t})]})},mt=({value:a,updatePageSize:s})=>e.jsx("input",{className:$.pageInput,value:a,onChange:p=>s(p.target.value-1),type:"text"}),ht=({headers:a,data:s,colSizes:p,colColored:b,colHighlighted:x,striped:i,className:w,setDataPage:c,setDataSize:B,searchTrigger:v,dataPage:_})=>{const[u,d]=r.useState([]);function t(g,f){d(s.slice(g,f)),console.log("Render items from "+g+" to "+f)}return e.jsx(e.Fragment,{children:e.jsx(ut,{setDataPage:c,setDataSize:B,renderItems:t,searchTrigger:v,data:s,dataPage:_})})},gt=[2,1,2,1,1,2,1,2],xt={vendor:"#107CDF",affiliate:"#F5B51B",broker:"#23C215",seniorbroker:"#AF26E7",leader:"#1595c2",admin:"#808080"},Lt=({type:a})=>{const[s,p]=r.useState([]),[b,x]=r.useState([]),[i,w]=r.useState([]),[c,B]=r.useState([]),[v,_]=r.useState(!1),[u,d]=r.useState(0),{t}=K(),g=[t("dashboard.tableHeaders.name"),t("dashboard.tableHeaders.roles"),t("dashboard.tableHeaders.email"),t("dashboard.tableHeaders.status"),t("dashboard.tableHeaders.income"),t("dashboard.tableHeaders.joinedOn"),t("dashboard.tableHeaders.earnings"),t("dashboard.tableHeaders.actions")],[f,S]=r.useState(""),[L,m]=r.useState(""),[h,k]=r.useState(""),[re,U]=r.useState(!1),[O,Q]=r.useState(null),[M,H]=r.useState(""),[j,W]=r.useState(),[D,$e]=r.useState(""),[ne,ue]=r.useState(1),[le,Le]=r.useState(10),[z,We]=r.useState(),[ie,me]=r.useState(!1),{setInfoMessage:he,setErrorMessage:E,clearMessages:ge}=r.useContext(ye),xe=ze(),y=new ke(a);r.useEffect(()=>{fe(),De(),ge()},[v]);const fe=async()=>{var o,l,C,T,Z,G,Y,ve;if(await y.checkPermission()!==!0)xe("/login");else{const Re=[y.getTotalRegistrations(),y.getTotalClicks(),y.getNumOrders(),y.getTotalIncome(),y.getRoleReport(),y.getTotalIncomesPerDay()],[I,P,R,F,Fe,Ve]=await Promise.allSettled(Re),je=[{title:t("dashboard.admin.cardsContent.totalIncome"),amount:`${parseFloat((o=F==null?void 0:F.value)==null?void 0:o.number).toFixed(2)}$`,percentage:(l=F==null?void 0:F.value)==null?void 0:l.percentage,isMonetary:!0},{title:t("dashboard.admin.cardsContent.clicks"),amount:(C=P==null?void 0:P.value)==null?void 0:C.number,percentage:(T=P==null?void 0:P.value)==null?void 0:T.percentage,isMonetary:!1},{title:t("dashboard.admin.cardsContent.registrations"),amount:(Z=I==null?void 0:I.value)==null?void 0:Z.number,percentage:(G=I==null?void 0:I.value)==null?void 0:G.percentage,isMonetary:!1}];(a==="admin"||a==="leader"||a==="seniorbroker"||a==="broker")&&(je[1]={title:t("dashboard.admin.cardsContent.orders"),amount:(Y=R==null?void 0:R.value)==null?void 0:Y.number,percentage:(ve=R==null?void 0:R.value)==null?void 0:ve.percentage,isMonetary:!1});let ce=0;const Oe=Fe.value.map(J=>(ce=ce+J.count,{color:xt[J.role],legend:pe[J.role],num:J.count,percentage:J.percentage}));d(ce),p(je),w(Oe),x(Ve.value)}},De=async()=>{if(await y.checkPermission()!==!0)xe("/login");else{const o=await y.getUsers();o.reverse(),W(o),ee(o)}},Ee=async(n,o,l)=>{let C;o?C=await y.deactivateUser(n):C=await y.patchStatus(n),C&&X(l)},Te=async(n,o)=>{await y.deleteUser(n)&&X(o)},X=async n=>{const o=await y.getUsers();if(o.reverse(),n){const l=o.filter(C=>n.some(T=>C.id===T.id));ee(l)}else ee(o)},qe=async n=>{Q(n.email),S(n.firstName),m(n.lastName),k(n.email),H(pe[n.roles[0]]),U(!0)},Ue=async()=>{if(f===""){E(t("messages.error.firstNameRequired"));return}if(L===""){E(t("messages.error.lastNameRequired"));return}if(h===""&&O===null){E(t("messages.error.emailRequired"));return}if(M===""){E(t("messages.error.roleRequired"));return}if(O)await y.updateUser(f,L,O,M)?(he(t("messages.success.updateUser")),X(dataUsers)):E(t("messages.error.updateUser"));else{const n=await y.addUser(f,L,h,M);if(n){if(n.ok){U(!1),fe(),be(),he(t("messages.success.addUser"));return}else if(n.status===409){E(t("messages.error.userExist"));return}}E(t("messages.error.addUser"))}};function ee(n){if(n){const o=n==null?void 0:n.map(l=>[`${l.firstName} ${l.lastName}`,l.roles.map(C=>t(`dashboard.roles.${pe[C.replace(" ","")].replaceAll(" ","")}`)).join(", "),l.email,l.activated?e.jsx(Be,{color:"green",children:t("general.active")}):e.jsx(Be,{color:"red",children:t("general.notActive")}),Ne(l.income),la(l.createdAt).format("MMM D YYYY, HH:mm:ss"),`$${l.income}`,e.jsx(ra,{button:l.activated?t("general.deactivate"):t("general.activate"),onClick:()=>Ee(l.email,l.activated),editUser:()=>qe(l),deleteUser:()=>Te(l.email)})]);B(o),me(!1)}}const be=()=>{S(""),m(""),k(""),H("")};r.useEffect(()=>{ie&&ee((z==null?void 0:z.length)>0?z:j)},[ie]);const Me=()=>{const n=j==null?void 0:j.filter(o=>{var l,C,T,Z,G,Y;return((l=o==null?void 0:o.email)==null?void 0:l.toLowerCase().includes(D.trim().toLowerCase()))||((C=o==null?void 0:o.firstName)==null?void 0:C.toLowerCase().includes(D.trim().toLowerCase()))||((T=o==null?void 0:o.lastName)==null?void 0:T.toLowerCase().includes(D.trim().toLowerCase()))||((Z=String(o==null?void 0:o.createdAt))==null?void 0:Z.toLowerCase().includes(D.trim()))||((G=String(o==null?void 0:o.income))==null?void 0:G.toLowerCase().includes(D.trim().toLowerCase()))||((Y=o==null?void 0:o.roles[0])==null?void 0:Y.toLowerCase().includes(D.trim().toLowerCase()))});We(n),ue(0),me(!0)},Ie=c.filter((n,o)=>o>=ne*le&&o<ne*le+le),Pe=()=>{ge(),be(),U(!1),X(z)};return e.jsxs("div",{children:[e.jsx(oa,{data:s}),e.jsx(us,{data:i,chartData:b,userCnt:u,type:a,setIsReloadData:_}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx(Ze,{title:t("dashboard.userManagement"),users:c,setFiltered:c,setGetDataInput:$e,findUser:Me,getDataInput:D}),e.jsx(na,{grid:"1.2fr 0.9fr 1.5fr 1fr 0.9fr 1fr 0.6fr 1.2fr",label:g,data:Ie}),e.jsx(e.Fragment,{children:e.jsx(ht,{data:c,setDataPage:ue,setDataSize:Le,colSizes:gt,searchTrigger:ie,dataPage:ne,striped:!0})})]})}),e.jsx(e.Fragment,{children:e.jsx("div",{className:lt.modalWrapper,children:re&&e.jsx(Se,{type:a,clearFields:Pe,addUser:Ue,operationType:"update",firstName:f,setFirstName:S,lastName:L,setLastName:m,email:h,setEmail:k,role:M,setRole:H})})}),e.jsx(ia,{})]})};export{Lt as default};