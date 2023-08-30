

const animatedElements = document.querySelectorAll('.scroll-animation');

function toggleParagraph(titleElement) {
    // Get the parent article element
    const articleElement = titleElement.parentNode;

    // Get the paragraph element within the same article
    const paragraph = articleElement.querySelector('p');

    // Get all the titles within the section
    const allTitles = document.querySelectorAll('#technical-skills h1');

    // Hide all paragraphs and remove active class from all titles
    allTitles.forEach((title) => {
        title.classList.remove('active-title');
    });
    const allParagraphs = document.querySelectorAll('#technical-skills p');
    allParagraphs.forEach((p) => {
        p.classList.remove('visible');
    });

    // Show the clicked paragraph and mark the clicked title as active
    titleElement.classList.add('active-title');
    paragraph.classList.add('visible');
}

// Get all the h1 elements within articles and add click event listeners
const articleTitles = document.querySelectorAll('#technical-skills article h1');
articleTitles.forEach((title) => {
    title.addEventListener('click', () => {
        toggleParagraph(title);
    });
});

window.addEventListener('scroll', () => {
    animatedElements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
});