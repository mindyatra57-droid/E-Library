/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");
        menuButton.classList.toggle("active");

    });


    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");
            menuButton.classList.remove("active");

        });

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".why-feature, .experience-image-wrap, .experience-content, .facility-item, .membership-main, .gallery-video-wrap, .gallery-photo, .tour-frame, .contact-content, .location-box"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal-visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal-element");

    revealObserver.observe(element);

});


/* =========================
   HEADER SCROLL
========================= */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {

        header.classList.add("header-scrolled");

    } else {

        header.classList.remove("header-scrolled");

    }

});
/* =========================
   LANGUAGE SWITCH
========================= */

const hindiBtn = document.getElementById("hindiBtn");
const englishBtn = document.getElementById("englishBtn");

const translations = {

    hi: {

        /* NAVBAR */
        "nav-home": "मुख्य पृष्ठ",
        "nav-facilities": "सुविधाएँ",
        "nav-experience": "अनुभव",
        "nav-gallery": "गैलरी",
        "nav-contact": "संपर्क",
        "nav-whatsapp": "WhatsApp",

        /* HERO */
        "hero-title": "श्री बालाजी एंटरप्राइजेज",
        "hero-heading": "शांत माहौल।",
        "hero-heading-2": "बेहतर एकाग्रता।",
        "hero-description": "पढ़ाई के लिए एक शांत, व्यवस्थित और सुविधाजनक अध्ययन स्थान।",
        "hero-location": "BAGWAS · PRATAPGARH, RAJASTHAN",
        "hero-button": "लाइब्रेरी देखें",

        /* STEP 3 */
        "why-eyebrow": "आपका अध्ययन स्थान",
        "why-title": "पढ़ने के लिए सिर्फ एक टेबल काफी नहीं होती।",
        "why-text": "सही माहौल, आरामदायक जगह और जरूरी सुविधाएँ आपकी पढ़ाई को बेहतर बनाने में अपना योगदान देती हैं।",

        "why-1-title": "शांत वातावरण",
        "why-1-text": "ऐसा वातावरण जहाँ आप बिना अनावश्यक शोर के अपनी पढ़ाई पर ध्यान दे सकें।",

        "why-2-title": "व्यवस्थित अध्ययन स्थान",
        "why-2-text": "व्यक्तिगत टेबल और आरामदायक सीटिंग, ताकि पढ़ाई के दौरान आपको अपना स्थान मिले।",

        "why-3-title": "पढ़ाई के लिए जरूरी सुविधाएँ",
        "why-3-text": "Wi-Fi, charging, AC, fan, अच्छी रोशनी और अन्य जरूरी सुविधाएँ एक ही जगह।",

        "why-bottom": "एक ऐसी जगह जहाँ आपका समय पढ़ाई के लिए हो।",

        /* STEP 4 */
        "experience-eyebrow": "वास्तविक अध्ययन स्थान",
        "experience-title": "आपकी सीट।",
        "experience-title-2": "आपका अध्ययन स्थान।",
        "experience-text-1": "पढ़ाई के लिए एक ऐसी जगह जहाँ आप अपना समय अपने लक्ष्य और अपनी तैयारी पर दे सकें।",
        "experience-text-2": "श्री बालाजी एंटरप्राइजेज ई-लाइब्रेरी में शांत वातावरण, व्यवस्थित सीटिंग और पढ़ाई के लिए जरूरी सुविधाओं को एक ही जगह रखा गया है।",
        "experience-location": "स्थान",

        /* STEP 5 */
        "facilities-eyebrow": "पढ़ाई के लिए जरूरी सुविधाएँ",
        "facilities-title": "सब कुछ",
        "facilities-title-2": "एक ही जगह।",
        "facilities-intro": "पढ़ाई के दौरान जिन छोटी-छोटी सुविधाओं की जरूरत पड़ती है, उन्हें आपके अध्ययन अनुभव का हिस्सा बनाया गया है।",

        "facility-1-title": "Wi-Fi",
        "facility-1-text": "जरूरी ऑनलाइन पढ़ाई और अध्ययन सामग्री के लिए।",

        "facility-2-title": "Charging",
        "facility-2-text": "अपने मोबाइल और जरूरी डिवाइस को चार्ज करने की सुविधा।",

        "facility-3-title": "CCTV",
        "facility-3-text": "अध्ययन स्थान की निगरानी के लिए CCTV सुविधा।",

        "facility-4-title": "AC & Fan",
        "facility-4-text": "अध्ययन के दौरान आरामदायक वातावरण बनाए रखने के लिए।",

        "facility-5-title": "अच्छी रोशनी",
        "facility-5-text": "लंबे समय तक पढ़ाई के लिए पर्याप्त lighting।",

        "facility-6-title": "पानी & Washroom",
        "facility-6-text": "पढ़ाई के दौरान जरूरी basic सुविधाएँ पास में।",

        "facilities-bottom": "पढ़ाई पर ध्यान दें। बाकी हम संभालते हैं।",

        /* STEP 6 */
        "membership-eyebrow": "सदस्यता",
        "membership-label": "MONTHLY MEMBERSHIP",
        "membership-title": "पढ़ाई के लिए",
        "membership-title-2": "अपनी जगह चुनें।",
        "membership-text": "एक शांत और व्यवस्थित अध्ययन स्थान, जहाँ आप नियमित रूप से अपनी तैयारी पर ध्यान दे सकें।",
        "membership-button": "सदस्यता के लिए संपर्क करें",

        /* STEP 7 */
        "gallery-eyebrow": "एक नज़र अंदर",
        "gallery-title": "हमारी",
        "gallery-title-2": "लाइब्रेरी।",
        "gallery-intro": "तस्वीरों से लेकर वास्तविक वीडियो तक — लाइब्रेरी के माहौल को करीब से देखें।",
        "gallery-video": "वास्तविक लाइब्रेरी अनुभव",
        "gallery-bottom": "जो आप देख रहे हैं, वही हमारा अध्ययन स्थान है।",

        /* STEP 8 */
        "tour-eyebrow": "वर्चुअल अनुभव",
        "tour-title": "अंदर आए बिना भी",
        "tour-title-2": "एक नज़र देखिए।",
        "tour-center": "लाइब्रेरी का माहौल करीब से देखें",
        "tour-text": "शांत अध्ययन वातावरण, सीटिंग और लाइब्रेरी के वास्तविक स्पेस का अनुभव करें।",

        /* STEP 9 */
        "contact-eyebrow": "संपर्क करें",
        "contact-title": "पढ़ाई की",
        "contact-title-2": "शुरुआत यहीं से।",
        "contact-location": "स्थान",
        "contact-phone": "संपर्क",
        "contact-time": "समय",
        "contact-call": "कॉल करें",
        "contact-whatsapp": "WhatsApp पर बात करें",
        "contact-visit": "बगवास · प्रतापगढ़",
        "contact-near": "हनुमान मंदिर के पास",
        "contact-map": "Google Maps पर रास्ता देखें"

    },

    en: {

        /* NAVBAR */
        "nav-home": "Home",
        "nav-facilities": "Facilities",
        "nav-experience": "Experience",
        "nav-gallery": "Gallery",
        "nav-contact": "Contact",
        "nav-whatsapp": "WhatsApp",

        /* HERO */
        "hero-title": "Shri Balaji Enterprises",
        "hero-heading": "A Calm Space.",
        "hero-heading-2": "Better Focus.",
        "hero-description": "A quiet, organized and comfortable study space designed for focused learning.",
        "hero-location": "BAGWAS · PRATAPGARH, RAJASTHAN",
        "hero-button": "Explore Library",

        /* STEP 3 */
        "why-eyebrow": "YOUR STUDY SPACE",
        "why-title": "A good study space needs more than just a table.",
        "why-text": "The right environment, comfortable space and essential facilities can make your study experience better.",

        "why-1-title": "Quiet Environment",
        "why-1-text": "A peaceful environment where you can focus on your studies without unnecessary noise.",

        "why-2-title": "Organized Study Space",
        "why-2-text": "Personal tables and comfortable seating so you have your own space to study.",

        "why-3-title": "Essential Study Facilities",
        "why-3-text": "Wi-Fi, charging, AC, fan, good lighting and other essential facilities in one place.",

        "why-bottom": "A place where your time belongs to your studies.",

        /* STEP 4 */
        "experience-eyebrow": "REAL STUDY SPACE",
        "experience-title": "Your Seat.",
        "experience-title-2": "Your Study Space.",
        "experience-text-1": "A place where you can spend your time focusing on your goals and preparation.",
        "experience-text-2": "Shri Balaji Enterprises E-Library brings together a peaceful environment, organized seating and essential study facilities in one place.",
        "experience-location": "LOCATION",

        /* STEP 5 */
        "facilities-eyebrow": "ESSENTIAL STUDY FACILITIES",
        "facilities-title": "Everything",
        "facilities-title-2": "In One Place.",
        "facilities-intro": "The small facilities you need during your study sessions are made part of your overall study experience.",

        "facility-1-title": "Wi-Fi",
        "facility-1-text": "For online study and essential learning material.",

        "facility-2-title": "Charging",
        "facility-2-text": "Charging facility for your mobile and essential devices.",

        "facility-3-title": "CCTV",
        "facility-3-text": "CCTV facility for monitoring the study space.",

        "facility-4-title": "AC & Fan",
        "facility-4-text": "For a comfortable environment while studying.",

        "facility-5-title": "Good Lighting",
        "facility-5-text": "Adequate lighting for longer study sessions.",

        "facility-6-title": "Water & Washroom",
        "facility-6-text": "Essential basic facilities available during your study time.",

        "facilities-bottom": "Focus on your studies. We take care of the rest.",

        /* STEP 6 */
        "membership-eyebrow": "MEMBERSHIP",
        "membership-label": "MONTHLY MEMBERSHIP",
        "membership-title": "Choose",
        "membership-title-2": "Your Study Space.",
        "membership-text": "A peaceful and organized study space where you can regularly focus on your preparation.",
        "membership-button": "Contact for Membership",

        /* STEP 7 */
        "gallery-eyebrow": "A LOOK INSIDE",
        "gallery-title": "Our",
        "gallery-title-2": "Library.",
        "gallery-intro": "From real photographs to our library video — take a closer look at the space.",
        "gallery-video": "Real Library Experience",
        "gallery-bottom": "What you see is our actual study space.",

        /* STEP 8 */
        "tour-eyebrow": "VIRTUAL EXPERIENCE",
        "tour-title": "Take a look",
        "tour-title-2": "Before you visit.",
        "tour-center": "Explore the library atmosphere",
        "tour-text": "Experience the peaceful study environment, seating and real library space.",

        /* STEP 9 */
        "contact-eyebrow": "GET IN TOUCH",
        "contact-title": "Start your",
        "contact-title-2": "Study Journey Here.",
        "contact-location": "LOCATION",
        "contact-phone": "CONTACT",
        "contact-time": "TIMINGS",
        "contact-call": "Call Us",
        "contact-whatsapp": "Chat on WhatsApp",
        "contact-visit": "Bagwas · Pratapgarh",
        "contact-near": "Near Hanuman Mandir",
        "contact-map": "Get Directions on Google Maps"

    }

};


/* =========================
   TRANSLATION FUNCTION
========================= */

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-lang]");

    elements.forEach((element) => {

        const key = element.getAttribute("data-lang");

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }

    });


    if (language === "hi") {

        hindiBtn.classList.add("active");
        englishBtn.classList.remove("active");

    } else {

        englishBtn.classList.add("active");
        hindiBtn.classList.remove("active");

    }

    localStorage.setItem("libraryLanguage", language);
}


/* =========================
   LANGUAGE BUTTONS
========================= */

if (hindiBtn && englishBtn) {

    hindiBtn.addEventListener("click", () => {
        changeLanguage("hi");
    });

    englishBtn.addEventListener("click", () => {
        changeLanguage("en");
    });

}


/* =========================
   REMEMBER LANGUAGE
========================= */

const savedLanguage = localStorage.getItem("libraryLanguage") || "hi";

changeLanguage(savedLanguage);