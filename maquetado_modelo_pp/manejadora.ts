/// <reference path = "./usuario.ts" />

window.addEventListener("load", ():void => {
    ModeloParcial.Manejadora.MostrarEmpleados();
}); 

namespace ModeloParcial
{
    export class Manejadora
    {
        // usuario_json.html
        public static AgregarUsuariosJSON()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            let nombre : string = ((<HTMLInputElement> document.getElementById("nombre")).value);
            let correo : string = ((<HTMLInputElement> document.getElementById("correo")).value);
            let clave : string = ((<HTMLInputElement> document.getElementById("clave")).value);

            let formData : FormData = new FormData();


            xhttp.open("POST","./BACKEND/AltaUsuarioJSON.php");
            formData.append('nombre', nombre);
            formData.append('correo', correo);
            formData.append('clave', clave);

            xhttp.send(formData);

            xhttp.onreadystatechange = () => 
            {
                console.log(xhttp.readyState + " - " + xhttp.status);
                
                if (xhttp.readyState == 4 && xhttp.status == 200) 
                {
                    console.log(xhttp.responseText);
                    alert(xhttp.responseText);
                }
            };
        }
        public static MostrarUsuariosJSON()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            xhttp.open("get","./BACKEND/ListadoUsuariosJSON.php");

            xhttp.send();

