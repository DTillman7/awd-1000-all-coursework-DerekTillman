
function printOddNumbers() {
    let result = document.getElementById("result");
    result.innerHTML = "";

    for (let i = 1; i <= 100; i += 2) {
        result.innerHTML += i + "<br>";
    }
}
