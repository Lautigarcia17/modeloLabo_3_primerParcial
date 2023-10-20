/// <reference path = "./libs/jquery/index.d.ts">

// sirve para usar jquery desde typescript

$(()=>{ // EVENTO LOAD de un formulario
    $("#btnTraer").on("click",TraerListadoProducto);
    $("#btnModificar").on("click",ModificarProducto);
    $("#btnAgregar").on("click",AgregarProducto);

});

function TraerListadoProducto()
{
    $.ajax({
        type:"GET", // tipo de conexion
        url: "http://localhost:10000/productos_db", //url a la que apunto
        dataType: "JSON", // que me retorna
    })
    .done((objArray:any)=>{ // vuelve un array de json
        

        let tabla : string= `<table class="table table-hover">
                            <tr>
                                <th>CODIGO</th><th>MARCA</th><th>PRECIO</th><th>FOTO</th><th>ACCION</th>
                            <tr>`;
                                
        objArray.forEach((elemento:any) => {
            
            if (elemento !="") {
                tabla += `<tr> 
                <td>  ${elemento.codigo}  </td> 
                <td>  ${elemento.marca}  </td>
                <td>  ${elemento.precio}  </td>
                <td> <img src="http://localhost:10000/${elemento.path}" width="50px" height="50px"></td>
                <td> <button type="button" value="modificar" data-obj='${JSON.stringify(elemento)}' data-action="modificar"> </button>
                     <input type="button" value="eliminar" data-obj='${JSON.stringify(elemento)}' data-action="eliminar"></td> 
              <tr>`;  
            }
        });
        tabla += "</table>";

        $("#divListado").html(tabla);
        $(`[data-action="modificar"]`).on("click",(function (){ // todos los atributos que tengan el data-action = modificar , me los traigo

            let objString : any = $(this).attr("data-obj");
            let obj = JSON.parse(objString); // json a obj
            console.log(obj);
            $("#txtCodigo_m").val(obj.codigo);
            $("#txtMarca_m").val(obj.marca);
            $("#txtPrecio_m").val(obj.precio);
        }));
        $(`[data-action="eliminar"]`).on("click",(function (){ // todos los atributos que tengan el data-action = modificar , me los traigo

            let objString : any = $(this).attr("data-obj");
            let obj = JSON.parse(objString); // json a obj
            console.log(obj);

            $.ajax({
                type:"DELETE", // tipo de conexion
                url: "http://localhost:10000/productos_db", //url a la que apunto
                dataType: "text", // que me retorna
                data: objString,
                contentType:"application/json"
            })
            .done((mensaje : any)=>{
                alert(mensaje);
            })

        }));
    }); 
}

function ModificarProducto()
{
    let url = "http://localhost:10000/productos_db";
    let codigo = $("#txtCodigo_m").val(); // obtengo el valor de la entrada
    let marca = $("#txtMarca_m").val();
    let precio = $("#txtPrecio_m").val();
    let foto : any = $("#foto_m")[0];

    let form : FormData = new FormData();
    form.append("foto",foto.files[0]);
    form.append("obj", JSON.stringify({"codigo":codigo,"marca":marca,"precio":precio})); // obj a json

    $.ajax({
        type:"put",
        url:url,
        dataType:"text", // retorno
        cache: false,
        contentType: false,
        processData: false,
        data: form, // parametros de envio
    })
    .done(rta =>{
        alert(rta);
    })
    .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    }); 
}

function AgregarProducto()
{
    let url = "http://localhost:10000/productos_db";
    let codigo = $("#txtCodigo").val(); // obtengo el valor de la entrada
    let marca = $("#txtMarca").val();
    let precio = $("#txtPrecio").val();
    let foto : any = $("#foto")[0];// [0] para la unica foto que selecciono

    let form : FormData = new FormData();
    form.append("foto",foto.files[0]);
    form.append("obj", JSON.stringify({"codigo":codigo,"marca":marca,"precio":precio})); // obj a json
    
    $.ajax({
        type:"post",
        url:url,
        dataType:"text", // retorno
        cache: false, 
        contentType: false,
        processData: false,
        data: form, // parametros de envio
    })
    .done(rta =>{
        alert(rta);
    })
    .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
        alert(jqXHR.responseText + "\n" + textStatus + "\n" + errorThrown);
    });  
}




