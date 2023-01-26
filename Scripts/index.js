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

function showVidView() {
  var vids = document.getElementsByClassName("vidcontainer")[0];
  var docs = document.getElementsByClassName("doccontainer")[0];
  var vidBar = document.getElementById("video-bar");
  var docBar = document.getElementById("doc-bar");

  vids.style.display = "flex";
  docs.style.display = "none";
  vidBar.style.backgroundColor = "white";
  docBar.style.backgroundColor = "rgb(180, 177, 177)";
}

function showDocView() {
  var vids = document.getElementsByClassName("vidcontainer")[0];
  var docs = document.getElementsByClassName("doccontainer")[0];
  var vidBar = document.getElementById("video-bar");
  var docBar = document.getElementById("doc-bar");

  vids.style.display = "none";
  docs.style.display = "flex";
  vidBar.style.backgroundColor = "rgb(180, 177, 177)";
  docBar.style.backgroundColor = "white";
}
