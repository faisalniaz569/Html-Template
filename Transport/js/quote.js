/*jslint plusplus: true*/
var showSlides, document;

// QuoteSlider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    "use strict";
    showSlides(slideIndex = slideIndex + n);
}

function currentSlide(n) {
    "use strict";
    showSlides(slideIndex = n);
}

function showSlides(n) {
    "use strict";
    var i,
        slides = document.getElementsByClassName("mySlides"),
        dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i += 1) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i += 1) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
