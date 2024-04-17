import "./index.css";

export default function displayAboutPage() {
  const contentBox = document.querySelector("#content");
  const aboutTextDiv = document.createElement("div");
  aboutTextDiv.id = "about-text-box";
  const paraOne = document.createElement("p");
  paraOne.className = "about-text";
  paraOne.textContent =
    "Welcome to The Golden, where culinary excellence meets timeless elegance. Nestled in the heart of Cardiff, The Golden is a distinguished 5-star dining destination renowned for its exquisite cuisine, impeccable service, and opulent ambiance.";
  const paraTwo = document.createElement("p");
  paraTwo.className = "about-text";
  paraTwo.textContent =
    "At The Golden, we believe that dining is not just a meal; it's an experience to be savored and remembered. From the moment you step through our doors, you are enveloped in an atmosphere of luxury and sophistication. Our stunning decor, featuring rich hues, plush furnishings, and sparkling chandeliers, sets the stage for an unforgettable dining journey.";
  const paraThree = document.createElement("p");
  paraThree.className = "about-text";
  paraThree.textContent =
    "Led by our team of world-class chefs, our culinary offerings at The Golden are nothing short of extraordinary. Using only the finest, locally-sourced ingredients, each dish is carefully crafted to tantalize the senses and ignite the palate. From innovative interpretations of classic favorites to daring culinary creations, every bite is a symphony of flavors designed to delight even the most discerning of palates.";
  const paraFour = document.createElement("p");
  paraFour.className = "about-text";
  paraFour.textContent =
    "Whether you're celebrating a special occasion, hosting a business dinner, or simply indulging in a night of culinary indulgence, The Golden promises an unparalleled dining experience that will leave a lasting impression. Join us and discover why we are the destination of choice for those who appreciate the finer things in life. Welcome to The Golden—where every moment is pure gold.";

  aboutTextDiv.append(paraOne, paraTwo, paraThree, paraFour);
  contentBox.appendChild(aboutTextDiv);

  const mapEmbed = document.createElement("iframe");
  mapEmbed.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39737.5772564378!2d-3.246249161829552!3d51.50223353377151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e02d434ec53f5%3A0x143406db6586670e!2sCardiff!5e0!3m2!1sen!2suk!4v1713350351445!5m2!1sen!2suk";
  mapEmbed.referrerPolicy = "no-referrer-when-downgrade";
  mapEmbed.loading = "lazy";
  mapEmbed.allowFullscreen = "";
  mapEmbed.id = "map-embed";

  contentBox.append(mapEmbed);
}
