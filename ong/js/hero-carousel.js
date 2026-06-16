// ── HERO CARRUSEL DE IMÁGENES ──
// Maneja el carrusel de fotos al inicio de proyectos.html

const slides     = document.getElementById('hero-slides');
const btnPrev    = document.getElementById('hero-prev');
const btnNext    = document.getElementById('hero-next');
const controls   = document.getElementById('hero-carousel-controls');

// Obtener todas las slides como array
const todasLasSlides = document.querySelectorAll('.slide');
const total          = todasLasSlides.length;
let indice           = 0;

// Crear los dots dinámicamente y agregarlos a los controles
const dotsWrap = document.createElement('div');
dotsWrap.classList.add('carousel-dots');

// Array para guardar referencia a cada dot
const dots = [];

todasLasSlides.forEach(function (slide, i) {
  const dot = document.createElement('button');
  dot.classList.add('dot');
  dot.setAttribute('aria-label', 'Ir a imagen ' + (i + 1));

  if (i === 0) {
    dot.classList.add('active');
  }

  dot.addEventListener('click', function () {
    indice = i;
    moverCarrusel();
  });

  dotsWrap.appendChild(dot);
  dots.push(dot);
});

// Insertar dots entre los dos botones
controls.insertBefore(dotsWrap, btnNext);

// Función principal: mover el track y actualizar dots
function moverCarrusel() {
  // Mover las slides desplazando el contenedor
  slides.style.transform = 'translateX(-' + (indice * 100) + '%)';

  // Actualizar dots con forEach
  dots.forEach(function (dot, i) {
    dot.classList.remove('active');
    if (i === indice) {
      dot.classList.add('active');
    }
  });

  // Habilitar / deshabilitar botones con if/else
  if (indice <= 0) {
    btnPrev.setAttribute('disabled', true);
  } else {
    btnPrev.removeAttribute('disabled');
  }

  if (indice >= total - 1) {
    btnNext.setAttribute('disabled', true);
  } else {
    btnNext.removeAttribute('disabled');
  }
}

// Botones
btnPrev.addEventListener('click', function () {
  if (indice > 0) {
    indice--;
    moverCarrusel();
  }
});

btnNext.addEventListener('click', function () {
  if (indice < total - 1) {
    indice++;
    moverCarrusel();
  }
});

// Autoplay cada 4 segundos
let autoplay = setInterval(function () {
  if (indice < total - 1) {
    indice++;
  } else {
    indice = 0;
  }
  moverCarrusel();
}, 4000);

// Pausar autoplay al interactuar manualmente
[btnPrev, btnNext].forEach(function (btn) {
  btn.addEventListener('click', function () {
    clearInterval(autoplay);
  });
});

// Inicializar
moverCarrusel();
