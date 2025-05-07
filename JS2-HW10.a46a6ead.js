let e=0,t=setInterval(()=>{alert("Через 5с буде повідомлення "+ ++e),5===e&&clearInterval(t)},5e3),l=document.querySelectorAll(".box"),r=0;setInterval(()=>{r+=5,l.forEach((e,t)=>{e.style.left=r+20*t+"px",e.style.width=50+10*Math.sin(r/10+t)+"px"})},100);
//# sourceMappingURL=JS2-HW10.a46a6ead.js.map
