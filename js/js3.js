document.querySelectorAll('section').forEach(function (section) {
    section.addEventListener('click', function () {
        section.querySelectorAll('p').forEach(function (paragraph) {
            paragraph.style.display = (paragraph.style.display === 'block') ? 'none' : 'block';
        });
    });
});
