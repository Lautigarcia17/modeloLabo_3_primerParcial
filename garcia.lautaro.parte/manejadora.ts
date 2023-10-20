/// <reference path = "./auto.ts" />

namespace PrimerParcial
{
    export class Manejadora
    {
        // usuario_json.html
        public static AgregarAutosJSON()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            let patente : string = ((<HTMLInputElement> document.getElementById("patente")).value);
            let marca : string = ((<HTMLInputElement> document.getElementById("marca")).value);
            let color : string = ((<HTMLInputElement> document.getElementById("color")).value);
            let precio : string = ((<HTMLInputElement> document.getElementById("precio")).value);

            let formData : FormData = new FormData();


            xhttp.open("POST","./BACKEND/AltaAutoJSON.php");
            formData.append('patente', patente);
            formData.append('marca', marca);
            formData.append('color', color);
            formData.append('precio', precio);

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
        public static MostrarAutosJSON()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            xhttp.open("get","./BACKEND/listadoAutosJSON.php");

            xhttp.send();

            xhttp.onreadystatechange = () => 
            {
                console.log(xhttp.readyState + " - " + xhttp.status);
                
                if (xhttp.readyState == 4 && xhttp.status == 200) 
                {
                    let tabla : string = `<table class="table table-hover">
                                        <tr>
                                            <th>PATENTE</th><th>MARCA</th><th>COLOR</th><th>PRECIO</th>
                                        <tr>`;

                    let objeto = JSON.parse(xhttp.responseText);
                    objeto.forEach((elemento : any) => {
                        if (elemento != "") 
                        {
                            tabla += `<tr> 
                                            <td>  ${elemento.patente}  </td> 
                                            <td>  ${elemento.marca}  </td>
                                            <td>  ${elemento.color}  </td>
                                            <td>  ${elemento.precio}  </td>
                                    <tr>`;  
                        }
                    });
                    tabla += "</table>";
                    // divTabla
                    (<HTMLDivElement>document.getElementById("divTabla")).innerHTML = tabla; // responseText es la respuesta del servidor
                    console.log(xhttp.responseText);

                }
            };
        }

        public static VerificarAutoJSON()
        {
            let xhttp : XMLHttpRequest = new XMLHttpRequest();

            let patente : string = ((<HTMLInputElement> document.getElementById("patente")).value);

            let formData : FormData = new FormData();


            xhttp.open("POST","./BACKEND/VerificarAutoJSON.php");
            formData.append('patente', patente);

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