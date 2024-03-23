//!/////////////////////CLASE RESTAURANTECONTROLADOR/////////////////////
"use strict";

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
    }

    //?//////////////METODOS PARA LOS EVENTOS DEL USUARIO////////////////
    //* Metodo que llama al metodo de carga de la vista
    onCarga = () => {
        // Obtenemos los datos del modelo
        const categorias = this[MODELO].getCategories();
        const platos = this[MODELO].getDishes();
        const restaurantes = this[MODELO].getRestaurant();
        // Llama al metodo de inicio de la vista con argumento los iteradores
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
    };

    //* Metodo que llama al metodo de mostradoMenus de la vista
    onMenus = () => {
        // Obtenemos los datos del modelo
        const menus = this[MODELO].getMenu();
        // LLama al metodo de mostrado de menus con argumento el iterator
        this[VISTA].menus(menus);
        // Llamamos al manejador que mostrara los platos que contiene un menu
        this[VISTA].manejadorMenusPlatos(this.manejadorMenusPlatos);
    };

    //* Metodo que llama al metodo de mostradoPlatos de la vista
    onPlatos = () => {
        // Obtenemos los datos del modelo
        const platos = this[MODELO].getDishes();
        // LLama al metodo de mostrado de platos con argumento el iterator
        this[VISTA].platos(platos);
        // Llamada al manejador del boton de categorias platos de la vista pasandole el manejador
        this[VISTA].manejadorPlatosDescripcion(this.manejadorPlatosDescripcion);
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
            this[VISTA].restauranteDescripcion(restaurantesFiltrados);
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
            this[VISTA].restauranteDescripcion(restaurantesFiltrados);
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
        }
    };

    //* Metodo que muestra los platos que contiene un menu
    onMenuMostrarPlatos = (menuNombre) => {
        if (menuNombre) {
            // Obtenemos el array de con los menus
            let menusArray = [...this[MODELO].getMenu()];
            // Filtramos los menus por el nombre del menu
            let menuFiltrado = menusArray.filter((menu) => menu.menus.getName() == menuNombre);
            // Llamada al metodo de la vista que muestra los platos del menu
            this[VISTA].menuMostrarPlatos(menuFiltrado[0]);
        } else {
            // Verificamos si hay un estado en el historial y si contiene el alergeno
            let menuSeleccionado = history.state.menuSeleccionado;
            // Obtenemos el array de con los menus
            let menusArray = [...this[MODELO].getMenu()];
            // Filtramos los menus por el nombre del menu
            let menuFiltrado = menusArray.filter(
                (menu) => menu.menus.getName() == menuSeleccionado
            );
            // Llamada al metodo de la vista que muestra los platos del menu
            this[VISTA].menuMostrarPlatos(menuFiltrado[0]);
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
}

//?////////////////////////////EXPORTACIONES/////////////////////////////
export { RestauranteControlador };
