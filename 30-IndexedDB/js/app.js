let DB;


document.addEventListener('DOMContentLoaded', () => {
    crmDB();


    setTimeout(() => {
        crearCliente();
    }, 5000);
});


function crmDB() {
    //Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    //Si hay un error
    crmDB.onerror = function() {
        console.log('Hubo un error a la ahora de crear la BD');
    }

    //Si se creo bn

    crmDB.onsuccess = function() {
        console.log('base de datos Creada!!');

        DB = crmDB.result
    }


    //Configuracion de la base de datos

    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;
        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true,
        });

        //definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });


        console.log('Columnas Creadas');
    }
}





function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');
    
    transaction.oncomplete = function() {
        console.log('transaccion completada');
    }


    transaction.onerror = function() {
        console.log('Hubo un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 12345666678,
        nombre:'Manel',
        email: 'holaa@holaa.holaa'
    }


    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}