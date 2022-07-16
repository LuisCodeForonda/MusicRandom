const botonlink = document.querySelector('.section__link');

function Frase(frase, autor) {
    this.frase = frase;
    this.autor = autor;
}

let listaFrases = [];
listaFrases.push(new Frase("La paz viene de adentro no la busques afuera.", "pensamiento zen"));
listaFrases.push(new Frase("Sólo hay una cosa que hace que un sueño sea imposible de alcanzar: el miedo al fracaso", "Pablo Coelho"));
listaFrases.push(new Frase("Todo lo que somos es el resultado de lo que hemos pensado", "pensamiento zen"));
listaFrases.push(new Frase("La vida feliz no se encuentra. Tu la haces", "Camilla Eyring Kimball"));
listaFrases.push(new Frase("Lo infinito esta en lo finito de cada instante", "pensamiento zen"));
listaFrases.push(new Frase("La vida es demasiado corta para que la hagamos mezquina", "Benjamin Disraeli"));
listaFrases.push(new Frase("El conocimiento es aprender algo cada dia. La sabiduria es dejar de lado algo cada dia", "Pensamiento Zen"));
listaFrases.push(new Frase("No es inutil es este mundo quien aligera la carga de este a los demas", "Charles Dickens"));
listaFrases.push(new Frase("Tu hogar es donde tus pensamientos encuentren la paz", "Pensamiento Zen"));
listaFrases.push(new Frase("Olvida los fracasos. Quedate con las lecciones", "Dalai Lama"));
listaFrases.push(new Frase("Ser feliz no significa que todo es perfecto. Significa que has decidido ver mas alla de las imperfecciones", "Pensamiento Zen"));
listaFrases.push(new Frase("Tu gran oportunidad puede estar justo donde estas ahora", "Napoleon Hill"));
listaFrases.push(new Frase("Vive calmadamente. El tiempo en que las flores florecen llegará", "Pensamiento Zen"));
listaFrases.push(new Frase("No puedes cambiar dónde has estado, pero si puedes cambiar hacia dónde vas", "T. D. Jakes"));
listaFrases.push(new Frase("Cada mañana nacemos de nuevo, lo que hacemos hoy es lo que más importa", "Pensamiento Zen"));
listaFrases.push(new Frase("Los viajes y los cambios de lugar dan nuevo vigor a la mente", "Seneca"));
listaFrases.push(new Frase("La culpa, el arrepentimiento, el resentimiento, la tristeza y cualquier forma contraria al perdón, es causada por un exceso de pasado y una falta de presente", "Pensamiento Zen"));
listaFrases.push(new Frase("La persona no puede descubir nuevos océanos si no tiene el valor de perder de vista la orilla", "Andre Gide"));
listaFrases.push(new Frase("Ten confianza en ti mismo. No en aquel que crees que deberias ser, sino en aquel que eres", "Penzamiento Zen"));


function reqData() {
    var mensaje = listaFrases[Math.floor(Math.random()*listaFrases.length)];
    document.querySelector('.frase').innerHTML = mensaje.frase;
    document.querySelector('.autor').innerHTML = mensaje.autor;
    console.log(Math.floor(Math.random()*listaFrases.length));
}

setInterval(reqData, 32000);

reqData();

botonlink.addEventListener('click', () =>{
    var ruta = window.location.pathname;
    console.log(ruta)
});

