//Activamos el modo estricto
"use strict"

//////////////////////////////////////////////////IMPORTACIONES DE LA CLASE///////////////////////////////////////////////
//import { NombreObligatorio } from "./ExcepcionesMenu.js";

/**
 * //////////////////////////////////////////////////CLASE MENU/////////////////////////////////////////////////////
 */
class Menu {
    /////////////////////////////////////DECLARACION DE LAS PROPIEDADES PRIVADAS///////////////////////////////////////
    #name;
    #description;

    /////////////////////////////////////////CONSTRUCTOR DE LA CLASE/////////////////////////////////////////////////
    constructor(name, description = "") {
        //Excepciones de las propiedades 
        if (name === undefined) {
            throw new NombreObligatorio();
        }
        //Propiedades del constructor
        this.#name = name;
        this.#description = description;

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
    ////////////////////////////////////////////////////////METODOS//////////////////////////////////////////////
    toString(){
        return ("El nombre del menu es: " + this.#name + " y la descripcion es: " + this.#description); 
    }

}

////////////////////////////////////////////////EXPORTACION DE LA CLASE//////////////////////////////////////////////
export {
    Menu
};