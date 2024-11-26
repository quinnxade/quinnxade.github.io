// Scroll-triggered animation for content box
const contentBox = document.querySelector('.content-box');

function checkVisibility() {
  const rect = contentBox.getBoundingClientRect();
  const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

  if (isVisible) {
    contentBox.classList.add('visible'); // Add animation class
  }
}

// Listen for scroll events
window.addEventListener('scroll', checkVisibility);

// Trigger visibility check on page load
checkVisibility();
