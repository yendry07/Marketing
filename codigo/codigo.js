const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');
const sombra = document.querySelectorAll('.sombra');
const sombraInterna = document.querySelectorAll('.sombra-interna');
const flechaInterna = document.querySelectorAll('.flecha-interna');
const flecha = document.querySelectorAll('.flecha');

console.log(hamburguer)
console.log(menu)

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
}) 

window.addEventListener('click' , e=>{
    if(menu.classList.contains('spread') && e.target != hamburguer && e.target != menu  ){
        menu.classList.toggle("spread");

    }
})

flecha[0].addEventListener('click', ()=>{
    sombra[0].classList.toggle("sombraDespues");
    sombraInterna[0].classList.toggle("sombra-internaDespues");
    flechaInterna[0].classList.toggle("flechaDespues");
})

flecha[1].addEventListener('click', ()=>{
    sombra[1].classList.toggle("sombraDespues");
    sombraInterna[1].classList.toggle("sombra-internaDespues");
    flechaInterna[1].classList.toggle("flechaDespues");
})

flecha[2].addEventListener('click', ()=>{
    sombra[2].classList.toggle("sombraDespues");
    sombraInterna[2].classList.toggle("sombra-internaDespues");
    flechaInterna[2].classList.toggle("flechaDespues");
})

console.log(sombra);