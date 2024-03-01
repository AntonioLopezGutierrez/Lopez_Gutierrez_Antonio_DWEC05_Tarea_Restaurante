//activamos el uso extricto para el archivo JavaScript
"use strict";

/**
 * /////////////////////////////////////////////EXCEPCION BASE///////////////////////////////////////
 */
//Clase excepcion que se extiende de Error
class ExcepcionBase extends Error {
    //Constructor al que le entrara por parametros un mensaje
    constructor(message) {
        //Llamada al coonstructor de la clase error
        super(message);
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "Excepcion";
    }
}

/**
 * ////////////////////////////EXCEPCION PARA LA INSTANCIA NO PERMITIDA/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class InstanciaNoPremitida extends ExcepcionBase {
    constructor() {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("Ya existe una instancia de RestaurantsManager. Utiliza getInstance.");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "InstanciaNoPremitida";

    }
}

/////////////////////////////////////////EXCEPCIONES PARA LA CATEGORIA///////////////////////////////////
/**
 * ////////////////////////////EXCEPCION PARA LA CATEGORIA NO PUEDE SER NULL/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class CategoryNoNull extends ExcepcionBase {
    constructor() {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El nombre de la categoria no puede ser null");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "CategoryNoNull";

    }
}
/**
 * ////////////////////////////////EXCEPCION PARA INSTANCIA DE LA CATEGORIA/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class InstanciaCategoria extends ExcepcionBase {
    constructor(category) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El campo " + category + " no es un objeto Category");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "InstanciaCategoria";

    }
}
/**
 * ////////////////////////////////EXCEPCION PARA SI EXISTELA CATEGORIA/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class ExisteCategoria extends ExcepcionBase {
    constructor(category) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("La categoria " + category + " ya existe no se puede introducir");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "ExisteCategoria";

    }
}

/**
 * //////////////////////////EXCEPCION PARA NO EXISTE LA CATEGORIA/////////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class NoExisteCategoria extends ExcepcionBase {
    constructor(category) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("La categoria " + category + " no existe");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "NoExisteCategoria";

    }
}


/////////////////////////////////////////EXCEPCIONES PARA EL MENU///////////////////////////////////
/**
 * ////////////////////////////EXCEPCION PARA EL MENU NO PUEDE SER NULL/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class MenuNoNull extends ExcepcionBase {
    constructor() {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El nombre del menu no puede ser null");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "MenuNoNull";

    }
}
/**
 * ////////////////////////////////EXCEPCION PARA INSTANCIA DEL MENU/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class InstanciaMenu extends ExcepcionBase {
    constructor(menu) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El campo " + menu + " no es un objeto Menu");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "InstanciaMenu";

    }
}
/**
 * ////////////////////////////////EXCEPCION PARA SI EXISTE EL MENU/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class ExisteMenu extends ExcepcionBase {
    constructor(menu) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El menu " + menu + " ya existe no se puede introducir");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "ExisteMenu";

    }
}

/**
 * ////////////////////////////////EXCEPCION PARA NO EXISTE EL MENU/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class NoExisteMenu extends ExcepcionBase {
    constructor(menu) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El menu " + menu + " no existe");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "NoExisteMenu";

    }
}

/////////////////////////////////////////EXCEPCIONES PARA EL ALLERGEN///////////////////////////////////
/**
 * ////////////////////////////EXCEPCION PARA EL ALERGENO NO PUEDE SER NULL/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class AllergenNoNull extends ExcepcionBase {
    constructor() {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El nombre del alergeno no puede ser null");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "AllergenNoNull";

    }
}
/**
 * ////////////////////////////////EXCEPCION PARA INSTANCIA DEL ALERGENO/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class InstanciaAllergen extends ExcepcionBase {
    constructor(allergen) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El campo " + allergen + " no es un objeto Allergen");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "InstanciaAllergen";

    }
}
/**
 * ////////////////////////////////EXCEPCION PARA SI EXISTE EL ALERGENO/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class ExisteAlergeno extends ExcepcionBase {
    constructor(allergen) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El alergeno " + allergen + " ya existe no se puede introducir");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "ExisteAlergeno";

    }
}

/**
 * ////////////////////////////////EXCEPCION PARA NO EXISTE EL ALERGENO/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class NoExisteAllergen extends ExcepcionBase {
    constructor(allergen) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El alergeno " + allergen + " no existe");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "NoExisteAllergen";

    }
}

/////////////////////////////////////////EXCEPCIONES PARA EL RESTAURANT///////////////////////////////////
/**
 * ////////////////////////////EXCEPCION PARA EL RESTAURANT NO PUEDE SER NULL/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class RestaurantNoNull extends ExcepcionBase {
    constructor() {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El nombre del restaurante no puede ser null");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "RestaurantNoNull";

    }
}
/**
 * ////////////////////////////////EXCEPCION PARA INSTANCIA DEL RESTAURANTE/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class InstanciarRestaurant extends ExcepcionBase {
    constructor(restaurant) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El campo " + restaurant + " no es un objeto Restaurant");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "InstanciarRestaurant";

    }
}
/**
 * ////////////////////////////////EXCEPCION PARA SI EXISTE EL RESTAURANT/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class ExisteRestaurant extends ExcepcionBase {
    constructor(restaurant) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El restaurante " + restaurant + " ya existe no se puede introducir");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "ExisteRestaurant";

    }
}

/**
 * ////////////////////////////////EXCEPCION PARA NO EXISTE EL RESTAURANTE/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class NoExisteRestaurant extends ExcepcionBase {
    constructor(restaurant) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El restaurante " + restaurant + " no existe");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "NoExisteRestaurant";

    }
}

/////////////////////////////////////////EXCEPCIONES PARA EL PLATO///////////////////////////////////
/**
 * ////////////////////////////EXCEPCION PARA EL PLATO NO PUEDE SER NULL/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class PlatoNoNull extends ExcepcionBase {
    constructor() {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El nombre del plato no puede ser null");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "PlatoNoNull";

    }
}
/**
 * ////////////////////////////////EXCEPCION PARA INSTANCIA DEL PLATO/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class InstanciarPlato extends ExcepcionBase {
    constructor(plato) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El campo " + plato + " no es un objeto Plato");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "InstanciarPlato";

    }
}
/**
 * ////////////////////////////////EXCEPCION PARA SI EXISTE EL PLATO/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class ExistePlato extends ExcepcionBase {
    constructor(plato) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El plato " + plato + " ya existe no se puede introducir");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "ExistePlato";

    }
}

/**
 * ////////////////////////////////EXCEPCION PARA NO EXISTE EL PLATO/////////////////////////////////
 */
//Clase excepcion que se extiende de ExcepcionBase
class NoExistePlato extends ExcepcionBase {
    constructor(plato) {
        //Llamada al coonstructor de la clase ExcepcionBase
        super("El plato " + plato + " no existe");
        //Establecemos la propiedad name con el nombre de la excepcion
        this.name = "NoExistePlato";

    }
}


/////////////////////////////////////////////////////////EXPORTACIONES////////////////////////////////////
export {
    //Excepcion para la instancia de RestauranteManager
    InstanciaNoPremitida,
    //Excepciones para la categoria
    CategoryNoNull,
    InstanciaCategoria,
    ExisteCategoria,
    NoExisteCategoria,
    //Excepciones del menu
    MenuNoNull,
    InstanciaMenu,
    ExisteMenu,
    NoExisteMenu,
    //Excepciones de alergenos
    AllergenNoNull,
    InstanciaAllergen,
    ExisteAlergeno,
    NoExisteAllergen,
    //Excepciones restaurant
    RestaurantNoNull,
    InstanciarRestaurant,
    ExisteRestaurant,
    NoExisteRestaurant,
    //Excepciones para platos
    PlatoNoNull,
    InstanciarPlato,
    ExistePlato,
    NoExistePlato





};