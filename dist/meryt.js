const e=e=>"object"==typeof e&&null!=e&&!Array.isArray(e),r=e=>e.startsWith("_")?`div${e}`:e,n=e=>-1===e.indexOf("_")?null:e.substring(e.indexOf("_")+1),t=e=>""===e.replace(/\.([a-zA-Z.0-9_-])+/g,"")&&""!==e,s=e=>e.replaceAll("."," ").trim().replace(/\s\s+/g," "),i=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],l=["innerHTML","class"],a=(e,r)=>l.includes(e)?"":`${e}${"string"==typeof r?`="${r}"`:""} `,o=(i,l)=>{let a=(e=>{const t=n(e);return{...t?{id:t}:{},el:(s=e,-1===r(s).indexOf("_")?r(s):r(s).substring(0,r(s).indexOf("_"))),id:n(e),class:"",innerHTML:[]};var s})(i);return l.forEach((r=>e(r)?("string"==typeof r.class&&(r.class=s(`${a.class} ${r.class}`)),a={...a,...r}):Array.isArray(r)?a.innerHTML=[...a.innerHTML,...r]:"string"!=typeof r||t(r)?"number"==typeof r?a.innerHTML.push(`${r}`):"string"==typeof r&&t(r)?a.class=s(`${a.class} ${r}`):void 0:a.innerHTML.push(r))),a.class=s(a.class),"string"==typeof a.innerHTML&&(a.innerHTML=[a.innerHTML]),a},c=(e=6)=>Array.from(Array(e)).map((()=>46656*Math.random()|0)).map((e=>("000"+e.toString(36)).slice(-3))).join("");export default new Proxy({UUID:c,MOUNT:(r,n)=>{const t=r=>{let n=" ";if("string"==typeof r)return r;if(null==r)return"";if(e(r)){const e={events:()=>(e=>{let r=[];return Array.isArray(e)||(e=[e]),e.forEach((e=>{if(e.on&&"string"==typeof e.on&&e.do){const n=`eventId${c(4)}`;s.push({id:n,listener:[e.on,e.do,"object"==typeof e.options?e.options:{}]}),r.push(n)}})),r})(r.events).forEach((e=>n+=a(e))),class:()=>null,__default:e=>n+="el"===e?"":a(e,r[e])};Object.keys(r).forEach((r=>e[r]?e[r]():e.__default(r)))}let l="";Array.isArray(r.innerHTML)&&r.innerHTML.forEach((e=>l+=t(e)));let o=i.includes(r.el)?null:`</${r.el}>`;return l=`<${r.el}${n}class="${r.class||""}"${o?">"+l+o:"/>"}`,l};let s=[],l="";Array.isArray(r)?r.forEach((e=>l+=t(e))):l=t(r),n.innerHTML=l,s.forEach((e=>{let r=n.querySelector(`[${e.id}]`);r&&(e.listener[1]=e.listener[1].bind?e.listener[1].bind(r):e.listener[1],r.addEventListener(...e.listener),r.removeAttribute(e.id),"load"===e.listener[0]&&r.dispatchEvent(new Event("load")))}))}},{get:(e,r)=>e[r]?e[r]:(...e)=>o(r,e)})