
// Function to verify the user's age
function verifyAge() {

    let ageInput = document.getElementById("ageInput").value;
    let result = document.getElementById("result");

    // Check if the user entered an integer
    if (ageInput.trim() === "" || !/^-?\d+$/.test(ageInput.trim())) {
        result.textContent = "Please enter your age!";
    }

    // Convert input to an integer
    else {
        let age = parseInt(ageInput);

        // Check if age is in the correct range
        if (age < 1 || age > 200) {
            result.textContent = "Age out of range!";
        }

        // Check if user is 21 or older
        else if (age >= 21) {
            result.textContent = "Welcome to the venue!";
        }

        // User is under 21
        else {
            result.textContent = "You're not old enough!";
        }
    }
}
