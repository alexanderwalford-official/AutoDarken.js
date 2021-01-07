// Automatic dark / light mode system.
// Alexander Walford 2021

let today = new Date() // Get Current Date & Time
let currentHour = today.getHours() // Gets The Current Hour

if (currentHour < 7) {
  ActivateDarkMode();
}
else if (currentHour < 20) {
  ActivateLightMode();
}
else {
  ActivateDarkMode();
}

// Dark Mode
function ActivateDarkMode () {
console.log("Dark Mode Active");
document.body.style.backgroundColor = "black";
document.getElementById("WhiteText").style.color = "white"; // Sets the elements with the id of "WhiteText" to white.
}

// Light Mode
function ActivateLightMode () {
console.log("Light Mode Active");
document.body.style.backgroundColor = "white";
}