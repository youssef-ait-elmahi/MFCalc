document.addEventListener("DOMContentLoaded", function () {
    // Select the "About" section
    const aboutSection = document.querySelector('.about');

    // Add click event listener to the "About" link
    document.getElementById('about-link').addEventListener('click', function (event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Toggle the visibility of the "About" section
        aboutSection.style.display = aboutSection.style.display === 'none' ? 'block' : 'none';
    });
});
