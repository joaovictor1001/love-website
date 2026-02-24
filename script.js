document.addEventListener("DOMContentLoaded", function () {



/* LOADING */

setTimeout(()=>{

document.getElementById("loading-screen").style.display="none";

document.getElementById("main-content").classList.remove("hidden");

},2000);



/* BOTÃO SCROLL */

let botao=document.getElementById("start-btn");

botao.addEventListener("click",()=>{

document.getElementById("galeria")
.scrollIntoView({

behavior:"smooth"

});

});



/* TEXTO DIGITANDO */

new Typed("#typed-text",{

strings:[

"Feliz aniversário ❤️",

"Eu te amo muito 💖"

],

typeSpeed:50,
backSpeed:30,
loop:true,
showCursor:false

});



/* CARTA */

let envelope=document.getElementById("envelope");

let janela=document.getElementById("janela");

let fim=document.getElementById("fim");


envelope.addEventListener("click",()=>{

envelope.classList.add("abrir");

setTimeout(()=>{

janela.classList.add("ativa");

},800);

});



/* BOTÃO FINAL */

fim.addEventListener("click",()=>{

window.location.href="final.html";

});


});