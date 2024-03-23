//!//////////////////////////CLASE RESTAURANTEVISTA//////////////////////
"use strict";

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
    //* Metodo para el mostrado de la barra de navegacion
    #barraNavegacion(restaurantes) {
        this.barraNavegacion.innerHTML = "";
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
        // Asignamos el id al elemento de inicio
        divInicio.id = "inicio";

        //* Elemento categorias
        // Creamos un nuevo elemento div para las categorias
        let divCategoria = document.createElement("div");
        // Asignamos una nueva clase al elemento
        divCategoria.classList.add("divBarraNavegacionElementos");
        // Agregamos un texto al elemento categorias
        divCategoria.innerText = "Categorías";
        // Asignamos el id al elemento de la categoria
        divCategoria.id = "categoriasBarra";

        //* Elemento alergenos
        // Creamos un nuevo elemento para los alergenos
        let divAlergenos = document.createElement("div");
        // Asignamos una clase al elemento
        divAlergenos.classList.add("divBarraNavegacionElementos");
        // Agregamos el texto de alergenos
        divAlergenos.innerText = "Alergenos";
        // Asignamos el id al elemento del alergeno
        divAlergenos.id = "alergenosBarra";

        //* Elemento menus
        // Creamos un nuevo elemento para los menus
        let divMenus = document.createElement("div");
        // Asignamos la clase al elemento
        divMenus.classList.add("divBarraNavegacionElementos");
        // Asignamos el texto al elemento de menu
        divMenus.innerText = "Menús";
        // Asignamos el id al elemento del menu
        divMenus.id = "menuBarra";

        //* Elemento platos
        // Creamos un nuevo elemento para los platos
        let divPlatos = document.createElement("div");
        // Asignamos la clase al elemento
        divPlatos.classList.add("divBarraNavegacionElementos");
        // Asignamos un texto al elemento de plato
        divPlatos.innerText = "Platos";
        // Asignamos el id al elemento de platos
        divPlatos.id = "platosBarra";

        //* Elemento Restaurantes
        // Creamos un nuevo elemento para los restaurantes
        let divRestaurantes = document.createElement("div");
        // Creamos un nuevo elemento select
        let selectRestaurante = document.createElement("select");
        // Asignamos la clase al elemento option
        selectRestaurante.classList.add("selectBarraNavegacionRestaurante");
        // Asignamos un id a la select
        selectRestaurante.id = "selectBarraNavegacionRestaurante";
        // Agregamos la select al contenedor del restaurante
        divRestaurantes.appendChild(selectRestaurante);
        // Creamos un nuevo elemento option
        let opcionRestaurantes = document.createElement("option");
        // Asignamos el texto al elemento
        opcionRestaurantes.innerText = "Restaurantes";
        // Desactivamos la opcion inicial para que nos sea una opcion
        opcionRestaurantes.disabled = true;
        // Seleccionamos esta opcion por defecto
        opcionRestaurantes.selected = true;
        // Agregamos el option al select
        selectRestaurante.appendChild(opcionRestaurantes);
        // Iteramos sobre el array de restaurantes
        for (const restaurante of restaurantes) {
            // Creamos un nuevo elemento de option
            let optionRestaurante = document.createElement("option");
            // Agregamos el texto con el nombre del plato a la fila de la lista
            optionRestaurante.innerText = restaurante.getName();
            // Agregamos el contenedor al elemento de restaurante
            selectRestaurante.appendChild(optionRestaurante);
        }

        //* Elemento migas de pan
        // Creamos un nuevo elemento de párrafo
        let elementoMigasPan = document.createElement("p");
        // Asignamos la clase al elemento
        elementoMigasPan.classList.add("elementoMigasPanBarraNavegacion");
        // Asignamos el texto inicial al elemento de migas de pan
        elementoMigasPan.innerText = this.migaDePanActual;
        // Agregamos el elemento a la barra de navegación
        this.barraNavegacion.appendChild(elementoMigasPan);

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
        // Llamada al metodo de actualizar migas de pan
    }

    //* Metodo para actualizar las migas de pan
    #actualizarMigasPan(texto) {
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
            // Agregamos un atributo data con el nombre del la categoria
            contenedor.setAttribute("data-categoriasinicio", categoria.categoria.getName());
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
        this.mainContenidoListado.innerHTML = "";
        // Creamos un nuevo elemento de lista
        let lista = document.createElement("ul");
        // Asignamos una clase a la fila
        lista.classList.add("ulLateralCategoria");
        // Asignamos el id al elemento de lista
        lista.id = "ulLateralCategoria";
        // Iteramos sobre el iterador de categorias
        for (const categoria of categorias) {
            // Creamos un nuevo elemento de lista
            let listaFila = document.createElement("li");
            // Asignamos una clase a la fila
            listaFila.classList.add("liLateralCategoria");
            // Agregamos el texto con el nombre de la categoria a la fila de la lista
            listaFila.innerText = categoria.categoria.getName();
            // Agregamos un atributo data con el nombre del restaurante a la opción
            listaFila.setAttribute("data-lilateralcategoria", categoria.categoria.getName());
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
        // Asignamos el atributo id a la lista
        lista.id = "ulMenuCategoria";
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
            // Asignamos el atributo personalizado al elemento de lista
            listaFila.setAttribute("data-limenucategoria", categoria.categoria.getName());
            // Agregamos la fila de la lista a la lista
            lista.appendChild(listaFila);
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
        // Asignamos el atributo id a la lista
        lista.id = "ulMenuAlergenos";
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
            // Asignamos el atributo personalizado al elemento de lista
            listaFila.setAttribute("data-limenualergenos", alergeno.getName());
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
        // Asignamos el atributo id a la lista
        lista.id = "ulMenuMenus";
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
            // Asignamos el atributo personalizado al elemento de lista
            listaFila.setAttribute("data-limenumenus", menu.menus.getName());
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
        // Añadimos un id al elemento de lista
        lista.id = "ulPlatosDescripcion";
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
            // Creamos un atributo personalizado
            listaFila.setAttribute("data-liplatodescripcion", plato.platos.getName());
            // Agregamos la fila de la lista a la lista
            lista.appendChild(listaFila);
        }
        // Agregamos el contenedor al main
        this.mainContenido.appendChild(contenedor);
    }

    //* Metodo que mostrara la descripcion del restaurante
    #restauranteDescripcion(restaurante) {
        // Limpiamos el contenido del main contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo contenedor
        let contenedorDescripcion = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedorDescripcion.classList.add("contenedorDescripcionReataurante");
        // Creamos un nuevo elemento de titulo
        let titulo = document.createElement("h1");
        // Agregamos el texto con el nombre del restaurante
        titulo.innerText = "El nombre del restaurante es: " + restaurante[0].getName();
        // Agregamos el titulo al contenedor
        contenedorDescripcion.appendChild(titulo);
        // Creamos un nuevo elemento de parrafo
        let descripcionRestaurante = document.createElement("p");
        // Agregamos el texto al parrafo con la descripcion del restaurante
        descripcionRestaurante.innerText =
            "La descripcion del restaurante es: " + restaurante[0].getDescription();
        // Agregamos el parrafo al contenedor
        contenedorDescripcion.appendChild(descripcionRestaurante);
        // Creamos un nuevo elemento de parrafo
        let localizacionRestaurante = document.createElement("p");
        // Agregamos el texto con la localizacion del restaurante
        localizacionRestaurante.innerText =
            "La localizacion del restaurante es: " + restaurante[0].getLocation();
        // Agregamos el parrafo al contenedor
        contenedorDescripcion.appendChild(localizacionRestaurante);
        // Agregamos el contenedor al main del contenido
        this.mainContenido.appendChild(contenedorDescripcion);
    }

    //* Metodo para el mostrado de los platos de la barra lateral
    #mostradoMenuLateralPlatos(platos) {
        // Limpiamos el contenido del main contenido
        this.mainContenidoListado.innerHTML = "";
        // Creamos un nuevo elemento de lista
        let lista = document.createElement("ul");
        // Añadimos un id al elemento de lista
        lista.id = "ulPlatosDescripcionLateral";
        // Asignamos una clase a la fila
        lista.classList.add("ulLateralCategoria");
        // Iteramos sobre el iterador de de platos segun la categoria
        for (const plato of platos) {
            // Creamos un nuevo elemento de lista
            let listaFila = document.createElement("li");
            // Asignamos una clase a la fila
            listaFila.classList.add("liLateralCategoria");
            // Creamos un atributo personalizado
            listaFila.setAttribute("data-liplatodescripcionlateral", plato.platos.getName());
            // Agregamos el texto con el nombre de losm platos
            listaFila.innerText = plato.platos.getName();
            // Agregamos la fila de la lista a la lista
            lista.appendChild(listaFila);
        }
        // Agregamos el contenedor al main listado
        this.mainContenidoListado.appendChild(lista);
    }

    //*Metodo para mostrar la descripcion de los platos
    #descripcionPlatos(plato) {
        // Limpiamos el contenido del main contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo contenedor
        let contenedorDescripcion = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedorDescripcion.classList.add("contenedorDescripcion");
        // Creamos un nuevo elemento de lista
        let titulo = document.createElement("h1");
        // Agregamos el texto con el nombre del plato al titulo
        titulo.innerText = "El nombre del plato es: " + plato[0].platos.getName();
        // Agregamos el titulo al contenedor
        contenedorDescripcion.appendChild(titulo);
        // Creamos un nuevo elemento de imagen
        let imagen = document.createElement("img");
        // Establecemos la ruta de la imagen
        imagen.src = plato[0].platos.getImage();
        // Agregamos el la imagen al contenedor
        contenedorDescripcion.appendChild(imagen);
        // Creamos un nuevo elemento de parrafo
        let descripcionPlato = document.createElement("p");
        // Agregamos el texto al parrafo con la descripcion del plato
        descripcionPlato.innerText =
            "La descripcion del plato es: " + plato[0].platos.getDescription();
        // Agregamos el parrafo al contenedor
        contenedorDescripcion.appendChild(descripcionPlato);
        // Creamos un nuevo elemento de parrafo
        let ingredientesPlato = document.createElement("p");
        // Agregamos el texto con los ingredientes del plato
        ingredientesPlato.innerText =
            "Los ingredientes del plato son: " + plato[0].platos.getIngredients().join(", ");
        // Agregamos el parrafo al contenedor
        contenedorDescripcion.appendChild(ingredientesPlato);
        // Agregamos el contenedor al main del contenido
        this.mainContenido.appendChild(contenedorDescripcion);
    }

    //* Metodo que nos mostrara los platos que contiene un alergeno
    #alergenosPlatos(platos) {
        // Limpiamos el contenido del main contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo contenedor
        let contenedor = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedor.classList.add("contenedorPlatosAlergenos");
        // Creamos un nuevo elemento de lista
        let lista = document.createElement("ul");
        // Añadimos un id para a este elemento
        lista.id = "ulAlergenosPlatosDescripcion";
        // Agregamos el la lista al contenedor
        contenedor.appendChild(lista);
        // Iteramos sobre el iterador dde platos que contiene el alergeno
        for (const plato of platos) {
            // Creamos un nuevo elemento de lista
            let listaFila = document.createElement("li");
            // Asignamos una clase a la fila
            listaFila.classList.add("filaPlatosAlergenos");
            // Agregamos el texto con el nombre del palto que contiene el alergeno
            listaFila.innerText = plato.platos.getName();
            // Creamos un atributo personalizado
            listaFila.setAttribute("data-lialergenosplatodescripcion", plato.platos.getName());
            // Agregamos la fila de la lista a la lista
            lista.appendChild(listaFila);
        }
        // Agregamos el contenedor al main
        this.mainContenido.appendChild(contenedor);
    }

    //* Metodo para mostrar los platos que tiene un menu
    #menuMostrarPlatos(menu) {
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
        // Iteramos sobre el array de platos
        for (const plato of menu.platos) {
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

    //?////////////////METODOS QUE LLAMA CONTROLADOR////////////////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo que se carga justo al cargar la pagina
    carga(categorias, platos, restaurantes) {
        this.#barraNavegacion(restaurantes);
        // Llamada al metodo privado de mostrar el menu lateral
        this.#mostradoMenuLateral(categorias);
        // Llamada al metodo privado de mostrar las categorias
        this.#mostradoCategoriasInicio(categorias);
        // LLamada al metodo de mostrar platos random
        this.#mostradosPlatosRandom(platos);
    }

    //* Metodo para el mostrado cuando pulsamos el boton de inicio
    inicio(categorias, platos, restaurantes) {
        this.#barraNavegacion(restaurantes);
        // Llamada al metodo privado de mostrar el menu lateral
        this.#mostradoMenuLateral(categorias);
        // Llamada al metodo privado de mostrar las categorias
        this.#mostradoCategoriasInicio(categorias);
        // LLamada al metodo de mostrar platos random
        this.#mostradosPlatosRandom(platos);
    }

    //* Metodo que mostrara las categorias
    categorias(categorias) {
        //Llamada al metodo de mostrado de categorias
        this.#mostradoCategoriasMenu(categorias);
        // Llamada al metodo privado de mostrar el menu lateral
        this.#mostradoMenuLateral(categorias);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Categorias");
    }
    //* Metodo que mostrara los alergenos
    alergenos(alergenos) {
        // LLamada al metodo de mostrar alergenos
        this.#mostradoAlergenos(alergenos);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Alergenos");
    }

    //* Metodo para el mostrado del los menus
    menus(menus) {
        // LLamada al metodo de mostrar alergenos
        this.#mostradoMenus(menus);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Menus");
    }

    //* Metodo para para el mostrado de platos
    platos(platos) {
        // Llamada al metodo para mostrar platos
        this.#mostradoPlatos(platos);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Platos");
    }

    //?//////METODOS QUE LLAMA CONTROLADOR DE ELEMENTOS DINAMICOS////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo que nos mostrara la descripcion de los restaurantes
    restauranteDescripcion(restaurante) {
        // Llamada al metodo para mostrar la descripcion del restaurante
        this.#restauranteDescripcion(restaurante);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: DescripcionRestaurante");
    }

    //* Metodo que muestra los platos que tiene una categoria
    categoriasPlatos(platosCategorias) {
        // Llamada al metodo para mostrar platos en la parte central
        this.#mostradoPlatos(platosCategorias);
        // LLamamos al metodo que muestra los platos de la categoria en el menu lateral
        this.#mostradoMenuLateralPlatos(platosCategorias);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: CategoriasPlatos");
    }

    //* Metodo que muestra la descripcion de un plato selecionado
    descripcionPlatos(plato) {
        // Llamada al metodo para mostrar la descripcion del plato
        this.#descripcionPlatos(plato);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: DescripcionPlatos");
    }

    //* Metodo que muestra los platos que contiene el alergeno
    alergenosPlatos(platos) {
        // Llamada al metodo para mostrar el plato que tiene el alergeno
        this.#alergenosPlatos(platos);
    }

    //* Metodo que nos mostrara los platos que contiene un menu
    menuMostrarPlatos(platos) {
        // Llamada al metodo para mostrar el plato que tiene el menu
        this.#menuMostrarPlatos(platos);
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

    //?////////////////METODOS PARA EL MANEJO DE EVENTOS/////////////////
    //?//////////////////////////////////////////////////////////////////
    //* Metodo para ejecutar el manejador del controlador de inicio
    manejadorInicio(manejadorInicio) {
        // Obtenemos el elemento
        let botonInicio = document.getElementById("inicio");
        // Hacemos una escucha por si se produce un evento de clic
        botonInicio.addEventListener("click", (event) => {
            // Llamamos al metodo del manejador que le pasamos como argumentos
            manejadorInicio();
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
            manejadorCategoria();
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
            manejadorAlergeno();
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
            manejadorMenu();
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
        });
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara los platos de una categoria
    manejadorCategoriasPlatosInicio(manejadorCategoriasPlatosInicio) {
        // Obtenemos los contendoderes principales a traves de su clase
        let contenedorCategorias = document.getElementsByClassName("contenedorCategorias");
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
        // Obtenemos los elementos de lista
        let ulLateralCategoria = document.getElementById("ulLateralCategoria");
        // Agregamos un event listener al elemento
        ulLateralCategoria.addEventListener("click", (event) => {
            // Llamamos al manejador al que le introducimos el atributo personalizado
            manejadorCategoriasPlatosLateral(event.target.dataset.lilateralcategoria);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: CategoriasPlatos");
            // Apilamos una entrada en el historial con el atributo personalizado
            history.pushState(
                {
                    action: "categoriasPlatos",
                    categoriaSeleccionado: event.target.dataset.lilateralcategoria,
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
        let ulMenuCategoria = document.getElementById("ulMenuCategoria");
        // Agregamos un event listener a cada elemento
        ulMenuCategoria.addEventListener("click", (event) => {
            // Llamamos al manejador al que le introducimos el atributo personalizado
            manejadorCategoriasPlatosMenu(event.target.dataset.limenucategoria);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: CategoriasPlatos");
            // Apilamos una entrada en el historial con el atributo personalizado
            history.pushState(
                {
                    action: "categoriasPlatos",
                    categoriaSeleccionado: event.target.dataset.limenucategoria,
                },
                "",
                null
            );
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara la descripcion del plato
    manejadorPlatosDescripcion(manejadorPlatosDescripcion) {
        // Obtenemos los elementos de lista
        let ulPlatosDescripcion = document.getElementById("ulPlatosDescripcion");
        // Agregamos un event listener a cada elemento
        ulPlatosDescripcion.addEventListener("click", (event) => {
            // Llamamos al manejador al que le introducimos el atributo personalizado
            manejadorPlatosDescripcion(event.target.dataset.liplatodescripcion);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: DescripcionPlatos");
            // Apilamos una entrada en el historial con el atributo personalizado
            history.pushState(
                {
                    action: "descripcionPlatos",
                    platoSeleccionado: event.target.dataset.liplatodescripcion,
                },
                "",
                null
            );
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara la descripcion de los platos
    manejadorPlatosDescripcionLateral(manejadorPlatosDescripcionLateral) {
        // Obtenemos los elementos de lista
        let ulPlatosDescripcionLateral = document.getElementById("ulPlatosDescripcionLateral");
        // Agregamos un event listener a cada elemento
        ulPlatosDescripcionLateral.addEventListener("click", (event) => {
            // Llamamos al manejador al que le introducimos el atributo personalizado
            manejadorPlatosDescripcionLateral(event.target.dataset.liplatodescripcionlateral);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: DescripcionPlatos");
            // Apilamos una entrada en el historial con el atributo personalizado
            history.pushState(
                {
                    action: "descripcionPlatos",
                    categoriaSeleccionado: event.target.dataset.liplatodescripcionlateral,
                },
                "",
                null
            );
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara los platos del alergeno
    manejadorAlergenosPlatos(manejadorAlergenosPlatos) {
        // Obtenemos los elementos de lista
        let ulMenuAlergenos = document.getElementById("ulMenuAlergenos");
        // Agregamos un event listener a cada elemento
        ulMenuAlergenos.addEventListener("click", (event) => {
            // Llamamos al manejador al que le introducimos el atributo personalizado
            manejadorAlergenosPlatos(event.target.dataset.limenualergenos);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: AlergenosPlatos");
            // Apilamos una entrada en el historial con el atributo personalizado
            history.pushState(
                {
                    action: "alergenosPlatos",
                    alergenoSeleccionado: event.target.dataset.limenualergenos,
                },
                "",
                null
            );
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }

    //* Metodo que ejecuta el manejador del controlador que mostrara los platos del menu
    manejadorMenusPlatos(manejadorMenusPlatos) {
        // Obtenemos los elementos de lista
        let ulAlergenosPlatosDescripcion = document.getElementById("ulMenuMenus");
        // Agregamos un event listener a cada elemento
        ulAlergenosPlatosDescripcion.addEventListener("click", (event) => {
            // Llamamos al manejador al que le introducimos el atributo personalizado
            manejadorMenusPlatos(event.target.dataset.limenumenus);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: MenuMostrarPlatos");
            // Apilamos una entrada en el historial con el atributo personalizado
            history.pushState(
                {
                    action: "menuMostrarPlatos",
                    menuSeleccionado: event.target.dataset.limenumenus,
                },
                "",
                null
            );
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }


    //* Metodo que ejecuta el manejador del controlador que mostrara los platos del menu
    manejadorAlergenosPlatosDescripcion(manejadorAlergenosPlatosDescripcion) {
        // Obtenemos los elementos de lista
        let ulAlergenosPlatosDescripcion = document.getElementById("ulAlergenosPlatosDescripcion");
        // Agregamos un event listener a cada elemento
        ulAlergenosPlatosDescripcion.addEventListener("click", (event) => {
            // Llamamos al manejador al que le introducimos el atributo personalizado
            manejadorAlergenosPlatosDescripcion(event.target.dataset.lialergenosplatodescripcion);
            // Llamada al metodo de actualizar migas de pan
            this.#actualizarMigasPan("Estamos en la página: DescripcionPlatos");
            // Apilamos una entrada en el historial con el atributo personalizado
            history.pushState(
                {
                    action: "descripcionPlatos",
                    platoSeleccionado: event.target.dataset.lialergenosplatodescripcion,
                },
                "",
                null
            );
            // Prevenimos el comportamiento predeterminado
            event.preventDefault();
        });
    }
}

//?///////////////////////////EXPORTACIONES//////////////////////////////
export { RestauranteVista };
