let form = document.getElementById("jogoseconsoles");
let resultado = document.getElementById("id_catalogo")

let jogos = [];


form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let nome = document.getElementById("id_nome").value
    let data = document.getElementById("id_data").value
    let dev = document.getElementById("id_dev").value 

    let jogo = {
        nome_chave: nome,
        data_chave: data,
        dev_chave: dev}

        jogos.push(jogo);
        console.log(jogos)

        cadastrarLocalStorage("games", jogos)

        listarLocalStorage();
});

function listarLocalStorage(){
         
    function mostrarFila(){
    id_catalogo.innerHTML = "";

    let local_storage = localStorage.getItem("games");
    if(local_storage == null){
        id_catalogo.innerHTML = `<p>Não há nenhum forte o suficiente.</p>`
    }
    else{
        jogos = local_storage.split(", ");
        for(let i = 0; i < jogos.length; i++){
        id_catalogo.innerHTML +=
        `<p> ${jogos[i]}  motivadores</p>

        <input
        type="button"
        onclick="editar(${i})"
        value="Editar">

        <input
        type="button"
        onclick="excluir(${i})"
        value="Excluir">
        
        <br/>`}
    }
};

function cadastrarLocalStorage(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor))
}

for (let i = 0 ; i < jogos.length ; i++ ){

    function editar(indice){
    fila_espera[indice] = prompt(`Digite o novo nome: `);

    localStorage.setItem("fila_data", fila_espera.join(", "));

    mostrarFila();
}

function excluir(indice){
    fila_espera.splice(indice, 1);
    if(fila_espera.length == 0){
        localStorage.removeItem("fila_data")
    }
    else{
        localStorage.setItem("fila_data", fila_espera.join(", "))
    }

    mostrarFila();}

}};