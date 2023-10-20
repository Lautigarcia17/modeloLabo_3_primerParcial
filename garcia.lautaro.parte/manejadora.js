"use strict";
/// <reference path = "./auto.ts" />
var PrimerParcial;
(function (PrimerParcial) {
    class Manejadora {
        // usuario_json.html
        static AgregarAutosJSON() {
            let xhttp = new XMLHttpRequest();
            let patente = (document.getElementById("patente").value);
            let marca = (document.getElementById("marca").value);
            let color = (document.getElementById("color").value);
            let precio = (document.getElementById("precio").value);
            let formData = new FormData();
            xhttp.open("POST", "./BACKEND/AltaAutoJSON.php");
            formData.append('patente', patente);
            formData.append('marca', marca);
            formData.append('color', color);
            formData.append('precio', precio);
            xhttp.send(formData);
            xhttp.onreadystatechange = () => {
                console.log(xhttp.readyState + " - " + xhttp.status);
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log(xhttp.responseText);
                    alert(xhttp.responseText);
                }
            };
        }
        static MostrarAutosJSON() {
            let xhttp = new XMLHttpRequest();
            xhttp.open("get", "./BACKEND/listadoAutosJSON.php");
            xhttp.send();
            xhttp.onreadystatechange = () => {
                console.log(xhttp.readyState + " - " + xhttp.status);
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    let tabla = `<table class="table table-hover">
                                        <tr>
                                            <th>PATENTE</th><th>MARCA</th><th>COLOR</th><th>PRECIO</th>
                                        <tr>`;
                    let objeto = JSON.parse(xhttp.responseText);
                    objeto.forEach((elemento) => {
                        if (elemento != "") {
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
                    document.getElementById("divTabla").innerHTML = tabla; // responseText es la respuesta del servidor
                    console.log(xhttp.responseText);
                }
            };
        }
        static VerificarAutoJSON() {
            let xhttp = new XMLHttpRequest();
            let patente = (document.getElementById("patente").value);
            let formData = new FormData();
            xhttp.open("POST", "./BACKEND/VerificarAutoJSON.php");
            formData.append('patente', patente);
            xhttp.send(formData);
            xhttp.onreadystatechange = () => {
                console.log(xhttp.readyState + " - " + xhttp.status);
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log(xhttp.responseText);
                    alert(xhttp.responseText);
                }
            };
        }
    }
    PrimerParcial.Manejadora = Manejadora;
})(PrimerParcial || (PrimerParcial = {}));
//# sourceMappingURL=manejadora.js.map