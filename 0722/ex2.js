function ex2() {
    let num = 5
    let result;
    if (num % 2 === 0)
        result = "even";
    else
        result = "odd"
    document.getElementById("result2").innerHTML = "The number is " + result;
}
window.onload = ex2;