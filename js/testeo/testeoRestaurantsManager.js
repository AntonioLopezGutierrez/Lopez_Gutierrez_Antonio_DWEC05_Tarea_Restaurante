//!/////////////TESTEO DE LA CLASE RESTAURANT MANAGER////////////////////
//?////////////////////IMPORTACIONES DE CLASES///////////////////////////

import { RestaurantsManager } from "../clases/RestaurantsManager.js";
import { Coordinate } from "../clases/Coordinate.js";
import { Category } from "../clases/Category.js";

//?//////////FUNCION QUE COMPRUEBA LA INSTANCIACION DEL OBJETO///////////
function testeoInstanciacion() {
    console.log("");
    console.log("/////////TESTEO DE LA CLASE RESTAURANT MANAGER////////");
    console.log("");
    console.log("////TESTEO DE LA INSTANCIACION DEL RESTAURANT MANAGER//");

    //* Solo se puede instanciar un objeto de la clase con el constructor
    try {
        console.log("Solo se puede instanciar un objeto del la clase con el constructor");
        // Instanciamos dos objetos desde el constructor
        const instance1 = new RestaurantsManager();
        const instance2 = new RestaurantsManager();
    } catch (error) {
        // Salta la excepcion al intanciar el segundo objeto
        console.error(error.toString());
    }

    //* Comprobacion del la obtencion de la instancia con getIntance()
    console.log("Comprobacion del la obtencion de la instancia con getIntance()");
    const instance1 = RestaurantsManager.getInstance();
    const instance2 = RestaurantsManager.getInstance();
    console.log(instance1);
    console.log(instance2);

    //* Comprobacion de la misma instancia en las dos obtenciones
    console.log("Comprobacion de que los objetos son la misma instancia de la clase");
    console.log("Los objetos son la misma instancia: " + (instance1 === instance2));
}


