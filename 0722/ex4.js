function add(a, b) {
    return a + b;
}
function ex4() {
    let result = add(3, 7);
    document.getElementById("result4").innerHTML = "Sum of numbers is " + result;
}
window.onload = ex4;