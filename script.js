// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 100) {
        navbar.style.background = 'rgba(44, 62, 80, 0.98)';
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(44, 62, 80, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
    
    // Only apply parallax effect when hero is visible
    if (scrolled < heroHeight) {
        const parallaxSpeed = 0.3;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
});

// Parallax effect for about section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const about = document.querySelector('.about');
    const aboutTop = about.offsetTop;
    const aboutHeight = about.offsetHeight;
    const windowHeight = window.innerHeight;
    
    // Apply parallax when about section is visible
    if (scrolled + windowHeight > aboutTop && scrolled < aboutTop + aboutHeight) {
        const parallaxSpeed = 0.2; // Plus lent pour la section about
        const yPos = (scrolled - aboutTop) * parallaxSpeed;
        about.style.backgroundPosition = `center ${yPos}px`;
    }
});

// Parallax effect for services section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const services = document.querySelector('.services');
    const servicesTop = services.offsetTop;
    const servicesHeight = services.offsetHeight;
    const windowHeight = window.innerHeight;
    
    // Apply parallax when services section is visible
    if (scrolled + windowHeight > servicesTop && scrolled < servicesTop + servicesHeight) {
        const parallaxSpeed = 0.15; // Encore plus subtil pour la section services
        const yPos = (scrolled - servicesTop) * parallaxSpeed;
        services.style.backgroundPosition = `center ${yPos}px`;
    }
});

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to elements on page load
document.addEventListener('DOMContentLoaded', function() {
    // Elements to animate
    const animateElements = document.querySelectorAll('.service-card, .quality, .method-item, .about-text p');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Signature animation observer
    const signatureObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animer chaque lettre avec un délai progressif
                const letters = entry.target.querySelectorAll('.letter');
                letters.forEach((letter, index) => {
                    setTimeout(() => {
                        letter.style.opacity = '1';
                        letter.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                    }, 500 + index * 200);
                });
                
                signatureObserver.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe signature container
    const signatureContainer = document.querySelector('.signature-container');
    if (signatureContainer) {
        signatureObserver.observe(signatureContainer);
    }
});

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const nom = formData.get('nom');
        const email = formData.get('email');
        const service = formData.get('service');
        const message = formData.get('message');
        
        // Basic validation
        if (!nom || !email || !service || !message) {
            showNotification('Veuillez remplir tous les champs', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Veuillez entrer une adresse email valide', 'error');
            return;
        }
        
        // Simulate form submission
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Envoi en cours...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            showNotification('Votre message a été envoyé avec succès! Je vous répondrai dans les plus brefs délais.', 'success');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
});

// Notification system
function showNotification(message, type) {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#d4edda' : '#f8d7da'};
        border: 1px solid ${type === 'success' ? '#c3e6cb' : '#f5c6cb'};
        color: ${type === 'success' ? '#155724' : '#721c24'};
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .notification-close {
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
            margin-left: 10px;
            color: inherit;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeButton = notification.querySelector('.notification-close');
    closeButton.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Scroll indicator functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#apropos');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Counter animation for stats (if needed in future)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Service card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1)';
        });
    });
});

