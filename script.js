// Obtener referencias a elementos del formulario
const fechaInput = document.getElementById("fecha");
const nombreInput = document.getElementById("nombre");
const pastelSelect = document.getElementById("pastel");
const cantidadInput = document.getElementById("cantidad");
const precioInput = document.getElementById("precio");
const totalInput = document.getElementById("total");
const registrarVentaButton = document.getElementById("registrarVenta");

// Función para calcular el monto total
function calcularTotal() {
  const cantidad = parseInt(cantidadInput.value);
  const precio = parseFloat(precioInput.value);

  if (!isNaN(cantidad) && !isNaN(precio)) {
    const total = cantidad * precio;
    totalInput.value = total.toFixed(2); // Mostrar el total con 2 decimales
  } else {
    totalInput.value = "Invalido";
  }
}

// Manejar el evento "Calcular Total" al hacer clic en el botón
document.querySelector("button").addEventListener("click", calcularTotal);

// Manejar el evento "Registrar Venta" al hacer clic en el botón
registrarVentaButton.addEventListener("click", function () {
  const fecha = fechaInput.value;
  const nombre = nombreInput.value;
  const pastel = pastelSelect.options[pastelSelect.selectedIndex].text;
  const cantidad = cantidadInput.value;
  const precio = precioInput.value;
  const total = totalInput.value;

  // Crear una cadena de texto con los detalles de la venta
  const ventaDetails = `
    Fecha: ${fecha}
    Nombre del Cliente: ${nombre}
    Pastel: ${pastel}
    Cantidad: ${cantidad}
    Precio por Pastel: ${precio}
    Monto Total: ${total}
  `;

  // Mostrar una alerta con los detalles de la venta
  alert("Detalles de la Venta:\n\n" + ventaDetails);

  // Restablecer los valores de los campos a sus valores iniciales o vacíos
  fechaInput.value = "";
  nombreInput.value = "";
  pastelSelect.selectedIndex = 0;
  cantidadInput.value = "";
  precioInput.value = "";
  totalInput.value = "";

  // Puedes personalizar esta parte para tu aplicación específica.
});

// Esta función se llama cuando se carga la página
window.onload = function () {
  calcularTotal(); // Calcular el total al cargar la página
};
function enviarVenta() {
  // ... (código para calcular el monto total)

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "registrar_venta.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert("Venta registrada con éxito");
      limpiarFormulario();
    }
  };

  xhr.send(
    "fecha=" +
      fecha +
      "&nombre=" +
      nombre +
      "&pastel=" +
      pastel +
      "&cantidad=" +
      cantidad +
      "&precio=" +
      precio +
      "&total=" +
      total
  );
}
