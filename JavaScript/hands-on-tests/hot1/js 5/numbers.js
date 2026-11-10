
function printNumbers() {
    let result = document.getElementById("result");
    result.innerHTML = "";

    for (let i = 15; i <= 100; i += 15) {
        result.innerHTML += i + "<br>";
    }
}
