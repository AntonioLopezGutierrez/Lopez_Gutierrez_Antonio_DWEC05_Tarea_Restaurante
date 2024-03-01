//Activamos el modo estricto
"use strict"

//////////////////////////////////////////////////IMPORTACIONES DE LA CLASE///////////////////////////////////////////////
import {
    NombreObligatorio,
    InstanciaCoordinate
} from "../../js/excepciones/ExcepcionesRestaurant.js";
import { Coordinate } from "./Coordinate.js";

/**
 * ///////////////////////////////////////////////CLASE RESTAURANT/////////////////////////////////////////////////////
 */
class Restaurant {
    /////////////////////////////////////DECLARACION DE LAS PROPIEDADES PRIVADAS///////////////////////////////////////
    #name;
    #description;
    #location;

    /////////////////////////////////////////CONSTRUCTOR DE LA CLASE/////////////////////////////////////////////////
    constructor(name, description = "", location = new Coordinate(0, 0)) {
        //Excepciones de las propiedades 
        if (name === undefined) {
            throw new NombreObligatorio();
        }
        if (!(location instanceof Coordinate)) {
            throw new InstanciaCoordinate(location);
        }
        //Propiedades del constructor
        this.#name = name;
        this.#description = description;
        this.#location = location;

    }
    ///////////////////////////////////////////////GETTER Y SETTER/////////////////////////////////////////////
    //Setter para el nombre
    setName(name) {
        //Excepcion para que el nombre no este vacio
        if (name === undefined) {
            throw new NombreObligatorio();
        }
        this.#name = name;

    }
    //Getter para el nombre
    getName() {
        return this.#name;
    }
    //Setter para la descripcion
    setDescription(description) {
        this.#description = description;
    }
    //Getter para la descripcion
    getDescription() {
        return this.#description;
    }
    //Setter para la localizacion
    setLocation(location) {
        //Excepcion si no es una instancia de coordenada 
        if (!(location instanceof Coordinate)) {
            throw new InstanciaCoordinate(location);
        }
        this.#location = location;
    }
    //Getter para la localizacion
    getLocation() {
        return this.#location;
    }

    ////////////////////////////////////////////////////////METODOS//////////////////////////////////////////////
    toString() {
        return ("El nombre del restaurante es: " + this.#name + " y la descripcion es: "
            + this.#description + " y la localizacion es: " + this.#location);
    }

}

////////////////////////////////////////////////EXPORTACION DE LA CLASE//////////////////////////////////////////////
export {
    Restaurant
};