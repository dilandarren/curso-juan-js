
self.onload = () => {
    console.log('Ventana Lista');
}

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        const self = this;
        return`El Producto: ${this.nombre} tiene un precio de ${this.precio}`;
    }
}


console.log(producto.mostrarInfo());