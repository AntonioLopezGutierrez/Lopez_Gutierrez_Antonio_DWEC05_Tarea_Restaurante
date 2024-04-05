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
                    break;
                case "Eliminar plato":
                    // Llamada al metodo de la vista para  mostrar el formulario de eliminar plato
                    this[VISTA].eliminarPlato(platos);
                    // LLamamos al manejador para obtener los datos del formulario para eliminar platos
                    this[VISTA].manejadorFormularioCrearEliminarPlato(
                        this.manejadorFormularioCrearEliminarPlato
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
                    break;
                case "Administrar Categorias":
                    // Llamada al metodo de la vista para mosrtrar los formularios para administrar las categorias
                    this[VISTA].administrarCategorias(categorias);
                    break;
                case "Crear restaurante":
                    // Llamada al metodo de la vista para mostrar el formulario para crear un restaurante
                    this[VISTA].nuevoRestaurante();
                    break;
                case "Categorias Platos":
                    // LLamada al metodo de la vista para mostrar rl formulario para modificar los platos de la categoria
                    this[VISTA].categoriasPlatosAsignado(platos, categorias);
                    // LLamamos al manejador para obtener los platos de las categorias a dessignar
                    this[VISTA].manejadorFormularioMostrarPlatosCategoriaDesasignado(
                        this.manejadorFormularioMostrarPlatosCategoriaDesasignado
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
                    break;
                case "Eliminar plato":
                    // Llamada al metodo de la vista para  mostrar el formulario de eliminar plato
                    this[VISTA].eliminarPlato(platos);
                    // LLamamos al manejador para obtener los datos del formulario para eliminar platos
                    this[VISTA].manejadorFormularioCrearEliminarPlato(
                        this.manejadorFormularioCrearEliminarPlato
                    );
                    break;
                case "Administrar Platos":
                    // LLamada al metodo de la vista para mostrar los formularios para administrar platos en los menus
                    this[VISTA].administrarPlatos(menus);
                    // LLamamos al manejador para obtener el menu y mostrar los platos para la desasignacion
                    this[VISTA].manejadorFormularioMostrarPlatosMenuDesasignacion(
                        this.manejadorFormularioMostrarPlatosMenuDesasignacion
                    );
                    // LLamamos al manejador para obtener el menu y mostrar los platos para la ordenacion
                    this[VISTA].manejadorFormularioMostrarPlatosMenuOrdenacion(
                        this.manejadorFormularioMostrarPlatosMenuOrdenacion
                    );
                    break;
                case "Administrar Categorias":
                    // Llamada al metodo de la vista para mosrtrar los formularios para administrar las categorias
                    this[VISTA].administrarCategorias(categorias);
                    break;
                case "Crear restaurante":
                    // Llamada al metodo de la vista para mostrar el formulario para crear un restaurante
                    this[VISTA].nuevoRestaurante();
                    break;
                case "Categorias Platos":
                    // LLamada al metodo de la vista para mostrar rl formulario para modificar los platos de la categoria
                    this[VISTA].categoriasPlatosAsignado(platos, categorias);
                    // LLamamos al manejador para obtener los platos de las categorias a dessignar
                    this[VISTA].manejadorFormularioMostrarPlatosCategoriaDesasignado(
                        this.manejadorFormularioMostrarPlatosCategoriaDesasignado
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

    //* Metodo para el mostrado de platos segun el menu seleccionado para la desasignacion
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
            if (categoriasArray) {
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
            if (alergenosArray) {
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
    onManejadorFormularioCrearEliminarPlato = (NombreplatoSeleccionado) => {
        // Obtenemos el array de platos
        let platosArray = [...this[MODELO].getDishes()];
        // Filtramos los platos por el nombre del plato por parametors
        let platoFiltrado = platosArray.filter(
            (plato) => plato.platos.getName() == NombreplatoSeleccionado
        );
        // LLamamos al metodo del modelo para la eliminacion de platos
        this[MODELO].removeDish(platoFiltrado[0]);
        // Creamos el mensaje para la eliminacion ha sido exitosa
        const stringMensaje = "El plato se a eliminado correctamente";
        // Llamada al metodo de la vista que mostrara un mensaje para la eliminacion del plato
        this[VISTA].mostradoMensajeFormulariosConfirmacion(stringMensaje);
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

    //* Manejador que nos mostrara los platos que tiene el menu para la desasignacion
    manejadorFormularioMostrarPlatosMenuDesasignacion = (menuSeleccionado) => {
        // Llamamos al metodo de la misma clase que nos mostrara los platos a desasignar del menu
        this.onManejadorFormularioMostrarPlatosMenuDesasignacion(menuSeleccionado);
    };

    //* Manejador que nos mostrara los platos que tiene el menu para su organizacion
    manejadorFormularioMostrarPlatosMenuOrdenacion = (menuSeleccionado) => {
        // Llamamos al metodo de la misma clase que nos mostrara los platos a organizar
        this.onManejadorFormularioMostrarPlatosMenuOrdenacion(menuSeleccionado);
    };

    //* Manejador que nos mostrara los platos que tiene una categoria para desasignarlos
    manejadorFormularioMostrarPlatosCategoriaDesasignado = (categoriaSeleccionada) => {
        // Llamamaos al metodo de la misma clase que nos mostrara los platos a desasignar por categoria
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
    manejadorFormularioCrearEliminarPlato = (NombreplatoSeleccionado) => {
        // Llamamaos al metodo de la misma clase que eliminara el plato
        this.onManejadorFormularioCrearEliminarPlato(NombreplatoSeleccionado);
    };
}

//?////////////////////////////EXPORTACIONES/////////////////////////////
export { RestauranteControlador };
