// This is my second time completing this item, as a I relearn JavaScript.
// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  return Math.round((fahren - 32) * (5 / 9));
}

// above function works per below console.log
// console.log(convertToCelsius(60));

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {
  message = "";

  if (fahren < 32) {
    message = `The temperature is ${fahren} Fahrenheit and ${celc} Celcius. Wear a coat--it's very cold!`;
  } else if (fahren < 64 && fahren > 31) {
    message = `The temperature is ${fahren} Fahrenheit and ${celc} Celcius. Wear a jacket--it's cold outside!`;
  } else if (fahren < 86 && fahren > 63) {
    message = `The temperature is ${fahren} Fahrenheit and ${celc} Celcius. Wear something breezy--it's warm out there!`;
  } else {
    message = `The temperature is ${fahren} Fahrenheit and ${celc} Celcius. Stay inside, it's way too hot.`;
  }

  return message;
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.floor(Math.random() * limit);
}

// -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
