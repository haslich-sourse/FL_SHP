// Плавное появление текста при прокрутке
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.about-us p, .story h3, .mission h3, .contacts p');
    const screenHeight = window.innerHeight;
    
    elements.forEach(function(el) {
        const elementPosition = el.getBoundingClientRect().top;

        if (elementPosition < screenHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
});

// Инициализация карты (используем OpenStreetMap и Leaflet.js)
const map = L.map('map').setView([55.7558, 37.6176], 13); // Координаты Москвы

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([55.7558, 37.6176]).addTo(map)
    .bindPopup('Наш магазин здесь!')
    .openPopup();
