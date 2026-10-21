/*
    Student Name: Derek Tillman
    File Name: script.js
    Date: 10/21/26
*/
$(document).ready(function() {
    
    // Functionality for the Hide button
    $('#hideButton').click(function() {
        $('article p').hide('fast'); // Hides paragraphs inside articles smoothly
    });

    // Functionality for the Show button
    $('#showButton').click(function() {
        $('article p').show('fast'); // Shows paragraphs inside articles smoothly
    });
    
});