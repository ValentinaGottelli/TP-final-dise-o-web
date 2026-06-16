

const slides     = document.getElementById('hero-slides');
const btnPrev    = document.getElementById('hero-prev');
const btnNext    = document.getElementById('hero-next');
const controls   = document.getElementById('hero-carousel-controls');

const todasLasSlides = document.querySelectorAll('.slide');
const total          = todasLasSlides.length;
let indice           = 0;

const dotsWrap = document.createElement('div');
dotsWrap.classList.add('carousel-dots');

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

controls.insertBefore(dotsWrap, btnNext);

function moverCarrusel() {
  slides.style.transform = 'translateX(-' + (indice * 100) + '%)';

  dots.forEach(function (dot, i) {
    dot.classList.remove('active');
    if (i === indice) {
      dot.classList.add('active');
    }
  });

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

let autoplay = setInterval(function () {
  if (indice < total - 1) {
    indice++;
  } else {
    indice = 0;
  }
  moverCarrusel();
}, 4000);

[btnPrev, btnNext].forEach(function (btn) {
  btn.addEventListener('click', function () {
    clearInterval(autoplay);
  });
});

moverCarrusel();
