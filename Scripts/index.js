var year = new Date().getFullYear();
document.getElementById("copyrightYear").innerHTML = year;

var contact = document.getElementById("contact");
var drop = document.getElementById("dropdown");

// function for dropdown menu

function getDropMenu() {
  var menu = document.getElementById("drop-down-menu");

  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// set dropdown to none on click outside of the menu
// var drop = document.getElementById("drop-down-menu");

// window.onclick = function (event) {
//   if (event.target == drop) {
//     drop.style.display = "none";
//   }
// };
