//!/////////////////////////////CLASE COORDINATE/////////////////////////
//Activamos el modo estricto
"use strict";

//?///////////////////////IMPORTACIONES DE LA CLASE//////////////////////
import { LatitudObligatorio, LongitudObligatorio } from "../excepciones/ExcepcionesCoordinate.js";

class Coordinate {
    //?///////////////DECLARACION DE LAS PROPIEDADES PRIVADAS////////////
    #latitude;
    #longitude;

    //?//////////////////////CONSTRUCTOR DE LA CLASE/////////////////////
    constructor(latitude, longitude) {
        //Excepciones de las propiedades
        if (latitude === undefined || isNaN(latitude)) {
            throw new LatitudObligatorio();
        }
        if (longitude === undefined || isNaN(longitude)) {
            throw new LongitudObligatorio();
        }
        //Propiedades del constructor
        this.#latitude = latitude;
        this.#longitude = longitude;
    }
    ///////////////////////////////////////////////GETTER Y SETTER/////////////////////////////////////////////
    //Setter para la latitud
    setLatitude(latitude) {
        //Comprobacion de que no esta vacio el campo y que es un numero
        if (latitude === undefined || isNaN(latitude)) {
            throw new LatitudObligatorio();
        }
        this.#latitude = latitude;
    }
    //Getter para la latitud
    getLatitude() {
        return this.#latitude;
    }

    //Setter para la longitud
    setLongitude(longitude) {
        //Comprobacion de que no esta vacio el campo y que es un numero
        if (longitude === undefined || isNaN(longitude)) {
            throw new LongitudObligatorio();
        }
        this.#longitude = longitude;
    }
    //Getter para la longitud
    getLongitude() {
        return this.#longitude;
    }

    ////////////////////////////////////////////////////////METODOS//////////////////////////////////////////////
    toString() {
        return "La latitud es: " + this.#latitude + " y la longitud es: " + this.#longitude;
    }
}

////////////////////////////////////////////////EXPORTACION DE LA CLASE//////////////////////////////////////////////
export { Coordinate };
