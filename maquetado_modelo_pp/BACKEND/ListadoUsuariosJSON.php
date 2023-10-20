<?php
include_once "./clases/Usuario.php";

$usuariosJson = Usuario::TraerTodosJSON();
$usuariosJson = json_encode($usuariosJson);

echo $usuariosJson;






?>
