//!///////////////////MOSTRADO Y MANEJO DE LA COOKIE/////////////////////
"use strict";
//?////////////////////////IMPORTACIONES/////////////////////////////////
import { setCookie } from "../utiles/utilesCookies.js";
//?///////FUNCION PARA MOSTRAR LA COOKIE Y MANEJADO DE BOTONES///////////
function mostradoCookieCargar() {
    //* Mostrado de la cookie al cargar la pagina para que el usuario la acepte
    const toast = `
    <div class="fixed-top p-5 mt-5">
      <div id="cookies-message" class="toast fade show bg-secondary text-white w-100 mw-100" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <h4 class="me-auto">Aviso de uso de cookies</h4>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" id="btnDismissCookie"></button>
        </div>
        <div class="toast-body p-4 d-flex flex-column">
          <p>
            Este sitio web utiliza cookies para mejorar tu experiencia de usuario y ofrecerte contenido personalizado. Al utilizar nuestro sitio, aceptas nuestro uso de cookies.
          </p>
          <div class="ml-auto">
            <button type="button" class="btn btn-outline-dark mr-3 deny" id="btnDenyCookie" data-bs-dismiss="toast">
              Denegar
            </button>
            <button type="button" class="btn btn-primary" id="btnAcceptCookie" data-bs-dismiss="toast">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
    // Insertamos el mensaje de la cookie en el body
    document.body.insertAdjacentHTML("afterbegin", toast);

    //* Obtenemos el contenedor que nos mostrara el mensaje
    const cookiesMessage = document.getElementById("cookies-message");
    // Hacemos la escucha el aevento hidden.bs.toast que se dispara cuando se oculta la cookie
    cookiesMessage.addEventListener("hidden.bs.toast", (event) => {
        // Accedemos al elemento padre que dispara el evento y lo eliminamos
        event.currentTarget.parentElement.remove();
    });

    //* Funcion que nos mostrara un mensaje de que las cookies no se han aceptado
    const denyCookieFunction = (event) => {
        // Obtenemos el elemento de la cabecera
        let cabeceraDocumento = document.getElementById("header");
        // Añadimos el mensaje de no aceptado a la cabecera
        cabeceraDocumento.insertAdjacentHTML(
            "beforeend",
            `<div class="container my-3">
              <div class="alert alert-dark text-black" role="alert">
                  <strong>Para poder acceder a todas las funcionalidades de este sitio web, es necesario aceptar el uso de cookies. Por favor, recarga la página y acepta las condiciones para continuar navegando. ¡Gracias por tu comprensión!</strong>
              </div>
          </div>`
        );
    };

    //* Obtenemos el boton del denegado de la cookieo
    const btnDenyCookie = document.getElementById("btnDenyCookie");
    // Añadimos un manejador de eventos al boton para mostrar el mensaje de denegado
    btnDenyCookie.addEventListener("click", denyCookieFunction);
    // Obtenemos el boton de cerrado del contenedor de la cookie
    const btnDismissCookie = document.getElementById("btnDismissCookie");
    // Añadimos un manejador de eventos al boton para mostrar el mensaje de denegado
    btnDismissCookie.addEventListener("click", denyCookieFunction);

    // Obtenemos el boton de aceptado de la cookie
    const btnAcceptCookie = document.getElementById("btnAcceptCookie");
    // Añadimos un manejador de eventos al boton para aceptar las cookies
    btnAcceptCookie.addEventListener("click", (event) => {
        // Creamos la cookie que sera la que verifica que el usuario a acceptado
        setCookie("accetedCookieMessage", "true", 1);
    });
}

//?/////////////////////////EXPORTACIONES////////////////////////////////
export { mostradoCookieCargar };
