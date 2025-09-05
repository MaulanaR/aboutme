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

    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

});

// Dual language switcher
const langData = {
    id: {
        nav: ["Tentang", "Pengalaman", "Keahlian", "Proyek", "Kontak"],
        hero: {
            title: "Maulana Rahman",
            role: "Backend Programmer",
            summary: "Programmer Backend dengan pengalaman lebih dari 7 tahun menggunakan Golang dan PHP. Fokus pada kualitas kode, performa, dan keamanan aplikasi.",
            contact: "Hubungi Saya",
            linkedin: "Lihat LinkedIn"
        },
        about: {
            title: "Tentang Saya",
            desc: "Saya adalah seorang backend programmer yang berdedikasi dengan pengalaman dalam perancangan API, manajemen basis data, serta integrasi sistem pada berbagai aplikasi. Saya selalu bersemangat untuk mengikuti perkembangan teknologi terbaru dan menerapkannya untuk menciptakan solusi yang efisien dan andal."
        },
        exp: {
            title: "Pengalaman Kerja",
            1: {
                role: "Backend Programmer",
                company: "PT. Zahir Internasional",
                desc: "Bertanggung jawab dalam pengembangan aplikasi Zahir — seperti Zahir Accounting Online, Zahir HR, dan Zahir Accounting 7 — dengan memelihara serta mengembangkan fitur-fitur API baru untuk integrasi yang lebih lancar."
            },
            2: {
                role: "T.A Web Programmer",
                company: "Kementerian PPN/Bappenas",
                desc: "Bertanggung jawab atas pengembangan dan implementasi fitur baru pada situs web PRADA. Memigrasikan sistem ke Content Management System (CMS) baru dan meningkatkan performa situs."
            },
            3: {
                role: "Web Programmer",
                company: "PT. Astech Alus Technology",
                desc: "Merancang dan membangun aplikasi dari awal hingga akhir menggunakan PHP dengan framework CodeIgniter dan Laravel, serta teknologi frontend seperti HTML, CSS, dan JavaScript."
            }
        },
        skills: {
            title: "Keahlian",
            tech: "Tech Stacks",
            soft: "Soft Skills"
        },
        projects: {
            title: "Proyek",
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
            summary: "Backend Programmer with over 6 years of experience in Golang and PHP. Focused on code quality, performance, and application security.",
            contact: "Contact Me",
            linkedin: "View LinkedIn"
        },
        about: {
            title: "About Me",
            desc: "I am a dedicated backend programmer experienced in API design, database management, and system integration for various applications. I am always eager to keep up with the latest technology trends and apply them to create efficient and reliable solutions."
        },
        exp: {
            title: "Work Experience",
            1: {
                role: "Backend Programmer",
                company: "PT. Zahir Internasional",
                desc: "Responsible for developing Zahir applications — such as Zahir Accounting Online, Zahir HR, and Zahir Accounting 7 — maintaining and developing new API features for smoother integration."
            },
            2: {
                role: "T.A Web Programmer",
                company: "Ministry of National Development Planning (Bappenas)",
                desc: "Responsible for developing and implementing new features on the PRADA website. Migrated the system to a new Content Management System (CMS) and improved site performance."
            },
            3: {
                role: "Web Programmer",
                company: "PT. Astech Alus Technology",
                desc: "Designed and built applications from scratch using PHP with CodeIgniter and Laravel frameworks, as well as frontend technologies like HTML, CSS, and JavaScript."
            }
        },
        skills: {
            title: "Skills",
            tech: "Tech Stacks",
            soft: "Soft Skills"
        },
        projects: {
            title: "Projects",
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
    // Nav
    document.getElementById('nav-about').textContent = langData[lang].nav[0];
    document.getElementById('nav-experience').textContent = langData[lang].nav[1];
    document.getElementById('nav-skills').textContent = langData[lang].nav[2];
    document.getElementById('nav-projects').textContent = langData[lang].nav[3];
    document.getElementById('nav-contact').textContent = langData[lang].nav[4];

    // Hero
    document.getElementById('hero-title').textContent = langData[lang].hero.title;
    document.getElementById('hero-role').textContent = langData[lang].hero.role;
    document.getElementById('hero-summary').textContent = langData[lang].hero.summary;
    document.getElementById('hero-contact').textContent = langData[lang].hero.contact;
    document.getElementById('hero-linkedin').textContent = langData[lang].hero.linkedin;

    // About
    document.getElementById('about-title').textContent = langData[lang].about.title;
    document.getElementById('about-desc').textContent = langData[lang].about.desc;

    // Experience
    document.getElementById('exp-title').textContent = langData[lang].exp.title;
    document.getElementById('exp1-role').textContent = langData[lang].exp[1].role;
    document.getElementById('exp1-company').textContent = langData[lang].exp[1].company;
    document.getElementById('exp1-desc').textContent = langData[lang].exp[1].desc;
    document.getElementById('exp2-role').textContent = langData[lang].exp[2].role;
    document.getElementById('exp2-company').textContent = langData[lang].exp[2].company;
    document.getElementById('exp2-desc').textContent = langData[lang].exp[2].desc;
    document.getElementById('exp3-role').textContent = langData[lang].exp[3].role;
    document.getElementById('exp3-company').textContent = langData[lang].exp[3].company;
    document.getElementById('exp3-desc').textContent = langData[lang].exp[3].desc;

    // Skills
    document.getElementById('skills-title').textContent = langData[lang].skills.title;
    document.getElementById('skills-tech').textContent = langData[lang].skills.tech;
    document.getElementById('skills-soft').textContent = langData[lang].skills.soft;

    // Projects
    document.getElementById('projects-title').textContent = langData[lang].projects.title;
    for (let i = 1; i <= 9; i++) {
        const titleEl = document.getElementById(`project${i}-title`);
        const descEl = document.getElementById(`project${i}-desc`);
        if (titleEl && descEl) {
            titleEl.textContent = langData[lang].projects[i].title;
            descEl.textContent = langData[lang].projects[i].desc;
        }
    }

    // Education
    document.getElementById('edu-title').textContent = langData[lang].edu.title;
    document.getElementById('edu1-title').textContent = langData[lang].edu[1].title;
    document.getElementById('edu1-desc').textContent = langData[lang].edu[1].desc;
    document.getElementById('edu2-title').textContent = langData[lang].edu[2].title;
    document.getElementById('edu2-desc').textContent = langData[lang].edu[2].desc;

    // Contact
    document.getElementById('contact-title').textContent = langData[lang].contact.title;
    document.getElementById('contact-desc').textContent = langData[lang].contact.desc;
    document.getElementById('contact-email').textContent = langData[lang].contact.email;
    document.getElementById('contact-linkedin').textContent = langData[lang].contact.linkedin;
    document.getElementById('contact-phone').textContent = langData[lang].contact.phone;
}

document.addEventListener('DOMContentLoaded', function() {
    const btnId = document.getElementById('btn-id');
    const btnEn = document.getElementById('btn-en');
    if (btnId && btnEn) {
        btnId.addEventListener('click', function() {
            setLanguage('id');
            btnId.classList.add('active');
            btnEn.classList.remove('active');
        });
        btnEn.addEventListener('click', function() {
            setLanguage('en');
            btnEn.classList.add('active');
            btnId.classList.remove('active');
        });
    }
    // Default language
    setLanguage('id');
});