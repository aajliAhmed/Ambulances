// Script pour les animations et la navigation fluide
document.addEventListener('DOMContentLoaded', function() {
    
    // Gestion du défilement fluide pour les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Animation de défilement fluide
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Animation sur le lien cliqué
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
    
    // Animation d'apparition des éléments au scroll
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
    
    // Éléments à animer
    const animatedElements = document.querySelectorAll('.overlap-7, .overlap-8, .overlap-9, .group-8, .group-10, .contactez-nous-2');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Animation du header au chargement
    const header = document.querySelector('.header-section');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-20px)';
        header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            header.style.opacity = '1';
            header.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Animation des statistiques
    const statsElements = document.querySelectorAll('.text-wrapper-6, .text-wrapper-8, .text-wrapper-10, .text-wrapper-12, .stat-number');
    
    function animateNumbers() {
        statsElements.forEach(el => {
            const finalNumber = el.textContent;
            const isNumber = /^\d+/.test(finalNumber);
            
            if (isNumber) {
                const number = parseInt(finalNumber);
                let current = 0;
                const increment = number / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= number) {
                        current = number;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current) + finalNumber.replace(/^\d+/, '');
                }, 30);
            }
        });
    }
    
    // Déclencher l'animation des nombres quand la section est visible
    const statsSection = document.querySelector('.isolation-mode');
    const newStatsSection = document.querySelector('.statistics-section');
    
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
    
    if (newStatsSection) {
        const newStatsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    newStatsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        newStatsObserver.observe(newStatsSection);
    }
    
    // Indicateur de scroll et navigation active
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Indicateur de scroll
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolledPercent = (scrolled / windowHeight) * 100;
            scrollIndicator.style.width = scrolledPercent + '%';
        }
        
        // Mise à jour du lien actif dans la navigation
        updateActiveNavLink();
    });
    
    // Fonction pour mettre à jour le lien actif
    function updateActiveNavLink() {
        const sections = ['#a-propos', '#services', '#temoignages', '#contact'];
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        sections.forEach(section => {
            const element = document.querySelector(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    }
    
    // Animation des boutons au survol
    const buttons = document.querySelectorAll('.button, .button-2, .button-3');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Animation du bouton "En Savoir Plus"
    const enSavoirPlusBtn = document.querySelector('.en-savoir-plus');
    const aboutButtonText = document.querySelector('.about-button-text');
    
    // Animation du bouton "Contactez Nous" dans la section Availability
    const contactButtonText = document.querySelector('.contact-button-text');
    
    if (enSavoirPlusBtn) {
        enSavoirPlusBtn.addEventListener('click', function() {
            const aProposSection = document.querySelector('#a-propos');
            if (aProposSection) {
                aProposSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    if (aboutButtonText) {
        aboutButtonText.addEventListener('click', function() {
            const aProposSection = document.querySelector('#a-propos');
            if (aProposSection) {
                aProposSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    if (contactButtonText) {
        contactButtonText.addEventListener('click', function() {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Animation spéciale pour les numéros d'urgence
    const emergencyNumbers = document.querySelectorAll('.call, .call-2, .call-3, .call-text, .availability-call .call-text');
    emergencyNumbers.forEach(number => {
        number.classList.add('pulse-animation');
        
        // Arrêter l'animation au survol
        number.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        number.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
    
    // Animation du bouton d'appel dans la section Hero
    const heroCallButton = document.querySelector('.hero-call-button');
    if (heroCallButton) {
        heroCallButton.classList.add('pulse-animation');
        
        heroCallButton.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        heroCallButton.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
        
        // Ajouter un effet de clic pour simuler un appel
        heroCallButton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
    
    // Animation d'apparition progressive des éléments au chargement
    const loadAnimation = () => {
        const elements = document.querySelectorAll('.overlap-7, .overlap-8, .overlap-9, .group-8, .group-10');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-fade-in-up');
            }, index * 200);
        });
    };
    
    // Déclencher l'animation de chargement
    setTimeout(loadAnimation, 500);
    
    // Activer la carte "Assistance Médicale" par défaut
    setTimeout(() => {
        const assistanceMedicaleCard = document.querySelector('[data-service="assistance-medicale"]');
        if (assistanceMedicaleCard) {
            activateCard(assistanceMedicaleCard);
            currentlyActiveCard = assistanceMedicaleCard;
        }
    }, 1000);
    
    // Animation des icônes au survol
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Animation des cartes de service avec système de redimensionnement et superposition
    const serviceCards = document.querySelectorAll('.service-card');
    const indicators = document.querySelectorAll('.indicator');
    let currentlyActiveCard = null;
    let isAnimating = false;
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Éviter les clics multiples pendant l'animation
            if (isAnimating) return;
            isAnimating = true;
            
            // Si cette carte est déjà active, la désactiver
            if (currentlyActiveCard === this) {
                deactivateCard(this);
                deactivateAllIndicators();
                currentlyActiveCard = null;
                
                setTimeout(() => {
                    isAnimating = false;
                }, 500);
                
            } else {
                // Désactiver la carte actuellement active (s'il y en a une)
                if (currentlyActiveCard) {
                    deactivateCard(currentlyActiveCard);
                    deactivateAllIndicators();
                }
                
                // Activer cette carte
                activateCard(this);
                currentlyActiveCard = this;
                
                // Activer l'indicateur correspondant
                activateIndicator(this);
                
                setTimeout(() => {
                    isAnimating = false;
                }, 500);
            }
        });
    });
    
    // Fonction pour activer une carte
    function activateCard(card) {
        // Agrandir la carte
        card.classList.add('active');
        card.style.flex = '2.5';
        card.style.maxWidth = '850px';
        card.style.height = '537px';
        card.style.zIndex = '10';
        card.style.transform = 'translateX(0)';
        
        // Afficher le contenu de service (rectangle blanc)
        const serviceContent = card.querySelector('.service-content');
        if (serviceContent) {
            serviceContent.style.opacity = '1';
        }
        
        // Afficher et repositionner l'image
        const serviceImage = card.querySelector('.service-image');
        if (serviceImage) {
            serviceImage.style.display = 'block';
            serviceImage.style.visibility = 'visible';
            serviceImage.style.opacity = '0';
            serviceImage.style.width = '681px';
            serviceImage.style.height = '587px';
            serviceImage.style.left = '221px';
            serviceImage.style.borderRadius = '0px 19.34px 29.34px 19.34px';
            
            // Forcer un reflow pour que l'animation fonctionne
            requestAnimationFrame(() => {
                serviceImage.style.opacity = '1';
            });
        }
        
        // Repositionner l'icône
        const layer = card.querySelector('.layer-2');
        if (layer) {
            layer.style.top = '0px';
        }
        
        // Repositionner les textes
        const title = card.querySelector('.text-wrapper-21, .text-wrapper-23, .text-wrapper-25');
        const description = card.querySelector('.text-wrapper-22, .text-wrapper-24, .text-wrapper-26');
        if (title) {
            title.style.color = '#1b1b1b';
            title.style.top = '247px';
            title.style.left = '43px';
        }
        if (description) {
            description.style.color = '#707070';
            description.style.top = '342px';
            description.style.left = '43px';
        }
        
        // Réduire et reculer les autres cartes
        serviceCards.forEach(c => {
            if (c !== card) {
                c.style.flex = '1';
                c.style.maxWidth = '349px';
                c.style.height = '507px';
                c.style.zIndex = '1';
                c.style.transform = 'translateX(-50px)';
                
                // Cacher le contenu de service
                const otherServiceContent = c.querySelector('.service-content');
                if (otherServiceContent) {
                    otherServiceContent.style.opacity = '0';
                }
                
                // Cacher l'image
                const otherImage = c.querySelector('.service-image');
                if (otherImage) {
                    otherImage.style.opacity = '0';
                    otherImage.style.visibility = 'hidden';
                    setTimeout(() => {
                        otherImage.style.display = 'none';
                    }, 500);
                }
                
                // Repositionner l'icône
                const otherLayer = c.querySelector('.layer-2');
                if (otherLayer) {
                    otherLayer.style.top = '0';
                }
                
                // Repositionner les textes
                const otherTitle = c.querySelector('.text-wrapper-21, .text-wrapper-23, .text-wrapper-25');
                const otherDescription = c.querySelector('.text-wrapper-22, .text-wrapper-24, .text-wrapper-26');
                if (otherTitle) {
                    otherTitle.style.color = '#ffffff';
                    otherTitle.style.top = '200px';
                    otherTitle.style.left = '35px';
                }
                if (otherDescription) {
                    otherDescription.style.color = '#ffffff';
                    otherDescription.style.top = '324px';
                    otherDescription.style.left = '35px';
                }
            }
        });
    }
    
    // Fonction pour désactiver une carte
    function deactivateCard(card) {
        // Remettre la carte à sa taille normale
        card.classList.remove('active');
        card.style.flex = '1';
        card.style.maxWidth = '349px';
        card.style.height = '507px';
        card.style.zIndex = '1';
        card.style.transform = 'translateX(0)';
        
        // Cacher le contenu de service
        const serviceContent = card.querySelector('.service-content');
        if (serviceContent) {
            serviceContent.style.opacity = '0';
        }
        
        // Cacher l'image
        const serviceImage = card.querySelector('.service-image');
        if (serviceImage) {
            serviceImage.style.opacity = '0';
            serviceImage.style.visibility = 'hidden';
            setTimeout(() => {
                serviceImage.style.display = 'none';
            }, 500);
        }
        
        // Repositionner l'icône
        const layer = card.querySelector('.layer-2');
        if (layer) {
            layer.style.top = '0';
        }
        
        // Repositionner les textes
        const title = card.querySelector('.text-wrapper-21, .text-wrapper-23, .text-wrapper-25');
        const description = card.querySelector('.text-wrapper-22, .text-wrapper-24, .text-wrapper-26');
        if (title) {
            title.style.color = '#ffffff';
            title.style.top = '200px';
            title.style.left = '35px';
        }
        if (description) {
            description.style.color = '#ffffff';
            description.style.top = '324px';
            description.style.left = '35px';
        }
    }
    
    // Fonction pour activer l'indicateur correspondant à une carte
    function activateIndicator(card) {
        const serviceType = card.getAttribute('data-service');
        const targetIndicator = document.querySelector(`[data-indicator="${serviceType}"]`);
        
        if (targetIndicator) {
            // Désactiver tous les indicateurs d'abord
            deactivateAllIndicators();
            
            // Activer l'indicateur correspondant - taille grande (rectangle-15)
            targetIndicator.classList.add('active');
            
            // Réduire les autres indicateurs à la taille petite (rectangle-16)
            indicators.forEach(indicator => {
                if (indicator !== targetIndicator) {
                    indicator.classList.remove('active');
                }
            });
            
            // Effet de rebond pour l'indicateur actif
            setTimeout(() => {
                targetIndicator.style.transform = 'scale(1.1)';
            }, 150);
        }
    }
    
    // Fonction pour désactiver tous les indicateurs
    function deactivateAllIndicators() {
        indicators.forEach(indicator => {
            indicator.classList.remove('active');
            indicator.style.transform = 'scale(1)';
            
            // Remettre les tailles par défaut selon la position
            if (indicator.classList.contains('rectangle-15')) {
                indicator.style.width = '131px';
            } else if (indicator.classList.contains('rectangle-16')) {
                indicator.style.width = '25px';
            } else if (indicator.classList.contains('rectangle-17')) {
                indicator.style.width = '17px';
            }
        });
    }
    
    // Ajouter des événements de clic sur les indicateurs pour activer les cartes correspondantes
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const indicatorType = this.getAttribute('data-indicator');
            const targetCard = document.querySelector(`[data-service="${indicatorType}"]`);
            
            if (targetCard) {
                // Simuler un clic sur la carte correspondante
                targetCard.click();
            }
        });
    });
    
    // Activer l'élément du milieu par défaut
    function initializeDefaultState() {
        const middleIndicator = document.querySelector('[data-indicator="assistance-medicale"]');
        const middleCard = document.querySelector('[data-service="assistance-medicale"]');
        
        if (middleIndicator && middleCard) {
            // Activer la carte du milieu
            activateCard(middleCard);
            currentlyActiveCard = middleCard;
            
            // Activer l'indicateur du milieu
            activateIndicator(middleCard);
        }
    }
    
    // Initialiser l'état par défaut après un court délai
    setTimeout(initializeDefaultState, 100);
}); 

// === ACTUALISATION DE LA PAGE PAR LE LOGO ===
(function() {
    const logo = document.querySelector('.logo');
    
    if (logo) {
        logo.addEventListener('click', function() {
            // Actualisation simple de la page sans effet
            window.location.reload();
        });
        
        // Rendre le logo cliquable visuellement
        logo.style.cursor = 'pointer';
    }
})();

// === GESTION DES ICÔNES DE TÉLÉPHONE ===
(function() {
    const phoneIcons = document.querySelectorAll('.phone-icon');
    
    phoneIcons.forEach(icon => {
        // Rendre l'icône cliquable
        icon.style.cursor = 'pointer';
        
        // Ajouter un effet de clic
        icon.addEventListener('click', function() {
            // Animation de pulsation
            this.classList.add('pulse');
            
            // Supprimer la classe après l'animation
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 1000);
            
            // Optionnel : Ouvrir le téléphone ou copier le numéro
            const phoneNumber = '0143961515';
            
            // Essayer d'ouvrir l'application téléphone
            if (navigator.userAgent.match(/iPhone|iPad|iPod|Android/i)) {
                // Pour les appareils mobiles
                window.location.href = `tel:${phoneNumber}`;
            } else {
                // Pour les ordinateurs de bureau, copier le numéro
                navigator.clipboard.writeText(phoneNumber).then(() => {
                    // Afficher une notification (optionnel)
                    console.log('Numéro copié : ' + phoneNumber);
                }).catch(err => {
                    console.log('Impossible de copier le numéro');
                });
            }
        });
        
        // Effet de survol amélioré
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.filter = 'brightness(0) invert(1)';
        });
    });
    
})();

