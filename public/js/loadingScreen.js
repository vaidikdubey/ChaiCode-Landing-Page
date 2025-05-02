//Loading screen functionality
export function initLoadingScreen() {
  const preloader = document.getElementById("loading-screen");

  window.addEventListener("load", () => {
    preloader.classList.add("fade-out");

    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  });
}
