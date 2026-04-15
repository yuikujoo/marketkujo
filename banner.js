const bannerImages = [
    "https://i.supaimg.com/23b223c0-a5cc-4eb9-a50a-df79dbf49f6a/8ae8e357-976c-4a6e-a8d9-5c8a48e44aa6.png",
    "banner2.jpg",
    "banner3.jpg"
];

const slideWrapper = document.getElementById('slide-wrapper');

// Render Banner
bannerImages.forEach((imgSrc, index) => {
    const div = document.createElement('div');
    div.className = `banner-card ${index === 0 ? 'active' : ''}`;
    div.innerHTML = `<img src="${imgSrc}">`;
    slideWrapper.appendChild(div);
});

let currentPos = 0;
const slides = document.querySelectorAll('.banner-card');

function moveSlider() {
    slides.forEach((s, i) => {
        s.classList.remove('active');
        if (i === currentPos) s.classList.add('active');
    });

    const cardWidth = window.innerWidth * 0.75; 
    const margin = 20; 
    const offset = (window.innerWidth / 2) - (cardWidth / 2) - (currentPos * (cardWidth + margin)) - 10;
    slideWrapper.style.transform = `translateX(${offset}px)`;
}

setInterval(() => {
    currentPos = (currentPos + 1) % slides.length;
    moveSlider();
}, 4000);

window.addEventListener('resize', moveSlider);
