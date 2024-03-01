/**
 * /////////////////////////////////////IMPORTACIONES DE CLASES//////////////////////////////////////////
 */
import { 
    Menu
} from "../clases/Menu.js";

/**
 * ////////////////////////////////////////TESTEO DE LA CLASE MENU///////////////////////////////////
 */
function testeoMenu() {
    console.log("");
    console.log("/////////////////////TESTEO DE LA CLASE MENU////////////////////////");
    //Creacion de un Menu sin nombre para que salte la excepcion
    try {
        console.log("Menu sin introducir el nombre para que salte la excepcion");
        let menu = new Menu();
    } catch (error) {
        console.log(error.toString());
    }

    //Creacion del menu solo con el nombre
    console.log("El menu solo con el nombre es: ")
    let menu1 = new Menu("Navidad");
    console.log(menu1.toString());

    //Creacion de un menu con todos los argumentos
    console.log("El menu con todos los argumentos es: ")
    let menu2 = new Menu("Navidad", "Menu especial para el dia de nochebuena");
    console.log(menu2.toString());


    //Comporbacion de los getter y setter de nombre
    console.log("Comprobacion del getter y setter del nombre");
    try {
        menu2.setName();
    } catch (error) {
        console.log(error.toString());
    }
    menu2.setName("San valentin");
    console.log("El nombre del menu modificado es: " + menu2.getName());

    //Comporbacion de los getter y setter de descripcion
    console.log("Comprobacion del getter y setter de la descripcion");
    menu2.setDescription("Menu especial de san valentin");
    console.log("La descripcion del menu modificado es: " + menu2.getDescription());

    //Comprobacion del menu modificado completamente
    console.log("El menu modificado completamente es: " + menu2.toString());
    
}

//Mostrado al cargar la pagina de la funcion
window.onload = testeoMenu();
