//!///////////////FUNCIONES PARA EL MOSTRADO DE FORMULARIOS/////////////
"use strict";

//?////FUNCION QUE MOSTRARA UN FORMULARIO PARA  LA CREACION DE PLATOS////
function nuevoPlato(mainContenido, categorias, alergenos) {
    // Borramos el contenido del contenido principal
    mainContenido.innerHTML = "";

    //+ Creamos un nuevo elemento de formulario
    let formulariCrearPlato = document.createElement("form");
    // Asisnamos el atributo name al elemento
    formulariCrearPlato.name = "formularioCrearPlato";
    // Asisnamos el atributo id al elemento form
    formulariCrearPlato.id = "formularioCrearPlato";
    // Asignamos la clase al formulario
    formulariCrearPlato.className = "formularioCrearPlato";

    //+ Creamos un elemento parrafo para el nombre
    let parrafoNombrePlato = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoNombrePlato.innerText = "Introduzca el nombre del plato";

    //+ Creamos un elemento input para el nombre
    let inputNombrePlato = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputNombrePlato.name = "nombrePlatoCreacion";
    // Establecemos el tipo del input
    inputNombrePlato.type = "text";
    // Asignamos la clase al elemento de texto
    inputNombrePlato.className = "inputTextFormulario";

    //+ Creamos un elemento parrafo para la imagen
    let parrafoImagenPlato = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoImagenPlato.innerText = "Introduzca la url de la imagen";

    //+ Creamos un elemento input para la imagen
    let inputImagenPlato = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputImagenPlato.name = "urlImagenCreacion";
    // Establecemos el tipo del input
    inputImagenPlato.type = "text";
    // Asignamos la clase al elemento de texto
    inputImagenPlato.className = "inputTextFormulario";

    //+ Creamos un elemento parrafo para la descripcion
    let parrafoDescripcionPlato = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoDescripcionPlato.innerText = "Introduzca la descripcion del plato";

    //+ Creamos un elemento input para la descipcion
    let inputDescripcionPlato = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputDescripcionPlato.name = "descripcionPlatoCreacion";
    // Agregamos el tipo del imput
    inputDescripcionPlato.type = "textarea";
    // Asignamos el texto de muesta
    inputDescripcionPlato.placeholder = "Ej: Es una delicia casera...";
    // Asignamos la clase al elemento de texto
    inputDescripcionPlato.className = "inputTextAreaFormulario";

    //+ Creamos un elemento parrafo para los ingredientes
    let parrafoIngredientesPlatos = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoIngredientesPlatos.innerText =
        "Introduzca los ingredientes del plato separados por comas";

    //+ Creamos un elemento input para los ingredientes
    let inputIngredientesPlatos = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputIngredientesPlatos.name = "ingredientesPlatoCreacion";
    // Asignamos el tipo del input
    inputIngredientesPlatos.type = "textarea";
    // Asignamos el texto de fondo
    inputIngredientesPlatos.placeholder = "Ingrediente1, Ingrediente2, ...";
    // Asignamos la clase al elemento de texto
    inputIngredientesPlatos.className = "inputTextAreaFormulario";

    //+ Creamos un elemento parrafo para la seleccion de categorias
    let parrafoSeleccionCategorias = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoSeleccionCategorias.innerText = "Seleccione la categoria a la que pertenece el plato";

    //+ Creamos una tabla para mostrar las categorias
    let tablaCategorias = document.createElement("table");
    // Le asignamos la clase a la tabla
    tablaCategorias.className = "tablaFormularios";
    // Asignamos el atributo name a la tabla
    tablaCategorias.name = "tablaCategorias";
    // Recorremos el iterador de categorias
    for (const categoria of categorias) {
        // Creamos una nueva fila para la tabla
        let fila = document.createElement("tr");
        // Creamos una celda para el checkbox
        let celdaCheckbox = document.createElement("td");
        // Creamos el checkbox
        let checkbox = document.createElement("input");
        // Asignamos el atributo type al elemento
        checkbox.type = "checkbox";
        // Asignamos el atributo name a los elementos
        checkbox.name = "checkboxCategoriasCrear";
        // Agregamos el checkbox a la celda
        celdaCheckbox.appendChild(checkbox);
        // Creamos una celda para el nombre de la categoria
        let celdaNombreCategoria = document.createElement("td");
        // Creamos un texto con el nombre de la categoria
        let nombreCategoriaTexto = document.createTextNode(categoria.categoria.getName());
        // Agregamos el texto a la celda
        celdaNombreCategoria.appendChild(nombreCategoriaTexto);
        // Agregamos el checkbox a la fila
        fila.appendChild(celdaCheckbox);
        // El nombre de la categoria a la fila
        fila.appendChild(celdaNombreCategoria);
        // Agregamos a laj tabla la fila
        tablaCategorias.appendChild(fila);
    }

    //+ Creamos un elemento parrafo para la seleccion de los alergenos
    let parrafoSeleccionAlergenos = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoSeleccionAlergenos.innerText = "Seleccione los alergenos a los que pertenece el plato";

    //+ Creamos una tabla para mostrar los alergenos
    let tablaAlergenos = document.createElement("table");
    // Le asignamos la clase a la tabla
    tablaAlergenos.className = "tablaFormularios";
    // Asignamos el atributo name a la tabla
    tablaAlergenos.name = "tablaAlergenos";
    // Recorremos el iterador de alergenos
    for (const alergeno of alergenos) {
        // Creamos una nueva fila para la tabla
        let fila = document.createElement("tr");
        // Creamos una celda para el checkbox
        let celdaCheckbox = document.createElement("td");
        // Creamos el checkbox
        let checkbox = document.createElement("input");
        // Asignamos el atributo type al elemento
        checkbox.type = "checkbox";
        // Asignamos el atributo name a los elementos
        checkbox.name = "checkboxAlergenos";
        // Agregamos el checkbox a la celda
        celdaCheckbox.appendChild(checkbox);
        // Creamos una celda para el nombre de los alergenos
        let celdaNombreAlergeno = document.createElement("td");
        // Creamos un texto con el nombre de los alergenos
        let nombreAlergenoTexto = document.createTextNode(alergeno.getName());
        // Agregamos el texto a la celda
        celdaNombreAlergeno.appendChild(nombreAlergenoTexto);
        // Agregamos el checkbox a la fila
        fila.appendChild(celdaCheckbox);
        // El nombre de los alergenos a la fila
        fila.appendChild(celdaNombreAlergeno);
        // Agregamos a la tabla la fila
        tablaAlergenos.appendChild(fila);
    }

    //+ Creamos un elemento boton para el boton de enviar
    let botonCrearPlato = document.createElement("button");
    // Asignamos el texto al boton
    botonCrearPlato.innerHTML = "Crear Plato";
    // Asignamos el atributo name al boton
    botonCrearPlato.name = "botonCrearPlato";
    // Asignamos la clase al boton de enviar
    botonCrearPlato.className = "inputButtonFormulario";
    // Asignamos el tipo al boton
    botonCrearPlato.type = "submit";

    //+ Agregaciones de los elementos al formulario
    // Agregamos el parrafo para el nombre
    formulariCrearPlato.appendChild(parrafoNombrePlato);
    // Agregamos el input del nombre del plato
    formulariCrearPlato.appendChild(inputNombrePlato);
    // Agregamos el parrafo para la imagen
    formulariCrearPlato.appendChild(parrafoImagenPlato);
    // Agregamos el input para la imagen
    formulariCrearPlato.appendChild(inputImagenPlato);
    // Agregamos el parrafo para la descripcion
    formulariCrearPlato.appendChild(parrafoDescripcionPlato);
    // Agregamos el textarea para la descripcion
    formulariCrearPlato.appendChild(inputDescripcionPlato);
    // Agregamos el parrafo para los ingredientes
    formulariCrearPlato.appendChild(parrafoIngredientesPlatos);
    // Agregamos el texarea para los ingredientes
    formulariCrearPlato.appendChild(inputIngredientesPlatos);
    // Agregamos la etiqueta para las categorias
    formulariCrearPlato.appendChild(parrafoSeleccionCategorias);
    // Agregamos la tabla de categoria al formulario
    formulariCrearPlato.appendChild(tablaCategorias);
    // Agregamos la etiqueta para los alergenos
    formulariCrearPlato.appendChild(parrafoSeleccionAlergenos);
    // Agregamos la tabla de categorias al formulario
    formulariCrearPlato.appendChild(tablaAlergenos);
    // Agregamos el boton de enviar
    formulariCrearPlato.appendChild(botonCrearPlato);

    //+ Agregamos el formulario al contenido principal
    mainContenido.appendChild(formulariCrearPlato);
}

