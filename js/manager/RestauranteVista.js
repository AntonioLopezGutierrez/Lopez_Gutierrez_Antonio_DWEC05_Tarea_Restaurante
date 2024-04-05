//!//////////////////////////CLASE RESTAURANTEVISTA//////////////////////
"use strict";
//?////////////////////IMPORTACIONES DE LA CLASE////////////////////////
//* Importacion de los elementos principales de la pagina
import {
    alergenosPlatos,
    barraNavegacion,
    descripcionPlatos,
    mostradoAlergenos,
    mostradoCategoriasInicio,
    mostradoCategoriasMenu,
    mostradoMenuLateral,
    mostradoMenuLateralAlergeos,
    mostradoMenuLateralMenu,
    mostradoMenuLateralPlatos,
    mostradoMenuLateralRestaurantes,
    mostradoMenus,
    mostradoPlatos,
    mostradosPlatosRandom,
    restauranteDescripcion,
} from "./elementosPaginaPrincipal.js";

//* Importacion de los elementos para los formularios
import {
    administrarCategorias,
    administrarPlatos,
    categoriasPlatosAsignado,
    eliminarPlato,
    mostradoFomulariosMenuLateral,
    mostradoMensajeFormulariosConfirmacion,
    mostradoMensajeFormulariosError,
    mostrarPlatosMenuDesasignacion,
    mostrarPlatosMenuOrdenacion,
    nuevoPlato,
    nuevoRestaurante,
    platosCategoriasDesasignado,
} from "./formularios.js";

//?//////////////////////////DECLARACION DE LA CLASE/////////////////////
class RestauranteVista {
    //?//////////////////////CONSTRUCTOR DE LA CLASE/////////////////////
    //?//////////////////////////////////////////////////////////////////
    // En el constructor obtendremos los elementos del DOM
    constructor() {
        //* Obtención de elementos existentes del DOM
        // Obtencion de la barra de nabegacion con las opciones
        this.barraNavegacion = document.getElementById("header--nav");
        // Obtencion de la zona del main-contenido para mostrar el contenido
        this.mainContenido = document.getElementById("main--contenido");
        // Obtencion del menu lateral para mostrado de opciones
        this.mainContenidoListado = document.getElementById("main--listado");
        // Obtencion del elemento aside para el mostrado de los palatos
        this.aside = document.getElementById("aside");
        // Propiedad en la que almacenaremos las migas de pan
        this.migaDePanActual = "Estamos en la pagina: Inicio";
    }

