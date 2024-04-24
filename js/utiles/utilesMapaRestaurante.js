//!//////UTILES PARA LA CONFIGURACION DEL MAPA DEL RESTAURANTE///////////
"use strict";
//?//////////////////IMPORTACIONES DE LA CLASE///////////////////////////
import { Coordinate } from "../clases/Coordinate.js";

//?/////////////////DECLARACION DE VARIABLES GLOBALES////////////////////
// Variable global que almacenara el objeto coordinate con las coordenadas del restaurante
let objetoCoordenadas = null;
// Variable global que almacenara el marcador del mapa
let marker = null;

//?FUNCION QUE NOS MOSTRARA EL MAPA PARA OBTENER LAS COORDENADAS DEL RESTAURANTE///
function mostradoMapaFormulario() {
    //- Obtenemos el contenedor donde vamos a pasar el mapa
    let contenedor = document.getElementById("map");

    //- Modificamos la vista de inicio del mapa que en este caso es la de Ciudad Real
    let map = L.map(contenedor).setView([38.990831799999995, -3.9206173000000004], 13);

    //- Añadimos el mapa de OpenStreetMap al que le vamos a añadir la localizacion del mapa
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BYSA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18,
    }).addTo(map);

    //- Creamos un manejador de eventos para cuando se pulsa el mapa obtener las coordenadas
    map.on("click", function (event) {
        // Creamos un marcador en el mapa con el click del usuario
        marker = L.marker([event.latlng.lat, event.latlng.lng]).addTo(map);
        // Creamos un objeto coordinate con las cordenadas del punto del clic
        objetoCoordenadas = new Coordinate(event.latlng.lat, event.latlng.lng);
    });

    //- Creamos un manejador de eventos para cuando se pulsa el boton derecho del raton
    map.on("contextmenu", function (event) {
        // Verificamos si tenemos una marca anterior
        if (marker) {
            // Si tenemos la marca la modificamos conlas nnuevas coordenadas
            marker.setLatLng([event.latlng.lat, event.latlng.lng]);
        }
    });
}

//?FUNCION QUE NOS MOSTRARA LA UBICACION DEL RESTAURANTE EN LA DESCRIPCI0N///
function mostradoMapaDescripcion(restaurante) {
    //- Obtenemos la localizacion del restaurante
    let localizacion = restaurante.getLocation();
    //- Obtenemos la latitud de la localizacion
    let latitud = localizacion.getLatitude();
    //- Obtenemos la longitud
    let longitud = localizacion.getLongitude();
    //- Obtenemos el contenedor donde vamos a pasar el mapa
    let contenedor = document.getElementById("contenedorMapaDescripcion");
    //- Modificamos la vista de inicio del mapa que en este caso es la de Ciudad Real
    let map = L.map(contenedor).setView([38.990831799999995, -3.9206173000000004], 14);

    //- Añadimos el mapa de OpenStreetMap al que le vamos a añadir la localizacion del mapa
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BYSA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18,
    }).addTo(map);
    //- Añadimos el marcador del restaurante con las coordenadas obtenidas
    L.marker([latitud, longitud]).addTo(map);
}

