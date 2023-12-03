// Select all the buttons and the result display
const buttons = document.querySelectorAll('.button');
const display = document.getElementById('result');

// Get the link element by its id
let link = document.getElementById("theme");

// Track the current theme state
let isDarkTheme = false;

// Track the current radian state
let isRadian = true;

// Track the current inverse state
let isInverse = false;

// Function to clear the display
function clearCalculator() {
    display.textContent = '';
}

// Function to evaluate the expression
function evaluateExpression() {
    try {
        // Add a closing bracket if one is missing
        let expression = display.textContent;
        let openBrackets = (expression.match(/\(/g) || []).length;
        let closeBrackets = (expression.match(/\)/g) || []).length;
        for(let i = 0; i < openBrackets - closeBrackets; i++) {
            expression += ')';
        }

        // Replace sin, cos, tan, √, π, e, and ^ with their JavaScript equivalents
        expression = expression.replace(/sin/g, isInverse ? (isRadian ? 'Math.asin' : 'radToDeg(Math.asin') : 'Math.sin');
        expression = expression.replace(/cos/g, isInverse ? (isRadian ? 'Math.acos' : 'radToDeg(Math.acos') : 'Math.cos');
        expression = expression.replace(/tan/g, isInverse ? (isRadian ? 'Math.atan' : 'radToDeg(Math.atan') : 'Math.tan');
        expression = expression.replace(/√(\d+)/g, 'Math.sqrt($1)');
        expression = expression.replace(/π/g, 'Math.PI');
        expression = expression.replace(/e/g, 'Math.E');
        expression = expression.replace(/\^/g, '**');
        expression = expression.replace(/log/g, 'Math.log10');
        expression = expression.replace(/ln/g, 'Math.log');

        // Evaluate the modified expression
        display.textContent = eval(expression);
    } catch {
        display.textContent = "Error!";
    }
}

// Function to delete the last character
function deleteLastCharacter() {
    display.textContent = display.textContent.slice(0, -1);
}

// Function to add text to the display
function addTextToDisplay(text) {
    display.textContent += text;
}

// Function to switch the theme
function switchTheme() {
    // Toggle the theme state
    isDarkTheme = !isDarkTheme;

    // Update the href based on the theme state
    link.href = isDarkTheme ? "styles/calculatorDark.css" : "styles/calculator.css";
    button.classList.toggle('active');
}

// Adding event listener to the buttons
buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // Check if the display shows "Error!"
        if (display.textContent === "Error!") {
            clearDisplay();
        }

        // Check the button's ID and call the appropriate function
        if (e.target.id === 'clear') {
            clearCalculator();
        } else if (e.target.id === 'equal') {
            evaluateExpression();
        } else if (e.target.id === 'delete') {
            deleteLastCharacter();
        } else if (e.target.id === 'sin' || e.target.id === 'cos' || e.target.id === 'tan' || e.target.id === 'log' || e.target.id === 'ln') {
            // Add the button's text and an opening bracket to the display
            addTextToDisplay(e.target.textContent + '(');
        } else if (e.target.id === 'rad') {
            isRadian = true;
            document.getElementById('rad').classList.add('toggled');
            document.getElementById('deg').classList.remove('toggled');
        } else if (e.target.id === 'deg') {
            isRadian = false;
            document.getElementById('deg').classList.add('toggled');
            document.getElementById('rad').classList.remove('toggled');
        } else if (e.target.id === 'inv') {
            isInverse = !isInverse;
            document.getElementById('inv').classList.toggle('toggled');
        } else {
            addTextToDisplay(e.target.textContent);
        }
    });
});

// Get the button element by its id
let button = document.getElementById("toggle");

// Add a click event listener to the button
button.addEventListener("click", switchTheme);

// Function to convert radians to degrees
function radToDeg(rad) {
    return rad * (180 / Math.PI);
}
