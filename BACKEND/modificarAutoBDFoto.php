<?php

use Garcia\Lautaro\AutoBD;

include_once "./clases/autoBD.php";

$auto_json = isset($_POST["auto_json"]) ? $_POST["auto_json"] : "";
$foto = isset($_FILES["foto"]["name"]) ? $_FILES["foto"]["name"] : "";

if ($auto_json!="" && $foto!="") {

    $objeto = json_decode($auto_json);
    $auto = new AutoBD($objeto->patente,$objeto->marca,$objeto->color,$objeto->precio,$foto);
    
    if ($auto->modificar()) 
    {
        move_uploaded_file($_FILES["foto"]["tmp_name"],"./autosModificados/" . $auto->getPathFoto());

        echo'{ "exito": "' . true . '", "mensaje": "Se modifico el empleado "}' ; 
    }
    else 
    {
        echo'{ "exito": "' . false . '", "mensaje": "No se modifico el empleado "}' ; 

    }
}
else 
{
    $arrayAutos = AutoBD::traer();
    
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
            <td><img src='./autosModificados/".$value->getPathFoto()."' width='50px' height='50px'></td>
        </tr>";
    }

    $grilla .= '    </table>
                </body>';

    echo $grilla;
}



?>