// var css=document.createElement("h3");
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var musicBox = document.querySelector('.music-box');

const setGradient = () => {
    body.style.background = "linear-gradient( to right," + color1.value + " ," + color2.value + ")";
    musicBox.classList.replace('music-box', 'music-box-bac');

}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);