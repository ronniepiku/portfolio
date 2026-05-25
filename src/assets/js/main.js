// Portfolio Interactive Features

// Scroll Progress Bar
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Scroll Reveal Animations
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 100); // Stagger animations
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Active Navigation Highlighting
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active-nav');
            }
        });
    });
}

// Smooth Scroll with Offset
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Typing Animation for Hero
function initTypingAnimation() {
    const element = document.getElementById('typed-text');
    if (!element) return;

    const texts = [
        'Performance Data Analyst & ML Engineer',
        'Python & SQL Specialist',
        'Machine Learning Engineer',
        'Data Visualization Expert'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function type() {
        const currentText = texts[textIndex];

        if (isPaused) {
            setTimeout(type, 2000);
            isPaused = false;
            return;
        }

        if (isDeleting) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            isPaused = true;
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing after initial page load animation
    setTimeout(type, 1500);
}

// Parallax Effect for Hero Background
function initParallax() {
    const hero = document.querySelector('section');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxElements = hero.querySelectorAll('[aria-hidden="true"] > div');

        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Mobile Menu Toggle (enhanced)
function initMobileNav() {
    const btn = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', !expanded);
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                btn.setAttribute('aria-expanded', 'false');
                menu.classList.add('hidden');
            });
        });
    }
}

// Add cursor glow effect
function initCursorGlow() {
    const glow = document.createElement('div');
    glow.className = 'fixed pointer-events-none w-96 h-96 rounded-full bg-brand-500/5 blur-3xl transition-all duration-500 -translate-x-1/2 -translate-y-1/2 hidden lg:block';
    glow.style.zIndex = '0';
    document.body.appendChild(glow);

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;

        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}

// Initialize all features on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initScrollReveal();
    initActiveNav();
    initSmoothScroll();
    initTypingAnimation();
    initParallax();
    initMobileNav();
    initCursorGlow();
});
