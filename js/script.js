// =========================================
// PAGE LOAD
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("loaded");





// =========================================
// IMAGE SLIDER
// =========================================

const floatingText = document.getElementById("floating-text");

if (floatingText) {

    let startX = 0;
    let startY = 0;

    document.addEventListener("mousemove", (event) => {

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        if (startX === 0 && startY === 0) {
            startX = mouseX;
            startY = mouseY;
        }

        const distance = Math.sqrt(
            Math.pow(mouseX - startX, 2) +
            Math.pow(mouseY - startY, 2)
        );

        floatingText.style.left = mouseX + "px";
        floatingText.style.top = mouseY + "px";

        if (distance > 100) {
            floatingText.style.opacity = "0";
        } else {
            floatingText.style.opacity = "1";
        }

    });
}


// =========================================
// WORK HEADING FADE
// =========================================

const heading = document.querySelector(".work-heading p");

window.addEventListener("scroll", () => {

    const fadeStart = 100;
    const fadeEnd = 800;

    const opacity =
        1 - (window.scrollY - fadeStart) / (fadeEnd - fadeStart);

    if (heading) {
        heading.style.opacity = Math.max(0, Math.min(1, opacity));
    }

});


// =========================================
// IMAGE SLIDER
// =========================================

const images = [
    "images/my-photo.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg"
];

let currentImage = 0;

const sliderImage = document.getElementById("slider-image");

if (sliderImage) {
    setInterval(() => {

        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        sliderImage.src = images[currentImage];

    }, 5000);
}


const slider1Images = [
    "images/2.jpg",
    "images/4.jpg",
    "images/3.jpg",
    "images/5.jpg"
];

const slider2Images = [
    "images/2.jpg",
    "images/5.jpg",
    "images/8.jpg",
    "images/11.jpg"
];

const slider3Images = [
    "images/3.jpg",
    "images/6.jpg",
    "images/9.jpg",
    "images/12.jpg"
];


let index1 = 0;
let index2 = 0;
let index3 = 0;


const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");


setInterval(() => {

    index1++;

    if (index1 >= slider1Images.length) {
        index1 = 0;
    }

    slider1.src = slider1Images[index1];

}, 5000);


setInterval(() => {

    index2++;

    if (index2 >= slider2Images.length) {
        index2 = 0;
    }

    slider2.src = slider2Images[index2];

}, 5000);


setInterval(() => {

    index3++;

    if (index3 >= slider3Images.length) {
        index3 = 0;
    }

    slider3.src = slider3Images[index3];

}, 5000);

