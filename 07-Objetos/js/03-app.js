const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//agregar nuevas propiedades al proyecto
producto.imagen = "imagen.jpg";

//Eliminar propiedades del objeto
delete producto.disponible;

console.log(producto);