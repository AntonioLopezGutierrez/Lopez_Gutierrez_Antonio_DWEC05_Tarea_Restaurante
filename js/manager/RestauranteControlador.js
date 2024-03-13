//!/////////////////////CLASE RESTAURANTECONTROLADOR/////////////////////
"use strict";

//?///////////////////////////PROPIEDADES PRIVADA////////////////////////
// Constante privada en el que almacenaremos el modelo
const MODELO = Symbol("RestauranteModelo");
// Constante privada en la que almacenaremos la vista
const VISTA = Symbol("RestauranteVista");
// Constante privada en la que almacenaremos el iterador de categorias
const CATEGORIASITERADOR = Symbol("CategoriasIterator");
// Constante privada en la que almacenaremos el iterador de platos
const PLATOSITERADOR = Symbol("PlatosIterator");

class RestauranteControlador {
    //?//////////////////CONSTRUCTOR DE LA CLASE/////////////////////////
    constructor(RestauranteModelo, RestauranteVista) {
        //* Asignacion de los valores a las propiedades
        // Asignamos el valor a la propiedad del modelo
        this[MODELO] = RestauranteModelo;
        // Asignamos el valor a la propiedad de la vista
        this[VISTA] = RestauranteVista;
        // Asignamos el valor a la propiedad del iterador de categorias
        this[CATEGORIASITERADOR] = this[MODELO].getCategories();
        // Asignamos el valor a la propiedad del iterador de platos
        this[PLATOSITERADOR] = this[MODELO].getDishes();

        //* Llamada a los metodos que cargaran al inicio de la pagina
        this.onCarga();
    }

    //?////////////////////////METODOS DE LA CLASE///////////////////////
    //* Metodo que llama al metodo de carga de la vista
    onCarga = () => {
        // Llama al metodo de inicio de la vista con argumento el iterator
        this[VISTA].carga(this[CATEGORIASITERADOR], this[PLATOSITERADOR]);
    };

    //* Metodo que llama al metodo de inicio de la vista
    onInicio = () => {
        // Llama al metodo de inicio de la vista con argumento el iterator
        this[VISTA].inicio(this[CATEGORIASITERADOR], this[PLATOSITERADOR]);
    };

    //* Metodo que llama al metodo de mostradoPlatos de la vista
    onMostradoPlatos = () => {
        this[VISTA].mostradoPlatos();
    };
}

//?////////////////////////////EXPORTACIONES/////////////////////////////
export { RestauranteControlador };
