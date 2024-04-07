//!///////////////////////////CLASE CATEGORY/////////////////////////////
//Activamos el modo estricto
"use strict";

//?/////////////////////IMPORTACIONES DE LA CLASE////////////////////////
import { NombreObligatorio } from "../excepciones/ExcepcionesCategory.js";

class Category {
    //?////////////DECLARACION DE LAS PROPIEDADES PRIVADAS///////////////
    #name;
    #description;
    #imageUrl;

    //?/////////////////////CONSTRUCTOR DE LA CLASE//////////////////////
    constructor(name, description = "", imageUrl = "") {
        // Excepciones de las propiedades del constructor
        if (name === "") {
            throw new NombreObligatorio();
        }
        // Verificamos si la imagen esta vacia y le asignamos la imagen por defecto
        if (imageUrl === "") {
            // Asignamos la imagen por defecto a la propiedad
            this.#imageUrl = "../../imagenes/imagenPorDefecto.png";
        } else {
            // Si no esta vacia asignamos la imagen
            this.#imageUrl = imageUrl;
        }
        // Asignacion de los valores de la propiedados con los parametros
        this.#name = name;
        this.#description = description;
    }
    
    //?///////////////////////////GETTER Y SETTER////////////////////////
    //Setter para el nombre
    setName(name) {
        //Excepcion para que el nombre no este vacio
        if (name === "") {
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
    // Setter para modificar la imagen
    setImageUrl(imageUrl) {
        // Verificamos si la imagen esta vacia y le asignamos la imagen por defecto
        if (imageUrl === "") {
            // Asignamos la imagen por defecto a la propiedad
            this.#imageUrl = "../../imagenes/imagenPorDefecto.png";
        } else {
            // Si no esta vacia asignamos la imagen
            this.#imageUrl = imageUrl;
        }
    }
    // Getter para obtener la imagen
    getImageUrl() {
        return this.#imageUrl;
    }

    //?///////////////////////////METODOS////////////////////////////////
    toString() {
        return (
            "La categoria es: " +
            this.#name +
            " y la descripcion es: " +
            this.#description +
            " la url de la imagen es " +
            this.#imageUrl
        );
    }
}

//?///////////////////////EXPORTACION DE LA CLASE////////////////////////
export { Category };
