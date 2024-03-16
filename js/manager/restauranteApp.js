//!////////////////////////RESTAURANTE APP///////////////////////////////
//?/////////////////////////IMPORTACIONES///////////////////////////////
// Importacion del objeto coordenada
import { Coordinate } from "../clases/Coordinate.js";
// Importacion del modelo
import { RestauranteModelo } from "../manager/RestauranteModelo.js";
// Importacion de la vista
import { RestauranteVista } from "../manager/RestauranteVista.js";
// Importacion del controlador
import { RestauranteControlador } from "../manager/RestauranteControlador.js";

//*********Creacion del manager al que le introduciremos los datos*******
let restauranteModelo = new RestauranteModelo();

//?////////////////INTRODUCIR LOS DATOS EN EL MODELO//////////////////////
console.log("//////////////DATOS DE NUESTRA APLICACION////////////////");
console.log("");
//*****************Creacion y agregacion de las categorias**************
//+ Creacion de las categorias
// Creacion de la primera categoria
let categoria1 = restauranteModelo.createCategory(
    "Entrantes",
    "Son pequeñas porciones para abrir el apetito"
);
// Creacion de la segunda categoria
let categoria2 = restauranteModelo.createCategory(
    "Primeros",
    "Es mas ligero que el plato principal"
);
// Creacion de la tercera categoria
let categoria3 = restauranteModelo.createCategory("Segundos", "Es el plato principal de la comida");
// Creacion de la tercera categoria
let categoria4 = restauranteModelo.createCategory("Postre", "Es el ultimo plato de la comida");
//+ Agregar las categorias
// Añadimos la primerra categoria
restauranteModelo.addCategory(categoria1);
// Añadimos la segunda categoria
restauranteModelo.addCategory(categoria2);
// Añadimos la tercera categoria
restauranteModelo.addCategory(categoria3);
// Añadimos la cuarta categoria
restauranteModelo.addCategory(categoria4);

//*************Creacion de platos y asignado a las categorias************
//+ Creacion de los platos
// Creacion del plato 1
let plato1 = restauranteModelo.createDish(
    "Sepia",
    "Es un plato de sepia a la plancha",
    ["Sepia, esparragos, peregil, aceite"],
    "/imagenes/imagenePlatos/imagenSepia.png"
);
// Creacion del plato 2
let plato2 = restauranteModelo.createDish(
    "Salmon",
    "Es un plato se salmon a la plancha",
    ["Salmon, cebolla, esparragos, sal, romero"],
    "/imagenes/imagenePlatos/imagenSalmon.png"
);
// Creacion del plato 3
let plato3 = restauranteModelo.createDish(
    "Salmorejo",
    "Es un plato de tipico Cordobes",
    ["Pimiento, tomate, cebolla, jamon, huevo"],
    "/imagenes/imagenePlatos/imagenSalmorejo.png"
);
// Creacio del plato 4
let plato4 = restauranteModelo.createDish(
    "Ensalada",
    "Es un plato muy refrescante y bajo en calorias",
    ["Lechuga, tomate, maiz, nueces, atun"],
    "/imagenes/imagenePlatos/imagenEnsalada.png"
);
// Creacion del plato 5
let plato5 = restauranteModelo.createDish(
    "Pimientos",
    "Pimientos del padron rellenos de merluza",
    ["Pimiento, sal, aceite, pan rallado, merluza"],
    "/imagenes/imagenePlatos/imagenPimientos.png"
);
// Creacion del plato 6
let plato6 = restauranteModelo.createDish(
    "Risotto",
    "Es un plato italiano de arroz meloso",
    ["Arroz, gambas, queso parmesano, nata, cebolla"],
    "/imagenes/imagenePlatos/imagenRisotto.png"
);
// Creacion del plato 7
let plato7 = restauranteModelo.createDish(
    "Albondigas",
    "Es un plato de albondigas de ternera con salsa de tomate",
    ["Carne de ternera, tomate, cebolla, caldo de verdura, queso parmesano"],
    "/imagenes/imagenePlatos/imagenAlbondigas.png"
);
// Creacion del plato 8
let plato8 = restauranteModelo.createDish(
    "Tortilla",
    "Plato tipico español",
    ["Huevo, patatas, aceite, sal"],
    "/imagenes/imagenePlatos/imagenTortilla.png"
);
// Creacion del plato 9
let plato9 = restauranteModelo.createDish(
    "Sushi",
    "Laminas de pescado crudo con arroz cocido",
    ["Arroz, atun, salmon, merluza, algas"],
    "/imagenes/imagenePlatos/imagenSushi.png"
);
// Creacion del plato 10
let plato10 = restauranteModelo.createDish(
    "Fajitas",
    "Pechuga de pollo a la plancha con sofrito de verduras",
    ["Pollo, tomate, cebolla, pimiento, totitas de harina"],
    "/imagenes/imagenePlatos/imagenFajitas.png"
);
// Creacion del plato 11
let plato11 = restauranteModelo.createDish(
    "Ratatouille",
    "Es un plato tipico frances de verduras",
    ["Berenjena, calabacin, tomate, hiervas Aromaticas"],
    "/imagenes/imagenePlatos/imagenRatatouille.png"
);
// Creacion del plato 12
let plato12 = restauranteModelo.createDish(
    "Macarrones",
    "Es un plato italiano de pasta",
    ["Macarrones, salsa de tomate, carne de ternera, queso, oregano"],
    "/imagenes/imagenePlatos/imagenMacarrones.png"
);
// Creacion del plato 13
let plato13 = restauranteModelo.createDish(
    "Bizcocho",
    "Es un bizcocho de chocolate",
    ["Harina, huevos, lebadura, chocolate"],
    "/imagenes/imagenePlatos/imagenBizcocho.png"
);
// Creacion del plato 14
let plato14 = restauranteModelo.createDish(
    "Tarta",
    "Es una tarta de frutas",
    ["Fresas, hojaldre, crema, uvas, ciruelas"],
    "/imagenes/imagenePlatos/imagenTarta.png"
);
// Creacion del plato 15
let plato15 = restauranteModelo.createDish(
    "Flan",
    "Es un flan de huevo con frambuesas",
    ["Huevos, azucar, frambuesa"],
    "/imagenes/imagenePlatos/imagenFlan.png"
);
// Creacion del plato 16
let plato16 = restauranteModelo.createDish(
    "Frutas",
    "Es un baquillo de de frutas silvestres",
    ["Fresas, ciruelas, frambuesas, moras"],
    "/imagenes/imagenePlatos/imagenFrutas.png"
);

