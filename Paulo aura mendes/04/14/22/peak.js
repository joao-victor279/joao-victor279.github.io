document.addEventListener('DOMContentLoaded', (evento)=>{
    
    let bloco = document.createElement("div");
    bloco.innerHTML = "<strong>Bloco</strong>"
    
    bloco.style.backgroundColor = "darkblue";
    bloco.style.color = "white"
    bloco.style.fontSize = "12px"
    bloco.style.width = "100px"
    bloco.style.height = "100px"
    bloco.style.display = "flex"
    bloco.style.justifyContent = "center"
    bloco.style.alignItems = "center"

    document.body.appendChild(bloco)

    bloco.addEventListener('click', evento => {
        evento.preventDefault();
        bloco.textContent = "Clicado";
        bloco.style.backgroundColor = "lightblue"
        bloco.style.color = "darkblue"
    });

    bloco.addEventListener('dblclick', evento => {
        evento.preventDefault();
        bloco.textContent = "Clique duplo";
        bloco.style.backgroundColor = "red"
        bloco.style.color = "white"
    });

    bloco.addEventListener('mouseover', evento => {
        evento.preventDefault();
        bloco.textContent = "Entrou";
        bloco.style.backgroundColor = "gray"
        bloco.style.color = "white"
    });

    bloco.addEventListener('mouseout', evento => {
        evento.preventDefault();
        bloco.textContent = "Saiu";
        bloco.style.backgroundColor = "green"
        bloco.style.color = "white"
    });
        document.addEventListener(' DOMContentLoaded', (evento) => {
            let caixa_texto = document.createElement("input");
            let caixa_texto2 = document.createElement("input");
            let informacao = document.createElement("h5");
            informacao.textContent = (informacao);

            document.body.prepend(caixa_texto)
            document.body.prepend(caixa_texto2)
    })
});
