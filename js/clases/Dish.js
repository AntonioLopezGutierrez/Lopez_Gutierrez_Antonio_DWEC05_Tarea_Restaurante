//!/////////////////////////////CLASE DISH///////////////////////////////
//Activamos el uso estricto para la clase
"use strict";

//?/////////////////////////IMPORTACIONES////////////////////////////////
import { NombreObligatorio } from "../excepciones/ExcepcionesDish.js";

//?/////////////////////DECLARACION DE LA CLASE//////////////////////////
class Dish {
    //*/////////////DECLARACION DE LAS PROPIEDADES PRIVADAS//////////////
    #name;
    #description;
    #ingredients;
    #image;

    //*/////////////////CONSTRUCTOR DE LA CLASE//////////////////////////
    constructor(name, description = "", ingredients = [], image = "") {
        // Excepciones de las propiedades
        if (name === "") {
            throw new NombreObligatorio();
        }
        // Verificamos si la imagen esta vacia y le asignamos la imagen por defecto
        if (image === "") {
            // Asignamos la imagen por defecto a la propiedad
            this.#image = "../../imagenes/imagenPorDefecto.png";
        } else {
            // Si no esta vacia asignamos la imagen
            this.#image = image;
        }

        // Asignamos los valores a las propiedades de la clase
        this.#name = name;
        this.#description = description;
        this.#ingredients = ingredients;
    }
    //*/////////////////////////SETTER Y GETTER//////////////////////////
    // Set para el nombre
    setName(name) {
        //Comprobacion de que el nombre no es undefined
        if (name === "") {
            throw new NombreObligatorio();
        }
        this.#name = name;
    }
    // Get para el nombre
    getName() {
        return this.#name;
    }

    // Set para la descripcion
    setDescription(description) {
        this.#description = description;
    }
    // Get para la descripcion
    getDescription() {
        return this.#description;
    }

    // Set para los ingredientes
    setIngredients(ingredients) {
        this.#ingredients = ingredients;
    }
    // Get para los ingredientes
    getIngredients() {
        return this.#ingredients;
    }

    // Set para la imagen
    setImage(image) {
        // Verificamos si la imagen esta vacia y le asignamos la imagen por defecto
        if (image === "") {
            // Asignamos la imagen por defecto a la propiedad
            this.#image = "../../imagenes/imagenPorDefecto.png";
        } else {
            // Si no esta vacia asignamos la imagen
            this.#image = image;
        }
    }
    // Get para la imagen
    getImage() {
        return this.#image;
    }

    //*////////////////////////////METODOS///////////////////////////////
    // Metodo toString
    toString() {
        // Concatenamos los ingrdedientes para luego mostrarlos en tostring
        let ingredientes = this.#ingredients.join(", ");
        // Devolvemos todos los datos para poder mostrarlos
        return (
            "El nombre es: " +
            this.#name +
            " La descripción es: " +
            this.#description +
            " Los ingredientes son: " +
            ingredientes +
            " La imagen está en la ruta: " +
            this.#image
        );
    }
}

export { Dish };
