function ex3() {
    let result = 0;
    for (let n = 1; n <= 10; n++) {
        result += n;
    }
    document.getElementById("result3").innerHTML = "Summary from 1 to 10 is " + result;
}
window.onload = ex3;