//?/////FUNCION QUE MOSTRARA EL FORMULARIO PARA ELIMINAR LOS PLATOS//////
function eliminarPlato(mainContenido, platos) {
    // Borramos el contenido del main contenido
    mainContenido.innerHTML = "";

    //+ Creamos un nuevo elemento de formulario
    let formulariEliminarPlato = document.createElement("form");
    // Asisnamos el atributo name al elemento
    formulariEliminarPlato.name = "formularioEliminarPlato";
    // Asignamos la clase al formulario
    formulariEliminarPlato.className = "formularioEliminarPlato";

    //+ Creamos un elemento de titulo para los platos
    let tituloEliminarPlatos = document.createElement("h3");
    // Asignamos el texto a la etiqueta
    tituloEliminarPlatos.innerText = "Seleccione el plato que desea eliminar";

    //+ Creamos un contenedor div para los radio botones
    let radioPlatosContainer = document.createElement("div");
    // Asignamos una clase al contenedor
    radioPlatosContainer.className = "radioBotonesContenedorFormulario";
    // Recorremos el iterador de platos
    for (const plato of platos) {
        // Creamos un nuevo elemento input
        let radioPlato = document.createElement("input");
        // Asignamos el tipo del input como radio
        radioPlato.type = "radio";
        // Asignamos el atributo name al radio boton
        radioPlato.name = "platoSeleccionado";
        // Asignamos el valor del radio button con el nombre del plato
        radioPlato.value = plato.platos.getName();
        // Creamos un nuevo elemento span para asociarlo con el radio button
        let spanPlato = document.createElement("span");
        // Asignamos el texto al label con el nombre del plato
        spanPlato.innerText = plato.platos.getName();
        // Añadimos el radio button al contenedor principal
        radioPlatosContainer.appendChild(radioPlato);
        // Añadimos la etiqueta al contenedor principal
        radioPlatosContainer.appendChild(spanPlato);
    }

    //+ Creamos un elemento boton para el boton de eliminar plato
    let botonEliminarPlato = document.createElement("button");
    // Asignamos el texto al boton
    botonEliminarPlato.innerHTML = "Eliminar";
    // Asignamos la clase al boton de enviar
    botonEliminarPlato.className = "inputButtonFormularioEliminarPlatos";
    // Asignamos el tipo al boton
    botonEliminarPlato.type = "submit";

    //+ Agregamos el titulo al formulario
    formulariEliminarPlato.appendChild(tituloEliminarPlatos);
    // Agregamos el contenedor al formulario
    formulariEliminarPlato.appendChild(radioPlatosContainer);
    // Agregamos el boton de eliminar plato
    formulariEliminarPlato.appendChild(botonEliminarPlato);

    //+ Agregamos el formulario al main contenido
    mainContenido.appendChild(formulariEliminarPlato);
}

