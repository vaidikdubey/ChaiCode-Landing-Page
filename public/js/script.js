import { initLoadingScreen } from "./loadingScreen.js";
import { duplicateLogos } from "./logoLoop.js";
import { initFooterScroll } from "./footerScroll.js";

//Static imports required on website loading
initLoadingScreen();
duplicateLogos();
initFooterScroll();

//Dynamic loading when required
window.addEventListener("load", async () => {
  // Scroll to Top Arrow
  if (document.querySelector(".scroll-to-top")) {
    const { initScrollToTop } = await import("./scrollToTop.js");
    initScrollToTop();
  }

  // Menu functionality
  if (document.querySelector(".menu-button")) {
    const { initMenu } = await import("./menu.js");
    initMenu();
  }

  // Floating animation
  if (document.querySelector(".float-item")) {
    const { initFloatingImages } = await import("./floatingImages.js");
    initFloatingImages();
  }

  // Udemy slider
  if (document.querySelector(".udemy-course")) {
    const { initUdemySlider } = await import("./udemySlider.js");
    initUdemySlider();
  }

  // Save scroll position before unload
  const { storeScrollPosition } = await import("./returnScroll.js");
  window.addEventListener("beforeunload", storeScrollPosition);
});
