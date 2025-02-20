const res = require("express/lib/response");

function calculate(){
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    let result;
    result = parseInt(num1) + parseInt(num2);

    document.getElementById('result').innerText = "Result: " + result;
}

function resetFields(){
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerText = '';
}