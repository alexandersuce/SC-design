document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.home, .skills, .projects');
    const downArrow = document.querySelector('.down-arrow');
    const upArrow = document.querySelector('.up-arrow');
    let currentSection = 0;

    function showArrow() {
        if (currentSection > 0) {
            upArrow.classList.add('show');
        } else {
            upArrow.classList.remove('show');
        }

        if (currentSection < sections.length - 1) {
            downArrow.classList.add('show');
        } else {
            downArrow.classList.remove('show');
        }
    }

    function scrollSection(direction) {
        if (direction === 'down' && currentSection < sections.length - 1) {
            currentSection++;
        } else if (direction === 'up' && currentSection > 0) {
            currentSection--;
        }
        sections[currentSection].scrollIntoView({ behavior: 'smooth' });
        showArrow();
    }

    downArrow.addEventListener('click', () => scrollSection('down'));
    upArrow.addEventListener('click', () => scrollSection('up'));

    // Animation des barres de compétences
    const skillBars = document.querySelectorAll('.skills .progress');
    const skillsSection = document.querySelector('.skills');

    window.addEventListener('scroll', () => {
        const skillsTop = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillsTop <= windowHeight) {
            skillBars.forEach(bar => {
                const width = bar.getAttribute('style').split(': ')[1];
                bar.style.width = width;
            });
        }
    });

    // Initial display
    showArrow();
});
