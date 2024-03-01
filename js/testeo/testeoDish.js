/**
 * /////////////////////////////////////IMPORTACIONES DE CLASES//////////////////////////////////////////
 */
import { Dish } from "../clases/Dish.js";

/**
 * ////////////////////////////////////////TESTEO DE LS CLASE DISH///////////////////////////////////
 */
function testeoDish() {
    console.log("");
    console.log("////////////////////////////////TESTEO DE LA CLASE DISH///////////////////////////");
    //Creacion de un plato sin nombre
    try {
        console.log("Plato sin introducir el nombre para que salte la excepcion");
        let plato = new Dish();
    } catch (error) {
        console.log(error.toString());
    }

    //Creacion del objeto solo con el nombre
    console.log("El plato solo con el nombre es: ")
    let plato1 = new Dish("Coliflor");
    console.log(plato1.toString());

    //Creacion de objeto con todos los campos
    console.log("El plato con todos los argumentos es: ")
    let ingredientes = ["pan", "leche"];
    let plato2 = new Dish("Torrijas", "Plato tipico de almagro", ingredientes, "../imagenes/imagenePlatos/fotoTorrijas.png");
    console.log(plato2.toString());


    //Comporbacion de los getter y setter de nombre
    console.log("Comprobacion del getter y setter del nombre");
    try {
        plato2.setName();
    } catch (error) {
        console.log(error.toString());
    }
    plato2.setName("Entrecot");
    console.log("El nombre del plato modificado es: " + plato2.getName());

    //Comporbacion de los getter y setter de descripcion
    console.log("Comprobacion del getter y setter de la descripcion");
    plato2.setDescription("Es una carne de ternera");
    console.log("La descripcion del plato modificada es: " + plato2.getDescription());

    //Comporbacion de los getter y setter de los ingredientes
    console.log("Comprobacion del getter y setter de los ingredientes");
    let ingredientes1 = ["carne", "sal"];
    plato2.setIngredients(ingredientes1);
    console.log("Los ingredientes modificados son: " + plato2.getIngredients());

    //Comporbacion de los getter y setter de las ruta de imagen
    console.log("Comprobacion del getter y setter de las rutas de imagenes");
    plato2.setImage("../imagenes");
    console.log("La ruta modificada es: " + plato2.getImage());

    //Mostrado del plato modificado
    console.log("Plato completamente modificado")
    console.log("El plato modificado es: " + plato2.toString())

}

//Mostrado al cargar la pagina de la funcion
window.onload = testeoDish();
