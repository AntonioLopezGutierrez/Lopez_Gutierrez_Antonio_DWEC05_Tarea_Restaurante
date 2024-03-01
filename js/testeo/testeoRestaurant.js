/**
 * /////////////////////////////////////IMPORTACIONES DE CLASES//////////////////////////////////////////
 */
import { Coordinate } from "../clases/Coordinate.js";
import { Restaurant } from "../clases/Restaurant.js";

/**
 * ////////////////////////////////////////TESTEO DE LA CLASE RESTAURANT///////////////////////////////////
 */
function testeoRestaurant() {
    console.log("");
    console.log("/////////////////////TESTEO DE LA CLASE RESTAURANT////////////////////////");
    //Creacion de un Restaurante sin nombre para que salte la excepcion
    try {
        console.log("Restaurant sin introducir el nombre para que salte la excepcion");
        let restaurante = new Restaurant();
    } catch (error) {
        console.log(error.toString());
    }

    //Creacion de un Restaurante sin que la localizacion sea una coordenada salte la excepcion
    try {
        console.log("Restaurant sin introducir una coordenada correcta para que salte la excepcion");
        let restaurante = new Restaurant("Avenida", "Restaurante de comida mejicana", 100);
    } catch (error) {
        console.log(error.toString());
    }

    //Creacion del restaurante solo con el nombre
    console.log("El restaurante solo con el nombre es: ")
    let restaurante1 = new Restaurant("Avenida");
    console.log(restaurante1.toString());

    //Creacion de un restaurante con todos los argumentos
    console.log("El restaurante con todos los argumentos es: ");
    let coordenada = new Coordinate(100, 100);
    let restaurante2 = new Restaurant("Avenida", "Restaurante de comida mejicana", coordenada);
    console.log(restaurante2.toString());


    //Comporbacion de los getter y setter de nombre
    console.log("Comprobacion del getter y setter del nombre");
    console.log("Comprobacion de que el nombre no puede estar vacio");
    try {
        restaurante2.setName();
    } catch (error) {
        console.log(error.toString());
    }
    console.log("Comprobacion de que el nombre puede ser cambiado en el set");
    restaurante2.setName("Meson Antonio");
    console.log("El nombre del menu modificado es: " + restaurante2.getName());

    //Comporbacion de los getter y setter de descripcion
    console.log("Comprobacion del getter y setter de la descripcion");
    restaurante2.setDescription("Taberna especialista en vinos");
    console.log("La descripcion del restaurante modificado es: " + restaurante2.getDescription());

    //Comprobacion de los getter y setter de la localizacion
    try {
        console.log("Comprobacion del getter y setter de la localizacion con argumento erroneo");
        restaurante2.setLocation(200);
    } catch (error) {
        console.log(error.toString());
    }
    console.log("Comprobacion del getter y setter de la localizacion con coordenadas correctas");
    let coordenada1 = new Coordinate(200, 200);
    restaurante2.setLocation(coordenada1);
    console.log("La localizacion del restaurante modificado es: " + restaurante2.getLocation());

    //Comprobacion del restaurante modificado completamente
    console.log("El menu modificado completamente es: " + restaurante2.toString());

}

//Mostrado al cargar la pagina de la funcion
window.onload = testeoRestaurant();
