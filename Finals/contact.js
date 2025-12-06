// Dropdown Menu Toggle
const menu = document.querySelector('.menu');
const dropdown = document.querySelector('.menu-dropdown');

// Toggle dropdown menu on click
menu.addEventListener('click', (e) => {
    e.stopPropagation(); 
    dropdown.classList.toggle('active'); 
});

// Close dropdown when clicking outside
window.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('active'); 
    }
});

// Hide/Show Navbar on Scroll
let lastScrollTop = 0; 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    
        navbar.classList.add('hidden');
    } else {
        
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    // Check if the elements exist
    if (contactForm && thankYouMessage) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            contactForm.style.display = "none"; 
            thankYouMessage.style.display = "block"; 
        });
    } else {
        console.error("Contact form or thank-you message element not found!");
    }
})

// Animate inputs on scroll
const animatedInputs = document.querySelectorAll('.input-animated');

function animateInputs() {
    animatedInputs.forEach(input => {
        const rect = input.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50) input.classList.add('show-text');
    });
}

window.addEventListener('scroll', animateInputs);
window.addEventListener('load', animateInputs);

// Add fade-in classes to form container and footer
document.querySelector('.contact-form-container').classList.add('fade-in');
document.querySelector('.footer').classList.add('fade-in');
document.getElementById('thank-you-message').classList.add('fade-in');