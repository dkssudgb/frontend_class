function ex6() {
    let person = {
        name: "이혜빈",
        age: 25
    };
    document.getElementById("result6").innerHTML = "이름: " + person.name + ", 나이: " + person.age;
}
window.onload = ex6;