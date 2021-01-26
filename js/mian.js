'use strict'
const navBar = document.querySelector('.navbar');
const bars = document.querySelector('.fa-bars');
const barsMenu = document.querySelector('.navbar_menu')

function barsClick(){
    barsMenu.classList.toggle('barsClick');
}

function scrollEvent(){
    const scrolly = window.scrollY;
    if(scrolly > 10){
        navBar.classList.add('sticky');
    } else{
        navBar.classList.remove('sticky');
    }
}

function init(){
    window.addEventListener("scroll",scrollEvent);
    bars.addEventListener("click", barsClick);
}
init();