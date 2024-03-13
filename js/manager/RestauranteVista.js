//!//////////////////////////CLASE RESTAURANTEVISTA//////////////////////
"use strict";
// Variable para mantener cambiar el historial de las migas de pan
let historialMigas = [];
let imagenesCategoriasMainListado = [
    "/imagenes/imagenesCategorias/imagenEntrante.png",
    "/imagenes/imagenesCategorias/imagenPrimerosPlatos.png",
    "/imagenes/imagenesCategorias/imagenSegundosPlatos.png",
    "/imagenes/imagenesCategorias/imagenPostres.png",
];
let imagenesCategoriasMainContenido = [
    "/imagenes/imagenesCategorias/imagenEntrante.png",
    "/imagenes/imagenesCategorias/imagenPrimerosPlatos.png",
    "/imagenes/imagenesCategorias/imagenSegundosPlatos.png",
    "/imagenes/imagenesCategorias/imagenPostres.png",
];

class RestauranteVista {
    //?//////////////////////CONSTRUCTOR DE LA CLASE/////////////////////+
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
    }

    //?//////////////////METODO DE MOSTRADO DE LA CLASE///////////////////
    //* Metodo para el mostrado al volver a inicion y al cargar
    #inicioCarga(categorias) {
        // Limpiamos el contenido del del main contenido para no duplicar elementos
        this.mainContenido.innerHTML = "";
        // Limpiamos el contenido del main listado para no duplicarelementos
        this.mainContenidoListado.innerHTML = "";
        // Recorremos el iterador con cada una de las categorias
        for (const categoria of categorias) {
            //+ Modificado del main contenido
            // Obtenemos el nombre de la categoria
            const nombreCategoria = categoria.categoria.getName();
            // Creamos un nuevo contenedor div
            let contenedor = document.createElement("div");
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
            // Asignamos la escucha de eventos al contenedor
            this.escuchaContenedor(contenedor);

            //+ Modificado del main contenido listado
            // Creamos un nuevo contenedor div
            let contenedor1 = document.createElement("div");
            // Establecemos los estilod del contenedor
            this.#imagenesCategoriasMainListado(contenedor1);
            // Creamos un elemento de enlace
            const enlaces = document.createElement("a");
            // Mostramos en el texto del menu con las categoris
            enlaces.innerText = nombreCategoria;
            // Agregamos los enlaces al contenedor
            contenedor1.appendChild(enlaces);
            // Agregamos el contenedor al main contenido listado
            this.mainContenidoListado.appendChild(contenedor1);
            // Agregamos la escucha al pulsar los elementos del menu
            this.escuchaEnlaces(contenedor1);
        }
    }

    #barraNavegacion(categorias, platos) {
        //* Elemento de inicio
        // Crear la lista de elementos de la barra de navegación
        let listaElementos = document.createElement("ul");
        // Creamos un elemento de lista que sera el inicio
        let elementoInicio = document.createElement("li");
        // Asignamos el texto al elemento de inicio
        elementoInicio.innerText = "Inicio";
        // Añadimos el elemento a la lista
        listaElementos.appendChild(elementoInicio);
        // Asignamos una escucha si pulsamos el elemento
        this.escuchaNavegacionInicion(elementoInicio, categorias, platos);

        //* Elemento categorias
        // Creamos un elemento de lista para el elemento categorias
        let elementoCategorias = document.createElement("li");
        elementoCategorias.innerText = "Categorías"; // Asignar el texto utilizando el operador de asignación
        listaElementos.appendChild(elementoCategorias);

        //* Elemento alergenos
        // Elemento "Alergenos"
        let elementoAlergenos = document.createElement("li");
        elementoAlergenos.innerText = "Alergenos"; // Asignar el texto utilizando el operador de asignación
        listaElementos.appendChild(elementoAlergenos);

        //* Elemento menu
        // Elemento "Menús"
        let elementoMenus = document.createElement("li");
        elementoMenus.innerText = "Menús"; // Asignar el texto utilizando el operador de asignación
        listaElementos.appendChild(elementoMenus);

        //* Elemento platos
        // Elemento "Platos"
        let elementoPlatos = document.createElement("li");
        elementoPlatos.innerText = "Platos"; // Asignar el texto utilizando el operador de asignación
        listaElementos.appendChild(elementoPlatos);

        //* Agregado de la lista de elementos a la barra de navegacion
        // Agregar la lista de elementos a la barra de navegación
        this.barraNavegacion.appendChild(listaElementos);

        //* Elemento migas de pan
        let elementoMigasPan = document.createElement("p");
        elementoMigasPan.innerText = "Entrada > Plato > Alimento";
        this.barraNavegacion.appendChild(elementoMigasPan);
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

    //?////////////////METODOS QUE MANEJA EL CONTROLADOR/////////////////
    //* Metodo para el mostrado cuando volvemos a la pagina de inicio
    inicio(categorias, platos) {
        // Llamada al metodo privado de iniciar carga
        this.#inicioCarga(categorias);
        // LLamada al metodo de mostrar platos random
        this.#mostradosPlatosRandom(platos);
        // Llamada al metodo que mostrara la barra de navegacion
        this.#barraNavegacion(categorias, platos);
    }

    //* Metodo que se carga justo al cargar la pagina
    carga(categorias, platos) {
        // Llamada al metodo privado de iniciar carga
        this.#inicioCarga(categorias);
        // LLamada al metodo de mostrar platos random
        this.#mostradosPlatosRandom(platos);
        // Llamada al metodo que mostrara la barra de navegacion
        this.#barraNavegacion(categorias, platos);
    }

    //* Metodo para para el mostrado de platos
    mostradoPlatos() {
        // Limpiar el contenido del listado principal
        this.mainContenido.innerHTML = "";
    }


    //?//////////////////METODOS PARA EL CAMBIO DE ESTILOS///////////////
    //* Mostrado de imagenes de fondo de los contenedores del main listado
    #imagenesCategoriasMainListado(contenedor) {
        // Agregamos una imagen de fondo al contenedor
        contenedor.style.backgroundImage = "url('" + imagenesCategoriasMainListado[0] + "')";
        imagenesCategoriasMainListado.push(imagenesCategoriasMainListado.shift());
    }

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
    //* Metodo para volver a la pagina de inicio pulsando inicio de la barra de navegacion
    escuchaNavegacionInicion(elementoInicio, categorias, platos) {
        // Hacemos la escucha de cuando hacemos click en un contenedor
        elementoInicio.addEventListener("click", (event) => {
            // Llamamos al metodo de inicio
            this.inicio(categorias, platos);
            // Apilamos una entrada en el historial con la accion inicio
            history.pushState({ action: "inicio" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo para mostrar los platos al pulsar en las categorias del main contenido
    escuchaContenedor(contenedor) {
        // Hacemos la escucha de cuando hacemos click en un contenedor
        contenedor.addEventListener("click", (event) => {
            // LLamada al metodo para mostrar los platos
            this.mostradoPlatos();
            // Apilamos una entrada en el historial con la accion mostrar platos
            history.pushState({ action: "mostradoPlatos" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo para mostrar los palatos pulsando en las categorias de main listado
    escuchaEnlaces(enlaces) {
        // Hacemos la escucha de cuando hacemos click en un contenedor
        enlaces.addEventListener("click", (event) => {
            // LLamada al metodo para mostrar los platos
            this.mostradoPlatos();
            // Apilamos una entrada en el historial con la accion mostrar platos
            history.pushState({ action: "mostradoPlatos" }, "", null);
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }
}

//?///////////////////////////EXPORTACIONES//////////////////////////////
export { RestauranteVista };
