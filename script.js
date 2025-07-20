// Esconde o topo com animação ao rolar
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
