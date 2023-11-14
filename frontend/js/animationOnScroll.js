document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.animated-element');

    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function checkElementsInView() {
        for (let i = 0; i < animatedElements.length; i++) {
            if (isElementInView(animatedElements[i])) {
                animatedElements[i].classList.add('visible');
            }
        }
    }

    window.addEventListener('scroll', checkElementsInView);
    checkElementsInView(); 
});
