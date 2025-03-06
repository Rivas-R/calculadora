// script.js
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let currentOperator = "";
let shouldClearDisplay = true;

const images = [
    '/img/fire.jpg',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.png'
];
let currentImageIndex = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;
        console.log(buttonText); // Print buttonText to the console
        
        if (buttonText.match(/[0-9]/) || buttonText === ".") {
            if (shouldClearDisplay) {
                display.textContent = "";
                shouldClearDisplay = false;
            }
            if (buttonText === "." && display.textContent.includes(".")) {
                return;
            }
            display.textContent += buttonText;
        } else if (buttonText === "C") {
            display.textContent = "0";
            currentInput = "";
            currentOperator = "";
        } else if (buttonText === "=") {
            if (currentOperator && currentInput) {
                const result = calculate(parseFloat(currentInput), currentOperator, parseFloat(display.textContent));
                display.textContent = result;
                currentInput = result;
                currentOperator = "";
                shouldClearDisplay = true;
            }
        } else if (buttonText === "^") {
            const base = parseFloat(display.textContent);
            display.textContent = base * base;
            shouldClearDisplay = true;
        } else if (buttonText === "😊") {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            document.querySelector('.calculator').style.backgroundImage = `url(${images[currentImageIndex]})`;
            shouldClearDisplay = true;
        } else {
            display.textContent += buttonText;
            currentOperator = buttonText;
            currentInput = display.textContent;
        }
    });
});

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error";
            }
        default:
            return num2;
    }
}