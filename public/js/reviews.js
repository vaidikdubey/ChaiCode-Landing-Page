import { initLoadingScreen } from "./loadingScreen.js";

initLoadingScreen();


window.addEventListener('load', async () => {
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
})