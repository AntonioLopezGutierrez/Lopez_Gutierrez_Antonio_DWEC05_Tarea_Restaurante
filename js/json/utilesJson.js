//!///////////////////UTILES PARA EL ARCHIVO JSON////////////////////////
"use strict";

//?//////////////////////IMPORTACIONES DE LA CLASE///////////////////////
import { Coordinate } from "../clases/Coordinate.js";

//?////////FUNCION PARA EL CARGADO DE DATOS DEL ARCHIVO JSON/////////////
async function cargaDatosModelo(modelo) {
    //- Peticion al archivo json que contiene los datos de nuestra aplicacion
    const respuesta = await fetch("../js/json/restauranteObjetos.json");

    //- Obtenemos los datos de la respuesta en formato json
    const datos = await respuesta.json();

    //- Agregado de las categorias al modelo
    // Recorremos las categorias del json
    for (const categoria of datos.categorias) {
        // Creamos las categorias con los datos del json
        let categoriaCreada = modelo.createCategory(
            categoria.nombre,
            categoria.descripcion,
            categoria.imagen
        );
        // Agregamos las categorias al modelo
        modelo.addCategory(categoriaCreada);
    }

    //- Agregado de los alergenos al modelo
    // Recorremos los alergenos del json
    for (const alergeno of datos.alergenos) {
        // Creamos los alergenos con los datos del json
        let alergenosCreado = modelo.createAllergen(
            alergeno.nombre,
            alergeno.descripcion,
            alergeno.imagen
        );

        // Agregamos los alergenos al modelo
        modelo.addAllergen(alergenosCreado);
    }

    //- Agregado de los platos al modelo asignacion de categorias y alergenos
    // Recorremos los platos del json
    for (const plato of datos.platos) {
        //* Creamos los platos con los datos del json
        let platoCreado = modelo.createDish(
            plato.nombre,
            plato.descripcion,
            plato.ingredientes,
            plato.imagen
        );
        // Agregamos los platos al modelo
        modelo.addDish(platoCreado);

        //* Obtenemos las categorias del modelo y asignacion de los platos
        let categoriaPlato = modelo.getCategories();
        // Convertimos el iterador en un array
        let arrayCategorias = [...categoriaPlato];

        // Filtramos la categoria del plato
        let categoriaFiltrado = arrayCategorias.filter(
            (categoria) => categoria.categoria.getName() == plato.categoria
        );
        // Asignamos los platos a las categorias
        modelo.assignCategoryToDish(categoriaFiltrado[0], platoCreado);

        //* Obtenemos los alergenos del modelo y asignacion a los platos
        let alergenosPlato = modelo.getAllergen();
        // Convertimos el iterador en un array
        let arrayAlergenos = [...alergenosPlato];
        // Filtramos los alergenos del plato
        let alergenosFiltrado = arrayAlergenos.filter(
            (alergeno) => alergeno.getName() == plato.alergenos
        );
        // Asignamos los alergenos a los platos
        modelo.assignAllergenToDish(alergenosFiltrado[0], platoCreado);
    }

    //- Agregado de los menus al modelo y asigancion de platos
    // Recorremos los menus del json
    for (const menu of datos.menus) {
        //* Creamos los menus con los datos del json
        let menuCreado = modelo.createMenu(menu.nombre, menu.descripcion, menu.imagen);

        //* Agregamos el menu al modelo
        modelo.addMenu(menuCreado);

        //* Obtenemos los platos del modelo
        let menusPlatos = modelo.getDishes();

        //* Transformamos el iterador en un array
        let menusPlatosArray = [...menusPlatos];

        //* Recorremos los platos del menu
        for (const plato of menu.platos) {
            // Filtramos los platos del menu
            let platoFiltrado = menusPlatosArray.filter(
                (platoMenu) => platoMenu.platos.getName() == plato
            );

            // Agregamos los platos filtrados al array
            modelo.assignDishToMenu(platoFiltrado[0], menuCreado);
        }
    }

    //- Agregado de los restaurantes al modelo
    // Recorremos los restaurantes del json
    for (const restaurante of datos.restaurantes) {
        // Creamos un objeto coordenadas con la latitud y la longitud
        let coordenadas = new Coordinate(restaurante.latitud, restaurante.longitud);
        // Creamos el restaurante con los datos del json y el objeto coordenadas
        let restaruranteCreado = modelo.createRestaurant(
            restaurante.nombre,
            restaurante.descripcion,
            coordenadas
        );

        // Agregamos los restaurantes al modelo
        modelo.addRestaurant(restaruranteCreado);
    }

    // Mostrado de todos los datos cargados en el modelo
    //console.log(modelo.toString());
}

