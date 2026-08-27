const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Project filter logic
const filterButtons = document.querySelectorAll(".filter-btn");
const imageGallery = document.getElementById("image-gallery");
const videoGallery = document.getElementById("video-gallery");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Manage active button state
        document.querySelector(".filter-btn.active").classList.remove("active");
        button.classList.add("active");

        // Show/hide galleries
        const filter = button.getAttribute("data-filter");
        if (filter === "images") {
            imageGallery.classList.add("active");
            videoGallery.classList.remove("active");
        } else if (filter === "videos") {
            imageGallery.classList.remove("active");
            videoGallery.classList.add("active");
        } else if (filter === "all") {
            imageGallery.classList.add("active");
            videoGallery.classList.add("active");
        }
    });
});

// Scroll Animation for Skills
const skillsSection = document.querySelector("#skills");
const skillCards = document.querySelectorAll(".skill-card");

const skillsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add a staggered delay to each skill item
            skillCards.forEach((skill, index) => {
                setTimeout(() => {
                    skill.style.opacity = '1';
                    skill.style.transform = 'translateY(0)';
                }, index * 100); // 100ms delay between each item
            });
            // Stop observing once the animation has run
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.4 // Trigger when 40% of the section is visible
});

skillsObserver.observe(skillsSection);