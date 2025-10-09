// Animação de entrada dos cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
});

// Custom cursor
const cursor = document.querySelector('.custom-cursor');
const cursorTrail = document.querySelector('.custom-cursor-trail');

let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX - 10 + 'px';
  cursor.style.top = mouseY - 10 + 'px';
});

// Trail seguindo o cursor
function animateTrail() {
  trailX += (mouseX - trailX) * 0.15;
  trailY += (mouseY - trailY) * 0.15;

  cursorTrail.style.left = trailX - 6 + 'px';
  cursorTrail.style.top = trailY - 6 + 'px';

  requestAnimationFrame(animateTrail);
}
animateTrail();

document.addEventListener('mousedown', () => {
  cursor.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('clicking');
});
