document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const btnId = document.getElementById('btn-id');
    const btnEn = document.getElementById('btn-en');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    document.querySelectorAll('.animate-on-scroll, .section, .timeline-item, .featured-card').forEach((element) => {
        element.classList.add('reveal-item');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal-item').forEach((element) => observer.observe(element));

    const switchLanguage = (lang) => {
        const path = window.location.pathname;
        const targetMap = {
            id: [
                ['projects-en.html', 'projects.html'],
                ['products-en.html', 'products.html'],
                ['index-en.html', 'index.html']
            ],
            en: [
                ['projects.html', 'projects-en.html'],
                ['products.html', 'products-en.html'],
                ['index.html', 'index-en.html']
            ]
        };

        const pair = targetMap[lang].find(([from]) => path.includes(from));
        if (pair) {
            window.location.href = pair[1];
            return;
        }

        window.location.href = lang === 'en' ? 'index-en.html' : 'index.html';
    };

    if (btnId) btnId.addEventListener('click', () => switchLanguage('id'));
    if (btnEn) btnEn.addEventListener('click', () => switchLanguage('en'));

    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"], .nav-menu a[href*="#"]');

    if (sections.length) {
        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - 180) current = section.id;
            });

            navLinks.forEach((link) => {
                const href = link.getAttribute('href') || '';
                link.classList.toggle('active', current && href.endsWith(`#${current}`));
            });
        }, { passive: true });
    }
});
