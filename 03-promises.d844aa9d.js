const e=document.querySelector("form");e.addEventListener("submit",(o=>{o.preventDefault();var n,l;new FormData(e).forEach(((e,o)=>console.log(e,o))),Math.random()>.3?console.log(`✅ Fulfilled promise ${n} in ${l}ms`):console.log(`❌ Rejected promise ${n} in ${l}ms`)}));
//# sourceMappingURL=03-promises.d844aa9d.js.map
