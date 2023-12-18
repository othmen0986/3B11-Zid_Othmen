document.querySelectorAll('section').forEach(function (section) {
    section.addEventListener('click', function () {
        toggleDetails(section);
    });
});

function toggleDetails(section) {
    var paragraphs = section.querySelectorAll('p');
    paragraphs.forEach(function (paragraph) {
        paragraph.style.display = (paragraph.style.display === 'block') ? 'none' : 'block';
    });
}
