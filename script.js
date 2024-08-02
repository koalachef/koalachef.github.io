function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var readMoreLinks = document.querySelectorAll(
        ".blog-text #readMoreLink"
    );

    readMoreLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            var blogTextDiv = link.closest(".blog-text");

            var paragraph = blogTextDiv.querySelector("p");
            if (paragraph.style.webkitLineClamp === "unset") {
                paragraph.style.webkitLineClamp = "3";
                link.textContent = "Read More";
            } else {
                paragraph.style.webkitLineClamp = "unset";
                link.textContent = "Show Less";
            }
        });
    });
});