//?//FUNCION PARA LA OBTENCION DE DATOS DEL MODELO Y ENVIO AL SERVIDOR///
async function obtencioDatosModelo(modelo) {
    //- Llamada a la funcion para transformar las categorias
    let categoriasTransformadas = transformarCategorias(modelo);
    //- Llamada a la funcion para transformar los menus
    let menusTransformados = transformarMenus(modelo);
    //- Llamada a la funcion para transformar los alergenos
    let alergenosTransformados = transformarAlergenos(modelo);
    //- Llamada a la funcion para transformar los restaurantes
    let restaurantesTransformados = transformarRestaurantes(modelo);
    //- Llamada a la funcion para transformar los platos
    let platosTransformados = transformarPlatos(modelo);
    //- Objeto literal que contiene todos los datos que transformaremos en JSON
    const datosModelo = {
        // Agregamos el array de categorias al objeto literal
        categorias: categoriasTransformadas,
        // Agregamos el array de menus al objeto literal
        menus: menusTransformados,
        // Obtenemos los alergenos del modelo
        alergenos: alergenosTransformados,
        // Obtenemos los restaurantes del modelo
        restaurantes: restaurantesTransformados,
        // Obtenemos los platos del modelo
        platos: platosTransformados,
    };

    const formData = new FormData();
    formData.append("jsonObj", JSON.stringify(datosModelo));

    try {
        const response = await fetch("http://127.0.0.1/backup.php", {
            method: "POST",
            body: formData,
        });

        const responseDataText = await response.text();

        console.log("Respuesta del servidor:", responseDataText);
    } catch (error) {
        console.error("Se produjo un error:", error.message);
    }
}

//?//FUNCION PARA TRANSFORMAR LOS DATOS DE LAS CATEGORIAS EN UN JSON/////
function transformarCategorias(modelo) {
    // Obtenemos el iterador de categorias y lo convertimos en array
    let arrayCategorias = [...modelo.getCategories()];
    // Mapeamos el array de categorias para obtener los datos que queremos
    const categorias = arrayCategorias.map((categoria) => ({
        // Obtenemos el nombre de la categoria
        nombre: categoria.categoria.getName(),
        // Obtenemos la descripcion de la categoria
        descripcion: categoria.categoria.getDescription(),
        // Obtenemos la imagen de la categoria
        imagen: categoria.categoria.getImageUrl(),
        // Mapeamos los platos que tiene la categoria
        platos: categoria.platos.map((plato) => ({
            // Obtenemos el nombre del plato
            nombre: plato.platos.getName(),
            // Obtenemos la descripcion del plato
            descripcion: plato.platos.getDescription(),
            // Obtenemos la imagen del plato
            imagen: plato.platos.getImage(),
            // Obtenemos los ingredientes del plato
            ingredientes: plato.platos.getIngredients(),
            // Mapeamos los alergenos de los platos
            alergenos: plato.alergenos.map((alergeno) => ({
                // Obtenemos el nombre del alergeno
                nombre: alergeno.getName(),
                // Obtenemos la descripcion del alergeno
                descripcion: alergeno.getDescription(),
                // Obtenemos la imagen del alergeno
                imagen: alergeno.getImageUrl(),
            })),
        })),
    }));
    // Devolvemos el array de categorias transformado
    return categorias;
}

