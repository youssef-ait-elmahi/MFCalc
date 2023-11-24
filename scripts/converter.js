// Get the input elements
const dec = document.getElementById("dec");
const hex = document.getElementById("hex");
const bin = document.getElementById("bin");
const oct = document.getElementById("oct");

// Add input event listeners to each element
dec.addEventListener("input", function () {
  // Convert the decimal value to other bases
  let value = parseInt(dec.value, 10);
  hex.value = value.toString(16);
  bin.value = value.toString(2);
  oct.value = value.toString(8);
});

hex.addEventListener("input", function () {
  // Remove non-hexadecimal characters
  hex.value = hex.value.replace(/[^a-fA-F0-9]/g, '');

  // Convert the hexadecimal value to other bases
  let value = parseInt(hex.value, 16);
  dec.value = value.toString(10);
  bin.value = value.toString(2);
  oct.value = value.toString(8);
});
bin.addEventListener("input", function () {
    // Remove non-binary characters (only allow 0 and 1)
    bin.value = bin.value.replace(/[^0-1]/g, '');
  // Convert the binary value to other bases
  let value = parseInt(bin.value, 2);
  dec.value = value.toString(10);
  hex.value = value.toString(16);
  oct.value = value.toString(8);
});

oct.addEventListener("input", function () {
    // Remove non-octal characters (only allow 0 to 7)
    oct.value = oct.value.replace(/[^0-7]/g, '');
  // Convert the octal value to other bases
  let value = parseInt(oct.value, 8);
  dec.value = value.toString(10);
  hex.value = value.toString(16);
  bin.value = value.toString(2);
});

// Get the input, source, target, convert and output elements
const input = document.getElementById("input");
const source = document.getElementById("source");
const target = document.getElementById("target");
const convert = document.getElementById("convert");
const output = document.getElementById("output");

// Define a function to convert the value from one unit to another
function convertValue(value, from, to) {
  // Define an object to store the conversion factors
  const factors = {
    bytes: 1,
    kB: 1024,
    MB: 1024 ** 2,
    GB: 1024 ** 3,
    TB: 1024 ** 4,
  };

  // Check if the value, from and to are valid
  if (value && from && to) {
    // Convert the value to bytes
    let bytes = value * factors[from];

    // Convert the bytes to the target unit
    let result = bytes / factors[to];

    // Return the result
    return result;
  } else {
    // Return null
    return null;
  }
}

// Add a click event listener to the convert button
convert.addEventListener("click", function () {
  // Get the input value, source unit and target unit
  let value = input.value;
  let from = source.value;
  let to = target.value;

  // Call the convertValue function to get the result
  let result = convertValue(value, from, to);

  // Check if the result is not null
  if (result !== null) {
    // Display the result on the output element
    output.value = result;
  } else {
    // Display an error message on the output element
    output.textContent = "Please enter a valid value and units.";
  }
});
