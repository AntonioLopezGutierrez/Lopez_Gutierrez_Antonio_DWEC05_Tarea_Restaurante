//!//////////////////////////CLASE USUARIOS//////////////////////////////
"use strict";
//?//////////////////IMPORTACION DE CLASES///////////////////////////////
import { NombreObligatorio} from "../excepciones/ExcepcionesUsuarios.js";

//?/////////////////////DECLARACION DE LA CLASE//////////////////////////
class Usuarios {
    //?//////////////PROPIEDADES PRIVADAS DE LA CLASE////////////////////
    #nombre;
    //?//////////////////CONSTRUCTOR DE LA CLASE/////////////////////////
    constructor(nombre) {
        // Comprobamos que el nombre no sea vacio
        if (nombre == "") throw new NombreObligatorio();
        // Asignamos el valor del nombre a la propiedad privado
        this.#nombre = nombre;
    }

    //?//////////////////////METODOS GETTER//////////////////////////////
    // Get para la obtencion del nombre
    get nombre() {
        // Devolvemos el valor del nombre
        return this.#nombre;
    }
}

//?//////////////////EXPORTACION DE LA CLASE/////////////////////////////
export { Usuarios };
