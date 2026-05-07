function sortear(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let numeroAleatorio = sortear(10, 1)
let tentativas = 3

function verificar(numeroSelecionado){

    numeroSelecionado = Number(numeroSelecionado)

    if(tentativas <= 0){
        alert(`Descontrói aí. O número era ${numeroAleatorio}`)
        return;
    }

    function desativarBotao(){
        let botoes = document.querySelectorAll(".botoes")
        botoes.forEach(botao => botao.disabled = true)
    }
    
    tentativas--;

    if(numeroSelecionado === numeroAleatorio){
        alert(`Caramba cara. Senti tua aura daqui. Constrói aí man.`)
        desativarBotao()
    }
    else{
        let dica = "";

        if(numeroSelecionado > numeroAleatorio){
            dica = `PRA BAIXO!!! O número é menor que ${numeroSelecionado}.`
        }
        else{
            dica = `PRA CIMA!!! O número é maior que ${numeroSelecionado}.`
        }

        if(tentativas > 0){
            alert(`${dica} \n Vê se faz direito agora tô te dando ${tentativas} chances`)
        }
        else{
            alert(`sai do curso. O número era ${numeroAleatorio}`)
            desativarBotao()
        }
    }
}

window.onload = function(){
    let botoes = document.querySelectorAll(".botoes")

    botoes.forEach(function(button){
        button.onclick = function(){
            verificar(this.innerText)
        }
    })
}