//+ Asignamos los platos a las categorias
// Añadimos los platos de la categoria 1
restauranteModelo.assignCategoryToDish(categoria1, plato1);
restauranteModelo.assignCategoryToDish(categoria1, plato3);
restauranteModelo.assignCategoryToDish(categoria1, plato5);
restauranteModelo.assignCategoryToDish(categoria1, plato8);
// Añadimos los platos de la categoria 2
restauranteModelo.assignCategoryToDish(categoria2, plato2);
restauranteModelo.assignCategoryToDish(categoria2, plato4);
restauranteModelo.assignCategoryToDish(categoria2, plato6);
restauranteModelo.assignCategoryToDish(categoria2, plato7);
// Añadimos los platos de la categoria 3
restauranteModelo.assignCategoryToDish(categoria3, plato9);
restauranteModelo.assignCategoryToDish(categoria3, plato10);
restauranteModelo.assignCategoryToDish(categoria3, plato11);
restauranteModelo.assignCategoryToDish(categoria3, plato12);
// Añadimos los platos de la categoria 3
restauranteModelo.assignCategoryToDish(categoria4, plato13);
restauranteModelo.assignCategoryToDish(categoria4, plato14);
restauranteModelo.assignCategoryToDish(categoria4, plato15);
restauranteModelo.assignCategoryToDish(categoria4, plato16);

//***********Creacion de alergenos y asignacion a las platos*************
//+ Creacion de alergenos
// Creamos el primer alergeno
let alergeno1 = restauranteModelo.createAllergen(
    "Lacteos",
    "Son alergenos derivados de la leche de la vaca"
);
// Creamos el segundo alergeno
let alergeno2 = restauranteModelo.createAllergen(
    "Frutos secos",
    "Son alergenos derivados de los frutos secos"
);
// Creamos el tercer alergeno
let alergeno3 = restauranteModelo.createAllergen(
    "Pescado",
    "Son alergenos derivados de los pescados y mariscos"
);
// Creamos el cuarto alergeno
let alergeno4 = restauranteModelo.createAllergen(
    "Proteinas",
    "Son alergenos derivados de las proteinas de algunos productos"
);
// Creamos el quinto alergeno
let alergeno5 = restauranteModelo.createAllergen(
    "Gluten",
    "Son alergenos derivados del trigo, cebada, centeno y deribados"
);
// Creamos el sexto alergeno
let alergeno6 = restauranteModelo.createAllergen(
    "Verduras",
    "Son alergenos derivados de las verduras como pueden ser las berejenas o calabacines"
);

