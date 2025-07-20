// Animação de esconder o cabeçalho ao rolar para baixo
let lastScrollTop = 0;
const header = document.getElementById("top-bar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden"); // anima para cima
  } else {
    header.classList.remove("hidden"); // volta
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
