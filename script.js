// var mbar = document.querySelector('.mbar');
// var mbarhiddden = document.querySelector('.mbarhidden');
// var mbar = document.querySelector('.responsive');
// var mbar = document.querySelector('.hide');
// var hamicon = document.querySelector('.hamicon');
var ham = document.querySelector('#ham');
var anch = document.querySelector('#anch');
var navmenu = document.querySelector('#nav-menu');
var navbarmenu =document.querySelector('#navbarmenu')
// var navbarmenulast =document.querySelector('#navbarmenu').lastElementChild

function hideandseek(){
    if(window.innerWidth < 416){
        // alert("mobile");
        navbarmenu.classList.remove("navbar");
        navbarmenu.classList.remove("mbar");
        navbarmenu.classList.add("mbarhidden");
        navmenu.classList.remove("menu");
        navmenu.classList.remove("responsive");
        navmenu.classList.add("hide");
    }
    else if(window.innerWidth > 416){
        // alert("desktop/ipad");
        navbarmenu.classList.remove("mbar");
        navbarmenu.classList.remove("mbarhidden");
        navbarmenu.classList.add("navbar");
        navmenu.classList.remove("responsive");
        navmenu.classList.remove("hide");
        navmenu.classList.add("menu");
        ham.remove();
    }
}
window.addEventListener("resize", hideandseek);
window.addEventListener("load", hideandseek);