//?////FUNCION QUE MOSTRARA UN FORMULARIO PARA ADMINISTRAR LOS PLATOS EN LOS MENUS////
function administrarPlatos(mainContenido, menus, platos) {
    // Borramos los elementos del main contenido
    mainContenido.innerHTML = "";

    //+ Creacion de un elemento div para la administracion de datos
    let administrarPlatosDiv = document.createElement("div");
    // Asignamos la clase al elemento
    administrarPlatosDiv.className = "contenedorAdministracionPlatosFormulario";

    //+ Creacion de un elemento div para la asignacion de platos al menu
    //- Creacion de un elemento div para la asignacion de platos al menu
    let asignarPlatosDiv = document.createElement("div");
    // Agregamos la clase al contenedor
    asignarPlatosDiv.className = "contenedorAdministracionPlatosDiv";

    //- Creamos un elemento de titulo para la asignacion de los platos
    let tituloAsignarPlatos = document.createElement("h3");
    // Asignamos el texto a la etiqueta
    tituloAsignarPlatos.innerText = "Asignacion de platos al menu";

    //- Creamos un nuevo elemento de formulario
    let formularioAsignarPlatoMenu = document.createElement("form");
    // Asisnamos el atributo name al elemento
    formularioAsignarPlatoMenu.name = "formularioAsignacionPlatoMenu";
    // Asignamos la clase al alemento form
    formularioAsignarPlatoMenu.className = "formularioAsignacionPlatoMenu";

    //- Creamos un elemento de titulo para la seleccion de los menus
    let tituloSeleccionMenuAsignacion = document.createElement("h4");
    // Asignamos el texto a la etiqueta
    tituloSeleccionMenuAsignacion.innerText = "Escoja el menu al que quiere asignar el plato";

    //- Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesMenusAsignacion = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesMenusAsignacion.className = "radioBotonesContenedorFormulario";
    // Recorremos el iterador de menus
    for (const menu of menus) {
        //- Creamos un nuevo elemento input
        let radiomenu = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radiomenu.type = "radio";
        // Asignamos el atributo name al radio boton
        radiomenu.name = "menuAsignadoSeleccionado";
        // Asignamos el valor del radio button con el nombre del menu
        radiomenu.value = menu.menus.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanMenu = document.createElement("span");
        // Asignamos el texto al span con el nombre del menu
        spanMenu.innerText = menu.menus.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesMenusAsignacion.appendChild(radiomenu);
        // Añadimos el span del radioboton al formulario
        contenedorRadiobotonesMenusAsignacion.appendChild(spanMenu);
    }

    //- Creamos un elemento de titulo para la seleccion de los platos
    let tituloSeleccionPlatoAsignacion = document.createElement("h4");
    // Asignamos el texto a la etiqueta
    tituloSeleccionPlatoAsignacion.innerText = "Escoja el plato que quiere asignar al menu";

    //- Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesPlatosAsignacion = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesPlatosAsignacion.className = "radioBotonesContenedorFormulario";
    // Recorremos el iterador de platos
    for (const plato of platos) {
        //- Creamos un nuevo elemento input
        let radioBoton = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radioBoton.type = "radio";
        // Asignamos el atributo name al radio boton
        radioBoton.name = "platoAsignadoSeleccionado";
        // Asignamos el valor del radio button con el nombre
        radioBoton.value = plato.platos.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanBoton = document.createElement("span");
        // Asignamos el texto al span con el nombre del menu
        spanBoton.innerText = plato.platos.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesPlatosAsignacion.appendChild(radioBoton);
        // Añadimos el span del radioboton al formulario
        contenedorRadiobotonesPlatosAsignacion.appendChild(spanBoton);
    }

    //- Creamos un elemento boton para asignar el plato
    let botonAsignarPlato = document.createElement("button");
    // Asignamos el texto al boton
    botonAsignarPlato.innerHTML = "Asignar";
    // Asignamos la clase al boton de enviar
    botonAsignarPlato.className = "inputButtonFormularioEliminarPlatos";
    // Asignamos el tipo al boton
    botonAsignarPlato.type = "submit";

    //- Agregacion de elementos al formulario
    // Agregacion del elemento de titulo al formulario
    formularioAsignarPlatoMenu.appendChild(tituloSeleccionMenuAsignacion);
    // Agregamos el contenedor de radiobotones al formulario
    formularioAsignarPlatoMenu.appendChild(contenedorRadiobotonesMenusAsignacion);
    // Agregacion del elemento de titulo al formulario
    formularioAsignarPlatoMenu.appendChild(tituloSeleccionPlatoAsignacion);
    // Agregamos el contenedor de radiobotones al formulario
    formularioAsignarPlatoMenu.appendChild(contenedorRadiobotonesPlatosAsignacion);
    // Agregamos el contenedor de radiobotones al formulario
    formularioAsignarPlatoMenu.appendChild(botonAsignarPlato);

    //- Agregacion del titulo al contenedor principal
    asignarPlatosDiv.appendChild(tituloAsignarPlatos);
    // Agregamos el formulario al contenedor principal
    asignarPlatosDiv.appendChild(formularioAsignarPlatoMenu);

    //+ Creacion de un elemento div para la desasignacion de platos al menu
    //- Creamos un nuevo elemento div para la desasignacion de platos
    let desAsignarPlatosDiv = document.createElement("div");
    // Agregamos la clase al contenedor
    desAsignarPlatosDiv.className = "contenedorAdministracionPlatosDiv";

    //- Creamos un elemento de titulo para la desasignacion de los platos
    let tituloDesasignarPlatos = document.createElement("h3");
    // Asignamos el texto a la etiqueta
    tituloDesasignarPlatos.innerText = "Desasignacion de platos al menu";

    //- Creamos un nuevo elemento de formulario
    let formularioDesasignarPlatoMenu = document.createElement("form");
    // Asisnamos el atributo name al elemento
    formularioDesasignarPlatoMenu.name = "formularioDeasignacionPlatoMenu";
    // Asignamos la clase al alemento form
    formularioDesasignarPlatoMenu.className = "formularioDeasignacionPlatoMenu";

    //- Creamos un elemento de titulo para la seleccion de los menus
    let tituloSeleccionMenuDesasignacion = document.createElement("h4");
    // Asignamos el texto a la etiqueta
    tituloSeleccionMenuDesasignacion.innerText = "Escoja el menu al que quiere desasignar el plato";

    //- Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesMenusDesasignacion = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesMenusDesasignacion.className = "radioBotonesContenedorFormulario";
    // Recorremos el iterador de menus
    for (const menu of menus) {
        //- Creamos un nuevo elemento input
        let radiomenu = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radiomenu.type = "radio";
        // Asignamos el atributo name al radio boton
        radiomenu.name = "menuDesasignadoSeleccionado";
        // Asignamos el valor del radio button con el nombre del menu
        radiomenu.value = menu.menus.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanMenu = document.createElement("span");
        // Asignamos el texto al span con el nombre del menu
        spanMenu.innerText = menu.menus.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesMenusDesasignacion.appendChild(radiomenu);
        // Añadimos el span del radioboton al contenedor
        contenedorRadiobotonesMenusDesasignacion.appendChild(spanMenu);
    }

    //- Agregacion del titulo al formulario
    formularioDesasignarPlatoMenu.appendChild(tituloSeleccionMenuDesasignacion);
    // Agregamos el contenedor de radiobotones al formulario
    formularioDesasignarPlatoMenu.appendChild(contenedorRadiobotonesMenusDesasignacion);

    //- Agregacion del titulo al contenedor principal
    desAsignarPlatosDiv.appendChild(tituloDesasignarPlatos);
    // Agregamos el formulario al contenedor principal
    desAsignarPlatosDiv.appendChild(formularioDesasignarPlatoMenu);

    //+ Creacion de un elemento div para ordenar los platos en los menus
    //- Creamos un nuevo contenedor para la organizacion de platos en el menu
    let ordenarPlatosDiv = document.createElement("div");
    // Agregamos la clase al contenedor
    ordenarPlatosDiv.className = "contenedorAdministracionPlatosDiv";

    //- Creamos un elemento de titulo para la ordenacio de platos
    let tituloMoverPlatos = document.createElement("h3");
    // Asignamos el texto a la etiqueta
    tituloMoverPlatos.innerText = "Ordenacion de los platos en los menus";

    //- Creamos un nuevo elemento de formulario
    let formularioOrdenarPlatoMenu = document.createElement("form");
    // Asisnamos el atributo name al elemento
    formularioOrdenarPlatoMenu.name = "formularioOrdenarPlatoMenu";
    // Asignamos la clase al alemento form
    formularioOrdenarPlatoMenu.className = "formularioAsignacionPlatoMenu";

    //- Creamos un elemento de titulo para la seleccion de los menus
    let tituloSeleccionMenuOrdenado = document.createElement("h4");
    // Asignamos el texto a la etiqueta
    tituloSeleccionMenuOrdenado.innerText = "Escoja el menu que quiere ordenar los platos";

    //- Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesMenusOrdenado = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesMenusOrdenado.className = "radioBotonesContenedorFormulario";
    // Recorremos el iterador de menus
    for (const menu of menus) {
        //- Creamos un nuevo elemento input
        let radiomenu = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radiomenu.type = "radio";
        // Asignamos el atributo name al radio boton
        radiomenu.name = "menuOrdenadoSeleccionado";
        // Asignamos el valor del radio button con el nombre del menu
        radiomenu.value = menu.menus.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanMenu = document.createElement("span");
        // Asignamos el texto al span con el nombre del menu
        spanMenu.innerText = menu.menus.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesMenusOrdenado.appendChild(radiomenu);
        // Añadimos el span del radioboton al contenedor
        contenedorRadiobotonesMenusOrdenado.appendChild(spanMenu);
    }

    //- Agregacion del titulo al formulario
    formularioOrdenarPlatoMenu.appendChild(tituloSeleccionMenuOrdenado);
    // Agregamos el contenedor de radiobotones al formulario
    formularioOrdenarPlatoMenu.appendChild(contenedorRadiobotonesMenusOrdenado);

    //- Agregacion del titulo al contenedor principal
    ordenarPlatosDiv.appendChild(tituloMoverPlatos);
    // Agregamos el formulario al contenedor principal
    ordenarPlatosDiv.appendChild(formularioOrdenarPlatoMenu);

    //+ Agregacion de elementos al contenedor de administracion
    // Agregacion del contenedor de asignar platos
    administrarPlatosDiv.appendChild(asignarPlatosDiv);
    // Agregacion del contenedor de desasignar platos
    administrarPlatosDiv.appendChild(desAsignarPlatosDiv);
    // Agregacion del contenedor de ordenar platos
    administrarPlatosDiv.appendChild(ordenarPlatosDiv);

    //+ Agregacion del contenedor al main principal
    mainContenido.appendChild(administrarPlatosDiv);
}

