let closes = document.querySelectorAll(".close");
let enters = document.querySelectorAll(".enter");
let content = document.querySelector(".content");

closes.forEach(function(close){
    close.addEventListener('click', function(ev){
        ev.preventDefault();
        content.classList.remove("animated");
        content.classList.remove("bounceInRight");
        content.classList.add("animated");
        content.classList.add("bounceOutRight");
        setTimeout(() => {
            location.href="../index.html";
        }, 500);
    });
})