//! FUNCIONES PARA EL MOSTRADO DE ELEMENTOS DE LA PAGINA AL INICIAR////
"use strict";
//?//////FUNCION QUE MOSTRARA LA BARRA DE NAVEGACION DE LA PAGINA/////////
function barraNavegacion(barraNavegacion, migaDePanActual, restaurantes) {
    barraNavegacion.innerHTML = "";
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
    opcionGestion5.innerText = "Crear restaurante";
    // Agregamos el option al select
    selectGestion.appendChild(opcionGestion5);
    //+ Elemento option para modificar las categorias de un plato
    // Creamos un nuevo elemento option
    let opcionGestion6 = document.createElement("option");
    // Asignamos el texto al elemento
    opcionGestion6.innerText = "Categorias Platos";
    // Agregamos el option al select
    selectGestion.appendChild(opcionGestion6);
    //+ Elemento option para añadir los platos favoritos
    // Creamos un nuevo elemento option
    let opcionGestion7 = document.createElement("option");
    // Asignamos el texto al elemento
    opcionGestion7.innerText = "Platos favoritos";
    // Agregamos el option al select
    selectGestion.appendChild(opcionGestion7);
    //+ Elemento option para añadir los platos favoritos
    // Creamos un nuevo elemento option
    let opcionGestion8 = document.createElement("option");
    // Asignamos el texto al elemento
    opcionGestion8.innerText = "Backup";
    // Agregamos el option al select
    selectGestion.appendChild(opcionGestion8);

    //* Elemento que mostrara los platos favoritos
    // Creamos un nuevo elemento para los platos
    let divPlatosFavoritos = document.createElement("div");
    // Asignamos la clase al elemento
    divPlatosFavoritos.classList.add("divBarraNavegacionElementos");
    // Asignamos un texto al elemento de plato
    divPlatosFavoritos.innerText = "Favoritos";
    // Asignamos el id al elemento de platos
    divPlatosFavoritos.id = "divPlatosFavoritos";

    //* Elemento para la desconexion
    // Creamos un nuevo elemento para los platos
    let divDesconexion = document.createElement("div");
    // Asignamos la clase al elemento
    divDesconexion.classList.add("divBarraNavegacionElementos");
    // Asignamos un texto al elemento de plato
    divDesconexion.innerText = "Desconexion";
    // Asignamos el id al elemento de platos
    divDesconexion.id = "divDesconexion";

    //* Elemento migas de pan
    // Creamos un nuevo contendor
    let divMigasPan = document.createElement("div");
    // Asignamos la clase al elemento
    divMigasPan.classList.add("elementoMigasPanBarraNavegacion");
    // Creamos un nuevo elemento de parrafo
    let parrafoMigasPan = document.createElement("p");
    // Asignamos el texto inicial al elemento de migas de pan
    parrafoMigasPan.innerText = migaDePanActual;
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
    // Agregamos el elemento de favoritos al contenedor de la barra de navegacion
    divBarraNavegacion.appendChild(divPlatosFavoritos);
    // Agregamos el elemento de gestion al contenedor de la barra de navegacion
    divBarraNavegacion.appendChild(divGestion);
    // Agregamos el elemento de desconexion al contenedor de la barra de navegacion
    divBarraNavegacion.appendChild(divDesconexion);

    //** Agregado de elementos a a la barra de navegacion
    // Agregado del contenedor a la barra de navegacion
    barraNavegacion.appendChild(divBarraNavegacion);
    // Agregado del elemento migas de pan a la barra de navegacion
    barraNavegacion.appendChild(divMigasPan);
}