//?//FUNCION QUE MOSTRARA LOS PLATOS QUE TIENE UN MENU PARA DESASIGNARLOS//
function mostrarPlatosMenuDesasignacion(arryPlatos) {
    //+ Obtenemos el elemento formulario para agregarle los platos
    let formularioDesasignarPlatos = document.forms.formularioDeasignacionPlatoMenu;

    //+ Obtenemos los elementos creados para poder eliminarlos si existen
    // Obtenemos el elemento de titulo
    let tituloPlatosDesasignado = document.getElementById("tituloSeleccionPlatoDesasignado");
    // Obtenemos el elemento con los radiobotones
    let contenedorRadiobotonesPlatos = document.getElementById(
        "radioBotonesContenedorFormularioDesasignadoPlatos"
    );
    // Obtenemos el boton para desasignar platos
    let botonDesasignar = document.getElementById("botonDesasignarPlatos");

    //+ Borramos los elementos si ya han sido creados
    // Borramos el titulo para la desasignacion de los platos
    if (tituloPlatosDesasignado) {
        formularioDesasignarPlatos.removeChild(tituloPlatosDesasignado);
    }
    // Borramos el contenedor con los radiobotones
    if (contenedorRadiobotonesPlatos) {
        formularioDesasignarPlatos.removeChild(contenedorRadiobotonesPlatos);
    }
    // Borramos el boton de desasignar
    if (botonDesasignar) {
        formularioDesasignarPlatos.removeChild(botonDesasignar);
    }

    //+ Creamos un elemento de titulo para la seleccion de los platos
    let tituloSeleccionPlatoDesasignado = document.createElement("h4");
    // Signamos un atributo id para el titulo
    tituloSeleccionPlatoDesasignado.id = "tituloSeleccionPlatoDesasignado";
    // Asignamos el texto a la etiqueta
    tituloSeleccionPlatoDesasignado.innerText = "Escoja el plato a desasignar del menu";

    //+ Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesPlatosDesasignado = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesPlatosDesasignado.className = "radioBotonesContenedorFormulario";
    // Asignamos un id al contenedor con los radiobotones
    contenedorRadiobotonesPlatosDesasignado.id =
        "radioBotonesContenedorFormularioDesasignadoPlatos";
    // Recorremos el iterador de menus
    for (const plato of arryPlatos) {
        //- Creamos un nuevo elemento input
        let radioBoton = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radioBoton.type = "radio";
        // Asignamos el atributo name al radio boton
        radioBoton.name = "platoDesasignadoSeleccionado";
        // Asignamos el valor del radio button con el nombre
        radioBoton.value = plato.platos.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanRadio = document.createElement("span");
        // Asignamos el texto al span con el nombre
        spanRadio.innerText = plato.platos.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesPlatosDesasignado.appendChild(radioBoton);
        // Añadimos el span del radioboton al contenedor
        contenedorRadiobotonesPlatosDesasignado.appendChild(spanRadio);
    }

    //+ Creamos un elemento boton para desasignar el plato
    let botonDesasignarPlatos = document.createElement("button");
    // Asignamos el texto al boton
    botonDesasignarPlatos.innerHTML = "Desasignar";
    // Asignamos la clase al boton de enviar
    botonDesasignarPlatos.className = "inputButtonFormularioEliminarPlatos";
    // Asignamos un id al boton
    botonDesasignarPlatos.id = "botonDesasignarPlatos";
    // Asignamos el tipo al boton
    botonDesasignarPlatos.type = "submit";

    //+ Añadimos los elementos al formulario
    // Añadimos el titulo al formulario
    formularioDesasignarPlatos.appendChild(tituloSeleccionPlatoDesasignado);
    // Añadimos el contendor de los radiobuttons al formulario
    formularioDesasignarPlatos.appendChild(contenedorRadiobotonesPlatosDesasignado);
    // Añadimos el boton al formulario
    formularioDesasignarPlatos.appendChild(botonDesasignarPlatos);
}

