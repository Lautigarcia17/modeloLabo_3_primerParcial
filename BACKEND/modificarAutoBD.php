<?php


include_once "./clases/autoBD.php";
use Garcia\Lautaro\AutoBD;

$auto_json = isset($_POST["auto_json"]) ? $_POST["auto_json"] : "";

if ($auto_json !="") {
    $objeto = json_decode($auto_json);//json a objeto
    $autoModificar = new AutoBD($objeto->patente,$objeto->marca,$objeto->color,$objeto->precio);
    
    if($autoModificar->Modificar() == true)
    {
        echo'{ "exito": "' . true . '", "mensaje": "Se modifico el auto "}' ; 
    }
    else 
    {
        echo  $respuesta = '{ "exito": "' . false . '", "mensaje": "No se modifico el auto "}' ; 
    }
}


?>