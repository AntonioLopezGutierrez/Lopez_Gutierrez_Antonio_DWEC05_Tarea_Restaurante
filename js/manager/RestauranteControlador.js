//!/////////////////////CLASE RESTAURANTECONTROLADOR/////////////////////
"use strict";

import { Coordinate } from "../clases/Coordinate.js";
import { validarLatitud, validarLongitud } from "./validacionesFormularios.js";

//?///////////////////////////PROPIEDADES PRIVADA////////////////////////
// Constante privada en el que almacenaremos el modelo
const MODELO = Symbol("RestauranteModelo");
// Constante privada en la que almacenaremos la vista
const VISTA = Symbol("RestauranteVista");

class RestauranteControlador {
    //?//////////////////CONSTRUCTOR DE LA CLASE/////////////////////////
    constructor(RestauranteModelo, RestauranteVista) {
        //* Asignacion de los valores a las propiedades
        // Asignamos el valor a la propiedad del modelo
        this[MODELO] = RestauranteModelo;
        // Asignamos el valor a la propiedad de la vista
        this[VISTA] = RestauranteVista;

        //* Llamada a los metodos que cargaran al inicio de la pagina
        this.onCarga();

        //* Llamada a los metodos de la vista que dotaran de funcionalidad a los elementos
        // llamada al manejador del boton de inicio de la vista pasandole el manejador
        this[VISTA].manejadorInicio(this.manejadorInicio);
        // Llamada al manejador del boton de categorias de la vista pasandole el manejador
        this[VISTA].manejadorCategoria(this.manejadorCategoria);
        // Llamada al manejador del boton de alergenos de la vista pasandole el manejador
        this[VISTA].manejadorAlergenos(this.manejadorAlergenos);
        // Llamada al manejador del boton de los menus de la vista pasandole el manejador
        this[VISTA].manejadorMenus(this.manejadorMenus);
        // Llamada al manejador del boton de platos de la vista pasandole el manejador
        this[VISTA].manejadorPlatos(this.manejadorPlatos);
        // Llamada al manejador del boton de restaurantes de la vista pasandole el manejador
        this[VISTA].manejadorRestauranteDescripcion(this.manejadorRestauranteDescripcion);
        // Llamada al manejador del boton de categorias platos de la vista pasandole el manejador
        this[VISTA].manejadorCategoriasPlatosInicio(this.manejadorCategoriasPlatosInicio);
        // Llamada al manejador del boton de categorias platos de la vista pasandole el manejador
        this[VISTA].manejadorCategoriasPlatosLateral(this.manejadorCategoriasPlatosLateral);
        // Llamada al manejador del boton de gestion de la vista a la que le pasaremos el manejador
        this[VISTA].manejadorSelectBarraNavegacionGestion(
            this.manejadorSelectBarraNavegacionGestion
        );
    }

    //?//////////////METODOS PARA LOS EVENTOS DEL USUARIO////////////////
    //* Metodo que llama al metodo de carga de la vista
    onCarga = () => {
        //+ Obtenemos los datos del modelo
        const categorias = this[MODELO].getCategories();
        const platos = this[MODELO].getDishes();
        const restaurantes = this[MODELO].getRestaurant();
        //+ Llama al metodo de inicio de la vista con argumento los iteradores
        this[VISTA].carga(categorias, platos, restaurantes);
    };

    //* Metodo que llama al metodo de inicio de la vista
    onInicio = () => {
        //+ Obtenemos los datos del modelo
        const categorias = this[MODELO].getCategories();
        const platos = this[MODELO].getDishes();
        const restaurantes = this[MODELO].getRestaurant();
        //+ Cargamos todos los manejadores de la pagina de inicio
        // Llama al metodo de inicio de la vista con argumento los iteradores
        this[VISTA].inicio(categorias, platos, restaurantes);
        // Llamada al manejador del boton de categorias platos de la vista pasandole el manejador
        this[VISTA].manejadorCategoriasPlatosInicio(this.manejadorCategoriasPlatosInicio);
        // llamada al manejador del boton de inicio de la vista pasandole el manejador
        this[VISTA].manejadorInicio(this.manejadorInicio);
        // Llamada al manejador del boton de categorias de la vista pasandole el manejador
        this[VISTA].manejadorCategoria(this.manejadorCategoria);
        // Llamada al manejador del boton de alergenos de la vista pasandole el manejador
        this[VISTA].manejadorAlergenos(this.manejadorAlergenos);
        // Llamada al manejador del boton de los menus de la vista pasandole el manejador
        this[VISTA].manejadorMenus(this.manejadorMenus);
        // Llamada al manejador del boton de platos de la vista pasandole el manejador
        this[VISTA].manejadorPlatos(this.manejadorPlatos);
        // Llamada al manejador del boton de restaurantes de la vista pasandole el manejador
        this[VISTA].manejadorRestauranteDescripcion(this.manejadorRestauranteDescripcion);
        // Llamada al manejador del boton de categorias platos de la vista pasandole el manejador
        this[VISTA].manejadorCategoriasPlatosInicio(this.manejadorCategoriasPlatosInicio);
        // Llamada al manejador del boton de categorias platos de la vista pasandole el manejador
        this[VISTA].manejadorCategoriasPlatosLateral(this.manejadorCategoriasPlatosLateral);
        // Llamada al manejador del boton de gestion de la vista a la que le pasaremos el manejador
        this[VISTA].manejadorSelectBarraNavegacionGestion(
            this.manejadorSelectBarraNavegacionGestion
        );
    };

    //* Metodo que llama al metodo de mostradoCategorias de la vista
    onCategorias = () => {
        // Obtenemos los datos del modelo
        const categorias = this[MODELO].getCategories();
        // LLama al metodo de mostrado de categorias con argumento el iterator
        this[VISTA].categorias(categorias);
        // Llamada al manejador del boton de categorias platos de la vista pasandole el manejador
        this[VISTA].manejadorCategoriasPlatosMenu(this.manejadorCategoriasPlatosMenu);
        // Llamada al manejador del boton de categorias platos de la vista pasandole el manejador
        this[VISTA].manejadorCategoriasPlatosLateral(this.manejadorCategoriasPlatosLateral);
    };

    //* Metodo que llama al metodo de mostradoCategorias de la vista
    onAlergenos = () => {
        // Obtenemos los datos del modelo
        const alergeno = this[MODELO].getAllergen();
        // LLama al metodo de mostrado de categorias con argumento el iterator
        this[VISTA].alergenos(alergeno);
        // Llamamos al manejador que mostrara los platos que contiene un alergeno
        this[VISTA].manejadorAlergenosPlatos(this.manejadorAlergenosPlatos);
        // Llamamos al manejador que mostrara los platos que tiene un alergeno desde el menu lateral
        this[VISTA].manejadorAlegenosPlatosLateral(this.manejadorAlegenosPlatosLateral);
    };

    //* Metodo que llama al metodo de mostradoMenus de la vista
    onMenus = () => {
        // Obtenemos los datos del modelo
        const menus = this[MODELO].getMenu();
        // LLama al metodo de mostrado de menus con argumento el iterator
        this[VISTA].menus(menus);
        // Llamamos al manejador que mostrara los platos que contiene un menu
        this[VISTA].manejadorMenusPlatos(this.manejadorMenusPlatos);
        // Llamamos al manejador que mostrara los platos que contiene un menu desde la barra lateral
        this[VISTA].manejadorMenusPlatosLateral(this.manejadorMenusPlatosLateral);
    };

