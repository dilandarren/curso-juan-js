const cliente = {
    nombre: 'Kamila',
    balance: 500
};


describe('Test carrito', () => {
    test('3 elementos', () => {
        expect( cliente.balance ).toBeGreaterThan(400);
    });


    test('es Kamila', () => {
        expect( cliente.nombre ).toBe('Kamila');
    });

    test('no es Kamila', () => {
        expect( cliente.nombre ).not.toBe('Cucurella');
    });

    test('no tiene 500', () => {
        expect( cliente.balance ).not.toBe(400);
    });
})