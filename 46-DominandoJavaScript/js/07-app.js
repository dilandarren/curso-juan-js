
console.log('Primero');
    console.log('Segundo');
setTimeout(() => {

}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise(function(resolve) {
    resolve('Desconocido...');
}).then(console.log());

console.log('Ultimo');


function hola() {
    console.log('hola');
}
hola();