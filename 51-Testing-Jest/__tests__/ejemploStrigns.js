
const pasword = "123456";


describe('Validar  6 caracteres', () => {
    test('Que el pasword tenga 6 caracteres', () => {
        expect( password ).toHaveLength(6);
    });

    test('no vacio', () => {
        expect( password ).not.toHaveLength(6);
    });
})