//!//////////////////////////CLASE RESTAURANTEVISTA//////////////////////
"use strict";

import { RestauranteControlador } from "./RestauranteControlador.js";
import { miControlador } from "./restauranteApp.js";

// Enlaces a las imagenes que mostraremos de las categorias
let imagenesCategoriasMainContenido = [
    "/imagenes/imagenesCategorias/imagenEntrante.png",
    "/imagenes/imagenesCategorias/imagenPrimerosPlatos.png",
    "/imagenes/imagenesCategorias/imagenSegundosPlatos.png",
    "/imagenes/imagenesCategorias/imagenPostres.png",
];

class RestauranteVista {
    //?//////////////////////CONSTRUCTOR DE LA CLASE/////////////////////
    //?//////////////////////////////////////////////////////////////////
    // En el constructor obtendremos y crearemos los datos del DOM
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

        //* Otras propiedades
        // Propiedad para que no se repitan los restaurantes en el desplegable
        this.mostradoDesplegable = false;
        // Propiedad en la que almacenaremos las migas de pan
        this.migaDePanActual = "Estamos en la pagina: Inicio";
        // Propiedad para almacenar la categoria de los platos que vamos a mostra desde la categorias de la bara
        this.platosCategoriasNavagacion;
    }

    //?//////////METODO PRIVADOS DE LA CLASE MOSTRADO DE LA CLASE////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo para el mostrado de la barra de navegacion
    #barraNavegacion(categorias, platos, alergenos, menus, restaurantes) {
        //* Div contenedor de todos los elementos
        // Creamos un nuevo elemento div para almacenar los elementos de la barra
        let divBarraNavegacion = document.createElement("div");
        // Asignamos una clase al div principal
        divBarraNavegacion.classList.add("divBarraNavegacion");

        //* Elemento de inicio
        // Creamos un nuevo elemento div para el inicio
        let divInicio = document.createElement("div");
        // Asignamos una clase al elemento
        divInicio.classList.add("divBarraNavegacionElementos");
        // Asignamos el texto al elemento de inicio
        divInicio.innerText = "Inicio";
        // Asignamos una escucha si pulsamos el elemento de inicio
        this.escuchaNavegacionInicion(divInicio, categorias);

        //* Elemento categorias
        // Creamos un nuevo elemento div para las categorias
        let divCategoria = document.createElement("div");
        // Asignamos una nueva clase al elemento
        divCategoria.classList.add("divBarraNavegacionElementos");
        // Agregamos un texto al elemento categorias
        divCategoria.innerText = "Categorías";
        // Asignamos la escucha de eventos al elemento categorias
        this.escuchaNavegacionCategorias(divCategoria, categorias);

        //* Elemento alergenos
        // Creamos un nuevo elemento para los alergenos
        let divAlergenos = document.createElement("div");
        // Asignamos una clase al elemento
        divAlergenos.classList.add("divBarraNavegacionElementos");
        // Agregamos el texto de alergenos
        divAlergenos.innerText = "Alergenos";
        // Asignamos la eschucha del elemento alergenos
        this.escuchaNavegacionAlergenos(divAlergenos, alergenos);

        //* Elemento menus
        // Creamos un nuevo elemento para los menus
        let divMenus = document.createElement("div");
        // Asignamos la clase al elemento
        divMenus.classList.add("divBarraNavegacionElementos");
        // Asignamos el texto al elemento de menu
        divMenus.innerText = "Menús";
        // Asignamos la escucha de eventos al elemento menu
        this.escuchaNavegacionMenu(divMenus, menus);

        //* Elemento platos
        // Creamos un nuevo elemento para los platos
        let divPlatos = document.createElement("div");
        // Asignamos la clase al elemento
        divPlatos.classList.add("divBarraNavegacionElementos");
        // Asignamos un texto al elemento de plato
        divPlatos.innerText = "Platos";
        // Asignamos la escucha de eventos al elemento plato
        this.escuchaNavegacionPlato(divPlatos, platos);

        //* Elemento Restaurantes
        // Creamos un nuevo elemento para los restaurantes
        let divRestaurantes = document.createElement("div");
        // Creamos un nuevo elemento select
        let selectRestaurante = document.createElement("select");
        // Asignamos la clase al elemento option
        selectRestaurante.classList.add("selectBarraNavegacionRestaurante");
        // Agregamos la select al contenedor del restaurante
        divRestaurantes.appendChild(selectRestaurante);
        // Creamos un nuevo elemento option
        let opcionRestaurante = document.createElement("option");
        // Asignamos el texto al elemento
        opcionRestaurante.innerText = "Restaurantes";
        // Seleccionamos esta opcion por defecto
        opcionRestaurante.selected = true;
        // Agregamos el option al select
        selectRestaurante.appendChild(opcionRestaurante);
        // Asignamos la escucha de eventos al elemento restaurante
        this.escuchaNavegacionRestaurante(selectRestaurante, restaurantes);

        //* Elemento migas de pan
        // Creamos un nuevo elemento de párrafo
        let elementoMigasPan = document.createElement("p");
        // Asignamos la clase al elemento
        elementoMigasPan.classList.add("elementoMigasPanBarraNavegacion");
        // Asignamos el texto inicial al elemento de migas de pan
        elementoMigasPan.innerText = this.migaDePanActual;
        // Agregamos el elemento a la barra de navegación
        this.barraNavegacion.appendChild(elementoMigasPan);
        // Escucha del estado del evento par cambiar migas de pan al avanzar y retroceder
        this.escuchaNavegacionMigasPan(elementoMigasPan);

        //* Agregado de la lista de elementos al contenedor barra de navegacion
        // Agregamos el elemento de inicio al contenedor de la barra de navegacion
        divBarraNavegacion.appendChild(divInicio);
        // Agregamos el elemento de categorias al contenedor de la barra de navegacion
        divBarraNavegacion.appendChild(divCategoria);
        // Agregamos el elemento de alergenos al contenedor de la barra de navegacion
        divBarraNavegacion.appendChild(divAlergenos);
        // Agregamos el elemento de menus al contenedor de la barra de navegacion
        divBarraNavegacion.appendChild(divMenus);
        // Agregamos el elemento de platos al contenedor de la barra de navegacion
        divBarraNavegacion.appendChild(divPlatos);
        // Agregamos el elemento de restaurnates al contenedor de la barra de navegacion
        divBarraNavegacion.appendChild(divRestaurantes);

        //** Agregado de elementos a a la barra de navegacion
        // Agregado del contenedor a la barra de navegacion
        this.barraNavegacion.appendChild(divBarraNavegacion);
        // Agregado del elemento migas de pan a la barra de navegacion
        this.barraNavegacion.appendChild(elementoMigasPan);
    }

    //* Metodo para actualizar las migas de pan
    actualizarMigasPan(texto) {
        // Obtenemos el elemento de las migas de pan
        let elementoMigasPan = document.querySelector(".elementoMigasPanBarraNavegacion");
        // Actualizamos la migas de pan con el texto introducido
        elementoMigasPan.innerText = texto;
    }

    //* Metodo para el mostrado de categorias al iniciar la pagina
    #mostradoCategoriasInicio(categorias) {
        // Limpiamos el contenido del del main contenido para no duplicar elementos
        this.mainContenido.innerHTML = "";
        // Recorremos el iterador con cada una de las categorias
        for (const categoria of categorias) {
            // Obtenemos el nombre de la categoria
            const nombreCategoria = categoria.categoria.getName();
            // Creamos un nuevo contenedor div
            let contenedor = document.createElement("div");
            // Asignamos una clase al contenedor
            contenedor.classList.add("contenedorCategorias");
            // Llamamos al metodo que modifica los estilos del contenedor
            this.#imagenesCategoriasMainContenido(contenedor);
            // Creamos un nuevo elemento span
            const span = document.createElement("span");
            // Mostramos en el texto del parrafo las categorias
            span.innerText = nombreCategoria;
            // Agregamos los parrafos al contenedor
            contenedor.appendChild(span);
            // Agregar el contenedor al main contenido
            this.mainContenido.appendChild(contenedor);
        }
    }

    //* Metodo para el mostrado de las categorias de la barra lateral
    #mostradoMenuLateral(categorias) {
        // Limpiamos el contenido del main contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo elemento de lista
        let lista = document.createElement("ul");
        // Asignamos una clase a la fila
        lista.classList.add("ulLateralCategoria");
        // Iteramos sobre el iterador de categorias
        for (const categoria of categorias) {
            // Creamos un nuevo elemento de lista
            let listaFila = document.createElement("li");
            // Asignamos una clase a la fila
            listaFila.classList.add("liLateralCategoria");
            // Agregamos el texto con el nombre de la categoria a la fila de la lista
            listaFila.innerText = categoria.categoria.getName();
            // Agregamos la fila de la lista a la lista
            lista.appendChild(listaFila);
        }
        // Agregamos el contenedor al main listado
        this.mainContenidoListado.appendChild(lista);
    }

    //* Metodo para mostrar los platos aleatorios
    #mostradosPlatosRandom(platos) {
        // Comvertimos el iterador en un array
        let arrayPlatos = [...platos];
        // Limpiamos el contenido del aside para que no se dupliquen elementos
        this.aside.innerHTML = "";
        // Creamos un elemento de titulo
        let titulo = document.createElement("h2");
        // Le asignamos un texto al titulo
        titulo.innerText = "Platos";
        // Agrgamos el titulo al aside
        this.aside.appendChild(titulo);
        // Creamos un array que almacenara los numermos random para no duplicar platos
        let indicesMostrados = [];
        // Iteramos sobre el array para mostrar solo 3 platos
        for (let i = 0; i < 3; i++) {
            let numeroRandom;
            // Generara numeros ramdom mientras hasta que no esten inclidos en el array
            do {
                // Generamos un nuevo numero aleatorio
                numeroRandom = Math.floor(Math.random() * arrayPlatos.length);
                // Condicion que comprobamos si esta el numero en el array
            } while (indicesMostrados.includes(numeroRandom));
            // Guardamos el numero en el array
            indicesMostrados.push(numeroRandom);
            // Creamos un nuevo contenedor
            let contenedor = document.createElement("div");
            // Cambio de estilos del contenedor
            this.#imagenesPlatosAside(contenedor, arrayPlatos[numeroRandom].platos);
            // Creamos un nuevo span
            let span = document.createElement("span");
            // Asignamos el texto al span
            span.innerText = arrayPlatos[numeroRandom].platos.getName();
            // Agregamos el párrafo al contenedor
            contenedor.appendChild(span);
            // Añadimos el contenedor al aside
            this.aside.appendChild(contenedor);
        }
    }

    //* Metodo para el mostrado de categorias
    #mostradoCategoriasMenu(categorias) {
        // Limpiamos el contenido del main contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo contenedor
        let contenedor = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedor.classList.add("contenedorCategoriasMenu");
        // Creamos un nuevo elemento de lista
        let lista = document.createElement("ul");
        // Agregamos el la lista al contenedor
        contenedor.appendChild(lista);
        // Iteramos sobre el iterador de categorias
        for (const categoria of categorias) {
            // Creamos un nuevo elemento de lista
            let listaFila = document.createElement("li");
            // Asignamos una clase a la fila
            listaFila.classList.add("filaCategoriasMenu");
            // Agregamos el texto con el nombre de la categoria a la fila de la lista
            listaFila.innerText = categoria.categoria.getName();
            // Agregamos la fila de la lista a la lista
            lista.appendChild(listaFila);
            // Llamamos para que muestre los platos de la categoria
            this.escuchaCategoriaSeleccionada(listaFila, categoria);
        }
        // Agregamos el contenedor al main
        this.mainContenido.appendChild(contenedor);
    }

    //* Metodo para el mostrado de alergenos
    #mostradoAlergenos(alergenos) {
        // Limpiamos el contenido del maun contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo contenedor
        let contenedor = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedor.classList.add("contenedorAlergenos");
        // Creamos un nuevo elemento de lista
        let lista = document.createElement("ul");
        // Agregamos el la lista al contenedor
        contenedor.appendChild(lista);
        // Iteramos sobre el iterador de alergenos
        for (const alergeno of alergenos) {
            // Creamos un nuevo elemento de lista
            let listaFila = document.createElement("li");
            // Asignamos una clase a la fila
            listaFila.classList.add("filaAlergeno");
            // Agregamos el texto con el nombre del alergeno a la fila de la lista
            listaFila.innerText = alergeno.getName();
            // Agregamos la fila de la lista a la lista
            lista.appendChild(listaFila);
        }
        // Agregamos el contenedor al main
        this.mainContenido.appendChild(contenedor);
    }

    //* Metodo para el mostrado de los menus
    #mostradoMenus(menus) {
        // Limpiamos el contenido del main contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo contenedor
        let contenedor = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedor.classList.add("contenedorMenus");
        // Creamos un nuevo elemento de lista
        let lista = document.createElement("ul");
        // Agregamos el la lista al contenedor
        contenedor.appendChild(lista);
        // Iteramos sobre el iterador de menus
        for (const menu of menus) {
            // Creamos un nuevo elemento de lista
            let listaFila = document.createElement("li");
            // Asignamos una clase a la fila
            listaFila.classList.add("filaMenu");
            // Agregamos el texto con el nombre del menu a la fila de la lista
            listaFila.innerText = menu.menus.getName();
            // Agregamos la fila de la lista a la lista
            lista.appendChild(listaFila);
        }
        // Agregamos el contenedor al main
        this.mainContenido.appendChild(contenedor);
    }

    //* Metodo para mostrar los platos
    #mostradoPlatos(platos) {
        // Limpiamos el contenido del main contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo contenedor
        let contenedor = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedor.classList.add("contenedorPlatos");
        // Creamos un nuevo elemento de lista
        let lista = document.createElement("ul");
        // Agregamos el la lista al contenedor
        contenedor.appendChild(lista);
        // Iteramos sobre el iterador de platos
        for (const plato of platos) {
            // Creamos un nuevo elemento de lista
            let listaFila = document.createElement("li");
            // Asignamos una clase a la fila
            listaFila.classList.add("filaPlatos");
            // Agregamos el texto con el nombre del plato a la fila de la lista
            listaFila.innerText = plato.platos.getName();
            // Agregamos la fila de la lista a la lista
            lista.appendChild(listaFila);
        }
        // Agregamos el contenedor al main
        this.mainContenido.appendChild(contenedor);
    }

    //* Metodo para mostrar los restaurantes
    #mostradoRestaurante(elementoRestaurante, restaurantes) {
        // Comprobacion de que los elementos del restaurantes no estan creados
        if (!this.mostradoDesplegable) {
            // Iteramos sobre el array de restaurantes
            for (const restaurante of restaurantes) {
                // Creamos un nuevo elemento de option
                let optionRestaurante = document.createElement("option");
                // Agregamos el texto con el nombre del plato a la fila de la lista
                optionRestaurante.innerText = restaurante.getName();
                // Agregamos el contenedor al elemento de restaurante
                elementoRestaurante.appendChild(optionRestaurante);
            }
            // Cambiamos el valor de la propiedad para que no see generen repetidos
            this.mostradoDesplegable = true;
        }
    }

    //?////////////////METODOS QUE MANEJA EL CONTROLADOR/////////////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo para el mostrado cuando volvemos a la pagina de inicio
    inicio(categorias, platos) {
        // Llamada al metodo privado de mostrar las categorias
        this.#mostradoCategoriasInicio(categorias);
        // LLamada al metodo de mostrar platos random
        this.#mostradosPlatosRandom(platos);
    }

    //* Metodo que se carga justo al cargar la pagina
    carga(categorias, platos, alergenos, menus, restaurantes) {
        // Llamada al metodo privado de mostrar el menu lateral
        this.#mostradoMenuLateral(categorias);
        // Llamada al metodo privado de mostrar las categorias
        this.#mostradoCategoriasInicio(categorias);
        // LLamada al metodo de mostrar platos random
        this.#mostradosPlatosRandom(platos);
        // Llamada al metodo que mostrara la barra de navegacion
        this.#barraNavegacion(categorias, platos, alergenos, menus, restaurantes);
    }

    //* Metodo que mostrara las categorias
    categorias(categorias) {
        //Llamada al metodo de mostrado de categorias
        this.#mostradoCategoriasMenu(categorias);
    }

    //* Metodo que mostrara los alergenos
    alergenos(alergenos) {
        // LLamada al metodo de mostrar alergenos
        this.#mostradoAlergenos(alergenos);
    }
    //* Metodo para el mostrado del los menus
    menus(menus) {
        // LLamada al metodo de mostrar alergenos
        this.#mostradoMenus(menus);
    }

    //* Metodo para para el mostrado de platos
    platos(platos) {
        // Llamada al metodo para mostrar platos
        this.#mostradoPlatos(platos);
    }

    //* Metodo para el mostrado de los restaurantes
    mostradoRestaurante(restaurantes) {
        //this.#mostradoRestaurante(restaurantes);
    }

    //?////METODOS QUE MANEJA EL CONTROLADOR SEGUNDAS INTERACIONES///////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo que muestr los platos que tiene una categoria
    categoriasPlatos() {
        // Llamada al metodo para mostrar platos
        this.#mostradoPlatos(this.platosCategoriasNavagacion);
    }

    //?//////////////////METODOS PARA EL CAMBIO DE ESTILOS///////////////
    //?//////////////////////////////////////////////////////////////////
    //* Mostrado de imagenes de fondo de los contenedores del main contenido
    #imagenesCategoriasMainContenido(contenedor) {
        // Agregamos una imagen de fondo al contenedor
        contenedor.style.backgroundImage = "url('" + imagenesCategoriasMainContenido[0] + "')";
        imagenesCategoriasMainContenido.push(imagenesCategoriasMainContenido.shift());
    }
    //* Mostrado de imagnes de fondo de los contenedores del aside
    #imagenesPlatosAside(contenedor, platos) {
        // Agregamos la imagen de fondo que obtenemosj de la propiedad platos
        contenedor.style.backgroundImage = "url('" + platos.getImage() + "')";
    }

    //?///////////////METODOS PARA LA ESCUCHA DE EVENTOS/////////////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo para volver a la pagina de inicio pulsando inicio de la barra de navegacion
    escuchaNavegacionInicion(elementoInicio, categorias, platos) {
        // Hacemos la escucha de cuando hacemos click en el elemento
        elementoInicio.addEventListener("click", (event) => {
            // Llamamos al metodo de inicio
            this.inicio(categorias, platos);
            // Llamada al metodo de actualizar migas de pan
            this.actualizarMigasPan("Estamos en la pagina: Inicio");
            // Apilamos una entrada en el historial con la accion inicio
            history.pushState({ action: "inicio" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo para mostrar el listado de las categorias
    escuchaNavegacionCategorias(elementoCategorias, categorias) {
        // Hacemos la escucha de cuando hacemos click en el elemento
        elementoCategorias.addEventListener("click", (event) => {
            // Llamamos al metodo para mostrar las categorias
            this.categorias(categorias);
            // Llamada al metodo de actualizar migas de pan
            this.actualizarMigasPan("Estamos en la pagina: Categorias");
            // Apilamos una entrada en el historial con la accion mostrado categorias
            history.pushState({ action: "categorias" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo para mostrar la liista de alergenos
    escuchaNavegacionAlergenos(elementoAlergenos, alergenos) {
        // Hacemos la escucha de cuando hacemos click en el elemento
        elementoAlergenos.addEventListener("click", (event) => {
            // Llamamos al metodo para mostrar las alergenos
            this.alergenos(alergenos);
            // Llamada al metodo de actualizar migas de pan
            this.actualizarMigasPan("Estamos en la pagina: Alergenos");
            // Apilamos una entrada en el historial con la accion mostrado alergenos
            history.pushState({ action: "alergenos" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo para mostrar el listado de menus
    escuchaNavegacionMenu(elementoMenus, menus) {
        // Hacemos la escucha de cuando hacemos click en el elemento
        elementoMenus.addEventListener("click", (event) => {
            // Llamamos al metodo para mostrar los menus
            this.menus(menus);
            // Llamada al metodo de actualizar migas de pan
            this.actualizarMigasPan("Estamos en la pagina: Menus");
            // Apilamos una entrada en el historial con la accion mostrado alergenos
            history.pushState({ action: "menus" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo para mostrar el listado con platos
    escuchaNavegacionPlato(elementoPlatos, platos) {
        // Hacemos la escucha de cuando hacemos click en un contenedor
        elementoPlatos.addEventListener("click", (event) => {
            // LLamada al metodo para mostrar los platos
            this.platos(platos);
            // Llamada al metodo de actualizar migas de pan
            this.actualizarMigasPan("Estamos en la pagina: Platos");
            // Apilamos una entrada en el historial con la accion mostrar platos
            history.pushState({ action: "platos" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }
    //* Metodo para mostrar los restaurantes
    escuchaNavegacionRestaurante(elementoRestaurante, restaurantes) {
        // Hacemos la escucha de cuando hacemos click en un contenedor
        elementoRestaurante.addEventListener("click", (event) => {
            // LLamada al metodo para mostrar los platos
            this.#mostradoRestaurante(elementoRestaurante, restaurantes);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Método para cambiar el texto de las migas de pan según la opción seleccionada
    escuchaNavegacionMigasPan(elementoMigasPan) {
        // Hacemos la escucha del objeto windows para el cambio de estado
        window.addEventListener("popstate", (event) => {
            // Verificar si existe un estado en el evento
            if (event.state) {
                // Convertimos la prrimera letra en mayuscula de las acciones del histori
                let action =
                    window.history.state.action.charAt(0).toUpperCase() +
                    window.history.state.action.slice(1);
                // Modificamos el texto del elemento de las mihas de pan
                elementoMigasPan.innerText = "Estamos en la pagina: " + action;
            }
        });
    }

    //?///////////////////SEGUNDOS METODOS DE ESCUCHA////////////////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo para mostrar un mensaje por consola al hacer clic en una categoría
    escuchaCategoriaSeleccionada(listaFila, categoria) {
        // Hacemos la escucha de cuando hacemos click en una categoría
        listaFila.addEventListener("click", (event) => {
            // Almacenado de los platos en la propiedad
            this.platosCategoriasNavagacion = miControlador.onObtenerPlatosEnCategoria(categoria);
            // LLamada al metodo para mostrar los platos que corresponden a una categoria
            this.categoriasPlatos();
            // Llamada al metodo de actualizar migas de pan
            this.actualizarMigasPan("Estamos en la pagina: CategoriasPlatos");
            // Apilamos una entrada en el historial con la accion mostrar platos
            history.pushState({ action: "categoriasPlatos" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }
}

//?///////////////////////////EXPORTACIONES//////////////////////////////
export { RestauranteVista };
