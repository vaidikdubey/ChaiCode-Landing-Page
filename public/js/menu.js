//Menu button functionality
export function initMenu() {
  const menuButton = document.querySelector(".menu-button");
  const closeButton = document.querySelector(".close");
  const sliderMenu = document.querySelector(".slider");
  const mediaQuery = window.matchMedia("(min-width: 576px)");

  function closeMenu(size) {
    if (size.matches) {
      if (menuButton.classList.contains("active")) {
        menuButton.classList.remove("active");
        sliderMenu.classList.remove("active");
      }
    }
  }

  closeMenu(mediaQuery);

  mediaQuery.addEventListener("change", closeMenu);

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    sliderMenu.classList.toggle("active");
  });

  closeButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
    sliderMenu.classList.toggle("active");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      menuButton.classList.remove("active");
      sliderMenu.classList.remove("active");
    }
  });
}
