// Variables
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const navDots = document.querySelectorAll(".dots");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

// Slider || Carousel

// change slides
function nextSlide() {
    //DONT FORGET TO ACTIVATE SCRIPT ON HTML FILE
    for (let i = 0; i <= slides.length -1; i++) {
        let slide = slides.item(i);

        // define center slide
        // define slides to right and left from center
        // hide any other slides
        if (slide.getAttribute("class").includes("slide--left")) {
            slide.removeAttribute("class", "slide--left");
            slide.setAttribute("class","slide--out");
        } else if (slide.getAttribute("class").includes("slide--center")) {
            slide.removeAttribute("class", "slide--center");
            slide.setAttribute("class","slide--left");
        } else if (slide.getAttribute("class").includes("slide--right")) {
            slide.removeAttribute("class", "slide--right");
            slide.setAttribute("class","slide--center");
            // if the last slide to the right is reached, grab the first slide from array to make a full circle
            if (!slide.nextElementSibling()) {
                slides[0].setAttribute("class", "slide--right");
            }
        } else if (slide.getAttribute("class").includes("slide--out")) {
            // if the slide is out and the previous slide has just become the center slide, then put slide on the right side
            if (slide.previousElementSibling().getAttribute("class").includes("slide--center")) {
                slide.removeAttribute("class", "slide--out");
                slide.setAttribute("class","slide--right");
            } else if (slide.previousElementSibling().getAttribute("class").includes("slide--right")) {
                // not the last slide, just stays out
            }
        }
    }
};

// Navigation Buttons

nextBtn.addEventListener("click", nextSlide());

// Navigation Dots