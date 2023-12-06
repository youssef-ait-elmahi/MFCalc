// Array of math characters
// var mathChars = ['+', '-','%', '*', 'x', 'y', 'ʃ', '/', '=', '%', '√', '^', 'π', 'e', '(', ')', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// for (let i = 0; i < 80; i++) {
//     let char = document.createElement('div');
//     char.className = 'char';
//     char.style.left = Math.random() * 100 + 'vw';
//     char.style.animationDuration = Math.random() * 6 + 5 + 's'; /* Increase these values for a wider range of random speeds */
//     // char.style.fontSize = Math.random() * 15 + 10 + 'px'; /* Random font size between 10px and 30px */
//     char.textContent = mathChars[Math.floor(Math.random() * mathChars.length)]; // Pick a random math character
//     document.body.appendChild(char);
// }
    // Change the text and speed of the typing animation
    document.querySelector('.typewriter').textContent = 'Math in progress...';
    document.querySelector('.typewriter').style.animationDuration = '4.5s';