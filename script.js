document.addEventListener("DOMContentLoaded", function() {
    var section1 = document.getElementById("section1");
    section1.classList.add("visible"); 

    window.addEventListener("scroll", function() {
        var currentSection = Math.floor(window.scrollY / window.innerHeight) + 1;
        var sections = document.querySelectorAll(".section");

        sections.forEach(function(section, index) {
            if (index === currentSection - 1) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });
});