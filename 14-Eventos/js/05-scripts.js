window.addEventListener('scroll', () => {


    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    // const scrollPX = window.scrollY;

    if(ubicacion.top < 784) {
        console.log('el elemento ya esta visible');
    } else {
        console.log('Aún no, da más scroll')
    }

    // console.log(scrollPX);
    // console.log('scrolling')
})