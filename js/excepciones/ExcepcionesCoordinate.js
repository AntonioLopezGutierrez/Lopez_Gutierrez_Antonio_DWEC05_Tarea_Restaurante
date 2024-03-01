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
 * ////////////////////////////EXCEPCION PARA LATITUD OBLIGATORIA/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class LatitudObligatorio extends ExcepcionBase {
    constructor() {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El campo latitud es obligatorio y tiene que ser un numero" );
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "LatitudObligatorio";  
    }
}

/**
 * ////////////////////////////EXCEPCION PARA LONGITUD OBLIGATORIA/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class LongitudObligatorio extends ExcepcionBase {
    constructor() {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El campo longitud es obligatorio y tiene que ser un numero" );
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "LongitudObligatorio";
    }
}




/////////////////////////////////////////////////////////EXPORTACIONES////////////////////////////////////
export {
    LatitudObligatorio,
    LongitudObligatorio
};