document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Animation on Scroll using Intersection Observer API
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    }

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } 
            // Optional: uncomment below to hide element when scrolled out of view
            // else {
            //     hideScrollElement(el);
            // }
        })
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initial check on page load
    handleScrollAnimation();

    // Squishy Mouse Effect for Buttons and Cards
    const squishyElements = document.querySelectorAll('.btn, .project-card, .skill-tag, .education-item, .contact-link, .nav-menu a, .btn-lang, .nav-logo, .timeline-dot, .story-image-wrapper, .highlight-card, .stat-item');
    
    squishyElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / (rect.height / 10);
            const rotateY = (centerX - x) / (rect.width / 10);
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08) translate(-5px, -5px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });

        el.addEventListener('mousedown', () => {
            el.style.transform = `perspective(1000px) scale(0.95) translate(2px, 2px)`;
        });

        el.addEventListener('mouseup', () => {
            el.style.transform = `perspective(1000px) scale(1.05) translate(-4px, -4px)`;
        });
    });

    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        // Only run scroll spy on pages with the main sections (home page)
        if (document.getElementById('about')) {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                // Don't remove active from the projects link if we are on projects page
                const isProjectsPage = window.location.pathname.includes('projects');
                const href = link.getAttribute('href');
                
                if (!isProjectsPage || !href.includes('projects')) {
                    link.classList.remove('active');
                }

                if (href && href.includes(current) && current !== '') {
                    link.classList.add('active');
                }
            });
        }
    });

});

