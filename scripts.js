const activar = document.querySelector(".dark");

activar.addEventListener("click", (activacion) => {
  const html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    activacion.target.innerHTML = "DARK";
  } else {
    html.classList.add("dark");
    activacion.target.innerHTML = "LIGTH";
  }
});

const header = document.querySelector(".container");

window.addEventListener("scroll", tamaño);

function tamaño() {
  if (window.scrollY > header.offsetHeight + 150) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
