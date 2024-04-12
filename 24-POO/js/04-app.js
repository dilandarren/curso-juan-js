class Cliente {

    #nombre

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

}

const dilan = new Cliente();
dilan.setNombre('Dilan');
console.log(dilan.getNombre());