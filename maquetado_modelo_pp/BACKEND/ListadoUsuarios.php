<?php

include "./clases/Usuario.php";

$array_usuarios = Usuario::TraerTodos();

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
                        </tr>
                    </thead>';

foreach ($array_usuarios as $user)
{
    $grilla .= "    <tr>
                        <td>".$user->id."</td>
                        <td>".$user->correo."</td>
                        <td>".$user->nombre."</td>
                        <td>".$user->id_perfil."</td>
                        <td>".$user->perfil."</td>
                    </tr>";
}

$grilla .= '    </table>
            </body>';
echo $grilla;


// $grilla = '
//             <html>
//             <head>
//                 <title>Listado de Usuarios</title>
//             </head>
//             <body>
//                 <table class="table" border="1">
//                     <thead>
//                         <tr>
//                             <th> id            </th>
//                             <th> correo        </th>
//                             <th> nombre        </th>
//                             <th> id_perfil     </th>
//                             <th> perfil     </th>
//                             <th> acciones  </th>
//                         </tr>
//                     </thead>';

//     foreach ($array_usuarios as $user)
//     {
//         $grilla .= "    <tr>
//                             <td>".$user->id."</td>
//                             <td>".$user->correo."</td>
//                             <td>".$user->nombre."</td>
//                             <td>".$user->id_perfil."</td>
//                             <td>".$user->perfil."</td>".
//                             '<td><button type="button" data-obj=' . json_encode($user) . '
//                             name="btnModificar"></button>
//                             <button type="button" data-obj=' . $user->id . ' name="btnEliminar">
//                             </button>'
//                         ."</tr>";
//     }
    
//     $grilla .= '    </table>
//                 </body>';
//     echo $grilla;

?>




