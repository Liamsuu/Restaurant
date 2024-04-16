import "./index.css";
import mainImg from "./fake_restaurant.jpeg";

export default function displayHomepage() {
  const contentBox = document.querySelector("#content");
  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "The Golden";
  const description = document.createElement("p");
  description.textContent =
    "Our stunning 5* Restaurant has hosted thousands of people over the years. The richest, the most famous have been served here.";
  const restaurantImg = new Image();
  restaurantImg.src = mainImg;
  restaurantImg.id = "restaurant-img";

  contentBox.appendChild(mainHeading);
  contentBox.appendChild(restaurantImg);
  contentBox.appendChild(description);
}
