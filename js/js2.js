var sections = document.querySelectorAll('section');

sections.forEach(function (section) {
    section.addEventListener('click', function () {
        var paragraph = section.querySelector('p');
        paragraph.style.display = paragraph.style.display === 'block' ? 'none' : 'block';
    });
});
