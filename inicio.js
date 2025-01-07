var radio = document.querySelector('.manual-btn')
var cont= 1

document.getElementById('radio1').checked = true

setInterval(() => {
  proximaImg()
}, 5000)

function proximaImg(){
  cont++

  if(cont > 3){
    cont = 1
  }
  document.getElementById('radio' + cont).checked = true
  
}

// parte dos cards/ /

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const cards = document.querySelector('.cards');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < 1.4) { // Limite: 6 cards visíveis com scroll de 1 cada vez.
    currentIndex++;
    updateCarousel();
  }
});

function updateCarousel() {
  const cardWidth = document.querySelector('.card').offsetWidth + 20; // Incluindo margem
  cards.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
}


//AQUI É A PARTE DA LOJA. TENTATIVA DE FAZER ADC AO CARRINHO E FAVORITOS//

let carrinho = [];
let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

// Função para adicionar ao carrinho
function adicionarAoCarrinho(produto) {
    carrinho.push(produto);
    alert(`${produto} foi adicionado ao carrinho!`);
    console.log(carrinho);
}

// Função para adicionar aos favoritos
function adicionarAosFavoritos(produto) {
    if (!favoritos.includes(produto)) {
        favoritos.push(produto);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        alert(`${produto} foi adicionado aos favoritos!`);
    } else {
        alert(`${produto} já está nos favoritos!`);
    }
}

// Função para carregar favoritos na página de favoritos
function carregarFavoritos() {
    const favoritosContainer = document.getElementById('favoritos-container');
    favoritosContainer.innerHTML = '';
    favoritos.forEach(produto => {
        const item = document.createElement('div');
        item.className = 'favorite-item';
        item.textContent = produto;
        favoritosContainer.appendChild(item);
    });
}
//-------------------outra parte-------------------//


let currentSlide = 0; // Índice do slide atual
const slides = document.querySelectorAll('.carousel-item'); // Seleciona os itens do carrossel
const totalSlides = slides.length; // Total de itens no carrossel
const visibleItems = 3; // Quantidade de itens visíveis por slide

function moveSlide(direction) {
 
    currentSlide += direction;


    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide > totalSlides - visibleItems) {
        currentSlide = totalSlides - visibleItems;
    }
//aqui eu coloquei o negócio para limitar o número de slides que vai passar//
    const offset = -(currentSlide * (13.5 / visibleItems)); 
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Adicionar o bagulho para os botões
document.querySelector('.arrow.left').addEventListener('click', () => moveSlide(-1));
document.querySelector('.arrow.right').addEventListener('click', () => moveSlide(1));

moveSlide(0);
//card de novo, repetindo----------------------//
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const carouselCards = document.querySelector('.cards');

let currentCardIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateCarouselPosition();
  }
});

nextButton.addEventListener('click', () => {
  if (currentCardIndex < 1.4) { // Limite: 6 cards visíveis com scroll de 1 cada vez.
    currentCardIndex++;
    updateCarouselPosition();
  }
});

function updateCarouselPosition() {
  const cardWidth = document.querySelector('.card').offsetWidth + 20; // Incluindo margem
  carouselCards.style.transform = `translateX(${-cardWidth * currentCardIndex}px)`;
}

// quero chorar-----outro card parecido com o primeiro//

const btnAnterior = document.querySelector('.btn-anterior');
const btnProximo = document.querySelector('.btn-proximo');
const cardsCarrossel = document.querySelector('.cards-carrossel');

let indiceAtual = 0;

btnAnterior.addEventListener('click', () => {
  if (indiceAtual > 0) {
    indiceAtual--;
    atualizarPosicaoCarrossel();
  }
});

btnProximo.addEventListener('click', () => {
  if (indiceAtual < 1.4) { // Limite: 6 cards visíveis com scroll de 1 cada vez.
    indiceAtual++;
    atualizarPosicaoCarrossel();
  }
});

function atualizarPosicaoCarrossel() {
  const larguraCard = document.querySelector('.card').offsetWidth + 20; // Incluindo margem
  cardsCarrossel.style.transform = `translateX(${-larguraCard * indiceAtual}px)`;
}
//-------------------faq-------------------//

/*FAQ------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
  });
});




// JavaScript para o carrossel

