const projetos = document.querySelectorAll('.projeto');
let currentProject = 0;

function updateCarousel() {
  const angle = 360 / projetos.length;
  
  projetos.forEach((projeto, index) => {
    projeto.classList.remove('active_project');

    // Calcular o ângulo de rotação
    const rotation = angle * ((index - currentProject + projetos.length) % projetos.length);
    
    if (index === currentProject) {
      projeto.classList.add('active_project');
      projeto.style.transform = `rotateY(0deg) translateZ(400px)`; // Coloca o ativo na frente
      projeto.style.opacity = 1;
    } else {
      projeto.style.transform = `rotateY(${rotation}deg) translateZ(500px)`;
      projeto.style.opacity = 0.2;
    }
  });
}

function previousProject() {
  currentProject = (currentProject - 1 + projetos.length) % projetos.length;
  updateCarousel();
}

function nextProject() {
  currentProject = (currentProject + 1) % projetos.length;
  updateCarousel();
}

// Inicializa o carrossel
updateCarousel(); 