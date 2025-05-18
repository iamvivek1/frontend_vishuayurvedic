
// JavaScript for the image carousel functionality

let slideIndex = 1; // Start with the first slide

// Function to display a specific slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    // Wrap around from the last slide to the first
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Wrap around from the first slide to the last
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides and remove active class
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('active'); // Remove active class
    }

    // Remove the 'active-dot' class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // Display the current slide and mark the corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('active'); // Add active class to trigger fade
    dots[slideIndex - 1].className += " active-dot";
}

// Function to advance or go back in slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to jump to a specific slide using the dots
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display the first slide when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(slideIndex);
});

// Optional: Auto-advance slides (uncomment and adjust interval if needed)
/*
let autoSlideInterval;

function startAutoSlide() {
  autoSlideInterval = setInterval(function() {
    plusSlides(1);
  }, 5000); // Change slide every 5000 milliseconds (5 seconds)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start auto-slide on page load
startAutoSlide();

// Optional: Pause auto-slide on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', stopAutoSlide);
carouselContainer.addEventListener('mouseleave', startAutoSlide);
*/