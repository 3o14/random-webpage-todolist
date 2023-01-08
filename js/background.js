const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
const body = document.body;

body.style.backgroundImage = `url('img/${chosenImage}')`;
body.style.backgroundSize = '100%';


console.log(bgImage);
// document.body.appendChild(bgImage);