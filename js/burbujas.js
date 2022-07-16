function crearEsfera(){
    const section = document.querySelector('.container');
    const crearElemento = document.createElement('span');

    var longitud = Math.random() * 20;
    crearElemento.style.width = longitud + 'px';
    crearElemento.style.height = longitud + 'px';
    crearElemento.style.left = Math.random() * innerWidth + "px";
    section.appendChild(crearElemento);

    setTimeout(() => {
        crearElemento.remove()
    }, 16000)
}

setInterval(crearEsfera, 1000);
