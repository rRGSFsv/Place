document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.image-slider .images img');
    const totalImages = images.length;

    const prevButton = document.querySelector('.image-slider .prev');
    const nextButton = document.querySelector('.image-slider .next');

    function updateSlider() {
        const offset = -currentIndex * 640; // Ширина изображений
        document.querySelector('.image-slider .images').style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        updateSlider();
    });
});

const marker = new google.maps.marker.AdvancedMarkerElement({
    position: { lat: 50.4501, lng: 30.5216 },
    map: map,
    title: "Майдан Незалежності"
});


