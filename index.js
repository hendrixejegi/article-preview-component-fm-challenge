const shareButton = document.querySelector(".js-share-button");
const footerElem = document.querySelector(".article-footer");
const footerInfoContainer = document.querySelector(
  ".article-footer-information"
);
const linkContainer = document.querySelector(".share-container");

shareButton.addEventListener("click", () => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    footerElem.classList.toggle("show-links");
    footerInfoContainer.classList.toggle("hidden");
    linkContainer.classList.toggle("hidden");
  } else {
    linkContainer.classList.toggle("hidden");
    linkContainer.classList.toggle("large-screen");
  }
});
