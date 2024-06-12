//WeekSet

const weekset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo: 100
}
const nombre = 20;

weekset.add(cliente);

// console.log(weekset.has('nombre'));
console.log(cliente.size);

console.log(weekset);