const carrito = ['Producto1', 'Producto2', 'Producto3'];


describe('Test carrito', () => {
    test('3 elementos', () => {
        expect( carrito ).toHaveLength(3);
    });

    test('no vacio', () => {
        expect( carrito ).not.toHaveLength(0);
    });
})