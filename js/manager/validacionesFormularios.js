//!//////////////FUNCIONES PARA LA VALIDACION DE DATOS///////////////////
"use strict";
//?//FUNCION PARA LA VALIDACION DE LA LATITUD O LA LONGITUD DEL RESTAURANTE///
function validarLatitud(latitud) {
    // Convertimos lañl cadena a un entero
    let numero = parseFloat(latitud);
    // Verificamos si el valor esta dentro de los margenes permitidos
    if (isNaN(numero) || numero < 0 || numero > 100) {
        throw new Error("La latitud debe ser un número en el rango de 0 a 100");
    }
}

//?//////FUNCION PARA LA VALIDACION DE LA LONGITUD DEL RESTAURANTE///////
function validarLongitud(longitud) {
    // Convertimos la cadena a un entero
    let numero = parseFloat(longitud);
    // Verificamos si el valor esta dentro de los margenes permitidos
    if (isNaN(numero) || numero < 0 || numero > 100) {
        throw new Error("La longitud debe ser un número en el rango de 0 a 100");
    }
}





//?/////////////////////EXPORTACIONES DE LA CLASE////////////////////////
export{
    validarLatitud,
    validarLongitud
}
