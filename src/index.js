import displayHomepage from "./display-homepage";
import displayMenuPage from "./display-menu";
import displayAboutPage from "./display-about";

const mainContentBox = document.querySelector("#content");
const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");

displayHomepage();

homeButton.onclick = function () {
  while (mainContentBox.firstChild) {
    mainContentBox.removeChild(mainContentBox.firstChild);
  }
  homeButton.style.backgroundColor = "#f87171";
  menuButton.style.backgroundColor = "#fca5a5";
  aboutButton.style.backgroundColor = "#fca5a5";

  displayHomepage();
};

menuButton.onclick = function () {
  while (mainContentBox.firstChild) {
    mainContentBox.removeChild(mainContentBox.firstChild);
  }
  menuButton.style.backgroundColor = "#f87171";
  homeButton.style.backgroundColor = "#fca5a5";
  aboutButton.style.backgroundColor = "#fca5a5";
  displayMenuPage();
};

aboutButton.onclick = function () {
  while (mainContentBox.firstChild) {
    mainContentBox.removeChild(mainContentBox.firstChild);
  }
  aboutButton.style.backgroundColor = "#f87171";
  menuButton.style.backgroundColor = "#fca5a5";
  homeButton.style.backgroundColor = "#fca5a5";
  displayAboutPage();
};
