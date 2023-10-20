"use strict";
/// <reference path = "./libs/jquery/index.d.ts">
// sirve para usar jquery desde typescript
$(() => {
    $("#btnTraer").on("click", TraerListadoProducto);
    $("#btnModificar").on("click", ModificarProducto);
    $("#btnAgregar").on("click", AgregarProducto);
});
function TraerListadoProducto() {
    $.ajax({
        type: "GET",
        url: "http://localhost:10000/productos_db",
        dataType: "JSON", // que me retorna
    })
        .done((objArray) => {
        let tabla = `<table class="table table-hover">
                            <tr>
                                <th>CODIGO</th><th>MARCA</th><th>PRECIO</th><th>FOTO</th><th>ACCION</th>
                            <tr>`;
        objArray.forEach((elemento) => {
            if (elemento != "") {
                tabla += `<tr> 
                <td>  ${elemento.codigo}  </td> 
                <td>  ${elemento.marca}  </td>
                <td>  ${elemento.precio}  </td>
                <td> <img src="http://localhost:10000/${elemento.path}" width="50px" height="50px"></td>
                <td> <input type="button" value="modificar" data-obj='${JSON.stringify(elemento)}' data-action="modificar">
                     <input type="button" value="eliminar" data-obj='${JSON.stringify(elemento)}' data-action="eliminar"></td> 
              <tr>`;
            }
        });
        tabla += "</table>";
        $("#divListado").html(tabla);
        $(`[data-action="modificar"]`).on("click", (function () {
            let objString = $(this).attr("data-obj");
            let obj = JSON.parse(objString); // json a obj
            console.log(obj);
            $("#txtCodigo_m").val(obj.codigo);
            $("#txtMarca_m").val(obj.marca);
            $("#txtPrecio_m").val(obj.precio);
        }));
        $(`[data-action="eliminar"]`).on("click", (function () {
            let objString = $(this).attr("data-obj");
            let obj = JSON.parse(objString); // json a obj
            console.log(obj);
            $.ajax({
                type: "DELETE",
                url: "http://localhost:10000/productos_db",
                dataType: "text",
                data: objString,
                contentType: "application/json"
            })
                .done((mensaje) => {
                alert(mensaje);
            });
        }));
    });
}
function ModificarProducto() {
    let url = "http://localhost:10000/productos_db";
    let codigo = $("#txtCodigo_m").val(); // obtengo el valor de la entrada
    let marca = $("#txtMarca_m").val();
    let precio = $("#txtPrecio_m").val();
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
function AgregarProducto() {
    let url = "http://localhost:10000/productos_db";
    let codigo = $("#txtCodigo").val(); // obtengo el valor de la entrada
    let marca = $("#txtMarca").val();
    let precio = $("#txtPrecio").val();
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
//# sourceMappingURL=funciones.js.map