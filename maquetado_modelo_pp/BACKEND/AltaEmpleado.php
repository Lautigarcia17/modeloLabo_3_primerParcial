<?php

include "./clases/Empleado.php";

$correo = isset($_POST["correo"]) ? $_POST["correo"] : "";
$clave = isset($_POST["clave"]) ? $_POST["clave"] : "";
$nombre = isset($_POST["nombre"]) ?  $_POST["nombre"] : "";
$id_perfil = isset($_POST["id_perfil"]) ?  (int)$_POST["id_perfil"] : 0;
$sueldo = isset($_POST["sueldo"]) ?  (float)$_POST["sueldo"] : 0;
$foto = isset($_FILES["foto"]["name"]) ? $_FILES["foto"]["name"] : "";


$empleado = new Empleado($nombre,$correo,$clave,0,$id_perfil,$foto,$sueldo);
if ($empleado->Agregar()) 
{
    echo'{ "exito": "' . true . '", "mensaje": "Se agrego el empleado "}' ; 
}
else 
{
    echo  $respuesta = '{ "exito": "' . false . '", "mensaje": "No se agrego el empleado "}' ; 
}

?>
