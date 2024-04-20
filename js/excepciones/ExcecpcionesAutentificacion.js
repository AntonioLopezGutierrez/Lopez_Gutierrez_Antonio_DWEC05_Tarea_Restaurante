//!////////////////EXCEPCIONES PARA AUTENTIFICACION//////////////////////
//activamos el uso extricto para el archivo JavaScript
"use strict";

//?/////////////////////////EXCEPCION BASE///////////////////////////////
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

//?//////////////EXCEPCION PARA LA INSTANCIA DEL OBJETO//////////////////
//Clase excepcion que se extiende de ExcepcionBase
class InstanciaObjeto extends ExcepcionBase {
    constructor() {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("Para instanciar el objeto utilice el metodo inicio" );
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "InstanciaObjeto";
        
    }
}

//?///////////////////EXPORTACIONES DE LA CLASE//////////////////////////
export{InstanciaObjeto};