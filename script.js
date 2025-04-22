let display = document.getElementById('display');

// Append values to the display
function appendToDisplay(value) {
  display.value += value;
}

// Clear the display
function clearDisplay() {
  display.value = '';
}

// Remove the last character
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
  try {
    if (display.value === '') return;

    // Evaluate the expression
    let result = eval(display.value);

    // Handle division by zero
    if (!isFinite(result)) {
      display.value = 'Error';
    } else {
      display.value = result;
    }
  } catch (error) {
    display.value = 'Error';
  }
}

// Optional: Handle keyboard input
document.addEventListener('keydown', (e) => {
  const allowedKeys = '0123456789+-*/.=';
  if (allowedKeys.includes(e.key)) {
    if (e.key === '=') {
      calculate();
    } else {
      appendToDisplay(e.key);
    }
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});

let memory = 0;

// Square Root
function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = 'Error';
  }
}

// Percentage
function percentage() {
  try {
    display.value = eval(display.value) / 100;
  } catch {
    display.value = 'Error';
  }
}

// Memory Functions
function memoryAdd() {
  try {
    memory += eval(display.value);
    display.value = '';
  } catch {
    display.value = 'Error';
  }
}

function memorySubtract() {
  try {
    memory -= eval(display.value);
    display.value = '';
  } catch {
    display.value = 'Error';
  }
}

function memoryRecall() {
  display.value += memory;
}

function memoryClear() {
  memory = 0;
}

