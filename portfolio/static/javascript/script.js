// Activate hamburger menu
const menuIcon = document.querySelector(".menu-icon");
const navlist = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
});

// Remove navlist when clicking outside
navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
});

// Rotate text effect
const textElement = document.querySelector(".text p");
textElement.innerHTML = [...textElement.innerHTML].map((char, i) =>
    `<b style="transform:rotate(${i * 6.3}deg)">${char}</b>`
).join("");

// Switch between about buttons
const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        contents.forEach(content => content.style.display = 'none');
        contents[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Portfolio filter initialization
const mixer = mixitup('.portfolio-gallery', {
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 500
    }
});

// Initialize Swiper.js for carousel/slider
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
});

// Skill progress bar logic
const firstSkill = document.querySelector(".skill:first-child");
const skillCounters = document.querySelectorAll(".counter span");
const progressBars = document.querySelectorAll(".skills svg circle");

let skillsPlayed = false;

window.addEventListener("scroll", () => {
    if (!skillsPlayed) skillsCounter();
});

function hasReached(el) {
    const topPosition = el.getBoundingClientRect().top;
    return window.innerHeight >= topPosition + el.offsetHeight;
}

function updateCount(counter, target) {
    const currentNum = +counter.innerText;
    if (currentNum < target) {
        counter.innerText = currentNum + 1;
        setTimeout(() => updateCount(counter, target), 12);
    }
}

function skillsCounter() {
    if (!hasReached(firstSkill)) return;
    skillsPlayed = true;

    skillCounters.forEach((counter, i) => {
        const target = +counter.dataset.target;
        const strokeValue = 465 - 465 * (target / 100);

        progressBars[i].style.setProperty("--target", strokeValue);
        setTimeout(() => updateCount(counter, target), 400);
    });

    progressBars.forEach(bar => bar.style.animation = "progress 2s ease-in-out forwards");
}

// Scroll progress bar
const scrollProgress = document.getElementById("progress");

function calcScrollValue() {
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollValue = Math.round((pos * 100) / calcHeight);

    scrollProgress.style.display = pos > 100 ? "grid" : "none";
    scrollProgress.addEventListener("click", () => document.documentElement.scrollTop = 0);

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%, #e6006d ${scrollValue}%)`;
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// Active menu highlighting
const menuLinks = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll("section");

function activateMenu() {
    let index = sections.length;
    while (--index && window.scrollY + 97 < sections[index].offsetTop) {}
    menuLinks.forEach(link => link.classList.remove("active"));
    menuLinks[index].classList.add("active");
}

window.addEventListener("scroll", activateMenu);

// ScrollReveal animations
ScrollReveal({
    distance: "90px",
    duration: 2000,
    delay: 200,
    // reset: true,
});

ScrollReveal().reveal('.hero-info, .main-text, .proposal, .heading', { origin: "top" });
ScrollReveal().reveal('.about-img, .filter-buttons, .contact-info', { origin: "left" });
ScrollReveal().reveal('.about-content, .skills', { origin: "right" });
ScrollReveal().reveal('.allServices, .portfolio-gallery, .blog-box, footer, .img-hero', { origin: "bottom" });
