// Esconde cabeçalho ao rolar
const header = document.getElementById("top-bar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Fundo com partículas (estrelas)
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 1
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  stars.forEach(star => {
    ctx.moveTo(star.x, star.y);
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2, true);
  });
  ctx.fill();
  updateStars();
}

function updateStars() {
  stars.forEach(star => {
    star.y += star.d;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}
animate();
