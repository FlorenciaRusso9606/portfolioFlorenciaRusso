<?php
include_once "../../configuracion.php";
$data = data_submitted();
$mailControl = new Mail();
$resp = $mailControl->mail($data);

echo json_encode([
    'success' => $resp,
    'message' => $resp ? 'Envío de mail exitoso.' : 'Error al enviar el mail'
]);
?>
