//Loading screen functionality
const preloader = document.getElementById("loading-screen");

window.addEventListener("load", () => {
  preloader.classList.add("fade-out");

  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000);
});

//Scroll to top arrow functionality
const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTop.classList.remove("hidden");
  } else {
    scrollToTop.classList.add("hidden");
  }
});

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//Menu button functionality
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