//?///////////////FUNCION PARA EL TESTEO DE LA CATEGORIA/////////////////
function testeoCategoria() {
    console.log("");
    console.log("//////////////////TESTEO DE LA CATEGORIA DEL OBJETO////////////////////");
    console.log("Comprobacion del metodo para añadir las categorias y obtener las categorias");
    //Instanciacion del la clase RestaurantManager para hacer la pruebas
    const RestauranteManager = RestaurantsManager.getInstance();

    //Comprobacion de crear una categoria con una categoria que ya existe
    console.log("Comprobacion del metodo para crear una categoria ya existiendo la categoria");
    try {
        let categoriaNuevo = RestauranteManager.createCategory(
            "Entrantes",
            "Plato que se sirve primero"
        );
        RestauranteManager.addCategory(categoriaNuevo);
        let categoriaNuevo1 = RestauranteManager.createCategory(
            "Entrantes",
            "Plato que se sirve el ultimo"
        );
        console.log(categoriaNuevo1.categoria.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de agregar categoria con una categoria que es nul
    console.log("Comprobacion del metodo para añadir categorias con categoria null");
    try {
        let cateroriaNull = RestauranteManager.createCategory(null, null);
        RestauranteManager.addCategory(cateroriaNull);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que la categoria es una instancia de Category
    console.log(
        "Comprobacion del metodo para añadir categorias con objeto que no es instancia de Category"
    );
    try {
        let cateroriaNoInstancia = new Coordinate(100, 100);
        RestauranteManager.addCategory(cateroriaNoInstancia);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que la categoria no se puede introducir si ya existe
    console.log("Comprobacion de que la categoria no se puede introducir si ya existe");
    try {
        //Instanciamos una nueva categoria
        let cateroria = RestauranteManager.createCategory(
            "Postre",
            "Plato que se sirve justo el primero"
        );
        let cateroria2 = RestauranteManager.createCategory(
            "Postre",
            "Plato que se sirve justo el primero"
        );
        //Añadimos la nueva categoria
        RestauranteManager.addCategory(cateroria).addCategory(cateroria2);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que las categorias de añaden correctamente
    console.log("Comprobacion de que las categorias se añaden correctamente");
    try {
        let cateroria2 = RestauranteManager.createCategory(
            "Segundo plato",
            "Plato que se sirve justo despues del entrante"
        );
        RestauranteManager.addCategory(cateroria2);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para obtener las categorias
    console.log("Comprobacion del metodo para obtener las categorias");
    //Obtenemos el iterador con las categorias
    const categoriesIterador = RestauranteManager.getCategories();
    //Recorremos el iterador mostrando las categorias por pantalla
    for (const categoria of categoriesIterador) {
        console.log("Las categorias del sistema son: " + categoria.categoria);
    }

    //Comprobacion del metodo para borrar la categoria si la categoria no existe
    try {
        console.log("Comprobacion de que la categoria debe existir para el borrado");
        let cateroria2 = RestauranteManager.createCategory(
            "Consome",
            "Plato que se sirve entremedias"
        );
        RestauranteManager.removeCategory(cateroria2);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para borrar la categoria si la categoria existe
    try {
        console.log("Comprobacion de que la categoria debe existir para el borrado");
        let cateroria2 = RestauranteManager.createCategory(
            "Postre",
            "Plato que se sirve justo el primero"
        );
        RestauranteManager.removeCategory(cateroria2);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para asignar platos a las categorias
    console.log("Comprobacion del metodo para asignar platos a las categorias");
    //Insatanciamos dos objetos uno Category o otro Dish
    let cateroriaAsignar = RestauranteManager.createCategory(
        "CATEGORIA ASIGNADO",
        "Categoria para asignar platos"
    );
    let platoAsignar = RestauranteManager.createDish(
        "PLATO ASIGNADO",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    //Asignamos el plato a la categoria
    RestauranteManager.assignCategoryToDish(cateroriaAsignar, platoAsignar);
    console.log(RestauranteManager.toString());

    try {
        //Comprobacion de que si existe el plato en la categoria no lo introduce
        console.log("Comprobacion de que si existe el plato en la categoria no lo introduce");
        RestauranteManager.assignCategoryToDish(cateroriaAsignar, platoAsignar);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para asignar platos a las categorias si no existe el plato
    console.log(
        "Comprobacion del metodo para asignar platos a las categorias si no existe el plato"
    );
    //Insatanciamos dos objetos uno Category o otro Dish
    let cateroria1Asignar = RestauranteManager.createCategory(
        "CATEGORIA ASIGNADO",
        "Categoria para asignar platos"
    );
    let plato1Asignar = RestauranteManager.createDish(
        "PLATO ASIGNADO1",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    //Asignamos el plato a la categoria
    RestauranteManager.assignCategoryToDish(cateroria1Asignar, plato1Asignar);
    console.log(RestauranteManager.toString());

    try {
        //Comprobacion del metodo para desasignar platos a las categorias si no existe la categria
        console.log(
            "Comprobacion del metodo para desasignar platos a las categorias si no existe la categria"
        );
        //Insatanciamos dos objetos uno Category o otro Dish
        let cateroria3Asignar = RestauranteManager.createCategory(
            "CATEGORIA NO ASIGNADO",
            "Categoria para asignar platos"
        );
        let plato3Asignar = RestauranteManager.createDish(
            "PLATO ASIGNADO1",
            "Ternera con sal",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Desasignamos el plato a la categoria
        RestauranteManager.deassignCategoryToDish(cateroria3Asignar, plato3Asignar);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    try {
        //Comprobacion del metodo para desasignar platos a las categorias si no existe el plato
        console.log(
            "Comprobacion del metodo para desasignar platos a las categorias si no existe el plato"
        );
        //Insatanciamos dos objetos uno Category o otro Dish
        let cateroria3Asignar = RestauranteManager.createCategory(
            "CATEGORIA ASIGNADO",
            "Categoria para asignar platos"
        );
        let plato3Asignar = RestauranteManager.createDish(
            "PLATO NO ASIGNADO1",
            "Ternera con sal",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Desasignamos el plato a la categoria
        RestauranteManager.deassignCategoryToDish(cateroria3Asignar, plato3Asignar);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para desasignar platos a las categorias si existe la categoria y el plato
    console.log(
        "Comprobacion del metodo para desasignar platos a las categorias si existe la categoria y el plato"
    );
    //Insatanciamos dos objetos uno Category o otro Dish
    let cateroria2Asignar = RestauranteManager.createCategory(
        "CATEGORIA ASIGNADO",
        "Categoria para asignar platos"
    );
    let plato2Asignar = RestauranteManager.createDish(
        "PLATO ASIGNADO1",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    //Desasignamos el plato a la categoria
    RestauranteManager.deassignCategoryToDish(cateroria2Asignar, plato2Asignar);
    console.log(RestauranteManager.toString());

    //Comprobacion del metodo para borrar la categoria si la categoria existe
    try {
        console.log("Comprobacion de que al borrar la categoria los platos estan desasignados");
        let cateroria2 = RestauranteManager.createCategory(
            "CATEGORIA ASIGNADO",
            "Categoria para asignar platos"
        );
        RestauranteManager.removeCategory(cateroria2);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }
    //Comprobacion del metodo para asignar platos a las categorias
    console.log("//Comprobacion del metodo para asignar platos a las categorias");
    //Insatanciamos dos objetos uno Category o otro Dish
    let cateroria3Asignar = RestauranteManager.createCategory(
        "CATEGORIA ASIGNADO",
        "Categoria para asignar platos"
    );
    let plato3Asignar = RestauranteManager.createDish(
        "PLATO ASIGNADO3",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    //Asignamos el plato a la categoria
    RestauranteManager.assignCategoryToDish(cateroria3Asignar, plato3Asignar);
    //Instanciamos otro plato para asignarlo a la categoria
    let plato4Asignar = RestauranteManager.createDish(
        "PLATO ASIGNADO1",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    //Asignamos el plato a la categoria
    RestauranteManager.assignCategoryToDish(cateroria3Asignar, plato4Asignar);
    console.log(RestauranteManager.toString());

    try {
        //Comprobacion del metodo para obtener los platos de una categoria
        console.log("Comprobacion del metodo para obtener los platos de una categoria ordenados");
        //Instanciamos una categoria para buscar los platos
        let cateroria3Asignar = RestauranteManager.createCategory(
            "CATEGORIA ASIGNADO",
            "Categoria para asignar platos"
        );
        //Creamos una funcion para la ordenacion
        const funcionOrdenado = (platoA, platoB) => {
            return platoA.platos.getName().localeCompare(platoB.platos.getName());
        };
        //Obtenemos el iterador con los platos de la categoria
        const categoriasPlatosIterador = RestauranteManager.getDishesInCategory(
            cateroria3Asignar,
            funcionOrdenado
        );
        //Recorremos el iterador mostrando las platos por consola
        for (const plato of categoriasPlatosIterador) {
            console.log("Los platos de la categoria son: " + plato.platos);
        }
    } catch (error) {
        console.log(error.toString());
    }
}

/**
 * ///////////////////////////////////////FUNCION PARA EL TESTEO DEL MENU////////////////////////////////////
 */
function testeoMenu() {
    console.log("");
    console.log("//////////////////TESTEO DEL MENU DEL OBJETO////////////////////");
    console.log("Comprobacion del metodo para añadir menus y obtener los menus");
    //Instanciacion del la clase RestaurantManager para hacer la pruebas
    const RestauranteManager = RestaurantsManager.getInstance();

    //Comprobacion de crear un menu con un menu que ya existe
    console.log("Comprobacion del metodo para crear un menu ya existiendo el menu");
    try {
        let menuNuevo = RestauranteManager.createMenu("Menu del dia", "Cocina casera");
        RestauranteManager.addMenu(menuNuevo);
        let menuNuevo1 = RestauranteManager.createMenu("Menu del dia", "Cocina del dia");
        console.log(menuNuevo1.menus.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de agregar menu con una categoria que es null
    console.log("Comprobacion del metodo para añadir menu con null");
    try {
        let menuNull = RestauranteManager.createMenu(null, null);
        RestauranteManager.addMenu(menuNull);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que el menu es una instancia de Menu
    console.log("Comprobacion del metodo para añadir menu con objeto que no es instancia de Menu");
    try {
        let MenuNoInstancia = new Coordinate(100, 100);
        RestauranteManager.addMenu(MenuNoInstancia);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que el menu no se puede introducir si ya existe
    console.log("Comprobacion de que el menu no se puede introducir si ya existe");
    try {
        //Instanciamos dos menus iguales
        let menu1 = RestauranteManager.createMenu("Menu de semana", "Plato que del dia");
        let menu2 = RestauranteManager.createMenu("Menu de semana", "Plato que del dia");
        //Añadimos los menus
        RestauranteManager.addMenu(menu1).addMenu(menu2);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que los menus de añaden correctamente
    console.log("Comprobacion de que los menus se añaden correctamente");
    try {
        let menu1 = RestauranteManager.createMenu("Menu de tarde", "Plato que de la tarde");
        RestauranteManager.addMenu(menu1);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para obtener los menus
    console.log("Comprobacion del metodo para obtener los menus");
    //Obtenemos el iterador de los menus
    let menuIterador = RestauranteManager.getMenu();
    //Recorremos el iterador de menus mostrando los menus por consola
    for (const menus of menuIterador) {
        console.log("Los menus del sistema son: " + menus.menus);
    }

    //Comprobacion del metodo para borrar el menu si el menu no existe
    try {
        console.log("Comprobacion de que el menu debe existir para el borrado");
        let menu5 = RestauranteManager.createMenu("Menu de noche", "Plato de la noche");
        RestauranteManager.removeMenu(menu5);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para borrar el menu si el menu existe
    try {
        console.log("Comprobacion de que el menu debe existir para el borrado");
        let menu1 = RestauranteManager.createMenu("Menu de tarde", "Plato que de la tarde");
        RestauranteManager.removeMenu(menu1);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para asignar platos a los menus
    console.log("Comprobacion del metodo para asignar platos a los menus");
    //Insatanciamos dos objetos uno Menu o otro Dish
    let menuAsignar = RestauranteManager.createMenu("MENU ASIGNADO", "Menu para la asignacion");
    let platoAsignar = RestauranteManager.createDish(
        "PLATO ASIGNADO",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    //Asignamos el plato al menu
    RestauranteManager.assignDishToMenu(menuAsignar, platoAsignar);
    console.log(RestauranteManager.toString());

    try {
        //Comprobacion de que si existe el plato en el menu no lo introduce
        console.log("Comprobacion de que si existe el plato en el menu no lo introduce");
        RestauranteManager.assignDishToMenu(menuAsignar, platoAsignar);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para asignar platos a los menus si no existe el plato
    console.log("Comprobacion del metodo para asignar platos a los menus si no existe el plato");
    //Insatanciamos dos objetos uno menu o otro Dish
    let menu1Asignar = RestauranteManager.createMenu("MENU ASIGNADO", "Menu para la asignacion");
    let plato1Asignar = RestauranteManager.createDish(
        "PLATO ASIGNADO1",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    //Asignamos el plato al menu
    RestauranteManager.assignDishToMenu(menu1Asignar, plato1Asignar);
    console.log(RestauranteManager.toString());

    try {
        //Comprobacion del metodo para desasignar platos a los menus si no existen los menus
        console.log(
            "Comprobacion del metodo para desasignar platos a los menus si no existen los menus"
        );
        //Insatanciamos dos objetos uno Menu o otro Dish
        let menu3Asignar = RestauranteManager.createMenu(
            "MENU NO ASIGNADO",
            "Menu para la asignacion"
        );
        let plato3Asignar = RestauranteManager.createDish(
            "PLATO ASIGNADO",
            "Ternera con sal",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Desasignamos el plato al menu
        RestauranteManager.deassignDishToMenu(menu3Asignar, plato3Asignar);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    try {
        //Comprobacion del metodo para desasignar platos a los menus si no existe el plato
        console.log(
            "Comprobacion del metodo para desasignar platos a los menus si no existe el plato"
        );
        //Insatanciamos dos objetos uno Menu o otro Dish
        let menu3Asignar = RestauranteManager.createMenu(
            "MENU ASIGNADO",
            "Menu para la asignacion"
        );
        let plato3Asignar = RestauranteManager.createDish(
            "PLATO NO ASIGNADO1",
            "Ternera con sal",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Desasignamos el plato al menu
        RestauranteManager.deassignDishToMenu(menu3Asignar, plato3Asignar);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para desasignar platos a los menus si existe el menu y el plato
    console.log(
        "Comprobacion del metodo para desasignar platos a los menus si existe el menu y el plato"
    );
    //Insatanciamos dos objetos uno Menu o otro Dish
    let menu3Asignar = RestauranteManager.createMenu("MENU ASIGNADO", "Menu para la asignacion");
    let plato3Asignar = RestauranteManager.createDish(
        "PLATO ASIGNADO1",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    //Desasignamos el plato del menu
    RestauranteManager.deassignDishToMenu(menu3Asignar, plato3Asignar);
    console.log(RestauranteManager.toString());

    try {
        //Comprobacion del metodo para cambiar los platos de posicion si el plato1 no existe
        console.log(
            "Comprobacion del metodo para cambiar los platos de posicion si el plato1 no existe"
        );
        //Insatanciamos un objeto menu para asignarle los platos
        let menuCambiar = RestauranteManager.createMenu(
            "MENU NO CAMBIADO",
            "Menu para los cambios"
        );
        //Instanciamos un plato para asignarlo al menu
        let plato1Cambiar = RestauranteManager.createDish(
            "PLATO CAMBIADO1",
            "Plato1 para el cambio",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Instanciamos un plato para asignarlo al menu
        let plato2Cambiar = RestauranteManager.createDish(
            "PLATO CAMBIADO2",
            "Plato2 para el cambio",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Asignamos el plato al menu
        RestauranteManager.assignDishToMenu(menuCambiar, plato2Cambiar);
        //Cambiamos el plato de posicion
        RestauranteManager.changeDishesPositionsInMenu(menuCambiar, plato1Cambiar, plato2Cambiar);
    } catch (error) {
        console.log(error.toString());
    }

    try {
        //Comprobacion del metodo para cambiar los platos de posicion si el plato2 no existe
        console.log(
            "Comprobacion del metodo para cambiar los platos de posicion si el plato2 no existe"
        );
        //Insatanciamos un objeto menu para asignarle los platos
        let menuCambiar = RestauranteManager.createMenu(
            "MENU NO CAMBIADO",
            "Menu para los cambios"
        );
        //Instanciamos un plato para asignarlo al menu
        let plato1Cambiar = RestauranteManager.createDish(
            "PLATO CAMBIADO1",
            "Plato1 para el cambio",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Asignamos el plato al menu
        RestauranteManager.assignDishToMenu(menuCambiar, plato1Cambiar);
        //Instanciamos un plato para asignarlo al menu
        let plato2Cambiar = RestauranteManager.createDish(
            "PLATO CAMBIADO22",
            "Plato2 para el cambio",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Cambiamos el plato de posicion
        RestauranteManager.changeDishesPositionsInMenu(menuCambiar, plato1Cambiar, plato2Cambiar);
    } catch (error) {
        console.log(error.toString());
    }

    try {
        //Comprobacion del metodo para cambiar los platos de posicion
        console.log("Comprobacion del metodo para cambiar los platos de posicion");
        //Insatanciamos un objeto menu para asignarle los platos
        let menuCambiar = RestauranteManager.createMenu("MENU CAMBIADO", "Menu para los cambios");
        //Añadimos el menu para que exista en la lista
        RestauranteManager.addMenu(menuCambiar);
        //Instanciamos un plato para asignarlo al menu
        let plato1Cambiar = RestauranteManager.createDish(
            "PLATO CAMBIADO1",
            "Plato1 para el cambio",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Asignamos el plato al menu
        RestauranteManager.assignDishToMenu(menuCambiar, plato1Cambiar);
        //Instanciamos un plato para asignarlo al menu
        let plato2Cambiar = RestauranteManager.createDish(
            "PLATO CAMBIADO2",
            "Plato2 para el cambio",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Asignamos el plato al menu
        RestauranteManager.assignDishToMenu(menuCambiar, plato2Cambiar);
        //Cambiamos el plato de posicion
        RestauranteManager.changeDishesPositionsInMenu(menuCambiar, plato1Cambiar, plato2Cambiar);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }
}

/**
 * ///////////////////////////////////////FUNCION PARA EL TESTEO DEL ALLERGEN////////////////////////////////////
 */
function testeoAllergen() {
    console.log("");
    console.log("//////////////////TESTEO DEL ALLERGEN DEL OBJETO////////////////////");
    console.log("Comprobacion del metodo para añadir alergenos y obtener los alergenos");
    //Instanciacion del la clase RestaurantManager para hacer la pruebas
    const RestauranteManager = RestaurantsManager.getInstance();

    //Comprobacion de crear un alergeno con un alergeno que ya existe
    console.log("Comprobacion del metodo para crear un alergeno ya existiendo el alergeno");
    try {
        let alergenoNuevo = RestauranteManager.createAllergen("Gluten", "Se encuentra en el trigo");
        RestauranteManager.addAllergen(alergenoNuevo);
        let alergenoNuevo1 = RestauranteManager.createAllergen("Gluten", "Se encuentra en el agua");
        console.log(alergenoNuevo.toString());
        console.log(alergenoNuevo1.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de agregar alergeno con una alergeno que es null
    console.log("Comprobacion del metodo para añadir alergeno con null");
    try {
        let alergenoNull = RestauranteManager.createAllergen(null, null);
        RestauranteManager.addAllergen(alergenoNull);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que el alergeno es una instancia de Allergen
    console.log(
        "Comprobacion del metodo para añadir alergeno con objeto que no es instancia de Allergen"
    );
    try {
        let AllergenNoInstancia = new Coordinate(100, 100);
        RestauranteManager.addAllergen(AllergenNoInstancia);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que el alergeno no se puede introducir si ya existe
    console.log("Comprobacion de que el alergeno no se puede introducir si ya existe");
    try {
        //Instanciamos dos alergenos iguales
        let allergen1 = RestauranteManager.createAllergen("Lactosa", "Alergeno de la leche");
        let allergen3 = RestauranteManager.createAllergen("Lactosa", "Alergeno de la leche");
        //Añadimos los alergenos
        RestauranteManager.addAllergen(allergen1).addAllergen(allergen3);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que los alergenos de añaden correctamente
    console.log("Comprobacion de que los alergenos se añaden correctamente");
    try {
        let allergen2 = RestauranteManager.createAllergen("Huevo", "Alergeno del huevo");
        RestauranteManager.addAllergen(allergen2);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para obtener los alergenos
    console.log("Comprobacion del metodo para obtener los alergenos");
    //Obtenemos el iterador de los alergenos
    let alergenoIterador = RestauranteManager.getAllergen();
    //Recorremos el iterador de menus mostrando los menus por consola
    for (const alergeno of alergenoIterador) {
        console.log("Los alergenos del sistema son: " + alergeno);
    }

    //Comprobacion del metodo para borrar el alergeno si el alergeno no existe
    try {
        console.log("Comprobacion de que el alergeno debe existir para el borrado");
        let allergen2 = RestauranteManager.createAllergen("Apio", "Alergeno del apio");
        RestauranteManager.removeAllergen(allergen2);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para borrar el alergeno si el alergeno existe
    try {
        console.log("Comprobacion de que el alergeno debe existir para el borrado");
        let allergen2 = RestauranteManager.createAllergen("Huevo", "Alergeno del huevo");
        RestauranteManager.removeAllergen(allergen2);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }
}

/**
 * ///////////////////////////////////////FUNCION PARA EL TESTEO DEL RESTAURANT////////////////////////////////////
 */
function testeoRestaurant() {
    console.log("");
    console.log("//////////////////TESTEO DEL RESTAURANTE DEL OBJETO////////////////////");
    console.log("Comprobacion del metodo para añadir restaurante y obtener los restaurante");
    //Instanciacion del la clase RestaurantManager para hacer la pruebas
    const RestauranteManager = RestaurantsManager.getInstance();

    //Comprobacion de crear un restaurante con un restaurante que ya existe
    console.log("Comprobacion del metodo para crear un restaurante ya existiendo el restaurante");
    try {
        let coordenada1 = new Coordinate(100, 100);
        let restauranteNuevo = RestauranteManager.createRestaurant(
            "Avila",
            "Restaurante de carne",
            coordenada1
        );
        RestauranteManager.addRestaurant(restauranteNuevo);
        let restauranteNuevo1 = RestauranteManager.createRestaurant(
            "Avila",
            "Restaurante de arroces",
            coordenada1
        );
        console.log(restauranteNuevo.toString());
        console.log(restauranteNuevo1.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de agregar restaurante con un restaurante que es null
    console.log("Comprobacion del metodo para añadir restaurante con null");
    try {
        let coordenada1 = new Coordinate(100, 100);
        let restauranteNull = RestauranteManager.createRestaurant(null, null, coordenada1);
        RestauranteManager.addRestaurant(restauranteNull);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que el restaurante es una instancia de Restaurant
    console.log(
        "Comprobacion del metodo para añadir restaurante con objeto que no es instancia de Restaurant"
    );
    try {
        let restauranteNoInstancia = new Coordinate(100, 100);
        RestauranteManager.addRestaurant(restauranteNoInstancia);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que el restaurante no se puede introducir si ya existe
    console.log("Comprobacion de que el restaurante no se puede introducir si ya existe");
    try {
        let coordenada1 = new Coordinate(100, 100);
        let restaurante1 = RestauranteManager.createRestaurant(
            "Avenida",
            "Restaurante de arroces",
            coordenada1
        );
        let restaurante2 = RestauranteManager.createRestaurant(
            "Avenida",
            "Restaurante de arroces",
            coordenada1
        );
        //Añadimos los restaurantes
        RestauranteManager.addRestaurant(restaurante1).addRestaurant(restaurante2);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que los restaurante de añaden correctamente
    console.log("Comprobacion de que los restaurante se añaden correctamente");
    try {
        let coordenada1 = new Coordinate(100, 100);
        let restaurante1 = RestauranteManager.createRestaurant(
            "Meson",
            "Restaurante de ternera",
            coordenada1
        );
        RestauranteManager.addRestaurant(restaurante1);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para obtener los restaurante
    console.log("Comprobacion del metodo para obtener los restaurante");
    //Obtenemos el iterador de los restaurantes
    let restauranteIterador = RestauranteManager.getRestaurant();
    //Recorremos el iterador de restaurantes mostrando los restaurantes por consola
    for (const restaurante of restauranteIterador) {
        console.log("Los restaurantes del sistema son: " + restaurante);
    }

    //Comprobacion del metodo para borrar el restaurante si el restaurante no existe
    try {
        console.log("Comprobacion de que el restaurante debe existir para el borrado");
        let coordenada1 = new Coordinate(100, 100);
        let restaurante1 = RestauranteManager.createRestaurant(
            "Restaurante leo",
            "Restaurante de marisco",
            coordenada1
        );
        RestauranteManager.removeRestaurant(restaurante1);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para borrar el restaurante si el restaurante existe
    try {
        console.log("Comprobacion de que el restaurante debe existir para el borrado");
        let coordenada1 = new Coordinate(100, 100);
        let restaurante1 = RestauranteManager.createRestaurant(
            "Meson",
            "Restaurante de ternera",
            coordenada1
        );
        RestauranteManager.removeRestaurant(restaurante1);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }
}

/**
 * ///////////////////////////////////////FUNCION PARA EL TESTEO DEL PLATO////////////////////////////////////
 */
function testeoPlato() {
    console.log("");
    console.log("//////////////////TESTEO DEL DEL PLATO DEL OBJETO////////////////////");
    console.log("Comprobacion del metodo para añadir plato y borrar plato");
    //Instanciacion del la clase RestaurantManager para hacer la pruebas
    const RestauranteManager = RestaurantsManager.getInstance();

    //Comprobacion de crear un plato con un plato con un plato que ya existe
    console.log("Comprobacion del metodo para crear un plato ya existiendo el plato");
    try {
        let platoNuevo = RestauranteManager.createDish(
            "Ternera",
            "Ternera con sal",
            ["Ternera", "sal"],
            "../imagenes"
        );
        RestauranteManager.addDish(platoNuevo);
        let platoNuevo1 = RestauranteManager.createDish(
            "Ternera",
            "Ternera con pimienta",
            ["Ternera", "pimienta"],
            "../imagen"
        );
        console.log(platoNuevo.platos.toString());
        console.log(platoNuevo1.platos.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de agregar plato con un plato que es null
    console.log("Comprobacion del metodo para añadir plato con null");
    try {
        let platoNull = RestauranteManager.createDish(null, null);
        RestauranteManager.addDish(platoNull);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que el plato es una instancia de Dish
    console.log("Comprobacion del metodo para añadir plato con objeto que no es instancia de Dish");
    try {
        let platoNoInstancia = new Coordinate(100, 100);
        RestauranteManager.addDish(platoNoInstancia);
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que el plato no se puede introducir si ya existe
    console.log("Comprobacion de que el plato no se puede introducir si ya existe");
    try {
        //Instanciamos dos platos iguales
        let plato1 = RestauranteManager.createDish(
            "Esparragos",
            "Esparragos a la plancha",
            ["Ternera", "pimienta"],
            "../imagen"
        );
        let plato2 = RestauranteManager.createDish(
            "Esparragos",
            "Esparragos a la plancha",
            ["Ternera", "pimienta"],
            "../imagen"
        );
        //Añadimos los platos
        RestauranteManager.addDish(plato1).addDish(plato2);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion de que el plato de añaden correctamente
    console.log("Comprobacion de que el plato se añaden correctamente");
    try {
        let plato1 = RestauranteManager.createDish(
            "Salmon",
            "Salmon con guarnicion",
            ["Salmon", "patatas"],
            "../imagen"
        );
        RestauranteManager.addDish(plato1);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para asignar alergenos a los platos
    console.log("Comprobacion del metodo para asignar alergenos a los platos");
    //Insatanciamos dos objetos uno Category o otro Dish
    let alergenoAsignar = RestauranteManager.createAllergen(
        "ALERGENO ASIGNADO",
        "Alergeno para asignar"
    );
    let platoAsignar = RestauranteManager.createDish(
        "PLATO ASIGNADO",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    //Asignamos el plato a la categoria
    RestauranteManager.assignAllergenToDish(platoAsignar, alergenoAsignar);
    console.log(RestauranteManager.toString());

    try {
        //Comporbacion de que si el alergeno ya existe en el plato no se puede volver a almacenar
        console.log(
            "Comporbacion de que si el alergeno ya existe en el plato no se puede volver a almacenar"
        );
        RestauranteManager.assignAllergenToDish(platoAsignar, alergenoAsignar);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para asignar alergenos a los platos si el alergeno es diferente
    console.log(
        "Comprobacion del metodo para asignar alergenos a los platos si el alergeno es diferente"
    );
    //Insatanciamos dos objetos uno Category o otro Dish
    let alergeno1Asignar = RestauranteManager.createAllergen(
        "ALERGENO ASIGNADO1",
        "Alergeno para asignar"
    );
    let plato1Asignar = RestauranteManager.createDish(
        "PLATO ASIGNADO",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    //Asignamos el plato a la categoria
    RestauranteManager.assignAllergenToDish(plato1Asignar, alergeno1Asignar);
    console.log(RestauranteManager.toString());

    try {
        //Comprobacion del metodo para desasignar alergenos a los platos si no existe el plato
        console.log(
            "Comprobacion del metodo para desasignar alergenos a los platos si no existe el plato"
        );
        //Insatanciamos dos objetos uno Category o otro Dish
        let plato3Asignar = RestauranteManager.createDish(
            "PLATO NO ASIGNADO1",
            "Ternera con sal",
            ["Ternera", "sal"],
            "../imagenes"
        );
        let alergeno4Asignar = RestauranteManager.createAllergen(
            "ALERGENO ASIGNADO1",
            "Alergeno para asignar"
        );
        //Desasignamos el plato a la categoria
        RestauranteManager.deassignAllergenToDish(plato3Asignar, alergeno4Asignar);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    try {
        //Comprobacion del metodo para desasignar alergenos a los platos si no existe el alergeno
        console.log(
            "Comprobacion del metodo para desasignar alergenos a los platos si no existe el alergeno"
        );
        //Insatanciamos dos objetos uno Category o otro Dish
        let plato3Asignar = RestauranteManager.createDish(
            "PLATO ASIGNADO",
            "Ternera con sal",
            ["Ternera", "sal"],
            "../imagenes"
        );
        let alergeno2Asignar = RestauranteManager.createAllergen(
            "ALERGENO NO ASIGNADO1",
            "Alergeno para asignar"
        );
        //Desasignamos el plato a la categoria
        RestauranteManager.deassignAllergenToDish(plato3Asignar, alergeno2Asignar);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para desasignar alergenos a los platos si existe el plato y el alergeno
    console.log(
        "Comprobacion del metodo para desasignar alergenos a los platos si existe el plato y el alergeno"
    );
    //Insatanciamos dos objetos uno Dish y otro allergen
    let plato2Asignar = RestauranteManager.createDish(
        "PLATO ASIGNADO",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    let alergeno2Asignar = RestauranteManager.createAllergen(
        "ALERGENO ASIGNADO1",
        "Alergeno para asignar"
    );
    //Desasignamos el plato a la categoria
    RestauranteManager.deassignAllergenToDish(plato2Asignar, alergeno2Asignar);
    console.log(RestauranteManager.toString());

    //Comprobacion del metodo para borrar el plato no existe
    try {
        console.log("Comprobacion del metodo para borrar si el plato no existe");
        //Instanciamos un plato que no se encuentra en la lista del platos
        let plato1 = RestauranteManager.createDish(
            "PLATO NO ASIGNADO",
            "Ternera con sal",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Intentamos borrar el plato pero salta la excepcion
        RestauranteManager.removeDish(plato1);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para borrar si se borra un plato que esta asignado a la categoria, menu y alergenos

    try {
        console.log(
            "Comprobacion del metodo para borrar si se borra un plato que esta asignado a la categoria, menu y alergenos"
        );
        //Instaciamos un plato que se encuentra en los menus, en las categorias y tiene alergenos asignados
        let plato1 = RestauranteManager.createDish(
            "PLATO ASIGNADO",
            "Ternera con sal",
            ["Ternera", "sal"],
            "../imagenes"
        );
        //Borramos el plato asignado
        RestauranteManager.removeDish(plato1);
        console.log(RestauranteManager.toString());
    } catch (error) {
        console.log(error.toString());
    }

    //Comprobacion del metodo para asignar alergenos
    console.log("Comprobacion del metodo para asignar alergenos");
    //Insatanciamos dos objetos uno Dish y otro Allergen
    let plato3Asignar = RestauranteManager.createDish(
        "PLATO ASIGNADO2",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    let alergeno3Asignar = RestauranteManager.createAllergen(
        "ALERGENO ASIGNADO2",
        "Alergeno para asignar"
    );
    //Asignamos el alergeno al plato
    RestauranteManager.assignAllergenToDish(plato3Asignar, alergeno3Asignar);
    //Instanciamos otro plato
    let plato4Asignar = RestauranteManager.createDish(
        "PLATO ASIGNADO1",
        "Ternera con sal",
        ["Ternera", "sal"],
        "../imagenes"
    );
    let alergeno4Asignar = RestauranteManager.createAllergen(
        "ALERGENO ASIGNADO2",
        "Alergeno para asignar"
    );
    //Asignamos el alergeno al plato
    RestauranteManager.assignAllergenToDish(plato4Asignar, alergeno4Asignar);
    console.log(RestauranteManager.toString());

    try {
        //Comprobacion del metodo para obtener los alergenos de un plato
        console.log(
            "Comprobacion del metodo para obtener los alergenos de un plato ordenados ordenados"
        );
        //Instanciamos un alergeno para buscar los platos
        let alergeno3Asignar = RestauranteManager.createAllergen(
            "ALERGENO ASIGNADO2",
            "Alergeno para asignar"
        );
        //Creamos una funcion para la ordenacion
        const funcionOrdenado = (platoA, platoB) => {
            return platoA.platos.getName().localeCompare(platoB.platos.getName());
        };
        //Obtenemos el iterador con los platos que tienen el alergeno
        const categoriasPlatosIterador = RestauranteManager.getDishesWithAllergen(
            alergeno3Asignar,
            funcionOrdenado
        );
        //Recorremos el iterador mostrando las platos por consola
        for (const plato of categoriasPlatosIterador) {
            console.log("Los platos que contienen ese alergeno son: " + plato.platos);
        }
    } catch (error) {
        console.log(error.toString());
    }

    //Funcion de callback que nos devolvera el nombre de los menus
    function filtroMenu(plato, menu) {
        // Devolvemos true si el menú contiene el plato
        return menu.platos.some((dish) => dish.platos.getName() === plato.platos.getName());
    }

    //Comprobación del método para obtener un iterador con una función de callback
    try {
        console.log("Comprobación del método para obtener un iterador con una función de callback");
        //Instanciamos un plato
        let plato4Asignar = RestauranteManager.createDish(
            "PLATO CAMBIADO2",
            "Ternera con sal",
            ["Ternera", "sal"],
            "../imagenes"
        );

        //Creamos la funcion de ordenacion
        const funcionOrdenado = (menuA, menuB) => {
            return menuA.menus.getName().localeCompare(menuB.menus.getName());
        };

        //LLamada al metodo para obtener iterador al que le pasaremos el plato, la funcion, y la ordenacion
        const menusPlatosIterador = RestauranteManager.findDishes(
            plato4Asignar,
            filtroMenu,
            funcionOrdenado
        );

        //Recorremos el iterador mostrando los menus que contiene el plato instancado
        for (const menu of menusPlatosIterador) {
            console.log("El menú que contiene ese plato es: " + menu.menus.getName());
        }
    } catch (error) {
        console.log(error.toString());
    }
}



//!///////////CARGADO DE LAS FUNCIONES AL INICIAR LA PAGINA///////////////
window.addEventListener("load", function () {
    testeoInstanciacion();
    testeoCategoria();
    testeoMenu();
    testeoAllergen();
    testeoRestaurant();
    testeoPlato();
});
