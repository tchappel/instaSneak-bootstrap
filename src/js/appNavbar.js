const sidenav = document.getElementById("sidenav");
function closeSidenav() {
  sidenav.classList.remove("open");
  sidenav.classList.add("closed");
  setTimeout(function() {
    sidenav.classList.remove("closed");
  }, 500);
}
function toggleSidenav() {
  if (sidenav.classList.contains("open")) {
    closeSidenav();
  } else if (!sidenav.classList.contains("open")) {
    sidenav.classList.add("open");
  }
}

const menuFive = document.querySelector(".menuFive");

function addClassFunFive() {
  this.classList.toggle("clickMenuFive");
}

menuFive.addEventListener("click", addClassFunFive);
