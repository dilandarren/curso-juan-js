//Namespace

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo:'Pizza',
        precio: 23
    },
    {
        platillo:'Hamburgesa',
        precio: 21
    },
    {
        platillo:'Yo que se',
        precio: 234
    }

]

restaurantApp.funciones = {
    mostrarMenu: platillos => {
        console.log(`Bienvenidos a nuestro menu`);

        platillos.forEach((platillo, index) => {
            console.log(`${index} : ${platillo.platillo} $${platillo.precio}`);
        });
    },
    ordenar: id => {
        console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`);
    }
}

const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu( platillos );

restaurantApp.funciones.ordenar(1);