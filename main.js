// Variables

const slides = document.querySelectorAll(".slide");
const navDots = document.querySelectorAll(".dot");
const navDotStart = navDots.item(0);
const navDotPrev = navDots.item(1);
const navDotNext = navDots.item(2);
const navDotEnd = navDots.item(3);
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const leftSlide = slides.item(slides.length - 1);
const centerSlide = slides.item(0);
const rightSlide = slides.item(1);
const navNum = document.querySelector(".navigation-num");
let pagNum;
// Functions

// Pagination

function getCenterSlide() {
    for (let i = 0; i <= slides.length - 1; i++) {
        let slide = slides.item(i);
        if (slide.getAttribute("class").includes("slide--center")) {
            pagNum = i + 1;
        }
    }
    navNum.textContent = `${pagNum}`;
};

    // Navigation dots

// resets to first slide
function start() {
    
    for (const slide of slides) {
        slide.removeAttribute("class");
    };
    leftSlide.setAttribute("class", "slide slide--left");
    centerSlide.setAttribute("class", "slide slide--center");
    rightSlide.setAttribute("class", "slide slide--right");
    for (const slide of slides) {
        if (!slide.getAttribute("class")) {
        slide.setAttribute("class", "slide slide--out");
        }
    };
    getCenterSlide();
};

// resets to last slide
function end() {
    
    for (const slide of slides) {
        slide.removeAttribute("class");
    };
    leftSlide.setAttribute("class", "slide slide--center");
    centerSlide.setAttribute("class", "slide slide--right");
    slides.item(slides.length - 2).setAttribute("class", "slide slide--left");
    for (const slide of slides) {
        if (!slide.getAttribute("class")) {
        slide.setAttribute("class", "slide slide--out");
        }
    };
    getCenterSlide();
};

    // Arrow Buttons

function nextSlide() {

    // place last slide of array out of layout before starting the loop for the first time after loading page, because it is to the left in the beginning
    if (leftSlide.getAttribute("class").includes("slide--left")) {
        leftSlide.removeAttribute("class", "slide--left");
        leftSlide.setAttribute("class","slide--out");
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
    };
    getCenterSlide();
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
    };
    getCenterSlide();
};

// Events

    // Arrow Buttons

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

    // Navigation Dots

navDotStart.addEventListener("click", start);
navDotPrev.addEventListener("click", prevSlide);
navDotNext.addEventListener("click", nextSlide);
navDotEnd.addEventListener("click", end);