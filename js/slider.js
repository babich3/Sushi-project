

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

function showSlide(index){

slides[current].classList.remove("active");

current = (index + slides.length) % slides.length;

slides[current].classList.add("active");

}

next.addEventListener("click", ()=>{

showSlide(current + 1);

});

prev.addEventListener("click", ()=>{

showSlide(current - 1);

});


    
