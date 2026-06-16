// ── VALIDACIÓN FORMULARIO DE CONTACTO ──

const form       = document.getElementById('form-contacto');
const formSuccess = document.getElementById('form-success');

// Array con los campos a validar: cada objeto tiene el id del campo y el id del error
const campos = [
  { campoId: 'nombre',  errorId: 'error-nombre' },
  { campoId: 'email',   errorId: 'error-email'  },
  { campoId: 'motivo',  errorId: 'error-motivo' },
  { campoId: 'mensaje', errorId: 'error-mensaje' }
];

// Función que valida un campo individual
// Devuelve true si es válido, false si no
function validarCampo(campo) {
  const input = document.getElementById(campo.campoId);
  const error = document.getElementById(campo.errorId);
  let esValido = true;

  // if/else para distinguir el campo email del resto
  if (campo.campoId === 'email') {
    // Validación básica de formato email
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

  // Mostrar u ocultar el mensaje de error según resultado
  if (esValido) {
    input.classList.remove('error');
    error.classList.remove('visible');
  } else {
    input.classList.add('error');
    error.classList.add('visible');
  }

  return esValido;
}

// Limpiar error al escribir: forEach sobre el array de campos
campos.forEach(function (campo) {
  const input = document.getElementById(campo.campoId);
  input.addEventListener('input', function () {
    validarCampo(campo);
  });
});

// Submit del formulario
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Validar todos los campos con forEach y acumular resultado
  let formularioValido = true;

  campos.forEach(function (campo) {
    const resultado = validarCampo(campo);
    if (!resultado) {
      formularioValido = false;
    }
  });

  // Si todo está bien, mostrar el mensaje de éxito
  if (formularioValido) {
    form.classList.remove('visible');
    form.style.display = 'none';
    formSuccess.classList.add('visible');
  }
});
