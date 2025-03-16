document.addEventListener('DOMContentLoaded', function() {
    const aboutMeImage = document.querySelector('.about-me-image');
    const scrollButton = document.getElementById('scroll-button');
    const aboutMeSection = document.getElementById('about-me-section');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onScroll() {
        if (isElementInViewport(aboutMeImage)) {
            aboutMeImage.classList.add('animate');
            window.removeEventListener('scroll', onScroll);
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Check if the element is already in view

    scrollButton.addEventListener('click', function() {
        const offset = 50; // Adjust this value as needed
        const elementPosition = aboutMeSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});