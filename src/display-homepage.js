import "./index.css";
import mainImg from "./fake_restaurant.jpeg";

export default function displayHomepage() {
  const contentBox = document.querySelector("#content");
  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "The Golden";
  const description = document.createElement("p");
  description.textContent =
    "Indulge in an extraordinary culinary journey at The Golden, where sumptuous flavors blend with unparalleled service in an ambiance of timeless elegance. Immerse yourself in the epitome of fine dining, where every moment is a celebration of taste and refinement.";
  description.id = "main-description";
  const restaurantImg = new Image();
  restaurantImg.src = mainImg;
  restaurantImg.id = "restaurant-img";

  contentBox.appendChild(mainHeading);
  contentBox.appendChild(restaurantImg);
  contentBox.appendChild(description);
}
