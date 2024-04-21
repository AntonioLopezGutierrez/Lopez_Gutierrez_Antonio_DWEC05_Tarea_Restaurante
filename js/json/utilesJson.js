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
        let coordenadas = new Coordinate(restaurante.latitud, restaurante.longitud)
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
    console.log(modelo.toString());
}

//?////////////////////////EXPORTACIONES/////////////////////////////////
export { cargaDatosModelo };
