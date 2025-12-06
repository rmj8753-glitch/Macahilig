// Dropdown Menu Toggle
const menu = document.querySelector('.menu');
const dropdown = document.querySelector('.menu-dropdown');

menu.addEventListener('click', (e) => {
    e.stopPropagation(); 
    dropdown.classList.toggle('active'); 
});

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

// Fade In/Out Sections on Scroll
const sections = document.querySelectorAll('.places-section');

function handleSectionsOnScroll() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100 && sectionBottom > 100) {
            section.classList.add('visible');
            section.classList.remove('faded');
        } else {
            section.classList.remove('visible');
            section.classList.add('faded');
        }
    });
}

// Animate text inside each section when the section becomes visible
function animateTextInSection() {
    sections.forEach(section => {
        const textElements = section.querySelectorAll('.fade-text');
        if (section.classList.contains('visible')) {
            textElements.forEach(el => el.classList.add('show-text'));
        } else {
            textElements.forEach(el => el.classList.remove('show-text'));
        }
    });
}

// "Go to Top" button
const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) { // show button after scrolling 500px
        goTopBtn.style.display = "flex";
    } else {
        goTopBtn.style.display = "none";
    }

    handleSectionsOnScroll();
    animateTextInSection();
});

goTopBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Initial call on page load
window.addEventListener('load', () => {
    handleSectionsOnScroll();
    animateTextInSection();
});

// Select all sections AND the content
const animatedSections = document.querySelectorAll('.places-section, .content');

// Animate text inside each section or content
function animateTextInSection() {
    animatedSections.forEach(section => {
        const textElements = section.querySelectorAll('.fade-text');
        if (section.getBoundingClientRect().top < window.innerHeight - 100 &&
            section.getBoundingClientRect().bottom > 0) {
            textElements.forEach(el => el.classList.add('show-text'));
        } else {
            textElements.forEach(el => el.classList.remove('show-text'));
        }
    });
}

// Repeating typewriter animation with continuous blinking
const typewriter = document.querySelector('.content .typewriter');
const fullText = typewriter.getAttribute('data-text');

let index = 0;
let typing = true; // true = typing, false = deleting

function repeatTypewriter() {
    typewriter.textContent = fullText.substring(0, index);

    if (typing) {
        index++;
        if (index > fullText.length) {
            typing = false;
            setTimeout(repeatTypewriter, 2000); // wait 2s at full text
            return;
        }
    } else {
        index--;
        if (index < 0) {
            typing = true;
            setTimeout(repeatTypewriter, 500); // wait 0.5s before retyping
            return;
        }
    }

    setTimeout(repeatTypewriter, typing ? 100 : 50); // typing vs deleting speed
}

// Trigger typewriter only when content is visible
function checkContentVisible() {
    const rect = typewriter.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top < windowHeight && rect.bottom > 0 && !typewriter.started) {
        typewriter.started = true;
        typewriter.classList.add('blink'); // add blinking cursor
        repeatTypewriter();
    }
}

window.addEventListener('scroll', checkContentVisible);
window.addEventListener('load', checkContentVisible);

const images = document.querySelectorAll('.places-image img');

images.forEach(img => {
    img.addEventListener('touchstart', () => {
        img.style.transform = 'scale(1.15)';
        img.style.filter = 'brightness(1.1)';
    });
    img.addEventListener('touchend', () => {
        img.style.transform = 'scale(1)';
        img.style.filter = 'brightness(1)';
    });
});

