// Array of phone models sold by the company
let phones = ["Photon 6E", "Photon 6X", "Photon 7E", "Photon 7X", "Photon 8P"];

// Units sold in the previous quarter
let sales = [10281, 12255, 25718, 21403, 16142];

// Variable to calculate total sales
let totalSales = 0;

// Use the forEach() method to sum the sales
sales.forEach(addToTotal);

// For loop to generate bar chart of phone sales
for (let i = 0; i < phones.length; i++) {

   let barChart = "";

   // Calculate the percent of total sales
   let barPercent = 100 * sales[i] / totalSales;

   let cellTag;

   // Determine the table cell based on the phone model
   switch (phones[i]) {
      case "Photon 6E": cellTag = "<td class='group1'>"; break;
      case "Photon 6X": cellTag = "<td class='group2'>"; break;
      case "Photon 7E": cellTag = "<td class='group3'>"; break;
      case "Photon 7X": cellTag = "<td class='group4'>"; break;
      case "Photon 8P": cellTag = "<td class='group5'>"; break;
   }

   // Table cell containing phone and total sales
   barChart += "<tr><th>" + phones[i] + " (" + formatNumber(sales[i]) + ")</th>";

   // Create a table cell for each percentage value
   for (let j = 0; j <= barPercent; j++) {
      barChart += cellTag + "</td>";
   }

   barChart += "</tr>";

   // Insert chart into tbody
   document.querySelector("tbody").insertAdjacentHTML("beforeEnd", barChart);
}

// Callback function that adds sales to totalSales
function addToTotal(arrValue) {
   totalSales += arrValue;
}

// Function that formats numbers with thousands separators
function formatNumber(value) {
   return value.toLocaleString();
}