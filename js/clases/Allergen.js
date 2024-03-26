//!/////////////////////////CLASE CATEGORY//////////////////////////////
//Activamos el modo estricto
"use strict";

//?////////////////////IMPORTACIONES DE LA CLASE////////////////////////
import { NombreObligatorio } from "../excepciones/ExcepcionesAllergen.js";

//Declaracion de la clase
class Allergen {
    //?//////////////DECLARACION DE LAS PROPIEDADES PRIVADAS/////////////
    #name;
    #description;
    #imageUrl;

    //?/////////////////////CONSTRUCTOR DE LA CLASE//////////////////////
    constructor(name, description = "", imageUrl = "") {
        //Excepciones de las propiedades
        if (name === undefined) {
            throw new NombreObligatorio();
        }
        //Propiedades del constructor
        this.#name = name;
        this.#description = description;
        this.#imageUrl = imageUrl;
    }
    //?////////////////////////GETTER Y SETTER///////////////////////////
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
    // Setter para modificar la url de la imagen
    setImageUrl(imageUrl){
        this.#imageUrl = imageUrl;
    }
    // Getter para obtener la url de la imagen
    getImageUrl(){
        return this.#imageUrl;
    }


    //?//////////////////////////////METODOS/////////////////////////////
    toString() {
        return (
            "El nombre del alergeno es: " +
            this.#name +
            " y la descripcion es: " +
            this.#description +
            " y la url de la imagen es: " +
            this.#imageUrl
        );
    }
}

//?//////////////////////////EXPORTACION DE LA CLASE/////////////////////
export { Allergen };