// Dual language switcher
const langData = {
    id: {
        nav: ["Tentang", "Pengalaman", "Keahlian", "Proyek", "Kontak"],
        hero: {
            title: "Maulana Rahman",
            role: "Backend Programmer",
            summary: "Programmer Backend dengan pengalaman lebih dari 8 tahun menggunakan Golang dan PHP. Fokus pada kualitas kode, performa, dan keamanan aplikasi.",
            contact: "Hubungi Saya",
            linkedin: "Lihat di LinkedIn",
            github: "Lihat di Github"
        },
        about: {
            title: "Tentang Saya",
            desc: "Dengan pengalaman lebih dari 8 tahun, saya spesialis dalam membangun sistem backend yang tangguh dan berperforma tinggi untuk aplikasi skala besar. Mulai dari merancang API kompleks di Zahir Internasional hingga memodernisasi infrastruktur digital nasional untuk Bappenas RI, saya mengubah kebutuhan bisnis yang rumit menjadi kode yang skalabel. Saya tidak hanya menulis fungsi; saya membangun pondasi digital yang aman, efisien, dan siap menghadapi masa depan."
        },
        exp: {
            title: "Pengalaman Kerja",
            1: {
                role: "Senior Backend Programmer",
                company: "PT. Zahir Internasional",
                desc: "Memimpin pengembangan API inti untuk ekosistem Zahir (Accounting, HR, Inventory). Berhasil meningkatkan efisiensi pemrosesan data sebesar 40% dan mengintegrasikan sistem pembayaran pihak ketiga yang melayani ribuan bisnis UMKM di Asia Tenggara."
            },
            2: {
                role: "Technical Architect & Web Programmer",
                company: "Kementerian PPN/Bappenas",
                desc: "Merancang arsitektur sistem PRADA untuk kolaborasi perencanaan nasional. Mengelola migrasi database skala besar tanpa downtime dan mengoptimalkan performa dashboard yang digunakan oleh seluruh Bappeda di Indonesia."
            },
            3: {
                role: "Fullstack Web Programmer",
                company: "PT. Astech Alus Technology",
                desc: "Membangun dan merancang solusi enterprise dari nol. Fokus pada pengembangan arsitektur yang modular dan skalabel menggunakan Laravel dan PHP modern, menghasilkan produk yang memangkas waktu operasional klien hingga 50%."
            }
        },
        skills: {
            title: "Keahlian",
            tech: "Tech Stacks",
            soft: "Soft Skills"
        },
        projects: {
            title: "Kisah Proyek",
            1: { title: "PrADa (Bappenas RI)", desc: "Platform kolaborasi perencanaan pembangunan daerah berbasis website." },
            2: { title: "Event Management Dr.Aisah Dahlan", desc: "Sistem Event Management Dr.Aisah Dahlan." },
            3: { title: "E-Office Pam Jaya DKI (BE)", desc: "Sistem manajemen dokumen dan arsip digital untuk Pam Jaya DKI." },
            4: { title: "Website Bappenas RI", desc: "Portal informasi resmi Kementerian PPN/Bappenas." },
            5: { title: "TNDE Pam Jaya DKI", desc: "Sistem tata naskah dinas elektronik untuk Pam Jaya DKI." },
            6: { title: "SOLUSI", desc: "Sistem Operasional Layanan Usaha dan Sarana Promosi - Pemerintah Kota Bogor" },
            7: { title: "Megaplasa.com", desc: "Situs lelang online." },
            8: { title: "Finance Report APP", desc: "Finance Report APP – PT Asuransi Kredit Indonesia (Askrindo)" },
            9: { title: "ERP - Taman Buah Mekarsari", desc: "ERP Pada Taman Buah Mekarsari (TBM)" }
        },
        edu: {
            title: "Pendidikan",
            1: {
                title: "Universitas Indraprasta PGRI",
                desc: "Prodi Teknik Informatika (IPK 3.4)"
            },
            2: {
                title: "SMKN 1 Cibinong",
                desc: "Jurusan Rekayasa Perangkat Lunak (RPL)"
            }
        },
        contact: {
            title: "Hubungi Saya",
            desc: "Jangan ragu untuk menghubungi saya melalui email atau terhubung di LinkedIn.",
            email: "maulana.code@gmail.com",
            linkedin: "LinkedIn",
            phone: "+62 857-1881-6971"
        }
    },
    en: {
        nav: ["About", "Experience", "Skills", "Projects", "Contact"],
        hero: {
            title: "Maulana Rahman",
            role: "Backend Programmer",
            summary: "Backend Programmer with over 8 years of experience in Golang and PHP. Focused on code quality, performance, and application security.",
            contact: "Contact Me",
            linkedin: "View LinkedIn",
            github: "View Github"
        },
        about: {
            title: "About Me",
            desc: "With over 8 years of experience, I specialize in building robust, high-performance backend systems that power large-scale applications. From architecting complex APIs at Zahir Internasional to modernizing national digital infrastructure for the Indonesian Government (Bappenas), I turn complex business requirements into scalable code. I don't just write functions; I build digital foundations that are secure, efficient, and ready for the future."
        },
        exp: {
            title: "Work Experience",
            1: {
                role: "Senior Backend Programmer",
                company: "PT. Zahir Internasional",
                desc: "Leading core API development for the Zahir ecosystem. Successfully increased data processing efficiency by 40% and integrated third-party payment systems serving thousands of businesses across Southeast Asia."
            },
            2: {
                role: "Technical Architect & Web Programmer",
                company: "Ministry of National Development Planning (Bappenas)",
                desc: "Architected the PRADA system for national planning collaboration. Managed large-scale database migrations with zero downtime and optimized dashboard performance used by regional governments across Indonesia."
            },
            3: {
                role: "Fullstack Web Programmer",
                company: "PT. Astech Alus Technology",
                desc: "Built and designed enterprise solutions from the ground up. Focused on developing modular and scalable architectures using Laravel and modern PHP, resulting in products that reduced client operational time by 50%."
            }
        },
        skills: {
            title: "Skills",
            tech: "Tech Stacks",
            soft: "Soft Skills"
        },
        projects: {
            title: "Project Stories",
            1: { title: "PrADa (Bappenas RI)", desc: "Web-based regional development planning collaboration platform." },
            2: { title: "Event Management Dr.Aisah Dahlan", desc: "Event Management System for Dr.Aisah Dahlan." },
            3: { title: "E-Office Pam Jaya DKI (BE)", desc: "Document and digital archive management system for Pam Jaya DKI." },
            4: { title: "Website Bappenas RI", desc: "Official information portal of the Ministry of National Development Planning (Bappenas)." },
            5: { title: "TNDE Pam Jaya DKI", desc: "Electronic official document management system for Pam Jaya DKI." },
            6: { title: "SOLUSI", desc: "Operational Service and Promotion Facility System - Bogor City Government" },
            7: { title: "Megaplasa.com", desc: "Online auction site." },
            8: { title: "Finance Report APP", desc: "Finance Report APP – PT Asuransi Kredit Indonesia (Askrindo)" },
            9: { title: "ERP - Taman Buah Mekarsari", desc: "ERP at Taman Buah Mekarsari (TBM)" }
        },
        edu: {
            title: "Education",
            1: {
                title: "Indraprasta PGRI University",
                desc: "Informatics Engineering (GPA 3.4)"
            },
            2: {
                title: "SMKN 1 Cibinong",
                desc: "Software Engineering"
            }
        },
        contact: {
            title: "Contact Me",
            desc: "Feel free to contact me via email or connect on LinkedIn.",
            email: "maulana.code@gmail.com",
            linkedin: "LinkedIn",
            phone: "+62 857-1881-6971"
        }
    }
};

