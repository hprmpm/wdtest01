document.addEventListener('DOMContentLoaded', (event) => {
    const headerLogo = document.querySelector('.header-logo');
    const headerNav = document.getElementById('sticky-nav');
    
    if (headerLogo && headerNav) {
        const triggerPoint = 50; 

        window.addEventListener('scroll', () => {
            if (window.scrollY > triggerPoint) {
                headerLogo.classList.add('logo-faded');
                headerNav.classList.add('nav-scrolled');
            } else {
                headerLogo.classList.remove('logo-faded');
                headerNav.classList.remove('nav-scrolled');
            }
        });
    }
    
    const fadeInElements = document.querySelectorAll('.fade-in');

    if (fadeInElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        fadeInElements.forEach(el => {
            observer.observe(el);
        });
    }

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            const title = card.querySelector('.card-title') || card.querySelector('h4');
            if (title) {
                console.log(`你點擊了卡片: ${title.innerText}`);
            } else {
                console.log('你點擊了一張卡片。');
            }
        });
    });

});