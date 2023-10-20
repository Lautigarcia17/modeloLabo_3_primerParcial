<?php

include_once "./clases/Usuario.php";

$usuario_json = isset($_POST["usuario_json"]) ? $_POST["usuario_json"] : "";


$objetoRetorno = Usuario::TraerUno($usuario_json);
if ($objetoRetorno->nombre !="") {
    echo'{ "exito": "' . true . '", "mensaje": "Se encontro el usuario "}'; 
}
else {
    echo  $respuesta = '{ "exito": "' . false . '", "mensaje": "No se encontro el usuario "}' ; 
}

?>