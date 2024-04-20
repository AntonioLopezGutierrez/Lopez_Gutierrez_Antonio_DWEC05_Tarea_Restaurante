//!///////////////////////FUNCIONES UTILES///////////////////////////////
"use strict"
//?//////////////////////FUNCIONES PARA COOKIES//////////////////////////
//* Funcion para crear la cookie o modificarla 
function setCookie(nombre, valor, expiracion) {
    // Creamos un nuevo objeto date para la fecha de expiracion
    const fecha = new Date();
    // Sumamos la expiracion a la fecha actual
    fecha.setTime(fecha.getTime() + expiracion * 24 * 60 * 60 * 1000);
    // Formateamos la fecha para que sea compatible con el formato UTC de la cookie
    const expiracionFormato = `expires=${fecha.toUTCString()}`;
    // Creamos la cookie con los datos pasados por parametro y la fecha de expiracion
    document.cookie = `${nombre}=${valor};${expiracionFormato};path=/`;
}

//* Funcion para la obtencion de la cookie
function getCookie(nombre) {
    // Creamos una expresion regular para obtener el valor de la cookie
    const expresionRegular = new RegExp(`(?:(?:^|.*;\\s*)${nombre}\\s*\\=\\s*([^;]*).*$)|^.*$`);
    // Devolvemos la cookie obtenida
    return document.cookie.replace(expresionRegular, "$1");
}

//* Funcion para el borrado de la cookie
function deleteCookie() {
    // Llamada al metodo que modificara la cookie con un tiempo inferior al actual
    setCookie("usuario", '', 0);
}


//?///////////////////////EXPORTACIONES//////////////////////////////////
export { setCookie, getCookie, deleteCookie };
