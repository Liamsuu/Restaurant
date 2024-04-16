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
  displayHomepage();
};

menuButton.onclick = function () {
  while (mainContentBox.firstChild) {
    mainContentBox.removeChild(mainContentBox.firstChild);
  }
  displayMenuPage();
};

aboutButton.onclick = function () {
  while (mainContentBox.firstChild) {
    mainContentBox.removeChild(mainContentBox.firstChild);
  }
  displayAboutPage();
};
