let currentExpression = '';

function appendToScreen(value) {
  currentExpression += value;
  document.getElementById('result-screen').value = currentExpression;
}

function calculate() {
  try {
    const result = eval(currentExpression);
    document.getElementById('result-screen').value = result;
    currentExpression = result.toString();
  } catch (error) {
    document.getElementById('result-screen').value = 'Error';
    currentExpression = '';
  }
}

function clearScreen() {
  currentExpression = '';
  document.getElementById('result-screen').value = '';
}
