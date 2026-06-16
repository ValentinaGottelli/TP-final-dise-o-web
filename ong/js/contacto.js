const form       = document.getElementById('form-contacto');
const formSuccess = document.getElementById('form-success');

const campos = [
  { campoId: 'nombre',  errorId: 'error-nombre' },
  { campoId: 'email',   errorId: 'error-email'  },
  { campoId: 'motivo',  errorId: 'error-motivo' },
  { campoId: 'mensaje', errorId: 'error-mensaje' }
];

function validarCampo(campo) {
  const input = document.getElementById(campo.campoId);
  const error = document.getElementById(campo.errorId);
  let esValido = true;

  if (campo.campoId === 'email') {
    const tieneArroba = input.value.includes('@');
    const tienePunto  = input.value.includes('.');

    if (input.value.trim() === '' || !tieneArroba || !tienePunto) {
      esValido = false;
    }
  } else {
    if (input.value.trim() === '') {
      esValido = false;
    }
  }

  if (esValido) {
    input.classList.remove('error');
    error.classList.remove('visible');
  } else {
    input.classList.add('error');
    error.classList.add('visible');
  }

  return esValido;
}

campos.forEach(function (campo) {
  const input = document.getElementById(campo.campoId);
  input.addEventListener('input', function () {
    validarCampo(campo);
  });
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let formularioValido = true;

  campos.forEach(function (campo) {
    const resultado = validarCampo(campo);
    if (!resultado) {
      formularioValido = false;
    }
  });

  if (formularioValido) {
    form.classList.remove('visible');
    form.style.display = 'none';
    formSuccess.classList.add('visible');
  }
});
