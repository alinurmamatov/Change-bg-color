let button = document.querySelector("#clickMe");
//let active = document.querySelector(".active");
let span = document.querySelector("span");
let main = document.querySelector("main");
let simple = document.querySelector("#simple");
let hex = document.querySelector("#hex");
let simpleIsOn = true;
let hexIsOn = false;

let simpleColors = ["Red", "White", "Blue", "Yellow", "Green", "Orange", "Black", "Purple", "Gray"];

hex.addEventListener("click", hexClicked);

function hexClicked() {
    hex.classList.add("active");
    simple.classList.remove("active");
    simpleIsOn = false;
    hexIsOn = true;
}
simple.addEventListener("click", function () {
    hex.classList.remove("active");
    simple.classList.add("active");
    simpleIsOn = true;
    hexIsOn = false;
});

button.addEventListener("click", function () {
    if (simpleIsOn) {
        let randomIndex = Math.floor(Math.random() * simpleColors.length);
        let randomColor = simpleColors[randomIndex];
        span.innerHTML = randomColor;
        main.style.backgroundColor = randomColor;
    } else {
        let randomHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        span.innerHTML = randomHex;
        main.style.backgroundColor = randomHex;
    }
})