//+ Agregacion de los alegenos a los platos
// Agregacion del alergeno 3 al plato 1
restauranteModelo.assignAllergenToDish(plato1, alergeno3);
// Agregacion del alergeno 4 al plato 2
restauranteModelo.assignAllergenToDish(plato2, alergeno4);
// Agregacion del alergeno 1 al plato 3
restauranteModelo.assignAllergenToDish(plato3, alergeno1);
// Agregacion del alergeno 2 al plato 4
restauranteModelo.assignAllergenToDish(plato4, alergeno2);
// Agregacion del alergeno 5 al plato 5
restauranteModelo.assignAllergenToDish(plato5, alergeno5);
// Agregacion del alergeno 4 al plato 6
restauranteModelo.assignAllergenToDish(plato6, alergeno4);
// Agregacion del alergeno 1 al plato 7
restauranteModelo.assignAllergenToDish(plato7, alergeno1);
// Agregacion del alergeno 1 al plato 8
restauranteModelo.assignAllergenToDish(plato8, alergeno1);
// Agregacion del alergeno 3 al plato 9
restauranteModelo.assignAllergenToDish(plato9, alergeno3);
// Agregacion del alergeno 5 al plato 10
restauranteModelo.assignAllergenToDish(plato10, alergeno5);
// Agregacion del alergeno 6 al plato 11
restauranteModelo.assignAllergenToDish(plato11, alergeno6);
// Agregacion del alergeno 1 al plato 12
restauranteModelo.assignAllergenToDish(plato12, alergeno1);
// Agregacion del alergeno 1 al plato 13
restauranteModelo.assignAllergenToDish(plato13, alergeno2);
// Agregacion del alergeno 1 al plato 14
restauranteModelo.assignAllergenToDish(plato14, alergeno5);
// Agregacion del alergeno 1 al plato 15
restauranteModelo.assignAllergenToDish(plato15, alergeno1);
// Agregacion del alergeno 1 al plato 16
restauranteModelo.assignAllergenToDish(plato16, alergeno5);

//*******Creacion de menus y de platos y asignacion a las platos*********
//+ Creacion de los menus
// Creacion del primer menu
let menu1 = restauranteModelo.createMenu(
    "Menu de la casa",
    "Menus de elaborado con platos de la casa"
);
// Creacion del segundo menu
let menu2 = restauranteModelo.createMenu(
    "Menu de la casa especial",
    "Menus degustacion de platos especiales"
);
// Creacion del tercer menu
let menu3 = restauranteModelo.createMenu(
    "Menu de fin de semana",
    "Menus para fines de semana y festivos"
);
//+ Asignado de platos al menu
// Asignamos los platos al menu 1
restauranteModelo.assignDishToMenu(menu1, plato1);
restauranteModelo.assignDishToMenu(menu1, plato3);
restauranteModelo.assignDishToMenu(menu1, plato5);
// Asignamos los platos al menu 2
restauranteModelo.assignDishToMenu(menu2, plato2);
restauranteModelo.assignDishToMenu(menu2, plato4);
restauranteModelo.assignDishToMenu(menu2, plato6);
// Asignamos los platos al menu 3
restauranteModelo.assignDishToMenu(menu3, plato7);
restauranteModelo.assignDishToMenu(menu3, plato9);
restauranteModelo.assignDishToMenu(menu3, plato11);

//******************Creacion de restaurantes*****************************
//+ Creacion de las coordenadas para el restaurante
// Creacion de la primera coordenada
let coordenada1 = new Coordinate(20, 15);
// Creacion de la segunda coordenada
let coordenada2 = new Coordinate(50, 70);
// Creacion de la tercera coordenada
let coordenada3 = new Coordinate(50, 70);
//+ Creacion de los restaurantes
// Creacion del pprimer restaurante
let restaurante1 = restauranteModelo.createRestaurant(
    "Meson Pepe",
    "Restaurante especialista en carnes",
    coordenada1
);
// Creacion del segundo restaurante
let restaurante2 = restauranteModelo.createRestaurant(
    "Xin Chan",
    "Restaurante especializado en comida china",
    coordenada2
);
// Creacion del tercer restaurante
let restaurante3 = restauranteModelo.createRestaurant(
    "El Tayo",
    "Restaurante especializado en paellas y otros arroces",
    coordenada3
);
//+ Agregacion de los restaurantes
// Agregacion del primer restaurante
restauranteModelo.addRestaurant(restaurante1);
// Agregacion del segundo restaurante
restauranteModelo.addRestaurant(restaurante2);
// Agregacion del tercero restaurante
restauranteModelo.addRestaurant(restaurante3);

//*****************Mostrado del manager por la consola*******************
//console.log(restauranteModelo.toString());

//?/////////////////////INSTANCIACION DEL CONTROLADOR///////////////////
// Instanciamos un controlador con los argumentos el modelo y la vista
let miControlador = new RestauranteControlador(
    restauranteModelo.getInstance(),
    new RestauranteVista()
);

//?///////////////////////////EXPORTACIONES//////////////////////////////
export { miControlador };
