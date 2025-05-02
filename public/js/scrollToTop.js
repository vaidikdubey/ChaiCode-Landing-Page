//Scroll to top arrow functionality
export function initScrollToTop() {
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
}
