let form = document.getElementById("id_formulario");
let resultado_cadastro = document.getElementById("id_cadastrados");
let turma = []

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    let nome = document.getElementById("id_nome").value;
    let matricula = document.getElementById("id_matricula").value;

    let pessoa = {
        nome_chave: nome,
        matricula_chave: matricula
    }

    turma.push(pessoa);
    console.log(turma);

    cadastrarLocalStorage("infor2", turma);
});

function listarLocalStorage(){
    console.log(JSON.parse(localStorage.getItem("infor2")))
}

function cadastrarLocalStorage(chave, valor){
    localStorage.setItem(chave, JSON.stringify(valor))
}