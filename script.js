// Smooth scrolling for in-page anchor links only
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href') || '';
    // Only intercept same-page anchors starting with '#'
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // Otherwise allow the link to navigate normally (e.g., projects.html)
  });
});

// Parallax effect on scroll
const parallaxElements = document.querySelectorAll('.parallax-section');

window.addEventListener('scroll', () => {
  parallaxElements.forEach(element => {
    let scrollPosition = window.pageYOffset;
    let elementOffset = element.offsetTop;
    let elementHeight = element.offsetHeight;
    let windowHeight = window.innerHeight;
    
    // Only apply parallax if element is in view
    if(scrollPosition + windowHeight > elementOffset && scrollPosition < elementOffset + elementHeight) {
      element.style.backgroundPosition = `center ${(scrollPosition - elementOffset) * 0.5}px`;
    }
  });
});

// Section reveal animations on scroll
const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealOnScroll = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.86;

    if (elementTop < triggerPoint) {
      element.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi! Teşekkür ederiz.');
    this.reset();
  });
}
