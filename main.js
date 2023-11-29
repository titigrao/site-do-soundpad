function som3x3(idElemento){
    document.querySelector(idElemento).play();
}

let contador = 0;

const listaDasTeclas = document.querySelectorAll(".tecla")

while (contador < listaDasTeclas.length){
    const Instrumento = listaDasTeclas[contador].classList
    console.log(Instrumento[1])

    listaDasTeclas[contador].onclick = function(){

        som3x3(`#som_${Instrumento[1]}`);
    }
    contador = contador + 1;
}