    //* Metodo que llama al metodo de mostradoPlatos de la vista
    onPlatos = () => {
        // Obtenemos los datos del modelo
        const platos = this[MODELO].getDishes();
        // LLama al metodo de mostrado de platos con argumento el iterator
        this[VISTA].platos(platos);
        // Llamada al manejador del boton de categorias platos de la vista pasandole el manejador
        this[VISTA].manejadorPlatosDescripcion(this.manejadorPlatosDescripcion);
        // Llamamos al manejador que mostrara la descripcion de los platos que tiene la categoria desde el menu lateral
        this[VISTA].manejadorPlatosDescripcionLateral(this.manejadorPlatosDescripcionLateral);
    };

    //?//METODOS PARA LOS EVENTOS DE LOS USUARIOS EN ELEMENTOS GENERADOS//
    //* Metodo que muestra la descripcion de los restaurantes
    onRestauranteDescripcion = (restauranteNombre) => {
        // Comprobamos si ha obtenido argumentos de la vista
        if (restauranteNombre) {
            // Transformamos el iterador de restaurantes en un array
            let arrayRestaurantes = [...this[MODELO].getRestaurant()];
            // Filtrar los restaurantes por el nombre del restaurante
            let restaurantesFiltrados = arrayRestaurantes.filter(
                (restaurante) => restaurante.getName() == restauranteNombre
            );
            // Llamada al metodo de la vista que muestra la descripcion de los restaurantes
            this[VISTA].restauranteDescripcion(restaurantesFiltrados, arrayRestaurantes);
            // Llamamos al manejador que mostrara la descripcion de los restaurantes desde el menu lateral
            this[VISTA].manejadorRestauranteDescripcionLateral(
                this.manejadorRestauranteDescripcionLateral
            );
        } else {
            // Si no se obtiene ningun argumento obtenemos la vcategoria del objeto history
            let restauranteSeleccionado = history.state.restauranteSeleccionado;
            // Transformamos el iterador de restaurantes en un arry
            let arrayRestaurantes = [...this[MODELO].getRestaurant()];
            // Filtrar los restaurantes por el nombre del restaurante o de los parametros o del history
            let restaurantesFiltrados = arrayRestaurantes.filter(
                (restaurante) => restaurante.getName() == restauranteSeleccionado
            );
            // Llamada al metodo de la vista que muestra la descripcion de los restaurantes
            this[VISTA].restauranteDescripcion(restaurantesFiltrados, arrayRestaurantes);
            // Llamamos al manejador que mostrara la descripcion de los restaurantes desde el menu lateral
            this[VISTA].manejadorRestauranteDescripcionLateral(
                this.manejadorRestauranteDescripcionLateral
            );
        }
    };

    //* Metodo que muestra los  platos de una categoria
    onCategoriasPlatos(categoriaNombre) {
        // Comprobamos si hemos  recibido argumentos de la vista
        if (categoriaNombre) {
            // Obtenemos el array de categorias
            let arrayCategorias = [...this[MODELO].getCategories()];
            // Filtrar las categorias por el nombre de las categorias
            let categoriaFiltrado = arrayCategorias.filter(
                (categoria) => categoria.categoria.getName() == categoriaNombre
            );
            // Obtenemos los platos de las categorias
            let platosCategorias = this[MODELO].getDishesInCategory(categoriaFiltrado[0]);
            // Llamada al metodo de la vista que muestra los platos
            this[VISTA].categoriasPlatos(platosCategorias);
            // Llamamos al manejador que mostrara la descripcion de los platos que tiene la categoria
            this[VISTA].manejadorPlatosDescripcion(this.manejadorPlatosDescripcion);
            // Llamamos al manejador que mostrara la descripcion de los platos que tiene la categoria desde el menu lateral
            this[VISTA].manejadorPlatosDescripcionLateral(this.manejadorPlatosDescripcionLateral);
        } else {
            // Verificamos si hay un estado en el historial y si contiene el nombre de la categoria
            let categoriaSeleccionada = history.state.categoriaSeleccionado;
            // Obtenemos el array de categorias
            let arrayCategorias = [...this[MODELO].getCategories()];
            // Filtrar las categorias por el nombre de las categorias
            let categoriaFiltrado = arrayCategorias.filter(
                (categoria) => categoria.categoria.getName() == categoriaSeleccionada
            );
            // Obtenemos los platos de las categorias
            let platosCategorias = this[MODELO].getDishesInCategory(categoriaFiltrado[0]);
            // Llamada al metodo de la vista que muestra los platos
            this[VISTA].categoriasPlatos(platosCategorias);
            // Llamamos al manejador que mostrara la descripcion de los platos que tiene la categoria
            this[VISTA].manejadorPlatosDescripcion(this.manejadorPlatosDescripcion);
            // Llamamos al manejador que mostrara la descripcion de los platos que tiene la categoria desde el menu lateral
            this[VISTA].manejadorPlatosDescripcionLateral(this.manejadorPlatosDescripcionLateral);
        }
    }

    //* Metodo que muestra la descriopcion de los platos
    onDescripcionPlatos = (platoNombre) => {
        // Comprobamos si hemos recibido argumentos de la vista
        if (platoNombre) {
            // Obtenemos el array de platos
            let platosArray = [...this[MODELO].getDishes()];
            // Filtramos los platos por el nombre del plato por parametors
            let platoFiltrado = platosArray.filter(
                (plato) => plato.platos.getName() == platoNombre
            );
            // Llamada al metodo de la vista que muestra la descripcion de los platos
            this[VISTA].descripcionPlatos(platoFiltrado);
        } else {
            // Verificamos si hay un estado en el historial y si contiene el nombre del plato
            let platoSeleccionado = history.state.platoSeleccionado;
            // Obtenemos el array de platos
            let platosArray = [...this[MODELO].getDishes()];
            // Filtramos los platos por el nombre del plato por parametors
            let platoFiltrado = platosArray.filter(
                (plato) => plato.platos.getName() == platoSeleccionado
            );
            // Llamada al metodo de la vista que muestra la descripcion de los platos
            this[VISTA].descripcionPlatos(platoFiltrado);
        }
    };

    //* Metodo que muestra los platos que tiene un alergeno
    onAlergenosPlatos = (alergenoNombre) => {
        if (alergenoNombre) {
            // Obtenemos el array de con los alergenos
            let alergenosArray = [...this[MODELO].getAllergen()];
            // Filtramos los alergenos por el nombre introducido por parametro
            let alergenoFiltrado = alergenosArray.filter(
                (alergeno) => alergeno.getName() == alergenoNombre
            );
            // Obtenemos los platos que tiene un alergeno
            let platosAlergeno = this[MODELO].getDishesWithAllergen(alergenoFiltrado[0]);
            // Llamada al metodo de la vista que muestra los platos que tiene el alergeno
            this[VISTA].alergenosPlatos(platosAlergeno);
            // Llamamos al manejador que mostrara la descripcion de los platos que tiene el alergeno
            this[VISTA].manejadorAlergenosPlatosDescripcion(
                this.manejadorAlergenosPlatosDescripcion
            );
            // Llamamos al manejador que mostrara la descripcion de los platos desde el menu lateral
            this[VISTA].manejadorPlatosDescripcionLateral(this.manejadorPlatosDescripcionLateral);
        } else {
            // Verificamos si hay un estado en el historial y si contiene el alergeno
            let alergenoSeleccionado = history.state.alergenoSeleccionado;
            // Obtenemos el array de alergenos
            let alergenosArray = [...this[MODELO].getAllergen()];
            // Filtramos los alergenos por el nombre del alergeno
            let alergenoFiltrado = alergenosArray.filter(
                (alergeno) => alergeno.getName() == alergenoSeleccionado
            );
            // Obtenemos los platos que tiene un alergeno
            let platosAlergeno = this[MODELO].getDishesWithAllergen(alergenoFiltrado[0]);
            // Llamada al metodo de la vista que muestra la descripcion de los platos
            this[VISTA].alergenosPlatos(platosAlergeno);
            // Llamamos al manejador que mostrara la descripcion de los platos que tiene el alergeno
            this[VISTA].manejadorAlergenosPlatosDescripcion(
                this.manejadorAlergenosPlatosDescripcion
            );
            // Llamamos al manejador que mostrara la descripcion de los platos desde el menu lateral
            this[VISTA].manejadorPlatosDescripcionLateral(this.manejadorPlatosDescripcionLateral);
        }
    };

