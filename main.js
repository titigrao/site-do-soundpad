function som3x3(idElemento){
    document.querySelector(idElemento).play();
}

const listaDasTeclas = document.querySelectorAll(".tecla")

for (let contador = 0; contador < listaDasTeclas.length;contador++){
    const Instrumento = listaDasTeclas[contador].classList
    console.log(Instrumento[1])

    listaDasTeclas[contador].onclick = function(){

        som3x3(`#som_${Instrumento[1]}`);
    }
}