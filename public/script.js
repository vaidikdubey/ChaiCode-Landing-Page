//Loading screen functionality
const preloader = document.getElementById('loading-screen');

window.addEventListener("load", () => {
  preloader.classList.add('fade-out');
  
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1000)
})

//Scroll to top arrow functionality
const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    scrollToTop.classList.remove('hidden');
  }
  else {
      scrollToTop.classList.add('hidden');
  }
})

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

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

window.addEventListener('scroll', () => {
  if(window.scrollY > 100) {
    menuButton.classList.remove('active');
    sliderMenu.classList.remove('active');
  }
});

let copyLogoDiv = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copyLogoDiv);

// Floating images animation

const items = document.querySelectorAll(".float-item");
const box = document.querySelector(".floating-box");
const boxWidth = box.clientWidth;
const boxHeight = box.clientHeight;

const floats = [];

items.forEach((item) => {
  const speedX = (Math.random() - 0.5) * 2;
  const speedY = (Math.random() - 0.5) * 2;
  const x = Math.random() * (boxWidth - 50);
  const y = Math.random() * (boxHeight - 50);

  item.style.left = `${x}px`;
  item.style.top = `${y}px`;

  floats.push({ item, x, y, speedX, speedY });
});

function animate() {
  floats.forEach((f) => {
    f.x += f.speedX;
    f.y += f.speedY;

    if (f.x <= 0 || f.x >= boxWidth - 50) f.speedX *= -1;
    if (f.y <= 0 || f.y >= boxHeight - 50) f.speedY *= -1;

    f.item.style.left = `${f.x}px`;
    f.item.style.top = `${f.y}px`;
  });

  requestAnimationFrame(animate);
}

animate();

// Return back to same scroll position from redirected website
window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("scrollPosition", window.scrollY);
});

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

//Footer Button Scroll to Top
const footerButton = document.getElementById("footerBtn");

footerButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})