// Fecha actual
const pasadoManana = new Date();
pasadoManana.setDate(pasadoManana.getDate() + 2);
const fechaInput = document.getElementById('fechaPedido');
fechaInput.min = pasadoManana.toISOString().split('T')[0];
fechaInput.valueAsDate = pasadoManana;

// Mostrar/ocultar bloque de alergias
document.getElementById('aptoAlergias').addEventListener('change', function () {
  document.getElementById('alergiasBlock').style.display = this.checked ? 'block' : 'none';
});

// Enviar formulario
document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Validar campos obligatorios
  const requerido = this.querySelectorAll('[required]');
  let valid = true;
  requerido.forEach(campo => {
    campo.style.borderColor = '';
    if (!campo.value.trim()) {
      campo.style.borderColor = '#c0392b';
      valid = false;
    }
  });
  if (!valid) return;

  // Incrementar número de orden
  orderCounter++;
  sessionStorage.setItem('orderCount', orderCounter);
  document.getElementById('orderNum').textContent = orderCounter;

  // Mostrar mensaje de éxito
  const exito = document.getElementById('exito');
  exito.classList.add('show');
  setTimeout(() => exito.classList.remove('show'), 2500);

  // Limpiar
  limpiarFormulario();
});

// limpiar formulario
function limpiarFormulario() {
  document.getElementById('orderForm').reset();
  document.getElementById('alergiasBlock').style.display = 'none';
  document.getElementById('fechaPedido').valueAsDate = new Date();
  document.querySelectorAll('input, select, textarea').forEach(campo => {
    campo.style.borderColor = '';
  });
}
