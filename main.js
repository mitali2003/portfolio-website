let menu=document.querySelector('#menubar');
let header=document.querySelector('header');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active')
}

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    header.classList.remove('active')
}

