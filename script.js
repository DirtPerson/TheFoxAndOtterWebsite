
let currentSlide = 0;

function scrollCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const slides = carousel.getElementsByClassName('carousel-slide');
    const totalSlides = slides.length;

    slides[currentSlide].style.display = 'none'; // Hide current slide
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'flex'; // Show new slide
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.getElementById('carousel').getElementsByClassName('carousel-slide');
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = 'none'; // Hide all slides except the first
    }
});
