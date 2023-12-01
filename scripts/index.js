// Array of math characters
var mathChars = ['+', '-','%', '*', '/', '=', '%', '√', '^', 'π', 'e', '(', ')', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

for (let i = 0; i < 100; i++) {
    let char = document.createElement('div');
    char.className = 'char';
    char.style.left = Math.random() * 100 + 'vw';
    char.style.animationDuration = Math.random() * 10 + 10 + 's'; /* Increase these values for a wider range of random speeds */
    char.textContent = mathChars[Math.floor(Math.random() * mathChars.length)]; // Pick a random math character
    document.body.appendChild(char);
}