// Loading animation for page
window.addEventListener('load', function() {
    // Hide loading spinner if exists
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
    
    // Animate hero content
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .cta-button');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or notifications
        const notification = document.querySelector('.notification');
        if (notification) {
            notification.remove();
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll events
const throttledScrollHandler = throttle(function() {
    // Parallax effect
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
    
    if (scrolled < heroHeight) {
        const parallaxSpeed = 0.3;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// ✨ Three.js Stars Effect for Signature
class SignatureStarsEffect {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.canvas.offsetWidth / this.canvas.offsetHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: this.canvas, 
            alpha: true,
            antialias: true 
        });
        
        this.stars = [];
        this.isActive = false;
        
        this.init();
    }
    
    init() {
        // Setup renderer
        this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
        this.renderer.setClearColor(0x000000, 0);
        
        // Setup camera
        this.camera.position.z = 5;
        
        // Create star geometry
        this.createStars();
        
        // Handle resize
        window.addEventListener('resize', () => this.onWindowResize());
    }
    
    createStars() {
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 15; // Nombre d'étoiles
        
        const positions = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);
        const colors = new Float32Array(starCount * 3);
        
        // Couleurs dorées pour les étoiles
        const goldColor = new THREE.Color(0xd4af37);
        const lightGoldColor = new THREE.Color(0xffd700);
        
        for (let i = 0; i < starCount; i++) {
            // Position aléatoire autour de la signature
            positions[i * 3] = (Math.random() - 0.5) * 8;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 3;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 2;
            
            // Taille aléatoire
            sizes[i] = Math.random() * 3 + 1;
            
            // Couleur dorée avec variations
            const color = Math.random() > 0.5 ? goldColor : lightGoldColor;
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        
        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        
        // Shader material pour l'effet scintillant
        const starMaterial = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                opacity: { value: 0 }
            },
            vertexShader: `
                attribute float size;
                attribute vec3 color;
                varying vec3 vColor;
                varying float vSize;
                uniform float time;
                uniform float opacity;
                
                void main() {
                    vColor = color;
                    vSize = size;
                    
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    
                    // Effet de scintillement
                    float twinkle = sin(time * 3.0 + position.x * 10.0) * 0.5 + 0.5;
                    gl_PointSize = size * twinkle * 3.0;
                    
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                uniform float opacity;
                
                void main() {
                    float r = distance(gl_PointCoord, vec2(0.5, 0.5));
                    if (r > 0.5) discard;
                    
                    float alpha = 1.0 - smoothstep(0.0, 0.5, r);
                    alpha *= opacity;
                    
                    gl_FragColor = vec4(vColor, alpha);
                }
            `,
            blending: THREE.AdditiveBlending,
            transparent: true
        });
        
        this.starSystem = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(this.starSystem);
    }
    
    start() {
        if (this.isActive) return;
        
        this.isActive = true;
        this.canvas.classList.add('active');
        
        // Animation d'apparition des étoiles
        this.animateIn();
        
        // Démarrer le rendu
        this.animate();
        
        // Programmer la disparition après 6 secondes (durée de la signature + délai)
        setTimeout(() => {
            this.fadeOut();
        }, 6000);
    }
    
    animateIn() {
        const material = this.starSystem.material;
        const startTime = Date.now();
        
        const fadeIn = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            material.uniforms.opacity.value = Math.min(elapsed / 2, 1); // Fondu sur 2 secondes
            
            if (elapsed < 2) {
                requestAnimationFrame(fadeIn);
            }
        };
        
        fadeIn();
    }
    
    fadeOut() {
        const material = this.starSystem.material;
        const startTime = Date.now();
        
        const fadeOutAnim = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            material.uniforms.opacity.value = Math.max(1 - elapsed / 1.5, 0); // Fondu sur 1.5 secondes
            
            if (elapsed < 1.5) {
                requestAnimationFrame(fadeOutAnim);
            } else {
                this.stop();
            }
        };
        
        fadeOutAnim();
    }
    
    stop() {
        this.isActive = false;
        this.canvas.classList.remove('active');
    }
    
    animate() {
        if (!this.isActive) return;
        
        requestAnimationFrame(() => this.animate());
        
        // Mettre à jour le temps pour l'effet de scintillement
        this.starSystem.material.uniforms.time.value = Date.now() * 0.001;
        
        // Rotation lente du système d'étoiles
        this.starSystem.rotation.z += 0.001;
        
        this.renderer.render(this.scene, this.camera);
    }
    
    onWindowResize() {
        if (!this.canvas.offsetWidth || !this.canvas.offsetHeight) return;
        
        this.camera.aspect = this.canvas.offsetWidth / this.canvas.offsetHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight);
    }
}

