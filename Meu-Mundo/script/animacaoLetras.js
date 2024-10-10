// Elementos de texto
const textElement = document.querySelector(".animacao_texto");
const textElementDev = document.querySelector(".animacao_texto_dev");

// array de palavras 
const words = ["Olá, Mundo!", "h1> Hello, World!</h1>"];
const roles = ["Front-end", "Fullstack"];

// Índices e controle de animação
let wordIndex = 0;
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Função principal para animação de digitação e exclusão
function typeText() {
    const currentWord = words[wordIndex];
    const currentRole = roles[roleIndex];

    // Atualiza os elementos de texto
    textElement.textContent = currentWord.slice(0, charIndex);
    textElementDev.textContent = currentRole.slice(0, charIndex);

    // Atualiza o índice de caracteres
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    // Verifica se deve mudar de adicionar para excluir ou vice-versa
    if ((!isDeleting && charIndex === currentWord.length) || (isDeleting && charIndex === 0)) {
        isDeleting = !isDeleting;

        // Se estivermos mudando para adicionar caracteres, avançamos para a próxima palavra do array
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    // Configura o próximo ciclo de animação
    setTimeout(typeText, isDeleting ? 100 : 250);
}

typeText();