//?FUNCION QUE NOS MOSTRARA LAS COORDENADAS DE LA DIRECCION DEL GEOCODER///
function mostrarCoordenadasGeocoder() {
    //+ Obtencion de los elementos del DOM
    // Obtenemos el boton de buscar direccion del geocoder por su id
    const botonBuscar = document.getElementById("botonBuscarDireccion");
    // Obtenemos el contenedor para buscar la direccion del geocoder por su id
    const contenedorDirecciones = document.getElementById("contenedorGeocoderDireccion");
    // Obtenemos el contenedor para mostrar la localizacion en el mapa
    const contenedorMapa = document.getElementById("contenedorGeocoderMapa");
    // Obtenemos el elemento input donde se introduce la direccio a buscar
    const inputDireccionBusqueda = document.getElementById("inputDireccionGeocoder");
    // Variable global en la que se almacenara el mapa de leaflet
    let mapaLeaflet = null;

    //+ Hacemos la escucha del boton de buscar direccio al evento click
    botonBuscar.addEventListener("click", function (event) {
        //* Prevenimos el comportamiento por defecto
        event.preventDefault();

        //* Creamos un nuevo objeto url al que le pasamos la url de la api openStreetMap
        const url = new URL("https://nominatim.openstreetmap.org/search");

        //* Añadimos el parameto a la URL para que nos devuelva los datos en formato JSON
        url.searchParams.append("format", "json");

        //* Añadimos el parametro que nos limitara los resultados de las direccioes a buscar
        url.searchParams.append("limit", 6);

        //* Añadimos el parametro con el valor del input para realizar la busqueda de la direccion
        url.searchParams.append("q", inputDireccionBusqueda.value);

        //* Realizamos una peticion a la URL con el metodo GET para obtener las direcciones
        fetch(url, {
            // Metodo GET para la solicitud a la URL
            method: "get",
        })
            //* Obtenemos la respuesta y la transformamos en formato JSON
            .then((response) => response.json())
            .then((data) => {
                //- Creamos un nuevo contenedor en el que vamos a agregar la lista de direcciones
                const contenedorListaDirecciones = document.createElement("div");

                //- Agregamos la clase al contenedor donde almacenaos la lista de direccines
                contenedorListaDirecciones.className = "contenedorListaDirecciones";

                //- Recorremos cada direccion de la respuesta
                data.forEach((contenedorDirecciones) => {
                    //? Creamos un enlace para cada direccion de la respuesta
                    const enlaceDireccion = document.createElement("a");
                    //? Establecemos el atributo href del enlace para que no tenga destino
                    enlaceDireccion.href = "#";
                    //? Establecemos el atributo datalat con el valor de la latitud
                    enlaceDireccion.setAttribute("datalat", contenedorDirecciones.lat);
                    //? Establecemos el atributo data-lon con el valor de la longitud
                    enlaceDireccion.setAttribute("data-lon", contenedorDirecciones.lon);
                    //? Establecemos la clase de los enlaces de la lista de direcciones
                    enlaceDireccion.className = "enlaceDireccion";
                    //? Establecemos el texto del enlace con el nombre de la direccion de la respuesta
                    enlaceDireccion.textContent = contenedorDirecciones.display_name;
                    //? Agregamos los enlaces al contenedor de lista de direcciones
                    contenedorListaDirecciones.appendChild(enlaceDireccion);
                    //? Agregamos un evento de clic a cada enlace de las direcciones
                    enlaceDireccion.addEventListener("click", function (event) {
                        //+ Prevenimos el comportamiento por defecto
                        event.preventDefault();
                        //+ Obtener la latitud del enlace con la funcion getAttribute y la parseamos a float
                        const latitud = parseFloat(this.getAttribute("datalat"));
                        //+ Obtener la longitud del enlace con la funcion getAttribute y la parseamos a float
                        const longitud = parseFloat(this.getAttribute("data-lon"));

                        //+ Verificamos si las coordenadas son numeros
                        if (!isNaN(latitud) && !isNaN(longitud)) {
                            //- Verificamos si ya esta creado el mapa
                            if (mapaLeaflet) {
                                // Si ya esta creado modificamos el mapa con la nueva latitud y longitud
                                mapaLeaflet.setView([latitud, longitud], 15);
                            } else {
                                // Si no esta creado creamos un nuevo mapa con la latitud y la longitud
                                mapaLeaflet = L.map(contenedorMapa).setView(
                                    [latitud, longitud],
                                    15
                                );

                                // Agregar capa del mapa de OpenStreetMap al mapa
                                L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                                    attribution:
                                        'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                                    maxZoom: 18,
                                }).addTo(mapaLeaflet);
                            }

                            //- Agregar un marcador en las coordenadas del enlace al mapa
                            L.marker([latitud, longitud]).addTo(mapaLeaflet);
                        }
                    });
                });

                //- Reemplazamos el contenido anterior con la nueva lista de direccione
                contenedorDirecciones.replaceChildren();
                //- Agregamos la lista de direcciones al contenedor de direcciones
                contenedorDirecciones.appendChild(contenedorListaDirecciones);
            })
            //* Manejo de errores de conexion con el servidor
            .catch((error) => {
                // Borramos el contenedor de direcciones
                contenedorDirecciones.replaceChildren();
                // Crearmos un nuevo contenedor div para el mensaje de error
                const errorDiv = document.createElement("div");
                // Agregamos la clase al contenedor
                errorDiv.className = "errorDiv";
                // Creamos el mensaje de error
                const errorMessage = document.createTextNode(
                    "No se ha podido establecer la conexión con el servidor de mapas."
                );
                // Agregamos el mensaje de error al contenedor div
                errorDiv.appendChild(errorMessage);

                // Insertar el contenedor div en el contenedor de direcciones
                contenedorDirecciones.appendChild(errorDiv);
            });
    });
}

