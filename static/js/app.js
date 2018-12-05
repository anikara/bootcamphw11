// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");




submit.on("click", function() {


    d3.event.preventDefault();
  

    var inputdate = d3.select("#datetime").property("value");
    var inputcity = d3.select("#city").property("value").toLowerCase();
    var inputstate = d3.select("#state").property("value").toLowerCase();
    var inputcountry = d3.select("#country").property("value").toLowerCase();
    var inputshape= d3.select("#shape").property("value").toLowerCase();
  
    console.log([inputdate, inputcity, inputstate, inputcountry, inputshape]);
    //var filteredData = tableData.filter(sighting => sighting.datetime === inputdate && sighting.city === inputcity && sighting.country === inputcountry && sighting.state === inputstate  && sighting.shape === inputshape);
    var filteredData = tableData;
    if (inputdate != ""){filteredData.filter(sighting => sighting.datetime === inputdate)};
    if (inputcity != ""){filteredData = filteredData.filter(sighting => sighting.city === inputcity)};
    if (inputcountry != ""){filteredData = filteredData.filter(sighting => sighting.country === inputcountry)};
    if (inputstate != ""){filteredData = filteredData.filter(sighting => sighting.state === inputstate)};
    if (inputshape != ""){filteredData = filteredData.filter(sighting => sighting.shape === inputshape)};
    console.log(filteredData)

    filteredData.forEach((sighting) => {
    var newrow = d3.select("tbody").append("tr");
    newrow.append("td").text(sighting.datetime);
    newrow.append("td").text(sighting.city);
    newrow.append("td").text(sighting.state);
    newrow.append("td").text(sighting.country);
    newrow.append("td").text(sighting.shape);
    newrow.append("td").text(sighting.durationMinutes);
    newrow.append("td").text(sighting.comments);
    
    });



  });