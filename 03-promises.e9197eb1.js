const e=document.querySelector("form");e.addEventListener("submit",(o=>{o.preventDefault();return new FormData(e).forEach(((e,o)=>console.log(e,o))),new Promise(reject.then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})))}));
//# sourceMappingURL=03-promises.e9197eb1.js.map
