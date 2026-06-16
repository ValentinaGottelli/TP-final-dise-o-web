

const overlay    = document.getElementById('modal-overlay');
const modal      = document.getElementById('modal-donar');
const montoBtns  = document.querySelectorAll('.monto-btn');
const montoLabel = document.getElementById('monto-seleccionado');

const idsBotonesDonar = [
  'btn-donar-nav',
  'btn-donar-hero',
  'btn-donar-mobile'
];

function abrirModal() {
  overlay.classList.add('visible');
  document.body.classList.add('no-scroll');
}

function cerrarModal() {
  overlay.classList.remove('visible');
  document.body.classList.remove('no-scroll');
}

idsBotonesDonar.forEach(function (id) {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener('click', abrirModal);
  }
});

document.getElementById('modal-close').addEventListener('click', cerrarModal);

overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    cerrarModal();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    cerrarModal();
  }
});


const COSTO_IMPACTO = {
  comida: 300,    
  vet: 1500,      
  refugio: 600    
};

function montoSeleccionado() {
  const activo = document.querySelector('.monto-btn.active');
  return activo ? parseInt(activo.getAttribute('data-monto'), 10) : 0;
}

function renderCalculadora() {
  const label = document.querySelector('.modal-monto-label');
  if (!label) return;

  const calc = document.createElement('div');
  calc.className = 'modal-impacto';
  calc.id = 'modal-impacto';
  calc.innerHTML =
    '<p class="impacto-titulo">Calculadora de impacto</p>' +
    '<div class="impacto-grid">' +
      '<div class="impacto-item"><span class="impacto-num" data-tipo="comida">0</span><span class="impacto-label">días de alimento</span></div>' +
      '<div class="impacto-item"><span class="impacto-num" data-tipo="vet">0</span><span class="impacto-label">kits veterinarios</span></div>' +
      '<div class="impacto-item"><span class="impacto-num" data-tipo="refugio">0</span><span class="impacto-label">días de refugio</span></div>' +
    '</div>';

  label.insertAdjacentElement('afterend', calc);
}

function actualizarImpacto() {
  const calc = document.getElementById('modal-impacto');
  if (!calc) return;
  const monto = montoSeleccionado();
  calc.querySelector('[data-tipo="comida"]').textContent  = Math.floor(monto / COSTO_IMPACTO.comida);
  calc.querySelector('[data-tipo="vet"]').textContent     = Math.floor(monto / COSTO_IMPACTO.vet);
  calc.querySelector('[data-tipo="refugio"]').textContent = Math.floor(monto / COSTO_IMPACTO.refugio);
}

renderCalculadora();
actualizarImpacto();

montoBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    montoBtns.forEach(function (b) {
      b.classList.remove('active');
    });

    btn.classList.add('active');

    const valor = btn.getAttribute('data-monto');
    if (valor) {
      montoLabel.textContent = '$' + parseInt(valor).toLocaleString('es-AR');
    } else {
      montoLabel.textContent = '-';
    }

    actualizarImpacto();
  });
});

const formDonacion = document.getElementById('form-donacion');

if (formDonacion) {
  const cardInput = formDonacion.querySelector('input[placeholder="Número de tarjeta"]');
  const expInput  = formDonacion.querySelector('input[placeholder="MM/AA"]');
  const cvvInput  = formDonacion.querySelector('input[placeholder="CVV"]');

  function detectarMarca(n) {
    if (/^4/.test(n)) return 'Visa';
    if (/^(5[1-5]|2[2-7])/.test(n)) return 'Mastercard';
    if (/^3[47]/.test(n)) return 'Amex';
    if (/^(6011|65|64[4-9])/.test(n)) return 'Discover';
    return '';
  }

  if (cardInput) {
    const wrap = document.createElement('div');
    wrap.className = 'card-field';
    cardInput.parentNode.insertBefore(wrap, cardInput);
    wrap.appendChild(cardInput);

    const brand = document.createElement('span');
    brand.className = 'card-brand';
    wrap.appendChild(brand);

    cardInput.addEventListener('input', function () {
      const soloNum = cardInput.value.replace(/\D/g, '').slice(0, 16);
      cardInput.value = soloNum.replace(/(.{4})/g, '$1 ').trim();
      const marca = detectarMarca(soloNum);
      brand.textContent = marca;
      brand.className = 'card-brand' + (marca ? ' visible' : '');
    });
  }

  if (expInput) {
    expInput.addEventListener('input', function () {
      let v = expInput.value.replace(/\D/g, '').slice(0, 4);
      if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2);
      expInput.value = v;
    });
  }

  if (cvvInput) {
    cvvInput.addEventListener('input', function () {
      cvvInput.value = cvvInput.value.replace(/\D/g, '').slice(0, 4);
    });
  }

  formDonacion.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = formDonacion.querySelector('.modal-submit');
    submitBtn.disabled = true;
    submitBtn.classList.add('cargando');
    submitBtn.innerHTML = '<span class="spinner"></span>Procesando pago...';

    setTimeout(function () {
      modal.innerHTML =
        '<div class="modal-gracias">' +
          '<svg class="check-ok" viewBox="0 0 52 52" aria-hidden="true">' +
            '<circle class="check-circ" cx="26" cy="26" r="24"/>' +
            '<path class="check-mark" d="M14 27l8 8 16-16"/>' +
          '</svg>' +
          '<h2>¡Gracias!</h2>' +
          '<p>Tu donación hace posible cada rescate.</p>' +
          '<button class="modal-submit" id="btn-cerrar-gracias">Cerrar</button>' +
        '</div>';
      document.getElementById('btn-cerrar-gracias').addEventListener('click', cerrarModal);
    }, 1900);
  });
}
