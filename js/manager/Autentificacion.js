//!////////////CLASE PARA LA AUTENTIFICACION DEL USUARIO/////////////////
"use strict";
import { Usuarios } from "../clases/usuarios.js";
//?//////////////////IMPORTACIONES DE LA CLASE///////////////////////////
import { InstanciaObjeto } from "../excepciones/ExcecpcionesAutentificacion.js";
// Variable en la que almacenaremos la instancia de la clase (singleton)
let instancia;

//?///////////////////DECLARACION DE LA CLASE////////////////////////////
class Autentificacion {
    //?////////////////////CONSTRUCTOR DE LA CLASE///////////////////////
    constructor() {
        // Comprobamos si ya existe una instancia de la clase
        if (instancia) {
            // Si existe saltamos la excepcion
            throw new InstanciaObjeto();
        }
        // Si no existe almacenamos la instancia en la variable
        instancia = this;
    }
    //?//////////////////////METODOS DE LA CLASE//////////////////////////
    //* Metodo que creara la instancia o devolvera la instancia
    static inicio() {
        // Si no existe la instancia la creamos
        if (!instancia) {
            instancia = new Autentificacion();
        }
        // Si existe devolvemos la instancia
        return instancia;
    }
    //* Metodo que valida el usuario y contraseña
    validarUsuario(usuario, contraseña) {
        // Comprobamos si el usuario y contraseña son correctos
        if (usuario === "admin" && contraseña === "admin") {
            // Si son correctos devolvemos true
            return true;
        } else {
            // Si no son correctos devolvemos false
            return false;
        }
    }
    //* Metodo que obtiene el usuario segun el nombre
    obtenerUsuario(nombreUsuario) {
        // Declaramos una nueva variable para el usuario
        let usuario;
        // Comprobamos si el nombre de usuario es admin
        if (nombreUsuario === "admin") {
            // Si es admin creamos un nuevo objeto de tipo Usuarios
            usuario = new Usuarios("admin");
        }
        // Devolvemos el usuario
        return usuario;
    }
}

//?//////////////////////EXPORTACION DE LA CLASE////////////////////////
export { Autentificacion };