//!//////////////////////////////////////////////////////////////////
//?//FUNCION QUE MOSTRARA LOS PLATOS QUE TIENE UN MENU PARA ORGANIZARLOS//
function mostrarPlatosMenuOrdenacion(arryPlatos) {
    //* Mostrado del primer plato que seleccionaremos para la ordenacion
    //+ Obtenemos el elemento formulario para agregarle los platos
    let formularioOrdenarPlatoMenu = document.forms.formularioOrdenarPlatoMenu;

    //+ Obtenemos los elementos creados para poder eliminarlos si existen

    // Obtenemos el elemento de titulo
    let tituloPrimePlato = document.getElementById("tituloPrimerPlatoOrdenado");

    // Obtenemos el elemento con los radiobotones
    let contenedorRadiobotonesPrimerPlato = document.getElementById(
        "contenedorRadiobotonesPrimerPlatoOrdenar"
    );

    // Obtenemos el elemento de titulo
    let tituloSegundoPlato = document.getElementById("tituloSeleccionPlatoDesasignado");

    // Obtenemos el elemento con los radiobotones
    let contenedorRadiobotonesSegundoPlato = document.getElementById(
        "contenedorRadiobotonesSegundoPlatoOrdenar"
    );

    // Obtenemos el boton para desasignar platos
    let botonOrdenar = document.getElementById("botonOrdenarPlatos");

    //+ Borramos los elementos si ya han sido creados

    // Borramos el titulo para la desasignacion de los platos
    if (tituloPrimePlato) {
        formularioOrdenarPlatoMenu.removeChild(tituloPrimePlato);
    }
    // Borramos el contenedor con los radiobotones
    if (contenedorRadiobotonesPrimerPlato) {
        formularioOrdenarPlatoMenu.removeChild(contenedorRadiobotonesPrimerPlato);
    }
    // Borramos el titulo para la desasignacion de los platos
    if (tituloSegundoPlato) {
        formularioOrdenarPlatoMenu.removeChild(tituloSegundoPlato);
    }
    // Borramos el contenedor con los radiobotones
    if (contenedorRadiobotonesSegundoPlato) {
        formularioOrdenarPlatoMenu.removeChild(contenedorRadiobotonesSegundoPlato);
    }
    // Borramos el boton de desasignar
    if (botonOrdenar) {
        formularioOrdenarPlatoMenu.removeChild(botonOrdenar);
    }

    //+ Creamos un elemento de titulo para la seleccion de los platos
    let tituloPrimerPlatoOrdenado = document.createElement("h4");
    // Signamos un atributo id para el titulo
    tituloPrimerPlatoOrdenado.id = "tituloPrimerPlatoOrdenado";
    // Asignamos el texto a la etiqueta
    tituloPrimerPlatoOrdenado.innerText = "Escoja el primer plato a ordenar";

    //+ Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesPrimerPlatoOrdenar = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesPrimerPlatoOrdenar.className = "radioBotonesContenedorFormulario";
    // Asignamos un id al contenedor con los radiobotones
    contenedorRadiobotonesPrimerPlatoOrdenar.id = "contenedorRadiobotonesPrimerPlatoOrdenar";
    // Recorremos el iterador de menus
    for (const plato of arryPlatos) {
        //- Creamos un nuevo elemento input
        let radioBoton = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radioBoton.type = "radio";
        // Asignamos el atributo name al radio boton
        radioBoton.name = "primerPlatoOrdenado";
        // Asignamos el valor del radio button con el nombre
        radioBoton.value = plato.platos.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanRadio = document.createElement("span");
        // Asignamos el texto al span con el nombre
        spanRadio.innerText = plato.platos.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesPrimerPlatoOrdenar.appendChild(radioBoton);
        // Añadimos el span del radioboton al contenedor
        contenedorRadiobotonesPrimerPlatoOrdenar.appendChild(spanRadio);
    }

    //* Mostrado del segundo plato que seleccionaremos para la ordenacion
    //+ Creamos un elemento de titulo para la seleccion de los platos
    let tituloSegundoPlatoOrdenado = document.createElement("h4");
    // Signamos un atributo id para el titulo
    tituloSegundoPlatoOrdenado.id = "tituloSeleccionPlatoDesasignado";
    // Asignamos el texto a la etiqueta
    tituloSegundoPlatoOrdenado.innerText = "Escoja el segundo plato para ordenar";

    //+ Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesSegundoPlatoOrdenar = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesSegundoPlatoOrdenar.className = "radioBotonesContenedorFormulario";
    // Asignamos un id al contenedor con los radiobotones
    contenedorRadiobotonesSegundoPlatoOrdenar.id = "contenedorRadiobotonesSegundoPlatoOrdenar";
    // Recorremos el iterador de menus
    for (const plato of arryPlatos) {
        //- Creamos un nuevo elemento input
        let radioBoton = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radioBoton.type = "radio";
        // Asignamos el atributo name al radio boton
        radioBoton.name = "segundoPlatoOrdenado";
        // Asignamos el valor del radio button con el nombre
        radioBoton.value = plato.platos.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanRadio = document.createElement("span");
        // Asignamos el texto al span con el nombre
        spanRadio.innerText = plato.platos.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesSegundoPlatoOrdenar.appendChild(radioBoton);
        // Añadimos el span del radioboton al contenedor
        contenedorRadiobotonesSegundoPlatoOrdenar.appendChild(spanRadio);
    }

    //+ Creamos un elemento boton para ordenar los platos
    let botonOrdenarPlato = document.createElement("button");
    // Asignamos el texto al boton
    botonOrdenarPlato.innerHTML = "Ordenar";
    // Asignamos la clase al boton de enviar
    botonOrdenarPlato.className = "inputButtonFormularioEliminarPlatos";
    // Asignamos un id al boton
    botonOrdenarPlato.id = "botonOrdenarPlatos";
    // Asignamos el tipo al boton
    botonOrdenarPlato.type = "submit";

    //+ Añadimos los elementos al formulario
    // Añadimos el titulo del primer plato al formulario
    formularioOrdenarPlatoMenu.appendChild(tituloPrimerPlatoOrdenado);
    // Añadimos el contendor de los radibotones del primer plato seleccionado
    formularioOrdenarPlatoMenu.appendChild(contenedorRadiobotonesPrimerPlatoOrdenar);
    // Añadimos el titulo al formulario para el segundo plato del formulario
    formularioOrdenarPlatoMenu.appendChild(tituloSegundoPlatoOrdenado);
    // Añadimos el contendor de los radiobuttons del segundo plato al formulario
    formularioOrdenarPlatoMenu.appendChild(contenedorRadiobotonesSegundoPlatoOrdenar);
    // Añadimos el boton al formulario
    formularioOrdenarPlatoMenu.appendChild(botonOrdenarPlato);
}

