document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("order-form");
    const exportButton = document.getElementById("exportButton");
    const orders = [];

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtener datos del formulario
        const nombre = document.getElementById("nombre").value;
        const direccion = document.getElementById("direccion").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;
        const pastel = document.getElementById("pastel").value;
        const cantidad = document.getElementById("cantidad").value;
        const notas = document.getElementById("notas").value;
        const metodoPago = document.querySelector('input[name="metodo_pago"]:checked').value;

        // Guardar el pedido en el arreglo
        orders.push({
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            email: email,
            pastel: pastel,
            cantidad: cantidad,
            notas: notas,
            metodoPago: metodoPago,
        });

        // Limpiar el formulario
        form.reset();
    });

    exportButton.addEventListener("click", function () {
        // Llamar a una función para exportar los datos a Excel
        exportToExcel(orders);
    });

    function exportToExcel(data) {
        // Lógica para exportar datos a Excel
        // Puedes utilizar una biblioteca como exceljs o xlsx para generar el archivo Excel.
        // Ejemplo básico:
        // Crear un libro de Excel, agregar hojas, agregar datos y generar un archivo.

        // Ejemplo utilizando exceljs:
        const ExcelJS = require("exceljs");
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet("Pedidos");
        
        // Agregar encabezados
        worksheet.addRow(["Nombre", "Dirección", "Teléfono", "Email", "Pastel", "Cantidad", "Notas", "Método de Pago"]);

        // Agregar datos
        data.forEach(order => {
            worksheet.addRow([
                order.nombre,
                order.direccion,
                order.telefono,
                order.email,
                order.pastel,
                order.cantidad,
                order.notas,
                order.metodoPago
            ]);
        });

        // Guardar el archivo Excel
        workbook.xlsx.writeBuffer().then(function (buffer) {
            const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "pedidos.xlsx";
            a.click();
        });
    }
});