    //* Metodo que muestra los platos que contiene un menu
    onMenuMostrarPlatos = (menuNombre) => {
        if (menuNombre) {
            // Obtenemos el array de con los menus
            let menusArray = [...this[MODELO].getMenu()];
            // Filtramos los menus por el nombre del menu
            let menuFiltrado = menusArray.filter((menu) => menu.menus.getName() == menuNombre);
            // Obtenemos array con los platos que tiene el menu
            let arrayPlatosMenu = menuFiltrado.map((plato) => plato.platos);
            // Llamada al metodo de la vista que muestra los platos del menu
            this[VISTA].menuMostrarPlatos(arrayPlatosMenu[0]);
            // Llamamos al manejador que mostrara la descripcion de los platos
            this[VISTA].manejadorPlatosDescripcion(this.manejadorPlatosDescripcion);
            // Llamamos al manejador que mostrara la descripcion de los platos desde el menu lateral
            this[VISTA].manejadorPlatosDescripcionLateral(this.manejadorPlatosDescripcionLateral);
        } else {
            // Verificamos si hay un estado en el historial y si contiene el alergeno
            let menuSeleccionado = history.state.menuSeleccionado;
            // Obtenemos el array de con los menus
            let menusArray = [...this[MODELO].getMenu()];
            // Filtramos los menus por el nombre del menu
            let menuFiltrado = menusArray.filter(
                (menu) => menu.menus.getName() == menuSeleccionado
            );
            // Obtenemos array con los platos que tiene el menu
            let arrayPlatosMenu = menuFiltrado.map((plato) => plato.platos);
            // Llamada al metodo de la vista que muestra los platos del menu
            this[VISTA].menuMostrarPlatos(arrayPlatosMenu[0]);
            // Llamamos al manejador que mostrara la descripcion de los platos
            this[VISTA].manejadorPlatosDescripcion(this.manejadorPlatosDescripcion);
            // Llamamos al manejador que mostrara la descripcion de los platos desde el menu lateral
            this[VISTA].manejadorPlatosDescripcionLateral(this.manejadorPlatosDescripcionLateral);
        }
    };