function setLanguage(lang) {
    const updateText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    // Nav
    updateText('nav-about', langData[lang].nav[0]);
    updateText('nav-experience', langData[lang].nav[1]);
    updateText('nav-skills', langData[lang].nav[2]);
    updateText('nav-projects', langData[lang].nav[3]);
    
    // Update projects link href
    const navProjects = document.getElementById('nav-projects');
    if (navProjects) {
        navProjects.setAttribute('href', lang === 'en' ? 'projects-en.html' : 'projects.html');
    }

    // Hero
    updateText('hero-title', langData[lang].hero.title);
    updateText('hero-role', langData[lang].hero.role);
    updateText('hero-summary', langData[lang].hero.summary);
    updateText('hero-contact', langData[lang].hero.contact);
    updateText('hero-linkedin', langData[lang].hero.linkedin);
    updateText('hero-github', langData[lang].hero.github);

    // About
    updateText('about-title', langData[lang].about.title);
    updateText('about-desc', langData[lang].about.desc);

    // About Highlights
    if (lang === 'id') {
        updateText('high1-title', "Skalabilitas");
        updateText('high1-desc', "Arsitektur sistem yang siap tumbuh bersama jutaan pengguna.");
        updateText('high2-title', "Keamanan");
        updateText('high2-desc', "Prioritas utama pada integritas dan perlindungan data sensitif.");
        updateText('high3-title', "Performa");
        updateText('high3-desc', "Optimasi kode untuk latensi rendah dan throughput tinggi.");
        
        // About Stats
        updateText('stat-exp', "Tahun Pengalaman");
        updateText('stat-proj', "Proyek Selesai");
        updateText('stat-focus', "Backend Focus");
        updateText('btn-cv', "Unduh CV Lengkap");

        // Philosophy
        updateText('phi-title', "Filosofi Kerja");
        updateText('phi1-title', "Clean Code");
        updateText('phi1-desc', "Kode yang mudah dibaca adalah kode yang mudah dipelihara.");
        updateText('phi2-title', "Scalable Design");
        updateText('phi2-desc', "Membangun untuk hari ini dengan visi untuk masa depan.");
        updateText('phi3-title', "Test Driven");
        updateText('phi3-desc', "Kualitas dijamin melalui pengujian yang ketat dan otomatis.");
    } else {
        updateText('high1-title', "Scalability");
        updateText('high1-desc', "System architecture ready to grow with millions of users.");
        updateText('high2-title', "Security");
        updateText('high2-desc', "Top priority on data integrity and sensitive protection.");
        updateText('high3-title', "Performance");
        updateText('high3-desc', "Code optimization for low latency and high throughput.");

        // About Stats
        updateText('stat-exp', "Years Experience");
        updateText('stat-proj', "Projects Completed");
        updateText('stat-focus', "Backend Focus");
        updateText('btn-cv', "Download Full CV");

        // Philosophy
        updateText('phi-title', "Work Philosophy");
        updateText('phi1-title', "Clean Code");
        updateText('phi1-desc', "Code that is easy to read is code that is easy to maintain.");
        updateText('phi2-title', "Scalable Design");
        updateText('phi2-desc', "Building for today with a vision for tomorrow.");
        updateText('phi3-title', "Test Driven");
        updateText('phi3-desc', "Quality guaranteed through rigorous automated testing.");
    }

    // Experience
    updateText('exp-title', langData[lang].exp.title);
    updateText('exp1-role', langData[lang].exp[1].role);
    updateText('exp1-company', langData[lang].exp[1].company);
    updateText('exp1-desc', langData[lang].exp[1].desc);
    updateText('exp2-role', langData[lang].exp[2].role);
    updateText('exp2-company', langData[lang].exp[2].company);
    updateText('exp2-desc', langData[lang].exp[2].desc);
    updateText('exp3-role', langData[lang].exp[3].role);
    updateText('exp3-company', langData[lang].exp[3].company);
    updateText('exp3-desc', langData[lang].exp[3].desc);

    // Skills
    updateText('skills-title', langData[lang].skills.title);
    updateText('skills-tech', langData[lang].skills.tech);
    updateText('skills-soft', langData[lang].skills.soft);

    // Projects
    const projectsTitle = document.getElementById('projects-title');
    if (projectsTitle) {
        projectsTitle.textContent = langData[lang].projects.title;
    }

    const projectsBtn = document.querySelector('#projects .btn');
    if (projectsBtn) {
        projectsBtn.setAttribute('href', lang === 'en' ? 'projects-en.html' : 'projects.html');
        projectsBtn.innerHTML = lang === 'en' 
            ? 'Read Full Stories <i class="fas fa-arrow-right" style="margin-left: 15px;"></i>' 
            : 'Baca Kisah Selengkapnya <i class="fas fa-arrow-right" style="margin-left: 15px;"></i>';
    }
    
    for (let i = 1; i <= 9; i++) {
        updateText(`project${i}-title`, langData[lang].projects[i].title);
        updateText(`project${i}-desc`, langData[lang].projects[i].desc);
    }

    // Education
    updateText('edu-title', langData[lang].edu.title);
    updateText('edu1-title', langData[lang].edu[1].title);
    updateText('edu1-desc', langData[lang].edu[1].desc);
    updateText('edu2-title', langData[lang].edu[2].title);
    updateText('edu2-desc', langData[lang].edu[2].desc);

    // Contact
    updateText('contact-title', langData[lang].contact.title);
    updateText('contact-desc', langData[lang].contact.desc);
    updateText('contact-email', langData[lang].contact.email);
    updateText('contact-linkedin', langData[lang].contact.linkedin);
    updateText('contact-phone', langData[lang].contact.phone);
}

document.addEventListener('DOMContentLoaded', function() {
    const btnId = document.getElementById('btn-id');
    const btnEn = document.getElementById('btn-en');
    if (btnId && btnEn) {
        btnId.addEventListener('click', function() {
            if (window.location.pathname.includes('projects-en.html')) {
                window.location.href = 'projects.html';
                return;
            }
            setLanguage('id');
            btnId.classList.add('active');
            btnEn.classList.remove('active');
        });
        btnEn.addEventListener('click', function() {
            if (window.location.pathname.includes('projects.html') && !window.location.pathname.includes('projects-en.html')) {
                window.location.href = 'projects-en.html';
                return;
            }
            setLanguage('en');
            btnEn.classList.add('active');
            btnId.classList.remove('active');
        });
    }
    // Default language detection
    const initialLang = document.documentElement.lang === 'en' ? 'en' : 'id';
    setLanguage(initialLang);
    if (initialLang === 'en') {
        btnEn.classList.add('active');
        btnId.classList.remove('active');
    } else {
        btnId.classList.add('active');
        btnEn.classList.remove('active');
    }
});