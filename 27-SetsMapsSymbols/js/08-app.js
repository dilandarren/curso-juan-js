const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 123, 245, 128, 4356]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profecion', 'Desarrollador');

//deafult

for (let ciudad of ciudades ) {
    console.log(ciudad);
}


for (let value of ciudades.values() ) {
    console.log(value);
}

for (let value of ordenes.values() ) {
    console.log(value);
}

for (let value of datos.values() ) {
    console.log(value);
}



for (let keys of ciudades.keys() ) {
    console.log(keys);
}





//entries
for (let entry of ciudades.entries() ) {
    console.log(entry);
}
for (let entry of ordenes.entries() ) {
    console.log(entry);
}

for (let entry of datos.entries() ) {
    console.log(entry);
}