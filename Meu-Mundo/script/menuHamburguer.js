
//Funcionalidades menu hamburguer 

const menuIcon = document.getElementById("menuIcon");
const headerNav = document.querySelector("ul");
const links = document.querySelectorAll('menu a');
const header = document.querySelector(".cabecalho")
let isMenuOpen = false;

//eventos menu hamburguer
menuIcon.addEventListener("click", () => {
  if (!isMenuOpen) {
    menuIcon.innerText = "close";
    headerNav.classList.add("active");
    header.classList.add("headerBackground")
  } else {
    menuIcon.innerText = "menu";
    headerNav.classList.remove("active");
    header.classList.remove("headerBackground");
  }

  isMenuOpen = !isMenuOpen;
});

links.forEach(link => {
  link.addEventListener('click', () => {
    headerNav.classList.remove("active");
    header.classList.remove("headerBackground");
    menuIcon.innerText = "menu";
    isMenuOpen = !isMenuOpen;
  });
});