/**
 * Excellent Cutz - Main JavaScript
 * Handles language switching, carousel, navigation, lightbox, and UI interactions
 */

// ===================================
// Translations
// ===================================
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            gallery: 'Gallery',
            contact: 'Contact'
        },
        hero: {
            title: 'Excellent Cutz',
            subtitle: 'The Best Barbershop in Miami',
            rating: '4.8 ★★★★★ (69 reviews)',
            intro: 'Experience the art of traditional barbering with a modern touch. Our skilled barbers are dedicated to giving you the perfect cut and style.',
            book: 'Book Your Appointment',
            services: 'View Services'
        },
        about: {
            title: 'About Excellent Cutz',
            intro: 'Excellent Cutz stands out as a premier barbershop in Miami, renowned for its inviting atmosphere and exceptional service.',
            features: {
                atmosphere: {
                    title: 'Vibrant Atmosphere',
                    desc: "The shop's vibrant decor and meticulous attention to detail create a visually appealing environment that welcomes men, women, and children alike."
                },
                barbers: {
                    title: 'Expert Barbers',
                    desc: 'Customers frequently highlight the professionalism and skill of our barbers, including renowned talents like Robert and Leo, celebrated for their sharp styles and precision cuts.'
                },
                services: {
                    title: 'Diverse Services',
                    desc: 'From haircuts and beard trims to eyebrow shaping and shampooing, we cater to a wide array of grooming needs for the whole family.'
                },
                comfort: {
                    title: 'Comfortable Experience',
                    desc: 'Patrons appreciate the comfortable setting, complete with televisions and music, making each visit a relaxing experience.'
                }
            },
            stats: {
                rating: 'Rating',
                reviews: 'Reviews',
                satisfaction: 'Satisfaction'
            },
            loyalty: 'Many customers express their loyalty, noting that they have been returning for years, which speaks volumes about the quality and consistency of service provided.'
        },
        services: {
            title: 'Our Services',
            subtitle: 'Professional grooming services for the modern gentleman',
            haircut: {
                title: 'Haircut',
                desc: 'Precision haircut tailored to your style. Includes wash, cut, and styling.',
                price: 'from $25'
            },
            beard: {
                title: 'Beard Trim',
                desc: 'Professional beard shaping and trimming with razor line-up.',
                price: 'from $15'
            },
            shave: {
                title: 'Classic Shave',
                desc: 'Traditional hot towel shave with straight razor for a smooth finish.',
                price: 'from $30'
            },
            kids: {
                title: 'Kids Haircut',
                desc: 'Gentle and patient haircut service for children of all ages.',
                price: 'from $20'
            },
            color: {
                title: 'Hair Color',
                desc: 'Professional hair coloring, highlights, and gray blending services.',
                price: 'from $40'
            },
            full: {
                title: 'Full Service',
                desc: 'Complete grooming package: haircut, beard trim, and facial treatment.',
                price: 'from $60'
            }
        },
        gallery: {
            title: 'Our Gallery',
            subtitle: 'See the quality of our work and shop atmosphere'
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'Visit us or get in touch',
            address: {
                title: 'Address',
                text: '198 South Ct, Miami, FL 33147, United States',
                detail: 'Located at: Northside Shopping Center',
                plus: 'Plus Code: RQW4+X9 Miami, Florida'
            },
            phone: {
                title: 'Phone',
                text: '+1 (305) 555-1234'
            },
            email: {
                title: 'Email',
                text: 'info@xcellentcutz.com'
            },
            hours: {
                title: 'Hours',
                text: 'Mon – Sat: 9:00 AM – 7:00 PM',
                sunday: 'Sunday: Closed'
            },
            form: {
                title: 'Send us a message',
                name: 'Your Name',
                email: 'Your Email',
                message: 'Your Message',
                submit: 'Send Message'
            }
        },
        footer: {
            tagline: 'The Best Barbershop in Miami',
            quicklinks: 'Quick Links',
            legal: 'Legal',
            privacy: 'Privacy Policy',
            cookies: 'Cookie Policy',
            rights: 'All rights reserved.',
            designed: 'Designed by'
        }
    },
    es: {
        nav: {
            home: 'Inicio',
            about: 'Nosotros',
            services: 'Servicios',
            gallery: 'Galería',
            contact: 'Contacto'
        },
        hero: {
            title: 'Excellent Cutz',
            subtitle: 'La Mejor Barbería de Miami',
            rating: '4.8 ★★★★★ (69 reseñas)',
            intro: 'Experimenta el arte de la barbería tradicional con un toque moderno. Nuestros hábiles barberos se dedican a brindarte el corte y estilo perfecto.',
            book: 'Reserva tu Cita',
            services: 'Ver Servicios'
        },
        about: {
            title: 'Sobre Excellent Cutz',
            intro: 'Excellent Cutz se destaca como una barbería líder en Miami, reconocida por su ambiente acogedor y servicio excepcional.',
            features: {
                atmosphere: {
                    title: 'Ambiente Vibrante',
                    desc: 'La decoración vibrante de la tienda y la meticulosa atención al detalle crean un entorno visualmente atractivo que da la bienvenida a hombres, mujeres y niños por igual.'
                },
                barbers: {
                    title: 'Barberos Expertos',
                    desc: 'Los clientes frecuentemente destacan el profesionalismo y la habilidad de nuestros barberos, incluyendo talentos reconocidos como Robert y Leo, celebrados por sus estilos afilados y cortes de precisión.'
                },
                services: {
                    title: 'Servicios Diversos',
                    desc: 'Desde cortes de cabello y arreglos de barba hasta perfilado de cejas y shampoo, atendemos una amplia gama de necesidades de aseo para toda la familia.'
                },
                comfort: {
                    title: 'Experiencia Cómoda',
                    desc: 'Los clientes aprecian el ambiente cómodo, completo con televisores y música, haciendo que cada visita sea una experiencia relajante.'
                }
            },
            stats: {
                rating: 'Calificación',
                reviews: 'Reseñas',
                satisfaction: 'Satisfacción'
            },
            loyalty: 'Muchos clientes expresan su lealtad, señalando que han estado regresando durante años, lo que habla mucho sobre la calidad y consistencia del servicio proporcionado.'
        },
        services: {
            title: 'Nuestros Servicios',
            subtitle: 'Servicios profesionales de aseo para el caballero moderno',
            haircut: {
                title: 'Corte de Cabello',
                desc: 'Corte de cabello de precisión adaptado a tu estilo. Incluye lavado, corte y peinado.',
                price: 'desde $25'
            },
            beard: {
                title: 'Arreglo de Barba',
                desc: 'Perfilado y recorte profesional de barba con delineado con navaja.',
                price: 'desde $15'
            },
            shave: {
                title: 'Afeitado Clásico',
                desc: 'Afeitado tradicional con toalla caliente y navaja para un acabado suave.',
                price: 'desde $30'
            },
            kids: {
                title: 'Corte Infantil',
                desc: 'Servicio de corte de cabello gentil y paciente para niños de todas las edades.',
                price: 'desde $20'
            },
            color: {
                title: 'Color de Cabello',
                desc: 'Servicios profesionales de coloración, mechas y camuflaje de canas.',
                price: 'desde $40'
            },
            full: {
                title: 'Servicio Completo',
                desc: 'Paquete completo de aseo: corte de cabello, arreglo de barba y tratamiento facial.',
                price: 'desde $60'
            }
        },
        gallery: {
            title: 'Nuestra Galería',
            subtitle: 'Mira la calidad de nuestro trabajo y el ambiente de la tienda'
        },
        contact: {
            title: 'Contáctanos',
            subtitle: 'Visítanos o ponte en contacto',
            address: {
                title: 'Dirección',
                text: '198 South Ct, Miami, FL 33147, Estados Unidos',
                detail: 'Ubicado en: Northside Shopping Center',
                plus: 'Código Plus: RQW4+X9 Miami, Florida'
            },
            phone: {
                title: 'Teléfono',
                text: '+1 (305) 555-1234'
            },
            email: {
                title: 'Correo',
                text: 'info@xcellentcutz.com'
            },
            hours: {
                title: 'Horario',
                text: 'Lun – Sáb: 9:00 AM – 7:00 PM',
                sunday: 'Domingo: Cerrado'
            },
            form: {
                title: 'Envíanos un mensaje',
                name: 'Tu Nombre',
                email: 'Tu Correo',
                message: 'Tu Mensaje',
                submit: 'Enviar Mensaje'
            }
        },
        footer: {
            tagline: 'La Mejor Barbería de Miami',
            quicklinks: 'Enlaces Rápidos',
            legal: 'Legal',
            privacy: 'Política de Privacidad',
            cookies: 'Política de Cookies',
            rights: 'Todos los derechos reservados.',
            designed: 'Diseñado por'
        }
    }
};