// === DÉFILEMENT FLUIDE VERS LES SECTIONS ===
(function() {
    // Gestion du défilement fluide pour tous les liens de navigation
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Vérifier si c'est un lien interne (commence par #)
            if (href && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // Retirer la classe active de tous les liens
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    
                    // Ajouter la classe active au lien cliqué
                    this.classList.add('active');
                    
                    // Défilement fluide vers l'élément cible
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                    
                    // Optionnel : Ajouter un effet visuel sur l'élément cible
                    targetElement.style.transition = 'all 0.3s ease';
                    targetElement.style.transform = 'scale(1.02)';
                    
                    setTimeout(() => {
                        targetElement.style.transform = 'scale(1)';
                    }, 300);
                }
            }
        });
    });
    
    // Gestion spécifique pour le lien "Témoignages" vers rectangle-10
    const temoignagesLink = document.querySelector('a[href="#rectangle-10"]');
    const rectangle10 = document.getElementById('rectangle-10');
    
    if (temoignagesLink && rectangle10) {
        temoignagesLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Retirer la classe active de tous les liens
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Ajouter la classe active au lien Témoignages
            this.classList.add('active');
            
            // Défilement fluide vers rectangle-10
            rectangle10.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            });
            
            // Effet visuel sur rectangle-10
            rectangle10.classList.add('scroll-target');
            rectangle10.style.transition = 'all 0.5s ease';
            rectangle10.style.transform = 'scale(1.05)';
            rectangle10.style.filter = 'brightness(1.2)';
            
            setTimeout(() => {
                rectangle10.style.transform = 'scale(1)';
                rectangle10.style.filter = 'brightness(1)';
                rectangle10.classList.remove('scroll-target');
            }, 500);
        });
    }
    
    // Gestion du scroll pour mettre à jour les liens actifs
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100; // Offset pour la détection
        
        // Vérifier la position de rectangle-10
        if (rectangle10) {
            const rect10Top = rectangle10.offsetTop;
            const rect10Bottom = rect10Top + rectangle10.offsetHeight;
            
            if (scrollPosition >= rect10Top && scrollPosition < rect10Bottom) {
                // Retirer la classe active de tous les liens
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                
                // Ajouter la classe active au lien Témoignages
                if (temoignagesLink) {
                    temoignagesLink.classList.add('active');
                }
            }
        }
    });
    
})();

