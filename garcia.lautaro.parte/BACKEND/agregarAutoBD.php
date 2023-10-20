<?php

use Garcia\Lautaro\AutoBD;

include_once "./clases/autoBD.php";

$patente = isset($_POST["patente"]) ? $_POST["patente"] : "";
$marca = isset($_POST["marca"]) ? $_POST["marca"] : "";
$color = isset($_POST["color"]) ?  $_POST["color"] : "";
$precio = isset($_POST["precio"]) ?  (float)$_POST["precio"] : 0;
$foto = isset($_FILES["foto"]["name"]) ? $_FILES["foto"]["name"] : ""; 

$auto = new AutoBD($patente,$marca,$color,$precio,$foto);

$arrayAutos = AutoBD::traer();

if ($auto->existe($arrayAutos)) 
{
    echo "Ya existe el auto";
}
else 
{
    if ($auto->agregar()) {
        $fotoGuardar = $auto->getPathFoto() !="" ? "./autos/imagenes/" . $auto->getPathFoto() : "";
        move_uploaded_file($_FILES["foto"]["tmp_name"],$fotoGuardar);
        echo  '{ "exito": "' . true . '", "mensaje": "Se guardo el auto "}' ; 
    }
    else {
        echo'{ "exito": "' . false . '", "mensaje": "No Se cargo el auto "}' ; 
    }
}




?>