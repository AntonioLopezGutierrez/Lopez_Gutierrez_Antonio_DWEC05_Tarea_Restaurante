//!/////////////////////////IMPORTACIONES//////////////////////////////////
// Importacion del controlador
import { miControlador } from "../manager/restauranteApp.js";

//?/////////////OBJETO QUE ALMACENA LAS DEL HISTORIAL//////////////////////
// Objeto para realizar las acciones segun nos movemos por el historial
const historyActions = {

    //* Accion que nos devolvera al estado de la pagina de inicio
    inicio() {
        miControlador.onInicio();
    },
    //* Accion que nos mostrara las categorias
    categorias() {
        miControlador.onCategorias();
    },

    //* Accion que nos mostrara los alergenos
    alergenos() {
        miControlador.onAlergenos();
    },

    //* Accion que nos mostrara los menus
    menus() {
        miControlador.onMenus();
    },

    //* Accion que nos mostrara los platos de las categorias
    platos() {
        miControlador.onPlatos();
    },
    
    //* Accion que nos mostrara los platos de una categoria selecionada
    categoriasPlatos(){
        miControlador.OnCategoriasPlatos();
    }
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
