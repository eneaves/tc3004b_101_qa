function add() {
  const num1 = parseInt(document.getElementById('num1').value) || 0;
  const num2 = parseInt(document.getElementById('num2').value) || 0;

  // Llama al endpoint /add del backend
  fetch(`http://localhost:8080/add?num1=${num1}&num2=${num2}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('result').innerText = 'Result: ' + data;
    })
    .catch(error => console.error('Error:', error));
}

function subtract() {
  const num1 = parseInt(document.getElementById('num1').value) || 0;
  const num2 = parseInt(document.getElementById('num2').value) || 0;

  // Llama al endpoint /subtract del backend
  fetch(`http://localhost:8080/subtract?num1=${num1}&num2=${num2}`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('result').innerText = 'Result: ' + data;
    })
    .catch(error => console.error('Error:', error));
}

function resetFields() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').innerText = 'Result:';
}