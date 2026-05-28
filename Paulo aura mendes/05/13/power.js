//variáveis
let form = document.getElementById("id_loterica")

let fila_espera = []

let resultado_fila = document.getElementById("resultado_fila")

let btn_atender = document.getElementById("btn_atender");


//funções
function cadastrar(nome_parametro, radio_parametro){

    if(radio_parametro === "prioridade"){
        fila_espera.unshift(nome_parametro);
    }
    else{
        fila_espera.push(nome_parametro);
    }

    mostrarFila();
}

function mostrarFila(){
    resultado_fila.innerHTML = ""
        
    for(let i = 0; i < fila_espera.length; i++){       
        resultado_fila.innerHTML +=
        `<p>Motivação de ${fila_espera[i]} vai ser colocada à prova daqui a ${i} motivadores</p>
        <input
        type="button"
        onclick="editar(${i})"
        value="Editar"
        id="btn_editar">
        <input
        type="button"
        onclick="excluir(${i})"
        value="Excluir"
        id="btn_excluir">
        <br/>`;
    };
};

function atender(){
    fila_espera.shift();

    mostrarFila();
};

function editar(indice){
    fila_espera[indice] = prompt(`Digite o novo nome: `);
    mostrarFila();
    console.log()
}

function excluir(indice){
    fila_espera.splice(indice, 1);
    mostrarFila();
    console.log()
}


//eventos
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let nome = document.getElementById("id_nome").value;
    
    let radio = document.querySelector('input[name="radio_p"]:checked').value;
    
    cadastrar(nome, radio);

});


btn_atender.addEventListener('click', (e) =>{
    e.preventDefault();

    atender()

    document.body.style.backgroundImage = "url('vergil-judgement-cut-end.gif')";
    
    setTimeout(() => {
        document.body.style.backgroundImage = "url('vergil.png')";
    }, 13500);
})

btn_editar.addEventListener('click', (e) =>{
    e.preventDefault();

    editar()
})

btn_atender.excluir.addEventListener('click', (e) =>{
    e.preventDefault();

    excluir()
})