//?//FUNCION PARA MOSTRAR UN FORMULARIO PARA LA ADMINISTRACION DE CATEGORIAS//
function administrarCategorias(mainContenido, categorias) {
    // Borramos los elementos del main contenido
    mainContenido.innerHTML = "";

    //+ Creacion de un elemento div para la administracion de las categorias
    let administrarCategoriasPrincipal = document.createElement("div");
    // Asignamos la clase al elemento
    administrarCategoriasPrincipal.className = "contenedorAdministracionCategoriasFormulario";

    //+ Creacion de un nuevo contenedor para la creacion de las categorias
    //- Creamos un nuevo contenedor para la creacion de las categorias
    let creacionCategoriasDiv = document.createElement("div");
    // Asignamos la clase al elemento
    creacionCategoriasDiv.className = "contenedorAdministracionCategoriasDiv";

    //- Creamos un nuevo elemento de formulario
    let formularioCrearCategoria = document.createElement("form");
    // Asisnamos el atributo name al elemento
    formularioCrearCategoria.name = "formularioCrearCategoria";
    // Asignamos la clase al formulario
    formularioCrearCategoria.className = "formularioCrearCategoria";

    //- Creamos un elemento parrafo para el nombre de la categoria
    let parrafoNombreCategoria = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoNombreCategoria.innerText = "Introduzca el nombre de la categoria";

    //- Creamos un elemento input para el nombre
    let inputNombreCategoria = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputNombreCategoria.name = "nombreCategoriaCrear";
    // Establecemos el tipo del input
    inputNombreCategoria.type = "text";
    // Asignamos la clase al elemento de texto
    inputNombreCategoria.className = "inputTextFormularioCategorias";

    //- Creamos un elemento parrafo para la descripcion
    let parrafoDescripcionCategorias = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoDescripcionCategorias.innerText = "Introduzca la descripcion de la categoria";

    //- Creamos un elemento input para la descipcion
    let inputDescripcionCategoria = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputDescripcionCategoria.name = "descripcionCategoriaCrear";
    // Agregamos el tipo del imput
    inputDescripcionCategoria.type = "textarea";
    // Asignamos el texto de muesta
    inputDescripcionCategoria.placeholder = "Ej: Es una categoria que ...";
    // Asignamos la clase al elemento de texto
    inputDescripcionCategoria.className = "inputTextAreaFormularioCategorias";

    //- Creamos un elemento parrado para la imagen
    let parrafoImagenCategoria = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoImagenCategoria.innerText = "Introduzca la url de la imagen";

    //- Creamos un elemento input para la imagen
    let inputImagenCategoria = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputImagenCategoria.name = "nombreImagenCategoriaCrear";
    // Establecemos el tipo del input
    inputImagenCategoria.type = "text";
    // Asignamos la clase al elemento de texto
    inputImagenCategoria.className = "inputTextFormularioCategorias";

    //- Creamos un elemento boton para el boton de enviar
    let botonCrearCategoria = document.createElement("button");
    // Asignamos el texto al boton
    botonCrearCategoria.innerHTML = "Crear categoria";
    // Asignamos la clase al boton de enviar
    botonCrearCategoria.className = "inputButtonAdministrarCategorias";
    // Asignamos el tipo al boton
    botonCrearCategoria.type = "submit";

    //- Agregacion del parrafo para el nombre de la categoria al formulario
    formularioCrearCategoria.appendChild(parrafoNombreCategoria);
    // Agregacion del input para el nombre de la categoria al formulario
    formularioCrearCategoria.appendChild(inputNombreCategoria);
    // Agregacion del parrafo para la descripcion de la categoria
    formularioCrearCategoria.appendChild(parrafoDescripcionCategorias);
    // Agregacion del tsxarea para la descripcion de la categoria
    formularioCrearCategoria.appendChild(inputDescripcionCategoria);
    // Agregacion del parrafo para la imagen de la categoria
    formularioCrearCategoria.appendChild(parrafoImagenCategoria);
    // Agregacion del input para la imagen de la categoria
    formularioCrearCategoria.appendChild(inputImagenCategoria);
    // Agregacion del boton de crear categoria al formulario
    formularioCrearCategoria.appendChild(botonCrearCategoria);

    //- Agregamos el formulario al contenedor de creacion
    creacionCategoriasDiv.appendChild(formularioCrearCategoria);

    //+ Creacion de un nuevo contenedor para la eliminacion de las categorias
    //- Creacion de un nuevo contenedor para la eliminacin de categorias
    let eliminaCategoriaDiv = document.createElement("div");
    // Asignamos la clase al elemento
    eliminaCategoriaDiv.className = "contenedorAdministracionCategoriasDiv";

    //- Creamos un nuevo elemento de formulario
    let formularioEliminarCategoria = document.createElement("form");
    // Asisnamos el atributo name al elemento
    formularioEliminarCategoria.name = "formularioEliminarCategoria";
    // Asignamos la clase al formulario
    formularioEliminarCategoria.className = "formularioEliminarCategoria";

    //- Creamos un elemento de titulo para las categorias
    let tituloEliminarCategorias = document.createElement("h3");
    // Asignamos el texto a la etiqueta
    tituloEliminarCategorias.innerText = "Seleccione la categoria que desea eliminar";

    //- Creamos un contenedor div para los radio botones
    let radioCategoriasContainer = document.createElement("div");
    // Asignamos una clase al contenedor
    radioCategoriasContainer.className = "radioBotonesContenedorFormulario";
    // Recorremos el iterador de platos
    for (const categoria of categorias) {
        // Creamos un nuevo elemento input
        let radioCategoria = document.createElement("input");
        // Asignamos el tipo del input como radio
        radioCategoria.type = "radio";
        // Asignamos el atributo name al radio boton
        radioCategoria.name = "categoriaSeleccionada";
        // Asignamos el valor del radio button con el nombre del plato
        radioCategoria.value = categoria.categoria.getName();
        // Creamos un nuevo elemento span para asociarlo con el radio button
        let spanPlato = document.createElement("span");
        // Asignamos el texto span con el nombre de la categoria
        spanPlato.innerText = categoria.categoria.getName();
        // Añadimos el radio button al contenedor principal
        radioCategoriasContainer.appendChild(radioCategoria);
        // Añadimos el elemento span al contenedor principal
        radioCategoriasContainer.appendChild(spanPlato);
    }

    //- Creamos un elemento boton para el boton de eliminar la categoria
    let botonEliminarCategoria = document.createElement("button");
    // Asignamos el texto al boton
    botonEliminarCategoria.innerHTML = "Eliminar";
    // Asignamos la clase al boton de enviar
    botonEliminarCategoria.className = "inputButtonAdministrarCategorias";
    // Asignamos el tipo al boton
    botonEliminarCategoria.type = "submit";

    //- Agregamos el elemento de titulo al formulario
    formularioEliminarCategoria.appendChild(tituloEliminarCategorias);
    // Agregamos el contenedor de los radiobotones al formulario
    formularioEliminarCategoria.appendChild(radioCategoriasContainer);
    // Agregamos el boton para eliminar las categorias
    formularioEliminarCategoria.appendChild(botonEliminarCategoria);

    //- Agregamos el formulario al contenedor principal
    eliminaCategoriaDiv.appendChild(formularioEliminarCategoria);

    //+ Agregacion de elementos al contenedor principal
    administrarCategoriasPrincipal.appendChild(creacionCategoriasDiv);
    administrarCategoriasPrincipal.appendChild(eliminaCategoriaDiv);

    //+ Agregamos el contenedor de administracion de categorias al main contenido
    mainContenido.appendChild(administrarCategoriasPrincipal);
}

//?//METODO QUE MOSTRARA UN FORMULARIO PARA LA CREACION DE UN RESTAURANTE//
function nuevoRestaurante(mainContenido) {
    // Borramos el contenido del contenido principal
    mainContenido.innerHTML = "";

    //+ Creamos un nuevo elemento de formulario
    let formulariCrearRestaurante = document.createElement("form");
    // Asisnamos el atributo name al elemento
    formulariCrearRestaurante.name = "formularioCrearRestaurante";
    // Asisnamos el atributo id al elemento form
    formulariCrearRestaurante.id = "formularioCrearRestaurante";
    // Asignamos la clase al formulario
    formulariCrearRestaurante.className = "formularioCrearRestaurante";

    //+ Creamos un elemento parrafo para el nombre
    let parrafoNombreRestaurante = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoNombreRestaurante.innerText = "Introduzca el nombre del Restaurante";

    //+ Creamos un elemento input para el nombre
    let inputNombreRestaurante = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputNombreRestaurante.name = "nombreRestauranteCreacion";
    // Establecemos el tipo del input
    inputNombreRestaurante.type = "text";
    // Asignamos la clase al elemento de texto
    inputNombreRestaurante.className = "inputTextFormulario";

    //+ Creamos un elemento parrafo para la descripcion
    let parrafoDescripcionRestaurante = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoDescripcionRestaurante.innerText = "Introduzca la descripcion del restaurante";

    //+ Creamos un elemento input para la descipcion
    let inputDescripcionRestaurante = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputDescripcionRestaurante.name = "descripcionRestauranteCrear";
    // Agregamos el tipo del imput
    inputDescripcionRestaurante.type = "textarea";
    // Asignamos el texto de muesta
    inputDescripcionRestaurante.placeholder = "Ej: Es un restaurante de comida...";
    // Asignamos la clase al elemento de texto
    inputDescripcionRestaurante.className = "inputTextAreaFormulario";

    //+ Creamos un elemento parrafo para la latitud
    let parrafoLatitudRestaurante = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoLatitudRestaurante.innerText = "Introduzca la latitud donde se encuentra el restaurante";

    //+ Creamos un elemento input para la latitud
    let inputLatitudRestaurante = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputLatitudRestaurante.name = "inputLatitudRestaurante";
    // Asignamos el tipo del input
    inputLatitudRestaurante.type = "number";
    // Asignamos la clase al elemento de texto
    inputLatitudRestaurante.className = "inputTextAreaFormulario";

    //+ Creamos un elemento parrafo para la longitud
    let parrafoLongitudRestaurante = document.createElement("p");
    // Asignamos el texto a la etiqueta
    parrafoLongitudRestaurante.innerText =
        "Introduzca la longitud donde se esncuentra el restaurante";

    //+ Creamos un elemento input para la longitud
    let inputLongitudRestaurante = document.createElement("input");
    // Asignamos el atributo nombre al input
    inputLongitudRestaurante.name = "inputLongitudRestaurante";
    // Asignamos el tipo del input
    inputLongitudRestaurante.type = "number";
    // Asignamos la clase al elemento de texto
    inputLongitudRestaurante.className = "inputTextAreaFormulario";

    //+ Creamos un elemento boton para el boton de eliminar la categoria
    let botonCrearRestaurante = document.createElement("button");
    // Asignamos el texto al boton
    botonCrearRestaurante.innerHTML = "Crear";
    // Asignamos la clase al boton de enviar
    botonCrearRestaurante.className = "inputButtonCrearRestaurante";
    // Asignamos el tipo al boton
    botonCrearRestaurante.type = "submit";

    //+ Añadimos los elementos al formulario
    // Añadimos el parrafo para el nombre
    formulariCrearRestaurante.appendChild(parrafoNombreRestaurante);
    // Añadimos el input para el nombre
    formulariCrearRestaurante.appendChild(inputNombreRestaurante);
    // Añadimos el parrafo para la descripcion
    formulariCrearRestaurante.appendChild(parrafoDescripcionRestaurante);
    // Añadimos el text area para la descripcion
    formulariCrearRestaurante.appendChild(inputDescripcionRestaurante);
    // Añadimos el parrafo para la latitud
    formulariCrearRestaurante.appendChild(parrafoLatitudRestaurante);
    // Añadimos el number para la latitud
    formulariCrearRestaurante.appendChild(inputLatitudRestaurante);
    // Añadimos el parrafo para la latitud
    formulariCrearRestaurante.appendChild(parrafoLongitudRestaurante);
    // Añadimos el number para la latitud
    formulariCrearRestaurante.appendChild(inputLongitudRestaurante);
    // Añadimos el boton de drear restaurante
    formulariCrearRestaurante.appendChild(botonCrearRestaurante);

    //+ Añadimos el formulario al main contenido
    mainContenido.appendChild(formulariCrearRestaurante);
}

