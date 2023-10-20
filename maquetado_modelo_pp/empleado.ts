/// <reference path="./usuario.ts"/>

namespace Entidades
{
    export class Empleado extends Usuario
    {
        public id : number;
        public sueldo : number;
        public foto : string;

        public constructor(nombre : string, correo : string, clave : string, 
                           id : number, id_perfil : number, perfil : string,
                           idEmpleado : number,sueldoEmpleado : number,fotoEmpleado : string)
        {
            super(nombre,correo,clave,id,id_perfil,perfil);
            this.id=idEmpleado;
            this.sueldo=sueldoEmpleado;
            this.foto=fotoEmpleado;
        }

    }
}