//?//////FUNCION QUE MOSTRARA LA BARRA DE NAVEGACION DE LA PAGINA/////////
function barraNavegacionLoginUsuario(barraNavegacion, migaDePanActual, restaurantes) {
    barraNavegacion.innerHTML = "";
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

    //* Elemento para la identificacion del usuario
    // Creamos un nuevo elemento div para la identificacion
    let divIdentificacion = document.createElement("div");
    // Asignamos la clase al elemento
    divIdentificacion.classList.add("divBarraNavegacionElementos");
    // Asignamos un texto al elemento de identificacion
    divIdentificacion.innerText = "Identificarse";
    // Asignamos el id al elemento de platos
    divIdentificacion.id = "identificarseBarra";

    //* Elemento migas de pan
    // Creamos un nuevo contendor
    let divMigasPan = document.createElement("div");
    // Asignamos la clase al elemento
    divMigasPan.classList.add("elementoMigasPanBarraNavegacion");
    // Creamos un nuevo elemento de parrafo
    let parrafoMigasPan = document.createElement("p");
    // Asignamos el texto inicial al elemento de migas de pan
    parrafoMigasPan.innerText = migaDePanActual;
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
    // Agregamos el elemento de identificacion al contenedor de la barra de navegacion
    divBarraNavegacion.appendChild(divIdentificacion);

    //** Agregado de elementos a a la barra de navegacion
    // Agregado del contenedor a la barra de navegacion
    barraNavegacion.appendChild(divBarraNavegacion);
    // Agregado del elemento migas de pan a la barra de navegacion
    barraNavegacion.appendChild(divMigasPan);
}

//?/////FUNCION QUE MOSTRARA LAS CATEGORIAS DE LA BARRA LATERAL//////////
function mostradoMenuLateral(mainContenidoListado, categorias) {
    // Limpiamos el contenido del main contenido
    mainContenidoListado.innerHTML = "";
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
    mainContenidoListado.appendChild(contenedor);
}

//?////FUNCION PARA EL MOSTRADO DE CATEGORIAS AL INICIAR LA PAGINA///////
function mostradoCategoriasInicio(mainContenido, categorias) {
    // Limpiamos el contenido del del main contenido para no duplicar elementos
    mainContenido.innerHTML = "";
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
    mainContenido.appendChild(contenedorPrincipal);
}

//?//////FUNCION QUE MOSTRARA LOS PLATOS RANDOMIZADOS AL INICIO//////////
function mostradosPlatosRandom(aside, platos) {
    // Comvertimos el iterador en un array
    let arrayPlatos = [...platos];
    // Limpiamos el contenido del aside para que no se dupliquen elementos
    aside.innerHTML = "";
    // Creamos un elemento de titulo
    let titulo = document.createElement("h2");
    // Le asignamos un texto al titulo
    titulo.innerText = "Platos";
    // Agrgamos el titulo al aside
    aside.appendChild(titulo);
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
        imagenesPlatosAside(contenedor, arrayPlatos[numeroRandom].platos);
        // Creamos un nuevo span
        let span = document.createElement("span");
        // Asignamos el texto al span
        span.innerText = arrayPlatos[numeroRandom].platos.getName();
        // Agregamos el párrafo al contenedor
        contenedor.appendChild(span);
        // Añadimos el contenedor al aside
        aside.appendChild(contenedor);
    }
}

//?//////FUNCION PARA EL MOSTRADO DE CATEGORIAS DESDE EL MENU////////////
function mostradoCategoriasMenu(mainContenido, categorias) {
    // Limpiamos el contenido del main contenido
    mainContenido.innerHTML = "";
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
    mainContenido.appendChild(contenedorPrincipalCategoriasMenu);
}

//?/////////FUNCION QUE NOS MOSTRARA LOS ALERGENOS///////////////////
function mostradoAlergenos(mainContenido, alergenos) {
    // Limpiamos el contenido del main contenido
    mainContenido.innerHTML = "";
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
    mainContenido.appendChild(contenedorPrincipal);
}

//?// FUNCION PARA EL MOSTRADO DE ALERGENOS DESDE LA BARRA LATERAL////
function mostradoMenuLateralAlergeos(mainContenidoListado, alergenos) {
    // Limpiamos el contenido del main contenido
    mainContenidoListado.innerHTML = "";
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
    mainContenidoListado.appendChild(contenedor);
}

//?///FUNCION QUE MOSTRARA LOS MENUS DESDE LA BARRA DE NAVEGACION////////
function mostradoMenus(mainContenido, menus) {
    // Limpiamos el contenido del main contenido
    mainContenido.innerHTML = "";
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
    mainContenido.appendChild(contenedorPrincipal);
}

