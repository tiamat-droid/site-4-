let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("indicator-dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

// Configura a troca automática de slides
setInterval(() => {
    plusSlides(1);
}, 4000);  // Tempo de exibição do slide em milissegundos (4 segundos)




//-----------------------//


const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentSlide = 0;
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;


slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

function moveToSlide(track, currentSlide, targetSlide) {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
}

nextButton.addEventListener('click', () => {
    const nextSlide = slides[currentSlide + 1] || slides[0];
    moveToSlide(track, slides[currentSlide], nextSlide);
    currentSlide = (currentSlide + 1) % slides.length;
});

prevButton.addEventListener('click', () => {
    const prevSlide = slides[currentSlide - 1] || slides[slides.length - 1];
    moveToSlide(track, slides[currentSlide], prevSlide);
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
});
