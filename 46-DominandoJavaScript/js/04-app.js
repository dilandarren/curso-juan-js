//Implicit Binding

const usuario = {
    nombre: 'Dilan',
    edad: 11,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y mi edad es${this.edad}`);
    },
    mascota: {
        nombre: Chop,
        edad: 3,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();