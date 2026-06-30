// =========================================
// SkillBridge Animation Engine V3
// Part 1
// =========================================

gsap.registerPlugin(ScrollTrigger);

// -----------------------------
// Navbar Active Link
// -----------------------------

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    const href = link.getAttribute("href");

    link.classList.remove("active");

    if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active");
    }

});

// -----------------------------
// Navbar Blur
// -----------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.classList.add("nav-scroll");

    } else {

        nav.classList.remove("nav-scroll");

    }

});

// -----------------------------
// Scroll Progress Bar
// -----------------------------

const progress = document.createElement("div");

progress.className = "scroll-progress";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const percent =
        (window.scrollY / total) * 100;

    progress.style.width = percent + "%";

});

// -----------------------------
// Hero Animation
// -----------------------------

gsap.from(".hero-title",{

    opacity:0,

    y:50,

    duration:1,

    ease:"power3.out"

});

gsap.from(".hero-sub",{

    opacity:0,

    y:40,

    duration:1,

    delay:.25,

    ease:"power3.out"

});

gsap.from(".hero-actions",{

    opacity:0,

    y:30,

    duration:1,

    delay:.45,

    ease:"power3.out"

});

gsap.from(".hero-logo-img",{

    opacity:0,

    scale:.8,

    rotate:8,

    duration:1.2,

    ease:"back.out(1.7)"

});

// Floating logo

gsap.to(".hero-logo-img",{

    y:-12,

    repeat:-1,

    yoyo:true,

    duration:3,

    ease:"sine.inOut"

});

// -----------------------------
// Reveal Sections
// -----------------------------

gsap.utils.toArray("section").forEach(section=>{

    gsap.from(section,{

        opacity:0,

        y:70,

        duration:.9,

        ease:"power3.out",

        scrollTrigger:{

            trigger:section,

            start:"top 82%"

        }

    });

});

// =========================================
// Part 2
// Universal Card Animations
// =========================================

const cards = document.querySelectorAll(
'[class$="card"], [class*="card"]'
);

cards.forEach((card,index)=>{

    gsap.from(card,{

        opacity:0,

        y:60,

        scale:.95,

        duration:.7,

        delay:index*.05,

        ease:"power3.out",

        scrollTrigger:{

            trigger:card,

            start:"top 85%"

        }

    });

    card.addEventListener("mouseenter",()=>{

        gsap.to(card,{

            y:-10,

            scale:1.02,

            duration:.3,

            ease:"power2.out"

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            y:0,

            scale:1,

            duration:.3,

            ease:"power2.out"

        });

    });

});

// -----------------------------
// Buttons
// -----------------------------

document.querySelectorAll(".btn,button,.nav-cta").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        gsap.to(btn,{

            y:-4,

            duration:.25

        });

    });

    btn.addEventListener("mouseleave",()=>{

        gsap.to(btn,{

            y:0,

            duration:.25

        });

    });

});

// -----------------------------
// Images
// -----------------------------

document.querySelectorAll("img").forEach(img=>{

    img.addEventListener("mouseenter",()=>{

        gsap.to(img,{

            scale:1.04,

            duration:.3

        });

    });

    img.addEventListener("mouseleave",()=>{

        gsap.to(img,{

            scale:1,

            duration:.3

        });

    });

});

// -----------------------------
// Counter Animation
// -----------------------------

document.querySelectorAll(".counter").forEach(counter=>{

    const target = Number(counter.innerText);

    gsap.fromTo(counter,

        {

            innerText:0

        },

        {

            innerText:target,

            duration:2,

            snap:{innerText:1},

            ease:"power2.out",

            scrollTrigger:{

                trigger:counter,

                start:"top 85%"

            },

            onUpdate:function(){

                counter.innerText=Math.floor(counter.innerText);

            }

        }

    );

});

/* =====================================================
   WHY US PREMIUM ANIMATION V2
===================================================== */

if (document.querySelector("#why")) {

    // Create timeline
    const whyTimeline = gsap.timeline({

        scrollTrigger: {
            trigger: "#why",
            start: "top 70%",
            toggleActions: "play none none none"
        }

    });

    // Label
    whyTimeline.from("#why .section-label", {

        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out"

    });

    // Title
    whyTimeline.from("#why .section-title", {

        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out"

    }, "-=0.3");

    // Subtitle
    whyTimeline.from("#why .section-sub", {

        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out"

    }, "-=0.4");

    // Left Points
    whyTimeline.from("#why .why-point", {

        opacity: 0,
        x: -50,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out"

    }, "-=0.2");

    // Right Card
    whyTimeline.from("#why .why-visual", {

        opacity: 0,
        x: 80,
        duration: 0.8,
        ease: "power3.out"

    }, "-=0.8");

}

/* =====================================================
   Progress Bars
===================================================== */

document.querySelectorAll("#why .metric-bar").forEach(bar => {

    const finalWidth = bar.style.width;

    gsap.set(bar, {
        width: "0%"
    });

    ScrollTrigger.create({

        trigger: bar,

        start: "top 85%",

        once: true,

        onEnter: () => {

            gsap.to(bar, {

                width: finalWidth,

                duration: 1.6,

                ease: "power2.out"

            });

        }

    });

});

/* =====================================================
   Icon Hover
===================================================== */

document.querySelectorAll("#why .why-icon").forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        gsap.to(icon, {

            rotation: -10,
            scale: 1.18,
            duration: 0.25,
            ease: "back.out(2)"

        });

    });

    icon.addEventListener("mouseleave", () => {

        gsap.to(icon, {

            rotation: 0,
            scale: 1,
            duration: 0.25

        });

    });

});

/* =====================================================
   Right Card Hover
===================================================== */

const whyCard = document.querySelector("#why .why-visual");

if (whyCard) {

    whyCard.addEventListener("mouseenter", () => {

        gsap.to(whyCard, {

            y: -8,
            duration: 0.35,
            ease: "power2.out"

        });

    });

    whyCard.addEventListener("mouseleave", () => {

        gsap.to(whyCard, {

            y: 0,
            duration: 0.35

        });

    });

}
/* ===========================
TYPEWRITER EFFECT
=========================== */

const words = [
    "Projects",
    "Internships",
    "Innovation",
    "Career",
    "Success"
];

const typingElement = document.getElementById("typing-text");

if (typingElement) {

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const currentWord = words[wordIndex];

        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(0, charIndex++);

            if (charIndex > currentWord.length) {

                deleting = true;

// Pause after typing a word
setTimeout(type, 2800);



                return;

            }

        } else {

            typingElement.textContent =
                currentWord.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex = (wordIndex + 1) % words.length;

            }

        }

        setTimeout(type, deleting ? 50 : 100);

    }

    type();

}