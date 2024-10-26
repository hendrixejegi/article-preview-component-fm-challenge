const shareButton = document.querySelector(".js-share-button");
const footerElem = document.querySelector(".article-footer");
const footerInfoContainer = document.querySelector(
  ".article-footer-information"
);
const linkContainer = document.querySelector(".share-container");

shareButton.addEventListener("click", () => {
  const screenWidth = window.innerWidth; //Grab the current screen width

  // Show link menu based on screen width
  if (screenWidth < 768) {
    footerElem.classList.toggle("show-links");
    linkContainer.classList.toggle("hidden");
  } else {
    linkContainer.classList.toggle("hidden");
    linkContainer.classList.toggle("large-screen");
  }

  // Set aria attribute for share button
  if (
    footerElem.classList.contains("show-links") ||
    linkContainer.classList.contains("large-screen")
  ) {
    shareButton.setAttribute("aria-haspopup", "true");
  } else {
    shareButton.setAttribute("aria-haspopup", "false");
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    if (footerElem.classList.contains("show-links")) {
      footerElem.classList.remove("show-links");
      footerInfoContainer.classList.remove("hidden");
      linkContainer.classList.add("hidden");
      footerElem.style.flexFlow = "row nowrap";
    } else if (linkContainer.classList.contains("large-screen")) {
      linkContainer.classList.add("hidden");
      linkContainer.classList.remove("large-screen");
    }
  }
});
