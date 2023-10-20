<?php

use Garcia\Lautaro\AutoBD;

include "./clases/autoBD.php";

$auto_json = isset($_POST["auto_json"]) ? $_POST["auto_json"] : "";
$objeto = json_decode($auto_json);


$auto = new AutoBD($objeto->patente,$objeto->marca,$objeto->color,$objeto->precio);
if ($auto->Agregar()) 
{
    echo'{ "exito": "' . true . '", "mensaje": "Se agrego el auto "}' ; 
}
else 
{
    echo  $respuesta = '{ "exito": "' . false . '", "mensaje": "No se agrego el auto "}' ; 
}

?>
