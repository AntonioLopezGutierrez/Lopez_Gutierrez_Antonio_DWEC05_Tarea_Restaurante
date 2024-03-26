//!/////////////////////////IMPORTACIONES//////////////////////////////////
// Importacion del controlador
import { miControlador } from "../manager/restauranteApp.js";

//?/////////////OBJETO QUE ALMACENA LAS DEL HISTORIAL//////////////////////
// Objeto para realizar las acciones segun nos movemos por el historial
const historyActions = {
    //* Accion que nos devolvera al estado de la pagina de inicio
    inicio() {
        // Llamada al metodo on inicio del controlador
        miControlador.onInicio();
    },
    //* Accion que nos mostrara las categorias
    categorias() {
        // Llamada al metodo on categorias del controlador
        miControlador.onCategorias();
    },

    //* Accion que nos mostrara los alergenos
    alergenos() {
        // Llamada al metodo on alergenos del controlador
        miControlador.onAlergenos();
    },

    //* Accion que nos mostrara los menus
    menus() {
        // Llamada al metodo on menus del controlador
        miControlador.onMenus();
    },

    //* Accion que nos mostrara los platos de las categorias
    platos() {
        // Llamada al metodo on platos del controlador
        miControlador.onPlatos();
    },

    //* Accion que nos mostrara los platos de una categoria selecionada
    categoriasPlatos() {
        // Llamada al metodo on categoriasPlatos del controlador
        miControlador.onCategoriasPlatos();
    },

    //* Accion que nos mostrara los platos de una categoria selecionada
    descripcionPlatos() {
        // Llamada al metodo on descripcionPlatos del controlador
        miControlador.onDescripcionPlatos();
    },

    //* Accion que nos mostrara los platos que contiene un alergeno
    alergenosPlatos() {
        // Llamada al metodo on alergenos platos del controlador
        miControlador.onAlergenosPlatos();
    },

    //* Accion que nos mostrara los platos que tiene un menu
    menuMostrarPlatos() {
        // Llamada al metodo on alergenos platos del controlador
        miControlador.onMenuMostrarPlatos();
    },

    //* Accion que nos mostrara la descripcion de los platos
    restauranteDescripcion() {
        // Llamada al metodo que muestra la descripcion del restaurante
        miControlador.onRestauranteDescripcion();
    },
};

//?////ESCUCHA DEL EVENTO Y LLAMADA A LOS METODOS DEL OBJETO/////
// Escucha del evento por si cambia de estado y llamada al metodo del objeto
window.addEventListener("popstate", (event) => {
    // Si el el cambio de estado tiene relacionado un estado
    if (event.state) {
        // Ejecutamos la accion correspondiente del objeto
        historyActions[event.state.action](event);
    }
});


//?//////////////////ESTADO INICIAL DEL HISTORIAL////////////////////////
// Reemplazamos el estado actual del history con el de la accion de inicio
history.replaceState({ action: "inicio" }, "", null);
