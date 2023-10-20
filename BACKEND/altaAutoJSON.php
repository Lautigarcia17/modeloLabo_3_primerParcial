<?php

use Garcia\Lautaro\Auto;

include_once "./clases/auto.php";

$patente = isset($_POST["patente"]) ? $_POST["patente"] : "";
$marca = isset($_POST["marca"]) ? $_POST["marca"] : "";
$color = isset($_POST["color"]) ?  $_POST["color"] : "";
$precio = isset($_POST["precio"]) ?  (float)$_POST["precio"] : 0;

$auto = new Auto($patente,$marca,$color,$precio);



echo $auto->guardarJSON('./archivos/autos.json');



?>