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

  // Change fill value of share button
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

  // Show link menu based on screen width
  if (screenWidth < 768) {
    footerElem.classList.toggle("show-links");
    footerInfoContainer.classList.toggle("hidden");
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

  // Change flex direction for smaller screens
  if (footerElem.classList.contains("show-links")) {
    footerElem.style.flexFlow = "row-reverse nowrap";
  } else {
    footerElem.style.flexFlow = "row nowrap";
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    if (footerElem.classList.contains("show-links")) {
      footerElem.classList.remove("show-links");
      footerInfoContainer.classList.remove("hidden");
      linkContainer.classList.add("hidden");
      footerElem.style.flexFlow = "row nowrap";
      shareButton.classList.remove("btn-active");
      shareButton.firstElementChild.firstElementChild.setAttribute(
        "fill",
        "#6E8098"
      );
    } else if (linkContainer.classList.contains("large-screen")) {
      linkContainer.classList.add("hidden");
      linkContainer.classList.remove("large-screen");
      shareButton.classList.remove("btn-active");
      shareButton.firstElementChild.firstElementChild.setAttribute(
        "fill",
        "#6E8098"
      );
    }
  }
});