//?////FUNCION PARA TRANSFORMAR LOS DATOS DE LOS MENUS EN UN JSON///////
function transformarMenus(modelo) {
    // Obtenemos el iterador de menus del modelo y lo convertimos en array
    let arrayMenus = [...modelo.getMenu()];
    // Mapeamos el array de menus para obtener los datos de cada menu
    const menus = arrayMenus.map((menu) => ({
        // Obtenemos el nombre del menu
        nombre: menu.menus.getName(),
        // Obtenemos la descripcion del menu
        descripcion: menu.menus.getDescription(),
        // Obtenemos la imagen del menu
        imagen: menu.menus.getImageUrl(),
        // Mapeamos el array de platos para obtener los platos
        platos: menu.platos.map((plato) => ({
            // Obtenemos el nombre del plato
            nombre: plato.platos.getName(),
            // Obtenemos la descripcion del plato
            descripcion: plato.platos.getDescription(),
            // Obtenemos los ingradientes del plato
            ingredientes: plato.platos.getIngredients(),
            // Obtenemos la imagen del plato
            imagen: plato.platos.getImage(),
            // Mapeamos los alergenos de los platos
            alergenos: plato.alergenos.map((alergeno) => ({
                // Obtenemos el nombre del alergeno
                nombre: alergeno.getName(),
                // Obtenemos la descripcion del alergeno
                descripcion: alergeno.getDescription(),
                // Obtenemos la imagen del alergeno
                imagen: alergeno.getImageUrl(),
            })),
        })),
    }));
    // Devolvemos el array de menus transformados
    return menus;
}

//?////FUNCION PARA TRANSFORMAR LOS DATOS DE LOS ALERGENOS EN UN JSON///////
function transformarAlergenos(modelo) {
    // Obtenemos el iterador alergenos del modelo y los transformamos en un array
    let alergenosArray = [...modelo.getAllergen()];
    // Mapeamos el array de alergenos para obtener los datos de cada alergeno
    const alergenos = alergenosArray.map((alergeno) => ({
        // Obtenemos el nombre del alergeno
        nombre: alergeno.getName(),
        // Obtenemos la descripcion del alergeno
        descripcion: alergeno.getDescription(),
        // Obtenemos la imagen del alergeno
        imagen: alergeno.getImageUrl(),
    }));
    // Devolvemos el array de alergenos transformados
    return alergenos;
}

//?//FUNCION PARA TRANSFORMAR LOS DATOS DE LOS RESTAURANTES EN UN JSON///
function transformarRestaurantes(modelo) {
    // Obtenemos el iterador restaurantes del modelo y los transformamos en un array
    let restauranteArray = [...modelo.getRestaurant()];
    // Mapeamos el array de restaurantes para obtener los datos de cada restaurante
    const restaurantes = restauranteArray.map((restaurante) => {
        // Obtenemos la localizacion del restaurante
        const localizacion = restaurante.getLocation();

        // Creamos un objeto para almacenar los datos del restaurante
        const restauranteTransformado = {
            // Obtenemos el nombre del restaurante
            nombre: restaurante.getName(),
            // Obtenemos la descripcion del restaurante
            descripcion: restaurante.getDescription(),
            // Obtenemos la latitud del restaurante desde la localizacion
            latitud: localizacion.getLatitude(),
            // Obtenemos la longitud del restaurante desde la localizacion
            longitud: localizacion.getLongitude(),
        };

        // Devolvemos el objeto del restaurante transformado
        return restauranteTransformado;
    });

    // Devolvemos el array de restaurantes transformados
    return restaurantes;
}

//?/////FUNCION PARA TRANSFORMAR LOS DATOS DE LOS PLATOS EN UN JSON//////
function transformarPlatos(modelo) {
    // Obtenemos el iterador de platos del modelo y los transformamos en un array
    let platosArray = [...modelo.getDishes()];
    
    // Mapeamos el array de platos para obtener los datos de cada plato
    const platosTransformados = platosArray.map((plato) => ({
        // Obtenemos el nombre del plato
        nombre: plato.platos.getName(),
        // Obtenemos la descripción del plato
        descripcion: plato.platos.getDescription(),
        // Obtenemos la imagen del plato
        imagen: plato.platos.getImage(),
        // Obtenemos los ingredientes del plato
        ingredientes: plato.platos.getIngredients(),
        // Mapeamos los alergenos del plato
        alergenos: plato.alergenos.map((alergeno) => ({
            // Obtenemos el nombre del alergeno
            nombre: alergeno.getName(),
            // Obtenemos la descripcion del alergeno
            descripcion: alergeno.getDescription(),
            // Obtenemos la imagen del alergeno
            imagen: alergeno.getImageUrl(),
        })),
    }));

    // Devolvemos el array de platos transformados
    return platosTransformados;
}


//?////////////////////////EXPORTACIONES/////////////////////////////////
export { cargaDatosModelo, obtencioDatosModelo };
