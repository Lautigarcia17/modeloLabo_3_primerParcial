/// <reference path="./persona.ts"/>

namespace Entidades
{
    export class Usuario extends Persona
    {
        public id : number;
        public id_perfil : number;
        public perfil : string;

        public constructor(nombre : string, correo : string, clave : string, id : number = 0, id_perfil : number = 0, perfil : string = "")
        {
            super(nombre,correo,clave);
            this.id=id;
            this.id_perfil=id_perfil;
            this.perfil=perfil;
        }

        public ToJSON() : string
        {
            return `{ ${super.ToString()},"id": ${this.id},"id_perfil": ${this.id_perfil} ,"perfil": "${ this.perfil}"}`;
        }

    }
}