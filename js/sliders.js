const slider1Images = [
    "images/my-photo.jpg",
    "images/4.jpg",
    "images/6_pan.jpg",
    "images/2.jpg"
];

const slider2Images = [
    "images/2.jpg",
    "images/5.jpg",
    "images/8.jpg",
    "images/11.jpg"
];

const slider3Images = [
    "images/4.jpg",
    "images/2.jpg",
    "images/5.jpg",
    "images/my-photo.jpg"
];


let index1 = 0;
let index2 = 0;
let index3 = 0;


const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");


if (slider1) {
    setInterval(() => {

        index1++;

        if (index1 >= slider1Images.length) {
            index1 = 0;
        }

        slider1.src = slider1Images[index1];

    }, 5000);
}


if (slider2) {
    setInterval(() => {

        index2++;

        if (index2 >= slider2Images.length) {
            index2 = 0;
        }

        slider2.src = slider2Images[index2];

    }, 5000);
}


if (slider3) {
    setInterval(() => {

        index3++;

        if (index3 >= slider3Images.length) {
            index3 = 0;
        }

        slider3.src = slider3Images[index3];

    }, 5000);
}
