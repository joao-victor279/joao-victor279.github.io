let form = document.getElementById("jogoseconsoles");
let catalogo = document.getElementById("id_catalogo");
let jogos = [];

document.addEventListener("DOMContentLoaded", () => {
    
    let user = localStorage.getItem("user");

    if(user == null){
        user = prompt("Digite seu nome:");
        localStorage.setItem("user", user);
    }

    document.getElementById("usuario").innerHTML =
        `<h1 id = "Nome_usuario">Catálogo do usuário: ${user}<h1>`;

    listarLocalStorage();
});

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let nome = document.getElementById("id_jogo").value
    let data = document.getElementById("id_data").value
    let dev = document.getElementById("id_dev").value 


    let jogo = {
        nome_chave: nome,
        data_chave: data,
        dev_chave: dev
    }
    form.reset();
               
    cadastrarLocalStorage(jogo)

})


function listarLocalStorage(){
    catalogo.innerHTML = "";

    let local_storage = JSON.parse(localStorage.getItem("games"));
    console.log(local_storage)
    if(local_storage == null){
        catalogo.innerHTML += `<p>Não há jogos no catalogo.</p>`
    }
    else {
        let local_storage = jogos

        for(let i = 0; i < jogos.length; i++){
        catalogo.innerHTML += 
        `<p>|N°: ${[i + 1]} <br>|Jogo: ${jogos[i].nome_chave} <br>|Lançamento: ${jogos[i].data_chave} <br>| Dev: ${jogos[i].dev_chave}</p>

        <input
        type="button"
        onclick="editar(${[i]})"
        value="Editar">

        <br>

        <input
        type="button"
        onclick="excluir(${[i]})"
        value="Excluir">
        
        <br/>`;
        

        };
    }
};

function cadastrarLocalStorage(jogo_parametro){
    
    jogos.push(jogo_parametro)
    localStorage.setItem("games", JSON.stringify(jogos))
    console.log(jogos)

    listarLocalStorage()
    
}

function editar(indice){
    
    jogos[indice].nome_chave = prompt(`Digite o novo jogo: `, jogos[indice].nome_chave);
    jogos[indice].data_chave = prompt(`Digite a data de lançamento do novo jogo: `, jogos[indice].data_chave);
    jogos[indice].dev_chave = prompt(`Digite a desenvolvedora do novo jogo: `, jogos[indice].dev_chave);

    localStorage.setItem("games", JSON.stringify(jogos));
    console.log(indice)
    listarLocalStorage();
}
    
function excluir(indice){
    jogos.splice(indice, 1);
    if(jogos.length == 0){
        localStorage.removeItem("games")
    }
    else{
        localStorage.setItem("games", JSON.stringify(jogos))
    }

    listarLocalStorage();
}

