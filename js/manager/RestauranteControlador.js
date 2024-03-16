//!/////////////////////CLASE RESTAURANTECONTROLADOR/////////////////////
"use strict";

//?///////////////////////////PROPIEDADES PRIVADA////////////////////////
// Constante privada en el que almacenaremos el modelo
const MODELO = Symbol("RestauranteModelo");
// Constante privada en la que almacenaremos la vista
const VISTA = Symbol("RestauranteVista");
// Constante privada en la que almacenaremos el iterador de categorias
const CATEGORIASITERADOR = Symbol("CategoriasIterator");
// Constante privada en la que almacenaremos el iterador de alergenos
const ALERGENOSITERADOR = Symbol("AlergenosIterator");
// Constante privada en la que almacenaremos el iterador de los menus
const MENUS = Symbol("MenusIterador");
// Constante privada en la que almacenaremos el iterador de platos
const PLATOSITERADOR = Symbol("PlatosIterator");
// Constante privada en la que almacenaremos el iterador de los restaurantes
const RESTAURANTEITERADOR = Symbol("RestauranteIterator");

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
        // Asignamos el valor a la propiedar del iterador de alergenos
        this[ALERGENOSITERADOR] = this[MODELO].getAllergen();
        // Asignamos el valor a la propiedad del iterador de menus
        this[MENUS] = this[MODELO].getMenu();
        // Asignamos el valor a la propiedad del iterador de platos
        this[PLATOSITERADOR] = this[MODELO].getDishes();
        // Asignamos el valor a la propiedad del iterador de restaurantes
        this[RESTAURANTEITERADOR] = this[MODELO].getRestaurant();

        //* Llamada a los metodos que cargaran al inicio de la pagina
        this.onCarga();
    }

    //?//////////////METODOS DE PRIMERAS INTERACCIONES////////////////////
    //* Metodo que llama al metodo de carga de la vista
    onCarga = () => {
        // Llama al metodo de inicio de la vista con argumento los iteradores
        this[VISTA].carga(
            this[CATEGORIASITERADOR],
            this[PLATOSITERADOR],
            this[ALERGENOSITERADOR],
            this[MENUS],
            this[RESTAURANTEITERADOR]
        );
    };

    //* Metodo que llama al metodo de inicio de la vista
    onInicio = () => {
        // Llama al metodo de inicio de la vista con argumento los iteradores
        this[VISTA].inicio(this[CATEGORIASITERADOR], this[PLATOSITERADOR]);
    };

    //* Metodo que llama al metodo de mostradoCategorias de la vista
    onCategorias = () => {
        // LLama al metodo de mostrado de categorias con argumento el iterator
        this[VISTA].categorias(this[CATEGORIASITERADOR]);
    };

    //* Metodo que llama al metodo de mostradoAlergenos de la vista
    onAlergenos = () => {
        // LLama al metodo de mostrado de categorias con argumento el iterator
        this[VISTA].alergenos(this[ALERGENOSITERADOR]);
    };
    //* Metodo que llama al metodo de mostradoMenus de la vista
    onMenus = () => {
        // LLama al metodo de mostrado de categorias con argumento el iterator
        this[VISTA].menus(this[MENUS]);
    };

    //* Metodo que llama al metodo de mostradoPlatos de la vista
    onPlatos = () => {
        this[VISTA].platos(this[PLATOSITERADOR]);
    };

    //?//////////////METODOS DE SEGUNDAS INTERACCIONES////////////////////
    //* Metodo que muestra los platos de una categoria en particular
    OnCategoriasPlatos = () =>{
        // Llamada al metodo de la vista que muetra los platos de una categoria
        this[VISTA].categoriasPlatos(); 
    }





    //?///////////////OBTENCION DE METODOS PARA DEL MODELO////////////////
    //* Metodo para obtener los platos en una categorIa del modelo y pasarlo a la vista
    onObtenerPlatosEnCategoria(categoria, funcionOrdenado) {
        // Llama al método getDishesInCategory del modelo
        try {
            return this[MODELO].getDishesInCategory(categoria, funcionOrdenado);
        } catch (error) {
            // Manejo de errores si es necesario
            console.error("Error al obtener platos en la categoría:", error);
            return null;
        }
    }
}

//?////////////////////////////EXPORTACIONES/////////////////////////////
export { RestauranteControlador };
