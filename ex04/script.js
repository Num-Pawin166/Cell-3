$(document).ready(function() {
  function isPositiveInteger(value) {
    return /^\d+$/.test(value);
  }

  function calculate() {
    const left = $('#left').val();
    const right = $('#right').val();
    const operator = $('#operator').val();

    if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
      alert('Error :(');
      return;
    }

    const num1 = parseInt(left, 10);
    const num2 = parseInt(right, 10);

    if ((operator === '/' || operator === '%') && num2 === 0) {
      alert("It's over 9000!");
      console.log("It's over 9000!");
      return;
    }

    let result;
    switch(operator) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': result = num1 / num2; break;
      case '%': result = num1 % num2; break;
    }

    alert("Result: " + result);
    console.log("Result: " + result);
  }

  $('#calc-btn').click(calculate);

  setInterval(() => {
    alert("Please, use me...");
  }, 30000);
});