// Initialiser l'effet d'étoiles quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    const starsEffect = new SignatureStarsEffect('stars-canvas');
    const signatureVideo = document.querySelector('.signature-animation');
    let animationTriggered = false; // Pour s'assurer que l'animation ne se joue qu'une fois
    
    // Détecter Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    // Si Safari, remplacer la vidéo par le GIF
    if (isSafari && signatureVideo) {
        const gifFallback = signatureVideo.querySelector('.signature-fallback');
        if (gifFallback) {
            // Cacher complètement la vidéo et l'ancien GIF
            signatureVideo.style.display = 'none';
            gifFallback.style.display = 'none';
            
            // Créer un conteneur spécial pour Safari
            const safariContainer = document.createElement('div');
            safariContainer.className = 'safari-signature-container';
            safariContainer.style.cssText = `
                position: relative;
                display: inline-block;
                background: transparent !important;
                border: none !important;
                margin: 0 !important;
                padding: 0 !important;
                overflow: visible;
                width: auto;
                height: auto;
            `;
            
            // Créer l'image ultra-transparente pour Safari
            const animatedImg = document.createElement('img');
            animatedImg.src = 'images/signature_safari_transparent.gif';
            animatedImg.alt = 'Signature manuscrite dorée Christelle';
            animatedImg.className = 'signature-animation-safari-ultra';
            animatedImg.style.cssText = `
                max-width: 500px;
                height: auto;
                transform: scale(1.3);
                filter: drop-shadow(0 3px 10px rgba(212, 175, 55, 0.2));
                transition: all 0.3s ease;
                display: none;
                background: transparent !important;
                border: none !important;
                outline: none !important;
                box-shadow: none !important;
                margin: 0 !important;
                padding: 0 !important;
                border-radius: 0 !important;
                overflow: visible;
                -webkit-mask-image: none !important;
                mask-image: none !important;
                clip-path: none !important;
                -webkit-box-shadow: none !important;
                -webkit-border-radius: 0 !important;
                -webkit-appearance: none !important;
                vertical-align: top;
                image-rendering: -webkit-optimize-contrast;
                image-rendering: crisp-edges;
            `;
            
            // Ajouter au conteneur Safari
            safariContainer.appendChild(animatedImg);
            
            // Remplacer le conteneur vidéo par le conteneur Safari
            signatureVideo.parentNode.appendChild(safariContainer);
        }
    }
    
    // Observer pour déclencher l'effet quand la signature devient visible
    const signatureObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationTriggered) {
                animationTriggered = true; // Marquer comme déclenché
                
                if (isSafari) {
                    // Pour Safari, montrer le GIF animé
                    const safariImg = document.querySelector('.signature-animation-safari-ultra');
                    if (safariImg) {
                        safariImg.style.display = 'block';
                        // Redémarrer l'animation GIF
                        const src = safariImg.src;
                        safariImg.src = '';
                        safariImg.src = src;
                    }
                } else {
                    // Pour les autres navigateurs, utiliser la vidéo
                    if (signatureVideo) {
                        signatureVideo.currentTime = 0;
                        signatureVideo.play().catch(e => console.log('Autoplay bloqué:', e));
                    }
                }
                
                // Déclencher l'effet d'étoiles avec un petit délai
                setTimeout(() => {
                    starsEffect.start();
                }, 500);
                
                // Observer une seule fois
                signatureObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3, // Se déclenche quand 30% de la section est visible
        rootMargin: '0px 0px -50px 0px'
    });

    // Observer le conteneur de signature
    const signatureContainer = document.querySelector('.signature-container');
    if (signatureContainer) {
        // Empêcher l'autoplay initial
        if (signatureVideo && !isSafari) {
            signatureVideo.autoplay = false;
            signatureVideo.pause();
            signatureVideo.currentTime = 0;
        }
        
        signatureObserver.observe(signatureContainer);
    }
}); 