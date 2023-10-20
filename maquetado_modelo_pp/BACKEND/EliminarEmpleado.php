<?php

include_once "./clases/Empleado.php";

$id = isset($_POST["id"]) ? (int)$_POST["id"] : 0;

if ($id !="") {

    if(Empleado::Eliminar($id) == true)
    {
        echo'{ "exito": "' . true . '", "mensaje": "Se elimino el empleado "}' ; 
    }
    else 
    {
        echo  $respuesta = '{ "exito": "' . false . '", "mensaje": "No se elimino el empleado "}' ; 
    }
}


?>