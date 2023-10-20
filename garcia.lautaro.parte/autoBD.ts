/// <reference path="./auto.ts"/>

namespace Entidades
{
    export class AutoBD extends Auto
    {
        public path_foto : string;


        public constructor(patente : string, marca : string, color : string, precio : number, path_foto : string = "")
        {
            super(patente,marca,color,precio);
            this.path_foto=path_foto;
        }

        public ToJSON() : string
        {
            return `{ ${super.ToString()},"foto": "${this.path_foto}"}`;
        }

    }
}