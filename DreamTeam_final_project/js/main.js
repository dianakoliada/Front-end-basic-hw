let change = document.querySelector('.about__image');

let images = [
    "url('../images/pattern.png')",
    "url('../images/pattern_02.png')",
    "url('../images/pattern_03.png')",
    "url('../images/pattern_04.png')",
    "url('../images/pattern_05.png')",
    "url('../images/pattern_06.png')"
]

setInterval(function (timeFraction) {
    let bg = images[Math.floor(Math.random() * images.length)];
    change.style.background = bg;
} ,300);