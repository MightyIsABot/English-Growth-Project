// ================================================
// ANIMATION & INTERACTIVITY
// ================================================

// Hero Section Entrance Animation
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Reflection cards
            if (entry.target.classList.contains('reflection-card')) {
                entry.target.classList.add('slide-up-visible');
                observer.unobserve(entry.target);
            }
            
            // Timeline items
            if (entry.target.classList.contains('timeline-item')) {
                entry.target.classList.add('slide-up-visible');
            }
        }
    });
}, observerOptions);

// Observe reflection cards
document.querySelectorAll('.reflection-card').forEach(card => {
    observer.observe(card);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// ================================================
// SMOOTH SCROLLING & ACTIVE NAV LINK
// ================================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
});

// ================================================
// CARD HOVER EFFECTS
// ================================================

const reflectionCards = document.querySelectorAll('.reflection-card');

reflectionCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// ================================================
// TIMELINE ITEM HOVER & ANIMATION
// ================================================

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    // Stagger animation delays
    item.style.animationDelay = `${index * 0.15}s`;
    
    // Hover effect for visibility
    item.addEventListener('mouseenter', () => {
        item.style.opacity = '1';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.opacity = '1';
    });
});

// ================================================
// FADE-IN FOR TIMELINE FINAL STATEMENT
// ================================================

const finalStatement = document.querySelector('.timeline-final');
if (finalStatement) {
    observer.observe(finalStatement);
}

// Register final statement for animation
const finalStatementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
        }
    });
}, observerOptions);

if (finalStatement) {
    finalStatementObserver.observe(finalStatement);
}

// ================================================
// PARALLAX EFFECT ON HERO (OPTIONAL)
// ================================================

const heroSection = document.querySelector('.hero');
window.addEventListener('scroll', () => {
    if (heroSection) {
        const scrollPosition = window.scrollY;
        const parallaxSpeed = 0.5;
        heroSection.style.backgroundPosition = `center ${scrollPosition * parallaxSpeed}px`;
    }
});

// ================================================
// FOOTER FADE IN
// ================================================

const footer = document.querySelector('.footer');
if (footer) {
    observer.observe(footer);
}

// ================================================
// ACCESSIBILITY: KEYBOARD NAVIGATION
// ================================================

document.addEventListener('keydown', (e) => {
    // Escape key to scroll to top smoothly
    if (e.key === 'Escape') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ================================================
// ENHANCED NAV LINK INTERACTION
// ================================================

navLinks.forEach(link => {
    link.addEventListener('focus', (e) => {
        e.target.style.outline = '2px solid #3b82f6';
        e.target.style.outlineOffset = '4px';
    });
    
    link.addEventListener('blur', (e) => {
        e.target.style.outline = 'none';
    });
});

// ================================================
// PAGE LOAD ANIMATIONS
// ================================================

// Add fade-in animation to hero subtitle
window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroAnswer = document.querySelector('.hero-answer');
    
    if (heroSubtitle) {
        heroSubtitle.style.animation = 'fadeIn 1.2s ease-out 0.3s forwards';
        heroSubtitle.style.opacity = '0';
    }
    
    if (heroAnswer) {
        heroAnswer.style.animation = 'slideUp 1s ease-out 0.6s forwards';
        heroAnswer.style.opacity = '0';
    }
});

// ================================================
// SMOOTH FADE IN FOR INITIAL LOAD
// ================================================

// Initialize body opacity
document.body.style.opacity = '1';

// Ensure all reflection cards start with opacity 0 for animation
reflectionCards.forEach(card => {
    if (!card.classList.contains('slide-up-visible')) {
        card.style.opacity = '0';
    }
});

// Log to confirm script loaded
console.log('✓ Portfolio animations and interactivity loaded successfully');
