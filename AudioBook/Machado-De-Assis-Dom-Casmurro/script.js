const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');
const botaoRetroceder = document.getElementById('anterior');
const botaoPlayPause = document.getElementById('play-pause');
const botaoAvançar = document.getElementById('proxima');
const numeroCapitulos = 10;
let estaTocando = 0;
let capituloAtual = 1;


function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}


function pausarFaixa() {
    audioCapitulo.pause()
    botaoPlayPause.classList.add("bi-play-circle-fill");
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
}


function tocarOuPausar() {
    if (estaTocando === 0) {
        tocarFaixa();
        estaTocando = 1;
    } else {
        pausarFaixa();
        estaTocando = 0;
    }
}


/*function faixaAnterior() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual -= 1;
    }
    audioCapitulo.src = ".books/dom-casmurro/" + capituloAtual + ".mp3";
    trocaNomeCapitulo();
    tocarFaixa();
    estaTocando = 1;
} */


function faixaAnterior() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual -= 1;
    }

    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";

    // Adiciona um evento de carregamento antes de chamar tocarFaixa()
    audioCapitulo.addEventListener('canplaythrough', function() {
        trocaNomeCapitulo();
        tocarFaixa();
        estaTocando = 1;
    });

    // Carrega o áudio
    audioCapitulo.load();
}


function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    } else {
    capituloAtual += 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/" + capituloAtual + ".mp3";
    trocaNomeCapitulo();
    tocarFaixa();
    estaTocando = 1;
}


function trocaNomeCapitulo() {
    nomeCapitulo.innerText = 'Capítulo '+ capituloAtual
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoRetroceder.addEventListener('click', faixaAnterior);
botaoAvançar.addEventListener('click', proximaFaixa);
audioCapitulo.addEventListener('ended', proximaFaixa) /* quando o áudio chegar ao final da reprodução, 
a função proximaFaixa será acionada automaticamente */
