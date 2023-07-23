let display = document.getElementById('result');
let expression = '';

function addToDisplay(value) {
  
if (display.innerHTML == 'Welcome !') {
    display.innerHTML = '';
  }
  expression += value;
  display.innerHTML = expression;
}

function clearDisplay() {
  expression = '';
  display.innerHTML = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    expression = result.toString();
    display.innerHTML = expression;
  } catch (error) {
    alert('Invalid expression');
  }
}

