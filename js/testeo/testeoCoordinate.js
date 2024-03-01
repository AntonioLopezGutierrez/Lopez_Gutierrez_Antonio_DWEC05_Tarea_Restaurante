/**
 * /////////////////////////////////////IMPORTACIONES DE CLASES//////////////////////////////////////////
 */

import { Coordinate } from "../clases/Coordinate.js";

/**
 * ////////////////////////////////////////TESTEO DE LA CLASE COORDINATE///////////////////////////////////
 */
function testeoCoordinate() {
    console.log("");
    console.log("/////////////////////TESTEO DE LA CLASE COORDINATE////////////////////////");
    //Creacion de Coordinate sin proporcionar la latitud
    try {
        console.log("Coordenada sin la latitud: ");
        let coordenada1 = new Coordinate();
    } catch (error) {
        console.log(error.toString());
    }
    //Creacion de Coordinate sin proporcionar la longitud
    try {
        console.log("Coordenada sin la longitud: ");
        let coordenada3 = new Coordinate(100);
    } catch (error) {
        console.log(error.toString());
    }

    //Creacion de Coordinate con la latitud sin ser un numero
    try {
        console.log("Coordenada sin la latitud con numero: ");
        let coordenada4 = new Coordinate("hola", 100);
    } catch (error) {
        console.log(error.toString());
    }
    //Creacion de Coordinate sin la longitud sin ser un numero
    try {
        console.log("Coordenada sin la longitud sin numero: ");
        let coordenada5 = new Coordinate(100, "hola");
    } catch (error) {
        console.log(error.toString());
    }

    //Creacion de on objeto Coordinate con todos los argumentos
    console.log("Coordenada con todos los argumentos");
    let coordenada5 = new Coordinate(100, 100);
    console.log(coordenada5.toString());



    //Comporbacion de los getter y setter de la latitud
    console.log("Comprobacion del getter y setter de la latitud");
    //Comprobacion de que la latitud no puede estar vacia
    console.log("Comprobacion de que la latitud no puede estar vacia");
    try {
        coordenada5.setLatitude();
    } catch (error) {
        console.log(error.toString());
    }
    //Comprobacion de que la latitud tiene que ser un numero
    console.log("Comprobacion de que la latitud no puede ser otra cosa que un numero");
    try {
        coordenada5.setLatitude("hola");
        console.log(coordenada5.toString());
    } catch (error) {
        console.log(error.toString());
    }
    //Comprobacion de latitud introduciendo el argumento correcto
    console.log("Comprobacion de que la latitud siendo un numero");
    coordenada5.setLatitude(200);
    console.log("La latitud modificada es: " + coordenada5.getLatitude());


    //Comporbacion de los getter y setter de longitud
    console.log("Comprobacion del getter y setter de la longitud");
    //Comprobacion de que la longitud no puede estar vacio
    console.log("Comprobacion de que la longitud no puede estar vacia");
    try {
        coordenada5.setLongitude();
    } catch (error) {
        console.log(error.toString());
    }
    //Comprobacion de que la longitud tiene que ser un numero
    console.log("Comprobacion de que la longitud no puede ser otra cosa que un numero");
    try {
        coordenada5.setLongitude();
    } catch (error) {
        console.log(error.toString("Hola"));
    }
    //Comprobacion de la longitud con los argumentos correctos
    console.log("Comprobacion de que la longitud siendo un numero");
    coordenada5.setLongitude(200);
    console.log("La longitud modificada es: " + coordenada5.getLatitude());

    //Comprobacion de la coordenada modificada completamente
    console.log("Comprobacion de la coordenada modificada completa");
    console.log("La coordenada modificada completamente es: " + coordenada5.toString());


}

//Mostrado al cargar la pagina de la funcion
window.onload = testeoCoordinate();