//?////FUNCION QUE MOSTRARA LOS MENUS DEL RESTAURANTE DESDE LA BARRA LATERAL////
function mostradoMenuLateralMenu(mainContenidoListado, menus) {
    // Limpiamos el contenido del main contenido
    mainContenidoListado.innerHTML = "";
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
    mainContenidoListado.appendChild(contenedor);
}

//?//////////////FUNCION PARA EL MOSTRADO DE LOS PLATOS//////////////////
function mostradoPlatos(mainContenido, platos) {
    // Limpiamos el contenido del main contenido
    mainContenido.innerHTML = "";
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
    mainContenido.appendChild(contenedorPrincipal);
}

//?//////FUNCION PARA ELMOSTRADO DE DATOS DESDE EL MENU LATERAL//////////
function mostradoMenuLateralPlatos(mainContenidoListado, platos) {
    // Limpiamos el contenido del main contenido
    mainContenidoListado.innerHTML = "";
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
    mainContenidoListado.appendChild(contenedor);
}

//?//////FUNCION QUE NOS MOSTRARA LA DESCRIPCION DEL RESTAURANTE////
function restauranteDescripcion(mainContenido, restaurante) {
    // Limpiamos el contenido del main contenido
    mainContenido.innerHTML = "";
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
    mainContenido.appendChild(contenedorDescripcion);
}

//?///FUNCION PARA EL MUSTRADO DE LOS RESTAURANTES EN LA BARRA LATERAL////
function mostradoMenuLateralRestaurantes(mainContenidoListado, restaurantes) {
    // Limpiamos el contenido del main contenido
    mainContenidoListado.innerHTML = "";
    // Creamos un nuevo elemento contenedor
    let contenedor = document.createElement("div");
    // Añadimos un id al elemento de contenedor
    contenedor.id = "divRestaurantesDescripcionLateral";
    // Iteramos sobre el iterador de restaurantes
    for (const restaurante of restaurantes) {
        // Creamos un nuevo elemento de parrafo
        let parrafo = document.createElement("p");
        // Asignamos una clase a la fila
        parrafo.classList.add("pRestauranteDescripcionLateral");
        // Creamos un atributo personalizado
        parrafo.setAttribute("data-prestaurantedescripcionlateral", restaurante.getName());
        // Agregamos el texto con el nombre de los platos
        parrafo.innerText = restaurante.getName();
        // Agregamos el parrafo al contenedro
        contenedor.appendChild(parrafo);
    }
    // Agregamos el contenedor al main listado
    mainContenidoListado.appendChild(contenedor);
}

//?/////////FUNCION PARA MOSTRAR LA DESCRIPCION DE LOS PLATOS////////////
function descripcionPlatos(mainContenido, plato) {
    // Limpiamos el contenido del main contenido
    mainContenido.innerHTML = "";
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
    descripcionPlato.innerText = "La descripcion del plato es: " + plato[0].platos.getDescription();
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
    mainContenido.appendChild(contenedorDescripcion);
}

//?///////METODO QUE MOSTRARA LOS PLATOS QUE TIENE UN ALERGENO///////////
function alergenosPlatos(mainContenido, platos) {
    // Limpiamos el contenido del main contenido
    mainContenido.innerHTML = "";
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
    mainContenido.appendChild(contenedorPrincipal);
}

//?///MOSTRADO DE IMAGENES DE FONDO EN LOS PLATOS RANDOM DEL ASIDE////////
function imagenesPlatosAside(contenedor, platos) {
    // Agregamos la imagen de fondo que obtenemosj de la propiedad platos
    contenedor.style.backgroundImage = "url('" + platos.getImage() + "')";
}

//?///////////////////EXPORTACIONES DE LA CLASE//////////////////////////
export {
    barraNavegacion,
    barraNavegacionLoginUsuario,
    mostradoMenuLateral,
    mostradoCategoriasInicio,
    mostradosPlatosRandom,
    mostradoCategoriasMenu,
    mostradoAlergenos,
    mostradoMenuLateralAlergeos,
    mostradoMenus,
    mostradoMenuLateralMenu,
    mostradoPlatos,
    mostradoMenuLateralPlatos,
    restauranteDescripcion,
    descripcionPlatos,
    alergenosPlatos,
    mostradoMenuLateralRestaurantes,
};
