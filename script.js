//On Submit, get values and store them

document.getElementById("submit").addEventListener("click", textSave)

function textSave() {
    let name = document.getElementById("name");
    let address = document.getElementById("address");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    console.log("text 1 = " + name + " text 2 = " + address);
};

// Clears values on page load
// This cane chagned later to clear in bulk, probably based on parent div
window.onload = function () {
    document.getElementById("name").value="";
    document.getElementById("address").value="";
    document.getElementById("city").value="";
    document.getElementById("state").value="";
    document.getElementById("zip").value="";
    document.getElementById("alias").value="";
    document.getElementById("path 1").value="";
    document.getElementById("path 2").value="";
}