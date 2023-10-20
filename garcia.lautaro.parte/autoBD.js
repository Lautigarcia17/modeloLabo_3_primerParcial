"use strict";
/// <reference path="./auto.ts"/>
var Entidades;
(function (Entidades) {
    class AutoBD extends Entidades.Auto {
        constructor(patente, marca, color, precio, path_foto = "") {
            super(patente, marca, color, precio);
            this.path_foto = path_foto;
        }
        ToJSON() {
            return `{ ${super.ToString()},"foto": "${this.path_foto}"}`;
        }
    }
    Entidades.AutoBD = AutoBD;
})(Entidades || (Entidades = {}));
//# sourceMappingURL=autoBD.js.map