const usuario = false;
const puedePagar = true;

if(usuario && puedePagar) {
console.log('Si puedes comprar');
} else if(!usuario && !puedePagar){
    console.log('No puedes comprar')
} else if(!puedePagar){
    console.log('inicia sesión o crea una cuenta');
}else if(!puedePagar){
    console.log('Fondos insuficientes');
}