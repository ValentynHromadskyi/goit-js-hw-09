var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const i={form:document.querySelector(".form"),button:document.querySelector('button[type="submit"]'),delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),body:document.querySelector("body")};let l,u,a=0,s=0,d=0;function p(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;l=setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.form.addEventListener("submit",(function(e){e.preventDefault(),s=i.amount.value,d=Number(i.step.value);let t=Number(i.delay.value),o=0;for(;a<s;a+=1)o+=1,p(o,t).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,{position:"center-top"})})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,{position:"center-top"})})),t+=d;u=setTimeout((()=>{i.button.disabled=!1}),t),o=0,a=0,i.button.disabled=!0,i.form.reset()})),i.button.disabled=!1,i.body.style.backgroundColor="MediumSeaGreen",i.form.style.cssText="position: absolute;top: 50%; left: 50%;transform: translateX(-50%) translateY(-50%);color: black ;font-size: 20px;letter-spacing: 2px;display: flex; gap: 30px;";
//# sourceMappingURL=03-promises.c3373d5b.js.map
