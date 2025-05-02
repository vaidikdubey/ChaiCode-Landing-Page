// Floating images animation
export function initFloatingImage() {
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
}
