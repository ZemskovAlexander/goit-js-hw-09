const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]"),o=document.querySelector("body");let r=null;e.addEventListener("click",(()=>{$f00cafd61c2e1654$export$39e04e72f972b885||($f00cafd61c2e1654$export$39e04e72f972b885=!0,r=setInterval((()=>{console.log(`Interval with id ${r} has run!`),o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),t.addEventListener("click",(()=>{clearInterval(r),console.log(`Interval with id ${r} has stopped!`)}));
//# sourceMappingURL=01-color-switcher.6caed1a6.js.map