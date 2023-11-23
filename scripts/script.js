// Selecting all the buttons and the result display
const buttons = document.querySelectorAll('.button');
const display = document.getElementById('result');

// Get the link element by its id
let link = document.getElementById("theme");

// Track the current theme state
let isDarkTheme = false;

// Adding event listener to the buttons
buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // Check if clear button is pressed
        if (e.target.id === 'clear') {
            display.textContent = '';
        }
        // Check if equal button is pressed
        else if (e.target.id === 'equal') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Error!";
            }
        }
        // Check if delete button is pressed
        else if (e.target.id === 'delete') {
            display.textContent = display.textContent.slice(0, -1);
        }
        // Otherwise, add the clicked button's text to the display
        else {
            display.textContent += e.target.textContent;
        }
    });
});

function switchTheme() {
    // Toggle the theme state
    isDarkTheme = !isDarkTheme;

    // Update the href based on the theme state
    link.href = isDarkTheme ? "styles/calculatorDark.css" : "styles/calculator.css";
}

// Get the button element by its id
let button = document.getElementById("toggle");

// Add a click event listener to the button
button.addEventListener("click", switchTheme);
