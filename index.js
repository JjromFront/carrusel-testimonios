document.addEventListener("DOMContentLoaded", function () {
    // Get the testimonial slides
    const testimonialSlides = document.getElementsByClassName("testimonial-slide");
    let slideIndex = 0;

    // Function to show a specific slide
    function showSlide(n) {
        // Wrap around to the last slide if index is less than 0
        if (n < 0) {
            slideIndex = testimonialSlides.length - 1;
        }
        // Wrap around to the first slide if index is greater than or equal to the total number of slides
        else if (n >= testimonialSlides.length) {
            slideIndex = 0;
        }

        // Hide all slides
        for (let i = 0; i < testimonialSlides.length; i++) {
            testimonialSlides[i].style.display = "none";
        }

        // Show the current slide
        testimonialSlides[slideIndex].style.display = "block";
    }

    // Function to show the next slide
    function nextSlide() {
        slideIndex++;
        showSlide(slideIndex);
    }

    // Function to show the previous slide
    function previousSlide() {
        slideIndex--;
        showSlide(slideIndex);
    }

    // Add event listeners to the previous and next buttons
    document.querySelector(".prev-button").addEventListener("click", previousSlide);
    document.querySelector(".next-button").addEventListener("click", nextSlide);

    // Show the initial slide
    showSlide(slideIndex);
});
