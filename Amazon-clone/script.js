// Image carosel
const images = [
  "/crousel-images/amazon-crosel-image-1.jpg",
  "/crousel-images/amazon-crosel-image-2.jpg",
  "/crousel-images/amazon-crosel-image-3.jpg",
  "/crousel-images/amazon-crosel-image-4.jpg",
  "/crousel-images/amazon-crosel-image-5.jpg",
];

function carousel() {
  const lenImages = images.length;
  let imageIndex = 0;

  const leftCrouselButton = document.querySelector(".left-carosel-arrows i");
  const rightCrouselButton = document.querySelector(".right-carosel-arrows i");
  const heroBackground = document.querySelector(".hero-section");

  leftCrouselButton.addEventListener("click", () => {
    // Move to the previous image
    imageIndex = (imageIndex - 1 + lenImages) % lenImages;
    updateHeroBackground();
  });

  rightCrouselButton.addEventListener("click", () => {
    // Move to the next image
    imageIndex = (imageIndex + 1) % lenImages;
    updateHeroBackground();
  });

  function updateHeroBackground() {
    // Set the background of the hero section to the current image
    heroBackground.style.backgroundImage = `url('${images[imageIndex]}')`;
  }

  // Initial setup
  updateHeroBackground();
}

carousel();

// ----------------------------------
//------- slider code -----------------
// -----------------------------------

function slider() {
  //  selecting the second row
  const sliderRows = document.querySelectorAll(".second-row-page1");

  // selecting the containers
  const imageContainers = document.querySelectorAll(
    ".all-divs-container-page1"
  );

  // selecting the buttons ...
  // left button
  const leftSliderButtons = document.querySelectorAll(".left-slider-arrows");

  // right button
  const rightSliderButtons = document.querySelectorAll(".right-slider-arrows");

  // Loop through each slider row
  sliderRows.forEach((sliderRow, index) => {
    // when mouse will enter, scroll bar appears and buttons are visible
    sliderRow.addEventListener("mouseenter", () => {
      imageContainers[index].style.overflowX = "scroll";

      leftSliderButtons[index].style.opacity = "1";
      leftSliderButtons[index].style.pointerEvents = "all";

      rightSliderButtons[index].style.opacity = "1";
      rightSliderButtons[index].style.pointerEvents = "all";
    });

    // when mouse will leave
    sliderRow.addEventListener("mouseleave", () => {
      imageContainers[index].style.overflowX = "hidden";

      leftSliderButtons[index].style.opacity = "0";
      leftSliderButtons[index].style.pointerEvents = "none";

      rightSliderButtons[index].style.opacity = "0";
      rightSliderButtons[index].style.pointerEvents = "none";
    });

    // Set an initial scroll position variable
    let scrollPosition = 0;

    // Set the amount of pixels to scroll when the buttons are clicked
    const scrollAmount = 200;

    // Add click event listener to the left button
    leftSliderButtons[index].addEventListener("click", () => {
      // Update the scroll position to move left
      scrollPosition -= scrollAmount;

      // Ensure the scroll position is within bounds
      scrollPosition = Math.max(scrollPosition, 0);

      // Smoothly scroll the imageContainer to the updated position
      imageContainers[index].scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    });

    // Add click event listener to the right button
    rightSliderButtons[index].addEventListener("click", () => {
      // Update the scroll position to move right
      scrollPosition += scrollAmount;

      // Ensure the scroll position is within bounds
      scrollPosition = Math.min(
        scrollPosition,
        imageContainers[index].scrollWidth - imageContainers[index].clientWidth
      );

      // Smoothly scroll the imageContainer to the updated position
      imageContainers[index].scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    });
  });
}
slider();

// movable ball

function movableBall() {
  const ball = document.querySelector(".cursor-ball");
  const selectBody = document.querySelector("body");

  selectBody.addEventListener("mouseenter", () => {
    gsap.to(ball, {
      opacity: "1",
      scale: "1",
    });
  });

  selectBody.addEventListener("mouseleave", () => {
    gsap.to(ball, {
      opacity: "0",
      scale: "0",
    });

   

  });



  selectBody.addEventListener("mousemove", function (dets) {
    gsap.to(ball, {
      left: dets.x - 50,
      top: dets.y - 40,
    });
  });

}

movableBall();