// ===================================
// State Management
// ===================================
let currentLang = 'en';

// ===================================
// Carousel Variables
// ===================================
let currentSlide = 0;
let carouselInterval;
let isTransitioning = false;

// ===================================
// DOM Elements
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const langToggle = document.getElementById('lang-toggle');
const backToTop = document.getElementById('back-to-top');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxImg = document.getElementById('lightbox-img');
const contactForm = document.getElementById('contact-form');
const currentYearEl = document.getElementById('current-year');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');

// Carousel elements
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');

// ===================================
// Initialize
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }
    
    // Load saved language preference
    const savedLang = localStorage.getItem('excellentCutzLang');
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
        currentLang = savedLang;
    }
    
    // Update language UI immediately
    updateLangToggleUI();
    updateLanguage();
    
    // Preload carousel images
    preloadCarouselImages();
    
    // Initialize all functionality
    initCarousel();
    initNavigation();
    initLanguageToggle();
    initScrollEffects();
    initLightbox();
    initContactForm();
    initSmoothScroll();
});

// ===================================
// Preload Images
// ===================================
function preloadCarouselImages() {
    const imageUrls = [
        'images/Excellent-Cutz_3b4c2823b90a2ea7ec55c72645c76625.webp',
        'images/622334656_18303910591285420_5260635467426922271_n.jpg',
        'images/622732553_18192547726341960_7665706265206078128_n.jpg',
        'images/624209390_18066752495538889_4433605581937683624_n.jpg',
        'images/625427896_18199323046331756_427215664201768475_n.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// ===================================
// Hero Carousel
// ===================================
let carouselTouchStartX = 0;
let carouselTouchEndX = 0;

function initCarousel() {
    if (slides.length === 0) {
        console.log('No carousel slides found');
        return;
    }
    
    console.log('Carousel initialized with', slides.length, 'slides');

    // Auto-play carousel
    startCarousel();

    // Previous button
    if (carouselPrev) {
        carouselPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!isTransitioning) {
                goToSlide(currentSlide - 1);
                resetCarousel();
            }
        });
        
        // Touch support for prev button
        carouselPrev.addEventListener('touchstart', (e) => {
            e.stopPropagation();
        }, { passive: true });
        
        carouselPrev.addEventListener('touchend', (e) => {
            e.stopPropagation();
            if (!isTransitioning) {
                goToSlide(currentSlide - 1);
                resetCarousel();
            }
        });
    } else {
        console.log('No carousel prev button found');
    }

    // Next button
    if (carouselNext) {
        carouselNext.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!isTransitioning) {
                goToSlide(currentSlide + 1);
                resetCarousel();
            }
        });
        
        // Touch support for next button
        carouselNext.addEventListener('touchstart', (e) => {
            e.stopPropagation();
        }, { passive: true });
        
        carouselNext.addEventListener('touchend', (e) => {
            e.stopPropagation();
            if (!isTransitioning) {
                goToSlide(currentSlide + 1);
                resetCarousel();
            }
        });
    } else {
        console.log('No carousel next button found');
    }

    // Indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!isTransitioning && index !== currentSlide) {
                goToSlide(index);
                resetCarousel();
            }
        });
        
        // Touch support for indicators
        indicator.addEventListener('touchend', (e) => {
            e.stopPropagation();
            if (!isTransitioning && index !== currentSlide) {
                goToSlide(index);
                resetCarousel();
            }
        });
    });

    // Swipe support
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('touchstart', (e) => {
            carouselTouchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        heroSection.addEventListener('touchend', (e) => {
            carouselTouchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        // Pause on hover
        heroSection.addEventListener('mouseenter', stopCarousel);
        heroSection.addEventListener('mouseleave', startCarousel);
    }
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = carouselTouchStartX - carouselTouchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            if (!isTransitioning) {
                goToSlide(currentSlide + 1);
                resetCarousel();
            }
        } else {
            // Swipe right - previous slide
            if (!isTransitioning) {
                goToSlide(currentSlide - 1);
                resetCarousel();
            }
        }
    }
}

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }
    
    // Don't do anything if we're already on this slide
    if (index === currentSlide) return;
    
    // Prevent rapid transitions
    isTransitioning = true;
    setTimeout(() => {
        isTransitioning = false;
    }, 1000); // Match this with CSS transition duration
    
    // Remove active class from current
    slides[currentSlide]?.classList.remove('active');
    indicators[currentSlide]?.classList.remove('active');
    
    currentSlide = index;
    
    // Add active class to new slide
    slides[currentSlide]?.classList.add('active');
    indicators[currentSlide]?.classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function startCarousel() {
    carouselInterval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

function resetCarousel() {
    stopCarousel();
    startCarousel();
}

// ===================================
// Navigation
// ===================================
function initNavigation() {
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// ===================================
// Language Toggle
// ===================================
function initLanguageToggle() {
    if (langToggle) {
        const langOptions = langToggle.querySelectorAll('.lang-option');
        
        langOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = option.getAttribute('data-lang');
                if (selectedLang && selectedLang !== currentLang) {
                    currentLang = selectedLang;
                    localStorage.setItem('excellentCutzLang', currentLang);
                    updateLanguage();
                    updateLangToggleUI();
                }
            });
        });
    }
}

