function sortear(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numeroAleatorio = sortear(1, 10);
let tentativas = 3;

function desativarBotao(){
    let desativar = document.querySelectorAll(".botoes")
    desativar.forEach(botao =>{
        botao.disabled = true;
    })
}

function verificarNumero(numeroEscolhido){
    numeroEscolhido = Number(numeroEscolhido)

    tentativas--;
    
    if(numeroEscolhido === numeroAleatorio){
        alert(`JACKPOT!!!`);
        desativarBotao();
    }
    else{
        let dica = "";

        if(numeroEscolhido < numeroAleatorio){
            dica = (`Quase hein. O número secreto é maior que ${numeroEscolhido}`)
        }
        else{
            dica = (`Quase hein. O número secreto é menor que ${numeroEscolhido}`)
        }

        if(tentativas > 0){
            alert(`${dica}\n Tentativas: ${tentativas}`)
        }
        else{
            desativarBotao();
            
            if(confirm(`GAME OVER!\n O número secreto era ${numeroAleatorio}\n RETRY?`)){
                location.reload();
            }
        }
        
    }
}

window.onload = function(){
    let botoes = document.querySelectorAll(".botoes");
    botoes.forEach(function(button){
        button.onclick = function(){
            this.disabled = true;
            verificarNumero(this.innerText)
        }
    })
}