//Info button variables
var infoButton = document.getElementById('infoButton');
var info = document.querySelector(".info")

//Stat button variables
var statButton = document.getElementById('statButton');
var stats = document.querySelector(".stats")

//Button functions
function displayInfo() {
    if (info.style.display === "none") {
        info.style.display = "block";
        stats.style.display = "none";
    } else {
        info.style.display = "none";
    }
}
function displayStats() {
    if (stats.style.display === "none") {
        stats.style.display = "block";
        info.style.display = "none";
    } else {
        stats.style.display = "none";
    }
}

