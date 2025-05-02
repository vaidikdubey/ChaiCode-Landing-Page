export function initUdemySlider() {
  //Udemy cards slider functionality with arrows
  const courses = document.querySelectorAll(".udemy-course");
  const backArrow = document.getElementById("udemy-svg-back");
  const nextArrow = document.getElementById("udemy-svg-next");

  let currentIndex = 0;

  function updateCoursesDisplay() {
    courses.forEach((course, index) => {
      course.style.display = index === currentIndex ? "flex" : "none";
    });
  }

  updateCoursesDisplay();

  backArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + courses.length) % courses.length;
    updateCoursesDisplay();
  });

  nextArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % courses.length;
    updateCoursesDisplay();
  });
}
