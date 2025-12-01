// Inicializar rotações dos cards
function initializeCardRotations() {
	const cards = document.querySelectorAll('.project-card');
	
	cards.forEach((card) => {
		const rotation = Math.random() * 6 - 3; // Entre -3 e 3 graus
		const translateY = Math.random() * 12 - 6; // Entre -6 e 6px
		
		const transform = `rotate(${rotation}deg) translateY(${translateY}px)`;
		card.style.setProperty('--card-transform', transform);
		
		// Armazenar os valores para usar depois
		card.dataset.rotation = rotation;
		card.dataset.translateY = translateY;
	});
}

// Animação de entrada dos cards
function animateCardsEntry() {
	const cards = document.querySelectorAll('.project-card');
	cards.forEach((card, index) => {
		const rotation = parseFloat(card.dataset.rotation);
		const translateY = parseFloat(card.dataset.translateY);
		
		// Estado inicial com a rotação e entrada
		card.style.opacity = '0';
		card.style.transform = `rotate(${rotation}deg) translateY(${translateY + 30}px)`;
		
		setTimeout(() => {
			card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
			card.style.opacity = '1';
			card.style.transform = `rotate(${rotation}deg) translateY(${translateY}px)`;
		}, index * 100);
	});
}

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
	if (cursor) {
		cursor.style.left = mouseX - 10 + 'px';
		cursor.style.top = mouseY - 10 + 'px';
	}
});

// Trail seguindo o cursor
function animateTrail() {
	trailX += (mouseX - trailX) * 0.15;
	trailY += (mouseY - trailY) * 0.15;
	if (cursorTrail) {
		cursorTrail.style.left = trailX - 6 + 'px';
		cursorTrail.style.top = trailY - 6 + 'px';
	}
	requestAnimationFrame(animateTrail);
}
animateTrail();

document.addEventListener('mousedown', () => {
	if (cursor) cursor.classList.add('clicking');
});

document.addEventListener('mouseup', () => {
	if (cursor) cursor.classList.remove('clicking');
});

// Detectar hover em elementos interativos
const interactiveElements = document.querySelectorAll('a, button, .project-card');

interactiveElements.forEach(el => {
	el.addEventListener('mouseenter', () => {
		if (cursor) cursor.classList.add('hovering');
		if (cursorTrail) cursorTrail.classList.add('hovering');
	});
	
	el.addEventListener('mouseleave', () => {
		if (cursor) cursor.classList.remove('hovering');
		if (cursorTrail) cursorTrail.classList.remove('hovering');
	});
});

// Executar scripts ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
	initializeCardRotations();
	animateCardsEntry();
});

// Garantir que execute mesmo se DOM já estiver carregado
if (document.readyState !== 'loading') {
	initializeCardRotations();
	animateCardsEntry();
}