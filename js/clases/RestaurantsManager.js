// Activamos el modo estricto
"use strict";

//!////////////////////////IMPORTACIONES DE LA CLASE/////////////////////
import {
    // Excepcion de la clase
    InstanciaNoPremitida,
    // Excepcion de la categoria
    CategoryNoNull,
    InstanciaCategoria,
    ExisteCategoria,
    NoExisteCategoria,
    // Excepciones para el menu
    MenuNoNull,
    InstanciaMenu,
    ExisteMenu,
    NoExisteMenu,
    // Excepciones para el allergeno
    AllergenNoNull,
    InstanciaAllergen,
    ExisteAlergeno,
    NoExisteAllergen,
    // Excepciones restaurant
    RestaurantNoNull,
    InstanciarRestaurant,
    ExisteRestaurant,
    NoExisteRestaurant,
    // Excepciones para platos
    PlatoNoNull,
    InstanciarPlato,
    ExistePlato,
    NoExistePlato,
} from "../../js/excepciones/ExcepcionesRestaurantsManager.js";
import { Category } from "../clases/Category.js";
import { Menu } from "../clases/Menu.js";
import { Allergen } from "../clases/Allergen.js";
import { Restaurant } from "../clases/Restaurant.js";
import { Dish } from "../clases/Dish.js";

//!/////////////////////CLASE RESTAURANT MANAGER////////////////////////
// Variable en la que almacenaremos la instancia de la clase (singleton)
let instance;

class RestaurantsManager {
    //!/////////////DECLARACION DE LAS PROPIEDADES PRIVADAS//////////////
    #nombre;
    #categories;
    #allergens;
    #dishes;
    #menus;
    #restaurants;

    //!/////////////////////CONSTRUCTOR DE LA CLASE///////////////////////

    constructor() {
        // Comprobacion de que no se pueden crear mas de una instancia
        if (RestaurantsManager.instance) {
            throw new InstanciaNoPremitida();
        }
        // Asignacion de valores a las propiedades del objeto
        this.#nombre = "Sistema de gestion del restaurante";
        this.#categories = [];
        this.#allergens = [];
        this.#dishes = [];
        this.#menus = [];
        this.#restaurants = [];
        // Almacenamos la instancia en la variable para el sigleton
        RestaurantsManager.instance = this;
    }
    //!/////////////////METODO PARA INSTANCIAR OBJETOS///////////////////
    // Metodo que devuelve la instancia del objeto
    static getInstance() {
        // Si la clase no tiene instancia instanciamos una nueva
        if (!RestaurantsManager.instance) {
            RestaurantsManager.instance = new RestaurantsManager();
        }
        // Devolvemos la instancia de la clase
        return RestaurantsManager.instance;
    }

