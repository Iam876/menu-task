
const hamburger = document.querySelector(".hamburger-lines");
const container = document.querySelector(".container");
const line1 = document.querySelector(".box1");
const line2 = document.querySelector(".box2");

hamburger.addEventListener("click", function () {
    container.classList.toggle('container-tab');
    line1.classList.toggle('line1');
    line2.classList.toggle('line2');
});
