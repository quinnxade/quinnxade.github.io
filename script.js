const floatingCards = document.querySelectorAll('.floating-card');

function animateFloatingCards() {
    floatingCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }, 500 * index);
    });
}

window.addEventListener('load', animateFloatingCards);