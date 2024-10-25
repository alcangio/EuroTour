// Seleciona os elementos necessários
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Adiciona um evento de clique ao ícone do hamburger
hamburger.addEventListener('click', () => {
    // Alterna a classe 'open' no menu para exibi-lo ou ocultá-lo
    menu.classList.toggle('open');
});

// Seleciona todos os links de navegação do menu
const menuLinks = document.querySelectorAll('.menu a');

// Adiciona um evento de clique a cada link do menu para fechar o menu após o clique
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
    });
});