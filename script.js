// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Modals
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalLink = document.getElementById('modal-link');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modalLink.href = card.dataset.link;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Animate Progress Bars on Scroll
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress');

const animateProgress = () => {
    progressBars.forEach(bar => {
        bar.style.width = bar.style.width; // Trigger animation
    });
};

window.addEventListener('scroll', () => {
    if (skillsSection.getBoundingClientRect().top < window.innerHeight) {
        animateProgress();
    }
});

// Contact Form Submission (Dummy)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! (This is a dummy action)');
    contactForm.reset();
});