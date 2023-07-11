//function PasswordSubmit() {
//    "use strict";
//    var formObj = document.getElementById("PASSformID");
//                
//    formObj.action = "FinalProject.php";
//    formObj.submit();
//}

var slideIndex = 1;

function showSlides(n) {
    "use strict";
    var i = 0;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1; 
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
    "use strict";
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    "use strict";
    showSlides(slideIndex = n);
}

function showSlides() {
    "use strict";
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000); // Change image every 2 seconds
}



//showSlides(slideIndex);