var infoButton = document.getElementById('infoButton');
var info = document.querySelector(".info") 

function displayInfo() {
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}