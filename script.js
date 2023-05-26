document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLowerCase())             // tolowercase por conta do nome dos arquivos
})

document.querySelector(".composer button").addEventListener("click", () => {         // seleção do campo pra fazer a função de criar o ritmo
    let song = document.querySelector("#input").value

    if (song !== "") {                          // se não está vazia...
        let songArray = song.split("")         // responsável por criar o array sendo cada item uma letra digitada
        playComposition(songArray)
    }
})


function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)           // o template string serve pra criar a dinâmica
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)     // procura uma div que tenha o atributo data-key e seu devido valor

    if (audioElement) {               // se ele existir...
        audioElement.currentTime = 0         // manipulação do audio que manda o ponteiro de volta pro segundo 0, resetando e permitindo tocar em maior velocidade sem esperar o audio acabar
        audioElement.play()           // função nativa que toca o áudio do HTML
    }

    if (keyElement) {                             // efeito do button press
        keyElement.classList.add("active")

        setTimeout(() => {
            keyElement.classList.remove("active")
        }, 200)
    }
}

function playComposition(songArray) {
    let wait = 0

    for(let songItem of songArray) {      // faz um loop no array e armazena os valores (sequência) dentro de songItem
        setTimeout(() => {                 // função de time pra cadência ser 1 áudio a cada 250ms
            playSound(`key${songItem}`)
        }, wait)
        wait+= 250
    }
}