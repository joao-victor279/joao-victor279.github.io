let form = document.getElementById("id_formulario");

form.addEventListener(("submit"), (e)=>{
    e.preventDefault();
    console.log("Aurou")

    let nome = document.getElementById("id_nome").value;

    let idade = document.querySelector("#id_idade").value;

    let altura = document.querySelector("#id_altura").value;
    altura = Number(altura.replace(',', '.'));


    let resultado = document.getElementById("id_result");
    resultado.innerHTML += 
    `<p>Nome: ${nome} - Idade: ${idade} - Altura: ${altura}</p><br/>`;

    });