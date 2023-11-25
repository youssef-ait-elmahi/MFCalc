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

// Length Converter
document.getElementById('convertLength').addEventListener('click', function() {
  var length = document.getElementById('length').value;
  var lengthSource = document.getElementById('lengthSource').value;
  var lengthTarget = document.getElementById('lengthTarget').value;

  var conversionRates = {
      meters: 1,
      kilometers: 0.001,
      miles: 0.000621371,
      yards: 1.09361,
      feet: 3.28084,
      inches: 39.3701
  };

  var convertedLength = length / conversionRates[lengthSource] * conversionRates[lengthTarget];

  document.getElementById('lengthOutput').value = convertedLength;
});


// Weight Converter
document.getElementById('convertWeight').addEventListener('click', function() {
  var weight = document.getElementById('weight').value;
  var weightSource = document.getElementById('weightSource').value;
  var weightTarget = document.getElementById('weightTarget').value;

  var conversionRates = {
      grams: 1,
      kilograms: 0.001,
      ounces: 0.035274,
      pounds: 0.00220462,
      stones: 0.000157473
  };

  var convertedWeight = weight / conversionRates[weightSource] * conversionRates[weightTarget];

  document.getElementById('weightOutput').value = convertedWeight;
});

// Speed Converter
document.getElementById('convertSpeed').addEventListener('click', function() {
  var speed = document.getElementById('speed').value;
  var speedSource = document.getElementById('speedSource').value;
  var speedTarget = document.getElementById('speedTarget').value;

  var conversionRates = {
      kph: 1,
      mph: 1.60934,
      mps: 0.277778,
      fps: 0.911344
  };

  var convertedSpeed = speed * conversionRates[speedSource] / conversionRates[speedTarget];

  document.getElementById('speedOutput').value = convertedSpeed;
});


// Time Converter
document.getElementById('convertTime').addEventListener('click', function() {
  var time = document.getElementById('time').value;
  var timeSource = document.getElementById('timeSource').value;
  var timeTarget = document.getElementById('timeTarget').value;

  var conversionRates = {
      seconds: 1,
      minutes: 60,
      hours: 3600,
      days: 86400,
      weeks: 604800,
      months: 2628000,
      years: 31536000
  };

  var convertedTime = time * conversionRates[timeSource] / conversionRates[timeTarget];

  document.getElementById('timeOutput').value = convertedTime;
});

// Area Converter
document.getElementById('convertArea').addEventListener('click', function() {
  var area = document.getElementById('area').value;
  var areaSource = document.getElementById('areaSource').value;
  var areaTarget = document.getElementById('areaTarget').value;

  var conversionRates = {
      sqMeters: 1,
      sqKilometers: 0.000001,
      sqMiles: 0.000000386102,
      acres: 0.000247105,
      hectares: 0.0001
  };

  var convertedArea = area / conversionRates[areaSource] * conversionRates[areaTarget];

  document.getElementById('areaOutput').value = convertedArea;
});

// Volume Converter
document.getElementById('convertVolume').addEventListener('click', function() {
  var volume = document.getElementById('volume').value;
  var volumeSource = document.getElementById('volumeSource').value;
  var volumeTarget = document.getElementById('volumeTarget').value;

  var conversionRates = {
      liters: 1,
      milliliters: 1000,
      cubicMeters: 0.001,
      cubicFeet: 0.0353147,
      gallons: 0.264172,
      pints: 2.11338
  };

  var convertedVolume = volume / conversionRates[volumeSource] * conversionRates[volumeTarget];

  document.getElementById('volumeOutput').value = convertedVolume;
});

