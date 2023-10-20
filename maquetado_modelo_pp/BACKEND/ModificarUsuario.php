<?php

include_once "./clases/Usuario.php";

$usuarioJson = isset($_POST["usuario_json"]) ? $_POST["usuario_json"] : "";

if ($usuarioJson !="") {
    $objeto = json_decode($usuarioJson);//json a objeto
    $usuario = new Usuario($objeto->nombre,$objeto->correo,$objeto->clave,(int)$objeto->id,(int)$objeto->id_perfil);
    if($usuario->Modificar() == true)
    {
        echo'{ "exito": "' . true . '", "mensaje": "Se modifico el usuario "}' ; 
    }
    else 
    {
        echo  $respuesta = '{ "exito": "' . false . '", "mensaje": "No se modifico el usuario "}' ; 
    }
}


?>