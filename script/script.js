// calcultor

// selecting the input
const display = document.getElementById("display");

// this function will append the input value to the display input

function appendToDisplay(input) {
  display.value += input;
}

// this function will clear the all the values in the display area
function clearDisplay() {
  display.value = "";
}

// this function give equal value must be validate and give the result

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
