/**
 * /////////////////////////////////////IMPORTACIONES DE CLASES//////////////////////////////////////////
 */
import { 
    Allergen
} from "../clases/Allergen.js";

/**
 * ////////////////////////////////////////TESTEO DE LA CLASE ALLERGEN///////////////////////////////////
 */
function testeoAllergen() {
    console.log("");
    console.log("/////////////////////TESTEO DE LA CLASE ALLERGEN////////////////////////");
    //Creacion de una alllergen sin nombre para que salte la excepcion
    try {
        console.log("Alergeno sin introducir el nombre para que salte la excepcion");
        let alergeno = new Allergen();
    } catch (error) {
        console.log(error.toString());
    }

    //Creacion del alergeno solo con el nombre
    console.log("El alergeno solo con el nombre es: ")
    let alergeno1 = new Allergen("Gluten");
    console.log(alergeno1.toString());

    //Creacion de un alergeno con todos los argumentos
    console.log("La alergeno con todos los argumentos es: ")
    let alergeno2 = new Allergen("Gluten", "Se encuentra en los platos con trigo");
    console.log(alergeno2.toString());


    //Comporbacion de los getter y setter de nombre
    console.log("Comprobacion del getter y setter del nombre");
    try {
        alergeno2.setName();
    } catch (error) {
        console.log(error.toString());
    }
    alergeno2.setName("Lacteos");
    console.log("El nombre del alergeno modificado es: " + alergeno2.getName());

    //Comporbacion de los getter y setter de descripcion
    console.log("Comprobacion del getter y setter de la descripcion");
    alergeno2.setDescription("Lo llevan los platos con leche");
    console.log("La descripcion del alergeno modificado es: " + alergeno2.getDescription());

    //Comprobacion del alergeno modificado completamente
    console.log("El alergeno modificado completamente es: " + alergeno2.toString());
    
}

//Mostrado al cargar la pagina de la funcion
window.onload = testeoAllergen();
