// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");


// Function to list reports 
var listReports = (reports) => {
  tbody.html("")
  reports.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  })
};


// console.log(tableData.filter(report => report.datetime === "1/1/2011"))


button.on("click", () => {
    // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

  var filteredData = tableData.filter(report => report.datetime === inputValue);

  console.log(filteredData);

  if (filteredData.length === 0) {
    listReports(tableData)
  } else {
    listReports(filteredData)
  }
  // listReports(filteredData.length ?  filteredData : tableData)

})

// Send data to HTML via D3.
listReports(tableData)