    //!/////////////////////////METODOS/////////////////////////////////
    //? ***************METODOS PARA LA CATEGORIA ***********************
    //*Metodo para crearla categoria
    createCategory(name, description) {
        //Buscamos el nombre de la categoria para ver si existe y lo almacenamos
        let categoriasEncontradas = this.#categories.filter(
            (categories) => categories.categoria.getName() == name
        );
        //Si existe la categoria en la lista devolvemos La categoria
        if (categoriasEncontradas.length > 0) {
            return categoriasEncontradas[0];
        }
        //Si no existe creamos un objeto con los argumentos pasados y lo devolvemos
        else {
            //Creamos un nuevo objeto categoria
            let categoria = new Category(name, description);
            //Asignamos a ese objeto la categoria creada
            let categoriaPlatoObj = {
                categoria: categoria,
                platos: [],
            };
            //Devolvemos el objeto creado
            return categoriaPlatoObj;
        }
    }
    //*Metodo para añadir la categoria
    addCategory(...categorias) {
        //Iteramos sobre las categorias entradas por parametros
        for (const categoria of categorias) {
            //Si la categoria no es una instancia de Category
            if (!(categoria.categoria instanceof Category)) {
                throw new InstanciaCategoria(categoria);
            }
            //Si el nombre de la categoria es null
            if (categoria.categoria.getName() === null) {
                throw new CategoryNoNull();
            }

            //Utilizamos el metodo filter para encontrar la categoria con el nombre dado
            let categoriasEncontradas = this.#categories.filter(
                (categorias) => categorias.categoria.getName() === categoria.categoria.getName()
            );
            //Verificamos si encontramos alguna categoria
            if (categoriasEncontradas.length > 0) {
                throw new ExisteCategoria(categoria.categoria);
            } else {
                //Si no existe la categoria la añadimos al array de categorias
                this.#categories.push(categoria);
            }
        }
        //Devolvemos la instancia actual para permitir encadenar llamadas
        return this;
    }

    //*Metodo para obtener un iteraror de las categorias
    getCategories() {
        //Referencia para habilitar el closure en el objeto
        let categoriesArray = this.#categories;
        return {
            [Symbol.iterator]() {
                //Inicializacion del indice para cada iterador
                let nextIndex = 0;
                return {
                    //Metodo next del iterador
                    next: function () {
                        //Si el indice es menor que los elementos de las categorias
                        return nextIndex < categoriesArray.length
                            ? //Devolvemos la categoria que esta en el indice
                              { value: categoriesArray[nextIndex++], done: false }
                            : //Si no paramos el iterador
                              { done: true };
                    },
                };
            },
        };
    }

    //*Metodo para borrar la categoria
    removeCategory(...categorias) {
        //Iteramos sobre las categorias entradas por parametros
        for (const categoria of categorias) {
            //Si la categoria no es una instancia de Category
            if (!(categoria.categoria instanceof Category)) {
                throw new InstanciaCategoria(categoria.categoria);
            }
            //Utilizamos el metodo filter para encontrar la categoria con el nombre dado
            let categoriasRestantes = this.#categories.filter(
                (categorias) => categorias.categoria.getName() !== categoria.categoria.getName()
            );
            //Si con el filtro se encuentran todas las categorias saltamos la excepcion
            if (categoriasRestantes.length === this.#categories.length) {
                throw new NoExisteCategoria(categoria.categoria);
            } else {
                //Si se encuentra la categoria como no ha entrado en el filtro actualizamos la lista de categorias
                this.#categories = categoriasRestantes;
            }
        }
        //Return para que se pueda encadenar la funcion
        return this;
    }

    //*Metodo que asigna un plato a una categoria
    assignCategoryToDish(...dishesAndCategories) {
        //Creamos dos arrays para almacenar los platos y las categorias entrantes
        let categoriasEntrante = [];
        let platosEntrantes = [];

        //Recorremos los platos y las categorias
        for (const platosCategorias of dishesAndCategories) {
            //Si el plato es una instancia de Dish
            if (platosCategorias.platos instanceof Dish) {
                //Si el nombre del plato es null saltamos la excepcion
                if (platosCategorias.platos.getName() === null) {
                    throw new DishNoNull();
                }
                //Buscamos el plato por el nombre
                let existePlato = this.#dishes.find(
                    (dish) => dish.platos.getName() === platosCategorias.platos.getName()
                );
                //Si no existe el plato lo añadimos a la la lista de platos
                if (!existePlato) {
                    this.addDish(platosCategorias);
                }
                //Almacennamos los platos en el array para los platos
                platosEntrantes.push(platosCategorias);
            }
            //Si la categoria es una instancia de la Category
            if (platosCategorias.categoria instanceof Category) {
                //Si el nombre es null saltamos la excepcion
                if (platosCategorias.categoria.getName() === null) {
                    throw new CategoryNoNull();
                }
                //Buscamos la categoria por el nombre
                let existeCategoria = this.#categories.find(
                    (category) =>
                        category.categoria.getName() === platosCategorias.categoria.getName()
                );
                //Si no existe la categoria la añadimos a la lista de la categoria
                if (!existeCategoria) {
                    this.addCategory(platosCategorias);
                }

                //Añadimos la categoria al array de categorias
                categoriasEntrante.push(platosCategorias);
            }
        }

        //Por cada categoria que haya en el array de categorias
        for (let i = 0; i < categoriasEntrante.length; i++) {
            //Asignamos la categoria a la variable
            const category = categoriasEntrante[i];
            //Asignamos el plato a la variable
            const dish = platosEntrantes[i];

            //Buscamos la categoria en el array de categoria para ver si existe
            let existingAssignment = this.#categories.find(
                (categoriaPlatoObj) =>
                    categoriaPlatoObj.categoria.getName() === category.categoria.getName()
            );

            //Buscamos si el plato ya esta asignado a esa categoria
            let platoExistente = existingAssignment.platos.find(
                (existingPlato) => existingPlato.platos.getName() === dish.platos.getName()
            );

            //Si el plato no esta asignado a la categoria lo asignamos
            if (!platoExistente) {
                //Añadimos los platos a la categoria
                existingAssignment.platos.push(dish);
            }
            //Si ya esta asignado saltamos la excepcion
            else {
                throw new ExistePlato(platoExistente.platos);
            }
        }
        //Devolvemos la instancia del metodo para que se pueda encadenar
        return this;
    }
    //* Metodo para desasignar un plato de una categoria
    deassignCategoryToDish(category, dish) {
        //Si la categoria no es una instancia de Category
        if (!category.categoria instanceof Category) {
            throw new InstanciaCategoria(category.categoria);
        }
        //Si el nombre de la categoria es null saltamos la excepcion
        if (category.categoria.getName() === null) {
            throw new CategoryNoNull();
        }
        //Si el plato es una instancia de Dish
        if (!dish.platos instanceof Dish) {
            throw new InstanciarPlato(dish.platos);
        }
        //Si el nombre del plato es null saltamos la excepcion
        if (dish.platos.getName() === null) {
            throw new DishNoNull();
        }

        //Buscamos la categoria en las asignaciones existentes por el nombre
        let existingCategory = this.#categories.find(
            (existingCategory) =>
                existingCategory.categoria.getName() === category.categoria.getName()
        );

        //Si la categoria no existe en las asignaciones saltamos la excepcion
        if (!existingCategory) {
            throw new NoExisteCategoria(category.categoria);
        }
        //Buscamos el plato en las asignaciones existentes por el nombre
        let existingDish = this.#dishes.find(
            (existingDish) => existingDish.platos.getName() === dish.platos.getName()
        );

        //Si el plato no existe en las asignaciones no saltamos la excepcion
        if (!existingDish) {
            throw new NoExistePlato(dish.platos);
        }

        //Filtramos los platos asignados a la categoria que son diferentes al plato introducido por parametros
        existingCategory.platos = existingCategory.platos.filter(
            (existingDish) => existingDish.platos.getName() !== dish.platos.getName()
        );

        //Devolvemos la instancia del metodo para que se pueda encadenar
        return this;
    }

    //*Metodo para obtener un iterador de los platos en una categoria
    getDishesInCategory(category, funcionOrdenado) {
        //Si la categoria es una instancia de Category
        if (!(category.categoria instanceof Category)) {
            //Si no lo es saltamosla excepcion
            throw new InstanciaCategoria(category.categoria);
        }
        //Si el nombre de la categoria es null saltamos la excepcion
        if (category.categoria.getName() === null) {
            throw new CategoryNoNull();
        }

        //Buscamos si la categoria introducida en el parametro se encuentra en la lista
        let existeCategoria = this.#categories.find(
            (categoria) => categoria.categoria.getName() === category.categoria.getName()
        );

        //Si no se encuentra saltamos la excepcion
        if (!existeCategoria) {
            throw new NoExisteCategoria(category);
        }

        // Obtenemos la referencia de los platos y aplicamos la función de ordenación si se proporciona
        let categoriaPlatos = existeCategoria.platos.slice();
        if (funcionOrdenado && typeof funcionOrdenado === "function") {
            categoriaPlatos.sort(funcionOrdenado);
        }

        //Devolvemos el objeto iterable para el iterador
        return {
            [Symbol.iterator]() {
                //Iniciamos el indice del iterados
                let nextIndex = 0;
                return {
                    //funcion next que nos devolvera los platos del iterador
                    next: function () {
                        //Si el indice es menos que los platos
                        return nextIndex < categoriaPlatos.length
                            ? //Devolvemos el plato del indice
                              { value: categoriaPlatos[nextIndex++], done: false }
                            : //Si no paramos el iterador
                              { done: true };
                    },
                };
            },
        };
    }

    //? ********************** METODOS PARA EL MENU *********************
    //* Metodo para crear el menu
    createMenu(name, description) {
        //Buscamos el nombre del menu para ver si existe y lo almacenamos
        let menusEncontrados = this.#menus.filter((menus) => menus.menus.getName() == name);
        //Si existe el menu en la lista devolvemos el menu
        if (menusEncontrados.length > 0) {
            return menusEncontrados[0];
        }
        //Si no existe creamos uno con los argumentos pasados y lo devolvemos
        else {
            let menu = new Menu(name, description);
            //Asignamos a ese objeto la categoria creada
            let menuPlatoObj = {
                menus: menu,
                platos: [],
            };
            return menuPlatoObj;
        }
    }
    //* Metodo para añadir el menu
    addMenu(...menus) {
        //Iteramos sobre los menus entradas por parametros
        for (const menu of menus) {
            //Si el menu no es una instancia de Menu
            if (!(menu.menus instanceof Menu)) {
                throw new InstanciaMenu(menu.menus);
            }
            //Si el nombre del menu es null
            if (menu.menus.getName() === null) {
                throw new MenuNoNull();
            }

            //Utilizamos el método filter para encontrar el menu con el nombre dado
            let menuEncontrados = this.#menus.filter(
                (menus) => menus.menus.getName() === menu.menus.getName()
            );
            //Verificamos si encontramos algun menu
            if (menuEncontrados.length > 0) {
                throw new ExisteMenu(menu.menus);
            } else {
                //Añadimos el menu al array
                this.#menus.push(menu);
            }
        }
        //Devolvemos la instancia actual para permitir encadenar llamadas
        return this;
    }

    //* Metodo para obtener las categorias
    getMenu() {
        //Referencia para habilitar el closure en el objeto
        let menusArray = this.#menus;
        return {
            [Symbol.iterator]() {
                //Inicializacion del indice para cada iterador
                let nextIndex = 0;
                return {
                    //Metodo next del iterador
                    next: function () {
                        //Si el indice es menor que los elementos de los menus
                        return nextIndex < menusArray.length
                            ? //Devolvemos la el menu que esta en el indice
                              { value: menusArray[nextIndex++], done: false }
                            : //Si no paramos el iterador
                              { done: true };
                    },
                };
            },
        };
    }

    //* Metodo para borrar el menu
    removeMenu(...menus) {
        //Iteramos sobre los menus entrados por parametros
        for (const menu of menus) {
            //Si el menu no es una instancia de Menu
            if (!(menu.menus instanceof Menu)) {
                throw new InstanciaMenu(menu.menus);
            }
            //Utilizamos el metodo filter para encontrar el menu con el nombre dado
            let menusRestantes = this.#menus.filter(
                (menus) => menus.menus.getName() !== menu.menus.getName()
            );
            //Si con el filtro se encuentran todas los menus saltamos la excepcion
            if (menusRestantes.length === this.#menus.length) {
                throw new NoExisteMenu(menu.menus);
            } else {
                //Si se encuentra el menu como no ha entrado en el filtro actualizamos la lista de alergenos
                this.#menus = menusRestantes;
            }
        }
        //Return para que se pueda encadenar la funcion
        return this;
    }

    //* Metodo que asigna un plato a un menu
    assignDishToMenu(...dishesAndMenu) {
        //Creamos dos arrays para almacenar los platos y los menus entrantes
        let menusEntrante = [];
        let platosEntrantes = [];

        //Recorremos los platos y las categorias
        for (const platosMenu of dishesAndMenu) {
            //Si el plato es una instancia de Dish
            if (platosMenu.platos instanceof Dish) {
                //Si el nombre del plato es null saltamos la excepcion
                if (platosMenu.platos.getName() === null) {
                    throw new DishNoNull();
                }
                //Buscamos el plato por el nombre
                let existePlato = this.#dishes.find(
                    (dish) => dish.platos.getName() === platosMenu.platos.getName()
                );
                //Si no existe el plato lo añadimos a la la lista de platos
                if (!existePlato) {
                    this.addDish(platosMenu);
                }
                //Almacennamos los platos en el array para los platos
                platosEntrantes.push(platosMenu);
            }
            //Si el menu es una instancia de Menu
            if (platosMenu.menus instanceof Menu) {
                //Si el nombre es null saltamos la excepcion
                if (platosMenu.menus.getName() === null) {
                    throw new MenuNoNull();
                }
                //Buscamos el menu por el nombre
                let existeMenu = this.#menus.find(
                    (menus) => menus.menus.getName() === platosMenu.menus.getName()
                );
                //Si no existe el menu lo añadimos a la lista de menus
                if (!existeMenu) {
                    this.addMenu(platosMenu);
                }

                //Añadimos el menu al array de menus
                menusEntrante.push(platosMenu);
            }
        }

        //Por cada menu que haya en el array de menus
        for (let i = 0; i < menusEntrante.length; i++) {
            //Asignamos el menu a la variable
            const menu = menusEntrante[i];
            //Asignamos el plato a la variable
            const dish = platosEntrantes[i];

            //Buscamos el menu en el array de menus para ver si existe
            let existingAssignment = this.#menus.find(
                (exitingMenu) => exitingMenu.menus.getName() === menu.menus.getName()
            );

            //Buscamos si el plato ya esta asignado al menu
            let platoExistente = existingAssignment.platos.find(
                (existingPlato) => existingPlato.platos.getName() === dish.platos.getName()
            );

            //Si el plato no esta asignado al menu lo asignamos
            if (!platoExistente) {
                //Añadimos los platos al menu
                existingAssignment.platos.push(dish);
            }
            //Si ya esta asignado saltamos la excepcion
            else {
                throw new ExistePlato(platoExistente.platos);
            }
        }
        //Devolvemos la instancia del metodo para que se pueda encadenar
        return this;
    }

    //* Metodo para desasignar un plato de un menu
    deassignDishToMenu(menu, dish) {
        //Si el menu no es una instancia de Menu
        if (!menu.menus instanceof Menu) {
            throw new InstanciaMenu(menu.menus);
        }
        //Si el nombre del menu es null saltamos la excepcion
        if (menu.menus.getName() === null) {
            throw new MenuNoNull();
        }
        //Si el plato es una instancia de Dish
        if (!dish.platos instanceof Dish) {
            throw new InstanciarPlato(dish.platos);
        }
        //Si el nombre del plato es null saltamos la excepcion
        if (dish.platos.getName() === null) {
            throw new PlatoNoNull();
        }

        //Buscamos el menu en las asignaciones existentes por el nombre
        let existingMenu = this.#menus.find(
            (existingMenu) => existingMenu.menus.getName() === menu.menus.getName()
        );

        //Si el menu no existe en las asignaciones saltamos la excepcion
        if (!existingMenu) {
            throw new NoExisteMenu(menu.menus);
        }
        //Buscamos el plato en las asignaciones existentes por el nombre
        let existingDish = this.#dishes.find(
            (existingDish) => existingDish.platos.getName() === dish.platos.getName()
        );

        //Si el plato no existe en las asignaciones no saltamos la excepcion
        if (!existingDish) {
            throw new NoExistePlato(dish.platos);
        }

        //Filtramos los platos asignados a al menu que son diferentes al plato introducido por parametros
        existingMenu.platos = existingMenu.platos.filter(
            (existingDish) => existingDish.platos.getName() !== dish.platos.getName()
        );

        //Devolvemos la instancia del metodo para que se pueda encadenar
        return this;
    }

    //* Metodo para cambiar de posicion los platos
    changeDishesPositionsInMenu(menu, dish1, dish2) {
        //Si el menu es una instancia de menu
        if (!(menu.menus instanceof Menu)) {
            throw new InstanciaMenu(menu.menus);
        }
        //Si el nombre del menu es null saltamos la excepcion
        if (menu.menus.getName() === null) {
            throw new MenuNoNull();
        }

        //Si dish1 es una instancia de Dish
        if (!(dish1.platos instanceof Dish)) {
            throw new InstanciarPlato(dish1.platos);
        }
        //Si el nombre del dish1 es null saltamos la excepcion
        if (dish1.platos.getName() === null) {
            throw new PlatoNoNull();
        }

        //Si dish2 es una instancia de Dish
        if (!(dish2.platos instanceof Dish)) {
            throw new InstanciarPlato(dish2.platos);
        }
        //Si el nombre del dish2 es null saltamos la excepcion
        if (dish2.platos.getName() === null) {
            throw new PlatoNoNull();
        }

        //Buscamos el menu en las asignaciones existentes por el nombre
        let existingMenu = this.#menus.find(
            (existingMenu) => existingMenu.menus.getName() === menu.menus.getName()
        );

        //Si el menu no existe en las asignaciones lanzamos una excepcion
        if (!existingMenu) {
            throw new NoExisteMenu(menu);
        }

        //Buscamos las posiciones de los platos en el menu
        let posicion1 = existingMenu.platos.findIndex(
            (existingDish) => existingDish.platos.getName() === dish1.platos.getName()
        );

        let posicion2 = existingMenu.platos.findIndex(
            (existingDish) => existingDish.platos.getName() === dish2.platos.getName()
        );

        //Verificamos si ambos platos existen en el menu
        if (posicion1 === -1) {
            throw new NoExistePlato(dish1.platos);
        }
        if (posicion2 === -1) {
            throw new NoExistePlato(dish2.platos);
        }

        //Intercambiamos las posiciones de los platos
        [existingMenu.platos[posicion1], existingMenu.platos[posicion2]] = [
            existingMenu.platos[posicion2],
            existingMenu.platos[posicion1],
        ];

        //Devolvemos la instancia del metodo para que se pueda encadenar
        return this;
    }

    //? ******************* METODOS PARA EL ALLERGEN ********************
    //* Metodo para crear un alergeno
    createAllergen(name, description) {
        //Buscamos el nombre del alergeno para ver si existe y lo almacenamos
        let alergenosEncontrados = this.#allergens.filter(
            (allergens) => allergens.getName() == name
        );
        //Si existe el alergeno en la lista devolvemos el alergeno
        if (alergenosEncontrados.length > 0) {
            return alergenosEncontrados[0];
        }
        //Si no existe creamos uno con los argumentos pasados y lo devolvemos
        else {
            let allergen = new Allergen(name, description);
            return allergen;
        }
    }

    //* Metodo para añadir el allergen
    addAllergen(...allergens) {
        //Iteramos sobre los alergenos entrados por parametros
        for (const allergen of allergens) {
            //Si el alergeno no es una instancia de Allergen
            if (!(allergen instanceof Allergen)) {
                throw new InstanciaAllergen(allergen);
            }
            //Si el nombre del alergeno es null
            if (allergen.getName() === null) {
                throw new AllergenNoNull();
            }
            //Utilizamos el metodo filter para encontrar el alergeno con el nombre dado
            let allergenEncontrados = this.#allergens.filter(
                (allergens) => allergens.getName() === allergen.getName()
            );
            //Verificamos si encontramos algun alergeno
            if (allergenEncontrados.length > 0) {
                throw new ExisteAlergeno(allergen);
            } else {
                //Añadimos el alergeno al array
                this.#allergens.push(allergen);
            }
        }
        //Devolvemos la instancia actual para permitir encadenar llamadas
        return this;
    }

    //* Metodo para obtener los alergenos
    getAllergen() {
        //Referencia para habilitar el closure en el objeto
        let allergenArray = this.#allergens;
        return {
            [Symbol.iterator]() {
                //Inicializacion del indice para cada iterador
                let nextIndex = 0;
                return {
                    //Metodo next del iterador
                    next: function () {
                        //Si el indice es menor que los elementos de los alergenos
                        return nextIndex < allergenArray.length
                            ? //Devolvemos el alergeno que esta en el indice
                              { value: allergenArray[nextIndex++], done: false }
                            : //Si no paramos el iterador
                              { done: true };
                    },
                };
            },
        };
    }

    //* Metodo para borrar el alergeno
    removeAllergen(...allergens) {
        //Iteramos sobre los alergenos entrados por parametros
        for (const allergen of allergens) {
            //Si el alergeno no es una instancia de Allergen
            if (!(allergen instanceof Allergen)) {
                throw new InstanciaAllergen(allergen);
            }
            //Utilizamos el metodo filter para encontrar los alergenos con el nombre dado
            let allergenRestantes = this.#allergens.filter(
                (allergens) => allergens.getName() !== allergen.getName()
            );
            //Si con el filtro se encuentran todos los alergenos saltamos la excepcion
            if (allergenRestantes.length === this.#allergens.length) {
                throw new NoExisteAllergen(allergen);
            } else {
                //Si se encuentra el alergeno como no ha entrado en el filtro actualizamos la lista de alergenos
                this.#allergens = allergenRestantes;
            }
        }
        //Return para que se pueda encadenar la funcion
        return this;
    }

    //? **************** METODOS PARA EL RESTAURANTE ********************
    //* Metodo para crear un restaurante
    createRestaurant(name, description, location) {
        //Buscamos el nombre del restaurante para ver si existe y lo almacenamos
        let restaurantesEncontrados = this.#restaurants.filter(
            (restaurants) => restaurants.getName() == name
        );
        //Si existe el restaurante en la lista devolvemos el restaurante
        if (restaurantesEncontrados.length > 0) {
            return restaurantesEncontrados[0];
        }
        //Si no existe creamos uno con los argumentos pasados y lo devolvemos
        else {
            let restaurant = new Restaurant(name, description, location);
            return restaurant;
        }
    }
    //* Metodo para añadir el restaurante
    addRestaurant(...restaurants) {
        //Iteramos sobre los restaurantes entrados por parametros
        for (const restaurant of restaurants) {
            //Si el restaurante no es una instancia de restaurante
            if (!(restaurant instanceof Restaurant)) {
                throw new InstanciarRestaurant(restaurant);
            }
            //Si el nombre del restaurante es null
            if (restaurant.getName() === null) {
                throw new RestaurantNoNull();
            }
            //Utilizamos el metodo filter para encontrar el restaurante con el nombre dado
            let restaurantEncontrados = this.#restaurants.filter(
                (restaurants) => restaurants.getName() === restaurant.getName()
            );
            //Verificamos si encontramos algun restaurante
            if (restaurantEncontrados.length > 0) {
                throw new ExisteRestaurant(restaurant);
            } else {
                //Añadimos el restaurante al array
                this.#restaurants.push(restaurant);
            }
        }
        //Devolvemos la instancia actual para permitir encadenar llamadas
        return this;
    }

    //* Metodo para obtener los restaurantes
    getRestaurant() {
        //Obtenemos los restaurantes de la lista
        let restaurantsArray = this.#restaurants;
        return {
            [Symbol.iterator]() {
                //Inicializacion del indice para cada iterador
                let nextIndex = 0;
                return {
                    //Metodo next del iterador
                    next: function () {
                        //Si el indice es menor que los elementos de los restaurantes
                        return nextIndex < restaurantsArray.length
                            ? //Devolvemos el restaurante que esta en el indice
                              { value: restaurantsArray[nextIndex++], done: false }
                            : //Si no paramos el iterador
                              { done: true };
                    },
                };
            },
        };
    }

    //* Metodo para borrar el restaurante
    removeRestaurant(...restaurants) {
        //Iteramos sobre los restaurantes entrados por parametros
        for (const restaurant of restaurants) {
            //Si el restaurante no es una instancia de Restaurant
            if (!(restaurant instanceof Restaurant)) {
                throw new InstanciarRestaurant(restaurant);
            }
            //Utilizamos el metodo filter para encontrar los restaurantes con el nombre dado
            let restaurantRestantes = this.#restaurants.filter(
                (restaurants) => restaurants.getName() !== restaurant.getName()
            );
            //Si con el filtro se encuentran todos los restaurante saltamos la excepcion
            if (restaurantRestantes.length === this.#restaurants.length) {
                throw new NoExisteRestaurant(restaurant);
            } else {
                //Si se encuentra el restaurante como no ha entrado en el filtro actualizamos la lista de restaurante
                this.#restaurants = restaurantRestantes;
            }
        }
        //Return para que se pueda encadenar la funcion
        return this;
    }

    //? ********************** METODOS PARA EL PLATO ********************
    //* Metodo para crear el plato
    createDish(name, description, ingredients, image) {
        //Buscamos el nombre del plato para ver si existe y lo almacenamos
        let dishEncontrados = this.#dishes.filter((dishes) => dishes.platos.getName() == name);
        //Si existe el plato en la lista devolvemos el plato
        if (dishEncontrados.length > 0) {
            return dishEncontrados[0];
        }
        //Si no existe creamos uno con los argumentos pasados y lo devolvemos
        else {
            //Creamos un nuevo objeto plato
            let plato = new Dish(name, description, ingredients, image);
            //Asignamos al objeto el plato y un array para los alergenos
            let platoAlergeno = {
                platos: plato,
                alergenos: [],
            };
            //Devolvemos el objeto creado
            return platoAlergeno;
        }
    }

    //* Metodo para añadir el plato
    addDish(...dishes) {
        //Iteramos sobre los platos entrados por parametros
        for (const dish of dishes) {
            //Si el plato no es una instancia de Dish
            if (!(dish.platos instanceof Dish)) {
                throw new InstanciarPlato(dish.platos);
            }
            //Si el nombre del plato es null
            if (dish.platos.getName() === null) {
                throw new PlatoNoNull();
            }
            //Utilizamos el metodo filter para encontrar el plato con el nombre dado
            let dishEncontrados = this.#dishes.filter(
                (dishes) => dishes.platos.getName() === dish.platos.getName()
            );
            //Verificamos si encontramos algun plato
            if (dishEncontrados.length > 0) {
                throw new ExistePlato(dish.platos);
            } else {
                //Añadimos el plato al array
                this.#dishes.push(dish);
            }
        }
        //Devolvemos la instancia actual para permitir encadenar llamadas
        return this;
    }

    //* Metodo para borrar el plato
    removeDish(...dishes) {
        //Iteramos sobre los platos proporcionados como parametros
        for (const dish of dishes) {
            //Si el plato no es una instancia de Dish
            if (!(dish.platos instanceof Dish)) {
                //Saltamos la excepcion
                throw new InstanciarPlato(dish.platos);
            }
            //Buscamos si el plato esta incluido en la lista
            let existingDish = this.#dishes.find(
                (existing) => existing.platos.getName() === dish.platos.getName()
            );
            //Si no existe el plato
            if (!existingDish) {
                //Saltamos la excepcion
                throw new NoExistePlato(dish.platos);
            }

            //Eliminamos las asignaciones de las categorias
            this.#categories.forEach((category) => {
                //Filtramos todas las categorias queno tengan el nombre del plato asignado
                category.platos = category.platos.filter(
                    (existing) => existing.platos.getName() !== dish.platos.getName()
                );
            });

            //Eliminamos los alergenos que tiene asignado el plato
            existingDish.alergenos.forEach((alergeno) => {
                //Obtenemos el indice de los alergenos de la lista general
                let allergenIndex = this.#allergens.findIndex(
                    (existingAllergen) => existingAllergen.getName() === alergeno.getName()
                );

                //Si se encuentra el alergeno en la lista borramos el alergeno
                if (allergenIndex !== -1) {
                    this.#allergens.splice(allergenIndex, 1);
                }
            });

            //Elimnamos la asignacion de los platos de los menus
            this.#menus.forEach((menu) => {
                menu.platos = menu.platos.filter(
                    (existing) => existing.platos.getName() !== dish.platos.getName()
                );
            });

            //Eliminamos el plato de la lista principal de platos
            this.#dishes = this.#dishes.filter(
                (existing) => existing.platos.getName() !== dish.platos.getName()
            );
        }

        //Devolver la instancia del método para encadenar
        return this;
    }

    //* Metodo para asignar un alergeno a un plato
    assignAllergenToDish(...dishesAndAllergen) {
        //Creamos dos arrays para almacenar los platos y los alergenos
        let alergenosEntrante = [];
        let platosEntrantes = [];

        //Recorremos los platos y los alergenos
        for (const platosAlergenos of dishesAndAllergen) {
            //Si el plato es una instancia de Dish
            if (platosAlergenos.platos instanceof Dish) {
                //Si el nombre del plato es null saltamos la excepcion
                if (platosAlergenos.platos.getName() === null) {
                    throw new PlatoNoNull();
                }
                //Buscamos el plato por el nombre
                let existePlato = this.#dishes.find(
                    (dish) => dish.platos.getName() === platosAlergenos.platos.getName()
                );
                //Si no existe el plato lo añadimos a la la lista de platos
                if (!existePlato) {
                    this.addDish(platosAlergenos);
                }
                //Almacennamos los platos en el array para los platos
                platosEntrantes.push(platosAlergenos);
            }
            //Si el alergeno es una instancia de Alergenos
            if (platosAlergenos instanceof Allergen) {
                //Si el nombre es null saltamos la excepcion
                if (platosAlergenos.getName() === null) {
                    throw new AllergenNoNull();
                }
                //Buscamos el alergeno por el nombre
                let existeAlergeno = this.#allergens.find(
                    (allergens) => allergens.getName() === platosAlergenos.getName()
                );
                //Si no existe el alergeno la añadimos a la lista de alergenos
                if (!existeAlergeno) {
                    this.addAllergen(platosAlergenos);
                }
                //Añadimos el alergeno al array de alergenos
                alergenosEntrante.push(platosAlergenos);
            }
        }

        //Por cada plato que haya en el array de platos
        for (let i = 0; i < platosEntrantes.length; i++) {
            //Asignamos el alergeno a la variable
            const allergen = alergenosEntrante[i];
            //Asignamos el plato a la variable
            const dish = platosEntrantes[i];

            //Buscamos el plato en las asignaciones existentes por el nombre
            let existingAssignment = this.#dishes.find(
                (dishes) => dishes.platos.getName() === dish.platos.getName()
            );
            //Buscamos si el alergeno ya esta asignado al plato
            let alergenoExistente = existingAssignment.alergenos.find(
                (existingAlergeno) => existingAlergeno.getName() === allergen.getName()
            );

            //Si el alergeno no esta adignado al plato lo asignamos
            if (!alergenoExistente) {
                existingAssignment.alergenos.push(allergen);
            }
            //Si ya esta asignado saltamos la excepcion
            else {
                throw new ExisteAlergeno(alergenoExistente);
            }
        }
        //Devolvemos la instancia del metodo para que se pueda encadenar
        return this;
    }

    //* Metodo para desasignar un plato de una categoria
    deassignAllergenToDish(dish, allergen) {
        //Si el plato no es una instancia de Dish
        if (!dish.platos instanceof Dish) {
            throw new InstanciarPlato(dish.platos);
        }
        //Si el nombre del plato es null saltamos la excepcion
        if (dish.platos.getName() === null) {
            throw new DishNoNull();
        }
        //Si el alergeno es una instancia de Allergen
        if (!allergen instanceof Allergen) {
            throw new InstanciaAllergen(allergen);
        }
        //Si el nombre del alergeno es null saltamos la excepcion
        if (allergen.getName() === null) {
            throw new AllergenNoNull();
        }

        //Buscamos la categoria en las asignaciones existentes por el nombre
        let existingPlato = this.#dishes.find(
            (existingDish) => existingDish.platos.getName() === dish.platos.getName()
        );

        //Si el plato no existe en las asignaciones saltamos la excepcion
        if (!existingPlato) {
            throw new NoExistePlato(dish.platos);
        }
        //Buscamos el alergeno en las asignaciones existentes por el nombre
        let existingAllergen = this.#allergens.find(
            (existingAllergen) => existingAllergen.getName() === allergen.getName()
        );

        //Si el alergeno no existe en las asignaciones saltamos la excepcion
        if (!existingAllergen) {
            throw new NoExisteAllergen(allergen);
        }

        //Filtramos los alergenos asignados a los platos que son diferentes al plato introducido por parametros
        existingPlato.alergenos = existingPlato.alergenos.filter(
            (existingAllergen) => existingAllergen.getName() !== allergen.getName()
        );

        //Devolvemos la instancia del metodo para que se pueda encadenar
        return this;
    }

    //* Metodo para obtener un iterador de los platos que contienen el alergeno
    getDishesWithAllergen(allergen, funcionOrdenado) {
        //Si el alergeno es una instancia de Allergen
        if (!(allergen instanceof Allergen)) {
            throw new InstanciaAllergen(allergen);
        }
        //Si el nombre del alergeno es null saltamos la excepcion
        if (allergen.getName() === null) {
            throw new AllergenNoNull();
        }
        //Buscamos el alergeno para ver si existe por el nombre
        let existeAlergeno = this.#allergens.find(
            (existing) => existing.getName() === allergen.getName()
        );

        //Si no existe el alergeno saltamos la excepcion
        if (!existeAlergeno) {
            throw new NoExisteAllergen(allergen);
        }

        //Filtramos los platos que contienen el alergeno
        let platosConAlergeno = this.#dishes.filter((plato) =>
            plato.alergenos.some((alergeno) => alergeno.getName() === allergen.getName())
        );

        //Ordenenamos los platos con la funcion de ordenacion
        if (funcionOrdenado && typeof funcionOrdenado === "function") {
            platosConAlergeno.sort(funcionOrdenado);
        }

        //Devolvemos el objeto iterable
        return {
            [Symbol.iterator]() {
                //Iniciamos el indice del iterador
                let nextIndex = 0;
                return {
                    //Funcion next
                    next: function () {
                        //Si el indice es menor que los platos que contiene el alergeno
                        return nextIndex < platosConAlergeno.length
                            ? //Devolvemos el plato
                              { value: platosConAlergeno[nextIndex++], done: false }
                            : //Si no paramos el iterador
                              { done: true };
                    },
                };
            },
        };
    }
    //* Metodo que nos devolvera con una funcion de callback los menus a los que pertenece un plato
    findDishes(dish, callback, funcionOrdenadoMenus) {
        //Si el plato no es una instancia de Dish
        if (!dish.platos instanceof Dish) {
            throw new InstanciarPlato(dish.platos);
        }
        //Si el nombre del plato es null saltamos la excepcion
        if (dish.platos.getName() === null) {
            throw new DishNoNull();
        }
        //Buscamos el plato por el nombre
        let existePlato = this.#dishes.find(
            (plato) => plato.platos.getName() === dish.platos.getName()
        );
        //Si no existe el plato saltamos la excepcion
        if (!existePlato) {
            throw new NoExistePlato(dish.platos);
        }
        //Filtramos los menus que cumplen con el criterio proporcionado por la funcion de callback
        let menusFiltrados = this.#menus.filter((menu) => callback(dish, menu));

        //Ordenamos los menus por el nombre
        if (funcionOrdenadoMenus && typeof funcionOrdenadoMenus === "function") {
            menusFiltrados.sort(funcionOrdenadoMenus);
        }

        //Devolver el objeto iterable para el iterador
        return {
            [Symbol.iterator]() {
                //Iniciamos el indice del iterador
                let nextIndex = 0;
                return {
                    //Iniciamos la funcion next
                    next: function () {
                        //Si el indice es menor que los menus encontrados
                        return nextIndex < menusFiltrados.length
                            ? //Devolvemos el menu del indice
                              { value: menusFiltrados[nextIndex++], done: false }
                            : //Si no paramos el iterador
                              { done: true };
                    },
                };
            },
        };
    }

    //? ************************ OTROS METODOS **************************
    //* Metodo para mostrar elementos de los arrays
    mostrarArrays(elementoArray) {
        elementoArray.forEach((element) => {
            console.log("El elemento del array es: " + element);
        });
    }

    //* Metodo toString que nos mostrara todas las propiedades de la clase
    toString() {
        //+ Desglose del array de categorias
        let categorias = this.#categories
            .map(function (categoriaPlato) {
                //Obtenemos el nombre de la categoria
                const categoriaAsignada = categoriaPlato.categoria.getName();

                //Iteramos sobre los platos asignados a la categoria
                const platoAsignados = categoriaPlato.platos
                    .map(function (platoAlergeno) {
                        // Devolvemos la información del plato
                        return "    " + platoAlergeno.platos.toString();
                    })
                    .join("\n");

                //Devolvemos el nombre de la categoria y platos asignados
                return (
                    "Categoria: " +
                    categoriaAsignada +
                    "\nPlatos asignados:\n" +
                    platoAsignados +
                    "\n" +
                    "\n"
                );
            })
            .join("");

        //+ Desglose del array de platos
        let platos = this.#dishes
            .map(function (platoAlergeno) {
                //Obtenemos el nombre del plato
                const platosAsignados = platoAlergeno.platos.getName();

                //Iteramos sobre los platos asignados a la categoria
                const alergenosAsignados = platoAlergeno.alergenos
                    .map(function (alergeno) {
                        //Devolvemos la informacion del plato
                        return "    " + alergeno.toString();
                    })
                    .join("\n");

                //Devolovemos el nombre del plato obtenidos y la informacion de los alergenos
                return (
                    "Plato: " + platosAsignados + "\nAlergenos asignados:\n" + alergenosAsignados + "\n"
                );
            })
            .join("\n");

        //+ Desglose del array de menus
        let menus = this.#menus
            .map(function (menuPlato) {
                //Obtenemos el nombre del menu
                const menuAsignados = menuPlato.menus.getName();
                //Iteramos sobre los platos asignados al menu
                const platosAsignados = menuPlato.platos
                    .map(function (platos) {
                        //Devolvemos la informacion del plato
                        return "    " + platos.platos.toString();
                    })
                    .join("\n");

                //Devolovemos el nombre de la menu obtenidos y la informacion de los platos
                return "Menu: " + menuAsignados + "\nPlatos asignados:\n" + platosAsignados+ ".\n";
            })
            .join("\n");

        let alergenos = this.#allergens.join("\n\n");
        let restaurantes = this.#restaurants.join("\n\n");

        //+ String que devuelve el metodo
        return (
            "********************NOMBRE DEL SISTEMA**********************\n" +
            this.#nombre +
            "\n" +
            "\n" +
            "******************CATEGORIAS DEL SISTEMA********************\n" +
            categorias +
            "\n" +
            "\n" +
            "*******************ALERGENOS DEL SISTEMA********************\n" +
            alergenos +
            "\n" +
            "\n" +
            "********************PLATOS DEL SISTEMA**********************\n" +
            platos +
            "\n" +
            "\n" +
            "*********************MENUS DEL SISTEMA**********************\n" +
            menus +
            "\n" +
            "\n" +
            "*******************RESTAURANTES DEL SISTEMA*****************\n" +
            restaurantes
        );
    }
}

////////////////////////////////////////////////EXPORTACION DE LA CLASE//////////////////////////////////////////////
export { RestaurantsManager };
