// Variables
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const navDots = document.querySelectorAll(".dots");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
let lastSlide = slides.item(slides.length - 1);

// Slider || Carousel

// change slides

function nextSlide() {

    // place last slide of array out of layout before starting the loop for the first time after loading page, because it is to the left in the beginning
    if (lastSlide.getAttribute("class").includes("slide--left")) {
        lastSlide.removeAttribute("class", "slide--left");
        lastSlide.setAttribute("class","slide--out");
    }

    for (let i = 0; i <= slides.length - 1; i++) {
        let slide = slides.item(i);

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
            if (i === slides.length-1) {
                slides.item(0).setAttribute("class", "slide--right");
            }
        } else if (slide.getAttribute("class").includes("slide--out")) {
            // if the slide is out and the previous slide has just become the center slide, then put slide on the right side
            if (slide.previousElementSibling) {
                if (slide.previousElementSibling.getAttribute("class").includes("slide--center")) {
                slide.removeAttribute("class", "slide--out");
                slide.setAttribute("class","slide--right");
                }
            }
        }
    }
};

function prevSlide() {

    for (let i = slides.length - 1; i > -1; i--) {
        let slide = slides.item(i);

        if (slide.getAttribute("class").includes("slide--left")) {
            slide.removeAttribute("class", "slide--left");
            slide.setAttribute("class","slide--center");
            // if the last slide to the left is reached, grab the first slide from array to make a full circle
            if (i == 0) {
                slides.item(slides.length-1).setAttribute("class", "slide--left");
            }
        } else if (slide.getAttribute("class").includes("slide--center")) {
            slide.removeAttribute("class", "slide--center");
            slide.setAttribute("class","slide--right");
        } else if (slide.getAttribute("class").includes("slide--right")) {
            slide.removeAttribute("class", "slide--right");
            slide.setAttribute("class","slide--out");
        } else if (slide.getAttribute("class").includes("slide--out")) {
            // if the slide is out and the next slide has just become the center slide, then put slide on the left side
            if (slide.nextElementSibling) {
                if (slide.nextElementSibling.getAttribute("class").includes("slide--center")) {
                slide.removeAttribute("class", "slide--out");
                slide.setAttribute("class","slide--left");
                }
            }
        }
    }
};


// Navigation Buttons

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Navigation Dots