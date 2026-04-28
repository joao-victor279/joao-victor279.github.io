document.addEventListener('DOMContentLoaded', (evento) =>{

    let saco = document.createElement("div");
    saco.innerHTML = "<strong>Saco de Pancadas</strong>";
    
    saco.style.backgroundColor = "red";
    saco.style.color = "white";
    saco.style.fontSize = "15px";
    saco.style.width = "120px";
    saco.style.height = "220px";
    saco.style.display = "flex";
    saco.style.justifyContent = "center";
    saco.style.alignItems = "center"
    document.body.appendChild(saco);

    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.flexDirection = "column";

    let contador_texto = document.createElement("cont");
    contador_texto.textContent = "Golpes: ";
    document.body.appendChild(contador_texto);

    let contador = document.createElement("span");
    contador.textContent = "0";
    contador_texto.appendChild(contador);

    let golpes = 0;
    
    function contar(){
        golpes++;
        contador.textContent = golpes;
    }

    saco.addEventListener('click', (evento) =>{
        evento.preventDefault();
        saco.textContent = "JAB";
        saco.style.color = "black";
        contar();
    });

    saco.addEventListener('contextmenu', (evento) =>{
        evento.preventDefault();
        saco.textContent = "DIRETO";
        saco.style.color = "black";
        contar();
    });

    
    document.addEventListener('keydown', evento =>{
        if(evento.key === 'a' || evento.key === 'd'){
            saco.textContent = "GANCHO"
            saco.style.color = "black";
            contar();
        }
        
        if(evento.key === 'w'){
            saco.textContent = "UPPERCUT"
            saco.style.color = "black";
            contar();
        }

        if(evento.key === 's'){
            saco.textContent = "ESQUIVA"
            saco.style.color = "blue";
        }

    });

    saco.addEventListener('mouseover', (evento) =>{
        saco.textContent = "EM GUARDA"
        saco.style.color = "yellow"
    });

    saco.addEventListener('mouseout', (evento) =>{
        saco.textContent = "PODE BATER"
        saco.style.color = "white"
    });

    


});
