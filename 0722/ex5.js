function ex5() {
    let arr = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    document.getElementById("result5").innerHTML = "The sum of the array is " + sum;
}
window.onload = ex5;