    //!//////////////////////////////////////////////////////////////////
    //?///////////METODOS PARA LOS EVENTOS DE FORMULARIOS////////////////
    //* Metodo que nos mostrara los formulularios para la gestion
    onFormulariosGestion = (opcionSeleccionada) => {
        // Obtenemos la categorias del modelo
        const categorias = this[MODELO].getCategories();
        // Obtenemos los alergenos del modelo
        const alergenos = this[MODELO].getAllergen();
        // Obtenemos los platos del modelo
        const platos = this[MODELO].getDishes();
        // Obtenemos los menus del modelo
        const menus = this[MODELO].getMenu();
        // Comprobamos si ha optenido argumentos
        if (opcionSeleccionada) {
            // Comprobamos la opcion seleccionada para llamar al metodo de la vista y al manejador
            switch (opcionSeleccionada) {
                case "Crear Plato":
                    // Llamada al metodo de la vista que mustra el formulario para el nuevo plato
                    this[VISTA].nuevoPlato(categorias, alergenos);
                    // LLamamos al manejador para obtener los datos del formulario de creacion de platos
                    this[VISTA].manejadorFormularioCrearPlato(this.manejadorFormularioCrearPlato);
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    break;
                case "Eliminar plato":
                    // Llamada al metodo de la vista para  mostrar el formulario de eliminar plato
                    this[VISTA].eliminarPlato(platos);
                    // LLamamos al manejador para obtener los datos del formulario para eliminar platos
                    this[VISTA].manejadorFormularioCrearEliminarPlato(
                        this.manejadorFormularioCrearEliminarPlato
                    );
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    break;
                case "Administrar Platos":
                    // LLamada al metodo de la vista para mostrar los formularios para administrar platos en los menus
                    this[VISTA].administrarPlatos(menus, platos);
                    // LLamamos al manejador para obtener el menu y mostrar los platos para la desasignacion
                    this[VISTA].manejadorFormularioMostrarPlatosMenuDesasignacion(
                        this.manejadorFormularioMostrarPlatosMenuDesasignacion
                    );
                    // LLamamos al manejador para obtener el menu y mostrar los platos para la ordenacion
                    this[VISTA].manejadorFormularioMostrarPlatosMenuOrdenacion(
                        this.manejadorFormularioMostrarPlatosMenuOrdenacion
                    );
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    // LLamamos al manejador de la vista para la asignacion de los platos al menu
                    this[VISTA].manejadorFormularioAsignarPlatoMenu(
                        this.manejadorFormularioAsignarPlatoMenu
                    );
                    break;
                case "Administrar Categorias":
                    // Llamada al metodo de la vista para mosrtrar los formularios para administrar las categorias
                    this[VISTA].administrarCategorias(categorias);
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    // LLamamos al manejador de la vista para crear la categoria desde el formulario
                    this[VISTA].manejadorFormularioCrearCategoria(
                        this.manejadorFormularioCrearCategoria
                    );
                    // LLamamos al manejador de la vista para eliminar la categoria desde el formulario
                    this[VISTA].manejadorFormularioEliminarCategoria(
                        this.manejadorFormularioEliminarCategoria
                    );
                    break;
                case "Crear restaurante":
                    // Llamada al metodo de la vista para mostrar el formulario para crear un restaurante
                    this[VISTA].nuevoRestaurante();
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    // LLamamos al manejador de la vista que creara el restaurante desde el formulario
                    this[VISTA].manejadorFormularioCrearRestaurante(
                        this.manejadorFormularioCrearRestaurante
                    );
                    break;
                case "Categorias Platos":
                    // LLamada al metodo de la vista para mostrar rl formulario para modificar los platos de la categoria
                    this[VISTA].categoriasPlatosAsignado(platos, categorias);
                    // LLamamos al manejador para obtener los platos de las categorias a dessignar
                    this[VISTA].manejadorFormularioMostrarPlatosCategoriaDesasignado(
                        this.manejadorFormularioMostrarPlatosCategoriaDesasignado
                    );
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    // LLamamos al manejador de la vista para asignar la categoria al plato
                    this[VISTA].manejadorFormularioAsignarPlatoCategorias(
                        this.manejadorFormularioAsignarPlatoCategorias
                    );
                    break;
            }
        } else {
            // Obtenemos la opcion seleccionada del history que hemos almacenado al a0pilar la entrada
            let opcionSeleccionada = history.state.opcionSeleccionada;
            // Comprobamos la opcion seleccionada para llamar al metodo de la vista y al manejador
            switch (opcionSeleccionada) {
                case "Crear Plato":
                    // Llamada al metodo de la vista que mustra el formulario para el nuevo plato
                    this[VISTA].nuevoPlato(categorias, alergenos);
                    // LLamamos al manejador para obtener los datos del formulario de creacion de platos
                    this[VISTA].manejadorFormularioCrearPlato(this.manejadorFormularioCrearPlato);
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    break;
                case "Eliminar plato":
                    // Llamada al metodo de la vista para  mostrar el formulario de eliminar plato
                    this[VISTA].eliminarPlato(platos);
                    // LLamamos al manejador para obtener los datos del formulario para eliminar platos
                    this[VISTA].manejadorFormularioCrearEliminarPlato(
                        this.manejadorFormularioCrearEliminarPlato
                    );
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    break;
                case "Administrar Platos":
                    // LLamada al metodo de la vista para mostrar los formularios para administrar platos en los menus
                    this[VISTA].administrarPlatos(menus, platos);
                    // LLamamos al manejador para obtener el menu y mostrar los platos para la desasignacion
                    this[VISTA].manejadorFormularioMostrarPlatosMenuDesasignacion(
                        this.manejadorFormularioMostrarPlatosMenuDesasignacion
                    );
                    // LLamamos al manejador para obtener el menu y mostrar los platos para la ordenacion
                    this[VISTA].manejadorFormularioMostrarPlatosMenuOrdenacion(
                        this.manejadorFormularioMostrarPlatosMenuOrdenacion
                    );
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    // LLamamos al manejador de la vista para la asignacion de los platos al menu
                    this[VISTA].manejadorFormularioAsignarPlatoMenu(
                        this.manejadorFormularioAsignarPlatoMenu
                    );
                    break;
                case "Administrar Categorias":
                    // Llamada al metodo de la vista para mosrtrar los formularios para administrar las categorias
                    this[VISTA].administrarCategorias(categorias);
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    // LLamamos al manejador de la vista para crear la categoria desde el formulario
                    this[VISTA].manejadorFormularioCrearCategoria(
                        this.manejadorFormularioCrearCategoria
                    );
                    // LLamamos al manejador de la vista para eliminar la categoria desde el formulario
                    this[VISTA].manejadorFormularioEliminarCategoria(
                        this.manejadorFormularioEliminarCategoria
                    );
                    break;
                case "Crear restaurante":
                    // Llamada al metodo de la vista para mostrar el formulario para crear un restaurante
                    this[VISTA].nuevoRestaurante();
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );
                    // LLamamos al manejador de la vista que creara el restaurante desde el formulario
                    this[VISTA].manejadorFormularioCrearRestaurante(
                        this.manejadorFormularioCrearRestaurante
                    );
                    break;
                case "Categorias Platos":
                    // LLamada al metodo de la vista para mostrar rl formulario para modificar los platos de la categoria
                    this[VISTA].categoriasPlatosAsignado(platos, categorias);
                    // LLamamos al manejador para obtener los platos de las categorias a dessignar
                    this[VISTA].manejadorFormularioMostrarPlatosCategoriaDesasignado(
                        this.manejadorFormularioMostrarPlatosCategoriaDesasignado
                    );
                    // LLamamos al manejador de la vista para mostrar los formularios desde el lateral
                    this[VISTA].manejadorFormularoiosGestionLateral(
                        this.manejadorFormularoiosGestionLateral
                    );

                    // LLamamos al manejador de la vista para asignar la categoria al plato
                    this[VISTA].manejadorFormularioAsignarPlatoCategorias(
                        this.manejadorFormularioAsignarPlatoCategorias
                    );
                    break;
            }
        }
    };

    //* Metodo para el mostrado de platos segun el menu seleccionado para la desasignacion
    onManejadorFormularioMostrarPlatosMenuDesasignacion = (menuSeleccionado) => {
        // Obtenemos el array de con los menus
        let menusArray = [...this[MODELO].getMenu()];
        // Filtramos los menus por el nombre del menu
        let menuFiltrado = menusArray.filter((menu) => menu.menus.getName() == menuSeleccionado);
        // Obtenemos array con los platos que tiene el menu
        let arrayPlatosMenu = menuFiltrado.map((plato) => plato.platos);
        // Llamada al metodo de la vista que muestra los platos del menu
        this[VISTA].menuMostrarPlatosDesasignacion(arrayPlatosMenu[0]);
    };

    //* Metodo para el mostrado de plaros segun el menu seleccionado para la oordenacion
    onManejadorFormularioMostrarPlatosMenuOrdenacion = (menuSeleccionado) => {
        // Obtenemos el array de con los menus
        let menusArray = [...this[MODELO].getMenu()];
        // Filtramos los menus por el nombre del menu
        let menuFiltrado = menusArray.filter((menu) => menu.menus.getName() == menuSeleccionado);
        // Obtenemos array con los platos que tiene el menu
        let arrayPlatosMenu = menuFiltrado.map((plato) => plato.platos);
        // Llamada al metodo de la vista que muestra los platos del menu
        this[VISTA].menuMostrarPlatosOrdenacion(arrayPlatosMenu[0]);
    };

    //* Metodo para el mostrado de platos segun la categoria seleccionado para la desasignacion
    onManejadorFormularioMostrarPlatosCategoriaDesasignado = (categoriaSeleccionada) => {
        // Obtenemos el array de categorias
        let arrayCategorias = [...this[MODELO].getCategories()];
        // Filtrar las categorias por el nombre de las categorias
        let categoriaFiltrado = arrayCategorias.filter(
            (categoria) => categoria.categoria.getName() == categoriaSeleccionada
        );
        // Obtenemos los platos de las categorias
        let platosCategorias = this[MODELO].getDishesInCategory(categoriaFiltrado[0]);
        // Llamada al metodo de la vista que muestra los platos de la categoria
        this[VISTA].categoriasMostrarPlatosDesasignado(platosCategorias);
        
        // LLamamos al manejador de la vista para desasignar la categoria al plato
        this[VISTA].manejadorFormularioDesasignarPlatoCategorias(
            this.manejadorFormularioDesasignarPlatoCategorias
        );
    };

    //* Metodo para la creacion de platos asignado la categoria y los alergenos
    onManejadorFormularioCrearPlato = (
        nombre,
        urlImagen,
        descripcion,
        ingredientesArray,
        categoriasArray,
        alergenosArray
    ) => {
        try {
            //- Llamamos al metodo del modelo para la crecion de platos del modelo
            let plato = this[MODELO].createDish(nombre, descripcion, ingredientesArray, urlImagen);
            // LLamada al metodo del modelo para agregar el plato
            this[MODELO].addDish(plato);

            //- Obtenemos las categorias del modelo y las pasamos a un array
            let arrayCategorias = [...this[MODELO].getCategories()];
            // Creamos un nuevo array para almacenar las categorias filtradas por nombre
            let arrayCategoriasFiltrado = [];
            // Comprobamos si el array de categorias por parametros no esta vacio
            if (categoriasArray.length > 0) {
                // Recorremos los nombres de las categorias
                categoriasArray.forEach((categoriaNombre) => {
                    // Filtramos las categorias por el nombre de las categorias
                    let categoriaFiltrado = arrayCategorias.filter(
                        (categoria) => categoria.categoria.getName() == categoriaNombre
                    );
                    // Agregamos las categorias al array
                    arrayCategoriasFiltrado.push(categoriaFiltrado[0]);
                });
            }
            // Llamada al metodo del modelo para asignar las categorias a los platos
            this[MODELO].assignCategoryToDish(plato, ...arrayCategoriasFiltrado);

            //- Obtenemos los alergenos del modelo
            let alergenosArrayModelo = [...this[MODELO].getAllergen()];
            // Creamos un nuevo array para almacenar los alergenos filtradas por nombre
            let arrayAlergenosFiltrado = [];
            // Comprobamos si el array de categorias por parametros no esta vacio
            if (alergenosArray.length > 0) {
                // Recorremos los nombres de las categorias
                alergenosArray.forEach((alegenoNombre) => {
                    // Filtramos las categorias por el nombre de las categorias
                    let alergenoFiltrado = alergenosArrayModelo.filter(
                        (alergeno) => alergeno.getName() == alegenoNombre
                    );
                    // Agregamos las categorias al array
                    arrayAlergenosFiltrado.push(alergenoFiltrado[0]);
                });
            }
            // Llamada al metodo del modelo para asignar los alergenos a los platos
            this[MODELO].assignAllergenToDish(plato, ...arrayAlergenosFiltrado);
            // Creamos el mensaje para la creacion del plato exitosa
            const stringMensaje = "El plato se ha añadido correctamente";
            // Llamada al metodo de la vista que mostrara un mensaje para la creacion del plato
            this[VISTA].mostradoMensajeFormulariosConfirmacion(stringMensaje);
        } catch (error) {
            // Obtenemos el mensaje de error de la excepcion
            let stringError = error.message;
            // Llamamos al metodo de la vista que mostrara el mensaje para para el error de la creacion
            this[VISTA].mostradoMensajeFormulariosError(stringError);
        }
    };

    //* Metodo para la eliminacion de platos desde el formulario
    onManejadorFormularioCrearEliminarPlato = (nombreplatoSeleccionado) => {
        // Si obtenemos un plato seleccionado
        if (nombreplatoSeleccionado) {
            // Obtenemos el array de platos
            let platosArray = [...this[MODELO].getDishes()];
            // Filtramos los platos por el nombre del plato por parametors
            let platoFiltrado = platosArray.filter(
                (plato) => plato.platos.getName() == nombreplatoSeleccionado
            );
            // LLamamos al metodo del modelo para la eliminacion de platos
            this[MODELO].removeDish(platoFiltrado[0]);
            // Creamos el mensaje para la eliminacion ha sido exitosa
            const stringMensaje = "El plato se a eliminado correctamente";
            // Llamada al metodo de la vista que mostrara un mensaje para la eliminacion del plato
            this[VISTA].mostradoMensajeFormulariosConfirmacion(stringMensaje);
        } else {
            // Mostramos un mensaje de error si no hay ningun plato selecionado
            const stringError = "No has seleccionado ningun plato";
            // Llamada al metodo de la vista que mostrara el mensaje de error
            this[VISTA].mostradoMensajeFormulariosError(stringError);
        }
    };

    //* Metodo para la asignacion de un plato a un menu desde el formulario
    onManejadorFormularioAsignarPlatoMenu = (menusSelecionadoArray, platoSelecionadoArray) => {
        try {
            // Creamos un nuevo array para almacenar las categorias filtradas por nombre
            let arrayMenusFiltrado = [];
            // Creamos un nuevo array para almacenar las categorias filtradas por nombre
            let arrayPlatosFiltrado = [];
            // Si hemos seleccionado un menu
            if (menusSelecionadoArray.length > 0) {
                // Si hemos seleccionado plato
                if (platoSelecionadoArray.length > 0) {
                    //- Recorremos el array con los nombres de los menus
                    menusSelecionadoArray.forEach((menuNombre) => {
                        // Obtenemos el array de con los menus
                        let menusArray = [...this[MODELO].getMenu()];
                        // Filtramos los menus por el nombre del menu
                        let menuFiltrado = menusArray.filter(
                            (menu) => menu.menus.getName() == menuNombre
                        );
                        // Agregamos el menu filtrado a nuestro array
                        arrayMenusFiltrado.push(menuFiltrado[0]);
                    });

                    //- Recorremos el array con los nombres de los platos
                    platoSelecionadoArray.forEach((platoNombre) => {
                        let platosArray = [...this[MODELO].getDishes()];
                        // Filtramos los platos por el nombre del plato por parametors
                        let platoFiltrado = platosArray.filter(
                            (plato) => plato.platos.getName() == platoNombre
                        );
                        // Agregamos el menu filtrado a nuestro array
                        arrayPlatosFiltrado.push(platoFiltrado[0]);
                    });
                    //- Llamamos al metodo del modelo que asignara el plato al menu
                    this[MODELO].assignDishToMenu(...arrayMenusFiltrado, ...arrayPlatosFiltrado);
                    //- Creamos el mensaje para la asignacion exitosa
                    const stringMensaje = "Los platos se han asignado correctamente a los menus";
                    //- Llamada al metodo de la vista que mostrara un mensaje para la asignacion de platos
                    this[VISTA].mostradoMensajeFormulariosConfirmacion(stringMensaje);
                } else {
                    // Creamos un mensaje de error si no se ha  seleccionado ningun plato
                    let stringError = "El plato no puede estar sin seleccionar";
                    // Llamamos al metodo de la vista que mostrara el mensaje para el error de asignacion
                    this[VISTA].mostradoMensajeFormulariosError(stringError);
                }
            } else {
                // Creamos un mensaje de error si no se ha  seleccionado ningun menu
                let stringError = "El menu no puede estar sin seleccionar";
                // Llamamos al metodo de la vista que mostrara el mensaje para el error de asignacion
                this[VISTA].mostradoMensajeFormulariosError(stringError);
            }
        } catch (error) {
            // Creamos un mensaje de error para si el plato ya esta asignado al menu
            let stringError = error.message;
            // Llamamos al metodo de la vista que mostrara el mensaje para el error de asignacion
            this[VISTA].mostradoMensajeFormulariosError(stringError);
        }
    };

    //* Metodo para la desasignacion de un plato del menu desde el formularios
    onManejadorFormularioDesasignarPlatoMenu = (nombreMenuSelecionado, nombrePlatoSelecionado) => {
        // Comprobamos que el plato se ha seleccionado
        if (nombrePlatoSelecionado) {
            //- Obtenemos el array de con los menus
            let menusArray = [...this[MODELO].getMenu()];
            // Filtramos los menus por el nombre del menu
            let menuFiltrado = menusArray.filter(
                (menu) => menu.menus.getName() == nombreMenuSelecionado
            );
            //- Obtenemos el array de los platos
            let platosArray = [...this[MODELO].getDishes()];
            // Filtramos los platos por el nombre del plato por parametors
            let platoFiltrado = platosArray.filter(
                (plato) => plato.platos.getName() == nombrePlatoSelecionado
            );
            //- LLamamos al metodo del modelo que desasignara los platos
            this[MODELO].deassignDishToMenu(menuFiltrado[0], platoFiltrado[0]);
            //- Creamos el mensaje para la desasignacion exitosa
            const stringMensaje = "El plato se ha desasignado correctamente";
            //- Llamada al metodo de la vista que mostrara un mensaje para la asignacion de platos
            this[VISTA].mostradoMensajeFormulariosConfirmacion(stringMensaje);
        } else {
            // Creamos un mensaje de error para si el plato no esta seleccionado
            let stringError = "El plato tiene que estar seleccionado";
            // Llamamos al metodo de la vista que mostrara el mensaje para el error de asignacion
            this[VISTA].mostradoMensajeFormulariosError(stringError);
        }
    };

    //* Metodo para la ordenacior de los platos en el menu desde el formulario
    onManejadorFormularioOrdenarPlatoMenu = (
        nombreMenuSelecionado,
        nombrePlatoSelecionado1,
        nombrePlatoSelecionado2
    ) => {
        // Comprobamos si el plato 1 se ha seleccionado
        if (nombrePlatoSelecionado1) {
            // Comprobamos si el plato 2 se ha seleccionado
            if (nombrePlatoSelecionado2) {
                //- Obtenemos el array de con los menus
                let menusArray = [...this[MODELO].getMenu()];
                // Filtramos los menus por el nombre del menu
                let menuFiltrado = menusArray.filter(
                    (menu) => menu.menus.getName() == nombreMenuSelecionado
                );
                //- Obtenemos el array de los platos por el nombre del primer plato seleccionado
                let platosArray1 = [...this[MODELO].getDishes()];
                // Filtramos los platos por el nombre del plato por parametors
                let platoFiltrado1 = platosArray1.filter(
                    (plato) => plato.platos.getName() == nombrePlatoSelecionado1
                );
                //- Obtenemos el array de los platos por el nombre del segundo plato selecciionado
                let platosArray2 = [...this[MODELO].getDishes()];
                // Filtramos los platos por el nombre del plato por parametors
                let platoFiltrado2 = platosArray2.filter(
                    (plato) => plato.platos.getName() == nombrePlatoSelecionado2
                );

                //- Llamada al metodo del modelo que ordenara los platos
                this[MODELO].changeDishesPositionsInMenu(
                    menuFiltrado[0],
                    platoFiltrado1[0],
                    platoFiltrado2[0]
                );
                //- Creamos el mensaje para la asignacion exitosa
                const stringMensaje = "Los platos se han ordenado correctamente en el menu";
                //- Llamada al metodo de la vista que mostrara un mensaje para la asignacion de platos
                this[VISTA].mostradoMensajeFormulariosConfirmacion(stringMensaje);
            } else {
                // Creamos un mensaje de error para si el plato no esta seleccionado
                let stringError = "El plato2 tiene que estar seleccionado";
                // Llamamos al metodo de la vista que mostrara el mensaje para el error para si el plato no esta seleccionado
                this[VISTA].mostradoMensajeFormulariosError(stringError);
            }
        } else {
            // Creamos un mensaje de error para si el plato no esta seleccionado
            let stringError = "El plato1 tiene que estar seleccionado";
            // Llamamos al metodo de la vista que mostrara el mensaje para el error para si el plato no esta seleccionado
            this[VISTA].mostradoMensajeFormulariosError(stringError);
        }
    };

    //* Metodo para la creacion de las categorias desde el formulario
    onManejadorFormularioCrearCategoria = (
        nombreCategoria,
        descripcionCategoria,
        urlImagenCategoria
    ) => {
        try {
            //- Llamamos al metodo del modelo que nos creara la categoria
            let nuevaCategoria = this[MODELO].createCategory(
                nombreCategoria,
                descripcionCategoria,
                urlImagenCategoria
            );
            //- Llamada al metodo del modelo que nos agregara la nueva categoria
            this[MODELO].addCategory(nuevaCategoria);
            //- Creamos un mensaje de confirmacio para si la categoria fue creada correctamente
            let stringConfirmacion = "La categoria se ha creado correctamente";
            //- Llamamos al metodo de la vista que mostrara el mensaje de confirmacion
            this[VISTA].mostradoMensajeFormulariosConfirmacion(stringConfirmacion);
        } catch (error) {
            // Creamos un mensaje de error para si el nombre de la categoria esta vacio
            let stringError = error.message;
            // Llamamos al metodo de la vista que mostrara el mensaje
            this[VISTA].mostradoMensajeFormulariosError(stringError);
        }
    };

    //* Metodo para la eliminacion de las categorias desde el formulario
    onManejadorFormularioEliminarCategoria = (nombreCategoria) => {
        // Comprobamos si se ha pulsado alguna categoria
        if (nombreCategoria) {
            // Obtenemos el array de categorias
            let arrayCategorias = [...this[MODELO].getCategories()];
            // Filtrar las categorias por el nombre de las categorias
            let categoriaFiltrado = arrayCategorias.filter(
                (categoria) => categoria.categoria.getName() == nombreCategoria
            );
            // Llamamos al metodo del modelo para la eliminacion de la categoria
            this[MODELO].removeCategory(categoriaFiltrado[0]);
            // Creamos un mensaje de confirmacio para si la categoria fue eliminada correctamente
            let stringConfirmacion = "La categoria se ha eliminado correctamente";
            // Llamamos al metodo de la vista que mostrara el mensaje de confirmacion
            this[VISTA].mostradoMensajeFormulariosConfirmacion(stringConfirmacion);
        } else {
            // Creamos un mensaje de error para si el nombre de la categoria esta vacio
            let stringError = "Selecciona la categoria que desea eliminar";
            // Llamamos al metodo de la vista que mostrara el mensaje
            this[VISTA].mostradoMensajeFormulariosError(stringError);
        }
    };

    //* Metodo para la creacion del restaurante desde el formulario
    onManejadorFormularioCrearRestaurante = (
        nombreRestaurante,
        descripcionRestaurante,
        latitudRestaurante,
        longitudRestaurante
    ) => {
        try {
            //- Validamos la latitud y la longitud para que esten en los rangos permitidos
            validarLatitud(latitudRestaurante);
            validarLongitud(longitudRestaurante);
            //- Creamos un objeto coordenadas para las coordenadas del restaurante
            let coordenadas = new Coordinate(latitudRestaurante, longitudRestaurante);
            //- Llamamos al metodo del modelo que nos creara el restaurante
            let nuevoRestaurante = this[MODELO].createRestaurant(
                nombreRestaurante,
                descripcionRestaurante,
                coordenadas
            );
            //- Llamada al metodo del modelo que nos agregara el restaurante
            this[MODELO].addRestaurant(nuevoRestaurante);
            //- Creamos un mensaje de confirmacio para si el restaurante fue creado correctamente
            let stringConfirmacion = "El restaurante se ha creado correctamente";
            //- Llamamos al metodo de la vista que mostrara el mensaje de confirmacion
            this[VISTA].mostradoMensajeFormulariosConfirmacion(stringConfirmacion);

            //- Obtenemos los restaurantes del modelo para actualizar la barra de navegacion
            let arrayRestaurantes = [...this[MODELO].getRestaurant()];
            //- Llamamos al metodo de la vista que nos actualizara la barra de navegacion
            this[VISTA].actualizadoBarraNavegacionCreacionRestaurante(arrayRestaurantes);
            //- Llamada al manejador del boton de restaurantes de la vista pasandole el manejador
            this[VISTA].manejadorRestauranteDescripcion(this.manejadorRestauranteDescripcion);
            //- Llamada al manejador del boton de gestion de la vista a la que le pasaremos el manejador
            this[VISTA].manejadorSelectBarraNavegacionGestion(
                this.manejadorSelectBarraNavegacionGestion
            );
        } catch (error) {
            // Creamos un mensaje de error para si el nombre del restaurante esta vacio
            let stringError = error.message;
            // Llamamos al metodo de la vista que mostrara el mensaje
            this[VISTA].mostradoMensajeFormulariosError(stringError);
        }
    };

    //* Metodo para la asignacion de platos a las categorias desde el formulario
    onManejadorFormularioAsignarPlatoCategorias = (arrayCategoriasNombre, arrayPlatosNombre) => {
        // Creamos un nuevo array para almacenar las categorias filtradas por nombre
        let arrayCategoriasFiltrado = [];
        // Creamos un nuevo array para almacenar los platos filtrados por nombre
        let arrayPlatosFiltrado = [];
        try {
            // Comprobamos si se ha seleccionado una categoria
            if (arrayCategoriasNombre.length > 0) {
                // Comprobamos que se ha seleccionado un plato
                if (arrayPlatosNombre.length > 0) {
                    //- Recorremos el array con los nombres de las categorias
                    arrayCategoriasNombre.forEach((categoriaNombre) => {
                        // Obtenemos el array de con las categorias
                        let categoriasArray = [...this[MODELO].getCategories()];
                        // Filtramos las categorias por el nombre de categoria
                        let categoriaFiltrado = categoriasArray.filter(
                            (categoria) => categoria.categoria.getName() == categoriaNombre
                        );
                        // Agregamos la categoria filtrada a nuestro array
                        arrayCategoriasFiltrado.push(categoriaFiltrado[0]);
                    });

                    //- Recorremos el array con los nombres de los platos
                    arrayPlatosNombre.forEach((platoNombre) => {
                        let platosArray = [...this[MODELO].getDishes()];
                        // Filtramos los platos por el nombre del plato por parametors
                        let platoFiltrado = platosArray.filter(
                            (plato) => plato.platos.getName() == platoNombre
                        );
                        // Agregamos el menu filtrado a nuestro array
                        arrayPlatosFiltrado.push(platoFiltrado[0]);
                    });
                    // Llamamos al metodo del modelo que asignara los platos a las categorias
                    this[MODELO].assignCategoryToDish(
                        ...arrayCategoriasFiltrado,
                        ...arrayPlatosFiltrado
                    );

                    //- Creamos un mensaje de confirmacio para si el plato fue asignado correctamente
                    let stringConfirmacion = "El plato se ha asignado a la categoria correctamente";
                    //- Llamamos al metodo de la vista que mostrara el mensaje de confirmacion
                    this[VISTA].mostradoMensajeFormulariosConfirmacion(stringConfirmacion);
                } else {
                    // Creamos un mensaje de error para si el nombre del plato no esta seleccionado
                    let stringError = "El plato no puede estar sin seleccionar";
                    // Llamamos al metodo de la vista que mostrara el mensaje
                    this[VISTA].mostradoMensajeFormulariosError(stringError);
                }
            } else {
                // Creamos un mensaje de error para si el nombre de la categoria no esta seleccionado
                let stringError = "La categoria no puede estar sin seleccionar";
                // Llamamos al metodo de la vista que mostrara el mensaje
                this[VISTA].mostradoMensajeFormulariosError(stringError);
            }
        } catch (error) {
            // Creamos un mensaje de error para si la categoria ya tiene el plato asignado
            let stringError = error.message;
            // Llamamos al metodo de la vista que mostrara el mensaje
            this[VISTA].mostradoMensajeFormulariosError(stringError);
        }
    };
    //* Metodo para la desasignacion de platos a las categorias desde el formulario
    onManejadorFormularioDesasignarPlatoCategorias = (categoriaNombre, platoNombre) => {
        // Comprobamos que el plato se ha seleccionado
        if (platoNombre) {
            //- Obtenemos el array de con las categorias
            // Obtenemos el array de con las categorias
            let categoriasArray = [...this[MODELO].getCategories()];
            // Filtramos las categorias por el nombre de categoria
            let categoriaFiltrado = categoriasArray.filter(
                (categoria) => categoria.categoria.getName() == categoriaNombre
            );
            //- Obtenemos el array de los platos
            let platosArray = [...this[MODELO].getDishes()];
            // Filtramos los platos por el nombre del plato por parametors
            let platoFiltrado = platosArray.filter(
                (plato) => plato.platos.getName() == platoNombre
            );
            //- LLamamos al metodo del modelo que desasignara los platos de las categorias
            this[MODELO].deassignCategoryToDish(categoriaFiltrado[0], platoFiltrado[0]);

            //- Creamos el mensaje para la desasignacion exitosa
            const stringMensaje = "El plato se ha desasignado correctamente";
            //- Llamada al metodo de la vista que mostrara un mensaje para la asignacion de platos
            this[VISTA].mostradoMensajeFormulariosConfirmacion(stringMensaje);
        } else {
            // Creamos un mensaje de error para si el plato no esta seleccionado
            let stringError = "El plato tiene que estar seleccionado";
            // Llamamos al metodo de la vista que mostrara el mensaje para el error de asignacion
            this[VISTA].mostradoMensajeFormulariosError(stringError);
        }
    };

    //?/////////////////////MANEJADORES DE EVENTOS///////////////////////
    //* Manejador para el boton de inicio en la barra de navegacion
    manejadorInicio = () => {
        // Llamamos al metodo de esta clase on inicio
        this.onInicio();
    };

    //* Manejador del boton de la categoria en la barra de navegacion
    manejadorCategoria = () => {
        // Llamamos al metodo de esta clase on categoria
        this.onCategorias();
    };

    //* Manejador del boton del alergeno en la barra de navegacion
    manejadorAlergenos = () => {
        // Llamamos al metodo de esta clase on alergeno
        this.onAlergenos();
    };

    //* Manejador del boton del menu en la barra de navegacion
    manejadorMenus = () => {
        // Llamamos al metodo de esta clase on menus
        this.onMenus();
    };

    //* Manejador del boton de los platos en la barra de navegacion
    manejadorPlatos = () => {
        // Llamamos al metodo de esta clase on platos
        this.onPlatos();
    };

    //?///////MANEJADORES DE EVENTOS PARA ELEMENTOS GENERADOS///////////
    //* Manejador del boton de restaurantes que muestra la descripcion
    manejadorRestauranteDescripcion = (restauranteNombre) => {
        // Llamamos al metodo de esta clase on restaurante descripcion
        this.onRestauranteDescripcion(restauranteNombre);
    };

    //* Manejador del boton de restaurantes de la barra lateral que muestra la descripcion
    manejadorRestauranteDescripcionLateral = (restauranteNombre) => {
        // Llamamos al metodo de esta clase on restaurante descripcion
        this.onRestauranteDescripcion(restauranteNombre);
    };

    //* Manejador para el mostrado de los platos de una categoria
    manejadorCategoriasPlatosInicio = (categoriaNombre) => {
        // Llamamos al metodo de esta clase on categorias platos
        this.onCategoriasPlatos(categoriaNombre);
    };

    //* Manejador para el mostrado de los platos de una categoria
    manejadorCategoriasPlatosLateral = (categoriaNombre) => {
        // Llamamos al metodo de esta clase on categorias platos
        this.onCategoriasPlatos(categoriaNombre);
    };

    //* Manejador para el mostrado de los platos de una categoria
    manejadorCategoriasPlatosMenu = (categoriaNombre) => {
        // Llamamos al metodo de esta clase on  categorias platos
        this.onCategoriasPlatos(categoriaNombre);
    };

    //* Manejador para el mostrado de loa descripcion del plato
    manejadorPlatosDescripcion = (platoNombre) => {
        // Llamamos al metodo de esta clase on descripcion platos
        this.onDescripcionPlatos(platoNombre);
    };

    //* Manejador para el mostrado de loa descripcion del plato desde el lateral
    manejadorPlatosDescripcionLateral = (platoNombre) => {
        // Llamamos al metodo de esta clase on descripcion platos
        this.onDescripcionPlatos(platoNombre);
    };

    //* Manejador para el mostrado de los platos que tiene un alergeno
    manejadorAlergenosPlatos = (alergenoNombre) => {
        // Llamamos al metodo de esta clase on alergenos platos
        this.onAlergenosPlatos(alergenoNombre);
    };

    //* Manejador para el mostrado de los platos que tiene un menu
    manejadorMenusPlatos = (menuNombre) => {
        // Llamamos al metodo de esta clase on menu motrar platos
        this.onMenuMostrarPlatos(menuNombre);
    };

    //* Manejador para el mostrado de los platos que tiene un alergeno
    manejadorAlergenosPlatosDescripcion = (platoNombre) => {
        // Llamamos al metodo de esta clase on menu motrar platos
        this.onDescripcionPlatos(platoNombre);
    };

    //* Manejador para el mostrado los platos que tiene un alergeno desde el lateral
    manejadorAlegenosPlatosLateral = (alergenoNombre) => {
        // Llamamos al metodo de esta clase on menu motrar platos
        this.onAlergenosPlatos(alergenoNombre);
    };

    //* Manejador para el mostrado de los platos que tiene un menu desde la barra lateral
    manejadorMenusPlatosLateral = (menuNombre) => {
        // Llamamos al metodo de esta clase on menu motrar platos
        this.onMenuMostrarPlatos(menuNombre);
    };

    //!//////////////////////////////////////////////////////////////////
    //?//////////MANEJADORES DE EVENTOS PARA FORMULARIOS/////////////////
    //* Manejador para la seleccion de laj opcion de los formularios desde la barra de navegacion
    manejadorSelectBarraNavegacionGestion = (opcionSeleccionada) => {
        // Llamamos al metodo se la misma clase que nos mostrara los formularios
        this.onFormulariosGestion(opcionSeleccionada);
    };

    //* Manejador para la seleccion de la opcion de los formularios desde la barra lateral
    manejadorFormularoiosGestionLateral = (opcionSeleccionada) => {
        // Llamamos al metodo se la misma clase que nos mostrara los formularios
        this.onFormulariosGestion(opcionSeleccionada);
    };

    //* Manejador que nos mostrara los platos que tiene el menu para la desasignacion
    manejadorFormularioMostrarPlatosMenuDesasignacion = (menuSeleccionado) => {
        // Llamamos al metodo de la misma clase que nos mostrara los platos a desasignar del menu
        this.onManejadorFormularioMostrarPlatosMenuDesasignacion(menuSeleccionado);
        // LLamamos al manejador de la vista para la desasignacion de los platos al menu
        this[VISTA].manejadorFormularioDesasignarPlatoMenu(
            this.manejadorFormularioDesasignarPlatoMenu
        );
    };

    //* Manejador que nos mostrara los platos que tiene el menu para su organizacion
    manejadorFormularioMostrarPlatosMenuOrdenacion = (menuSeleccionado) => {
        // Llamamos al metodo de la misma clase que nos mostrara los platos a organizar
        this.onManejadorFormularioMostrarPlatosMenuOrdenacion(menuSeleccionado);
        // Llamamos al manejador de la vista para la ordenacion de platos
        this[VISTA].manejadorFormularioOrdenarPlatoMenu(this.manejadorFormularioOrdenarPlatoMenu);
    };

    //* Manejador que nos mostrara los platos que tiene una categoria para desasignarlos
    manejadorFormularioMostrarPlatosCategoriaDesasignado = (categoriaSeleccionada) => {
        // Llamamamos al metodo de la misma clase que nos mostrara los platos a desasignar por categoria
        this.onManejadorFormularioMostrarPlatosCategoriaDesasignado(categoriaSeleccionada);
    };

    //* Manejador para la creacion del plato desde el formulario
    manejadorFormularioCrearPlato = (
        nombre,
        urlImagen,
        descripcion,
        ingredientesArray,
        categoriasArray,
        alergenosArray
    ) => {
        // LLamamos al metodo de la misma clase que creara el plato y asignara las categorias y alergenos
        this.onManejadorFormularioCrearPlato(
            nombre,
            urlImagen,
            descripcion,
            ingredientesArray,
            categoriasArray,
            alergenosArray
        );
    };

    //* Manejador que eliminara el plato desde el formulario
    manejadorFormularioCrearEliminarPlato = (nombreplatoSeleccionado) => {
        // Llamamamos al metodo de la misma clase que eliminara el plato
        this.onManejadorFormularioCrearEliminarPlato(nombreplatoSeleccionado);
    };

    //* Manejador que asignara el plato al menu desde el formulario
    manejadorFormularioAsignarPlatoMenu = (nombreMenuSelecionado, nombrePlatoSelecionado) => {
        // Llamamamos al metodo de la misma clase que asignara el plato al menu
        this.onManejadorFormularioAsignarPlatoMenu(nombreMenuSelecionado, nombrePlatoSelecionado);
    };

    //* Manejador que desasigna el plato al menu desde el formulario
    manejadorFormularioDesasignarPlatoMenu = (nombreMenuSelecionado, nombrePlatoSelecionado) => {
        // Llamamamos al metodo de la misma clase que desasignara el plato del menu
        this.onManejadorFormularioDesasignarPlatoMenu(
            nombreMenuSelecionado,
            nombrePlatoSelecionado
        );
    };

    //* Manejador que ordenar los platos al menu desde el formulario
    manejadorFormularioOrdenarPlatoMenu = (
        nombreMenuSelecionado,
        nombrePlatoSelecionado1,
        nombrePlatoSelecionado2
    ) => {
        // Llamamamos al metodo de la misma clase que ordenara los platos del menu
        this.onManejadorFormularioOrdenarPlatoMenu(
            nombreMenuSelecionado,
            nombrePlatoSelecionado1,
            nombrePlatoSelecionado2
        );
    };

    //* Manejador que crea las categorias desde el formulario
    manejadorFormularioCrearCategoria = (
        nombreCategoria,
        descripcionCategoria,
        urlImagenCategoria
    ) => {
        // Llamamamos al metodo de la misma clase que creara la categoris
        this.onManejadorFormularioCrearCategoria(
            nombreCategoria,
            descripcionCategoria,
            urlImagenCategoria
        );
    };

    //* Manejador que eliminara la categoria desde el formulario
    manejadorFormularioEliminarCategoria = (nombreCategoria) => {
        // Llamamamos al metodo de la misma clase que eliminara la categoria
        this.onManejadorFormularioEliminarCategoria(nombreCategoria);
    };

    //* Manejador que creara el restaurante desde el formulario
    manejadorFormularioCrearRestaurante = (
        nombreRestaurante,
        descripcionRestaurante,
        latitudRestaurante,
        longitudRestaurante
    ) => {
        // Llamamamos al metodo de la misma clase que creara un restaurante
        this.onManejadorFormularioCrearRestaurante(
            nombreRestaurante,
            descripcionRestaurante,
            latitudRestaurante,
            longitudRestaurante
        );
    };

    //* Manejador que asignara los platos a las categorias
    manejadorFormularioAsignarPlatoCategorias = (arrayCategoriasNombre, arrayPlatosNombre) => {
        // Llamamamos al metodo de la misma clase que asignara los platos a las categorias
        this.onManejadorFormularioAsignarPlatoCategorias(arrayCategoriasNombre, arrayPlatosNombre);
    };

    //* Manejador que desasignara los platos a las categorias
    manejadorFormularioDesasignarPlatoCategorias = (categoriasNombre, platosNombre) => {
        // Llamamamos al metodo de la misma clase que desasignara los platos a las categorias
        this.onManejadorFormularioDesasignarPlatoCategorias(categoriasNombre, platosNombre);
    };
}

//?////////////////////////////EXPORTACIONES/////////////////////////////
export { RestauranteControlador };
