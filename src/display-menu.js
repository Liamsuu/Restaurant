import "./index.css";
import diningImage from "./pexels-elina-sazonova-1850595.jpg";

export default function displayMenuPage() {
  const contentBox = document.querySelector("#content");
  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "Our Delightful Menu";
  menuHeading.id = "menu-heading";
  const ulList = document.createElement("ul");
  const menuItems = ["Truffles", "Saffron", "Kobe Beef", "Oysters", "Caviar"];

  for (let x = 0; x < 5; x++) {
    const listElement = document.createElement("li");
    listElement.className = "menu-items";
    listElement.textContent = menuItems[x];
    ulList.appendChild(listElement);
  }

  const menuImg = new Image();
  menuImg.src = diningImage;
  menuImg.id = "menu-img";

  contentBox.appendChild(menuHeading);
  contentBox.appendChild(ulList);
  contentBox.appendChild(menuImg);
}
