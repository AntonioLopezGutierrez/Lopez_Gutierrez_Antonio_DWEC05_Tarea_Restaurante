<?php
// Verificamos si se ha recibido el objeto JSON enviado por el cliente
if (isset($_POST['jsonObj'])) {
    // Obtenemos el JSON enviado por el cliente
    $json = $_POST['jsonObj'];

    // Obtenemos la marca de tiempo actual
    $fecha = time();
    // Obtenemos los componentes de la fecha actual
    $campos = getdate($fecha);

    // Generamos el titulo del archivo de respaldo con la fecha y hora actuales
    $title = "Backup/Backup-$campos[mday]-$campos[mon]-$campos[year]-$campos[hours]_$campos[minutes]_$campos[seconds].json";

    // Abrimos el archivo en modo de escritura creandolo si no existe
    $fd = fopen("$title", "w+") or die("Error al crear el archivo");

    // Escribimos el contenido JSON en el archivo
    fputs($fd, $json);

    // Cerramos el archivo
    fclose($fd);

    // Imprimimos la ruta donde se ha guardado el archivo de respaldo
    echo $title;
} else {
    // Si no se recibieron datos JSON mostramos un mensaje de error
    echo "No se recibieron datos JSON.";
}
