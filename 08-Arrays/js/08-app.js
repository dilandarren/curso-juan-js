const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre;
// console.log(nombre);

//desctructuring
const { disponible } = producto;

console.log(disponible);


//Desctructuring con arreglos
const numeros = [10,20,30,40,50];
// const arreglo[0] = "hola";
// const [ , , , , quinto ] = numeros;
// const numeros = [10,20,30,40,50];

const [ primero, ...tercero ] = numeros;

console.log(tercero);