/* ==========================================================
   Kelly Portfolio
   script.js
========================================================== */

"use strict";

/* ==========================================================
   DOM Elements
========================================================== */

const body = document.body;

const navbar = document.querySelector("header");

const hamburger = document.getElementById("hamburger");

const navMenu = document.querySelector(".nav-menu");

const themeToggle = document.getElementById("themeToggle");

const backToTop = document.getElementById("backToTop");

const cursor = document.querySelector(".cursor");

const navLinks = document.querySelectorAll(".nav-menu a");

const revealElements = document.querySelectorAll(".reveal");

/* ==========================================================
   Theme
========================================================== */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    body.classList.add("light");

    themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;

}

themeToggle.addEventListener("click", () => {

    body.classList.toggle("light");

    if (body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    }

    else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;

    }

});

/* ==========================================================
   Mobile Menu
========================================================== */

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = hamburger.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    }

    else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = hamburger.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});

/* ==========================================================
   Smooth Scroll
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});

/* ==========================================================
   Navbar Scroll Effect
========================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = body.classList.contains("light")

            ? "rgba(255,255,255,.92)"

            : "rgba(2,6,23,.92)";

        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    }

    else {

        navbar.style.background = body.classList.contains("light")

            ? "rgba(255,255,255,.75)"

            : "rgba(2,6,23,.65)";

        navbar.style.boxShadow = "none";

    }

});

/* ==========================================================
   Active Menu
========================================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.clientHeight;

        if (scrollY >= top && scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================================
   Reveal Animation
========================================================== */

function reveal() {

    revealElements.forEach(item => {

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

/* ==========================================================
   Back To Top
========================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    }

    else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================================
   Cursor
========================================================== */

if (window.innerWidth > 991 && cursor) {

    cursor.style.display = "block";

    document.addEventListener("mousemove", e => {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    });

}

/* ==========================================================
   Hero Animation
========================================================== */

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    if (hero) {

        hero.animate([

            {

                opacity: 0,

                transform: "translateY(40px)"

            },

            {

                opacity: 1,

                transform: "translateY(0)"

            }

        ], {

            duration: 900,

            easing: "ease-out"

        });

    }

});

/* ==========================================================
   Counter Animation
========================================================== */

function animateCounter(element, endValue) {

    let start = 0;

    const duration = 1500;

    const step = Math.ceil(endValue / (duration / 16));

    function update() {

        start += step;

        if (start >= endValue) {

            element.innerText = endValue;

            return;

        }

        element.innerText = start;

        requestAnimationFrame(update);

    }

    update();

}

document.querySelectorAll("[data-counter]").forEach(counter => {

    const value = parseInt(counter.dataset.counter);

    animateCounter(counter, value);

});

/* ==========================================================
   Keyboard Accessibility
========================================================== */

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        navMenu.classList.remove("active");

        const icon = hamburger.querySelector("i");

        if (icon) {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    }

});

/* ==========================================================
   Console
========================================================== */

console.log("%cKelly Portfolio Loaded Successfully 🚀",
    "color:#2563EB;font-size:16px;font-weight:bold;");
