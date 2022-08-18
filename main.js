// Variables
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const img = document.querySelectorAll(".slide-img");
const navDots = document.querySelectorAll(".dots");

// Slider || Carousel

// change slides
function slide() {
    slides.forEach((slide, i) => {
        slide.style.left = i * 100 + "%";
    });
};

// Navigation Buttons

// Navigation Dots