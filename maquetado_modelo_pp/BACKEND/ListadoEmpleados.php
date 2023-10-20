<?php

include "./clases/Empleado.php";

$array_empleado = Empleado::TraerTodos();

$grilla = '
            <html>
            <head>
                <title>Listado de Usuarios</title>
            </head>
            <body>
                <table class="table" border="1">
                    <thead>
                        <tr>
                            <th> id            </th>
                            <th> correo        </th>
                            <th> nombre        </th>
                            <th> id_perfil     </th>
                            <th> perfil     </th>
                            <th> foto     </th>
                            <th> sueldo     </th>
                        </tr>
                    </thead>';

foreach ($array_empleado as $user)
{
    $grilla .= "    <tr>
                        <td>".$user->id."</td>
                        <td>".$user->correo."</td>
                        <td>".$user->nombre."</td>
                        <td>".$user->id_perfil."</td>
                        <td>".$user->perfil."</td>
                        <td><img src='".$user->foto."' width='50px' height='50px'></td>
                        <td>".$user->sueldo."</td>
                    </tr>";
}

$grilla .= '    </table>
            </body>';
echo $grilla;



?>