const sym = Symbol();
const sym2 = Symbol();

if(sym === sym2) {
    console.log('Son Iguales!!');
}else{
    console.log('Son diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

persona[nombre] = 'Dilan';
persona[apellido] = 'Gonzalez';
persona.tipoCliente = 'Premium';
persona.tipoSaldo = 500;

console.log(persona);
console.log(persona[nombre]);


//LAS PROPIEDADES QUE UTILIZAN UN SYMBOL NO SON ITERALES