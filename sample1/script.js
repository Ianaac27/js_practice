//Info button function
var infoButton = document.getElementById('infoButton');
var info = document.querySelector(".info")

function displayInfo() {
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

//Stat button function
var statButton = document.getElementById('statButton');
var stats = document.querySelector(".stats")

function displayStats() {
    if (stats.style.display === "none") {
        stats.style.display = "block";
    } else {
        stats.style.display = "none";
    }
}