//?FUNCION QUE NOS MOSTRARA LAS UBICACIONES DE TODOS LOS RESTAURANTES///
function mostrarUbicacionRestaurantes(mainContenido, arrayRestaurante) {
    //+ Limpiamos el contenido del main contenido
    mainContenido.innerHTML = "";

    //+ Creamos el contenedor principal para almacenar el titulo y el contenedor con el mapa
    let contenedorPrincipalMapaRestaurantes = document.createElement("div");
    // Asignamos el atributo id al contenedor principal
    contenedorPrincipalMapaRestaurantes.id = "contenedorPrincipalMapaRestaurantes";
    // Agregamos el contenedor principal al main contenido
    mainContenido.appendChild(contenedorPrincipalMapaRestaurantes);

    //+ Creamos el titulo para el mostrado de la ubicaciones en el mapa
    let tituloMapa = document.createElement("h2");
    // Asignamos el texto al titulo
    tituloMapa.textContent = "Ubicación de Restaurantes";
    // Agregamos el titulo al contenedor principal
    contenedorPrincipalMapaRestaurantes.appendChild(tituloMapa);

    //+ Creamos un contenedor para el mapa con los restaurantes
    let contenedorMapaRestaurantes = document.createElement("div");
    // Asignamos el atributo id al contenedor del mapa
    contenedorMapaRestaurantes.id = "contenedorMapaRestaurantes";
    // Agregamos el contenedor del mapa al contenedor principal
    contenedorPrincipalMapaRestaurantes.appendChild(contenedorMapaRestaurantes);

    //+ Modificamos la vista de inicio del mapa que en este caso es la de Ciudad Real
    let map = L.map(contenedorMapaRestaurantes).setView(
        [38.990831799999995, -3.9206173000000004],
        14
    );

    //+ Añadimos el mapa de OpenStreetMap
    L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 18,
    }).addTo(map);

    //+ Recorremos el array de restaurantes para crear los marcadores y los popUP con el nombre y la descripción del restaurante
    arrayRestaurante.forEach((restaurante) => {
        //- Obtenemos la localizacion del restaurante
        let localizacion = restaurante.getLocation();
        //- Obtenemos la latitud de la localizacion
        let latitud = localizacion.getLatitude();
        //- Obtenemos la longitud de la localizacion
        let longitud = localizacion.getLongitude();
        //- Creamos el marcador del restaurante con las coordenadas obtenidas
        let marker = L.marker([latitud, longitud]).addTo(map);
        //- Creamos el contenido del popUp con el nombre y la descripcion del restaurante
        let contenidoPopup = `<strong>${restaurante.getName()}</strong><br>${restaurante.getDescription()}`;
        //- Asociamos el popUP al marcador del restaurante
        marker.bindPopup(contenidoPopup);
    });
}

//?//////////////////EXPORTACION DE LAS FUNCIONES////////////////////////
export {
    mostradoMapaFormulario,
    objetoCoordenadas,
    mostradoMapaDescripcion,
    mostrarCoordenadasGeocoder,
    mostrarUbicacionRestaurantes,
};
