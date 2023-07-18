const producto = 'Monitor 20 Pulgadas';

//.repeat te va a permitir una cadena de texto...

const texto = ' en Promoción '.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split, dividir un strings

const actividad = "Estoy Aprendiendo JS Moderno"
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "aprendiendo js #JSModernoConJuan";
console.log(tweet.split('#'))