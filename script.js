var colors;
var targetColor;
var squareNumber = 6;
var buttons = document.querySelectorAll(".square");
var rgbDisplay = document.querySelector("#rgbDisplay");
var resetButton = document.querySelector("#resetButton");
var answerDisplay = document.getElementById("answer");
var topSection = document.getElementById("top");
var difficultyBtn = document.getElementsByClassName("difficulty");

init();

function init(){
    addSquares();
    addButtons();
    reset();
}
function addButtons(){
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            if (this.style.backgroundColor === targetColor) {
                answerDisplay.textContent = "Correct!";
                topSection.style.backgroundColor = targetColor;
                for (var i = 0; i < squareNumber; i++) {
                    buttons[i].style.backgroundColor = targetColor;
                }
                resetButton.textContent = "PLAY AGAIN?";
            } else {
                this.style.backgroundColor = "#303030";
                answerDisplay.textContent = "Try Again";
            }
        });
    }
    resetButton.addEventListener("click", reset);
}
function addSquares(){
    for (var i = 0; i < difficultyBtn.length; i++) {
        difficultyBtn[i].addEventListener("click", function () {
            if (this.textContent === "HARD") {
                squareNumber = 6;
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].style.display = "initial";
                }
            } else {
                squareNumber = 3;
                for (var i = 3; i < buttons.length; i++) {
                    buttons[i].style.display = "none";
                }
            }
            difficultyBtn[0].classList.remove("selected");
            difficultyBtn[1].classList.remove("selected");
            this.classList.add("selected");
            reset();
        });
    }
}
function reset(){
    topSection.style.backgroundColor = "#4682B4";
    colors = getRandomColors(squareNumber);
    targetColor = colors[Math.floor(Math.random() * squareNumber)];
    rgbDisplay.textContent = targetColor;
    for (var i = 0; i < buttons.length;i++){
        buttons[i].style.backgroundColor = "#303030";
        buttons[i].style.backgroundColor = colors[i];
    }
    resetButton.textContent = "NEW COLORS";
    answerDisplay.textContent = "";
}
function getRandomColors(num){
    var arr = [];
    for (var i = 0;i < num;i++){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        arr.push(rgb);
    }
    return arr;
}