/**
 * /////////////////////////////////////IMPORTACIONES DE CLASES//////////////////////////////////////////
 */
import { 
    Category 
} from "../clases/Category.js";

/**
 * ////////////////////////////////////////TESTEO DE LS CLASE CATEGORY///////////////////////////////////
 */
function testeoCategory() {
    console.log("");
    console.log("/////////////////////TESTEO DE LA CLASE CATEGORY////////////////////////");
    //Creacion de una category sin nombre para que salte la excepcion
    try {
        console.log("Category sin introducir el nombre para que salte la excepcion");
        let categoria = new Category();
    } catch (error) {
        console.log(error.toString());
    }

    //Creacion de la categoria solo con el nombre
    console.log("La categoria solo con el nombre es: ")
    let categoria1 = new Category("Entrantes");
    console.log(categoria1.toString());

    //Creacion de una categoria con todos los argumentos
    console.log("La categoria con todos los argumentos es: ")
    let categoria2 = new Category("Entrantes", "Primer plato");
    console.log(categoria2.toString());


    //Comporbacion de los getter y setter de nombre
    console.log("Comprobacion del getter y setter del nombre");
    try {
        categoria2.setName();
    } catch (error) {
        console.log(error.toString());
    }
    categoria2.setName("Postres");
    console.log("El nombre dela categoria modificado es: " + categoria2.getName());

    //Comporbacion de los getter y setter de descripcion
    console.log("Comprobacion del getter y setter de la descripcion");
    categoria2.setDescription("Plato final");
    console.log("La descripcion de la categoria modificada es: " + categoria2.getDescription());

    //Comprobacion de la categoria modificada completamente
    console.log("La categoria modificada completamente es: " + categoria2.toString());
    
}

//Mostrado al cargar la pagina de la funcion
window.onload = testeoCategory();
