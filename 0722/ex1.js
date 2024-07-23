function ex1(){
    let num1 = 5;
    let num2 = 10;
    let sum = num1 + num2;
    document.getElementById("result1").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + sum;
}

window.onload = ex1;