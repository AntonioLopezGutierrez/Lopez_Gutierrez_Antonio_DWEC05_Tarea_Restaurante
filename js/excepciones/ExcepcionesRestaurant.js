//activamos el uso extricto para el archivo JavaScript
"use strict";

/**
 * /////////////////////////////////////////////EXCEPCION BASE///////////////////////////////////////
 */
//Clase excepcion que se extiende de Error
class ExcepcionBase extends Error {
    //Constructor al que le entrara por parametros un mensaje
    constructor(message) {
        //Llamada al coonstructor de la clase error
        super(message);
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "Excepcion";
    }
}

/**
 * ////////////////////////////EXCEPCION PARA CAMPOS OBLIGATORIOS/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class NombreObligatorio extends ExcepcionBase {
    constructor() {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El campo nombre es obligatorio" );
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "NombreObligatorio";
        
    }
}

/**
 * ////////////////////////////EXCEPCION PARA INSTANCIA DE COORDINATE/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class InstanciaCoordinate extends ExcepcionBase {
    constructor(location) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El campo " + location + " no es una un objeto coordenada");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "InstanciaCoordinate";
        
    }
}



/////////////////////////////////////////////////////////EXPORTACIONES////////////////////////////////////
export {
    NombreObligatorio,
    InstanciaCoordinate
};