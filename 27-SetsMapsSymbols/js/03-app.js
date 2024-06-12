
const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

console.log(cliente.size);

console.log(cliente.has('nombre'));

console.log(cliente.get('nombre'));


const paciente = new Map([['nombre', 'paciente',], ['cuarto', 'no definido']])

paciente.set('dr', 'Dr Asignado');

console.log(paciente);