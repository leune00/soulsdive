const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

//slider next button
nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;
    if (slideNumber> (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}


window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.style.transform = 'translateY(-' + window.scrollY + 'px)';
    } else {
        header.style.transform = 'translateY(0)';
    }
});


$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".social-media").addClass("scrolled");
        } else {
            $(".social-media").removeClass("scrolled");
        }
    });
});