    //?//////////METODO PRIVADOS DE LA CLASE MOSTRADO DE LA CLASE////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo para actualizar las migas de pan
    #actualizarMigasPan(texto) {
        // Obtenemos el elemento de las migas de pan
        let elementoMigasPan = document.querySelector(".elementoMigasPanBarraNavegacion");
        // Actualizamos la migas de pan con el texto introducido
        elementoMigasPan.innerText = texto;
    }

    //?////////////////METODOS QUE LLAMA CONTROLADOR////////////////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo que se carga justo al cargar la pagina
    carga(categorias, platos, restaurantes) {
        // Llamada a la funcion de elementos pagina principal que mostrara la barra de navegacion
        barraNavegacion(this.barraNavegacion, this.migaDePanActual, restaurantes);
        // Llamada a la funcion de elementos pagina principal que mostrara las categorias en el lateral
        mostradoMenuLateral(this.mainContenidoListado, categorias);
        // Llamada a la funcion de elementos pagina principal que mostrara las categorias al inicio
        mostradoCategoriasInicio(this.mainContenido, categorias);
        // Llamada a la funcion de elementos pagina principal que mostrara las platos random
        mostradosPlatosRandom(this.aside, platos);
    }

    //* Metodo para el mostrado cuando pulsamos el boton de inicio
    inicio(categorias, platos, restaurantes) {
        // Llamada a la funcion de elementos pagina principal que mostrara la barra de navegacion
        barraNavegacion(this.barraNavegacion, this.migaDePanActual, restaurantes);
        // Llamada a la funcion de elementos pagina principal que mostrara las categorias en el lateral
        mostradoMenuLateral(this.mainContenidoListado, categorias);
        // Llamada a la funcion de elementos pagina principal que mostrara las categorias al inicio
        mostradoCategoriasInicio(this.mainContenido, categorias);
        // Llamada a la funcion de elementos pagina principal que mostrara las platos random
        mostradosPlatosRandom(this.aside, platos);
    }

    //* Metodo que mostrara las categorias
    categorias(categorias) {
        // Llamada a la funcion de elementos pagina principal que mostrara las categorias
        mostradoCategoriasMenu(this.mainContenido, categorias);
        // Llamada a la funcion de elementos pagina principal que mostrara las categorias en el lateral
        mostradoMenuLateral(this.mainContenidoListado, categorias);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Categorias");
    }

    //* Metodo que mostrara los alergenos
    alergenos(alergenos) {
        // Llamada a la funcion de elementos pagina principal que mostrara los alergenos
        mostradoAlergenos(this.mainContenido, alergenos);
        // Llamada a la funcion de elementos pagina principal que mostrara los alergenos desde la barra lateral
        mostradoMenuLateralAlergeos(this.mainContenidoListado, alergenos);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Alergenos");
    }

    //* Metodo para el mostrado del los menus
    menus(menus) {
        // Llamada a la funcion de elementos pagina principal que mostrara los menus
        mostradoMenus(this.mainContenido, menus);
        // Llamada a la funcion de elementos pagina principal que mostrara los menus desde la barra lateral
        mostradoMenuLateralMenu(this.mainContenidoListado, menus);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Menus");
    }

    //* Metodo para para el mostrado de platos
    platos(platos) {
        // Llamada a la funcion de elementos pagina principal que mostrara los platos
        mostradoPlatos(this.mainContenido, platos);
        // Llamada a la funcion de elementos pagina principal que mostrara los platos desde el menu lateral
        mostradoMenuLateralPlatos(this.mainContenidoListado, platos);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Platos");
    }

    //?//////METODOS QUE LLAMA CONTROLADOR DE ELEMENTOS DINAMICOS////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo que nos mostrara la descripcion de los restaurantes
    restauranteDescripcion(restaurante, restaurantes) {
        // Llamada a la funcion de elementos pagina principal que mostrara la descripcio del restaurante
        restauranteDescripcion(this.mainContenido, restaurante);
        // Llamada a la funcion que mostrara los restaurantes en la barra lateral
        mostradoMenuLateralRestaurantes(this.mainContenidoListado, restaurantes);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: DescripcionRestaurante");
    }

    //* Metodo que muestra los platos que tiene una categoria
    categoriasPlatos(platosCategorias) {
        // Llamada a la funcion de elementos pagina principal que mostrara los platos
        mostradoPlatos(this.mainContenido, platosCategorias);
        // Llamada a la funcion de elementos pagina principal que mostrara los platos desde el menu lateral
        mostradoMenuLateralPlatos(this.mainContenidoListado, platosCategorias);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: CategoriasPlatos");
    }

    //* Metodo que muestra la descripcion de un plato selecionado
    descripcionPlatos(plato) {
        // Llamada a la funcion de elementos pagina principal que mostrara la descripcion de los plato
        descripcionPlatos(this.mainContenido, plato);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: DescripcionPlatos");
    }

    //* Metodo que muestra los platos que contiene el alergeno
    alergenosPlatos(platos) {
        // Llamada al metodo para mostrar el plato que tiene el alergeno
        alergenosPlatos(this.mainContenido, platos);
        // Llamada a la funcion de elementos pagina principal que mostrara los platos desde el menu lateral
        mostradoMenuLateralPlatos(this.mainContenidoListado, platos);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: AlergenosPlatos");
    }

    //* Metodo que nos mostrara los platos que contiene un menu
    menuMostrarPlatos(platos) {
        // Llamada a la funcion de elementos pagina principal que mostrara los platos
        mostradoPlatos(this.mainContenido, platos);
        // Llamada a la funcion de elementos pagina principal que mostrara los platos desde el menu lateral
        mostradoMenuLateralPlatos(this.mainContenidoListado, platos);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: MenuMostrarPlatos");
    }

    //!//////////////////////////////////////////////////////////////////
    //?//METODOS QUE LLAMA EL CONTROLADOR PARA ELEMENTOS DEL FORMULARIO//
    //?//////////////////////////////////////////////////////////////////
    //* Metodo que nos mostrara un formulario para crear los platos
    nuevoPlato(categorias, alergenos) {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // Llamada a la funcion de los formularios para crear un plato
        nuevoPlato(this.mainContenido, categorias, alergenos);
        // Llamada a la funcion que nos mostrara los formularios del menu lateral
        mostradoFomulariosMenuLateral(this.mainContenidoListado);
    }

    //* Metodo que nos mostrara un formulario para eliminar los platos
    eliminarPlato(platos) {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // Llamada a la funcion de los formularios para eliminar plato
        eliminarPlato(this.mainContenido, platos);
        // Llamada a la funcion que nos mostrara los formularios del menu lateral
        mostradoFomulariosMenuLateral(this.mainContenidoListado);
    }

    //* Metodo que nos mostrara un formulario para la edicion de los platos al menu
    administrarPlatos(menus, platos) {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // LLamada a la funcion de los formularios para la gestion de los platos
        administrarPlatos(this.mainContenido, menus, platos);
        // Llamada a la funcion que nos mostrara los formularios del menu lateral
        mostradoFomulariosMenuLateral(this.mainContenidoListado);
    }

    //* Metodo que nos mostrara los platos que tiene un menu para la desasignacion
    menuMostrarPlatosDesasignacion(arrayPlatosMenu) {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // Llamada a la funcion de los fromularios que nos mostrara los platos de los menus
        mostrarPlatosMenuDesasignacion(arrayPlatosMenu);
    }

    //* Metodo que nos mostrara los platos que tiene el menu para su ordenacion
    menuMostrarPlatosOrdenacion(arrayPlatosMenu) {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // Llamada a la funcion de los formularios para el mostrado de los platos del menu
        mostrarPlatosMenuOrdenacion(arrayPlatosMenu);
    }

    //* Metodo que nos mostrara un formulario para la edicion de las categorias
    administrarCategorias(categorias) {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // Llamada a la funcion de los formularios para administrar las categorias
        administrarCategorias(this.mainContenido, categorias);
        // Llamada a la funcion que nos mostrara los formularios del menu lateral
        mostradoFomulariosMenuLateral(this.mainContenidoListado);
    }

    //* Metodo que nos mostrara un formulario para la creacion de un restaurante
    nuevoRestaurante() {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // Llamada a la funcion de los formularios para crear un nuevo restaurante
        nuevoRestaurante(this.mainContenido);
        // Llamada a la funcion que nos mostrara los formularios del menu lateral
        mostradoFomulariosMenuLateral(this.mainContenidoListado);
    }

    //* Metodo que nos mostrara un formulario para modificar los platos de la categoria
    categoriasPlatosAsignado(platos, categorias) {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // LLamada a la funcion de los formularios para modificar los platos de la categoria
        categoriasPlatosAsignado(this.mainContenido, platos, categorias);
        // Llamada a la funcion que nos mostrara los formularios del menu lateral
        mostradoFomulariosMenuLateral(this.mainContenidoListado);
    }

    //* Metodo que mostrara los platos que tiene una categoria para el desadignado
    categoriasMostrarPlatosDesasignado(platosCategorias) {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // LLamada a la funcion de los formularios para modificar los platos de la categoria
        platosCategoriasDesasignado(platosCategorias);
    }

    //* Metodo que mostrara un mensaje para la confirmacion de los usuarios
    mostradoMensajeFormulariosConfirmacion(stringMensaje) {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // Llamada a la funcion de los formularios para el mostrado de mensajes de confirmacion
        mostradoMensajeFormulariosConfirmacion(this.mainContenido, stringMensaje);
    }

    //* Metodo que nos mostrara un mensaje para los errores de los formularios
    mostradoMensajeFormulariosError(stringError) {
        // Llamada al metodo de actualizar migas de pan
        this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
        // Llamada a la funcion de los formularios para el mostrado de mensajes de error
        mostradoMensajeFormulariosError(this.mainContenido, stringError);
    }

    //?////////////////METODOS PARA EL MANEJO DE EVENTOS/////////////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo para ejecutar el manejador del controlador de inicio
    manejadorInicio(manejadorInicio) {
        // Obtenemos el elemento
        let botonInicio = document.getElementById("inicio");
        // Hacemos una escucha por si se produce un evento de clic
        botonInicio.addEventListener("click", (event) => {
            // Llamamos al metodo del manejador que le pasamos como argumentos
            manejadorInicio(manejadorInicio);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la pagina: Inicio");
            // Apilamos una entrada en el historial con la accion inicio
            history.pushState({ action: "inicio" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo para ejecutar el manejador del controlador de la categoria
    manejadorCategoria(manejadorCategoria) {
        // Obtenemos el elemento
        let botonCategoria = document.getElementById("categoriasBarra");
        // Hacemos una escucha por si se produce un evento de clic
        botonCategoria.addEventListener("click", (event) => {
            // Llamamos al metodo del manejador que le pasamos como argumentos
            manejadorCategoria(manejadorCategoria);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la pagina: Categorias");
            // Apilamos una entrada en el historial con la accion inicio
            history.pushState({ action: "categorias" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo para ejecutar el manejador del controlador del alergeno
    manejadorAlergenos(manejadorAlergeno) {
        // Obtenemos el elemento
        let botonAlergeno = document.getElementById("alergenosBarra");
        // Hacemos una escucha por si se produce un evento de clic
        botonAlergeno.addEventListener("click", (event) => {
            // Llamamos al metodo del manejador que le pasamos como argumentos
            manejadorAlergeno(manejadorAlergeno);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la pagina: Alergenos");
            // Apilamos una entrada en el historial con la accion inicio
            history.pushState({ action: "alergenos" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo para ejecutar el manejador del controlador del menu
    manejadorMenus(manejadorMenu) {
        // Obtenemos el elemento
        let botonMenu = document.getElementById("menuBarra");
        // Hacemos una escucha por si se produce un evento de clic
        botonMenu.addEventListener("click", (event) => {
            // Llamamos al metodo del manejador que le pasamos como argumentos
            manejadorMenu(manejadorMenu);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la pagina: Menus");
            // Apilamos una entrada en el historial con la accion inicio
            history.pushState({ action: "menus" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo para ejecutar el manejador del controlador del plato
    manejadorPlatos(manejadorPlatos) {
        // Obtenemos el elemento
        let botonPlatos = document.getElementById("platosBarra");
        // Hacemos una escucha por si se produce un evento de clic
        botonPlatos.addEventListener("click", (event) => {
            // Llamamos al metodo del manejador que le pasamos como argumentos
            manejadorPlatos();
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la pagina: Platos");
            // Apilamos una entrada en el historial con la accion inicio
            history.pushState({ action: "platos" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //?/////METODOS PARA EL MANEJO DE EVENTOS DE ELEMENTOS GENERADOS/////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo que ejecuta el manejador del controlador que muestra la descripcion del restaurante
    manejadorRestauranteDescripcion(manejadorRestauranteDescripcion) {
        // Obtenemos el elemento select
        let selectRestaurante = document.getElementById("selectBarraNavegacionRestaurante");
        // Agregamos un event listener al select para el evento change
        selectRestaurante.addEventListener("change", (event) => {
            // Accedemos al valor de la opción seleccionada
            let restauranteSeleccionado = event.target.value;
            // Llamamos al manejador al que le introducimos el nombre del restaurante seleccionado
            manejadorRestauranteDescripcion(restauranteSeleccionado);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: RestauranteDescripcion");
            // Apilamos una nueva entrada al objeto history a la que le añadimos el restaurante seleccionado
            history.pushState(
                { action: "restauranteDescripcion", restauranteSeleccionado: event.target.value },
                "",
                null
            );
            // Guardamos una referencia al elemento select
            let selectElement = event.target;
            // Si se selecciona una opcion diferente a la primera
            if (selectElement.selectedIndex !== 0) {
                // Reiniciamos el select seleccionando la primera opcion
                selectElement.selectedIndex = 0;
            }
        });
    }
    
    //* Metodo que ejecuta el manejador del controlador que mostrara la descripcion del restaurante en el lateral
    manejadorRestauranteDescripcionLateral(manejadorRestauranteDescripcionLateral) {
        // Obtenemos el elemento
        let divLateralCategoria = document.getElementById("divRestaurantesDescripcionLateral");
        // Agregamos un event listener al elemento
        divLateralCategoria.addEventListener("click", (event) => {
            // Llamamos al manejador al que le introducimos el atributo personalizado
            manejadorRestauranteDescripcionLateral(event.target.dataset.prestaurantedescripcionlateral);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: RestauranteDescripcion");
            // Apilamos una entrada en el historial con el atributo personalizado
            history.pushState(
                {
                    action: "restauranteDescripcion",
                    categoriaSeleccionado: event.target.dataset.prestaurantedescripcionlateral,
                },
                "",
                null
            );
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara los platos de una categoria
    manejadorCategoriasPlatosInicio(manejadorCategoriasPlatosInicio) {
        // Obtenemos los contendoderes principales a traves de su clase
        let contenedorCategorias = document.getElementsByClassName("conenedorImagenBack");
        // Iteramos sobre la coleccion de elementos
        for (let contenedor of contenedorCategorias) {
            // Agregamos un event listener a cada elemento
            contenedor.addEventListener("click", (event) => {
                // Llamamos al manejador al que le introducimos el atributo personalizado
                manejadorCategoriasPlatosInicio(event.currentTarget.dataset.categoriasinicio);
                // Llamada al metodo de actualizar migas de pan
                this.#actualizarMigasPan("Estamos en la página: CategoriasPlatos");
                // Apilamos una entrada en el historial con el atributo personalizado
                history.pushState(
                    {
                        action: "categoriasPlatos",
                        categoriaSeleccionado: event.currentTarget.dataset.categoriasinicio,
                    },
                    "",
                    null
                );
                // Prevenimos el comportamiento predeterminado
                event.preventDefault();
            });
        }
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara los platos de una categoria
    manejadorCategoriasPlatosLateral(manejadorCategoriasPlatosLateral) {
        // Obtenemos el elemento
        let divLateralCategoria = document.getElementById("divLateralCategoria");
        // Agregamos un event listener al elemento
        divLateralCategoria.addEventListener("click", (event) => {
            // Llamamos al manejador al que le introducimos el atributo personalizado
            manejadorCategoriasPlatosLateral(event.target.dataset.plateralcategoria);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: CategoriasPlatos");
            // Apilamos una entrada en el historial con el atributo personalizado
            history.pushState(
                {
                    action: "categoriasPlatos",
                    categoriaSeleccionado: event.target.dataset.plateralcategoria,
                },
                "",
                null
            );
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara los platos de una categoria
    manejadorCategoriasPlatosMenu(manejadorCategoriasPlatosMenu) {
        // Obtenemos los elementos de lista
        let contenedorCategoriasMenu = document.getElementsByClassName("contenedorCategoriasMenu");
        // Agregamos un manejador de eventos a cad contenedor
        for (let contenedor of contenedorCategoriasMenu) {
            // Agregamos un event listener a cada elemento
            contenedor.addEventListener("click", (event) => {
                // Llamamos al manejador al que le introducimos el atributo personalizado
                manejadorCategoriasPlatosMenu(event.currentTarget.dataset.contenedorcategoriasmenu);
                // Llamada al metodo de actualizar migas de pan
                this.#actualizarMigasPan("Estamos en la página: CategoriasPlatos");
                // Apilamos una entrada en el historial con el atributo personalizado
                history.pushState(
                    {
                        action: "categoriasPlatos",
                        categoriaSeleccionado: event.target.dataset.contenedorcategoriasmenu,
                    },
                    "",
                    null
                );
                // Prevenimos el comportamiento predeterminado
                event.preventDefault();
            });
        }
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara la descripcion del plato
    manejadorPlatosDescripcion(manejadorPlatosDescripcion) {
        // Obtenemos los elementos de lista por su selector css
        let divPlatosDescripcion = document.querySelectorAll(".contenedorPlatos");
        // Agregamos un event listener a cada elemento obtenido
        divPlatosDescripcion.forEach((contenedor) => {
            contenedor.addEventListener("click", (event) => {
                manejadorPlatosDescripcion(event.currentTarget.dataset.divplatodescripcion);
                // Llamada al metodo de actualizar migas de pan
                this.#actualizarMigasPan("Estamos en la página: DescripcionPlatos");
                // Apilamos una entrada en el historial con el atributo personalizado
                history.pushState(
                    {
                        action: "descripcionPlatos",
                        platoSeleccionado: event.currentTarget.dataset.divplatodescripcion,
                    },
                    "",
                    null
                );
                // Prevenimos el comportamiento predeterminado
                event.preventDefault();
            });
        });
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara la descripcion de los platos desde el lateral
    manejadorPlatosDescripcionLateral(manejadorPlatosDescripcionLateral) {
        // Obtenemos los elementos con la clase "pPlatosDescripcionLateral"
        let pplatosDescripcionLaterales = document.getElementsByClassName(
            "pPlatosDescripcionLateral"
        );

        for (const platos of pplatosDescripcionLaterales) {
            platos.addEventListener("click", (event) => {
                // Llamamos al manejador al que le introducimos el atributo personalizado
                manejadorPlatosDescripcionLateral(
                    event.currentTarget.dataset.pplatosdescripcionlateral
                );
                // Llamada al método de actualizar migas de pan
                this.#actualizarMigasPan("Estamos en la página: DescripcionPlatos");
                // Apilamos una entrada en el historial con el atributo personalizado
                history.pushState(
                    {
                        action: "descripcionPlatos",
                        categoriaSeleccionado:
                            event.currentTarget.dataset.pplatosdescripcionlateral,
                    },
                    "",
                    null
                );
                // Prevenimos el comportamiento predeterminado
                event.preventDefault();
            });
        }
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara los platos del alergeno
    manejadorAlergenosPlatos(manejadorAlergenosPlatos) {
        // Obtenemos los elementos de lista
        let contenedorAlergenos = document.getElementsByClassName("contenedorAlergenos");
        // Iteramos sobre los elementos obtenidos
        for (const alergeno of contenedorAlergenos) {
            // Agregamos un event listener a cada elemento
            alergeno.addEventListener("click", (event) => {
                // Llamamos al manejador al que le introducimos el atributo personalizado
                manejadorAlergenosPlatos(event.currentTarget.dataset.contenedoralergenos);
                // Llamada al metodo de actualizar migas de pan
                this.#actualizarMigasPan("Estamos en la página: AlergenosPlatos");
                // Apilamos una entrada en el historial con el atributo personalizado
                history.pushState(
                    {
                        action: "alergenosPlatos",
                        alergenoSeleccionado: event.currentTarget.dataset.contenedoralergenos,
                    },
                    "",
                    null
                );
                // Prevenimos el comportamiento predeterminado
                event.preventDefault();
            });
        }
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara los platos del menu
    manejadorMenusPlatos(manejadorMenusPlatos) {
        // Obtenemos los elementos de lista
        let platos = document.getElementsByClassName("contenedorMenu");
        // Iteramos sobre los elementos obtenidos
        for (const plato of platos) {
            // Agregamos un event listener a cada elemento
            plato.addEventListener("click", (event) => {
                // LLamada al metodo del controlador que nos mostrra los platos que tiene un menu
                manejadorMenusPlatos(event.currentTarget.dataset.contenedormenu);
                // Llamada al metodo de actualizar migas de pan
                this.#actualizarMigasPan("Estamos en la página: MenuMostrarPlatos");
                // Apilamos una entrada en el historial con el atributo personalizado
                history.pushState(
                    {
                        action: "menuMostrarPlatos",
                        menuSeleccionado: event.currentTarget.dataset.contenedormenu,
                    },
                    "",
                    null
                );
                // Prevenimos el comportamiento predeterminado
                event.preventDefault();
            });
        }
    }

    //* Metodo que ejecutara el manejador del controlador que mostrara los platos que tienen un alergeno
    manejadorAlegenosPlatosLateral(manejadorAlegenosPlatosLateral) {
        // Obtenemos los elementos de lista
        let alergenos = document.getElementsByClassName("pAlegenosPlatosLateral");
        // Iteramos sobre los elementos obtenidos
        for (const alergeno of alergenos) {
            // Agregamos un event listener a cada elemento
            alergeno.addEventListener("click", (event) => {
                // llamada al metodo que nos mostrara los platos que tiene el alergeno desde el laterla
                manejadorAlegenosPlatosLateral(event.currentTarget.dataset.palegenosplatoslateral);
                // Llamada al metodo de actualizar migas de pan
                this.#actualizarMigasPan("Estamos en la página: AlergenosPlatos");
                // Apilamos una entrada en el historial con el atributo personalizado
                history.pushState(
                    {
                        action: "alergenosPlatos",
                        alergenoSeleccionado: event.currentTarget.dataset.palegenosplatoslateral,
                    },
                    "",
                    null
                );
                // Prevenimos el comportamiento predeterminado
                event.preventDefault();
            });
        }
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara la descripcion de los platos que tiene un alergeno
    manejadorAlergenosPlatosDescripcion(manejadorAlergenosPlatosDescripcion) {
        // Obtenemos los elementos de lista
        let contenedorAlergenosPlatosDescripcion = document.getElementsByClassName(
            "contenedorAlergenosPlatosDescripcion"
        );
        // Iteramos sobre los elementos obtenidos
        for (const platos of contenedorAlergenosPlatosDescripcion) {
            // Agregamos un event listener a cada elemento
            platos.addEventListener("click", (event) => {
                // Llamada al metodo que nos mostrara los platos del menu
                manejadorAlergenosPlatosDescripcion(
                    event.currentTarget.dataset.contenedoralergenosplatosdescripcion
                );
                // Llamada al metodo de actualizar migas de pan
                this.#actualizarMigasPan("Estamos en la página: DescripcionPlatos");
                // Apilamos una entrada en el historial con el atributo personalizado
                history.pushState(
                    {
                        action: "descripcionPlatos",
                        platoSeleccionado:
                            event.currentTarget.dataset.contenedoralergenosplatosdescripcion,
                    },
                    "",
                    null
                );
                // Prevenimos el comportamiento predeterminado
                event.preventDefault();
            });
        }
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara los platos del menu
    manejadorMenusPlatosLateral(manejadorMenusPlatosLateral) {
        // Obtenemos los elementos de lista
        let platos = document.getElementsByClassName("pMenuLateralMenus");
        // Iteramos sobre los elementos obtenidos
        for (const plato of platos) {
            // Agregamos un event listener a cada elemento
            plato.addEventListener("click", (event) => {
                // LLamada al metodo del controlador que nos mostrra los platos que tiene un menu
                manejadorMenusPlatosLateral(event.currentTarget.dataset.pmenulateralmenu);
                // Llamada al metodo de actualizar migas de pan
                this.#actualizarMigasPan("Estamos en la página: MenuMostrarPlatos");
                // Apilamos una entrada en el historial con el atributo personalizado
                history.pushState(
                    {
                        action: "menuMostrarPlatos",
                        menuSeleccionado: event.currentTarget.dataset.pmenulateralmenu,
                    },
                    "",
                    null
                );
                // Prevenimos el comportamiento predeterminado
                event.preventDefault();
            });
        }
    }

    //!//////////////////////////////////////////////////////////////////////
    //?///////////MANEJADORES DE EVENTOS PARA LOS FORMULARIOS////////////////
    //?//////////////////////////////////////////////////////////////////////
    //* Metodo que ejecuta el manejador del controlador que nos mostrara los formularios
    manejadorSelectBarraNavegacionGestion(manejadorSelectBarraNavegacionGestion) {
        // Obtenemos el elemento select
        let selectGestion = document.getElementById("selectBarraNavegacionGestion");
        // Hacemos una escucha al evento change del select
        selectGestion.addEventListener("change", (event) => {
            // Llamamos al manejador del controlador al que le introduciremos la opcion seleccionada
            manejadorSelectBarraNavegacionGestion(event.target.value);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: FormulariosGestion");
            // Apilamos una nueva entrada al objeto history a la que le añadimos la opcion seleccionada
            history.pushState(
                { action: "formulariosGestion", opcionSeleccionada: event.target.value },
                "",
                null
            );
            // Guardamos una referencia al elemento select
            let selectElement = event.target;
            // Si se selecciona una opcion diferente a la primera
            if (selectElement.selectedIndex !== 0) {
                // Reiniciamos el select seleccionando la primera opcion
                selectElement.selectedIndex = 0;
            }
        });
    }

    //!MANEJADOR PARA LA BARRA LATERAL DE LOS FORMULARIO

    //* Manejador que mostrara los platos que tiene un menu para desasignarlo
    manejadorFormularioMostrarPlatosMenuDesasignacion(
        manejadorFormularioMostrarPlatosMenuDesasignacion
    ) {
        // Obtenemos los radio botones del formulario por su nombre
        let radioBotones =
            document.forms.formularioDeasignacionPlatoMenu.elements["menuDesasignadoSeleccionado"];
        // Iteramos sobre cada radio boton
        radioBotones.forEach((radioBoton) => {
            // Agregamos un evento click a cada radioboton
            radioBoton.addEventListener("click", function () {
                // Verificamos si el radioboton esta pulsado
                if (this.checked) {
                    // Obtenemos el valor del radiboton
                    let menuSeleccionado = this.value;
                    // Llamada al metodo del controlador al que le pasaremos el menu seleccionado
                    manejadorFormularioMostrarPlatosMenuDesasignacion(menuSeleccionado);
                }
            });
        });
    }

    //* Manejador que mostrara los platos que tiene un menu para ordenarlos
    manejadorFormularioMostrarPlatosMenuOrdenacion(manejadorFormularioMostrarPlatosMenuOrdenacion) {
        // Obtenemos los radio botones del formulario por su nombre
        let radioBotones =
            document.forms.formularioOrdenarPlatoMenu.elements["menuOrdenadoSeleccionado"];
        // Iteramos sobre cada radio boton
        radioBotones.forEach((radioBoton) => {
            // Agregamos un evento click a cada radioboton
            radioBoton.addEventListener("click", function () {
                // Verificamos si el radioboton esta pulsado
                if (this.checked) {
                    // Obtenemos el valor del radiboton
                    let menuSeleccionado = this.value;
                    // Llamada al metodo del controlador al que le pasaremos el menu seleccionado
                    manejadorFormularioMostrarPlatosMenuOrdenacion(menuSeleccionado);
                }
            });
        });
    }

    //* Manejador que mostrara los platos que tiene una categoria para desasignarlos
    manejadorFormularioMostrarPlatosCategoriaDesasignado(
        manejadorFormularioMostrarPlatosCategoriaDesasignado
    ) {
        // Obtenemos los radio botones del formulario por su nombre
        let radioBotones =
            document.forms.formularioDesasignacionCategoriasPlatos.elements[
                "categoriaDesasignadoSeleccionado"
            ];
        // Iteramos sobre cada radio boton
        radioBotones.forEach((radioBoton) => {
            // Agregamos un evento click a cada radioboton
            radioBoton.addEventListener("click", function () {
                // Verificamos si el radioboton esta pulsado
                if (this.checked) {
                    // Obtenemos el valor del radiboton
                    let categoriaSeleccionado = this.value;
                    // Llamada al metodo del controlador al que le pasaremos el menu seleccionado
                    manejadorFormularioMostrarPlatosCategoriaDesasignado(categoriaSeleccionado);
                }
            });
        });
    }

    //* Manejador para el formulario para la creacion de platos
    manejadorFormularioCrearPlato(manejadorFormularioCrearPlato) {
        document.forms.formularioCrearPlato.elements["botonCrearPlato"].addEventListener(
            "click",
            function (event) {
                // Prevenimos el comportamiento por defecto
                event.preventDefault();
                //+ Obtenemos los datos del formulario
                //- Obtenemos el nombre del plato por el atributo name del elemento
                let nombrePlato = this.form.nombrePlatoCreacion.value;

                //- Obtenemos la url de la imagen del plato
                let urlImagenPlato = this.form.urlImagenCreacion.value;

                //- Obtenemos la descripcion del plato
                let descripcionPlato = this.form.descripcionPlatoCreacion.value;

                //- Obtenemos los ingredientes de un string separado por comas
                let ingredientesPlato = this.form.ingredientesPlatoCreacion.value;
                // Almacenamos los ingredientes en un array
                let arrayIngredientesPlato = ingredientesPlato.split(",");

                //- Obtenemos las categorias del checkbox
                let arrayCheckboxCategorias = this.form.elements["checkboxCategoriasCrear"];
                // Creamos un array para almacenar los valores de las categorias
                let arrayCategoriasSeleccionadas = [];
                // Recorremos los checkboxes de categorias
                for (let checkbox of arrayCheckboxCategorias) {
                    // Si el checkbox esta marcado
                    if (checkbox.checked) {
                        // Añadimos el valor al array
                        arrayCategoriasSeleccionadas.push(checkbox.value);
                    }
                }

                //- Obtenemos los alergenos del checkbox marcado
                let arrayCheckboxAlergenos = this.form.elements["checkboxAlergenosCrear"];
                // Creamos un array para almacenar los valores de los alergenos
                let arrayAlergenosSeleccionados = [];
                // Recorremos los checkboxes de alergenos
                for (let checkbox of arrayCheckboxAlergenos) {
                    // Si el checkbox esta marcado
                    if (checkbox.checked) {
                        // Añadimos el valor al array
                        arrayAlergenosSeleccionados.push(checkbox.value);
                    }
                }

                //+ Llamada al manejador del controlador para la creacion del plato
                manejadorFormularioCrearPlato(
                    nombrePlato,
                    urlImagenPlato,
                    descripcionPlato,
                    arrayIngredientesPlato,
                    arrayCategoriasSeleccionadas,
                    arrayAlergenosSeleccionados
                );
            }
        );
    }

    //* Manejador para el formulario para la eliminacion de los platos
    manejadorFormularioCrearEliminarPlato(manejadorFormularioCrearEliminarPlato) {
        document.forms.formularioEliminarPlato.elements["botonEliminarPlato"].addEventListener(
            "click",
            function (event) {
                // Prevenimos el comportamiento por defecto
                event.preventDefault();
                //- Obtenemos el plato del radioBoton marcado
                let arrayBotonesPlatoEliminado = this.form.elements["platoSeleccionadoEliminado"];
                // Creamos un array para almacenar los valores de los alergenos
                let arrayPlatosSeleccionados = [];
                // Recorremos los radiobotones para ver cual esta pulsado
                for (let radioboton of arrayBotonesPlatoEliminado) {
                    // Si el radioboton esta pulsado
                    if (radioboton.checked) {
                        // Añadimos el valor al array
                        arrayPlatosSeleccionados.push(radioboton.value);
                    }
                }

                //+ Llamada al manejador del controlador para la eliminacion del plato
                manejadorFormularioCrearEliminarPlato(arrayPlatosSeleccionados[0]);
            }
        );
    }
}

//?///////////////////////////EXPORTACIONES//////////////////////////////
export { RestauranteVista };
