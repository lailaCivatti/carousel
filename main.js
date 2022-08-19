// Variables
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const navDots = document.querySelectorAll(".dots");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
let lastSlide = slides.item(slides.length-1);

// Slider || Carousel

// change slides
function nextSlide() {

    // place last slide out of layout before starting the loop for the first time after loading page
    if (lastSlide.getAttribute("class").includes("slide--left")) {
        lastSlide.removeAttribute("class", "slide--left");
        lastSlide.setAttribute("class","slide--out");
    }

    for (let i = 0; i <= slides.length-1; i++) {
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
            console.log(i);
            console.log(slides.length-1);
            // if the last slide to the right is reached, grab the first slide from array to make a full circle
            if (i === slides.length-1) {
                console.log("entered no-right-slide loop");
                slides.item(0).setAttribute("class", "slide--right");
            }
        } else if (slide.getAttribute("class").includes("slide--out")) {
            // if the slide is out and the previous slide has just become the center slide, then put slide on the right side
            if (slide.previousElementSibling) {
                if (slide.previousElementSibling.getAttribute("class").includes("slide--center")) {
                slide.removeAttribute("class", "slide--out");
                slide.setAttribute("class","slide--right");
                };
            };
        };
    };
};

// Navigation Buttons

nextBtn.addEventListener("click", nextSlide);

// Navigation Dots