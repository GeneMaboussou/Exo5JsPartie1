document.getElementById("submit");submit.addEventListener('click',
function rest(){    
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;

    var result = (firstNumber % secondNumber);
    alert(result);

});