// === CARROUSEL ANIMATION POUR LES TÉMOIGNAGES ===
(function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const group7 = document.querySelector('.group-7');
    
    if (testimonialCards.length < 2 || !group7) return;
    
    // Variables pour l'animation
    let isAnimating = false;
    let currentFrontIndex = 0; // Index de la carte en position avant
    
    // Fonction pour appliquer les styles de position
    function applyPositionStyles(card, position) {
        // Retirer toutes les classes de position
        card.classList.remove('front-position', 'back-position', 'position-left', 'position-right', 'position-hidden');
        
        // Ajouter la classe de position appropriée
        card.classList.add(position);
        
        // Appliquer la classe de style appropriée
        if (position === 'position-left') {
            card.classList.add('front-position');
        } else if (position === 'position-right') {
            card.classList.add('back-position');
        } else if (position === 'position-hidden') {
            card.classList.add('back-position');
        }
    }
    
    // Fonction pour obtenir la position suivante
    function getNextPosition(currentIndex, targetIndex, totalCards) {
        if (targetIndex === currentIndex) return 'position-left';
        
        // Position gauche (avant)
        if (targetIndex === currentIndex) return 'position-left';
        
        // Position droite (arrière)
        if (targetIndex === (currentIndex + 1) % totalCards) return 'position-right';
        
        // Position cachée
        return 'position-hidden';
    }
    
    // Fonction pour échanger les positions
    function swapPositions() {
        if (isAnimating) return;
        isAnimating = true;
        
        const nextFrontIndex = (currentFrontIndex + 1) % testimonialCards.length;
        
        // Appliquer les nouvelles positions
        testimonialCards.forEach((card, index) => {
            let newPosition;
            
            if (index === nextFrontIndex) {
                newPosition = 'position-left'; // Devient avant
            } else if (index === currentFrontIndex) {
                newPosition = 'position-right'; // Devient arrière
        } else {
                newPosition = 'position-hidden'; // Reste caché
            }
            
            // Appliquer la nouvelle position (sans effets d'animation)
            applyPositionStyles(card, newPosition);
        });
        
        // Mettre à jour l'index
        currentFrontIndex = nextFrontIndex;
        
        // Réinitialiser les animations après la transition
        setTimeout(() => {
            isAnimating = false;
            updateIndicators();
        }, 800);
    }
    
    // Fonction pour aller à un témoignage spécifique
    function goToTestimonial(index) {
        if (isAnimating || index === currentFrontIndex) return;
        
        isAnimating = true;
        
        // Appliquer les nouvelles positions
        testimonialCards.forEach((card, cardIndex) => {
            let newPosition;
            
            if (cardIndex === index) {
                newPosition = 'position-left'; // Devient avant
            } else if (cardIndex === currentFrontIndex) {
                newPosition = 'position-right'; // Devient arrière
            } else {
                newPosition = 'position-hidden'; // Reste caché
            }
            
            // Appliquer la nouvelle position (sans effets d'animation)
            applyPositionStyles(card, newPosition);
        });
        
        // Mettre à jour l'index
        currentFrontIndex = index;
        
        // Réinitialiser les animations après la transition
        setTimeout(() => {
            isAnimating = false;
            updateIndicators();
        }, 800);
    }
    
    // Configuration des indicateurs
    const group12 = document.querySelector('.group-12');
    const indicators = group12 ? group12.querySelectorAll('[data-carousel-indicator="true"]') : [];
    
    // Configurer les indicateurs
    indicators.forEach((indicator, index) => {
        if (index < testimonialCards.length) {
            indicator.classList.add('carousel-indicator');
            indicator.setAttribute('data-testimonial-index', index);
            
            indicator.addEventListener('click', function() {
                goToTestimonial(index);
            });
        } else {
            // Cacher les indicateurs en trop
            indicator.style.display = 'none';
        }
    });
    
    // Fonction pour mettre à jour les indicateurs
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.remove('active');
            if (index === currentFrontIndex) {
                indicator.classList.add('active');
            }
        });
    }
    
    // Animation automatique toutes les 5 secondes
    setInterval(() => {
        if (!isAnimating) {
            swapPositions();
        }
    }, 5000);
    
    // Animation au survol des témoignages
    testimonialCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            if (!isAnimating && index !== currentFrontIndex) {
                setTimeout(() => goToTestimonial(index), 300);
            }
        });
    });
    
    // Initialiser les positions
    testimonialCards.forEach((card, index) => {
        if (index === 0) {
            applyPositionStyles(card, 'position-left');
        } else if (index === 1) {
            applyPositionStyles(card, 'position-right');
        } else {
            applyPositionStyles(card, 'position-hidden');
        }
    });
    
    // Initialiser les indicateurs
    updateIndicators();
    
})();

// === Ajuste aussi la hauteur pour que le scroll soit parfait ===
(function () {
    const DESIGN_W = 1882;
    const root = document.querySelector('.ambulances-de > .div');
    const wrapper = document.querySelector('.ambulances-de');
  
    function fit() {
      const scale = Math.min(window.innerWidth / DESIGN_W, 1);
      root.style.transformOrigin = 'top left';
      root.style.transform = `scale(${scale})`;
  
      // Calcule la hauteur visuelle une fois scalée pour éviter un gros blanc
      const rect = root.getBoundingClientRect();
      wrapper.style.height = rect.height + 'px';
    }
  
    window.addEventListener('load', fit);
    window.addEventListener('resize', fit);
  })();
  