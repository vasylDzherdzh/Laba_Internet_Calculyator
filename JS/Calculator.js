

function sum()
{
    let num1, num2, result;
    num1 = document.getElementById('x').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('y').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById('out').innerHTML = result;
}

function subtract()
{
    let num1, num2, result;
    num1 = document.getElementById('x').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('y').value;
    num2 = parseInt(num2);
    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}