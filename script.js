

const container = document.getElementById('container');
let isDown = false;
let startX;
let scrollLeft;


container.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // Scroll hızı
    container.scrollLeft = scrollLeft - walk;
});

container.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('touchend', () => {
    isDown = false;
});

container.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 3; // Scroll hızı
    container.scrollLeft = scrollLeft - walk;
});
