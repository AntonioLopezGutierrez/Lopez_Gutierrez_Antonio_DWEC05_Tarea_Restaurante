//Activamos el uso estricto para la clase
"use strict"

//////////////////////////////////////////IMPORTACIONES///////////////////////////////////////////
import {
    NombreObligatorio
} from "../excepciones/ExcepcionesDish.js";

/**
 * /////////////////////////////////////////////CLASE DISH///////////////////////////////////////
 */
class Dish {
    ////////////////////////////DECLARACION DE LAS PROPIEDADES PRIVADAS////////////////////////
    #name;
    #description;
    #ingredients;
    #image;

    ///////////////////////////////////CONSTRUCTOR DE LA CLASE////////////////////////////////
    constructor(name, description = "", ingredients = [], image = "") {
        //Excepciones de las propiedades 
        if (name === undefined) {
            throw new NombreObligatorio();
        }

        //Propidades de la clase
        this.#name = name;
        this.#description = description;
        this.#ingredients = ingredients;
        this.#image = image;
    }
    ////////////////////////////////////////SETTER Y GETTER///////////////////////////////////
    //Set para el nombre
    setName(name) {
        //Comprobacion de que el nombre no es undefined
        if (name === undefined) {
            throw new NombreObligatorio();
        }
        this.#name = name;
    }
    //Get para el nombre
    getName() {
        return this.#name;
    }

    //Set para la descripcion
    setDescription(description) {
        this.#description = description;
    }
    //Get para la descripcion
    getDescription() {
        return this.#description;
    }

    //Set para los ingredientes
    setIngredients(ingredients) {
        this.#ingredients = ingredients;
    }
    //Get para los ingredientes
    getIngredients() {
        return this.#ingredients;
    }

    //Set para la imagen
    setImage(image) {
        this.#image = image;
    }
    //Get para la imagen
    getImage() {
        return this.#image;
    }

    //////////////////////////////////////////METODOS////////////////////////////////////////
    //Metodo to string
    toString() {
        //Concatenamos los ingrdedientes para luego mostrarlos en tostring
        let ingredientes = this.#ingredients.join(', ');
        //Devolvemos todos los datos para poder mostrarlos
        return (
            "El nombre es: " + this.#name +
            " La descripción es: " + this.#description +
            " Los ingredientes son: " + ingredientes +
            " La imagen está en la ruta: " + this.#image
        );
    }


}

export {
    Dish
};
