const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation menu");

    } else {

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    }

});


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});