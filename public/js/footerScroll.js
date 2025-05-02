//Footer Button Scroll to Top
export function initFooterScroll() {
  const footerButton = document.getElementById("footerBtn");

  footerButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
