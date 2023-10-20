"use strict";
/// <reference path="./usuario.ts"/>
var Entidades;
(function (Entidades) {
    class Empleado extends Entidades.Usuario {
        constructor(nombre, correo, clave, id, id_perfil, perfil, idEmpleado, sueldoEmpleado, fotoEmpleado) {
            super(nombre, correo, clave, id, id_perfil, perfil);
            this.id = idEmpleado;
            this.sueldo = sueldoEmpleado;
            this.foto = fotoEmpleado;
        }
    }
    Entidades.Empleado = Empleado;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=empleado.js.map