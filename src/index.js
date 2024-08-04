const menuBtn = document.getElementById("menuIcon");
const menu = document.getElementById("menu");
const body = document.getElementById("body");
let clicked = false;
menuBtn.addEventListener('click', function(){
    clicked = !clicked;
  
 
    if(clicked){
        menu.classList.remove("hidden","-left-72");
        body.classList.add("hidden");
    }

    else {
        menu.classList.add("hidden","-left-72");
        body.classList.remove("hidden");
    }
})