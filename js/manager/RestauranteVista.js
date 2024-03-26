//!//////////////////////////CLASE RESTAURANTEVISTA//////////////////////
"use strict";

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

        //* Elemento para la gestion del restaurante
        // Creamos un nuevo contenedor para la gestio
        let divGestion = document.createElement("div");
        // Creamos un nuevo elemento select
        let selectGestion = document.createElement("select");
        // Asignamos la clase al elemento option
        selectGestion.classList.add("selectBarraNavegacionRestaurante");
        // Asignamos un id a la select
        selectGestion.id = "selectBarraNavegacionGestion";
        // Agregamos la select al contenedor del restaurante
        divGestion.appendChild(selectGestion);
        //+ Elemento opcion gestion que estara desactivado
        // Creamos un nuevo elemento option
        let opcionGestion = document.createElement("option");
        // Asignamos el texto al elemento
        opcionGestion.innerText = "Gestion";
        // Desactivamos la opcion inicial para que nos sea una opcion
        opcionGestion.disabled = true;
        // Seleccionamos esta opcion por defecto
        opcionGestion.selected = true;
        // Agregamos el option al select
        selectGestion.appendChild(opcionGestion);
        //+ Elemento opcion para crear plato
        // Creamos un nuevo elemento option
        let opcionGestion1 = document.createElement("option");
        // Asignamos el texto al elemento
        opcionGestion1.innerText = "Crear Plato";
        // Agregamos el option al select
        selectGestion.appendChild(opcionGestion1);
        //+ Elemento option para eliminar el plato
        // Creamos un nuevo elemento option
        let opcionGestion2 = document.createElement("option");
        // Asignamos el texto al elemento
        opcionGestion2.innerText = "Eliminar plato";
        // Agregamos el option al select
        selectGestion.appendChild(opcionGestion2);
        //+ Elemento option para administrar platos
        // Creamos un nuevo elemento option
        let opcionGestion3 = document.createElement("option");
        // Asignamos el texto al elemento
        opcionGestion3.innerText = "Administrar Platos";
        // Agregamos el option al select
        selectGestion.appendChild(opcionGestion3);
        //+Elemento option para administrar categorias
        // Creamos un nuevo elemento option
        let opcionGestion4 = document.createElement("option");
        // Asignamos el texto al elemento
        opcionGestion4.innerText = "Administrar Categorias";
        // Agregamos el option al select
        selectGestion.appendChild(opcionGestion4);
        //+ Elemento option para crear restaurantes
        // Creamos un nuevo elemento option
        let opcionGestion5 = document.createElement("option");
        // Asignamos el texto al elemento
        opcionGestion5.innerText = "Administrar Platos";
        // Agregamos el option al select
        selectGestion.appendChild(opcionGestion5);
        //+ Elemento option para modificar las categorias de un plato
        // Creamos un nuevo elemento option
        let opcionGestion6 = document.createElement("option");
        // Asignamos el texto al elemento
        opcionGestion6.innerText = "Categorias Platos";
        // Agregamos el option al select
        selectGestion.appendChild(opcionGestion6);

        //* Elemento migas de pan
        // Creamos un nuevo contendor
        let divMigasPan = document.createElement("div");
        // Asignamos la clase al elemento
        divMigasPan.classList.add("elementoMigasPanBarraNavegacion");
        // Creamos un nuevo elemento de parrafo
        let parrafoMigasPan = document.createElement("p");
        // Asignamos el texto inicial al elemento de migas de pan
        parrafoMigasPan.innerText = this.migaDePanActual;
        // Agregamos el elemento a la barra de navegacion
        divMigasPan.appendChild(parrafoMigasPan);

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
        // Agregamos el elemento de gestion al contenedor de la barra de navegacion
        divBarraNavegacion.appendChild(divGestion);

        //** Agregado de elementos a a la barra de navegacion
        // Agregado del contenedor a la barra de navegacion
        this.barraNavegacion.appendChild(divBarraNavegacion);
        // Agregado del elemento migas de pan a la barra de navegacion
        this.barraNavegacion.appendChild(divMigasPan);
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
        // Creamos un contenedor principal
        let contenedorPrincipal = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedorPrincipal.classList.add("contenedorCategorias");
        // Recorremos el array de categorias
        for (const categoria of categorias) {
            // Creamos un nuevo contenedor div
            let contenedor = document.createElement("div");
            // Asignamos una clase al contenedor
            contenedor.classList.add("conenedorImagenBack");
            // Agregamos un atributo data con el nombre del la categoria
            contenedor.setAttribute("data-categoriasinicio", categoria.categoria.getName());
            // Establecemos el backgroun del contenedorcon una imagen de la categoria
            contenedor.style.backgroundImage = `url('${categoria.categoria.getImageUrl()}')`;
            // Creamos un nuevo elemento span
            const span = document.createElement("span");
            // Modificamos texto del expan con el nombre de la categoria
            span.innerText = categoria.categoria.getName();
            // Agregamos el span en el contenedor
            contenedor.appendChild(span);
            // Agregar el contenedor al contenedor principal
            contenedorPrincipal.appendChild(contenedor);
        }
        // Agregamos el contenedor principal al main contenido
        this.mainContenido.appendChild(contenedorPrincipal);
    }

    //* Metodo para el mostrado de las categorias de la barra lateral
    #mostradoMenuLateral(categorias) {
        // Limpiamos el contenido del main contenido
        this.mainContenidoListado.innerHTML = "";
        // Creamos un nuevo elemento contenedor
        let contenedor = document.createElement("div");
        // Asignamos el id al elemento contenedor
        contenedor.id = "divLateralCategoria";
        // Iteramos sobre el iterador de categorias
        for (const categoria of categorias) {
            // Creamos un nuevo elemento de parrafo
            let parrafo = document.createElement("p");
            // Asignamos una clase a la clase al elemento de parrafo
            parrafo.classList.add("pLateralCategoria");
            // Agregamos el texto con el nombre de la categoria al elemento de parrafo
            parrafo.innerText = categoria.categoria.getName();
            // Agregamos un atributo data con el nombre de la categoria
            parrafo.setAttribute("data-plateralcategoria", categoria.categoria.getName());
            // Agregamos la fila de la lista a la lista
            contenedor.appendChild(parrafo);
        }
        // Agregamos el contenedor al main listado
        this.mainContenidoListado.appendChild(contenedor);
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
        let contenedorPrincipalCategoriasMenu = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedorPrincipalCategoriasMenu.classList.add("contenedorPrincipalCategoriasMenu");
        // Iteramos sobre las categorias
        for (const categoria of categorias) {
            // Creamos un nuevo contenedor
            let contenedorCategoriasMenu = document.createElement("div");
            // Asignamos una clase al contenedor
            contenedorCategoriasMenu.classList.add("contenedorCategoriasMenu");
            // Creamos un atributo personalizado
            contenedorCategoriasMenu.setAttribute(
                "data-contenedorcategoriasmenu",
                categoria.categoria.getName()
            );
            // Creamos un elemento de parrafo
            let nombreCategoria = document.createElement("p");
            // Agregamos el texto con el nombre de la categoria
            nombreCategoria.innerText = categoria.categoria.getName();
            // Creamos un nuevo elemento de imagen
            let imagen = document.createElement("img");
            // Establecemos la ruta de la imagen
            imagen.src = categoria.categoria.getImageUrl();
            // Agregamos el parrafo al contenedor de de categorias
            contenedorCategoriasMenu.appendChild(nombreCategoria);
            // Agregamos la imagen al contenedor de categorias
            contenedorCategoriasMenu.appendChild(imagen);
            // Agregamos el contener de categorias al conenedor principal
            contenedorPrincipalCategoriasMenu.appendChild(contenedorCategoriasMenu);
        }
        // Agregamos el contenedor principal al main contenido
        this.mainContenido.appendChild(contenedorPrincipalCategoriasMenu);
    }

    //* Metodo para el mostrado de alergenos
    #mostradoAlergenos(alergenos) {
        // Limpiamos el contenido del main contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo elemento div
        let contenedorPrincipal = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedorPrincipal.classList.add("contenedorPrincipalAlergenos");
        // Iteramos sobre el iterador de alergenos
        for (const alergeno of alergenos) {
            // Creamos un nuevo contenedor
            let contenedorAlergenos = document.createElement("div");
            // Asignamos una clase al contenedor
            contenedorAlergenos.classList.add("contenedorAlergenos");
            // Creamos un atributo personalizado
            contenedorAlergenos.setAttribute("data-contenedoralergenos", alergeno.getName());
            // Creamos un elemento de parrafo
            let nombreAlergeno = document.createElement("p");
            // Agregamos el texto con el nombre del alergeno al parrafo
            nombreAlergeno.innerText = alergeno.getName();
            // Creamos un nuevo elemento de imagen
            let imagen = document.createElement("img");
            // Establecemos la ruta de la imagen
            imagen.src = alergeno.getImageUrl();
            // Agregamos el parrafo al contenedor de alergenos
            contenedorAlergenos.appendChild(nombreAlergeno);
            // Agregamos la imagen al contenedor de alergenos
            contenedorAlergenos.appendChild(imagen);
            // Agregamos el contener de alergenos al conenedor principal
            contenedorPrincipal.appendChild(contenedorAlergenos);
        }
        // Agregamos el contenedor principal al main contenido
        this.mainContenido.appendChild(contenedorPrincipal);
    }

    //* Metodo para el mostrado de alergenos de la barra lateral
    #mostradoMenuLateralAlergeos(alergenos) {
        // Limpiamos el contenido del main contenido
        this.mainContenidoListado.innerHTML = "";
        // Creamos un nuevo elemento contenedor
        let contenedor = document.createElement("div");
        // Añadimos un id al elemento de contenedor
        contenedor.id = "divAlegenosPlatosLateral";
        // Iteramos sobre el iterador de alergenos segun
        for (const alergeno of alergenos) {
            // Creamos un nuevo elemento de parrafo
            let parrafo = document.createElement("p");
            // Asignamos una clase a la fila
            parrafo.classList.add("pAlegenosPlatosLateral");
            // Creamos un atributo personalizado
            parrafo.setAttribute("data-pAlegenosPlatosLateral", alergeno.getName());
            // Agregamos el texto con el nombre de los platos
            parrafo.innerText = alergeno.getName();
            // Agregamos el parrafo al contenedro
            contenedor.appendChild(parrafo);
        }
        // Agregamos el contenedor al main listado
        this.mainContenidoListado.appendChild(contenedor);
    }

    //!/////////////////////////////////////////////////////////////////
    //!///////////////////////////////////////////////////////////////////
    //* Metodo para el mostrado de los menus desde la barra de navegacion
    #mostradoMenus(menus) {
        // Limpiamos el contenido del main contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo elemento div
        let contenedorPrincipal = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedorPrincipal.classList.add("contenedorMenuPrincipal");
        // Iteramos sobre el iterador de menus
        for (const menu of menus) {
            // Creamos un nuevo contenedor
            let contenedorMenu = document.createElement("div");
            // Asignamos una clase al contenedor
            contenedorMenu.classList.add("contenedorMenu");
            // Creamos un atributo personalizado
            contenedorMenu.setAttribute("data-contenedorMenu", menu.menus.getName());
            // Creamos un elemento de parrafo
            let nombreMenu = document.createElement("p");
            // Agregamos el texto con el nombre del menu al parrafo
            nombreMenu.innerText = menu.menus.getName();
            // Creamos un nuevo elemento de imagen
            let imagen = document.createElement("img");
            // Establecemos la ruta de la imagen
            imagen.src = menu.menus.getImageUrl();
            // Agregamos el parrafo al contenedor
            contenedorMenu.appendChild(nombreMenu);
            // Agregamos la imagen al contenedor
            contenedorMenu.appendChild(imagen);
            // Agregamos el contener de platos al conenedor principal
            contenedorPrincipal.appendChild(contenedorMenu);
        }
        // Agregamos el contenedor principal al cmontenido
        this.mainContenido.appendChild(contenedorPrincipal);
    }

    //!///////////////////////////////////////////////////////////////////
    //!///////////////////////////////////////////////////////////////////
    //* Metodo para el mostrado de los menus del restaurnate de la barra lateral
    #mostradoMenuLateralMenu(menus) {
        // Limpiamos el contenido del main contenido
        this.mainContenidoListado.innerHTML = "";
        // Creamos un nuevo elemento contenedor
        let contenedor = document.createElement("div");
        // Añadimos un id al elemento de contenedor
        contenedor.id = "divMenuLateralMenus";
        // Iteramos sobre el iterador de menus segun
        for (const menu of menus) {
            // Creamos un nuevo elemento de parrafo
            let parrafo = document.createElement("p");
            // Asignamos una clase a la fila
            parrafo.classList.add("pMenuLateralMenus");
            // Creamos un atributo personalizado
            parrafo.setAttribute("data-pmenulateralmenu", menu.menus.getName());
            // Agregamos el texto con el nombre de los menus
            parrafo.innerText = menu.menus.getName();
            // Agregamos el parrafo al contenedro
            contenedor.appendChild(parrafo);
        }
        // Agregamos el contenedor al main listado
        this.mainContenidoListado.appendChild(contenedor);
    }

    //* Metodo para mostrar los platos
    #mostradoPlatos(platos) {
        // Limpiamos el contenido del main contenido
        this.mainContenido.innerHTML = "";
        // Creamos un nuevo elemento div
        let contenedorPrincipal = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedorPrincipal.classList.add("contenedorPlatosPrincipal");
        // Iteramos sobre el iterador de platos
        for (const plato of platos) {
            // Creamos un nuevo contenedor
            let contenedorPlatos = document.createElement("div");
            // Asignamos una clase al contenedor
            contenedorPlatos.classList.add("contenedorPlatos");
            // Creamos un atributo personalizado
            contenedorPlatos.setAttribute("data-divplatodescripcion", plato.platos.getName());
            // Creamos un elemento de parrafo
            let nombrePlato = document.createElement("p");
            // Agregamos el texto con el nombre del plato al parrafo
            nombrePlato.innerText = plato.platos.getName();
            // Creamos un nuevo elemento de imagen
            let imagen = document.createElement("img");
            // Establecemos la ruta de la imagen
            imagen.src = plato.platos.getImage();
            // Agregamos el parrafo al contenedor de platos
            contenedorPlatos.appendChild(nombrePlato);
            // Agregamos la imagen al contenedor de platos
            contenedorPlatos.appendChild(imagen);
            // Agregamos el contener de platos al conenedor principal
            contenedorPrincipal.appendChild(contenedorPlatos);
        }
        // Agregamos el contenedor principal al cmontenido
        this.mainContenido.appendChild(contenedorPrincipal);
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
        // Creamos un nuevo elemento contenedor
        let contenedor = document.createElement("div");
        // Añadimos un id al elemento de contenedor
        contenedor.id = "divPlatosDescripcionLateral";
        // Iteramos sobre el iterador de platos segun la categoria
        for (const plato of platos) {
            // Creamos un nuevo elemento de parrafo
            let parrafo = document.createElement("p");
            // Asignamos una clase a la fila
            parrafo.classList.add("pPlatosDescripcionLateral");
            // Creamos un atributo personalizado
            parrafo.setAttribute("data-pplatosdescripcionLateral", plato.platos.getName());
            // Agregamos el texto con el nombre de los platos
            parrafo.innerText = plato.platos.getName();
            // Agregamos el parrafo al contenedro
            contenedor.appendChild(parrafo);
        }
        // Agregamos el contenedor al main listado
        this.mainContenidoListado.appendChild(contenedor);
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
        // Creamos un nuevo elemento div
        let contenedorPrincipal = document.createElement("div");
        // Asignamos una clase al contenedor
        contenedorPrincipal.classList.add("contenedorPrincipalAlergenosPlatosDescripcion");
        // Iteramos sobre el iterador de platos
        for (const plato of platos) {
            // Creamos un nuevo contenedor
            let contenedorPlatos = document.createElement("div");
            // Asignamos una clase al contenedor
            contenedorPlatos.classList.add("contenedorAlergenosPlatosDescripcion");
            // Creamos un atributo personalizado
            contenedorPlatos.setAttribute(
                "data-contenedoralergenosplatosdescripcion",
                plato.platos.getName()
            );
            // Creamos un elemento de parrafo
            let nombrePlato = document.createElement("p");
            // Agregamos el texto con el nombre del plato al parrafo
            nombrePlato.innerText = plato.platos.getName();
            // Creamos un nuevo elemento de imagen
            let imagen = document.createElement("img");
            // Establecemos la ruta de la imagen
            imagen.src = plato.platos.getImage();
            // Agregamos el parrafo al contenedor de platos
            contenedorPlatos.appendChild(nombrePlato);
            // Agregamos la imagen al contenedor de platos
            contenedorPlatos.appendChild(imagen);
            // Agregamos el contener de platos al conenedor principal
            contenedorPrincipal.appendChild(contenedorPlatos);
        }
        // Agregamos el contenedor principal al cmontenido
        this.mainContenido.appendChild(contenedorPrincipal);
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
        // Llamada al metodo privado de mostrar el menu lateral inicial
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
        // Llamada al metodo privado de mostrar la categoria en el lateral
        this.#mostradoMenuLateral(categorias);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Categorias");
    }
    //* Metodo que mostrara los alergenos
    alergenos(alergenos) {
        // LLamada al metodo de mostrar alergenos
        this.#mostradoAlergenos(alergenos);
        // llamada al metodo privado que mostrara el alergeno en el lateral
        this.#mostradoMenuLateralAlergeos(alergenos);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Alergenos");
    }

    //* Metodo para el mostrado del los menus
    menus(menus) {
        // LLamada al metodo de mostrar alergenos
        this.#mostradoMenus(menus);
        // LLamada al metodo que muestra los menus en el lateral
        this.#mostradoMenuLateralMenu(menus);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: Menus");
    }

    //* Metodo para para el mostrado de platos
    platos(platos) {
        // LLamamos al metodo que muestra los platos en el menu lateral
        this.#mostradoMenuLateralPlatos(platos);
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
        // LLamamos al metodo que muestra los platos del menu lateral qu contiene el alergeno
        this.#mostradoMenuLateralPlatos(platos);
        // Llamada al metodo para mostrar el plato que tiene el alergeno
        this.#alergenosPlatos(platos);
        // Actualizamos las migas de pan
        this.#actualizarMigasPan("Estamos en la pagina: AlergenosPlatos");
    }

    //* Metodo que nos mostrara los platos que contiene un menu
    menuMostrarPlatos(platos) {
        // Llamada al metodo para mostrar el plato que tiene el menu
        this.#mostradoPlatos(platos);
        // Llamada al metodo para mostrar los platos que tiene en menu en el latera
        this.#mostradoMenuLateralPlatos(platos);
    }

    //?//////////////////METODOS PARA EL CAMBIO DE ESTILOS///////////////
    //?//////////////////////////////////////////////////////////////////
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
        console.log("hola");
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








    ///pMenuLateralMenus
}

//?///////////////////////////EXPORTACIONES//////////////////////////////
export { RestauranteVista };
