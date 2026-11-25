/*    JavaScript 7th Edition
      Chapter 3
      Project 03-05

      Application to generate a horizontal bar chart
      Author: 
      Date:   

      Filename: project03-05.js
*/
// Array of phone models sold by the company
let phones = ["Photon 6E", "Photon 6X", "Photon 7E", "Photon 7X", "Photon 8P"];

// Units sold in the previous quarter
let sales = [10281, 12255, 25718, 21403, 16142];

// Variable to calculate total sales
let totalSales = 0;

// Use the forEach() method to sum the sales for each phone model
sales.forEach(addToTotal);

// For loop to generate bar chart of phone sales
for (let i = 0; i < phones.length; i++) {

   let barChart = "";

   // Calculate the percent of total sales
   let barPercent = 100 * sales[i] / totalSales;

   let cellTag;

   // Determine the table cell based on the value of the phone model
   switch (phones[i]) {
      case "Photon 6E": cellTag = "<td class='group1'>"; break;
      case "Photon 6X": cellTag = "<td class='group2'>"; break;
      case "Photon 7E": cellTag = "<td class='group3'>"; break;
      case "Photon 7X": cellTag = "<td class='group4'>"; break;
      case "Photon 8P": cellTag = "<td class='group5'>"; break;
   }

   // Table cell containing information on phone and total sales
   barChart += "<tr><th>" + phones[i] + " (" + formatNumber(sales[i]) + ")</th>";

   // For loop to create table cells
   for (let j = 0; j < barPercent; j++) {
      barChart += cellTag + "</td>";
   }

   barChart += "</tr>";

   // Insert HTML code into first tbody element
   document.getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeEnd", barChart);
}


// Callback function that adds each array element to totalSales
function addToTotal(arrValue) {
   totalSales += arrValue;
}


// Function that formats numbers with a thousands separator
function formatNumber(value) {
   return value.toLocaleString();
}
