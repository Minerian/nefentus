import{k as c,av as d}from"./index-987bf79b.js";async function w(a,e,n){const r=a.getProvider(),s=new c(r,e,d,{},a.storage),t=await a.getSignerAddress(),o=a.readContract.address;return(await s.readContract.allowance(t,o)).gte(n)}export{w as h};
