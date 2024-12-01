


//API que detecta quando um elemento entra ou sai do campo de visão do usuário no navegador
const observer = new IntersectionObserver((entries) => {   //Lista de objetos que estão sendo observados
    entries.forEach(entry => {
        if (entry.isIntersecting) {   //indica se o valor está sendo visivel ou nao, é um booleano
            entry.target.classList.add('visible'); //Elemento que está sendo observado
        }
    });
}, {
    threshold: 0.1
});

// Observe all tip cards
document.querySelectorAll('.tip-card').forEach((card) => {
    observer.observe(card);
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLeft = document.querySelector('.nav-left ul');
const navRight = document.querySelector('.nav-right ul');

menuToggle.addEventListener('click', () => {
    navLeft.classList.toggle('show');
    navRight.classList.toggle('show');
});