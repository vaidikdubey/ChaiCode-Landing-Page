//Duplicate logos in slider
export function duplicateLogos() {
  let copyLogoDiv = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copyLogoDiv);
}
