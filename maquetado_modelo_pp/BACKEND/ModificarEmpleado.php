<?php

include_once "./clases/Empleado.php";

$empleadoJson = isset($_POST["empleado_json"]) ? $_POST["empleado_json"] : "";

if ($empleadoJson !="") {
    $objeto = json_decode($empleadoJson);//json a objeto
    $empleado = new Empleado($objeto->nombre,$objeto->correo,$objeto->clave,(int)$objeto->id,(int)$objeto->id_perfil,$objeto->path_foto,$objeto->sueldo);

    if($empleado->Modificar() == true)
    {
        echo'{ "exito": "' . true . '", "mensaje": "Se modifico el empleado "}' ; 
    }
    else 
    {
        echo  $respuesta = '{ "exito": "' . false . '", "mensaje": "No se modifico el empleado "}' ; 
    }
}


?>