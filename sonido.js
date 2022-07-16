const play = document.querySelector('#play');
const pausar = document.querySelector('#pause');
const nuevo = document.querySelector('#nuevo');

var musicas = ['./songs/bad_bunny_te_deseo_lo_mejor.mp3','./songs/marshmello_ft._bastille_happier_official.mp3','./songs/post_malone_better_now.mp3','./songs/Ed Sheeran Photograph Official.mp3'];
var sonido = new Audio(musicas[Math.floor(Math.random()*musicas.length)]); 

function reproducir(){
    sonido.loop = true;
    sonido.play();
}

function pause(){
    sonido.pause();
}

function cargarNuevo(){
    sonido.pause();
    sonido = new Audio(musicas[Math.floor(Math.random()*musicas.length)]);
    console.log("cargando nuevo");
};

play.addEventListener('click', reproducir);
pausar.addEventListener('click', pause);
nuevo.addEventListener('click', cargarNuevo);


