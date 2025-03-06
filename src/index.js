function add() {
    const num1 = parseInt(document.getElementById('num1').value) || 0;
    const num2 = parseInt(document.getElementById('num2').value) || 0;
  
    const result = num1 + num2;
    document.getElementById('result').innerText = 'Result: ' + result;
  }
  
  function subtract() {
    const num1 = parseInt(document.getElementById('num1').value) || 0;
    const num2 = parseInt(document.getElementById('num2').value) || 0;
  
    const result = num1 - num2;
    document.getElementById('result').innerText = 'Result: ' + result;
  }
  
  function resetFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerText = 'Result:';
  }
  