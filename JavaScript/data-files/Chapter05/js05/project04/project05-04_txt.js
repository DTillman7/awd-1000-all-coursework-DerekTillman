
"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Derek Tillman
      Date:   11/20/26

      Filename: project05-04.js
*/

// Node list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("dfn");

for (let i = 0; i < phrases.length; i++) {
    phrases[i].onclick = function() {

        // Create the phrase heading
        let phrase = document.createElement("h1");
        phrase.textContent = this.textContent;

        // Create the footnote paragraph
        let footnote = document.createElement("p");
        footnote.textContent = footnote[i];
        footnote.style = "font-style: italic; font-size: 1.2em;";

        // Create the close button
        let closeButton = document.createElement("input");
        closeButton.type = "button";
        closeButton.value = "Close Footnote";
        closeButton.style.cssText = "display: block; margin: 10px auto";

        // Open the popup window
        let popup = window.open(
            "",
            "footnote",
            "width=300,height=200,top=100,left=100"
        );

        // Style the popup window
        popup.document.body.style.cssText =
            "background-color: ivory; font-size: 16px; padding: 10px;";

        // Append elements to the popup
        popup.document.body.appendChild(phrase);
        popup.document.body.appendChild(footnote);
        popup.document.body.appendChild(closeButton);

        // Close the popup when clicked
        closeButton.onclick = function() {
            popup.close();
        };
    };
}
