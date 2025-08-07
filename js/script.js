// This script will add the 'is-visible' class to elements when they scroll into view.
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // When the element is in view, add the 'is-visible' class
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each element
animatedElements.forEach(el => {
    observer.observe(el);
});
