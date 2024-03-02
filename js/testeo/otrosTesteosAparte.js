"use strict"
import { RestaurantsManager } from "../clases/RestaurantsManager.js";

function testoAsignacioPlatoCategoria() {

    console.log("////////////////////////////////////OTROS TESTEOS////////////////////////////////////////////");
    //Instanciacion del la clase RestaurantManager para hacer la pruebas
    const RestauranteManager = RestaurantsManager.getInstance();

    //Comprobacion del metodo para asignar platos a las categorias
    console.log("Comprobacion del metodo para asignar platos a las categorias");
    //Insatanciamos dos objetos uno Category o otro Dish
    let cateroriaAsignar = RestauranteManager.createCategory("CATEGORIA ADIGNADO", "Plato que se sirve justo el primero");
    let platoAsignar = RestauranteManager.createDish("PLATO ASIGNADO", "Ternera con sal",
        ["Ternera", "sal"], "../imagenes");
    //RestauranteManager.addDish(platoAsignar);
    //RestauranteManager.addCategory(cateroriaAsignar);

    RestauranteManager.assignCategoryToDish(cateroriaAsignar, platoAsignar);
    console.log(RestauranteManager.toString());


}
function testoAsignacionAlergenoPlato() {
    console.log("////////////////////////////OTROS TESTEOS///////////////////////////////////");

    //Instanciacion del la clase RestaurantManager para hacer la pruebas
    const RestauranteManager = RestaurantsManager.getInstance();

    //Comprobacion del metodo para asignar alergeno al plato
    console.log("Comprobacion del metodo para asignar alergeno al plato");
    try {
        let platoNuevo = RestauranteManager.createDish("Ternera", "Ternera con sal",
            ["Ternera", "sal"], "../imagenes");
        RestauranteManager.addDish(platoNuevo);
        let platoNuevo1 = RestauranteManager.createDish("Ternera", "Ternera con pimienta",
            ["Ternera", "pimienta"], "../imagen");
        console.log(platoNuevo.plato.toString());
        console.log(platoNuevo1.plato.toString());
    } catch (error) {
        console.log(error.toString());
    };
}



window.addEventListener("load", function () {
    //testoAsignacioPlatoCategoria();
    testoAsignacionAlergenoPlato();
});

/////////////////////////////////////////////////////
/*!----------------------------------- Cuepo del documento -------------------------------*/
/*? Body*/
body {
    grid-template-areas:
        "header__logo header__logo"
        "header__nav header__nav";
    height: 100vh;

}

/*!----------------------------------------- header -------------------------------------*/
/*? Logo de la pagina*/
.header__logo {
    grid-area: header__logo;
    background-color: aqua;
}
/*? Barra de navegacion*/
.header__nav {
    grid-area: header__nav;
    background-color: blue;
}



