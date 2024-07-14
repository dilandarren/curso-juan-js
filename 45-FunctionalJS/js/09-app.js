
const suma = ( a, b, c) => a + b + c;

const parcial = (a) => (b, c) => suma(a, b, c);

const primerNumero = parcial(5);
const resultado = primerNumero(4, 3);


console.log(resultado);


const parcial2 = a => b => c => suma(a,b,c);



// const primerN = parcial(5);
// const segundoN = primerN(4);
// const resultado2 = segundoN(3)

const resultado2 = parcial2(5)(4)(3);

console.log(resultado2);