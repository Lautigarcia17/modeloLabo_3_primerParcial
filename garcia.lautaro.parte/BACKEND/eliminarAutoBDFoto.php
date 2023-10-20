<?php

use Garcia\Lautaro\AutoBD;

include_once "./clases/autoBD.php";

$auto_json = isset($_POST["auto_json"]) ? $_POST["auto_json"] : "";
if ($auto_json !="") 
{
    $objeto = json_decode($auto_json);

    $auto = new AutoBD($objeto->patente,$objeto->marca,$objeto->color,(float)$objeto->precio,$objeto->pathFoto);

    if (AutoBD::eliminar($auto->getPatente())) {
        
        echo $auto->guardarEnArchivo();
    }
    else {
        echo'{ "exito": "' . false . '", "mensaje": "No se elimino el auto "}' ; 
    }
}
else 
{
    $arrayAutos = AutoBD::traerJSONFoto("./archivos/autosbd_borrados.txt");
    
    $grilla = '
            <html>
            <head>
                <title>Listado de Autos</title>
            </head>
            <body>
                <table class="table" border="1">
                    <thead>
                        <tr>
                            <th> patente            </th>
                            <th> marca        </th>
                            <th> color        </th>
                            <th> precio     </th>
                            <th> foto     </th>
                        </tr>
                    </thead>';

    foreach ($arrayAutos as $value)
    {
            $grilla .= "    <tr>
            <td>".$value->getPatente()."</td>
            <td>".$value->getMarca()."</td>
            <td>".$value->getColor()."</td>
            <td>".$value->getPrecio()."</td>
            <td><img src='./clases/autosBorrados/".$value->getPathFoto()."' width='50px' height='50px'></td>
        </tr>";
    }

    $grilla .= '    </table>
                </body>';

    echo $grilla;
}




?>