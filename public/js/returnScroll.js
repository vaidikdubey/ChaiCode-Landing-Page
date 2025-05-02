// Return back to same scroll position from redirected website
export function storeScrollPosition() {
  window.addEventListener("beforeunload", () => {
    sessionStorage.setItem("scrollPosition", window.scrollY);
  });
}
