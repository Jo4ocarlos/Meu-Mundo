//animação das letras
const textElement = document.querySelector(".animacao_texto");
const textElementDev = document.querySelector(".animacao_texto_dev");
const words = ["Olá, Mundo!", "h1> Hello, World!</h1>"];
const roles = [" Front-end", " Fullstack"];
let wordIndex = 0;
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentWord = words[wordIndex];
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.slice(0, charIndex - 0.1);
        textElementDev.textContent = currentRole.slice(0, charIndex - 2);
        charIndex--;
    } else {
        textElement.textContent = currentWord.slice(0, charIndex + 2);
        textElementDev.textContent = currentRole.slice(0, charIndex + 3);
        charIndex++;
    }

    if ((!isDeleting && charIndex === currentWord.length) || (isDeleting && charIndex === 0)) {
        isDeleting = !isDeleting;
        
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeText, isDeleting ? 100 : 250);
}

typeText();

//funcionalidades do ligthMode
const ligthModeBtn = document.querySelector("#mudar-tema")
const lightIcon = document.querySelector(".material-symbols-outlined")

ligthModeBtn.addEventListener("change", function(){
    document.body.classList.toggle("light")
    
})


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



