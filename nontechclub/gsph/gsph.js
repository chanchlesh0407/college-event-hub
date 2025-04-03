document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".image-container");
    const images = document.querySelectorAll(".image-container img");
    let index = 0;

    function updateCarousel() {
        index = (index + 1) % images.length;
        container.style.transform = `translateX(-${index * 100}%)`;
    }

    // Auto-scroll every 3 seconds
    setInterval(updateCarousel, 3000);
});