// boton modo oscuro
const botonSwitch = document.querySelector('#switch');

botonSwitch.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
    botonSwitch.classList.toggle('active');

    // Guardamos el modo
    if(document.body.classList.contains('oscuro')){
        localStorage.setItem('modo-oscuro', 'true');
    } else{
        localStorage.setItem('modo-oscuro', 'false');
    }

});

//Modo actual
if(localStorage.getItem("modo-oscuro") === "true"){
    document.body.classList.add('oscuro');
    botonSwitch.classList.add('active');
}else{
    document.body.classList.remove('oscuro');
    botonSwitch.classList.remove('active');
}

