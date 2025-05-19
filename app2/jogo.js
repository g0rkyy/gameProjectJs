var height = 0
var width = 0
var vidas = 1
var tempo = 15

var timingMosca = 1500

var nivel = window.location.search 
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500
    timingMosca = 1500
}else if (nivel === 'dificil'){
    ///1000
    timingMosca = 1000
}else if (nivel === 'hard'){
    //800
    timingMosca = 800
}

function ajustarTamanho(){
    height = window.innerHeight
    width = window.innerWidth

    console.log(width, height)
}
ajustarTamanho()

var cronometro = setInterval(function(){

    tempo -= 1
    if (tempo < 0){
        clearInterval(cronometro)
        clearInterval(dropMosca)
        window.location.href = 'winner.html'
    }else{
    document.getElementById('timing').innerHTML = tempo 
    }    
}, 1000)

function positionRandom(){

    //remover o mosquito anterior(caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

       // console.log('elemento selecionado foi: v' + vidas)
       if(vidas > 3){
        window.location.href = 'game_over.html'
       }else{
        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

        vidas++
            }
    }
    

    var positionX = Math.floor(Math.random() * width ) - 90
    var positionY = Math.floor(Math.random() * height ) - 90

    positionX = positionX < 0 ? 0: positionX
    positionY = positionY < 0 ? 0: positionY

    console.log(positionX, positionY)

    //criar elemento html
    var mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = randomTamanho() + ' ' + ladoAleatorio()
    mosca.style.left = positionX + 'px'
    mosca.style.top = positionY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosquito'
    mosca.onclick = function(){
        this.remove()
   }
   
    document.body.appendChild(mosca)



}

function randomTamanho(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosca'

        case 1: 
            return 'mosca2'

        case 2:
            return 'mosca3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'

        case 1: 
            return 'ladoB'

    }
}