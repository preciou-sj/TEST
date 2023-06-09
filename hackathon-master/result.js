document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the classification from the URL parameter
  var params = new URLSearchParams(window.location.search);
  var classification = params.get("classification");

  // Display the classification on the page
  var resultSection = document.getElementById("resultSection");
  resultSection.textContent = "Your classification: " + classification;
});
