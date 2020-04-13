// from data.js
var tableData = data;

// Select the button
var button = d3.select("#button");

// console.log(tableData.filter(report => report.datetime === "1/1/2011"))
console.log("hi")
button.on("click", function() {
    console.log("hi")

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

  var filteredData = tableData.filter(report => report.datetime === inputValue);

  console.log(filteredData);

});


// // // Send data to HTML via D3.
// // data.forEach((ufoSightingReport) => {
// //   var row = tbody.append("tr");
// //   Object.entries(ufoSightingReport).forEach(([key, value]) => {
// //     var cell = row.append("td");
// //     cell.text(value);
// //   });
// // });

// Get a reference to the table body
var tbody = d3.select("tbody");

// Send data to HTML via D3.
tableData.forEach((ufoSightingReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightingReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