//?METODO QUE MOSTRARA UN FORMULARIO PARA LA ADMINISTRACION DE LAS CATEGORIAS A LOS PLATOS//
function categoriasPlatos(mainContenido, platos, categorias) {
    // Borramos el contenido del main principal
    mainContenido.innerHTML = "";

    //+ Creacion de un elemento div para la administracion de categorias a los platos
    let contenedorAdministracionCategoriaPlatos = document.createElement("div");
    // Agregamos la clase al contenedor
    contenedorAdministracionCategoriaPlatos.className = "contenedorAdministracionCategoriaPlatos";

    //+ Creamos un nuevo div para la asignacion de las categorias a los platos
    //- Creacion de un elemento div para la asignacion de las categorias a los platos
    let asignarCategoriasPlatosDiv = document.createElement("div");
    // Agregamos la clase al contenedor
    asignarCategoriasPlatosDiv.className = "asignarCategoriasPlatosDiv";

    //- Creamos un elemento de titulo para la asignacion de las categorias a los latos
    let tituloAsignarCategoriasPlatos = document.createElement("h3");
    // Asignamos el texto a la etiqueta
    tituloAsignarCategoriasPlatos.innerText = "Asignacion de categorias a los platos";

    //- Creamos un nuevo elemento de formulario
    let formularioAsignarPlatoMenu = document.createElement("form");
    // Asisnamos el atributo name al elemento
    formularioAsignarPlatoMenu.name = "formularioAsignacionCategoriasPlatos";
    // Asignamos la clase al alemento form
    formularioAsignarPlatoMenu.className = "formularioAsignacionCategoriasPlatos";

    //- Creamos un elemento de titulo para la seleccion de las categorias
    let tituloSeleccionCategoriaAsignado = document.createElement("h4");
    // Asignamos el texto a la etiqueta
    tituloSeleccionCategoriaAsignado.innerText =
        "Escoja la categoria a la que quiere asignar el plato";

    //- Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesCategoriasAsignacion = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesCategoriasAsignacion.className = "radioBotonesContenedorFormulario";
    // Recorremos el iterador de menus
    for (const categoria of categorias) {
        //- Creamos un nuevo elemento input
        let radioCategoria = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radioCategoria.type = "radio";
        // Asignamos el atributo name al radio boton
        radioCategoria.name = "categoriaAsignadoSeleccionado";
        // Asignamos el valor del radio button con el nombre de la categoria
        radioCategoria.value = categoria.categoria.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanCategoria = document.createElement("span");
        // Asignamos el texto al span con el nombre
        spanCategoria.innerText = categoria.categoria.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesCategoriasAsignacion.appendChild(radioCategoria);
        // Añadimos el span del radioboton al formulario
        contenedorRadiobotonesCategoriasAsignacion.appendChild(spanCategoria);
    }

    //- Creamos un elemento de titulo para la seleccion de las categorias
    let tituloSeleccionPlatoAsignado = document.createElement("h4");
    // Asignamos el texto a la etiqueta
    tituloSeleccionPlatoAsignado.innerText = "Escoja el plato para asignar la categoria";

    //- Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesPlatoAsignacion = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesPlatoAsignacion.className = "radioBotonesContenedorFormulario";
    // Recorremos el iterador de menus
    for (const plato of platos) {
        //- Creamos un nuevo elemento input
        let radioBoton = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radioBoton.type = "radio";
        // Asignamos el atributo name al radio boton
        radioBoton.name = "platosAsignadoSeleccionado";
        // Asignamos el valor del radio button con el nombre
        radioBoton.value = plato.platos.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanRadio = document.createElement("span");
        // Asignamos el texto al span con el nombre
        spanRadio.innerText = plato.platos.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesPlatoAsignacion.appendChild(radioBoton);
        // Añadimos el span del radioboton al formulario
        contenedorRadiobotonesPlatoAsignacion.appendChild(spanRadio);
    }

    //- Agregacion de elementos del formulario
    // Agregacion del titulo para la categoria asignada del formulario
    formularioAsignarPlatoMenu.appendChild(tituloSeleccionCategoriaAsignado);
    // Agregamos el contenedor de radiobotones de las categorias asignada al formulario
    formularioAsignarPlatoMenu.appendChild(contenedorRadiobotonesCategoriasAsignacion);
    // Agregacion del titulo para el plato asignado del formulario
    formularioAsignarPlatoMenu.appendChild(tituloSeleccionPlatoAsignado);
    // Agregamos el contenedor de radiobotones para el palto asignado del fromulario
    formularioAsignarPlatoMenu.appendChild(contenedorRadiobotonesPlatoAsignacion);

    //- Agregacion del titulo al contenedor principal
    asignarCategoriasPlatosDiv.appendChild(tituloAsignarCategoriasPlatos);
    // Agregamos el formulario al contenedor principal
    asignarCategoriasPlatosDiv.appendChild(formularioAsignarPlatoMenu);

    //+ Creamos un nuevo div para la desasignacion de las categorias a los platos
    //- Creacion de un elemento div para la desasignacion de las categorias a los platos
    let desasignarCategoriasPlatosDiv = document.createElement("div");
    // Agregamos la clase al contenedor
    desasignarCategoriasPlatosDiv.className = "desasignarCategoriasPlatosDiv";

    //- Creamos un elemento de titulo para la desasignacion de las categorias a los platos
    let tituloDesasignarCategoriasPlatos = document.createElement("h3");
    // Asignamos el texto a la etiqueta
    tituloDesasignarCategoriasPlatos.innerText = "Desasignacion de categorias a los platos";

    //- Creamos un nuevo elemento de formulario
    let formularioDesasignarPlatoMenu = document.createElement("form");
    // Asisnamos el atributo name al elemento
    formularioDesasignarPlatoMenu.name = "formularioDesasignacionCategoriasPlatos";
    // Asignamos la clase al alemento form
    formularioDesasignarPlatoMenu.className = "formularioDesasignacionCategoriasPlatos";

    //- Creamos un elemento de titulo para la seleccion de las categorias
    let tituloSeleccionCategoriaDesasignado = document.createElement("h4");
    // Asignamos el texto a la etiqueta
    tituloSeleccionCategoriaDesasignado.innerText =
        "Escoja la categoria a la que quiere desasignar el plato";

    //- Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesCategoriasDesasignacion = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesCategoriasDesasignacion.className = "radioBotonesContenedorFormulario";
    // Recorremos el iterador de menus
    for (const categoria of categorias) {
        //- Creamos un nuevo elemento input
        let radioCategoria = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radioCategoria.type = "radio";
        // Asignamos el atributo name al radio boton
        radioCategoria.name = "categoriaDesasignadoSeleccionado";
        // Asignamos el valor del radio button con el nombre de la categoria
        radioCategoria.value = categoria.categoria.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanCategoria = document.createElement("span");
        // Asignamos el texto al span con el nombre del menu
        spanCategoria.innerText = categoria.categoria.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesCategoriasDesasignacion.appendChild(radioCategoria);
        // Añadimos el span del radioboton al formulario
        contenedorRadiobotonesCategoriasDesasignacion.appendChild(spanCategoria);
    }

    //- Agregacion de elementos del formulario
    // Agregacion del titulo para la categoria asignada
    formularioDesasignarPlatoMenu.appendChild(tituloSeleccionCategoriaDesasignado);
    // Agregamos el contenedor de radiobotones al formulario
    formularioDesasignarPlatoMenu.appendChild(contenedorRadiobotonesCategoriasDesasignacion);

    //- Agregacion del titulo al contenedor principal
    desasignarCategoriasPlatosDiv.appendChild(tituloDesasignarCategoriasPlatos);
    // Agregamos el formulario al contenedor principal
    desasignarCategoriasPlatosDiv.appendChild(formularioDesasignarPlatoMenu);

    //+ Agregamos el contenedor de la asignacion al contenedor principal
    contenedorAdministracionCategoriaPlatos.appendChild(asignarCategoriasPlatosDiv);
    contenedorAdministracionCategoriaPlatos.appendChild(desasignarCategoriasPlatosDiv);

    //+ Agregamos el contenedor principal al main contenido
    mainContenido.appendChild(contenedorAdministracionCategoriaPlatos);
}

