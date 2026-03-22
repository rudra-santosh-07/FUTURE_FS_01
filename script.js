// ===== TYPING EFFECT =====
const typingText = document.getElementById('typingText');
const fullText = "B.Tech CSE Student | Aspiring Full Stack Developer";
let charIndex = 0;

function typeText() {
    if (charIndex < fullText.length) {
        typingText.textContent = fullText.slice(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, 50);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 500);
});

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU TOGGLE =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Animate skill progress bars
            if (entry.target.classList.contains('skill-category')) {
                animateProgressBars(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all sections and cards
const sections = document.querySelectorAll('section');
const cards = document.querySelectorAll('.highlight-card, .skill-category, .project-card, .education-card, .cert-card, .achievement-card');

sections.forEach(section => observer.observe(section));
cards.forEach(card => observer.observe(card));

// ===== SKILL PROGRESS BARS ANIMATION =====
function animateProgressBars(skillCategory) {
    const progressBars = skillCategory.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = progress + '%';
        }, index * 100);
    });
}

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.getElementById('scrollTopBtn');

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    // For now, we'll just show an alert
    alert(`Thank you for your message, ${name}! I'll get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const navLinksArray = Array.from(navLinks);

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksArray.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== PARALLAX EFFECT FOR HERO BLOBS =====
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const blobs = document.querySelectorAll('.blob');
    
    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 0.5;
        blob.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== ADD HOVER SOUND EFFECT (Optional) =====
// Uncomment if you want subtle interaction feedback
/*
const interactiveElements = document.querySelectorAll('.btn, .social-icon, .project-card, .cert-card');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        // You can add audio feedback here
        element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});
*/

// ===== LAZY LOADING IMAGES (if you add images later) =====
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===== CURSOR TRAIL EFFECT (Optional - Premium Touch) =====
// Uncomment for a cool cursor trail effect
/*
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener('mousemove', function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;
    
    circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';
        circle.style.scale = (circles.length - index) / circles.length;
        
        circle.x = x;
        circle.y = y;
        
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });
    
    requestAnimationFrame(animateCircles);
}

animateCircles();
*/

// ===== DYNAMIC YEAR IN FOOTER =====
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('.current-year');
yearElements.forEach(el => {
    el.textContent = currentYear;
});

// ===== EASTER EGG - KONAMI CODE =====
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

window.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiPattern.length - 1, konamiCode.length - konamiPattern.length);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        // Easter egg activated!
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// ===== THEME TOGGLE (Optional - Add if needed) =====
/*
const themeToggle = document.getElementById('themeToggle');
let darkMode = true;

themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
darkMode = savedTheme === 'dark';
*/

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce scroll events for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use debounced scroll handler
const debouncedScroll = debounce(() => {
    // Any heavy scroll operations go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===== CONSOLE MESSAGE (Fun touch) =====
console.log('%c👋 Hey there, curious developer!', 'font-size: 20px; color: #3b82f6; font-weight: bold;');
console.log('%cI see you\'re checking out the console. Want to collaborate? Let\'s connect!', 'font-size: 14px; color: #94a3b8;');
console.log('%c🚀 Portfolio built with HTML, CSS, and JavaScript', 'font-size: 12px; color: #10b981;');

// ===== FORM VALIDATION =====
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#3b82f6';
    });
});

// ===== PROJECT CARD TILT EFFECT =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===== INITIALIZE ALL ANIMATIONS ON PAGE LOAD =====
window.addEventListener('load', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 0.8s ease';
    }
});

// ===== HANDLE BACK TO TOP BUTTON VISIBILITY =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.pointerEvents = 'all';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.pointerEvents = 'none';
    }
});

// ===== ADD LOADING STATE TO BUTTONS =====
function addLoadingState(button) {
    button.classList.add('loading');
    button.disabled = true;
    
    setTimeout(() => {
        button.classList.remove('loading');
        button.disabled = false;
    }, 2000);
}

// ===== COPY EMAIL TO CLIPBOARD =====
const emailElements = document.querySelectorAll('a[href^="mailto:"]');

emailElements.forEach(email => {
    email.addEventListener('click', (e) => {
        const emailText = email.textContent;
        
        // Optional: Add copy to clipboard functionality
        if (navigator.clipboard) {
            e.preventDefault();
            navigator.clipboard.writeText(emailText).then(() => {
                // Show a subtle notification
                const notification = document.createElement('div');
                notification.textContent = 'Email copied to clipboard!';
                notification.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: #10b981;
                    color: white;
                    padding: 1rem 1.5rem;
                    border-radius: 0.5rem;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                    z-index: 9999;
                    animation: slideIn 0.3s ease;
                `;
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }, 2000);
                
                // Also open default email client
                window.location.href = email.href;
            });
        }
    });
});

// ===== ADD KEYBOARD NAVIGATION =====
document.addEventListener('keydown', (e) => {
    // Press ESC to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
    
    // Press Ctrl/Cmd + K to focus search (if you add search later)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Focus search input
    }
});

// ===== PERFORMANCE MONITORING =====
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log(`%c⚡ Page loaded in ${pageLoadTime}ms`, 'color: #10b981; font-weight: bold;');
    });
}

// ===== HANDLE OFFLINE/ONLINE STATUS =====
window.addEventListener('online', () => {
    console.log('%c🟢 Back online!', 'color: #10b981;');
});

window.addEventListener('offline', () => {
    console.log('%c🔴 You are offline', 'color: #ef4444;');
});

// ===== ANIMATE ON SCROLL UTILITY =====
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check