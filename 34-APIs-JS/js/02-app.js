document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver( entries => {
        console.log('ya esta visible');
    } );

    observer.observe(document.querySelector('.premium'));

})