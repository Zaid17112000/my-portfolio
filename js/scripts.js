window.addEventListener('DOMContentLoaded', event => {
    document.getElementById("year").textContent = new Date().getFullYear();

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

const hamburger = document.querySelector('#hamburger');
const mobileMenu = document.querySelector('#mobile-menu');

hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
});