document.addEventListener("DOMContentLoaded", function () {
    const exportButton = document.getElementById("exportButton");

    exportButton.addEventListener("click", function () {
        // Aquí debes hacer una solicitud al servidor para generar el archivo Excel.
        // Puedes utilizar fetch() u otras técnicas para enviar una solicitud al servidor.

        // Por ejemplo, podrías utilizar fetch() para enviar una solicitud POST al servidor.
        fetch("/export-to-excel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ /* Parámetros para la exportación */ }),
        })
        .then((response) => response.blob())
        .then((blob) => {
            // Crea un enlace de descarga y simula un clic para descargar el archivo.
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "datos.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch((error) => {
            console.error("Error al exportar a Excel:", error);
        });
    });
});
