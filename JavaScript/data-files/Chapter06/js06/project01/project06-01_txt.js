"use strict";

/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author:
      Date:

      Filename: project06-01.js
*/

const submitButton = document.getElementById("submitButton");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", function() {

    if (!pwdPattern.test(pwd.value)) {
        validationMessage.textContent =
            "Your password must be at least 8 characters with at least one letter and one number";

        pwd.setCustomValidity("Invalid password");

    } else if (pwd.value !== pwd2.value) {
        validationMessage.textContent = "Your passwords do not match";

        pwd.setCustomValidity("");
        pwd2.setCustomValidity("Your passwords do not match");

    } else {
        validationMessage.textContent = "";

        pwd.setCustomValidity("");
        pwd2.setCustomValidity("");
    }

});