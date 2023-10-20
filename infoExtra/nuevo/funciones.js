"use strict";
/// <reference path="./node_modules/@types/jquery/index.d.ts">
Object.defineProperty(exports, "__esModule", { value: true });
function Listar() {
    let url = "http://localhost:10000/productos_fotos";
    $.ajax({
        type: "get",
        url: url,
        dataType: "JSON", // lo que recibo
    })
        .done(function (objJSON) {
        //MUESTRO EL RE SULTADO DE LA PETICION
        console.log(objJSON);
        let cadena = "";
        objJSON.forEach((elemento) => {
            console.log(elemento);
            if (elemento !== "") {
                let obj = JSON.parse(elemento);
                cadena += obj.codigo + " - " + obj.marca + " - " + obj.precio + " - " + obj.path + "<br>";
            }
        });
        $("#divListado").html(cadena);
    })
        .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}
function Agregar() {
    let url = "http://localhost:10000/productos_fotos";
    let codigo = $("#codigo").val(); // obtengo el valor de la entrada
    let marca = $("#marca").val();
    let precio = $("#precio").val();
    let foto = $("#foto")[0]; // [0] para la unica foto que selecciono
    let form = new FormData();
    form.append("foto", foto.files[0]);
    form.append("obj", JSON.stringify({ "codigo": codigo, "marca": marca, "precio": precio })); // obj a json
    $.ajax({
        type: "post",
        url: url,
        dataType: "text",
        cache: false,
        contentType: false,
        processData: false,
        data: form, // parametros de envio
    })
        .done(rta => {
        alert(rta);
    })
        .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}
function Modificar() {
    let url = "http://localhost:10000/productos_fotos";
    let codigo = $("#codigo_m").val(); // obtengo el valor de la entrada
    let marca = $("#marca_m").val();
    let precio = $("#precio_m").val();
    let foto = $("#foto_m")[0];
    let form = new FormData();
    form.append("foto", foto.files[0]);
    form.append("obj", JSON.stringify({ "codigo": codigo, "marca": marca, "precio": precio })); // obj a json
    $.ajax({
        type: "put",
        url: url,
        dataType: "text",
        cache: false,
        contentType: false,
        processData: false,
        data: form, // parametros de envio
    })
        .done(rta => {
        alert(rta);
    })
        .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}
function Borrar() {
    let url = "http://localhost:10000/productos_fotos";
    let codigo = $("#codigo_b").val(); // obtengo el valor de la entrada
    $.ajax({
        type: "DELETE",
        url: url,
        dataType: "text",
        contentType: "application/json",
        data: JSON.stringify({ "codigo": codigo }), // parametros de envio
    })
        .done(rta => {
        alert(rta);
    })
        .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}
function ArmarTablaObjetos() {
    let url = "http://localhost:10000/productos_fotos";
    $.ajax({
        type: "get",
        url: url,
        dataType: "JSON", // lo que recibo
    })
        .done(function (objJSON) {
        //MUESTRO EL RE SULTADO DE LA PETICION
        console.log(objJSON);
        let rutaImagen = "http://localhost:10000/";
        let cadena = `<table>
                        <thead>
                            <tr>
                                <th> codigo</th>
                                <th> marca</th>
                                <th> precio</th>
                                <th> foto</th>
                            </tr>
                        </thead>`;
        objJSON.forEach((elemento) => {
            console.log(elemento);
            if (elemento !== "") {
                let obj = JSON.parse(elemento);
                cadena += "<tr>" +
                    "<td>" + obj.codigo + "</td>" +
                    "<td>" + obj.marca + "</td>" +
                    "<td>" + obj.precio + "</td>" +
                    "<td><img src='" + rutaImagen + obj.path + "' width='50px' height='50px'></td>" +
                    "<tr>";
            }
        });
        cadena += "</table>" +
            "</body>";
        $("#divListado_tabla_json").html(cadena);
    })
        .fail(function (jqXHR, textStatus, errorThrown) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });
}
//# sourceMappingURL=funciones.js.map