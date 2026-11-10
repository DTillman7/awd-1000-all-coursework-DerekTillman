
function checkNumber() {
    let input = document.getElementById("numberInput").value;
    let result = document.getElementById("result");

    if (input.trim() === "" || isNaN(input)) {
        result.textContent = "Please enter a number, not a word.";
    }
    else if (input == 1) {
        result.textContent = "One is the loneliest number that you'll ever do.";
    }
    else if (input == 2) {
        result.textContent = "Two can be as bad as one. It's the loneliest number since the number one.";
    }
    else if (input == 3) {
        result.textContent = "There is no three.";
    }
    else {
        result.textContent = "You didn't enter a valid number.";
    }
}
