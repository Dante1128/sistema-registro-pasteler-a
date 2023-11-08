function registrarVenta() {
    var fecha = document.getElementById("fecha").value;
    var nombre = document.getElementById("nombre").value;
    var pastel = document.getElementById("pastel").value;
    var cantidad = document.getElementById("cantidad").value;
    var precio = document.getElementById("precio").value;
    var total = document.getElementById("total").value;
  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "registrar_venta.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // La venta se ha registrado correctamente
        alert("Venta registrada con éxito");
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
  