const shareButton = document.querySelector(".js-share-button");
const footerElem = document.querySelector(".article-footer");
const footerInfoContainer = document.querySelector(
  ".article-footer-information"
);
const linkContainer = document.querySelector(".share-container");

shareButton.addEventListener("click", () => {
  const screenWidth = window.innerWidth; //Grab the current screen width
  const fillValue =
    shareButton.firstElementChild.firstElementChild.attributes.fill.value; //Grab the color of shareButton

  shareButton.classList.toggle("btn-active"); // Change button background

  changeButtonFill(fillValue);

  displayShareOptions(screenWidth);
});

function changeButtonFill(fillValue) {
  if (fillValue === "#6E8098") {
    shareButton.firstElementChild.firstElementChild.setAttribute(
      "fill",
      "#e7edf4"
    );
  } else {
    shareButton.firstElementChild.firstElementChild.setAttribute(
      "fill",
      "#6E8098"
    );
  }
}

function displayShareOptions(screenWidth) {
  if (screenWidth < 768) {
    footerElem.classList.toggle("show-links");
    footerInfoContainer.classList.toggle("hidden");
    linkContainer.classList.toggle("hidden");
  } else {
    linkContainer.classList.toggle("hidden");
    linkContainer.classList.toggle("large-screen");
  }
}