function updateLangToggleUI() {
    const langOptions = langToggle?.querySelectorAll('.lang-option');
    langOptions?.forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        if (optionLang === currentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let value = translations[currentLang];

        for (const key of keys) {
            if (value && value[key] !== undefined) {
                value = value[key];
            } else {
                value = null;
                break;
            }
        }

        if (value) {
            element.textContent = value;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
    
    // Update toggle UI
    updateLangToggleUI();
}

// ===================================
// Scroll Effects
// ===================================
function initScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', handleScroll);
    
    // Back to top button visibility
    window.addEventListener('scroll', handleBackToTop);
    
    // Initial check
    handleScroll();
    handleBackToTop();
}

function handleScroll() {
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
}

function handleBackToTop() {
    if (backToTop) {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    let minDistance = Infinity;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Check if we're within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
        
        // Find the section closest to the top
        const distance = Math.abs(scrollPosition - sectionTop);
        if (distance < minDistance && scrollPosition >= sectionTop - 100) {
            minDistance = distance;
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===================================
// Lightbox
// ===================================
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img && lightbox && lightboxImg) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    // Close on background click
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===================================
// Contact Form
// ===================================
function initContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission (no backend)
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    contactForm.reset();
}

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        bottom: '100px',
        right: '30px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: '#fff',
        fontWeight: '500',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: '3000',
        animation: 'slideInRight 0.3s ease',
        maxWidth: 'calc(100vw - 60px)'
    });
    
    if (type === 'success') {
        notification.style.background = '#25d366';
    } else if (type === 'error') {
        notification.style.background = '#dc3545';
    } else {
        notification.style.background = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add notification animations to document
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
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const navbarHeight = 80;
                const targetPosition = target.offsetTop - navbarHeight;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 800;
                let start = null;
                
                // Easing function
                const easeInOutCubic = (t) => {
                    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };
                
                const animation = (currentTime) => {
                    if (start === null) start = currentTime;
                    const timeElapsed = currentTime - start;
                    const progress = Math.min(timeElapsed / duration, 1);
                    const ease = easeInOutCubic(progress);
                    
                    window.scrollTo(0, startPosition + distance * ease);
                    
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                    }
                };
                
                requestAnimationFrame(animation);
                
                // Update active link immediately
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// ===================================
// Back to Top Button
// ===================================
if (backToTop) {
    backToTop.addEventListener('click', () => {
        const startPosition = window.pageYOffset;
        const distance = -startPosition;
        const duration = 600;
        let start = null;
        
        const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
        
        const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition + distance * ease);
            
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };
        
        requestAnimationFrame(animation);
    });
}

// ===================================
// Performance Optimization
// ===================================
// Debounce function for scroll events
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

// Optimize scroll event listeners
const optimizedScroll = debounce(() => {
    handleScroll();
    handleBackToTop();
}, 10);

// Replace scroll event listeners with optimized version
window.removeEventListener('scroll', handleScroll);
window.removeEventListener('scroll', handleBackToTop);
window.addEventListener('scroll', optimizedScroll);

// ===================================
// Lazy Loading for Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px'
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Console Welcome Message
// ===================================
console.log('%c🔥 Excellent Cutz 🔥', 'font-size: 24px; font-weight: bold; color: #d4af37;');
console.log('%cThe Best Barbershop in Miami', 'font-size: 14px; color: #666;');
console.log('%cDeveloped by Christian Freelance 💻', 'font-size: 12px; color: #999;');