//?///FUNCION QUE NOS MOSTRARA LOS PLATOS QUE TIENE LA CATEGORIA PARA DESASIGNARLOS///
function platosCategoriasDesasignado(arryPlatos) {
    //+ Obtenemos el elemento formulario para agregarle los platos
    let formularioDesasignacionCategoriasPlatos = document.forms.formularioDesasignacionCategoriasPlatos;

    //+ Obtenemos los elementos creados para poder eliminarlos si existen
    // Obtenemos el elemento de titulo
    let tituloPlatosDesasignadoCategorias = document.getElementById("tituloSeleccionPlatoDesasignadoCategorias");
    // Obtenemos el elemento con los radiobotones
    let contenedorRadiobotonesPlatos = document.getElementById(
        "contenedorRadiobotonesPlatosDesasignadoCategorias"
    );
    // Obtenemos el boton para desasignar platos
    let botonDesasignar = document.getElementById("botonDesasignarPlatosCategorias");

    //+ Borramos los elementos si ya han sido creados
    // Borramos el titulo para la desasignacion de los platos
    if (tituloPlatosDesasignadoCategorias) {
        formularioDesasignacionCategoriasPlatos.removeChild(tituloPlatosDesasignadoCategorias);
    }
    // Borramos el contenedor con los radiobotones
    if (contenedorRadiobotonesPlatos) {
        formularioDesasignacionCategoriasPlatos.removeChild(contenedorRadiobotonesPlatos);
    }
    // Borramos el boton de desasignar
    if (botonDesasignar) {
        formularioDesasignacionCategoriasPlatos.removeChild(botonDesasignar);
    }

    //+ Creamos un elemento de titulo para la seleccion de los platos
    let tituloSeleccionPlatoDesasignadoCategorias = document.createElement("h4");
    // Signamos un atributo id para el titulo
    tituloSeleccionPlatoDesasignadoCategorias.id = "tituloSeleccionPlatoDesasignadoCategorias";
    // Asignamos el texto a la etiqueta
    tituloSeleccionPlatoDesasignadoCategorias.innerText = "Escoja el plato a desasignar del la categoria";

    //+ Creamos un nuevo elemento div que almacenara los radiobotones
    let contenedorRadiobotonesPlatosDesasignadoCategorias = document.createElement("div");
    // Asignamos la clase al contenedor con los radiobotones
    contenedorRadiobotonesPlatosDesasignadoCategorias.className = "radioBotonesContenedorFormulario";
    // Asignamos un id al contenedor con los radiobotones
    contenedorRadiobotonesPlatosDesasignadoCategorias.id =
        "contenedorRadiobotonesPlatosDesasignadoCategorias";
    // Recorremos el iterador de menus
    for (const plato of arryPlatos) {
        //- Creamos un nuevo elemento input
        let radioBoton = document.createElement("input");
        // Configuramos el tipo del input que sera radio
        radioBoton.type = "radio";
        // Asignamos el atributo name al radio boton
        radioBoton.name = "platoDesasignadoSeleccionadoCategorias";
        // Asignamos el valor del radio button con el nombre
        radioBoton.value = plato.platos.getName();

        //- Creamos un nuevo elemento span para asociarlo con el radio button
        let spanRadio = document.createElement("span");
        // Asignamos el texto al span con el nombre
        spanRadio.innerText = plato.platos.getName();

        //- Añadimos el radio button al contenedor
        contenedorRadiobotonesPlatosDesasignadoCategorias.appendChild(radioBoton);
        // Añadimos el span del radioboton al contenedor
        contenedorRadiobotonesPlatosDesasignadoCategorias.appendChild(spanRadio);
    }

    //+ Creamos un elemento boton para desasignar el plato
    let botonDesasignarPlatosCategorias = document.createElement("button");
    // Asignamos el texto al boton
    botonDesasignarPlatosCategorias.innerHTML = "Desasignar";
    // Asignamos la clase al boton de enviar
    botonDesasignarPlatosCategorias.className = "inputButtonFormularioEliminarPlatos";
    // Asignamos un id al boton
    botonDesasignarPlatosCategorias.id = "botonDesasignarPlatosCategorias";
    // Asignamos el tipo al boton
    botonDesasignarPlatosCategorias.type = "submit";

    //+ Añadimos los elementos al formulario
    // Añadimos el titulo al formulario
    formularioDesasignacionCategoriasPlatos.appendChild(tituloSeleccionPlatoDesasignadoCategorias);
    // Añadimos el contendor de los radiobuttons al formulario
    formularioDesasignacionCategoriasPlatos.appendChild(contenedorRadiobotonesPlatosDesasignadoCategorias);
    // Añadimos el boton al formulario
    formularioDesasignacionCategoriasPlatos.appendChild(botonDesasignarPlatosCategorias);
}

//?//////////////////////EXPORTACION DE LAS FUNCIONES////////////////////
export {
    eliminarPlato,
    nuevoPlato,
    administrarPlatos,
    mostrarPlatosMenuDesasignacion,
    mostrarPlatosMenuOrdenacion,
    administrarCategorias,
    nuevoRestaurante,
    categoriasPlatos,
    platosCategoriasDesasignado,
};
