<?php
include("db_connect.php");

$fecha = $_POST['fecha'];
$nombre = $_POST['nombre'];
$pastel = $_POST['pastel'];
$cantidad = $_POST['cantidad'];
$precio = $_POST['precio'];
$total = $_POST['total'];

$sql = "INSERT INTO ventas (fecha, nombre, pastel, cantidad, precio, total) VALUES ('$fecha', '$nombre', '$pastel', $cantidad, $precio, $total)";

if ($conn->query($sql) === TRUE) {
    echo "Venta registrada con éxito.";
} else {
    echo "Error al registrar la venta: " . $conn->error;
}

$conn->close();
?>