            xhttp.onreadystatechange = () => 
            {
                console.log(xhttp.readyState + " - " + xhttp.status);
                
                if (xhttp.readyState == 4 && xhttp.status == 200) 
                {
                    let tabla : string = `<table class="table table-hover">
                                        <tr>
                                            <th>NOMBRE</th><th>CORREO</th><th>CLAVE</th>
                                        <tr>`;

                    let objeto = JSON.parse(xhttp.responseText);
                    objeto.forEach((elemento : any) => {
                        if (elemento != "") 
                        {
                            tabla += `<tr> 
                                            <td>  ${elemento.nombre}  </td> 
                                            <td>  ${elemento.correo}  </td>
                                            <td>  ${elemento.clave}  </td>
                                    <tr>`;  
                        }
                    });
                    tabla += "</table>";
                    // divTabla
                    (<HTMLDivElement>document.getElementById("divTabla")).innerHTML = tabla; // responseText es la respuesta del servidor

                }
            };
        }

        public static VerificarUsuarioJSON()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            let correo : string = ((<HTMLInputElement> document.getElementById("correo")).value);
            let clave : string = ((<HTMLInputElement> document.getElementById("clave")).value);

            let formData : FormData = new FormData();

            let usuario : Entidades.Usuario = new Entidades.Usuario("",correo,clave);

            xhttp.open("POST","./BACKEND/VerificarUsuarioJSON.php");
            formData.append('usuario_json', usuario.ToJSON());

            xhttp.send(formData);

            xhttp.onreadystatechange = () => 
            {
                console.log(xhttp.readyState + " - " + xhttp.status);
                
                if (xhttp.readyState == 4 && xhttp.status == 200) 
                {
                    console.log(xhttp.responseText);
                    alert(xhttp.responseText);
                }
            };
        }

        // usuario.html
        public static AgregarUsuario()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            let nombre : string = ((<HTMLInputElement> document.getElementById("nombre")).value);
            let correo : string = ((<HTMLInputElement> document.getElementById("correo")).value);
            let clave : string = ((<HTMLInputElement> document.getElementById("clave")).value);
            let id_perfil : string = ((<HTMLInputElement> document.getElementById("cboPerfiles")).value); // lo paso como string y lo recibo como int

            let formData : FormData = new FormData();


            xhttp.open("POST","./BACKEND/AltaUsuario.php");
            formData.append('nombre', nombre);
            formData.append('correo', correo);
            formData.append('clave', clave);
            formData.append('id_perfil', id_perfil);

            xhttp.send(formData);

            xhttp.onreadystatechange = () => 
            {
                console.log(xhttp.readyState + " - " + xhttp.status);
                
                if (xhttp.readyState == 4 && xhttp.status == 200) 
                {
                    console.log(xhttp.responseText);
                    alert(xhttp.responseText);
                }
            };
        }

        public static MostrarUsuario()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            xhttp.open("get","./BACKEND/ListadoUsuarios.php");

            xhttp.send();

            xhttp.onreadystatechange = () => 
            {
                console.log(xhttp.readyState + " - " + xhttp.status);
                
                if (xhttp.readyState == 4 && xhttp.status == 200) 
                {
                    console.log(xhttp.responseText);
                    alert(xhttp.responseText);
                    (<HTMLDivElement>document.getElementById("divTabla")).innerHTML = xhttp.responseText; // responseText es la respuesta del servidor

                    // document.getElementsByName("btnModificar").forEach((boton)=>{
                    //     boton.addEventListener("click", ()=>{ 
                    //         let obj : any = boton.getAttribute("data-obj");
                    //         let obj_dato = JSON.parse(obj);
                    //         (<HTMLInputElement>document.getElementById("id")).value = obj_dato.id;
                    //         (<HTMLInputElement>document.getElementById("nombre")).value = obj_dato.nombre;
                    //         (<HTMLInputElement>document.getElementById("correo")).value = obj_dato.correo;   
                    //         (<HTMLInputElement>document.getElementById("clave")).value = obj_dato.clave; 
                    //         (<HTMLInputElement>document.getElementById("cboPerfiles")).value = obj_dato.id_perfil; 
                    //         let btn = (<HTMLInputElement>document.getElementById("btn-modificar"));
                    //         btn.addEventListener("click", ():void=>{
                    //             Manejadora.ModificarUsuario();
                    //         });
                    //     });
                    // });


                }
            };
        }

        public static ModificarUsuario()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            let id : number = parseInt(((<HTMLInputElement> document.getElementById("id")).value));
            let nombre : string = ((<HTMLInputElement> document.getElementById("nombre")).value);
            let correo : string = ((<HTMLInputElement> document.getElementById("correo")).value);
            let clave : string = ((<HTMLInputElement> document.getElementById("clave")).value);
            let id_perfil : number = parseInt(((<HTMLInputElement> document.getElementById("cboPerfiles")).value)); // lo paso como string y lo recibo como int

            let formData : FormData = new FormData();

            let usuario : Entidades.Usuario = new Entidades.Usuario(nombre,correo,clave,id,id_perfil);

            xhttp.open("POST","./BACKEND/ModificarUsuario.php");
            formData.append('usuario_json', usuario.ToJSON());

            xhttp.send(formData);

            xhttp.onreadystatechange = () => 
            {
                console.log(xhttp.readyState + " - " + xhttp.status);
                
                if (xhttp.readyState == 4 && xhttp.status == 200) 
                {
                    console.log(xhttp.responseText);
                    alert(xhttp.responseText);
                }
            };
        }

        public static EliminarUsuario()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            let id : string = ((<HTMLInputElement> document.getElementById("id")).value);
          
            let formData : FormData = new FormData();



            xhttp.open("POST","./BACKEND/EliminarUsuario.php");
            formData.append('id', id);

            xhttp.send(formData);

            xhttp.onreadystatechange = () => 
            {
                console.log(xhttp.readyState + " - " + xhttp.status);
                
                if (xhttp.readyState == 4 && xhttp.status == 200) 
                {
                    console.log(xhttp.responseText);
                    alert(xhttp.responseText);
                }
            };
        }

        // empleado.html
        public static MostrarEmpleados()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            xhttp.open("get","./BACKEND/ListadoEmpleados.php");

            xhttp.send();

            xhttp.onreadystatechange = () => 
            {
                console.log(xhttp.readyState + " - " + xhttp.status);
                
                if (xhttp.readyState == 4 && xhttp.status == 200) 
                {
                    console.log(xhttp.responseText);
                    alert(xhttp.responseText);
                    (<HTMLDivElement>document.getElementById("divTablaEmpleados")).innerHTML = xhttp.responseText; // responseText es la respuesta del servidor

                }
            };
        }

        public static AgregarEmpleado()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            let nombre : string = ((<HTMLInputElement> document.getElementById("nombre")).value);
            let correo : string = ((<HTMLInputElement> document.getElementById("correo")).value);
            let clave : string = ((<HTMLInputElement> document.getElementById("clave")).value);
            let id_perfil : string = ((<HTMLInputElement> document.getElementById("cboPerfiles")).value); // lo paso como string y lo recibo como int
            let sueldo : string = ((<HTMLInputElement> document.getElementById("sueldo")).value);
            let foto : any = (<HTMLInputElement>document.getElementById("foto"));

            let formData : FormData = new FormData();


            xhttp.open("POST","./BACKEND/AltaEmpleado.php");
            formData.append('nombre', nombre);
            formData.append('correo', correo);
            formData.append('clave', clave);
            formData.append('sueldo', sueldo);
            formData.append('id_perfil', id_perfil);
            formData.append('foto', foto.files[0]);
            xhttp.setRequestHeader("enctype", "multipart/form-data");

            xhttp.send(formData);

            xhttp.onreadystatechange = () => 
            {
                console.log(xhttp.readyState + " - " + xhttp.status);
                
                if (xhttp.readyState == 4 && xhttp.status == 200) 
                {
                    console.log(xhttp.responseText);
                    alert(xhttp.responseText);
                }
            };
        }

    }
}