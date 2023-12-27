function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function toggleNavbar() {
    const navbarLinks = document.querySelector('.menuItems');
    navbarLinks.style.display = (navbarLinks.style.display === 'block') ? 'none' : 'block';
}