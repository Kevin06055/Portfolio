document.addEventListener("DOMContentLoaded", function() {
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;

        // Active link switching
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("header nav a");

        sections.forEach(section => {
            const top = window.scrollY;
            const offset = section.offsetTop - 150;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active'); // Remove the dot before 'active'
    };
});

        (function() {
            emailjs.init("DSkWrI6ILAefmZceD"); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
        })();
   

        window.addEventListener('load', function() {
            const loaderWrapper = document.getElementById('loaderWrapper');
            loaderWrapper.style.opacity = '1'; // Show loader
            loaderWrapper.style.visibility = 'visible'; // Show loader

            // Simulate content loaded after a delay (replace with actual loading logic)
            setTimeout(function() {
                loaderWrapper.style.opacity = '0'; // Hide loader
                loaderWrapper.style.visibility = 'hidden'; // Hide loader
            }, 2000); // Replace 2000 with actual loading time or remove for actual content load detection
        });

        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.card');
        
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    card.classList.toggle('flipped');
                });
            });
        });
      