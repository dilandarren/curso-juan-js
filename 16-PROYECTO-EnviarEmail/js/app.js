document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        asunto: '',
        mensaje: '',
    }

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCc = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner');
    //Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar );
    inputMensaje.addEventListener('input', validar);
    inputCc.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e) {
        e.preventDefault();
        

        resetFormulario();
        


    })

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');

            alertaExito.textContent = 'Mensaje enviado';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000)

        }, 3000);
    }
    

    function validar(e) {


        if(e.target.id === 'cc'){


            if(e.target.value !== ''){
                limpiarAlerta(e.target.parentElement);
                console.log('el imput cc tiene valor', e.target.value);

                if(!validarEmail(e.target.value)){
                    mostrarAlerta('el email no es valido', e.target.parentElement);
                    email[e.target.name] = '';
                    comprobarEmail();
                    return;
                }

                
            }else{
                console.log('el imput no tiene valor')
            }
            return;
        }

        if(e.target.value.trim() === '' ) {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        } 

        

        if(e.target === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('el email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        };

        if(e.target.id === 'cc' && e.target.value != ''){
            console.log('el imput cc tiene valor');
        }

        limpiarAlerta(e.target.parentElement);

        //Asignar valores
        email[e.target.name] = e.target.value.trim(). toLowerCase();

        //Comprobar el objeto de email
        comprobarEmail();
    }

    

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);


        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        



        // Inyectar el error al formulario
        referencia.appendChild(error)
    }

    function limpiarAlerta(referencia) {
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600')
        if(alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(\.\w{2,10})+$/;

        const resultado = regex.test(email);

        return resultado;
    }

    function comprobarEmail() {
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }

        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }


    function resetFormulario(){
        //reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset()
        comprobarEmail();
    }
});
